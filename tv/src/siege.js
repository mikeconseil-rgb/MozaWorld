/* MozaWorld : le siège final d'une Citadelle épique (19 nov. soir, lot 3 ; REGLES.md section 8, « Victoire »).
   Décisions de l'utilisateur : « 5 Citadelles épiques donnent chacune une victoire à ±7 (provisoire) ; après une victoire,
   fin de ce monde et nouveau monde (provisoire) ». Idée retenue : « siège final d'une Citadelle épique à ±7 : trois hordes de suite à tenir ».
   - Citadelles épiques : 5 tirées d'après la graine du monde parmi ses Citadelles (toutes s'il y en a 5 ou moins : sur la carte jouée, Berestograd).
   - Une Citadelle épique tenue à ±7 : la Pierre propose « Lancer le siège final » (le joueur choisit son moment).
   - Le siège : trois vagues annoncées, SIEGE_DELAI cycles chacune, plus fortes qu'une horde ordinaire. Défense = defenseHorde (hordes.js) ;
     le héros peut briser une vague à la Pierre (combat 'horde' de combat.js). Une vague qui passe : la Citadelle recule d'un palier (defaite),
     le siège échoue et se relance après SIEGE_REPOS cycles.
   - Trois vagues tenues ou brisées : victoire, palmarès gardé dans le navigateur, et proposition de commencer un nouveau monde. */
const SIEGE_EPIQUES=5;          /* Citadelles épiques par monde (décision de l'utilisateur, provisoire) */
const SIEGE_VAGUES=3;           /* vagues à tenir */
const SIEGE_DELAI=3;            /* cycles entre l'annonce d'une vague et son arrivée (provisoire ; 20 nov., critique : était 2) */
const SIEGE_SURCROIT=[4,6,8];   /* force d'une vague = horde ordinaire (7 + 1 tous les 10 cycles) + ce surcroît + 0 ou 1 (provisoire) */
const SIEGE_CHEF=1;             /* la dernière vague dépasse d'autant la défense de la Citadelle à son annonce (provisoire, 20 nov., testeur) */
const SIEGE_REPOS=5;            /* cycles avant de pouvoir relancer un siège échoué (provisoire) */
const SIEGE_BUTIN=3;            /* mana du type de la Citadelle quand le héros brise une vague (provisoire) */
const PALMARES_CLE='mz-palmares-1';

function hashSiege(t){let h=2166136261;for(const c of String(t))h=Math.imul(h^c.charCodeAt(0),16777619)>>>0;return h}
let epiquesCache={g:null,l:[]};
function citadellesEpiques(){const g=S.graine||0;if(epiquesCache.g===g&&epiquesCache.l.length)return epiquesCache.l;
  const cits=ZN.filter(Z=>estCIT(Z)).map(Z=>Z.id);
  const l=cits.length<=SIEGE_EPIQUES?cits:cits.slice().sort((a,b)=>hashSiege(a+'#'+g)-hashSiege(b+'#'+g)).slice(0,SIEGE_EPIQUES);
  epiquesCache={g,l};return l}
const estEpique=id=>!!ZB[id]&&citadellesEpiques().indexOf(id)>=0;
const courtS=id=>ZB[id].info.nom.split(',')[0];
const cyclesS=n=>n+' cycle'+(n>1?'s':'');

function initSiege(){if(S.siege===undefined)S.siege=null;if(!S.siegeRepos||typeof S.siegeRepos!=='object')S.siegeRepos={};
  if(S.siegeFini===undefined)S.siegeFini=null;
  /* nouveau monde (graine changée) : on oublie le siège et la victoire de l'ancien */
  if(S.siegeGraine!==S.graine){S.siege=null;S.siegeRepos={};S.siegeFini=null;S.siegeGraine=S.graine}}
const resteSiege=s=>Math.max(0,(s.arrive-S.nc-1)*CYCLE+(CYCLE-S.tc));
const peutSieger=id=>estEpique(id)&&tient(id)&&Math.abs(S.lv[id]||0)>=7;
/* 20 nov. (critique, provisoire) : une Citadelle en siège est à l'abri des rivaux, ni contestation ni prise (rivaux.js, protegeConteste) */
const enSiege=id=>typeof S!=='undefined'&&!!S.siege&&S.siege.cit===id;
const reposSiege=id=>Math.max(0,(S.siegeRepos[id]||0)-S.nc);

