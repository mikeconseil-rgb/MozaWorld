/* Moteur de génération MozaWorld : pavage Girih exact (sommets entiers dans la base 1, z, z², z³ ; z = e^(iπ/5)),
   fleurs symétriques autour d'une Citadelle, royaumes de 16 cartes, puis remplissage sans trou du reste de la carte. */
(function(G){
const ANG={decagone:[4,4,4,4,4,4,4,4,4,4],pentagone:[3,3,3,3,3],hexagone:[2,4,4,2,4,4],papillon:[2,2,6,2,2,6],losange:[2,3,2,3]};
const B=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[-1,1,-1,1]];
const DIR=B.concat(B.map(v=>v.map(c=>-c)));
const add=(p,q)=>[p[0]+q[0],p[1]+q[1],p[2]+q[2],p[3]+q[3]],sub=(p,q)=>[p[0]-q[0],p[1]-q[1],p[2]-q[2],p[3]-q[3]];
const K=p=>p.join(',');
const COS=[0,1,2,3].map(k=>Math.cos(k*Math.PI/5)),SIN=[0,1,2,3].map(k=>Math.sin(k*Math.PI/5));
const xy=p=>[p[0]*COS[0]+p[1]*COS[1]+p[2]*COS[2]+p[3]*COS[3],p[0]*SIN[0]+p[1]*SIN[1]+p[2]*SIN[2]+p[3]*SIN[3]];
const DIRIDX={};DIR.forEach((v,i)=>DIRIDX[K(v)]=i);
const mulz=p=>[-p[3],p[0]+p[3],p[1]-p[3],p[2]+p[3]];
const rot=(p,k)=>{for(let i=0;i<k;i++)p=mulz(p);return p};
function rng(seed){let s=seed>>>0||1;return()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296}}
function make(shape,k,b,a){const ang=ANG[shape],m=ang.length,r=ang.slice(k).concat(ang.slice(0,k));
  let h=DIRIDX[K(sub(a,b))];const pts=[b];let p=b;
  for(let i=0;i<m-1;i++){p=add(p,DIR[((h%10)+10)%10]);pts.push(p);h+=5-r[(i+1)%m]}
  if(K(add(p,DIR[((h%10)+10)%10]))!==K(b))return null;return{pts,r}}
/* pièces convexes pour le test de chevauchement */
function pieces(shape,P,r){if(shape==='papillon'){const c=[];r.forEach((v,i)=>{if(v===6)c.push(i)});const[i,j]=c,n=P.length,A=[],B2=[];for(let k=i;k!==j;k=(k+1)%n)A.push(P[k]);A.push(P[j]);for(let k=j;k!==i;k=(k+1)%n)B2.push(P[k]);B2.push(P[i]);return[A,B2]}return[P]}
function axes(poly){const a=[];for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length];a.push([q[1]-p[1],p[0]-q[0]])}return a}
function sepConvex(A,Bp){for(const ax of axes(A).concat(axes(Bp))){let a0=1e9,a1=-1e9,b0=1e9,b1=-1e9;
  for(const p of A){const d=p[0]*ax[0]+p[1]*ax[1];a0=Math.min(a0,d);a1=Math.max(a1,d)}
  for(const p of Bp){const d=p[0]*ax[0]+p[1]*ax[1];b0=Math.min(b0,d);b1=Math.max(b1,d)}
  if(a1<=b0+1e-6||b1<=a0+1e-6)return true}return false}
