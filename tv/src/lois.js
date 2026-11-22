/* MozaWorld : les lois du monde des Assemblées (lot 3, 19 nov. ; idée choisie par l'utilisateur : « Pouvoirs des Assemblées sur la carte du monde » ;
   le losange est l'Assemblée politique, siège politique de la région ; REGLES.md, section 8).
   - Chaque Assemblée porte une loi par pôle. Les six Assemblées à fiche gardent leur loi (assemblees.js : Brume / Clarté, péages, brûlis,
     Greniers, Silence / Chant, bornage). Les autres reçoivent deux lois d'un catalogue de onze, tirées de leurs deux pôles
     (Z.info.pm et Z.info.pp, d'après la liste des 986 sous-zones) ; un pôle inconnu tire sa loi d'un hachage de l'id, et si les deux pôles
     donnent la même loi, le pôle + prend la suivante du catalogue. Le tirage est déterministe : la même Assemblée a toujours les mêmes lois.
   - Une loi est en vigueur quand l'Assemblée est à vous, activée et au palier 1 ou plus ; le signe du palier choisit la loi (− : premier pôle).
   - Gagner le Duel d'arguments d'une Assemblée met sa loi « en vigueur renforcée » pendant LOI_RENF_CYCLES cycles (accroche dans duel.js).
   - Une loi du catalogue agit sur sa juridiction : l'Assemblée et les zones à LOI_PORTEE tuiles ou moins. La même loi de deux Assemblées
     ne se cumule pas sur une zone (on garde la plus forte). Couvre-feu et Cadastre agissent sur tout le monde, une seule fois.
   - Écran « Lois du monde » au menu Pause ; ligne à la Pierre d'éveil ; message quand une loi s'éveille ou s'endort.
   Accroches : enveloppes de leverHorde, cibleHorde (hordes.js), rivalAgit, tenter (rivaux.js), defenseTours, preavisTours (tours.js),
   defenseMonde (domaines.js), mort (main.js) ; une ligne dans rivaux.js (chances), duel.js (Duel gagné), main.js (menu Pause, window.MZ).
   Pour le module des caravanes : loiRelais(id) → 0, 1 ou 2 (force de la Loi des Relais sur la zone id). Tous les chiffres sont provisoires. */
const LOI_PORTEE=2;          /* juridiction : l'Assemblée et les zones à 2 tuiles ou moins (provisoire) */
const LOI_RENF_CYCLES=10;    /* durée de la vigueur renforcée après un Duel d'arguments gagné (provisoire) */
const LOI_TEMOINS=[0,.15,.25];     /* chance retirée aux rivaux par la Loi des Témoins (provisoire) */
const LOI_COUVREFEU=[0,.25,.5];    /* part des actions des maisons qui avortent (provisoire) */
const LOI_RELAIS_MAX=3;      /* tesselles de la Loi des Relais par Assemblée et par cycle, au plus (×2 renforcée) (provisoire) */
const caravanesLa=()=>typeof caravanes==='function';   /* module des caravanes présent (caravanes.js) */
/* Carte jouée (21 zones) : ses six Assemblées ont une fiche, le catalogue ne s'y jouerait pas. Avec LOIS_CATALOGUE_CARTE, les quatre Assemblées
   à loi unique (Cezo, Balpak, Pama, Raak) reçoivent une loi du catalogue sur leur pôle − (tirée du nom de ce pôle) ; leur loi écrite reste au pôle +.
   (20 nov., provisoire ; false : comportement d'avant, loi écrite aux deux pôles) */
