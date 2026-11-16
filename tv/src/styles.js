/* ---------- Styles de rendu par zone ----------
   Chaque grande zone peut avoir son propre « style de dessin », appliqué dans la dernière passe d'image (aucun objet en plus).
   On relit la profondeur de chaque pixel pour retrouver le point du monde qu'il montre, puis on regarde dans quelle zone il tombe :
   le style bascule donc exactement à la frontière, même quand on regarde une zone depuis sa voisine.
   - Givrecloche (Marché, losange) : noir et blanc, brouillard épais. Côté Brume (−) nuit d'encre, côté Clarté (+) brume blanche.
     Seules les vraies lumières (lanternes, secrets) gardent leur couleur.
   - Chinampas (Ressource, hexagone) : manga. Traits d'encre, aplats de couleur, trame de points dans les ombres.
     Côté Folie (−) encre lourde et trame dense, côté Raison (+) trait fin, couleurs pastel lumineuses.
   Coût : une texture de profondeur et quelques lectures en plus dans la passe finale ; rien n'est recalculé pendant une mue. */
let STYLE_ON=true;try{STYLE_ON=localStorage.getItem('mz-tv-style')!=='0'}catch(_){}
const STY_DEPTH=renderer.capabilities.isWebGL2||renderer.extensions.has('WEBGL_depth_texture');
const STY={M:{Z:MAR,w:0},R:{Z:RES,w:0}};
const closed=P=>P.concat([P[0]]).map(p=>new THREE.Vector2(p[0],p[1]));
const styU={tD:{value:null},pInv:{value:camera.projectionMatrixInverse},cW:{value:camera.matrixWorld},cP:{value:camera.position},
  pM:{value:closed(MAR.poly)},pR:{value:closed(RES.poly)},lvM:{value:0},lvR:{value:0},cdM:{value:0},cdR:{value:0},
  skM:{value:0},skR:{value:0},on:{value:1},px:{value:new THREE.Vector2(1/800,1/450)}};
Object.assign(mFinal.uniforms,styU);mFinal.uniforms.expo=mFinal.uniforms.exp; /* « exp » cache la fonction exp() du GLSL */
const polyGL=(f,u,n)=>`float ${f}(vec2 p){bool ins=false;float d=1e9;
  for(int i=0;i<${n};i++){vec2 a=${u}[i],b=${u}[i+1];
    if((a.y>p.y)!=(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)ins=!ins;
    vec2 e=b-a;float t=clamp(dot(p-a,e)/dot(e,e),0.,1.);d=min(d,length(p-a-e*t));}
  float s=smoothstep(0.,3.,d)*.5;return ins?.5+s:.5-s;}`;
mFinal.defines={STY_DEPTH:STY_DEPTH?1:0};
mFinal.fragmentShader=`varying vec2 vUv;uniform sampler2D t,b1,b2,tD;uniform float expo,bl,time,gs,gc,gk,lvM,lvR,cdM,cdR,skM,skR,on;uniform vec3 gt,cP;
uniform mat4 pInv,cW;uniform vec2 pM[5],pR[7],px;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
${polyGL('inM','pM',4)}
${polyGL('inR','pR',6)}
vec3 wpos(vec2 uv,float d){vec4 v=pInv*vec4(uv*2.-1.,d*2.-1.,1.);v/=v.w;return (cW*v).xyz;}
float vz(vec2 uv){vec4 v=pInv*vec4(uv*2.-1.,texture2D(tD,uv).r*2.-1.,1.);return -v.z/v.w;}
float hsh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){vec3 b=texture2D(b1,vUv).rgb*.55+texture2D(b2,vUv).rgb*.75;vec3 c=texture2D(t,vUv).rgb+bl*b;
vec2 q=vUv-.5;c*=expo*(1.-dot(q,q)*.75);c=aces(c);c=pow(c,vec3(1./2.2));
float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,gs);c=(c-.5)*gc+.5;c=mix(c,gt*(l*1.25+.08),gk);c=clamp(c,0.,1.);
float gr=.018;
if(on>.5){float wM=skM,wR=skR,dist=1e4;vec3 W=cP;
#if STY_DEPTH==1
  float d=texture2D(tD,vUv).r;
  if(d<.99999){W=wpos(vUv,d);dist=length(W-cP);wM=inM(W.xz);wR=inR(W.xz);}
#endif
  /* --- Givrecloche : noir et blanc, brouillard épais --- */
  if(wM>.001){float k=lvM/7.,kp=max(k,0.),km=max(-k,0.);
    float L=dot(c,vec3(.299,.587,.114));
    float lo=mix(.08,.0,km)+kp*.22,hi=mix(.85,.62,km)+kp*.1;float g=smoothstep(lo,hi,L);g=pow(g,1.+km*2.2)*mix(1.,.4,km);
    vec3 n=vec3(g);
    float fogC=mix(.82,.97,kp)*(1.-km)+.05*km;
    float dens=mix(.045,.09,km)*(1.-kp*.55);float fd=max(0.,dist-cdM);float hy=exp(-max(0.,W.y-2.)/mix(26.,12.,kp));
    float f=1.-exp(-fd*dens*hy);
    n=mix(n,vec3(fogC),f);
    float lum=max(b.r,max(b.g,b.b)),sat=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));n=mix(n,c,smoothstep(.3,.9,lum)*smoothstep(.12,.35,sat)*(1.-f*.7)*.9);
    c=mix(c,n,wM);gr=mix(gr,.06+.04*km,wM);}
  /* --- Chinampas : manga --- */
  if(wR>.001){float k=lvR/7.,kp=max(k,0.),km=max(-k,0.);
    float L=max(dot(c,vec3(.299,.587,.114)),.001);float nb=mix(4.,3.,km);
    float Lq=(floor(L*nb+.5)/nb)*(1.-kp*.15)+kp*.2;
    vec3 hue=c/L;float hl=dot(hue,vec3(.333));hue=mix(vec3(hl),hue,1.3-kp*.25-km*.45);
    vec3 m=clamp(hue*Lq,0.,1.);m=mix(m,vec3(1.),kp*.38);
    vec2 cell=gl_FragCoord.xy/mix(5.,4.,km);vec2 fc=fract(cell)-.5;float r=length(fc);
    float shade=1.-smoothstep(.12,.52,L);float dot_=1.-smoothstep(shade*mix(.45,.68,km)-.05,shade*mix(.45,.68,km)+.05,r);
    m*=1.-dot_*mix(.55,.9,km);
#if STY_DEPTH==1
    float z0=vz(vUv);vec2 o=px*mix(1.,2.,km);
    float e=abs(vz(vUv+vec2(o.x,0.))+vz(vUv-vec2(o.x,0.))+vz(vUv+vec2(0.,o.y))+vz(vUv-vec2(0.,o.y))-4.*z0)/z0;
    float ink=smoothstep(mix(.06,.035,km),mix(.12,.07,km),e);
    m=mix(m,vec3(.03,.02,.05),ink*mix(.85,1.,km));
#endif
    c=mix(c,m,wR);gr=mix(gr,.01,wR);}
}
c+=(fract(sin(dot(vUv*vec2(1920.,1080.)+time,vec2(12.9898,78.233)))*43758.5453)-.5)*gr;gl_FragColor=vec4(c,1.);}`;
mFinal.needsUpdate=true;

