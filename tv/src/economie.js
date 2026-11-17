/* MozaWorld TV 1.5 : économie du mana et Donjon à aménager (premier test décidé le 16 novembre 2026).
   - Six réserves de mana, une par type (Feu, Glace, Eau, Sève, Pierre, Vent). La Ressource (Tezcamixtli, Vent) en remplit
     une à chaque cycle : 1 au niveau 0-1, 2 au niveau 2, 2 au niveau 3 avec son bonus. Les vaincus lâchent le mana de leur zone.
   - En combat, les cartes se paient avec la réserve. La capacité de dépense monte de 1 par tour (1, 2, 3…) ;
     la capacité est commune à tous les types ; les boosts sont rares.
   - Le Donjon des Neuf Édits, une fois activé, s'aménage : 4 salles, un piège par salle, payé avec la réserve.
     Le monde sauvage l'attaque à intervalles réguliers ; les pièges actifs affaiblissent la horde l'un après l'autre.
   - L'entretien des pièges a trois rythmes au choix (menu), pour comparer en jouant. */

const CYCLE=60;            /* secondes d'un cycle de jeu dans la démo (un « jour » du jeu complet, raccourci) */
const ASSAUT_CYCLES=3;     /* un assaut du sauvage tous les 3 cycles quand le Donjon est à vous */
/* Six types de mana, un par famille de biomes ; chaque type a sa propre réserve. */
const MTYPES=['Feu','Glace','Eau','Sève','Pierre','Vent'];
const MCOL={Feu:'#d8603a',Glace:'#8fc4e8',Eau:'#3f8fb5',Sève:'#6fae4f',Pierre:'#a89a84',Vent:'#c9c2e6'};
const ZMANA={CIT:'Glace',DON:'Feu',RES:'Vent',ANT:'Eau',MAR:'Glace'};   /* forêt boréale, volcan, îles flottantes, mangrove, glacier */
const RESERVE_DEPART=()=>({Feu:3,Glace:3,Eau:3,Vent:3});
const resN=t=>(S.res&&S.res[t])||0;
const resTot=()=>MTYPES.reduce((a,t)=>a+resN(t),0);
/* type null = carte commune (incolore) : elle se paie avec n'importe quel type, pris dans la plus grosse réserve */
const peutPayer=(t,n)=>t?resN(t)>=n:resTot()>=n;
function payer(t,n){if(t){S.res[t]=resN(t)-n;return}for(let i=0;i<n;i++){const b=MTYPES.reduce((m,x)=>resN(x)>resN(m)?x:m,MTYPES[0]);S.res[b]=resN(b)-1}}
function gagner(t,n){S.res[t]=resN(t)+n}
const pastille=(t,n)=>`<span class="mana-p" style="--mc:${t?MCOL[t]:'#d9cfb8'}">${n!==undefined?n:''}</span>`;
/* Mana gris (2.0) : réserve de base infinie, sans bonus ; voir combat.js (GRIS_MALUS) */
const resHTML=()=>`<span class="mana-p" style="--mc:#8d8a86">∞</span> Gris · `+MTYPES.filter(t=>resN(t)>0||Object.values(ZMANA).includes(t)).map(t=>`${pastille(t,resN(t))} ${t}`).join(' · ');
const resTexte=()=>MTYPES.filter(t=>resN(t)>0).map(t=>t+' '+resN(t)).join(', ')||'vide';

const PIEGES={
  herse:{nom:'Herse de givre',m:'Glace',pose:2,force:3,txt:'Bon marché, arrête les petits groupes.'},
  glyphe:{nom:'Glyphe de brume',m:'Vent',pose:2,force:2,txt:'Égare la horde : le piège suivant compte double.'},
  lave:{nom:'Fosse de lave',m:'Feu',pose:3,force:5,txt:'Le cratère sous le Donjon : force brute.'},
  gardien:{nom:'Gardien des marais',m:'Eau',pose:4,force:6,txt:'Un gardien qui se relève à chaque assaut.'}};
const PORDRE=[null,'herse','glyphe','lave','gardien'];
const SALLES=['Vestibule des Édits','Galerie des scribes','Puits de lave','Chambre du Sceau'];

const ENTRETIEN=[
  {nom:'À chaque cycle',court:'cycle',txt:'Chaque piège coûte 1 mana à chaque cycle. Un piège non payé dort jusqu\'au cycle suivant.'},
  {nom:'À l\'assaut',court:'assaut',txt:'Rien entre deux assauts. Quand un assaut arrive, chaque piège coûte 2 mana ; un piège non payé ne se déclenche pas.'},
  {nom:'Usure',court:'usure',txt:'Aucun entretien. Chaque piège sert 3 assauts, puis il casse et la salle se vide.'}];

