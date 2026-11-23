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
  if(r===undefined&&Z.plus){r=DUO_MANA[Z.d.mana]||DUO_MANA.Pierre;const rot=typeof sigRotZ!=='undefined'?sigRotZ(Z):0;
    /* deux tuiles du même mana ne se confondent pas : la paire tourne un peu selon le biome (rotation de styles.js) */
    return Z._duo=r.map(h=>{const c=LIN(h);return rot&&typeof sigRot==='function'?sigRot(c,rot*1.5):c})}
  return Z._duo=r?r.map(LIN):null}
/* exposition plafond à +7 quand le sol lui-même brille (Puits de braise : lave et motif Girih lumineux) */
const EXP7={DON:.62},BL7={DON:.5,Glace:.3,'Sève':.3}; /* boucle 5 (23 nov. 2026) : Glace .45 → .3, Sève .3 (RES374, ANT120 +7 : moins de voile) */
 /* halo plafond : neige blanche + halo = voile laiteux (RES374 +7) */
const bl7=Z=>BL7[Z.id]||(Z.plus&&BL7[Z.d.mana])||.8;
const LAIT7={RES374:{fog:.6,exp:.9},ANT120:{fog:.6,exp:.9}}; /* boucle 5 : brouillard et exposition des +7 laiteux */
const capTo=(v,cap,k)=>v>cap?lerp(v,cap,k):v;

/* ---------- Boucle 3 (20 nov. 2026) : météo et lumière signées par lieu et par pôle ----------
   Constat : la neige tombait partout (sur la lave, dans le désert, dans la mangrove) et le soleil gardait la même hauteur
   d'un pôle à l'autre. On écrit ici les CIBLES de l'atmosphère (AT, dans l'enveloppe de Z.atm), jamais A après coup :
   stepAtmo garde son lissage (~0,5 s) d'une zone ou d'un palier à l'autre.
   1) Une famille de météo par lieu : le mode de ciel (modeOf), corrigé par le biome (on ne neige pas sur un canyon).
      Pour chaque famille, trois ancres (−7, 0, +7) ; chaque palier glisse d'un septième de l'une à l'autre.
   2) Le nuage « weather » passe en mélange additif pour ce qui luit (braises, lucioles, pollen, givre), seulement au
      CHANGEMENT de famille ou de pôle (aucune recompilation : le mélange est un état GL, pas un programme) ; wI ≤ 1,2.
   3) Le soleil par paliers nets : −7…−4 rasant (8 à 12°), −3…+3 vers 35°, +4…+7 haut (55 à 65°), ombres courtes.
      L'exception Pierre (soleil ≤ 17°) est gardée. Le sol du ciel hémisphérique prend la teinte d'ombre du pôle.
   Aucun objet ni appel de dessin en plus ; le nombre de flocons reste ≤ WN (wn ≤ 1, plus bas au désert et à +7). */
/* biome → famille ; sinon le mode de ciel : 0 neige, 1 braise, 2 luciole, 3 sable, 4 vent, −1 encre (Givrecloche) */
const FAM_BIO={'Canyon':'sable','Désert de sable':'sable','Désert de sel':'sable','Savane':'sable','Steppe':'sable',
  'Glacier':'neige','Toundra':'neige','Haute montagne':'neige','Volcan':'braise','Mangrove':'luciole','Marais':'luciole','Jungle':'luciole'};
