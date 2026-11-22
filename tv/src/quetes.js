/* MozaWorld 2.40 : PNJ et quêtes dans la zone (22 nov. 2026, zone pilote : la Taïga de Kobor).
   Demande de l'utilisateur : « Des PNJ et un système de quête à l'intérieur de la zone. Ce sera le résultat des quêtes
   qui déterminera l'évolution de la zone. Il faut des quêtes adultes avec des choix cornéliens. »
   Précision du 22 nov. (8 h 57) : « L'épreuve devrait être un combat de cartes ou un choix de dialogue. Il faut un arbre
   complexe de 3 à 8 étapes qui amène, à la fin, aux deux choix d'évolution de la zone. »
   Principe : la zone a une quête par palier (QUETES[id].quetes['-7'..'7']). Une quête est un ARBRE de nœuds :
   parler à un PNJ (A devant lui) ou aller à un lieu, avec 1 à 3 réponses qui mènent à des nœuds différents ; un nœud
   peut être un combat de cartes. Toutes les branches mènent au nœud final, qui pose les deux choix (un vers chaque pôle).
   Choisir donne la parole du héros (prix payé tout de suite) ; si le choix demande un combat, il faut le gagner,
   sinon (dialogue) la zone bouge tout de suite. Les PNJ présents dépendent du palier (« absents » de la quête) ;
   le passé du joueur se lit par des traces (S.memoire), gardées même après la mort. La Pierre d'éveil ne propose plus
   « Palier +1 / −1 » dans ces zones : elle rappelle la quête en cours.
   Données : quetes-donnees.js (QUETES). Ce fichier est chargé après main.js et inscriptions.js. */
