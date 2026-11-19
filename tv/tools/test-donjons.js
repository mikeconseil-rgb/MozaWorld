/* Test des Donjons aménagés : une partie démarre, un Donjon autre que celui d'origine s'aménage depuis sa Pierre d'éveil
   (salles nommées d'après la zone, nombre selon le palier), le catalogue grandit avec les Donjons tenus, une horde traverse
   les salles (cible et voisine), l'usure et le saccage s'appliquent, l'entretien par cycle se paie, la réparation marche,
   une contestation de rival a moins de chances, le Donjon d'origine garde S.pieges ; sans erreur JavaScript.
   Usage : node tv/tools/test-donjons.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.amenager==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre avec MZ.amenager',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 1. Donjons tenus au départ et catalogue */
    const d0=await p.evaluate(()=>({tenus:MZ.donjonsTenus(),cat:MZ.amenager('DON',undefined).catalogue,pieges:Array.isArray(MZ.S.pieges)&&MZ.S.pieges.length}));
    await p.evaluate(()=>toMonde());
    ok('Donjons tenus au départ',d0.tenus.length>=1,d0.tenus.join(', '));
    ok('catalogue : un dispositif de plus que de Donjons tenus',d0.cat.length===d0.tenus.length+1,d0.cat.join(', '));
    ok('le Donjon d\'origine garde S.pieges (4 salles)',d0.pieges===4);
    const id=await p.evaluate(()=>MZ.donjonsTenus().find(x=>x!=='DON')||MZ.ZN.find(Z=>(Z.mod||Z.id)==='DON'&&Z.id!=='DON').id);
    /* 2. un troisième Donjon tenu déverrouille un dispositif de plus */
    const d1=await p.evaluate(()=>{for(const Z of MZ.ZN)if((Z.mod||Z.id)==='DON'&&!MZ.S.own[Z.id])MZ.prendre(Z.id);return{tenus:MZ.donjonsTenus(),cat:MZ.amenager('DON',null).catalogue}});
    ok('chaque Donjon tenu déverrouille un dispositif',d1.cat.length===Math.min(6,d1.tenus.length+1),d1.tenus.length+' Donjons, '+d1.cat.join(', '));
    /* 3. salles selon le palier, nommées d'après la zone */
    const s1=await p.evaluate(i=>{MZ.set(i,1);return MZ.amenager(i,[])},id);
    const s3=await p.evaluate(i=>{MZ.set(i,-3);return MZ.amenager(i,[])},id);
    const nom=await p.evaluate(i=>ZB[i].info.nom,id);
    ok('2 salles au palier 1, 4 au palier 3',s1.salles===2&&s3.salles===4,s1.salles+' puis '+s3.salles);
    ok('noms de salles tirés de la zone',s3.noms.length===4&&s3.noms.some(n=>nom.indexOf(n.split(' ').pop())>=0)&&!s3.noms.some(n=>/Édits/.test(n)),s3.noms.join(' · '));
    /* 4. aménager à la manette : Pierre d'éveil, « Aménager les salles », première salle, Herse de givre */
    await p.evaluate(i=>{MZ.S.res.Glace=10;MZ.tp(i)},id);await p.waitForTimeout(800);
    const menu=await p.evaluate(i=>{openEveil(ZB[i]);const j=UI.opts.findIndex(o=>o.l==='Aménager les salles');if(j<0)return null;UI.opts[j].go();
      const t=document.getElementById('menu-t').textContent;UI.opts[0].go();const k=UI.opts.findIndex(o=>/^Herse de givre/.test(o.l));const verr=UI.opts.filter(o=>/verrouillé/.test(o.l)).length;
      const avant=MZ.S.res.Glace;UI.opts[k].go();return{t,verr,avant,apres:MZ.S.res.Glace,k:MZ.S.donjons[i].p[0]&&MZ.S.donjons[i].p[0].k}},id);
    ok('la Pierre propose « Aménager les salles »',!!menu,menu&&menu.t);
    ok('poser une Herse coûte 2 Glace',!!menu&&menu.k==='herse'&&menu.apres===menu.avant-2,menu&&JSON.stringify(menu));
    ok('les dispositifs non déverrouillés sont fermés',!!menu&&menu.verr===6-d1.cat.length,menu&&menu.verr+' verrouillé(s)');
    await p.evaluate(()=>toMonde());
    /* 5. défense contre une horde : cible et voisine */
    const def=await p.evaluate(i=>{MZ.S.ent=2;MZ.amenager(i,['glyphe','lave','herse','gardien']);
      const e=MZ.amenager(i,null);closeUI();toMonde();
      const v=(VOISINES[i]||[]).find(x=>MZ.S.own[x]);return{e,cible:MZ.hordeDefense(i),vois:v?MZ.hordeDefense(v):null,v}},id);
    ok('traversée : Glyphe 2, Lave ×2 = 10, Herse 3, Gardien 6',def.e.traversee===21&&def.e.actifs===4,JSON.stringify(def.e.pieges));
    ok('horde sur le Donjon : les salles piégées défendent',def.cible.parts.some(x=>/salles piégées/.test(x[0])&&x[1]===21),JSON.stringify(def.cible.parts));
    ok('horde sur une voisine à vous : les pièges du Donjon voisin défendent',!def.v||def.vois.parts.some(x=>/Donjon voisin/.test(x[0])),def.v+' '+JSON.stringify(def.vois&&def.vois.parts));
    /* 6. rival : moins de chances sur un Donjon aménagé (sans les pouvoirs du domaine, pour mesurer l'écart seul) */
    const riv=await p.evaluate(i=>{const dm=window.defenseMonde;window.defenseMonde=()=>({bonus:0});const a=chanceRival(i);MZ.amenager(i,[]);const b=chanceRival(i);MZ.amenager(i,['glyphe','lave','herse','gardien']);window.defenseMonde=dm;return{avec:a,sans:b}},id);
    ok('contestation de rival : −10 points par piège actif',Math.abs((riv.sans-riv.avec)-Math.min(.4,riv.sans-.1))<1e-9&&riv.avec<riv.sans,JSON.stringify(riv));
    /* 7. une horde forte passe : usure (3 assauts → 2) et saccage de la première salle */
    const h=await p.evaluate(i=>{const h=MZ.horde(null,i);if(!h)return null;h.force=99;const r=MZ.hordeArrive(h.src);
      return{passe:r&&r.passe,p:MZ.S.donjons[i].p.map(x=>x&&[x.k,x.u]),lignes:r&&r.lignes}},id);
    ok('la horde forte passe',!!h&&h.passe,h&&h.lignes&&h.lignes.join(' | '));
    ok('saccage de la première salle, usure des autres',!!h&&h.p[0]===null&&h.p.slice(1).every(x=>x&&x[1]===2),h&&JSON.stringify(h.p));
    await p.waitForTimeout(600);await p.evaluate(()=>toMonde());
    /* 8. horde faible : repoussée par les salles */
    const h2=await p.evaluate(i=>{MZ.set(i,3);MZ.S.own[i]=true;MZ.S.act[i]=true;MZ.amenager(i,['glyphe','lave','herse','gardien']);const h=MZ.horde(null,i);if(!h)return null;h.force=12;const r=MZ.hordeArrive(h.src);return{passe:r&&r.passe,lignes:r&&r.lignes}},id);
    ok('une horde de force 12 se brise dans les salles',!!h2&&h2.passe===false,h2&&h2.lignes&&h2.lignes[0]);
    await p.waitForTimeout(600);await p.evaluate(()=>toMonde());
    /* 9. réparation (Comptoir) */
    const rep=await p.evaluate(i=>{const T=MZ.S.donjons[i].p;T[1].dort=true;T[2].u=1;const n=MZ.reparerPieges(i);return{n,dort:T[1].dort,u:T[2].u,actifs:MZ.piegesDonjon(i)}},id);
    ok('reparerPieges réveille et remet à neuf',rep.n>=2&&!rep.dort&&rep.u===3&&rep.actifs===4,JSON.stringify(rep));
    /* 10. entretien par cycle (rythme 0) pour un Donjon autre que celui d'origine */
    const cyc=await p.evaluate(i=>{MZ.S.pieges=[null,null,null,null];MZ.S.ent=0;MZ.amenager(i,['herse','herse']);for(const Z of MZ.ZN)if((Z.mod||Z.id)==='RES')MZ.S.act[Z.id]=false;MZ.S.routes={};MZ.S.res.Glace=1;MZ.S.dernierAssaut=MZ.S.nc;MZ.cycle();const T=MZ.S.donjons[i].p;return{glace:MZ.S.res.Glace,dort:[T[0].dort,T[1].dort],actifs:MZ.piegesDonjon(i)}},id);
    ok('entretien par cycle : 1 mana par piège, sinon il dort',cyc.dort.filter(Boolean).length===1&&cyc.actifs===1,JSON.stringify(cyc));
    /* 11. le Donjon d'origine passe par le même menu et garde S.pieges */
    const don=await p.evaluate(()=>{MZ.amenager('DON',['herse','glyphe']);return{p:MZ.S.pieges.map(x=>x&&x.k),n:MZ.piegesDonjon('DON'),noms:MZ.amenager('DON',null).noms}});
    await p.evaluate(()=>{closeUI();toMonde()});
    ok('Donjon d\'origine : S.pieges, salles des Neuf Édits',don.p[0]==='herse'&&don.p[1]==='glyphe'&&don.n===2&&/Vestibule/.test(don.noms[0]),JSON.stringify(don));
    /* 12. sauvegarde : S.donjons survit à un rechargement */
    const sv=await p.evaluate(i=>{save();return JSON.stringify(MZ.S.donjons[i])},id);
    await p.reload();await p.waitForFunction(()=>window.MZ&&typeof window.MZ.amenager==='function',null,{timeout:30000});
    const sv2=await p.evaluate(i=>JSON.stringify(window.MZ.S.donjons&&window.MZ.S.donjons[i]),id);
    ok('les salles sont sauvegardées',sv===sv2,sv2);
  }
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  console.log(echec?'\nTest des Donjons : échec ('+echec+').':'\nTest des Donjons : tout passe.');
  process.exit(echec?1:0)})();
