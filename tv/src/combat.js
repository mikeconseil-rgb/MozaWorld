/* MozaWorld TV : combat au tour par tour (v1).
   Le héros et jusqu'à 3 bêtes alliées affrontent les gardiens d'une zone. Chaque tour : le mana se remplit,
   on pioche jusqu'à 5 cartes, on joue ses cartes, puis les bêtes frappent et les monstres font ce qu'ils ont annoncé.
   Tout se joue à la télécommande : ◀ ▶ choisir, OK jouer, Retour pause. Rien de 3D pendant le combat (léger). */

/* Les mêmes 5 cartes communes pour tout le monde (17 nov. : « cinq cartes uniques », faibles, sans carte de pioche) : assez pour une zone de niveau 0. */
const DEPART=['coup','garde','pieu','caillou','torche'];
const PAQUET_MAX=40;
const ZCOL={CIT:'#c0584c',DON:'#e0782f',RES:'#73b45e',ANT:'#e2cb62',MAR:'#93bede'};
const rgba=(h,a)=>`rgba(${parseInt(h.slice(1,3),16)},${parseInt(h.slice(3,5),16)},${parseInt(h.slice(5,7),16)},${a})`;
const ZCOURT={CIT:'Berestograd',DON:'Neuf Édits',RES:'Tezcamixtli',ANT:'Lucioles',MAR:'Givrecloche'};
const ZPTS={CIT:10,DON:5,RES:6,ANT:8,MAR:4};
const Lz=z=>Math.abs(S.lv[z]||0);
const poleN=(z,a,b)=>(S.lv[z]||0)<0?a:b;
/* Une carte de zone a un effet doublé dans la zone qu'elle contre (même cycle que les épreuves). */
const contreX=(k)=>CB&&!CB.gris&&CK[k].z&&CONTRE[CK[k].z]===CB.Z.id?2:1;
/* Mana gris (2.0) : base infinie. Les cartes communes se paient en gris. Une carte de zone sans assez de mana de son type
   se paie aussi en gris, mais affaiblie : effet −25 %, pas de contre-pouvoir. */
const GRIS_MALUS=.75;
const enGris=k=>!!mtype(k)&&!peutPayer(mtype(k),CK[k].cout);

/* ---------- Cartes de combat ---------- */
const CK={
  /* chaque commune a son crochet de combo (17 nov. : « chaque carte a un impact ») */
  coup:{nom:()=>'Coup de bâton',cout:1,cible:1,txt:()=>'6 dégâts. Sur une cible qui brûle : 10.',jeu:(k,t)=>frappe(t,t&&t.br&&t.br.length?10:6)},
  garde:{nom:()=>'Pas de côté',cout:1,txt:()=>'5 de garde : la Garde se dresse devant le héros. Si elle était déjà levée, elle ne s\'effrite pas au prochain tour.',jeu:()=>{if(gardeU())CB.gardeTient=1;garder(CB.hero,5)}},
  pieu:{nom:()=>'Pieu planté',cout:1,txt:()=>'Un bloqueur de 6 PV prend place sur le terrain : il encaisse les coups et renvoie 2 dégâts à qui le frappe.',jeu:()=>invoquer({nom:'Pieu planté',pv:6,max:6,atk:0,g:0,bete:1,mur:1,epine:2})},
  caillou:{nom:()=>'Jet de pierre',cout:0,txt:()=>'3 dégâts à l\'ennemi qui prend son élan (sinon au hasard) : il perd son élan et hésite.',jeu:()=>{const v=vivants(CB.foes);if(!v.length)return;const m=v.find(x=>x.int&&x.int.a==='c')||v[Math.floor(Math.random()*v.length)];frappe(m,3);if(m.pv>0&&m.int&&m.int.a==='c'){hesite(m);journal(m.nom+' perd son élan.')}}},
  torche:{nom:()=>'Torche',cout:1,cible:1,txt:()=>'2 dégâts, puis 2 de brûlure sur 2 tours. Si la cible brûlait déjà, sa brûlure double (une fois par tour).',jeu:(k,t)=>{if(!t)return;const deja=t.br&&t.br.length;frappe(t,2);if(t.pv<=0)return;t.br=t.br||[];if(deja&&t.brDbl!==CB.tour){t.brDbl=CB.tour;t.br.forEach(b=>b[0]*=2)}t.br.push([CB.gris?1:2,2])}},
  souffle:{nom:()=>'Souffle court',cout:0,txt:()=>'Piochez 1 carte, 2 de garde.',jeu:()=>{pioche(1);garder(CB.hero,2)}},
  CIT:{z:'CIT',nom:()=>poleN('CIT','Palissade d\'oubli','Rempart de mémoire'),cout:1,
    txt:k=>`Tous vos alliés gagnent ${(6+2*Lz('CIT'))*contreX(k)} de garde.`,jeu:k=>CB.allies.forEach(u=>u.pv>0&&garder(u,(6+2*Lz('CIT'))*contreX(k)))},
  DON:{z:'DON',nom:()=>poleN('DON','Édit de fer','Édit de délivrance'),cout:2,cible:1,
    txt:k=>`${(10+3*Lz('DON'))*contreX(k)} dégâts.`,jeu:(k,t)=>frappe(t,(10+3*Lz('DON'))*contreX(k))},
  RES:{z:'RES',nom:()=>'Gerbe de Tezcamixtli',cout:0,
    txt:k=>`Piochez 1 carte, soigne le héros de ${(2+Lz('RES'))*contreX(k)}.`,jeu:k=>{pioche(1);soigner(CB.hero,(2+Lz('RES'))*contreX(k))}},
  ANT:{z:'ANT',nom:()=>poleN('ANT','Appel : Luciole de nuit','Appel : Lancière de l\'aurore'),cout:2,
    txt:k=>{const b=bete(k);return`Une bête rejoint le combat : ${b.pv} PV, frappe ${b.atk} à chaque tour.`},jeu:k=>invoquer(bete(k))},
  MAR:{z:'MAR',nom:()=>poleN('MAR','Lot de brume','Lot de clarté'),cout:0,
    txt:k=>`Piochez ${2*contreX(k)} cartes${Lz('MAR')>=5?', boost rare : +1 de capacité ce tour':''}.`,jeu:k=>{pioche(2*contreX(k));if(Lz('MAR')>=5){CB.mana++;CB.capT++}}}};
