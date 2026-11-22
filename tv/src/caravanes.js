/* MozaWorld : les caravanes sur les routes (lot 3, 19 nov. soir ; idée choisie par l'utilisateur : « Caravanes sur les routes :
   elles rapportent des tesselles et peuvent être pillées. » Le monde sauvage reste l'adversaire principal, les rivaux secondaires).
   REGLES.md, section 6.
   - Trajet : une Ressource tenue (à vous et activée), au niveau 2 ou plus, dont une route ouverte (routes.js, S.routes) mène à une
     zone tenue ; de là, des zones tenues voisines de proche en proche jusqu'à une Citadelle tenue. On garde le trajet le plus court.
     Une route reliée directement à la Citadelle suffit. Une route coupée, une zone du trajet perdue : la caravane s'arrête.
   - Gain : à chaque cycle, chaque caravane en route rapporte CAR_GAIN tesselles, une de plus si la Ressource est au niveau 3
     (gagnerTesselles, commerce.js) ; une de plus (deux renforcée) si le trajet passe dans la juridiction d'une Loi des Relais (lois.js, loiRelais).
   - Pillage : une horde en marche dont la cible est sur le trajet, ou une zone d'une maison rivale voisine du trajet, peut piller
     la caravane (chance par cycle CAR_RISQUE ; une tour de guet qui couvre la zone menacée la divise par deux). La caravane perd
     la cargaison du cycle et s'arrête CAR_ARRET cycles. Le héros peut l'escorter : combat court contre deux pillards dans la zone
     du pillage ; victoire, la caravane repart et rend tout le butin (la cargaison du pillage, plus le gain de chaque cycle d'arrêt).
   - Hasard : tiré d'un hachage (graine, Ressource, cycle), sans toucher à Math.random, pour ne pas déranger les autres modules.
   - Visible : point qui avance sur la minicarte, ligne à la Pierre d'éveil de la Ressource, élément « ⛟ » du bandeau, petit chariot 3D.
   État : S.car = {idRessource: {arret, lieu, perdu, par, qui}} (les caravanes déjà parties, pour les dire « arrêtées » si la route est coupée), S.carNc, S.carG, S.carV,
   S.carBilan = {gains, pillages, escortes}. Tous les chiffres sont provisoires. */
const CAR_GAIN=1;                         /* tesselles par cycle et par caravane, +1 si la Ressource est au niveau 3 (provisoire) */
/* chance de pillage par cycle. 22 nov. (utilisateur, « 8 ok ») : pillage sûr quand une horde vise une zone du trajet, 50 % quand une horde
   est près du trajet (sa source ou sa cible voisine d'une zone du trajet), 25 % près d'une maison rivale ; était 30 % et 15 %. */
const CAR_RISQUE={cible:1,horde:.5,rival:.25};
const CAR_TOUR=.5;                        /* une tour de guet sur la zone menacée multiplie le risque par .5 (provisoire) */
const CAR_ARRET=2;                        /* cycles d'arrêt après un pillage (provisoire) */

function initCaravanes(){if(typeof S==='undefined')return;
  if(!S.car||typeof S.car!=='object')S.car={};
  if(!S.carBilan||typeof S.carBilan!=='object')S.carBilan={gains:0,pillages:0,escortes:0};
  if(typeof S.carNc!=='number')S.carNc=S.nc||0;          /* dernier cycle traité (une vieille sauvegarde ne touche pas les cycles passés) */
  if(typeof S.carV!=='number')S.carV=S.lives||1;
  /* nouvelle partie (graine changée) : plus de caravanes ; mort du héros : ses caravanes sont perdues avec ses zones */
  if(S.carG!==S.graine){S.car={};S.carBilan={gains:0,pillages:0,escortes:0};S.carNc=S.nc||0;S.carG=S.graine}
  if((S.lives||1)!==S.carV){S.car={};S.carV=S.lives||1}
  if(S.nc<S.carNc)S.carNc=S.nc}
