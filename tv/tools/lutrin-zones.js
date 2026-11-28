/* Génère tv/lutrin/zones.js : les fiches des zones pour le lutrin. Usage : node tv/tools/lutrin-zones.js
   Champs : [nom, type, biome, mana (faction du pôle +), faction du pôle −, mot du pôle +, mot du pôle −].
   28 nov. (utilisateur) : « Chaque zone doit avoir une faction pour son plus et une pour son moins », puis, pour le moins :
   « Je veux une faction opposée mais qui tire avec le background ». Le pôle + garde la faction du mana (24 nov.). Pour le pôle −,
   on prend une faction qui n'est ni la sienne ni une alliée (l'opposée sur la roue, ou l'une des deux à deux crans), celle dont les
   mots ressortent le plus dans le fond de la zone : le mot de son pôle −, ses paliers négatifs, son récit, son biome. À égalité ou sans
   indice, l'opposée stricte (Feu-Glace, Pierre-Eau, Vent-Sève). */
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'../src/carte.js'),'utf8');
const C=JSON.parse(src.match(/const CARTE_PLUS=(\[.*?\]);\n/s)[1]);
const fsrc=fs.readFileSync(path.join(__dirname,'../src/zones-fiches.js'),'utf8');
const FICHES=JSON.parse(fsrc.match(/const FICHES=(\{.*?\});?\s*\n/s)[1]);
const ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'];
const sans=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
/* racines de mots, sans accents */
const MOTS={
  Feu:['feu','braise','brul','flamm','forge','volcan','cendre','lave','incendi','soleil','sang','guerr','conqu','fer','fournaise','torche','ardent','chaos','colere','furie','pillard','rouge','sec','desert'],
  Pierre:['pierre','roc','montagne','mine','loi','cite','mur','rempart','socle','canyon','caverne','cristal','ordre','batis','legist','tribunal','sceau','registre','granit','statue','tour','pilier','dogme','tyrann','fige'],
  Vent:['vent','ciel','nomade','steppe','plaine','plume','tempete','oiseau','falaise','eclaireur','errance','liberte','voile','souffle','nuage','route','caravane','fuite','exil','envol','sommet'],
  Glace:['glace','neige','givre','froid','hiver','serment','toundra','gel','blanc','silence','deuil','mort','tombe','veille','gardien','fidel','immobile','solitude','pale','os'],
  Eau:['eau','mer','maree','riviere','lac','pluie','marais','port','peche','sel','marchand','commerce','navire','fleuve','source','noy','vague','or','dette','richesse','abondance','troc','pont'],
  Seve:['foret','racine','arbre','jungle','bete','seve','fleur','herbe','mousse','elev','troupeau','chasse','sauvage','pourri','croiss','champ','recolte','grain','vigne','loup','nature','proli','peste']};
const KEY={Feu:'Feu',Pierre:'Pierre',Vent:'Vent',Glace:'Glace',Eau:'Eau','Sève':'Seve'};
function compte(txt,f){const t=' '+sans(txt)+' ';let n=0;for(const m of MOTS[KEY[f]]){const r=new RegExp('[^a-z]'+m,'g');n+=(t.match(r)||[]).length}return n}
function moins(id,d){const mana=d.mana,i=ROUE.indexOf(mana);if(i<0)return null;const opp=ROUE[(i+3)%6];
  const F=FICHES[id]||{},pal=F.pal||[];
  const cands=[opp,ROUE[(i+2)%6],ROUE[(i+4)%6]];
  let best=opp,bs=-1;for(const f of cands){const s=compte(F.pm||d.pm,f)*4+compte((pal[0]||'')+' '+(pal[1]||''),f)*2+compte(F.recit,f)+compte(d.biome,f)+(f===opp?1.5:0);
    if(s>bs){bs=s;best=f}}return best}
const Z={CIT:['Berestograd','CIT','Cité fortifiée','Glace','Feu','',''],ANT:['L\'Antre du cœur','ANT','Forêt','Eau','Pierre','',''],RES:['La Ressource du cœur','RES','Plaine','Vent','Sève','',''],
  MAR:['L\'Assemblée du cœur','MAR','Cité','Glace','Feu','',''],DON:['Le Donjon du cœur','DON','Montagne','Feu','Glace','','']};
const stat={};
for(const d of C){const F=FICHES[d.id]||{},m=moins(d.id,d);Z[d.id]=[d.nom,d.mod,d.biome,d.mana,m,F.pp||d.pp||'',F.pm||d.pm||''];
  const i=ROUE.indexOf(d.mana);if(m)stat[m===ROUE[(i+3)%6]?'opposee':'deux crans']=(stat[m===ROUE[(i+3)%6]?'opposee':'deux crans']||0)+1}
fs.writeFileSync(path.join(__dirname,'../lutrin/zones.js'),'/* Généré par tv/tools/lutrin-zones.js : les fiches des zones (nom, type, biome, faction du pôle +, faction du pôle −, mots des pôles + et −). Ne pas modifier à la main. */\nwindow.LUTRIN_ZONES='+JSON.stringify(Z)+';\n');
console.log(Object.keys(Z).length,'zones',stat);
