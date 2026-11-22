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
  skM:{value:0},skR:{value:0},on:{value:1},tt:{value:0},px:{value:new THREE.Vector2(1/800,1/450)},
  /* boucle 2 (19 nov. 2026) : 1 quand la passe FXAA suit (Belle, Splendide) ; le grain part alors dans l'alpha */
  fxOn:{value:0},
  /* boucle 1 (19 nov. 2026) : étalonnage signature de la zone où se trouve la caméra (voir SIG plus bas) */
  sigSh:{value:new THREE.Vector3(.1,.1,.1)},sigMi:{value:new THREE.Vector3(.5,.5,.5)},sigHi:{value:new THREE.Vector3(1,1,1)},sigK:{value:0},sigOn:{value:0}};
Object.assign(mFinal.uniforms,styU);mFinal.uniforms.expo=mFinal.uniforms.exp; /* « exp » cache la fonction exp() du GLSL */
const polyGL=(f,u,n)=>`float ${f}(vec2 p){bool ins=false;float d=1e9;
  for(int i=0;i<${n};i++){vec2 a=${u}[i],b=${u}[i+1];
    if((a.y>p.y)!=(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)ins=!ins;
    vec2 e=b-a;float t=clamp(dot(p-a,e)/dot(e,e),0.,1.);d=min(d,length(p-a-e*t));}
  float s=smoothstep(0.,3.,d)*.5;return ins?.5+s:.5-s;}`;
