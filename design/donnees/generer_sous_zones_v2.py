"""Liste des 986 sous-zones, version 2 (décisions du 16 novembre 2026).

- Proportions : 383 Ressources, 246 Antres, 182 Assemblées, 130 Donjons, 45 Citadelles.
- Le Losange est l'Assemblée (plus de Marché).
- Les Ressources vont de 0 à 3, sans pôle : elles n'ont pas d'axe.
- Chaque zone a un type de mana, donné par son biome (six familles de quatre biomes).
- Les 30 axes de pôles sont gardés tels quels (choix de l'utilisateur : ce sont des choix moraux,
  aucun des deux pôles n'est le bien ou le mal).
- Les 20 zones déjà écrites par les conteurs (echantillon_v2.json) sont gardées avec leurs
  descripteurs ; leur ancien identifiant est noté dans la colonne ancien_id.

Règle d'unicité (inchangée) : deux zones du même type partagent au plus un descripteur
(biome, culture, axe) ; deux Ressources ne partagent jamais biome et culture à la fois ;
aucune zone n'a les trois descripteurs d'une autre.

Usage : python3 generer_sous_zones_v2.py  -> sous-zones-986-v2.csv à côté du script.
"""
import csv, json, random, itertools, collections, os

ICI = os.path.dirname(os.path.abspath(__file__))

TYPES = [("Ressource", "RES", "Hexagone allongé", 383), ("Antre", "ANT", "Nœud papillon", 246),
         ("Assemblée", "ASS", "Losange", 182), ("Donjon", "DON", "Pentagone", 130),
         ("Citadelle", "CIT", "Décagone", 45)]
ANCIEN_TYPE = {"MAR": "Assemblée", "RES": "Ressource", "ANT": "Antre", "DON": "Donjon", "CIT": "Citadelle"}

MANA = {
    "Feu": ["Volcan", "Désert de sable", "Savane", "Canyon"],
    "Glace": ["Glacier", "Toundra", "Fjord", "Forêt boréale"],
    "Eau": ["Récif", "Archipel", "Delta fluvial", "Mangrove"],
    "Sève": ["Jungle", "Marais", "Forêt de champignons géants", "Oasis"],
    "Pierre": ["Haute montagne", "Cavernes cristallines", "Cité en ruines", "Désert de sel"],
    "Vent": ["Steppe", "Lande", "Iles flottantes", "Falaise côtière"],
}
MANA_DE = {b: m for m, bs in MANA.items() for b in bs}
BIOMES = [b for bs in MANA.values() for b in bs]
CULTURES = ["Nordique", "Celte", "Romaine", "Grecque", "Égyptienne", "Perse", "Mongole", "Chinoise impériale",
            "Japonaise féodale", "Khmère", "Maya", "Aztèque", "Inca", "Andalouse", "Byzantine", "Slave",
            "Zouloue", "Éthiopienne", "Polynésienne", "Inuit", "Mésopotamienne", "Moghole", "Gothique",
            "Vénitienne"]
AXES = ["Ruine/Abondance", "Glace/Feu", "Mort/Vie", "Ombre/Lumière", "Chaos/Ordre", "Corruption/Pureté",
        "Famine/Festin", "Tempête/Calme", "Sécheresse/Déluge", "Rouille/Or", "Cendre/Floraison",
        "Silence/Chant", "Peste/Guérison", "Tyrannie/Liberté", "Cauchemar/Rêve", "Abysse/Ciel",
        "Poison/Nectar", "Brume/Clarté", "Pierre/Cristal", "Sang/Sève", "Nuit/Aurore", "Oubli/Mémoire",
        "Folie/Raison", "Pourriture/Croissance", "Vide/Étoiles", "Fer/Bois", "Os/Corail", "Mensonge/Vérité",
        "Exil/Foyer", "Sommeil/Éveil"]
AXE_DE = {a.split("/")[0]: i for i, a in enumerate(AXES)}


def fixes():
    """Les 20 zones écrites, par type : (biome, culture, axe ou None, ancien_id)."""
    ech = json.load(open(os.path.join(ICI, "echantillon_v2.json"), encoding="utf-8"))
    par = collections.defaultdict(list)
    for r in ech:
        t = ANCIEN_TYPE[r["id"][:3]]
        a = None if t == "Ressource" else AXE_DE[r["pole_moins7"]]
        par[t].append((BIOMES.index(r["biome"]), CULTURES.index(r["culture"]), a, r["id"]))
    return par


