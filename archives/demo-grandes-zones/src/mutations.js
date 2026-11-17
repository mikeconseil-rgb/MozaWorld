/* ---------- Grandes zones et niveaux méconnaissables ----------
   Chaque tuile a doublé (arête 200 m). Le cœur écrit à la main garde sa taille ; autour, une ceinture
   dont le relief, la couleur et la population changent de nature à chaque palier, différemment pour chaque pôle.
   Règle visée : -7 et +7 d'une même zone ressemblent à moins de 15 %, chaque palier change l'image d'un cran visible. */
const easeL=lv=>clamp(Math.abs(lv)/7,0,1);
/* étalonnage d'image : saturation, contraste, teinte, exposition, de -7 à +7 */
function gradeFn(neg,pos){return(lv,o)=>{const q=lv<0?neg:pos,k=easeL(lv);
  o.s=lerp(1,q.s,k);o.c=lerp(1,q.c,k);o.k=q.k*k;o.e=lerp(1,q.e,k);const t=LIN(q.t);o.t[0]=t[0];o.t[1]=t[1];o.t[2]=t[2];return o}}
/* population de la ceinture : chaque objet a son seuil, donc chaque palier en ajoute (ou en retire) une part */
function family(Z,geo,mat,n,opt){const it=inst(geo,mat,opt.shadow!==false);it.opt=opt;it.n=n;Z.fams.push(it);return it}
function placeFam(Z,f){const o=f.opt,R=Z.R;let tries=0;
  while(f.a.length<f.n&&tries++<f.n*40){let u=rr(-R,R),v=rr(-R,R);if(o.grid){u=Math.round(u/o.grid)*o.grid;v=Math.round(v/o.grid)*o.grid}
    if(!Z.inside(u,v,8)||Z.bw(u,v)<.6)continue;
    if(o.where&&!o.where(u,v))continue;
    const s=rr(o.s[0],o.s[1]);f.add(0,0,0,s,s*rr(o.sy?o.sy[0]:1,o.sy?o.sy[1]:1),s,o.grid?Math.round(rnd()*4)*PI/2:rnd()*TAU,rr(-(o.tilt||0),o.tilt||0),rr(-(o.tilt||0),o.tilt||0),{u,v,th:rnd()})}
  f.make()}
function updFam(Z,f,lv){const o=f.opt,side=o.side;let w;
  if(side<0)w=wneg(lv);else if(side>0)w=wpos(lv);else w=1-easeL(lv)*1.6;
  f.a.forEach(q=>{const p=Z.w(q.e.u,q.e.v);q.x=p[0];q.z=p[1];q.y=Z.gh(q.e.u,q.e.v,lv)-(o.sink||0)});
  f.set(q=>{const th=side===0?q.e.th*.6:q.e.th*.9+.05;const k=side===0?sst(th,th+.25,w):sst(th,th+.12,w);return k<.02?.0001:k},
    (q,i,c)=>{o.col(lv,c,q.e.th);return c})}

function belt(Z,S){
  Z.fams=[];
  const core=Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return[q[0]/SC,q[1]/SC]});Z.core=core;
  Z.R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));
  Z.bw=(u,v)=>inPoly(core,u,v)?0:sst(4,44,dPoly(core,u,v));
  const h0=Z.h,c0=Z.col;
  Z.h=(u,v,lv,n1,n2,n3,x,z)=>{const h=h0(u,v,lv,n1,n2,n3,x,z),b=Z.bw(u,v);if(b<=0)return h;
    const p=Z.w(u,v),out=sst(0,46,dPoly(Z.poly,p[0],p[1]));
    return lerp(h,S.relief(h,u,v,lv,n1,n2,n3,p[0],p[1]),b*out)};
  Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{let g=c0(u,v,lv,h,n1,n2,n3,x,z,o);const b=Z.bw(u,v);if(b<=0)return g;
    const g2=S.paint(u,v,lv,h,n1,n2,n3,x,z,tc2),k=b*(.35+.6*easeL(lv));mix3(o,o,tc2,k);return lerp(g,g2,k)};
  Z.grade=gradeFn(S.gneg,S.gpos);
  ext(Z,{build(){for(const f of S.fams(Z))placeFam(Z,f)},update(lv){for(const f of Z.fams)updFam(Z,f,lv)}});
}
const terr=(h,step)=>step*Math.floor(h/step)+step*sst(.7,1,(h/step)%1);
const ridged=n3=>1-Math.abs(n3*2-1);

