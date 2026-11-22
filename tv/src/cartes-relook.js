/* MozaWorld : cartes du combat relookées (22 nov. 2026), dans l'esprit des médaillons peints (portraits-combat.js).
   Retour de l'utilisateur : « le look du combat est nice […] les cartes aussi auraient besoin d'un relooking semblable ».
   Ce qui change, en CSS seulement, sur les cartes de la main (#cb-main) :
   - la peinture prend la moitié de la carte au lieu d'un bandeau, et vit : elle dérive lentement dans son cadre
     sur la carte désignée (une seule à la fois, pour la mémoire graphique de la Xbox) ;
   - le nom passe sur un ruban de parchemin qui mord sur la peinture, à l'encre, comme les plaques des unités ;
   - le texte est écrit à l'encre sur un cartouche de parchemin, plus lisible que le blanc sur noir ;
   - un reflet lumineux balaie la peinture de la carte désignée.
   Transform et opacité seulement ; aucune image nouvelle. Les cadres, coins de mana et blasons de cartes-visuel.js sont gardés. */
(function(){
const st=document.createElement('style');st.textContent=`
#cb-main .cc.kcarte .art{height:47%!important;max-height:none!important;overflow:hidden;border-bottom:none!important}
#cb-main .cc.kcarte .kpeint,#cb-main .cc.kcarte .kpeint img{height:100%!important}
#cb-main .cc.kcarte .kpeint img{width:100%;object-fit:cover;transform-origin:50% 40%}

@keyframes krToile{from{transform:scale(1.04) translate(-1.5%,1%)}to{transform:scale(1.12) translate(1.5%,-1.5%)}}
#cb-main .cc.kcarte .art::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:2;
  background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(10,6,4,.55));box-shadow:inset 0 0 calc(var(--u)*.8) rgba(0,0,0,.7)}
#cb-main .cc.kcarte .art::before{content:"";position:absolute;top:0;bottom:0;left:-60%;width:40%;z-index:3;pointer-events:none;opacity:0;
  background:linear-gradient(100deg,transparent,rgba(255,240,200,.45),transparent)}

@keyframes krReflet{0%,55%{transform:translateX(0);opacity:0}62%{opacity:1}85%,100%{transform:translateX(420%);opacity:0}}
#cb-main .cc.kcarte .kband{display:none}
#cb-main .cc.kcarte .cn{position:relative;z-index:4;margin:calc(var(--u)*-1.1) 6% 0!important;padding:.12em .35em!important;min-height:0!important;
  background:linear-gradient(178deg,var(--c-papier,#b59d6c),var(--c-papier2,#9c8455))!important;color:var(--c-encre,#17100a)!important;text-shadow:none!important;
  border:2px solid var(--c-encre,#17100a)!important;border-radius:0!important;box-shadow:2px 3px 0 rgba(0,0,0,.6)!important;transform:rotate(-1deg);
  font-family:var(--c-goth,Georgia,serif)!important;font-size:calc(var(--u)*.98)!important;line-height:1.05!important}
#cb-main .cc.kcarte:nth-child(even) .cn{transform:rotate(1deg)}
#cb-main .cc.kcarte .cn::before,#cb-main .cc.kcarte .cn::after{display:none!important}
#cb-main .cc.kcarte .cz{margin-top:.25em!important;font-size:calc(var(--u)*.62)!important;letter-spacing:.12em}
#cb-main .cc.kcarte .ct{margin:.2em 6% 6%!important;padding:.3em .4em!important;border-radius:0!important;
  background:radial-gradient(ellipse at 50% 30%,#e3d2a6,#c9b383 75%)!important;color:#1d140b!important;text-shadow:none!important;
  border:1px solid rgba(23,16,10,.7)!important;box-shadow:inset 0 0 calc(var(--u)*.6) rgba(90,60,20,.45)!important}
#cb-main .cc.kcarte .ct{font-size:calc(var(--u)*.8)!important;line-height:1.16!important}
#cb-main .cc.kcarte.f .art,#cb-main .cc.kcarte.choisie .art{height:40%!important}
#cb-main .cc.kcarte .ct b{color:#7a1a10!important}
#cb-main .cc.kcarte .ct *{text-shadow:none!important}
@media (prefers-reduced-motion:reduce){#cb-main .cc.kcarte .kpeint img,#cb-main .cc.kcarte .art::before{animation:none!important}}
`;document.head.appendChild(st);
})();
