/* MozaWorld TV : héros, Pierres d'éveil, épreuves, cartes, télécommande, musique, boucle. */
const $=id=>document.getElementById(id);
const IDS=ZN.map(Z=>Z.id);   /* 2.0 : les cinq zones d'origine et les tuiles de la carte agrandie */
const MODZ=id=>{const Z=ZN.find(q=>q.id===id);return Z&&Z.mod||id};
const ZB=Object.fromEntries(ZN.map(Z=>[Z.id,Z]));
const REPOS=0;             /* 22 nov. (utilisateur, bêta) : plus de repos, on enchaîne les montées d'une même zone ; était 40. */
const REPOS_JEU=40;        /* ancien repos d'une zone après un éveil, en secondes, gardé pour après la bêta (inutilisé) */
const fmt=s=>{s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const sgn=v=>(v>0?'+':v<0?'−':'')+Math.abs(v);

/* ---------- Partie : niveaux, maîtrise, empreintes, repos, cartes, blessures ---------- */
const S={lv:{},own:{},emp:{},rest:{},cards:[],hurt:0,found:[],lives:1,act:{},deck:[],renc:1};
/* Territoire de départ et zones scellées (17 nov., règles de l'utilisateur, regles-avancees.md section 1 ter) :
   - territoire de départ (choix C2 du 17 nov.) : 12 tuiles, 6 zones à cartes : 1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée, et 6 Ressources sans carte ;
     18 nov. (utilisateur) : ces 12 zones sont à vous dès le début, activées, au niveau 1, chacune vers un pôle tiré au hasard (Ressources : niveau 1, sans pôle) ;
     le paquet de départ = leurs 6 cartes de palier 1 (plus de cartes communes) ;
   - les zones qui l'entourent sont à ±6 (18 nov. : départ au niveau 1, l'écart mortel de 5 est gardé) ; au-delà, pôle ET niveau au hasard (tirés à chaque nouvelle partie) ;
   - elles ne cèdent qu'une fois toutes les zones de départ prises et le royaume assez développé (paquet d'au moins 15 cartes). */
const DIST_DEP={},PAQUET_ROYAUME=15;
const ZONES_DEP=(()=>{const org=['CIT','DON','RES','ANT','MAR'],V=typeof VOISINES_MONDE!=='undefined'?VOISINES_MONDE:{},W=typeof ZWB!=='undefined'?ZWB:ZB;
  /* 2.16 : le départ se tire d'abord parmi les 21 zones de la 2.0 (il reste celui d'avant), puis parmi les zones écrites proches */
  const anc=new Set(org.concat((typeof CARTE_PLUS!=='undefined'?CARTE_PLUS:[]).slice(0,16).map(d=>d.id)));
  const bfs=garde=>{const d={},file=[],ordre=[];for(const id of org){d[id]=0;file.push(id)}
    while(file.length){const z=file.shift();for(const v of V[z]||[])if(d[v]===undefined&&W[v]&&garde(v)){d[v]=d[z]+1;file.push(v);ordre.push(v)}}return{d,ordre}};
  const A=bfs(v=>anc.has(v)),B=bfs(v=>anc.has(v)||!(W[v].d&&W[v].d.pret===false||Math.hypot(W[v].c[0],W[v].c[1])>1250));
  Object.assign(DIST_DEP,B.d,A.d);
  const vise={CIT:1,DON:2,ANT:2,MAR:1,RES:6},n={};for(const id of org){const t=W[id].mod||id;n[t]=(n[t]||0)+1}
  const dep=org.slice();for(const id of A.ordre.concat(B.ordre.filter(v=>!anc.has(v)))){const t=W[id].mod||id;if((n[t]||0)<(vise[t]||0)){n[t]=(n[t]||0)+1;dep.push(id)}}return dep})();
const ESTDEP=new Set(ZONES_DEP);
const BORD_DEP=new Set((typeof ZW!=='undefined'?ZW:ZN).filter(Z=>!ESTDEP.has(Z.id)&&((typeof VOISINES_MONDE!=='undefined'?VOISINES_MONDE[Z.id]:[])||[]).some(v=>ESTDEP.has(v))).map(Z=>Z.id));
function nivDep(graine){const o={};for(const Z of (typeof ZW!=='undefined'?ZW:ZN)){const res=(Z.mod||Z.id)==='RES',h1=hash(Z.c[0]*.01+graine,Z.c[1]*.01),h2=hash(Z.c[1]*.013,Z.c[0]*.017+graine*1.7),sg=h1<.5?-1:1;
  o[Z.id]=ESTDEP.has(Z.id)?0:res?Math.floor(h2*4):BORD_DEP.has(Z.id)?6*sg:(2+Math.floor(h2*6))*sg}return o}
let NIV_DEP=nivDep(0);
const departPris=()=>ZONES_DEP.filter(id=>S.own[id]).length;
const royaumeEtabli=()=>departPris()>=ZONES_DEP.length&&S.deck.length>=PAQUET_ROYAUME;
const verrouLoin=Z=>!ESTDEP.has(Z.id)&&!S.own[Z.id]&&!S.emp[Z.id]&&!royaumeEtabli();
for(const id of IDS){S.lv[id]=NIV_DEP[id]||0;S.own[id]=false;S.emp[id]=false;S.rest[id]=0}
let hasSave=false;
try{const j=JSON.parse(localStorage.getItem('mz-tv-1')||'null');if(j&&j.lv){Object.assign(S,j);hasSave=true}}catch(_){}
NIV_DEP=nivDep(S.graine||0);
/* 2.0 : une partie de la 1.9 ne connaît pas les nouvelles tuiles */
for(const id of IDS){if(S.lv[id]===undefined)S.lv[id]=NIV_DEP[id]||0;if(S.own[id]===undefined)S.own[id]=false;if(S.emp[id]===undefined)S.emp[id]=false;if(S.rest[id]===undefined)S.rest[id]=0}
/* Parties enregistrées avant le combat : les zones déjà à vous comptent comme activées */
for(const id of IDS)if(S.act[id]===undefined)S.act[id]=!!S.own[id];
/* 18 nov. : territoire de départ donné au joueur, niveau 1, pôle au hasard par zone ; paquet = leurs cartes de palier 1 */
const ZWZ=id=>ZB[id]||(typeof ZWB!=='undefined'&&ZWB[id]);   /* 2.15 : une zone du monde, chargée ou non */
function paquetDe(ids){return ids.filter(id=>ZWZ(id)&&(ZWZ(id).mod||id)!=='RES'&&S.own[id]&&S.act[id]&&S.lv[id]).map(id=>typeof clePalier==='function'?clePalier(ZWZ(id),S.lv[id]):id)}
function donnerDepart(){for(const id of ZONES_DEP){const Z=ZWZ(id),lv=(Z.mod||id)==='RES'?1:(Math.random()<.5?-1:1);
    S.lv[id]=lv;S.own[id]=true;S.act[id]=true;S.emp[id]=false;S.rest[id]=0;if(ZB[id]&&Z.lv!==lv){Z.lv=Z.lvT=lv;if(typeof rebuild==='function'){rebuild(Z);Z.update(lv);if(typeof placeAlt==='function')placeAlt(Z)}}}
  if(ZONES_DEP.indexOf('DON')>=0)S.dernierAssaut=S.nc||0;
  S.deck=paquetDe(ZONES_DEP)}
if(!Array.isArray(S.deck)||!S.deck.length)S.deck=paquetDe(IDS);
if(S.renc===undefined)S.renc=1;
initEco();
function save(){const ici=new Set(secrets.map(q=>q.k));S.found=(S.found||[]).filter(k=>typeof k==='string'&&!ici.has(k)).concat(secrets.filter(q=>q.found).map(q=>q.k));try{localStorage.setItem('mz-tv-1',JSON.stringify(S))}catch(_){}}
const now=()=>Date.now()/1000;
const restLeft=Z=>Math.max(0,(S.rest[Z.id]||0)-now());

for(const Z of ZN){Z.lv=Z.lvT=S.lv[Z.id]||0;Z.build()}
if(typeof lieuxSecrets==='function')lieuxSecrets();   /* 2.6 : secrets des lieux, après tous les autres (numéros des sauvegardes inchangés) */
buildTerrain();buildBorders();for(const Z of ZN)Z.update(Z.lv);
/* 2.15 : S.found garde des clés stables ; une ancienne sauvegarde (numéros) est traduite avec l'ordre d'avant (région d'origine) */
if((S.found||[]).some(x=>typeof x==='number')){const tr=x=>typeof x==='number'?(secrets[x]&&secrets[x].k):x;S.found=(S.found||[]).map(tr).filter(Boolean);
  if(Array.isArray(S.deck))S.deck=S.deck.map(k=>/^S\d+$/.test(k)&&secrets[+k.slice(1)]?secrets[+k.slice(1)].k:k)}
{const f=new Set(S.found||[]);for(const q of secrets)if(f.has(q.k))q.found=true}
$('h-sect').textContent=secrets.length;

/* ---------- Épreuves et cartes : une épreuve par type de zone, une carte par pôle ---------- */
const TYPE={
  CIT:{ep:'La Garde des portes',kind:'Bastion',txt:'Des pillards montent vers la ville par les quatre portes. Repoussez-les avec la flèche de leur porte au moment où ils passent le cercle d\'or.'},
  DON:{ep:'Le Grand Donjon',kind:'Pouvoir',txt:'Un labyrinthe sous le cratère. Trouvez le Sceau avant que la lave ne monte, sans croiser les gardiens.'},
  RES:{ep:'La Récolte',kind:'Ressource',txt:'Les gerbes lumineuses mûrissent dans les îles autour de la Pierre. Courez les cueillir avant la fin du temps.'},
  ANT:{ep:'La Chasse aux lucioles',kind:'Créature',txt:'La reine-luciole tourne autour de l\'antre. Frappez avec OK quand elle traverse votre affût.'},
  MAR:{ep:'Le Duel d\'arguments',kind:'Assemblée',txt:'Le Conseil en place défend la loi actuelle. Affrontez-le avec votre paquet politique : vos tuiles voisines votent avant le duel.'}};
const CHANTIER={ep:'Le Chantier de la Foire',kind:'Ouvrage',txt:'Le maître d\'œuvre montre un plan de flèches. Rejouez-le sans erreur, de plus en plus long.'};
/* Cycle des contre-pouvoirs (2a, 17 nov. : une seule sorte de carte, la « carte de pouvoir » de la 1.0 est retirée).
   Posséder une zone qui en contre une autre facilite l'épreuve de celle-ci : −1, −2 dès le palier 4, −3 dès le palier 6 de la zone qui contre. */
const CONTRE={DON:'CIT',CIT:'ANT',ANT:'MAR',MAR:'RES',RES:'DON'};
const forceContre=a=>a>=6?3:a>=4?2:a>=1?1:0;
function contrePar(Z){let b=null,pw=0;for(const X of ZN){if(CONTRE[X.id]!==Z.id||!S.own[X.id]||!S.act[X.id])continue;const f=forceContre(Math.abs(S.lv[X.id]||0));if(f>pw){pw=f;b=X}}return{Z:b,pw}}

/* ---------- Héros ---------- */
const hero=creerHeros();scene.add(hero);hero.scale.setScalar(1/1.3);   /* 2.0 : héros à l'échelle 1/1,3 ; personnage articulé dans heros.js */
const P={x:-65,y:5,z:89,vy:0,g:false,yaw:Math.atan2(.59,-.81),pitch:.3,dist:11.5,face:0,walked:0,run:0};
const SPOTS={CIT:[-65,89,Math.atan2(.59,-.81)]};
{const sp=(Z,u,v)=>{const p=Z.w(u,v),q=Z.w(u+10,v);return[p[0],p[1],Math.atan2(q[0]-p[0],q[1]-p[1])]};
 SPOTS.DON=sp(DON,-58,0);SPOTS.RES=sp(RES,-52,-10);SPOTS.ANT=sp(ANT,-84,13);SPOTS.MAR=sp(MAR,-60,0);
 for(const Z of ZN)if(Z.plus)SPOTS[Z.id]=sp(Z,-27,0)}
function stand(x,z,feet){let g=ground(x,z),blocked=false,ramp=false,on=null;const Zz=zoneAt(x,z);
  if(Zz===ANT)g=Math.max(g,ANT.wy(ANT.lv)-1.05);
  for(let i=0;i<solids.length;i++){const s=solids[i];if(!s.on||(Zz&&s.Z!==Zz&&s.Z!==null)||!inSolid(s,x,z))continue;
    let top=s.y1;if(s.k)top+=s.k*((x-s.x)*s.cs+(z-s.z)*s.sn);
    if(feet>=top-1.35){if(top>g){g=top;on=s}if(s.ramp)ramp=true}else if(s.y1-s.y0>1.4&&feet+1.7>s.y0)blocked=true}   /* 2.0 : marches jusqu'à 1,35 m franchies sans sauter */
  return{g,blocked:blocked&&!ramp,on}}
/* 2.42.2 (22 nov., demande de l'utilisateur) : au retour dans le monde (combat, mue, épreuve, voyage), le héros est reposé au sol à un
   endroit libre (le relief ou un bâtiment a pu bouger pendant la mue), et la caméra revient à sa hauteur de départ, face à l'horizon. */
const PITCH0=.3;
function placeLibre(x,z){if(!zoneAt(x,z))return false;for(const Z of ZN)if(Z.alt&&Math.hypot(Z.alt.x-x,Z.alt.z-z)<(Z.alt.col||2.6)+.4)return false;
  const g=ground(x,z),s=stand(x,z,g+.05);return s.blocked||s.g>g+1.4?false:s.g}
function recaler(cam){const s=stand(P.x,P.z,P.y+.05);
  if(!s.blocked&&zoneAt(P.x,P.z)){if(P.y<s.g+.9){P.y=s.g;P.vy=0;P.g=true}}   /* sous le sol ou juste dessus : posé ; plus haut : il retombe */
  else{let bon=null;for(let r=2;r<=60&&!bon;r+=2)for(let k=0;k<16;k++){const a=k/16*TAU+P.yaw,x=P.x+Math.sin(a)*r,z=P.z+Math.cos(a)*r,g=placeLibre(x,z);if(g!==false){bon=[x,z,g];break}}
    if(bon){P.x=bon[0];P.z=bon[1];P.y=bon[2];P.vy=0;P.g=true}}
  if(cam){P.pitch=PITCH0;P.auto=0}}
/* Le héros arrive devant la Pierre, un peu en retrait */
function tp(id){const s=SPOTS[id],Z=ZB[id],a=Z.alt;let x=s[0],z=s[1],yaw=s[2];
  if(a){x=a.x-Math.sin(a.yaw)*9;z=a.z-Math.cos(a.yaw)*9;yaw=a.yaw}
  P.x=x;P.z=z;P.yaw=yaw;P.face=yaw;P.y=stand(P.x,P.z,1e3).g+.1;P.vy=0}

/* ---------- Pierres d'éveil : un pilier d'étoile Girih à dix branches par zone ---------- */
const altStone=M(0x2b2731,{roughness:.6,metalness:.2}),altGold=M(0xc9a45c,{roughness:.35,metalness:.8});
const altGlow=new THREE.MeshBasicMaterial({color:new THREE.Color(3,2.1,.8)}),altRest=new THREE.MeshBasicMaterial({color:new THREE.Color(.5,.45,.4)});
function starShape(r1,r2,n){const s=new THREE.Shape();for(let i=0;i<n*2;i++){const r=i%2?r2:r1,a=i*PI/n;i?s.lineTo(Math.cos(a)*r,Math.sin(a)*r):s.moveTo(Math.cos(a)*r,Math.sin(a)*r)}return s}
const ALT_R=11;   /* 2.0 : zone d'activation plus grande (7 m avant) */
/* 2.0 : un monument par type de zone au lieu de la simple lumière (retour du 17 nov. : « obélisque, trône, cadavre, PNJ »).
   Pas de lampe ponctuelle (trop coûteux sur la télé) : une gemme lumineuse qui tourne au-dessus, et un anneau d'or au sol. */
const monBois=M(0x4a3426),monNoir=M(0x17141a,{roughness:.4,metalness:.3}),monOs=M(0xd9cfb6,{roughness:.8}),monPierre=M(0x6d6458),monGlace=M(0x9fc4dc,{roughness:.2,metalness:.1}),monChair=M(0x5a2a2a);
const altGlyph=new THREE.MeshBasicMaterial({color:new THREE.Color(2.4,1.2,.5)});
function monument(kind){const g=new THREE.Group(),add=(geo,mat,x,y,z,ry,rx,rz)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x||0,y||0,z||0);m.rotation.set(rx||0,ry||0,rz||0);m.castShadow=true;g.add(m);return m};
  let top=5,col=3;
  if(kind==='CIT'){ /* Trône du Voïvode : siège de bois sculpté, haut dossier en bulbe */
    add(new THREE.BoxGeometry(5,.6,4),monPierre,0,.3,0);add(new THREE.BoxGeometry(4,.5,3.4),monPierre,0,.85,0);
    add(new THREE.BoxGeometry(2.4,.5,2),monBois,0,1.9,0);add(new THREE.BoxGeometry(2.4,4.2,.4),monBois,0,3.9,-.9);
    add(new THREE.BoxGeometry(.4,1.2,2),monBois,-1.2,2.5,0);add(new THREE.BoxGeometry(.4,1.2,2),monBois,1.2,2.5,0);
    add(new THREE.SphereGeometry(.9,10,8),altGold,0,6.3,-.9).scale.set(1,1.3,1);add(new THREE.ConeGeometry(.35,1.1,8),altGold,0,7.6,-.9);top=8.6;col=3.4}
  else if(kind==='DON'){ /* Obélisque des Neuf Édits : pierre noire, glyphes de lave */
    add(new THREE.BoxGeometry(3.6,.8,3.6),monPierre,0,.4,0);add(new THREE.CylinderGeometry(.85,1.35,8,4),monNoir,0,4.8,0,PI/4);
    add(new THREE.ConeGeometry(.9,1.4,4),monNoir,0,9.5,0,PI/4);
    for(let i=0;i<5;i++)add(new THREE.BoxGeometry(.9-i*.08,.16,.05),altGlyph,0,2.4+i*1.25,1.0-i*.06);top=11.2;col=2.6}
  else if(kind==='RES'){ /* Idole des Gerbes : statue à degrés, coiffe de rayons dorés */
    add(new THREE.BoxGeometry(4.4,.8,4.4),monPierre,0,.4,0);add(new THREE.BoxGeometry(3.4,.8,3.4),monPierre,0,1.2,0);
    add(new THREE.BoxGeometry(2,3,1.6),M(0x7d7a5a),0,3.1,0);add(new THREE.BoxGeometry(1.6,1.4,1.4),M(0x8a8462),0,5.3,0);
    add(new THREE.BoxGeometry(.3,.2,.1),altGlyph,-.4,5.4,.72);add(new THREE.BoxGeometry(.3,.2,.1),altGlyph,.4,5.4,.72);
    for(let i=0;i<9;i++){const a=-PI/2+(i-4)*.3;add(new THREE.BoxGeometry(.18,1.8,.12),altGold,Math.cos(a)*1.4,6.4+Math.sin(-a)*1.0,-.3,0,0,a+PI/2)}top=8.4;col=3.2}
  else if(kind==='ANT'){ /* Cadavre d'une bête géante : côtes arquées, crâne, mousse luminescente */
    for(let i=0;i<6;i++){const r=add(new THREE.TorusGeometry(2.6-i*.18,.16,6,14,PI),monOs,0,.2,-3+i*1.2);r.rotation.y=0}
    add(new THREE.CylinderGeometry(.22,.22,7.4,6),monOs,0,.25,0,0,PI/2);
    const sk=add(new THREE.SphereGeometry(1.2,10,8),monOs,0,1,4.4);sk.scale.set(1,.8,1.4);
    add(new THREE.ConeGeometry(.25,1.6,6),monOs,-.7,1.9,4.6,0,-.5,.5);add(new THREE.ConeGeometry(.25,1.6,6),monOs,.7,1.9,4.6,0,-.5,-.5);
    add(new THREE.SphereGeometry(.18,6,5),altGlyph,-.45,1.1,5.6);add(new THREE.SphereGeometry(.18,6,5),altGlyph,.45,1.1,5.6);top=5;col=3.8}
  else { /* MAR : le Crieur de la Foire, un PNJ immobile sous sa cloche */
    add(new THREE.CylinderGeometry(2.2,2.4,.5,10),monPierre,0,.25,0);
    add(new THREE.ConeGeometry(.9,2.6,8),M(0x2a3542),0,1.8,0);add(new THREE.SphereGeometry(.42,10,8),M(0xd8b48a),0,3.4,0);
    add(new THREE.CylinderGeometry(.75,.75,.12,12),M(0x1d232c),0,3.75,0);add(new THREE.CylinderGeometry(.4,.45,.6,10),M(0x1d232c),0,4.1,0);
    add(new THREE.CylinderGeometry(.07,.07,6,6),altGold,1.1,3,0);add(new THREE.CylinderGeometry(.25,.6,.8,10,1,true),altGold,1.1,6.2,0);
    add(new THREE.SphereGeometry(.5,8,6),monGlace,-1.6,.9,.6);top=7.6;col=2.8}
  const ring=new THREE.Mesh(new THREE.TorusGeometry(ALT_R*.62,.07,6,48),altGold);ring.rotation.x=PI/2;ring.position.y=.12;g.add(ring);
  const st=new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(.9,.48,10),{depth:.12,bevelEnabled:false}),altGold);st.position.y=top;g.add(st);
  const gem=new THREE.Mesh(new THREE.OctahedronGeometry(.36),altGlow);gem.position.y=top+.1;g.add(gem);
  return{g,st,gem,col}}