mFinal.defines={STY_DEPTH:STY_DEPTH?1:0};
mFinal.fragmentShader=`varying vec2 vUv;uniform sampler2D t,b1,b2,tD;uniform float expo,bl,time,gs,gc,gk,lvM,lvR,cdM,cdR,skM,skR,on,tt,sigK,sigOn,fxOn;uniform vec3 gt,cP,sigSh,sigMi,sigHi;
uniform mat4 pInv,cW;uniform vec2 pM[5],pR[7],px;
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
${polyGL('inM','pM',4)}
${polyGL('inR','pR',6)}
vec3 wpos(vec2 uv,float d){vec4 v=pInv*vec4(uv*2.-1.,d*2.-1.,1.);v/=v.w;return (cW*v).xyz;}
float vz(vec2 uv){vec4 v=pInv*vec4(uv*2.-1.,texture2D(tD,uv).r*2.-1.,1.);return -v.z/v.w;}
float hsh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hsh(i),hsh(i+vec2(1,0)),f.x),mix(hsh(i+vec2(0,1)),hsh(i+vec2(1,1)),f.x),f.y);}
void main(){
/* boucle 1 (19 nov. 2026) : progression de l'étalonnage. Fondu sur |lv|/7, plus une petite marche nette aux paliers ±3 et ±6
   (sigK glisse en ~2 s, la marche se voit donc à chaque passage de palier). sN : vers −7, sP : vers +7. */
float sA=abs(sigK),sG=clamp(sA*.8+.1*smoothstep(.4,.46,sA)+.1*smoothstep(.83,.89,sA),0.,1.)*sigOn,sN=sigK<0.?sG:0.,sP=sigK>0.?sG:0.;
vec3 b=texture2D(b1,vUv).rgb*.55+texture2D(b2,vUv).rgb*.75;vec3 c=texture2D(t,vUv).rgb+bl*b*(1.-.4*sP); /* vers +7 le halo s'efface un peu : il noyait le détail des blancs */
vec2 q=vUv-.5;c*=expo*(1.-dot(q,q)*.75);
c*=1.-.12*sP;c=c/(1.+.35*sP*c); /* vers +7 : un cran d'exposition en moins et épaule douce sur les hautes lumières, avant l'unique ACES (fin du blanc brûlé) */
c=aces(c);c=pow(c,vec3(1./2.2));
float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,gs);c=(c-.5)*gc+.5;c=mix(c,gt*(l*1.25+.08),gk);c=clamp(c,0.,1.);
float gr=.018,sty=0.;
if(on>.5){float wM=skM,wR=skR,dist=1e4,d=1.;vec3 W=cP;
#if STY_DEPTH==1
  d=texture2D(tD,vUv).r;
  if(d<.99999){W=wpos(vUv,d);dist=length(W-cP);wM=inM(W.xz);wR=inR(W.xz);}
#endif
  vec2 sc=vUv-.5;float vig=dot(sc,sc);
  /* boucle 1 (19 nov. 2026) : frange blanche de Givrecloche −7. Les tuiles voisines, au loin, gardaient leur brouillard clair
     et se découpaient en blanc déchiqueté sur le ciel d'encre : depuis la zone, à −7, le lointain passe lui aussi dans la brume de MAR. */
  float frM=skM*max(-lvM/7.,0.)*smoothstep(60.,200.,dist)*(1.-wM);wM=max(wM,frM); /* seulement hors de la zone : la tour reste lisible */
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
    if(d>=.99999)f=1.;f=max(f,frM);
    vec3 n=vec3(mix(g,fogC,f));
    n*=1.-vig*mix(.9,1.5,km);
    float lum=max(b.r,max(b.g,b.b)),sat=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));n=mix(n,c*1.1,smoothstep(.3,.9,lum)*smoothstep(.12,.35,sat)*(1.-f*.6)*.9*(1.-max(frM,km*step(.99999,d))));
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
  sty=max(wM,wR);
}
/* --- boucle 1 (19 nov. 2026) : étalonnage signature de la zone (après l'ACES et les écoles, avant le grain) ---
   Trois tons (ombres, tons moyens, hautes lumières) propres à chaque zone et à chaque pôle, pondérés par la luminance.
   Vers −7 : ombres relevées et plancher teinté (jamais de noir pur), vignette teintée. Vers +7 : blancs adoucis, ombres pastel.
   Sur Givrecloche (noir et blanc) et Chinampas (manga), force ×0,3 pour ne pas casser leur école. */
if(sigOn>.001){float fo=sigOn*mix(1.,.3,max(smoothstep(.3,.7,max(skM,skR)),sty));
  vec3 Y=vec3(.299,.587,.114);float L=dot(c,Y);
  float ws=1.-smoothstep(0.,.42,L),wh=smoothstep(mix(.45,.62,sN),.95,L) /* à −7, seules les vraies lumières prennent la couleur haute */,wm=max(0.,1.-ws-wh);
  vec3 T=sigSh*ws+sigMi*wm+sigHi*wh,tn=min(T/max(dot(T,Y),.02),vec3(2.)),sh=min(sigSh/max(dot(sigSh,Y),.01),vec3(2.4));
  c=mix(c,c*tn,(.28+.42*sG)*fo); /* split-toning : la teinte change, la luminance reste */
  /* −7 : les ombres se relèvent (les formes du sol se lisent), le plancher prend la couleur d'ombre de la zone */
  c=mix(c,pow(max(c,0.),vec3(.62)),sN*fo*(1.-smoothstep(0.,.3,L)));
  vec3 fl=sh*mix(.012,.06,sN)*fo;c=fl+c*(1.-fl);
  float vg=smoothstep(.04,.45,dot(q,q)*2.);c=mix(c,sigSh*mix(.8,.5,sN),vg*(.15+.2*sN-.07*sP)*fo);
  /* +7 : blancs désaturés de 10 %, ombres teintées pastel froid (le relief tient sans boucher) */
  L=dot(c,Y);c=mix(c,vec3(L),.1*sP*wh*fo);c=mix(c,c*sh,.18*sP*ws*fo);
  c=clamp(c,0.,1.);}
/* boucle 2 (19 nov. 2026) : avec le FXAA, le grain est posé après lui (sinon il le lisse et le brouille) ; on lui passe dans l'alpha
   la force du grain et le poids des écoles d'encre (fusain, manga), sur 4 bits chacun */
if(fxOn>.5){gl_FragColor=vec4(c,(floor(clamp(sty,0.,1.)*15.+.5)*16.+floor(clamp(gr/.08,0.,1.)*15.+.5))/255.);return;}
c+=(fract(sin(dot(vUv*vec2(1920.,1080.)+time,vec2(12.9898,78.233)))*43758.5453)-.5)*gr;gl_FragColor=vec4(c,1.);}`;
mFinal.needsUpdate=true;

