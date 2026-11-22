/* MozaWorld : le Plateau (19 nov. 2026). Demande de l'utilisateur : « un plateau de bataille relativement petit, en mosaïque », avec placement
   défensif des créatures, dans l'esprit des jeux de cartes et de tactique à créatures (genre seulement, rien de repris).
   Il agrandit le Nœud (deux voies et un centre, choisi le 17 nov.) :
   - trois voies (haute, milieu, basse) ; de votre côté, deux rangs par voie (avant, arrière) ; le décagone du centre reste à tenir ;
   - quand une carte fait venir une bête ou un bloqueur, vous choisissez sa case (◀ ▶ ▲ ▼ puis OK) ; poser sur une case prise échange les deux ;
   - un coup ennemi suit sa voie : l'unité d'avant, puis celle d'arrière, puis la Garde, puis le héros ; « vole par-dessus » va droit au héros ;
   - à l'avant, une bête frappe de toute sa force l'ennemi de sa voie ; à l'arrière, elle est à l'abri et frappe à moitié ;
   - les cases sont des tuiles Girih : votre royaume pave trois de vos cases (une par type de zone tenue), la zone combattue pave deux cases ennemies.
   Le moteur des coups est dans combat.js (cibleAlliee, coupSurTerrain, invoquer, finTour) ; ici : terrain, placement, dessin. */
const PL_VOIES=3,PL_MAX=4;
const PL_NOMV=['haute','du milieu','basse'];
const PL_T={
  CIT:{nom:'Bastion',forme:'décagone',n:10,txt:'+3 de garde à l\'unité posée ici, à chaque tour'},
  DON:{nom:'Piège',forme:'pentagone',n:5,txt:'tant qu\'une unité s\'y tient, le premier coup porté dans sa voie à chaque tour rend 4 dégâts à son auteur'},
  ANT:{nom:'Tanière',forme:'nœud papillon',n:4,txt:'l\'unité posée ici reprend 2 PV à chaque tour'},
  RES:{nom:'Source',forme:'hexagone',n:6,txt:'l\'unité posée ici frappe +2'},
  MAR:{nom:'Tribune',forme:'losange',n:4,txt:'l\'unité posée ici attire les coups des voies voisines laissées vides'}};
const plType=Z=>Z?(Z.mod||Z.id).replace(/\d+$/,""):"";
const plActif=()=>!!(CB&&CB.cases);
/* case d'une unité : « a » (vous) ou « e » (ennemi), voie, rang */
const caseCle=(cote,v,r)=>cote+v+r;
const caseType=(cote,v,r)=>CB&&CB.cases?CB.cases[caseCle(cote,v,r)]||null:null;
const terrainDe=u=>!u||!CB||!CB.cases||u.voie==null?null:u.hero||u.garde||u.chef?null:caseType(CB.foes.indexOf(u)>=0?'e':'a',u.voie,rangDe(u));
/* rang : vos unités gardent le rang choisi ; chez l'ennemi, la première créature de la voie est à l'avant et celle qui suit avance quand elle tombe */
function rangDe(u){if(!CB)return 0;if(CB.foes.indexOf(u)<0)return u.rang||0;if(u.chef)return 2;
  const l=CB.foes.filter(m=>!m.chef&&m.pv>0&&m.voie===u.voie);const i=l.indexOf(u);return i<0?0:Math.min(1,i)}
const surTerrain=()=>CB?CB.allies.filter(u=>u.bete&&u.pv>0):[];
const occupant=(v,r)=>surTerrain().find(u=>u.voie===v&&(u.rang||0)===r);
/* l'unité qui reçoit les coups dans une voie : l'avant, sinon l'arrière */
const tenantVoie=v=>occupant(v,0)||occupant(v,1);
/* Tribune : une unité posée sur un losange attire les coups des voies voisines vides */
function tribuneVoisine(v){return surTerrain().find(u=>terrainDe(u)==='MAR'&&Math.abs(u.voie-v)===1)||null}

