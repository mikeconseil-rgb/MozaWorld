/* Test du monde : domaines, hordes et rivaux ENSEMBLE, sur une longue partie simulée.
   Nouvelle partie, de nombreux cycles (MZ.cycle), prises de zones, hordes et rivaux déclenchés et résolus, combats d'avant-garde
   et de champion, mort du héros, rechargement de la page avec la sauvegarde. À chaque étape : aucune erreur JavaScript,
   état S cohérent, menus qui s'ouvrent. Vérifie aussi les réglages du 19 nov. (cibles des hordes à 2 ou 3 paliers, zone à vous
   gardée à 0, Citadelle comptée une fois, rythme des rivaux) et prend des captures du monde avec le bandeau.
   Lot 2 (19 nov.) joué dans la même partie : tour de guet, deuxième Donjon aménagé, tesselles gagnées et dépensées au Comptoir
   (les quatre achats), tentative de rival devancée puis réussie, horde contre une zone couverte par une tour et un Donjon,
   mort (tours, bourse, salles), rechargement ; défense de chaque zone de départ calculée et rapportée.
   Lot 3 (19 nov.) joué dans la même partie : caravane ouverte, pillée (butin qui grossit), escortée ; Loi des Relais sur la caravane ;
   loi du catalogue réveillée (Pama au pôle −, LOIS_CATALOGUE_CARTE) puis renforcée par un Duel d'arguments gagné, et sa fin ; écran
   « Lois du monde » ; mort et rechargement avec caravane et loi renforcée. Captures lot3-*.png (1280×720).
   Lot 3b (20 nov.) : pacte signé, contestation entre maisons, rupture et ses deux contestations ; siège final lancé à la Pierre,
   rechargement, mort, siège rejoué jusqu'à la victoire (vague brisée au combat), écran de victoire, palmarès, nouveau monde remis à zéro.
   Usage : sh tv/build.sh && node tv/tools/test-monde.js [dossier des captures]   (depuis la racine du dépôt ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const dossier=process.argv[2]||path.join(require('os').tmpdir(),'mz-test-monde');fs.mkdirSync(dossier,{recursive:true});
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail!==undefined?' : '+detail:''));if(!cond&&!echec)echec=nom};
const info=(nom,detail)=>etapes.push('INFO  '+nom+(detail!==undefined?' : '+detail:''));
/* cohérence de l'état, évaluée dans la page */
const COHERENT=()=>{const S=MZ.S,p=[];
  for(const Z of MZ.ZN){const id=Z.id,lv=S.lv[id],res=(Z.mod||id)==='RES';
    if(typeof lv!=='number'||!Number.isInteger(lv))p.push(id+' niveau '+lv);
    else if(res?(lv<0||lv>3):(lv<-7||lv>7))p.push(id+' niveau hors bornes '+lv);
    if(S.own[id]&&S.riv&&S.riv.z&&S.riv.z[id])p.push(id+' à vous et à '+S.riv.z[id]);
    if(S.act[id]&&!S.own[id])p.push(id+' activée sans être à vous')}
  for(const t in S.res)if(typeof S.res[t]!=='number'||!isFinite(S.res[t])||S.res[t]<0)p.push('mana '+t+' = '+S.res[t]);
  for(const k of['nc','tc','hurt'])if(typeof S[k]!=='number'||!isFinite(S[k]))p.push(k+' = '+S[k]);
  for(const s in S.hordes||{}){const h=S.hordes[s];if(!ZB[s]||!ZB[h.cible]||!isFinite(h.arrive)||!isFinite(h.force))p.push('horde '+s+' '+JSON.stringify(h))}
  if(S.riv&&S.riv.c){const c=S.riv.c;if(!ZB[c.id]||!isFinite(c.du))p.push('contestation '+JSON.stringify(c))}
  if(S.hurt<0||S.hurt>2)p.push('blessures '+S.hurt);
  /* lot 2 : tesselles, pièges, tours */
  if(typeof S.tess!=='number'||!isFinite(S.tess)||S.tess<0||S.tess!==Math.floor(S.tess))p.push('tesselles = '+S.tess);
  for(const k of['tessCartes','tessAchat'])if(S[k]!==undefined&&(typeof S[k]!=='number'||!isFinite(S[k])))p.push(k+' = '+S[k]);
  const piegeOk=x=>x===null||!!x&&!!PIEGES[x.k]&&(x.u===undefined||isFinite(x.u))&&typeof x.dort==='boolean';
  if(!Array.isArray(S.pieges)||S.pieges.length!==4||!S.pieges.every(piegeOk))p.push('pièges du Donjon d\'origine '+JSON.stringify(S.pieges));
  for(const id in S.donjons||{}){const d=S.donjons[id];if(!ZB[id]||(ZB[id].mod||id)!=='DON')p.push('salles sur une zone qui n\'est pas un Donjon : '+id);
    if(!d||!Array.isArray(d.p)||!d.p.every(piegeOk))p.push('pièges de '+id+' '+JSON.stringify(d))}
  for(const id in S.tours||{})if(!ZB[id]||!S.own[id])p.push('tour sur '+id+', qui n\'est pas à vous');
  for(const s in S.hordes||{}){const h=S.hordes[s];if(typeof h.force!=='number'||!isFinite(h.arrive))p.push('horde '+s+' NaN')}
  for(const t in S.res)if(S.res[t]!==Math.floor(S.res[t]))p.push('mana non entier '+t+' = '+S.res[t]);
  /* lot 3 : caravanes (seulement depuis des Ressources à vous, butin entier >= 0), lois renforcées */
  const ent=x=>typeof x==='number'&&Number.isInteger(x)&&x>=0;
  for(const r in S.car||{}){const e=S.car[r];if(!ZB[r]||(ZB[r].mod||r)!=='RES')p.push('caravane depuis '+r+', qui n\'est pas une Ressource');
    if(!e||!ent(e.perdu||0)||!Number.isInteger(e.arret))p.push('caravane '+r+' '+JSON.stringify(e))}
  if(typeof caravanes==='function')for(const c of caravanes()){if(!S.own[c.r]||!S.act[c.r])p.push('caravane depuis '+c.r+', qui n\'est pas à vous');
    if(!ent(c.n)||!ent(c.perdu))p.push('caravane '+c.r+' gain '+c.n+' butin '+c.perdu);if(c.traj&&c.traj.some(z=>!S.own[z]))p.push('trajet de '+c.r+' hors de vos zones')}
  if(S.carBilan)for(const k in S.carBilan)if(!ent(S.carBilan[k]))p.push('carBilan.'+k+' = '+S.carBilan[k]);
  for(const k of['carNc','loisNc'])if(S[k]!==undefined&&!ent(S[k]))p.push(k+' = '+S[k]);
  for(const id in S.loisRenf||{})if(!ZB[id]||!ent(S.loisRenf[id]))p.push('loi renforcée '+id+' = '+S.loisRenf[id]);
  return p};
/* défense de chaque zone de départ contre une horde : telle quelle, et au palier 4 (le palier qu'une horde de ±7 vise au plus fort,
   3 paliers plus faible) ; chance de tenir contre une horde levée maintenant (force 7 + 1 par tranche de HORDE_CROIT cycles + 0 à 3) */
const DEFENSES=()=>{const S=MZ.S,F=7+Math.floor(S.nc/(typeof HORDE_CROIT==='number'?HORDE_CROIT:1e9));
  return ZONES_DEP.map(id=>{const D=defenseHorde(id),L=Math.abs(S.lv[id]||0),d4=D.total-L+4,tient=f=>[0,1,2,3].filter(r=>F+r<=f).length/4;
    return{id,t:ZB[id].mod||id,L,def:D.total,d4,p4:tient(d4),parts:D.parts.filter(x=>x[0]!=='niveau de la zone').map(x=>x[0].replace(/ \(.*\)/,'')+' +'+x[1]).join(', ')}})};
