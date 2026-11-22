/* MozaWorld : le commerce en Citadelle (lot 2, 19 nov. ; décisions de l'utilisateur : « le commerce passe dans les Citadelles »,
   « la monnaie est la tesselle, séparée du mana », idée validée : « les tesselles achètent des cartes de secret, des réparations
   de pièges ou un retard de horde »). REGLES.md, sections 2, 5 et 6.
   - Les tesselles (S.tess) tombent à chaque cycle de chaque Citadelle tenue (1 + |palier|), et en prime quand le héros brise
     une horde ou repousse un rival (gagnerTesselles, appelé par hordes.js et rivaux.js). À la mort, on perd tout.
   - Le Comptoir, à la Pierre d'éveil de toute Citadelle tenue : une carte utilitaire d'un secret déjà trouvé (une par cycle au plus, pour garder
     la règle « des cartes seulement aux paliers et aux secrets »), la réparation des pièges d'un Donjon tenu, deux cycles de retard
     pour une horde en marche (une fois par horde), et un peu de mana contre des tesselles, à taux défavorable.
   - Aucun achat réel : la tesselle se gagne seulement en jouant.
   Tous les chiffres sont provisoires. */
const TESS_CIT=lv=>1+Math.abs(lv||0);                   /* tesselles par cycle et par Citadelle tenue (provisoire) */
const TESS_PRIMES={horde:5,rival:4};                     /* prime : horde brisée par le héros, rival repoussé (provisoire) */
const TESS_CARTE=n=>6+3*n;                               /* prix d'une carte de secret, n = cartes déjà achetées par ce héros (provisoire) */
const TESS_REPARER=5;                                    /* réparer les pièges d'un Donjon (provisoire) */
const TESS_RETARD=8,RETARD_CYCLES=2;                     /* retarder une horde de 2 cycles, une fois par horde (provisoire) */
const TESS_ECHANGE=4;                                    /* 4 tesselles pour 1 mana du type de la Citadelle (provisoire) */

function initCommerce(){if(typeof S==='undefined')return;
  if(typeof S.tess!=='number'||!(S.tess>=0))S.tess=0;
  if(typeof S.tessCartes!=='number')S.tessCartes=0;      /* cartes achetées par ce héros : le prix monte */
  if(typeof S.tessAchat!=='number')S.tessAchat=-1;       /* cycle du dernier achat de carte */
  if(typeof S.tessV!=='number')S.tessV=S.lives||1;       /* héros connu du commerce : une mort remet la bourse à zéro */
  /* nouvelle partie (graine changée) : bourse vide */
  if(typeof S.tessNc!=='number')S.tessNc=S.nc||0;       /* dernier cycle payé (une vieille sauvegarde ne touche pas les cycles passés) */
  if(S.tessG!==S.graine){const neuve=S.tessG!==undefined;S.tess=0;S.tessCartes=0;S.tessAchat=-1;S.tessV=S.lives||1;S.tessNc=neuve?0:S.nc||0;S.tessG=S.graine}
  if(S.nc<S.tessNc)S.tessNc=S.nc}
const citadellesTenues=()=>ZN.filter(Z=>estCIT(Z)&&tient(Z.id));
const revenuTess=()=>citadellesTenues().reduce((a,Z)=>a+TESS_CIT(S.lv[Z.id]),0);
const tessMaj=()=>{if(typeof hudKey!=='undefined')hudKey='';if(typeof etatHud==='function')etatHud()};

/* ---------- Gagner, perdre ---------- */
function gagnerTesselles(n,raison){initCommerce();if(typeof n!=='number')n=TESS_PRIMES[raison]||0;n=Math.max(0,Math.round(n));if(!n)return 0;
  S.tess+=n;save();tessMaj();
  /* le message attend le retour dans le monde (après l'écran de victoire) */
  if(raison&&raison!=='cycle')tessMsg=['Tesselles · +'+n,raison==='horde'?'Prime : horde brisée':raison==='rival'?'Prime : rival repoussé':String(raison)];
  return n}
