/* MozaWorld 2.4 : bandeau d'état (demande du 17 nov. : « un bandeau bien intégré dans l'interface affiche l'état des manas
   et d'autres états, comme le nombre de Citadelles et de Donjons possédés »). Il s'ajoute en tête du cadre d'état, en haut à droite. */
const BTYPES=[['CIT','⛫','Citadelles'],['DON','⬟','Donjons'],['RES','⬢','Ressources'],['ANT','✦','Antres'],['MAR','⚖','Assemblées']];
(function(){const st=document.createElement('style');st.textContent=`
.bandeau{display:grid;gap:calc(var(--u)*.5);padding-bottom:calc(var(--u)*.6);margin-bottom:calc(var(--u)*.2);border-bottom:1px solid rgba(201,164,92,.3)}
.bandeau .ligne{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:calc(var(--u)*.35) calc(var(--u)*.7);align-items:center}
.bandeau .m{display:inline-flex;align-items:center;gap:.3em;font-family:var(--titre);font-size:calc(var(--u)*1.35);color:var(--ivoire);font-variant-numeric:tabular-nums}
.bandeau .m i{display:inline-block;width:.85em;height:.85em;border-radius:50%;background:var(--mc);box-shadow:0 0 .4em var(--mc)}
.bandeau .m.vide{opacity:.4}
.bandeau .d{display:inline-flex;align-items:center;gap:.25em;font-size:calc(var(--u)*1.25);color:var(--ivoire)}
.bandeau .d span{color:#ffd98a;font-size:1.1em}.bandeau .d small{color:var(--sable);font-size:.75em}
.bandeau .dg{font-size:calc(var(--u)*1.1);font-weight:600;padding:.05em .5em;border-radius:3px;border:1px solid currentColor}.bandeau .dg.faible{color:#8fc06f}.bandeau .dg.reel{color:#e8c77f}.bandeau .dg.mortel{color:#ff7a6a}
.bandeau .titre{font-size:calc(var(--u)*.85);letter-spacing:.18em;text-transform:uppercase;color:var(--sable)}
/* 19 nov. : avec les lignes Menaces et Rivaux, la barre peut dépasser 1280 px ; elle passe alors sur deux lignes au lieu d'être coupée */
.hud.etat,.hud.etat .bandeau{flex-wrap:wrap!important;row-gap:calc(var(--u)*.3)}
/* Boucle 3 (20 nov.) : la barre du haut allégée (« elle fait tableau de bord amateur »).
   Interface épurée (par défaut) : une seule ligne, sept éléments au plus — la réserve de mana (une grappe de pastilles),
   les zones à vous, le paquet, les tesselles, le danger de la zone, les blessures, puis la menace la plus proche ou, sans menace,
   les secrets. Les compteurs à 0 (.zero) s'effacent. Le détail complet (territoire, routes, bêtes, rivaux…) reste dans
   l'interface complète (Tab au clavier, RB à la manette), qui garde tout, même les zéros.
   Les chiffres sont en elzévir (oldstyle-nums), dans la serif du titre. */
.hud.etat .bandeau .m,.hud.etat .bandeau .d,.hud.etat .fixe b{font-family:var(--titre);font-variant-numeric:oldstyle-nums proportional-nums;font-feature-settings:"onum" 1,"pnum" 1}
.hud.etat .bandeau .m{font-size:calc(var(--u)*1.12);font-weight:600}
.hud.etat .bandeau .d:not(.cle){font-size:calc(var(--u)*1.08);font-weight:500}
.hud.etat .bandeau .d small,.hud.etat .bandeau .d.cle small{font-family:var(--titre);font-style:italic;letter-spacing:0}
.hud.etat .bandeau .d>span,.hud.etat .bandeau .d.cle>span{font-family:var(--texte)}
body.epure .hud.etat,body.epure .hud.etat .bandeau{flex-wrap:nowrap!important}
body.epure .hud.etat{padding-top:calc(var(--u)*.3);padding-bottom:calc(var(--u)*.3)}
body.epure .hud.etat .bandeau .zero,body.epure .hud.etat .fixe.zero,body.epure .hud.etat .bandeau .m[title^="Mana gris"],body.epure .hud.etat .i-mana>.d,
body.epure .hud.etat .i-terr>:not(.cle),body.epure .hud.etat .i-res>.d:not(.cle):not([title^="Tesselles"]),body.epure .hud.etat .i-res>.pt,
body.epure .hud.etat .bandeau>.ligne,body.epure .hud.etat .i-men .titre,body.epure .hud.etat .i-men>.d~.d,
body.epure .hud.etat .bandeau:has(.i-men) .fixe:has(#h-sec),body.epure .hud.etat .fixe:has(#h-sec) .l:last-child{display:none}
body.epure .hud.etat .i-mana{gap:calc(var(--u)*.55)}
body.epure .hud.etat .i-res{gap:calc(var(--u)*1)}`;document.head.appendChild(st)})();
/* Boucle 1 (19 novembre 2026) : la barre du haut se lit en trois îlots, mana · territoire · ressources.
   Chaque îlot porte une valeur clé plus grande (le compte de zones, le paquet), le reste est en petit ; un seul accent, l'or.
   Les cases fixes de head.html (blessures, secrets) sont rangées dans l'îlot des ressources : main.js les met à jour par leur id. */
