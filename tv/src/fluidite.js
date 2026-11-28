/* MozaWorld TV 2.0 : fluidité (retour du 17 novembre : « ça rame un peu »).
   La scène envoie ~630 000 triangles à chaque image, parce que les objets en série (InstancedMesh) ne sont jamais
   écartés : leur boîte englobante ne couvre que le premier exemplaire, alors on les dessinait tous, partout.
   Ici on calcule pour chaque série une sphère qui couvre tous ses exemplaires, et on ne dessine que ce qui est
   devant la caméra et pas perdu dans la brume. Recalculé après chaque mue (les exemplaires bougent). */
const CULL={list:[],dirty:true,fr:new THREE.Frustum(),pm:new THREE.Matrix4(),sp:new THREE.Sphere(),far:620};
const _m4=new THREE.Matrix4(),_v=new THREE.Vector3();
function cullPrep(){CULL.list=CULL.list.filter(e=>e.fixe);if(!CULL.carreaux)terrainCarreaux();
  scene.traverse(o=>{if(!o.isInstancedMesh||o.count<1)return;const g=o.geometry;if(!g.boundingSphere)g.computeBoundingSphere();
    const gr=g.boundingSphere.radius,gc=g.boundingSphere.center;let mnx=1e9,mny=1e9,mnz=1e9,mxx=-1e9,mxy=-1e9,mxz=-1e9,sc=0;const a=o.instanceMatrix.array;
    for(let i=0;i<o.count;i++){_m4.fromArray(a,i*16);_v.copy(gc).applyMatrix4(_m4);
      const s=Math.max(Math.hypot(a[i*16],a[i*16+1],a[i*16+2]),Math.hypot(a[i*16+4],a[i*16+5],a[i*16+6]),Math.hypot(a[i*16+8],a[i*16+9],a[i*16+10]));
      if(s===0)continue;sc=Math.max(sc,s);
      mnx=Math.min(mnx,_v.x);mny=Math.min(mny,_v.y);mnz=Math.min(mnz,_v.z);mxx=Math.max(mxx,_v.x);mxy=Math.max(mxy,_v.y);mxz=Math.max(mxz,_v.z)}
    if(mnx>mxx){CULL.list.push({o,c:new THREE.Vector3(),r:-1});return}
    const c=new THREE.Vector3((mnx+mxx)/2,(mny+mxy)/2,(mnz+mxz)/2);
    CULL.list.push({o,c,r:Math.hypot(mxx-mnx,mxy-mny,mxz-mnz)/2+gr*sc})});
  CULL.dirty=false}
function cullScene(){if(CULL.dirty)cullPrep();
  CULL.pm.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);CULL.fr.setFromProjectionMatrix(CULL.pm);
  const cp=camera.position;
  for(const e of CULL.list){if(e.r<0){e.o.visible=false;continue}
    CULL.sp.center.copy(e.c);CULL.sp.radius=e.r;
    e.o.visible=CULL.fr.intersectsSphere(CULL.sp)&&cp.distanceTo(e.c)-e.r<CULL.far}}
/* Le terrain est une seule grande maille (~276 000 triangles) dessinée en entier : on la découpe en carreaux
   qui partagent les mêmes sommets (les mues continuent de la modifier d'un coup), et on n'envoie que les carreaux visibles. */
