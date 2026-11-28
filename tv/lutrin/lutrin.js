/* Le lutrin : Arène du plateau (28 nov. 2026).
   Demandes de l'utilisateur : « un mode arène avec seulement le plateau. Pour commencer chaque joueur choisit une tuile libre et la
   sélectionne. Fin du tour. Elle est à nous. » ; « une belle interface pour jouer avec les tuiles, comme posée sur un lutrin, avec ses
   effets de verre, de magie, de synergie » ; « un gameplay pensé Pixel Pro » ; puis, après l'essai : « je veux les cartes générées avec
   les rosaces » et « ajoute un zoom convaincant ».
   Le plateau est un monde de la banque (tv/mondes, rosaces des royaumes) : chaque faction part de sa fleur, le cœur et le monde
   sauvage sont libres, les zones d'ombre détruites sont mortes. À tour de rôle, chaque faction prend une tuile libre.
   Rien n'est écrit dans la sauvegarde du jeu (seulement le réglage du son, dans « lutrin-son »). */
(function(){
'use strict';
const NS='http://www.w3.org/2000/svg';
const ZI=window.LUTRIN_ZONES||{};
const BANQUE=(typeof MONDES_BANQUE!=='undefined'?MONDES_BANQUE:[]);
const FAC={
  Feu:   {k:'Feu',   nom:'Les Braisiers',          col:'#e0643a',dev:'Conquérants et forgerons'},
  Pierre:{k:'Pierre',nom:'L\'Ordre du Socle',      col:'#c4407e',dev:'Bâtisseurs et légistes'},
  Vent:  {k:'Vent',  nom:'La Compagnie des Vents', col:'#b9a6f0',dev:'Nomades et éclaireurs'},
  Glace: {k:'Glace', nom:'La Veille Blanche',      col:'#8fd0f5',dev:'Gardiens des serments'},
  Eau:   {k:'Eau',   nom:'La Ligue des Marées',    col:'#2f8fd0',dev:'Marchands navigateurs'},
  Sève:  {k:'Sève',  nom:'Le Cercle des Racines',  col:'#62b544',dev:'Éleveurs de bêtes'},
  Ombre: {k:'Ombre', nom:'L\'Ombre',               col:'#7a4a9a',dev:'Le monde sauvage'}};
const ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'];
/* 28 nov. (« je veux voir aussi les factions par un code couleur ou icône ») : un sigle par faction, blanc sur sa couleur */
const SIGLE={
  Feu:   {f:'M0 -.85C.35 -.4 .6 -.15 .55 .25C.5 .65 .2 .85 0 .85C-.2 .85 -.5 .65 -.55 .25C-.6 -.1 -.35 -.3 -.2 -.55C-.1 -.25 0 -.2 .1 -.15C.15 -.4 .1 -.6 0 -.85Z'},
  Pierre:{f:'M-.62 .72H.62V.36H-.62ZM-.46 .24H.46V-.12H-.46ZM-.3 -.24H.3V-.6H-.3Z'},
  Vent:  {s:'M-.72 -.22H.3A.3 .3 0 1 0 .05 -.58M-.72 .18H.5A.3 .3 0 1 1 .28 .58'},
  Glace: {s:'M0 -.8V.8M-.69 -.4L.69 .4M-.69 .4L.69 -.4M-.2 -.65L0 -.45L.2 -.65M-.2 .65L0 .45L.2 .65'},
  Eau:   {s:'M-.75 -.25Q-.4 -.55 -.05 -.25T.75 -.25M-.75 .3Q-.4 0 -.05 .3T.75 .3'},
  Sève:  {f:'M-.6 .65C-.72 -.1 -.1 -.72 .7 -.7C.72 .1 .1 .72 -.6 .65Z',s:'M-.55 .6L.3 -.3'},
  Ombre: {f:'M.3 -.78A.8 .8 0 1 0 .3 .78A.6 .6 0 1 1 .3 -.78Z'}};
const sigleSVG=(k,cls)=>{const g=SIGLE[k]||{};return`<svg class="${cls||'sigle'}" viewBox="-1.1 -1.1 2.2 2.2" aria-hidden="true"><circle r="1" fill="${FAC[k].col}"/>`+
  (g.f?`<path d="${g.f}" transform="scale(.72)" fill="#fff8e8"/>`:'')+(g.s?`<path d="${g.s}" transform="scale(.72)" fill="none" stroke="${g.f?FAC[k].col:'#fff8e8'}" stroke-width="${g.f?.14:.2}" stroke-linecap="round" stroke-linejoin="round"/>`:'')+'</svg>'};
const opposees=(a,b)=>{const i=ROUE.indexOf(a),j=ROUE.indexOf(b);return i>=0&&j>=0&&Math.abs(i-j)===3};
/* la partie d'exploration (si elle existe) : son monde, et la zone où se trouvait le héros (figurine sur le plateau) */
const lire=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const JEU=(()=>{let s=null;try{s=JSON.parse(lire('mz-tv-1')||'null')}catch(e){}const m=lire('mz-monde');
  return{save:!!(s&&s.lv),pos:s&&s.pos,monde:m&&BANQUE.some(b=>b.id===m)?m:null,ici:lire('mz-lutrin-ici')}})();
const ROSACES=[...(JEU.monde?[['jeu','Votre monde']]:[]),['hasard','Au hasard'],['0','Les Cinq Soleils'],['1','La Rose de sang'],['2','La Grande Rosace'],['4','La Couronne de losanges'],['5','La Corolle du Sénat'],['mix','Cinq fleurs différentes']]
  .filter(r=>r[0]==='hasard'||r[0]==='jeu'||BANQUE.some(m=>m.rosace===r[0]));
const TYPES={CIT:'Citadelle',DON:'Donjon',ANT:'Antre',MAR:'Assemblée',RES:'Ressource'};
/* icônes gravées, en unités (rayon 1) */
const ICONE={
  CIT:'M-.55 .8V-.35H-.78V-.8H-.48V-.58H-.16V-.8H.16V-.58H.48V-.8H.78V-.35H.55V.8ZM-.18 .8V.35A.18 .18 0 0 1 .18 .35V.8',
  DON:'M-.7 .8V-.05A.7 .7 0 0 1 .7 -.05V.8ZM-.3 .8V.12A.3 .3 0 0 1 .3 .12V.8M-.7 .8H.7',
  ANT:'M-.62 -.72Q-.15 0 -.52 .78M-.02 -.86Q.42 0 0 .86M.58 -.72Q.98 0 .5 .78',
  MAR:'M-.82 -.38L0 -.86L.82 -.38ZM-.55 -.28V.58M0 -.28V.58M.55 -.28V.58M-.85 .76H.85',
  RES:'M0 -.86L.62 -.2L0 .86L-.62 -.2ZM-.62 -.2H.62M0 -.86L-.2 -.2L0 .86L.2 -.2Z'};

/* ---------- état ---------- */
const S={joueurs:[],own:[],niv:[],tour:0,tourNum:1,sel:-1,fini:true,choixFac:'Feu',nbRivaux:3,duree:20,rosace:JEU.monde?'jeu':'hasard',ici:-1,son:true,portrait:null,monde:null};
const T=[];      // tuiles : {i, id, p, c, r (rayon intérieur), v (voisines), roy (fleur), mort, info}
const ARETES=[]; // arêtes partagées : {a, b, p1, p2}
let BB=null;     // boîte du monde
const cam={cx:0,cy:0,w:4000},cible={cx:0,cy:0,w:4000,actif:false};
let pxW=1,pxH=1;

/* ---------- monde ---------- */
function chargerMonde(id,suite){
  if(window.MONDE_GEN&&window.MONDE_GEN.id===id){suite();return}
  window.MONDE_GEN=null;const s=document.createElement('script');s.src='mondes/'+id+'.js';
  s.onload=()=>suite();s.onerror=()=>{alerte('Monde introuvable : '+id)};document.head.appendChild(s)}
function choisirMondeId(){if(S.rosace==='jeu'&&JEU.monde)return JEU.monde;const L=BANQUE.filter(m=>S.rosace==='hasard'||m.rosace===S.rosace);const B=L.length?L:BANQUE;
  return B.length?B[Math.floor(Math.random()*B.length)].id:null}
function preparer(){
  const M=window.MONDE_GEN,portrait=innerHeight>innerWidth;S.portrait=portrait;
  T.length=0;ARETES.length=0;
  const tr=portrait?(q=>[-q[1],q[0]]):(q=>[q[0],q[1]]);
  M.tuiles.forEach((d,i)=>{const p=d.p.map(tr);let x=0,y=0;p.forEach(q=>{x+=q[0];y+=q[1]});const c=[x/p.length,y/p.length];
    let r=1e9;for(let k=0;k<p.length;k++)r=Math.min(r,distSeg(c,p[k],p[(k+1)%p.length]));
    const inf=ZI[d.id]||ZI[d.id.replace(/\d+$/,'')]||['Zone',d.m||'RES','',''];
    /* 28 nov. (« le statut de faction de la zone : soit neutre, avec les deux choix possibles de faction, soit la faction, soit l'Ombre »,
       « chaque zone doit avoir une faction pour son plus et une pour son moins », « une faction opposée mais qui tire avec le background ») :
       pôle + = la faction de son mana ; pôle − = une faction non alliée choisie d'après le fond de la zone (tv/tools/lutrin-zones.js). */
    const mana=FAC[inf[3]]&&inf[3]!=='Ombre'?inf[3]:ROUE[h(d.id)%6],im=ROUE.indexOf(mana),moins=FAC[inf[4]]&&inf[4]!==mana?inf[4]:ROUE[(im+3)%6];
    T.push({i,id:d.id,p,c,r,v:[],roy:d.r,mort:!!d.m,info:inf,choix:[mana,moins],poles:[inf[5]||'',inf[6]||'']})});
  const key=q=>Math.round(q[0])+','+Math.round(q[1]),E={};
  T.forEach(t=>{for(let k=0;k<t.p.length;k++){const a=t.p[k],b=t.p[(k+1)%t.p.length],ka=key(a),kb=key(b),e=ka<kb?ka+'|'+kb:kb+'|'+ka;(E[e]=E[e]||[]).push({i:t.i,a,b})}});
  for(const e in E){const l=E[e];if(l.length===2&&l[0].i!==l[1].i){ARETES.push({a:l[0].i,b:l[1].i,p1:l[0].a,p2:l[0].b});T[l[0].i].v.push(l[1].i);T[l[1].i].v.push(l[0].i)}}
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;T.forEach(t=>t.p.forEach(q=>{x0=Math.min(x0,q[0]);y0=Math.min(y0,q[1]);x1=Math.max(x1,q[0]);y1=Math.max(y1,q[1])}));
  BB={x0,y0,x1,y1,w:x1-x0,h:y1-y0,cx:(x0+x1)/2,cy:(y0+y1)/2}}
function h(s){let x=0;for(const ch of s)x=(x*31+ch.charCodeAt(0))>>>0;return x}
function distSeg(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],L=dx*dx+dy*dy||1;let t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/L;t=Math.max(0,Math.min(1,t));
  return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy)}