/* ---------- Terrain : les tuiles de votre royaume et celles de la zone ---------- */
function paverPlateau(Z){const C=CB;if(C.kind==='duel')return;C.cases={};
  const types=melange(['CIT','DON','ANT','RES','MAR'].filter(t=>ZN.some(z=>plType(z)===t&&S.own[z.id]&&S.act[z.id]))).slice(0,3);
  const libres=melange([0,1,2].flatMap(v=>[0,1].map(r=>[v,r])));
  types.forEach((t,i)=>{const [v,r]=libres[i];C.cases[caseCle('a',v,r)]=t});
  const tz=plType(Z);if(PL_T[tz])melange([0,1,2]).slice(0,2).forEach(v=>{C.cases[caseCle('e',v,0)]=tz})}
/* ennemis : répartis sur les trois voies (deux créatures : deux voies sur trois, au hasard) ; le chef reste derrière et vise une voie annoncée */
function rangerEnnemis(foes){if(CB&&CB.kind==='duel')return;/* passe 3 : le plateau défend mieux, le chef a 30 % de PV en plus */for(const m of foes)if(m.chef&&!m.plx){m.plx=1;m.pv=m.max=Math.round(m.max*(CB&&CB.kind==='eveil'?1.7:1.4))}const l=foes.filter(m=>!m.chef),vs=melange([0,1,2]);l.forEach((m,i)=>{m.voie=vs[i%3]})}
/* effets de début de tour des cases (vous, au début de votre tour ; l'ennemi, au début du sien) */
function effetsCases(cote){if(!plActif())return;const l=cote==='a'?surTerrain():vivants(CB.foes).filter(m=>!m.chef);
  /* soutien (passe 3) : une unité à l'arrière couvre l'avant de sa voie, +2 de garde à chaque tour */
  if(cote==='a')for(const u of l)if((u.rang||0)===1){const av=occupant(u.voie,0);if(av){av.g+=2;pop(av,'+2 soutien','g')}}
  for(const u of l){const t=terrainDe(u);if(t==='CIT'){u.g+=3;pop(u,'+3 bastion','g')}else if(t==='ANT'&&u.pv<u.max){const a=Math.min(2,u.max-u.pv);u.pv+=a;pop(u,'+'+a+' tanière','soin')}}}
/* Piège : premier coup porté chaque tour dans une voie qui a un pentagone (de son côté), 3 dégâts à l'attaquant */
function piegeVoie(cote,v,auteur){if(!plActif()||!auteur||auteur.pv<=0)return;const gardien=(cote==='a'?surTerrain():vivants(CB.foes)).find(u=>u.voie===v&&terrainDe(u)==='DON');if(!gardien)return;
  CB.pieges=CB.pieges||{};const k=cote+v;if(CB.pieges[k]===CB.tour)return;CB.pieges[k]=CB.tour;journal(`Piège de la voie ${PL_NOMV[v]}, tenu par ${gardien.nom} : ${auteur.nom} prend 4.`);frappe(auteur,4,{nom:'piège'})}
const bonusSource=u=>terrainDe(u)==='RES'?2:0;
/* cible d'une bête alliée : l'ennemi de sa voie (avant, puis arrière), sinon un ennemi sur une Tribune voisine, sinon le chef, sinon le premier debout */
function cibleBete(b){const v=vivants(CB.foes);if(!v.length)return null;
  b.demi=false;const dans=v.filter(m=>!m.chef&&m.voie===b.voie).sort((p,q)=>rangDe(p)-rangDe(q));if(dans.length)return dans[0];
  const tri=v.find(m=>!m.chef&&terrainDe(m)==='MAR'&&Math.abs(m.voie-b.voie)===1);if(tri)return tri;
  /* passe 6 : le chef se tient dans la voie qu'il vise ; les bêtes de cette voie le frappent à pleine force */
  const ch=v.find(m=>m.chef&&m.cv===b.voie);if(ch)return ch;
  /* voie vide : la bête va frapper le chef, ou une voie voisine, à moitié de sa force */
  b.demi=true;return v.filter(m=>!m.chef&&Math.abs(m.voie-b.voie)===1)[0]||v.find(m=>m.chef)||v[0]}
