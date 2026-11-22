/* MozaWorld 2.32 : interface « Carnet sombre », étape 2, le combat (22 novembre).
   Demandes de l'utilisateur (21 nov.) : « un champ de bataille […] en mosaïque », « les mosaïques doivent être collées,
   un damier en mosaïque » ; jauges tordues ; bouts de parchemin usés ; cartes de la main inchangées (« bien pour les cartes »).
   Habillage seulement : les cases, les voies, le Centre et toutes les règles du Plateau restent ceux de plateau.js.
   Les cases du Plateau sont redessinées en tuiles jointives (hexagones et nœuds papillon alternés, bord à bord, 5 colonnes × 3 voies) ;
   l'emblème Girih de chaque case spéciale reste incrusté dessus. Les deux cases du milieu hors Centre sont décoratives.
   Poids pour la Xbox : aucune image, aucun filtre, aucun flou ; les halos animés des cases visées deviennent un simple clignotement.
   Les cadres des cartes à jouer (cartes-visuel.js) ne sont pas touchés. ?carnet=0 rend l'ancien écran. */
(function(){
if(!document.body.classList.contains('carnet'))return;
const st=document.createElement('style');st.textContent=`
#combat{--cw:calc(var(--u)*9);--ch:calc(var(--u)*6.3);--ck:calc(var(--u)*1.25);--cj:3px;column-gap:0!important;grid-template-columns:1fr var(--cw) 1fr!important}
/* le décor de la zone reste, assombri comme à la bougie */
#combat::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse at 50% 42%,rgba(8,5,3,.38) 30%,rgba(8,5,3,.8) 100%)}
#combat>*:not(#cb-decor){position:relative;z-index:1}

/* ── en-tête : gothique, coup de pinceau violet, sceau ── */
#combat .cb-tete .sur{font-family:var(--c-fell);color:var(--c-os);letter-spacing:.3em;text-shadow:2px 2px 0 #000}
#combat #cb-t{font-family:var(--c-goth);font-weight:600;font-size:calc(var(--u)*2.9);color:var(--c-os);text-shadow:3px 3px 0 var(--c-cire),5px 5px 0 #0a0605;display:inline-block;position:relative;padding:0 .7em .05em;margin:0}
#combat #cb-t::before{content:"";position:absolute;z-index:-1;inset:8% 0 0;transform:rotate(-.8deg);
  background:repeating-linear-gradient(2deg,rgba(255,255,255,.10) 0 3px,transparent 3px 9px,rgba(0,0,0,.2) 9px 12px,transparent 12px 21px),linear-gradient(95deg,#2a1838,#4a2a5e 30%,#6d4a86 55%,#4a2a5e 80%,#2a1838);
  clip-path:polygon(0 38%,2% 16%,7% 22%,12% 6%,24% 12%,38% 2%,52% 9%,66% 0,80% 8%,92% 3%,97% 20%,100% 34%,98% 62%,100% 80%,94% 92%,84% 86%,70% 98%,55% 90%,40% 100%,26% 91%,13% 97%,5% 84%,1% 70%)}
#combat #cb-t::after{content:"✶";position:absolute;left:calc(var(--u)*-2.4);top:-.1em;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:46% 54% 50% 50%/52% 47% 53% 48%;
  display:grid;place-items:center;font:600 calc(var(--u)*1.6)/1 var(--c-fell);color:#5e0f0a;text-shadow:1px 1px 0 rgba(255,150,130,.45);transform:rotate(-14deg);
  background:radial-gradient(circle at 36% 30%,#e0584a,var(--c-cire) 46%,#6d130d 100%);box-shadow:inset 0 0 0 calc(var(--u)*.28) rgba(109,19,13,.55),2px 3px 0 rgba(0,0,0,.7)}
#combat #cb-log{font-family:var(--c-main);font-style:normal;font-weight:600;font-size:calc(var(--u)*1.45);color:var(--c-os);text-shadow:2px 2px 0 #000}

/* ── le champ de bataille : un damier de mosaïque, tuiles collées ── */
#combat #cb-allies,#combat #cb-foes{column-gap:0!important;row-gap:0!important;grid-template-rows:repeat(3,var(--ch))!important;align-content:center;align-self:center;padding-bottom:0!important}
#combat #cb-allies{justify-self:end}#combat #cb-foes{justify-self:start}
#combat #cb-allies .u.hero,#combat #cb-allies .u.garde{margin-right:calc(var(--u)*1.6)}
#combat .pcase{width:var(--cw)!important;height:var(--ch)!important;min-height:0!important;animation:none!important;filter:none!important;--tu:#2a2623;--tu2:#3a3530}
#combat #cb-allies .pcase{--tu:#232a30;--tu2:#313b44}#combat #cb-foes .pcase{--tu:#33211d;--tu2:#452c26}
#combat #cb-allies .pcase[data-k^="CIT"],#combat #cb-foes .pcase[data-k^="CIT"]{--tu:#3e5a78;--tu2:#5b7c9c}#combat #cb-allies .pcase[data-k^="DON"],#combat #cb-foes .pcase[data-k^="DON"]{--tu:#4a3466;--tu2:#6a4e8c}
#combat #cb-allies .pcase[data-k^="ANT"],#combat #cb-foes .pcase[data-k^="ANT"]{--tu:#7a2a20;--tu2:#a2402f}#combat #cb-allies .pcase[data-k^="RES"],#combat #cb-foes .pcase[data-k^="RES"]{--tu:#22606a;--tu2:#34868f}#combat #cb-allies .pcase[data-k^="MAR"],#combat #cb-foes .pcase[data-k^="MAR"]{--tu:#8a6a1c;--tu2:#b48c2c}
#combat .pcase::before,#combat .pcase::after{content:"";position:absolute;z-index:-1;pointer-events:none}
#combat .pcase::before{inset:0;background:#0b0807}
#combat .pcase::after{inset:var(--cj);
  background:repeating-linear-gradient(90deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),repeating-linear-gradient(0deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),
   radial-gradient(ellipse at 50% 50%,var(--tu2),var(--tu) 78%)}
/* nœud papillon (bords rentrants) */
#combat .pcase::before,#combat .pcase::after{clip-path:polygon(0 0,100% 0,calc(100% - var(--ck)) 50%,100% 100%,0 100%,var(--ck) 50%)}
/* hexagone (pointes sortantes), une case sur deux en damier */
#combat #pc-a01::before,#combat #pc-a21::before,#combat #pc-a10::before,#combat #pc-e00::before,#combat #pc-e20::before,#combat #pc-e11::before{inset:0 calc(var(--ck)*-1)}
#combat #pc-a01::after,#combat #pc-a21::after,#combat #pc-a10::after,#combat #pc-e00::after,#combat #pc-e20::after,#combat #pc-e11::after{inset:var(--cj) calc(var(--cj) - var(--ck))}
#combat #pc-a01::before,#combat #pc-a21::before,#combat #pc-a10::before,#combat #pc-e00::before,#combat #pc-e20::before,#combat #pc-e11::before,
#combat #pc-a01::after,#combat #pc-a21::after,#combat #pc-a10::after,#combat #pc-e00::after,#combat #pc-e20::after,#combat #pc-e11::after{clip-path:polygon(0 50%,var(--ck) 0,calc(100% - var(--ck)) 0,100% 50%,calc(100% - var(--ck)) 100%,var(--ck) 100%)}
/* l'emblème Girih de la case, incrusté */
#combat .pcase svg{inset:6% 24% 22%!important;width:52%!important;height:72%!important;opacity:.95}
#combat .pcase[data-k="-1"] svg{opacity:0}
#combat .pcase svg polygon{stroke:var(--c-os);stroke-width:3;fill:rgba(233,220,188,.14)}
#combat .pcase.vise::after{animation:cVise .7s steps(2,jump-none) infinite}
#combat .pcase.vise svg{opacity:1!important}#combat .pcase.vise svg polygon{stroke:#fff3c8;stroke-width:5;fill:rgba(255,243,200,.3)}
@keyframes cVise{from{opacity:1}to{opacity:.62}}
#combat .pcase .pt{font-family:var(--c-goth);font-size:calc(var(--u)*.95);letter-spacing:.06em;text-transform:none;color:var(--c-os)!important;text-shadow:2px 2px 0 #000;top:auto!important;bottom:.2em!important}
#combat .plmenace{font-family:var(--c-main);font-size:calc(var(--u)*1.05);color:#ffb0a0;text-shadow:2px 2px 0 #000}
/* le Centre : la colonne du milieu, une tuile entre deux cases hachurées */
#combat #cb-centre{width:var(--cw)!important;height:calc(var(--ch)*3);align-self:center;justify-content:center;gap:0;position:relative;text-shadow:none}
#combat #cb-centre::before,#combat #cb-centre::after{content:"";position:absolute;z-index:-1;pointer-events:none;
  --a:var(--ck);--b:calc(var(--ck)*2);--r0:calc(100% - var(--ck)*2);--r1:calc(100% - var(--ck));
  clip-path:polygon(var(--a) 0,var(--r1) 0,100% 16.667%,var(--r1) 33.333%,var(--r0) 50%,var(--r1) 66.667%,100% 83.333%,var(--r1) 100%,var(--a) 100%,0 83.333%,var(--a) 66.667%,var(--b) 50%,var(--a) 33.333%,0 16.667%)}
#combat #cb-centre::before{inset:0 calc(var(--ck)*-1);background:#0b0807}
#combat #cb-centre::after{inset:var(--cj) calc(var(--cj) - var(--ck));
  background:linear-gradient(#0b0807,#0b0807) 0 33.333%/100% var(--cj) no-repeat,linear-gradient(#0b0807,#0b0807) 0 66.667%/100% var(--cj) no-repeat,
   repeating-linear-gradient(90deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),repeating-linear-gradient(0deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),
   linear-gradient(180deg,#1d1a18 0 33.333%,transparent 33.333% 66.667%,#1d1a18 66.667%),
   radial-gradient(ellipse at 50% 50%,#5d8a3c,#35561f 75%)}
#combat #cb-centre[data-k="cennemi"]::after{background:linear-gradient(#0b0807,#0b0807) 0 33.333%/100% var(--cj) no-repeat,linear-gradient(#0b0807,#0b0807) 0 66.667%/100% var(--cj) no-repeat,
   repeating-linear-gradient(90deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),repeating-linear-gradient(0deg,rgba(8,5,3,.5) 0 2px,transparent 2px calc(var(--u)*1.1)),
   linear-gradient(180deg,#1d1a18 0 33.333%,transparent 33.333% 66.667%,#1d1a18 66.667%),
   radial-gradient(ellipse at 50% 50%,#a2402f,#5e1c14 75%)}
#combat #cb-centre svg{width:calc(var(--u)*5.2)!important;height:calc(var(--u)*5.2)!important;position:absolute;left:50%;top:50%;translate:-50% -50%}
#combat #cb-centre svg polygon,#combat #cb-centre svg path{stroke:var(--c-os)}
#combat #cb-centre .cl{font-family:var(--c-goth);font-size:calc(var(--u)*1.35);color:var(--c-os);text-shadow:2px 2px 0 #000;margin:0;position:relative}
#combat #cb-centre .cv{font-family:var(--c-main);font-weight:600;font-size:calc(var(--u)*1.05);color:var(--c-os)!important;text-shadow:2px 2px 0 #000;margin:0;position:absolute;left:-40%;right:-40%;top:calc(66.667% + .2em)}

/* ── unités : figurines à étiquette de papier, jauges tordues ── */
#combat .u .plaque{background:linear-gradient(178deg,var(--c-papier),var(--c-papier2))!important;border:2px solid var(--c-encre)!important;border-radius:0!important;box-shadow:2px 3px 0 rgba(0,0,0,.6)!important;
  clip-path:polygon(0 6%,8% 0,30% 5%,55% 0,80% 6%,100% 1%,99% 50%,100% 96%,82% 100%,60% 94%,35% 100%,12% 95%,1% 100%,2% 50%);backdrop-filter:none!important}
#combat .u:nth-child(odd) .plaque{transform:rotate(-1.2deg)}#combat .u:nth-child(even) .plaque{transform:rotate(1deg)}
#combat .u .un{font-family:var(--c-goth);color:var(--c-encre)!important;text-shadow:none!important}
#combat .u.hero .un,#combat .u.garde .un,#combat .u.chef .un{font-size:calc(var(--u)*1.35)}
#combat .u .bar{background:#1a120c!important;border:2px solid var(--c-encre)!important;border-radius:40% 8% 46% 10%/60% 30% 70% 40%!important;transform:rotate(-1.4deg) skewX(-6deg);box-shadow:none!important;overflow:hidden}
#combat .u .bar i{border-radius:0!important;box-shadow:none!important;background:repeating-linear-gradient(-58deg,rgba(0,0,0,.22) 0 3px,transparent 3px 8px),#5a9440!important}
#combat #cb-foes .u .bar i{background:repeating-linear-gradient(-58deg,rgba(0,0,0,.22) 0 3px,transparent 3px 8px),#b3301f!important}
#combat .u.garde .bar i{background:repeating-linear-gradient(-58deg,rgba(0,0,0,.22) 0 3px,transparent 3px 8px),#3f6f96!important}
#combat .u .bar span{font-family:var(--c-num);color:#fff3da!important;text-shadow:1px 1px 0 #000!important}
#combat .u .mz-voie{font-family:var(--c-fell);color:#5a3a16!important;letter-spacing:.06em}
#combat .u .int:not(:empty){font-family:var(--c-main);font-weight:600;background:var(--c-os)!important;color:var(--c-encre)!important;border:2px solid var(--c-encre)!important;border-radius:0!important;text-shadow:none!important;transform:rotate(-2deg);box-shadow:2px 2px 0 rgba(0,0,0,.6)!important}
#combat .u .int b{color:var(--c-cire)!important}
#combat .u.manvise .plaque{box-shadow:0 0 0 3px #fff3c8!important}

/* ── bas de l'écran : mana, pioche, aide, Fin du tour en sceau de cire ── */
#combat #cb-mana.c-papier *{color:var(--c-encre)!important}
#combat #cb-mana .l{font-family:var(--c-fell)!important}
#combat #cb-mana b{font-family:var(--c-goth)!important;color:var(--c-encre)!important}
#combat #cb-mana .mana-p{color:#fff!important;box-shadow:0 0 0 2px var(--c-encre)}
#combat #cb-mana .mp i{box-shadow:0 0 0 2px var(--c-encre)!important}
#combat #cb-piles.c-papier *{color:var(--c-encre)!important}
#combat #cb-piles span{font-family:var(--c-fell)!important}#combat #cb-piles b{font-family:var(--c-num)!important}
#combat #cb-mana.c-papier::before,#combat #cb-mana.c-papier::after,#combat #cb-piles.c-papier::before,#combat #cb-piles.c-papier::after{display:none!important}
#combat #cb-aide{font-family:var(--c-fell);background:var(--c-encre)!important;border:2px solid var(--c-papier2)!important;border-radius:0!important;color:var(--c-os)!important;backdrop-filter:none!important;transform:rotate(-.4deg)}
#combat #cb-main .cc.fin:not(.man){border-radius:47% 53% 50% 50%/52% 48% 52% 48%!important;border:0!important;background:radial-gradient(circle at 36% 30%,#e0584a,var(--c-cire) 46%,#6d130d 100%)!important;
  box-shadow:inset 0 0 0 calc(var(--u)*.45) rgba(109,19,13,.55),3px 4px 0 rgba(0,0,0,.7)!important;backdrop-filter:none!important}
#combat #cb-main .cc.fin:not(.man) .cn{font-family:var(--c-goth);color:#fff3da!important;text-shadow:2px 2px 0 #5e0f0a!important;text-transform:uppercase}
#combat #cb-main .cc.fin.f:not(.man){box-shadow:inset 0 0 0 calc(var(--u)*.45) rgba(109,19,13,.55),0 0 0 4px #fff3c8,3px 4px 0 4px rgba(0,0,0,.7)!important}
#combat #cb-main .cc.fin.man{border-radius:50%!important;border:0!important;background:radial-gradient(circle at 36% 30%,#6fae4f,#3d7a2c 55%,#234c18)!important;box-shadow:inset 0 0 0 calc(var(--u)*.3) rgba(20,50,14,.55),3px 4px 0 rgba(0,0,0,.7)!important;backdrop-filter:none!important}
#combat #cb-main .cc.fin.man .cn{font-family:var(--c-goth);color:#fff3da!important;text-shadow:2px 2px 0 #1c3a12!important}
#combat #cb-main .cc.fin.man.f{box-shadow:inset 0 0 0 calc(var(--u)*.3) rgba(20,50,14,.55),0 0 0 4px #fff3c8!important}
`;document.head.appendChild(st);
/* papier déchiré pour les deux panneaux du bas (même tirage que carnet.js : classe c-papier + clip-path) */
function dech(el,n,ay,ax){if(!el)return;el.classList.add('c-papier');let g=el.id.length*7919+17;const a=()=>(g=(g*1664525+1013904223)>>>0)/4294967296,p=[];
  for(let i=0;i<=n;i++)p.push((i/n*100).toFixed(1)+'% '+(a()*ay).toFixed(2)+'%');
  for(let i=1;i<5;i++)p.push((100-a()*ax).toFixed(2)+'% '+(i*20)+'%');
  for(let i=n;i>=0;i--)p.push((i/n*100).toFixed(1)+'% '+(100-a()*ay).toFixed(2)+'%');
  for(let i=4;i>0;i--)p.push((a()*ax).toFixed(2)+'% '+(i*20)+'%');
  el.style.clipPath='polygon('+p.join(',')+')'}
dech(document.getElementById('cb-mana'),14,3,2.5);dech(document.getElementById('cb-piles'),12,3.5,3);
})();