/* ===== Berestograd : Oubli (tout s'ensevelit sous une neige sans traces) / Mémoire (collines en gradins peints) ===== */
belt(CIT,{
  relief(h,u,v,lv,n1,n2,n3){const n=wneg(lv),p=wpos(lv);
    const snow=lerp(h,4+(n1-.5)*3,sst(0,.85,n));
    const hill=sst(.3,.78,n1)*34+(n2-.5)*4;return snow+p*terr(Math.max(0,hill),4.2)},
  paint(u,v,lv,h,n1,n2,n3,x,z,o){const n=wneg(lv),p=wpos(lv);
    if(lv<0){mix3(o,LIN('#3d4a33'),LIN('#ece8e0'),sst(0,.6,n));return 0}
    const st=(h%4.2+4.2)%4.2,riser=sst(2.6,3.6,st)*sst(4.2,3.7,st);mix3(o,LIN('#3d4a33'),LIN(n1>.5?'#8fae3e':'#c9a845'),sst(0,.7,p)*.7);
    if(h>2&&riser>0)mix3(o,o,LIN(hash(Math.floor(h/4.2),7)<.5?'#b8432a':'#1f7a52'),riser*p*.8);return 0},
  gneg:{s:.12,c:.72,k:.25,e:1.12,t:'#e8e2d6'},gpos:{s:1.55,c:1.18,k:.08,e:1.02,t:'#ffb070'},
  fams(Z){const mk=(g)=>M(0xffffff,{vertexColors:!!g});
    return[
      family(Z,merge([[new THREE.ConeGeometry(2.6,7,7).translate(0,6,0),0xffffff],[new THREE.ConeGeometry(1.8,5,7).translate(0,9.6,0),0xffffff],[cyl(.3,.4,3,5,0,1.5,0),0x6a5a4a]]),mk(1),260,
        {side:0,s:[.9,1.6],col:(lv,c)=>{c[0]=.06;c[1]=.16;c[2]=.08}}),
      family(Z,cyl(.08,.35,16,5,0,8,0),mk(),300,{side:-1,s:[.7,1.4],tilt:.25,sink:2,col:(lv,c)=>{c[0]=c[1]=c[2]=.35}}),
      family(Z,merge([[box(1.4,14,1.4,0,7,0),0xc0391b],[box(1.6,2,1.6,0,4,0),0xd79a26],[box(1.6,2,1.6,0,9,0),0x1f8a5a],[new THREE.ConeGeometry(1.8,2.6,4).translate(0,15.3,0),0xd79a26]]),mk(1),90,
        {side:1,s:[.8,1.3],col:(lv,c)=>{c[0]=c[1]=c[2]=1}}),
      family(Z,merge([[new THREE.IcosahedronGeometry(4.2,0).scale(1,1.2,1).translate(0,9,0),0xffffff],[cyl(.4,.6,6,5,0,3,0),0x5a3a20]]),mk(1),240,
        {side:1,s:[.8,1.5],col:(lv,c,th)=>{const k=['#e0a020','#c83a1a','#f0d040'][Math.floor(th*3)];const q=LIN(k);c[0]=q[0];c[1]=q[1];c[2]=q[2]}})]}});

