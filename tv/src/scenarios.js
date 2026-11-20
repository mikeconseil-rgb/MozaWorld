/* MozaWorld 2.7 : scénarios de zone (choix moraux).
   Décidé le 18 nov. 2026 (« tout oui ») : à chaque éveil, une scène pose un dilemme ; une réponse enfonce la zone
   d'un palier dans son pôle, l'autre la ramène d'un palier vers l'autre pôle. Chaque réponse a un prix réel,
   annoncé ou caché. Paliers 3 et 6 : respirations, sans choix. Une parole donnée reste donnée : si l'épreuve
   échoue, on la retente sans rechoisir. Les traces sont gardées par le monde, même après la mort du héros.
   Soir 1 : la scène, les réponses, le prix. Soir 2 : l'épreuve habillée par la scène (champ ep). Soir 3 : effets des traces.
   Une scène est rangée sous le palier où se trouve la zone quand on éveille la Pierre.
   rep : réponses { vers (palier visé), l (texte du bouton), prix {mana, glace, pv, perte, exil}, cache (prix non affiché),
         prixTxt (le prix en mots), trace (drapeau gardé par le monde), ep (épreuve prévue, soir 2) } */
const SCENARIOS={
DON045:{
  perso:'Le voïévode Mstisla, l\'inspecteur Zakhar, la veuve Oustina',
  scenes:{
  '0':{t:'Quatre cents par hiver',
    txt:'Hiver de l\'An 14. Le voïévode Mstisla a promis au trésor quatre cents zibelines par hiver. La taïga en a donné deux cent dix. Il pose le registre devant vous et vous tend la plume. C\'est vous qui écrirez le chiffre.',
    rep:[{vers:-1,l:'Écrire 400',prixTxt:'rien aujourd\'hui',cache:true,trace:'detteHameau',ep:'Le double compte'},
         {vers:1,l:'Écrire 210',prix:{glace:2},prixTxt:'chassé du fort : −2 mana Glace',ep:'Le compte nu'}]},
  /* ---------- Mensonge ---------- */
  '-1':{t:'La suie',
    txt:'Il manque cent quatre-vingt-dix peaux, et les vraies sont brunes. La veuve Oustina baisse les yeux : la suie des lampes noircit tout, dit-elle, même la fourrure.',
    rep:[{vers:-2,l:'Racler les lampes du hameau',prix:{pv:1},prixTxt:'−1 PV au prochain combat · le hameau passe l\'hiver dans le noir',trace:'hameauNoir',ep:'Le fort sans lampes'},
         {vers:0,l:'Avouer au trésor avant le convoi',prix:{mana:3},prixTxt:'le voïévode garde votre solde : −3 mana',ep:'Fuir le fort'}]},
  '-2':{t:'Peau teinte',resp:true,
    txt:'Les chiens du hameau sont passés à la suie, un par un. Ils valent des zibelines au registre, tant qu\'il ne pleut pas. Le convoi part ce soir, et il faut passer le péage.',
    rep:[{vers:-3,l:'Faire passer le convoi',prixTxt:'aucun',ep:'Le péage'}]},
  '-3':{t:'Les années manquantes',
    txt:'L\'inspecteur Zakhar annonce sa venue. Les registres des Ans 17 à 22 se contredisent à chaque page. Le relieur attend, des peaux noires plein les bras.',
    rep:[{vers:-4,l:'Arracher six feuillets',prix:{perte:1},prixTxt:'une carte de votre paquet est perdue',cache:true,trace:'feuillets',ep:'Recopier le registre'},
         {vers:-2,l:'Rendre les feuillets à Zakhar',prixTxt:'le voïévode vous livre comme seul coupable',ep:'La garde du voïévode'}]},
  '-4':{t:'Les trappeurs',
    txt:'Il n\'y a plus de chiens. Le voïévode demande aux trappeurs de marcher à quatre pattes sous les peaux, devant l\'inspecteur.',
    txtTrace:{detteHameau:'Les trappeurs n\'ont pas oublié la dette du premier hiver : ils veulent être payés d\'abord.'},
    rep:[{vers:-5,l:'Accepter la mascarade',prixTxt:'l\'Antre voisin, d\'où viennent les trappeurs, vous en voudra',trace:'rancuneAntre',ep:'La revue'},
         {vers:-3,l:'Laisser partir les familles vers le sud',prixTxt:'la zone ne produit plus de Glace pendant un repos',trace:'famillesSud',ep:'Le passage'}]},
  '-5':{t:'Quatre cents, toutes noires',resp:true,
    txt:'Le compte est rond, les peaux sont égales, le froid mord tout le monde. La meute teinte gronde dans la loge.',
    rep:[{vers:-6,l:'Affronter la meute teinte',prixTxt:'aucun',ep:'Combat de boss : la Meute teinte'}]},
  '-6':{t:'Le Coffre',
    txt:'An 23. Zakhar est descendu au Coffre, la loge creusée sous les mélèzes. Il frotte une peau au pouce mouillé ; elle déteint. Le voïévode vous tend la clé.',
    txtTrace:{feuillets:'Zakhar a déjà lu les feuillets arrachés. Il sait.'},
    rep:[{vers:-7,l:'Fermer la porte sur lui',prixTxt:'?',cache:true,trace:'coffreScelle',ep:'Combat de boss : l\'escorte de Zakhar'},
         {vers:-5,l:'Lui ouvrir',prix:{pv:7,exil:'DON045#-4'},prixTxt:'arrêté avec le voïévode : −7 PV, « Les Années manquantes » quitte votre paquet',ep:'Sortir du Coffre'}]},
  '-7':{t:'Le registre de l\'An 23',
    txt:'Le registre de l\'An 23 tombe juste. L\'Inspecteur gelé garde la porte du Coffre, et personne ne demande où il est.',
    rep:[{vers:-6,l:'Rouvrir le Coffre',prix:{pv:4},prixTxt:'−4 PV : ce qui est dedans ne veut pas sortir',ep:'Le Coffre'}]},
  /* ---------- Vérité ---------- */
  '1':{t:'Le doute',
    txt:'Chassé du fort, vous vivez au hameau. Sur le convoi qui part, une peau vous laisse le doigt noir.',
    rep:[{vers:2,l:'Frotter une peau devant le marché',prix:{pv:2},prixTxt:'−2 PV au prochain combat · Oustina vous maudit',trace:'hameauSait',ep:'Le pouce'},
         {vers:0,l:'Vous taire et rentrer au fort',prixTxt:'?',cache:true,trace:'silenceAchete',ep:'Rentrer avant le couvre-feu'}]},
  '2':{t:'La teinture qui coule',resp:true,
    txt:'Il pleut au départ du convoi. Les peaux pleurent des rigoles noires sur la neige, jusqu\'aux niches où l\'on teint.',
    rep:[{vers:3,l:'Suivre les rigoles noires',prixTxt:'aucun',ep:'Les rigoles'}]},
  '3':{t:'Les chiens',
    txt:'Zakhar arrive. Vous savez que les chiens du hameau ont été teints. Les dénoncer, c\'est faire punir le hameau entier.',
    rep:[{vers:4,l:'Recompter les chiens devant l\'inspecteur',prixTxt:'la famille d\'Oustina est déportée · l\'Assemblée voisine votera contre vous',trace:'oustinaDeportee',ep:'Le recensement'},
         {vers:2,l:'Cacher la meute',prix:{mana:3},prixTxt:'−3 mana · vous voilà complice',trace:'complice',ep:'Cacher la meute'}]},
  '4':{t:'La porte du Coffre',
    txt:'Zakhar veut descendre au Coffre. Les hommes du voïévode et les trappeurs gardent la loge.',
    txtTrace:{silenceAchete:'Le voïévode vous rappelle votre silence du premier hiver. Il menace de le révéler.'},
    rep:[{vers:5,l:'Ouvrir de force',prixTxt:'vous combattez des hommes affamés · l\'Antre voisin vous en voudra',trace:'rancuneAntre',ep:'Combat : les trappeurs en peaux'},
         {vers:3,l:'Laisser le voïévode « retrouver » les peaux',prix:{mana:3},prixTxt:'−3 mana · Zakhar vous soupçonne',ep:'Le guet'}]},
  '5':{t:'Le registre de l\'An 23',resp:true,
    txt:'Le procès du voïévode tourne à l\'émeute. Sa garde tire les sabres dans la cour du fort.',
    rep:[{vers:6,l:'Affronter le voïévode',prixTxt:'aucun',ep:'Combat de boss : le voïévode Mstisla'}]},
  '6':{t:'Le chiffre',
    txt:'Le compte nu : quatre mille peaux, dont trois mille six cents teintes. Si ce chiffre part au trésor, le hameau sera rasé pour fraude. Zakhar vous tend la plume.',
    rep:[{vers:7,l:'Écrire le chiffre vrai',prix:{pv:4},prixTxt:'le hameau est rasé · −4 PV',trace:'hameauRase',ep:'Combat de boss : les Comptés'},
         {vers:5,l:'Écrire un chiffre arrangé',prixTxt:'vous voilà en dette envers l\'inspecteur',trace:'detteInspecteur',ep:'Duel d\'arguments : Zakhar'}]},
  '7':{t:'Le compte juste',
    txt:'Le registre est juste. Là où était le hameau, la neige est blanche et vide. Les Comptés se taisent.',
    rep:[{vers:6,l:'Rendre une part du chiffre',prix:{mana:4},prixTxt:'−4 mana : on rachète un peu de silence',ep:'Le chiffre'}]}
  }}
};

