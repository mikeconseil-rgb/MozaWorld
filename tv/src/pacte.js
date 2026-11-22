/* MozaWorld : le pacte avec une maison rivale (lot 3, 19 nov. soir ; idée validée par l'utilisateur :
   « Pacte avec une maison rivale : contre des tesselles chaque cycle, une maison cesse de vous contester et tente ses épreuves
   contre une maison rivale ; si vous rompez le pacte, elle conteste deux fois. » REGLES.md, section 8.)
   - Un seul pacte à la fois, proposé depuis la fiche d'une maison (écran Rivaux) ou le Comptoir d'une Citadelle tenue.
     Prix par cycle selon la maison et ses zones (PACTE_PRIX), le premier cycle payé à la signature.
   - Pacte actif : la maison ne conteste plus vos zones et ne tente plus vos anciennes zones (empreinte). Quand elle agit, elle
     conteste de préférence une zone d'une autre maison (annoncée, tirée au sort à l'échéance : la zone passe à elle, ou redevient
     sauvage si elle tient déjà assez de zones), sinon elle tente l'épreuve d'une zone sauvage sans votre empreinte.
   - Paiement à chaque cycle ; une bourse qui ne suffira pas au prochain cycle donne un avertissement ; faute de paiement après
     l'avertissement, le pacte se rompt de lui-même.
   - Rupture (au menu ou faute de paiement) : la maison conteste deux fois de suite vos zones (deux contestations annoncées,
     l'une après l'autre) et refuse un nouveau pacte pendant PACTE_REFUS cycles.
   - Sombreclef peut trahir (annoncé dans sa fiche) ; Ombrelieue demande une dîme (la moitié du revenu de vos Citadelles).
   - À la mort, le pacte tombe, sans rancune (ni rupture, ni refus). Nouvelle partie : tout repart de zéro.
   État : S.pacte = {k (maison du pacte ou null), prix, de, warn, nc (dernier cycle traité), refus:{maison:cycle}, rup:{k,n}|null,
     cr:{k,id,de,du}|null (contestation d'une zone d'une maison rivale), v (héros), g (graine)}. Tous les chiffres sont provisoires. */
const PACTE_SYM='⚭';
const PACTE_REFUS=10;        /* après une rupture, la maison refuse un nouveau pacte pendant 10 cycles (provisoire) */
const PACTE_RUPTURE=2;       /* contestations après une rupture (idée validée) */
const PACTE_TRAHISON=.2;     /* Sombreclef : quand elle agit sous pacte, elle trahit une fois sur cinq (provisoire) */
const PACTE_CR_DELAI=2;      /* une contestation contre une maison rivale est annoncée 2 cycles avant (provisoire) */
const PACTE_CR_CHANCE=.5;    /* et réussit une fois sur deux (provisoire) */
/* prix par cycle (provisoire) : 2 + 1 par zone de la maison ; Comptevent −1, Grisaille +1 ; Ombrelieue : la dîme */
const dimePacte=()=>Math.max(1,Math.ceil((typeof revenuTess==='function'?revenuTess():0)/2));
/* 20 nov. (critique, provisoire) : le prix vaut au moins le quart du revenu en tesselles par cycle (Citadelles, caravanes en route,
   lois : Dîme et Relais), arrondi au-dessus ; on garde le plus élevé des deux, pour que le pacte reste un vrai choix en fin de partie */
const PACTE_PART=.25;
function revenuPacte(){let n=typeof revenuTess==='function'?revenuTess():0;
  if(typeof caravanes==='function')for(const c of caravanes())if(c.etat==='en route')n+=c.n||0;
  if(typeof loisTess==='function')n+=loisTess().tess||0;return n}
const quartPacte=()=>Math.ceil(revenuPacte()*PACTE_PART);
function prixTemp(r){const n=typeof zonesMaison==='function'?zonesMaison(r.k).length:0;
  return r.k==='cpv'?1+n:r.k==='gri'?3+n:r.k==='omb'?dimePacte():2+n}
