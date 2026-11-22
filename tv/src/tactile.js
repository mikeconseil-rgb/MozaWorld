/* MozaWorld 2.34 : commandes tactiles pour téléphone (22 novembre, demande de l'utilisateur : « des commandes pour mon Pixel 9 Pro »).
   Chrome sur Android, téléphone tenu en paysage. Rien ne s'affiche tant que l'écran n'a pas été touché : la Xbox (manette),
   le clavier et la souris ne voient aucun changement. ?tactile=1 dans l'adresse force l'affichage (essais sur PC).

   Principe : une manette virtuelle. Le stick et les sceaux écrivent dans PAD (manette.js), exactement comme la vraie manette,
   donc chaque écran (monde, combat, menus, épreuves) répond sans code de plus.
   - moitié gauche de l'écran : stick flottant (il naît sous le pouce) ; marcher dans le monde, se déplacer dans les menus ;
   - moitié droite : glisser le doigt tourne la caméra ;
   - sceaux de cire à droite : A agir, B menu / retour, X marche auto / fin du tour, Y paquet / manœuvre, + carte du monde,
     zoom de la minicarte, courir (tenir) ;
   - toucher directement : un choix de menu (le valide), une carte en combat (1er toucher = la choisir, 2e = la jouer),
     un ennemi quand on vise (le frappe).
   Style « Carnet sombre » : cire rouge, encre, papier ; aucune image, aucun filtre (poids léger, comme pour la Xbox). */
