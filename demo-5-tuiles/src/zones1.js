/* Zones 1 et 2 : Berestograd (Citadelle, décagone) et le Puits des Neuf Édits (Donjon, pentagone). */
function inst(geo,mat,sh){const a=[];return{a,m:null,
  add(x,y,z,sx,sy,sz,ry,rx,rz,e){a.push({x,y,z,sx:sx===undefined?1:sx,sy:sy===undefined?(sx===undefined?1:sx):sy,sz:sz===undefined?(sx===undefined?1:sx):sz,ry:ry||0,rx:rx||0,rz:rz||0,e:e||{},r:rnd()});return a.length-1},
  make(){this.m=IM(geo,mat,Math.max(1,a.length),sh);this.set();return this},
  set(fs,fc){const m=this.m;for(let i=0;i<a.length;i++){const o=a[i];let k=fs?fs(o,i):1,kx,ky,kz;if(typeof k==='number')kx=ky=kz=k;else{kx=k[0];ky=k[1];kz=k[2]}
      put(m,i,o.x,o.y+(o.dy||0),o.z,o.sx*kx,o.sy*ky,o.sz*kz,o.ry,o.rx,o.rz);if(fc){fc(o,i,tc);tint(m,i,tc)}}done(m)}}}
const wneg=lv=>clamp(-lv/7,0,1),wpos=lv=>clamp(lv/7,0,1);
const onion=(()=>{const p=[[.62,0],[.9,.25],[1,.55],[.88,.9],[.55,1.3],[.25,1.65],[.08,2],[0,2.4]].map(q=>new THREE.Vector2(q[0],q[1]));return new THREE.LatheGeometry(p,10)})();