class Pavage{
  constructor(seed){this.R=rng(seed);this.T=new Map();this.nid=0;this.vsum=new Map();this.edges=new Map();this.open=new Map();this.grid=new Map()}
  cells(bb){const o=[];for(let i=Math.floor(bb[0]/2);i<=Math.floor(bb[2]/2);i++)for(let j=Math.floor(bb[1]/2);j<=Math.floor(bb[3]/2);j++)o.push(i+','+j);return o}
  poser(shape,pts,r,fixe){const P=pts.map(xy);const bb=[Math.min(...P.map(p=>p[0])),Math.min(...P.map(p=>p[1])),Math.max(...P.map(p=>p[0])),Math.max(...P.map(p=>p[1]))];
    const id=this.nid++;const n=pts.length;
    for(let i=0;i<n;i++){const a=K(pts[i]),b=K(pts[(i+1)%n]);this.vsum.set(a,(this.vsum.get(a)||0)+r[i]);const e=a+'|'+b;this.edges.set(e,id);
      const rv=b+'|'+a;if(this.open.has(rv))this.open.delete(rv);else this.open.set(e,[pts[i],pts[(i+1)%n]])}
    const cs=this.cells(bb);for(const c of cs){if(!this.grid.has(c))this.grid.set(c,new Set());this.grid.get(c).add(id)}
    this.T.set(id,{shape,pts,r,P,bb,cs,pc:pieces(shape,P,r),fixe:!!fixe});return id}
  retirer(id){const t=this.T.get(id);this.T.delete(id);const n=t.pts.length;
    for(let i=0;i<n;i++){const a=K(t.pts[i]),b=K(t.pts[(i+1)%n]);const v=this.vsum.get(a)-t.r[i];if(v)this.vsum.set(a,v);else this.vsum.delete(a);
      const e=a+'|'+b;this.edges.delete(e);const rv=b+'|'+a;if(this.open.has(e))this.open.delete(e);else if(this.edges.has(rv))this.open.set(rv,[t.pts[(i+1)%n],t.pts[i]])}
    for(const c of t.cs)this.grid.get(c).delete(id)}
  chevauche(shape,P,r){const bb=[Math.min(...P.map(p=>p[0])),Math.min(...P.map(p=>p[1])),Math.max(...P.map(p=>p[0])),Math.max(...P.map(p=>p[1]))];
    const vu=new Set();const pc=pieces(shape,P,r);
    for(const c of this.cells(bb)){const g=this.grid.get(c);if(!g)continue;for(const id of g){if(vu.has(id))continue;vu.add(id);const t=this.T.get(id);
      if(t.bb[2]<bb[0]+1e-6||bb[2]<t.bb[0]+1e-6||t.bb[3]<bb[1]+1e-6||bb[3]<t.bb[1]+1e-6)continue;
      for(const A of pc)for(const Bq of t.pc)if(!sepConvex(A,Bq))return true}}return false}
  valide(shape,pts,r){for(let i=0;i<pts.length;i++){const s=(this.vsum.get(K(pts[i]))||0)+r[i];if(s>10||s===9)return false}
    const n=pts.length;for(let i=0;i<n;i++)if(this.edges.has(K(pts[i])+'|'+K(pts[(i+1)%n])))return false;
    const P2=pts.map(xy);if(this.chevauche(shape,P2,r))return false;return!this.tjonction(P2)}
  /* un sommet posé au milieu d'un côté (jonction en T) rend la suite impossible : on le refuse tout de suite */
  tjonction(P2){const bb=[Math.min(...P2.map(p=>p[0]))-.01,Math.min(...P2.map(p=>p[1]))-.01,Math.max(...P2.map(p=>p[0]))+.01,Math.max(...P2.map(p=>p[1]))+.01];
    const surSeg=(v,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1];const t=((v[0]-a[0])*dx+(v[1]-a[1])*dy)/(dx*dx+dy*dy);if(t<1e-4||t>1-1e-4)return false;
      return Math.abs((v[0]-a[0])*dy-(v[1]-a[1])*dx)<1e-5};
    const vu=new Set();for(const c of this.cells(bb)){const g=this.grid.get(c);if(!g)continue;for(const id of g){if(vu.has(id))continue;vu.add(id);const t=this.T.get(id);
      const n=t.P.length,m=P2.length;
      for(let i=0;i<n;i++){const a=t.P[i],b=t.P[(i+1)%n];for(const v of P2)if(surSeg(v,a,b))return true}
      for(let i=0;i<m;i++){const a=P2[i],b=P2[(i+1)%m];for(const v of t.P)if(surSeg(v,a,b))return true}}}
    return false}
  candidats(a,b,poids){const out=[],vus=new Set();
    for(const shape in ANG)for(let k=0;k<ANG[shape].length;k++){const m=make(shape,k,b,a);if(!m)continue;const sig=m.pts.map(K).sort().join(';');if(vus.has(sig))continue;
      if(!this.valide(shape,m.pts,m.r))continue;vus.add(sig);out.push({shape,pts:m.pts,r:m.r,w:Math.pow(this.R(),1/(poids[shape]||1))})}
    out.sort((x,y)=>y.w-x.w);return out}
}
/* choix de l'arête : sommet le plus rempli d'abord, puis le plus proche du centre */
function choisir(P,dedans,poids,cible){let best=null,bs=-1e9;const L=[];
  for(const[e,ab]of P.open){const m=xy(ab[0]),n=xy(ab[1]);const c=[(m[0]+n[0])/2,(m[1]+n[1])/2];if(!dedans(c))continue;
    const s=-Math.hypot(c[0]-cible[0],c[1]-cible[1]);L.push([s,ab])}
  if(!L.length)return null;L.sort((x,y)=>y[0]-x[0]);
  let pick=null;for(const[s,ab]of L.slice(0,NB)){const cs=P.candidats(ab[0],ab[1],poids);if(!cs.length)return{ab,cs};if(!pick||cs.length<pick.cs.length)pick={ab,cs};if(cs.length===1)break}
  return pick}
