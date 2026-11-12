import json
m=json.load(open('../demo/monde.json'))
T=m['tuiles']; k=lambda p:(round(p[0],2),round(p[1],2))
edges={}
for i,t in enumerate(T):
    P=t['pts']
    for j in range(len(P)):
        e=frozenset([k(P[j]),k(P[(j+1)%len(P)])]); edges.setdefault(e,[]).append(i)
nb=[set() for _ in T]
for e,l in edges.items():
    if len(l)==2: a,b=l; nb[a].add(b); nb[b].add(a)
out=[{"id":t["id"],"type":t["type"],"nom":t["nom"],"pts":t["pts"],"c":t["c"],"n":t["niveau"],"v":sorted(nb[i]),"pm":t.get("pmoins","Ombre"),"pp":t.get("pplus","Lumière")} for i,t in enumerate(T)]
json.dump({"t":out,"f":m["failles"]},open('carte.json','w'),ensure_ascii=False,separators=(',',':'))
import collections;print(collections.Counter(len(x) for x in nb), [ (i,t['id']) for i,t in enumerate(T) if t['type']=='Citadelle'])
