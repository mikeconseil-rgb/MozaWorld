/* Test des lois du monde des Assemblées (lot 3, src/lois.js) : une partie démarre ; chaque loi du catalogue est mise en vigueur
   sur Givrecloche (MZ.loiForcer, test seulement) et change bien l'état attendu (hordes, rivaux, tours, tesselles, Donjons, domaines, routes) ;
   les six lois à fiche agissent avec les nouveaux modules (Greniers, Brume, bornage) ; le Duel d'arguments gagné renforce la loi ;
   écran « Lois du monde » au menu Pause et ligne de la Pierre d'éveil ; sauvegarde et mort ; aucune erreur JavaScript.
   Le catalogue est aussi vérifié sur les 182 Assemblées de la liste des 986 (design/donnees/sous-zones-986-v2.csv) : chaque pôle a sa loi,
   et les deux pôles d'une Assemblée donnent deux lois différentes.
   Usage : node tv/tools/test-lois.js   (depuis la racine du dépôt, après « sh tv/build.sh » ; Playwright et Chromium installés) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..'),page0='file://'+path.join(racine,'index.html');
const three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const etapes=[];let echec=null;
const ok=(nom,cond,detail)=>{etapes.push((cond?'OK    ':'ÉCHEC ')+nom+(detail!==undefined?' : '+detail:''));if(!cond&&!echec)echec=nom};
const appelees=new Set();
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});
  const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto(page0);
  const pret=await p.waitForFunction(()=>window.MZ&&typeof window.MZ.lois==='function',null,{timeout:30000}).then(()=>true,()=>false);
  ok('la page démarre avec MZ.lois',pret);
  if(pret){
    await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(1500);
    /* 0. le catalogue : 8 à 12 lois ; chaque pôle des 182 Assemblées a sa loi, deux lois différentes par Assemblée */
    const cat=await p.evaluate(()=>({n:MZ.lois().catalogue.length,poles:MZ.loisTest.LOI_POLES,ordre:MZ.lois().catalogue.map(c=>c.k)}));
    ok('catalogue de 8 à 12 lois',cat.n>=8&&cat.n<=12,String(cat.n));
    const csv=fs.readFileSync(path.join(racine,'..','design','donnees','sous-zones-986-v2.csv'),'utf8').replace(/^﻿/,'').split(/\r?\n/).map(l=>l.split(';'));
    const ass=csv.filter(r=>/^Assembl/.test(r[1]||''));
    const sansLoi=[...new Set(ass.flatMap(r=>[r[6],r[7]]))].filter(x=>!cat.poles[x]);
    const memes=ass.filter(r=>cat.poles[r[6]]===cat.poles[r[7]]);
    ok('les 182 Assemblées de la liste ont une loi pour chacun de leurs pôles',ass.length===182&&!sansLoi.length,ass.length+' Assemblées ; sans loi : '+sansLoi.join(', '));
    ok('deux pôles d\'une Assemblée, deux lois différentes',!memes.length,memes.map(r=>r[0]).join(', '));
    const usage={};for(const r of ass)for(const x of[r[6],r[7]])usage[cat.poles[x]]=(usage[cat.poles[x]]||0)+1;
    ok('chaque loi du catalogue sert au moins une Assemblée de la liste',cat.ordre.every(k=>usage[k]>0),JSON.stringify(usage));
    /* déterminisme et pôle inconnu */
    const det=await p.evaluate(()=>({fiche:MZ.loisTest.loisDe('MAR')===null}));
    ok('une Assemblée à fiche n\'a pas de loi du catalogue (sa fiche suffit)',det.fiche);

    /* préparation : Givrecloche à vous au palier +1 (Clarté : pas de Brume pendant les essais), aucune horde ni rival en cours */
    const prep=await p.evaluate(()=>{const S=MZ.S;S.lv.MAR=1;S.own.MAR=S.act.MAR=true;S.hordes={};S.hordeMur={};
      const jur=aPortee('MAR',MZ.lois().portee);return{jur:Object.keys(jur),own:Object.keys(jur).filter(id=>S.own[id])}});
    ok('Givrecloche a une juridiction avec des zones à vous',prep.own.length>=3,prep.own.join(', '));
    const etat0=await p.evaluate(()=>MZ.lois());
    ok('MZ.lois() montre la Clarté en vigueur',etat0.vigueur.some(v=>v.id==='MAR'&&v.nom==='Clarté'),JSON.stringify(etat0.vigueur));

    /* 1. Loi du Guet : la horde vers une zone à vous de la juridiction arrive 1 cycle plus tard (2 renforcée) */
    const guet=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2),c=Object.keys(jur).find(id=>id!=='MAR'&&S.own[id]&&!S.tours?.[id]&&(S.lv[id]||0)!==0);
      const essai=k=>{S.hordes={};MZ.loiForcer('MAR',k);const h=MZ.horde(src,c);const d=h?h.arrive-h.nee:null;S.hordes={};return d};
      var src=null;S.hordes={};const h0=MZ.horde(null,c);src=h0&&h0.src;S.hordes={};
      const sans=essai(null),avec=essai('guet');MZ.loiRenforcer('MAR');const renf=essai('guet');MZ.loiRenforcer('MAR',true);return{c,src,sans,avec,renf}});
    appelees.add('guet');
    ok('Loi du Guet : +1 cycle de préavis, +2 renforcée',guet.avec===guet.sans+1&&guet.renf===guet.sans+2,JSON.stringify(guet));

    /* 2. Loi des Fossés : la horde perd 1 de force (2 renforcée) */
    const fos=await p.evaluate(g=>{const S=MZ.S,r0=Math.random;Math.random=()=>0;
      const essai=k=>{S.hordes={};MZ.loiForcer('MAR',k);const h=MZ.horde(g.src,g.c);const f=h?h.force:null;S.hordes={};return f};
      const sans=essai(null),avec=essai('fosses');MZ.loiRenforcer('MAR');const renf=essai('fosses');MZ.loiRenforcer('MAR',true);Math.random=r0;return{sans,avec,renf}},guet);
    appelees.add('fosses');
    ok('Loi des Fossés : force −1, −2 renforcée',fos.avec===fos.sans-1&&fos.renf===fos.sans-2,JSON.stringify(fos));

    /* 3. Loi des Feux trompeurs : la horde choisit une autre cible que vos zones de la juridiction */
    const leu=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2),sauv={};
      for(const Z of MZ.ZN){const src=Z.id;if(S.own[src]||(Z.mod||src)==='RES')continue;const d=aPortee(src,2);
        const c=Object.keys(d).find(id=>id!==src&&S.own[id]&&jur[id]!==undefined),w=Object.keys(d).find(id=>id!==src&&!S.own[id]&&ZB[id]);
        if(!c||!w)continue;
        for(const id of Object.keys(d))sauv[id]=S.lv[id];
        const p=poleEnvahisseur(src),s=p===2?1:p;S.lv[src]=7*s;for(const id of Object.keys(d))if(id!==src&&id!==c&&id!==w)S.lv[id]=1;S.lv[c]=5;S.lv[w]=-5;
        S.hordes={};MZ.loiForcer('MAR',null);const sans=MZ.loisTest.cibleHorde(src);MZ.loiForcer('MAR','leurre');const avec=MZ.loisTest.cibleHorde(src);
        const reste=Object.keys(S.hordes).length;for(const id in sauv)S.lv[id]=sauv[id];return{src,c,w,sans,avec,reste}}
      return null});
    appelees.add('leurre');
    ok('Feux trompeurs : sans la loi la horde vise votre zone, avec la loi une zone sauvage',!!leu&&leu.sans===leu.c&&leu.avec===leu.w&&leu.reste===0,JSON.stringify(leu));

    /* 4. Loi des Témoins : −15 points de chance aux rivaux (contestation et épreuve), −25 renforcée */
    const tem=await p.evaluate(()=>{const S=MZ.S,T=MZ.loisTest,jur=aPortee('MAR',2);riv();
      const c=Object.keys(jur).find(id=>S.own[id]&&id!=='MAR'),w=Object.keys(jur).find(id=>!S.own[id]);const lw=S.lv[w];S.lv[w]=1;
      MZ.loiForcer('MAR',null);const r0=T.chanceRival(c),e0=T.chanceEpreuve(w);MZ.loiForcer('MAR','temoins');const r1=T.chanceRival(c),e1=T.chanceEpreuve(w);
      MZ.loiRenforcer('MAR');const r2=T.chanceRival(c);MZ.loiRenforcer('MAR',true);S.lv[w]=lw;return{c,w,r0,r1,r2,e0,e1}});
    appelees.add('temoins');
    const pr=x=>Math.round(x*100);
    ok('Loi des Témoins : contestation −15 (−25 renforcée), épreuve d\'une zone sauvage −15',pr(tem.r0-tem.r1)===15&&pr(tem.r0-tem.r2)===25&&pr(tem.e0-tem.e1)===15,JSON.stringify(tem));

    /* 5. Loi du Couvre-feu : une action de maison avorte (hasard forcé) ; sans la loi, la maison agit */
    const cvf=await p.evaluate(()=>{const S=MZ.S,T=MZ.loisTest,r0=Math.random;Math.random=()=>0;const sv=JSON.stringify(S.riv);
      MZ.loiForcer('MAR','couvrefeu');const st0=MZ.lois().stats.couvrefeu,avec=T.rivalAgit(false),st1=MZ.lois().stats.couvrefeu;
      MZ.loiForcer('MAR',null);const sans=T.rivalAgit(false);Math.random=r0;S.riv=JSON.parse(sv);return{avec,sans,arret:st1-st0}});
    appelees.add('couvrefeu');
    ok('Loi du Couvre-feu : l\'action de la maison avorte, elle agit sans la loi',cvf.avec===null&&cvf.arret===1&&!!cvf.sans,JSON.stringify(cvf));

    /* 6. Loi du Cadastre : une maison qui tient déjà une zone ne peut plus en tenter une autre (plafond 2 → 1) */
    const cad=await p.evaluate(()=>{const S=MZ.S,T=MZ.loisTest,R=riv(),sv=JSON.stringify(S.riv),r=RIVAUX[0];
      const libres=MZ.ZN.filter(Z=>!S.own[Z.id]&&!ESTDEP.has(Z.id));R.z={};R.t={};R.c=null;R.z[libres[0].id]=r.k;
      MZ.loiForcer('MAR','cadastre');const avec=T.tenter(r,libres[1]),tAvec=!!R.t[r.k];
      MZ.loiForcer('MAR',null);const sans=T.tenter(r,libres[1]),tSans=!!R.t[r.k];S.riv=JSON.parse(sv);return{max:RIV_MAX(),avec,tAvec,sans:!!sans,tSans}});
    appelees.add('cadastre');
    ok('Loi du Cadastre : plafond abaissé, la tentative est refusée ; sans la loi elle part',cad.avec===null&&!cad.tAvec&&cad.sans&&cad.tSans,JSON.stringify(cad));

    /* 7. Loi des Vigies : une tour couvre une zone de la juridiction : défense +1 et préavis +1 */
    const vig=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2),c=Object.keys(jur).find(id=>S.own[id]&&!empecheTour(id));MZ.tour(c);
      MZ.loiForcer('MAR',null);const d0=MZ.defenseTours(c).bonus,p0=MZ.preavisTours(c);MZ.loiForcer('MAR','vigies');const d1=MZ.defenseTours(c).bonus,p1=MZ.preavisTours(c),rs=MZ.defenseTours(c).raisons;
      MZ.tourTombe(c);return{c,d0,d1,p0,p1,rs}});
    appelees.add('vigies');
    ok('Loi des Vigies : tour à +3 de défense et 3 cycles de préavis',vig.d1===vig.d0+1&&vig.p1===vig.p0+1&&vig.rs.some(r=>/Vigies/.test(r)),JSON.stringify(vig));

    /* 8. Loi de la Dîme : 1 tesselle par cycle, plus 1 par Citadelle tenue de la juridiction */
    const dim=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2);MZ.loiForcer('MAR','dime');const t0=MZ.tesselles(),r=MZ.loisCycle(),t1=MZ.tesselles();
      const cit=MZ.ZN.filter(Z=>(Z.mod||Z.id)==='CIT'&&S.own[Z.id]&&S.act[Z.id]&&jur[Z.id]!==undefined).length;
      MZ.loiRenforcer('MAR');const r2=MZ.loisCycle();MZ.loiRenforcer('MAR',true);MZ.loiForcer('MAR',null);return{t0,t1,tess:r.tess,attendu:1+cit,renf:r2.tess}});
    appelees.add('dime');
    ok('Loi de la Dîme : tesselles versées (1 + Citadelles de la juridiction, double renforcée)',dim.tess===dim.attendu&&dim.t1-dim.t0===dim.tess&&dim.renf===2*dim.attendu,JSON.stringify(dim));

    /* 9. Loi des Corvées : un piège endormi d'un Donjon de la juridiction se réveille sans mana */
    const cor=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2);let D=Object.keys(jur).find(id=>(ZB[id].mod||id)==='DON'&&S.own[id]&&S.act[id]);
      if(!D){D=Object.keys(jur).find(id=>(ZB[id].mod||id)==='DON');MZ.prendre(D)}
      MZ.amenager(D,['herse','glyphe']);const T=piegesTab(D);T.forEach(x=>{if(x)x.dort=true});const res0=JSON.stringify(S.res);
      MZ.loiForcer('MAR',null);MZ.loisCycle();const dortSans=T.filter(x=>x&&x.dort).length;
      MZ.loiForcer('MAR','corvee');const r=MZ.loisCycle();const dortAvec=T.filter(x=>x&&x.dort).length;MZ.loiForcer('MAR',null);
      return{D,dortSans,dortAvec,corvee:r.corvee,mana:JSON.stringify(S.res)===res0}});
    appelees.add('corvee');
    ok('Loi des Corvées : un piège endormi réveillé par cycle, sans mana',cor.dortSans===2&&cor.dortAvec===1&&cor.corvee===1&&cor.mana,JSON.stringify(cor));

    /* 10. Loi des Communs : une zone d'un domaine fermé dans la juridiction gagne +1 de protection */
    const com=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2),dm=MZ.domaines().find(d=>d.type!=='MAR'&&d.ids.some(id=>jur[id]!==undefined));if(!dm)return null;
      const pris=dm.ids.filter(id=>!S.own[id]);for(const id of dm.ids)MZ.prendre(id);const c=dm.ids.find(id=>jur[id]!==undefined);
      MZ.loiForcer('MAR',null);const b0=MZ.defenseMonde(c).bonus,h0=MZ.hordeDefense(c).total;MZ.loiForcer('MAR','communs');const b1=MZ.defenseMonde(c).bonus,h1=MZ.hordeDefense(c).total;
      MZ.loiForcer('MAR',null);const ferme=MZ.domaines().find(d=>d.ids.indexOf(c)>=0).ferme;for(const id of pris)MZ.prendre(id,true);return{c,type:dm.type,ferme,b0,b1,h0,h1}});
    appelees.add('communs');
    ok('Loi des Communs : protection +1 dans un domaine fermé (et défense contre les hordes)',!!com&&com.ferme&&com.b1===com.b0+1&&com.h1===com.h0+1,JSON.stringify(com));

    /* 11. Loi des Relais : une route ouverte depuis la juridiction rapporte 1 tesselle par cycle */
    const rel=await p.evaluate(()=>{const S=MZ.S,jur=aPortee('MAR',2),r=Object.keys(jur).find(id=>(ZB[id].mod||id)==='RES'&&S.own[id]);if(!r)return null;
      S.lv[r]=2;S.routes=S.routes||{};S.routes[r]=[VOISINES[r][0]];MZ.loiForcer('MAR',null);const s0=MZ.loisCycle().tess;
      MZ.loiForcer('MAR','relais');const t0=MZ.tesselles(),x=MZ.loisCycle(),t1=MZ.tesselles();MZ.loiForcer('MAR',null);const n=loiRelais(r);delete S.routes[r];
      return{r,s0,tess:x.tess,gain:t1-t0,n}});
    appelees.add('relais');
    ok('Loi des Relais : +1 tesselle par route de la juridiction',!!rel&&rel.s0===0&&rel.tess===1&&rel.gain===1,JSON.stringify(rel));
    ok('chaque loi du catalogue a été essayée',cat.ordre.every(k=>appelees.has(k)),cat.ordre.filter(k=>!appelees.has(k)).join(', ')||'toutes');

    /* 12. les six lois à fiche avec les nouveaux modules */
    const fic=await p.evaluate(g=>{const S=MZ.S,out={};S.hordes={};
      /* Greniers de Pama : horde vers votre zone, délai doublé (triplé renforcé) */
      const sv={own:S.own.ASS150,act:S.act.ASS150,lv:S.lv.ASS150};S.own.ASS150=S.act.ASS150=true;S.lv.ASS150=1;
      let h=MZ.horde(g.src,g.c);out.greniers=h&&h.arrive-h.nee;S.hordes={};MZ.loiRenforcer('ASS150');h=MZ.horde(g.src,g.c);out.greniersR=h&&h.arrive-h.nee;S.hordes={};MZ.loiRenforcer('ASS150',true);
      S.own.ASS150=sv.own;S.act.ASS150=sv.act;S.lv.ASS150=sv.lv;
      /* Brume de Givrecloche : les voisines à vous sont cachées ; à 2 tuiles en vigueur renforcée */
      S.lv.MAR=-1;const v=VOISINES.MAR.find(id=>S.own[id]),d2=Object.keys(aPortee('MAR',2)).find(id=>S.own[id]&&VOISINES.MAR.indexOf(id)<0&&id!=='MAR');
      out.brume=cacheParBrume(v);out.brume2=d2?cacheParBrume(d2):null;MZ.loiRenforcer('MAR');out.brume2R=d2?cacheParBrume(d2):null;MZ.loiRenforcer('MAR',true);S.lv.MAR=1;
      /* Pierre de bornage de Raak : la zone bornée ne recule pas tant qu'elle est à vous */
      const s2={own:S.own.ASS155,act:S.act.ASS155,lv:S.lv.ASS155,borne:S.borne};S.own.ASS155=S.act.ASS155=true;S.lv.ASS155=1;S.borne=g.c;const lv0=S.lv[g.c];
      out.bornee=borne(g.c);const l=defaite(g.c);out.tient=S.lv[g.c]===lv0&&l.some(x=>/bornage/.test(x));
      MZ.loiRenforcer('ASS155');out.borneDef=MZ.defenseMonde(g.c).raisons.some(r=>/bornage/.test(r));MZ.loiRenforcer('ASS155',true);
      S.own[g.c]=false;out.perdue=borne(g.c);S.own[g.c]=true;
      S.own.ASS155=s2.own;S.act.ASS155=s2.act;S.lv.ASS155=s2.lv;S.borne=s2.borne;
      /* Clarté renforcée : portée 3 */
      out.clarte=Object.keys(clarte()).length;MZ.loiRenforcer('MAR');out.clarteR=Object.keys(clarte()).length;MZ.loiRenforcer('MAR',true);
      return out},guet);
    ok('Greniers de Pama : délai de la horde doublé, triplé renforcé',fic.greniers===guet.sans+3&&fic.greniersR===fic.greniers+3,JSON.stringify(fic));
    ok('Brume de Givrecloche : voisines cachées, 2 tuiles renforcée',fic.brume&&(fic.brume2===null||(!fic.brume2&&fic.brume2R)),JSON.stringify(fic));
    ok('Pierre de bornage : la zone ne recule pas, +2 renforcée ; une zone perdue n\'est plus bornée (corrigé)',fic.bornee&&fic.tient&&fic.borneDef&&!fic.perdue,JSON.stringify(fic));
    ok('Clarté renforcée : on voit plus loin',fic.clarteR>fic.clarte,fic.clarte+' → '+fic.clarteR);

    /* 13. Duel d'arguments gagné : la loi passe en vigueur renforcée */
    const duel=await p.evaluate(()=>{const S=MZ.S;S.lv.MAR=1;suivreLois();LOI_FILE.length=0;window.__toasts=[];const t0=toast;toast=function(a){window.__toasts.push(a);return t0.apply(this,arguments)};DUEL={Z:ZB.MAR,target:2,eff:1,vote:{v:0,pour:[],contre:[]}};finDuel(true);
      const e=MZ.lois(),v=e.vigueur.find(v=>v.id==='MAR');return{lv:S.lv.MAR,renf:v&&v.renforcee,jusqua:v&&v.jusqua,nc:S.nc,cycles:e.renfCycles}});
    ok('Duel gagné : Givrecloche monte et sa loi est renforcée 10 cycles',duel.lv===2&&duel.renf&&duel.jusqua===duel.nc+duel.cycles,JSON.stringify(duel));
    /* la mue se joue, puis l'écran de mue ; de retour dans le monde, le message de la loi renforcée passe */
    await p.waitForFunction(()=>MZ.mode==='menu'&&/Mue/.test(document.getElementById('menu-sur').textContent),null,{timeout:60000}).catch(()=>{});
    await p.evaluate(()=>{toMonde();toastT=0});   /* rendu logiciel lent : on n'attend pas la fin du toast de la mue */
    await p.waitForFunction(()=>window.__toasts.some(t=>/renforcée/.test(t)),null,{timeout:30000}).catch(()=>{});
    ok('un message annonce la loi renforcée',await p.evaluate(()=>window.__toasts.some(t=>/renforcée/.test(t))),await p.evaluate(()=>window.__toasts.join(' | ')));

    /* 14. écran « Lois du monde » au menu Pause, Pierre d'éveil */
    const ecr=await p.evaluate(()=>{openMenu();const m=UI.opts.find(o=>o.l==='Lois du monde');if(!m)return null;m.go();
      const r={t:document.getElementById('menu-t').textContent,opts:UI.opts.map(o=>o.l),corps:document.getElementById('menu-corps').textContent};
      const i=UI.opts.findIndex(o=>/Clarté/.test(o.l));if(i>=0){UI.opts[i].go();r.detail=document.getElementById('menu-t').textContent;r.dopts=UI.opts.map(o=>o.l)}
      return r});
    ok('menu Pause → « Lois du monde » : lois en vigueur et endormies',!!ecr&&ecr.t==='Lois du monde'&&ecr.opts.some(o=>/Clarté · renforcée/.test(o))&&ecr.opts.some(o=>o==='Lois endormies'),JSON.stringify(ecr&&ecr.opts));
    ok('détail d\'une loi : aller à l\'Assemblée',!!ecr&&/Givrecloche/.test(ecr.detail||'')&&ecr.dopts.some(o=>/Aller/.test(o)),JSON.stringify(ecr&&ecr.dopts));
    const pierre=await p.evaluate(()=>{openEveil(ZB.MAR);const fi=UI.opts.find(o=>/^Loi en vigueur/.test(o.l));
      MZ.loiForcer('MAR','guet');const cat=optionsLoiCatalogue(ZB.MAR).map(o=>o.l+' — '+o.d);MZ.loiForcer('MAR',null);
      const dort=MZ.ZN.find(Z=>(Z.mod||Z.id)==='MAR'&&!MZ.S.own[Z.id]);openEveil(dort);const fd=UI.opts.find(o=>/^Loi endormie/.test(o.l));toMonde();
      return{fiche:fi&&fi.l+' — '+fi.d,cat,dort:fd&&fd.d}});
    ok('Pierre d\'éveil : ligne de la loi en vigueur renforcée',/renforcée/.test(pierre.fiche||''),pierre.fiche);
    ok('Pierre d\'éveil d\'une Assemblée du catalogue : loi en vigueur et juridiction',pierre.cat.some(l=>/Loi du Guet/.test(l)&&/Juridiction/.test(l)),pierre.cat.join(' | '));
    ok('Pierre d\'éveil d\'une Assemblée sauvage : loi endormie et comment la réveiller',/prenez et activez/.test(pierre.dort||''),pierre.dort);

    /* 15. sauvegarde, mort */
    const sv=await p.evaluate(()=>{save();const o=JSON.parse(localStorage.getItem('mz-tv-1'));return o.loisRenf&&o.loisRenf.MAR});
    ok('la vigueur renforcée est dans la sauvegarde',sv>0,String(sv));
    const mo=await p.evaluate(()=>{mort();const r=Object.keys(MZ.S.loisRenf).length;toMonde();return r});
    ok('à la mort du héros, les lois renforcées retombent',mo===0,String(mo));
    await p.waitForTimeout(2500);
  }
  ok('aucune erreur JavaScript',erreurs.length===0,erreurs.slice(0,3).join(' | '));
  await nav.close();
  console.log(etapes.join('\n'));
  if(echec){console.error('\nTest des lois du monde : ÉCHEC ('+echec+')');process.exit(1)}
  console.log('\nTest des lois du monde : tout passe.');
})().catch(e=>{console.error(etapes.join('\n'));console.error('Test des lois du monde : erreur',e);process.exit(1)});
