/* MozaWorld 2.24 : minicarte et carte du monde (20 nov., « améliore encore la minimap pour qu'elle soit plus jolie et pratique »).
   Avant : un carré qui montrait toute la région (une cinquantaine de zones) en tout petit, illisible à la télé.
   1. La minicarte devient un médaillon rond centré sur le héros, qui tourne avec la caméra (le haut = là où l'on regarde,
      comme le stick gauche). Chaque zone a la couleur de son type et l'icône de sa tuile Girih ; vos zones ont un bord d'or ;
      le niveau de chaque zone proche s'affiche, bleu pour le pôle −, ambre pour le pôle +. Une boussole marque le Nord.
      Au bord du médaillon, des flèches montrent ce qui est hors de vue : Pierres où une activité vous attend (or),
      hordes, siège et contestation (rouge). Sous le médaillon : le nom de la zone, son type et son niveau.
      LB (ou la touche Z) change le zoom : proche, moyen, large.
   2. Vue (⧉) ou la touche C ouvre la carte du monde : toute la mosaïque (925 tuiles), Nord en haut. Stick gauche ou flèches
      pour se déplacer, gâchettes LT / RT (ou + et −) pour zoomer, X pour colorer par type ou par niveau, Y pour revenir
      sur le héros, A pour voyager vers la zone visée, B pour fermer. La liste « Voyager vers une zone » reste au menu.
   Ce fichier remplace drawMini() de main.js ; les calques des autres modules (routes, rivaux, hordes, siège, tours,
   caravanes) sont réutilisés tels quels, avec leurs textes gardés droits quand la minicarte tourne. */
(function(){
const TYPES={CIT:{n:'Citadelle',c:[217,164,65]},DON:{n:'Donjon',c:[176,72,92]},RES:{n:'Ressource',c:[98,160,92]},
  ANT:{n:'Antre',c:[146,104,186]},MAR:{n:'Assemblée',c:[78,136,190]}};
const typeDe=Z=>{const t=Z.mod||Z.id;return TYPES[t]?t:(Z.d&&Z.d.mod)||'RES'};
const rgba=(c,a,k)=>`rgba(${Math.round(c[0]*(k||1))},${Math.round(c[1]*(k||1))},${Math.round(c[2]*(k||1))},${a})`;
const niv=Z=>(S.lv&&S.lv[Z.id])||0;
const nomCourt=Z=>((Z.info&&Z.info.nom)||Z.id).split(',')[0];
const poleNom=Z=>{const l=niv(Z),I=Z.info||{};return l>0?(I.pp||'Abondance'):l<0?(I.pm||'Pénurie'):'Équilibre'};
const MONDE=()=>(typeof ZW!=='undefined'?ZW:ZN);
const MINUS='#8fc4ee',PLUS='#f2b25c',OR='#e8c77f';

/* icône de la tuile Girih de chaque type, dessinée en vecteurs (pas de police : rendu identique sur la Xbox) */
function icone(c,t,x,y,r,fill,stroke){c.save();c.translate(x,y);c.beginPath();
  const poly=(n,rot,rr)=>{for(let i=0;i<n;i++){const a=rot+i*TAU/n;i?c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):c.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}c.closePath()};
  if(t==='CIT')poly(10,-PI/2,r);
  else if(t==='DON')poly(5,-PI/2,r);
  else if(t==='RES')poly(6,0,r*.95);
  else if(t==='MAR'){c.moveTo(0,-r);c.lineTo(r*.62,0);c.lineTo(0,r);c.lineTo(-r*.62,0);c.closePath()}
  else{/* Antre : le « papillon » (nœud) */c.moveTo(-r,-r*.6);c.lineTo(-r*.25,0);c.lineTo(-r,r*.6);c.lineTo(r,r*.6);c.lineTo(r*.25,0);c.lineTo(r,-r*.6);c.closePath()}
  if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.lineWidth=1.4;c.stroke()}c.restore()}

/* textes droits quand le médaillon tourne : on enveloppe le contexte pour les calques des autres modules */
function ctxDroit(c,ang){return new Proxy(c,{get(t,k){if(k==='fillText'||k==='strokeText')return(s,x,y,...r)=>{t.save();t.translate(x,y);t.rotate(-ang);t[k](s,0,0,...r);t.restore()};
  const v=t[k];return typeof v==='function'?v.bind(t):v},set(t,k,v){t[k]=v;return true}})}

/* ================= 1. Minicarte ================= */
const st=document.createElement('style');st.textContent=`
.hud.carte.mc2{background:none;border:0;box-shadow:none;padding:0;display:flex;flex-direction:column;align-items:center}
.hud.carte.mc2 canvas{width:calc(var(--u)*19.5);height:calc(var(--u)*19.5);background:none;border-radius:50%;filter:drop-shadow(0 8px 22px rgba(0,0,0,.55))}
.hud.carte.mc2 .lg{display:none}
.mc2 .mc-nom{margin-top:calc(var(--u)*.35);text-align:center;background:linear-gradient(90deg,transparent,rgba(13,12,15,.82) 18%,rgba(13,12,15,.82) 82%,transparent);
  padding:calc(var(--u)*.3) calc(var(--u)*2.2);min-width:calc(var(--u)*16);max-width:calc(var(--u)*24)}
.mc2 .mc-nom b{display:block;font-family:var(--titre);font-weight:600;font-size:calc(var(--u)*1.25);color:var(--ivoire,#efe7d6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.15}
.mc2 .mc-nom span{display:block;font-size:calc(var(--u)*.8);letter-spacing:.14em;text-transform:uppercase;color:var(--laiton,#c9a45c);white-space:nowrap}
.mc2 .mc-nom .m{color:${MINUS}}.mc2 .mc-nom .p{color:${PLUS}}
body.epure .hud.carte.mc2{scale:.82;opacity:.9}
/* carte du monde */
#mz-monde{position:fixed;inset:0;z-index:60;background:radial-gradient(ellipse at 50% 45%,#16131b,#08070a 80%);display:none}
#mz-monde.on{display:block;animation:mzMondeIn .35s ease both}
@keyframes mzMondeIn{from{opacity:0}to{opacity:1}}
#mz-monde canvas{position:absolute;inset:0;width:100%;height:100%}
#mz-monde .tete{position:absolute;left:var(--mx);top:var(--my);pointer-events:none}
#mz-monde .tete .t{font-family:var(--titre);font-size:calc(var(--u)*2.6);font-weight:600;color:var(--ivoire,#efe7d6);text-shadow:0 2px 14px #000;line-height:1}
#mz-monde .tete .sur{margin-bottom:calc(var(--u)*.4)}
#mz-monde .fiche{position:absolute;right:var(--mx);top:var(--my);width:calc(var(--u)*24);padding:calc(var(--u)*1.2) calc(var(--u)*1.5);pointer-events:none}
#mz-monde .fiche .nm{font-family:var(--titre);font-size:calc(var(--u)*1.9);font-weight:600;line-height:1.08;margin:.15em 0 .1em}
#mz-monde .fiche .ty{font-size:calc(var(--u)*.85);letter-spacing:.14em;text-transform:uppercase;color:var(--laiton,#c9a45c)}
#mz-monde .fiche .li{font-size:calc(var(--u)*1.05);color:var(--sable,#cfc3a8);line-height:1.6;margin-top:.5em}
#mz-monde .fiche .li i{font-style:normal;color:var(--ivoire,#efe7d6)}
#mz-monde .fiche .m{color:${MINUS}}#mz-monde .fiche .p{color:${PLUS}}#mz-monde .fiche .r{color:#ff9a8a}#mz-monde .fiche .o{color:${OR}}
#mz-monde .fiche .go{margin-top:.8em;padding-top:.6em;border-top:1px solid rgba(201,164,92,.25);font-size:calc(var(--u)*1.05);color:var(--ivoire,#efe7d6)}
#mz-monde .leg{position:absolute;left:var(--mx);bottom:var(--my);padding:calc(var(--u)*.8) calc(var(--u)*1.2);font-size:calc(var(--u)*.92);color:var(--sable,#cfc3a8);line-height:1.75;pointer-events:none}
#mz-monde .leg canvas{position:static;width:calc(var(--u)*1.1);height:calc(var(--u)*1.1);vertical-align:-.15em;margin-right:.45em}
#mz-monde .leg .lg2{display:flex;gap:calc(var(--u)*1.1);flex-wrap:wrap;max-width:calc(var(--u)*34)}
#mz-monde .cmd{position:absolute;right:var(--mx);bottom:var(--my);padding:calc(var(--u)*.7) calc(var(--u)*1.1);font-size:calc(var(--u)*1);line-height:1.8;color:var(--sable,#cfc3a8);text-align:right;pointer-events:none}
#mz-monde .cmd i{font-style:normal;color:var(--ivoire,#efe7d6);font-weight:500}
`;document.head.appendChild(st);