const LOIS_CATALOGUE_CARTE=true;
const LOI_CARTE={ASS006:-1,ASS012:-1,ASS150:-1,ASS155:-1};   /* pôle qui reçoit une loi du catalogue */
function poleCatalogue(id){return LOIS_CATALOGUE_CARTE&&LOI_CARTE[id]||0}
const pl_=(n,m)=>n+' '+m+(n>1?'s':'');
/* le catalogue : n = 1 (en vigueur) ou 2 (en vigueur renforcée) */
const LOIS={
  guet:{nom:'Loi du Guet',dom:'Hordes · préavis',
    txt:n=>`Une horde qui vise une de vos zones de la juridiction arrive ${pl_(n,'cycle')} plus tard.`},
  fosses:{nom:'Loi des Fossés',dom:'Hordes · force',
    txt:n=>`Une horde qui vise une de vos zones de la juridiction perd ${n} de force en franchissant les fossés.`},
  leurre:{nom:'Loi des Feux trompeurs',dom:'Hordes · cible',
    txt:n=>`Une horde ne vise vos zones de la juridiction qu'en dernier recours, quand aucune autre zone à sa portée ne convient${n>1?' ; si elle s\'y risque quand même, elle perd 1 de force':''}.`},
  temoins:{nom:'Loi des Témoins',dom:'Rivaux · chance',
    txt:n=>`Les maisons rivales ont ${Math.round(LOI_TEMOINS[n]*100)} chances sur 100 de moins de réussir l'épreuve d'une zone de la juridiction, qu'elle soit à vous ou sauvage.`},
  couvrefeu:{nom:'Loi du Couvre-feu',dom:'Rivaux · rythme',
    txt:n=>`Dans tout le monde, ${n>1?'une action sur deux':'une action sur quatre'} des maisons rivales avorte (une seule loi du Couvre-feu compte).`},
  cadastre:{nom:'Loi du Cadastre',dom:'Rivaux · plafond',
    txt:n=>`Chaque maison rivale peut tenir une zone de moins, une au moins (une seule loi du Cadastre compte)${n>1?' ; aucune maison ne peut tenter l\'épreuve d\'une zone sauvage de la juridiction':''}.`},
  vigies:{nom:'Loi des Vigies',dom:'Tours de guet',
    txt:n=>`Une tour de guet qui couvre une de vos zones de la juridiction y donne +${n} de défense de plus contre les hordes et 1 cycle de préavis de plus.`},
  dime:{nom:'Loi de la Dîme',dom:'Tesselles',
    txt:n=>`L'Assemblée lève ${pl_(n,'tesselle')} par cycle, plus ${n} par Citadelle tenue dans la juridiction.`},
  corvee:{nom:'Loi des Corvées',dom:'Donjons aménagés · entretien',
    txt:n=>`À chaque cycle, la corvée remet d'aplomb ${pl_(n,'piège')} par Donjon tenu de la juridiction : un piège endormi se réveille sans mana, un piège usé regagne un assaut.`},
  communs:{nom:'Loi des Communs',dom:'Domaines',
    txt:n=>`Vos zones de la juridiction qui appartiennent à un domaine fermé gagnent +${n} de protection : défense contre les hordes, et ${10*n} chances sur 100 de moins pour les rivaux.`},
  relais:{nom:'Loi des Relais',dom:'Routes et caravanes',
    txt:n=>`Chaque route ouverte depuis une zone de la juridiction rapporte ${pl_(n,'tesselle')} par cycle (${LOI_RELAIS_MAX*n} au plus)${caravanesLa()?` ; une caravane qui traverse la juridiction rapporte ${n} de plus`:''}.`}};
const LOI_ORDRE=Object.keys(LOIS);
/* pôle → loi (les 60 pôles des 182 Assemblées de la liste des 986) */
const LOI_POLES={
  Clarté:'guet',Éveil:'guet',Aurore:'guet',Étoiles:'guet',Rêve:'guet',
  Fer:'fosses',Pierre:'fosses',Os:'fosses',Glace:'fosses',Poison:'fosses',Sang:'fosses',Tempête:'fosses',Sécheresse:'fosses',
  Brume:'leurre',Ombre:'leurre',Mensonge:'leurre',Cauchemar:'leurre',Folie:'leurre',Abysse:'leurre',Corruption:'leurre',Déluge:'leurre',
  Vérité:'temoins',Raison:'temoins',Mémoire:'temoins',Pureté:'temoins',
  Silence:'couvrefeu',Tyrannie:'couvrefeu',Nuit:'couvrefeu',Sommeil:'couvrefeu',Peste:'couvrefeu',Mort:'couvrefeu',Vide:'couvrefeu',Famine:'couvrefeu',
  Ordre:'cadastre',Exil:'cadastre',Oubli:'cadastre',Calme:'cadastre',
  Lumière:'vigies',Bois:'vigies',Cristal:'vigies',Feu:'vigies',Ciel:'vigies',
  Or:'dime',Abondance:'dime',Festin:'dime',Corail:'dime',Nectar:'dime',
  Cendre:'corvee',Ruine:'corvee',Rouille:'corvee',Pourriture:'corvee',Guérison:'corvee',
  Foyer:'communs',Croissance:'communs',Floraison:'communs',Sève:'communs',Vie:'communs',
  Liberté:'relais',Chaos:'relais',Chant:'relais'};
