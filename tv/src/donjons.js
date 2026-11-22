/* MozaWorld : les Donjons aménagés (19 nov., décisions de l'utilisateur ; REGLES.md sections 6 et 8).
   « Un Donjon conquis s'aménage ; chaque Donjon possédé déverrouille un nouveau dispositif de défense ; hordes et adversaires
   doivent vaincre ce donjon personnalisé ; le mana paie les pièges. » Validé le 19 nov. : « Aménager chaque Donjon possédé,
   et plus seulement celui d'origine ; chaque Donjon aménagé ajoute ses pièges à la défense de ses voisines. »
   - Tout Donjon tenu (à vous et activé) s'aménage depuis sa Pierre d'éveil : « Aménager les salles ».
     Le Donjon d'origine (DON) garde ses 4 salles et son tableau S.pieges (sauvegardes inchangées, assaut périodique d'economie.js).
     Les autres ont leurs salles dans S.donjons[id].p : 2 au palier 0 ou 1, 3 au palier 2, 4 au palier 3 et plus (provisoire).
     Une salle au-delà du palier actuel est scellée : son piège reste en place mais ne joue pas.
   - Catalogue : 2 dispositifs par Donjon tenu (provisoire, 19 nov. : était +1) : Herse, Glyphe, puis Lave, Gardien, puis deux pièges
     propres à ce module, payés en Sève et en Pierre).
   - Une horde qui vise un Donjon tenu, ou une zone à vous voisine d'un Donjon tenu, traverse ses salles : chaque piège actif
     ajoute sa force à la défense, la Glyphe double le suivant (mêmes règles que l'assaut du Donjon d'origine).
     L'entretien suit le rythme choisi (S.ent) : par cycle, à l'assaut (2 mana par piège à chaque horde), ou usure (3 assauts).
     Si la horde passe et qu'elle visait le Donjon lui-même, elle saccage sa première salle piégée.
   - Une contestation de rival sur un Donjon aménagé : −10 points de chance par piège actif (provisoire, accroche dans rivaux.js).
   Pour les autres modules : piegesDonjon(id) → nombre de pièges actifs d'un Donjon tenu (0 sinon) ;
   reparerPieges(id) → réveille les pièges endormis et rend leurs 3 assauts aux pièges usés (sans mana : le Comptoir paie). */
const DJ_VOISINES=.5,DJ_VOISINES_MAX=4;   /* une voisine du Donjon reçoit la moitié de la traversée, +4 au plus (provisoire, 19 nov. : était toute la traversée) */
const DJ_RIVAL=.10;       /* chance retirée à une contestation de rival par piège actif (provisoire) */
const DJ_ORDRE=['herse','glyphe','lave','gardien','ronces','eboulis'];
/* deux dispositifs propres aux Donjons aménagés, payés avec des types de mana que le paquet n'utilise pas forcément */
Object.assign(PIEGES,{
  ronces:{nom:'Ronces de sève',m:'Sève',pose:3,force:4,txt:'Elles repoussent sur n\'importe quel sol : la horde ne peut pas les saccager.'},
  eboulis:{nom:'Voûte d\'éboulis',m:'Pierre',pose:4,get force(){return 2+donjonsTenus().length},txt:'Force 2, plus 1 par Donjon que vous tenez.'}});

const estDJ=id=>!!ZB[id]&&estDON(ZB[id]);
const donjonsTenus=()=>ZN.filter(Z=>estDON(Z)&&tient(Z.id)).map(Z=>Z.id);
const nbDispositifs=()=>{const n=donjonsTenus().length;return n?Math.min(DJ_ORDRE.length,2*n):0};
const dispositifs=()=>DJ_ORDRE.slice(0,nbDispositifs());