(function(){
if(typeof QUETES==='undefined')return;
const BANDE=lv=>lv<=-5?'m5':lv<=-2?'m2':lv<=1?'z':lv<=4?'p2':'p5';
const esc=s=>String(s==null?'':s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[c]);
const ST=()=>(S.quete=S.quete||{});
const Q=Z=>QUETES[Z.id]||null;
const lvDe=Z=>S.lv[Z.id]||0;

/* ---------- état : la quête du palier où se trouve la zone, et l'étape atteinte ---------- */
function queteDe(Z){const D=Q(Z);if(!D)return null;return D.quetes[String(lvDe(Z))]||null}
function etat(Z){const st=ST(),lv=lvDe(Z),q=queteDe(Z);let e=st[Z.id];if(!e||e.lv!==lv||(q&&!q.noeuds[e.n])){e=st[Z.id]={lv,n:q?q.debut:''}}return e}
function etape(Z){const q=queteDe(Z);if(!q)return null;return q.noeuds[etat(Z).n]||null}
const present=id=>{if(!ZQ)return true;const q=queteDe(ZQ);return !(q&&q.absents&&q.absents.indexOf(id)>=0)};
const traceA=t=>!!(S.memoire&&S.memoire[t]);
function avecTraces(o){let t=o.txt||'';if(o.txtTrace)for(const k of Object.keys(o.txtTrace))if(traceA(k))t+='\n\n'+o.txtTrace[k];
return t}
const para=t=>String(t).split(/\n\n+/).map(x=>`<p>${esc(x)}</p>`).join('');
function aller(Z,va,trace){const e=etat(Z);if(trace&&typeof poserTrace==='function')poserTrace(Z,trace);if(va)e.n=va;save()}
const pnjEtape=et=>et&&et.qui||null;
function nomPnj(Z,id){const p=Q(Z).pnj[id];return p?p.nom:id}
function consigne(Z,et){if(!et)return'';const p=pnjEtape(et);
  if(et.lieu)return'Aller '+(Q(Z).lieux&&Q(Z).lieux[et.lieu]||'au lieu indiqué');
  if(et.final)return'Trancher : parler à '+nomPnj(Z,p);
  if(et.combat)return'Combattre : parler à '+nomPnj(Z,p);
  return'Parler à '+nomPnj(Z,p)}

/* ---------- les PNJ dans le monde ---------- */
const FIG=[];let ZQ=null;
const peau=0xd8b48a;
function figure(look){const g=new THREE.Group(),add=(geo,col,x,y,z)=>{const m=new THREE.Mesh(geo,M(col));m.position.set(x||0,y||0,z||0);m.castShadow=true;g.add(m);return m};
  const robe=look.robe||0x5a4a3a,coif=look.coiffe||'chapka',hc=look.coiffeC||0x3a2a1e;
  add(new THREE.CylinderGeometry(.32,.62,1.5,8),robe,0,.75,0);                       /* manteau long */
  add(new THREE.CylinderGeometry(.36,.36,.12,8),look.ceinture||0x2a1d16,0,1.1,0);
  add(new THREE.CylinderGeometry(.16,.3,.55,8),robe,0,1.72,0);                        /* buste */
  add(new THREE.SphereGeometry(.22,12,9),peau,0,2.16,0);                               /* tête */
  if(look.barbe)add(new THREE.ConeGeometry(.15,.32,8),look.barbe===true?0x7a6a5a:look.barbe,0,1.98,.12).rotation.x=Math.PI;
  if(coif==='chapka'){add(new THREE.CylinderGeometry(.26,.24,.24,10),hc,0,2.38,0)}
  else if(coif==='voile'){const v=add(new THREE.ConeGeometry(.34,.7,10,1,true),hc,0,2.12,-.02);v.material.side=THREE.DoubleSide}
  else if(coif==='mitre'){add(new THREE.CylinderGeometry(.2,.24,.36,8),hc,0,2.44,0);add(new THREE.SphereGeometry(.09,6,5),0xc9a45c,0,2.66,0)}
  else if(coif==='bonnet'){add(new THREE.ConeGeometry(.24,.42,8),hc,0,2.5,0)}
  for(const s of[-1,1]){const b=add(new THREE.CylinderGeometry(.09,.1,.8,6),robe,s*.36,1.55,.05);b.rotation.z=s*.25}
  if(look.objet==='baton')add(new THREE.CylinderGeometry(.04,.04,2.4,5),0x4a3422,.55,1.2,.15);
  if(look.objet==='registre')add(new THREE.BoxGeometry(.4,.5,.1),0x6a1e1e,.3,1.45,.32);
  if(look.objet==='fusil'){const f=add(new THREE.CylinderGeometry(.035,.035,1.8,5),0x2a2420,-.4,1.6,-.25);f.rotation.z=.3}
  if(look.objet==='lanterne')add(new THREE.SphereGeometry(.13,8,6),0xffd27a,.5,1.2,.25).material=new THREE.MeshBasicMaterial({color:new THREE.Color(2.2,1.6,.7)});
  return g}
const marqGeo=new THREE.OctahedronGeometry(.32),marqMat=new THREE.MeshBasicMaterial({color:new THREE.Color(2.6,1.9,.6)}),
  marqMat2=new THREE.MeshBasicMaterial({color:new THREE.Color(1.1,1.9,2.6)});
function placer(Z,D){const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));
  const lieux=(typeof LIEUX!=='undefined'?LIEUX:[]).filter(L=>L.Z===Z),parK={};for(const L of lieux)parK[L.k]=L;
  const pris=[];const libre=(x,z)=>{if(pris.some(q=>Math.hypot(q[0]-x,q[1]-z)<9))return false;const s=stand(x,z,1e3);return !s.on&&Math.abs(s.g-groundZ(Z,x,z,Z.lv))<.8};
  Object.keys(D.pnj).forEach((id,i)=>{const p=D.pnj[id];let base=null,rr=14;
    if(p.ou==='pierre'){base=[Z.alt.x,Z.alt.z];rr=16}else if(parK[p.ou]){base=[parK[p.ou].x,parK[p.ou].z];rr=11}
    let pos=null;
    for(let k=0;k<80&&!pos;k++){let x,z;
      if(base){const a=i*2.1+k*.7;x=base[0]+Math.cos(a)*(rr+k*.3);z=base[1]+Math.sin(a)*(rr+k*.3)}
      else{const a=i*TAU/7+Z.i*.6+k*.41,r=R*(.25+.4*((k*.618+i*.3)%1)),q=Z.w(Math.cos(a)*r,Math.sin(a)*r);x=q[0];z=q[1]}
      const u=Z.loc(x,z);if(!Z.inside(u[0],u[1],14))continue;if(libre(x,z))pos=[x,z]}
    if(!pos)pos=[Z.alt.x+10+i*3,Z.alt.z+10];pris.push(pos);
    const g=figure(p.look||{});g.scale.setScalar(1.35);g.rotation.y=Math.atan2(Z.alt.x-pos[0],Z.alt.z-pos[1]);scene.add(g);
    const mq=new THREE.Mesh(marqGeo,marqMat);mq.visible=false;scene.add(mq);
    FIG.push({id,Z,x:pos[0],z:pos[1],g,mq})})}
