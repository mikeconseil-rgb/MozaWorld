/* MozaWorld : le héros (17 nov., « améliore le personnage, visuel et un minimum d'animation »).
   Un voyageur articulé, tout en formes simples : chapeau pointu à large bord, écharpe, tunique ceinturée, cape rouge,
   bâton à lanterne. Marche, course, saut, atterrissage et repos animés à la main (aucun fichier externe). */
function creerHeros(){const g=new THREE.Group(),S_=(geo,col,o)=>{const m=new THREE.Mesh(geo,M(col,Object.assign({flatShading:false},o||{})));m.castShadow=true;return m};
  const piv=(par,x,y,z)=>{const p=new THREE.Group();p.position.set(x,y,z);par.add(p);return p};
  const cyl_=(rt,rb,h,col,n)=>{const m=S_(new THREE.CylinderGeometry(rt,rb,h,n||8),col);m.position.y=-h/2;return m};
  const peau=0xd8b48a,tunique=0x3e5a6e,pantalon=0x3a3028,botte=0x2a1d16,cuir=0x6a4628,capeC=0x6a1824,chapeau=0x2a2630,echarpe=0xd9b25a;
  const R={};
  /* bassin */
  const bassin=R.bassin=piv(g,0,.98,0);
  /* jambes : hanche → genou → pied */
  R.j=[-1,1].map(s=>{const h=piv(bassin,s*.15,0,0);h.add(cyl_(.12,.1,.48,pantalon));const k=piv(h,0,-.48,0);k.add(cyl_(.1,.085,.44,pantalon));
    const b=S_(new THREE.BoxGeometry(.17,.14,.3),botte);b.position.set(0,-.47,.05);k.add(b);return{h,k}});
  /* buste */
  const buste=R.buste=piv(bassin,0,.02,0);
  const corps=S_(new THREE.CylinderGeometry(.27,.33,.66,10),tunique);corps.position.y=.33;buste.add(corps);
  const jupe=S_(new THREE.CylinderGeometry(.33,.42,.28,10,1,true),tunique,{side:THREE.DoubleSide});jupe.position.y=-.1;buste.add(jupe);
  const ceinture=S_(new THREE.CylinderGeometry(.335,.335,.09,10),cuir);ceinture.position.y=.06;buste.add(ceinture);
  const boucle=S_(new THREE.BoxGeometry(.1,.08,.03),0xc9a45c,{metalness:.7,roughness:.35});boucle.position.set(0,.06,.33);buste.add(boucle);
  const sac=S_(new THREE.BoxGeometry(.16,.18,.1),cuir);sac.position.set(-.3,.0,.12);sac.rotation.y=-.5;buste.add(sac);
  /* écharpe */
  const ech=S_(new THREE.TorusGeometry(.2,.07,6,12),echarpe);ech.rotation.x=PI/2;ech.position.y=.66;buste.add(ech);
  const pan=S_(new THREE.BoxGeometry(.1,.32,.04),echarpe);pan.position.set(.1,.5,.27);pan.rotation.z=.12;buste.add(pan);
  /* tête */
  const tete=R.tete=piv(buste,0,.72,0);
  const crane=S_(new THREE.SphereGeometry(.21,14,10),peau);crane.position.y=.2;tete.add(crane);
  const nez=S_(new THREE.ConeGeometry(.04,.1,6),peau);nez.rotation.x=PI/2;nez.position.set(0,.19,.21);tete.add(nez);
  for(const s of[-1,1]){const o=new THREE.Mesh(new THREE.SphereGeometry(.025,6,5),new THREE.MeshBasicMaterial({color:0x1a1210}));o.position.set(s*.075,.24,.185);tete.add(o)}
  const barbe=S_(new THREE.ConeGeometry(.13,.2,8),0x8a7a6a);barbe.rotation.x=PI;barbe.position.set(0,.04,.11);tete.add(barbe);
  const bord=S_(new THREE.CylinderGeometry(.44,.44,.04,16),chapeau);bord.position.y=.33;tete.add(bord);
  R.pointe=S_(new THREE.ConeGeometry(.24,.62,12),chapeau);R.pointe.position.y=.64;R.pointe.rotation.z=-.18;tete.add(R.pointe);
  const ruban=S_(new THREE.CylinderGeometry(.235,.25,.07,12),capeC);ruban.position.y=.39;tete.add(ruban);
  /* bras : épaule → coude → main ; la main droite tient le bâton à lanterne */
  R.b=[-1,1].map(s=>{const e=piv(buste,s*.36,.6,0);e.add(cyl_(.08,.07,.36,tunique));const c=piv(e,0,-.36,0);c.add(cyl_(.07,.06,.32,tunique));
    const m=S_(new THREE.SphereGeometry(.07,8,6),peau);m.position.y=-.36;c.add(m);return{e,c}});
  const baton=piv(R.b[1].c,0,-.36,.02);baton.rotation.x=-.25;
  const bois=S_(new THREE.CylinderGeometry(.03,.035,1.9,6),0x5a3c24);bois.position.y=.35;baton.add(bois);
  const crochet=S_(new THREE.TorusGeometry(.1,.02,5,10,PI),0x3a2a1c);crochet.position.set(.08,1.3,0);baton.add(crochet);
  const lant=piv(baton,.18,1.22,0);R.lant=lant;
  const cage=S_(new THREE.CylinderGeometry(.08,.1,.18,6),0x2a2228,{metalness:.5,roughness:.4});cage.position.y=-.12;lant.add(cage);
  const feu=new THREE.Mesh(new THREE.SphereGeometry(.07,8,6),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2,.8)}));feu.position.y=-.12;lant.add(feu);R.feu=feu;
  /* cape : accrochée aux épaules, elle s'envole avec la vitesse */
  const capeP=R.cape=piv(buste,0,.66,-.2);
  const cp=new THREE.CylinderGeometry(.26,.42,1.0,10,4,true,PI*.7,PI*.6);cp.translate(0,-.5,0);
  const cape=new THREE.Mesh(cp,M(capeC,{side:THREE.DoubleSide,flatShading:false}));cape.castShadow=true;cape.position.z=.2;capeP.add(cape);
  g.userData.R=R;g.userData.ph=0;g.userData.air=0;g.userData.land=0;
  /* la lumière de la lanterne (même lampe qu'avant) */
  const pl=g.userData.pl=new THREE.PointLight(0xffd9a0,.55,18,1.8);pl.position.set(.5,1.4,.3);g.add(pl);
  return g}
