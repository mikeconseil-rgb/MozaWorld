/* MozaWorld 2.5 : l'écrin (17 nov., « retravaille les interfaces pour être plus jolies », consigne : interface classieuse).
   Une seule feuille qui habille tout : cadres à filets d'or et coins ornés, titres soulignés d'un fleuron, menus en lignes
   de manuscrit (médaillon pour l'icône, liseré lumineux sur le choix), bandeau en tableau, combat et mue mis en scène.
   Les cartes elles-mêmes (.kcarte, .cc) restent au fil du visuel des cartes : rien ici ne change leur taille. */
const MZ_VERSION='2.45';
(()=>{
  /* coin orné : filet en équerre, petit losange et volute ; tourné pour les quatre coins */
  const coin=r=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 34 34'><g transform='rotate(${r} 17 17)' fill='none' stroke='%23e8c77f' stroke-width='1.2'><path d='M2 30V6a4 4 0 0 1 4-4h24'/><path d='M6 26V9a3 3 0 0 1 3-3h17' stroke-opacity='.45'/><path d='M2 12q6 0 6-6' stroke-opacity='.7'/></g><g transform='rotate(${r} 17 17)'><path d='M5 5l2.2-2.2L9.4 5 7.2 7.2z' fill='%23e8c77f'/></g></svg>`).replace(/%2523/g,'%23')}")`;
  const losange=`url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M6 0.5L11.5 6 6 11.5 0.5 6z' fill='#e8c77f'/><path d='M6 3L9 6 6 9 3 6z' fill='#0f0d12'/></svg>")}")`;
  const C=[coin(0),coin(90),coin(270),coin(180)];
  const coins=`${C[0]} top left / calc(var(--u)*2.2) no-repeat, ${C[1]} top right / calc(var(--u)*2.2) no-repeat, ${C[2]} bottom left / calc(var(--u)*2.2) no-repeat, ${C[3]} bottom right / calc(var(--u)*2.2) no-repeat`;
  const st=document.createElement('style');st.id='ecrin';st.textContent=`
:root{--or:#e8c77f;--or2:#c9a45c;--nuit:#0f0d12;--nuit2:#17141b;--filet:rgba(201,164,92,.42)}
/* ---- cadres du monde (cartouche d'état, minicarte, aide, jauge) ---- */
.cadre{background:${coins},linear-gradient(180deg,rgba(23,20,27,.78),rgba(13,12,15,.82));border:1px solid var(--filet);border-radius:2px;
  box-shadow:inset 0 0 0 calc(var(--u)*.35) rgba(13,12,15,.55),inset 0 0 0 calc(var(--u)*.4) rgba(201,164,92,.16),0 10px 34px rgba(0,0,0,.45)}
.etat{padding:calc(var(--u)*1.1) calc(var(--u)*1.5)}
.etat .l{font-size:calc(var(--u)*.8)}
.jauge{padding:calc(var(--u)*.8) calc(var(--u)*2)}
.aide{line-height:1.7}
/* minicarte : médaillon carré, fond de vélin sombre */
.carte{padding:calc(var(--u)*.9)}
.carte canvas{background:radial-gradient(circle at 50% 45%,rgba(201,164,92,.10),rgba(13,12,15,.0) 70%);border-radius:2px}
.carte .lg{border-top:1px solid rgba(201,164,92,.22);margin-top:calc(var(--u)*.4);padding-top:calc(var(--u)*.45)}
/* cartouche de zone : fleuron sous le nom */
.filet{height:1px;width:calc(var(--u)*9);background:linear-gradient(90deg,var(--or),rgba(232,199,127,.2) 70%,transparent);position:relative;margin:.65em 0}
.filet::after{content:"";position:absolute;left:calc(var(--u)*-.1);top:50%;width:calc(var(--u)*.6);height:calc(var(--u)*.6);background:var(--or);transform:translateY(-50%) rotate(45deg);box-shadow:0 0 8px rgba(232,199,127,.7)}
/* ---- bandeau : un petit tableau, titre à gauche, valeurs à droite ---- */
.bandeau{gap:calc(var(--u)*.55);padding-bottom:calc(var(--u)*.8);margin-bottom:calc(var(--u)*.4);border-bottom:0;
  background:linear-gradient(90deg,transparent,rgba(201,164,92,.45),transparent) bottom/100% 1px no-repeat}
.bandeau .ligne{justify-content:flex-end;padding:calc(var(--u)*.15) 0}
.bandeau .ligne+.ligne{background:linear-gradient(90deg,transparent,rgba(201,164,92,.14) 30%,rgba(201,164,92,.14) 70%,transparent) top/100% 1px no-repeat;padding-top:calc(var(--u)*.4)}
.bandeau .titre{margin-right:auto;font-size:calc(var(--u)*.78);color:var(--or2)}
.bandeau .d span{color:var(--or)}
/* ---- écrans (menus, Pierre, mue, Grimoire, sauvegardes) ---- */
.ecran{background:radial-gradient(ellipse at 50% 45%,rgba(20,17,24,.55),rgba(9,8,11,.94) 75%)}
.boite{position:relative;background:${coins},radial-gradient(ellipse at 50% 0%,rgba(201,164,92,.10),transparent 55%),linear-gradient(180deg,rgba(25,21,28,.96),rgba(12,11,14,.97));
  border:1px solid rgba(201,164,92,.55);border-radius:2px;
  box-shadow:inset 0 0 0 calc(var(--u)*.45) rgba(12,11,14,.9),inset 0 0 0 calc(var(--u)*.5) rgba(201,164,92,.22),0 40px 100px rgba(0,0,0,.7)}
.boite>.sur{text-align:center;color:var(--or2)}
.boite h2,#seuil h1{text-align:center;letter-spacing:.01em;text-shadow:0 2px 22px rgba(232,199,127,.18)}
.boite h2{margin-bottom:.15em}
.boite h2::after,.orne{content:"";display:block;height:calc(var(--u)*1.2);margin:.3em auto 0;width:min(70%,calc(var(--u)*30));
  background:linear-gradient(90deg,transparent,var(--or2) 35%,transparent 47%,transparent 53%,var(--or2) 65%,transparent) center/100% 1px no-repeat,
  ${losange} center/calc(var(--u)*1.1) calc(var(--u)*1.1) no-repeat}
.orne{font-size:0}.orne *{display:none}
#menu-corps>p,#menu-corps>.petit{text-align:center}
#menu-corps .petit{max-width:62em;margin-left:auto;margin-right:auto}
/* choix : lignes de manuscrit */
.choix{gap:calc(var(--u)*.55)}
.opt{border:1px solid rgba(201,164,92,.18);border-left:3px solid rgba(201,164,92,.35);border-radius:1px;
  background:linear-gradient(90deg,rgba(239,231,214,.05),rgba(239,231,214,.015) 60%,transparent);padding:calc(var(--u)*.8) calc(var(--u)*1.3);transition:background .18s,border-color .18s,box-shadow .18s}
.opt .ic{display:inline-grid;place-items:center;width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);flex:none;border-radius:50%;font-size:calc(var(--u)*1.35);
  border:1px solid rgba(201,164,92,.45);background:radial-gradient(circle at 50% 35%,rgba(232,199,127,.16),rgba(13,12,15,.6));box-shadow:inset 0 0 0 2px rgba(13,12,15,.7)}
.opt .d{font-style:italic;font-family:var(--titre);font-size:calc(var(--u)*1.2)}
.opt.f{transform:none;border-color:rgba(232,199,127,.7);border-left-color:var(--or);
  background:linear-gradient(90deg,rgba(201,164,92,.34),rgba(201,164,92,.12) 55%,rgba(201,164,92,.04));
  box-shadow:0 0 0 1px rgba(232,199,127,.25),0 0 calc(var(--u)*2) rgba(232,199,127,.16),inset 0 1px 0 rgba(255,236,190,.18)}
.opt.f .ic{border-color:var(--or);color:#fff3d6;background:radial-gradient(circle at 50% 35%,rgba(232,199,127,.55),rgba(120,90,40,.5));box-shadow:0 0 12px rgba(232,199,127,.55)}
.opt.f .d{color:var(--ivoire)}
.opt.off{opacity:.38;border-left-color:rgba(120,110,95,.4)}
.choix::-webkit-scrollbar{width:6px}.choix::-webkit-scrollbar-thumb{background:rgba(201,164,92,.5);border-radius:3px}.choix::-webkit-scrollbar-track{background:rgba(201,164,92,.08)}
/* titre */
#seuil .boite{background:none;box-shadow:none;border:0}
#seuil h1{font-size:calc(var(--u)*5.6)}
#seuil .orne{margin-bottom:1em}
#seuil .opt{justify-content:flex-start}
/* ---- mue : la carte en majesté, le texte à côté ---- */
.mue-corps{display:grid;grid-template-columns:auto 1fr;gap:calc(var(--u)*3);align-items:center;margin-top:calc(var(--u)*1)}
.mue-corps.sans{grid-template-columns:1fr;text-align:center}
.mue-corps .cartes{position:relative;padding:calc(var(--u)*2.2) calc(var(--u)*2.6)!important;
  background:radial-gradient(ellipse at 50% 50%,rgba(232,199,127,.32),rgba(232,199,127,.08) 45%,transparent 70%)}
.mue-corps .cartes::before{content:"";position:absolute;inset:0;background:repeating-conic-gradient(from 0deg,rgba(232,199,127,.10) 0 4deg,transparent 4deg 15deg);
  -webkit-mask:radial-gradient(circle,#000 20%,transparent 68%);mask:radial-gradient(circle,#000 20%,transparent 68%);animation:mueRayons 40s linear infinite;pointer-events:none}
@keyframes mueRayons{to{transform:rotate(360deg)}}
.mue-corps .txt p{text-align:left}
.mue-corps .palier-mue{font-family:var(--titre);font-size:calc(var(--u)*4.2);font-weight:600;line-height:1;color:var(--or);text-shadow:0 0 24px rgba(232,199,127,.35)}
.mue-corps .palier-mue small{display:block;font-size:.3em;letter-spacing:.2em;text-transform:uppercase;color:var(--sable);margin-top:.4em}
/* ---- combat : panneaux du bas ---- */
.cb-mana,.cb-piles{background:${coins},linear-gradient(180deg,rgba(25,21,28,.9),rgba(12,11,14,.92))!important;border:1px solid rgba(201,164,92,.45)!important;border-radius:2px!important;
  box-shadow:inset 0 0 0 calc(var(--u)*.3) rgba(12,11,14,.85),inset 0 0 0 calc(var(--u)*.35) rgba(201,164,92,.18)}
.cb-bas{grid-template-columns:calc(var(--u)*13) 1fr calc(var(--u)*9)}
.cb-mana{padding:calc(var(--u)*.8) calc(var(--u)*.9)!important}
.cb-mana .l:last-child{letter-spacing:.06em;line-height:1.7;text-align:center;font-size:calc(var(--u)*.78)}
.cb-piles{padding:calc(var(--u)*.8) calc(var(--u)*1.1)!important}
.cb-piles span{display:flex;justify-content:space-between;align-items:baseline;gap:.8em}
.cb-tete h2,.cb-tete .t{text-shadow:0 2px 22px rgba(232,199,127,.2)}
/* Boucle 1 (19 novembre 2026) : le mana du tour en grille de pastilles alignées (5 par rang au plus, rangs centrés) */
.cb-mana .mp{display:grid;grid-template-columns:repeat(var(--n,5),calc(var(--u)*1.05));gap:calc(var(--u)*.38);justify-content:center;max-width:none;margin:.15em 0 .1em}
.cb-mana .mp:not(:has(i:nth-child(2))){--n:1}.cb-mana .mp:has(i:nth-child(2)):not(:has(i:nth-child(3))){--n:2}
.cb-mana .mp:has(i:nth-child(3)):not(:has(i:nth-child(4))){--n:3}.cb-mana .mp:has(i:nth-child(4)):not(:has(i:nth-child(5))){--n:4}
.cb-mana .mp i{width:calc(var(--u)*1.05);height:calc(var(--u)*1.05);transform:none;border-radius:50%;box-sizing:border-box;border:1px solid rgba(245,220,156,.75);background:radial-gradient(circle at 50% 40%,rgba(0,0,0,.2),rgba(0,0,0,.55))}
.cb-mana .mp i.on{background:radial-gradient(circle at 38% 32%,#fff6d6,#e8c77f 45%,#9c7834);border-color:#f5dc9c;box-shadow:0 0 8px rgba(232,199,127,.7)}
/* ---- 2.5.1 (retour de test du 18 nov. : « le bandeau est bien trop grand, en haut, sombre et efficace, une barre ») ----
   tout l'état tient sur une seule barre sombre en haut de l'écran */
.hud.etat{top:0;left:0;right:0;bottom:auto;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:0;text-align:left;
  padding:calc(var(--u)*.35) var(--mx);background:linear-gradient(180deg,rgba(8,7,10,.92),rgba(8,7,10,.78));border:0;border-bottom:1px solid rgba(201,164,92,.38);border-radius:0;
  box-shadow:0 4px 18px rgba(0,0,0,.45);backdrop-filter:none;white-space:nowrap}
/* Boucle 1 (19 novembre 2026) : la barre se lit en trois îlots (mana · territoire · ressources), séparés par un filet d'or
   à losange ; dans chaque îlot, la valeur clé est en grand (Cormorant), le reste en petit. Un seul accent : l'or. */
.hud.etat .bandeau{display:flex;flex-wrap:nowrap;align-items:center;gap:0;padding:0;margin:0;background:none;border:0}
.hud.etat .ilot{display:flex;flex-wrap:nowrap;align-items:center;gap:calc(var(--u)*.75);padding:calc(var(--u)*.22) calc(var(--u)*1.1);border-radius:calc(var(--u)*1.2);
  background:linear-gradient(180deg,rgba(239,231,214,.05),rgba(239,231,214,.012));box-shadow:inset 0 0 0 1px rgba(201,164,92,.13)}
.hud.etat .sep{flex:none;display:block;width:calc(var(--u)*2.6);height:calc(var(--u)*1.8);
  background:${losange} center/calc(var(--u)*.55) calc(var(--u)*.55) no-repeat,linear-gradient(180deg,transparent,rgba(232,199,127,.75),transparent) center/1px 100% no-repeat}
.hud.etat .pt{flex:none;display:block;width:1px;height:calc(var(--u)*1.1);background:rgba(201,164,92,.22)}
.hud.etat .bandeau .m{gap:.32em;font-family:var(--texte);font-size:calc(var(--u)*.95);font-weight:500;color:var(--ivoire)}
.hud.etat .bandeau .m i{width:.62em;height:.62em;box-shadow:0 0 0 1px rgba(0,0,0,.55),0 0 0 2px rgba(239,231,214,.12)}
.hud.etat .bandeau .m.vide{opacity:.38}
.hud.etat .bandeau .d{gap:.3em;font-size:calc(var(--u)*.92);color:var(--ivoire);align-items:baseline}
.hud.etat .bandeau .d>span{color:var(--or);font-size:.95em}
.hud.etat .bandeau .d small{color:var(--sable);font-size:.78em}
.hud.etat .bandeau .d.petit{font-size:calc(var(--u)*.82);color:rgba(239,231,214,.8)}
.hud.etat .bandeau .d.petit>span{color:rgba(232,199,127,.78)}
.hud.etat .bandeau .d.cle{font-family:var(--titre);font-weight:600;font-size:calc(var(--u)*1.5);line-height:1;letter-spacing:.01em}
.hud.etat .bandeau .d.cle>span{font-family:var(--texte);font-size:.62em;margin-right:.1em}
.hud.etat .bandeau .d.cle small{font-family:var(--texte);font-weight:400;font-size:.52em;letter-spacing:.04em}
.hud.etat .bandeau .dg{padding:0;border:0;font-size:calc(var(--u)*.7);font-weight:600;letter-spacing:.16em;text-transform:uppercase}
.hud.etat .bandeau .dg.faible{color:var(--sable)}.hud.etat .bandeau .dg.reel{color:var(--or)}.hud.etat .bandeau .dg.mortel{color:#ff7a6a}
.hud.etat .fixe{display:flex;flex-wrap:nowrap;align-items:center;gap:.35em;padding:0;margin:0;border:0;background:none}
.hud.etat .fixe .l{display:none}
.hud.etat .fixe:has(#h-deck){display:none}
.hud.etat .fixe:has(#h-sec)::before{content:"✧";color:var(--or);font-size:calc(var(--u)*.95)}
.hud.etat .fixe:has(#h-sec) .l:last-child{display:inline;letter-spacing:0;font-size:calc(var(--u)*.78);color:var(--sable)}
.hud.etat .fixe b{font-family:var(--titre);font-size:calc(var(--u)*1.25);line-height:1}
.hud.etat .vies{gap:calc(var(--u)*.42)}
.hud.etat .vie{width:calc(var(--u)*.58);height:calc(var(--u)*.58);border:1px solid rgba(232,199,127,.7)}
.hud.etat .vie.on{background:var(--rouge);border-color:var(--rouge);box-shadow:0 0 6px rgba(208,86,74,.6)}
.cart{top:calc(var(--my) + var(--u)*2.6)}
/* ---- message flottant ---- */
.toast .t2{background:linear-gradient(90deg,transparent,rgba(232,199,127,.5),transparent) bottom/60% 1px no-repeat;padding-bottom:.15em}
`;document.head.appendChild(st)})();