let BANDEAU_FIXES=null;
function bandeau(){const box=document.querySelector('.hud.etat');if(!box)return;let b=document.getElementById('bandeau');
  if(!b){b=document.createElement('div');b.id='bandeau';b.className='bandeau';box.prepend(b)}
  if(!BANDEAU_FIXES)BANDEAU_FIXES=['h-vies','h-deck','h-sec'].map(id=>{const e=document.getElementById(id);return e&&e.closest('.hud.etat>div')}).filter(Boolean).map(d=>(d.classList.add('fixe'),d));
  const mana=`<span class="m" title="Mana gris, sans limite"><i style="--mc:#8d8a86"></i>∞</span>`+MTYPES.map(t=>`<span class="m${resN(t)?'':' vide'}" title="${t}"><i style="--mc:${MCOL[t]}"></i>${resN(t)}</span>`).join('');
  const dom=BTYPES.map(([m,ic,nom])=>{const tot=ZN.filter(Z=>(Z.mod||Z.id)===m),own=tot.filter(Z=>S.own[Z.id]).length;
    return`<span class="d petit" title="${nom}"><span>${ic}</span>${own}<small>/${tot.length}</small></span>`}).join('');
  const dfe=typeof bandeauDomaines==='function'?(suivreDomaines(),bandeauDomaines()):'';   /* domaines fermés (domaines.js) */
  const prod=typeof prodTexte==='function'&&prodRessource()?`<span class="d" title="Production des Ressources"><small>+ ${prodTexte()} par cycle</small></span>`:'';
  /* territoire : zones à vous, et le plus grand bloc de zones voisines d'un seul tenant */
  const ids=ZN.filter(Z=>S.own[Z.id]).map(Z=>Z.id),vu=new Set();let bloc=0;
  if(typeof VOISINES!=='undefined')for(const id of ids){if(vu.has(id))continue;let n=0;const pile=[id];vu.add(id);
    while(pile.length){const z=pile.pop();n++;for(const v of VOISINES[z]||[])if(S.own[v]&&!vu.has(v)){vu.add(v);pile.push(v)}}bloc=Math.max(bloc,n)}
  const niv=ZN.reduce((a,Z)=>a+(S.own[Z.id]?Math.abs(S.lv[Z.id]||0):0),0);
  const dep=typeof ZONES_DEP!=='undefined'?`<span class="d" title="Territoire de départ pris (les zones autour ne cèdent qu'après)"><span>⌂</span>${departPris()}<small>/${ZONES_DEP.length}</small></span>`:'';
  const terr=`<span class="d cle" title="Zones à vous"><span>⚑</span>${ids.length}<small>/${ZN.length}</small></span>${dep}<span class="d" title="Plus grand territoire d'un seul tenant"><span>▦</span>${bloc}</span><span class="d" title="Niveaux de vos zones"><span>▲</span>${niv}</span><i class="pt"></i>${dom}${dfe}`;
  const res=`<span class="d cle" title="Paquet de combat"><span>▤</span>${S.deck.length}<small> cartes</small></span>${typeof bandeauTess==='function'?bandeauTess():''}${royaume()}`;
  const men=(typeof mondeIci==='function'&&!mondeIci())?['<span class="d" title="D\'ici le 28 nov., hordes, maisons rivales et siège final ne jouent que dans la région de départ : ils attendent votre retour." style="color:#c8c0a8">⏸ en attente de votre retour</span>']:(typeof menacesSiege==='function'?menacesSiege():[]).concat(typeof menacesHordes==='function'?menacesHordes():[]);
  /* boucle 1 + fils domaines, hordes, rivaux (19 nov.) : trois îlots, puis menaces et rivaux s'il y en a */
  b.innerHTML=`<div class="ilot i-mana">${mana}${prod}</div><i class="sep"></i><div class="ilot i-terr">${terr}</div><i class="sep"></i><div class="ilot i-res">${res}</div>`+
    (men.length?`<i class="sep"></i><div class="ilot i-men"><span class="titre">Menaces</span>${men.join('')}</div>`:'')+(typeof ligneRivaux==='function'?ligneRivaux():'');
  const ir=b.querySelector('.i-res');for(const d of BANDEAU_FIXES)ir.appendChild(d);
  /* boucle 3 (20 nov.) : un compteur dont la valeur (le premier nombre) vaut 0 est marqué .zero ; la barre épurée le masque.
     Les menaces (comptes à rebours) et les valeurs clés (zones, paquet) ne sont jamais masquées. */
  for(const e of b.querySelectorAll('.m,.d')){if(e.classList.contains('cle')||e.closest('.i-men'))continue;
    const n=e.textContent.match(/\d+/);e.classList.toggle('zero',!!n&&+n[0]===0)}
  for(const f of BANDEAU_FIXES){const v=f.querySelector('b');if(v)f.classList.toggle('zero',v.textContent.trim()==='0')}}