/* les assaillants : la zone sauvage la plus éveillée, la plus proche (pour les créatures du combat et le récit) */
function sourceSiege(cit){const d=typeof aPortee==='function'?aPortee(cit,12):{};
  const c=ZN.filter(Z=>Z.id!==cit&&!S.own[Z.id]&&(Z.mod||Z.id)!=='RES').sort((a,b)=>Math.abs(S.lv[b.id]||0)-Math.abs(S.lv[a.id]||0)||(d[a.id]??99)-(d[b.id]??99));
  return(c[0]||ZN.find(Z=>Z.id!==cit&&(Z.mod||Z.id)!=='RES')||ZB[cit]).id}

/* ---------- Lancer, annoncer, résoudre ---------- */
function lancerSiege(id){initSiege();if(S.siege||S.siegeFini||!peutSieger(id)||reposSiege(id))return null;
  S.siege={cit:id,vague:0,tenues:0,brisees:0,debut:S.nc};
  /* les maisons s'écartent de la Citadelle assiégée : contestation en cours levée */
  if(S.riv&&S.riv.c&&S.riv.c.id===id){const r=typeof RIVK!=='undefined'&&RIVK[S.riv.c.r];S.riv.c=null;if(r&&started)setTimeout(()=>toast(`${r.bl} ${r.nom} renonce à ${ZB[id].info.nom}`,'la Citadelle soutient le siège final','Aucune maison rivale ne s\'en approche tant que dure le siège.'),6000)}
  annoncerVague();return S.siege}
function annoncerVague(){const s=S.siege;if(!s)return;s.vague++;s.arrive=S.nc+SIEGE_DELAI;s.src=sourceSiege(s.cit);s.vu=0;
  s.force=7+Math.floor((S.nc||0)/(typeof HORDE_CROIT==='number'?HORDE_CROIT:10))+SIEGE_SURCROIT[s.vague-1]+Math.floor(Math.random()*2);
  const D=defenseHorde(s.cit);
  /* 20 nov. (testeur, provisoire) : la dernière vague, menée par le chef, dépasse d'au moins 1 la défense de la Citadelle à son annonce ;
     sans cela, une Citadelle bien aménagée (défense 22 à 25) tenait les trois vagues sans que le héros combatte */
  if(s.vague>=SIEGE_VAGUES)s.force=Math.max(s.force,D.total+SIEGE_CHEF);
  save();hudKey='';etatHud();
  if(started)toast(`Siège final · vague ${s.vague} sur ${SIEGE_VAGUES}`,`Le monde sauvage marche sur ${courtS(s.cit)}`,
    `Force ${s.force} contre votre défense ${D.total}, arrivée dans ${cyclesS(SIEGE_DELAI)} (environ ${fmt(resteSiege(s))}). ${s.vague>=SIEGE_VAGUES?'Menée par leur chef, elle dépasse vos défenses : allez la briser vous-même à la Pierre d\'éveil de la Citadelle.':'À la Pierre d\'éveil de la Citadelle, « Briser la vague » pour l\'affronter vous-même.'}`)}
let siegeRapports=[];
/* forcer : true = la vague est tenue, false = elle passe, absent = force contre défense */
function vagueArrive(forcer){initSiege();const s=S.siege;if(!s)return null;const Z=ZB[s.cit],D=defenseHorde(s.cit),l=[];
  const tenue=forcer===true||forcer!==false&&s.force<=D.total;
  l.push(`Vague ${s.vague} sur ${SIEGE_VAGUES}, force ${s.force}, contre ${Z.info.nom}, défense ${D.total} (${D.parts.map(p=>p[0]+' +'+p[1]).join(', ')}).`);
  if(tenue){s.tenues++;if(S.hordesBilan)S.hordesBilan.repoussees++;gagner(ZMANA[s.cit]||'Pierre',1);
    l.push(`La vague se brise sur les remparts : +1 ${ZMANA[s.cit]||'Pierre'}.`);return suiteSiege(l)}
  if(S.hordesBilan)S.hordesBilan.passees++;l.push('La vague passe les murs.',...defaite(s.cit));
  return echecSiege(l)}
