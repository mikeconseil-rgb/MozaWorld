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
    const idx=[];let any=false;
    for(let j=cj;j<je;j++)for(let i=ci;i<ie;i++){const q=(j*(GW-1)+i)*6;for(let k=0;k<6;k++)idx.push(src[q+k])}
    const x0=X0+ci*CELL,x1=X0+ie*CELL,z0=Z0+cj*CELL,z1=Z0+je*CELL;
    for(let j=cj;j<=je&&!any;j+=2)for(let i=ci;i<=ie;i+=2){const x=X0+i*CELL,z=Z0+j*CELL;if(zoneAt(x,z)||ZN.some(Q=>dPoly(Q.poly,x,z)<60)){any=true;break}}
    if(!any)continue;   /* carreau loin de toute zone : du roc dans le vide, jamais vu */
    const cg=new THREE.BufferGeometry();for(const n in A)cg.setAttribute(n,A[n]);cg.setIndex(new THREE.BufferAttribute(new Uint32Array(idx),1));
    const m=new THREE.Mesh(cg,terrain.material);m.receiveShadow=true;m.castShadow=true;m.frustumCulled=false;scene.add(m);
    CULL.list.push({o:m,c:new THREE.Vector3((x0+x1)/2,10,(z0+z1)/2),r:Math.hypot(x1-x0,z1-z0,200)/2,fixe:true})}
  terrain.visible=false;CULL.carreaux=true}

/* ---------- Boucle 2 (19 nov. 2026) : budget repris (ombres limitées à leur boîte, coupe selon le brouillard) ----------
   Mesuré au banc (Belle, rendu logiciel) : à Berestograd, la passe d'ombre envoyait ~229 000 triangles et ~100 appels
   par image, alors que la boîte d'ombre ne fait que 240 m de côté autour du héros. Ici :
   (a) la passe d'ombre ne voit plus que ce qui touche sa boîte (marge 30 m) et les carreaux de terrain proches du héros ;
       la boîte est calée sur la grille de ses texels (les bords d'ombre ne scintillent plus quand on marche) ;
   (b) changer de qualité allume ou coupe vraiment les ombres (en Fluide, aucune passe d'ombre) ;
   (c) la distance de coupe suit le brouillard : ce qui y est noyé à plus de 99 % n'est plus envoyé ;
   (d) les flocons tout près de la caméra ne font plus de gros disques flous.
   Aucune lumière ajoutée ni retirée (sinon tous les matériaux se recompileraient). */
const OMB={fr:new THREE.Frustum(),pm:new THREE.Matrix4(),sp:new THREE.Sphere(),cach:[],
  x:new THREE.Vector3(),y:new THREE.Vector3(),z:new THREE.Vector3(),up:new THREE.Vector3(0,1,0),d:new THREE.Vector3()};
const OMB_MARGE=30,OMB_SOL=130,OMB_BOITE=240;
sun.shadow.camera.far=300;sun.shadow.camera.updateProjectionMatrix(); /* le soleil est à 260 m de sa cible : 300 suffit, et la profondeur gagne en précision */
/* (a) passe d'ombre : le temps de l'appel, on masque ce qui est hors de la boîte, puis on rend l'état exact */
{const SM=renderer.shadowMap,_ombre=SM.render;
 SM.render=function(lights,sc,cam){
  if(!sun.castShadow||sc!==scene||!lights||!lights.length)return _ombre.call(SM,lights,sc,cam);
  const S=sun.shadow,C=S.camera;S.updateMatrices(sun);
  OMB.pm.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse);OMB.fr.setFromProjectionMatrix(OMB.pm);
  for(const p of OMB.fr.planes)p.constant+=OMB_MARGE;   /* plans tournés vers l'intérieur : la boîte grandit de 30 m de chaque côté */
  const hs=TCH*CELL/2,K=OMB.cach;K.length=0;
  for(const e of CULL.list){const o=e.o;if(!o.visible||e.r<0)continue;let dehors;
    if(e.fixe){const dx=Math.max(0,Math.abs(e.c.x-P.x)-hs),dz=Math.max(0,Math.abs(e.c.z-P.z)-hs);dehors=Math.hypot(dx,dz)>OMB_SOL} /* carreau de terrain */
    else{OMB.sp.center.copy(e.c);OMB.sp.radius=e.r;dehors=!OMB.fr.intersectsSphere(OMB.sp)}
    if(dehors){o.visible=false;K.push(o)}}
  try{_ombre.call(SM,lights,sc,cam)}finally{for(let i=0;i<K.length;i++)K[i].visible=true;K.length=0}}}
/* Calage sur la grille des texels, dans le plan de la lumière. stepAtmo vient de placer la cible sur le héros (P, pas la caméra) ;
   on arrondit sa position au texel près (pas = 240 m / taille de la carte) et le soleil suit du même décalage. */
