/* MozaWorld : les hordes du sauvage (18-19 nov., règle de l'utilisateur ; REGLES.md section 8).
   « Les créatures d'une zone de niveau 7 envahissent après un certain temps les zones plus faibles de deux ou trois paliers ;
   Citadelles, tours, remparts et pouvoirs aident à la défense. Souvent un seul des deux pôles (+7 ou −7) envahit, et l'autre
   accorde un pouvoir plus fort. » L'assaut périodique sur le Donjon d'origine (economie.js) reste tel quel ; les hordes s'y ajoutent.
   - Chaque zone (sauf les Ressources) a un pôle envahisseur fixé d'après son id : − , + , ou les deux (une zone sur six).
   - Une zone au palier 7 de son pôle envahisseur, à vous ou sauvage, mûrit sa colère (HORDE_MUR cycles), puis lève une horde
     annoncée à l'avance vers une zone à 2 tuiles au plus, plus faible de 2 ou 3 paliers exactement, en visant d'abord vos zones.
   - Le héros peut briser l'avant-garde à la Pierre d'éveil de la zone visée ; sinon, à l'arrivée, force contre défense.
   - Une zone sauvage à ±6 de son pôle envahisseur peut gronder et monter à ±7 (rare), pour que la guerre existe dans une partie normale.
   - Au palier 7 du pôle qui n'envahit pas, la carte de palier 7 de la zone joue comme un palier 9. */
const HORDE_MUR=5;        /* cycles passés au palier 7 avant de lever une horde, et repos après chaque horde (provisoire) */
const HORDE_DELAI=3;      /* cycles entre l'annonce et l'arrivée (doublé par les Greniers de Pama pour vos zones) (provisoire) */
const HORDE_GRACE=6;      /* aucune horde ni grondement avant ce cycle d'une partie (provisoire) */
const HORDE_GRONDE=1/40;  /* chance par cycle qu'une zone sauvage à ±6 de son pôle envahisseur monte à ±7 (provisoire) */
const HORDE_L7=9;         /* puissance de la carte de palier 7 du pôle qui n'envahit pas (provisoire) */
const HORDE_BUTIN=3;      /* mana du type de la source quand le héros brise l'avant-garde (provisoire) */

/* pôle envahisseur : −1, +1, ou 2 (les deux), d'après l'id de la zone */
function poleEnvahisseur(id){let h=2166136261;for(const c of String(id))h=Math.imul(h^c.charCodeAt(0),16777619)>>>0;
  const r=h%12;return r<5?-1:r<10?1:2}