function PACTE_PRIX(r){return Math.max(prixTemp(r),quartPacte())}
/* prix du cycle d'un pacte signé : le prix du tempérament fixé à la signature (la dîme d'Ombrelieue suit le revenu), ou le quart du revenu s'il est plus haut */
function prixCycle(p,r){return Math.max(r.k==='omb'?dimePacte():typeof p.base==='number'?p.base:p.prix,quartPacte())}
const PACTE_TEMP={
  gri:'Grisaille vend cher sa patience : 3 tesselles par cycle, plus 1 par zone qu\'elle tient.',
  cpv:'Comptevent aime les marchés conclus : 1 tesselle par cycle, plus 1 par zone qu\'elle tient. C\'est la moins chère.',
  sbc:'Sombreclef demande 2 tesselles par cycle, plus 1 par zone qu\'elle tient. Méfiez-vous : quand elle agit, elle trahit le pacte une fois sur cinq et vient contester une de vos zones.',
  omb:'Ombrelieue ne fixe pas de prix : elle prend la dîme, la moitié de ce que vos Citadelles rapportent à chaque cycle (arrondie au-dessus, au moins 1).'};

function pac(){if(typeof S==='undefined')return null;
  if(!S.pacte||typeof S.pacte!=='object')S.pacte={k:null,prix:0,de:0,warn:false,nc:S.nc||0,refus:{},rup:null,cr:null,v:S.lives||1,g:S.graine};
  const p=S.pacte;if(!p.refus||typeof p.refus!=='object')p.refus={};if(typeof p.nc!=='number')p.nc=S.nc||0;if(p.v===undefined)p.v=S.lives||1;
  if(p.g!==S.graine){S.pacte=null;const q=pac();q.nc=0;return q}   /* nouvelle partie : rien ne reste */
  if(p.k&&!(typeof RIVK!=='undefined'&&RIVK[p.k]))p.k=null;
  if(S.nc<p.nc)p.nc=S.nc;
  return p}
const pacteAvec=k=>{const p=pac();return!!p&&p.k===k};
const refusPacte=k=>{const p=pac(),n=p.refus[k];return n!==undefined&&(S.nc||0)<n?n-(S.nc||0):0};
const pacMaj=()=>{if(typeof hudKey!=='undefined')hudKey='';if(typeof etatHud==='function')etatHud()};
const pacTxt=n=>n+' tesselle'+(n>1?'s':'');
/* messages : montrés quand on est dans le monde, l'un après l'autre */
const pacFile=[];
function pacDire(a,b,c){pacFile.push([a,b,c])}

/* ---------- Signer, rompre ---------- */
function signerPacte(r,gratuit){const p=pac();if(!r||p.k||refusPacte(r.k))return false;const prix=PACTE_PRIX(r);
  if(!gratuit){if(typeof S.tess!=='number'||S.tess<prix)return false;S.tess-=prix}
  Object.assign(p,{k:r.k,prix,base:prixTemp(r),de:S.nc||0,warn:false,cr:null});
  if(p.rup&&p.rup.k===r.k)p.rup=null;
  /* la maison retire ce qu'elle menait contre vous */
  const R=typeof riv==='function'?riv():null,l=[];
  if(R&&R.c&&R.c.r===r.k){l.push(`elle renonce à contester ${zI(R.c.id).nom}`);R.c=null}
  if(R&&R.t[r.k]&&S.emp[R.t[r.k].id]){l.push(`elle abandonne sa tentative ${de_(zI(R.t[r.k].id).nom)}, votre ancienne zone`);delete R.t[r.k]}
  save();pacMaj();
  pacDire(`${PACTE_SYM} Pacte avec ${laM(r)}`,`${pacTxt(prix)} par cycle${r.k==='omb'?' (la dîme)':''}`,`Elle ne contestera plus vos zones et laissera vos anciennes zones tranquilles${l.length?' ; '+l.join(', '):''}. Ses gens s'en prendront aux autres maisons.`);
  return true}
function romprePacte(raison){const p=pac();if(!p.k)return false;const r=RIVK[p.k];
  p.k=null;p.cr=null;p.warn=false;p.refus[r.k]=(S.nc||0)+PACTE_REFUS;p.rup={k:r.k,n:PACTE_RUPTURE};
  save();pacMaj();
  pacDire(`${PACTE_SYM} ${raison==='paiement'?'Le pacte se rompt faute de paiement':'Vous rompez le pacte'}`,`${LaM(r)} se venge`,`Elle va contester deux fois de suite vos zones, l'une après l'autre, et refusera tout pacte pendant ${PACTE_REFUS} cycles.`);
  rupturePacte();return true}