function remplirD(P,dedans,poids,budget,deadline){return remplir(P,dedans,poids,budget,[0,0],deadline)}
function remplir(P,dedans,poids,budget,cible=[0,0],deadline){const pile=[];let n=0;let c=choisir(P,dedans,poids,cible);
  while(c){if(++n>budget||(deadline&&Date.now()>deadline))return false;let opts=c.cs;let placed=null;
    while(placed===null){while(!opts.length){if(!pile.length)return false;const top=pile.pop();P.retirer(top.id);opts=top.reste}
      const o=opts.shift();placed=P.poser(o.shape,o.pts,o.r);pile.push({id:placed,reste:opts})}
    c=choisir(P,dedans,poids,cible)}return true}

/* remplissage « la plus contrainte d'abord » : on garde en cache les candidats de chaque arête ouverte,
   et on n'invalide que ceux proches d'une tuile posée ou retirée */
function remplirMRV(P,dedans,poids,budget,deadline,bande){const cache=new Map();const pile=[];let n=0;
  const mid=ab=>{const m=xy(ab[0]),q=xy(ab[1]);return[(m[0]+q[0])/2,(m[1]+q[1])/2]};
  const inval=t=>{const c=[(t.bb[0]+t.bb[2])/2,(t.bb[1]+t.bb[3])/2];for(const[k,v]of cache){if(Math.hypot(v.c[0]-c[0],v.c[1]-c[1])<3.2)cache.delete(k)}};
  const choisir=()=>{let best=null,dmin=1e9;if(bande){for(const[e,ab]of P.open){const c=mid(ab);if(dedans(c))dmin=Math.min(dmin,Math.hypot(c[0],c[1]))}}
    for(const[e,ab]of P.open){let v=cache.get(e);if(!v){const c=mid(ab);if(!dedans(c)){cache.set(e,{c,hors:true});continue}
      v={c,cs:P.candidats(ab[0],ab[1],poids)};cache.set(e,v)}if(v.hors)continue;if(bande&&Math.hypot(v.c[0],v.c[1])>dmin+bande)continue;
      if(!best||v.cs.length<best.cs.length||(v.cs.length===best.cs.length&&Math.hypot(...v.c)<Math.hypot(...best.c)))best={e,ab,cs:v.cs,c:v.c};if(!v.cs.length)break}
    return best};
  let c=choisir();
  while(c){if(++n>budget||(deadline&&Date.now()>deadline))return false;let opts=c.cs.slice(),placed=null;
    while(placed===null){while(!opts.length){if(!pile.length)return false;const top=pile.pop();const t=P.T.get(top.id);P.retirer(top.id);inval(t);opts=top.reste}
      const o=opts.shift();placed=P.poser(o.shape,o.pts,o.r);inval(P.T.get(placed));pile.push({id:placed,reste:opts})}
    c=choisir()}return true}

/* recherche à grand voisinage : quand le remplissage bloque, on défait les tuiles libres autour du blocage et on recommence.
   Les deux bords d'un raccord peuvent ainsi bouger, ce qui rend possibles les raccords entre fleurs. */
function remplirLNS(P,dedans,poids,deadline,opts={}){const mid=ab=>{const m=xy(ab[0]),q=xy(ab[1]);return[(m[0]+q[0])/2,(m[1]+q[1])/2]};
  let tours=0;const echecs=new Map();
  while(Date.now()<deadline){tours++;
    const r=mrvPas(P,dedans,poids,opts.pas||1500,Math.min(deadline,Date.now()+(opts.tpas||800)));
    if(r.ok)return true;
    const c=r.ou;if(!c)return false;const key=Math.round(c[0])+','+Math.round(c[1]);const n=(echecs.get(key)||0)+1;echecs.set(key,n);
    const rho=1.6+0.6*Math.min(n,6)+Math.random()*0.8;
    for(const[id,t]of[...P.T]){if(t.fixe)continue;let cc=[0,0];for(const p of t.P){cc[0]+=p[0]/t.P.length;cc[1]+=p[1]/t.P.length}if(Math.hypot(cc[0]-c[0],cc[1]-c[1])<rho)P.retirer(id)}}
  return false}
/* un pas de remplissage « la plus contrainte d'abord » qui garde ce qu'il a posé et dit où il bloque */
function mrvPas(P,dedans,poids,budget,deadline){const cache=new Map();const pile=[];let n=0;let dernier=null;
  const mid=ab=>{const m=xy(ab[0]),q=xy(ab[1]);return[(m[0]+q[0])/2,(m[1]+q[1])/2]};
  const inval=t=>{const c=[(t.bb[0]+t.bb[2])/2,(t.bb[1]+t.bb[3])/2];for(const[k,v]of cache){if(Math.hypot(v.c[0]-c[0],v.c[1]-c[1])<3.2)cache.delete(k)}};
  const choisir=()=>{let best=null;for(const[e,ab]of P.open){let v=cache.get(e);if(!v){const c=mid(ab);if(!dedans(c)){cache.set(e,{c,hors:true});continue}
      v={c,cs:P.candidats(ab[0],ab[1],poids)};cache.set(e,v)}if(v.hors)continue;
      if(!best||v.cs.length<best.cs.length||(v.cs.length===best.cs.length&&Math.hypot(...v.c)<Math.hypot(...best.c)))best={e,ab,cs:v.cs,c:v.c};if(!v.cs.length)break}
    return best};
  let c=choisir();let pire=null;
  while(c){if(!c.cs.length&&(!pire||pile.length<=pire.prof))pire={c:c.c,prof:pile.length};
    if(++n>budget||Date.now()>deadline)return{ok:false,ou:(pire&&pire.c)||c.c};let opts=c.cs.slice(),placed=null;
    while(placed===null){while(!opts.length){if(!pile.length)return{ok:false,ou:(pire&&pire.c)||c.c};const top=pile.pop();const t=P.T.get(top.id);P.retirer(top.id);inval(t);opts=top.reste}
      const o=opts.shift();placed=P.poser(o.shape,o.pts,o.r);inval(P.T.get(placed));pile.push({id:placed,reste:opts})}
    c=choisir()}return{ok:true}}