const fmtDef=(L,F)=>'force des hordes '+F+' à '+(F+3)+'\n'+L.map(x=>`        ${x.id.padEnd(14)} ${x.t} palier ${x.L} : défense ${String(x.def).padStart(2)} · au palier 4 : ${String(x.d4).padStart(2)} (tient ${Math.round(x.p4*100)} %)${x.parts?' · '+x.parts:''}`).join('\n');
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const ctx=await nav.newContext({viewport:{width:1280,height:720},deviceScaleFactor:1});
  const p=await ctx.newPage();
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  /* (19 nov., testeur) partie déterministe : Math.random de la page suit une graine fixe (MZ_GRAINE=n pour en essayer une autre).
     Les minuteries restent réelles, donc chaque étape prépare aussi elle-même l'état dont elle a besoin. */
  const GRAINE=+process.env.MZ_GRAINE||20261119;info('graine du hasard',GRAINE);
  await p.addInitScript(g=>{let a=g>>>0;Math.random=()=>{a=a+0x6D2B79F5>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}},GRAINE);
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&['start','cycle','horde','hordeArrive','rival','rivalArrive','prendre','domaines'].every(k=>typeof window.MZ[k]==='function'),null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre, les accélérateurs MZ existent',pret);
  if(!pret){await nav.close();console.log(etapes.join('\n'));process.exit(1)}
  const coherent=async nom=>{const pb=await p.evaluate(COHERENT);ok('état cohérent · '+nom,pb.length===0,pb.slice(0,4).join(' | ')||undefined);
    const e=erreurs.length;ok('aucune erreur JS · '+nom,e===0,e?erreurs.slice(0,2).join(' | '):undefined)};
  const monde=()=>p.evaluate(()=>{if(MZ.mode!=='monde'&&!MZ.CB&&!MZ.E)toMonde()});

  /* 1. nouvelle partie */
  await p.evaluate(()=>MZ.start());await p.waitForTimeout(1500);await monde();
  const dep=await p.evaluate(()=>({n:ZONES_DEP.length,own:ZONES_DEP.filter(id=>MZ.S.own[id]).length,verr:ZONES_DEP.filter(id=>verrouillee(id)).length,cont:ciblesConteste().map(Z=>Z.id)}));
  ok('nouvelle partie : le territoire de départ est à vous',dep.own===dep.n,dep.own+'/'+dep.n);
  info('verrous au départ',`${dep.verr} zones de départ sur ${dep.n} sont verrouillées ou au cœur ; contestables : ${dep.cont.join(', ')||'aucune'}`);
  await coherent('départ');
  const def0=await p.evaluate(DEFENSES),F0=await p.evaluate(()=>7+Math.floor(MZ.S.nc/HORDE_CROIT));
  info('défenses de départ (carte neuve, aucun aménagement)',fmtDef(def0,F0));
  ok('au départ, une zone de départ au palier 4 sans aménagement ne tient pas toujours',def0.some(x=>x.p4<1),def0.map(x=>x.p4).join(' '));

  /* 2. réglages des rivaux : rien avant le cycle 10, une chance sur 6 */
  const rg=await p.evaluate(()=>({tous:RIV_TOUS,grace:RIV_GRACE}));
  ok('rivaux : une chance sur 6 par cycle, rien avant le cycle 10',rg.tous===6&&rg.grace===10,JSON.stringify(rg));

  /* 3. longue partie : 40 cycles, avec prises, hordes et rivaux */
  let vus={hordes:0,arrivees:0,contest:0,prises:0,menus:0};
  for(let i=1;i<=40;i++){
    const r=await p.evaluate(i=>{const S=MZ.S,o={};MZ.cycle();
      if(i%7===0){const Z=MZ.ZN.find(Z=>!S.own[Z.id]&&!(S.riv&&S.riv.z[Z.id]));if(Z){MZ.prendre(Z.id);o.prise=Z.id}}
      if(i%9===0){const h=MZ.horde();o.horde=h&&h.src}
      if(i%11===0){const h=Object.keys(S.hordes)[0];if(h){MZ.hordeArrive(h);o.arrivee=h}}
      if(i%5===0){const x=MZ.rival();o.rival=x&&x.sorte}
      if(i%13===0&&S.riv&&S.riv.c){MZ.rivalArrive();o.rarr=1}
      return o},i);
    if(r.horde)vus.hordes++;if(r.arrivee)vus.arrivees++;if(r.rival==='conteste')vus.contest++;if(r.rival==='prise')vus.prises++;
    await p.waitForTimeout(1050);
    if(await p.evaluate(()=>MZ.mode==='menu')){vus.menus++;await monde()}
    if(i%10===0)await coherent('cycle '+i)}
  info('partie simulée',JSON.stringify(vus));

  /* 4. hordes : cibles à 2 ou 3 paliers exactement */
  const cib=await p.evaluate(()=>{const S=MZ.S,out=[];for(const Z of MZ.ZN){if(!sourceHorde(Z.id))continue;const c=cibleHorde(Z.id);if(c)out.push([Z.id,S.lv[Z.id],c,S.lv[c]])}
    /* cas construit : une source à 7, des voisines à 5, 4 et 3 */
    const src=MZ.ZN.find(Z=>(Z.mod||Z.id)!=='RES'&&!S.hordes[Z.id]&&(VOISINES[Z.id]||[]).filter(v=>(ZB[v].mod||v)!=='RES').length>=2);
    if(!src)return{out};const pe=poleEnvahisseur(src.id),s=pe===2?1:pe;S.lv[src.id]=7*s;const v=(VOISINES[src.id]).filter(v=>(ZB[v].mod||v)!=='RES'&&!S.hordes[v]);
    const sv={};for(const x of Object.keys(aPortee(src.id,2)))if(x!==src.id){sv[x]=S.lv[x];S.lv[x]=0}   /* à 0 : jamais visées */
    v.forEach((x,i)=>S.lv[x]=s*[1,6,2][i%3]);const sans=cibleHorde(src.id);   /* 1 et 2 : trop faibles ; 6 : pas assez */
    S.lv[v[0]]=s*4;const avec=cibleHorde(src.id);
    for(const x in sv)S.lv[x]=sv[x];return{out,sans,avec,v0:v[0],src:src.id}});
  ok('une horde ne vise que des zones plus faibles de 2 ou 3 paliers',cib.out.every(([s,l,c,lc])=>{const d=Math.abs(l)-Math.abs(lc);return d>=2&&d<=3}),JSON.stringify(cib.out));
  ok('une zone 5 paliers plus faible n\'est pas visée, une zone 3 paliers plus faible l\'est',cib.sans===null&&cib.avec===cib.v0,JSON.stringify({sans:cib.sans,avec:cib.avec,attendu:cib.v0}));

  /* 5. une horde contre une zone à vous à ±1 : elle tombe à 0 et reste à vous */
  const zero=await p.evaluate(()=>{const S=MZ.S,id=MZ.ZN.find(Z=>S.own[Z.id]&&(Z.mod||Z.id)!=='RES'&&Math.abs(S.lv[Z.id])===1&&S.borne!==Z.id).id;const l=defaite(id);
    return{id,lv:S.lv[id],own:S.own[id],act:S.act[id],emp:S.emp[id],l}});
  ok('une zone à vous tombée à 0 par une horde redevient sauvage avec empreinte',zero.lv===0&&!zero.own&&!zero.act&&zero.emp,JSON.stringify(zero));

  /* 6. défense : la Citadelle ne compte qu'une fois (pas de +3 et de +2 pour la même) */
  const dfn=await p.evaluate(()=>{const S=MZ.S,id=(VOISINES.CIT||[]).find(v=>S.own[v]);S.own.CIT=S.act.CIT=true;const D=defenseHorde(id),dm=defenseMonde(id);
    const pd=(D.parts.find(x=>x[0]==='pouvoirs du domaine')||[0,0])[1];
    return{id,parts:D.parts.map(x=>x[0]+' +'+x[1]),dm:dm.raisons,total:D.total,cit:D.parts.filter(x=>/Citadelle/.test(x[0])).length,pd,attendu:dm.bonus-(dm.verrou||0)}});
  ok('défense contre une horde : la Citadelle ne compte qu\'une fois (+3, pas +3 et +2)',dfn.cit===1&&dfn.pd===dfn.attendu,JSON.stringify(dfn));

  /* 7. une zone peut-elle être visée par une horde ET contestée ? Les deux options sont à la Pierre */
  const dbl=await p.evaluate(()=>{const S=MZ.S;S.rest={};S.riv.c=null;
    const id=MZ.ZN.map(Z=>Z.id).find(id=>S.own[id]&&S.act[id]&&S.lv[id]!==0&&(ZB[id].mod||id)!=='RES'&&!protege(id))||MZ.ZN.map(Z=>Z.id).find(id=>S.own[id]&&S.act[id]&&S.lv[id]!==0&&!protege(id));
    if(!id)return{id:null};
    const src=MZ.ZN.map(Z=>Z.id).find(s=>s!==id&&(ZB[s].mod||s)!=='RES'&&!S.hordes[s]&&!S.own[s]);
    const h=MZ.horde(src,id);S.riv.c={r:'sbc',id,de:S.riv.nc,du:S.riv.nc+2};
    openEveil(ZB[id]);const t=[...document.querySelectorAll('#menu-choix *')].map(e=>e.textContent).join(' | ');
    const deux=[...document.getElementById('menu-choix').children].slice(0,2).map(e=>e.textContent).join(' | ');
    return{id,h:!!h,def:/Défendre la zone/.test(t),av:/Affronter l'avant-garde/.test(t),src,enTete:/Défendre la zone/.test(deux)&&/Affronter l'avant-garde/.test(deux)}});
  info('zone à la fois visée par une horde et contestée',JSON.stringify(dbl));
  ok('Pierre d\'une zone contestée : option « Défendre la zone »',dbl.def);
  ok('Pierre d\'une zone visée par une horde : option « Affronter l\'avant-garde »',dbl.av);
  ok('les deux défenses sont en tête du menu de la Pierre (manette)',dbl.enTete);
  await p.screenshot({path:path.join(dossier,'monde-pierre-menaces.png')});
  await monde();

  /* 8. combats : avant-garde de la horde, champion du rival */
  const cb1=await p.evaluate(async src=>{combatHorde(src);await new Promise(r=>setTimeout(r,700));const k=MZ.CB&&MZ.CB.kind,n=MZ.CB&&MZ.CB.foes.length;finCombat(true);
    return{k,n,brisee:!MZ.S.hordes[src]}},dbl.src);
  ok('combat contre l\'avant-garde, victoire : horde brisée',cb1.k==='horde'&&cb1.n===2&&cb1.brisee,JSON.stringify(cb1));
  await monde();
  const cb2=await p.evaluate(async id=>{defendre(ZB[id]);await new Promise(r=>setTimeout(r,700));const k=MZ.CB&&MZ.CB.kind,chef=MZ.CB&&MZ.CB.foes[0].nom;finCombat(true);
    return{k,chef,c:MZ.S.riv.c}},dbl.id);
  ok('combat contre le champion, victoire : contestation levée',cb2.k==='rival'&&/Champion/.test(cb2.chef)&&cb2.c===null,JSON.stringify(cb2));
  await monde();await coherent('combats');

  /* 9. une zone de rival à ±7 lève une horde, contre vos zones d'abord */
  /* (19 nov., testeur) l'ancienne version échouait parfois : la zone de rival prise au hasard n'avait aucune zone (hors Ressources, pas déjà
     visée, pas cachée par la Brume) à 2 tuiles, et une horde ne peut pas se lever sans cible. Ce n'est pas un défaut du jeu : on choisit
     une zone de rival qui a une cible possible, et on met cette cible au palier 4. */
  const rh=await p.evaluate(()=>{const S=MZ.S,nonRes=id=>(ZB[id].mod||id)!=='RES';
    const visees=()=>new Set(Object.values(S.hordes).map(h=>h.cible));
    const cibleFaisable=id=>Object.keys(aPortee(id,2)).find(v=>v!==id&&nonRes(v)&&!visees().has(v)&&!S.hordes[v]&&!(S.own[v]&&typeof cacheParBrume==='function'&&cacheParBrume(v)));
    let id=Object.keys(S.riv.z).find(id=>S.riv.z[id]&&!S.own[id]&&nonRes(id)&&cibleFaisable(id));
    if(!id){const Z=MZ.ZN.find(Z=>nonRes(Z.id)&&!S.own[Z.id]&&!ESTDEP.has(Z.id)&&!S.riv.z[Z.id]&&cibleFaisable(Z.id));if(Z){prendre(RIVAUX[0],Z,true);id=Z.id}}
    if(!id)return{id:null};
    const pe=poleEnvahisseur(id),s=pe===2?1:pe;S.lv[id]=7*s;delete S.hordes[id];
    if(!cibleHorde(id)){const v=cibleFaisable(id);S.lv[v]=4*(S.lv[v]<0?-1:1)}
    const h=leverHorde(id);
    return{id,maison:S.riv.z[id],cible:h&&h.cible,cibleAVous:h?!!S.own[h.cible]:null}});
  ok('une zone de rival à ±7 lève une horde',!!rh.id&&!!rh.cible,JSON.stringify(rh));
  await coherent('horde d\'une zone de rival');

  /* 10. LOT 2 joué ensemble : tesselles, tour de guet, deuxième Donjon aménagé, Comptoir, rivaux, horde sur une zone couverte */
  await monde();
  const t0=await p.evaluate(()=>({tess:MZ.S.tess,revenu:revenuTess(),cits:citadellesTenues().map(Z=>Z.id)}));
  ok('lot 2 : des tesselles gagnées pendant la partie (Citadelles, primes)',t0.tess>0,JSON.stringify(t0));
  /* deuxième Donjon tenu, au palier 3 (4 salles) */
  const D2=await p.evaluate(()=>{const S=MZ.S;let d=MZ.ZN.find(Z=>(Z.mod||Z.id)==='DON'&&Z.id!=='DON'&&S.own[Z.id]&&S.act[Z.id]);
    if(!d){d=MZ.ZN.find(Z=>(Z.mod||Z.id)==='DON'&&Z.id!=='DON'&&!S.riv.z[Z.id]);MZ.prendre(d.id)}
    if(!S.own.DON||!S.act.DON)MZ.prendre('DON');
    const s=Math.sign(S.lv[d.id]||1)||1;MZ.set(d.id,3*s);S.ent=2;return d.id});   /* entretien « usure » : les pièges ne dorment pas faute de mana */
  /* tour de guet bâtie par la Pierre d'éveil du Donjon */
  const tr=await p.evaluate(id=>{const S=MZ.S,m=ZMANA[id]||'Pierre';S.res[m]=(S.res[m]||0)+5;const avant=S.res[m];openEveil(ZB[id]);
    const o=UI.opts.find(o=>/Bâtir une tour de guet/.test(o.l));if(!o||o.off)return{o:!!o,off:o&&o.off};o.go();const t=document.getElementById('menu-choix').textContent;toMonde();
    return{tour:!!S.tours[id],paye:avant-S.res[m],ligne:/Tour de guet/.test(t)}},D2);
  ok('lot 2 : tour de guet bâtie à la Pierre du Donjon (3 mana)',tr.tour&&tr.paye===3&&tr.ligne,JSON.stringify(tr));
  /* aménager le deuxième Donjon par le menu (un piège), puis compléter */
  const am=await p.evaluate(id=>{const S=MZ.S;S.res.Glace=(S.res.Glace||0)+4;openEveil(ZB[id]);const o=UI.opts.find(o=>o.l==='Aménager les salles');if(!o)return{o:false};o.go();
    const titre=document.getElementById('menu-t').textContent;UI.opts[0].go();const h=UI.opts.find(o=>/^Herse de givre/.test(o.l));if(!h||h.off)return{h:false};const g0=S.res.Glace;h.go();
    const pose=S.donjons[id]&&S.donjons[id].p[0]&&S.donjons[id].p[0].k,paye=g0-S.res.Glace;toMonde();
    const e=MZ.amenager(id,['glyphe','lave','herse','gardien']);MZ.amenager('DON',['glyphe','lave','herse','gardien']);
    return{titre,pose,paye,salles:e.salles,traversee:e.traversee,actifs:e.actifs,catalogue:e.catalogue.length,tenus:e.tenus.length}},D2);
  ok('lot 2 : deuxième Donjon aménagé par son menu (Herse posée, 2 Glace)',am.pose==='herse'&&am.paye===2,JSON.stringify(am));
  ok('lot 2 : deux dispositifs par Donjon tenu',am.catalogue===Math.min(6,2*am.tenus),JSON.stringify(am));
  await coherent('tour et Donjon aménagé');
  /* horde contre une voisine couverte par la tour du Donjon et par ses salles */
  const hz=await p.evaluate(id=>{const S=MZ.S;
    /* (19 nov.) les deux voisines pouvaient être cachées par la Brume de Givrecloche (loi de MAR vers −) : on la lève pour l'essai, comme le bornage */
    if(typeof loi==='function'&&loi('MAR')<0)MZ.set('MAR',Math.abs(S.lv.MAR));S.borne=null;
    const libre=v=>!(typeof cacheParBrume==='function'&&cacheParBrume(v))&&!(typeof borne==='function'&&borne(v));
    /* une voisine du Donjon, à vous de préférence ; les hordes qui la visent déjà sont oubliées (simulation), une voisine sauvage est prise */
    const v=(VOISINES[id]||[]).filter(libre).sort((a,b)=>(S.own[b]&&S.act[b]?1:0)-(S.own[a]&&S.act[a]?1:0))[0];if(!v)return{v:null,vois:VOISINES[id]};
    for(const s in S.hordes)if(S.hordes[s].cible===v)delete S.hordes[s];if(!S.own[v]||!S.act[v]){delete S.riv.z[v];MZ.prendre(v)}
    const libreSrc=s=>s!==v&&s!==id&&(ZB[s].mod||s)!=='RES'&&!S.hordes[s]&&!S.own[s];
    let src=MZ.ZN.map(Z=>Z.id).find(libreSrc);
    if(!src){const s0=MZ.ZN.map(Z=>Z.id).find(s=>s!==v&&s!==id&&(ZB[s].mod||s)!=='RES'&&!S.own[s]);if(s0){finirHorde(s0);src=s0}}   /* toutes en marche : on en disperse une */
    if(!src)return{v,src:null};
    const greniers=typeof loi==='function'&&loi('ASS150');const h=MZ.horde(src,v);if(!h)return{v,h:null};
    const D=defenseHorde(v),Dd=defenseHorde(id);
    return{v,src,delai:h.arrive-S.nc,attendu:3*(greniers?2:1)+2,tour:!!h.tour,parts:D.parts.map(x=>x[0]+' +'+x[1]),total:D.total,force:h.force,
      partTour:(D.parts.find(x=>/tour de guet/.test(x[0]))||[0,0])[1],partDon:(D.parts.find(x=>/Donjon voisin/.test(x[0]))||[0,0])[1],
      defDonjon:Dd.total,sallesDonjon:(Dd.parts.find(x=>/salles piégées/.test(x[0]))||[0,0])[1]}},D2);
  info('horde contre une zone couverte par une tour et un Donjon',JSON.stringify(hz));
  ok('lot 2 : la tour repère la horde (2 cycles de préavis en plus)',hz.tour&&hz.delai===hz.attendu,JSON.stringify({delai:hz.delai,attendu:hz.attendu}));
  ok('lot 2 : défense de la voisine = tour +2 et moitié des salles du Donjon, +4 au plus',hz.partTour===2&&hz.partDon===4,hz.parts&&hz.parts.join(', '));
  ok('lot 2 : le Donjon aménagé défend bien sa propre zone (salles 21)',hz.sallesDonjon===21,JSON.stringify({defDonjon:hz.defDonjon,salles:hz.sallesDonjon}));
  const defL2=await p.evaluate(DEFENSES),F2=await p.evaluate(()=>7+Math.floor(MZ.S.nc/HORDE_CROIT));
  info('défenses de départ (cycle '+(await p.evaluate(()=>MZ.S.nc))+', tour sur '+D2+', deux Donjons à 4 pièges, Citadelle tenue)',fmtDef(defL2,F2));
  ok('lot 2 : tour, Citadelle, Donjons et domaines ne rendent pas toute la défense certaine',defL2.some(x=>x.p4<1),defL2.map(x=>x.p4).join(' '));
  /* Comptoir : retarder cette horde, réparer, échanger ; la carte est achetée après la mort (secret trouvé, carte perdue) */
  const cp=await p.evaluate(([id,src])=>{const S=MZ.S;MZ.tesselles(40);
    if(!src||!S.hordes[src]){src=Object.keys(S.hordes).find(s=>!S.hordes[s].retard)||null;if(!src){const h=MZ.horde();src=h&&h.src}}if(!src||!S.hordes[src])return{horde:null};
    S.hordes[src].retard=0;const T=piegesTab(id);T.forEach(x=>{if(x){x.dort=true;x.u=1}});
    const cit=citadellesTenues()[0]||ZB.CIT;if(!tient(cit.id))MZ.prendre(cit.id);openEveil(cit);const c=UI.opts.find(o=>o.l==='Comptoir');if(!c)return{comptoir:false};c.go();
    const r={titre:document.getElementById('menu-t').textContent};const t0=S.tess,a0=S.hordes[src].arrive;
    const ro=UI.opts.find(o=>o.l===`Retarder la horde ${de_(nomCourt(src))}`);if(!ro||ro.off)return{r,retarder:ro?'grisé':'absent',src};
    ro.go();r.retard=S.hordes[src]?S.hordes[src].arrive-a0:null;r.payeRetard=t0-S.tess;
    const t1=S.tess,rp=UI.opts.find(o=>o.l==='Réparer les pièges · '+ZB[id].info.nom.split(',')[0]);r.rep=!!rp;if(rp)rp.go();r.payeRep=t1-S.tess;r.reveilles=piegesTab(id).filter(x=>x&&!x.dort&&x.u===3).length;
    const t2=S.tess,m=ZMANA[cit.id]||'Pierre',m0=S.res[m]||0,eo=UI.opts.find(o=>/^Échanger/.test(o.l));if(eo)eo.go();r.payeEch=t2-S.tess;r.mana=(S.res[m]||0)-m0;
    const ca=UI.opts.find(o=>o.l==='Une carte de secret');r.carte=ca?{off:ca.off,d:ca.d}:null;toMonde();return r},[D2,hz.src||null]);
  ok('Comptoir : retarder la horde, 8 tesselles, +2 cycles',cp.retard===2&&cp.payeRetard===8,JSON.stringify(cp));
  ok('Comptoir : réparer les pièges du deuxième Donjon, 5 tesselles',cp.rep&&cp.payeRep===5&&cp.reveilles===4,JSON.stringify(cp));
  ok('Comptoir : 4 tesselles contre 1 mana',cp.payeEch===4&&cp.mana===1,JSON.stringify(cp));
  const r0=await p.evaluate(()=>{const s=Object.keys(MZ.S.hordes).find(s=>MZ.S.hordes[s].retard);return s?MZ.hordeArrive(s):null});
  info('arrivée de la horde retardée',r0&&r0.lignes.join(' '));
  await monde();await coherent('Comptoir et horde couverte');
  /* rivaux : une tentative devancée (défi gagné à la Pierre), une réussie */
  const rv=await p.evaluate(async()=>{const S=MZ.S;for(const k in S.riv.t)delete S.riv.t[k];
    /* (19 nov.) MZ.rival('prise') renvoie null, à bon droit, quand aucune zone sauvage n'est libre ou que toutes les maisons sont au plafond :
       on prépare l'un et l'autre. Une zone libre : hors départ, sauvage, ni verrouillée ni au cœur ni à une maison. */
    const prepare=()=>{for(const r of RIVAUX){const z=zonesMaison(r.k);if(z.length>=RIV_MAX())delete S.riv.z[z[0].id]}
      if(ciblesPrise().length)return true;
      const loin=MZ.ZN.filter(Z=>!ESTDEP.has(Z.id)&&!(typeof verrouillee==='function'&&verrouillee(Z.id))).sort((a,b)=>(S.own[a.id]?1:0)-(S.own[b.id]?1:0));
      for(const Z of loin){if(S.own[Z.id]){S.own[Z.id]=false;S.act[Z.id]=false;delete S.tours[Z.id]}delete S.riv.z[Z.id];if(ciblesPrise().length)return true}
      return false};
    if(!prepare())return{prepare:false};const a=MZ.rival('prise');if(!a||a.sorte!=='tentative')return{a};
    openEveil(ZB[a.id]);const o=UI.opts.find(o=>/^Défier les gens/.test(o.l));if(!o)return{a,defi:false};o.go();await new Promise(r=>setTimeout(r,700));
    const kind=MZ.CB&&MZ.CB.kind;finCombat(true);const devancee=!S.riv.t[a.r]&&!S.riv.z[a.id];toMonde();
    prepare();const b=MZ.rival('prise');if(!b||b.sorte!=='tentative')return{a,kind,devancee,b};const res=MZ.rivalTente(b.r,true);
    return{a,kind,devancee,b,res:res&&res[0]&&res[0].fin,maison:S.riv.z[b.id],emp:S.emp[b.id]}});
  ok('rivaux : tentative devancée par un défi gagné à la Pierre',rv.kind==='rival'&&rv.devancee,JSON.stringify(rv));
  ok('rivaux : tentative réussie, la zone est à la maison',rv.res==='prise'&&rv.maison===(rv.b&&rv.b.r)&&!rv.emp,JSON.stringify(rv));
  await monde();await coherent('rivaux du lot 2');

  /* 10 bis. bandeau : il est en îlots depuis la boucle graphique 1 (.ilot) : territoire (avec les domaines fermés ◈), ressources (avec la bourse ◇),
     menaces (îlot à titre) et rivaux (ligne à titre) ; le cadre d'état ne déborde pas */
  await p.evaluate(()=>{const S=MZ.S;if(!Object.keys(S.hordes).length)MZ.horde();if(!S.riv.c)MZ.rival('conteste');if(!Object.keys(S.riv.z).length)MZ.rival('prise');hudKey='';etatHud();toMonde()});
  await p.waitForTimeout(1500);
  const bd=await p.evaluate(()=>{const b=document.getElementById('bandeau'),box=document.querySelector('.hud.etat'),r=box.getBoundingClientRect();
    const q=s=>b.querySelector(s),dom=q('.i-terr [title^="Domaines fermés"]'),tess=q('.i-res [title^="Tesselles"]'),men=q('.ilot.i-men .titre'),rivx=[...b.querySelectorAll('.ligne .titre')].find(e=>e.textContent==='Rivaux');
    const deb=[...b.querySelectorAll('.ilot,.ligne')].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>e.className);
    return{t:b.textContent,ilots:[...b.querySelectorAll('.ilot')].map(e=>e.className.replace('ilot ','')),dom:dom&&dom.textContent,tess:tess&&tess.textContent,tessS:String(MZ.S.tess),men:men&&men.textContent,riv:!!rivx,deb,
      r:{top:r.top,bottom:r.bottom,left:r.left,right:r.right},h:innerHeight,w:innerWidth}});
  ok('bandeau : îlots mana, territoire et ressources',['i-mana','i-terr','i-res'].every(c=>bd.ilots.indexOf(c)>=0),bd.ilots.join(', '));
  ok('bandeau : domaines fermés (◈) dans l\'îlot du territoire',!!bd.dom&&/◈/.test(bd.dom),bd.dom);
  ok('bandeau : îlot Menaces et ligne Rivaux',bd.men==='Menaces'&&bd.riv,JSON.stringify({men:bd.men,riv:bd.riv}));
  ok('bandeau : la bourse de tesselles (◇) dans l\'îlot des ressources',!!bd.tess&&bd.tess==='◇'+bd.tessS,bd.tess);
  ok('bandeau : aucun îlot coupé',bd.deb.length===0,bd.deb.join(', ')||undefined);
  ok('le cadre d\'état tient dans l\'écran (1280×720)',bd.r.top>=0&&bd.r.left>=0&&bd.r.bottom<=bd.h&&bd.r.right<=bd.w,JSON.stringify(bd.r));
  await p.screenshot({path:path.join(dossier,'monde-bandeau.png')});

  /* 11. menu Pause, écran Rivaux */
  const pz=await p.evaluate(()=>{openMenu();const a=/Rivaux/.test(document.getElementById('menu-choix').textContent);openRivaux();
    const t=document.getElementById('menu-choix').textContent;return{a,n:RIVAUX.filter(r=>t.indexOf(r.nom)>=0).length}});
  ok('menu Pause → écran Rivaux, quatre maisons',pz.a&&pz.n===4,JSON.stringify(pz));
  await p.screenshot({path:path.join(dossier,'monde-rivaux.png')});
  await monde();


  /* 11 bis. LOT 3 joué ensemble : caravane (ouverte, pillée, escortée), Loi des Relais, loi du catalogue réveillée puis renforcée, écran Lois du monde */
  await p.evaluate(()=>{window.__toasts=[];const t0=toast;toast=function(a){window.__toasts.push(a);return t0.apply(this,arguments)}});
  const cv=await p.evaluate(()=>{const S=MZ.S;for(const id of['CIT','RES'])if(!S.own[id]||!S.act[id]){delete S.riv.z[id];MZ.prendre(id)}
    for(const s in S.hordes)if(['RES','CIT'].includes(S.hordes[s].cible))delete S.hordes[s];
    MZ.set('RES',2);S.routes=S.routes||{};S.routes.RES=['CIT'];const c=MZ.caravanes().find(c=>c.r==='RES');
    return c&&{traj:c.traj&&c.traj.join(),etat:c.etat,n:c.n,risque:c.risque,bilan:Object.assign({},S.carBilan)}});
  ok('lot 3 : caravane ouverte (Ressource au niveau 2, route vers la Citadelle)',!!cv&&cv.traj==='RES,CIT'&&cv.etat==='en route',JSON.stringify(cv));
  await p.evaluate(()=>MZ.cycle());await p.waitForTimeout(1300);
  await p.waitForFunction(()=>MZ.S.carNc>=MZ.S.nc,null,{timeout:5000}).catch(()=>{});   /* 22 nov. : boucle d'une seconde, machine chargée */
  const cv1=await p.evaluate(()=>({b:Object.assign({},MZ.S.carBilan),c:MZ.caravanes().find(c=>c.r==='RES')}));
  ok('lot 3 : un cycle, la caravane rapporte (ou se fait piller)',!!cv&&(cv1.b.gains-cv.bilan.gains===cv.n||cv1.b.pillages>cv.bilan.pillages),JSON.stringify(cv1));
  await monde();
  const pl=await p.evaluate(()=>{let c=MZ.caravanes().find(c=>c.r==='RES');if(c.etat==='en route')MZ.piller('RES');c=MZ.caravanes().find(c=>c.r==='RES');return{etat:c.etat,perdu:c.perdu,n:c.n,lieu:c.lieu}});
  ok('lot 3 : caravane pillée, arrêtée',pl.etat==='pillée'&&pl.perdu>=pl.n,JSON.stringify(pl));
  await p.evaluate(()=>{for(const s in MZ.S.hordes)if(['RES','CIT'].includes(MZ.S.hordes[s].cible))delete MZ.S.hordes[s];MZ.cycle()});await p.waitForTimeout(1300);await monde();
  const pl2=await p.evaluate(()=>{const c=MZ.caravanes().find(c=>c.r==='RES');return{etat:c.etat,perdu:c.perdu}});
  ok('lot 3 : pendant l\'arrêt, le butin grossit',pl2.etat==='pillée'&&pl2.perdu===pl.perdu+pl.n,JSON.stringify(pl2));
  /* capture : Pierre de la Ressource, avec la caravane pillée (« Escorter » en tête) */
  await p.evaluate(()=>{tp('RES');openEveil(ZB.RES)});await p.waitForTimeout(600);
  await p.screenshot({path:path.join(dossier,'lot3-pierre-caravane-pillee.png')});
  const es=await p.evaluate(async()=>{const S=MZ.S,o=UI.opts[0],pierre=!!o&&/Escorter la caravane/.test(o.l);if(!pierre)return{pierre,l:UI.opts.map(o=>o.l)};
    o.go();await new Promise(r=>setTimeout(r,700));const k=MZ.CB&&MZ.CB.caravane,n=MZ.CB&&MZ.CB.foes.length,t0=S.tess,e0=S.carBilan.escortes;finCombat(true);
    const titre=document.getElementById('menu-t').textContent;toMonde();const c=MZ.caravanes().find(c=>c.r==='RES');return{pierre,k,n,rendu:S.tess-t0,esc:S.carBilan.escortes-e0,etat:c.etat,titre}});
  ok('lot 3 : escorte depuis la Pierre, deux pillards, le butin entier est rendu',es.pierre&&es.k==='RES'&&es.n===2&&es.rendu===pl2.perdu&&es.esc===1&&es.etat==='en route',JSON.stringify(es));
  await coherent('caravane escortée');
  /* loi du catalogue réveillée : Pama au pôle − (Loi des Corvées) ; Loi des Relais sur la caravane */
  const lw=await p.evaluate(()=>{const S=MZ.S;delete S.riv.z.ASS150;MZ.prendre('ASS150');MZ.set('ASS150',-1);if(S.riv.c&&S.riv.c.id==='ASS150')S.riv.c=null;
    const v=MZ.lois().vigueur.find(v=>v.id==='ASS150');return{carte:typeof LOIS_CATALOGUE_CARTE!=='undefined'&&LOIS_CATALOGUE_CARTE,v,greniers:loi('ASS150')}});
  ok('lot 3 : Pama au pôle − réveille une loi du catalogue (Corvées), les Greniers dorment',!lw.carte||(!!lw.v&&lw.v.k==='corvee'&&lw.greniers===0),JSON.stringify(lw));
  await p.waitForTimeout(2500);await monde();
  ok('lot 3 : un message annonce la loi en vigueur',await p.evaluate(()=>window.__toasts.some(t=>/^Loi en vigueur · /.test(t))||LOI_FILE.some(m=>Array.isArray(m)&&/^Loi en vigueur/.test(m[0]))),await p.evaluate(()=>window.__toasts.slice(-4).join(' | ')));
  const rl=await p.evaluate(()=>{const S=MZ.S,n0=MZ.caravanes().find(c=>c.r==='RES').n,had={own:S.own.MAR,act:S.act.MAR,lv:S.lv.MAR};MZ.loiForcer('MAR','relais');
    S.own.MAR=S.act.MAR=true;if(!S.lv.MAR)S.lv.MAR=1;const c=MZ.caravanes().find(c=>c.r==='RES');MZ.loiForcer('MAR',null);S.own.MAR=had.own;S.act.MAR=had.act;S.lv.MAR=had.lv;
    return{n0,n1:c.n,relais:c.relais,dans:c.traj.some(z=>aPortee('MAR',2)[z]!==undefined)}});
  ok('lot 3 : Loi des Relais, +1 tesselle par cycle pour la caravane qui traverse la juridiction',rl.dans&&rl.n1===rl.n0+1,JSON.stringify(rl));
  /* Duel d'arguments gagné sur Pama : la loi passe en vigueur renforcée 10 cycles */
  const du=await p.evaluate(()=>{const S=MZ.S;LOI_FILE.length=0;DUEL={Z:ZB.ASS150,target:-2,eff:1,vote:{v:0,pour:[],contre:[]}};finDuel(true);
    const v=MZ.lois().vigueur.find(v=>v.id==='ASS150');return{lv:S.lv.ASS150,v,nc:S.nc}});
  ok('lot 3 : Duel gagné, Pama monte et sa loi est renforcée 10 cycles',du.lv===-2&&!!du.v&&du.v.renforcee&&du.v.jusqua===du.nc+10,JSON.stringify(du));
  await p.waitForFunction(()=>MZ.mode==='menu'&&/Mue/.test(document.getElementById('menu-sur').textContent),null,{timeout:60000}).catch(()=>{});
  await p.evaluate(()=>{toMonde();toastT=0;for(const f of['TOUR_FILE','CAR_FILE','DOM_FILE'])try{eval(f).length=0}catch(_){}});
  await p.waitForFunction(()=>{if(MZ.mode!=='monde'&&!MZ.CB)toMonde();if(LOI_FILE.length&&toastT>0&&!/renforcée/.test(document.getElementById('t1').textContent))toastT=0;return window.__toasts.some(t=>/^Loi en vigueur renforcée/.test(t))},null,{timeout:30000,polling:250}).catch(()=>{});
  ok('lot 3 : un message annonce la loi renforcée',await p.evaluate(()=>window.__toasts.some(t=>/^Loi en vigueur renforcée · /.test(t))),await p.evaluate(()=>window.__toasts.slice(-4).join(' | ')));
  await coherent('loi renforcée');
  /* écran « Lois du monde » au menu Pause (capture), et détail de Pama */
  const lm=await p.evaluate(()=>{openMenu();const m=UI.opts.find(o=>o.l==='Lois du monde');if(!m)return null;m.go();
    return{t:document.getElementById('menu-t').textContent,opts:UI.opts.map(o=>o.l)}});
  ok('lot 3 : menu Pause → « Lois du monde », Corvées renforcée',!!lm&&lm.t==='Lois du monde'&&lm.opts.some(o=>/Loi des Corvées · renforcée/.test(o))&&lm.opts.includes('Lois endormies'),JSON.stringify(lm&&lm.opts));
  await p.waitForTimeout(400);await p.screenshot({path:path.join(dossier,'lot3-lois-du-monde.png')});
  const ld=await p.evaluate(()=>{const i=UI.opts.findIndex(o=>/Corvées/.test(o.l)&&/Pama/.test(o.d||''));   /* 22 nov. : Balpak (Cendre) peut aussi avoir les Corvées en vigueur */if(i<0)return{t:'',txt:''};UI.opts[i].go();return{t:document.getElementById('menu-t').textContent,txt:document.getElementById('menu-corps').textContent}});
  ok('lot 3 : détail de Pama, loi écrite et loi du catalogue',/Pama/.test(ld.t)&&/Corvées/.test(ld.txt)&&/Greniers/.test(ld.txt),ld.txt.slice(0,240));
  await p.waitForTimeout(300);await p.screenshot({path:path.join(dossier,'lot3-lois-pama.png')});
  await monde();
  /* captures : Pierre de la Ressource (caravane en route), monde, minicarte, bandeau */
  await p.evaluate(()=>{tp('RES');openEveil(ZB.RES)});await p.waitForTimeout(600);
  await p.screenshot({path:path.join(dossier,'lot3-pierre-caravane.png')});
  await p.evaluate(()=>{toMonde();hudKey='';etatHud()});await p.waitForTimeout(1500);
  await p.screenshot({path:path.join(dossier,'lot3-monde.png')});
  const mini=await p.$('#mini');if(mini)await mini.screenshot({path:path.join(dossier,'lot3-minicarte.png')});
  const ban=await p.$('#bandeau');if(ban)await ban.screenshot({path:path.join(dossier,'lot3-bandeau.png')});
  ok('lot 3 : le bandeau montre la caravane (⛟)',await p.evaluate(()=>!!document.querySelector('#bandeau [title^="Caravanes"]')));
  /* dix cycles : la vigueur renforcée s'éteint, la caravane continue de rapporter */
  const g0=await p.evaluate(()=>MZ.S.carBilan.gains);
  for(let i=0;i<10;i++){await p.evaluate(()=>{for(const s in MZ.S.hordes)if(['RES','CIT','ASS150'].includes(MZ.S.hordes[s].cible))delete MZ.S.hordes[s];if(MZ.S.riv.c&&['RES','CIT','ASS150'].includes(MZ.S.riv.c.id))MZ.S.riv.c=null;MZ.cycle()});await p.waitForTimeout(1050);await monde()}
  const fr=await p.evaluate(()=>{const v=MZ.lois().vigueur.find(v=>v.id==='ASS150');return{v,gains:MZ.S.carBilan.gains,fin:window.__toasts.some(t=>/^Fin de la vigueur renforcée/.test(t))||LOI_FILE.some(m=>Array.isArray(m)&&/^Fin de la vigueur/.test(m[0]))}});
  ok('lot 3 : dix cycles plus tard, la loi reste en vigueur sans renfort (message)',!!fr.v&&!fr.v.renforcee&&fr.fin,JSON.stringify(fr));
  ok('lot 3 : la caravane a rapporté pendant ces dix cycles',fr.gains>g0,g0+' → '+fr.gains);
  await coherent('dix cycles du lot 3');
  /* avant la mort : une loi renforcée et une caravane pillée */
  await p.evaluate(()=>{MZ.loiRenforcer('ASS150');const c=MZ.caravanes().find(c=>c.r==='RES');if(c&&c.etat==='en route')MZ.piller('RES')});

  /* 12. mort du héros avec des menaces en cours */
  const mt=await p.evaluate(async()=>{const S=MZ.S;const id=MZ.ZN.map(Z=>Z.id).find(id=>S.own[id]&&!ESTDEP.has(id)&&S.lv[id]!==0);
    if(id)S.riv.c={r:'gri',id,de:S.riv.nc,du:S.riv.nc+2};const hAvant=Object.keys(S.hordes).length;
    const sec=MZ.secrets.findIndex((q,i)=>!q.found&&CK['S'+i]);if(sec>=0){MZ.secrets[sec].found=true;carteDeSecret(MZ.secrets[sec])}
    const nbPg=()=>piegesTab('DON').filter(Boolean).length+Object.values(S.donjons||{}).reduce((a,d)=>a+d.p.filter(Boolean).length,0);
    const tAvant=Object.keys(S.tours||{}).length,bAvant=S.tess,salAvant=nbPg(),carteAvant=sec>=0&&S.deck.indexOf('S'+sec)>=0;
    mort();riv();await new Promise(r=>setTimeout(r,1300));
    const lot2={tAvant,tApres:Object.keys(S.tours||{}).length,bAvant,bApres:S.tess,salAvant,salApres:nbPg(),sec,carteAvant,carteApres:sec>=0&&S.deck.indexOf('S'+sec)>=0};
    return{lot2,cHorsDepart:id||null,c:S.riv.c,hAvant,hApres:Object.keys(S.hordes).length,own:ZONES_DEP.filter(z=>S.own[z]).length,autres:MZ.ZN.filter(Z=>!ESTDEP.has(Z.id)&&S.own[Z.id]).length,hurt:S.hurt}});
  ok('mort : l\'héritier reprend le départ, rien d\'autre',mt.own===12&&mt.autres===0&&mt.hurt===0,JSON.stringify(mt));
  ok('mort : la contestation d\'une zone perdue tombe',!mt.cHorsDepart||mt.c===null,JSON.stringify(mt.c));
  ok('mort : les tours tombent',mt.lot2.tAvant>0&&mt.lot2.tApres===0,JSON.stringify(mt.lot2));
  ok('mort : la bourse de tesselles est perdue',mt.lot2.bAvant>0&&mt.lot2.bApres===0,JSON.stringify(mt.lot2));
  ok('mort : les pièges des Donjons sont perdus',mt.lot2.salAvant>0&&mt.lot2.salApres===0,JSON.stringify(mt.lot2));
  ok('mort : la carte du secret trouvé est perdue',mt.lot2.sec<0||mt.lot2.carteAvant&&!mt.lot2.carteApres,JSON.stringify(mt.lot2));
  info('mort : hordes en cours',`${mt.hAvant} avant, ${mt.hApres} après (elles marchent toujours)`);
  const ml=await p.evaluate(()=>({car:Object.keys(MZ.S.car).length,carav:MZ.caravanes().length,renf:Object.keys(MZ.S.loisRenf).length,pama:MZ.lois().vigueur.some(v=>v.id==='ASS150'&&!ESTDEP.has('ASS150'))}));
  ok('mort (lot 3) : caravanes perdues, lois renforcées retombées, loi de Pama endormie',ml.car===0&&ml.carav===0&&ml.renf===0&&!ml.pama,JSON.stringify(ml));
  await p.evaluate(()=>toMonde());await coherent('après la mort');
  for(let i=0;i<5;i++){await p.evaluate(()=>MZ.cycle());await p.waitForTimeout(1050);await monde()}
  await coherent('cinq cycles après la mort');

  /* 13. rechargement avec la sauvegarde */
  await p.evaluate(()=>{MZ.tour('CIT');MZ.amenager('DON',['herse']);MZ.tesselles(7);
    /* lot 3 : une caravane de l'héritier, pillée, et une loi renforcée (Givrecloche si elle est à vous) */
    const S=MZ.S;MZ.set('RES',2);S.routes.RES=['CIT'];if(MZ.caravanes().find(c=>c.r==='RES'&&c.etat==='en route'))MZ.piller('RES');
    if(S.own.MAR&&S.act.MAR&&S.lv.MAR)MZ.loiRenforcer('MAR')});
  const avant=await p.evaluate(()=>{save();return JSON.stringify({nc:MZ.S.nc,lv:MZ.S.lv,own:MZ.S.own,h:Object.keys(MZ.S.hordes).sort(),rz:MZ.S.riv.z,c:MZ.S.riv.c,t:MZ.S.riv.t,tess:MZ.S.tess,tours:Object.keys(MZ.S.tours),pg:MZ.S.pieges,dj:MZ.S.donjons,found:MZ.S.found,car:MZ.S.car,cb:MZ.S.carBilan,lr:MZ.S.loisRenf,cv:MZ.caravanes().map(c=>c.r+':'+c.etat)})});
  await p.reload();await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function',null,{timeout:30000});
  await p.evaluate(()=>startGame(false));await p.waitForTimeout(2500);
  const apres=await p.evaluate(()=>JSON.stringify({nc:MZ.S.nc,lv:MZ.S.lv,own:MZ.S.own,h:Object.keys(MZ.S.hordes).sort(),rz:MZ.S.riv.z,c:MZ.S.riv.c,t:MZ.S.riv.t,tess:MZ.S.tess,tours:Object.keys(MZ.S.tours),pg:MZ.S.pieges,dj:MZ.S.donjons,found:MZ.S.found,car:MZ.S.car,cb:MZ.S.carBilan,lr:MZ.S.loisRenf,cv:MZ.caravanes().map(c=>c.r+':'+c.etat)}));
  ok('rechargement : la partie reprend à l\'identique',avant===apres,avant===apres?undefined:avant.slice(0,200)+' ≠ '+apres.slice(0,200));
  for(let i=0;i<5;i++){await p.evaluate(()=>MZ.cycle());await p.waitForTimeout(1050);await monde()}
  await coherent('après rechargement et cinq cycles');
  /* Comptoir après la mort : la carte du secret trouvé par le héros précédent est en vente, et elle seule */
  const ct=await p.evaluate(()=>{const S=MZ.S;MZ.tesselles(20);S.tessAchat=-1;openEveil(ZB.CIT);UI.opts.find(o=>o.l==='Comptoir').go();const o=UI.opts.find(o=>o.l==='Une carte de secret');
    if(!o||o.off)return{o:o&&o.d};o.go();const v=cartesEnVente(ZB.CIT).map(x=>x.k),tous=cartesEnVente(ZB.CIT).every(x=>x.q.found),k=v[0],t0=S.tess,d0=S.deck.length;
    UI.opts[0].go();const r={v,tous,k,paye:t0-S.tess,dans:S.deck.indexOf(k)>=0,d:S.deck.length-d0};toMonde();return r});
  ok('Comptoir : après la mort, la carte du secret trouvé est en vente (et seulement des secrets trouvés)',!!ct.v&&ct.v.length>0&&ct.tous,JSON.stringify(ct));
  ok('Comptoir : achat de la carte de secret',ct.dans&&ct.d===1&&ct.paye>=6,JSON.stringify(ct));
  await monde();await coherent('fin du lot 2');

  /* 14. textes visibles : pas de « undefined », « NaN », « null » */
  const txt=await p.evaluate(()=>{const S=MZ.S,o=[];const id=MZ.ZN.find(Z=>S.own[Z.id]).id;openEveil(ZB[id]);o.push(document.getElementById('menu').textContent);
    openRivaux();o.push(document.getElementById('menu').textContent);RIVAUX.forEach((r,i)=>{openMaison(r,i);o.push(document.getElementById('menu').textContent)});toMonde();
    o.push(document.getElementById('bandeau').textContent);
    openEveil(ZB.RES);o.push(document.getElementById('menu').textContent);openLois();o.push(document.getElementById('menu').textContent);
    for(const Z of MZ.ZN.filter(Z=>(Z.mod||Z.id)==='MAR')){openLoi(Z.id);o.push(document.getElementById('menu').textContent);openEveil(Z);o.push(document.getElementById('menu').textContent)}toMonde();
    return o.join('\n')});
  const mauvais=(txt.match(/undefined|NaN|\bnull\b|\[object/g)||[]);
  ok('textes visibles sans « undefined », « NaN » ni « null »',mauvais.length===0,mauvais.join(', ')||undefined);

  {
  /* 15. LOT 3b (20 nov., testeur) : pacte et siège final joués dans la même partie, puis victoire et nouveau monde.
     Pacte signé au menu (prix au moins le quart du revenu), contestation entre maisons et sa résolution, rupture et ses deux
     contestations ; nouveau pacte et siège lancé à la Pierre, caravane menacée par la vague, rechargement ; mort (le pacte tombe
     sans rancune, le siège est levé) ; siège rejoué : vague 1 tenue par les murs au fil des cycles, vagues 2 et 3 brisées au combat
     (la troisième dépasse la défense) : victoire, palmarès, nouveau monde et sa remise à zéro. Captures lot3b-*.png. */
  const COHERENT3B=()=>{const S=MZ.S,p=[],P=S.pacte;
    if(P){if(P.k&&!RIVK[P.k])p.push('pacte avec '+P.k);if(P.k&&(!Number.isInteger(P.prix)||P.prix<1))p.push('prix du pacte '+P.prix);
      if(P.cr&&(!ZB[P.cr.id]||!RIVK[P.cr.k]||!RIVK[P.cr.de]||P.cr.k===P.cr.de||!isFinite(P.cr.du)))p.push('contestation entre maisons '+JSON.stringify(P.cr));
      if(P.rup&&(!RIVK[P.rup.k]||!(P.rup.n>0)))p.push('rupture '+JSON.stringify(P.rup));if(P.k&&P.rup&&P.rup.k===P.k)p.push('pacte et vengeance de la même maison');
      if(P.k&&S.riv&&S.riv.c&&S.riv.c.r===P.k)p.push('la maison du pacte conteste une de vos zones');
      for(const k in P.refus||{})if(!RIVK[k]||!Number.isInteger(P.refus[k]))p.push('refus '+k+' '+P.refus[k])}
    const s=S.siege;if(s){if(!ZB[s.cit]||!estEpique(s.cit))p.push('siège sur '+s.cit);if(!(s.vague>=1&&s.vague<=3))p.push('vague '+s.vague);
      if(!Number.isInteger(s.force)||!Number.isInteger(s.arrive))p.push('siège '+JSON.stringify(s));if(s.tenues+s.brisees!==s.vague-1)p.push('vagues comptées '+JSON.stringify(s));
      if(S.riv&&S.riv.c&&S.riv.c.id===s.cit)p.push('Citadelle assiégée contestée')}
    if(s&&S.siegeFini)p.push('siège en cours dans un monde gagné');
    for(const r of RIVAUX)if(zonesMaison(r.k).length>RIV_MAX())p.push('maison au-delà de son plafond : '+r.k);
    return p};
  const coherent3b=async nom=>{await coherent(nom);const pb=await p.evaluate(COHERENT3B);ok('pacte et siège cohérents · '+nom,pb.length===0,pb.slice(0,4).join(' | ')||undefined)};
  const libre=()=>p.evaluate(()=>{const S=MZ.S;for(const Z of MZ.ZN)if(S.own[Z.id]){S.rest[Z.id]=0;S.act[Z.id]=true;if(!S.lv[Z.id])MZ.set(Z.id,1)}});
  await monde();
  /* 15a. pacte signé au menu : deux maisons tiennent une zone chacune */
  const pa=await p.evaluate(()=>{const S=MZ.S;riv();S.riv.c=null;S.riv.t={};for(const id in S.riv.z)delete S.riv.z[id];
    const sauv=MZ.ZN.filter(Z=>!S.own[Z.id]&&!ESTDEP.has(Z.id)&&(Z.mod||Z.id)!=='RES').map(Z=>Z.id);S.riv.z[sauv[0]]='gri';S.riv.z[sauv[1]]='omb';
    const P=pac();P.k=null;P.rup=null;P.cr=null;P.refus={};
    MZ.tesselles(60);const t0=S.tess,rev=revenuPacte(),prix=PACTE_PRIX(RIVK.cpv);openRivaux();openMaison(RIVK.cpv,1);const o=UI.opts.find(o=>o.l==='Proposer un pacte');if(!o)return{o:UI.opts.map(o=>o.l)};o.go();
    const s=UI.opts.find(o=>/^Signer/.test(o.l));s.go();return{k:S.pacte.k,paye:t0-S.tess,prix,rev,quart:Math.ceil(rev/4),z:Object.assign({},S.riv.z)}});
  ok('lot 3b : pacte signé avec Comptevent depuis sa fiche, premier cycle payé',pa.k==='cpv'&&pa.paye===pa.prix,JSON.stringify(pa));
  ok('lot 3b : le prix vaut au moins le quart du revenu en tesselles',pa.prix>=pa.quart&&pa.prix>=1,JSON.stringify(pa));
  await p.evaluate(()=>{openRivaux()});await p.waitForTimeout(500);await p.screenshot({path:path.join(dossier,'lot3b-rivaux-pacte.png')});
  const rv=await p.evaluate(()=>document.getElementById('menu').textContent);
  ok('lot 3b : écran Rivaux, le pacte est affiché',/⚭ pacte/.test(rv),rv.slice(0,200));
  await monde();await coherent3b('pacte signé');
  /* 15b. la maison du pacte conteste une zone d'une autre maison, puis la prend */
  const cm=await p.evaluate(()=>{const S=MZ.S,a=MZ.pacteAgit(),cr=S.pacte.cr&&Object.assign({},S.pacte.cr);hudKey='';etatHud();const ban=document.getElementById('bandeau').textContent;const r=cr&&MZ.pacteResout(true);return{a,cr,ban,r,z:cr&&S.riv.z[cr.id]}});
  ok('lot 3b : contestation entre maisons annoncée (Comptevent contre une autre maison)',!!cm.a&&cm.a.sorte==='contesteMaison'&&!!cm.cr&&cm.cr.k==='cpv'&&cm.cr.de!=='cpv',JSON.stringify(cm).slice(0,240));
  ok('lot 3b : bandeau, ligne Rivaux avec ⚭ et la flèche entre blasons',/⚭/.test(cm.ban)&&/→/.test(cm.ban),cm.ban.slice(-120));
  ok('lot 3b : contestation réussie, la zone passe à Comptevent',!!cm.r&&cm.r.fin==='prise'&&cm.z==='cpv',JSON.stringify(cm.r));
  await coherent3b('contestation entre maisons');
  /* 15c. rupture : deux contestations de vos zones, l'une après l'autre */
  await libre();
  const ru=await p.evaluate(async()=>{const S=MZ.S;S.riv.c=null;MZ.rompre();await new Promise(r=>setTimeout(r,300));const c1=S.riv.c&&S.riv.c.r,n1=S.pacte.rup&&S.pacte.rup.n;
    hudKey='';etatHud();const ban=document.getElementById('bandeau').textContent;
    MZ.rivalArrive(false);await new Promise(r=>setTimeout(r,1400));const c2=S.riv.c&&S.riv.c.r,rup2=S.pacte.rup;MZ.rivalArrive(false);await new Promise(r=>setTimeout(r,1400));
    return{k:S.pacte.k,c1,n1,ban:ban.slice(-60),c2,rup2,c3:S.riv.c,refus:refusPacte('cpv')}});
  ok('lot 3b : rupture, deux contestations de vengeance puis plus rien, refus 10 cycles',ru.k===null&&ru.c1==='cpv'&&ru.n1===1&&ru.c2==='cpv'&&ru.rup2===null&&ru.c3===null&&ru.refus===10,JSON.stringify(ru));
  ok('lot 3b : bandeau, ✂ pour la vengeance',/✂/.test(ru.ban),ru.ban);
  await monde();await coherent3b('rupture du pacte');
  /* 15d. nouveau pacte (Grisaille) et siège final lancé à la Pierre de Berestograd */
  await p.evaluate(()=>MZ.epiquesForcer(['CIT']));   /* 22 nov. : Berestograd n'est plus épique en jeu ; le test y joue le siège */
  const sg=await p.evaluate(()=>{const S=MZ.S;for(const s in S.hordes)if(S.hordes[s].cible==='CIT'||s==='CIT')delete S.hordes[s];S.siegeRepos={};S.siegeFini=null;S.siege=null;
    MZ.set('CIT',7);S.own.CIT=S.act.CIT=true;MZ.tesselles(40);const okp=signerPacte(RIVK.gri);S.riv.c={r:'omb',id:'CIT',de:S.riv.nc,du:S.riv.nc+2};
    tp('CIT');openEveil(ZB.CIT);return{okp,o:UI.opts.map(o=>o.l)}});
  ok('lot 3b : la Pierre de Berestograd à +7 propose « Lancer le siège final »',sg.okp&&sg.o[0]==='Lancer le siège final',sg.o.slice(0,4).join(' / '));
  await p.waitForTimeout(500);await p.screenshot({path:path.join(dossier,'lot3b-pierre-siege.png')});
  const la=await p.evaluate(()=>{const S=MZ.S;UI.opts[0].go();const t=document.getElementById('menu-t').textContent;UI.opts.find(o=>o.l==='Lancer le siège').go();const s=S.siege;
    return{t,s:s&&{vague:s.vague,arr:s.arrive-S.nc,force:s.force},c:S.riv.c,cc:ciblesConteste().some(Z=>Z.id==='CIT'),def:defenseHorde('CIT').total}});
  ok('lot 3b : siège lancé (confirmation), vague 1 dans 3 cycles',/Lancer le siège final/.test(la.t)&&!!la.s&&la.s.vague===1&&la.s.arr===3,JSON.stringify(la));
  ok('lot 3b : la Citadelle assiégée est à l\'abri des rivaux (contestation levée, plus contestable)',la.c===null&&!la.cc,JSON.stringify(la));
  info('lot 3b : vague 1',`force ${la.s&&la.s.force} contre défense ${la.def}`);
  const cs=await p.evaluate(()=>{const S=MZ.S;MZ.set('RES',2);S.own.RES=S.act.RES=true;S.routes=S.routes||{};S.routes.RES=['CIT'];if(S.car.RES)S.car.RES.arret=-1;const c=MZ.caravanes().find(c=>c.r==='RES');return c&&{etat:c.etat,risque:c.risque,menace:c.menace}});
  ok('lot 3b : la vague menace la caravane qui va à la Citadelle',!!cs&&cs.risque>0&&cs.menace==='CIT',JSON.stringify(cs));
  await p.evaluate(()=>{toMonde();hudKey='';etatHud()});await p.waitForTimeout(1500);
  const ban=await p.$('#bandeau');if(ban)await ban.screenshot({path:path.join(dossier,'lot3b-bandeau-siege.png')});
  await p.screenshot({path:path.join(dossier,'lot3b-monde-siege.png')});
  ok('lot 3b : bandeau, « ♛ … vague 1/3 » dans les Menaces',await p.evaluate(()=>/♛.*vague 1\/3/.test(document.getElementById('bandeau').textContent)));
  await coherent3b('siège lancé');
  /* 15e. rechargement : pacte et siège reprennent à l'identique */
  const cle3b='JSON.stringify({pacte:MZ.S.pacte,siege:MZ.S.siege,lv:MZ.S.lv.CIT,tess:MZ.S.tess,c:MZ.S.riv.c})';
  /* 22 nov. : attendre que le pacte ait traité le dernier cycle (boucle d'une seconde), sinon il le traite après le rechargement */
  await p.waitForFunction(()=>!MZ.S.pacte||MZ.S.pacte.nc>=MZ.S.nc,null,{timeout:5000}).catch(()=>{});
  await p.evaluate(()=>save());const av3=await p.evaluate(cle3b);
  await p.reload();await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function',null,{timeout:30000});
  await p.evaluate(()=>{MZ.epiquesForcer(['CIT']);startGame(false)});await p.waitForTimeout(1500);
  const ap3=await p.evaluate(cle3b);
  ok('lot 3b : rechargement, pacte et siège à l\'identique',av3===ap3,av3===ap3?undefined:av3.slice(0,160)+' ≠ '+ap3.slice(0,160));
  await monde();await coherent3b('rechargement');
  /* 15f. mort : le pacte tombe sans rancune, le siège est levé */
  const mo=await p.evaluate(async()=>{const S=MZ.S,k=S.pacte.k;mort();toMonde();await new Promise(r=>setTimeout(r,2600));return{k,apres:S.pacte.k,refus:Object.keys(S.pacte.refus).length,rup:S.pacte.rup,siege:S.siege}});
  ok('lot 3b : mort, le pacte tombe sans rancune (ni vengeance, ni refus)',mo.k==='gri'&&mo.apres===null&&mo.refus===0&&mo.rup===null,JSON.stringify(mo));
  ok('lot 3b : mort, le siège est levé',mo.siege===null,JSON.stringify(mo.siege));
  await monde();await coherent3b('mort pendant le siège');
  /* 15g. siège rejoué jusqu'à la victoire */
  const s2=await p.evaluate(()=>{const S=MZ.S;for(const s in S.hordes)if(S.hordes[s].cible==='CIT')delete S.hordes[s];MZ.set('CIT',7);S.own.CIT=S.act.CIT=true;S.siegeRepos={};
    const s=lancerSiege('CIT');if(!s)return null;const D=defenseHorde('CIT').total;s.force=D;save();return{force:s.force,D,arr:s.arrive,nc:S.nc}});
  ok('lot 3b : siège relancé par l\'héritier',!!s2,JSON.stringify(s2));
  const pierre0=await p.evaluate(()=>MZ.S.res[ZMANA.CIT]||0);
  for(let i=0;i<3;i++){await p.evaluate(()=>{const S=MZ.S;for(const s in S.hordes)if(S.hordes[s].cible==='CIT')delete S.hordes[s];MZ.cycle()});await p.waitForTimeout(1300);
    await p.evaluate(()=>{if(MZ.mode==='menu'&&/Siège final/.test(document.getElementById('menu-sur').textContent))toMonde()});await monde()}
  const w1=await p.evaluate(()=>({s:MZ.S.siege&&{vague:MZ.S.siege.vague,tenues:MZ.S.siege.tenues},pierre:MZ.S.res[ZMANA.CIT]||0,lv:MZ.S.lv.CIT}));
  ok('lot 3b : vague 1 tenue par les murs au fil des cycles (+1 mana), vague 2 annoncée',!!w1.s&&w1.s.vague===2&&w1.s.tenues===1&&w1.pierre>=pierre0+1&&w1.lv===7,JSON.stringify(w1));
  await coherent3b('vague 1 tenue');
  const cb=await p.evaluate(()=>{tp('CIT');openEveil(ZB.CIT);const i=UI.opts.findIndex(o=>/Briser la vague 2/.test(o.l));if(i<0)return{o:UI.opts.map(o=>o.l)};UI.opts[i].go();return MZ.CB&&{siege:MZ.CB.siege,foes:MZ.CB.foes.length}});
  ok('lot 3b : « Briser la vague 2 » ouvre le combat (trois créatures)',!!cb&&cb.siege===2&&cb.foes===3,JSON.stringify(cb));
  await p.waitForTimeout(600);await p.evaluate(()=>{if(MZ.CB){for(const m of MZ.CB.foes)m.pv=0;finSiFini()}});
  await p.waitForFunction(()=>!MZ.CB&&MZ.mode==='menu',null,{timeout:20000}).catch(()=>{});await p.waitForTimeout(300);
  const w2=await p.evaluate(()=>({s:MZ.S.siege&&{vague:MZ.S.siege.vague,brisees:MZ.S.siege.brisees},t:document.getElementById('menu-t').textContent}));
  ok('lot 3b : vague 2 brisée au combat, vague 3 annoncée',!!w2.s&&w2.s.vague===3&&w2.s.brisees===1&&/respire/.test(w2.t),JSON.stringify(w2));
  await monde();await coherent3b('vague 2 brisée');
  const pal0=await p.evaluate(()=>MZ.palmares().length),g0=await p.evaluate(()=>MZ.S.graine);
  const f3=await p.evaluate(()=>({force:MZ.S.siege.force,def:defenseHorde('CIT').total}));
  ok('lot 3b : vague 3 menée par le chef, au-dessus de la défense',f3.force>f3.def,JSON.stringify(f3));
  const cb3=await p.evaluate(()=>{tp('CIT');openEveil(ZB.CIT);const i=UI.opts.findIndex(o=>/Briser la vague 3/.test(o.l));if(i<0)return null;UI.opts[i].go();return MZ.CB&&{siege:MZ.CB.siege,foes:MZ.CB.foes.length}});
  ok('lot 3b : « Briser la vague 3 » ouvre le combat (deux créatures et leur chef)',!!cb3&&cb3.siege===3&&cb3.foes===3,JSON.stringify(cb3));
  await p.waitForTimeout(600);await p.evaluate(()=>{if(MZ.CB){for(const m of MZ.CB.foes)m.pv=0;finSiFini()}});
  await p.waitForFunction(()=>!MZ.CB&&MZ.mode==='menu'&&/Victoire/.test(document.getElementById('menu-sur').textContent),null,{timeout:20000}).catch(()=>{});await p.waitForTimeout(600);
  const w3={victoire:await p.evaluate(()=>!!MZ.S.siegeFini&&!MZ.S.siege)};
  const vic=await p.evaluate(()=>({t:document.getElementById('menu-t').textContent,corps:document.getElementById('menu-corps').textContent,o:UI.opts.map(o=>o.l),fini:MZ.S.siegeFini,pal:MZ.palmares()}));
  ok('lot 3b : vague 3 brisée au combat, victoire',!!w3&&w3.victoire&&!!vic.fini,JSON.stringify(w3));
  ok('lot 3b : écran de victoire (résumé, nouveau monde proposé)',/le monde est à vous/.test(vic.t)&&/Zones tenues/.test(vic.corps)&&/Temps de jeu/.test(vic.corps)&&vic.o[0]==='Commencer un nouveau monde',vic.t);
  ok('lot 3b : victoire inscrite au palmarès',vic.pal.length===pal0+1&&vic.pal[vic.pal.length-1].vagues.brisees===2,JSON.stringify(vic.pal[vic.pal.length-1]).slice(0,200));
  await p.screenshot({path:path.join(dossier,'lot3b-victoire.png')});
  const pm=await p.evaluate(()=>{toMonde();openMenu();const i=UI.opts.findIndex(o=>o.l==='Palmarès');if(i<0)return null;UI.opts[i].go();return document.getElementById('menu-t').textContent});
  ok('lot 3b : menu Pause → Palmarès',!!pm&&/gagné/.test(pm),pm);
  await p.waitForTimeout(400);await p.screenshot({path:path.join(dossier,'lot3b-palmares.png')});
  await monde();await coherent3b('monde gagné');
  /* 15h. nouveau monde : tout repart de zéro, sauf le palmarès */
  await p.evaluate(()=>{const S=MZ.S;MZ.tour('CIT');MZ.amenager('DON',['herse']);MZ.loiRenforcer('ASS150');MZ.tesselles(9);S.own.RES=S.act.RES=true;MZ.set('RES',2);S.routes=S.routes||{};S.routes.RES=['CIT'];
    const src=MZ.ZN.find(Z=>!S.own[Z.id]&&!S.hordes[Z.id]);if(src&&!Object.keys(S.hordes).length)S.hordes[src.id]={src:src.id,cible:'CIT',nee:S.nc,arrive:S.nc+3,force:9};
    S.riv.z[MZ.ZN.find(Z=>!S.own[Z.id]&&!ESTDEP.has(Z.id)).id]='sbc';signerPacte(RIVK.cpv,true);S.pacte.refus.gri=S.nc+10;S.pacte.rup={k:'omb',n:1};save()});
  const avNM=await p.evaluate(()=>{const S=MZ.S;return{tours:Object.keys(S.tours).length,hordes:Object.keys(S.hordes).length,pacte:S.pacte.k,tess:S.tess,riv:Object.keys(S.riv.z).length,renf:Object.keys(S.loisRenf).length,car:MZ.caravanes().length}});
  info('lot 3b : avant le nouveau monde',JSON.stringify(avNM));
  await p.evaluate(()=>{openEveil(ZB.CIT);UI.opts.find(o=>o.l==='Commencer un nouveau monde').go();UI.opts.find(o=>o.l==='Commencer le nouveau monde').go()});
  await p.waitForTimeout(2500);await monde();
  const nm=await p.evaluate(()=>{const S=MZ.S,P=S.pacte||{};return{graine:S.graine,nc:S.nc,hordes:Object.keys(S.hordes||{}).length,riv:S.riv?Object.keys(S.riv.z||{}).length+(S.riv.c?1:0)+Object.keys(S.riv.t||{}).length:0,
    pacte:[P.k,P.cr,P.rup,Object.keys(P.refus||{}).length],car:Object.keys(S.car||{}).length+MZ.caravanes().length,renf:Object.keys(S.loisRenf||{}).length,tours:Object.keys(S.tours||{}).length,
    salles:Object.keys(S.donjons||{}).length+S.pieges.filter(Boolean).length,tess:S.tess,siege:S.siege,fini:S.siegeFini,pal:MZ.palmares().length,
    own:MZ.ZN.filter(Z=>S.own[Z.id]).length,dep:ZONES_DEP.filter(id=>S.own[id]).length,emp:MZ.ZN.filter(Z=>S.emp[Z.id]).length,lives:S.lives,hurt:S.hurt}});
  ok('lot 3b : nouveau monde, graine neuve et cycle 0',nm.graine!==g0&&nm.nc===0,JSON.stringify(nm));
  ok('lot 3b : nouveau monde, hordes, rivaux, pacte, caravanes, lois renforcées remis à zéro',nm.hordes===0&&nm.riv===0&&nm.pacte[0]===null&&nm.pacte[1]===null&&nm.pacte[2]===null&&nm.pacte[3]===0&&nm.car===0&&nm.renf===0,JSON.stringify(nm));
  ok('lot 3b : nouveau monde, tours, salles, tesselles, siège remis à zéro',nm.tours===0&&nm.salles===0&&nm.tess===0&&nm.siege===null&&nm.fini===null,JSON.stringify(nm));
  ok('lot 3b : nouveau monde, territoire de départ seul, sans empreinte, héros neuf ; palmarès gardé',nm.own===nm.dep&&nm.own===12&&nm.emp===0&&nm.lives===1&&nm.hurt===0&&nm.pal===pal0+1,JSON.stringify(nm));
  for(let i=0;i<3;i++){await p.evaluate(()=>MZ.cycle());await p.waitForTimeout(1100);await monde()}
  await coherent3b('nouveau monde, trois cycles');
  }

  await nav.close();
  console.log(etapes.join('\n'));console.log('\nCaptures : '+dossier);
  if(echec){console.error('\nTest du monde : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest du monde : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test du monde : erreur',e);process.exit(1)});
