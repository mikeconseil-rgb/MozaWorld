/* Banc de jeu du combat (Plateau, 19 nov.) : jouer un combat coup par coup en ligne de commande, ou en faire jouer des lots par un robot.
   Sert aux testeurs (fonctionnel et gameplay) qui ne peuvent pas tenir la manette.
   Usage (depuis la racine du dépôt) :
     node tv/tools/jouer.js --graine 3 --profil depart --zone ANT120 --actions "j0 p1,0 j1>0 f"
       → rejoue les actions dans l'ordre et affiche l'état du combat (plateau, main, intentions, journal)
       actions : jI = jouer la carte I de la main (jI>K : sur l'ennemi « cible K ») ; mI = manœuvre de votre unité I (ordre de « unites »), puis pV,R ; pV,R = poser l'unité en attente en voie V (0 haute,1 milieu,2 basse), rang R (0 avant, 1 arrière) ;
                 ok = garder la case proposée ; f = fin du tour
     node tv/tools/jouer.js --lot 40 --profil milieu        → 40 combats joués par le robot, statistiques
     mode serveur (un combat, page gardée ouverte, beaucoup plus rapide) : --port 8710 [autres options] puis curl 'localhost:8710/?a=j0%20ok%20f' (actions), '/cap?f=/chemin.png' (capture), '/stop' (fin) ;
     options : --kind renc|eveil (défaut renc) · --niveau N (niveau de la zone combattue) · --noeud (ancien Nœud, pour comparer) · --capture fichier.png
   Profils : depart (paquet de départ, 6 cartes, zones à ±1) · milieu (zones de départ à ±3, cartes des paliers 1-3) · fort (±6, paliers 1-6). */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const A=process.argv.slice(2),opt=k=>{const i=A.indexOf('--'+k);return i<0?null:(A[i+1]&&!A[i+1].startsWith('--')?A[i+1]:true)};