const pts=p=>p.map(q=>q[0].toFixed(0)+','+q[1].toFixed(0)).join(' ');
const mix=(h,w,t)=>{const A=parseInt(h.slice(1),16),B=parseInt(w.slice(1),16),f=s=>Math.round(((A>>s)&255)*(1-t)+((B>>s)&255)*t);
  return'#'+((1<<24)|(f(16)<<16)|(f(8)<<8)|f(0)).toString(16).slice(1)};
const el=(n,a,par)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(par)par.appendChild(e);return e};

/* ---------- dessin ---------- */
const svg=document.getElementById('plateau'),calque=document.getElementById('calque'),vue=document.getElementById('vue');
let G={};
function dessiner(){
  svg.innerHTML='';calque.innerHTML='';
  const defs=el('defs',{},svg);
  /* 28 nov. (« 1. Alvéoles dans le bois », « les alvéoles c'est bien ; mais les tuiles en elles-mêmes, je n'aime pas l'effet »,
     « peut-être un léger effet 3D ») : une case libre est un creux sombre dans le bois ; une tuile prise y est posée en relief. */
  const gc=el('linearGradient',{id:'g-creux',x1:'0',y1:'0',x2:'0',y2:'1'},defs);
  el('stop',{offset:'0','stop-color':'#060201'},gc);el('stop',{offset:'.35','stop-color':'#120803'},gc);el('stop',{offset:'1','stop-color':'#24150a'},gc);
  for(const k of [...Object.keys(FAC),'Neutre']){const c=couleurPlaque(k),g=el('radialGradient',{id:'g-'+k,cx:'.36',cy:'.3',r:'.85'},defs);
    el('stop',{offset:'0','stop-color':mix(c,'#ffffff',.5)},g);el('stop',{offset:'.55','stop-color':c},g);el('stop',{offset:'1','stop-color':mix(c,'#000000',.4)},g)}
  defs.insertAdjacentHTML('beforeend','<pattern id="craq" width="90" height="90" patternUnits="userSpaceOnUse"><path d="M0 20L25 28L40 5M25 28L30 55L0 62M30 55L62 48L90 70M62 48L70 15L90 22M70 15L52 0M30 55L38 90M62 48L66 90" stroke="#1a0c04" stroke-width="1.3" fill="none"/></pattern>');
  G.verres=el('g',{},svg);G.plomb=el('g',{},svg);G.plaques=el('g',{class:'plaques'},svg);G.plat=el('g',{class:'plat'},svg);
  G.icones=el('g',{class:'icones'},svg);G.fleurs=el('g',{},svg);G.sceaux=el('g',{},svg);G.details=el('g',{class:'details'},svg);
  // ce qui bouge ou s'anime va sur un calque à part : le vitrail (des centaines de tuiles) n'est plus redessiné à chaque image
  G.liens=el('g',{},calque);G.flots=el('g',{},calque);G.curseur=el('g',{},calque);G.etin=el('g',{},calque);G.figure=el('g',{},calque);
  T.forEach(t=>{
    t.verre=el('polygon',{points:pts(t.p),'data-i':t.i,class:'verre',fill:'url(#g-creux)'},G.verres);t.plK=null;t.forme=forme(t);
    if(!t.mort){const s=Math.min(46,t.r*.42);
      t.icone=el('path',{d:ICONE[t.info[1]]||ICONE.RES,class:'icone libre',transform:`translate(${t.c[0].toFixed(0)} ${t.c[1].toFixed(0)}) scale(${s.toFixed(1)})`},G.icones)}
    else el('path',{d:fissure(t),class:'fissure'},G.icones);
    // vue rapprochée : le nom de la zone sous son icône
    if(!t.mort&&t.r>100){const fs=Math.min(30,t.r*.15);el('text',{class:'nom-zone',x:t.c[0].toFixed(0),y:(t.c[1]+t.r*.72).toFixed(0),'font-size':fs.toFixed(1)},G.details).textContent=t.info[0]}});
  // les plombs : un seul tracé pour tout le vitrail, bien plus léger qu'un polygone par tuile
  let dP='';ARETES.forEach(a=>{dP+=`M${a.p1[0].toFixed(0)} ${a.p1[1].toFixed(0)}L${a.p2[0].toFixed(0)} ${a.p2[1].toFixed(0)}`});
  let dB='';const vu=new Set(ARETES.map(a=>a.a<a.b?a.a+'_'+a.b:a.b+'_'+a.a));
  T.forEach(t=>{for(let k=0;k<t.p.length;k++){const q=t.p[k],w=t.p[(k+1)%t.p.length];// bord extérieur du monde
    if(!t.v.some(j=>T[j].p.some(z=>Math.abs(z[0]-q[0])<1.5&&Math.abs(z[1]-q[1])<1.5)&&T[j].p.some(z=>Math.abs(z[0]-w[0])<1.5&&Math.abs(z[1]-w[1])<1.5)))
      dB+=`M${q[0].toFixed(0)} ${q[1].toFixed(0)}L${w[0].toFixed(0)} ${w[1].toFixed(0)}`}});
  el('path',{d:dP+dB,class:'plomb'},G.plomb);el('path',{d:dP+dB,class:'plomb-crete'},G.plomb);
  // les fleurs des royaumes : un filet d'or sur leur bord
  let dF='';ARETES.forEach(a=>{const ra=T[a.a].roy,rb=T[a.b].roy;if(ra!==rb&&(ra!==undefined||rb!==undefined))dF+=`M${a.p1[0].toFixed(0)} ${a.p1[1].toFixed(0)}L${a.p2[0].toFixed(0)} ${a.p2[1].toFixed(0)}`});
  el('path',{d:dF,class:'fleur-or halo'},G.fleurs);el('path',{d:dF,class:'fleur-or'},G.fleurs);
  poserFigurine();majTout()}

/* ---------- la figurine : vous, là où vous étiez dans l'exploration ----------
   À votre image, comme le héros du jeu (2.51) : longs cheveux bruns à raie au milieu, lunettes rondes, barbe grise au menton,
   combinaison rouge à boutons ; votre chienne noir et blanc au bandana rouge est assise à côté. */