const bete=k=>{const L=Lz('ANT'),x=contreX(k);return{nom:poleN('ANT','Luciole de nuit','Lancière de l\'aurore'),pv:(7+3*L)*x,max:(7+3*L)*x,atk:(3+L)*x,g:0,bete:1}};

/* ---------- Gardiens des zones (originaux) : a attaque, g garde, t frappe tout le monde, c charge puis f frappe forte (qui piétine), s soin,
   v vole par-dessus les bloqueurs (frappe le héros), b bélier (double contre la Garde et les bloqueurs) ---------- */
const MON={
  CIT:[{nom:'Pillard des sapins',pv:11,atk:4,mv:'abg'},{nom:'Archère d\'écorce',pv:8,atk:3,mv:'tv'},{nom:'Voïvode sans mémoire',pv:24,atk:5,mv:'agcf',chef:1}],
  DON:[{nom:'Gardien d\'édit',pv:13,atk:3,mv:'gb'},{nom:'Larve de lave',pv:7,atk:4,mv:'a'},{nom:'Scribe-tyran',pv:25,atk:5,mv:'acf',chef:1}],
  RES:[{nom:'Glaneur hagard',pv:9,atk:3,mv:'as'},{nom:'Anguille des canaux',pv:9,atk:4,mv:'avg'},{nom:'Mère des Gerbes',pv:22,atk:4,mv:'sat',chef:1}],
  ANT:[{nom:'Luciole ardente',pv:6,atk:3,mv:'av'},{nom:'Crabe-racine',pv:14,atk:3,mv:'ga'},{nom:'Reine-luciole',pv:23,atk:3,mv:'tacf',chef:1}],
  MAR:[{nom:'Colporteur givré',pv:10,atk:3,mv:'abg'},{nom:'Mâtin de cloche',pv:12,atk:4,mv:'aacf'},{nom:'Prévôt de la Foire',pv:24,atk:5,mv:'gat',chef:1}]};
function monstre(Z,i,faible){const m=(MON[Z.id]||MON[Z.mod])[i],L=Lz(Z.id),mortel=ecartZone(Z)>=5,k=(faible?.7:1)*(mortel?3:1),pv=Math.round(m.pv*(1+.4*L)*k);
  return{nom:m.nom,pv,max:pv,atk:(m.atk+L)*(mortel?2:1),g:0,mv:m.mv,mi:m.chef?0:Math.floor(Math.random()*m.mv.length),chef:m.chef,z:Z.id}}

/* ---------- Puissance du héros : elle vient des zones possédées ---------- */
const sourceMana=()=>prodRessource();          /* tuile Ressource : 1, puis 2, puis 2 + un bonus */
const manaMax=()=>2+sourceMana();
const mainMax=()=>ZN.some(Z=>(Z.mod||Z.id)==='RES'&&S.act[Z.id]&&Lz(Z.id)>=3)?6:5;                  /* le bonus du niveau 3 : une carte de plus en main */
/* Passifs du royaume (17 nov., « comme les artefacts et le brasier de Monster Train ») : chaque Citadelle possédée donne de l'endurance
   (PV) et lève la Garde au début du combat ; chaque Donjon donne de la résistance (−1 à chaque coup reçu par le héros) et un piège. */
const zonesA=t=>ZN.filter(Z=>(Z.mod||Z.id)===t&&S.own[Z.id]&&S.act[Z.id]);
const pvMax=()=>30+zonesA('CIT').reduce((a,Z)=>a+6+2*Lz(Z.id),0);
const niveauRoyaume=()=>ZN.reduce((a,Z)=>S.own[Z.id]?Math.max(a,Lz(Z.id)):a,0);
/* « à +5 de différence, la mort doit être assurée » : écart entre la zone et la plus haute de vos zones */
const ecartZone=Z=>Lz(Z.id)-niveauRoyaume();
/* Prototype « blessures façon Shadowrun » (17 nov., à tester ; option du menu, S.sr) : le héros a un moniteur de 10 cases (+2 par Citadelle).
   Un coup ennemi a un code puissance + niveau (L 1 case, M 3, S 6, D 10) : puissance 1-4 L, 5-8 M, 9-14 S, 15+ D ; une frappe forte monte d'un niveau.
   Protection = résistance (Donjons) + PV de la Garde encore debout : si elle atteint la puissance, le niveau baisse d'un cran ; le double, aucune blessure.
   Toutes les 3 cases remplies : −1 de capacité de dépense. */
const SR_CASES=[0,1,3,6,10],SR_NOM=['—','L','M','S','D'];
const srActif=()=>S.sr!==false;
function srNiveau(p,fort){let l=p>=15?4:p>=9?3:p>=5?2:1;if(fort)l=Math.min(4,l+1);return l}
function srBlesse(h,p,src){const fort=src&&src.int&&src.int.a==='f',G=gardeU(),prot=(h.res||0)+(G?G.pv:0);let l=srNiveau(p,fort);
  if(prot>=2*p)l=0;else if(prot>=p)l--;const c=SR_CASES[l];h.pv=Math.max(0,h.pv-c);
  pop(h,l?p+SR_NOM[l]+' −'+c:'protégé',l?'deg':'g');journal(`Coup ${p}${SR_NOM[srNiveau(p,fort)]}${l<srNiveau(p,fort)?' ramené à '+SR_NOM[l]+' par la protection':''} : ${c} case${c>1?'s':''}.`);return c}