/* fleur symétrique par 5 autour d'un décagone centré à l'origine */
let V=null;for(const a of[-2,-1,0,1,2])for(const b of[-2,-1,0,1,2])for(const c of[-2,-1,0,1,2])for(const d of[-2,-1,0,1,2]){const v=[a,b,c,d];const w=sub(mulz(v),v);if(K(w)==='1,0,0,0')V=v}
function fleur(seed,R,budget=20000){const P=new Pavage(seed);const rn=P.R;
  const poids={};for(const s in ANG)poids[s]=0.4+rn()*1.6;
  const dec=[0,1,2,3,4,5,6,7,8,9].map(k=>rot(V,k));P.poser('decagone',dec,ANG.decagone);
  const pile=[];let n=0;
  const choisirF=()=>{const L=[];for(const[e,ab]of P.open){const m=xy(ab[0]),q=xy(ab[1]);const c=[(m[0]+q[0])/2,(m[1]+q[1])/2];const d=Math.hypot(c[0],c[1]);if(d<R)L.push([d,ab])}
    if(!L.length)return null;L.sort((x,y)=>x[0]-y[0]);let pick=null;for(const[d,ab]of L.slice(0,10)){const cs=P.candidats(ab[0],ab[1],poids);if(!cs.length)return{ab,cs};if(!pick||cs.length<pick.cs.length)pick={ab,cs};if(cs.length===1)break}return pick};
  const orbite=o=>{const ids=[],vus=new Set();for(let k=0;k<10;k+=2){const q=o.pts.map(p=>rot(p,k));const sig=q.map(K).sort().join(';');if(vus.has(sig))continue;vus.add(sig);
      if(!P.valide(o.shape,q,o.r)){ids.forEach(i=>P.retirer(i));return null}ids.push(P.poser(o.shape,q,o.r))}return ids};
  let c=choisirF();
  while(c){if(++n>budget)return null;let opts=c.cs,placed=null;
    while(placed===null){while(!opts.length){if(!pile.length)return null;const top=pile.pop();top.ids.forEach(i=>P.retirer(i));opts=top.reste}placed=orbite(opts.shift())}
    pile.push({ids:placed,reste:opts});c=choisirF()}
  return P}
let NB=30;const TYPE={decagone:'CIT',pentagone:'DON',papillon:'ANT',losange:'MAR',hexagone:'RES'};
/* royaume : orbites intérieures, 15 pétales à cartes + la Citadelle, 5 à 15 Ressources, d'un seul tenant */
function royaume(P){const T=[...P.T.values()];const cen=t=>{let x=0,y=0;for(const p of t.P){x+=p[0];y+=p[1]}return[x/t.P.length,y/t.P.length]};
  const C=T.map(cen);const c0=C.findIndex(c=>Math.hypot(c[0],c[1])<.05);
  const ek=new Map();T.forEach((t,i)=>{const n=t.pts.length;for(let j=0;j<n;j++){const a=K(t.pts[j]),b=K(t.pts[(j+1)%n]);const k=a<b?a+'|'+b:b+'|'+a;if(!ek.has(k))ek.set(k,[]);ek.get(k).push(i)}});
  const A=T.map(()=>new Set());for(const l of ek.values())if(l.length===2){A[l[0]].add(l[1]);A[l[1]].add(l[0])}
  const orb=new Map();T.forEach((t,i)=>{if(i===c0)return;const k=t.shape+'@'+Math.hypot(...C[i]).toFixed(2);if(!orb.has(k))orb.set(k,[]);orb.get(k).push(i)});
  const O=[...orb.values()].sort((a,b)=>Math.hypot(...C[a[0]])-Math.hypot(...C[b[0]])).slice(0,9);let best=null;
  for(let m=1;m<(1<<O.length);m++){const S=new Set([c0]);O.forEach((o,b)=>{if(m>>b&1)o.forEach(i=>S.add(i))});
    let cartes=0,res=0;for(const i of S){if(i===c0)continue;if(T[i].shape==='hexagone')res++;else cartes++}
    if(cartes!==15||res<5||res>15)continue;
    const vu=new Set([c0]),st=[c0];while(st.length){const x=st.pop();for(const y of A[x])if(S.has(y)&&!vu.has(y)){vu.add(y);st.push(y)}}if(vu.size!==S.size)continue;
    let inn=0,per=0;for(const i of S)for(const j of A[i])S.has(j)?inn++:per++;const kinds=new Set([...S].map(i=>T[i].shape)).size;
    const sc=inn-per+kinds*6-Math.abs(res-10);if(!best||sc>best.sc)best={sc,S}}
  if(!best)return null;return[...best.S].map(i=>T[i])}
