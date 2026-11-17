/* MozaWorld TV 2.2 : moteur des cartes écrites par les quatre conteurs (données dans cartes-donnees.js).
   Chaque carte est une liste d'opérations (« ops ») ; les nombres [a,b] valent a + b × L, L = écart à zéro de la zone.
   Règles : /mnt/project-files/cartes-2.2/regles-avancees.md ; méthode pour une nouvelle tuile : consignes-cartes.md. */
const RESONANCES=['Braise','Givre','Sang','Racine','Sceau','Abîme'];
const val=(v,L)=>Array.isArray(v)?v[0]+(v[1]||0)*L:(+v||0);
function cibles(qui,t){if(qui==='tous')return vivants(CB.foes);if(qui==='hasard'){const v=vivants(CB.foes);return v.length?[v[Math.floor(Math.random()*v.length)]]:[]}
  return t&&t.pv>0?[t]:vivants(CB.foes).slice(0,1)}
function alliesDe(qui){return qui==='allies'||qui==='tous'?CB.allies.filter(u=>u.pv>0):[CB.hero]}
/* exécute une liste d'ops ; ctx : {L, x (multiplicateur), t (cible), ig (ignore la garde), vv (vol de vie), k (clé de carte)} */
function execOps(ops,ctx){ops=ops||[];if(ops.some(o=>o[0]==='ignoreGarde'))ctx.ig=true;if(ops.some(o=>o[0]==='volVie'))ctx.vv=true;for(const o of ops)execOp(o,ctx)}
function execOp(o,c){const L=c.L,x=c.x,n=v=>Math.max(0,Math.round(val(v,L)*x)),op=o[0];
  switch(op){
    case'deg':{const qui=o[1]||'cible',coups=qui==='hasard'?Math.max(1,val(o[3]||1,L)):1;
      for(let i=0;i<coups;i++)for(const m of cibles(qui,c.t)){if(c.ig)m.g=0;const d=frappe(m,n(o[2]))||0;if(c.vv&&d>0)soigner(CB.hero,Math.ceil(d/2))}break}
    case'garde':for(const u of alliesDe(o[1]))garder(u,n(o[2]));break;
    case'soin':for(const u of alliesDe(o[1]))soigner(u,n(o[2]));break;
    case'pioche':pioche(Math.max(1,Math.round(val(o[1],L))));break;
    case'hesite':{const q=o[1];if(q==='tous')tous().forEach(hesite);else if(typeof q==='number')tous().slice(0,q).forEach(hesite);else cibles('cible',c.t).forEach(hesite);break}
    case'affaiblit':for(const m of cibles(o[1],c.t)){m.atk=Math.max(1,m.atk-Math.max(1,Math.round(val(o[2],L))));pop(m,'affaibli','g')}break;
    case'briseGarde':for(const m of cibles(o[1],c.t)){m.g=0;pop(m,'garde brisée','g')}break;
    case'ignoreGarde':c.ig=true;break;
    case'volVie':c.vv=true;break;
    case'invoque':invoquer(bete2(o[1],n(o[2]),n(o[3])));break;
    case'brulure':for(const m of cibles(o[1],c.t)){(m.br=m.br||[]).push([n(o[2]),Math.max(1,Math.round(val(o[3]||2,L)))]);pop(m,'brûle','deg')}break;
    case'vulnerable':for(const m of cibles(o[1],c.t)){m.vul=(m.vul||0)+Math.max(1,Math.round(val(o[2],L)));pop(m,'marqué','deg')}break;
    case'riposte':CB.riposte=(CB.riposte||0)+n(o[1]);pop(CB.hero,'riposte '+CB.riposte,'g');break;
    case'echo':CB.echo=true;journal('Écho : la prochaine carte de zone de ce tour comptera double.');break;
    case'recup':{const d=CB.defausse,i=d.length-2;if(i>=0&&CB.main.length<8){CB.main.push(d.splice(i,1)[0])}break}
    case'mana':if(typeof gagner==='function')gagner(o[1]==='zone'?ZMANA[c.z]:o[1],Math.max(1,Math.round(val(o[2],L))));break;
    case'boost':CB.mana++;CB.capT++;break;
    case'exil':c.exil=true;break;
    case'pose':(CB.reso=CB.reso||{})[o[1]]=((CB.reso||{})[o[1]]||0)+1;journal(`Résonance posée : ${o[1]}.`);break;
    case'reveil':if(CB.reso&&CB.reso[o[1]]>0){if(o[2])CB.reso[o[1]]--;journal(`${o[1]} se réveille !`);execOps(o[3],c)}break;
    case'si':if(condition(o[1],c))execOps(o[2],c);break;
    case'prixPV':perdPV(Math.round(val(o[1],L)));break;
    case'prixDefausse':for(let i=0;i<val(o[1],L)&&CB.main.length;i++){const j=Math.floor(Math.random()*CB.main.length);CB.defausse.push(CB.main.splice(j,1)[0])}break;
    case'prixBete':{const b=CB.allies.filter(u=>u.bete&&u.pv>0).sort((p,q)=>p.pv-q.pv)[0];if(b)frappe(b,Math.round(val(o[1],L)),CB.hero);break}
    case'ennemiGarde':tous().forEach(m=>{m.g+=Math.round(val(o[1],L));pop(m,'+garde','g')});break;
    case'ennemiSoin':tous().forEach(m=>soigner(m,Math.round(val(o[1],L))));break;
  }}
