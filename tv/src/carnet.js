/* MozaWorld 2.31 : interface « Carnet sombre », étape 1, l'écran d'exploration (22 novembre).
   Maquette validée par l'utilisateur le 21 nov. au soir (« C'est bien ») : encre noire, parchemin usé et brûlé aux coins,
   cire rouge, écriture à la main, coups de pinceau acrylique. Pas de tentacules, pas de coulures (retirés à sa demande).
   Ce fichier n'est qu'un habillage : il ne change ni le contenu ni les règles, seulement l'apparence des éléments .hud.
   Poids pour la Xbox : aucune image, aucun filtre, aucun flou (le flou d'arrière-plan des cadres est même retiré) ;
   les bords déchirés sont des clip-path calculés une fois, les papiers sont des dégradés.
   Polices (licence libre OFL) servies depuis le dépôt : img/polices/. ?carnet=0 dans l'adresse rend l'ancienne interface. */
(function(){
if(/[?&]carnet=0/.test(location.search))return;
const P='img/polices/';
const st=document.createElement('style');st.textContent=`
@font-face{font-family:"Grenze Gotisch";font-weight:600;font-display:swap;src:url(${P}grenze-gotisch.woff2) format("woff2")}
@font-face{font-family:"Grenze";font-weight:600;font-display:swap;src:url(${P}grenze-600.woff2) format("woff2")}
@font-face{font-family:"IM Fell English";font-display:swap;src:url(${P}im-fell.woff2) format("woff2")}
@font-face{font-family:"IM Fell English";font-style:italic;font-display:swap;src:url(${P}im-fell-italique.woff2) format("woff2")}
@font-face{font-family:"Caveat";font-weight:600;font-display:swap;src:url(${P}caveat.woff2) format("woff2")}
body.carnet{--c-encre:#17100a;--c-papier:#b59d6c;--c-papier2:#9c8455;--c-os:#e9dcbc;--c-cire:#a3231a;--c-cire2:#d0453a;--c-vert:#2f7f6b;
  --c-goth:"Grenze Gotisch","Cormorant Garamond",Georgia,serif;--c-fell:"IM Fell English","Cormorant Garamond",Georgia,serif;
  --c-num:"Grenze","Cormorant Garamond",Georgia,serif;--c-main:"Caveat","Segoe Script","Comic Sans MS",cursive}
/* la lueur de bougie : les bords de l'écran s'assombrissent (un seul dégradé, sous l'interface) */
.c-bougie{position:fixed;inset:0;z-index:4;pointer-events:none;background:radial-gradient(ellipse at 50% 46%,transparent 52%,rgba(8,5,3,.38) 82%,rgba(8,5,3,.72) 100%)}
body.nohud .c-bougie,body.jeu-ouvert .c-bougie{display:none}
/* le papier : dégradés seulement ; coins brûlés ; bord déchiré posé par le script (clip-path) */
body.carnet .c-papier,body.carnet #invite:not(:empty){color:var(--c-encre);border:0!important;border-radius:0!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
  background:
   radial-gradient(circle at 0 0,rgba(20,10,4,.85),rgba(60,30,10,.35) 9%,transparent 17%),
   radial-gradient(circle at 100% 100%,rgba(20,10,4,.8),rgba(60,30,10,.3) 8%,transparent 15%),
   radial-gradient(circle at 100% 0,rgba(40,20,8,.45),transparent 12%),
   radial-gradient(ellipse at 28% 60%,rgba(120,86,40,.28),transparent 42%),
   radial-gradient(ellipse at 78% 30%,rgba(232,214,170,.22),transparent 46%),
   linear-gradient(178deg,var(--c-papier),var(--c-papier2))!important;
  box-shadow:inset 0 0 0 2px rgba(23,16,10,.55),inset 0 0 calc(var(--u)*1.2) rgba(60,36,12,.55)!important;text-shadow:none!important}
body.carnet .c-papier *,body.carnet #invite *{text-shadow:none!important}

/* ── barre du haut : une bande de parchemin, encre noire ── */
body.carnet .hud.etat{padding-bottom:calc(var(--u)*.75)!important}
body.carnet .hud.etat *{color:var(--c-encre)!important}
body.carnet .hud.etat .bandeau{border:0}
body.carnet .hud.etat .ilot{background:none!important;border:0!important;box-shadow:none!important}
body.carnet .hud.etat .bandeau .m,body.carnet .hud.etat .bandeau .d,body.carnet .hud.etat .fixe b{font-family:var(--c-num)!important;font-weight:600!important;font-size:calc(var(--u)*1.3)!important;font-variant-numeric:lining-nums!important;font-feature-settings:normal!important}
body.carnet .hud.etat .bandeau .d small,body.carnet .hud.etat .l,body.carnet .hud.etat .titre{font-family:var(--c-main)!important;font-style:normal!important;font-size:calc(var(--u)*1.15)!important;letter-spacing:0!important;text-transform:none!important;opacity:.85}
body.carnet .hud.etat .bandeau .m i{box-shadow:0 0 0 2px var(--c-encre),inset -.12em -.14em 0 rgba(0,0,0,.28),inset .1em .1em 0 rgba(255,255,255,.35)!important}
body.carnet .hud.etat .sep{background:none!important;border:0!important;width:auto!important;height:auto!important}
body.carnet .hud.etat .sep::before{content:"✶";color:var(--c-cire)!important;font-size:calc(var(--u)*1)}
body.carnet .hud.etat .sep>*{display:none}
body.carnet .hud.etat .dg{font-family:var(--c-goth)!important;font-size:calc(var(--u)*1.2)!important;letter-spacing:.04em;border:2px solid currentColor!important;border-radius:0!important;transform:rotate(-2deg)}
body.carnet .hud.etat .dg.faible{color:#2c5a2a!important}body.carnet .hud.etat .dg.reel{color:#7a4a08!important}body.carnet .hud.etat .dg.mortel{color:var(--c-cire)!important}
body.carnet .hud.etat .i-men *{color:#7d1710!important}
body.carnet .hud.etat .vie{border-color:var(--c-cire)!important;box-shadow:none!important}body.carnet .hud.etat .vie.on{background:var(--c-cire)!important}

/* ── titre de zone et annonces : gothique blanc d'os, ombre de cire, coup de pinceau derrière ── */
/* 2.42 (22 nov., « Enlève les affiches lors des montées de zone et autre, ça prend trop d'espace, restons plus sobre […] tout en gardant le style ») :
   toutes les annonces (entrée de zone, palier, secret, horde, rival…) tiennent sur un petit billet de papier sous la barre du haut,
   au lieu du grand titre au milieu de l'écran. Plus de coup de pinceau ni de sceau ici. */
body.carnet .hud.toast{top:calc(var(--u)*3.6)!important;left:50%!important;transform:translateX(-50%) rotate(-.4deg)!important;width:auto!important;min-width:calc(var(--u)*16);max-width:min(calc(var(--u)*40),70vw);
  padding:calc(var(--u)*.85) calc(var(--u)*1.8) calc(var(--u)*.95)!important;text-align:center;color:var(--c-encre);
  background:radial-gradient(circle at 0 0,rgba(20,10,4,.7),transparent 16%),radial-gradient(circle at 100% 100%,rgba(20,10,4,.65),transparent 14%),linear-gradient(178deg,var(--c-papier),var(--c-papier2));
  box-shadow:inset 0 0 0 2px rgba(23,16,10,.55);
  clip-path:polygon(0 6%,7% 0,22% 5%,40% 1%,61% 6%,82% 0,100% 5%,99% 50%,100% 95%,84% 100%,63% 94%,41% 100%,20% 95%,6% 100%,1% 94%,2% 50%)}
body.carnet .toast .t1{font-family:var(--c-fell);font-weight:400;font-size:calc(var(--u)*.95)!important;color:#6d130d!important;letter-spacing:.14em;text-shadow:none!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.carnet .toast .t2{font-family:var(--c-goth);font-weight:600;font-size:calc(var(--u)*1.7)!important;line-height:1.1;color:var(--c-encre)!important;text-shadow:none!important;margin:.05em 0!important;animation:none!important;filter:none!important}
body.carnet .toast .t3{font-family:var(--c-main);font-style:normal;font-weight:600;font-size:calc(var(--u)*1.2)!important;line-height:1.15!important;color:#3a2a14!important;text-shadow:none!important;animation:none!important;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
body.carnet .toast .t3:empty{display:none}
body.carnet .toast .t1{animation:none!important}
/* en interface épurée, la grande fiche de zone ne s'ouvre plus à chaque entrée de zone : le billet donne le nom, RB montre la fiche */
body.carnet.epure .hud.cart{opacity:0!important}

/* ── fiche de zone (en haut à gauche) : une page épinglée ── */
body.carnet .hud.cart{padding:calc(var(--u)*1.2) calc(var(--u)*1.4) calc(var(--u)*1.3);transform:rotate(-1deg);top:calc(var(--my) + var(--u)*3)}
body.carnet .hud.cart *{color:var(--c-encre)!important}
body.carnet .hud.cart .sur{font-family:var(--c-fell);color:var(--c-cire)!important;letter-spacing:.16em}
body.carnet .hud.cart .nom{font-family:var(--c-goth);font-size:calc(var(--u)*2.5)}
body.carnet .hud.cart .palier{font-family:var(--c-main);font-style:normal;font-size:calc(var(--u)*1.45);line-height:1.15}
body.carnet .hud.cart .filet{background:var(--c-encre);height:2px;width:70%;clip-path:polygon(0 30%,20% 0,45% 60%,70% 10%,100% 50%,80% 100%,40% 80%,10% 100%)}
body.carnet .hud.cart .maitre{font-family:var(--c-fell);font-size:calc(var(--u)*1.1)}
body.carnet .hud.cart .maitre b{color:var(--c-cire)!important;font-weight:400}

/* ── jauge des pôles : une languette tordue ── */
body.carnet .hud.jauge{padding:calc(var(--u)*.7) calc(var(--u)*2);transform:translateX(-50%) rotate(-.7deg)}
body.carnet .hud.jauge .pole{font-family:var(--c-goth);font-size:calc(var(--u)*1.8)}
body.carnet .hud.jauge .pole.m{color:#274a63}body.carnet .hud.jauge .pole.p{color:#8a3d0c}
body.carnet .hud.jauge .pip{border:2px solid var(--c-encre);border-radius:1px;box-shadow:none!important;width:calc(var(--u)*.8);height:calc(var(--u)*.8)}
body.carnet .hud.jauge .pip:nth-child(odd){transform:rotate(41deg)}body.carnet .hud.jauge .pip:nth-child(3n){transform:rotate(50deg) translateY(1px)}
body.carnet .hud.jauge .pip.z{border-color:var(--c-cire)}
body.carnet .hud.jauge .pip.on.m{background:#3a6c8c;border-color:var(--c-encre)}body.carnet .hud.jauge .pip.on.p{background:#c0661e;border-color:var(--c-encre)}
body.carnet .hud.jauge .pip.cur{transform:rotate(45deg) scale(1.55);background:var(--c-cire);border-color:#5e0f0a}
body.carnet .hud.jauge .niv{font-family:var(--c-num);color:var(--c-encre)}

/* ── invite d'action : un billet, le bouton en pastille de cire ── */
body.carnet .hud.invite:not(:empty){padding:calc(var(--u)*.5) calc(var(--u)*1.5) calc(var(--u)*.55);font-family:var(--c-fell);font-size:calc(var(--u)*1.55);transform:translateX(-50%) rotate(.6deg)}
body.carnet .hud.invite .ok,body.carnet .hud.invite .bt{background:radial-gradient(circle at 36% 30%,#6fae4f,#3d7a2c 55%,#234c18)!important;color:#fff8e0!important;font-family:var(--c-num);border:2px solid var(--c-encre);border-radius:50%}
body.carnet .hud.invite .fl{color:var(--c-cire)}
body.carnet .hud.invite.attente{color:#4a3a22}

/* ── minicarte : médaillon cerclé d'encre et de papier, étiquette de papier ── */
body.carnet .hud.carte.mc2 canvas{filter:none;box-shadow:0 0 0 calc(var(--u)*.22) var(--c-encre),0 0 0 calc(var(--u)*.62) var(--c-papier2),0 0 0 calc(var(--u)*.8) var(--c-encre),4px 6px 0 calc(var(--u)*.8) rgba(0,0,0,.45)}
body.carnet .hud.carte.mc2 .mc-nom{margin-top:calc(var(--u)*1.1);padding:calc(var(--u)*.35) calc(var(--u)*1.3) calc(var(--u)*.4);background-clip:border-box;transform:rotate(-1.5deg)}
body.carnet .hud.carte.mc2 .mc-nom b{font-family:var(--c-goth);color:var(--c-encre)!important;font-size:calc(var(--u)*1.4)}
body.carnet .hud.carte.mc2 .mc-nom span{font-family:var(--c-fell);color:#5a3a16!important;letter-spacing:.08em;font-size:calc(var(--u)*.95)}
body.carnet .hud.carte.mc2 .mc-nom .m{color:#274a63!important}body.carnet .hud.carte.mc2 .mc-nom .p{color:#8a3d0c!important}

/* ── aides des commandes : notes à la main ── */
body.carnet .hud.aide{font-family:var(--c-main);font-weight:600;font-size:calc(var(--u)*1.3);line-height:1.5;color:#3a2a14;padding:calc(var(--u)*.9) calc(var(--u)*1.4);transform:rotate(.8deg)}
body.carnet .hud.aide i{color:var(--c-encre);font-family:var(--c-fell);font-size:.85em}
body.carnet .hud.aide .bt{box-shadow:0 0 0 2px var(--c-encre)}
body.carnet #xbox-aide.c-papier{font-family:var(--c-fell);border:0!important}
body.carnet #xbox-aide.c-papier b{color:var(--c-cire)!important}
body.carnet .mz-bascule{font-family:var(--c-fell);background:var(--c-encre);border:2px solid var(--c-papier2);color:var(--c-os)}
`;document.head.appendChild(st);
const B=document.body;B.classList.add('carnet');
const bougie=document.createElement('div');bougie.className='c-bougie';B.appendChild(bougie);

/* bord déchiré : un polygone en pourcentages, tiré une fois par élément (graine fixe : le même dessin à chaque partie) */
let g=20261122;const alea=()=>(g=(g*1664525+1013904223)>>>0)/4294967296;
function dechire(el,opt){if(!el)return;const o=Object.assign({pas:26,ax:.9,ay:5,haut:true,cotes:true},opt||{});el.classList.add('c-papier');
  const n=o.pas,pts=[],j=a=>(alea()*a).toFixed(2);
  for(let i=0;i<=n;i++)pts.push((i/n*100).toFixed(1)+'% '+(o.haut?j(o.ay):0)+'%');                              /* haut */
  if(o.cotes)for(let i=1;i<5;i++)pts.push((100-alea()*o.ax).toFixed(2)+'% '+(i*20)+'%');                          /* droite */
  for(let i=n;i>=0;i--)pts.push((i/n*100).toFixed(1)+'% '+(100-alea()*o.ay).toFixed(2)+'%');                      /* bas */
  if(o.cotes)for(let i=4;i>0;i--)pts.push(j(o.ax)+'% '+(i*20)+'%');                                               /* gauche */
  el.style.clipPath='polygon('+pts.join(',')+')'}
const q=s=>document.querySelector(s);
dechire(q('.hud.etat'),{pas:64,ay:14,haut:false,cotes:false});
dechire(q('.hud.cart'),{pas:18,ay:2.2,ax:1.4});
dechire(q('.hud.jauge'),{pas:30,ay:11,ax:.8});
dechire(q('#invite'),{pas:16,ay:12,ax:1.2});
for(const a of document.querySelectorAll('.hud.aide'))dechire(a,{pas:16,ay:3.5,ax:1.4});
/* la minicarte et la note Xbox sont créées par d'autres fichiers, parfois plus tard : on les habille quand elles existent */
let essais=0;const tard=setInterval(()=>{const n=q('.hud.carte .mc-nom'),x=q('#xbox-aide');
  if(n&&!n.classList.contains('c-papier'))dechire(n,{pas:12,ay:9,ax:1.6});
  if(x&&!x.classList.contains('c-papier'))dechire(x,{pas:30,ay:4,ax:.7});
  if(++essais>40||(n&&x))clearInterval(tard)},500);
})();