const carTient=id=>!!(ZB[id]&&S.own[id]&&S.act[id]);
const carEstRES=id=>!!ZB[id]&&(ZB[id].mod||id)==='RES';
const carEstCIT=id=>!!ZB[id]&&(ZB[id].mod||id)==='CIT';
const carCourt=id=>ZB[id]?zI(id).nom.split(',')[0]:id;
const carDe=n=>typeof de_==='function'?de_(n):'de '+n;
const carA=n=>typeof a_==='function'?a_(n):'à '+n;
/* Loi des Relais (lois.js) : une caravane dont le trajet passe dans sa juridiction rapporte n de plus (1, 2 renforcée ; provisoire) */
const carRelais=t=>!t||typeof loiRelais!=='function'?0:t.reduce((m,z)=>Math.max(m,loiRelais(z)||0),0);
const carGain=(r,t)=>CAR_GAIN+(Math.abs(S.lv[r]||0)>=3?1:0)+carRelais(t);
/* hasard reproductible : graine de la partie, Ressource, cycle */
function carHasard(r,nc){let h=2166136261;for(const c of S.graine+'|'+r+'|'+nc)h=Math.imul(h^c.charCodeAt(0),16777619)>>>0;
  h^=h>>>15;h=Math.imul(h,2246822507)>>>0;h^=h>>>13;return(h>>>0)/4294967296}

/* ---------- Trajet : route ouverte, puis zones tenues jusqu'à une Citadelle tenue ---------- */
function carTrajet(r){if(!carEstRES(r)||!carTient(r)||Math.abs(S.lv[r]||0)<2)return null;
  if(typeof etatRoutes==='function')etatRoutes();const R=(S.routes&&S.routes[r])||[];let best=null;
  for(const b of R){if(!carTient(b))continue;
    /* parcours en largeur sur les zones tenues, de b jusqu'à la première Citadelle tenue */
    const prec={[b]:null},file=[b];let fin=null;
    while(file.length){const z=file.shift();if(carEstCIT(z)){fin=z;break}
      for(const v of(VOISINES[z]||[]))if(v!==r&&!(v in prec)&&carTient(v)){prec[v]=z;file.push(v)}}
    if(!fin)continue;const t=[];for(let z=fin;z!==null;z=prec[z])t.unshift(z);t.unshift(r);
    if(!best||t.length<best.length)best=t}
  return best}
/* pourquoi une Ressource tenue n'a pas (ou plus) de caravane */
function carPourquoi(r){if(Math.abs(S.lv[r]||0)<2)return'la Ressource doit être au niveau 2 pour ouvrir des routes';
  const R=(S.routes&&S.routes[r])||[];if(!R.length)return'aucune route ouverte';
  if(!R.some(carTient))return'aucune route ne mène à une zone à vous';
  return'aucune de ses routes ne mène, par vos zones, à une Citadelle à vous'}
/* menace sur un trajet : la zone la plus exposée, sa chance de pillage et ce qui la menace */
function carMenace(t){let m={risque:0,lieu:null,par:null,qui:null};if(!t)return m;
  const hordes=S.hordes&&typeof S.hordes==='object'?Object.values(S.hordes):[];
  const rivaux=S.riv&&S.riv.z?S.riv.z:{};
  for(const z of t){let base=0,par=null,qui=null;
    const h=hordes.find(h=>h&&h.cible===z&&ZB[h.src]);if(h){base=CAR_RISQUE.cible;par='horde';qui=h.src}
    /* 20 nov. : une vague du siège final marche sur la Citadelle ; elle menace les caravanes comme une horde qui vise le trajet */
    if(!base&&S.siege&&S.siege.cit===z&&ZB[S.siege.src]){base=CAR_RISQUE.cible;par='horde';qui=S.siege.src}
    if(!base){const V=VOISINES[z]||[],hp=hordes.find(h=>h&&ZB[h.src]&&(V.indexOf(h.cible)>=0||V.indexOf(h.src)>=0||h.src===z));if(hp){base=CAR_RISQUE.horde;par='horde';qui=hp.src}}
    if(!base){const v=(VOISINES[z]||[]).find(v=>rivaux[v]&&!S.own[v]);if(v){base=CAR_RISQUE.rival;par='rival';qui=rivaux[v]}}
    if(!base)continue;
    const tour=typeof defenseTours==='function'&&(defenseTours(z)||{}).bonus>0,k=base*(tour&&base<1?CAR_TOUR:1);   /* 22 nov. : la tour ne sauve pas du cas automatique */
    if(k>m.risque)m={risque:k,lieu:z,par,qui,tour}}
  return m}