const FIG_H=150;   // hauteur de la figurine, en unités locales (pieds en 0)
const FIGURE=`<g class="fig-ombre"><ellipse cx="6" cy="2" rx="44" ry="11"/></g>
<g class="fig-bob">
 <ellipse class="fig-socle" cx="0" cy="-2" rx="34" ry="9"/><ellipse class="fig-socle-haut" cx="0" cy="-5" rx="30" ry="7"/>
 <g class="fig-chien" transform="translate(30 -6)">
  <path class="c-noir" d="M-8 0Q-12 -14 -6 -24Q2 -30 8 -22Q12 -12 10 0Z"/><path class="c-blanc" d="M-2 0Q-4 -12 1 -18Q6 -12 5 0Z"/>
  <path class="c-noir" d="M-6 -24Q-8 -36 2 -38Q12 -38 12 -30Q12 -24 4 -23Z"/><path class="c-blanc" d="M5 -33Q14 -33 15 -28Q12 -25 6 -26Z"/>
  <path class="c-noir" d="M-4 -36L-10 -28L-5 -27Z"/><circle class="c-oeil" cx="5" cy="-32" r="1.3"/><circle class="c-nez" cx="15" cy="-29" r="1.6"/>
  <path class="c-bandana" d="M-6 -24L8 -22L2 -15Z"/><path class="c-blanc" d="M10 -2Q16 -4 16 0Z"/></g>
 <path class="f-botte" d="M-15 -4H-3V-12H-14ZM3 -4H15L14 -12H3Z"/>
 <path class="f-rouge" d="M-14 -12L-12 -52H-1L-3 -12ZM3 -12L1 -52H12L14 -12Z"/>
 <path class="f-rouge" d="M-21 -50L-23 -92Q0 -100 23 -92L21 -50Z"/>
 <path class="f-rouge" d="M-23 -91L-32 -60L-25 -57L-17 -84ZM23 -91L32 -60L25 -57L17 -84Z"/>
 <circle class="f-peau" cx="-29" cy="-56" r="4.5"/><circle class="f-peau" cx="29" cy="-56" r="4.5"/>
 <path class="f-col" d="M-8 -95L0 -86L8 -95"/>
 <g class="f-bouton"><circle cx="0" cy="-80" r="1.8"/><circle cx="0" cy="-70" r="1.8"/><circle cx="0" cy="-60" r="1.8"/></g>
 <path class="f-cheveux" d="M-15 -118Q-21 -98 -19 -84Q-12 -88 -9 -96H9Q12 -88 19 -84Q21 -98 15 -118Z"/>
 <rect class="f-peau" x="-5" y="-100" width="10" height="8"/>
 <ellipse class="f-peau" cx="0" cy="-115" rx="13" ry="15"/>
 <path class="f-cheveux" d="M-14 -114Q-15 -133 0 -132Q15 -133 14 -114Q11 -126 1 -127L0 -122L-1 -127Q-11 -126 -14 -114Z"/>
 <path class="f-barbe" d="M-10 -108Q-9 -96 0 -94Q9 -96 10 -108Q5 -104 0 -105Q-5 -104 -10 -108Z"/>
 <path class="f-moust" d="M-5 -106Q0 -108 5 -106Q0 -104.5 -5 -106Z"/>
 <g class="f-lunettes"><circle cx="-5.2" cy="-115" r="4.4"/><circle cx="5.2" cy="-115" r="4.4"/><path d="M-0.8 -115H0.8M-9.6 -115L-13 -116M9.6 -115L13 -116"/></g>
 <circle class="f-oeil" cx="-5" cy="-114.5" r="1.1"/><circle class="f-oeil" cx="5" cy="-114.5" r="1.1"/>
</g>`;
function trouverIci(){S.ici=-1;S.iciVrai=false;trouverIci0();if(S.ici>=0){S.iciVrai=true;return}
  // pas encore de partie d'exploration sur ce monde : la figurine attend au cœur de votre fleur
  const L=T.filter(t=>S.own[t.i]===0);if(!L.length)return;let x=0,y=0;L.forEach(t=>{x+=t.c[0];y+=t.c[1]});x/=L.length;y/=L.length;
  let b=L[0],bd=1e18;L.forEach(t=>{const d=(t.c[0]-x)**2+(t.c[1]-y)**2;if(d<bd){bd=d;b=t}});S.ici=b.i}
function trouverIci0(){if(!JEU.save||!JEU.monde||S.monde!==JEU.monde)return;
  if(JEU.ici){const t=T.find(t=>t.id===JEU.ici);if(t&&!t.mort){S.ici=t.i;return}}
  if(JEU.pos){const q=[JEU.pos[0]/2,JEU.pos[1]/2],r=S.portrait?[-q[1],q[0]]:q;const t=T.find(t=>dansPoly(t.p,r));if(t)S.ici=t.i}}
function dansPoly(P,q){let d=false;for(let i=0,j=P.length-1;i<P.length;j=i++){const a=P[i],b=P[j];
  if((a[1]>q[1])!==(b[1]>q[1])&&q[0]<(b[0]-a[0])*(q[1]-a[1])/(b[1]-a[1])+a[0])d=!d}return d}
function poserFigurine(){trouverIci();G.figure.innerHTML='';if(S.ici<0)return;const t=T[S.ici];
  el('polygon',{points:pts(t.p),class:'ici-halo'},G.figure);el('polygon',{points:pts(t.p),class:'ici-bord'},G.figure);
  // 28 nov. (« la figurine trop grosse ; on la voudrait monochrome, par couleur de la faction ») : un jeton d'une seule teinte
  const c=S.joueurs[0]?FAC[S.joueurs[0].k].col:'#e8c26a';
  G.fig=el('g',{class:'figurine',style:`--fc:${mix(c,'#000000',.18)};--fc-clair:${mix(c,'#ffffff',.5)};--fc-sombre:${mix(c,'#000000',.72)}`},G.figure);G.fig.innerHTML=FIGURE;placerFigurine()}
function placerFigurine(){if(!G.fig||S.ici<0)return;const t=T[S.ici],px=cam.w/pxW;
  // assez grande pour se voir de loin (au moins 64 px à l'écran), sans dépasser la tuile de près
  const k=Math.max(t.r*.62/FIG_H,30*px/FIG_H);G.fig.setAttribute('transform',`translate(${t.c[0].toFixed(0)} ${(t.c[1]+t.r*.35).toFixed(0)}) scale(${k.toFixed(3)})`)}
function vueIci(anim){if(S.ici<0)return;const t=T[S.ici];viser(t.i,true);
  if(anim)viserCam(t.c[0],t.c[1],Math.max(2200,t.r*14));else{cam.cx=t.c[0];cam.cy=t.c[1];cam.w=Math.max(2200,t.r*14);appliquer()}}

/* ---------- se téléporter dans la zone : le jeu d'exploration s'ouvre devant sa Pierre d'éveil ---------- */
function aller(i){const t=T[i];if(!t||t.mort||!S.joueurs.length)return;
  if(JEU.save&&S.monde!==JEU.monde){
    voile.classList.remove('fin');
    voile.innerHTML=`<div class="carton"><h1>Autre monde</h1><p>${JEU.monde?'Ce plateau n\'est pas le monde de votre partie : la zone n\'y est pas au même endroit.':'Votre partie se joue sur la carte classique, pas sur une rosace.'}</p>
      ${JEU.monde?'<button class="btn principal" id="b-votre"><span class="tch">A</span>Jouer sur votre monde</button>':''}<button class="btn" id="b-rester" style="width:100%;margin-top:10px">Rester ici</button></div>`;
    voile.classList.remove('cache');const r=voile.querySelector('#b-rester');r.onclick=()=>{voile.classList.add('cache');focusMenu(null)};
    const v=voile.querySelector('#b-votre');if(v)v.onclick=()=>{S.rosace='jeu';commencer()};focusMenu(v||r);return}
  sauver();
  try{if(!JEU.save)localStorage.setItem('mz-monde',S.monde);localStorage.setItem('mz-aller',t.id);localStorage.removeItem('mz-aller-v')}catch(e){}
  son('aller');viser(i,true);viserCam(t.c[0],t.c[1],Math.max(1400,t.r*6));
  const c=S.own[i]>=0?FAC[S.joueurs[S.own[i]].k].col:'#fff1c4';
  for(let k=0;k<3;k++)setTimeout(()=>{const o=el('polygon',{points:pts(t.p),class:'onde',stroke:c},G.etin);
    o.animate([{transform:'scale(1)',opacity:.9},{transform:'scale(2.4)',opacity:0}],{duration:900,easing:'ease-out'}).onfinish=()=>o.remove()},k*180);
  etincelles(t,c);
  const p=document.createElement('div');p.id='portail';p.innerHTML=`<div class="portail-nom">${t.info[0]}</div>`;document.body.appendChild(p);
  setTimeout(()=>{location.href='index.html'},1100)}

/* ---------- la partie du lutrin reste en mémoire (pour revenir après l'exploration) ---------- */
function sauver(){if(!S.joueurs.length||S.fini)return;try{localStorage.setItem('lutrin-partie',JSON.stringify({monde:S.monde,own:S.own,niv:S.niv,joueurs:S.joueurs,tour:S.tour,tourNum:S.tourNum,duree:S.duree,sel:S.sel,choixFac:S.choixFac,nbRivaux:S.nbRivaux,rosace:S.rosace}))}catch(e){}}
function oublier(){try{localStorage.removeItem('lutrin-partie')}catch(e){}}
function reprendre(){let P=null;try{P=JSON.parse(lire('lutrin-partie')||'null')}catch(e){}
  if(!P||!P.monde||!Array.isArray(P.own)||!Array.isArray(P.joueurs))return false;
  voile.innerHTML='<div class="carton"><h1>…</h1><p>Le maître verrier remet la rosace en place.</p></div>';voile.classList.remove('cache');
  chargerMonde(P.monde,()=>{preparer();if(T.length!==P.own.length){oublier();menu();return}
    Object.assign(S,{monde:P.monde,own:P.own,niv:Array.isArray(P.niv)&&P.niv.length===T.length?P.niv:T.map(tirerNiv),joueurs:P.joueurs,tour:P.tour||0,tourNum:P.tourNum||1,duree:P.duree,sel:P.sel>=0?P.sel:-1,choixFac:P.choixFac||S.choixFac,nbRivaux:P.nbRivaux||S.nbRivaux,rosace:P.rosace||S.rosace,fini:false});
    dessiner();taille();voile.classList.add('cache');
    if(S.iciVrai)vueIci(false);else vueFleur(0,false);
    if(S.joueurs[S.tour]&&S.joueurs[S.tour].ia)setTimeout(jouerIA,700)});
  return true}
function fissure(t){const c=t.c,r=t.r*.8;let d=`M${(c[0]-r).toFixed(0)} ${(c[1]-r*.2).toFixed(0)}`;
  for(let k=1;k<=4;k++)d+=`L${(c[0]-r+k*r/2).toFixed(0)} ${(c[1]+(k%2?r*.35:-r*.25)).toFixed(0)}`;return d}

