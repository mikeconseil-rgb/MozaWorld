/* Le Duel d'arguments (17 nov., choix 2 de l'utilisateur : « un petit paquet politique à part »).
   L'épreuve d'une Assemblée n'est plus le Chantier : c'est un duel de cartes contre le Conseil en place, joué avec le moteur de combat
   mais avec un PAQUET POLITIQUE séparé du paquet de combat. Les PV des orateurs sont leur conviction ; ceux du héros, son crédit.
   Le paquet politique : 5 cartes communes à tous, plus une carte de voix par type de tuile que vous tenez (au plus 5) :
   votre royaume façonne votre poids politique. Avant le duel, les tuiles voisines votent : les vôtres pour vous, pondérées par type ;
   les sauvages votent pour le pôle qui leur ressemble et contre l'autre. Chaque voix nette retire (ou ajoute) 3 de conviction au Conseil.
   Perdre le duel : les menaces du Conseil vous blessent (une blessure, comme une épreuve ratée). Règles : design/REGLES.md. */
const estAssemblee=Z=>!!Z&&(Z.mod||Z.id)==='MAR';
const kindDe=Z=>(Z.mod||Z.id);
/* poids des voix par type de tuile (tableau des voix pondérées, fiche du 16 nov., moyenne des actions) */
const POIDS_VOIX={MAR:3,CIT:2,RES:2,ANT:1,DON:1};
const NOM_VOIX={MAR:'Assemblée',CIT:'Citadelle',RES:'Ressource',ANT:'Antre',DON:'Donjon'};
const PV_COMMUNES=['P:argument','P:refutation','P:promesse','P:menace','P:rallier'];
const PV_VOIX={CIT:'P:milice',DON:'P:edit',ANT:'P:clameur',RES:'P:greniers',MAR:'P:motion'};
const tenues=k=>ZN.filter(Z=>kindDe(Z)===k&&S.own[Z.id]&&S.act[Z.id]);
/* les cartes politiques : payées en mana gris (pas de zone), elles ne vont jamais dans le paquet de combat */
const cartePol=(nom,cout,cible,txt,jeu)=>({nom:()=>nom,cout,cible,pol:1,txt,jeu,amb:()=>''});
Object.assign(CK,{
  'P:argument':cartePol('Argument',1,1,()=>'6 de conviction en moins à un orateur. Contre un orateur qui hésite : 10.',(k,t)=>frappe(t,t&&t.hesT===CB.tour?10:6)),
  'P:refutation':cartePol('Réfutation',1,0,()=>'6 de garde : la réfutation se dresse devant vous et encaisse les attaques du Conseil.',()=>leverGarde(6)),
  'P:promesse':cartePol('Promesse',0,1,()=>'Un orateur hésite et ne parle pas ce tour. Il vous en coûte 2 de crédit.',(k,t)=>{hesite(t);frappe(CB.hero,2,{nom:'promesse'})}),
  'P:menace':cartePol('Menace',2,1,()=>'12 de conviction en moins à un orateur. Les autres durcissent le ton : +1 d\'attaque.',(k,t)=>{frappe(t,12);for(const m of vivants(CB.foes))if(m!==t){m.atk++;pop(m,'+1','deg')}}),
  'P:rallier':cartePol('Rallier',1,0,()=>'Un partisan monte à la tribune : 7 PV, il interpelle le Conseil (2 par tour).',()=>invoquer({nom:'Partisan',pv:7,max:7,atk:2,g:0,bete:1})),
  'P:milice':cartePol('Milice au prétoire',1,0,()=>`Voix de vos Citadelles : un bloqueur de ${8+2*tenues('CIT').length} PV garde la tribune.`,()=>{const n=8+2*tenues('CIT').length;invoquer({nom:'Milice',pv:n,max:n,atk:0,g:0,bete:1,mur:1})}),
  'P:edit':cartePol('Édit scellé',2,1,()=>`Voix de vos Donjons : ${8+3*tenues('DON').length} de conviction en moins, à travers la garde.`,(k,t)=>{if(t){t.g=0;frappe(t,8+3*tenues('DON').length)}}),
  'P:clameur':cartePol('Clameur de la meute',1,0,()=>`Voix de vos Antres : ${2+tenues('ANT').length} de conviction en moins à chaque orateur.`,()=>{for(const m of vivants(CB.foes))frappe(m,2+tenues('ANT').length)}),
  'P:greniers':cartePol('Greniers ouverts',0,0,()=>'Voix de vos Ressources : piochez 2 cartes.',()=>pioche(2)),
  'P:motion':cartePol('Motion d\'ordre',0,0,()=>'Voix de vos Assemblées : +1 de capacité ce tour, piochez 1.',()=>{CB.mana++;CB.capT++;pioche(1)})});
