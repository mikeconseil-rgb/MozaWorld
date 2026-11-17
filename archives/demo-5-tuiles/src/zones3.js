/* Retouches après le premier jugement : routes multiples, intérieurs et dessous, secrets à indices, niveaux médians. */
function ext(Z,o){for(const k of['build','update','tick']){if(!o[k])continue;const f=Z[k];Z[k]=function(a,b){f.call(Z,a,b);o[k](a,b)}}}
/* Rampe praticable entre deux points (coordonnées monde) */
function ramp3(Z,ax,ay,az,bx,by,bz,w,geo,hex){const len=Math.hypot(bx-ax,bz-az),rot=Math.atan2(bz-az,bx-ax),n=Math.max(1,Math.ceil(len/4)),k=(by-ay)/len,out=[];
  for(let i=0;i<n;i++){const t=(i+.5)/n,mx=lerp(ax,bx,t),mz=lerp(az,bz,t),my=lerp(ay,by,t),s=sBox(Z,mx,mz,len/n/2+.2,w/2,rot,my-.5,my);s.k=k;s.oy0=my-.5;s.oy1=my;out.push(s);
    if(geo)geo.push([box(len/n+.3,.2,w,mx,my-.1,mz,-rot,0,Math.atan(k)),hex])}return out}
/* Pistes lumineuses : des points qui n'apparaissent qu'à certains niveaux et mènent quelque part */
const TR=[],trailPts=points(700,1.25);
function trail(Z,pts,col,cond){TR.push({Z,pts,col,cond})}
function tickTrails(t){let k=0;const P=trailPts.P,C=trailPts.C;
  for(const T of TR){if(!T.cond(T.Z.lv))continue;for(const p of T.pts){if(k>=700)break;const q=typeof p==='function'?p():p,b=(.7+.3*Math.sin(t*3+k*1.7))*fogK(q[0],q[1],q[2]);
      P[k*3]=q[0];P[k*3+1]=q[1];P[k*3+2]=q[2];C[k*3]=T.col[0]*b;C[k*3+1]=T.col[1]*b;C[k*3+2]=T.col[2]*b;k++}}
  for(;k<700;k++)P[k*3+1]=-999;trailPts.up()}
const UB=new THREE.BoxGeometry(1,1,1).translate(0,.5,0);