const TCH=40;
function terrainCarreaux(){const g=terrain.geometry,A=g.attributes,src=g.index.array;
  for(let cj=0;cj<GH-1;cj+=TCH)for(let ci=0;ci<GW-1;ci+=TCH){const ie=Math.min(GW-1,ci+TCH),je=Math.min(GH-1,cj+TCH);
    let any=false;
    const x0=X0+ci*CELL,x1=X0+ie*CELL,z0=Z0+cj*CELL,z1=Z0+je*CELL;
    for(let j=cj;j<=je&&!any;j+=2)for(let i=ci;i<=ie;i+=2){const x=X0+i*CELL,z=Z0+j*CELL;if(zoneAt(x,z)||zDist(x,z,60)<60){any=true;break}}
    if(!any)continue;   /* carreau loin de toute zone : du roc dans le vide, jamais vu */
    const cg=new THREE.BufferGeometry();for(const n in A)cg.setAttribute(n,A[n]);/* 2.54.1 : index copié par rangées dans un tableau typé (au lieu de millions de push) */
    const w=(ie-ci)*6,idx=new Uint32Array((je-cj)*w);for(let j=cj,o=0;j<je;j++,o+=w){const q=(j*(GW-1)+ci)*6;idx.set(src.subarray(q,q+w),o)}
    cg.setIndex(new THREE.BufferAttribute(idx,1));
    const m=new THREE.Mesh(cg,terrain.material);m.receiveShadow=true;m.castShadow=true;m.frustumCulled=false;scene.add(m);
    CULL.list.push({o:m,c:new THREE.Vector3((x0+x1)/2,10,(z0+z1)/2),r:Math.hypot(x1-x0,z1-z0,200)/2,fixe:true})}
  terrain.visible=false;CULL.carreaux=true;
  /* 21 nov. (plantages) : la grande maille n'est plus dessinée ; on rend la mémoire de son index (un million de sommets,
     environ 25 Mo en mémoire et autant sur la carte graphique). Les attributs restent : les carreaux les partagent et les
     renvoient à la carte graphique à la prochaine image. */
  g.dispose();g.setIndex(null)}

/* ---------- Boucle 2 (19 nov. 2026) : budget repris (ombres limitées à leur boîte, coupe selon le brouillard) ----------
   Mesuré au banc (Belle, rendu logiciel) : à Berestograd, la passe d'ombre envoyait ~229 000 triangles et ~100 appels
   par image, alors que la boîte d'ombre ne fait que 240 m de côté autour du héros. Ici :
   (a) la passe d'ombre ne voit plus que ce qui touche sa boîte (marge 30 m), terrain compris ;
       la boîte est calée sur la grille de ses texels (les bords d'ombre ne scintillent plus quand on marche) ;
   (b) choisir une qualité au menu allume ou coupe vraiment les ombres (en Fluide, aucune passe d'ombre) ;
   (c) la distance de coupe suit le brouillard : ce qui y est noyé à plus de 99 % n'est plus envoyé ;
   (d) les flocons tout près de la caméra ne font plus de gros disques flous.
   Aucune lumière ajoutée ni retirée (sinon tous les matériaux se recompileraient). */
const OMB={fr:new THREE.Frustum(),pm:new THREE.Matrix4(),sp:new THREE.Sphere(),cach:[],
  x:new THREE.Vector3(),y:new THREE.Vector3(),z:new THREE.Vector3(),up:new THREE.Vector3(0,1,0),d:new THREE.Vector3()};
const OMB_MARGE=30,OMB_BOITE=240,OMB_AVAL=200;
/* Boucle 2, reprise du 19 nov. 2026 (refus du testeur : ombres perdues près du héros, une fois sur deux sous charge).
   Cause principale : la baisse AUTOMATIQUE de qualité (main.js, quand l'image tombe sous 27 images/s, ce qui arrive vite
   sur une machine chargée) passait par notre enveloppe de resize et coupait les ombres en arrivant à « Fluide ».
   Les ombres dépendaient donc du rythme des images. Désormais :
   - seul le choix du joueur (menu Qualité, ou réglage gardé au démarrage) allume ou coupe les ombres ; la baisse
     automatique ne touche que la définition de l'image, comme avant cette boucle ;
   - la passe d'ombre ne masque que des objets réellement hors de sa boîte ; pour les carreaux de terrain, plus de rayon
     fixe de 130 m (qui oubliait les collines placées face au soleil bas) : seuls tombent ceux qui sont hors de la boîte,
     ou à plus de 200 m du côté opposé au soleil ;
   - les « miettes » ne valent que pour la caméra : elles sont rendues visibles avant la passe d'ombre, et leur tri se
     fait sur les matrices de l'image en cours (plus de positions ni d'échelles d'il y a 90 images) ;
   - la profondeur de la boîte (far) suit l'élévation du soleil : tout ce qui reçoit une ombre dans la boîte est entre
     near et far, même soleil rasant. */
