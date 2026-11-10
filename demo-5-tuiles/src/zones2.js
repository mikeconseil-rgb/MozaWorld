/* Zones 3 à 5 : Chinampas Dérivantes (Ressource, hexagone), Exarchat des Lucioles (Antre, nœud papillon), Foire de Givrecloche (Marché, losange). */
/* Escalier en vis, en coordonnées locales (u,v) de la zone ; renvoie les marches pour pouvoir les déplacer */
function vis(Z,cu,cv,r,ya,yb,a0,w,geo,hex,sens){const n=Math.ceil((yb-ya)/.5),out=[];
  for(let i=0;i<n;i++){const a=a0+(sens||1)*i*(1.2/r),u=cu+Math.cos(a)*r,v=cv+Math.sin(a)*r,y=ya+(i+1)*.5,p=Z.w(u,v);
    const s=sBox(Z,p[0],p[1],.95,w,a+PI/2+Z.ax,y-.6,y);s.oy0=y-.6;s.oy1=y;out.push(s);if(geo)geo.push([box(1.75,.3,w*2,u,y-.15,v,-(a+PI/2)),hex])}return out}
const qUp=new THREE.Quaternion();
function strut(m,i,ax,ay,az,bx,by,bz,r){v3.set(bx-ax,by-ay,bz-az);const len=v3.length();dummy.position.set((ax+bx)/2,(ay+by)/2,(az+bz)/2);
  dummy.quaternion.setFromUnitVectors(UP,v3.normalize());dummy.scale.set(r,len,r);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix)}