/* ===== Puits des Neuf Édits : Tyrannie (damier de stèles d'obsidienne) / Liberté (coulées de lave et aiguilles) ===== */
belt(DON,{
  relief(h,u,v,lv,n1,n2,n3){const n=wneg(lv),p=wpos(lv);
    const cu=Math.floor(u/16),cv=Math.floor(v/16),lvl=(hash(cu,cv)<.5?-1:1)*(4+6*hash(cu+3,cv));
    const grid=lerp(h,2+lvl,sst(0,.6,n));
    return grid+p*(sst(.4,.85,n1)*30*(ridged(n3)*.5+.5)-16*sst(.16,.04,n3))},
  paint(u,v,lv,h,n1,n2,n3,x,z,o){const n=wneg(lv),p=wpos(lv);
    if(lv<0){const e=Math.min(((u%16)+16)%16,((v%16)+16)%16);mix3(o,LIN('#3b2d26'),e<.9?LIN('#c8321e'):LIN('#141016'),sst(0,.5,n));return e<.9?n*.6:0}
    const ch=sst(.16,.06,n3);if(ch>0&&p>0){mix3(o,LIN('#2a1a14'),LIN('#ff5a14'),ch);return ch*p*2.4}
    mix3(o,LIN('#3b2d26'),LIN('#1e1210'),p);return 0},
  gneg:{s:.35,c:1.35,k:.32,e:.92,t:'#b83a4a'},gpos:{s:1.4,c:1.12,k:.14,e:1.08,t:'#ff9a3a'},
  fams(Z){return[
    family(Z,new THREE.DodecahedronGeometry(2.4,0).scale(1,.7,1),M(0xffffff),160,{side:0,s:[.7,1.8],col:(lv,c)=>{const q=LIN('#5a4a40');c[0]=q[0];c[1]=q[1];c[2]=q[2]}}),
    family(Z,merge([[box(3,18,1,0,9,0),0x161018],[box(3.4,.8,1.3,0,18.2,0),0xc8321e]]),M(0xffffff,{vertexColors:true,roughness:.3}),220,{side:-1,grid:16,s:[.8,1.1],col:(lv,c)=>{c[0]=c[1]=c[2]=1}}),
    family(Z,new THREE.ConeGeometry(3.2,30,5).translate(0,13,0),M(0xffffff),130,{side:1,s:[.6,1.5],tilt:.2,col:(lv,c,th)=>{const q=LIN(th<.8?'#2a1a14':'#d9c23a');c[0]=q[0];c[1]=q[1];c[2]=q[2]}})]}});

/* ===== Chinampas : Folie (gouffres verts de bile, galles gonflées) / Raison (terrasses cultivées, forêt de maïs) ===== */
belt(RES,{
  relief(h,u,v,lv,n1,n2,n3){const n=wneg(lv),p=wpos(lv);
    const gouffre=-48*sst(.22,.05,n3)*n+n*10*(n2-.5);
    const terr2=terr(Math.max(0,sst(.25,.8,n1)*22),2.6);return lerp(h,1.5+terr2,p)+gouffre},
  paint(u,v,lv,h,n1,n2,n3,x,z,o){const n=wneg(lv),p=wpos(lv);
    if(lv<0){mix3(o,LIN('#4f6a30'),h<-6?LIN('#0e1206'):LIN('#9aa82a'),sst(0,.6,n));return h<-6?0:.0}
    const row=((Math.floor(v/5)%2)+2)%2;mix3(o,LIN('#4f6a30'),LIN(row?'#84cc2c':'#a01c3c'),sst(0,.7,p));return 0},
  gneg:{s:.75,c:1.1,k:.38,e:.95,t:'#a8c030'},gpos:{s:1.5,c:1.08,k:.06,e:1.05,t:'#fff0a0'},
  fams(Z){return[
    family(Z,merge([[new THREE.ConeGeometry(1.4,4,5).translate(0,2,0),0x6a8a3a]]),M(0xffffff,{vertexColors:true}),300,{side:0,s:[.7,1.4],col:(lv,c)=>{c[0]=c[1]=c[2]=1}}),
    family(Z,new THREE.IcosahedronGeometry(2.6,1),M(0xffffff,{roughness:.4}),200,{side:-1,s:[.6,2.2],sink:-1,col:(lv,c,th)=>{const q=LIN(th<.5?'#d8d080':'#b0b838');c[0]=q[0];c[1]=q[1];c[2]=q[2]}}),
    family(Z,merge([[cyl(.12,.18,7,4,0,3.5,0),0x3a8a20],[new THREE.ConeGeometry(.6,2.2,4).translate(0,7.8,0),0xe0c840]]),M(0xffffff,{vertexColors:true}),1400,{side:1,s:[.8,1.3],shadow:false,col:(lv,c)=>{c[0]=c[1]=c[2]=1}})]}});

