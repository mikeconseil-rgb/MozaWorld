/* MozaWorld TV 2.3 : les routes forgent les pouvoirs.
   Une Ressource au niveau 3 offre trois atouts de son type de mana ; on en choisit un (il tient lieu de pôle).
   Une route (ouverte dès le niveau 2) relie la Ressource à une tuile voisine ; si la Ressource est au niveau 3,
   son atout se greffe sur les cartes de cette tuile. Une tuile reçoit au plus autant de routes qu'elle a de côtés.
   Atouts de types différents : cumulés ; même type : un seul compte. Route coupée (Ressource sous le niveau 2) : atout perdu.
   Règles : design/cartes-2.2/regles-avancees.md, section 6. */
const ATOUTS={
  Feu:[['Tison','La carte laisse 2 de brûlure pendant 2 tours à sa cible (ou à un ennemi au hasard).'],
       ['Soufflet','Si la carte inflige des dégâts : +1 dégât par carte déjà jouée ce tour, sur la même cible.'],
       ['Cendre chaude','Si la carte reste en main à la fin du tour : 2 dégâts à tous les ennemis.']],
  Glace:[['Givre aux tempes','La première fois par combat, la cible de la carte hésite.'],
         ['Gel lent','La carte retire 1 d\'attaque à sa cible (une fois par cible).'],
         ['Conserve','À la fin du tour, la carte peut rester en main au lieu d\'être défaussée (une à la fois).']],
  Eau:[['Marée','Après la carte, piochez 1 si votre main a 3 cartes ou moins.'],
       ['Source','La carte soigne aussi de 3 la bête alliée la plus blessée.'],
       ['Reflux','La première fois par combat, la carte revient en main au lieu d\'aller à la défausse.']],
  'Sève':[['Bouture','Si la carte invoque, la bête a +4 PV ; sinon, le héros gagne 2 de garde.'],
          ['Sève lente','Le héros se soigne de 1 au début de chacun des 3 tours suivants.'],
          ['Greffe','La carte pose aussi Racine (réveil à moitié), même avant le palier 7.']],
  Pierre:[['Assise','Le héros gagne 3 de garde.'],
          ['Poids','Si la carte a un prix, le héros récupère 1 PV ou la carte défaussée revient en main.'],
          ['Remploi','La première fois qu\'on la joue dans un combat, la carte rend 1 de capacité.']],
  Vent:[['Rafale','Si la carte vise une cible, un deuxième ennemi subit 3 dégâts.'],
        ['Vent porteur','Une fois par combat, la carte jouée en mana gris garde tout son effet.'],
        ['Girouette','Après la carte, un ennemi qui prenait son élan le perd.']]};
const estRES=Z=>(Z.mod||Z.id)==='RES';
/* voisines : deux tuiles qui partagent un côté (deux sommets communs) */
const VOISINES={};
/* 2.15 : calculées sur le monde entier (ZW), par sommets partagés, pour que le territoire et les domaines ne dépendent pas de la région chargée */
(()=>{const pr=p=>Math.round(p[0])+','+Math.round(p[1]);const parS={};const W=typeof ZW!=='undefined'?ZW:ZN;
  for(const Z of W)for(const p of Z.poly)(parS[pr(p)]=parS[pr(p)]||[]).push(Z.id);
  for(const A of W){const n={};for(const p of A.poly)for(const b of parS[pr(p)])if(b!==A.id)n[b]=(n[b]||0)+1;VOISINES[A.id]=Object.keys(n).filter(b=>n[b]>=2)}})();