function suiteSiege(l){const s=S.siege;
  if(s.vague>=SIEGE_VAGUES){victoireSiege(l);return{tenue:true,victoire:true,lignes:l}}
  annoncerVague();l.push(`La vague ${s.vague} se forme déjà : arrivée dans ${cyclesS(SIEGE_DELAI)}, force ${s.force}.`);
  siegeRapports.push({ok:true,t:'La Citadelle tient',lignes:l});montrerSiege();return{tenue:true,lignes:l}}
function echecSiege(l,sansRapport){const s=S.siege;S.siege=null;S.siegeRepos[s.cit]=S.nc+SIEGE_REPOS;
  l.push(`Le siège final échoue. Ramenez ${ZB[s.cit].info.nom} à ±7 : vous pourrez le relancer après ${cyclesS(SIEGE_REPOS)} de repos.`);
  save();hudKey='';etatHud();if(!sansRapport){siegeRapports.push({ok:false,t:'Le siège échoue',lignes:l});montrerSiege()}return{tenue:false,lignes:l}}
function montrerSiege(){if(!siegeRapports.length||mode!=='monde')return;const r=siegeRapports.shift();if(r.victoire){if(typeof fanfare==='function')fanfare(7);ecranVictoire(r.victoire,r.lignes);return}mode='menu';document.body.classList.add('jeu-ouvert');sfx(r.ok?'hit':'fail');
  ui('menu',{sur:'Siège final',t:r.t,corps:`<p class="petit">${r.lignes.join('<br>')}</p>`,back:toMonde,opts:[{l:'Continuer',ic:'◆',go:toMonde}]})}

setInterval(()=>{if(!started||mode==='titre'||typeof S==='undefined')return;initSiege();if(mode==='monde'&&siegeRapports.length)montrerSiege();const s=S.siege;if(!s)return;
  if(!ZB[s.cit]||!tient(s.cit)||Math.abs(S.lv[s.cit]||0)<7){S.siege=null;save();hudKey='';etatHud();
    toast('Le siège est levé',ZB[s.cit]?ZB[s.cit].info.nom:'',tient(s.cit)?'La Citadelle n\'est plus à ±7 : le siège final s\'arrête. Ramenez-la à ±7 pour le relancer.':'La Citadelle n\'est plus à vous : le siège final s\'arrête. Reprenez-la et ramenez-la à ±7 pour le relancer.');return}
  if(S.nc>=s.arrive&&!(typeof CB!=='undefined'&&CB&&CB.siege))vagueArrive();
  if(mode==='monde'&&curZ&&curZ.id===s.cit&&s.vu!==s.vague){s.vu=s.vague;
    toast(`Siège final · vague ${s.vague} sur ${SIEGE_VAGUES}`,'Elle approche de la Citadelle',`Arrivée dans environ ${fmt(resteSiege(s))}. À la Pierre, OK puis « Briser la vague » pour la combattre.`)}},1000);

/* ---------- Le héros brise une vague (combat d'avant-garde de hordes.js) ---------- */
function combatSiege(){const s=S.siege;if(!s)return;const Zc=ZB[s.cit],Zs=ZB[s.src]||Zc,liste=MON[Zs.id]||MON[Zs.mod]||MON.CIT,L=6;
  startCombat(Zc,'horde');if(!CB)return;CB.siege=s.vague;
  const mk=i=>{const m=liste[i],pv=Math.round(m.pv*(1+.4*L));return{nom:m.nom,pv,max:pv,atk:m.atk+L+s.vague-1,g:0,mv:m.mv,mi:Math.floor(Math.random()*m.mv.length),chef:m.chef,z:s.cit}};
  const idx=s.vague===1?[0,1]:s.vague===2?[0,1,Math.random()<.5?0:1]:[0,1,liste[2]?2:0];
  const foes=idx.map(mk);const br=CB.foes[0]&&CB.foes[0].br;CB.foes=foes;$('cb-foes').innerHTML='';
  if(typeof rangerEnnemis==='function'&&CB.cases)rangerEnnemis(foes);foes.forEach((u,i)=>{if(u.voie==null)u.voie=i%2;if(br)u.br=br.map(x=>x.slice());uniteEl(u,'cb-foes');intention(u)});
  $('cb-sur').textContent=`Siège final · vague ${s.vague} sur ${SIEGE_VAGUES} · les créatures ${typeof de_==='function'?de_(courtS(Zs.id)):'de '+courtS(Zs.id)}`;
  journal(`La vague ${s.vague} monte à l'assaut de ${Zc.info.nom}. Brisez-la et elle ne touchera pas les murs.`);if(typeof majUnites==='function')majUnites()}
