/* Test du commerce en Citadelle : tesselles gagnées par cycle et en prime, bandeau, Comptoir (carte de secret une par cycle,
   réparation des pièges, retard d'une horde, échange contre du mana), perte de la bourse à la mort, sans erreur JavaScript.
   Usage : sh tv/build.sh && node tv/tools/test-commerce.js   (depuis la racine du dépôt ; Playwright et Chromium installés) */
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
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function'&&typeof window.MZ.tesselles==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre, MZ.tesselles existe',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 1. nouvelle partie : bourse vide ; un cycle rapporte 1 + |palier| par Citadelle tenue */
    const c1=await p.evaluate(async()=>{const S=MZ.S,t0=S.tess,rev=revenuTess(),cits=citadellesTenues().map(Z=>Z.id+':'+S.lv[Z.id]);
      S.nc+=1;await new Promise(r=>setTimeout(r,1300));return{t0,rev,cits,t1:S.tess}});
    ok('une nouvelle partie commence avec 0 tesselle',c1.t0===0,c1.t0);
    ok('un cycle rapporte 1 + |palier| par Citadelle tenue',c1.rev>=2&&c1.t1===c1.rev,JSON.stringify(c1));
    /* 2. bandeau : un seul élément court */
    const ban=await p.evaluate(()=>{etatHud();const b=document.getElementById('bandeau');const e=[...b.querySelectorAll('[title^="Tesselles"]')];return{n:e.length,t:e[0]&&e[0].textContent}});
    ok('le bandeau montre la bourse (un seul élément)',ban.n===1&&/◇\d+/.test(ban.t),JSON.stringify(ban));
    /* 3. primes : horde brisée et rival repoussé */
    const pr=await p.evaluate(async()=>{const S=MZ.S,t0=S.tess;const h=MZ.horde();if(!h)return{h:null};combatHorde(h.src);await new Promise(r=>setTimeout(r,500));
      const kind=MZ.CB&&MZ.CB.kind;finCombat(true);const t1=S.tess;toMonde();
      const r=MZ.rival('conteste');let t2=t1;if(r){defendre(ZB[r.id]);await new Promise(r=>setTimeout(r,500));finCombat(true);t2=S.tess;toMonde()}
      return{kind,t0,t1,t2,r:!!r}});
    ok('briser une horde rapporte 5 tesselles',pr.kind==='horde'&&pr.t1-pr.t0===5,JSON.stringify(pr));
    ok('repousser un rival rapporte 4 tesselles',!pr.r||pr.t2-pr.t1===4,pr.r?pr.t2-pr.t1:'aucune zone contestable');
    /* 4. la Pierre d'une Citadelle tenue propose le Comptoir, pas celle d'un Donjon */
    const pierre=await p.evaluate(()=>{openEveil(ZB.CIT);const a=document.getElementById('menu-choix').textContent;openEveil(ZB.DON);const b=document.getElementById('menu-choix').textContent;toMonde();
      return{cit:/Comptoir/.test(a),don:/Comptoir/.test(b)}});
    ok('la Pierre de la Citadelle propose « Comptoir »',pierre.cit&&!pierre.don,JSON.stringify(pierre));
    /* 5. carte de secret : une par cycle, prix croissant, pas déjà dans le paquet */
    const ca=await p.evaluate(()=>{const S=MZ.S;MZ.tesselles(100);const Z=ZB.CIT,t0=S.tess,d0=S.deck.length,v=cartesEnVente(Z);if(!v.length)return{v:0};
      MZ.comptoir('CIT');openCartesSecret(Z);const opts=UI.opts.length;UI.opts[0].go();const k=v[0].k,t1=S.tess,d1=S.deck.length;
      const encore=acheterCarte(Z,cartesEnVente(Z)[0].k);toMonde();return{v:v.length,opts,k,inDeck:S.deck.indexOf(k)>=0,paye:t0-t1,d0,d1,encore,dejaVendue:cartesEnVente(Z).some(x=>x.k===k)}});
    ok('le Comptoir vend des cartes de secret',ca.v>0,JSON.stringify(ca));
    ok('acheter une carte : 6 tesselles, la carte rejoint le paquet',ca.inDeck&&ca.paye===6&&ca.d1===ca.d0+1,JSON.stringify(ca));
    ok('une seule carte par cycle',ca.encore===false);
    ok('une carte du paquet n\'est plus en vente',ca.dejaVendue===false);
    const ca2=await p.evaluate(async()=>{const S=MZ.S;S.nc+=1;await new Promise(r=>setTimeout(r,1200));const t0=S.tess,k=cartesEnVente(ZB.CIT)[0].k,b=acheterCarte(ZB.CIT,k);return{b,paye:t0-S.tess}});
    ok('au cycle suivant, la carte suivante coûte 9',ca2.b&&ca2.paye===9,JSON.stringify(ca2));
    /* 6. réparer les pièges du Donjon d'origine (ou du module Donjons) */
    const rp=await p.evaluate(()=>{const S=MZ.S;S.pieges=[{k:'herse',u:1,dort:true},{k:'lave',u:2,dort:false},null,null];const t0=S.tess,l=donjonsAReparer();
      const okR=l.length?acheterReparation(l[0].id):false;return{l,okR,paye:t0-S.tess,p:S.pieges.filter(Boolean).map(x=>x.u+(x.dort?'z':'')),mod:typeof reparerPieges==='function'}});
    ok('réparer les pièges coûte 5 tesselles',rp.okR&&rp.paye===5,JSON.stringify(rp));
    ok('les pièges du Donjon d\'origine sont remis à neuf',rp.mod||rp.p.join()==='3,3',rp.p.join());
    /* 7. retarder une horde en marche de 2 cycles, une seule fois */
    const rt=await p.evaluate(()=>{const S=MZ.S;let h=Object.values(S.hordes||{})[0]||MZ.horde();if(!h)return{h:null};const a0=h.arrive,t0=S.tess;
      const r1=acheterRetard(h.src),a1=S.hordes[h.src].arrive,r2=acheterRetard(h.src);return{a0,a1,r1,r2,paye:t0-S.tess}});
    ok('retarder une horde : +2 cycles pour 8 tesselles',rt.r1&&rt.a1===rt.a0+2&&rt.paye===8,JSON.stringify(rt));
    ok('une horde ne se retarde qu\'une fois',rt.r2===false);
    /* 8. échange : 4 tesselles pour 1 mana du type de la Citadelle */
    const ex=await p.evaluate(()=>{const S=MZ.S,t=ZMANA.CIT,m0=S.res[t]||0,t0=S.tess,r=echangerTess(ZB.CIT);return{r,dm:(S.res[t]||0)-m0,paye:t0-S.tess}});
    ok('échanger 4 tesselles contre 1 mana',ex.r&&ex.dm===1&&ex.paye===4,JSON.stringify(ex));
    /* 9. le menu du Comptoir s'affiche et se parcourt à la manette (options et retour) */
    const mn=await p.evaluate(()=>{MZ.comptoir('CIT');const t=document.getElementById('menu-choix').textContent;uiAct('down');uiAct('down');uiAct('back');const retour=/Pierre d'éveil/.test(document.getElementById('menu-sur').textContent);toMonde();
      return{carte:/carte de secret/.test(t),pieges:/pièges/.test(t),horde:/horde/.test(t),echange:/Échanger/.test(t),retour}});
    ok('le Comptoir propose les quatre services',mn.carte&&mn.pieges&&mn.horde&&mn.echange,JSON.stringify(mn));
    ok('Retour ramène à la Pierre d\'éveil',mn.retour);
    /* 10. la sauvegarde garde la bourse */
    const sv=await p.evaluate(()=>{save();return JSON.parse(localStorage.getItem('mz-tv-1')).tess===MZ.S.tess});
    ok('la bourse est sauvegardée',sv);
    /* 11. la mort : on perd tout, la bourse aussi */
    const mo=await p.evaluate(async()=>{const S=MZ.S,t0=S.tess;mort();await new Promise(r=>setTimeout(r,1300));toMonde();return{t0,t1:S.tess,c:S.tessCartes}});
    ok('à la mort, la bourse est perdue',mo.t0>0&&mo.t1===0&&mo.c===0,JSON.stringify(mo));
    /* 12. une nouvelle partie repart de zéro, des cycles passent sans erreur */
    const np=await p.evaluate(async()=>{MZ.tesselles(7);MZ.start();await new Promise(r=>setTimeout(r,1300));const t=MZ.S.tess;for(let i=0;i<3;i++){MZ.S.nc++;await new Promise(r=>setTimeout(r,1100))}return{t,apres:MZ.S.tess,rev:revenuTess()}});
    ok('une nouvelle partie remet la bourse à zéro',np.t===0,JSON.stringify(np));
    ok('trois cycles passent',np.apres===3*np.rev,JSON.stringify(np))}
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest du commerce : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest du commerce : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test du commerce : erreur',e);process.exit(1)});
