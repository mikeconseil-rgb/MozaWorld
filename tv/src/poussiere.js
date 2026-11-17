/* MozaWorld 2.5 : un peu plus de vie dans le monde (17 nov., « le jeu est fluide, tu peux améliorer un peu les graphiques »).
   Des poussières de lumière flottent autour du héros, de la couleur de la zone ; le bloom les fait briller. Coût : 260 points, un seul appel de dessin.
   Rien en qualité « Fluide ». */
const POUSS=(()=>{const n=260,g=new THREE.BufferGeometry(),p=new Float32Array(n*3),v=[];
  for(let i=0;i<n;i++){p[i*3]=(Math.random()-.5)*70;p[i*3+1]=Math.random()*14;p[i*3+2]=(Math.random()-.5)*70;v.push([Math.random()*6.28,.3+Math.random()*.6])}
  g.setAttribute('position',new THREE.BufferAttribute(p,3));
  const m=new THREE.PointsMaterial({size:.5,map:halo,color:0xffe2a0,transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false,fog:true});
  const o=new THREE.Points(g,m);o.frustumCulled=false;scene.add(o);return{o,g,p,v,n,m,col:new THREE.Color(),zc:''}})();
function majPoussiere(dt,T){const U=POUSS,vis=QI>0&&mode==='monde';U.o.visible=vis;if(!vis)return;
  const id=curZ?curZ.id:'',c=(typeof ZCOL!=='undefined'&&ZCOL[id])||'#e8c77f';if(c!==U.zc){U.zc=c;U.col.set(c).lerp(new THREE.Color(0xfff0c8),.45)}U.m.color.lerp(U.col,Math.min(1,dt*1.5));
  const p=U.p;for(let i=0;i<U.n;i++){const k=i*3,w=U.v[i];w[0]+=dt*w[1];
    p[k]+=Math.sin(w[0])*dt*.6;p[k+1]+=Math.cos(w[0]*.7)*dt*.35;p[k+2]+=Math.cos(w[0])*dt*.6;
    let dx=p[k]-P.x,dz=p[k+2]-P.z;if(dx>35)p[k]-=70;else if(dx<-35)p[k]+=70;if(dz>35)p[k+2]-=70;else if(dz<-35)p[k+2]+=70;
    const gy=P.y-2;if(p[k+1]<gy)p[k+1]+=16;else if(p[k+1]>gy+16)p[k+1]-=16}
  U.g.attributes.position.needsUpdate=true;U.m.opacity=.55+.2*Math.sin(T*.8)}