/* frappe d'une bête : pleine à l'avant, moitié à l'arrière */
const forceBete=b=>{const a=b.atk+(aPassif('meute')?1:0)+bonusSource(b);return(b.rang||0)||b.bouge===CB.tour||voieVide(b)?Math.ceil(a/2):a};
/* voie vide : aucun ennemi dans la voie de la bête ni sur une Tribune voisine (calculé au moment voulu, sans rien écrire) */
const voieVide=b=>{if(!CB)return false;const v=vivants(CB.foes);return!v.some(m=>(m.chef?m.cv===b.voie:m.voie===b.voie)||(!m.chef&&terrainDe(m)==='MAR'&&Math.abs(m.voie-b.voie)===1))};
/* menace sur chaque voie : ce que les ennemis ont annoncé (sert au placement automatique et à l'affichage) */
/* passe 4 : coup prévu, calculé comme coupSurTerrain (cible, Source, bélier, centre) ; sert au badge et à la case proposée */
function coupPrevu(m){const I=m&&m.int;if(!I||'afbv'.indexOf(I.a)<0)return null;const vol=I.a==='v';let v=I.v+(vol?0:bonusSource(m));
  const t=vol?(CB.volGarde===CB.tour&&gardeU()?gardeU():CB.hero):cibleAlliee(m);if(I.a==='b'&&t&&!t.hero&&(t.garde||t.mur))v=Math.round(v*(t.sentinelle?1.5:2));
  if(CB.centre==='ennemi')v+=1;if(t&&t.hero&&!CB.sr&&t.res)v=Math.max(1,v-t.res);return{v,t,vol,voie:voieDe(m)}}
function menaces(){const t=[0,0,0];if(!CB)return t;for(const m of vivants(CB.foes)){const I=m.int;if(!I)continue;if(I.a==='t'){for(let v=0;v<3;v++)t[v]+=I.v+(CB.centre==='ennemi'?1:0);continue}const c=coupPrevu(m);if(c&&!c.vol)t[c.voie]+=c.v}return t}
const vols=()=>{const t=[0,0,0];if(CB)for(const m of vivants(CB.foes)){const c=coupPrevu(m);if(c&&c.vol)t[c.voie]+=c.v}return t};
/* élans : la frappe forte arrivera au tour suivant (affichée à part) */
function elans(){const t=[0,0,0];if(!CB)return t;for(const m of vivants(CB.foes))if(m.int&&m.int.a==='c'){
  /* passe 8 : le coup qui suit vraiment (bélier ou coup fort), échauffement compris, calculé comme coupPrevu */
  const ech=CB.cases&&CB.tour>=3?1:0,a=m.forceF===2?'b':'f',I0=m.int;m.int={a,v:a==='b'?m.atk+ech:2*(m.atk+ech)};const c=coupPrevu(m);m.int=I0;t[voieDe(m)]+=c?c.v:2*m.atk}return t}
/* case proposée pour une nouvelle unité : l'avant de la voie la plus menacée qui n'a personne devant, sinon l'arrière ; une bête fragile va derrière */
function caseAuto(u){const th=menaces(),el=elans();for(let v=0;v<3;v++)th[v]+=Math.round(el[v]/2);
  /* un bloqueur ne va pas d'office face à un bélier (double contre lui) */
  const bel=[0,0,0];for(const m of vivants(CB.foes))if(m.int&&m.int.a==='b')bel[voieDe(m)]+=m.int.v;let best=null,bs=-1e9;
  for(let v=0;v<3;v++)for(let r=0;r<2;r++){if(occupant(v,r))continue;let s=r===0?th[v]*(u.mur?2:1)+(u.mur?4:2):1+(occupant(v,0)?2:0);
    if(r===0&&!u.mur&&u.pv<th[v])s-=th[v];if(r===0&&u.mur)s-=bel[v]*6;const t=caseType('a',v,r);if(t==='CIT'&&r===0)s+=2;if(t==='RES'&&!u.mur)s+=2;if(t==='ANT')s+=1;if(t==='MAR'){const vois=(th[v-1]||0)+(th[v+1]||0);s+=u.pv>vois?1:-vois}
    if(s>bs){bs=s;best=[v,r]}}
  return best}
/* poser une unité : sur une case prise, les deux unités échangent leurs places */
function poserUnite(u,v,r){const o=surTerrain().find(x=>x!==u&&x.voie===v&&(x.rang||0)===r);if(o){o.voie=u.voie;o.rang=u.rang}u.voie=v;u.rang=r}

/* ---------- Placement à la manette ---------- */
function debutPlacement(){const C=CB;if(!C||!C.aPlacer||!C.aPlacer.length)return false;
  const u=C.aPlacer.shift();if(u.pv<=0||C.allies.indexOf(u)<0)return debutPlacement();
  C.pl={u,v:u.voie||0,r:u.rang||0};journal(`Où placer ${u.nom} ? ◀ ▶ avant ou arrière, ▲ ▼ la voie, OK pour poser.`);dessinerMain();return true}
