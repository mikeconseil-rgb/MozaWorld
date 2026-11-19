/* MozaWorld : les tours de guet (lot 2, 19 nov. ; idée validée par l'utilisateur : « une Ressource ou un Donjon aménagé peut bâtir
   une tour qui annonce les hordes plus tôt et ajoute +2 de défense » ; « Citadelles, tours, remparts et pouvoirs aident à la défense »).
   - À la Pierre d'éveil d'une zone à vous : Ressource activée de niveau 1 ou plus, Donjon tenu, Citadelle tenue.
     « Bâtir une tour de guet » coûte TOUR_PRIX mana du type de la zone ; une tour par zone. État : S.tours = {id: {nee}}.
   - Effet : +TOUR_DEF de défense contre les hordes pour la zone de la tour et ses voisines à vous (portée 1), sans cumul ;
     une horde qui vise une zone couverte arrive TOUR_PREAVIS cycles plus tard (accroches d'une ligne dans hordes.js).
   - La tour tombe si sa zone n'est plus à vous (sauvage, rival, mort du héros) ou si une horde passe sur sa zone.
   - Visible : symbole sur la minicarte, ligne à la Pierre d'éveil, petite tour 3D à côté de la Pierre.
   API : defenseTours(id) → {bonus, raisons}, preavisTours(id) → cycles gagnés, tourTest(id) (window.MZ.tour). Règles : REGLES.md, section 8. */
const TOUR_PRIX=3;      /* mana du type de la zone (provisoire) */
const TOUR_DEF=2;       /* défense contre les hordes, zone de la tour et voisines (décidé : +2) */
const TOUR_PREAVIS=2;   /* cycles de plus avant l'arrivée d'une horde qui vise une zone couverte (provisoire) */
const TOUR_TYPES={RES:'Ressource',DON:'Donjon',CIT:'Citadelle'};
const tourType=id=>ZB[id]?(ZB[id].mod||id):null;
const tourCourt=id=>ZB[id]?ZB[id].info.nom.split(',')[0]:id;

function initTours(){if(!S.tours||typeof S.tours!=='object')S.tours={};
  /* nouvelle partie (graine changée) : les tours de l'ancien monde disparaissent */
  if(S.toursGraine!==S.graine){S.tours={};S.toursGraine=S.graine}}

/* la zone peut-elle porter une tour ? renvoie '' si oui, sinon la raison */
function empecheTour(id){const t=tourType(id);if(!TOUR_TYPES[t])return'seules une Ressource, un Donjon ou une Citadelle à vous peuvent bâtir une tour';
  if(!S.own[id]||!S.act[id])return'la zone doit être à vous et activée';
  if(t==='RES'&&Math.abs(S.lv[id]||0)<1)return'la Ressource doit être au niveau 1 ou plus';
  return''}
/* la tour qui couvre une zone à vous : la sienne d'abord, sinon celle d'une voisine */
function tourQuiCouvre(id){initTours();if(!ZB[id]||!S.own[id])return null;if(S.tours[id])return id;
  return((typeof VOISINES!=='undefined'&&VOISINES[id])||[]).find(v=>S.tours[v]&&S.own[v])||null}
function defenseTours(id){const r={bonus:0,raisons:[]},t=tourQuiCouvre(id);
  if(t){r.bonus=TOUR_DEF;r.raisons.push(t===id?'tour de guet':'tour de guet '+(typeof de_==='function'?de_(tourCourt(t)):'de '+tourCourt(t)))}
  return r}
function preavisTours(id){return tourQuiCouvre(id)?TOUR_PREAVIS:0}

/* ---------- bâtir, tomber ---------- */
function batirTour(id,gratuit){initTours();if(!ZB[id]||S.tours[id])return false;
  if(!gratuit){if(empecheTour(id))return false;const m=ZMANA[id]||'Pierre';if(!peutPayer(m,TOUR_PRIX))return false;payer(m,TOUR_PRIX)}
  S.tours[id]={nee:S.nc};save();etatHud();hudKey='';majTours3D();
  if(typeof sfx==='function')sfx('hit');
  if(started)toast('Tour de guet · '+tourCourt(id),'Ses guetteurs surveillent la zone et ses voisines',`Défense +${TOUR_DEF} contre les hordes ici et sur vos zones voisines ; une horde qui les vise est repérée de loin et arrive ${TOUR_PREAVIS} cycles plus tard.`);
  return true}