/* ================= BERESTOGRAD, LA VILLE-ÉCORCE ================= */
(()=>{const Z=CIT,KR=60;
Z.info={nom:'Berestograd, la Ville-Écorce',sur:'Citadelle · Décagone · Forêt boréale · Inspiration slave',pm:'Oubli',pp:'Mémoire',conteur:'Conteur A, le Chroniqueur amer',
  recit:'Ouliana racla des écorces pendant onze hivers, pour trois mesures de seigle par saison et le droit de dormir dans la tour de la porte. On les lui apportait par paniers, tirées de la boue où les gens de Berestograd jetaient tout ce qu\'ils avaient écrit. Elle ne savait pas lire. On l\'avait choisie pour cela. À sa mort, on trouva sous sa paillasse une seule écorce intacte, pliée en huit, que personne ne déplia.',
  pal:['Rondins lessivés jusqu\'au beige d\'écorce morte. La neige efface les contours, les places sont trop vastes pour les rares feux.','Bouleaux pelés, tas de copeaux blancs, ciel bas et lumière de lampe à suif.','Palissade de mélèze brun, bulbes de bois, taïga vert sapin sous une lumière d\'étain.','Écorces lisibles cousues aux murs comme des écailles, lumière de cire derrière les volets.','Chaque rondin gravé et repeint en minium, ocre et malachite. Aube froide et claire, lucioles d\'ambre.']};
Z.atm=atmo({top:['#b3a58d','#6f6a66','#74848f','#5c7fa8','#3566b0'],hor:['#cfc1a8','#a3948a','#b4bdc0','#e8c9a0','#ffc4a0'],sun:['#e8d9c0','#d9b79a','#dfe6ea','#ffd9a0','#ffdcb4'],
  hs:['#d2c6b0','#9a918a','#aab6bd','#a9c0e0','#9fc0ff'],hg:['#8a7b68','#5a4c40','#4a4034','#6a5646','#8a6450'],clc:['#d8ccb6','#8a8078','#c9d0d4','#f0d8c0','#ffd0c0'],wc:['#f0e8dc','#e8e2da','#eef2f6','#fff4e0','#ffe0b0'],
  sunI:[.45,.6,1,1.4,2],hI:[1,.75,.75,.75,.8],fog:[.017,.009,.0042,.003,.0016],el:[28,22,40,18,9],cl:[1,.9,.75,.4,.22],wn:[1,.6,.25,.12,.1],wv:[5,4,2.5,1.5,.4],wd:[3,2,1.5,1,2],ws:[.34,.3,.26,.24,.2],wI:[1,1,1,1.2,2.4],
  exp:[.95,.95,1,1.05,1.05],bl:[.5,.7,.6,.9,1.1],az:38});
const gA=ramp('#d6c9b3','#cbc4b8','#4a3b2c','#bdb6aa','#eef1f6'),gB=ramp('#c4b59c','#e9e6de','#2c4630','#d9d4c8','#dbe6f4'),gC=ramp('#b9ab94','#8a7d6c','#57432f','#8a6a48','#a8683c'),bark=LIN('#e8e2d0');
Z.h=(u,v,lv,n1,n2)=>{const r=Math.hypot(u,v);return lerp(1.6+(n2-.5)*.5,(n1-.42)*18+(n2-.5)*(1.2+1.6*wneg(lv)),sst(66,96,r))+1.2};
Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{const r=Math.hypot(u,v);gA(lv,o);gB(lv,tc2);mix3(o,o,tc2,sst(.36,.6,n1));
  if(r<70){gC(lv,tc2);mix3(o,o,tc2,sst(70,62,r)*.8)}
  const s=sst(.66,.72,n2)*(1-Math.min(1,Math.abs(lv)/3.5));if(s>0)mix3(o,o,bark,s*.8);return 0};

const cLog=ramp('#b5a68c','#a08a72','#5c3f2a','#7a4f30','#8a4a2c'),P7=[LIN('#d9401e'),LIN('#e0a82e'),LIN('#1f8a5a')],
  cRoof=ramp('#6b5a48','#4a3c30','#3a2a20','#5a3a26','#7a2a1c'),cDome=ramp('#5f4f40','#6a5648','#6e5d4c','#9a7a4a','#c8902e'),
  cSpr=ramp('#a39a86','#5a6058','#1f3d2a','#1f4a34','#1c6a4a'),cBir=ramp('#c9b09a','#d8c8b8','#eeeae0','#f2eee6','#fbf8f0'),cCrown=ramp('#8a8068','#8a8a5a','#9aa84a','#c8b040','#e8b030');
const logs=inst(cyl(.38,.72,9,6,0,4.5,0),M(0xffffff)),towers=inst(cyl(2.9,3.3,13,8,0,6.5,0),M(0xffffff)),troofs=inst(new THREE.ConeGeometry(4.3,7.5,8).translate(0,16.7,0),M(0xffffff)),
  walk_=inst(new THREE.BoxGeometry(1,.5,2.6),M(0x4a3524)),bodies=inst(cyl(1,1,1,8,0,.5,0),M(0xffffff)),domes=inst(onion,M(0xffffff,{roughness:.45})),
  letters=inst(new THREE.BoxGeometry(.7,.9,.08),M(0xf2ecdc,{roughness:.6}),false),wins=inst(new THREE.BoxGeometry(.55,1.2,.12),new THREE.MeshBasicMaterial({color:0xffffff}),false),
  spruce=inst(merge([[new THREE.ConeGeometry(2.9,6,7).translate(0,5,0)],[new THREE.ConeGeometry(2.2,5,7).translate(0,8.4,0)],[new THREE.ConeGeometry(1.4,4.4,7).translate(0,11.6,0)],[cyl(.35,.45,2.4,5,0,1.2,0),0x3a2a1e]]),M(0xffffff,{vertexColors:true})),
  birch=inst(cyl(.16,.3,9,5,0,4.5,0),M(0xffffff,{roughness:.6})),crown=inst(new THREE.IcosahedronGeometry(2.6,0).scale(1,1.25,1),M(0xffffff)),
  shav=inst(new THREE.ConeGeometry(2.2,1.6,6).translate(0,.8,0),M(0xf0ebe0));
const stairGeo=[];
Z.build=()=>{const gy=x=>groundZ(Z,x[0],x[1],0);
  /* palissade, chemin de ronde, tours */
  const gates=[0,4,6];
  for(let k=0;k<10;k++){const a0=(-108+36*k)*D2R,a1=a0+36*D2R,ax=[KR*Math.cos(a0),KR*Math.sin(a0)],bx=[KR*Math.cos(a1),KR*Math.sin(a1)],len=Math.hypot(bx[0]-ax[0],bx[1]-ax[1]),
      rot=Math.atan2(bx[1]-ax[1],bx[0]-ax[0]),n=30,gate=gates.includes(k),mx=(ax[0]+bx[0])/2,mz=(ax[1]+bx[1])/2,am=(a0+a1)/2;
    for(let i=0;i<n;i++){if(gate&&i>=12&&i<18)continue;const t=(i+.5)/n,x=lerp(ax[0],bx[0],t),z=lerp(ax[1],bx[1],t);
      logs.add(x,gy([x,z])-.4,z,1,rr(.92,1.16),1,rnd()*6,0,0,{k:(k*30+i)%3,band:Math.floor(i/3)%3});
      for(let q=0;q<2;q++)letters.add(x+Math.cos(am)*.75,gy([x,z])+rr(1.2,7.5),z+Math.sin(am)*.75,1,1,1,PI/2-am+rr(-.2,.2),0,rr(-.3,.3))}
    if(gate){const g=len*.2;for(const s of[-1,1]){const c=s*(g/2+(len-g)/4);sBox(Z,mx+Math.cos(rot)*c,mz+Math.sin(rot)*c,(len-g)/4,.8,rot,-6,9.4)}
      /* linteau de la porte */
      for(let i=12;i<18;i++){const t=(i+.5)/n,x=lerp(ax[0],bx[0],t),z=lerp(ax[1],bx[1],t);logs.add(x,gy([x,z])+6.6,z,1,.35,1,0,0,0,{k:i%3,band:1})}}
    else sBox(Z,mx,mz,len/2,.8,rot,-6,9.4);
    const wx=mx-Math.cos(am)*2.1,wz=mz-Math.sin(am)*2.1;walk_.add(wx,gy([wx,wz])+6.1,wz,len+1.5,1,1,-rot);sBox(Z,wx,wz,len/2+.6,1.3,rot,7.2,7.75);
    const tx=(KR+2.6)*Math.cos(a0),tz=(KR+2.6)*Math.sin(a0),ty=gy([tx,tz])-1;towers.add(tx,ty,tz);troofs.add(tx,ty,tz,1,1,1,0,0,0,{k:k%2});sCyl(Z,tx,tz,2.7,-6,14);
    if(k===2||k===7){const d=[Math.cos(rot),Math.sin(rot)],ix=mx-Math.cos(am)*4.6,iz=mz-Math.sin(am)*4.6;
      stairs(Z,ix-d[0]*15,iz-d[1]*15,2.8,ix-d[0]*1,iz-d[1]*1,7.75,2.2,stairGeo,0x5a4028);sBox(Z,ix+d[0]*1.2,iz+d[1]*1.2,2.3,2.4,rot,7.2,7.75);stairGeo.push([box(4.6,.5,4.8,ix+d[0]*1.2,7.5,iz+d[1]*1.2,-rot),0x5a4028])}}
  /* églises de bois */
  const church=(x,z,s,big)=>{const y=gy([x,z])-.3;bodies.add(x,y,z,7*s,14*s,7*s);sCyl(Z,x,z,7*s,-6,y+14*s);
    bodies.add(x,y+14*s,z,4.6*s,9*s,4.6*s);sCyl(Z,x,z,4.6*s,y+14*s,y+23*s);bodies.add(x,y+23*s,z,2.2*s,4*s,2.2*s);domes.add(x,y+27*s,z,4.2*s,4.2*s,4.2*s,0,0,0,{k:big?0:1});
    sCyl(Z,x,z,2.2*s,y+23*s,y+30*s);
    for(let i=0;i<4;i++){const a=i*PI/2+PI/4,dx=Math.cos(a)*5.9*s,dz=Math.sin(a)*5.9*s;if(big){bodies.add(x+dx,y+14*s,z+dz,1.2*s,3.4*s,1.2*s);domes.add(x+dx,y+17.4*s,z+dz,2*s,2*s,2*s,0,0,0,{k:1+i%2})}}
    for(let i=0;i<8;i++){const a=i*PI/4+PI/8;wins.add(x+Math.cos(a)*6.7*s,y+rr(5,9)*s,z+Math.sin(a)*6.7*s,s,s,s,PI/2-a);wins.add(x+Math.cos(a)*4.4*s,y+18*s,z+Math.sin(a)*4.4*s,s,s,s,PI/2-a)}
    return y};
  const y0=church(0,0,1,true);
  /* escalier en vis autour de la grande église, jusqu'à la galerie puis au pied du bulbe */
  const spiral=(r,ya,yb,a0,w)=>{const n=Math.ceil((yb-ya)/.5);for(let i=0;i<n;i++){const a=a0+i*(1.25/r),x=Math.cos(a)*r,z=Math.sin(a)*r,y=ya+(i+1)*.5;
      sBox(Z,x,z,.95,w,a+PI/2,y-.6,y);stairGeo.push([box(1.7,.3,w*2,x,y-.15,z,-(a+PI/2)),0x6a4a2c])}};
  spiral(8.3,y0,y0+14,2.2,1.3);spiral(5.6,y0+14,y0+23,.4,1.0);
  Z.top=[1.9,y0+23.6,2.8];
  for(let i=0;i<4;i++){const a=i*PI/2+.5;church(Math.cos(a)*31,Math.sin(a)*31,.55,false)}
  mesh(merge(stairGeo),M(0xffffff,{vertexColors:true}));
  /* forêt */
  for(let i=0;i<340;i++){const a=rnd()*TAU,r=rr(76,152),x=Math.cos(a)*r,z=Math.sin(a)*r;if(!inPoly(Z.poly,x,z)||dPoly(Z.poly,x,z)<5)continue;
    if(N1(x*1.7,z*1.7+30)>.48)spruce.add(x,gy([x,z])-.3,z,rr(.8,1.5),rr(.9,1.7),rr(.8,1.5),rnd()*6);
    else{const s=rr(.8,1.3);birch.add(x,gy([x,z])-.3,z,s,s,s,0,rr(-.06,.06),rr(-.06,.06));crown.add(x,gy([x,z])+8.2*s,z,s,s,s,rnd()*6)}}
  for(let i=0;i<26;i++){const a=rnd()*TAU,r=rr(8,52),x=Math.cos(a)*r,z=Math.sin(a)*r;shav.add(x,gy([x,z])-.2,z,rr(.5,1.2),rr(.5,1.3),rr(.5,1.2),rnd()*6)}
  for(let i=0;i<9;i++){const x=-96+rr(-7,7),z=-58+rr(-7,7);shav.add(x,gy([x,z])-.2,z,rr(.6,1.3),rr(.6,1.4),rr(.6,1.3))}
  for(const o of[logs,towers,troofs,walk_,bodies,domes,letters,wins,spruce,birch,crown,shav])o.make();
  Z.flies=points(240,.9);Z.fseed=[];for(let i=0;i<240;i++)Z.fseed.push([rnd()*TAU,rr(6,74),rr(1,20),rnd()*9]);
  Z.fires=points(6,5);Z.firePos=[[20,22],[-24,12],[8,-30],[-38,-34],[40,-8],[-6,44]];
  secret(Z,Z.top,'L\'écorce pliée en huit','Tout en haut, au pied du bulbe. Personne ne l\'a jamais dépliée, et vous non plus.');
  const g4=(-108+36*4+18)*D2R;secret(Z,[Math.cos(g4)*(KR*Math.cos(18*D2R)-2.1),gy([0,0])+8.9,Math.sin(g4)*(KR*Math.cos(18*D2R)-2.1)],'Le racloir d\'Ouliana','Sur le chemin de ronde, au-dessus de la porte où elle dormait. Le tesson est encore blanc d\'aubier.');
  secret(Z,[-96,groundZ(Z,-96,-58,-7)+1.5,-58],'Le nom du frère noyé','Sous les copeaux, une écorce que la racleuse a oublié de gratter. Elle n\'apparaît que lorsque la ville oublie.',lv=>lv<=-4);
};
Z.update=lv=>{const n=wneg(lv),p=wpos(lv);
  logs.set(o=>[1,o.r<n*.4?.3:1,1],(o,i,c)=>{cLog(lv,c);const s=.8+.4*o.r;c[0]*=s;c[1]*=s;c[2]*=s;if(p>0)mix3(c,c,P7[o.e.band],sst(.15,.95,p*(.7+.6*o.r)))});
  towers.set(null,(o,i,c)=>cLog(lv,c));troofs.set(null,(o,i,c)=>{cRoof(lv,c);if(p>0)mix3(c,c,P7[o.e.k*2],p*.85)});
  bodies.set(null,(o,i,c)=>{cLog(lv,c);c[0]*=1.15;c[1]*=1.12;c[2]*=1.1;if(p>0)mix3(c,c,P7[i%3],p*.45)});
  domes.set(null,(o,i,c)=>{cDome(lv,c);if(p>0)mix3(c,c,P7[o.e.k%3],sst(.3,1,p))});
  letters.set(o=>sst(.1+o.r*.5,.5+o.r*.5,p));
  wins.m.visible=p>.05;wins.m.material.color.setRGB(3.2*p,1.9*p,.6*p);
  spruce.set(null,(o,i,c)=>{cSpr(lv,c);const s=.8+.4*o.r;c[0]*=s;c[1]*=s;c[2]*=s});
  birch.set(null,(o,i,c)=>cBir(lv,c));crown.set(o=>clamp(1+lv/6,0,1.25),(o,i,c)=>{cCrown(lv,c);c[1]*=.85+.3*o.r});
  shav.set(o=>sst(-1,-3.5,lv)*(.6+.4*sst(-7.5,-4,lv)));
  Z.flyK=sst(2.5,7,lv);Z.fireK=sst(-2,-6,lv)};
Z.tick=(t)=>{const F=Z.flies,k=Z.flyK,fk=fogK(0,8,0);F.visible=k>0;if(k>0)for(let i=0;i<240;i++){const s=Z.fseed[i],a=s[0]+t*.05*(1+s[3]*.1),r=s[1]+Math.sin(t*.3+s[3])*4;
    F.P[i*3]=Math.cos(a)*r;F.P[i*3+1]=3+s[2]+Math.sin(t*.7+s[3]*3)*1.5;F.P[i*3+2]=Math.sin(a)*r;const b=k*(1.2+Math.sin(t*2+s[3]*7))*(i<240*k?1:0)*fk;F.C[i*3]=3*b;F.C[i*3+1]=1.7*b;F.C[i*3+2]=.35*b}
  if(k>0)F.up();const G=Z.fires;G.visible=Z.fireK>0;if(Z.fireK>0){for(let i=0;i<6;i++){const q=Z.firePos[i],b=Z.fireK*(1.6+Math.sin(t*9+i*5)*.5)*fk;G.P[i*3]=q[0];G.P[i*3+1]=3.4;G.P[i*3+2]=q[1];G.C[i*3]=3*b;G.C[i*3+1]=1.3*b;G.C[i*3+2]=.3*b}G.up()}};
})();

