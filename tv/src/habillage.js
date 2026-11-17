/* MozaWorld TV : habillage du combat (17 novembre).
   Retour de l'utilisateur : « c'est vraiment moche, il faut un minimum d'art dans les cartes ; un type commun au début c'est ok ».
   Ici, seulement de l'image : une illustration par sorte de carte, un portrait par créature, un décor par zone.
   Tout est dessiné en vecteurs (SVG) : rien à télécharger, net sur une grande télé, gratuit.
   Ce fichier redéfinit portrait(), carteHTML() et uniteEl() de combat.js ; la logique du combat n'est pas touchée. */

/* ---------- Dégradés et filtres communs (une seule fois dans la page) ---------- */
(function(){const d=document.createElement('div');d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';
d.innerHTML=`<svg width="0" height="0" aria-hidden="true"><defs>
<linearGradient id="mz-sil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2630"/><stop offset="1" stop-color="#0c0a0e"/></linearGradient>
<linearGradient id="mz-silC" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3340"/><stop offset=".6" stop-color="#16131a"/><stop offset="1" stop-color="#0a090c"/></linearGradient>
<radialGradient id="mz-halo"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".25" stop-color="currentColor" stop-opacity=".55"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
<linearGradient id="mz-or" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f5dc9c"/><stop offset=".5" stop-color="#c9a45c"/><stop offset="1" stop-color="#7d6230"/></linearGradient>
<linearGradient id="mz-cape" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a3313d"/><stop offset="1" stop-color="#4a1018"/></linearGradient>
<filter id="mz-lueur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="mz-flou" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
<pattern id="mz-girih" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M20 2 L25 15 L38 20 L25 25 L20 38 L15 25 L2 20 L15 15Z" fill="none" stroke="#c9a45c" stroke-opacity=".18" stroke-width=".8"/></pattern>
</defs></svg>`;document.body.appendChild(d)})();

/* ---------- Portraits des créatures ----------
   Silhouettes sombres éclairées par la couleur de la zone (currentColor), yeux qui luisent. Pieds vers y = 92. */
