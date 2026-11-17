/* MozaWorld TV : visuel des cartes 2.2 (17 nov., demande de l'utilisateur : « c'est bien mais il faut plus de personnalisation »).
   Chaque carte de zone se compose à partir de ses données, sans aucune image à télécharger :
   - la ZONE donne la scène (biome, emblème du type, graine propre à la tuile) et le bandeau de sa culture ;
   - le PÔLE change l'état de la scène (pôle − : gravure nocturne ; pôle + : émail de plein jour), le blason et son glyphe ;
   - le PALIER s'affiche en losanges et enrichit le cadre (filet double dès 3, ornements lumineux dès 5) ;
   - le MANA donne la matière du cadre (coins de flamme, d'éclats de glace, de vagues, de feuilles, de pierre ou de vent) ;
   - la forme ULTIME (±7) a son propre cadre animé et ses glyphes de résonance (pose, réveille) ;
   - les cartes de SECRET sont sur parchemin, dessinées à l'encre, avec le sceau de leur zone d'origine.
   Les cartes communes restent sobres. Ce fichier redéfinit artCarte() et carteHTML() d'habillage.js, et ajoute son propre CSS.
   Données lues sur CK[k] si elles existent : ultime, pose, reveille, amb(), secret, zs (fil « Écrire les cartes de chaque pôle »). */
