/* MozaWorld : les rivaux (18-19 nov., règles de l'utilisateur ; REGLES.md section 8).
   L'adversaire principal reste le monde sauvage ; les quatre maisons rivales sont secondaires, lentes et rares.
   - Au fil des cycles (economie.js, CYCLE), une maison agit en moyenne une fois tous les RIV_TOUS cycles :
     soit elle tente l'épreuve d'une zone sauvage hors du territoire de départ (19 nov., décision de l'utilisateur :
       la tentative est annoncée RIV_TENTE cycles à l'avance ; à l'échéance, réussite avec une chance qui baisse avec le |palier|,
       alors la zone devient « à elle » et l'empreinte s'efface ; le joueur la fait tomber en activant la zone avant,
       ou en battant à la Pierre le champion de la maison, « Défier les gens de la maison »),
     soit elle annonce qu'elle viendra faire l'épreuve d'une de vos zones dans RIV_DELAI cycles pour la baisser d'un palier.
   - Défense : aller à la Pierre de la zone avant l'échéance et battre le champion de la maison (combat, sorte « rival »).
     Sinon, résolution automatique : la maison réussit avec une chance qui baisse si la zone est protégée (defenseMonde).
   - Une zone bornée (Pierre de bornage de Raak), verrouillée (Domaines) ou au repos ne peut pas être visée.
   - Reprendre une zone de rival : la réactiver comme une zone sauvage, gardiens renforcés.
   - Empreinte (complément) : une ancienne zone à vous, redevenue sauvage, se reprend aussi en réussissant un seul palier.
   État : S.riv = {z:{id:maison}, c:{r,id,du,de}|null, t:{maison:{id,de,du}} (tentatives, une par maison), nc, vu:{maison:nb d'actions}}. */
const RIV_TOUS=6;      /* une maison agit en moyenne une fois tous les 6 cycles (provisoire) */
const RIV_DELAI=2;     /* une contestation est annoncée 2 cycles avant l'épreuve (provisoire) */
const RIV_GRACE=10;    /* aucune maison n'agit avant le 10e cycle d'une partie (provisoire) */
const RIV_CHANCE=.55;  /* chance de réussite d'une maison si vous ne défendez pas (provisoire) */
const RIV_PROT=.1;     /* chaque point de protection (defenseMonde(id).bonus) retire 10 % (provisoire) */
const RIV_TENTE=2;    /* une tentative de prise est annoncée 2 cycles avant l'épreuve (provisoire) */
const RIV_EPREUVE=[.75,.6,.4,.25];   /* chance de réussir l'épreuve d'une zone sauvage : |palier| 0-1, 2-3, 4-5, 6-7 (provisoire) */
const RIV_MAX=()=>1+Math.floor(ZN.length/20);   /* zones au plus par maison : 2 sur la carte de 21 zones (provisoire) */
/* Quatre maisons, chacune avec le tempérament d'un des quatre conteurs du projet. p = part des contestations parmi ses actions. */
const RIVAUX=[
  {k:'gri',nom:'Maison Grisaille',bl:'♜',col:'#b0614d',pref:'CIT',p:.6,conteur:'A',
   tmp:'Ses chroniqueurs notent chaque chute avec gourmandise : elle vient presser les Citadelles qui chancellent, pour avoir une ruine de plus à raconter.'},
  {k:'cpv',nom:'Maison Comptevent',bl:'☼',col:'#d6a93e',pref:'RES',p:.2,conteur:'B',
   tmp:'Ses caravanes cherchent toujours une terre de plus : elle prend les Ressources qu\'on néglige, en jurant qu\'elles rapporteront à tout le monde.'},
  {k:'sbc',nom:'Maison Sombreclef',bl:'☾',col:'#8a6ac4',pref:'DON',p:.5,conteur:'C',
   tmp:'Elle ne frappe jamais en face : ses mages se glissent dans les Donjons et sapent vos zones par la bande, un sortilège à la fois.'},
  {k:'omb',nom:'Maison d\'Ombrelieue',bl:'⊚',col:'#3f9a94',pref:'ANT',p:.35,conteur:'D',
   tmp:'Elle écoute ce qui gronde sous la mosaïque : ses fidèles prennent les Antres, où les bêtes rêvent de choses plus anciennes qu\'elles.'}];