/* ================= LE PUITS DES NEUF ÉDITS ================= */
(()=>{const Z=DON;
Z.info={nom:'Le Puits des Neuf Édits',sur:'Donjon · Pentagone · Volcan · Inspiration chinoise impériale',pm:'Tyrannie',pp:'Liberté',conteur:'Conteur C, le Maître du jeu sournois',
  recit:'Il était une fois un empereur qui voulait des lois auxquelles la lave elle-même obéirait. Il fit creuser au fond du cratère un puits de neuf étages et grava un Édit à chacun. Le neuvième, il le fit tailler dans un sceau de jade céladon, à l\'envers, comme tous les sceaux. La lave obéit et durcit en croûte. L\'empereur, lui, ne remonta jamais. Le puits a sa morale, gravée sous la margelle : un ordre s\'applique d\'abord à la main qui le grave.',
  pal:['Croûte brun-violet laquée d\'empreintes vermillon. Dalles céladon et dalles de jade fondu, presque du même vert. Pluie tiède de lapilli.','Fumerolles rabattues en voiles jaune soufre, auvents de laque rouge, une tablette clouée à chaque palier.','Cratère de basalte brun, pagodes de tuf à demi fondues, lueurs orange, fumerolles libres.','La croûte se fend, la lave coule en rigoles. Les tablettes sont retournées face contre terre.','Le puits est ouvert sur le ciel. Fontaines de lave vermillon, panaches jaune soufre, et une passerelle de dominos que nulle règle ne prévoit.']};
Z.atm=atmo({top:['#24161f','#4a3a20','#3d3029','#5f86ac','#2f6fd0'],hor:['#48282f','#8f7f30','#7a4a2a','#d8cfc6','#ffcf4a'],sun:['#a06a5a','#d9b860','#ffb070','#fff0dd','#fff1c0'],
  hs:['#8a6a74','#8a7a40','#806050','#b0c0d0','#ffd070'],hg:['#2a1a20','#3a3018','#40241a','#6a3a2a','#ff5a2a'],clc:['#2a1c22','#a89a3a','#5a4a40','#f2efe8','#f6e27a'],wc:['#2a2024','#d9c860','#ff8a3a','#ff9a4a','#ff5a1e'],
  sunI:[.6,.7,.9,1.25,1.7],hI:[1.15,.85,.7,.7,.8],fog:[.012,.011,.006,.0045,.003],el:[55,45,35,45,50],cl:[1,1,.8,.6,.5],wn:[.8,.4,.2,.4,.9],wv:[14,3,-3,-4,-6],wd:[1,3,2,2,3],ws:[.3,.3,.22,.25,.3],wI:[1,1,3,3.5,4.5],
  exp:[1.55,1.15,1.1,1,1],bl:[.9,.8,1.1,1.2,1.3],az:-120});
const lavaY=lv=>lv>=0?-25+wpos(lv)*11:-25-wneg(lv)*7;Z.lavaY=lavaY;
Z.h=(u,v,lv,n1,n2)=>{const r=Math.hypot(u,v),t=wpos(lv),crest=12*(.8+.5*n1);
  if(r>=47)return crest*Math.exp(-((r-47)/10)*((r-47)/10))+(n2-.5)*1.4;
  const q=(41-r)/3.9;let st,cone;
  if(q<=0)st=cone=lerp(crest,5,sst(47,41,r));
  else{const k=Math.floor(q),f=q-k;st=5-3.4*Math.min(9,k+sst(.6,1,f));cone=5-3.4*Math.min(9,q)+(n2-.5)*5}
  return Math.max(lerp(st,cone,t*.85),lavaY(lv))};
const cCrust=ramp('#3a2630','#3f3326','#3b2d26','#2e211d','#241815'),cCel=LIN('#a9c9b0'),cJade=LIN('#86b392'),cSeal=LIN('#c8321e'),cSul=LIN('#d9c23a'),
  cLava=ramp('#7a2a10','#c85a14','#ff7a1e','#ff5a1a','#ff3a14');
Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{const r=Math.hypot(u,v),n=wneg(lv),t=wpos(lv);cCrust(lv,o);const s=.75+.5*n2;o[0]*=s;o[1]*=s;o[2]*=s;
  if(r<47&&h<=lavaY(lv)+.06){cLava(lv,o);return 2.5+2.5*t+(n2-.5)*2}
  if(n>0&&r<47.5){const qx=x/6,qz=z/6,ix=Math.floor(qx),iz=Math.floor(qz),fx=qx-ix,fz=qz-iz,ed=Math.min(fx,1-fx,fz,1-fz),hh=hash(ix,iz);
    if(ed>.1){if(hh<.45)mix3(o,o,cCel,n*.92);else if(hh<.8)mix3(o,o,cJade,n*.92);if(ed>.27&&hash(ix+9,iz)<.2)mix3(o,o,cSeal,n)}}
  const sul=sst(.55,.7,n1+ (n2-.5)*.3)*(1-Math.abs(lv+2)/6);if(sul>0)mix3(o,o,cSul,clamp(sul,0,1)*.8);
  /* fissures de lave : minces à -7, larges rivières à +7 */
  const wd=lerp(.035,.012,n)+t*.11,cr=sst(wd,wd*.4,n3);
  if(cr>0&&r<64){cLava(lv,tc2);mix3(o,o,tc2,cr);return cr*(1.2+3*t)*(1-.75*n)}
  if(t>0){const c2=sst(.035,.012,Math.abs(n3-.42));if(c2>0){mix3(o,o,cCel,c2*t);return c2*t*.35}}
  return 0};
const walls=inst(merge([[box(6,4.4,6,0,2.2,0)],[box(4.4,3.6,4.4,0,7.2,0)],[box(3,3,3,0,11.6,0)]]),M(0xffffff,{vertexColors:true})),
  roofs=inst(merge([[new THREE.ConeGeometry(6.4,1.6,4).rotateY(PI/4).translate(0,5.2,0)],[new THREE.ConeGeometry(4.8,1.5,4).rotateY(PI/4).translate(0,9.7,0)],[new THREE.ConeGeometry(3.6,2.6,4).rotateY(PI/4).translate(0,14.4,0)]]),M(0xffffff,{roughness:.5})),
  tabs=inst(merge([[box(2.4,5.4,.6,0,2.7,0),0x9aa89a],[box(2.6,.7,.7,0,4.6,0),0xc8321e]]),M(0xffffff,{vertexColors:true})),
  dom=inst(new THREE.BoxGeometry(1,2.2,.32),M(0xe8dfc8,{roughness:.55})),
  aw=inst(merge([[box(5,.3,3.6,0,3.2,0,0,.12),0xa8281a],[cyl(.12,.12,3.2,5,-2.2,1.6,-1.5),0x3a2a22],[cyl(.12,.12,3.2,5,2.2,1.6,-1.5),0x3a2a22],[cyl(.12,.12,3.4,5,-2.2,1.7,1.5),0x3a2a22],[cyl(.12,.12,3.4,5,2.2,1.7,1.5),0x3a2a22],[cyl(.7,.5,.8,6,0,.4,0),0x2a2222]]),M(0xffffff,{vertexColors:true})),
  cang=inst(merge([[box(.4,3.6,.4,-1.4,1.8,0)],[box(.4,3.6,.4,1.4,1.8,0)],[box(3.2,.4,.4,0,3.6,0)],[box(3.2,.4,.4,0,1.6,0)]]),M(0x8a7460));
const cTuf=ramp('#5a3a38','#6a5a4a','#8a7868','#7a6a5c','#6a5a50'),cRoofD=ramp('#a8281a','#8a2a1c','#5a4a40','#4a3c36','#3a2e2a');
const FN=1000,fv=new Float32Array(FN*4);
Z.build=()=>{const gh=(u,v,lv)=>Z.gh(u,v,lv===undefined?0:lv);
  for(let i=0;i<5;i++){const a=i*TAU/5+.3,u=Math.cos(a)*48,v=Math.sin(a)*48,p=Z.w(u,v),y=gh(u,v)-1;walls.add(p[0],y,p[1],1,1,1,rnd()*6,0,0,{t:rr(-1,1)});roofs.add(p[0],y,p[1],1,1,1,walls.a[i].ry,0,0,{t:walls.a[i].e.t});sCyl(Z,p[0],p[1],3.4,-9,y+4.4)}
  for(let i=0;i<9;i++){const r=39.2-i*3.9,a=i*2.1+.5,u=Math.cos(a)*r,v=Math.sin(a)*r,p=Z.w(u,v);tabs.add(p[0],0,p[1],1,1,1,-a-Z.ax+PI/2,0,0,{u,v})}
  for(let i=0;i<5;i++){const a=i*TAU/5+1,u=Math.cos(a)*56,v=Math.sin(a)*56,p=Z.w(u,v);aw.add(p[0],gh(u,v)-.2,p[1],1,1,1,rnd()*6)}
  for(let i=0;i<7;i++){const u=-64+i*2.6,v=Math.sin(i*1.3)*3,p=Z.w(u,v);cang.add(p[0],gh(u,v)-.3,p[1],1,1,1,-Z.ax+PI/2+rr(-.5,.5),0,rr(-.2,.2))}
  /* Tesselés : trois dispositions des mêmes 240 dominos d'os */
  const yA=gh(-47,0,7)+.3,yB=gh(47,0,7)+.3;Z.bridge=s=>[-47+94*s,10*Math.sin(PI*s),lerp(yA,yB,s)+5.5*Math.sin(PI*s)];
  for(let i=0;i<240;i++){const e={};
    {const k=Math.floor(i/40),j=i%40,ca=k*TAU/6+.35,cr=22+(k%3)*7.8,a=j*TAU/40;e.n=[Math.cos(ca)*cr+Math.cos(a)*4.6,Math.sin(ca)*cr+Math.sin(a)*4.6,0,-a,0]}
    {const k=i%8,ca=k*TAU/8+.9,cr=54;e.z=[Math.cos(ca)*cr+rr(-3,3),Math.sin(ca)*cr+rr(-3,3),PI/2,rnd()*6,rr(0,.8)]}
    if(i<120){const s=(i+.5)/120,b=Z.bridge(s),b2=Z.bridge(s+.01);e.p=[b[0],b[1],PI/2,-Math.atan2(b2[1]-b[1],b2[0]-b[0])+PI/2,0];e.by=b[2]}
    else{const s=(i-120)/120,r=58-46*s,a=2.6+s*TAU*1.4+Math.sin(s*30)*.12;e.p=[Math.cos(a)*r,Math.sin(a)*r,0,-a,0];e.s=s}
    dom.add(0,0,0,1,1,1,0,0,0,e)}
  Z.bs=[];for(let i=0;i<32;i++){const s=(i+.5)/32,b=Z.bridge(s),b2=Z.bridge(s+.01),p=Z.w(b[0],b[1]);Z.bs.push(sBox(Z,p[0],p[1],1.75,1.25,Math.atan2(b2[1]-b[1],b2[0]-b[0])+Z.ax,b[2]-.5,b[2]+.16))}
  for(const o of[walls,roofs,tabs,dom,aw,cang])o.make();
  Z.fount=points(FN,3.4);Z.smoke=points(70,46,{blending:THREE.NormalBlending,opacity:.2});Z.sseed=[];for(let i=0;i<70;i++)Z.sseed.push([rnd(),rnd()*TAU,rnd()]);
  Z.lant=points(14,2.6);
  Z.light=new THREE.PointLight(0xff6a20,1,190,1.6);scene.add(Z.light);
  secret(Z,()=>{const p=Z.w(0,0);return[p[0],Math.max(Z.gh(0,0),-32)+1.3,p[1]]},'Le sceau de jade céladon','Au fond du neuvième étage, sur son coussin de basalte. Il ne se lit qu\'imprimé. Sous la lave, il est hors d\'atteinte.',lv=>lv<=1);
  secret(Z,()=>{const b=Z.bridge(.5),p=Z.w(b[0],b[1]);return[p[0],b[2]+1.6,p[1]]},'L\'Édit que personne n\'a gravé','Au milieu de la passerelle de dominos, au-dessus de la fontaine. Les Tesselés ne la tendent que lorsque le puits est libre.',lv=>lv>=4);
  {const ca=3*TAU/6+.35,cr=22,u=Math.cos(ca)*cr,v=Math.sin(ca)*cr;secret(Z,()=>{const p=Z.w(u,v);return[p[0],Z.gh(u,v)+1.4,p[1]]},'Une main tamponnée','Au centre d\'un enclos de Tesselés. Ils ne font cercle que sous la tyrannie, et ils se referment sur ce qu\'ils gardent.',lv=>lv<=-4)}
};
Z.update=lv=>{const n=wneg(lv),p=wpos(lv);
  walls.set(null,(o,i,c)=>cTuf(lv,c));for(const q of[walls,roofs])q.a.forEach(o=>{o.rz=o.e.t*p*.22;o.dy=-p*1.6});walls.set(null,(o,i,c)=>cTuf(lv,c));roofs.set(null,(o,i,c)=>cRoofD(lv,c));
  tabs.a.forEach(o=>{o.y=Z.gh(o.e.u,o.e.v,lv)-.1+p*.5;o.rx=-sst(.5,3.5,lv)*PI/2*.96});tabs.set(()=>[1,1+n*.6,1]);
  aw.set(()=>sst(-.5,-2.5,lv)*sst(-7.5,-5,lv)*.6+sst(-.5,-2.5,lv)*.4);cang.set(()=>sst(1.5,4,lv));
  dom.a.forEach(o=>{const e=o.e,a=lv<0?e.n:e.p,k=lv<0?n:sst(0,.75,p),u=lerp(e.z[0],a[0],k),v=lerp(e.z[1],a[1],k),w=Z.w(u,v);o.x=w[0];o.z=w[1];
    o.rx=lerp(e.z[2],a[2],k);o.ry=lerp(e.z[3],a[3],k)-Z.ax;o.rz=lerp(e.z[4],0,k);const g=Z.gh(u,v,lv)+lerp(.2,1.1,1-Math.abs(o.rx)/(PI/2));o.y=(lv>0&&e.by!==undefined)?lerp(g,e.by,k):g});
  dom.set();for(const s of Z.bs)s.on=lv>=3.6;
  Z.fk=lv>=0?.12+.88*sst(1.5,7,lv):.12*sst(-5,0,lv);Z.light.intensity=.25+2.2*Z.fk+(lv>=0?.8:.8*(1-n));const c=Z.w(0,0);Z.light.position.set(c[0],lavaY(lv)+10+p*22,c[1]);
  cSul_(lv)};
const sm=ramp('#1a1216','#b8a838','#5a4a44','#e8e4dc','#e6d040'),sI=nramp(.5,.9,.5,.7,1);let smC=[0,0,0];function cSul_(lv){sm(lv,smC);Z.smoke.material.opacity=.12+.14*sI(lv);Z.sH=nramp(26,14,30,44,70)(lv)}
Z.tick=(t,dt)=>{const F=Z.fount,lv=Z.lv,c=Z.w(0,0),ly=lavaY(lv),k=Z.fk,P=F.P,C=F.C,fk=fogK(c[0],10,c[1]);
  for(let i=0;i<FN;i++){let life=fv[i*4+3];if(life<=0){if(rnd()<k*dt*3.2){const a=rnd()*TAU,sp=rr(2,9),jet=i%3;P[i*3]=c[0]+Math.cos(jet*2.1)*4*k;P[i*3+1]=ly+.5;P[i*3+2]=c[1]+Math.sin(jet*2.1)*4*k;
        fv[i*4]=Math.cos(a)*sp;fv[i*4+1]=rr(16,26)+34*k*rr(.6,1);fv[i*4+2]=Math.sin(a)*sp;fv[i*4+3]=1}else{P[i*3+1]=-999;continue}}
    fv[i*4+1]-=26*dt;P[i*3]+=fv[i*4]*dt;P[i*3+1]+=fv[i*4+1]*dt;P[i*3+2]+=fv[i*4+2]*dt;if(P[i*3+1]<ly){fv[i*4+3]=0;P[i*3+1]=-999}
    const hot=clamp(fv[i*4+1]/40+.6,.25,1.3)*fk;C[i*3]=5*hot;C[i*3+1]=1.1*hot*hot;C[i*3+2]=.15*hot}
  F.up();
  const S=Z.smoke;for(let i=0;i<70;i++){const s=Z.sseed[i],ph=(t*.035*(1+s[2])+s[0])%1,rad=6+ph*30*(.4+s[2]);S.P[i*3]=c[0]+Math.cos(s[1]+ph*2)*rad;S.P[i*3+1]=ly+6+ph*Z.sH;S.P[i*3+2]=c[1]+Math.sin(s[1]+ph*2)*rad;
    const f=Math.sin(ph*PI);S.C[i*3]=smC[0]*f;S.C[i*3+1]=smC[1]*f;S.C[i*3+2]=smC[2]*f}S.up();
  const n=wneg(lv),Lm=Z.lant;Lm.visible=n>.1;if(n>.1){for(let i=0;i<14;i++){const a=i*2.4+t*.08*(i%2?1:-1),r=40-(i%9)*3.9+1.9,p=Z.w(Math.cos(a)*r,Math.sin(a)*r),b=n*(1.3+.3*Math.sin(t*5+i))*fk;
      Lm.P[i*3]=p[0];Lm.P[i*3+1]=groundZ(Z,p[0],p[1])+2.2;Lm.P[i*3+2]=p[1];Lm.C[i*3]=2.6*b;Lm.C[i*3+1]=1.7*b;Lm.C[i*3+2]=.6*b}Lm.up()}
  if(lv>2.5){const pw=wpos(lv);dom.a.forEach((o,i)=>{if(o.e.s===undefined)return;const w=Math.sin(t*1.6-o.e.s*26);o.rx=Math.max(0,w)*1.1*pw;put(dom.m,i,o.x,o.y,o.z,1,1,1,o.ry,o.rx,0)});dom.m.instanceMatrix.needsUpdate=true}};
})();