const srMalus=()=>CB&&CB.sr?Math.floor((CB.hero.max-CB.hero.pv)/3):0;
/* Passifs propres à chaque Antre (17 nov. : « chaque zone est unique, maximiser les différents bonus ») ; les Assemblées agissent sur la carte du monde, pas en combat ;
   un passif par zone et parfois par pôle, actif quand la zone est à vous, activée et au palier 1 ou plus. */
const NOMACT={a:'attaque',g:'se garde',t:'frappe tout le monde',c:'prend son élan',f:'frappe fort',s:'soigne',v:'vole par-dessus',b:'bélier'};
const PASSIFS={
  ANT:Z=>(S.lv[Z.id]||0)<0?{nom:'Essaim de veille',txt:'une Luciole de nuit est déjà sur le terrain',debut:C=>invoquer({nom:'Luciole de nuit',pv:6+2*Lz(Z.id),max:6+2*Lz(Z.id),atk:2+Lz(Z.id),g:0,bete:1})}
    :{nom:'Meute de l\'aurore',txt:'vos bêtes ont +1 d\'attaque',meute:1},
  ANT120:Z=>(S.lv[Z.id]||0)<0?{nom:'Repousse du givre',txt:'la première bête tombée revient avec la moitié de ses PV',repousse:1}
    :{nom:'Crocs de braise',txt:'les coups de vos bêtes brûlent (1 sur 2 tours)',braise:1}};
const passifsZones=()=>ZN.filter(Z=>PASSIFS[Z.id]&&S.own[Z.id]&&S.act[Z.id]&&Lz(Z.id)>=1).map(Z=>PASSIFS[Z.id](Z));
const aPassif=k=>CB&&(CB.pz||[]).some(p=>p[k]);
function remparts(){if(typeof VOISINES==='undefined')return[];const t=Z=>Z.mod||Z.id,ok=Z=>S.own[Z.id]&&S.act[Z.id],out=[];
  for(const A of ZN)if(ok(A)&&t(A)==='CIT')for(const v of VOISINES[A.id]||[]){const B=ZB[v];if(B&&ok(B)&&(t(B)==='DON'||(t(B)==='CIT'&&A.id<B.id)))out.push([A.id,B.id])}return out}

/* ---------- Déroulement ---------- */
/* ce qu'on peut encore dépenser ce tour : la capacité du tour, sans dépasser la réserve */
/* la capacité de dépense par tour est commune à tous les types ; chaque carte se paie dans la réserve de son type */
const mtype=k=>CK[k].z?ZMANA[CK[k].z]:null;
const dispo=()=>CB?Math.max(0,CB.mana):0;
const jouable=k=>CK[k].cout<=dispo();
let CB=null;
const melange=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function startCombat(Z,kind){
  const foes=kind==='eveil'?[monstre(Z,2,S.emp[Z.id]),monstre(Z,Math.random()<.5?0:1,S.emp[Z.id])]
    :Array.from({length:Lz(Z.id)>=3?3:2},()=>monstre(Z,Math.floor(Math.random()*2)));
  const sr=srActif(),mx=sr?10+2*zonesA('CIT').length:pvMax(),hero={nom:'Le héros',pv:mx,max:mx,g:0,hero:1};
  CB={sr,Z,kind,foes,hero,allies:[hero],pile:melange(S.deck.filter(k=>typeof eveillee!=='function'||eveillee(k))),defausse:[],main:[],mana:0,f:0,sel:null,ti:0,busy:true,q:[],tour:0};
  mode='combat';closeUI();document.body.classList.add('jeu-ouvert');$('toast').classList.remove('vu');toastT=0;
  const H=$('combat');H.hidden=false;H.style.setProperty('--zcA',rgba(ZCOL[Z.id],.22));
  $('cb-sur').textContent=(kind==='eveil'?'Activation · les gardiens de la Pierre':'Rencontre')+' · '+Z.info.sur.split(' · ')[0]+' niveau '+(sgn(S.lv[Z.id])||'0');
  $('cb-t').textContent=Z.info.nom;
  $('cb-foes').innerHTML='';$('cb-allies').innerHTML='';
  for(const u of foes)uniteEl(u,'cb-foes');uniteEl(hero,'cb-allies');
  {let i=0;for(const u of foes)if(!u.chef)u.voie=(i++)%2}
  for(const u of foes)intention(u);
  /* passifs du royaume */
  hero.res=zonesA('DON').length;const cits=zonesA('CIT'),dons=zonesA('DON');CB.erosion=cits.length?2/3:1/2;
  if(cits.length)leverGarde(cits.reduce((a,Z)=>a+5+Lz(Z.id),0));
  if(dons.length)for(const m of foes)(m.br=m.br||[]).push([2*dons.length,2]);
  /* Remparts (17 nov.) : deux Citadelles, ou une Citadelle et un Donjon, possédées et voisines ; dans leurs zones et les zones qui les touchent,
     chaque rempart (2 au plus) pose un bloqueur de 10 PV au début du combat */
  const rps=remparts().filter(([x,y])=>x===Z.id||y===Z.id||(VOISINES[x]||[]).indexOf(Z.id)>=0||(VOISINES[y]||[]).indexOf(Z.id)>=0).slice(0,2);
  rps.forEach((r,i)=>invoquer({nom:'Rempart',pv:10,max:10,atk:0,g:0,bete:1,mur:1,voie:i%2}));
  CB.pz=passifsZones();for(const p of CB.pz)if(p.debut)p.debut(CB);
  const pas=[...CB.pz.map(p=>p.nom+' : '+p.txt),cits.length?`Endurance et Garde levée (${cits.length} Citadelle${cits.length>1?'s':''})`:'',dons.length?`Résistance ${hero.res} et piège (${dons.length} Donjon${dons.length>1?'s':''})`:'',rps.length?`${rps.length} rempart${rps.length>1?'s':''}`:''].filter(Boolean);
  CB.passifs=pas;
  journal((ecartZone(Z)>=5?'Gardiens mortels : cette zone dépasse votre royaume de 5 niveaux. ':'')+(kind==='eveil'?'Les gardiens se dressent devant la Pierre d\'éveil.':'Des créatures de la zone vous barrent la route.')+(pas.length?' Passifs : '+pas.join(' · ')+'.':''));
  if(AX&&soundOn)perc(AX.currentTime,'t',1.4);
  attendre(.7,debutTour)}
