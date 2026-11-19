/* ---------- Boucle 2 (19 nov. 2026) : ciel signature par zone et par pôle ----------
   Constat : toutes les zones partageaient le même ciel (dégradé + nuages), seules les couleurs changeaient ; vers +7 le ciel
   et l'horizon montaient vers le blanc (DON +7 orange brûlé, RES374 +7 voile blanc, ANT120 délavé).
   1) Le ciel (créé dans core.js, compilé à la première image) reçoit ici un nouveau fragmentShader : un « mode » par famille
      (aurores, plafond de braise, voûte de canopée, grand soleil et poussière, cirrus), et les deux pôles :
      vers −7 zénith assombri, étoiles, éclipse pour le Feu ; vers +7 zénith saturé, halo de 22°, anneau Girih au zénith.
   2) L'atmosphère des zones est corrigée quand le niveau est positif : on colore au lieu d'éclaircir (dominante du pôle à
      l'horizon, complémentaire au zénith et dans les ombres), exposition et halo plafonnés, brouillard plus léger.
   Aucun objet en plus, aucun appel de dessin en plus : tout se passe dans le shader du ciel et dans les couleurs de stepAtmo. */
(function(){
/* --- modes de ciel : 0 Glace (aurores), 1 Feu (plafond de braise), 2 Eau/Sève (canopée), 3 Pierre (soleil bas, poussière),
       4 Vent (cirrus) ; −1 : neutre (Givrecloche, noir et blanc : on ne colore rien) --- */
const MODE_MANA={Glace:0,Feu:1,'Eau':2,'Sève':2,Pierre:3,Vent:4};
const MODE_ORIG={CIT:0,DON:1,ANT:2,RES:4,MAR:-1}; /* Berestograd boréale, Puits de braise, Mangrove des Lucioles, Îles flottantes au vent */
const modeOf=Z=>Z._cielM!==undefined?Z._cielM:(Z._cielM=Z.plus?(MODE_MANA[Z.d.mana]===undefined?3:MODE_MANA[Z.d.mana]):(MODE_ORIG[Z.id]===undefined?-1:MODE_ORIG[Z.id]));

/* --- 1. le shader du ciel --- */
const U=sky.material.uniforms;
U.skM={value:[0,0,0,0,0]};U.skP={value:0};U.skS={value:0};
sky.material.fragmentShader=`varying vec3 vd;uniform vec3 top,hor,sunC,sunD,clC;uniform float cl,time,skM[5],skP,skS;
const vec3 Y=vec3(.2126,.7152,.0722);
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
/* boucle 2 : 4 octaves au lieu de 5 (le calque du mode en ajoute ailleurs, le coût reste à peu près constant) */
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p=p*2.03+vec2(17.,9.);a*=.5;}return s;}
float fb3(vec2 p){return n(p)*.57+n(p*2.03+vec2(17.,9.))*.29+n(p*4.12+vec2(5.,31.))*.14;}
void main(){vec3 d=normalize(vd);float y=max(d.y,0.),pN=max(-skP,0.),pP=max(skP,0.);
float sv=smoothstep(-.06,.04,sunD.y); /* repli : soleil sous l'horizon, ni disque, ni halo, ni rayons */
float wG=skM[0],wF=skM[1],wC=skM[2],wP=skM[3],wV=skM[4];
/* zénith : −7 assombri d'environ 40 % ; +7 saturé, luminance plafonnée à .45 (fini le ciel blanc) */
vec3 tp=top*(1.-.4*pN);float lt=dot(tp,Y);tp=max(mix(vec3(lt),tp,1.+.6*pP),0.);lt=dot(tp,Y);tp*=mix(1.,min(1.,.45/max(lt,1e-4)),pP);
vec3 c=mix(hor,tp,pow(y,.5));
float sd=dot(d,sunD),sp=max(sd,0.);
/* −7 : étoiles par hachage de la direction, seulement là où le ciel est sombre */
if(pN>.01&&d.y>0.){vec3 q=floor(d*360.);float r=h(q.xy+q.z*7.31+skS*13.);
  c+=vec3(.85,.9,1.)*step(.997,r)*smoothstep(.04,.25,d.y)*pN*(1.4+.8*sin(time*2.+r*90.))*(1.-smoothstep(.04,.3,dot(c,Y)));}
/* Glace : aurores. Rideaux posés sur la voûte (coordonnées d'azimut, sans couture) : un bord bas ondulé par une fbm étirée
   sur d.x, des stries verticales fines, vert en bas, violet en haut ; plus forts vers −7, pastel vers +7 */
if(wG>.001&&d.y>0.){vec2 az=normalize(d.xz+vec2(1e-4));float el=d.y;
  float e0=.1+.16*fb3(vec2(az.x*1.6+skS*9.+time*.01,az.y*1.6));
  float sh=fb3(vec2(az.x*3.+time*.02,az.y*3.+skS*4.));
  float cu=.45+.55*n(vec2(az.x*38.+time*.15,az.y*38.));
  float au=smoothstep(e0-.025,e0+.01,el)*exp(-max(el-e0,0.)*5.5)*smoothstep(.38,.62,sh)*cu*smoothstep(.02,.1,el);
  vec3 ac=mix(vec3(.1,1.,.5),vec3(.6,.22,1.),smoothstep(0.,.35,el-e0));ac=mix(ac,vec3(.65,.95,1.),pP*.45);
  c+=ac*au*wG*(.3+1.1*pN+.1*pP);}
/* Feu : plafond bas, sombre dessus, éclairé par en dessous d'un rougeoiement de braise (or ambré vers +7) */
if(wF>.001&&d.y>0.){vec2 p=d.xz/(d.y+.07)*.7+vec2(time*.004,skS*11.);float f=fb3(p);
  float bas=1.-smoothstep(0.,.5,d.y);vec3 br=mix(vec3(1.,.3,.07),vec3(1.,.62,.26),pP);
  vec3 ce=mix(mix(hor*.5,vec3(.05,.025,.02),.45*pN+.2),br*(.35+.9*bas)*(1.-.35*pP),smoothstep(.35,.75,f)*bas);
  float cov=smoothstep(.25,.55,f)*smoothstep(0.,.08,d.y);c=mix(c,ce,cov*wF*(.65+.25*pN));c*=1.-.3*wF*y*(1.-.5*pP);}
/* Eau/Sève : voûte de canopée assombrie au-dessus, rayons verts peints dans les trouées autour du soleil */
float leaf=0.;
if(wC>.001&&d.y>0.){leaf=smoothstep(.42,.6,fb3(d.xz/(d.y+.45)*3.2+skS*7.))*smoothstep(.22,.7,d.y);
  c*=1.-.3*wC*smoothstep(.15,.8,d.y);
  vec3 cv=mix(vec3(.012,.035,.02),hor*vec3(.25,.4,.25),.3+.4*pP);c=mix(c,cv,leaf*wC*(.85-.25*pP));
  vec3 e1=normalize(cross(sunD,vec3(0.,1.,.001))),e2=cross(e1,sunD),r=d-sunD*sd;float an=atan(dot(r,e1),dot(r,e2));
  float ry=max(0.,sin(an*11.+skS*6.)*.55+sin(an*17.+1.3)*.35+.15);ry*=ry;
  c+=vec3(.45,1.,.4)*ry*pow(sp,4.)*(1.-leaf)*wC*sv*(.3+.5*pP)*(1.-.6*pN);}
/* Pierre/désert : grand soleil bas (disque plus large, gloire chaude) */
float big=wP;
/* soleil : disque, gloire ; Feu à −7 : soleil noir cerclé de lumière (éclipse) */
float ec=wF*smoothstep(.3,.8,pN);
float dk=smoothstep(mix(.9994,.9972,big),mix(.9998,.9986,big),sp);
c+=sunC*sv*(dk*5.*(1.-ec)+(pow(sp,60.)*.3+pow(sp,7.)*.1)*(1.-.8*ec)+big*(pow(sp,14.)*.35+pow(sp,3.)*.08));
if(ec>.001){float co=exp(-pow((sd-.9991)/.0005,2.))*7.+pow(sp,900.)*.6;c=mix(c,vec3(.004,.002,.002),dk*ec);c+=mix(sunC,vec3(1.,.55,.3),.5)*co*ec*sv;}
/* nuages habituels (couverture donnée par l'atmosphère de la zone) */
if(d.y>.005){vec2 p=d.xz/(d.y+.14)*1.5+vec2(time*.006,time*.002)+skS*3.;float f=fbm(p);float m=smoothstep(.72-cl*.5,.98-cl*.5,f)*smoothstep(0.,.16,d.y)*min(1.,cl*3.);
  vec3 cc=mix(clC*.6,clC+sunC*(.12+.5*pow(sp,5.)),smoothstep(.4,.9,f));c=mix(c,cc,m*.92*(1.-leaf*wC));}
/* Vent : cirrus longs et striés (filaments déformés, orientés selon la graine de la zone, discrets près de l'horizon) */
if(wV>.001&&d.y>0.){vec2 p=d.xz/(d.y+.35);float o=skS*6.283;vec2 u=vec2(cos(o),sin(o));
  vec2 q=vec2(dot(p,u)*.6+time*.01,dot(p,vec2(-u.y,u.x))*2.4);q.y+=fb3(q*.7+skS*3.)*1.6;
  float f=fb3(q),g=n(q*vec2(1.,7.)+3.);float st=smoothstep(.52,.8,f)*(.4+.6*g)*smoothstep(.06,.35,d.y)*(1.-smoothstep(.8,1.,d.y));
  vec3 ci=mix(hor,vec3(1.,.98,.96),.4)*mix(1.,.5,pN)+sunC*.06*pow(sp,3.);c=mix(c,ci,st*wV*.55);}
/* Pierre : bande de poussière à l'horizon */
if(wP>.001){float bd=exp(-pow((d.y-.05)/.045,2.))*(.75+.25*n(d.xz*9.+vec2(time*.05,skS*5.)));
  vec3 du=mix(hor,vec3(.9,.58,.3)*max(dot(hor,Y),.05)*2.,.55);c=mix(c,du,bd*wP*.7);}
/* +7 : halo de 22° autour du soleil (rouge dedans, bleu dehors), anneau Girih très pâle au-dessus de 30° */
if(pP>.01){float ha=exp(-pow((sd-.927)/.0055,2.));vec3 pr=mix(vec3(1.,.55,.35),vec3(.55,.75,1.),smoothstep(.921,.933,sd));
  c+=pr*ha*pP*sv*min(dot(sunC,Y),2.)*.09;
  if(d.y>.5){float ph=atan(d.z,d.x),rz=acos(clamp(d.y,-1.,1.)),k=.6283,R=.62;
    float l1=R*.951/cos(mod(ph,k)-k*.5),l2=R*.951/cos(mod(ph+k*.5,k)-k*.5);
    float li=max(1.-smoothstep(.002,.006,abs(rz-l1)),1.-smoothstep(.002,.006,abs(rz-l2)));li=max(li,1.-smoothstep(.002,.006,abs(rz-R*.58)));
    c+=(vec3(.06)+hor*.06)*li*pP*smoothstep(.5,.62,d.y);}}
c=mix(hor,c,smoothstep(-.03,.04,d.y));gl_FragColor=vec4(c,1.);}`;
sky.material.needsUpdate=true;

/* --- 2. atmosphère du pôle positif : colorer au lieu d'éclaircir ---
   Dominante (horizon, brouillard, sol du ciel hémisphérique, soleil) et complémentaire (zénith, ombres).
   [dominante, complémentaire] ; null : pas de coloration de l'horizon (Givrecloche noir et blanc, Chinampas en manga). */
const DUO_ZONE={DON:['#f0902a','#2ab8b4'],     /* ambre / turquoise */
  RES374:['#2fae78','#f6c2cc'],                  /* jade / rose pâle */
  ANT120:['#9ade5a','#7a3268'],                  /* vert tendre / prune */
  CIT:['#e8603a','#2e9a86'],                     /* minium / malachite */
  ANT:['#ff8a5a','#4a5ad0'],                     /* aurore / indigo */
  RES:null,MAR:null};
const DUO_MANA={Feu:['#ff7a26','#22a8c8'],Glace:['#4ab0f0','#f4b49a'],Eau:['#22c0b0','#f08a76'],'Sève':['#9ad860','#7a3a6a'],
  Pierre:['#e8a040','#5a6ad8'],Vent:['#a88af0','#e8c860']};
const Yl=c=>c[0]*.2126+c[1]*.7152+c[2]*.0722;
/* couleur ramenée à la luminance l (même teinte) */
const atL=(c,l,o)=>{const k=l/Math.max(Yl(c),1e-4);o[0]=c[0]*k;o[1]=c[1]*k;o[2]=c[2]*k;return o};
const t3=[0,0,0];
function duoOf(Z){if(Z._duo!==undefined)return Z._duo;let r=Z.id in DUO_ZONE?DUO_ZONE[Z.id]:undefined;
  if(r===undefined&&Z.plus){r=DUO_MANA[Z.d.mana]||DUO_MANA.Pierre;const rot=(typeof SIG_BIO!=='undefined'&&SIG_BIO[Z.d.biome])||0;
    /* deux tuiles du même mana ne se confondent pas : la paire tourne un peu selon le biome (rotation de styles.js) */
    return Z._duo=r.map(h=>{const c=LIN(h);return rot&&typeof sigRot==='function'?sigRot(c,rot*1.5):c})}
  return Z._duo=r?r.map(LIN):null}
/* exposition plafond à +7 quand le sol lui-même brille (Puits de braise : lave et motif Girih lumineux) */
const EXP7={DON:.62},BL7={DON:.5,Glace:.45}; /* halo plafond : neige blanche + halo = voile laiteux (RES374 +7) */
const bl7=Z=>BL7[Z.id]||(Z.plus&&BL7[Z.d.mana])||.8;
const capTo=(v,cap,k)=>v>cap?lerp(v,cap,k):v;
for(const Z of ZN){const a0=Z.atm;if(typeof a0!=='function')continue;
  Z.atm=(lv,o)=>{a0(lv,o);
    if(modeOf(Z)===3)o.el=Math.min(o.el,17); /* Pierre : grand soleil bas, ombres longues */
    if(!(lv>0))return o;
    const k=clamp(lv/7,0,1),kc=Math.min(1,k*2.5); /* plafonds atteints dès le palier 3 */
    o.exp=capTo(o.exp,lerp(1,EXP7[Z.id]||1,k),kc);o.bl=capTo(o.bl,lerp(.8,bl7(Z),k),kc);
    if(Z.plus)o.sunI=capTo(o.sunI,1.25,k); /* le soleil colore, il n'éclaircit plus */o.wI=capTo(o.wI,1.2,kc);
    o.fog*=lerp(1,.75,k); /* zone sereine : on voit loin */
    const D=duoOf(Z);
    if(D){const dom=D[0],com=D[1],h=o.hor;
      /* horizon : glisse vers la teinte du pôle, saturé ×1,4, luminance ramenée à .55 au plus */
      const L0=Yl(h);mix3(h,h,atL(dom,L0,t3),.6*k);const L=Yl(h),s=1+.4*k;
      for(let j=0;j<3;j++)h[j]=Math.max(0,L+(h[j]-L)*s);const L2=Yl(h),cap=lerp(1,.55,k);if(L2>cap){const f=cap/L2;h[0]*=f;h[1]*=f;h[2]*=f}
      /* zénith et ombres (ciel hémisphérique) : la complémentaire, à luminance gardée */
      mix3(o.top,o.top,atL(com,Yl(o.top),t3),.5*k);mix3(o.hs,o.hs,atL(com,Yl(o.hs),t3),.22*k);
      /* sol du ciel hémisphérique, soleil et nuages : la dominante */
      mix3(o.hg,o.hg,atL(dom,Math.max(Yl(o.hg),.05),t3),.7*k);mix3(o.sun,o.sun,atL(dom,Yl(o.sun),t3),.4*k);
      mix3(o.clc,o.clc,atL(dom,Yl(o.clc),t3),.3*k);}
    /* le brouillard prend toujours A.hor dans stepAtmo : il se fond exactement dans l'horizon du ciel */
    return o}}

/* --- lissage des uniforms du ciel à chaque image, comme sigCur dans styles.js (fondu ~2 s) --- */
const cur={w:[0,0,0,0,0],p:0,s:0,t:0,on:false};
const _d=draw;
draw=function(t){const now=performance.now(),dt=cur.t?Math.min(.25,(now-cur.t)/1000):0;cur.t=now;
  const Z=zoneAt(camera.position.x,camera.position.z);
  if(Z){let f=cur.on?1-Math.exp(-dt*1.6):1;cur.on=true;const m=modeOf(Z),s=((Z.i*.6180339)%1);
    for(let i=0;i<5;i++)cur.w[i]=lerp(cur.w[i],i===m?1:0,f);
    cur.p=lerp(cur.p,clamp((Z.lv||0)/7,-1,1),f);cur.s=Math.abs(cur.s-s)>.5?s:lerp(cur.s,s,f)}
  const w=U.skM.value;for(let i=0;i<5;i++)w[i]=cur.w[i];U.skP.value=cur.p;U.skS.value=cur.s;_d(t)};
})();
