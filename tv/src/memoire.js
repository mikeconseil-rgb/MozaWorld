/* ---------- Mémoire et plantages (21 nov. 2026, fil « Corriger les plantages fréquents du jeu ») ----------
   Sur Xbox, Edge donne peu de mémoire à un onglet, et la carte graphique partage cette mémoire. Quand elle déborde,
   l'écran devient noir (le contexte WebGL est perdu) ou Edge ferme la page. Ici :
   (1) contexte WebGL perdu : au lieu d'un écran noir, on enregistre et on recharge la région là où était le héros ;
   (2) avant chaque rechargement (voyage entre régions, chargement d'une sauvegarde), on rend tout de suite la mémoire de la
       carte graphique, pour que l'ancienne région et la nouvelle ne soient pas en mémoire en même temps ;
   (3) window.MZmem() : relevé pour les bancs d'essai (tv/tools/test-endurance.js). */
let memLibere=false;
function libererGPU(){if(memLibere)return;memLibere=true;
  /* la boucle peut encore tourner une image ou deux avant le départ : on ne dessine plus rien */
  try{renderer.render=()=>{};renderer.setRenderTarget=()=>{};renderer.compile=()=>{}}catch(_){}
  try{scene.traverse(o=>{if(o.geometry)o.geometry.dispose();const m=o.material;if(m)for(const x of[].concat(m)){for(const k in x)if(x[k]&&x[k].isTexture)x[k].dispose();x.dispose()}})}catch(_){}
  try{for(const r of[rtS,rtA,rtB,rtC,rtD,rtE])if(r)r.dispose();if(sun.shadow.map)sun.shadow.map.dispose()}catch(_){}
  try{renderer.renderLists.dispose();renderer.dispose();renderer.forceContextLoss()}catch(_){}
  try{canvas.width=canvas.height=1}catch(_){}}   /* le tampon d'image du canevas aussi (22 nov.) */
addEventListener('pagehide',libererGPU);
addEventListener('pageshow',e=>{if(e.persisted){if(rechargeAutorisee())location.reload();else arretBoucle('retour en arrière')}});   /* page rendue par le cache « retour » : sa carte graphique a été rendue, on recharge */addEventListener('beforeunload',libererGPU);
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();if(memLibere)return;pouls();memLibere=true;
  try{renderer.render=()=>{};renderer.setRenderTarget=()=>{};renderer.compile=()=>{}}catch(_){}
  try{localStorage.setItem('mz-plantage',String(Date.now()));const d=JSON.parse(localStorage.getItem('mz-pouls')||'null');
    if(d){d.contexte=1;const L=JSON.parse(localStorage.getItem('mz-plantages')||'[]');L.push(d);localStorage.setItem('mz-plantages',JSON.stringify(L.slice(-10)))}}catch(_){}
  /* on garde la partie : position du héros, puis rechargement dans la même région */
  try{if(typeof voyagerRegion==='function'&&typeof REGION!=='undefined'&&started){voyagerRegion(REGION.c,'jeu');return}}catch(_){}
  if(rechargeAutorisee())setTimeout(()=>location.reload(),60);else arretBoucle('carte graphique perdue')},false);
/* au réveil après un contexte perdu : un mot au joueur */
(()=>{let t=0;try{t=+localStorage.getItem('mz-plantage')||0;localStorage.removeItem('mz-plantage')}catch(_){}
  if(t&&Date.now()-t<60000)setTimeout(()=>{if(typeof toast==='function')toast('La partie a repris','La carte graphique a manqué de mémoire','Votre partie a été enregistrée et la région rechargée.')},4000)})();
/* (4) journal des plantages : toutes les 5 s, la page note où en est le joueur ; une sortie normale (voyage, fermeture) efface
   la note. Si elle est encore là au démarrage suivant, la page précédente a planté : on la garde dans « mz-plantages »
   (10 dernières) et on le dit au joueur, pour savoir à quel moment ça arrive. */
const memDebut=Date.now();
function pouls(){try{if(memLibere)return;const Z=typeof curZ!=='undefined'&&curZ;
  localStorage.setItem('mz-pouls',JSON.stringify({t:Date.now(),min:Math.round((Date.now()-memDebut)/60000),mode:typeof mode!=='undefined'?mode:'?',
    zone:Z?Z.id:'',region:typeof REGION!=='undefined'?REGION.c.map(Math.round):null,q:QI,geo:renderer.info.memory.geometries,v:typeof MZ_VERSION!=='undefined'?MZ_VERSION:''}))}catch(_){}}
setInterval(pouls,5000);
addEventListener('pagehide',()=>{try{localStorage.removeItem('mz-pouls')}catch(_){}});
addEventListener('beforeunload',()=>{try{localStorage.removeItem('mz-pouls')}catch(_){}});
const PLANTE=(()=>{try{const d=JSON.parse(localStorage.getItem('mz-pouls')||'null');localStorage.removeItem('mz-pouls');
  if(!d||Date.now()-d.t>864e5)return null;const L=JSON.parse(localStorage.getItem('mz-plantages')||'[]');L.push(d);
  localStorage.setItem('mz-plantages',JSON.stringify(L.slice(-10)));return d}catch(_){return null}})();
if(PLANTE)setTimeout(()=>{if(typeof toast==='function'){const Z=typeof ZWZ==='function'&&ZWZ(PLANTE.zone);
  const quoi={monde:'en marchant',mue:'pendant une mue',combat:'en combat',menu:'dans un menu',epreuve:'pendant une épreuve',titre:'au titre'}[PLANTE.mode]||PLANTE.mode;
  toast('La partie précédente s\'est fermée','Arrêt '+quoi+(Z&&Z.info?' · '+Z.info.nom.split(',')[0]:''),'Après '+PLANTE.min+' min de jeu. Votre dernière sauvegarde est reprise.')}},5000);
window.MZplantages=()=>{try{return JSON.parse(localStorage.getItem('mz-plantages')||'[]')}catch(_){return[]}};
window.MZmem=()=>{const i=renderer.info;return{geo:i.memory.geometries,tex:i.memory.textures,prog:(i.programs||[]).length,
  tas:performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576):null}};
