'use strict';
/* MozaWorld, démo « Cinq Tuiles ». Noyau : mosaïque, terrain, ciel, météo, rendu, physique du héros. */
const PI=Math.PI,TAU=PI*2,D2R=PI/180,SC=2,L=100*SC; /* SC : agrandissement des tuiles (arête 100 m → 200 m) */
const clamp=(x,a,b)=>x<a?a:x>b?b:x,lerp=(a,b,t)=>a+(b-a)*t;
const sst=(a,b,x)=>{x=clamp((x-a)/(b-a),0,1);return x*x*(3-2*x)};
let _s=20261110;const rnd=()=>{_s=(_s*1664525+1013904223)>>>0;return _s/4294967296},rr=(a,b)=>a+(b-a)*rnd();
const hash=(x,y)=>{const n=Math.sin(x*127.1+y*311.7)*43758.5453;return n-Math.floor(n)};
function vnoise(x,y){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
  return lerp(lerp(hash(xi,yi),hash(xi+1,yi),u),lerp(hash(xi,yi+1),hash(xi+1,yi+1),u),v)}
const fbm=(x,y)=>vnoise(x,y)*.5+vnoise(x*2.03+7,y*2.03+3)*.25+vnoise(x*4.1+1,y*4.1+9)*.15+vnoise(x*8.2,y*8.2)*.1;
const N1=(x,z)=>fbm(x*.012,z*.012),N2=(x,z)=>fbm(x*.09+40,z*.09+17),N3=(x,z)=>Math.abs(fbm(x*.03+91,z*.03+55)-.5)*2;
const LIN=h=>{const c=new THREE.Color(h).convertSRGBToLinear();return[c.r,c.g,c.b]};
const KX=n=>n===5?[-7,-4,0,4,7]:[-7,0,7];
function ramp(...hex){const k=hex.map(LIN),xs=KX(k.length);
  return(lv,o)=>{let i=0;while(i<xs.length-2&&lv>xs[i+1])i++;const t=clamp((lv-xs[i])/(xs[i+1]-xs[i]),0,1),a=k[i],b=k[i+1];
    o[0]=lerp(a[0],b[0],t);o[1]=lerp(a[1],b[1],t);o[2]=lerp(a[2],b[2],t);return o}}
function nramp(...v){const xs=KX(v.length);return lv=>{let i=0;while(i<xs.length-2&&lv>xs[i+1])i++;return lerp(v[i],v[i+1],clamp((lv-xs[i])/(xs[i+1]-xs[i]),0,1))}}
const tc=[0,0,0],tc2=[0,0,0];
const mix3=(o,a,b,t)=>{o[0]=lerp(a[0],b[0],t);o[1]=lerp(a[1],b[1],t);o[2]=lerp(a[2],b[2],t);return o};

/* ---------- Mosaïque : un décagone et quatre tuiles posées sur quatre de ses arêtes ---------- */
const R10=L/(2*Math.sin(18*D2R)),VX=[];
for(let k=0;k<10;k++)VX.push([R10*Math.cos((-162+36*k)*D2R),R10*Math.sin((-162+36*k)*D2R)]);
function walk(a,b,angs){const pts=[a,b];let d=Math.atan2(b[1]-a[1],b[0]-a[0]),p=b;
  for(const al of angs){d+=(180-al)*D2R;p=[p[0]+L*Math.cos(d),p[1]+L*Math.sin(d)];pts.push(p)}return pts}
const inPoly=(P,x,z)=>{let c=false;for(let i=0,j=P.length-1;i<P.length;j=i++){const a=P[i],b=P[j];
  if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])c=!c}return c};