for(const Z of ZN){const s=SPOTS[Z.id],x=s[0]+Math.sin(s[2])*7,z=s[1]+Math.cos(s[2])*7,m=monument(Z.mod||Z.id);m.g.rotation.y=s[2]+PI;scene.add(m.g);
  Z.alt={x,z,yaw:s[2],g:m.g,st:m.st,gem:m.gem,li:{intensity:0},col:m.col,y:0}}
function placeAlt(Z){const a=Z.alt;a.y=stand(a.x,a.z,1e3).g;a.g.position.set(a.x,a.y,a.z)}
ZN.forEach(placeAlt);

/* ---------- Entrées : télécommande, clavier, manette ---------- */
const held={up:0,down:0,left:0,right:0};let heldT={up:0,down:0,left:0,right:0};
function keyAct(e){const k=e.key,c=e.keyCode;
  if(k==='ArrowUp'||c===38||e.code==='KeyW')return'up';if(k==='ArrowDown'||c===40||e.code==='KeyS')return'down';
  if(k==='ArrowLeft'||c===37||e.code==='KeyA')return'left';if(k==='ArrowRight'||c===39||e.code==='KeyD')return'right';
  if(k==='Enter'||k===' '||k==='Select'||c===13||c===23||c===32||c===66)return'ok';
  if(k==='Escape'||k==='Backspace'||k==='GoBack'||k==='BrowserBack'||c===4||c===8||c===27||c===461||c===10009)return'back';
  if(e.code==='KeyM'||k==='MediaPlayPause'||c===179)return'son';return null}
addEventListener('keydown',e=>{const a=keyAct(e);if(!a)return;e.preventDefault();
  if((a==='ok'||a==='back')&&!e.repeat)padInactif();
  if(a in held){if(!held[a])heldT[a]=performance.now();held[a]=performance.now()}
  act(a,e.repeat)},{capture:true});
addEventListener('keyup',e=>{const a=keyAct(e);if(a in held)held[a]=0});
/* Le bouton Retour de la télécommande recule dans l'historique : on le retient et on en fait « menu » */
try{history.pushState({mz:1},'');addEventListener('popstate',()=>{history.pushState({mz:1},'');act('back',false)})}catch(_){}
/* La manette (Xbox) est gérée dans manette.js : pollPad(), padMarche() */
/* Filet de sécurité : une touche dont on ne reçoit plus rien depuis 1,2 s est relâchée */
const isHeld=a=>held[a]&&performance.now()-held[a]<1200;

function terrainAll(){const a=terrain.geometry.attributes;for(const n of['position','color','normal','glow']){a[n].updateRange.count=-1;a[n].needsUpdate=true}}

/* ---------- Modes ---------- */
let mode='titre',curZ=null,hudKey='',started=false;
let lastBack=0,lastUp=0;
function act(a,rep){
  if(AX&&AX.state==='suspended')AX.resume();
  if(a==='back'){const t=performance.now();if(t-lastBack<250)return;lastBack=t}
  if(a==='son'){toggleSound();return}
  if(mode==='titre'||mode==='menu'){uiAct(a,rep);return}
  if(mode==='monde'){if(rep)return;
    /* marche automatique : ▲ deux fois de suite, le héros avance seul (◀ ▶ pour diriger, ▼ ou OK pour s'arrêter) */
    if(a==='up'){const t=performance.now();if(t-lastUp<450)P.auto=1;lastUp=t}
    if(a==='down'&&P.auto){P.auto=0;held.down=0}
    if(a==='ok'){if(P.auto)P.auto=0;else if(nearAlt())openEveil(curZ);else if(window.MZquetes&&MZquetes.proche())MZquetes.parler(MZquetes.proche());else if(window.MZinscr&&MZinscr.proche())MZinscr.lire(MZinscr.proche(),0);else sauter()}
    if(a==='back'){P.auto=0;openMenu()}return}
  if(mode==='epreuve'){if(a==='back'&&!rep){pauseEpreuve();return}if(E&&E.input)E.input(a,rep);return}
  if(mode==='mue'){if(a==='ok'&&!rep&&mue.t>2.5)mue.t=99}
  if(mode==='combat'){cbInput(a,rep)}}
const nearAlt=()=>curZ&&Math.hypot(curZ.alt.x-P.x,curZ.alt.z-P.z)<ALT_R;

