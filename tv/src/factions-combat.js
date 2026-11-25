/* MozaWorld 2.47 : gameplay de cartes des factions, dans l'Arène d'abord (24 nov. au soir, Toronto : « 2,3 et 4 », puis « A »).
   Actif seulement quand window.TAC_ON est vrai (Arène en mosaïque, Xbox et Pixel) : le jeu principal ne change pas avant son verdict.
   Chaque carte a la faction de son mana (celui de sa zone), chaque bête celle de la carte qui l'invoque, chaque ennemi celle de la zone combattue.
   2. Avantage : un coup contre la faction OPPOSÉE fait +50 % (arrondi au-dessus) ; contre sa propre faction, −25 % (au moins 1).
      Alliance : la première fois dans un tour qu'on joue une carte d'une faction alliée (voisine sur la roue) d'une carte déjà jouée ce tour,
      on pioche une carte.
   3. Terrain : chaque tuile du champ garde la faction de sa zone du monde. Une créature sur une tuile de sa faction gagne +1 d'attaque,
      sur une tuile de la faction opposée elle perd 1.
   Tous ces chiffres sont PROVISOIRES (à régler après ses tests). Voir tv/src/factions.js pour la roue et les factions. */
(function(){
const actif=()=>!!(window.TAC_ON&&CB);
const facZone=()=>{const C=CB;if(!C||!C.Z)return null;const m=(typeof ZMANA!=='undefined'&&ZMANA[C.Z.id])||(C.Z.d&&C.Z.d.mana);return FACTIONS[m]?m:null};
function facU(u){if(!u||u.hero||u.garde)return null;if(u.fac)return u.fac;if(CB&&CB.foes.indexOf(u)>=0)return facZone();return null}
window.facU=facU;
/* 3. terrain : lu par tacBonus (tactique.js) */
window.facTerrain=function(u){if(!actif()||typeof TAC==='undefined'||!TAC||!u||u.ti==null)return 0;const t=TAC.tiles[u.ti],f=facU(u);if(!t||!f)return 0;
  const tf=factionDe(t.id);if(!tf)return 0;const l=factionLien(f,tf.k);return l==='meme'?1:l==='oppose'?-1:0};
/* 2. avantage de faction sur chaque coup */
const fr0=frappe;frappe=function(u,n,src){if(!actif()||!u||u.pv<=0||!(n>0))return fr0.apply(this,arguments);
  const fa=src?facU(src):(CB.enCarte?CB.facCarte:null),fd=facU(u);
  if(fa&&fd){const l=factionLien(fa,fd);
    if(l==='oppose'){const m=Math.ceil(n*1.5);if(m>n){pop(u,FACTIONS[fa].nom.replace(/^(Les |La |Le |L')/,'')+' ×1,5','deg');n=m}}
    else if(l==='meme'){n=Math.max(1,Math.round(n*.75))}}
  return fr0.call(this,u,n,src)};
/* la carte jouée donne sa faction à ses effets et à ses bêtes ; alliance = une carte piochée, une fois par tour */
const jo0=jouer;jouer=function(i,t){const C=CB;if(!actif())return jo0.apply(this,arguments);const k=C.main[i],f=k&&mtype(k);
  if(f&&FACTIONS[f]){C.facJ=C.facJ||[];const al=!C.facCombo&&C.facJ.find(g=>factionLien(g,f)==='allie');C.facJ.push(f);
    if(al){C.facCombo=1;attendre(.5,()=>{if(!CB)return;journal(`Alliance de ${FACTIONS[al].nom} et de ${FACTIONS[f].nom} : vous piochez une carte.`);pioche(1);dessinerMain()})}}
  C.facCarte=f&&FACTIONS[f]?f:null;try{return jo0.apply(this,arguments)}finally{if(CB)CB.facCarte=null}};
const iv0=invoquer;invoquer=function(b){if(actif()&&b&&!b.fac&&CB.facCarte)b.fac=CB.facCarte;const r=iv0.apply(this,arguments);if(actif())marquer(b);return r};
const dt0=debutTour;debutTour=function(){if(actif()){CB.facJ=[];CB.facCombo=0}return dt0.apply(this,arguments)};
/* affichage : liseré de faction sur chaque tuile, pastille sur chaque unité, ligne d'aide */
function marquer(u){const f=facU(u);if(!u||!u.el||!f||u.el.querySelector('.facb'))return;const s=document.createElement('i');s.className='facb';s.style.background=FACTIONS[f].col;s.title=FACTIONS[f].nom;u.el.appendChild(s)}
const sc0=startCombat;startCombat=function(Z,k){const r=sc0.apply(this,arguments);if(actif()&&typeof TAC!=='undefined'&&TAC){
  const fz=facZone();for(const m of CB.foes)if(!m.fac&&fz)m.fac=fz;
  document.querySelectorAll('#tac g.tt').forEach(g=>{const t=TAC.tiles[+g.dataset.i],f=t&&!t.bloc&&factionDe(t.id);if(f)g.style.setProperty('--fc',f.col)});
  for(const u of[...CB.allies,...CB.foes])marquer(u);
  if(fz)journal(`Ennemis de ${FACTIONS[fz].nom}. Opposée : ${FACTIONS[FACTION_ROUE[(FACTION_ROUE.indexOf(fz)+3)%6]].nom} (+50 %).`)}return r};
const tp0=tacPlacer;tacPlacer=function(){const r=tp0.apply(this,arguments);if(!actif()||!TAC)return r;const lg=$('tac-leg');
  if(lg&&CB.tb){const t=TAC.tiles[TAC.cur],f=t&&!t.bloc&&factionDe(t.id);if(f)lg.textContent+=` · ${f.nom} : +1 à ses créatures, −1 à l'opposée`}return r};
const st=document.createElement('style');st.textContent=`
#tac .pi{stroke:var(--fc,rgba(230,214,176,.28));stroke-dasharray:none;stroke-width:7;stroke-opacity:.75}
#combat.tac #tac .u .facb{position:absolute;right:12%;top:2%;width:calc(var(--tz,60px)*.2);height:calc(var(--tz,60px)*.2);border-radius:50%;border:2px solid #0b0a0d;pointer-events:none}`;
document.head.appendChild(st);
})();