const LOI_FORCEE={};          /* tests seulement (MZ.loiForcer) : id d'Assemblée → loi du catalogue, pour ses deux pôles ; jamais sauvegardé */
const estAssL=Z=>!!Z&&(Z.mod||Z.id)==='MAR';
const nomAssL=id=>ZB[id]?zI(id).nom.split(',')[0]:id;
function hashLoi(s){let h=2166136261;for(const c of String(s))h=Math.imul(h^c.charCodeAt(0),16777619)>>>0;return h}
/* les deux lois du catalogue d'une Assemblée sans fiche : [loi du pôle −, loi du pôle +] ; null pour une Assemblée à fiche */
const LOI_DE={};
function loisDe(id){if(LOI_FORCEE[id])return[LOI_FORCEE[id],LOI_FORCEE[id]];const Z=ZB[id];if(!estAssL(Z))return null;
  if(ASSEMBLEES[id]){const s=poleCatalogue(id);if(!s)return null;const pole=s<0?Z.info.pm:Z.info.pp,k=LOI_POLES[pole]||LOI_ORDRE[hashLoi(id+(s<0?'-':'+')+pole)%LOI_ORDRE.length];
    return s<0?[k,null]:[null,k]}   /* loi écrite d'un côté (null), loi du catalogue de l'autre */
  if(LOI_DE[id])return LOI_DE[id];const pm=Z.info.pm,pp=Z.info.pp;
  const a=LOI_POLES[pm]||LOI_ORDRE[hashLoi(id+'-'+pm)%LOI_ORDRE.length];let b=LOI_POLES[pp]||LOI_ORDRE[hashLoi(id+'+'+pp)%LOI_ORDRE.length];
  if(b===a)b=LOI_ORDRE[(LOI_ORDRE.indexOf(a)+1)%LOI_ORDRE.length];
  return LOI_DE[id]=[a,b]}

/* ---------- état ---------- */
function initLois(){if(typeof S==='undefined')return;
  if(!S.loisRenf||typeof S.loisRenf!=='object')S.loisRenf={};
  if(S.loisGraine!==S.graine){S.loisRenf={};S.loisGraine=S.graine}
  if(typeof S.loisNc!=='number')S.loisNc=S.nc||0;   /* une vieille sauvegarde ne touche pas les cycles passés */
  if((S.nc||0)<S.loisNc)S.loisNc=S.nc||0}
const signeLoi=id=>!S.own[id]||!S.act[id]||!S.lv[id]?0:Math.sign(S.lv[id]);
function loiRenforcee(id){initLois();const f=S.loisRenf[id];return!!f&&signeLoi(id)!==0&&(S.nc||0)<f}
const finRenfTxt=id=>{const r=Math.max(1,(S.loisRenf[id]||0)-(S.nc||0));return` (encore ${pl_(r,'cycle')})`};
/* loi du catalogue en vigueur d'une Assemblée, ou null */
function loiCat(id){const L=loisDe(id),s=signeLoi(id);return L&&s?L[s<0?0:1]:null}
/* lois du catalogue en vigueur, avec leur juridiction (mémorisé tant que rien ne change) */
let LOI_MEMO=null,LOI_CLE='';
function loisActives(){initLois();const ids=ZN.filter(estAssL).map(Z=>Z.id);
  const cle=(S.nc||0)+'|'+ids.map(id=>(S.own[id]?1:0)+''+(S.act[id]?1:0)+':'+(S.lv[id]||0)+':'+(S.loisRenf[id]||0)+':'+(LOI_FORCEE[id]||'')).join(',');
  if(cle===LOI_CLE&&LOI_MEMO)return LOI_MEMO;
  const out=[];for(const id of ids){const k=loiCat(id);if(k)out.push({id,k,n:loiRenforcee(id)?2:1,jur:aPortee(id,LOI_PORTEE)})}
  LOI_CLE=cle;return LOI_MEMO=out}
