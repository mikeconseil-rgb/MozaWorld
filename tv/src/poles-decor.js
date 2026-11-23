/* MozaWorld 2.6 : des décors propres à chaque pôle (18 novembre, idée 1 de l'évaluation graphique).
   Constat : sur les nouvelles tuiles, −7 et +7 gardaient les mêmes arbres et le même relief, seule la teinte changeait.
   Ici, chaque pôle apporte ses propres objets, qui apparaissent palier après palier (chaque objet a son seuil) :
   − : arbres morts, colonnes brisées, éclats d'obsidienne fendus de la couleur du pôle, et trois flèches noires effondrées ;
   + : bannières, cristaux lumineux, lanternes, grandes fleurs, et trois tours Girih dorées couronnées de lumière.
   La végétation du biome, elle, se penche et dépérit vers −7, grandit et se redresse vers +7.
   Coût : quelques centaines d'objets instanciés par tuile, sans ombre portée sauf les grands repères ; les objets éteints ne sont pas dessinés du tout (tasser), donc rien à zéro.
   Boucle 2 (19 novembre 2026) : fini le même jeu d'objets partout. FAM devient FAM_PAR_TYPE : mêmes géométries, mais un jeu et des
   proportions propres à chaque type de zone (souches et aiguilles noires pour la Citadelle −, ruines et éclats pour l'Assemblée −,
   bannières et lanternes pour le Donjon +, cristaux et grandes fleurs pour l'Antre +…), avec le même nombre total d'objets par pôle.
   Le repère + change de silhouette : tour Girih (Citadelle), arche en fer à cheval (Donjon), terrasses à degrés (Ressource),
   aiguilles de cristal (Antre), coupole (Assemblée), kiosque à toit pointu (Marché) ; sa couronne de lumière suit son sommet.
   Toujours trois familles de repères, donc aucun appel de dessin en plus. */
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
  /* boucle 2 : les autres silhouettes du repère +, à peu près le même nombre de triangles que la tour */
  arche:(()=>{const a=Math.PI/8,R=6,cx=R*Math.cos(a),cy=15-R*Math.sin(a);
    return merge([[box(2.2,cy,2.6,-cx,cy/2,0),0xe8ecf2],[box(2.2,cy,2.6,cx,cy/2,0),0xe8ecf2],
      [new THREE.TorusGeometry(R,1.15,6,14,Math.PI+2*a).rotateZ(-a).translate(0,15,0),0x1f3c8a],
      [box(16,1.4,3,0,23,0),0x1f3c8a],[box(1.2,9,3,-7.4,18.5,0),0xe8ecf2],[box(1.2,9,3,7.4,18.5,0),0xe8ecf2],
      [box(3,3,3,0,25.2,0,Math.PI/4),0xc9a45c],[box(18,1.2,3.6,0,.6,0),0xd8dce4]])})(),
  degres:merge([[box(15,4,15,0,2,0),0x3f7a52],[box(11.5,4,11.5,0,6,0),0x5aa06a],[box(8,4,8,0,10,0),0x3f7a52],[box(5,4,5,0,14,0),0x5aa06a],
    [cyl(1.6,1.6,4,8,0,18,0),0xe2d6a8],[new THREE.ConeGeometry(2.4,3,8).translate(0,21.5,0),0x2f6a44]]),
  aiguilles:merge([[new THREE.OctahedronGeometry(1,0).scale(2.4,13,2.4).translate(0,12,0),0x38c0b8],
    [new THREE.OctahedronGeometry(1,0).scale(1.6,8,1.6).rotateZ(.35).translate(3.2,7,0),0xe6d8e4],
    [new THREE.OctahedronGeometry(1,0).scale(1.5,7,1.5).rotateZ(-.4).rotateY(2).translate(-2.4,6,2),0x2a9a9a],
    [new THREE.OctahedronGeometry(1,0).scale(1.2,5,1.2).rotateX(.4).translate(0,4,-3),0xe6d8e4],[cyl(4,4.6,1.2,8,0,.6,0),0x1f5a5c]]),
  coupole:merge([[box(14,2,14,0,1,0),0xc8ccd8],[cyl(5.4,5.6,7,8,0,5.5,0),0x2a3f9a],[cyl(6,6,.6,8,0,9.2,0),0xc8ccd8],
    [new THREE.SphereGeometry(5.6,8,4,0,Math.PI*2,0,Math.PI/2).translate(0,9.4,0),0xc8ccd8],[cyl(.9,1.1,2.6,8,0,16,0),0x2a3f9a],
    [new THREE.ConeGeometry(1,3,8).translate(0,18.8,0),0xe0e4ee],[cyl(.7,.8,14,6,6.6,7,6.6),0xc8ccd8],[cyl(.7,.8,14,6,-6.6,7,-6.6),0xc8ccd8]]),
  kiosque:merge([[box(11,1.2,11,0,.6,0),0xe8eef4],[cyl(.5,.55,11,6,4,6.6,4),0xe8eef4],[cyl(.5,.55,11,6,-4,6.6,4),0xe8eef4],
    [cyl(.5,.55,11,6,4,6.6,-4),0xe8eef4],[cyl(.5,.55,11,6,-4,6.6,-4),0xe8eef4],
    [new THREE.ConeGeometry(7.6,5,4).rotateY(Math.PI/4).translate(0,14.5,0),0x3a7ec8],[box(4.6,3,4.6,0,18.2,0),0xe8eef4],
    [new THREE.ConeGeometry(4,5,4).rotateY(Math.PI/4).translate(0,22.2,0),0x3a7ec8]]),
  couronne:new THREE.IcosahedronGeometry(1.4,0).translate(0,30,0)};