/* une contestation de la rupture, dès que la place est libre (une seule contestation à la fois dans rivaux.js) */
function rupturePacte(){const p=pac();if(!p||!p.rup||p.rup.n<=0||typeof riv!=='function')return null;const R=riv();if(R.c)return null;
  const r=RIVK[p.rup.k],cc=ciblesConteste();if(!r||!cc.length)return null;
  const i=PACTE_RUPTURE-p.rup.n+1;p.rup.n--;if(p.rup.n<=0)p.rup=null;
  const res=contester(r,choisir(cc,r));
  if(typeof started!=='undefined'&&started){const e=$('t1');if(e)e.textContent+=` (rupture du pacte, ${i} sur ${PACTE_RUPTURE})`}
  save();pacMaj();return res}

/* ---------- La maison du pacte agit (appelé par rivalAgit dans rivaux.js) ----------
   undefined : pas de pacte avec cette maison, elle agit comme d'habitude ; null : elle ne fait rien ; sinon l'action. */
function pacteAgit(r){const p=pac();if(!p||p.k!==r.k)return undefined;const R=riv();
  /* Sombreclef trahit parfois : le pacte tombe et elle conteste une de vos zones (sans rancune de votre part : pas de refus) */
  if(r.k==='sbc'&&Math.random()<PACTE_TRAHISON){const cc=ciblesConteste();if(cc.length){p.k=null;p.cr=null;p.warn=false;save();
    const res=contester(r,choisir(cc,r));pacDire(`${PACTE_SYM} ${LaM(r)} trahit le pacte`,'ses mages se retournent contre vous','Le pacte est rompu de son fait : vous ne lui devez plus rien, et vous pourrez en signer un autre. Défendez la zone contestée.');pacMaj();return res}}
  /* de préférence : contester une zone d'une autre maison */
  if(!p.cr){const l=ZN.filter(Z=>{const k=R.z[Z.id];return k&&k!==r.k&&RIVK[k]&&!S.own[Z.id]});
    if(l.length)return contesterMaison(r,choisir(l,r))}
  /* sinon une zone sauvage, jamais une de vos anciennes zones */
  const plein=!!R.t[r.k]||zonesMaison(r.k).length>=RIV_MAX();
  const cp=plein?[]:ciblesPrise().filter(Z=>!S.emp[Z.id]);
  if(cp.length)return tenter(r,choisir(cp,r));
  return null}
/* zones qu'une maison peut garder : la Loi du Cadastre (lois.js) en retire une, une au moins (20 nov., testeur) */
const plafondPacte=()=>typeof forceLoi==='function'&&forceLoi('cadastre')?Math.max(1,RIV_MAX()-1):RIV_MAX();
function contesterMaison(r,Z){const p=pac(),R=riv(),d=RIVK[R.z[Z.id]];
  p.cr={k:r.k,id:Z.id,de:d.k,du:(S.nc||0)+PACTE_CR_DELAI};R.vu[r.k]=(R.vu[r.k]||0)+1;save();pacMaj();
  pacDire(`${r.bl} ${LaM(r)} conteste ${Z.info.nom}`,`à ${laM(d)}, dans ${cyclesTxt(PACTE_CR_DELAI)}`,`Votre pacte la tourne contre les autres maisons : à l'échéance, elle réussit ${Math.round(PACTE_CR_CHANCE*100)} fois sur 100. La zone passera à elle, ou redeviendra sauvage si elle tient déjà assez de zones.`);
  return{sorte:'contesteMaison',r:r.k,id:Z.id,contre:d.k}}
