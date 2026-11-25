/* MozaWorld 2.49 : les mondes générés (25 nov., « intégrer le moteur de génération de mondes » ;
   « une nouvelle partie demandera le type de rosace royaumes ou aléatoire » ; « s'il n'y a pas suffisamment de tuiles
   pour finir de paver le plan, mets une zone d'ombre détruite » ; « repasse les générations et garde les meilleures »).
   - Une banque de mondes déjà générés et notés (tv/mondes/*.js, outils dans tv/tools/mondes) : au centre, le cœur fixe
     (Berestograd, les quatre zones d'origine et les 16 zones de la 2.0, décision « 1. Oui pour l'instant ») ; autour, une couronne
     de cinq fleurs-royaumes : la vôtre (votre royaume de départ, la fleur entière au niveau 1, « 2 oui ») et celles des quatre maisons.
   - Le monde choisi est retenu dans localStorage (mz-monde) ; un petit script le charge avant le jeu (window.MONDE_GEN, voir build.sh).
   - Ici, avant core.js : la carte (CARTE_PLUS) est refaite à partir du monde choisi. Chaque fiche de zone garde son id, son nom et
     son histoire ; seule sa place change. Les zones d'ombre détruites sont des tuiles mortes : sol noirci, pas de Pierre d'éveil.
   Sans monde choisi : la carte classique (925 zones), comme avant. */
const MONDES_FLEURS=['Les Cinq Soleils','La Rose de sang','La Grande Rosace',null,'La Couronne de losanges','La Corolle du Sénat'];
const MONDE=(()=>{const W=typeof window!=='undefined'&&window.MONDE_GEN;if(!W||!Array.isArray(W.tuiles)||typeof CARTE_PLUS==='undefined')return null;
  try{const par={};for(const d of CARTE_PLUS)par[d.id]=d;const ORIG={CIT:1,ANT:1,RES:1,MAR:1,DON:1};
    const anc=CARTE_PLUS.slice(0,16).map(d=>d.id),vu=new Set(),L=[];
    const TN={CIT:'Citadelle',DON:'Donjon',RES:'Ressource',ANT:'Antre',MAR:'Assemblée'};
    /* les 16 zones de la 2.0 restent en tête (core.js les construit toujours dans la région d'origine) */
    const T={};for(const t of W.tuiles)T[t.id]=t;
    for(const id of anc)if(T[id]){L.push(Object.assign({},par[id],{poly:T[id].p}));vu.add(id)}
    const roy={},dep=[];
    for(const t of W.tuiles){if(t.r!==undefined){roy[t.id]=t.r;if(t.r===0)dep.push(t.id)}
      if(ORIG[t.id]||vu.has(t.id))continue;vu.add(t.id);
      if(t.m){L.push({id:t.id,sz:t.id,mod:t.m,type:TN[t.m],biome:'Cité en ruines',mana:'Pierre',culture:'Gothique',pm:'Cendre',pp:'Cendre',
        nom:'Zone d\'ombre détruite',poly:t.p,pret:false,ombre:true});continue}
      const d=par[t.id];if(d)L.push(Object.assign({},d,{poly:t.p}))}
    if(L.length<100||!dep.length)return null;
    CARTE_PLUS.length=0;for(const d of L)CARTE_PLUS.push(d);
    /* la Citadelle au cœur de votre fleur : départ, retour après la mort, région « d'ici » pour le gameplay du monde */
    const cen=p=>{let x=0,z=0;for(const q of p){x+=q[0];z+=q[1]}return[x/p.length,z/p.length]};
    let fx=0,fz=0;for(const id of dep){const c=cen(T[id].p);fx+=c[0]/dep.length;fz+=c[1]/dep.length}
    let cap=null,bd=1e9;for(const id of dep){const d=par[id];if(!d||d.mod!=='CIT')continue;const c=cen(T[id].p),e=Math.hypot(c[0]-fx,c[1]-fz);if(e<bd){bd=e;cap=id}}
    if(!cap)cap=dep[0];const cc=cen(T[cap].p);
    return{id:W.id,rosace:W.rosace,fleurs:W.fleurs||[],roy,dep,cap,c:[cc[0]*2,cc[1]*2]}}   /* ×2 : SC/2, comme core.js */
  catch(e){console.warn('monde généré illisible',e);return null}})();
/* centre de la région de départ et zone de départ, pour le reste du jeu */
const DEP_C=()=>MONDE?[Math.round(MONDE.c[0]),Math.round(MONDE.c[1])]:[0,0];
const DEP_ID=()=>MONDE?MONDE.cap:'CIT';
const estOmbre=Z=>!!(Z&&Z.d&&Z.d.ombre);
/* le choix de la nouvelle partie : la rosace des royaumes, au hasard, ou la carte classique */
function choisirMonde(retour){const B=typeof MONDES_BANQUE!=='undefined'?MONDES_BANQUE:[];
  const lancer=m=>{try{if(m)localStorage.setItem('mz-monde',m.id);else localStorage.removeItem('mz-monde')}catch(_){}
    const c=m?[Math.round(m.dep[0]),Math.round(m.dep[1])]:[0,0];voyagerRegion(c,'neuf')};
  const tirer=f=>{const L=B.filter(f);return L.length?L[Math.floor(Math.random()*L.length)]:null};
  const o=[{l:'Rosace au hasard',ic:'✦',d:B.length+' mondes',go:()=>lancer(tirer(()=>true))}];
  MONDES_FLEURS.forEach((n,i)=>{if(!n)return;const k=B.filter(m=>m.rosace===String(i)).length;if(k)o.push({l:n,ic:'❀',d:k+' monde'+(k>1?'s':''),go:()=>lancer(tirer(m=>m.rosace===String(i)))})});
  if(B.some(m=>m.rosace==='mix'))o.push({l:'Cinq fleurs différentes',ic:'✿',d:'un royaume, une fleur',go:()=>lancer(tirer(m=>m.rosace==='mix'))});
  o.push({l:'Carte classique',ic:'◇',d:'les 925 zones d\'avant',go:()=>lancer(null)});
  if(retour)o.push({l:'Revenir',ic:'◆',go:retour});
  if(mode==='titre'){ui('seuil',{back:retour,opts:o});return}
  ui('menu',{sur:'Nouvelle partie',t:'Quelle rosace pour les royaumes ?',corps:'<p class="petit">Au centre, Berestograd. Autour, cinq royaumes en fleur : le vôtre et ceux des quatre maisons, chacun derrière son rempart.</p>',back:retour,opts:o})}