/* ---------- Menus à la télécommande ---------- */
let UI=null;
function ui(host,o){UI=Object.assign({host,f:0},o);if(host==='menu'){$('toast').classList.remove('vu');toastT=0}const H=$(host);H.hidden=false;
  if(o.t!==undefined){$(host+'-sur').textContent=o.sur||'';$(host+'-t').textContent=o.t;$(host+'-corps').innerHTML=o.corps||''}
  const box=$(host+'-choix');box.className='choix'+(o.deux?' deux':'');box.innerHTML='';
  o.opts.forEach((p,i)=>{const d=document.createElement('div');d.className='opt'+(p.cls?' '+p.cls:'')+(p.off?' off':'');
    d.innerHTML=(p.ic?`<span class="ic">${p.ic}</span>`:'')+`<span>${p.l}</span>`+(p.d?`<span class="d">${p.d}</span>`:'');box.appendChild(d)});
  UI.f=Math.max(0,o.opts.findIndex(p=>!p.off));if(o.f!==undefined&&!o.opts[o.f].off)UI.f=o.f;uiDraw()}
/* la liste défile pour garder le choix visible (Xbox : marge de sécurité de l'écran télé) */
function uiDraw(){const c=$(UI.host+'-choix');[...c.children].forEach((d,i)=>{d.classList.toggle('f',i===UI.f);if(i!==UI.f)return;
  const m=8,top=d.offsetParent===c?d.offsetTop:d.offsetTop-c.offsetTop,bot=top+d.offsetHeight;if(c.scrollHeight>c.clientHeight){if(top-m<c.scrollTop)c.scrollTop=Math.max(0,top-m);else if(bot+m>c.scrollTop+c.clientHeight)c.scrollTop=bot+m-c.clientHeight}})}
function uiAct(a,rep){if(!UI)return;const n=UI.opts.length,st=UI.deux&&(a==='left'||a==='right')?1:UI.deux?2:1;
  const mv=d=>{let i=UI.f;for(let k=0;k<n;k++){i=(i+d+n)%n;if(!UI.opts[i].off){UI.f=i;break}}uiDraw();tick()};
  if(a==='down'||(a==='right'&&!UI.deux))mv(st);else if(a==='up'||(a==='left'&&!UI.deux))mv(-st);
  else if(a==='right')mv(1);else if(a==='left')mv(-1);
  else if(a==='ok'&&!rep){const p=UI.opts[UI.f];if(p&&!p.off&&p.go){clack();p.go()}}
  else if(a==='back'&&!rep&&UI.back)UI.back()}
function closeUI(){if(UI){$(UI.host).hidden=true;UI=null}}
function toMonde(){closeUI();mode='monde';document.body.classList.remove('jeu-ouvert');if(started){recaler(P.recadrer);P.recadrer=false}}

function titre(){mode='titre';const o=[];if($('seuil-ver'))$('seuil-ver').textContent='version '+(typeof MZ_VERSION!=='undefined'?MZ_VERSION:'');
  if(hasSave)o.push({l:'Reprendre la partie',ic:'◆',go:()=>{startGame(false)}});
  o.push({l:hasSave?'Nouvelle partie':'Entrer dans la mosaïque',ic:'✦',go:()=>{startGame(true)}});
  if(window.Android)o.push({l:'Quitter',ic:'✕',go:()=>window.Android.quitter()});
  ui('seuil',{opts:o})}
/* 2.15 : régions. Voyager = enregistrer, recentrer la région sur une tuile, recharger la page ; « apres » dit quoi faire au réveil. */
const regionOrigine=()=>dReg([0,0])<1;
function voyagerRegion(c,apres){if(started&&apres!=='neuf')S.pos=[P.x,P.z,P.yaw];if(apres!=='neuf')save();
  if(typeof rechargeAutorisee==='function'&&!rechargeAutorisee()){if(typeof libererGPU==='function')libererGPU();arretBoucle('voyage');return}   /* 22 nov. : pas de boucle de voyages */
  try{localStorage.setItem('mz-region',JSON.stringify([Math.round(c[0]),Math.round(c[1])]));localStorage.setItem('mz-apres',apres||'jeu')}catch(_){}
  const v=$('voyage');if(v){v.hidden=false;v.classList.add('on')}
  /* 22 nov. (« manque de mémoire graphique » après un voyage, Xbox) : on rend la carte graphique AVANT de recharger, et on laisse
     une seconde à Edge pour la libérer vraiment ; sinon la nouvelle région ne trouve pas de contexte WebGL au démarrage. */
  setTimeout(()=>{if(typeof libererGPU==='function')libererGPU();setTimeout(()=>location.reload(),1000)},60)}
function startGame(neuf){if(neuf&&!regionOrigine()){voyagerRegion([0,0],'neuf');return}
  if(neuf){for(const id in S.lv)if(!ZB[id])delete S.lv[id];for(const id of ZONES_DEP)if(!ZB[id])S.lv[id]=0;for(const k of['own','emp','rest','act'])for(const id in S[k]||{})if(!ZB[id])delete S[k][id]}
  if(neuf){const g0=S.graine;do S.graine=Math.floor(Math.random()*997)+1;while(S.graine===g0);   /* 20 nov. : une graine neuve, pour que chaque module oublie l'ancien monde */NIV_DEP=nivDep(S.graine);S.traces=[];for(const Z of ZN){const l0=NIV_DEP[Z.id]||0;S.lv[Z.id]=l0;S.own[Z.id]=false;S.emp[Z.id]=false;S.rest[Z.id]=0;Z.lv=Z.lvT=l0;rebuild(Z);Z.update(l0);placeAlt(Z)}CULL.dirty=true;
    terrainAll();
    S.cards=[];S.hurt=0;S.lives=1;S.res=RESERVE_DEPART();S.pieges=[null,null,null,null];S.nc=0;S.tc=0;S.dernierAssaut=0;S.assauts={ok:0,ko:0};S.memoire={};S.parole={};S.fatigue=0;S.riv=null;for(const id of IDS)S.act[id]=false;for(const s of secrets)s.found=false;S.found=[];S.secT={};
    donnerDepart();CULL.dirty=true;terrainAll();save()}
  $('seuil').classList.add('parti');closeUI();$('seuil').hidden=true;started=true;initAudio();tp(neuf?'CIT':(zoneAt(P.x,P.z)||CIT).id);
  if(!neuf&&S.pos){P.x=S.pos[0];P.z=S.pos[1];P.yaw=S.pos[2];P.y=ground(P.x,P.z)}
  mode='monde';recaler(true);hudKey='';etatHud();
  if(neuf)setTimeout(()=>toast('Berestograd · votre territoire','Vos 12 zones de départ sont à vous, au niveau 1','Votre paquet : leurs cartes de palier 1. Montez-les à leur Pierre d\'éveil pour gagner des cartes.'),900)}

function openMenu(f){mode='menu';document.body.classList.add('jeu-ouvert');
  ui('menu',{sur:'Pause · version '+(typeof MZ_VERSION!=='undefined'?MZ_VERSION:''),t:'MozaWorld',f:typeof f==='number'?f:0,corps:`<p class="petit">${ZN.filter(z=>S.own[z.id]).length} zone(s) à vous · ${S.deck.length} carte(s) dans le paquet · niveau total ${ZN.reduce((a,z)=>a+Math.abs(S.lv[z.id]||0),0)} · réserve ${resHTML()} · cycle ${S.nc}, prochain dans ${fmt(CYCLE-S.tc)}</p><p class="petit">Entretien des pièges : ${ENTRETIEN[S.ent].txt}</p>`,
    back:toMonde,opts:[
    {l:'Reprendre',ic:'◆',go:toMonde},
    {l:'Carte du monde',ic:'◈',d:'Vue ou C',go:()=>{toMonde();if(typeof ouvrirCarte==='function')ouvrirCarte()}},
    {l:'Voyager vers une zone',ic:'✧',go:openVoyage},
    {l:'Sauvegarder',ic:'▣',d:'20 emplacements',go:()=>openSauver(0)},
    {l:'Charger une partie',ic:'▤',go:openCharger},
    {l:'Grimoire des cartes',ic:'✦',d:'toutes les cartes, pôle par pôle',go:()=>openGrimoire(0)},
    {l:'Paquet de combat',ic:'⚔',d:S.deck.length+' carte(s) · réserve '+resTot()+' mana',go:openCombatPaquet},
    {l:'Blessures (prototype)',ic:'✚',d:S.sr===false?'Points de vie':'Façon Shadowrun : L, M, S, D',go:()=>{S.sr=S.sr===false;save();openMenu(UI.f)}},
    {l:'Rencontres en chemin',ic:'✶',d:RENC[S.renc][0],go:()=>{S.renc=(S.renc+1)%RENC.length;CBnext=prochaineRencontre();CBwalk=P.walked;save();openMenu(UI.f)}},
    {l:'Musique',ic:'♪',d:(soundOn?'activée':'coupée')+(typeof musiqueTitre==='function'&&curZ?' · '+musiqueTitre(curZ):''),go:()=>{toggleSound();openMenu()}},
    {l:'Styles par zone',ic:'✎',d:STYLE_ON?'Oui':'Non',go:()=>{toggleStyles();openMenu()}},
    {l:'Qualité d\'image',ic:'◐',d:QUAL().nom,go:()=>{QI=(QI+1)%QUALS.length;try{localStorage.setItem('mz-tv-q2',QI)}catch(_){}resize();openMenu()}},
    ...(typeof openRivaux==='function'?[{l:'Rivaux',ic:'♜',d:'les quatre maisons et leurs menaces',go:()=>openRivaux()}]:[]),
    ...(typeof openLois==='function'?[{l:'Lois du monde',ic:'⚖',d:resumeLois(),go:()=>openLois()}]:[]),
    ...(typeof optionsPalmares==='function'?optionsPalmares():[]),
    {l:'Comment jouer',ic:'?',go:openAide},
    ...(window.Android?[{l:'Quitter le jeu',ic:'✕',go:()=>{save();window.Android.quitter()}}]:[]),
    {l:'Nouvelle partie',ic:'↺',d:'les sauvegardes restent',go:()=>ui('menu',{sur:'Nouvelle partie',t:'Relancer une nouvelle partie ?',corps:'<p>Toutes les zones reviennent au niveau 0, vos cartes et vos secrets repartent de zéro. Pensez à sauvegarder la partie en cours dans un emplacement si vous voulez la garder.</p>',back:openMenu,
      opts:[{l:'Non, revenir',ic:'◆',go:openMenu},{l:'Oui, tout recommencer',ic:'↺',go:()=>{startGame(true)}}]})}]})}
function openVoyage(){ui('menu',{sur:'Voyager',t:`Les ${ZN.length} zones`,corps:'<p class="petit">Le héros réapparaît devant la Pierre d\'éveil de la zone. Vous pouvez aussi marcher : les zones se touchent.</p>',back:openMenu,
  opts:ZN.map(Z=>({l:Z.info.nom,ic:sgn(S.lv[Z.id])||'0',cls:S.lv[Z.id]<0?'m':S.lv[Z.id]>0?'p':'',d:TYPE[Z.id].ep+(restLeft(Z)>0?' · repos '+fmt(restLeft(Z)):''),go:()=>{tp(Z.id);toMonde()}}))})}
function openCombatPaquet(){const n={};for(const k of S.deck)n[k]=(n[k]||0)+1;
  ui('menu',{sur:'Paquet de combat',t:'Vos cartes de combat',corps:`<p class="petit">Réserve : ${resHTML()}${prodRessource()?' (vos Ressources ajoutent '+prodTexte()+' par cycle)':''} · en combat, on dépense la réserve : 1 mana au tour 1, 2 au tour 2, et ainsi de suite (certaines cartes donnent un boost) · main de ${mainMax()} cartes · ${pvMax()} PV. Les cartes de zone se renforcent quand la zone s'éveille, et leur effet est doublé dans la zone qu'elles contrent.</p><div class="cartes">${Object.keys(n).map(k=>carteHTML(k).replace('<div class="cn">','<div class="cn">'+(n[k]>1?n[k]+' × ':''))).join('')}</div>`,
  back:openMenu,opts:[{l:'Retour',ic:'◆',go:openMenu}]})}