/* les caravanes du moment, une par Ressource tenue qui en a une (en route ou arrêtée) */
function caravanes(){initCaravanes();const L=[];
  for(const Z of ZN){const r=Z.id;if(!carEstRES(r)||!carTient(r))continue;const t=carTrajet(r),e=S.car[r];
    if(!t&&!e)continue;
    const pillee=!!(e&&e.arret>=S.nc);
    L.push({r,cit:t?t[t.length-1]:null,traj:t,n:carGain(r,t),relais:carRelais(t),etat:!t?'coupée':pillee?'pillée':'en route',arret:pillee?e.arret:0,lieu:pillee?e.lieu:null,perdu:pillee?e.perdu||0:0,
      par:pillee?e.par:null,...(t?(({risque,lieu,tour})=>({risque,menace:lieu,tour:!!tour}))(carMenace(t)):{risque:0,menace:null,tour:false})})}
  return L}
const caravaneDe=r=>caravanes().find(c=>c.r===r)||null;

/* ---------- Pillage ---------- */
const CAR_FILE=[];
function piller(r,m,nc){initCaravanes();const c=caravaneDe(r);if(!c||c.etat!=='en route')return null;if(typeof nc!=='number')nc=S.nc;
  m=m&&m.lieu?m:carMenace(c.traj);const lieu=m.lieu||c.traj[Math.min(1,c.traj.length-1)];
  S.car[r]={arret:nc+CAR_ARRET,lieu,perdu:c.n,par:m.par||null,qui:m.qui||null};S.carBilan.pillages++;
  save();if(typeof hudKey!=='undefined')hudKey='';if(typeof etatHud==='function')etatHud();
  const qui=m.par==='horde'&&ZB[m.qui]?'Les éclaireurs de la horde '+carDe(carCourt(m.qui)):m.par==='rival'&&typeof RIVK!=='undefined'&&RIVK[m.qui]?'Des coupe-jarrets '+(typeof dela==='function'?dela(RIVK[m.qui]):'d\'une maison rivale'):'Des pillards';
  CAR_FILE.push([`Caravane pillée · ${carCourt(r)}`,`${qui} ont pris sa cargaison ${carA(carCourt(lieu))}`,
    `Elle perd ${c.n} tesselle${c.n>1?'s':''} et s'arrête ${CAR_ARRET} cycles ; chaque cycle d'arrêt grossit le butin des pillards. Allez à la Pierre d'éveil ${carDe(carCourt(lieu))} ou ${carDe(carCourt(r))}, puis « Escorter la caravane » : chassez les pillards, elle repart et vous rend tout le butin.`]);
  return S.car[r]}
/* ---------- Le cycle : gains et pillages ---------- */
function caravanesCycle(nc){initCaravanes();if(typeof nc!=='number')nc=S.nc;let gain=0;
  for(const r in S.car)if(!carTient(r))delete S.car[r];   /* Ressource perdue : sa caravane disparaît */
  for(const c of caravanes()){
    /* pillée et arrêtée : ce qu'elle aurait rapporté ce cycle s'ajoute au butin des pillards, rendu en entier si l'escorte gagne (provisoire) */
    if(c.etat==='pillée'&&S.car[c.r]&&S.car[c.r].arret>=nc){S.car[c.r].perdu=(S.car[c.r].perdu||0)+carGain(c.r,carTrajet(c.r));continue}
    if(c.etat!=='en route')continue;
    S.car[c.r]=S.car[c.r]||{arret:-1,lieu:null,perdu:0,par:null};   /* on se souvient de la caravane : coupée, elle restera « arrêtée » */
    if(c.risque>0&&carHasard(c.r,nc)<c.risque){piller(c.r,null,nc);continue}
    gain+=c.n}
  if(gain){S.carBilan.gains+=gain;if(typeof gagnerTesselles==='function')gagnerTesselles(gain,'cycle');else{S.tess=(S.tess||0)+gain}}
  save();return gain}