function initDonjons(){if(typeof S==='undefined')return;
  if(!S.donjons||typeof S.donjons!=='object'||Array.isArray(S.donjons))S.donjons={};
  /* nouvelle partie (graine changée) : les salles de l'ancien monde sont oubliées */
  if(S.donjonsGraine!==S.graine){S.donjons={};S.donjonsGraine=S.graine;S.djEnt=S.ent}
  /* le rythme d'entretien a changé (menu Pause ou salles) : on remet les pièges des autres Donjons d'aplomb, comme ceux du Donjon d'origine */
  if(S.djEnt!==S.ent){for(const id in S.donjons)for(const x of S.donjons[id].p||[])if(x){x.dort=false;if(S.ent===2&&!(x.u>0))x.u=3}S.djEnt=S.ent}}

/* tableau des pièges d'un Donjon : S.pieges pour le Donjon d'origine, S.donjons[id].p pour les autres */
function piegesTab(id,creer){initDonjons();if(id==='DON')return Array.isArray(S.pieges)?S.pieges:[];
  let d=S.donjons[id];if(!d){if(!creer)return[];d=S.donjons[id]={p:[null,null,null,null]}}
  if(!Array.isArray(d.p))d.p=[];while(d.p.length<4)d.p.push(null);return d.p}
const nbSalles=id=>id==='DON'?4:Math.min(4,1+Math.max(1,Math.abs(S.lv[id]||0)));

/* ---------- Noms des salles, tirés de la zone ---------- */
const DJ_BIOME={'Forêt boréale':'Galerie des racines gelées','Fjord':'Grotte sous le fjord','Canyon':'Faille rouge','Désert de sable':'Salle des sables mouvants',
  'Oasis':'Citerne de l\'oasis','Cité en ruines':'Nef effondrée','Récif':'Bassin de corail','Cavernes cristallines':'Salle des cristaux','Lande':'Tertre de bruyère',
  'Steppe':'Silo des vents','Delta fluvial':'Écluse noyée','Falaise côtière':'Corniche des embruns','Volcan':'Puits de lave','Glacier':'Crevasse bleue','Mangrove':'Racines noyées',
  'Jungle':'Temple sous les lianes','Archipel':'Grotte marine','Haute montagne':'Gouffre des cimes','Forêt de champignons géants':'Salle des spores',
  'Marais':'Tourbière noyée','Désert de sel':'Galerie de sel','Iles flottantes':'Racines suspendues','Savane':'Termitière creuse','Toundra':'Cave du pergélisol'};