/* La profondeur de la scène devient une texture que la passe finale peut lire. */
const _resizeSty=resize;
resize=function(){_resizeSty();if(!STY_DEPTH)return;
  if(rtS.isWebGLMultisampleRenderTarget){const o={type:rtS.texture.type,format:THREE.RGBAFormat,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter};
    const w=rtS.width,h=rtS.height;rtS.dispose();rtS=new THREE.WebGLRenderTarget(w,h,o)}
  rtS.depthTexture=new THREE.DepthTexture(rtS.width,rtS.height);rtS.depthTexture.type=THREE.UnsignedIntType;
  styU.tD.value=rtS.depthTexture;styU.px.value.set(1/rtS.width,1/rtS.height)};

/* À chaque image : niveaux des deux zones, distance de la caméra à chacune (le brouillard ne compte que ce qui est dedans),
   et poids du ciel selon la zone où l'on se trouve (sans profondeur, ce poids sert pour toute l'image). */
const _drawSty=draw;let styT=performance.now();
draw=function(t){const now=performance.now(),dt=Math.min(.1,(now-styT)/1000);styT=now;camera.updateMatrixWorld();
  const cx=camera.position.x,cz=camera.position.z,cam=zoneAt(cx,cz),k=1-Math.exp(-dt*2.5);
  for(const n of['M','R']){const s=STY[n],Z=s.Z;s.w=lerp(s.w,cam===Z?1:0,k);
    styU['lv'+n].value=Z.lv;styU['cd'+n].value=inPoly(Z.poly,cx,cz)?0:dPoly(Z.poly,cx,cz);styU['sk'+n].value=s.w}
  styU.on.value=STYLE_ON?1:0;_drawSty(t)};
function toggleStyles(){STYLE_ON=!STYLE_ON;try{localStorage.setItem('mz-tv-style',STYLE_ON?"1":"0")}catch(_){}}
/* Pour les captures : activer le style et se placer côté Berestograd face à une zone */
function styleBorder(id){const Z=ZB[id],Q=CIT;let best=null;
  for(let i=0;i<Z.poly.length;i++){const a=Z.poly[i],b=Z.poly[(i+1)%Z.poly.length],m=[(a[0]+b[0])/2,(a[1]+b[1])/2];
    if(dPoly(Q.poly,m[0],m[1])<1)best=m}
  if(!best)best=Z.poly[0];const dx=Z.c[0]-best[0],dz=Z.c[1]-best[1],d=Math.hypot(dx,dz);
  P.x=best[0]-dx/d*22;P.z=best[1]-dz/d*22;P.yaw=Math.atan2(dx,dz);P.y=stand(P.x,P.z,1e3).g+.1}
