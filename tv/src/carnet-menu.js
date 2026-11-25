/* MozaWorld 2.33 : interface « Carnet sombre », étape 3, le menu pause et ses sous-menus (22 novembre).
   La boîte du menu devient une page de carnet : parchemin usé aux coins brûlés, titre gothique, sceau de cire,
   options à l'encre, l'option choisie entourée à l'encre rouge. Habillage seulement : mêmes options, même ordre,
   mêmes classes (.choix .opt, .opt.f), mêmes commandes. Aucune image, aucun filtre, aucun flou.
   Les cartes à jouer affichées dans le Grimoire et le Paquet gardent leurs cadres (cartes-visuel.js).
   Les onglets LB/RB et le panneau « Votre royaume » de la maquette seraient une réorganisation du menu : non faits ici. */
(function(){
if(!document.body.classList.contains('carnet'))return;
const st=document.createElement('style');st.textContent=`
#menu.ecran{background:radial-gradient(ellipse at 50% 50%,rgba(8,5,3,.55),rgba(8,5,3,.94))!important}
#menu .boite{color:var(--c-encre);border:0!important;border-radius:0!important;backdrop-filter:none!important;
  padding:calc(var(--u)*2) calc(var(--u)*3.2) calc(var(--u)*2.2)!important;
  background:
   radial-gradient(circle at 0 0,rgba(20,10,4,.85),rgba(60,30,10,.35) 5%,transparent 10%),
   radial-gradient(circle at 100% 100%,rgba(20,10,4,.8),rgba(60,30,10,.3) 5%,transparent 9%),
   radial-gradient(circle at 0 100%,rgba(40,20,8,.5),transparent 7%),
   radial-gradient(ellipse at 22% 64%,rgba(120,86,40,.25),transparent 40%),
   radial-gradient(ellipse at 80% 28%,rgba(232,214,170,.2),transparent 46%),
   repeating-linear-gradient(180deg,transparent 0 calc(var(--u)*11),rgba(60,36,12,.14) calc(var(--u)*11) calc(var(--u)*11 + 2px)),
   linear-gradient(178deg,var(--c-papier),var(--c-papier2))!important;
  box-shadow:inset 0 0 0 2px rgba(23,16,10,.55),inset 0 0 calc(var(--u)*2.4) rgba(60,36,12,.55)!important}
#menu .boite::before{display:none!important}
#menu .boite>.sur{font-family:var(--c-fell);color:var(--c-cire)!important;letter-spacing:.3em;text-shadow:none!important}
#menu .boite h2{font-family:var(--c-goth);font-size:calc(var(--u)*3.6);color:var(--c-encre)!important;text-shadow:3px 3px 0 rgba(163,35,26,.35)!important;margin:.05em 0 .1em}
#menu .boite h2::after{height:3px!important;background:var(--c-encre)!important;border:0!important;width:min(46%,calc(var(--u)*22))!important;margin:.12em auto 0!important;
  clip-path:polygon(0 40%,12% 0,30% 55%,52% 5%,74% 60%,90% 10%,100% 50%,86% 100%,60% 70%,36% 100%,14% 75%)}
/* le sceau de cire, en haut à droite de la page */
#menu .boite::after{content:"✶";position:absolute;right:calc(var(--u)*2.6);top:calc(var(--u)*1.5);width:calc(var(--u)*4.2);height:calc(var(--u)*4.2);border-radius:46% 54% 50% 50%/52% 47% 53% 48%;
  display:grid;place-items:center;font:600 calc(var(--u)*2.4)/1 var(--c-fell);color:#5e0f0a;text-shadow:1px 1px 0 rgba(255,150,130,.45);transform:rotate(12deg);
  background:radial-gradient(circle at 36% 30%,#e0584a,var(--c-cire) 46%,#6d130d 100%);box-shadow:inset 0 0 0 calc(var(--u)*.4) rgba(109,19,13,.55),2px 3px 0 rgba(0,0,0,.5);pointer-events:none}
#menu .boite p{font-family:var(--c-fell);color:var(--c-encre)!important;text-shadow:none!important}
#menu .boite .petit{font-family:var(--c-fell)!important;font-size:calc(var(--u)*1.15)!important;color:#3a2a14!important}
#menu .boite>#menu-corps>p b{color:#5e0f0a}
#menu .mana-p{box-shadow:0 0 0 2px var(--c-encre)}
/* les options : à l'encre ; celle qui est choisie est entourée en rouge */
#menu .opt{border:2px solid transparent!important;border-radius:48% 52% 50% 50%/60% 40% 60% 40%!important;background:none!important;box-shadow:none!important;color:var(--c-encre)!important;
  font-family:var(--c-goth);font-size:calc(var(--u)*1.6)!important;padding:calc(var(--u)*.5) calc(var(--u)*1.6)!important;text-shadow:none!important}
#menu .opt .ic{background:none!important;border:2px solid var(--c-encre)!important;box-shadow:none!important;color:var(--c-encre)!important;width:calc(var(--u)*2.1)!important;height:calc(var(--u)*2.1)!important;font-size:calc(var(--u)*1.15)!important;border-radius:46% 54% 50% 50%/52% 47% 53% 48%!important}
#menu .opt .d{font-family:var(--c-main)!important;font-style:normal!important;font-weight:600;font-size:calc(var(--u)*1.3)!important;color:#4a3414!important}
#menu .opt.f{border-color:var(--c-cire)!important;background:rgba(163,35,26,.13)!important;transform:rotate(-.35deg)!important;box-shadow:inset 0 0 0 1px rgba(163,35,26,.5)!important}
#menu .opt.f .ic{background:var(--c-cire)!important;border-color:#5e0f0a!important;color:#fff3da!important}
#menu .opt.f .d{color:#5e0f0a!important}
#menu .opt.off{opacity:.45}
#menu .opt.m .ic{color:#274a63!important}#menu .opt.p .ic{color:#8a3d0c!important}
#menu .choix{align-content:start}#menu .opt{align-self:start}
#menu .choix{scrollbar-color:var(--c-encre) transparent}
#menu input,#menu select,#menu textarea{background:rgba(233,220,188,.6);color:var(--c-encre);border:2px solid var(--c-encre);font-family:var(--c-fell)}
/* l'écran titre, accordé au carnet (le texte ne change pas) */
#seuil.ecran{background:radial-gradient(ellipse at 50% 50%,rgba(8,5,3,.6),rgba(8,5,3,.95))!important}
#seuil .boite>.sur{font-family:var(--c-fell);color:var(--c-os)!important;letter-spacing:.3em;text-shadow:2px 2px 0 #000!important}
#seuil h1{font-family:var(--c-goth);font-weight:600;color:var(--c-os);text-shadow:4px 4px 0 var(--c-cire),7px 7px 0 #0a0605!important}
#seuil .boite p{font-family:var(--c-fell);color:var(--c-os)}
#seuil .boite .petit{font-family:var(--c-main)!important;font-weight:600;font-size:calc(var(--u)*1.35)!important;color:var(--c-os)!important}
#seuil .opt{border:2px solid var(--c-encre)!important;border-radius:0!important;color:var(--c-encre)!important;font-family:var(--c-goth);font-size:calc(var(--u)*1.7)!important;text-shadow:none!important;
  background:radial-gradient(circle at 0 0,rgba(20,10,4,.7),transparent 22%),radial-gradient(circle at 100% 100%,rgba(20,10,4,.65),transparent 20%),linear-gradient(178deg,var(--c-papier),var(--c-papier2))!important;
  box-shadow:3px 4px 0 rgba(0,0,0,.6)!important;transform:rotate(-.6deg)!important;clip-path:polygon(0 5%,9% 0,28% 6%,50% 1%,74% 7%,100% 2%,99% 52%,100% 96%,80% 100%,58% 94%,34% 100%,12% 95%,1% 100%,2% 48%)}
#seuil .opt .ic{background:var(--c-cire)!important;border:2px solid #5e0f0a!important;color:#fff3da!important;box-shadow:none!important}
/* 25 nov. (2.49.1) : le clip-path du papier coupait l'anneau rouge, le choix ne se voyait pas à la manette ; on marque donc l'intérieur, et la liste défile */
#seuil .opt.f{box-shadow:inset 0 0 0 4px var(--c-cire),3px 4px 0 3px rgba(0,0,0,.6)!important;background:linear-gradient(90deg,rgba(163,35,26,.38),rgba(163,35,26,.12) 60%),linear-gradient(178deg,var(--c-papier),var(--c-papier2))!important;transform:rotate(-.6deg) scale(1.06)!important}
#seuil .opt.f .ic{background:#fff3da!important;color:var(--c-cire)!important}
#seuil-choix{max-height:44vh;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;padding:.6em 1.2em}
#seuil .opt .d{font-family:var(--c-main)!important;font-style:normal!important;color:#4a3414!important}
`;document.head.appendChild(st);
/* bord déchiré de la page (un seul tirage, graine fixe) */
const bo=document.querySelector('#menu .boite');if(bo){let g=7331;const a=()=>(g=(g*1664525+1013904223)>>>0)/4294967296,p=[],n=40,ay=1.1,ax=.7;
  for(let i=0;i<=n;i++)p.push((i/n*100).toFixed(1)+'% '+(a()*ay).toFixed(2)+'%');
  for(let i=1;i<10;i++)p.push((100-a()*ax).toFixed(2)+'% '+(i*10)+'%');
  for(let i=n;i>=0;i--)p.push((i/n*100).toFixed(1)+'% '+(100-a()*ay).toFixed(2)+'%');
  for(let i=9;i>0;i--)p.push((a()*ax).toFixed(2)+'% '+(i*10)+'%');
  bo.style.clipPath='polygon('+p.join(',')+')'}
})();
