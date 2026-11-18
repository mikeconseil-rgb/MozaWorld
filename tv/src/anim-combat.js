/* MozaWorld 2.6 : combat animé (18 novembre, idée 6 de l'évaluation graphique).
   Avant : héros et monstres étaient des icônes immobiles, un coup se voyait seulement à un chiffre.
   Ici, seulement du mouvement, sans toucher aux règles : la carte jouée vole vers sa cible, l'attaquant prend son élan
   et fonce, la cible encaisse avec un éclair d'impact (et l'écran tremble sur les gros coups), les unités respirent,
   les vaincus se dissolvent, le décor dérive lentement. Tout passe par CSS et l'API Web Animations : rien à télécharger,
   aucun calcul 3D (la scène n'est pas dessinée pendant un combat), donc pas de perte de fluidité sur la Xbox. */
(function(){
const st=document.createElement('style');st.textContent=`
#combat .u .por svg{animation:mzRespire 3.4s ease-in-out infinite;animation-delay:var(--rd,0s);transform-origin:50% 100%}
#combat .u.chef .por svg{animation-duration:4.2s}
@keyframes mzRespire{0%,100%{translate:0 0;scale:1 1}50%{translate:0 calc(var(--u)*-.4);scale:1.02 .985}}
#combat .u.mort .por svg{animation:mzDissout .9s forwards}
@keyframes mzDissout{to{opacity:0;filter:blur(8px) brightness(2.2);translate:0 calc(var(--u)*1.6);scale:.75}}
#cb-decor svg{animation:mzDerive 26s ease-in-out infinite alternate;transform-origin:50% 60%}
@keyframes mzDerive{from{transform:scale(1.02) translateX(-.6%)}to{transform:scale(1.07) translateX(.6%)}}
.mz-fx{position:fixed;left:0;top:0;pointer-events:none;z-index:70}
.mz-eclat{width:calc(var(--u)*16);height:calc(var(--u)*16);margin:calc(var(--u)*-8) 0 0 calc(var(--u)*-8);border-radius:50%;
  background:radial-gradient(circle,#fff 0,var(--c) 22%,transparent 62%);mix-blend-mode:screen}
.mz-trait{width:calc(var(--u)*14);height:calc(var(--u)*.7);margin:calc(var(--u)*-.35) 0 0 calc(var(--u)*-7);border-radius:50%;
  background:linear-gradient(90deg,transparent,#fff 45%,var(--c) 60%,transparent);box-shadow:0 0 calc(var(--u)*1.4) var(--c)}
.mz-etincelle{width:calc(var(--u)*.7);height:calc(var(--u)*.7);margin:calc(var(--u)*-.35) 0 0 calc(var(--u)*-.35);border-radius:50%;background:var(--c);box-shadow:0 0 calc(var(--u)*.8) var(--c)}
.mz-carte{margin:0;transform-origin:50% 50%;box-shadow:0 0 calc(var(--u)*3) rgba(255,214,140,.55)}
.mz-carte-cache{visibility:hidden}
#combat.mz-secousse{animation:mzSecousse .38s}
@keyframes mzSecousse{0%,100%{translate:0 0}20%{translate:-.9% .5%}45%{translate:.8% -.6%}70%{translate:-.4% .3%}}
.pop.mz-gros{font-size:calc(var(--u)*4.4)!important;color:#ffd08a!important}
`;document.head.appendChild(st);

const ANIM=!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
const centre=el=>{const r=el.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height*.45]};
function fx(cls,x,y,c){const d=document.createElement('div');d.className='mz-fx '+cls;d.style.setProperty('--c',c||'#ffb070');
  d.style.left=x+'px';d.style.top=y+'px';document.body.appendChild(d);return d}
const fin=(a,d)=>{a.onfinish=()=>d.remove();setTimeout(()=>d.remove(),1500)};

/* éclair d'impact, trait de coup et étincelles sur une unité */
function impact(u,n,c,trait){if(!ANIM||!u||!u.el||!document.body.contains(u.el))return;const[x,y]=centre(u.el.querySelector('.por')||u.el);
  const fort=n>=8,e=fx('mz-eclat',x,y,c);fin(e.animate([{transform:'scale(.2)',opacity:1},{transform:`scale(${fort?1.5:1})`,opacity:.9,offset:.35},{transform:`scale(${fort?1.9:1.3})`,opacity:0}],{duration:fort?520:400,easing:'ease-out'}),e);
  if(trait){const t=fx('mz-trait',x,y,c),r=-35+Math.random()*20;fin(t.animate([{transform:`rotate(${r}deg) scaleX(0)`,opacity:1},{transform:`rotate(${r}deg) scaleX(1.2)`,opacity:1,offset:.5},{transform:`rotate(${r}deg) scaleX(1.5)`,opacity:0}],{duration:300,easing:'ease-out'}),t)}
  const k=Math.min(10,3+n);for(let i=0;i<k;i++){const a=Math.random()*Math.PI*2,r=(40+Math.random()*70)*(fort?1.4:1),s=fx('mz-etincelle',x,y,c);
    fin(s.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r+30}px) scale(.3)`,opacity:0}],{duration:450+Math.random()*250,easing:'cubic-bezier(.2,.8,.4,1)'}),s)}
  if(fort){const C=$('combat');C.classList.remove('mz-secousse');void C.offsetWidth;C.classList.add('mz-secousse');
    const p=u.el.querySelectorAll('.pop');if(p.length)p[p.length-1].classList.add('mz-gros')}}

/* l'attaquant prend son élan puis fonce vers sa cible */
function elan(m,cible){if(!ANIM||!m||!m.el||!cible||!cible.el)return;const[a,b]=centre(m.el),[c,d]=centre(cible.el),dx=(c-a)*.32,dy=(d-b)*.32;
  m.el.animate([{transform:'none'},{transform:`translate(${-dx*.12}px,${-dy*.12}px) scale(.96)`,offset:.25},{transform:`translate(${dx}px,${dy}px) scale(1.1)`,offset:.55},{transform:'none'}],{duration:480,easing:'ease-in-out'})}

/* coups : on enveloppe frappe(), soigner(), garder(), agir() et jouer() sans changer leur résultat */
const frappe0=frappe;frappe=function(u,n,src){const pv=u&&u.pv,r=frappe0.apply(this,arguments);
  if(u&&n>0&&r!==0){const ennemi=CB&&CB.foes.indexOf(u)>=0,c=src&&src.nom==='brûlure'?'#ff8a3a':ennemi?'#ffc070':'#ff5a4a';impact(u,n,c,!!src&&src.nom!=='brûlure')}
  else if(u&&n>0&&u.pv===pv)impact(u,2,'#9cc4ff',false);return r};
const soigner0=soigner;soigner=function(u,n){const r=soigner0.apply(this,arguments);if(ANIM&&u&&u.el&&document.body.contains(u.el)){const[x,y]=centre(u.el);
  for(let i=0;i<7;i++){const s=fx('mz-etincelle',x+(Math.random()-.5)*60,y+30,'#9fe08a');fin(s.animate([{transform:'translateY(0)',opacity:0},{opacity:1,offset:.2},{transform:`translateY(${-60-Math.random()*50}px)`,opacity:0}],{duration:700+Math.random()*300,delay:i*50,easing:'ease-out'}),s)}}return r};
const garder0=garder;garder=function(u,n){const r=garder0.apply(this,arguments);const G=u&&u.hero&&typeof gardeU==='function'?gardeU():u;
  if(ANIM&&G&&G.el&&document.body.contains(G.el)){const[x,y]=centre(G.el),e=fx('mz-eclat',x,y,'#7ab4ff');fin(e.animate([{transform:'scale(1.4)',opacity:0},{transform:'scale(.9)',opacity:.8,offset:.4},{transform:'scale(1)',opacity:0}],{duration:420}),e)}return r};
const agir0=agir;agir=function(m){const I=m&&m.int;if(I&&'afvb'.indexOf(I.a)>=0&&typeof cibleAlliee==='function')elan(m,I.a==='v'?CB.hero:cibleAlliee(m));
  else if(I&&I.a==='t')elan(m,CB.hero);return agir0.apply(this,arguments)};

/* la carte jouée quitte la main et vole vers sa cible (ou vers le centre), puis l'effet part à l'arrivée */
const jouer0=jouer;jouer=function(i,t){const C=CB,h=$('cb-main'),src=h&&h.children[i];
  if(!ANIM||!C||!src||C.mzVol){return jouer0.apply(this,arguments)}
  const r=src.getBoundingClientRect(),dst=t&&t.el?t.el:$('cb-centre')||C.hero.el;if(!dst||!r.width)return jouer0.apply(this,arguments);
  const[x,y]=centre(dst),cl=src.cloneNode(true);cl.classList.add('mz-fx','mz-carte');cl.classList.remove('f','choisie');
  cl.style.left=r.left+'px';cl.style.top=r.top+'px';cl.style.width=r.width+'px';cl.style.height=r.height+'px';document.body.appendChild(cl);src.classList.add('mz-carte-cache');
  const dx=x-(r.left+r.width/2),dy=y-(r.top+r.height/2);C.busy=true;C.mzVol=1;
  const a=cl.animate([{transform:'translate(0,0) rotate(0) scale(1)',opacity:1},{transform:`translate(${dx*.25}px,${dy*.25-60}px) rotate(-6deg) scale(1.08)`,offset:.3},
    {transform:`translate(${dx}px,${dy}px) rotate(8deg) scale(.35)`,opacity:.85}],{duration:340,easing:'cubic-bezier(.5,0,.75,.4)'});
  const go=()=>{if(!cl.parentNode)return;cl.remove();if(CB!==C){return}C.mzVol=0;C.busy=false;
    const e=fx('mz-eclat',x,y,'#ffe0a0');fin(e.animate([{transform:'scale(.3)',opacity:1},{transform:'scale(1.2)',opacity:0}],{duration:300,easing:'ease-out'}),e);
    jouer0.call(this,i,t)};
  a.onfinish=go;setTimeout(go,600)};

/* chaque unité respire à son rythme */
const uniteEl0=uniteEl;uniteEl=function(u,host){const r=uniteEl0.apply(this,arguments);if(u&&u.el)u.el.style.setProperty('--rd',(-Math.random()*3).toFixed(2)+'s');return r};
})();
