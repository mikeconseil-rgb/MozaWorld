/* MozaWorld TV 2.0 : les nouvelles tuiles de la carte agrandie (CARTE_PLUS, généré par tools/carte).
   Une seule recette paramétrée par le biome et le type de mana : relief, couleurs, ciel, végétation,
   et un vrai écart entre les deux pôles (−7 assombri et crevassé, +7 lumineux et soulevé en gradins).
   Les nouvelles tuiles reprennent l'épreuve, les gardiens et la carte de combat de leur type, à leur nom. */
const hexMix=(a,b,t)=>{const A=parseInt(a.slice(1),16),B=parseInt(b.slice(1),16),f=s=>Math.round(lerp((A>>s)&255,(B>>s)&255,t));
  return'#'+((1<<24)|(f(16)<<16)|(f(8)<<8)|f(0)).toString(16).slice(1)};
const pole5=(c,neg,pos)=>[hexMix(c,neg,.72),hexMix(c,neg,.38),c,hexMix(c,pos,.3),hexMix(c,pos,.58)];
/* teintes des deux pôles selon le mana de la tuile */
const PMANA={Feu:['#2e1410','#ffcf7a'],Glace:['#161d2b','#dff3ff'],Eau:['#0f2226','#86f0dc'],Sève:['#241f12','#c4f27a'],Pierre:['#221f1c','#f6e2b4'],Vent:['#221d2b','#eadcff']};
/* relief : f renvoie la hauteur de base ; props : [sorte, nombre] */
const BIO={
  'Forêt boréale':{g:'#4a5a3c',g2:'#7a7a62',eau:'#3a5466',top:'#6f8494',hor:'#c4cdd0',sun:'#e8eef2',fog:.0042,wn:.3,wc:'#f4f6f8',
    f:(u,v,n1,n2)=>(n1-.45)*14+(n2-.5)*2,props:[['pin',190],['rocher',30]]},
  'Fjord':{g:'#55625a',g2:'#8c9690',eau:'#2c4c66',top:'#5f7890',hor:'#b8c8d4',sun:'#dde8f0',fog:.005,wn:.2,wc:'#eef4f8',
    f:(u,v,n1)=>{const d=Math.abs(v+22*Math.sin(u*.02));return d<26?-3:Math.min(12,(d-26)*.28)+(n1-.5)*5},props:[['pin',90],['rocher',60]]},
  'Canyon':{g:'#b0603a',g2:'#d49a66',eau:'#6a3a28',top:'#7a9ac0',hor:'#f0c8a0',sun:'#ffe0b0',fog:.0026,wn:.08,wc:'#e8b080',
    f:(u,v,n1,n2,n3)=>{const t=(n1-.38)*26;return(t>0?4*Math.floor(t/4)+4*sst(.75,1,(t/4)%1):t*.3)-(n3<.1?4*sst(.1,.02,n3):0)},props:[['rocher',70],['cactus',22]]},
  'Désert de sable':{g:'#d6b47a',g2:'#e8cf98',eau:'#b08850',top:'#6e9ad0',hor:'#f4dcb0',sun:'#fff0c8',fog:.0024,wn:.12,wc:'#f0d8a8',
    f:(u,v,n1)=>3.2*Math.sin(u*.05+n1*7)+(n1-.5)*7,props:[['cactus',30],['rocher',18]]},
  'Oasis':{g:'#cdb07a',g2:'#7ea052',eau:'#3a8a8a',top:'#5f9ad8',hor:'#f2e0b8',sun:'#fff2d0',fog:.0026,wn:.05,wc:'#ffffff',
    f:(u,v,n1)=>{const r=Math.hypot(u-40,v-30);return r<24?-2.4*sst(24,14,r):2*Math.sin(u*.045+n1*6)+(n1-.5)*5},props:[['palmier',55],['roseau',60],['rocher',10]]},
  'Cité en ruines':{g:'#8a8270',g2:'#a89c80',eau:'#4a4a40',top:'#7c8a9a',hor:'#d0c8b8',sun:'#f0e4cc',fog:.0036,wn:.15,wc:'#d8d0c0',
    f:(u,v,n1,n2)=>(n1-.5)*4+(n2-.5)*1.5,props:[['colonne',60],['mur',40],['rocher',20]]},
  'Récif':{g:'#d8c8a0',g2:'#4fa0a0',eau:'#2a7a9a',top:'#4f9ad8',hor:'#c8eef0',sun:'#fff8e0',fog:.003,wn:.04,wc:'#ffffff',
    f:(u,v,n1,n2,n3)=>(n1-.5)*5-(n3<.14?2.6*sst(.14,.04,n3):0),props:[['corail',120],['rocher',30]]},
  'Cavernes cristallines':{g:'#4a4458',g2:'#6c6488',eau:'#2a2a48',top:'#2a2a44',hor:'#6a6890',sun:'#c8c0ff',fog:.0065,wn:.25,wc:'#c8d0ff',
    f:(u,v,n1,n2,n3)=>(1-n3)*7-4+(n1-.5)*6,props:[['cristal',120],['rocher',40]]},
  'Lande':{g:'#6a5a6a',g2:'#8a7a5a',eau:'#3a4a4a',top:'#6a7484',hor:'#b8b0b0',sun:'#e8dcd0',fog:.005,wn:.35,wc:'#e0e0e8',
    f:(u,v,n1)=>(n1-.4)*10,props:[['roseau',130],['rocher',40]]},
  'Steppe':{g:'#a09a5a',g2:'#c4b47a',eau:'#5a6a5a',top:'#6a94c8',hor:'#e4e0c0',sun:'#fff4d8',fog:.0024,wn:.18,wc:'#e8e4d0',
    f:(u,v,n1)=>(n1-.45)*6,props:[['roseau',150],['rocher',20]]},
  'Delta fluvial':{g:'#5a7a44',g2:'#8a8a5a',eau:'#3a7a8a',top:'#6a9ac8',hor:'#d8e4d8',sun:'#f8f0d8',fog:.0034,wn:.1,wc:'#ffffff',
    f:(u,v,n1,n2,n3)=>(n1-.5)*3-(n3<.16?2.2*sst(.16,.05,n3):0),props:[['roseau',110],['feuillu',35]]},
  'Falaise côtière':{g:'#7a8a5a',g2:'#a8a08a',eau:'#3a6a8a',top:'#6a94c0',hor:'#d0dce4',sun:'#f4f0e4',fog:.0034,wn:.3,wc:'#ffffff',
    f:(u,v,n1)=>sst(-70,50,u)*10+(n1-.5)*4,props:[['rocher',60],['roseau',70]]}};
