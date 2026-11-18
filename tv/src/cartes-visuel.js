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
function ciel(P,r,uid){const a=P.teinte||P.acc,m=P.m[0];
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

/* ---------- Sujet propre à chaque carte (rendu unique, demande du 17 nov. au soir) ----------
   Le sujet vient d'abord du NOM de la carte (chien, masque, lanterne, sceau…), sinon de son effet principal.
   Il est dessiné au premier plan ; le monument de la zone passe derrière. Chaque sujet : pieds en (0,0), environ 50 unités de haut. */
const SJ={
chien:(c,r)=>`<path d="M-24 0 L-21 -14 Q-26 -20 -22 -24 L-16 -20 Q-4 -24 10 -22 L16 -30 L19 -24 Q26 -22 26 -16 L20 -14 L16 -10 L16 0 L11 0 L10 -9 L-12 -10 L-15 0Z" fill="${c.f}"/><circle cx="18" cy="-22" r="1.2" fill="${c.g}"/>`,
oiseau:(c,r)=>`<path d="M0 -26 Q-14 -40 -30 -36 Q-18 -32 -10 -24 Q-14 -16 -4 -14 L0 -6 L4 -14 Q14 -16 10 -24 Q18 -32 30 -36 Q14 -40 0 -26Z" fill="${c.f}"/><path d="M-2 -6 L2 -6 L0 0Z" fill="${c.f}"/><circle cx="1" cy="-25" r="1" fill="${c.g}"/>`,
serpent:(c,r)=>`<path d="M-26 0 Q-26 -10 -14 -10 Q-2 -10 -2 -20 Q-2 -30 10 -30 Q20 -30 20 -38 L26 -36 Q26 -24 12 -24 Q4 -24 4 -14 Q4 -4 -14 -4 Q-20 -4 -20 0Z" fill="${c.f}"/><circle cx="22" cy="-36" r="1.1" fill="${c.g}"/>`,
poisson:(c,r)=>`<path d="M-24 -22 Q-4 -40 18 -24 L28 -32 L26 -18 L28 -6 L18 -14 Q-4 2 -24 -14Z" fill="${c.f}"/><circle cx="-16" cy="-20" r="1.4" fill="${c.g}"/><path d="M-6 -30 Q0 -20 -6 -8" stroke="${c.l}" fill="none"/>`,
cornu:(c,r)=>`<path d="M-26 0 V-16 Q-26 -26 -10 -26 H12 L16 -34 Q12 -42 6 -44 Q18 -42 20 -32 L24 -36 Q30 -30 22 -26 Q28 -22 24 -16 L18 -16 V0 H13 V-12 H-14 V0Z" fill="${c.f}"/><circle cx="20" cy="-23" r="1.2" fill="${c.g}"/>`,
tortue:(c,r)=>`<path d="M-26 0 Q-26 -26 0 -28 Q26 -26 26 0Z" fill="${c.f}"/><path d="M-14 -4 L-8 -18 L8 -18 L14 -4 M-8 -18 L0 -26 L8 -18" stroke="${c.l}" fill="none" stroke-width="1.4"/><path d="M26 -6 Q34 -10 32 -2 Z" fill="${c.f}"/>`,
essaim:(c,r)=>Array.from({length:14},()=>`<circle cx="${f1(r()*50-25)}" cy="${f1(-4-r()*44)}" r="${f1(1+r()*1.6)}" fill="${c.g}" filter="url(#mz-lueur)"/>`).join(''),
lezard:(c,r)=>`<path d="M-28 -4 Q-14 -2 -8 -8 L-12 -14 L-6 -12 L0 -14 Q8 -18 16 -14 L22 -20 L22 -12 Q28 -12 30 -8 Q20 -6 14 -8 L18 -2 L12 -4 Q0 -6 -8 -2 Q-18 4 -28 -4Z" fill="${c.f}"/><circle cx="25" cy="-10" r="1" fill="${c.g}"/>`,
figure:(c,r)=>{const v=Math.floor(r()*4);const tete=`<circle cx="0" cy="-40" r="5" fill="${c.f}"/>`;
  const corps=`<path d="M-9 0 L-7 -24 Q-8 -32 0 -34 Q8 -32 7 -24 L9 0Z" fill="${c.f}"/>`;
  const ext=[`<path d="M8 -26 L14 -50" stroke="${c.f}" stroke-width="2.4"/><path d="M14 -50 L12 -58 L17 -52Z" fill="${c.l}"/>`,
   `<path d="M-7 -26 L-14 -18" stroke="${c.f}" stroke-width="2.4"/><rect x="-18" y="-18" width="8" height="10" rx="2" fill="${c.g}" filter="url(#mz-lueur)"/>`,
   `<path d="M-8 -44 Q0 -54 8 -44 L10 -30 L-10 -30Z" fill="${c.f}"/>`,
   `<path d="M-7 -28 L-18 -38 M7 -28 L18 -38" stroke="${c.f}" stroke-width="2.4"/><circle cx="0" cy="-46" r="9" fill="none" stroke="${c.g}" opacity=".7"/>`][v];return corps+tete+ext},
chanteur:(c,r)=>SJ.figure(c,()=>.6)+[10,18,26].map(q=>`<path d="M${q} -46 Q${q+6} -36 ${q} -26" stroke="${c.g}" stroke-width="1.6" fill="none" opacity=".85"/>`).join(''),
masque:(c,r)=>`<path d="M-18 -46 Q0 -54 18 -46 Q20 -20 0 -8 Q-20 -20 -18 -46Z" fill="${c.l}" stroke="${c.f}" stroke-width="2"/><path d="M-11 -34 q5 -4 9 0 q-5 3 -9 0Z M2 -34 q5 -4 9 0 q-5 3 -9 0Z" fill="${c.f}"/><path d="M-6 -20 Q0 -16 6 -20" stroke="${c.f}" stroke-width="1.6" fill="none"/><path d="M0 -8 V0" stroke="${c.f}" stroke-width="2"/>`,
document:(c,r)=>[SJ.rouleau,SJ.ardoise,SJ.lettre,SJ.feuillet][Math.floor(r()*4)](c,r),
feuillet:(c,r)=>`<path d="M-18 -4 V-44 Q-18 -48 -14 -48 H16 V-8 Q16 -4 12 -4Z" fill="${c.l}" stroke="${c.f}" stroke-width="1.6"/>${[0,1,2,3,4].map(i=>`<path d="M-12 ${-40+i*6} H${8-i%2*6}" stroke="${c.f}" stroke-width="1.4"/>`).join('')}<circle cx="10" cy="-10" r="6" fill="${c.g}" stroke="${c.f}"/>`,
coffre:(c,r)=>`<path d="M-22 0 V-20 H22 V0Z" fill="${c.f}"/><path d="M-22 -20 Q0 -36 22 -20Z" fill="${c.f}" stroke="${c.l}"/><rect x="-4" y="-18" width="8" height="8" fill="${c.g}"/><path d="M-22 -10 H22" stroke="${c.l}" stroke-width="1.2"/>`,
lanterne:(c,r)=>`<path d="M0 -54 V-48" stroke="${c.f}" stroke-width="2"/><path d="M-8 -48 H8 L10 -42 V-16 L8 -12 H-8 L-10 -16 V-42Z" fill="${c.f}"/><rect x="-6" y="-40" width="12" height="22" fill="${c.g}" filter="url(#mz-lueur)"/><circle cx="0" cy="-30" r="16" fill="${c.g}" opacity=".25" filter="url(#mz-flou)"/><path d="M-4 -12 L-6 0 M4 -12 L6 0" stroke="${c.f}" stroke-width="2"/>`,
flamme:(c,r)=>`<path d="M0 0 C-22 0 -22 -24 -8 -36 C-8 -26 -2 -24 -2 -24 C-4 -38 6 -46 6 -54 C14 -40 24 -30 18 -14 C16 -6 10 0 0 0Z" fill="${c.g}" filter="url(#mz-lueur)"/><path d="M0 0 C-10 0 -10 -12 -2 -18 C0 -12 6 -10 6 -14 C10 -8 8 0 0 0Z" fill="#fff6d0"/>`,
cristal:(c,r)=>`<path d="M0 -54 L12 -30 L0 0 L-12 -30Z" fill="${c.l}" stroke="${c.f}" stroke-width="1.4"/><path d="M-12 -30 H12 M0 -54 V0" stroke="${c.f}" stroke-opacity=".5"/><path d="M-20 0 L-14 -18 L-8 0Z M8 0 L16 -22 L22 0Z" fill="${c.l}" stroke="${c.f}"/>`,
cloche:(c,r)=>`<path d="M0 -54 V-48" stroke="${c.f}" stroke-width="2"/><path d="M-18 -10 Q-16 -46 0 -48 Q16 -46 18 -10 L22 -6 H-22Z" fill="${c.l}" stroke="${c.f}" stroke-width="1.6"/><circle cx="0" cy="-4" r="4" fill="${c.f}"/>`,
trone:(c,r)=>`<path d="M-16 0 V-20 H16 V0 M-14 -20 V-50 L-8 -44 L0 -54 L8 -44 L14 -50 V-20" fill="${c.f}" stroke="${c.l}" stroke-width="1.2"/><path d="M-8 -48 L-4 -56 L0 -50 L4 -56 L8 -48Z" fill="${c.g}"/>`,
icone:(c,r)=>`<rect x="-18" y="-50" width="36" height="46" rx="2" fill="${c.g}" stroke="${c.f}" stroke-width="2"/><circle cx="0" cy="-34" r="9" fill="${c.l}" stroke="${c.f}"/><circle cx="0" cy="-34" r="13" fill="none" stroke="${c.f}" stroke-dasharray="2 2"/><path d="M-10 -4 Q0 -20 10 -4" fill="${c.f}"/>`,
main:(c,r)=>`<path d="M-10 0 V-24 L-14 -40 Q-12 -44 -9 -40 L-6 -30 V-46 Q-3 -50 0 -46 V-30 V-48 Q3 -52 6 -48 V-30 V-44 Q9 -48 12 -44 V-20 Q12 -6 4 0Z" fill="${c.f}" stroke="${c.l}" stroke-width="1"/>`,
oeil:(c,r)=>`<path d="M-26 -26 Q0 -50 26 -26 Q0 -2 -26 -26Z" fill="${c.l}" stroke="${c.f}" stroke-width="2"/><circle cx="0" cy="-26" r="9" fill="${c.f}"/><circle cx="0" cy="-26" r="4" fill="${c.g}"/>`,
muraille:(c,r)=>`<path d="M-28 0 V-30 H-22 V-36 H-14 V-30 H-6 V-36 H2 V-30 H10 V-36 H18 V-30 H28 V0Z" fill="${c.f}"/>${[-20,-6,8,20].map(x=>`<path d="M${x} -24 H${x+8} M${x-4} -14 H${x+6}" stroke="${c.l}" stroke-opacity=".6"/>`).join('')}`,
arbre:(c,r)=>`<path d="M-3 0 L-2 -30 Q-18 -30 -20 -42 Q-10 -40 -2 -36 L-1 -54 L2 -54 L2 -38 Q12 -46 20 -44 Q16 -34 3 -30 L3 0Z" fill="${c.f}"/>${Array.from({length:6},()=>`<path d="M${f1(-2+r()*4)} ${f1(-6-r()*44)} h3" stroke="${c.l}" stroke-width="1.4"/>`).join('')}`,
fleur:(c,r)=>`<path d="M0 0 Q-4 -20 0 -32" stroke="${c.f}" stroke-width="2.4" fill="none"/><path d="M0 -14 Q-12 -18 -14 -10 Q-6 -8 0 -14Z" fill="${c.f}"/><g transform="translate(0 -38)">${[0,60,120,180,240,300].map(a=>`<ellipse rx="4.5" ry="9" cy="-8" transform="rotate(${a})" fill="${c.g}" stroke="${c.f}"/>`).join('')}<circle r="4" fill="${c.l}"/></g>`,
stele:(c,r)=>`<path d="M-14 0 V-44 Q0 -56 14 -44 V0Z" fill="${c.f}"/>${[0,1,2,3].map(i=>`<path d="M-8 ${-40+i*9} h16" stroke="${c.l}" stroke-width="1.6" stroke-dasharray="3 2"/>`).join('')}`,
barque:(c,r)=>`<path d="M-30 -10 Q0 4 30 -10 L24 -2 Q0 8 -24 -2Z" fill="${c.f}"/><path d="M0 -10 V-46" stroke="${c.f}" stroke-width="2"/><path d="M2 -44 Q20 -30 2 -14Z" fill="${c.l}"/><path d="M-20 -6 L-30 6 M18 -6 L28 6" stroke="${c.f}" stroke-width="2"/>`,
lame:(c,r)=>`<path d="M-2 0 V-10 H-8 V-13 H8 V-10 H2 V0Z" fill="${c.f}"/><path d="M-3 -13 L-3 -50 L0 -56 L3 -50 L3 -13Z" fill="${c.l}" stroke="${c.f}"/><path d="M-26 -20 Q0 -44 26 -50" stroke="${c.g}" stroke-width="2" fill="none" opacity=".8"/>`,
chaine:(c,r)=>Array.from({length:6},(_,i)=>`<ellipse cx="${-18+i*7}" cy="${-8-i*7}" rx="5" ry="3.2" transform="rotate(${-45+i%2*90} ${-18+i*7} ${-8-i*7})" fill="none" stroke="${c.f}" stroke-width="2.6"/>`).join('')+`<path d="M16 -48 l4 -4 M18 -44 l5 -2" stroke="${c.g}" stroke-width="1.6"/>`,
balance:(c,r)=>`<path d="M0 0 V-46 M-22 -40 H22" stroke="${c.f}" stroke-width="2.4"/><path d="M-6 0 H6" stroke="${c.f}" stroke-width="3"/><path d="M-22 -40 L-30 -24 H-14Z M22 -40 L14 -20 H30Z" fill="${c.l}" stroke="${c.f}"/><circle cx="0" cy="-48" r="3" fill="${c.g}"/>`,
jarre:(c,r)=>`<path d="M-8 -44 H8 L6 -38 Q20 -30 18 -14 Q16 0 0 0 Q-16 0 -18 -14 Q-20 -30 -6 -38Z" fill="${c.f}" stroke="${c.l}"/><path d="M-16 -22 H16" stroke="${c.g}" stroke-width="2"/><path d="M-14 -16 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4" stroke="${c.l}" fill="none"/>`,
tesson:(c,r)=>`<path d="M-20 0 L-14 -30 L0 -40 L10 -26 L20 -32 L16 0Z" fill="${c.l}" stroke="${c.f}" stroke-width="1.6"/><path d="M-10 -22 Q0 -30 10 -20" stroke="${c.f}" fill="none"/>`,
pinceau:(c,r)=>`<path d="M-20 -6 L16 -46" stroke="${c.f}" stroke-width="4" stroke-linecap="round"/><path d="M16 -46 L24 -54 Q28 -50 22 -42Z" fill="${c.g}"/><path d="M-24 0 Q-10 -10 4 -2 Q16 4 26 -4" stroke="${c.g}" stroke-width="3" fill="none"/>`,
paravent:(c,r)=>[0,1,2].map(i=>`<path d="M${-24+i*16} 0 V-42 L${-8+i*16} ${-46+i%2*4} V${-4+i%2*4}Z" fill="${i%2?c.l:c.f}" stroke="${c.f}"/>`).join('')+`<path d="M-18 -30 q8 -8 14 0 M10 -28 q6 -6 10 2" stroke="${c.g}" fill="none"/>`,
dormeur:(c,r)=>`<path d="M-28 0 Q-28 -12 -16 -12 H20 Q28 -12 28 0Z" fill="${c.f}"/><circle cx="-18" cy="-16" r="5" fill="${c.f}"/><path d="M12 -44 a10 10 0 1 0 8 14 a8 8 0 0 1 -8 -14Z" fill="${c.g}"/><text x="-4" y="-26" font-size="9" fill="${c.l}" font-family="serif">z</text>`,
fumee:(c,r)=>[0,1,2].map(i=>`<path d="M${-10+i*10} 0 Q${-20+i*10} -14 ${-8+i*10} -24 Q${4+i*10} -34 ${-6+i*10} -48" stroke="${c.l}" stroke-width="${4-i}" fill="none" opacity=".75" stroke-linecap="round"/>`).join(''),
noeud:(c,r)=>`<path d="M-24 -46 H24" stroke="${c.f}" stroke-width="3"/>${Array.from({length:7},(_,i)=>`<path d="M${-20+i*7} -46 V${f1(-20+r()*16)}" stroke="${['#c2412f','#e8c33a',c.l,c.f][i%4]}" stroke-width="2"/>${[0,1].map(j=>`<circle cx="${-20+i*7}" cy="${f1(-38+j*8+r()*4)}" r="1.8" fill="${c.f}"/>`).join('')}`).join('')}`,
pont:(c,r)=>`<path d="M-30 0 V-16 Q0 -42 30 -16 V0 H22 V-12 Q0 -30 -22 -12 V0Z" fill="${c.f}"/><path d="M-30 -18 Q0 -44 30 -18" stroke="${c.l}" fill="none"/>`,
gerbe:(c,r)=>Array.from({length:9},(_,i)=>{const a=-PI/2+(i-4)*.16;return`<path d="M0 0 Q${f1(Math.cos(a)*8)} -20 ${f1(Math.cos(a)*24)} ${f1(Math.sin(a)*48)}" stroke="${c.l}" stroke-width="2" fill="none"/><ellipse cx="${f1(Math.cos(a)*24)}" cy="${f1(Math.sin(a)*48)}" rx="2" ry="4.5" fill="${c.g}"/>`}).join('')+`<path d="M-6 -14 Q0 -10 6 -14" stroke="${c.f}" stroke-width="3" fill="none"/>`,
bouclier:(c,r)=>r()<.5?SJ.ecu(c,r):SJ.rondache(c,r),
ecu:(c,r)=>`<path d="M0 -52 L22 -44 Q22 -14 0 0 Q-22 -14 -22 -44Z" fill="${c.f}" stroke="${c.l}" stroke-width="2"/><path d="M0 -42 V-10 M-12 -30 H12" stroke="${c.g}" stroke-width="2.4"/>`,
brise:(c,r)=>`<path d="M-2 -52 L-22 -44 Q-22 -14 -4 0 L2 -20 L-6 -30Z" fill="${c.f}" stroke="${c.l}" stroke-width="1.6"/><path d="M4 -54 L24 -46 Q24 -16 6 2 L10 -18 L2 -32Z" fill="${c.f}" stroke="${c.l}" stroke-width="1.6" transform="rotate(10 6 -20)"/>`,
rondache:(c,r)=>`<circle cx="0" cy="-26" r="24" fill="${c.f}" stroke="${c.l}" stroke-width="2"/><circle cx="0" cy="-26" r="7" fill="${c.g}"/>${[0,45,90,135,180,225,270,315].map(a=>`<circle cx="${f1(Math.cos(a*PI/180)*16)}" cy="${f1(-26+Math.sin(a*PI/180)*16)}" r="2" fill="${c.l}"/>`).join('')}`,
rouleau:(c,r)=>`<rect x="-16" y="-46" width="32" height="38" fill="${c.l}" stroke="${c.f}" stroke-width="1.6"/><rect x="-20" y="-50" width="40" height="6" rx="3" fill="${c.f}"/><rect x="-20" y="-10" width="40" height="6" rx="3" fill="${c.f}"/>${[0,1,2,3].map(i=>`<path d="M-11 ${-38+i*7} H${11-i%2*7}" stroke="${c.f}" stroke-width="1.4"/>`).join('')}<path d="M-4 -4 V4 L0 1 L4 4 V-4" fill="${c.g}"/>`,
ardoise:(c,r)=>`<rect x="-22" y="-48" width="44" height="34" rx="2" fill="#24303a" stroke="${c.f}" stroke-width="2.4"/>${[0,1,2].map(i=>`<path d="M-16 ${-40+i*9} H${14-i*6}" stroke="#fff" stroke-width="1.6" opacity=".85"/>`).join('')}<path d="M10 -22 l4 4 l8 -10" stroke="${c.g}" stroke-width="2.2" fill="none"/><path d="M-16 -14 L-20 0 M16 -14 L20 0" stroke="${c.f}" stroke-width="2.4"/>`,
lettre:(c,r)=>`<path d="M-24 -10 L-20 -40 L22 -44 L24 -14Z" fill="${c.l}" stroke="${c.f}" stroke-width="1.6"/><path d="M-20 -40 L2 -24 L22 -44" stroke="${c.f}" fill="none" stroke-width="1.4"/><circle cx="2" cy="-22" r="6" fill="#b3261e" stroke="${c.f}"/>`,
spirale:(c,r)=>`<path d="M0 -28 m-2 0a2 2 0 1 1 4 0a6 6 0 1 1 -12 0a10 10 0 1 1 20 0a14 14 0 1 1 -28 0a18 18 0 1 1 36 0" stroke="${c.g}" stroke-width="2.2" fill="none"/>`,
goutte:(c,r)=>`<path d="M0 -52 Q20 -24 20 -16 A20 20 0 0 1 -20 -16 Q-20 -24 0 -52Z" fill="${c.g}" stroke="${c.f}" stroke-width="1.6"/><path d="M-8 -20 Q-8 -10 2 -8" stroke="#fff" stroke-opacity=".6" fill="none" stroke-width="2"/>`,
feuille:(c,r)=>`<path d="M-20 0 Q-24 -40 18 -50 Q24 -10 -20 0Z" fill="${c.g}" stroke="${c.f}" stroke-width="1.6"/><path d="M-20 0 Q0 -24 18 -50" stroke="${c.f}" fill="none"/>`,
flocon:(c,r)=>`<g transform="translate(0 -28)" stroke="${c.l}" stroke-width="2.6" stroke-linecap="round">${[0,60,120].map(a=>`<path d="M0 -24 V24 M-5 -18 L0 -13 L5 -18 M-5 18 L0 13 L5 18" transform="rotate(${a})"/>`).join('')}</g>`};
/* mots du nom → sujet (on cherche dans le nom sans accents) */
const MOTS=[['vernis|peint|teint|pinceau|encre','pinceau'],['neige|givre|flocon|gel ','flocon'],['chien|meute|loup|matin|chacal|renard|hyene|chiot','chien'],['oiseau|corbeau|aigle|hibou|plume|heron|ibis|grue','oiseau'],['serpent|anguille|ver ','serpent'],['poisson|carpe|requin','poisson'],
 ['cerf|boeuf|taureau|bouc|elan|renne|belier','cornu'],['tortue','tortue'],['luciole|essaim|abeille|nuee','essaim'],['salamandre|lezard|gecko','lezard'],
 ['echo|voix|chant|choeur|hymne|cri','chanteur'],['masque|visage rabot','masque'],['coffre|cle |clef|serrure','coffre'],['lanterne|lampe|ambre|braise|brasier|bougie|torche','lanterne'],
 ['flamme|feu|brul|cendre ard|incend','flamme'],['cristal|joyau|gemme','cristal'],['cloche|carillon','cloche'],['trone|couronne|tribunal|cour |roi|reine|prevot','trone'],
 ['icone|portrait|effigie','icone'],['main|paume|doigt','main'],['oeil|regard|yeux','oeil'],['rempart|muraille|creneau|mur|tour |palissade','muraille'],
 ['arbre|bouleau|racine|seve|foret|sapin|ecorce','arbre'],['fleur|floraison|lotus|bourgeon|rose','fleur'],['stele|pierre|bloc|borne','stele'],['barque|rame|bateau|gondole|radeau','barque'],
 ['lame|epee|hache|lance|couteau|poignard','lame'],['chaine|fer |entrave','chaine'],['balance|vote|urne|bulletin|scrutin|assemblee|loi ','balance'],['jarre|vase|amphore|coupe|urne','jarre'],
 ['tesson|eclat|debris','tesson'],['paravent|voile|rideau','paravent'],['dorm|reve|sommeil|songe','dormeur'],['fumee|brume|cendre|vapeur','fumee'],
 ['corde|noeud|quipu|fil ','noeud'],['pont|passerelle','pont'],['riz|grain|epi|grenier|gerbe|recolte','gerbe'],['sceau|edit|lettre|registre|livre|parchemin|genealogie|archive|decret|cousue','document'],
 ['temoin|veilleu|garde|sentinelle|gardien|trappeur|inspecteur|conteu|lanciere|heros|vieille|pretre|scribe|juge|marchand|enfant|mere|pere|frere|soeur','figure']];
/* effet principal → sujet, quand le nom n'en donne pas */
const OPSJ={invoque:'chien',brulure:'flamme',deg:'lame',garde:'bouclier',pioche:'document',hesite:'oeil',affaiblit:'chaine',vulnerable:'brise',briseGarde:'brise',
  ignoreGarde:'lame',riposte:'bouclier',echo:'spirale',recup:'spirale',soin:'feuille',mana:'goutte',volVie:'goutte',pose:'spirale',reveil:'spirale'};
const opsDe=c=>{try{return(typeof c.ops==='function'?c.ops():c.ops)||[]}catch(e){return[]}};
const opPrincipal=c=>{const o=opsDe(c).map(x=>x[0]).filter(x=>!/^prix|^si$|^pose$|^reveil$/.test(x));return o[0]||null};
function sujetDe(k,c){const n=' '+sansAcc(typeof c.nom==='function'?c.nom():c.nom||'')+' ';
  for(const [re,s] of MOTS)if(new RegExp(re).test(n))return s;
  const o=opPrincipal(c);if(o==='invoque'){const t=sansAcc(String(c.txt?c.txt(k):''));for(const [re,s] of MOTS)if(new RegExp(re).test(t))return s;return['chien','cornu','oiseau','serpent'][hsh(k)%4]}
  return OPSJ[o]||'spirale'}

/* ---------- Effets visuels animés selon ce que fait la carte (au plus deux par carte) ---------- */
const FXOP={brulure:'braise',deg:'coup',ignoreGarde:'coup',garde:'lustre',riposte:'lustre',hesite:'brume',affaiblit:'brume',pioche:'page',recup:'page',
  echo:'onde',soin:'pouls',mana:'pouls',volVie:'pouls',invoque:'yeux',vulnerable:'fissure',briseGarde:'fissure'};
function effetsCarte(c,k,col){const vus=[];for(const o of opsDe(c)){const f=FXOP[o[0]];if(f&&vus.indexOf(f)<0)vus.push(f);if(vus.length>=2)break}
  const r=rng(k+'|fx');
  const F={braise:()=>Array.from({length:9},(_,i)=>`<circle class="fx-braise" cx="${f1(10+r()*140)}" cy="${f1(80+r()*16)}" r="${f1(1+r()*1.5)}" fill="${col.g}" style="--d:${f1(r()*3)}s"/>`).join(''),
    coup:()=>`<path class="fx-coup" d="M${f1(20+r()*30)} ${f1(20+r()*20)} L${f1(110+r()*30)} ${f1(60+r()*30)}" stroke="#fff" stroke-width="3" stroke-linecap="round" style="--d:${f1(r()*2)}s"/>`,
    lustre:()=>`<rect class="fx-lustre" x="-40" y="0" width="26" height="100" fill="#fff" opacity=".0" transform="skewX(-20)"/>`,
    brume:()=>[30,52,70].map((y,i)=>`<rect class="fx-brume" x="-20" y="${y}" width="120" height="7" rx="3.5" fill="#fff" style="--d:${i*1.3}s"/>`).join(''),
    page:()=>Array.from({length:4},()=>`<rect class="fx-page" x="${f1(20+r()*120)}" y="${f1(60+r()*20)}" width="6" height="8" fill="${col.l}" style="--d:${f1(r()*3)}s"/>`).join(''),
    onde:()=>`<circle class="fx-onde" cx="80" cy="56" r="10" fill="none" stroke="${col.g}" stroke-width="2"/><circle class="fx-onde" cx="80" cy="56" r="10" fill="none" stroke="${col.g}" stroke-width="2" style="--d:1.2s"/>`,
    pouls:()=>`<circle class="fx-pouls" cx="80" cy="54" r="34" fill="${col.g}" filter="url(#mz-flou)"/>`,
    yeux:()=>Array.from({length:3},()=>{const x=f1(15+r()*130),y=f1(30+r()*40);return`<g class="fx-yeux" style="--d:${f1(r()*3)}s"><circle cx="${x}" cy="${y}" r="1.4" fill="${col.g}"/><circle cx="${+x+5}" cy="${y}" r="1.4" fill="${col.g}"/></g>`}).join(''),
    fissure:()=>`<path class="fx-fissure" d="M${f1(60+r()*40)} 0 l-6 18 l10 10 l-8 20 l6 14" stroke="#fff" stroke-width="1.6" fill="none"/>`};
  return`<g class="fx">${vus.map(f=>F[f]()).join('')}</g>`}

/* ---------- Bordure propre à chaque carte : coins, rythme du filet et médaillons tirés de la carte ---------- */
function cadreCarte(k,coul,nP,ult){const r=rng(k+'|cadre'),coin=Math.floor(r()*4),dash=['', '4 2','1.2 2.4','8 2 2 2','2 1'][Math.floor(r()*5)],n=[5,6,8,10][Math.floor(r()*4)];
  const i=3,W=110,H=158,c=6;
  const d=coin===0?`M${i+c} ${i} H${W-i-c} Q${W-i} ${i} ${W-i} ${i+c} V${H-i-c} Q${W-i} ${H-i} ${W-i-c} ${H-i} H${i+c} Q${i} ${H-i} ${i} ${H-i-c} V${i+c} Q${i} ${i} ${i+c} ${i}Z`
    :coin===1?`M${i+c} ${i} H${W-i-c} L${W-i} ${i+c} V${H-i-c} L${W-i-c} ${H-i} H${i+c} L${i} ${H-i-c} V${i+c}Z`
    :coin===2?`M${i+c} ${i} H${W-i-c} V${i+c} H${W-i} V${H-i-c} H${W-i-c} V${H-i} H${i+c} V${H-i-c} H${i} V${i+c} H${i+c}Z`
    :`M${i+c} ${i} H${W-i-c} Q${W-i-c} ${i+c} ${W-i} ${i+c} V${H-i-c} Q${W-i-c} ${H-i-c} ${W-i-c} ${H-i} H${i+c} Q${i+c} ${H-i-c} ${i} ${H-i-c} V${i+c} Q${i+c} ${i+c} ${i+c} ${i}Z`;
  const etoile=(x,y,R)=>{let p='';for(let j=0;j<n*2;j++){const a=j*PI/n-PI/2,rr=j%2?R*.45:R;p+=(j?'L':'M')+f1(x+Math.cos(a)*rr)+' '+f1(y+Math.sin(a)*rr)}return`<path d="${p}Z" fill="${coul}"/>`};
  const nm=nP>=6||ult?3:nP>=3?2:1,ys=Array.from({length:nm},(_,j)=>f1(70+(j-(nm-1)/2)*26+(r()-.5)*8));
  const med=ys.map(y=>etoile(i,+y,3.4)+etoile(W-i,+y,3.4)).join('')+(nP>=4||ult?etoile(W/2,H-i,3.8):'');
  return`<svg class="kcadre" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="${coul}" stroke-width="${nP>=5||ult?2:1.5}" stroke-dasharray="${dash}" vector-effect="non-scaling-stroke"/>${med}</svg>`}

/* ---------- Texte de la carte : chiffres, prix et résonances mis en valeur ---------- */
function texteCoupe(t){t=String(t);const m=t.slice(25).search(/[.;:]\s/);if(m<0||t.length<70)return texteRiche(t);const i=25+m+1;
  return`<span class="kt1">${texteRiche(t.slice(0,i))}</span><span class="ktr"> ${texteRiche(t.slice(i).trim())}</span><span class="ksuite">…</span>`}
function texteRiche(t){t=String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
  t=t.replace(/(Prix\s*:[^.]*\.?)/g,'<span class="kprix">◆ $1</span>');
  t=t.replace(/\b(Braise|Givre|Sang|Racine|Sceau|Abîme)\b/g,(m)=>{const R=RES[sansAcc(m)];return R?`<span class="kreso" style="color:${R[0]}">${m}</span>`:m});
  return t.replace(/(\d+)/g,'<b>$1</b>')}

/* ---------- Scène complète d'une zone : ciel du pôle, biome, monument de la culture, élément du pôle ---------- */
const HEURES=['#f2a0b0','#3a3f8a','#c8ccd6','#ffe9a0','#e0884a','#7ac0b0','#b07ad0'];
function scene(P,uid,k,cc){const r=rng((k||P.id)+'|'+P.pole);if(cc&&k)P.teinte=mix(P.acc,HEURES[hsh(k)%HEURES.length],.38);[m,l,d]=P.m,a=P.acc,bk=bkey(P.biome),B=BIO[bk]||BIO.collines,neg=P.pole==='neg';
  const c={loin:mix(a,d,.45),mi:mix(m,a,.4),pres:mix(d,a,.22),acc:mix(a,'#ffffff',.45),eau:mix(m,a,.35),emb:mix(d,a,.2),embL:mix(a,'#ffffff',.35),mid:mix(d,'#000000',.4),feu:mix(a,'#fff3c0',.5),fx:mix(a,'#ffffff',.15)};
  const sj=cc?sujetDe(k,cc):null,cote=r()<.5?-1:1;
  const x=sj?80-cote*(26+r()*14):58+r()*44,mon=(MON_C[ckeyL(P.cult)]||MON_C.girih)(c);
  const cs={f:mix(d,'#000000',.35),l:mix(a,'#ffffff',.55),g:mix(a,'#fff3c0',.35)};
  const sc=(P.ult?1.42:P.mod==='RES'?1.12+.08*Math.min(3,P.L):1.3)*(sj?.62:1);
  const tex=neg?`<defs><pattern id="vh${uid}" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0 V3" stroke="${d}" stroke-opacity=".28" stroke-width="1"/></pattern></defs><rect width="160" height="100" fill="url(#vh${uid})"/>`
    :`<rect width="160" height="100" fill="url(#mz-girih)" opacity=".3"/>`;
  const rayons=P.ult?`<g opacity=".55">${Array.from({length:18},(_,i)=>{const t=i*PI/9;return`<path d="M${f1(x)} 52 L${f1(x+Math.cos(t)*120)} ${f1(52+Math.sin(t)*120)} L${f1(x+Math.cos(t+.08)*120)} ${f1(52+Math.sin(t+.08)*120)}Z" fill="${l}"/>`}).join('')}</g>`:'';
  const frise=P.ult?`<rect x="2" y="2" width="156" height="96" fill="none" stroke="${l}" stroke-width="3" stroke-dasharray="6 3 2 3"/><rect width="160" height="100" fill="url(#mz-girih)" opacity=".9"/>`:'';
  const halo=P.L>=4?`<ellipse cx="${f1(x)}" cy="56" rx="38" ry="30" fill="${P.L>=6?'#ffffff':a}" opacity="${P.L>=6?.45:.35}" filter="url(#mz-flou)"/>`:'';
  const pw=P.mod==='RES'?'':P.pole==='neg'?P.pm:P.pole==='pos'?P.pp:'';
  return ciel(P,r,uid)+rayons+B.loin(r,c)+halo+`<g transform="translate(${f1(x)} ${f1(90-82*sc)}) scale(${sc})" stroke="${mix(d,'#000000',.5)}" stroke-width="1.1" stroke-linejoin="round" paint-order="stroke" opacity="${sj?.5:1}">${mon}</g>`+B.pres(r,c)+effetPole(pw,c,r,P.L)+
    (sj?`<ellipse cx="${f1(80+cote*6)}" cy="58" rx="40" ry="34" fill="${cs.g}" opacity=".45" filter="url(#mz-flou)"/><g transform="translate(${f1(80+cote*(6+r()*8))} ${f1(97+r()*2)}) scale(${f1((P.ult?1.6:1.5)*(r()<.5?-1:1)*(.94+r()*.12))} ${f1((P.ult?1.6:1.5)*(.94+r()*.1))})" stroke="${cs.l}" stroke-width="1.3" stroke-linejoin="round" paint-order="stroke"><ellipse cx="0" cy="1" rx="22" ry="3.5" fill="#000" opacity=".35" stroke="none"/>${(SJ[sj]||SJ.spirale)(cs,r)}</g>`:'')+
    (cc?effetsCarte(cc,k,cs):'')+tex+frise}

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
/* ---------- Images IA (18 nov.) : peinture par carte dans img/cartes/, listée par cartes-images.js ; le dessin vectoriel reste en secours ---------- */
const slugI=t=>sansAcc(t).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
function fichierImage(k,c,P){const I=window.CARTES_IMG;if(!I||!I.size)return'';let f='';
  if(c.secret)f='S-'+slugI(c.secret);
  else if(k.includes('#'))f=k.replace('#','_').replace('-','m').replace('+','p');
  else if(P&&P.L>=1)f=P.id+'_'+(P.pole==='neg'?'m':'p')+Math.min(7,P.L);   /* carte de base : image de son palier actuel */
  return f&&I.has(f)?'img/cartes/'+f+'.webp':''}
const peint=(src,fond,fx)=>`<span class="kpeint">${fond.replace('<svg ','<svg class="kfond" ')}<img class="kimg" src="${src}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.classList.add('ko')">${fx?`<svg class="kfx" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">${fx}</svg>`:''}</span>`;
window.artCarte=function(k){const c=CK[k],uid='k'+(uidN++);
  if(c.secret||c.zs&&!c.z){const P=c.zs?infoZone(c.zs):null,sv=`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">${sceneSecret(c,P,uid)}</svg>`,im=fichierImage(k,c,null);return im?peint(im,sv,''):sv}
  const P=zoneDeCarte(k,c);
  if(!P){const a=ART[k]||ART.coup;return`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="vf${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0c0f"/><stop offset="1" stop-color="${a.fond?a.fond[1]:'#3a2a20'}"/></linearGradient></defs>
   <rect width="160" height="100" fill="url(#vf${uid})"/><rect width="160" height="100" fill="url(#mz-girih)"/>${a.d}</svg>`}
  P.m=VMANA[P.mana]||VMANA.Pierre;P.acc=accent(P);P.ult=!!c.ultime||(P.L>=7&&!!c.pose);
  const sv=`<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice">${scene(P,uid,k,c)}</svg>`,im=fichierImage(k,c,P);if(!im)return sv;
  const a=P.acc,d=P.m[2],fx=effetsCarte(c,k,{f:mix(d,'#000000',.35),l:mix(a,'#ffffff',.55),g:mix(a,'#fff3c0',.35)});
  return peint(im,sv,fx)};

const SORTE={CIT:'Défense',DON:'Attaque',RES:'Boost',ANT:'Invocation',MAR:'Loi'};
const longueur=t=>{const n=String(t).replace(/<[^>]+>/g,'').length;return n>290?' t5':n>210?' t4':n>140?' t3':n>85?' t2':n>45?' t1':''};
window.carteHTML=function(k,i){const c=CK[k],z=c.z,mt=typeof mtype==='function'?mtype(k):null,uid='h'+(uidN++),txt=c.txt(k),lg=longueur(txt);
  const gris=typeof enGris==='function'&&enGris(k),co=`<div class="co" style="${mt&&typeof MCOL!=='undefined'?'--mc:'+MCOL[mt]:''}">${c.cout}</div>`;
  const amb=typeof c.amb==='function'?c.amb():c.amb;const ambH=amb?`<div class="kamb">« ${amb} »</div>`:'';const txtR=texteCoupe(txt);
  /* carte de secret */
  if(c.secret||(c.zs&&!z)){const P=c.zs?infoZone(c.zs):null;
    return`<div class="cc kcarte secret${lg}${gris?' gris':''}">${co}<div class="ksceau" title="Secret">✦</div><div class="art">${artCarte(k)}</div><div class="cn">${c.nom()}</div>
     <div class="cz">Secret${P?' · '+P.nom.replace(/^(La |Le |Les |L')/,''):''}</div><div class="ct">${txtR}</div>${ambH}</div>`}
  /* carte commune */
  const P=z?zoneDeCarte(k,c):null;
  if(!P){const a=ART[k]||ART.coup;
    return`<div class="cc kcarte base${lg}${gris?' gris':''}" style="--kb:#c9a45c">${co}<div class="art">${artCarte(k)}</div><div class="cn">${c.nom()}</div><div class="cz">${a.sorte||''} · Commune</div><div class="ct">${txtR}</div></div>`}
  /* carte de zone */
  const V=VMANA[P.mana]||VMANA.Pierre,res=P.mod==='RES',ult=!res&&(!!c.ultime||(P.L>=7&&!!c.pose));
  const nP=res?Math.min(3,Math.max(1,P.L)):P.L,maxP=res?3:7,pw=res?'':(P.pole==='neg'?P.pm:P.pole==='pos'?P.pp:'');
  const coulP=res?'#e0a040':accent(P);
  const crest=pw?`<div class="kblason ${P.pole}" title="Pôle ${pw}"><svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor">${glypheP(pw)}</svg></div>`:'';
  const sorte=(ART[k]&&ART[k].sorte&&P.mod!=='MAR')?ART[k].sorte:SORTE[P.mod]||'';
  const ligne=[P.mana,pw||(res?'Niv. '+nP:'')].filter(Boolean).join(' · ');
  const resH=(c.pose||c.reveille)?`<div class="kresos">${c.pose?glypheR(c.pose,1):''}${c.pose&&c.reveille?'<b></b>':''}${c.reveille?glypheR(c.reveille,0):''}</div>`:'';
  const coZ=`<div class="co ${P.pole}" style="${mt&&typeof MCOL!=='undefined'?'--mc:'+MCOL[mt]:''}">${c.cout}</div>`;
  const cls=['cc','kcarte','z','m-'+sansAcc(P.mana),'p-'+P.pole,'L'+nP,ult?'ultime':'',res?'res':'',gris?'gris':'',lg.trim()].filter(Boolean).join(' ');
  return`<div class="${cls}" style="--kb:${V[0]};--kl:${V[1]};--kd:${V[2]};--kcA:${rgba(V[0],.28)};--kcB:${rgba(V[0],.8)};--pc:${coulP}">
   ${cadreCarte(k,V[1],nP,ult)}${nP>=5||ult?coins(P.mana,V[1],nP):''}${coZ}${crest}<div class="art">${artCarte(k)}${paliers(nP,maxP,coulP)}</div>${nP>=2||ult?bandeau(ckey(P.cult),V[1],uid):'<div class="kband vide"></div>'}${resH}
   <div class="cn">${c.nom()}</div><div class="cz">${ligne}</div><div class="ct">${txtR}</div>${nP>=4&&!ult?bandeau(ckey(P.cult),V[1],uid+'b').replace('kband','kband bas'):''}${ambH}${gris?'<div class="kgris">Mana gris · effet −25 %</div>':''}</div>`};

/* ---------- CSS propre au visuel 2.2 ---------- */
const css=document.createElement('style');css.textContent=`
.cc.kcarte{isolation:isolate}
.cc.kcarte .art{position:relative;flex:0 0 auto}
.kpeint{position:absolute;inset:0;display:block;overflow:hidden;background:#0d0c0f}
.kpeint>*{position:absolute;inset:0;width:100%;height:100%;display:block}
.kpeint .kfond{visibility:hidden}.kpeint.ko .kfond{visibility:visible}.kpeint.ko .kimg{display:none}
.kpeint .kimg{object-fit:cover}.kpeint .kfx{opacity:.4;mix-blend-mode:screen}
.kpeint::after{content:'';position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 calc(var(--u)*1.2) rgba(0,0,0,.55);background:linear-gradient(180deg,transparent 70%,rgba(8,7,10,.45))}
.cc.kcarte.p-neg .kimg{filter:saturate(.9) contrast(1.06)}.cc.kcarte.p-pos .kimg{filter:saturate(1.08)}
.cc.kcarte.secret .kimg{filter:sepia(.25)}
.cc.kcarte.ultime .kimg{animation:kvit 9s ease-in-out infinite alternate;animation-play-state:paused}
.cc.kcarte.ultime.f .kimg,.boite .cc.kcarte.ultime .kimg{animation-play-state:running}
@keyframes kvit{from{transform:scale(1)}to{transform:scale(1.07)}}
@media (prefers-reduced-motion:reduce){.cc.kcarte.ultime .kimg{animation:none}}
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
.kcadre{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;filter:drop-shadow(0 0 1px #000)}
.ct b{font-weight:600;color:#fff}
.ct .kprix{display:block;margin-top:.15em;color:#ffc6b8;font-weight:600}
.ct .kprix b{color:#ffb8a8}
.ct .kreso{font-weight:600}
.cc.kcarte.secret .ct b{color:#2a1f1a}
.kamb{border-top:1px solid rgba(255,255,255,.12);margin-top:.3em}
#cb-main .cc.kcarte.f .kamb{display:block}
/* effets animés : la carte choisie, les menus et les formes ultimes bougent ; le reste de la main reste calme */
.fx *{animation-play-state:paused}
.cc.kcarte.f .fx *,.boite .cc.kcarte .fx *,.cc.kcarte.ultime .fx *,#galerie .fx *{animation-play-state:running}
.fx-braise{animation:fxBraise 3s linear infinite;animation-delay:var(--d,0s)}
@keyframes fxBraise{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-70px);opacity:0}}
.fx-coup{stroke-dasharray:160;stroke-dashoffset:160;animation:fxCoup 2.6s ease-in infinite;animation-delay:var(--d,0s)}
@keyframes fxCoup{0%,60%{stroke-dashoffset:160;opacity:0}70%{opacity:.9}85%{stroke-dashoffset:0;opacity:.6}100%{stroke-dashoffset:0;opacity:0}}
.fx-lustre{animation:fxLustre 3.4s ease-in-out infinite}
@keyframes fxLustre{0%,40%{transform:translateX(0) skewX(-20deg);opacity:0}50%{opacity:.35}100%{transform:translateX(240px) skewX(-20deg);opacity:0}}
.fx-brume{opacity:.3;animation:fxBrume 7s ease-in-out infinite alternate;animation-delay:var(--d,0s)}
@keyframes fxBrume{to{transform:translateX(50px);opacity:.55}}
.fx-page{animation:fxPage 3.6s ease-out infinite;animation-delay:var(--d,0s);opacity:0}
@keyframes fxPage{0%{transform:translate(0,0) rotate(0);opacity:0}20%{opacity:.9}100%{transform:translate(12px,-60px) rotate(40deg);opacity:0}}
.fx-onde{transform-box:fill-box;transform-origin:center;animation:fxOnde 2.4s ease-out infinite;animation-delay:var(--d,0s)}
@keyframes fxOnde{0%{transform:scale(.5);opacity:.9}100%{transform:scale(5);opacity:0}}
.fx-pouls{animation:fxPouls 2.8s ease-in-out infinite;opacity:.15}
@keyframes fxPouls{50%{opacity:.45}}
.fx-yeux{animation:fxYeux 4s steps(1) infinite;animation-delay:var(--d,0s)}
@keyframes fxYeux{0%,88%{opacity:1}90%,94%{opacity:0}96%{opacity:1}}
.fx-fissure{opacity:0;animation:fxFissure 3s ease-in-out infinite}
@keyframes fxFissure{0%,70%{opacity:0}75%{opacity:.9}100%{opacity:0}}
@media (prefers-reduced-motion:reduce){.fx *{animation:none!important}}
.ksuite{display:none}
#cb-main .cc.kcarte:not(.f) .ktr{display:none}
#cb-main .cc.kcarte:not(.f) .ksuite{display:inline;color:var(--kl)}
#cb-main .cc.kcarte:not(.f) .art{height:calc(var(--u)*7.6)}
#cb-main .cc.kcarte:not(.f) .ct{font-size:calc(var(--u)*.9);line-height:1.25}
.kcadre path{stroke-width:2.2}
`;document.head.appendChild(css);
})();
