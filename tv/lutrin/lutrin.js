/* Le lutrin : Arène du plateau (28 nov. 2026).
   Demande de l'utilisateur : « un mode arène avec seulement le plateau. Pour commencer chaque joueur choisit une tuile libre et la
   sélectionne. Fin du tour. Elle est à nous. » ; « une belle interface pour jouer avec les tuiles, comme posée sur un lutrin, avec ses
   effets de verre, de magie, de synergie » ; « un gameplay pensé Pixel Pro ».
   Règle de cette première passe : à tour de rôle, chaque faction prend une tuile libre ; la partie finit quand tout est pris.
   Aucune autre règle : les idées de gameplay se testeront ensuite sur ce plateau. Rien n'est écrit dans la sauvegarde du jeu. */
(function(){
'use strict';
const NS='http://www.w3.org/2000/svg';
const R=window.LUTRIN_REGION||[];
const FAC={
  Feu:   {k:'Feu',   nom:'Les Braisiers',          col:'#e0643a',dev:'Conquérants et forgerons'},
  Pierre:{k:'Pierre',nom:'L\'Ordre du Socle',      col:'#c9ae7c',dev:'Bâtisseurs et légistes'},
  Vent:  {k:'Vent',  nom:'La Compagnie des Vents', col:'#b9a6f0',dev:'Nomades et éclaireurs'},
  Glace: {k:'Glace', nom:'La Veille Blanche',      col:'#8fd0f5',dev:'Gardiens des serments'},
  Eau:   {k:'Eau',   nom:'La Ligue des Marées',    col:'#2f8fd0',dev:'Marchands navigateurs'},
  Sève:  {k:'Sève',  nom:'Le Cercle des Racines',  col:'#62b544',dev:'Éleveurs de bêtes'}};
const ROUE=['Feu','Pierre','Vent','Glace','Eau','Sève'];
const opposees=(a,b)=>{const i=ROUE.indexOf(a),j=ROUE.indexOf(b);return i>=0&&j>=0&&Math.abs(i-j)===3};
const TYPES={CIT:'Citadelle',DON:'Donjon',ANT:'Antre',MAR:'Assemblée',RES:'Ressource'};
/* icônes gravées, en unités (rayon 1) */
const TEINTES=['#e9dcc0','#d4dfcb','#e6cfc4','#cddbe2','#e6dfb5','#dccfe3','#d0e2da','#ead7b0'];
const ICONE={
  CIT:'M-.55 .8V-.35H-.78V-.8H-.48V-.58H-.16V-.8H.16V-.58H.48V-.8H.78V-.35H.55V.8ZM-.18 .8V.35A.18 .18 0 0 1 .18 .35V.8',
  DON:'M-.7 .8V-.05A.7 .7 0 0 1 .7 -.05V.8ZM-.3 .8V.12A.3 .3 0 0 1 .3 .12V.8M-.7 .8H.7',
  ANT:'M-.62 -.72Q-.15 0 -.52 .78M-.02 -.86Q.42 0 0 .86M.58 -.72Q.98 0 .5 .78',
  MAR:'M-.82 -.38L0 -.86L.82 -.38ZM-.55 -.28V.58M0 -.28V.58M.55 -.28V.58M-.85 .76H.85',
  RES:'M0 -.86L.62 -.2L0 .86L-.62 -.2ZM-.62 -.2H.62M0 -.86L-.2 -.2L0 .86L.2 -.2Z'};

/* ---------- état ---------- */
const S={joueurs:[],own:[],tour:0,sel:-1,fini:true,choixFac:'Feu',nbRivaux:3,son:true,pense:false,portrait:null};
const T=[];      // tuiles : {d, p (points affichés), c (centre), r (rayon intérieur), v (voisines)}
const ARETES=[]; // arêtes partagées : {a, b, p1, p2}

/* ---------- géométrie ---------- */
function preparer(portrait){
  T.length=0;ARETES.length=0;
  const tr=portrait?(q=>[-q[1],q[0]]):(q=>[q[0],q[1]]);
  R.forEach((d,i)=>{const p=d.p.map(tr);let x=0,y=0;p.forEach(q=>{x+=q[0];y+=q[1]});const c=[x/p.length,y/p.length];
    let r=1e9;for(let k=0;k<p.length;k++){const a=p[k],b=p[(k+1)%p.length];r=Math.min(r,distSeg(c,a,b))}
    T.push({i,d,p,c,r,v:d.v})});
  const key=q=>Math.round(q[0])+','+Math.round(q[1]),E={};
  T.forEach(t=>{for(let k=0;k<t.p.length;k++){const a=t.p[k],b=t.p[(k+1)%t.p.length],ka=key(a),kb=key(b),e=ka<kb?ka+'|'+kb:kb+'|'+ka;(E[e]=E[e]||[]).push({i:t.i,a,b})}});
  for(const e in E){const l=E[e];if(l.length===2)ARETES.push({a:l[0].i,b:l[1].i,p1:l[0].a,p2:l[0].b})}
}
function distSeg(p,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],L=dx*dx+dy*dy;let t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/L;t=Math.max(0,Math.min(1,t));
  return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy)}
