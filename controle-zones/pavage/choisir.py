"""Génère plusieurs pavages complets et garde celui dont la répartition des formes colle le mieux à la cible du jeu
(hexagone 340, papillon 220, losange 180, pentagone 140, décagone 106 sur 986)."""
import sys, json, girih_exact as G
from collections import Counter
from shapely.geometry import box
from shapely.ops import unary_union
CIBLE = {"hexagone": 340, "papillon": 220, "losange": 180, "pentagone": 140, "decagone": 106}
W, H, n = float(sys.argv[1]), float(sys.argv[2]), int(sys.argv[3])
G.WEIGHT.update({"decagone": float(sys.argv[4]), "pentagone": float(sys.argv[5])})
best = None
for seed in range(1, n+1):
    P, k = G.paver(W, H, seed, budget=20000)
    if P is None: print(seed, "échec"); continue
    c = Counter(t[0] for t in P.T.values()); N = len(P.T)
    ecart = sum(abs(c[f]/N - CIBLE[f]/986) for f in CIBLE)
    print(seed, N, dict(c), round(ecart, 3), flush=True)
    if best is None or ecart < best[0]: best = (ecart, seed, P)
e, seed, P = best
cadre = box(-W/2, -H/2, W/2, H/2)
u = unary_union([t[3] for t in P.T.values()]).intersection(cadre)
print("retenu", seed, "écart", round(e, 3), "couverture", round(u.area/cadre.area, 6))
json.dump({"cadre": [W, H], "graine": seed, "tuiles": [{"forme": sh, "pts": [[round(x, 4), round(y, 4)] for x, y in (G.xy(p) for p in pts)]}
                                     for sh, pts, rot, poly in P.T.values()]}, open("pavage_retenu.json", "w"))