/* ---- Boucle 1 (19 novembre 2026) : un seul titre de zone à l'écran ----
   Tant que le bandeau central (#toast) est visible, le cartouche du haut à gauche s'efface (body.toast-vu), puis revient.
   À l'entrée dans une zone, le bandeau central part au bout de 2,4 s (≈ 3 s avec son fondu) et ne répète pas la phrase
   du palier, que le cartouche affiche ensuite. Le surtitre garde deux éléments (type · biome) sur une seule ligne.
   Rien ne change dans main.js : tout passe par des classes et des MutationObserver. */
(()=>{const st=document.createElement('style');st.id='titre-unique';st.textContent=`
.hud.cart>*{transition:opacity .4s ease .3s}
body.toast-vu .hud.cart>*{opacity:0;transition:opacity .25s ease}
.hud.cart .sur{display:block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.14em;font-size:calc(var(--u)*.82);font-weight:600;line-height:1.5;margin-bottom:calc(var(--u)*.35);
  color:var(--or);text-shadow:0 0 2px rgba(0,0,0,.95),0 1px 3px rgba(0,0,0,.9),0 0 14px rgba(0,0,0,.75)}
.hud.cart .nom{margin-top:0}
.toast::before{content:"";position:absolute;z-index:-1;inset:-40% -22% -45%;pointer-events:none;
  background:radial-gradient(closest-side,rgba(8,7,10,.6),rgba(8,7,10,.42) 55%,rgba(8,7,10,0))}
.toast.sans-t3 .t3{display:none}
`;document.head.appendChild(st);
  const T=document.getElementById('toast'),B=document.body,txt=id=>{const e=document.getElementById(id);return e?e.textContent.trim():''};
  if(T){let fin=null;
    const voir=recs=>{const vu=T.classList.contains('vu');B.classList.toggle('toast-vu',vu);
      if(!vu){clearTimeout(fin);fin=null;return}
      /* un nouveau message : texte changé, ou « vu » posé alors qu'il n'y était pas (nos propres classes ne comptent pas) */
      const neuf=!recs||recs.some(r=>r.type!=='attributes'||!/\bvu\b/.test(r.oldValue||''));if(!neuf)return;
      const entree=txt('t2')!==''&&txt('t2')===txt('h-nom')&&/· niveau /.test(txt('t1'));
      T.classList.toggle('sans-t3',entree&&txt('t3')===txt('h-pal'));
      clearTimeout(fin);fin=entree?setTimeout(()=>T.classList.remove('vu'),2400):null};
    new MutationObserver(voir).observe(T,{attributes:true,attributeFilter:['class'],attributeOldValue:true,childList:true,characterData:true,subtree:true})}
  const sur=document.getElementById('h-sur');
  if(sur){const court=()=>{const t=sur.textContent,p=t.split(' · ');if(p.length<=2)return;sur.title=t;sur.textContent=p[0]+' · '+(p[2]||p[1])};
    new MutationObserver(court).observe(sur,{childList:true,characterData:true,subtree:true});court()}
})();