let tessMsg=null;
function commerceCycle(){initCommerce();const n=revenuTess();if(n){S.tess+=n;save();tessMaj()}return n}
/* la mort : « le héros perd tout », la bourse aussi (mort() incrémente S.lives) */
function commerceMort(){if((S.lives||1)<=S.tessV)return false;S.tessV=S.lives||1;S.tess=0;S.tessCartes=0;S.tessAchat=-1;save();return true}
setInterval(()=>{if(typeof started==='undefined'||!started||mode==='titre'||typeof S==='undefined')return;initCommerce();commerceMort();
  while(S.tessNc<S.nc){S.tessNc++;commerceCycle()}
  if(tessMsg&&mode==='monde'){toast(tessMsg[0],tessMsg[1],`Votre bourse compte ${S.tess} tesselles. Dépensez-les au Comptoir d'une Citadelle tenue.`);tessMsg=null}},1000);

/* ---------- Bandeau : un seul élément court ---------- */
function bandeauTess(){initCommerce();return`<span class="d" title="Tesselles, la monnaie des Citadelles (+${revenuTess()} par cycle)"><span>◇</span>${S.tess}</span>`}

/* ---------- Ce que vend le Comptoir ---------- */
/* cartes de secret absentes du paquet, seulement celles des secrets déjà trouvés (par ce héros ou un héros précédent : perdues à la mort),
   les plus proches d'abord. Le Comptoir ne vend pas les secrets encore cachés : on ne saute pas l'exploration (testeur, 19 nov., provisoire). */
function cartesEnVente(Z){if(typeof secrets==='undefined'||typeof CK==='undefined')return[];
  const d=typeof aPortee==='function'?aPortee(Z.id,30):{};
  return secrets.map(q=>({q,k:q.k})).filter(x=>x.q.found&&CK[x.k]&&S.deck.indexOf(x.k)<0)
    .sort((a,b)=>(d[a.q.Z.id]??99)-(d[b.q.Z.id]??99)).slice(0,3)}
/* pourquoi aucune carte n'est en vente */
const pasDeCarte=()=>typeof secrets!=='undefined'&&secrets.some(q=>q.found)?'les cartes des secrets trouvés sont toutes dans votre paquet'
  :'aucun secret trouvé : le Comptoir ne vend que les cartes des secrets déjà découverts, perdues à la mort'
const carteAchetableCeCycle=()=>S.tessAchat!==S.nc;
function donjonsAReparer(){
  /* (19 nov., testeur) « besoin » vrai seulement s'il y a un piège endormi ou usé : sinon on payait 5 tesselles pour rien */
  if(typeof reparerPieges==='function')return ZN.filter(Z=>estDON(Z)&&tient(Z.id)).map(Z=>{const T=typeof piegesTab==='function'?piegesTab(Z.id).filter(Boolean):[];
    return{id:Z.id,n:T.length,besoin:T.some(x=>x.dort||S.ent===2&&x.u<3)}});
  /* sans le module Donjons : les pièges du Donjon d'origine (economie.js), usés ou endormis */
  if(!tient('DON')||!Array.isArray(S.pieges))return[];const p=S.pieges.filter(Boolean);
  return[{id:'DON',n:p.length,besoin:p.some(x=>x.dort||(x.u!==undefined&&x.u<3))}]}
function reparer(id){if(typeof reparerPieges==='function')return reparerPieges(id)>0;
  if(id!=='DON'||!Array.isArray(S.pieges))return false;for(const x of S.pieges)if(x){x.dort=false;x.u=3}return true}
const hordesEnMarche=()=>typeof S.hordes==='object'&&S.hordes?Object.values(S.hordes).filter(h=>ZB[h.src]&&ZB[h.cible]).sort((a,b)=>(S.own[b.cible]?1:0)-(S.own[a.cible]?1:0)||a.arrive-b.arrive):[];
const nomCourt=id=>zI(id).nom.split(',')[0];