const boite=document.querySelector('.hud.carte');const cv=$('mini');
let nomEl=null;
if(boite&&cv){boite.classList.add('mc2');cv.width=cv.height=440;nomEl=document.createElement('div');nomEl.className='mc-nom';boite.appendChild(nomEl)}
const W=440,C=W/2,R=C-26;   /* rayon utile du médaillon, en pixels de canvas */
const ZOOMS=[{n:'proche',r:950},{n:'moyen',r:1700},{n:'large',r:3000}];   /* une Citadelle fait environ 1 200 m de large */
let zi=1;try{const v=localStorage.getItem('mz-mini-zoom');if(v!==null&&+v>=0&&+v<3)zi=+v}catch(_){}
let zr=ZOOMS[zi].r,noteZoom=0;
function zoomMini(){zi=(zi+1)%3;try{localStorage.setItem('mz-mini-zoom',zi)}catch(_){}noteZoom=1.6}

function tracer(c,Z,s,ox,oz){c.beginPath();Z.poly.forEach((p,i)=>{const x=(p[0]+ox)*s,y=(p[1]+oz)*s;i?c.lineTo(x,y):c.moveTo(x,y)});c.closePath()}
function actif(Z){return Z.alt&&S.own[Z.id]&&restLeft(Z)<=0&&!((Z.mod||Z.id)==='RES'&&niv(Z)>=3)}
let nomKey='';
function majNom(){if(!nomEl)return;const Z=curZ;let h='';
  if(Z){const l=niv(Z),t=TYPES[typeDe(Z)].n,cl=l<0?'m':l>0?'p':'';
    h=`<b>${nomCourt(Z)}</b><span>${S.own[Z.id]?'⚑ ':''}${t} · <em class="${cl}" style="font-style:normal">${sgn(l)||'0'} ${poleNom(Z)}</em></span>`}
  if(noteZoom>0)h=`<b>Zoom ${ZOOMS[zi].n}</b><span>${typeof PAD!=='undefined'&&PAD.on?'LB':'Z'} pour changer</span>`;
  if(h!==nomKey){nomKey=h;nomEl.innerHTML=h}}

