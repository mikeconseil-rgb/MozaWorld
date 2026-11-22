/* MozaWorld : portraits peints et animés dans le combat (22 nov. 2026).
   Retour de l'utilisateur après le combat à la Foire : « les persos sont trop moches. Fait de quoi qui est un peu animé ».
   Les silhouettes en vecteurs du combat principal sont remplacées par les portraits peints de l'Arène (img/creatures/, 256 px,
   environ 10 ko chacun) posés dans un médaillon : cadre d'or pour vos unités, cadre de la couleur de la zone pour l'adversaire.
   Animation, en transform et opacité seulement (pas de filtre animé, pas de calque lourd, rien en 3D) :
   - au repos : le médaillon respire et la peinture dérive lentement dans son cadre, comme une toile vivante ;
   - à l'attaque : l'unité se penche vers l'avant, son cadre s'allume ;
   - au coup reçu : secousse, voile rouge, et la peinture recule ;
   - au soin : voile vert ; à la mort : la toile pâlit et tombe.
   Si une image manque, la silhouette d'origine reste. Le mode Arène (tactique.js) garde ses propres portraits. */
(function(){
const st=document.createElement('style');st.textContent=`
#combat .u .por.mzp{display:flex;align-items:flex-end;justify-content:center}
#combat .u .por.mzp>svg{display:none!important}
.mzp-m{position:relative;width:92%;aspect-ratio:1;margin:0 auto 4%;border-radius:50%;overflow:hidden;contain:paint;
  border:calc(var(--u)*.22) solid var(--mzc,#c9a45c);box-shadow:0 calc(var(--u)*.5) calc(var(--u)*.9) rgba(0,0,0,.75),inset 0 0 calc(var(--u)*.9) rgba(0,0,0,.85);
  background:#14110f;animation:mzpRespire 3.6s ease-in-out infinite;animation-delay:var(--rd,0s);transform-origin:50% 100%}
.u.hero .mzp-m{border-radius:48% 48% 14% 14%/40% 40% 10% 10%;width:86%;aspect-ratio:.86}
.u.chef .mzp-m{border-width:calc(var(--u)*.32)}
.mzp-m img{position:absolute;inset:-6%;width:112%;height:112%;object-fit:cover;display:block;animation:mzpToile 11s ease-in-out infinite alternate;animation-delay:var(--rd,0s)}
.mzp-m::before{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 calc(var(--u)*.12) rgba(255,236,190,.35);pointer-events:none;z-index:2}
.mzp-m i{position:absolute;inset:0;opacity:0;pointer-events:none;z-index:3;border-radius:inherit}
.mzp-m i.v{background:radial-gradient(circle at 50% 45%,rgba(255,60,40,.0),rgba(220,30,20,.75))}
.mzp-m i.s{background:radial-gradient(circle at 50% 45%,rgba(140,255,140,.0),rgba(90,220,110,.7))}
.mzp-m i.a{box-shadow:inset 0 0 calc(var(--u)*1.4) calc(var(--u)*.4) var(--mzc,#ffd27a)}
@keyframes mzpRespire{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(calc(var(--u)*-.35)) scale(1.025)}}
@keyframes mzpToile{from{transform:translate(-2%,1%) scale(1)}to{transform:translate(2%,-1.5%) scale(1.07)}}
#combat .u.mort .mzp-m{animation:mzpChute .9s forwards}
#combat .u.mort .mzp-m img{opacity:.35}
@keyframes mzpChute{to{transform:translateY(calc(var(--u)*1.4)) rotate(-8deg) scale(.8);opacity:0}}
#combat .u.vise .mzp-m{border-color:var(--laiton2,#e8c77f)}
/* sur le plateau, l'unité se lit à l'horizontale : médaillon à gauche, plaque à droite, intention au-dessus */
#cb-allies .u:not(.hero):not(.garde):has(.mzp),#cb-foes .u:not(.chef):has(.mzp){display:grid!important;grid-template-columns:auto minmax(0,1fr);grid-template-areas:"int int" "por plaque" "gd gd";align-items:center;column-gap:0}
#cb-allies .u:not(.hero):not(.garde) .por.mzp,#cb-foes .u:not(.chef) .por.mzp{grid-area:por;width:calc(var(--u)*3.9)!important;height:calc(var(--u)*3.9)!important;position:relative;z-index:3;margin-right:calc(var(--u)*-.7)}
#cb-allies .u:not(.hero):not(.garde):has(.mzp) .int,#cb-foes .u:not(.chef):has(.mzp) .int{grid-area:int;justify-self:center;margin-bottom:calc(var(--u)*.15)!important}
#cb-allies .u:not(.hero):not(.garde):has(.mzp) .plaque,#cb-foes .u:not(.chef):has(.mzp) .plaque{grid-area:plaque;padding-left:calc(var(--u)*.9)!important;min-width:0}
#cb-allies .u:not(.hero):not(.garde):has(.mzp) .gd,#cb-foes .u:not(.chef):has(.mzp) .gd{grid-area:gd}
#cb-allies .u:not(.hero):not(.garde):has(.mzp) .un,#cb-foes .u:not(.chef):has(.mzp) .un{white-space:normal!important;overflow:visible!important;text-overflow:clip!important;font-size:calc(var(--u)*.74)!important;line-height:1.05!important;max-width:none!important}
#cb-allies .u:not(.hero):not(.garde) .mzp-m,#cb-foes .u:not(.chef) .mzp-m{width:100%;margin:0}
@media (prefers-reduced-motion:reduce){.mzp-m,.mzp-m img{animation:none!important}}
`;document.head.appendChild(st);

const ANIM=!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
const SANS=s=>s.normalize('NFC');
function cle(u){if(typeof tacImgDe==='function')return tacImgDe(u);if(u.hero)return'heros';if(u.garde)return'garde';return'bete'}
function peindre(u){const e=u&&u.el;if(!e||e.dataset.mzp||window.TAC_ON)return;const p=e.querySelector('.por');if(!p)return;
  e.dataset.mzp=1;const k=cle(u);
  const ami=CB&&CB.allies&&CB.allies.indexOf(u)>=0||u.hero||u.garde||u.bete;
  const im=new Image();im.decoding='async';im.alt='';
  im.onload=()=>{if(!e.isConnected&&!document.body.contains(e))return;const m=document.createElement('div');m.className='mzp-m';
    m.style.setProperty('--mzc',ami?'#c9a45c':'#b8402e');
    m.appendChild(im);const v=document.createElement('i');m.appendChild(v);p.classList.add('mzp');p.appendChild(m)};
  const bi=typeof bestiaireImg==='function'?bestiaireImg(u):null,crea='img/creatures/'+encodeURIComponent(SANS(k))+'.webp';
  if(bi){im.onerror=()=>{im.onerror=null;im.src=crea};im.src='img/bestiaire/'+bi+'.webp'}else im.src=crea}

/* un voile bref sur le médaillon : v (coup), s (soin), a (attaque) */
function voile(u,k,dur){if(!ANIM||!u||!u.el)return;const m=u.el.querySelector('.mzp-m');if(!m)return;const v=m.querySelector('i');v.className=k;
  v.animate([{opacity:0},{opacity:1,offset:.25},{opacity:0}],{duration:dur||420,easing:'ease-out'});return m}

const uniteEl1=uniteEl;uniteEl=function(u,host){const r=uniteEl1.apply(this,arguments);try{peindre(u)}catch(_){}return r};

const frappe1=frappe;frappe=function(u,n,src){const pv=u&&u.pv,r=frappe1.apply(this,arguments);
  if(ANIM&&u&&n>0&&u.pv<pv){const m=voile(u,'v',460);if(m){const f=Math.min(1.6,.6+n/8);
    m.animate([{translate:'0 0',rotate:'0deg'},{translate:`${-6*f}px ${2*f}px`,rotate:`${-4*f}deg`,offset:.2},{translate:`${5*f}px 0`,rotate:`${3*f}deg`,offset:.45},{translate:`${-2*f}px 0`,rotate:'-1deg',offset:.7},{translate:'0 0',rotate:'0deg'}],{duration:420,easing:'ease-out'});
    const im=m.querySelector('img');if(im)im.animate([{scale:1},{scale:.92,offset:.2},{scale:1}],{duration:380,easing:'ease-out'})}}
  return r};
const soigner1=soigner;soigner=function(u,n){const r=soigner1.apply(this,arguments);voile(u,'s',700);return r};
/* l'attaquant se penche vers sa cible : on écoute agir() (ennemis) et jouer() (vos cartes : le héros) */
function penche(u,sens){if(!ANIM||!u||!u.el)return;const m=voile(u,'a',520);if(!m)return;
  m.animate([{rotate:'0deg',scale:1},{rotate:`${-5*sens}deg`,scale:.96,offset:.25},{rotate:`${7*sens}deg`,scale:1.12,offset:.55},{rotate:'0deg',scale:1}],{duration:500,easing:'ease-in-out'})}
const agir1=agir;agir=function(m){const I=m&&m.int;if(I&&'afvbt'.indexOf(I.a)>=0)penche(m,-1);return agir1.apply(this,arguments)};
const jouer1=jouer;jouer=function(i,t){try{if(CB&&CB.hero&&!CB.mzVol)penche(CB.hero,1)}catch(_){}return jouer1.apply(this,arguments)};
window.MZportraits={peindre};
})();