/* la couronne de lumière se pose au-dessus de chaque silhouette */
for(const[n,y]of[['arche',28.5],['degres',25],['aiguilles',27.5],['coupole',22.5],['kiosque',27.5]])geoD['couronne_'+n]=new THREE.IcosahedronGeometry(1.4,0).translate(0,y,0);
/* les objets éteints (sous leur seuil) ne sont pas envoyés du tout : on range les allumés en tête et on réduit count */
function tasser(it){const m=it.m,A=m.instanceMatrix.array,C=m.instanceColor?m.instanceColor.array:null;let n=0;
  for(let i=0;i<it.a.length;i++){if(Math.hypot(A[i*16],A[i*16+1],A[i*16+2])<.01)continue;
    if(n!==i){for(let j=0;j<16;j++)A[n*16+j]=A[i*16+j];if(C)for(let j=0;j<3;j++)C[n*3+j]=C[i*3+j]}n++}
  m.count=n;m.visible=n>0;done(m)}
const matV=M(0xffffff,{vertexColors:true}),matG=new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true}),matB=new THREE.MeshBasicMaterial({color:0xffffff});
/* [sorte, géométrie, matériau, pôle, nombre, taille, lueur, part de la teinte du pôle] ; lueur : la teinte du pôle, poussée au-delà de 1 pour le halo.
   Boucle 2 (19 nov. 2026) : un jeu par type de zone ; par pôle, toujours 146 objets (−) et 148 (+), lanternes posées sur les poteaux. */
const F=(k,g,side,n,sz,glow,tm)=>[k,g,glow?(g==='cristal'?matG:matB):matV,side,n,sz,glow||0,tm];
const FAM_PAR_TYPE={
  Citadelle:[F('souche','souche',-1,62,[.9,1.5]),F('aiguille','fleche',-1,36,[.14,.28]),F('eclat','eclat',-1,22,[.8,1.4]),F('fente','fente',-1,26,[.8,1.5],2.2),
    F('banniere','banniere',1,30,[.9,1.2]),F('cristal','cristal',1,30,[.7,1.5],1.6),F('poteau','poteau',1,24,[1,1]),F('lanterne','lanterne',1,24,[1,1],2.4),F('fleur','fleur',1,40,[.8,1.7])],
  Donjon:[F('eclat','eclat',-1,52,[.9,1.8]),F('fente','fente',-1,50,[.9,1.7],2.4),F('souche','souche',-1,24,[.8,1.3]),F('ruine','ruine',-1,20,[.7,1.2]),
    F('banniere','banniere',1,56,[.9,1.4]),F('poteau','poteau',1,34,[1,1.2]),F('lanterne','lanterne',1,34,[1,1],2.6),F('fleur','fleur',1,24,[.7,1.1])],
  Ressource:[F('souche','souche',-1,70,[.6,1.2]),F('ruine','ruine',-1,26,[.6,1]),F('eclat','eclat',-1,20,[.5,.9]),F('fente','fente',-1,30,[.6,1],2),
    F('fleur','fleur',1,76,[.7,1.5]),F('cristal','cristal',1,22,[.5,.9],1.4),F('poteau','poteau',1,25,[1,1]),F('lanterne','lanterne',1,25,[1,1],2.2)],
  Antre:[F('champignon','fleur',-1,64,[.6,1.5],0,.7),F('fente','fente',-1,40,[.7,1.3],2.4),F('eclat','eclat',-1,24,[.6,1.2]),F('souche','souche',-1,18,[.6,1]),
    F('cristal','cristal',1,62,[1,2.2],1.7),F('fleur','fleur',1,66,[1.3,2.4]),F('poteau','poteau',1,10,[1,1]),F('lanterne','lanterne',1,10,[1,1],2.4)],
  'Assemblée':[F('ruine','ruine',-1,64,[.9,1.8]),F('eclat','eclat',-1,46,[.9,1.7]),F('pieu','poteau',-1,14,[1.2,1.8]),F('fente','fente',-1,22,[.8,1.4],2.2),
    F('banniere','banniere',1,44,[1,1.3]),F('poteau','poteau',1,30,[1,1.1]),F('lanterne','lanterne',1,30,[1,1],2.4),F('cristal','cristal',1,44,[.6,1.1],1.5)],
  'Marché':[F('pieu','poteau',-1,44,[1,1.6]),F('ruine','ruine',-1,40,[.6,1.1]),F('souche','souche',-1,30,[.5,.9]),F('fente','fente',-1,32,[.6,1.1],2),
    F('banniere','banniere',1,64,[.8,1.1]),F('poteau','poteau',1,28,[1,1]),F('lanterne','lanterne',1,28,[1,1],2.4),F('fleur','fleur',1,28,[.7,1.2])]};