const envahitA=(id,lv)=>{const p=poleEnvahisseur(id);return Math.abs(lv)>=7&&(p===2||Math.sign(lv)===p)};
const estRESh=id=>!!ZB[id]&&(ZB[id].mod||id)==='RES';
const nomPole=(Z,s)=>s<0?Z.info.pm:Z.info.pp;
/* « de » et « à » devant un nom de zone qui commence souvent par un article */
const court=id=>ZB[id].info.nom.split(',')[0];
const de_=n=>/^Le /.test(n)?'du '+n.slice(3):/^Les /.test(n)?'des '+n.slice(4):/^La /.test(n)?'de la '+n.slice(3):/^L['’]/.test(n)?'de l\''+n.slice(2):/^[AEIOUÉÈÊHaeiouéèêh]/.test(n)?'d\''+n:'de '+n;
const a_=n=>/^Le /.test(n)?'au '+n.slice(3):/^Les /.test(n)?'aux '+n.slice(4):/^La /.test(n)?'à la '+n.slice(3):/^L['’]/.test(n)?'à l\''+n.slice(2):'à '+n;
/* une zone lève-t-elle des hordes ? */
const sourceHorde=id=>!!ZB[id]&&!estRESh(id)&&envahitA(id,S.lv[id]||0);
/* zone au palier 7 du pôle qui n'envahit pas : pas de horde, carte plus forte */
const septPaisible=id=>!!ZB[id]&&!estRESh(id)&&Math.abs(S.lv[id]||0)>=7&&poleEnvahisseur(id)!==2&&Math.sign(S.lv[id])!==poleEnvahisseur(id);

function initHordes(){
  if(!S.hordes||typeof S.hordes!=='object')S.hordes={};
  if(!S.hordeMur||typeof S.hordeMur!=='object')S.hordeMur={};
  if(!S.hordesBilan)S.hordesBilan={brisees:0,repoussees:0,passees:0};
  /* nouvelle partie (graine changée) : on oublie les hordes de l'ancien monde */
  if(S.hordesGraine!==S.graine){S.hordes={};S.hordeMur={};S.hordesBilan={brisees:0,repoussees:0,passees:0};S.hordesGraine=S.graine}}

/* ---------- Cibles et défense ---------- */
function cibleHorde(src){const L=Math.abs(S.lv[src]||0),d=aPortee(src,2),prises=new Set(Object.values(S.hordes).map(h=>h.cible));
  const c=Object.keys(d).filter(id=>{if(id===src||!ZB[id]||prises.has(id))return false;const l=Math.abs(S.lv[id]||0);
    if(l>L-2||l<L-3)return false;                            /* plus faible de deux ou trois paliers, pas au-delà (provisoire) */
    if(l===0)return false;                                   /* une zone à 0 n'a plus rien à perdre */
    if(S.own[id]&&typeof cacheParBrume==='function'&&cacheParBrume(id))return false;   /* Brume de Givrecloche */
    return true});
  c.sort((a,b)=>(S.own[b]?1:0)-(S.own[a]?1:0)||d[a]-d[b]||Math.abs(S.lv[a]||0)-Math.abs(S.lv[b]||0));
  return c[0]||null}
function defenseHorde(id){const parts=[],L=Math.abs(S.lv[id]||0);parts.push(['niveau de la zone',L]);
  if(S.own[id]){
    const d=aPortee(id,3),cit=ZN.find(Z=>estCIT(Z)&&tient(Z.id)&&d[Z.id]!==undefined);
    if(cit)parts.push([d[cit.id]?`Citadelle tenue à ${d[cit.id]} tuile${d[cit.id]>1?'s':''} (${court(cit.id)})`:'la Citadelle elle-même',3,1]);
    if(typeof etatRoutes==='function'){etatRoutes();const vois=VOISINES[id]||[];
      const rp=Object.keys(S.routes).some(a=>estCIT(ZB[a])&&S.routes[a].some(b=>a===id||b===id||vois.indexOf(a)>=0||vois.indexOf(b)>=0));
      if(rp)parts.push(['rempart',3])}
    if(typeof piegesDonjon==='function')parts.push(...piegesHorde(id))}   /* donjons.js : la horde traverse les salles de chaque Donjon tenu, cible ou voisin (remplace « 2 au plus ») */
  /* le verrou de Citadelle (+2) ne s'ajoute pas au +3 de la Citadelle à 3 tuiles : la même Citadelle ne compte qu'une fois, la plus forte (provisoire) */
  if(typeof defenseMonde==='function'){const dm=defenseMonde(id)||{},b=(+dm.bonus||0)-(parts.some(p=>p[2])&&dm.verrou?Math.min(dm.verrou,3):0);if(b)parts.push(['pouvoirs du domaine',b])}
  return{total:parts.reduce((a,p)=>a+p[1],0),parts}}

/* ---------- Lever, annoncer, résoudre ---------- */
function leverHorde(src,cible,force){initHordes();if(!ZB[src]||S.hordes[src])return null;cible=cible||cibleHorde(src);if(!cible||!ZB[cible]||cible===src)return null;
  const greniers=S.own[cible]&&typeof loi==='function'&&loi('ASS150'),delai=HORDE_DELAI*(greniers?2:1);
  const h=S.hordes[src]={src,cible,nee:S.nc,arrive:S.nc+delai,force:force||Math.abs(S.lv[src]||0)+Math.floor(Math.random()*4)};
  save();hudKey='';etatHud();
  if(started&&(S.own[cible]||S.own[src]))toast('Une horde se lève · '+court(src),'Elle marche sur '+ZB[cible].info.nom,
    `Arrivée dans ${delai} cycles (environ ${fmt(resteHorde(h))})${greniers?', retardée par les Greniers de Pama':''}. Allez à la Pierre d'éveil de la zone visée pour briser son avant-garde.`);
  return h}
const resteHorde=h=>Math.max(0,(h.arrive-S.nc-1)*CYCLE+(CYCLE-S.tc));
let hordeRapports=[];
function finirHorde(src){delete S.hordes[src];S.hordeMur[src]=0}
function hordeArrive(src){initHordes();src=src||Object.keys(S.hordes).sort((a,b)=>S.hordes[a].arrive-S.hordes[b].arrive)[0];const h=S.hordes[src];if(!h)return null;
  const Zs=ZB[src],Zc=ZB[h.cible],l=[],nomS=court(src),aVous=!!S.own[h.cible];finirHorde(src);let passe=false;
  if(!sourceHorde(src))l.push(`${nomS} n'est plus au palier 7 de son pôle envahisseur : la horde se disperse en chemin.`);
  else if(S.own[h.cible]&&typeof cacheParBrume==='function'&&cacheParBrume(h.cible))l.push('La Brume de Givrecloche cache la zone : la horde passe son chemin.');
  else{const D=defenseHorde(h.cible);l.push(`Horde ${de_(nomS)}, force ${h.force}, contre ${Zc.info.nom}, défense ${D.total} (${D.parts.map(p=>p[0]+' +'+p[1]).join(', ')}).`);
    if(h.force<=D.total){S.hordesBilan.repoussees++;gagner(ZMANA[src]||'Pierre',1);l.push(`La horde se brise sur les défenses : +1 ${ZMANA[src]||'Pierre'} pris sur les vaincus.`)}
    else{passe=true;S.hordesBilan.passees++;l.push(...defaite(h.cible))}}
  save();etatHud();hudKey='';
  if(aVous||S.own[src]||h.vu)hordeRapports.push({ok:!passe,force:h.force,cible:h.cible,lignes:l});
  else if(started)toast('Le sauvage gronde','Horde '+de_(nomS),l[l.length-1]);
  montrerHorde();return{passe,lignes:l}}
/* la horde passe : la zone recule d'un palier vers 0 (Ressource : −1 niveau et routes coupées) ; une zone à vous qui tombe à 0 redevient sauvage, avec votre empreinte (réponse de l'utilisateur, 19 nov.) */
function defaite(id){const Z=ZB[id],l=[],a=S.own[id],lv=S.lv[id]||0;
  if(typeof borne==='function'&&borne(id)){l.push('La Pierre de bornage de Raak tient : la zone ne recule pas.');return l}
  if(estRESh(id)){if(S.routes&&S.routes[id]&&S.routes[id].length){delete S.routes[id];l.push('Ses routes sont coupées.')}}
  if(lv!==0){const n=lv-Math.sign(lv);S.lv[id]=n;Z.lvT=n;l.push(`${Z.info.nom} recule d'un palier (${sgn(n)||'0'}).`)}
  if(a&&(S.lv[id]||0)===0){S.own[id]=false;S.act[id]=false;S.emp[id]=true;l.push('La zone tombe à 0 et redevient sauvage. Votre empreinte y reste : vous la reprendrez plus facilement.')}
  if(typeof etatRoutes==='function')etatRoutes();
  return l}
function montrerHorde(){if(!hordeRapports.length||mode!=='monde')return;const r=hordeRapports.shift();mode='menu';document.body.classList.add('jeu-ouvert');sfx(r.ok?'hit':'fail');
  const Z=ZB[r.cible];
  ui('menu',{sur:'Horde du sauvage · force '+r.force,t:r.ok?Z.info.nom+' tient':Z.info.nom+' est forcée',
    corps:`<p class="petit">${r.lignes.join('<br>')}</p><p class="petit">Hordes brisées par le héros ${S.hordesBilan.brisees}, repoussées ${S.hordesBilan.repoussees}, passées ${S.hordesBilan.passees}. Une Citadelle tenue à 3 tuiles ou moins, un rempart et les pièges du Donjon aménagé renforcent la défense.</p>`,
    back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde},{l:'Aller '+a_(court(r.cible)),ic:'✧',go:()=>{tp(r.cible);toMonde()}}]})}

