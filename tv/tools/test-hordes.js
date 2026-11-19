/* Test des hordes du sauvage : une partie démarre, une horde se lève, le héros brise son avant-garde,
   puis des hordes arrivent sans réponse (la zone recule, une Ressource perd ses routes, une défense tient), sans erreur JavaScript.
   Usage : node tv/tools/test-hordes.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
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
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.horde==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre avec MZ.horde',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 1. pôle envahisseur fixé par zone */
    const poles=await p.evaluate(()=>{const o={};for(const Z of MZ.ZN)if((Z.mod||Z.id)!=='RES')o[Z.id]=MZ.poleEnvahisseur(Z.id);return o});
    const v=Object.values(poles);
    ok('chaque zone a un pôle envahisseur',v.length>0&&v.every(x=>x===-1||x===1||x===2),JSON.stringify(v.reduce((a,x)=>(a[x]=(a[x]||0)+1,a),{})));
    ok('le pôle est déterministe',await p.evaluate(()=>MZ.ZN.every(Z=>MZ.poleEnvahisseur(Z.id)===MZ.poleEnvahisseur(Z.id))));
    const paisible=await p.evaluate(()=>Object.keys(CK).filter(k=>CK[k].paisible).length);
    ok('cartes de palier 7 du pôle paisible renforcées',paisible>0,paisible+' carte(s)');
    /* 2. une horde se lève et s'annonce */
    const h=await p.evaluate(()=>{const h=MZ.horde();return h&&{src:h.src,cible:h.cible,lvS:MZ.S.lv[h.src],lvC:MZ.S.lv[h.cible],own:MZ.S.own[h.cible],arrive:h.arrive,nc:MZ.S.nc}});
    ok('MZ.horde() lève une horde',!!h,JSON.stringify(h));
    if(h){
      ok('la source est au palier 7',Math.abs(h.lvS)===7);
      ok('la cible est à vous et plus faible de 2 paliers',h.own&&Math.abs(h.lvC)<=5);
      ok('arrivée annoncée dans quelques cycles',h.arrive-h.nc>=3,(h.arrive-h.nc)+' cycles');
      await p.waitForTimeout(300);
      const vu=await p.evaluate(()=>({toast:document.getElementById('t1').textContent,bandeau:(document.getElementById('bandeau')||{}).textContent||''}));
      ok('toast d\'annonce',/horde/i.test(vu.toast),vu.toast);
      ok('ligne « Menaces » dans le bandeau',/Menaces/.test(vu.bandeau));
      /* 3. le héros va à la Pierre de la zone visée et affronte l'avant-garde */
      await p.evaluate(c=>{MZ.tp(c)},h.cible);await p.waitForTimeout(800);
      await p.evaluate(()=>MZ.act('ok'));await p.waitForTimeout(400);
      const opt=await p.evaluate(()=>{const i=UI&&UI.opts.findIndex(o=>/avant-garde/.test(o.l));if(i>=0){UI.opts[i].go();return true}return false});
      ok('la Pierre propose d\'affronter l\'avant-garde',opt);
      await p.waitForTimeout(800);
      const cb=await p.evaluate(()=>MZ.CB&&{kind:MZ.CB.kind,horde:MZ.CB.horde,foes:MZ.CB.foes.map(m=>m.nom),zone:MZ.CB.Z.id});
      ok('combat contre l\'avant-garde',!!cb&&cb.kind==='horde'&&cb.horde===h.src&&cb.zone===h.cible,JSON.stringify(cb));
      const avant=await p.evaluate(s=>MZ.S.res[ZMANA[s]]||0,h.src);
      await p.evaluate(()=>{for(const m of MZ.CB.foes)m.pv=0;finSiFini()});await p.waitForTimeout(1800);
      const apres=await p.evaluate(s=>({res:MZ.S.res[ZMANA[s]]||0,horde:!!MZ.S.hordes[s],titre:document.getElementById('menu-t').textContent,bilan:MZ.S.hordesBilan}),h.src);
      ok('victoire : horde brisée',!apres.horde&&/disperse/.test(apres.titre),apres.titre);
      ok('butin : mana du type de la source',apres.res===avant+3,avant+' → '+apres.res);
      await p.evaluate(()=>toMonde());
    }
    /* 4. une horde qui passe : la zone à vous recule ; à 0 elle redevient sauvage */
    const r1=await p.evaluate(()=>{const cible=MZ.ZN.find(Z=>MZ.S.own[Z.id]&&(Z.mod||Z.id)!=='RES'&&Z.id!=='CIT').id;MZ.S.lv[cible]=1;
      const h=MZ.horde(null,cible);if(!h)return null;h.force=99;const r=MZ.hordeArrive(h.src);return{cible,lv:MZ.S.lv[cible],own:MZ.S.own[cible],passe:r&&r.passe,lignes:r&&r.lignes}});
    ok('horde sans réponse : la zone recule et redevient sauvage',!!r1&&r1.passe&&r1.lv===0&&!r1.own,JSON.stringify(r1));
    await p.waitForTimeout(800);
    ok('rapport à l\'écran',await p.evaluate(()=>MZ.mode==='menu'&&/forcée|tient/.test(document.getElementById('menu-t').textContent)));
    await p.evaluate(()=>toMonde());
    /* 5. Ressource : −1 niveau et routes coupées */
    const r2=await p.evaluate(()=>{const res=MZ.ZN.find(Z=>MZ.S.own[Z.id]&&(Z.mod||Z.id)==='RES'&&!cacheParBrume(Z.id)).id;MZ.S.lv[res]=2;MZ.S.routes=MZ.S.routes||{};MZ.S.routes[res]=[VOISINES[res][0]];
      const h=MZ.horde(null,res);if(!h)return null;h.force=99;const r=MZ.hordeArrive(h.src);return{res,lv:MZ.S.lv[res],routes:MZ.S.routes[res]||null,own:MZ.S.own[res],passe:r.passe}});
    ok('Ressource : −1 niveau, routes coupées',!!r2&&r2.passe&&r2.lv===1&&!r2.routes&&r2.own,JSON.stringify(r2));
    await p.evaluate(()=>toMonde());
    /* 6. une défense qui tient */
    const r3=await p.evaluate(()=>{const c=MZ.ZN.find(Z=>MZ.S.own[Z.id]&&(Z.mod||Z.id)!=='RES'&&MZ.S.lv[Z.id]).id,lv=MZ.S.lv[c];
      const h=MZ.horde(null,c);if(!h)return null;h.force=1;const D=MZ.hordeDefense(c);const r=MZ.hordeArrive(h.src);return{c,avant:lv,apres:MZ.S.lv[c],passe:r.passe,defense:D}});
    ok('la défense tient, la zone ne bouge pas',!!r3&&!r3.passe&&r3.avant===r3.apres,JSON.stringify(r3));
    await p.evaluate(()=>toMonde());
    /* 7. le cycle : colère qui mûrit, horde levée, arrivée résolue d'elle-même */
    const r4=await p.evaluate(()=>{const z=MZ.ZN.find(Z=>(Z.mod||Z.id)!=='RES'&&!MZ.S.own[Z.id]&&MZ.poleEnvahisseur(Z.id)!==2&&!MZ.S.hordes[Z.id]);const n=7*MZ.poleEnvahisseur(z.id);MZ.S.lv[z.id]=n;z.lvT=n;
      MZ.S.nc=Math.max(MZ.S.nc,HORDE_GRACE);for(let i=0;i<HORDE_MUR;i++)hordesCycle();return{src:z.id,h:MZ.S.hordes[z.id]||null}});
    ok('au palier 7 envahisseur, la colère mûrit puis la horde se lève',!!r4.h,JSON.stringify(r4));
    if(r4.h){await p.evaluate(s=>{MZ.S.nc=MZ.S.hordes[s].arrive},r4.src);await p.waitForTimeout(2000);
      ok('à l\'arrivée, la horde est résolue d\'elle-même',await p.evaluate(s=>!MZ.S.hordes[s],r4.src))}
    /* 8. au palier 7 paisible, pas de horde */
    const r5=await p.evaluate(()=>{const z=MZ.ZN.find(Z=>(Z.mod||Z.id)!=='RES'&&MZ.poleEnvahisseur(Z.id)!==2&&!MZ.S.hordes[Z.id]);const n=-7*MZ.poleEnvahisseur(z.id);MZ.S.lv[z.id]=n;
      for(let i=0;i<HORDE_MUR+1;i++)hordesCycle();return!!MZ.S.hordes[z.id]});
    ok('au palier 7 du pôle paisible, aucune horde',!r5);
  }
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des hordes : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des hordes : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des hordes : erreur',e);process.exit(1)});