function attendre(s,fn){CB.q.push([s,fn])}
function cbTick(dt){if(!CB||!CB.q.length)return;CB.q[0][0]-=dt;if(CB.q[0][0]<=0){const f=CB.q.shift()[1];f()}}
function debutTour(){if(!CB)return;CB.tour++;CB.hero.g=0;eroderGarde();CB.riposte=0;CB.defPrix=0;CB.echo=false;CB.nrecup=0;CB.nJoues=0;if(typeof atoutsDebutTour==='function')atoutsDebutTour();CB.mana=CB.capT=Math.max(1,CB.tour-srMalus());if(srMalus())journal('Blessures : −'+srMalus()+' de capacité ce tour.');   /* capacité de dépense : 1 au tour 1, 2 au tour 2… ; le mana lui-même sort de la réserve */
  if(CB.tour===1){if(aPassif('abondance')){CB.mana++;CB.capT++}}
  pioche(mainMax()+(CB.tour===1&&aPassif('vote')?1:0)-CB.main.length);CB.busy=false;CB.f=0;CB.sel=null;dessinerMain();majUnites()}
function pioche(n){for(let i=0;i<n&&CB.main.length<8;i++){if(!CB.pile.length){if(!CB.defausse.length)break;CB.pile=melange(CB.defausse);CB.defausse=[]}CB.main.push(CB.pile.pop())}if(!CB.busy)dessinerMain()}
const vivants=a=>a.filter(u=>u.pv>0);
function jouer(i,t){const k=CB.main[i],c=CK[k],g=enGris(k);CB.nJoues=(CB.nJoues||0)+1;CB.mana-=c.cout;if(mtype(k)&&!g)payer(mtype(k),c.cout);CB.main.splice(i,1);CB.defausse.push(k);
  journal(`Vous jouez « ${c.nom()} »${g?' en mana gris : effet affaibli.':contreX(k)>1?' : contre-pouvoir, effet doublé !':'.'}`);CB.gris=g;try{c.jeu(k,t)}finally{CB.gris=false}clack();
  CB.f=Math.min(CB.f,CB.main.length);CB.sel=null;majUnites();dessinerMain();finSiFini()}
function finTour(){CB.busy=true;CB.sel=null;if(typeof atoutsFinTour==='function')atoutsFinTour();CB.defausse.push(...CB.main);CB.main=[];dessinerMain();
  /* les bêtes frappent d'abord, puis chaque monstre fait ce qu'il a annoncé */
  for(const b of CB.allies)if(b.bete&&b.atk>0)attendre(.45,()=>{if(!CB||b.pv<=0)return;const t=vivants(CB.foes)[0];if(t){frappe(t,b.atk+(aPassif('meute')?1:0),b);if(aPassif('braise')&&t.pv>0)(t.br=t.br||[]).push([1,2]);finSiFini()}});
  attendre(.35,()=>{if(CB)for(const m of CB.foes)m.g=0;if(CB)majUnites()});
  attendre(.3,()=>{if(!CB)return;for(const m of vivants(CB.foes))if(m.br&&m.br.length){let d=0;m.br=m.br.filter(b=>{d+=b[0];return--b[1]>0});if(d){frappe(m,d,{nom:'brûlure'});journal(`${m.nom} brûle (${d}).`)}}finSiFini()});
  for(const m of CB.foes)attendre(.6,()=>{if(!CB||m.pv<=0||vivants(CB.allies).indexOf(CB.hero)<0)return;agir(m);finSiFini()});
  attendre(.5,()=>{if(!CB)return;for(const m of vivants(CB.foes))intention(m);majUnites();debutTour()})}
function finSiFini(){if(!CB)return false;
  if(CB.hero.pv<=0){CB.q=[];CB.busy=true;attendre(1,()=>finCombat(false));return true}
  if(!vivants(CB.foes).length){CB.q=[];CB.busy=true;attendre(.9,()=>finCombat(true));return true}return false}