(function(){
const FORCE=/[?&]tactile=1/.test(location.search);
if(window.Android)return;
/* 2.41.1 : rien du tout sur Xbox (Edge peut y signaler des « touchers » venus de la manette) */
if(/xbox/i.test(navigator.userAgent)&&!FORCE)return;
function manetteBranchee(){try{return[...(navigator.getGamepads?navigator.getGamepads():[])].some(g=>g&&g.connected)}catch(_){return false}}
let actif=false,racine=null,stick=null,lab={},orient=null;

const css=document.createElement('style');css.textContent=`
body.tactile{touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}
body.tactile .choix{touch-action:pan-y}
/* l'écran de voyage reste posé, invisible, par-dessus tout : il ne doit pas avaler les touchers */
body.tactile #voyage:not(.on){pointer-events:none}
/* l'aide clavier / manette du coin est remplacée par les sceaux */
body.tactile .hud.aide{display:none!important}
/* téléphone en paysage (~915 × 412) : l'unité de taille grossit pour que le texte reste lisible */
@media (max-height:600px){body.tactile{--u:min(1.25vw,2.5vh)}
  /* combat : cartes un peu plus petites, et une marge à droite pour les sceaux */
  body.tactile.tact-combat{--u:min(1vw,2.05vh)}body.tactile.tact-combat #combat{padding-right:calc(90px + 2vw)!important}}
#tact{position:fixed;inset:0;z-index:60;pointer-events:none;font-family:"Caveat","Segoe Script",cursive}
#tact .sceau{position:absolute;pointer-events:auto;width:calc(var(--t)*1);height:calc(var(--t)*1);border-radius:50%;display:flex;align-items:center;justify-content:center;
  --t:clamp(42px,11vh,58px);
  background:radial-gradient(circle at 36% 30%,#d0453a,#a3231a 46%,#6d140e 78%,#4a0c08);
  box-shadow:0 2px 0 #3a0905,0 4px 10px rgba(0,0,0,.55),inset 0 0 0 3px rgba(60,10,6,.55),inset 0 0 0 5px rgba(232,120,100,.18);
  color:#f3e3c4;font-family:"Grenze","Cormorant Garamond",Georgia,serif;font-weight:600;font-size:calc(var(--t)*.46);line-height:1;opacity:.88;transition:transform .08s,opacity .15s}
#tact .sceau::after{content:attr(data-l);position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:1px;white-space:nowrap;
  font-family:"Caveat","Segoe Script",cursive;font-weight:600;font-size:15px;color:#efe1c2;text-shadow:0 1px 3px #000,0 0 6px #000}
#tact .sceau.petit{--t:clamp(36px,9.5vh,46px);font-size:calc(var(--t)*.4)}
#tact .sceau.encre{background:radial-gradient(circle at 36% 30%,#3a2a1c,#1d140c 60%,#0d0906);box-shadow:0 3px 8px rgba(0,0,0,.6),inset 0 0 0 2px rgba(181,157,108,.55)}
#tact .sceau.on{transform:scale(.9);opacity:1}
#tact .sceau[hidden]{display:none}
#tact .stick{position:absolute;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;pointer-events:none;opacity:0;transition:opacity .2s;
  border:3px solid rgba(23,16,10,.75);box-shadow:0 0 0 2px rgba(181,157,108,.5),inset 0 0 18px rgba(0,0,0,.45);background:rgba(181,157,108,.12)}
#tact .stick.on{opacity:.9}
#tact .stick i{position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;border-radius:50%;
  background:radial-gradient(circle at 38% 32%,#e9dcbc,#b59d6c 60%,#7d6640);box-shadow:0 2px 6px rgba(0,0,0,.6),inset 0 0 0 2px rgba(23,16,10,.6)}
#tact-tourne{position:fixed;inset:0;z-index:70;display:none;align-items:center;justify-content:center;flex-direction:column;gap:14px;text-align:center;padding:24px;
  background:#120c07;color:#e9dcbc;font-family:"IM Fell English","Cormorant Garamond",Georgia,serif;font-size:22px}
#tact-tourne b{font-family:"Grenze Gotisch",Georgia,serif;font-size:34px;color:#d0453a;font-weight:600}
@media (orientation:portrait){body.tactile #tact-tourne{display:flex}}
`;document.head.appendChild(css);

/* ---------- Mise en place, au premier toucher ---------- */
function sceau(id,lettre,cls,x,y){const d=document.createElement('div');d.className='sceau '+(cls||'');d.textContent=lettre;
  d.style.right=x;d.style.bottom=y;racine.appendChild(d);lab[id]=d;return d}
function monter(){if(actif)return;actif=true;document.body.classList.add('tactile');
  racine=document.createElement('div');racine.id='tact';
  stick=document.createElement('div');stick.className='stick';stick.innerHTML='<i></i>';racine.appendChild(stick);
  /* grappe en losange, comme sur la manette : A en bas, B à droite, X à gauche, Y en haut */
  const T='clamp(42px,11vh,58px)',g=`calc(${T}*1.3)`,b='calc(22px + 2vh)',r='calc(14px + 2vw)';
  sceau('a','A','',`calc(${r} + ${g})`,b);
  sceau('b','B','',r,`calc(${b} + ${g})`);
  sceau('x','X','',`calc(${r} + ${g}*2)`,`calc(${b} + ${g})`);
  sceau('y','Y','',`calc(${r} + ${g})`,`calc(${b} + ${g}*2)`);
  /* petits sceaux d'encre : en haut à droite (carte, zoom) et au-dessus de la grappe (courir) */
  sceau('select','⌖','petit encre','calc(12px + 1.5vw)','calc(100% - 26px - 12vh - 46px)');
  sceau('lb','±','petit encre','calc(12px + 1.5vw + 58px)','calc(100% - 26px - 12vh - 46px)');
  sceau('rt','»','petit encre',r,`calc(${b} + ${g}*2.25)`);
  sceau('rb','+','petit encre','calc(12px + 1.5vw + 116px)','calc(100% - 26px - 12vh - 46px)');
  document.body.appendChild(racine);
  orient=document.createElement('div');orient.id='tact-tourne';orient.innerHTML='<b>⟲</b>Tournez le téléphone<br>en paysage pour jouer.';document.body.appendChild(orient);
  if(typeof padActif==='function')padActif();
  libelles();setInterval(libelles,250)}

/* ---------- Libellés selon l'écran en cours ---------- */
function montrer(id,l){const d=lab[id];if(!d)return;if(l==null){d.hidden=true;return}d.hidden=false;if(d.dataset.l!==l)d.dataset.l=l}
function libelles(){if(!actif)return;
  const m=typeof mode!=='undefined'?mode:'',C=typeof CB!=='undefined'?CB:null,libre=m==='epreuve'&&typeof E!=='undefined'&&E&&E.monde;
  const L={a:'OK',b:'Retour',x:null,y:null,select:null,lb:null,rb:null,rt:null};
  if(m==='combat'&&C){const vise=C.sel||C.pl||C.man;Object.assign(L,{a:C.sel?'Frapper':'Jouer',b:vise?'Annuler':'Pause'})}   /* « Fin du tour » et « Manœuvre » se touchent directement dans la main */
  else if(m==='monde')Object.assign(L,{a:'Agir',b:'Menu',x:P.auto?'Arrêt':'Auto',y:'Paquet',select:'Carte',lb:'Zoom',rt:'Courir'});
  else if(m==='carte')Object.assign(L,{b:'Fermer',x:'Couleurs',y:'Centrer',lb:'Loin',rb:'Près'});
  else if(libre)Object.assign(L,{a:'Agir',b:'Pause',rt:'Courir'});
  document.body.classList.toggle('tact-combat',m==='combat');
  for(const k in L)montrer(k,L[k])}

/* ---------- Toucher ---------- */
const doigts=new Map();   /* pointerId → {k:'stick'|'cam'|'btn'|'tap', ...} */
const RAYON=50;
function sceauSous(t){const s=t&&t.closest&&t.closest('#tact .sceau');return s&&!s.hidden?s:null}
function idDe(s){for(const k in lab)if(lab[k]===s)return k;return null}
function appuyer(id,d){
  if(id==='rt'){PAD.rt=d?1:0;PAD.b.rt=d;return}
  MZpad.btn(id,d)}
function estInteractif(t){return t&&t.closest&&t.closest('.choix .opt, #cb-main .cc, #combat .unite, #combat [class*="u-"], #combat .foe')}
function bas(e){if(e.pointerType==='mouse'&&!FORCE)return;
  if(!actif){if((e.pointerType!=='touch'||manetteBranchee())&&!FORCE)return;monter()}
  const s=sceauSous(e.target);
  if(s){e.preventDefault();const id=idDe(s);s.classList.add('on');doigts.set(e.pointerId,{k:'btn',id,el:s});appuyer(id,true);return}
  if(estInteractif(e.target)||e.target.closest&&e.target.closest('.choix')){doigts.set(e.pointerId,{k:'tap',x:e.clientX,y:e.clientY,t:e.target});return}
  const gauche=e.clientX<innerWidth*.45;
  if(gauche&&![...doigts.values()].some(d=>d.k==='stick')){
    doigts.set(e.pointerId,{k:'stick',x:e.clientX,y:e.clientY});stick.style.left=e.clientX+'px';stick.style.top=e.clientY+'px';stick.classList.add('on');
    stick.firstChild.style.transform='';e.preventDefault();return}
  doigts.set(e.pointerId,{k:'cam',x:e.clientX,y:e.clientY,x0:e.clientX,y0:e.clientY,t:e.target});e.preventDefault()}
function bouge(e){const d=doigts.get(e.pointerId);if(!d)return;
  if(d.k==='stick'){let dx=e.clientX-d.x,dy=e.clientY-d.y;const l=Math.hypot(dx,dy);if(l>RAYON){dx*=RAYON/l;dy*=RAYON/l}
    stick.firstChild.style.transform=`translate(${dx}px,${dy}px)`;PAD.lx=dx/RAYON;PAD.ly=dy/RAYON;e.preventDefault()}
  else if(d.k==='cam'){const dx=e.clientX-d.x,dy=e.clientY-d.y;d.x=e.clientX;d.y=e.clientY;
    if(typeof mode!=='undefined'&&(mode==='monde'||(mode==='epreuve'&&E&&E.monde))){P.yaw-=dx*.0085;P.pitch=clamp(P.pitch+dy*.005,.06,1.15)}e.preventDefault()}}
function haut(e){const d=doigts.get(e.pointerId);if(!d)return;doigts.delete(e.pointerId);
  if(d.k==='btn'){d.el.classList.remove('on');appuyer(d.id,false)}
  else if(d.k==='stick'){PAD.lx=PAD.ly=0;stick.classList.remove('on')}
  else if(e.type==='pointerup'&&(d.k==='tap'||d.k==='cam')&&Math.hypot(e.clientX-(d.x0??d.x),e.clientY-(d.y0??d.y))<14)toucher(d.t)}
/* un toucher bref sur un élément de l'interface */
function toucher(t){if(!t||!t.closest)return;
  /* choix de menu : le toucher le valide */
  const o=t.closest('.choix .opt');
  if(o&&typeof UI!=='undefined'&&UI){const box=o.parentNode,i=[...box.children].indexOf(o);
    if(box.id===UI.host+'-choix'&&UI.opts[i]&&!UI.opts[i].off){UI.f=i;uiDraw();act('ok',false)}return}
  const C=typeof CB!=='undefined'?CB:null;if(!C||C.busy)return;
  /* ennemi visé : le toucher frappe */
  if(C.sel){const v=vivants(C.foes),j=v.findIndex(u=>u.el&&u.el.contains(t));if(j>=0){C.ti=j;majUnites();cbInput('ok',false)}return}
  /* carte de la main : 1er toucher = la choisir, 2e = la jouer */
  const c=t.closest('#cb-main .cc');
  if(c&&!C.pl&&!C.man){const i=[...c.parentNode.children].indexOf(c);if(i<0)return;
    if(i===C.f)cbInput('ok',false);else{C.f=i;tick();dessinerMain()}}}
addEventListener('pointerdown',bas,{capture:true,passive:false});
addEventListener('pointermove',bouge,{capture:true,passive:false});
addEventListener('pointerup',haut,{capture:true});
addEventListener('pointercancel',haut,{capture:true});
/* pas de menu contextuel ni de loupe sur un appui long */
addEventListener('contextmenu',e=>{if(actif)e.preventDefault()});
/* le plein écran (xbox.js) passe aussi en paysage quand Chrome le permet */
addEventListener('fullscreenchange',()=>{if(actif&&document.fullscreenElement&&screen.orientation&&screen.orientation.lock)screen.orientation.lock('landscape').catch(()=>{})});
/* si un doigt reste « collé » (notification, changement d'appli), tout est relâché */
addEventListener('visibilitychange',()=>{if(document.hidden){for(const[id,d]of doigts)haut({pointerId:id,type:'pointercancel'});PAD.lx=PAD.ly=0;PAD.rt=0}});
if(FORCE)addEventListener('load',monter);
window.MZtactile={monter,actif:()=>actif};
})();