/* ---- Boucle 3 (20 nov.) : le combat sans texte superposé ----
   Défauts signalés depuis la boucle 2 (« ça fait jeu amateur ») :
   - #cb-aide (rempli par combat.js et observé par manette.js : ni déplacé ni renommé) passait sous la main et se mêlait au texte
     des cartes. Il devient une pastille posée au-dessus de la main : fond opaque, filet d'or, une seule ligne coupée par une ellipse ;
     la grille du combat le range entre le plateau et la main (zone « aide » avant la zone « bas »), avec une marge ; la carte choisie
     grandit depuis sa base au lieu de se soulever, elle ne monte plus sur la pastille.
   - la main remonte d'environ 30 px : marge du bas de 1,6 u (31 px en 1080p) et, pendant le placement, elle ne descend plus que de 1,2 u
     au lieu de 4 u (en 720p, le bas des cartes passe de 724 à 696 px : elles ne sont plus coupées).
   - l'étiquette de case (« Bastion », « Tanière »…) passait sous la jauge de l'unité posée dessus : quand une unité occupe la case,
     l'étiquette se range sous sa jauge (avec une marge et un z-index), et celle de la case s'efface ; de même, la menace écrite
     en haut de la case d'avant (« ⚔ 4 → Sentinelle ») passait sous la pastille d'intention de l'unité : elle devient « ⚔ 4 » sur l'unité. */