/* La profondeur de la scène devient une texture que la passe finale peut lire. */
const _resizeSty=resize;
resize=function(){_resizeSty();majFxaa();if(!STY_DEPTH)return;
  if(rtS.isWebGLMultisampleRenderTarget){const o={type:rtS.texture.type,format:THREE.RGBAFormat,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter};
    const w=rtS.width,h=rtS.height;rtS.dispose();rtS=new THREE.WebGLRenderTarget(w,h,o)}
  rtS.depthTexture=new THREE.DepthTexture(rtS.width,rtS.height);rtS.depthTexture.type=THREE.UnsignedIntType;
  styU.tD.value=rtS.depthTexture;styU.px.value.set(1/rtS.width,1/rtS.height)};

/* ---------- Boucle 2 (19 nov. 2026) : anticrénelage FXAA en Belle et Splendide ----------
   Depuis que la passe finale lit la profondeur, la cible multi-échantillons (MSAA ×4) a été remplacée par une cible simple :
   les sapins, les pieux et les filets Girih crénelaient en escalier. FXAA 3.11 version « console » : cinq lectures de luminance
   (quatre coins à un demi-pixel, lissés par le filtrage, et le centre), la direction du bord, puis deux lectures le long de ce bord.
   Le grain vient après (net). Sur les écoles d'encre (Givrecloche, Chinampas) l'effet est atténué : les traits gardent leur mordant.
   En Fluide et en Équilibrée rien ne change : pas de cible en plus, pas de passe en plus. */
let rtF=null;
const mFxaa=new THREE.ShaderMaterial({uniforms:{t:{value:null},px:{value:new THREE.Vector2(1/800,1/450)},time:{value:0}},vertexShader:FV,depthTest:false,depthWrite:false,
  fragmentShader:`varying vec2 vUv;uniform sampler2D t;uniform vec2 px;uniform float time;
#define REDUCE_MIN (1./128.)
#define REDUCE_MUL (1./8.)
#define SPAN_MAX 8.
float lu(vec3 c){return dot(c,vec3(.299,.587,.114));}
void main(){vec4 M=texture2D(t,vUv);
  float lNW=lu(texture2D(t,vUv+vec2(-.5,-.5)*px).rgb),lNE=lu(texture2D(t,vUv+vec2(.5,-.5)*px).rgb),
        lSW=lu(texture2D(t,vUv+vec2(-.5,.5)*px).rgb),lSE=lu(texture2D(t,vUv+vec2(.5,.5)*px).rgb),lM=lu(M.rgb);
  float a=floor(M.a*255.+.5),sty=floor(a/16.)/15.,gr=mod(a,16.)/15.*.08;
  float mn=min(lM,min(min(lNW,lNE),min(lSW,lSE))),mx=max(lM,max(max(lNW,lNE),max(lSW,lSE)));
  vec3 c=M.rgb;
  if(mx-mn>max(.05,mx*.125)){   /* seuil « console » : on ne touche qu'aux vrais bords */
    vec2 dir=vec2(-((lNW+lNE)-(lSW+lSE)),(lNW+lSW)-(lNE+lSE));
    float red=max((lNW+lNE+lSW+lSE)*(.25*REDUCE_MUL),REDUCE_MIN),rcp=1./(min(abs(dir.x),abs(dir.y))+red);
    dir=clamp(dir*rcp,vec2(-SPAN_MAX),vec2(SPAN_MAX))*px;
    /* deux lectures aux extrémités du segment (±dir/2, jusqu'à 4 pixels de part et d'autre), mêlées au centre déjà lu :
       c'est la moitié large du FXAA classique, sans ses deux lectures proches (le centre en tient lieu) */
    vec3 B=.5*c+.25*(texture2D(t,vUv-dir*.5).rgb+texture2D(t,vUv+dir*.5).rgb);
    float lB=lu(B);if(lB>=mn&&lB<=mx)c=mix(B,c,sty*.8);}
  c+=(fract(sin(dot(vUv*vec2(1920.,1080.)+time,vec2(12.9898,78.233)))*43758.5453)-.5)*gr;gl_FragColor=vec4(c,1.);}`});