/* ---------- moteur ---------- */
const scenario=Z=>SCENARIOS[Z.id]||null;
function sceneDe(Z){const sc=scenario(Z);return sc&&sc.scenes[String(S.lv[Z.id]||0)]||null}
function traceA(t){return !!(S.memoire&&S.memoire[t])}
function poserTrace(Z,t){if(!t)return;S.memoire=S.memoire||{};if(!S.memoire[t])S.memoire[t]={zone:Z.id,vie:S.lives||1}}
/* le prix est payé au moment du choix : la parole est donnée */
function payerPrix(p){if(!p)return[];const fait=[];
  if(p.mt){const t=p.mt[0],n=p.mt[1];S.res[t]=Math.max(0,resN(t)-n);fait.push('−'+n+' '+t)}
  if(p.glace){S.res.Glace=Math.max(0,resN('Glace')-p.glace);fait.push('−'+p.glace+' Glace')}
  if(p.mana){for(let i=0;i<p.mana;i++){const b=MTYPES.reduce((m,x)=>resN(x)>resN(m)?x:m,MTYPES[0]);if(resN(b)>0)S.res[b]=resN(b)-1}fait.push('−'+p.mana+' mana')}
  if(p.pv){S.fatigue=(S.fatigue||0)+p.pv;fait.push('−'+p.pv+' PV au prochain combat')}
  for(let n=0;n<(p.perte||0);n++){const c=S.deck.map((k,i)=>[k,i]).filter(x=>DEPART.indexOf(x[0])<0);if(c.length){const x=c[Math.floor(Math.random()*c.length)];S.deck.splice(x[1],1);
    fait.push('« '+(CK[x[0]]?CK[x[0]].nom():x[0])+' » perdue')}}
  if(p.exil){const i=S.deck.indexOf(p.exil);if(i>=0){S.deck.splice(i,1);fait.push('« '+(CK[p.exil]?CK[p.exil].nom():p.exil)+' » exilée')}}
  return fait}
