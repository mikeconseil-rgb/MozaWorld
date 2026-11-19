/* Test du contrôle des zones (domaines.js) : domaines fermés, cœur du royaume, encerclement, verrou de Citadelle, bonus branchés.
   Usage : node tv/tools/test-domaines.js   (depuis la racine du dépôt ; Playwright et Chromium doivent être installés)
   Three.js est servi depuis tv/android/assets/three.min.js, pour ne pas dépendre du réseau. */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail?' : '+detail:''));if(!cond&&!echec)echec=nom};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.domaines==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre et exporte MZ.domaines',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    const api=await p.evaluate(()=>[typeof verrouillee,typeof defenseMonde,typeof domaines].join(','));
    ok('fonctions globales verrouillee, defenseMonde, domaines',api==='function,function,function',api);
    /* 1. domaines : au moins 2 tuiles, du même type, voisines */
    const d=await p.evaluate(()=>{const L=domaines();return{n:L.length,min:Math.min(...L.map(x=>x.ids.length)),
      memeType:L.every(x=>x.ids.every(id=>(ZB[id].mod||id)===x.type)),fermes:L.filter(x=>x.ferme).map(x=>x.type+':'+x.ids.join('+'))}});
    ok('domaines de 2 tuiles au moins, d\'un seul type',d.n>0&&d.min>=2&&d.memeType,d.n+' domaines');
    ok('le territoire de départ ferme déjà des domaines',d.fermes.length>0,d.fermes.join(' · '));
    /* 2. fermer un domaine de Ressources : toast en file, bonus de mana au cycle */
    const r=await p.evaluate(()=>{const S=window.MZ.S,L=domaines().filter(x=>x.type==='RES'&&!x.ferme);if(!L.length)return null;const D=L[0];
      const avant=domFermes('RES').length;for(const id of D.ids)window.MZ.prendre(id);
      const t=ZMANA[D.ids[0]]||'Vent',m0=S.res[t]||0,lignes=[];domainesCycle(lignes);
      return{ids:D.ids.join('+'),avant,apres:domFermes('RES').length,ferme:domaines().find(x=>x.ids[0]===D.ids[0]).ferme,
        file:DOM_FILE.length,suivi:S.domFermes.indexOf(D.ids[0])>=0,mana:(S.res[t]||0)-m0,lignes:lignes.join(' / '),
        bandeau:(document.getElementById('bandeau')||{}).textContent||''}});
    ok('prendre toutes ses tuiles ferme le domaine de Ressources',!!r&&r.ferme&&r.apres===r.avant+1,r&&r.ids);
    ok('un toast « Domaine fermé » est en file',!!r&&r.file>0&&r.suivi);
    ok('domaine de Ressources fermé : +1 mana par cycle',!!r&&r.mana>=1,r&&r.lignes);
    ok('le bandeau affiche les domaines fermés',!!r&&/fermés/.test(r.bandeau));
    /* le toast d'accueil dure 6 s de jeu (plus longtemps dans un navigateur sans carte graphique) : on l'écourte, le nôtre attend son tour */
    await p.evaluate(()=>{toastT=0});await p.waitForTimeout(1500);
    const t1=await p.evaluate(()=>document.getElementById('t1').textContent);
    ok('le toast s\'affiche en exploration',/Domaine/.test(t1),t1);
    /* 3. cœur du royaume, verrou, defenseMonde */
    const c=await p.evaluate(()=>{const coeur=ZN.map(Z=>Z.id).filter(auCoeur);const vC=VOISINES.CIT.slice();
      const loin=ZN.map(Z=>Z.id).find(id=>!verrouillee(id)&&!auCoeur(id));
      return{coeur,dm:coeur.length?defenseMonde(coeur[0]):null,cit:verrouillee('CIT'),voisCIT:vC.every(verrouillee),loin,dCIT:defenseMonde('CIT')}});
    ok('des zones sont au cœur du royaume et verrouillées',c.coeur.length>0&&c.dm.bonus>=2,c.coeur.join(',')+' → '+(c.dm&&c.dm.raisons.join(', ')));
    ok('la Citadelle tenue se verrouille avec ses voisines',c.cit&&c.voisCIT,'défense CIT : '+c.dCIT.bonus+' ('+c.dCIT.raisons.join(', ')+')');
    ok('une zone loin de la Citadelle et hors du cœur n\'est pas verrouillée',!!c.loin,c.loin);
    /* 4. encerclement : prendre toutes les voisines d'une zone sauvage, ses gardiens d'activation faiblissent */
    const e=await p.evaluate(()=>{const S=window.MZ.S;const cand=ZN.map(Z=>Z.id).filter(id=>!S.own[id]).sort((a,b)=>VOISINES[a].filter(v=>!S.own[v]).length-VOISINES[b].filter(v=>!S.own[v]).length)[0];
      for(const v of VOISINES[cand])window.MZ.prendre(v);S.emp[cand]=false;
      const base=monstre(ZB[cand],2,false);return{id:cand,enc:encerclee(cand),base:base.pv,baseAtk:base.atk,statut:statutZone(cand)}});
    ok('une zone sauvage entourée est encerclée',e.enc,e.id+' : '+e.statut.join(', '));
    await p.evaluate(id=>window.MZ.combat(id,'eveil'),e.id);await p.waitForTimeout(1200);
    const f=await p.evaluate(()=>{const C=window.MZ.CB;if(!C)return null;const ch=C.foes.find(m=>m.chef);return{pv:ch.pv,atk:ch.atk,enc:!!ch.encercle,passifs:C.passifs.join(' | ')}});
    ok('ses gardiens d\'activation sont affaiblis',!!f&&f.enc&&f.pv===Math.max(1,Math.round(e.base*.75))&&f.atk===Math.max(1,e.baseAtk-1),f?`chef ${e.base}→${f.pv} PV, atk ${e.baseAtk}→${f.atk}`:'pas de combat');
    /* 5. bonus des Antres et Donjons fermés en combat */
    const b=await p.evaluate(()=>{const C=window.MZ.CB;if(!C)return null;invoquer({nom:'Bête de test',pv:5,max:5,atk:1,g:0,bete:1});const bt=C.allies[C.allies.length-1];
      return{ant:domFermes('ANT').length,don:domFermes('DON').length,bete:bt.pv,res:C.hero.res,dons:zonesA('DON').length}});
    ok('domaine d\'Antres fermé : +2 PV par bête',!!b&&(b.ant?b.bete===5+2*b.ant:b.bete===5),b&&('bête '+b.bete+' PV, '+b.ant+' domaine(s)'));
    ok('domaine de Donjons fermé : +1 résistance',!!b&&b.res===b.dons+b.don,b&&('résistance '+b.res));
    await p.keyboard.press('Escape');await p.waitForTimeout(400);
    await p.evaluate(()=>{if(window.MZ.CB)fuir()});await p.waitForTimeout(300);
    /* 6. la Pierre d'éveil montre le statut */
    const m=await p.evaluate(id=>{openEveil(ZB[id]);return document.body.innerText},e.id);
    ok('la Pierre d\'éveil montre « Zone encerclée »',/Zone encerclée/.test(m));
    const m2=await p.evaluate(()=>{const id=ZN.map(Z=>Z.id).find(auCoeur);openEveil(ZB[id]);return document.body.innerText});
    ok('la Pierre d\'éveil montre « Au cœur du royaume »',/Au cœur du royaume/.test(m2));
    await p.evaluate(()=>toMonde());
    /* 7. perdre une tuile rouvre le domaine */
    const o=await p.evaluate(()=>{const D=domFermes('RES')[0];DOM_FILE.length=0;window.MZ.prendre(D.ids[0],true);return{ferme:domaines().find(x=>x.ids[0]===D.ids[0]).ferme,file:DOM_FILE.map(x=>x[0]).join(',')}});
    ok('perdre une tuile rouvre le domaine (toast « Domaine ouvert »)',!o.ferme&&/Domaine ouvert/.test(o.file),o.file);
    /* 8. domaine d'Assemblées fermé : +1 voix au vote du duel */
    const v=await p.evaluate(()=>{const D=domaines().find(x=>x.type==='MAR'&&!x.ferme);if(!D)return null;const v0=voixDuel(ZB.MAR,1).v;for(const id of D.ids)window.MZ.prendre(id);
      const r=voixDuel(ZB.MAR,1);return{v0,v1:r.v,pour:r.pour.join(', ')}});
    ok('domaine d\'Assemblées fermé : +1 voix au vote du duel',!!v&&v.v1===v.v0+1,v&&v.pour);
    /* 9. un cycle complet et un duel tournent sans erreur */
    await p.evaluate(()=>window.MZ.cycle());await p.waitForTimeout(300);
    ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '))}
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des domaines : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des domaines : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des domaines : erreur',e);process.exit(1)});
