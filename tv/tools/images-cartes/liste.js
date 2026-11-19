/* Liste des cartes à illustrer par IA, avec un prompt par carte.
   Usage : node tv/tools/images-cartes/liste.js   (depuis la racine ; Playwright requis)
   Écrit tv/tools/images-cartes/cartes.json, lu par generer.py.
   Le nom de fichier d'une image doit rester celui que calcule fichierImage() dans tv/src/cartes-visuel.js. */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..','..','..');
const BIOME={'foret':'boreal taiga forest of birch and pine','fjord':'deep fjord with sheer cliffs','canyon':'red rock canyon','desert':'sand desert dunes','sable':'sand desert dunes',
 'ruine':'overgrown ruined city','oasis':'desert oasis with palms','recif':'coral reef lagoon','caverne':'crystal caverns','lande':'windswept heath moorland','delta':'river delta with reeds',
 'steppe':'endless grass steppe','falaise':'sea cliffs','volcan':'volcanic mountain with lava','iles':'floating islands','mangrove':'mangrove swamp','glacier':'glacier and ice fields'};
const CULT={'slave':'Slavic (wooden kremlin, birch-bark, onion domes)','chinoise':'Imperial Chinese (pagodas, jade, lacquer, edict scrolls)','azteque':'Aztec (stepped temples, feathers, obsidian)',
 'byzantin':'Byzantine (mosaics, gold icons, domes)','gothique':'Gothic (spires, bells, stained glass)','egypt':'Ancient Egyptian (obelisks, papyrus, gold)','nordique':'Norse (longhouses, runestones)',
 'zoulou':'Zulu (beadwork, cowhide shields, kraals)','ethiop':'Ethiopian (rock-hewn churches, processional crosses)','maya':'Maya (jungle pyramids, glyph stelae, jade)',
 'venit':'Venetian (canals, carnival masks, palazzi)','inca':'Inca (terraces, fitted stone walls, gold)','khmer':'Khmer (temple towers with stone faces, lotus)'};
const MANA={Feu:'crimson, ember orange and black',Glace:'pale ice blue, silver and deep navy',Eau:'teal, deep sea blue and pearl',Sève:'emerald green, moss and old gold',Pierre:'ochre, slate grey and rust',Vent:'pale grey, sky blue and white'};
const sans=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const cherche=(T,s)=>{s=sans(s);for(const k in T)if(s.includes(k))return T[k];return''};
const slug=s=>sans(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader']});const p=await nav.newPage();
  await p.route('**/three.min.js',r=>r.fulfill({body:fs.readFileSync(path.join(racine,'tv/android/assets/three.min.js')),contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto('file://'+path.join(racine,'tv/index.html'));await p.waitForFunction(()=>window.MZ);await p.evaluate(()=>MZ.start());await p.waitForTimeout(1500);
  const brut=await p.evaluate(()=>{const v=x=>typeof x==='function'?x():x,out=[];
    for(const k in CK){const c=CK[k],id=k.includes('#')?k.split('#')[0]:c.zs;const Z=id&&ZB[id];if(!Z)continue;const I=Z.info||{};
      if(!k.includes('#')&&!c.secret)continue;               /* cartes de base de zone : elles prennent l'image de leur palier */
      out.push({k,nom:v(c.nom),amb:v(c.amb)||'',secret:c.secret||'',ultime:!!v(c.ultime),zone:{id,mod:Z.mod||id,nom:I.nom,sur:I.sur||'',pm:I.pm,pp:I.pp,mana:(typeof ZMANA!=='undefined'&&ZMANA[id])||'Pierre'}})}
    return out});
  await nav.close();
  const liste=[];
  for(const c of brut){const z=c.zone;if(z.mod==='RES')continue;           /* les Ressources ne donnent plus de carte */
    const sur=z.sur.split(' · '),biome=cherche(BIOME,sur[2]||'')||'wild land',cult=cherche(CULT,sur[3]||'');
    let fichier,style,ton;
    if(c.secret){fichier='S-'+slug(c.secret);
      style='Detailed ink and sepia wash illustration on aged kraft paper, a found object in close-up, mysterious, museum study sketch';ton='';}
    else{const m=c.k.match(/#([-+])(\d)/),neg=m[1]==='-',n=+m[2];fichier=c.k.replace('#','_').replace('-','m').replace('+','p');
      style='Dark fantasy concept art painting, epic painterly style, dramatic cinematic lighting, bold close composition focused on one striking subject lit by dramatic rim light, visible faces and details, rich textures, highly detailed, full-bleed illustration';
      ton=(neg?`Mood of ${z.pm}: cold, ominous, shadowy, moonlit`:`Mood of ${z.pp}: warm, radiant, glowing, solemn`)+
        (n>=7?', mythic climax, monumental and awe-inspiring':n>=5?', powerful and intense':n<=2?', intimate and grounded':'')+'.';}
    const txt=t=>String(t).replace(/[«»"“”]/g,'').trim();
    const prompt=`${style}. Subject: ${txt(c.nom)}. ${txt(c.amb)} Setting: ${biome}${cult?', with '+cult+' motifs in costume, props and distant buildings':''}.${ton?' '+ton:''} Color palette: ${c.secret?'sepia, kraft brown and faded ink':MANA[z.mana]||MANA.Pierre}. Pure full-bleed wordless image, nothing written anywhere, no decorative frame.`;
    liste.push({k:c.k,fichier,nom:c.nom,zone:z.nom,prompt})}
  fs.writeFileSync(path.join(__dirname,'cartes.json'),JSON.stringify(liste,null,1));
  console.log(liste.length+' cartes à illustrer → tv/tools/images-cartes/cartes.json')})();