const dSeg=(x,z,a,b)=>{const dx=b[0]-a[0],dz=b[1]-a[1],t=clamp(((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz),0,1);return Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t)};
const dPoly=(P,x,z)=>{let m=1e9;for(let i=0;i<P.length;i++)m=Math.min(m,dSeg(x,z,P[i],P[(i+1)%P.length]));return m};
const ZN=[];
function zone(id,poly,axFn){const c=[0,0];for(const p of poly){c[0]+=p[0]/poly.length;c[1]+=p[1]/poly.length}
  const ax=axFn?axFn(poly,c):Math.atan2(c[1],c[0]),Z={id,i:ZN.length,poly,c,ax,cs:Math.cos(ax),sn:Math.sin(ax),lv:0,lvT:0,verts:[],
    loc(x,z){const dx=x-c[0],dz=z-c[1];return[dx*this.cs+dz*this.sn,-dx*this.sn+dz*this.cs]},
    w(u,v){return[c[0]+u*this.cs-v*this.sn,c[1]+u*this.sn+v*this.cs]},
    gh(u,v,lv){const p=this.w(u,v);return groundZ(this,p[0],p[1],lv)},
    inside(u,v,m){const p=this.w(u,v);return inPoly(poly,p[0],p[1])&&dPoly(poly,p[0],p[1])>(m||0)},
    update(){},tick(){}};
  ZN.push(Z);return Z}
const CIT=zone('CIT',VX,()=>-PI/2);
const ANT=zone('ANT',walk(VX[1],VX[0],[72,216,72,72]));
const RES=zone('RES',walk(VX[2],VX[1],[144,72,144,144]));
const MAR=zone('MAR',walk(VX[3],VX[2],[72,108]),P=>Math.atan2(P[3][1]-P[1][1],P[3][0]-P[1][0]));
const DON=zone('DON',walk(VX[4],VX[3],[108,108,108]));
const zoneAt=(x,z)=>{for(const Z of ZN)if(inPoly(Z.poly,x,z))return Z;return null};
function groundZ(Z,x,z,lv){const d=dPoly(Z.poly,x,z),q=Z.loc(x,z);return Z.h(q[0],q[1],lv===undefined?Z.lv:lv,N1(x,z),N2(x,z),N3(x,z),x,z)*sst(0,16,d)}
const ground=(x,z)=>{const Z=zoneAt(x,z);return Z?groundZ(Z,x,z):-30};

/* ---------- Rendu ---------- */
const canvas=document.getElementById('vue');
const renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.NoToneMapping;renderer.outputEncoding=THREE.LinearEncoding;
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x808080,.004);
const camera=new THREE.PerspectiveCamera(62,1,.3,2400);
const sun=new THREE.DirectionalLight(0xffffff,1);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
Object.assign(sun.shadow.camera,{left:-120,right:120,top:120,bottom:-120,near:10,far:520});sun.shadow.bias=-.0006;sun.shadow.normalBias=.6;
scene.add(sun,sun.target);
const hemi=new THREE.HemisphereLight(0xffffff,0x444444,.8);scene.add(hemi);

/* Outils de géométrie */
const dummy=new THREE.Object3D(),UP=new THREE.Vector3(0,1,0),v3=new THREE.Vector3(),v3b=new THREE.Vector3(),colT=new THREE.Color();
const M=(hex,o)=>new THREE.MeshStandardMaterial(Object.assign({color:hex,roughness:.88,metalness:0,flatShading:true},o||{}));
function merge(parts){const pos=[],nor=[],col=[];
  for(const pr of parts){const g=pr[0].index?pr[0].toNonIndexed():pr[0],c=LIN(pr[1]===undefined?0xffffff:pr[1]),P=g.attributes.position.array,Nn=g.attributes.normal.array;
    for(let i=0;i<P.length;i++){pos.push(P[i]);nor.push(Nn[i])}for(let i=0;i<P.length/3;i++)col.push(c[0],c[1],c[2])}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  g.setAttribute('normal',new THREE.Float32BufferAttribute(nor,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));return g}
const box=(w,h,d,x,y,z,ry,rx,rz)=>{const g=new THREE.BoxGeometry(w,h,d);if(rx)g.rotateX(rx);if(rz)g.rotateZ(rz);if(ry)g.rotateY(ry);g.translate(x||0,y||0,z||0);return g};
const cyl=(rt,rb,h,n,x,y,z)=>{const g=new THREE.CylinderGeometry(rt,rb,h,n||8);g.translate(x||0,y||0,z||0);return g};
function IM(geo,mat,n,sh){const m=new THREE.InstancedMesh(geo,mat,n);m.castShadow=sh!==false;m.receiveShadow=true;m.frustumCulled=false;scene.add(m);return m}
function put(m,i,x,y,z,sx,sy,sz,ry,rx,rz){dummy.position.set(x,y,z);dummy.rotation.set(rx||0,ry||0,rz||0,'YXZ');
  if(sx===undefined)sx=1;dummy.scale.set(sx,sy===undefined?sx:sy,sz===undefined?sx:sz);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix)}