def build(seed, fix):
    rng = random.Random(seed)
    used3 = set()
    rows = []
    for tname, pref, tile, count in TYPES:
        res = tname == "Ressource"
        pairs = {k: set() for k in ("bc", "ba", "ca")}
        use = collections.Counter()
        chosen = []

        def ok(b, c, a):
            if (b, c) in pairs["bc"]:
                return False
            if res:
                return True
            return (b, c, a) not in used3 and (b, a) not in pairs["ba"] and (c, a) not in pairs["ca"]

        def take(b, c, a, ancien):
            pairs["bc"].add((b, c))
            use[("b", b)] += 1; use[("c", c)] += 1
            if not res:
                used3.add((b, c, a)); pairs["ba"].add((b, a)); pairs["ca"].add((c, a)); use[("a", a)] += 1
            chosen.append((b, c, a, ancien))

        for b, c, a, ancien in fix.get(tname, []):
            assert ok(b, c, a), ("zone écrite en conflit", ancien)
            take(b, c, a, ancien)
        cands = list(itertools.product(range(len(BIOMES)), range(len(CULTURES)), [None] if res else range(len(AXES))))
        rng.shuffle(cands)
        for b, c, a in cands:
            if len(chosen) == count:
                break
            if not ok(b, c, a):
                continue
            n = len(chosen)
            if use[("b", b)] > n / len(BIOMES) + 2 or use[("c", c)] > n / len(CULTURES) + 2:
                continue
            if not res and use[("a", a)] > n / len(AXES) + 2:
                continue
            take(b, c, a, "")
        if len(chosen) < count:
            return None
        # les zones écrites gardent leur ancien numéro quand il existe encore, le reste est mélangé
        nf = len(fix.get(tname, []))
        reste = chosen[nf:]
        rng.shuffle(reste)
        place = {}
        for z in chosen[:nf]:
            k = int(z[3][4:])
            if k <= count:
                place[k] = z
        for z in chosen[:nf]:
            if z not in place.values():
                k = max(set(range(1, count + 1)) - set(place))
                place[k] = z
        it = iter(reste)
        ordre = [place.get(i) or next(it) for i in range(1, count + 1)]
        for i, (b, c, a, ancien) in enumerate(ordre, 1):
            neg, pos = ("", "") if a is None else AXES[a].split("/")
            rows.append(dict(id=f"{pref}-{i:03d}", type=tname, tuile=tile, biome=BIOMES[b], mana=MANA_DE[BIOMES[b]],
                             culture=CULTURES[c], pole_moins7=neg, pole_plus7=pos,
                             niveaux="0 à 3" if res else "-7 à +7", ancien_id=ancien))
    return rows


def verifier(rows):
    assert len(rows) == 986
    by = collections.defaultdict(list)
    for r in rows:
        by[r["type"]].append(r)
    for (t, _, _, n) in TYPES:
        assert len(by[t]) == n, t
        for x, y in itertools.combinations(by[t], 2):
            assert (x["biome"], x["culture"]) != (y["biome"], y["culture"])
            if t != "Ressource":
                s = (x["biome"] == y["biome"]) + (x["culture"] == y["culture"]) + (x["pole_moins7"] == y["pole_moins7"])
                assert s <= 1, (x["id"], y["id"])
    trip = [(r["biome"], r["culture"], r["pole_moins7"]) for r in rows if r["type"] != "Ressource"]
    assert len(set(trip)) == len(trip)
    assert sum(1 for r in rows if r["ancien_id"]) == 20
    return by


if __name__ == "__main__":
    fix = fixes()
    for seed in range(200):
        rows = build(seed, fix)
        if rows:
            break
    assert rows, "aucune graine ne convient"
    by = verifier(rows)
    out = os.path.join(ICI, "sous-zones-986-v2.csv")
    with open(out, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0]), delimiter=";")
        w.writeheader(); w.writerows(rows)
    print("graine", seed, "zones", len(rows))
    for t, rs in by.items():
        print(f"{t:10s} {len(rs):4d}  mana", dict(collections.Counter(r['mana'] for r in rs)))
    print("anciens ->", {r["ancien_id"]: r["id"] for r in rows if r["ancien_id"]})