const djDe=n=>/^[AEIOUYÉÈÊÂÎÔaeiouyéèêâîôh]/.test(n)?'d\''+n:'de '+n;
const djCourt=id=>ZB[id]?zI(id).nom.split(',')[0]:id;
const djLieu=id=>{const n=djCourt(id),m=n.match(/\bd(?:e |['’])([^']+)$/);return m?m[1]:n.replace(/^(Le|La|Les|L['’]) ?/,'')};
function nomsSalles(id){if(id==='DON')return SALLES;const Z=ZB[id],d=(Z&&Z.d)||{},lieu=djLieu(id);
  return[`Porte ${djDe(lieu)}`,DJ_BIOME[d.biome]||`Galerie ${djDe(lieu)}`,d.culture?`Crypte ${d.culture.toLowerCase()}`:`Crypte ${djDe(lieu)}`,`Chambre du Sceau ${djDe(lieu)}`]}

/* ---------- Pièges actifs et traversée ---------- */
const sallesOuvertes=id=>piegesTab(id).slice(0,nbSalles(id));
function piegesDonjon(id){if(!estDJ(id)||!tient(id))return 0;return sallesOuvertes(id).filter(x=>x&&PIEGES[x.k]&&!x.dort).length}
/* la horde traverse les salles ouvertes dans l'ordre : chaque piège éveillé retient sa force, la Glyphe double le suivant */
function traversee(id){const T=sallesOuvertes(id),N=nomsSalles(id),l=[],tirs=[];let v=0,mult=1;
  T.forEach((x,i)=>{if(!x||!PIEGES[x.k])return;const P_=PIEGES[x.k];
    if(x.dort){l.push(`${N[i]} : ${P_.nom} dort.`);return}
    const f=P_.force*mult;mult=x.k==='glyphe'?2:1;v+=f;tirs.push(i);l.push(`${N[i]} : ${P_.nom} retient ${f}.`)});
  return{v,tirs,lignes:l}}
/* Donjons tenus dont la horde qui vise id traverse les salles : id lui-même, ou un Donjon voisin */
const donjonsTouches=id=>donjonsTenus().filter(D=>D===id||(VOISINES[D]||[]).indexOf(id)>=0);
/* parts de défense pour defenseHorde (hordes.js) : remplace « pièges du Donjon voisin, 2 au plus » */
function piegesHorde(id){const parts=[];if(!S.own[id])return parts;
  for(const D of donjonsTouches(id)){const t=traversee(D);if(!t.v)continue;const v=D===id?t.v:Math.min(DJ_VOISINES_MAX,Math.floor(t.v*DJ_VOISINES));
    if(v)parts.push([D===id?`salles piégées (${t.tirs.length})`:`pièges du Donjon voisin ${djCourt(D)} (${t.tirs.length})`,v])}
  return parts}
function reparerPieges(id){let n=0;for(const x of piegesTab(id))if(x){let r=false;if(x.dort){x.dort=false;r=true}if(S.ent===2&&x.u<3){x.u=3;r=true}if(r)n++}
  if(n){save();hudKey=''}return n}

/* ---------- Entretien par cycle (rythme 0) : les Donjons autres que celui d'origine, qui est payé par economie.js ---------- */
function donjonsCycle(lignes){initDonjons();if(S.ent!==0)return;let paye=0,dorment=0;
  for(const D of donjonsTenus()){if(D==='DON')continue;for(const x of sallesOuvertes(D)){if(!x||!PIEGES[x.k])continue;const m=PIEGES[x.k].m;
    if(peutPayer(m,1)){payer(m,1);paye++;x.dort=false}else{x.dort=true;dorment++}}}
  if(paye+dorment)lignes.push(`−${paye} mana d'entretien des autres Donjons${dorment?`, ${dorment} piège(s) endormi(s)`:''}`)}

/* ---------- La horde arrive : entretien à l'assaut avant, usure et saccage après ----------
   defenseHorde reste un calcul sans effet (il sert aussi aux aperçus) ; les effets sur les pièges se font ici, autour de hordeArrive. */
function hordeAvecPieges(orig){return function(src){
  if(typeof S==='undefined'||!S.hordes)return orig.apply(this,arguments);
  src=src||Object.keys(S.hordes).sort((a,b)=>S.hordes[a].arrive-S.hordes[b].arrive)[0];const h=S.hordes[src];
  if(!h)return orig.call(this,src);
  const c=h.cible,joue=S.own[c]&&typeof sourceHorde==='function'&&sourceHorde(src)&&!(typeof cacheParBrume==='function'&&cacheParBrume(c));
  const touches=joue?donjonsTouches(c).filter(D=>sallesOuvertes(D).some(Boolean)):[],notes=[];
  if(S.ent===1)for(const D of touches){let paye=0,non=0;for(const x of sallesOuvertes(D)){if(!x||!PIEGES[x.k])continue;const m=PIEGES[x.k].m;
    if(peutPayer(m,2)){payer(m,2);paye++;x.dort=false}else{x.dort=true;non++}}
    notes.push(`Entretien à l'assaut (${djCourt(D)}) : −${2*paye} mana${non?`, ${non} piège(s) sans mana ne se déclenchent pas`:''}.`)}
  const tirs={};for(const D of touches)tirs[D]=traversee(D).tirs;
  const r=orig.call(this,src);
  if(S.ent===2)for(const D of touches){const T=piegesTab(D),N=nomsSalles(D);for(const i of tirs[D]){const x=T[i];if(!x)continue;x.u=(x.u>0?x.u:3)-1;
    if(x.u<=0){T[i]=null;notes.push(`${N[i]} (${djCourt(D)}) : ${PIEGES[x.k].nom} casse.`)}}}
  if(r&&r.passe&&touches.indexOf(c)>=0){const T=piegesTab(c),n=nbSalles(c),i=T.findIndex((x,j)=>j<n&&x&&x.k!=='ronces');
    if(i>=0){notes.push(`La horde saccage ${nomsSalles(c)[i]} : ${PIEGES[T[i].k].nom} est perdu.`);T[i]=null}}
  if(notes.length){if(r&&Array.isArray(r.lignes))r.lignes.push(...notes);save();hudKey='';
    if(started)toast('Donjons aménagés','Les salles après la horde',notes.join(' '))}
  return r}}
if(typeof hordeArrive==='function')hordeArrive=hordeAvecPieges(hordeArrive);

/* ---------- Menus de la Pierre d'éveil ---------- */
function optionsDonjons(Z){const id=Z&&Z.id;if(!estDJ(id)||!tient(id))return[];initDonjons();
  const n=nbSalles(id),pose=sallesOuvertes(id).filter(Boolean).length;
  return[{l:'Aménager les salles',ic:'⛬',cls:'p',d:`${n} salle${n>1?'s':''} · ${pose} piège(s), ${piegesDonjon(id)} actif(s) · ${nbDispositifs()} dispositif(s) connu(s) · réserve ${resTot()}`,go:()=>openAmenager(id)}]}
function voisinesDefendues(id){return(VOISINES[id]||[]).filter(v=>S.own[v]&&ZB[v]).map(djCourt)}
function openAmenager(id,f){initDonjons();const Z=ZB[id];if(!Z||!tient(id))return toMonde();mode='menu';document.body.classList.add('jeu-ouvert');
  const T=piegesTab(id,true),n=nbSalles(id),N=nomsSalles(id),nt=donjonsTenus().length,t=traversee(id);
  const o=T.map((x,i)=>{const P_=x&&PIEGES[x.k];
    if(i>=n)return{l:`${N[i]} : scellée`,ic:'⛓',off:true,d:`s'ouvre au palier ±${i}${P_?' · '+P_.nom+' attend, sans jouer':''}`};
    return{l:`${N[i]} : ${P_?P_.nom:'vide'}`,ic:P_?'⛬':'○',d:P_?`${P_.m} · force ${P_.force}${S.ent===2?' · '+x.u+' assaut(s)':''}${x.dort?' · endormi':''} · OK changer`:'OK poser un piège',go:()=>changerPiegeDJ(id,i)}});
  o.push({l:'Entretien des pièges',ic:'⟳',d:ENTRETIEN[S.ent].nom+' · pour tous vos Donjons',go:()=>{S.ent=(S.ent+1)%3;
    for(const x of S.pieges||[])if(x){x.dort=false;if(S.ent===2&&!(x.u>0))x.u=3}initDonjons();save();openAmenager(id,UI.f)}});
  if(id==='DON')o.push({l:'Provoquer un assaut maintenant (test)',ic:'⚔',go:()=>{closeUI();mode='monde';S.dernierAssaut=S.nc;assaut([])}});
  o.push({l:'Retour à la Pierre',ic:'◆',go:()=>openEveil(Z)});
  const vois=voisinesDefendues(id),cat=dispositifs().map(k=>PIEGES[k].nom).join(', ');
  const assautTxt=id==='DON'?` Le monde sauvage attaque aussi ce Donjon d'origine tous les ${typeof cyclesAssaut==='function'?cyclesAssaut():ASSAUT_CYCLES} cycles.`:'';
  ui('menu',{sur:'Donjon à vous · aménager',t:id==='DON'?'Les salles des Neuf Édits':'Les salles '+djDe(djLieu(id)),f,
    corps:`<p class="petit">Réserve : ${resHTML()}.</p><p class="petit">${n} salle${n>1?'s':''} ouverte${n>1?'s':''} sur 4 (une de plus à chaque palier, jusqu'à 4). Chaque piège a son type de mana, pour la pose comme pour l'entretien. Une horde qui vise ce Donjon${vois.length?' ou une de ses voisines à vous ('+vois.join(', ')+')':' ou une de ses voisines à vous'} traverse ces salles dans l'ordre : aujourd'hui, elles retiennent ${t.v} quand la horde vise ce Donjon, et ${Math.min(DJ_VOISINES_MAX,Math.floor(t.v*DJ_VOISINES))} quand elle vise une voisine (la moitié, ${DJ_VOISINES_MAX} au plus).${assautTxt}</p><p class="petit">Dispositifs connus (${nt} Donjon${nt>1?'s':''} tenu${nt>1?'s':''}) : ${cat}. Chaque Donjon tenu en déverrouille deux.</p><p class="petit">${ENTRETIEN[S.ent].txt}</p>`,
    back:()=>openEveil(Z),opts:o})}
function changerPiegeDJ(id,i){const T=piegesTab(id,true),cur=T[i],k0=cur?cur.k:null,N=nomsSalles(id),ok=dispositifs();
  ui('menu',{sur:N[i],t:'Choisir un piège',corps:`<p class="petit">Réserve : ${resHTML()}. Retirer un piège ne rend pas le mana.</p>`,back:()=>openAmenager(id,i),
    opts:[...DJ_ORDRE.map((k,j)=>{const P_=PIEGES[k],dv=ok.indexOf(k)>=0;
      return{l:P_.nom+(k===k0?' (en place)':dv?'':' (verrouillé)'),ic:dv?P_.pose:'⛓',d:dv?`${P_.pose} ${P_.m} · force ${P_.force} · ${P_.txt}`:`se déverrouille au ${(n=>n>1?n+'e':'premier')(Math.ceil((j+1)/2))} Donjon tenu`,off:!dv||k===k0||!peutPayer(P_.m,P_.pose),
        go:()=>{payer(P_.m,P_.pose);T[i]={k,u:3,dort:false};save();etatHud();sfx('hit');openAmenager(id,i)}}}),
      {l:'Salle vide',ic:'○',off:!cur,go:()=>{T[i]=null;save();openAmenager(id,i)}},{l:'Retour',ic:'◆',go:()=>openAmenager(id,i)}]})}

/* ---------- Pour les tests : MZ.amenager(id) ouvre les salles ; MZ.amenager(id, ['herse','lave']) pose sans payer ---------- */
function etatDonjon(id){return{id,tenu:tient(id),salles:nbSalles(id),noms:nomsSalles(id).slice(0,nbSalles(id)),pieges:piegesTab(id).map(x=>x&&x.k),
  actifs:piegesDonjon(id),traversee:traversee(id).v,catalogue:dispositifs(),tenus:donjonsTenus()}}
function amenagerTest(id,liste){initDonjons();id=id||donjonsTenus()[0]||'DON';if(!estDJ(id))return null;
  if(!Array.isArray(liste)){if(tient(id)){closeUI();openAmenager(id)}return etatDonjon(id)}
  const T=piegesTab(id,true);for(let i=0;i<4;i++){const k=liste[i];T[i]=k&&PIEGES[k]?{k,u:3,dort:false}:null}
  save();hudKey='';return etatDonjon(id)}
/* mort du héros : « on perd tout », les pièges de tous les Donjons aussi (testeur, 19 nov., provisoire). Sans cela, l'héritier
   retrouvait les salles piégées de son Donjon de départ, et celles d'un ancien Donjon au moment de le reprendre. */
if(typeof mort==='function'){const _djMort=mort;mort=function(){if(typeof S!=='undefined'){S.donjons={};S.pieges=[null,null,null,null]}return _djMort.apply(this,arguments)}}