function plInput(a,rep){const C=CB,P=C.pl;if(!P)return false;
  if(a==='up'||a==='down'){P.v=(P.v+(a==='up'?-1:1)+3)%3;tick();dessinerMain()}
  else if(a==='left'||a==='right'){P.r=a==='left'?1:0;tick();dessinerMain()}
  else if((a==='ok'||a==='back')&&!rep){if(a==='ok')poserUnite(P.u,P.v,P.r);else if(P.man){C.manT=null;P.u.bouge=null}C.pl=null;clack();
    journal(`${P.u.nom} tient la voie ${PL_NOMV[P.u.voie]}, ${(P.u.rang||0)?'à l\'arrière (à l\'abri, frappe à moitié)':'à l\'avant'}${terrainDe(P.u)?' · '+PL_T[terrainDe(P.u)].nom:''}.`);
    if(!debutPlacement()){dessinerMain();majUnites()}}
  return true}

/* ---------- Dessin des cases ---------- */
function formeSVG(t,col,plein){const T=PL_T[t];let pts;
  if(t==='ANT')pts='8,22 50,40 92,22 92,78 50,60 8,78';
  else if(t==='MAR')pts='50,4 96,50 50,96 4,50';
  else{const n=T?T.n:6,r=44;pts=Array.from({length:n},(_,i)=>{const a=i*2*Math.PI/n-Math.PI/2+(n===6?Math.PI/6:0);return(50+Math.cos(a)*r).toFixed(1)+','+(50+Math.sin(a)*r).toFixed(1)}).join(' ')}
  return`<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="${pts}" fill="${plein}" stroke="${col}" stroke-width="2.2" vector-effect="non-scaling-stroke"/></svg>`}
function dessinerCases(){if(!CB)return;
  for(const cote of['a','e']){const host=$(cote==='a'?'cb-allies':'cb-foes');if(!host)continue;
    for(let v=0;v<3;v++)for(let r=0;r<2;r++){const id='pc-'+cote+v+r;let d=document.getElementById(id);
      const t=caseType(cote,v,r),col=t?(cote==='a'?'#e8c77f':'#e2675a'):'rgba(232,199,127,.28)',fond=t?(cote==='a'?'rgba(232,199,127,.13)':'rgba(226,103,90,.13)'):'rgba(13,12,15,.32)';
      const sel=!!(CB.pl&&cote==='a'&&CB.pl.v===v&&CB.pl.r===r),k=(t||'-')+(sel?'s':'')+(CB.cases?1:0);
      if(!d){d=document.createElement('div');d.id=id;d.className='pcase';host.prepend(d)}
      d.style.gridRow=String(v+1);d.style.gridColumn=cote==='a'?String(r?3:4):String(r?2:1);
      if(d.dataset.k!==k){d.dataset.k=k;d.classList.toggle('vise',sel);d.innerHTML=formeSVG(t||'RES',col,fond)+(t?`<span class="pt">${PL_T[t].nom}</span>`:'')}}}}
/* bandeau du placement : ce que fait la case visée */
function aidePlacement(){if(CB&&CB.man&&!CB.pl){const u=surTerrain()[CB.man.i%Math.max(1,surTerrain().length)];return`Manœuvre : ${u?u.nom:'?'} · ◀ ▶ changer d'unité · OK la déplacer · Retour annuler`}const P=CB&&CB.pl;if(!P)return'';const t=caseType('a',P.v,P.r),o=occupant(P.v,P.r);
  return`Voie ${PL_NOMV[P.v]}, ${P.r?'arrière : à l\'abri tant que l\'avant tient, frappe à moitié':'avant : prend les coups de la voie, frappe pleinement'}${t?' · '+PL_T[t].nom+' : '+PL_T[t].txt:''}${o&&o!==P.u?' · échange avec '+o.nom:''} · OK poser · Retour garder la case proposée`}

