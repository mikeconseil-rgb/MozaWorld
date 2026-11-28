/* MozaWorld 2.52 : le portrait peint du joueur (28 nov.), dans l'écran d'accueil et le menu pause.
   Portrait fait par le joueur avec Gemini à partir de son selfie : lui en combinaison rouge, avec sa chienne au bandana rouge.
   Il est posé comme une gravure épinglée à gauche de la page, qui s'élargit pour lui faire place ; il se cache dans les sous-menus
   (paquet, grimoire, sauvegardes…) et sur un écran trop étroit (téléphone en hauteur), pour ne rien couvrir. */
(function(){
const st=document.createElement('style');st.textContent=`
#menu .boite{position:relative}#seuil .boite,#menu.pause-heros .boite{position:relative;box-sizing:border-box}
.portrait-heros{--ph:min(56vh,calc(var(--u)*44));position:absolute;left:calc(var(--u)*2.2);top:50%;height:var(--ph);width:calc(var(--ph)*.671);
  transform:translateY(-50%) rotate(-2deg);margin:0;pointer-events:none;z-index:2;
  background:#1a120a url(img/heros/portrait.jpg) center/cover no-repeat;
  box-shadow:0 0 0 3px rgba(23,16,10,.85),0 0 0 6px rgba(201,164,92,.55),0 18px 40px rgba(0,0,0,.55)}
.portrait-heros::after{content:'';position:absolute;left:50%;top:-9px;width:16px;height:16px;margin-left:-8px;border-radius:50%;
  background:radial-gradient(circle at 35% 35%,#e0574a,#8a1a12 70%);box-shadow:0 2px 4px rgba(0,0,0,.6)}
/* la page fait place au portrait : elle s'élargit et pousse son texte à droite */
#seuil .boite{width:min(calc(var(--u)*100),96vw);padding-left:calc(min(56vh,calc(var(--u)*44))*.671 + var(--u)*5.5)!important}
#menu.pause-heros .boite{width:min(calc(var(--u)*100),96vw)!important;max-width:96vw!important;padding-left:calc(min(56vh,calc(var(--u)*44))*.671 + var(--u)*5.5)!important}
#menu:not(.pause-heros) .portrait-heros{display:none}
@media (max-aspect-ratio:5/4){.portrait-heros{display:none!important}
  #seuil .boite,#menu.pause-heros .boite{width:min(calc(var(--u)*72),92vw)!important;padding-left:calc(var(--u)*3)!important}}`;
document.head.appendChild(st);
const poser=id=>{const e=document.querySelector('#'+id+' .boite');if(!e)return;const f=document.createElement('figure');f.className='portrait-heros';
  f.setAttribute('aria-label','Portrait du héros et de sa chienne');e.insertBefore(f,e.firstChild)};
poser('seuil');poser('menu');
/* le portrait n'apparaît que sur la page principale du menu pause (son surtitre commence par « Pause ») */
const m=document.getElementById('menu'),sur=document.getElementById('menu-sur');
if(m&&sur){const maj=()=>m.classList.toggle('pause-heros',/^Pause/.test(sur.textContent||''));
  new MutationObserver(maj).observe(sur,{childList:true,characterData:true,subtree:true});maj()}
})();