function openAide(){ui('menu',{sur:'Comment jouer',t:'Activer, puis éveiller',corps:`<p class="petit">▲ ▼ marcher, tenir ▲ pour courir, ▲ deux fois : marche automatique (▼ ou OK l'arrête) · ◀ ▶ tourner · OK sauter (deux fois : double saut), ou agir devant une Pierre · Retour : menu.</p>
<p class="petit">Manette : stick gauche marcher (pousser à fond ou gâchette RT pour courir) · stick droit caméra · A sauter (deux fois : double saut) ou agir · X marche automatique · Y paquet de combat · Vue voyager · B ou Menu : menu. En combat : stick ou LB / RB choisir, A jouer, X fin du tour, B annuler ou pause.</p>
<p class="petit">Votre territoire de départ (12 zones) est à vous dès le début, au niveau 1 ; votre paquet, ce sont leurs cartes de palier 1. Ensuite, activez chaque nouvelle zone : à sa Pierre d'éveil, battez ses gardiens au tour par tour. Il y a six types de mana (Feu, Glace, Eau, Sève, Pierre, Vent), chacun avec sa réserve. Une carte de zone se paie avec le mana de sa zone ; sans assez de ce mana, elle se joue en mana gris, affaiblie. La capacité de dépense monte de 1 par tour (1, puis 2, puis 3…), tous types confondus ; les boosts sont rares. Les vaincus lâchent du mana de leur zone. La zone devient à vous et vous donne son pouvoir : du mana dans la réserve à chaque cycle (Ressource), une bête alliée (Antre), une attaque (Donjon), de la garde (Citadelle), de la pioche (Marché). Le Donjon activé s'aménage : posez des pièges payés en mana, le monde sauvage l'attaque tous les ${ASSAUT_CYCLES} cycles. En combat : ◀ ▶ choisir une carte, OK la jouer, ▼ fin du tour. Les monstres annoncent leur prochaine action au-dessus de leur tête. En marchant, des créatures surgissent parfois.</p>
<p class="petit">Ensuite, éveillez la zone. Son épreuve fait bondir la zone d'un palier vers le pôle choisi, de −7 à +7, et la transforme. Plus le palier visé est loin de zéro, plus l'épreuve est dure. Chaque palier gagné ajoute à votre paquet la carte de combat de la zone (sauf les Ressources). Posséder la zone qui en contre une autre facilite son épreuve.</p>
<p class="petit">${REPOS?`Une zone éveillée se repose ${REPOS} secondes avant le prochain bond. `:'Pendant la bêta, une zone peut monter plusieurs paliers de suite, sans repos. '}Un échec coûte une blessure ; à la troisième, le héros meurt : il perd ses cartes, ses zones redeviennent sauvages mais gardent leur niveau, et il les reprend plus facilement (empreinte). Les secrets dorés n'apparaissent qu'à certains niveaux.</p>`,
  back:openMenu,opts:[{l:'Retour',ic:'◆',go:openMenu}]})}

/* ---------- Éveil d'une zone ---------- */
function openEveil(Z,f){if(Z.d&&Z.d.pret===false){toast(Z.info.nom,'Zone pas encore écrite','Les conteurs n\'ont pas encore écrit son histoire : sa Pierre dort. Elle s\'éveillera dans une prochaine version.');return}mode='menu';document.body.classList.add('jeu-ouvert');const lv=S.lv[Z.id],I=Z.info,T=TYPE[Z.id],r=restLeft(Z),ct=contrePar(Z),emp=S.emp[Z.id];
  const diff=t=>{const b=Math.abs(t)-(emp?1:0)-ct.pw;return'Épreuve '+['très facile','facile','facile','moyenne','dure','dure','très dure','redoutable'][clamp(b,0,7)]};
  const o=[],res=(Z.mod||Z.id)==='RES',cap=res?3:7;
  if(!S.act[Z.id]&&verrouLoin(Z)){o.push({l:'Zone scellée : elle ne cède pas encore',ic:'⛓',off:true,d:`départ pris ${departPris()}/${ZONES_DEP.length} · paquet ${S.deck.length}/${PAQUET_ROYAUME}`})}
  else if(!S.act[Z.id]){o.push({l:'Activer la zone : affronter ses gardiens',ic:'⚔',cls:'p',d:(emp?'empreinte : gardiens affaiblis · ':'')+'combat',go:()=>startCombat(Z,'eveil')});
    o.push({l:'Éveil verrouillé',ic:'▲',off:true,d:'activez d\'abord la zone'})}
  else{
  if(res&&lv<3)o.push({l:`Niveau ${lv+1} sur 3`,ic:'▲',cls:'p',off:r>0,d:diff(lv+1),go:()=>startEpreuve(Z,lv+1)});
  const osc=!res&&typeof queteZone==='function'&&queteZone(Z)?optionsQuete(Z,diff,r>0):!res&&typeof optionsScene==='function'?optionsScene(Z,diff,r>0):null;  /* 18 nov. : zone à scénario, la scène remplace les paliers */
  if(osc)o.push(...osc);
  else{if(!res&&lv<cap)o.push({l:`Palier ${sgn(lv+1)} · ${lv+1>0?I.pp:'vers '+I.pp}`,ic:'▲',cls:'p',off:r>0,d:diff(lv+1),go:()=>startEpreuve(Z,lv+1)});
  if(!res&&lv>-cap)o.push({l:`Palier ${sgn(lv-1)} · ${lv-1<0?I.pm:'vers '+I.pm}`,ic:'▼',cls:'m',off:r>0,d:diff(lv-1),go:()=>startEpreuve(Z,lv-1)})}
  if(res?lv>=3:Math.abs(lv)>=cap)o.push({l:'Niveau maximal atteint',ic:'◆',off:true,d:res?'une Ressource va de 0 à 3, sans pôle':`palier ${sgn(lv)}, le plus haut de ce pôle`})}
  if(typeof optionsDonjons==='function')o.unshift(...optionsDonjons(Z));else if(Z.id==='DON'&&S.act.DON&&S.own.DON)o.unshift({l:'Aménager le Donjon',ic:'⛬',cls:'p',d:`${nbPieges()} piège(s) · réserve ${resTot()}`,go:()=>openDonjon()});
  o.push({l:'Repérage : entrevoir les deux paliers',ic:'◎',d:'sans risque',go:()=>reperage(Z)});
  if(ct.pw)o.push({l:`Contre-pouvoir ${typeof de_==='function'?de_(ct.Z.info.nom):'de '+ct.Z.info.nom}`,ic:'⚔',off:true,d:`vous possédez la zone qui la contre : épreuve −${ct.pw}`});
  if(typeof optionsRoutes==='function')o.push(...optionsRoutes(Z));
  if(typeof optionsAssemblee==='function')o.push(...optionsAssemblee(Z));
  if(typeof optionsCaravanes==='function'){const c=optionsCaravanes(Z);o.unshift(...c.filter(x=>x.go));o.push(...c.filter(x=>!x.go))}   /* lot 3 : escorter en tête (après les défenses contre un rival ou une horde), état de la caravane plus bas (caravanes.js) */
  if(typeof optionsRivaux==='function')o.unshift(...optionsRivaux(Z));
  if(typeof optionsDomaines==='function')o.push(...optionsDomaines(Z));
  if(typeof optionsCommerce==='function')o.push(...optionsCommerce(Z));   /* lot 2 : le Comptoir des Citadelles tenues (commerce.js) */
  if(typeof optionsTours==='function')o.push(...optionsTours(Z));
  if(typeof optionsHorde==='function'){const h=optionsHorde(Z);o.unshift(...h.filter(x=>x.go));o.push(...h.filter(x=>!x.go))}   /* l'avant-garde à affronter en tête, comme la défense contre un rival */
  if(typeof optionsSiege==='function'){const s=optionsSiege(Z);o.unshift(...s.filter(x=>x.go));o.push(...s.filter(x=>!x.go))}   /* lot 3 : Citadelle épique et siège final (siege.js) */
  o.push({l:'Partir',ic:'◆',go:toMonde});
  ui('menu',{sur:`Pierre d'éveil · ${T.kind}`,t:I.nom,f,
    corps:!S.act[Z.id]&&verrouLoin(Z)?`<p><b>Zone scellée.</b> Ses gardiens sont hors de portée tant que votre royaume n'est pas établi : prenez d'abord les ${ZONES_DEP.length} zones de votre territoire de départ (${departPris()} prises) et bâtissez un paquet d'au moins ${PAQUET_ROYAUME} cartes (${S.deck.length} pour l'instant). Récompense future : ${RECO[Z.id]}</p>`:S.act[Z.id]&&typeof queteZone==='function'&&queteZone(Z)?corpsQuete(Z)+`<p class="petit">Pouvoir de la zone : ${RECO[Z.id]}</p>`:S.act[Z.id]&&typeof sceneDe==='function'&&sceneDe(Z)?corpsScene(Z)+`<p class="petit">Pouvoir de la zone : ${RECO[Z.id]}</p>`:S.act[Z.id]?`<p><b>${T.ep}.</b> ${T.txt}</p><p class="petit">Pouvoir de la zone : ${RECO[Z.id]}</p>`:`<p><b>Zone à activer.</b> Battez les gardiens de la Pierre au tour par tour pour prendre la zone. Récompense : ${RECO[Z.id]}</p>`,
    corps2:`<p class="petit">Niveau actuel ${sgn(lv)||'0'} · ${S.own[Z.id]?'zone à vous':emp?'zone sauvage, votre empreinte la rend plus facile à reprendre':'zone sauvage'}${r>0?` · <b style="color:var(--laiton2)">la zone se repose encore ${fmt(r)}</b>`:''}</p>`,
    back:toMonde,opts:o});$('menu-corps').innerHTML+=UI.corps2}
/* Repérage : la zone montre brièvement ses deux paliers voisins, puis revient */
function reperage(Z){closeUI();mode='mue';const lv=S.lv[Z.id];
  mue={Z,t:0,dur:9,steps:[[.6,lv<7?lv+1:lv,'Repérage · '+Z.info.pp,`Palier ${sgn(Math.min(7,lv+1))}`],[4.6,lv>-7?lv-1:lv,'Repérage · '+Z.info.pm,`Palier ${sgn(Math.max(-7,lv-1))}`],[8.2,lv,'',''],],rep:true,i:0,end:()=>openEveil(Z)};}

