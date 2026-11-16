// node styles-capture.js <index.html> <outdir> : planches des styles par zone (avec et sans style, et vue de frontière)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const [,,html,out]=process.argv;fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:{width:800,height:450},deviceScaleFactor:1});p.setDefaultTimeout(300000);
p.on('pageerror',e=>console.log('PAGEERR',e.message));
await p.route(/three\.min\.js/,r=>r.fulfill({path:path.join(__dirname,'..','three.min.js'),contentType:'application/javascript'}));
await p.setContent('<!doctype html><html><head><meta charset="utf-8"><style>.hud,.toast{display:none!important}</style></head><body>'+fs.readFileSync(html,'utf8')+'</body></html>',{waitUntil:'load',timeout:300000});
await p.waitForFunction(()=>window.MZ,null,{timeout:180000});
await p.evaluate(()=>MZ.start());
const shot=async(n)=>{await p.waitForTimeout(2600);await p.screenshot({path:`${out}/${n}.png`});process.stdout.write(n+' ')};
const spot=(z,lv,on)=>p.evaluate(([z,lv,on])=>{MZ.style(on);for(const id of['MAR','RES'])MZ.set(id,id===z?lv:0);MZ.tp(z)},[z,lv,on]);
for(const z of['MAR','RES'])for(const lv of[-7,-4,0,4,7]){await spot(z,lv,true);await shot(`${z}_${lv}`)}
for(const z of['MAR','RES']){await spot(z,0,false);await shot(`${z}_0_sans`)}
// frontière : depuis Berestograd (centre), on regarde vers la zone
for(const z of['MAR','RES'])for(const on of[true,false]){await p.evaluate(([z,on])=>{MZ.style(on);for(const id of['MAR','RES'])MZ.set(id,0);MZ.border(z)},[z,on]);await shot(`${z}_frontiere${on?'':'_sans'}`)}
await b.close()})();
