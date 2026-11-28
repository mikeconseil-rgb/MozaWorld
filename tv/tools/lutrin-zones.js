/* Génère tv/lutrin/zones.js : nom, type, biome et mana de chaque zone (CARTE_PLUS), pour le lutrin. Usage : node tv/tools/lutrin-zones.js */
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'../src/carte.js'),'utf8');
const C=JSON.parse(src.match(/const CARTE_PLUS=(\[.*?\]);\n/s)[1]);
const Z={CIT:['Berestograd','CIT','Cité fortifiée','Glace'],ANT:['L\'Antre du cœur','ANT','Forêt','Eau'],RES:['La Ressource du cœur','RES','Plaine','Vent'],
  MAR:['L\'Assemblée du cœur','MAR','Cité','Glace'],DON:['Le Donjon du cœur','DON','Montagne','Feu']};
for(const d of C)Z[d.id]=[d.nom,d.mod,d.biome,d.mana];
fs.writeFileSync(path.join(__dirname,'../lutrin/zones.js'),'/* Généré par tv/tools/lutrin-zones.js : les fiches des zones (nom, type, biome, mana). Ne pas modifier à la main. */\nwindow.LUTRIN_ZONES='+JSON.stringify(Z)+';\n');
console.log(Object.keys(Z).length,'zones');
