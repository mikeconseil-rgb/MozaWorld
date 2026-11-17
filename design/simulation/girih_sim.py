"""Simulateur abstrait de la mosaique Girih : routes, capture, niveaux dynamiques.

Modele volontairement simple pour comparer des variantes de regles, pas pour
equilibrer le jeu final. Python pur, aucune dependance.
Usage : python3 girih_sim.py  (ecrit results.json a cote du script)
"""
import json, math, os, random
from collections import deque

TYPES = {  # tuile, type, portes, frequence, difficulte de base
    "RES": ("Hexagone allonge", 6, 340),
    "ANT": ("Noeud papillon", 6, 220),
    "MAR": ("Losange", 4, 180),
    "DON": ("Pentagone", 5, 140),
    "CIT": ("Decagone", 10, 106),
}
BASE_DIFF = {"RES": 1.0, "ANT": 2.0, "MAR": 1.5, "DON": 3.0, "CIT": 3.5}


# ---------------------------------------------------------------- carte
def make_map(rng, w=24, h=20):
    """Grille hexagonale bruitee ~ graphe de voisinage d'une mosaique.
    Les portes de chaque tuile limitent son nombre de routes."""
    n = w * h
    pool = [t for t, (_, _, f) in TYPES.items() for _ in range(f)]
    types = [rng.choice(pool) for _ in range(n)]
    pos = [(i % w + (0.5 if (i // w) % 2 else 0), i // w) for i in range(n)]
    adj = [set() for _ in range(n)]
    for i in range(n):
        x, y = i % w, i // w
        off = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        off += [(1, 1), (1, -1)] if y % 2 else [(-1, 1), (-1, -1)]
        for dx, dy in off:
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h:
                adj[i].add(ny * w + nx)
    # decagones : liens supplementaires (rayon 2) jusqu'a 10 portes
    for i in range(n):
        if types[i] == "CIT":
            ring2 = {k for j in adj[i] for k in adj[j]} - adj[i] - {i}
            for k in rng.sample(sorted(ring2), min(4, len(ring2))):
                adj[i].add(k); adj[k].add(i)
    # tuiles a peu de portes : couper des liens en trop
    for i in range(n):
        doors = TYPES[types[i]][1]
        while len(adj[i]) > doors:
            k = rng.choice(sorted(adj[i]))
            adj[i].discard(k); adj[k].discard(i)
    # niveaux : regions de signe coherent, |niveau| croit avec la distance au centre
    cx, cy = w / 2, h / 2
    seeds = [(rng.uniform(0, w), rng.uniform(0, h), rng.choice((-1, 1))) for _ in range(8)]
    level = []
    for i in range(n):
        x, y = pos[i]
        d = math.hypot(x - cx, y - cy) / math.hypot(cx, cy)
        sign = min(seeds, key=lambda s: (s[0] - x) ** 2 + (s[1] - y) ** 2)[2]
        mag = max(0, min(7, round((d ** 1.4) * 9 + rng.gauss(0, 0.8))))
        level.append(sign * mag)
    start = min(range(n), key=lambda i: (pos[i][0] - cx) ** 2 + (pos[i][1] - cy) ** 2)
    types[start] = "RES"; level[start] = 0
    for j in adj[start]:
        level[j] = max(-1, min(1, level[j]))
    return {"n": n, "types": types, "adj": adj, "level": level, "start": start}


# ---------------------------------------------------------------- regles
DEFAULT_RULES = dict(
    build_roads=False,      # routes a construire (cout en ressources)
    antre_passage=True,     # un Antre vaincu devient passage
    cit_range=3,            # portee de protection d'une Citadelle
    rosace_bonus=False,     # bonus si on possede une Citadelle et tous ses voisins
    contagion=True,         # les zones -6/-7 font baisser leurs voisines
    hand_limit=None,        # nb max de pouvoirs actifs (jeu de cartes)
    caravan=False,          # valeur d'une Ressource selon la longueur de route
    alignment=False,        # capturer pousse la zone vers l'alignement du joueur
    keep_one=False,         # a la mort, on garde 1 carte (contraire aux consignes)
    raids=0.08,             # probabilite par tour qu'une faction attaque
    hp=3,                   # blessures avant la mort (1 = mort au premier echec)
)

STRATS = {
    "prudent":   dict(risk=0.75, pref={}),
    "agressif":  dict(risk=0.45, pref={}),
    "marchand":  dict(risk=0.65, pref={"MAR": 1.6, "RES": 1.3}),
    "chasseur":  dict(risk=0.55, pref={"DON": 1.8, "ANT": 1.4}),
}


def sigmoid(z):
    return 1 / (1 + math.exp(-z))


def run(rules, strat, seed, turns=150):
    rng = random.Random(seed)
    m = make_map(rng)
    T, A, L = m["types"], m["adj"], m["level"][:]
    owned = {m["start"]}
    cards = []           # pouvoirs : liste de forces
    creatures = 0.0
    gold, wealth = 0.0, 0.0
    stats = dict(turns=0, peak=1, died=False, death_cause=None, first_power=None,
                 isolations=0, max_abs=0, blocked_start=False, rosaces=0,
                 owned_by_type={k: 0 for k in TYPES})
    s = STRATS[strat]
    align = rng.choice((-1, 1))
    lives = 2 if rules["keep_one"] else 1
    hp = rules["hp"]

    def power():
        hand = sorted(cards, reverse=True)
        if rules["hand_limit"]:
            hand = hand[: rules["hand_limit"]]
        return 1.0 + sum(hand) + creatures + 0.15 * math.sqrt(wealth)

    def through(i):  # une tuile possedee laisse-t-elle passer la route ?
        if T[i] == "DON":
            return False  # cul-de-sac
        if T[i] == "ANT" and not rules["antre_passage"]:
            return False
        return True
    rosace_done = set()

    def connected_from(src_set, ok):
        seen, q = set(src_set), deque(src_set)
        while q:
            u = q.popleft()
            for v in A[u]:
                if v in owned and v not in seen and ok(v):
                    seen.add(v); q.append(v)
        return seen

    def protected():
        prot = set()
        for c in owned:
            if T[c] != "CIT":
                continue
            rng_c = rules["cit_range"] + (1 if abs(L[c]) >= 5 else 0)
            dist = {c: 0}; q = deque([c])
            while q:
                u = q.popleft()
                if dist[u] >= rng_c:
                    continue
                for v in A[u]:
                    if v in owned and v not in dist:
                        dist[v] = dist[u] + 1; q.append(v)
            prot |= set(dist)
        return prot

    # le depart est-il enferme par des barrages ?
    front0 = [v for v in A[m["start"]] if T[v] not in ("ANT", "DON")]
    stats["blocked_start"] = len(front0) == 0

    for t in range(turns):
        stats["turns"] = t + 1
        # ---- revenus
        hubs = {i for i in owned if T[i] in ("MAR", "CIT")} | {m["start"]}
        linked = connected_from(hubs, through)
        markets = sum(1 for i in owned if T[i] == "MAR")
        for i in owned:
            if T[i] == "RES" and i in linked:
                val = 1 + abs(L[i]) * 0.3
                if rules["caravan"]:
                    val *= 1.3
                gold += val * (1 + 0.25 * markets)
        wealth += gold * 0.1

        # ---- choisir une cible au front
        front = {v for u in owned if through(u) or u == m["start"] for v in A[u] if v not in owned}
        P = power()
        best, best_score = None, -1
        for v in front:
            diff = BASE_DIFF[T[v]] + abs(L[v]) * 1.1
            p = sigmoid((P - diff) * 1.6)
            score = p * s["pref"].get(T[v], 1.0) * (1 + abs(L[v]) * 0.2)
            if p >= s["risk"] and score > best_score:
                best, best_score = v, score
        if best is None and front:
            # rien de sur : on farme (petit gain) ou on tente la moins risquee
            if rng.random() < 0.7:
                wealth += 1
                best = None
            else:
                best = min(front, key=lambda v: BASE_DIFF[T[v]] + abs(L[v]) * 1.1)
        if best is not None:
            diff = BASE_DIFF[T[best]] + abs(L[best]) * 1.1
            if rules["build_roads"]:
                cost = 2 + abs(L[best])
                if gold < cost:
                    wealth += 0.5
                    best = None
                else:
                    gold -= cost
        if best is not None:
            p = sigmoid((P - diff) * 1.6)
            if rng.random() < p:
                owned.add(best)
                ty = T[best]
                stats["owned_by_type"][ty] += 1
                mag = abs(L[best])
                if ty == "DON":
                    cards.append(0.6 + 0.35 * mag)
                elif ty == "CIT":
                    cards.append(0.3 + 0.2 * mag)
                elif ty == "ANT":
                    creatures += 0.4 + 0.25 * mag
                if (ty in ("DON", "CIT", "ANT")) and stats["first_power"] is None:
                    stats["first_power"] = t + 1
                stats["max_abs"] = max(stats["max_abs"], mag)
                if rules["alignment"] and L[best] * align < 0:
                    L[best] = -L[best] // 2  # la zone bascule vers notre camp
                if rules["rosace_bonus"]:
                    for c in [x for x in owned if T[x] == "CIT"]:
                        if A[c] <= owned and c not in rosace_done:
                            rosace_done.add(c); cards.append(2.0); stats["rosaces"] += 1
            else:
                hp -= 2 if diff - P > 1.5 else 1
                if hp <= 0:
                    hp = rules["hp"]
                    lives -= 1
                    if lives <= 0:
                        stats["died"] = True; stats["death_cause"] = "combat"
                        break
                    cards = sorted(cards, reverse=True)[:1]; creatures = 0; gold = 0
                    owned = {m["start"]}

        if t % 5 == 4:
            hp = min(rules["hp"], hp + 1)
        # ---- monde dynamique : contagion
        if rules["contagion"]:
            prot = protected()
            for i in range(m["n"]):
                if L[i] <= -6 and rng.random() < 0.05:
                    for v in A[i]:
                        if v not in prot and L[v] > -7:
                            L[v] -= 1
        # ---- raids de factions : coupent une route
        if rng.random() < rules["raids"] and len(owned) > 1:
            prot = protected()
            targets = [i for i in owned if i not in prot and i != m["start"]]
            if targets:
                lost = rng.choice(targets)
                owned.discard(lost)
                keep = connected_from({m["start"]} | {i for i in owned if T[i] == "CIT"}, through)
                cut = owned - keep
                if cut:
                    stats["isolations"] += 1
                    for i in cut:  # zone isolee : perd un palier vers 0 puis est perdue
                        L[i] -= (1 if L[i] > 0 else -1 if L[i] < 0 else 0)
                        if rng.random() < 0.5:
                            owned.discard(i)
        stats["peak"] = max(stats["peak"], len(owned))
        if len(owned) >= m["n"] * 0.5:
            break
    if not stats["died"]:
        stats["death_cause"] = "survit"
    stats["corrupted_pct"] = round(100 * sum(1 for x in L if x <= -6) / m["n"], 1)
    stats["final_owned"] = len(owned)
    return stats


SCENARIOS = [
    ("S01", "Regles de base, joueur prudent", {}, "prudent"),
    ("S02", "Regles de base, joueur agressif", {}, "agressif"),
    ("S03", "Regles de base, joueur marchand", {}, "marchand"),
    ("S04", "Regles de base, chasseur de donjons", {}, "chasseur"),
    ("S05", "Routes a construire, prudent", {"build_roads": True}, "prudent"),
    ("S06", "Routes a construire, marchand", {"build_roads": True}, "marchand"),
    ("S07", "Antre vaincu reste un barrage", {"antre_passage": False}, "prudent"),
    ("S08", "Citadelle portee 1", {"cit_range": 1}, "prudent"),
    ("S09", "Citadelle portee 5", {"cit_range": 5}, "prudent"),
    ("S10", "Bonus de rosace (Citadelle + tous ses voisins)", {"rosace_bonus": True}, "prudent"),
    ("S11", "Sans contagion", {"contagion": False}, "prudent"),
    ("S12", "Raids frequents (factions agressives)", {"raids": 0.25}, "prudent"),
    ("S13", "Main limitee a 5 pouvoirs (jeu de cartes)", {"hand_limit": 5}, "chasseur"),
    ("S14", "Main limitee a 3 pouvoirs", {"hand_limit": 3}, "chasseur"),
    ("S15", "Caravanes : routes longues = plus de valeur", {"caravan": True}, "marchand"),
    ("S16", "Alignement : capturer fait basculer la zone", {"alignment": True}, "prudent"),
    ("S17", "Alignement + chasseur de donjons", {"alignment": True}, "chasseur"),
    ("S18", "Heritage : on garde 1 carte a la mort", {"keep_one": True}, "agressif"),
    ("S19", "Monde dur : raids + contagion + routes a construire", {"raids": 0.2, "build_roads": True}, "prudent"),
    ("S21", "Mort au premier echec (permadeath stricte)", {"hp": 1}, "prudent"),
    ("S20", "Combo propose : rosace + main 5 + alignement", {"rosace_bonus": True, "hand_limit": 5, "alignment": True}, "prudent"),
]


def main(seeds=300):
    out = []
    for sid, label, over, strat in SCENARIOS:
        rules = dict(DEFAULT_RULES, **over)
        rs = [run(rules, strat, seed) for seed in range(seeds)]
        n = len(rs)
        fp = [r["first_power"] for r in rs if r["first_power"]]
        agg = dict(
            id=sid, label=label, strat=strat,
            death_pct=round(100 * sum(r["died"] for r in rs) / n, 1),
            mean_turns=round(sum(r["turns"] for r in rs) / n, 1),
            mean_peak=round(sum(r["peak"] for r in rs) / n, 1),
            reach5_pct=round(100 * sum(r["max_abs"] >= 5 for r in rs) / n, 1),
            rosaces=round(sum(r["rosaces"] for r in rs) / n, 2),
            reach7_pct=round(100 * sum(r["max_abs"] >= 7 for r in rs) / n, 1),
            first_power=round(sum(fp) / len(fp), 1) if fp else None,
            isolations=round(sum(r["isolations"] for r in rs) / n, 2),
            corrupted_pct=round(sum(r["corrupted_pct"] for r in rs) / n, 1),
            blocked_start_pct=round(100 * sum(r["blocked_start"] for r in rs) / n, 1),
        )
        out.append(agg)
        print(agg)
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "results.json"), "w") as f:
        json.dump(out, f, indent=1, ensure_ascii=False)


if __name__ == "__main__":
    main()