/* formes de végétation et d'objets, partagées par toutes les nouvelles tuiles */
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
  cristal:new THREE.OctahedronGeometry(1,0).scale(.7,2.6,.7).translate(0,2,0)};
const PBASE={pin:'#ffffff',feuillu:'#ffffff',rocher:'#8a8478',cactus:'#ffffff',palmier:'#ffffff',roseau:'#a49a5a',colonne:'#ffffff',mur:'#b8ac90',corail:'#e07a6a',cristal:'#9fc8ff'};
const PMAT={vc:M(0xffffff,{vertexColors:true}),plein:M(0xffffff),cristal:new THREE.MeshBasicMaterial({color:0xffffff})};

for(const Z of ZN)if(Z.plus)(()=>{const d=Z.d,B=BIO[d.biome]||BIO['Steppe'],[neg,pos]=PMANA[d.mana]||PMANA.Pierre;
  const forme={Citadelle:'Décagone',Donjon:'Pentagone',Ressource:'Hexagone',Antre:'Papillon','Assemblée':'Losange'}[d.type]||'Tuile';
  const pm=d.pm||'Pénurie',pp=d.pp||'Abondance';
  Z.info={nom:d.nom,sur:`${d.type} · ${forme} · ${d.biome} · Inspiration ${d.culture.toLowerCase()}`,pm,pp,
    pal:[`${d.biome} méconnaissable : sol noirci, crevasses, ciel bas. Le pôle ${pm} a tout pris.`,`${d.biome} qui se fend : la couleur s'en va, les premières failles s'ouvrent.`,
      `${d.biome} à l'équilibre, telle que la mosaïque l'a tirée au sort. Mana ${d.mana}.`,`${d.biome} qui s'élève : gradins, veines de lumière, végétation plus haute.`,
      `${d.biome} transfigurée par ${pp} : terrasses lumineuses et ciel clair, méconnaissable.`]};
  const sky=(c,k)=>pole5(c,hexMix(c,neg,k),hexMix(c,pos,k));
  Z.atm=atmo({top:sky(B.top,.6),hor:sky(B.hor,.6),sun:pole5(B.sun,hexMix(B.sun,neg,.5),pos),hs:pole5(B.top,neg,pos),hg:pole5(B.g,neg,B.g2),
    clc:sky(B.hor,.5),wc:pole5(B.wc,'#5a5050',pos),
    sunI:[.5,1,1.5],hI:[.7,.8,.85],fog:[B.fog*2.6,B.fog,B.fog*.55],el:[14,34,24],cl:[.95,.5,.25],wn:[Math.min(1,B.wn+.5),B.wn,.12],wv:[3,2,.6],wd:[2,1.5,2],ws:[.3,.26,.22],wI:[.8,1,2.2],
    exp:[.92,1,1.06],bl:[.6,.7,1.1],az:(Z.i*47)%360});
  const gA=ramp(...pole5(B.g,neg,pos)),gB=ramp(...pole5(B.g2,neg,pos)),gW=ramp(...pole5(B.eau,neg,pos)),veine=LIN(pos),fente=LIN(neg);
  /* la Pierre (et le monument) se trouve à 20 m du centre, côté intérieur : terrain plat autour */
  const plat=(u,v)=>sst(14,30,Math.hypot(u+20,v));
  Z.h=(u,v,lv,n1,n2,n3)=>{const an=wneg(lv),ap=wpos(lv);let h=B.f(u,v,n1,n2,n3)*(1+.45*(an+ap));
    h-=an*7*sst(.13,.02,n3)+an*(n2-.5)*4;                       /* pôle négatif : crevasses et sol hérissé */
    h+=ap*6*Math.floor(sst(.5,.78,n1)*3)/3*1.5;                 /* pôle positif : terrasses en gradins */
    return lerp(1,h+1,plat(u,v))};
  Z.col=(u,v,lv,h,n1,n2,n3,x,z,o)=>{const an=wneg(lv),ap=wpos(lv);gA(lv,o);gB(lv,tc2);mix3(o,o,tc2,sst(.36,.64,n1));
    if(h<0){gW(lv,tc2);mix3(o,o,tc2,sst(0,-1.5,h))}
    if(an>0)mix3(o,o,fente,an*sst(.16,.04,n3));
    let g=0;if(ap>0){const k=ap*sst(.08,.01,n3);if(k>0){mix3(o,o,veine,k*.8);g=k*1.6}}
    return g};
  Z.grade=(lv,o)=>{const k=clamp(Math.abs(lv)/7,0,1);o.s=lv<0?lerp(1,.55,k):lerp(1,1.15,k);o.c=lerp(1,lv<0?1.12:1.04,k);o.k=0;o.e=1;o.t[0]=o.t[1]=o.t[2]=1;return o};
  /* végétation : posée au hasard dans la tuile, loin de la Pierre ; elle grandit, se ternit ou s'illumine selon le pôle */
  const R=Math.max(...Z.poly.map(p=>{const q=Z.loc(p[0],p[1]);return Math.hypot(q[0],q[1])}));Z.props=[];
  Z.build=()=>{for(const[k,n]of B.props){const it=inst(PG[k],k==='cristal'?PMAT.cristal:PG[k].attributes.color?PMAT.vc:PMAT.plein);it.k=k;let t=0;
      const nn=Math.round(n*SC*SC/4*.75);while(it.a.length<nn&&t++<nn*30){const u=rr(-R,R),v=rr(-R,R);if(!Z.inside(u,v,12)||Math.hypot(u+20,v)<32)continue;const p=Z.w(u,v);
        if(k!=='roseau'&&k!=='corail'&&B.f(u,v,N1(p[0],p[1]),N2(p[0],p[1]),N3(p[0],p[1]))<-.8)continue;
        const s=rr(.75,1.35);it.add(p[0],0,p[1],s,s,s,rr(0,TAU),k==='mur'||k==='colonne'?rr(-.08,.08):0,0,{u,v});}
      it.make();Z.props.push(it)}};
  const cb=LIN('#ffffff'),cBase={};for(const k in PBASE)cBase[k]=LIN(PBASE[k]);
  Z.update=lv=>{const an=wneg(lv),ap=wpos(lv);
    for(const it of Z.props){for(const o of it.a)o.y=groundZ(Z,o.x,o.z,lv)-.2;const b=cBase[it.k];
      it.set((o)=>{const th=o.r;if(an>.2&&th<an*.55)return .0001;return[1+ap*.35,(1+ap*.5)*(1-an*.35),1+ap*.35]},
        (o,i,c)=>{mix3(c,b,fente,an*.7);if(ap>0)mix3(c,c,veine,ap*.45);if(it.k==='cristal'){const e=1+ap*1.6;c[0]*=e;c[1]*=e;c[2]*=e}})}};
})();

