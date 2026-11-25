/* Arène sur téléphone (25 nov., demande de l'utilisateur : « une version spécifique pour Pixel avec les cartes présentées
   bien plus gros. Je veux bien lire les cartes »). Actif dans l'Arène sur un écran tactile, ou avec ?pixel dans l'adresse
   (tv/arene-pixel.html). La Xbox et la version PC ne changent pas.
   - main de cartes nettement plus grande ;
   - toucher une carte l'ouvre en grand (la « loupe ») avec son texte entier, et deux gros boutons : Jouer, Fermer ;
   - le champ reste en haut ; ▲ ou Y le fait passer en grand pour bouger les créatures, comme avant. */
(function(){
if(!window.MZ_ARENE)return;
const FORCE=/[?&]pixel/.test(location.search);
const tactileOk=()=>FORCE||document.body.classList.contains('tactile')||(matchMedia&&matchMedia('(pointer:coarse)').matches&&!/xbox/i.test(navigator.userAgent));
let ferme=-1,dernier=-1,veut=false;
/* la loupe ne s'ouvre qu'après un toucher sur une carte de la main (pas au début du tour ni à la manette) */
let surCarte=false;
addEventListener('pointerdown',e=>{surCarte=!!(e.target&&e.target.closest&&e.target.closest('#cb-main .cc:not(.fin):not(.man)'))},{capture:true});
addEventListener('pointerup',()=>{if(surCarte){surCarte=false;setTimeout(()=>{veut=true;ferme=-1;try{majLoupe()}catch(_){}},30)}},{capture:true});
function loupe(){let L=document.getElementById('loupe');if(!L){L=document.createElement('div');L.id='loupe';L.innerHTML='<div class="lc"></div><div class="lb"><button class="jouer"></button><button class="fermer">Fermer</button></div>';
    document.body.appendChild(L);
    L.querySelector('.jouer').addEventListener('click',e=>{e.stopPropagation();const C=CB;if(!C||C.busy)return;L.classList.remove('on');veut=false;cbInput('ok',false)});
    L.querySelector('.fermer').addEventListener('click',e=>{e.stopPropagation();const C=CB;veut=false;L.classList.remove('on')});
    L.addEventListener('click',e=>{if(e.target===L){veut=false;L.classList.remove('on')}})}return L}
function majLoupe(){const C=CB,L=loupe();
  if(!veut||!C||!C.tac||!document.body.classList.contains('arene-pixel')||C.busy||C.tb||C.sel||C.pl||C.f>=C.main.length){L.classList.remove('on');return}
  if(C.f!==dernier){dernier=C.f;if(ferme!==C.f)ferme=-1}
  if(ferme===C.f){L.classList.remove('on');return}
  const src=document.querySelectorAll('#cb-main .cc')[C.f];if(!src)return;const k=C.main[C.f],ok=jouable(k);
  L.querySelector('.lc').innerHTML=src.outerHTML;const b=L.querySelector('.jouer');b.textContent=ok?'Jouer ('+coutDe(k)+' mana)':'Pas assez de mana';b.disabled=!ok;L.classList.add('on')}
const dm0=dessinerMain;dessinerMain=function(){dm0();if(tactileOk()&&!document.body.classList.contains('arene-pixel'))document.body.classList.add('arene-pixel');const C=CB;if(C)$('combat').classList.toggle('tac-vise',!!C.sel&&document.body.classList.contains('arene-pixel'));try{majLoupe()}catch(e){console.error(e)}};
const fc0=fermerCombat;fermerCombat=function(){const L=document.getElementById('loupe');if(L)L.classList.remove('on');ferme=dernier=-1;veut=false;$('combat').classList.remove('tac-vise');return fc0()};
const st=document.createElement('style');st.textContent=`
body.arene-pixel #combat.tac #cb-main{--u:min(1.55vw,2.75vh);transform:none!important;flex-wrap:nowrap;overflow:visible;justify-content:center;max-width:calc(100vw - 230px);margin:0 auto;padding-bottom:2px}
body.arene-pixel #combat.tac #cb-main .cc,body.arene-pixel #combat.tac #cb-main .cc.f{transform:none!important;margin:0 2px!important}
body.arene-pixel #combat.tac #cb-main .cc.f{outline:3px solid #ffd35a;outline-offset:1px;transform:translateY(-6px)!important}
body.arene-pixel #combat.tac #tac{height:50vh!important;top:11vh!important}
body.arene-pixel #combat.tac #cb-log{font-size:12px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:70vw;margin:0 auto}
body.arene-pixel #combat.tac-champ #tac,body.arene-pixel #combat.tac-ennemi #tac,body.arene-pixel #combat.tac-vise #tac{height:84vh!important;top:3vh!important}
body.arene-pixel #combat.tac-champ #cb-main,body.arene-pixel #combat.tac-ennemi #cb-main,body.arene-pixel #combat.tac-vise #cb-main{opacity:0;transform:translateY(80%)!important}
body.arene-pixel #combat.tac #cb-mana,body.arene-pixel #combat.tac #cb-piles{transform:scale(.7);transform-origin:50% 100%}
#loupe{position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;gap:4vw;background:rgba(8,6,5,.72)}
#loupe.on{display:flex}
#loupe .lc{--u:min(4.1vh,2.5vw);pointer-events:none}
#loupe .lc .cc{height:auto!important;max-height:96vh;transform:none!important;margin:0!important;opacity:1!important;filter:none!important;box-shadow:0 10px 30px rgba(0,0,0,.8)}
#loupe .lc .cc .ct{font-size:calc(var(--u)*.98)!important;line-height:1.28!important;overflow:visible!important;max-height:none!important;-webkit-line-clamp:unset!important;display:block!important;-webkit-mask:none!important;mask:none!important}
#loupe .lb{display:flex;flex-direction:column;gap:3vh}
#loupe button{font-family:var(--c-fell,Georgia,serif);font-size:max(20px,5vh);padding:.4em 1.1em;border:3px solid #e8c77f;background:#6d140e;color:#f6e8c8;border-radius:.3em;box-shadow:0 4px 0 #3a0905}
#loupe button.fermer{background:#2a2420;border-color:#8a7550}
#loupe button:disabled{opacity:.5}
`;document.head.appendChild(st);
})();