/* ---------- Berestograd : isbas et route des toits, brèche et cave, congère, tour reconstruite ---------- */
(()=>{const Z=CIT,h0=Z.h,BR=[29.4,-40.5],DA=198*D2R;
Z.h=(u,v,lv,n1,n2,n3,x,z)=>{let h=h0(u,v,lv,n1,n2,n3,x,z);
  if(lv<-3.5){const d=Math.hypot(x-BR[0],z-BR[1]);if(d<7)h-=4.6*sst(-3.5,-5.5,lv)*sst(7,3,d)}
  if(lv<-2.5){const r=Math.hypot(x,z);if(r>58.6&&r<76){const da=Math.atan2(Math.sin(Math.atan2(z,x)-DA),Math.cos(Math.atan2(z,x)-DA));if(Math.abs(da)<.2)h+=8.8*sst(-2.5,-5.5,lv)*sst(76,63,r)*sst(.2,.1,Math.abs(da))}}
  return h};
const cab=inst(UB,M(0xffffff)),slab=inst(UB,M(0xffffff)),cRf=ramp('#e6dccb','#d8d2c8','#3a2a20','#8a5a34','#b8482a');
ext(Z,{build(){const GY=groundZ(Z,0,0,0),geo=[],am=170*D2R,dx=Math.cos(am),dz=Math.sin(am);
  const R=[[50,9.3],[41,10.9],[32.5,12.5],[24,14.1],[15.5,15.6]];
  R.forEach((q,i)=>{const x=dx*q[0],z=dz*q[0];cab.add(x,GY-.6,z,6,q[1]-GY+.3,6,-am,0,0,{i});slab.add(x,q[1]-.3,z,6.8,.3,6.8,-am,0,0,{i});sBox(Z,x,z,3,3,am,-6,q[1]);
    if(i)ramp3(Z,dx*(R[i-1][0]-2.8),R[i-1][1],dz*(R[i-1][0]-2.8),dx*(q[0]+2.8),q[1],dz*(q[0]+2.8),1.8,geo,0x7a5a36)});
  stairs(Z,dx*54.9,dz*54.9,7.75,dx*53.1,dz*53.1,9.3,2.4,geo,0x7a5a36);
  ramp3(Z,dx*12.7,15.6,dz*12.7,dx*6.6,GY+13.7,dz*6.6,1.8,geo,0x7a5a36);
  [[20,40,3.7],[75,44,4.3],[250,40,3.9],[300,45,4.6],[340,38,3.6],[100,46,4.2]].forEach((q,i)=>{const a=q[0]*D2R,x=Math.cos(a)*q[1],z=Math.sin(a)*q[1],top=GY+q[2];
    cab.add(x,GY-.6,z,5.4,q[2]+.3,5.4,-a,0,0,{i:i+5});slab.add(x,top-.3,z,6,.3,6,-a,0,0,{i:i+5});sBox(Z,x,z,2.7,2.7,a,-6,top);
    const cx=x+Math.cos(a+1.3)*3.9,cz=z+Math.sin(a+1.3)*3.9;geo.push([box(1.9,1.9,1.9,cx,GY+.9,cz,-a),0x5a4028]);sBox(Z,cx,cz,.95,.95,a,-6,GY+1.85);
    if(i===2)Z.midRoof=[x,top+1.3,z]});
  /* tour reconstruite : marches et balcon, seulement quand la mémoire revient */
  Z.tw=[];const tg=[];for(let i=0;i<9;i++){const a=(205-i*13)*D2R,x=62.6+Math.cos(a)*4.1,z=Math.sin(a)*4.1,y=8.2+i*.47;Z.tw.push(sBox(Z,x,z,.9,1.1,a+PI/2,y-.5,y));tg.push([box(1.7,.3,2.2,x,y-.15,z,-(a+PI/2)),0xd9401e])}
  Z.tw.push(sCyl(Z,62.6,0,5,11.6,12.2));tg.push([cyl(5,5,.4,10,62.6,12,0),0xe0a82e]);Z.twM=mesh(merge(tg),M(0xffffff,{vertexColors:true}));
  mesh(merge(geo),M(0xffffff,{vertexColors:true}));cab.make();slab.make();
  Z.breach=solids.find(s=>s.Z===Z&&!s.t&&s.y1===9.4&&Math.hypot(s.x-33.5,s.z+46.2)<4);
  secret(Z,()=>[BR[0],groundZ(Z,BR[0],BR[1])+1.3,BR[1]],'La cave sous la palissade','Là où les rondins se sont effacés, la terre s\'est ouverte. On n\'entre par la brèche que lorsque la ville oublie ses murs.',lv=>lv<=-5);
  secret(Z,[67,13.5,0],'La généalogie d\'origine','Sur le balcon d\'une tour que la mémoire a rebâtie. Les noms y sont dans le bon ordre.',lv=>lv>=4);
  const a9=234*D2R;secret(Z,[Math.cos(a9)*55,9.1,Math.sin(a9)*55],'La niche aux lettres','Les écorces cousues le long du rempart forment une phrase. Elle s\'arrête ici.',lv=>lv>=6);
  secret(Z,Z.midRoof,'Une lettre dans la boue','Sur le toit d\'une isba, une écorce blanche que personne n\'a encore ni grattée ni recopiée.',lv=>Math.abs(lv)<=1);
  const t1=[];for(let i=0;i<=20;i++){const s=i/20,x=lerp(0,-96,s)+Math.sin(s*9)*5,z=lerp(-64,-58,s)-Math.sin(s*PI)*22;if(inPoly(Z.poly,x,z))t1.push([x,groundZ(Z,x,z,-7)+.5,z])}
  trail(Z,t1,[1.5,1.4,1.1],lv=>lv<=-4);
  trail(Z,[2,3.5,5,6.5,8].map(y=>[-96,groundZ(Z,-96,-58,6)+y,-58]),[2.6,1.5,.4],lv=>lv>=5);
  trail(Z,[[33.2,6.4,-45.8]],[.4,2.6,1.4],lv=>lv>=5);
  const t2=[];for(let i=0;i<=14;i++){const a=lerp(166,232,i/14)*D2R,r=(57.06-1)/Math.cos(((lerp(166,232,i/14)-162+18)%36-18)*D2R);t2.push([Math.cos(a)*r,9.3+Math.sin(i)*.4,Math.sin(a)*r])}
  trail(Z,t2,[2.6,1.6,.5],lv=>lv>=6)},
 update(lv){const p=wpos(lv);cab.set(null,(o,i,c)=>{Z.cLog(lv,c);if(p>0)mix3(c,c,Z.P7[o.e.i%3],p*.6)});slab.set(null,(o,i,c)=>{cRf(lv,c);if(p>0)mix3(c,c,Z.P7[(o.e.i+1)%3],p*.5)});
  if(Z.breach){Z.breach.on=lv>-5;const L=Z.logs;if(lv<=-5){L.a.forEach((o,i)=>{if(o.e.side===1)put(L.m,i,o.x,-99,o.z,.01)});L.m.instanceMatrix.needsUpdate=true}}
  for(const s of Z.tw)s.on=lv>=4;Z.twM.visible=lv>=4},
 tick(t){tickTrails(t)}});
})();