const pts=p=>p.map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' ');
const mix=(h,w,t)=>{const A=parseInt(h.slice(1),16),B=parseInt(w.slice(1),16),f=s=>Math.round(((A>>s)&255)*(1-t)+((B>>s)&255)*t);
  return'#'+((1<<24)|(f(16)<<16)|(f(8)<<8)|f(0)).toString(16).slice(1)};
const el=(n,a,par)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(par)par.appendChild(e);return e};

/* ---------- dessin du plateau ---------- */
const svg=document.getElementById('plateau');
let G={};
function dessiner(){
  const portrait=innerHeight>innerWidth;
  if(portrait!==S.portrait){S.portrait=portrait;preparer(portrait)}
  svg.innerHTML='';
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;T.forEach(t=>t.p.forEach(q=>{x0=Math.min(x0,q[0]);y0=Math.min(y0,q[1]);x1=Math.max(x1,q[0]);y1=Math.max(y1,q[1])}));
  const m=40;svg.setAttribute('viewBox',`${x0-m} ${y0-m} ${x1-x0+2*m} ${y1-y0+2*m}`);
  const defs=el('defs',{},svg);
  // verre libre : givré, un peu ambré par la lumière de derrière
  const gl=el('radialGradient',{id:'g-libre',cx:'.42',cy:'.38',r:'.75'},defs);
  el('stop',{offset:'0','stop-color':'#fff7e4','stop-opacity':'.38'},gl);el('stop',{offset:'.7','stop-color':'#d9c7a2','stop-opacity':'.5'},gl);el('stop',{offset:'1','stop-color':'#7d6646','stop-opacity':'.72'},gl);
  // chaque verre libre a sa teinte ancienne, tirée de son nom : la mosaïque ne paraît jamais uniforme
  T.forEach(t=>{let h=0;for(const ch of t.d.id)h=(h*31+ch.charCodeAt(0))>>>0;const ti=TEINTES[h%TEINTES.length];t.teinte=ti;
    const g=el('radialGradient',{id:'g-l-'+t.i,cx:(.3+(h%7)/20).toFixed(2),cy:(.28+(h%5)/20).toFixed(2),r:'.85'},defs);
    el('stop',{offset:'0','stop-color':mix(ti,'#ffffff',.55),'stop-opacity':'.42'},g);el('stop',{offset:'.6','stop-color':ti,'stop-opacity':'.62'},g);el('stop',{offset:'1','stop-color':mix(ti,'#2a1a0c',.55),'stop-opacity':'.88'},g)});
  for(const k in FAC){const c=FAC[k].col,g=el('radialGradient',{id:'g-'+k,cx:'.4',cy:'.36',r:'.8'},defs);
    el('stop',{offset:'0','stop-color':mix(c,'#ffffff',.55),'stop-opacity':'.92'},g);el('stop',{offset:'.55','stop-color':c,'stop-opacity':'.9'},g);el('stop',{offset:'1','stop-color':mix(c,'#000000',.45),'stop-opacity':'.95'},g)}
  const gb=el('linearGradient',{id:'g-balaye',x1:'0',y1:'0',x2:'1',y2:'0'},defs);
  el('stop',{offset:'0','stop-color':'#fff','stop-opacity':'0'},gb);el('stop',{offset:'.5','stop-color':'#fff8e0','stop-opacity':'.55'},gb);el('stop',{offset:'1','stop-color':'#fff','stop-opacity':'0'},gb);
  const cp=el('clipPath',{id:'cp-tout'},defs);T.forEach(t=>el('polygon',{points:pts(t.p)},cp));
  T.forEach(t=>{const c=el('clipPath',{id:'cp-'+t.i},defs);el('polygon',{points:pts(t.p)},c)});
  el('pattern',{id:'pat-grain',width:'256',height:'256',patternUnits:'userSpaceOnUse'},defs).appendChild(grain());

  G.verres=el('g',{},svg);G.flots=el('g',{},svg);
  G.grain=el('rect',{class:'grain',x:x0,y:y0,width:x1-x0,height:y1-y0,fill:'url(#pat-grain)','clip-path':'url(#cp-tout)'},svg);
  const gb2=el('g',{'clip-path':'url(#cp-tout)'},svg);
  el('rect',{class:'balayage',x:x0,y:y0-200,width:(x1-x0)*.45,height:y1-y0+400,fill:'url(#g-balaye)',transform:'skewX(-18)',opacity:'.5'},gb2);
  G.icones=el('g',{},svg);G.liens=el('g',{},svg);G.plomb=el('g',{},svg);G.curseur=el('g',{},svg);G.etin=el('g',{},svg);
  T.forEach(t=>{
    t.verre=el('polygon',{points:pts(t.p),class:'verre libre',fill:`url(#g-l-${t.i})`},G.verres);
    t.verre.addEventListener('pointerdown',ev=>{ev.preventDefault();toucher(t.i)});
    t.verre.addEventListener('pointerenter',ev=>{if(ev.pointerType==='mouse'&&!S.fini)viser(t.i,true)});
    const s=Math.min(46,t.r*.42);
    t.icone=el('path',{d:ICONE[t.d.mod]||ICONE.RES,class:'icone libre',transform:`translate(${t.c[0].toFixed(1)} ${t.c[1].toFixed(1)}) scale(${s.toFixed(1)})`},G.icones);
    el('polygon',{points:pts(t.p),class:'plomb'},G.plomb);
  });
  T.forEach(t=>el('polygon',{points:pts(t.p),class:'plomb-crete'},G.plomb));
  T.forEach(t=>el('polygon',{points:pts(t.p.map(q=>[t.c[0]+(q[0]-t.c[0])*.93,t.c[1]+(q[1]-t.c[1])*.93])),class:'reflet'},G.plomb));
  G.poussiere=el('g',{},svg);
  for(let k=0;k<18;k++){const x=x0+Math.random()*(x1-x0),y=y0+Math.random()*(y1-y0),r=3+Math.random()*6;
    const c=el('circle',{cx:x,cy:y,r,class:'poussiere'},G.poussiere);
    c.animate([{transform:'translate(0,0)',opacity:0},{opacity:.8,offset:.5},{transform:`translate(${(Math.random()-.5)*160}px,${-60-Math.random()*140}px)`,opacity:0}],
      {duration:6000+Math.random()*7000,delay:-Math.random()*9000,iterations:Infinity,easing:'ease-in-out'})}
  taille();majTout();
}
function grain(){ // texture de verre soufflé, faite une fois
  const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d'),im=x.createImageData(256,256);
  for(let i=0;i<im.data.length;i+=4){const n=128+(Math.random()-.5)*90;im.data[i]=im.data[i+1]=im.data[i+2]=n;im.data[i+3]=255}
  x.putImageData(im,0,0);x.globalAlpha=.18;for(let k=0;k<40;k++){x.strokeStyle=Math.random()<.5?'#fff':'#000';x.lineWidth=1+Math.random()*2;x.beginPath();
    const y=Math.random()*256;x.moveTo(0,y);x.bezierCurveTo(85,y+Math.random()*30-15,170,y+Math.random()*30-15,256,y+Math.random()*20-10);x.stroke()}
  const img=document.createElementNS(NS,'image');img.setAttribute('href',c.toDataURL());img.setAttribute('width','256');img.setAttribute('height','256');return img}
