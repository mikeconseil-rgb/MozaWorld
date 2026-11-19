/* MozaWorld : contrôle des zones, « juste un peu comme le Go », référence Carcassonne (18-19 nov.).
   - Domaine : groupe d'un seul tenant de tuiles voisines (VOISINES de routes.js) du même type, 2 tuiles au moins.
     Il est FERMÉ quand toutes ses tuiles sont à vous et activées ; il donne alors le bonus de son type :
       Ressources +1 mana par cycle · Antres +2 PV à chaque bête · Citadelles +5 PV (+2 cases en blessures) ·
       Donjons +1 de résistance · Assemblées +1 voix au vote du Duel d'arguments. Un bonus par domaine fermé.
   - Cœur du royaume : une zone à vous dont toutes les voisines sont à vous et activées.
   - Encerclée : une zone sauvage dont toutes les voisines sont à vous et activées ; ses gardiens d'activation
     sont affaiblis (PV ×0,75, attaque −1), comme une pierre capturée au Go.
   - Verrou : une Citadelle à vous et activée verrouille sa zone et ses voisines. Une zone verrouillée ou au cœur
     ne peut pas être visée par un rival (le module Rivaux appelle verrouillee(id)).
   API pour les autres modules : verrouillee(id), defenseMonde(id) → {bonus, raisons}, domaines() → [{type, ids, ferme}].
   Branchement : par enveloppes de startCombat, monstre, invoquer et voixDuel (aucune ligne changée dans combat.js ni duel.js),
   une accroche dans cycle() (economie.js), une dans openEveil (main.js) et la ligne Domaines du bandeau. Règles : design/REGLES.md, section 4. */
const DOM_MIN=2;
const DOM_NOMS={CIT:['Citadelles','de Citadelles'],DON:['Donjons','de Donjons'],RES:['Ressources','de Ressources'],ANT:['Antres','d\'Antres'],MAR:['Assemblées','d\'Assemblées']};
const DOM_BONUS={RES:'+1 mana par cycle',ANT:'+2 PV à chacune de vos bêtes en combat',CIT:'+5 PV au héros en combat (+2 cases avec les blessures)',DON:'+1 de résistance au héros en combat',MAR:'+1 voix au vote des Duels d\'arguments'};
const domType=id=>ZB[id]?(ZB[id].mod||id):null;
const domTient=id=>!!(S.own[id]&&S.act[id]);
const domVois=id=>(typeof VOISINES!=='undefined'&&VOISINES[id])||[];
/* les groupes ne dépendent que de la carte : calculés une fois */
let DOM_GROUPES=null;
function domGroupes(){if(DOM_GROUPES)return DOM_GROUPES;const vu=new Set(),out=[];
  for(const Z of ZN){if(vu.has(Z.id))continue;const t=domType(Z.id),ids=[],pile=[Z.id];vu.add(Z.id);
    while(pile.length){const z=pile.pop();ids.push(z);for(const v of domVois(z))if(!vu.has(v)&&domType(v)===t){vu.add(v);pile.push(v)}}
    if(ids.length>=DOM_MIN)out.push({type:t,ids})}
  return DOM_GROUPES=out}
/* liste des domaines, avec leur état du moment */
function domaines(){return domGroupes().map(g=>({type:g.type,ids:g.ids.slice(),ferme:g.ids.every(domTient),tenues:g.ids.filter(domTient).length}))}
const domaineDe=id=>domaines().find(d=>d.ids.indexOf(id)>=0)||null;
const domFermes=t=>domaines().filter(d=>d.ferme&&(!t||d.type===t));
/* Go : cœur et encerclement */
const auCoeur=id=>domTient(id)&&domVois(id).length>0&&domVois(id).every(domTient);
const encerclee=id=>!S.own[id]&&domVois(id).length>0&&domVois(id).every(domTient);
/* verrou de Citadelle : la Citadelle tenue et ses voisines */
const citVerrou=id=>[id,...domVois(id)].find(c=>domType(c)==='CIT'&&domTient(c))||null;
function verrouillee(id){return!!citVerrou(id)||auCoeur(id)}
function defenseMonde(id){const r={bonus:0,raisons:[]};if(!S.own[id])return r;
  if(auCoeur(id)){r.bonus+=2;r.raisons.push('au cœur du royaume +2')}
  const d=domaineDe(id);if(d&&d.ferme){r.bonus+=1;r.raisons.push('domaine '+DOM_NOMS[d.type][1]+' fermé +1')}
  const c=citVerrou(id);if(c){r.bonus+=2;r.verrou=2;r.raisons.push('verrou de '+(ZB[c]?ZB[c].info.nom:'la Citadelle')+' +2')}
  return r}

