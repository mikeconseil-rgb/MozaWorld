/* Champ de bataille en mosaïque (22 nov., Arène) : demande de l'utilisateur, « un champ de batailles style Heroes of Might and Magic,
   mais en mosaïque, bord à bord », où l'on déplace les créatures. Le champ est un morceau du pavage Girih du monde (CARTE_PLUS),
   pris autour de la zone combattue : chaque tuile touche ses voisines par un côté, et l'on se déplace de tuile voisine en tuile voisine.
   Actif seulement quand window.TAC_ON est vrai (l'Arène) : le jeu principal garde son Plateau tant que l'utilisateur n'a pas validé.
   Règles : tv/../design/plateau/TACTIQUE.md. */
const TAC_T={CIT:{nom:'Hauteur',ic:'▲',txt:'+1 d\'attaque pour qui s\'y tient'},DON:{nom:'Rempart',ic:'⛨',txt:'−2 dégâts reçus (au moins 1)'},
  RES:{nom:'Source',ic:'✚',txt:'soigne 2 PV au début de chaque tour'},ANT:{nom:'Ronces',ic:'✳',txt:'y entrer arrête le déplacement'},MAR:{nom:'Dalle',ic:'',txt:''}};
let TAC=null;
const tacCen=p=>{let x=0,y=0;for(const q of p){x+=q[0];y+=q[1]}return[x/p.length,y/p.length]};
function tacPatch(Z){const all=typeof CARTE_PLUS!=='undefined'?CARTE_PLUS:[],W=2400,H=1050;
  const pris=c=>all.map(t=>({id:t.id,mod:t.mod||t.id.slice(0,3),poly:t.poly,c:tacCen(t.poly)})).filter(t=>Math.abs(t.c[0]-c[0])<W/2&&Math.abs(t.c[1]-c[1])<H/2);
  const z0=all.find(t=>t.id===Z.id);let tiles=z0?pris(tacCen(z0.poly)):[];if(tiles.length<26)tiles=pris([0,0]);
  /* voisinage : deux tuiles qui partagent un côté (deux sommets) */
  const k=v=>Math.round(v[0])+','+Math.round(v[1]),E={};tiles.forEach((t,i)=>{t.adj=[];const p=t.poly;for(let j=0;j<p.length;j++){const a=k(p[j]),b=k(p[(j+1)%p.length]),e=a<b?a+'|'+b:b+'|'+a;(E[e]=E[e]||[]).push(i)}});
  for(const e in E){const l=E[e];if(l.length===2){tiles[l[0]].adj.push(l[1]);tiles[l[1]].adj.push(l[0])}}
  /* on garde le plus grand morceau d'un seul tenant (le bord du rectangle peut isoler quelques tuiles) */
  {const comp=[];let best=[];for(let i=0;i<tiles.length;i++){if(comp[i]!=null)continue;const g=[i];comp[i]=i;for(let j=0;j<g.length;j++)for(const b of tiles[g[j]].adj)if(comp[b]==null){comp[b]=i;g.push(b)}if(g.length>best.length)best=g}
   const garde=new Set(best),nv=[],idx={};tiles.forEach((t,i)=>{if(garde.has(i)){idx[i]=nv.length;nv.push(t)}});for(const t of nv)t.adj=t.adj.filter(b=>garde.has(b)).map(b=>idx[b]);tiles=nv}
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const t of tiles)for(const[x,y]of t.poly){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}
  return{tiles,vb:[x0,y0,x1-x0,y1-y0]}}
