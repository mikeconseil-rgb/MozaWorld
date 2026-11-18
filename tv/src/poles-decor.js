/* MozaWorld 2.6 : des décors propres à chaque pôle (18 novembre, idée 1 de l'évaluation graphique).
   Constat : sur les nouvelles tuiles, −7 et +7 gardaient les mêmes arbres et le même relief, seule la teinte changeait.
   Ici, chaque pôle apporte ses propres objets, qui apparaissent palier après palier (chaque objet a son seuil) :
   − : arbres morts, colonnes brisées, éclats d'obsidienne fendus de la couleur du pôle, et trois flèches noires effondrées ;
   + : bannières, cristaux lumineux, lanternes, grandes fleurs, et trois tours Girih dorées couronnées de lumière.
   La végétation du biome, elle, se penche et dépérit vers −7, grandit et se redresse vers +7.
   Coût : quelques centaines d'objets instanciés par tuile, sans ombre portée sauf les grands repères ; les objets éteints ne sont pas dessinés du tout (tasser), donc rien à zéro. */
(function(){
const geoD={
  souche:merge([[cyl(.35,.6,5.5,6,0,2.75,0),0x2a2420],[cyl(.12,.2,3,5,0,0,0).rotateZ(.9).translate(1,4.6,0),0x2a2420],[cyl(.1,.18,2.6,5,0,0,0).rotateZ(-1).translate(-.9,3.8,.2),0x2a2420]]),
  ruine:merge([[cyl(.7,.8,2.6,8,0,1.3,0),0x6a6460],[box(1.6,.9,1.6,2,.45,1,.5,0,.3),0x5a5450],[box(1.1,.6,1.1,-1.6,.3,-.8,.9),0x5a5450]]),
  eclat:merge([[new THREE.ConeGeometry(.8,5,4).translate(0,2.3,0).rotateZ(.25),0x1a1418],[new THREE.ConeGeometry(.55,3.4,4).translate(.9,1.5,.3).rotateZ(-.35),0x1a1418],[new THREE.ConeGeometry(.45,2.6,4).translate(-.8,1.2,-.4).rotateZ(.4),0x1a1418]]),
  fente:new THREE.OctahedronGeometry(1,0).scale(.25,1.6,.25).translate(0,1.2,0),
  fleche:merge([[new THREE.ConeGeometry(2.4,26,5).translate(0,13,0),0x141016],[new THREE.ConeGeometry(1.6,15,5).translate(3.2,6,1).rotateZ(-.42),0x141016],[box(5,1.6,4,-3,.8,2,.4),0x201a1c]]),
  banniere:merge([[cyl(.1,.12,6.5,5,0,3.25,0),0x3a2a1a],[box(1.6,2.6,.08,.85,4.9,0),0xffffff],[new THREE.ConeGeometry(.22,.6,5).translate(0,6.8,0),0xe8c77f]]),
  cristal:merge([[new THREE.OctahedronGeometry(1,0).scale(.7,2.8,.7).translate(0,2.2,0),0xffffff],[new THREE.OctahedronGeometry(1,0).scale(.45,1.8,.45).rotateZ(.4).translate(.9,1.3,0),0xffffff],[new THREE.OctahedronGeometry(1,0).scale(.4,1.5,.4).rotateZ(-.5).translate(-.8,1.1,.3),0xffffff]]),
  lanterne:new THREE.IcosahedronGeometry(.45,0).translate(0,3.4,0),
  poteau:cyl(.08,.1,3.2,5,0,1.6,0),
  fleur:merge([[cyl(.12,.18,3.2,5,0,1.6,0),0x4f7a3a],[new THREE.SphereGeometry(1.5,7,4,0,Math.PI*2,0,1.2).translate(0,2.6,0),0xffffff],[new THREE.IcosahedronGeometry(.45,0).translate(0,3.3,0),0xffe9a0]]),
  tour:(()=>{const p=[];for(let i=0;i<5;i++){const r=3.2-i*.5,h=6-i*.6,y=[0,6,11.4,16.2,20.4][i];p.push([cyl(r*.86,r,h,10,0,y+h/2,0),i%2?0xc9a45c:0xe9dfc8]);p.push([cyl(r+.25,r+.25,.5,10,0,y+h,0),0xc9a45c])}
    p.push([new THREE.ConeGeometry(1.2,4,10).translate(0,26.5,0),0xc9a45c]);return merge(p)})(),
  couronne:new THREE.IcosahedronGeometry(1.4,0).translate(0,30,0)};
/* les objets éteints (sous leur seuil) ne sont pas envoyés du tout : on range les allumés en tête et on réduit count */
function tasser(it){const m=it.m,A=m.instanceMatrix.array,C=m.instanceColor?m.instanceColor.array:null;let n=0;
  for(let i=0;i<it.a.length;i++){if(Math.hypot(A[i*16],A[i*16+1],A[i*16+2])<.01)continue;
    if(n!==i){for(let j=0;j<16;j++)A[n*16+j]=A[i*16+j];if(C)for(let j=0;j<3;j++)C[n*3+j]=C[i*3+j]}n++}
  m.count=n;done(m)}
const matV=M(0xffffff,{vertexColors:true}),matG=new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true}),matB=new THREE.MeshBasicMaterial({color:0xffffff});
/* [sorte, géométrie, matériau, pôle, nombre, taille, lueur] ; lueur : la teinte du pôle, poussée au-delà de 1 pour le halo */
const FAM=[
  ['souche','souche',matV,-1,46,[.8,1.4],0],['ruine','ruine',matV,-1,26,[.8,1.5],0],['eclat','eclat',matV,-1,34,[.8,1.6],0],['fente','fente',matB,-1,40,[.8,1.5],2.2],
  ['banniere','banniere',matV,1,30,[.9,1.2],0],['cristal','cristal',matG,1,30,[.7,1.5],1.6],['poteau','poteau',matV,1,24,[1,1],0],['lanterne','lanterne',matB,1,24,[1,1],2.4],['fleur','fleur',matV,1,40,[.8,1.7],0]];
