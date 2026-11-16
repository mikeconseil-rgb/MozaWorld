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
  skM:{value:0},skR:{value:0},on:{value:1},tt:{value:0},px:{value:new THREE.Vector2(1/800,1/450)}};
Object.assign(mFinal.uniforms,styU);mFinal.uniforms.expo=mFinal.uniforms.exp; /* « exp » cache la fonction exp() du GLSL */
const polyGL=(f,u,n)=>`float ${f}(vec2 p){bool ins=false;float d=1e9;
  for(int i=0;i<${n};i++){vec2 a=${u}[i],b=${u}[i+1];
    if((a.y>p.y)!=(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)ins=!ins;
    vec2 e=b-a;float t=clamp(dot(p-a,e)/dot(e,e),0.,1.);d=min(d,length(p-a-e*t));}
  float s=smoothstep(0.,3.,d)*.5;return ins?.5+s:.5-s;}`;
mFinal.defines={STY_DEPTH:STY_DEPTH?1:0};
mFinal.fragmentShader=`varying vec2 vUv;uniform sampler2D t,b1,b2,tD;uniform float expo,bl,time,gs,gc,gk,lvM,lvR,cdM,cdR,skM,skR,on,tt;uniform vec3 gt,cP;
uniform mat4 pInv,cW;uniform vec2 pM[5],pR[7],px;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
${polyGL('inM','pM',4)}
${polyGL('inR','pR',6)}
vec3 wpos(vec2 uv,float d){vec4 v=pInv*vec4(uv*2.-1.,d*2.-1.,1.);v/=v.w;return (cW*v).xyz;}
float vz(vec2 uv){vec4 v=pInv*vec4(uv*2.-1.,texture2D(tD,uv).r*2.-1.,1.);return -v.z/v.w;}
float hsh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hsh(i),hsh(i+vec2(1,0)),f.x),mix(hsh(i+vec2(0,1)),hsh(i+vec2(1,1)),f.x),f.y);}
void main(){vec3 b=texture2D(b1,vUv).rgb*.55+texture2D(b2,vUv).rgb*.75;vec3 c=texture2D(t,vUv).rgb+bl*b;
vec2 q=vUv-.5;c*=expo*(1.-dot(q,q)*.75);c=aces(c);c=pow(c,vec3(1./2.2));
float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,gs);c=(c-.5)*gc+.5;c=mix(c,gt*(l*1.25+.08),gk);c=clamp(c,0.,1.);
float gr=.018;
if(on>.5){float wM=skM,wR=skR,dist=1e4,d=1.;vec3 W=cP;
#if STY_DEPTH==1
  d=texture2D(tD,vUv).r;
  if(d<.99999){W=wpos(vUv,d);dist=length(W-cP);wM=inM(W.xz);wR=inR(W.xz);}
#endif
  vec2 sc=vUv-.5;float vig=dot(sc,sc);
#if STY_DEPTH==1
  float z0=vz(vUv),e=0.;if(d<.99999){vec2 o=px;
    e=abs(vz(vUv+vec2(o.x,0.))+vz(vUv-vec2(o.x,0.))+vz(vUv+vec2(0.,o.y))+vz(vUv-vec2(0.,o.y))-4.*z0)/z0;}
  float far=1.-smoothstep(45.,110.,z0);
#else
  float e=0.,far=0.;
#endif
  /* --- Givrecloche : noir et blanc façon fusain, brouillard qui dérive --- */
  if(wM>.001){float k=lvM/7.,kp=max(k,0.),km=max(-k,0.);
    float L=dot(c,vec3(.299,.587,.114));
    float g=smoothstep(mix(.22,.05,kp),mix(1.02,.9,kp),L);g=g*g*(3.-2.*g);g=pow(g,1.+km*1.4)*mix(1.,.55,km);
    float ink=smoothstep(.05,.14,e)*far;g=mix(g,g*.25,ink*mix(.75,.95,km));
    float fogC=mix(mix(.62,.92,kp),.14,km);
    float nz=vn(W.xz*.035+vec2(tt*.05,tt*.02))*.6+vn(W.xz*.11-vec2(tt*.08,0.))*.4;
    float dens=mix(.035,.07,km)*(1.-kp*.5)*(.55+nz*.9);float fd=max(0.,dist-cdM);float hy=exp(-max(0.,W.y-1.)/mix(18.,9.,kp));
    float f=(1.-exp(-fd*dens*hy));f=clamp(f,0.,1.);
    if(d>=.99999)f=1.;
    vec3 n=vec3(mix(g,fogC,f));
    n*=1.-vig*mix(.9,1.5,km);
    float lum=max(b.r,max(b.g,b.b)),sat=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));n=mix(n,c*1.1,smoothstep(.3,.9,lum)*smoothstep(.12,.35,sat)*(1.-f*.6)*.9);
    c=mix(c,n,wM);gr=mix(gr,.045+.03*km,wM);}
  /* --- Chinampas : manga (cel-shading à trois tons, contours fins, trame seulement dans le noir) --- */
  if(wR>.001){float k=lvR/7.,kp=max(k,0.),km=max(-k,0.);
    float L=max(dot(c,vec3(.299,.587,.114)),.001);
    vec3 m;
    if(d>=.99999){m=mix(vec3(dot(c,vec3(.333))),c,1.25);m=mix(m,vec3(1.,.98,.95),kp*.25);m=mix(m,vec3(.28,.24,.22)*m*2.,km*.6);}
    else{
    vec3 hue=c/L;hue=mix(vec3(dot(hue,vec3(.333))),hue,mix(1.1,1.2,kp)-km*.5);hue=clamp(hue*.62,0.,1.);
    float t1=smoothstep(.2,.24,L),t2=smoothstep(.55,.59,L);
    vec3 sh=hue*mix(vec3(.42,.42,.62),vec3(.3,.26,.3),km);vec3 mid=hue*.95;vec3 hl=mix(hue*1.25,vec3(1.),.2+kp*.25);
    m=mix(sh,mid,t1);m=mix(m,hl,t2);
    /* palette choisie : le ton de chaque bande vient d'un dégradé d'artiste, la teinte d'origine n'en garde qu'une partie */
    vec3 p0=mix(mix(vec3(.16,.2,.38),vec3(.2,.13,.1),km),vec3(.36,.42,.66),kp),p1=mix(mix(vec3(.3,.62,.6),vec3(.5,.4,.28),km),vec3(.55,.78,.76),kp),p2=mix(mix(vec3(1.,.93,.78),vec3(.86,.8,.66),km),vec3(1.,.97,.92),kp);
    vec3 gm=mix(p0,p1,t1);gm=mix(gm,p2,t2);m=mix(gm,m,mix(.45,.3,km)-kp*.1);
    vec2 cell=gl_FragCoord.xy/mix(3.,4.,km);float r=length(fract(cell)-.5);
    float deep=(1.-t1)*mix(.0,1.,km+.25);float dotm=1.-smoothstep(.32,.4,r);m*=1.-dotm*deep*.55;
    float ink=smoothstep(mix(.09,.05,km),mix(.16,.1,km),e)*mix(.25+.75*far,1.,km);
    m=mix(m,vec3(.1,.07,.14),ink*mix(.8,1.,km));}
    c=mix(c,m,wR);gr=mix(gr,.006,wR);}
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
  styU.on.value=STYLE_ON?1:0;styU.tt.value=(styU.tt.value+dt)%1000;_drawSty(t)};
function toggleStyles(){STYLE_ON=!STYLE_ON;try{localStorage.setItem('mz-tv-style',STYLE_ON?"1":"0")}catch(_){}}
/* Pour les captures : activer le style et se placer côté Berestograd face à une zone */
function styleBorder(id){const Z=ZB[id],Q=CIT;let best=null;
  for(let i=0;i<Z.poly.length;i++){const a=Z.poly[i],b=Z.poly[(i+1)%Z.poly.length],m=[(a[0]+b[0])/2,(a[1]+b[1])/2];
    if(dPoly(Q.poly,m[0],m[1])<1)best=m}
  if(!best)best=Z.poly[0];const dx=Z.c[0]-best[0],dz=Z.c[1]-best[1],d=Math.hypot(dx,dz);
  P.x=best[0]-dx/d*22;P.z=best[1]-dz/d*22;P.yaw=Math.atan2(dx,dz);P.y=stand(P.x,P.z,1e3).g+.1}