const RIVK=Object.fromEntries(RIVAUX.map(r=>[r.k,r]));
const laM=r=>'la '+r.nom.replace(/^Maison/,'maison');   /* « la maison Grisaille » */
const LaM=r=>'La '+r.nom.replace(/^Maison/,'maison');
const dela=r=>'de la '+r.nom.replace(/^Maison/,'maison');   /* « de la maison Grisaille », « de la maison d'Ombrelieue » */

function riv(){if(!S.riv||typeof S.riv!=='object')S.riv={z:{},c:null,nc:S.nc||0,vu:{}};const R=S.riv;
  if(!R.z||typeof R.z!=='object')R.z={};if(!R.t||typeof R.t!=='object')R.t={};if(R.c===undefined)R.c=null;if(typeof R.nc!=='number')R.nc=S.nc||0;if(!R.vu)R.vu={};
  for(const id in R.z)if(!ZB[id]||S.own[id]||!RIVK[R.z[id]])delete R.z[id];   /* zone reprise par le joueur : elle n'est plus à la maison */
  for(const k in R.t){const t=R.t[k];if(!RIVK[k]||!t||!ZB[t.id]||R.z[t.id]||!isFinite(t.du))delete R.t[k]}   /* tentative sans objet (la zone activée avant l'échéance est traitée par verifTentatives, avec un message) */
  if(R.c&&(!ZB[R.c.id]||!S.own[R.c.id]||!RIVK[R.c.r]))R.c=null;   /* zone contestée perdue (mort du héros, horde) : la contestation tombe */
  return R}
const maisonDe=id=>{const k=S.riv&&S.riv.z&&S.riv.z[id];return k&&!S.own[id]?RIVK[k]:null};
const zonesMaison=k=>ZN.filter(Z=>S.riv&&S.riv.z[Z.id]===k&&!S.own[Z.id]);
const typeZ=Z=>Z.mod||Z.id;
/* tentative en cours sur une zone sauvage : la clé de la maison, ou null */
const tentativeSur=id=>{const T=S.riv&&S.riv.t;if(!T||S.own[id])return null;for(const k in T)if(T[k]&&T[k].id===id&&RIVK[k])return k;return null};
const cyclesTxt=n=>n+' cycle'+(n>1?'s':'');
const resteTente=k=>Math.max(0,S.riv.t[k].du-S.riv.nc);
const protege=id=>(typeof borne==='function'&&borne(id))||(typeof verrouillee==='function'&&!!verrouillee(id));
const protection=id=>{if(typeof defenseMonde!=='function')return 0;try{const d=defenseMonde(id);return d&&+d.bonus||0}catch(_){return 0}};
/* 19 nov. (provisoire) : le verrou de Citadelle protège des prises, pas des contestations (il donne alors −20 %) ; seules les zones au cœur et bornées sont intouchables */
const protegeConteste=id=>(typeof borne==='function'&&borne(id))||(typeof auCoeur==='function'&&!!auCoeur(id));
const chanceRival=id=>Math.max(.1,RIV_CHANCE-RIV_PROT*protection(id));
const chanceEpreuve=id=>RIV_EPREUVE[Math.min(RIV_EPREUVE.length-1,Math.floor(Math.abs(S.lv[id]||0)/2))];
/* texte de la fiche de zone (bandeau d'exploration) */
const maitreRival=id=>{const r=maisonDe(id);if(r)return`<b style="color:${r.col}">${r.bl} ${r.nom}</b> · gardiens renforcés`;
  const k=tentativeSur(id);if(!k)return'';const m=RIVK[k],n=resteTente(k);
  return`Zone sauvage${S.emp[id]?' · <b>votre empreinte</b>':''} · <b style="color:${m.col}">${m.bl} ${LaM(m)} en tente l'épreuve dans ${cyclesTxt(n)}</b>`};

/* ---------- cibles ---------- */
const procheDe=(k,id)=>(typeof VOISINES!=='undefined'&&VOISINES[id]||[]).some(v=>S.riv.z[v]===k);
function choisir(l,r){if(!l.length)return null;   /* préférence : type aimé, puis voisine d'une zone de la maison */
  const sc=Z=>(typeZ(Z)===r.pref?2:0)+(procheDe(r.k,Z.id)?1:0)+Math.random()*1.5;return l.slice().sort((a,b)=>sc(b)-sc(a))[0]}