function initEco(){
  if(!S.res||typeof S.res!=='object')S.res=RESERVE_DEPART();
  if(!Array.isArray(S.pieges)||S.pieges.length!==4)S.pieges=[null,null,null,null];
  if(typeof S.ent!=='number')S.ent=0;
  if(typeof S.tc!=='number')S.tc=0;
  if(typeof S.nc!=='number')S.nc=0;
  if(!S.assauts)S.assauts={ok:0,ko:0};
  if(typeof S.dernierAssaut!=='number')S.dernierAssaut=0}

const piegeDe=p=>p&&(typeof p==='string'?{k:p,u:3,dort:false}:p);
const nbPieges=()=>S.pieges.filter(Boolean).length;
/* 2.0 : chaque Ressource activée produit son propre mana (1, puis 2 au niveau 2 et plus) */
const ressources=()=>ZN.filter(Z=>(Z.mod||Z.id)==='RES'&&S.act[Z.id]);
const prodZone=Z=>Lz(Z.id)>=2?2:1;
const prodParType=()=>{const o={};for(const Z of ressources()){const t=ZMANA[Z.id];o[t]=(o[t]||0)+prodZone(Z)}return o};
const prodRessource=()=>ressources().reduce((a,Z)=>a+prodZone(Z),0);
const prodTexte=()=>Object.entries(prodParType()).map(([t,n])=>`${n} ${t}`).join(', ');
const donjonAVous=()=>!!(S.act.DON&&S.own.DON);

/* ---------- Cycle : production, entretien, assaut ---------- */
let ecoRapport=[];
function cycle(){S.nc++;const lignes=[];
  const pt=prodParType();for(const t in pt){gagner(t,pt[t]);lignes.push(`+${pt[t]} ${t} des Ressources`)}
  if(donjonAVous()&&nbPieges()&&S.ent===0){let paye=0,dorment=0;
    for(const x of S.pieges){if(!x)continue;const m=PIEGES[x.k].m;if(peutPayer(m,1)){payer(m,1);paye++;x.dort=false}else{x.dort=true;dorment++}}
    lignes.push(`−${paye} mana d'entretien${dorment?`, ${dorment} piège(s) endormi(s)`:''}`)}
  if(typeof peages==='function')peages(lignes);
  save();etatHud();
  if(donjonAVous()&&S.nc-S.dernierAssaut>=(typeof cyclesAssaut==='function'?cyclesAssaut():ASSAUT_CYCLES)){S.dernierAssaut=S.nc;
    if(typeof cacheParBrume==='function'&&cacheParBrume('DON')){lignes.push('Une horde rôde, mais la Brume de Givrecloche cache le Donjon : elle passe son chemin')}else{assaut(lignes);return}}
  if(lignes.length&&started&&mode==='monde')toast('Cycle '+S.nc,'Réserve : '+resTexte(),lignes.join(' · '))}
setInterval(()=>{if(!started||mode==='titre')return;S.tc++;if(S.tc>=CYCLE){S.tc=0;cycle()}},1000);

/* ---------- Assaut du monde sauvage sur le Donjon ---------- */
function forceHorde(){return 6+3*Lz('DON')+2*S.assauts.ok+Math.floor(Math.random()*4)}
function assaut(avant){let h=forceHorde();const h0=h,l=[];
  if(S.ent===1){let paye=0,non=0;for(const x of S.pieges){if(!x)continue;const m=PIEGES[x.k].m;if(peutPayer(m,2)){payer(m,2);paye++;x.dort=false}else{x.dort=true;non++}}
    if(paye+non)l.push(`Entretien à l'assaut : −${2*paye} mana${non?`, ${non} piège(s) sans mana ne se déclenchent pas`:''}.`)}
  let mult=1;
  S.pieges.forEach((x,i)=>{if(!x||h<=0)return;const P_=PIEGES[x.k];
    if(x.dort){l.push(`${SALLES[i]} : ${P_.nom} dort.`);return}
    const f=P_.force*mult;mult=x.k==='glyphe'?2:1;h-=f;l.push(`${SALLES[i]} : ${P_.nom} retient ${f}${mult>1?' et égare la horde (suivant ×2)':''}.`);
    if(S.ent===2){x.u--;if(x.u<=0){S.pieges[i]=null;l.push(`${P_.nom} casse.`)}}});
  const ok=h<=0;
  if(ok){S.assauts.ok++;gagner('Feu',2);l.push('La horde se brise dans vos salles : +2 Feu pris sur les vaincus.')}
  else{S.assauts.ko++;const i=S.pieges.findIndex(Boolean);if(i>=0){l.push(`La horde passe (reste ${h}) et saccage ${SALLES[i]}.`);S.pieges[i]=null}else l.push(`La horde passe (reste ${h}) : aucune salle ne la retient.`);
    if(S.lv.DON!==0&&typeof borne==='function'&&borne('DON'))l.push('La Pierre de bornage de Raak tient : le Donjon ne recule pas.');
    else if(S.lv.DON!==0){const n=S.lv.DON-Math.sign(S.lv.DON);S.lv.DON=n;DON.lvT=n;l.push(`Le Donjon recule d'un palier (${sgn(n)||'0'}).`)}}
  save();etatHud();hudKey='';
  ecoRapport.push({ok,h0,lignes:[...(avant||[]),...l]});montrerRapport()}
