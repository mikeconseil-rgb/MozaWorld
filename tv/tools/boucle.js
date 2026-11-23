/* Banc d'essai des boucles graphiques (19 nov.) : captures et mesures pour juger une version.
   Usage (depuis la racine du dépôt, après « sh tv/build.sh ») :
     node tv/tools/boucle.js <dossier de sortie> [zones séparées par des virgules]
   Produit : planche-<zone>.png (−7 | 0 | +7, sans interface, vue depuis la Pierre vers le centre de la zone),
   interface.png (exploration avec l'interface), combat.png (un combat en cours), mesures.json
   (temps de chargement, triangles et appels de dessin par image — vraiment une seule depuis la boucle 5 —, ombres comprises, dans chacune des zones des planches ;
   boucle 3, 20 nov. 2026 : avant, trois zones fixes CIT, RES227, ASS152).
   Rendu logiciel (SwiftShader) : les chiffres servent à comparer deux versions entre elles, pas à prédire la Xbox. */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),out=path.resolve(process.argv[2]||'boucle-sortie');fs.mkdirSync(out,{recursive:true});
const zones=(process.argv[3]||'CIT,DON,ANT,MAR,DON045,ASS152,RES374,ANT120').split(',');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js')).toString()+
  ';(function(){const R=THREE.WebGLRenderer;THREE.WebGLRenderer=function(o){const r=new R(o);window.__R=r;return r};THREE.WebGLRenderer.prototype=R.prototype})();';
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});p.setDefaultTimeout(240000);const err=[];p.on('pageerror',e=>err.push(String(e.message)));
  /* boucle 5 (23 nov. 2026) : hasard rejouable. Les bêtes, les passants et la météo tirent Math.random : d'un lancement à l'autre,
     MAR passait de 280 à 339 appels selon ce qui entrait dans le champ. Le banc fixe la graine (mulberry32) ; le jeu n'est pas touché. */
  await p.addInitScript(()=>{let a=0x5eed1234;Math.random=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}});
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  const t0=Date.now();await p.goto('file://'+path.join(racine,'index.html'));await p.waitForFunction(()=>window.MZ&&MZ.start);const charge=Date.now()-t0;
  /* boucle 5 (23 nov. 2026) : la baisse automatique de qualité (main.js, autoQ) suivait les images par seconde du rendu logiciel :
     selon la charge de la machine, les mesures tombaient en « Belle » ou en « Équilibrée » (CIT 155 ou 197 appels d'un lancement
     à l'autre). Le banc la coupe : tout est mesuré et capturé dans la qualité de départ (« Belle » sur le web, comme sur la Xbox). */
  await p.evaluate(()=>MZ.start());const qualite=await p.evaluate(()=>{try{autoQ=false}catch(_){}try{return QUAL().nom}catch(_){return '?'}});
  await p.waitForTimeout(2500);
  /* mesures */
  const mes={chargement_ms:charge,qualite,zones:{}};
  /* boucle 5 (23 nov. 2026) : mesure PAR IMAGE. Avant, la remise à zéro tombait entre deux images et l'on lisait après deux rAF :
     les chiffres valaient deux images (×2). Maintenant : un rAF pour se caler sur la boucle du jeu, remise à zéro, UN rAF, lecture.
     Les rAF du jeu sont inscrits avant les nôtres : chaque rAF de la mesure contient exactement une image du jeu.
     Après la téléportation, le décor arrive par petits lots, image après image (CIT : 167 appels, puis 233 dix images plus tard) :
     en rendu logiciel, une attente en secondes laisse un nombre d'images variable (écarts de 20 % d'un lancement à l'autre).
     On compte donc en images : 1,5 s pour la caméra, puis l'on mesure image par image jusqu'à ce que les 12 dernières ne
     s'écartent plus de 2 % (au plus 240 images), et l'on rend la médiane de ces 12 images.
     Pendant une version, on garde aussi l'ancienne lecture sur deux images (anciens_x2) pour comparer avec les boucles 1 à 5. */
  for(const id of zones)mes.zones[id]=await p.evaluate(async id=>{MZ.tp(id);await new Promise(r=>setTimeout(r,1500));const i=__R.info,raf=()=>new Promise(r=>requestAnimationFrame(r));
    const med=a=>a.slice().sort((x,y)=>x-y)[a.length>>1],T=[],A=[];i.autoReset=false;await raf();let n=0;
    for(;n<240;n++){i.reset();await raf();T.push(i.render.triangles);A.push(i.render.calls);
      if(T.length>=12){const t=T.slice(-12),a=A.slice(-12);if(Math.max(...a)-Math.min(...a)<=.02*Math.max(...a)&&Math.max(...t)-Math.min(...t)<=.02*Math.max(...t))break}}
    i.reset();await raf();await raf();const x2={triangles:i.render.triangles,appels:i.render.calls};i.autoReset=true;
    return{triangles:med(T.slice(-12)),appels:med(A.slice(-12)),par_image:true,images_attendues:n+1,anciens_x2:x2}},id);
  /* interface d'exploration */
  await p.evaluate(()=>MZ.tp('DON045'));await p.waitForTimeout(3000);await p.screenshot({path:path.join(out,'interface.png')});
  /* combat */
  await p.evaluate(()=>MZ.combat('ANT','renc'));await p.waitForTimeout(2500);await p.keyboard.press('ArrowDown');await p.keyboard.press('Enter');await p.waitForTimeout(3000);
  await p.screenshot({path:path.join(out,'combat.png')});await p.keyboard.press('Escape');await p.waitForTimeout(300);
  await p.evaluate(()=>{if(MZ.CB&&typeof fuir==='function')fuir()}).catch(()=>{});
  /* planches −7 | 0 | +7 sans interface */
  await p.addStyleTag({content:'body *{visibility:hidden!important}canvas{visibility:visible!important}#mini{visibility:hidden!important}'});
  for(const id of zones){const ims=[];
    for(const lv of [-7,0,7]){await p.evaluate(([id,lv])=>{MZ.set(id,lv);MZ.tp(id);const Z=MZ.ZN.find(z=>z.id===id);const y=Math.atan2(Z.c[0]-MZ.P.x,Z.c[1]-MZ.P.z);MZ.P.yaw=y;MZ.P.face=y},[id,lv]);
      await p.waitForTimeout(3000);ims.push((await p.screenshot()).toString('base64'))}
    await p.evaluate(([id])=>MZ.set(id,0),[id]);
    /* assemble les trois images côte à côte dans la page elle-même (pas de dépendance d'image côté Node) */
    const png=await p.evaluate(async ims=>{const c=document.createElement('canvas');c.width=1920;c.height=360;const g=c.getContext('2d');
      for(let i=0;i<3;i++){const im=new Image();im.src='data:image/png;base64,'+ims[i];await im.decode();g.drawImage(im,i*640,0,640,360)}
      g.fillStyle='#000a';g.font='bold 22px sans-serif';['−7','0','+7'].forEach((t,i)=>{g.fillRect(i*640+8,8,60,32);g.fillStyle='#fff';g.fillText(t,i*640+18,32);g.fillStyle='#000a'});
      return c.toDataURL('image/png').split(',')[1]},ims);
    fs.writeFileSync(path.join(out,'planche-'+id+'.png'),Buffer.from(png,'base64'));process.stdout.write(id+' ')}
  mes.erreurs=err.slice(0,5);fs.writeFileSync(path.join(out,'mesures.json'),JSON.stringify(mes,null,1));
  console.log('\n'+JSON.stringify(mes));await nav.close()})().catch(e=>{console.error(e);process.exit(1)});