/* ---------- Le cycle : colère, grondement, arrivées ---------- */
function hordesCycle(){initHordes();if(S.nc<HORDE_GRACE)return;
  for(const Z of ZN){const id=Z.id,lv=S.lv[id]||0;if(estRESh(id))continue;
    /* grondement : une zone sauvage à ±6 de son pôle envahisseur monte à ±7, rarement */
    if(!S.own[id]&&Math.abs(lv)===6&&envahitA(id,lv*7/6)&&Math.random()<HORDE_GRONDE){const n=Math.sign(lv)*7;S.lv[id]=n;Z.lvT=n;S.hordeMur[id]=0;hudKey='';
      if(started)toast('La terre gronde · '+court(id),'La zone monte au palier '+sgn(n)+' ('+nomPole(Z,n)+')','Ses créatures mûrissent une horde contre les zones plus faibles autour d\'elle.');continue}
    if(!sourceHorde(id)){S.hordeMur[id]=0;continue}
    if(S.hordes[id])continue;
    S.hordeMur[id]=(S.hordeMur[id]||0)+1;
    if(S.hordeMur[id]>=HORDE_MUR)leverHorde(id)}
  save()}
let hordeNc=null;
setInterval(()=>{if(!started||mode==='titre'||typeof S==='undefined')return;initHordes();
  if(hordeNc===null||S.nc<hordeNc)hordeNc=S.nc;
  while(hordeNc<S.nc){hordeNc++;hordesCycle()}
  for(const src in S.hordes){const h=S.hordes[src];if(S.nc<h.arrive)continue;if(typeof CB!=='undefined'&&CB&&CB.horde===src)continue;hordeArrive(src)}
  if(mode==='monde'&&hordeRapports.length)montrerHorde();
  /* le héros arrive dans une zone visée : on le prévient une fois */
  if(mode==='monde'&&curZ){for(const src in S.hordes){const h=S.hordes[src];if(h.cible===curZ.id&&!h.vu){h.vu=1;
    toast('Avant-garde de la horde · '+court(src),'Elle campe près de la Pierre d\'éveil',`Arrivée de la horde dans environ ${fmt(resteHorde(h))}. À la Pierre, OK puis « Affronter l'avant-garde » pour la briser.`)}}}},1000);