function tacInit(){const C=CB;if(!C)return;const P=tacPatch(C.Z),T=TAC={tiles:P.tiles,vb:P.vb,occ:{},cur:0,sel:null};C.tac=1;C.tb=0;
  const ts=T.tiles,xs=ts.map(t=>t.c[0]).sort((a,b)=>a-b),xq=q=>xs[Math.floor(q*(xs.length-1))],ym=(T.vb[1]+T.vb[3]/2);
  /* le héros : à gauche, au milieu ; quelques gouffres au centre, sans couper le champ en deux */
  const gauche=ts.map((t,i)=>i).filter(i=>ts[i].c[0]<=xq(.2)&&ts[i].adj.length>=4&&ts[i].mod!=='ANT');T.heroT=gauche.sort((a,b)=>Math.abs(ts[a].c[1]-ym)-Math.abs(ts[b].c[1]-ym))[0];
  /* 25 nov. : sans tuile assez large à gauche, la plus à gauche des tuiles qui ont le plus de voisines (le combat ne doit jamais planter) */
  if(T.heroT==null){const g2=ts.map((t,i)=>i).filter(i=>ts[i].c[0]<=xq(.3));T.heroT=(g2.length?g2:ts.map((t,i)=>i)).sort((a,b)=>(ts[b].adj.length-ts[a].adj.length)||(ts[a].c[0]-ts[b].c[0]))[0]}
  const mil=ts.map((t,i)=>i).filter(i=>ts[i].c[0]>xq(.35)&&ts[i].c[0]<xq(.68)&&ts[i].mod!=='CIT');melange(mil);let nb=0;
  for(const i of mil){if(nb>=3)break;ts[i].bloc=1;if(tacConnexe())nb++;else ts[i].bloc=0}
  C.hero.ti=T.heroT;T.occ[T.heroT]=C.hero;for(const u of C.allies)if(!u.hero&&u.ti==null)tacPoser(u);for(const u of C.foes)tacPoser(u);
  let h=$('tac');if(!h){h=document.createElement('div');h.id='tac';$('combat').appendChild(h)}h.innerHTML='';h.style.aspectRatio=T.vb[2]+' / '+T.vb[3];
  h.innerHTML=`<svg viewBox="${T.vb.join(' ')}" preserveAspectRatio="none">${ts.map((t,i)=>{const pts=t.poly.map(p=>p.join(',')).join(' '),c=t.c,ins=t.poly.map(p=>[(c[0]+(p[0]-c[0])*.78).toFixed(1),(c[1]+(p[1]-c[1])*.78).toFixed(1)].join(',')).join(' '),tt=TAC_T[t.mod]||TAC_T.MAR;
    return`<g class="tt m-${t.bloc?'bloc':t.mod}" data-i="${i}"><polygon class="pz" points="${pts}"/><polygon class="pi" points="${ins}"/>${t.bloc?`<text x="${c[0]}" y="${c[1]+28}" class="ic">✕</text>`:tt.ic?`<text x="${c[0]}" y="${c[1]+22}" class="ic">${tt.ic}</text>`:''}</g>`}).join('')}</svg>`;
  try{new ResizeObserver(()=>{if(TAC)h.style.setProperty('--tz',(200*(h.clientWidth||1)/TAC.vb[2]).toFixed(1)+'px')}).observe(h)}catch(_){}
  h.querySelectorAll('g.tt').forEach(g=>g.addEventListener('click',e=>{e.stopPropagation();tacClic(+g.dataset.i)}));
  $('combat').classList.add('tac');
  /* votre escorte : comme dans un champ de bataille à l'ancienne, vous ne commencez pas seul */
  if(!C.allies.some(u=>u.bete&&u.pv>0)){const L=Math.max(1,Lz('ANT')),Lc=Math.max(1,Lz('CIT'));
    invoquer({nom:'Sentinelle',pv:8+2*Lc,max:8+2*Lc,atk:2+Math.floor(Lc/2),g:0,bete:1,sentinelle:1});invoquer(bete2(poleN('ANT','Luciole de nuit','Lancière de l\'aurore'),7+3*L,3+L))}
  tacPlacer()}
function tacConnexe(){const ts=TAC.tiles,ok=ts.map((t,i)=>i).filter(i=>!ts[i].bloc);if(!ok.length)return false;const vu=new Set([ok[0]]),q=[ok[0]];
  while(q.length){const a=q.shift();for(const b of ts[a].adj)if(!ts[b].bloc&&!vu.has(b)){vu.add(b);q.push(b)}}return vu.size===ok.length}
const tacAmi=u=>CB&&CB.allies.indexOf(u)>=0;
const tacVit=u=>u.hero?1:u.mur?0:u.bete?3:u.chef?2:3;
function tacLibre(i){const o=TAC.occ[i];return!TAC.tiles[i].bloc&&!(o&&o.pv>0)}
/* une unité sans case : les vôtres près du héros (vers l'avant), les ennemis à droite */
function tacPoser(u){const T=TAC,ts=T.tiles;if(u.garde){u.ti=null;return}let best=-1,bs=1e9;
  if(tacAmi(u)){const d=tacDist(T.heroT);for(let i=0;i<ts.length;i++){if(!tacLibre(i)||d[i]==null)continue;const s=d[i]*1000-ts[i].c[0];if(s<bs){bs=s;best=i}}}
  else{const xm=Math.max(...ts.map(t=>t.c[0])),ym=T.vb[1]+T.vb[3]/2;for(let i=0;i<ts.length;i++){if(!tacLibre(i))continue;const t=ts[i],s=(xm-t.c[0])*(u.chef?.6:1)+Math.abs(t.c[1]-ym)*(u.chef?1.4:.35)+Math.random()*60;if(s<bs){bs=s;best=i}}}
  if(best>=0){u.ti=best;T.occ[best]=u}}
