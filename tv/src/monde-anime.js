/* MozaWorld 2.8 : le monde bouge (18 novembre, idée 5 de l'évaluation graphique, choisie par l'utilisateur).
   1. Le vent : la végétation et tout ce qui est haut et mince ploie doucement (déformation dans le shader, aucun calcul par objet).
      Plus fort vers −7 (rafales), plus doux vers +7.
   2. Braises et lucioles autour du héros : vers −7 des braises montent et s'éteignent, vers +7 des lucioles de la couleur du pôle
      dérivent et clignotent. Un seul nuage de points.
   3. Des créatures errent dans la zone, à 20 à 70 m du héros : elles marchent, broutent, s'enfuient si on approche.
      Bêtes à quatre pattes, insectes ailés pour les Antres, feux follets pour les Donjons. Purement décoratives.
   Rien de tout cela en qualité « Fluide ». */
(function(){
const VENT={uT:{value:0},uV:{value:1}};
/* 1. le vent, injecté dans les matériaux des objets hauts et minces (arbres, roseaux, bannières, poteaux) */
const vus=new Set();
function venter(mat){if(vus.has(mat)||!mat.isMeshStandardMaterial)return;vus.add(mat);
  const prev=mat.onBeforeCompile;mat.onBeforeCompile=(sh,r)=>{if(prev)prev(sh,r);sh.uniforms.uT=VENT.uT;sh.uniforms.uV=VENT.uV;
    sh.vertexShader='uniform float uT;uniform float uV;\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
#ifdef USE_INSTANCING
{float h=max(transformed.y,0.0);vec4 wp=instanceMatrix*vec4(0.,0.,0.,1.);float ph=uT*1.6+wp.x*.045+wp.z*.06;
 float a=uV*.011*h*h/(1.+h*.09);transformed.x+=(sin(ph)+.35*sin(ph*2.7))*a;transformed.z+=cos(ph*.83)*a*.6;}
#endif`)};
  mat.customProgramCacheKey=()=>'vent';mat.needsUpdate=true}
/* chaque maillage haut et mince reçoit sa propre copie du matériau (même programme), pour que les murs et les toits qui
   partageaient ce matériau restent immobiles ; on repasse toutes les 3 s pour les maillages refaits par une mue */
function chercherVent(){scene.traverse(o=>{if(!o.isInstancedMesh||o.userData.vent)return;o.userData.vent=1;const g=o.geometry;if(!g.boundingBox)g.computeBoundingBox();const b=g.boundingBox,h=b.max.y-Math.max(0,b.min.y),w=Math.max(b.max.x-b.min.x,b.max.z-b.min.z);
  if(h>2.5&&h<32&&w<h*1.1&&o.material&&o.material.isMeshStandardMaterial){o.material=o.material.clone();venter(o.material)}})}

/* 2. braises et lucioles */
const N=150,gP=new THREE.BufferGeometry(),pP=new Float32Array(N*3),vP=[];
for(let i=0;i<N;i++){pP[i*3]=(Math.random()-.5)*60;pP[i*3+1]=Math.random()*10;pP[i*3+2]=(Math.random()-.5)*60;vP.push([Math.random()*6.28,.5+Math.random(),Math.random()])}
gP.setAttribute('position',new THREE.BufferAttribute(pP,3));
const mP=new THREE.PointsMaterial({size:.65,map:halo,color:0xffb060,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,fog:true});
const oP=new THREE.Points(gP,mP);oP.frustumCulled=false;scene.add(oP);const cP=new THREE.Color(),cB=new THREE.Color(0xff6a2a);
function majParticules(dt,T,Z){const lv=Z?(S.lv[Z.id]||0):0,an=wneg(lv),ap=wpos(lv),vis=QI>0&&mode==='monde'&&(an>.1||ap>.1);oP.visible=vis;if(!vis)return;
  const mana=Z.plus?Z.d.mana:({CIT:'Glace',DON:'Feu',ANT:'Eau',MAR:'Glace',RES:'Vent'})[Z.id];
  cP.set(an>ap?'#ff6a2a':((PMANA[mana]||PMANA.Pierre)[1]));mP.color.lerp(cP,Math.min(1,dt*2));
  const k=Math.max(an,ap);mP.opacity=(an>ap?.75:.55+.35*Math.sin(T*5.3))*Math.min(1,k*1.6);mP.size=an>ap?.45:.75;
  for(let i=0;i<N;i++){const j=i*3,w=vP[i];w[0]+=dt*w[1];
    if(an>ap){pP[j]+=Math.sin(w[0]*1.3)*dt*.8;pP[j+1]+=dt*(1.2+w[2]*2.2);pP[j+2]+=Math.cos(w[0])*dt*.8}   /* braises : elles montent */
    else{pP[j]+=Math.sin(w[0])*dt*1.1;pP[j+1]+=Math.sin(w[0]*1.7)*dt*.5;pP[j+2]+=Math.cos(w[0]*.9)*dt*1.1}   /* lucioles : elles errent */
    let dx=pP[j]-P.x,dz=pP[j+2]-P.z;if(dx>30)pP[j]-=60;else if(dx<-30)pP[j]+=60;if(dz>30)pP[j+2]-=60;else if(dz<-30)pP[j+2]+=60;
    const gy=P.y-1.5;if(pP[j+1]<gy)pP[j+1]+=11;else if(pP[j+1]>gy+11)pP[j+1]-=11}
  gP.attributes.position.needsUpdate=true}

/* 3. créatures qui errent */
const sombre=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.8,flatShading:true});
function bete(sorte){const g=new THREE.Group(),m=sombre.clone(),parts={};g.userData={m,parts,sorte};
  const add=(geo,x,y,z,mat)=>{const o=new THREE.Mesh(geo,mat||m);o.position.set(x,y,z);o.castShadow=!g.children.length;g.add(o);return o};   /* seul le corps porte une ombre */
  if(sorte==='aile'){parts.corps=add(new THREE.OctahedronGeometry(.5,0).scale(.7,.6,1.6),0,0,0);
    const ga=new THREE.PlaneGeometry(1.8,.9).translate(.9,0,0),ma=new THREE.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:.55,side:THREE.DoubleSide,roughness:.4});g.userData.ma=ma;
    parts.ag=add(ga,0,.15,0,ma);parts.ad=add(ga.clone().scale(-1,1,1),0,.15,0,ma);parts.ag.rotation.x=parts.ad.rotation.x=-Math.PI/2}
  else if(sorte==='feu'){const mb=new THREE.MeshBasicMaterial({color:0xffffff});g.userData.mb=mb;parts.corps=add(new THREE.IcosahedronGeometry(.45,0),0,0,0,mb);
    parts.queue=add(new THREE.ConeGeometry(.3,1.3,5).rotateX(Math.PI/2).translate(0,0,-.8),0,0,0,mb)}
  else{parts.corps=add(new THREE.BoxGeometry(1.1,.8,2),0,1.15,0);parts.tete=add(new THREE.BoxGeometry(.7,.6,.7),0,1.55,1.2);
    parts.p=[[-.4,.75],[.4,.75],[-.4,-.75],[.4,-.75]].map(([x,z])=>add(new THREE.BoxGeometry(.22,.8,.22).translate(0,-.4,0),x,.8,z))}
  g.visible=false;scene.add(g);return g}
