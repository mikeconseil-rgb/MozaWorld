/* Test du voyage entre régions (20 nov., deuxième passe de cohérence) : une partie démarre dans la région d'origine,
   on y pose de l'état du monde (horde en marche, cycles), on voyage vers une région lointaine, on y fait tourner des cycles,
   puis on revient : rien ne doit se perdre (zones à vous, paquet, réserve, cycle, hordes) et aucune erreur JavaScript.
   Les autres tests ne voyagent jamais (le voyage automatique est coupé pour Playwright) ; celui-ci appelle voyagerRegion() lui-même.
   SANS_HORDE=1 saute la horde posée avant le départ (pour isoler un plantage dû aux hordes).
   Usage : node tv/tools/test-voyage.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)+' '+String(e.stack||'').split('\n').slice(1,4).join(' ').replace(/file:\S*index.html/g,'index.html')));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  const attendre=()=>p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&window.MZ.ZN.length>0,null,{timeout:60000}).then(()=>true,()=>false);
  /* l'état qui doit survivre à un voyage */
  const etat=()=>p.evaluate(()=>{const S=MZ.S;return{
    zones:MZ.ZN.length,region:REGION.c.map(Math.round),
    own:Object.keys(S.own||{}).filter(k=>S.own[k]).sort(),ownIci:MZ.ZN.filter(Z=>S.own[Z.id]).length,
    lv:Object.keys(S.lv||{}).filter(k=>S.lv[k]).sort().map(k=>k+':'+S.lv[k]).join(','),
    deck:(S.deck||[]).slice().sort().join(','),res:JSON.stringify(S.res),nc:S.nc,graine:S.graine,
    hordes:Object.keys(S.hordes||{}).sort().join(','),tess:typeof MZ.tesselles==='function'?JSON.stringify(MZ.tesselles()):'',
    epiques:MZ.citadellesEpiques().slice().sort().join(',')}});
  const voyager=async c=>{const charge=p.waitForEvent('load',{timeout:60000}).then(()=>true,()=>false);
    await p.evaluate(c=>{voyagerRegion(c,'jeu')},c).catch(()=>{});
    const r=await charge&&await attendre();await p.waitForTimeout(3000);return r&&await attendre()};
  await p.goto(page0);
  ok('la page démarre',await attendre());
  await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
  /* 1. de l'état du monde dans la région d'origine : quelques cycles et une horde en marche */
  const h=await p.evaluate(sans=>{for(let i=0;i<3;i++)MZ.cycle();if(sans)return{sans:true};const h=MZ.horde();return h&&{src:h.src,cible:h.cible}},!!process.env.SANS_HORDE);
  ok('une horde est en marche avant le voyage',!!h,JSON.stringify(h));
  await p.evaluate(()=>{if(typeof toMonde==='function'&&MZ.mode!=='monde')toMonde();MZ.pause()});
  const a=await etat();
  ok('région d\'origine : territoire de départ entier',a.own.length>=12&&a.ownIci===a.own.length,a.own.length+' zones à vous, '+a.zones+' zones chargées');
  /* 2. voyage vers une zone écrite à plus de 3 km de l'origine */
  const loin=await p.evaluate(()=>{const Z=ZW.filter(Z=>Z.logique&&Z.d&&Z.d.pret!==false&&Math.hypot(Z.c[0],Z.c[1])>3000).sort((x,y)=>Math.hypot(x.c[0],x.c[1])-Math.hypot(y.c[0],y.c[1]))[0];return Z&&{id:Z.id,c:Z.c}});
  ok('une zone lointaine existe',!!loin,loin&&loin.id);
  if(loin){
    ok('le voyage aboutit',await voyager(loin.c),erreurs.join(' | '));
    if(echec){console.log(etapes.join('\n'));console.log('\nTest du voyage : ÉCHEC ('+echec+').');await nav.close();process.exit(1)}
    const b=await etat();
    ok('la région lointaine est chargée',b.zones>5&&await p.evaluate(id=>MZ.ZN.some(Z=>Z.id===id),loin.id),b.zones+' zones, région '+b.region);
    /* les zones sauvages découvertes en arrivant reçoivent leur niveau : on vérifie seulement que les niveaux déjà connus n'ont pas bougé */
    ok('après le voyage, les niveaux déjà connus sont gardés',a.lv.split(',').every(x=>(','+b.lv+',').indexOf(','+x+',')>=0));
    for(const k of ['own','deck','res','nc','graine','hordes','tess'])ok('après le voyage, inchangé : '+k,JSON.stringify(a[k])===JSON.stringify(b[k]),JSON.stringify(a[k]).slice(0,80)+' → '+JSON.stringify(b[k]).slice(0,80));
    /* limite connue (décision 1 a du 20 nov. : le gameplay du monde reste dans la région de départ d'ici le 28) : on la note sans échouer */
    etapes.push((a.epiques===b.epiques?'OK    ':'NOTE  ')+'Citadelles épiques selon la région : '+a.epiques+' → '+b.epiques);
    /* 3. le monde tourne pendant qu'on est loin : cinq cycles, la horde arrive sur une zone qui n'est pas chargée */
    const loinCycles=await p.evaluate(()=>{try{for(let i=0;i<5;i++)MZ.cycle();return'ok'}catch(e){return String(e&&e.message||e)}});
    ok('cinq cycles loin du départ, sans exception',loinCycles==='ok',loinCycles);
    await p.waitForTimeout(800);
    await p.evaluate(()=>{if(typeof toMonde==='function'&&MZ.mode!=='monde')toMonde();MZ.pause()});
    const c=await etat();
    ok('loin du départ, le paquet est gardé',c.deck===a.deck);
    /* 4. retour dans la région d'origine */
    const hLoin=await p.evaluate(()=>Object.keys(MZ.S.hordes||{}).join(','));
    ok('le retour aboutit',await voyager([0,0]),'hordes en marche : '+(hLoin||'aucune')+' · '+erreurs.join(' | '));
    if(echec){console.log(etapes.join('\n'));console.log('\nTest du voyage : ÉCHEC ('+echec+').');await nav.close();process.exit(1)}
    const d=await etat();
    ok('retour : la région d\'origine est rechargée',d.region[0]===0&&d.region[1]===0&&d.zones===a.zones,d.zones+' zones');
    for(const k of ['own','deck','nc','hordes'])ok('au retour, pareil qu\'en partant de la région lointaine : '+k,JSON.stringify(c[k])===JSON.stringify(d[k]),JSON.stringify(c[k]).slice(0,80)+' → '+JSON.stringify(d[k]).slice(0,80));
    ok('au retour, vos zones sont toutes là',d.ownIci===d.own.length,d.ownIci+' sur '+d.own.length);
    ok('le cycle a avancé de cinq',d.nc===a.nc+5,a.nc+' → '+d.nc);
  }
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  console.log(echec?'\nTest du voyage : ÉCHEC ('+echec+').':'\nTest du voyage : tout passe.');
  process.exit(echec?1:0);
})().catch(e=>{console.log(etapes.join('\n'));console.error(String(e).slice(0,300));process.exit(1)});