/* distance en tuiles depuis i, en ignorant les unités */
function tacDist(i){const ts=TAC.tiles,d=[];d[i]=0;const q=[i];while(q.length){const a=q.shift();for(const b of ts[a].adj)if(!ts[b].bloc&&d[b]==null){d[b]=d[a]+1;q.push(b)}}return d}
const tacVoisins=(i,f)=>TAC.tiles[i].adj.map(j=>TAC.occ[j]).filter(u=>u&&u.pv>0&&(!f||f(u)));
/* cases atteignables : on s'arrête en entrant dans les Ronces ou au contact d'un adversaire (zone de contrôle) ; un volant passe par-dessus tout */
function tacPortee(u,vit,vol){const ts=TAC.tiles,R=new Map([[u.ti,{d:0,p:-1}]]),q=[u.ti],adv=w=>tacAmi(w)!==tacAmi(u);
  while(q.length){const a=q.shift(),da=R.get(a).d;if(da>=vit)continue;if(!vol&&a!==u.ti&&(ts[a].mod==='ANT'||tacVoisins(a,adv).length))continue;
    for(const b of ts[a].adj){if(R.has(b)||ts[b].bloc)continue;const o=TAC.occ[b];if(o&&o.pv>0&&o!==u&&!vol)continue;R.set(b,{d:da+1,p:a});q.push(b)}}
  for(const[i]of[...R])if(i!==u.ti&&!tacLibre(i))R.delete(i);return R}
/* passe 2 (22 nov., « facile à voir les bêtes se déplacer ») : le pion suit son chemin tuile par tuile, et le chemin reste tracé un instant */
const TAC_PAS=.26;
function tacChemin(a,b,vol){const ts=TAC.tiles,pr={[a]:-1},q=[a];while(q.length){const x=q.shift();if(x===b)break;for(const y of ts[x].adj)if(pr[y]==null&&(vol||!ts[y].bloc)){pr[y]=x;q.push(y)}}
  if(pr[b]==null)return[b];const c=[];for(let x=b;x!==a;x=pr[x])c.unshift(x);return c}
function tacBouger(u,i,vol){const a=u.ti;if(a!=null&&TAC.occ[a]===u)delete TAC.occ[a];u.ti=i;TAC.occ[i]=u;if(a==null||a===i||!u.el)return 0;
  const ch=tacChemin(a,i,vol||(u.int&&u.int.a==='v'&&!tacAmi(u))),T=TAC,vb=T.vb,el=u.el;u.animFin=performance.now()+ch.length*TAC_PAS*1000+60;el.classList.add('marche');
  ch.forEach((t,k)=>setTimeout(()=>{const c=T.tiles[t]&&T.tiles[t].c;if(!c||!u.el)return;el.style.left=(100*(c[0]-vb[0])/vb[2])+'%';el.style.top=(100*(c[1]-vb[1])/vb[3])+'%';if(k===ch.length-1)setTimeout(()=>el.classList.remove('marche'),200)},k*TAC_PAS*1000));
  const sv=$('tac')&&$('tac').querySelector('svg');if(sv){const pts=[a,...ch].map(t=>T.tiles[t].c.join(',')).join(' '),pl=document.createElementNS('http://www.w3.org/2000/svg','polyline');
    pl.setAttribute('points',pts);pl.setAttribute('class','trace '+(tacAmi(u)?'ami':'adv'));sv.appendChild(pl);setTimeout(()=>pl.remove(),ch.length*TAC_PAS*1000+1400)}
  return ch.length}
const tacBonus=u=>(u.ti!=null&&TAC.tiles[u.ti].mod==='CIT'?1:0)+(typeof facTerrain==='function'?facTerrain(u):0);   /* 2.47 : terrain de faction (factions-combat.js) */
const tacRecu=(t,n)=>t.ti!=null&&TAC.tiles[t.ti].mod==='DON'?Math.max(1,n-2):n;
/* un coup de mêlée ; la cible encore debout riposte une fois par tour, à moitié de sa force */
function tacCoup(a,t,n){if(!a||!t||a.pv<=0||t.pv<=0)return;n=tacRecu(t,n+tacBonus(a));if(a.el){a.el.classList.remove('agit');void a.el.offsetWidth;a.el.classList.add('agit')}
  if(t.hero){tacFrappeHeros(a,n);return}journal(`${a.nom} frappe ${t.nom} (${n}).`);frappe(t,n,a);
  if(t.pv>0&&a.pv>0&&t.atk>0&&!t.rip&&!t.hero){t.rip=1;const r=tacRecu(a,Math.ceil((t.atk+tacBonus(t))/2));attendre(.3,()=>{if(!CB||a.pv<=0||t.pv<=0)return;journal(`${t.nom} riposte (${r}).`);frappe(a,r,t);tacNettoyer();finSiFini()})}tacNettoyer()}