/* force d'une loi du catalogue sur une zone (sans zone : partout), 0 si elle n'y est pas en vigueur */
function forceLoi(k,zid){let n=0;for(const a of loisActives())if(a.k===k&&(zid===undefined||a.jur[zid]!==undefined))n=Math.max(n,a.n);return n}
/* pour rivaux.js : chance retirée aux maisons sur cette zone */
function loiChanceRival(id){return LOI_TEMOINS[forceLoi('temoins',id)]||0}
/* pour caravanes.js : force de la Loi des Relais sur cette zone */
function loiRelais(id){return forceLoi('relais',id)}

/* ---------- hordes : préavis (Guet, Greniers renforcés), force (Fossés, Feux trompeurs renforcés), cible (Feux trompeurs) ---------- */
if(typeof leverHorde==='function'){const _loisLever=leverHorde;
  leverHorde=function(src,cible,force){const h=_loisLever.apply(this,arguments);if(!h||!S.own[h.cible])return h;const notes=[];
    const g=forceLoi('guet',h.cible);if(g){h.arrive+=g;notes.push(`la Loi du Guet la retarde de ${pl_(g,'cycle')}`)}
    if(loi('ASS150')&&loiRenforcee('ASS150')){h.arrive+=HORDE_DELAI;notes.push(`les Greniers renforcés de Pama la retardent encore de ${pl_(HORDE_DELAI,'cycle')}`)}
    const f=forceLoi('fosses',h.cible),t=forceLoi('leurre',h.cible)>1?1:0;
    if(f+t){const av=h.force;h.force=Math.max(1,h.force-f-t);if(av>h.force)notes.push(`${f&&t?'les Fossés et les Feux trompeurs':f?'la Loi des Fossés':'les Feux trompeurs'} lui retirent ${av-h.force} de force (force ${h.force})`)}
    if(notes.length){h.lois=notes;save();
      if(started){const e=$('t3'),b=$('toast');if(e&&b&&b.classList.contains('vu')&&/marche sur/.test($('t2').textContent))e.textContent+=' Lois du monde : '+notes.join(' ; ')+'.'}}
    return h}}
if(typeof cibleHorde==='function'){const _loisCible=cibleHorde;
  /* Feux trompeurs : on cherche d'abord une autre cible en faisant comme si vos zones protégées étaient déjà visées */
  cibleHorde=function(src){const c=_loisCible(src);if(!c||!S.own[c]||!forceLoi('leurre',c))return c;
    const faux=[];try{for(const Z of ZN)if(S.own[Z.id]&&forceLoi('leurre',Z.id)){const k='~feux~'+Z.id;S.hordes[k]={cible:Z.id};faux.push(k)}return _loisCible(src)||c}
    finally{for(const k of faux)delete S.hordes[k]}}}

/* ---------- rivaux : rythme (Couvre-feu), plafond (Cadastre) ; la chance (Témoins) est dans chanceRival et chanceEpreuve ---------- */
if(typeof rivalAgit==='function'){const _loisAgit=rivalAgit;
  rivalAgit=function(force,sorte){if(!force){const n=forceLoi('couvrefeu');if(n&&Math.random()<LOI_COUVREFEU[n]){LOI_STATS.couvrefeu++;return null}}return _loisAgit.apply(this,arguments)}}
if(typeof tenter==='function'){const _loisTenter=tenter;
  tenter=function(r,Z){const n=forceLoi('cadastre');
    if(n&&(zonesMaison(r.k).length>=Math.max(1,RIV_MAX()-1)||forceLoi('cadastre',Z.id)>1)){LOI_STATS.cadastre++;return null}
    return _loisTenter.apply(this,arguments)}}

/* ---------- tours de guet (Vigies) ---------- */
if(typeof defenseTours==='function'){const _loisDT=defenseTours;
  defenseTours=function(id){const r=_loisDT(id),n=r&&r.bonus&&S.own[id]?forceLoi('vigies',id):0;if(n){r.bonus+=n;r.raisons.push('Loi des Vigies +'+n)}return r}}
if(typeof preavisTours==='function'){const _loisPT=preavisTours;
  preavisTours=function(id){const p=_loisPT(id);return p&&forceLoi('vigies',id)?p+1:p}}