const TOUR_FILE=[];
function tomberTour(id,pourquoi){initTours();if(!S.tours[id])return false;delete S.tours[id];majTours3D();hudKey='';
  TOUR_FILE.push(['Tour de guet abattue · '+tourCourt(id),pourquoi,'Vous pourrez en bâtir une autre quand la zone sera de nouveau à vous.']);return true}

/* une horde qui passe abat la tour de sa zone (enveloppe de defaite, hordes.js) */
if(typeof defaite==='function'){const _tourDefaite=defaite;
  defaite=function(id){const l=_tourDefaite(id);if(S.tours&&S.tours[id]){tomberTour(id,'La horde est passée sur la zone.');TOUR_FILE.pop();l.push('La horde abat la tour de guet.')}return l}}
/* annonce : on dit au joueur que la tour a repéré la horde (le délai lui-même est ajouté dans leverHorde) */
if(typeof leverHorde==='function'){const _tourLever=leverHorde;
  leverHorde=function(src,cible,force){const h=_tourLever(src,cible,force);
    if(h&&preavisTours(h.cible)){h.tour=tourQuiCouvre(h.cible);if(started&&S.own[h.cible]){const e=$('t3');if(e)e.textContent+=` Votre tour de guet ${typeof de_==='function'?de_(tourCourt(h.tour)):''} l'a repérée de loin : ${TOUR_PREAVIS} cycles de plus pour vous préparer.`}}
    return h}}
/* mort du héros : toutes ses zones lui échappent, ses tours tombent (avant que l'héritier reçoive le territoire de départ) */
if(typeof mort==='function'){const _tourMort=mort;mort=function(){if(S.tours){S.tours={};majTours3D()}return _tourMort.apply(this,arguments)}}

/* ---------- veille : zone perdue, affichage 3D, messages ---------- */
setInterval(()=>{if(typeof S==='undefined'||!started)return;initTours();
  for(const id in S.tours)if(!ZB[id]||!S.own[id])tomberTour(id,typeof maitreRival==='function'&&maitreRival(id)?'Une maison rivale a pris la zone.':'La zone n\'est plus à vous.');
  majTours3D();
  if(mode==='monde'&&TOUR_FILE.length&&(typeof toastT==='undefined'||toastT<1))toast(...TOUR_FILE.shift())},1000);

/* ---------- Pierre d'éveil ---------- */
function optionsTours(Z){initTours();const o=[],id=Z.id,t=tourType(id);
  if(S.tours[id]){o.push({l:'Tour de guet',ic:'♖',off:true,d:`défense +${TOUR_DEF} contre les hordes ici et sur vos zones voisines · préavis +${TOUR_PREAVIS} cycles`});return o}
  const c=tourQuiCouvre(id);
  if(c)o.push({l:'Sous la garde d\'une tour de guet',ic:'♖',off:true,d:`la tour ${typeof de_==='function'?de_(tourCourt(c)):'de '+tourCourt(c)} : défense +${TOUR_DEF} contre les hordes, préavis +${TOUR_PREAVIS} cycles`});
  if(!TOUR_TYPES[t]||!S.own[id])return o;
  const non=empecheTour(id),m=ZMANA[id]||'Pierre',assez=peutPayer(m,TOUR_PRIX);
  if(non)o.push({l:'Tour de guet impossible pour l\'instant',ic:'♖',off:true,d:non});
  else o.push({l:'Bâtir une tour de guet',ic:'♖',cls:'p',off:!assez,
    d:`${TOUR_PRIX} ${m} (réserve ${resN(m)})${assez?'':' : pas assez de mana'} · défense +${TOUR_DEF} contre les hordes ici et autour, préavis +${TOUR_PREAVIS} cycles`,
    go:()=>{if(batirTour(id))openEveil(Z)}});
  return o}