const FAM_MODE=['neige','braise','luciole','sable','vent'];
const famille=Z=>Z._metF||(Z._metF=(Z.plus&&FAM_BIO[Z.d.biome])||FAM_MODE[modeOf(Z)]||'encre');
window.familleMeteo=famille; /* lu par poussiere.js (poussières de lumière cohérentes avec la météo) */
/* ancres [wn, wv (>0 tombe, <0 monte), wd (balancement horizontal, m), ws (taille), wI, couleur, additif] */
const METEO={
  /* Glace : neige dense à −7 ; givre en paillettes rares et lentes à +7 (additif : elles scintillent) */
  neige:{n:[.9,4.6,2.6,.32,1,'#eaf2fa',0],z:[.2,2.1,1.5,.24,1,'#e6edf4',0],p:[.07,.3,1.4,.13,1.2,'#bfe6ff',1]},
  /* Feu : braises qui montent à −7 (orange, additif) ; cendres pâles et chaudes qui flottent à +7 (jamais blanches) */
  braise:{n:[.5,-2.6,1.8,.36,1.2,'#ff8a20',1],z:[.08,-.9,1.6,.17,1.1,'#ff8a3a',1],p:[.13,.22,2.4,.24,.9,'#b8a48a',0]},
  /* Eau/Sève : lucioles rares, grosses et lentes à −7 ; pollen doré à +7 (additif aux deux pôles) */
  luciole:{n:[.06,.12,3.6,.5,1.2,'#a8ff4a',1],z:[.04,.25,2.6,.3,1,'#e0f088',1],p:[.15,.18,2.6,.15,1.2,'#ffc840',1]},
  /* Pierre/désert : sable rouge à −7, poussière beige presque horizontale à 0, presque rien à +7 */
  sable:{n:[.36,.7,9,.26,1.15,'#e0602c',0],z:[.16,.12,10,.19,1,'#d6bc92',0],p:[.02,.06,7,.13,1,'#e8d2a6',0]},
  /* Vent : bruine grise à −7, akènes qui voyagent à 0, pétales lilas à +7 */
  vent:{n:[.55,9,3,.13,1,'#7c889a',0],z:[.06,.45,6,.2,1,'#e4dcc4',0],p:[.09,.5,5,.24,1.1,'#dcc0ff',0]},
  /* Givrecloche (noir et blanc) : flocons d'encre à −7, flocons gris légers à 0, rien à +7 */
  encre:{n:[.7,1.5,2.4,.42,1,'#050507',0],z:[.15,1.8,1.5,.24,1,'#c4c4c4',0],p:[0,.2,1.5,.2,1,'#ffffff',0]}};
/* Eau (récifs, deltas, archipels) : des lucioles bleu-vert plutôt que vert-jaune */
const METEO_MANA={Eau:{n:'#4affd0'}};
for(const f in METEO)for(const a of 'nzp')METEO[f][a][5]=LIN(METEO[f][a][5]);
for(const m in METEO_MANA)for(const a in METEO_MANA[m])METEO_MANA[m][a]=LIN(METEO_MANA[m][a]);
/* teinte d'ombre de la signature du pôle (sol du ciel hémisphérique) : −7 la couleur sombre du mana (PMANA), +7 la complémentaire */
const OMBRE_ORIG={CIT:'Glace',DON:'Feu',ANT:'Eau',RES:'Vent'}; /* MAR : noir et blanc, rien */
function ombreNeg(Z){if(Z._ombN!==undefined)return Z._ombN;const m=Z.plus?Z.d.mana:OMBRE_ORIG[Z.id];
  const P=typeof PMANA!=='undefined'&&m&&(PMANA[m]||PMANA.Pierre);return Z._ombN=P?LIN(P[0]):null}
const m3=[0,0,0];let addCur=-1;
/* ---------- Boucle 4 (22 nov. 2026) : le zéro devient un lieu ----------
   Constat : à 0, CIT, DON045 et RES374 partageaient la même taïga grise sous un soleil à 35°, ASS152 et ANT120 le même sable crème.
   HEURE0 donne au palier 0 une heure du jour propre : élévation du soleil (el), couleur du soleil (sun), horizon et donc
   brouillard (hor, que stepAtmo recopie dans scene.fog), facteur de brouillard (fk), d'intensité du soleil (sI), sol du ciel (hg).
   Chaque palier glisse d'un septième vers les ancres des pôles, qui ne changent pas. Aucun objet, aucune passe en plus. */
const HEURE0={CIT:{el:16,sun:'#ffc27a',hor:'#e8b07a',sI:1.5},             /* fin d'après-midi ambrée (soleil bas : un peu plus fort, sinon le sol s'éteint) */
  DON045:{el:9,sun:'#b4a8ff',hor:'#6c66b4',fk:1.3},                       /* heure bleue */
  RES374:{el:26,sun:'#e4fff0',hor:'#9cc8b0',hg:'#3c8a6c',fk:1.7,sI:.75},   /* brume jade */
  ASS152:{el:62,sun:'#ffa070',hor:'#e8885a'},                             /* canyon brique sous un soleil de midi */
  ANT120:{el:40,hor:'#a6dccf',hg:'#3c7a3a'}};                             /* oasis turquoise, ombres vertes */
