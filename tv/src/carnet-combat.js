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
/* boucle 4 bis (22 nov.) : tons inégaux des tesselles. Un petit motif SVG de 7 × 5 tesselles (tirage fixe), chacune un peu
   plus claire ou plus sombre, posé au pas exact des joints (.72u) : la case vibre comme une vraie mosaïque, sans bandes
   régulières. Une image vectorielle sans filtre, rastérisée une fois : rien à recalculer à chaque image. */
const TONS=(()=>{let g=97;const r=()=>(g=(g*16807)%2147483647)/2147483647;let s='';
  for(let y=0;y<5;y++)for(let x=0;x<7;x++){const v=r(),c=v<.5?'#0c0705':'#fff2d8',o=(v<.5?(.5-v)*.26:(v-.5)*.18).toFixed(3);
    s+=`<rect x='${x}' y='${y}' width='1' height='1' fill='${c}' fill-opacity='${o}'/>`}
  return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='7' height='5' viewBox='0 0 7 5' preserveAspectRatio='none' shape-rendering='crispEdges'>${s}</svg>`)}") 0 0/calc(var(--u)*5.04) calc(var(--u)*3.6)`})();
const st=document.createElement('style');st.textContent=`
#combat{--cw:calc(var(--u)*9);--ch:calc(var(--u)*6.3);--ck:calc(var(--u)*1.25);--cj:3px;
  /* boucle 4 (22 nov.) : opus vermiculatum au lieu de nappe vichy. Joints de 1 px couleur mortier chaud au pas de .72u,
     plus une seconde grille décalée (pas de 1,7u, très légère) qui casse la régularité du quadrillage. */
  --tess:repeating-linear-gradient(90deg,rgba(40,28,18,.22) 0 1px,rgba(255,236,200,.045) 1px 2px,transparent 2px calc(var(--u)*.72)),
   repeating-linear-gradient(0deg,rgba(40,28,18,.22) 0 1px,rgba(255,236,200,.045) 1px 2px,transparent 2px calc(var(--u)*.72)),
   repeating-linear-gradient(90deg,transparent 0 calc(var(--u)*.43),rgba(40,28,18,.10) calc(var(--u)*.43) calc(var(--u)*.43 + 1px),transparent calc(var(--u)*.43 + 1px) calc(var(--u)*1.7)),
   repeating-linear-gradient(0deg,transparent 0 calc(var(--u)*.97),rgba(40,28,18,.10) calc(var(--u)*.97) calc(var(--u)*.97 + 1px),transparent calc(var(--u)*.97 + 1px) calc(var(--u)*1.7)),
   /* boucle 4 bis (22 nov.) : deux grilles légères penchées de 4 et 3 degrés, puis les tons inégaux des tesselles (TONS),
      pour que la case ne se lise plus comme du papier millimétré */
   repeating-linear-gradient(94deg,transparent 0 calc(var(--u)*.61),rgba(40,28,18,.09) calc(var(--u)*.61) calc(var(--u)*.61 + 1px),transparent calc(var(--u)*.61 + 1px) calc(var(--u)*1.13)),
   repeating-linear-gradient(-3deg,transparent 0 calc(var(--u)*.88),rgba(40,28,18,.08) calc(var(--u)*.88) calc(var(--u)*.88 + 1px),transparent calc(var(--u)*.88 + 1px) calc(var(--u)*1.31)),
   ${TONS};
  column-gap:0!important;grid-template-columns:1fr var(--cw) 1fr!important}
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
  display:grid;place-items:center;font:600 calc(var(--u)*1.6)/1 var(--c-fell);color:#d9b56a;text-shadow:0 1px 0 rgba(20,6,4,.8);transform:rotate(-14deg);
  /* boucle 4 (22 nov.) : même cire mate que les boutons du bas, sans reflet blanc */
  background:radial-gradient(circle at 50% 46%,#8e352b 0 38%,#7a2a22 52%,#5c1d17 100%);box-shadow:inset 0 0 0 calc(var(--u)*.24) #6a231c,inset 0 0 0 calc(var(--u)*.24 + 1px) rgba(201,164,92,.4),2px 3px 0 rgba(0,0,0,.7)}
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
  background:var(--tess),
   radial-gradient(ellipse at 50% 50%,var(--tu2),var(--tu) 78%);
  /* boucle 4 (22 nov.) : liseré intérieur, la couleur de la case assombrie, puis un filet d'or */
  box-shadow:inset 0 0 0 calc(var(--u)*.24) rgba(12,8,5,.34),inset 0 0 0 calc(var(--u)*.24 + 1px) rgba(214,178,104,.35)}
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
   var(--tess),
   linear-gradient(180deg,#1d1a18 0 33.333%,transparent 33.333% 66.667%,#1d1a18 66.667%),
   radial-gradient(ellipse at 50% 50%,#5d8a3c,#35561f 75%)}
#combat #cb-centre[data-k="cennemi"]::after{background:linear-gradient(#0b0807,#0b0807) 0 33.333%/100% var(--cj) no-repeat,linear-gradient(#0b0807,#0b0807) 0 66.667%/100% var(--cj) no-repeat,
   var(--tess),
   linear-gradient(180deg,#1d1a18 0 33.333%,transparent 33.333% 66.667%,#1d1a18 66.667%),
   radial-gradient(ellipse at 50% 50%,#a2402f,#5e1c14 75%)}
#combat #cb-centre svg{width:calc(var(--u)*5.2)!important;height:calc(var(--u)*5.2)!important;position:absolute;left:50%;top:50%;translate:-50% -50%}
#combat #cb-centre svg polygon,#combat #cb-centre svg path{stroke:var(--c-os)}
#combat #cb-centre .cl{font-family:var(--c-goth);font-size:calc(var(--u)*1.35);color:var(--c-os);text-shadow:2px 2px 0 #000;margin:0;position:relative}
/* boucle 6 (24 nov.) : la valeur du Centre (« à l'ennemi · ses coups +1 ») ne déborde plus de sa colonne sur la voie basse :
   elle tient sur deux lignes, centrée dans l'hexagone, juste sous le libellé « Centre » (ruban posé à 50 % + .72u et non + 1,1u : à + 1,1u il mordait sur le joint de la voie basse).
   Posée sur un ruban d'encre à filets d'or qui passe sur le bas du médaillon (l'octogone est trop petit pour la contenir) ;
   corps .95u (plateau.js imposait .85u, illisible à trois mètres), coupure équilibrée sur deux lignes. */
/* le médaillon et son libellé remontent d'une demi-unité pour laisser au ruban la place de tenir dans la rangée du milieu */
#combat #cb-centre:has(.cv) svg{top:calc(50% - var(--u)*.55)}#combat #cb-centre:has(.cv) .cl{top:calc(var(--u)*-.55)}
#combat #cb-centre .cv{font-family:var(--c-main);font-weight:600;font-size:calc(var(--u)*.95)!important;line-height:1.05!important;white-space:normal!important;text-wrap:balance;text-align:center;
  color:var(--c-os)!important;text-shadow:1px 1px 0 #000;margin:0;position:absolute;left:6%;right:6%;top:calc(50% + var(--u)*.72);max-width:none!important;
  padding:.04em .3em .1em;background:rgba(11,8,7,.86);box-shadow:0 1px 0 rgba(214,178,104,.5),0 -1px 0 rgba(214,178,104,.5)}

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
/* boucle 6 (24 nov.) : la bulle d'intention (bloqueur · ⚔ · voie) remonte d'un tiers d'unité et passe au-dessus des libellés :
   elle ne mord plus sur le nom de l'unité ni sur le libellé de voie de la plaque. Décalage fixe, aucune animation. */
#combat .u .int:not(:empty){translate:0 calc(var(--u)*-.32);z-index:6}
#combat .u.manvise .plaque{box-shadow:0 0 0 3px #fff3c8!important}

/* ── bas de l'écran : mana, pioche, aide, Fin du tour en sceau de cire ── */
#combat #cb-mana.c-papier *{color:var(--c-encre)!important}
#combat #cb-mana .l{font-family:var(--c-fell)!important}
#combat #cb-mana b{font-family:var(--c-goth)!important;color:var(--c-encre)!important}
#combat #cb-mana .mana-p{color:#fff!important;box-shadow:0 0 0 2px var(--c-encre)}
#combat #cb-mana .mp i{box-shadow:0 0 0 2px var(--c-encre)!important}
/* boucle 6 (24 nov.) : les manas de « Ce tour » en petites capitales de la charte, chaque nom collé à sa pastille
   (regroupés par la petite enveloppe de majUnites plus bas) et rangés en lignes souples : plus aucun nom orphelin. */
#combat #cb-mana .l.mz-res{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:calc(var(--u)*.22) calc(var(--u)*.6);
  font-family:var(--c-main)!important;font-variant:small-caps;text-transform:none;letter-spacing:.05em;line-height:1.15;font-size:calc(var(--u)*.95);max-width:calc(var(--u)*10.5);margin-top:calc(var(--u)*.25)}
#combat #cb-mana .mz-m{display:inline-flex;align-items:center;gap:.28em;white-space:nowrap}
#combat #cb-mana .mz-m .mana-p{font-family:var(--c-num);font-variant:normal;font-size:.8em}
#combat #cb-piles.c-papier *{color:var(--c-encre)!important}
#combat #cb-piles span{font-family:var(--c-fell)!important}#combat #cb-piles b{font-family:var(--c-num)!important}
#combat #cb-mana.c-papier::before,#combat #cb-mana.c-papier::after,#combat #cb-piles.c-papier::before,#combat #cb-piles.c-papier::after{display:none!important}
#combat #cb-aide{font-family:var(--c-fell);background:var(--c-encre)!important;border:2px solid var(--c-papier2)!important;border-radius:0!important;color:var(--c-os)!important;backdrop-filter:none!important;transform:rotate(-.4deg)}
/* boucle 4 (22 nov.) : les deux boutons deviennent des sceaux mats, de la famille du sceau du titre.
   Fin du tour : cire rouge assourdie en deux tons, sans reflet blanc, plus petite (5,6u au lieu de 7,6u),
   libellé en petites capitales laiton dans un anneau gravé. Manœuvre : anneau de laiton sur un fond d'encre. */
#combat #cb-main .cc.fin{width:calc(var(--u)*5.6);height:calc(var(--u)*5.6);padding:calc(var(--u)*.55)}
#combat #cb-main .cc.fin:not(.man){border-radius:47% 53% 50% 50%/52% 48% 52% 48%!important;border:0!important;
  background:radial-gradient(circle at 50% 46%,#86332a 0 38%,#7a2a22 52%,#5c1d17 100%)!important;
  box-shadow:inset 0 0 0 calc(var(--u)*.42) #6a231c,inset 0 0 0 calc(var(--u)*.42 + 1px) rgba(30,8,6,.75),inset 0 0 0 calc(var(--u)*.42 + 2px) rgba(201,164,92,.42),
    inset 0 calc(var(--u)*-.18) calc(var(--u)*.3) rgba(30,8,6,.35),2px 3px 0 rgba(0,0,0,.65)!important;backdrop-filter:none!important}
/* boucle 4 bis (22 nov.) : libellé plus clair et plus gras, lisible de loin à la télé sur la cire assourdie */
#combat #cb-main .cc.fin .cn{font-family:var(--c-fell);font-variant:small-caps;text-transform:lowercase;font-size:calc(var(--u)*1.12);font-weight:700;letter-spacing:.07em;line-height:.98;
  color:#f6dc9c!important;text-shadow:0 1px 0 rgba(20,6,4,.95),0 0 3px rgba(30,8,6,.9),0 0 1px rgba(30,8,6,1)!important}
#combat #cb-main .cc.fin.f:not(.man){box-shadow:inset 0 0 0 calc(var(--u)*.42) #6a231c,inset 0 0 0 calc(var(--u)*.42 + 1px) rgba(30,8,6,.75),inset 0 0 0 calc(var(--u)*.42 + 2px) rgba(232,199,127,.7),
    0 0 0 2px #17100a,0 0 0 4px #d9b56a,3px 5px 0 3px rgba(0,0,0,.6)!important}
#combat #cb-main .cc.fin.man{border-radius:50%!important;border:0!important;background:radial-gradient(circle at 50% 45%,#221a14,#120d0a 72%)!important;
  box-shadow:inset 0 0 0 2px #b8924e,inset 0 0 0 calc(var(--u)*.38) #17110c,inset 0 0 0 calc(var(--u)*.38 + 1px) rgba(201,164,92,.45),2px 3px 0 rgba(0,0,0,.65)!important;backdrop-filter:none!important}
#combat #cb-main .cc.fin.man{width:calc(var(--u)*5);height:calc(var(--u)*5);transform:none}#combat #cb-main .cc.fin.man.f{transform:scale(1.08)}
#combat #cb-main .cc.fin.man .cn{font-size:calc(var(--u)*.84);letter-spacing:.02em;color:#e8c983!important;text-shadow:0 1px 0 #000!important}
#combat #cb-main .cc.fin.man.f{box-shadow:inset 0 0 0 2px #e8c77f,inset 0 0 0 calc(var(--u)*.38) #17110c,inset 0 0 0 calc(var(--u)*.38 + 1px) rgba(232,199,127,.7),0 0 0 2px #17100a,0 0 0 4px #d9b56a!important}

/* ── 2.45 (24 nov.) : lisibilité à 3 m (constat du critique : « Tribune », « Bastion », « Source », l'aide illisibles) ── */
html body #combat .pcase .pt{font-size:calc(var(--u)*1.4)!important;letter-spacing:.03em!important}
html body #combat .plmenace{font-size:calc(var(--u)*1.3)!important}
html body #combat #cb-centre .cl{font-size:calc(var(--u)*1.6)!important}
html body #combat #cb-centre .cv{font-size:calc(var(--u)*1.25)!important;line-height:1.1}
html body #combat #cb-allies .u .int,html body #combat #cb-foes .u .int{font-size:calc(var(--u)*1.05)!important}
html body #combat #cb-allies .u:not(.hero):not(.garde) .un,html body #combat #cb-foes .u:not(.chef) .un{font-size:calc(var(--u)*.9)!important;line-height:1.05;letter-spacing:-.02em}
html body #combat .u .bar span{font-size:calc(var(--u)*1)!important}
html body #combat .u .mz-voie{display:none!important}
html body #combat #cb-aide{font-size:calc(var(--u)*1.3)!important}
html body #combat #cb-log{font-size:calc(var(--u)*1.7)!important}
`;document.head.appendChild(st);
/* papier déchiré pour les deux panneaux du bas (même tirage que carnet.js : classe c-papier + clip-path) */
function dech(el,n,ay,ax){if(!el)return;el.classList.add('c-papier');let g=el.id.length*7919+17;const a=()=>(g=(g*1664525+1013904223)>>>0)/4294967296,p=[];
  for(let i=0;i<=n;i++)p.push((i/n*100).toFixed(1)+'% '+(a()*ay).toFixed(2)+'%');
  for(let i=1;i<5;i++)p.push((100-a()*ax).toFixed(2)+'% '+(i*20)+'%');
  for(let i=n;i>=0;i--)p.push((i/n*100).toFixed(1)+'% '+(100-a()*ay).toFixed(2)+'%');
  for(let i=4;i>0;i--)p.push((a()*ax).toFixed(2)+'% '+(i*20)+'%');
  el.style.clipPath='polygon('+p.join(',')+')'}