const BETES=[];let zoneB=null;
/* 21 nov. (plantages) : une réserve de bêtes par sorte, réutilisées d'une zone à l'autre. Avant, chaque changement de sorte
   retirait les bêtes de la scène sans libérer leurs géométries : une dizaine de géométries perdues par zone traversée. */
const BETES_POOL={};function betePool(sorte,i){const l=BETES_POOL[sorte]||(BETES_POOL[sorte]=[]);return l[i]||(l[i]=bete(sorte))}
function peupler(Z){zoneB=Z;const mod=Z.mod||Z.id,sorte=mod==='ANT'?'aile':mod==='DON'?'feu':'pattes',col=(typeof ZCOL!=='undefined'&&ZCOL[Z.id])||'#c9a45c';
  const n=sorte==='pattes'?5:6;while(BETES.length<n)BETES.push(null);
  for(let i=0;i<BETES.length;i++){let b=BETES[i];if(b&&b.userData.sorte!==sorte){b.visible=false;b.userData.actif=false;b=BETES[i]=null}if(i>=n){if(b){b.visible=false;b.userData.actif=false}continue}
    if(!b)b=BETES[i]=betePool(sorte,i);const u=b.userData;u.m.color.set(col).lerp(new THREE.Color(0x2a2420),.35);if(u.ma)u.ma.color.set(col);if(u.mb)u.mb.color.set(col).multiplyScalar(2.2);
    const a=Math.random()*TAU,r=25+Math.random()*45;b.position.set(P.x+Math.cos(a)*r,0,P.z+Math.sin(a)*r);u.cap=Math.random()*TAU;u.v=0;u.t=Math.random()*3;u.ph=Math.random()*6;u.actif=true;b.visible=true}}