/* ---------- effets des domaines fermés ---------- */
/* Ressources : +1 mana par cycle et par domaine fermé, du mana de sa première tuile (appelé par cycle()) */
function domainesCycle(lignes){for(const d of domFermes('RES')){const t=(typeof ZMANA!=='undefined'&&ZMANA[d.ids[0]])||'Vent';gagner(t,1);lignes.push(`+1 ${t} du domaine de Ressources fermé`)}}
/* combat : on prépare les bonus avant les gardiens, on les applique au héros une fois le combat posé */
let DOM_CB=null,DOM_ENC=false;
const _domStartCombat=startCombat;
startCombat=function(Z,kind){const duel=kind==='duel';
  DOM_CB=duel?null:{bete:2*domFermes('ANT').length,cit:domFermes('CIT').length,don:domFermes('DON').length};
  DOM_ENC=kind==='eveil'&&encerclee(Z.id);
  try{_domStartCombat(Z,kind)}finally{DOM_ENC=false}
  if(duel||!CB||!DOM_CB)return;const h=CB.hero,l=[];
  if(DOM_CB.cit){const n=DOM_CB.cit*(CB.sr?2:5);h.pv+=n;h.max+=n;l.push(`domaine de Citadelles fermé : +${n} ${CB.sr?'cases':'PV'}`)}
  if(DOM_CB.don){h.res=(h.res||0)+DOM_CB.don;l.push(`domaine de Donjons fermé : +${DOM_CB.don} de résistance`)}
  if(DOM_CB.bete)l.push(`domaine d'Antres fermé : vos bêtes ont +${DOM_CB.bete} PV`);
  if(kind==='eveil'&&encerclee(Z.id))l.push('zone encerclée : ses gardiens sont affaiblis');
  if(l.length){CB.passifs=(CB.passifs||[]).concat(l);journal('Domaines : '+l.join(' · ')+'.');majUnites()}};
/* encerclement : gardiens d'activation affaiblis */
const _domMonstre=monstre;
monstre=function(Z,i,faible){const m=_domMonstre(Z,i,faible);if(DOM_ENC){m.pv=m.max=Math.max(1,Math.round(m.pv*.75));m.atk=Math.max(1,m.atk-1);m.encercle=1}return m};
/* Antres : chaque bête (pas les bloqueurs) arrive plus solide */
const _domInvoquer=invoquer;
invoquer=function(b){if(DOM_CB&&DOM_CB.bete&&b&&b.bete&&!b.mur&&CB&&CB.kind!=='duel'){b.pv+=DOM_CB.bete;b.max=(b.max||0)+DOM_CB.bete}return _domInvoquer(b)};
/* Assemblées : une voix de plus au vote du duel, par domaine fermé */
if(typeof voixDuel==='function'){const _domVoix=voixDuel;
  voixDuel=function(Z,target){const r=_domVoix(Z,target),n=domFermes('MAR').length;if(n){r.v+=n;r.pour.push('domaine d\'Assemblées fermé +'+n)}return r}}

/* ---------- suivi : un toast quand un domaine se ferme ou s'ouvre ---------- */
const DOM_FILE=[];
function suivreDomaines(){const f=domFermes().map(d=>d.ids[0]);
  if(!Array.isArray(S.domFermes)||S.domGraine!==S.graine){S.domFermes=f;S.domGraine=S.graine;return}
  for(const d of domaines()){const k=d.ids[0],avant=S.domFermes.indexOf(k)>=0;if(avant===d.ferme)continue;const N=DOM_NOMS[d.type];
    DOM_FILE.push(d.ferme?['Domaine fermé',`${d.ids.length} ${N[0]} d'un seul tenant`,`Toutes ses tuiles sont à vous : ${DOM_BONUS[d.type]}.`]
      :['Domaine ouvert',`Vos ${N[0]} ne tiennent plus d'un seul tenant`,`Une tuile du domaine vous échappe : ${DOM_BONUS[d.type]} est perdu.`])}
  S.domFermes=f}
setInterval(()=>{if(typeof started!=='undefined'&&started&&mode==='monde'&&DOM_FILE.length&&(typeof toastT==='undefined'||toastT<1))toast(...DOM_FILE.shift())},700);

/* ---------- bandeau et Pierre d'éveil ---------- */
function bandeauDomaines(){const L=domaines();if(!L.length)return'';const f=L.filter(d=>d.ferme).length;
  return`<span class="d" title="Domaines fermés : groupes d'au moins ${DOM_MIN} tuiles voisines du même type, toutes à vous"><span>◈</span>${f}<small>/${L.length} fermés</small></span>`}
function statutZone(id){const s=[];if(auCoeur(id))s.push('au cœur du royaume');if(encerclee(id))s.push('encerclée');if(citVerrou(id))s.push('verrouillée');
  const d=domaineDe(id);if(d&&d.ferme)s.push('domaine fermé');return s}
function optionsDomaines(Z){const o=[],id=Z.id,d=domaineDe(id),N=DOM_NOMS[domType(id)]||['zones','de zones'];
  if(d)o.push({l:d.ferme?`Domaine ${N[1]} fermé`:`Domaine ${N[1]} : ${d.tenues} sur ${d.ids.length}`,ic:'◈',off:true,
    d:d.ferme?DOM_BONUS[d.type]:`prenez et activez toutes ses tuiles pour le fermer (${DOM_BONUS[d.type]})`});
  if(auCoeur(id))o.push({l:'Au cœur du royaume',ic:'◉',off:true,d:'toutes ses voisines sont à vous : aucun rival ne peut la viser, défense +2'});
  else if(encerclee(id))o.push({l:'Zone encerclée',ic:'◎',off:true,d:'toutes ses voisines sont à vous : ses gardiens sont affaiblis (PV −25 %, attaque −1)'});
  const c=citVerrou(id);if(c&&S.own[id])o.push({l:'Zone verrouillée',ic:'⛫',off:true,d:`${c===id?'cette Citadelle':ZB[c].info.nom} la verrouille : aucun rival ne peut la viser, défense +2`});
  else if(c)o.push({l:'Sous le verrou de votre Citadelle',ic:'⛫',off:true,d:`${ZB[c].info.nom} la verrouille : aucun rival ne peut la viser`});
  return o}
/* test : prendre une zone d'un coup (window.MZ.prendre) */
function domPrendre(id,non){if(!ZB[id])return false;S.own[id]=S.act[id]=!non;save();etatHud();hudKey='';return true}