/* ---------- caméra : zoom et déplacement ---------- */
function taille(){const sc=document.getElementById('scene').getBoundingClientRect();
  pxW=Math.max(100,sc.width-24);pxH=Math.max(100,sc.height-28);vue.style.width=pxW+'px';vue.style.height=pxH+'px';rendu.w=0;
  document.documentElement.style.setProperty('--pente',S.portrait?'8deg':'12deg');appliquer()}
const wMax=()=>BB?Math.max(BB.w,BB.h*pxW/pxH)*1.08:4000;
const wMin=()=>700;
function borner(c){c.w=Math.max(wMin(),Math.min(wMax(),c.w));if(!BB)return;const h=c.w*pxH/pxW,mx=Math.max(0,(BB.w-c.w)/2+c.w*.35),my=Math.max(0,(BB.h-h)/2+h*.35);
  c.cx=Math.max(BB.cx-mx,Math.min(BB.cx+mx,c.cx));c.cy=Math.max(BB.cy-my,Math.min(BB.cy+my,c.cy))}
let loin=null,pres=null;
/* Fluidité (28 nov., « Ça lag ») : pendant un geste, on ne touche plus au viewBox (le navigateur redessinerait tout le vitrail
   à chaque image). Le dessin est fait une fois, un peu plus grand que l'écran (MARGE de chaque côté), puis simplement déplacé et
   agrandi par la carte graphique (transform). Il est refait net dès que le geste s'arrête, ou s'il faut montrer un bord pas encore dessiné. */
const MARGE=.25,rendu={cx:0,cy:0,w:0};let tFixe=0;
function fixer(){clearTimeout(tFixe);rendu.cx=cam.cx;rendu.cy=cam.cy;rendu.w=cam.w;const h=cam.w*pxH/pxW,f=1+2*MARGE,W=cam.w*f,H=h*f;
  const vb=`${(cam.cx-W/2).toFixed(1)} ${(cam.cy-H/2).toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}`;
  for(const s_ of [svg,calque]){s_.setAttribute('viewBox',vb);s_.style.left=(-MARGE*pxW)+'px';s_.style.top=(-MARGE*pxH)+'px';s_.style.width=(pxW*f)+'px';s_.style.height=(pxH*f)+'px';s_.style.transform=''}
  const l=cam.w/pxW>9;if(l!==loin){loin=l;svg.classList.toggle('loin',l)}
  const pr=cam.w/pxW<2.1;if(pr!==pres){pres=pr;svg.classList.toggle('pres',pr)}placerFigurine();if(G.liens&&S.joueurs.length)majLiens()}
function appliquer(){borner(cam);
  const z=document.getElementById('zoom-niveau');if(z)z.style.setProperty('--z',((wMax()-cam.w)/(wMax()-wMin())).toFixed(3));
  if(!rendu.w){fixer();return}
  const f=1+2*MARGE,s=rendu.w/cam.w,k=pxW/cam.w,hr=rendu.w*pxH/pxW,hc=cam.w*pxH/pxW;
  const tx=MARGE*pxW+((rendu.cx-rendu.w*f/2)-(cam.cx-cam.w/2))*k,ty=MARGE*pxH+((rendu.cy-hr*f/2)-(cam.cy-hc/2))*k;
  const x0=-MARGE*pxW+tx,y0=-MARGE*pxH+ty;
  // un bord non dessiné deviendrait visible, ou le zoom a trop changé (flou) : on redessine tout de suite
  if(x0>0||y0>0||x0+s*pxW*f<pxW||y0+s*pxH*f<pxH||s<.55||s>1.9){fixer();return}
  const tr=`translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${s.toFixed(4)})`;svg.style.transform=tr;calque.style.transform=tr;
  clearTimeout(tFixe);tFixe=setTimeout(()=>{if(!doigts.size&&!cible.actif)fixer();else tFixe=setTimeout(fixer,160)},140)}
function viserCam(cx,cy,w){cible.cx=cx;cible.cy=cy;cible.w=w;borner(cible);cible.actif=true;elan.vx=elan.vy=0}
const elan={vx:0,vy:0};
function boucle(){
  if(cible.actif){const k=.16;cam.cx+=(cible.cx-cam.cx)*k;cam.cy+=(cible.cy-cam.cy)*k;cam.w*=Math.pow(cible.w/cam.w,k);
    if(Math.abs(cible.cx-cam.cx)<1&&Math.abs(cible.cy-cam.cy)<1&&Math.abs(cible.w/cam.w-1)<.002){cam.cx=cible.cx;cam.cy=cible.cy;cam.w=cible.w;cible.actif=false}appliquer()}
  else if(Math.abs(elan.vx)+Math.abs(elan.vy)>.02&&!doigts.size){const u=cam.w/pxW;cam.cx-=elan.vx*16*u;cam.cy-=elan.vy*16*u;elan.vx*=.92;elan.vy*=.92;appliquer()}
  manette();requestAnimationFrame(boucle)}
function ecranVersMonde(x,y){const r=vue.getBoundingClientRect(),h=cam.w*pxH/pxW;return[cam.cx-cam.w/2+(x-r.left)/r.width*cam.w,cam.cy-h/2+(y-r.top)/r.height*h]}
function zoomEn(f,x,y,anim){const r=vue.getBoundingClientRect();if(x==null){x=r.left+r.width/2;y=r.top+r.height/2}
  const m=ecranVersMonde(x,y),w=Math.max(wMin(),Math.min(wMax(),cam.w*f)),fx=(x-r.left)/r.width-.5,fy=(y-r.top)/r.height-.5;
  const cx=m[0]-fx*w,cy=m[1]-fy*w*pxH/pxW;
  if(anim)viserCam(cx,cy,w);else{cam.cx=cx;cam.cy=cy;cam.w=w;cible.actif=false;appliquer()}}
function vueFleur(n,anim){const L=T.filter(t=>S.own[t.i]===n);if(!L.length){vueTout(anim);return}
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;L.forEach(t=>{x0=Math.min(x0,t.c[0]);y0=Math.min(y0,t.c[1]);x1=Math.max(x1,t.c[0]);y1=Math.max(y1,t.c[1])});
  const w=Math.max((x1-x0)*1.9,(y1-y0)*1.9*pxW/pxH,2200);if(anim)viserCam((x0+x1)/2,(y0+y1)/2,w);else{cam.cx=(x0+x1)/2;cam.cy=(y0+y1)/2;cam.w=w;appliquer()}}
function vueTout(anim){if(anim)viserCam(BB.cx,BB.cy,wMax());else{cam.cx=BB.cx;cam.cy=BB.cy;cam.w=wMax();appliquer()}}
function suivre(i){const t=T[i],h=cam.w*pxH/pxW,dx=t.c[0]-cam.cx,dy=t.c[1]-cam.cy;
  if(Math.abs(dx)>cam.w*.36||Math.abs(dy)>h*.36)viserCam(t.c[0],t.c[1],cam.w)}

/* gestes : un doigt glisse, deux doigts pincent ; un toucher bref vise une tuile */
const doigts=new Map();let geste=null,dernier=null;
vue.addEventListener('pointerdown',e=>{audio();vue.setPointerCapture(e.pointerId);doigts.set(e.pointerId,{x:e.clientX,y:e.clientY,t:performance.now()});
  cible.actif=false;elan.vx=elan.vy=0;
  if(doigts.size===1)geste={type:'tap',x0:e.clientX,y0:e.clientY,cx:cam.cx,cy:cam.cy,t0:performance.now(),bouge:false};
  else if(doigts.size===2){const [a,b]=[...doigts.values()];geste={type:'pince',d0:Math.hypot(a.x-b.x,a.y-b.y),w0:cam.w,m0:ecranVersMonde((a.x+b.x)/2,(a.y+b.y)/2)}}
  e.preventDefault()});
vue.addEventListener('pointermove',e=>{const d=doigts.get(e.pointerId);if(!d||!geste)return;const px=d.x,py=d.y,pt=d.t;d.x=e.clientX;d.y=e.clientY;d.t=performance.now();
  const r=vue.getBoundingClientRect();
  if(geste.type==='pince'&&doigts.size>=2){const [a,b]=[...doigts.values()],dist=Math.hypot(a.x-b.x,a.y-b.y),mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
    cam.w=Math.max(wMin(),Math.min(wMax(),geste.w0*geste.d0/Math.max(20,dist)));const h=cam.w*pxH/pxW;
    cam.cx=geste.m0[0]-((mx-r.left)/r.width-.5)*cam.w;cam.cy=geste.m0[1]-((my-r.top)/r.height-.5)*h;appliquer();return}
  if(doigts.size!==1)return;
  const dx=e.clientX-geste.x0,dy=e.clientY-geste.y0;if(!geste.bouge&&Math.hypot(dx,dy)>9)geste.bouge=true;
  if(geste.bouge){const u=cam.w/r.width;cam.cx=geste.cx-dx*u;cam.cy=geste.cy-dy*u;
    const dt=Math.max(1,d.t-pt);elan.vx=(e.clientX-px)/dt;elan.vy=(e.clientY-py)/dt;appliquer()}});
function lacher(e){const d=doigts.get(e.pointerId);if(!d)return;doigts.delete(e.pointerId);
  if(geste&&geste.type==='tap'&&!geste.bouge&&performance.now()-geste.t0<500){
    elan.vx=elan.vy=0;const cibleEl=document.elementsFromPoint(e.clientX,e.clientY).find(x=>x.dataset&&x.dataset.i!==undefined);
    if(cibleEl)toucher(+cibleEl.dataset.i,e.clientX,e.clientY)}
  if(geste&&geste.type==='pince'&&doigts.size===1){const [a]=[...doigts.values()];geste={type:'tap',x0:a.x,y0:a.y,cx:cam.cx,cy:cam.cy,t0:0,bouge:true}}
  else if(!doigts.size){if(geste&&geste.type==='pince')elan.vx=elan.vy=0;geste=null}}