/* point exact proche de (x,y) dont l'image conjuguée (z -> z³) reste petite : c'est ce qui rend les raccords possibles */
const conj=p=>{let x=0,y=0;for(let k=0;k<4;k++){x+=p[k]*Math.cos(3*k*Math.PI/5);y+=p[k]*Math.sin(3*k*Math.PI/5)}return[x,y]};
function inv4(M){const n=4,A=M.map((r,i)=>r.concat([0,1,2,3].map(j=>i===j?1:0)));for(let i=0;i<n;i++){let p=i;for(let r=i+1;r<n;r++)if(Math.abs(A[r][i])>Math.abs(A[p][i]))p=r;[A[i],A[p]]=[A[p],A[i]];const d=A[i][i];for(let j=0;j<2*n;j++)A[i][j]/=d;for(let r=0;r<n;r++)if(r!==i){const f=A[r][i];for(let j=0;j<2*n;j++)A[r][j]-=f*A[i][j]}}return A.map(r=>r.slice(n))}
const MAT=[0,1,2,3].map(k=>{const e=[0,0,0,0];e[k]=1;const a=xy(e),c=conj(e);return[a[0],a[1],c[0],c[1]]});
const MT=[0,1,2,3].map(i=>[0,1,2,3].map(j=>MAT[j][i]));const MI=inv4(MT);
function vecConj(x,y){const t=[x,y,0,0];const c=MI.map(r=>r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]);let best=null;
  const b=c.map(Math.round);for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++)for(let k=-2;k<=2;k++)for(let l=-2;l<=2;l++){const p=[b[0]+i,b[1]+j,b[2]+k,b[3]+l];const r=xy(p),q=conj(p);
    const sc=Math.hypot(r[0]-x,r[1]-y)*2+Math.hypot(...q);if(!best||sc<best.sc)best={sc,p}}return best.p}
function vec(x,y){let v=[0,0,0,0],c=[0,0];while(Math.hypot(x-c[0],y-c[1])>0.6){let bi=0,bd=1e9;for(let k=0;k<10;k++){const d=xy(DIR[k]);const dd=Math.hypot(x-c[0]-d[0],y-c[1]-d[1]);if(dd<bd){bd=dd;bi=k}}v=add(v,DIR[bi]);c=xy(v)}return v}
/* carte complète : ton royaume au centre, on remplit tout, puis chaque maison est incrustée :
   on creuse un trou à sa place, on y pose sa fleur, et on recoud l'anneau autour (plusieurs essais si besoin) */
