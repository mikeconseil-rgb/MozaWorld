/* MozaWorld 2.8 : exploration épurée (18 novembre, idée 9 de l'évaluation graphique, choisie par l'utilisateur).
   Par défaut, l'écran laisse la place au paysage : la fiche de la zone en haut à gauche n'apparaît que quelques secondes
   en entrant dans une zone, l'aide des commandes s'efface après la première minute, la minicarte rapetisse et s'estompe.
   Le nom de la zone s'affiche en grand au centre à l'entrée (le toast existant), avec une entrée plus cinématographique.
   RB à la manette (ou Tab au clavier) passe de l'interface épurée à l'interface complète, et le choix est retenu. */
(function(){
const st=document.createElement('style');st.textContent=`
body.epure .hud.cart,body.epure .hud.aide,body.epure .hud.carte{transition:opacity .9s ease,scale .9s ease}
body.epure:not(.zone-neuve) .hud.cart{opacity:0}
body.epure.aide-vue .hud.aide{opacity:0}
body.epure .hud.carte{scale:.72;transform-origin:0 100%;opacity:.8}
body.epure .hud.jauge{scale:.88;transform-origin:50% 100%}
.toast.vu .t2{animation:mzTitre 1.4s cubic-bezier(.2,.7,.2,1) both}
.toast.vu .t1{animation:mzSur 1.2s ease both}
.toast.vu .t3{animation:mzSur 1.6s ease .35s both}
@keyframes mzTitre{from{opacity:0;letter-spacing:.35em;filter:blur(6px)}to{opacity:1;letter-spacing:normal;filter:none}}
@keyframes mzSur{from{opacity:0;translate:0 calc(var(--u)*.8)}to{opacity:1;translate:0 0}}
.mz-bascule{position:fixed;left:50%;top:calc(var(--u)*5.2);translate:-50% 0;z-index:40;pointer-events:none;font-size:calc(var(--u)*1.05);letter-spacing:.18em;text-transform:uppercase;
  color:var(--laiton2,#e8c77f);background:rgba(13,12,15,.72);border:1px solid rgba(201,164,92,.45);padding:calc(var(--u)*.45) calc(var(--u)*1.4);opacity:0;transition:opacity .5s}
.mz-bascule.vu{opacity:1}
/* boucle 4 (22 nov.) : en mode épuré, l'aide tient sur une ligne ; la plaque de nom sous la minicarte se retire
   tant que la fiche de zone (en haut à gauche) est affichée, pour que le nom n'apparaisse qu'une fois. */
.hud.aide .aide-une{display:none}
body.epure .hud.aide>div:not(.aide-une){display:none}
body.epure .hud.aide .aide-une{display:block;white-space:nowrap;font-size:.86em;letter-spacing:.02em}
body.epure .hud.aide{padding-top:calc(var(--u)*.55);padding-bottom:calc(var(--u)*.55)}
/* la minicarte n'a plus de fond : son flou d'arrière-plan (hérité de .cadre) ne dessinait qu'un rectangle terne, et coûtait */
.hud.carte.mc2{backdrop-filter:none;-webkit-backdrop-filter:none}
.hud.carte .mc-nom{transition:opacity .6s ease}
body:not(.epure) .hud.carte .mc-nom,body.epure.zone-neuve .hud.carte .mc-nom{opacity:0}
@media (prefers-reduced-motion:reduce){.toast.vu .t1,.toast.vu .t2,.toast.vu .t3{animation:none}}
`;document.head.appendChild(st);

let epure=true;try{epure=localStorage.getItem('mz-epure')!=='0'}catch(_){}
const B=document.body;B.classList.toggle('epure',epure);
const note=document.createElement('div');note.className='mz-bascule';B.appendChild(note);let noteT=null;
/* boucle 4 (22 nov.) : l'aide s'efface après 12 s sans entrée (ou 45 s de jeu au plus) ; RB ou Tab la fait revenir */
let calme=0,joue=0;const entree=()=>{calme=0};
function basculer(){epure=!epure;calme=0;joue=0;B.classList.remove('aide-vue');B.classList.toggle('epure',epure);try{localStorage.setItem('mz-epure',epure?'1':'0')}catch(_){}
  note.textContent=epure?'Interface épurée · RB pour tout afficher':'Interface complète · RB pour épurer';note.classList.add('vu');
  clearTimeout(noteT);noteT=setTimeout(()=>note.classList.remove('vu'),2200);if(typeof tick==='function')try{tick()}catch(_){}}
window.addEventListener('keydown',e=>{entree();if((e.key==='Tab'||e.key==='h'||e.key==='H')&&typeof mode!=='undefined'&&mode==='monde'){e.preventDefault();basculer()}});
const pb0=padBouton;padBouton=function(n){entree();if(n==='rb'&&typeof mode!=='undefined'&&mode==='monde'){basculer();return}return pb0.apply(this,arguments)};
/* boucle 4 (22 nov.) : l'aide d'une ligne, ajoutée en tête de chaque panneau d'aide (clavier/télécommande et manette) */
for(const a of document.querySelectorAll('.hud.aide')){const d=document.createElement('div');d.className='aide-une';
  d.innerHTML=a.classList.contains('aide-pad')?'<i>stick G</i> marcher · <i>stick D</i> tourner · <span class="bt a">A</span> agir · <span class="bt">RB</span> plus':'<i>▲▼</i> marcher · <i>◀▶</i> tourner · <i>OK</i> agir · <i>Tab</i> plus';
  a.insertBefore(d,a.firstChild)}

/* la fiche de zone reste 9 s à l'entrée d'une zone ; l'aide d'une ligne s'efface après 12 s de calme (boucle 4, 22 nov.) */
let zv=null,zT=null;window.addEventListener('pointerdown',entree);
setInterval(()=>{if(typeof curZ==='undefined')return;
  if(curZ&&curZ!==zv){zv=curZ;B.classList.add('zone-neuve');clearTimeout(zT);zT=setTimeout(()=>B.classList.remove('zone-neuve'),9000)}
  if(typeof mode!=='undefined'&&mode==='monde'&&typeof started!=='undefined'&&started){joue+=.5;calme+=.5;if(calme>=12||joue>=45)B.classList.add('aide-vue')}},500);
})();