for(const id in HEURE0)for(const n of['sun','hor','hg'])if(HEURE0[id][n])HEURE0[id][n]=LIN(HEURE0[id][n]);
/* ancre z de styles.js (espace écran) ramenée en linéaire pour le ciel : [ombres, tons moyens] */
function ancreZ(Z){if(Z._ancZ!==undefined)return Z._ancZ;if(Z.id==='MAR'||typeof sigOf!=='function')return Z._ancZ=null;
  const z=sigOf(Z).z;return Z._ancZ=z?[0,1].map(i=>z[i].map(x=>Math.pow(x,2.2))):null}
function signer(Z,lv,o){const L=Math.round(clamp(lv||0,-7,7)),k=Math.abs(L)/7,f=famille(Z),F=METEO[f],a=F.z,b=L<0?F.n:F.p;
  /* 1. météo : un septième par palier entre l'ancre 0 et celle du pôle */
  o.wn=Math.min(1,lerp(a[0],b[0],k));o.wv=lerp(a[1],b[1],k);o.wd=lerp(a[2],b[2],k);o.ws=lerp(a[3],b[3],k);o.wI=lerp(a[4],b[4],k);
  const MM=Z.plus&&METEO_MANA[Z.d.mana],cb=(MM&&MM[L<0?'n':'p'])||b[5],ca=(MM&&MM.z)||a[5];mix3(o.wc,ca,cb,k);
  const add=(L===0?a:b)[6];if(add)o.wI=Math.min(o.wI,1.2);
  /* le mélange ne change qu'au changement (famille ou pôle) et seulement pour l'atmosphère réelle (AT) */
  if(o===AT&&add!==addCur){addCur=add;weather.material.blending=add?THREE.AdditiveBlending:THREE.NormalBlending}
  /* 2. soleil : boucle 4 (22 nov.), élévation propre au palier 0 (HEURE0, sinon S.el de sigZone pour les tuiles « plus »),
     puis un septième par palier vers 8° (−7) ou 65° (+7) ; remplace l'écrasement à 35° de la bande −3…+3 */
  const H=HEURE0[Z.id],w=1-k,el0=H?H.el:Z.sig&&Z.sig.el?Z.sig.el:35+clamp((o.el-35)*.25,-5,5),eA=o.el;
  o.el=lerp(el0,L<0?8:65,k);
  if(H){if(H.sun)mix3(o.sun,o.sun,atL(H.sun,Yl(o.sun),m3),.85*w);
    if(H.hor)mix3(o.hor,o.hor,H.hor,.75*w);
    if(H.hg)mix3(o.hg,o.hg,atL(H.hg,Math.max(Yl(o.hg),.03),m3),.6*w);
    if(H.fk)o.fog*=lerp(H.fk,1,k);if(H.sI)o.sunI*=lerp(H.sI,1,k)}
  if(L<=-4){const r=(L+7)/3,e0=Math.max(eA,8);
    /* soleil rasant : un sol plat reçoit sin(él) de la lumière ; on rend au sol ce que l'abaissement lui retire, et un peu plus,
       (au plus 2,4, jamais moins qu'avant) et on baisse un peu le ciel diffus, sinon les ombres longues ne se lisent pas */
    o.sunI=Math.max(o.sunI,Math.min(1.6*o.sunI*Math.sin(e0*D2R)/Math.sin(o.el*D2R),2.4));o.hI*=lerp(.55,.8,r)}
  else if(L>=4){const r=(L-4)/3;
    /* soleil haut : le sol reçoit presque tout ; on plafonne pour ne pas brûler les sols clairs (neige, dalles de +7) */
    o.sunI=Math.min(o.sunI,lerp(1.35,1.15,r))}
  if(modeOf(Z)===3)o.el=Math.min(o.el,17); /* exception Pierre (boucle 2) : grand soleil bas, ombres longues */
  o.el=Math.max(o.el,8);                   /* jamais sous 8° : la boîte d'ombre de fluidite.js déborderait */
  /* 3. sol du ciel hémisphérique : teinte d'ombre du pôle, luminance gardée (au moins .02 pour que la teinte se lise) */
  if(L<0){const t=ombreNeg(Z);if(t)mix3(o.hg,o.hg,atL(t,Math.max(Yl(o.hg),.02),m3),.65*k)}
  return o}
