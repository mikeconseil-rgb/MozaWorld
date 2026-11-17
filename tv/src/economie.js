/* MozaWorld TV 1.5 : économie du mana et Donjon à aménager (premier test décidé le 16 novembre 2026).
   - Une seule réserve de mana. La Ressource (Tezcamixtli) la remplit à chaque cycle : 1 mana au niveau 0-1, 2 au niveau 2,
     2 au niveau 3 avec son bonus (une carte de plus en main).
   - En combat, les cartes se paient avec la réserve. La capacité de dépense monte de 1 par tour (1, 2, 3…) ;
     certaines cartes donnent un boost (+1 de capacité ce tour).
   - Le Donjon des Neuf Édits, une fois activé, s'aménage : 4 salles, un piège par salle, payé avec la réserve.
     Le monde sauvage l'attaque à intervalles réguliers ; les pièges actifs affaiblissent la horde l'un après l'autre.
   - L'entretien des pièges a trois rythmes au choix (menu), pour comparer en jouant. */

const CYCLE=60;            /* secondes d'un cycle de jeu dans la démo (un « jour » du jeu complet, raccourci) */
const ASSAUT_CYCLES=3;     /* un assaut du sauvage tous les 3 cycles quand le Donjon est à vous */
const RESERVE_DEPART=10;

const PIEGES={
  herse:{nom:'Herse à pointes',pose:2,force:3,txt:'Bon marché, arrête les petits groupes.'},
  glyphe:{nom:'Glyphe de brume',pose:2,force:2,txt:'Égare la horde : le piège suivant compte double.'},
  lave:{nom:'Fosse de lave',pose:3,force:5,txt:'Le cratère sous le Donjon : force brute.'},
  gardien:{nom:'Gardien d\'édit',pose:4,force:6,txt:'Un gardien qui se relève à chaque assaut.'}};
const PORDRE=[null,'herse','glyphe','lave','gardien'];
const SALLES=['Vestibule des Édits','Galerie des scribes','Puits de lave','Chambre du Sceau'];

const ENTRETIEN=[
  {nom:'À chaque cycle',court:'cycle',txt:'Chaque piège coûte 1 mana à chaque cycle. Un piège non payé dort jusqu\'au cycle suivant.'},
  {nom:'À l\'assaut',court:'assaut',txt:'Rien entre deux assauts. Quand un assaut arrive, chaque piège coûte 2 mana ; un piège non payé ne se déclenche pas.'},
  {nom:'Usure',court:'usure',txt:'Aucun entretien. Chaque piège sert 3 assauts, puis il casse et la salle se vide.'}];

function initEco(){
  if(typeof S.res!=='number')S.res=RESERVE_DEPART;
  if(!Array.isArray(S.pieges)||S.pieges.length!==4)S.pieges=[null,null,null,null];
  if(typeof S.ent!=='number')S.ent=0;
  if(typeof S.tc!=='number')S.tc=0;
  if(typeof S.nc!=='number')S.nc=0;
  if(!S.assauts)S.assauts={ok:0,ko:0};
  if(typeof S.dernierAssaut!=='number')S.dernierAssaut=0}

const piegeDe=p=>p&&(typeof p==='string'?{k:p,u:3,dort:false}:p);
const nbPieges=()=>S.pieges.filter(Boolean).length;
const prodRessource=()=>!S.act.RES?0:Lz('RES')>=2?2:1;
const donjonAVous=()=>!!(S.act.DON&&S.own.DON);

/* ---------- Cycle : production, entretien, assaut ---------- */
let ecoRapport=[];
function cycle(){S.nc++;const lignes=[];
  const p=prodRessource();if(p){S.res+=p;lignes.push(`+${p} mana de la Ressource`)}
  if(donjonAVous()&&nbPieges()&&S.ent===0){let paye=0,dorment=0;
    for(const x of S.pieges){if(!x)continue;if(S.res>=1){S.res--;paye++;x.dort=false}else{x.dort=true;dorment++}}
    lignes.push(`−${paye} mana d'entretien${dorment?`, ${dorment} piège(s) endormi(s)`:''}`)}
  save();etatHud();
  if(donjonAVous()&&S.nc-S.dernierAssaut>=ASSAUT_CYCLES){S.dernierAssaut=S.nc;assaut(lignes);return}
  if(lignes.length&&started&&mode==='monde')toast('Cycle '+S.nc,'Réserve : '+S.res+' mana',lignes.join(' · '))}
setInterval(()=>{if(!started||mode==='titre')return;S.tc++;if(S.tc>=CYCLE){S.tc=0;cycle()}},1000);