let lastT=0;
drawMini=function(T){if(!cv)return;const mc=cv.getContext('2d'),dt=Math.min(.2,Math.max(0,T-lastT));lastT=T;
  if(noteZoom>0)noteZoom-=dt;zr+=(ZOOMS[zi].r-zr)*Math.min(1,dt*6);
  const s=R/zr,ang=P.yaw-PI;   /* rotation : le regard de la caméra pointe vers le haut */
  const pulse=.6+.4*Math.sin(T*4);
  mc.setTransform(1,0,0,1,0,0);mc.clearRect(0,0,W,W);
  /* fond du médaillon */
  mc.save();mc.beginPath();mc.arc(C,C,R,0,TAU);mc.clip();
  const g=mc.createRadialGradient(C,C*.9,R*.1,C,C,R);g.addColorStop(0,'#211c25');g.addColorStop(1,'#0c0b0f');mc.fillStyle=g;mc.fillRect(0,0,W,W);
  mc.translate(C,C);mc.rotate(ang);
  const ox=-P.x,oz=-P.z,vis=[],R2=(zr*1.5)**2;
  for(const Z of MONDE()){const dx=Z.c[0]-P.x,dz=Z.c[1]-P.z;if(dx*dx+dz*dz<R2+zr*900)vis.push(Z)}
  /* tuiles : couleur du type, sombre si sauvage ; joints sombres comme une mosaïque */
  for(const Z of vis){const t=TYPES[typeDe(Z)],own=S.own[Z.id],l=niv(Z),pret=!(Z.d&&Z.d.pret===false);
    tracer(mc,Z,s,ox,oz);
    {const r=roi(Z.id);mc.fillStyle=r?rgba(r.c,.92,pret?1:.8):pret?rgba(t.c,.55,.42):rgba(t.c,.3,.3)}mc.fill();
    if(l){mc.fillStyle=l<0?`rgba(80,140,210,${.05+.035*-l})`:`rgba(240,160,70,${.05+.035*l})`;mc.fill()}
    mc.lineJoin='round';mc.lineWidth=3;mc.strokeStyle='#0b0a0d';mc.stroke()}
  royaumes(mc,vis,s,ox,oz,3,true);   /* 2.28 : mêmes royaumes que la carte du monde, sans noms ni halo (dessinée à chaque image) */
  if(curZ){tracer(mc,curZ,s,ox,oz);mc.save();mc.shadowColor='rgba(255,255,255,.8)';mc.shadowBlur=10;mc.lineWidth=2.6;mc.strokeStyle='#fff';mc.stroke();mc.restore()}
  /* calques des autres modules (textes gardés droits) */
  const D=ctxDroit(mc,ang);
  for(const f of['dessinerRoutes','dessinerRivaux','dessinerHordes','dessinerSiege','dessinerTours','dessinerCaravanes'])
    if(typeof window[f]==='function')try{window[f](D,s,ox,oz,T)}catch(_){}
  /* icônes, niveaux, Pierres */
  const ir=Math.max(8,Math.min(13,s*70));
  for(const Z of vis){const t=typeDe(Z),own=S.own[Z.id],l=niv(Z),p=[(Z.c[0]+ox)*s,(Z.c[1]+oz)*s];
    const q=[p[0]*Math.cos(ang)-p[1]*Math.sin(ang),p[0]*Math.sin(ang)+p[1]*Math.cos(ang)];   /* position à l'écran, pour garder droit */
    if(Math.hypot(q[0],q[1])>R+20)continue;
    mc.save();mc.rotate(-ang);
    icone(mc,t,q[0],q[1]-ir*.25,ir,own?'#1a1410':'rgba(239,231,214,.55)',own?'rgba(255,230,170,.9)':null);
    if(own||Z===curZ||s>.17){mc.font='700 16px sans-serif';mc.textAlign='center';mc.textBaseline='top';mc.lineWidth=3;mc.strokeStyle='rgba(10,9,12,.9)';
      const tx=sgn(l)||'0';mc.strokeText(tx,q[0],q[1]+ir*.95);mc.fillStyle=l<0?MINUS:l>0?PLUS:'#e9dfc8';mc.fillText(tx,q[0],q[1]+ir*.95)}
    mc.restore();
    if(Z.alt){const a=Z.alt,x=(a.x+ox)*s,y=(a.z+oz)*s,ok=actif(Z),rp=restLeft(Z)>0;if(!own&&!ok)continue;
      const r=ok?5+2*pulse:4;mc.fillStyle=rp?'#7d7466':ok?`rgba(255,217,138,${.65+.35*pulse})`:'rgba(201,164,92,.85)';
      mc.beginPath();mc.moveTo(x,y-r);mc.lineTo(x+r*.7,y);mc.lineTo(x,y+r);mc.lineTo(x-r*.7,y);mc.closePath();mc.fill();
      if(ok){mc.strokeStyle=`rgba(255,217,138,${.55*pulse})`;mc.lineWidth=1.5;mc.beginPath();mc.arc(x,y,r+5,0,TAU);mc.stroke()}}}
  for(const q of (typeof secrets!=='undefined'?secrets:[])){if(q.found||!q.cond(q.Z.lv))continue;const p=q.pos();if(Math.hypot(p[0]-P.x,p[2]-P.z)>700)continue;   /* seulement les secrets proches : moins de bruit */mc.fillStyle='#ffe9a8';mc.beginPath();mc.arc((p[0]+ox)*s,(p[2]+oz)*s,2.6,0,TAU);mc.fill()}
  if(typeof E!=='undefined'&&E&&E.monde)for(const o of E.orbs)if(!o.got){mc.fillStyle='#b8ff9a';mc.beginPath();mc.arc((o.x+ox)*s,(o.z+oz)*s,3.6+Math.sin(T*6),0,TAU);mc.fill()}
  mc.restore();
  /* vignette intérieure */
  const v=mc.createRadialGradient(C,C,R*.62,C,C,R);v.addColorStop(0,'rgba(8,7,10,0)');v.addColorStop(1,'rgba(8,7,10,.75)');mc.fillStyle=v;mc.beginPath();mc.arc(C,C,R,0,TAU);mc.fill();
  /* repères hors de vue, sur le bord : activités (or), menaces (rouge) */
  const reperes=[];
  for(const Z of ZN)if(actif(Z)){const d=Math.hypot(Z.alt.x-P.x,Z.alt.z-P.z);if(d>zr*.9)reperes.push({x:Z.alt.x,z:Z.alt.z,d,c:OR})}
  reperes.sort((a,b)=>a.d-b.d);reperes.length=Math.min(reperes.length,3);
  const menace=(id)=>{const Z=ZB[id];if(Z&&Math.hypot(Z.c[0]-P.x,Z.c[1]-P.z)>zr*.9)reperes.push({x:Z.c[0],z:Z.c[1],c:'#ff6a55',m:1})};
  if(S.hordes)for(const k in S.hordes)menace(S.hordes[k].cible);
  if(S.siege&&S.siege.cit)menace(S.siege.cit);
  if(S.riv&&S.riv.c)menace(S.riv.c.id);
  for(const r of reperes){const dx=r.x-P.x,dz=r.z-P.z,a0=Math.atan2(dz,dx)+ang,x=C+Math.cos(a0)*(R-11),y=C+Math.sin(a0)*(R-11);
    mc.save();mc.translate(x,y);mc.rotate(a0);mc.fillStyle=r.m?`rgba(255,106,85,${.6+.4*pulse})`:r.c;mc.strokeStyle='#0b0a0d';mc.lineWidth=2;
    mc.beginPath();mc.moveTo(9,0);mc.lineTo(-6,-7);mc.lineTo(-2,0);mc.lineTo(-6,7);mc.closePath();mc.stroke();mc.fill();mc.restore()}
  /* le héros : flèche au centre, selon son orientation */
  mc.save();mc.translate(C,C);mc.rotate(P.yaw-(P.face!=null?P.face:P.yaw));
  mc.beginPath();mc.arc(0,0,15,0,TAU);mc.fillStyle='rgba(255,255,255,.08)';mc.fill();
  mc.fillStyle='#fff';mc.strokeStyle='#0b0a0d';mc.lineWidth=2.5;mc.beginPath();mc.moveTo(0,-13);mc.lineTo(8.5,9);mc.lineTo(0,4.5);mc.lineTo(-8.5,9);mc.closePath();mc.stroke();mc.fill();mc.restore();
  /* anneau d'or, graduations et Nord */
  mc.save();mc.translate(C,C);
  mc.lineWidth=7;mc.strokeStyle='#17141b';mc.beginPath();mc.arc(0,0,R+5,0,TAU);mc.stroke();
  mc.lineWidth=1.6;mc.strokeStyle=OR;mc.beginPath();mc.arc(0,0,R+1.5,0,TAU);mc.stroke();
  mc.lineWidth=1;mc.strokeStyle='rgba(232,199,127,.5)';mc.beginPath();mc.arc(0,0,R+9,0,TAU);mc.stroke();
  for(let i=0;i<40;i++){const a=i*TAU/40+ang,l=i%10===0?7:i%5===0?5:3;mc.strokeStyle=i%5?'rgba(232,199,127,.45)':OR;mc.lineWidth=i%5?1:1.6;
    mc.beginPath();mc.moveTo(Math.cos(a)*(R+2),Math.sin(a)*(R+2));mc.lineTo(Math.cos(a)*(R+2+l),Math.sin(a)*(R+2+l));mc.stroke()}
  /* Nord = −z dans le monde (vers le haut de l'ancienne carte) */
  const aN=-PI/2+ang,nx=Math.cos(aN)*(R+1),ny=Math.sin(aN)*(R+1);
  mc.fillStyle='#17141b';mc.strokeStyle=OR;mc.lineWidth=1.6;mc.beginPath();mc.arc(nx,ny,12,0,TAU);mc.fill();mc.stroke();
  mc.fillStyle=OR;mc.font='700 15px Georgia,serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillText('N',nx,ny+1);
  mc.restore();
  majNom()};

