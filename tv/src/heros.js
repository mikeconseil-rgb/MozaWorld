/* MozaWorld : le héros (17 nov. ; refait le 28 nov. à l'image du joueur, d'après ses photos).
   Un randonneur svelte : chapeau de paille à ruban noir, lunettes, longs cheveux bruns à raie au milieu, barbe pleine grise au menton,
   chaîne au cou, chemise kaki manches roulées, bermuda gris foncé, chaussettes, chaussures de marche.
   Ni chapeau pointu ni lanterne visible ; la lumière douce qui l'entoure reste. Son chien le suit : voir creerChien plus bas.
   Marche, course, saut, atterrissage et repos animés à la main (aucun fichier externe). */
/* tenue : 'rando' (chapeau de paille, chemise, bermuda) ou 'rouge' (combinaison rouge à boutons, comme sur ses photos de voilier) */
const HEROS_TENUE='rouge';   /* choix du joueur, 27 nov. au soir */
function creerHeros(tenue){tenue=tenue||HEROS_TENUE;const rouge=tenue==='rouge';const g=new THREE.Group(),S_=(geo,col,o)=>{const m=new THREE.Mesh(geo,M(col,Object.assign({flatShading:false},o||{})));m.castShadow=true;return m};
  const piv=(par,x,y,z)=>{const p=new THREE.Group();p.position.set(x,y,z);par.add(p);return p};
  const cyl_=(rt,rb,h,col,n)=>{const m=S_(new THREE.CylinderGeometry(rt,rb,h,n||8),col);m.position.y=-h/2;return m};
  const peau=0xe4b096,chemise=rouge?0xa8161e:0x5d6340,bermuda=rouge?0xa8161e:0x3a3b40,chaus=rouge?0xa8161e:0x6e6478,botte=rouge?0x3a2a20:0x7a5e3e,semelle=0x2a2420,
    cheveux=0x3b2a1e,barbeC=0x77706a,moustC=0x5e4a3a,paille=0xa27c46,ruban=0x1c1a1c,cuir=0x5a3c24,argent=0xc8c8cc;
  const R={};
  const bassin=R.bassin=piv(g,0,.98,0);
  /* jambes : bermuda jusqu'au genou, mollet nu, chaussette, chaussure de marche */
  R.j=[-1,1].map(s=>{const h=piv(bassin,s*.14,0,0);h.add(cyl_(.12,.105,.5,bermuda));const k=piv(h,0,-.48,0);
    const ourlet=S_(new THREE.CylinderGeometry(.11,.11,.06,8),bermuda);ourlet.position.y=-.01;k.add(ourlet);
    k.add(cyl_(.075,.06,.38,rouge?bermuda:peau));const ch=S_(new THREE.CylinderGeometry(.068,.072,.1,8),chaus);ch.position.y=-.36;k.add(ch);
    const b=S_(new THREE.BoxGeometry(.17,.15,.32),botte);b.position.set(0,-.45,.05);k.add(b);
    const se=S_(new THREE.BoxGeometry(.18,.04,.34),semelle);se.position.set(0,-.53,.05);k.add(se);return{h,k}});
  /* buste : chemise ouverte au col, poche de poitrine, ceinture de cuir */
  const buste=R.buste=piv(bassin,0,.02,0);
  const corps=S_(new THREE.CylinderGeometry(.27,.27,.66,10),chemise);corps.position.y=.33;corps.scale.z=.82;buste.add(corps);
  const pan=S_(new THREE.CylinderGeometry(.275,.29,.16,10,1,true),chemise,{side:THREE.DoubleSide});pan.position.y=-.02;pan.scale.z=.84;buste.add(pan);
  const ceinture=S_(new THREE.CylinderGeometry(.28,.28,.07,10),cuir);ceinture.position.y=.02;ceinture.scale.z=.84;buste.add(ceinture);
  const col=S_(new THREE.BoxGeometry(.09,.11,.02),peau);col.position.set(0,.6,.215);col.rotation.x=-.12;buste.add(col);
  const chaine=S_(new THREE.TorusGeometry(.13,.012,4,16,PI),argent,{metalness:.8,roughness:.3});chaine.rotation.z=PI;chaine.rotation.x=-.25;chaine.position.set(0,.66,.1);buste.add(chaine);
  if(!rouge)for(const s of[-1,1]){const p=S_(new THREE.BoxGeometry(.1,.1,.02),0x5c6040);p.position.set(s*.12,.45,.22);buste.add(p)}
  else{const pat=S_(new THREE.BoxGeometry(.05,.5,.015),0xe8d8cc);pat.position.set(0,.3,.225);buste.add(pat);
    for(let i=0;i<5;i++){const b=S_(new THREE.SphereGeometry(.016,6,4),0xf4ece0);b.position.set(0,.5-i*.11,.235);buste.add(b)}}
  /* sac à dos de toile avec une couverture roulée */
  const sac=R.cape=piv(buste,0,.42,-.2);
  const sacB=S_(new THREE.BoxGeometry(.38,.42,.18),0x4a4a3a);sacB.position.set(0,-.05,-.06);sac.add(sacB);
  const roule=S_(new THREE.CylinderGeometry(.08,.08,.44,8),0x7a3a2a);roule.rotation.z=PI/2;roule.position.set(0,.22,-.06);sac.add(roule);
  /* tête : cheveux mi-longs, lunettes, barbiche */
  const tete=R.tete=piv(buste,0,.7,0);
  const cou=S_(new THREE.CylinderGeometry(.08,.09,.12,8),peau);cou.position.y=.0;tete.add(cou);
  const crane=S_(new THREE.SphereGeometry(.19,14,10),peau);crane.position.y=.2;crane.scale.set(.95,1.08,1);tete.add(crane);
  const nez=S_(new THREE.ConeGeometry(.035,.1,6),peau);nez.rotation.x=PI/2;nez.position.set(0,.19,.2);tete.add(nez);
  for(const s of[-1,1]){const o=new THREE.Mesh(new THREE.SphereGeometry(.02,6,5),new THREE.MeshBasicMaterial({color:0x1a1210}));o.position.set(s*.068,.23,.172);tete.add(o);
    const v=S_(new THREE.TorusGeometry(.048,.008,4,12),0x2a2a2e,{metalness:.6,roughness:.3});v.position.set(s*.068,.23,.18);tete.add(v);
    const br=S_(new THREE.BoxGeometry(.008,.008,.17),0x2a2a2e);br.position.set(s*.115,.235,.1);tete.add(br);
    const sour=S_(new THREE.BoxGeometry(.06,.015,.02),cheveux);sour.position.set(s*.07,.29,.175);sour.rotation.z=-s*.12;tete.add(sour)}
  const pont=S_(new THREE.BoxGeometry(.04,.008,.008),0x2a2a2e);pont.position.set(0,.235,.18);tete.add(pont);
  const mous=S_(new THREE.BoxGeometry(.14,.03,.04),moustC);mous.position.set(0,.125,.185);tete.add(mous);
  const barbe=S_(new THREE.ConeGeometry(.09,.17,8),0x948e86);barbe.position.set(0,.0,.12);barbe.rotation.x=PI+.3;tete.add(barbe);
  const collier=S_(new THREE.SphereGeometry(.205,14,8,PI/2-1.25,2.5,PI*.55,PI*.35),barbeC,{side:THREE.DoubleSide});collier.position.y=.2;collier.scale.set(.96,1.1,1.02);tete.add(collier);
  const chev=S_(new THREE.CylinderGeometry(.2,.22,.62,12,1,true,PI*.3,PI*1.4),cheveux,{side:THREE.DoubleSide});chev.position.set(0,.0,-.01);tete.add(chev);
  const nuque=S_(new THREE.BoxGeometry(.34,.62,.07),cheveux);nuque.position.set(0,-.06,-.18);tete.add(nuque);
  const calo=S_(new THREE.SphereGeometry(.208,14,8,0,TAU,0,PI*.42),cheveux);calo.position.y=.21;tete.add(calo);
  /* chapeau de paille (fédora) : calotte pincée, ruban noir, bord relevé derrière */
  const chap=R.pointe=piv(tete,0,.33,0);chap.rotation.x=-.08;chap.visible=!rouge;
  const bord=S_(new THREE.CylinderGeometry(.34,.36,.025,18),paille);chap.add(bord);
  const calotte=S_(new THREE.CylinderGeometry(.17,.21,.2,14),paille);calotte.position.y=.11;chap.add(calotte);
  const pince=S_(new THREE.BoxGeometry(.06,.04,.34),paille);pince.position.y=.21;chap.add(pince);
  const rub=S_(new THREE.CylinderGeometry(.205,.212,.065,14),ruban);rub.position.y=.045;chap.add(rub);
  /* bras : manche roulée au coude, avant-bras nu */
  R.b=[-1,1].map(s=>{const e=piv(buste,s*.34,.6,0);e.add(cyl_(.075,.07,.3,chemise));
    if(!rouge){const rl=S_(new THREE.CylinderGeometry(.08,.08,.06,8),0x5c6040);rl.position.y=-.32;e.add(rl)}
    const c=piv(e,0,-.34,0);c.add(cyl_(.058,.05,.3,rouge?chemise:peau));if(rouge){const cd=S_(new THREE.SphereGeometry(.068,8,6),chemise);c.add(cd)}
    const m=S_(new THREE.SphereGeometry(.06,8,6),peau);m.position.y=-.33;c.add(m);return{e,c}});
  /* plus de lanterne visible (choix du joueur, 28 nov.) : on garde seulement sa lumière douce, plus bas */
  const lant=piv(buste,-.3,.0,.08);R.lant=lant;lant.visible=false;
  const anse=S_(new THREE.TorusGeometry(.05,.01,4,8,PI),0x2a2228);anse.position.y=-.02;lant.add(anse);
  const cage=S_(new THREE.CylinderGeometry(.06,.07,.14,6),0x2a2228,{metalness:.5,roughness:.4});cage.position.y=-.12;lant.add(cage);
  const feu=new THREE.Mesh(new THREE.SphereGeometry(.05,8,6),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2,.8)}));feu.position.y=-.12;lant.add(feu);R.feu=feu;
  g.userData.R=R;g.userData.ph=0;g.userData.air=0;g.userData.land=0;
  const pl=g.userData.pl=new THREE.PointLight(0xffd9a0,.55,18,1.8);pl.position.set(.5,1.4,.3);g.add(pl);
  return g}
