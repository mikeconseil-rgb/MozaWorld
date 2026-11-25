#!/usr/bin/env python3
"""Mesures du critique littéraire v3 (voir critique_litteraire_v3.md).

Usage : python3 design/equipe/mesures_texte.py [dossier_des_lots]
Par défaut : design/zones-serie. Lit les fiches de lot-*/conteur_[ABCD].md
et les notes de lot-*/critique.md, puis affiche les indicateurs du tableau
de bord, chacun avec son seuil (VERT / ROUGE).

Ces chiffres ne remplacent pas la lecture : ils disent au critique où regarder
et l'empêchent de déclarer « les voix tiennent » ou « le lot est varié » sans preuve.
"""
import collections, glob, json, math, os, re, statistics as st, sys

RACINE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), '..', 'zones-serie')


def fiches():
    out = []
    for f in sorted(glob.glob(os.path.join(RACINE, 'lot-*', 'conteur_[ABCD].md'))):
        lot = os.path.basename(os.path.dirname(f))
        for m in re.finditer(r'```json\s*(\{\s*"fiche".*?\})\s*```', open(f, encoding='utf-8').read(), re.S):
            try:
                d = json.loads(m.group(1))
            except ValueError:
                continue
            d['_c'], d['_lot'] = f[-4], lot
            out.append(d)
    return out


def phrases(t):
    return [p for p in re.split(r'(?<=[.!?…»])\s+', t.strip()) if p]


def grammes(t):
    t, c = t.lower(), collections.Counter()
    for n in (3, 4):
        for i in range(len(t) - n + 1):
            c[t[i:i + n]] += 1
    z = math.sqrt(sum(v * v for v in c.values())) or 1
    return {k: v / z for k, v in c.items()}


def attribution_aveugle(Z):
    """Centroïde le plus proche, en laissant chaque récit hors de son centroïde."""
    V = [(d['_c'], grammes(d['recit'])) for d in Z]
    cent = {a: collections.Counter() for a in 'ABCD'}
    for a, v in V:
        cent[a].update(v)
    bon = 0
    for a, v in V:
        meilleur = None
        for b in 'ABCD':
            c = cent[b] if b != a else cent[b] - collections.Counter(v)
            n = math.sqrt(sum(w * w for w in c.values())) or 1
            s = sum(w * c.get(k, 0) for k, w in v.items()) / n
            if meilleur is None or s > meilleur[0]:
                meilleur = (s, b)
        bon += meilleur[1] == a
    return bon / len(V)


def notes_du_critique():
    n = []
    for f in glob.glob(os.path.join(RACINE, 'lot-*', 'critique.md')):
        for m in re.finditer(r'^\| ([A-Z]{3}\d{3}) \|[^|]*\|[^|]*\| (\d+)', open(f, encoding='utf-8').read(), re.M):
            n.append(int(m.group(2)))
    return n


def ligne(nom, valeur, ok, seuil):
    print(f"- {'VERT ' if ok else 'ROUGE'} {nom} : {valeur} (seuil : {seuil})")


def main():
    F = fiches()
    Z = [d for d in F if 'pm' in d]
    print(f"# Tableau de bord du critique littéraire ({len(Z)} zones à cartes, {len(F) - len(Z)} Ressources)\n")

    # 1. Le critique lui-même
    n = notes_du_critique()
    if n:
        sd = st.pstdev(n)
        refus = sum(x < 60 for x in n)
        ligne('Écart type des notes du critique', f"{sd:.1f} (notes de {min(n)} à {max(n)}, {len(n)} notes)", sd >= 6, '≥ 6')
        ligne('Zones notées sous 60 (renvoyées)', f"{refus} sur {len(n)}", refus >= 0.05 * len(n), '≥ 5 %')

    # 2. Les voix
    acc = attribution_aveugle(Z)
    ligne('Attribution aveugle du conteur par le style', f"{acc:.0%} (hasard : 25 %)", acc >= 0.70, '≥ 70 %')

    # 3. Le joueur
    joueur = sum(bool(re.search(r"\b(vous|tu|voyageur|étranger|quiconque|qui veut|celui qui)\b", d['recit'], re.I)) for d in Z)
    ligne("Récits qui donnent une place au joueur ou à celui qui arrive", f"{joueur / len(Z):.0%}", joueur >= 0.4 * len(Z), '≥ 40 %')

    # 4. Les pôles
    couples = collections.Counter(f"{d['pm']}/{d['pp']}" for d in Z)
    top = couples.most_common(1)[0]
    # Les axes viennent de la liste des zones (choix de l'utilisateur du 16 nov.) : simple information.
    print(f"- INFO  Couples de pôles distincts : {len(couples)} pour {len(Z)} zones ; le plus repris : {top[0]} ×{top[1]}"
          " (axes fixés par la liste : le critique juge si le récit rend le couple neuf, il ne change pas l'axe)")

    # 5. Le gabarit
    ouvertures = collections.Counter(d['recit'].split()[0].lower().strip(',:') for d in Z)
    fins = collections.Counter(' '.join(phrases(d['recit'])[-1].split()[:2]).lower() for d in Z)
    print('\n## Gabarits à surveiller')
    print('- Ouvertures les plus fréquentes :', ', '.join(f"« {k} » ×{v}" for k, v in ouvertures.most_common(6)))
    print('- Débuts de dernière phrase les plus fréquents :', ', '.join(f"« {k} » ×{v}" for k, v in fins.most_common(6)))
    courtes = sum(len(phrases(d['recit'])[-1].split()) <= 10 for d in Z)
    print(f"- Récits qui finissent sur une phrase de 10 mots ou moins (la chute sèche) : {courtes / len(Z):.0%}")

    # 6. Lisibilité à voix haute
    noms = [len(set(re.findall(r"(?<=[a-zà-ÿ,;:] )[A-ZÉ][a-zà-ÿ'’\-]+", d['recit']))) for d in Z]
    lourds = sum(x >= 4 for x in noms)
    print('\n## Lecture à voix haute')
    ligne('Récits avec 4 noms propres ou plus', f"{lourds / len(Z):.0%}", lourds <= 0.15 * len(Z), '≤ 15 %')

    # 7. Par conteur
    print('\n## Par conteur')
    for a in 'ABCD':
        rs = [d['recit'] for d in Z if d['_c'] == a]
        if not rs:
            continue
        mp = st.mean(len(p.split()) for r in rs for p in phrases(r))
        deux = sum(bool(re.search(r'\bvous\b|\btu\b', r, re.I)) for r in rs)
        print(f"- {a} : {len(rs)} récits, {mp:.1f} mots par phrase, 2e personne {deux / len(rs):.0%}")


if __name__ == '__main__':
    main()