const tint=(m,i,c,k)=>{k=k===undefined?1:k;colT.setRGB(c[0]*k,c[1]*k,c[2]*k);m.setColorAt(i,colT)};
const done=m=>{m.instanceMatrix.needsUpdate=true;if(m.instanceColor)m.instanceColor.needsUpdate=true};
const mesh=(g,m,sh)=>{const o=new THREE.Mesh(g,m);o.castShadow=sh!==false;o.receiveShadow=true;scene.add(o);return o};
/* Texture de halo doux */
const halo=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);
  r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.25,'rgba(255,255,255,.55)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);
  return new THREE.CanvasTexture(c)})();
function points(n,size,o){const g=new THREE.BufferGeometry(),P=new Float32Array(n*3).fill(-999),C=new Float32Array(n*3).fill(1);
  g.setAttribute('position',new THREE.BufferAttribute(P,3));g.setAttribute('color',new THREE.BufferAttribute(C,3));
  const m=new THREE.PointsMaterial(Object.assign({size,map:halo,vertexColors:true,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true},o||{}));
  if(m.blending===THREE.AdditiveBlending)m.fog=false;const p=new THREE.Points(g,m);p.frustumCulled=false;scene.add(p);p.P=P;p.C=C;
  p.up=()=>{g.attributes.position.needsUpdate=true;g.attributes.color.needsUpdate=true};return p}

const fogK=(x,y,z)=>{const d=scene.fog.density*Math.hypot(x-camera.position.x,y-camera.position.y,z-camera.position.z);return Math.exp(-d*d)};
/* ---------- Solides : plateformes où l'on monte, murs qui arrêtent ---------- */
const solids=[];
function sBox(Z,x,z,hx,hz,rot,y0,y1){const s={Z,t:0,x,z,hx,hz,cs:Math.cos(rot||0),sn:Math.sin(rot||0),y0,y1,on:true};solids.push(s);return s}
function sCyl(Z,x,z,r,y0,y1){const s={Z,t:1,x,z,r,y0,y1,on:true};solids.push(s);return s}
const inSolid=(s,x,z)=>{const dx=x-s.x,dz=z-s.z;if(s.t)return dx*dx+dz*dz<s.r*s.r;
  return Math.abs(dx*s.cs+dz*s.sn)<s.hx&&Math.abs(-dx*s.sn+dz*s.cs)<s.hz};
/* Escalier : une suite de marches entre deux points */
function stairs(Z,x0,z0,y0,x1,z1,y1,w,geoList,hex){const n=Math.max(1,Math.ceil(Math.abs(y1-y0)/.5)),rot=Math.atan2(z1-z0,x1-x0),len=Math.hypot(x1-x0,z1-z0)/n;
  const arr=[];for(let i=0;i<n;i++){const t=(i+.5)/n,x=lerp(x0,x1,t),z=lerp(z0,z1,t),y=lerp(y0,y1,(i+1)/n);
    arr.push(sBox(Z,x,z,len*.5+.25,w*.5,rot,y-.45,y));if(geoList)geoList.push([box(len+.3,.4,w,x,y-.2,z,-rot),hex])}return arr}

/* ---------- Secrets ---------- */
const secrets=[];
const secGeo=new THREE.OctahedronGeometry(.55),secMat=new THREE.MeshBasicMaterial({color:new THREE.Color(3.2,2.3,.9)});
function secret(Z,pos,titre,texte,cond){const m=new THREE.Mesh(secGeo,secMat);scene.add(m);
  const s={Z,pos:typeof pos==='function'?pos:()=>pos,titre,texte,cond:cond||(()=>true),m,found:false};secrets.push(s);return s}
const secHalo=points(32,7,{opacity:.8});

