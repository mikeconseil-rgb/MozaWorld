/* MozaWorld 2.9 : inscriptions des zones (19 novembre, demande de l'utilisateur : « des ajouts de texte et d'inscription
   pour enrichir chaque zone non ressource »). Les Ressources restent sobres (design simple, background léger).
   Chaque Antre, Assemblée, Donjon et Citadelle reçoit quatre objets écrits : stèle, panneau, mur ou borne.
   Leur texte est écrit par le conteur de la zone (A, B, C ou D) et change avec le niveau, en cinq bandes :
   −7..−5, −4..−2, −1..+1, +2..+4, +5..+7. L'objet lui-même suit le pôle (vers −7 il s'enfonce, se penche et se ternit ;
   vers +7 il se dresse et prend la lumière du pôle). On lit en passant à côté : un cartouche s'ouvre en bas de l'écran,
   sans bouton à presser et sans arrêter le jeu. Une rune bleue flotte au-dessus d'un texte pas encore lu à ce niveau.
   2.11 (19 nov., « des livres laissés dans les zones, racontant l'histoire de la zone ») : chaque zone non Ressource a aussi
   un livre ouvert sur un lutrin ; A devant le lutrin l'ouvre ; 4 pages d'histoire, puis une dernière page qui change avec le niveau.
   Les textes sont dans inscriptions-donnees.js (généré depuis design/inscriptions/*.json). Ce fichier est chargé
   après main.js : le monde est déjà bâti, S (la sauvegarde) existe. */
(function(){
if(typeof INSCRIPTIONS==='undefined')return;
const LIVRES_=typeof LIVRES!=='undefined'?LIVRES:{};
const BANDES=['m5','m2','z','p2','p5'],bande=lv=>lv<=-5?'m5':lv<=-2?'m2':lv<=1?'z':lv<=4?'p2':'p5';
const MANA0={CIT:'Glace',DON:'Feu',ANT:'Eau',MAR:'Glace'};
const NOMS={stele:'Stèle',panneau:'Panneau',mur:'Mur gravé',borne:'Borne',livre:'Livre'};
const GEO={
  stele:merge([[box(2.4,.5,1.1,0,.25,0),0x6a6458],[box(1.7,3.4,.45,0,2.2,0),0x9a9282],[box(1.9,.3,.6,0,4,0),0x7a7266]]),
  panneau:merge([[cyl(.13,.15,3.4,6,-1.2,1.7,0),0x4a3422],[cyl(.13,.15,3.4,6,1.2,1.7,0),0x4a3422],[box(3,1.5,.14,0,2.35,.12),0x8a6a46],[box(3.2,.16,.3,0,3.15,.12),0x5a4030]]),
  mur:merge([[box(6,3,.9,0,1.5,0),0x7a7062],[box(6.4,.35,1.2,0,3.15,0),0x5e564c],[box(1.2,1.8,1.1,-3.4,.9,0,.3),0x6a6256],[box(2.6,1.3,.06,0,1.8,.47),0xb8ab8c]]),
  /* 2.11 : le livre de la zone, ouvert sur un lutrin, ses pages luisent faiblement */
  livre:merge([[box(1.6,.3,1.6,0,.15,0),0x5a4a3a],[cyl(.16,.22,2.2,6,0,1.3,0),0x4a3424],[box(1.7,.12,1.2,0,2.45,0,0,-.35),0x3a2618],
    [box(.75,.1,1,-.4,2.56,0,0,-.35,.12),0xf2e6c4],[box(.75,.1,1,.4,2.56,0,0,-.35,-.12),0xf2e6c4],[box(.05,.04,1.05,0,2.62,0,0,-.35),0x7a1e1e]]),
  borne:merge([[cyl(.55,.7,2,7,0,1,0),0x8a8478],[cyl(.7,.55,.35,7,0,2.15,0),0x6a6458],[box(.9,.7,.08,0,1.3,.6),0xb0a890]])};
const vc=M(0xffffff,{vertexColors:true}),bl=[1,1,1];
const rune=new THREE.TorusGeometry(.55,.09,4,8),runeMat=new THREE.MeshBasicMaterial({color:new THREE.Color(1.1,1.9,2.6)});
const LISTE=[],parSorte={},K=1.8; /* taille : assez grands pour se voir de loin dans les zones agrandies */

/* ---------- placement : loin de la Pierre, des lieux et des autres inscriptions, sur le sol nu ---------- */
function libre(Z,x,z){if(Z.alt&&Math.hypot(Z.alt.x-x,Z.alt.z-z)<22)return false;
  for(const L of (typeof LIEUX!=='undefined'?LIEUX:[]))if(Math.hypot(L.x-x,L.z-z)<18)return false;
  for(const I of LISTE)if(Math.hypot(I.x-x,I.z-z)<20)return false;
  const s=stand(x,z,1e3);return !s.on&&Math.abs(s.g-groundZ(Z,x,z,Z.lv))<.6}
for(const Z of ZN){const T=(INSCRIPTIONS[Z.id]||[]).slice();if(LIVRES_[Z.id])T.push(Object.assign({support:'livre'},LIVRES_[Z.id]));if(!T.length)continue;
  const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])})),mana=Z.d?Z.d.mana:MANA0[Z.id]||'Pierre';
  const [neg,pos]=PMANA[mana]||PMANA.Pierre;
  T.forEach((d,i)=>{let ok=null;
    for(let essai=0;essai<60&&!ok;essai++){const a=i*TAU/T.length+Z.i*.9+.8+essai*.37,r=R*(.32+.42*((essai*.618+i*.25)%1));
      const u=Math.cos(a)*r,v=Math.sin(a)*r;if(!Z.inside(u,v,20))continue;const p=Z.w(u,v);if(libre(Z,p[0],p[1]))ok=p}
    if(!ok)return;
    const sorte=GEO[d.support]?d.support:'stele',ry=rnd()*TAU;
    LISTE.push({Z,i,d,sorte,x:ok[0],z:ok[1],ry,cN:LIN(neg),cP:LIN(pos),lv:null})})}