/* ================= 2. Carte du monde ================= */
const ov=document.createElement('div');ov.id='mz-monde';ov.innerHTML=`<canvas></canvas>
<div class="tete"><div class="sur">MozaWorld</div><div class="t">Carte du monde</div></div>
<div class="fiche cadre"></div>
<div class="leg cadre"><div class="lg2"></div></div>
<div class="cmd cadre"></div>`;document.body.appendChild(ov);
const mcv=ov.querySelector('canvas'),fiche=ov.querySelector('.fiche'),leg=ov.querySelector('.lg2'),cmd=ov.querySelector('.cmd');
const K={x:0,z:0,w:6000,cible:null,col:0,sale:true,ouverte:false,vise:null,dpr:1,fx:0,fz:0};
let MB=null;function bornes(){if(MB)return MB;let a=1e9,b=-1e9,c=1e9,d=-1e9;for(const Z of MONDE())for(const p of Z.poly){a=Math.min(a,p[0]);b=Math.max(b,p[0]);c=Math.min(c,p[1]);d=Math.max(d,p[1])}return MB={x0:a,x1:b,z0:c,z1:d}}
function legende(){const L=[];
  if(K.col===2&&typeof FACTIONS!=='undefined'){   /* 2.46 : légende des factions, avec le nombre de zones de chacune */
    const n={};for(const Z of MONDE()){const f=factionDe(Z);if(f)n[f.k]=(n[f.k]||0)+1}
    for(const k in FACTIONS)L.push(`<span><canvas width="24" height="24" data-f="${k}"></canvas><b style="color:${FACTIONS[k].col}">${FACTIONS[k].nom}</b> ${n[k]||0}</span>`);
    L.push(`<span style="color:${OR}">▢ à vous</span>`);
    leg.innerHTML='<div class="lg2">'+L.join('')+'</div>';leg.querySelectorAll('canvas').forEach(c=>{const x=c.getContext('2d'),k=c.dataset.f;sigleFaction(x,k,12,12,9,FACTIONS[k].col,'#0b0a0d')});return}
  for(const t in TYPES)L.push(`<span><canvas width="24" height="24" data-t="${t}"></canvas>${TYPES[t].n}</span>`);
  L.push(`<span style="color:${OR}">▢ à vous</span>`);
  if(K.col)L.push(`<span><b style="color:${MINUS}">−7</b> … <b style="color:${PLUS}">+7</b> niveaux</span>`);
  L.push(`<span style="color:#ff8a75">➤ hordes</span>`);
  leg.innerHTML=L.join('');leg.querySelectorAll('canvas').forEach(c=>{const x=c.getContext('2d'),t=c.dataset.t;icone(x,t,12,12,10,rgba(TYPES[t].c,1),'#0b0a0d')})}
const PROCHAIN=['couleurs des niveaux','factions','couleurs des types'];   /* 2.46 : X fait tourner types, niveaux, factions */
function commandes(){const pad=typeof PAD!=='undefined'&&PAD.on;
  cmd.innerHTML=pad?`<i>Stick gauche</i> se déplacer · <i>LT RT</i> zoom<br><i>X</i> ${PROCHAIN[K.col]} · <i>Y</i> revenir au héros<br><i>A</i> voyager · <i>B</i> fermer`
    :`<i>Flèches</i> se déplacer · <i>+ −</i> zoom<br><i>X</i> ${PROCHAIN[K.col]} · <i>Y</i> revenir au héros<br><i>Entrée</i> voyager · <i>Échap</i> fermer`}
function ouvrirCarte(){if(typeof mode==='undefined'||mode!=='monde'||!started)return;
  P.auto=0;mode='carte';K.ouverte=true;K.x=P.x;K.z=P.z;K.fx=K.fz=0;K.sale=true;K.w=Math.min(K.w,9000);
  document.body.classList.add('jeu-ouvert');ov.classList.add('on');legende();commandes();taille();K.vise=null;majFiche()}
function fermerCarte(){if(!K.ouverte)return;K.ouverte=false;ov.classList.remove('on');mcv.width=mcv.height=1;   /* 2.30.4 : rend la mémoire de l'image tant que la carte est fermée */if(mode==='carte'){mode='monde';document.body.classList.remove('jeu-ouvert')}}
function taille(){const d=1;   /* 2.30.4 : image de la carte plafonnée à la taille de l'écran (dpr 2 = 4 fois la mémoire, plantage au dézoom sur Xbox) */K.dpr=d;mcv.width=Math.round(innerWidth*d);mcv.height=Math.round(innerHeight*d);K.sale=true}
addEventListener('resize',()=>{if(K.ouverte)taille()});
function zoneSous(x,z){for(const Z of MONDE()){const p=Z.poly;let ok=false;
  if(Math.abs(Z.c[0]-x)>1400||Math.abs(Z.c[1]-z)>1400)continue;if(inPoly(p,x,z))return Z}return null}
function voyager(Z){if(!Z)return;
  if(ZB[Z.id]&&Z.alt){fermerCarte();tp(Z.id);toMonde();return}
  /* zone d'une autre région : on recentre la région et on recharge, puis on se pose devant sa Pierre */
  try{localStorage.setItem('mz-carte-tp',Z.id)}catch(_){}
  fermerCarte();P.x=Z.c[0];P.z=Z.c[1];voyagerRegion(Z.c,'jeu')}
const vieux=startGame;startGame=function(){const r=vieux.apply(this,arguments);let id=null;try{id=localStorage.getItem('mz-carte-tp');localStorage.removeItem('mz-carte-tp')}catch(_){}
  if(id&&ZB[id]&&ZB[id].alt)try{tp(id)}catch(_){}return r};
