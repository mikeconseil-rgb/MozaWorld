/* MozaWorld TV 2.0 : les nouvelles tuiles de la carte agrandie (CARTE_PLUS, généré par tools/carte).
   Une seule recette paramétrée par le biome et le type de mana : relief, couleurs, ciel, végétation,
   et un vrai écart entre les deux pôles (−7 assombri et crevassé, +7 lumineux et soulevé en gradins).
   Les nouvelles tuiles reprennent l'épreuve, les gardiens et la carte de combat de leur type, à leur nom.
   Zones-biomes (19 nov. 2026) : les 24 biomes de la liste des 986 ont chacun leur recette (12 de plus : Volcan, Mangrove,
   Jungle, Archipel, Haute montagne, Glacier, Forêt de champignons géants, Marais, Désert de sel, Iles flottantes, Savane, Toundra),
   et chaque zone reçoit une signature tirée de son identifiant et de sa culture (sigZone) : palette décalée, relief à son échelle
   et à sa forme, mélange et densité d'objets propres, et un repère architectural de sa culture. Aucune passe de rendu en plus. */
const hexMix=(a,b,t)=>{const A=parseInt(a.slice(1),16),B=parseInt(b.slice(1),16),f=s=>Math.round(lerp((A>>s)&255,(B>>s)&255,t));
  return'#'+((1<<24)|(f(16)<<16)|(f(8)<<8)|f(0)).toString(16).slice(1)};
const pole5=(c,neg,pos)=>[hexMix(c,neg,.72),hexMix(c,neg,.38),c,hexMix(c,pos,.3),hexMix(c,pos,.58)];
/* teintes des deux pôles selon le mana de la tuile */
const PMANA={Feu:['#2e1410','#ffcf7a'],Glace:['#161d2b','#dff3ff'],Eau:['#0f2226','#86f0dc'],Sève:['#241f12','#c4f27a'],Pierre:['#221f1c','#f6e2b4'],Vent:['#221d2b','#eadcff']};
/* relief : f(u, v, n1, n2, n3, S) renvoie la hauteur de base (u, v tournés selon la signature, S = signature de la zone) ;
   f peut poser FX.k (0 à 1) : part de la couleur spéciale du biome (fx), qui luit si fxg > 0 (lave, glace bleue des crevasses…).
   Options : mer (niveau où l'eau s'aplanit), plage (liseré de rivage), neige (altitude des neiges), ech (taille des objets), pr (rayons du replat autour de la Pierre), fn (brume à −7, en multiple de fog ; 2,6 sinon).
   props : [sorte, nombre] toujours là ; extra : sortes dont la signature en choisit une (ou aucune) ;
   wn/wc : météo (neige, cendre, spores…). */