function resoudreContesteMaison(gagne){const p=pac(),c=p&&p.cr;if(!c)return null;p.cr=null;const R=riv(),r=RIVK[c.k],d=RIVK[c.de],Z=(ZB[c.id]||ZWB[c.id]);let res;
  if(!Z||S.own[c.id]||R.z[c.id]!==c.de){res={fin:'sans objet'}}
  else{const ok=gagne===undefined?Math.random()<PACTE_CR_CHANCE:!!gagne;
    if(ok&&zonesMaison(c.k).length<plafondPacte()){R.z[c.id]=c.k;res={fin:'prise',id:c.id};
      pacDire(`${r.bl} ${LaM(r)} prend ${Z.info.nom}`,`à ${laM(d)}`,'La zone change de maison. Vous pourrez la reprendre en battant ses gardiens à la Pierre d\'éveil.')}
    else if(ok){delete R.z[c.id];res={fin:'sauvage',id:c.id};
      pacDire(`${r.bl} ${LaM(r)} chasse ${laM(d)}`,`${Z.info.nom} redevient sauvage`,'Elle tient déjà autant de zones qu\'elle peut en garder : elle laisse la zone au monde sauvage.')}
    else{res={fin:'échec',id:c.id};pacDire(`${r.bl} ${LaM(r)} échoue`,`${Z.info.nom} reste ${dela(d)}`,'Ses gens repartent ; elle tentera sa chance ailleurs.')}}
  save();pacMaj();return res}

/* ---------- Un cycle de plus : paiement, échéances ---------- */
function cyclePacte(){const p=pac();
  if(p.cr&&(S.nc||0)>=p.cr.du)resoudreContesteMaison();
  if(!p.k)return;const r=RIVK[p.k];p.prix=prixCycle(p,r);   /* la dîme, ou le quart du revenu s'il monte */
  if(S.tess>=p.prix){S.tess-=p.prix;
    const suivant=prixCycle(p,r),peut=S.tess+(typeof revenuTess==='function'?revenuTess():0)>=suivant;
    if(!peut&&!p.warn)pacDire(`${PACTE_SYM} Pacte avec ${laM(r)} : bourse trop maigre`,`il vous faudra ${pacTxt(suivant)} au prochain cycle`,`Votre bourse compte ${pacTxt(S.tess)}. Sans paiement au prochain cycle, le pacte se rompra de lui-même, et la maison se vengera.`);
    p.warn=!peut}
  else if(!p.warn){p.warn=true;pacDire(`${PACTE_SYM} Pacte avec ${laM(r)} : paiement manqué`,`il vous faut ${pacTxt(p.prix)}`,`Votre bourse compte ${pacTxt(S.tess)}. La maison patiente un cycle : sans paiement au prochain, le pacte se rompra de lui-même.`)}
  else romprePacte('paiement');
  save();pacMaj()}
/* la mort : le pacte tombe, sans rancune */
function pacteMort(){const p=pac();if((S.lives||1)<=p.v)return false;p.v=S.lives||1;const k=p.k;
  Object.assign(p,{k:null,warn:false,cr:null,rup:null,refus:{}});save();
  if(k)pacDire(`${PACTE_SYM} Le pacte avec ${laM(RIVK[k])} tombe`,'avec le héros','Votre héritier ne lui doit rien, et elle ne lui en veut pas : il pourra en signer un nouveau.');
  return true}
setInterval(()=>{if(typeof started==='undefined'||!started||mode==='titre'||typeof S==='undefined')return;const p=pac();pacteMort();
  /* le cycle n est traité quand le commerce l'a payé (les tesselles du cycle sont dans la bourse), quel que soit l'ordre des fichiers */
  while(p.nc<S.nc&&(typeof S.tessNc!=='number'||S.tessNc>p.nc)){p.nc++;if(mondeIci())cyclePacte()}
  rupturePacte();
  if(pacFile.length&&mode==='monde'&&!(typeof toastT!=='undefined'&&toastT>1.5)){const m=pacFile.shift();toast(m[0],m[1],m[2])}},1000);