/* v : vitesse au sol (m/s), sol : au sol ou non, vy : vitesse verticale */
function animHeros(h,dt,v,sol,vy,t){const R=h.userData.R,U=h.userData;if(!R)return;
  const k=clamp(v/8,0,1),run=clamp((v-10)/7,0,1);   /* 2.52 : foulée calée sur la marche plus lente (9 m/s, course 18) */
  U.ph+=dt*(v>.3?(3.2+v*.42):0);const s=Math.sin(U.ph),c=Math.cos(U.ph);
  if(!sol)U.air=Math.min(1,U.air+dt*6);else{if(U.air>.5)U.land=1;U.air=Math.max(0,U.air-dt*8)}
  U.land=Math.max(0,U.land-dt*5);
  if(U.flip>0){U.flip=Math.max(0,U.flip-dt/.45);if(sol)U.flip=0}const fl_=U.flip>0?1-U.flip:0,grp=U.flip>0?Math.sin(fl_*PI):0;
  R.bassin.rotation.x=U.flip>0?fl_*TAU:0;
  const a=Math.min(1,U.air+grp),sw=(.55+.35*run)*k*(1-a),idle=1-k;
  R.j.forEach((J,i)=>{const sg=i?1:-1,ph=s*sg;J.h.rotation.x=-ph*sw+a*(i?-.9:-.35);J.k.rotation.x=Math.max(0,(sg*c))*sw*1.3+a*(i?1.2:.5)+U.land*.6});
  /* les deux bras balancent librement, opposés aux jambes */
  R.b.forEach((B,i)=>{const sg=i?-1:1;B.e.rotation.x=sg*s*sw*.9-a*.9;B.e.rotation.z=(i?.12:-.12)+(i?1:-1)*a*.5;B.c.rotation.x=-.2-run*.7-k*.15});
  R.bassin.position.y=.98+Math.abs(c)*.07*k-U.land*.18+idle*Math.sin(t*1.8)*.012;
  R.buste.rotation.x=.08*k+.22*run+a*.12-U.land*.1;R.buste.rotation.y=-s*.12*k;
  R.tete.rotation.x=-.06*k-.12*run+idle*Math.sin(t*.9)*.03;R.tete.rotation.y=idle*Math.sin(t*.37)*.25;
  /* le sac sautille, le chapeau tient (un léger roulis en course) */
  R.cape.rotation.x=-Math.abs(c)*.08*k-(vy>0?.05:-.1)*a;R.pointe.rotation.z=-s*.04*run;
  R.lant.rotation.z=-s*.35*k+Math.sin(t*2)*.05;R.lant.rotation.x=-.3*k;
  const fl=.85+.15*Math.sin(t*13)+.08*Math.sin(t*31);R.feu.material.color.setRGB(3*fl,2*fl,.8*fl)}