function cibleLieu(Z,k){if(k==='pierre')return{x:Z.alt.x,z:Z.alt.z};const L=(typeof LIEUX!=='undefined'?LIEUX:[]).find(L=>L.Z===Z&&L.k===k);return L||null}

/* ---------- dialogues ---------- */
function ouvrir(){if(!mode||mode==='monde'){mode='menu';document.body.classList.add('jeu-ouvert')}}
function parler(f){const Z=f.Z,D=Q(Z),p=D.pnj[f.id],lv=lvDe(Z);ouvrir();
  const sur=`${p.role} · ${Z.info.nom}`;
  if(!S.act[Z.id]){ui('menu',{sur,t:p.nom,corps:para(p.dit[BANDE(lv)]||p.dit.z)+`<p class="petit">${esc(D.avant||'Prenez d\'abord la Pierre d\'éveil de la zone : on ne confie rien à un inconnu.')}</p>`,back:toMonde,opts:[{l:'Partir',ic:'◆',go:toMonde}]});return}
  const q=queteDe(Z),et=etape(Z),pa=typeof paroleEnCours==='function'?paroleEnCours(Z):null;
  const moi=et&&pnjEtape(et)===f.id&&!et.lieu;
  if(pa&&moi&&et.final){ /* parole donnée, combat perdu : on le retente sans rechoisir */
    ui('menu',{sur,t:p.nom,corps:`<p>Vous avez donné votre parole : « ${esc(pa.l)} ». Il reste à la tenir.</p>`,back:toMonde,
      opts:[{l:'Tenir parole',ic:'▲',cls:pa.vers>lv?'p':'m',go:()=>lancerFin(Z,pa)},{l:'Plus tard',ic:'◆',go:toMonde}]});return}
  if(!moi){ /* réplique d'ambiance, et rappel de la quête */
    const rappel=q?`<p class="petit" style="color:var(--laiton2)">Quête · ${esc(q.t)} — ${esc(consigne(Z,et))}</p>`:'';
    ui('menu',{sur,t:p.nom,corps:para(p.dit[BANDE(lv)]||p.dit.z)+rappel,back:toMonde,opts:[{l:'Partir',ic:'◆',go:toMonde}]});return}
  noeud(Z,et,sur,p.nom)}