/* ---------- Effets ---------- */
function pop(u,txt,cls){if(!u.el)return;const s=document.createElement('span');s.className='pop '+(cls||'');s.textContent=txt;u.el.appendChild(s);setTimeout(()=>s.remove(),1000)}
function frappe(u,n,src){if(!u||u.pv<=0)return 0;if(CB&&CB.sr&&u.hero&&src&&CB.foes.indexOf(src)>=0&&n>0){srBlesse(u,n,src);if(u.el){u.el.classList.remove('choc');void u.el.offsetWidth;u.el.classList.add('choc')}majUnites();return n}if(CB&&n>0&&CB.centre){const ennemi=CB.foes.indexOf(u)>=0;if(ennemi&&CB.centre==='heros'&&(!src||src.bete||src.hero))n+=2;else if(!ennemi&&CB.centre==='ennemi'&&src&&CB.foes.indexOf(src)>=0)n+=1}if(u.hero&&u.res&&src&&src!==u&&n>0)n=Math.max(1,n-u.res);if(CB&&CB.gris&&!src)n=Math.max(1,Math.round(n*GRIS_MALUS));if(u.vul&&n>0)n+=u.vul;const bl=Math.min(u.g,n);u.g-=bl;n-=bl;u.pv=Math.max(0,u.pv-n);
  pop(u,n>0?'−'+n:'garde',n>0?'deg':'g');if(u.el){u.el.classList.remove('choc');void u.el.offsetWidth;u.el.classList.add('choc')}
  if(AX&&soundOn)n>0?perc(AX.currentTime,'t',.9):note(AX.currentTime,523,SIN,.2,.07);
  if(u.pv<=0){journal(u.nom+(u.hero?' tombe.':u.garde?' cède.':u.mur?' est brisé.':' est vaincu.'));if(u.bete&&!u.mur&&aPassif('repousse')&&!CB.repousse){CB.repousse=1;u.pv=Math.ceil(u.max/2);journal(u.nom+' repousse du givre.');majUnites();return n}if(u.bete||u.garde){CB.allies.splice(CB.allies.indexOf(u),1);const e=u.el;if(e){e.classList.add('mort');e.querySelector('.bar i').style.width='0%'}setTimeout(()=>e&&e.remove(),900)}}majUnites();return n}
function garder(u,n){if(CB&&CB.gris)n=Math.max(1,Math.round(n*GRIS_MALUS));if(u&&u.hero&&CB){leverGarde(n);return}u.g+=n;pop(u,'+'+n+' garde','g');majUnites()}
function soigner(u,n){if(CB&&CB.gris)n=Math.max(1,Math.round(n*GRIS_MALUS));if(CB&&CB.sr&&u.hero)n=Math.max(1,Math.ceil(n/3));const a=Math.min(n,u.max-u.pv);u.pv+=a;pop(u,'+'+a,'soin');majUnites()}
function invoquer(b){if(b.voie==null){const n0=CB.allies.filter(u=>u.bete&&u.pv>0&&u.voie===0).length,n1=CB.allies.filter(u=>u.bete&&u.pv>0&&u.voie===1).length;b.voie=n1<n0?1:0}const nb=CB.allies.filter(u=>u.bete).length;if(nb>=3){const w=CB.allies.filter(u=>u.bete).sort((p,q)=>p.pv-q.pv)[0];CB.allies.splice(CB.allies.indexOf(w),1);if(w.el)w.el.remove()}
  CB.allies.push(b);uniteEl(b,'cb-allies');pop(b,'arrive','soin');journal(b.nom+' rejoint le combat et encaisse les coups à la place du héros.')}
/* Terrain (17 nov., « bloqueurs sur le terrain », esprit Magic et Monster Train) : les coups visent d'abord la Garde,
   puis les bloqueurs et les bêtes dans leur ordre d'arrivée, puis le héros. La garde du héros n'est plus un chiffre qui tombe :
   c'est une unité, la Garde, qui reste d'un tour à l'autre mais s'effrite de moitié au début de votre tour, et que l'ennemi peut briser. */
const gardeU=()=>CB&&CB.allies.find(u=>u.garde&&u.pv>0);
/* Le Nœud (17 nov., choix de l'utilisateur) : 7 tuiles. De votre côté, deux losanges (voie haute 0, voie basse 1) et l'hexagone du héros ;
   au milieu, le décagone de la zone ; en face, deux losanges et l'hexagone du chef. Un coup frappe la Garde (qui couvre les deux voies),
   sinon la première unité de SA voie, sinon le héros : une voie vide laisse passer. Le chef frappe une voie différente à chaque tour. */
const voieDe=m=>m&&m.voie!=null?m.voie:(m&&m.chef&&CB?CB.tour%2:0);
const cibleAlliee=m=>gardeU()||CB.allies.find(u=>u.bete&&u.pv>0&&u.voie===voieDe(m))||CB.hero;
/* le centre : à qui a au moins autant d'unités sur le terrain que l'autre camp (vos bêtes et bloqueurs contre les ennemis vivants) */
function majCentre(){if(!CB)return;const a=CB.allies.filter(u=>u.bete&&u.pv>0).length,e=vivants(CB.foes).length,av=CB.centre;
  CB.centre=a>0&&a>=e?'heros':'ennemi';if(av&&av!==CB.centre)journal(CB.centre==='heros'?'Vous prenez le centre : vos coups font +2.':'L\'ennemi reprend le centre : ses coups font +1.')}
function leverGarde(n){let G=gardeU();
  if(!G){G={nom:'La Garde',pv:0,max:0,g:0,garde:1,atk:0};CB.allies.splice(1,0,G);uniteEl(G,'cb-allies')}
  G.pv+=n;G.max=Math.max(G.max,G.pv);pop(G,'+'+n+' garde','g');majUnites()}
