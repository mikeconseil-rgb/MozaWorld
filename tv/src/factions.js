/* MozaWorld 2.46 : les factions (25 nov., demande de l'utilisateur : « assigner à chaque zone une faction, alignée sur les manas,
   plus une » ; puis « une interface sur la carte pour voir les factions, chaque zone avec la couleur et le sigle de la faction »).
   Noms, couleurs et sigles acceptés le 24 nov. au soir (« 1 ok ») ; voisinages proposés, PROVISOIRES.
   - Six factions de mana : une zone appartient à la faction de son mana (champ mana de la carte, 925 zones, environ 150 par mana).
   - Une septième, l'Ombre : le monde sauvage. Elle tient les zones d'ombre détruites du générateur de mondes (d.ombre ou mod 'OMB').
   - Décision de l'utilisateur (24 nov. au soir, Toronto : « 1 ok. 2 parfait 3.a 4 a ») : faction FIXE, d'après le mana de la zone
     (pas de bascule à l'Ombre au palier 7) ; affichage sur la carte d'abord ; « on va ajouter tout un gameplay autour » (après le 28).
   - Voisinages (pour le générateur de mondes) : roue Feu, Pierre, Vent, Glace, Eau, Sève. Même faction : attirance forte ;
     voisines sur la roue : alliées ; opposées sur la roue : JAMAIS en contact (Feu-Glace, Pierre-Eau, Vent-Sève) ; l'Ombre touche tout.
   Affichage seulement : aucune règle de jeu ne lit la faction (gel des nouveaux systèmes jusqu'au 28 nov.). */
const FACTIONS={
  Feu:   {k:'Feu',   nom:'Les Braisiers',          mana:'Feu',   col:'#e0643a',dev:'Conquérants et forgerons'},
  Pierre:{k:'Pierre',nom:'L\'Ordre du Socle',      mana:'Pierre',col:'#b9a27a',dev:'Bâtisseurs et légistes'},
  Vent:  {k:'Vent',  nom:'La Compagnie des Vents', mana:'Vent',  col:'#cdbff0',dev:'Nomades et éclaireurs'},
  Glace: {k:'Glace', nom:'La Veille Blanche',      mana:'Glace', col:'#9fd3f2',dev:'Gardiens des serments'},
  Eau:   {k:'Eau',   nom:'La Ligue des Marées',    mana:'Eau',   col:'#3a96c4',dev:'Marchands navigateurs'},
  Sève:  {k:'Sève',  nom:'Le Cercle des Racines',  mana:'Sève',  col:'#6cb54c',dev:'Éleveurs de bêtes'},
  Ombre: {k:'Ombre', nom:'L\'Ombre',               mana:null,    col:'#8a5aa8',dev:'Le monde sauvage'}};
const FACTION_ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'];
/* mana des cinq zones d'origine (mêmes valeurs que monde-anime.js) */
const FACTION_MANA_ORIG={CIT:'Glace',DON:'Feu',ANT:'Eau',MAR:'Glace',RES:'Vent'};
function factionMana(Z){const d=Z&&Z.d;if(d&&d.mana&&FACTIONS[d.mana])return d.mana;return FACTION_MANA_ORIG[Z&&Z.id]||'Pierre'}
function factionDe(Zid){const Z=typeof Zid==='string'?((typeof ZWB!=='undefined'&&ZWB[Zid])||(typeof ZB!=='undefined'&&ZB[Zid])):Zid;if(!Z)return null;
  const d=Z.d||{},mod=Z.mod||d.mod||Z.id;
  if(d.ombre||mod==='OMB')return FACTIONS.Ombre;
  return FACTIONS[factionMana(Z)]}
/* lien entre deux factions : 'meme', 'allie', 'neutre', 'oppose' (jamais en contact), ou 'ombre' */
function factionLien(a,b){a=a&&a.k||a;b=b&&b.k||b;if(a===b)return'meme';if(a==='Ombre'||b==='Ombre')return'ombre';
  const i=FACTION_ROUE.indexOf(a),j=FACTION_ROUE.indexOf(b),d=Math.abs(i-j)%6,e=Math.min(d,6-d);return e===1?'allie':e===3?'oppose':'neutre'}
const factionsOpposees=(a,b)=>factionLien(a,b)==='oppose';
/* sigle de faction, dessiné au trait (pas de police : les symboles manquent sur la Xbox) */
function sigleFaction(c,k,x,y,r,fill,stroke){c.save();c.translate(x,y);c.lineJoin='round';c.lineCap='round';c.beginPath();
  if(k==='Feu'){c.moveTo(0,-r);c.bezierCurveTo(r*.9,-r*.2,r*.75,r*.85,0,r);c.bezierCurveTo(-r*.75,r*.85,-r*.9,-r*.2,0,-r);c.moveTo(0,-r*.1);c.bezierCurveTo(r*.4,r*.25,r*.3,r*.7,0,r*.7);c.bezierCurveTo(-r*.3,r*.7,-r*.4,r*.25,0,-r*.1)}
  else if(k==='Pierre'){c.moveTo(-r,r*.75);c.lineTo(-r*.25,-r*.7);c.lineTo(r*.15,0);c.lineTo(r*.45,-r*.35);c.lineTo(r,r*.75);c.closePath()}
  else if(k==='Vent'){for(let i=0;i<3;i++){const yy=(i-1)*r*.6,l=r*(i===1?1:.75);c.moveTo(-r,yy);c.lineTo(l*.5,yy);c.arc(l*.5,yy-r*.22,r*.22,PI/2,-PI*.9,true)}}
  else if(k==='Glace'){for(let i=0;i<6;i++){const a=i*PI/3,ca=Math.cos(a),sa=Math.sin(a);c.moveTo(0,0);c.lineTo(ca*r,sa*r);
    const bx=ca*r*.55,by=sa*r*.55;c.moveTo(bx,by);c.lineTo(bx+Math.cos(a+.7)*r*.3,by+Math.sin(a+.7)*r*.3);c.moveTo(bx,by);c.lineTo(bx+Math.cos(a-.7)*r*.3,by+Math.sin(a-.7)*r*.3)}}
  else if(k==='Eau'){c.moveTo(0,-r);c.bezierCurveTo(r*.25,-r*.4,r*.8,0,r*.8,r*.35);c.arc(0,r*.35,r*.8,0,PI);c.bezierCurveTo(-r*.8,0,-r*.25,-r*.4,0,-r);c.closePath()}
  else if(k==='Sève'){c.moveTo(0,-r);c.quadraticCurveTo(r*1.05,0,0,r);c.quadraticCurveTo(-r*1.05,0,0,-r);c.moveTo(0,-r*.7);c.lineTo(0,r*1.05)}
  else{c.arc(0,0,r*.9,0,TAU);c.moveTo(r*.85,-r*.1);c.arc(r*.3,-r*.1,r*.55,0,TAU,true)}   /* Ombre : éclipse */
  const trait=k==='Glace'||k==='Vent';
  if(stroke){c.lineWidth=Math.max(1.5,r*(trait?.5:.38));c.strokeStyle=stroke;c.stroke()}
  if(trait){c.lineWidth=Math.max(1,r*.2);c.strokeStyle=fill;c.stroke()}else{c.fillStyle=fill;c.fill('evenodd')}
  c.restore()}
window.FACTIONS=FACTIONS;window.factionDe=factionDe;window.factionLien=factionLien;window.factionsOpposees=factionsOpposees;window.sigleFaction=sigleFaction;
if(window.MZ)Object.assign(window.MZ,{factionDe:id=>{const f=factionDe(id);return f&&f.k},factionLien});