setInterval(()=>{if(typeof started==='undefined'||!started||mode==='titre'||typeof S==='undefined')return;initCaravanes();
  /* le commerce verse d'abord les Citadelles (commerce.js) ; si son initialisation n'a pas encore eu lieu, on la fait ici */
  if(typeof initCommerce==='function')initCommerce();
  while(S.carNc<S.nc){S.carNc++;if(mondeIci())caravanesCycle(S.carNc)}
  if(mode==='monde'&&CAR_FILE.length&&(typeof toastT==='undefined'||toastT<1))toast(...CAR_FILE.shift())},1000);

/* ---------- Escorte : combat court contre les pillards, dans la zone du pillage ---------- */
function escorterCaravane(r){const c=caravaneDe(r);if(!c||c.etat!=='pillée'||!ZB[c.lieu])return false;const Z=(ZB[c.lieu]||ZWB[c.lieu]);
  startCombat(Z,'renc');if(typeof CB==='undefined'||!CB)return false;CB.caravane=r;
  const noms=['Pillard de grand chemin','Guetteur des pillards'];
  const foes=[0,1].map(i=>{const m=monstre(Z,i);m.pv=m.max=Math.max(4,Math.round(m.pv*.6));m.nom=noms[i];m.chef=0;return m});
  const br=CB.foes[0]&&CB.foes[0].br;CB.foes=foes;$('cb-foes').innerHTML='';
  if(typeof rangerEnnemis==='function'&&CB.cases)rangerEnnemis(foes);
  foes.forEach((u,i)=>{if(u.voie==null)u.voie=i%2;if(br)u.br=br.map(x=>x.slice());uniteEl(u,'cb-foes');intention(u)});
  $('cb-sur').textContent='Escorte · la caravane '+carDe(carCourt(r));
  journal(`Deux pillards gardent la cargaison volée ${carA(carCourt(c.lieu))}. Chassez-les et la caravane repart.`);if(typeof majUnites==='function')majUnites();
  return true}
function finEscorte(ok,C){const r=C.caravane,e=S.car[r];
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Escorte manquée',t:'Les pillards tiennent la route',corps:`<p>Vous êtes blessé (${S.hurt} sur 3). La caravane ${carDe(carCourt(r))} reste arrêtée${e?' jusqu\'à la fin du cycle '+e.arret:''} ; vous pouvez revenir l'escorter d'ici là.</p>`,
      back:toMonde,opts:[{l:'Repartir',ic:'◆',go:toMonde}]});return}
  const n=e?e.perdu||0:0;if(e){e.arret=-1;e.perdu=0;e.lieu=null}S.carBilan.escortes++;S.hurt=Math.max(0,S.hurt-1);
  if(n&&typeof gagnerTesselles==='function'){gagnerTesselles(n,'Cargaison reprise aux pillards');S.carBilan.gains+=n}
  save();etatHud();if(typeof hudKey!=='undefined')hudKey='';sfx('hit');
  const c=caravaneDe(r);
  ui('menu',{sur:'Victoire · escorte',t:'La caravane '+carDe(carCourt(r))+' repart',corps:`<p>Les pillards s'enfuient. ${n?`La cargaison est reprise : ${n} tesselle${n>1?'s':''} rejoignent votre bourse.`:''} ${c&&c.cit?`La caravane reprend la route vers ${zI(c.cit).nom}.`:''}</p><p class="petit">Une tour de guet sur une zone du trajet divise par deux le risque de pillage.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]})}
/* la fin du combat d'escorte passe par ici ; les autres combats suivent leur chemin habituel (combat.js) */
if(typeof finCombat==='function'){const _carFin=finCombat;
  finCombat=function(ok){const C=typeof CB!=='undefined'?CB:null;if(C&&C.caravane){fermerCombat();mode='menu';etatHud();finEscorte(ok,C);return}return _carFin.apply(this,arguments)}}

