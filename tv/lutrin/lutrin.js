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
  Pierre:{k:'Pierre',nom:'L\'Ordre du Socle',      col:'#c9ae7c',dev:'Bâtisseurs et légistes'},
  Vent:  {k:'Vent',  nom:'La Compagnie des Vents', col:'#b9a6f0',dev:'Nomades et éclaireurs'},
  Glace: {k:'Glace', nom:'La Veille Blanche',      col:'#8fd0f5',dev:'Gardiens des serments'},
  Eau:   {k:'Eau',   nom:'La Ligue des Marées',    col:'#2f8fd0',dev:'Marchands navigateurs'},
  Sève:  {k:'Sève',  nom:'Le Cercle des Racines',  col:'#62b544',dev:'Éleveurs de bêtes'}};
const ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'];
const opposees=(a,b)=>{const i=ROUE.indexOf(a),j=ROUE.indexOf(b);return i>=0&&j>=0&&Math.abs(i-j)===3};
const ROSACES=[['hasard','Au hasard'],['0','Les Cinq Soleils'],['1','La Rose de sang'],['2','La Grande Rosace'],['4','La Couronne de losanges'],['5','La Corolle du Sénat'],['mix','Cinq fleurs différentes']]
  .filter(r=>r[0]==='hasard'||BANQUE.some(m=>m.rosace===r[0]));
const TYPES={CIT:'Citadelle',DON:'Donjon',ANT:'Antre',MAR:'Assemblée',RES:'Ressource'};
const TEINTES=['#e9dcc0','#d4dfcb','#e6cfc4','#cddbe2','#e6dfb5','#dccfe3','#d0e2da','#ead7b0'];
/* icônes gravées, en unités (rayon 1) */
const ICONE={
  CIT:'M-.55 .8V-.35H-.78V-.8H-.48V-.58H-.16V-.8H.16V-.58H.48V-.8H.78V-.35H.55V.8ZM-.18 .8V.35A.18 .18 0 0 1 .18 .35V.8',
  DON:'M-.7 .8V-.05A.7 .7 0 0 1 .7 -.05V.8ZM-.3 .8V.12A.3 .3 0 0 1 .3 .12V.8M-.7 .8H.7',
  ANT:'M-.62 -.72Q-.15 0 -.52 .78M-.02 -.86Q.42 0 0 .86M.58 -.72Q.98 0 .5 .78',
  MAR:'M-.82 -.38L0 -.86L.82 -.38ZM-.55 -.28V.58M0 -.28V.58M.55 -.28V.58M-.85 .76H.85',
  RES:'M0 -.86L.62 -.2L0 .86L-.62 -.2ZM-.62 -.2H.62M0 -.86L-.2 -.2L0 .86L.2 -.2Z'};

/* ---------- état ---------- */
const S={joueurs:[],own:[],tour:0,tourNum:1,sel:-1,fini:true,choixFac:'Feu',nbRivaux:3,duree:20,rosace:'hasard',son:true,portrait:null,monde:null};
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
function choisirMondeId(){const L=BANQUE.filter(m=>S.rosace==='hasard'||m.rosace===S.rosace);const B=L.length?L:BANQUE;
  return B.length?B[Math.floor(Math.random()*B.length)].id:null}
function preparer(){
  const M=window.MONDE_GEN,portrait=innerHeight>innerWidth;S.portrait=portrait;
  T.length=0;ARETES.length=0;
  const tr=portrait?(q=>[-q[1],q[0]]):(q=>[q[0],q[1]]);
  M.tuiles.forEach((d,i)=>{const p=d.p.map(tr);let x=0,y=0;p.forEach(q=>{x+=q[0];y+=q[1]});const c=[x/p.length,y/p.length];
    let r=1e9;for(let k=0;k<p.length;k++)r=Math.min(r,distSeg(c,p[k],p[(k+1)%p.length]));
    const inf=ZI[d.id]||ZI[d.id.replace(/\d+$/,'')]||['Zone',d.m||'RES','',''];
    T.push({i,id:d.id,p,c,r,v:[],roy:d.r,mort:!!d.m,info:inf})});
  const key=q=>Math.round(q[0])+','+Math.round(q[1]),E={};
  T.forEach(t=>{for(let k=0;k<t.p.length;k++){const a=t.p[k],b=t.p[(k+1)%t.p.length],ka=key(a),kb=key(b),e=ka<kb?ka+'|'+kb:kb+'|'+ka;(E[e]=E[e]||[]).push({i:t.i,a,b})}});
  for(const e in E){const l=E[e];if(l.length===2&&l[0].i!==l[1].i){ARETES.push({a:l[0].i,b:l[1].i,p1:l[0].a,p2:l[0].b});T[l[0].i].v.push(l[1].i);T[l[1].i].v.push(l[0].i)}}
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;T.forEach(t=>t.p.forEach(q=>{x0=Math.min(x0,q[0]);y0=Math.min(y0,q[1]);x1=Math.max(x1,q[0]);y1=Math.max(y1,q[1])}));
  BB={x0,y0,x1,y1,w:x1-x0,h:y1-y0,cx:(x0+x1)/2,cy:(y0+y1)/2}}