/* le réveil d'un voyage a déjà relancé la partie (fin de main.js) : on se pose devant la Pierre visée */
try{const id=localStorage.getItem('mz-carte-tp');if(id&&started){localStorage.removeItem('mz-carte-tp');if(ZB[id]&&ZB[id].alt)tp(id)}}catch(_){}
let ficheKey='';
function majFiche(){const Z=K.vise;let h='';
  if(!Z)h=`<div class="ty">Hors de la mosaïque</div><div class="li">Visez une tuile pour voir sa fiche.</div>`;
  else{const t=TYPES[typeDe(Z)],l=niv(Z),cl=l<0?'m':l>0?'p':'',I=Z.info||{},own=S.own[Z.id],mais=typeof maisonDe==='function'?maisonDe(Z.id):null;
    const d=Math.hypot(Z.c[0]-P.x,Z.c[1]-P.z),dist=d<1000?Math.round(d/10)*10+' m':(d/1000).toFixed(1).replace('.',',')+' km';
    const L=[];
    L.push(`Niveau <i class="${cl}">${sgn(l)||'0'}</i> · ${poleNom(Z)}`);
    const fa=typeof factionDe==='function'&&factionDe(Z);if(fa)L.push(`Faction : <b style="color:${fa.col}">${fa.nom}</b>`);
    L.push(own?`<span class="o">⚑ À vous</span>`:mais?`<span style="color:${mais.col}">${mais.bl} ${mais.nom}</span>`:S.emp&&S.emp[Z.id]?'Sauvage · votre empreinte':'Sauvage');
    if(Z.d&&Z.d.pret===false)L.push('<span class="r">Pas encore écrite</span> : sa Pierre dort');
    else if(Z.alt&&restLeft(Z)>0)L.push('Pierre au repos : '+fmt(restLeft(Z)));
    else if(Z.alt&&actif(Z))L.push('<span class="o">◆ Une activité vous attend</span>');
    if(S.hordes)for(const k in S.hordes)if(S.hordes[k].cible===Z.id)L.push('<span class="r">➤ Une horde marche sur elle</span>');
    if(S.siege&&S.siege.cit===Z.id)L.push('<span class="r">Assiégée</span>');
    L.push(curZ&&curZ.id===Z.id?'Vous êtes ici':'À '+dist);
    h=`<div class="ty">${t.n}${I.sur&&I.sur.indexOf('·')>0?' · '+I.sur.split('·').slice(1).join('·').trim():''}</div><div class="nm">${I.nom||Z.id}</div><div class="li">${L.join('<br>')}</div>`+
      (curZ&&curZ.id===Z.id?'':`<div class="go">${typeof PAD!=='undefined'&&PAD.on?'<b>A</b>':'<b>Entrée</b>'} voyager ${ZB[Z.id]&&Z.alt?'jusqu\'à sa Pierre':'(la mosaïque se recompose)'}</div>`)}
  if(h!==ficheKey){ficheKey=h;fiche.innerHTML=h}}
/* ===== 2.28 : la carte enluminée (22 nov., « une carte mosaïque plus belle où chaque royaume est bien dessiné ») =====
   Le monde sauvage reste une mosaïque sombre et chaotique, gravée de son entrelacs Girih en bronze pâle.
   Chaque royaume (le vôtre, en or ; chaque maison rivale, à ses couleurs) se lit comme une région nette :
   tuiles pleines à ses couleurs, entrelacs doré, frontière tracée en rempart double, nom et blason au centre. */
const MOI={k:'moi',nom:'Votre royaume',bl:'✦',c:[230,198,136],trait:'#ffe3a6'};
const hex2=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
function roi(id){if(S.own[id])return MOI;const m=typeof maisonDe==='function'?maisonDe(id):null;if(!m)return null;
  return m._r||(m._r={k:m.k,nom:m.nom,bl:m.bl,c:hex2(m.col),trait:m.col})}
/* arêtes partagées : calculées une fois pour tout le monde (5 246 arêtes) */
let AR=null;
function aretes(){if(AR)return AR;const m=new Map(),cle=p=>Math.round(p[0])+','+Math.round(p[1]);AR=new Map();
  for(const Z of MONDE()){const n=Z.poly.length,L=[];for(let i=0;i<n;i++){const a=Z.poly[i],b=Z.poly[(i+1)%n],k=[cle(a),cle(b)].sort().join('|'),e={a,b,Z,nb:null};
    const o=m.get(k);if(o){o.nb=Z;e.nb=o.Z}else m.set(k,e);L.push(e)}AR.set(Z.id,L)}return AR}
/* entrelacs Girih : des milieux des côtés, des cordes en étoile (décagone {10/3}, pentagone et hexagone {n/2}, losange {4/1}) */
const PAS={CIT:3,DON:2,RES:2,MAR:1,ANT:2};
function entrelacs(c,Z,s,ox,oz){const P=Z.poly,n=P.length,k=PAS[typeDe(Z)]||2,M=[];
  for(let i=0;i<n;i++){const a=P[i],b=P[(i+1)%n];M.push([((a[0]+b[0])/2+ox)*s,((a[1]+b[1])/2+oz)*s])}
  if(typeDe(Z)==='ANT'){/* papillon : les milieux se rejoignent par le nœud central */const cx=(Z.c[0]+ox)*s,cy=(Z.c[1]+oz)*s;
    for(const m of M){c.moveTo(m[0],m[1]);c.lineTo(cx+(m[0]-cx)*.18,cy+(m[1]-cy)*.18)}c.moveTo(M[0][0],M[0][1]);for(let i=1;i<=n;i++)c.lineTo(M[i%n][0],M[i%n][1]);return}
  for(let i=0;i<n;i++){const m=M[i],q=M[(i+k)%n];c.moveTo(m[0],m[1]);c.lineTo(q[0],q[1])}}