const FX={k:0};
const BIO={
  'Forêt boréale':{g:'#4a5a3c',g2:'#7a7a62',eau:'#3a5466',top:'#6f8494',hor:'#c4cdd0',sun:'#e8eef2',fog:.0042,wn:.3,wc:'#f4f6f8',
    f:(u,v,n1,n2)=>(n1-.45)*14+(n2-.5)*2,props:[['pin',190],['rocher',30]],extra:[['feuillu',40],['fougere',60],['arbremort',25]]},
  'Fjord':{g:'#55625a',g2:'#8c9690',eau:'#2c4c66',top:'#5f7890',hor:'#b8c8d4',sun:'#dde8f0',fog:.005,wn:.2,wc:'#eef4f8',
    f:(u,v,n1)=>{const d=Math.abs(v+22*Math.sin(u*.02));return d<26?-3:Math.min(12,(d-26)*.28)+(n1-.5)*5},props:[['pin',90],['rocher',60]],extra:[['pic',18],['buisson',60]]},
  'Canyon':{g:'#b0603a',g2:'#d49a66',eau:'#6a3a28',top:'#7a9ac0',hor:'#f0c8a0',sun:'#ffe0b0',fog:.0026,wn:.08,wc:'#e8b080',
    f:(u,v,n1,n2,n3)=>{const t=(n1-.38)*26;return(t>0?4*Math.floor(t/4)+4*sst(.75,1,(t/4)%1):t*.3)-(n3<.1?4*sst(.1,.02,n3):0)},props:[['rocher',70],['cactus',22]],extra:[['pic',20],['buisson',50]]},
  'Désert de sable':{g:'#d6b47a',g2:'#e8cf98',eau:'#b08850',top:'#6e9ad0',hor:'#f4dcb0',sun:'#fff0c8',fog:.0024,wn:.12,wc:'#f0d8a8',
    f:(u,v,n1)=>3.2*Math.sin(u*.05+n1*7)+(n1-.5)*7,props:[['cactus',30],['rocher',18]],extra:[['palmier',14],['acacia',10]]},
  'Oasis':{g:'#cdb07a',g2:'#7ea052',eau:'#3a8a8a',top:'#5f9ad8',hor:'#f2e0b8',sun:'#fff2d0',fog:.0026,wn:.05,wc:'#ffffff',
    f:(u,v,n1)=>{const r=Math.hypot(u-40,v-30);return r<24?-2.4*sst(24,14,r):2*Math.sin(u*.045+n1*6)+(n1-.5)*5},props:[['palmier',55],['roseau',60],['rocher',10]],extra:[['fougere',40],['acacia',12]]},
  'Cité en ruines':{g:'#8a8270',g2:'#a89c80',eau:'#4a4a40',top:'#7c8a9a',hor:'#d0c8b8',sun:'#f0e4cc',fog:.0036,wn:.15,wc:'#d8d0c0',
    f:(u,v,n1,n2)=>(n1-.5)*4+(n2-.5)*1.5,props:[['colonne',60],['mur',40],['rocher',20]],extra:[['feuillu',25],['arbremort',20]]},
  'Récif':{g:'#d8c8a0',g2:'#4fa0a0',eau:'#2a7a9a',top:'#4f9ad8',hor:'#c8eef0',sun:'#fff8e0',fog:.003,wn:.04,wc:'#ffffff',
    f:(u,v,n1,n2,n3)=>(n1-.5)*5-(n3<.14?2.6*sst(.14,.04,n3):0),props:[['corail',120],['rocher',30]],extra:[['palmier',20],['pic',10]]},
  'Cavernes cristallines':{g:'#4a4458',g2:'#6c6488',eau:'#2a2a48',top:'#2a2a44',hor:'#6a6890',sun:'#c8c0ff',fog:.0065,wn:.25,wc:'#c8d0ff',
    f:(u,v,n1,n2,n3)=>(1-n3)*7-4+(n1-.5)*6,props:[['cristal',120],['rocher',40]],extra:[['pic',24],['champilum',50]]},
  'Lande':{g:'#6a5a6a',g2:'#8a7a5a',eau:'#3a4a4a',top:'#6a7484',hor:'#b8b0b0',sun:'#e8dcd0',fog:.005,wn:.35,wc:'#e0e0e8',
    f:(u,v,n1)=>(n1-.4)*10,props:[['roseau',130],['rocher',40]],extra:[['buisson',80],['arbremort',14]]},
  'Steppe':{g:'#a09a5a',g2:'#c4b47a',eau:'#5a6a5a',top:'#6a94c8',hor:'#e4e0c0',sun:'#fff4d8',fog:.0024,wn:.18,wc:'#e8e4d0',
    f:(u,v,n1)=>(n1-.45)*6,props:[['roseau',150],['rocher',20]],extra:[['buisson',60],['feuillu',12]]},
  'Delta fluvial':{g:'#5a7a44',g2:'#8a8a5a',eau:'#3a7a8a',top:'#6a9ac8',hor:'#d8e4d8',sun:'#f8f0d8',fog:.0034,wn:.1,wc:'#ffffff',
    f:(u,v,n1,n2,n3)=>(n1-.5)*3-(n3<.16?2.2*sst(.16,.05,n3):0),props:[['roseau',110],['feuillu',35]],extra:[['palmier',16],['paletuvier',20]]},
  'Falaise côtière':{g:'#7a8a5a',g2:'#a8a08a',eau:'#3a6a8a',top:'#6a94c0',hor:'#d0dce4',sun:'#f4f0e4',fog:.0034,wn:.3,wc:'#ffffff',
    f:(u,v,n1)=>sst(-70,50,u)*10+(n1-.5)*4,props:[['rocher',60],['roseau',70]],extra:[['pin',30],['pic',14]]},
  /* ---- les douze biomes ajoutés (zones-biomes) ---- */
  /* Volcan : un cône au cratère de lave, ravines rayonnantes et coulées qui luisent, cendre qui tombe */
  'Volcan':{g:'#2e2826',g2:'#5e524a',eau:'#3a2a24',top:'#5e5250',hor:'#a88068',sun:'#ffc890',fog:.0042,fn:1.4,wn:.32,wc:'#5a5250',fx:'#ff5a14',fxg:1.5,
    f:(u,v,n1,n2,n3,S)=>{const du=u-S.au,dv=v-S.av,r=Math.hypot(du,dv),R=S.ar,H=40*S.ah,a=Math.atan2(dv,du);
      const ravine=1-.16*Math.pow(Math.abs(Math.sin(a*6+n1*5)),3)*sst(.25*R,.7*R,r);
      let h=(n1-.5)*5+(n2-.5)*1.2+H*Math.pow(clamp(1-r/R,0,1),1.35)*ravine;
      const rc=R*.16;if(r<rc){h-=(rc-r)*1.7;FX.k=sst(rc*.75,rc*.45,r)}                        /* le cratère et son lac de lave */
      else FX.k=r<R*1.25?sst(.075,.025,n3)*sst(R*1.25,R*.9,r):0;                             /* coulées le long des lignes de bruit */
      return h},
    props:[['rocher',70],['fumerolle',26],['pic',22]],extra:[['arbremort',20],['buisson',50]]},
  /* Mangrove : eau plate et brune, chenaux tressés et lagunes, palétuviers sur leurs racines en arceaux jusque dans l'eau */
  'Mangrove':{g:'#5a4a32',g2:'#56703a',eau:'#4a6a70',top:'#6a8a88',hor:'#c8d4b8',sun:'#fff0c8',fog:.0044,pr:[12,22],wn:.12,wc:'#e8f0d8',mer:-.5,plage:'#6a5a3a',
    f:(u,v,n1,n2,n3)=>.7+(n1-.5)*3+(n2-.5)*.6-2.8*sst(.2,.07,n3)-2.6*sst(.45,.37,n1)-2.2*sst(.5,.62,vnoise(u*.02+17,v*.02+4)),
    props:[['paletuvier',120],['roseau',90]],extra:[['fougere',60],['palmier',20],['arbremort',18]]},
  /* Jungle : collines raides, ravines où coule l'eau, pitons karstiques drapés de vert, canopée dense et fougères */
  'Jungle':{g:'#2a4a24',g2:'#4a7230',eau:'#2a5a50',top:'#7a9a8c',hor:'#c8d8c0',sun:'#fff6d8',fog:.0042,pr:[30,72],ech:1.45,wn:.06,wc:'#f0fff0',
    f:(u,v,n1,n2,n3)=>(n1-.42)*16+(n2-.5)*2.5-7*sst(.12,.03,n3)+26*sst(.56,.64,n1),
    props:[['feuillu',115],['fougere',110],['palmier',30]],extra:[['champilum',40],['paletuvier',30],['rocher',20]]},
  /* Archipel : mer turquoise et plate, îlots bordés de sable, aiguilles rocheuses dressées dans l'eau */
  'Archipel':{g:'#d8c890',g2:'#5a9a4a',eau:'#1f8aa8',top:'#4a9ae0',hor:'#d0f0f4',sun:'#fff8e0',fog:.0026,wn:.04,wc:'#ffffff',mer:-.6,plage:'#efe2b0',
    f:(u,v,n1,n2)=>(n1-.53)*30+(n2-.5)*2,
    props:[['palmier',70],['pic',26],['rocher',30]],extra:[['corail',60],['fougere',40],['acacia',14]]},
  /* Haute montagne : pics et arêtes, neiges éternelles au-dessus de 26 m, pins nains en bas, aiguilles rocheuses */
  'Haute montagne':{g:'#5f6a4a',g2:'#7a776c',eau:'#3a5468',top:'#5a86c0',hor:'#d0deee',sun:'#fff4e8',fog:.0022,fn:1.7,pr:[40,130],wn:.22,wc:'#ffffff',neige:22,
    f:(u,v,n1,n2,n3)=>1.5+48*Math.pow(sst(.5,.82,n1),1.4)+8*(1-n3)*sst(.45,.65,n1)+(n2-.5)*3,
    props:[['pic',40],['rocher',60],['pin',60]],extra:[['buisson',50],['glacon',14]]},
  /* Glacier : glace ondulée fendue de crevasses bleues parallèles, séracs et aiguilles de glace */
  'Glacier':{g:'#d6e2ec',g2:'#a8c4dc',eau:'#3a6a9a',top:'#5a8ac8',hor:'#e0eef8',sun:'#ffffff',fog:.003,wn:.3,wc:'#ffffff',fx:'#0f4fa8',fxg:.35,
    f:(u,v,n1,n2)=>{const t=v/26+.3*Math.sin(u*.012+n1*3),d=Math.abs(t-Math.round(t))*26,seg=sst(.4,.5,n2*.4+n1*.8);
      const c=sst(4,1.4,d)*seg;FX.k=sst(4.6,2.2,d)*seg;return(n1-.5)*10+2*Math.sin(u*.03)-7*c},
    props:[['glacon',70],['rocher',24]],extra:[['pic',16],['blocsel',20]]},
  /* Forêt de champignons géants : chapeaux larges sur pieds pâles, petits champignons qui luisent, mousse violette, spores */
  'Forêt de champignons géants':{g:'#4a3a58',g2:'#6a7a4a',eau:'#3a3050',top:'#4a4070',hor:'#a898b8',sun:'#ffe8d0',fog:.0058,ech:1.2,wn:.38,wc:'#d8ffb0',
    f:(u,v,n1,n2)=>(n1-.5)*8+(n2-.5)*1.6+2.4*Math.sin(u*.06+n1*4)*Math.cos(v*.05),
    props:[['champignon',70],['champilum',80],['fougere',60]],extra:[['arbremort',20],['rocher',30]]},
  /* Marais : eau noire en flaques et chenaux, cyprès chauves drapés de mousse, roseaux serrés, brume basse */
  'Marais':{g:'#5a5634',g2:'#6e6a3c',eau:'#24343a',top:'#6a7068',hor:'#9aa088',sun:'#e8e4c0',fog:.0048,pr:[12,22],wn:.14,wc:'#d8e0c8',mer:-.35,plage:'#3a3a26',
    f:(u,v,n1,n2,n3)=>.5+(n1-.5)*2.4+(n2-.5)*.6-1.8*sst(.42,.54,vnoise(u*.028+3,v*.028+11))-2*sst(.14,.05,n3),
    props:[['arbremort',80],['roseau',200]],extra:[['buisson',60],['paletuvier',24],['champilum',30]]},
  /* Désert de sel : plaine blanche craquelée en polygones (sol.js), miroirs d'eau saumâtre, buttes lointaines, blocs de sel */
  'Désert de sel':{g:'#d6d0c8',g2:'#e8e4de',eau:'#9ab8cc',top:'#5a8ad0',hor:'#eef0f2',sun:'#fffaf0',fog:.0018,wn:.05,wc:'#ffffff',mer:-.12,
    f:(u,v,n1,n2)=>(n1-.5)*1.6+(n2-.5)*.3-.5*sst(.62,.7,n2)+16*sst(.7,.74,n1),
    props:[['blocsel',70],['rocher',14]],extra:[['pic',10],['buisson',30]]},
  /* Iles flottantes : plateaux en gradins séparés par des gouffres, îles suspendues au-dessus du vide */
  'Iles flottantes':{g:'#4f8a44',g2:'#7a9a5a',eau:'#2a3050',top:'#6a90d8',hor:'#e0e8f8',sun:'#fff4e0',fog:.003,fn:1.8,pr:[30,72],vide:1,wn:.08,wc:'#ffffff',
    f:(u,v,n1,n2)=>n1>.5?3+4*Math.floor(sst(.5,.72,n1)*3)+(n2-.5)*1.2:-16*sst(.5,.43,n1),
    props:[['ileflot',22],['feuillu',60],['rocher',30]],extra:[['fougere',50],['pin',30],['champilum',30]]},
  /* Savane : herbe dorée, acacias en parasol, kopjes de granit arrondis, termitières */
  'Savane':{g:'#b89a50',g2:'#a08a48',eau:'#5a6a4a',top:'#5a90d0',hor:'#f0dcb0',sun:'#fff0c8',fog:.0024,wn:.1,wc:'#f0e0b8',
    f:(u,v,n1)=>{const k=vnoise(u*.022+31,v*.022+7);return(n1-.45)*5+12*sst(.74,.9,k)},
    props:[['acacia',50],['roseau',170],['termitiere',26]],extra:[['rocher',40],['buisson',40],['palmier',10]]},
  /* Toundra : plaine basse en polygones de gel (sol.js), pingos, mares de dégel, blocs erratiques et buissons ras */
  'Toundra':{g:'#76704e',g2:'#8a6a4a',eau:'#3a5060',top:'#7088a0',hor:'#d0d8dc',sun:'#f4f0e8',fog:.0034,wn:.26,wc:'#ffffff',mer:-.3,fx:'#e4e8ea',fxg:0,
    f:(u,v,n1,n2)=>{const p=vnoise(u*.03+5,v*.03+9);FX.k=.85*sst(.6,.7,vnoise(u*.017+40,v*.017+2));   /* plaques de neige tardive */
      return(n1-.5)*5+(n2-.5)*1+9*sst(.8,.95,p)-1.6*sst(.4,.34,n1)},
    props:[['buisson',140],['rocher',60]],extra:[['pin',24],['glacon',10],['roseau',60]]}};