/* ---------- Pierre d'éveil ---------- */
function optionsCaravanes(Z){if(!Z)return[];initCaravanes();const o=[],id=Z.id;
  for(const c of caravanes())if(c.etat==='pillée'&&(c.r===id||c.lieu===id))
    o.push({l:'Escorter la caravane '+carDe(carCourt(c.r)),ic:'⛟',cls:'p',d:`pillée ${carA(carCourt(c.lieu))} · combat court contre deux pillards · victoire : elle repart et rend le butin, ${c.perdu} tesselle${c.perdu>1?'s':''} pour l'instant (+${c.n} par cycle d'arrêt)`,go:()=>escorterCaravane(c.r)});
  if(!carEstRES(id)||!carTient(id))return o;
  const c=caravaneDe(id);
  if(c&&c.etat==='en route')o.push({l:`Caravane vers ${carCourt(c.cit)} · +${c.n} par cycle`,ic:'⛟',off:true,
    d:`trajet : ${c.traj.map(carCourt).join(' → ')}${c.relais?` · Loi des Relais +${c.relais}`:''}${c.risque?` · risque de pillage ${Math.round(c.risque*100)} % par cycle${c.tour?' (tour de guet)':''}, ${carA(carCourt(c.menace))}`:' · aucune menace'}`});
  else if(c&&c.etat==='pillée')o.push({l:'Caravane arrêtée · pillée',ic:'⛟',off:true,d:`repart au cycle ${c.arret+1} (cycle actuel ${S.nc}), ou tout de suite si vous l'escortez`});
  else if(c)o.push({l:'Caravane arrêtée · route coupée',ic:'⛟',off:true,d:carPourquoi(id)});
  else if(Math.abs(S.lv[id]||0)>=2)o.push({l:'Pas de caravane',ic:'⛟',off:true,d:carPourquoi(id)+' · une route vers une zone reliée à votre Citadelle lance une caravane : +'+carGain(id)+' tesselle par cycle'});
  return o}

/* ---------- Bandeau : un élément court, à côté de la bourse ---------- */
function bandeauCaravanes(){const L=caravanes();if(!L.length)return'';const r=L.filter(c=>c.etat==='en route'),n=r.reduce((a,c)=>a+c.n,0),ko=L.length-r.length;
  return`<span class="d" title="Caravanes : ${r.length} en route (+${n} tesselles par cycle)${ko?', '+ko+' arrêtée'+(ko>1?'s':''):''}"${ko?' style="color:#ff9a8a"':''}><span>⛟</span>${r.length}${ko?'<small>/'+L.length+'</small>':''}</span>`}
if(typeof bandeauTess==='function'){const _carBan=bandeauTess;bandeauTess=function(){let s='';try{s=bandeauCaravanes()}catch(_){}return _carBan.apply(this,arguments)+s}}

/* ---------- Minicarte : le trajet en pointillés pâles, un point qui avance (aller et retour en deux cycles) ---------- */
const carPhase=()=>{const u=(((S.nc||0)+(S.tc||0)/CYCLE)/2)%1;return u<.5?u*2:2-u*2};
function carSur(pts,p){let L=0;const d=[];for(let i=1;i<pts.length;i++){const l=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);d.push(l);L+=l}
  let x=p*L;for(let i=0;i<d.length;i++){if(x<=d[i]||i===d.length-1){const t=d[i]?Math.min(1,x/d[i]):0;return[pts[i][0]+(pts[i+1][0]-pts[i][0])*t,pts[i][1]+(pts[i+1][1]-pts[i][1])*t,Math.atan2(pts[i+1][1]-pts[i][1],pts[i+1][0]-pts[i][0])]}x-=d[i]}
  return[pts[0][0],pts[0][1],0]}
