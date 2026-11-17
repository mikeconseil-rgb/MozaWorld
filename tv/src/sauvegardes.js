/* MozaWorld 2.4 : sauvegardes (demande du 17 nov. : « nouvelle partie, sauvegarde et recharge, juste 20 sauvegardes »).
   20 emplacements dans le stockage du navigateur (Edge sur Xbox). Charger recopie l'emplacement dans la partie en cours puis recharge la page. */
const NSAUV=20,cleSauv=i=>'mz-sauv-'+i;
const lireSauv=i=>{try{return JSON.parse(localStorage.getItem(cleSauv(i))||'null')}catch(_){return null}};
const dateSauv=t=>{try{return new Date(t).toLocaleString('fr-CA',{dateStyle:'short',timeStyle:'short'})}catch(_){return''}};
function resumeSauv(){const own=ZN.filter(Z=>S.own[Z.id]).length,niv=ZN.reduce((a,Z)=>a+Math.abs(S.lv[Z.id]||0),0);
  const z=zoneAt(P.x,P.z);return`${own} zone(s) · niveaux ${niv} · ${S.deck.length} cartes${z?' · '+z.info.nom.split(',')[0]:''}`}
function listeSauv(mode_,f){const o=[];for(let i=1;i<=NSAUV;i++){const s=lireSauv(i);
    o.push({l:`Emplacement ${i}`+(s?` · ${dateSauv(s.t)}`:''),ic:s?'▣':'□',d:s?s.r:'vide',off:mode_==='charger'&&!s,go:()=>mode_==='charger'?chargerSauv(i):ecrireSauv(i,!!s)})}
  o.push({l:'Retour',ic:'◆',go:openMenu});return o}
function openSauver(f){ui('menu',{sur:'Sauvegarder',t:'Choisir un emplacement',deux:true,f:f||0,corps:`<p class="petit">${NSAUV} emplacements. Partie en cours : ${resumeSauv()}.</p>`,back:openMenu,opts:listeSauv('sauver')})}
function openCharger(){ui('menu',{sur:'Charger',t:'Reprendre une partie',deux:true,corps:'<p class="petit">La partie en cours est remplacée par celle de l\'emplacement choisi (sauvegardez-la d\'abord si vous voulez la garder).</p>',back:openMenu,opts:listeSauv('charger')})}
function ecrireSauv(i,ecraser){const go=()=>{S.pos=[P.x,P.z,P.yaw];save();try{localStorage.setItem(cleSauv(i),JSON.stringify({t:Date.now(),r:resumeSauv(),d:localStorage.getItem('mz-tv-1')}));
      toast('Partie sauvegardée','Emplacement '+i,resumeSauv())}catch(e){toast('Sauvegarde impossible','Stockage plein ou bloqué',String(e.message||e))}openMenu()};
  if(!ecraser)return go();
  ui('menu',{sur:'Sauvegarder',t:`Écraser l'emplacement ${i} ?`,corps:`<p class="petit">${lireSauv(i).r}</p>`,back:()=>openSauver(i-1),opts:[{l:'Oui, écraser',ic:'▣',go},{l:'Non',ic:'◆',go:()=>openSauver(i-1)}]})}
function chargerSauv(i){const s=lireSauv(i);if(!s)return;
  ui('menu',{sur:'Charger',t:`Charger l'emplacement ${i} ?`,corps:`<p class="petit">${s.r} · ${dateSauv(s.t)}</p>`,back:openCharger,
    opts:[{l:'Oui, charger',ic:'▲',go:()=>{try{localStorage.setItem('mz-tv-1',s.d);location.reload()}catch(e){toast('Chargement impossible','',String(e.message||e))}}},{l:'Non',ic:'◆',go:openCharger}]})}
