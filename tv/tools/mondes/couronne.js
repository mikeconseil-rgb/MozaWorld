/* Couronne : Citadelle épique au centre, cinq copies d'une fleur pré-générée tournées de 72°, et remplissage symétrique du reste */
(function(G){const M=typeof module!=='undefined'?require('./moteur.js'):G.MOTEUR;const{xy,K}=M;
const ANG={decagone:[4,4,4,4,4,4,4,4,4,4],pentagone:[3,3,3,3,3],hexagone:[2,4,4,2,4,4],papillon:[2,2,6,2,2,6],losange:[2,3,2,3]};
const add=(p,q)=>[p[0]+q[0],p[1]+q[1],p[2]+q[2],p[3]+q[3]],sub=(p,q)=>[p[0]-q[0],p[1]-q[1],p[2]-q[2],p[3]-q[3]];
const mulz=p=>[-p[3],p[0]+p[3],p[1]-p[3],p[2]+p[3]];const rot=(p,k)=>{k=((k%10)+10)%10;for(let i=0;i<k;i++)p=mulz(p);return p};
let V=null;for(const a of[-2,-1,0,1,2])for(const b of[-2,-1,0,1,2])for(const c of[-2,-1,0,1,2])for(const d of[-2,-1,0,1,2]){const v=[a,b,c,d];if(K(sub(mulz(v),v))==='1,0,0,0')V=v}
const cenT=t=>{let x=0,y=0;for(const p of t.P)x+=p[0],y+=p[1];return[x/t.P.length,y/t.P.length]};
function poserOrbite(P,shape,pts,r,fixe){const ids=[],vus=new Set();for(let k=0;k<10;k+=2){const q=pts.map(p=>rot(p,k));const sig=q.map(K).sort().join(';');if(vus.has(sig))continue;vus.add(sig);
  if(!P.valide(shape,q,r)){ids.forEach(i=>P.retirer(i));return null}ids.push(P.poser(shape,q,r,fixe))}return ids}
/* remplissage symétrique « glouton + réparation » */
function remplirSym(P,R,poids,deadline){const cache=new Map();const echecs=new Map();
  const mid=ab=>{const m=xy(ab[0]),q=xy(ab[1]);return[(m[0]+q[0])/2,(m[1]+q[1])/2]};
  const inval=(c,r)=>{for(const[k,v]of cache)if(Math.hypot(v.c[0]-c[0],v.c[1]-c[1])<r)cache.delete(k)};
  const invalOrb=(c,r)=>{for(let k=0;k<5;k++){const a=k*2*Math.PI/5;inval([c[0]*Math.cos(a)-c[1]*Math.sin(a),c[0]*Math.sin(a)+c[1]*Math.cos(a)],r)}};
  while(Date.now()<deadline){let best=null;
    for(const[e,ab]of P.open){let v=cache.get(e);if(!v){const c=mid(ab);if(Math.hypot(c[0],c[1])>R){cache.set(e,{c,hors:true});continue}v={c,cs:P.candidats(ab[0],ab[1],poids)};cache.set(e,v)}
      if(v.hors)continue;if(!best||v.cs.length<best.cs.length||(v.cs.length===best.cs.length&&Math.hypot(...v.c)<Math.hypot(...best.c)))best={e,ab,cs:v.cs,c:v.c};if(!best.cs.length)break}
    if(!best)return true;let ids=null;
    for(const o of best.cs){ids=poserOrbite(P,o.shape,o.pts,o.r);if(ids)break}
    if(ids){for(const id of ids)inval(cenT(P.T.get(id)),3.5);continue}
    const key=Math.round(best.c[0]/1.5)+','+Math.round(best.c[1]/1.5);const k=(echecs.get(key)||0)+1;echecs.set(key,k);
    const rho=1.3+0.45*Math.min(k,12)+Math.random()*0.6;
    for(const[id,t]of[...P.T]){if(t.fixe||!P.T.has(id))continue;const c=cenT(t);for(let j=0;j<5;j++){const a=j*2*Math.PI/5;const q=[best.c[0]*Math.cos(a)-best.c[1]*Math.sin(a),best.c[0]*Math.sin(a)+best.c[1]*Math.cos(a)];if(Math.hypot(c[0]-q[0],c[1]-q[1])<rho){P.retirer(id);break}}}
    invalOrb(best.c,rho+3.5)}
  return false}
/* fl : tuiles exactes d'une fleur (centrée sur l'origine) ; on la pose en 5 copies à off tourné */
function couronne(fl,off,impair,R,poids,tmax,seed){const P=new M.Pavage(seed||1);
  P.poser('decagone',[0,1,2,3,4,5,6,7,8,9].map(k=>rot(V,k)),ANG.decagone,true);
  const roys=[[],[],[],[],[]];
  for(const t of fl.tiles){if(!t.roy)continue;const pts=t.pts.map(p=>add(rot(p,impair?1:0),off));
    const ids=poserOrbite(P,t.shape,pts,t.r,true);if(!ids||ids.length!==5)return{ok:false,raison:'pose'};ids.forEach((id,k)=>roys[k].push(id))}
  const ok=remplirSym(P,R,poids,Date.now()+tmax);return{ok,P,roys}}
/* cinq fleurs différentes : une par place de la couronne, puis remplissage non symétrique avec réparation */
function mixte(fls,poids,tmax,seed){const P=new M.Pavage(seed||1);P.poser('decagone',[0,1,2,3,4,5,6,7,8,9].map(k=>rot(V,k)),ANG.decagone,true);
  let R=0;const roys=[[],[],[],[],[]];
  for(let k=0;k<5;k++){const D=13+Math.random()*.6,th=Math.PI/2+(Math.random()-.5)*.3;const off=M.vecConj(D*Math.cos(th),D*Math.sin(th));const imp=Math.random()<.5?1:0;R=Math.max(R,D+9);
    for(const t of fls[k].tiles){if(!t.roy)continue;const pts=t.pts.map(p=>rot(add(rot(p,imp),off),2*k));if(!P.valide(t.shape,pts,t.r))return{ok:false};roys[k].push(P.poser(t.shape,pts,t.r,true))}}
  const ok=M.remplirRepare(P,c=>Math.hypot(c[0],c[1])<R,poids,Date.now()+tmax);return{ok,P,roys,R}}
const API={mixte,couronne,rot,V,poserOrbite};if(typeof module!=='undefined')module.exports=API;else G.COUR=API})(this);