function finSiegeCombat(ok,C){const s=S.siege;
  if(!ok){S.hurt++;sfx('fail');etatHud();if(S.hurt>=3){mort();return}save();
    ui('menu',{sur:'Défaite',t:'La vague vous repousse',corps:`<p>Vous êtes blessé (${S.hurt} sur 3). ${s?`La vague ${s.vague} marche toujours sur ${ZB[s.cit].info.nom}, arrivée dans environ ${fmt(resteSiege(s))}.`:''}</p><p class="petit">Vous pouvez retenter le combat à la Pierre d'éveil de la Citadelle avant son arrivée ; sinon, vos défenses la reçoivent.</p>`,
      back:toMonde,opts:[{l:'Repartir',ic:'◆',go:toMonde}]});return}
  if(!s||s.vague!==C.siege){toMonde();return}
  s.brisees++;if(S.hordesBilan)S.hordesBilan.brisees++;if(typeof gagnerTesselles==='function')gagnerTesselles(TESS_PRIMES.horde,'horde');
  const t=ZMANA[s.cit]||'Pierre';gagner(t,SIEGE_BUTIN);sfx('hit');
  const l=[`Vous brisez la vague ${s.vague} sur ${SIEGE_VAGUES} devant la Pierre : elle n'atteindra pas les murs. Les vaincus lâchent ${SIEGE_BUTIN} ${t}.`];
  if(s.vague>=SIEGE_VAGUES){victoireSiege(l);return}
  annoncerVague();
  ui('menu',{sur:'Siège final · vague brisée',t:`${courtS(s.cit)} respire`,corps:`<p>${l[0]}</p><p>La vague ${s.vague} sur ${SIEGE_VAGUES} se forme déjà : force ${s.force}, arrivée dans ${cyclesS(SIEGE_DELAI)} (environ ${fmt(resteSiege(s))}).</p><p class="petit">Défense actuelle de la Citadelle : ${defenseHorde(s.cit).total}. Réserve : ${resTexte()}.</p>`,
    back:toMonde,opts:[{l:'Tenir les murs',ic:'◆',go:toMonde}]})}

/* ---------- Victoire, palmarès, nouveau monde ---------- */
function tempsJeu(sec){const m=Math.floor(sec/60),h=Math.floor(m/60);return h?`${h} h ${String(m%60).padStart(2,'0')} min`:`${m} min`}
function bilanMonde(cit){const own=ZN.filter(Z=>S.own[Z.id]),B=S.hordesBilan||{brisees:0,repoussees:0,passees:0};
  const maisons=typeof RIVAUX!=='undefined'&&typeof zonesMaison==='function'?RIVAUX.map(r=>({nom:r.nom,bl:r.bl,n:zonesMaison(r.k).length})):[];
  return{date:new Date().toISOString().slice(0,10),cit,nom:ZB[cit].info.nom,pole:(S.lv[cit]||0)>0?ZB[cit].info.pp:ZB[cit].info.pm,signe:sgn(S.lv[cit]||0),graine:S.graine,
    zones:own.length,total:ZN.length,sept:own.filter(Z=>Math.abs(S.lv[Z.id]||0)>=7).length,brisees:B.brisees,repoussees:B.repoussees,passees:B.passees,
    maisons,temps:(S.nc||0)*CYCLE+(S.tc||0),cycles:S.nc||0,morts:Math.max(0,(S.lives||1)-1),cartes:(S.deck||[]).length}}
