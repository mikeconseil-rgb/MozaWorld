/* Héros, commandes, interface, musique, boucle. */
const $=id=>document.getElementById(id);
const START={CIT:3,DON:-1,RES:0,ANT:-6,MAR:5};
for(const Z of ZN){Z.lv=Z.lvT=START[Z.id];Z.build()}
buildTerrain();buildBorders();for(const Z of ZN)Z.update(Z.lv);
$('h-sect').textContent=secrets.length;

/* ---------- Héros ---------- */
const hero=new THREE.Group();
{const robe=new THREE.Mesh(new THREE.CylinderGeometry(.28,.62,1.5,8),M(0xe9dfc8,{flatShading:false}));robe.position.y=.75;
 const cape=new THREE.Mesh(new THREE.ConeGeometry(.78,1.7,8,1,true),M(0x7a1f2a,{side:THREE.DoubleSide,flatShading:false}));cape.position.set(0,1,-.12);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.27,10,8),M(0xd8b48a,{flatShading:false}));head.position.y=1.72;
 const hat=new THREE.Mesh(new THREE.ConeGeometry(.42,.5,8),M(0x2a2630));hat.position.y=2.05;
 const lamp=new THREE.Mesh(new THREE.SphereGeometry(.11,6,5),new THREE.MeshBasicMaterial({color:new THREE.Color(3,2,.8)}));lamp.position.set(.45,1.05,.25);
 for(const m of[robe,cape,head,hat])m.castShadow=true;hero.add(robe,cape,head,hat,lamp);
 const pl=hero.userData.pl=new THREE.PointLight(0xffd9a0,.55,18,1.8);pl.position.set(.45,1.3,.25);hero.add(pl);scene.add(hero)}
const P={x:-65,y:5,z:89,vy:0,g:false,yaw:Math.atan2(.59,-.81),pitch:.22,dist:13,face:0,walked:0};
const SPOTS={CIT:[-65,89,Math.atan2(.59,-.81)],DON:null,RES:null,ANT:null,MAR:null};
{const sp=(Z,u,v)=>{const p=Z.w(u,v),q=Z.w(u+10,v);return[p[0],p[1],Math.atan2(q[0]-p[0],q[1]-p[1])]};
 SPOTS.DON=sp(DON,-58,0);SPOTS.RES=sp(RES,-52,-10);SPOTS.ANT=sp(ANT,-84,13);SPOTS.MAR=sp(MAR,-60,0)}
function tp(id){const s=SPOTS[id];P.x=s[0];P.z=s[1];P.yaw=s[2];P.y=stand(P.x,P.z,1e3).g+.1;P.vy=0}
/* Où pose-t-on le pied ? Terrain, puis solides. Les dalles minces se traversent par-dessous, les masses arrêtent. */
function stand(x,z,feet){let g=ground(x,z),blocked=false,ramp=false;const Zz=zoneAt(x,z);
  if(Zz===ANT)g=Math.max(g,ANT.wy(ANT.lv)-1.05);
  for(let i=0;i<solids.length;i++){const s=solids[i];if(!s.on||(Zz&&s.Z!==Zz&&s.Z!==null)||!inSolid(s,x,z))continue;
    let top=s.y1;if(s.k)top+=s.k*((x-s.x)*s.cs+(z-s.z)*s.sn);
    if(feet>=top-.8){if(top>g)g=top;if(s.ramp)ramp=true}else if(s.y1-s.y0>.85&&feet+1.7>s.y0)blocked=true}
  return{g,blocked:blocked&&!ramp}}
