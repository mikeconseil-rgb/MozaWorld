/* Test d'endurance (21 nov., fil « Corriger les plantages fréquents du jeu ») : une longue session qui traverse beaucoup de zones,
   change des niveaux, ouvre et ferme des combats, et voyage entre régions. On relève la mémoire JavaScript, les objets de la carte
   graphique (géométries, textures), le nombre d'objets de la scène et les nœuds du DOM : rien ne doit grossir sans fin.
   Usage : node tv/tools/test-endurance.js [tours=120] [voyages=3]   (depuis la racine du dépôt, après « sh tv/build.sh ») */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html')+(process.env.XBOX?'?xbox=1':'');   /* XBOX=1 : sol allégé, comme sur la console */
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const TOURS=+(process.argv[2]||120),VOY=+(process.argv[3]||3);
const etapes=[];let echec=null;const ok=(n,c,d)=>{etapes.push((c?'OK    ':'ÉCHEC ')+n+(d?' : '+d:''));if(!c&&!echec)echec=n};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--js-flags=--expose-gc','--enable-precise-memory-info']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  p.on('crash',()=>{console.log('PAGE PLANTÉE (crash du moteur de rendu)')});const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)+' '+String(e.stack||'').split('\n').slice(1,3).join(' ').replace(/file:\S*index.html/g,'')));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  const cdp=await p.context().newCDPSession(p);await cdp.send('Performance.enable');
  const attendre=()=>p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&window.MZ.ZN.length>0,null,{timeout:90000}).then(()=>true,()=>false);
  const mesure=async()=>{await p.evaluate(()=>{if(window.gc)gc()});
    const m=Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(x=>[x.name,x.value]));
    const r=await p.evaluate(()=>{let o=0;const gs=new Set();scene.traverse(x=>{o++;if(x.geometry)gs.add(x.geometry)});const i=renderer.info;return{orph:Math.max(0,i.memory.geometries-gs.size),geo:i.memory.geometries,tex:i.memory.textures,prog:(i.programs||[]).length,obj:o,
      ls:Object.keys(localStorage).reduce((s,k)=>s+k.length+(localStorage.getItem(k)||'').length,0)}});
    return{heap:Math.round(m.JSHeapUsedSize/1048576),dom:m.Nodes,ecout:m.JSEventListeners,...r}};
  const ligne=(t,x)=>console.log(t.padEnd(16),'tas',x.heap+' Mo','DOM',x.dom,'écouteurs',x.ecout,'géom',x.geo,'hors scène',x.orph,'tex',x.tex,'prog',x.prog,'objets',x.obj,'sauvegarde',Math.round(x.ls/1024)+' Ko');
  await p.goto(page0);ok('la page démarre',await attendre());
  await p.evaluate(()=>{try{localStorage.clear()}catch(_){};MZ.start()});await p.waitForTimeout(2000);
  const serie=[];let m0=await mesure();ligne('départ',m0);serie.push(m0);
  const base=[];
  for(let v=0;v<=VOY;v++){
    /* tour de chauffe : chaque zone vue une fois (la carte graphique reçoit ses objets la première fois qu'ils sont dessinés) */
    const nz=await p.evaluate(()=>MZ.ZN.filter(Z=>SPOTS[Z.id]).length);
    for(let i=0;i<nz;i++){await p.evaluate(i=>{const ids=MZ.ZN.filter(Z=>SPOTS[Z.id]).map(Z=>Z.id);MZ.tp(ids[i])},i);await p.waitForTimeout(150)}
    const b0=await mesure();ligne('région '+v+' chauffée',b0);base.push(b0);
    for(let t=0;t<TOURS;t++){
      await p.evaluate(t=>{const ids=MZ.ZN.filter(Z=>SPOTS[Z.id]).map(Z=>Z.id),id=ids[(t*7919)%ids.length];
        try{if(MZ.CB)fermerCombat();if(typeof toMonde==='function'&&MZ.mode!=='monde')toMonde()}catch(_){}
        MZ.tp(id);
        if(t%3===0){const lv=((t*13)%15)-7;try{MZ.set(id,lv)}catch(e){console.error(e)}}
        if(t%5===0){try{MZ.combat(id,'renc')}catch(e){}}
        if(t%11===0&&MZ.cycle)try{MZ.cycle()}catch(_){}},t);
      await p.waitForTimeout(t%5===0?700:350);
      if(t%5===0)await p.evaluate(()=>{try{if(MZ.CB)finCombat(Math.random()<.5)}catch(_){};try{closeUI&&closeUI()}catch(_){};try{if(typeof toMonde==='function')toMonde()}catch(_){}});
      if((t+1)%Math.max(1,Math.floor(TOURS/4))===0){const x=await mesure();ligne('région '+v+' tour '+(t+1),x);serie.push(x)}}
    if(v<VOY){const c=await p.evaluate(v=>{const L=ZW.filter(Z=>Z.d&&Z.d.pret!==false&&Math.hypot(Z.c[0],Z.c[1])>2500);const Z=L[(v*37+11)%L.length];return Z&&Z.c},v);
      if(!c)break;const charge=p.waitForEvent('load',{timeout:90000}).then(()=>true,()=>false);
      await p.evaluate(c=>voyagerRegion(c,'jeu'),c).catch(()=>{});const arrive=await charge&&await attendre();ok('voyage '+(v+1),arrive,arrive?'':[...new Set(erreurs)].slice(0,3).join(' | '));
      if(!arrive){await nav.close();console.log('\n'+etapes.join('\n'));console.log('\nTest d\'endurance : ÉCHEC (voyage '+(v+1)+')');process.exit(1)}await p.waitForTimeout(3000);
      const x=await mesure();ligne('après voyage '+(v+1),x);serie.push(x)}}
  /* changer la qualité d'image deux tours complets : aucun shader ne doit être recompilé (écran noir sur Xbox, 21 nov.) */
  const progAvant=(await mesure()).prog;
  for(let i=0;i<2*4;i++){await p.evaluate(()=>{QI=(QI+1)%QUALS.length;resize()});await p.waitForTimeout(600)}
  const progApres=(await mesure()).prog;
  ok('changer la qualité ne recompile pas les shaders',progApres-progAvant<=2,progAvant+' → '+progApres+' programmes');
  /* croissance dans une même région : on compare le premier et le dernier relevé de la dernière région */
  const fin=serie[serie.length-1],debut=base[base.length-1];
  /* la carte graphique reçoit les objets d'une zone la première fois qu'ils sont dessinés : le nombre de géométries monte
     pendant qu'on découvre la région. Une fuite, ce sont des géométries envoyées puis retirées de la scène sans être libérées. */
  ok('aucune géométrie perdue (hors scène)',serie.every(x=>x.orph<=20),serie.map(x=>x.orph).join(','));
  ok('textures stables dans une région',fin.tex-debut.tex<=10,debut.tex+' → '+fin.tex);
  ok('objets de scène stables',fin.obj-debut.obj<=200,debut.obj+' → '+fin.obj);
  ok('DOM borné',serie.every(x=>x.dom<5000),'max '+Math.max(...serie.map(x=>x.dom)));
  ok('aucune erreur JavaScript',erreurs.length===0,[...new Set(erreurs)].slice(0,4).join(' | '));
  await nav.close();console.log('\n'+etapes.join('\n'));
  if(echec){console.log('\nTest d\'endurance : ÉCHEC ('+echec+')');process.exit(1)}console.log('\nTest d\'endurance : tout passe.')
})().catch(e=>{console.error(etapes.join('\n'));console.error('erreur',e);process.exit(1)});