function eroderGarde(){const G=gardeU();if(!G)return;if(CB.gardeTient){CB.gardeTient=0;pop(G,'tient bon','g');return}const p=Math.floor(G.pv*(CB.erosion||.5));if(p<=0){G.pv=0;CB.allies.splice(CB.allies.indexOf(G),1);if(G.el)G.el.remove();journal('La Garde retombe.')}else{G.pv=p;pop(G,'s\'effrite','g')}}
/* un coup qui piétine : ce que le bloqueur n'a pas absorbé passe au suivant */
function coupSurTerrain(m,v,opt){let reste=v;for(let n=0;n<5&&reste>0;n++){const t=opt.vol?CB.hero:cibleAlliee(m);const avant=t.pv+t.g,x=opt.belier&&!t.hero?2:1;
  journal(`${m.nom} ${opt.vol?'passe par-dessus et frappe le héros':opt.belier&&!t.hero?'enfonce '+t.nom:'frappe '+(t.hero?'le héros':t.nom)} (${reste*x}).`);
  frappe(t,reste*x,m);if((t.hero||t.garde)&&CB.riposte)frappe(m,CB.riposte,CB.hero);if(t.epine&&m.pv>0)frappe(m,t.epine,t);
  if(!opt.pietine||t.hero||t.pv>0)break;reste=Math.ceil((reste*x-avant)/x);if(reste>0)journal('Le coup piétine et passe au suivant.')}}
function intention(m){let a=m.mv[m.mi%m.mv.length];m.mi++;if(a==='c'&&m.chef&&aPassif('silence')&&!m.silence){m.silence=1;a='a'}const L=Lz(m.z);
  m.int=a==='v'?{a,v:Math.max(1,m.atk-1),ic:'➶',t:'vole par-dessus'}:a==='b'?{a,v:m.atk,ic:'⚒',t:'bélier'}:a==='a'?{a,v:m.atk,ic:'⚔',t:'attaque'}:a==='g'?{a,v:m.atk+3,ic:'⛨',t:'se garde'}:a==='t'?{a,v:Math.max(1,m.atk-1),ic:'✶',t:'frappe tout le monde'}
    :a==='c'?{a,v:0,ic:'…',t:'prend son élan'}:a==='f'?{a,v:m.atk*2,ic:'⚔⚔',t:'frappe fort et piétine'}:{a,v:4+L,ic:'✚',t:'soigne les siens'}}
function agir(m){const I=m.int;if(!I)return;m.el&&(m.el.classList.remove('agit'),void m.el.offsetWidth,m.el.classList.add('agit'));
  if(I.a==='a'||I.a==='f'||I.a==='v'||I.a==='b')coupSurTerrain(m,I.v,{pietine:I.a==='f',vol:I.a==='v',belier:I.a==='b'})
  else if(I.a==='t'){journal(`${m.nom} frappe tout le monde (${I.v}).`);for(const u of vivants(CB.allies))frappe(u,I.v,m)}
  else if(I.a==='g'){garder(m,I.v);journal(`${m.nom} se met en garde.`)}
  else if(I.a==='s'){const w=vivants(CB.foes).sort((p,q)=>p.pv/p.max-q.pv/q.max)[0];soigner(w,I.v);journal(`${m.nom} soigne ${w===m?'ses plaies':w.nom}.`)}
  else if(I.a==='h')journal(`${m.nom} hésite et ne fait rien.`)
  else journal(`${m.nom} prend son élan : le prochain coup sera fort.`)}

/* ---------- Fin du combat : récompenses ---------- */
function fermerCombat(){if(typeof oublierManaDeCombat==='function')oublierManaDeCombat(CB);$('combat').hidden=true;CB=null;CBwalk=P.walked;CBnext=prochaineRencontre()}
const RECO={RES:'Source de mana : elle remplit votre réserve à chaque cycle, 1 mana, puis 2 au niveau 2, puis 2 et une carte de plus en main au niveau 3.',
  ANT:'Une bête alliée : la carte d\'appel fait venir une créature qui se bat à vos côtés.',DON:'Un pouvoir d\'attaque, le plus fort de vos cartes.',
  CIT:'Plus de points de vie et une carte de garde pour tous vos alliés.',MAR:'Une carte gratuite qui fait piocher (et donne du mana au niveau 2).'};
function finCombat(ok){const C=CB,Z=C.Z;fermerCombat();mode='menu';etatHud();
  let gain='';if(ok){const t=ZMANA[Z.id],n=C.kind==='eveil'?2:1;gagner(t,n);gain=` Les vaincus lâchent ${n} ${t}.`;etatHud()}
  const retour=`${gain} Réserve : ${resTexte()}.`;
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Défaite',t:'Le héros se replie',corps:`<p>Vous êtes blessé (${S.hurt} sur 3).${retour} À la troisième blessure, le héros meurt et perd tout.</p><p class="petit">Une victoire ou une épreuve réussie soigne une blessure.</p>`,
      back:toMonde,opts:[{l:'Repartir explorer',ic:'◆',go:toMonde}]});return}
  S.hurt=Math.max(0,S.hurt-(C.kind==='eveil'?1:0));
  if(C.kind==='eveil'){if(Z.id==='DON')S.dernierAssaut=S.nc;S.act[Z.id]=true;S.own[Z.id]=true;S.emp[Z.id]=false;save();etatHud();hudKey='';fanfare(S.lv[Z.id]||1);
    ui('menu',{sur:'Zone activée',t:Z.info.nom,corps:`<p>La zone est à vous.${retour}</p><p class="petit" style="margin-top:1em">${RECO[Z.id]} Vous pouvez maintenant éveiller cette zone : chaque montée de niveau vous donne sa carte de combat « ${CK[Z.id].nom()} », plus forte à mesure que la zone s'éloigne de zéro.</p>`,
      back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]});return}
  /* rencontre (2.0) : plus de carte en combat ; les cartes viennent de l'activation et des mues des zones */
  save();sfx('hit');
  ui('menu',{sur:'Victoire',t:'Les créatures fuient',corps:`<p class="petit">${retour}</p><p class="petit">Les combats ne donnent pas de cartes : on gagne une carte de combat à chaque montée de niveau d'une zone.</p>`,
    back:toMonde,opts:[{l:'Repartir explorer',ic:'◆',go:toMonde}]})}
