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


# ---- graine2 : on repose aussi les 16 tuiles de la carte 2.0 (c_12.json), à l'identique ----
C12=[t for t in json.load(open('c_12.json')) if t['id'] not in ('CIT','ANT','RES','MAR','DON')]
reste=list(C12);tours=0
while reste and tours<50:
  tours+=1
  for t in list(reste):
    poly=[tuple(p) for p in t['pts']];found=None
    for e in list(P.edges):
      if (e[1],e[0]) in P.edges:continue
      for (_,sh,pts,rot) in P.candidats(e[0],e[1]):
        if sh==t['forme'] and same([f(G.xy(p)) for p in pts],poly):found=(sh,pts,rot);break
      if found:break
    if found:seed['C12_'+str(C12.index(t))]=P.poser(*found);reste.remove(t)
print('repose c_12 :',len(C12)-len(reste),'/',len(C12))
if reste:sys.exit('repose incomplète')
# ---- remplissage en disque avec réparation locale (2.15, zones en série) ----
import collections,os
RAY=float(sys.argv[2]);OUT=sys.argv[3];NB=int(sys.argv[4]) if len(sys.argv)>4 else 986
fixes=set(P.T.keys())
CIBLE={'hexagone':383/986,'papillon':246/986,'losange':182/986,'pentagone':130/986,'decagone':45/986}
def dedans(e):
  (x1,y1),(x2,y2)=G.xy(e[0]),G.xy(e[1]);return math.hypot((x1+x2)/2,(y1+y2)/2)<RAY
P.dedans=dedans
def cen(tid):
  pts=P.T[tid][1];return (sum(G.xy(p)[0] for p in pts)/len(pts),sum(G.xy(p)[1] for p in pts)/len(pts))
# graines de Citadelles : des décagones posés d'avance sur une grille lâche (retirables par la réparation)
from shapely.geometry import Polygon as _Poly
def pointExact(x,y):
  p=(0,0,0,0)
  for _ in range(400):
    px,py=G.xy(p);d=math.hypot(x-px,y-py)
    if d<0.7:break
    best=min(G.DIR,key=lambda v:math.hypot(x-(px+G.xy(v)[0]),y-(py+G.xy(v)[1])));p=G.add(p,best)
  return p
PAS=float(os.environ.get('PAS_DEC','5.4'));nd=0
k=0
for gx in range(-int(RAY/PAS)-1,int(RAY/PAS)+2):
  for gy in range(-int(RAY/PAS)-1,int(RAY/PAS)+2):
    x=gx*PAS+(gy%2)*PAS/2;y=gy*PAS*0.866
    if math.hypot(x,y)>RAY-2.5:continue
    b=pointExact(x,y);r=G.make('decagone',0,b,G.add(b,G.DIR[0]))
    if not r:continue
    pts,rot=r;poly=_Poly([G.xy(p) for p in pts])
    if any(P.T[j][3].intersection(poly).area>1e-6 for j in P.voisins(poly)):continue
    if any(P.vsum.get(p,0)+rot[i]>10 for i,p in enumerate(pts)):continue
    P.poser('decagone',pts,rot);nd+=1
print('graines de décagones',nd,flush=True)
echecs=collections.Counter();n=0
while True:
  fr=P.front()
  if not fr:break
  fr.sort(key=lambda e:math.hypot(*G.xy(e[0])))
  best=None
  for e in fr[:24]:
    cs=P.candidats(*e)
    if not cs:best=(e,[]);break
    if best is None or len(cs)<len(best[1]):best=(e,cs)
    if len(cs)==1:break
  if best[1] and os.environ.get('CHASSE','1')=='1':
    cnt=collections.Counter(t[0] for t in P.T.values());tot=sum(cnt.values())
    manque=[sh for sh in os.environ.get('CHASSE_FORMES','decagone').split(',') if cnt[sh]/tot<CIBLE[sh]*1.05]
    for sh in manque:
      tr=None
      for e2 in fr[:int(os.environ.get('NCH','60'))]:
        d=[c for c in P.candidats(*e2) if c[1]==sh]
        if d:tr=(e2,d);break
      if tr:best=tr;break
  e,cs=best;n+=1
  if cs:
    cnt=collections.Counter(t[0] for t in P.T.values());tot=sum(cnt.values())
    def score(c):
      sh=c[1];return (CIBLE[sh]/max(cnt[sh]/tot,1e-3))**2*(0.5+P.rng.random())
    c=max(cs,key=score) if len(cs)>1 else cs[0];P.poser(c[1],c[2],c[3])
  else:
    mx,my=[(a+b)/2 for a,b in zip(G.xy(e[0]),G.xy(e[1]))];cle=(round(mx),round(my));echecs[cle]+=1
    r=1.6+0.8*min(echecs[cle],8)
    for tid in [t for t in list(P.T) if t not in fixes and (P.T[t][0]!='decagone' or echecs[cle]>=int(os.environ.get('COLLE','4'))) and math.hypot(cen(t)[0]-mx,cen(t)[1]-my)<r]:P.retirer(tid)
  if n>int(os.environ.get('MAXPAS','30000')):print('abandon',flush=True);sys.exit(2)
  if n%200==0:print('pas',n,'tuiles',len(P.T),'réparations',sum(echecs.values()),flush=True)
print('fini',n,len(P.T),flush=True)
inv={v:k for k,v in seed.items()};inv[0]='CIT'
C12ids={'C12_'+str(i):t['id'] for i,t in enumerate(C12)}
out=[]
for tid,(sh,pts,rot,poly) in P.T.items():
  i=inv.get(tid);i=C12ids.get(i,i)
  out.append({'id':i,'forme':sh,'pts':[[round(c,3) for c in f(G.xy(p))] for p in pts]})
json.dump(out,open(OUT,'w'))
print(len(out),collections.Counter(t['forme'] for t in out))
