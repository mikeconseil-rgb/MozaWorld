/* MozaWorld : écran du paquet lisible et modifiable (22 nov. 2026).
   Retours de l'utilisateur : « l'écran de visualisation du paquet ne permet pas de bien voir les cartes » et
   « je voudrais pouvoir éditer mon paquet en pouvant activer ou désactiver une carte ».
   - Le Paquet de combat (menu, ou Y à la manette) montre chaque carte en grand, dans une grille qui s'adapte à l'écran
     (télé, téléphone) ; on s'y déplace au stick ou aux flèches, ou au toucher.
   - A (ou un toucher) active ou désactive la carte désignée, toutes ses copies ensemble. Une carte désactivée reste au
     paquet mais n'est plus piochée en combat (les duels d'Assemblée ont leur propre paquet et ne changent pas).
   - Garde-fou (provisoire) : au moins PAQ_MIN (4) cartes actives, copies comprises (ou tout le paquet s'il est plus petit).
   - Le choix est sauvegardé avec la partie (S.paqOff). Rien d'animé en permanence (Xbox). */
const PAQ_MIN=4;
(function(){
const st=document.createElement('style');st.textContent=`
#menu.pq .boite{box-sizing:border-box!important;width:min(94vw,calc(var(--u)*120))!important;max-width:94vw!important}
#menu.pq .choix{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(calc(var(--u)*16.5),1fr));gap:calc(var(--u)*1.1);align-items:start;grid-template-rows:none!important;grid-auto-rows:max-content!important;align-content:start!important;
  max-height:calc(100vh - var(--u)*17)!important;overflow-y:auto;padding:calc(var(--u)*.6)}
#menu.pq .choix .opt.pq-tete{grid-column:1/-1}
#menu.pq .choix .opt.pq{display:block;padding:0!important;background:none!important;border:0!important;box-shadow:none!important;position:relative;min-height:0}
#menu.pq .choix .opt.pq>span{display:block;width:100%}
#menu.pq .opt.pq .cc{width:100%!important;height:auto!important;min-height:calc(var(--u)*20)!important;margin:0!important;transform:none!important;font-size:calc(var(--u)*1)}
#menu.pq .opt.pq .cc .art{height:calc(var(--u)*8.5)!important}
#menu.pq .opt.pq .cc .ct{font-size:calc(var(--u)*.95)!important;line-height:1.25!important;overflow:visible!important;max-height:none!important;-webkit-mask:none!important;mask:none!important}
#menu.pq .opt.pq.f{outline:calc(var(--u)*.3) solid #e8c77f;outline-offset:calc(var(--u)*.2)}
#menu.pq .pq-n{position:absolute;z-index:6;right:calc(var(--u)*.4);top:calc(var(--u)*.4);font:700 calc(var(--u)*1.1)/1 var(--c-goth,Georgia,serif);color:#fff3da;background:#5b3a12;border:2px solid #e8c77f;padding:.2em .45em}
#menu.pq .pq-etat{position:absolute;z-index:6;left:50%;top:38%;translate:-50% -50%;rotate:-12deg;font:700 calc(var(--u)*1.5)/1 var(--c-goth,Georgia,serif);color:#fff3da;background:#8a1a10;border:2px solid #fff3da;padding:.25em .6em;display:none;box-shadow:0 3px 10px #000}
#menu.pq .opt.pq.eteinte .cc{filter:grayscale(1) brightness(.55)}
#menu.pq .opt.pq.eteinte .pq-etat{display:block}
#menu.pq .pq-alerte{color:#8a1a10!important;font-weight:700}
@media (orientation:portrait){#menu.pq{--u:min(2.3vw,1.6vh)}#menu.pq .boite{width:96vw!important;max-width:96vw!important}}
@media (max-width:700px),(max-height:500px){#menu.pq .choix{grid-template-columns:repeat(auto-fill,minmax(calc(var(--u)*13),1fr))}}
`;document.head.appendChild(st);

const off=()=>{if(!S.paqOff)S.paqOff=[];return S.paqOff};
const estOff=k=>off().indexOf(k)>=0;
const actives=()=>S.deck.filter(k=>!estOff(k)).length;
let alerte='';

function ouvrir(f){const n={};for(const k of S.deck)n[k]=(n[k]||0)+1;const ks=Object.keys(n),tot=S.deck.length,act=actives(),min=Math.min(PAQ_MIN,tot);
  const corps=`<p class="petit">${alerte?`<b class="pq-alerte">${alerte}</b> · `:''}${act} carte${act>1?'s':''} active${act>1?'s':''} sur ${tot} · A ou un toucher : activer ou désactiver une carte (toutes ses copies). Une carte désactivée n'est plus piochée en combat. Au moins ${min} cartes actives.</p>`
    +`<p class="petit">Réserve : ${resHTML()} · main de ${mainMax()} cartes · ${pvMax()} PV.</p>`;
  const opts=[{l:'Retour',ic:'◆',cls:'pq-tete',go:()=>{alerte='';openMenu()}}]
    .concat(ks.map(k=>({l:`${carteHTML(k)}${n[k]>1?`<b class="pq-n">${n[k]} ×</b>`:''}<i class="pq-etat">Désactivée</i>`,cls:'pq'+(estOff(k)?' eteinte':''),go:()=>basculer(k,n[k])})));
  alerte='';
  ui('menu',{sur:'Paquet de combat',t:'Vos cartes de combat',corps,back:openMenu,opts,f:f||0});
  $('menu').classList.add('pq')}
function basculer(k,c){const f=UI?UI.f:0,o=off(),i=o.indexOf(k);
  if(i>=0)o.splice(i,1);
  else{if(actives()-c<Math.min(PAQ_MIN,S.deck.length)){alerte=`Impossible : il faut garder au moins ${Math.min(PAQ_MIN,S.deck.length)} cartes actives.`;ouvrir(f);return}o.push(k)}
  try{save()}catch(_){}ouvrir(f)}
openCombatPaquet=function(){ouvrir(1)};
/* le menu perd sa mise en page de paquet dès qu'un autre écran s'ouvre */
const ui0=ui;ui=function(host,o){if(host==='menu')$('menu').classList.remove('pq');return ui0.apply(this,arguments)};
/* à la manette : ▲ ▼ sautent d'une rangée de cartes */
const uiAct0=uiAct;uiAct=function(a,rep){if(!UI||UI.host!=='menu'||!$('menu').classList.contains('pq')||(a!=='up'&&a!=='down'))return uiAct0.apply(this,arguments);
  const c=[...$('menu-choix').children],t=c[1]?c[1].offsetTop:0;let cols=0;for(let i=1;i<c.length&&c[i].offsetTop===t;i++)cols++;cols=Math.max(1,cols);
  let i=UI.f;if(a==='down')i=i===0?1:Math.min(c.length-1,i+cols);else i=i<=cols?0:i-cols;UI.f=i;uiDraw();if(typeof tick==='function')tick()};
/* en combat, les cartes désactivées ne sont pas piochées (le duel d'Assemblée a son propre paquet) */
const pioche0=pioche;pioche=function(n){const C=CB;if(C&&!C.pqF){C.pqF=1;if(C.kind!=='duel'&&S.paqOff&&S.paqOff.length){const p=C.pile.filter(k=>!estOff(k));if(p.length>=Math.min(PAQ_MIN,C.pile.length))C.pile=p}}
  return pioche0.apply(this,arguments)};
})();