/* ---------- Menus : proposer, rompre ---------- */
function openPacte(r,back){mode='menu';document.body.classList.add('jeu-ouvert');const p=pac(),prix=PACTE_PRIX(r),ref=refusPacte(r.k),autre=p.k&&p.k!==r.k?RIVK[p.k]:null,b=back||(()=>openRivaux());
  if(p.k===r.k){ui('menu',{sur:'Rivaux · pacte',t:`${PACTE_SYM} Pacte avec ${laM(r)}`,
    corps:`<p>Depuis le cycle ${p.de}, vous lui versez ${pacTxt(p.prix)} par cycle${r.k==='omb'?' (la dîme)':''}. Votre bourse : <b>${pacTxt(S.tess)}</b>.${p.warn?' <b>Elle ne suffira pas au prochain cycle.</b>':''}</p><p class="petit">Si vous rompez, ${laM(r)} contestera deux fois de suite vos zones, l'une après l'autre, et refusera tout pacte pendant ${PACTE_REFUS} cycles.</p>`,
    back:b,opts:[{l:'Garder le pacte',ic:'◆',go:b},{l:'Rompre le pacte',ic:'✂',cls:'m',d:'deux contestations de vos zones, puis aucun pacte avant '+PACTE_REFUS+' cycles',go:()=>{romprePacte('menu');sfx('fail');b()}}]});return}
  const raison=autre?`vous avez déjà un pacte avec ${laM(autre)} : rompez-le d'abord`:ref?`elle refuse tout pacte pendant encore ${cyclesTxt(ref)}`:S.tess<prix?`il vous faut ${pacTxt(prix)} pour le premier cycle (bourse : ${S.tess})`:'';
  ui('menu',{sur:'Rivaux · proposer un pacte',t:`${PACTE_SYM} Un pacte avec ${laM(r)}`,
    corps:`<p>${PACTE_TEMP[r.k]}</p><p>Contre <b>${pacTxt(prix)} par cycle</b> (le premier tout de suite), elle cesse de contester vos zones et ne tente plus vos anciennes zones ; ses gens s'en prennent aux zones des autres maisons. Votre bourse : ${pacTxt(S.tess)}.</p><p class="petit">Quel que soit son tempérament, une maison demande au moins le quart de ce que vous rapportent vos Citadelles, vos caravanes et vos lois à chaque cycle (arrondi au-dessus) ; le prix monte avec vos revenus. Un seul pacte à la fois. Si votre bourse ne suffit plus, vous êtes averti un cycle avant ; sans paiement, le pacte se rompt de lui-même. Une rupture, de votre fait ou faute de paiement, lui fait contester deux fois de suite vos zones, et elle refuse alors tout pacte pendant ${PACTE_REFUS} cycles. À la mort du héros, le pacte tombe sans rancune.</p>`,
    back:b,opts:[{l:`Signer · ${pacTxt(prix)} par cycle`,ic:PACTE_SYM,cls:'p',off:!!raison,d:raison||(r.k==='sbc'?'elle trahit parfois':'payé à chaque cycle'),go:()=>{if(signerPacte(r)){sfx('hit');b()}}},{l:'Renoncer',ic:'◆',go:b}]})}
/* fiche d'une maison (openMaison) : une option */
function optionsPacte(r,i){const p=pac(),back=()=>openMaison(r,i);
  if(p.k===r.k)return[{l:'Votre pacte · rompre ?',ic:PACTE_SYM,d:`${pacTxt(p.prix)} par cycle${p.warn?' · bourse trop maigre pour le prochain':''}`,go:()=>openPacte(r,back)}];
  const ref=refusPacte(r.k);
  return[{l:'Proposer un pacte',ic:PACTE_SYM,off:!!ref,d:ref?`elle refuse tout pacte pendant encore ${cyclesTxt(ref)}`:p.k?`un seul à la fois (pacte avec ${laM(RIVK[p.k])})`:`${pacTxt(PACTE_PRIX(r))} par cycle${r.k==='omb'?' (la dîme)':''}`,go:()=>openPacte(r,back)}]}
function fichePacte(r){const p=pac();if(!p)return'';const ref=refusPacte(r.k),rup=p.rup&&p.rup.k===r.k;
  const etat=p.k===r.k?`<b>pacte en cours</b>, ${pacTxt(p.prix)} par cycle`:rup?`<b>pacte rompu</b> : encore ${p.rup.n} contestation${p.rup.n>1?'s':''} de vengeance à venir`:ref?`refuse tout pacte pendant encore ${cyclesTxt(ref)}`:`pacte possible, ${pacTxt(PACTE_PRIX(r))} par cycle`;
  return`<p class="petit">${PACTE_SYM} ${PACTE_TEMP[r.k]} État : ${etat}.</p>`}