const keys={};let locked=false,drag=false,lx=0,ly=0,started=false;
function move(dt){
  let f=(keys.KeyW||keys.ArrowUp?1:0)-(keys.KeyS||keys.ArrowDown?1:0),r=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0);
  if(touchFwd)f=1;const fx=Math.sin(P.yaw),fz=Math.cos(P.yaw),sp=(keys.ShiftLeft||keys.ShiftRight?17:8.5);
  let dx=(fx*f-fz*r),dz=(fz*f+fx*r);const l=Math.hypot(dx,dz);
  if(l>0){dx*=sp*dt/l;dz*=sp*dt/l;P.face=Math.atan2(dx,dz);
    const tryMove=(nx,nz)=>{if(!zoneAt(nx,nz))return false;const s=stand(nx,nz,P.y+.05);if(s.blocked)return false;P.x=nx;P.z=nz;return true};
    if(!tryMove(P.x+dx,P.z+dz))if(!tryMove(P.x+dx,P.z))tryMove(P.x,P.z+dz);
    if(P.g)P.walked+=l>0?sp*dt:0}
  const s=stand(P.x,P.z,P.y+.05);
  if(P.g&&keys.Space){P.vy=11.5;P.g=false}
  if(P.g){if(s.g<P.y-.85){P.g=false}else P.y=s.g}
  if(!P.g){P.vy-=24*dt;P.y+=P.vy*dt;if(P.y<=s.g&&P.vy<=0){P.y=s.g;P.vy=0;P.g=true}}
  hero.position.set(P.x,P.y,P.z);hero.rotation.y+=((((P.face-hero.rotation.y)%TAU)+TAU+PI)%TAU-PI)*Math.min(1,dt*10);
  const cp=Math.cos(P.pitch),tx=P.x,ty=P.y+1.9,tz=P.z;let cx=tx-fx*cp*P.dist,cy=ty+Math.sin(P.pitch)*P.dist,cz=tz-fz*cp*P.dist;
  const gy=ground(cx,cz)+.7;if(cy<gy)cy=gy;camera.position.set(cx,cy,cz);camera.lookAt(tx,ty,tz)}
addEventListener('keydown',e=>{if(e.code==='Space'||e.code.startsWith('Arrow'))e.preventDefault();keys[e.code]=true;if(!started)return;
  if(e.code==='KeyE'||e.code==='BracketRight'||e.code==='Equal'||e.code==='NumpadAdd')bump(1);
  if(e.code==='KeyQ'||e.code==='BracketLeft'||e.code==='Minus'||e.code==='NumpadSubtract')bump(-1);
  if(e.code==='KeyM')toggleSound();if(e.code==='KeyH')document.body.classList.toggle('nohud');if(e.code==='KeyB'){$('recit').hidden=!$('recit').hidden}
  const n='12345'.indexOf(e.key);if(n>=0)tp(['CIT','DON','RES','ANT','MAR'][n])});
addEventListener('keyup',e=>{keys[e.code]=false});
canvas.addEventListener('mousedown',e=>{drag=true;lx=e.clientX;ly=e.clientY;if(started&&!locked){try{const p=canvas.requestPointerLock&&canvas.requestPointerLock();if(p&&p.catch)p.catch(()=>{})}catch(_){}}});
addEventListener('mouseup',()=>{drag=false});
document.addEventListener('pointerlockchange',()=>{locked=document.pointerLockElement===canvas});
addEventListener('mousemove',e=>{if(!locked&&!drag)return;const dx=locked?e.movementX:e.clientX-lx,dy=locked?e.movementY:e.clientY-ly;lx=e.clientX;ly=e.clientY;
  P.yaw-=dx*.0028;P.pitch=clamp(P.pitch+dy*.0024,-.5,1.35)});
addEventListener('wheel',e=>{P.dist=clamp(P.dist+e.deltaY*.012,4,42)},{passive:true});
let touchFwd=false;const tt={};
canvas.addEventListener('touchstart',e=>{for(const t of e.changedTouches)tt[t.identifier]=[t.clientX,t.clientY];touchFwd=e.touches.length>=2;e.preventDefault()},{passive:false});
canvas.addEventListener('touchmove',e=>{const t=e.changedTouches[0],o=tt[t.identifier];if(o){P.yaw-=(t.clientX-o[0])*.005;P.pitch=clamp(P.pitch+(t.clientY-o[1])*.004,-.5,1.35);tt[t.identifier]=[t.clientX,t.clientY]}e.preventDefault()},{passive:false});
canvas.addEventListener('touchend',e=>{touchFwd=e.touches.length>=2});
addEventListener('resize',resize);

/* ---------- Interface ---------- */
let curZ=null,hudKey='';
const pips=$('h-pips');for(let i=-7;i<=7;i++){const s=document.createElement('span');s.className='pip'+(i===0?' z':'');pips.appendChild(s)}
function bump(d){if(!curZ)return;curZ.lvT=clamp(curZ.lvT+d,-7,7);chime(curZ.lvT)}
$('b-moins').onclick=()=>bump(-1);$('b-plus').onclick=()=>bump(1);
function hud(){const Z=curZ;if(!Z)return;const key=Z.id+Z.lvT;if(key===hudKey)return;hudKey=key;const I=Z.info,lv=Z.lvT;
  $('h-sur').textContent=I.sur;$('h-nom').textContent=I.nom;$('h-pm').textContent=I.pm;$('h-pp').textContent=I.pp;$('h-niv').textContent=(lv>0?'+':'')+lv;
  $('h-pal').textContent=I.pal[lv<=-6?0:lv<=-2?1:lv<2?2:lv<6?3:4];
  [...pips.children].forEach((s,i)=>{const v=i-7;s.className='pip'+(v===0?' z':'')+(v<0&&lv<=v?' on m':'')+(v>0&&lv>=v?' on p':'')+(v===lv?' cur':'');s.style.color=v<0?'var(--moins)':v>0?'var(--plus)':'var(--laiton)'});
  $('r-t').textContent=I.nom;$('r-b').textContent=I.recit;$('r-p').textContent=I.conteur;secHud()}
