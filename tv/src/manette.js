/* MozaWorld TV : manette (17 novembre). L'utilisateur a branché une manette Xbox sur la Bravia.
   Sur la télé, l'appli relaie elle-même les sticks et les boutons (MainActivity → window.MZpad), car la WebView ne les voit pas ;
   sur PC, on lit l'API Gamepad du navigateur. La télécommande et le clavier marchent toujours.

   Monde   : stick gauche = marcher dans la direction poussée (vitesse selon l'inclinaison), stick droit = caméra,
             gâchette droite (RT) ou clic du stick = courir, A = sauter / agir, X = marche automatique,
             Y = paquet de combat, B ou Menu (≡) = menu, Vue (⧉) = voyager.
   Combat  : stick, croix ou LB / RB = choisir la carte ou la cible, A = jouer, X = fin du tour, B = annuler / pause.
   Menus   : stick ou croix, A = valider, B = retour. Épreuves : stick ou croix, A = OK. */

const PAD={lx:0,ly:0,rx:0,ry:0,lt:0,rt:0,hx:0,hy:0,b:{},on:false,web:false,dir:{},dirT:{},rep:{},plein:0};
window.MZpad={axes(a){[PAD.lx,PAD.ly,PAD.rx,PAD.ry,PAD.lt,PAD.rt,PAD.hx,PAD.hy]=a.map(Number);padActif()},
  btn(n,d){if(d&&!PAD.b[n])padBouton(n);PAD.b[n]=!!d;padActif()}};
function padActif(){if(PAD.on)return;PAD.on=true;document.body.classList.add('manette');padTextes()}
function padInactif(){if(!PAD.on)return;PAD.on=false;document.body.classList.remove('manette')}

/* ---------- Boutons ---------- */
function padBouton(n){if(AX&&AX.state==='suspended')AX.resume();
  if(mode==='combat'&&CB){const C=CB;
    if(n==='x'){if(!C.busy&&!C.sel&&!C.pl&&!C.man){C.f=C.main.length;cbInput('ok',false)}return}
    if(n==='y'){if(!C.busy&&!C.sel&&!C.pl&&!C.man&&C.cases&&typeof debutManoeuvre==='function')debutManoeuvre();return}
    if(n==='lb'||n==='rb'){cbInput(n==='lb'?'left':'right',false);return}
    if(n==='a'){cbInput('ok',false);return}
    if(n==='b'||n==='start'){cbInput('back',false);return}return}
  if(mode==='monde'){
    if(n==='x'){P.auto=P.auto?0:1;return}
    if(n==='y'){mode='menu';document.body.classList.add('jeu-ouvert');openCombatPaquet();return}
    if(n==='select'){mode='menu';document.body.classList.add('jeu-ouvert');openVoyage();return}
    if(n==='start'){P.auto=0;openMenu();return}}
  if(n==='a')act('ok',false);
  else if(n==='b'||n==='start')act('back',false)}

/* ---------- Directions : stick gauche, croix ---------- */
/* Dans le monde, le stick gauche est analogique (move lit padMarche) ; partout ailleurs il sert de flèches, avec répétition. */
const DIRN=['up','down','left','right'];
function padDirs(stick){const s=stick?.5:9,b=PAD.b;
  return{up:PAD.ly<-s||PAD.hy<-.5||b.du,down:PAD.ly>s||PAD.hy>.5||b.dd,left:PAD.lx<-s||PAD.hx<-.5||b.dl,right:PAD.lx>s||PAD.hx>.5||b.dr}}
