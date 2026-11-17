/* MozaWorld TV 2.1 : le Grimoire (demande du 17 nov. : « ajoute un menu dans le jeu pour y mettre le grimoire »).
   Toutes les cartes du jeu, zone par zone : où les gagner, la carte de chaque pôle, et ce qu'elle devient de palier en palier.
   Tout est lu dans les cartes elles-mêmes (CK), au niveau voulu : le Grimoire suit donc les cartes, quelle que soit leur version. */
const avecNiveau=(id,lv,fn)=>{const a=S.lv[id];S.lv[id]=lv;try{return fn()}finally{S.lv[id]=a}};
const estRes=Z=>(Z.mod||Z.id)==='RES';
const nbPaquet=k=>S.deck.filter(x=>x===k||String(x).startsWith(k+'#')).length;   /* 2.2 : les copies portent leur palier (« ZONE#-3 ») */
function openGrimoire(f){mode='menu';document.body.classList.add('jeu-ouvert');
  const vues=ZN.filter(Z=>S.act[Z.id]||S.lv[Z.id]).length;
  ui('menu',{sur:'Grimoire',t:'Le Grimoire des cartes',f:typeof f==='number'?f:0,deux:true,
    corps:`<p class="petit">Une carte par pôle et par zone, gagnée à chaque palier réussi à la Pierre d'éveil. ${vues} zone(s) sur ${ZN.length} déjà prises · choisissez une zone pour voir ses cartes.</p>`,
    back:openMenu,opts:[
      {l:'Règles des cartes',ic:'?',go:grimoireRegles},
      {l:'Cartes communes',ic:'▤',d:'paquet de départ',go:grimoireCommunes},
      ...ZN.map((Z,i)=>({l:Z.info.nom,ic:sgn(S.lv[Z.id]||0)||'0',cls:S.lv[Z.id]<0?'m':S.lv[Z.id]>0?'p':'',
        d:(estRes(Z)?'Ressource · mana et atouts, pas de carte':`${Z.info.pm} / ${Z.info.pp}`)+(nbPaquet(Z.id)?` · ${nbPaquet(Z.id)} au paquet`:''),go:()=>grimoireZone(Z,i+2)})),
      {l:'Retour',ic:'◆',go:openMenu}]})}
function grimoireRegles(){ui('menu',{sur:'Grimoire',t:'Règles des cartes',back:()=>openGrimoire(0),
  corps:`<p class="petit">· Le paquet de départ : 5 cartes communes toutes différentes, les mêmes pour tous (Coup de bâton, Pas de côté, Pieu planté, Jet de pierre, Torche).</p>
  <p class="petit">· Le terrain : les ennemis frappent d'abord la Garde, puis les bloqueurs et les bêtes, puis le héros. La Garde s'effrite de moitié à chaque tour. Attention aux ennemis qui volent par-dessus (➶), enfoncent au bélier (⚒) ou piétinent (⚔⚔).</p>
<p class="petit">· Une carte de zone se gagne à chaque palier réussi à la Pierre d'éveil de sa zone. Ni les combats ni l'activation n'en donnent.</p>
<p class="petit">· Toutes vos copies suivent le niveau actuel de leur zone : si la zone passe de +2 à +3, vos cartes se renforcent ; si elle passe du côté −, elles deviennent la carte de l'autre pôle.</p>
<p class="petit">· En combat, la capacité de dépense monte de 1 par tour (1, 2, 3…), tous types confondus. Une carte de zone se paie avec le mana de sa zone ; les cartes communes en mana gris, infini. Sans assez du bon mana, une carte de zone se joue en gris : effet −25 %, pas de contre-pouvoir.</p>
<p class="petit">· Contre-pouvoir : jouée contre les gardiens de la zone qu'elle contre, une carte de zone voit son effet doublé.</p>`,
  opts:[{l:'Retour au Grimoire',ic:'◆',go:()=>openGrimoire(0)}]})}