/* 17 nov. (« affichons ces chiffres dans la barre d'état ») : la boucle de jeu en chiffres — cartes de zone éveillées dans le paquet,
   bêtes, bonus greffés, routes — et le danger estimé de la zone où l'on se trouve. */
function puissancePaquet(){return(S.deck||[]).filter(k=>k.indexOf('#')>0&&(typeof eveillee!=='function'||eveillee(k))||CK[k]&&CK[k].z&&k.indexOf('#')<0).length}
function dangerZone(Z){if(!Z)return null;const L=Math.abs(S.lv[Z.id]||0),p=puissancePaquet(),e=L-p/2;
  return e<=0?['faible','Faible']:e<=1.5?['reel','Réel']:['mortel','Mortel']}
function royaume(){const own=Z=>S.own[Z.id]&&S.act[Z.id];
  const betes=ZN.filter(Z=>(Z.mod||Z.id)==='ANT'&&own(Z)).length;
  let routes=0,bonus=0;if(typeof etatRoutes==='function'){etatRoutes();for(const r in S.routes){routes+=S.routes[r].length;if(Math.abs(S.lv[r]||0)>=3&&S.atout[r]!==undefined)bonus+=S.routes[r].length}}
  const dz=typeof curZ!=='undefined'&&curZ?dangerZone(curZ):null;
  return`<span class="d petit" title="Cartes de zone éveillées dans le paquet"><span>❖</span>${puissancePaquet()}</span><span class="d petit" title="Antres actifs : vos bêtes"><span>✦</span>${betes}</span><span class="d petit" title="Bonus greffés par les routes"><span>⬢</span>${bonus}</span><span class="d petit" title="Routes ouvertes"><span>═</span>${routes}</span>`+
    (dz?`<i class="pt"></i><span class="dg ${dz[0]}" title="Danger dans cette zone">${dz[1]}</span>`:'')}