function royaumes(c,vis,s,ox,oz,joint,mini){
  /* 1. entrelacs : bronze pâle dans le sauvage, or vif (ou couleur de maison éclaircie) dans les royaumes */
  if(mini||s*350>40){const lw=Math.max(.6,Math.min(2.2,s*3.2));c.lineCap='round';
    c.beginPath();for(const Z of vis)if(!roi(Z.id))entrelacs(c,Z,s,ox,oz);c.lineWidth=lw;c.strokeStyle='rgba(201,164,92,.2)';c.stroke();
    const par={};for(const Z of vis){const r=roi(Z.id);if(r)(par[r.k]||(par[r.k]={r,L:[]})).L.push(Z)}
    for(const k in par){c.beginPath();for(const Z of par[k].L)entrelacs(c,Z,s,ox,oz);c.lineWidth=lw*1.25;c.strokeStyle=k==='moi'?'rgba(255,236,190,.55)':'rgba(255,245,225,.38)';c.stroke()}}
  /* 2. frontières : chaque arête entre deux maîtres différents, tracée en rempart double */
  const A=aretes(),F={};
  for(const Z of vis){const r=roi(Z.id);if(!r)continue;for(const e of A.get(Z.id)||[]){const o=e.nb&&roi(e.nb.id);if(o===r)continue;(F[r.k]||(F[r.k]={r,E:[]})).E.push(e)}}
  const w=mini?1.6:Math.max(2,Math.min(7,s*9))*K.dpr**.5;c.lineCap='round';c.lineJoin='round';
  for(const k in F){const {r,E}=F[k];c.beginPath();for(const e of E){c.moveTo((e.a[0]+ox)*s,(e.a[1]+oz)*s);c.lineTo((e.b[0]+ox)*s,(e.b[1]+oz)*s)}
    if(!mini&&k==='moi'){c.lineWidth=w*4.5;c.strokeStyle='rgba(255,205,120,.16)';c.stroke()}   /* halo : un trait large et pâle, pas de shadowBlur (trop lourd pour Edge sur Xbox) */
    c.lineWidth=w*2.2;c.strokeStyle='rgba(8,6,4,.9)';c.stroke();
    c.lineWidth=w*1.15;c.strokeStyle=k==='moi'?'#e2b65e':r.trait;c.stroke();
    c.lineWidth=Math.max(.8,w*.28);c.strokeStyle=k==='moi'?'#fff3cf':'rgba(255,255,255,.7)';c.stroke();
    if(!mini)rempartCarte(c,E,s,ox,oz,w,k==='moi'?'#e2b65e':r.trait)}
  /* 3. noms des royaumes : un par région d'un seul tenant (3 tuiles ou plus), au centre */
  if(mini)return;const vu=new Set();
  for(const Z of vis){const r=roi(Z.id);if(!r||vu.has(Z.id))continue;const g=[Z];vu.add(Z.id);
    for(let i=0;i<g.length;i++)for(const e of A.get(g[i].id)||[])if(e.nb&&!vu.has(e.nb.id)&&roi(e.nb.id)===r){vu.add(e.nb.id);g.push(e.nb)}
    if(g.length<3||s*350>75*K.dpr)continue;   /* de près, les noms des zones prennent le relais */let x=0,y=0;for(const q of g){x+=q.c[0];y+=q.c[1]}x=(x/g.length+ox)*s;y=(y/g.length+oz)*s;
    const fs=Math.max(10*K.dpr,Math.min(22*K.dpr,Math.sqrt(g.length)*s*110));
    c.save();c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';
    c.font=`${Math.round(fs*1.5)}px Georgia,serif`;c.lineWidth=fs*.3;c.strokeStyle='rgba(8,6,4,.85)';c.strokeText(r.bl,x,y-fs*1.15);c.fillStyle=r.trait;c.fillText(r.bl,x,y-fs*1.15);
    c.font=`600 ${Math.round(fs)}px Georgia,serif`;const t=r.nom.toUpperCase().split('').join(String.fromCharCode(8202));
    c.lineWidth=fs*.32;c.strokeStyle='rgba(8,6,4,.88)';c.strokeText(t,x,y);c.fillStyle=r.k==='moi'?'#ffe8b0':'#f4ead6';c.fillText(t,x,y);
    const tw=c.measureText(t).width/2+fs*.6;c.strokeStyle=r.trait;c.lineWidth=Math.max(1,fs*.07);c.beginPath();c.moveTo(x-tw,y+fs*.75);c.lineTo(x+tw,y+fs*.75);c.stroke();
    c.restore()}}
/* 2.46 : frontières entre factions (trait sombre), en rouge là où deux factions opposées se touchent */
function frontieresFactions(c,vis,s,ox,oz){const A=aretes(),E=[],X=[],w=Math.max(1.5,Math.min(5,s*6));
  for(const Z of vis){const f=factionDe(Z);for(const e of A.get(Z.id)||[]){if(!e.nb||e.nb.id<Z.id)continue;const g=factionDe(e.nb);if(!f||!g||f===g)continue;(factionsOpposees(f,g)?X:E).push(e)}}
  const trace=(L,lw,st)=>{if(!L.length)return;c.beginPath();for(const e of L){c.moveTo((e.a[0]+ox)*s,(e.a[1]+oz)*s);c.lineTo((e.b[0]+ox)*s,(e.b[1]+oz)*s)}c.lineWidth=lw;c.strokeStyle=st;c.stroke()};
  c.lineCap='round';trace(E,w*1.6,'rgba(8,6,4,.9)');trace(E,w*.45,'rgba(239,231,214,.45)');trace(X,w*1.8,'rgba(8,6,4,.9)');trace(X,w*.8,'rgba(255,90,70,.85)')}
/* 2.47 (25 nov., les remparts dans le jeu) : sur la carte, la frontière devient un rempart dessiné comme dans le monde :
   créneaux, une tour à chaque sommet, une porte au milieu de chaque arête (le passage en noir entre deux tours). */
function rempartCarte(c,E,s,ox,oz,w,col){if(s*400<26)return;const P=p=>[(p[0]+ox)*s,(p[1]+oz)*s],t=Math.max(2,w*1.05);
  c.save();c.beginPath();for(const e of E){const a=P(e.a),b=P(e.b);c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1])}
  c.setLineDash([t*1.2,t]);c.lineCap='butt';c.lineWidth=w*3.1;c.strokeStyle=col;c.stroke();c.setLineDash([]);
  const vus=new Set(),tour=(x,y,r)=>{c.moveTo(x+r,y);c.arc(x,y,r,0,TAU)};c.beginPath();
  for(const e of E){const a=P(e.a),b=P(e.b),L=Math.hypot(b[0]-a[0],b[1]-a[1]);
    for(const q of[a,b]){const k=Math.round(q[0])+','+Math.round(q[1]);if(!vus.has(k)){vus.add(k);tour(q[0],q[1],w*2.1)}}
    if(L>w*10){const ux=(b[0]-a[0])/L,uy=(b[1]-a[1])/L,g=Math.max(w*1.6,15*s),mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
      tour(mx-ux*g,my-uy*g,w*1.5);tour(mx+ux*g,my+uy*g,w*1.5)}}
  c.fillStyle=col;c.fill();c.lineWidth=Math.max(1,w*.45);c.strokeStyle='rgba(8,6,4,.95)';c.stroke();
  c.beginPath();for(const e of E){const a=P(e.a),b=P(e.b),L=Math.hypot(b[0]-a[0],b[1]-a[1]);if(L<=w*10)continue;
    const ux=(b[0]-a[0])/L,uy=(b[1]-a[1])/L,g=Math.max(w*1.6,15*s)-w*1.2,mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;c.moveTo(mx-ux*g,my-uy*g);c.lineTo(mx+ux*g,my+uy*g)}
  c.lineWidth=w*3;c.strokeStyle='#0b0907';c.stroke();c.restore()}
