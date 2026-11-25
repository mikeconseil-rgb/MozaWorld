/* MozaWorld 2.49 (25 nov., « intégrer le moteur de génération de mondes ») : un monde en rosace.
   Cœur fixe (Berestograd et les 20 zones de la carte 2.0, décision « 1. Oui pour l'instant »), couronne de cinq fleurs-royaumes
   (une même fleur cinq fois, ou cinq fleurs différentes), puis remplissage sans trou jusqu'au rayon R, avec réparation.
   Usage : node generer.js <rosace 0|1|2|4|5|mix> <graine> <sortie.json> [rayon]   (centre.json : python3 paver.py, CENTRE_SEUL=centre.json) */
const fs=require('fs'),path=require('path');const M=require('./moteur.js');const C=require('./couronne.js');
const FL=require('./fleurs6.json'),CEN=require('./centre.json');
const [,,ros,graine,sortie,ray]=process.argv;const R=+ray||22.5,seed=+graine||1;
let s0=seed*7919+13;Math.random=()=>{s0=(s0*1664525+1013904223)>>>0;return s0/4294967296};   /* tirages reproductibles */
const add=(p,q)=>[p[0]+q[0],p[1]+q[1],p[2]+q[2],p[3]+q[3]];
const OK=[0,1,2,4,5],poids=Object.assign({decagone:3,pentagone:8,hexagone:2.5,papillon:3.2,losange:.6},JSON.parse(process.env.POIDS||'{}'));
const fls=ros==='mix'?OK.slice().sort(()=>Math.random()-.5).map(j=>FL[j]):[0,1,2,3,4].map(()=>FL[+ros]);
const P=new M.Pavage(seed);for(const t of CEN.tiles)P.poser(t.shape,t.pts,t.r,true);
const roys=[[],[],[],[],[]],t0=Date.now();
for(let k=0;k<5;k++){let ok=false;
  for(let essai=0;essai<60&&!ok;essai++){const D=(+process.env.DCOUR||15.5)+Math.random()*1.5+essai*.05,th=Math.PI/2+(Math.random()-.5)*.35,imp=Math.random()<.5?1:0;
    const off=M.vecConj(D*Math.cos(th),D*Math.sin(th)),ids=[];
    for(const t of fls[k].tiles){if(!t.roy)continue;const pts=t.pts.map(p=>C.rot(add(C.rot(p,imp),off),2*k));if(!P.valide(t.shape,pts,t.r))break;ids.push(P.poser(t.shape,pts,t.r,true))}
    if(ids.length===fls[k].tiles.filter(t=>t.roy).length){roys[k]=ids;ok=true}else ids.forEach(i=>P.retirer(i))}
  if(!ok){console.log(JSON.stringify({ok:false,raison:'fleur '+k}));process.exit(2)}}
/* graines de Citadelles : des décagones posés d'avance sur une grille lâche (retirables par la réparation), comme la carte 2.15 */
{const PAS=+process.env.PAS_DEC||5.6,dec=CEN.tiles.find(t=>t.shape==='decagone');let nd=0;
  for(let gx=-6;gx<=6;gx++)for(let gy=-6;gy<=6;gy++){const x=gx*PAS+(gy&1)*PAS/2+(Math.random()-.5),y=gy*PAS*.866+(Math.random()-.5);if(Math.hypot(x,y)>R-2.5||Math.hypot(x,y)<6)continue;
    const off=M.vecConj(x,y),pts=dec.pts.map(p=>add(p,off));if(P.valide('decagone',pts,dec.r)){P.poser('decagone',pts,dec.r,false);nd++}}}
const ok=M.remplirRepare(P,c=>Math.hypot(c[0],c[1])<R,poids,Date.now()+(+process.env.TMAX||90000),{debug:!!process.env.DEBUG});
if(!ok){console.log(JSON.stringify({ok:false,raison:'remplissage',tuiles:P.T.size,s:(Date.now()-t0)/1000}));process.exit(3)}
/* coordonnées de la carte (arête 200) : la similitude qui pose le décagone d'origine sur Berestograd */
const S=CEN.sim,f=p=>{const [x,y]=M.xy(p),dx=x-S.a0[0],dy=y-S.a0[1];return[+(S.b0[0]+S.k[0]*dx-S.k[1]*dy).toFixed(3),+(S.b0[1]+S.k[1]*dx+S.k[0]*dy).toFixed(3)]};
const roiDe=new Map();roys.forEach((L,k)=>L.forEach(id=>roiDe.set(id,k)));const cen=CEN.tiles.map((t,i)=>i);
const out=[];let i=0;for(const[id,t]of P.T){out.push({c:i<CEN.tiles.length?(CEN.tiles[i].id||'C'+i):null,roy:roiDe.has(id)?roiDe.get(id):-1,forme:t.shape,poly:t.pts.map(f)});i++}
fs.writeFileSync(sortie,JSON.stringify({rosace:ros,graine:seed,fleurs:fls.map(x=>x.titre),rayon:R,tuiles:out}));
const nb={};for(const t of out)nb[t.forme]=(nb[t.forme]||0)+1;console.log(JSON.stringify({ok:true,nb,tuiles:out.length,s:(Date.now()-t0)/1000}));
