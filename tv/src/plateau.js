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
function rangerEnnemis(foes){if(CB&&CB.kind==='duel')return;const l=foes.filter(m=>!m.chef),vs=melange([0,1,2]);l.forEach((m,i)=>{m.voie=vs[i%3]})}
/* effets de début de tour des cases (vous, au début de votre tour ; l'ennemi, au début du sien) */
function effetsCases(cote){if(!plActif())return;const l=cote==='a'?surTerrain():vivants(CB.foes).filter(m=>!m.chef);
  for(const u of l){const t=terrainDe(u);if(t==='CIT'){u.g+=3;pop(u,'+3 bastion','g')}else if(t==='ANT'&&u.pv<u.max){const a=Math.min(2,u.max-u.pv);u.pv+=a;pop(u,'+'+a+' tanière','soin')}}}
/* Piège : premier coup porté chaque tour dans une voie qui a un pentagone (de son côté), 3 dégâts à l'attaquant */
function piegeVoie(cote,v,auteur){if(!plActif()||!auteur||auteur.pv<=0)return;const gardien=(cote==='a'?surTerrain():vivants(CB.foes)).find(u=>u.voie===v&&terrainDe(u)==='DON');if(!gardien)return;
  CB.pieges=CB.pieges||{};const k=cote+v;if(CB.pieges[k]===CB.tour)return;CB.pieges[k]=CB.tour;journal(`Piège de la voie ${PL_NOMV[v]}, tenu par ${gardien.nom} : ${auteur.nom} prend 4.`);frappe(auteur,4,{nom:'piège'})}
const bonusSource=u=>terrainDe(u)==='RES'?2:0;
/* cible d'une bête alliée : l'ennemi de sa voie (avant, puis arrière), sinon un ennemi sur une Tribune voisine, sinon le chef, sinon le premier debout */
function cibleBete(b){const v=vivants(CB.foes);if(!v.length)return null;
  b.demi=false;const dans=v.filter(m=>!m.chef&&m.voie===b.voie).sort((p,q)=>rangDe(p)-rangDe(q));if(dans.length)return dans[0];
  const tri=v.find(m=>!m.chef&&terrainDe(m)==='MAR'&&Math.abs(m.voie-b.voie)===1);if(tri)return tri;
  /* voie vide : la bête va frapper le chef, ou une voie voisine, à moitié de sa force */
  b.demi=true;return v.find(m=>m.chef)||v.filter(m=>Math.abs(m.voie-b.voie)===1)[0]||v[0]}
/* frappe d'une bête : pleine à l'avant, moitié à l'arrière */
const forceBete=b=>{const a=b.atk+(aPassif('meute')?1:0)+bonusSource(b);return(b.rang||0)||b.bouge===CB.tour||b.demi?Math.ceil(a/2):a};
/* menace sur chaque voie : ce que les ennemis ont annoncé (sert au placement automatique et à l'affichage) */
function menaces(){const t=[0,0,0];if(!CB)return t;for(const m of vivants(CB.foes)){const I=m.int;if(!I||'afbc'.indexOf(I.a)<0)continue;t[voieDe(m)]+=I.a==='c'?2*m.atk:I.v}return t}
/* case proposée pour une nouvelle unité : l'avant de la voie la plus menacée qui n'a personne devant, sinon l'arrière ; une bête fragile va derrière */
function caseAuto(u){const th=menaces();let best=null,bs=-1e9;
  for(let v=0;v<3;v++)for(let r=0;r<2;r++){if(occupant(v,r))continue;let s=r===0?th[v]*(u.mur?2:1)+(u.mur?4:2):1+(occupant(v,0)?2:0);
    if(r===0&&!u.mur&&u.pv<th[v])s-=th[v];const t=caseType('a',v,r);if(t==='CIT'&&r===0)s+=2;if(t==='RES'&&!u.mur)s+=2;if(t==='ANT')s+=1;if(t==='MAR'){const vois=(th[v-1]||0)+(th[v+1]||0);s+=u.pv>vois?1:-vois}
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
.pcase{position:relative;z-index:0;width:calc(var(--u)*8.6);height:100%;min-height:calc(var(--u)*7);pointer-events:none;align-self:stretch}
.pcase svg{position:absolute;inset:6% 2%;width:96%;height:88%}
.pcase .pt{position:absolute;left:0;right:0;bottom:-.1em;text-align:center;font-size:calc(var(--u)*.72);letter-spacing:.12em;text-transform:uppercase;color:var(--laiton2);text-shadow:0 1px 4px #000}
#cb-foes .pcase .pt{color:#ff9a8a}
.pcase.vise svg polygon{stroke:#fff3c8;stroke-width:4;fill:rgba(232,199,127,.32)}
.pcase.vise{animation:plvise .8s ease-in-out infinite alternate}
@keyframes plvise{from{filter:drop-shadow(0 0 2px #e8c77f)}to{filter:drop-shadow(0 0 14px #e8c77f)}}
#cb-allies .u:not(.hero):not(.garde),#cb-foes .u:not(.chef){position:relative;z-index:1;width:calc(var(--u)*8.2)!important}
#cb-allies .u:not(.hero):not(.garde) .por,#cb-foes .u:not(.chef) .por{width:calc(var(--u)*3.6)!important;height:calc(var(--u)*3.6)!important}
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
.plmenace{position:absolute;left:100%;top:38%;width:calc(var(--u)*6);margin-left:calc(var(--u)*.2);white-space:normal;line-height:1.15;font-size:calc(var(--u)*.85);font-weight:700;color:#ff9a8a;text-shadow:0 1px 4px #000;z-index:3}
.u.manvise .plaque{border-color:#fff3c8;box-shadow:0 0 0 3px rgba(232,199,127,.5)}
#cb-main .cc.man{border-color:rgba(143,192,111,.6)}
`;document.head.appendChild(plCss);

/* ---------- Passe 2 (19 nov., d'après les notes des testeurs) ---------- */
/* Unités de départ : la Sentinelle de votre Citadelle (bloqueur qui riposte peu) et les unités des passifs se placent au début du tour 1,
   pour que le plateau existe dès le premier combat, sans carte commune */
function uniteDeDepart(){if(!plActif())return;const cits=zonesA('CIT');
  if(cits.length){const L=Math.max(...cits.map(Z=>Lz(Z.id))),n=6+2*L;invoquer({nom:'Sentinelle',pv:n,max:n,atk:1+Math.floor(L/2),g:0,bete:1,mur:1,sentinelle:1})}
  CB.aPlacer=surTerrain().slice()}
/* l'arrière avance quand l'avant de sa voie est vide (au début de votre tour) */
function avancerArriere(){if(!plActif())return;for(let v=0;v<3;v++){const ar=occupant(v,1);if(ar&&!occupant(v,0)){ar.rang=0;pop(ar,'avance','g');journal(`${ar.nom} avance à l'avant de la voie ${PL_NOMV[v]}.`)}}}
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
  if(!b){b=document.createElement('span');b.className='plmenace';d.appendChild(b)}b.textContent=th[v]?'⚔ '+th[v]+' → '+(tenantVoie(v)?tenantVoie(v).nom:tribuneVoisine(v)?tribuneVoisine(v).nom:gardeU()?'Garde':'héros'):''}
  for(const u of surTerrain())if(u.el)u.el.classList.toggle('manvise',manVise(u))}