function pollPad(){const t=performance.now();
  /* PC : API Gamepad standard (manette Xbox branchée sur l'ordinateur) */
  const ps=navigator.getGamepads?navigator.getGamepads():[];
  for(const p of ps){if(!p||!p.connected)continue;const B=i=>!!(p.buttons[i]&&p.buttons[i].pressed),A=i=>{const v=p.axes[i]||0;return Math.abs(v)<.15?0:v};
    const k=[A(0),A(1),A(2),A(3),p.buttons[6]?p.buttons[6].value:0,p.buttons[7]?p.buttons[7].value:0,0,0];
    const names={a:0,b:1,x:2,y:3,lb:4,rb:5,select:8,start:9,ls:10,rs:11,du:12,dd:13,dl:14,dr:15};
    const any=k.some(v=>Math.abs(v)>.3)||Object.values(names).some(B);
    if(!PAD.web&&!any)break;PAD.web=true;
    [PAD.lx,PAD.ly,PAD.rx,PAD.ry,PAD.lt,PAD.rt]=k;
    for(const n in names)MZpad.btn(n,B(names[n]));break}
  if(!PAD.on)return;
  const libre=mode==='monde'||(mode==='epreuve'&&E&&E.monde);
  const d=padDirs(!libre);
  for(const a of DIRN){
    if(d[a]&&!PAD.dir[a]){PAD.dirT[a]=t;PAD.rep[a]=t+380;held[a]=t;heldT[a]=t;act(a,false)}
    else if(d[a]){held[a]=t;if(!libre&&t>PAD.rep[a]){PAD.rep[a]=t+150;act(a,true)}}
    else if(PAD.dir[a])held[a]=0;
    PAD.dir[a]=!!d[a]}}

/* ---------- Marche analogique et caméra (appelées par move) ---------- */
/* renvoie la direction et la vitesse de marche voulues par le stick gauche, ou null s'il est au repos */
function padMarche(dt){if(!PAD.on)return null;
  /* caméra : stick droit, en tout temps dans le monde */
  if(PAD.rx)P.yaw-=PAD.rx*dt*2.8;
  if(PAD.ry)P.pitch=clamp(P.pitch+PAD.ry*dt*1.4,.06,1.15);
  const fwd=-PAD.ly,str=PAD.lx,mag=Math.min(1,Math.hypot(fwd,str));
  if(mag<.18){PAD.plein=0;return null}
  P.auto=0;
  PAD.plein=mag>.92?PAD.plein+dt:0;
  const court=PAD.rt>.3||PAD.b.ls||PAD.b.rt||PAD.plein>.6;
  const m=P.yaw-Math.atan2(str,fwd);
  /* la caméra se replace doucement derrière le héros quand on avance sans toucher au stick droit */
  if(!PAD.rx&&fwd>-.2){const df=((m-P.yaw)%TAU+TAU+PI)%TAU-PI;P.yaw+=df*Math.min(1,dt*1.1*mag)}
  return{m,sp:(court?31:17)*Math.max(.35,mag)}}

/* ---------- Aide à l'écran : quand la manette sert, OK devient A, Retour devient B, etc. ---------- */
const BT=(l,c)=>`<span class="bt ${c}">${l}</span>`;
function padRemplacer(el){if(!PAD.on||!el||el.dataset.pad===el.innerHTML)return;let h=el.innerHTML;
  h=h.replace(/<span class="ok">OK<\/span>/g,BT('A','a')+' ').replace(/▼ fin du tour/g,BT('X','x')+' fin du tour').replace(/▼ annuler/g,BT('B','b')+' annuler')
   .replace(/◀ ▶/g,'◀ ▶').replace(/\bOK\b/g,BT('A','a')).replace(/Retour pause/g,BT('B','b')+' pause').replace(/tenez ▲ pour courir/g,'gâchette RT pour courir');
  el.innerHTML=h;el.dataset.pad=h}
function padTextes(){for(const id of['cb-aide','invite','j-c','cb-log'])padRemplacer($(id))}
try{const mo=new MutationObserver(()=>{if(PAD.on)padTextes()});
  for(const id of['cb-aide','invite','j-c','cb-log'])mo.observe(document.getElementById(id),{childList:true,characterData:true,subtree:true})}catch(e){console.log('manette : aide',e)}