const OMBRE='<ellipse cx="50" cy="93" rx="27" ry="4.5" fill="#000" opacity=".55"/>';
const HALO=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="url(#mz-halo)" opacity=".75"/>`;
const YEUX=(x1,y1,x2,y2,r)=>`<g filter="url(#mz-lueur)" fill="currentColor"><circle cx="${x1}" cy="${y1}" r="${r||1.8}"/><circle cx="${x2}" cy="${y2}" r="${r||1.8}"/></g>`;
const SIL='fill="url(#mz-silC)" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"';
const BETES={
/* Citadelle (Berestograd) */
'Pillard des sapins':`<path d="M57 52 L80 22" stroke="#6b5440" stroke-width="3" stroke-linecap="round"/><path d="M76 17 Q90 18 88 34 Q82 27 73 27Z" fill="#9aa3ad" stroke="currentColor" stroke-width="1"/>
 <path ${SIL} d="M36 92 L39 66 Q34 60 37 50 Q42 41 50 40 Q58 41 63 50 Q66 60 61 66 L64 92 L55 92 L52 74 L48 74 L45 92Z"/>
 <path ${SIL} d="M40 44 Q42 24 50 21 Q58 24 60 44 Q50 38 40 44Z"/><path d="M43 41 Q50 30 57 41 Q50 44 43 41Z" fill="#0a090c"/>${YEUX(47,39,53,39,1.5)}
 <path d="M36 54 Q30 60 34 70" stroke="#5d4a3a" stroke-width="5" fill="none" stroke-linecap="round"/>`,
'Archère d\'écorce':`<path d="M24 22 Q8 52 24 84" fill="none" stroke="#8a6b4a" stroke-width="3"/><path d="M24 22 L24 84" stroke="#e9dfc8" stroke-width=".7" opacity=".7"/>
 <path ${SIL} d="M42 92 L45 62 Q41 52 45 44 Q50 38 55 44 Q59 52 55 62 L58 92 L52 92 L50 72 L48 92Z"/>
 <path d="M46 50 L26 53" stroke="#1d1a20" stroke-width="4" stroke-linecap="round"/><path d="M26 53 L70 50" stroke="#c9a45c" stroke-width="1.2"/>
 <path ${SIL} d="M43 42 Q42 28 50 26 Q58 28 57 42 Q54 46 50 46 Q46 46 43 42Z"/><path d="M50 24 Q60 10 70 14 Q60 18 56 28Z" fill="#3a5a35" stroke="currentColor" stroke-width=".8"/>${YEUX(47,36,53,36,1.4)}`,
'Voïvode sans mémoire':`<path d="M24 92 Q22 60 32 48 L68 48 Q78 60 76 92Z" fill="url(#mz-cape)" stroke="currentColor" stroke-width="1.2"/>
 <path ${SIL} d="M34 92 L36 58 Q36 46 50 44 Q64 46 64 58 L66 92 L56 92 L53 70 L47 70 L44 92Z"/><path d="M38 54 L62 54 L60 66 L40 66Z" fill="#2f2a34" stroke="url(#mz-or)" stroke-width="1"/>
 <path ${SIL} d="M41 44 Q40 30 50 28 Q60 30 59 44Z"/><path d="M38 30 Q50 8 62 30 Q56 26 50 27 Q44 26 38 30Z" fill="url(#mz-or)"/><circle cx="50" cy="12" r="2.5" fill="url(#mz-or)"/>
 <path d="M43 36 L57 36" stroke="#0a090c" stroke-width="5"/>${YEUX(46.5,36,53.5,36,1.7)}<path d="M68 50 L84 86" stroke="url(#mz-or)" stroke-width="3" stroke-linecap="round"/><path d="M81 80 L90 76 L88 92Z" fill="#9aa3ad"/>`,
/* Donjon (Neuf Édits) */
'Gardien d\'édit':`<path ${SIL} d="M32 92 L34 54 Q34 40 50 38 Q66 40 66 54 L68 92 L57 92 L54 72 L46 72 L43 92Z"/>
 <rect x="22" y="48" width="22" height="34" rx="2" fill="#2f2a34" stroke="currentColor" stroke-width="1.2"/><path d="M26 56 H40 M26 62 H40 M26 68 H37 M26 74 H39" stroke="currentColor" stroke-opacity=".7" stroke-width="1.2"/>
 <path ${SIL} d="M40 40 L40 24 Q50 16 60 24 L60 40Z"/><path d="M42 30 H58" stroke="currentColor" stroke-width="2.2" filter="url(#mz-lueur)"/>`,
'Larve de lave':`${HALO(50,74,30)}<path ${SIL} d="M14 88 Q12 74 24 72 Q28 62 40 64 Q46 52 58 56 Q72 52 76 64 Q90 66 86 82 Q86 92 70 91 L22 92 Q14 92 14 88Z"/>
 <path d="M26 74 Q30 80 28 88 M42 66 Q44 76 40 88 M60 58 Q62 72 58 88 M74 66 Q74 78 72 88" stroke="currentColor" stroke-width="1.6" fill="none" filter="url(#mz-lueur)"/>${YEUX(66,62,73,63,2.2)}`,
'Scribe-tyran':`<path ${SIL} d="M30 92 Q32 62 40 48 Q50 40 60 48 Q68 62 70 92Z"/><path d="M40 48 Q50 56 60 48" stroke="url(#mz-or)" stroke-width="1.4" fill="none"/>
 <path ${SIL} d="M42 46 Q40 30 50 26 Q60 30 58 46 Q50 50 42 46Z"/><path d="M40 28 L44 14 L50 22 L56 12 L60 28Z" fill="url(#mz-or)"/>${YEUX(46,38,54,38,1.8)}
 <path d="M64 62 Q86 40 92 12 Q78 30 62 56Z" fill="#e9dfc8" stroke="currentColor" stroke-width=".8"/><path d="M16 70 Q18 60 30 62 L34 84 Q22 82 18 88Z" fill="#d9c9a4" stroke="currentColor" stroke-width=".8"/>
 <path d="M21 70 H30 M22 75 H31 M22 80 H31" stroke="#5a4636" stroke-width="1"/>`,
/* Ressource (Tezcamixtli) */
'Glaneur hagard':`<path ${SIL} d="M38 92 L40 70 Q30 64 32 52 Q36 40 48 40 Q60 42 62 54 L60 70 L62 92 L54 92 L51 76 L47 92Z"/>
 <path ${SIL} d="M38 46 Q36 30 46 26 Q56 26 58 40 Q48 36 38 46Z"/><path d="M30 34 Q44 18 64 32 Q50 30 30 34Z" fill="#b59a5a" stroke="currentColor" stroke-width=".8"/>${YEUX(44,38,51,37,1.4)}
 <path d="M62 56 L72 36" stroke="#6b5440" stroke-width="2.6" stroke-linecap="round"/><path d="M72 36 Q88 30 86 50 Q82 40 70 40" fill="none" stroke="#c9ced6" stroke-width="2.4"/>`,
'Anguille des canaux':`<path d="M8 86 Q30 80 50 86 T92 86" stroke="currentColor" stroke-opacity=".5" stroke-width="1.4" fill="none"/><path d="M14 92 Q34 88 52 92 T90 92" stroke="currentColor" stroke-opacity=".35" stroke-width="1.2" fill="none"/>
 <path ${SIL} d="M30 88 Q24 62 44 52 Q62 44 58 26 Q56 14 66 12 Q80 12 78 26 Q76 34 68 34 Q72 52 56 62 Q42 70 44 88Z"/>
 <path d="M66 16 Q74 6 82 10 M58 30 Q50 24 52 16" stroke="currentColor" stroke-width="1.2" fill="none"/>${YEUX(70,20,75,21,1.6)}<path d="M68 28 Q72 30 76 28" stroke="#0a090c" stroke-width="1.6"/>`,
'Mère des Gerbes':`${HALO(50,30,28)}<g stroke="#e6c46a" stroke-width="2.2" stroke-linecap="round">${Array.from({length:9},(_,i)=>{const a=-PI/2+(i-4)*.32;return`<path d="M50 30 L${(50+Math.cos(a)*30).toFixed(1)} ${(30+Math.sin(a)*30).toFixed(1)}"/>`}).join('')}</g>
 <path ${SIL} d="M24 92 Q28 60 40 46 Q50 40 60 46 Q72 60 76 92Z"/><path d="M36 64 Q50 72 64 64 M32 78 Q50 88 68 78" stroke="currentColor" stroke-opacity=".6" stroke-width="1.2" fill="none"/>
 <path ${SIL} d="M41 44 Q40 28 50 24 Q60 28 59 44 Q50 48 41 44Z"/>${YEUX(46,36,54,36,1.8)}`,
/* Antre (Lucioles) */
'Luciole ardente':`<ellipse cx="34" cy="44" rx="20" ry="9" transform="rotate(-25 34 44)" fill="#e9dfc8" fill-opacity=".22" stroke="currentColor" stroke-width=".8"/><ellipse cx="66" cy="44" rx="20" ry="9" transform="rotate(25 66 44)" fill="#e9dfc8" fill-opacity=".22" stroke="currentColor" stroke-width=".8"/>
 ${HALO(50,72,22)}<ellipse cx="50" cy="70" rx="10" ry="14" fill="currentColor" filter="url(#mz-lueur)"/><ellipse cx="50" cy="50" rx="9" ry="11" ${SIL}/>
 <path d="M46 40 Q40 28 34 26 M54 40 Q60 28 66 26" stroke="currentColor" stroke-width="1.2" fill="none"/>${YEUX(46,48,54,48,1.8)}`,
'Crabe-racine':`<path d="M22 70 Q10 62 12 48 Q20 54 24 46 M78 70 Q90 62 88 48 Q80 54 76 46" stroke="currentColor" stroke-width="2.2" fill="none"/>
 <path d="M30 78 Q20 84 14 92 M36 82 Q30 88 28 92 M70 78 Q80 84 86 92 M64 82 Q70 88 72 92" stroke="#6b5440" stroke-width="3" stroke-linecap="round" fill="none"/>
 <path ${SIL} d="M24 74 Q24 54 50 52 Q76 54 76 74 Q64 84 50 84 Q36 84 24 74Z"/><path d="M34 62 Q50 56 66 62" stroke="currentColor" stroke-opacity=".6" fill="none"/>
 <path d="M10 46 Q4 36 14 32 Q20 40 12 44Z M90 46 Q96 36 86 32 Q80 40 88 44Z" fill="#3a3340" stroke="currentColor"/>${YEUX(44,58,56,58,2)}`,
'Reine-luciole':`<path d="M50 50 Q14 18 6 40 Q8 62 46 58Z M50 50 Q86 18 94 40 Q92 62 54 58Z" fill="#e9dfc8" fill-opacity=".18" stroke="currentColor" stroke-width="1"/>
 <path d="M48 58 Q22 66 18 84 Q34 82 48 64Z M52 58 Q78 66 82 84 Q66 82 52 64Z" fill="#e9dfc8" fill-opacity=".12" stroke="currentColor" stroke-width=".8"/>
 ${HALO(50,78,22)}<ellipse cx="50" cy="76" rx="9" ry="15" fill="currentColor" filter="url(#mz-lueur)"/><ellipse cx="50" cy="52" rx="10" ry="12" ${SIL}/><circle cx="50" cy="38" r="7" ${SIL}/>
 <path d="M43 32 L45 24 L50 30 L55 24 L57 32Z" fill="url(#mz-or)"/>${YEUX(47,38,53,38,1.5)}`,
/* Marché (Givrecloche) */
'Colporteur givré':`<rect x="52" y="40" width="26" height="34" rx="3" fill="#3b4652" stroke="currentColor" stroke-width="1.1"/><path d="M52 50 H78 M52 60 H78" stroke="currentColor" stroke-opacity=".5"/>
 <path ${SIL} d="M34 92 L36 64 Q32 50 40 42 Q48 38 56 44 Q60 54 58 64 L60 92 L52 92 L48 74 L44 92Z"/>
 <path ${SIL} d="M38 44 Q36 28 46 24 Q56 26 56 42 Q46 40 38 44Z"/><path d="M34 30 Q46 18 60 30Z" fill="#cfe3f0" opacity=".85"/>${YEUX(43,37,50,37,1.4)}
 <path d="M34 58 L22 66" stroke="#1d1a20" stroke-width="3.5" stroke-linecap="round"/>${HALO(20,72,12)}<rect x="16" y="66" width="8" height="11" rx="1.5" fill="#f3d27a" filter="url(#mz-lueur)"/>`,
'Mâtin de cloche':`<path ${SIL} d="M14 72 Q14 58 28 56 L58 54 Q66 40 76 42 Q90 44 90 56 Q86 62 78 62 L76 74 L80 92 L72 92 L68 76 L40 76 L36 92 L28 92 L28 74 Q18 76 14 72Z"/>
 <path d="M14 66 Q4 60 8 50" stroke="currentColor" stroke-width="2" fill="none"/><path d="M74 40 L72 30 L80 38Z" fill="#3a3340" stroke="currentColor"/>
 <path d="M62 60 Q70 66 78 62" stroke="#9aa3ad" stroke-width="2.4" fill="none"/><path d="M66 64 Q66 74 72 74 Q78 74 76 64Z" fill="url(#mz-or)"/>${YEUX(80,48,85,49,1.6)}`,
'Prévôt de la Foire':`<path ${SIL} d="M30 92 Q32 60 40 50 Q50 44 60 50 Q68 60 70 92Z"/><path d="M40 50 L60 50 L56 92 M44 92 L40 50" stroke="currentColor" stroke-opacity=".45" fill="none"/>
 <path ${SIL} d="M42 48 Q40 34 50 30 Q60 34 58 48 Q50 52 42 48Z"/><path d="M30 32 Q50 18 70 32 Q60 28 50 30 Q40 28 30 32Z M38 30 Q50 6 62 30Z" fill="#232a33" stroke="currentColor" stroke-width="1"/>${YEUX(46,40,54,40,1.6)}
 <path d="M72 92 L74 22" stroke="url(#mz-or)" stroke-width="2.4"/><path d="M68 22 Q74 8 80 22 Q74 26 68 22Z" fill="url(#mz-or)"/><circle cx="74" cy="25" r="1.6" fill="#0a090c"/>`,
/* Bêtes alliées */
'Luciole de nuit':`<ellipse cx="34" cy="46" rx="18" ry="8" transform="rotate(-25 34 46)" fill="#bcd6ff" fill-opacity=".25" stroke="currentColor" stroke-width=".8"/><ellipse cx="66" cy="46" rx="18" ry="8" transform="rotate(25 66 46)" fill="#bcd6ff" fill-opacity=".25" stroke="currentColor" stroke-width=".8"/>
 ${HALO(50,70,20)}<ellipse cx="50" cy="68" rx="9" ry="12" fill="currentColor" filter="url(#mz-lueur)"/><ellipse cx="50" cy="51" rx="8" ry="10" ${SIL}/>${YEUX(46,49,54,49,1.6)}`,
'Lancière de l\'aurore':`${HALO(50,50,30)}<path d="M70 92 L58 8" stroke="url(#mz-or)" stroke-width="2.4"/><path d="M58 8 L54 20 L61 18Z" fill="#f5dc9c" filter="url(#mz-lueur)"/>
 <path d="M50 52 Q24 30 20 46 Q26 58 46 58Z M50 52 Q76 30 82 46 Q76 58 54 58Z" fill="#ffe6a8" fill-opacity=".2" stroke="currentColor" stroke-width=".8"/>
 <path ${SIL} d="M40 92 L42 64 Q38 52 44 46 Q50 42 56 46 Q62 52 58 64 L60 92 L53 92 L50 74 L47 92Z"/><path ${SIL} d="M43 44 Q42 30 50 28 Q58 30 57 44 Q50 48 43 44Z"/>${YEUX(47,38,53,38,1.4)}`};
/* Le héros : un pèlerin en cape rouge, bâton à la main, vu de trois quarts */
const HEROS=`${HALO(72,30,12)}<path d="M70 92 L74 16" stroke="#7a5a3c" stroke-width="3" stroke-linecap="round"/><circle cx="74" cy="15" r="3.2" fill="#ffd27a" filter="url(#mz-lueur)"/>
 <path d="M26 92 Q28 62 38 48 Q50 40 62 48 Q72 62 74 92Z" fill="url(#mz-cape)" stroke="#e8c77f" stroke-width="1.2"/>
 <path d="M40 92 Q44 66 50 58 Q56 66 60 92Z" fill="#e9dfc8" opacity=".9"/><path d="M62 60 Q68 62 72 58" stroke="#d8b48a" stroke-width="3.4" stroke-linecap="round"/>
 <path d="M38 48 Q36 30 50 22 Q64 30 62 48 Q56 42 50 42 Q44 42 38 48Z" fill="#2a2630" stroke="#e8c77f" stroke-width="1.2"/><ellipse cx="50" cy="40" rx="7.5" ry="8.5" fill="#d8b48a"/><path d="M42 36 Q50 30 58 36 Q54 33 50 33 Q46 33 42 36Z" fill="#2a2630"/>
 <circle cx="47" cy="41" r="1.1" fill="#2a1a10"/><circle cx="53" cy="41" r="1.1" fill="#2a1a10"/>`;
function portrait(u){if(u.hero)return`<svg viewBox="0 0 100 100">${OMBRE}${HEROS}</svg>`;
  const b=BETES[u.nom];if(b)return`<svg viewBox="0 0 100 100">${OMBRE}${b}</svg>`;
  return`<svg viewBox="0 0 100 100">${OMBRE}<path ${SIL} d="M34 92 L36 58 Q36 42 50 40 Q64 42 64 58 L66 92Z"/>${YEUX(45,52,55,52)}</svg>`}
function uniteEl(u,host){const d=document.createElement('div');d.className='u'+(u.chef?' chef':'')+(u.hero?' hero':'')+(u.bete?' bete':'');
  const c=u.hero?'#e8c77f':u.bete?(u.nom.indexOf('nuit')>=0?'#9cc4ff':'#ffd27a'):ZCOL[u.z]||'#c9a45c';d.style.setProperty('--uc',c);d.style.setProperty('--ucg',rgba(c,.45));
  d.innerHTML=`<div class="int"></div><div class="por" style="color:${c}">${portrait(u)}</div><div class="plaque"><div class="un">${u.nom}</div><div class="bar"><i></i><span></span></div></div><div class="gd"></div>`;
  $(host).appendChild(d);u.el=d;if(CB&&u.hero)decorCombat(CB.Z.id)}

/* ---------- Décor de combat : un paysage par zone, en couches (ciel, lointain, proche, sol) ---------- */
const DECOR={
CIT:{ciel:['#2a3140','#6b4a3e','#c9875a'],sol:'#1a1612',lune:'#f2d9a8',
  loin:`<path d="M0 560 L120 470 L220 520 L360 430 L470 500 L600 440 L760 520 L900 450 L1040 510 L1180 430 L1320 500 L1460 450 L1600 520 L1600 900 L0 900Z" fill="#3b3a44"/>`,
  proche:`<g fill="#15161a">${Array.from({length:22},(_,i)=>{const x=i*76+(i%3)*14,h=180+(i*53%120);return`<path d="M${x} 700 L${x+34} ${700-h} L${x+68} 700Z M${x+8} 660 L${x+34} ${640-h} L${x+60} 660Z"/>`}).join('')}</g>
   <g fill="#201c1a"><rect x="560" y="520" width="480" height="170"/>${Array.from({length:24},(_,i)=>`<path d="M${560+i*20} 520 L${570+i*20} 500 L${580+i*20} 520Z"/>`).join('')}
   <rect x="740" y="400" width="120" height="140"/><path d="M730 410 Q800 300 870 410Z"/><path d="M790 330 Q800 280 810 330Z"/></g><g fill="#ffbf6a" filter="url(#mz-lueur)"><rect x="760" y="440" width="9" height="15" rx="4"/><rect x="790" y="440" width="9" height="15" rx="4"/><rect x="820" y="440" width="9" height="15" rx="4"/><rect x="600" y="580" width="9" height="15" rx="4"/><rect x="680" y="600" width="9" height="15" rx="4"/><rect x="940" y="585" width="9" height="15" rx="4"/><rect x="990" y="610" width="9" height="15" rx="4"/></g>`},
DON:{ciel:['#120c0c','#2a1310','#6a2310'],sol:'#120c0b',lune:'#ff8a3a',
  loin:`<g fill="#3a1c13" stroke="#e0782f" stroke-opacity=".35" stroke-width="3">${Array.from({length:6},(_,i)=>`<path d="M${i*300-40} 900 L${i*300-40} 420 Q${i*300+110} 260 ${i*300+260} 420 L${i*300+260} 900 L${i*300+220} 900 L${i*300+220} 440 Q${i*300+110} 320 ${i*300} 440 L${i*300} 900Z"/>`).join('')}</g>`,
  proche:`<rect x="0" y="720" width="1600" height="180" fill="#ff6a1a" opacity=".35" filter="url(#mz-flou)"/><g stroke="#3a2a22" stroke-width="10">${[180,460,1140,1420].map(x=>`<path d="M${x} 0 L${x} ${180+x%170}"/>`).join('')}</g>
   <g fill="#0d0908"><path d="M0 900 L0 640 L140 600 L160 900Z M1600 900 L1600 620 L1450 600 L1430 900Z"/></g>`},
RES:{ciel:['#1f3a3a','#4f7a62','#e7c87a'],sol:'#132017',lune:'#fff1b8',
  loin:`<path d="M0 560 Q200 500 400 540 T800 520 T1200 540 T1600 510 L1600 900 L0 900Z" fill="#2c4a3c"/><path d="M0 620 L1600 620 L1600 640 L0 640Z" fill="#9fd0c0" opacity=".25"/>`,
  proche:`<g stroke="#1b2d1f" stroke-width="5" stroke-linecap="round">${Array.from({length:40},(_,i)=>{const x=i*41,h=90+(i*37%80);return`<path d="M${x} 760 Q${x+8} ${760-h/2} ${x+(i%2?18:-10)} ${760-h}"/>`}).join('')}</g>
   <g fill="#e6c46a" opacity=".55" filter="url(#mz-lueur)">${Array.from({length:14},(_,i)=>`<circle cx="${60+i*113}" cy="${560+(i*71%90)}" r="5"/>`).join('')}</g>`},
ANT:{ciel:['#05070d','#0d1626','#203047'],sol:'#07090c',lune:'#e2cb62',
  loin:`<path d="M0 900 L0 300 Q200 140 520 200 Q800 90 1080 200 Q1400 140 1600 300 L1600 900Z" fill="#0b0e14"/><path d="M300 900 Q300 420 800 380 Q1300 420 1300 900Z" fill="#141c2a"/>`,
  proche:`<g fill="#e2cb62" filter="url(#mz-lueur)">${Array.from({length:40},(_,i)=>`<circle cx="${(i*197)%1600}" cy="${200+(i*131)%460}" r="${2+i%3}" opacity="${.35+(i%5)*.12}"/>`).join('')}</g>
   <g fill="#06070a">${Array.from({length:9},(_,i)=>`<path d="M${i*190} 0 L${i*190+40} ${90+(i*61%110)} L${i*190+80} 0Z"/>`).join('')}</g>`},
MAR:{ciel:['#1b2333','#3e5068','#a9c3d8'],sol:'#1a1f26',lune:'#eaf4ff',
  loin:`<path d="M0 560 L180 420 L300 500 L460 360 L620 480 L800 380 L980 500 L1160 400 L1320 490 L1460 420 L1600 500 L1600 900 L0 900Z" fill="#5d7088"/><path d="M460 360 L420 420 L500 410Z M800 380 L760 440 L840 430Z" fill="#e8f2fb" opacity=".7"/>`,
  proche:`<g fill="#151a21">${[120,420,1060,1360].map(x=>`<path d="M${x} 720 L${x} 560 L${x+70} 520 L${x+140} 560 L${x+140} 720Z"/><path d="M${x-10} 566 L${x+70} 510 L${x+150} 566 L${x+150} 580 L${x-10} 580Z" fill="#2f3c4c"/>`).join('')}
   <path d="M780 300 L780 380" stroke="#151a21" stroke-width="6"/><path d="M740 430 Q740 370 780 370 Q820 370 820 430 L830 446 L730 446Z"/></g>
   <g fill="#fff" opacity=".7">${Array.from({length:60},(_,i)=>`<circle cx="${(i*263)%1600}" cy="${(i*149)%720}" r="${1.5+i%3}"/>`).join('')}</g>`}};
let decorZ='';
function decorCombat(z){const D=DECOR[z];let el=$('cb-decor');if(!D)return;
  if(!el){el=document.createElement('div');el.id='cb-decor';$('combat').prepend(el)}
  if(decorZ===z)return;decorZ=z;const c=D.ciel;
  el.innerHTML=`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="mz-ciel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset=".55" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>
   <radialGradient id="mz-vign" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".85"/></radialGradient></defs>
   <rect width="1600" height="900" fill="url(#mz-ciel)"/><circle cx="300" cy="170" r="70" fill="${D.lune}" opacity=".75" filter="url(#mz-flou)"/><circle cx="300" cy="170" r="46" fill="${D.lune}" opacity=".9"/>
   ${D.loin}${D.proche}<path d="M0 700 Q800 650 1600 700 L1600 900 L0 900Z" fill="${D.sol}"/><ellipse cx="800" cy="700" rx="620" ry="60" fill="#000" opacity=".25"/>
   <rect width="1600" height="900" fill="url(#mz-girih)" opacity=".5"/><rect width="1600" height="900" fill="url(#mz-vign)"/></svg>`}

/* ---------- Illustrations des cartes : une par sorte de carte (les cartes communes partagent la leur) ---------- */
const ART={
coup:{fond:['#3a1f16','#a0482a'],sorte:'Attaque',d:`<circle cx="104" cy="44" r="30" fill="#ffcf7a" opacity=".35" filter="url(#mz-lueur)"/>
  <g stroke="#ffe2a8" stroke-width="2" stroke-linecap="round" opacity=".9">${Array.from({length:10},(_,i)=>{const a=i*PI/5;return`<path d="M${(104+Math.cos(a)*14).toFixed(1)} ${(44+Math.sin(a)*14).toFixed(1)} L${(104+Math.cos(a)*30).toFixed(1)} ${(44+Math.sin(a)*30).toFixed(1)}"/>`}).join('')}</g>
  <path d="M22 96 L104 44" stroke="#6b4a2c" stroke-width="7" stroke-linecap="round"/><path d="M22 96 L104 44" stroke="#c99a62" stroke-width="2" stroke-linecap="round"/>
  <path d="M30 80 Q60 40 110 30" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/><path d="M36 88 Q70 52 118 40" stroke="#fff" stroke-opacity=".2" stroke-width="1.5" fill="none"/>`},
garde:{fond:['#14202e','#3e6a8a'],sorte:'Défense',d:`<path d="M30 20 Q56 6 80 50 Q56 94 30 80" stroke="#9cc4e4" stroke-opacity=".35" stroke-width="2" fill="none"/>
  <path d="M80 14 L112 24 Q114 64 80 90 Q46 64 48 24Z" fill="#2a3a4c" stroke="url(#mz-or)" stroke-width="2.5"/>
  <path d="M80 30 L85 44 L99 46 L88 55 L92 70 L80 61 L68 70 L72 55 L61 46 L75 44Z" fill="url(#mz-or)"/>
  <path d="M124 30 Q136 50 124 74 M134 24 Q150 50 134 82" stroke="#9cc4e4" stroke-opacity=".5" stroke-width="2" fill="none"/>`},
souffle:{fond:['#102826','#3f8a7e'],sorte:'Technique',d:`<g fill="none" stroke="#d8fff4" stroke-linecap="round">
  <path d="M20 62 Q60 40 96 54 Q122 64 118 44 Q112 28 96 36" stroke-width="3" stroke-opacity=".85"/>
  <path d="M30 78 Q76 64 116 72 Q146 78 140 60" stroke-width="2" stroke-opacity=".55"/>
  <path d="M40 38 Q70 26 92 32" stroke-width="1.6" stroke-opacity=".45"/></g>
  <g fill="#d8fff4" opacity=".7"><circle cx="128" cy="28" r="2"/><circle cx="140" cy="40" r="1.4"/><circle cx="56" cy="24" r="1.2"/></g>`},
CIT:{sorte:'Défense',d:`<rect x="0" y="66" width="160" height="34" fill="#1e1612"/>
  <g fill="#2a1f19" stroke="#c0584c" stroke-opacity=".7">${Array.from({length:16},(_,i)=>`<path d="M${i*10} 100 L${i*10} 58 L${i*10+5} 50 L${i*10+10} 58 L${i*10+10} 100Z"/>`).join('')}</g>
  <rect x="64" y="28" width="32" height="40" fill="#241a15"/><path d="M60 32 Q80 2 100 32Z" fill="url(#mz-or)"/><path d="M78 10 Q80 0 82 10Z" fill="url(#mz-or)"/>
  <rect x="74" y="44" width="12" height="24" rx="6" fill="#ffcf7a" opacity=".8" filter="url(#mz-lueur)"/>`},
DON:{sorte:'Attaque',d:`<path d="M30 100 L30 40 Q80 -4 130 40 L130 100 L116 100 L116 46 Q80 12 44 46 L44 100Z" fill="#1a0f0c" stroke="#e0782f" stroke-opacity=".6"/>
  <rect x="44" y="70" width="72" height="30" fill="#ff6a1a" opacity=".55" filter="url(#mz-lueur)"/>
  <path d="M60 30 L100 30 L102 76 L58 76Z" fill="#e9dfc8" stroke="#6b4a2c"/><path d="M64 40 H96 M64 48 H96 M64 56 H92 M64 64 H95" stroke="#7a2a1a" stroke-width="1.6"/>
  <circle cx="80" cy="76" r="6" fill="#b3261e" stroke="url(#mz-or)"/>`},
RES:{sorte:'Boost',d:`<path d="M0 74 Q40 68 80 74 T160 72 L160 100 L0 100Z" fill="#1c3a30"/><path d="M0 82 Q40 78 80 82 T160 80" stroke="#9fd0c0" stroke-opacity=".5" fill="none"/>
  <circle cx="80" cy="44" r="30" fill="#ffe08a" opacity=".3" filter="url(#mz-lueur)"/>
  <g stroke="#e6c46a" stroke-width="2.2" stroke-linecap="round">${Array.from({length:11},(_,i)=>{const a=-PI/2+(i-5)*.17;return`<path d="M80 76 Q${(80+Math.cos(a)*14).toFixed(1)} 56 ${(80+Math.cos(a)*34).toFixed(1)} ${(76+Math.sin(a)*52).toFixed(1)}"/>`}).join('')}</g>
  <path d="M70 66 Q80 72 90 66" stroke="#6b4a2c" stroke-width="3"/>`},
ANT:{sorte:'Invocation',d:`<path d="M0 100 L0 20 Q80 -10 160 20 L160 100Z" fill="#070a10"/><path d="M40 100 Q40 40 80 34 Q120 40 120 100Z" fill="#1d2a3e"/><circle cx="80" cy="62" r="26" fill="#e2cb62" opacity=".25" filter="url(#mz-lueur)"/>
  <g fill="#e2cb62" filter="url(#mz-lueur)">${Array.from({length:16},(_,i)=>`<circle cx="${(i*47)%150+5}" cy="${16+(i*29)%70}" r="${1+i%3}" opacity="${.4+(i%4)*.15}"/>`).join('')}</g>
  <ellipse cx="80" cy="62" rx="7" ry="10" fill="#ffe27a" filter="url(#mz-lueur)"/><ellipse cx="68" cy="52" rx="12" ry="5" transform="rotate(-25 68 52)" fill="#fff" fill-opacity=".25"/><ellipse cx="92" cy="52" rx="12" ry="5" transform="rotate(25 92 52)" fill="#fff" fill-opacity=".25"/>`},
MAR:{sorte:'Technique',d:`<path d="M0 100 L0 70 L40 56 L80 66 L120 52 L160 64 L160 100Z" fill="#2a3442"/>
  <path d="M80 10 L80 22" stroke="#cfe3f0" stroke-width="2"/><path d="M60 62 Q60 24 80 22 Q100 24 100 62 L106 70 L54 70Z" fill="url(#mz-or)" stroke="#7d6230"/>
  <circle cx="80" cy="72" r="4" fill="#7d6230"/><path d="M48 50 Q40 60 48 70 M112 50 Q120 60 112 70 M38 44 Q26 60 38 76 M122 44 Q134 60 122 76" stroke="#cfe3f0" stroke-opacity=".6" stroke-width="1.6" fill="none"/>
  <g fill="#fff" opacity=".8">${Array.from({length:14},(_,i)=>`<circle cx="${(i*53)%160}" cy="${(i*37)%60+4}" r="${.8+i%2}"/>`).join('')}</g>`}};
function artCarte(k){const a=ART[k]||ART.coup,z=CK[k].z,col=z?ZCOL[z]:null;
  return`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="mz-f-${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0c0f"/><stop offset="1" stop-color="${a.fond?a.fond[1]:col}"/></linearGradient></defs>
   <rect width="160" height="100" fill="url(#mz-f-${k})"/><rect width="160" height="100" fill="url(#mz-girih)"/>${a.d}</svg>`}
function carteHTML(k,i){const c=CK[k],z=c.z,mt=typeof mtype==='function'?mtype(k):null,a=ART[k]||ART.coup;
  const bord=z?ZCOL[z]:'#c9a45c';
  const ligne=z?`${a.sorte} · ${typeof ZMANA!=='undefined'?ZMANA[z]:ZCOURT[z]}`:`${a.sorte} · Commune`;
  return`<div class="cc kcarte ${z?'z':'base'}" style="--kb:${bord};--kcA:${rgba(bord,.28)};--kcB:${rgba(bord,.8)}"><div class="co" style="${mt&&typeof MCOL!=='undefined'?'--mc:'+MCOL[mt]:''}">${c.cout}</div><div class="art">${artCarte(k)}</div><div class="cn">${c.nom()}</div><div class="cz">${ligne}</div><div class="ct">${c.txt(k)}</div></div>`}