function distSeg(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],L=dx*dx+dy*dy||1;let t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/L;t=Math.max(0,Math.min(1,t));
  return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy)}
const pts=p=>p.map(q=>q[0].toFixed(0)+','+q[1].toFixed(0)).join(' ');
const mix=(h,w,t)=>{const A=parseInt(h.slice(1),16),B=parseInt(w.slice(1),16),f=s=>Math.round(((A>>s)&255)*(1-t)+((B>>s)&255)*t);
  return'#'+((1<<24)|(f(16)<<16)|(f(8)<<8)|f(0)).toString(16).slice(1)};
const el=(n,a,par)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(par)par.appendChild(e);return e};

/* ---------- dessin ---------- */
const svg=document.getElementById('plateau');
let G={};
function dessiner(){
  svg.innerHTML='';
  const defs=el('defs',{},svg);
  TEINTES.forEach((ti,n)=>{const g=el('radialGradient',{id:'g-t'+n,cx:'.38',cy:'.32',r:'.85'},defs);
    el('stop',{offset:'0','stop-color':mix(ti,'#ffffff',.55),'stop-opacity':'.42'},g);el('stop',{offset:'.6','stop-color':ti,'stop-opacity':'.62'},g);el('stop',{offset:'1','stop-color':mix(ti,'#2a1a0c',.55),'stop-opacity':'.88'},g)});
  for(const k in FAC){const c=FAC[k].col,g=el('radialGradient',{id:'g-'+k,cx:'.4',cy:'.36',r:'.8'},defs);
    el('stop',{offset:'0','stop-color':mix(c,'#ffffff',.55),'stop-opacity':'.93'},g);el('stop',{offset:'.55','stop-color':c,'stop-opacity':'.9'},g);el('stop',{offset:'1','stop-color':mix(c,'#000000',.45),'stop-opacity':'.95'},g)}
  const gm=el('radialGradient',{id:'g-mort',cx:'.45',cy:'.4',r:'.8'},defs);
  el('stop',{offset:'0','stop-color':'#3a2a20'},gm);el('stop',{offset:'1','stop-color':'#0e0806'},gm);
  el('pattern',{id:'pat-grain',width:'512',height:'512',patternUnits:'userSpaceOnUse'},defs).appendChild(grain());
  G.verres=el('g',{},svg);G.flots=el('g',{},svg);
  el('rect',{class:'grain',x:BB.x0,y:BB.y0,width:BB.w,height:BB.h,fill:'url(#pat-grain)'},svg);
  G.icones=el('g',{class:'icones'},svg);G.liens=el('g',{},svg);G.plomb=el('g',{},svg);G.fleurs=el('g',{},svg);G.curseur=el('g',{},svg);G.etin=el('g',{},svg);
  T.forEach(t=>{let h=0;for(const ch of t.id)h=(h*31+ch.charCodeAt(0))>>>0;t.teinte='g-t'+(h%TEINTES.length);
    t.verre=el('polygon',{points:pts(t.p),'data-i':t.i,class:'verre'},G.verres);
    if(!t.mort){const s=Math.min(46,t.r*.42);
      t.icone=el('path',{d:ICONE[t.info[1]]||ICONE.RES,class:'icone libre',transform:`translate(${t.c[0].toFixed(0)} ${t.c[1].toFixed(0)}) scale(${s.toFixed(1)})`},G.icones)}
    else el('path',{d:fissure(t),class:'fissure'},G.icones)});
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
  majTout()}
function fissure(t){const c=t.c,r=t.r*.8;let d=`M${(c[0]-r).toFixed(0)} ${(c[1]-r*.2).toFixed(0)}`;
  for(let k=1;k<=4;k++)d+=`L${(c[0]-r+k*r/2).toFixed(0)} ${(c[1]+(k%2?r*.35:-r*.25)).toFixed(0)}`;return d}