function lirePalmares(){try{const l=JSON.parse(localStorage.getItem(PALMARES_CLE)||'[]');return Array.isArray(l)?l:[]}catch(_){return[]}}
function inscrirePalmares(b){const l=lirePalmares();l.push(b);try{localStorage.setItem(PALMARES_CLE,JSON.stringify(l.slice(-50)))}catch(_){}return l}
function victoireSiege(l){const s=S.siege;S.siege=null;const b=bilanMonde(s.cit);b.vagues={tenues:s.tenues,brisees:s.brisees};
  S.siegeFini={cit:s.cit,nc:S.nc};inscrirePalmares(b);save();hudKey='';etatHud();
  if(mode==='monde'||mode==='menu'){if(typeof fanfare==='function')fanfare((S.lv[s.cit]||0)>=0?7:-7);ecranVictoire(b,l)}else siegeRapports.push({victoire:b,lignes:l})}
function ligneMaisons(b){return b.maisons&&b.maisons.length?b.maisons.map(m=>`${m.bl} ${m.nom} : ${m.n} zone${m.n>1?'s':''}`).join(' · '):'aucune maison rivale'}
function ecranVictoire(b,l){mode='menu';document.body.classList.add('jeu-ouvert');
  const n=lirePalmares().length;
  ui('menu',{sur:'Victoire · Citadelle épique',t:`${courtS(b.cit)} tient : le monde est à vous`,
    corps:`${l&&l.length?`<p class="petit">${l.join('<br>')}</p>`:''}<p><b>Trois vagues du monde sauvage se sont brisées sur ${courtS(b.cit)}, au pôle ${b.pole}, palier ${b.signe||'±7'}.</b> Ce monde a trouvé son maître : son histoire s'achève ici, et la mosaïque se recompose plus loin.</p>
<p class="petit">Zones tenues : <b>${b.zones} sur ${b.total}</b>, dont ${b.sept} à ±7 · Hordes brisées par le héros : <b>${b.brisees}</b>, repoussées par les défenses : ${b.repoussees}, passées : ${b.passees}${b.vagues?` · Siège : ${b.vagues.brisees} vague${b.vagues.brisees>1?'s':''} brisée${b.vagues.brisees>1?'s':''} par le héros, ${b.vagues.tenues} tenue${b.vagues.tenues>1?'s':''} par les murs`:''}</p>
<p class="petit">Maisons rivales : ${ligneMaisons(b)} · Temps de jeu : <b>${tempsJeu(b.temps)}</b> (${cyclesS(b.cycles)}) · Héros tombés : ${b.morts} · Paquet : ${b.cartes} cartes</p>
<p class="petit">Victoire inscrite au palmarès (${n} victoire${n>1?'s':''} en tout, menu Pause).</p>`,
    back:toMonde,opts:[{l:'Commencer un nouveau monde',ic:'✦',cls:'p',d:'la victoire reste au palmarès',go:()=>startGame(true)},
      {l:'Rester encore dans ce monde',ic:'◆',d:'il est gagné ; le nouveau monde attend au menu Pause',go:toMonde}]})}
function openPalmares(retour){const l=lirePalmares().slice().reverse();retour=retour||openMenu;
  ui('menu',{sur:'Palmarès',t:l.length?`${l.length} monde${l.length>1?'s':''} gagné${l.length>1?'s':''}`:'Aucune victoire encore',
    corps:l.length?l.map(b=>`<p class="petit"><b>${b.date} · ${b.nom}</b>, pôle ${b.pole} · ${b.zones}/${b.total} zones · ${b.brisees} hordes brisées · ${tempsJeu(b.temps||0)} · héros tombés : ${b.morts||0}</p>`).join('')
      :`<p class="petit">Une victoire s'obtient par le siège final d'une Citadelle épique tenue au palier ±7 : trois vagues du monde sauvage à tenir ou à briser.</p>`,
    back:retour,opts:[{l:'Retour',ic:'◆',go:retour}]})}