function majFxaa(){const on=(QUAL().ms>0||!!QUAL().fx)&&!!rtS;   /* fx : FXAA gardé sans multiéchantillon (Splendide sur Xbox, 22 nov.) */
  if(rtF&&(!on||rtF.width!==rtS.width||rtF.height!==rtS.height)){rtF.dispose();rtF=null}
  if(on&&!rtF){rtF=new THREE.WebGLRenderTarget(rtS.width,rtS.height,{type:THREE.UnsignedByteType,format:THREE.RGBAFormat,
    minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,depthBuffer:false,stencilBuffer:false});rtF.texture.generateMipmaps=false}
  if(rtF)mFxaa.uniforms.px.value.set(1/rtF.width,1/rtF.height);mFinal.uniforms.fxOn.value=rtF?1:0}
/* la passe finale écrit dans rtF, puis le FXAA (et le grain) à l'écran */
const _passFx=pass;
pass=function(mat,target){if(mat===mFinal&&target===null&&rtF){_passFx(mat,rtF);mFxaa.uniforms.t.value=rtF.texture;mFxaa.uniforms.time.value=mFinal.uniforms.time.value;_passFx(mFxaa,null)}
  else _passFx(mat,target)};

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

/* ---------- Boucle 1 (19 nov. 2026) : étalonnage signature par zone et par pôle ----------
   Chaque zone a deux jeux de trois couleurs [ombres, tons moyens, hautes lumières] : n = pôle −7, p = pôle +7.
   Entre les deux, la couleur glisse avec le niveau ; la passe finale s'en sert pour le split-toning, le plancher des noirs
   et la vignette. Mise à jour une fois par image, depuis la zone de la caméra (aucun test de zone par pixel). */
const SIG={
  /* zones d'origine */
  CIT:{n:['#14203a','#4a5672','#d8964a'],p:['#5a78a8','#c4b49c','#ffd68a']}, /* Berestograd : ardoise / ambre */
  DON:{n:['#2c0a16','#6a2a30','#e8c8a0'],p:['#9a5a6a','#e8c4ac','#fff4dc']}, /* Donjon : bordeaux / crème */
  ANT:{n:['#03201c','#24584c','#a8e6c8'],p:['#3a7a8c','#a4d6cc','#f0fff4']}, /* Antre : vert abysse / écume */
  MAR:{n:['#12141c','#6a6c76','#e6e8f0'],p:['#949aaa','#d8dade','#fafbff']}, /* Givrecloche : neutre froid (noir et blanc) */
  RES:{n:['#22140e','#5a5048','#f2dca8'],p:['#4a6a9a','#a8d0c0','#fff8e8']}, /* Chinampas : terre / jade (manga) */
  ASS:{n:['#2a1030','#6a2a48','#ff6a2a'],p:['#6a4aa0','#d8a8c0','#fff2c8']}, /* Assemblée : prune / braise, lavande / ivoire */
  /* familles des types des nouvelles tuiles (même parti pris que la zone d'origine du type, sans être identiques) */
  Ressource:{n:['#022630','#1a6a72','#b4f0e0'],p:['#3a8aa8','#86dccc','#d0fff0']}, /* sarcelle / menthe : à l'opposé des Donjons */
  Donjon:{n:['#3a0812','#7a2a22','#f4b878'],p:['#a85a78','#f0a898','#ffc8b0']},    /* bordeaux / or rose */
  Antre:{n:['#161a04','#56561e','#e6cc7a'],p:['#4a8a6a','#d6e6a0','#fffbe0']},     /* olive / chartreuse */
  'Assemblée':{n:['#2a1030','#6a2a48','#ff6a2a'],p:['#6a4aa0','#d8a8c0','#fff2c8']},
  'Marché':{n:['#10161e','#5a6470','#e0e6ee'],p:['#8a9ab0','#d6dce2','#fbfcff']},
  'Cité':{n:['#16243a','#4e5a70','#dca050'],p:['#6080b0','#c8b8a0','#ffd890']}};
/* ajustement léger par biome (rotation de teinte en degrés) : deux tuiles du même type ne se confondent pas */
const SIG_BIO={'Forêt boréale':-8,'Fjord':-16,'Canyon':14,'Désert de sable':10,'Oasis':6,'Cité en ruines':0,'Récif':-12,
  'Cavernes cristallines':-22,'Lande':18,'Steppe':8,'Delta fluvial':-6,'Falaise côtière':-10,
  /* zones-biomes : les douze biomes ajoutés */
  'Volcan':20,'Mangrove':-4,'Jungle':4,'Archipel':-14,'Haute montagne':-18,'Glacier':-24,'Forêt de champignons géants':26,'Marais':12,
  'Désert de sel':-2,'Iles flottantes':-20,'Savane':16,'Toundra':-12};