function dessinerCaravanes(mc,s,ox,oz,T){if(typeof S==='undefined'||!started)return;const L=caravanes();if(!L.length)return;const ph=carPhase(),pl=.6+.4*Math.sin((T||0)*6);
  for(const c of L){if(!c.traj)continue;const pts=c.traj.map(id=>[(ZB[id].c[0]+ox)*s,(ZB[id].c[1]+oz)*s]);
    mc.save();mc.strokeStyle='rgba(255,236,190,.7)';mc.lineWidth=2.5;mc.setLineDash([3,4]);   /* (20 nov., testeur) la minicarte est affichée à moitié de sa taille : trait et point plus forts */mc.beginPath();pts.forEach((p,i)=>i?mc.lineTo(p[0],p[1]):mc.moveTo(p[0],p[1]));mc.stroke();mc.setLineDash([]);
    if(c.etat==='en route'){const p=carSur(pts,ph);mc.fillStyle='#ffe9a8';mc.strokeStyle='#1a1410';mc.lineWidth=2.5;mc.beginPath();mc.arc(p[0],p[1],7,0,TAU);mc.fill();mc.stroke()}
    else{const z=ZB[c.lieu]||ZB[c.r],x=(z.c[0]+ox)*s+10,y=(z.c[1]+oz)*s+6;mc.fillStyle=`rgba(255,110,90,${pl})`;mc.strokeStyle='#1a1410';mc.lineWidth=2.5;mc.beginPath();mc.arc(x,y,7,0,TAU);mc.fill();mc.stroke();
      mc.font='bold 16px sans-serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillStyle='#ffd0c4';mc.fillText('✕',x,y-14)}
    mc.restore()}}

/* ---------- 3D : un petit chariot en primitives (72 triangles) qui va et vient d'une Pierre à l'autre, sur les dalles des routes ---------- */
const CAR3D={};let carMats=null;
function chariot3D(){if(!carMats)carMats={b:M(0x6b4a2e),t:M(0xe8dcc0),r:M(0x2b2420)};const g=new THREE.Group();
  const add=(geo,mat,x,y,z,rz)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);if(rz)m.rotation.z=rz;g.add(m);return m};
  add(new THREE.BoxGeometry(1.8,.8,3),carMats.b,0,1.1,0);add(new THREE.BoxGeometry(1.6,1.1,2.4),carMats.t,0,2,-.1);
  add(new THREE.CylinderGeometry(.55,.55,2.2,6),carMats.r,0,.55,1,Math.PI/2);add(new THREE.CylinderGeometry(.55,.55,2.2,6),carMats.r,0,.55,-1,Math.PI/2);
  return g}
function majChariots(){if(typeof scene==='undefined'||typeof S==='undefined'||typeof THREE==='undefined')return;const L=started?caravanes().filter(c=>c.traj):[],vus={};const ph=carPhase();
  for(const c of L){vus[c.r]=1;let g=CAR3D[c.r];if(!g){g=CAR3D[c.r]=chariot3D();scene.add(g)}
    const pts=c.traj.map(id=>[ZB[id].alt.x,ZB[id].alt.z]);let p;
    if(c.etat==='en route')p=carSur(pts,ph);else{const i=Math.max(0,c.traj.indexOf(c.lieu));const a=pts[Math.max(0,i-1)],b=pts[i];p=i?[a[0]+(b[0]-a[0])*.7,a[1]+(b[1]-a[1])*.7,Math.atan2(b[1]-a[1],b[0]-a[0])]:[b[0]+6,b[1]+6,0]}
    const y=typeof stand==='function'?stand(p[0],p[1],1e3).g:0;g.position.set(p[0],y,p[1]);g.rotation.set(0,Math.PI/2-p[2],c.etat==='en route'?0:.35)}
  for(const r in CAR3D)if(!vus[r]){liberer(CAR3D[r]);delete CAR3D[r]}}
let carT=0;(function carAnim(t){requestAnimationFrame(carAnim);if(t-carT<100)return;carT=t;try{if(typeof mode!=='undefined'&&(mode==='monde'||mode==='menu'))majChariots()}catch(_){}})(0);

/* ---------- Tests : MZ.caravanes() (état), MZ.piller(id) (pillage forcé), MZ.escorter(id) ---------- */
function caravanesTest(){return caravanes().map(c=>Object.assign({},c,{traj:c.traj&&c.traj.slice()}))}
function pillerTest(id){const L=caravanes().filter(c=>c.etat==='en route');id=id||(L[0]&&L[0].r);return id?piller(id):null}