/* ---------- Le Puits : escalier impérial, pagode de guet, dalle de jade, cangue flottante, lanternes ---------- */
(()=>{const Z=DON;
ext(Z,{build(){const geo=[],a=-1.2,ca=Math.cos(a),sa=Math.sin(a),p0=Z.w(ca*39.6,sa*39.6),p1=Z.w(ca*12,sa*12);
  Z.imp=stairs(Z,p0[0],p0[1],5.2,p1[0],p1[1],-18.8,3.6,geo,0xa8281a);
  for(const s of[-1,1]){const q=Z.w(ca*40.5-sa*s*2.4,sa*40.5+ca*s*2.4);geo.push([cyl(.4,.4,6,6,q[0],8,q[1]),0xa8281a])}{const q=Z.w(ca*40.5,sa*40.5);geo.push([box(6.4,.7,1,q[0],11.2,q[1],-(a+Z.ax+PI/2)),0x3a2a22])}
  Z.impM=mesh(merge(geo),M(0xffffff,{vertexColors:true}));
  /* pagode de guet */
  const pa=2*TAU/5+.3,pu=Math.cos(pa)*48,pv=Math.sin(pa)*48,pw=Z.w(pu,pv),py=Z.gh(pu,pv,0)-1,g2=[];
  vis(Z,pu,pv,4.9,py-4.6,py+13.4,2,1.1,g2,0x8a7868);sCyl(Z,pw[0],pw[1],5.6,py+12.9,py+13.45);g2.push([cyl(5.6,5.6,.3,8,pu,py+13.3,pv),0x8a7868]);
  const m2=mesh(merge(g2),M(0xffffff,{vertexColors:true}));m2.position.set(Z.c[0],0,Z.c[1]);m2.rotation.y=-Z.ax;
  secret(Z,[pw[0],py+15,pw[1]],'Panier de fleurs de soufre','Sur la pagode de guet. Les soufriers ne montent ici que lorsque le puits n\'appartient à personne.',lv=>Math.abs(lv)<=1.5);
  /* la seule dalle vraiment jade */
  const ju=Math.cos(4)*20.6,jv=Math.sin(4)*20.6,jw=Z.w(ju,jv);Z.jade=mesh(box(2.6,.3,2.6,jw[0],Z.gh(ju,jv,-7)+.2,jw[1],.4),new THREE.MeshStandardMaterial({color:0x4fd89a,emissive:0x2fd88a,emissiveIntensity:.9,roughness:.3}));
  secret(Z,[jw[0],Z.gh(ju,jv,-7)+1.6,jw[1]],'La dalle qui ne ment pas','Parmi toutes les dalles presque du même vert, une seule est vraiment de jade. Elle luit un peu plus que les autres.',lv=>lv<=-4);
  /* cangue ouverte qui flotte sur la lave */
  const fw=Z.w(Math.cos(1)*9.5,Math.sin(1)*9.5);Z.fw=fw;Z.raft=mesh(merge([[box(4.4,.35,.6,0,0,-1.9)],[box(4.4,.35,.6,0,0,1.9)],[box(.6,.35,4.4,-1.9,0,0)],[box(.6,.35,4.4,1.9,0,0)],[box(3.4,.2,3.4,0,-.1,0)]]),M(0x8a7460));
  Z.raftS=sCyl(Z,fw[0],fw[1],2.5,0,0);
  secret(Z,()=>[fw[0],Z.lavaY(Z.lv)+1.7,fw[1]],'La cangue qui flotte','Un évadé s\'en est servi de radeau sur le lac de lave. Elle n\'est là que lorsque le puits est libre.',lv=>lv>=5);
  const tl=[],tt=[];for(let k=0;k<9;k++)for(let j=0;j<4;j++){const r=41-3.9*k-1.3,an=k*.7+j*TAU/4,u=Math.cos(an)*r,v=Math.sin(an)*r,w=Z.w(u,v);tl.push([w[0],Z.gh(u,v,0)+2.1,w[1]])}
  for(let i=0;i<9;i++){const r=39.2-i*3.9,an=i*2.1+.5,u=Math.cos(an)*r,v=Math.sin(an)*r,w=Z.w(u,v);tt.push([w[0],Z.gh(u,v,0)+.6,w[1]])}
  trail(Z,tl,[2.4,1.5,.5],lv=>lv<=1.5);trail(Z,tt,[2.8,.6,.25],lv=>lv<=1.5)},
 update(lv){for(const s of Z.imp)s.on=lv<=.5;Z.impM.visible=lv<=.5;Z.jade.visible=lv<=-3;const y=Z.lavaY(lv)+.3;Z.raft.position.set(Z.fw[0],y,Z.fw[1]);Z.raft.visible=lv>=4.5;Z.raftS.y1=y+.2;Z.raftS.y0=y-.3;Z.raftS.on=lv>=4.5}});
})();