/* ---------- Terrain ---------- */
const CELL=2;let X0=1e9,X1=-1e9,Z0=1e9,Z1=-1e9;
for(const Z of ZN)for(const p of Z.poly){X0=Math.min(X0,p[0]);X1=Math.max(X1,p[0]);Z0=Math.min(Z0,p[1]);Z1=Math.max(Z1,p[1])}
X0-=64;X1+=64;Z0-=64;Z1+=64;
const GW=Math.ceil((X1-X0)/CELL)+1,GH=Math.ceil((Z1-Z0)/CELL)+1,GN=GW*GH;
const tP=new Float32Array(GN*3),tN=new Float32Array(GN*3),tC=new Float32Array(GN*3),tG=new Float32Array(GN),
  tEf=new Float32Array(GN),tn1=new Float32Array(GN),tn2=new Float32Array(GN),tn3=new Float32Array(GN);
let terrain;
function buildTerrain(){
  const rock=LIN(0x241c1a),rock2=LIN(0x0e0b0c);
  for(let j=0;j<GH;j++)for(let i=0;i<GW;i++){const k=j*GW+i,x=X0+i*CELL,z=Z0+j*CELL;tP[k*3]=x;tP[k*3+2]=z;
    const Z=zoneAt(x,z);tn1[k]=N1(x,z);tn2[k]=N2(x,z);tn3[k]=N3(x,z);
    if(Z){Z.verts.push(k);tEf[k]=sst(0,16,dPoly(Z.poly,x,z))}
    else{let d=1e9;for(const Q of ZN)d=Math.min(d,dPoly(Q.poly,x,z));
      const h=-Math.pow(d,1.25)*1.7-(tn2[k]-.3)*Math.min(d,8)*1.5;tP[k*3+1]=Math.max(h,-90);
      const t=sst(0,45,d),s=.75+.5*hash(Math.floor(tP[k*3+1]/2.5),3);tC[k*3]=lerp(rock[0],rock2[0],t)*s;tC[k*3+1]=lerp(rock[1],rock2[1],t)*s;tC[k*3+2]=lerp(rock[2],rock2[2],t)*s}}
  const idx=new Uint32Array((GW-1)*(GH-1)*6);let q=0;
  for(let j=0;j<GH-1;j++)for(let i=0;i<GW-1;i++){const a=j*GW+i,b=a+1,c=a+GW,d=c+1;if((i+j)&1){idx[q++]=a;idx[q++]=c;idx[q++]=b;idx[q++]=b;idx[q++]=c;idx[q++]=d}else{idx[q++]=a;idx[q++]=c;idx[q++]=d;idx[q++]=a;idx[q++]=d;idx[q++]=b}}
  const g=new THREE.BufferGeometry();g.setIndex(new THREE.BufferAttribute(idx,1));
  g.setAttribute('position',new THREE.BufferAttribute(tP,3));g.setAttribute('normal',new THREE.BufferAttribute(tN,3));
  g.setAttribute('color',new THREE.BufferAttribute(tC,3));g.setAttribute('glow',new THREE.BufferAttribute(tG,1));
  const m=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.93,metalness:0});
  m.onBeforeCompile=s=>{s.vertexShader='attribute float glow;varying float vGlow;\n'+s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvGlow=glow;');
    s.fragmentShader='varying float vGlow;\n'+s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance+=vColor.rgb*vGlow;')};
  terrain=new THREE.Mesh(g,m);terrain.receiveShadow=true;terrain.castShadow=true;terrain.frustumCulled=false;scene.add(terrain);
  for(const Z of ZN)rebuild(Z);normals(null);
}
function rebuild(Z){const lv=Z.lv,V=Z.verts,cs=Z.cs,sn=Z.sn,cx=Z.c[0],cz=Z.c[1];
  for(let n=0;n<V.length;n++){const k=V[n],x=tP[k*3],z=tP[k*3+2],dx=x-cx,dz=z-cz,u=dx*cs+dz*sn,v=-dx*sn+dz*cs;
    const h=Z.h(u,v,lv,tn1[k],tn2[k],tn3[k],x,z)*tEf[k];tP[k*3+1]=h;
    tG[k]=Z.col(u,v,lv,h,tn1[k],tn2[k],tn3[k],x,z,tc)*Math.min(1,tEf[k]*3);tC[k*3]=tc[0];tC[k*3+1]=tc[1];tC[k*3+2]=tc[2]}
  if(terrain){normals(V);const a=terrain.geometry.attributes;a.position.needsUpdate=a.color.needsUpdate=a.glow.needsUpdate=a.normal.needsUpdate=true}}