function payerTess(n){if(S.tess<n)return false;S.tess-=n;return true}
function acheterCarte(Z,k){initCommerce();const prix=TESS_CARTE(S.tessCartes);
  if(!CK[k]||S.deck.indexOf(k)>=0||!carteAchetableCeCycle()||S.deck.length>=PAQUET_MAX||!payerTess(prix))return false;
  S.deck.push(k);S.tessCartes++;S.tessAchat=S.nc;save();tessMaj();return true}
function acheterReparation(id){initCommerce();if(S.tess<TESS_REPARER||!reparer(id))return false;S.tess-=TESS_REPARER;save();tessMaj();return true}
function acheterRetard(src){initCommerce();const h=S.hordes&&S.hordes[src];if(!h||h.retard||!payerTess(TESS_RETARD))return false;
  h.arrive+=RETARD_CYCLES;h.retard=1;save();tessMaj();return true}
function echangerTess(Z){initCommerce();if(!payerTess(TESS_ECHANGE))return false;const t=(typeof ZMANA!=='undefined'&&ZMANA[Z.id])||'Pierre';gagner(t,1);save();tessMaj();return t}

/* ---------- Pierre d'éveil d'une Citadelle tenue : le Comptoir ---------- */
function optionsCommerce(Z){if(!Z||!estCIT(Z)||!tient(Z.id))return[];initCommerce();
  return[{l:'Comptoir',ic:'◇',cls:'p',d:`${S.tess} tesselle${S.tess>1?'s':''} · cartes de secret, pièges, hordes, mana`,go:()=>openComptoir(Z)}]}
function openComptoir(Z,f){mode='menu';document.body.classList.add('jeu-ouvert');initCommerce();
  const o=[],prix=TESS_CARTE(S.tessCartes),cartes=cartesEnVente(Z),dj=donjonsAReparer(),hd=hordesEnMarche(),t=(typeof ZMANA!=='undefined'&&ZMANA[Z.id])||'Pierre';
  o.push({l:'Une carte de secret',ic:'✦',off:!cartes.length,d:!cartes.length?pasDeCarte():!carteAchetableCeCycle()?'une seule par cycle : revenez au prochain':`${prix} tesselles · ${cartes.length} en vente`,go:()=>openCartesSecret(Z)});
  for(const x of dj)o.push({l:'Réparer les pièges · '+nomCourt(x.id),ic:'⛬',off:!x.besoin||S.tess<TESS_REPARER,d:`${TESS_REPARER} tesselles${x.n!==null&&x.n!==undefined?' · '+x.n+' piège(s)':''}${x.besoin?'':' · rien à réparer'}`,
    go:()=>{if(acheterReparation(x.id)){sfx('hit');toast('Comptoir · '+nomCourt(Z.id),'Pièges réparés · '+nomCourt(x.id),'Les artisans de la Citadelle ont remis les salles en état : pièges réveillés et usure effacée.')}openComptoir(Z,UI.f)}});
  if(!dj.length)o.push({l:'Réparer des pièges',ic:'⛬',off:true,d:'aucun Donjon tenu à aménager'});
  for(const h of hd)o.push({l:`Retarder la horde ${typeof de_==='function'?de_(nomCourt(h.src)):'de '+nomCourt(h.src)}`,ic:'⌛',off:!!h.retard||S.tess<TESS_RETARD,
    d:h.retard?'déjà retardée une fois':`${TESS_RETARD} tesselles · +${RETARD_CYCLES} cycles · vers ${nomCourt(h.cible)}${S.own[h.cible]?' (à vous)':''}`,
    go:()=>{if(acheterRetard(h.src)){sfx('hit');toast('Comptoir · '+nomCourt(Z.id),'La horde '+(typeof de_==='function'?de_(nomCourt(h.src)):'de '+nomCourt(h.src))+' est retardée',`Des guides payés l'égarent : elle arrivera ${RETARD_CYCLES} cycles plus tard sur ${zI(h.cible).nom}.`)}openComptoir(Z,UI.f)}});
  if(!hd.length)o.push({l:'Retarder une horde',ic:'⌛',off:true,d:'aucune horde en marche'});
  o.push({l:`Échanger ${TESS_ECHANGE} tesselles contre 1 ${t}`,ic:'⇄',off:S.tess<TESS_ECHANGE,d:`réserve de ${t} : ${resN(t)}`,go:()=>{if(echangerTess(Z))sfx('hit');openComptoir(Z,UI.f)}});
  if(typeof optionPacteComptoir==='function')o.push(...optionPacteComptoir(Z));   /* lot 3 : le pacte avec une maison rivale (pacte.js) */
  o.push({l:'Retour à la Pierre',ic:'◆',go:()=>openEveil(Z)});
  const nc=citadellesTenues().length;
  ui('menu',{sur:'Comptoir · '+Z.info.nom,t:'Le Comptoir de la Citadelle',f,
    corps:`<p>Votre bourse : <b>${S.tess} tesselle${S.tess>1?'s':''}</b>. ${nc>1?`Vos ${nc} Citadelles tenues en rapportent ${revenuTess()} par cycle (1 + leur palier chacune)`:nc?`Votre Citadelle tenue en rapporte ${revenuTess()} par cycle (1 + son palier)`:'Aucune Citadelle tenue ne vous en rapporte'} ; briser une horde en rapporte ${TESS_PRIMES.horde}, repousser un rival ${TESS_PRIMES.rival}.</p><p class="petit">La tesselle n'est pas du mana : elle ne sert qu'au commerce. Une carte de secret au plus par cycle, et son prix monte à chaque achat. À la mort, le héros perd toute sa bourse.</p>`,
    back:()=>openEveil(Z),opts:o})}