/* (iii) far : la cible est à 260 m du soleil. Un sol à d mètres derrière le héros (vu du soleil) reste dans la boîte tant que
   d·sin(él) ≤ 120 m ; il est alors à 260 + 120/tan(él) m du soleil, plus 60 m de relief. Entre 300 et 520 (valeur d'origine). */
function farOmbre(sinEl){const s=clamp(sinEl,.05,1);return clamp(260+120*Math.sqrt(1-s*s)/s+60,300,520)}
/* (a) passe d'ombre : le temps de l'appel, on masque ce qui est hors de la boîte (+30 m), puis on rend l'état exact */
{const SM=renderer.shadowMap,_ombre=SM.render;
 SM.render=function(lights,sc,cam){
  if(!SM.autoUpdate&&!SM.needsUpdate)return;
  if(sc!==scene||!SM.enabled||!sun.castShadow||!lights||!lights.length)return _ombre.call(SM,lights,sc,cam);
  rendreMiettes();   /* les miettes ne servent qu'à la caméra (la liste de la passe principale est déjà faite) */
  const S=sun.shadow,C=S.camera;S.updateMatrices(sun);
  OMB.pm.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse);OMB.fr.setFromProjectionMatrix(OMB.pm);
  for(const p of OMB.fr.planes)p.constant+=OMB_MARGE;   /* plans normalisés, tournés vers l'intérieur : 30 m de plus de chaque côté */
  /* Carreaux de terrain : même test, plus un seul raccourci sûr. Un carreau à plus de 200 m du héros (au-delà du coin de la
     boîte, 170 m, plus la marge) et du côté opposé au soleil ne peut jeter son ombre que plus loin encore : jamais près du héros. */
  const K=OMB.cach,hs=TCH*CELL/2,d=OMB.d.subVectors(sun.position,sun.target.position).normalize(),sx=d.x,sz=d.z;K.length=0;
  for(const e of CULL.list){const o=e.o;if(!o.visible||e.r<0)continue;let dehors;
    if(e.fixe){const ex=e.c.x-P.x,ez=e.c.z-P.z;dehors=ex*sx+ez*sz<0&&Math.hypot(Math.max(0,Math.abs(ex)-hs),Math.max(0,Math.abs(ez)-hs))>OMB_AVAL}
    if(!dehors){OMB.sp.center.copy(e.c);OMB.sp.radius=e.r;dehors=!OMB.fr.intersectsSphere(OMB.sp)}
    if(dehors){o.visible=false;K.push(o)}}
  try{_ombre.call(SM,lights,sc,cam)}finally{for(let i=0;i<K.length;i++)K[i].visible=true;K.length=0}}}
/* (ii) Calage sur la grille des texels, dans le plan de la lumière. stepAtmo vient de replacer la cible sur le héros (P, pas la
   caméra) et le soleil à 260 m d'elle, à chaque image, quel que soit dt (et donc aussi juste après MZ.tp ou MZ.set) ;
   on arrondit la cible au texel près (pas = 240 m / taille de la carte) et le soleil suit du même décalage : la direction et la
   distance soleil-cible ne changent pas, le héros reste au centre de la boîte à un demi-texel près. */
function calerOmbre(){if(!sun.castShadow)return;const T=sun.target.position,d=OMB.d.subVectors(sun.position,T),L=d.length();
  if(L<1e-3)return;OMB.z.copy(d).divideScalar(L);OMB.x.crossVectors(OMB.up,OMB.z);
  if(OMB.x.lengthSq()<1e-8)OMB.x.set(1,0,0);else OMB.x.normalize();OMB.y.crossVectors(OMB.z,OMB.x);
  const pas=OMB_BOITE/sun.shadow.mapSize.x,u=OMB.x.dot(T),v=OMB.y.dot(T);
  T.addScaledVector(OMB.x,Math.round(u/pas)*pas-u).addScaledVector(OMB.y,Math.round(v/pas)*pas-v);sun.position.copy(T).add(d);
  const C=sun.shadow.camera,f=farOmbre(OMB.z.y);if(Math.abs(C.far-f)>2){C.far=f;C.updateProjectionMatrix()}}