function carte(seed,opts={}){const R=rng(seed*7919+13);const royaumes=[];let s=seed*31;
  while(royaumes.length<5){s++;const P=fleur(s,4.4+R()*0.4);if(!P)continue;const roy=royaume(P);if(!roy)continue;royaumes.push(roy)}
  const rad=roy=>Math.max(...roy.flatMap(t=>t.P.map(p=>Math.hypot(p[0],p[1]))));
  const r0=rad(royaumes[0]);const pos=[[0,0]];const a0=R()*0.4;
  for(let k=1;k<5;k++){const a=Math.PI/4+(k-1)*Math.PI/2+a0+(R()-.5)*.3;const d=r0+rad(royaumes[k])+(opts.ecart||1.6)+R()*.6;pos.push([d*Math.cos(a),d*Math.sin(a)])}
  const ext=Math.max(...pos.map((p,k)=>Math.max(Math.abs(p[0]),Math.abs(p[1]))+rad(royaumes[k])))+(opts.marge||1.2);
  const poids={decagone:1.06,pentagone:1.4,hexagone:3.4,papillon:2.2,losange:1.8};
  const dedans=c=>Math.abs(c[0])<ext&&Math.abs(c[1])<ext;
  let P,roy,okf=false;const cands=[];
  for(let f=0;f<(opts.fonds||8)&&!okf;f++){P=new Pavage(seed*101+f);roy=[royaumes[0].map(t=>P.poser(t.shape,t.pts,t.r,true))];
    okf=remplirMRV(P,dedans,poids,60000,Date.now()+(opts.tfond||8000))}
  if(!okf)return{ok:false,P,roy,ext,pos,etape:'fond'};
  for(let k=1;k<5;k++){const rr=royaumes[k],rk=rad(rr);let fait=false;
    for(let essai=0;essai<(opts.essais||40)&&!fait;essai++){
      /* position compatible : un décagone dont le plus de sommets tombent sur des sommets existants de la mosaïque */
      if(!cands[k]){const L=[];const vs=new Set();for(const t of P.T.values())for(const p of t.pts)vs.add(K(p));
        for(const t of P.T.values()){if(t.fixe)continue;for(const p of t.pts){const pp=xy(p);if(Math.hypot(pp[0]-pos[k][0],pp[1]-pos[k][1])>3.5)continue;
          for(let m=0;m<10;m++){const off=sub(p,rot(V,m));const oo=xy(off);if(Math.hypot(oo[0]-pos[k][0],oo[1]-pos[k][1])>3)continue;let c=0;for(let n=0;n<10;n++)if(vs.has(K(add(off,rot(V,n)))))c++;L.push({c,off,d:Math.hypot(oo[0]-pos[k][0],oo[1]-pos[k][1])})}}}
        const vu=new Set();cands[k]=L.sort((a,b)=>b.c-a.c||a.d-b.d).filter(x=>{const kk=K(x.off);if(vu.has(kk))return false;vu.add(kk);return true});if(opts.debug)console.log('maison',k,'meilleurs',cands[k].slice(0,5).map(x=>x.c))}
      if(essai>=cands[k].length)break;const off=cands[k][essai].off;const o=xy(off);

      const h=(opts.h0||1.4)+R()*(opts.hv||1.6);const ret=[];
      const q=rr.map(t=>({shape:t.shape,pts:t.pts.map(p=>add(p,off)),r:t.r}));
      const QP=q.map(t=>t.pts.map(xy));
      for(const[id,t]of[...P.T]){if(t.fixe)continue;let c=[0,0];for(const p of t.P){c[0]+=p[0]/t.P.length;c[1]+=p[1]/t.P.length}
        let enlever=Math.hypot(c[0]-o[0],c[1]-o[1])<rk+h;
        if(!enlever)for(let a=0;a<q.length&&!enlever;a++){for(const A of pieces(q[a].shape,QP[a],q[a].r))for(const Bq of t.pc)if(!sepConvex(A,Bq)){enlever=true;break}}
        if(enlever){ret.push(t);P.retirer(id)}}
      if(q.some((t,a)=>P.chevauche(t.shape,QP[a],t.r))){if(opts.debug)console.log('chevauche');for(const t of ret)P.poser(t.shape,t.pts,t.r);continue}
      const ids=q.map(t=>P.poser(t.shape,t.pts,t.r,true));
      const avant=new Set(P.T.keys());
      if(opts.debug){let z=0,tot=0;for(const[e,ab]of P.open){tot++;if(!P.candidats(ab[0],ab[1],{}).length)z++}console.log('essai',essai,'retirées',ret.length,'ouvertes',tot,'zéro',z)}
      if((opts.lns?remplirLNS(P,dedans,poids,Date.now()+(opts.tessai||1500)):remplirMRV(P,dedans,poids,opts.bessai||4000,Date.now()+(opts.tessai||1500)))){roy.push(ids);fait=true;break}
      for(const id of[...P.T.keys()])if(!avant.has(id)&&!P.T.get(id).fixe)P.retirer(id);
      for(const id of ids)P.retirer(id);for(const t of ret)P.poser(t.shape,t.pts,t.r)}
    if(!fait)return{ok:false,P,roy,ext,pos,etape:'maison '+k}}
  return{ok:true,P,roy,ext,pos}}
