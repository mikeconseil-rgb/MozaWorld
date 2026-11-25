/* MozaWorld 2.49 : pose les fiches de zones sur un monde généré, et le note.
   - Cœur fixe : Berestograd, les quatre zones d'origine et les 16 zones de la 2.0 gardent leur fiche.
   - Ailleurs, chaque tuile reçoit une fiche de son type (décagone = Citadelle, pentagone = Donjon, hexagone = Ressource,
     papillon = Antre, losange = Assemblée), écrite d'abord ; les tuiles d'une même faction (le mana de la zone) se regroupent,
     les factions opposées sur la roue (Feu-Glace, Pierre-Eau, Vent-Sève) ne se touchent jamais.
   - Quand il ne reste plus de fiche possible : une zone d'ombre détruite (règle de l'utilisateur, 25 nov.).
   Usage : node assigner.js <monde brut.json> <sortie.js> [graine]  → écrit tv/mondes/<id>.js et affiche la note. */
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'..','..','src','carte.js'),'utf8');const CP=new Function(src+';return CARTE_PLUS')();
const [,,entree,sortie,g]=process.argv;const W=JSON.parse(fs.readFileSync(entree,'utf8'));
let s0=(+g||W.graine||1)*104729+7;const rnd=()=>{s0=(s0*1664525+1013904223)>>>0;return s0/4294967296};
const TY={decagone:'CIT',pentagone:'DON',hexagone:'RES',papillon:'ANT',losange:'MAR'},TN={CIT:'Citadelle',DON:'Donjon',RES:'Ressource',ANT:'Antre',MAR:'Assemblée'};
const ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'],lien=(a,b)=>{if(!a||!b)return'ombre';if(a===b)return'meme';const d=Math.abs(ROUE.indexOf(a)-ROUE.indexOf(b)),e=Math.min(d,6-d);return e===1?'allie':e===3?'oppose':'neutre'};
const MANA_ORIG={CIT:'Glace',DON:'Feu',ANT:'Eau',MAR:'Glace',RES:'Vent'};
const cen=P=>{let x=0,y=0;for(const p of P){x+=p[0];y+=p[1]}return[x/P.length,y/P.length]};
const T=W.tuiles.map((t,i)=>({i,forme:t.forme,mod:TY[t.forme],roy:t.roy,poly:t.poly,c:cen(t.poly),id:null,mana:null,ombre:false,fixe:!!t.c,cid:t.c}));
/* voisinage par côtés partagés */
const cle=p=>Math.round(p[0])+','+Math.round(p[1]),E=new Map();
T.forEach(t=>{const n=t.poly.length;for(let k=0;k<n;k++){const a=cle(t.poly[k]),b=cle(t.poly[(k+1)%n]),e=a<b?a+'|'+b:b+'|'+a;(E.get(e)||E.set(e,[]).get(e)).push(t.i)}});
const V=T.map(()=>new Set());for(const L of E.values())if(L.length===2){V[L[0]].add(L[1]);V[L[1]].add(L[0])}
/* cœur fixe : fiche d'origine, retrouvée par le centre de la tuile */
const parCentre=new Map(CP.map(d=>[cle(cen(d.poly)),d]));const pris=new Set();
for(const t of T)if(t.fixe){if(['CIT','ANT','RES','MAR','DON'].includes(t.cid)){t.id=t.cid;t.mana=MANA_ORIG[t.cid];continue}
  const d=parCentre.get(cle(t.c));if(!d)throw new Error('cœur : tuile sans fiche '+t.cid);t.id=d.id;t.mana=d.mana;pris.add(d.id)}