const racine=path.resolve(__dirname,'..'),three=fs.readFileSync(path.join(racine,'android','assets','three.min.js'));
const graine=+(opt('graine')||1),lot=+(opt('lot')||0),profil=opt('profil')||'depart',kind=opt('kind')||'renc',niveau=opt('niveau'),zone=opt('zone'),noeud=!!opt('noeud');
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p=await nav.newPage({viewport:{width:1280,height:720}});const erreurs=[];p.on('pageerror',e=>erreurs.push(String(e.message||e)));
  await p.route('**/three.min.js',r=>r.fulfill({body:three,contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.addInitScript(g=>{let a=g>>>0||1;Math.random=()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};try{localStorage.clear()}catch(e){}},graine);
  await p.goto('file://'+path.join(racine,'index.html'),{timeout:240000,waitUntil:'domcontentloaded'});
  await p.waitForFunction(()=>window.MZ&&typeof window.MZ.start==='function',null,{timeout:240000});
  await p.evaluate(()=>window.MZ.start());await p.waitForTimeout(800);
  /* outils dans la page */
  await p.evaluate(({profil,noeud})=>{window.JR={log:[]};const jA=jouer;jouer=function(){if(CB)CB.mzVol=1;return jA.apply(this,arguments)};const j0=journal;journal=function(t){JR.log.push(t);return j0.apply(this,arguments)};
    if(noeud){const pv0=paverPlateau;paverPlateau=function(Z){pv0(Z);CB.cases=undefined}}
    const L={depart:1,milieu:3,fort:6}[profil]||1;
    if(L>1){const ids=ZN.filter(Z=>S.own[Z.id]).map(Z=>Z.id),deck=[];
      for(const id of ids){const Z=ZB[id],s=Math.sign(S.lv[id]||1);if((Z.mod||id)==='RES'){S.lv[id]=Math.min(3,L);continue}S.lv[id]=s*L;
        for(let n=1;n<=L;n++){const k=id+'#'+(s<0?'-':'+')+n;if(CK[k])deck.push(k)}}
      S.deck=deck}
    /* avance le temps jusqu'à ce que le joueur ait la main (ou que le combat finisse) */
    JR.avance=()=>{for(let i=0;i<4000&&CB&&(CB.busy||CB.q.length)&&!(!CB.busy&&!CB.q.length);i++)cbTick(.25);};
    JR.etat=()=>{const C=CB;if(!C)return{fini:true,issue:JR.issue};const nom=u=>u?u.nom+' '+u.pv+'/'+u.max+(u.g?' ⛨'+u.g:''):'·';
      const intn=m=>m.int?m.int.ic+(m.int.v?m.int.v:'')+' '+m.int.t+(m.chef&&m.cv!=null?' (voie '+m.cv+')':''):'';
      const vo=[0,1,2].map(v=>{const av=C.cases?occupant(v,0):null,ar=C.cases?occupant(v,1):null,e=vivants(C.foes).filter(m=>!m.chef&&m.voie===v).sort((a,b)=>rangDe(a)-rangDe(b));
        return{voie:v,cases:C.cases?{a_arriere:caseType('a',v,1),a_avant:caseType('a',v,0),e_avant:caseType('e',v,0)}:null,arriere:nom(ar)+(ar?' ⚔'+forceBete(ar):''),avant:nom(av)+(av?' ⚔'+forceBete(av):''),
          ennemis:e.map(m=>'cible '+vivants(C.foes).indexOf(m)+' : '+nom(m)+' ['+intn(m)+']'+(m.br&&m.br.length?' brûle':'')+(m.vul?' vuln'+m.vul:''))}});
      const chef=vivants(C.foes).find(m=>m.chef);
      return{tour:C.tour,heros:nom(C.hero),garde:nom(gardeU()),mana:dispo()+'/'+C.capT,centre:C.centre,attente:C.pl?{unite:C.pl.u.nom,propose:[C.pl.v,C.pl.r]}:null,unites:C.cases?surTerrain().map((u,i)=>i+' : '+u.nom+' voie '+u.voie+' rang '+(u.rang||0)):null,manoeuvre:C.cases?manoeuvrePossible():null,
        voies:vo,chef:chef?'cible '+vivants(C.foes).indexOf(chef)+' : '+nom(chef)+' ['+intn(chef)+']':null,menaces:C.cases?menaces():null,
        main:C.main.map((k,i)=>i+': '+CK[k].nom()+' (coût '+CK[k].cout+(enGris(k)?', gris':'')+(jouable(k)?'':', trop cher')+') '+String(CK[k].txt(k)).replace(/<[^>]+>/g,'')),
        pioche:C.pile.length,defausse:C.defausse.length,passifs:C.passifs}};
    const fc=finCombat;finCombat=function(ok){JR.issue=ok?'victoire':'défaite';JR.tours=CB.tour;JR.pvFin=CB.hero.pv;JR.pvMax=CB.hero.max;return fc.apply(this,arguments)};
  },{profil,noeud});
  const lancer=async(z)=>p.evaluate(({z,kind,niveau})=>{JR.issue=null;JR.log=[];if(window.CB)fermerCombat();mode='monde';
    const cands=ZN.filter(Z=>!S.own[Z.id]&&(Z.mod||Z.id)!=='RES');const Z=z?ZB[z]:cands[Math.floor(Math.random()*cands.length)];
    if(niveau!=null)S.lv[Z.id]=+niveau;else if(!z)S.lv[Z.id]=Math.sign(S.lv[Z.id]||1)*Math.min(Math.abs(S.lv[Z.id]||1),niveauRoyaume()+2);
    startCombat(Z,kind);JR.avance();return Z.id},{z,kind,niveau});
  if(lot){/* robot : cartes jouables de la plus chère à la moins chère, cible la plus faible, case proposée */
    const st={victoires:0,defaites:0,tours:0,pvPerdus:0,poses:0,arriere:0,zones:{}};
    for(let n=0;n<lot;n++){const id=await lancer(zone);
      const r=await p.evaluate(()=>{let poses=0,arr=0;for(let t=0;t<40&&CB;t++){for(let g=0;g<12&&CB&&!CB.busy;g++){
          if(CB.pl){poses++;if(CB.pl.r)arr++;plInput('ok');continue}
          const i=CB.main.map((k,i)=>[k,i]).filter(([k])=>jouable(k)).sort((a,b)=>CK[b[0]].cout-CK[a[0]].cout)[0];if(!i)break;
          const v=vivants(CB.foes).sort((a,b)=>a.pv-b.pv);jouer(i[1],CK[i[0]].cible?v[0]:undefined);JR.avance()}
        if(!CB)break;if(!CB.busy){finTour();}JR.avance()}
        if(CB){JR.issue='nul';fermerCombat()}return{issue:JR.issue,tours:JR.tours||40,pv:(JR.pvMax||0)-(JR.pvFin||0),poses,arr}});
      st[r.issue==='victoire'?'victoires':'defaites']++;st.tours+=r.tours;st.pvPerdus+=r.pv;st.poses+=r.poses;st.arriere+=r.arr;(st.zones[id]=st.zones[id]||[0,0])[r.issue==='victoire'?0:1]++;
      await p.evaluate(()=>{S.hurt=0;mode='monde'})}
    console.log(JSON.stringify({profil,kind,noeud,combats:lot,victoires:st.victoires,taux:Math.round(100*st.victoires/lot)+'%',toursMoyens:+(st.tours/lot).toFixed(1),pvPerdusMoyens:+(st.pvPerdus/lot).toFixed(1),posesParCombat:+(st.poses/lot).toFixed(2),partArriere:st.poses?Math.round(100*st.arriere/st.poses)+'%':'-',parZone:st.zones},null,1))}
  else if(opt('port')){await lancer(zone);await serveur()}
  else{await lancer(zone);
    const acts=String(opt('actions')||'').trim().split(/\s+/).filter(Boolean);
    for(const a of acts){const r=await p.evaluate(a=>{if(!CB)return'combat déjà fini';let m;
        if(a==='f'){if(CB.pl)return'une unité attend sa case (pV,R ou ok)';finTour()}
        else if(a==='ok'){if(!CB.pl)return'rien à poser';plInput('ok')}
        else if(m=a.match(/^m(\d)$/)){if(CB.pl)return'une unité attend sa case';if(!manoeuvrePossible())return'manœuvre impossible';debutManoeuvre();CB.man.i=+m[1];manInput('ok')}
        else if(m=a.match(/^p(\d),(\d)$/)){if(!CB.pl)return'rien à poser';CB.pl.v=+m[1];CB.pl.r=+m[2];plInput('ok')}
        else if(m=a.match(/^j(\d+)(?:>(\d+))?$/)){if(CB.pl)return'une unité attend sa case (pV,R ou ok)';const k=CB.main[+m[1]];if(!k)return'pas de carte '+m[1];if(!jouable(k))return'trop cher';
          const v=vivants(CB.foes);jouer(+m[1],CK[k].cible?v[m[2]!=null?+m[2]:0]:undefined)}
        else return'action inconnue '+a;JR.avance();return''},a);if(r)console.log('['+a+'] '+r)}
    const e=await p.evaluate(()=>({etat:JR.etat(),journal:JR.log.slice(-14)}));
    console.log(JSON.stringify(e,null,1));
    if(opt('capture')){await p.evaluate(()=>{if(window.CB){CB.q=[];CB.busy=false;dessinerMain()}});await p.waitForTimeout(600);await p.screenshot({path:opt('capture')})}}
  async function serveur(){const ACT=a=>{if(!CB)return'combat déjà fini';let m;
        if(a==='f'){if(CB.pl)return'une unité attend sa case (pV,R ou ok)';finTour()}
        else if(a==='ok'){if(!CB.pl)return'rien à poser';plInput('ok')}
        else if(m=a.match(/^m(\d)$/)){if(CB.pl)return'une unité attend sa case';if(!manoeuvrePossible())return'manœuvre impossible';debutManoeuvre();CB.man.i=+m[1];manInput('ok')}
        else if(m=a.match(/^p(\d),(\d)$/)){if(!CB.pl)return'rien à poser';CB.pl.v=+m[1];CB.pl.r=+m[2];plInput('ok')}
        else if(m=a.match(/^j(\d+)(?:>(\d+))?$/)){if(CB.pl)return'une unité attend sa case (pV,R ou ok)';const k=CB.main[+m[1]];if(!k)return'pas de carte '+m[1];if(!jouable(k))return'trop cher';
          const v=vivants(CB.foes);jouer(+m[1],CK[k].cible?v[m[2]!=null?+m[2]:0]:undefined)}
        else return'action inconnue '+a;JR.avance();return''};
    await new Promise(fin=>{require('http').createServer(async(rq,rs)=>{const u=new URL(rq.url,'http://x');let out='';try{
      if(u.pathname==='/stop'){rs.end('bye');fin();return}
      if(u.pathname==='/cap'){await p.evaluate(()=>{if(window.CB){CB.q=[];CB.busy=false;dessinerMain()}});await p.waitForTimeout(600);await p.screenshot({path:u.searchParams.get('f')});rs.end('ok\n');return}
      const acts=String(u.searchParams.get('a')||'').trim().split(/\s+/).filter(Boolean);
      for(const a of acts){const r=await p.evaluate(ACT,a);if(r)out+='['+a+'] '+r+'\n'}
      const e=await p.evaluate(()=>{const r={etat:JR.etat(),journal:JR.log.slice()};JR.log=[];return r});out+=JSON.stringify(e,null,1)+'\n';
      if(erreurs.length)out+='ERREURS JS : '+erreurs.join(' | ')+'\n'}catch(err){out+='ERR '+err+'\n'}rs.end(out)}).listen(+opt('port'),()=>console.log('pret'))})}
  if(erreurs.length)console.log('ERREURS JS : '+erreurs.slice(0,5).join(' | '));
  await nav.close();process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