function confirmerNouveauMonde(retour){ui('menu',{sur:'Nouveau monde',t:'Quitter ce monde gagné ?',corps:'<p>Un nouveau monde est tiré : zones, cartes, rivaux et hordes repartent de zéro. Votre victoire reste au palmarès. Pensez à sauvegarder ce monde dans un emplacement si vous voulez y revenir.</p>',
  back:retour,opts:[{l:'Commencer le nouveau monde',ic:'✦',cls:'p',go:()=>startGame(true)},{l:'Pas encore',ic:'◆',go:retour}]})}
/* menu Pause */
function optionsPalmares(){initSiege();const o=[],n=lirePalmares().length;
  if(S.siegeFini)o.push({l:'Commencer le nouveau monde',ic:'✦',cls:'p',d:'ce monde est gagné',go:()=>confirmerNouveauMonde(openMenu)});
  o.push({l:'Palmarès',ic:'♛',d:n?n+' victoire'+(n>1?'s':''):'aucune victoire encore',go:()=>openPalmares(openMenu)});return o}

/* ---------- Pierre d'éveil, fiche, bandeau, minicarte ---------- */
function confirmerSiege(Z){const D=defenseHorde(Z.id),f0=7+Math.floor((S.nc||0)/(typeof HORDE_CROIT==='number'?HORDE_CROIT:10));
  ui('menu',{sur:'Siège final · '+Z.info.nom,t:'Lancer le siège final ?',
    corps:`<p>Le monde sauvage enverra <b>trois vagues de suite</b> contre la Citadelle, une tous les ${SIEGE_DELAI} cycles, chacune plus forte qu'une horde ordinaire (environ ${f0+SIEGE_SURCROIT[0]}, ${f0+SIEGE_SURCROIT[1]}, puis ${Math.max(f0+SIEGE_SURCROIT[2],D.total+SIEGE_CHEF)}). La dernière, menée par leur chef, dépasse toujours votre défense : il faudra la briser vous-même. Votre défense ici : <b>${D.total}</b> (${D.parts.map(p=>p[0]+' +'+p[1]).join(', ')}).</p>
<p><b>Attention :</b> si une seule vague passe les murs, le siège échoue et la Citadelle recule d'un palier. Vous pourrez le relancer après ${cyclesS(SIEGE_REPOS)} de repos, une fois revenue à ±7.</p>
<p class="petit">Vous pouvez briser chaque vague vous-même, ici, à la Pierre d'éveil, et vous devrez briser la dernière. Tours de guet, Donjons aménagés voisins, remparts et pouvoirs des domaines renforcent la défense. Trois vagues tenues ou brisées : la victoire, et la fin de ce monde.</p>`,
    back:()=>openEveil(Z),opts:[{l:'Lancer le siège',ic:'♛',cls:'p',go:()=>{lancerSiege(Z.id);toMonde()}},{l:'Pas encore',ic:'◆',go:()=>openEveil(Z)}]})}
function optionsSiege(Z){const o=[];if(!Z||!estCIT(Z)||!estEpique(Z.id))return o;initSiege();const id=Z.id,s=S.siege,lv=S.lv[id]||0;
  if(S.siegeFini){o.push({l:'Ce monde est gagné',ic:'♛',off:true,d:`victoire à ${courtS(S.siegeFini.cit)} ; la fin de ce monde vous attend`});
    o.push({l:'Commencer un nouveau monde',ic:'✦',cls:'p',d:'la victoire reste au palmarès',go:()=>confirmerNouveauMonde(()=>openEveil(Z))});return o}
  if(s&&s.cit===id){const D=defenseHorde(id);
    o.push({l:`Briser la vague ${s.vague} sur ${SIEGE_VAGUES}`,ic:'⚔',cls:'p',d:`combat · victoire : la vague ne touche pas les murs, ${SIEGE_BUTIN} ${ZMANA[id]||''}`,go:combatSiege});
    o.push({l:`Siège final : vague ${s.vague} sur ${SIEGE_VAGUES}`,ic:'♛',off:true,d:`force ${s.force} contre défense ${D.total} · arrivée dans ${fmt(resteSiege(s))}`});return o}
  const nE=citadellesEpiques().length,quoi=`Citadelle épique (${nE} dans ce monde) : tenue à ±7, elle permet le siège final et la victoire`;
  if(s)o.push({l:'Citadelle épique · un siège est en cours ailleurs',ic:'♛',off:true,d:`${courtS(s.cit)}, vague ${s.vague} sur ${SIEGE_VAGUES}`});
  else if(peutSieger(id)&&reposSiege(id))o.push({l:'Citadelle épique · vos troupes se remettent',ic:'♛',off:true,d:`siège final possible dans ${cyclesS(reposSiege(id))}`});
  else if(peutSieger(id))o.push({l:'Lancer le siège final',ic:'♛',cls:'p',d:'trois vagues du monde sauvage à tenir pour la victoire',go:()=>confirmerSiege(Z)});
  else o.push({l:'Citadelle épique',ic:'♛',off:true,d:`${quoi} · ${tient(id)?'palier actuel '+(sgn(lv)||'0'):'prenez-la d\'abord'}`});
  return o}