/* ---------- Mue : le bond d'un palier, caméra qui tourne autour de la Pierre ---------- */
let mue=null;
function startMue(Z,lv){mode='mue';P.recadrer=true;mue={Z,t:0,dur:7,steps:[[.8,lv,'',''],],i:0,rep:false,end:()=>{
  const I=Z.info,rs=(Z.mod||Z.id)==='RES',fin=`<p class="petit" style="margin-top:1em">${I.nom} est maintenant au palier ${sgn(lv)}. ${(r=>r?`Elle se repose ${r} secondes avant le prochain bond.`:'Vous pouvez enchaîner le palier suivant.')(typeof reposZone==='function'?reposZone(Z.id):REPOS)}</p>`;
  const sc=!rs&&Z._sansCarte;Z._sansCarte=false;
  ui('menu',{sur:rs?'Mue · Ressource':sc?'Mue · vous vous êtes ravisé':'Mue · nouvelle carte',t:I.nom,corps:sc?`<div class="mue-corps sans"><div class="txt"><div class="palier-mue">${sgn(lv)||'0'}<small>${lv>0?I.pp:lv<0?I.pm:'Équilibre'}</small></div><p>La zone revient d'un palier vers l'autre pôle. Se raviser ne donne pas de carte, mais le monde s'en souviendra.</p>${fin}</div></div>`:rs?`<div class="mue-corps sans"><div class="txt"><div class="palier-mue">${sgn(lv)}<small>${lv>0?I.pp:lv<0?I.pm:'Équilibre'}</small></div><p>La Ressource produit davantage de mana. Elle ne donne pas de carte de combat.</p>${fin}</div></div>`:`<div class="mue-corps"><div class="cartes">${carteHTML(Z.id)}</div><div class="txt"><div class="palier-mue">Palier ${sgn(lv)}<small>${lv>0?I.pp:lv<0?I.pm:'Équilibre'}</small></div><p>« ${CK[Z.id].nom()} » rejoint votre paquet.</p>${fin}</div></div>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]});mode='menu'}};
  toast(`Palier ${sgn(lv)} · ${lv>0?I_(Z).pp:lv<0?I_(Z).pm:'Équilibre'}`,Z.info.nom,palTxt(Z,lv));fanfare(lv)}
const I_=Z=>Z.info;
const palTxt=(Z,lv)=>Z.info.pal[lv<=-6?0:lv<=-2?1:lv<2?2:lv<6?3:4];
function stepMue(dt){const m=mue;m.t+=dt;
  while(m.i<m.steps.length&&m.t>=m.steps[m.i][0]){const s=m.steps[m.i];m.Z.lvT=s[1];if(s[2])toast(s[2],s[3],palTxt(m.Z,s[1]));m.i++}
  if(m.t>=m.dur){mue=null;m.end()}}

/* ---------- Épreuves ---------- */
let E=null;const jc=$('jcv'),jx=jc.getContext('2d');
function startEpreuve(Z,target){const pw=contrePar(Z).pw;
  const eff=clamp(Math.abs(target)-pw-(S.emp[Z.id]?1:0),1,7);
  if(typeof estAssemblee==='function'&&estAssemblee(Z))return startDuel(Z,target,eff);   /* 17 nov. : l'épreuve d'une Assemblée est le Duel d'arguments */
  closeUI();mode='epreuve';document.body.classList.add('jeu-ouvert');save();etatHud();
  E=GAMES[Z.id](eff);E.Z=Z;E.target=target;E.eff=eff;E.t=0;
  $('jeu').hidden=false;$('jeu').className='ecran'+(E.monde?' monde':'');
  $('j-sur').textContent=TYPE[Z.id].ep+' · palier visé '+sgn(target)+(pw?' · contre-pouvoir −'+pw:'');$('j-t').textContent=Z.info.nom;$('j-c').textContent=E.consigne;
  E.compte();$('toast').classList.remove('vu');toastT=0}
function compte(pairs){$('j-n').innerHTML=pairs.map(p=>`<span>${p[0]} <b>${p[1]}</b></span>`).join('')}
function endEpreuve(ok){P.recadrer=true;const Z=E.Z,target=E.target;if(E.fin)E.fin();E=null;$('jeu').hidden=true;
  if(ok){palierReussi(Z,target)}
  else{S.hurt++;sfx('fail');etatHud();
    if(S.hurt>=3){mort();return}
    save();ui('menu',{sur:'Échec',t:'La zone résiste',corps:`<p>${Z.info.nom} reste au palier ${sgn(S.lv[Z.id])||'0'}. Vous êtes blessé (${S.hurt} sur 3). Une réussite soigne une blessure.</p>`,back:toMonde,
      opts:[{l:'Réessayer',ic:'▲',go:()=>openEveil(Z)},{l:'Repartir explorer',ic:'◆',go:toMonde}]});mode='menu'}}
/* 22 nov. : la réussite d'un palier, partagée par l'épreuve et par le combat qui clôt une quête (quetes.js) */
function palierReussi(Z,target){const de=S.lv[Z.id]||0,carte=typeof sceneDonneCarte!=='function'||sceneDonneCarte(Z,de,target);if(typeof suitesParole==='function')suitesParole(Z);if(typeof tenirParole==='function')tenirParole(Z);S.lv[Z.id]=target;Z._sansCarte=!carte;S.own[Z.id]=true;S.act[Z.id]=true;S.emp[Z.id]=false;S.rest[Z.id]=now()+(typeof reposZone==='function'?reposZone(Z.id):REPOS);S.hurt=Math.max(0,S.hurt-1);if(carte&&S.deck.length<PAQUET_MAX&&(Z.mod||Z.id)!=='RES')S.deck.push(typeof clePalier==='function'?clePalier(Z,target):Z.id);/* 17 nov. : les Ressources ne donnent pas de carte (mana et atouts par les routes) */save();etatHud();hudKey='';startMue(Z,target)}
function mort(){for(const id of Object.keys(S.own)){if(S.own[id]){S.own[id]=false;S.emp[id]=true}S.act[id]=false}
  donnerDepart();CULL.dirty=true;terrainAll();   /* 18 nov. : l'héritier repart comme une nouvelle partie, territoire de départ au niveau 1, pôles retirés au hasard */
  S.cards=[];S.hurt=0;S.lives=(S.lives||1)+1;save();etatHud();hudKey='';
  ui('menu',{sur:'Mort du héros',t:'La mosaïque vous oublie',corps:`<p>Troisième blessure. Vous perdez vos cartes et vos zones : elles gardent leur niveau mais redeviennent sauvages. L'héritier reçoit à nouveau le territoire de départ, au niveau 1, et ses cartes de palier 1.</p><p class="petit">Votre empreinte reste : reprendre une ancienne zone à vous sera plus facile. Un héritier se lève à Berestograd.</p>`,
    opts:[{l:'Se relever',ic:'✦',go:()=>{if(!regionOrigine()){S.pos=null;save();voyagerRegion([0,0],'jeu');return}tp('CIT');toMonde()}}]});mode='menu'}
function pauseEpreuve(){const keep=E;mode='menu';ui('menu',{sur:'Épreuve en pause',t:'Abandonner ?',corps:'<p class="petit">Abandonner ne blesse pas, la zone ne change pas.</p>',
  back:()=>{closeUI();mode='epreuve'},opts:[{l:'Continuer l\'épreuve',ic:'▲',go:()=>{closeUI();mode='epreuve'}},{l:'Abandonner',ic:'◆',go:()=>{if(E&&E.fin)E.fin();E=null;$('jeu').hidden=true;toMonde()}}]});$('jeu').hidden=!keep.monde?false:false}

/* fond commun des épreuves : rosace Girih au trait */
function fondGirih(c,t,col){const W=720;jx.clearRect(0,0,W,W);jx.save();jx.translate(360,360);
  const g=jx.createRadialGradient(0,0,40,0,0,360);g.addColorStop(0,'rgba(201,164,92,.10)');g.addColorStop(1,'rgba(13,12,15,0)');jx.fillStyle=g;jx.fillRect(-360,-360,720,720);
  jx.strokeStyle=col||'rgba(201,164,92,.22)';jx.lineWidth=1.5;
  for(const r of[120,220,320]){jx.beginPath();for(let i=0;i<=20;i++){const a=i*PI/10+t*.02*(r%3?1:-1),rr=i%2?r*.72:r;i?jx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):jx.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}jx.stroke()}
  jx.restore()}
const DIRS={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},DN=['up','right','down','left'],ARW={up:'▲',right:'▶',down:'▼',left:'◀'};

const GAMES={
/* Citadelle : des pillards arrivent par quatre portes, on les repousse au passage du cercle d'or */
CIT(eff){const need=6+2*eff,v=120+26*eff,gap=Math.max(.42,1.45-.13*eff),R0=330,RW=[118,186];let hit=0,miss=0,sp=.8,foes=[],fl=[];
  return{consigne:'Appuyez sur la flèche de la porte quand le pillard est dans le cercle d\'or.',
    compte(){compte([['Repoussés',hit+' / '+need],['Brèches',miss+' / 3']])},
    step(dt){sp-=dt;if(sp<=0){sp=gap*(.7+Math.random()*.6);foes.push({d:DN[(Math.random()*4)|0],r:R0});if(eff>=5&&Math.random()<.3)foes.push({d:DN[(Math.random()*4)|0],r:R0+60})}
      for(const f of foes)f.r-=v*dt;for(const f of foes)if(f.r<70&&!f.dead){f.dead=1;miss++;sfx('miss');fl.push({d:f.d,t:.5,c:'#d0564a'});this.compte()}
      foes=foes.filter(f=>!f.dead);fl=fl.filter(f=>(f.t-=dt)>0);if(hit>=need)endEpreuve(true);else if(miss>=3)endEpreuve(false)},
    input(a,rep){if(rep||!DIRS[a])return;const c=foes.filter(f=>f.d===a&&f.r>RW[0]&&f.r<RW[1]).sort((p,q)=>p.r-q.r)[0];
      if(c){c.dead=1;hit++;sfx('hit');fl.push({d:a,t:.35,c:'#e8c77f'})}else{miss++;sfx('miss');fl.push({d:a,t:.5,c:'#d0564a'})}foes=foes.filter(f=>!f.dead);this.compte()},
    draw(t){fondGirih(jx,t);jx.save();jx.translate(360,360);
      jx.lineWidth=RW[1]-RW[0];jx.strokeStyle='rgba(201,164,92,.16)';jx.beginPath();jx.arc(0,0,(RW[0]+RW[1])/2,0,TAU);jx.stroke();
      jx.lineWidth=2;jx.strokeStyle='#c9a45c';for(const r of RW){jx.beginPath();jx.arc(0,0,r,0,TAU);jx.stroke()}
      for(const d of DN){const[dx,dy]=DIRS[d];jx.strokeStyle='rgba(239,231,214,.12)';jx.lineWidth=40;jx.beginPath();jx.moveTo(dx*80,dy*80);jx.lineTo(dx*340,dy*340);jx.stroke()}
      for(const f of fl){const[dx,dy]=DIRS[f.d];jx.fillStyle=f.c;jx.globalAlpha=f.t*2;jx.beginPath();jx.arc(dx*150,dy*150,46,0,TAU);jx.fill();jx.globalAlpha=1}
      jx.fillStyle='#efe7d6';jx.font='600 56px Cormorant Garamond,serif';jx.textAlign='center';jx.textBaseline='middle';
      for(const f of foes){const[dx,dy]=DIRS[f.d];const inn=f.r>RW[0]&&f.r<RW[1];jx.fillStyle=inn?'#ffd98a':'#d9cbb0';jx.fillText(ARW[f.d],dx*f.r,dy*f.r)}
      jx.fillStyle='#c9a45c';jx.beginPath();for(let i=0;i<20;i++){const a=i*PI/10,r=i%2?26:58;i?jx.lineTo(Math.cos(a)*r,Math.sin(a)*r):jx.moveTo(Math.cos(a)*r,Math.sin(a)*r)}jx.fill();jx.restore()}}},
/* Marché : rejouer un plan de flèches, de plus en plus long */
MAR(eff){const goal=3+eff,seq=[],fl={};let len=2,pos=0,err=eff>=4?1:2,show=1.2,si=-1,st=Math.max(.32,.62-.04*eff);
  const add=()=>{while(seq.length<len)seq.push(DN[(Math.random()*4)|0])};add();
  return{consigne:'Regardez le plan, puis rejouez-le avec les flèches.',
    compte(){compte([['Longueur',len+' / '+goal],['Erreurs permises',err]])},
    step(dt){for(const k in fl)fl[k]=Math.max(0,fl[k]-dt);if(show>0){show-=dt;const i=Math.floor((-show)/st);if(show<=0)show=-1e-9;}
      if(show<=0&&si<seq.length){/* lecture du plan */this.lt=(this.lt||0)+dt;if(this.lt>=st){this.lt=0;si++;if(si<seq.length){fl[seq[si]]=st*.8;tone(DN.indexOf(seq[si]))}}}},
    input(a,rep){if(rep||!DIRS[a]||si<seq.length)return;fl[a]=.3;tone(DN.indexOf(a));
      if(a===seq[pos]){pos++;if(pos>=len){if(len>=goal){endEpreuve(true);return}len++;add();pos=0;si=-1;show=.9;this.lt=0;sfx('hit')}}
      else{err--;sfx('miss');pos=0;si=-1;show=1.1;this.lt=0;if(err<0){endEpreuve(false);return}}this.compte()},
    draw(t){fondGirih(jx,t);jx.save();jx.translate(360,360);const cols={up:'#e6a25a',right:'#7fb0c8',down:'#9fc28a',left:'#c97ab0'};
      for(const d of DN){const[dx,dy]=DIRS[d],k=fl[d]>0?1:0;jx.save();jx.translate(dx*170,dy*170);jx.rotate(Math.atan2(dy,dx));
        jx.fillStyle=cols[d];jx.globalAlpha=k?1:.22;jx.beginPath();jx.moveTo(-90,0);jx.lineTo(0,-82);jx.lineTo(110,0);jx.lineTo(0,82);jx.closePath();jx.fill();
        jx.globalAlpha=1;jx.strokeStyle='#c9a45c';jx.lineWidth=2;jx.stroke();jx.restore()}
      jx.fillStyle='#efe7d6';jx.font='600 44px Cormorant Garamond,serif';jx.textAlign='center';jx.textBaseline='middle';
      jx.fillText(si<seq.length?'Regardez':`${pos} / ${len}`,0,0);jx.restore()}}},
/* Donjon : labyrinthe dans le noir, trouver le Sceau avant la lave, éviter les gardiens */
DON(eff){const n=7+eff*2,g=[];for(let y=0;y<n;y++){g.push([]);for(let x=0;x<n;x++)g[y].push(1)}
  const st=[[1,1]];g[1][1]=0;while(st.length){const[cx,cy]=st[st.length-1],nb=[[2,0],[-2,0],[0,2],[0,-2]].map(([a,b])=>[cx+a,cy+b,cx+a/2,cy+b/2]).filter(([x,y])=>x>0&&y>0&&x<n-1&&y<n-1&&g[y][x]);
    if(!nb.length){st.pop();continue}const[x,y,mx,my]=nb[(Math.random()*nb.length)|0];g[my][mx]=0;g[y][x]=0;st.push([x,y])}
  for(let k=0;k<n;k++){const x=1+2*((Math.random()*(n-1)/2)|0),y=1+((Math.random()*(n-2))|0);if(x<n-1&&y<n-1)g[y][x]=0}/* quelques boucles */
  let px=1,py=1,time=30+n*3.2,vis=3.4+Math.max(0,4-eff)*.6;const ex=n-2,ey=n-2,gu=[];
  for(let i=0;i<Math.floor((eff-1)/2);i++){let x,y;do{x=1+((Math.random()*(n-2))|0);y=1+((Math.random()*(n-2))|0)}while(g[y][x]||x+y<n);gu.push({x,y,t:0})}
  const gs=Math.max(.3,.75-.05*eff);
  return{consigne:'Flèches pour avancer case par case. Le Sceau brille dans le coin opposé.',
    compte(){compte([['Lave dans',fmt(time)],['Gardiens',gu.length]])},
    step(dt){time-=dt;if((this.cc=(this.cc||0)+dt)>.25){this.cc=0;this.compte()}if(time<=0){endEpreuve(false);return}
      for(const q of gu){q.t+=dt;if(q.t>gs){q.t=0;const o=Object.values(DIRS).filter(([a,b])=>!g[q.y+b][q.x+a]);const towards=Math.hypot(q.x-px,q.y-py)<6&&Math.random()<.55;
        let m=o[(Math.random()*o.length)|0];if(towards)m=o.sort((A,B)=>Math.hypot(q.x+A[0]-px,q.y+A[1]-py)-Math.hypot(q.x+B[0]-px,q.y+B[1]-py))[0];if(m){q.x+=m[0];q.y+=m[1]}}
        if(q.x===px&&q.y===py){px=1;py=1;time-=8;sfx('miss');toast('Un gardien vous a vu','Retour à l\'entrée','La lave a gagné huit secondes.')}}},
    input(a){const d=DIRS[a];if(!d)return;const nx=px+d[0],ny=py+d[1];if(!g[ny][nx]){px=nx;py=ny;step()}if(px===ex&&py===ey)endEpreuve(true)},
    draw(t){const W=720,c=W/n;jx.fillStyle='#0d0c0f';jx.fillRect(0,0,W,W);
      for(let y=0;y<n;y++)for(let x=0;x<n;x++){const d=Math.hypot(x-px,y-py),k=clamp(1-(d-vis)/2.2,0,1)*.92+.08*(g[y][x]?0:1);if(k<=0)continue;
        jx.globalAlpha=k;if(g[y][x]){jx.fillStyle='#151014';jx.fillRect(x*c,y*c,c+.5,c+.5);jx.fillStyle='rgba(230,110,60,.35)';jx.fillRect(x*c,y*c+c*.86,c,c*.14)}
        else{jx.fillStyle=(x+y)%2?'#6b4b44':'#634540';jx.fillRect(x*c,y*c,c+.5,c+.5);jx.strokeStyle='rgba(201,164,92,.25)';jx.lineWidth=1;jx.strokeRect(x*c+c*.18,y*c+c*.18,c*.64,c*.64)}}
      jx.globalAlpha=1;const pulse=.6+.4*Math.sin(t*4);jx.fillStyle=`rgba(255,200,110,${pulse})`;jx.beginPath();jx.arc((ex+.5)*c,(ey+.5)*c,c*.36,0,TAU);jx.fill();
      for(const q of gu){const d=Math.hypot(q.x-px,q.y-py);if(d>vis+1)continue;jx.fillStyle='#d0564a';jx.beginPath();jx.moveTo((q.x+.5)*c,(q.y+.12)*c);jx.lineTo((q.x+.88)*c,(q.y+.88)*c);jx.lineTo((q.x+.12)*c,(q.y+.88)*c);jx.fill()}
      jx.fillStyle='#efe7d6';jx.beginPath();jx.arc((px+.5)*c,(py+.5)*c,c*.32,0,TAU);jx.fill();
      const lava=clamp(1-time/(30+n*3.2),0,1);jx.fillStyle=`rgba(230,90,40,${.08+.25*lava})`;jx.fillRect(0,W*(1-lava*.25),W,W*lava*.25)}}},
/* Antre : frapper la reine-luciole quand elle traverse l'affût */
ANT(eff){const need=3+eff,arcW=Math.max(16,70-7*eff)*D2R;let a=0,sp=1.5+.32*eff,dir=1,hit=0,miss=0,tgt=Math.random()*TAU,fl=0,flc='';
  return{consigne:'Appuyez sur OK quand la luciole traverse l\'affût doré.',
    compte(){compte([['Touches',hit+' / '+need],['Coups manqués',miss+' / 3']])},
    step(dt){a=(a+dir*sp*dt+TAU)%TAU;fl=Math.max(0,fl-dt);if(eff>=4&&Math.random()<dt*.35)dir=-dir},
    input(k,rep){if(k!=='ok'||rep)return;let d=Math.abs(((a-tgt)%TAU+TAU+PI)%TAU-PI);
      if(d<arcW/2){hit++;sfx('hit');fl=.4;flc='#e8c77f';sp*=1.06;tgt=(a+PI*.6+Math.random()*PI*.8)%TAU;if(hit>=need){endEpreuve(true);return}}
      else{miss++;sfx('miss');fl=.4;flc='#d0564a';if(miss>=3){endEpreuve(false);return}}this.compte()},
    draw(t){fondGirih(jx,t,'rgba(127,176,200,.18)');jx.save();jx.translate(360,360);const R=230;
      jx.strokeStyle='rgba(239,231,214,.18)';jx.lineWidth=26;jx.beginPath();jx.arc(0,0,R,0,TAU);jx.stroke();
      jx.strokeStyle='#c9a45c';jx.lineWidth=34;jx.beginPath();jx.arc(0,0,R,tgt-arcW/2,tgt+arcW/2);jx.stroke();
      if(fl>0){jx.fillStyle=flc;jx.globalAlpha=fl*2;jx.beginPath();jx.arc(0,0,90,0,TAU);jx.fill();jx.globalAlpha=1}
      const x=Math.cos(a)*R,y=Math.sin(a)*R,gr=jx.createRadialGradient(x,y,2,x,y,46);gr.addColorStop(0,'rgba(220,255,240,1)');gr.addColorStop(.3,'rgba(120,230,200,.8)');gr.addColorStop(1,'rgba(120,230,200,0)');
      jx.fillStyle=gr;jx.beginPath();jx.arc(x,y,46,0,TAU);jx.fill();
      jx.fillStyle='#efe7d6';jx.font='600 44px Cormorant Garamond,serif';jx.textAlign='center';jx.textBaseline='middle';jx.fillText(hit+' / '+need,0,0);jx.restore()}}},
/* Ressource : cueillir des gerbes lumineuses dans le monde, à pied, avant la fin du temps */
RES(eff){const Z=RES,K=4+eff,a=Z.alt,orbs=[];let time=38+K*8-eff*2;
  for(let tries=0;orbs.length<K&&tries<4000;tries++){const ang=Math.random()*TAU,d=18+Math.random()*(40+eff*6),x=a.x+Math.cos(ang)*d,z=a.z+Math.sin(ang)*d;
    if(zoneAt(x,z)!==Z)continue;const q=Z.loc(x,z);if(!Z.inside(q[0],q[1],10))continue;const s=stand(x,z,1e3);if(s.g<-5)continue;
    if(orbs.some(o=>Math.hypot(o.x-x,o.z-z)<9))continue;orbs.push({x,z,y:s.g+1.3})}
  orbs.forEach((o,i)=>{const m=gerbes[i];m.visible=true;m.position.set(o.x,o.y,o.z);o.m=m});
  return{monde:true,orbs,consigne:'Marchez jusqu\'aux gerbes lumineuses. Suivez la flèche, tenez ▲ pour courir.',
    compte(){compte([['Gerbes',orbs.filter(o=>o.got).length+' / '+orbs.length],['Temps',fmt(time)]])},
    step(dt,T){time-=dt;if((this.cc=(this.cc||0)+dt)>.25){this.cc=0;this.compte()}if(time<=0){endEpreuve(false);return}
      move(dt);for(const o of orbs){if(o.got)continue;o.m.position.y=o.y+Math.sin(T*2.4+o.x)*.3;o.m.rotation.y=T*1.5;
        if(Math.hypot(o.x-P.x,o.z-P.z)<2.6&&Math.abs(o.y-P.y-1)<4){o.got=1;o.m.visible=false;sfx('hit');this.compte()}}
      if(orbs.every(o=>o.got))endEpreuve(true)},
    input(a,rep){if(a==='ok'&&!rep)sauter()},
    fin(){for(const m of gerbes)m.visible=false},draw(){}}}};
const gerbeMat=new THREE.MeshBasicMaterial({color:new THREE.Color(1.6,3,1.2)}),gerbes=[];
for(let i=0;i<12;i++){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.7,0),gerbeMat);m.visible=false;scene.add(m);gerbes.push(m)}
function step(){if(AX&&soundOn)perc(AX.currentTime,'c',.35)}