/* Le chien du joueur (28 nov., d'après ses photos ; sera sa monture plus tard) : noir, liste et museau blancs mouchetés,
   poitrail et pattes avant blancs, oreilles dressées, queue touffue enroulée à bout blanc, bandana à carreaux rouges. */
function creerChien(){const g=new THREE.Group(),S_=(geo,col,o)=>{const m=new THREE.Mesh(geo,M(col,Object.assign({flatShading:false},o||{})));m.castShadow=true;return m};
  const piv=(par,x,y,z)=>{const p=new THREE.Group();p.position.set(x,y,z);par.add(p);return p};
  const noir=0x18161a,blanc=0xece6dc,R={};
  const corps=R.corps=piv(g,0,.62,0);
  const tronc=S_(new THREE.SphereGeometry(.26,12,9),noir);tronc.scale.set(.9,.95,2.1);corps.add(tronc);
  const poit=S_(new THREE.SphereGeometry(.17,10,8),blanc);poit.position.set(0,-.06,.4);poit.scale.set(1,1.2,.8);corps.add(poit);
  /* bandana : triangle rouge à carreaux sombres (deux bandes) */
  const band=S_(new THREE.TorusGeometry(.17,.035,5,14),0xb3242a);band.position.set(0,.12,.5);band.rotation.x=-.6;corps.add(band);
  const pointeB=S_(new THREE.ConeGeometry(.1,.16,3),0xb3242a);pointeB.position.set(0,-.02,.6);pointeB.rotation.x=PI-.2;pointeB.scale.z=.4;corps.add(pointeB);
  const car=S_(new THREE.TorusGeometry(.172,.012,4,14),0x2a0c10);car.position.set(0,.12,.5);car.rotation.x=-.6;corps.add(car);
  /* tête */
  const tete=R.tete=piv(corps,0,.2,.55);
  const cr=S_(new THREE.SphereGeometry(.16,12,9),noir);cr.scale.set(1,.95,1.05);tete.add(cr);
  const mus=S_(new THREE.CylinderGeometry(.055,.09,.18,8),blanc);mus.rotation.x=PI/2;mus.position.set(0,-.05,.17);tete.add(mus);
  const liste=S_(new THREE.BoxGeometry(.035,.02,.16),blanc);liste.position.set(0,.1,.1);liste.rotation.x=-.75;tete.add(liste);
  const truffe=S_(new THREE.SphereGeometry(.035,8,6),0x0a0a0c);truffe.position.set(0,-.04,.27);tete.add(truffe);
  for(const [x,y,z] of[[.04,-.02,.22],[-.05,-.06,.2],[.03,-.08,.16],[-.02,-.01,.26]]){const p=new THREE.Mesh(new THREE.SphereGeometry(.012,5,4),new THREE.MeshBasicMaterial({color:0x2a2a2a}));p.position.set(x,y,z);tete.add(p)}
  for(const s of[-1,1]){const o=new THREE.Mesh(new THREE.SphereGeometry(.02,6,5),new THREE.MeshBasicMaterial({color:0x3a1e14}));o.position.set(s*.07,.05,.14);tete.add(o);
    const or=S_(new THREE.ConeGeometry(.06,.18,4),noir);or.position.set(s*.08,.18,-.02);or.rotation.z=-s*.2;tete.add(or)}
  /* pattes : avant blanches, arrière noires aux pieds blancs */
  R.p=[[-.13,.36,1],[.13,.36,1],[-.13,-.36,0],[.13,-.36,0]].map(([x,z,av])=>{const h=piv(corps,x,-.12,z);
    const l=S_(new THREE.CylinderGeometry(.055,.045,.48,7),av?blanc:noir);l.position.y=-.24;h.add(l);
    const pied=S_(new THREE.SphereGeometry(.06,7,5),blanc);pied.position.set(0,-.48,.03);pied.scale.z=1.4;h.add(pied);return h});
  /* queue enroulée vers le haut */
  const q=R.queue=piv(corps,0,.12,-.5);q.rotation.x=-.9;
  const q1=S_(new THREE.CylinderGeometry(.07,.09,.3,8),noir);q1.position.y=.15;q.add(q1);
  const q2=S_(new THREE.SphereGeometry(.1,8,6),blanc);q2.position.y=.34;q2.scale.y=1.4;q.add(q2);
  g.userData.R=R;g.userData.ph=0;g.scale.setScalar(1/1.3);return g}