/* réserve de fiches par type et par mana : écrites d'abord */
const RES={};for(const d of CP){if(pris.has(d.id))continue;const k=d.mod+'|'+d.mana;(RES[k]||(RES[k]=[])).push(d)}
for(const k in RES){const L=RES[k];for(let i=L.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[L[i],L[j]]=[L[j],L[i]]}L.sort((a,b)=>(b.pret!==false)-(a.pret!==false))}
const dispo=(mod,m)=>(RES[mod+'|'+m]||[]).length;
/* ordre de pose : des royaumes vers l'extérieur, en vague (les voisins posés guident les suivants) */
const ordre=[],vu=new Set();const file=T.filter(t=>t.fixe||t.roy>=0).map(t=>t.i);file.forEach(i=>vu.add(i));
for(let h=0;h<file.length;h++){const i=file[h];ordre.push(i);const L=[...V[i]].filter(j=>!vu.has(j)).sort(()=>rnd()-.5);for(const j of L){vu.add(j);file.push(j)}}
for(const t of T)if(!vu.has(t.i))ordre.push(t.i);
let nOmbre=0;
for(const i of ordre){const t=T[i];if(t.id)continue;const vm=[...V[i]].map(j=>T[j]).filter(u=>u.id&&!u.ombre).map(u=>u.mana);
  let best=null,bs=-1e9;
  for(const m of ROUE){const n=dispo(t.mod,m);if(!n)continue;if(vm.some(x=>lien(x,m)==='oppose'))continue;
    let sc=0;for(const x of vm){const l=lien(x,m);sc+=l==='meme'?4:l==='allie'?1:0}sc+=Math.min(3,n/12)+rnd()*1.2;if(sc>bs){bs=sc;best=m}}
  if(best===null){t.ombre=true;t.id='OMB'+String(++nOmbre).padStart(3,'0');continue}
  const d=RES[t.mod+'|'+best].shift();t.id=d.id;t.mana=best}
/* note : regroupement (part des côtés entre deux zones de même faction), ombres, fiches non écrites, royaumes */
let paires=0,memes=0,opp=0;for(const L of E.values())if(L.length===2){const a=T[L[0]],b=T[L[1]];if(a.ombre||b.ombre||(a.fixe&&b.fixe))continue;paires++;const l=lien(a.mana,b.mana);if(l==='meme')memes++;if(l==='oppose')opp++}
const ecrite=id=>{const d=CP.find(x=>x.id===id);return!d||d.pret!==false};
const roy=[0,1,2,3,4].map(k=>{const L=T.filter(t=>t.roy===k);return{n:L.length,ombres:L.filter(t=>t.ombre).length,blanches:L.filter(t=>!t.ombre&&!ecrite(t.id)).length,
  types:Object.fromEntries(['CIT','DON','RES','ANT','MAR'].map(m=>[m,L.filter(t=>t.mod===m).length]))}});
const note={tuiles:T.length,ombres:nOmbre,blanches:T.filter(t=>!t.ombre&&!ecrite(t.id)).length,regroupement:+(memes/paires).toFixed(3),opposees:opp,royaumes:roy};
note.inutilisees=CP.length+5-(T.length-nOmbre);note.score=+(note.regroupement*100-note.ombres*.15-note.inutilisees*.1-roy.reduce((s,r)=>s+r.ombres*3+r.blanches*2,0)-Math.max(0,note.tuiles-960)*.2).toFixed(2);
/* départ : la Citadelle au cœur de votre fleur (coordonnées du monde = carte × 2) */
const F0=T.filter(t=>t.roy===0);let fx=0,fz=0;for(const t of F0){fx+=t.c[0]/F0.length;fz+=t.c[1]/F0.length}
const cap=F0.filter(t=>t.mod==='CIT'&&!t.ombre).sort((a,b)=>Math.hypot(a.c[0]-fx,a.c[1]-fz)-Math.hypot(b.c[0]-fx,b.c[1]-fz))[0]||F0[0];
note.dep=[Math.round(cap.c[0]*2),Math.round(cap.c[1]*2)];note.cap=cap.id;
/* sortie : un fichier js chargé avant le jeu (window.MONDE_GEN) */
const id=path.basename(sortie,'.js');
const r1=v=>Math.round(v*10)/10;
const M={id,rosace:W.rosace,fleurs:W.fleurs,note,tuiles:T.map(t=>{const o={id:t.id,p:t.poly.map(p=>[r1(p[0]),r1(p[1])])};if(t.roy>=0)o.r=t.roy;if(t.ombre)o.m=t.mod;return o})};
if(sortie!=='-')fs.writeFileSync(sortie,'window.MONDE_GEN='+JSON.stringify(M)+';\n');
console.log(JSON.stringify(Object.assign({id},note,{royaumes:undefined,roy0:roy[0]})));
