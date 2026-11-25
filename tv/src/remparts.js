/* MozaWorld 2.47 : les remparts dans le monde (25 nov., « Faudrait ajouter le rempart in game… graphiquement parlant »).
   Chaque frontière d'un royaume (le vôtre, en pierre blonde et bannières or ; chaque maison rivale, en pierre sombre à ses couleurs)
   se dresse en vrai mur crénelé le long des arêtes de la mosaïque : une tour à chaque sommet, une porte au milieu de chaque arête
   (deux tours de porte et un linteau), des bannières. Le mur arrête le héros ; on passe par les portes.
   Tout est dessiné en maillages instanciés (5 maillages pour toute la région), refaits seulement quand un royaume change. */
(function(){
const H=9,EP=3.4,PORTE=30,TR=5.5,TH=15,TP=4.2,TPH=13,PAS_C=3.6;   /* hauteur, épaisseur, largeur de porte, tours */
const MAT={
  mur:M(0xffffff,{roughness:.93}),cren:M(0xffffff,{roughness:.93}),
  tour:M(0xffffff,{roughness:.9}),toit:M(0xffffff,{roughness:.7}),ban:M(0xffffff,{roughness:.8,side:THREE.DoubleSide})};
const GEO={mur:new THREE.BoxGeometry(1,1,1).translate(0,.5,0),cren:new THREE.BoxGeometry(1.6,1.5,1).translate(0,.75,0),
  tour:new THREE.CylinderGeometry(1,1.08,1,10).translate(0,.5,0),toit:new THREE.ConeGeometry(1,1,10).translate(0,.5,0),
  ban:new THREE.BoxGeometry(.12,1,1).translate(0,-.5,.5)};
const PIERRE={moi:LIN('#a89a80'),riv:LIN('#5b554e')},PIERRE2={moi:LIN('#7d705c'),riv:LIN('#3e3a35')};
let MS=null,SOL=[],CLE='',PORTES=[];
function roiDe(id){if(S.own[id])return{k:'moi',c:'#e2b65e'};const m=typeof maisonDe==='function'?maisonDe(id):null;return m?{k:m.k,c:m.col}:null}
function vider(){if(MS)for(const k in MS){scene.remove(MS[k]);MS[k].dispose&&MS[k].dispose()}MS=null;
  for(const s of SOL){s.on=false;const i=solids.indexOf(s);if(i>=0)solids.splice(i,1)}SOL=[]}
/* les arêtes de frontière dans la région chargée : une par paire de tuiles, la vôtre d'abord */
function frontieres(){const vu=new Map(),cle=p=>Math.round(p[0])+','+Math.round(p[1]);
  for(const Z of ZN){const r=roiDe(Z.id);if(!r)continue;const P=Z.poly,n=P.length;
    for(let i=0;i<n;i++){const a=P[i],b=P[(i+1)%n],k=[cle(a),cle(b)].sort().join('|');
      const nb=voisin(Z,k),o=nb&&roiDe(nb);if(o&&o.k===r.k)continue;
      const e=vu.get(k);if(e&&(e.r.k==='moi'||r.k!=='moi'))continue;vu.set(k,{a,b,r,Z})}}
  return[...vu.values()]}
let IDX=null;
function voisin(Z,k){if(!IDX){IDX=new Map();const cle=p=>Math.round(p[0])+','+Math.round(p[1]);
    for(const Y of (typeof ZW!=='undefined'?ZW:ZN)){const P=Y.poly,n=P.length;for(let i=0;i<n;i++){const kk=[cle(P[i]),cle(P[(i+1)%n])].sort().join('|');
      const L=IDX.get(kk);if(L)L.push(Y.id);else IDX.set(kk,[Y.id])}}}
  const L=IDX.get(k)||[];for(const id of L)if(id!==Z.id)return id;return null}
function signature(){let s='';for(const Z of ZN){const r=roiDe(Z.id);if(r)s+=Z.id+':'+r.k+';'}return s}
function batir(){vider();const E=frontieres();PORTES=E.map(e=>({x:(e.a[0]+e.b[0])/2,z:(e.a[1]+e.b[1])/2,cx:e.Z.c[0],cz:e.Z.c[1],k:e.r.k}));if(!E.length)return;
  const leger=QI===0,contreforts=[],murs=[],crens=[],tours=[],toits=[],bans=[],coins=new Map();
  const tourEn=(x,z,r,h,R,porte)=>{tours.push([x,z,r,h,R]);toits.push([x,z,r*1.25,h,R]);if(!leger||porte)bans.push([x,z,r,h,R])};
  for(const e of E){const ax=e.a[0],az=e.a[1],bx=e.b[0],bz=e.b[1],L=Math.hypot(bx-ax,bz-az);if(L<20)continue;
    const ux=(bx-ax)/L,uz=(bz-az)/L,rot=Math.atan2(-uz,ux),mx=(ax+bx)/2,mz=(az+bz)/2;
    /* tours aux sommets (une seule par sommet) */
    for(const p of[e.a,e.b]){const k=Math.round(p[0])+','+Math.round(p[1]);if(!coins.has(k)){coins.set(k,1);tourEn(p[0],p[1],TR,TH,e.r)}}
    /* deux pans de mur, de la tour du sommet à la tour de porte */
    for(const[s0,s1]of[[TR*.7,L/2-PORTE/2-TP*.5],[L/2+PORTE/2+TP*.5,L-TR*.7]]){const l=s1-s0;if(l<2)continue;const cx=ax+ux*(s0+l/2),cz=az+uz*(s0+l/2);
      murs.push([cx,cz,l,rot,e.r]);
      const nc=Math.floor(l/26);for(let j=1;j<nc;j++){const t=s0+j*l/nc;contreforts.push([ax+ux*t,az+uz*t,rot,e.r])}SOL.push(sBox(null,cx,cz,l/2,EP/2+.6,Math.atan2(uz,ux),-3,H));
      const n=Math.floor(l/PAS_C);for(let j=0;j<n;j++){const t=s0+(j+.5)*l/n;for(const side of leger?[1]:[1,-1])crens.push([ax+ux*t-uz*side*EP*.36,az+uz*t+ux*side*EP*.36,rot,e.r])}}
    /* porte : deux tours et un linteau crénelé au-dessus du passage */
    for(const sg of[-1,1]){const t=L/2+sg*(PORTE/2+TP*.2);tourEn(ax+ux*t,az+uz*t,TP,TPH,e.r,true);SOL.push(sCyl(null,ax+ux*t,az+uz*t,TP+.4,-3,TPH))}
    murs.push([mx,mz,PORTE+TP,rot,e.r,H-1.6,2.4]);
    for(const sg of[-1,0,1])crens.push([mx+ux*sg*PORTE*.3,mz+uz*sg*PORTE*.3,rot,e.r,H+.8])}
  for(const c of coins.keys()){const[x,z]=c.split(',').map(Number);SOL.push(sCyl(null,x,z,TR+.4,-3,TH))}
  for(const c of contreforts)murs.push([c[0],c[1],2.6,c[2],c[3],-2.5,H+3.6,EP+2.4,1]);
  MS={mur:IM(GEO.mur,MAT.mur,murs.length),cren:IM(GEO.cren,MAT.cren,Math.max(1,crens.length)),tour:IM(GEO.tour,MAT.tour,tours.length),
    toit:IM(GEO.toit,MAT.toit,toits.length,false),ban:IM(GEO.ban,MAT.ban,Math.max(1,bans.length),false)};
  const pierre=(r,k)=>r.k==='moi'?(k?PIERRE2.moi:PIERRE.moi):(k?PIERRE2.riv:PIERRE.riv),col=r=>LIN(r.c);
  murs.forEach((m,i)=>{const[x,z,l,rot,r,y0,h,ep,cf]=m;put(MS.mur,i,x,(y0===undefined?-2.5:y0),z,l,h||H+2.5,ep||EP,rot);tint(MS.mur,i,pierre(r,cf),.92+.16*hash(x,z))});
  crens.forEach((c,i)=>{const[x,z,rot,r,y]=c;put(MS.cren,i,x,y||H,z,1,1,1,rot);tint(MS.cren,i,pierre(r,1))});
  tours.forEach((t,i)=>{const[x,z,r,h,R]=t;put(MS.tour,i,x,-2.5,z,r,h+2.5,r,hash(x,z)*6);tint(MS.tour,i,pierre(R),.9+.15*hash(z,x))});
  toits.forEach((t,i)=>{const[x,z,r,h,R]=t;put(MS.toit,i,x,h,z,r,r*1.5,r,hash(x,z)*6);tint(MS.toit,i,col(R),.75)});
  bans.forEach((b,i)=>{const[x,z,r,h,R]=b;put(MS.ban,i,x,h+r*1.5+3.2,z,1,3.2,2.6,hash(x,z)*6.28);tint(MS.ban,i,col(R),1.1)});
  if(!bans.length)put(MS.ban,0,0,-999,0,0,0,0);if(!crens.length)put(MS.cren,0,0,-999,0,0,0,0);
  for(const k in MS)done(MS[k]);if(typeof CULL!=='undefined')CULL.dirty=true}
function maj(){if(typeof S==='undefined'||!S.own||typeof ZN==='undefined')return;const s=signature()+'|'+QI;if(s===CLE)return;CLE=s;try{batir()}catch(e){console.warn('remparts',e)}}
setInterval(()=>{if(typeof started!=='undefined'&&started)maj()},1000);
window.rempartsMaj=()=>{CLE='';maj()};
window.rempartsEtat=()=>({murs:MS?MS.mur.count:0,tours:MS?MS.tour.count:0,solides:SOL.length,portes:PORTES.slice()});
})();