function taille(){ // le plateau occupe toute la scène disponible
  const sc=document.getElementById('scene').getBoundingClientRect(),vb=svg.viewBox.baseVal,pad=34;
  const k=Math.min((sc.width-pad)/vb.width,(sc.height-pad)/(vb.height*.97));
  svg.style.width=(vb.width*k)+'px';svg.style.height=(vb.height*k)+'px';
  document.documentElement.style.setProperty('--pente',S.portrait?'10deg':'16deg');
}

/* ---------- mise à jour de l'affichage ---------- */
function majTout(){T.forEach(t=>majTuile(t.i));majLiens();majCurseur();majBarre();majFiche()}
function majTuile(i){const t=T[i],o=S.own[i];
  if(o==null||o<0){t.verre.setAttribute('fill',`url(#g-l-${i})`);t.verre.setAttribute('class','verre libre');t.icone.setAttribute('class','icone libre')}
  else{t.verre.setAttribute('fill','url(#g-'+S.joueurs[o].k+')');t.verre.setAttribute('class','verre prise');t.icone.setAttribute('class','icone prise')}}
function majLiens(){G.liens.innerHTML='';
  for(const a of ARETES){const oa=S.own[a.a],ob=S.own[a.b];if(oa==null||ob==null||oa<0||ob<0)continue;
    const d=`M${a.p1[0]} ${a.p1[1]}L${a.p2[0]} ${a.p2[1]}`;
    if(oa===ob){const c=FAC[S.joueurs[oa].k].col;el('path',{d,class:'lien halo',stroke:c},G.liens);el('path',{d,class:'lien fil',stroke:mix(c,'#ffffff',.5)},G.liens)}
    else if(opposees(S.joueurs[oa].k,S.joueurs[ob].k))el('path',{d,class:'lien tension'},G.liens)}}