function ciblesPrise(){const R=riv();return ZN.filter(Z=>!S.own[Z.id]&&!(typeof ESTDEP!=='undefined'&&ESTDEP.has(Z.id))&&!R.z[Z.id]&&!(R.c&&R.c.id===Z.id)&&!tentativeSur(Z.id)&&!protege(Z.id)&&!(typeof auCoeur==='function'&&auCoeur(Z.id)))}
function ciblesConteste(){const R=riv();if(R.c)return[];return ZN.filter(Z=>S.own[Z.id]&&S.act[Z.id]&&(S.lv[Z.id]||0)!==0&&!protegeConteste(Z.id)&&restLeft(Z)<=0)}

/* ---------- une maison agit ---------- */
function rivalAgit(force,sorte){const R=riv();
  const ordre=RIVAUX.slice().sort(()=>Math.random()-.5);
  for(const r of ordre){const plein=!!R.t[r.k]||zonesMaison(r.k).length>=RIV_MAX();   /* une seule tentative par maison ; la tentative compte dans le plafond */
    let veut=sorte||(Math.random()<r.p?'conteste':'prise');
    const cp=plein?[]:ciblesPrise(),cc=ciblesConteste();
    if(veut==='prise'&&!cp.length&&!sorte)veut='conteste';else if(veut==='conteste'&&!cc.length&&!sorte)veut='prise';
    if(veut==='prise'&&cp.length)return tenter(r,choisir(cp,r));
    if(veut==='conteste'&&cc.length)return contester(r,choisir(cc,r));
    if(!force)return null}
  return null}
/* annonce d'une tentative : la maison s'attaquera à l'épreuve de la zone dans RIV_TENTE cycles */
function tenter(r,Z){const R=riv(),id=Z.id;R.t[r.k]={id,de:R.nc,du:R.nc+RIV_TENTE};R.vu[r.k]=(R.vu[r.k]||0)+1;
  save();etatHud();if(typeof hudKey!=='undefined')hudKey='';
  if(started)toast(`${r.bl} ${LaM(r)} tente l'épreuve ${de_(Z.info.nom)}`,`elle s'y attaque dans ${cyclesTxt(RIV_TENTE)}`,`Pour la devancer, activez la zone avant l'échéance, ou allez à sa Pierre d'éveil défier les gens de la maison. Sans vous, elle réussit ${Math.round(chanceEpreuve(id)*100)} fois sur 100.`);
  return{sorte:'tentative',r:r.k,id}}
/* échéance d'une tentative : l'épreuve se résout (gagne : true ou false pour forcer le résultat en test) */
function resoudreTentative(k,gagne){const R=riv(),t=R.t[k];if(!t)return null;delete R.t[k];const r=RIVK[k],Z=ZB[t.id],id=t.id;let res;
  if(S.own[id]){res={fin:'devancée',r:k,id};toast(`${r.bl} ${LaM(r)} renonce`,`${Z.info.nom} est à vous`,'Vous avez activé la zone avant elle : sa tentative tombe.')}
  else if(R.z[id]||protege(id)||(typeof auCoeur==='function'&&auCoeur(id))){res={fin:'protégée',r:k,id};toast(`${r.bl} ${LaM(r)} renonce`,`à l'épreuve ${de_(Z.info.nom)}`,'La zone est désormais hors de sa portée : ses gens repartent.')}
  else if(zonesMaison(k).length>=RIV_MAX()){res={fin:'plafond',r:k,id};toast(`${r.bl} ${LaM(r)} renonce`,`à l'épreuve ${de_(Z.info.nom)}`,'Elle tient déjà autant de zones qu\'elle peut en garder.')}
  else{const ch=chanceEpreuve(id),ok=gagne===undefined?Math.random()<ch:!!gagne,avait=!!S.emp[id];
    if(ok){prendre(r,Z,true);res={fin:'prise',r:k,id};
      toast(`${r.bl} ${LaM(r)} réussit l'épreuve ${de_(Z.info.nom)}`,'la zone est à elle',(avait?'Votre empreinte sur cette zone s\'efface. ':'')+'Vous pourrez la reprendre en battant ses gardiens à la Pierre d\'éveil ; ils seront plus coriaces.')}
    else{res={fin:'échec',r:k,id};toast(`${r.bl} ${LaM(r)} échoue à l'épreuve ${de_(Z.info.nom)}`,'ses gens repartent',`La zone reste sauvage (la maison avait ${Math.round(ch*100)} chances sur 100).`)}}
  save();etatHud();if(typeof hudKey!=='undefined')hudKey='';return res}
