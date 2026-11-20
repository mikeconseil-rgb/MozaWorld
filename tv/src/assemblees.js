/* Pouvoirs de carte du monde des Assemblées (17 nov., validés « pour l'instant » par l'utilisateur ; regles-avancees.md, section 1 sexies).
   Une Assemblée agit sur le monde, pas en combat. Son pouvoir s'active quand elle est à vous, activée et au palier 1 ou plus.
   Le signe du palier choisit la loi quand l'Assemblée en a deux (− : premier pôle, + : second).
   19 nov. (lot 3, src/lois.js) : les Assemblées sans fiche ici reçoivent une loi du catalogue ; gagner le Duel d'arguments
   met la loi « en vigueur renforcée » quelques cycles (renf ci-dessous, loiRenforcee dans lois.js). */
const renfAss=id=>typeof loiRenforcee==='function'&&loiRenforcee(id);
const ASSEMBLEES={
  MAR:  {nom:'Givrecloche',loi:l=>l<0?'Brume : vos zones voisines sont cachées aux hordes (le Donjon voisin n\'est pas assailli)':'Clarté : vous voyez le niveau et les secrets des zones jusqu\'à 2 tuiles',
         renf:l=>l<0?'la Brume cache aussi vos zones à 2 tuiles':'la Clarté porte à 3 tuiles'},
  ASS006:{nom:'Lande de Cezo',loi:()=>'Loi des péages : chaque route ouverte rapporte +1 mana par cycle',renf:()=>'chaque route rapporte 2 mana'},
  ASS012:{nom:'Balpak',loi:()=>'Loi du brûlis : le repos des Pierres d\'éveil voisines est divisé par deux',renf:()=>'le repos est divisé par quatre'},
  ASS150:{nom:'Delta de Pama',loi:()=>'Greniers : les invasions vers vos zones arrivent deux fois plus tard',renf:()=>'elles arrivent trois fois plus tard'},
  ASS152:{nom:'Canyon de Fjorhel',loi:l=>l<0?'Silence : deux fois moins de rencontres dans votre territoire':'Chant : plus de rencontres, chacune gagnée donne 1 mana de plus',
          renf:l=>l<0?'trois fois moins de rencontres':'chaque rencontre gagnée donne 2 mana de plus'},
  ASS155:{nom:'Oasis de Raak',loi:()=>'Pierre de bornage : la zone bornée ne peut pas perdre de niveau face à une horde ou un rival',renf:()=>'la zone bornée gagne aussi +2 de défense contre les hordes'}};
/* 0 si la loi dort ; sinon le signe du palier (−1 ou +1) */
/* lois.js (LOIS_CATALOGUE_CARTE) : sur le pôle qui porte une loi du catalogue, la loi écrite dort */
const loi=id=>{if(!ASSEMBLEES[id]||!S.own[id]||!S.act[id]||!(S.lv[id]))return 0;const s=Math.sign(S.lv[id]);return typeof poleCatalogue==='function'&&poleCatalogue(id)===s?0:s};
const voisinesDe=id=>(typeof VOISINES!=='undefined'&&VOISINES[id])||[];
/* à n tuiles au plus (largeur d'abord) */
function aPortee(id,n){const d={[id]:0},f=[id];while(f.length){const z=f.shift();if(d[z]>=n)continue;for(const v of voisinesDe(z))if(d[v]===undefined){d[v]=d[z]+1;f.push(v)}}return d}
/* Balpak : repos divisé par deux pour l'Assemblée et ses voisines (par quatre en vigueur renforcée) */
const reposZone=id=>loi('ASS012')&&(id==='ASS012'||voisinesDe('ASS012').indexOf(id)>=0)?REPOS/(renfAss('ASS012')?4:2):REPOS;
/* Pama : les assauts du sauvage arrivent deux fois plus tard (trois fois en vigueur renforcée) */
const cyclesAssaut=()=>ASSAUT_CYCLES*(loi('ASS150')?(renfAss('ASS150')?3:2):1);
/* Givrecloche en Brume : la horde ne trouve pas le Donjon s'il est voisin (ou si c'est l'Assemblée elle-même) ; à 2 tuiles en vigueur renforcée */
const cacheParBrume=id=>loi('MAR')<0&&(id==='MAR'||(renfAss('MAR')?aPortee('MAR',2)[id]!==undefined:voisinesDe('MAR').indexOf(id)>=0));
/* Givrecloche en Clarté : zones à 2 tuiles ou moins (3 en vigueur renforcée) */
const clarte=()=>loi('MAR')>0?aPortee('MAR',renfAss('MAR')?3:2):null;
/* Cezo : +1 mana par route ouverte (2 en vigueur renforcée), du type de la zone d'où part la route */
function peages(lignes){if(!loi('ASS006')||typeof etatRoutes!=='function')return;etatRoutes();let n=0;const k=renfAss('ASS006')?2:1;
  for(const r in S.routes)for(const _ of S.routes[r]){const t=(typeof ZMANA!=='undefined'&&ZMANA[r])||'Vent';gagner(t,k);n+=k}
  if(n)lignes.push(`+${n} mana des péages de Cezo`)}