/* boucle 6 (24 nov.) : la Pierre sans anneau d'éditeur. Le tore d'or couché autour de chaque Pierre (main.js, rayon ALT_R*.62),
   brillant, mince et posé à plat sur un sol qui ondule (à moitié enterré par endroits), se lisait comme un « gizmo » d'éditeur 3D.
   Il devient une incrustation au sol :
   - matériau mat (metalness 0, roughness .8), teinté à 60 % par la couleur de la zone (ZCOL), un peu plus sombre que le sol
     qui l'entoure (une pierre sertie, pas un trait lumineux) ; un matériau par zone au plus, en cache ;
   - aplati au ras du sol : au lieu d'écraser le tore (scale.y ≈ .3), qui restait un fil plat enterré dès que le terrain monte,
     on le sertit : un filet biseauté de 48 cm (bord, arête, bord), découpé en 96 tesselles aux tons inégaux (384 triangles au
     lieu de 576), dont chaque sommet suit la hauteur du terrain (ground, core.js), 3 à 6 cm au-dessus ; décalage de profondeur
     pour ne pas scintiller. Une bordure de mosaïque autour de la Pierre, dans l'esprit Girih du monde ;
   - sans ombre portée, mais il reçoit l'ombre comme le sol, pour ne pas luire dans la pénombre.
   La gemme et l'étoile du sommet restent en or : le signe de la Pierre, c'est l'or en hauteur.
   Aucun appel de dessin en plus (le même maillage, une géométrie neuve). main.js n'est pas touché : on retrouve le tore par sa
   forme (TorusGeometry de rayon ALT_R*.62) ; si rien n'est trouvé, on sort sans erreur. */