const estCIT=Z=>!!Z&&(Z.mod||Z.id)==='CIT',estDON=Z=>!!Z&&(Z.mod||Z.id)==='DON';
const tient=id=>!!(S.own[id]&&S.act[id]);
/* rempart (17 nov.) : route ouverte par une Citadelle tenue et éveillée (palier 1 ou plus) vers une Citadelle ou un Donjon tenu et voisin */
const rempartOK=(a,b)=>tient(a)&&tient(b)&&Math.abs(S.lv[a]||0)>=1&&(estDON(ZB[b])||estCIT(ZB[b]));
function etatRoutes(){S.routes=S.routes||{};S.atout=S.atout||{};
  for(const r in S.routes){
    if(estCIT(ZB[r])){S.routes[r]=S.routes[r].filter(b=>rempartOK(r,b));if(!S.routes[r].length)delete S.routes[r];continue}
    /* route coupée si la Ressource est sous le niveau 2 */
    if(Math.abs(S.lv[r]||0)<2)delete S.routes[r]}}
const routesVers=id=>{etatRoutes();return Object.keys(S.routes).filter(r=>S.routes[r].indexOf(id)>=0)};
const nbCotes=id=>ZB[id]?ZB[id].poly.length:4;
/* atouts actifs sur une tuile : un par type de mana, d'une Ressource au niveau 3 reliée */
function atoutsDe(id){const vus={},out=[];for(const r of routesVers(id)){if(Math.abs(S.lv[r]||0)<3||S.atout[r]===undefined)continue;
  const t=ZMANA[r];if(vus[t])continue;vus[t]=1;const a=ATOUTS[t]&&ATOUTS[t][S.atout[r]];if(a)out.push({t,nom:a[0],txt:a[1],r})}return out}
const aAtout=(id,nom)=>!!id&&atoutsDe(id).some(a=>a.nom===nom);
/* ---------- menu de la Pierre d'éveil d'une Ressource ---------- */
function optionsRoutes(Z){etatRoutes();const o=[],lv=Math.abs(S.lv[Z.id]||0);
  if(estRES(Z)&&S.act[Z.id]){
    if(lv>=3){const a=S.atout[Z.id]!==undefined?ATOUTS[ZMANA[Z.id]][S.atout[Z.id]][0]:null;
      o.push({l:a?`Atout choisi : ${a}`:'Choisir l\'atout du niveau 3',ic:'✦',cls:'p',d:a?'changer':'trois atouts '+ZMANA[Z.id],go:()=>openAtouts(Z)})}
    if(lv>=2)o.push({l:'Routes',ic:'⟋',cls:'p',d:`${(S.routes[Z.id]||[]).length} route(s) · ${lv>=3?'atout greffé':'atout au niveau 3'}`,go:()=>openRoutes(Z)});
    else o.push({l:'Routes',ic:'⟋',off:true,d:'ouvertes au niveau 2'})}
  else if(estCIT(Z)&&S.act[Z.id]){const n=(S.routes[Z.id]||[]).length;
    if(Math.abs(S.lv[Z.id]||0)>=1)o.push({l:'Remparts',ic:'▥',cls:'p',d:`${n} rempart(s) · route vers une Citadelle ou un Donjon à vous, voisin`,go:()=>openRemparts(Z)});
    else o.push({l:'Remparts',ic:'▥',off:true,d:'ouverts au palier 1'})}
  if(!estRES(Z)){const at=atoutsDe(Z.id);if(at.length)o.push({l:'Atouts greffés',ic:'✦',off:true,d:at.map(a=>a.nom).join(', ')})}
  return o}
function openRemparts(Z,f){etatRoutes();const mes=S.routes[Z.id]||[],max=nbCotes(Z.id);
  const cand=VOISINES[Z.id].filter(id=>estCIT(ZB[id])||estDON(ZB[id]));
  const opts=cand.map(id=>{const B=ZB[id],on=mes.indexOf(id)>=0,ok=rempartOK(Z.id,id),pleine=!on&&routesVers(id).length>=nbCotes(id);
    return{l:(on?'✓ ':'')+B.info.nom,ic:on?'▥':'·',cls:on?'p':'',off:!on&&(!ok||pleine||mes.length>=max),
      d:on?'rempart debout · OK pour le défaire':!ok?`${estDON(B)?'Donjon':'Citadelle'} pas encore à vous`:pleine?'tuile déjà pleine de routes':(estDON(B)?'Donjon':'Citadelle')+' voisin',
      go:()=>{const r=S.routes[Z.id]=S.routes[Z.id]||[];if(on)r.splice(r.indexOf(id),1);else r.push(id);save();openRemparts(Z,UI.f)}}});
  ui('menu',{sur:'Remparts · '+Z.info.nom,t:'Relier la Citadelle',f:f||0,
    corps:`<p class="petit">Une route entre cette Citadelle et une Citadelle ou un Donjon voisin qui est à vous devient un rempart. Il pose un bloqueur de 10 PV au début des combats dans les deux zones et leurs voisines (2 au plus), et bloque l'abri des chemins pour vos adversaires. Si l'une des deux zones est perdue, le rempart tombe.${cand.length?'':' <b>Aucune Citadelle ni aucun Donjon voisin.</b>'}</p>`,
    back:()=>openEveil(Z),opts:opts.concat([{l:'Retour',ic:'◆',go:()=>openEveil(Z)}])})}