for(const Z of ZN){const a0=Z.atm;if(typeof a0!=='function')continue;
  Z.atm=(lv,o)=>{a0(lv,o);signer(Z,lv,o);
    /* boucle 4 (22 nov.) : zénith et sol du ciel teintés par l'ancre z de styles.js au palier 0 (mélange .3), puis un septième par palier */
    const kA=clamp(Math.abs(lv||0)/7,0,1),zA=ancreZ(Z);
    if(zA&&kA<1){mix3(o.top,o.top,atL(zA[1],Yl(o.top),t3),.3*(1-kA));mix3(o.hg,o.hg,atL(zA[0],Math.max(Yl(o.hg),.03),t3),.3*(1-kA))}
    if(!(lv>0)){const D=duoOf(Z);if(D)duo(o,D[0],D[1],.35*(1-kA),0);return o} /* négatif : le duo descend de 35 % (0) à rien (−7) */
    const k=clamp(lv/7,0,1),kc=Math.min(1,k*2.5); /* plafonds atteints dès le palier 3 */
    o.exp=capTo(o.exp,lerp(1,EXP7[Z.id]||1,k),kc);o.bl=capTo(o.bl,lerp(.8,bl7(Z),k),kc);
    if(Z.plus)o.sunI=capTo(o.sunI,1.25,k); /* le soleil colore, il n'éclaircit plus */
    o.wI=Math.min(o.wI,1.2); /* boucle 3 : la table de météo pose wI ; plafond 1,2 sous le bloom */
    o.fog*=lerp(1,.75,k); /* zone sereine : on voit loin */
    const D=duoOf(Z);
    /* boucle 4 : la couleur du duo part de 35 % au palier 0 (lerp(.35, 1, k)) ; saturation et plafond de l'horizon suivent k */
    if(D)duo(o,D[0],D[1],lerp(.35,1,k),k);
    /* boucle 5 (23 nov. 2026) : RES374 et ANT120 à +7 sortent du lait. Brouillard ×0,6 à +7, sa couleur (A.hor, que stepAtmo
       recopie dans scene.fog) tirée de 10 % vers les tons moyens de la signature (sigMi) au lieu de l'horizon blanc,
       exposition −10 %. Un septième par palier ; −7 et 0 inchangés. */
    const LT=LAIT7[Z.id];if(LT&&typeof sigOf==='function'){const S=sigOf(Z),mi=[0,1,2].map(i=>Math.pow(lerp(S.z[1][i],S.p[1][i],k),2.2));
      o.fog*=lerp(1,LT.fog,k);o.exp*=lerp(1,LT.exp,k);mix3(o.hor,o.hor,mi,.1*k)}
    /* le brouillard prend toujours A.hor dans stepAtmo : il se fond exactement dans l'horizon du ciel */
    return o}}

/* duo dominante / complémentaire, force q (couleur) ; kc pilote la saturation et le plafond de l'horizon (0 : ni l'un ni l'autre).
   Avec q = k et kc = k : exactement le calcul des boucles 2 et 3 (le pôle +7 ne change pas). */
function duo(o,dom,com,q,kc){const h=o.hor;
  /* horizon : glisse vers la teinte du pôle, saturé ×1,4, luminance ramenée à .55 au plus */
  const L0=Yl(h);mix3(h,h,atL(dom,L0,t3),.6*q);const L=Yl(h),s=1+.4*kc;
  for(let j=0;j<3;j++)h[j]=Math.max(0,L+(h[j]-L)*s);const L2=Yl(h),cap=lerp(1,.55,kc);if(L2>cap){const f=cap/L2;h[0]*=f;h[1]*=f;h[2]*=f}
  /* zénith et ombres (ciel hémisphérique) : la complémentaire, à luminance gardée */
  mix3(o.top,o.top,atL(com,Yl(o.top),t3),.5*q);mix3(o.hs,o.hs,atL(com,Yl(o.hs),t3),.22*q);
  /* boucle 3 : le sol du ciel hémisphérique garde la dominante (lumière renvoyée par le sol), puis prend la teinte
     d'ombre du pôle (la complémentaire) pour un tiers : les ombres de +7 ne sont plus du même ton que le soleil */
  mix3(o.hg,o.hg,atL(dom,Math.max(Yl(o.hg),.05),t3),.7*q);mix3(o.hg,o.hg,atL(com,Yl(o.hg),t3),.35*q);
  mix3(o.sun,o.sun,atL(dom,Yl(o.sun),t3),.4*q);
  mix3(o.clc,o.clc,atL(dom,Yl(o.clc),t3),.3*q)}

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