const plCss=document.createElement('style');plCss.textContent=`
#cb-allies,#cb-foes{grid-template-rows:repeat(3,minmax(0,1fr))!important;row-gap:calc(var(--u)*.3)!important;column-gap:calc(var(--u)*.5)!important;align-self:stretch}
.pcase{position:relative;z-index:auto;width:calc(var(--u)*8.6);height:100%;min-height:calc(var(--u)*7);pointer-events:none;align-self:stretch}
.pcase svg{position:absolute;inset:6% 2%;width:96%;height:88%}
.pcase .pt{position:absolute;left:0;right:0;bottom:-.1em;text-align:center;font-size:calc(var(--u)*.72);letter-spacing:.12em;text-transform:uppercase;color:var(--laiton2);text-shadow:0 1px 4px #000}
#cb-foes .pcase .pt{color:#ff9a8a}
.pcase.vise svg polygon{stroke:#fff3c8;stroke-width:4;fill:rgba(232,199,127,.32)}
.pcase.vise{animation:plvise .8s ease-in-out infinite alternate}
@keyframes plvise{from{filter:drop-shadow(0 0 2px #e8c77f)}to{filter:drop-shadow(0 0 14px #e8c77f)}}
#cb-allies .u:not(.hero):not(.garde),#cb-foes .u:not(.chef){position:relative;z-index:1;width:calc(var(--u)*8.2)!important}
#cb-allies .u:not(.hero):not(.garde) .por,#cb-foes .u:not(.chef) .por{width:calc(var(--u)*3.6)!important;height:calc(var(--u)*3.6)!important}
#combat.placement .cb-aide{position:relative;z-index:7;background:rgba(10,9,12,.88);border-radius:calc(var(--u)*.5);padding:.2em .6em}
#combat.placement #cb-main{opacity:.35;filter:saturate(.5);transform:translateY(calc(var(--u)*4));transition:all .2s}
#combat.placement #cb-main .cc.f{transform:none!important}
#cb-allies .u:not(.hero):not(.garde) .un,#cb-foes .u:not(.chef) .un{font-size:calc(var(--u)*.85)}
#cb-allies .u:not(.hero):not(.garde) .plaque,#cb-foes .u:not(.chef) .plaque{padding:calc(var(--u)*.2) calc(var(--u)*.4)}
#cb-allies .u:not(.hero):not(.garde) .bar,#cb-foes .u:not(.chef) .bar{height:calc(var(--u)*1.05)}
#cb-allies .u:not(.hero):not(.garde) .bar span,#cb-foes .u:not(.chef) .bar span{font-size:calc(var(--u)*.72);line-height:calc(var(--u)*1.05)}
#cb-foes .u:not(.chef) .int,#cb-allies .u:not(.hero):not(.garde) .int{font-size:calc(var(--u)*.72)}
#cb-allies .u .gd,#cb-foes .u .gd{min-height:0;font-size:calc(var(--u)*.8)}
.u.hero .por{width:calc(var(--u)*8.5)!important;height:calc(var(--u)*8.5)!important}
.u.chef .por{width:calc(var(--u)*9)!important;height:calc(var(--u)*9)!important}
.u.chef .int .voie,.u .int .voie{color:var(--laiton2)}
.u.arriere .por{opacity:.85;transform:scale(.92)}
.plmenace{position:absolute;z-index:6;left:-50%;right:-50%;top:-.2em;text-align:center;white-space:nowrap;line-height:1.15;font-size:calc(var(--u)*.85);font-weight:700;color:#ff9a8a;text-shadow:0 1px 4px #000}
.u.manvise .plaque{border-color:#fff3c8;box-shadow:0 0 0 3px rgba(232,199,127,.5)}
#cb-foes .u.mort{opacity:0!important;pointer-events:none}
#cb-main{position:relative}#cb-main .cc.man{border-color:rgba(143,192,111,.6);position:absolute;right:0;bottom:calc(100% + var(--u)*.4);transform:scale(.78);transform-origin:bottom right}
#cb-main .cc.kcarte{min-width:calc(var(--u)*7)!important}
#cb-main .cc.man.f{transform:scale(.88)}body.manette #cb-main .cc.man::before{content:"Y"}
`;document.head.appendChild(plCss);

/* ---------- Passe 2 (19 nov., d'après les notes des testeurs) ---------- */
/* Unités de départ : la Sentinelle de votre Citadelle (bloqueur qui riposte peu) et les unités des passifs se placent au début du tour 1,
   pour que le plateau existe dès le premier combat, sans carte commune */