/* le joueur a activé la zone avant l'échéance : la tentative tombe tout de suite */
function verifTentatives(){const R=riv();for(const k in R.t)if(S.own[R.t[k].id])resoudreTentative(k)}
/* test : résoudre tout de suite les tentatives (MZ.rivalTente(), MZ.rivalTente(true|false), MZ.rivalTente('gri', true)) */
function rivalTente(a,b){const R=riv(),ks=typeof a==='string'?[a]:Object.keys(R.t),g=typeof a==='string'?b:a;return ks.map(k=>resoudreTentative(k,g)).filter(Boolean)}
function prendre(r,Z,muet){const R=riv(),id=Z.id,avait=!!S.emp[id];
  R.z[id]=r.k;S.emp[id]=false;S.act[id]=false;R.vu[r.k]=(R.vu[r.k]||0)+1;   /* prise par quelqu'un d'autre : l'empreinte s'efface (REGLES section 8) */
  save();etatHud();if(typeof hudKey!=='undefined')hudKey='';
  if(started&&!muet)toast(`${r.bl} ${r.nom}`,`prend ${Z.info.nom}`,avait?'Votre empreinte sur cette zone s\'efface. Vous pourrez la reprendre en battant ses gardiens, plus coriaces.':'Vous pourrez la reprendre en battant ses gardiens à la Pierre d\'éveil ; ils seront plus coriaces.');
  return{sorte:'prise',r:r.k,id}}
function contester(r,Z){const R=riv();R.c={r:r.k,id:Z.id,de:R.nc,du:R.nc+RIV_DELAI};R.vu[r.k]=(R.vu[r.k]||0)+1;save();
  if(started)toast(`${r.bl} ${r.nom} conteste ${Z.info.nom}`,`dans ${RIV_DELAI} cycles`,`Allez à sa Pierre d'éveil avant l'échéance et battez le champion de la maison, sinon la zone risque de perdre un palier.`);
  return{sorte:'conteste',r:r.k,id:Z.id}}

/* ---------- échéance d'une contestation ---------- */
function rivalArrive(gagne){const R=riv(),c=R.c;if(!c)return null;R.c=null;const r=RIVK[c.r],Z=ZB[c.id];let res;
  if(!Z||!S.own[c.id]||!S.act[c.id]){res={fin:'sans objet'}}
  else if(protegeConteste(c.id)){res={fin:'protégée'};toast(`${r.bl} ${r.nom}`,`renonce à ${Z.info.nom}`,typeof borne==='function'&&borne(c.id)?'La Pierre de bornage de Raak tient : la zone ne recule pas.':'La zone est au cœur du royaume : la maison repart les mains vides.')}
  else{const ch=chanceRival(c.id),ok=gagne===undefined?Math.random()<ch:!!gagne,lv=S.lv[c.id]||0;
    if(ok&&lv!==0){const n=lv-Math.sign(lv);S.lv[c.id]=n;Z.lvT=n;S.rest[c.id]=now()+(typeof reposZone==='function'?reposZone(c.id):REPOS);
      if(typeof etatRoutes==='function')etatRoutes();
      toast(`${r.bl} ${r.nom} réussit l'épreuve`,`${Z.info.nom} recule au palier ${sgn(n)||'0'}`,`La zone reste à vous, mais elle se repose ${fmt(typeof reposZone==='function'?reposZone(c.id):REPOS)} avant de pouvoir évoluer.`);res={fin:'baisse',lv:n}}
    else{toast(`${r.bl} ${r.nom} échoue`,`${Z.info.nom} tient bon`,`Votre zone garde son palier (la maison avait ${Math.round(ch*100)} chances sur 100).`);res={fin:'tient'}}}
  save();etatHud();if(typeof hudKey!=='undefined')hudKey='';return res}

/* ---------- un cycle de plus ---------- */
function tourRivaux(){const R=riv();
  for(const k in R.t)if(R.t[k]&&R.nc>=R.t[k].du)resoudreTentative(k);
  if(R.c&&R.nc>=R.c.du)rivalArrive();
  if(R.nc>=RIV_GRACE&&Math.random()<1/RIV_TOUS)rivalAgit(false)}