function choisirReponse(Z,r){S.parole=S.parole||{};S.parole[Z.id]={de:S.lv[Z.id]||0,vers:r.vers,l:r.l,ep:r.ep||''};
  const fait=payerPrix(r.prix);poserTrace(Z,r.trace);save();etatHud();
  if(fait.length)toast('Parole donnée',r.l,fait.join(' · '));startEpreuve(Z,r.vers)}
/* la parole tient tant que la zone n'a pas bougé ; elle tombe à la réussite */
function paroleEnCours(Z){const p=S.parole&&S.parole[Z.id];if(!p)return null;if(p.de!==(S.lv[Z.id]||0)){delete S.parole[Z.id];return null}return p}
function tenirParole(Z){if(S.parole)delete S.parole[Z.id]}
/* Éveil d'une zone à scénario : la scène remplace les boutons « Palier +1 / Palier −1 » */
function optionsScene(Z,diff,off){const p=paroleEnCours(Z);
  if(p)return[{l:'Tenir parole : '+p.l,ic:'▲',cls:p.vers>(S.lv[Z.id]||0)?'p':'m',off,d:diff(p.vers)+' · palier '+sgn(p.vers)+' · on ne revient pas sur une parole',go:()=>startEpreuve(Z,p.vers)}];
  const s=sceneDe(Z);if(!s)return null;
  return s.rep.map(r=>({l:r.l,ic:r.vers>(S.lv[Z.id]||0)?'▲':'▼',cls:r.vers>(S.lv[Z.id]||0)?'p':'m',off,
    d:`palier ${sgn(r.vers)||'0'} · ${diff(r.vers)} · prix : ${r.cache?'?':r.prixTxt}`,go:()=>choisirReponse(Z,r)}))}
function corpsScene(Z){const p=paroleEnCours(Z),s=sceneDe(Z);if(!s)return'';
  const tr=s.txtTrace?Object.keys(s.txtTrace).filter(traceA).map(t=>`<p><i>${s.txtTrace[t]}</i></p>`).join(''):'';
  return`<p class="petit" style="color:var(--laiton2)">${s.resp?'Scène sans choix':'Choix'} · ${s.t}</p><p>${s.txt}</p>${tr}`+
    (p?`<p class="petit">Vous avez donné votre parole : « ${p.l} ». Il reste à réussir l'épreuve.</p>`:'')}
/* une carte seulement quand la zone s'éloigne de 0 (se raviser n'en donne pas) */
const sceneDonneCarte=(Z,de,vers)=>!scenario(Z)||Math.abs(vers)>Math.abs(de);
