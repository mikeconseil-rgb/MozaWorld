/* Liste des peintures de zones et des portraits de leurs personnages, avec un prompt par image.
   Usage : node tv/tools/images-zones/liste.js   (depuis la racine, après sh tv/build.sh ; Playwright requis)
   Écrit tv/tools/images-zones/zones.json, lu par generer.py.
   Demande du 28 novembre 2026 : les cartes quittent le jeu, on peint les zones (même format que les cartes, 480×320)
   et les personnages des zones (portraits carrés) pour les futures quêtes. Rien n'est branché dans le jeu pour l'instant. */
const path=require('path'),fs=require('fs');const {chromium}=require('playwright');
const racine=path.resolve(__dirname,'..','..','..');
const BIOME={'foret':'boreal taiga forest of birch and pine','fjord':'deep fjord with sheer cliffs','canyon':'red rock canyon','desert':'sand desert dunes','sable':'sand desert dunes',
 'ruine':'overgrown ruined city','oasis':'desert oasis with palms','recif':'coral reef lagoon','caverne':'crystal caverns','lande':'windswept heath moorland','delta':'river delta with reeds',
 'steppe':'endless grass steppe','falaise':'sea cliffs','volcan':'volcanic mountain with lava','iles':'floating islands in the sky','mangrove':'mangrove swamp','glacier':'glacier and ice fields',
 'toundra':'frozen tundra','jungle':'dense jungle','marais':'misty marshland','montagne':'high mountains','savane':'savanna','riziere':'terraced rice paddies','lac':'lake shore','champignon':'forest of giant mushrooms','sel':'white salt flats','archipel':'archipelago of small islands'};
const CULT={'slave':'Slavic (wooden kremlin, birch-bark, onion domes)','chinoise':'Imperial Chinese (pagodas, jade, lacquer)','azteque':'Aztec (stepped temples, feathers, obsidian)',
 'byzantin':'Byzantine (mosaics, gold icons, domes)','gothique':'Gothic (spires, bells, stained glass)','egypt':'Ancient Egyptian (obelisks, papyrus, gold)','nordique':'Norse (longhouses, runestones)',
 'zoulou':'Zulu (beadwork, cowhide shields, kraals)','ethiop':'Ethiopian (rock-hewn churches, processional crosses)','maya':'Maya (jungle pyramids, stelae, jade)',
 'venit':'Venetian (canals, carnival masks, palazzi)','inca':'Inca (terraces, fitted stone walls, gold)','khmer':'Khmer (temple towers with stone faces, lotus)','celte':'Celtic (standing stones, knotwork, roundhouses)',
 'perse':'Persian (glazed tiles, iwans, gardens)','japon':'Japanese (torii, paper lanterns, wooden temples)','grec':'Ancient Greek (marble columns, amphorae)','mongol':'Mongol (yurts, horse banners)','inuit':'Inuit (igloos, kayaks, carved bone, fur parkas)','moghol':'Mughal (marble domes, inlaid stone, gardens)',
 'andalou':'Andalusian Moorish (horseshoe arches, tiled courtyards, fountains)','polynes':'Polynesian (carved tiki, outrigger canoes, thatched halls)','romain':'Ancient Roman (aqueducts, columns, mosaics)','mesopot':'Mesopotamian (ziggurats, glazed brick, reed boats)'};