(()=>{const st=document.createElement('style');st.id='ecrin-combat';st.textContent=`
#combat{grid-template-areas:"tete tete tete" "log log log" "allies centre foes" "aide aide aide" "bas bas bas";padding-top:calc(var(--my)*.5);padding-bottom:calc(var(--my)*.6 + var(--u)*1.6)}
#combat .cb-aide{grid-area:aide;justify-self:center;align-self:end;position:relative;z-index:6;box-sizing:border-box;max-width:min(60ch,92vw);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0 0 calc(var(--u)*.95);padding:calc(var(--u)*.34) calc(var(--u)*1.3) calc(var(--u)*.4);
  border-radius:calc(var(--u)*1.2);background:rgba(10,9,12,.82);border:1px solid rgba(201,164,92,.35);box-shadow:0 6px 18px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,236,190,.06);
  font-size:calc(var(--u)*.9);line-height:1.4;color:var(--ivoire);letter-spacing:.01em}
#combat .cb-aide::before{display:none}
#combat .cb-aide:empty{visibility:hidden}
#combat.placement #cb-main{transform:translateY(calc(var(--u)*1.2))}
/* la carte choisie grandit depuis sa base au lieu de se soulever : elle ne monte plus sur la pastille */
#cb-main .cc.kcarte.f{transform:scale(1.04);transform-origin:50% 100%}
#cb-main .cc.kcarte.choisie{transform:scale(1.06);transform-origin:50% 100%}
/* unités du plateau un peu plus compactes (portrait 2,6 u, pastille d'intention mordant sur le portrait) : à trois voies,
   avec l'étiquette de case sous la jauge, elles tiennent dans leur rangée et ne chevauchent plus la voie voisine */
#cb-allies .u:not(.hero):not(.garde) .por,#cb-foes .u:not(.chef) .por{width:calc(var(--u)*2.6)!important;height:calc(var(--u)*2.6)!important}
#cb-allies .u:not(.hero):not(.garde) .int,#cb-foes .u:not(.chef) .int{position:relative;z-index:2;margin-bottom:calc(var(--u)*-.95);padding:.08em .65em .08em .2em;line-height:1.25}
#cb-allies .u:not(.hero):not(.garde) .int b,#cb-foes .u:not(.chef) .int b{min-width:1.4em;height:1.4em}
/* étiquette de case et menace de la voie, portées par l'unité qui occupe la case */
.pcase.occupee .pt,.pcase.occupee .plmenace{display:none}
/* case vide : son nom au cœur de la forme, loin des pastilles de la voie voisine */
.pcase:not(.occupee) .pt{top:50%;bottom:auto;translate:0 -50%}
.pcase:not(.occupee) .plmenace{top:calc(var(--u)*.9)}
.mz-voie:empty,.mz-menace:empty{display:none}
.mz-voie{display:block;position:relative;z-index:1;margin-top:calc(var(--u)*.14);padding-top:calc(var(--u)*.12);border-top:1px solid rgba(232,199,127,.2);
  font-size:calc(var(--u)*.62);font-weight:500;line-height:1.2;letter-spacing:.18em;text-transform:uppercase;text-align:center;color:var(--laiton2);white-space:nowrap}
#cb-foes .mz-voie{color:#ff9a8a;border-top-color:rgba(226,103,90,.25)}
.mz-menace{position:absolute;z-index:4;pointer-events:none;white-space:nowrap;border-radius:1em;background:rgba(10,9,12,.82);line-height:1.3;left:calc(var(--u)*-.4);top:calc(var(--u)*1.1);padding:.1em .55em;border:1px solid rgba(255,154,138,.5);font-size:calc(var(--u)*.8);font-weight:700;color:#ff9a8a}
`;document.head.appendChild(st);
  /* à chaque dessin des cases (plateau.js) : l'unité posée sur une case typée porte son nom sous sa jauge, la case s'efface ;
     la menace annoncée sur la case d'avant passe en pastille sur l'unité qui la tient (« ⚔ 4 ») */
  const surPlateau=u=>u&&u.el&&!u.hero&&!u.garde&&!u.chef&&u.pv>0;
  const pastille=(u,cls,dans)=>{const h=dans?u.el.querySelector(dans):u.el;if(!h)return document.createElement('span');let e=h.querySelector(':scope>.'+cls);
    if(!e){e=document.createElement('span');e.className=cls;h.appendChild(e)}return e};
  function etiquettesVoies(){if(typeof CB==='undefined'||!CB||!CB.cases||typeof terrainDe!=='function')return;const occ=new Set();
    for(const u of CB.allies.concat(CB.foes)){if(!surPlateau(u)){const e=u&&u.el&&u.el.querySelector('.plaque>.mz-voie');if(e)e.textContent='';continue}
      const t=terrainDe(u),nom=t&&PL_T[t]?PL_T[t].nom:'',e=pastille(u,'mz-voie','.plaque');if(e.textContent!==nom)e.textContent=nom;
      occ.add((CB.foes.indexOf(u)>=0?'pc-e':'pc-a')+u.voie+rangDe(u))}
    for(const d of document.querySelectorAll('#combat .pcase'))d.classList.toggle('occupee',occ.has(d.id))}
  function menacesSurUnites(){if(typeof CB==='undefined'||!CB||!CB.cases||typeof occupant!=='function')return;const tient=new Map();
    for(let v=0;v<3;v++){const u=occupant(v,0),b=document.querySelector('#pc-a'+v+'0 .plmenace');
      if(surPlateau(u)&&b&&b.textContent)tient.set(u,b.textContent.replace(' → '+u.nom.split(/[ ']/)[0]+' ',' ').replace(' → '+u.nom.split(/[ ']/)[0]+' ·',' ·').replace(new RegExp(' → '+u.nom.split(/[ ']/)[0]+'$'),'').trim())}
    for(const u of CB.allies){if(!u.el)continue;const e=u.el.querySelector(':scope>.mz-menace'),t=tient.get(u)||'';if(e){if(e.textContent!==t)e.textContent=t}else if(t)pastille(u,'mz-menace').textContent=t}}
  if(typeof dessinerCases==='function'){const dc0=dessinerCases;dessinerCases=function(){const r=dc0.apply(this,arguments);try{etiquettesVoies()}catch(_){}return r}}
  if(typeof badgesMenace==='function'){const bm0=badgesMenace;badgesMenace=function(){const r=bm0.apply(this,arguments);try{menacesSurUnites()}catch(_){}return r}}
})();