(function(){
if(typeof THREE==='undefined'||typeof ZN==='undefined'||typeof ALT_R==='undefined')return;
const R=ALT_R*.62,W=.24,N=96,TONS=[1,.7,.9,.62,.96,.78],cache={},OR=new THREE.Color(0xc9a45c),v=new THREE.Vector3();
const estTore=o=>o&&o.isMesh&&o.geometry&&(o.userData.mzSerti||o.geometry.type==='TorusGeometry'&&o.geometry.parameters&&Math.abs(o.geometry.parameters.radius-R)<.01);
/* clarté du sol sous l'anneau : moyenne des couleurs de sommets du terrain (core.js) à moins de 1,2 m du cercle, dans la plage
   de sommets de la zone. Clarté de l'anneau = .11 + 35 % de celle du sol (au plus .42) : sur les sols sombres (CIT, DON045 au
   niveau 0, sol vers .05) un ton de pierre à .13, sur le dallage blanc du Marché (.92) un gris moyen au lieu d'un trait noir */
const cs=new THREE.Color(),hs={};
function clarteSol(Zs,a){try{const T=typeof terrain!=='undefined'&&terrain&&terrain.geometry;if(!T||Zs.vmin===undefined)return .14;
  const P=T.attributes.position.array,C=T.attributes.color.array;let r=0,g=0,b=0,n=0;
  for(let k=Zs.vmin;k<=Zs.vmax;k++){const d=Math.hypot(P[k*3]-a.x,P[k*3+2]-a.z)-R;if(d>-1.2&&d<1.2){r+=C[k*3];g+=C[k*3+1];b+=C[k*3+2];n++}}
  if(!n)return .14;cs.setRGB(r/n,g/n,b/n).getHSL(hs);return Math.min(.42,.11+hs.l*.35)}catch(_){return .14}}
/* un matériau par zone au plus : créé une fois, puis seulement recoloré quand le sol de la zone change (mue) */
function matZone(Zs,l){const zc=(typeof ZCOL!=='undefined'&&ZCOL[Zs.id])||'#c9a45c';
  /* teinté à 60 % par la zone : la teinte est celle de la zone (passer de l'or au bleu par le cercle chromatique donnait du
     vert), la saturation mêle or et zone à 60 %, plafonnée pour rester un ton de pierre ; la clarté suit le sol : sous la
     lumière forte du monde (soleil + ciel dépassent 2), une couleur moyenne ressortait presque blanche, comme un trait de sélection */
  const a={},b={};OR.getHSL(a);new THREE.Color(zc).getHSL(b);
  const m=cache[Zs.id]||(cache[Zs.id]=new THREE.MeshStandardMaterial({roughness:.8,metalness:0,flatShading:true,vertexColors:true,
    polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));
  m.color.setHSL(b.h,Math.min(.32,a.s*.4+b.s*.6),l);return m}
/* le filet suit le terrain : sommets dans le repère de la Pierre (groupe tourné et posé au sol par placeAlt) */
function filet(g,G0){g.updateMatrixWorld(true);const gy=g.position.y,rr=[R-W,R,R+W],dy=[.03,.06,.03],H=[];
  for(let i=0;i<=N;i++){const a=i/N*Math.PI*2,c=Math.cos(a),s=Math.sin(a);
    for(let j=0;j<3;j++){v.set(rr[j]*c,0,rr[j]*s);g.localToWorld(v);H.push(rr[j]*c,ground(v.x,v.z)-gy+dy[j],rr[j]*s)}}
  /* triangles non partagés : chaque tesselle (un pas de l'anneau) a son propre ton, tiré d'une suite fixe.
     Au re-sertissage (mue), la géométrie existante est réécrite sur place : ni allocation ni objet neuf à chaque bond de la mue */
  const G=G0||new THREE.BufferGeometry(),neuf=!G0;
  const P=neuf?new Float32Array(N*2*6*3):G.attributes.position.array,C=neuf?new Float32Array(N*2*6*3):null;let k=0;
  const pt=(n,t)=>{P[k]=H[n*3];P[k+1]=H[n*3+1];P[k+2]=H[n*3+2];if(C)C[k]=C[k+1]=C[k+2]=t;k+=3};
  for(let i=0;i<N;i++){const t=TONS[(i*7+(i>>2))%TONS.length];
    for(let j=0;j<2;j++){const a=i*3+j,b=a+1,c=a+3,d=a+4;pt(a,t);pt(b,t);pt(c,t);pt(b,t);pt(d,t);pt(c,t)}}
  if(neuf){G.setAttribute('position',new THREE.BufferAttribute(P,3));G.setAttribute('color',new THREE.BufferAttribute(C,3))}
  G.computeVertexNormals();
  /* face visible vers le ciel : si la première normale descend, on retourne chaque triangle */
  if(G.attributes.normal.getY(0)<0){for(let q=0;q<P.length;q+=9)for(let e=0;e<3;e++){const x=P[q+3+e];P[q+3+e]=P[q+6+e];P[q+6+e]=x}G.computeVertexNormals()}
  G.attributes.position.needsUpdate=true;G.attributes.normal.needsUpdate=true;G.boundingSphere=null;G.boundingBox=null;
  return G}
function incruster(Z){try{const g=Z&&Z.alt&&Z.alt.g;if(!g)return;
  for(const o of g.children){if(!estTore(o))continue;
    /* la couleur est celle de la zone où la Pierre se dresse : plusieurs Pierres partagent le même emplacement qu'une autre zone
       (DON030 sur DON045, RES091 sur RES374…, données existantes) ; sans cela, l'anneau prenait la couleur d'une zone voisine */
    const Zs=typeof zoneAt==='function'&&zoneAt(Z.alt.x,Z.alt.z)||Z;o.material=matZone(Zs,clarteSol(Zs,Z.alt));o.castShadow=false;o.receiveShadow=true;
    if(typeof ground==='function'){if(o.userData.mzSerti)filet(g,o.geometry);else{const G=filet(g);o.geometry.dispose();o.geometry=G;o.userData.mzSerti=true}o.rotation.set(0,0,0);o.position.set(0,0,0);o.scale.set(1,1,1)}
    else{o.scale.set(1,1,.3);o.position.y=.08}/* repli : le tore couché (rotation.x = π/2), aplati sur son axe local z, la verticale */
  }}catch(_){}}
ZN.forEach(incruster);
/* après une mue, main.js replace la Pierre (placeAlt) sur le terrain neuf : le filet est re-serti ; si la Pierre venait à être
   reconstruite, l'anneau neuf est repris ici de la même façon */
if(typeof placeAlt==='function'){const pa0=placeAlt;placeAlt=function(Z){const r=pa0.apply(this,arguments);incruster(Z);return r}}
})();