/* ---------- Tables de jeu des nouvelles tuiles (appelé à la fin de main.js, quand toutes les tables existent) ---------- */
function plusTables(){
  const PFX={CIT:'Rempart',DON:'Sceau',RES:'Gerbe',ANT:'Appel',MAR:'Lot'};
  for(const Z of ZN){if(!Z.plus)continue;const id=Z.id,m=Z.mod,d=Z.d,I=Z.info;
    const court=d.nom.replace(/^(La |Le |Les |L')/,''),deN=d.nom.replace(/^Les /,'des ').replace(/^Le /,'du ').replace(/^La /,'de la ').replace(/^L'/,"de l'");
    const jeu=m==='RES'?'MAR':m;   /* la Récolte se joue dans les îles de Tezcamixtli : ailleurs, une Ressource passe le Chantier */
    TYPE[id]={ep:TYPE[jeu].ep,kind:TYPE[m].kind,txt:TYPE[jeu].txt};GAMES[id]=GAMES[jeu];
    CNOM[id]=[`${I.pm} ${deN}`,`${I.pp} ${deN}`];
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
  if(m.chef&&m.hesT===t-1){if(m.int&&m.int.a==='c'){m.int={a:'a',v:m.atk,ic:'⚔',t:'attaque'};pop(m,'perd son élan','g')}else pop(m,'s\'habitue','g');m.hesT=-9;return}
  m.hesT=t;m.int={a:'h',v:0,ic:'?',t:'hésite'};pop(m,'hésite','g')};
const tous=()=>vivants(CB.foes);
const perdPV=n=>{CB.hero.pv=Math.max(1,CB.hero.pv-n);pop(CB.hero,'−'+n,'deg');majUnites()};
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