/* ---------- Assaut du monde sauvage sur le Donjon ---------- */
function forceHorde(){return 6+3*Lz('DON')+2*S.assauts.ok+Math.floor(Math.random()*4)}
function assaut(avant){let h=forceHorde();const h0=h,l=[];
  if(S.ent===1){let paye=0,non=0;for(const x of S.pieges){if(!x)continue;if(S.res>=2){S.res-=2;paye++;x.dort=false}else{x.dort=true;non++}}
    if(paye+non)l.push(`Entretien à l'assaut : −${2*paye} mana${non?`, ${non} piège(s) sans mana ne se déclenchent pas`:''}.`)}
  let mult=1;
  S.pieges.forEach((x,i)=>{if(!x||h<=0)return;const P_=PIEGES[x.k];
    if(x.dort){l.push(`${SALLES[i]} : ${P_.nom} dort.`);return}
    const f=P_.force*mult;mult=x.k==='glyphe'?2:1;h-=f;l.push(`${SALLES[i]} : ${P_.nom} retient ${f}${mult>1?' et égare la horde (suivant ×2)':''}.`);
    if(S.ent===2){x.u--;if(x.u<=0){S.pieges[i]=null;l.push(`${P_.nom} casse.`)}}});
  const ok=h<=0;
  if(ok){S.assauts.ok++;S.res+=2;l.push('La horde se brise dans vos salles : +2 mana pris sur les vaincus.')}
  else{S.assauts.ko++;const i=S.pieges.findIndex(Boolean);if(i>=0){l.push(`La horde passe (reste ${h}) et saccage ${SALLES[i]}.`);S.pieges[i]=null}else l.push(`La horde passe (reste ${h}) : aucune salle ne la retient.`);
    if(S.lv.DON!==0){const n=S.lv.DON-Math.sign(S.lv.DON);S.lv.DON=n;DON.lvT=n;l.push(`Le Donjon recule d'un palier (${sgn(n)||'0'}).`)}}
  save();etatHud();hudKey='';
  ecoRapport.push({ok,h0,lignes:[...(avant||[]),...l]});montrerRapport()}
function montrerRapport(){if(!ecoRapport.length||mode!=='monde')return;const r=ecoRapport.shift();mode='menu';document.body.classList.add('jeu-ouvert');sfx(r.ok?'hit':'fail');
  ui('menu',{sur:'Assaut du monde sauvage · horde de force '+r.h0,t:r.ok?'Le Donjon tient':'Le Donjon est forcé',
    corps:`<p class="petit">${r.lignes.join('<br>')}</p><p class="petit">Réserve : <b>${S.res}</b> mana · assauts repoussés ${S.assauts.ok}, perdus ${S.assauts.ko} · entretien : ${ENTRETIEN[S.ent].nom}.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde},{l:'Aller au Donjon',ic:'✧',go:()=>{tp('DON');toMonde()}}]})}
setInterval(()=>{if(started&&mode==='monde'&&ecoRapport.length)montrerRapport()},500);

/* ---------- Aménager le Donjon ---------- */
function openDonjon(f){mode='menu';document.body.classList.add('jeu-ouvert');
  const o=S.pieges.map((x,i)=>{const P_=x&&PIEGES[x.k];return{l:`${SALLES[i]} : ${P_?P_.nom:'vide'}`,ic:P_?'⛬':'○',d:P_?`force ${P_.force}${S.ent===2?' · '+x.u+' assaut(s)':''}${x.dort?' · endormi':''} · OK changer`:'OK poser un piège',go:()=>changerPiege(i)}});
  o.push({l:'Entretien des pièges',ic:'⟳',d:ENTRETIEN[S.ent].nom,go:()=>{S.ent=(S.ent+1)%3;for(const x of S.pieges)if(x){x.dort=false;if(S.ent===2&&!(x.u>0))x.u=3}save();openDonjon(UI.f)}});
  o.push({l:'Provoquer un assaut maintenant (test)',ic:'⚔',go:()=>{closeUI();mode='monde';S.dernierAssaut=S.nc;assaut([])}});
  o.push({l:'Retour',ic:'◆',go:toMonde});
  const prochain=Math.max(0,(S.dernierAssaut+ASSAUT_CYCLES-S.nc-1)*CYCLE+(CYCLE-S.tc));
  ui('menu',{sur:'Donjon à vous · aménager',t:'Les salles des Neuf Édits',f,
    corps:`<p class="petit">Réserve <b>${S.res}</b> mana. Chaque salle reçoit un piège payé avec la réserve, la même que pour les combats. Prochain assaut du sauvage dans environ ${fmt(prochain)} ; la horde traverse les salles dans l'ordre.</p><p class="petit">${ENTRETIEN[S.ent].txt}</p>`,
    back:toMonde,opts:o})}
function changerPiege(i){const cur=S.pieges[i],k0=cur?cur.k:null;
  ui('menu',{sur:SALLES[i],t:'Choisir un piège',corps:`<p class="petit">Réserve <b>${S.res}</b> mana. Retirer un piège ne rend pas le mana.</p>`,back:()=>openDonjon(i),
    opts:[...PORDRE.slice(1).map(k=>{const P_=PIEGES[k];return{l:P_.nom+(k===k0?' (en place)':''),ic:P_.pose,d:`force ${P_.force} · ${P_.txt}`,off:k===k0||S.res<P_.pose,
      go:()=>{S.res-=P_.pose;S.pieges[i]={k,u:3,dort:false};save();etatHud();sfx('hit');openDonjon(i)}}}),
      {l:'Salle vide',ic:'○',off:!cur,go:()=>{S.pieges[i]=null;save();openDonjon(i)}},{l:'Retour',ic:'◆',go:()=>openDonjon(i)}]})}
