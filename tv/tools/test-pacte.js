/* Test du pacte avec une maison rivale : proposition (fiche de la maison, Comptoir), prix selon la maison, un seul pacte à la fois,
   la maison du pacte ne conteste plus et ne vise plus vos anciennes zones, elle conteste les zones des autres maisons (prise ou retour au sauvage),
   paiement à chaque cycle, avertissement puis rupture faute de paiement, deux contestations de vengeance l'une après l'autre, refus d'un nouveau pacte,
   trahison de Sombreclef, bandeau, mort (le pacte tombe sans rancune), sauvegarde, sans erreur JavaScript.
   Usage : sh tv/build.sh && node tv/tools/test-pacte.js   (depuis la racine du dépôt ; Playwright et Chromium installés) */
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
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&typeof window.MZ.pacte==='function'&&typeof window.MZ.rompre==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre, MZ.pacte et MZ.rompre existent',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* zones contestables : pas de repos, palier non nul */
    await p.evaluate(()=>{const S=MZ.S;for(const Z of MZ.ZN)if(S.own[Z.id]){S.rest[Z.id]=0;S.act[Z.id]=true;if(!S.lv[Z.id])S.lv[Z.id]=1}riv()});
    /* 1. prix selon la maison */
    const px=await p.evaluate(()=>{const S=MZ.S;for(const id in S.riv.z)delete S.riv.z[id];return{gri:PACTE_PRIX(RIVK.gri),cpv:PACTE_PRIX(RIVK.cpv),sbc:PACTE_PRIX(RIVK.sbc),omb:PACTE_PRIX(RIVK.omb),dime:Math.max(1,Math.ceil(revenuTess()/2))}});
    ok('prix : Comptevent moins cher, Grisaille plus cher, Ombrelieue à la dîme',px.cpv<px.sbc&&px.sbc<px.gri&&px.omb===px.dime,JSON.stringify(px));
    /* 2. la fiche d'une maison propose le pacte ; celle de Sombreclef annonce la trahison */
    const fi=await p.evaluate(()=>{openRivaux();openMaison(RIVK.sbc,2);const c=document.getElementById('menu-corps').textContent,o=document.getElementById('menu-choix').textContent;toMonde();
      return{trahit:/trahit/.test(c),propose:/Proposer un pacte/.test(o)}});
    ok('la fiche d\'une maison propose « Proposer un pacte »',fi.propose,JSON.stringify(fi));
    ok('la fiche de Sombreclef annonce qu\'elle trahit parfois',fi.trahit);
    /* 3. sans tesselles : signer est grisé */
    const pa=await p.evaluate(()=>{MZ.S.tess=0;openPacte(RIVK.cpv);const o=UI.opts[0];toMonde();return{off:!!o.off,d:o.d}});
    ok('sans tesselles, « Signer » est grisé et dit pourquoi',pa.off&&/il vous faut/.test(pa.d),JSON.stringify(pa));
    /* 4. signer au menu : la contestation en cours de la maison tombe, le premier cycle est payé */
    const si=await p.evaluate(()=>{const S=MZ.S,cc=ciblesConteste();S.riv.c=null;if(cc.length)contester(RIVK.cpv,cc[0]);const avant=!!S.riv.c;
      MZ.tesselles(40);const t0=S.tess,prix=PACTE_PRIX(RIVK.cpv);openPacte(RIVK.cpv,toMonde);UI.opts[0].go();toMonde();
      return{avant,k:S.pacte.k,paye:t0-S.tess,prix,c:S.riv.c}});
    ok('signer : pacte avec Comptevent, premier cycle payé',si.k==='cpv'&&si.paye===si.prix,JSON.stringify(si));
    ok('signer fait tomber la contestation que la maison menait',si.avant&&si.c===null,JSON.stringify({avant:si.avant,c:si.c}));
    /* 5. un seul pacte à la fois */
    const un=await p.evaluate(()=>{openPacte(RIVK.gri);const o=UI.opts[0];toMonde();return{off:!!o.off,d:o.d,s:signerPacte(RIVK.gri),k:MZ.S.pacte.k}});
    ok('un seul pacte à la fois',un.off&&un.s===false&&un.k==='cpv',JSON.stringify(un));
    /* 6. bandeau et écran Rivaux */
    const ba=await p.evaluate(()=>{hudKey='';etatHud();bandeau();const b=document.getElementById('bandeau').innerHTML;openRivaux();const e=document.getElementById('menu-choix').textContent;toMonde();return{b:/Pacte avec la maison Comptevent/.test(b),e:/pacte/.test(e)}});
    ok('le bandeau (ligne Rivaux) montre le pacte',ba.b);
    ok('l\'écran Rivaux montre le pacte',ba.e);
    /* 7. sous pacte, la maison ne conteste plus vos zones et ne vise plus vos anciennes zones */
    const ag=await p.evaluate(()=>{const S=MZ.S,R=S.riv,res=[];for(const Z of MZ.ZN)if(!S.own[Z.id])S.emp[Z.id]=true;
      const libre=MZ.ZN.find(Z=>ciblesPrise().some(x=>x.id===Z.id));if(libre)S.emp[libre.id]=false;
      for(let i=0;i<30;i++){R.c=null;delete R.t.cpv;const x=pacteAgit(RIVK.cpv);res.push(x?x.sorte+':'+x.id:'rien')}
      const surEmp=res.filter(s=>{const id=s.split(':')[1];return id&&S.emp[id]}).length;delete R.t.cpv;
      let cont=0;for(let i=0;i<40;i++){R.c=null;const x=rivalAgit(true,'conteste');if(x&&x.r==='cpv'&&x.sorte==='conteste')cont++}R.c=null;
      return{res:[...new Set(res)],surEmp,cont,libre:libre&&libre.id}});
    ok('sous pacte, la maison ne conteste jamais vos zones',ag.cont===0&&!ag.res.some(s=>/^conteste:/.test(s)),JSON.stringify(ag));
    ok('sous pacte, elle ne tente jamais vos anciennes zones (empreinte)',ag.surEmp===0&&(!ag.libre||ag.res.includes('tentative:'+ag.libre)),JSON.stringify(ag));
    /* 8. elle conteste de préférence une zone d'une autre maison : la zone change de maison */
    const cm=await p.evaluate(()=>{const S=MZ.S,R=S.riv;for(const id in R.z)delete R.z[id];R.t={};const Z=MZ.ZN.find(Z=>!S.own[Z.id]&&!ESTDEP.has(Z.id));R.z[Z.id]='gri';
      const x=MZ.pacteAgit();hudKey='';bandeau();const b=/→/.test(document.getElementById('bandeau').innerHTML);const cr=JSON.parse(JSON.stringify(S.pacte.cr));const r=MZ.pacteResout(true);
      return{x,cr,b,r,a:R.z[Z.id],id:Z.id}});
    ok('sous pacte, elle conteste une zone d\'une autre maison (annoncée)',cm.x&&cm.x.sorte==='contesteMaison'&&cm.x.contre==='gri'&&cm.cr&&cm.cr.du>0,JSON.stringify(cm.x));
    ok('la contestation entre maisons se voit au bandeau',cm.b);
    ok('réussie, la zone passe à la maison du pacte',cm.r.fin==='prise'&&cm.a==='cpv',JSON.stringify(cm));
    const cs=await p.evaluate(()=>{const S=MZ.S,R=S.riv;const l=MZ.ZN.filter(Z=>!S.own[Z.id]&&!R.z[Z.id]&&!ESTDEP.has(Z.id));while(zonesMaison('cpv').length<RIV_MAX())R.z[l.shift().id]='cpv';
      const Z=l.shift();R.z[Z.id]='omb';const x=MZ.pacteAgit(),r=MZ.pacteResout(true);
      for(const id in R.z)delete R.z[id];return{x:x&&x.id===Z.id,r}});
    ok('si elle tient déjà assez de zones, la zone redevient sauvage',cs.x&&cs.r.fin==='sauvage',JSON.stringify(cs));
    /* 9. paiement à chaque cycle (après le revenu des Citadelles) */
    const cy=await p.evaluate(async()=>{const S=MZ.S;S.pacte.cr=null;const t0=S.tess,rev=revenuTess(),prix=S.pacte.prix;S.nc+=1;await new Promise(r=>setTimeout(r,2300));return{t0,t1:S.tess,rev,prix,k:S.pacte.k}});
    ok('chaque cycle, le prix du pacte est prélevé',cy.k==='cpv'&&cy.t1===cy.t0+cy.rev-cy.prix,JSON.stringify(cy));
    /* 9 bis (20 nov.) : le prix vaut au moins le quart du revenu en tesselles (Citadelles, caravanes, lois), et suit ce quart */
    const qr=await p.evaluate(()=>{const S=MZ.S,r0=revenuPacte(),c0=PACTE_PRIX(RIVK.cpv),a={own:S.own.MAR,act:S.act.MAR,lv:S.lv.MAR,cit:S.lv.CIT,z:Object.assign({},S.riv.z)};
      for(const id in S.riv.z)delete S.riv.z[id];S.own.CIT=S.act.CIT=true;S.lv.CIT=7;MZ.loiForcer('MAR','dime');S.own.MAR=S.act.MAR=true;S.lv.MAR=1;MZ.loiRenforcer('MAR');
      const r1=revenuPacte(),cit=revenuTess(),dime=loisTess().tess,c1=PACTE_PRIX(RIVK.cpv),temp=prixTemp(RIVK.cpv),omb=PACTE_PRIX(RIVK.omb),cy=prixCycle(S.pacte,RIVK.cpv);
      MZ.loiRenforcer('MAR',true);MZ.loiForcer('MAR',null);S.own.MAR=a.own;S.act.MAR=a.act;S.lv.MAR=a.lv;S.lv.CIT=a.cit;Object.assign(S.riv.z,a.z);return{r0,c0,r1,cit,dime,c1,temp,omb,cy}});
    ok('prix : au moins le quart du revenu (Citadelles, lois), arrondi au-dessus, et chaque cycle',qr.dime>0&&qr.r1===qr.cit+qr.dime&&qr.c1===Math.ceil(qr.r1/4)&&qr.c1>qr.temp&&qr.cy===qr.c1&&qr.omb>=qr.c1&&qr.c0>=Math.ceil(qr.r0/4),JSON.stringify(qr));
    /* 9 ter (20 nov.) : Loi du Cadastre, une maison au plafond moins un ne garde pas la zone prise à une autre maison */
    const ca=await p.evaluate(()=>{const S=MZ.S,R=S.riv,cr0=S.pacte.cr,z0=Object.assign({},R.z);for(const id in R.z)delete R.z[id];
      const l=MZ.ZN.filter(Z=>!S.own[Z.id]).map(Z=>Z.id);R.z[l[0]]='gri';for(let i=1;i<Math.max(1,RIV_MAX()-1)+1;i++)R.z[l[i]]='cpv';
      S.pacte.cr={k:'cpv',id:l[0],de:'gri',du:S.nc};MZ.loiForcer('MAR','cadastre');const a={own:S.own.MAR,act:S.act.MAR,lv:S.lv.MAR};S.own.MAR=S.act.MAR=true;S.lv.MAR=1;
      const n=zonesMaison('cpv').length,r=MZ.pacteResout(true),z=R.z[l[0]]||null;MZ.loiForcer('MAR',null);S.own.MAR=a.own;S.act.MAR=a.act;S.lv.MAR=a.lv;
      for(const id in R.z)delete R.z[id];Object.assign(R.z,z0);S.pacte.cr=cr0;return{n,max:RIV_MAX(),r,z}});
    ok('Loi du Cadastre : la maison du pacte au plafond moins un chasse l\'autre maison sans garder la zone',ca.r&&ca.r.fin==='sauvage'&&ca.z===null,JSON.stringify(ca));
    /* 10. bourse trop maigre : avertissement, puis rupture au cycle suivant, deux contestations de vengeance */
    const av=await p.evaluate(async()=>{const S=MZ.S;S.tess=0;S.pacte.prix=S.pacte.base=50;S.pacte.warn=false;S.riv.c=null;S.nc+=1;await new Promise(r=>setTimeout(r,2300));
      return{warn:S.pacte.warn,k:S.pacte.k,toast:document.getElementById('t1').textContent}});
    ok('paiement manqué : avertissement, le pacte tient encore un cycle',av.warn===true&&av.k==='cpv',JSON.stringify(av));
    const ru=await p.evaluate(async()=>{const S=MZ.S;S.tess=0;for(const Z of MZ.ZN)if(S.own[Z.id])S.rest[Z.id]=0;S.nc+=1;await new Promise(r=>setTimeout(r,2300));
      const c1=S.riv.c&&S.riv.c.r,rup=S.pacte.rup&&S.pacte.rup.n;
      MZ.rivalArrive(false);await new Promise(r=>setTimeout(r,1300));const c2=S.riv.c&&S.riv.c.r,rup2=S.pacte.rup;
      MZ.rivalArrive(false);await new Promise(r=>setTimeout(r,1300));
      return{k:S.pacte.k,c1,rup,c2,rup2,c3:S.riv.c,refus:refusPacte('cpv')}});
    ok('sans paiement après l\'avertissement, le pacte se rompt',ru.k===null&&ru.refus>=9,JSON.stringify(ru));
    ok('rupture : la maison conteste deux fois de suite vos zones',ru.c1==='cpv'&&ru.rup===1&&ru.c2==='cpv'&&ru.rup2===null&&ru.c3===null,JSON.stringify(ru));
    /* 11. refus d'un nouveau pacte pendant un moment */
    const rf=await p.evaluate(()=>{MZ.tesselles(40);const o=optionsPacte(RIVK.cpv,1)[0];return{off:!!o.off,d:o.d,s:signerPacte(RIVK.cpv)}});
    ok('après la rupture, elle refuse un nouveau pacte',rf.off&&rf.s===false&&/refuse/.test(rf.d),JSON.stringify(rf));
    /* 12. rompre au menu */
    const rm=await p.evaluate(()=>{const S=MZ.S;MZ.pacte('gri');const k=S.pacte.k;openPacte(RIVK.gri,toMonde);const o=UI.opts.find(o=>/Rompre/.test(o.l));o.go();toMonde();
      return{k,apres:S.pacte.k,rup:S.pacte.rup&&S.pacte.rup.k,c:S.riv.c&&S.riv.c.r,refus:refusPacte('gri')}});
    ok('rompre au menu : vengeance de la maison et refus',rm.k==='gri'&&rm.apres===null&&rm.refus>0&&(rm.rup==='gri'||rm.c==='gri'),JSON.stringify(rm));
    /* 13. Sombreclef trahit parfois */
    const tr=await p.evaluate(()=>{const S=MZ.S;S.pacte.rup=null;S.riv.c=null;for(const Z of MZ.ZN)if(S.own[Z.id])S.rest[Z.id]=0;MZ.pacte('sbc');const rnd=Math.random;Math.random=()=>0;let x;try{x=MZ.pacteAgit()}finally{Math.random=rnd}
      return{x,k:S.pacte.k,c:S.riv.c&&S.riv.c.r,refus:refusPacte('sbc')}});
    ok('Sombreclef trahit : le pacte tombe et elle conteste une de vos zones',tr.x&&tr.x.sorte==='conteste'&&tr.k===null&&tr.c==='sbc'&&tr.refus===0,JSON.stringify(tr));
    /* 14. le Comptoir propose les pactes */
    const co=await p.evaluate(()=>{MZ.S.riv.c=null;MZ.comptoir('CIT');const t=document.getElementById('menu-choix').textContent;const o=UI.opts.find(o=>/pacte/.test(o.l));if(o)o.go();const n=UI.opts.length,t2=document.getElementById('menu-choix').textContent;toMonde();
      return{comptoir:/pacte/.test(t),n,ombre:/dîme/.test(t2)}});
    ok('le Comptoir propose un pacte et liste les quatre maisons',co.comptoir&&co.n===5&&co.ombre,JSON.stringify(co));
    /* 15. sauvegarde, puis la mort : le pacte tombe sans rancune */
    const mo=await p.evaluate(async()=>{const S=MZ.S;MZ.pacte('omb');save();const sv=JSON.parse(localStorage.getItem('mz-tv-1')).pacte;mort();await new Promise(r=>setTimeout(r,1400));toMonde();
      return{sv:sv&&sv.k,k:S.pacte.k,refus:Object.keys(S.pacte.refus).length,rup:S.pacte.rup}});
    ok('le pacte est sauvegardé',mo.sv==='omb');
    ok('à la mort, le pacte tombe sans rancune (ni refus, ni vengeance)',mo.k===null&&mo.refus===0&&mo.rup===null,JSON.stringify(mo));
    /* 16. nouvelle partie : rien ne reste ; des cycles passent sans erreur */
    const np=await p.evaluate(async()=>{MZ.pacte('cpv');MZ.start();await new Promise(r=>setTimeout(r,1300));const k=MZ.S.pacte.k;for(let i=0;i<3;i++){MZ.S.nc++;await new Promise(r=>setTimeout(r,1100))}return{k,nc:MZ.S.pacte.nc,snc:MZ.S.nc}});
    ok('une nouvelle partie part sans pacte, les cycles passent',np.k===null&&np.nc===np.snc,JSON.stringify(np))}
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest du pacte : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest du pacte : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test du pacte : erreur',e);process.exit(1)});
