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
/* boucle 4 (22 nov.) : en mode épuré, l'aide tient sur une ligne ; la plaque de nom sous la minicarte se retire
   tant que la fiche de zone (en haut à gauche) est affichée, pour que le nom n'apparaisse qu'une fois. */
.hud.aide .aide-une{display:none}
body.epure .hud.aide>div:not(.aide-une){display:none}
body.epure .hud.aide .aide-une{display:block;white-space:nowrap;font-size:.86em;letter-spacing:.02em}
body.epure .hud.aide{padding-top:calc(var(--u)*.55);padding-bottom:calc(var(--u)*.55)}
/* la minicarte n'a plus de fond : son flou d'arrière-plan (hérité de .cadre) ne dessinait qu'un rectangle terne, et coûtait */
.hud.carte.mc2{backdrop-filter:none;-webkit-backdrop-filter:none}
.hud.carte .mc-nom{transition:opacity .6s ease}
body:not(.epure) .hud.carte .mc-nom,body.epure.zone-neuve .hud.carte .mc-nom{opacity:0}
@media (prefers-reduced-motion:reduce){.toast.vu .t1,.toast.vu .t2,.toast.vu .t3{animation:none}}
`;document.head.appendChild(st);

let epure=true;try{epure=localStorage.getItem('mz-epure')!=='0'}catch(_){}
const B=document.body;B.classList.toggle('epure',epure);
const note=document.createElement('div');note.className='mz-bascule';B.appendChild(note);let noteT=null;
/* boucle 4 (22 nov.) : l'aide s'efface après 12 s sans entrée (ou 45 s de jeu au plus) ; RB ou Tab la fait revenir */
let calme=0,joue=0;const entree=()=>{calme=0};
function basculer(){epure=!epure;calme=0;joue=0;B.classList.remove('aide-vue');B.classList.toggle('epure',epure);try{localStorage.setItem('mz-epure',epure?'1':'0')}catch(_){}
  note.textContent=epure?'Interface épurée · RB pour tout afficher':'Interface complète · RB pour épurer';note.classList.add('vu');
  clearTimeout(noteT);noteT=setTimeout(()=>note.classList.remove('vu'),2200);if(typeof tick==='function')try{tick()}catch(_){}}
window.addEventListener('keydown',e=>{entree();if((e.key==='Tab'||e.key==='h'||e.key==='H')&&typeof mode!=='undefined'&&mode==='monde'){e.preventDefault();basculer()}});
const pb0=padBouton;padBouton=function(n){entree();if(n==='rb'&&typeof mode!=='undefined'&&mode==='monde'){basculer();return}return pb0.apply(this,arguments)};
/* boucle 4 (22 nov.) : l'aide d'une ligne, ajoutée en tête de chaque panneau d'aide (clavier/télécommande et manette) */
for(const a of document.querySelectorAll('.hud.aide')){const d=document.createElement('div');d.className='aide-une';
  d.innerHTML=a.classList.contains('aide-pad')?'<i>stick G</i> marcher · <i>stick D</i> tourner · <span class="bt a">A</span> agir · <span class="bt">RB</span> plus':'<i>▲▼</i> marcher · <i>◀▶</i> tourner · <i>OK</i> agir · <i>Tab</i> plus';
  a.insertBefore(d,a.firstChild)}

/* la fiche de zone reste 9 s à l'entrée d'une zone ; l'aide d'une ligne s'efface après 12 s de calme (boucle 4, 22 nov.) */
let zv=null,zT=null;window.addEventListener('pointerdown',entree);
setInterval(()=>{if(typeof curZ==='undefined')return;
  if(curZ&&curZ!==zv){zv=curZ;B.classList.add('zone-neuve');clearTimeout(zT);zT=setTimeout(()=>B.classList.remove('zone-neuve'),9000)}
  if(typeof mode!=='undefined'&&mode==='monde'&&typeof started!=='undefined'&&started){joue+=.5;calme+=.5;if(calme>=12||joue>=45)B.classList.add('aide-vue')}},500);
})();