function majCurseur(){G.curseur.innerHTML='';if(S.sel<0)return;const t=T[S.sel],j=S.joueurs[S.tour];
  if(!S.fini&&j&&!j.ia&&S.own[S.sel]<0)el('polygon',{points:pts(t.p),class:'apercu',fill:FAC[j.k].col},G.curseur);
  el('polygon',{points:pts(t.p),class:'curseur halo'},G.curseur);el('polygon',{points:pts(t.p),class:'curseur'},G.curseur)}
function majBarre(){
  const tour=document.getElementById('tour'),sc=document.getElementById('scores');
  if(!S.joueurs.length){tour.innerHTML='';sc.innerHTML='';return}
  const j=S.joueurs[S.tour],libres=S.own.filter(o=>o<0).length;
  tour.innerHTML=S.fini?'<span>Partie finie</span>':`<span class="pastille" style="--c:${FAC[j.k].col}"></span><span>${j.ia?'<b>'+FAC[j.k].nom+'</b> <span class="pense">choisit…</span>':'<b>À vous</b> · '+libres+' libres'}</span>`;
  sc.innerHTML=S.joueurs.map((p,n)=>`<span class="score${n===S.tour&&!S.fini?' actif':''}" style="--c:${FAC[p.k].col}" title="${FAC[p.k].nom}"><i></i>${compte(n)}</span>`).join('')}
const compte=n=>S.own.filter(o=>o===n).length;
function majFiche(){
  const f=document.getElementById('fiche');
  const j=S.joueurs[S.tour],monTour=!S.fini&&j&&!j.ia;
  let h='';
  if(S.sel<0){h=`<div class="nom">Le lutrin</div><div class="quoi">Touchez une tuile libre pour la viser.</div><div class="etat">&nbsp;</div>`}
  else{const t=T[S.sel],d=t.d,o=S.own[S.sel];
    const vois=t.v.map(v=>S.own[v]),libres=vois.filter(o=>o<0).length,amies=j?vois.filter(o=>o===S.tour).length:0;
    const etat=o<0?`<i style="--c:#e9dcc0"></i>Libre · voisines : ${libres} libres${amies?', '+amies+' à vous':''}`:`<i style="--c:${FAC[S.joueurs[o].k].col}"></i>${o===0?'À vous':FAC[S.joueurs[o].k].nom}`;
    h=`<div class="nom">${d.nom}</div><div class="quoi">${TYPES[d.mod]||d.type} · ${d.biome}</div><div class="etat">${etat}</div>`}
  const peut=monTour&&S.sel>=0&&S.own[S.sel]<0;
  h+=`<div class="actions"><button class="btn principal" id="b-prendre" ${peut?'':'disabled'}><span class="tch">A</span>${monTour?'Prendre cette tuile':'Patientez…'}</button>
    <div class="ligne"><button class="btn petit" id="b-menu" aria-label="Nouvelle partie"><span class="tch">≡</span>↻</button>
    <button class="btn petit" id="b-son" aria-label="Son">${S.son?'♪':'♪̸'}</button></div></div>`;
  f.innerHTML=h;
  f.querySelector('#b-prendre').onclick=()=>prendreSel();
  f.querySelector('#b-menu').onclick=()=>menu();
  f.querySelector('#b-son').onclick=()=>{S.son=!S.son;try{localStorage.setItem('lutrin-son',S.son?'1':'0')}catch(e){}majFiche()};
}

