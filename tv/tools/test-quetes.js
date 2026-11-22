/* Test des quêtes de Kobor (22 nov.) : pour chaque palier de −7 à +7, parcourt l'arbre de la quête par toutes ses réponses
   (au hasard, plusieurs passes), joue les lieux et les combats (gagnés d'office), prend chaque choix final et vérifie
   que la zone passe au palier annoncé, sans erreur JavaScript. Usage : node tv/tools/test-quetes.js */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..');
(async()=>{const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await nav.newPage({viewport:{width:1280,height:720}});const er=[];p.on('pageerror',e=>er.push(String(e.message)));
await p.route('**/three.min.js',r=>r.fulfill({body:fs.readFileSync(path.join(racine,'android/assets/three.min.js')),contentType:'application/javascript'}));
await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
await p.goto('file://'+path.join(racine,'index.html'));await p.waitForFunction(()=>window.MZ&&window.MZ.start,null,{timeout:30000});
await p.evaluate(()=>MZ.start());await p.waitForTimeout(1500);
let echecs=0;
const cas=[];for(let lv=-7;lv<=7;lv++){for(const fin of(lv===7||lv===-7?[0]:[0,1]))cas.push([lv,fin,null]);
  /* 22 nov., tour 2 : le retour vers 0 (on vient du palier plus éloigné) part de debutRetour */
  if(Math.abs(lv)<7)for(const de of(lv===0?[-1,1]:[lv+Math.sign(lv)]))for(const fin of[0,1])cas.push([lv,fin,de])}
/* tour 3 : chaque entrée « debutSi » (selon la trace du dernier choix final) */
const si=await p.evaluate(()=>{const o=[];for(const [k,q] of Object.entries(QUETES.DON045.quetes))for(const t of Object.keys(q.debutSi||{}))o.push([+k,t]);return o});
for(const [lv,t] of si)for(const fin of[0,1])cas.push([lv,fin,lv===7?6:lv===-7?-6:lv+(lv>0?-1:1),t]);
for(const [lv,fin,de,der] of cas){
  const r=await p.evaluate(async([lv,fin,de,der])=>{const Z=MZ.ZN.find(z=>z.id==='DON045');MZ.S.act.DON045=true;MZ.S.own.DON045=true;MZ.set('DON045',lv);MZ.S.rest.DON045=0;MZ.S.quete=de==null?{}:{DON045:{lv:de,n:'?'}};MZ.S.parole={};MZ.S.queteDer={DON045:der||null};
    const attendre=ms=>new Promise(r=>setTimeout(r,ms)),chemin=[];await attendre(400); /* la visibilité des PNJ suit le palier au tic suivant */
    for(let pas=0;pas<14;pas++){const et=MZquetes.etape(Z);if(!et)return{err:'pas de nœud'};chemin.push(MZquetes.etat(Z).n);
      if(et.lieu){MZquetes.lieuAtteint(Z,et)}else{const f=MZquetes.FIG.find(f=>f.id===et.qui);if(!f.g.visible)return{err:et.qui+' absent mais attendu',chemin};toMonde();MZquetes.parler(f)}
      if(et.final){if(et.fin.length<=fin)return{vers:null,lv:null,chemin,saut:1};const o=UI.opts[fin];if(!o||o.off){if(et.fin.length<=fin)return{vers:null,lv:null,chemin,saut:1};return{err:'choix final indisponible',chemin}};const vers=et.fin[fin].vers;o.go();await attendre(50);
        if(MZ.mode==='menu'&&UI.opts[0]&&/Combattre/.test(UI.opts[0].l))UI.opts[0].go();await attendre(300);
        if(MZ.CB){finCombat(true)}await attendre(100);return{vers,lv:MZ.S.lv.DON045,chemin}}
      if(et.combat){UI.opts[0].go();await attendre(300);if(!MZ.CB||MZ.CB.kind!=='quete')return{err:'combat non lancé',chemin};finCombat(true);await attendre(50);UI.opts[0].go();continue}
      const n=UI.opts.length;UI.opts[Math.floor(Math.random()*n)].go();await attendre(30)}
    return{err:'arbre sans fin',chemin}},[lv,fin,de,der]);
  await p.waitForTimeout(200);await p.evaluate(()=>{if(typeof mue!=='undefined'&&mue){mue.t=99}});await p.waitForTimeout(300);await p.evaluate(()=>{try{toMonde()}catch(e){}});
  if(r.saut)continue;const ok=!r.err&&r.lv===r.vers;if(!ok)echecs++;
  console.log((ok?'OK    ':'ÉCHEC ')+'palier '+lv+(der?' (entrée '+der+')':de==null?'':' (retour de '+de+')')+' choix '+(fin+1)+' : '+(r.err||('→ '+r.lv))+' · chemin '+(r.chemin||[]).join('>'))}
console.log(er.length?'ERREURS JS : '+er.join(' | '):'Aucune erreur JavaScript');
await nav.close();process.exit(echecs||er.length?1:0)})();
