/* Test des rivaux : une maison prend une zone sauvage, une autre conteste une de vos zones, défense, échéance,
   bornage et repos respectés, reprise d'une zone de rival, reprise par l'empreinte, écran « Rivaux », sans erreur JavaScript.
   Usage : sh tv/build.sh && node tv/tools/test-rivaux.js   (depuis la racine du dépôt ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail!==undefined?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&typeof window.MZ.rival==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre, MZ.rival existe',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 1. le module suit les cycles */
    const nc=await p.evaluate(async()=>{const S=MZ.S;S.nc+=1;await new Promise(r=>setTimeout(r,1300));return{nc:S.nc,riv:S.riv&&S.riv.nc}});
    ok('le module suit les cycles (S.riv.nc)',nc.riv===nc.nc,JSON.stringify(nc));
    /* 2. prise d'une zone sauvage : l'empreinte s'efface */
    const prise=await p.evaluate(()=>{const S=MZ.S;for(const Z of MZ.ZN)if(!S.own[Z.id])S.emp[Z.id]=true;const r=MZ.rival('prise');
      return r&&{r,a:S.riv.z[r.id],own:S.own[r.id],emp:S.emp[r.id],dep:ESTDEP.has(r.id)}});
    ok('une maison prend une zone sauvage hors du départ',!!prise&&prise.a===prise.r.r&&!prise.own&&!prise.dep,JSON.stringify(prise));
    ok('la prise efface l\'empreinte',!!prise&&prise.emp===false);
    /* 3. contestation annoncée, puis échéance (réussite forcée) : un palier de moins, repos */
    const ct=await p.evaluate(()=>{const S=MZ.S,r=MZ.rival('conteste');if(!r)return null;const lv0=S.lv[r.id],c=JSON.parse(JSON.stringify(S.riv.c));
      const fin=MZ.rivalArrive(true);return{r,lv0,lv1:S.lv[r.id],c,fin,rest:S.rest[r.id]-Date.now()/1000,cNull:S.riv.c===null,own:S.own[r.id]}});
    ok('une contestation est annoncée sur une de vos zones',!!ct&&ct.c.du===ct.c.de+2&&ct.own,ct&&JSON.stringify(ct.c));
    ok('l\'échéance baisse la zone d\'un palier',!!ct&&Math.abs(ct.lv1)===Math.abs(ct.lv0)-1&&ct.cNull,ct&&ct.lv0+' → '+ct.lv1);
    ok('la zone baissée se repose',!!ct&&ct.rest>30,ct&&Math.round(ct.rest)+' s');
    /* 4. zones au repos et zone bornée : pas visables */
    const bor=await p.evaluate(()=>{const S=MZ.S;S.own.ASS155=true;S.act.ASS155=true;S.lv.ASS155=1;
      const cand=ciblesConteste().map(Z=>Z.id);const x=cand[0];S.borne=x;const apres=ciblesConteste().map(Z=>Z.id);
      const repos=Object.keys(S.rest).filter(id=>S.rest[id]>Date.now()/1000);
      return{x,borneExclue:apres.indexOf(x)<0,reposExclu:repos.every(id=>apres.indexOf(id)<0),n:apres.length}});
    ok('une zone bornée ne peut pas être contestée',bor.borneExclue,bor.x);
    ok('une zone au repos ne peut pas être contestée',bor.reposExclu);
    const bor2=await p.evaluate(()=>{const S=MZ.S,x=S.borne;S.riv.c={r:'gri',id:x,de:S.riv.nc,du:S.riv.nc+2};const lv=S.lv[x];const f=MZ.rivalArrive(true);return{f,lv0:lv,lv1:S.lv[x]}});
    ok('la Pierre de bornage tient à l\'échéance',bor2.f&&bor2.f.fin==='protégée'&&bor2.lv0===bor2.lv1,JSON.stringify(bor2));
    /* 5. défense : combat contre le champion, victoire = contestation levée */
    const def=await p.evaluate(()=>{const S=MZ.S;S.borne=null;S.rest={};const r=MZ.rival('conteste');if(!r)return null;defendre(ZB[r.id]);
      const cb=MZ.CB&&{kind:MZ.CB.kind,chef:MZ.CB.foes[0].nom};return{r,cb}});
    await p.waitForTimeout(800);
    ok('la défense ouvre un combat contre le champion',!!def&&def.cb&&def.cb.kind==='rival'&&/Champion de la maison/.test(def.cb.chef),def&&JSON.stringify(def.cb));
    const def2=await p.evaluate(()=>{finCombat(true);return{c:MZ.S.riv.c}});
    ok('battre le champion lève la contestation',def2.c===null,JSON.stringify(def2.c));
    /* 6. reprise d'une zone de rival : gardiens renforcés, puis la zone redevient à vous */
    const rep=await p.evaluate(async()=>{const S=MZ.S,id=Object.keys(S.riv.z)[0];if(!id)return null;MZ.combat(id,'eveil');await new Promise(r=>setTimeout(r,600));
      const noms=MZ.CB.foes.map(f=>f.nom);finCombat(true);riv();return{id,noms,own:S.own[id],act:S.act[id],encore:!!S.riv.z[id]}});
    ok('les gardiens d\'une zone de rival sont renforcés',!!rep&&rep.noms.every(n=>/\(/.test(n)),rep&&rep.noms.join(', '));
    ok('la zone reprise redevient à vous',!!rep&&rep.own&&rep.act&&!rep.encore,rep&&JSON.stringify(rep));
    /* 7. empreinte : une ancienne zone se reprend en réussissant un seul palier */
    const emp=await p.evaluate(async()=>{const S=MZ.S,Z=MZ.ZN.find(Z=>!S.own[Z.id]&&(Z.mod||Z.id)!=='MAR'&&!S.riv.z[Z.id]);if(!Z)return null;
      S.emp[Z.id]=true;S.act[Z.id]=false;const o=optionsRivaux(Z).find(x=>/empreinte/.test(x.l));if(!o)return{id:Z.id,opt:false};o.go();
      await new Promise(r=>setTimeout(r,300));const e=!!MZ.E;MZ.win();return{id:Z.id,opt:true,e,own:S.own[Z.id],act:S.act[Z.id],emp:S.emp[Z.id]}});
    ok('reprise par l\'empreinte en un palier',!!emp&&emp.opt&&emp.e&&emp.own&&emp.act&&!emp.emp,JSON.stringify(emp));
    await p.waitForTimeout(500);
    /* 8. écran « Rivaux » depuis le menu Pause */
    const ecran=await p.evaluate(()=>{toMonde();openMenu();const pause=document.getElementById('menu-choix').textContent;openRivaux();
      const t=document.getElementById('menu-choix').textContent;openMaison(RIVAUX[0],0);const m=document.getElementById('menu-corps').textContent;toMonde();
      return{pause:/Rivaux/.test(pause),n:RIVAUX.filter(r=>t.indexOf(r.nom)>=0).length,m:m.slice(0,80)}});
    ok('le menu Pause propose « Rivaux »',ecran.pause);
    ok('l\'écran Rivaux montre les quatre maisons',ecran.n===4,ecran.n+' maisons');
    ok('la fiche d\'une maison s\'affiche',ecran.m.length>20,ecran.m);
    /* 9. bandeau */
    ok('le bandeau montre la ligne des rivaux',await p.evaluate(()=>/Rivaux/.test(document.getElementById('bandeau').textContent)));
    /* 10. un cycle simulé ne casse rien */
    await p.evaluate(async()=>{for(let i=0;i<6;i++){MZ.S.nc++;await new Promise(r=>setTimeout(r,1100))}});
    ok('six cycles passent',await p.evaluate(()=>MZ.S.riv.nc===MZ.S.nc))}
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des rivaux : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des rivaux : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des rivaux : erreur',e);process.exit(1)});