/* un nœud de l'arbre : texte, puis réponses, combat ou choix final */
function noeud(Z,et,sur,titre){const q=queteDe(Z),lv=lvDe(Z),tete=`<p class="petit" style="color:var(--laiton2)">Quête · ${esc(q.t)}</p>`;ouvrir();
  if(et.final){const r0=restLeft(Z);
    ui('menu',{sur,t:titre,corps:tete+para(avecTraces(et)),back:toMonde,
      opts:[...et.fin.map(r=>({l:r.l,ic:r.vers>lv?'▲':'▼',cls:r.vers>lv?'p':'m',off:r0>0,
        d:r0>0?'la zone se repose encore '+fmt(r0):`palier ${sgn(r.vers)||'0'}${r.epreuve==='combat'?' · combat':''} · prix : ${r.cache?'?':r.prix}`,go:()=>choisir(Z,et,r)})),
        {l:'Réfléchir encore',ic:'◆',d:'rien n\'est décidé',go:toMonde}]});return}
  if(et.combat){ui('menu',{sur,t:titre,corps:tete+para(avecTraces(et))+`<p class="petit">${esc(et.combat)}</p>`,back:toMonde,
      opts:[{l:'Combattre',ic:'⚔',cls:'p',go:()=>{QC={Z,n:etat(Z).n};startCombat(Z,'quete')}},{l:'Plus tard',ic:'◆',go:toMonde}]});return}
  const reps=(et.rep&&et.rep.length?et.rep:[{l:'Continuer'}]);
  ui('menu',{sur,t:titre,corps:tete+para(avecTraces(et)),back:toMonde,
    opts:reps.map(r=>({l:r.l,ic:'▶',go:()=>{aller(Z,r.va,r.trace);suite(Z)}}))})}