/* ---------- Les Chinampas : racines et roseaux, île de la danse, panier sous l'île, halo de la Grande Galle ---------- */
(()=>{const Z=RES;let rootsM,reedsM;
ext(Z,{build(){const I=Z.isl,rg=[],eg=[];
  for(let i=0;i<9;i++){const a=i*2.4,r=.2+.6*hash(i,3),l=1+2.2*hash(i,9);rg.push([cyl(.025,.012,l,4,Math.cos(a)*r,-.6-l/2,Math.sin(a)*r),0x8a7450])}
  for(let i=0;i<14;i++){const a=i*TAU/14;eg.push([box(.035,.14,.035,Math.cos(a)*.93,.07,Math.sin(a)*.93),0xc8b070])}
  rootsM=IM(merge(rg),M(0xffffff,{vertexColors:true}),I.length,false);reedsM=IM(merge(eg),M(0xffffff,{vertexColors:true}),I.length,false);
  Z.tmp.scale.setScalar(1.9);Z.gh_=points(1,38);
  secret(Z,()=>{const s=I[Z.iX];return[s.cx,s.cy+1.5,s.cz]},'La danse à rebours','Une île où l\'on n\'arrive que porté par une autre. Elle ne fait la navette que lorsque les ponts sont rompus.',lv=>lv<=-4);
  secret(Z,()=>{const s=I[Z.iV];return[s.cx,s.cy+1.4,s.cz]},'Le panier du cultivateur manquant','Suspendu sous l\'île du nord, là où personne ne le cherche. Il est encore plein.',lv=>Math.abs(lv)<=2);
  secret(Z,()=>{const s=I[Z.iC];return[s.cx,s.cy+1.4,s.cz]},'Le rang de plus','Sur l\'île-relais, entre le jardin du milieu et le temple. Un rang de maïs que personne n\'a semé, et une lanterne pour le retrouver.');
  secret(Z,()=>{const s=I[Z.iR];return[s.cx,s.cy+1.4,s.cz]},'La crypte de racines','Sous l\'île du temple, dans ses racines. On y descend par la passerelle qui plonge depuis l\'île-relais. Le cultivateur manquant y a laissé ses sandales.');
  const col=(i,dy,n)=>Array.from({length:n},(_,j)=>()=>{const s=I[i];return[s.cx,s.cy+dy+j*1.1,s.cz]});
  trail(Z,col(Z.iC,2.2,3),[2.6,1.7,.5],()=>true);trail(Z,col(Z.iR,1.2,2),[.6,2.6,1.2],()=>true);
  trail(Z,col(Z.iV,-3.4,3),[.7,1.6,2.8],lv=>Math.abs(lv)<=2);
  trail(Z,col(Z.iF,2.4,2).concat(col(Z.iX,2.6,3)),[2.8,.7,.4],lv=>lv<=-3);
  {const pt=[];for(let i=15;i<21;i++)pt.push(...col(i,1.6,1));pt.push(...col(8,2.5,4));trail(Z,pt,[2.6,2.3,.6],lv=>lv>=5)}},
 update(lv){Z.gk=sst(-3.5,-6.5,lv)},
 tick(t){const I=Z.isl;for(let i=0;i<I.length;i++){const s=I[i],R=s.r*s.sc,big=!(s.step||s.flat||s.ferry);put(rootsM,i,s.cx,s.cy-(big?s.r*.25:0),s.cz,R,big?s.r*.9*s.sc:.01,R,s.ph,0,s.rz);put(reedsM,i,s.cx,s.cy,s.cz,R,big||s.flat?7*s.sc:.01,R,s.ph,0,s.rz)}
  rootsM.instanceMatrix.needsUpdate=reedsM.instanceMatrix.needsUpdate=true;
  const G=Z.gh_,b=Z.gk*fogK(Z.pyr[0],Z.pyr[1]+5,Z.pyr[2])*(.8+.2*Math.sin(t*1.7));G.P[0]=Z.pyr[0];G.P[1]=Z.pyr[1]+5;G.P[2]=Z.pyr[2];G.C[0]=1.5*b;G.C[1]=1.5*b;G.C[2]=.8*b;G.up()}});
})();