function majBetes(dt,T,Z){const vis=QI>0&&mode==='monde'&&!!Z;for(const b of BETES)if(b)b.visible=vis&&b.userData.actif;if(!vis)return;if(Z!==zoneB)peupler(Z);
  for(const b of BETES){if(!b||!b.userData.actif)continue;const u=b.userData,dx=b.position.x-P.x,dz=b.position.z-P.z,d=Math.hypot(dx,dz);
    u.t-=dt;if(d<10){u.cap=Math.atan2(dx,dz);u.vc=u.sorte==='feu'?9:7;u.t=1.5}           /* trop près : elle s'enfuit */
    else if(u.t<=0){u.t=2+Math.random()*4;u.vc=Math.random()<.35?0:(u.sorte==='pattes'?2.2:3.5);u.cap+=(Math.random()-.5)*2.2}
    if(d>85){const a=Math.random()*TAU;b.position.x=P.x+Math.cos(a)*45;b.position.z=P.z+Math.sin(a)*45}   /* trop loin : elle revient près du héros */
    u.v+=((u.vc||0)-u.v)*Math.min(1,dt*3);let nx=b.position.x+Math.sin(u.cap)*u.v*dt,nz=b.position.z+Math.cos(u.cap)*u.v*dt;
    if(zoneAt(nx,nz)!==Z){u.cap+=Math.PI;nx=b.position.x;nz=b.position.z}b.position.x=nx;b.position.z=nz;
    const ry=b.rotation.y,dr=((u.cap-ry+Math.PI*3)%(TAU))-Math.PI;b.rotation.y=ry+dr*Math.min(1,dt*3);
    u.ph+=dt*(1.5+u.v*2.2);const g=ground(b.position.x,b.position.z),p=u.parts;
    if(u.sorte==='pattes'){b.position.y=g+Math.abs(Math.sin(u.ph))*.08*u.v;p.p.forEach((l,i)=>l.rotation.x=Math.sin(u.ph+(i%3?Math.PI:0))*.55*Math.min(1,u.v));
      p.tete.position.y=1.55-(u.v<.3?.45+Math.sin(T*2+u.ph)*.08:0)}                        /* à l'arrêt, elle broute */
    else if(u.sorte==='aile'){b.position.y=g+3+Math.sin(u.ph*.4)*1.2;const f=Math.sin(T*22+u.ph)*.7;p.ag.rotation.z=f;p.ad.rotation.z=-f}
    else{b.position.y=g+1.6+Math.sin(u.ph*.7)*.6;p.corps.scale.setScalar(1+Math.sin(T*9+u.ph)*.15)}}}

/* la boucle : après chaque image du jeu */
let vu=-1e9,last=0;
function tourne(t){requestAnimationFrame(tourne);const dt=Math.min(.05,(t-last)/1000||0);last=t;
  if(typeof started!=='undefined'&&started&&t-vu>3000){vu=t;chercherVent()}
  if(typeof mode==='undefined')return;const Z=typeof curZ!=='undefined'?curZ:null,lv=Z?(S.lv[Z.id]||0):0;
  VENT.uT.value+=dt;VENT.uV.value=QI>0?(1+wneg(lv)*1.6-wpos(lv)*.4)*(QI>=2?1:.7):0;
  majParticules(dt,VENT.uT.value,Z);majBetes(dt,VENT.uT.value,Z)}
requestAnimationFrame(tourne);
window.MZanime={VENT,BETES,chercherVent};
})();
