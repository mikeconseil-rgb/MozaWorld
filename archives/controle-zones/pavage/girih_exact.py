"""Pavage Girih sans trou d'un rectangle, en coordonnées EXACTES.
Chaque sommet est un vecteur entier dans la base (1, z, z², z³) avec z = e^(iπ/5) : aucune dérive d'arrondi,
donc les sommets se recollent toujours. Recherche en profondeur : on remplit d'abord le bord le plus contraint
(le moins de tuiles possibles) ; une impasse est vue tout de suite et on recule.
Usage : python3 girih_exact.py LARGEUR HAUTEUR GRAINE [SORTIE.json]"""
import math, random, json, sys
from collections import Counter
from shapely.geometry import Polygon, box
from shapely.ops import unary_union

# angles intérieurs en dixièmes de tour (36°)
SHAPES = {"decagone": [4]*10, "pentagone": [3]*5, "hexagone": [2,4,4,2,4,4],
          "papillon": [2,2,6,2,2,6], "losange": [2,3,2,3]}
WEIGHT = {"hexagone": 340, "papillon": 220, "losange": 180, "pentagone": 140, "decagone": 106}
B = [(1,0,0,0),(0,1,0,0),(0,0,1,0),(0,0,0,1),(-1,1,-1,1)]
DIR = B + [tuple(-c for c in v) for v in B]          # z^0 .. z^9
add = lambda p, q: tuple(a+b for a, b in zip(p, q))
sub = lambda p, q: tuple(a-b for a, b in zip(p, q))
COS = [math.cos(k*math.pi/5) for k in range(4)]; SIN = [math.sin(k*math.pi/5) for k in range(4)]
def xy(p): return (sum(c*COS[k] for k, c in enumerate(p)), sum(c*SIN[k] for k, c in enumerate(p)))
DIRIDX = {v: i for i, v in enumerate(DIR)}

def make(shape, k, b, a):
    """Tuile posée sur l'arête b->a (b premier sommet), en tournant à gauche."""
    ang = SHAPES[shape]; m = len(ang); rot = ang[k:] + ang[:k]
    h = DIRIDX[sub(a, b)]; pts = [b]; p = b
    for i in range(m - 1):
        p = add(p, DIR[h % 10]); pts.append(p); h += 5 - rot[(i + 1) % m]
    if add(p, DIR[h % 10]) != b: return None
    return pts, rot

class Pavage:
    def __init__(s, W, H, seed):
        s.W, s.H = W, H; s.rng = random.Random(seed)
        s.T = {}; s.nid = 0; s.vsum = Counter(); s.edges = {}; s.grid = {}
    def cells(s, poly):
        x0, y0, x1, y1 = poly.bounds
        return [(i, j) for i in range(math.floor(x0), math.floor(x1)+1) for j in range(math.floor(y0), math.floor(y1)+1)]
    def poser(s, shape, pts, rot):
        poly = Polygon([xy(p) for p in pts]); tid = s.nid; s.nid += 1
        for i, p in enumerate(pts):
            s.vsum[p] += rot[i]; s.edges[(p, pts[(i+1) % len(pts)])] = tid
        for c in s.cells(poly): s.grid.setdefault(c, set()).add(tid)
        s.T[tid] = (shape, pts, rot, poly); return tid
    def retirer(s, tid):
        shape, pts, rot, poly = s.T.pop(tid)
        for i, p in enumerate(pts):
            s.vsum[p] -= rot[i]
            if not s.vsum[p]: del s.vsum[p]
            del s.edges[(p, pts[(i+1) % len(pts)])]
        for c in s.cells(poly): s.grid[c].discard(tid)
    def dedans(s, e):
        (x1, y1), (x2, y2) = xy(e[0]), xy(e[1])
        return any(abs(x) < s.W/2 - 1e-9 and abs(y) < s.H/2 - 1e-9 for x, y in ((x1, y1), (x2, y2), ((x1+x2)/2, (y1+y2)/2)))
    def candidats(s, a, b):
        out = []; vus = set()
        for shape in SHAPES:
            for k in range(len(SHAPES[shape])):
                r = make(shape, k, b, a)
                if not r: continue
                pts, rot = r
                if any(s.vsum.get(p, 0) + rot[i] > 10 or 10 - s.vsum.get(p, 0) - rot[i] == 1 for i, p in enumerate(pts)): continue
                if any(((pts[i], pts[(i+1) % len(pts)]) in s.edges) for i in range(len(pts))): continue
                sig = frozenset(pts)
                if sig in vus: continue
                poly = Polygon([xy(p) for p in pts])
                if any(s.T[j][3].intersection(poly).area > 1e-6 for j in s.voisins(poly)): continue
                vus.add(sig); out.append((s.rng.random() ** (1.0 / WEIGHT[shape]), shape, pts, rot))
        out.sort(key=lambda o: -o[0]); return out
    def voisins(s, poly):
        ids = set()
        for c in s.cells(poly): ids |= s.grid.get(c, set())
        return ids
    def front(s):
        return [e for e in s.edges if (e[1], e[0]) not in s.edges and s.dedans(e)]

def paver(W, H, seed, budget=200000, trace=False):
    P = Pavage(W, H, seed)
    o = (0, 0, 0, 0); r = make("decagone", 0, o, DIR[0])
    pts = r[0]; c = [sum(p[k] for p in pts) for k in range(4)]   # centre ≈ moyenne ; on garde l'origine, peu importe
    P.poser("decagone", pts, r[1])
    pile = []; n = 0
    def choisir():
        f = P.front()
        if not f: return None, None
        f.sort(key=lambda e: math.hypot(*xy(e[0])))
        best = None
        for e in f[:30]:
            cs = P.candidats(*e)
            if not cs: return e, []
            if best is None or len(cs) < len(best[1]): best = (e, cs)
            if len(cs) == 1: break
        return best
    e, opts = choisir()
    while e is not None:
        n += 1
        if n > budget: return None, n
        while not opts:
            if not pile: return None, n
            reste, tid = pile.pop(); P.retirer(tid); opts = reste
        t = opts.pop(0); tid = P.poser(t[1], t[2], t[3]); pile.append((opts, tid))
        if trace and n % 1000 == 0: print("nœuds", n, "tuiles", len(P.T), flush=True)
        e, opts = choisir()
    return P, n

if __name__ == "__main__":
    W, H, seed = float(sys.argv[1]), float(sys.argv[2]), int(sys.argv[3])
    sortie = sys.argv[4] if len(sys.argv) > 4 else f"pavage_{int(W)}x{int(H)}_{seed}.json"
    P, n = paver(W, H, seed, trace=True)
    if P is None: print("échec après", n); sys.exit(1)
    # recentrer : le décagone de départ est à l'origine de son premier sommet
    cadre = box(-W/2, -H/2, W/2, H/2)
    u = unary_union([t[3] for t in P.T.values()]).intersection(cadre)
    print("nœuds", n, "tuiles", len(P.T), Counter(t[0] for t in P.T.values()), "couverture", round(u.area/cadre.area, 6))
    json.dump({"cadre": [W, H], "tuiles": [{"forme": sh, "pts": [[round(x, 4), round(y, 4)] for x, y in (xy(p) for p in pts)]}
                                         for sh, pts, rot, poly in P.T.values()]}, open(sortie, "w"))