/* ---------- L'Exarchat : route de la canopée, échelle des contrebandiers, nasse immergée, piste de larves ---------- */
(()=>{const Z=ANT,h0=Z.h,PIT=[58,-5];
Z.h=(u,v,lv,n1,n2,n3,x,z)=>{const d=Math.hypot(u-PIT[0],v-PIT[1]);return h0(u,v,lv,n1,n2,n3,x,z)-(d<6?2.4*sst(6,2.5,d):0)};
ext(Z,{build(){const geo=[],W=(u,v)=>Z.w(u,v),C=[[56,16,6],[46,20,7],[36,17,8],[27,19,9],[18,15,10],[9,15.5,11.5],[0,15.5,13]];
  {const a=W(66,16),b=W(58,16);stairs(Z,a[0],a[1],-.7,b[0],b[1],6,2.2,geo,0x8a6040)}
  C.forEach((q,i)=>{const p=W(q[0],q[1]);sCyl(Z,p[0],p[1],2.6,q[2]-.5,q[2]);geo.push([cyl(2.6,2.6,.3,9,p[0],q[2]-.15,p[1]),0x8a6040]);geo.push([cyl(.28,.4,q[2]+1.5,5,p[0],q[2]/2-.9,p[1]),0x4a3424]);
    const n=i<C.length-1?C[i+1]:[-9,13,17],p2=W(n[0],n[1]);ramp3(Z,p[0],q[2],p[1],p2[0],n[2],p2[1],1.7,geo,0xa87850)});
  mesh(merge(geo),M(0xffffff,{vertexColors:true}));
  {const p=W(27,19);secret(Z,[p[0],10.5,p[1]],'Le signal des passeurs','Sur une plateforme de la canopée. On n\'y lit les éclats de la ruche que dans le crépuscule prune.',lv=>lv<=-1&&lv>=-5)}
  /* route des contrebandiers */
  const g2=[];Z.smu=vis(Z,9,-13,2.3,-.8,15.2,PI,1.1,g2,0x2a2018);{const p=W(9,-13);Z.smu.push(sCyl(Z,p[0],p[1],3.2,14.7,15.2));g2.push([cyl(3.2,3.2,.3,8,9,15.05,-13),0x2a2018])}
  {const a=W(7.6,-10.6),b=W(3.4,-4.9),gw=[];Z.smu.push(...ramp3(Z,a[0],15.2,a[1],b[0],15.2,b[1],1.6,gw,0x2a2018));Z.smuW=mesh(merge(gw),M(0xffffff,{vertexColors:true}))}
  Z.smuM=mesh(merge(g2),M(0xffffff,{vertexColors:true}));Z.smuM.position.set(Z.c[0],0,Z.c[1]);Z.smuM.rotation.y=-Z.ax;
  {const p=W(10.6,-14.6);secret(Z,[p[0],16.6,p[1]],'Le baril de saumure','En haut de l\'échelle des contrebandiers. Elle n\'est accrochée au mât que dans la nuit.',lv=>lv<=-3)}
  /* nasse immergée */
  const pp=W(PIT[0],PIT[1]);mesh(merge([[new THREE.CylinderGeometry(3.3,3.5,2,12,1,true).translate(pp[0],-2.4,pp[1]),0x8a4a3a],[cyl(.7,.5,1,7,pp[0],-2.7,pp[1]),0xc8b070]]),M(0xffffff,{vertexColors:true,side:THREE.DoubleSide}));
  secret(Z,[pp[0],-1.9,pp[1]],'La nasse de Zoé','Dans une cuve noyée du chenal. Elle n\'affleure qu\'à marée basse, quand la mangrove n\'est ni nuit ni aurore.',lv=>Math.abs(lv)<=1);
  const sc=secrets.find(s=>s.titre==='Larve-de-Cuve').pos(),st=W(-84,13),tl=[];for(let i=1;i<=16;i++){const s=i/16;tl.push([lerp(st[0],sc[0],s)+Math.sin(s*7)*2.5,.25,lerp(st[1],sc[2],s)+Math.cos(s*5)*2.5])}
  trail(Z,tl,[.5,3.2,2.3],lv=>lv<=-4)},
 update(lv){const on=lv<=-3;for(const s of Z.smu)s.on=on;Z.smuM.visible=Z.smuW.visible=on}});
})();

