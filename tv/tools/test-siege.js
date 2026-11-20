/* Test du siège final : une partie démarre, Berestograd est Citadelle épique, la Pierre propose le siège à ±7,
   un siège échoue (la Citadelle recule d'un palier, repos), puis un siège est gagné (une vague tenue, une brisée par le héros
   au combat, une tenue) : écran de victoire, palmarès, nouveau monde ; sans erreur JavaScript.
   Usage : node tv/tools/test-siege.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
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
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.siege==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre avec MZ.siege',pret);
  if(pret){
    await p.evaluate(()=>{try{localStorage.removeItem('mz-palmares-1')}catch(_){}window.MZ.start()});await p.waitForTimeout(1500);
    /* 1. Citadelles épiques */
    const ep=await p.evaluate(()=>MZ.citadellesEpiques());
    ok('la Citadelle de la carte jouée est épique',ep.length===1&&ep[0]==='CIT',JSON.stringify(ep));
    const fiche=await p.evaluate(()=>{MZ.tp('CIT');hudKey='';hud();return document.getElementById('h-mai').textContent});
    ok('fiche : « Citadelle épique »',/Citadelle épique/.test(fiche),fiche);
    const avant7=await p.evaluate(()=>{MZ.S.lv.CIT=3;ZB.CIT.lvT=3;openEveil(ZB.CIT);return UI.opts.map(o=>o.l+' | '+(o.d||''))});
    ok('Pierre sous ±7 : Citadelle épique, pas de siège',avant7.some(l=>/^Citadelle épique/.test(l)&&/±7/.test(l))&&!avant7.some(l=>/Lancer le siège/.test(l)),avant7.filter(l=>/épique|siège/i.test(l)).join(' / '));
    await p.evaluate(()=>toMonde());
    const a7=await p.evaluate(()=>{MZ.S.own.CIT=true;MZ.S.act.CIT=true;MZ.S.lv.CIT=7;ZB.CIT.lvT=7;openEveil(ZB.CIT);const i=UI.opts.findIndex(o=>/Lancer le siège final/.test(o.l));
      if(i<0)return{i};UI.opts[i].go();return{i,t:document.getElementById('menu-t').textContent,corps:document.getElementById('menu-corps').textContent}});
    ok('à ±7 la Pierre propose « Lancer le siège final », avec avertissement',a7.i===0&&/Lancer le siège final/.test(a7.t)&&/Attention/.test(a7.corps),JSON.stringify(a7).slice(0,200));
    ok('pas de siège avant confirmation',await p.evaluate(()=>MZ.S.siege===null));
    /* 2. échec : vague 1 tenue, vague 2 passe */
    const l1=await p.evaluate(()=>{const i=UI.opts.findIndex(o=>/Lancer le siège$/.test(o.l));UI.opts[i].go();const s=MZ.S.siege;return s&&{vague:s.vague,force:s.force,arrive:s.arrive,nc:MZ.S.nc,mode:MZ.mode}});
    ok('le siège est lancé : vague 1 annoncée',!!l1&&l1.vague===1&&l1.arrive-l1.nc===3&&l1.force>=11,JSON.stringify(l1));
    await p.waitForTimeout(400);
    const vu=await p.evaluate(()=>({toast:document.getElementById('t1').textContent,bandeau:(document.getElementById('bandeau')||{}).textContent||''}));
    ok('toast d\'annonce',/vague 1 sur 3/.test(vu.toast),vu.toast);
    ok('ligne Menaces : vague 1/3',/Menaces/.test(vu.bandeau)&&/vague 1\/3/.test(vu.bandeau),vu.bandeau.slice(-120));
    /* 20 nov. (critique) : la Citadelle assiégée est à l'abri des rivaux */
    const ab=await p.evaluate(()=>{const S=MZ.S;riv();S.rest.CIT=0;const cc=ciblesConteste().some(Z=>Z.id==='CIT');S.riv.c={r:'gri',id:'CIT',de:S.riv.nc,du:S.riv.nc};const r=MZ.rivalArrive(true);return{cc,r,lv:S.lv.CIT}});
    ok('pendant le siège, la Citadelle n\'est ni contestable ni rabaissée par un rival',!ab.cc&&ab.r&&ab.r.fin==='protégée'&&ab.lv===7,JSON.stringify(ab));
    const v1=await p.evaluate(()=>MZ.siegeVague(true));
    ok('vague 1 tenue, vague 2 annoncée',!!v1&&v1.tenue&&v1.siege&&v1.siege.vague===2&&v1.siege.force>=13,JSON.stringify(v1));
    await p.waitForTimeout(300);await p.evaluate(()=>toMonde());
    const v2=await p.evaluate(()=>{const r=MZ.siegeVague(false);return{r,lv:MZ.S.lv.CIT,siege:MZ.S.siege,repos:MZ.S.siegeRepos.CIT-MZ.S.nc,titre:document.getElementById('menu-t').textContent}});
    ok('vague 2 passe : siège échoué, Citadelle à +6, repos',!v2.r.tenue&&v2.lv===6&&v2.siege===null&&v2.repos===5,JSON.stringify(v2).slice(0,240));
    await p.evaluate(()=>toMonde());
    const rep=await p.evaluate(()=>{MZ.S.lv.CIT=7;ZB.CIT.lvT=7;openEveil(ZB.CIT);return UI.opts.map(o=>o.l+' | '+(o.d||'')).filter(l=>/siège|épique/i.test(l))});
    ok('relance impossible pendant le repos',rep.some(l=>/se remettent/.test(l))&&!rep.some(l=>/Lancer le siège/.test(l)),rep.join(' / '));
    await p.evaluate(()=>toMonde());
    /* 3. victoire : vague 1 tenue, vague 2 brisée par le héros au combat, vague 3 tenue */
    const s2=await p.evaluate(()=>{const s=MZ.siege();return s&&s.vague});
    ok('MZ.siege() relance (repos levé)',s2===1);
    await p.evaluate(()=>{MZ.siegeVague(true)});await p.waitForTimeout(300);await p.evaluate(()=>toMonde());
    const cb=await p.evaluate(()=>{openEveil(ZB.CIT);const i=UI.opts.findIndex(o=>/Briser la vague 2/.test(o.l));if(i<0)return null;UI.opts[i].go();return MZ.CB&&{kind:MZ.CB.kind,siege:MZ.CB.siege,foes:MZ.CB.foes.length,sur:document.getElementById('cb-sur').textContent}});
    ok('combat contre la vague 2',!!cb&&cb.kind==='horde'&&cb.siege===2&&cb.foes===3,JSON.stringify(cb));
    await p.waitForTimeout(500);
    const brisees0=await p.evaluate(()=>MZ.S.hordesBilan.brisees);
    await p.evaluate(()=>{for(const m of MZ.CB.foes)m.pv=0;finSiFini()});
    /* la fin du combat passe par des animations : sous swiftshader et sur une machine chargée, on attend jusqu'à 20 s */
    await p.waitForFunction(()=>!MZ.CB&&MZ.mode==='menu',null,{timeout:20000}).catch(()=>{});await p.waitForTimeout(300);
    const ap=await p.evaluate(()=>({siege:MZ.S.siege&&MZ.S.siege.vague,titre:document.getElementById('menu-t').textContent,brisees:MZ.S.hordesBilan.brisees}));
    ok('vague 2 brisée par le héros, vague 3 annoncée',ap.siege===3&&/respire/.test(ap.titre)&&ap.brisees===brisees0+1,JSON.stringify(ap));
    const f3=await p.evaluate(()=>({force:MZ.S.siege.force,def:defenseHorde('CIT').total}));
    ok('vague 3 : menée par le chef, elle dépasse la défense (le héros doit la briser)',f3.force>f3.def,JSON.stringify(f3));
    await p.evaluate(()=>toMonde());
    const mini=await p.evaluate(()=>{try{const c=document.createElement('canvas').getContext('2d');dessinerSiege(c,1,0,0,1);return true}catch(e){return String(e)}});
    ok('minicarte : dessin du siège sans erreur',mini===true,String(mini));
    const graine=await p.evaluate(()=>MZ.S.graine);
    const v3=await p.evaluate(()=>MZ.siegeVague(true));
    await p.waitForTimeout(400);
    const vic=await p.evaluate(()=>({titre:document.getElementById('menu-t').textContent,corps:document.getElementById('menu-corps').textContent,opts:UI.opts.map(o=>o.l),fini:MZ.S.siegeFini,pal:MZ.palmares()}));
    ok('vague 3 tenue : victoire',!!v3&&v3.victoire,JSON.stringify(v3));
    ok('écran de victoire avec résumé',/le monde est à vous/.test(vic.titre)&&/Zones tenues/.test(vic.corps)&&/Hordes brisées/.test(vic.corps)&&/Maisons rivales/.test(vic.corps)&&/Temps de jeu/.test(vic.corps),vic.titre);
    ok('palmarès gardé (localStorage)',vic.pal.length===1&&vic.pal[0].cit==='CIT'&&vic.pal[0].vagues.brisees===1,JSON.stringify(vic.pal[0]).slice(0,200));
    ok('nouveau monde proposé',vic.opts[0]==='Commencer un nouveau monde',vic.opts.join(' / '));
    /* menu Pause : palmarès et nouveau monde */
    const pause=await p.evaluate(()=>{toMonde();openMenu();return UI.opts.map(o=>o.l)});
    ok('menu Pause : Palmarès et nouveau monde',pause.includes('Palmarès')&&pause.includes('Commencer le nouveau monde'),pause.filter(l=>/Palmar|monde/.test(l)).join(' / '));
    await p.evaluate(()=>{const i=UI.opts.findIndex(o=>o.l==='Palmarès');UI.opts[i].go()});
    ok('écran Palmarès',await p.evaluate(()=>/1 monde gagné/.test(document.getElementById('menu-t').textContent)));
    await p.evaluate(()=>toMonde());
    const nm=await p.evaluate(()=>{openEveil(ZB.CIT);const i=UI.opts.findIndex(o=>o.l==='Commencer un nouveau monde');if(i<0)return null;UI.opts[i].go();const j=UI.opts.findIndex(o=>o.l==='Commencer le nouveau monde');UI.opts[j].go();return true});
    await p.waitForTimeout(1500);
    const apres=await p.evaluate(()=>({graine:MZ.S.graine,fini:MZ.S.siegeFini,siege:MZ.S.siege,nc:MZ.S.nc,pal:MZ.palmares().length,mode:MZ.mode}));
    ok('nouveau monde : graine changée, victoire oubliée, palmarès gardé',nm&&apres.graine!==graine&&apres.fini===null&&apres.siege===null&&apres.nc===0&&apres.pal===1,JSON.stringify(apres));
    /* mort pendant le siège : le siège est levé */
    const mo=await p.evaluate(()=>{MZ.siege();mort();toMonde();return!!MZ.S.siege});
    await p.waitForTimeout(2500);
    ok('mort du héros : le siège est levé',mo&&await p.evaluate(()=>MZ.S.siege===null));
  }
  ok('aucune erreur JavaScript',!erreurs.length,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  console.log(echec?'\nTest du siège final : ÉCHEC ('+echec+')':'\nTest du siège final : tout passe.');
  process.exit(echec?1:0);
})().catch(e=>{console.error(e);process.exit(2)});
