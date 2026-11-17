/* Chemins (17 nov., règle de l'utilisateur) : chaque route ouverte trace un chemin de dalles entre les Pierres des deux zones.
   Le tracé reste même si la route est désactivée ou coupée. Marcher sur un chemin permet de traverser une zone sans être attaqué,
   sauf dans une Citadelle (et, plus tard, près d'un rempart actif qui n'est pas à vous). */
let CHcle='',CHmesh=null,CHseg=[];
function majChemins(){if(typeof etatRoutes!=='function'||typeof scene==='undefined')return;etatRoutes();S.traces=S.traces||[];
  for(const r in S.routes)for(const id of S.routes[r]){const k=[r,id].sort().join('|');if(S.traces.indexOf(k)<0){S.traces.push(k)}}
  const cle=S.traces.join(',');if(cle===CHcle)return;CHcle=cle;
  if(CHmesh){scene.remove(CHmesh);CHmesh.geometry.dispose();CHmesh=null}CHseg=[];
  const pts=[];for(const k of S.traces){const[a,b]=k.split('|'),A=ZB[a],B=ZB[b];if(!A||!B||!A.alt||!B.alt)continue;
    const s={x1:A.alt.x,z1:A.alt.z,x2:B.alt.x,z2:B.alt.z};CHseg.push(s);const L=Math.hypot(s.x2-s.x1,s.z2-s.z1),n=Math.floor(L/2.6);
    for(let i=1;i<n;i++){const t=i/n,x=s.x1+(s.x2-s.x1)*t,z=s.z1+(s.z2-s.z1)*t;pts.push([x,z,Math.atan2(s.x2-s.x1,s.z2-s.z1)])}}
  if(!pts.length)return;
  const g=new THREE.BoxGeometry(2.6,.18,1.9),m=new THREE.MeshLambertMaterial({color:0xb7a27a});
  CHmesh=new THREE.InstancedMesh(g,m,pts.length);const o=new THREE.Object3D();
  pts.forEach((p,i)=>{const h=hash(p[0]*.3,p[1]*.3);o.position.set(p[0]+(h-.5)*.4,ground(p[0],p[1])+.06,p[1]);o.rotation.set(0,p[2]+(h-.5)*.25,0);o.scale.set(.85+h*.3,1,.85+h*.2);o.updateMatrix();CHmesh.setMatrixAt(i,o.matrix)});
  CHmesh.frustumCulled=false;scene.add(CHmesh)}
function surChemin(x,z){for(const s of CHseg){const dx=s.x2-s.x1,dz=s.z2-s.z1,L2=dx*dx+dz*dz||1,t=Math.max(0,Math.min(1,((x-s.x1)*dx+(z-s.z1)*dz)/L2));
  if(Math.hypot(x-s.x1-dx*t,z-s.z1-dz*t)<3.2)return true}return false}
/* À l'abri sur un chemin : pas de rencontre, sauf dans une Citadelle */
const abriChemin=()=>curZ&&(curZ.mod||curZ.id)!=='CIT'&&surChemin(P.x,P.z);
