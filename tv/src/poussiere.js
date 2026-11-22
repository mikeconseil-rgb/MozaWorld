/* MozaWorld 2.5 : un peu plus de vie dans le monde (17 nov., « le jeu est fluide, tu peux améliorer un peu les graphiques »).
   Des poussières de lumière flottent autour du héros, de la couleur de la zone ; le bloom les fait briller. Coût : 260 points, un seul appel de dessin.
   Rien en qualité « Fluide ».
   Boucle 3 (20 nov. 2026) : les poussières suivent la famille de météo du lieu (familleMeteo, ciels.js) :
   braises qui montent et vacillent au Feu, lucioles qui clignotent une à une à l'Eau et à la Sève, grains qui glissent
   au ras du sol dans la Pierre et le désert, paillettes lentes à la Glace, akènes au Vent, poussière grise à Givrecloche.
   Même nombre de points (260), même unique appel de dessin ; la couleur par point (vertexColors, posée une fois à la création,
   donc un seul programme) sert au clignotement ; on ne la réécrit que pour les familles qui clignotent ou vacillent. */
/* comportement : [vy (m/s, >0 monte), dérive horizontale (m/s), errance, taille, couleur, clignote (0 non, 1 lucioles, 2 braises), hauteur max (m)] */
const POUSS_FAM={neige:[-.12,.15,1,.45,'#d8ecff',0,14],braise:[1.5,.25,.7,.32,'#ff7a26',2,16],luciole:[0,.05,1.5,.62,'#c8ff5a',1,9],
  sable:[0,3.2,.25,.3,'#e0c08a',0,4],vent:[.05,1.6,.8,.4,'#e8dcff',0,14],encre:[-.08,.2,1,.45,'#d0d0d0',0,14]};
const POUSS=(()=>{const n=260,g=new THREE.BufferGeometry(),p=new Float32Array(n*3),c=new Float32Array(n*3).fill(1),v=[];
  for(let i=0;i<n;i++){p[i*3]=(Math.random()-.5)*70;p[i*3+1]=Math.random()*14;p[i*3+2]=(Math.random()-.5)*70;v.push([Math.random()*6.28,.3+Math.random()*.6,Math.random()])}
  g.setAttribute('position',new THREE.BufferAttribute(p,3));g.setAttribute('color',new THREE.BufferAttribute(c,3));
  const m=new THREE.PointsMaterial({size:.5,map:halo,color:0xffe2a0,vertexColors:true,transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false,fog:true});
  const o=new THREE.Points(g,m);o.frustumCulled=false;scene.add(o);
  return{o,g,p,c,v,n,m,col:new THREE.Color(),zc:'',fam:'',B:POUSS_FAM.neige,cUn:true,vent:[1,0]}})();
function majPoussiere(dt,T){const U=POUSS,vis=QI>0&&mode==='monde';U.o.visible=vis;if(!vis)return;
  const fam=curZ&&typeof familleMeteo==='function'?familleMeteo(curZ):'';
  const id=curZ?curZ.id:'',zc=(typeof ZCOL!=='undefined'&&ZCOL[id])||'#e8c77f',cle=fam+'|'+zc;
  if(cle!==U.zc){U.zc=cle;U.B=POUSS_FAM[fam]||POUSS_FAM.neige;
    /* couleur de la famille, teintée d'un quart par la couleur de la zone ; Givrecloche reste grise */
    U.col.set(U.B[4]);if(fam!=='encre')U.col.lerp(new THREE.Color(zc),.25);
    /* le vent des grains : une direction par zone (graine de la zone), stable */
    const a=curZ?((curZ.i||0)*2.399)%6.283:0;U.vent[0]=Math.cos(a);U.vent[1]=Math.sin(a)}
  const B=U.B,vy=B[0],dh=B[1],er=B[2],cl=B[5],hm=B[6],vx=U.vent[0]*dh,vz=U.vent[1]*dh;
  U.m.color.lerp(U.col,Math.min(1,dt*1.5));U.m.size=lerp(U.m.size,B[3],Math.min(1,dt*1.5));
  const p=U.p,c=U.c;for(let i=0;i<U.n;i++){const k=i*3,w=U.v[i];w[0]+=dt*w[1];
    p[k]+=(Math.sin(w[0])*.6*er+vx*(.6+.8*w[2]))*dt;p[k+1]+=(Math.cos(w[0]*.7)*.35*er+vy*(.5+w[2]))*dt;p[k+2]+=(Math.cos(w[0])*.6*er+vz*(.6+.8*w[2]))*dt;
    let dx=p[k]-P.x,dz=p[k+2]-P.z;if(dx>35)p[k]-=70;else if(dx<-35)p[k]+=70;if(dz>35)p[k+2]-=70;else if(dz<-35)p[k+2]+=70;
    const gy=P.y-2;if(p[k+1]<gy)p[k+1]+=hm+2;else if(p[k+1]>gy+hm+2)p[k+1]-=hm+2;
    if(cl===1){/* luciole : longues pauses éteintes, éclat bref (phase propre à chaque point) */
      const s=Math.sin(T*(.9+w[1])+w[2]*40),e=s>.55?(s-.55)/.45:0;c[k]=c[k+1]=c[k+2]=e*e*1.6}
    else if(cl===2){/* braise : vacille et s'éteint en montant */
      const h=1-clamp((p[k+1]-gy)/(hm+2),0,1),e=(.7+.3*Math.sin(T*9+w[2]*50))*(.25+.75*h);c[k]=c[k+1]=c[k+2]=e}}
  U.g.attributes.position.needsUpdate=true;
  if(cl){U.g.attributes.color.needsUpdate=true;U.cUn=false}else if(!U.cUn){c.fill(1);U.g.attributes.color.needsUpdate=true;U.cUn=true}
  U.m.opacity=.55+.2*Math.sin(T*.8)}
