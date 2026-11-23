/* MozaWorld : le sol vivant (19 novembre 2026, boucle 1).
   Constat : de près, le sol des zones était un aplat uni (une couleur par sommet, un sommet tous les 4,2 m).
   Ici, sans aucune texture image ni objet en plus (0 triangle, 0 appel de dessin), le fragment du terrain reçoit :
   (a) un grain procédural en coordonnées monde : taches de couleur (~8 m) et grain fin (~0,7 m), ±8 % de luminosité,
       fondus avec la distance pour éviter le moiré ;
   (b) un motif propre au biome : rides de sable, givre pailleté, touffes sombres, dalles, strates ; repli : roche selon la pente ;
   (c) un motif de pôle gradué : vers −7, des failles en réseau de Voronoï, émissives dans la couleur du pôle négatif du mana
       (braise, glace noire, vase luisante…), plus larges et plus nombreuses à chaque palier ; vers +7, une incrustation Girih
       or pâle (médaillons à étoile à 10 branches) dont la couverture grandit palier après palier.
   La zone de chaque sommet est lue dans une petite carte (DataTexture GW×GH, un texel par sommet du terrain) :
   R = motif du biome (+128 si la zone a un style de rendu, MAR ou RES), G = (niveau+7)/14, B = mana du pôle.
   Elle est remplie au chargement puis réécrite pour la seule zone qui mue (on enveloppe rebuild).
   Qualité « Fluide » (#define SOL_FIN absent) : ni Voronoï ni Girih complet ; à la place, un repli bon marché
   (failles tirées d'une seule lecture de bruit, médaillon réduit à l'étoile et son décagone), pour que les pôles restent lisibles.
   Lecture seule de core.js et zonesplus.js : rien n'y est modifié.
   Boucle 2 (19 novembre 2026) : fini le même tampon à −7 et à +7. L'octet A de la carte porte désormais une « grammaire de pôle »,
   une par type de zone (0 Citadelle, 1 Donjon, 2 Ressource, 3 Antre, 4 Assemblée, 5 Marché), et le fragment change de recette :
   −7 : glace noire en plaques hexagonales (Citadelle), failles de braise de Voronoï (Donjon, son identité), flaques qui reflètent
        le ciel (Ressource), mycélium phosphorescent (Antre), dalles soulevées en damier (Assemblée), traînées de sel et de suie (Marché) ;
   +7 : Girih or à 10 branches (Citadelle), zellige khatam cobalt et blanc (Donjon), terrasses concentriques de jade (Ressource),
        mosaïque d'hexagones turquoise et nacre (Antre), rosace à 12 branches lapis et argent (Assemblée), losanges blanc et bleu glacier (Marché).
   Couleurs saturées, mêlées à la teinte du mana (jamais au blanc) ; une passe Voronoï 3×3 au plus ; 0 triangle et 0 appel de dessin en plus. */