const MANA={Feu:'crimson, ember orange and black',Glace:'pale ice blue, silver and deep navy',Eau:'teal, deep sea blue and pearl',Sève:'emerald green, moss and old gold',Pierre:'ochre, slate grey and rust',Vent:'pale grey, sky blue and white'};
const TYPE={CIT:'a fortified citadel city',DON:'a dungeon stronghold and its wild surroundings',ANT:'a monster lair in the wild',ASS:'a gathering place and market of the clans',MAR:'a market fair',RES:'a place where a rare resource is harvested'};
/* Les 33 zones que le joueur voit en premier passent devant. */
const VUES='CIT DON045 ASS006 ANT ASS150 ASS155 DON MAR ASS152 ANT120 DON024 ASS012 DON030 DON106 ANT209 ANT020 ASS040 DON073 ANT072 ANT239 ASS074 ASS170 ASS059 DON013 ASS166 ASS128 ASS115 ASS116 ASS039 ASS075 ASS132 ASS084 ASS027 RES'.split(' ');
const PAS_UN_PERSONNAGE=/^(la paroi|les cristaux)$/i;
const sans=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const cherche=(T,s)=>{s=sans(s);for(const k in T)if(s.includes(k))return T[k];return''};
const slug=s=>sans(s).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
const txt=t=>String(t||'').replace(/[«»"“”]/g,'').replace(/\s+/g,' ').trim();
const MOTS={bonnet:'a knitted wool cap',mitre:'a tall embroidered mitre',registre:'a thick ledger book',voile:'a headscarf veil',chapka:'a fur ushanka hat',lanterne:'a lantern',fusil:'an old hunting musket',toque:'a fur-trimmed cap',couronne:'a crown',capuche:'a hood',baton:'a walking staff',livre:'a ledger book',sac:'a grain sack',cles:'a ring of keys',epee:'a sword'};
(async()=>{
  const nav=await chromium.launch({args:['--no-sandbox','--use-gl=swiftshader','--enable-unsafe-swiftshader']});const p=await nav.newPage();
  await p.route('**/three.min.js',r=>r.fulfill({body:fs.readFileSync(path.join(racine,'tv/android/assets/three.min.js')),contentType:'application/javascript'}));
  await p.route(/^https?:\/\/(?!.*three\.min\.js)/,r=>r.abort());
  await p.goto('file://'+path.join(racine,'tv/index.html'));await p.waitForFunction(()=>window.MZ);await p.evaluate(()=>MZ.start());await p.waitForTimeout(1500);
  const brut=await p.evaluate(()=>{const Z={},pal=x=>Array.isArray(x)?x.map(String):[];
    const F=typeof FICHES!=='undefined'?FICHES:{};
    for(const z of (typeof ZW!=='undefined'?ZW:[])){const d=z.d||{},f=F[z.id]||{};
      Z[z.id]={id:z.id,nom:f.nom||d.nom,type:d.type||'',biome:d.biome||'',culture:d.culture||'',mana:d.mana||'',pm:f.pm||d.pm,pp:f.pp||d.pp,pal:pal(f.pal)}}
    for(const id in ZB){const z=ZB[id],I=z.info||{},s=String(I.sur||'').split(' · '),a=Z[id]||(Z[id]={id,pal:[]});
      a.nom=a.nom||I.nom;a.type=a.type||s[0]||'';a.biome=a.biome||s[2]||'';a.culture=a.culture||(s[3]||'').replace(/^Inspiration /,'');
      a.mana=a.mana||(typeof ZMANA!=='undefined'&&ZMANA[id])||'';a.pm=a.pm||I.pm;a.pp=a.pp||I.pp;
      if(!a.pal.filter(Boolean).length)a.pal=pal(I.pal)}
    const persos=[];
    if(typeof QUETES!=='undefined')for(const id in QUETES)for(const k in (QUETES[id].pnj||{})){const q=QUETES[id].pnj[k];persos.push({zone:id,nom:q.nom,role:q.role||'',look:q.look||{}})}
    if(typeof SCENARIOS!=='undefined')for(const id in SCENARIOS)String(SCENARIOS[id].perso||'').split(/,\s*(?=l[ea'’]|[A-ZÀ-Ý])/).forEach(n=>{n=n.trim();if(n)persos.push({zone:id,nom:n,role:'',look:{}})});
    return {Z,persos}});
  await nav.close();
  const Z=brut.Z,liste=[];
  const ordre=id=>{const i=VUES.indexOf(id);if(i>=0)return i;const m=id.slice(0,3);return 100+['CIT','DON','ASS','ANT','MAR','RES'].indexOf(m)*1000+(+id.slice(3)||0)};
  const decor=z=>{const biome=cherche(BIOME,z.biome)||'wild land',cult=cherche(CULT,z.culture);return {biome,cult}};
  for(const id of Object.keys(Z).sort((a,b)=>ordre(a)-ordre(b))){const z=Z[id];if(!z.nom)continue;const {biome,cult}=decor(z);
    const scene=txt(z.pal[2]||z.pal[3]||z.pal[1]||'').replace(/^.*tirée au sort\..*$/,'');
    const prompt=`Dark fantasy concept art painting, epic painterly style, dramatic cinematic lighting, wide establishing view of a place seen from a vantage point, strong depth, atmospheric perspective, rich textures, highly detailed, full-bleed illustration. `+
      `Place: ${txt(z.nom)}, ${TYPE[id.slice(0,3)]||'a strange place'}. Setting: ${biome}${cult?', with '+cult+' architecture and motifs':''}.${scene?' Scene: '+scene:''} `+
      `Mood between ${txt(z.pm)} and ${txt(z.pp)}: quiet, weathered, lived-in, a few tiny figures for scale. Color palette: ${MANA[z.mana]||MANA.Pierre}. Pure full-bleed wordless image, nothing written anywhere, no title, no caption, no lettering, no signs, no border, no corner ornaments.`;
    liste.push({k:id,fichier:id,genre:'zone',nom:z.nom,zone:z.nom,rang:ordre(id),prompt})}
  const vus=new Set();let n=0;
  for(const q of brut.persos){if(PAS_UN_PERSONNAGE.test(q.nom))continue;const z=Z[q.zone];if(!z)continue;const fichier=q.zone+'-'+slug(q.nom);if(vus.has(fichier))continue;vus.add(fichier);
    const {biome,cult}=decor(z),L=q.look,det=[];
    if(L.coiffe)det.push('wearing '+(MOTS[L.coiffe]||L.coiffe));
    if(L.barbe!=null)det.push('full beard');if(L.objet)det.push('holding '+(MOTS[L.objet]||L.objet));
    const prompt=`Dark fantasy character portrait painting, epic painterly style, head and shoulders, three-quarter view, expressive weathered face looking at the viewer, dramatic rim light, rich textures, highly detailed, full-bleed illustration. `+
      `Character: ${txt(q.nom)}${q.role?', '+txt(q.role):''}, an inhabitant of ${txt(z.nom)}.${det.length?' Details: '+det.join(', ')+'.':''} `+
      `${cult?cult.split(' (')[0]+' costume and jewelry. ':''}Blurred background: ${biome}. Color palette: ${MANA[z.mana]||MANA.Pierre}. Pure full-bleed wordless image, nothing written anywhere, no decorative frame.`;
    /* un portrait toutes les trois images environ, tant qu'il en reste */
    liste.push({k:fichier,fichier:'portraits/'+fichier,genre:'portrait',nom:q.nom,zone:z.nom,rang:(n++)*3+1.5,prompt})}
  liste.sort((a,b)=>a.rang-b.rang);
  fs.writeFileSync(path.join(__dirname,'zones.json'),JSON.stringify(liste,null,1));
  const sansDecor=Object.values(Z).filter(z=>z.nom&&(!cherche(BIOME,z.biome)||!cherche(CULT,z.culture)));
  console.log(liste.filter(x=>x.genre==='zone').length+' zones et '+liste.filter(x=>x.genre==='portrait').length+' portraits → tv/tools/images-zones/zones.json');
  if(sansDecor.length)console.log('sans biome ou culture reconnus : '+sansDecor.length+' ; '+[...new Set(sansDecor.map(z=>z.biome+' / '+z.culture))].slice(0,40).join(' | '))})();