sun.shadow.camera.far=farOmbre(Math.sin(30*D2R));sun.shadow.camera.updateProjectionMatrix();
/* (b) qualité : choisir « Fluide » au menu coupe vraiment la passe d'ombre ; ailleurs la carte prend la taille du réglage.
   La baisse automatique (main.js : autoQ, juste après la remise à zéro de fpsT et fpsN) ne touche pas aux ombres :
   ce que l'on voit ne doit pas dépendre du rythme des images. */
function baisseAuto(){try{return autoQ&&frame>0&&fpsT===0&&fpsN===0}catch(_){return false}}
const _resizeOmb=resize;
/* 21 nov. (plantages : écran noir parfois en changeant la qualité sur Xbox). Les ombres restent « allumées » pour les
   shaders (aucun changement d'état d'éclairage, donc aucun risque de recompilation) ; en Fluide, la passe d'ombre ne tourne
   plus (autoUpdate), sa carte est rendue à la mémoire et un biais de -1 rend tout éclairé : même image qu'avant. */
function appliquerOmbre(){const sh=QUAL().sh,SM=renderer.shadowMap;SM.enabled=true;sun.castShadow=true;
  if(sh>0){SM.autoUpdate=true;sun.shadow.bias=-.0006;
    if(sun.shadow.mapSize.x!==sh){if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null}sun.shadow.mapSize.set(sh,sh)}}
  else{SM.autoUpdate=false;sun.shadow.bias=-1;if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null}}}
/* sur Xbox (sol allégé) : l'image de rendu demi-flottante multiéchantillonnée est le plus gros bloc de la carte graphique.
   Belle passe de ×4 à ×2 ; Splendide (1920 px, là où l'écran noir revenait le plus souvent, 22 nov.) passe à ×0 : la
   définition reste pleine et le FXAA lisse les bords. Image de rendu : ~120 Mo → ~25 Mo en Splendide. */
if(typeof SOL_LEGER!=='undefined'&&SOL_LEGER)for(const q of QUALS){if(q.w>=1920){q.ms=0;q.fx=1}else if(q.ms>2)q.ms=2}
resize=function(){_resizeOmb();if(baisseAuto())return;appliquerOmbre()};
appliquerOmbre();resize();
/* (c) coupe selon le brouillard. FogExp2 : à 2,3/densité, il reste 0,5 % de l'objet ; +40 m de marge, entre 180 et 620 m.
   Densité visée (AT.fog) ; si le brouillard lissé est encore plus clair (on entre dans une zone plus brumeuse), on garde
   le plus clair des deux : rien ne surgit, rien ne s'efface sous les yeux. Même atténuation en hauteur que stepAtmo. */
function densiteVisee(){const fh=AT.fh,y=camera.position.y,h=fh>.5?(y<-1.5?.1:lerp(1,.1,sst(fh-5,fh+7,y))):1;
  return Math.min(AT.fog||0,A.fog||0)*h}
const _cullOmb=cullScene;
cullScene=function(){const d=densiteVisee();CULL.far=d>0?clamp(2.3/d+40,180,620):620;calerOmbre();
  if(CULL.dirty||MIET.nb!==scene.children.length)prepMiettes();_cullOmb();MIET.arme=true};