/* v : vitesse au sol (m/s), sol : au sol ou non, vy : vitesse verticale */
function animHeros(h,dt,v,sol,vy,t){const R=h.userData.R,U=h.userData;if(!R)return;
  const k=clamp(v/8,0,1),run=clamp((v-10)/7,0,1);   /* 2.51 : foulée calée sur la marche plus lente (9 m/s, course 18) */
  U.ph+=dt*(v>.3?(3.2+v*.42):0);const s=Math.sin(U.ph),c=Math.cos(U.ph);
  if(!sol)U.air=Math.min(1,U.air+dt*6);else{if(U.air>.5)U.land=1;U.air=Math.max(0,U.air-dt*8)}
  U.land=Math.max(0,U.land-dt*5);
  /* double saut : une culbute avant en 0,45 s, corps groupé */
  if(U.flip>0){U.flip=Math.max(0,U.flip-dt/.45);if(sol)U.flip=0}const fl_=U.flip>0?1-U.flip:0,grp=U.flip>0?Math.sin(fl_*PI):0;
  R.bassin.rotation.x=U.flip>0?fl_*TAU:0;
  const a=Math.min(1,U.air+grp),sw=(.55+.35*run)*k*(1-a),idle=1-k;
  /* jambes : balancier, le genou plie quand la jambe revient */
  R.j.forEach((J,i)=>{const sg=i?1:-1,ph=s*sg;J.h.rotation.x=-ph*sw+a*(i?-.9:-.35);J.k.rotation.x=Math.max(0,(sg*c))*sw*1.3+a*(i?1.2:.5)+U.land*.6});
  /* bras opposés aux jambes ; le bras droit garde le bâton */
  R.b[0].e.rotation.x=s*sw*.9-a*.9;R.b[0].e.rotation.z=-.12-a*.5;R.b[0].c.rotation.x=-.25-run*.6;
  R.b[1].e.rotation.x=-.35-s*sw*.35-a*.4;R.b[1].e.rotation.z=.1;R.b[1].c.rotation.x=-.55-run*.3;
  /* buste : rebond, penché en course, respiration au repos */
  R.bassin.position.y=.98+Math.abs(c)*.07*k-U.land*.18+idle*Math.sin(t*1.8)*.012;
  R.buste.rotation.x=.08*k+.22*run+a*.12-U.land*.1;R.buste.rotation.y=-s*.12*k;
  R.tete.rotation.x=-.06*k-.12*run+idle*Math.sin(t*.9)*.03;R.tete.rotation.y=idle*Math.sin(t*.37)*.25;
  /* cape et pointe du chapeau qui flottent */
  R.cape.rotation.x=-(.08+.55*k+.35*run+(vy>0?.2:-.25)*a)-Math.sin(t*6+U.ph)*.04*k-Math.sin(t*1.3)*.03;
  R.pointe.rotation.x=-.1*k-.15*run;R.lant.rotation.z=-s*.25*k+Math.sin(t*2)*.05;R.lant.rotation.x=-.3*k;
  const fl=.85+.15*Math.sin(t*13)+.08*Math.sin(t*31);R.feu.material.color.setRGB(3*fl,2*fl,.8*fl)}