function normals(V){const f=k=>{const i=k%GW,j=(k/GW)|0,l=tP[(i>0?k-1:k)*3+1],r=tP[(i<GW-1?k+1:k)*3+1],d=tP[(j>0?k-GW:k)*3+1],u=tP[(j<GH-1?k+GW:k)*3+1];
    const nx=l-r,ny=2*CELL,nz=d-u,s=1/Math.hypot(nx,ny,nz);tN[k*3]=nx*s;tN[k*3+1]=ny*s;tN[k*3+2]=nz*s};
  if(V)for(let n=0;n<V.length;n++)f(V[n]);else for(let k=0;k<GN;k++)f(k)}

/* Bordures Girih : un filet de pierre claire et un trait de laiton lumineux le long de chaque arête */
function buildBorders(){const seen={},parts=[],lines=[];
  for(const Z of ZN)for(let i=0;i<Z.poly.length;i++){const a=Z.poly[i],b=Z.poly[(i+1)%Z.poly.length];
    const key=[Math.round(a[0]+b[0]),Math.round(a[1]+b[1])].join();if(seen[key])continue;seen[key]=1;
    const len=Math.hypot(b[0]-a[0],b[1]-a[1]),rot=Math.atan2(b[1]-a[1],b[0]-a[0]),mx=(a[0]+b[0])/2,mz=(a[1]+b[1])/2;
    parts.push([box(len+1.6,.5,2.2,mx,.02,mz,-rot),0xcdbf9f]);lines.push([box(len+.4,.1,.34,mx,.3,mz,-rot)])}
  mesh(merge(parts),M(0xffffff,{vertexColors:true,roughness:.7}),false);
  mesh(merge(lines),new THREE.MeshBasicMaterial({color:new THREE.Color(1.5,1.0,.36)}),false)}

/* ---------- Ciel ---------- */
const skyU={top:{value:new THREE.Color()},hor:{value:new THREE.Color()},sunC:{value:new THREE.Color()},sunD:{value:new THREE.Vector3(0,1,0)},
  clC:{value:new THREE.Color()},cl:{value:.3},time:{value:0}};