function condition(q,c){const t=c.t;switch(q){
  case'bete':return CB.allies.some(u=>u.bete&&u.pv>0);
  case'blesse':return CB.hero.pv*2<CB.hero.max;
  case'seul':return vivants(CB.foes).length===1;
  case'hesite':return!!(t&&t.int&&t.int.a==='h');
  case'garde':return CB.hero.g>0;
  default:return!!(CB.reso&&CB.reso[q]>0)}}
/* texte joueur : « (a+bL) » ou « a+bL » devient le nombre du palier, multiplié par le contre-pouvoir */
function texteCarte(t,L,x){return String(t||'').replace(/\(?(\d+)\s*\+\s*(\d*)\s*[L×]\s*\)?/g,(m,a,b)=>String((+a+(b===''?1:+b)*L)*x))
  .replace(/\((\d+)\s*[×x]\s*L\)/g,(m,b)=>String(+b*L*x)).replace(/(^|[\s(])L(?=[\s.,;)]|$)/g,(m,p)=>p+L*x)}
/* fabrique une entrée de CK à partir d'une carte de données ; side() choisit la variante selon le pôle et le palier */
function carteCK(id,choix,niv){const L=()=>Math.max(1,niv());const cur=()=>choix();
  return{z:id,nom:()=>cur().nom,get cout(){return cur().cout},get cible(){return cur().cible?1:0},amb:()=>cur().ambiance||'',
    get ultime(){return Math.abs(S.lv[id]||0)>=7&&!!cur().p7},
    get pose(){const p=(cur().ops||[]).find(o=>o[0]==='pose');return p?p[1]:null},
    get reveille(){const p=(cur().ops||[]).find(o=>o[0]==='reveil');return p?p[1]:null},
    txt:k=>texteCarte(cur().effet,L(),contreX(k)),jeu:(k,t)=>{const dbl=CB.echo&&!(cur().ops||[]).some(o=>o[0]==='echo');if(dbl){CB.echo=false;journal('Écho : effet doublé.')}
      const ctx={L:L(),x:contreX(k)*(dbl?2:1),t,z:id,k};execOps(cur().ops,ctx);if(ctx.exil){const i=CB.defausse.lastIndexOf(k);if(i>=0)CB.defausse.splice(i,1);(CB.exil=CB.exil||[]).push(k)}}}}
function installerCartes22(){if(typeof CARTES22==='undefined')return;
  /* « chaque palier donne une carte » : P.m1…P.m6 et P.p1…P.p6 si les conteurs les ont écrites, sinon la carte du pôle (P.m, P.p) qui grandit avec L */
  const parPalier=(P,s,n)=>n>=7&&P[s+'7']?Object.assign({p7:1},P[s+'7']):(P[s+n]||P[s]);
  for(const id in CARTES22.zones){const P=CARTES22.zones[id];if(!ZB[id])continue;
    const choix=()=>{const lv=S.lv[id]||0;return parPalier(P,lv<0?'m':'p',Math.max(1,Math.min(7,Math.abs(lv))))};
    CK[id]=carteCK(id,choix,()=>Lz(id));CK[id].poles=[P.m||P.m1,P.p||P.p1];
    for(const s of['m','p'])for(let n=1;n<=7;n++){const c=parPalier(P,s,n);if(c)CK[id+'#'+(s==='m'?'-':'+')+n]=carteCK(id,()=>c,()=>n)}}
  for(const id in CARTES22.gerbes){if(!ZB[id])continue;const G=CARTES22.gerbes[id],g=n=>G['n'+n]||G;
    CK[id]=carteCK(id,()=>g(Math.max(1,Math.min(3,Lz(id)))),()=>Math.min(3,Lz(id)));
    for(let n=1;n<=3;n++)CK[id+'#r'+n]=carteCK(id,()=>g(n),()=>n)}
  /* secrets : une carte utilitaire par secret, clé « S<numéro> », payée en gris */
  secrets.forEach((q,i)=>{const d=CARTES22.secrets[q.titre];if(!d)return;const k='S'+i;
    CK[k]={nom:()=>d.nom,cout:d.cout,cible:d.cible?1:0,secret:q.titre,zs:q.Z.id,ultime:false,pose:null,reveille:null,amb:()=>d.ambiance||'',txt:()=>texteCarte(d.effet,1,1),
      jeu:(kk,t)=>{const ctx={L:1,x:1,t,k:kk};execOps(d.ops,ctx);if(ctx.exil){const j=CB.defausse.lastIndexOf(kk);if(j>=0)CB.defausse.splice(j,1)}}};
    if(typeof ART!=='undefined')ART[k]=ART.souffle||ART.coup})}
/* un secret trouvé ajoute sa carte au paquet de combat */
function carteDeSecret(q){const i=secrets.indexOf(q),k='S'+i;if(!CK[k])return'';if(S.deck.indexOf(k)<0&&S.deck.length<PAQUET_MAX)S.deck.push(k);return CK[k].nom()}
/* une carte de palier n'est éveillée que si sa zone est sur ce pôle, à ce palier ou au-delà ; sinon elle dort hors du paquet de combat */
function eveillee(k){const i=k.indexOf('#');if(i<0)return true;const id=k.slice(0,i),s=k[i+1],n=+k.slice(i+2),lv=S.lv[id]||0;
  return s==='r'?Math.abs(lv)>=n:(s==='-'?lv<=-n:lv>=n)}
function clePalier(Z,lv){const k=Z.id+'#'+((Z.mod||Z.id)==='RES'?'r':lv<0?'-':'+')+Math.abs(lv);return CK[k]?k:Z.id}
