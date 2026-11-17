// node capture.js <index.html> <outdir> <zones> <levels> <view: spawn|f,pitch,dist>
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const [,,html,out,zs,lvs,view]=process.argv;fs.mkdirSync(out,{recursive:true});
const zones=(zs||'CIT,DON,RES,ANT,MAR').split(',');const levels=(lvs||'-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7').split(',').map(Number);
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:{width:800,height:450},deviceScaleFactor:1});p.setDefaultTimeout(300000);
p.on('pageerror',e=>console.log('PAGEERR',e.message));
await p.route(/three\.min\.js/,r=>r.fulfill({path:path.join(__dirname,'..','three.min.js'),contentType:'application/javascript'}));
await p.setContent('<!doctype html><html><head><meta charset="utf-8"></head><body>'+fs.readFileSync(html,'utf8')+'</body></html>',{waitUntil:'load',timeout:300000});
await p.waitForFunction(()=>window.MZ,null,{timeout:180000});
await p.evaluate(()=>{MZ.start();document.body.classList.add('nohud')});
for(const z of zones){
  for(const lv of levels){await p.evaluate(([z,lv,view])=>{MZ.set(z,lv);if(!view||view==='spawn')MZ.tp(z);else{const a=view.split(',').map(Number);MZ.view(z,a[0],a[1],a[2])}},[z,lv,view]);
    await p.waitForTimeout(2500);await p.screenshot({path:`${out}/${z}_${lv}.png`});process.stdout.write(`${z}${lv} `)}}
await b.close()})();