/* écran Rivaux : ce que la maison fait sous le pacte */
function pacteTexte(r){const p=pac();if(!p)return'';const l=[];
  if(p.k===r.k)l.push(`${PACTE_SYM} pacte, ${pacTxt(p.prix)} par cycle`);
  if(p.cr&&p.cr.k===r.k&&ZB[p.cr.id])l.push(`conteste ${zI(p.cr.id).nom} à ${laM(RIVK[p.cr.de])} dans ${cyclesTxt(Math.max(0,p.cr.du-(S.nc||0)))}`);
  if(p.rup&&p.rup.k===r.k)l.push(`pacte rompu : ${p.rup.n} contestation${p.rup.n>1?'s':''} à venir`);
  return l.join(' ; ')}
/* bandeau, ligne Rivaux */
function lignePacte(){const p=pac();if(!p)return'';let s='';
  if(p.k){const r=RIVK[p.k];s+=`<span class="d" title="Pacte avec ${laM(r)} : ${pacTxt(p.prix)} par cycle${p.warn?' ; votre bourse ne suffira pas au prochain cycle':''}" style="color:${p.warn?'#ff9a8a':r.col}">${PACTE_SYM}<span style="color:${r.col}">${r.bl}</span>${p.warn?'<small> !</small>':''}</span>`}
  if(p.cr&&ZB[p.cr.id]){const a=RIVK[p.cr.k],d=RIVK[p.cr.de];s+=`<span class="d" title="${LaM(a)} conteste ${zI(p.cr.id).nom} à ${laM(d)}" style="color:${a.col}">${a.bl}→<span style="color:${d.col}">${d.bl}</span><small> ${cyclesTxt(Math.max(0,p.cr.du-(S.nc||0)))}</small></span>`}
  if(p.rup){const r=RIVK[p.rup.k];s+=`<span class="d" title="Pacte rompu : ${laM(r)} va contester encore ${p.rup.n} fois vos zones" style="color:#ff9a8a">✂<span style="color:${r.col}">${r.bl}</span><small>×${p.rup.n}</small></span>`}
  return s}
/* Comptoir d'une Citadelle tenue (commerce.js) */
function optionPacteComptoir(Z){const p=pac();if(!p||typeof RIVAUX==='undefined')return[];
  return[{l:p.k?`Pacte avec ${laM(RIVK[p.k])}`:'Proposer un pacte à une maison rivale',ic:PACTE_SYM,d:p.k?`${pacTxt(p.prix)} par cycle · rompre ?`:'contre des tesselles à chaque cycle, une maison cesse de vous contester',go:()=>openPactes(Z)}]}
function openPactes(Z,f){mode='menu';document.body.classList.add('jeu-ouvert');const back=()=>openComptoir(Z);
  ui('menu',{sur:'Comptoir · '+Z.info.nom,t:'Les pactes',f,corps:`<p class="petit">Votre bourse : ${pacTxt(S.tess)}. Un seul pacte à la fois : la maison cesse de vous contester et s'en prend aux autres maisons, tant que vous payez.</p>`,
    back,opts:[...RIVAUX.map((r,i)=>{const p=pac(),ref=refusPacte(r.k);return{l:`${r.nom}${p.k===r.k?' · pacte en cours':''}`,ic:`<span style="color:${r.col}">${r.bl}</span>`,
      d:p.k===r.k?`${pacTxt(p.prix)} par cycle`:ref?`refuse tout pacte pendant encore ${cyclesTxt(ref)}`:`${pacTxt(PACTE_PRIX(r))} par cycle${r.k==='omb'?' (la dîme)':r.k==='sbc'?' · trahit parfois':''}`,go:()=>openPacte(r,()=>openPactes(Z,i))}}),{l:'Retour au Comptoir',ic:'◆',go:back}]})}

/* ---------- Tests : MZ.pacte(k) signe sans payer (sans clé : l'état), MZ.rompre(), MZ.pacteAgit(), MZ.pacteResout(gagne) ---------- */
function pacteTest(k){const p=pac();if(k&&RIVK[k]){if(p.k&&p.k!==k)return false;if(p.k!==k&&!signerPacte(RIVK[k],true))return false}return JSON.parse(JSON.stringify(pac()))}
const pacteAgitTest=()=>{const p=pac();return p.k?pacteAgit(RIVK[p.k]):null};
