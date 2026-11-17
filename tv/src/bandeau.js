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
.bandeau .titre{font-size:calc(var(--u)*.85);letter-spacing:.18em;text-transform:uppercase;color:var(--sable)}`;document.head.appendChild(st)})();
function bandeau(){const box=document.querySelector('.hud.etat');if(!box)return;let b=document.getElementById('bandeau');
  if(!b){b=document.createElement('div');b.id='bandeau';b.className='bandeau';box.prepend(b)}
  const mana=`<span class="m"><i style="--mc:#8d8a86"></i>∞</span>`+MTYPES.map(t=>`<span class="m${resN(t)?'':' vide'}" title="${t}"><i style="--mc:${MCOL[t]}"></i>${resN(t)}</span>`).join('');
  const dom=BTYPES.map(([m,ic,nom])=>{const tot=ZN.filter(Z=>(Z.mod||Z.id)===m),own=tot.filter(Z=>S.own[Z.id]).length;
    return`<span class="d" title="${nom}"><span>${ic}</span>${own}<small>/${tot.length}</small></span>`}).join('');
  const prod=typeof prodTexte==='function'&&prodRessource()?`<span class="titre">+ ${prodTexte()} par cycle</span>`:'';
  b.innerHTML=`<div class="ligne"><span class="titre">Mana</span>${mana}</div>${prod?`<div class="ligne">${prod}</div>`:''}<div class="ligne"><span class="titre">Domaines</span>${dom}</div>${royaume()}`}
/* 17 nov. (« affichons ces chiffres dans la barre d'état ») : la boucle de jeu en chiffres — cartes de zone éveillées dans le paquet,
   bêtes, bonus greffés, routes — et le danger estimé de la zone où l'on se trouve. */
function puissancePaquet(){return(S.deck||[]).filter(k=>k.indexOf('#')>0&&(typeof eveillee!=='function'||eveillee(k))||CK[k]&&CK[k].z&&k.indexOf('#')<0).length}
function dangerZone(Z){if(!Z)return null;const L=Math.abs(S.lv[Z.id]||0),p=puissancePaquet(),e=L-p/2;
  return e<=0?['faible','Faible']:e<=1.5?['reel','Réel']:['mortel','Mortel']}
function royaume(){const own=Z=>S.own[Z.id]&&S.act[Z.id];
  const betes=ZN.filter(Z=>(Z.mod||Z.id)==='ANT'&&own(Z)).length;
  let routes=0,bonus=0;if(typeof etatRoutes==='function'){etatRoutes();for(const r in S.routes){routes+=S.routes[r].length;if(Math.abs(S.lv[r]||0)>=3&&S.atout[r]!==undefined)bonus+=S.routes[r].length}}
  const dz=typeof curZ!=='undefined'&&curZ?dangerZone(curZ):null;
  return`<div class="ligne"><span class="titre">Royaume</span><span class="d" title="Cartes de zone éveillées dans le paquet"><span>🂠</span>${puissancePaquet()}</span><span class="d" title="Antres actifs : vos bêtes"><span>✦</span>${betes}</span><span class="d" title="Bonus greffés par les routes"><span>⬢</span>${bonus}</span><span class="d" title="Routes ouvertes"><span>═</span>${routes}</span></div>`+
    (dz?`<div class="ligne"><span class="titre">Danger ici</span><span class="dg ${dz[0]}">${dz[1]}</span></div>`:'')}