function tacFrappeHeros(m,n){const G=gardeU();if(G){journal(`${m.nom} frappe la Garde du héros (${n}).`);const avant=G.pv+G.g;frappe(G,n,m);if(G.pv<=0&&n>avant){journal('La Garde cède : le reste du coup passe au héros.');frappe(CB.hero,n-avant,m)}}
  else{journal(`${m.nom} frappe le héros (${n}).`);frappe(CB.hero,n,m)}if(CB&&CB.riposte&&m.pv>0)frappe(m,CB.riposte,CB.hero)}
function tacNettoyer(){if(!TAC)return;for(const i in TAC.occ){const u=TAC.occ[i];if(!u||u.pv<=0)delete TAC.occ[i]}}
/* tour ennemi : chaque monstre avance vers le héros, s'arrête au contact, puis fait ce qu'il a annoncé contre ce qu'il touche */
function tacAgir(m){const I=m.int;if(!I||m.pv<=0)return;if('gsh'.indexOf(I.a)>=0||m.ti==null){agir0(m);return}
  const vol=I.a==='v',R=tacPortee(m,vol?4:tacVit(m),vol),dH=tacDist(CB.hero.ti);let best=m.ti,bs=1e9;
  for(const[i,inf]of R){if(i!==m.ti&&!tacLibre(i))continue;const s=(dH[i]==null?99:dH[i])*10+inf.d;if(s<bs){bs=s;best=i}}
  let pas=0;if(best!==m.ti){pas=tacBouger(m,best,vol);tacPlacer()}
  if(I.a==='c'){journal(`${m.nom} avance et prend son élan : le prochain coup sera fort.`);if(pas)attendre(pas*TAC_PAS,()=>{});return}
  if(I.a==='t'){agir0(m);return}
  const prets=tacVoisins(m.ti,u=>tacAmi(u));if(!prets.length){journal(`${m.nom} avance.`);if(pas)attendre(pas*TAC_PAS,()=>{});return}
  const t=prets.find(u=>u.hero)||prets.sort((p,q)=>p.pv-q.pv)[0];attendre(.25+pas*TAC_PAS,()=>{if(!CB||m.pv<=0)return;tacCoup(m,t,I.a==='b'&&t.mur?I.v*2:I.v);finSiFini()})}
/* ---------- vos créatures : ▲ (ou Y) passe sur le champ ; OK choisit une créature, puis une case ou un ennemi ---------- */
function tacPeut(u){return u&&u.pv>0&&tacAmi(u)&&!u.garde&&!u.mur&&!(u.tm&&(u.ta||u.hero))}
function tacCibles(u){if(!u||u.hero||u.ta)return new Map();const R=u.tm?new Map([[u.ti,{d:0}]]):tacPortee(u,tacVit(u)),A=new Map();
  for(const[i,inf]of R)for(const m of tacVoisins(i,w=>!tacAmi(w))){const a=A.get(m.ti);if(!a||inf.d<a.d)A.set(m.ti,{d:inf.d,de:i})}return A}
function tacOk(i){const C=CB,T=TAC;if(!C||C.busy||!T)return;const u=T.occ[i]&&T.occ[i].pv>0?T.occ[i]:null,s=T.sel;
  if(s){if(u===s){T.sel=null;tacPlacer();return}
    const A=tacCibles(s);if(u&&!tacAmi(u)&&A.has(i)){const a=A.get(i);let pas=0;if(a.de!==s.ti){pas=tacBouger(s,a.de);s.tm=1}s.ta=s.tm=1;T.sel=null;tacPlacer();C.busy=true;
      attendre(.35+pas*TAC_PAS,()=>{tacCoup(s,u,s.atk);majUnites()});attendre(.5,()=>{if(!CB)return;if(!finSiFini()){CB.busy=false;dessinerMain()}});return}
    if(!u&&!s.tm){const R=tacPortee(s,tacVit(s));if(R.has(i)){const pas=tacBouger(s,i);s.tm=1;clack();if(s.hero||!tacVoisins(i,w=>!tacAmi(w)).length)T.sel=null;journal(`${s.nom} se déplace${T.sel?' : il peut encore frapper un ennemi au contact':''}.`);tacPlacer();majUnites();return}}
    if(tacPeut(u)){T.sel=u;tick();tacPlacer();return}sfx('miss');return}
  if(tacPeut(u)){T.sel=u;tick();journal(u.hero?'Le héros peut faire un pas.':`${u.nom} : choisissez une case (jusqu'à ${tacVit(u)} tuiles) ou un ennemi à frapper.`);tacPlacer();return}
  if(u&&!tacAmi(u)){const I=u.int;journal(`${u.nom} : ${u.pv}/${u.max} PV${I?' · '+I.t+(I.v?' '+I.v:''):''} · avance de ${tacVit(u)} tuiles.`);return}
  if(u&&(u.tm||u.ta)){journal(`${u.nom} a déjà agi ce tour.`);return}
  const t=T.tiles[i],tt=TAC_T[t.mod];journal(t.bloc?'Gouffre : on ne peut pas y aller.':tt&&tt.txt?tt.nom+' : '+tt.txt+'.':'Dalle : rien de spécial.')}