/* cadre enluminé autour de la carte : double filet d'or, rosaces Girih aux coins */
function cadre(c,w,h){const d=K.dpr,m=14*d;c.save();c.strokeStyle='rgba(201,164,92,.75)';c.lineWidth=2*d;c.strokeRect(m,m,w-2*m,h-2*m);
  c.strokeStyle='rgba(201,164,92,.35)';c.lineWidth=1*d;c.strokeRect(m+6*d,m+6*d,w-2*m-12*d,h-2*m-12*d);
  for(const [x,y] of [[m,m],[w-m,m],[m,h-m],[w-m,h-m]]){c.beginPath();for(let i=0;i<=10;i++){const a=i*TAU/10*3-PI/2,r=14*d;i?c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r):c.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
    c.fillStyle='#0b0a0d';c.fill();c.strokeStyle='#d9b468';c.lineWidth=1.5*d;c.stroke()}
  c.restore()}
function dessinerCarte(T){const c=mcv.getContext('2d'),w=mcv.width,h=mcv.height,s=w/K.w,ox=-K.x+w/2/s,oz=-K.z+h/2/s,pulse=.6+.4*Math.sin(T*4);
  c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,w,h);
  const xa=K.x-w/2/s-600,xb=K.x+w/2/s+600,za=K.z-h/2/s-600,zb=K.z+h/2/s+600,vis=[];
  for(const Z of MONDE())if(Z.c[0]>xa&&Z.c[0]<xb&&Z.c[1]>za&&Z.c[1]<zb)vis.push(Z);
  const joint=Math.max(1,Math.min(4,s*7));
  for(const Z of vis){const t=TYPES[typeDe(Z)],own=S.own[Z.id],l=niv(Z),pret=!(Z.d&&Z.d.pret===false);tracer(c,Z,s,ox,oz);
    if(K.col===1){const k=Math.abs(l)/7;c.fillStyle=l<0?`rgba(${Math.round(60+20*k)},${Math.round(110+40*k)},${Math.round(150+70*k)},${.35+.55*k})`:l>0?`rgba(${Math.round(160+80*k)},${Math.round(110+60*k)},${Math.round(60+10*k)},${.35+.55*k})`:'rgba(120,112,100,.35)'}
    else if(K.col===2){const f=factionDe(Z);c.fillStyle=f?rgba(hex2(f.col),pret?.82:.5,(pret?.62:.4)*(.86+.14*((Z.c[0]*7+Z.c[1]*13)%5)/4)):'rgba(40,36,44,.6)'}
    else{const r=roi(Z.id);c.fillStyle=r?rgba(r.c,.9,(pret?1:.8)*(.86+.14*((Z.c[0]*7+Z.c[1]*13)%5)/4)):rgba(t.c,pret?.55:.32,pret?.34:.24)}
    c.fill();c.lineJoin='round';c.lineWidth=joint;c.strokeStyle=K.col?'#08070a':roi(Z.id)?'rgba(20,14,8,.55)':'#0a090c';c.stroke()}
  if(!K.col)royaumes(c,vis,s,ox,oz,joint);
  else if(K.col===2)frontieresFactions(c,vis,s,ox,oz);
  if(K.col)for(const Z of vis)if(S.own[Z.id]){tracer(c,Z,s,ox,oz);c.lineWidth=Math.max(1.5,joint*.8);c.strokeStyle='rgba(255,217,138,.95)';c.stroke()}
  for(const f of['dessinerRoutes','dessinerRivaux','dessinerHordes','dessinerSiege','dessinerTours','dessinerCaravanes'])
    if(typeof window[f]==='function')try{window[f](c,s,ox,oz,T)}catch(_){}
  const ir=Math.max(3,Math.min(16*K.dpr,s*40));
  for(const Z of vis){const x=(Z.c[0]+ox)*s,y=(Z.c[1]+oz)*s,own=S.own[Z.id],l=niv(Z);
    if(ir>=4&&K.col===2){const f=factionDe(Z);if(f)sigleFaction(c,f.k,x,y,ir*.9,f.col,'rgba(8,7,10,.9)');if(own){c.beginPath();c.arc(x,y,ir*1.35,0,TAU);c.lineWidth=Math.max(1.2,ir*.14);c.strokeStyle='rgba(255,230,170,.9)';c.stroke()}}
    else if(ir>=4)icone(c,typeDe(Z),x,y,ir,own?'#1a1410':'rgba(239,231,214,.5)',own?'rgba(255,230,170,.9)':null);
    if(s*350>75*K.dpr){c.font=`600 ${Math.round(13*K.dpr)}px Georgia,serif`;c.textAlign='center';c.textBaseline='top';c.lineWidth=3*K.dpr;c.strokeStyle='rgba(8,7,10,.85)';
      const n=nomCourt(Z);c.strokeText(n,x,y+ir+4*K.dpr);c.fillStyle=own?'#ffe3a6':'rgba(239,231,214,.85)';c.fillText(n,x,y+ir+4*K.dpr);
      const tx=sgn(l)||'0';c.font=`700 ${Math.round(12*K.dpr)}px sans-serif`;c.strokeText(tx,x,y+ir+20*K.dpr);c.fillStyle=l<0?MINUS:l>0?PLUS:'#d8cdb4';c.fillText(tx,x,y+ir+20*K.dpr)}}
  if(K.vise){tracer(c,K.vise,s,ox,oz);c.save();c.lineWidth=2.5*K.dpr;c.strokeStyle='#fff';c.stroke();c.restore()}
  /* héros */
  const hx=(P.x+ox)*s,hy=(P.z+oz)*s,f=P.face!=null?P.face:P.yaw;
  c.save();c.translate(hx,hy);c.beginPath();c.arc(0,0,(16+5*pulse)*K.dpr,0,TAU);c.strokeStyle=`rgba(255,255,255,${.5*pulse})`;c.lineWidth=2*K.dpr;c.stroke();
  c.rotate(Math.atan2(Math.cos(f),Math.sin(f))+PI/2);c.scale(K.dpr,K.dpr);c.fillStyle='#fff';c.strokeStyle='#0b0a0d';c.lineWidth=2.5;
  c.beginPath();c.moveTo(0,-13);c.lineTo(8.5,9);c.lineTo(0,4.5);c.lineTo(-8.5,9);c.closePath();c.stroke();c.fill();c.restore();
  /* réticule au centre */
  c.save();c.translate(w/2,h/2);c.strokeStyle='rgba(255,255,255,.85)';c.lineWidth=1.5*K.dpr;const r=10*K.dpr;
  for(let i=0;i<4;i++){c.rotate(PI/2);c.beginPath();c.moveTo(r,0);c.lineTo(r*2,0);c.stroke()}c.beginPath();c.arc(0,0,2*K.dpr,0,TAU);c.fillStyle='#fff';c.fill();c.restore();
  /* échelle */
  const m=[100,250,500,1000,2000,5000,10000].find(v=>v*s>110*K.dpr)||10000,ex=Math.min(innerWidth,innerHeight*1.78)*.046*K.dpr,ey=h*.2;
  c.strokeStyle=OR;c.lineWidth=2*K.dpr;c.beginPath();c.moveTo(ex,ey-5*K.dpr);c.lineTo(ex,ey);c.lineTo(ex+m*s,ey);c.lineTo(ex+m*s,ey-5*K.dpr);c.stroke();
  c.font=`${Math.round(13*K.dpr)}px sans-serif`;c.fillStyle=OR;c.textAlign='center';c.textBaseline='bottom';c.fillText(m>=1000?(m/1000)+' km':m+' m',ex+m*s/2,ey-6*K.dpr);cadre(c,w,h)}