dech(document.getElementById('cb-mana'),14,3,2.5);dech(document.getElementById('cb-piles'),12,3.5,3);
/* boucle 6 (24 nov.) : après chaque mise à jour des unités, la ligne des manas (« ∞ Gris · 2 Feu · … », texte libre d'economie.js)
   est regroupée en paires pastille + nom. Une seule passe sur six ou sept nœuds, seulement quand le panneau vient d'être réécrit. */
if(typeof majUnites==='function'){const mu0=majUnites;majUnites=function(){const r=mu0.apply(this,arguments);try{
  const l=document.querySelector('#cb-mana .l:last-child');if(l&&!l.classList.contains('mz-res')&&l.querySelector('.mana-p')){let h='',p=null;
    for(const n of Array.from(l.childNodes)){if(n.nodeType===1&&n.classList.contains('mana-p')){if(p)h+='<span class="mz-m">'+p+'</span>';p=n.outerHTML}
      else{const t=(n.textContent||'').replace(/·/g,'').trim();if(p){h+='<span class="mz-m">'+p+(t?'<span>'+t+'</span>':'')+'</span>';p=null}else if(t)h+='<span class="mz-m"><span>'+t+'</span></span>'}}
    if(p)h+='<span class="mz-m">'+p+'</span>';l.innerHTML=h;l.classList.add('mz-res')}}catch(_){}return r}}
