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
/* codes de motif : 0 roche (repli, teinte selon la pente), 1 sable, 2 givre, 3 touffes, 4 dalles, 5 strates, 6 oasis (sable ou touffes selon la couleur) */
const MOTIF_BIO={'Désert de sable':1,'Récif':1,'Oasis':6,'Forêt boréale':2,'Fjord':2,'Cavernes cristallines':2,
  'Steppe':3,'Lande':3,'Delta fluvial':3,'Cité en ruines':4,'Canyon':5,'Falaise côtière':5};
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
  uSolPos:{value:POS.map(c=>new THREE.Vector3(c[0],c[1],c[2]))}};
const fin=()=>QI>0?1:0;let finCompile=-1;

const VERT_DEC='attribute float solEf;varying vec3 vSolP;varying float vSolNy,vSolEf;\n';
const FRAG_DEC=`uniform sampler2D tSol,tSolB;uniform vec4 uSolG;uniform vec2 uSolN;uniform float uSolSty;uniform vec3 uSolNeg[6],uSolPos[6];
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
float solGirih(vec2 l,float k,float n,out float dans){float r=length(l),a=atan(l.y,l.x),w=6.2831853/n,h=w*.5;
  a=mod(a,w);a=abs(a-h);vec2 q=r*vec2(cos(a),sin(a)),cs=vec2(cos(h),sin(h));
  vec2 T=vec2(3.,0.),I=1.55*cs;
  float d=solSeg(q,T,I);dans=step(0.,(I.x-T.x)*(q.y-T.y)-(I.y-T.y)*(q.x-T.x));            /* palier 1 : l'étoile */
  if(k>2.5)d=min(min(d,abs(q.x-3.45)),solSeg(q,T,vec2(3.45,.13)));                           /* 3 : le décagone qui la cerne */
  if(k>4.5)d=min(min(d,solSeg(q,2.15*cs,vec2(1.1,0.))),abs(q.x-.62));    /* 5 : étoile intérieure entrelacée, rosace */
  if(k>5.5){d=min(d,q.x>3.45?q.y:1e3);d=min(d,r>3.63?abs(q.x*cs.y-q.y*cs.x):1e3);}   /* 6 : rayons et treillis qui relient les médaillons */
  return d;}
/* boucle 2 : pavage hexagonal (rayon inscrit 0,5) : xy = position dans la cellule, zw = centre de la cellule ; et distance « hexagonale » */
vec4 solHex(vec2 p){vec2 s=vec2(1.,1.7320508),h=s*.5,a=mod(p,s)-h,b=mod(p-h,s)-h;vec2 g=dot(a,a)<dot(b,b)?a:b;return vec4(g,p-g);}
float solHexD(vec2 g){g=abs(g);return max(g.x,dot(g,vec2(.5,.8660254)));}
/* une pièce de marqueterie est posée ou non d'un bloc (lecture au centre de la pièce), selon la même carte de couverture que les failles */
float solPose(vec2 c,float k){return step(texture2D(tSolB,c*.001094+vec2(.5,.1)).b,(.12+.13*k)*step(.5,k));}
`;
/* fragment : après color_fragment (diffuseColor contient déjà la couleur du sommet) */
const FRAG_COL=`
vec3 solE=vec3(0.);float solGold=0.,solLisse=0.;
{vec2 p=vSolP.xz;float dc=distance(vSolP,cameraPosition);
 vec2 zuv=(vec2((p.x-uSolG.x)*uSolG.z,(p.y-uSolG.y)*uSolG.z)+.5)/uSolN;vec4 zd=texture2D(tSol,zuv);
 float code=floor(zd.r*255.+.5),sty=step(127.5,code);code-=128.*sty;
 float lv=zd.g*14.-7.,mana=floor(zd.b*255.+.5);
 float ef=smoothstep(.06,.5,vSolEf);                      /* rien au ras des frontières (lecture au plus proche) */
 float mo=ef*(1.-sty*uSolSty);                            /* motif coupé sur Givrecloche et Chinampas quand leur style est actif */
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
  if(code>5.5)w=smoothstep(.01,-.03,diffuseColor.g-diffuseColor.r*1.02);
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
  float tu=(code>2.5&&code<3.5)?1.:(code>5.5?1.-w:0.);
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
 }
 /* (c) motif de pôle, palier après palier, selon la grammaire du type de zone (boucle 2, 19 nov. 2026) */
 if(mo>.001&&nLoin>0.&&abs(lv)>.25){
  float k=solPal(abs(lv)),gr=floor(zd.a*255.+.5),aa=.02+dc*.004;
  vec3 wv=texture2D(tSolB,p*.001094+vec2(.5,.1)).rgb;   /* dérive du tracé (r, g) et part couverte (b), à ~14 m */
  float zone=smoothstep(.0,.06,(.12+.13*k)*step(.5,k)-wv.b);   /* part couverte : un quart au palier 1, tout au palier 7 */
  if(lv<0.){
   vec2 w2=p+wv.rg*3.5;
   vec3 nc=uSolNeg[0];if(mana>.5)nc=uSolNeg[1];if(mana>1.5)nc=uSolNeg[2];if(mana>2.5)nc=uSolNeg[3];if(mana>3.5)nc=uSolNeg[4];if(mana>4.5)nc=uSolNeg[5];
   float pul=.55+.45*B8.g;
   #ifndef SOL_FIN
   float db=abs(sN2(w2*.2)-.5)*6.5+(B07.a-.5)*.1;   /* repli « Fluide » : une courbe de niveau du bruit, une seule lecture, pour toutes les grammaires */
   #endif
   if(gr<.5){   /* (c−) Citadelle : glace noire fendue en plaques hexagonales mates, givre blanc dans les joints, sans lueur */
    #ifdef SOL_FIN
    vec4 hx=solHex(w2/3.4);float hp=sH(hx.zw),dj=(.5-solHexD(hx.xy))*3.4;
    vec2 fd=vec2(cos(hp*6.283),sin(hp*6.283));dj=min(dj,abs(dot(hx.xy,fd))*3.4+step(.45,fract(hp*7.3))*9.);   /* une fêlure droite sur une plaque sur deux */
    #else
    float hp=B8.b,dj=db;
    #endif
    float wj=.02+.016*k,joint=solTrait(dj,wj,aa)*zone,givre=1.-smoothstep(wj,wj+.16+.05*k+aa,dj);givre*=givre*zone;
    vec3 noire=vec3(.010,.014,.022)*(.7+.8*hp)+nc*.004;
    c=mix(c,noire*(1.+(B07.g-.5)*.6*nPres),zone*min(1.,.3+.1*k)*mo);
    c=mix(c,vec3(.6,.68,.78)*(.8+.3*B07.r),max(joint,givre*.55)*mo);}
   else if(gr>1.5&&gr<2.5){   /* (c−) Ressource : flaques sombres et miroitantes, le ciel s'y reflète au ras du regard (fresnel), aucun trait qui luit */
    #ifdef SOL_FIN
    float pz=sN(w2*.085+vec2(3.1,7.7))+(B07.b-.5)*.05;
    #else
    float pz=1.-db*.14;
    #endif
    float plat=1.-smoothstep(.1,.28,pente),sf=.77-.035*k,fl=smoothstep(sf,sf+.012+aa*.05,pz)*step(.5,k)*plat,mouil=smoothstep(sf-.1,sf,pz)*step(.5,k);   /* l'eau ne tient que sur le plat */
    vec3 ciel=vec3(.42,.46,.52);
    #ifdef USE_FOG
    ciel=fogColor;
    #endif
    float fres=pow(1.-abs((vSolP.y-cameraPosition.y)/dc),5.);
    c*=1.-mouil*(.3+.04*k)*mo;                     /* terre détrempée autour */
    c=mix(c,vec3(.004,.005,.007),fl*mo);
    solE+=ciel*(.08+1.6*fres)*(1.+(B07.g-.5)*.3*nPres)*fl*mo*nLoin;solLisse=fl*mo;
    c=mix(c,vec3(.03,.035,.04),solTrait(abs(pz-sf)*14.,.04,aa)*plat*mo*step(.5,k));}   /* liseré de vase au bord de l'eau */
   else if(gr>2.5&&gr<3.5){   /* (c−) Antre : mycélium phosphorescent, lignes fines et ramifiées tirées d'un bruit à domaine déformé */
    #ifdef SOL_FIN
    vec2 q=w2*.16;q+=(texture2D(tSolB,q*.008+vec2(.3,.6)).ba-.5)*2.6;
    float d1=abs(sN(q)-.5)*4.,d2=abs(sN2(q*2.7+3.)-.5)*1.5;
    float wm=.016+.006*k,ram=1.-smoothstep(.25,.9+.12*k,d1);   /* les ramifications ne poussent qu'auprès des filaments */
    float fil=max(solTrait(d1,wm,aa),solTrait(d2,wm*.6,aa)*ram),halo=1.-smoothstep(wm,wm+.35+.03*k,d1);
    #else
    float wm=.02+.007*k,fil=solTrait(db,wm,aa),halo=1.-smoothstep(wm,wm+.4,db);
    #endif
    fil*=zone;halo*=halo*zone;
    vec3 ph=mix(vec3(.2,.85,1.6),nc,.25);
    c=mix(c,vec3(dot(c,vec3(.3,.4,.3)))*vec3(.3,.3,.36),zone*min(1.,.25+.11*k)*mo);   /* sol étouffé, gris de cendre */
    c=mix(c,ph*.2,fil*mo);
    solE+=ph*(fil*(.2+.09*k)*pul+halo*.012*k)*mo*nLoin;}
   else if(gr>3.5&&gr<4.5){   /* (c−) Assemblée : dalles soulevées et fendues en damier, bords qui prennent la lumière, centres assombris */
    #ifdef SOL_FIN
    vec2 g=w2/3.6,id=floor(g),f=fract(g)-.5;float hs=sH(id+7.),ch=mod(id.x+id.y,2.);
    float e=(.5-max(abs(f.x),abs(f.y)))*3.6,dj=min(e,abs(f.x*(hs>.5?1.:-1.)+f.y+(hs-.5)*.4)*2.55+step(.6,sH(id+2.))*9.);
    #else
    float e=db,dj=db,ch=step(.5,B8.b),hs=B8.a;
    #endif
    float fente=solTrait(dj,.025+.016*k,aa)*zone,rim=1.-smoothstep(0.,.25+.04*k,e),leve=ch*(.55+.45*hs);
    c*=1.-zone*mo*min(.85,.2+.08*k)*(1.-rim)*(.55+.45*leve);   /* centres assombris */
    c=mix(c,c*2.2+vec3(.035,.03,.028),rim*leve*zone*mo*min(1.,.3+.1*k));   /* bords soulevés, éclairés */
    c=mix(c,vec3(.006),fente*mo);
    solE+=nc*(fente*.04*k*pul+rim*leve*.01*k*zone)*mo*nLoin;}
   else if(gr>4.5){   /* (c−) Marché : traînées de sel et de suie couchées par le vent, grain sombre, sans lueur */
    vec2 r2=vec2(dot(w2,vec2(.8,.6)),dot(w2,vec2(-.6,.8)));
    #ifdef SOL_FIN
    float sel=sN(vec2(r2.x*.04,r2.y*.5)),suie=sN2(vec2(r2.x*.05,r2.y*.7)+4.);
    #else
    float sel=1.-db*.22,suie=B8.b;
    #endif
    float ks=.66-.022*k,ms=smoothstep(ks,ks+.07,sel)*zone,mn=smoothstep(ks-.03,ks+.06,suie)*zone;
    c*=1.-zone*mo*(.15+.06*k)*(1.+(B07.a-.5)*1.6*nPres);
    c=mix(c,vec3(.008,.007,.006),mn*.9*mo);
    c=mix(c,vec3(.46,.45,.43)*(.65+.7*B07.r),ms*(1.-mn)*.85*mo);}
   else{   /* (c−) Donjon : failles de braise en réseau de Voronoï, son identité depuis la boucle 1 */
    #ifdef SOL_FIN
    float db=solVor(w2/7.5)*7.5+(B07.a-.5)*.1;
    #endif
    float wc=.02+.035*k;
    float coeur=solTrait(db,wc,aa)*zone,bord=(1.-smoothstep(wc,wc+.12+.1*k+aa,db))*zone;
    c*=1.-bord*(.25+.06*k)*mo;c=mix(c,vec3(.01),coeur*mo);
    solE+=nc*(coeur*(.2+.1*k)*pul+bord*bord*.012*k)*mo*nLoin;}
  }else{
   vec3 mp=uSolPos[0];if(mana>.5)mp=uSolPos[1];if(mana>1.5)mp=uSolPos[2];if(mana>2.5)mp=uSolPos[3];if(mana>3.5)mp=uSolPos[4];if(mana>4.5)mp=uSolPos[5];
   /* deux couleurs saturées par grammaire (trait ou première pièce, fond ou seconde pièce), et l'ordre de l'étoile du repli */
   vec3 cA=vec3(.95,.7,.3),cB=vec3(.3,.6,.62);float n=10.;
   if(gr>.5&&gr<1.5){cA=vec3(.02,.07,.55);cB=vec3(.66,.71,.8);n=8.;}       /* Donjon : cobalt et blanc */
   if(gr>1.5&&gr<2.5){cA=vec3(.03,.36,.17);cB=vec3(.16,.6,.34);n=6.;}     /* Ressource : jade */
   if(gr>2.5&&gr<3.5){cA=vec3(.02,.5,.55);cB=vec3(.82,.74,.8);n=6.;}      /* Antre : turquoise et nacre */
   if(gr>3.5&&gr<4.5){cA=vec3(.78,.8,.88);cB=vec3(.04,.08,.55);n=12.;}    /* Assemblée : argent sur lapis */
   if(gr>4.5){cA=vec3(.2,.55,.95);cB=vec3(.82,.88,.93);n=4.;}             /* Marché : bleu glacier et blanc */
   cA=mix(cA,mp*max(cA.r,max(cA.g,cA.b)),.18);cB=mix(cB,mp*max(cB.r,max(cB.g,cB.b)),.18);   /* teinte du mana, jamais le blanc */
   float gi=1.;
   #ifdef SOL_FIN
   gi=(gr<.5||gr>3.5&&gr<4.5)?1.:0.;   /* Citadelle et Assemblée : médaillons ; les autres : marqueteries pleines */
   #endif
   if(gi>.5){   /* (c+) médaillons Girih en quinconce, de plus en plus nombreux et ouvragés (10 branches or, ou 12 branches argent sur lapis) */
    vec2 g=p/vec2(9.,7.8);float row=floor(g.y);g.x+=.5*mod(row,2.);vec2 id=floor(g),l=(fract(g)-.5)*vec2(9.,7.8);
    float on=step(sH(id+vec2(31.,17.)),.16+.12*k)*step(.5,k);
    float dans;
    #ifdef SOL_FIN
    float d=solGirih(l,k,n,dans);
    #else
    float d=solGirih(l,min(k,3.),n,dans);   /* repli « Fluide » : l'étoile et son polygone seulement */
    #endif
    float wl=.02+.006*k,a2=.02+dc*.0035;
    float tr=solTrait(d,wl,a2)*on,ombre=solTrait(d,wl+.05,a2)*on;
    float fond=dans*on*(gr>3.5&&gr<4.5?step(1.5,k)*min(.95,.4+.08*k):step(3.5,k)*(k>5.5?.32:.18));
    c*=1.-(ombre-tr)*.3*mo*nMoy;
    c=mix(c,cB*(gr>3.5&&gr<4.5?1.:max(.45,dot(c,vec3(.45))*1.2)),fond*mo*nMoy);
    c=mix(c,cA,tr*mo);solGold=max(tr,fond*.6)*mo;
    solE+=cA*.95*tr*(.04+.03*k)*mo*nLoin;}
   #ifdef SOL_FIN
   else if(gr<1.5){   /* (c+) Donjon : zellige khatam, étoiles à 8 branches de cobalt sur fond blanc, octogone central dès le palier 5 */
    float S=5.2;vec2 id=floor(p/S),l=(fract(p/S)-.5)*S;
    float sa=max(abs(l.x),abs(l.y)),sb=(abs(l.x)+abs(l.y))*.7071,R=1.78,on=solPose((id+.5)*S,k);
    float dd=abs(min(sa,sb)-R),ins=step(min(sa,sb),R),oct=step(max(sa,sb),R*.6)*step(4.5,k);
    if(k>2.5)dd=min(dd,S*.5-sa);
    if(k>4.5)dd=min(dd,abs(max(sa,sb)-R*.6));
    vec3 f=mix(cB,cA,ins-oct);
    c=mix(c,f*(.88+.24*sH(id+3.)),on*mo*min(1.,.55+.07*k));
    float tr=solTrait(dd,.03+.006*k,aa)*on;
    c=mix(c,cA*.3,tr*mo);solGold=on*mo*.8;}
   else if(gr<2.5){   /* (c+) Ressource : terrasses concentriques de jade, plus larges à chaque palier, liserés clairs aux contremarches */
    float S=30.;vec4 hx=solHex(p/S);float r=length(hx.xy)*S,hs=sH(hx.zw);
    float on=step(hs,.3+.1*k)*step(.5,k),Rm=(4.+2.6*k)*(.8+.3*hs);
    float pas=2.4,ri=floor(r/pas),fr=fract(r/pas);
    float dedans=on*(1.-smoothstep(Rm-.4,Rm+.4,r));
    vec3 f=mix(cA,cB,mod(ri,2.))*(1.-.3*smoothstep(.55,1.,fr));
    c=mix(c,f,dedans*mo*min(1.,.5+.07*k));
    float tr=solTrait(min(fr,1.-fr)*pas,.04+.008*k,aa)*dedans;
    c=mix(c,cB*1.45,tr*mo);solGold=dedans*mo*.4;
    solE+=cB*tr*.02*k*mo*nLoin;}
   else if(gr<3.5){   /* (c+) Antre : mosaïque d'hexagones turquoise et nacre (la nacre change avec le regard), joints sombres */
    float S=1.4;vec4 hx=solHex(p/S);float e=(.5-solHexD(hx.xy))*S,hs=sH(hx.zw),on=solPose(hx.zw*S,k);
    hs=mix(hs,.5,smoothstep(30.,80.,dc));   /* au loin, les pièces se fondent en une teinte moyenne (pas de moiré) */
    float nac=smoothstep(.55,.6,hs*.55+B8.b*.6);
    vec3 vd=(vSolP-cameraPosition)/dc;float ir=hs*11.+(vd.x+vd.z)*5.;
    vec3 nacre=cB*(vec3(1.)+.22*vec3(sin(ir),sin(ir+2.1),sin(ir+4.2)));
    c=mix(c,mix(cA*(.8+.4*hs),nacre,nac),on*mo*min(1.,.6+.06*k));
    float tr=solTrait(e,.022+.004*k,aa)*on;
    c=mix(c,cA*.22,tr*mo);solGold=on*mo*.85;}
   else{   /* (c+) Marché : losanges en arlequin blanc et bleu glacier, petit losange inversé au cœur dès le palier 5 */
    vec2 a=vec2(p.x/2.6+p.y/4.4,p.x/2.6-p.y/4.4),id=floor(a),f=fract(a)-.5;
    float m=max(abs(f.x),abs(f.y)),e=(.5-m)*2.24,on=solPose(vec2((id.x+id.y+1.)*1.3,(id.x-id.y)*2.2),k);
    float bl=mod(id.x+id.y,2.);if(k>4.5&&m<.17)bl=1.-bl;
    c=mix(c,mix(cB,cA,bl)*(.9+.2*sH(id)),on*mo*min(1.,.55+.07*k));
    float tr=solTrait(min(e,k>4.5?abs(m-.17)*2.24:9.),.025+.005*k,aa)*on;
    c=mix(c,cA*.35,tr*mo);solGold=on*mo*.7;}
   #endif
  }
 }
 diffuseColor.rgb=c;}
`;
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
      .replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance+=solE;')};
  m.customProgramCacheKey=()=>'sol'+fin();m.needsUpdate=true};
/* à chaque image : style de zone actif ou non, et recompilation si la qualité passe en Fluide ou en sort */
const _drawSol=draw;
draw=function(t){U.uSolSty.value=(typeof STYLE_ON==='undefined'||STYLE_ON)?1:0;
  if(terrain&&finCompile>=0&&fin()!==finCompile){finCompile=fin();terrain.material.needsUpdate=true}_drawSol(t)};
})();
