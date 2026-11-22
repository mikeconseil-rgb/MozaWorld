/* Test des rivaux : une maison tente l'épreuve d'une zone sauvage (annonce, bandeau, Pierre, écran Rivaux, réussite, échec,
   tentative devancée par le joueur, défi du champion, échéance au fil des cycles, chances par palier, plafond), une autre conteste une de vos zones, défense, échéance,
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
    /* 2. prise d'une zone sauvage : d'abord une tentative annoncée, puis l'épreuve ; réussite = l'empreinte s'efface */
    ok('MZ.rivalTente existe',await p.evaluate(()=>typeof MZ.rivalTente==='function'));
    const ten=await p.evaluate(()=>{const S=MZ.S;for(const Z of MZ.ZN)if(!S.own[Z.id])S.emp[Z.id]=true;const r=MZ.rival('prise');if(!r)return null;
      const t=JSON.parse(JSON.stringify(S.riv.t[r.r]));hudKey='';etatHud();if(typeof bandeau==='function')bandeau();
      const band=!!document.querySelector('#bandeau [title*="tente l\'épreuve"]');
      openEveil(ZB[r.id]);const pierre=[...document.getElementById('menu-choix').children].map(e=>e.textContent);
      openRivaux();const ecran=document.getElementById('menu-choix').textContent;toMonde();
      return{r,t,toast:document.getElementById('t1').textContent+' / '+document.getElementById('t2').textContent,a:S.riv.z[r.id]||null,own:S.own[r.id],dep:ESTDEP.has(r.id),
        band,pierre0:pierre[0],ecran:/tente l'épreuve/.test(ecran),fiche:maitreRival(r.id).replace(/<[^>]+>/g,'')}});
    ok('MZ.rival(\'prise\') lance une tentative annoncée, sans prendre la zone',!!ten&&ten.r.sorte==='tentative'&&ten.a===null&&!ten.own&&!ten.dep&&ten.t.du===ten.t.de+2,ten&&JSON.stringify({r:ten.r,t:ten.t,a:ten.a}));
    ok('message « tente l\'épreuve … dans 2 cycles »',!!ten&&/tente l'épreuve/.test(ten.toast)&&/dans 2 cycles/.test(ten.toast),ten&&ten.toast);
    ok('la tentative est dans le bandeau (ligne Rivaux)',!!ten&&ten.band);
    ok('la Pierre de la zone propose « Défier les gens de la maison » en tête',!!ten&&/Défier les gens de la maison/.test(ten.pierre0),ten&&ten.pierre0);
    ok('l\'écran Rivaux et la fiche de zone montrent la tentative',!!ten&&ten.ecran&&/tente l'épreuve/.test(ten.fiche),ten&&ten.fiche);
    const deux=await p.evaluate(()=>{const S=MZ.S,a=MZ.rival('prise'),b=MZ.rival('prise');const ks=Object.keys(S.riv.t),ids=ks.map(k=>S.riv.t[k].id);
      return{n:ks.length,ids,distinct:new Set(ids).size===ids.length,a:a&&a.r,b:b&&b.r}});
    ok('une seule tentative par maison, une seule par zone',deux.distinct&&deux.n<=4&&deux.a!==deux.b,JSON.stringify(deux));
    const reus=await p.evaluate(k=>{const S=MZ.S,id=S.riv.t[k].id;const res=MZ.rivalTente(k,true);
      return{res,a:S.riv.z[id],emp:S.emp[id],own:S.own[id],t:!!S.riv.t[k],toast:document.getElementById('t1').textContent}},ten.r.r);
    ok('réussite : la zone est à la maison',reus.a===ten.r.r&&!reus.own&&!reus.t&&reus.res[0].fin==='prise',JSON.stringify(reus));
    ok('la prise efface l\'empreinte',reus.emp===false);
    const ech=await p.evaluate(()=>{const S=MZ.S,ks=Object.keys(S.riv.t),ids=ks.map(k=>S.riv.t[k].id);const res=MZ.rivalTente(false);
      return{res,rest:Object.keys(S.riv.t).length,pris:ids.filter(id=>S.riv.z[id]).length,toast:document.getElementById('t1').textContent+' / '+document.getElementById('t2').textContent}});
    ok('échec annoncé : les gens repartent, la zone reste sauvage',ech.rest===0&&ech.pris===0&&ech.res.every(x=>x.fin==='échec')&&(!ech.res.length||/échoue à l'épreuve/.test(ech.toast)&&/repartent/.test(ech.toast)),JSON.stringify(ech));
    /* le joueur active la zone avant l'échéance : la tentative tombe */
    const dev=await p.evaluate(async()=>{const S=MZ.S,r=MZ.rival('prise');if(!r)return null;MZ.prendre(r.id);await new Promise(x=>setTimeout(x,1300));
      return{r,t:!!S.riv.t[r.r],a:S.riv.z[r.id]||null,own:S.own[r.id],toast:document.getElementById('t1').textContent}});
    ok('activer la zone avant l\'échéance fait tomber la tentative',!!dev&&!dev.t&&!dev.a&&dev.own&&/renonce/.test(dev.toast),JSON.stringify(dev));
    /* défi à la Pierre : combat contre le champion de la maison */
    const dfi=await p.evaluate(async()=>{const S=MZ.S,r=MZ.rival('prise');if(!r)return null;MZ.combat(r.id,'rival');await new Promise(x=>setTimeout(x,600));
      const cb=MZ.CB&&{kind:MZ.CB.kind,chef:MZ.CB.foes[0].nom};finCombat(true);return{r,cb,t:!!S.riv.t[r.r],a:S.riv.z[r.id]||null,titre:document.getElementById('menu').textContent.slice(0,120)}});
    ok('défier les gens de la maison : combat contre son champion',!!dfi&&dfi.cb&&dfi.cb.kind==='rival'&&/Champion de la maison/.test(dfi.cb.chef),dfi&&JSON.stringify(dfi.cb));
    ok('battre le champion fait échouer la tentative',!!dfi&&!dfi.t&&!dfi.a&&/Défi réussi/.test(dfi.titre),dfi&&JSON.stringify(dfi));
    await p.evaluate(()=>toMonde());
    /* échéance au fil des cycles */
    const ech2=await p.evaluate(async()=>{const S=MZ.S,r=MZ.rival('prise');if(!r)return null;S.nc+=2;await new Promise(x=>setTimeout(x,1400));
      return{r,t:!!S.riv.t[r.r],a:S.riv.z[r.id]||null}});
    ok('à l\'échéance (2 cycles), l\'épreuve se résout d\'elle-même',!!ech2&&!ech2.t,JSON.stringify(ech2));
    await p.evaluate(()=>{MZ.rivalTente(false);toMonde()});
    /* chances par palier, zones verrouillées, plafond */
    const reg=await p.evaluate(()=>{const S=MZ.S,id=MZ.ZN.find(Z=>!S.own[Z.id]).id,lv0=S.lv[id],ch=[0,1,-2,3,4,-5,6,-7].map(l=>{S.lv[id]=l;return chanceEpreuve(id)});S.lv[id]=lv0;
      const verr=MZ.ZN.filter(Z=>!S.own[Z.id]&&verrouillee(Z.id)).map(Z=>Z.id),cp=ciblesPrise().map(Z=>Z.id);
      return{ch,verr,verrExclues:verr.every(id=>cp.indexOf(id)<0),max:RIV_MAX(),tous:RIV_TOUS,grace:RIV_GRACE}});
    ok('chance de réussite : 75 % à 0-1, 60 % à 2-3, 40 % à 4-5, 25 % à 6-7',JSON.stringify(reg.ch)===JSON.stringify([.75,.75,.6,.6,.4,.4,.25,.25]),JSON.stringify(reg.ch));
    ok('les zones verrouillées ne sont jamais visées',reg.verrExclues,reg.verr.join(', ')||'aucune zone sauvage verrouillée');
    ok('rythme inchangé : une chance sur 6, rien avant le cycle 10',reg.tous===6&&reg.grace===10);
    const pla=await p.evaluate(()=>{const S=MZ.S,R=S.riv,libres=MZ.ZN.filter(Z=>!S.own[Z.id]&&!R.z[Z.id]&&!ESTDEP.has(Z.id));
      for(let i=0;i<RIV_MAX();i++)if(!Object.values(R.z).filter(k=>k==='gri').length||Object.values(R.z).filter(k=>k==='gri').length<RIV_MAX()){const Z=libres.shift();if(Z)R.z[Z.id]='gri'}
      let gri=0;for(let i=0;i<12;i++){const x=MZ.rival('prise');if(x&&x.r==='gri')gri++;MZ.rivalTente(false)}
      return{gri,zones:zonesMaison('gri').length,max:RIV_MAX()}});
    ok('plafond : une maison pleine ne tente plus de prise',pla.gri===0&&pla.zones===pla.max,JSON.stringify(pla));
    /* 3. contestation annoncée, puis échéance (réussite forcée) : un palier de moins, repos */
    const ct=await p.evaluate(()=>{const S=MZ.S,r=MZ.rival('conteste');if(!r)return null;const lv0=S.lv[r.id],c=JSON.parse(JSON.stringify(S.riv.c));
      const own0=S.own[r.id],fin=MZ.rivalArrive(true);return{r,lv0,lv1:S.lv[r.id],c,fin,rest:S.rest[r.id]-Date.now()/1000,cNull:S.riv.c===null,own:own0,ownApres:S.own[r.id],maison:S.riv.z[r.id]||null,emp:!!S.emp[r.id]}});
    ok('une contestation est annoncée sur une de vos zones',!!ct&&ct.c.du===ct.c.de+3&&ct.own,ct&&JSON.stringify(ct.c));
    /* 22 nov. (utilisateur) : la maison prend la zone, qui garde son palier ; si elle est au plafond, la zone redevient sauvage avec votre empreinte */
    ok('l\'échéance : la maison prend la zone (ou la rend sauvage, au plafond), palier gardé',!!ct&&ct.cNull&&!ct.ownApres&&ct.lv1===ct.lv0&&((ct.fin.fin==='prise'&&ct.maison===ct.r.r)||(ct.fin.fin==='sauvage'&&ct.emp)),ct&&JSON.stringify({fin:ct.fin,maison:ct.maison,emp:ct.emp,lv:ct.lv0+' → '+ct.lv1}));
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