/* boucle 6, reprise (24 nov.) : la menace d'une voie ne recouvre plus l'unité qui la tient.
   Constat du testeur : sur la case d'avant occupée, « ➶ 3 → héros » (pastille .mz-menace qu'ecrin.js tire du badge .plmenace de
   plateau.js) se posait sur le haut du portrait et mordait sur le nom de l'unité (« Luciole de nuit » coupé à 1280 × 720).
   La case n'a pas de marge libre (unité de 74 px dans une case de 81 px à 720p) : on retient la troisième solution proposée.
   - Sur l'unité : une pastille d'icône seule par menace (« ➶ 3 », « ⚔ 4 »), empilées au bas du portrait, à gauche :
     jamais sur la plaque (nom, jauge, voie) ni sur la bulle d'intention, toujours au-dessus du portrait.
   - Le texte complet (« ➶ 3 → héros », « ⚔ 4 → Luciole · 2 passent ») passe sur la case d'arrière de la même voie quand
     elle est libre : il se lit dans la voie, du côté du héros, là où vont les coups. Sinon le total « coups attendus » du
     héros le dit déjà.
   Rien de plus à chaque image : on suit seulement les passages de badgesMenace (plateau.js, déjà enveloppé par ecrin.js) et
   de dessinerCases. Le badge d'origine reste caché sur toute case occupée, même si la classe « occupee » manque encore. */
