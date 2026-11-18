/* MozaWorld 2.8 : exploration épurée (18 novembre, idée 9 de l'évaluation graphique, choisie par l'utilisateur).
   Par défaut, l'écran laisse la place au paysage : la fiche de la zone en haut à gauche n'apparaît que quelques secondes
   en entrant dans une zone, l'aide des commandes s'efface après la première minute, la minicarte rapetisse et s'estompe.
   Le nom de la zone s'affiche en grand au centre à l'entrée (le toast existant), avec une entrée plus cinématographique.
   RB à la manette (ou Tab au clavier) passe de l'interface épurée à l'interface complète, et le choix est retenu. */
(function(){
const st=document.createElement('style');st.textContent=`
body.epure .hud.cart,body.epure .hud.aide,body.epure .hud.carte{transition:opacity .9s ease,scale .9s ease}
body.epure:not(.zone-neuve) .hud.cart{opacity:0}
body.epure.aide-vue .hud.aide{opacity:0}
body.epure .hud.carte{scale:.72;transform-origin:0 100%;opacity:.8}
body.epure .hud.jauge{scale:.88;transform-origin:50% 100%}
.toast.vu .t2{animation:mzTitre 1.4s cubic-bezier(.2,.7,.2,1) both}
.toast.vu .t1{animation:mzSur 1.2s ease both}
.toast.vu .t3{animation:mzSur 1.6s ease .35s both}
@keyframes mzTitre{from{opacity:0;letter-spacing:.35em;filter:blur(6px)}to{opacity:1;letter-spacing:normal;filter:none}}
@keyframes mzSur{from{opacity:0;translate:0 calc(var(--u)*.8)}to{opacity:1;translate:0 0}}
.mz-bascule{position:fixed;left:50%;top:calc(var(--u)*5.2);translate:-50% 0;z-index:40;pointer-events:none;font-size:calc(var(--u)*1.05);letter-spacing:.18em;text-transform:uppercase;
  color:var(--laiton2,#e8c77f);background:rgba(13,12,15,.72);border:1px solid rgba(201,164,92,.45);padding:calc(var(--u)*.45) calc(var(--u)*1.4);opacity:0;transition:opacity .5s}
.mz-bascule.vu{opacity:1}
@media (prefers-reduced-motion:reduce){.toast.vu .t1,.toast.vu .t2,.toast.vu .t3{animation:none}}
`;document.head.appendChild(st);

let epure=true;try{epure=localStorage.getItem('mz-epure')!=='0'}catch(_){}
const B=document.body;B.classList.toggle('epure',epure);
const note=document.createElement('div');note.className='mz-bascule';B.appendChild(note);let noteT=null;
function basculer(){epure=!epure;B.classList.toggle('epure',epure);try{localStorage.setItem('mz-epure',epure?'1':'0')}catch(_){}
  note.textContent=epure?'Interface épurée · RB pour tout afficher':'Interface complète · RB pour épurer';note.classList.add('vu');
  clearTimeout(noteT);noteT=setTimeout(()=>note.classList.remove('vu'),2200);if(typeof tick==='function')try{tick()}catch(_){}}
window.addEventListener('keydown',e=>{if((e.key==='Tab'||e.key==='h'||e.key==='H')&&typeof mode!=='undefined'&&mode==='monde'){e.preventDefault();basculer()}});
const pb0=padBouton;padBouton=function(n){if(n==='rb'&&typeof mode!=='undefined'&&mode==='monde'){basculer();return}return pb0.apply(this,arguments)};

/* la fiche de zone reste 9 s à l'entrée d'une zone ; l'aide reste la première minute de jeu */
let zv=null,zT=null,joue=0;
setInterval(()=>{if(typeof curZ==='undefined')return;
  if(curZ&&curZ!==zv){zv=curZ;B.classList.add('zone-neuve');clearTimeout(zT);zT=setTimeout(()=>B.classList.remove('zone-neuve'),9000)}
  if(typeof mode!=='undefined'&&mode==='monde'&&typeof started!=='undefined'&&started){joue+=.5;if(joue>=60)B.classList.add('aide-vue')}},500);
})();