function openAtouts(Z,f){const t=ZMANA[Z.id],L=ATOUTS[t]||[];
  ui('menu',{sur:'Ressource niveau 3 · mana '+t,t:'Choisir un atout',f:f||0,
    corps:'<p class="petit">L\'atout choisi tient lieu de pôle. Chaque route vers une tuile voisine le greffe sur les cartes de cette tuile. Deux atouts du même mana sur une tuile : un seul compte.</p>',
    back:()=>openEveil(Z),opts:L.map((a,i)=>({l:(S.atout[Z.id]===i?'✓ ':'')+a[0],ic:'✦',cls:S.atout[Z.id]===i?'p':'',d:a[1],go:()=>{S.atout[Z.id]=i;save();toast('Atout',a[0],a[1]);openEveil(Z)}})).concat([{l:'Retour',ic:'◆',go:()=>openEveil(Z)}])})}
function openRoutes(Z,f){etatRoutes();const mes=S.routes[Z.id]||[],max=nbCotes(Z.id);
  const opts=VOISINES[Z.id].map(id=>{const B=ZB[id],on=mes.indexOf(id)>=0,pleine=!on&&routesVers(id).length>=nbCotes(id);
    return{l:(on?'✓ ':'')+B.info.nom,ic:on?'⟋':'·',cls:on?'p':'',off:pleine||(!on&&mes.length>=max),d:on?'route ouverte · OK pour la couper':pleine?'tuile déjà pleine de routes':`${TYPE[id]?TYPE[id].kind:''} · mana ${ZMANA[id]||''}`,
      go:()=>{const r=S.routes[Z.id]=S.routes[Z.id]||[];if(on)r.splice(r.indexOf(id),1);else r.push(id);save();openRoutes(Z,UI.f)}}});
  ui('menu',{sur:'Routes · '+Z.info.nom,t:'Relier la Ressource',f:f||0,
    corps:`<p class="petit">Une route relie cette Ressource à une tuile voisine (${mes.length} sur ${max}). Au niveau 3, son atout se greffe sur toutes les cartes de la tuile reliée. Si la Ressource redescend sous le niveau 2, ses routes sont coupées.</p>`,
    back:()=>openEveil(Z),opts:opts.concat([{l:'Retour',ic:'◆',go:()=>openEveil(Z)}])})}
/* ---------- effets des atouts en combat ---------- */
function atoutsAvant(id,k){if(!CB)return;CB.atU=CB.atU||{};
  if(CB.gris&&aAtout(id,'Vent porteur')&&!CB.atU.vent){CB.atU.vent=1;CB.gris=false;journal('Vent porteur : le mana gris garde tout son effet.')}}
