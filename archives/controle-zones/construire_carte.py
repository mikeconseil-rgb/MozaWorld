"""Construit carte.json du prototype à partir d'un pavage Girih complet (pavage/pavage_retenu.json).
Les tuiles sont coupées par le cadre : le plan est entièrement pavé, sans faille.
Types : hexagone=Ressource, papillon=Antre, losange=Marché, pentagone=Donjon, décagone=Citadelle.
Noms : d'abord les 19 zones écrites par les conteurs, puis les sous-zones du CSV de l'étape 2."""
import json, csv, random, math
from shapely.geometry import Polygon, box
TYPE = {"hexagone": "Ressource", "papillon": "Antre", "losange": "Marché", "pentagone": "Donjon", "decagone": "Citadelle"}
pav = json.load(open("pavage/pavage_retenu.json")); W, H = pav["cadre"]
cadre = box(-W/2, -H/2, W/2, H/2); rng = random.Random(7)
ecrites = {}
for t in json.load(open("../demo/monde.json"))["tuiles"]:
    if t.get("ecrite"): ecrites.setdefault(t["type"], []).append((t["id"], t["nom"], t["pmoins"], t["pplus"]))
csvz = {}
for r in csv.DictReader(open("../etape2/sous-zones-986.csv", encoding="utf-8-sig"), delimiter=";"):
    csvz.setdefault(r["type"], []).append((r["id"], f"{r['biome']} {r['culture'].lower()}", r["pole_moins7"], r["pole_plus7"]))
for v in csvz.values(): rng.shuffle(v)
pris = set(); T = []
for t in pav["tuiles"]:
    full = Polygon(t["pts"]); vis = full.intersection(cadre)
    if vis.area < 1e-3: continue
    morceaux = sorted(getattr(vis, "geoms", [vis]), key=lambda g: -g.area)   # un papillon coupé peut faire deux morceaux
    typ = TYPE[t["forme"]]
    src = ecrites.get(typ, []) + csvz[typ]
    zid, nom, pm, pp = next(z for z in src if z[0] not in pris); pris.add(zid)
    m0 = morceaux[0]; c = m0.centroid if m0.contains(m0.centroid) else m0.representative_point()
    T.append({"id": zid, "type": typ, "nom": nom, "pm": pm, "pp": pp, "forme": t["forme"],
              "pts": [[round(x, 3), round(y, 3)] for x, y in list(m0.exterior.coords)[:-1]],
              "pts2": [[[round(x, 3), round(y, 3)] for x, y in list(g.exterior.coords)[:-1]] for g in morceaux[1:]],
              "c": [round(c.x, 3), round(c.y, 3)], "part": round(vis.area/full.area, 2), "poly": vis})
# voisinage : frontière commune visible
for i, a in enumerate(T):
    a["v"] = [j for j, b in enumerate(T) if j != i and a["poly"].intersection(b["poly"]).length > 0.05]
# niveaux : bruit doux (deux voisines se ressemblent un peu), de -7 à +7
base = [rng.uniform(-7, 7) for _ in T]
for i, t in enumerate(T):
    v = [base[j] for j in t["v"]]
    t["n"] = max(-7, min(7, round(0.6*base[i] + 0.4*(sum(v)/len(v) if v else 0))))
# départs : les deux Citadelles les plus éloignées ; prix central : la plus proche du centre
cits = [i for i, t in enumerate(T) if t["type"] == "Citadelle" and t["part"] > 0.9]
d = lambda i, j: math.dist(T[i]["c"], T[j]["c"])
moi, rival = max(((i, j) for i in cits for j in cits if i < j), key=lambda p: d(*p))
if T[moi]["c"][0] > T[rival]["c"][0]: moi, rival = rival, moi
centre = min((i for i in cits if i not in (moi, rival)), key=lambda i: math.hypot(*T[i]["c"]))
for s in (moi, rival): T[s]["n"] = 0
for t in T: del t["poly"]
json.dump({"t": T, "f": [], "cadre": [W, H], "depart": {"moi": moi, "rival": rival}, "centre": centre},
          open("carte.json", "w"), ensure_ascii=False, separators=(",", ":"))
from collections import Counter
print(len(T), Counter(t["type"] for t in T), "départs", T[moi]["nom"], "/", T[rival]["nom"], "centre", T[centre]["nom"],
      "voisins min", min(len(t["v"]) for t in T), "éclats <25 %", sum(t["part"] < 0.25 for t in T), "multi", sum(bool(t["pts2"]) for t in T))