vue.addEventListener('pointerup',lacher);vue.addEventListener('pointercancel',lacher);
vue.addEventListener('wheel',e=>{e.preventDefault();zoomEn(Math.pow(1.0018,e.deltaY),e.clientX,e.clientY,false)},{passive:false});
vue.addEventListener('dblclick',e=>e.preventDefault());

/* ---------- affichage ---------- */
/* 28 nov. (« je vois des zones qui ne sont pas neutres, niveau 0 ; malgré cela je vois les deux choix possibles ») :
   une zone à + penche déjà vers sa faction +, une zone à − vers sa faction − ; seule une zone au niveau 0 est neutre et montre ses deux choix.
   « Quand je prends une tuile, garder la couleur de sa faction tout en gardant clair le royaume qui la possède » :
   l'émail garde la faction de la zone, le cadre et le sceau disent le royaume. */
/* pour le test (28 nov.) : « toutes les zones niveau 3, + ou − au hasard », puis « une zone sur 6 » au niveau 0 (neutre) */
const tirerNiv=t=>t.mort?0:Math.random()<1/6?0:(Math.random()<.5?3:-3);
function facZone(t,o){const n=S.niv?S.niv[t.i]||0:0;if(n>0)return t.choix[0];if(n<0)return t.choix[1];return 'Neutre'}   // prise ou non, la faction de la zone ne change pas
function majTout(){T.forEach(t=>majTuile(t.i));majLiens();majCurseur();majBarre();majFiche()}
/* 28 nov. (« les derniers niveaux de zoom, le plus petit et le plus grand, ont un layout différent. Au niveau maximum on garde ça plat
   et on veut voir le statut des royaumes. Au plus petit, voir les mini figurines et plus de détails sur les états des zones ») :
   de loin, chaque tuile prise est un aplat à la couleur du royaume qui la tient ; de près, un pion du royaume et le nom de la zone. */
const PION='M-.34 0H.34Q.36-.1.24-.14Q.14-.2.12-.42H.2Q.22-.5.12-.52A.21.21 0 1 0-.12-.52Q-.22-.5-.2-.42H-.12Q-.14-.2-.24-.14Q-.36-.1-.34 0Z';
function majRoyaume(t,o){const k=t.mort?'Ombre':o!=null&&o>=0?S.joueurs[o].k:null;if(t.platK===k)return;t.platK=k;
  if(t.plat){t.plat.remove();t.plat=null}if(t.pion){t.pion.remove();t.pion=null}if(!k)return;
  t.plat=el('polygon',{points:pts(t.p),fill:k==='Ombre'?'#2a1638':FAC[k].col},G.plat);
  if(k!=='Ombre'){const s=Math.min(60,t.r*.36),c=FAC[k].col;
    t.pion=el('path',{d:PION,class:'pion',fill:c,stroke:mix(c,'#000000',.6),transform:`translate(${(t.c[0]+t.r*.5).toFixed(0)} ${(t.c[1]+t.r*.5).toFixed(0)}) scale(${s.toFixed(1)})`},G.details)}}
function majTuile(i){const t=T[i],o=S.own[i];majRoyaume(t,o);
  if(t.mort){plaque(t,'Ombre');t.verre.setAttribute('class','verre mort');sceau(t,o);return}
  if(o==null||o<0){plaque(t,null);t.verre.setAttribute('class','verre libre');t.icone.setAttribute('class','icone libre')}
  else{plaque(t,facZone(t,o),S.joueurs[o].k);t.verre.setAttribute('class','verre prise');t.icone.setAttribute('class','icone prise')}
  sceau(t,o)}
/* la tuile posée dans son alvéole (28 nov., « 1 avec un léger effet deux ») : émail épais biseauté, avec un léger craquelé de raku.
   Dessus émaillé, biseau éclairé d'en haut à gauche (faces groupées en trois teintes), épaisse tranche, ombre portée,
   bande de lumière ; le cadre extérieur prend la couleur du royaume qui tient la tuile. Pas de filtre, pour le Pixel. */
const LUM=[-.55,-.83];
function forme(t){const ins=f=>t.p.map(q=>[t.c[0]+(q[0]-t.c[0])*f,t.c[1]+(q[1]-t.c[1])*f]);
  const P=ins(.87),I=ins(.74),ep=Math.max(6,Math.min(18,t.r*.1)),f2=q=>q[0].toFixed(1)+' '+q[1].toFixed(1);
  const d={clair:'',moyen:'',sombre:'',tranche:''};
  P.forEach((a,k)=>{const b=P[(k+1)%P.length];let nx=b[1]-a[1],ny=a[0]-b[0];const L=Math.hypot(nx,ny)||1;nx/=L;ny/=L;
    if(nx*((a[0]+b[0])/2-t.c[0])+ny*((a[1]+b[1])/2-t.c[1])<0){nx=-nx;ny=-ny}
    const l=nx*LUM[0]+ny*LUM[1],a2=I[k],b2=I[(k+1)%I.length];
    d[l>.3?'clair':l<-.3?'sombre':'moyen']+=`M${f2(a)}L${f2(b)}L${f2(b2)}L${f2(a2)}Z`;
    if(ny>-.05)d.tranche+=`M${f2(a)}L${f2(b)}L${b[0].toFixed(1)} ${(b[1]+ep).toFixed(1)}L${a[0].toFixed(1)} ${(a[1]+ep).toFixed(1)}Z`});
  // bande de lumière sur le haut du dessus
  const B=ins(.64),n=B.length;let rf='',on=false;
  for(let k=0;k<n;k++){const a=B[k],b=B[(k+1)%n];const mx=(a[0]+b[0])/2-t.c[0],my=(a[1]+b[1])/2-t.c[1],L=Math.hypot(mx,my)||1;
    if((mx*LUM[0]+my*LUM[1])/L>.4){rf+=(on?'L':'M')+(on?'':f2(a)+'L')+f2(b);on=true}else on=false}
  d.reflet=rf;d.rw=Math.max(3,Math.min(9,t.r*.05)).toFixed(1);d.P=pts(P);d.I=pts(I);
  d.ombre='M'+P.map(q=>(q[0]+ep*.5).toFixed(1)+' '+(q[1]+ep*1.5).toFixed(1)).join('L')+'Z';return d}
const couleurPlaque=k=>k==='Ombre'?'#3a2250':k==='Neutre'?'#b9ab8c':FAC[k].col;
const TEINTE_PL={};
function teintePl(k){if(TEINTE_PL[k])return TEINTE_PL[k];const c=couleurPlaque(k);
  return TEINTE_PL[k]={clair:mix(c,'#ffffff',.45),moyen:mix(c,'#000000',.08),sombre:mix(c,'#000000',.45),tranche:mix(c,'#000000',.62),bord:mix(c,'#000000',.65)}}
function plaque(t,k,roy){const cle=k&&k+'|'+(roy||'');if(t.plK===cle)return;t.plK=cle;if(t.pl){t.pl.remove();t.pl=null}if(!k)return;
  const d=t.forme,c=teintePl(k),g=el('g',{class:'plaque'},null);
  el('path',{d:d.ombre,class:'pl-ombre'},g);el('path',{d:d.tranche,fill:c.tranche},g);
  el('path',{d:d.clair+d.moyen+d.sombre,fill:c.moyen},g);el('path',{d:d.clair,fill:c.clair},g);el('path',{d:d.sombre,fill:c.sombre},g);
  el('polygon',{points:d.I,fill:`url(#g-${k})`},g);
  el('polygon',{points:d.I,class:'pl-craquele'},g);                    // le léger craquelé de raku, sur le dessus seulement
  if(d.reflet)el('path',{d:d.reflet,class:'pl-reflet','stroke-width':d.rw},g);
  el('polygon',{points:d.P,class:'pl-bord',stroke:c.bord},g);
  if(roy)el('polygon',{points:d.P,class:'pl-royaume',stroke:FAC[roy].col},g);   // le cadre à la couleur du royaume qui la tient
  // garder l'ordre des tuiles (une tuile du bas recouvre l'ombre de celle du haut)
  let suiv=null;for(let j=t.i+1;j<T.length&&!suiv;j++)if(T[j].pl)suiv=T[j].pl;G.plaques.insertBefore(g,suiv);t.pl=g}
/* 28 nov. (« je veux voir mes tuiles ajoutées et la faction des tuiles ») : chaque tuile prise porte le sceau de sa faction,
   un losange de sa couleur ; les tuiles que vous avez ajoutées ont en plus un anneau d'or. */
const estDepart=(t,o)=>t.roy!==undefined&&t.roy===o;
function puce(g,k,x,y,s,cls){const c=FAC[k].col,G2=SIGLE[k]||{},q=el('g',{class:cls||'',transform:`translate(${x.toFixed(1)} ${y.toFixed(1)})`},g),sc_=`scale(${(s*.72).toFixed(2)})`;
  el('circle',{r:s.toFixed(1),fill:c,class:'sceau-gemme'},q);if(G2.f)el('path',{d:G2.f,transform:sc_,class:'sceau-plein'},q);
  if(G2.s)el('path',{d:G2.s,transform:sc_,class:'sceau-trait',stroke:G2.f?c:'#fff8e8','stroke-width':G2.f?.14:.2},q);return q}