/* ===== Exarchat des Lucioles : Nuit (chenaux noyés, racines mortes) / Aurore (bancs secs, étoffes tendues) ===== */
belt(ANT,{
  relief(h,u,v,lv,n1,n2,n3){const n=wneg(lv),p=wpos(lv);return h-n*7+p*(sst(.35,.7,n1)*12+3)},
  paint(u,v,lv,h,n1,n2,n3,x,z,o){const n=wneg(lv),p=wpos(lv);
    if(lv<0){mix3(o,LIN('#2a2018'),LIN('#0a0e14'),sst(0,.5,n));if(hash(Math.floor(x/3),Math.floor(z/3)+11)<.06*n){mix3(o,o,LIN('#30e0b8'),.9);return 3*n}return 0}
    mix3(o,LIN('#2a2018'),LIN('#c89070'),sst(0,.7,p));return 0},
  gneg:{s:.55,c:1.2,k:.3,e:1.25,t:'#3a70c0'},gpos:{s:1.35,c:1.05,k:.18,e:1.08,t:'#ff8a6a'},
  fams(Z){return[
    family(Z,merge([[new THREE.ConeGeometry(2.4,5,6,1,true).translate(0,2.5,0),0x3a3020],[new THREE.IcosahedronGeometry(3.2,0).translate(0,6.5,0),0x2a4a2a]]),M(0xffffff,{vertexColors:true,side:THREE.DoubleSide}),220,{side:0,s:[.8,1.5],col:(lv,c)=>{c[0]=c[1]=c[2]=1}}),
    family(Z,new THREE.TorusGeometry(5,.35,5,10,PI),M(0x0a0c10,{roughness:.3}),220,{side:-1,s:[.7,1.6],sink:2,col:(lv,c)=>{c[0]=.05;c[1]=.06;c[2]=.08}}),
    family(Z,merge([[cyl(.25,.3,14,5,-5,7,0),0x5a3a2a],[cyl(.25,.3,14,5,5,7,0),0x5a3a2a],[box(10,6,.15,0,9,0),0xffffff]]),M(0xffffff,{vertexColors:true,side:THREE.DoubleSide}),160,
      {side:1,s:[.8,1.3],col:(lv,c,th)=>{const q=LIN(['#7a1a6a','#e8a020','#28348a'][Math.floor(th*3)]);c[0]=q[0];c[1]=q[1];c[2]=q[2]}})]}});

/* ===== Givrecloche : Brume (dunes laiteuses, lots pris dans la glace) / Clarté (séracs bleus tranchants) ===== */
belt(MAR,{
  relief(h,u,v,lv,n1,n2,n3){const n=wneg(lv),p=wpos(lv);
    const dune=lerp(h,3+n1*7,sst(0,.8,n));return dune+p*(Math.pow(sst(.45,.9,n1),1.6)*36*(.6+.4*ridged(n3))-8*sst(.12,.03,n3))},
  paint(u,v,lv,h,n1,n2,n3,x,z,o){const n=wneg(lv),p=wpos(lv);
    if(lv<0){mix3(o,LIN('#c8d0d2'),LIN('#eef0ec'),sst(0,.6,n));return 0}
    mix3(o,LIN('#c8d0d2'),h>8?LIN('#2a6ad0'):LIN('#f4f8fc'),sst(0,.7,p));return h>8?p*.08:0},
  gneg:{s:.15,c:.6,k:.3,e:1.1,t:'#eeeeea'},gpos:{s:1.2,c:1.25,k:.05,e:1,t:'#9ac4ff'},
  fams(Z){return[
    family(Z,new THREE.BoxGeometry(3,2,3).translate(0,1,0),M(0xffffff,{roughness:.3}),200,{side:0,s:[.8,1.6],col:(lv,c)=>{const q=LIN('#9ab8c8');c[0]=q[0];c[1]=q[1];c[2]=q[2]}}),
    family(Z,new THREE.BoxGeometry(6,6,6).translate(0,3,0),M(0xffffff,{roughness:.9,transparent:true,opacity:.85}),140,{side:-1,s:[.6,1.5],sink:2.5,tilt:.2,col:(lv,c)=>{c[0]=c[1]=c[2]=.95}}),
    family(Z,new THREE.OctahedronGeometry(3,0).scale(1,5,1).translate(0,12,0),M(0xffffff,{roughness:.15,metalness:.1}),150,{side:1,s:[.45,1.1],tilt:.3,col:(lv,c,th)=>{const q=LIN(th<.5?'#4a8ad0':'#d8eeff');c[0]=q[0];c[1]=q[1];c[2]=q[2]}})]}});