for(const I of LISTE)(parSorte[I.sorte]=parSorte[I.sorte]||[]).push(I);
const MESH={};
for(const k in parSorte){const it=inst(GEO[k],vc,true);for(const I of parSorte[k]){I.k=it.add(I.x,0,I.z,K,K,K,I.ry)}it.make();MESH[k]=it}
const RUNES=new THREE.InstancedMesh(rune,runeMat,Math.max(1,LISTE.length));RUNES.frustumCulled=false;scene.add(RUNES);

/* ---------- l'objet suit le niveau de sa zone ---------- */
const cle=I=>I.Z.id+'#'+I.i+'#'+bande(I.Z.lv);
function majObjets(){const touche={};
  for(const I of LISTE){if(I.lv===I.Z.lv)continue;I.lv=I.Z.lv;touche[I.sorte]=1;
    const o=MESH[I.sorte].a[I.k],an=wneg(I.lv),ap=wpos(I.lv);
    o.y=groundZ(I.Z,I.x,I.z,I.lv)-.15;o.dy=-an*.9;o.rz=an*.16;o.rx=an*.08;o.an=an;o.ap=ap;o.cN=I.cN;o.cP=I.cP}
  for(const k in touche)MESH[k].set(o=>[1+o.ap*.12,1+o.ap*.22-o.an*.12,1+o.ap*.12],(o,i,c)=>{mix3(c,bl,o.cN,o.an*.7);if(o.ap>0)mix3(c,c,o.cP,o.ap*.4)})}
const S_LUS=()=>(S.lus=S.lus||{});
function majRunes(T){const lus=S_LUS();
  LISTE.forEach((I,n)=>{const vu=!!lus[cle(I)],o=MESH[I.sorte].a[I.k],h=(I.sorte==='mur'?4.6:I.sorte==='borne'||I.sorte==='livre'?3.6:5.2)*K;
    const r=vu?.0001:1.4;put(RUNES,n,I.x,o.y+(o.dy||0)+h+Math.sin(T*1.7+n)*.3,I.z,r,r,r,T*1.1+n,0,0)});
  RUNES.instanceMatrix.needsUpdate=true}