(function(){
/* codes de motif : 0 roche (repli, teinte selon la pente), 1 sable, 2 givre, 3 touffes, 4 dalles, 5 strates, 6 oasis (sable ou touffes selon la couleur),
   zones-biomes : 7 croûte de sel en polygones, 8 polygones de gel (toundra), 9 basalte et cendre (volcan), 10 glace striée, bleue dans les pentes (glacier) */
const MOTIF_BIO={'Désert de sable':1,'Récif':1,'Oasis':6,'Forêt boréale':2,'Fjord':2,'Cavernes cristallines':2,
  'Steppe':3,'Lande':3,'Delta fluvial':3,'Cité en ruines':4,'Canyon':5,'Falaise côtière':5,
  'Volcan':9,'Mangrove':3,'Jungle':3,'Archipel':1,'Haute montagne':0,'Glacier':10,'Forêt de champignons géants':3,'Marais':3,
  'Désert de sel':7,'Iles flottantes':3,'Savane':3,'Toundra':8};
/* les cinq zones d'origine : Berestograd (forêt boréale, givre), Puits des Neuf Édits (volcan, roche), Lucioles (mangrove, touffes) ;
   Givrecloche et Chinampas ont leur propre style de rendu */
const MOTIF_ORIG={CIT:2,DON:0,ANT:3,MAR:2,RES:3};
const MANA=['Feu','Glace','Eau','Sève','Pierre','Vent'],MANA_ORIG={CIT:5,DON:0,ANT:2,MAR:1,RES:3};
/* couleur (linéaire, au-delà de 1 pour le halo) de ce qui luit au fond des failles, selon le pôle négatif du mana */
const NEG=[[2.6,.85,.16],   /* Feu : braise */
  [.22,.62,1.9],            /* Glace : glace noire, lueur bleu profond */
  [.2,1.55,.85],            /* Eau : vase luisante */
  [1.25,1.45,.12],          /* Sève : sève aigre */
  [1.9,.24,.16],            /* Pierre : sang de la roche */
  [1.15,.42,2.1]];          /* Vent : orage violet */
const STYLEES={MAR:1,RES:1};
const motifDe=Z=>{if(!Z.plus)return MOTIF_ORIG[Z.id]||0;const d=Z.d,m=MOTIF_BIO[d.biome];
  /* deux forêts boréales de même couleur : le Donjon garde le givre, les autres (Ressource, Antre…) ont des touffes de lichen */
  if(d.biome==='Forêt boréale'&&d.type!=='Donjon'&&d.type!=='Citadelle')return 3;return m===undefined?0:m};
const manaDe=Z=>Z.plus?Math.max(0,MANA.indexOf(Z.d.mana)):(MANA_ORIG[Z.id]||0);
/* boucle 2 (19 nov. 2026) : grammaire de pôle par type de zone ; une tuile au type inconnu en reçoit une par hachage de son nom */
const GRAM={Citadelle:0,Donjon:1,Ressource:2,Antre:3,'Assemblée':4,'Marché':5},GRAM_ORIG={CIT:0,DON:1,RES:2,ANT:3,ASS:4,MAR:5};
const grammaireDe=Z=>{if(!Z.plus)return GRAM_ORIG[Z.id]||0;const g=GRAM[Z.d.type];if(g!==undefined)return g;
  let h=7;for(const ch of String(Z.id))h=(h*31+ch.charCodeAt(0))>>>0;return h%6};
/* teinte saturée du pôle positif de chaque mana, pour colorer les marqueteries de +7 (au lieu de les blanchir) */
const POS=[[1,.5,.12],[.45,.75,1],[.12,.85,.75],[.55,.95,.15],[.95,.72,.35],[.72,.5,1]];

const data=new Uint8Array(GN*4);for(let k=0;k<GN;k++){data[k*4+1]=128;data[k*4+3]=0}
const tex=new THREE.DataTexture(data,GW,GH,THREE.RGBAFormat,THREE.UnsignedByteType);
tex.magFilter=tex.minFilter=THREE.NearestFilter;tex.generateMipmaps=false;tex.flipY=false;tex.needsUpdate=true;
function ecrire(Z){const r=motifDe(Z)+(STYLEES[Z.id]?128:0),g=Math.round(clamp((Z.lv+7)/14,0,1)*255),b=manaDe(Z),a=grammaireDe(Z),V=Z.verts;
  for(let n=0;n<V.length;n++){const k=V[n]*4;data[k]=r;data[k+1]=g;data[k+2]=b;data[k+3]=a}tex.needsUpdate=true}
/* rebuild est appelée par son nom (main.js, mue, MZ.set) : la réaffecter suffit à suivre chaque mue */
const _rebuildSol=rebuild;rebuild=function(Z){_rebuildSol(Z);ecrire(Z)};

/* bruit de valeur précalculé par le code (aucune image) : 256×256 texels, réseau de 64×64 cellules lissées, répété sans couture.
   Une seule lecture filtrée remplace quatre hachages. */
const bruitTex=(()=>{const NT=256,NL=64,K=NT/NL,o=new Uint8Array(NT*NT*4);let g=20261119;const al=()=>{g=(g*1664525+1013904223)>>>0;return g/4294967296};
  for(let ch=0;ch<4;ch++){const L=new Float32Array(NL*NL);for(let i=0;i<L.length;i++)L[i]=al();
    for(let y=0;y<NT;y++)for(let x=0;x<NT;x++){const fx=x/K,fy=y/K,ix=Math.floor(fx),iy=Math.floor(fy);let u=fx-ix,v=fy-iy;u=u*u*(3-2*u);v=v*v*(3-2*v);
      const a=L[iy%NL*NL+ix%NL],b=L[iy%NL*NL+(ix+1)%NL],c=L[(iy+1)%NL*NL+ix%NL],d=L[(iy+1)%NL*NL+(ix+1)%NL];
      o[(y*NT+x)*4+ch]=Math.round(255*lerp(lerp(a,b,u),lerp(c,d,u),v))}}
  const t=new THREE.DataTexture(o,NT,NT,THREE.RGBAFormat,THREE.UnsignedByteType);t.wrapS=t.wrapT=THREE.RepeatWrapping;
  t.magFilter=t.minFilter=THREE.LinearFilter;t.generateMipmaps=false;   /* sans mipmaps (moins cher) : le grain fin est déjà fondu par la distance */t.needsUpdate=true;return t})();
const U={tSol:{value:tex},tSolB:{value:bruitTex},uSolG:{value:new THREE.Vector4(X0,Z0,1/CELL,0)},uSolN:{value:new THREE.Vector2(GW,GH)},
  uSolSty:{value:1},uSolNeg:{value:NEG.map(c=>new THREE.Vector3(c[0],c[1],c[2]))},
  uSolPos:{value:POS.map(c=>new THREE.Vector3(c[0],c[1],c[2]))},
  /* boucle 3 (20 nov. 2026) : couleur du zénith (ciel hémisphérique), pour les flaques-miroirs de l'Antre */
  uSolZen:{value:new THREE.Vector3(.3,.4,.6)}};
const fin=()=>QI>0?1:0;let finCompile=-1;

const VERT_DEC='attribute float solEf;varying vec3 vSolP;varying float vSolNy,vSolEf;\n';
const FRAG_DEC=`uniform sampler2D tSol,tSolB;uniform vec4 uSolG;uniform vec2 uSolN;uniform float uSolSty;uniform vec3 uSolNeg[6],uSolPos[6],uSolZen;
varying vec3 vSolP;varying float vSolNy,vSolEf;
float sH(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
vec2 sH2(vec2 p){vec3 q=fract(vec3(p.xyx)*vec3(.1031,.103,.0973));q+=dot(q,q.yzx+33.33);return fract((q.xx+q.yz)*q.zy);}
/* bruit de valeur : une cellule par mètre de p (la texture en couvre 64) */
float sN(vec2 p){return texture2D(tSolB,p*.015625).r;}
float sN2(vec2 p){return texture2D(tSolB,p*.015625).g;}
/* palier marqué : on reste sur le palier entier et on ne bascule qu'au milieu d'un pas (une mue en cours glisse quand même) */
float solPal(float a){return floor(a)+smoothstep(.3,.7,fract(a));}
/* trait de demi-largeur w, filtré sur aa mètres : au loin il s'estompe au lieu de grossir (pas de moiré) */
float solTrait(float d,float w,float aa){return clamp(.5+(w-d)/aa,0.,1.)*min(1.,2.*w/aa);}
#ifdef SOL_FIN
/* distance approchée au bord de la cellule de Voronoï la plus proche : une seule passe 3×3, (F2−F1)/2 */
float solVor(vec2 x){vec2 n=floor(x),f=fract(x);float d1=8.,d2=8.;
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){vec2 g=vec2(float(i),float(j)),r=g+sH2(n+g)*.9+.05-f;float d=dot(r,r);
    if(d<d1){d2=d1;d1=d;}else if(d<d2)d2=d;}
  return (sqrt(d2)-sqrt(d1))*.5;}
#endif
float solSeg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;return length(pa-ba*clamp(dot(pa,ba)/dot(ba,ba),0.,1.));}
/* médaillon Girih : étoile à n branches entrelacée (10 pour la Citadelle, 12 pour l'Assemblée…), couronne et rayons,
   en coordonnées polaires repliées. k = palier (0 à 7), renvoie la distance (m) au trait le plus proche ; « dans » = intérieur de l'étoile */
float solGirih(vec2 l,float k,float n,out float dans,out vec2 q){float r=length(l),a=atan(l.y,l.x),w=6.2831853/n,h=w*.5;
  a=mod(a,w);a=abs(a-h);q=r*vec2(cos(a),sin(a));vec2 cs=vec2(cos(h),sin(h));
  vec2 T=vec2(3.,0.),I=1.55*cs;
  float d=solSeg(q,T,I);dans=step(0.,(I.x-T.x)*(q.y-T.y)-(I.y-T.y)*(q.x-T.x));            /* palier 1 : l'étoile */
  if(k>2.5)d=min(min(d,abs(q.x-3.45)),solSeg(q,T,vec2(3.45,.13)));                           /* 3 : le décagone qui la cerne */
  if(k>4.5)d=min(min(d,solSeg(q,2.15*cs,vec2(1.1,0.))),abs(q.x-.62));    /* 5 : étoile intérieure entrelacée, rosace */
  if(k>5.5){d=min(d,q.x>3.45?q.y:1e3);d=min(d,r>3.63?abs(q.x*cs.y-q.y*cs.x):1e3);}   /* 6 : rayons et treillis qui relient les médaillons */
  return d;}
/* boucle 3 (20 nov. 2026) : briques des écritures de pôle propres à chaque famille (toutes bon marché, sans boucle Voronoï) */
/* treillis de médaillons en quinconce, 9 × 7,8 m divisés par sc : xy = position locale (à l'échelle 1), zw = cellule */
vec4 solMed(vec2 p,float sc){vec2 g=p*sc/vec2(9.,7.8);float row=floor(g.y);g.x+=.5*mod(row,2.);return vec4((fract(g)-.5)*vec2(9.,7.8),floor(g));}
/* dalles en appareil décalé (S en m) : x = distance au joint (m), y = hasard de la dalle, zw = position dans la dalle (−,5 à +,5) */
vec4 solDal(vec2 p,vec2 S){vec2 q=p/S;q.x+=.5*mod(floor(q.y),2.);vec2 f=fract(q)-.5;
  return vec4(min((.5-abs(f.x))*S.x,(.5-abs(f.y))*S.y),sH(floor(q)+vec2(3.3,7.1)),f);}
/* écailles imbriquées (rangées tous les S/2, chaque rangée recouvre celle d'en dessous) :
   x = distance au centre de l'écaille (0 au centre, 1 au bord), y = hasard de l'écaille, z = distance au bord (m) */
vec3 solEca(vec2 p,float S){vec2 u=p/S;float r0=floor(2.*u.y+1.);vec3 o=vec3(1.,.5,0.);float pris=0.;
  for(int i=0;i<3;i++){float r=r0-float(i),ox=.5*mod(r,2.),cx=floor(u.x-ox+.5)+ox;float l=length(vec2(u.x-cx,u.y-r*.5))*2.;
    if(l<1.&&pris<.5){o=vec3(l,sH(vec2(cx*2.,r)+.37),(1.-l)*S*.5);pris=1.;}}
  return o;}
/* losanges en arlequin (S = diagonales en m) : x = distance au bord (m), y = parité (0/1), z = « rayon » du losange (0 au centre, ,5 au bord) */
vec3 solLos(vec2 p,vec2 S){vec2 a=vec2(p.x/S.x+p.y/S.y,p.x/S.x-p.y/S.y),id=floor(a),f=fract(a)-.5;float m=max(abs(f.x),abs(f.y));
  return vec3((.5-m)*S.x*S.y/length(S),mod(id.x+id.y,2.),m);}
/* boucle 2 : pavage hexagonal (rayon inscrit 0,5) : xy = position dans la cellule, zw = centre de la cellule ; et distance « hexagonale » */
vec4 solHex(vec2 p){vec2 s=vec2(1.,1.7320508),h=s*.5,a=mod(p,s)-h,b=mod(p-h,s)-h;vec2 g=dot(a,a)<dot(b,b)?a:b;return vec4(g,p-g);}
float solHexD(vec2 g){g=abs(g);return max(g.x,dot(g,vec2(.5,.8660254)));}
/* une pièce de marqueterie est posée ou non d'un bloc (lecture au centre de la pièce), selon la même carte de couverture que les failles */
float solPose(vec2 c,float k){return step(texture2D(tSolB,c*.001094+vec2(.5,.1)).b,(.12+.13*k)*step(.5,k));}
/* boucle 2 (reprise, 19 nov. 2026) : opacité d'une pièce posée, ~0,18 au palier 1 jusqu'à ~0,96 au palier 7,
   et bord fondu (~0,45 m au palier 1, presque franc au palier 7) : aux bas paliers on devine la marqueterie, on ne voit pas des carreaux collés */
/* boucle 4 (22 nov. 2026) : plafonnée à ,92 (et non plus 1) : le biome se lit entre les plaques, la plaque garde son cobalt */
float solOp(float k){return min(.92,.05+.13*k);}
float solBord(float e,float k){return smoothstep(0.,max(.04,.5-.065*k),e);}
`;
/* fragment : après color_fragment (diffuseColor contient déjà la couleur du sommet) */
const FRAG_COL=`
vec3 solE=vec3(0.);float solGold=0.,solLisse=0.,solH=0.;   /* solH : relief (m) qui perturbe la normale (boucle 3) */
{vec2 p=vSolP.xz;float dc=distance(vSolP,cameraPosition);
 vec2 zuv=(vec2((p.x-uSolG.x)*uSolG.z,(p.y-uSolG.y)*uSolG.z)+.5)/uSolN;vec4 zd=texture2D(tSol,zuv);
 float code=floor(zd.r*255.+.5),sty=step(127.5,code);code-=128.*sty;
 float lv=zd.g*14.-7.,mana=floor(zd.b*255.+.5);
 float ef=smoothstep(.06,.5,vSolEf);                      /* rien au ras des frontières (lecture au plus proche) */
 float mo=ef*(1.-sty*uSolSty);                            /* motif coupé sur Givrecloche et Chinampas quand leur style est actif */
 /* zones-biomes : l'eau des nouvelles tuiles est marquée par une lueur négative infime (zonesplus.js, Z.col) ; ni motif ni marqueterie dessus */
 float solEau=clamp(-vGlow*1000.,0.,1.)*ef;mo*=1.-solEau;
 float nPres=1.-smoothstep(18.,45.,dc),nMoy=1.-smoothstep(45.,110.,dc),nLoin=1.-smoothstep(140.,320.,dc);
 vec3 c=diffuseColor.rgb;
 /* deux lectures de bruit servent à tout (quatre canaux chacune) : B8 à l'échelle de ~8 m, B07 à ~0,7 m (seulement de près) */
 vec4 B8=texture2D(tSolB,p*.001953+vec2(.2,.7)),B07=dc<45.?texture2D(tSolB,p*.02234):vec4(.5);
 /* (a) grain : taches de ~8 m (légère dérive de teinte) et grain de ~0,7 m */
 float lum=1.+(B8.r-.5)*.1*nLoin+(B07.r-.5)*.07*nPres;
 c*=lum*mix(vec3(1.),vec3(1.04,1.,.95),(B8.r-.5)*.8*nLoin);
 float pente=1.-vSolNy;
 /* (b) motif du biome */
 if(mo>.001){
  if(code<.5||code>4.5&&code<5.5){   /* roche selon la pente (et strates pour les canyons et falaises) */
   float rk=smoothstep(.12,.42,pente)*mo;
   vec3 roc=dot(c,vec3(.333))*vec3(.92,.86,.8)*1.05;
   if(code>4.5){float st=sN(vec2(vSolP.y*1.6+B8.g*2.,p.x*.02));roc*=.82+.36*st;c*=1.+(st-.5)*.12*mo*nMoy;rk=max(rk,.25*mo);}
   c=mix(c,roc,rk);}
  float w=0.;   /* poids du sable (1) contre les touffes (3) pour l'oasis */
  if(code>.5&&code<1.5)w=1.;
  if(code>4.5&&code<5.5)w=1.-smoothstep(.1,.3,pente);
  if(code>5.5&&code<6.5)w=smoothstep(.01,-.03,diffuseColor.g-diffuseColor.r*1.02);
  if(w>.001&&dc<38.){   /* rides de sable asymétriques, courbées par le bruit lent */
   float t=dot(p,vec2(.83,.55))+B8.a*5.;float f=fract(t/1.05);
   float ride=smoothstep(0.,.78,f)*(1.-smoothstep(.78,1.,f));
   float rf=1.-smoothstep(12.,38.,dc);c*=1.+(ride-.55)*.2*w*rf*mo*(1.-smoothstep(.35,.6,pente));}
  if(code>1.5&&code<2.5){   /* givre : plaques de gelée blanche et paillettes qui scintillent avec le regard */
   float fp=smoothstep(.5,.78,B8.g+.32*B07.g)*mo;
   c=mix(c,c*.45+vec3(.5,.56,.64)*max(.35,dot(c,vec3(.6))),fp*.38*nMoy);
   if(dc<12.){vec2 ce=floor(p*4.);vec3 vd=(vSolP-cameraPosition)/dc;
    float tw=sH(ce+floor(vd.xz*30.)*7.13),sp=step(.982,tw)*(1.-smoothstep(.06,.2,length(fract(p*4.)-.5)));
    solE+=vec3(.9,.97,1.2)*sp*(.3+fp)*mo*(1.-smoothstep(4.,12.,dc));}}
  float tu=(code>2.5&&code<3.5)?1.:(code>5.5&&code<6.5?1.-w:0.);
  if(tu>.001&&dc<60.){   /* touffes sombres et brins */
   vec2 g=p/1.25,id=floor(g),f=fract(g)-.5,o=sH2(id)-.5;float rr=.16+.2*sH(id+3.);
   float dens=smoothstep(.3,.65,B8.b)*.75+.2;
   vec2 v=f-o*.55;float ri=rr*(.75+.5*B07.b);
   float tf=(1.-smoothstep(ri*.1,ri,length(v)))*step(1.-dens,sH(id+9.));tf*=tf*(2.-tf);
   float br=.25;if(dc<45.){vec2 bb=texture2D(tSolB,vec2(p.x*.1094,p.y*.0203)).rg;br=bb.r*bb.g;}
   c*=1.-(tf*.26*(1.-smoothstep(25.,60.,dc))+(br-.25)*.12*nPres)*tu*mo;c.g*=1.+tf*.05*tu*mo;}
  if(code>3.5&&code<4.5&&dc<110.){   /* dalles posées en quinconce, jointoyées, tons inégaux, ici et là disparues */
   vec2 q=p/vec2(1.7,1.15);float row=floor(q.y);q.x+=.5*mod(row,2.);vec2 f=fract(q)-.5,id=floor(q);
   float e=min((.5-abs(f.x))*1.7,(.5-abs(f.y))*1.15);float keep=smoothstep(.32,.46,B8.a);
   float jt=1.-smoothstep(.03,.08+dc*.004,e);
   c*=mix(1.,(.9+.18*sH(id))*(1.-jt*.45*nMoy),keep*mo);}
  if(code>6.5&&code<8.5&&dc<160.){   /* zones-biomes : polygones (sel : crêtes blanches soulevées ; toundra : rigoles sombres et mouillées) */
   float sel=step(code,7.5),S=sel>.5?5.2:9.5;vec2 wq=p+(vec2(B8.g,B8.a)-.5)*3.2;vec4 hx=solHex(wq/S);
   float e=(.5-solHexD(hx.xy))*S,hs=sH(hx.zw),a2=.03+dc*.006,f=1.-smoothstep(45.,160.,dc);
   float cr=solTrait(e,sel>.5?.16:.22,a2),bd=solTrait(e,sel>.5?.5:.6,a2+.2)-cr;
   if(sel>.5){c*=1.+(hs-.5)*.07*f*mo;c=mix(c,c*.86,bd*f*mo);c=mix(c,vec3(.9,.9,.88)*max(1.,dot(c,vec3(.333))*1.08),cr*f*mo);}
   else{c*=1.+(hs-.5)*.14*f*mo;c=mix(c,c*vec3(.55,.58,.6),cr*f*mo*.8);c=mix(c,c*vec3(.86,.92,.8),bd*f*mo*.6);
    c=mix(c,vec3(.62,.6,.5),step(.86,B07.g)*nPres*mo*.4);}}
  if(code>8.5&&code<9.5){   /* zones-biomes : basalte cordé dans les pentes, cendre grise et mate sur le plat */
   vec2 r2=vec2(dot(p,vec2(.6,.8)),dot(p,vec2(-.8,.6)));float cord=sN(vec2(r2.x*.9,r2.y*.12)+B8.g*3.);
   float pl=1.-smoothstep(.1,.3,pente),ash=smoothstep(.45,.62,B8.b)*pl;
   c*=mix(1.,.72+.5*cord,(1.-pl)*mo*nMoy);
   c=mix(c,vec3(dot(c,vec3(.333)))*1.5+vec3(.03),ash*mo*.8);
   c*=1.+(B07.b-.5)*.25*nPres*mo;}
  if(code>9.5&&code<10.5){   /* zones-biomes : glace striée par le vent, bleu profond dans les pentes (parois des crevasses), paillettes */
   float st=sN(vec2(dot(p,vec2(.8,.6))*.08,dot(p,vec2(-.6,.8))*1.1)+B8.r*2.);
   c*=1.+(st-.5)*.12*mo*nMoy;
   float bl=smoothstep(.2,.55,pente)*mo;c=mix(c,vec3(.02,.13,.4)*(.7+.6*B07.r),bl*.75);
   if(dc<12.){vec2 ce=floor(p*4.);vec3 vd=(vSolP-cameraPosition)/dc;
    float tw=sH(ce+floor(vd.xz*30.)*7.13),sp=step(.985,tw)*(1.-smoothstep(.06,.2,length(fract(p*4.)-.5)));
    solE+=vec3(.9,.97,1.2)*sp*mo*(1.-smoothstep(4.,12.,dc));}}
 }
 /* (c) motif de pôle, palier après palier, selon la grammaire du type de zone.
    Boucle 3 (20 nov. 2026) : une ÉCRITURE propre à chaque famille, aux deux pôles et au niveau 0, identique en Belle et en Fluide
    (seuls le Voronoï du Donjon et le Girih complet restent réservés à SOL_FIN). La grammaire est constante par zone : pas de divergence.
    cr = cran (0 à 3) : l'échelle ou la densité du motif saute aux paliers ±2, ±4, ±6, en plus de la couleur qui suit chaque palier.
    Marché : son écriture passe outre le style gris de Givrecloche ; elle est codée en luminance (claire sur noir à −7, sombre sur blanc à +7). */
 float gr=floor(zd.a*255.+.5),moP=gr>4.5?ef*(1.-solEau):mo;
 float px=length(fwidth(p));   /* boucle 4 (22 nov. 2026) : taille du pixel au sol (m), prise hors de toute branche */
 /* boucle 4 (22 nov. 2026) : bruit des îlots de marqueterie (voir (c) plus bas) et sa pente, pris hors de toute branche (dérivées sûres) :
    en Belle, une lecture de plus, vn(p/5) mêlé au bruit de 8 m (des plaques de 4 à 8 m, plusieurs dans le champ) ;
    en Fluide, le bruit de 8 m déjà lu, resserré pour garder la même couverture : aucune lecture en plus */
 #ifdef SOL_FIN
 float sIl=texture2D(tSolB,p*.003125+vec2(.61,.23)).a*.65+B8.g*.35;
 #else
 float sIl=(B8.g-.5)*.69+.5;
 #endif
 float sIw=max(fwidth(sIl),1e-6),sIg=sIw/max(px,1e-4);   /* sIw : pente par pixel ; sIg : pente par mètre */
 if(moP>.001&&nLoin>0.){
  float alv=abs(lv),k=solPal(alv),cr=floor((alv+.1)*.5),aa=.02+dc*.004,nB=1.-smoothstep(22.,60.,dc);   /* nB : relief de près seulement (sinon il scintille) */
  vec4 wv=texture2D(tSolB,p*.001094+vec2(.5,.1));   /* dérive du tracé (r, g) et part couverte (b), à ~14 m ; a : découpe des îlots (boucle 4) */
  float zone=smoothstep(.0,.06,(.12+.13*k)*step(.5,k)-wv.b);   /* part couverte : un quart au palier 1, tout au palier 7 */
  vec2 w2=p+wv.rg*3.5;float Lc=dot(c,vec3(.333)),pl=1.-smoothstep(.3,.6,pente);   /* pl : les motifs à plat s'effacent dans les fortes pentes (sinon étirés) */
  /* boucle 4 (22 nov. 2026) : le motif de pôle est POSÉ EN MARQUETERIE au lieu d'être tiré comme un papier peint.
     On garde le sol d'avant le motif (sc0, se0) ; à la fin de (c), le motif s'y pose selon trois poids :
     sMq, des îlots de 4 à 8 m (bruit sIl, pris avant (c) : en Belle une lecture de bruit à ~5 m ; en Fluide B8.g, déjà lu, aucune lecture en plus) dont le seuil s baisse avec |lv|,
       bord net (filtré au pixel) ; couverture ~29 % au palier 1, 42 % au 2, 57 % au 4, 72 % au 6, 74 % au 7, sauts aux crans ±2, ±4, ±6 ;
     sUs, l'usure (jusqu'à −60 %, plus forte au bord des plaques ; lue dans B07 et B8, déjà lus) ;
     sJt, un joint sombre de 20 à 30 cm au bord des plaques (largeur tenue au sol grâce à la pente du bruit), et un léger bombement de la plaque (relief, de près).
     Reprise 4.2b : îlots plus petits (4 à 8 m au lieu de 28), joint et usure francs, plus aucun mélange au biome DANS les plaques ;
     le tout aussi en Fluide, mais sans aucune lecture de bruit ajoutée (seulement du calcul). */
  vec3 sc0=c,se0=solE,sCl=c;float sMq=1.,sUs=1.,sJt=0.,sGap=0.,aaM=max(.02,px*.75);   /* aaM : anti-moiré du Marché et de la Citadelle −7, à la taille du pixel */
  if(alv>=.5){
   float sS=.596-.012*(k-1.)-.045*cr;   /* ,596 · ,539 · ,527 · ,47 · ,458 · ,401 · ,389 */
   sS-=.05*step(6.5,k)*step(.5,gr)*step(gr,1.5);   /* boucle 5 (23 nov. 2026, 4.2c) : Donjon, saut ±6 → ±7 franc (couverture ~74 % → ~85 %) */
   float aN=sIw*.75,e=sIl-sS,jw=.2*sIg;   /* jw : 20 cm de joint, en unités de bruit (largeur constante au sol, quelle que soit la pente du bruit) */
   if(lv>0.){   /* pôle + : de vraies plaques, bord net (filtré au pixel), joint sombre */
    sMq=smoothstep(-aN,aN,e);
    sJt=(smoothstep(-1.5*jw-aN,-jw,e)-smoothstep(0.,aN+.3*jw,e))*(1.-smoothstep(.1,.3,px));   /* joint : une rigole sombre juste au bord de la plaque, effacée quand elle tombe sous le pixel */
    sGap=smoothstep(-aN,2.*jw+aN,e);}   /* bombement : la plaque est posée, à peine plus haute que le sol */
   else sMq=smoothstep(-.035-aN,.035+aN,e);   /* pôle − : la ruine gagne par nappes, bord fondu, sans joint */
   float u=mix(.5,B07.a,nPres)*.6+B8.a*.4+(1.-smoothstep(0.,.05,e))*.22;   /* l'usure mord surtout les bords */
   sUs=1.-.6*smoothstep(.5,.78,u);
   if(lv>0.&&gr>4.5){sUs=1.-.3*smoothstep(.5,.78,u);sJt=0.;}   /* boucle 5 (23 nov. 2026, 4.2c) : Marché +, usure plafonnée à −30 % (elle tachait de gris), joint noir retiré (il serpentait en traits épais sur le damier) */
   if(lv>0.&&gr>1.5&&gr<2.5){sJt=0.;sGap=0.;}}   /* boucle 5 (4.2c) : prairie de la Ressource +, ni joint ni bombement (une prairie n'a pas de dalles) */
  if(alv<.5){   /* (c0) niveau 0 : chaque famille garde la trace de son écriture, à faible intensité (de près seulement : rien à payer au loin) */
   if(nMoy<=0.){}
   else if(gr<.5){   /* Citadelle : quelques médaillons Girih à peine en relief, ton sur ton */
    vec4 md=solMed(p,1.);float dans;vec2 q;float d=solGirih(md.xy,1.,10.,dans,q),on=step(sH(md.zw+vec2(31.,17.)),.5);
    solH=.045*(1.-smoothstep(0.,.1,d))*on*nB*moP;c*=1.+.1*solTrait(d,.05,aa)*on*moP;}
   else if(gr<1.5){   /* Donjon : fêlures sombres, sans lueur */
    float db=abs(sN2(w2*.2)-.5)*6.5;c*=1.-(.4*solTrait(db,.035,aa)+.1*(1.-smoothstep(.04,.3,db)))*moP;}
   else if(gr<2.5){   /* Ressource : cailloutis semé en points */
    vec2 g=w2/.95,id=floor(g),o=(sH2(id)-.5)*.55;float pt=solTrait(length(fract(g)-.5-o)*.95,.07,aa)*step(sH(id+5.),.3)*nMoy;
    c*=1.+(sH(id+8.)>.5?.25:-.3)*pt*moP;}
   else if(gr<3.5){   /* Antre : écailles à peine ombrées */
    vec3 ec=solEca(p,1.7);c*=1.+(.12*ec.x-.06-.18*solTrait(ec.z,.03,aa))*nMoy*moP*.3;solH=.0036*ec.x*nB*moP;}   /* boucle 5 (23 nov. 2026) : trace ×0,3, l'écaille devient le signe du pôle + */
   else if(gr<4.5){   /* Assemblée : joints de dallage */
    vec4 dl=solDal(p,vec2(3.4,2.3));c*=1.-(.3*solTrait(dl.x,.035,aa)-(dl.y-.5)*.08)*moP;}
   else{   /* Marché : treillis de losanges, en luminance */
    vec3 lo=solLos(p,vec2(3.,5.));c*=1.+(.3*solTrait(lo.x,.045,aa)-.06*lo.y)*moP;}
  }else if(lv<0.){
   vec3 nc=uSolNeg[0];if(mana>.5)nc=uSolNeg[1];if(mana>1.5)nc=uSolNeg[2];if(mana>2.5)nc=uSolNeg[3];if(mana>3.5)nc=uSolNeg[4];if(mana>4.5)nc=uSolNeg[5];
   float pul=.55+.45*B8.g;
   if(gr<.5){   /* (c−) Citadelle : craquelure sèche, petites plaques bombées aux bords retroussés, fentes noires ; aucune lueur, tout est dans la normale */
    float S=2.4*(1.-.17*cr);zone*=pl;vec2 wq=w2+(B8.ga-.5)*1.6+(texture2D(tSolB,w2*.0078+vec2(.4,.2)).ba-.5)*1.1;   /* deux échelles de dérive : des polygones, pas des alvéoles */vec4 hx=solHex(wq/S);float e=(.5-solHexD(hx.xy))*S,hs=sH(hx.zw);
    vec2 fd=vec2(cos(hs*6.283),sin(hs*6.283));
    float e2=abs(dot(hx.xy,fd))*S+step(.3+.2*cr,fract(hs*7.3))*9.;   /* plaques refendues : plus nombreuses à chaque cran */
    vec4 hy=solHex(wq/(S*.4)+hs*3.);float e3=(.5-solHexD(hy.xy))*S*.4+step(cr,1.5)*9.+step(.5,sH(hy.zw))*9.;   /* craquelure fine dès le palier 4 */
    float ed=min(e,e2),wc=.022+.007*k;
    float fis=max(solTrait(ed,wc,aaM),solTrait(e3,wc*.55,aaM)*.85)*zone;
    vec3 sec=mix(vec3(Lc),c,.3)*vec3(1.,.96,.9)*(.42+.2*hs-.025*k);
    c=mix(c,sec*(1.+(B07.g-.5)*.3*nPres),zone*min(1.,.35+.1*k)*moP);
    c*=1.+.35*(1.-smoothstep(wc,wc+.12,ed))*(1.-fis)*zone*moP;   /* bords retroussés qui prennent la lumière */
    c=mix(c,vec3(.012,.011,.01),fis*moP);
    solH=(.1*smoothstep(0.,.14,ed)+.07*(1.-smoothstep(.06,.5,ed))+dot(hx.xy,fd.yx)*.07*S)*zone*nB*moP;}
   else if(gr<1.5){   /* (c−) Donjon : failles de braise en réseau de Voronoï, son identité depuis la boucle 1 */
    #ifdef SOL_FIN
    float db=solVor(w2/7.5)*7.5+(B07.a-.5)*.1;
    #else
    float db=abs(sN2(w2*.2)-.5)*6.5+(B07.a-.5)*.1;   /* repli « Fluide » : une courbe de niveau du bruit, une seule lecture */
    #endif
    float wc=.02+.035*k;
    float coeur=solTrait(db,wc,aa)*zone,bord=(1.-smoothstep(wc,wc+.12+.1*k+aa,db))*zone;
    c*=1.-bord*(.25+.06*k)*moP;c=mix(c,vec3(.01),coeur*moP);
    solE+=nc*(coeur*(.2+.1*k)*pul+bord*bord*.012*k)*moP*nLoin;}
   else if(gr<2.5){   /* (c−) Ressource : cendres grises semées en points, quelques-uns couvent encore (faible bruit émissif) */
    /* boucle 4 (22 nov. 2026) : une jonchée, plus des pois : cendre posée sur la teinte du sol, déformation doublée, rayons de ,4 à 1,6×, contraste ×,5 */
    vec3 cen=vec3(.2,.195,.19)*(.7+.6*B8.g)*(1.+(B07.r-.5)*.4*nPres);
    c=mix(c,mix(c*.5,cen,.55),zone*min(1.,.35+.1*k)*moP);
    vec2 w7=p+wv.rg*7.;
    float S=.95*(1.-.15*cr);vec2 g=w7/S,id=floor(g),o=(sH2(id)-.5)*.5;float h=sH(id+5.),den=.22+.17*cr+.015*k;
    vec2 v=fract(g)-.5-o;float an=sH(id+7.)*6.283,h2=sH(id+9.);v=vec2(dot(v,vec2(cos(an),sin(an))),dot(v,vec2(-sin(an),cos(an))))*vec2(1.,2.2+2.6*h2);   /* éclats allongés (×2,2 à ×4,8), tournés au hasard */
    float dv=mix((abs(v.x)+abs(v.y))*.8,max(abs(v.x)*.9,abs(v.y)*.6+abs(v.x)*.45),step(.6,h2))*S;   /* esquilles en losange effilé, quelques-unes en lame : plus aucun disque */
    den*=.45+1.1*smoothstep(.25,.75,B8.b);   /* jonchée en traînées : dense ici, clairsemée là */
    float pt=solTrait(dv,(.045+.018*cr)*(.4+1.2*sH(id+3.)),aa)*step(h,den)*zone*nMoy*pl,braise=step(h,den*.2);
    c=mix(c,braise>.5?c*.12:mix(c,vec3(.6,.58,.55),.6)*(.85+.3*sH(id+2.)),pt*moP*.75);   /* boucle 5 (23 nov. 2026, 4.2c) : éclats plus contrastés (,5 → ,75), toujours en losange */
    float cv=smoothstep(.58,.8,sN(w7*.3+B8.r*2.));   /* la cendre couve par plaques */
    solE+=nc*(pt*braise*(.03+.006*k)*(.4+.6*B07.g)+cv*.004*k*zone)*moP*nLoin;}
   else if(gr<3.5){   /* (c−) Antre : flaques noires en miroir, qui prennent le zénith quand on regarde à ses pieds et l'horizon au ras du sol (fresnel) */
    float pz=sN(w2*.085+vec2(3.1,7.7))+(B07.b-.5)*.04*nPres;
    float plat=1.-smoothstep(.12,.3,pente),sf=.66-.03*k-.04*cr,fl=smoothstep(sf,sf+.006+aa*.03,pz)*plat;   /* plus de flaques à chaque palier, un saut à chaque cran */
    float berge=smoothstep(sf-.06,sf-.005,pz)*(1.-fl)*plat,frange=fl*(1.-smoothstep(sf+.004,sf+.03+aa*.03,pz));
    vec3 hor=vec3(.42,.46,.52);
    #ifdef USE_FOG
    hor=fogColor;
    #endif
    float fres=pow(1.-abs((vSolP.y-cameraPosition.y)/dc),3.);
    vec3 refl=mix(uSolZen*.8,hor,fres);
    float ride=(sin(dot(p,vec2(.71,.7))*5.+B07.g*9.)*.5+.5)*nPres;
    c=mix(c,c*vec3(.3,.31,.34),min(1.,.3+.1*k)*moP);   /* boue noire, détrempée */
    c=mix(c,c*2.2+vec3(.02),berge*.5*moP);
    c=mix(c,vec3(.002,.002,.003),fl*moP);
    solE+=(refl*(.05+.6*fres)*(.75+.5*ride)+mix(refl,vec3(1.),.3)*frange*.25)*fl*moP*nLoin;solLisse=fl*moP;
    if(dc<16.){vec2 ce=floor(p*5.);vec3 vd=(vSolP-cameraPosition)/dc;   /* éclats de lumière sur l'eau noire */
     float tw=sH(ce+floor(vd.xz*24.)*5.31),sp=step(.975,tw)*(1.-smoothstep(.05,.18,length(fract(p*5.)-.5)));
     solE+=mix(nc,vec3(1.),.6)*sp*fl*moP*(.5+ride)*(1.-smoothstep(6.,16.,dc));}}
   else if(gr<4.5){   /* (c−) Assemblée : terre craquelée en grandes dalles brisées, basculées, terre rouge dans les joints larges */
    vec2 S=vec2(3.6,2.4)*(1.-.15*cr);zone*=pl;vec4 dl=solDal(p+wv.rg*.8,S);float hs=dl.y;vec2 l=dl.zw*S;
    vec2 fd=normalize(vec2(hs-.5,.7));float sd=dot(l,vec2(fd.y,-fd.x))+(hs-.5)*.5;
    float e2=abs(sd)+step(.7-.15*cr,fract(hs*5.1))*9.;   /* dalles refendues, plus nombreuses à chaque cran */
    float e=min(dl.x,e2),cote=step(0.,sd);
    float man=step(fract(hs*13.7+cote*.37),.05+.06*cr);   /* dalles arrachées : la terre affleure */
    float gap=.03+.01*k,jt=1.-smoothstep(gap,gap+aa+.02,e);
    vec3 dal=mix(vec3(.36,.3,.25),c,.25)*(.65+.6*fract(hs*3.7+cote*.5))*(1.+(B07.g-.5)*.25*nPres);   /* terre sèche ocre-gris, chaque dalle son ton */
    vec3 terre=vec3(.07,.026,.015)*(.6+.7*B07.g);   /* terre brûlée, sombre : la dalle reste plus claire que le joint */
    c=mix(c,dal,zone*min(1.,.4+.1*k)*moP);
    c*=1.+.15*(1.-smoothstep(gap,gap+.2,e))*(1.-jt)*zone*moP;   /* arêtes vives éclairées */
    c=mix(c,terre,max(jt,man*.85)*zone*moP);
    vec2 tl=sH2(vec2(hs*91.,hs*37.+cote))-.5;
    solH=(dot(l,tl)*.12+.05*smoothstep(0.,gap+.05,e))*(1.-man)*zone*nB*moP;
    solE+=nc*jt*zone*.002*k*pul*moP*nLoin;}
   else{   /* (c−) Marché : treillis de losanges à la craie (L ≈ ,78) sur un sol d'encre (≈ ,15) ; le losange intérieur vient au palier 4 */
    vec2 S=vec2(3.,5.)*(1.-.16*cr);vec3 lo=solLos(w2*.15+p*.85,S);float f=S.x*S.y/length(S);
    float mot=max(solTrait(lo.x,.05+.008*k,aaM),k>3.5?solTrait(abs(lo.z-.25)*f,.035,aaM):0.);
    mot=max(mot,k>5.5?solTrait(lo.z*f,.12,aaM):0.);   /* palier 6 : un point au cœur */
    float i=min(1.,.25+.11*k)*moP*pl;
    c=mix(c,vec3(.035)*(.8+.4*B8.r),i);
    c=mix(c,vec3(.6),mot*i);solE+=vec3(.42)*mot*i*nLoin;}
  }else{
   vec3 mp=uSolPos[0];if(mana>.5)mp=uSolPos[1];if(mana>1.5)mp=uSolPos[2];if(mana>2.5)mp=uSolPos[3];if(mana>3.5)mp=uSolPos[4];if(mana>4.5)mp=uSolPos[5];
   if(gr<.5){   /* (c+) Citadelle : Girih en relief doré, levé par la normale seule (aucun trait de couleur), sur un sol d'ivoire */
    float sc=1.;vec4 md=solMed(p,sc);float on=step(sH(md.zw+vec2(31.,17.)),.3+.25*cr)*step(.5,k);   /* médaillons plus nombreux à chaque cran (tous au palier 6) */
    float dans;vec2 q;
    #ifdef SOL_FIN
    float d=solGirih(md.xy,min(k,5.),10.,dans,q)/sc;   /* sans le treillis : en relief seul, il brouillait l'étoile */
    #else
    float d=solGirih(md.xy,min(k,3.),10.,dans,q)/sc;
    #endif
    float wl=.06+.008*k;
    c=mix(c,mix(c,vec3(Lc),.45)*1.1+vec3(.06,.05,.025),min(1.,.35+.09*k)*moP);
    float bord=1.-smoothstep(0.,wl*1.8,d);
    solH=(.07*sqrt(bord)+.02*dans)*on*nB*moP;
    float dor=solTrait(d,wl,.02+dc*.0035)*on*(1.-nB*.2);   /* au loin, où le relief ne se voit plus, un ton sur ton doré */
    c*=mix(vec3(1.),vec3(1.14,.96,.62),dor*moP);   /* boucle 4.2b (22 nov.) : dorure relevée, pour que le pôle se lise à +7 */solGold=max(bord,dans*.4)*on*moP;}
   else if(gr<1.5){   /* (c+) Donjon : traits Girih fins (repli « Fluide ») ou zellige khatam cobalt et blanc */
    vec3 cA=mix(vec3(0.,.08,.5),mp*.5,.05),cB=mix(vec3(.5,.55,.66),mp*.66,.05);
    #ifdef SOL_FIN
    float S=5.2;vec2 id=floor(p/S),l=(fract(p/S)-.5)*S;
    float sa=max(abs(l.x),abs(l.y)),sb=(abs(l.x)+abs(l.y))*.7071,R=1.78,on=solPose((id+.5)*S,k),op=solOp(k)*solBord(S*.5-sa,k);
    float dd=abs(min(sa,sb)-R),ins=step(min(sa,sb),R),oct=step(max(sa,sb),R*.6)*step(4.5,k);
    if(k>2.5)dd=min(dd,S*.5-sa);
    if(k>4.5)dd=min(dd,abs(max(sa,sb)-R*.6));
    float o7=oct*step(6.5,k);   /* boucle 5 (23 nov. 2026, 4.2c) : au palier 7 seulement, l'octogone central passe en ivoire franc */
    vec3 f=mix(mix(cA,cB,ins-oct),cB*1.1,o7);   /* boucle 4.2b : couleurs franches dans les plaques (le biome se voit ENTRE elles) */
    c=mix(c,f*(.88+.24*sH(id+3.)),on*moP*op*mix(ins,1.,smoothstep(1.5,4.5,k)));
    float tr=solTrait(dd,(.03+.006*k)*mix(.7,1.,smoothstep(40.,70.,dc)),aa)*on*solOp(k);   /* boucle 5 (4.2c) : traits ×0,7 jusqu'à 40 m, pleins à 70 m */
    c=mix(c,cA*.45,tr*moP);solGold=on*moP*op*.3;
    solE+=cA*(1.-ins+oct-o7)*on*op*smoothstep(1.5,4.5,k)*.22*moP*nLoin;
    #else
    vec4 md=solMed(p,1.);float on=step(sH(md.zw+vec2(31.,17.)),.16+.12*k)*step(.5,k),dans;vec2 q;
    float d=solGirih(md.xy,min(k,3.),8.,dans,q),a2=.02+dc*.0035,wl=.02+.006*k;
    float tr=solTrait(d,wl,a2)*on,ombre=solTrait(d,wl+.05,a2)*on;
    c*=1.-(ombre-tr)*.3*moP*nMoy;c=mix(c,cA,tr*moP);solGold=tr*moP;solE+=cA*.95*tr*(.04+.03*k)*moP*nLoin;
    #endif
    }
   else if(gr<2.5){   /* (c+) Ressource : prairie claire semée de fleurs à cinq pétales (crème, soleil, teinte du mana) */
    c=mix(c,c*1.1+vec3(.025,.04,.0),min(1.,.35+.09*k)*moP);
    float S=1.25*(1.-.14*cr);vec2 g=w2/S,id=floor(g),v=(fract(g)-.5-(sH2(id+4.)-.5)*.5)*S;
    float h=sH(id+11.),den=.2+.18*cr+.015*k,on=step(h,den)*zone;
    float R=(.15+.035*cr)*(.8+.4*sH(id+2.)),r=length(v),a=atan(v.y,v.x)+h*6.283;
    float pet=clamp(.5+(R*(.4+.6*abs(cos(2.5*a)))-r)/aa,0.,1.)*on*nMoy,coeur=clamp(.5+(R*.24-r)/aa,0.,1.)*on*nMoy;
    float t=fract(h*7.7);vec3 fc=t<.4?vec3(.95,.9,.8):(t<.75?vec3(.95,.72,.2):mix(mp,vec3(1.),.35));
    vec3 moy=mix(vec3(.95,.85,.55),mp,.25);c=mix(c,mix(c,moy,.35),den*zone*(1.-nMoy)*moP);   /* au loin, la prairie prend la teinte des fleurs */
    c=mix(c,fc*(.9+.2*B07.g),pet*moP);c=mix(c,t<.75?vec3(.85,.5,.08):vec3(.98,.9,.5),coeur*moP);}
   else if(gr<3.5){   /* (c+) Antre : nacre en écailles imbriquées, irisée selon le regard, liseré sombre ; l'écaille se bombe vers son bord */
    float S=1.7*(1.-.15*cr);vec3 ec=solEca(p+wv.rg*.6,S);float hs=mix(ec.y,.5,smoothstep(30.,80.,dc));
    vec3 vd=(vSolP-cameraPosition)/dc;float ir=hs*9.+(vd.x+vd.z)*4.+ec.x*2.5;
    vec3 nac=vec3(.86,.85,.87)*(vec3(1.)+.17*vec3(sin(ir),sin(ir+2.1),sin(ir+4.2)));
    nac=mix(nac,mp*max(nac.r,max(nac.g,nac.b)),.12)*(.78+.3*ec.x);
    float i=zone*min(1.,.4+.09*k)*moP,rim=solTrait(ec.z,.022+.004*k,aa)*nMoy;
    c=mix(c,nac,i);c=mix(c,nac*.4,rim*i);
    solH=.035*ec.x*ec.x*zone*nB*moP;solGold=i*.8;}
   else if(gr<4.5){   /* (c+) Assemblée : mosaïque Girih PLEINE à aplats de trois couleurs (terre cuite, sable, vert de cuivre), joints bruns */
    float sc=1.+.15*cr;vec4 md=solMed(p,sc);float on=step(sH(md.zw+vec2(31.,17.)),.4+.22*cr)*step(.5,k);   /* pleine au cran 3 */
    float dans;vec2 q;
    #ifdef SOL_FIN
    float d=solGirih(md.xy,k,12.,dans,q)/sc;
    #else
    float d=solGirih(md.xy,min(k,3.),12.,dans,q)/sc;
    #endif
    vec3 c1=vec3(.6,.26,.13),c2=vec3(.88,.79,.6),c3=vec3(.17,.3,.17);
    float dec=step(q.x,3.45);
    vec3 f=mix(c3,mix(c2,c1,dans),dec);if(k>4.5&&q.x<.62)f=c3;   /* palier 5 : rosace au cœur de l'étoile */
    f*=.93+.12*sH(md.zw+floor(q*2.));   /* boucle 4.2b : couleurs franches dans les plaques (le biome se voit ENTRE elles) */
    c=mix(c,f,on*moP*min(1.,.5+.08*k));
    c=mix(c,vec3(.12,.08,.05),solTrait(d,.03+.004*k,aa)*on*moP);solGold=on*moP*.4;}
   else{   /* (c+) Marché : losanges sombres (≈ ,25) en arlequin sur un sol clair (≈ ,88), petit losange inversé au cœur dès le palier 5 */
    vec2 S=vec2(2.6,4.4)*(1.-.16*cr);vec3 lo=solLos(p,S);float f=S.x*S.y/length(S);
    float bl=lo.y;if(k>4.5&&lo.z<.17)bl=1.-bl;
    /* boucle 4 (22 nov. 2026) : damier filtré (aaM, à la taille du pixel) : bord fondu sur un pixel, et le damier ne tend vers son gris moyen
       que là où le losange fait moins de ~2 pixels (fin du moiré, sans losanges gris baveux à mi-distance) */
    float lis=smoothstep(1.,2.5,f/px);bl=mix(.5,bl,smoothstep(0.,aaM,lo.x)*lis);
    float i=min(1.,.25+.11*k)*moP*pl;
    c=mix(c,vec3(.8)*(.97+.06*B8.r),i);sCl=c;   /* boucle 5 (4.2c) : la teinte claire de la plaque, vers laquelle va l'usure (jamais vers un gris) */
    c=mix(c,vec3(.12),bl*i);
    c=mix(c,vec3(.45),solTrait(min(lo.x,k>4.5?abs(lo.z-.17)*f:9.),.012,aaM)*i*lis);}   /* boucle 5 (4.2c) : joint gris étroit (,025 → ,012) */
  }
  if(alv>=.5){   /* boucle 4 (22 nov. 2026) : pose en marqueterie (îlots, usure, joint) et fondu au loin, voir plus haut */
   /* Citadelle + (relief doré) et Antre + (nacre) : soustraites au fondu, masque et usure adoucis, sinon le pôle ne se lit plus.
      Entre les plaques (wMin) : le sol du biome franc au pôle + ; au pôle −, la ruine y reste à 30 % (75 % pour la boue de l'Antre,
      sinon la signature des sommets y montait en taches cyan). */
   float ex=lv>0.&&(gr<.5||gr>2.5&&gr<3.5)?1.:0.;
   float wMin=lv>0.?.7*ex:(gr>2.5&&gr<3.5?.75:(gr>1.5&&gr<2.5?.6:.3));   /* boucle 5 (4.2c) : cendre de la Ressource − à 60 % entre les plaques */
   float dP=lv>0.&&gr>.5&&gr<1.5?1.:0.,mP=lv>0.&&gr>4.5?1.:0.;   /* boucle 5 (23 nov. 2026, 4.2c) : Donjon + et Marché + */
   float ff=smoothstep(18.,70.,dc)*(1.-ex);
   /* au loin, ton sur ton à moitié : l'écart de luminance du motif sur la teinte du sol, de 60 à 150 m seulement,
      pour que la couleur du pôle se lise encore au milieu du champ */
   c=mix(c,sc0+vec3(dot(c-sc0,vec3(.333))),.5*smoothstep(60.,150.,dc)*(1.-ex));
   c=mix(sCl,c,mix(1.,sUs,mP));   /* Marché + : l'usure éclaircit vers la teinte claire de la plaque, sans passer par sc0 */
   float W=mix(wMin,1.,sMq)*mix(sUs,1.,max(mP,max(ex,step(4.5,gr))*.5))*mix(1.,mix(.4,.7,dP),ff);   /* usure à moitié sur le Marché − (au Marché +, elle est déjà portée par sCl) ; Donjon + : le zellige tient à 70 % au loin (boucle 5, au lieu de 40) */
   c=mix(sc0*(1.-.28*step(.5,lv)*(1.-ex)),c,W);solE=   /* au pôle +, le sol entre les plaques est un peu en retrait (plus sombre) */
   se0+(solE-se0)*W;solH=solH*sMq+.03*sGap*nB*moP;solGold*=sMq;solLisse*=mix(wMin,1.,sMq);
   sJt*=1.-.6*ex;c*=1.-.75*sJt*moP;   /* joint adouci sur l'ivoire de la Citadelle et la nacre de l'Antre */
   /* entre les plaques et dans le joint, la lueur propre du sol (vColor × vGlow, core.js) est retenue : sinon, au Donjon +, le sol braisé
      entre les plaques bavait en coulées orange et effaçait le joint. Boucle 5 (4.2c) : au Donjon +, elle est retirée partout (dans les plaques et entre elles) */
   solE-=vColor.rgb*max(vGlow,0.)*min(1.,.6*(1.-sMq)+.8*sJt+dP)*step(.5,lv)*(1.-ex)*moP;}
 }
 if(solEau>.001){   /* zones-biomes : l'eau reflète le ciel au ras du regard, rides lentes, surface lisse (reflets du soleil) */
  vec3 ciel=vec3(.5,.56,.62);
  #ifdef USE_FOG
  ciel=fogColor;
  #endif
  float fres=pow(1.-abs((vSolP.y-cameraPosition.y)/dc),4.),ride=sin(dot(p,vec2(.71,.7))*2.6+B8.g*12.+B07.g*5.)*.5+.5;
  c=mix(c,c*.6,solEau);solE+=ciel*(.03+.42*fres)*(.75+.45*ride*nMoy)*solEau*nLoin;solLisse=max(solLisse,solEau*.85);}
 diffuseColor.rgb=c;}
`;
/* boucle 3 (20 nov. 2026) : relief du motif de pôle par la normale (comme une carte de relief, mais calculée, sans texture).
   Les dérivées sont prises hors de toute branche (flot uniforme) ; solH est nul hors des motifs en relief. */
const FRAG_NRM=`{vec2 dH=vec2(dFdx(solH),dFdy(solH));vec3 sp=-vViewPosition,sx=dFdx(sp),sy=dFdy(sp);
 if(dot(dH,dH)>1e-12){vec3 R1=cross(sy,normal),R2=cross(normal,sx);float fD=dot(sx,R1);normal=normalize(abs(fD)*normal-sign(fD)*(dH.x*R1+dH.y*R2));}}`;
const _buildSol=buildTerrain;
buildTerrain=function(){_buildSol();
  /* fondu près des frontières : un attribut par sommet, interpolé finement (la carte des zones, elle, est lue au plus proche) */
  const ef=new Float32Array(GN);for(let k=0;k<GN;k++)ef[k]=tEf[k];
  terrain.geometry.setAttribute('solEf',new THREE.BufferAttribute(ef,1));
  for(const Z of ZN)ecrire(Z);
  const m=terrain.material,prev=m.onBeforeCompile;
  m.onBeforeCompile=(s,r)=>{prev(s,r);Object.assign(s.uniforms,U);finCompile=fin();
    s.vertexShader=VERT_DEC+s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSolP=(modelMatrix*vec4(transformed,1.)).xyz;vSolNy=normal.y;vSolEf=solEf;');
    s.fragmentShader=(finCompile?'#define SOL_FIN\n':'')+FRAG_DEC+s.fragmentShader
      .replace('#include <color_fragment>','#include <color_fragment>\n'+FRAG_COL)
      .replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=mix(mix(roughnessFactor,.38,solGold),.06,solLisse);')
      .replace('#include <normal_fragment_maps>','#include <normal_fragment_maps>\n'+FRAG_NRM)
      .replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance+=solE;')};
  m.customProgramCacheKey=()=>'sol'+fin();m.needsUpdate=true};
/* à chaque image : style de zone actif ou non, et recompilation si la qualité passe en Fluide ou en sort */
const _drawSol=draw;
draw=function(t){U.uSolSty.value=(typeof STYLE_ON==='undefined'||STYLE_ON)?1:0;
  if(typeof hemi!=='undefined')U.uSolZen.value.set(hemi.color.r,hemi.color.g,hemi.color.b);
  if(terrain&&finCompile>=0&&fin()!==finCompile){finCompile=fin();terrain.material.needsUpdate=true}_drawSol(t)};
})();