/* ---------- minicarte : une petite tour crénelée près du centre de la zone ---------- */
function dessinerTours(mc,s,ox,oz){if(typeof S==='undefined'||!S.tours)return;
  for(const id in S.tours){const Z=ZB[id];if(!Z)continue;const x=(Z.c[0]+ox)*s-13,y=(Z.c[1]+oz)*s-6;
    mc.save();mc.fillStyle='#f4ead2';mc.strokeStyle='#1a1410';mc.lineWidth=1.5;mc.beginPath();
    mc.moveTo(x-4,y+6);mc.lineTo(x-3,y-4);mc.lineTo(x-5,y-4);mc.lineTo(x-5,y-8);mc.lineTo(x-3,y-8);mc.lineTo(x-3,y-6);mc.lineTo(x-1,y-6);mc.lineTo(x-1,y-8);
    mc.lineTo(x+1,y-8);mc.lineTo(x+1,y-6);mc.lineTo(x+3,y-6);mc.lineTo(x+3,y-8);mc.lineTo(x+5,y-8);mc.lineTo(x+5,y-4);mc.lineTo(x+3,y-4);mc.lineTo(x+4,y+6);mc.closePath();
    mc.fill();mc.stroke();mc.restore()}}

/* ---------- 3D : une tour légère en primitives (environ 70 triangles), à côté de la Pierre ---------- */
const TOURS3D={};let tourMats=null;
function tour3D(){if(!tourMats)tourMats={p:M(0x8a7f70),t:M(0x5a2f28),f:new THREE.MeshBasicMaterial({color:new THREE.Color(2.4,1.6,.7)})};
  const g=new THREE.Group(),add=(geo,mat,y)=>{const m=new THREE.Mesh(geo,mat);m.position.y=y;m.castShadow=true;g.add(m);return m};
  add(new THREE.CylinderGeometry(1.1,1.5,7,6),tourMats.p,3.5);add(new THREE.CylinderGeometry(1.6,1.6,1,6),tourMats.p,7.5);
  add(new THREE.ConeGeometry(1.9,2.4,6),tourMats.t,9.2);add(new THREE.BoxGeometry(.5,.7,.1),tourMats.f,6.6).position.z=1.2;
  return g}
function placeTour3D(id){const Z=ZB[id],a=Z&&Z.alt;if(!a)return null;
  /* à 8 m de la Pierre, sur le côté, de préférence dans la zone */
  for(const sd of[1,-1]){const x=a.x+Math.cos(a.yaw)*8*sd,z=a.z-Math.sin(a.yaw)*8*sd;if(sd===-1||zoneAt(x,z)===Z)return[x,z]}}
function majTours3D(){if(typeof scene==='undefined'||typeof S==='undefined')return;const T=S.tours||{};
  for(const id in TOURS3D)if(!T[id]){scene.remove(TOURS3D[id]);delete TOURS3D[id]}
  for(const id in T){if(!ZB[id])continue;let g=TOURS3D[id];if(!g){g=TOURS3D[id]=tour3D();scene.add(g)}
    const p=placeTour3D(id);if(p)g.position.set(p[0],stand(p[0],p[1],1e3).g,p[1])}}

/* test : bâtir sans payer (window.MZ.tour(id)), sur une Ressource, un Donjon ou une Citadelle (prise d'office si elle ne l'est pas) ; sans id, la zone où se tient le héros, ou la première zone éligible */
function tourTest(id){initTours();id=id||(curZ&&TOUR_TYPES[tourType(curZ.id)]&&S.own[curZ.id]?curZ.id:ZN.map(Z=>Z.id).find(z=>!S.tours[z]&&!empecheTour(z)));
  if(!id||!ZB[id]||!TOUR_TYPES[tourType(id)])return null;if(!S.own[id]){S.own[id]=S.act[id]=true}batirTour(id,true);return S.tours[id]||null}