function secHud(){$('h-sec').textContent=secrets.filter(s=>s.found).length;if(curZ){const a=secrets.filter(s=>s.Z===curZ);$('h-secz').textContent='ici '+a.filter(s=>s.found).length+' / '+a.length}}
let toastT=0;function toast(a,b,c){$('t1').textContent=a;$('t2').textContent=b;$('t3').textContent=c;$('toast').classList.add('vu');toastT=7}
const mini=$('mini'),mc=mini.getContext('2d');
function drawMini(){const sp=Math.max(X1-X0,Z1-Z0)-100,s=300/sp,ox=sp/2-(X0+X1)/2,oz=sp/2-(Z0+Z1)/2;mc.clearRect(0,0,300,300);
  for(const Z of ZN){mc.beginPath();Z.poly.forEach((p,i)=>{const x=(p[0]+ox)*s,y=(p[1]+oz)*s;i?mc.lineTo(x,y):mc.moveTo(x,y)});mc.closePath();
    const k=Z.lv/7;mc.fillStyle=k<0?`rgba(127,176,200,${.12+.6*-k})`:`rgba(230,162,90,${.12+.6*k})`;mc.fill();mc.lineWidth=Z===curZ?3:1.5;mc.strokeStyle=Z===curZ?'#efe7d6':'#c9a45c';mc.stroke()}
  for(const q of secrets){if(q.found||!q.cond(q.Z.lv))continue;const p=q.pos();mc.fillStyle='#ffe9a8';mc.beginPath();mc.arc((p[0]+ox)*s,(p[2]+oz)*s,2.6,0,TAU);mc.fill()}
  const x=(P.x+ox)*s,y=(P.z+oz)*s,fx=Math.sin(P.yaw),fz=Math.cos(P.yaw);mc.fillStyle='#fff';mc.beginPath();mc.moveTo(x+fx*9,y+fz*9);mc.lineTo(x-fz*4-fx*4,y+fx*4-fz*4);mc.lineTo(x+fz*4-fx*4,y-fx*4-fz*4);mc.fill()}
if(navigator.keyboard&&navigator.keyboard.getLayoutMap)navigator.keyboard.getLayoutMap().then(m=>{const g=(c,id)=>{const v=m.get(c);if(v)$(id).textContent=v.toUpperCase()};g('KeyW','k-av');g('KeyA','k-ga');g('KeyQ','k-m')}).catch(()=>{});

/* ---------- Musique générative : une gamme, un timbre et une pulsation par zone, qui changent avec le niveau ---------- */
let AX=null,master,droneA,droneB,droneG,windG,windF,noiseBuf,delayIn,soundOn=true,nextT=0,stepI=0,noteI=3;
const ZA={
  CIT:{root:196,n:[0,3,7,10],z:[0,2,3,5,7,8,10],p:[0,2,4,5,7,9,11],wave:'triangle',bpm:nramp(30,60,132),dens:nramp(.22,.45,.8),dec:nramp(2.6,1.3,.4),vib:5,drone:nramp(.05,.05,.02),wind:nramp(.12,.03,0),wf:600,pat:['........','t.......','c.cc.c.c']},
  DON:{root:146.8,n:[0,1,5,7],z:[0,2,4,7,9],p:[0,2,4,7,9],wave:'sawtooth',bpm:nramp(40,66,150),dens:nramp(.12,.5,.9),dec:nramp(1.6,1.1,.3),vib:0,drone:nramp(.07,.06,.05),wind:nramp(.05,.04,.1),wf:180,pat:['........','t.......','t.rt.rrt']},
  RES:{root:174.6,n:[0,1,6,7],z:[0,3,5,7,10],p:[0,2,4,7,9],wave:'sine',bpm:nramp(52,70,48),dens:nramp(.1,.4,.5),dec:nramp(.5,1,3),vib:4,drone:nramp(.03,.04,.06),wind:nramp(.06,.07,.05),wf:1200,pat:['r..r.r....r','t..rt.r.','t.......']},
  ANT:{root:329.6,n:[0,1,3,7],z:[0,2,3,5,7,9,10],p:[0,2,4,6,7,9,11],wave:'sine',bpm:nramp(36,56,126),dens:nramp(.15,.4,.85),dec:nramp(2.4,1.4,.5),vib:6,drone:nramp(.04,.03,.03),wind:nramp(.02,.03,.02),wf:400,pat:['c..c.','........','t.ct.cc']},
  MAR:{root:196,n:[0,7,12,19],z:[0,2,3,5,7,9,10],p:[0,2,4,5,7,9,11],wave:'square',bpm:nramp(28,84,140),dens:nramp(.3,.6,.95),dec:nramp(2.2,.5,.22),vib:0,drone:nramp(.03,.02,.03),wind:nramp(.14,.04,0),wf:900,pat:['........','c...c...','rrcrrcrrcrrcr']}};
