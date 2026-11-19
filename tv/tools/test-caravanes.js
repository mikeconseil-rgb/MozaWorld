/* Test des caravanes : trajet par routes ouvertes et zones tenues jusqu'à la Citadelle, tesselles par cycle (+1 au niveau 3),
   pillage (forcé et par une horde en marche sur le trajet), arrêt de 2 cycles, escorte (combat court, cargaison rendue),
   tour de guet qui réduit le risque, route coupée, Pierre d'éveil, bandeau, minicarte, chariot 3D, sauvegarde, mort, sans erreur JavaScript.
   Usage : sh tv/build.sh && node tv/tools/test-caravanes.js   (depuis la racine du dépôt ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail!==undefined?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&typeof window.MZ.caravanes==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre, MZ.caravanes existe',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* un cycle de plus, attendu par les modules (commerce, caravanes) */
    await p.evaluate(()=>{window.unCycle=async()=>{MZ.S.nc++;await new Promise(r=>setTimeout(r,1250))}});
    /* 1. départ : Ressources au niveau 1, pas de route, pas de caravane */
    const c0=await p.evaluate(()=>MZ.caravanes().length);
    ok('une nouvelle partie n\'a aucune caravane',c0===0,c0);
    /* 2. une route directe vers la Citadelle */
    const c1=await p.evaluate(()=>{MZ.set('RES',2);MZ.S.routes.RES=['CIT'];return MZ.caravanes()});
    ok('Ressource au niveau 2 reliée à la Citadelle : une caravane',c1.length===1&&c1[0].r==='RES'&&c1[0].cit==='CIT'&&c1[0].traj.join()==='RES,CIT'&&c1[0].etat==='en route'&&c1[0].n===1,JSON.stringify(c1));
    const g1=await p.evaluate(async()=>{const t0=MZ.S.tess,rev=revenuTess();await unCycle();return{d:MZ.S.tess-t0,rev}});
    ok('un cycle : la caravane rapporte 1 tesselle en plus des Citadelles',g1.d===g1.rev+1,JSON.stringify(g1));
    const g3=await p.evaluate(async()=>{MZ.set('RES',3);const n=MZ.caravanes()[0].n,t0=MZ.S.tess,rev=revenuTess();await unCycle();return{n,d:MZ.S.tess-t0,rev}});
    ok('au niveau 3, la caravane rapporte 2',g3.n===2&&g3.d===g3.rev+2,JSON.stringify(g3));
    /* 3. un trajet par une zone à vous : RES079 → RES → Citadelle */
    const c2=await p.evaluate(()=>{MZ.set('RES079',2);MZ.S.routes.RES079=['RES'];return MZ.caravanes().find(c=>c.r==='RES079')});
    ok('une route vers une zone à vous reliée à la Citadelle suffit',!!c2&&c2.traj.join()==='RES079,RES,CIT',JSON.stringify(c2));
    const c3=await p.evaluate(()=>{const S=MZ.S,was=S.own.RES227;S.own.RES227=false;S.routes.RES079=['RES227'];const a=MZ.caravanes().find(c=>c.r==='RES079');S.routes.RES079=['RES'];S.own.RES227=was;return a||null});
    ok('une route vers une zone qui n\'est pas à vous ne lance pas de caravane',!c3||!c3.traj,JSON.stringify(c3));
    const c4=await p.evaluate(()=>{const was=MZ.S.own.RES;MZ.S.own.RES=false;const a=MZ.caravanes().find(c=>c.r==='RES079');MZ.S.own.RES=was;return a||null});
    ok('une zone du trajet perdue : plus de trajet',!c4||!c4.traj,JSON.stringify(c4));
    /* 4. Pierre d'éveil, bandeau */
    const pi=await p.evaluate(()=>{openEveil(ZB.RES);const t=document.getElementById('menu-choix').textContent;toMonde();etatHud();
      const b=document.getElementById('bandeau'),e=[...b.querySelectorAll('[title^="Caravanes"]')];return{pierre:/Caravane vers Berestograd · \+2 par cycle/.test(t)||/Caravane vers .* · \+2 par cycle/.test(t),t:t.slice(0,300),ban:e.length,bt:e[0]&&e[0].textContent}});
    ok('la Pierre de la Ressource dit « Caravane vers … · +2 par cycle »',pi.pierre,pi.t);
    ok('le bandeau montre les caravanes (un élément court)',pi.ban===1&&/⛟2/.test(pi.bt),JSON.stringify(pi.bt));
    /* 5. pillage forcé : arrêt de 2 cycles, cargaison perdue, toast */
    const pl=await p.evaluate(async()=>{const e=MZ.piller('RES');const c=MZ.caravanes().find(c=>c.r==='RES');await new Promise(r=>setTimeout(r,1300));
      return{e,etat:c.etat,perdu:c.perdu,toast:document.getElementById('t1').textContent}});
    ok('MZ.piller arrête la caravane et note la cargaison perdue',pl.e&&pl.etat==='pillée'&&pl.perdu===2,JSON.stringify(pl));
    ok('un toast annonce le pillage',/Caravane pillée/.test(pl.toast),pl.toast);
    const ar=await p.evaluate(async()=>{const t0=MZ.S.tess,rev=revenuTess()+MZ.caravanes().filter(c=>c.etat==='en route').reduce((a,c)=>a+c.n,0);await unCycle();const d1=MZ.S.tess-t0;
      const t1=MZ.S.tess,rev2=revenuTess()+MZ.caravanes().filter(c=>c.etat==='en route').reduce((a,c)=>a+c.n,0);await unCycle();const d2=MZ.S.tess-t1,e2=MZ.caravanes().find(c=>c.r==='RES').etat;
      return{d1,rev,d2,rev2,e2}});
    ok('pendant l\'arrêt, la caravane pillée ne rapporte rien',ar.d1===ar.rev&&ar.d2===ar.rev2&&ar.e2==='pillée',JSON.stringify(ar));
    const re=await p.evaluate(async()=>{const t0=MZ.S.tess;await unCycle();const c=MZ.caravanes().find(c=>c.r==='RES');return{etat:c.etat,d:MZ.S.tess-t0,rev:revenuTess()}});
    ok('après 2 cycles, la caravane repart et rapporte',re.etat==='en route'&&re.d===re.rev+2+1,JSON.stringify(re));
    /* 6. escorte : la Pierre propose d'escorter, combat court, cargaison rendue */
    const es=await p.evaluate(async()=>{MZ.piller('RES');openEveil(ZB.RES);const o=UI.opts[0];const pierre=o&&/Escorter la caravane/.test(o.l);
      const t0=MZ.S.tess;o.go();await new Promise(r=>setTimeout(r,400));const cb=MZ.CB,kind=cb&&cb.kind,car=cb&&cb.caravane,nf=cb&&cb.foes.length,noms=cb&&cb.foes.map(f=>f.nom).join(', ');
      finCombat(true);const titre=document.getElementById('menu-t').textContent;toMonde();const c=MZ.caravanes().find(c=>c.r==='RES');
      return{pierre,kind,car,nf,noms,titre,etat:c.etat,rendu:MZ.S.tess-t0}});
    ok('la Pierre propose « Escorter la caravane » en tête',es.pierre,JSON.stringify(es));
    ok('l\'escorte ouvre un combat court contre deux pillards',es.kind==='renc'&&es.car==='RES'&&es.nf===2,JSON.stringify(es));
    ok('victoire : la caravane repart et rend sa cargaison',es.etat==='en route'&&es.rendu===2&&/repart/.test(es.titre),JSON.stringify(es));
    const ed=await p.evaluate(async()=>{MZ.piller('RES');const h0=MZ.S.hurt;MZ.escorter('RES');await new Promise(r=>setTimeout(r,400));finCombat(false);const h1=MZ.S.hurt;toMonde();
      const c=MZ.caravanes().find(c=>c.r==='RES');MZ.S.hurt=0;return{h0,h1,etat:c.etat}});
    ok('défaite : une blessure, la caravane reste arrêtée',ed.h1===ed.h0+1&&ed.etat==='pillée',JSON.stringify(ed));
    await p.evaluate(async()=>{for(let i=0;i<3;i++)await unCycle()});
    /* 7. menace : une horde en marche vers une zone du trajet ; une tour de guet divise le risque par deux */
    const hm=await p.evaluate(()=>{const S=MZ.S;const h=MZ.horde('DON024','RES');const c=MZ.caravanes().find(c=>c.r==='RES');return{h:!!h,cible:h&&h.cible,risque:c.risque,menace:c.menace}});
    ok('une horde qui vise une zone du trajet menace la caravane (30 %)',hm.h&&hm.cible==='RES'&&Math.abs(hm.risque-.3)<1e-9&&hm.menace==='RES',JSON.stringify(hm));
    const tr=await p.evaluate(()=>{MZ.tour('RES');const c=MZ.caravanes().find(c=>c.r==='RES');return{risque:c.risque,tour:c.tour}});
    ok('une tour de guet sur la zone menacée divise le risque par deux',Math.abs(tr.risque-.15)<1e-9&&tr.tour,JSON.stringify(tr));
    const nat=await p.evaluate(async()=>{let n=0;for(let i=0;i<40;i++){const c=MZ.caravanes().find(c=>c.r==='RES');if(c.etat==='pillée'){return{n:i,par:MZ.S.car.RES.par,lieu:c.lieu}}
      MZ.S.hordes.DON024&&(MZ.S.hordes.DON024.arrive=MZ.S.nc+99);await unCycle()}return{n:-1}});
    ok('sous la menace, la caravane finit par être pillée par la horde',nat.n>=0&&nat.par==='horde'&&nat.lieu==='RES',JSON.stringify(nat));
    /* 8. rival voisin du trajet */
    const rv=await p.evaluate(()=>{delete MZ.S.hordes.DON024;MZ.S.car.RES.arret=-1;const R=MZ.S.riv||(MZ.rival&&riv(),MZ.S.riv);R.z.ASS012='gri';
      const c=MZ.caravanes().find(c=>c.r==='RES122'),c2=MZ.caravanes().find(c=>c.r==='RES');MZ.set('RES122',2);MZ.S.routes.RES122=['CIT'];const c3=MZ.caravanes().find(c=>c.r==='RES122');delete R.z.ASS012;return{c3,c2r:c2.risque}});
    ok('une zone de maison rivale voisine du trajet menace la caravane (15 %)',rv.c3&&Math.abs(rv.c3.risque-.15)<1e-9,JSON.stringify(rv.c3));
    /* 9. route coupée : la caravane s'arrête */
    const rc=await p.evaluate(async()=>{MZ.set('RES',1);etatRoutes();const c=MZ.caravanes().find(c=>c.r==='RES');openEveil(ZB.RES);const t=document.getElementById('menu-choix').textContent;toMonde();
      const t0=MZ.S.tess;const rev=revenuTess()+MZ.caravanes().filter(c=>c.etat==='en route').reduce((a,c)=>a+c.n,0);await unCycle();return{etat:c&&c.etat,pierre:/route coupée/.test(t),d:MZ.S.tess-t0,rev}});
    ok('route coupée : la caravane est arrêtée',rc.etat==='coupée'&&rc.pierre,JSON.stringify(rc));
    ok('une caravane coupée ne rapporte rien',rc.d===rc.rev,JSON.stringify(rc));
    /* 10. minicarte et chariot 3D */
    const vis=await p.evaluate(async()=>{let err=null;try{drawMini(1.2)}catch(e){err=String(e)}await new Promise(r=>setTimeout(r,400));
      return{err,chariots:Object.keys(CAR3D).length,attendus:MZ.caravanes().filter(c=>c.traj).length}});
    ok('la minicarte dessine les caravanes sans erreur',!vis.err,vis.err);
    ok('un chariot 3D par caravane qui a un trajet',vis.chariots===vis.attendus&&vis.chariots>0,JSON.stringify(vis));
    /* 11. sauvegarde, mort, nouvelle partie */
    const sv=await p.evaluate(()=>{save();const j=JSON.parse(localStorage.getItem('mz-tv-1'));return!!j.car&&typeof j.carNc==='number'});
    ok('l\'état des caravanes est sauvegardé',sv);
    const mo=await p.evaluate(async()=>{mort();await new Promise(r=>setTimeout(r,1300));toMonde();return{n:MZ.caravanes().length,car:Object.keys(MZ.S.car).length}});
    ok('à la mort, les caravanes disparaissent',mo.n===0&&mo.car===0,JSON.stringify(mo));
    const np=await p.evaluate(async()=>{MZ.start();await new Promise(r=>setTimeout(r,1300));return{n:MZ.caravanes().length,b:MZ.S.carBilan.pillages}});
    ok('une nouvelle partie repart sans caravane',np.n===0&&np.b===0,JSON.stringify(np))}
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des caravanes : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des caravanes : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des caravanes : erreur',e);process.exit(1)});