/* ---------- domaines (Communs) et bornage renforcé : protection de la zone ---------- */
if(typeof defenseMonde==='function'){const _loisDM=defenseMonde;
  defenseMonde=function(id){const r=_loisDM(id);if(!r||!S.own[id])return r;
    const n=forceLoi('communs',id);if(n&&typeof domaineDe==='function'){const d=domaineDe(id);if(d&&d.ferme){r.bonus+=n;r.raisons.push('Loi des Communs +'+n)}}
    if(typeof borne==='function'&&borne(id)&&loiRenforcee('ASS155')){r.bonus+=2;r.raisons.push('Pierre de bornage renforcée +2')}
    return r}}

/* ---------- mort du héros : les lois renforcées retombent ---------- */
if(typeof mort==='function'){const _loisMort=mort;mort=function(){if(typeof S!=='undefined')S.loisRenf={};return _loisMort.apply(this,arguments)}}

/* ---------- chaque cycle : Dîme, Relais (tesselles), Corvées (pièges) ---------- */
const LOI_STATS={couvrefeu:0,cadastre:0};
/* tesselles que les lois lèveront ce cycle (Dîme, Relais), sans les verser ; aussi pour le prix du pacte (pacte.js) */
function loisTess(r){initLois();r=r||{tess:0,lignes:[]};
  if(typeof etatRoutes==='function')etatRoutes();
  for(const a of loisActives()){
    if(a.k==='dime'){const c=ZN.filter(Z=>estCIT(Z)&&tient(Z.id)&&a.jur[Z.id]!==undefined).length,t=a.n*(1+c);r.tess+=t;r.lignes.push(`+${t} ◇ de la Dîme ${de_(nomAssL(a.id))}`)}
    if(a.k==='relais'&&S.routes){let c=0;for(const z in S.routes)if(a.jur[z]!==undefined)c+=S.routes[z].length;const t=Math.min(LOI_RELAIS_MAX*a.n,c*a.n);if(t){r.tess+=t;r.lignes.push(`+${t} ◇ des Relais ${de_(nomAssL(a.id))}`)}}}
  return r}
function loisCycle(){initLois();const r={tess:0,corvee:0,lignes:[]};loisTess(r);
  if(r.tess&&typeof gagnerTesselles==='function')gagnerTesselles(r.tess,'cycle');
  for(const Z of ZN){if(!estDON(Z)||!tient(Z.id))continue;const n=forceLoi('corvee',Z.id);if(!n)continue;
    const T=typeof piegesTab==='function'?piegesTab(Z.id):Z.id==='DON'&&Array.isArray(S.pieges)?S.pieges:[];let k=0;
    for(const x of T){if(k>=n)break;if(!x)continue;if(x.dort){x.dort=false;k++}else if(S.ent===2&&x.u>0&&x.u<3){x.u++;k++}}
    if(k){r.corvee+=k;r.lignes.push(`la corvée remet d'aplomb ${pl_(k,'piège')} ${de_(nomAssL(Z.id))}`)}}
  if(r.lignes.length){save();if(typeof hudKey!=='undefined')hudKey=''}
  return r}

/* ---------- Duel d'arguments gagné : la loi passe en vigueur renforcée (appelé par duel.js) ---------- */
let LOI_FILE=[];
function loiDuelGagne(Z){if(!Z||!estAssL(Z))return false;initLois();S.loisRenf[Z.id]=(S.nc||0)+LOI_RENF_CYCLES;save();
  LOI_FILE.unshift(()=>{const v=vigueurDe(Z.id);
    return v?['Loi en vigueur renforcée · '+nomAssL(Z.id),v.nom,`Le Conseil cède : ${v.renf} pendant ${pl_(LOI_RENF_CYCLES,'cycle')}.`]
      :['Duel gagné · '+nomAssL(Z.id),'La loi dort encore','L\'Assemblée est revenue au palier 0 : sa loi ne s\'éveillera qu\'au palier 1 ou plus, et la victoire ne la renforce pas.']});
  return true}