const sky=new THREE.Mesh(new THREE.SphereGeometry(2000,32,20),new THREE.ShaderMaterial({uniforms:skyU,side:THREE.BackSide,depthWrite:false,fog:false,
  vertexShader:'varying vec3 vd;void main(){vd=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:`varying vec3 vd;uniform vec3 top,hor,sunC,sunD,clC;uniform float cl,time;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(17.,9.);a*=.5;}return s;}
void main(){vec3 d=normalize(vd);float y=max(d.y,0.);vec3 c=mix(hor,top,pow(y,.5));
float sd=max(dot(d,sunD),0.);c+=sunC*(smoothstep(.9994,.9998,sd)*5.+pow(sd,60.)*.3+pow(sd,7.)*.1);
if(d.y>.005){vec2 p=d.xz/(d.y+.14)*1.5+vec2(time*.006,time*.002);float f=fbm(p);float m=smoothstep(.72-cl*.5,.98-cl*.5,f)*smoothstep(0.,.16,d.y)*min(1.,cl*3.);
vec3 cc=mix(clC*.6,clC+sunC*(.12+.5*pow(sd,5.)),smoothstep(.4,.9,f));c=mix(c,cc,m*.92);}
c=mix(hor,c,smoothstep(-.04,.03,d.y));gl_FragColor=vec4(c,1.);}`}));
sky.frustumCulled=false;sky.renderOrder=-10;scene.add(sky);

/* ---------- Atmosphère : chaque zone donne la sienne selon son niveau, le monde glisse de l'une à l'autre ---------- */
const AK=['sunI','hI','fog','el','cl','wn','wv','wd','ws','wI','exp','bl','fh'],AC=['top','hor','sun','hs','hg','clc','wc'];
function atmo(d){const f={};for(const k of AC)f[k]=ramp(...d[k]);for(const k of AK)f[k]=nramp(...(d[k]||[0,0,0]));f.az=d.az;
  return(lv,o)=>{for(const k of AC)f[k](lv,o[k]);for(const k of AK)o[k]=f[k](lv);o.az=f.az;return o}}
const newA=()=>{const o={az:0};for(const k of AC)o[k]=[0,0,0];for(const k of AK)o[k]=0;return o};
const A=newA(),AT=newA();let Afirst=true;
const G={s:1,c:1,k:0,e:1,t:[1,1,1]},GT={s:1,c:1,k:0,e:1,t:[1,1,1]};
const WN=3600,wSeed=new Float32Array(WN*4);for(let i=0;i<WN*4;i++)wSeed[i]=Math.random();
const weather=points(WN,.3,{blending:THREE.NormalBlending,opacity:.85});
function stepAtmo(Z,dt,t,px,py,pz){
  if(Z){Z.atm(Z.lv,AT);if(Z.grade)Z.grade(Z.lv,GT)}const k=Afirst?1:1-Math.exp(-dt*1.8);Afirst=false;
  G.s=lerp(G.s,GT.s,k);G.c=lerp(G.c,GT.c,k);G.k=lerp(G.k,GT.k,k);G.e=lerp(G.e,GT.e,k);mix3(G.t,G.t,GT.t,k);
  for(const n of AC)mix3(A[n],A[n],AT[n],k);for(const n of AK)A[n]=lerp(A[n],AT[n],k);A.az=lerp(A.az,AT.az,k);
  skyU.top.value.setRGB(...A.top);skyU.hor.value.setRGB(...A.hor);skyU.clC.value.setRGB(...A.clc);skyU.cl.value=A.cl;skyU.time.value=t;
  scene.fog.color.setRGB(...A.hor);scene.fog.density=A.fog*(A.fh>.5?(camera.position.y<-1.5?.1:lerp(1,.1,sst(A.fh-5,A.fh+7,camera.position.y))):1);
  const el=A.el*D2R,az=A.az*D2R;v3.set(Math.cos(el)*Math.cos(az),Math.sin(el),Math.cos(el)*Math.sin(az));
  skyU.sunD.value.copy(v3);skyU.sunC.value.setRGB(A.sun[0]*A.sunI,A.sun[1]*A.sunI,A.sun[2]*A.sunI);
  sun.color.setRGB(...A.sun);sun.intensity=A.sunI;sun.target.position.set(px,py,pz);sun.position.set(px+v3.x*260,py+v3.y*260,pz+v3.z*260);
  hemi.color.setRGB(...A.hs);hemi.groundColor.setRGB(...A.hg);hemi.intensity=A.hI;
  sky.position.copy(camera.position);
  /* météo */
  const n=Math.floor(clamp(A.wn,0,1)*WN),P=weather.P,cx=camera.position.x,cy=camera.position.y,cz=camera.position.z,B=70,BY=44;
  weather.geometry.setDrawRange(0,n);weather.material.size=A.ws;weather.material.color.setRGB(A.wc[0]*A.wI,A.wc[1]*A.wI,A.wc[2]*A.wI);
  for(let i=0;i<n;i++){const s0=wSeed[i*4],s1=wSeed[i*4+1],s2=wSeed[i*4+2],s3=wSeed[i*4+3];
    let x=s0*B+Math.sin(t*.4*(.5+s3)+s1*40)*A.wd,y=s1*BY-t*A.wv*(.6+.8*s3),z=s2*B+Math.cos(t*.33*(.5+s0)+s3*40)*A.wd;
    x=((x-cx)%B+B)%B-B/2+cx;y=((y-cy)%BY+BY)%BY-BY*.35+cy;z=((z-cz)%B+B)%B-B/2+cz;P[i*3]=x;P[i*3+1]=y;P[i*3+2]=z}
  weather.geometry.attributes.position.needsUpdate=true}

/* ---------- Post-traitement : halo des lumières, ACES, vignette, grain ---------- */
let rtS,rtA,rtB,rtC,rtD,rtE;const fsCam=new THREE.OrthographicCamera(-1,1,1,-1,0,1),fsScene=new THREE.Scene(),
  fsQuad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);fsQuad.frustumCulled=false;fsScene.add(fsQuad);
const FV='varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}';
const mBright=new THREE.ShaderMaterial({uniforms:{t:{value:null}},vertexShader:FV,depthTest:false,
  fragmentShader:'varying vec2 vUv;uniform sampler2D t;void main(){vec3 c=min(texture2D(t,vUv).rgb,vec3(40.));float l=max(c.r,max(c.g,c.b));gl_FragColor=vec4(c*smoothstep(1.,2.2,l),1.);}'});
const mBlur=new THREE.ShaderMaterial({uniforms:{t:{value:null},d:{value:new THREE.Vector2()}},vertexShader:FV,depthTest:false,
  fragmentShader:'varying vec2 vUv;uniform sampler2D t;uniform vec2 d;void main(){vec3 c=texture2D(t,vUv).rgb*.227;c+=(texture2D(t,vUv+d*1.385).rgb+texture2D(t,vUv-d*1.385).rgb)*.316;c+=(texture2D(t,vUv+d*3.231).rgb+texture2D(t,vUv-d*3.231).rgb)*.0703;gl_FragColor=vec4(c,1.);}'});
const mFinal=new THREE.ShaderMaterial({uniforms:{t:{value:null},b1:{value:null},b2:{value:null},exp:{value:1},bl:{value:1},time:{value:0},gs:{value:1},gc:{value:1},gk:{value:0},gt:{value:new THREE.Vector3(1,1,1)}},vertexShader:FV,depthTest:false,
  fragmentShader:`varying vec2 vUv;uniform sampler2D t,b1,b2;uniform float exp,bl,time,gs,gc,gk;uniform vec3 gt;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
void main(){vec3 c=texture2D(t,vUv).rgb+bl*(texture2D(b1,vUv).rgb*.55+texture2D(b2,vUv).rgb*.75);
vec2 q=vUv-.5;c*=exp*(1.-dot(q,q)*.75);c=aces(c);c=pow(c,vec3(1./2.2));
float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,gs);c=(c-.5)*gc+.5;c=mix(c,gt*(l*1.25+.08),gk);c=clamp(c,0.,1.);
c+=(fract(sin(dot(vUv*vec2(1920.,1080.)+time,vec2(12.9898,78.233)))*43758.5453)-.5)*.018;gl_FragColor=vec4(c,1.);}`});
function resize(){const w=innerWidth,h=innerHeight,pr=renderer.getPixelRatio(),W=Math.floor(w*pr),H=Math.floor(h*pr);
  renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
  for(const r of[rtS,rtA,rtB,rtC,rtD,rtE])if(r)r.dispose();
  const o={type:THREE.HalfFloatType,format:THREE.RGBAFormat,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter};
  if(renderer.capabilities.isWebGL2){rtS=new THREE.WebGLMultisampleRenderTarget(W,H,o);rtS.samples=4}else rtS=new THREE.WebGLRenderTarget(W,H,o);
  const mk=s=>new THREE.WebGLRenderTarget(Math.max(2,W>>s),Math.max(2,H>>s),Object.assign({depthBuffer:false},o));
  rtA=mk(1);rtB=mk(2);rtC=mk(2);rtD=mk(3);rtE=mk(3)}
function pass(mat,target){fsQuad.material=mat;renderer.setRenderTarget(target);renderer.render(fsScene,fsCam)}
function draw(t){renderer.setRenderTarget(rtS);renderer.render(scene,camera);
  mBright.uniforms.t.value=rtS.texture;pass(mBright,rtA);
  mBlur.uniforms.t.value=rtA.texture;mBlur.uniforms.d.value.set(1/rtB.width,0);pass(mBlur,rtB);
  mBlur.uniforms.t.value=rtB.texture;mBlur.uniforms.d.value.set(0,1/rtC.height);pass(mBlur,rtC);
  mBlur.uniforms.t.value=rtC.texture;mBlur.uniforms.d.value.set(1/rtD.width,0);pass(mBlur,rtD);
  mBlur.uniforms.t.value=rtD.texture;mBlur.uniforms.d.value.set(0,1/rtE.height);pass(mBlur,rtE);
  const u=mFinal.uniforms;u.t.value=rtS.texture;u.b1.value=rtC.texture;u.b2.value=rtE.texture;u.exp.value=A.exp*G.e;u.gs.value=G.s;u.gc.value=G.c;u.gk.value=G.k;u.gt.value.set(G.t[0],G.t[1],G.t[2]);u.bl.value=A.bl;u.time.value=t%10;pass(mFinal,null)}