/* ================= LES CHINAMPAS DÉRIVANTES DE TEZCAMIXTLI ================= */
(()=>{const Z=RES;
Z.info={nom:'Les Chinampas Dérivantes de Tezcamixtli',sur:'Ressource · Hexagone allongé · Îles flottantes · Inspiration aztèque',pm:'Folie',pp:'Raison',conteur:'Conteur D, le lecteur de l\'étrange',
  recit:'Depuis que le lac de Tezcamixtli s\'est évaporé vers le haut en emportant ses jardins, les chinampas flottent à hauteur de nuage, reliées par des ponts de fibre d\'agave, et la récolte se fait comme avant, avec les mêmes paniers. Le soir, les vieux refont le compte sur leurs baguettes : l\'île du nord a un rang de plus que la veille, et un cultivateur de moins. Personne ne le cherche.',
  pal:['Îles qui s\'entrechoquent sous un ciel vert de bile. Épis couverts de galles gonflées, ponts d\'agave pourris qui pendent dans le vide.','Nuages en lambeaux jaunâtres, premières galles, la terre des îles s\'émiette et tombe en pluie fine.','Jardins flottants vert et bleu, temples à degrés de tuf rose, canaux qui débordent en cascades dans le vide.','Maïs vert vif plus haut que les hommes. Chaque matin, une île bourgeonne au flanc d\'une autre.','L\'archipel a doublé. Vert acide du jeune maïs, rouge d\'amarante, nuées de pollen jaune pâle. Les bourgeons montent jusqu\'à l\'Île-Mère.']};
Z.atm=atmo({top:['#56641c','#84864c','#1c58bc','#3484d8','#a8cc80'],hor:['#98a238','#c9c080','#bfe0ff','#e8f3d0','#f6f0b0'],sun:['#d9d67a','#e8dca0','#ffffff','#fff8e0','#fff6c0'],
  hs:['#a8b050','#b0aa70','#a0c8ff','#b8d8f0','#f0f0a0'],hg:['#4a3a20','#5a4a30','#6a8a50','#6a9a40','#6aa030'],clc:['#8a9238','#d0c890','#ffffff','#ffffff','#fbf6c8'],wc:['#f0ecd8','#a08a60','#ffffff','#f6f0a0','#f6f0a0'],
  sunI:[.7,.9,1.8,1.9,1.6],hI:[.75,.7,.8,.85,1],fog:[.0105,.006,.0021,.002,.0045],el:[35,40,55,45,40],cl:[1,.85,.5,.45,.7],wn:[.9,.45,.04,.3,1],wv:[.5,3,.5,.3,2.2],wd:[4,2,2,3,3],ws:[.42,.2,.2,.24,.2],wI:[1.1,1,1,1.6,1.8],
  exp:[1,1,1,1,1],bl:[.7,.6,.6,.7,.9],az:-35});
const canal=v=>{const m=((v%26)+26)%26;return sst(3.4,1.6,Math.abs(m-13))};
Z.h=(u,v,lv,n1,n2)=>1.4+(n1-.5)*3-2.5*canal(v)+(n2-.5)*3.2*wneg(lv)+wpos(lv)*sst(.56,.8,n1)*4;
const rA=ramp('#4f3c24','#5c4a2a','#3f6a30','#4f8a30','#84bc2c'),rB=ramp('#6a5a34','#6a5a3a','#30508c','#3a6a9a','#96203c'),rW=ramp('#66762a','#6a8a5a','#2a9ac0','#3ab0c8','#74d4c0'),spore=LIN('#e8e4d0'),pollen=LIN('#f0e890');
Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{const c=canal(v);if(c>.55){rW(lv,o);return .25*(1-wneg(lv))}
  const m=((v%26)+26)%26,row=Math.floor(m/4.34)%2;(row?rB:rA)(lv,o);const s=.8+.4*n2;o[0]*=s;o[1]*=s;o[2]*=s;
  const n=wneg(lv),p=wpos(lv);if(n>0&&hash(Math.floor(x/2),Math.floor(z/2)+5)<.2*n)mix3(o,o,spore,.75);if(p>0)mix3(o,o,pollen,p*.35*sst(.4,.7,n2));return 0};
const isl=[],I=(u,v,y,r,birth,step)=>{isl.push({u,v,y,r,birth:birth||0,step:!!step,ph:rnd()*TAU,cx:0,cy:0,cz:0,sc:1});return isl.length-1};
const cTop=ramp('#6a5a2a','#7a7a3a','#5a9a3a','#5aaa30','#a8e03a'),cBot=ramp('#5a4630','#6a5238','#7a5a3c','#80603e','#86623c'),
  cCrA=ramp('#6a4a2a','#7a6a3a','#4f8a3a','#4fa030','#a8e03a'),cCrB=ramp('#8a7a5a','#6a5a3a','#3a5fa8','#4a7ab8','#b01a3a'),cTuf=ramp('#8a7a5a','#b09080','#d9a09a','#e0a8a0','#e8b0a8');
const top=inst(cyl(1,.93,.3,11,0,-.15,0),M(0xffffff)),bot=inst(new THREE.ConeGeometry(.96,1,9).rotateX(PI).translate(0,-.8,0),M(0xffffff)),
  crops=inst(merge([[new THREE.ConeGeometry(.2,3.4,4).translate(0,1.7,0)],[new THREE.ConeGeometry(.5,1.5,3).translate(0,1.5,0).scale(1,1,.25)],[new THREE.ConeGeometry(.5,1.4,3).translate(0,2.2,0).scale(.25,1,1)]]),M(0xffffff)),galls=inst(new THREE.IcosahedronGeometry(1,1),M(0xffffff,{roughness:.6})),
  amar=inst(new THREE.ConeGeometry(.5,4.4,5).translate(0,2.2,0),M(0xb01a3a)),planks=inst(new THREE.BoxGeometry(1,.16,3),M(0x8a6a40));
const pairs=[[0,1],[1,2],[1,3],[0,4],[4,5],[3,6],[2,7]],NP=12;
Z.build=()=>{
  I(-22,-10,16,11);I(0,20,22,13);I(18,-18,28,12);I(8,60,30,17);I(-12,-62,26,13);I(14,-80,31,9);I(-8,92,30,10);I(30,30,44,9);I(34,-4,57,10);
  for(let i=0;i<6;i++)I(-44+i*3.3,-10+i*.4,3.2+i*2,2.6,0,true);
  const births=[2,3,4,5,5,6];for(let i=0;i<6;i++)I(30+Math.cos(i*1.1)*4+i*.6,25-i*3.4,45.8+i*1.9,2.8,births[i],true);
  for(let i=0;i<22;i++){const pr=isl[i%9],a=rnd()*TAU,r=rr(2.5,6);I(pr.u+Math.cos(a)*(pr.r+r*.5),pr.v+Math.sin(a)*(pr.r+r*.5),pr.y+rr(-6,5),r,1+i%7)}
  for(let i=0;i<9;i++){const u=rr(-50,50),v=rr(-115,115);if(Z.inside(u,v,4))I(u,v,rr(48,82),rr(4,9))}
  Z.NI=isl.length;Z.isl=isl;for(const s of isl){top.add(0,0,0);bot.add(0,0,0);s.sol=sCyl(Z,0,0,s.r,0,0)}
  for(let i=0;i<isl.length;i++){const s=isl[i],k=s.step?0:Math.round(s.r*.9);for(let j=0;j<k;j++){const a=rnd()*TAU,r=Math.sqrt(rnd())*s.r*.8;crops.add(0,0,0,rr(.8,1.3),rr(.6,1.2),rr(.8,1.3),0,0,0,{isl:i,du:Math.cos(a)*r,dv:Math.sin(a)*r,row:j%2})}}
  Z.cropIsl=crops.a.length;
  /* pyramide de tuf au sol, que l'on gravit */
  const pu=20,pv=-45,pw=Z.w(pu,pv),py=Z.gh(pu,pv,0)-.6,pg=[];Z.pyr=[pw[0],py+11,pw[1]];
  [14,11.5,9,6.5,4].forEach((hs,i)=>{pg.push([box(hs*2,2.2,hs*2,pu,py+1.1+i*2.2,pv)]);sBox(Z,pw[0],pw[1],hs,hs,Z.ax,-8,py+2.2*(i+1))});
  pg.push([box(3,2.6,3,pu,py+12.3,pv+0)]);pg.push([box(4.4,.5,4.4,pu,py+13.8,pv)]);
  {const a=Z.w(pu-15.2,pv),b=Z.w(pu-3.6,pv);stairs(Z,a[0],a[1],py,b[0],b[1],py+11,3).forEach(s=>{s.ramp=true})}
  for(let i=0;i<22;i++)pg.push([box(.56,.5,3,pu-15+i*.53,py+.25+i*.5,pv)]);
  Z.pyrM=mesh(merge(pg),M(0xffffff));Z.pyrM.position.set(Z.c[0],0,Z.c[1]);Z.pyrM.rotation.y=-Z.ax;
  {const s=isl[3];Z.tmp=mesh(merge([[box(9,2,9,0,1,0)],[box(6.4,2,6.4,0,3,0)],[box(4,2,4,0,5,0)],[box(2.4,2.2,2.4,0,7.1,0)],[box(3.4,.4,3.4,0,8.3,0)]]),Z.pyrM.material)}
  /* champ au sol */
  for(let i=0;i<3400;i++){const u=rr(-56,56),v0=rr(-128,128),v=Math.round(v0/1.45)*1.45+.7;if(!Z.inside(u,v,3)||canal(v)>.2||(Math.abs(u-pu)<17&&Math.abs(v-pv)<17))continue;
    const p=Z.w(u,v),m=((v%26)+26)%26;crops.add(p[0],0,p[1],rr(.8,1.3),rr(.7,1.25),rr(.8,1.3),rnd()*6,0,0,{u,v,row:Math.floor(m/4.34)%2,t:rr(-1,1)});
    if(i%16===0)galls.add(p[0]+rr(-1,1),0,p[1]+rr(-1,1),rr(.5,1.6),rr(.5,1.9),rr(.5,1.6),0,0,0,{u,v,w:i%32===0});
    if(i%13===0)amar.add(p[0]+rr(-1,1),0,p[1]+rr(-1,1),rr(.7,1.3),rr(.7,1.4),rr(.7,1.3),0,0,0,{u,v})}
  galls.add(pw[0],py+15,pw[1],7,7.6,7,0,0,0,{big:true});
  for(let i=0;i<pairs.length*NP;i++)planks.add(0,0,0);
  for(const o of[top,bot,crops,galls,amar,planks])o.make();
  Z.psol=[];for(let i=0;i<pairs.length*NP;i++)Z.psol.push(sBox(Z,0,0,1,1.5,0,0,0));
  const rg=new THREE.BufferGeometry();Z.rP=new Float32Array(pairs.length*NP*12);rg.setAttribute('position',new THREE.BufferAttribute(Z.rP,3));
  Z.ropes=new THREE.LineSegments(rg,new THREE.LineBasicMaterial({color:0xc8b078}));Z.ropes.frustumCulled=false;scene.add(Z.ropes);
  Z.falls=points(8*46,.55,{blending:THREE.NormalBlending,opacity:.8});Z.fc=[0,0,0];
  secret(Z,()=>{const s=isl[3];return[s.cx+7,s.cy+1.4,s.cz+7]},'La baguette entaillée','Sur l\'île du temple. Les vieux y comptent les tiges. Il y a une entaille de plus que de cultivateurs.');
  secret(Z,()=>{const s=isl[8];return[s.cx,s.cy+1.5,s.cz]},'Bouture de l\'Île-Mère','Tout en haut. Les bourgeons n\'y mènent que lorsque la raison a gagné l\'archipel.',lv=>lv>=5);
  secret(Z,[Z.pyr[0]+5.2,Z.pyr[1]+1.3,Z.pyr[2]],'Galle de Tezcamixtli','Au sommet de la pyramide, contre la Grande Galle. Elle ne gonfle que lorsque les îles dansent à rebours.',lv=>lv<=-4);
};
Z.update=lv=>{const n=wneg(lv),p=wpos(lv);
  for(let i=0;i<isl.length;i++){const s=isl[i];s.sc=s.birth?sst(s.birth-1,s.birth-.1,lv):1;cTop(lv,tc);tint(top.m,i,tc,.85+.3*top.a[i].r);cBot(lv,tc);tint(bot.m,i,tc,.8+.4*bot.a[i].r)}
  crops.a.forEach((o,i)=>{if(i>=Z.cropIsl){o.y=Z.gh(o.e.u,o.e.v,lv)-.2;o.rz=o.e.t*n*.5}});
  const hk=nramp(.85,.9,1,1.8,1.35)(lv);crops.set(()=>[1,hk,1],(o,i,c)=>{(o.e.row?cCrB:cCrA)(lv,c);const s=.8+.4*o.r;c[0]*=s;c[1]*=s;c[2]*=s});
  galls.a.forEach(o=>{if(!o.e.big)o.y=Z.gh(o.e.u,o.e.v,lv)+1.2});
  galls.set(o=>o.e.big?sst(-3.5,-6.5,lv):sst(-.5-o.r*3,-3-o.r*4,lv),(o,i,c)=>{const b=o.e.w||(o.e.big&&0);c[0]=b?.82:.2;c[1]=b?.78:.11;c[2]=b?.62:.05});
  amar.a.forEach(o=>{o.y=Z.gh(o.e.u,o.e.v,lv)-.2});amar.set(o=>sst(1+o.r*3,3.5+o.r*3.5,lv));
  cTuf(lv,tc);Z.pyrM.material.color.setRGB(tc[0],tc[1],tc[2]);
  for(const s of Z.psol)s.on=lv>-3.5;Z.ropes.material.color.setRGB(...ramp('#3a3020','#c8b078','#e0d0a0')(lv,tc));
  ramp('#5a4630','#7a6040','#cfeaff','#d8f0ff','#e0f6f0')(lv,Z.fc)};
Z.tick=(t)=>{const lv=Z.lv,n=wneg(lv);
  for(let i=0;i<isl.length;i++){const s=isl[i],am=s.step?.12:.35,u=s.u+n*Math.sin(t*.9+s.ph*3)*(s.step?1.2:4.5),v=s.v+n*Math.cos(t*.7+s.ph*2)*(s.step?1.2:4.5),w=Z.w(u,v);
    s.cx=w[0];s.cz=w[1];s.cy=s.y+Math.sin(t*.35+s.ph)*am+n*Math.sin(t*2.1+s.ph*5)*2*am;s.rz=n*.2*Math.sin(t*1.3+s.ph);
    const R=s.r*s.sc;put(top.m,i,s.cx,s.cy,s.cz,R,1+s.r*.12,R,s.ph,0,s.rz);put(bot.m,i,s.cx,s.cy,s.cz,R,s.r*1.25*s.sc,R,s.ph,0,s.rz);
    const q=s.sol;q.x=s.cx;q.z=s.cz;q.r=R*.95;q.y1=s.cy;q.y0=s.cy-1.6;q.on=s.sc>.75}
  top.m.instanceMatrix.needsUpdate=bot.m.instanceMatrix.needsUpdate=true;
  const hk=nramp(.85,.9,1,1.8,1.35)(lv);
  for(let i=0;i<Z.cropIsl;i++){const o=crops.a[i],s=isl[o.e.isl],w=Z.w(o.e.du*s.sc,o.e.dv*s.sc);put(crops.m,i,s.cx+w[0]-Z.c[0],s.cy,s.cz+w[1]-Z.c[1],o.sx*s.sc,o.sy*hk*s.sc,o.sz*s.sc,0,0,s.rz)}
  crops.m.instanceMatrix.needsUpdate=true;
  {const s=isl[3];Z.tmp.position.set(s.cx,s.cy,s.cz);Z.tmp.rotation.set(0,-Z.ax,s.rz)}
  /* ponts d'agave */
  const sag=1.4+n*11,rP=Z.rP;
  for(let b=0;b<pairs.length;b++){const A_=isl[pairs[b][0]],B_=isl[pairs[b][1]],dx=B_.cx-A_.cx,dz=B_.cz-A_.cz,d=Math.hypot(dx,dz),ux=dx/d,uz=dz/d,
      ax=A_.cx+ux*A_.r*.98,az=A_.cz+uz*A_.r*.98,bx=B_.cx-ux*B_.r*.98,bz=B_.cz-uz*B_.r*.98,rot=Math.atan2(uz,ux),seg=Math.hypot(bx-ax,bz-az)/NP;
    const P=s=>[lerp(ax,bx,s),lerp(A_.cy,B_.cy,s)-sag*4*s*(1-s),lerp(az,bz,s)];
    for(let j=0;j<NP;j++){const k=b*NP+j,a=P(j/NP),c=P((j+1)/NP),m=P((j+.5)/NP),broke=n>.5&&j>=3&&j<9;
      put(planks.m,k,m[0],broke?-999:m[1],m[2],seg*.82,1,1,-rot,0,Math.atan2(c[1]-a[1],seg));
      const q=Z.psol[k];q.x=m[0];q.z=m[2];q.hx=seg*.5+.25;q.cs=Math.cos(rot);q.sn=Math.sin(rot);q.y1=m[1]+.1;q.y0=m[1]-.5;q.k=(c[1]-a[1])/seg;
      for(let e=0;e<2;e++){const o=(k*2+e)*6,sx=-uz*(e?1.5:-1.5),sz=ux*(e?1.5:-1.5);rP[o]=a[0]+sx;rP[o+1]=a[1]+(broke?-3:1);rP[o+2]=a[2]+sz;rP[o+3]=c[0]+sx;rP[o+4]=c[1]+(broke?-3:1);rP[o+5]=c[2]+sz}}}
  planks.m.instanceMatrix.needsUpdate=true;Z.ropes.geometry.attributes.position.needsUpdate=true;
  const F=Z.falls;for(let i=0;i<8;i++){const s=isl[i],g=2;for(let j=0;j<46;j++){const k=i*46+j,ph=(t*.33+j/46+hash(i,j)*.3)%1,a=s.ph+i;
      F.P[k*3]=s.cx+Math.cos(a)*s.r*.95+hash(j,i)*1.6*ph;F.P[k*3+1]=lerp(s.cy,g,ph*ph);F.P[k*3+2]=s.cz+Math.sin(a)*s.r*.95+hash(j+7,i)*1.6*ph;F.C[k*3]=Z.fc[0];F.C[k*3+1]=Z.fc[1];F.C[k*3+2]=Z.fc[2]}}F.up()};
})();