/* ---------- description des lois d'une Assemblée (fiche ou catalogue) ---------- */
/* loi en vigueur : {id, nom, txt, renf (texte renforcé), n, k} ou null */
function vigueurDe(id){const A=ASSEMBLEES[id],Z=ZB[id];if(!Z)return null;
  const k=loiCat(id);if(k){const n=loiRenforcee(id)?2:1;return{id,k,n,nom:LOIS[k].nom,txt:LOIS[k].txt(n),renf:LOIS[k].txt(2).replace(/^./,c=>c.toLowerCase()),dom:LOIS[k].dom}}
  if(A&&loi(id)){const l=loi(id),t=A.loi(l),i=t.indexOf(' : ');return{id,k:'fiche',n:loiRenforcee(id)?2:1,nom:i>0?t.slice(0,i):t,txt:(i>0?t.slice(i+3):t).replace(/^./,c=>c.toUpperCase())+'.'+(loiRenforcee(id)?' Renforcée : '+A.renf(l)+'.':''),renf:A.renf(l),dom:'Loi de fiche'}}
  return null}
/* les deux lois d'une Assemblée, par pôle : [{pole, nom, txt, renf}] */
function loisParPole(id){const A=ASSEMBLEES[id],Z=ZB[id],L=loisDe(id),out=[];if(!Z)return out;
  for(const s of[-1,1]){const pole=s<0?Z.info.pm:Z.info.pp;
    if(L&&L[s<0?0:1]){const k=L[s<0?0:1];out.push({s,pole,k,nom:LOIS[k].nom,txt:LOIS[k].txt(1),renf:LOIS[k].txt(2)})}
    else if(A){const t=A.loi(s),i=t.indexOf(' : ');out.push({s,pole,k:'fiche',nom:i>0?t.slice(0,i):t,txt:(i>0?t.slice(i+3):t).replace(/^./,c=>c.toUpperCase())+'.',renf:A.renf(s).replace(/^./,c=>c.toUpperCase())+'.'})}}
  return out}
/* comment réveiller la loi d'une Assemblée */
function reveilTxt(id){const Z=ZB[id],P=loisParPole(id),deux=P.length===2&&P[0].nom!==P[1].nom;
  const pal=deux?`vers ${P[0].pole} (palier −1 ou moins) pour « ${P[0].nom} », ou vers ${P[1].pole} (palier +1 ou plus) pour « ${P[1].nom} »`:'au palier 1 ou plus, vers l\'un ou l\'autre pôle';
  if(S.own[id]&&S.act[id])return`Montez l'Assemblée ${pal}, par le Duel d'arguments à sa Pierre d'éveil.`;
  const m=typeof maisonDe==='function'&&maisonDe(id);
  return(typeof verrouLoin==='function'&&verrouLoin(Z)?'Zone scellée tant que votre royaume n\'est pas établi. Ensuite, p':'P')+
    `renez l'Assemblée en battant ses gardiens à sa Pierre d'éveil${m?` (elle est à la ${m.nom.replace(/^Maison /,'maison ')})`:''}, puis montez-la ${pal}.`}

/* ---------- Pierre d'éveil d'une Assemblée sans fiche (appelé par optionsAssemblee) ---------- */
function optionsLoiCatalogue(Z){const P=loisParPole(Z.id);if(!P.length)return[];const id=Z.id,s=signeLoi(id),o=[];
  const jur='Juridiction : l\'Assemblée et les zones à '+LOI_PORTEE+' tuiles ou moins.';
  if(s){const v=vigueurDe(id),r=v.n>1,autre=P.find(p=>p.s!==s);
    o.push({l:(r?'Loi en vigueur renforcée : ':'Loi en vigueur : ')+v.nom,ic:'⚖',off:true,d:v.txt+(v.k==='fiche'?'':' '+jur)+(r?finRenfTxt(id):' Gagnez le Duel d\'arguments pour la renforcer '+LOI_RENF_CYCLES+' cycles.')});
    if(autre&&autre.k!==v.k)o.push({l:`Loi endormie du pôle ${autre.pole} : ${autre.nom}`,ic:'⚖',off:true,d:autre.txt+` Elle remplace l'autre si l'Assemblée passe au palier ${autre.s<0?'−1':'+1'} ou au-delà.`})}
  else o.push({l:'Lois endormies : '+P.map(p=>p.nom).filter((n,i,a)=>a.indexOf(n)===i).join(' ou '),ic:'⚖',off:true,d:P.map(p=>`${p.pole} : ${p.txt}`).join(' ')+' '+reveilTxt(id)});
  return o}