/* ---------- Le héros répond : combat contre l'avant-garde ---------- */
function combatHorde(src){const h=S.hordes[src];if(!h)return;const Zc=ZB[h.cible],Zs=ZB[src],L=Math.min(6,Math.abs(S.lv[h.cible]||0)+2),liste=MON[Zs.id]||MON[Zs.mod];
  startCombat(Zc,'horde');if(!CB)return;CB.horde=src;
  const foes=[0,1].map(i=>{const m=liste[Math.random()<.5?0:1],pv=Math.round(m.pv*(1+.4*L));return{nom:m.nom,pv,max:pv,atk:m.atk+L,g:0,mv:m.mv,mi:Math.floor(Math.random()*m.mv.length),z:h.cible}});
  const br=CB.foes[0]&&CB.foes[0].br;CB.foes=foes;$('cb-foes').innerHTML='';
  foes.forEach((u,i)=>{u.voie=i%2;if(br)u.br=br.map(x=>x.slice());uniteEl(u,'cb-foes');intention(u)});
  $('cb-sur').textContent='Avant-garde de la horde · '+court(src)+' (palier '+sgn(S.lv[src]||0)+')';
  journal(`L'avant-garde ${de_(court(src))} se jette sur vous. Brisez-la et la horde se disperse.`);if(typeof majUnites==='function')majUnites()}
