/* Banc d'essai des biomes (zones-biomes, 19 nov.) : planches −7 | 0 | +7 d'une tuile dont on change le biome (et la culture) pour l'essai,
   sans toucher à carte.js : la page est recopiée en mémoire avec CARTE_PLUS retouché.
   Usage (depuis la racine du dépôt, après « sh tv/build.sh ») :
     node tv/tools/biomes.js <dossier de sortie> <ID=Biome[/Culture]>[,<ID=Biome[/Culture]>…] [--mesures]
   ex. : node tv/tools/biomes.js /tmp/b RES021=Volcan,ASS155=Volcan/Inca
   Produit planche-<ID>-<biome>.png ; avec --mesures, mesures.json (triangles et appels de dessin par image, comme boucle.js). */
const path=require('path'),fs=require('fs'),os=require('os');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),out=path.resolve(process.argv[2]||'biomes-sortie');fs.mkdirSync(out,{recursive:true});
const essais=(process.argv[3]||'').split(',').filter(Boolean).map(s=>{const[id,r]=s.split('=');const[biome,culture]=(r||'').split('/');return{id,biome,culture}});
const mesurer=process.argv.includes('--mesures');
let html=fs.readFileSync(path.join(racine,'index.html'),'utf8');
for(const e of essais){const re=new RegExp('(\\{"id": "'+e.id+'"[^}]*?"biome": ")[^"]*(", "mana": "[^"]*", "culture": ")([^"]*)');
  if(!re.test(html))throw new Error('tuile introuvable : '+e.id);html=html.replace(re,(m,a,b,c)=>a+(e.biome||'')+b+(e.culture||c))}
const tmp=path.join(os.tmpdir(),'mz-biomes-'+process.pid+'.html');fs.writeFileSync(tmp,html);
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js')).toString()+
  ';(function(){const R=THREE.WebGLRenderer;THREE.WebGLRenderer=function(o){const r=new R(o);window.__R=r;return r};THREE.WebGLRenderer.prototype=R.prototype;const C=THREE.PerspectiveCamera;THREE.PerspectiveCamera=function(...a){const c=new C(...a);if(!window.__C)window.__C=c;return c};THREE.PerspectiveCamera.prototype=C.prototype})();';
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});p.setDefaultTimeout(240000);const err=[];p.on('pageerror',e=>err.push(String(e.message)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto('file://'+tmp);await p.waitForFunction(()=>window.MZ&&MZ.start);
  await p.evaluate(()=>MZ.start());await p.waitForTimeout(2500);
  const mes={zones:{}};
  if(mesurer)for(const id of ['CIT','RES227','ASS152',...essais.map(e=>e.id)])mes.zones[id]=await p.evaluate(async id=>{MZ.tp(id);await new Promise(r=>setTimeout(r,1800));const i=__R.info;i.autoReset=false;i.reset();
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const o={triangles:i.render.triangles,appels:i.render.calls};i.autoReset=true;return o},id);
  await p.addStyleTag({content:'body *{visibility:hidden!important}canvas{visibility:visible!important}#mini{visibility:hidden!important}'});
  for(const e of essais){const id=e.id,ims=[];await p.evaluate(id=>MZ.tp(id),id);   /* la caméra rejoint le héros avant la première vue (en rendu logiciel, elle voyage lentement) */
    await p.waitForFunction(()=>Math.hypot(__C.position.x-MZ.P.x,__C.position.z-MZ.P.z)<16,null,{timeout:60000}).catch(()=>{});await p.waitForTimeout(1000);
    for(const lv of [-7,0,7]){await p.evaluate(([id,lv])=>{MZ.set(id,lv);MZ.tp(id);const Z=MZ.ZN.find(z=>z.id===id);const y=Math.atan2(Z.c[0]-MZ.P.x,Z.c[1]-MZ.P.z);MZ.P.yaw=y;MZ.P.face=y},[id,lv]);
      await p.waitForFunction(()=>Math.hypot(__C.position.x-MZ.P.x,__C.position.z-MZ.P.z)<16,null,{timeout:60000}).catch(()=>{});await p.waitForTimeout(2500);ims.push((await p.screenshot()).toString('base64'))}
    await p.evaluate(([id])=>MZ.set(id,0),[id]);
    const titre=await p.evaluate(id=>{const Z=MZ.ZN.find(z=>z.id===id);return Z.d.nom+' · '+Z.d.biome+' · '+Z.d.culture+' · '+Z.d.mana+' ('+id+')'},id);
    const png=await p.evaluate(async([ims,titre])=>{const c=document.createElement('canvas');c.width=1920;c.height=400;const g=c.getContext('2d');g.fillStyle='#111';g.fillRect(0,0,1920,400);
      for(let i=0;i<3;i++){const im=new Image();im.src='data:image/png;base64,'+ims[i];await im.decode();g.drawImage(im,i*640,40,640,360)}
      g.fillStyle='#fff';g.font='bold 22px sans-serif';g.fillText(titre,12,28);
      g.fillStyle='#000a';['−7','0','+7'].forEach((t,i)=>{g.fillRect(i*640+8,48,60,32);g.fillStyle='#fff';g.fillText(t,i*640+18,72);g.fillStyle='#000a'});
      return c.toDataURL('image/png').split(',')[1]},[ims,titre]);
    const nom='planche-'+id+'-'+(e.biome||'orig').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^A-Za-z]+/g,'-')+'.png';
    fs.writeFileSync(path.join(out,nom),Buffer.from(png,'base64'));process.stdout.write(nom+' ')}
  mes.erreurs=err.slice(0,8);if(mesurer)fs.writeFileSync(path.join(out,'mesures.json'),JSON.stringify(mes,null,1));
  console.log('\n'+JSON.stringify(mes));await nav.close();fs.unlinkSync(tmp)})().catch(e=>{console.error(e);try{fs.unlinkSync(tmp)}catch(_){}process.exit(1)});