let tacClicT=0;
function tacClic(i){const C=CB;if(!C||!C.tac||C.busy||C.sel)return;const now=performance.now();if(now-tacClicT<300)return;tacClicT=now;C.tb=1;TAC.cur=i;tacOk(i);dessinerMain()}
function tacDir(dx,dy){const T=TAC,c0=T.tiles[T.cur].c;let best=T.cur,bs=1e9;
  T.tiles.forEach((t,i)=>{if(i===T.cur)return;const vx=t.c[0]-c0[0],vy=t.c[1]-c0[1],d=Math.hypot(vx,vy),cs=(vx*dx+vy*dy)/d;if(cs<.45)return;const s=d*(1+2.5*(1-cs));if(s<bs){bs=s;best=i}});
  if(best!==T.cur){T.cur=best;tick();tacPlacer()}}
function tacInput(a,rep){const C=CB,T=TAC;
  if(a==='left')return tacDir(-1,0);if(a==='right')return tacDir(1,0);if(a==='up')return tacDir(0,-1);if(a==='down')return tacDir(0,1);
  if(a==='ok'&&!rep){tacOk(T.cur);dessinerMain();return}
  if((a==='back'||a==='y')&&!rep){if(T.sel){T.sel=null;tacPlacer()}else{C.tb=0;tacPlacer();dessinerMain()}}}

/* passe 2 : portraits peints (img/creatures/, tools/images-cartes/generer-creatures.py) ; une image par monstre, et par archétype pour les bêtes des cartes */
const TAC_ARCH=[['luciole',/luciole|ver luisant/i],['lanciere',/lanci[eè]re/i],['sentinelle',/sentinelle/i],
  ['oiseau',/cormoran|grue|milan|gyp|fou de|cassenoix|martin|gerfaut|corb|chouette|hibou|aigle|faucon|h[ée]ron|oie|cygne|mouette|pie\b|geai|vautour|harfang|pétrel|p[ée]trel|sterne|bécasse|outarde|ibis|marabout|perdrix|caille|tétras|coq|paon|merle|grive|moineau|alouette|hirondelle|martinet|colibri|toucan|perroquet|ara\b|kéa|kiwi|émeu|autruche|nandou|calao|serpentaire|busard|buse|épervier|crécerelle|condor|albatros|pélican|flamant|cigogne|spatule|canard|eider|plongeon|macareux|guillemot|labbe|goéland|bernache|oiseau/i],
  ['felin',/caracal|panth|ocelot|lynx|chat|tigre|lion|gu[ée]pard|jaguar|puma|serval|once\b|léopard|l[ée]opard/i],
  ['canide',/loup|coyote|chacal|renard|chien|m[âa]tin|dhole|lycaon|fennec|hy[èe]ne/i],
  ['ours',/ours/i],['cheval',/jument|poulain|cheval|[âa]ne\b|mule|z[èe]bre|onagre|étalon/i],
  ['bovin',/buffle|b[œo]euf|bison|yak|[ée]lan|cerf|renne|ch[èe]vre|bouquetin|gnou|antilope|gazelle|oryx|mouflon|bélier|zébu|dromadaire|chameau|lama|vigogne|suri|alpaga|sanglier|phacoch|tapir|rhinoc|hippopot|[ée]l[ée]phant|okapi|girafe|daim|chevreuil|chamois/i],
  ['singe',/g[ée]lada|babouin|singe|macaque|gorille|orang|chimp|mandrill|lémur|l[ée]mur/i],
  ['reptile',/l[ée]zard|serpent|p[ée]liade|vip[èe]re|tortue|salamandre|croco|varan|cobra|iguane|gecko|caméléon|cam[ée]l[ée]on|python|boa|mamba|crotale|alligator|caïman|dragon|triton|grenouille|crapaud|basilic/i],
  ['insecte',/nu[ée]e|essaim|m[ée]lo[ée]|orycte|scarab|mouche|sangsue|araign|scorpion|fourmi|gu[êe]pe|abeille|frelon|criquet|sauterelle|mante|termite|cafard|chenille|papillon|phal[èe]ne|libellule|moustique|tique|ver\b|larve|mille-pattes|scolopendre|cigale|coccinelle|puce|pou\b/i],
  ['rongeur',/lapin|lemming|li[èe]vre|rat\b|souris|[ée]cureuil|h[ée]risson|marmotte|castor|loir|campagnol|gerboise|hamster|chinchilla|porc-[ée]pic|blaireau|belette|hermine|furet|vison|loutre|martre|zibeline|putois|mangouste|suricate|raton|tatou|pangolin|ornithorynque|wombat|koala|kangourou|wallaby/i],
  ['aquatique',/hareng|anguille|carpe|saumon|crabe|poulpe|phoque|morse|baleine|dauphin|orque|requin|raie|thon|brochet|truite|esturgeon|silure|piranha|m[ée]duse|homard|crevette|calmar|seiche|otarie|lamantin|narval|béluga|poisson|murène/i],
  ['objet',/mur|rempart|baril|totem|statue|pierre|borne|colonne|tour\b|herse|palissade|barricade|tonneau|chariot/i],
  ['esprit',/ombre|[ée]cho|spectre|esprit|fant[ôo]me|chanteur|revenant|âme|[âa]me|feu follet|follet|lueur|reflet|songe|r[êe]ve|murmure/i],
  ['humain',/soldat|garde|arch[èe]re|pillard|colporteur|scribe|glaneur|milicien|chasseur|p[êe]cheur|berger|moine|pr[êe]tre|chevalier|guerrier|mercenaire|bandit|voleur|marchand|paysan|forgeron|fermier|veilleur|sentinel|capitaine|enfant|vieill|femme|homme|fr[èe]re|s[œo]ur|m[èe]re|p[èe]re|cavali/i]];