/* formes de végétation et d'objets, partagées par toutes les nouvelles tuiles (géométries simples fusionnées, instanciées) */
const latG=(pts,n)=>new THREE.LatheGeometry(pts.map(p=>new THREE.Vector2(p[0],p[1])),n);
const PG={
  pin:merge([[new THREE.ConeGeometry(2.6,5.5,7).translate(0,4.6,0),0x2f5a3a],[new THREE.ConeGeometry(1.9,4.4,7).translate(0,7.6,0),0x3a6a44],[cyl(.3,.4,2.2,5,0,1.1,0),0x4a3424]]),
  feuillu:merge([[new THREE.IcosahedronGeometry(2.8,0).scale(1,.9,1).translate(0,5.4,0),0x4f8a3a],[cyl(.3,.45,4,5,0,2,0),0x5a4030]]),
  rocher:new THREE.DodecahedronGeometry(1.6,0).scale(1,.7,1).translate(0,.5,0),
  cactus:merge([[cyl(.45,.5,4.4,7,0,2.2,0),0x4f7a3a],[cyl(.3,.3,1.6,6,.9,2.8,0).rotateZ(-.2),0x4f7a3a],[cyl(.28,.28,1.3,6,-.8,2.2,0),0x4f7a3a]]),
  palmier:merge([[cyl(.22,.34,7,6,0,3.5,0).rotateZ(.12),0x8a6a44],[new THREE.ConeGeometry(3.4,1.4,7).translate(.4,7.2,0),0x4f9a44]]),
  roseau:new THREE.ConeGeometry(.35,2.2,4).translate(0,1.1,0),
  colonne:merge([[cyl(.6,.7,5.5,8,0,2.75,0),0xd8ccb0],[box(1.7,.5,1.7,0,5.6,0),0xc8bca0]]),
  mur:box(6,2.6,1,0,1.3,0),
  corail:new THREE.IcosahedronGeometry(1.1,0).scale(1,1.5,1).translate(0,.8,0),
  cristal:new THREE.OctahedronGeometry(1,0).scale(.7,2.6,.7).translate(0,2,0),
  /* zones-biomes : les formes des douze nouveaux biomes */
  champignon:merge([[cyl(.55,.85,6.4,6,0,3.2,0),0xe8e0cc],[latG([[3.9,0],[3.3,1.1],[2,2.1],[0,2.55]],8).translate(0,6.1,0),0xb04a6a],
    [new THREE.CircleGeometry(3.85,8).rotateX(PI/2).translate(0,6.1,0),0xf0d8c0]]),
  champilum:merge([[new THREE.ConeGeometry(.12,1.1,4).translate(0,.55,0)],[new THREE.ConeGeometry(.6,.55,6).translate(0,1.2,0)],
    [new THREE.ConeGeometry(.42,.4,6).translate(.7,.8,.3)]]),
  acacia:merge([[cyl(.22,.4,5.4,5,0,0,0).rotateZ(.22).translate(-.55,2.6,0),0x4a3a2a],[cyl(.14,.2,2.6,5,0,0,0).rotateZ(-.6).translate(.5,5,0),0x4a3a2a],
    [cyl(4.4,3.4,.9,8,.6,6.4,0),0x6a7a34],[cyl(2.6,2,.7,7,-1.4,5.9,.8),0x5a6e2e]]),
  paletuvier:merge([[new THREE.IcosahedronGeometry(2.6,0).scale(1.2,.75,1.2).translate(0,6.4,0),0x3a6a34],[cyl(.25,.32,3.4,5,0,4.4,0),0x5a4a38],
    ...[0,1,2,3].map(i=>[new THREE.ConeGeometry(.16,3.8,3,1,true).rotateZ(.62).translate(-1.1,1.5,0).rotateY(i*TAU/4+.3),0x6a5640])]),
  fougere:merge([0,1,2,3,4,5].map(i=>[new THREE.ConeGeometry(.42,2.8,4).scale(1,1,.25).translate(0,1.4,0).rotateZ(.85+(i%2)*.25).rotateY(i*TAU/6),i%2?0x4a8a3a:0x3a7a30])),
  glacon:merge([[new THREE.ConeGeometry(1.5,7.5,5).translate(0,3.6,0),0xd8f0ff],[new THREE.ConeGeometry(.9,4.4,5).rotateZ(.3).translate(1.4,2,.4),0xb8dcf8],
    [new THREE.ConeGeometry(.8,3.6,5).rotateZ(-.35).translate(-1.2,1.6,-.5),0xc8e8ff]]),
  pic:merge([[new THREE.ConeGeometry(2.8,15,6).translate(0,7.3,0),0x6a6660],[new THREE.ConeGeometry(1.9,9,5).rotateZ(-.12).translate(2,4.4,.6),0x5a5650],
    [new THREE.DodecahedronGeometry(1.8,0).scale(1,.6,1).translate(-1.6,.5,.8),0x7a746c]]),
  blocsel:merge([[box(2.4,1.6,2.4,0,.6,0,.3),0xf4f2ee],[box(1.4,1.2,1.4,.9,1.6,.4,.9,.2),0xe8e6e2],[new THREE.ConeGeometry(1.2,1.6,4).translate(-1.4,.8,-.6),0xf8f6f2]]),
  fumerolle:merge([[new THREE.ConeGeometry(1.8,1.8,7).translate(0,.7,0),0x2a2422],[new THREE.IcosahedronGeometry(.9,0).translate(0,2.6,0),0xc8c4c0],
    [new THREE.IcosahedronGeometry(1.3,0).translate(.3,4.6,.1),0xb8b4b0],[new THREE.IcosahedronGeometry(1.8,0).translate(.8,7.2,.3),0xa8a4a2],[new THREE.IcosahedronGeometry(2.2,0).translate(1.5,10.4,.5),0x9a9694]]),
  arbremort:merge([[cyl(.28,1,9,6,0,4.5,0),0x4a4034],[new THREE.ConeGeometry(2.4,1.4,6).translate(.3,8.6,0),0x4a5a34],[new THREE.ConeGeometry(1.8,1.2,6).translate(-.5,6.6,.4),0x4a5a34],
    [cyl(.05,.12,3,4,1.2,6.8,0).rotateZ(.05),0x6a7a5a],[cyl(.05,.12,2.4,4,-1.4,5.4,.3),0x6a7a5a]]),
  ileflot:merge([[new THREE.ConeGeometry(7,10,7).rotateX(PI).translate(0,-5,0),0x6a5a48],[new THREE.ConeGeometry(4,6,6).rotateX(PI).translate(1.5,-11,.5),0x5a4c3e],
    [cyl(7.2,7,1.4,7,0,.7,0),0x5a8a44],[new THREE.ConeGeometry(1.9,4.4,6).translate(-2,3.6,1),0x2f5a3a],[cyl(.2,.3,1.6,5,-2,1.6,1),0x4a3424],
    [new THREE.DodecahedronGeometry(1.2,0).translate(2.6,1.8,-1.5),0x8a8478],[box(.5,7,.2,6.4,-3,0,0,0,.05),0xd8f0ff]]),
  termitiere:merge([[new THREE.ConeGeometry(1.5,5,6).translate(0,2.5,0),0xa0603a],[new THREE.ConeGeometry(.8,2.8,5).translate(.9,1.4,.3),0xb06a40],[new THREE.ConeGeometry(.6,1.8,5).translate(-.7,.9,-.5),0x985838]]),
  buisson:new THREE.IcosahedronGeometry(1,0).scale(1.4,.62,1.4).translate(0,.4,0)};
const PBASE={pin:'#ffffff',feuillu:'#ffffff',rocher:'#8a8478',cactus:'#ffffff',palmier:'#ffffff',roseau:'#a49a5a',colonne:'#ffffff',mur:'#b8ac90',corail:'#e07a6a',cristal:'#9fc8ff',
  champignon:'#ffffff',champilum:'#9affc8',acacia:'#ffffff',paletuvier:'#ffffff',fougere:'#ffffff',glacon:'#ffffff',pic:'#ffffff',blocsel:'#ffffff',fumerolle:'#ffffff',
  arbremort:'#ffffff',ileflot:'#ffffff',termitiere:'#ffffff',buisson:'#7a6a44'};
const PMAT={vc:M(0xffffff,{vertexColors:true}),plein:M(0xffffff),cristal:new THREE.MeshBasicMaterial({color:0xffffff})};
/* objets raides (ni vent, ni ploiement vers −7), objets qui luisent, objets posés aussi dans l'eau ou au-dessus du vide */
const PRIGIDE=new Set(['rocher','mur','colonne','pic','blocsel','glacon','fumerolle','ileflot','termitiere']);
const PLUM=new Set(['cristal','champilum']),PEAU=new Set(['roseau','corail','paletuvier','pic','ileflot']);