/* ---------- le cartouche de lecture ---------- */
const st=document.createElement('style');st.textContent=`
.mz-inscr{position:fixed;left:50%;bottom:calc(var(--u)*7.5);translate:-50% calc(var(--u)*1.2);width:min(calc(var(--u)*54),86vw);z-index:30;pointer-events:none;
  opacity:0;transition:opacity .5s ease,translate .5s ease;padding:calc(var(--u)*1.1) calc(var(--u)*1.8) calc(var(--u)*1.3);
  background:linear-gradient(180deg,rgba(14,12,10,.88),rgba(10,9,8,.94));border:1px solid rgba(232,199,127,.35);border-radius:calc(var(--u)*.35);
  box-shadow:0 calc(var(--u)*.6) calc(var(--u)*3) rgba(0,0,0,.6),inset 0 0 0 calc(var(--u)*.25) rgba(0,0,0,.4);text-align:center}
.mz-inscr.vu{opacity:1;translate:-50% 0}
.mz-inscr .i1{font-size:calc(var(--u)*1.05);letter-spacing:.24em;text-transform:uppercase;color:var(--laiton2,#e8c77f);font-weight:600}
.mz-inscr .i2{font-family:var(--titre);font-size:calc(var(--u)*2.1);font-weight:600;margin:.1em 0 .25em;color:var(--ivoire,#f2ead8)}
.mz-inscr .i3{font-family:var(--titre);font-size:calc(var(--u)*1.55);line-height:1.42;color:#e6dcc6}
.mz-inscr .i4{margin-top:.5em;font-size:calc(var(--u)*.95);color:rgba(232,199,127,.7);font-style:italic}
body.jeu-ouvert .mz-inscr{display:none}
body.mz-lit .hud.invite{opacity:0}`;document.head.appendChild(st);
const el=document.createElement('div');el.className='mz-inscr';el.innerHTML='<div class="i1"></div><div class="i2"></div><div class="i3"></div><div class="i4"></div>';document.body.appendChild(el);
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[c]);
let ouvert=null,ouvertCle='';
function montrer(I){const k=cle(I);if(ouvert===I&&ouvertCle===k)return;ouvert=I;ouvertCle=k;
  document.body.classList.add('mz-lit');const nom=I.Z.info?I.Z.info.nom:(I.Z.d?I.Z.d.nom:I.Z.id),b=bande(I.Z.lv),lus=S_LUS(),neuf=!lus[k];
  el.querySelector('.i1').textContent=NOMS[I.sorte]+' · '+nom;el.querySelector('.i2').textContent=I.d.titre;
  if(I.sorte==='livre'){el.querySelector('.i3').innerHTML=esc(I.d.auteur||'');el.querySelector('.i4').innerHTML='<b style="font-style:normal;color:var(--laiton2,#e8c77f)">A</b> lire le livre';el.classList.add('vu');return}
  el.querySelector('.i3').innerHTML=esc(I.d.textes[b]||I.d.textes.z||'');
  const autres=BANDES.filter(x=>x!==b&&lus[I.Z.id+'#'+I.i+'#'+x]).length;
  el.querySelector('.i4').textContent=neuf&&autres?'Le texte a changé depuis votre dernier passage.':'';
  el.classList.add('vu');if(neuf){lus[k]=1;if(typeof save==='function')save()}}
function cacher(){if(!ouvert)return;ouvert=null;ouvertCle='';el.classList.remove('vu');document.body.classList.remove('mz-lit')}
let T0=performance.now();
function tic(){const T=(performance.now()-T0)/1000;majObjets();majRunes(T);
  if(!started||mode!=='monde'){cacher();return}
  let best=null,dmin=11;for(const I of LISTE){const d=Math.hypot(I.x-P.x,I.z-P.z);if(d<dmin){dmin=d;best=I}}
  if(best)montrer(best);else cacher()}
/* ---------- lire le livre : A devant le lutrin ouvre le livre, page par page ---------- */
const proche=()=>ouvert&&ouvert.sorte==='livre'&&mode==='monde'?ouvert:null;
function lire(I,n){const L=I.d,b=bande(I.Z.lv),N=L.pages.length+1,nom=I.Z.info?I.Z.info.nom:I.Z.id;
  if(!mode||mode==='monde'){mode='menu';document.body.classList.add('jeu-ouvert');cacher()}
  const fin=n===N-1,pg=fin?{t:'La dernière page',txt:L.fin[b]||L.fin.z}:L.pages[n];
  const k=cle(I),lus=S_LUS();if(fin&&!lus[k]){lus[k]=1;if(typeof save==='function')save()}
  const fermer=()=>{toMonde()};
  ui('menu',{sur:'Livre · '+nom,t:L.titre,f:0,back:fermer,
    corps:`<div class="mz-livre"><div class="lv-ch">${esc(pg.t)}</div><p class="lv-txt">${esc(pg.txt)}</p>`+
      (fin?'<p class="lv-note">Écrite d\'une autre plume, à l\'encre récente : elle change avec la zone.</p>':'')+
      `<p class="lv-pg">Page ${n+1} sur ${N}</p></div>`,
    opts:[...(fin?[]:[{l:'Page suivante',ic:'▶',go:()=>lire(I,n+1)}]),{l:'Page précédente',ic:'◀',off:n===0,go:()=>lire(I,Math.max(0,n-1))},{l:'Refermer le livre',ic:'✕',go:fermer}]})}
const st2=document.createElement('style');st2.textContent=`
.mz-livre{max-width:46em;margin:0 auto calc(var(--u)*1);text-align:left}
.mz-livre .lv-ch{font-family:var(--titre);font-style:italic;font-size:calc(var(--u)*1.7);color:var(--laiton2,#e8c77f);text-align:center;margin-bottom:.4em}
.mz-livre .lv-txt{font-family:var(--titre);font-size:calc(var(--u)*1.6);line-height:1.5;text-align:left!important}
.mz-livre .lv-note{font-size:calc(var(--u)*1);font-style:italic;opacity:.7}
.mz-livre .lv-pg{font-size:calc(var(--u)*.95);opacity:.6;letter-spacing:.15em;text-transform:uppercase}`;document.head.appendChild(st2);
majObjets();setInterval(tic,120);
window.MZinscr={LISTE,bande,montrer,cle,proche,lire};
})();