/* Saut, puis double saut en l'air (demande du 17 nov.) : un second appui relance le héros, avec une culbute */
function sauter(){if(P.g){P.vy=11.5;P.g=false;P.saut2=1;sfxSaut(0)}else if(P.saut2){P.vy=10.5;P.saut2=0;hero.userData.flip=1;sfxSaut(1)}}
function sfxSaut(n){if(AX&&soundOn)try{note(AX.currentTime,n?660:440,SIN,.12,.05)}catch(_){}}
/* ---------- Déplacement : ▲▼ avancer/reculer, ◀▶ tourner ---------- */
function move(dt){const t=performance.now();
  /* Plus rapide (retour du 17 nov.) : marche 14, course 27 au bout de 0,35 s ; virage qui s'accélère quand on tient ◀ ▶ */
  if(mode!=='monde')P.auto=0;
  const f=P.auto?1:(isHeld('up')?1:0)-(isHeld('down')?1:0),r=(isHeld('right')?1:0)-(isHeld('left')?1:0);
  const tr=r?Math.min(1,(t-Math.max(heldT.left||0,heldT.right||0))/450):0;
  if(mode==='monde'||(mode==='epreuve'&&E&&E.monde)){P.yaw-=r*dt*(1.7+1.5*tr);P.run=f>0&&(P.auto||t-heldT.up>350)?1:0}else{P.run=0}
  const live=(mode==='monde'||(mode==='epreuve'&&E&&E.monde));const ff=live?f:0;
  P.sp=(P.sp||0)+((ff?(P.run?31:16)*(ff<0?.6:1):0)-(P.sp||0))*Math.min(1,dt*6);
  const fx=Math.sin(P.yaw),fz=Math.cos(P.yaw),sp=P.sp;
  const pm=live?padMarche(dt):null;let dx=0,dz=0;
  if(pm){P.sp=pm.sp;dx=Math.sin(pm.m)*pm.sp*dt;dz=Math.cos(pm.m)*pm.sp*dt;P.face=pm.m}
  else if(ff){dx=fx*ff*sp*dt;dz=fz*ff*sp*dt;P.face=P.yaw}
  if(dx||dz){
    const tryMove=(nx,nz)=>{if(!zoneAt(nx,nz))return false;for(const Z of ZN)if(Math.hypot(Z.alt.x-nx,Z.alt.z-nz)<(Z.alt.col||2.6))return false;const s=stand(nx,nz,P.y+.05);if(s.blocked)return false;P.x=nx;P.z=nz;return true};
    if(!tryMove(P.x+dx,P.z+dz))if(!tryMove(P.x+dx,P.z))tryMove(P.x,P.z+dz);if(P.g)P.walked+=Math.hypot(dx,dz)*.55}
  const s=stand(P.x,P.z,P.y+.05);
  if(P.g){if(s.g<P.y-.85){P.g=false}else{P.y=s.g;if(s.on&&s.on.dx!==undefined){const nx=P.x+s.on.dx,nz=P.z+s.on.dz;if(zoneAt(nx,nz)){P.x=nx;P.z=nz}}}}
  if(!P.g){P.vy-=24*dt;P.y+=P.vy*dt;if(P.y<=s.g&&P.vy<=0){P.y=s.g;P.vy=0;P.g=true;P.saut2=0}}
  P.v=lerp(P.v||0,(Math.hypot(P.x-(P.px===undefined?P.x:P.px),P.z-(P.pz===undefined?P.z:P.pz)))/Math.max(dt,1e-3),Math.min(1,dt*10));P.px=P.x;P.pz=P.z;
  animHeros(hero,dt,P.v,P.g,P.vy,performance.now()/1000);
  hero.position.set(P.x,P.y,P.z);hero.rotation.y+=((((P.face-hero.rotation.y)%TAU)+TAU+PI)%TAU-PI)*Math.min(1,dt*10)}
function camFollow(dt){const fx=Math.sin(P.yaw),fz=Math.cos(P.yaw),cp=Math.cos(P.pitch),tx=P.x,ty=P.y+1.45,tz=P.z;
  let cx=tx-fx*cp*P.dist,cy=ty+Math.sin(P.pitch)*P.dist,cz=tz-fz*cp*P.dist;const gy=ground(cx,cz)+.7;if(cy<gy)cy=gy;camGo(cx,cy,cz,tx,ty,tz,dt,8)}
const camP=new THREE.Vector3(),camT=new THREE.Vector3();let camInit=false;
function camGo(cx,cy,cz,tx,ty,tz,dt,k){const a=camInit?1-Math.exp(-dt*k):1;camInit=true;camP.x+=(cx-camP.x)*a;camP.y+=(cy-camP.y)*a;camP.z+=(cz-camP.z)*a;camT.x+=(tx-camT.x)*a;camT.y+=(ty-camT.y)*a;camT.z+=(tz-camT.z)*a;camera.position.copy(camP);camera.lookAt(camT)}
function camMue(dt){const Z=mue.Z,a=Z.alt,ang=a.yaw+PI+mue.t*.32,R=38+mue.t*2.5,cx=a.x+Math.sin(ang)*R,cz=a.z+Math.cos(ang)*R;
  camGo(cx,Math.max(a.y+32+mue.t*2,ground(cx,cz)+4),cz,a.x,a.y,a.z,dt,2.2)}

/* ---------- Interface du monde ---------- */
const pips=$('h-pips');for(let i=-7;i<=7;i++){const s=document.createElement('span');s.className='pip'+(i===0?' z':'');pips.appendChild(s)}
function hud(){const Z=curZ;if(!Z)return;const lv=Math.round(Z.lvT),key=Z.id+lv+S.own[Z.id]+S.emp[Z.id];if(key===hudKey)return;hudKey=key;if(typeof bandeau==='function')bandeau();const I=Z.info;
  $('h-sur').textContent=I.sur;$('h-nom').textContent=I.nom;$('h-pm').textContent=I.pm;$('h-pp').textContent=I.pp;$('h-niv').textContent=sgn(lv)||'0';
  $('h-pal').textContent=palTxt(Z,lv);$('h-mai').innerHTML=S.own[Z.id]?'<b>◆ Zone à vous</b>':typeof maitreRival==='function'&&maitreRival(Z.id)?maitreRival(Z.id):S.emp[Z.id]?'Zone sauvage · <b>votre empreinte</b>':'Zone sauvage';if(typeof ficheHorde==='function')ficheHorde(Z);if(typeof ficheSiege==='function')ficheSiege(Z);
  [...pips.children].forEach((s,i)=>{const v=i-7;s.className='pip'+(v===0?' z':'')+(v<0&&lv<=v?' on m':'')+(v>0&&lv>=v?' on p':'')+(v===lv?' cur':'');s.style.color=v<0?'var(--moins)':v>0?'var(--plus)':'var(--laiton)'})}
