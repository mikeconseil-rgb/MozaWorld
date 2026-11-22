/* Captures de la carte du monde (royaumes simulés en milieu de partie).
   Usage : node tv/tools/capture-carte.js <dossier> [prefixe] */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),out=path.resolve(process.argv[2]||'carte-sortie'),pre=process.argv[3]||'carte';fs.mkdirSync(out,{recursive:true});
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});p.setDefaultTimeout(240000);const err=[];p.on('pageerror',e=>err.push(String(e.message)));
  await p.route(/^https?:\/\//,r=>r.abort());
  await p.goto('file://'+path.join(racine,'index.html'));await p.waitForFunction(()=>window.MZ&&MZ.start);
  await p.evaluate(()=>MZ.start());await p.waitForTimeout(2500);
  /* milieu de partie : le royaume du joueur grandit de 2 couronnes, chaque maison tient un bloc de 3 à 6 zones */
  await p.evaluate(()=>{const S=MZ.S,V=VOISINES_MONDE,own=Object.keys(S.own).filter(k=>S.own[k]);
    let f=own.slice();for(let i=0;i<1;i++){const n=[];for(const id of f)for(const v of V[id]||[])if(!S.own[v]&&ZB[v]&&Math.random()<.55){S.own[v]=S.act[v]=true;n.push(v)}f=n}
    S.riv=S.riv||{z:{},c:null,nc:0,vu:{},t:{}};
    /* une maison par direction, à deux tuiles du royaume */
    const ks=['gri','cpv','sbc','omb'],cx=MZ.P.x,cz=MZ.P.z;
    ks.forEach((k,j)=>{const a=j*Math.PI/2+.6;let best=null,bd=1e9;for(const Z of ZN){if(S.own[Z.id]||S.riv.z[Z.id])continue;
        const d=Math.hypot(Z.c[0]-cx-Math.cos(a)*1250,Z.c[1]-cz-Math.sin(a)*1250);if(d<bd){bd=d;best=Z}}
      if(!best)return;const b=[best.id];for(const id of b){if(b.length>=4)break;for(const v of V[id]||[])if(b.length<4&&ZB[v]&&!S.own[v]&&!S.riv.z[v]&&!b.includes(v))b.push(v)}
      for(const id of b)S.riv.z[id]=k});
    for(const Z of ZN)if(Math.random()<.4&&!S.lv[Z.id])S.lv[Z.id]=Math.round((Math.random()*2-1)*6)});
  console.log(await p.evaluate(()=>JSON.stringify(Object.entries(MZ.S.riv.z).map(([id,k])=>k+":"+id+":"+(VOISINES_MONDE[id]||[]).filter(v=>MZ.S.riv.z[v]===k).length))));
  console.log(await p.evaluate(()=>JSON.stringify([ZN.length,Object.keys(MZ.S.riv.z).length,MZ.P.x,MZ.P.z])));
  await p.evaluate(()=>MZ.carte());await p.waitForTimeout(800);
  for(const [n,w] of [['proche',5000],['region',9000],['large',16000],['monde',60000]]){await p.evaluate(w=>MZ.carteZoom(w),w);await p.waitForTimeout(900);
    await p.screenshot({path:path.join(out,pre+'-'+n+'.png')})}
  console.log(JSON.stringify({erreurs:err}));await nav.close()})();