/* (c bis) Les miettes. Au banc, à Berestograd, ~160 petits objets ordinaires (pièces des pierres d'éveil et des décors des
   autres zones, à plus de 300 m) coûtaient chacun un appel de dessin pour moins d'un pixel une fois passés dans la brume.
   Pour la seule vue de la caméra, on masque un objet dont la taille à l'écran × ce qui reste après le brouillard est sous
   1 pixel (0,75 pixel pour ce qui ignore le brouillard : lanternes, halos). Jamais à moins de 80 m de la caméra.
   Le tri se fait dans scene.onBeforeRender, c'est-à-dire APRÈS la mise à jour des matrices de l'image en cours : positions,
   échelles, géométrie et brouillard sont lus à l'instant (un objet déplacé par MZ.tp, regonflé par MZ.set ou tout neuf est
   jugé tel qu'il est). La liste ne fait que nommer les candidats ; elle est refaite à chaque mue (CULL.dirty) ou quand la
   scène gagne ou perd un enfant, jamais au compte des images. L'état « visible » du jeu est rendu à l'identique avant la
   passe d'ombre et après l'image : la logique du jeu ne voit rien. */
const MIET={l:[],cach:[],nb:-1,arme:false,v:new THREE.Vector3(),t:new THREE.Vector2()};
function prepMiettes(){MIET.nb=scene.children.length;const L=MIET.l;L.length=0;const dans=new Set();for(const e of CULL.list)dans.add(e.o);
  scene.traverse(o=>{if(o.isMesh&&!o.isInstancedMesh&&o.frustumCulled&&!dans.has(o)&&o!==sky&&o.geometry)L.push(o)})}
function masquerMiettes(){const K=MIET.cach;K.length=0;if(!MIET.l.length)return;
  const cp=camera.position,kpx=renderer.getDrawingBufferSize(MIET.t).y/Math.tan(camera.fov*D2R/2),fd=scene.fog?scene.fog.density:0;
  for(const o of MIET.l){if(!o.visible)continue;const g=o.geometry;if(!g)continue;if(!g.boundingSphere)g.computeBoundingSphere();
    const b=g.boundingSphere;if(!b||!(b.radius>0))continue;MIET.v.copy(b.center).applyMatrix4(o.matrixWorld);
    const r=b.radius*o.matrixWorld.getMaxScaleOnAxis(),d=cp.distanceTo(MIET.v)-r;if(d<80)continue;
    const m=o.material,fog=Array.isArray(m)?m.some(q=>q&&q.fog&&!q.isShaderMaterial):!!(m&&m.fog&&!m.isShaderMaterial);
    let px=r/d*kpx;if(fog){const x=d*fd;px*=Math.exp(-x*x)}
    if(px<(fog?1:.75)){o.visible=false;K.push(o)}}}
function rendreMiettes(){const K=MIET.cach;for(let i=0;i<K.length;i++)K[i].visible=true;K.length=0}
{const _obr=scene.onBeforeRender;
 scene.onBeforeRender=function(r,s,c,rt){if(_obr)_obr.call(this,r,s,c,rt);if(MIET.arme&&c===camera){MIET.arme=false;masquerMiettes()}}}
const _drawMiet=draw;
draw=function(t){try{_drawMiet(t)}finally{MIET.arme=false;rendreMiettes()}};
/* (d) flocons : taille plafonnée à 18 px, fondu entre 1,5 et 5 m devant la caméra (plus de gros disques flous) */
/* boucle 4 (22 nov.) : plafond abaissé à 10 px (les disques de 15 à 18 px faisaient des taches sur l'objectif) ;
   l'opacité reste multipliée par vPres. */
if(typeof weather!=='undefined'&&weather&&weather.material){const wm=weather.material,_obc=wm.onBeforeCompile;
  wm.onBeforeCompile=function(s,r){if(_obc)_obc.call(this,s,r);
    s.vertexShader='varying float vPres;\n'+s.vertexShader.replace('#include <fog_vertex>','#include <fog_vertex>\ngl_PointSize=min(gl_PointSize,10.);vPres=smoothstep(1.5,5.,-mvPosition.z);');
    s.fragmentShader='varying float vPres;\n'+s.fragmentShader.replace('#include <fog_fragment>','#include <fog_fragment>\ngl_FragColor.a*=vPres;')};
  wm.customProgramCacheKey=()=>'meteo-b2';wm.needsUpdate=true}
