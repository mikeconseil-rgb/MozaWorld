/* MozaWorld 2.6 : des lieux à découvrir dans chaque nouvelle tuile (18 novembre, idée 8 de l'évaluation graphique).
   Constat : entre l'entrée d'une zone et sa Pierre, il n'y avait rien à voir. Avec les zones agrandies (SC 3 → 4 dans core.js),
   ce vide se serait encore plus senti. Chaque nouvelle tuile reçoit donc trois lieux, loin de la Pierre et dans trois directions :
   un camp, un cercle de pierres levées, un belvédère. Un rai de lumière les signale de loin tant que leur secret n'est pas trouvé.
   Leurs couleurs suivent le pôle de la zone. Les secrets des lieux sont ajoutés APRÈS tous les autres (lieuxSecrets(), appelé par
   main.js après la construction du monde), pour ne pas décaler les numéros des secrets déjà trouvés dans les sauvegardes. */
const LIEUX=[];
(function(){
const vc=M(0xffffff,{vertexColors:true}),lueur=new THREE.MeshBasicMaterial({color:new THREE.Color(3,1.9,.8)});
/* boucle 2 (19 nov. 2026) : le rai devient un cône ouvert additif, sans brouillard et sans écriture de profondeur.
   Alpha = (1 − y/140)² × smoothstep(18, 45, d) × (1 − smoothstep(140, 400, d)) × .22, d = distance horizontale caméra → lieu :
   invisible de près (on est dessus), éteint au-delà de 400 m (il ne raye plus le ciel de loin en trait blanc diagonal).
   Bords adoucis par l'angle de vue (f³) (le cône n'a plus de silhouette dure). Couleur : le pôle positif de la zone du lieu, saturé (un pôle presque blanc, comme la Glace, ne redonne pas un trait blanc).
   L'échelle d'instance (L.rai.set) continue d'éteindre le rai quand le secret est trouvé. */
const raiMat=c=>new THREE.ShaderMaterial({uniforms:{col:{value:new THREE.Color(c[0],c[1],c[2])}},transparent:true,depthWrite:false,fog:false,blending:THREE.AdditiveBlending,
  vertexShader:`varying float vA;varying vec3 vN,vV;void main(){mat4 m=modelMatrix;
#ifdef USE_INSTANCING
m=m*instanceMatrix;
#endif
vec4 w=m*vec4(position,1.);vec3 o=(m*vec4(0.,0.,0.,1.)).xyz;float d=distance(o.xz,cameraPosition.xz),y=clamp(position.y/140.,0.,1.);
vA=(1.-y)*(1.-y)*smoothstep(18.,45.,d)*(1.-smoothstep(140.,400.,d))*.22;
vN=mat3(m)*vec3(normal.x,0.,normal.z);vV=cameraPosition-w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
  fragmentShader:`uniform vec3 col;varying float vA;varying vec3 vN,vV;void main(){float f=abs(dot(normalize(vN),normalize(vV)));gl_FragColor=vec4(col,vA*f*f*f);}`});
const tente=(x,z,r,c)=>[new THREE.ConeGeometry(r,r*1.5,4).rotateY(Math.PI/4).translate(x,r*.75,z),c];
const GEO={
  camp:merge([tente(-5,0,3.2,0x8a6a4a),tente(4,-4,2.6,0x7a5a3a),tente(3,5,2.4,0x9a7a52),
    ...Array.from({length:8},(_,i)=>[box(.6,.4,.6,Math.cos(i*Math.PI/4)*1.6,.2,Math.sin(i*Math.PI/4)*1.6),0x4a4440]),
    [box(1.2,1,1.2,-1,.5,6),0x6a4a2a],[box(1,.8,1,.4,.4,7),0x6a4a2a],[cyl(.08,.08,4,5,-7,2,4),0x3a2a1a],[box(1.4,1,.05,-6.3,3.4,4),0xd8c8a0]]),
  feu:new THREE.ConeGeometry(.8,1.6,5).translate(0,.8,0),
  cercle:merge([...Array.from({length:9},(_,i)=>{const a=i*Math.PI*2/9,h=4+(i%3)*1.4;return[box(1.4,h,.9,Math.cos(a)*9,h/2,Math.sin(a)*9,-a),0x8a8478]}),
    [cyl(2,2.4,1.2,10,0,.6,0),0x6a6460],[box(3.2,.5,1.6,0,1.45,0),0x9a948a]]),
  glyphe:new THREE.TorusGeometry(1.1,.12,4,10).rotateX(Math.PI/2).translate(0,2,0),
  belvedere:merge([[cyl(3.5,5,13,6,0,6.5,0),0x6a6258],[cyl(4.2,4.2,.8,6,0,13.4,0),0x8a8070],
    ...Array.from({length:14},(_,i)=>{const a=i*.55,y=i*.9+.45;return[box(2.2,.45,1.4,Math.cos(a)*5.6,y,Math.sin(a)*5.6,-a),0x7a7268]}),
    [cyl(.1,.1,5,5,0,16.3,0),0x3a2a1a],[box(2.2,1.4,.06,1.1,18,0),0xffffff]]),
  rai:new THREE.CylinderGeometry(2.5,.3,140,8,1,true).translate(0,70,0)}; /* boucle 2 : cône ouvert, 0,3 m au pied, 2,5 m au sommet */
const SORTES=[['camp','Le camp abandonné','Des cendres encore tièdes, trois tentes et un panneau de bois. Quelqu\'un a quitté ce camp en hâte.'],
  ['cercle','Le cercle de pierres','Neuf pierres levées autour d\'un autel. Le glyphe qui flotte au-dessus tourne dans le sens du pôle.'],
  ['belvedere','Le belvédère','Une tour de roc et son escalier en spirale. D\'en haut, on voit toute la tuile et ses voisines.']];

for(const Z of ZN)if(Z.plus)(()=>{const [neg,pos]=PMANA[Z.d.mana]||PMANA.Pierre,cN=LIN(neg),cP=LIN(pos),bl=[1,1,1];
  const rL=cP[0]*.2126+cP[1]*.7152+cP[2]*.0722,rC=cP.map(x=>Math.max(0,rL+(x-rL)*2.2)*.5),raiZ=raiMat(rC); /* boucle 2 : rai teinté par le pôle de la zone */
  const build0=Z.build,update0=Z.update;Z.lieux=[];
  Z.build=()=>{build0();const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));
    SORTES.forEach(([k,titre,texte],i)=>{
      /* trois directions à 120°, aussi loin que la tuile le permet (60 % du rayon, ou moins près d'un bord) */
      const a=i*TAU/3+Z.i*1.3+.5;let r=R*.6,u=0,v=0;for(let j=0;j<10;j++){u=Math.cos(a)*r;v=Math.sin(a)*r;if(Z.inside(u,v,22)&&Math.hypot(u+20,v)>70)break;r*=.88}
      const p=Z.w(u,v),ry=rnd()*TAU,L={Z,k,titre:titre+' · '+Z.d.nom.replace(/^(La |Le |Les |L')/,''),texte,u,v,x:p[0],z:p[1],ry,parts:[]};
      const add=(g,mat,sh)=>{const it=inst(g,mat,sh);it.add(p[0],0,p[1],1,1,1,ry);it.make();L.parts.push(it);return it};
      L.corps=add(GEO[k],vc,true);
      if(k==='camp')L.eclat=add(GEO.feu,lueur,false);if(k==='cercle')L.eclat=add(GEO.glyphe,lueur,false);
      L.rai=add(GEO.rai,raiZ,false);L.rai.m.renderOrder=5;L.rai.m.receiveShadow=false;
      Z.lieux.push(L);LIEUX.push(L)})};
  Z.update=lv=>{update0(lv);const an=wneg(lv),ap=wpos(lv);
    for(const L of Z.lieux){const y=groundZ(Z,L.x,L.z,lv)-.3;
      for(const it of L.parts)it.a[0].y=y;
      /* le pôle : vers −7 les lieux s'enfoncent, se penchent et se ternissent ; vers +7 ils se dressent et prennent sa lumière */
      L.corps.a[0].rz=an*.12;L.corps.a[0].dy=-an*1.2;
      L.corps.set(()=>[1+ap*.15,1+ap*.25-an*.15,1+ap*.15],(o,i,c)=>{mix3(c,bl,cN,an*.65);if(ap>0)mix3(c,c,cP,ap*.35)});
      if(L.eclat){const e=L.eclat;e.set(()=>1+ap*.6,(o,i,c)=>{const b=lv<0?LIN(hexMix(neg,'#ff5030',.5)):cP;c[0]=b[0]*3;c[1]=b[1]*3;c[2]=b[2]*3})}
      L.rai.set(()=>L.trouve?.0001:1)}};
})();
})();
/* les secrets des lieux, à la suite de tous les autres */
function lieuxSecrets(){for(const L of LIEUX){const k=L.k;
  L.s=secret(L.Z,()=>{const h=k==='cercle'?2.4:1.4,dx=k==='camp'?-2.6:k==='belvedere'?7.5:0;return[L.x+dx*Math.cos(L.ry),groundZ(L.Z,L.x,L.z,L.Z.lv)+h,L.z-dx*Math.sin(L.ry)]},L.titre,L.texte)}}
/* le rai de lumière s'éteint quand le secret du lieu est trouvé */
setInterval(()=>{for(const L of LIEUX){const t=!!(L.s&&L.s.found);if(t!==!!L.trouve){L.trouve=t;L.rai.set(()=>t?.0001:1)}}},1000);
