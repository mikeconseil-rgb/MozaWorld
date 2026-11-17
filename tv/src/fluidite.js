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
