/* MozaWorld TV : version web pour navigateur (Edge sur Xbox Series, PC) — 17 novembre.
   La même page sert l'APK Bravia ; rien ici ne s'active dans l'appli (window.Android).
   - Plein écran au premier appui (A, clic ou touche) : un navigateur l'exige après un geste.
   - Curseur masqué quand la manette sert (il revient si la souris bouge).
   - Edge Xbox : en « contrôles de navigation », la manette pilote un curseur et ne parle pas au jeu.
     Un bandeau explique comment passer en « contrôles de jeu » (maintenir ≡ Menu), et disparaît dès que la manette répond.
   - Edge peut aussi traduire A / B en Entrée / Retour arrière : on ignore ces doublons juste après un appui manette.
   Chargé après manette.js et avant main.js (ses écouteurs passent donc en premier). */
(function(){
  if(window.Android)return;
  const XBOX=/xbox/i.test(navigator.userAgent)||/[?&]xbox=1/.test(location.search);
  try{navigator.gamepadInputEmulation='gamepad'}catch(_){}  /* ancien Edge Xbox : coupe le mode souris */

  const css=document.createElement('style');
  css.textContent=`html.sans-curseur,html.sans-curseur *{cursor:none!important}
#xbox-aide{position:fixed;z-index:50;left:50%;bottom:max(14px,6vh);transform:translateX(-50%);max-width:min(92vw,60em);box-sizing:border-box;
  padding:.8em 1.3em;background:rgba(13,12,15,.92);border:1px solid rgba(201,164,92,.55);border-radius:3px;color:#efe7d6;
  font-family:var(--texte);font-size:calc(var(--u)*1.25);line-height:1.45;text-align:center;pointer-events:none;transition:opacity .5s}
#xbox-aide b{color:#e8c77f;font-weight:600}
#xbox-aide.parti{opacity:0}`;
  document.head.appendChild(css);

  /* ---------- Plein écran au premier geste ---------- */
  const pleinEcran=()=>{const d=document.documentElement;
    if(document.fullscreenElement||document.webkitFullscreenElement)return;
    try{const r=(d.requestFullscreen||d.webkitRequestFullscreen).call(d,{navigationUI:'hide'});if(r&&r.catch)r.catch(()=>{})}catch(_){}};
  let fait=false;
  const premier=()=>{if(fait)return;fait=true;pleinEcran()};
  addEventListener('pointerdown',premier,{capture:true,once:true});
  addEventListener('keydown',premier,{capture:true,once:true});

  /* ---------- Curseur ---------- */
  let mx=-1,my=-1;
  const cacher=()=>document.documentElement.classList.add('sans-curseur');
  if(XBOX)cacher();
  addEventListener('mousemove',e=>{if(XBOX)return;
    if(Math.abs(e.clientX-mx)+Math.abs(e.clientY-my)>4)document.documentElement.classList.remove('sans-curseur');
    mx=e.clientX;my=e.clientY},{passive:true});

  /* ---------- Bandeau d'aide Xbox ---------- */
  let aide=null;
  if(XBOX){aide=document.createElement('div');aide.id='xbox-aide';
    aide.innerHTML='Manette : <b>maintenez le bouton ≡ Menu</b>, choisissez <b>« Utiliser les contrôles de jeu »</b>, puis appuyez sur A.<br>'+
      'Le bouton ⧉ Vue passe en plein écran. Si la manette ne répond plus : ouvrez et refermez le guide (bouton Xbox).';
    document.body.appendChild(aide)}

  /* ---------- Appuis manette : temps du dernier, pour filtrer les doublons clavier ---------- */
  const dernier={ok:0,back:0};
  const orig=window.MZpad&&MZpad.btn;
  if(orig)MZpad.btn=function(n,d){
    if(d&&!PAD.b[n]){const t=performance.now();
      if(n==='a')dernier.ok=t;if(n==='b'||n==='start')dernier.back=t;
      premier();cacher();
      if(aide){aide.classList.add('parti');setTimeout(()=>{aide&&aide.remove();aide=null},600)}}
    return orig.apply(this,arguments)};
  const doublon=a=>PAD.web&&performance.now()-(dernier[a]||0)<350;
  addEventListener('keydown',e=>{
    const k=e.key,c=e.keyCode;
    const act=(k==='Enter'||k===' '||c===13||c===32||k==='GamepadA'||c===195)?'ok':(k==='Escape'||k==='Backspace'||k==='BrowserBack'||k==='GamepadB'||c===8||c===27||c===196)?'back':null;
    if(act&&doublon(act)){e.preventDefault();e.stopImmediatePropagation()}
    if(PAD.web&&/^Gamepad/.test(k||''))e.preventDefault()},{capture:true});
  addEventListener('popstate',e=>{if(doublon('back')){try{history.pushState({mz:1},'')}catch(_){}e.stopImmediatePropagation()}});
})();
