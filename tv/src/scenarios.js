/* MozaWorld 2.7 : scénarios de zone (choix moraux).
   Décidé le 18 nov. 2026 (« tout oui ») : à chaque éveil, une scène pose un dilemme ; une réponse enfonce la zone
   d'un palier dans son pôle, l'autre la ramène d'un palier vers l'autre pôle. Chaque réponse a un prix réel,
   annoncé ou caché. Paliers 3 et 6 : respirations, sans choix. Une parole donnée reste donnée : si l'épreuve
   échoue, on la retente sans rechoisir. Les traces sont gardées par le monde, même après la mort du héros.
   Soir 1 : la scène, les réponses, le prix. Soir 2 : l'épreuve habillée par la scène (champ ep). Soir 3 : effets des traces.
   Une scène est rangée sous le palier où se trouve la zone quand on éveille la Pierre.
   rep : réponses { vers (palier visé), l (texte du bouton), prix {mana, glace, pv, perte, exil}, cache (prix non affiché),
         prixTxt (le prix en mots), trace (drapeau gardé par le monde), ep (épreuve prévue, soir 2) } */
/* 22 nov. 2026 : la Taïga de Kobor (DON045) quitte les scènes ; elle a maintenant des PNJ et des quêtes en arbre (quetes.js).
   Son ancien scénario reste lisible dans l'historique git (scenarios.js avant la 2.40). */
const SCENARIOS={};

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
const sceneDonneCarte=(Z,de,vers)=>(!scenario(Z)&&!(typeof QUETES!=='undefined'&&QUETES[Z.id]))||Math.abs(vers)>Math.abs(de);