/* ================= L'EXARCHAT DES LUCIOLES ================= */
(()=>{const Z=ANT;
Z.info={nom:'L\'Exarchat des Lucioles',sur:'Antre · Nœud papillon · Mangrove · Inspiration byzantine',pm:'Nuit',pp:'Aurore',conteur:'Conteur B, l\'Explorateur marchand',
  recit:'Le panier de Zoé Kalliganis se remplit à marée basse, entre les racines des palétuviers : des murex, ces coquillages à épines qui saignent la pourpre. La chair descend dans des nasses suspendues sous la ruche de la reine Vespérine. C\'est le contrat, peint au minium sur le pilotis du péage : la ruche éclaire le chenal de nuit, l\'Exarchat nourrit les larves. Puis un exarque a vendu la chair aux saleurs. La reine a fermé sa lumière. Zoé a gardé ses nasses. Elle attend qu\'on rouvre le contrat.',
  pal:['Nuit close sur des chenaux couleur de goudron, sans une étoile. Seules luisent les larves affamées, bleu-vert, à travers les ballots de contrebande.','Crépuscule figé couleur de prune, pluie tiède. La ruche ne s\'allume plus qu\'une seconde, en éclats brefs.','Mangrove à marée basse, vase brune, racines-échasses vert sombre, lumière d\'après-midi tamisée.','Pré-aube rose de garance, brume basse. Les premières pièces de pourpre sèchent sur les racines.','Aurore tenue en permanence par la reine. Des lieues d\'étoffes pourpres, safran et indigo tendues de racine en racine.']};
Z.atm=atmo({top:['#020308','#24122c','#64866c','#46467c','#5466c0'],hor:['#05070c','#54284a','#c0c8a0','#f0a09c','#ff9868'],sun:['#223040','#a06a90','#f0e8c0','#ffb0a0','#ffac7c'],
  hs:['#0c1418','#4a3050','#90a880','#c090a0','#ffb0a0'],hg:['#050608','#1a1018','#3a3020','#4a3040','#5a3050'],clc:['#06080c','#3a2038','#e0e4d0','#f8b8b0','#ffb890'],wc:['#30d0b0','#9080a0','#f0f0c0','#ffd0c0','#ffc080'],
  sunI:[.04,.35,1,.9,1.9],hI:[.3,.5,.7,.7,.8],fog:[.014,.009,.005,.0075,.003],el:[30,12,45,8,6],cl:[1,1,.5,.55,.5],wn:[0,.85,.05,.2,.3],wv:[1,22,.5,.3,-.4],wd:[1,.5,2,3,3],ws:[.2,.16,.2,.3,.22],wI:[1,.8,1,1.2,3],
  exp:[1.15,1,1,1,1.05],bl:[1.4,1,.6,1,1.2],az:ANT.ax/D2R});
const wy=nramp(-.06,-.3,-.95,-.5,-.25);Z.wy=wy;
Z.h=(u,v,lv,n1,n2)=>-.8+(n2-.5)*1.8-1.5*sst(8,3.5,Math.abs(v));
const cMud=ramp('#15110e','#2a1f24','#5a4630','#6a4a44','#7a5248'),cMoss=ramp('#0a0f0a','#1a2018','#3a4a2a','#4a4a34','#5a4a40'),cLar=LIN('#30e0b8');
Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{cMud(lv,o);cMoss(lv,tc2);mix3(o,o,tc2,sst(.45,.65,n1));const n=wneg(lv);
  if(n>.2&&hash(Math.floor(x/2)+3,Math.floor(z/2))<.035){mix3(o,o,cLar,.8);return 2.2*n}return 0};
const trees=[],cRoot=ramp('#0c0d0a','#1c1a1c','#2f3a26','#4a3a34','#5a3a3a'),cCan=ramp('#06100a','#10201a','#1f4a2a','#2a4a34','#2c5a3a'),
  cWat=ramp('#040507','#1a1020','#4a4a30','#8a5a60','#b86858'),cDye=[LIN('#7a1f8a'),LIN('#f0a81e'),LIN('#2a3a9a')];
const canopy=inst(new THREE.IcosahedronGeometry(4.6,1).scale(1,.5,1),M(0xffffff)),
  vats=inst(new THREE.CylinderGeometry(2.4,2.7,1.8,12,1,true).translate(0,.9,0),M(0x8a4a3a,{side:THREE.DoubleSide})),dye=inst(new THREE.CircleGeometry(2.35,12).rotateX(-PI/2).translate(0,1.3,0),new THREE.MeshBasicMaterial({color:0xffffff}),false),
  boats=inst(new THREE.IcosahedronGeometry(1,1).scale(3.4,.55,1.1),M(0x4a3626)),tarps=inst(new THREE.ConeGeometry(4.6,1.3,4).rotateY(PI/4).translate(0,3,0),M(0x1c1612)),
  bales=inst(new THREE.BoxGeometry(1.5,1,1),M(0xb8a888,{emissive:0x30e0b8,emissiveIntensity:0}));
const NL=280,luc=[];
Z.build=()=>{const hw=u=>19.1+Math.abs(u)/95*30.9;
  for(let i=0;i<260&&trees.length<125;i++){const u=rr(-92,92),v=rr(-1,1)*hw(u);if(Math.abs(v)<9.5||!Z.inside(u,v,4)||(Math.abs(u)<14))continue;
    if(u>58&&u<84&&v<-12&&v>-34)continue;trees.push({u,v,p:Z.w(u,v),s:rr(.8,1.25)})}
  const roots=Z.roots=IM(cyl(1,1.5,1,5),M(0xffffff),trees.length*7);let k=0;
  for(const T of trees){const x=T.p[0],z=T.p[1],s=T.s,y0=-1.2;for(let j=0;j<6;j++){const a=j*TAU/6+rnd(),r=rr(1.8,2.9)*s;strut(roots,k++,x+Math.cos(a)*r,y0,z+Math.sin(a)*r,x,3.8*s,z,.13*s)}
    strut(roots,k++,x,3.6*s,z,x+rr(-.4,.4),8*s,z+rr(-.4,.4),.3*s);canopy.add(x,8.8*s,z,s*rr(.85,1.2),s,s*rr(.85,1.2),rnd()*6)}
  roots.instanceMatrix.needsUpdate=true;
  /* eau */
  const sh=new THREE.Shape();Z.poly.forEach((p,i)=>i?sh.lineTo(p[0],-p[1]):sh.moveTo(p[0],-p[1]));
  const nc=document.createElement('canvas');nc.width=nc.height=128;const g2=nc.getContext('2d'),im=g2.createImageData(128,128),H=(x,y)=>fbm(((x+128)%128)*.09,((y+128)%128)*.09)+fbm(((x+128)%128)*.25+9,((y+128)%128)*.25)*.5;
  for(let y=0;y<128;y++)for(let x=0;x<128;x++){const dx=(H(x+1,y)-H(x-1,y))*3,dy=(H(x,y+1)-H(x,y-1))*3,l=1/Math.hypot(dx,dy,1),o=(y*128+x)*4;im.data[o]=(dx*l*.5+.5)*255;im.data[o+1]=(dy*l*.5+.5)*255;im.data[o+2]=(l*.5+.5)*255;im.data[o+3]=255}
  g2.putImageData(im,0,0);const nm=new THREE.CanvasTexture(nc);nm.wrapS=nm.wrapT=THREE.RepeatWrapping;nm.repeat.set(.07,.07);Z.nm=nm;
  Z.water=new THREE.Mesh(new THREE.ShapeGeometry(sh).rotateX(-PI/2),new THREE.MeshStandardMaterial({color:0x334433,roughness:.2,metalness:0,transparent:true,opacity:.86,normalMap:nm,normalScale:new THREE.Vector2(.35,.35)}));
  Z.water.receiveShadow=true;scene.add(Z.water);
  /* cuves, barques, bâches, ballots */
  for(let i=0;i<8;i++){const T=trees[i*9+3],u=T.u+3.5,v=T.v+(T.v>0?-4:4),p=Z.w(u,v);vats.add(p[0],-.9,p[1],1,1,1,rnd());dye.add(p[0],-.9,p[1],1,1,1,0,0,0,{k:i%3});sCyl(Z,p[0],p[1],2.6,-4,.9)}
  for(let i=0;i<13;i++){const u=-80+i*13+rr(-3,3),v=rr(-4,4),p=Z.w(u,v);boats.add(p[0],0,p[1],rr(.8,1.2),1,1,-Z.ax+rr(-.3,.3),0,0,{thr:[-9,-9,-9,-2,-1,0,1,2,3,4,5,6,6.5][(i*5)%13]})}
  for(let i=0;i<14;i++){const T=trees[i*8+5],p=Z.w(T.u+3,T.v+2);tarps.add(p[0],-.6,p[1],rr(.8,1.3),1,rr(.8,1.3),rnd()*6);for(let j=0;j<2;j++)bales.add(p[0]+rr(-2,2),-.5,p[1]+rr(-2,2),1,1,1,rnd()*6)}
  /* quais de cèdre, comptoir sur pilotis, mâts et ruche */
  const qg=[];
  for(const sv of[-11,11]){for(let i=0;i<16;i++){const u=-75+i*10,p=Z.w(u,sv*(Math.abs(u)<25?1:1.25)),p2=Z.w(u+10,sv*(Math.abs(u+10)<25?1:1.25)),mx=(p[0]+p2[0])/2,mz=(p[1]+p2[1])/2,rot=Math.atan2(p2[1]-p[1],p2[0]-p[0]);
      qg.push([box(10.6,.3,3,mx,2.45,mz,-rot),0x9a6a44]);qg.push([cyl(.2,.2,4.4,5,p[0],.4,p[1]),0x5a3a28]);(Z.qs=Z.qs||[]).push(sBox(Z,mx,mz,5.4,1.5,rot,2,2.6))}
    const a=Z.w(-86,sv*1.25),b=Z.w(-75,sv*1.25);(Z.qs).push(...stairs(Z,a[0],a[1],-.6,b[0],b[1],2.6,3,qg,0x9a6a44))}
  Z.quay=mesh(merge(qg),M(0xffffff,{vertexColors:true}));
  const cu=71,cv=-23,cw=Z.w(cu,cv);Z.fl=[];Z.cf=[];
  for(let f=0;f<3;f++){const y=3+f*4.2,hs=7-f*.8,cg=[],cgw=[];const fb=sBox(Z,cw[0],cw[1],hs,hs-1,Z.ax,y-.6,y);fb.f=f;Z.fl.push(fb);
    cg.push([box(hs*2,.4,hs*2-2,cu,y-.2,cv),0xa87048]);
    for(const sx of[-1,1])for(const sz of[-1,1])cg.push([cyl(.22,.22,4.6,5,cu+sx*(hs-.5),y-2.5,cv+sz*(hs-1.5)),0x5a3a28]);
    cg.push([new THREE.ConeGeometry(1.6,2.4,4).rotateY(PI/4).translate(cu+hs-1.6,y+1.2,cv-hs+2.6),[0x7a1f8a,0xf0a81e,0x2a3a9a][f]]);
    let st;if(f===0){const a=Z.w(cu-hs-6.5,cv+3.6),b2=Z.w(cu-hs+.3,cv+3.6);st=stairs(Z,a[0],a[1],-.8,b2[0],b2[1],y,2.4,cgw,0xa87048)}
    else{const d=f%2?1:-1,a2=Z.w(cu+d*5,cv-1.5),b2=Z.w(cu-d*1.5,cv-1.5);st=stairs(Z,a2[0],a2[1],y-4.2,b2[0],b2[1],y,1.8,cgw,0xa87048)}
    st.forEach(q=>{q.f=f;Z.fl.push(q)});
    const m1=mesh(merge(cg),M(0xffffff,{vertexColors:true}));m1.position.set(Z.c[0],0,Z.c[1]);m1.rotation.y=-Z.ax;Z.cf.push([m1,mesh(merge(cgw),M(0xffffff,{vertexColors:true}))])}
  Z.ctop=[cw[0],3+2*4.2+1.4,cw[1]];
  const mg=[];for(const su of[-9,9])for(const sv of[-13,13])mg.push([cyl(.35,.5,27,6,su,12,sv),0x4a3424]);
  vis(Z,-9,13,2.3,-.8,17,0,1.1,mg,0x8a6040);mg.push([cyl(3.4,3.4,.4,10,-9,17-.2,13),0x8a6040]);{const p=Z.w(-9,13);sCyl(Z,p[0],p[1],3.4,16.4,17)}
  for(let i=0;i<7;i++){const s=(i+.5)/7,u=lerp(-6.4,-1.5,s),v=lerp(10,2.5,s),p=Z.w(u,v),y=17-s*1.6;mg.push([box(1.5,.2,2,u,y-.1,v,Math.atan2(7.5,4.9)),0x8a6040]);sBox(Z,p[0],p[1],1,1.2,Z.ax-Math.atan2(7.5,4.9),y-.5,y)}
  mg.push([cyl(6,6,.35,12,0,15.05,0),0x6a4a30]);{const p=Z.w(0,0);sCyl(Z,p[0],p[1],6,14.6,15.2);Z.under=[p[0],16.6,p[1]]}
  const mm=mesh(merge(mg),M(0xffffff,{vertexColors:true}));mm.position.set(Z.c[0],0,Z.c[1]);mm.rotation.y=-Z.ax;
  const hp=[[0,-5.2],[2.4,-4.2],[4.4,-1.6],[4.8,1],[3.6,3.6],[1.6,5],[0,5.5]].map(q=>new THREE.Vector2(q[0],q[1]));
  Z.hiveM=new THREE.MeshStandardMaterial({color:0x3a2418,emissive:0xff6a30,emissiveIntensity:0,roughness:.6,flatShading:true});
  Z.hive=new THREE.Mesh(new THREE.LatheGeometry(hp,12),Z.hiveM);Z.hive.position.set(Z.c[0],23.5,Z.c[1]);scene.add(Z.hive);
  const rl=[];for(const su of[-9,9])for(const sv of[-13,13]){const p=Z.w(su,sv);rl.push(p[0],25.5,p[1],Z.c[0],28.5,Z.c[1])}
  const rgeo=new THREE.BufferGeometry();rgeo.setAttribute('position',new THREE.Float32BufferAttribute(rl,3));scene.add(new THREE.LineSegments(rgeo,new THREE.LineBasicMaterial({color:0x6a5038})));
  Z.light=new THREE.PointLight(0xffa878,0,300,1.4);Z.light.position.set(Z.c[0],22,Z.c[1]);scene.add(Z.light);Z.glow=points(1,46);
  /* étoffes tendues de racine en racine */
  Z.cloth=[];const cu_={value:0};Z.ctime=cu_;
  for(let b=2;b<=7;b++){const pos=[],col=[];let made=0;
    for(let tr=0;tr<400&&made<13;tr++){const A_=trees[(rnd()*trees.length)|0],B_=trees[(rnd()*trees.length)|0],d=Math.hypot(A_.p[0]-B_.p[0],A_.p[1]-B_.p[1]);if(d<7||d>22)continue;made++;
      const c=cDye[(made+b)%3],y0=rr(4,6.5),drop=rr(2,3.4),sg=rr(.8,2),S=8;
      for(let j=0;j<S;j++){const s0=j/S,s1=(j+1)/S,f=s=>[lerp(A_.p[0],B_.p[0],s),y0-sg*4*s*(1-s),lerp(A_.p[1],B_.p[1],s)],a=f(s0),e=f(s1);
        pos.push(a[0],a[1],a[2],e[0],e[1],e[2],a[0],a[1]-drop,a[2],e[0],e[1],e[2],e[0],e[1]-drop,e[2],a[0],a[1]-drop,a[2]);for(let q=0;q<6;q++){const sh2=.75+.35*hash(j,q+made);col.push(c[0]*sh2,c[1]*sh2,c[2]*sh2)}}}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.computeVertexNormals();
    const m=new THREE.MeshStandardMaterial({vertexColors:true,side:THREE.DoubleSide,roughness:.8,transparent:true,opacity:0});
    m.onBeforeCompile=s=>{s.uniforms.uT=cu_;s.vertexShader='uniform float uT;\n'+s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.y+=sin(uT*1.4+position.x*.4+position.z*.3)*.16;transformed.x+=sin(uT*1.1+position.z*.5)*.1;')};
    const o=new THREE.Mesh(g,m);o.castShadow=true;o.frustumCulled=false;scene.add(o);Z.cloth.push({o,b})}
  for(const o of[canopy,vats,dye,boats,tarps,bales])o.make();
  Z.luc=points(NL,.8);for(let i=0;i<NL;i++){const u=rr(-90,90),v=rr(-1,1)*hw(u)*.9,p=Z.w(u,v);luc.push([p[0],p[1],rr(1.5,8),rnd()*20,Z.inside(u,v,2)?1:0])}
  secret(Z,Z.under,'Le contrat peint au minium','Sous la ruche de la reine, là où pendaient les nasses. La ruche éclaire le chenal, l\'Exarchat nourrit les larves.');
  secret(Z,Z.ctop,'Quatre langues de comptoir','Au troisième étage du comptoir sur pilotis. Il ne s\'élève que lorsque l\'aurore tient.',lv=>lv>=6.4);
  {const T=tarps.a[4];secret(Z,[T.x,.9,T.z],'Larve-de-Cuve','Sous une bâche goudronnée, un ballot qui luit. On ne le voit que dans la nuit close.',lv=>lv<=-4)}
};
Z.update=lv=>{const n=wneg(lv),p=wpos(lv),w=wy(lv);
  cRoot(lv,tc);Z.roots.material.color.setRGB(tc[0],tc[1],tc[2]);canopy.set(null,(o,i,c)=>{cCan(lv,c);const s=.75+.5*o.r;c[0]*=s;c[1]*=s;c[2]*=s});
  Z.water.position.y=w;cWat(lv,tc);Z.water.material.color.setRGB(tc[0],tc[1],tc[2]);Z.water.material.roughness=nramp(.4,.42,.5,.4,.34)(lv);
  boats.a.forEach(o=>{o.y=w+.1});boats.set(o=>lv>=o.e.thr-.5?1:0);
  dye.m.material.color.setRGB(...mix3(tc,[.1,.04,.09],lv<0?[.1,1.5,1.1]:[.5,.06,.55],lv<0?n:p));
  tarps.set(()=>sst(-1.5,-4.5,lv));bales.set(()=>sst(-2,-5,lv));bales.m.material.emissiveIntensity=n*n*1.6;
  Z.quay.visible=lv>1.2;Z.quay.scale.y=1;for(const s of Z.qs)s.on=lv>1.2;
  const f=lv>=6.4?3:lv>=4.8?2:lv>=2.8?1:0;Z.cf.forEach((m,i)=>{m[0].visible=m[1].visible=i<f});for(const s of Z.fl)s.on=s.f<f;
  for(const c of Z.cloth){const k=sst(c.b-1,c.b-.2,lv);c.o.visible=k>0;c.o.material.opacity=k;c.o.material.depthWrite=k>.9}
  Z.hk=nramp(0,0,.25,.9,1.5)(lv);Z.lk=nramp(0,0,.35,1.1,1.7)(lv)};
Z.tick=(t)=>{const lv=Z.lv,n=wneg(lv),p=wpos(lv),L_=Z.luc,w=wy(lv);Z.ctime.value=t;Z.nm.offset.set(t*.004,t*.0025);
  let fl=0;if(lv<-2&&lv>-6.5){const ph=(t*.21)%1;fl=ph<.035?1:0}
  Z.hiveM.emissiveIntensity=Z.hk+fl*4;Z.light.intensity=Z.lk+fl*2.5;const gb=(Z.hk*.22+fl*1.2)*fogK(Z.c[0],23,Z.c[1]);Z.glow.P[0]=Z.c[0];Z.glow.P[1]=23.5;Z.glow.P[2]=Z.c[1];Z.glow.C[0]=1.6*gb;Z.glow.C[1]=.75*gb;Z.glow.C[2]=.4*gb;Z.glow.up();
  const cnt=lv<0?NL*n:40+(NL-40)*p,fk=fogK(Z.c[0],4,Z.c[1]);
  for(let i=0;i<NL;i++){const s=luc[i];if(i>=cnt||!s[4]){L_.P[i*3+1]=-999;continue}
    const tw=(.6+.4*Math.sin(t*(1+s[3]*.2)+s[3]*9))*fk;
    if(lv<0){L_.P[i*3]=s[0];L_.P[i*3+1]=w+.25;L_.P[i*3+2]=s[1];L_.C[i*3]=.3*tw*n*2;L_.C[i*3+1]=2.4*tw*n*2;L_.C[i*3+2]=1.8*tw*n*2}
    else{L_.P[i*3]=s[0]+Math.sin(t*.5+s[3])*3.5;L_.P[i*3+1]=s[2]+Math.sin(t*.8+s[3]*2)*1.2;L_.P[i*3+2]=s[1]+Math.cos(t*.4+s[3]*1.7)*3.5;const b=tw*(1+2.5*p);L_.C[i*3]=2.6*b;L_.C[i*3+1]=lerp(2.2,1.2,p)*b;L_.C[i*3+2]=lerp(.5,.7,p)*b}}
  L_.up()};
})();

/* ================= LA FOIRE DE GIVRECLOCHE ================= */
(()=>{const Z=MAR;
Z.info={nom:'La Foire de Givrecloche',sur:'Marché · Losange · Glacier · Inspiration gothique',pm:'Brume',pp:'Clarté',conteur:'Conteur C, le Maître du jeu sournois',
  recit:'Sous le clocher qui dépasse du glacier, la foire n\'a qu\'une banque : le Chapitre, douze chanoines-croupiers en chasuble. Ils ne mentent jamais. Leurs règles sont justes, sauf une, qui est seulement vraie : la Maison prend le treizième lot. Quand la brume monte des crevasses, les lots arrivent enfermés dans des blocs de glace dépolie, et vous misez sans voir. Sur le parvis, un orgue de barbarie tire ses airs des cartons qui numérotent les lots. Et le treizième carton n\'a aucun trou.',
  pal:['Une brume laiteuse monte au-dessus des têtes. Lots scellés dans la glace dépolie, posés sur deux feutres presque du même vert. Grimpez au clocher : il dépasse.','Brume jusqu\'à la taille, lanternes de corne sur des étals de bois brun, neige mouillée.','Glacier bleu, cathédrale prise dans la glace jusqu\'aux arcs-boutants, étals de bois sombre.','Ciel dégagé, soleil bas et franc. Les lots sortent de leurs blocs, les règles sont redessinées à la craie.','Midi de glacier sous un ciel bleu dur. Terrasses de glace sablée, feutre blanc, un seul carré vert par table. La cathédrale est dégagée jusqu\'à la nef.']};
Z.atm=atmo({top:['#e4e6e2','#b8c0c4','#5886b8','#2f6fd0','#0a44b4'],hor:['#eceee9','#d0d4d2','#c4d8e8','#b8dcf8','#84baf4'],sun:['#ffffff','#f0f0ee','#eaf2ff','#ffffff','#ffffff'],
  hs:['#f0f0ee','#d8dcdc','#b0d0f0','#a8ccf8','#9cc4ff'],hg:['#c0c8c4','#a0a8a8','#7090b0','#a0b8d8','#dfeaff'],clc:['#f4f4f0','#e0e2e0','#ffffff','#ffffff','#ffffff'],wc:['#ffffff','#f4f6f8','#ffffff','#ffffff','#ffffff'],
  sunI:[.5,.7,1.25,1.5,1.7],hI:[1.15,1,.8,.8,.75],fog:[.04,.017,.005,.0022,.0006],el:[40,30,35,25,68],cl:[1,1,.55,.15,0],wn:[.5,.75,.3,.03,.1],wv:[.5,7,2.5,1,.2],wd:[4,1.5,2,1,2],ws:[.7,.26,.26,.2,.1],wI:[.9,1,1,1,3],
  exp:[1,1,1,.92,.82],bl:[.6,.9,.6,.5,.5],fh:[15,9,0,0,0],az:MAR.ax/D2R+150});
Z.h=(u,v,lv,n1,n2,n3)=>{const n=wneg(lv),t=wpos(lv),r=Math.hypot(u,v);let h=2+n1*8+(n2-.5)*1.3;
  h-=sst(.085+.05*n,0,n3)*(3+8*n)*(1-t);const q=h/1.7,qf=q-Math.floor(q);h=lerp(h,1.7*(Math.floor(q)+sst(.36,.64,qf)),t);return lerp(h,1.2,sst(36,26,r))};
const cIce=ramp('#e2e6e0','#c8d0d2','#8cc0e2','#bcdcf2','#dcdcd6'),cSnow=ramp('#eceee8','#dfe2e2','#f2f6fa','#eceef0','#e6e6e0'),cCrev=ramp('#9aa8a8','#5a7a90','#1a4a80','#2a6ab8','#3a8ae0');
Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{cIce(lv,o);cSnow(lv,tc2);mix3(o,o,tc2,sst(.4,.62,n2));const t=wpos(lv);
  const cr=sst(.1,.02,n3)*(1-t);if(cr>0){cCrev(lv,tc2);mix3(o,o,tc2,cr)}
  if(t>0&&Math.hypot(u,v)>30){const q=(2+n1*8+(n2-.5)*1.3)/1.7,f=Math.abs(q-Math.floor(q)-.5);if(f<.16){cCrev(lv,tc2);mix3(o,o,tc2,t*sst(.16,.08,f))}}return 0};
const cStone=ramp('#d8dcd8','#b0b8bc','#8a94a0','#b8bcc0','#e8e4dc');
const stall=inst(merge([[box(3.2,1,1.7,0,.5,0),0x3a2a20],[box(3.8,.25,2.6,0,2.9,0,0,.15),0x5a3a2a],[cyl(.1,.1,2.8,4,-1.6,1.4,-1),0x2a2018],[cyl(.1,.1,2.8,4,1.6,1.4,-1),0x2a2018]]),M(0xffffff,{vertexColors:true})),
  ice=inst(new THREE.BoxGeometry(2.2,2.2,2.2).translate(0,1.1,0),M(0xeef2f0,{roughness:.35})),felt=inst(new THREE.BoxGeometry(5,.16,5),M(0xffffff)),
  sq=inst(new THREE.BoxGeometry(1.1,.1,1.1),M(0x2f7a4a)),hous=inst(new THREE.IcosahedronGeometry(2.3,1),M(0xffffff,{transparent:true,opacity:.7,roughness:1}),false),
  chalk=inst(new THREE.BoxGeometry(1,.06,.16),new THREE.MeshBasicMaterial({color:0xffffff}),false);
const fG=LIN('#2f7a4a'),fM=LIN('#3d8256'),fW=LIN('#f4f4f0');
Z.build=()=>{const P=[],W=[],bs=[];Z.cs_=bs;
  const S=(g,hx,hz,u,v,oy0,oy1,rot)=>{const p=Z.w(u,v),s=sBox(Z,p[0],p[1],hx,hz,Z.ax+(rot||0),0,0);s.oy0=oy0;s.oy1=oy1;bs.push(s)};
  P.push([box(44,16,12,0,8,0)]);P.push([new THREE.CylinderGeometry(6.93,6.93,44,3,1,false,PI/2).rotateZ(PI/2).translate(0,19.4,0)]);S(0,20,6,2,0,-30,24);
  for(const s of[-1,1]){P.push([box(40,8,5,0,4,s*8.5)]);S(0,20,2.5,0,s*8.5,-30,8);
    for(let i=0;i<6;i++){const x=-17+i*6.8;P.push([box(1.4,13,1.6,x,6.5,s*13)]);P.push([new THREE.ConeGeometry(1.1,4.4,4).rotateY(PI/4).translate(x,15.2,s*13)]);P.push([box(1,1,8.2,x,13.6,s*9.4,0,s*.52)]);S(0,.7,.8,x,s*13,-30,13);
      W.push([box(1.7,7,.3,x+3.4,11.5,s*6.06)]);W.push([box(1.5,4.4,.3,x+3.4,4,s*11.06)])}}
  P.push([box(9,40,9,-26.5,20,0)]);P.push([new THREE.ConeGeometry(6.3,22,4).rotateY(PI/4).translate(-26.5,51,0)]);S(0,4.5,4.5,-26.5,0,-30,40);{const p=Z.w(-26.5,0),s=sCyl(Z,p[0],p[1],2.6,0,0);s.oy0=40;s.oy1=62;bs.push(s)}
  for(const a of[-1,1])for(const b of[-1,1]){P.push([new THREE.ConeGeometry(1,6,4).rotateY(PI/4).translate(-26.5+a*4,43,b*4)]);W.push([box(.3,6,2.4,-26.5+a*4.56,33,0)]);W.push([box(2.4,6,.3,-26.5,33,b*4.56)])}
  W.push([new THREE.CylinderGeometry(2.8,2.8,.3,16).rotateZ(PI/2).translate(-31.06,23,0)]);W.push([box(.3,7,3.4,-31.06,3.5,0)]);
  P.push([cyl(6,6,16,10,22,8,0)]);P.push([new THREE.ConeGeometry(6.6,7,10).translate(22,19.5,0)]);{const p=Z.w(22,0),s=sCyl(Z,p[0],p[1],6,0,0);s.oy0=-30;s.oy1=22;bs.push(s)}
  /* échafaudage en vis autour du clocher, et volée vers le toit du bas-côté */
  const sg=[];vis(Z,-26.5,0,7.1,0,40,PI,1.25,sg,0x6a5040).forEach(s=>bs.push(s));
  for(let i=0;i<16;i++){const u=20.3+(16-i)*.62,y=(i+1)*.5,p=Z.w(u,8.5),s=sBox(Z,p[0],p[1],.45,1.6,Z.ax,0,0);s.oy0=y-.6;s.oy1=y;bs.push(s);sg.push([box(.7,.3,3.2,u,y-.15,8.5),0x6a5040])}
  const G=Z.G=new THREE.Group();G.position.set(Z.c[0],0,Z.c[1]);G.rotation.y=-Z.ax;scene.add(G);
  Z.stone=M(0xffffff);const add=(g,m)=>{const o=new THREE.Mesh(g,m);o.castShadow=o.receiveShadow=true;G.add(o)};
  add(merge(P),Z.stone);add(merge(W),M(0x1a2438,{roughness:.3}));add(merge(sg),M(0xffffff,{vertexColors:true}));
  /* orgue de barbarie sur le parvis */
  const og=[[box(2.2,1.6,1.2,0,1.3,0),0x7a4a2a],[box(2.5,.25,1.5,0,2.2,0),0xb8862e],[new THREE.CylinderGeometry(.55,.55,.12,10).rotateZ(PI/2).translate(1.2,1.3,0),0xb8862e]];
  for(let i=0;i<7;i++)og.push([cyl(.09,.09,1+i*.16,6,-.9+i*.3,2.8+i*.08,0),0xd8b040]);for(const a of[-1,1])og.push([new THREE.CylinderGeometry(.5,.5,.12,10).rotateZ(PI/2).translate(a*.9,.5,.7),0x3a2a20]);
  Z.organ=mesh(merge(og),M(0xffffff,{vertexColors:true,metalness:.3,roughness:.5}));const op=Z.w(-39,7);Z.organ.position.set(op[0],0,op[1]);Z.organ.rotation.y=-Z.ax+.6;Z.op=[-39,7];
  /* étals */
  let n=0;for(let i=0;i<400&&n<24;i++){const u=rr(-62,58),v=rr(-46,46);if(Math.abs(v)<19&&u>-36&&u<32)continue;if(!Z.inside(u,v,9))continue;let ok=true;for(const o of stall.a)if(Math.hypot(o.e.u-u,o.e.v-v)<9)ok=false;if(!ok)continue;
    const p=Z.w(u,v),ry=rnd()*6,e={u,v,fake:n%4===3};n++;stall.add(p[0],0,p[1],1,1,1,ry,0,0,e);ice.add(p[0],0,p[1],rr(.8,1.2),rr(.7,1.1),rr(.8,1.2),ry,0,0,e);felt.add(p[0],0,p[1],1,1,1,ry,0,0,e);
    sq.add(p[0]+Math.cos(ry)*1.2,0,p[1]-Math.sin(ry)*1.2,1,1,1,ry,0,0,e);hous.add(p[0],0,p[1],rr(.9,1.2),rr(.7,.9),rr(.9,1.2),0,0,0,e);
    for(let k=0;k<4;k++){const a=ry+k*PI/2,cx=Math.cos(a)*3.6,cz=-Math.sin(a)*3.6;chalk.add(p[0]+cx,0,p[1]+cz,7.2,1,1,a+PI/2,0,0,{u:u,v:v,ox:cx,oz:cz})}}
  for(const o of[stall,ice,felt,sq,hous,chalk])o.make();
  Z.lant=points(24,2.4);
  /* une crevasse pour cacher quelque chose */
  let best=9,bu=0,bv=0;for(let i=0;i<900;i++){const u=rr(-60,60),v=rr(-44,44);if(!Z.inside(u,v,20)||Math.hypot(u,v)<40)continue;const p=Z.w(u,v),q=N3(p[0],p[1]);if(q<best){best=q;bu=u;bv=v}}
  secret(Z,()=>{const p=Z.w(-26.5-3.4,0);return[p[0],Z.base+41.4,p[1]]},'La cloche misée','Au sommet du clocher. L\'abbesse l\'a perdue un soir de brelan. Par temps de brume, on monte ici pour revoir le soleil.');
  secret(Z,()=>{const p=Z.w(bu,bv);return[p[0],Z.gh(bu,bv)+1.2,p[1]]},'Lot scellé numéro treize','Au fond d\'une crevasse, sous un feutre vert de mousse givrée. La brume ouvre la glace, la clarté la referme.',lv=>lv<=-3);
  secret(Z,()=>{const p=Z.w(6,8.5);return[p[0],Z.base+9.4,p[1]]},'Le treizième carton','Sur le toit du bas-côté, derrière un pinacle. Il n\'a aucun trou. Il faut que la cathédrale soit sortie de la glace.',lv=>lv>=5);
};
const sink=nramp(-24,-18,-13,-6,0);
Z.update=lv=>{const n=wneg(lv),p=wpos(lv);Z.base=Z.gh(0,0,lv)+sink(lv)-.2;Z.G.position.y=Z.base;for(const s of Z.cs_){s.y0=Z.base+s.oy0;s.y1=Z.base+s.oy1}
  cStone(lv,tc);Z.stone.color.setRGB(tc[0],tc[1],tc[2]);Z.organ.position.y=Z.gh(Z.op[0],Z.op[1],lv);
  const gy=o=>Z.gh(o.e.u,o.e.v,lv);
  for(const q of[stall,ice,felt,sq,hous])q.a.forEach(o=>{o.y=gy(o)});felt.a.forEach(o=>{o.y+=.08+p*.9});sq.a.forEach(o=>{o.y+=1.1});hous.a.forEach(o=>{o.y+=1.2});
  stall.set(o=>o.e.fake?0:sst(-5.5,-3.5,lv)*sst(5.5,3.5,lv));ice.set(o=>o.e.fake?0:sst(-1,-4.5,lv));
  felt.set(o=>[sst(.5,-2,lv)+p*.75,1+p*2,sst(.5,-2,lv)+p*.55],(o,i,c)=>mix3(c,o.e.fake?fM:fG,fW,sst(0,3,lv)));
  sq.set(o=>o.e.fake?0:sst(3,6,lv));hous.set(o=>o.e.fake?0:sst(-4,-7,lv));hous.m.visible=lv<-4;
  chalk.a.forEach(o=>{const w=Z.w(o.e.u,o.e.v);o.y=groundZ(Z,w[0]+o.e.ox,w[1]+o.e.oz,lv)+.12});chalk.set(()=>[1,1,sst(2,5,lv)]);chalk.m.visible=lv>2;
  Z.lk=sst(-.5,-3,lv)*sst(-7.5,-5,lv)*.7+sst(-.5,-3,lv)*.3};
Z.tick=(t)=>{const Lm=Z.lant;Lm.visible=Z.lk>.02;if(Lm.visible){for(let i=0;i<stall.a.length;i++){const o=stall.a[i],b=Z.lk*(1.4+.3*Math.sin(t*4+i*3))*fogK(o.x,o.y,o.z);Lm.P[i*3]=o.x;Lm.P[i*3+1]=o.y+3.4;Lm.P[i*3+2]=o.z;Lm.C[i*3]=2.6*b;Lm.C[i*3+1]=1.8*b;Lm.C[i*3+2]=.7*b}Lm.up()}};
})();