const TAC_MON=new Set(['Pillard des sapins',"Archère d'écorce",'Voïvode sans mémoire',"Gardien d'édit",'Larve de lave','Scribe-tyran','Glaneur hagard','Anguille des canaux','Mère des Gerbes','Luciole ardente','Crabe-racine','Reine-luciole','Colporteur givré','Mâtin de cloche','Prévôt de la Foire']);
function tacImgDe(u){if(u.hero)return'heros';if(u.garde)return'garde';if(TAC_MON.has(u.nom))return u.nom.replace(/'/g,'').replace(/ /g,'_');
  for(const[k,re]of TAC_ARCH)if(re.test(u.nom))return k;return'bete'}
function tacPortrait(u){const e=u.el;if(!e||e.dataset.img)return;const k=tacImgDe(u),p=e.querySelector('.por');if(!p)return;e.dataset.img=k;
  const im=new Image();im.onload=()=>{p.innerHTML='';p.appendChild(im);e.classList.add('peint')};im.src='img/creatures/'+encodeURIComponent(k)+'.webp';im.alt=''}
/* ---------- dessin : les unités sont posées au centre de leur tuile ---------- */
function tacPlacer(){const C=CB,T=TAC,h=$('tac');if(!C||!T||!h)return;tacNettoyer();const vb=T.vb,G=gardeU();
  const pos=(el,i,dx,dy)=>{const c=T.tiles[i].c;el.style.left=(100*(c[0]-vb[0])/vb[2]+(dx||0))+'%';el.style.top=(100*(c[1]-vb[1])/vb[3]+(dy||0))+'%'};
  for(const u of[...C.allies,...C.foes]){if(!u.el)continue;if(u.el.parentNode!==h)h.appendChild(u.el);u.el.classList.toggle('garde',!!u.garde);u.el.classList.toggle('adv',!tacAmi(u));tacPortrait(u);if(u.animFin&&performance.now()<u.animFin){u.el.classList.toggle('choisi',T.sel===u);continue}
    if(u.ti==null&&u.pv>0&&!u.garde)tacPoser(u);if(u.garde&&C.hero.ti!=null){pos(u.el,C.hero.ti,-3.2,9);continue}if(u.ti!=null)pos(u.el,u.ti);
    u.el.classList.toggle('fait',tacAmi(u)&&!u.hero&&!u.garde&&!u.mur&&!!u.ta);u.el.classList.toggle('choisi',T.sel===u);
    if(!u.el.dataset.tac){u.el.dataset.tac=1;u.el.addEventListener('click',e=>{e.stopPropagation();if(u.ti!=null)tacClic(u.ti);else if(u.garde)tacClic(C.hero.ti)})}}
  const R=T.sel&&!T.sel.tm?tacPortee(T.sel,tacVit(T.sel)):null,A=T.sel?tacCibles(T.sel):null;
  const sur=T.occ[T.cur],men=!T.sel&&C.tb&&sur&&sur.pv>0&&!tacAmi(sur)?tacPortee(sur,sur.int&&sur.int.a==='v'?4:tacVit(sur),sur.int&&sur.int.a==='v'):null;
  h.querySelectorAll('g.tt').forEach(g=>{const i=+g.dataset.i;g.classList.toggle('rch',!!R&&R.has(i)&&i!==T.sel.ti);g.classList.toggle('atq',!!A&&A.has(i));
    g.classList.toggle('men',!!men&&men.has(i));g.classList.toggle('cur',!!C.tb&&i===T.cur);g.classList.toggle('sel',!!T.sel&&i===T.sel.ti)});
  h.classList.toggle('actif',!!C.tb);{const w=h.clientWidth||1;h.style.setProperty('--tz',(200*w/vb[2]).toFixed(1)+'px')}
  let lg=$('tac-leg');if(!lg){lg=document.createElement('div');lg.id='tac-leg';h.appendChild(lg)}
  const t=T.tiles[T.cur],tt=TAC_T[t.mod];lg.style.display=C.tb?'':'none';lg.textContent=C.tb?(t.bloc?'Gouffre : infranchissable':tt&&tt.txt?tt.ic+' '+tt.nom+' : '+tt.txt:'Dalle'):'▲ ou Y : déplacer vos créatures'}
/* ---------- branchements (seulement si TAC_ON) ---------- */
let agir0=agir;
(function(){const pv0=typeof paverPlateau==='function'?paverPlateau:null,sc0=startCombat,pn0=placerNoeud,ft0=finTour,dt0=debutTour,ci0=cbInput,iv0=invoquer,dm0=dessinerMain,mu0=majUnites,fc0=fermerCombat;agir0=agir;
  if(pv0)paverPlateau=function(Z){if(window.TAC_ON)return;return pv0(Z)};
  startCombat=function(Z,k){TAC=null;sc0(Z,k);if(window.TAC_ON&&CB&&k!=='duel'){tacInit();majUnites()}};
  placerNoeud=function(){if(CB&&CB.tac&&TAC){tacPlacer();return}return pn0()};
  agir=function(m){if(CB&&CB.tac&&TAC)return tacAgir(m);return agir0(m)};
  invoquer=function(b){iv0(b);if(CB&&CB.tac&&TAC){if(b.ti==null)tacPoser(b);tacPlacer()}};
  /* vos créatures ne frappent plus seules en fin de tour : c'est vous qui les menez */
  finTour=function(){const C=CB;if(!C||!C.tac)return ft0();if(TAC)TAC.sel=null;C.tb=0;$('combat').classList.add('tac-ennemi');const bs=C.allies.filter(u=>u.bete);bs.forEach(u=>u.bete=0);try{ft0()}finally{bs.forEach(u=>u.bete=1)}};
  debutTour=function(){const C=CB;if(C&&C.tac&&TAC){$('combat').classList.remove('tac-ennemi');for(const u of[...C.allies,...C.foes]){u.tm=u.ta=u.rip=0;if(u.pv>0&&u.ti!=null&&TAC.tiles[u.ti].mod==='RES'&&u.pv<u.max){u.pv=Math.min(u.max,u.pv+2);pop(u,'+2 source','soin')}}}return dt0()};
  cbInput=function(a,rep){const C=CB;if(!C||!C.tac||!TAC)return ci0(a,rep);if(C.busy)return;
    if(C.tb){tacInput(a,rep);return}
    if(!C.sel&&!rep&&(a==='y'||(a==='up'&&!(C.f===C.main.length&&C.main.length)))){C.tb=1;if(TAC.sel==null){const u=C.allies.find(tacPeut);if(u&&u.ti!=null)TAC.cur=u.ti}tick();tacPlacer();dessinerMain();return}
    return ci0(a,rep)};
  dessinerMain=function(){dm0();const C=CB;if(!C||!C.tac)return;$('combat').classList.toggle('tac-champ',!!C.tb);
    if(!C.busy&&!C.pl)$('cb-aide').textContent=C.tb?'✥ curseur · OK : créature, puis case ou ennemi · Y : cartes':C.sel?'◀ ▶ cible · OK frapper · ▼ annuler':'◀ ▶ carte · OK jouer · ▲ ou Y : bouger vos créatures · X : fin du tour'};
  majUnites=function(){mu0();const C=CB;if(!C||!C.tac||!TAC)return;
    for(const u of C.allies)if(u.el&&u.bete&&!u.mur&&u.pv>0)u.el.querySelector('.int').textContent=`⚔ ${u.atk+tacBonus(u)} · `+(u.ta?'a frappé':u.tm?'a bougé, peut frapper':`avance de ${tacVit(u)}`);
    if(C.hero.el)C.hero.el.querySelector('.int').textContent=C.hero.tm?'':'peut faire un pas';tacPlacer()};
  fermerCombat=function(){const h=$('tac');if(h)h.remove();$('combat').classList.remove('tac','tac-champ','tac-ennemi');TAC=null;return fc0()}})();
(function(){const st=document.createElement('style');st.textContent=`
#combat.tac #cb-allies,#combat.tac #cb-foes,#combat.tac #cb-centre{visibility:hidden!important}
#combat #tac{position:absolute!important;left:50%!important;top:calc(var(--u)*9.4)!important;transform:translateX(-50%)!important;height:min(52vh,calc(var(--u)*29))!important;transition:height .35s ease,top .35s ease;max-width:94vw;z-index:4!important;margin:0!important;padding:0!important;grid-area:auto!important}
#tac svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
#tac .pz{fill:#2b2a2e;stroke:#e6d6b0;stroke-width:5;stroke-linejoin:round;transition:fill .15s}
#tac .pi{fill:none;stroke:rgba(230,214,176,.28);stroke-width:3;stroke-dasharray:14 10}
#tac .m-CIT .pz{fill:#3e5a78}#tac .m-DON .pz{fill:#4a3466}#tac .m-RES .pz{fill:#22606a}#tac .m-ANT .pz{fill:#5e2a1f}#tac .m-MAR .pz{fill:#5a5246}
#tac .m-bloc .pz{fill:#0b0a0c;stroke:#5a4e40}#tac .m-bloc .pi{stroke:#3a3028}
#tac .ic{fill:rgba(240,228,200,.55);font-size:64px;text-anchor:middle;font-family:serif;pointer-events:none}
#tac g.rch .pz{fill:#3f6e3a}#tac g.rch .pi{stroke:#bfe6a0;stroke-dasharray:none}
#tac g.atq .pz{fill:#8a2418}#tac g.men .pi{stroke:#ff9a5a;stroke-width:8;stroke-dasharray:none}
#tac g.sel .pz{stroke:#fff3c8;stroke-width:12}#tac.actif g.cur .pz{stroke:#ffd35a;stroke-width:14}
#tac g.tt{cursor:pointer}
#combat.tac #tac .u{position:absolute!important;transform:translate(-50%,-50%)!important;width:calc(var(--tz,60px)*1.25)!important;margin:0!important;transition:left .26s linear,top .26s linear;z-index:3;cursor:pointer;grid-column:auto!important;grid-row:auto!important}
#combat.tac #tac .u .por{width:calc(var(--tz,60px)*.78)!important;height:calc(var(--tz,60px)*.78)!important;margin:0 auto!important;border-radius:50%;overflow:hidden;border:3px solid #c9a45c;box-shadow:0 3px 8px rgba(0,0,0,.7);background:#1a1614}
#combat.tac #tac .u .por img{width:100%;height:100%;object-fit:cover;display:block}
#combat.tac #cb-foes .u .por,#combat.tac #tac .u.adv .por{border-color:#b3301f}
#combat.tac #tac .u.marche{z-index:7}#combat.tac #tac .u.marche .por{box-shadow:0 0 0 4px rgba(255,211,90,.8),0 6px 14px rgba(0,0,0,.8)}
#tac .trace{fill:none;stroke-width:22;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4 34;opacity:.95;pointer-events:none}#tac .trace.ami{stroke:#ffe9a0}#tac .trace.adv{stroke:#ff7a5a}
#combat.tac #tac .u .un{font-size:max(10px,calc(var(--tz,60px)*.19))!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#combat.tac #tac .u .int:not(:empty){font-size:max(9px,calc(var(--tz,60px)*.17))!important;white-space:nowrap!important;max-width:none!important;margin:0 0 2px!important;position:relative}
#combat.tac #tac .u.fait{filter:saturate(.35) brightness(.75)}
#combat.tac #tac .u.choisi .por{outline:3px solid #fff3c8;outline-offset:2px}
#combat.tac #tac .u.garde{width:calc(var(--u)*3.6)!important;z-index:2}#combat.tac #tac .u.garde .int{display:none}
#tac-leg{position:absolute;left:0;top:calc(100% + 2px);font-family:var(--c-fell,serif);font-size:calc(var(--u)*.95);color:#f0e4c8;background:rgba(10,8,6,.8);padding:0 .6em;border:1px solid #8a7550}
#combat.tac #cb-main{transform:scale(.66);transform-origin:50% 100%;transition:transform .35s ease,opacity .35s}
#combat.tac-champ #tac,#combat.tac-ennemi #tac{top:calc(var(--u)*6.4)!important;height:min(80vh,calc(var(--u)*44))!important}
#combat.tac-champ #cb-main,#combat.tac-ennemi #cb-main{opacity:0;transform:scale(.66) translateY(60%);pointer-events:none}
#combat.tac-champ #cb-mana,#combat.tac-champ #cb-piles,#combat.tac-ennemi #cb-mana,#combat.tac-ennemi #cb-piles{opacity:.35}
#combat.tac #cb-aide{position:fixed!important;right:1.5vw!important;left:auto!important;top:calc(var(--u)*1.2)!important;bottom:auto!important;transform:none!important;z-index:6;margin:0!important;max-width:24vw;font-size:calc(var(--u)*.8)!important}
#combat.tac #cb-log{position:relative;z-index:5}
`;document.head.appendChild(st)})();