function montrerRapport(){if(!ecoRapport.length||mode!=='monde')return;const r=ecoRapport.shift();mode='menu';document.body.classList.add('jeu-ouvert');sfx(r.ok?'hit':'fail');
  ui('menu',{sur:'Assaut du monde sauvage · horde de force '+r.h0,t:r.ok?'Le Donjon tient':'Le Donjon est forcé',
    corps:`<p class="petit">${r.lignes.join('<br>')}</p><p class="petit">Réserve : ${resHTML()} · assauts repoussés ${S.assauts.ok}, perdus ${S.assauts.ko} · entretien : ${ENTRETIEN[S.ent].nom}.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde},{l:'Aller au Donjon',ic:'✧',go:()=>{tp('DON');toMonde()}}]})}
setInterval(()=>{if(started&&mode==='monde'&&ecoRapport.length)montrerRapport()},500);

/* ---------- Aménager le Donjon ---------- */
function openDonjon(f){mode='menu';document.body.classList.add('jeu-ouvert');
  const o=S.pieges.map((x,i)=>{const P_=x&&PIEGES[x.k];return{l:`${SALLES[i]} : ${P_?P_.nom:'vide'}`,ic:P_?'⛬':'○',d:P_?`${P_.m} · force ${P_.force}${S.ent===2?' · '+x.u+' assaut(s)':''}${x.dort?' · endormi':''} · OK changer`:'OK poser un piège',go:()=>changerPiege(i)}});
  o.push({l:'Entretien des pièges',ic:'⟳',d:ENTRETIEN[S.ent].nom,go:()=>{S.ent=(S.ent+1)%3;for(const x of S.pieges)if(x){x.dort=false;if(S.ent===2&&!(x.u>0))x.u=3}save();openDonjon(UI.f)}});
  o.push({l:'Provoquer un assaut maintenant (test)',ic:'⚔',go:()=>{closeUI();mode='monde';S.dernierAssaut=S.nc;assaut([])}});
  o.push({l:'Retour',ic:'◆',go:toMonde});
  const prochain=Math.max(0,(S.dernierAssaut+(typeof cyclesAssaut==='function'?cyclesAssaut():ASSAUT_CYCLES)-S.nc-1)*CYCLE+(CYCLE-S.tc));
  ui('menu',{sur:'Donjon à vous · aménager',t:'Les salles des Neuf Édits',f,
    corps:`<p class="petit">Réserve : ${resHTML()}.</p><p class="petit">Chaque salle reçoit un piège ; chaque piège a son type de mana, pour la pose comme pour l'entretien. Un type que votre paquet n'utilise pas peut servir ici. Prochain assaut du sauvage dans environ ${fmt(prochain)} ; la horde traverse les salles dans l'ordre.</p><p class="petit">${ENTRETIEN[S.ent].txt}</p>`,
    back:toMonde,opts:o})}
function changerPiege(i){const cur=S.pieges[i],k0=cur?cur.k:null;
  ui('menu',{sur:SALLES[i],t:'Choisir un piège',corps:`<p class="petit">Réserve : ${resHTML()}. Retirer un piège ne rend pas le mana.</p>`,back:()=>openDonjon(i),
    opts:[...PORDRE.slice(1).map(k=>{const P_=PIEGES[k];return{l:P_.nom+(k===k0?' (en place)':''),ic:P_.pose,d:`${P_.pose} ${P_.m} · force ${P_.force} · ${P_.txt}`,off:k===k0||!peutPayer(P_.m,P_.pose),
      go:()=>{payer(P_.m,P_.pose);S.pieges[i]={k,u:3,dort:false};save();etatHud();sfx('hit');openDonjon(i)}}}),
      {l:'Salle vide',ic:'○',off:!cur,go:()=>{S.pieges[i]=null;save();openDonjon(i)}},{l:'Retour',ic:'◆',go:()=>openDonjon(i)}]})}