function openCartesSecret(Z,f){const prix=TESS_CARTE(S.tessCartes),c=cartesEnVente(Z),peut=carteAchetableCeCycle()&&S.deck.length<PAQUET_MAX;
  const o=c.map(x=>({l:CK[x.k].nom(),ic:prix,off:!peut||S.tess<prix,d:`secret déjà trouvé · ${nomCourt(x.q.Z.id)}`,
    go:()=>{if(acheterCarte(Z,x.k)){sfx('hit');toast('Comptoir · carte de secret','« '+CK[x.k].nom()+' » rejoint votre paquet',`Payée ${prix} tesselles. Prochaine carte au prochain cycle, pour ${TESS_CARTE(S.tessCartes)} tesselles.`)}openComptoir(Z)}}));
  o.push({l:'Retour au Comptoir',ic:'◆',go:()=>openComptoir(Z)});
  ui('menu',{sur:'Comptoir · cartes de secret',t:'Cartes utilitaires',f,
    corps:`<p class="petit">Prix : ${prix} tesselles (bourse : ${S.tess}). ${!carteAchetableCeCycle()?'<b>Vous avez déjà acheté une carte ce cycle.</b> ':''}${S.deck.length>=PAQUET_MAX?'<b>Votre paquet est plein.</b> ':''}Les combats ne donnent jamais de carte ; le Comptoir vend celles des secrets déjà trouvés (perdues à la mort), une par cycle au plus.</p>${typeof carteHTML==='function'?`<div class="cartes">${c.map(x=>carteHTML(x.k)).join('')}</div>`:''}`,
    back:()=>openComptoir(Z),opts:o})}

/* ---------- Test : MZ.tesselles(n) ---------- */
function tessellesTest(n){initCommerce();if(typeof n==='number'){S.tess=Math.max(0,S.tess+Math.round(n));save();tessMaj()}return S.tess}