function etatHud(){$('h-vies').innerHTML=[0,1,2].map(i=>`<span class="vie${i<S.hurt?' on':''}"></span>`).join('');$('h-deck').textContent=S.deck.length;$('h-mana').textContent=resTot();$('h-sec').textContent=secrets.filter(s=>s.found).length;if(typeof bandeau==='function')bandeau()}
let invKey='';
function invite(){let h='',cls='';const el=$('invite');
  if(mode==='monde'&&curZ){const a=curZ.alt,d=Math.hypot(a.x-P.x,a.z-P.z),r=restLeft(curZ);
    if(d<ALT_R)h=r>0?(cls='attente','La Pierre se repose encore '+fmt(r)):`<span class="ok">OK</span>${S.act[curZ.id]?'Éveiller':'Activer'} ${curZ.info.nom.split(',')[0]}`;
    else{const rel=((Math.atan2(a.x-P.x,a.z-P.z)-P.yaw)%TAU+TAU+PI)%TAU-PI;h=`<span class="fl" style="transform:rotate(${(-rel*180/PI).toFixed(0)}deg)">▲</span>Pierre d'éveil · ${Math.round(d)} m`+(r>0?' · repos '+fmt(r):'')}}
  else if(mode==='epreuve'&&E&&E.monde){const o=E.orbs.filter(o=>!o.got).sort((p,q)=>Math.hypot(p.x-P.x,p.z-P.z)-Math.hypot(q.x-P.x,q.z-P.z))[0];
    if(o){const rel=((Math.atan2(o.x-P.x,o.z-P.z)-P.yaw)%TAU+TAU+PI)%TAU-PI;h=`<span class="fl" style="transform:rotate(${(-rel*180/PI).toFixed(0)}deg)">▲</span>Gerbe la plus proche · ${Math.round(Math.hypot(o.x-P.x,o.z-P.z))} m`}}
  const k=h+cls;if(k!==invKey){invKey=k;el.innerHTML=h;el.className='hud invite '+cls}}
let toastT=0;function toast(a,b,c){$('t1').textContent=a;$('t2').textContent=b;$('t3').textContent=c||'';$('toast').classList.add('vu');toastT=6}
const mini=$('mini'),mc=mini.getContext('2d');
const TYPEG={CIT:'⛫',DON:'⬟',RES:'⬢',ANT:'✦',MAR:'⚖'};
function drawMini(T){const sp=Math.max(X1-X0,Z1-Z0)-100,s=300/sp,ox=sp/2-(X0+X1)/2,oz=sp/2-(Z0+Z1)/2;mc.clearRect(0,0,300,300);
  /* 2.4 : vos zones bien visibles (fond plein, bord d'or épais, fanion), zones sauvages sombres ; un symbole par type ;
     les Pierres où une activité vous attend clignotent */
  const pulse=.6+.4*Math.sin(T*4);
  for(const Z of ZN){mc.beginPath();Z.poly.forEach((p,i)=>{const x=(p[0]+ox)*s,y=(p[1]+oz)*s;i?mc.lineTo(x,y):mc.moveTo(x,y)});mc.closePath();
    const own=S.own[Z.id],k=(S.lv[Z.id]||0)/7;
    mc.fillStyle=own?(k<0?`rgba(110,160,200,${.45+.4*-k})`:k>0?`rgba(232,170,90,${.45+.4*k})`:'rgba(201,164,92,.42)'):`rgba(30,26,30,${.55})`;mc.fill();
    if(!own&&k){mc.fillStyle=k<0?`rgba(127,176,200,${.25*-k})`:`rgba(230,162,90,${.25*k})`;mc.fill()}
    mc.lineWidth=Z===curZ?3.5:own?3:1;mc.strokeStyle=Z===curZ?'#ffffff':own?'#ffd98a':'rgba(201,164,92,.45)';mc.stroke();
    const cx=(Z.c[0]+ox)*s,cy=(Z.c[1]+oz)*s;mc.font='bold 15px sans-serif';mc.textAlign='center';mc.textBaseline='middle';
    mc.fillStyle=own?'#1a1410':'rgba(239,231,214,.55)';mc.fillText(TYPEG[Z.mod||Z.id]||'·',cx,cy+9);
    if(own){mc.fillStyle='#ffd98a';mc.fillRect(cx-1,cy-17,2,12);mc.beginPath();mc.moveTo(cx+1,cy-17);mc.lineTo(cx+9,cy-14);mc.lineTo(cx+1,cy-11);mc.fill()}
    const a=Z.alt,x=(a.x+ox)*s,y=(a.z+oz)*s,r=restLeft(Z)>0,dispo=!r&&S.own[Z.id]&&!((Z.mod||Z.id)==='RES'&&(S.lv[Z.id]||0)>=3);
    const g=dispo?6+2*pulse:S.own[Z.id]?5:3.5;mc.fillStyle=r?'#7d7466':dispo?`rgba(255,217,138,${.6+.4*pulse})`:'rgba(201,164,92,.7)';mc.beginPath();mc.moveTo(x,y-g);mc.lineTo(x+g*.7,y);mc.lineTo(x,y+g);mc.lineTo(x-g*.7,y);mc.fill();
    if(dispo){mc.strokeStyle=`rgba(255,217,138,${.5*pulse})`;mc.lineWidth=1.5;mc.beginPath();mc.arc(x,y,g+4,0,TAU);mc.stroke()}}
  if(typeof dessinerRoutes==='function')dessinerRoutes(mc,s,ox,oz);
  if(typeof dessinerRivaux==='function')dessinerRivaux(mc,s,ox,oz);
  if(typeof dessinerHordes==='function')dessinerHordes(mc,s,ox,oz,T);
  if(typeof dessinerSiege==='function')dessinerSiege(mc,s,ox,oz,T);
  if(typeof dessinerTours==='function')dessinerTours(mc,s,ox,oz);
  if(typeof dessinerCaravanes==='function')dessinerCaravanes(mc,s,ox,oz,T);   /* lot 3 : caravanes sur les routes (caravanes.js) */
  const CL=typeof clarte==='function'?clarte():null;
  if(CL)for(const Z of ZN)if(CL[Z.id]!==undefined&&!S.own[Z.id]){const cx=(Z.c[0]+ox)*s,cy=(Z.c[1]+oz)*s;mc.font='bold 13px sans-serif';mc.textAlign='center';mc.fillStyle='#bfe3ff';mc.fillText(sgn(S.lv[Z.id])||'0',cx,cy-10)}
  for(const q of secrets){if(q.found||!q.cond(q.Z.lv)&&!(CL&&CL[q.Z.id]!==undefined))continue;const p=q.pos();mc.fillStyle='#ffe9a8';mc.beginPath();mc.arc((p[0]+ox)*s,(p[2]+oz)*s,2.4,0,TAU);mc.fill()}
  if(E&&E.monde)for(const o of E.orbs)if(!o.got){mc.fillStyle='#b8ff9a';mc.beginPath();mc.arc((o.x+ox)*s,(o.z+oz)*s,3.4+Math.sin(T*6),0,TAU);mc.fill()}
  const x=(P.x+ox)*s,y=(P.z+oz)*s,fx=Math.sin(P.yaw),fz=Math.cos(P.yaw);mc.fillStyle='#fff';mc.beginPath();mc.moveTo(x+fx*10,y+fz*10);mc.lineTo(x-fz*5-fx*5,y+fx*5-fz*5);mc.lineTo(x+fz*5-fx*5,y-fx*5-fz*5);mc.fill()}

/* ---------- Musique générative : une gamme, un timbre et une pulsation par zone, qui changent avec le niveau ---------- */
let AX=null,master,droneA,droneB,droneG,windG,windF,noiseBuf,delayIn,soundOn=true,nextT=0,stepI=0,noteI=3;
const ZA={
  CIT:{root:196,n:[0,3,7,10],z:[0,2,3,5,7,8,10],p:[0,2,4,5,7,9,11],wave:'triangle',bpm:nramp(30,60,132),dens:nramp(.22,.45,.8),dec:nramp(2.6,1.3,.4),vib:5,drone:nramp(.05,.05,.02),wind:nramp(.12,.03,0),wf:600,pat:['........','t.......','c.cc.c.c']},
  DON:{root:146.8,n:[0,1,5,7],z:[0,2,4,7,9],p:[0,2,4,7,9],wave:'sawtooth',bpm:nramp(40,66,150),dens:nramp(.12,.5,.9),dec:nramp(1.6,1.1,.3),vib:0,drone:nramp(.07,.06,.05),wind:nramp(.05,.04,.1),wf:180,pat:['........','t.......','t.rt.rrt']},
  RES:{root:174.6,n:[0,1,6,7],z:[0,3,5,7,10],p:[0,2,4,7,9],wave:'sine',bpm:nramp(52,70,48),dens:nramp(.1,.4,.5),dec:nramp(.5,1,3),vib:4,drone:nramp(.03,.04,.06),wind:nramp(.06,.07,.05),wf:1200,pat:['r..r.r....r','t..rt.r.','t.......']},
  ANT:{root:329.6,n:[0,1,3,7],z:[0,2,3,5,7,9,10],p:[0,2,4,6,7,9,11],wave:'sine',bpm:nramp(36,56,126),dens:nramp(.15,.4,.85),dec:nramp(2.4,1.4,.5),vib:6,drone:nramp(.04,.03,.03),wind:nramp(.02,.03,.02),wf:400,pat:['c..c.','........','t.ct.cc']},
  MAR:{root:196,n:[0,7,12,19],z:[0,2,3,5,7,9,10],p:[0,2,4,5,7,9,11],wave:'square',bpm:nramp(28,84,140),dens:nramp(.3,.6,.95),dec:nramp(2.2,.5,.22),vib:0,drone:nramp(.03,.02,.03),wind:nramp(.14,.04,0),wf:900,pat:['........','c...c...','rrcrrcrrcrrcr']}};
function initAudio(){if(AX){if(AX.resume)AX.resume();return}try{AX=new(window.AudioContext||window.webkitAudioContext)()}catch(_){return}
  master=AX.createGain();master.gain.value=soundOn?.55:0;const comp=AX.createDynamicsCompressor();master.connect(comp);comp.connect(AX.destination);
  delayIn=AX.createGain();const d=AX.createDelay(1);d.delayTime.value=.33;const fb=AX.createGain();fb.gain.value=.38;const wet=AX.createGain();wet.gain.value=.35;delayIn.connect(d);d.connect(fb);fb.connect(d);d.connect(wet);wet.connect(master);
  noiseBuf=AX.createBuffer(1,AX.sampleRate*2,AX.sampleRate);const nd=noiseBuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  droneG=AX.createGain();droneG.gain.value=0;const lp=AX.createBiquadFilter();lp.type='lowpass';lp.frequency.value=320;droneG.connect(lp);lp.connect(master);
  droneA=AX.createOscillator();droneB=AX.createOscillator();droneA.type='sawtooth';droneB.type='triangle';droneA.connect(droneG);droneB.connect(droneG);droneA.start();droneB.start();
  const ws=AX.createBufferSource();ws.buffer=noiseBuf;ws.loop=true;windF=AX.createBiquadFilter();windF.type='bandpass';windF.Q.value=.7;windG=AX.createGain();windG.gain.value=0;ws.connect(windF);windF.connect(windG);windG.connect(master);ws.start();
  nextT=AX.currentTime+.2;setInterval(sched,60)}
function env(g,t,a,d,v){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0008,t+a+d)}
function note(t,f,cfg,dec,v){const o=AX.createOscillator(),g=AX.createGain();o.type=cfg.wave;o.frequency.value=f;
  if(cfg.vib){const l=AX.createOscillator(),lg=AX.createGain();l.frequency.value=cfg.vib;lg.gain.value=f*.008;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dec+.3)}
  const k=cfg.wave==='sine'||cfg.wave==='triangle'?1:.35;env(g,t,dec>1?.08:.012,dec,v*k);o.connect(g);g.connect(master);g.connect(delayIn);o.start(t);o.stop(t+dec+.3)}