function animChien(d,dt,v,t,renifle){const R=d.userData.R,U=d.userData;
  const k=clamp(v/12,0,1);U.ph+=dt*(v>.3?4+v*.55:0);const s=Math.sin(U.ph);
  R.p.forEach((P_,i)=>{P_.rotation.x=(i===0||i===3?s:-s)*.7*k});
  R.corps.position.y=.62+Math.abs(Math.cos(U.ph))*.05*k+(1-k)*Math.sin(t*2)*.008;
  R.tete.rotation.x=renifle?.75+Math.sin(t*9)*.08:-.1*k+(1-k)*Math.sin(t*.7)*.06;R.tete.rotation.y=(1-k)*Math.sin(t*.4)*.35;
  R.queue.rotation.z=Math.sin(t*(k>.1?9:4))*(.25+.2*k)}
/* La chienne vit sa vie (demande du 27 nov. au soir : « elle doit partir de son bord, se promener, puis revenir et repartir ») :
   - « près » : elle reste à ta gauche, un peu en retrait, quelques secondes ;
   - « balade » : elle part trotter vers un point au hasard à 8-18 m de toi, s'arrête et renifle le sol ;
   - « retour » : elle revient vers toi au galop, puis le cycle recommence.
   Si tu t'éloignes trop (plus de 26 m), elle abandonne sa balade et te rattrape ; au-delà de 60 m (voyage, téléportation), elle te rejoint d'un coup.
   ok(x,z) : vrai si le point est praticable (dans une zone) ; sol(x,z) : hauteur du sol. */