function finHorde(ok,C){const src=C.horde,h=S.hordes[src],Zs=ZB[src];
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Défaite',t:'L\'avant-garde passe',corps:`<p>Vous êtes blessé (${S.hurt} sur 3). La horde marche toujours${h?' sur '+ZB[h.cible].info.nom+', arrivée dans environ '+fmt(resteHorde(h)):''}.</p><p class="petit">Vous pouvez retenter le combat à la Pierre d'éveil de la zone visée avant son arrivée.</p>`,
      back:toMonde,opts:[{l:'Repartir',ic:'◆',go:toMonde}]});return}
  const t=ZMANA[src]||'Pierre';gagner(t,HORDE_BUTIN);if(h){finirHorde(src);S.hordesBilan.brisees++}save();etatHud();hudKey='';sfx('hit');
  ui('menu',{sur:'Victoire · horde brisée',t:'La horde '+de_(court(src))+' se disperse',corps:`<p>Son avant-garde est tombée : la horde n'arrivera pas. Les vaincus lâchent ${HORDE_BUTIN} ${t}. Réserve : ${resTexte()}.</p><p class="petit">La zone source reprend des forces ; elle pourra lever une nouvelle horde dans ${HORDE_MUR} cycles si elle reste au palier 7.</p>`,
    back:toMonde,opts:[{l:'Repartir explorer',ic:'◆',go:toMonde}]})}

/* ---------- Affichage : Pierre d'éveil, fiche de zone, bandeau, minicarte ---------- */
function texteEnvahisseur(Z){const p=poleEnvahisseur(Z.id);
  return p===2?`les deux pôles envahissent à ±7 (${Z.info.pm} et ${Z.info.pp})`:`${p<0?'−7':'+7'} (${nomPole(Z,p)}) lève des hordes ; ${p<0?'+7':'−7'} (${nomPole(Z,-p)}) reste paisible et sa carte de palier 7 est plus forte`}
function optionsHorde(Z){initHordes();const o=[];if(!Z)return o;
  for(const src in S.hordes){const h=S.hordes[src];if(h.cible!==Z.id)continue;
    o.push({l:'Affronter l\'avant-garde de la horde',ic:'⚔',cls:'p',d:`${de_(court(src))} · arrivée dans ${fmt(resteHorde(h))} · victoire : horde brisée, ${HORDE_BUTIN} ${ZMANA[src]||''}`,go:()=>combatHorde(src)})}
  if(estRESh(Z.id))return o;const h=S.hordes[Z.id];
  o.push({l:'Horde : '+(h?'en marche vers '+court(h.cible):septPaisible(Z.id)?'palier 7 paisible':sourceHorde(Z.id)?'la colère mûrit ('+(S.hordeMur[Z.id]||0)+'/'+HORDE_MUR+')':'pôle envahisseur'),ic:'⚑',off:true,d:texteEnvahisseur(Z)});
  return o}
function ficheHorde(Z){const el=$('h-mai');if(!el||!Z)return;initHordes();let t='';
  const vise=Object.keys(S.hordes).find(s=>S.hordes[s].cible===Z.id);
  if(vise)t=`<b style="color:#ff8a6a">Horde ${de_(court(vise))} en marche</b>`;
  else if(!estRESh(Z.id)){const p=poleEnvahisseur(Z.id);t=S.hordes[Z.id]?`<b style="color:#ff8a6a">Lève une horde</b>`:p===2?'Hordes : les deux pôles':`Hordes : ${p<0?'−7':'+7'} ${nomPole(Z,p)}`}
  if(t)el.innerHTML+=`<br><small>${t}</small>`}