/* après une étape : dire où aller ensuite */
function suite(Z){const et=etape(Z);toMonde();if(et)toast('Quête · '+queteDe(Z).t,consigne(Z,et),'')}
const nomLieu=(Z,k)=>(Q(Z).lieux&&Q(Z).lieux[k]||'').replace(/^(au|à la|à l'|aux|devant la|devant le) /,'');
function lieuAtteint(Z,et){const t=nomLieu(Z,et.lieu)||Z.info.nom;noeud(Z,et,'Lieu · '+Z.info.nom,t.charAt(0).toUpperCase()+t.slice(1))}
/* combat d'étape */
let QC=null;
window.finQuete=function(C){const Z=C.Z,t=ZMANA[Z.id];gagner(t,1);S.hurt=Math.max(0,S.hurt);
  if(QC&&QC.Z===Z){const et=etape(Z),e=etat(Z);if(e.n===QC.n&&et){aller(Z,et.gagne,et.trace);QC=null;ouvrir();
      ui('menu',{sur:'Victoire · '+queteDe(Z).t,t:Z.info.nom,corps:para(et.apres||'')+`<p class="petit">+1 ${t}</p>`,back:()=>suite(Z),opts:[{l:'Continuer',ic:'▶',go:()=>suite(Z)}]});return}}
  QC=null;save();suite(Z)};

/* ---------- le choix : parole donnée, puis l'épreuve ou le combat qui tranche ---------- */
function choisir(Z,et,r){S.parole=S.parole||{};
  const pa=S.parole[Z.id]={de:lvDe(Z),vers:r.vers,l:r.l,fin:r.epreuve==='combat'?'combat':'dialogue',combat:r.combat||'',suite:{trace:r.trace||null,apres:r.resultat||''}};
  const fait=typeof payerPrix==='function'?payerPrix(r.cout):[];
  save();etatHud();if(fait.length)toast('Parole donnée',r.l,fait.join(' · '));
  if(pa.fin!=='combat'){lancerFin(Z,pa);return}
  ouvrir();ui('menu',{sur:'Parole donnée',t:r.l,corps:`<p>${esc(r.combat||'Il faut se battre.')}</p><p class="petit">Gagnez ce combat de cartes : ${esc(Z.info.nom)} passera au palier ${sgn(r.vers)||'0'}.</p>`,
    back:toMonde,opts:[{l:'Combattre',ic:'⚔',cls:r.vers>lvDe(Z)?'p':'m',go:()=>lancerFin(Z,pa)},{l:'Plus tard',ic:'◆',d:'la parole reste donnée',go:toMonde}]})}
/* la fin : un combat de cartes à gagner, ou le dialogue suffit (la zone bouge tout de suite) */
function lancerFin(Z,pa){if(pa.fin==='combat'){QF={Z,vers:pa.vers};startCombat(Z,'queteFin')}else{closeUI();palierReussi(Z,pa.vers)}}
let QF=null;
window.finQueteFin=function(C){const Z=C.Z,v=QF&&QF.Z===Z?QF.vers:null;QF=null;if(v==null){toMonde();return}
  if(typeof palierReussi==='function')palierReussi(Z,v)};
/* la parole est tenue (épreuve ou combat réussi) : ses suites s'appliquent */
const tenir0=typeof tenirParole==='function'?tenirParole:null;
window.suitesParole=function(Z){const pa=S.parole&&S.parole[Z.id];if(!pa||!pa.suite)return;const s=pa.suite;
  if(s.trace&&typeof poserTrace==='function')poserTrace(Z,s.trace);
  if(s.apres)S.queteApres=S.queteApres||{},S.queteApres[Z.id]=s.apres};

/* ---------- la Pierre d'éveil : elle rappelle la quête au lieu de proposer les paliers ---------- */
window.optionsQuete=function(Z,diff,off){const pa=typeof paroleEnCours==='function'?paroleEnCours(Z):null,lv=lvDe(Z);
  if(pa)return[{l:'Tenir parole : '+pa.l,ic:'▲',cls:pa.vers>lv?'p':'m',d:'combat · palier '+(sgn(pa.vers)||'0')+' · on ne revient pas sur une parole',go:()=>lancerFin(Z,pa)}];
  const q=queteDe(Z),et=etape(Z);if(!q)return[{l:'Aucune quête à ce palier',ic:'◆',off:true,d:'la zone attend'}];
  return[{l:'Quête : '+q.t,ic:'✎',off:true,d:consigne(Z,et)}]};
window.corpsQuete=function(Z){const q=queteDe(Z),D=Q(Z),pa=typeof paroleEnCours==='function'?paroleEnCours(Z):null;
  const ap=S.queteApres&&S.queteApres[Z.id]?`<p><i>${esc(S.queteApres[Z.id])}</i></p>`:'';
  return ap+(q?`<p class="petit" style="color:var(--laiton2)">Quête · ${esc(q.t)}</p><p>${esc(q.resume)}</p>`:'')+
    `<p class="petit">${esc(D.regle||'Ici, ce sont vos quêtes qui font bouger la zone : parlez aux habitants (A devant eux). Chaque quête finit par un choix entre les deux pôles ; il fait monter ou descendre la zone d\'un palier (parfois après un combat).')}</p>`+
    (pa?`<p class="petit">Vous avez donné votre parole : « ${esc(pa.l)} ». Il reste à réussir l'épreuve.</p>`:'')};
window.queteZone=Z=>!!Q(Z);

/* ---------- boucle : proximité, marqueurs, lieux, cartouche ---------- */
const st=document.createElement('style');st.textContent=`
.mz-pnj{position:fixed;left:50%;bottom:calc(var(--u)*7.5);translate:-50% calc(var(--u)*1.2);z-index:31;pointer-events:none;opacity:0;transition:opacity .4s,translate .4s;
  padding:calc(var(--u)*.8) calc(var(--u)*1.8);background:rgba(10,9,8,.92);border:1px solid rgba(232,199,127,.4);border-radius:calc(var(--u)*.35);text-align:center}
.mz-pnj.vu{opacity:1;translate:-50% 0}
.mz-pnj .n{font-family:var(--titre);font-size:calc(var(--u)*2);color:var(--ivoire,#f2ead8)}
.mz-pnj .r{font-size:calc(var(--u)*1);letter-spacing:.2em;text-transform:uppercase;color:var(--laiton2,#e8c77f)}
.mz-pnj .a{font-size:calc(var(--u)*1.1);margin-top:.3em;color:#e6dcc6}
body.jeu-ouvert .mz-pnj{display:none}`;document.head.appendChild(st);
const el=document.createElement('div');el.className='mz-pnj';el.innerHTML='<div class="r"></div><div class="n"></div><div class="a"></div>';document.body.appendChild(el);
let proche=null,lieuVu='';
function cibleEtape(Z){const et=etape(Z);if(!et||!S.act[Z.id])return null;
  if(et.lieu){const L=cibleLieu(Z,et.lieu);return L?{x:L.x,z:L.z,lieu:true,et}:null}
  const id=pnjEtape(et),f=FIG.find(f=>f.id===id);return f?{x:f.x,z:f.z,f}:null}
const T0=performance.now();
function tic(){const T=(performance.now()-T0)/1000;
  for(const f of FIG){const on=present(f.id);f.g.visible=on;const y=groundZ(f.Z,f.x,f.z,f.Z.lv);f.g.position.set(f.x,y,f.z);
    const c=on&&S.act[f.Z.id]?cibleEtape(f.Z):null,a=!!(c&&c.f===f);f.mq.visible=a||(on&&!S.act[f.Z.id]?false:false);
    if(a){f.mq.material=etape(f.Z).final?marqMat:marqMat2;f.mq.position.set(f.x,y+4.2+Math.sin(T*2)*.25,f.z);f.mq.rotation.y=T*1.5}}
  if(!started||mode!=='monde'||!ZQ){if(proche){proche=null;el.classList.remove('vu')}return}
  /* un lieu d'étape atteint */
  if(curZ===ZQ){const c=cibleEtape(ZQ);if(c&&c.lieu){const d=Math.hypot(c.x-P.x,c.z-P.z),k=lvDe(ZQ)+'/'+etat(ZQ).n;
    if(d>20&&lieuVu===k)lieuVu='';if(d<13&&lieuVu!==k){lieuVu=k;lieuAtteint(ZQ,c.et);return}}}
  const best=plusProche();
  if(best!==proche){proche=best;if(best){const p=Q(best.Z).pnj[best.id];el.querySelector('.r').textContent=p.role;el.querySelector('.n').textContent=p.nom;
      el.querySelector('.a').innerHTML='<b style="color:var(--laiton2,#e8c77f)">A</b> parler';el.classList.add('vu')}else el.classList.remove('vu')}}
/* l'invite du bas pointe vers l'étape en cours quand on est dans la zone et loin de la Pierre */
if(typeof invite==='function'){const inv0=invite;invite=function(){
  if(mode==='monde'&&curZ&&ZQ===curZ&&S.act[curZ.id]&&Math.hypot(curZ.alt.x-P.x,curZ.alt.z-P.z)>=ALT_R&&!proche){const c=cibleEtape(curZ);
    if(c){const rel=((Math.atan2(c.x-P.x,c.z-P.z)-P.yaw)%TAU+TAU+PI)%TAU-PI,h=`<span class="fl" style="transform:rotate(${(-rel*180/PI).toFixed(0)}deg)">▲</span>${esc(consigne(curZ,etape(curZ)))} · ${Math.round(Math.hypot(c.x-P.x,c.z-P.z))} m`;
      if(h!==invKey){invKey=h;const e=$('invite');e.innerHTML=h;e.className='hud invite'}return}}
  inv0()}}

for(const Z of ZN)if(QUETES[Z.id]){ZQ=Z;placer(Z,QUETES[Z.id]);break}
setInterval(tic,120);
function plusProche(){let best=null,dm=7;for(const f of FIG){if(!present(f.id))continue;const d=Math.hypot(f.x-P.x,f.z-P.z);if(d<dm){dm=d;best=f}}return best}
window.MZquetes={FIG,proche:()=>mode==='monde'?plusProche():null,parler,queteDe,etape,etat,consigne,cibleEtape,lieuAtteint,choisir};
})();