function fuir(){const C=CB;fermerCombat();toMonde();toast('Fuite',C.kind==='renc'?'Vous semez les créatures':'Les gardiens attendront',`Réserve : ${resTexte()}.`)}
function pauseCombat(){mode='menu';ui('menu',{sur:'Combat en pause',t:'Fuir ?',corps:'<p class="petit">Fuir ne blesse pas ; le mana déjà dépensé est perdu. Les gardiens d\'une Pierre attendront votre retour.</p>',
  back:reprendreCombat,opts:[{l:'Continuer le combat',ic:'▲',go:reprendreCombat},{l:'Fuir',ic:'◆',go:fuir}]})}
function reprendreCombat(){closeUI();mode='combat'}

/* ---------- Commandes : ◀ ▶ choisir, OK jouer, ▼ ou Retour annuler une cible ---------- */
function cbInput(a,rep){const C=CB;if(!C)return;
  if(a==='back'&&!rep){if(C.sel){C.sel=null;dessinerMain();majUnites()}else pauseCombat();return}
  if(C.busy)return;
  if(C.sel){const v=vivants(C.foes);if(a==='left'||a==='right'){C.ti=(C.ti+(a==='left'?-1:1)+v.length)%v.length;tick();majUnites()}
    else if(a==='down'){C.sel=null;dessinerMain();majUnites()}
    else if(a==='ok'&&!rep)jouer(C.f,v[C.ti]);return}
  const n=C.main.length+1;
  if(a==='left'||a==='right'){C.f=(C.f+(a==='left'?-1:1)+n)%n;tick();dessinerMain()}
  else if(a==='down'){C.f=C.main.length;tick();dessinerMain()}
  else if(a==='up'&&C.f===C.main.length&&C.main.length){C.f=0;tick();dessinerMain()}
  else if(a==='ok'&&!rep){if(C.f===C.main.length){clack();finTour();return}
    const k=C.main[C.f],c=CK[k];if(!jouable(k)){sfx('miss');journal('Capacité de dépense atteinte ce tour pour « '+c.nom()+' ».');return}
    if(c.cible){const v=vivants(C.foes);if(v.length>1){C.sel='cible';C.ti=0;dessinerMain();majUnites();journal('Choisissez la cible avec ◀ ▶, puis OK.');return}jouer(C.f,v[0])}
    else jouer(C.f)}}

/* ---------- Dessin (éléments HTML, mis à jour seulement quand quelque chose change) ---------- */
function etoile(n,r1,r2,cy){cy=cy||50;let p='';for(let i=0;i<n*2;i++){const r=i%2?r2:r1,a=i*PI/n-PI/2;p+=(50+Math.cos(a)*r).toFixed(1)+','+(cy+Math.sin(a)*r).toFixed(1)+' '}return p}
function portrait(u){if(u.hero)return`<svg viewBox="0 0 100 100"><path d="M50 8 L70 40 L30 40Z" fill="#2a2630" stroke="#c9a45c" stroke-width="2"/><circle cx="50" cy="48" r="11" fill="#d8b48a"/><path d="M28 92 Q50 52 72 92Z" fill="#7a1f2a"/><path d="M38 92 Q50 62 62 92Z" fill="#e9dfc8"/><circle cx="76" cy="66" r="5" fill="#ffd27a"/></svg>`;
  const c=u.bete?ZCOL.ANT:ZCOL[u.z],n=u.bete?8:ZPTS[u.z],s=u.chef?46:38;
  return`<svg viewBox="0 0 100 100">${u.bete?'<ellipse cx="28" cy="40" rx="20" ry="9" fill="rgba(255,240,180,.35)"/><ellipse cx="72" cy="40" rx="20" ry="9" fill="rgba(255,240,180,.35)"/>':''}<polygon points="${etoile(n,s,s*.55)}" fill="${c}" fill-opacity=".85" stroke="#0d0c0f" stroke-width="2"/><polygon points="${etoile(n,s*.5,s*.28)}" fill="#0d0c0f" fill-opacity=".35"/><circle cx="42" cy="48" r="4.5" fill="#0d0c0f"/><circle cx="58" cy="48" r="4.5" fill="#0d0c0f"/><circle cx="43" cy="47" r="1.6" fill="#fff"/><circle cx="59" cy="47" r="1.6" fill="#fff"/>${u.chef?`<polygon points="${etoile(5,9,4,9)}" fill="#e8c77f"/>`:''}</svg>`}
function uniteEl(u,host){const d=document.createElement('div');d.className='u'+(u.chef?' chef':'')+(u.hero?' hero':'');
  d.innerHTML=`<div class="int"></div><div class="por">${portrait(u)}</div><div class="un">${u.nom}</div><div class="bar"><i></i><span></span></div><div class="gd"></div>`;
  $(host).appendChild(d);u.el=d}
function placerNoeud(){if(!CB)return;
  let c=$('cb-centre');if(!c){c=document.createElement('div');c.id='cb-centre';$('combat').appendChild(c)}
  const moi=CB.centre==='heros',col=moi?'#8fc06f':'#d0675a',pts=Array.from({length:10},(_,i)=>{const a=i*Math.PI/5;return(50+Math.cos(a)*44).toFixed(1)+','+(50+Math.sin(a)*44).toFixed(1)}).join(' ');
  const k='c'+CB.centre;if(c.dataset.k!==k){c.dataset.k=k;c.innerHTML=`<svg viewBox="0 0 100 100"><polygon points="${pts}" fill="rgba(13,12,15,.7)" stroke="${col}" stroke-width="3"/><polygon points="${pts}" transform="translate(50 50) scale(.62) translate(-50 -50)" fill="none" stroke="#c9a45c" stroke-opacity=".5" stroke-width="2"/></svg><div class="cl">Centre</div><div class="cv" style="color:${col}">${moi?'à vous · vos coups +2':'à l\'ennemi · ses coups +1'}</div>`}
  const pose=(u,col,row)=>{if(u.el){u.el.style.gridColumn=col;u.el.style.gridRow=row}};
  for(const side of[CB.allies,CB.foes]){const n=[0,0];for(const u of side){if(u.pv<=0&&!u.hero)continue;
    if(side===CB.allies){if(u.hero)pose(u,'1','1 / 3');else if(u.garde)pose(u,'4','1 / 3');else{const i=n[u.voie||0]++;pose(u,String(Math.max(2,3-i)),String((u.voie||0)+1))}}
    else{if(u.chef)pose(u,'3','1 / 3');else{const i=n[u.voie||0]++;pose(u,String(Math.min(2,1+i)),String((u.voie||0)+1))}}}}}