/* le repère + de chaque type, et sa couronne */
const REPERE_POS={Citadelle:'tour',Donjon:'arche',Ressource:'degres',Antre:'aiguilles','Assemblée':'coupole','Marché':'kiosque'};
const TYPES=Object.keys(FAM_PAR_TYPE),TYPE_ORIG={CIT:'Citadelle',DON:'Donjon',RES:'Ressource',ANT:'Antre',ASS:'Assemblée',MAR:'Marché'};
const typeDe=Z=>{const t=Z.plus?Z.d.type:TYPE_ORIG[Z.id];if(FAM_PAR_TYPE[t])return t;let h=7;for(const ch of String(Z.id))h=(h*31+ch.charCodeAt(0))>>>0;return TYPES[h%TYPES.length]};

/* 2.8 : aussi les zones d'origine (pas Tezcamixtli : une Ressource n'a pas de pôle). Là, le cœur écrit à la main reste tel quel :
   les objets ne vont que dans la ceinture (Z.bw, mutations.js), et les repères à 70 % du rayon. */
const MANA_ORIG={CIT:'Glace',DON:'Feu',ANT:'Eau',MAR:'Glace'};
for(const Z of ZN)if(Z.plus||MANA_ORIG[Z.id])(()=>{const [neg,pos]=PMANA[Z.plus?Z.d.mana:MANA_ORIG[Z.id]]||PMANA.Pierre,cN=LIN(neg),cP=LIN(pos),cBlanc=[1,1,1],tmp=[0,0,0];
  const zi=Z.i||0,cx=Z.plus?-20:0,ok0=(u,v,m)=>Z.plus?Z.inside(u,v,m)&&Math.hypot(u+20,v)>=30:Z.inside(u,v,m)&&!!Z.bw&&Z.bw(u,v)>.6;
  /* boucle 5 (23 nov. 2026) : ok tient compte du couloir d'arrivée (couloir, zones1.js) : h est la hauteur de l'objet (m),
     bas vaut vrai pour les objets qui ne masquent rien (fentes, fleurs, champignons) ; les repères passent avec h=99 */
  const ok=(u,v,m,h,bas)=>{if(!ok0(u,v,m))return false;const p=Z.w(u,v);return couloir(Z).libre(p[0],p[1],h===undefined?99:h,bas)};
  /* tirage d'une place : la moitié autour de la Pierre (35 à 110 m), où le joueur regarde ; le reste partout dans la tuile */
  const place=(R,pres,f)=>{if(Z.plus&&pres){const a=f(0,TAU),r=f(35,110);return[-20+Math.cos(a)*r,Math.sin(a)*r]}return[f(-R,R),f(-R,R)]};
  const BAS=new Set(['fente','fleur','champignon']),HAUT=new Set(['fleche','eclat','souche','aiguille']);
  const cN2=LIN(hexMix(neg,'#ff6040',.35)),cP2=LIN(hexMix(pos,'#ffffff',.3));
  const build0=Z.build,update0=Z.update,TY=typeDe(Z),FAM=FAM_PAR_TYPE[TY],RP=REPERE_POS[TY];let fams=[];
  const LANDMARK=[['fleche','fleche',matV,-1],['tour',RP,matV,1],['couronne',RP==='tour'?'couronne':'couronne_'+RP,matB,1]];
  Z.build=()=>{build0();fams=[];
    const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));
    /* lanternes et poteaux partagent leurs places */
    const places={};
    for(const[k,g,mat,side,n0,sz,glow,tm]of FAM){const it=inst(geoD[g],mat,false);it.k=k;it.side=side;it.glow=glow;it.tm=tm;fams.push(it);
      if(!geoD[g].boundingBox)geoD[g].computeBoundingBox();const hg=geoD[g].boundingBox.max.y;
      const n=Math.round(n0*Math.min(2,SC*SC/4)*(Z.plus?1:1.6)),src=k==='lanterne'?places.poteau:null;
      if(src){for(const o of src)it.add(o.x,0,o.z,1,1,1,0,0,0,{u:o.e.u,v:o.e.v,th:o.e.th});it.make();continue}
      let t=0;while(it.a.length<n&&t++<n*40){
        /* la moitié autour de la Pierre (35 à 110 m), où le joueur regarde ; le reste partout dans la tuile */
        let u,v;if(Z.plus&&it.a.length%2===0){const a=rnd()*TAU,r=rr(35,110);u=-20+Math.cos(a)*r;v=Math.sin(a)*r}else{u=rr(-R,R);v=rr(-R,R)}
        if(!ok0(u,v,10))continue;const s=rr(sz[0],sz[1]),h=HAUT.has(k)?Math.max(5,hg*s):hg*s,bas=BAS.has(k);
        /* boucle 5 : dans le couloir d'arrivée, l'objet est retiré au sort ailleurs (même nombre, même seuil de palier) */
        if(!ok(u,v,10,h,bas)){const q=ailleurs(f=>{const c=place(R,it.a.length%2===0,f);return ok(c[0],c[1],10,h,bas)?c:null});if(!q)continue;u=q[0];v=q[1]}
        const p=Z.w(u,v);
        it.add(p[0],0,p[1],s,s,s,rnd()*TAU,k==='ruine'||k==='souche'||k==='pieu'?rr(-.12,.12):0,k==='souche'||k==='aiguille'||k==='pieu'?rr(-.25,.25):0,{u,v,th:rnd()})}
      it.make();if(k==='poteau')places.poteau=it.a}
    /* les trois grands repères, à 120° les uns des autres autour de la Pierre : on en voit toujours un */
    for(const[k,g,mat,side]of LANDMARK){const it=inst(geoD[g],mat,mat!==matB);it.k=k;it.side=side;it.glow=mat===matB?3:0;it.repere=1;fams.push(it);
      for(let i=0;i<3;i++){const a=i*TAU/3+zi*.7;let r=Z.plus?78:R*.7,u,v;for(let j=0;j<8;j++){u=cx+Math.cos(a)*r;v=Math.sin(a)*r;if(ok(u,v,18))break;r*=Z.plus?.8:.93}
        const p=Z.w(u,v);it.add(p[0],0,p[1],1,1,1,a+(side<0?.6:0),side<0?.12:0,side<0?-.1:0,{u,v,th:i*.12})}
      it.make()}};
  Z.update=lv=>{update0(lv);const an=wneg(lv),ap=wpos(lv);
    /* la végétation du biome : penchée, rabougrie vers −7 ; redressée et plus haute vers +7 */
    for(const it of Z.props||[]){if(PRIGIDE.has(it.k))continue;   /* rochers, pics, blocs, séracs… restent droits */
      it.set(o=>{if(an>.2&&o.r<an*.55)return .0001;if(o.rz0===undefined){o.rz0=o.rz;o.rx0=o.rx}o.rz=o.rz0+an*.5*(o.r-.5);o.rx=o.rx0+an*.3*(o.r*7%1-.5);
          return[(1+ap*.35)*(1-an*.25),(1+ap*.7)*(1-an*.45),(1+ap*.35)*(1-an*.25)]},
        (o,i,c)=>{const b=LIN(PBASE[it.k]||'#ffffff');mix3(c,b,[.12,.1,.09],an*.75);if(ap>0)mix3(c,c,cP,ap*.4);if(PLUM.has(it.k)){const e=1+ap*1.6;c[0]*=e;c[1]*=e;c[2]*=e}})}
    for(const it of fams){const w=it.side<0?an:ap;
      for(const o of it.a){o.y=groundZ(Z,o.x,o.z,lv)-(it.repere?.6:.15)}
      it.set(o=>{/* chaque objet a son seuil : plus on s'éloigne de zéro, plus il y en a ; les repères n'apparaissent qu'à partir de ±3 */
          const th=it.repere?.36+o.e.th:.05+o.e.th*.85,k=sst(th,th+.14,w);return k<.02?.0001:(it.repere?.35+.65*k:k)},
        (o,i,c)=>{if(it.glow){const e=it.glow*(.6+.4*w);const b=it.side<0?cN2:cP2;c[0]=b[0]*e;c[1]=b[1]*e;c[2]=b[2]*e;return}
          if(it.tm)mix3(c,cBlanc,it.side<0?cN2:cP,it.tm);else if(it.k==='banniere'||it.k==='fleur'){mix3(c,cBlanc,cP,.85)}else if(it.k==='tour'){mix3(c,cBlanc,cP,.18)}else{mix3(c,cBlanc,cN,.35)}});
      tasser(it)}};
})();
})();