function recoLoisCatalogue(){for(const Z of ZN){if(!estAssL(Z)||!loisDe(Z.id))continue;const P=loisParPole(Z.id);if(!P.length)continue;
  RECO[Z.id]=`Lois du monde (au palier 1 ou plus${ASSEMBLEES[Z.id]?' ; la loi du catalogue agit':''} sur l'Assemblée et les zones à ${LOI_PORTEE} tuiles ou moins) : ${P.map(p=>`${p.pole}, ${p.nom} : ${p.txt.replace(/\.$/,'')}`).join(' ; ')}. Gagner le Duel d'arguments la renforce.`}}

/* ---------- message quand une loi s'éveille ou s'endort ---------- */
let LOI_VU=null,LOI_VU_CLE='';
function suivreLois(){const cle=S.graine+':'+(S.lives||1),cur={};
  for(const Z of ZN)if(estAssL(Z)){const v=vigueurDe(Z.id);if(v)cur[Z.id]=v}
  if(LOI_VU&&LOI_VU_CLE===cle){
    for(const id in cur){const a=LOI_VU[id],v=cur[id];
      if(!a||a.nom!==v.nom)LOI_FILE.push(['Loi en vigueur · '+nomAssL(id),v.nom,v.txt+' Voir « Lois du monde » au menu Pause.']);
      else if(a.n>1&&v.n===1)LOI_FILE.push(['Fin de la vigueur renforcée · '+nomAssL(id),v.nom,'La loi reste en vigueur, à sa force ordinaire. Gagnez de nouveau le Duel d\'arguments pour la renforcer.'])}
    for(const id in LOI_VU)if(!cur[id])LOI_FILE.push(['Loi endormie · '+nomAssL(id),LOI_VU[id].nom,reveilTxt(id)])}
  LOI_VU=Object.fromEntries(Object.entries(cur).map(([k,v])=>[k,{nom:v.nom,n:v.n}]));LOI_VU_CLE=cle}
setInterval(()=>{if(typeof started==='undefined'||!started||mode==='titre'||typeof S==='undefined')return;initLois();
  while(S.loisNc<(S.nc||0)){S.loisNc++;if(mondeIci())loisCycle()}
  suivreLois();
  if(mode==='monde'&&LOI_FILE.length&&(typeof toastT==='undefined'||toastT<1)){let m=LOI_FILE.shift();if(typeof m==='function')m=m();toast(...m)}},1000);

/* ---------- écran « Lois du monde » (menu Pause) ---------- */
function resumeLois(){const n=ZN.filter(Z=>estAssL(Z)&&vigueurDe(Z.id)).length,t=ZN.filter(estAssL).length;return`${n} en vigueur sur ${t} Assemblée${t>1?'s':''}`}
function openLois(f){mode='menu';document.body.classList.add('jeu-ouvert');initLois();
  const ass=ZN.filter(estAssL),vig=ass.filter(Z=>vigueurDe(Z.id)),dort=ass.filter(Z=>!vigueurDe(Z.id)),o=[];
  for(const Z of vig){const v=vigueurDe(Z.id),i=o.length;o.push({l:v.nom+(v.n>1?' · renforcée':''),ic:'⚖',cls:'p',d:`${nomAssL(Z.id)} · ${v.txt}${v.n>1?finRenfTxt(Z.id):''}`,go:()=>openLoi(Z.id,i)})}
  if(!vig.length)o.push({l:'Aucune loi en vigueur',ic:'⚖',off:true,d:'prenez une Assemblée et montez-la au palier 1 ou plus'});
  o.push({l:'Lois endormies',ic:'·',off:true,d:dort.length?pl_(dort.length,'Assemblée')+' : choisissez-en une pour voir comment réveiller sa loi':'aucune : toutes vos Assemblées légifèrent'});
  dort.forEach(Z=>{const P=loisParPole(Z.id),i=o.length;o.push({l:nomAssL(Z.id)+' · '+P.map(p=>p.nom).filter((n,j,a)=>a.indexOf(n)===j).join(' ou '),ic:'○',d:reveilTxt(Z.id),go:()=>openLoi(Z.id,i)})});
  o.push({l:'Retour',ic:'◆',go:()=>openMenu()});
  ui('menu',{sur:'Pause · les Assemblées',t:'Lois du monde',f:typeof f==='number'&&f<o.length?f:0,
    corps:`<p class="petit">Chaque Assemblée, siège politique de sa région, porte une loi par pôle. La loi s'éveille quand l'Assemblée est à vous, activée et au palier 1 ou plus : son pôle choisit laquelle. Une loi agit sur sa juridiction, l'Assemblée et les zones à ${LOI_PORTEE} tuiles ou moins (sauf les six lois écrites pour leur Assemblée, qui ont chacune leur portée). Gagner le Duel d'arguments d'une Assemblée met sa loi en vigueur renforcée pendant ${pl_(LOI_RENF_CYCLES,'cycle')}.</p><p class="petit">${resumeLois()}.</p>`,
    back:()=>openMenu(),opts:o})}