(function(){
const VMANA={Feu:['#b5482a','#f0a060','#3a1a12'],Glace:['#6f9bb0','#e4f1f4','#1d2c38'],Eau:['#1f5f8e','#5fd0c8','#0f2340'],
  'Sève':['#4f7f3a','#d9b22e','#1f3a1c'],Pierre:['#7a6450','#c99a5a','#2a2420'],Vent:['#5b7896','#e2d8c0','#28323e']};
/* accents de pôle par zone [−, +] et culture des zones d'origine (brief de direction artistique) ; les autres zones dérivent leurs accents du mana */
const ZACC={CIT:['#b9b4e0','#c2412f'],DON:['#3f9e7a','#ff9a3c'],ANT:['#c8f25a','#ff9f86'],MAR:['#b9b3d6','#2fb7d6'],RES:['#5cc6c0','#5cc6c0'],
  DON045:['#7b5fb0','#f2c94c'],DON024:['#2a8a8a','#2f56b0'],ASS152:['#d9c7a0','#ff7a2a'],ASS155:['#c07a5a','#5fd0c0'],ANT120:['#9fd3e6','#e8562a'],
  ASS012:['#e07a3a','#7ac25a'],ASS006:['#8a2f6a','#4f7aa0'],ASS150:['#b08a4a','#3a8fd0'],RES227:['#d23a1f','#d23a1f'],RES079:['#c99a5a','#c99a5a'],
  RES374:['#9fd3e6','#9fd3e6'],RES122:['#2fb0b0','#2fb0b0'],RES021:['#d9b22e','#d9b22e'],RES212:['#c9b56a','#c9b56a'],RES345:['#e08a3a','#e08a3a'],RES136:['#3a7a9a','#3a7a9a']};
const ZCULT={DON:'chinoise impériale'};
const hsh=s=>{let h=2166136261;for(const c of String(s))h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
const rng=s=>{let a=hsh(s)||1;return()=>{a^=a<<13;a>>>=0;a^=a>>17;a^=a<<5;a>>>=0;return a/4294967296}};
const f1=n=>n.toFixed(1);
const mix=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return'#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')};
const sansAcc=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();

/* ---------- Lecture d'une zone : type, biome, culture, mana, pôles, niveau ---------- */
function infoZone(id){const Z=typeof ZB!=='undefined'?ZB[id]:null;if(!Z)return null;
  const I=Z.info||{},d=Z.d||{},sur=(I.sur||'').split(' · ');
  const biome=d.biome||sur[2]||'',cult=ZCULT[id]||d.culture||(sur[3]||'').replace(/^Inspiration /,'');
  const lv=(S.lv&&S.lv[id])||0;
  return{id,mod:Z.mod||id,nom:I.nom||id,biome,cult,mana:(typeof ZMANA!=='undefined'&&ZMANA[id])||'Pierre',pm:I.pm,pp:I.pp,lv,L:Math.abs(lv),pole:lv<0?'neg':lv>0?'pos':'zero'}}
const BIOMES=[['bor','foret'],['fjord','fjord'],['canyon','canyon'],['sable','dunes'],['desert','dunes'],['ruine','ruines'],['oasis','oasis'],['recif','recif'],
  ['cavern','cavernes'],['lande','lande'],['delta','delta'],['steppe','steppe'],['falaise','falaise'],['volcan','volcan'],['iles','iles'],['flottan','iles'],
  ['mangrove','mangrove'],['glacier','glacier'],['foret','foret'],['marais','mangrove'],['montagne','glacier'],['toundra','steppe'],['jungle','oasis']];
const bkey=b=>{b=sansAcc(b);for(const [m,k] of BIOMES)if(b.includes(m))return k;return'collines'};
const CULT=[['slave','slave'],['egypt','egypte'],['nord','nordique'],['zoulou','zoulou'],['ethiop','ethiopie'],['aztec','azteque'],['maya','maya'],
  ['venit','venise'],['inca','inca'],['khmer','khmer'],['chinois','chine'],['byzant','byzance'],['gothi','gothique']];
const ckey=c=>{c=sansAcc(c);for(const [m,k] of CULT)if(c.includes(m))return k;return'girih'};

/* ---------- Ciel : même luminosité aux deux pôles (règle d'équité du brief) ; seule la teinte d'accent et l'astre changent ---------- */
function ciel(P,r,uid){const a=P.acc,m=P.m[0];
  const astre=P.pole==='neg'?`<circle cx="${f1(20+r()*120)}" cy="22" r="10" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2"/><circle cx="${f1(20+r()*120)}" cy="22" r="4" fill="#fff" opacity="0"/>`
    :`<circle cx="${f1(25+r()*110)}" cy="${P.pole==='zero'?60:22}" r="26" fill="url(#vs${uid})"/>`;
  return`<defs><linearGradient id="vc${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${mix(a,'#ffffff',.5)}"/><stop offset=".65" stop-color="${mix(a,m,.35)}"/><stop offset="1" stop-color="${mix(m,a,.3)}"/></linearGradient>
    <radialGradient id="vs${uid}"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${mix(a,'#ffffff',.6)}" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
    <rect width="160" height="100" fill="url(#vc${uid})"/>${astre}`}

/* ---------- Décors par biome : plan lointain (loin) et premier plan (pres). c = {loin, mi, pres, acc, eau} ---------- */
const tri=(x,y,w,h,f)=>`<path d="M${f1(x)} ${f1(y)} L${f1(x+w/2)} ${f1(y-h)} L${f1(x+w)} ${f1(y)}Z" fill="${f}"/>`;
const sapin=(x,y,s,f)=>`<path d="M${f1(x)} ${f1(y-s*2.6)} L${f1(x-s*.9)} ${f1(y-s*1.2)} L${f1(x-s*.4)} ${f1(y-s*1.3)} L${f1(x-s*1.2)} ${f1(y)} L${f1(x+s*1.2)} ${f1(y)} L${f1(x+s*.4)} ${f1(y-s*1.3)} L${f1(x+s*.9)} ${f1(y-s*1.2)}Z" fill="${f}"/>`;
const vague=(y,a,f,ph)=>{let d=`M0 ${f1(y)}`;for(let x=0;x<=160;x+=10)d+=` Q${x+5} ${f1(y+Math.sin((x+ph)*.09)*a-a)} ${x+10} ${f1(y)}`;return`<path d="${d} L160 100 L0 100Z" fill="${f}"/>`};
const BIO={
foret:{loin:(r,c)=>Array.from({length:14},(_,i)=>sapin(i*12+r()*6,70+r()*4,4+r()*2,c.loin)).join(''),
       pres:(r,c)=>vague(84,2,c.pres,r()*50)+sapin(8+r()*10,96,7,c.pres)+sapin(146-r()*10,97,8,c.pres)},
fjord:{loin:(r,c)=>`<path d="M0 30 L18 40 L30 74 L0 80Z" fill="${c.loin}"/><path d="M160 26 L138 44 L128 74 L160 80Z" fill="${c.loin}"/><path d="M40 60 L60 46 L80 58 L100 44 L120 62 L120 76 L40 76Z" fill="${c.mi}" opacity=".6"/>`,
       pres:(r,c)=>`<rect x="0" y="74" width="160" height="26" fill="${c.eau}"/>${[0,1,2,3,4].map(i=>`<path d="M${20+i*28} ${82+i%2*6} h14" stroke="${c.acc}" stroke-opacity=".5"/>`).join('')}<path d="M0 100 L0 70 L22 76 L14 100Z" fill="${c.pres}"/><path d="M160 100 L160 66 L136 78 L148 100Z" fill="${c.pres}"/>`},
canyon:{loin:(r,c)=>`<path d="M0 72 L0 46 L22 46 L26 54 L50 54 L54 40 L78 40 L80 72Z" fill="${c.loin}"/><path d="M96 72 L100 36 L132 36 L136 50 L160 50 L160 72Z" fill="${c.loin}"/>${[50,58,66].map(y=>`<path d="M0 ${y} H160" stroke="${c.acc}" stroke-opacity=".18"/>`).join('')}`,
       pres:(r,c)=>`<path d="M0 100 L0 70 Q40 66 70 80 Q100 92 160 74 L160 100Z" fill="${c.pres}"/><path d="M60 100 Q78 84 96 100Z" fill="${c.eau}" opacity=".7"/>`},
dunes:{loin:(r,c)=>vague(66,5,c.loin,r()*80),pres:(r,c)=>`<path d="M0 100 L0 80 Q50 62 96 82 Q130 96 160 78 L160 100Z" fill="${c.pres}"/><path d="M0 80 Q50 62 96 82" stroke="${c.acc}" stroke-opacity=".55" fill="none"/>`},
ruines:{loin:(r,c)=>{const x=30+r()*80;return`<path d="M${f1(x)} 72 h48 v-8 h-6 v-8 h-6 v-8 h-6 v-6 h-12 v6 h-6 v8 h-6 v8 h-6Z" fill="${c.loin}"/>`},
        pres:(r,c)=>vague(84,1.5,c.pres,0)+[14,30,128,142].map((x,i)=>`<rect x="${x}" y="${66+i%2*8}" width="7" height="${30-i%2*8}" fill="${c.pres}"/><path d="M${x-2} ${66+i%2*8} h11 l-2 -3 h-7Z" fill="${c.pres}"/>`).join('')},
oasis:{loin:(r,c)=>vague(70,3,c.loin,r()*60),
       pres:(r,c)=>`<ellipse cx="80" cy="88" rx="44" ry="7" fill="${c.eau}"/><ellipse cx="80" cy="87" rx="30" ry="2.5" fill="${c.acc}" opacity=".35"/>${[[24,1],[140,-1],[36,1]].map(([x,s])=>`<path d="M${x} 96 Q${x+s*4} 76 ${x+s*2} 58" stroke="${c.pres}" stroke-width="3" fill="none"/>${[-60,-20,20,60,100].map(a=>`<path d="M${x+s*2} 58 q${f1(Math.cos(a*PI/180)*10)} ${f1(-6+Math.abs(a)/12)} ${f1(Math.cos(a*PI/180)*16)} ${f1(4+Math.abs(a)/10)}" stroke="${c.pres}" stroke-width="2.4" fill="none"/>`).join('')}`).join('')}`},
recif:{loin:(r,c)=>`<rect x="0" y="40" width="160" height="60" fill="${c.eau}" opacity=".55"/>${Array.from({length:6},(_,i)=>`<path d="M0 ${48+i*8} Q80 ${44+i*8} 160 ${48+i*8}" stroke="${c.acc}" stroke-opacity=".15" fill="none"/>`).join('')}`,
       pres:(r,c)=>Array.from({length:7},(_,i)=>{const x=8+i*24+r()*8,h=14+r()*16;return`<path d="M${f1(x)} 100 L${f1(x)} ${f1(100-h)} M${f1(x)} ${f1(100-h*.5)} L${f1(x-6)} ${f1(100-h*.8)} M${f1(x)} ${f1(100-h*.65)} L${f1(x+7)} ${f1(100-h)}" stroke="${i%2?c.acc:c.pres}" stroke-width="3" stroke-linecap="round"/>`}).join('')},
cavernes:{loin:(r,c)=>`<path d="M0 0 H160 V18 ${Array.from({length:12},(_,i)=>`L${i*14+7} ${f1(26+r()*16)} L${i*14+14} 18`).join(' ')} L160 18 V0Z" fill="${c.pres}"/>`,
          pres:(r,c)=>`<path d="M0 100 L0 84 Q80 76 160 84 L160 100Z" fill="${c.pres}"/>${Array.from({length:6},(_,i)=>{const x=10+i*28+r()*8,h=10+r()*14;return`<path d="M${f1(x)} 88 L${f1(x+3)} ${f1(88-h)} L${f1(x+7)} 88Z" fill="${c.acc}" opacity=".85"/><path d="M${f1(x+3)} ${f1(88-h)} L${f1(x+7)} 88" stroke="#fff" stroke-opacity=".4"/>`}).join('')}`},
lande:{loin:(r,c)=>vague(70,4,c.loin,r()*90),
       pres:(r,c)=>`<path d="M0 100 L0 82 Q80 74 160 84 L160 100Z" fill="${c.pres}"/>${[[22,14],[34,18],[132,16]].map(([x,h])=>`<path d="M${x} 86 L${x+1} ${86-h} L${x+6} ${86-h-1} L${x+7} 86Z" fill="${c.mi}"/>`).join('')}${Array.from({length:18},()=>`<path d="M${f1(r()*160)} ${f1(88+r()*10)} l-2 -4 m2 4 l2 -4" stroke="${c.acc}" stroke-opacity=".5"/>`).join('')}`},
delta:{loin:(r,c)=>vague(68,2,c.loin,r()*40),
       pres:(r,c)=>`<rect x="0" y="72" width="160" height="28" fill="${c.pres}"/>${[0,1,2].map(i=>`<path d="M${50+i*20} 72 Q${30+i*40} 86 ${i*70} 100" stroke="${c.eau}" stroke-width="${5-i}" fill="none"/>`).join('')}${Array.from({length:10},()=>`<path d="M${f1(r()*160)} ${f1(76+r()*20)} v-6" stroke="${c.acc}" stroke-opacity=".6"/>`).join('')}`},
steppe:{loin:(r,c)=>`<path d="M0 72 Q60 68 100 70 Q130 72 160 70 L160 74 L0 74Z" fill="${c.loin}"/><path d="M${f1(110+r()*30)} 72 q8 -9 16 0Z" fill="${c.loin}"/>`,
        pres:(r,c)=>`<rect x="0" y="74" width="160" height="26" fill="${c.pres}"/>${Array.from({length:30},()=>{const x=r()*160,y=78+r()*22;return`<path d="M${f1(x)} ${f1(y)} q1 -6 4 -8 M${f1(x)} ${f1(y)} q-1 -5 -3 -6" stroke="${c.acc}" stroke-opacity=".55" fill="none"/>`}).join('')}`},
falaise:{loin:(r,c)=>`<rect x="0" y="62" width="160" height="38" fill="${c.eau}"/>${[0,1,2].map(i=>`<path d="M0 ${70+i*9} Q40 ${67+i*9} 80 ${70+i*9} T160 ${70+i*9}" stroke="${c.acc}" stroke-opacity=".3" fill="none"/>`).join('')}`,
          pres:(r,c)=>`<path d="M104 100 L110 40 L124 34 L160 30 L160 100Z" fill="${c.pres}"/><path d="M110 40 L124 34 L160 30" stroke="${c.acc}" stroke-opacity=".5" fill="none"/>${[0,1,2].map(i=>`<path d="M${30+i*14} ${30+i*5} q3 -3 6 0 q3 -3 6 0" stroke="${c.acc}" fill="none"/>`).join('')}`},
volcan:{loin:(r,c)=>`<path d="M20 74 L66 26 L78 30 L94 26 L140 74Z" fill="${c.loin}"/><path d="M66 26 L78 30 L94 26 L86 40 L76 34Z" fill="${c.acc}" opacity=".8"/>`,
        pres:(r,c)=>`<path d="M0 100 L0 82 Q80 72 160 82 L160 100Z" fill="${c.pres}"/><path d="M40 100 Q60 86 80 92 Q100 98 120 88" stroke="${c.acc}" stroke-width="2.5" fill="none" opacity=".85"/>`},
iles:{loin:(r,c)=>[[30,44,18],[122,38,14]].map(([x,y,w])=>`<path d="M${x-w} ${y} h${2*w} l-${w*.6} 10 h-${w*.8}Z" fill="${c.loin}"/>`).join(''),
      pres:(r,c)=>`<rect x="0" y="80" width="160" height="20" fill="${c.eau}"/><path d="M14 80 h40 l-8 12 h-24Z" fill="${c.pres}"/><path d="M108 82 h44 l-10 10 h-26Z" fill="${c.pres}"/>${[20,30,40,116,128,140].map(x=>`<path d="M${x} 80 v-8" stroke="${c.acc}" stroke-width="1.5"/>`).join('')}`},
mangrove:{loin:(r,c)=>Array.from({length:5},(_,i)=>`<circle cx="${i*38+r()*10}" cy="${48+r()*8}" r="${16+r()*6}" fill="${c.loin}"/>`).join(''),
          pres:(r,c)=>`<rect x="0" y="80" width="160" height="20" fill="${c.eau}"/>${[18,140].map(x=>`<path d="M${x} 50 v26 M${x} 64 q-10 6 -12 18 M${x} 64 q10 6 12 18 M${x} 70 q-4 6 -4 12 M${x} 70 q5 6 5 12" stroke="${c.pres}" stroke-width="2.4" fill="none"/>`).join('')}`},
glacier:{loin:(r,c)=>`<path d="M0 74 L18 40 L30 52 L48 24 L64 50 L84 32 L104 56 L122 28 L140 48 L160 36 L160 74Z" fill="${c.loin}"/><path d="M48 24 L54 38 L42 36Z M122 28 L128 42 L116 40Z" fill="#fff" opacity=".6"/>`,
          pres:(r,c)=>`<path d="M0 100 L0 80 L40 76 L90 82 L160 76 L160 100Z" fill="${c.pres}"/><path d="M40 76 L50 90 M90 82 L96 96" stroke="${c.acc}" stroke-opacity=".5"/>`},
collines:{loin:(r,c)=>vague(66,6,c.loin,r()*90),pres:(r,c)=>vague(84,3,c.pres,r()*90)}};

/* ---------- Monument de la culture : le sujet de la scène (base y = 82) ---------- */
const MON_C={
slave:c=>`${[-16,0,16].map((x,i)=>`<rect x="${x-5}" y="${44+i%2*8}" width="10" height="${38-i%2*8}" fill="${c.embL}"/>${[0,1,2,3].map(j=>`<path d="M${x-4} ${50+i%2*8+j*7} h4" stroke="${c.emb}" stroke-width="1.4"/>`).join('')}<path d="M${x-7} ${46+i%2*8} Q${x-8} ${34+i%2*8} ${x} ${28+i%2*8} Q${x+8} ${34+i%2*8} ${x+7} ${46+i%2*8}Z" fill="${c.emb}"/>`).join('')}<path d="M-30 82 V70 h60 V82Z" fill="${c.emb}"/>`,
egypte:c=>`<path d="M-34 82 L-30 44 H-12 L-8 82Z M8 82 L12 44 H30 L34 82Z" fill="${c.emb}"/><path d="M-8 82 V56 H8 V82Z" fill="${c.mid}"/><path d="M-3 82 V30 L0 24 L3 30 V82Z" fill="${c.embL}"/><path d="M-28 50 h14 M14 50 h14" stroke="${c.embL}" stroke-width="1.4"/>`,
nordique:c=>`<path d="M-32 82 V62 L0 46 L32 62 V82Z" fill="${c.emb}"/><path d="M-6 50 L-12 40 M6 50 L12 40" stroke="${c.emb}" stroke-width="3"/><path d="M-6 82 V68 H6 V82Z" fill="${c.feu}" opacity=".8"/><path d="M38 82 V58 Q42 52 46 58 V82Z" fill="${c.embL}"/><path d="M40 64 q2 4 4 0 M40 72 q2 -4 4 0" stroke="${c.emb}" fill="none"/>`,
zoulou:c=>[[-20,14],[4,18],[26,12]].map(([x,r])=>`<path d="M${x-r} 82 Q${x-r} ${82-r*1.6} ${x} ${82-r*1.7} Q${x+r} ${82-r*1.6} ${x+r} 82Z" fill="${c.emb}"/>${[.4,.8,1.2].map(k=>`<path d="M${f1(x-r*.92)} ${f1(82-r*k)} Q${x} ${f1(82-r*k-3)} ${f1(x+r*.92)} ${f1(82-r*k)}" stroke="${c.embL}" stroke-opacity=".7" fill="none"/>`).join('')}`).join(''),
ethiopie:c=>`<path d="M-30 82 L-24 66 H24 L30 82Z" fill="${c.mid}"/><path d="M-6 82 V46 H-20 V34 H-6 V22 H6 V34 H20 V46 H6 V82Z" fill="${c.embL}"/><path d="M-6 46 H6 M0 30 v40" stroke="${c.emb}" stroke-width="1.4"/>`,
azteque:c=>`<path d="M-36 82 h72 v-8 h-6 v-8 h-6 v-8 h-6 v-8 h-36 v8 h-6 v8 h-6 v8 h-6Z" fill="${c.emb}"/><path d="M-10 50 h20 v-12 h-20Z" fill="${c.embL}"/><path d="M-4 82 V54 H4 V82Z" fill="${c.embL}" opacity=".6"/>`,
maya:c=>`<rect x="-9" y="30" width="18" height="52" rx="3" fill="${c.embL}"/>${[38,50,62].map(y=>`<rect x="-6" y="${y}" width="12" height="9" rx="4" fill="none" stroke="${c.emb}" stroke-width="1.4"/><circle cx="0" cy="${y+4.5}" r="1.4" fill="${c.emb}"/>`).join('')}<path d="M18 82 h26 v-6 h-4 v-6 h-4 v-6 h-10 v6 h-4 v6 h-4Z" fill="${c.emb}"/>`,
venise:c=>`<rect x="-34" y="44" width="68" height="38" fill="${c.embL}"/>${[-22,0,22].map(x=>`<path d="M${x-8} 82 V60 Q${x-8} 54 ${x-4} 54 Q${x} 48 ${x+4} 54 Q${x+8} 54 ${x+8} 60 V82Z" fill="${c.emb}"/>`).join('')}<path d="M-36 44 H36" stroke="${c.emb}" stroke-width="2"/>${[44,50].map(x=>`<path d="M${x} 82 V54" stroke="${c.feu}" stroke-width="3" stroke-dasharray="4 4"/>`).join('')}`,
inca:c=>`<path d="M-40 82 h80 v-8 h-10 v-8 h-10 v-8 h-40 v8 h-10 v8 h-10Z" fill="${c.emb}"/><path d="M-6 58 L-4 44 H4 L6 58Z" fill="${c.mid}"/><path d="M-20 58 h40 M-30 66 h60 M-40 74 h80" stroke="${c.embL}" stroke-opacity=".6"/>`,
khmer:c=>`<path d="M-16 82 V50 Q-16 24 0 16 Q16 24 16 50 V82Z" fill="${c.emb}"/><path d="M-10 46 q4 -3 8 0 M2 46 q4 -3 8 0" stroke="${c.embL}" stroke-width="2" fill="none"/><path d="M-4 56 q4 3 8 0" stroke="${c.embL}" stroke-width="1.6" fill="none"/><path d="M-24 82 V64 Q-24 54 -18 50 V82Z M24 82 V64 Q24 54 18 50 V82Z" fill="${c.emb}"/>`,
chine:c=>`${[0,1,2,3].map(i=>`<path d="M${-22+i*4} ${76-i*12} Q0 ${70-i*12} ${22-i*4} ${76-i*12} L${16-i*4} ${70-i*12} H${-16+i*4}Z" fill="${c.emb}"/><rect x="${-12+i*3}" y="${70-i*12}" width="${24-i*6}" height="6" fill="${c.embL}"/>`).join('')}<rect x="-14" y="76" width="28" height="6" fill="${c.embL}"/><path d="M0 34 v-8" stroke="${c.emb}" stroke-width="2"/>`,
byzance:c=>`<path d="M-30 82 V60 H30 V82Z" fill="${c.embL}"/><path d="M-14 60 Q0 34 14 60Z M-30 64 Q-22 50 -14 64Z M14 64 Q22 50 30 64Z" fill="${c.emb}"/>${[-24,-12,0,12,24].map(x=>`<path d="M${x} 82 v8" stroke="${c.emb}" stroke-width="2.4"/>`).join('')}<path d="M0 40 v-8 M-3 36 h6" stroke="${c.emb}" stroke-width="1.6"/>`,
gothique:c=>`<path d="M-26 82 V50 L-18 40 L-10 50 V82Z M10 82 V50 L18 40 L26 50 V82Z" fill="${c.emb}"/><path d="M-10 82 V44 L0 14 L10 44 V82Z" fill="${c.embL}"/><path d="M-5 82 V60 Q0 50 5 60 V82Z" fill="${c.feu}" opacity=".8"/><circle cx="0" cy="44" r="4" fill="none" stroke="${c.emb}" stroke-width="1.4"/>`,
girih:c=>`<path d="M0 30 L8 50 L28 56 L8 62 L0 82 L-8 62 L-28 56 L-8 50Z" fill="${c.embL}"/><circle r="5" cx="0" cy="56" fill="${c.emb}"/>`};
const ckeyL=c=>{c=sansAcc(c);for(const [m,k] of CULT)if(c.includes(m))return k;return'girih'};
/* ---------- Petit emblème du type de tuile (coin haut droit de l'image, 10 × 10) ---------- */
const EMBT={CIT:'<path d="M1 10V4h2v2h2V4h2v2h2V4h2v6z"/>',DON:'<rect x="2" y="2" width="8" height="8" fill="none" stroke-width="1.6"/><rect x="4.5" y="4.5" width="3" height="3"/>',
  RES:'<path d="M6 11V3M6 5q-3-1-3-4q3 1 3 4M6 5q3-1 3-4q-3 1-3 4M6 8q-3-1-3-3q3 0 3 3M6 8q3-1 3-3q-3 0-3 3" stroke-width="1" fill="none"/>',
  ANT:'<path d="M1 6q5-5 10 0q-5 5-10 0z"/><circle cx="6" cy="6" r="1.6" fill="#000"/>',MAR:[0,1,2,3,4].map(i=>`<circle cx="${(6+Math.cos(i*1.2566-1.57)*3.6).toFixed(1)}" cy="${(6+Math.sin(i*1.2566-1.57)*3.6).toFixed(1)}" r="1.3"/>`).join('')};
/* ---------- Élément secondaire propre à chaque pôle : le mot du pôle se voit dans la scène ---------- */
function effetPole(w,c,r,L){const k=sansAcc(w||''),n=L>=6?20:L>=4?13:L>=2?7:4,pts=()=>Array.from({length:n},()=>[r()*160,6+r()*70]);
  const sc=(fn)=>pts().map(([x,y])=>fn(f1(x),f1(y))).join('');const A=c.fx;
  const T={oubli:()=>sc((x,y)=>`<circle cx="${x}" cy="${y}" r="2.2" fill="#fff" opacity=".85"/>`)+`<path d="M0 100 L0 86 Q80 70 160 86 L160 100Z" fill="#f4f2fb" opacity=".9"/>`,
    memoire:()=>sc((x,y)=>`<path d="M${x} ${y} l3 -3 l3 3 M${x} ${+y+4} h6" stroke="${A}" stroke-width="1.4" fill="none"/>`),
    tyrannie:()=>[0,1,2].map(i=>[0,1,2].map(j=>`<rect x="${100+j*14}" y="${10+i*12}" width="9" height="9" fill="${A}" stroke="#fff" stroke-opacity=".6"/>`).join('')).join(''),
    liberte:()=>sc((x,y)=>`<path d="M${x} ${y} l5 -2 l-1 5z" fill="${A}"/>`),
    nuit:()=>sc((x,y)=>`<circle cx="${x}" cy="${y}" r="1.6" fill="${A}" filter="url(#mz-lueur)"/><path d="M${x} ${y} q-6 3 -10 -1" stroke="${A}" stroke-opacity=".5" fill="none"/>`),
    aurore:()=>`<path d="M118 82 V36 M118 36 l-3 6 h6z" stroke="${c.emb}" stroke-width="2.4" fill="${c.emb}"/><circle cx="118" cy="40" r="3" fill="${c.emb}"/>`,
    brume:()=>[30,48,64].map((y,i)=>`<rect x="${-10+i*14}" y="${y}" width="150" height="6" rx="3" fill="#fff" opacity=".5"/>`).join(''),
    clarte:()=>`<rect x="110" y="16" width="34" height="22" fill="#24303a" stroke="${A}"/>${[0,1,2,3].map(i=>`<path d="M114 ${21+i*4} h${18+i%2*6}" stroke="#fff" stroke-width="1.2"/>`).join('')}`,
    mensonge:()=>`<g opacity=".7" transform="translate(0 164) scale(1 -1)"><rect x="60" y="66" width="40" height="18" fill="${A}"/></g>`+sc((x,y)=>`<path d="M${x} ${y} q4 -3 8 0 q-1 6 -4 6 q-3 0 -4 -6z" fill="${A}"/>`),
    verite:()=>`<path d="M40 0 L80 100 L120 0Z" fill="#fff" opacity=".22"/><circle cx="80" cy="14" r="5" fill="#fff"/>`,
    cauchemar:()=>`<path d="M20 30 Q30 16 40 30 Q30 40 20 30Z" fill="${A}"/><circle cx="30" cy="30" r="3" fill="#000"/>`+sc((x,y)=>`<path d="M${x} ${y} q3 6 0 12" stroke="${A}" stroke-width="1.6" fill="none"/>`),
    reve:()=>sc((x,y)=>`<path d="M${x} ${+y-3} l1 2.4 2.6 .2 -2 1.6 .7 2.6 -2.3 -1.4 -2.3 1.4 .7 -2.6 -2 -1.6 2.6 -.2z" fill="#e8cf9a"/>`),
    silence:()=>[0,1,2,3,4,5].map(i=>`<path d="M${i*30} 100 L${i*30+40} 40" stroke="#000" stroke-opacity=".12" stroke-width="6"/>`).join(''),
    chant:()=>[14,24,34,44].map(rr=>`<path d="M${80-rr} 82 A${rr} ${rr} 0 0 1 ${80+rr} 82" stroke="${A}" stroke-width="1.8" fill="none" opacity=".8"/>`).join(''),
    pierre:()=>`<rect x="0" y="0" width="160" height="100" fill="url(#mz-girih)" opacity="0"/>`+sc((x,y)=>`<rect x="${x}" y="${+y+20}" width="7" height="5" fill="${A}" opacity=".7"/>`),
    cristal:()=>sc((x,y)=>`<path d="M${x} ${+y+10} l3 -6 l3 6 l-3 4z" fill="${A}" opacity=".85"/>`),
    glace:()=>sc((x,y)=>`<path d="M${x} ${+y-3} v6 M${+x-3} ${y} h6" stroke="#fff" stroke-width="1.2"/>`)+`<path d="M30 92 h100" stroke="#fff" stroke-opacity=".6" stroke-width="4"/>`,
    feu:()=>sc((x,y)=>`<path d="M${x} ${+y+40} q-3 -6 0 -10 q3 4 0 10z" fill="${A}"/>`),
    cendre:()=>sc((x,y)=>`<circle cx="${x}" cy="${y}" r="1.5" fill="#8a7a70"/>`)+sc((x,y)=>`<circle cx="${x}" cy="${y}" r="1" fill="${A}"/>`),
    floraison:()=>sc((x,y)=>`<g transform="translate(${x} ${+y+16})">${[0,72,144,216,288].map(a=>`<ellipse rx="1.6" ry="3" cy="-3" transform="rotate(${a})" fill="#f2b0c8"/>`).join('')}<circle r="1.2" fill="#ffe27a"/></g>`),
    corruption:()=>`<path d="M0 100 L0 84 ${Array.from({length:16},(_,i)=>`L${i*10+5} ${f1(78+r()*6)} L${i*10+10} 86`).join(' ')} L160 100Z" fill="${A}" opacity=".85"/>`,
    purete:()=>`<path d="M50 40 Q70 30 90 42 Q110 52 128 40" stroke="#fff" stroke-width="5" fill="none" opacity=".85"/>`,
    ruine:()=>sc((x,y)=>`<path d="M${x} ${+y+24} l6 -1 l1 5 l-7 1z" fill="${A}"/>`),
    abondance:()=>sc((x,y)=>`<ellipse cx="${x}" cy="${+y+20}" rx="1.8" ry="3.5" fill="${['#d23a2a','#f2c230','#7a3aa0'][Math.floor(r()*3)]}"/>`),
    folie:()=>sc((x,y)=>`<path d="M${x} ${y} m-1 0a1 1 0 1 1 2 0a3 3 0 1 1-6 0" stroke="${A}" fill="none"/>`),raison:()=>`<path d="M20 20 H140" stroke="${A}" stroke-width="1.4" stroke-dasharray="6 3"/>`};
  return(T[k]||(()=>''))()}

/* ---------- Glyphes des pôles (blason de la carte) : dessinés dans un carré de 20 ---------- */
const GP={oubli:'<path d="M10 3v14M4 6.5l12 7M4 13.5l12-7" stroke-width="1.6"/>',memoire:'<path d="M5 3h10v14H5z M8 7h4 M8 10h4 M8 13h2" stroke-width="1.4" fill="none"/>',
 tyrannie:'<path d="M3 10h4M13 10h4" stroke-width="1.6"/><circle cx="10" cy="10" r="3" fill="none" stroke-width="1.6"/><path d="M5 5l10 10" stroke-width="1"/>',
 liberte:'<path d="M3 13q4-8 7-3q3-7 7 3" stroke-width="1.6" fill="none"/><path d="M10 10v7" stroke-width="1.4"/>',
 folie:'<path d="M10 10m-1 0a1 1 0 1 1 2 0a3 3 0 1 1-6 0a5 5 0 1 1 10 0a7 7 0 1 1-14 0" stroke-width="1.3" fill="none"/>',raison:'<path d="M10 3v14M4 6h12M4 6l-2 6h4zM16 6l-2 6h4z" stroke-width="1.3" fill="none"/>',
 nuit:'<path d="M13 3a7 7 0 1 0 4 11a6 6 0 0 1-4-11z"/>',aurore:'<path d="M2 14h16" stroke-width="1.4"/><path d="M5 14a5 5 0 0 1 10 0z"/><path d="M10 4v3M4 7l2 2M16 7l-2 2" stroke-width="1.4"/>',
 brume:'<path d="M3 7h10M6 10h11M3 13h9" stroke-width="1.8" stroke-linecap="round"/>',clarte:'<circle cx="10" cy="10" r="3"/><path d="M10 2v3M10 15v3M2 10h3M15 10h3M4 4l2 2M14 14l2 2M16 4l-2 2M4 16l2-2" stroke-width="1.4"/>',
 mensonge:'<path d="M3 7q7-4 14 0q-1 8-7 9q-6-1-7-9z" fill="none" stroke-width="1.5"/><path d="M6 9h3M11 9h3" stroke-width="1.6"/>',verite:'<path d="M2 10q8-9 16 0q-8 9-16 0z" fill="none" stroke-width="1.5"/><circle cx="10" cy="10" r="2.6"/>',
 cauchemar:'<path d="M3 15q3-10 7-10q4 0 7 10q-3-3-4 0q-2-3-3 0q-1-3-3 0q-1-3-4 0z"/>',reve:'<path d="M12 3a6 6 0 1 0 5 9a5 5 0 0 1-5-9z"/><circle cx="5" cy="5" r="1"/><circle cx="16" cy="16" r="1"/>',
 silence:'<path d="M4 10q6-4 12 0q-6 4-12 0z" fill="none" stroke-width="1.5"/><path d="M3 4l14 12" stroke-width="1.4"/>',chant:'<path d="M7 15V5l8-2v10" stroke-width="1.4" fill="none"/><circle cx="5.5" cy="15" r="2"/><circle cx="13.5" cy="13" r="2"/>',
 pierre:'<path d="M4 15l2-8l6-3l5 4l-1 7z"/>',cristal:'<path d="M10 2l4 6l-4 10l-4-10z M6 8h8" stroke-width="1.2" fill="none"/>',
 glace:'<path d="M10 2v16M3 6l14 8M3 14l14-8" stroke-width="1.5"/>',feu:'<path d="M10 18c-5 0-6-5-3-9c0 3 2 3 2 3c0-5 3-7 4-10c1 5 5 7 4 11c-1 3-3 5-7 5z"/>',
 cendre:'<circle cx="5" cy="6" r="1.2"/><circle cx="12" cy="4" r="1"/><circle cx="15" cy="10" r="1.3"/><circle cx="8" cy="12" r="1"/><circle cx="11" cy="16" r="1.2"/>',
 floraison:'<circle cx="10" cy="10" r="2"/><path d="M10 8q-3-6 0-6q3 0 0 6M12 10q6-3 6 0q0 3-6 0M10 12q3 6 0 6q-3 0 0-6M8 10q-6 3-6 0q0-3 6 0"/>',
 corruption:'<path d="M4 3h12v4q-2 2-2 6q0 4-2 4q-2 0-2-4q-2 2-3 6q-2-1-1-7q-2-2-2-9z"/>',purete:'<path d="M10 2q6 8 6 11a6 6 0 0 1-12 0q0-3 6-11z" fill="none" stroke-width="1.5"/>',
 ruine:'<path d="M4 18V6h4v4l2-2v10z M12 18v-7h4v7z"/>',abondance:'<path d="M10 18V6M10 8q-4-1-4-5q4 1 4 5M10 8q4-1 4-5q-4 1-4 5M10 12q-4-1-5-4q4 0 5 4M10 12q4-1 5-4q-4 0-5 4"/>'};
const glypheP=w=>{const g=GP[sansAcc(w)];if(g)return g;return`<text x="10" y="14.5" text-anchor="middle" font-size="12" font-family="serif" stroke="none">${(w||'?')[0]}</text>`};

/* ---------- Résonances (formes ultimes) ---------- */
const RES={braise:['#ff7a3a','<path d="M10 7l4 6l-4 6l-4-6z"/><circle cx="6" cy="3.5" r="1.3"/><circle cx="10" cy="2.5" r="1.3"/><circle cx="14" cy="3.5" r="1.3"/>'],
 givre:['#bfe6f2','<path d="M10 2v16M3 6l14 8M3 14l14-8" stroke-width="2"/>'],sang:['#e0304a','<path d="M10 18q6-8 6-11a6 6 0 0 0-12 0q0 3 6 11z"/><path d="M4 9h12" stroke="#0d0c0f" stroke-width="1.6"/>'],
 racine:['#6fb04a','<path d="M10 2v10M10 12l-5 6M10 12v6M10 12l5 6" stroke-width="2" fill="none"/>'],sceau:['#3fae86','<path d="M10 2l8 8l-8 8l-8-8z" fill="none" stroke-width="2"/><circle cx="10" cy="10" r="2"/>'],
 abime:['#7a6ae0','<path d="M10 10m-1 0a1 1 0 1 1 2 0a3 3 0 1 1-6 0a5 5 0 1 1 10 0a7 7 0 1 1-14 0" stroke-width="1.8" fill="none"/>']};
const glypheR=(n,plein)=>{const R=RES[sansAcc(n)];if(!R)return'';
  return`<span class="kres ${plein?'pose':'reveille'}" title="${plein?'Pose':'Réveille'} ${n}" style="--rc:${R[0]}"><svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor">${R[1]}</svg></span>`};

/* ---------- Bandeau de culture : motif répété (20 × 8) ---------- */
const BAND={slave:'<path d="M0 4 L5 0 L10 4 L5 8Z M10 4 L15 0 L20 4 L15 8Z" fill="none"/><circle cx="10" cy="4" r="1"/>',
 egypte:'<path d="M10 8 V3 M10 3 Q6 0 4 3 M10 3 Q14 0 16 3 M10 3 Q10 0 10 0" fill="none"/>',nordique:'<path d="M0 6 Q5 -1 10 4 T20 2 M0 2 Q5 9 10 4 T20 6" fill="none"/>',
 zoulou:'<path d="M0 8 L5 0 L10 8Z"/><path d="M10 0 L15 8 L20 0Z" fill="none"/>',ethiopie:'<path d="M10 0 V8 M6 4 H14 M2 1 L4 4 L2 7 M18 1 L16 4 L18 7" fill="none"/>',
 azteque:'<path d="M0 8 V4 H4 V0 H8 V4 H6 V6 H10 V2 H14 V8" fill="none"/>',maya:'<path d="M0 6 H4 V2 H8 V6 H12 V2 H16 V6 H20" fill="none"/><circle cx="6" cy="4" r=".9"/><circle cx="14" cy="4" r=".9"/>',
 venise:'<circle cx="10" cy="4" r="3" fill="none"/><circle cx="0" cy="4" r="3" fill="none"/><circle cx="20" cy="4" r="3" fill="none"/>',
 inca:'<rect x="1" y="1" width="8" height="6" fill="none"/><rect x="11" y="1" width="8" height="6"/><path d="M3 4h4" stroke-width="1.6"/>',
 khmer:'<path d="M0 8 Q5 0 10 8 Q15 0 20 8" fill="none"/><path d="M10 8 Q10 4 10 3" fill="none"/>',chine:'<path d="M0 7 H8 V1 H2 V5 H6 V3 M10 7 H18 V1 H12 V5 H16 V3" fill="none"/>',
 byzance:'<circle cx="10" cy="4" r="3.2" fill="none"/><path d="M10 2v4M8 4h4"/><circle cx="0" cy="4" r="1"/><circle cx="20" cy="4" r="1"/>',
 gothique:'<path d="M1 8 V4 Q5 -2 9 4 V8 M11 8 V4 Q15 -2 19 4 V8" fill="none"/>',girih:'<path d="M10 0 L13 4 L10 8 L7 4Z M0 4 H7 M13 4 H20" fill="none"/>'};
function bandeau(ck,coul,uid){return`<svg class="kband" viewBox="0 0 160 8" preserveAspectRatio="xMidYMid slice"><defs><pattern id="vb${uid}" width="20" height="8" patternUnits="userSpaceOnUse">
  <g stroke="${coul}" fill="${coul}" stroke-width="1">${BAND[ck]||BAND.girih}</g></pattern></defs><rect width="160" height="8" fill="url(#vb${uid})"/></svg>`}

/* ---------- Coins du cadre selon le mana (dessinés pour le coin haut gauche, 30 × 30) ---------- */
const COIN={Feu:'<path d="M2 28 Q2 10 10 2 Q8 10 14 12 Q12 4 20 1 Q16 10 22 16 Q14 14 10 22 Q8 16 4 18Z"/>',
 Glace:'<path d="M2 2 L20 4 L9 7 L16 14 L7 9 L4 20Z"/><path d="M4 4 L24 24" stroke-width="1.2" fill="none" opacity=".6"/>',Eau:'<path d="M2 28 Q2 4 22 4 Q30 6 26 14 Q22 20 16 14 Q14 10 18 9" fill="none" stroke-width="2.4"/><path d="M6 24 Q6 10 16 8" fill="none" stroke-width="1.2"/>',
 'Sève':'<path d="M2 28 Q4 8 24 4" fill="none" stroke-width="2"/><path d="M8 14 Q2 8 6 2 Q14 6 8 14Z M16 7 Q16 0 24 0 Q24 7 16 7Z M4 22 Q-2 18 0 12 Q6 14 4 22Z"/>',
 Pierre:'<path d="M2 2 H16 V8 H10 V16 H2Z"/><path d="M18 2 H26 V6 H18Z M2 18 H6 V26 H2Z"/>',
 Vent:'<path d="M3 26 Q3 4 20 4 Q28 4 26 11 Q24 16 19 13 Q16 10 20 8" fill="none" stroke-width="2"/><path d="M9 26 Q9 12 18 10" fill="none" stroke-width="1.4"/>'};
function coins(mana,coul,L){const g=COIN[mana]||COIN.Pierre,cl=L>=5?' brille':'';
  return['tl','tr','bl','br'].map(p=>`<svg class="kcoin ${p}${cl}" viewBox="0 0 30 30" fill="${coul}" stroke="${coul}">${g}</svg>`).join('')}

/* ---------- Losanges de palier ---------- */
function paliers(n,max,coul){return`<div class="kpal" style="--pc:${coul}">${Array.from({length:max},(_,i)=>`<i class="${i<n?'on':''}"></i>`).join('')}</div>`}

/* ---------- Scène complète d'une zone : ciel du pôle, biome, monument de la culture, élément du pôle ---------- */
function scene(P,uid){const r=rng(P.id+'|'+P.pole),[m,l,d]=P.m,a=P.acc,bk=bkey(P.biome),B=BIO[bk]||BIO.collines,neg=P.pole==='neg';
  const c={loin:mix(a,d,.45),mi:mix(m,a,.4),pres:mix(d,a,.22),acc:mix(a,'#ffffff',.45),eau:mix(m,a,.35),emb:mix(d,a,.2),embL:mix(a,'#ffffff',.35),mid:mix(d,'#000000',.4),feu:mix(a,'#fff3c0',.5),fx:mix(a,'#ffffff',.15)};
  const x=58+r()*44,mon=(MON_C[ckeyL(P.cult)]||MON_C.girih)(c);
  const sc=P.ult?1.42:P.mod==='RES'?1.12+.08*Math.min(3,P.L):1.3;
  const tex=neg?`<defs><pattern id="vh${uid}" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0 V3" stroke="${d}" stroke-opacity=".28" stroke-width="1"/></pattern></defs><rect width="160" height="100" fill="url(#vh${uid})"/>`
    :`<rect width="160" height="100" fill="url(#mz-girih)" opacity=".3"/>`;
  const rayons=P.ult?`<g opacity=".55">${Array.from({length:18},(_,i)=>{const t=i*PI/9;return`<path d="M${f1(x)} 52 L${f1(x+Math.cos(t)*120)} ${f1(52+Math.sin(t)*120)} L${f1(x+Math.cos(t+.08)*120)} ${f1(52+Math.sin(t+.08)*120)}Z" fill="${l}"/>`}).join('')}</g>`:'';
  const frise=P.ult?`<rect x="2" y="2" width="156" height="96" fill="none" stroke="${l}" stroke-width="3" stroke-dasharray="6 3 2 3"/><rect width="160" height="100" fill="url(#mz-girih)" opacity=".9"/>`:'';
  const halo=P.L>=4?`<ellipse cx="${f1(x)}" cy="56" rx="38" ry="30" fill="${P.L>=6?'#ffffff':a}" opacity="${P.L>=6?.45:.35}" filter="url(#mz-flou)"/>`:'';
  const pw=P.mod==='RES'?'':P.pole==='neg'?P.pm:P.pole==='pos'?P.pp:'';
  return ciel(P,r,uid)+rayons+B.loin(r,c)+halo+`<g transform="translate(${f1(x)} ${f1(90-82*sc)}) scale(${sc})" stroke="${mix(d,'#000000',.5)}" stroke-width="1.1" stroke-linejoin="round" paint-order="stroke">${mon}</g>`+B.pres(r,c)+effetPole(pw,c,r,P.L)+tex+frise}

/* ---------- Illustration d'une carte de secret : dessin au trait sur papier kraft, objet trouvé au centre ---------- */
function sceneSecret(c,P,uid){const r=rng(String(c.secret||uid)),bk=P?bkey(P.biome):'collines',B=BIO[bk]||BIO.collines,ink='#2a1f1a';
  const enc={loin:'rgba(42,31,26,.12)',mi:'none',pres:'rgba(42,31,26,.18)',acc:ink,eau:'rgba(42,31,26,.1)',emb:'none',embL:ink,mid:ink,feu:ink};
  const obj=['<path d="M-12 0 a7 7 0 1 0 0 .1 M-5 0 H16 M10 0 v6 M14 0 v4" fill="none"/>','<path d="M-14 -10 h28 v20 h-28z M-14 -10 l14 10 l14 -10" fill="none"/>',
   '<path d="M-5 -14 h10 M-3 -14 v8 q-9 4 -9 12 a12 9 0 0 0 24 0 q0 -8 -9 -12 v-8" fill="none"/>','<path d="M-14 -12 h20 l8 8 v18 h-28z M6 -12 v8 h8 M-9 -2 h16 M-9 4 h16" fill="none"/>'][hsh(c.secret||uid)%4];
  return`<rect width="160" height="100" fill="#c9a77a"/>${B.loin(r,enc)}${B.pres(r,enc)}
   <g transform="translate(80 52) scale(2.3)" stroke="${ink}" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round">${obj}</g>
   <g transform="translate(140 6)" stroke="${ink}" stroke-width="1.4" fill="none"><circle cx="5" cy="5" r="4.5"/><path d="M8.5 8.5 L13 13"/></g>`}

/* ---------- Rendu public ---------- */
let uidN=0;
/* les cartes de palier (« ZONE#-3 », « ZONE#+5 », « RES079#r2 ») se dessinent à leur propre palier, pas au niveau actuel de la zone */
const zoneDeCarte=(k,c)=>{const P=c.z?infoZone(c.z):null;if(!P)return null;const i=String(k).indexOf('#');
  if(i>=0){const sg=k[i+1],n=+k.slice(i+2)||1;P.lv=sg==='-'?-n:n;P.L=n;P.pole=sg==='-'?'neg':'pos'}
  if(P.mod==='RES')P.pole='pos';return P};
const accent=P=>{const A=ZACC[P.id],m=(VMANA[P.mana]||VMANA.Pierre);if(A)return P.pole==='neg'?A[0]:A[1];
  /* zones sans fiche : deux accents dérivés du mana, l'un froid et lointain, l'autre chaud et proche, à luminosité égale */
  return P.pole==='neg'?mix(m[1],'#8a7ad0',.45):mix(m[1],'#e0703a',.45)};
window.artCarte=function(k){const c=CK[k],uid='k'+(uidN++);
  if(c.secret||c.zs&&!c.z){const P=c.zs?infoZone(c.zs):null;return`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">${sceneSecret(c,P,uid)}</svg>`}
  const P=zoneDeCarte(k,c);
  if(!P){const a=ART[k]||ART.coup;return`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="vf${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0c0f"/><stop offset="1" stop-color="${a.fond?a.fond[1]:'#3a2a20'}"/></linearGradient></defs>
   <rect width="160" height="100" fill="url(#vf${uid})"/><rect width="160" height="100" fill="url(#mz-girih)"/>${a.d}</svg>`}
  P.m=VMANA[P.mana]||VMANA.Pierre;P.acc=accent(P);P.ult=!!c.ultime||(P.L>=7&&!!c.pose);
  return`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">${scene(P,uid)}</svg>`};

const SORTE={CIT:'Défense',DON:'Attaque',RES:'Boost',ANT:'Invocation',MAR:'Loi'};
const longueur=t=>{const n=String(t).replace(/<[^>]+>/g,'').length;return n>290?' t5':n>210?' t4':n>140?' t3':n>85?' t2':n>45?' t1':''};
window.carteHTML=function(k,i){const c=CK[k],z=c.z,mt=typeof mtype==='function'?mtype(k):null,uid='h'+(uidN++),txt=c.txt(k),lg=longueur(txt);
  const gris=typeof enGris==='function'&&enGris(k),co=`<div class="co" style="${mt&&typeof MCOL!=='undefined'?'--mc:'+MCOL[mt]:''}">${c.cout}</div>`;
  const amb=typeof c.amb==='function'?c.amb():c.amb;const ambH=amb?`<div class="kamb">${amb}</div>`:'';
  /* carte de secret */
  if(c.secret||(c.zs&&!z)){const P=c.zs?infoZone(c.zs):null;
    return`<div class="cc kcarte secret${lg}${gris?' gris':''}">${co}<div class="ksceau" title="Secret">✦</div><div class="art">${artCarte(k)}</div><div class="cn">${c.nom()}</div>
     <div class="cz">Secret${P?' · '+P.nom.replace(/^(La |Le |Les |L')/,''):''}</div><div class="ct">${txt}</div>${ambH}</div>`}
  /* carte commune */
  const P=z?zoneDeCarte(k,c):null;
  if(!P){const a=ART[k]||ART.coup;
    return`<div class="cc kcarte base${lg}${gris?' gris':''}" style="--kb:#c9a45c">${co}<div class="art">${artCarte(k)}</div><div class="cn">${c.nom()}</div><div class="cz">${a.sorte||''} · Commune</div><div class="ct">${txt}</div></div>`}
  /* carte de zone */
  const V=VMANA[P.mana]||VMANA.Pierre,res=P.mod==='RES',ult=!res&&(!!c.ultime||(P.L>=7&&!!c.pose));
  const nP=res?Math.min(3,Math.max(1,P.L)):P.L,maxP=res?3:7,pw=res?'':(P.pole==='neg'?P.pm:P.pole==='pos'?P.pp:'');
  const coulP=res?'#e0a040':accent(P);
  const crest=pw?`<div class="kblason ${P.pole}" title="Pôle ${pw}"><svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor">${glypheP(pw)}</svg></div>`:'';
  const sorte=(ART[k]&&ART[k].sorte&&P.mod!=='MAR')?ART[k].sorte:SORTE[P.mod]||'';
  const ligne=[sorte,P.mana,pw||(res?'Niv. '+nP:'')].filter(Boolean).join(' · ');
  const resH=(c.pose||c.reveille)?`<div class="kresos">${c.pose?glypheR(c.pose,1):''}${c.pose&&c.reveille?'<b></b>':''}${c.reveille?glypheR(c.reveille,0):''}</div>`:'';
  const coZ=`<div class="co ${P.pole}" style="${mt&&typeof MCOL!=='undefined'?'--mc:'+MCOL[mt]:''}">${c.cout}</div>`;
  const cls=['cc','kcarte','z','m-'+sansAcc(P.mana),'p-'+P.pole,'L'+nP,ult?'ultime':'',res?'res':'',gris?'gris':'',lg.trim()].filter(Boolean).join(' ');
  return`<div class="${cls}" style="--kb:${V[0]};--kl:${V[1]};--kd:${V[2]};--kcA:${rgba(V[0],.28)};--kcB:${rgba(V[0],.8)};--pc:${coulP}">
   ${nP>=5||ult?coins(P.mana,V[1],nP):''}${coZ}${crest}<div class="art">${artCarte(k)}${paliers(nP,maxP,coulP)}</div>${nP>=2||ult?bandeau(ckey(P.cult),V[1],uid):'<div class="kband vide"></div>'}${resH}
   <div class="cn">${c.nom()}</div><div class="cz">${ligne}</div><div class="ct">${txt}</div>${nP>=4&&!ult?bandeau(ckey(P.cult),V[1],uid+'b').replace('kband','kband bas'):''}${ambH}${gris?'<div class="kgris">Mana gris · effet −25 %</div>':''}</div>`};

/* ---------- CSS propre au visuel 2.2 ---------- */
const css=document.createElement('style');css.textContent=`
.cc.kcarte{isolation:isolate}
.cc.kcarte .art{position:relative;flex:0 0 auto}
.cc.kcarte .cz{letter-spacing:.07em}

.cc.kcarte.ultime .cz{display:none}
.cc.kcarte.ultime .cn{margin-top:.1em}
.kband{display:block;width:100%;height:calc(var(--u)*.55);margin-top:calc(var(--u)*.2);opacity:.85}
.kcoin{position:absolute;width:calc(var(--u)*1.3);height:calc(var(--u)*1.3);z-index:1;pointer-events:none;opacity:.9;filter:drop-shadow(0 1px 1px #000)}
.kcoin.tl{top:-3px;left:-3px}.kcoin.tr{top:-3px;right:-3px;transform:scaleX(-1)}.kcoin.bl{bottom:-3px;left:-3px;transform:scaleY(-1)}.kcoin.br{bottom:-3px;right:-3px;transform:scale(-1,-1)}
.cc.kcarte.L3 .kcoin,.cc.kcarte.L4 .kcoin{width:calc(var(--u)*1.5);height:calc(var(--u)*1.5)}
.cc.kcarte .kcoin.brille{width:calc(var(--u)*1.9);height:calc(var(--u)*1.9);filter:drop-shadow(0 0 4px var(--kl)) drop-shadow(0 1px 1px #000)}
.cc.kcarte.L3,.cc.kcarte.L4,.cc.kcarte.L5,.cc.kcarte.L6,.cc.kcarte.L7{box-shadow:0 10px 24px rgba(0,0,0,.65),inset 0 0 0 1px rgba(255,255,255,.07),inset 0 0 0 calc(var(--u)*.22) var(--kd),inset 0 0 0 calc(var(--u)*.28) var(--kb)}
.cc.kcarte.L5,.cc.kcarte.L6{box-shadow:0 10px 24px rgba(0,0,0,.65),0 0 18px var(--kcA),inset 0 0 0 calc(var(--u)*.22) var(--kd),inset 0 0 0 calc(var(--u)*.28) var(--kb)}
/* pôle − : gravure (cadre à double filet net, fond froid) ; pôle + : émail (fond chaud, lueur) */
.cc.kcarte.p-neg{border-style:double;border-width:4px;background:linear-gradient(165deg,var(--kcA),#100e13 60%),#100e13}
.cc.kcarte.p-pos{background:radial-gradient(120% 70% at 50% 0%,var(--kcA),transparent 70%),linear-gradient(180deg,#141116,#100e13)}
.cc.kcarte.p-neg .cn{font-style:italic;letter-spacing:.02em}
.cc.kcarte.p-pos .cn{background:linear-gradient(90deg,transparent,rgba(255,240,200,.12),transparent)}
.kblason{position:absolute;top:calc(var(--u)*-.85);left:50%;transform:translateX(-50%);z-index:2;width:calc(var(--u)*2.1);height:calc(var(--u)*2.1);display:grid;place-items:center;color:var(--pc);background:#0c0b0e;border:2px solid var(--kb);box-shadow:0 3px 8px rgba(0,0,0,.6)}
.kblason svg{width:72%;height:72%}
.kblason.neg{border-radius:0 0 50% 50%/0 0 60% 60%;clip-path:polygon(0 0,100% 0,100% 60%,50% 100%,0 60%)}
.kblason.pos{border-radius:50%;box-shadow:0 0 0 2px var(--kd),0 0 12px var(--kcB)}
.kpal{position:absolute;left:0;top:0;bottom:0;width:calc(var(--u)*1.25);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:calc(var(--u)*.2);background:rgba(8,7,10,.6)}
.kpal i{width:calc(var(--u)*.6);height:calc(var(--u)*.6);transform:rotate(45deg);border:1px solid rgba(255,255,255,.35);background:transparent}
.kpal i.on{background:var(--pc);border:1.5px solid #fff;box-shadow:0 0 6px var(--pc)}
.kamb{display:none;font-family:var(--titre);font-style:italic;font-size:calc(var(--u)*.78);line-height:1.2;text-align:center;color:var(--sable);opacity:.85;padding:.25em .3em 0}
.boite .kamb{display:block}
/* forme ultime (±7) */
.cc.kcarte.ultime{border-width:3px;border-color:transparent;background:linear-gradient(#0d0b0f,#0d0b0f) padding-box,conic-gradient(from var(--ang,0deg),var(--kb),var(--kl),#fff,var(--kl),var(--kb),var(--kd),var(--kb)) border-box;animation:kult 6s linear infinite}
.cc.kcarte.ultime .art{height:calc(var(--u)*6.4)}
.cc.kcarte.ultime .cn{font-size:calc(var(--u)*1.05);text-transform:uppercase;letter-spacing:.06em;color:var(--kl);text-shadow:0 0 10px var(--kcB)}
.cc.kcarte.ultime .kpal i.on{animation:kpuls 1.6s ease-in-out infinite}
@property --ang{syntax:'<angle>';inherits:false;initial-value:0deg}
@keyframes kult{to{--ang:360deg}}
@keyframes kpuls{50%{box-shadow:0 0 12px var(--pc),0 0 2px #fff}}
.kresos{align-self:center;display:flex;align-items:center;gap:0;margin:calc(var(--u)*.15) 0 0;z-index:2;padding:calc(var(--u)*.15) calc(var(--u)*.3);border-radius:2em;background:#0d0b0f;border:1.5px solid var(--kl)}
.kresos b{width:calc(var(--u)*.7);height:2px;background:var(--kl)}
.kband.vide{height:calc(var(--u)*.55);margin-top:calc(var(--u)*.2)}
.kband.bas{margin:calc(var(--u)*.2) 0 0;opacity:.6}
.cc.kcarte .co.neg{box-shadow:-5px 0 0 0 var(--pc),0 0 0 2px var(--mc,#c9a45c),0 4px 10px rgba(0,0,0,.6),inset 0 -4px 8px rgba(0,0,0,.35)}
.cc.kcarte .co.pos{box-shadow:5px 0 0 0 var(--pc),0 0 0 2px var(--mc,#c9a45c),0 4px 10px rgba(0,0,0,.6),inset 0 -4px 8px rgba(0,0,0,.35)}
.cc.kcarte.L6 .cn{font-variant:small-caps;letter-spacing:.06em}
.cc.kcarte.L5,.cc.kcarte.L6{border-color:var(--pc)}
.kres{width:calc(var(--u)*1.6);height:calc(var(--u)*1.6);display:grid;place-items:center;border-radius:50%;color:var(--rc);background:rgba(8,7,10,.8);border:1.5px solid var(--rc)}
.kres.pose{background:var(--rc);color:#0d0c0f;box-shadow:0 0 8px var(--rc)}
.kres.reveille{border-style:dashed}
.kres svg{width:70%;height:70%}
/* cartes de secret : parchemin et encre */
.cc.kcarte.secret{--kb:#7a5a3a;border:2px solid #6b4e30;background:#c9a77a;color:#2a1f1a;outline:2px dashed #7a5a3a;outline-offset:-6px;border-radius:calc(var(--u)*.35);
  }
.cc.kcarte.secret .cn{color:#2b1e12;background:none;font-style:italic}
.cc.kcarte.secret .cz{color:#7a5a3a;filter:none}
.cc.kcarte.secret .ct{color:#2b1e12;background:rgba(74,53,36,.08);border-top:1px solid rgba(74,53,36,.25)}
.cc.kcarte.secret .kamb{color:#5a4028}
.ksceau{position:absolute;bottom:calc(var(--u)*-.6);right:calc(var(--u)*-.5);width:calc(var(--u)*2);height:calc(var(--u)*2);border-radius:50%;display:grid;place-items:center;z-index:2;
  background:radial-gradient(circle at 35% 30%,#d14b3c,#7a1a14);color:#f5d9a8;font-size:calc(var(--u)*1);box-shadow:0 2px 6px rgba(0,0,0,.5)}
/* cartes communes : sobres, cuir et bois */
.cc.kcarte.base{border-color:#6e5c44;background:linear-gradient(180deg,#221c17,#141012)}
.cc.kcarte.base .art{filter:saturate(.75)}
.cc.kcarte.f.ultime{border-color:transparent}
.cc.kcarte .ct{overflow:hidden}
.cc.kcarte.t1 .ct{font-size:calc(var(--u)*.84);line-height:1.22}
.cc.kcarte.t2 .art{height:calc(var(--u)*5)}.cc.kcarte.t2 .ct{font-size:calc(var(--u)*.76);line-height:1.18}
.cc.kcarte.t3 .art{height:calc(var(--u)*4.2)}.cc.kcarte.t3 .ct{font-size:calc(var(--u)*.68);line-height:1.15;padding:.3em .35em}
.cc.kcarte.t4 .art{height:calc(var(--u)*3.4)}.cc.kcarte.t4 .ct{font-size:calc(var(--u)*.6);line-height:1.12;padding:.25em .3em}
.cc.kcarte.t2 .kband.bas,.cc.kcarte.t3 .kband.bas,.cc.kcarte.t4 .kband.bas,.cc.kcarte.t5 .kband.bas{display:none}
.cc.kcarte.t5 .art{height:calc(var(--u)*2.8)}.cc.kcarte.t5 .ct{font-size:calc(var(--u)*.54);line-height:1.1;padding:.2em .25em}
/* dans la main, la carte choisie montre tout son texte, lisible à 3 m */
#cb-main .cc.kcarte.f{height:auto;min-height:calc(var(--u)*15.8);align-self:flex-end}
#cb-main .cc.kcarte.f .art{height:calc(var(--u)*5.4)}
#cb-main .cc.kcarte.f .ct{font-size:calc(var(--u)*.86);line-height:1.24;overflow:visible}
#cb-main .cc.kcarte.f{width:calc(var(--u)*14);flex-basis:calc(var(--u)*14)}
.boite .cc.kcarte{height:auto;min-height:calc(var(--u)*15.8)}
.boite .cc.kcarte .art{height:calc(var(--u)*6.4)}
.boite .cc.kcarte .ct{font-size:calc(var(--u)*.88);line-height:1.26;overflow:visible}
.cc.kcarte .kgris{bottom:auto;top:calc(var(--u)*-1.5);z-index:3}
.cc.kcarte.ultime .kamb{display:none}
.cc.kcarte.ultime.t3 .art,.cc.kcarte.ultime.t4 .art,.cc.kcarte.ultime.t5 .art{height:calc(var(--u)*4.6)}
.cc.kcarte .ksceau{bottom:calc(var(--u)*-.9);right:calc(var(--u)*-.9)}
.cc.kcarte .cn{font-style:normal}.cc.kcarte.p-neg .cn{font-style:normal}
`;document.head.appendChild(css);
})();