function grimoireCommunes(){const ks=(typeof DEPART!=='undefined'?DEPART:Object.keys(CK).filter(k=>!CK[k].z&&!CK[k].secret)).filter(k=>CK[k]);
  ui('menu',{sur:'Grimoire',t:'Cartes communes',back:()=>openGrimoire(1),
    corps:`<div class="cartes">${ks.map(k=>carteHTML(k)).join('')}</div><p class="petit" style="margin-top:1em">Payées en mana gris. Paquet de départ : 5 communes toutes différentes, chacune avec un petit combo.</p>`,
    opts:[{l:'Retour au Grimoire',ic:'◆',go:()=>openGrimoire(1)}]})}
/* 17 nov. : une Ressource ne donne pas de carte ; elle donne du mana et, au niveau 3, un atout greffé par ses routes */
function grimoireRessource(Z,fi){const id=Z.id,I=Z.info,t=ZMANA[id],L=(typeof ATOUTS!=='undefined'&&ATOUTS[t])||[];
  ui('menu',{sur:`Grimoire · ${I.sur.split(' · ')[0]}`,t:I.nom,back:()=>openGrimoire(fi),
    corps:`<p class="petit">Ressource de mana ${t} : pas de carte. Niveau 1 : 1 mana ${t} ; niveau 2 : 2 mana et des routes ; niveau 3 : 2 mana et un atout au choix, greffé sur les cartes des tuiles reliées par route. Zone au niveau ${Math.abs(S.lv[id]||0)}${S.act[id]?'':', pas encore activée'}.</p>`+
      L.map((a,i)=>`<p class="petit">${S.atout&&S.atout[id]===i?'✓ ':''}<b>${a[0]}</b> : ${a[1]}</p>`).join(''),
    opts:[{l:'Voyager vers cette zone',ic:'✧',go:()=>{tp(id);toMonde()}},{l:'Retour au Grimoire',ic:'◆',go:()=>openGrimoire(fi)}]})}
function grimoireZone(Z,fi){if(estRes(Z))return grimoireRessource(Z,fi);const id=Z.id,I=Z.info,lv=S.lv[id]||0,L=Math.abs(lv),c=CK[id];if(!c)return;
  const res=estRes(Z),txt=(l)=>avecNiveau(id,l,()=>`<b>${c.nom()}</b> (coût ${c.cout}) : ${c.txt(id)}`);
  let cartes,lignes;
  if(res){const n=Math.max(1,Math.min(3,L));cartes=avecNiveau(id,n,()=>carteHTML(id));
    lignes=[1,2,3].map(l=>`<p class="petit">Niveau ${l}${l===n&&L?' (actuel)':''} · ${txt(l)}</p>`).join('')}
  else{const n=Math.max(1,L);cartes=avecNiveau(id,-n,()=>carteHTML(id))+avecNiveau(id,n,()=>carteHTML(id));
    lignes=[...new Set([n,4,7])].sort((a,b)=>a-b).map(l=>`<p class="petit">Palier ${l}${l===L?' (actuel)':''} · − ${txt(-l)}<br>Palier ${l} · + ${txt(l)}</p>`).join('')}
  const ou=`<p class="petit">Où : Pierre d'éveil de cette zone (${TYPE[id].ep}), une copie à chaque palier réussi. Mana ${ZMANA[id]}. Zone au niveau ${sgn(lv)||'0'}${S.act[id]?'':', pas encore activée'} · ${nbPaquet(id)} copie(s) dans votre paquet.</p>`;
  ui('menu',{sur:`Grimoire · ${I.sur.split(' · ')[0]}`,t:I.nom,back:()=>openGrimoire(fi),
    corps:`${ou}<div class="cartes grim">${cartes}</div>${res?'':`<p class="petit" style="margin-top:.6em">À gauche le pôle ${I.pm} (−), à droite le pôle ${I.pp} (+).</p>`}${lignes}`,
    opts:[{l:'Voyager vers cette zone',ic:'✧',go:()=>{tp(id);toMonde()}},{l:'Retour au Grimoire',ic:'◆',go:()=>openGrimoire(fi)}]})}