/* Fjorhel : facteur de distance entre deux rencontres, et bonus de mana */
const facteurRencontre=()=>{const l=loi('ASS152');if(!l||!curZ||!S.own[curZ.id])return 1;return l<0?(renfAss('ASS152')?3:2):.6};
const bonusChant=()=>loi('ASS152')>0?(renfAss('ASS152')?2:1):0;
/* Raak : la zone bornée ne recule pas. 19 nov. (lot 3) : seulement tant qu'elle est à vous ; une zone perdue (mort, horde, rival) n'est plus bornée */
const borne=id=>!!loi('ASS155')&&S.borne===id&&!!S.own[id];
/* ligne de la Pierre d'éveil : loi de la fiche, ou loi du catalogue (lois.js) pour les autres Assemblées */
function optionsAssemblee(Z){const A=ASSEMBLEES[Z.id];
  if(!A||(typeof poleCatalogue==='function'&&poleCatalogue(Z.id))){const o=typeof optionsLoiCatalogue==='function'?optionsLoiCatalogue(Z):[];   /* loi écrite et loi du catalogue */
    if(Z.id==='ASS155'&&loi('ASS155'))o.push({l:'Borner une zone',ic:'⌖',cls:'p',d:S.borne&&ZB[S.borne]?'bornée : '+ZB[S.borne].info.nom+(S.own[S.borne]?'':' (plus à vous : elle ne tient plus)'):'aucune zone bornée',go:()=>choisirBorne()});
    return o}
  const l=loi(Z.id),o=[];
  const r=l&&renfAss(Z.id),fin=r&&typeof finRenfTxt==='function'?finRenfTxt(Z.id):'';
  o.push({l:l?(r?'Loi en vigueur renforcée':'Loi en vigueur'):'Loi endormie',ic:'⚖',off:true,d:l?A.loi(l)+(r?' ; renforcée : '+A.renf(l)+fin:' · gagnez le Duel d\'arguments pour la renforcer'):'prenez et activez l\'Assemblée, puis montez-la au palier 1 ou plus : '+A.loi(1)});
  if(Z.id==='ASS155'&&l)o.push({l:'Borner une zone',ic:'⌖',cls:'p',d:S.borne&&ZB[S.borne]?'bornée : '+ZB[S.borne].info.nom+(S.own[S.borne]?'':' (plus à vous : elle ne tient plus)'):'aucune zone bornée',go:()=>choisirBorne()});
  return o}
function choisirBorne(){const mes=ZN.filter(Z=>S.own[Z.id]);
  ui('menu',{sur:'Oasis de Raak · Pierre de bornage',t:'Borner une zone',corps:'<p class="petit">La zone bornée ne peut pas perdre de niveau face à une horde ou un rival, tant qu\'elle est à vous. Une seule à la fois.</p>',back:()=>openEveil(ZB.ASS155),
    opts:[...mes.map(Z=>({l:Z.info.nom,ic:S.borne===Z.id?'⌖':'○',d:'palier '+(sgn(S.lv[Z.id])||'0'),go:()=>{S.borne=Z.id;save();toast('Pierre de bornage',Z.info.nom,'Cette zone ne reculera plus face aux hordes.');openEveil(ZB.ASS155)}})),{l:'Retour',ic:'◆',go:()=>openEveil(ZB.ASS155)}]})}
/* La récompense affichée d'une Assemblée est sa loi du monde (elle n'agit pas en combat) */
function recoAssemblees(){for(const id in ASSEMBLEES){const A=ASSEMBLEES[id],Z=ZB[id];if(!Z)continue;
  RECO[id]=`Loi du monde (au palier 1 ou plus) : ${Z.info.pm} ou ${Z.info.pp} selon le pôle. ${A.loi(-1)===A.loi(1)?A.loi(1):A.loi(-1)+' ; '+A.loi(1)}.`}
  if(typeof recoLoisCatalogue==='function')recoLoisCatalogue()}
