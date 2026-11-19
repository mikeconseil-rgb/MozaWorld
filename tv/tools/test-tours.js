/* Test des tours de guet : une partie démarre, le héros bâtit une tour à la Pierre d'une Ressource (paiement en mana),
   la défense contre les hordes monte de 2 pour la zone et ses voisines (sans cumul), une horde qui vise une zone couverte arrive plus tard,
   la tour tombe quand une horde passe sur sa zone, quand la zone est perdue, et à la mort du héros ; sans erreur JavaScript.
   Usage : node tv/tools/test-tours.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
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
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.tour==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre avec MZ.tour',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 1. à la Pierre d'une Ressource à vous (niveau 1), le menu propose de bâtir une tour, payée en mana */
    const res=await p.evaluate(()=>{const Z=MZ.ZN.find(Z=>(Z.mod||Z.id)==='RES'&&MZ.S.own[Z.id]&&MZ.S.act[Z.id]&&MZ.S.lv[Z.id]>=1&&!(typeof cacheParBrume==='function'&&cacheParBrume(Z.id))&&VOISINES[Z.id].some(v=>MZ.S.own[v]&&(ZB[v].mod||v)!=='RES'));return Z&&Z.id});
    ok('une Ressource de départ à vous, au niveau 1',!!res,res);
    await p.evaluate(id=>{MZ.S.res[ZMANA[id]]=5;MZ.tp(id)},res);await p.waitForTimeout(800);
    await p.evaluate(()=>MZ.act('ok'));await p.waitForTimeout(400);
    const opt=await p.evaluate(()=>{const o=UI&&UI.opts.find(o=>/Bâtir une tour de guet/.test(o.l));return o?{d:o.d,off:!!o.off}:null});
    ok('la Pierre propose « Bâtir une tour de guet »',!!opt&&!opt.off,JSON.stringify(opt));
    const bati=await p.evaluate(id=>{const o=UI.opts.find(o=>/Bâtir une tour de guet/.test(o.l));o.go();
      return{tour:!!MZ.S.tours[id],mana:MZ.S.res[ZMANA[id]],ligne:UI.opts.some(o=>o.l==='Tour de guet'),plus:UI.opts.some(o=>/Bâtir/.test(o.l))}},res);
    ok('la tour est bâtie et payée (5 → 2)',bati.tour&&bati.mana===2,JSON.stringify(bati));
    ok('la Pierre montre la tour, plus l\'option de bâtir',bati.ligne&&!bati.plus);
    await p.evaluate(()=>toMonde());await p.waitForTimeout(1200);
    ok('une petite tour 3D près de la Pierre',await p.evaluate(id=>!!TOURS3D[id]&&TOURS3D[id].parent===scene,res));
    /* 2. défense : +2 sur la zone et ses voisines à vous, sans cumul */
    const def=await p.evaluate(id=>{const v=VOISINES[id].find(v=>MZ.S.own[v]&&(ZB[v].mod||v)!=='RES'),loin=MZ.ZN.find(Z=>MZ.S.own[Z.id]&&Z.id!==id&&VOISINES[id].indexOf(Z.id)<0&&!VOISINES[Z.id].some(w=>MZ.S.tours[w]));
      const d1=MZ.hordeDefense(v);const r={v,zone:MZ.defenseTours(id).bonus,voisine:MZ.defenseTours(v).bonus,loin:loin?MZ.defenseTours(loin.id).bonus:null,partie:d1.parts.some(p=>/tour de guet/.test(p[0])&&p[1]===2)};
      const t0=d1.total;const v2=VOISINES[v].find(w=>w!==id&&MZ.S.own[w]&&!MZ.S.tours[w]&&!empecheTour(w));if(v2)MZ.tour(v2);r.v2=v2;r.cumul=MZ.hordeDefense(v).total-t0;return r},res);
    ok('défense +2 sur la zone de la tour et sa voisine',def.zone===2&&def.voisine===2&&def.partie,JSON.stringify(def));
    ok('pas de défense hors de portée',def.loin===null||def.loin===0,String(def.loin));
    ok('pas de cumul de deux tours',!def.v2||def.cumul===0,JSON.stringify(def));
    /* 3. préavis : une horde qui vise une zone couverte arrive 2 cycles plus tard */
    const pre=await p.evaluate(id=>{const h=MZ.horde(null,id);return h&&{delai:h.arrive-h.nee,tour:h.tour,t3:document.getElementById('t3').textContent,greniers:typeof loi==='function'&&!!loi('ASS150')}},res);
    ok('la horde vers la zone couverte arrive 2 cycles plus tard',!!pre&&pre.delai===HORDE_DELAI_TEST(pre.greniers)+2,JSON.stringify(pre));
    ok('l\'annonce cite la tour de guet',!!pre&&/tour de guet/.test(pre.t3),pre&&pre.t3);
    /* 4. la horde passe sur la zone : la tour tombe */
    const pas=await p.evaluate(id=>{const src=Object.keys(MZ.S.hordes).find(s=>MZ.S.hordes[s].cible===id);MZ.S.hordes[src].force=99;const r=MZ.hordeArrive(src);return{passe:r&&r.passe,tour:!!MZ.S.tours[id],lignes:r&&r.lignes}},res);
    ok('une horde qui passe abat la tour',pas.passe&&!pas.tour&&pas.lignes.some(l=>/abat la tour/.test(l)),JSON.stringify(pas));
    await p.evaluate(()=>toMonde());await p.waitForTimeout(1200);
    ok('la tour 3D disparaît avec elle',await p.evaluate(id=>!TOURS3D[id],res));
    /* 5. zone perdue : la tour tombe */
    const perdue=await p.evaluate(()=>{const id=MZ.ZN.find(Z=>(Z.mod||Z.id)==='DON'&&MZ.S.own[Z.id]&&!MZ.S.tours[Z.id]).id;MZ.tour(id);const avant=!!MZ.S.tours[id];MZ.S.own[id]=false;return{id,avant}});
    await p.waitForFunction(id=>!MZ.S.tours[id],perdue.id,{timeout:6000}).catch(()=>{});
    const apres=await p.evaluate(id=>!!MZ.S.tours[id],perdue.id);
    ok('zone perdue : la tour tombe',perdue.avant&&!apres,JSON.stringify(perdue));
    await p.evaluate(id=>{MZ.S.own[id]=true},perdue.id);
    /* 6. une zone qui ne peut pas bâtir : Antre ; une Ressource au niveau 0 */
    const non=await p.evaluate(()=>{const a=MZ.ZN.find(Z=>(Z.mod||Z.id)==='ANT'&&MZ.S.own[Z.id]);return a?{raison:empecheTour(a.id),test:MZ.tour(a.id),tour:!!MZ.S.tours[a.id]}:null});
    ok('un Antre ne bâtit pas de tour, même par MZ.tour',!!non&&!!non.raison&&!non.test&&!non.tour,JSON.stringify(non));
    /* 7. la minicarte se dessine avec des tours */
    await p.evaluate(()=>MZ.tour());await p.waitForTimeout(600);
    ok('minicarte dessinée sans erreur',erreurs.length===0,erreurs.join(' | '));
    /* 8. sauvegarde : S.tours persiste */
    const sauve=await p.evaluate(()=>{save();const o=JSON.parse(localStorage.getItem('mz-tv-1'));return Object.keys(o.tours||{}).length});
    ok('les tours sont dans la sauvegarde',sauve>0,sauve+' tour(s)');
    /* 9. mort du héros : toutes les tours tombent */
    const m=await p.evaluate(()=>{mort();return Object.keys(MZ.S.tours).length});
    ok('à la mort du héros, les tours tombent',m===0,String(m));
    await p.evaluate(()=>toMonde());await p.waitForTimeout(1200);
    ok('plus aucune tour 3D',await p.evaluate(()=>Object.keys(TOURS3D).length===0));
  }
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des tours de guet : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des tours de guet : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des tours de guet : erreur',e);process.exit(1)});
function HORDE_DELAI_TEST(greniers){return 3*(greniers?2:1)}