function sceau(t,o){if(t.sc){t.sc.remove();t.sc=null}if(t.i===S.ici)return;   /* sur la tuile de la figurine, c'est elle qui fait le sceau */
  const s0=Math.max(12,Math.min(28,t.r*.24)),y0=t.c[1]-Math.min(46,t.r*.42)-s0*1.25;
  if(t.mort){const g=el('g',{class:'sceau ombre'},G.sceaux);puce(g,'Ombre',t.c[0],t.c[1],Math.max(14,Math.min(34,t.r*.3)));t.sc=g;return}
  if(o==null||o<0){/* libre : au niveau 0, neutre avec ses deux factions possibles ; sinon la seule faction vers laquelle elle penche, et son niveau */
    const s=s0*.8,n=S.niv?S.niv[t.i]||0:0,g=el('g',{class:'sceau neutre'},G.sceaux);
    if(!n){puce(g,t.choix[0],t.c[0]-s*1.05,y0,s);puce(g,t.choix[1],t.c[0]+s*1.05,y0,s)}
    else puce(g,t.choix[n>0?0:1],t.c[0],y0,s*1.15,'penche');
    if(n){const cn=FAC[t.choix[n>0?0:1]].col,s=s0*1.05,b=el('g',{class:'niveau',transform:`translate(${t.c[0].toFixed(0)} ${(t.c[1]+Math.min(46,t.r*.42)+s*1.3).toFixed(0)})`},g);
      el('rect',{x:(-s*1.25).toFixed(1),y:(-s*.75).toFixed(1),width:(s*2.5).toFixed(1),height:(s*1.5).toFixed(1),rx:(s*.5).toFixed(1),fill:mix(cn,'#1a0c04',.35),class:'niveau-fond'},b);
      el('text',{class:'niveau-txt','font-size':(s*1.15).toFixed(1),y:(s*.4).toFixed(1)},b).textContent=(n>0?'+':'−')+Math.abs(n)}
    t.sc=g;return}
  /* tuile prise : le sceau reste celui de la faction de la zone (elle ne change pas de faction) ; le royaume qui la tient
     se lit au cadre de la tuile, à l'anneau de sa couleur autour du sceau, et au liseré de ses groupes */
  const s=s0,x=t.c[0],y=y0,kr=S.joueurs[o].k,ajout=!estDepart(t,o),fz=facZone(t,o);
  const g=el('g',{class:'sceau'+(ajout?' ajout':'')+(o===0?' mien':'')},G.sceaux);
  if(fz==='Neutre'){puce(g,t.choix[0],x-s*.95,y,s*.8);puce(g,t.choix[1],x+s*.95,y,s*.8)}
  else{el('circle',{cx:x.toFixed(0),cy:y.toFixed(0),r:(s*1.32).toFixed(1),class:'sceau-royaume',stroke:FAC[kr].col},g);
    if(ajout&&o===0)el('circle',{cx:x.toFixed(0),cy:y.toFixed(0),r:(s*1.62).toFixed(1),class:'sceau-anneau'},g);
    puce(g,fz,x,y,s)}
  t.sc=g}
function groupes(cle){cle=cle||(i=>{const n=S.own[i];return n==null||n<0?null:n});const vu=new Set(),L=[];
  T.forEach(t=>{const n=cle(t.i);if(n==null||vu.has(t.i))return;const m=[];const st=[t.i];vu.add(t.i);
    while(st.length){const i=st.pop();m.push(i);for(const v of T[i].v)if(!vu.has(v)&&cle(v)===n){vu.add(v);st.push(v)}}L.push({n,m})});return L}
function contour(L,min){const id=new Map();L.forEach((g,k)=>{if(g.m.length>=min)g.m.forEach(i=>id.set(i,k))});const tr={};
  for(const a of ARETES){const ka=id.get(a.a),kb=id.get(a.b);if(ka===kb)continue;const d=`M${a.p1[0].toFixed(0)} ${a.p1[1].toFixed(0)}L${a.p2[0].toFixed(0)} ${a.p2[1].toFixed(0)}`;
    if(ka!==undefined)tr[ka]=(tr[ka]||'')+d;if(kb!==undefined)tr[kb]=(tr[kb]||'')+d}
  // bord du monde
  return tr}
function majLiens(){G.liens.innerHTML='';
  /* le royaume : un fin liseré à sa couleur autour de ses tuiles qui se touchent */
  const R=groupes(),tr=contour(R,2);
  for(const k in tr){const c=FAC[S.joueurs[R[k].n].k].col;el('path',{d:tr[k],class:'groupe fil',stroke:mix(c,'#ffffff',.25)},G.liens)}
  /* 28 nov. (« je voudrais un effet qui montre quand 3 zones de même faction se touchent ou plus ») : la synergie. Trois tuiles ou plus
     d'un même royaume et d'une même faction qui se touchent s'illuminent ensemble : halo pulsant à la couleur de la faction,
     étincelles qui courent le long du bord, et un médaillon au sigle de la faction avec leur nombre. */
  const F=groupes(i=>{const o=S.own[i];if(o==null||o<0||T[i].mort)return null;const f=facZone(T[i],o);return f==='Neutre'?null:o+'|'+f}),ts=contour(F,3);
  for(const k in ts){const f=F[k].n.split('|')[1],c=FAC[f].col;
    el('path',{d:ts[k],class:'synergie halo',stroke:c},G.liens);el('path',{d:ts[k],class:'synergie fil',stroke:mix(c,'#ffffff',.6)},G.liens);
    el('path',{d:ts[k],class:'synergie etincelle'},G.liens)}
  for(const k in ts){const g=F[k],f=g.n.split('|')[1];let x=0,y=0;g.m.forEach(i=>{x+=T[i].c[0];y+=T[i].c[1]});x/=g.m.length;y/=g.m.length;
    let b=g.m[0],bd=1e18;g.m.forEach(i=>{if(i===S.ici)return;const d=(T[i].c[0]-x)**2+(T[i].c[1]-y)**2;if(d<bd){bd=d;b=i}});
    const t=T[b],c=FAC[f].col,px=(rendu.w||cam.w)/pxW,r=Math.max(Math.min(60,t.r*.45),17*px);   // au moins 34 px à l'écran
    const m=el('g',{class:'bonus',transform:`translate(${t.c[0].toFixed(0)} ${(t.c[1]+t.r*.15).toFixed(0)})`},G.liens);
    el('circle',{r:(r*1.25).toFixed(1),fill:c,class:'bonus-aura'},m);
    el('circle',{r:r.toFixed(1),fill:mix(c,'#1a0c04',.3),class:'bonus-fond'},m);
    const G2=SIGLE[f]||{},sc_=`translate(0 ${(-r*.28).toFixed(1)}) scale(${(r*.42).toFixed(2)})`;
    if(G2.f)el('path',{d:G2.f,transform:sc_,fill:'#fff8e8'},m);if(G2.s)el('path',{d:G2.s,transform:sc_,fill:'none',stroke:'#fff8e8','stroke-width':.2,'stroke-linecap':'round'},m);
    el('text',{class:'bonus-txt','font-size':(r*.62).toFixed(0),y:(r*.62).toFixed(0)},m).textContent='×'+g.m.length}
}
function majCurseur(){G.curseur.innerHTML='';if(S.sel<0)return;const t=T[S.sel],j=S.joueurs[S.tour];
  if(!S.fini&&j&&!j.ia&&S.own[S.sel]===-1)el('polygon',{points:pts(t.p),class:'apercu',fill:couleurPlaque(facZone(t,S.tour))},G.curseur);
  el('polygon',{points:pts(t.p),class:'curseur halo'},G.curseur);el('polygon',{points:pts(t.p),class:'curseur'},G.curseur)}
const compte=n=>{let c=0;for(const o of S.own)if(o===n)c++;return c};
function majBarre(){
  const tour=document.getElementById('tour'),sc=document.getElementById('scores');
  if(!S.joueurs.length){tour.innerHTML='';sc.innerHTML='';return}
  const j=S.joueurs[S.tour],dur=S.duree?` · tour ${Math.min(S.tourNum,S.duree)}/${S.duree}`:` · tour ${S.tourNum}`;
  tour.innerHTML=S.fini?'<span>Partie finie</span>':`<span class="pastille" style="--c:${FAC[j.k].col}"></span><span>${j.ia?'<b>'+FAC[j.k].nom+'</b> <span class="pense">choisit…</span>':'<b>À vous</b>'+dur}</span>`;
  sc.innerHTML=S.joueurs.map((p,n)=>`<span class="score${n===S.tour&&!S.fini?' actif':''}" style="--c:${FAC[p.k].col}" title="${FAC[p.k].nom}">${sigleSVG(p.k)}${compte(n)}</span>`).join('')}