/* et la part de la signature de chaque zone (zonesplus.js, sigZone) : deux zones du même biome et du même type ne se confondent pas */
const sigRotZ=Z=>(SIG_BIO[Z.d.biome]||0)+(Z.sig?Z.sig.rot:0);
const sigLin=h=>{const v=parseInt(h.slice(1),16);return[(v>>16&255)/255,(v>>8&255)/255,(v&255)/255]};
/* rotation de teinte autour de l'axe gris */
const sigRot=(c,deg)=>{const a=deg*D2R,co=Math.cos(a),si=Math.sin(a),k=1/3,s3=Math.sqrt(k),m=x=>Math.max(0,Math.min(1,x)),t=(1-co)*k;
  const r=c[0],g=c[1],b=c[2];
  return[m(r*(co+t)+g*(t-s3*si)+b*(t+s3*si)),m(r*(t+s3*si)+g*(co+t)+b*(t-s3*si)),m(r*(t-s3*si)+g*(t+s3*si)+b*(co+t))]};
/* tuile « plus » : famille de son type (70 %) mêlée aux couleurs des pôles de son mana (30 %), puis tournée selon le biome.
   Repli si le type est inconnu : couleurs tirées de PMANA[mana] seules. */
const sigCv=x=>typeof x==='string'?sigLin(x):x,sigMx=(a,b,t)=>a.map((x,i)=>x+(b[i]-x)*t);
function sigOf(Z){if(Z._sig)return Z._sig;let r=Z.plus?null:SIG[Z.id];
  if(Z.id==='ASS152')r=SIG.ASS; /* ASS152 : la recette des Assemblées tenue exactement (prune / braise à −7, lavande / ivoire à +7) */
  if(!r&&Z.plus){const d=Z.d,[ng,ps]=(PMANA[d.mana]||PMANA.Pierre).map(sigLin),w=[1,1,1],
      man={n:[sigMx(ng,[0,0,0],.15),sigMx(ng,ps,.4),sigMx(ps,w,.1)],p:[sigMx(sigMx(ng,ps,.55),[.42,.48,.66],.35),sigMx(ps,w,.3),sigMx(ps,w,.6)]},
      fam=SIG[d.type],rot=sigRotZ(Z);
    r={};for(const s of['n','p'])r[s]=[0,1,2].map(i=>sigRot(fam?sigMx(sigCv(fam[s][i]),man[s][i],.3):man[s][i],rot))}
  if(!r)r=SIG.MAR;
  return Z._sig={n:r.n.map(sigCv),p:r.p.map(sigCv)}}
const sigCur={sh:[.1,.1,.1],mi:[.5,.5,.5],hi:[1,1,1],k:0,on:0,t:0};
const _drawSig=draw;
draw=function(t){const now=performance.now(),dt=sigCur.t?Math.min(.25,(now-sigCur.t)/1000):0;sigCur.t=now;
  const Z=zoneAt(camera.position.x,camera.position.z);let f=1-Math.exp(-dt*1.6); /* fondu ~2 s, comme skM/skR */
  if(Z){const S=sigOf(Z),k=clamp((Z.lv||0)/7,-1,1),u=(k+1)/2;
    if(!sigCur.on)f=1; /* première image dans une zone : on part directement de ses couleurs */
    for(const [n,i] of [['sh',0],['mi',1],['hi',2]]){const a=S.n[i],b=S.p[i],c=sigCur[n];for(let j=0;j<3;j++)c[j]=lerp(c[j],lerp(a[j],b[j],u),f)}
    sigCur.k=lerp(sigCur.k,k,f)}
  sigCur.on=lerp(sigCur.on,Z&&STYLE_ON?1:0,f);
  const U=mFinal.uniforms;U.sigSh.value.set(sigCur.sh[0],sigCur.sh[1],sigCur.sh[2]);U.sigMi.value.set(sigCur.mi[0],sigCur.mi[1],sigCur.mi[2]);
  U.sigHi.value.set(sigCur.hi[0],sigCur.hi[1],sigCur.hi[2]);U.sigK.value=sigCur.k;U.sigOn.value=sigCur.on;_drawSig(t)};