function uniteDeDepart(){if(!plActif())return;const cits=zonesA('CIT');
  if(cits.length){const L=Math.max(...cits.map(Z=>Lz(Z.id))),n=6+L;invoquer({nom:'Sentinelle',pv:n,max:n,atk:1+Math.floor(L/2),g:0,bete:1,mur:1,sentinelle:1})}
  CB.aPlacer=surTerrain().slice()}
/* passe 7 : Sentinelle de relève, une fois par combat : plateau vide au début de votre tour, la Citadelle en renvoie une à la moitié de ses PV */
function releveSentinelle(){if(!plActif()||CB.kind==='duel'||CB.releve||CB.tour<2||surTerrain().length)return;const cits=zonesA('CIT');if(!cits.length)return;
  CB.releve=1;const L=Math.max(...cits.map(Z=>Lz(Z.id))),n=Math.ceil((6+L)/2);journal('La Citadelle envoie une Sentinelle de relève.');const u={nom:'Sentinelle',pv:n,max:n,atk:1+Math.floor(L/2),g:0,bete:1,mur:1,sentinelle:1};invoquer(u);CB.aPlacer=[u]}
/* l'arrière avance quand l'avant de sa voie est vide (au début de votre tour) */
function avancerArriere(){if(!plActif())return;for(let v=0;v<3;v++){const ar=occupant(v,1);if(ar&&!occupant(v,0)&&['CIT','DON','ANT'].indexOf(terrainDe(ar))<0){ar.rang=0;pop(ar,'avance','g');journal(`${ar.nom} avance à l'avant de la voie ${PL_NOMV[v]}.`)}}}
/* Manœuvre : une fois par tour, déplacer une de vos unités (échange compris) ; elle frappe à moitié ce tour-là */
const manoeuvrePossible=()=>plActif()&&!CB.busy&&CB.manT!==CB.tour&&surTerrain().length>0;
function manoeuvreHTML(){if(!plActif())return'';const ok=manoeuvrePossible();
  return`<div class="cc fin man${ok?'':' off'}"><div class="cn">Manœuvre</div><div class="ct">${ok?'Déplacer une unité, une fois par tour. Elle frappe à moitié ce tour.':'Déjà faite ce tour.'}</div></div>`}
function debutManoeuvre(){if(!manoeuvrePossible()){sfx('miss');journal('Une seule manœuvre par tour.');return}CB.man={i:0};clack();journal('Manœuvre : ◀ ▶ ▲ ▼ choisir l\'unité, OK pour la prendre, Retour annuler.');dessinerMain();majUnites()}
function manInput(a,rep){const C=CB,l=surTerrain();if(!l.length){C.man=null;dessinerMain();return}
  if(a==='left'||a==='right'||a==='up'||a==='down'){C.man.i=(C.man.i+(a==='left'||a==='up'?-1:1)+l.length)%l.length;tick();majUnites()}
  else if(a==='back'&&!rep){C.man=null;dessinerMain();majUnites()}
  else if(a==='ok'&&!rep){const u=l[C.man.i%l.length];C.man=null;C.manT=C.tour;u.bouge=C.tour;C.pl={u,v:u.voie||0,r:u.rang||0,man:1};clack();
    journal(`Où mener ${u.nom} ? ▲ ▼ la voie, ◀ ▶ arrière ou avant, OK.`);dessinerMain();majUnites()}}