function majFiche(){
  const f=document.getElementById('fiche');const j=S.joueurs[S.tour],monTour=!S.fini&&j&&!j.ia;let h='';
  if(S.sel<0){h=`<div class="nom">Le lutrin</div><div class="quoi">Touchez une tuile libre pour la viser.</div><div class="etat">&nbsp;</div>`}
  else{const t=T[S.sel],o=S.own[S.sel],inf=t.info;
    const vois=t.v.map(v=>S.own[v]),libres=vois.filter(o=>o===-1).length,amies=vois.filter(o=>o===0).length;
    const n=S.niv?S.niv[t.i]||0:0,[ca,cb]=t.choix||[];
    const fz=facZone(t,o),pz=n>0?t.poles[0]:n<0?t.poles[1]:'',niv=n?' '+(n>0?'+':'−')+Math.abs(n):'',roy=o>=0?S.joueurs[o].k:null;
    const etat=t.mort?`${sigleSVG('Ombre')}L'Ombre, le monde sauvage : personne ne la prend`
      :o<0?(n?`${sigleSVG(fz)}${FAC[fz].nom}${niv}${pz?' ('+pz+')':''} · libre`
        :`Neutre · + ${sigleSVG(ca)}${FAC[ca].nom}${t.poles[0]?' ('+t.poles[0]+')':''} · − ${sigleSVG(cb)}${FAC[cb].nom}${t.poles[1]?' ('+t.poles[1]+')':''}`)
      :`${fz==='Neutre'?`Neutre · + ${sigleSVG(ca)}${FAC[ca].nom} · − ${sigleSVG(cb)}${FAC[cb].nom}`:sigleSVG(fz)+FAC[fz].nom+niv} · royaume : ${o===0?'à vous':sigleSVG(roy)+FAC[roy].nom}${estDepart(T[S.sel],o)?'':' · tuile ajoutée'}`;
    const ici=S.sel===S.ici?' · <span class="ici-txt">'+(S.iciVrai?'vous étiez ici':'vous êtes ici')+'</span>':'';
    h=`<div class="nom">${t.mort?'Zone d\'ombre (l\'Ombre)':inf[0]}</div><div class="quoi">${TYPES[inf[1]]||''}${inf[2]&&!t.mort?' · '+inf[2]:''}</div><div class="etat">${etat}${ici}</div>`}
  const allable=S.sel>=0&&!T[S.sel].mort&&S.joueurs.length;
  const peut=monTour&&S.sel>=0&&S.own[S.sel]===-1;
  h+=`<div class="actions"><button class="btn principal" id="b-prendre" ${peut?'':'disabled'}><span class="tch">A</span>${monTour?'Prendre cette tuile':'Patientez…'}</button>
    <div class="ligne"><button class="btn petit aller" id="b-aller" ${allable?'':'disabled'} aria-label="Se téléporter dans la zone"><span class="tch">Y</span>✧ Y aller</button><button class="btn petit" id="b-menu" aria-label="Nouvelle partie"><span class="tch">≡</span>↻</button>
    <button class="btn petit" id="b-son" aria-label="Son">${S.son?'♪':'♪̸'}</button></div></div>`;
  f.innerHTML=h;
  f.querySelector('#b-prendre').onclick=()=>prendreSel();
  f.querySelector('#b-menu').onclick=()=>menu();
  f.querySelector('#b-aller').onclick=()=>{audio();aller(S.sel)};
  f.querySelector('#b-son').onclick=()=>{S.son=!S.son;try{localStorage.setItem('lutrin-son',S.son?'1':'0')}catch(e){}majFiche()}}

/* ---------- jeu ---------- */
function viser(i,doux){if(i===S.sel)return;S.sel=i;majCurseur();majFiche();if(!doux)son('tic')}
function toucher(i,x,y){if(S.fini)return;const j=S.joueurs[S.tour],t=T[i];
  // vue de loin : un toucher rapproche d'abord la tuile, pour bien la voir
  if(t.r/(cam.w/pxW)<9){viser(i);viserCam(t.c[0],t.c[1],Math.min(cam.w,3200));return}
  if(i===S.sel&&j&&!j.ia&&S.own[i]===-1){prendreSel();return}
  viser(i)}