const API={remplirLNS,mrvPas,conj,vecConj,pieces,remplirMRV,setNB:n=>NB=n,Pavage,fleur,royaume,carte,xy,K,TYPE,remplir};
if(typeof module!=='undefined')module.exports=API;else G.MOTEUR=API})(this);
;(function(){const M=typeof module!=='undefined'?module.exports:this.MOTEUR;
/* remplissage par disques croissants : un seul front qui avale les royaumes un à un */
M.remplirDisques=function(P,ext,poids,deadline,pas=1.5){for(let rho=pas;;rho+=pas){const fin=rho>=ext*1.45;
  const ded=c=>Math.abs(c[0])<ext&&Math.abs(c[1])<ext&&(fin||Math.hypot(c[0],c[1])<rho);
  if(!M.remplirMRV(P,ded,poids,30000,deadline))return false;if(fin)return true}};
M.offsetsPres=function(x,y,n){const L=[];const c0=M.vecConj(x,y);for(let a=-3;a<=3;a++)for(let b=-3;b<=3;b++)for(let c=-3;c<=3;c++)for(let d=-3;d<=3;d++){const p=[c0[0]+a,c0[1]+b,c0[2]+c,c0[3]+d];const r=M.xy(p);const dr=Math.hypot(r[0]-x,r[1]-y);if(dr>1.6)continue;L.push({p,s:dr+Math.hypot(...M.conj(p))*0.8})}
  return L.sort((u,v)=>u.s-v.s).slice(0,n).map(o=>o.p)};
})();
;(function(){const M=typeof module!=='undefined'?module.exports:this.MOTEUR;
const add=(p,q)=>[p[0]+q[0],p[1]+q[1],p[2]+q[2],p[3]+q[3]],sub=(p,q)=>[p[0]-q[0],p[1]-q[1],p[2]-q[2],p[3]-q[3]];
const mulz=p=>[-p[3],p[0]+p[3],p[1]-p[3],p[2]+p[3]];const rot=(p,k)=>{for(let i=0;i<k;i++)p=mulz(p);return p};const K=M.K,xy=M.xy;
/* accrocher une fleur au front : on cherche une rotation et une translation exactes qui collent un de ses côtés extérieurs
   sur un côté libre du front, sans chevauchement ni jonction en T ; on garde la pose qui touche le plus de côtés */
M.accrocher=function(P,roy,cible,rayon){const bord=[];const ek=new Set();for(const t of roy){const n=t.pts.length;for(let i=0;i<n;i++)ek.add(K(t.pts[i])+'|'+K(t.pts[(i+1)%n]))}
  for(const t of roy){const n=t.pts.length;for(let i=0;i<n;i++){const a=t.pts[i],b=t.pts[(i+1)%n];if(!ek.has(K(b)+'|'+K(a)))bord.push([a,b])}}
  const front=[];for(const[e,ab]of P.open){const m=xy(ab[0]);if(Math.hypot(m[0]-cible[0],m[1]-cible[1])<rayon&&!P.T.get(P.edges.get(e)).fixe)front.push(ab)}
  const fixes=[];for(const t of P.T.values())if(t.fixe)for(const p of t.P)fixes.push(p);
  const poses=[];const vus=new Set();
  for(let k=0;k<10;k+=1){for(const[a,b]of bord){const ra=rot(a,k),rb=rot(b,k);for(const[fa,fb]of front){
      // le côté de la fleur (ra->rb) doit tomber sur fb->fa
      if(K(sub(rb,ra))!==K(sub(fa,fb)))continue;const off=sub(fb,ra);const sig=k+'#'+K(off);if(vus.has(sig))continue;vus.add(sig);
      const o=xy(off);const c0=xy(add(rot([0,0,0,0],k),off));
      const q=roy.map(t=>({shape:t.shape,r:t.r,pts:t.pts.map(p=>add(rot(p,k),off))}));
      let ok=true;for(const t of q){if(!P.valide(t.shape,t.pts,t.r)){ok=false;break}}
      if(ok){outer:for(const t of q)for(const p of t.pts){const pp=xy(p);for(const f of fixes)if(Math.hypot(pp[0]-f[0],pp[1]-f[1])<1.8){ok=false;break outer}}}
      if(!ok)continue;
      // contacts : sommets partagés avec l'existant
      let contact=0;for(const t of q)for(const p of t.pts)if(P.vsum.has(K(p)))contact++;
      poses.push({q,contact,d:Math.hypot(c0[0]-cible[0],c0[1]-cible[1]),centre:c0})}}}
  poses.sort((u,v)=>(v.contact-u.contact)||(u.d-v.d));return poses};
/* valide sans tenir compte des tuiles de la fleur elle-même : on pose tuile par tuile et on vérifie au fur et à mesure */
M.poserFleur=function(P,q){const ids=[];for(const t of q){if(!P.valide(t.shape,t.pts,t.r)){ids.forEach(i=>P.retirer(i));return null}ids.push(P.poser(t.shape,t.pts,t.r,true))}return ids};
M.carte2=function(seed,opts={}){const R=(s=>()=>{s^=s<<13;s>>>=0;s^=s>>>17;s^=s<<5;s>>>=0;return s/4294967296})(seed*7919+13|1);
  const royaumes=[];let s=seed*31;while(royaumes.length<5){s++;const f=M.fleur(s,4.4+R()*0.4);if(!f)continue;const r=M.royaume(f);if(r)royaumes.push(r)}
  const rad=r=>Math.max(...r.flatMap(t=>t.P.map(p=>Math.hypot(...p))));const r0=rad(royaumes[0]);
  const poids={decagone:1.06,pentagone:1.4,hexagone:3.4,papillon:2.2,losange:1.8};
  const a0=R()*Math.PI*2;const cibles=[null];for(let k=1;k<5;k++){const a=a0+(k-1)*Math.PI/2+(R()-.5)*.4;const d=r0+rad(royaumes[k])+(opts.ecart||3.2)+R()*.8;cibles.push([d*Math.cos(a),d*Math.sin(a),a,d])}
  const ext=Math.max(...cibles.slice(1).map((c,i)=>Math.max(Math.abs(c[0]),Math.abs(c[1]))+rad(royaumes[i+1])))+(opts.marge||1.0);
  const P=new M.Pavage(seed);const roy=[royaumes[0].map(t=>P.poser(t.shape,t.pts,t.r,true))];
  // étape 1 : front jusqu'au bord intérieur des maisons
  const r1=Math.min(...cibles.slice(1).map((c,i)=>c[3]-rad(royaumes[i+1])))-0.3;
  if(!M.remplirMRV(P,c=>Math.hypot(c[0],c[1])<r1,poids,30000,Date.now()+(opts.t1||6000)))return{ok:false,etape:'centre',P,roy,ext};
  for(let k=1;k<5;k++){const rk=rad(royaumes[k]);const c=cibles[k];const dir=[Math.cos(c[2]),Math.sin(c[2])];
    // on vise le front côté maison
    const pt=[dir[0]*r1,dir[1]*r1];const poses=M.accrocher(P,royaumes[k],pt,3.5).filter(p=>{const cc=p.centre;return Math.hypot(cc[0],cc[1])>r1+rk*0.6});
    let pose=null;for(const p of poses.slice(0,opts.npos||30)){const ids=M.poserFleur(P,p.q);if(ids){pose={ids,p};break}}
    if(!pose)return{ok:false,etape:'maison '+k,P,roy,ext};roy.push(pose.ids)}
  const ext2=Math.max(ext,...roy.slice(1).map(ids=>Math.max(...ids.flatMap(id=>P.T.get(id).P.map(p=>Math.max(Math.abs(p[0]),Math.abs(p[1])))))))+(opts.marge||1.0);
  const ok=M.remplirRepare(P,c=>Math.abs(c[0])<ext2&&Math.abs(c[1])<ext2,poids,Date.now()+(opts.t2||30000),{debug:opts.debug});
  return{ok,etape:ok?'':'fin',P,roy,ext:ext2}};
})();
;(function(){const M=typeof module!=='undefined'?module.exports:this.MOTEUR;const xy=M.xy;
/* remplissage « glouton + réparation » : on pose toujours dans la case la plus contrainte ; si une case n'a plus aucune tuile possible,
   on efface les tuiles libres autour (rayon qui grandit si l'endroit résiste) et on continue. Pas de retour en arrière global. */
M.remplirRepare=function(P,dedans,poids,deadline,opts={}){const cache=new Map();const echecs=new Map();let n=0;
  const mid=ab=>{const m=xy(ab[0]),q=xy(ab[1]);return[(m[0]+q[0])/2,(m[1]+q[1])/2]};
  const inval=(c,r)=>{for(const[k,v]of cache){if(Math.hypot(v.c[0]-c[0],v.c[1]-c[1])<r)cache.delete(k)}};
  const cen=t=>[(t.bb[0]+t.bb[2])/2,(t.bb[1]+t.bb[3])/2];
  while(Date.now()<deadline){n++;let best=null;
    for(const[e,ab]of P.open){let v=cache.get(e);if(!v){const c=mid(ab);if(!dedans(c)){cache.set(e,{c,hors:true});continue}v={c,cs:P.candidats(ab[0],ab[1],poids)};cache.set(e,v)}
      if(v.hors)continue;if(!best||v.cs.length<best.cs.length||(v.cs.length===best.cs.length&&Math.hypot(...v.c)<Math.hypot(...best.c)))best={e,ab,cs:v.cs,c:v.c};if(!v.cs.length)break}
    if(!best)return true;
    if(opts.debug&&n%500===0)console.log('it',n,'tuiles',P.T.size,'ouvertes',P.open.size,'pire',best.cs.length,best.c.map(v=>v.toFixed(1)).join(','));
    if(!best.cs.length){const key=Math.round(best.c[0]/1.5)+','+Math.round(best.c[1]/1.5);const k=(echecs.get(key)||0)+1;echecs.set(key,k);
      const rho=1.3+0.45*Math.min(k,12)+Math.random()*0.6;
      for(const[id,t]of[...P.T]){if(t.fixe)continue;const c=cen(t);if(Math.hypot(c[0]-best.c[0],c[1]-best.c[1])<rho)P.retirer(id)}
      inval(best.c,rho+3.5);
      /* le trou est borné : on le recoud avec retour en arrière, limité à ce trou */
      const c0=best.c,rr=rho+1.2;const r=M.mrvPas(P,c=>dedans(c)&&Math.hypot(c[0]-c0[0],c[1]-c0[1])<rr,poids,opts.bt||4000,Math.min(deadline,Date.now()+(opts.tbt||700)));
      if(r.ok){echecs.set(key,Math.max(0,k-2))}
      cache.clear();continue}
    const o=best.cs[0];const id=P.poser(o.shape,o.pts,o.r);inval(cen(P.T.get(id)),3.5)}
  return false};
})();