/* ---------- jeu ---------- */
function viser(i,doux){if(i===S.sel)return;S.sel=i;majCurseur();majFiche();if(!doux)son('tic')}
function toucher(i){audio();if(S.fini)return;const j=S.joueurs[S.tour];
  if(i===S.sel&&j&&!j.ia&&S.own[i]<0){prendreSel();return}
  viser(i)}
function prendreSel(){const j=S.joueurs[S.tour];if(S.fini||!j||j.ia||S.sel<0||S.own[S.sel]>=0)return;prendre(S.sel,S.tour)}
function prendre(i,n){
  S.own[i]=n;const t=T[i],c=FAC[S.joueurs[n].k].col;
  // la couleur monte du centre de la tuile, comme une lumière qui s'allume
  const g=el('g',{'clip-path':`url(#cp-${i})`},G.flots);
  const fl=el('circle',{cx:t.c[0],cy:t.c[1],r:t.r*2.6,fill:mix(c,'#ffffff',.6),class:'flot'},g);
  fl.animate([{transform:'scale(.05)',opacity:1},{transform:'scale(1)',opacity:.85,offset:.55},{transform:'scale(1.05)',opacity:0}],{duration:900,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>g.remove();
  etincelles(t,c);
  setTimeout(()=>{majTuile(i);majLiens()},180);
  son('prise',n);if(!S.joueurs[n].ia&&navigator.vibrate)try{navigator.vibrate(18)}catch(e){}
  if(S.own.every(o=>o>=0)){S.fini=true;majBarre();majFiche();setTimeout(fin,1300);return}
  S.tour=(S.tour+1)%S.joueurs.length;majBarre();majFiche();
  if(S.joueurs[S.tour].ia)setTimeout(jouerIA,750+Math.random()*350)}
function etincelles(t,c){for(let k=0;k<22;k++){const a=Math.random()*Math.PI*2,d=t.r*(.6+Math.random()*1.4),s=4+Math.random()*7;
  const e=el('circle',{cx:t.c[0],cy:t.c[1],r:s,fill:k%3?mix(c,'#ffffff',.6):'#fff6d8',class:'etin'},G.etin);
  e.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(.2)`,opacity:0}],{duration:700+Math.random()*600,easing:'cubic-bezier(.15,.7,.3,1)'}).onfinish=()=>e.remove()}}
function jouerIA(){if(S.fini)return;const n=S.tour,k=S.joueurs[n].k,libres=T.filter(t=>S.own[t.i]<0);if(!libres.length)return;
  const mien=S.own.some(o=>o===n);let best=null,bs=-1e9;
  for(const t of libres){const vo=t.v.map(v=>S.own[v]);let s;
    if(mien){s=3*vo.filter(o=>o===n).length+.6*vo.filter(o=>o<0).length-1.5*vo.filter(o=>o>=0&&o!==n&&opposees(k,S.joueurs[o].k)).length}
    else{let dm=1e9;T.forEach(u=>{if(S.own[u.i]>=0)dm=Math.min(dm,Math.hypot(u.c[0]-t.c[0],u.c[1]-t.c[1]))});s=(dm===1e9?0:Math.min(dm,1400)/250)+.4*t.v.length}
    s+=Math.random()*1.2;if(s>bs){bs=s;best=t}}
  S.pense=true;prendre(best.i,n)}

/* ---------- menu et fin ---------- */
const voile=document.getElementById('voile');
function menu(){S.fini=true;voile.classList.remove('fin');
  voile.innerHTML=`<div class="carton"><h1>Le lutrin</h1><p>À tour de rôle, chaque faction prend une tuile libre. Quand tout est pris, la plus grande mosaïque gagne.</p>
  <h2>Votre faction</h2><div class="medaillons">${ROUE.map(k=>`<button class="medaillon${k===S.choixFac?' choisi':''}" data-f="${k}" style="--c:${FAC[k].col}"><div class="gemme"></div><b>${FAC[k].nom}</b><small>${FAC[k].dev}</small></button>`).join('')}</div>
  <h2>Factions rivales</h2><div class="rangee">${[1,2,3,4,5].map(n=>`<button class="btn${n===S.nbRivaux?' choisi':''}" data-n="${n}">${n}</button>`).join('')}</div>
  <button class="btn principal" id="b-go"><span class="tch">A</span>Commencer</button>
  <div class="aide">Touchez une tuile pour la viser, touchez-la encore pour la prendre. À la manette : stick pour viser, A pour prendre.</div></div>`;
  voile.classList.remove('cache');
  voile.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{audio();S.choixFac=b.dataset.f;voile.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('choisi',x===b));son('tic')});
  voile.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>{audio();S.nbRivaux=+b.dataset.n;voile.querySelectorAll('[data-n]').forEach(x=>x.classList.toggle('choisi',x===b));son('tic')});
  voile.querySelector('#b-go').onclick=()=>{audio();commencer()};
  focusMenu(voile.querySelector('#b-go'))}
function commencer(){
  const autres=ROUE.filter(k=>k!==S.choixFac);
  // les rivales : d'abord celles qui ne sont pas l'opposée, pour que les tensions restent rares
  autres.sort(()=>Math.random()-.5);
  const riv=autres.slice(0,S.nbRivaux);
  S.joueurs=[{k:S.choixFac,ia:false}].concat(riv.map(k=>({k,ia:true})));
  S.own=T.map(()=>-1);S.tour=0;S.fini=false;
  let best=0,bd=1e9;T.forEach(t=>{const d=Math.hypot(t.c[0],t.c[1]);if(d<bd){bd=d;best=t.i}});S.sel=best;
  voile.classList.add('cache');majTout()}
function fin(){
  const cl=S.joueurs.map((p,n)=>({p,n,c:compte(n),g:plusGrand(n)})).sort((a,b)=>b.g-a.g||b.c-a.c);
  const gagne=cl[0].n===0;
  voile.innerHTML=`<div class="carton"><h1>${gagne?'Victoire':'Partie finie'}</h1><p>${gagne?'Votre mosaïque est la plus grande.':FAC[cl[0].p.k].nom+(FAC[cl[0].p.k].nom.startsWith('Les ')?' tiennent':' tient')+' la plus grande mosaïque.'}</p>
  <ol class="classement">${cl.map(x=>`<li style="--c:${FAC[x.p.k].col}"><i></i><span>${x.n===0?'Vous · ':''}${FAC[x.p.k].nom}</span><small>${x.c} tuiles</small>&nbsp;<em>${x.g}</em></li>`).join('')}</ol>
  <div class="aide">Le grand chiffre : votre plus grand groupe de tuiles qui se touchent.</div>
  <button class="btn principal" id="b-encore"><span class="tch">A</span>Rejouer</button></div>`;
  voile.classList.add('fin');voile.classList.remove('cache');voile.querySelector('#b-encore').onclick=()=>{audio();menu()};
  focusMenu(voile.querySelector('#b-encore'));son('fin')}
function plusGrand(n){const vu=new Set();let best=0;
  T.forEach(t=>{if(S.own[t.i]!==n||vu.has(t.i))return;let c=0;const st=[t.i];vu.add(t.i);
    while(st.length){const i=st.pop();c++;for(const v of T[i].v)if(S.own[v]===n&&!vu.has(v)){vu.add(v);st.push(v)}}best=Math.max(best,c)});return best}

/* ---------- son : petit carillon de verre ---------- */
let AC=null;
function audio(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume()}
const GAMME=[0,2,4,7,9,12,14];
function note(f,t0,dur,vol,type){const o=AC.createOscillator(),g=AC.createGain();o.type=type||'sine';o.frequency.value=f;
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(vol,t0+.01);g.gain.exponentialRampToValueAtTime(.0001,t0+dur);o.connect(g).connect(AC.destination);o.start(t0);o.stop(t0+dur+.05)}
function son(q,n){if(!S.son||!AC)return;const t=AC.currentTime;
  if(q==='tic')note(1760,t,.08,.025,'triangle');
  else if(q==='prise'){const b=330*Math.pow(2,GAMME[(n||0)%GAMME.length]/12),v=S.joueurs[n]&&S.joueurs[n].ia?.05:.09;
    note(b*2,t,1.2,v);note(b*3,t+.06,1,v*.6);note(b*4.02,t+.12,.8,v*.35)}
  else if(q==='fin'){[0,4,7,12].forEach((s,k)=>note(392*Math.pow(2,s/12),t+k*.14,1.4,.07))}}

/* ---------- manette et clavier (en bonus) ---------- */
function bouger(dx,dy){if(S.fini){menuBouger(dx,dy);return}
  if(S.sel<0){viser(0);return}const c=T[S.sel].c;let best=-1,bs=1e9;
  T.forEach(t=>{if(t.i===S.sel)return;const vx=t.c[0]-c[0],vy=t.c[1]-c[1],d=Math.hypot(vx,vy),cos=(vx*dx+vy*dy)/d;
    if(cos<.45)return;const s=d*(2.2-cos*1.2);if(s<bs){bs=s;best=t.i}});
  if(best>=0)viser(best)}
let focus=null;
function focusMenu(b){if(focus)focus.classList.remove('focus');focus=b;if(b&&document.body.classList.contains('manette'))b.classList.add('focus')}
function menuBouger(dx,dy){if(voile.classList.contains('cache'))return;const L=[...voile.querySelectorAll('button')];if(!focus){focusMenu(L[0]);return}
  const a=focus.getBoundingClientRect(),ax=a.x+a.width/2,ay=a.y+a.height/2;let best=null,bs=1e9;
  L.forEach(b=>{if(b===focus)return;const r=b.getBoundingClientRect(),vx=r.x+r.width/2-ax,vy=r.y+r.height/2-ay,d=Math.hypot(vx,vy),cos=(vx*dx+vy*dy)/d;
    if(cos<.5)return;const s=d*(2-cos);if(s<bs){bs=s;best=b}});if(best){focusMenu(best);son('tic')}}
function valider(){audio();if(!voile.classList.contains('cache')){if(focus)focus.click();return}prendreSel()}
addEventListener('keydown',e=>{const k=e.key;
  if(k==='ArrowLeft')bouger(-1,0);else if(k==='ArrowRight')bouger(1,0);else if(k==='ArrowUp')bouger(0,-1);else if(k==='ArrowDown')bouger(0,1);
  else if(k==='Enter'||k===' ')valider();else if(k==='Escape')menu();else return;
  document.body.classList.add('manette');if(focus)focus.classList.add('focus');e.preventDefault()});
const prec={};let rep=0;
function manette(){const gp=[...(navigator.getGamepads?navigator.getGamepads():[])].find(g=>g);
  if(gp){const b=i=>gp.buttons[i]&&gp.buttons[i].pressed,ax=gp.axes[0]||0,ay=gp.axes[1]||0,now=performance.now();
    let dx=(b(15)?1:0)-(b(14)?1:0)||(Math.abs(ax)>.55?Math.sign(ax):0),dy=(b(13)?1:0)-(b(12)?1:0)||(Math.abs(ay)>.55?Math.sign(ay):0);
    if(dx||dy){if(now>rep){if(!document.body.classList.contains('manette')){document.body.classList.add('manette');if(focus)focus.classList.add('focus')}
      bouger(dx,dy);rep=now+(prec.dir?160:300);prec.dir=1}}else{prec.dir=0;rep=0}
    const appui=i=>{const p=b(i),r=p&&!prec[i];prec[i]=p;return r};
    if(appui(0)){document.body.classList.add('manette');valider()}
    if(appui(9)||appui(3))menu()}
  requestAnimationFrame(manette)}
addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||true){document.body.classList.remove('manette');if(focus)focus.classList.remove('focus')}},true);

/* ---------- départ ---------- */
try{S.son=localStorage.getItem('lutrin-son')!=='0'}catch(e){}
let att;addEventListener('resize',()=>{clearTimeout(att);att=setTimeout(()=>{const p=innerHeight>innerWidth;if(p!==S.portrait)dessiner();else taille()},120)});
dessiner();menu();requestAnimationFrame(manette);
window.LUTRIN={S,T,prendre,jouerIA,commencer};
})();