function prendreSel(){const j=S.joueurs[S.tour];if(S.fini||!j||j.ia||S.sel<0||S.own[S.sel]!==-1)return;prendre(S.sel,S.tour)}
function prendre(i,n){
  S.own[i]=n;const t=T[i],c=FAC[S.joueurs[n].k].col;
  // la couleur monte du centre de la tuile, comme une lumière qui s'allume
  const cp=el('clipPath',{id:'cp-flot-'+i},G.flots);el('polygon',{points:pts(t.p)},cp);
  const g=el('g',{'clip-path':`url(#cp-flot-${i})`},G.flots);
  const fl=el('circle',{cx:t.c[0],cy:t.c[1],r:t.r*2.6,fill:mix(c,'#ffffff',.6),class:'flot'},g);
  fl.animate([{transform:'scale(.05)',opacity:1},{transform:'scale(1)',opacity:.85,offset:.55},{transform:'scale(1.05)',opacity:0}],{duration:900,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>{g.remove();cp.remove()};
  etincelles(t,c);
  setTimeout(()=>{majTuile(i);majLiens()},180);
  son('prise',n);if(!S.joueurs[n].ia&&navigator.vibrate)try{navigator.vibrate(18)}catch(e){}
  S.tour=(S.tour+1)%S.joueurs.length;if(S.tour===0)S.tourNum++;
  if(!S.own.some(o=>o===-1)||(S.duree&&S.tourNum>S.duree)){S.fini=true;oublier();majBarre();majFiche();setTimeout(fin,1300);return}
  majBarre();majFiche();majCurseur();sauver();
  if(S.joueurs[S.tour].ia)setTimeout(jouerIA,520+Math.random()*300)}
function etincelles(t,c){const n=Math.round(Math.min(22,6+t.r/(cam.w/pxW)));for(let k=0;k<n;k++){const a=Math.random()*Math.PI*2,d=t.r*(.6+Math.random()*1.4),s=t.r*(.05+Math.random()*.08);
  const e=el('circle',{cx:t.c[0],cy:t.c[1],r:s,fill:k%3?mix(c,'#ffffff',.6):'#fff6d8',class:'etin'},G.etin);
  e.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(.2)`,opacity:0}],{duration:700+Math.random()*600,easing:'cubic-bezier(.15,.7,.3,1)'}).onfinish=()=>e.remove()}}
function jouerIA(){if(S.fini)return;const n=S.tour,k=S.joueurs[n].k;let best=null,bs=-1e9;const mien=S.own.some(o=>o===n);
  for(const t of T){if(S.own[t.i]!==-1)continue;let s=0;
    if(mien){let a=0,l=0,op=0;for(const v of t.v){const o=S.own[v];if(o===n)a++;else if(o===-1)l++;else if(o>=0&&opposees(k,S.joueurs[o].k))op++}
      if(!a)s=-5+Math.random();else s=3*a+.6*l-1.5*op}
    else s=t.v.length*.4;
    s+=Math.random()*1.2;if(s>bs){bs=s;best=t}}
  if(best)prendre(best.i,n)}

/* ---------- menu et fin ---------- */
const voile=document.getElementById('voile');
function alerte(m){voile.innerHTML=`<div class="carton"><h1>Oups</h1><p>${m}</p></div>`;voile.classList.remove('cache')}
function menu(){S.fini=true;voile.classList.remove('fin');
  const choix=(cle,val,lab,act)=>`<button class="btn${act?' choisi':''}" data-${cle}="${val}">${lab}</button>`;
  voile.innerHTML=`<div class="carton"><h1>Le lutrin</h1><p>Chaque faction part de sa fleur. À tour de rôle, chacune prend une tuile libre. À la fin, la plus grande mosaïque gagne.</p>
  <h2>La rosace</h2><div class="rangee large">${ROSACES.map(r=>choix('r',r[0],r[1],r[0]===S.rosace)).join('')}</div>
  <h2>Votre faction</h2><div class="medaillons">${ROUE.map(k=>`<button class="medaillon${k===S.choixFac?' choisi':''}" data-f="${k}" style="--c:${FAC[k].col}">${sigleSVG(k,'sigle grand')}<b>${FAC[k].nom}</b><small>${FAC[k].dev}</small></button>`).join('')}</div>
  <div class="deux"><div><h2>Rivales</h2><div class="rangee">${[1,2,3,4].map(n=>choix('n',n,n,n===S.nbRivaux)).join('')}</div></div>
  <div><h2>Durée</h2><div class="rangee">${[[10,'10 tours'],[20,'20'],[0,'Sans fin']].map(d=>choix('d',d[0],d[1],d[0]===S.duree)).join('')}</div></div></div>
  <button class="btn principal" id="b-go"><span class="tch">A</span>Commencer</button>
  <div class="aide">Pincez pour zoomer, glissez pour vous déplacer. Touchez une tuile pour la viser, touchez-la encore pour la prendre.</div></div>`;
  voile.classList.remove('cache');
  const groupe=(sel,f)=>voile.querySelectorAll(sel).forEach(b=>b.onclick=()=>{audio();f(b);voile.querySelectorAll(sel).forEach(x=>x.classList.toggle('choisi',x===b));son('tic')});
  groupe('[data-f]',b=>S.choixFac=b.dataset.f);groupe('[data-n]',b=>S.nbRivaux=+b.dataset.n);groupe('[data-d]',b=>S.duree=+b.dataset.d);groupe('[data-r]',b=>S.rosace=b.dataset.r);
  voile.querySelector('#b-go').onclick=()=>{audio();commencer()};
  focusMenu(voile.querySelector('#b-go'))}
function commencer(){const id=choisirMondeId();if(!id){alerte('Aucun monde dans la banque.');return}
  voile.innerHTML='<div class="carton"><h1>…</h1><p>Le maître verrier assemble la rosace.</p></div>';
  oublier();
  chargerMonde(id,()=>{S.monde=id;preparer();
    const autres=ROUE.filter(k=>k!==S.choixFac).sort(()=>Math.random()-.5);
    S.joueurs=[{k:S.choixFac,ia:false}].concat(autres.slice(0,S.nbRivaux).map(k=>({k,ia:true})));
    S.own=T.map(t=>t.mort?-2:(t.roy!==undefined&&t.roy<S.joueurs.length?t.roy:-1));
    // 28 nov. (« pour le test, toutes les zones sont niveau 3, + ou − au hasard »)
    S.niv=T.map(tirerNiv);
    S.tour=0;S.tourNum=1;S.fini=false;
    // la tuile visée au départ : une tuile libre au bord de votre fleur
    const bord=T.filter(t=>S.own[t.i]===-1&&t.v.some(v=>S.own[v]===0));S.sel=bord.length?bord[0].i:-1;
    dessiner();taille();vueTout(false);voile.classList.add('cache');sauver();
    setTimeout(()=>{if(S.iciVrai)vueIci(true);else vueFleur(0,true)},450)})}
function fin(){
  const cl=S.joueurs.map((p,n)=>({p,n,c:compte(n),g:plusGrand(n)})).sort((a,b)=>b.g-a.g||b.c-a.c);
  const gagne=cl[0].n===0,nm=FAC[cl[0].p.k].nom;
  voile.innerHTML=`<div class="carton"><h1>${gagne?'Victoire':'Partie finie'}</h1><p>${gagne?'Votre mosaïque est la plus grande.':nm+(nm.startsWith('Les ')?' tiennent':' tient')+' la plus grande mosaïque.'}</p>
  <ol class="classement">${cl.map(x=>`<li style="--c:${FAC[x.p.k].col}">${sigleSVG(x.p.k)}<span>${x.n===0?'Vous · ':''}${FAC[x.p.k].nom}</span><small>${x.c} tuiles</small>&nbsp;<em>${x.g}</em></li>`).join('')}</ol>
  <div class="aide">Le grand chiffre : le plus grand groupe de tuiles qui se touchent.</div>
  <button class="btn principal" id="b-encore"><span class="tch">A</span>Rejouer</button></div>`;
  voile.classList.add('fin');voile.classList.remove('cache');voile.querySelector('#b-encore').onclick=()=>{audio();menu()};
  vueTout(true);focusMenu(voile.querySelector('#b-encore'));son('fin')}
function plusGrand(n){const vu=new Set();let best=0;
  T.forEach(t=>{if(S.own[t.i]!==n||vu.has(t.i))return;let c=0;const st=[t.i];vu.add(t.i);
    while(st.length){const i=st.pop();c++;for(const v of T[i].v)if(S.own[v]===n&&!vu.has(v)){vu.add(v);st.push(v)}}best=Math.max(best,c)});return best}

/* ---------- boutons de zoom ---------- */
function boutonsZoom(){const z=document.createElement('div');z.id='zoom';
  z.innerHTML=`<button class="rond" id="z-plus" aria-label="Zoomer">+</button><div id="zoom-niveau"><i></i></div><button class="rond" id="z-moins" aria-label="Dézoomer">−</button><button class="rond" id="z-vue" aria-label="Vue">◎</button>`;
  document.getElementById('scene').appendChild(z);
  z.querySelector('#z-plus').onclick=()=>zoomEn(.55,null,null,true);z.querySelector('#z-moins').onclick=()=>zoomEn(1.8,null,null,true);
  z.querySelector('#z-vue').onclick=()=>{if(cam.w>wMax()*.8)vueFleur(0,true);else vueTout(true)}}

/* ---------- son : petit carillon de verre ---------- */
let AC=null;
function audio(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume()}
const GAMME=[0,2,4,7,9,12,14];
function note(f,t0,dur,vol,type){const o=AC.createOscillator(),g=AC.createGain();o.type=type||'sine';o.frequency.value=f;
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(vol,t0+.01);g.gain.exponentialRampToValueAtTime(.0001,t0+dur);o.connect(g).connect(AC.destination);o.start(t0);o.stop(t0+dur+.05)}
function son(q,n){if(!S.son||!AC)return;const t=AC.currentTime;
  if(q==='tic')note(1760,t,.08,.025,'triangle');
  else if(q==='prise'){const b=330*Math.pow(2,GAMME[(n||0)%GAMME.length]/12),v=S.joueurs[n]&&S.joueurs[n].ia?.045:.09;
    note(b*2,t,1.2,v);note(b*3,t+.06,1,v*.6);note(b*4.02,t+.12,.8,v*.35)}
  else if(q==='aller'){[0,7,12,19,24].forEach((s,k)=>note(523*Math.pow(2,s/12),t+k*.07,1.1,.06))}
  else if(q==='fin'){[0,4,7,12].forEach((s,k)=>note(392*Math.pow(2,s/12),t+k*.14,1.4,.07))}}

/* ---------- manette et clavier (en bonus) ---------- */
function bouger(dx,dy){if(S.fini){menuBouger(dx,dy);return}
  if(S.sel<0){S.sel=0}const c=T[S.sel].c;let best=-1,bs=1e9;
  for(const t of T){if(t.i===S.sel)continue;const vx=t.c[0]-c[0],vy=t.c[1]-c[1],d=Math.hypot(vx,vy);if(d>2500)continue;const cos=(vx*dx+vy*dy)/d;
    if(cos<.45)continue;const s=d*(2.2-cos*1.2);if(s<bs){bs=s;best=t.i}}
  if(best>=0){viser(best);suivre(best)}}
let focus=null;
function focusMenu(b){if(focus)focus.classList.remove('focus');focus=b;if(b&&document.body.classList.contains('manette'))b.classList.add('focus')}
function menuBouger(dx,dy){if(voile.classList.contains('cache'))return;const L=[...voile.querySelectorAll('button')];if(!focus||!L.includes(focus)){focusMenu(L[L.length-1]);return}
  const a=focus.getBoundingClientRect(),ax=a.x+a.width/2,ay=a.y+a.height/2;let best=null,bs=1e9;
  L.forEach(b=>{if(b===focus)return;const r=b.getBoundingClientRect(),vx=r.x+r.width/2-ax,vy=r.y+r.height/2-ay,d=Math.hypot(vx,vy),cos=(vx*dx+vy*dy)/d;
    if(cos<.5)return;const s=d*(2-cos);if(s<bs){bs=s;best=b}});if(best){focusMenu(best);son('tic')}}
function valider(){audio();if(!voile.classList.contains('cache')){if(focus)focus.click();return}prendreSel()}
addEventListener('keydown',e=>{const k=e.key;
  if(k==='ArrowLeft')bouger(-1,0);else if(k==='ArrowRight')bouger(1,0);else if(k==='ArrowUp')bouger(0,-1);else if(k==='ArrowDown')bouger(0,1);
  else if(k==='Enter'||k===' ')valider();else if(k==='Escape')menu();else if(k==='+'||k==='=')zoomEn(.6,null,null,true);else if(k==='-')zoomEn(1.7,null,null,true);else return;
  document.body.classList.add('manette');if(focus)focus.classList.add('focus');e.preventDefault()});
const prec={};let rep=0;
function manette(){const gp=[...(navigator.getGamepads?navigator.getGamepads():[])].find(g=>g);if(!gp)return;
  const b=i=>gp.buttons[i]&&gp.buttons[i].pressed,ax=gp.axes[0]||0,ay=gp.axes[1]||0,now=performance.now();
  let dx=(b(15)?1:0)-(b(14)?1:0)||(Math.abs(ax)>.55?Math.sign(ax):0),dy=(b(13)?1:0)-(b(12)?1:0)||(Math.abs(ay)>.55?Math.sign(ay):0);
  if(dx||dy){if(now>rep){document.body.classList.add('manette');if(focus)focus.classList.add('focus');bouger(dx,dy);rep=now+(prec.dir?160:300);prec.dir=1}}else{prec.dir=0;rep=0}
  const rx=gp.axes[2]||0,ry=gp.axes[3]||0;if(Math.abs(rx)>.2||Math.abs(ry)>.2){cible.actif=false;cam.cx+=rx*cam.w*.02;cam.cy+=ry*cam.w*.02;appliquer()}
  const lt=gp.buttons[6]?gp.buttons[6].value:0,rt=gp.buttons[7]?gp.buttons[7].value:0;if(lt>.1||rt>.1){cible.actif=false;zoomEn(1+(lt-rt)*.035,null,null,false)}
  const appui=i=>{const p=b(i),r=p&&!prec[i];prec[i]=p;return r};
  if(appui(0)){document.body.classList.add('manette');valider()}
  if(appui(2)&&BB){if(cam.w>wMax()*.8)vueFleur(0,true);else vueTout(true)}
  if(appui(3)&&voile.classList.contains('cache')&&S.sel>=0)aller(S.sel);
  if(appui(9))menu()}
addEventListener('pointerdown',()=>{document.body.classList.remove('manette');if(focus)focus.classList.remove('focus')},true);

/* ---------- départ ---------- */
try{S.son=localStorage.getItem('lutrin-son')!=='0'}catch(e){}
let att;addEventListener('resize',()=>{clearTimeout(att);att=setTimeout(()=>{if(!BB)return;const p=innerHeight>innerWidth;
  if(p!==S.portrait){const o=S.own.slice();preparer();S.own=o;dessiner();taille();vueFleur(0,false)}else taille()},120)});
boutonsZoom();if(!reprendre())menu();requestAnimationFrame(boucle);
window.LUTRIN={S,T,cam,majTout,prendre,jouerIA,commencer,zoomEn,vueTout,vueFleur,aller,vueIci,JEU};
})();
