/* Banc d'essai des boucles graphiques (19 nov.) : captures et mesures pour juger une version.
   Usage (depuis la racine du dépôt, après « sh tv/build.sh ») :
     node tv/tools/boucle.js <dossier de sortie> [zones séparées par des virgules]
   Produit : planche-<zone>.png (−7 | 0 | +7, sans interface, vue depuis la Pierre vers le centre de la zone),
   interface.png (exploration avec l'interface), combat.png (un combat en cours), mesures.json
   (temps de chargement, triangles et appels de dessin par image, ombres comprises, dans trois zones).
   Rendu logiciel (SwiftShader) : les chiffres servent à comparer deux versions entre elles, pas à prédire la Xbox. */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),out=path.resolve(process.argv[2]||'boucle-sortie');fs.mkdirSync(out,{recursive:true});
const zones=(process.argv[3]||'CIT,DON,ANT,MAR,DON045,ASS152,RES374,ANT120').split(',');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js')).toString()+
  ';(function(){const R=THREE.WebGLRenderer;THREE.WebGLRenderer=function(o){const r=new R(o);window.__R=r;return r};THREE.WebGLRenderer.prototype=R.prototype})();';
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});p.setDefaultTimeout(240000);const err=[];p.on('pageerror',e=>err.push(String(e.message)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  const t0=Date.now();await p.goto('file://'+path.join(racine,'index.html'));await p.waitForFunction(()=>window.MZ&&MZ.start);const charge=Date.now()-t0;
  await p.evaluate(()=>MZ.start());await p.waitForTimeout(2500);
  /* mesures */
  const mes={chargement_ms:charge,zones:{}};
  for(const id of ['CIT','RES227','ASS152'])mes.zones[id]=await p.evaluate(async id=>{MZ.tp(id);await new Promise(r=>setTimeout(r,1800));const i=__R.info;i.autoReset=false;i.reset();
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const o={triangles:i.render.triangles,appels:i.render.calls};i.autoReset=true;return o},id);
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