function grain(){ // texture de verre soufflé, faite une fois
  const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d'),im=x.createImageData(256,256);
  for(let i=0;i<im.data.length;i+=4){const n=128+(Math.random()-.5)*90;im.data[i]=im.data[i+1]=im.data[i+2]=n;im.data[i+3]=255}
  x.putImageData(im,0,0);x.globalAlpha=.18;for(let k=0;k<40;k++){x.strokeStyle=Math.random()<.5?'#fff':'#000';x.lineWidth=1+Math.random()*2;x.beginPath();
    const y=Math.random()*256;x.moveTo(0,y);x.bezierCurveTo(85,y+Math.random()*30-15,170,y+Math.random()*30-15,256,y+Math.random()*20-10);x.stroke()}
  const img=document.createElementNS(NS,'image');img.setAttribute('href',c.toDataURL());img.setAttribute('width','512');img.setAttribute('height','512');return img}

/* ---------- caméra : zoom et déplacement ---------- */
function taille(){const sc=document.getElementById('scene').getBoundingClientRect();
  pxW=Math.max(100,sc.width-24);pxH=Math.max(100,sc.height-28);svg.style.width=pxW+'px';svg.style.height=pxH+'px';
  document.documentElement.style.setProperty('--pente',S.portrait?'8deg':'12deg');appliquer()}
const wMax=()=>BB?Math.max(BB.w,BB.h*pxW/pxH)*1.08:4000;
const wMin=()=>700;
function borner(c){c.w=Math.max(wMin(),Math.min(wMax(),c.w));if(!BB)return;const h=c.w*pxH/pxW,mx=Math.max(0,(BB.w-c.w)/2+c.w*.35),my=Math.max(0,(BB.h-h)/2+h*.35);
  c.cx=Math.max(BB.cx-mx,Math.min(BB.cx+mx,c.cx));c.cy=Math.max(BB.cy-my,Math.min(BB.cy+my,c.cy))}
let loin=null;
function appliquer(){borner(cam);const h=cam.w*pxH/pxW;svg.setAttribute('viewBox',`${(cam.cx-cam.w/2).toFixed(1)} ${(cam.cy-h/2).toFixed(1)} ${cam.w.toFixed(1)} ${h.toFixed(1)}`);
  const l=cam.w/pxW>9;if(l!==loin){loin=l;svg.classList.toggle('loin',l)}
  const z=document.getElementById('zoom-niveau');if(z)z.style.setProperty('--z',((wMax()-cam.w)/(wMax()-wMin())).toFixed(3))}
function viserCam(cx,cy,w){cible.cx=cx;cible.cy=cy;cible.w=w;borner(cible);cible.actif=true;elan.vx=elan.vy=0}
const elan={vx:0,vy:0};
function boucle(){
  if(cible.actif){const k=.16;cam.cx+=(cible.cx-cam.cx)*k;cam.cy+=(cible.cy-cam.cy)*k;cam.w*=Math.pow(cible.w/cam.w,k);
    if(Math.abs(cible.cx-cam.cx)<1&&Math.abs(cible.cy-cam.cy)<1&&Math.abs(cible.w/cam.w-1)<.002){cam.cx=cible.cx;cam.cy=cible.cy;cam.w=cible.w;cible.actif=false}appliquer()}
  else if(Math.abs(elan.vx)+Math.abs(elan.vy)>.02&&!doigts.size){const u=cam.w/pxW;cam.cx-=elan.vx*16*u;cam.cy-=elan.vy*16*u;elan.vx*=.92;elan.vy*=.92;appliquer()}
  manette();requestAnimationFrame(boucle)}
