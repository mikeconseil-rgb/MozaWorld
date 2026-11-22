const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine='/home/user/mw/tv',out=process.argv[2];fs.mkdirSync(out,{recursive:true});
const zones=(process.argv[3]||'DON045,DON,ASS152,CIT,ANT,MAR,RES374,ANT120').split(',');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js')).toString()+
  ';(function(){const R=THREE.WebGLRenderer;THREE.WebGLRenderer=function(o){const r=new R(o);window.__R=r;return r};THREE.WebGLRenderer.prototype=R.prototype})();';
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1920,height:1080}});p.setDefaultTimeout(300000);
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto('file://'+path.join(racine,'index.html'));await p.waitForFunction(()=>window.MZ&&MZ.start);
  await p.screenshot({path:path.join(out,'titre-jeu.png')});
  await p.evaluate(()=>MZ.start());await p.waitForTimeout(3000);
  await p.evaluate(()=>MZ.tp('DON045'));await p.waitForTimeout(4000);await p.screenshot({path:path.join(out,'interface.png')});
  await p.evaluate(()=>MZ.combat('ANT','renc'));await p.waitForTimeout(3000);await p.keyboard.press('ArrowDown');await p.keyboard.press('Enter');await p.waitForTimeout(3500);
  await p.screenshot({path:path.join(out,'combat.png')});await p.keyboard.press('Escape');await p.waitForTimeout(300);
  await p.evaluate(()=>{if(MZ.CB&&typeof fuir==='function')fuir()}).catch(()=>{});
  await p.waitForTimeout(1500);
  await p.addStyleTag({content:'body *{visibility:hidden!important}canvas{visibility:visible!important}#mini{visibility:hidden!important}'});
  for(const id of zones){for(const lv of [-7,0,7]){await p.evaluate(([id,lv])=>{MZ.set(id,lv);MZ.tp(id);const Z=MZ.ZN.find(z=>z.id===id);const y=Math.atan2(Z.c[0]-MZ.P.x,Z.c[1]-MZ.P.z);MZ.P.yaw=y;MZ.P.face=y},[id,lv]);
      await p.waitForTimeout(3500);await p.screenshot({path:path.join(out,`${id}_${lv<0?'m7':lv>0?'p7':'0'}.png`)});process.stdout.write(id+lv+' ')}
    await p.evaluate(([id])=>MZ.set(id,0),[id]);}
  await nav.close()})().catch(e=>{console.error(e);process.exit(1)});