setInterval(()=>{if(typeof started==='undefined'||!started||mode==='titre')return;const R=riv();
  verifTentatives();
  if(S.nc<R.nc)R.nc=S.nc;   /* nouvelle partie : le compteur des cycles repart de zéro */
  while(R.nc<S.nc){R.nc++;tourRivaux()}},1000);
/* accélérateur de test, posé quand window.MZ existe (main.js le crée après ce fichier) */
window.addEventListener('load',()=>{if(window.MZ)window.MZ.rivalTente=rivalTente});

/* ---------- combats : gardiens renforcés et champion ---------- */
/* zone d'une maison : gardiens un peu plus forts (PV ×1,2, attaque +1) (provisoire) */
function renfortRival(Z,foes){const r=maisonDe(Z.id);if(!r)return;for(const m of foes){m.pv=m.max=Math.round(m.pv*1.2);m.atk+=1;m.nom+=' ('+r.nom.replace('Maison ','')+')'}}
/* maison en jeu à cette Pierre : celle qui conteste la zone (à vous), ou celle qui en tente l'épreuve (sauvage) */
const maisonEnJeu=id=>{const R=riv();if(R.c&&R.c.id===id)return RIVK[R.c.r];const k=tentativeSur(id);return k?RIVK[k]:R.c&&RIVK[R.c.r]||null};
function championRival(Z){const r=maisonEnJeu(Z.id)||RIVAUX[0],ch=monstre(Z,2),aide=monstre(Z,0);
  ch.nom='Champion '+dela(r);return[ch,aide]}