function majUnites(){if(!CB)return;const v=vivants(CB.foes);majCentre();placerNoeud();
  for(const u of[...CB.foes,...CB.allies]){const e=u.el;if(!e)continue;e.classList.toggle('mort',u.pv<=0);
    e.querySelector('.bar i').style.width=(100*u.pv/u.max)+'%';e.querySelector('.bar span').textContent=CB.sr&&u.hero?`Blessures ${u.max-u.pv} / ${u.max}${srMalus()?' · −'+srMalus():''}`:u.pv+' / '+u.max;
    const g=e.querySelector('.gd');g.textContent=u.g>0?'⛨ '+u.g:'';
    if(u.garde)e.querySelector('.int').textContent='⛨ prend les coups, s\'effrite de moitié';else if(u.mur)e.querySelector('.int').textContent='⛨ bloqueur'+(u.epine?' · renvoie '+u.epine:'');else if(u.bete)e.querySelector('.int').textContent='⚔ '+u.atk+' à chaque tour';
    else if(!u.hero){const I=u.int;e.querySelector('.int').innerHTML=u.pv>0&&I?`<b>${I.ic}${I.v?' '+I.v:''}</b> ${I.t}${aPassif('lecture')&&u.mv?' · puis '+NOMACT[u.mv[u.mi%u.mv.length]]:''}`:''}
    e.classList.toggle('vise',!!CB.sel&&u===v[CB.ti])}
  const dsp=dispo();$('cb-mana').innerHTML=`<span class="l">Ce tour</span><span class="mp">${Array.from({length:Math.min(CB.capT||0,14)},(_,i)=>`<i class="${i<dsp?'on':''}"></i>`).join('')}</span><b>${dsp} / ${CB.capT||0}</b><span class="l">${resHTML()}</span>`;
  $('cb-piles').innerHTML=`<span>Pioche <b>${CB.pile.length}</b></span><span>Défausse <b>${CB.defausse.length}</b></span><span>Tour <b>${CB.tour}</b></span>${CB.reso&&Object.keys(CB.reso).some(r=>CB.reso[r]>0)?`<span>Résonances <b>${Object.keys(CB.reso).filter(r=>CB.reso[r]>0).map(r=>r+(CB.reso[r]>1?' ×'+CB.reso[r]:'')).join(', ')}</b></span>`:''}`}
function carteHTML(k,i){const c=CK[k],z=c.z;return`<div class="cc${z?' z':''}" style="${z?'--kcA:'+rgba(ZCOL[z],.3)+';--kcB:'+rgba(ZCOL[z],.75):''}"><div class="co" style="${mtype(k)?'background:'+MCOL[mtype(k)]+';color:#111':''}">${c.cout}</div><div class="cn">${c.nom()}</div><div class="ct">${c.txt(k)}</div><div class="cz">${z?TYPE[z].kind+' · '+ZCOURT[z]+' · '+ZMANA[z]:'Commune · tout mana'}</div></div>`}
function dessinerMain(){const C=CB;if(!C)return;const h=$('cb-main');
  h.innerHTML=C.main.map(carteHTML).join('')+`<div class="cc fin"><div class="cn">Fin du tour</div><div class="ct">Les bêtes frappent, puis les monstres agissent.</div></div>`;
  [...h.children].forEach((d,i)=>{d.classList.toggle('f',i===C.f&&!C.busy);if(i<C.main.length&&!jouable(C.main[i]))d.classList.add('off');if(C.sel&&i===C.f)d.classList.add('choisie')});
  $('cb-aide').textContent=C.busy?'Les créatures agissent…':C.sel?'◀ ▶ choisir la cible · OK frapper · ▼ annuler':'◀ ▶ choisir une carte · OK jouer · ▼ fin du tour · Retour pause';majUnites()}
function journal(t){const j=$('cb-log');j.textContent=t;j.classList.remove('neuf');void j.offsetWidth;j.classList.add('neuf')}

/* ---------- Rencontres en se promenant ---------- */
const RENC=[['fréquentes',.7],['normales',1],['rares',2],['aucune',0]];
let CBwalk=0,CBnext=0;
const prochaineRencontre=()=>{const f=RENC[S.renc||1][1];return f?(110+Math.random()*90)*f:1e9};
function verifierRencontre(){if(mode!=='monde'||!started||!curZ||!RENC[S.renc||1][1])return;
  if(!CBnext)CBnext=prochaineRencontre();
  if(typeof majChemins==='function'){majChemins();if(abriChemin()){CBwalk=Math.max(CBwalk,P.walked-CBnext+5);return}}
  if(P.walked-CBwalk<CBnext)return;
  if(Math.hypot(curZ.alt.x-P.x,curZ.alt.z-P.z)<16){CBwalk=P.walked-CBnext+15;return}
  startCombat(curZ,'renc')}