const manVise=u=>!!(CB&&CB.man&&surTerrain()[CB.man.i%Math.max(1,surTerrain().length)]===u);
/* menace par voie, affichée sur la case d'avant de chaque voie */
function badgesMenace(){if(!plActif())return;const th=menaces();for(let v=0;v<3;v++){const d=document.getElementById('pc-a'+v+'0');if(!d)continue;let b=d.querySelector('.plmenace');
  if(!b){b=document.createElement('span');b.className='plmenace';d.appendChild(b)}const qui=tenantVoie(v)||tribuneVoisine(v),el=elans()[v],vo=vols()[v];b.textContent=(vo?'➶ '+vo+' → '+(CB.volGarde===CB.tour&&gardeU()?'Garde':'héros')+(th[v]||el?' · ':''):'')+(th[v]?'⚔ '+th[v]+' → '+(qui?qui.nom.split(/[ ']/)[0]:gardeU()?'Garde':'héros'):'')+(el?(th[v]?' · ':'')+'élan '+el+' au prochain tour':'')}
  for(const u of surTerrain())if(u.el)u.el.classList.toggle('manvise',manVise(u))}

/* ---------- Passe 5 (20 nov.) : renforts, pour que le plateau compte jusqu'au bout ----------
   Éveil : le chef appelle un renfort aux tours 3 et 5, annoncé au tour d'avant, dans la voie qu'il vise.
   Rencontre et horde : un renfort au tour 3, toujours (passe 6). */
function renforts(){const C=CB;if(!plActif()||C.kind==='duel')return;const t=C.tour,chef=vivants(C.foes).find(m=>m.chef);
  const tours=C.kind==='eveil'&&chef?[3,5]:[3];
  /* passe 7 : le tour d'arrivée est retenu à l'annonce ; le renfort vient même si le chef tombe entre-temps */
  if(C.renfortT===t&&C.renfortVoie!=null)arriveeRenfort(false);
  if(tours.indexOf(t+1)>=0){const v=chef&&chef.cv!=null?chef.cv:Math.floor(Math.random()*3);C.renfortVoie=v;C.renfortT=t+1;journal(`${chef?chef.nom+' appelle':'Un cri appelle'} un renfort : il arrivera au prochain tour, voie ${PL_NOMV[v]}.`)}}
/* passe 6 : un renfort annoncé vient toujours ; si ses alliés tombent avant, il arrive aussitôt ; il entre en prenant son élan */
function arriveeRenfort(tot){const C=CB,v=C.renfortVoie;C.renfortVoie=null;
  const Z=C.Z,M=MON[Z.id]||MON[Z.mod];if(!M)return;const m=monstre(Z,Math.random()<.5?0:1,S.emp&&S.emp[Z.id]);m.voie=v;m.renfort=1;/* passe 7-8 : en rencontre de bas niveau (≤ 2), le renfort a 30 % de PV en moins ; le renfort du tour 5 de l'éveil est lourd (PV ×1,5, inébranlable pendant son élan) ; tous entrent en prenant leur élan, puis frappent fort */
  if(C.kind!=='eveil'&&Lz(Z.id)<=2)m.pv=m.max=Math.max(1,Math.round(m.max*.7));if(C.kind==='eveil'&&C.tour>=5){m.lourd=1;m.pv=m.max=Math.round(m.max*2);m.nom+=' (lourd)'}
  C.foes.push(m);uniteEl(m,'cb-foes');intention(m);if(C.kind==='eveil'||Lz(Z.id)>2){if(m.int&&m.int.a==='c'&&!m.forceF&&m.mv[m.mi%m.mv.length]==='f')m.mi++;m.forceF=1;m.int={a:'c',v:0,ic:'…',t:'prend son élan'}}else if(m.int&&m.int.a!=='c'){m.forceF=m.int.a==='b'?2:1;m.int={a:'c',v:0,ic:'…',t:'prend son élan'}}m.renfort=2;pop(m,'renfort','deg');journal(tot?`Le renfort accourt : ${m.nom} entre dans la voie ${PL_NOMV[v]}.`:`Renfort : ${m.nom} entre dans la voie ${PL_NOMV[v]}.`);if(tot){majUnites();if(typeof placerNoeud==='function')placerNoeud()}}
/* passe 6 : un élan perdu supprime le coup fort qui devait suivre */
function perdreElan(m){if(m.lourd)return;m.forceF=0;m.reElan=0;if(m.mv&&m.mv[m.mi%m.mv.length]==='f')m.mi++}
/* passe 6 : plancher d'attaque (les malus ne descendent pas un ennemi sous 60 % de son attaque, un chef sous 75 %) ; échauffement à partir du tour 4 (+1 d'attaque par tour) */
function plancherAtk(m){if(!plActif()||CB.kind==='duel')return;if(m.atk0==null)m.atk0=m.atk;
  if(CB.tour>=3&&m.renfort!==1&&m.echT!==CB.tour){m.echT=CB.tour;m.atk++;m.atk0++;if(CB.echJ!==CB.tour){CB.echJ=CB.tour;journal(`Les ennemis s'échauffent : +1 d'attaque au prochain tour (+${CB.tour-2} en tout).`)}pop(m,'s\'échauffe','deg')}
  const p=Math.ceil(m.atk0*(m.chef?.75:.6));if(m.atk<p)m.atk=p}