const stM=document.createElement('style');stM.textContent=`
#combat .pcase.mz-tenue .plmenace{display:none!important}
#combat .u>.mz-menace{left:calc(var(--u)*-.35)!important;top:auto!important;bottom:calc(var(--u)*.1);z-index:7;display:flex;flex-direction:column;align-items:flex-start;gap:calc(var(--u)*.12);
  padding:0!important;border:0!important;background:none!important;border-radius:0!important}
#combat .u>.mz-menace i{font-style:normal;font-family:var(--c-num,inherit);font-weight:700;font-size:calc(var(--u)*.78);line-height:1.2;padding:0 .4em;white-space:nowrap;
  color:#ffd3c8;background:#2a0f0c;border:1px solid #c45a4a;border-radius:.6em;box-shadow:1px 1px 0 #000}
#combat .u>.mz-menace i.vol{color:#ffe6b0;background:#2a1d08;border-color:#c9a45c}
#combat .pcase>.mz-voiem{position:absolute;z-index:5;left:4%;right:4%;top:calc(var(--u)*.35);margin:0 auto;width:fit-content;max-width:92%;text-align:center;pointer-events:none;
  font-family:var(--c-main);font-weight:700;font-size:calc(var(--u)*.8);line-height:1.15;color:#ffb0a0;background:rgba(24,8,8,.9);border:1px solid rgba(226,103,90,.7);
  border-radius:calc(var(--u)*.5);padding:.05em .5em .1em;text-shadow:1px 1px 0 #000}
#combat .pcase>.mz-voiem:empty{display:none}
`;document.head.appendChild(stM);
function menacesTenues(){if(typeof CB==='undefined'||!CB||!CB.cases||typeof occupant!=='function')return;
  for(let v=0;v<3;v++){const d=document.getElementById('pc-a'+v+'0');if(!d)continue;const b=d.querySelector('.plmenace'),t=b?b.textContent.trim():'';
    const u=occupant(v,0),tenue=!!(u&&u.el&&u.pv>0);d.classList.toggle('mz-tenue',tenue);
    /* pastilles : l'icône et le nombre de chaque menace, rien d'autre */
    if(tenue){let e=u.el.querySelector(':scope>.mz-menace');const h=t?t.split(' · ').map(x=>x.match(/^([➶⚔✶⚒])\s*(\d+)/)).filter(Boolean)
        .map(m=>'<i'+(m[1]==='➶'?' class="vol"':'')+'>'+m[1]+' '+m[2]+'</i>').join(''):'';
      if(h&&!e){e=document.createElement('span');e.className='mz-menace';u.el.appendChild(e)}if(e&&e.innerHTML!==h)e.innerHTML=h}
    /* le texte complet, sur la case d'arrière libre de la voie */
    const r=document.getElementById('pc-a'+v+'1');if(!r)continue;let w=r.querySelector(':scope>.mz-voiem');const txt=tenue&&t&&!occupant(v,1)?t:'';
    if(txt&&!w){w=document.createElement('span');w.className='mz-voiem';r.appendChild(w)}if(w&&w.textContent!==txt)w.textContent=txt}}
if(typeof badgesMenace==='function'){const bm1=badgesMenace;badgesMenace=function(){const r=bm1.apply(this,arguments);try{menacesTenues()}catch(_){}return r}}
if(typeof dessinerCases==='function'){const dc1=dessinerCases;dessinerCases=function(){const r=dc1.apply(this,arguments);try{menacesTenues()}catch(_){}return r}}
})();
