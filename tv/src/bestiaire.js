/* MozaWorld : un bestiaire par zone (22 nov. 2026).
   Retour de l'utilisateur : « les affiches des bêtes ne représentent pas le lore de la zone ». Avant, les 47 nouvelles zones
   prêtaient les trois créatures de leur type (un col persan se battait contre un « Pillard des sapins »). Chaque zone a
   maintenant trois créatures tirées de son histoire, avec leur portrait peint (img/bestiaire/<ZONE>-<i>.webp, outils :
   tools/images-cartes/bestiaire.json et generer-bestiaire.py). Les forces et les gestes restent ceux du type (même rang :
   0 et 1 les créatures, 2 le chef) ; seuls le nom et le portrait changent. Les cinq zones d'origine gardent leurs noms. */
const BESTIAIRE={"CIT":["Pillard des sapins","Archère d'écorce","Voïvode sans mémoire"],"DON":["Gardien d'édit","Larve de lave","Scribe-tyran"],"RES":["Glaneur hagard","Anguille des canaux","Mère des Gerbes"],"ANT":["Luciole ardente","Crabe-racine","Reine-luciole"],"MAR":["Colporteur givré","Mâtin de cloche","Prévôt de la Foire"],"DON045":["Gardien de Kobor","Glouton des mélèzes","Chamane-tyran de Kobor"],"DON024":["Gardien des rames","Crabe des glaces","Jarl des Rames"],"ASS152":["Tribun du canyon","Lézard des corniches","Doyen de Fjorhel"]};
(function(){
  /* les zones « plus » partageaient le tableau MON de leur type : chacune reçoit le sien, renommé */
  if(typeof MON!=='undefined')for(const id in BESTIAIRE){const zw=typeof ZWB!=='undefined'&&ZWB[id],base=MON[id]||(zw&&MON[zw.mod]);if(!base)continue;
    MON[id]=base.map((m,i)=>Object.assign({},m,{nom:BESTIAIRE[id][i]||m.nom}))}
})();
/* portrait du bestiaire d'une unité ennemie : zone + rang, retrouvé par son nom */
function bestiaireImg(u){if(!u||!u.z)return null;const L=BESTIAIRE[u.z];if(!L)return null;const i=L.indexOf(u.nom);return i<0?null:u.z+'-'+i}