const LANDMARK=[['fleche','fleche',matV,-1],['tour','tour',matV,1],['couronne','couronne',matB,1]];

for(const Z of ZN)if(Z.plus)(()=>{const [neg,pos]=PMANA[Z.d.mana]||PMANA.Pierre,cN=LIN(neg),cP=LIN(pos),cBlanc=[1,1,1],tmp=[0,0,0];
  const cN2=LIN(hexMix(neg,'#ff6040',.35)),cP2=LIN(hexMix(pos,'#ffffff',.3));
  const build0=Z.build,update0=Z.update;let fams=[];
  Z.build=()=>{build0();fams=[];
    const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));
    /* lanternes et poteaux partagent leurs places */
    const places={};
    for(const[k,g,mat,side,n0,sz,glow]of FAM){const it=inst(geoD[g],mat,false);it.k=k;it.side=side;it.glow=glow;fams.push(it);
      const n=Math.round(n0*Math.min(2,SC*SC/4)),src=k==='lanterne'?places.poteau:null;
      if(src){for(const o of src)it.add(o.x,0,o.z,1,1,1,0,0,0,{u:o.e.u,v:o.e.v,th:o.e.th});it.make();continue}
      let t=0;while(it.a.length<n&&t++<n*40){
        /* la moitié autour de la Pierre (35 à 110 m), où le joueur regarde ; le reste partout dans la tuile */
        let u,v;if(it.a.length%2===0){const a=rnd()*TAU,r=rr(35,110);u=-20+Math.cos(a)*r;v=Math.sin(a)*r}else{u=rr(-R,R);v=rr(-R,R)}
        if(!Z.inside(u,v,10)||Math.hypot(u+20,v)<30)continue;const p=Z.w(u,v),s=rr(sz[0],sz[1]);
        it.add(p[0],0,p[1],s,s,s,rnd()*TAU,k==='ruine'||k==='souche'?rr(-.12,.12):0,k==='souche'?rr(-.15,.15):0,{u,v,th:rnd()})}
      it.make();if(k==='poteau')places.poteau=it.a}
    /* les trois grands repères, à 120° les uns des autres autour de la Pierre : on en voit toujours un */
    for(const[k,g,mat,side]of LANDMARK){const it=inst(geoD[g],mat,mat!==matB);it.k=k;it.side=side;it.glow=mat===matB?3:0;it.repere=1;fams.push(it);
      for(let i=0;i<3;i++){const a=i*TAU/3+Z.i*.7;let r=78,u,v;for(let j=0;j<6;j++){u=-20+Math.cos(a)*r;v=Math.sin(a)*r;if(Z.inside(u,v,18))break;r*=.8}
        const p=Z.w(u,v);it.add(p[0],0,p[1],1,1,1,a+(side<0?.6:0),side<0?.12:0,side<0?-.1:0,{u,v,th:i*.12})}
      it.make()}};
  Z.update=lv=>{update0(lv);const an=wneg(lv),ap=wpos(lv);
    /* la végétation du biome : penchée, rabougrie vers −7 ; redressée et plus haute vers +7 */
    for(const it of Z.props){if(it.k==='rocher'||it.k==='mur'||it.k==='colonne')continue;
      it.set(o=>{if(an>.2&&o.r<an*.55)return .0001;if(o.rz0===undefined){o.rz0=o.rz;o.rx0=o.rx}o.rz=o.rz0+an*.5*(o.r-.5);o.rx=o.rx0+an*.3*(o.r*7%1-.5);
          return[(1+ap*.35)*(1-an*.25),(1+ap*.7)*(1-an*.45),(1+ap*.35)*(1-an*.25)]},
        (o,i,c)=>{const b=LIN(PBASE[it.k]||'#ffffff');mix3(c,b,[.12,.1,.09],an*.75);if(ap>0)mix3(c,c,cP,ap*.4);if(it.k==='cristal'){const e=1+ap*1.6;c[0]*=e;c[1]*=e;c[2]*=e}})}
    for(const it of fams){const w=it.side<0?an:ap;
      for(const o of it.a){o.y=groundZ(Z,o.x,o.z,lv)-(it.repere?.6:.15)}
      it.set(o=>{/* chaque objet a son seuil : plus on s'éloigne de zéro, plus il y en a ; les repères n'apparaissent qu'à partir de ±3 */
          const th=it.repere?.36+o.e.th:.05+o.e.th*.85,k=sst(th,th+.14,w);return k<.02?.0001:(it.repere?.35+.65*k:k)},
        (o,i,c)=>{if(it.glow){const e=it.glow*(.6+.4*w);const b=it.side<0?cN2:cP2;c[0]=b[0]*e;c[1]=b[1]*e;c[2]=b[2]*e;return}
          if(it.k==='banniere'||it.k==='fleur'){mix3(c,cBlanc,cP,.85)}else if(it.k==='tour'){mix3(c,cBlanc,cP,.18)}else{mix3(c,cBlanc,cN,.35)}});
      tasser(it)}};
})();
})();