function ecranVersMonde(x,y){const r=svg.getBoundingClientRect(),h=cam.w*pxH/pxW;return[cam.cx-cam.w/2+(x-r.left)/r.width*cam.w,cam.cy-h/2+(y-r.top)/r.height*h]}
function zoomEn(f,x,y,anim){const r=svg.getBoundingClientRect();if(x==null){x=r.left+r.width/2;y=r.top+r.height/2}
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
svg.addEventListener('pointerdown',e=>{audio();svg.setPointerCapture(e.pointerId);doigts.set(e.pointerId,{x:e.clientX,y:e.clientY,t:performance.now()});
  cible.actif=false;elan.vx=elan.vy=0;
  if(doigts.size===1)geste={type:'tap',x0:e.clientX,y0:e.clientY,cx:cam.cx,cy:cam.cy,t0:performance.now(),bouge:false};
  else if(doigts.size===2){const [a,b]=[...doigts.values()];geste={type:'pince',d0:Math.hypot(a.x-b.x,a.y-b.y),w0:cam.w,m0:ecranVersMonde((a.x+b.x)/2,(a.y+b.y)/2)}}
  e.preventDefault()});
svg.addEventListener('pointermove',e=>{const d=doigts.get(e.pointerId);if(!d||!geste)return;const px=d.x,py=d.y,pt=d.t;d.x=e.clientX;d.y=e.clientY;d.t=performance.now();
  const r=svg.getBoundingClientRect();
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
svg.addEventListener('pointerup',lacher);svg.addEventListener('pointercancel',lacher);
svg.addEventListener('wheel',e=>{e.preventDefault();zoomEn(Math.pow(1.0018,e.deltaY),e.clientX,e.clientY,false)},{passive:false});
svg.addEventListener('dblclick',e=>e.preventDefault());

/* ---------- affichage ---------- */
function majTout(){T.forEach(t=>majTuile(t.i));majLiens();majCurseur();majBarre();majFiche()}
function majTuile(i){const t=T[i],o=S.own[i];
  if(t.mort){t.verre.setAttribute('fill','url(#g-mort)');t.verre.setAttribute('class','verre mort');return}
  if(o==null||o<0){t.verre.setAttribute('fill',`url(#${t.teinte})`);t.verre.setAttribute('class','verre libre');t.icone.setAttribute('class','icone libre')}
  else{t.verre.setAttribute('fill','url(#g-'+S.joueurs[o].k+')');t.verre.setAttribute('class','verre prise');t.icone.setAttribute('class','icone prise')}}
function majLiens(){G.liens.innerHTML='';const par={};let dT='';
  for(const a of ARETES){const oa=S.own[a.a],ob=S.own[a.b];if(oa==null||ob==null||oa<0||ob<0)continue;
    const d=`M${a.p1[0].toFixed(0)} ${a.p1[1].toFixed(0)}L${a.p2[0].toFixed(0)} ${a.p2[1].toFixed(0)}`;
    if(oa===ob)par[oa]=(par[oa]||'')+d;else if(opposees(S.joueurs[oa].k,S.joueurs[ob].k))dT+=d}
  for(const n in par){const c=FAC[S.joueurs[n].k].col;el('path',{d:par[n],class:'lien halo',stroke:c},G.liens);el('path',{d:par[n],class:'lien fil',stroke:mix(c,'#ffffff',.5)},G.liens)}
  if(dT)el('path',{d:dT,class:'lien tension'},G.liens)}
function majCurseur(){G.curseur.innerHTML='';if(S.sel<0)return;const t=T[S.sel],j=S.joueurs[S.tour];
  if(!S.fini&&j&&!j.ia&&S.own[S.sel]===-1)el('polygon',{points:pts(t.p),class:'apercu',fill:FAC[j.k].col},G.curseur);
  el('polygon',{points:pts(t.p),class:'curseur halo'},G.curseur);el('polygon',{points:pts(t.p),class:'curseur'},G.curseur)}
const compte=n=>{let c=0;for(const o of S.own)if(o===n)c++;return c};
function majBarre(){
  const tour=document.getElementById('tour'),sc=document.getElementById('scores');
  if(!S.joueurs.length){tour.innerHTML='';sc.innerHTML='';return}
  const j=S.joueurs[S.tour],dur=S.duree?` · tour ${Math.min(S.tourNum,S.duree)}/${S.duree}`:` · tour ${S.tourNum}`;
  tour.innerHTML=S.fini?'<span>Partie finie</span>':`<span class="pastille" style="--c:${FAC[j.k].col}"></span><span>${j.ia?'<b>'+FAC[j.k].nom+'</b> <span class="pense">choisit…</span>':'<b>À vous</b>'+dur}</span>`;
  sc.innerHTML=S.joueurs.map((p,n)=>`<span class="score${n===S.tour&&!S.fini?' actif':''}" style="--c:${FAC[p.k].col}" title="${FAC[p.k].nom}"><i></i>${compte(n)}</span>`).join('')}
function majFiche(){
  const f=document.getElementById('fiche');const j=S.joueurs[S.tour],monTour=!S.fini&&j&&!j.ia;let h='';
  if(S.sel<0){h=`<div class="nom">Le lutrin</div><div class="quoi">Touchez une tuile libre pour la viser.</div><div class="etat">&nbsp;</div>`}
  else{const t=T[S.sel],o=S.own[S.sel],inf=t.info;
    const vois=t.v.map(v=>S.own[v]),libres=vois.filter(o=>o===-1).length,amies=vois.filter(o=>o===0).length;
    const etat=t.mort?`<i style="--c:#3a2a20"></i>Zone d'ombre détruite : personne ne la prend`:o<0?`<i style="--c:#e9dcc0"></i>Libre · voisines : ${libres} libres${amies?', '+amies+' à vous':''}`:`<i style="--c:${FAC[S.joueurs[o].k].col}"></i>${o===0?'À vous':FAC[S.joueurs[o].k].nom}`;
    h=`<div class="nom">${t.mort?'Zone d\'ombre détruite':inf[0]}</div><div class="quoi">${TYPES[inf[1]]||''}${inf[2]&&!t.mort?' · '+inf[2]:''}</div><div class="etat">${etat}</div>`}
  const peut=monTour&&S.sel>=0&&S.own[S.sel]===-1;
  h+=`<div class="actions"><button class="btn principal" id="b-prendre" ${peut?'':'disabled'}><span class="tch">A</span>${monTour?'Prendre cette tuile':'Patientez…'}</button>
    <div class="ligne"><button class="btn petit" id="b-menu" aria-label="Nouvelle partie"><span class="tch">≡</span>↻</button>
    <button class="btn petit" id="b-son" aria-label="Son">${S.son?'♪':'♪̸'}</button></div></div>`;
  f.innerHTML=h;
  f.querySelector('#b-prendre').onclick=()=>prendreSel();
  f.querySelector('#b-menu').onclick=()=>menu();
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
  if(!S.own.some(o=>o===-1)||(S.duree&&S.tourNum>S.duree)){S.fini=true;majBarre();majFiche();setTimeout(fin,1300);return}
  majBarre();majFiche();majCurseur();
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
  <h2>Votre faction</h2><div class="medaillons">${ROUE.map(k=>`<button class="medaillon${k===S.choixFac?' choisi':''}" data-f="${k}" style="--c:${FAC[k].col}"><div class="gemme"></div><b>${FAC[k].nom}</b><small>${FAC[k].dev}</small></button>`).join('')}</div>
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
  chargerMonde(id,()=>{S.monde=id;preparer();
    const autres=ROUE.filter(k=>k!==S.choixFac).sort(()=>Math.random()-.5);
    S.joueurs=[{k:S.choixFac,ia:false}].concat(autres.slice(0,S.nbRivaux).map(k=>({k,ia:true})));
    S.own=T.map(t=>t.mort?-2:(t.roy!==undefined&&t.roy<S.joueurs.length?t.roy:-1));
    S.tour=0;S.tourNum=1;S.fini=false;
    // la tuile visée au départ : une tuile libre au bord de votre fleur
    const bord=T.filter(t=>S.own[t.i]===-1&&t.v.some(v=>S.own[v]===0));S.sel=bord.length?bord[0].i:-1;
    dessiner();taille();vueTout(false);voile.classList.add('cache');
    setTimeout(()=>vueFleur(0,true),450)})}
function fin(){
  const cl=S.joueurs.map((p,n)=>({p,n,c:compte(n),g:plusGrand(n)})).sort((a,b)=>b.g-a.g||b.c-a.c);
  const gagne=cl[0].n===0,nm=FAC[cl[0].p.k].nom;
  voile.innerHTML=`<div class="carton"><h1>${gagne?'Victoire':'Partie finie'}</h1><p>${gagne?'Votre mosaïque est la plus grande.':nm+(nm.startsWith('Les ')?' tiennent':' tient')+' la plus grande mosaïque.'}</p>
  <ol class="classement">${cl.map(x=>`<li style="--c:${FAC[x.p.k].col}"><i></i><span>${x.n===0?'Vous · ':''}${FAC[x.p.k].nom}</span><small>${x.c} tuiles</small>&nbsp;<em>${x.g}</em></li>`).join('')}</ol>
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
  if(appui(9)||appui(3))menu()}
addEventListener('pointerdown',()=>{document.body.classList.remove('manette');if(focus)focus.classList.remove('focus')},true);

/* ---------- départ ---------- */
try{S.son=localStorage.getItem('lutrin-son')!=='0'}catch(e){}
let att;addEventListener('resize',()=>{clearTimeout(att);att=setTimeout(()=>{if(!BB)return;const p=innerHeight>innerWidth;
  if(p!==S.portrait){const o=S.own.slice();preparer();S.own=o;dessiner();taille();vueFleur(0,false)}else taille()},120)});
boutonsZoom();menu();requestAnimationFrame(boucle);
window.LUTRIN={S,T,cam,prendre,jouerIA,commencer,zoomEn,vueTout,vueFleur};
})();