/* ---------- Signature de zone : un tirage stable par identifiant et culture ---------- */
const sigHash=s=>{let h=2166136261;for(const ch of String(s))h=Math.imul(h^ch.charCodeAt(0),16777619)>>>0;return h};
const sigAlea=s=>{let a=sigHash(s)||1;return()=>{a=a+0x6D2B79F5>>>0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
/* décalage borné de teinte (degrés), de saturation et de clarté d'une couleur */
const sigTeinte=(h,dh,ks,kl)=>{const c=new THREE.Color(h),o={};c.getHSL(o);c.setHSL((o.h+dh/360+1)%1,clamp(o.s*ks,0,1),clamp(o.l*kl,0,.97));return'#'+c.getHexString()};
function sigZone(Z){const d=Z.d,r=sigAlea(Z.id+'|'+(d.culture||'')+'|'+d.biome),B=BIO[d.biome]||BIO['Steppe'];
  const S={th:r()*TAU,k:.68+r()*.8,ox:r()*900-450,oz:r()*900-450,amp:.75+r()*.6,forme:Math.floor(r()*4),
    dh:(r()<.5?-1:1)*(7+r()*19),ks:.74+r()*.56,kl:.9+r()*.2,dhc:(r()-.5)*36,kc:.82+r()*.4,fog:.78+r()*.5,el:22+r()*24,
    taille:.82+r()*.42,clust:r()<.5,ext:Math.floor(r()*((B.extra||[]).length+1)),dens:[0,1,2,3,4].map(()=>.6+r()*.7),r};
  S.c=Math.cos(S.th);S.s=Math.sin(S.th);S.rot=S.dh*.6;   /* rot : la part du décalage que l'étalonnage et le ciel suivent (styles.js, ciels.js) */
  /* point d'ancrage d'un grand relief (cône du Volcan), devant la Pierre et dans la tuile ; puis repère de culture, ailleurs */
  const pose=(r0,r1,a0,a1,m)=>{for(let j=0;j<40;j++){const a=lerp(a0,a1,r()),rr_=lerp(r0,r1,r()),u=-20+Math.cos(a)*rr_,v=Math.sin(a)*rr_;if(Z.inside(u,v,m))return[u,v]}return[40,0]};
  const [au,av]=pose(125,175,-.75,.75,60);S.ar=Math.min(115,Math.hypot(au+20,av)*.72);S.ah=.85+r()*.35;
  /* f reçoit (u, v) tournés de th : l'ancre l'est aussi */
  S.au=au*S.c+av*S.s;S.av=-au*S.s+av*S.c;
  /* le repère de culture : entre 46 et 64 m de la Pierre, à l'écart des trois repères de pôle (poles-decor.js, à 78 m et 120° d'écart) */
  for(let j=0;j<60;j++){const a=(r()<.5?-1:1)*(.34+r()*.5),rr_=46+r()*18,   /* de biais : la Pierre ne le cache pas */
    u=-20+Math.cos(a)*rr_,v=Math.sin(a)*rr_;
    let ok=Z.inside(u,v,26);for(let i=0;i<3&&ok;i++){const b=i*TAU/3+(Z.i||0)*.7,x=-20+Math.cos(b)*78,y=Math.sin(b)*78;if(Math.hypot(u-x,v-y)<34)ok=false}
    if(ok||j===59){S.ru=u;S.rv=v;S.ry=r()*TAU;break}}
  return S}
/* la forme du relief : on retouche le grand bruit n1 (crêtes, plateaux, contrastes) */
const sigForme=(n,f)=>f===1?lerp(n,.5+(.24-Math.abs(n-.5))*1.5,.5):f===2?.5+.3*Math.tanh((n-.5)*7):f===3?.5+(n-.5)*Math.abs(n-.5)*6:n;

/* ---------- Repères de culture : quelques familles simples, une silhouette par culture, variée par la signature ---------- */
const prisme=(w,h,dz)=>{const g=new THREE.CylinderGeometry(1,1,dz,3);g.rotateX(-PI/2);g.scale(w/1.732,h/1.5,1);return g};   /* fronton : triangle de base w, hauteur h */
const toitCourbe=(r,h,n)=>latG([[r,0],[r*.62,h*.3],[r*.32,h*.68],[.06,h]],n||4).rotateY(PI/4);
const REPERES={
  /* pierres levées : cercle (Celte, avec un dolmen) ou enclos en forme de navire (Nordique, pierre runique au centre) */
  menhirs:(r,v)=>{const P=[],n=v==='navire'?12:8+Math.floor(r()*5),R=10;
    for(let i=0;i<n;i++){const a=i/n*TAU,x=Math.cos(a)*R*(v==='navire'?1.7:1),z=Math.sin(a)*R*(v==='navire'?.55:1),h=v==='navire'?2.4+3.4*Math.abs(Math.cos(a)):3+r()*3.5;
      P.push([box(1.2,h,.8,x,h/2-.3,z,-a+PI/2,0,(r()-.5)*.12),0x8a8a80])}
    if(v==='navire')P.push([box(1.6,5,.6,0,2.2,0),0x6a6660],[box(1.62,.3,.62,0,3.4,0),0xa84a30],[box(1.62,.3,.62,0,2.4,0),0x3a6a9a]);
    else P.push([box(1,2.8,2.6,-1.8,1.1,0),0x7a7870],[box(1,2.8,2.6,1.8,1.1,0),0x7a7870],[box(5.4,.8,3.6,0,2.8,0,.1,.06),0x6e6c66]);
    return P},
  /* arc de triomphe romain, colonnes brisées autour */
  arche:r=>{const P=[[box(3.4,9.5,3.8,-5.3,4.75,0),0xd8ccb0],[box(3.4,9.5,3.8,5.3,4.75,0),0xd8ccb0],[new THREE.TorusGeometry(3.6,.9,5,10,PI).translate(0,9.5,0).scale(1,1,2.1),0xd0c4a8],
      [box(14,.6,4.2,0,11.4,0),0xc8bca0],[box(14,3.2,3.8,0,13.2,0),0xd8ccb0],[box(4.2,2.2,2,0,15.9,0),0x5a7a6a],[box(15,.8,4.6,0,.4,0),0xc0b498]];
    for(let i=0;i<3+Math.floor(r()*3);i++){const a=r()*TAU,d=11+r()*5,h=2+r()*5;P.push([cyl(.6,.66,h,8,Math.cos(a)*d,h/2,Math.sin(a)*d),0xe0d6c0])}return P},
  /* temple grec : soubassement à trois degrés, péristyle, fronton peint */
  temple:r=>{const P=[[box(17,.5,11,0,.25,0),0xd8d2c4],[box(16,.5,10,0,.75,0),0xe0dace],[box(15,.5,9,0,1.25,0),0xe8e2d6]],nc=5+Math.floor(r()*2);
    for(const z of[-3.6,3.6])for(let i=0;i<nc;i++)P.push([cyl(.5,.58,7,8,-6.2+12.4*i/(nc-1),5,z),0xf0ebe0]);
    P.push([box(15,1.2,9,0,9.1,0),0xe8e2d6],[box(15.2,.35,9.2,0,9.75,0),0x3a6aa8],[prisme(15,2.4,9).translate(0,10.9,0),0xe8e2d6],[box(9,6,5.6,0,4.5,0),0xd8cfbe]);return P},
  /* pagode : étages à toits courbes ; Japonaise (bois sombre, torii vermillon) ou Chinoise impériale (piliers rouges, tuiles d'or) */
  pagode:(r,v)=>{const jp=v==='japon',n=3+Math.floor(r()*3),P=[[box(13,1.4,13,0,.7,0),jp?0x8a8478:0xe0d8c8]];let y=1.4,w=8;
    for(let i=0;i<n;i++){const h=i?2.4:3.2;P.push([box(w,h,w,0,y+h/2,0),jp?0xf0ece0:0xa8302a]);if(jp)P.push([box(w+.1,.35,w+.1,0,y+h-.2,0),0x3a2e28]);
      y+=h;P.push([cyl(w*.82,w*.82,.25,4,0,y+.05,0).rotateY(PI/4),jp?0x2e2a28:0x8a2a1a],[toitCourbe(w*.85,2.2).translate(0,y,0),jp?0x3a4048:0xd8a830]);y+=1.1;w*=.8}
    P.push([cyl(.18,.18,4,6,0,y+2,0),0xc8a040],[new THREE.SphereGeometry(.5,6,4).translate(0,y+4.2,0),0xe8c050]);
    if(jp)P.push([cyl(.45,.5,7,7,10.5,3.5,-3),0xc8402a],[cyl(.45,.5,7,7,10.5,3.5,3),0xc8402a],[box(1,.7,9,10.5,7.2,0,0,0,0),0x2a2220],[box(.7,.5,7.4,10.5,5.8,0),0xc8402a]);
    else P.push([box(2.4,3,2.4,-9,1.5,-4),0xc8c0b0],[new THREE.ConeGeometry(1.4,1.8,4).rotateY(PI/4).translate(-9,3.9,-4),0xd8a830]);
    return P},
  /* pyramide à degrés : aztèque (deux temples au sommet), maya (raide, crête faîtière), ziggourat (brique crue, trois rampes), inca (terrasses, disque d'or) */
  degres:(r,v)=>{const P=[],c={azteque:[0xb8a888,0xc8b898],maya:[0xc8c0a8,0xa8a090],ziggourat:[0xb08a5a,0x9a7448],inca:[0x8a8478,0x7a746a]}[v];
    const n=v==='maya'?7:v==='ziggourat'?3:v==='inca'?3:5,W=v==='inca'?20:17,hh=v==='maya'?2.3:v==='ziggourat'?4:v==='inca'?2.2:2.6;let y=0,w=W;
    for(let i=0;i<n;i++){P.push([box(w,hh,w,0,y+hh/2,0),c[i%2]]);y+=hh;w-=W/(n+1.2)}
    const H=y,ang=Math.atan2(H,W/2-w/2);P.push([box(3.4,.5,Math.hypot(H,W/2-w/2)+1,0,H/2,(W/2+w/2)/2,0,ang),v==='ziggourat'?0x8a6a40:0xd8d0c0]);
    if(v==='azteque')P.push([box(3,3.4,3,-1.8,H+1.7,0),0xd8d0c0],[box(3,3.4,3,1.8,H+1.7,0),0xd8d0c0],[prisme(3.4,1.6,3.4).translate(-1.8,H+4.2,0),0xb03a2a],[prisme(3.4,1.6,3.4).translate(1.8,H+4.2,0),0x2a6aa8]);
    if(v==='maya')P.push([box(w,3,w*.8,0,H+1.5,0),0xd0c8b0],[box(w*.8,4.5,.8,0,H+5.2,-.6),0xb8402a]);
    if(v==='ziggourat')P.push([box(w*.7,3,w*.7,0,H+1.5,0),0x2a5aa8],[box(w*.72,.4,w*.72,0,H+3.2,0),0xd8b040]);
    if(v==='inca')P.push([cyl(2.2,2.2,.4,14).rotateX(PI/2).translate(0,H+6.8,0),0xe8b830],[box(1.2,4,1.2,-2.6,H+2,0),0x7a746a],[box(1.2,4,1.2,2.6,H+2,0),0x7a746a],[box(6.6,1,1.4,0,H+4.4,0),0x7a746a]);
    return P},
  /* coupole : persane (iwan, dôme turquoise), moghole (bulbe de marbre, quatre minarets), byzantine (dôme de plomb, demi-dômes), andalouse (arc outrepassé, minaret carré) */
  coupole:(r,v)=>{const P=[],bulbe=(R,y,col)=>[latG([[R,0],[R*1.12,R*.45],[R*.95,R*.95],[R*.5,R*1.4],[.05,R*1.95]],10).translate(0,y,0),col];
    if(v==='perse'){P.push([box(13,7,11,0,3.5,0),0xd8c090],[box(9,13,3,0,6.5,6),0xd8c090],[box(5,9,.4,0,5.5,7.55),0x1f6a8a],[cyl(4.2,4.2,3,12,0,8.5,0),0x2a8a9a],bulbe(4.4,10,0x2aa0a8));
      for(const x of[-4,4])P.push([cyl(.7,.8,17,8,x,8.5,7),0xc8b080],[cyl(1,1,.8,8,x,15.5,7),0x2a8a9a])}
    else if(v==='moghol'){P.push([box(18,1.6,18,0,.8,0),0xe8e0d0],[box(12,8,12,0,5.6,0),0xf2eee6],[cyl(3.8,3.8,2.6,12,0,10.9,0),0xf2eee6],bulbe(4.4,12.2,0xf4f0ea),[new THREE.ConeGeometry(.3,2.4,6).translate(0,22,0),0xd8b040]);
      for(const[x,z]of[[-8,-8],[8,-8],[-8,8],[8,8]])P.push([cyl(.6,.75,15,8,x,8.5,z),0xece6dc],[latG([[.9,0],[1,.4],[.5,1.2],[.05,1.8]],8).translate(x,16,z),0xf4f0ea])}
    else if(v==='byzance'){P.push([box(15,8,15,0,4,0),0xb86a48],[cyl(5,5,3,12,0,9.5,0),0xc87a58],[new THREE.SphereGeometry(5.2,12,5,0,TAU,0,PI/2).translate(0,11,0),0x7a8088],[new THREE.ConeGeometry(.2,2,4).translate(0,17.2,0),0xd8b040]);
      for(const[x,z]of[[-7.5,0],[7.5,0],[0,-7.5],[0,7.5]])P.push([new THREE.SphereGeometry(3,10,4,0,TAU,0,PI/2).translate(x,8,z),0x7a8088])}
    else{P.push([box(16,4.5,1,0,2.25,-6),0xe8d8b8],[box(1,4.5,12,-7.5,2.25,0),0xe8d8b8],[box(1,4.5,12,7.5,2.25,0),0xe8d8b8],
      [box(4.4,20,4.4,-4,10,-3),0xd8b888],[box(3,4,3,-4,22,-3),0xe8d8b8],[new THREE.SphereGeometry(1.5,8,4,0,TAU,0,PI/2).translate(-4,24,-3),0x3a8a5a]);
      for(const x of[-3,1,5])P.push([new THREE.TorusGeometry(1.5,.32,4,10,PI*1.3).rotateZ(-PI*.15).translate(x,3,-5.4),0xc84a3a])}
    return P.filter(Boolean)},
  /* Égypte : obélisques à pointe d'or, pylône à deux tours */
  obelisque:r=>{const P=[];for(const x of[-4,4]){const h=13+r()*4;P.push([cyl(.55,.95,h,4,x,h/2,7).rotateY(0),0xc89a80],[new THREE.ConeGeometry(.78,1.6,4).translate(x,h+.8,7),0xe8c040])}
    for(const x of[-6,6])P.push([cyl(2.4,4.2,12,4,0,0,0).rotateY(PI/4).scale(1,1,.55).translate(x,6,0),0xd8c08a]);
    P.push([box(4,8,2.6,0,4,0),0xc8b07a],[box(4.6,.8,3,0,8.4,0),0x2a5a8a],[box(16,.6,6,0,.3,0),0xc8b07a]);return P},
  /* Éthiopie : stèles d'Aksoum à fausses fenêtres et tête arrondie, hutte au toit de chaume */
  stele:r=>{const P=[];[[-5,12],[0,17+r()*4],[5,10]].forEach(([x,h])=>{P.push([box(2.2,h,1.2,x,h/2,0),0x8a7a6a],[cyl(1.1,1.1,1.2,10,0,0,0).rotateX(PI/2).translate(x,h,0),0x8a7a6a]);
      for(let y=3;y<h-1;y+=2.6)P.push([box(2.3,.35,1.3,x,y,0),0x6a5c4e])});
    P.push([cyl(3,3,2.6,10,-10,1.3,6),0xc8a870],[new THREE.ConeGeometry(3.8,3.2,10).translate(-10,4.2,6),0x9a7a48],[box(11,.5,4,0,.25,0),0x7a6c5e]);return P},
  /* totems : moaï sur leur ahu (Polynésienne) ou inukshuks de pierres plates (Inuit) */
  totem:(r,v)=>{const P=[];if(v==='moai'){P.push([box(16,1.6,3.4,0,.8,0),0x6a6460]);const n=4+Math.floor(r()*3);
      for(let i=0;i<n;i++){const x=-6+12*i/(n-1),s=.85+r()*.3;P.push([box(2*s,4*s,1.4*s,x,1.6+2*s,0),0x5a5450],[box(2.2*s,3.4*s,1.8*s,x,1.6+5.6*s,0),0x5a5450],
        [box(2.3*s,.5*s,.6*s,x,1.6+6.6*s,.9*s),0x4a4440],[box(.5*s,1.4*s,.5*s,x,1.6+5.6*s,1*s),0x4a4440],[cyl(.9*s,1*s,1*s,8,x,1.6+7.8*s,0),0xa84a3a])}}
    else{for(const[x,z,s]of[[0,0,1.4],[-8,3,1],[7,-4,.8]]){P.push([box(.9*s,2.4*s,.9*s,x-.9*s,1.2*s,z),0x7a7a78],[box(.9*s,2.4*s,.9*s,x+.9*s,1.2*s,z),0x7a7a78],
        [box(3.2*s,.9*s,1.2*s,x,2.8*s,z),0x8a8a86],[box(1.4*s,1.6*s,1*s,x,4*s,z),0x6e6e6a],[box(5.4*s,.7*s,.9*s,x,5.1*s,z),0x8a8a86],[box(1*s,1.1*s,1*s,x,6*s,z),0x7a7a78])}}
    return P},
  /* huttes : kraal zoulou (huttes en ruche, palissade ronde) ou campement mongol (yourtes, ovoo de pierres aux rubans bleus) */
  huttes:(r,v)=>{const P=[];if(v==='kraal'){for(let i=0;i<5;i++){const a=i/5*TAU+.3,x=Math.cos(a)*7,z=Math.sin(a)*7,R=2.4+r()*.8;
        P.push([new THREE.SphereGeometry(R,8,4,0,TAU,0,PI/2).scale(1,1.25,1).translate(x,0,z),0xc8a860])}
      for(let i=0;i<22;i++){const a=i/22*TAU;P.push([cyl(.14,.16,2.2,4,Math.cos(a)*12,1.1,Math.sin(a)*12),0x6a5038])}
      P.push([cyl(3.2,3.2,1.2,10,0,.6,0),0x8a6a48])}
    else{for(const[x,z,R]of[[0,0,4.4],[-9,4,3.4],[8,5,3]]){P.push([cyl(R,R,2.6,12,x,1.3,z),0xece6d8],[new THREE.ConeGeometry(R*1.08,R*.55,12).translate(x,2.6+R*.27,z),0xd8d0c0],
        [box(1.2,1.8,.3,x,.9,z+R),0xb03a2a],[cyl(.5,.5,.4,8,x,2.6+R*.56,z),0xb03a2a])}
      P.push([new THREE.ConeGeometry(2.6,4,7).translate(-4,2,-8),0x7a7672],[cyl(.08,.08,6,4,-4,6,-8),0x6a5038],[box(.1,1.4,.8,-4,7.4,-7.5),0x2a6ad8],[box(.1,1.2,.7,-4,6.6,-8.5),0x2a6ad8])}
    return P},
  /* flèches : gothique (tour, pinacles, flèche d'ardoise), campanile vénitien (brique, loge blanche, pointe de cuivre vert), église slave (bulbes) */
  fleche:(r,v)=>{const P=[];
    if(v==='gothique'){P.push([box(10,6,16,0,3,-2),0x9a968c],[prisme(10,5,16).translate(0,8.4,-2),0x4a4e58],[box(6,16,6,0,8,8),0xa8a498],[new THREE.ConeGeometry(3.4,14,8).translate(0,23,8),0x4a4e58]);
      for(const[x,z]of[[-3,5],[3,5],[-3,11],[3,11]])P.push([cyl(.4,.5,4,6,x,18,z),0xa8a498],[new THREE.ConeGeometry(.6,2.6,6).translate(x,21.3,z),0x4a4e58]);
      P.push([new THREE.TorusGeometry(1.6,.3,4,10).translate(0,11,11.05),0x8a2a6a])}
    else if(v==='campanile'){P.push([box(5,22,5,0,11,0),0xa85a3a],[box(5.4,4,5.4,0,24,0),0xf0ece4],[box(5.6,.6,5.6,0,22.1,0),0xe8e2d8],[new THREE.ConeGeometry(3.7,7,4).rotateY(PI/4).translate(0,29.5,0),0x6a9a88],
        [new THREE.IcosahedronGeometry(.6,0).translate(0,33.4,0),0xe8c040],[box(12,5,8,-8,2.5,4),0xd8c8a8],[box(12.2,.5,8.2,-8,5.2,4),0xa85a3a]);
      for(const x of[-12,-8,-4])P.push([new THREE.TorusGeometry(1.2,.25,4,8,PI).translate(x,2.6,8.05),0xf0ece4])}
    else{P.push([box(8,8,12,0,4,0),0xf0ece4],[prisme(8.4,3,12.4).translate(0,9.4,0),0x3a6a5a],[cyl(1.8,1.8,4,8,0,12,1),0xf0ece4],
        [onion.clone().scale(1.9,1.9,1.9).translate(0,14,1),0xd8a830],[cyl(.08,.08,2,4,0,19.5,1),0xd8a830],[box(1.6,.12,.12,0,19.6,1),0xd8a830]);
      for(const[x,z]of[[-3,-4.5],[3,-4.5]])P.push([cyl(.9,.9,2,8,x,9,z),0xf0ece4],[onion.clone().translate(x,10,z),0x2a5ab0])}
    return P},
  /* Khmère : terrasse et cinq tours en épi de maïs disposées en quinconce */
  prang:r=>{const P=[[box(20,1.6,20,0,.8,0),0x8a7c62],[box(15,1.6,15,0,2.4,0),0x9a8a6a]],tour=(x,z,s)=>[latG([[2.4,0],[2.5,2],[2.1,4],[2.2,4.6],[1.6,7],[1.7,7.6],[1,10],[.4,12],[.05,13.4]].map(p=>[p[0]*s,p[1]*s]),8).translate(x,3.2,z),0x9a8a6a];
    P.push(tour(0,0,1.25));for(const[x,z]of[[-5,-5],[5,-5],[-5,5],[5,5]])P.push(tour(x,z,.8));P.push([box(3,4,1.4,0,5,7.4),0x5a5040]);return P}};
/* chaque culture : sa famille et sa variante (les cultures inconnues reçoivent une famille par hachage) */
const CULT_REP={'Celte':['menhirs','cercle'],'Nordique':['menhirs','navire'],'Romaine':['arche'],'Grecque':['temple'],'Japonaise féodale':['pagode','japon'],
  'Chinoise impériale':['pagode','chine'],'Aztèque':['degres','azteque'],'Maya':['degres','maya'],'Mésopotamienne':['degres','ziggourat'],'Inca':['degres','inca'],
  'Perse':['coupole','perse'],'Moghole':['coupole','moghol'],'Byzantine':['coupole','byzance'],'Andalouse':['coupole','andalou'],'Égyptienne':['obelisque'],
  'Éthiopienne':['stele'],'Polynésienne':['totem','moai'],'Inuit':['totem','inukshuk'],'Zouloue':['huttes','kraal'],'Mongole':['huttes','yourtes'],
  'Gothique':['fleche','gothique'],'Vénitienne':['fleche','campanile'],'Slave':['fleche','bulbes'],'Khmère':['prang']};
function repereGeo(cult,r){let e=CULT_REP[cult];if(!e){const k=Object.keys(CULT_REP);e=CULT_REP[k[sigHash(cult)%k.length]]}
  return merge(REPERES[e[0]](r,e[1]))}

for(const Z of ZN)if(Z.plus)(()=>{const d=Z.d,B0=BIO[d.biome]||BIO['Steppe'],[neg,pos]=PMANA[d.mana]||PMANA.Pierre;
  const forme={Citadelle:'Décagone',Donjon:'Pentagone',Ressource:'Hexagone',Antre:'Papillon','Assemblée':'Losange'}[d.type]||'Tuile';
  const pm=d.pm||'Pénurie',pp=d.pp||'Abondance';
  Z.info={nom:d.nom,sur:`${d.type} · ${forme} · ${d.biome} · Inspiration ${d.culture.toLowerCase()}`,pm,pp,
    pal:[`${d.biome} méconnaissable : sol noirci, crevasses, ciel bas. Le pôle ${pm} a tout pris.`,`${d.biome} qui se fend : la couleur s'en va, les premières failles s'ouvrent.`,
      `${d.biome} à l'équilibre, telle que la mosaïque l'a tirée au sort. Mana ${d.mana}.`,`${d.biome} qui s'élève : gradins, veines de lumière, végétation plus haute.`,
      `${d.biome} transfigurée par ${pp} : terrasses lumineuses et ciel clair, méconnaissable.`]};
  /* signature : les couleurs du biome décalées (sol, eau, ciel), bornées pour rester crédibles */
  const S=Z.sig=sigZone(Z),T=(h,k)=>sigTeinte(h,S.dh*(k||1),S.ks,S.kl),C=h=>sigTeinte(h,S.dhc,S.kc,1);
  const B=Object.assign({},B0,{g:T(B0.g),g2:T(B0.g2,.7),eau:T(B0.eau,.5),top:C(B0.top),hor:C(B0.hor),sun:sigTeinte(B0.sun,S.dhc*.5,1,1)});
  const sky=(c,k)=>pole5(c,hexMix(c,neg,k),hexMix(c,pos,k));
  Z.atm=atmo({top:sky(B.top,.6),hor:sky(B.hor,.6),sun:pole5(B.sun,hexMix(B.sun,neg,.5),pos),hs:pole5(B.top,neg,pos),hg:pole5(B.g,neg,B.g2),
    clc:sky(B.hor,.5),wc:pole5(B.wc,'#5a5050',pos),
    sunI:[.5,1,1.5],hI:[.7,.8,.85],fog:[B.fog*S.fog*(B.fn||2.6),B.fog*S.fog,B.fog*S.fog*.55],el:[14,S.el,24],cl:[.95,.5,.25],wn:[Math.min(1,B.wn+.5),B.wn,.12],wv:[3,2,.6],wd:[2,1.5,2],ws:[.3,.26,.22],wI:[.8,1,2.2],
    exp:[.92,1,1.06],bl:[.6,.7,1.1],az:(Z.i*47)%360});
  const gA=ramp(...pole5(B.g,neg,pos)),gB=ramp(...pole5(B.g2,neg,pos)),gW=ramp(...pole5(B.eau,neg,pos)),veine=LIN(pos),fente=LIN(neg);
  const cFx=B.fx?LIN(B.fx):null,cPl=B.plage?LIN(T(B.plage,.5)):null,cNe=LIN('#eef3f8'),cRoc=LIN('#5a5650');
  /* la Pierre (et le monument) se trouve à 20 m du centre, côté intérieur : terrain plat autour ; idem sous le repère de culture */
  const plat=(u,v)=>Math.min(sst(B.pr?B.pr[0]:14,B.pr?B.pr[1]:30,Math.hypot(u+20,v)),sst(13,22,Math.hypot(u-S.ru,v-S.rv)));
  /* bruits de la zone : le grand bruit lu à l'échelle, l'orientation et le décalage de la signature ; mémorisés pour le sommet courant */
  let mx=NaN,mz=NaN,mh=0,mfx=0;const nz=[0,0,0];
  const base=(u,v,x,z)=>{if(x===mx&&z===mz)return mh;
    const X=(x*S.c-z*S.s)*S.k+S.ox,Y=(x*S.s+z*S.c)*S.k+S.oz;nz[0]=sigForme(N1(X,Y),S.forme);nz[1]=N2(X,Y);nz[2]=N3(X,Y);
    FX.k=0;mh=B.f(u*S.c+v*S.s,-u*S.s+v*S.c,nz[0],nz[1],nz[2],S)*S.amp;mfx=FX.k;mx=x;mz=z;return mh};
  const PGU=(u,v)=>{const p=Z.w(u,v);return base(u,v,p[0],p[1])};
  Z.h=(u,v,lv,n1,n2,n3,x,z)=>{const an=wneg(lv),ap=wpos(lv);if(x===undefined){const p=Z.w(u,v);x=p[0];z=p[1]}
    let h=base(u,v,x,z)*(1+.45*(an+ap));n1=nz[0];n2=nz[1];n3=nz[2];
    if(B.mer!==undefined&&h<B.mer)h=B.mer+(h-B.mer)*.04;              /* l'eau s'aplanit */
    h-=an*7*sst(.13,.02,n3)+an*(n2-.5)*4;                       /* pôle négatif : crevasses et sol hérissé */
    h+=ap*6*Math.floor(sst(.5,.78,n1)*3)/3*1.5;                 /* pôle positif : terrasses en gradins */
    return lerp(1,h+1,plat(u,v))};
  Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{const an=wneg(lv),ap=wpos(lv),hb=base(u,v,x,z),fx=mfx;n1=nz[0];n3=nz[2];
    gA(lv,o);gB(lv,tc2);mix3(o,o,tc2,sst(.36,.64,n1));
    const hr=B.mer!==undefined?lerp(1,hb-B.mer,plat(u,v)):h;   /* profondeur vraie sous une eau aplanie (0 = la surface) */
    if(cPl&&hr>-.2&&hr<1.4)mix3(o,o,cPl,sst(1.4,.5,hr)*.8*plat(u,v));
    if(B.neige!==undefined){const k=sst(B.neige-4,B.neige+4,h+(n3-.5)*8);if(k>0){mix3(o,o,cNe,k*(1-an*.5))}}
    let eau=0;if(hr<0){gW(lv,tc2);eau=sst(0,-1.5,hr);mix3(o,o,tc2,eau);if(B.mer!==undefined){const p=sst(-.5,-7,hr);o[0]*=1-.55*p;o[1]*=1-.4*p;o[2]*=1-.25*p}}
    let g=0;if(cFx&&fx>0){mix3(o,o,cFx,fx);g=fx*B.fxg*(1-.5*ap);eau*=1-fx}
    if(B.vide)eau=0;   /* un gouffre n'est pas de l'eau */
    if(an>0)mix3(o,o,fente,an*sst(.16,.04,n3));
    if(ap>0){const k=ap*sst(.08,.01,n3);if(k>0){mix3(o,o,veine,k*.8);g=Math.max(g,k*1.6)}}
    return g>0||eau<=0?g:-.001*eau};   /* lueur négative infime : marque l'eau pour le sol vivant (sol.js), sans rien éteindre */
  Z.grade=(lv,o)=>{const k=clamp(Math.abs(lv)/7,0,1);o.s=lv<0?lerp(1,.55,k):lerp(1,1.15,k);o.c=lerp(1,lv<0?1.12:1.04,k);o.k=0;o.e=1;o.t[0]=o.t[1]=o.t[2]=1;return o};
  /* végétation : un mélange propre à la zone (densités, sorte en plus, bosquets ou semis), loin de la Pierre et du repère ;
     elle grandit, se ternit ou s'illumine selon le pôle */
  const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));Z.props=[];
  const sortes=B0.props.map(([k,n],i)=>[k,n*S.dens[i%5]]),ex=(B0.extra||[])[S.ext];
  if(ex)sortes[sortes.length-1]=[ex[0],ex[1]*S.dens[4]];   /* la sorte tirée remplace la dernière : autant de séries (d'appels de dessin) qu'avant */
  const tot0=B0.props.reduce((a,p)=>a+p[1],0),tot=sortes.reduce((a,p)=>a+p[1],0),kc=Math.min(1,tot0*1.05/tot);   /* densité plafonnée comme avant */
  Z.build=()=>{const cen=[];if(S.clust)for(let j=0;cen.length<8&&j<200;j++){const u=rr(-R,R),v=rr(-R,R);if(Z.inside(u,v,30))cen.push([u,v])}
    for(const[k,n]of sortes){const it=inst(PG[k],PLUM.has(k)?PMAT.cristal:PG[k].attributes.color?PMAT.vc:PMAT.plein);it.k=k;let t=0;
      const nn=Math.round(n*kc*Math.min(SC*SC,12)/4*.75);   /* 2.6 : zones agrandies, densité plafonnée pour rester fluide */
      while(it.a.length<nn&&t++<nn*30){let u,v;
        if(k==='ileflot'&&rnd()<.5){const a=rr(-.9,.9),q=rr(50,150);u=-20+Math.cos(a)*q;v=Math.sin(a)*q}   /* la moitié des îles devant la Pierre */
        else if(cen.length&&k!=='ileflot'&&rnd()<.8){const c=cen[Math.floor(rnd()*cen.length)],a=rnd()*TAU,q=Math.pow(rnd(),.7)*46;u=c[0]+Math.cos(a)*q;v=c[1]+Math.sin(a)*q}else{u=rr(-R,R);v=rr(-R,R)}
        if(!Z.inside(u,v,12)||Math.hypot(u+20,v)<32||Math.hypot(u-S.ru,v-S.rv)<20)continue;const p=Z.w(u,v);
        if(!PEAU.has(k)&&base(u,v,p[0],p[1])<-.8)continue;
        if(k==='pic'&&B.mer!==undefined&&rnd()<.5&&base(u,v,p[0],p[1])>-.5)continue;   /* aiguilles : plutôt dans l'eau */
        const s=rr(.75,1.35)*S.taille*(B.ech||1)*(k==='ileflot'?2:1),i=it.add(p[0],0,p[1],s,s,s,rr(0,TAU),k==='mur'||k==='colonne'?rr(-.08,.08):0,0,{u,v});
        if(k==='ileflot')it.a[i].dy=rr(8,26);}
      it.make();if(PRIGIDE.has(k))it.m.userData.vent=1;Z.props.push(it)}
    /* le repère de culture : une seule pièce instanciée (repérable de loin, écartée hors du champ comme les autres séries) */
    const rg=repereGeo(d.culture,S.r),p=Z.w(S.ru,S.rv),s=.9+S.r()*.3;
    Z.repere=inst(rg,PMAT.vc,true);Z.repere.k='repere';Z.repere.add(p[0],0,p[1],s,s,s,S.ry);Z.repere.make();Z.repere.m.userData.vent=1};
  const cb=LIN('#ffffff'),cBase={};for(const k in PBASE)cBase[k]=LIN(PBASE[k]);const cSom=[.1,.09,.08];
  Z.update=lv=>{const an=wneg(lv),ap=wpos(lv);
    for(const it of Z.props){for(const o of it.a)o.y=groundZ(Z,o.x,o.z,lv)-.2;const b=cBase[it.k];
      it.set((o)=>{const th=o.r;if(an>.2&&th<an*.55)return .0001;return[1+ap*.35,(1+ap*.5)*(1-an*.35),1+ap*.35]},
        (o,i,c)=>{mix3(c,b,fente,an*.7);if(ap>0)mix3(c,c,veine,ap*.45);if(PLUM.has(it.k)){const e=1+ap*1.6;c[0]*=e;c[1]*=e;c[2]*=e}})}
    /* le repère : terni et penché vers −7, rehaussé de la lumière du pôle vers +7 (il reste debout : c'est le repère) */
    const rp=Z.repere;if(rp){const o=rp.a[0];o.y=groundZ(Z,o.x,o.z,lv)-.5;o.rz=an*.06;
      rp.set(()=>[1+ap*.08,1+ap*.12-an*.1,1+ap*.08],(o,i,c)=>{mix3(c,cb,cSom,an*.62);if(ap>0)mix3(c,c,veine,ap*.28)})}};
})();