function suivreChien(d,P,dt,sol,ok){const U=d.userData;if(U.x===undefined){U.x=P.x;U.z=P.z;U.v=0;U.etat='pres';U.t=3;U.flair=0}
  const fx=Math.sin(P.face||0),fz=Math.cos(P.face||0),loinH=Math.hypot(U.x-P.x,U.z-P.z);
  U.t-=dt;let tx,tz,vmax=12;
  if(loinH>60){U.x=P.x-fx*.9+fz*1.7;U.z=P.z-fz*.9-fx*1.7;U.etat='pres';U.t=2+Math.random()*3}
  if(U.etat==='balade'&&loinH>26){U.etat='retour'}
  if(U.etat==='pres'){tx=P.x-fx*.9+fz*1.7;tz=P.z-fz*.9-fx*1.7;vmax=40;
    if(U.t<=0&&(P.v||0)<20){/* nouvelle balade : un point au hasard autour de toi */
      for(let k=0;k<6;k++){const a=Math.random()*TAU,r=8+Math.random()*10,bx=P.x+Math.sin(a)*r,bz=P.z+Math.cos(a)*r;
        if(!ok||ok(bx,bz)){U.bx=bx;U.bz=bz;U.etat='balade';U.t=12;U.flair=0;break}}
      if(U.etat==='pres')U.t=2}}
  else if(U.etat==='balade'){tx=U.bx;tz=U.bz;vmax=9;
    if(Math.hypot(tx-U.x,tz-U.z)<.8){if(!U.flair)U.flair=2+Math.random()*2.5;U.flair-=dt;if(U.flair<=0)U.etat='retour'}
    else if(U.t<=0)U.etat='retour'}
  else{tx=P.x-fx*.9+fz*1.7;tz=P.z-fz*.9-fx*1.7;vmax=34;if(Math.hypot(tx-U.x,tz-U.z)<1.5){U.etat='pres';U.t=4+Math.random()*5}}
  const dx=tx-U.x,dz=tz-U.z,dist=Math.hypot(dx,dz);
  const vv=dist<.5?0:Math.min(vmax,dist*3.2);U.v=lerp(U.v,vv,Math.min(1,dt*4));
  if(dist>.01){const st=Math.min(dist,U.v*dt),nx=U.x+dx/dist*st,nz=U.z+dz/dist*st;
    if(!ok||ok(nx,nz)){U.x=nx;U.z=nz}else if(U.etat==='balade')U.etat='retour';
    if(U.v>.3){const yaw=Math.atan2(dx,dz);d.rotation.y+=((((yaw-d.rotation.y)%TAU)+TAU+PI)%TAU-PI)*Math.min(1,dt*8)}}
  const y=sol(U.x,U.z);d.position.set(U.x,isFinite(y)?y:P.y,U.z);
  animChien(d,dt,U.v,performance.now()/1000,U.etat==='balade'&&U.flair>0)}