if(typeof ART!=='undefined')for(const k of Object.keys(CK))if(k.startsWith('P:'))ART[k]=Object.assign({},ART.coup,{sorte:PV_COMMUNES.indexOf(k)>=0?'Politique':'Voix du royaume'});
function paquetPolitique(){return PV_COMMUNES.concat(Object.keys(PV_VOIX).filter(t=>tenues(t).length).map(t=>PV_VOIX[t]))}
/* le vote : voisines de l'Assemblée */
function voixDuel(Z,target){const pour=[],contre=[];let v=0;
  for(const id of (VOISINES[Z.id]||[])){const B=ZB[id];if(!B)continue;const k=kindDe(B),w=POIDS_VOIX[k]||1;
    if(S.own[id]&&S.act[id]){v+=w;pour.push(B.info.nom+' +'+w)}
    else{const l=S.lv[id]||0;if(!l)continue;if(Math.sign(l)===Math.sign(target)){v+=1;pour.push(B.info.nom+' (sauvage) +1')}else{v-=1;contre.push(B.info.nom+' (sauvage) −1')}}}
  return{v,pour,contre}}
/* le Conseil : deux orateurs et le président, plus coriaces à mesure que la loi visée est lourde */
function conseil(Z,eff){const col=['Orateur des greniers','Orateure du port'],mvO=['a','c','f','g','a','h'],mvP=['a','s','c','f','t'];
  const o=col.map((nom,i)=>{const pv=10+4*eff;return{nom,pv,max:pv,atk:2+eff,g:0,mv:mvO,mi:i*2,z:Z.id,voie:i}});
  const pv=18+7*eff;o.push({nom:'Président du conseil',pv,max:pv,atk:3+eff,g:0,mv:mvP,mi:0,chef:1,z:Z.id});return o}
let DUEL=null;
function startDuel(Z,target,eff){DUEL={Z,target,eff,vote:voixDuel(Z,target)};closeUI();save();etatHud();startCombat(Z,'duel')}
/* appelé par startCombat : applique le vote une fois le Conseil en place */
function ouvrirDuel(){const d=DUEL,vt=d.vote,ch=CB.foes.find(m=>m.chef)||CB.foes[0];
  if(vt.v>0){const n=3*vt.v;for(const m of CB.foes){const x=Math.min(m.pv-1,Math.ceil(n/CB.foes.length));m.pv-=x}}
  else if(vt.v<0){ch.pv+=3*-vt.v;ch.max=Math.max(ch.max,ch.pv)}
  return`Duel d'arguments pour le palier ${sgn(d.target)}. Vote des voisines : ${vt.v>=0?'+':''}${vt.v} voix${vt.pour.length?' (pour : '+vt.pour.join(', ')+')':''}${vt.contre.length?' (contre : '+vt.contre.join(', ')+')':''}. Paquet politique : ${CB.pile.length} cartes.`}
function finDuel(ok){const d=DUEL;DUEL=null;E={Z:d.Z,target:d.target,eff:d.eff};endEpreuve(ok);if(ok&&typeof loiDuelGagne==='function')loiDuelGagne(d.Z)}   /* lois.js : loi en vigueur renforcée */