/* ---------- Tables de jeu des nouvelles tuiles (appelé à la fin de main.js, quand toutes les tables existent) ---------- */
function plusTables(){
  const PFX={CIT:'Rempart',DON:'Sceau',RES:'Gerbe',ANT:'Appel',MAR:'Lot'};
  for(const Z of ZN){if(!Z.plus)continue;const id=Z.id,m=Z.mod,d=Z.d,I=Z.info;
    const court=d.nom.replace(/^(La |Le |Les |L')/,''),deN=d.nom.replace(/^Les /,'des ').replace(/^Le /,'du ').replace(/^La /,'de la ').replace(/^L'/,"de l'");
    const jeu=m==='RES'?'MAR':m;   /* la Récolte se joue dans les îles de Tezcamixtli : ailleurs, une Ressource passe le Chantier */
    const tj=m==='RES'&&typeof CHANTIER!=='undefined'?CHANTIER:TYPE[jeu];TYPE[id]={ep:tj.ep,kind:TYPE[m].kind,txt:tj.txt};GAMES[id]=GAMES[jeu];
    ZMANA[id]=d.mana;ZCOL[id]=MCOL[d.mana]||ZCOL[m];ZCOURT[id]=court;ZPTS[id]=ZPTS[m];MON[id]=MON[m];
    RECO[id]=m==='RES'?`Source de mana ${d.mana} : 1 par cycle, puis 2 au niveau 2, puis 2 et une carte de plus en main au niveau 3.`:RECO[m];
    if(typeof DECOR!=='undefined')DECOR[id]=DECOR[m];if(typeof ART!=='undefined')ART[id]=ART[m];ZA[id]=ZA[m];
    const L=()=>Lz(id),nom=()=>`${PFX[m]} : ${poleN(id,I.pm,I.pp)}`;
    CK[id]=m==='CIT'?{z:id,nom,cout:1,txt:k=>`Tous vos alliés gagnent ${(6+2*L())*contreX(k)} de garde.`,jeu:k=>CB.allies.forEach(u=>u.pv>0&&garder(u,(6+2*L())*contreX(k)))}
      :m==='DON'?{z:id,nom,cout:2,cible:1,txt:k=>`${(10+3*L())*contreX(k)} dégâts.`,jeu:(k,t)=>frappe(t,(10+3*L())*contreX(k))}
      :m==='RES'?{z:id,nom:()=>`Gerbe ${deN}`,cout:0,txt:k=>`Piochez 1 carte, soigne le héros de ${(2+L())*contreX(k)}.`,jeu:k=>{pioche(1);soigner(CB.hero,(2+L())*contreX(k))}}
      :m==='ANT'?{z:id,nom,cout:2,txt:k=>{const b=betePlus(id,k);return`Une bête rejoint le combat : ${b.pv} PV, frappe ${b.atk} à chaque tour.`},jeu:k=>invoquer(betePlus(id,k))}
      :{z:id,nom,cout:0,txt:k=>`Piochez ${2*contreX(k)} cartes${L()>=5?', boost rare : +1 de capacité ce tour':''}.`,jeu:k=>{pioche(2*contreX(k));if(L()>=5){CB.mana++;CB.capT++}}}}
  /* contre-pouvoir : la tuile la plus proche du type que contre la sienne */
  for(const Z of ZN){if(!Z.plus)continue;const cible=CONTRE[Z.mod];let b=null,bd=1e9;
    for(const Q of ZN){if(Q===Z||(Q.mod||Q.id)!==cible)continue;const dd=Math.hypot(Q.c[0]-Z.c[0],Q.c[1]-Z.c[1]);if(dd<bd){bd=dd;b=Q}}
    CONTRE[Z.id]=b?b.id:cible}
  cartesPoles()}
const betePlus=(id,k)=>{const L=Lz(id),x=contreX(k);return{nom:poleN(id,'Luciole de nuit','Lancière de l\'aurore'),pv:(7+3*L)*x,max:(7+3*L)*x,atk:(3+L)*x,g:0,bete:1}};

/* ---------- Cartes propres à chaque pôle (2.0, demande du 17 nov. : « les cartes doivent être différentes selon le pôle choisi,
   reliées au background de la zone et du pôle ») et effet propre à chaque tuile. L = écart à zéro de la zone (1 à 7), x = contre-pouvoir. ---------- */
/* garde-fou (revue impact, 17 nov.) : un chef s'habitue ; une 2e hésitation au tour suivant ne lui retire que son élan */
const hesite=m=>{if(!m||m.pv<=0)return;const t=CB?CB.tour:0;
  if((m.chef||(CB&&CB.cases))&&m.hesT===t-1){if(m.int&&m.int.a==='c'){m.int={a:'a',v:m.atk,ic:'⚔',t:'attaque'};pop(m,'perd son élan','g')}else pop(m,'s\'habitue','g');m.hesT=-9;return}
  m.hesT=t;m.int={a:'h',v:0,ic:'?',t:'hésite'};pop(m,'hésite','g')};
const tous=()=>vivants(CB.foes);
const perdPV=n=>{if(CB.sr)n=Math.max(1,Math.ceil(n/3));CB.hero.pv=Math.max(1,CB.hero.pv-n);pop(CB.hero,'−'+n,'deg');majUnites()};
const bete2=(nom,pv,atk)=>({nom,pv,max:pv,atk,g:0,bete:1});
/* chaque entrée : [nom, coût, cible, texte(L,x), jeu(L,x,t)] */
const POLES={
  /* Berestograd : Oubli (la neige efface tout) / Mémoire (les écorces gravées, les remparts qu'on se rappelle) */
  CIT:[['Neige de l\'oubli',1,0,(L,x)=>`Les ennemis oublient : leur garde tombe et ils subissent ${(1+L)*x} dégâts${L>=4?' ; ils oublient aussi ce qu\'ils allaient faire (hésitent ce tour)':''}.`,(L,x)=>tous().forEach(m=>{m.g=0;if(L>=4)hesite(m);frappe(m,(1+L)*x)})],
       ['Rempart de mémoire',1,0,(L,x)=>`Tous vos alliés gagnent ${(6+2*L)*x} de garde.`,(L,x)=>CB.allies.forEach(u=>u.pv>0&&garder(u,(6+2*L)*x))]],
  /* Neuf Édits : Tyrannie (l'édit qui écrase, même celui qui le prononce) / Liberté (l'édit qui délivre tout le monde) */
  DON:[['Édit de fer',2,1,(L,x)=>`${(12+4*L)*x} dégâts. La cruauté coûte 2 PV au héros.`,(L,x,t)=>{frappe(t,(12+4*L)*x);perdPV(2)}],
       ['Édit de délivrance',2,0,(L,x)=>`${(4+L)*x} dégâts à tous les ennemis, piochez 1 carte.`,(L,x)=>{tous().forEach(m=>frappe(m,(4+L)*x));pioche(1)}]],
  /* Exarchat : Nuit (lucioles qui brûlent vite) / Aurore (lancière qui tient la ligne) */
  ANT:[['Appel : Luciole de nuit',2,0,(L,x)=>`Une luciole rejoint le combat : ${(5+2*L)*x} PV, frappe ${(4+L)*x} à chaque tour. Fragile, mais vive.`,(L,x)=>invoquer(bete2('Luciole de nuit',(5+2*L)*x,(4+L)*x))],
       ['Appel : Lancière de l\'aurore',2,0,(L,x)=>`Une lancière rejoint le combat : ${(10+4*L)*x} PV, frappe ${(2+L)*x}. Le héros gagne 3 de garde.`,(L,x)=>{invoquer(bete2('Lancière de l\'aurore',(10+4*L)*x,(2+L)*x));garder(CB.hero,3)}]],
  /* Givrecloche : Brume (les lots scellés, l'adversaire ne sait plus) / Clarté (les règles neuves écrites à la craie) */
  MAR:[['Lot de brume',1,1,(L,x)=>`Piochez ${x} carte(s). La cible se perd dans la brume : elle hésite ce tour.`,(L,x,t)=>{pioche(x);hesite(t)}],
       ['Lot de clarté',0,0,(L,x)=>`Piochez ${2*x} cartes${L>=5?', boost rare : +1 de capacité ce tour':''}.`,(L,x)=>{pioche(2*x);if(L>=5){CB.mana++;CB.capT++}}]],
  /* La Taïga de Kobor (Donjon) : Mensonge / Vérité */
  DON045:[['Sceau du Mensonge',2,1,(L,x)=>`${(7+3*L)*x} dégâts ; la cible, trompée, hésite ce tour.`,(L,x,t)=>{frappe(t,(7+3*L)*x);hesite(t)}],
          ['Sceau de Vérité',2,1,(L,x)=>`${(9+3*L)*x} dégâts qui ignorent la garde : rien ne cache la vérité.`,(L,x,t)=>{t.g=0;frappe(t,(9+3*L)*x)}]],
  /* Le Fjord de Rames (Donjon) : Cauchemar / Rêve */
  DON024:[['Sceau du Cauchemar',2,0,(L,x)=>`${(2+L)*x} dégâts à tous ; la peur leur retire 1 d'attaque pour le combat.`,(L,x)=>tous().forEach(m=>{frappe(m,(2+L)*x);m.atk=Math.max(1,m.atk-1)})],
          ['Sceau du Rêve',2,1,(L,x)=>`${(7+3*L)*x} dégâts, et le héros, apaisé, se soigne de ${(2+L)*x}.`,(L,x,t)=>{frappe(t,(7+3*L)*x);soigner(CB.hero,(2+L)*x)}]],
  /* Le Canyon de Fjorhel (Assemblée) : Silence / Chant */
  ASS152:[['Loi du Silence',1,0,(L,x)=>`Piochez 1 carte. ${L>=4?'Deux ennemis':'Un ennemi'} se taisent : ils hésitent ce tour.`,(L,x)=>{pioche(1);tous().slice(0,L>=4?2:1).forEach(hesite)}],
          ['Loi du Chant',0,0,(L,x)=>`Piochez 1 carte ; le chant donne ${(2+L)*x} de garde à tous vos alliés.`,(L,x)=>{pioche(1);CB.allies.forEach(u=>u.pv>0&&garder(u,(2+L)*x))}]],
  /* L'Oasis de Raak (Assemblée) : Pierre / Cristal */
  ASS155:[['Loi de Pierre',0,0,(L,x)=>`Le héros gagne ${(5+2*L)*x} de garde, piochez 1 carte.`,(L,x)=>{garder(CB.hero,(5+2*L)*x);pioche(1)}],
          ['Loi de Cristal',0,0,(L,x)=>`Piochez 2 cartes ; la lumière du cristal soigne le héros de ${(1+L)*x}.`,(L,x)=>{pioche(2);soigner(CB.hero,(1+L)*x)}]],
  /* L'Oasis de Maulu (Antre) : Glace / Feu */
  ANT120:[['Appel : Tortue de givre',2,0,(L,x)=>`Une tortue de givre rejoint le combat : ${(12+4*L)*x} PV, frappe ${(1+L)*x}. Le héros gagne 4 de garde.`,(L,x)=>{invoquer(bete2('Tortue de givre',(12+4*L)*x,(1+L)*x));garder(CB.hero,4)}],
          ['Appel : Salamandre d\'oasis',2,0,(L,x)=>`Une salamandre rejoint le combat : ${(5+2*L)*x} PV, frappe ${(5+L)*x} à chaque tour.`,(L,x)=>invoquer(bete2('Salamandre d\'oasis',(5+2*L)*x,(5+L)*x))]],
  /* Les Cavernes de cristal de Balpak (Assemblée) : Cendre / Floraison */
  ASS012:[['Loi des Cendres',0,0,(L,x)=>`${(1+L)*x} dégâts à tous les ennemis, piochez 1 carte.`,(L,x)=>{tous().forEach(m=>frappe(m,(1+L)*x));pioche(1)}],
          ['Loi de Floraison',0,0,(L,x)=>`Tous vos alliés se soignent de ${(2+L)*x}, piochez 1 carte.`,(L,x)=>{CB.allies.forEach(u=>u.pv>0&&soigner(u,(2+L)*x));pioche(1)}]],
  /* La Lande de Cezo (Assemblée) : Corruption / Pureté */
  ASS006:[['Loi de Corruption',0,1,(L,x)=>`La cible perd ${(1+Math.floor(L/2))*x} d'attaque pour le combat. La corruption coûte 2 PV au héros.`,(L,x,t)=>{t.atk=Math.max(1,t.atk-(1+Math.floor(L/2))*x);pop(t,'affaibli','g');perdPV(2)}],
          ['Loi de Pureté',0,0,(L,x)=>`Piochez 2 cartes, le héros se soigne de ${(2+L)*x}.`,(L,x)=>{pioche(2);soigner(CB.hero,(2+L)*x)}]],
  /* Le Delta de Pama (Assemblée) : Ruine / Abondance */
  ASS150:[['Loi de Ruine',0,1,(L,x)=>`La garde de la cible s'effondre, puis ${(3+2*L)*x} dégâts.`,(L,x,t)=>{t.g=0;frappe(t,(3+2*L)*x)}],
          ['Loi d\'Abondance',0,0,(L,x)=>`Piochez ${3*x} cartes${L>=5?', boost rare : +1 de capacité ce tour':''}.`,(L,x)=>{pioche(3*x);if(L>=5){CB.mana++;CB.capT++}}]]};
/* Ressources : pas de pôle (niveaux 1 à 3) ; une gerbe propre à chaque tuile, selon son mana et son biome */
const GERBES={
  RES227:['',1,(L,x,t)=>{pioche(1);frappe(t,(3+2*L)*x)},L=>`Piochez 1 carte, ${3+2*L} dégâts : le sable brûlant.`],
  RES345:['',0,(L,x)=>{pioche(1);tous().forEach(m=>frappe(m,(1+L)*x))},L=>`Piochez 1 carte, ${1+L} dégâts à tous : l'éboulis du canyon.`],
  RES079:['',0,(L,x)=>{pioche(1);CB.allies.forEach(u=>u.pv>0&&garder(u,(3+L)*x))},L=>`Piochez 1 carte, tous vos alliés gagnent ${3+L} de garde : les vieux murs.`],
  RES374:['',0,(L,x)=>{pioche(1);garder(CB.hero,(4+2*L)*x)},L=>`Piochez 1 carte, le héros gagne ${4+2*L} de garde : l'abri des sapins.`],
  RES122:['',0,(L,x)=>{pioche(1);CB.allies.forEach(u=>u.pv>0&&soigner(u,(2+L)*x))},L=>`Piochez 1 carte, tous vos alliés se soignent de ${2+L} : l'eau du récif.`],
  RES021:['',0,(L,x)=>{pioche(1);soigner(CB.hero,(3+2*L)*x)},L=>`Piochez 1 carte, le héros se soigne de ${3+2*L} : la source de l'oasis.`],
  RES212:['',0,(L,x)=>pioche(1+x),L=>`Piochez 2 cartes : le vent de la steppe.`],
  RES136:['',0,(L,x)=>{pioche(1);garder(CB.hero,(3+L)*x);soigner(CB.hero,L*x)},L=>`Piochez 1 carte, le héros gagne ${3+L} de garde et se soigne de ${L} : l'abri de la falaise.`]};
function cartesPoles(){
  for(const id in POLES){const P=POLES[id],L=()=>Math.max(1,Lz(id)),side=()=>(S.lv[id]||0)<0?P[0]:P[1],old=CK[id]||{};
    CK[id]={z:id,nom:()=>side()[0],get cout(){return side()[1]},get cible(){return side()[2]},
      txt:k=>side()[3](L(),contreX(k)),jeu:(k,t)=>side()[4](L(),contreX(k),t),poles:P}}
  for(const id in GERBES){if(!ZB[id])continue;const G=GERBES[id],L=()=>Math.max(1,Lz(id)),nom=CK[id].nom;
    CK[id]={z:id,nom,cout:0,cible:G[1],txt:k=>G[3](L()),jeu:(k,t)=>G[2](L(),contreX(k),t)}}
  if(typeof installerCartes22==='function')installerCartes22()}
