/* Test de fumée : la page démarre, une partie se lance, un combat s'ouvre et un tour se joue, sans erreur JavaScript.
   Usage : node tv/tools/test-fumee.js   (depuis la racine du dépôt ; Playwright et Chromium doivent être installés)
   Three.js est servi depuis tv/android/assets/three.min.js, pour ne pas dépendre du réseau. */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  /* 1. la page publiée doit être l'assemblage exact des sources (sinon : oubli de « sh tv/build.sh ») */
  const build=fs.readFileSync(path.join(racine,'build.sh'),'utf8'),m=build.match(/cat (src\/carte\.js[^\n]*)/);
  if(m){const html=fs.readFileSync(path.join(racine,'index.html'),'utf8');
    const manque=m[1].trim().split(/\s+/).filter(f=>html.indexOf(fs.readFileSync(path.join(racine,f),'utf8').trim().slice(0,400))<0);
    ok('index.html à jour avec src/',manque.length===0,manque.length?'à reconstruire, différent de '+manque.join(', '):'')}
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  /* 2. la page démarre */
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre (window.MZ existe)',pret);
  if(pret){
    /* 3. une partie se lance */
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    const zones=await p.evaluate(()=>window.MZ.ZN.length);
    ok('une partie se lance',zones>=5,zones+' zones');
    /* 4. un combat s'ouvre dans la première zone */
    const id=await p.evaluate(()=>{const z=window.MZ.ZN[0].id;window.MZ.combat(z,'renc');return z});await p.waitForTimeout(1200);
    const c=await p.evaluate(()=>window.MZ.CB?{main:window.MZ.CB.main.length,ennemis:window.MZ.CB.foes?window.MZ.CB.foes.length:-1,tour:window.MZ.CB.tour}:null);
    ok('un combat s\'ouvre ('+id+')',!!c&&c.main>0,c?JSON.stringify(c):'pas de combat');
    /* 5. on joue : valider la carte choisie, puis finir le tour (↓ puis Entrée), trois fois */
    if(c){for(let i=0;i<3&&await p.evaluate(()=>!!window.MZ.CB);i++){
        await p.keyboard.press('Enter');await p.waitForTimeout(500);await p.keyboard.press('Enter');await p.waitForTimeout(500);
        await p.keyboard.press('ArrowDown');await p.waitForTimeout(200);await p.keyboard.press('Enter');await p.waitForTimeout(2500)}
      const fin=await p.evaluate(()=>window.MZ.CB?window.MZ.CB.tour:'combat terminé');
      ok('le combat avance',fin==='combat terminé'||fin>c.tour,'tour '+c.tour+' → '+fin)}
    /* 6. le menu s'ouvre */
    await p.keyboard.press('Escape');await p.waitForTimeout(400);
    ok('la page répond encore',await p.evaluate(()=>typeof window.MZ.mode==='string'))}
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest de fumée : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest de fumée : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test de fumée : erreur',e);process.exit(1)});