let kt=0;
function boucleCarte(t){requestAnimationFrame(boucleCarte);if(!K.ouverte){kt=t;return}const dt=Math.min(.1,(t-kt)/1000||0);kt=t;
  if(mode!=='carte'){fermerCarte();return}
  /* déplacement : stick gauche analogique, sinon flèches / croix */
  let ax=0,az=0;if(typeof PAD!=='undefined'&&PAD.on&&(Math.abs(PAD.lx)>.15||Math.abs(PAD.ly)>.15)){ax=PAD.lx;az=PAD.ly}
  else{ax=(isHeld('right')?1:0)-(isHeld('left')?1:0);az=(isHeld('down')?1:0)-(isHeld('up')?1:0)}
  const v=K.w*.55;K.fx+=(ax*v-K.fx)*Math.min(1,dt*10);K.fz+=(az*v-K.fz)*Math.min(1,dt*10);
  let zoom=0;if(typeof PAD!=='undefined'&&PAD.on){zoom=(PAD.lt||0)-(PAD.rt||0);if(Math.abs(PAD.ry)>.2)zoom+=PAD.ry}
  zoom+=K.zk||0;
  if(Math.abs(K.fx)>1||Math.abs(K.fz)>1||zoom){const B=bornes();K.x=clamp(K.x+K.fx*dt,B.x0,B.x1);K.z=clamp(K.z+K.fz*dt,B.z0,B.z1);
    if(zoom)K.w=clamp(K.w*Math.exp(zoom*dt*1.6),1200,Math.max(B.x1-B.x0,B.z1-B.z0)*1.15);K.sale=true}
  const Z=zoneSous(K.x,K.z);if(Z!==K.vise){K.vise=Z;K.sale=true;majFiche()}
  /* redessin : quand la vue change, et quelques fois par seconde pour les pulsations */
  K.acc=(K.acc||0)+dt;if((K.sale&&K.acc>.05)||K.acc>.25){K.acc=0;K.sale=false;dessinerCarte(t/1000)}}   /* 2.30.4 : 20 images/s au plus pendant un zoom, 4 au repos */
requestAnimationFrame(boucleCarte);

/* ================= 3. Entrées ================= */
const act0=act;act=function(a,rep){
  if(mode==='carte'){if(a==='back'&&!rep)fermerCarte();else if(a==='ok'&&!rep&&K.vise&&!(curZ&&K.vise.id===curZ.id))voyager(K.vise);return}
  return act0.apply(this,arguments)};
const pb0=padBouton;padBouton=function(n){
  if(typeof mode!=='undefined'&&mode==='carte'){
    if(n==='select'||n==='b'||n==='start'){fermerCarte();return}
    if(n==='x'){K.col=(K.col+1)%3;K.sale=true;legende();commandes();return}
    if(n==='y'){K.x=P.x;K.z=P.z;K.sale=true;return}
    if(n==='a'){act('ok',false);return}
    if(n==='lb'||n==='rb'){K.w=clamp(K.w*(n==='lb'?1.5:1/1.5),1200,30000);K.sale=true;return}return}
  if(typeof mode!=='undefined'&&mode==='monde'&&started){
    if(n==='select'){ouvrirCarte();return}
    if(n==='lb'){zoomMini();return}}
  return pb0.apply(this,arguments)};
addEventListener('keydown',e=>{if(typeof mode==='undefined')return;const k=e.key;
  if(mode==='monde'&&started&&!e.repeat){if(e.code==='KeyC'){e.preventDefault();ouvrirCarte()}else if(e.code==='KeyZ'){e.preventDefault();zoomMini()}return}
  if(mode!=='carte')return;
  if(e.code==='KeyC'&&!e.repeat){e.preventDefault();fermerCarte()}
  else if(k==='+'||k==='='||e.code==='NumpadAdd'||e.code==='KeyE'||k==='PageUp'){e.preventDefault();K.zk=-1}
  else if(k==='-'||e.code==='NumpadSubtract'||e.code==='KeyQ'||k==='PageDown'){e.preventDefault();K.zk=1}
  else if(e.code==='KeyX'&&!e.repeat){K.col=(K.col+1)%3;K.sale=true;legende();commandes()}
  else if(e.code==='KeyY'&&!e.repeat){K.x=P.x;K.z=P.z;K.sale=true}});
addEventListener('keyup',e=>{const k=e.key;if(k==='+'||k==='='||k==='-'||k==='PageUp'||k==='PageDown'||/Numpad(Add|Subtract)|Key[EQ]/.test(e.code))K.zk=0});

/* 2.30.4 : la 3D ne se dessine plus derrière la carte plein écran (elle s'ajoutait au dessin de la carte sur la Xbox) */
if(typeof draw==='function'){const draw0=draw;draw=function(){if(K.ouverte)return;return draw0.apply(this,arguments)}}
window.ouvrirCarte=ouvrirCarte;window.fermerCarte=fermerCarte;
if(window.MZ)Object.assign(window.MZ,{carte:ouvrirCarte,fermerCarte,carteEtat:()=>({ouverte:K.ouverte,x:K.x,z:K.z,w:K.w,vise:K.vise&&K.vise.id,col:K.col}),
  carteVise:(id)=>{const Z=MONDE().find(q=>q.id===id);if(Z){K.x=Z.c[0];K.z=Z.c[1];K.sale=true}return!!Z},carteZoom:w=>{K.w=w;K.sale=true},miniZoom:i=>{zi=i;zr=ZOOMS[i].r}});
})();