function atoutsApres(id,k,t,ctx,avant){if(!CB)return;const at=atoutsDe(id);if(!at.length)return;CB.atU=CB.atU||{};const v=vivants(CB.foes),cible=t&&t.pv>0?t:v[0];
  const deg=v.reduce((a,m)=>a+m.pv,0)<avant;
  for(const a of at)switch(a.nom){
    case'Tison':{const m=cible||v[Math.floor(Math.random()*v.length)];if(m){(m.br=m.br||[]).push([2,2]);pop(m,'tison','deg')}break}
    case'Soufflet':if(deg&&cible&&CB.nJoues>1)frappe(cible,CB.nJoues-1,CB.hero);break;
    case'Givre aux tempes':if(!CB.atU.givre&&cible){CB.atU.givre=1;hesite(cible)}break;
    case'Gel lent':if(cible&&!cible.gel){cible.gel=1;cible.atk=Math.max(1,cible.atk-1);pop(cible,'gel lent','g')}break;
    case'Marée':if(CB.main.length<=3)pioche(1);break;
    case'Source':{const b=CB.allies.filter(u=>u.bete&&u.pv>0).sort((p,q)=>p.pv/p.max-q.pv/q.max)[0];if(b)soigner(b,3);break}
    case'Reflux':if(!(CB.atU.reflux||{})[k]){(CB.atU.reflux=CB.atU.reflux||{})[k]=1;const i=CB.defausse.lastIndexOf(k);if(i>=0&&CB.main.length<8){CB.defausse.splice(i,1);CB.main.push(k)}}break;
    case'Bouture':{const ops=CK[k].ops?CK[k].ops():[];if(ops.some(o=>o[0]==='invoque')){const b=CB.allies[CB.allies.length-1];if(b&&b.bete){b.pv+=4;b.max+=4}}else garder(CB.hero,2);break}
    case'Sève lente':CB.seve=(CB.seve||0)+3;break;
    case'Greffe':execOps([['pose','Racine']],{L:1,x:1,demi:true});break;
    case'Assise':garder(CB.hero,3);break;
    case'Poids':{const ops=CK[k].ops?CK[k].ops():[];if(ops.some(o=>/^prix|^ennemi/.test(o[0])))soigner(CB.hero,1);break}
    case'Remploi':if(!(CB.atU.remploi||{})[k]){(CB.atU.remploi=CB.atU.remploi||{})[k]=1;if(CK[k].cout>0){CB.mana++;journal('Remploi : 1 de capacité rendue.')}}break;
    case'Rafale':if(CK[k].cible&&v.length>1){const m=v.find(x=>x!==cible);if(m)frappe(m,3,CB.hero)}break;
    case'Girouette':{const m=v.find(x=>x.int&&x.int.a==='c');if(m){m.int={a:'g',v:m.atk,ic:'⛨',t:'se garde'};pop(m,'perd son élan','g')}break}}}
/* fin du tour : Cendre chaude (carte restée en main), Conserve (une carte reste en main) */
function atoutsFinTour(){if(!CB)return;let garde=null;
  for(const k of CB.main){const id=CK[k]&&CK[k].z;if(!id)continue;
    if(aAtout(id,'Cendre chaude'))vivants(CB.foes).forEach(m=>frappe(m,2,CB.hero));
    if(!garde&&aAtout(id,'Conserve'))garde=k}
  if(garde){CB.main.splice(CB.main.indexOf(garde),1);CB.conserve=garde}}
function atoutsDebutTour(){if(!CB)return;if(CB.conserve){CB.main.push(CB.conserve);CB.conserve=null}if(CB.seve>0){CB.seve--;soigner(CB.hero,1)}}
/* minicarte : routes en pointillés dorés, plein si l'atout est greffé */
function dessinerRoutes(mc,s,ox,oz){etatRoutes();for(const r in S.routes){const A=ZB[r];if(!A)continue;
  for(const id of S.routes[r]){const B=ZB[id];if(!B)continue;mc.save();mc.strokeStyle=Math.abs(S.lv[r]||0)>=3&&S.atout[r]!==undefined?'#ffd98a':'rgba(255,217,138,.6)';
    mc.lineWidth=2.5;mc.setLineDash(Math.abs(S.lv[r]||0)>=3?[]:[5,4]);mc.beginPath();mc.moveTo((A.c[0]+ox)*s,(A.c[1]+oz)*s);mc.lineTo((B.c[0]+ox)*s,(B.c[1]+oz)*s);mc.stroke();mc.restore()}}}