function ficheSiege(Z){const el=$('h-mai');if(!el||!Z||!estCIT(Z)||!estEpique(Z.id))return;initSiege();const s=S.siege;
  el.innerHTML+=`<br><small><b style="color:#f0c95a">♛ Citadelle épique</b> · ${s&&s.cit===Z.id?`siège final, vague ${s.vague}/${SIEGE_VAGUES}`:S.siegeFini?'monde gagné':'victoire au siège final, à ±7'}</small>`}
function menacesSiege(){if(typeof S==='undefined')return[];initSiege();const s=S.siege;if(!s||!ZB[s.cit])return[];
  return[`<span class="d" title="Siège final de ${ZB[s.cit].info.nom}" style="color:#ffcf6a"><span>♛</span>${courtS(s.cit).split(' ').pop()} vague ${s.vague}/${SIEGE_VAGUES}<small> ${fmt(resteSiege(s))}</small></span>`]}
function dessinerSiege(mc,sc,ox,oz,T){if(typeof S==='undefined'||!S.lv)return;const s=S.siege,pulse=.55+.45*Math.sin((T||0)*4);
  for(const id of citadellesEpiques()){const Z=ZB[id];if(!Z)continue;const x=(Z.c[0]+ox)*sc,y=(Z.c[1]+oz)*sc,siege=s&&s.cit===id;
    mc.save();mc.strokeStyle=siege?`rgba(255,96,72,${.5+.5*pulse})`:'rgba(240,201,90,.9)';mc.fillStyle='rgba(240,201,90,.95)';mc.lineWidth=2;
    mc.beginPath();mc.arc(x,y,siege?15+5*pulse:11,0,TAU);mc.stroke();if(siege){mc.beginPath();mc.arc(x,y,21+5*pulse,0,TAU);mc.stroke()}
    mc.font='bold 13px sans-serif';mc.textAlign='center';mc.textBaseline='middle';mc.fillText('♛',x,y-(siege?30:18));
    if(siege){mc.fillStyle='#ffcf6a';mc.fillText(s.vague+'/'+SIEGE_VAGUES,x,y+30)}mc.restore()}}

/* ---------- Tests : MZ.siege(id?) lance le siège (Citadelle mise à vous et à ±7 si besoin), MZ.siegeVague(true|false) résout la vague ---------- */
function siegeTest(id){initSiege();id=id||citadellesEpiques()[0];if(!estEpique(id))return null;if(S.siege)return S.siege;
  S.own[id]=true;S.act[id]=true;S.emp[id]=false;if(Math.abs(S.lv[id]||0)<7){const n=(S.lv[id]||0)<0?-7:7;S.lv[id]=n;ZB[id].lvT=n}
  S.siegeRepos[id]=0;S.siegeFini=null;return lancerSiege(id)}
function siegeVague(ok){const r=vagueArrive(ok===undefined?undefined:!!ok);return r&&{tenue:r.tenue,victoire:!!r.victoire,siege:S.siege&&{vague:S.siege.vague,force:S.siege.force}}}