/* ---------- Givrecloche : nef où l'on entre, arcs-boutants praticables, vitraux, foire à auvents ---------- */
(()=>{const Z=MAR;let awn,dais;const AW=[LIN('#b8282a'),LIN('#1e50c8'),LIN('#e0a020'),LIN('#1e9a5a')];
ext(Z,{build(){const bs=Z.cs_,G=Z.G,g=[],fl=[];
  for(const r of Z.rampDyn)for(const s of ramp3(Z,r[0][0],r[1],r[0][1],r[2][0],r[3],r[2][1],1.5))bs.push(s);
  /* escalier intérieur le long du mur nord, du dallage jusqu'au faîte */
  for(let i=0;i<50;i++){const u=13.5-i*.68,y=(i+1)*.5,p=Z.w(u,-4);const s=sBox(Z,p[0],p[1],.5,.85,Z.ax,0,0);s.oy0=y-.6;s.oy1=y;bs.push(s);g.push([box(.9,.3,1.7,u,y-.15,-4),0x6a5040])}
  g.push([box(1.8,1.2,3,15,.6,1.2)],[box(2.2,.15,3.4,15,1.28,1.2),0xb8282a]);
  [-13.6,-6.8,6.8,13.6].forEach((x,i)=>fl.push([box(2.4,.06,3,x,.12,2.6),[0xd81e3c,0x1e50d8,0xf0a81e,0x1ea85a][i]]));
  const m1=new THREE.Mesh(merge(g),M(0xffffff,{vertexColors:true}));m1.castShadow=true;G.add(m1);G.add(new THREE.Mesh(merge(fl),new THREE.MeshBasicMaterial({vertexColors:true})));
  secret(Z,()=>{const p=Z.w(15,1.2);return[p[0],Z.base+2.8,p[1]]},'Le brelan de l\'abbesse','Sur l\'autel, dans la nef. Par temps clair on entre par la baie brisée du mur sud ; dans la brume, on se laisse glisser entre la glace et le toit.');
  secret(Z,()=>{const p=Z.w(8,-5.5);return[p[0],Z.base+17.4,p[1]]},'La gargouille qui compte','Sur l\'égout du toit de la nef. On n\'y monte par les arcs-boutants que lorsque la glace arrive à leur pied.',lv=>Math.abs(lv)<=1.5);
  awn=inst(new THREE.ConeGeometry(2.9,1.3,4).rotateY(PI/4).translate(0,3.9,0),M(0xffffff),false);
  Z.stall.a.forEach((o,i)=>{if(!o.e.fake)awn.add(o.x,0,o.z,1,1,1,o.ry,0,0,o.e)});awn.make();awn.set(null,(o,i,c)=>{const q=AW[i%4];c[0]=q[0];c[1]=q[1];c[2]=q[2]});
  const op=Z.w(Z.op[0],Z.op[1]);dais=mesh(box(5.5,.7,4.5,op[0],0,op[1],-Z.ax+.6),M(0x5a4636))},
 update(lv){awn.a.forEach(o=>{o.y=Z.gh(o.e.u,o.e.v,lv)+wpos(lv)*.6});awn.set(()=>sst(-6.5,-4.5,lv));
  const oy=Z.gh(Z.op[0],Z.op[1],lv);dais.position.y=oy+.3;Z.organ.position.y=oy+.65;Z.glass.color.setScalar(nramp(2.4,1.7,1.1,1.1,1.3)(lv))}});
})();