function defendre(Z){startCombat(Z,'rival');const R=riv(),r=R.c&&RIVK[R.c.r];if(r&&$('cb-sur'))$('cb-sur').textContent=`Défense · ${r.bl} ${r.nom} conteste la zone`}
function defier(Z){startCombat(Z,'rival');const k=tentativeSur(Z.id),r=k&&RIVK[k];if(r&&$('cb-sur'))$('cb-sur').textContent=`Défi · ${r.bl} ${LaM(r)} tente l'épreuve de la zone`}
function finRival(ok,C){const Z=C.Z,R=riv(),tk=!(R.c&&R.c.id===Z.id)&&tentativeSur(Z.id);if(tk){finDefi(ok,Z,tk);return}const r=R.c&&RIVK[R.c.r];
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Défense perdue',t:'Le champion tient la Pierre',corps:`<p>Vous êtes blessé (${S.hurt} sur 3). La contestation continue : vous pouvez revenir avant l'échéance, sinon la maison tentera l'épreuve seule.</p>`,
      back:toMonde,opts:[{l:'Repartir explorer',ic:'◆',go:toMonde}]});return}
  if(R.c&&R.c.id===Z.id)R.c=null;const t=ZMANA[Z.id]||'Vent';gagner(t,2);S.hurt=Math.max(0,S.hurt-1);save();etatHud();sfx('hit');
  ui('menu',{sur:'Défense réussie',t:Z.info.nom,corps:`<p>Le champion ${r?dela(r)+' ':''}tombe devant la Pierre. La maison renonce : la zone garde son palier. Les vaincus lâchent 2 ${t}.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]})}

function finDefi(ok,Z,k){const R=riv(),r=RIVK[k];
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Défi perdu',t:'Les gens de la maison tiennent la Pierre',corps:`<p>Vous êtes blessé (${S.hurt} sur 3). La tentative ${dela(r)} continue : revenez avant l'échéance, ou activez la zone avant elle.</p>`,
      back:toMonde,opts:[{l:'Repartir explorer',ic:'◆',go:toMonde}]});return}
  delete R.t[k];const t=ZMANA[Z.id]||'Vent';gagner(t,2);S.hurt=Math.max(0,S.hurt-1);save();etatHud();if(typeof hudKey!=='undefined')hudKey='';sfx('hit');
  ui('menu',{sur:'Défi réussi',t:Z.info.nom,corps:`<p>Le champion ${dela(r)} tombe devant la Pierre. Ses gens repartent : la tentative échoue et la zone reste sauvage. Les vaincus lâchent 2 ${t}.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]})}

/* ---------- Pierre d'éveil : options ---------- */
function optionsRivaux(Z){const R=riv(),o=[],r=maisonDe(Z.id);
  if(R.c&&R.c.id===Z.id&&S.own[Z.id]){const m=RIVK[R.c.r],n=Math.max(0,R.c.du-R.nc);
    o.unshift({l:`Défendre la zone : battre le champion ${dela(m)}`,ic:m.bl,cls:'m',d:`échéance dans ${n} cycle${n>1?'s':''} · sans défense, la maison réussit ${Math.round(chanceRival(Z.id)*100)} fois sur 100`,go:()=>defendre(Z)})}
  const tk=tentativeSur(Z.id);
  if(tk){const m=RIVK[tk],n=resteTente(tk);
    o.unshift({l:`Défier les gens ${dela(m)}`,ic:m.bl,cls:'m',d:`ils tentent l'épreuve de la zone dans ${cyclesTxt(n)} · sans vous, ils réussissent ${Math.round(chanceEpreuve(Z.id)*100)} fois sur 100 · activer la zone avant fait aussi tomber la tentative`,go:()=>defier(Z)})}
  if(r)o.push({l:`Zone de ${r.nom}`,ic:r.bl,off:true,d:'reprenez-la en activant la zone : ses gardiens sont renforcés'});
  /* empreinte : une ancienne zone à vous se reprend aussi en réussissant un seul palier, épreuve plus facile d'un cran */
  if(!S.act[Z.id]&&!S.own[Z.id]&&S.emp[Z.id]&&!r){const lv=S.lv[Z.id]||0,res=typeZ(Z)==='RES',cap=res?3:7;
    const t=res?(lv<3?lv+1:lv-1):Math.abs(lv)<cap?lv+(lv<0?-1:1):lv-Math.sign(lv);
    o.splice(tk?1:0,0,{l:`Reprendre par l'empreinte : palier ${sgn(t)||'0'}`,ic:'⟲',cls:t<0?'m':'p',d:'réussir l\'épreuve du palier suffit à reprendre la zone, sans combat d\'activation',go:()=>startEpreuve(Z,t)})}
  return o}

/* ---------- minicarte, bandeau ---------- */
function dessinerRivaux(mc,s,ox,oz){if(!S.riv)return;const R=S.riv,pl=.5+.5*Math.sin(performance.now()/180);
  for(const Z of ZN){const r=maisonDe(Z.id),ct=R.c&&R.c.id===Z.id,tk=R.t&&tentativeSur(Z.id);if(!r&&!ct&&!tk)continue;
    mc.beginPath();Z.poly.forEach((p,i)=>{const x=(p[0]+ox)*s,y=(p[1]+oz)*s;i?mc.lineTo(x,y):mc.moveTo(x,y)});mc.closePath();
    if(r){mc.globalAlpha=.45;mc.fillStyle=r.col;mc.fill();mc.globalAlpha=1;mc.lineWidth=2.5;mc.strokeStyle=r.col;mc.stroke();
      const cx=(Z.c[0]+ox)*s,cy=(Z.c[1]+oz)*s;mc.font='bold 14px sans-serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillStyle='#fff';mc.fillText(r.bl,cx,cy-9)}
    if(tk){const m=RIVK[tk];mc.globalAlpha=.18;mc.fillStyle=m.col;mc.fill();mc.globalAlpha=1;mc.lineWidth=2.5;mc.strokeStyle=m.col;mc.setLineDash([3,4]);mc.stroke();mc.setLineDash([]);
      const cx=(Z.c[0]+ox)*s,cy=(Z.c[1]+oz)*s;mc.font='bold 12px sans-serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillStyle=m.col;mc.fillText(m.bl+'?',cx,cy-9)}
    if(ct){const m=RIVK[R.c.r];mc.lineWidth=2+2*pl;mc.strokeStyle=m?m.col:'#ff7a6a';mc.setLineDash([5,4]);mc.stroke();mc.setLineDash([])}}}
function ligneRivaux(){if(!S.riv)return'';const R=S.riv;
  const m=RIVAUX.map(r=>`<span class="d" title="${r.nom}"><span style="color:${r.col}">${r.bl}</span>${zonesMaison(r.k).length}</span>`).join('');
  const c=R.c&&ZB[R.c.id]?`<span class="d" title="${RIVK[R.c.r].nom} conteste ${ZB[R.c.id].info.nom}" style="color:#ff9a8a"><span style="color:${RIVK[R.c.r].col}">${RIVK[R.c.r].bl}</span>${court(R.c.id).split(' ').pop()}<small> ${(n=>n+' cycle'+(n>1?'s':''))(Math.max(0,R.c.du-R.nc))}</small></span>`:'';
  const t=Object.keys(R.t||{}).filter(k=>tentativeSur(R.t[k].id)===k).map(k=>{const r=RIVK[k],id=R.t[k].id;
    return`<span class="d" title="${LaM(r)} tente l'épreuve ${de_(ZB[id].info.nom)}" style="color:${r.col}">${r.bl}?${court(id).split(' ').pop()}<small> ${cyclesTxt(resteTente(k))}</small></span>`}).join('');
  return`<div class="ligne"><span class="titre">Rivaux</span>${m}${t}${c}</div>`}

/* ---------- écran « Rivaux » (menu Pause) ---------- */
function menaceDe(r){const R=riv(),l=[];const tk=R.t[r.k]&&tentativeSur(R.t[r.k].id)===r.k;
  if(tk)l.push(`tente l'épreuve ${de_(ZB[R.t[r.k].id].info.nom)} dans ${cyclesTxt(resteTente(r.k))}`);
  if(R.c&&R.c.r===r.k&&ZB[R.c.id])l.push(`conteste ${ZB[R.c.id].info.nom} : épreuve dans ${cyclesTxt(Math.max(0,R.c.du-R.nc))}`);
  return l.length?l.join(' ; '):'aucune menace annoncée'}
function openRivaux(f){mode='menu';document.body.classList.add('jeu-ouvert');riv();
  ui('menu',{sur:'Pause · les maisons rivales',t:'Rivaux',f:typeof f==='number'?f:0,
    corps:`<p class="petit">Le monde sauvage reste votre premier adversaire. Quatre maisons rivales grignotent la mosaïque, lentement : de temps à autre, l'une annonce qu'elle tentera l'épreuve d'une zone sauvage pour la prendre (activez la zone avant elle, ou allez défier ses gens à la Pierre), ou annonce qu'elle viendra faire l'épreuve d'une de vos zones pour la baisser d'un palier. Allez alors à la Pierre de la zone et battez son champion avant l'échéance. Une zone bornée à l'Oasis de Raak, verrouillée par votre Citadelle (la Citadelle et ses voisines) ne peut pas être prise ; une zone bornée, au cœur du royaume ou au repos ne peut pas être contestée.</p>`,
    back:openMenu,opts:[...RIVAUX.map((r,i)=>{const z=zonesMaison(r.k);
      return{l:`${r.nom} · ${z.length} zone${z.length>1?'s':''}`,ic:`<span style="color:${r.col}">${r.bl}</span>`,d:menaceDe(r),go:()=>openMaison(r,i)}}),{l:'Retour',ic:'◆',go:()=>openMenu()}]})}
function openMaison(r,i){const z=zonesMaison(r.k),R=riv(),cz=R.c&&R.c.r===r.k?ZB[R.c.id]:null,tz=R.t[r.k]&&tentativeSur(R.t[r.k].id)===r.k?ZB[R.t[r.k].id]:null;
  ui('menu',{sur:'Rivaux · tempérament du conteur '+r.conteur,t:r.bl+' '+r.nom,
    corps:`<p>${r.tmp}</p><p class="petit">Zones : ${z.length?z.map(Z=>Z.info.nom).join(', '):'aucune pour l\'instant'} · type préféré : ${({CIT:'Citadelles',DON:'Donjons',RES:'Ressources',ANT:'Antres',MAR:'Assemblées'})[r.pref]} · prochaine menace : ${menaceDe(r)}.</p>`,
    back:()=>openRivaux(i),opts:[...(tz?[{l:'Aller défier ses gens à '+tz.info.nom,ic:'⚔',cls:'m',d:`épreuve dans ${cyclesTxt(resteTente(r.k))}`,go:()=>{tp(tz.id);toMonde()}}]:[]),...(cz?[{l:'Aller défendre '+cz.info.nom,ic:'⚔',cls:'m',go:()=>{tp(cz.id);toMonde()}}]:[]),
      ...z.map(Z=>({l:'Aller à '+Z.info.nom,ic:'✧',d:'palier '+(sgn(S.lv[Z.id])||'0'),go:()=>{tp(Z.id);toMonde()}})),{l:'Retour',ic:'◆',go:()=>openRivaux(i)}]})}