function calerOmbre(){if(!sun.castShadow)return;const T=sun.target.position,d=OMB.d.subVectors(sun.position,T);
  if(d.lengthSq()<1e-6)return;OMB.z.copy(d).normalize();OMB.x.crossVectors(OMB.up,OMB.z);
  if(OMB.x.lengthSq()<1e-8)OMB.x.set(1,0,0);else OMB.x.normalize();OMB.y.crossVectors(OMB.z,OMB.x);
  const pas=OMB_BOITE/sun.shadow.mapSize.x,u=OMB.x.dot(T),v=OMB.y.dot(T);
  T.addScaledVector(OMB.x,Math.round(u/pas)*pas-u).addScaledVector(OMB.y,Math.round(v/pas)*pas-v);sun.position.copy(T).add(d)}
/* (b) qualité : en Fluide, plus de passe d'ombre du tout ; ailleurs, la carte d'ombre prend la taille du réglage */
const _resizeOmb=resize;
resize=function(){_resizeOmb();const sh=QUAL().sh;renderer.shadowMap.enabled=sun.castShadow=sh>0;
  if(sh>0&&sun.shadow.mapSize.x!==sh){if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null}sun.shadow.mapSize.set(sh,sh)}};
/* (c) coupe selon le brouillard. FogExp2 : à 2,3/densité, il reste 0,5 % de l'objet ; +40 m de marge, entre 180 et 620 m.
   Densité visée (AT.fog) ; si le brouillard lissé est encore plus clair (on entre dans une zone plus brumeuse), on garde
   le plus clair des deux : rien ne surgit, rien ne s'efface sous les yeux. Même atténuation en hauteur que stepAtmo. */
function densiteVisee(){const fh=AT.fh,y=camera.position.y,h=fh>.5?(y<-1.5?.1:lerp(1,.1,sst(fh-5,fh+7,y))):1;
  return Math.min(AT.fog||0,A.fog||0)*h}
const _cullOmb=cullScene;
cullScene=function(){const d=densiteVisee();CULL.far=d>0?clamp(2.3/d+40,180,620):620;calerOmbre();
  if(CULL.dirty||++MIET.n>=90)prepMiettes();_cullOmb()};
/* (c bis) Les miettes. Au banc, à Berestograd, ~160 petits objets ordinaires (pièces des pierres d'éveil et des décors des
   autres zones, à plus de 300 m) coûtaient chacun un appel de dessin pour moins d'un pixel une fois passés dans la brume.
   Pendant le rendu seulement, on masque un objet dont la taille à l'écran × ce qui reste après le brouillard est sous
   1 pixel (0,75 pixel pour ce qui ignore le brouillard : lanternes, halos). Jamais à moins de 80 m de la caméra.
   L'état « visible » du jeu est rendu à l'identique juste après l'image : la logique du jeu ne voit rien. */
const MIET={l:[],cach:[],n:0,v:new THREE.Vector3(),t:new THREE.Vector2()};
function prepMiettes(){MIET.n=0;const L=MIET.l;L.length=0;const dans=new Set();for(const e of CULL.list)dans.add(e.o);
  scene.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||!o.frustumCulled||dans.has(o)||o===sky)return;const g=o.geometry;if(!g)return;
    if(!g.boundingSphere)g.computeBoundingSphere();if(!g.boundingSphere||!(g.boundingSphere.radius>0))return;
    const ms=Array.isArray(o.material)?o.material:[o.material];
    L.push({o,b:g.boundingSphere,s:o.matrixWorld.getMaxScaleOnAxis(),fog:ms.some(m=>m&&m.fog&&!m.isShaderMaterial)})})}
function masquerMiettes(){const K=MIET.cach;K.length=0;if(!MIET.l.length)return;
  const cp=camera.position,kpx=renderer.getDrawingBufferSize(MIET.t).y/Math.tan(camera.fov*D2R/2),fd=scene.fog?scene.fog.density:0;
  for(const e of MIET.l){const o=e.o;if(!o.visible)continue;MIET.v.copy(e.b.center).applyMatrix4(o.matrixWorld);
    const r=e.b.radius*e.s,d=cp.distanceTo(MIET.v)-r;if(d<80)continue;
    let px=r/d*kpx;if(e.fog){const x=d*fd;px*=Math.exp(-x*x)}
    if(px<(e.fog?1:.75)){o.visible=false;K.push(o)}}}
function rendreMiettes(){const K=MIET.cach;for(let i=0;i<K.length;i++)K[i].visible=true;K.length=0}
const _drawMiet=draw;
draw=function(t){masquerMiettes();try{_drawMiet(t)}finally{rendreMiettes()}};
/* (d) flocons : taille plafonnée à 18 px, fondu entre 1,5 et 5 m devant la caméra (plus de gros disques flous) */
if(typeof weather!=='undefined'&&weather&&weather.material){const wm=weather.material,_obc=wm.onBeforeCompile;
  wm.onBeforeCompile=function(s,r){if(_obc)_obc.call(this,s,r);
    s.vertexShader='varying float vPres;\n'+s.vertexShader.replace('#include <fog_vertex>','#include <fog_vertex>\ngl_PointSize=min(gl_PointSize,18.);vPres=smoothstep(1.5,5.,-mvPosition.z);');
    s.fragmentShader='varying float vPres;\n'+s.fragmentShader.replace('#include <fog_fragment>','#include <fog_fragment>\ngl_FragColor.a*=vPres;')};
  wm.customProgramCacheKey=()=>'meteo-b2';wm.needsUpdate=true}