function initAudio(){try{AX=new(window.AudioContext||window.webkitAudioContext)()}catch(_){return}
  master=AX.createGain();master.gain.value=.55;const comp=AX.createDynamicsCompressor();master.connect(comp);comp.connect(AX.destination);
  delayIn=AX.createGain();const d=AX.createDelay(1);d.delayTime.value=.33;const fb=AX.createGain();fb.gain.value=.38;const wet=AX.createGain();wet.gain.value=.35;delayIn.connect(d);d.connect(fb);fb.connect(d);d.connect(wet);wet.connect(master);
  noiseBuf=AX.createBuffer(1,AX.sampleRate*2,AX.sampleRate);const nd=noiseBuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  droneG=AX.createGain();droneG.gain.value=0;const lp=AX.createBiquadFilter();lp.type='lowpass';lp.frequency.value=320;droneG.connect(lp);lp.connect(master);
  droneA=AX.createOscillator();droneB=AX.createOscillator();droneA.type='sawtooth';droneB.type='triangle';droneA.connect(droneG);droneB.connect(droneG);droneA.start();droneB.start();
  const ws=AX.createBufferSource();ws.buffer=noiseBuf;ws.loop=true;windF=AX.createBiquadFilter();windF.type='bandpass';windF.Q.value=.7;windG=AX.createGain();windG.gain.value=0;ws.connect(windF);windF.connect(windG);windG.connect(master);ws.start();
  nextT=AX.currentTime+.2;setInterval(sched,60)}
function env(g,t,a,d,v){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+a);g.gain.exponentialRampToValueAtTime(.0008,t+a+d)}
function note(t,f,cfg,dec,v){const o=AX.createOscillator(),g=AX.createGain();o.type=cfg.wave;o.frequency.value=f;
  if(cfg.vib){const l=AX.createOscillator(),lg=AX.createGain();l.frequency.value=cfg.vib;lg.gain.value=f*.008;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+dec+.3)}
  const k=cfg.wave==='sine'||cfg.wave==='triangle'?1:.35;env(g,t,dec>1?.08:.012,dec,v*k);o.connect(g);g.connect(master);g.connect(delayIn);o.start(t);o.stop(t+dec+.3)}
function perc(t,ty,v){v=v||1;if(ty==='t'){const o=AX.createOscillator(),g=AX.createGain();o.frequency.setValueAtTime(110,t);o.frequency.exponentialRampToValueAtTime(42,t+.22);env(g,t,.004,.3,.5*v);o.connect(g);g.connect(master);o.start(t);o.stop(t+.5);return}
  const s=AX.createBufferSource(),f=AX.createBiquadFilter(),g=AX.createGain();s.buffer=noiseBuf;f.type=ty==='c'?'bandpass':'highpass';f.frequency.value=ty==='c'?1900:6200;f.Q.value=ty==='c'?6:1;
  env(g,t,.002,ty==='c'?.06:.045,(ty==='c'?.5:.16)*v);s.connect(f);f.connect(g);g.connect(master);g.connect(delayIn);s.start(t,Math.random());s.stop(t+.2)}