function menacesHordes(){initHordes();const L=Object.values(S.hordes).sort((a,b)=>(S.own[b.cible]?1:0)-(S.own[a.cible]?1:0)||a.arrive-b.arrive);
  return L.slice(0,2).map(h=>`<span class="d" title="Horde ${de_(court(h.src))} vers ${ZB[h.cible].info.nom}" style="${S.own[h.cible]?'color:#ff8a6a':''}"><span>⚔</span>${ZB[h.src].info.nom.split(',')[0].split(' ').pop()} → ${ZB[h.cible].info.nom.split(',')[0].split(' ').pop()}<small> ${fmt(resteHorde(h))}</small></span>`)
    .concat(L.length>2?[`<span class="d"><small>+${L.length-2}</small></span>`]:[])}
function dessinerHordes(mc,s,ox,oz,T){if(typeof S==='undefined'||!S.hordes)return;const pulse=.55+.45*Math.sin((T||0)*5);
  for(const src in S.hordes){const h=S.hordes[src],A=ZB[src],B=ZB[h.cible];if(!A||!B)continue;
    const x0=(A.c[0]+ox)*s,y0=(A.c[1]+oz)*s,x1=(B.c[0]+ox)*s,y1=(B.c[1]+oz)*s,a=Math.atan2(y1-y0,x1-x0);
    mc.save();mc.strokeStyle=`rgba(255,96,72,${.5+.5*pulse})`;mc.fillStyle=mc.strokeStyle;mc.lineWidth=3;mc.setLineDash([7,4]);
    mc.beginPath();mc.moveTo(x0,y0);mc.lineTo(x1-Math.cos(a)*10,y1-Math.sin(a)*10);mc.stroke();mc.setLineDash([]);
    mc.beginPath();mc.moveTo(x1-Math.cos(a)*4,y1-Math.sin(a)*4);mc.lineTo(x1-Math.cos(a)*16+Math.sin(a)*7,y1-Math.sin(a)*16-Math.cos(a)*7);mc.lineTo(x1-Math.cos(a)*16-Math.sin(a)*7,y1-Math.sin(a)*16+Math.cos(a)*7);mc.fill();
    mc.lineWidth=2;mc.beginPath();mc.arc(x1,y1,12+4*pulse,0,TAU);mc.stroke();mc.font='bold 14px sans-serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillText('⚔',x0,y0-12);mc.restore()}}

/* ---------- Carte de palier 7 du pôle paisible : elle joue comme un palier HORDE_L7 ---------- */
function renforcerPaliers7(){if(typeof CARTES22==='undefined'||typeof carteCK!=='function'||typeof ZB==='undefined')return;
  for(const id in CARTES22.zones){if(!ZB[id]||estRESh(id))continue;const p=poleEnvahisseur(id);if(p===2)continue;
    const P=CARTES22.zones[id],s=p<0?'p':'m',k=id+'#'+(s==='m'?'-':'+')+'7',c=P[s+'7']?Object.assign({p7:1},P[s+'7']):P[s];
    if(!c||!CK[k])continue;CK[k]=carteCK(id,()=>c,()=>HORDE_L7);CK[k].paisible=1}}
setTimeout(()=>{try{renforcerPaliers7()}catch(e){}},0);

/* ---------- Tests : MZ.horde(source?, cible?) lève une horde tout de suite, MZ.hordeArrive(source?) la résout ---------- */
function hordeTest(src,cible){initHordes();
  if(!src)src=ZN.map(Z=>Z.id).find(id=>sourceHorde(id)&&!S.hordes[id])||ZN.filter(Z=>!estRESh(Z.id)&&!S.own[Z.id]&&!S.hordes[Z.id]).sort((a,b)=>Math.abs(S.lv[b.id]||0)-Math.abs(S.lv[a.id]||0))[0].id;
  if(S.hordes[src])return S.hordes[src];
  if(!estRESh(src)&&!sourceHorde(src)){const p=poleEnvahisseur(src),n=7*(p===2?(Math.sign(S.lv[src]||0)||1):p);S.lv[src]=n;ZB[src].lvT=n}
  if(!cible){cible=cibleHorde(src);if(!cible){const d=aPortee(src,6);cible=Object.keys(d).filter(id=>id!==src&&S.own[id]).sort((a,b)=>d[a]-d[b])[0]||null}}
  return leverHorde(src,cible)}