function perc(t,ty,v){v=v||1;if(ty==='t'){const o=AX.createOscillator(),g=AX.createGain();o.frequency.setValueAtTime(110,t);o.frequency.exponentialRampToValueAtTime(42,t+.22);env(g,t,.004,.3,.5*v);o.connect(g);g.connect(master);o.start(t);o.stop(t+.5);return}
  const s=AX.createBufferSource(),f=AX.createBiquadFilter(),g=AX.createGain();s.buffer=noiseBuf;f.type=ty==='c'?'bandpass':'highpass';f.frequency.value=ty==='c'?1900:6200;f.Q.value=ty==='c'?6:1;
  env(g,t,.002,ty==='c'?.06:.045,(ty==='c'?.5:.16)*v);s.connect(f);f.connect(g);g.connect(master);g.connect(delayIn);s.start(t,Math.random());s.stop(t+.2)}
function sched(){if(!AX||!curZ)return;const cfg=ZA[curZ.id],lv=curZ.lv,now=AX.currentTime;
  /* 17 nov. : la musique de zone (musique.js) remplace les notes au hasard ; le vent reste, le bourdon se tait */
  const mz=typeof musiqueTick==='function'&&musiqueTick(curZ,lv,now);
  droneA.frequency.setTargetAtTime(cfg.root/4,now,.5);droneB.frequency.setTargetAtTime(cfg.root/4*1.498,now,.5);droneG.gain.setTargetAtTime(mz?0:cfg.drone(lv)*1.6*(mode==='epreuve'&&!(E&&E.monde)?.5:1),now,.6);
  windF.frequency.setTargetAtTime(cfg.wf,now,.5);windG.gain.setTargetAtTime(cfg.wind(lv)*1.5,now,.6);if(mz)return;
  if(nextT<now-.5)nextT=now+.05;
  while(nextT<now+.25){const sc=lv<-2?cfg.n:lv>2?cfg.p:cfg.z,pat=cfg.pat[lv<-2?0:lv>2?2:1],ch=pat[stepI%pat.length];
    if(ch!=='.')perc(nextT,ch,.8);
    if(Math.random()<cfg.dens(lv)){noteI=clamp(noteI+((Math.random()*5)|0)-2,0,sc.length*2-1);const semi=sc[noteI%sc.length]+12*Math.floor(noteI/sc.length);
      note(nextT,cfg.root*Math.pow(2,semi/12),cfg,cfg.dec(lv),.11);if(curZ.id==='MAR'&&lv<-2)note(nextT,cfg.root*Math.pow(2,(semi+7)/12),cfg,cfg.dec(lv),.07)}
    stepI++;nextT+=60/cfg.bpm(lv)/2}}
const SIN={wave:'sine',vib:0};
function tick(){if(AX&&soundOn)note(AX.currentTime,880,SIN,.08,.05)}
function clack(){if(AX&&soundOn){note(AX.currentTime,660,SIN,.2,.08);note(AX.currentTime+.05,990,SIN,.25,.06)}}
function tone(i){if(AX&&soundOn)note(AX.currentTime,[392,494,587,330][i],{wave:'triangle',vib:0},.35,.14)}
function sfx(k){if(!AX||!soundOn)return;const t=AX.currentTime;
  if(k==='hit'){note(t,784,SIN,.25,.1);note(t+.06,1175,SIN,.3,.07)}
  if(k==='miss'){perc(t,'t',1.4);note(t,138,{wave:'sawtooth',vib:0},.35,.08)}
  if(k==='fail'){[0,-3,-7,-12].forEach((s,i)=>note(t+i*.16,220*Math.pow(2,s/12),{wave:'triangle',vib:4},.8,.11))}}
function fanfare(lv){if(!AX||!soundOn)return;const t=AX.currentTime,b=lv>=0?392:311,sc=lv>=0?[0,4,7,12,16,19]:[0,3,7,12,15,18];
  sc.forEach((s,i)=>note(t+i*.13,b*Math.pow(2,s/12),{wave:'triangle',vib:3},1.6,.12));perc(t,'t',1.6);perc(t+.78,'t',1.2)}
function toggleSound(){soundOn=!soundOn;if(master)master.gain.setTargetAtTime(soundOn?.55:0,AX.currentTime,.1)}

/* ---------- Boucle ---------- */
let last=performance.now(),T=0,frame=0,stepAcc=0,fpsA=0,fpsN=0,fpsT=0,autoQ=true;
function loop(t){requestAnimationFrame(loop);const dt=Math.min(.05,(t-last)/1000);last=t;T+=dt;frame++;pollPad();
  /* Transformation d'une zone : au lieu de reconstruire le terrain à chaque image (trop lourd pour une télé),
     on avance par petits bonds espacés (au plus un toutes les 0,45 s et une zone à la fois). */
  const rate=mode==='mue'?(mue&&mue.rep?1.4:.42):3.2;let rebuilt=false;
  for(const Z of ZN){if(Math.abs(Z.lv-Z.lvT)>1e-4){Z.acc=(Z.acc||0)+dt;
      if(!rebuilt&&(Z.acc>=.45||Math.abs(Z.lvT-Z.lv)<=Z.acc*rate+1e-4)){const d=Z.lvT-Z.lv,s=Math.sign(d)*Math.min(Math.abs(d),Z.acc*rate);Z.lv+=s;Z.acc=0;
        if(Math.abs(Z.lvT-Z.lv)<1e-4)Z.lv=Z.lvT;rebuild(Z);Z.update(Z.lv);placeAlt(Z);rebuilt=true;CULL.dirty=true}}else Z.acc=0;Z.tick(T,dt)}
  for(const Z of ZN){const a=Z.alt,r=restLeft(Z)>0;a.st.rotation.z=T*.4;a.gem.rotation.y=T*1.2;a.gem.material=r?altRest:altGlow;a.li.intensity=r?.25:1.1+.3*Math.sin(T*2.2+Z.i)}
  if(CB)cbTick(dt);verifierRencontre();
  if(mode==='mue'&&mue){stepMue(dt);if(mue)camMue(dt);else camFollow(dt)}
  else{if(mode==='epreuve'&&E){E.t+=dt;E.step(dt,T);if(E&&!E.monde)E.draw(T)}else if(mode==='monde')move(dt);else if(!started){P.yaw+=dt*.05;P.y=stand(P.x,P.z,1e3).g}else move(0);
    if(!(mode==='epreuve'&&E&&!E.monde))camFollow(dt)}
  const Z=zoneAt(P.x,P.z);if(Z&&Z!==curZ&&mode==='monde'&&started&&Z.plus&&dReg(Z.c)>REG_IN&&!navigator.webdriver){   /* bancs d'essai automatisés (Playwright) : pas de voyage, la région reste fixe */
  curZ=Z;voyagerRegion(Z.c,'jeu')}
  else if(Z&&Z!==curZ){curZ=Z;hudKey='';if(mode==='monde'&&started)toast(TYPE[Z.id].kind+' · niveau '+(sgn(S.lv[Z.id])||'0'),Z.info.nom,palTxt(Z,S.lv[Z.id]))}hud();invite();
  stepAtmo(mode==='mue'&&mue?mue.Z:curZ,dt,T,P.x,P.y,P.z);hero.userData.pl.intensity=curZ===ANT?.12:.55;
  if(AX&&curZ===DON&&DON.lv<=-4&&P.walked-stepAcc>2.4){stepAcc=P.walked;perc(AX.currentTime,'t',1.2)}
  let hi=0;for(const q of secrets){const ok=!q.found&&q.cond(q.Z.lv);q.m.visible=ok;if(!ok)continue;const p=q.pos();q.m.position.set(p[0],p[1]+Math.sin(T*2+p[0])*.18,p[2]);q.m.rotation.y=T*1.3;
    secHalo.P[hi*3]=p[0];secHalo.P[hi*3+1]=p[1];secHalo.P[hi*3+2]=p[2];const b=.5+.2*Math.sin(T*3);secHalo.C[hi*3]=2.2*b;secHalo.C[hi*3+1]=1.5*b;secHalo.C[hi*3+2]=.5*b;hi++;
    if(started&&mode==='monde'&&Math.hypot(p[0]-P.x,p[1]-P.y-1,p[2]-P.z)<2.6){q.found=true;{const k=q.k,av=S.deck.indexOf(k)>=0,cn=typeof carteDeSecret==='function'?carteDeSecret(q):'',ap=S.deck.indexOf(k)>=0;toast('Secret · '+q.Z.info.nom,q.titre,q.texte+(!cn?'':!av&&ap?` Carte utilitaire gagnée : « ${cn} ».`:av?` Sa carte « ${cn} » est déjà dans votre paquet.`:` Votre paquet est plein : la carte « ${cn} » attend au Comptoir des Citadelles.`))}etatHud();save();if(AX&&soundOn){const t=AX.currentTime;[0,4,7,12].forEach((s,i)=>note(t+i*.09,523*Math.pow(2,s/12),SIN,.9,.1))}}}
  for(let i=hi;i<32;i++)secHalo.P[i*3+1]=-999;secHalo.up();
  if(toastT>0){toastT-=dt;if(toastT<=0)$('toast').classList.remove('vu')}
  if(typeof majPoussiere==='function')majPoussiere(dt,T);
  if(frame%6===0)drawMini(T);
  if(frame%120===0&&started){S.pos=[P.x,P.z,P.yaw];save()}
  /* qualité automatique : si l'image tombe sous 22 images/s pendant 5 s, on baisse la résolution */
  if(autoQ&&T>3){fpsT+=dt;fpsN++;if(fpsT>5){const fps=fpsN/fpsT;fpsT=0;fpsN=0;if(CB){fpsT=0;fpsN=0}else if(fps<(QI>=2?27:22)&&QI>0){QI--;try{localStorage.setItem('mz-tv-q2',QI)}catch(_){}resize()}else autoQ=false}}
  if(!CB){cullScene();draw(T)}
  if(SOL_LEGER){const v=CB?'hidden':'';if(canvas.style.visibility!==v)canvas.style.visibility=v}}   /* 2.42.3 : sur Xbox, le canevas 3D sort de l'affichage pendant un combat (écran opaque) : une couche plein écran de moins */   /* pendant un combat, l'écran est opaque : on ne dessine plus la 3D (plus léger pour la télé) */
addEventListener('resize',resize);
resize();etatHud();tp(hasSave&&S.pos?(zoneAt(S.pos[0],S.pos[1])||CIT).id:'CIT');if(hasSave&&S.pos){P.x=S.pos[0];P.z=S.pos[1];P.yaw=S.pos[2];P.y=stand(P.x,P.z,1e3).g+.1}
plusTables();if(typeof recoAssemblees==='function')recoAssemblees();titre();requestAnimationFrame(loop);
/* 2.15 : au réveil d'un voyage entre régions, on reprend directement la partie (ou on en commence une neuve) */
(()=>{let a=null;try{a=localStorage.getItem('mz-apres');localStorage.removeItem('mz-apres')}catch(_){}
  if(a==='neuf')startGame(true);else if(a==='jeu'&&hasSave)startGame(false)})();
window.MZ={pause(){save();if(AX)AX.suspend()},P,ZN,S,tp,secrets,act,held,style(on){STYLE_ON=on},border:styleBorder,win:()=>E&&endEpreuve(true),lose:()=>E&&endEpreuve(false),get mode(){return mode},get E(){return E},get CB(){return CB},combat(id,k){startCombat(ZB[id],k||'renc')},start(){startGame(true)},set(id,lv){const Z=ZB[id];Z.lvT=Z.lv=lv;S.lv[id]=lv;rebuild(Z);terrainAll();Z.update(lv);placeAlt(Z);CULL.dirty=true},A};
Object.assign(window.MZ,{rival:s=>typeof rivalAgit==='function'?rivalAgit(true,s):null,rivalArrive:g=>typeof rivalArrive==='function'?rivalArrive(g):null});
if(typeof domaines==='function')Object.assign(window.MZ,{domaines,verrouillee,defenseMonde,statutZone,prendre:domPrendre,cycle:()=>cycle()});
if(typeof hordeTest==='function')Object.assign(window.MZ,{horde:hordeTest,hordeArrive,poleEnvahisseur,hordeDefense:defenseHorde});
if(typeof amenagerTest==='function')Object.assign(window.MZ,{amenager:amenagerTest,piegesDonjon,reparerPieges,piegesHorde,donjonsTenus});
if(typeof tessellesTest==='function')Object.assign(window.MZ,{tesselles:tessellesTest,comptoir:id=>openComptoir(ZB[id||'CIT']),commerceCycle});
if(typeof pacteTest==='function')Object.assign(window.MZ,{pacte:pacteTest,rompre:()=>romprePacte('menu'),pacteAgit:pacteAgitTest,pacteResout:resoudreContesteMaison});
if(typeof tourTest==='function')Object.assign(window.MZ,{tour:tourTest,tourTombe:id=>tomberTour(id,'Test.'),defenseTours,preavisTours});
if(typeof caravanesTest==='function')Object.assign(window.MZ,{caravanes:caravanesTest,piller:pillerTest,escorter:escorterCaravane,caravanesCycle});
if(typeof loisEtat==='function')Object.assign(window.MZ,{lois:loisEtat,loiForcer,loiRenforcer,loisCycle,loisTest:LOIS_TEST});
if(typeof siegeTest==='function')Object.assign(window.MZ,{siege:siegeTest,siegeVague,citadellesEpiques,epiquesForcer,palmares:lirePalmares,victoire:()=>{const b=bilanMonde(citadellesEpiques()[0]);ecranVictoire(b,[]);return b}});