function sched(){if(!AX||!curZ)return;const cfg=ZA[curZ.id],lv=curZ.lv,now=AX.currentTime;
  droneA.frequency.setTargetAtTime(cfg.root/4,now,.5);droneB.frequency.setTargetAtTime(cfg.root/4*1.498,now,.5);droneG.gain.setTargetAtTime(cfg.drone(lv)*1.6,now,.6);
  windF.frequency.setTargetAtTime(cfg.wf,now,.5);windG.gain.setTargetAtTime(cfg.wind(lv)*1.5,now,.6);
  if(nextT<now-.5)nextT=now+.05;
  while(nextT<now+.25){const sc=lv<-2?cfg.n:lv>2?cfg.p:cfg.z,pat=cfg.pat[lv<-2?0:lv>2?2:1],ch=pat[stepI%pat.length];
    if(ch!=='.')perc(nextT,ch,.8);
    if(Math.random()<cfg.dens(lv)){noteI=clamp(noteI+((Math.random()*5)|0)-2,0,sc.length*2-1);const semi=sc[noteI%sc.length]+12*Math.floor(noteI/sc.length);
      note(nextT,cfg.root*Math.pow(2,semi/12),cfg,cfg.dec(lv),.11);if(curZ.id==='MAR'&&lv<-2)note(nextT,cfg.root*Math.pow(2,(semi+7)/12),cfg,cfg.dec(lv),.07)}
    stepI++;nextT+=60/cfg.bpm(lv)/2}}
function chime(lv){if(!AX||!soundOn)return;const t=AX.currentTime,f=440*Math.pow(2,lv/12);note(t,f,{wave:'sine',vib:0},.5,.12);note(t+.07,f*1.5,{wave:'sine',vib:0},.6,.08)}
function toggleSound(){soundOn=!soundOn;if(master)master.gain.setTargetAtTime(soundOn?.55:0,AX.currentTime,.1)}

/* ---------- Boucle ---------- */
let last=performance.now(),T=0,frame=0,stepAcc=0;
function loop(now){requestAnimationFrame(loop);const dt=Math.min(.05,(now-last)/1000);last=now;T+=dt;frame++;
  for(const Z of ZN){if(Math.abs(Z.lv-Z.lvT)>1e-4){const d=Z.lvT-Z.lv,s=Math.sign(d)*Math.min(Math.abs(d),dt*3.2);Z.lv+=s;if(Math.abs(Z.lvT-Z.lv)<1e-4)Z.lv=Z.lvT;rebuild(Z);Z.update(Z.lv)}Z.tick(T,dt)}
  if(started)move(dt);else{P.yaw+=dt*.04;P.y=stand(P.x,P.z,1e3).g;move(0)}
  const Z=zoneAt(P.x,P.z);if(Z&&Z!==curZ){curZ=Z;hudKey=''}hud();
  stepAtmo(curZ,dt,T,P.x,P.y,P.z);hero.userData.pl.intensity=curZ===ANT?.12:.55;
  /* tambour au pas dans le Puits sous la tyrannie */
  if(AX&&curZ===DON&&DON.lv<=-4&&P.walked-stepAcc>2.4){stepAcc=P.walked;perc(AX.currentTime,'t',1.2)}
  let hi=0;for(const q of secrets){const ok=!q.found&&q.cond(q.Z.lv);q.m.visible=ok;if(!ok)continue;const p=q.pos();q.m.position.set(p[0],p[1]+Math.sin(T*2+p[0])*.18,p[2]);q.m.rotation.y=T*1.3;
    secHalo.P[hi*3]=p[0];secHalo.P[hi*3+1]=p[1];secHalo.P[hi*3+2]=p[2];const b=.5+.2*Math.sin(T*3);secHalo.C[hi*3]=2.2*b;secHalo.C[hi*3+1]=1.5*b;secHalo.C[hi*3+2]=.5*b;hi++;
    if(started&&Math.hypot(p[0]-P.x,p[1]-P.y-1,p[2]-P.z)<2.6){q.found=true;toast('Secret · '+q.Z.info.nom,q.titre,q.texte);secHud();if(AX&&soundOn){const t=AX.currentTime;[0,4,7,12].forEach((s,i)=>note(t+i*.09,523*Math.pow(2,s/12),{wave:'sine',vib:0},.9,.1))}}}
  for(let i=hi;i<32;i++)secHalo.P[i*3+1]=-999;secHalo.up();
  if(toastT>0){toastT-=dt;if(toastT<=0)$('toast').classList.remove('vu')}
  if(frame%6===0)drawMini();
  draw(T)}
function start(){if(started)return;started=true;$('seuil').classList.add('parti');initAudio();canvas.focus();try{const p=canvas.requestPointerLock&&canvas.requestPointerLock();if(p&&p.catch)p.catch(()=>{})}catch(_){}}
$('entrer').addEventListener('click',start);
resize();tp('CIT');requestAnimationFrame(loop);
window.MZ={P,ZN,tp,secrets,set(id,lv){const Z=ZN.find(z=>z.id===id);Z.lvT=Z.lv=lv;rebuild(Z);Z.update(lv)},start(){started=true;$('seuil').classList.add('parti')},A};
