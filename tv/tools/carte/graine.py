import sys,math,json,random
sys.path.insert(0,'/mnt/project-files/controle-zones/pavage')
import girih_exact as G
D2R=math.pi/180;L=200.0;R10=L/(2*math.sin(18*D2R))
VX=[(R10*math.cos((-162+36*k)*D2R),R10*math.sin((-162+36*k)*D2R)) for k in range(10)]
def walk(a,b,angs):
  pts=[a,b];d=math.atan2(b[1]-a[1],b[0]-a[0]);p=b
  for al in angs:
    d+=(180-al)*D2R;p=(p[0]+L*math.cos(d),p[1]+L*math.sin(d));pts.append(p)
  return pts
TV={'CIT':('decagone',VX),'ANT':('papillon',walk(VX[1],VX[0],[72,216,72,72])),'RES':('hexagone',walk(VX[2],VX[1],[144,72,144,144])),
    'MAR':('losange',walk(VX[3],VX[2],[72,108])),'DON':('pentagone',walk(VX[4],VX[3],[108,108,108]))}
o=(0,0,0,0);dec,decrot=G.make("decagone",0,o,G.DIR[0])
E=[G.xy(p) for p in dec]
def sim(mapping):
  # complex similarity from exact points a0,a1 -> tv b0,b1
  a0=complex(*E[0]);a1=complex(*E[1]);b0=complex(*mapping[0]);b1=complex(*mapping[1])
  k=(b1-b0)/(a1-a0)
  return lambda p:(lambda z:(z.real,z.imag))(b0+k*(complex(*p)-a0))
def simm(mapping):
  a0=complex(*E[0]);a1=complex(*E[1]);b0=complex(*mapping[0]);b1=complex(*mapping[1])
  k=(b1-b0)/(a1-a0).conjugate()
  return lambda p:(lambda z:(z.real,z.imag))(b0+k*(complex(*p)-a0).conjugate())
def same(A,B):
  return len(A)==len(B) and all(min(math.hypot(a[0]-b[0],a[1]-b[1]) for b in B)<1 for a in A)
for mir in (False,True):
  for s in range(10):
    vx=VX if not mir else VX[::-1]
    mp=[vx[(i+s)%10] for i in range(10)]
    if not same([ (sim if not mir else simm)(mp)(p) for p in E],VX):continue
    f=(sim if not mir else simm)(mp)
    P=G.Pavage(30,30,int(sys.argv[1]) if len(sys.argv)>1 else 1)
    P.poser("decagone",dec,decrot)
    ok=True;seed={}
    for zid,(shape,poly) in TV.items():
      if zid=='CIT':continue
      found=None
      for i in range(10):
        a,b=dec[i],dec[(i+1)%10]
        for (_,sh,pts,rot) in P.candidats(a,b):
          if sh==shape and same([f(G.xy(p)) for p in pts],poly):found=(sh,pts,rot);break
        if found:break
      if not found:ok=False;break
      seed[zid]=P.poser(*found)
    if ok:
      print('mapping ok',mir,s);json.dump({'mir':mir,'s':s},open('map.json','w'));break
  else:continue
  break

# ---- remplissage autour des 5 tuiles ----
import collections
W,H=float(sys.argv[2]),float(sys.argv[3])
cx=sum(sum(G.xy(p)[0] for p in t[1])/len(t[1]) for t in P.T.values())/len(P.T);cy=sum(sum(G.xy(p)[1] for p in t[1])/len(t[1]) for t in P.T.values())/len(P.T)
def dedans(e):
  (x1,y1),(x2,y2)=G.xy(e[0]),G.xy(e[1])
  return any(abs(x-cx)<W/2-1e-9 and abs(y-cy)<H/2-1e-9 for x,y in ((x1,y1),(x2,y2),((x1+x2)/2,(y1+y2)/2)))
P.dedans=dedans
fixes=set(P.T.keys())
pile=[];n=0
def choisir():
  f=P.front()
  if not f:return None,None
  f.sort(key=lambda e:math.hypot(G.xy(e[0])[0]-cx,G.xy(e[0])[1]-cy))
  best=None
  for e in f[:30]:
    cs=P.candidats(*e)
    if not cs:return e,[]
    if best is None or len(cs)<len(best[1]):best=(e,cs)
    if len(cs)==1:break
  return best
e,opts=choisir()
while e is not None:
  n+=1
  if n>60000:print('budget');sys.exit(1)
  while not opts:
    if not pile:print('échec');sys.exit(1)
    reste,tid=pile.pop();P.retirer(tid);opts=reste
  t=opts.pop(0);tid=P.poser(t[1],t[2],t[3]);pile.append((opts,tid));e,opts=choisir()
inv={v:k for k,v in seed.items()};inv[0]='CIT'
out=[]
for tid,(sh,pts,rot,poly) in P.T.items():
  out.append({'id':inv.get(tid),'forme':sh,'pts':[[round(c,3) for c in f(G.xy(p))] for p in pts]})
print(len(out),collections.Counter(t['forme'] for t in out))
json.dump(out,open(sys.argv[4],'w'))