function openLoi(id,f){const Z=ZB[id];if(!Z)return openLois();const P=loisParPole(id),v=vigueurDe(id),s=signeLoi(id);
  const jur=Object.keys(aPortee(id,LOI_PORTEE)).filter(z=>ZB[z]).map(z=>nomAssL(z)+(S.own[z]?' (à vous)':''));
  const lignes=P.map(p=>`<p class="petit"><b>${p.pole} (palier ${p.s<0?'−1 à −7':'+1 à +7'}) · ${p.nom}</b>${s===p.s?' · <b>en vigueur'+(v&&v.n>1?' renforcée':'')+'</b>':''}<br>${p.txt}<br><i>Renforcée : ${p.renf}</i></p>`).join('');
  const L=loisDe(id);
  ui('menu',{sur:'Lois du monde · '+(ASSEMBLEES[id]?(L?'loi écrite et loi du catalogue':'loi écrite pour cette Assemblée'):'catalogue des lois'),t:Z.info.nom,
    corps:`${lignes}${L?`<p class="petit">Juridiction${ASSEMBLEES[id]?' de la loi du catalogue':''} : ${jur.join(', ')}.</p>`:''}<p class="petit">${v?'État : en vigueur'+(v.n>1?' renforcée'+finRenfTxt(id):'')+'. ':'État : endormie. '+reveilTxt(id)}</p>`,
    back:()=>openLois(f),opts:[{l:'Aller à l\'Assemblée',ic:'✧',d:'devant sa Pierre d\'éveil',go:()=>{tp(id);toMonde()}},{l:'Retour aux lois',ic:'◆',go:()=>openLois(f)}]})}

/* ---------- tests : MZ.lois() (état), MZ.loiForcer(id, loi), MZ.loiRenforcer(id), MZ.loisCycle() ---------- */
function loisEtat(){initLois();const ass=ZN.filter(estAssL).map(Z=>Z.id);
  return{portee:LOI_PORTEE,renfCycles:LOI_RENF_CYCLES,catalogue:LOI_ORDRE.map(k=>({k,nom:LOIS[k].nom,dom:LOIS[k].dom,txt:LOIS[k].txt(1),renf:LOIS[k].txt(2)})),
    vigueur:ass.map(id=>vigueurDe(id)).filter(Boolean).map(v=>({id:v.id,k:v.k,nom:v.nom,renforcee:v.n>1,jusqua:v.n>1?S.loisRenf[v.id]:null})),
    endormies:ass.filter(id=>!vigueurDe(id)).map(id=>({id,lois:loisParPole(id).map(p=>p.nom),reveil:reveilTxt(id)})),
    assemblees:Object.fromEntries(ass.map(id=>[id,loisParPole(id).map(p=>p.k==='fiche'?'fiche:'+p.nom:p.k)])),stats:Object.assign({},LOI_STATS)}}
function loiForcer(id,k){if(!ZB[id])return null;if(k&&LOIS[k])LOI_FORCEE[id]=k;else delete LOI_FORCEE[id];LOI_MEMO=null;return loisDe(id)}
function loiRenforcer(id,non){initLois();if(non)delete S.loisRenf[id];else S.loisRenf[id]=(S.nc||0)+LOI_RENF_CYCLES;LOI_MEMO=null;save();return loiRenforcee(id)}
/* pour test-lois.js : accès direct à quelques fonctions du monde */
const LOIS_TEST={forceLoi,loiCat,loisDe,loisActives,loisCycle,loiDuelGagne,openLois,openLoi,LOIS,LOI_POLES,
  get cibleHorde(){return cibleHorde},get leverHorde(){return leverHorde},get rivalAgit(){return rivalAgit},get tenter(){return tenter},
  get chanceRival(){return chanceRival},get chanceEpreuve(){return chanceEpreuve}};
