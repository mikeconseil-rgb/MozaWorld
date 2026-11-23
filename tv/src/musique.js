/* MozaWorld : musique « MIDI » par zone (17 nov.).
   Chaque zone a son air : classique du domaine public, comptine populaire ou air original dans l'esprit des jeux 16 bits
   (aucune mélodie de jeu vidéo reprise : seulement le style). Les notes sont écrites ici et jouées par un petit
   synthétiseur Web Audio, sans fichier son à télécharger.
   Au niveau 0, on n'entend que la trame principale (la mélodie seule). À chaque palier vers +7 ou vers −7, une couche
   s'ajoute : basse (1), accords (2), percussions (3), arpège ou canon (4), accords enrichis et mélodie doublée (5),
   basse marchante, ornements ou trémolo (6), harmonie à la tierce et grand final (7).
   Le pôle colore l'arrangement : vers −7 l'air passe en mineur puis en mode sombre (phrygien ou mineur harmonique),
   ralentit et descend ; vers +7 il s'éclaire (dorien, majeur, lydien), accélère et monte. Le type de tuile choisit le
   rythme et l'instrument de base, le mana de la zone choisit les timbres des pôles.
   Notation des airs : NOTE+OCTAVE[:durée], durée en unités (u unités par temps), R = silence, | = barre de mesure.
   Accords : un ou deux par mesure (C, Am, G7, Dmaj7, Bbm, F#, Esus4, Bdim). */
const MUS_AIRS={
  /* ---------- Comptines populaires (traditionnelles, domaine public) ---------- */
  frere:{nom:'Frère Jacques',src:'comptine traditionnelle (XVIIIe s.)',cat:'comptine',ton:'C',mode:'maj',bpm:100,u:2,bar:8,canon:16,
    mel:'C4:2 D4:2 E4:2 C4:2|C4:2 D4:2 E4:2 C4:2|E4:2 F4:2 G4:4|E4:2 F4:2 G4:4|G4 A4 G4 F4 E4:2 C4:2|G4 A4 G4 F4 E4:2 C4:2|C4:2 G3:2 C4:4|C4:2 G3:2 C4:4',
    acc:'C|C|C|C|C|C|C G|C'},
  clair:{nom:'Au clair de la lune',src:'chanson traditionnelle française',cat:'comptine',ton:'C',mode:'maj',bpm:92,u:2,bar:8,
    mel:'C4:2 C4:2 C4:2 D4:2|E4:4 D4:4|C4:2 E4:2 D4:2 D4:2|C4:8|C4:2 C4:2 C4:2 D4:2|E4:4 D4:4|C4:2 E4:2 D4:2 D4:2|C4:8|D4:2 D4:2 D4:2 D4:2|A3:4 A3:4|D4:2 C4:2 B3:2 A3:2|G3:8|C4:2 C4:2 C4:2 D4:2|E4:4 D4:4|C4:2 E4:2 D4:2 D4:2|C4:8',
    acc:'C|C G|C G|C|C|C G|C G|C|G|Dm|G|G|C|C G|C G|C'},
  twinkle:{nom:'Ah ! vous dirai-je, maman',src:'air populaire français (1761), varié par Mozart',cat:'comptine',ton:'C',mode:'maj',bpm:104,u:2,bar:8,
    mel:'C4:2 C4:2 G4:2 G4:2|A4:2 A4:2 G4:4|F4:2 F4:2 E4:2 E4:2|D4:2 D4:2 C4:4|G4:2 G4:2 F4:2 F4:2|E4:2 E4:2 D4:4|G4:2 G4:2 F4:2 F4:2|E4:2 E4:2 D4:4|C4:2 C4:2 G4:2 G4:2|A4:2 A4:2 G4:4|F4:2 F4:2 E4:2 E4:2|D4:2 D4:2 C4:4',
    acc:'C|F C|F C|G C|C F|C G|C F|C G|C|F C|F C|G C'},
  mary:{nom:'Marie avait un petit agneau',src:'comptine traditionnelle (1830)',cat:'comptine',ton:'C',mode:'maj',bpm:112,u:2,bar:8,
    mel:'E4:2 D4:2 C4:2 D4:2|E4:2 E4:2 E4:4|D4:2 D4:2 D4:4|E4:2 G4:2 G4:4|E4:2 D4:2 C4:2 D4:2|E4:2 E4:2 E4:2 E4:2|D4:2 D4:2 E4:2 D4:2|C4:8',
    acc:'C|C|G|C|C|C|G|C'},
  london:{nom:'Le pont de Londres',src:'comptine traditionnelle anglaise',cat:'comptine',ton:'C',mode:'maj',bpm:108,u:2,bar:8,
    mel:'G4:3 A4:1 G4:2 F4:2|E4:2 F4:2 G4:4|D4:2 E4:2 F4:4|E4:2 F4:2 G4:4|G4:3 A4:1 G4:2 F4:2|E4:2 F4:2 G4:4|D4:4 G4:4|E4:2 C4:6',
    acc:'C|C|G|C|C|C|G|C'},
  row:{nom:'Rame, rame, rameurs',src:'comptine traditionnelle (1852)',cat:'comptine',ton:'C',mode:'maj',bpm:70,u:2,pulse:3,bar:6,canon:12,
    mel:'C4:3 C4:3|C4:2 D4:1 E4:3|E4:2 D4:1 E4:2 F4:1|G4:6|C5:1 C5:1 C5:1 G4:1 G4:1 G4:1|E4:1 E4:1 E4:1 C4:1 C4:1 C4:1|G4:2 F4:1 E4:2 D4:1|C4:6',
    acc:'C|C|C|C|C|C|G|C'},
  berceuse:{nom:'Berceuse',src:'Johannes Brahms (1868)',cat:'classique',ton:'C',mode:'maj',bpm:66,u:2,bar:6,
    mel:'G4:4 E4:1 E4:1|G4:4 E4:1 G4:1|C5:2 B4:3 A4:1|A4:2 G4:2 D4:1 E4:1|F4:2 D4:2 D4:1 E4:1|F4:4 D4:1 F4:1|B4:1 A4:1 G4:2 B4:2|C5:4 C4:1 C4:1|C5:4 A4:1 F4:1|G4:4 E4:1 C4:1|F4:2 G4:2 A4:2|G4:4 C4:1 C4:1|C5:4 A4:1 F4:1|G4:4 E4:1 C4:1|F4:1 E4:1 D4:2 G3:2|C4:4 E4:1 E4:1',
    acc:'C|C|F|G|G|G|G7|C|F|C|F|C|F|C|G|C'},
  /* ---------- Classique du domaine public ---------- */
  nachtmusik:{nom:'Une petite musique de nuit',src:'Wolfgang Amadeus Mozart (1787)',cat:'classique',ton:'G',mode:'maj',bpm:120,u:2,bar:8,
    mel:'G4:2 R:1 D4:1 G4:2 R:1 D4:1|G4:1 D4:1 G4:1 B4:1 D5:4|C5:2 R:1 A4:1 C5:2 R:1 A4:1|C5:1 A4:1 F#4:1 A4:1 D4:4|G4:2 R:1 D4:1 G4:2 R:1 D4:1|G4:1 D4:1 G4:1 B4:1 D5:4|C5:1 A4:1 F#4:1 A4:1 B4:1 G4:1 F#4:1 A4:1|G4:6 R:2',
    acc:'G|G|D|D|G|G|D G|G'},
  turca:{nom:'Marche turque',src:'Wolfgang Amadeus Mozart (1783)',cat:'classique',ton:'A',mode:'min',bpm:116,u:4,bar:8,
    mel:'B4:1 A4:1 G#4:1 A4:1 C5:4|D5:1 C5:1 B4:1 C5:1 E5:4|F5:1 E5:1 D#5:1 E5:1 B5:1 A5:1 G#5:1 A5:1|B5:1 A5:1 G#5:1 A5:1 C6:4|A5:2 B5:2 C6:2 B5:2|A5:2 G#5:2 A5:2 E5:2|F5:2 D5:2 C5:2 B4:2|A4:8',
    acc:'Am|Am|Am|Am|Am|E Am|Dm E|Am'},
  elise:{nom:'Lettre à Élise',src:'Ludwig van Beethoven (1810)',cat:'classique',ton:'A',mode:'min',bpm:66,u:4,bar:6,
    mel:'E5:1 D#5:1 E5:1 B4:1 D5:1 C5:1|A4:2 R:1 C4:1 E4:1 A4:1|B4:2 R:1 E4:1 G#4:1 B4:1|C5:2 R:1 E4:1 E5:1 D#5:1|E5:1 D#5:1 E5:1 B4:1 D5:1 C5:1|A4:2 R:1 C4:1 E4:1 A4:1|B4:2 R:1 E4:1 C5:1 B4:1|A4:4 E5:1 D#5:1',
    acc:'Am|Am|E|Am|Am|Am|E|Am'},
  ode:{nom:'Ode à la joie',src:'Ludwig van Beethoven (1824)',cat:'classique',ton:'C',mode:'maj',bpm:112,u:2,bar:8,
    mel:'E4:2 E4:2 F4:2 G4:2|G4:2 F4:2 E4:2 D4:2|C4:2 C4:2 D4:2 E4:2|E4:3 D4:1 D4:4|E4:2 E4:2 F4:2 G4:2|G4:2 F4:2 E4:2 D4:2|C4:2 C4:2 D4:2 E4:2|D4:3 C4:1 C4:4|D4:2 D4:2 E4:2 C4:2|D4:2 E4:1 F4:1 E4:2 C4:2|D4:2 E4:1 F4:1 E4:2 D4:2|C4:2 D4:2 G3:4|E4:2 E4:2 F4:2 G4:2|G4:2 F4:2 E4:2 D4:2|C4:2 C4:2 D4:2 E4:2|D4:3 C4:1 C4:4',
    acc:'C|G|C|G|C|G|C|G C|G|C|G|G|C|G|C|G C'},
  menuet:{nom:'Menuet en sol',src:'Christian Petzold, carnet d’Anna Magdalena Bach (1725)',cat:'classique',ton:'G',mode:'maj',bpm:112,u:2,bar:6,
    mel:'D5:2 G4:1 A4:1 B4:1 C5:1|D5:2 G4:2 G4:2|E5:2 C5:1 D5:1 E5:1 F#5:1|G5:2 G4:2 G4:2|C5:2 D5:1 C5:1 B4:1 A4:1|B4:2 C5:1 B4:1 A4:1 G4:1|F#4:2 G4:1 A4:1 B4:1 G4:1|A4:6|D5:2 G4:1 A4:1 B4:1 C5:1|D5:2 G4:2 G4:2|E5:2 C5:1 D5:1 E5:1 F#5:1|G5:2 G4:2 G4:2|C5:2 D5:1 C5:1 B4:1 A4:1|B4:2 C5:1 B4:1 A4:1 G4:1|A4:2 B4:1 A4:1 G4:1 F#4:1|G4:6',
    acc:'G|G|C|G|C|G|D|D|G|G|C|G|C|G|D|G'},
  canon:{nom:'Canon en ré',src:'Johann Pachelbel (vers 1690)',cat:'classique',ton:'D',mode:'maj',bpm:72,u:2,bar:8,canon:32,
    mel:'F#5:4 E5:4|D5:4 C#5:4|B4:4 A4:4|B4:4 C#5:4|D5:4 C#5:4|B4:4 A4:4|G4:4 F#4:4|G4:4 E4:4|D4:1 F#4:1 A4:1 G4:1 F#4:1 D4:1 F#4:1 E4:1|D4:1 B3:1 D4:1 A4:1 G4:1 B4:1 A4:1 G4:1|F#4:1 D4:1 E4:1 C#4:1 D4:1 F#4:1 A4:1 B4:1|G4:1 B4:1 A4:1 G4:1 F#4:1 E4:1 F#4:1 A4:1',
    acc:'D A|Bm F#m|G D|G A|D A|Bm F#m|G D|G A|D A|Bm F#m|G D|G A'},
  toccata:{nom:'Toccata en ré mineur',src:'Jean-Sébastien Bach (vers 1704)',cat:'classique',ton:'D',mode:'min',bpm:76,u:2,bar:8,
    mel:'A5:1 G5:1 A5:6|G5:1 F5:1 E5:1 D5:1 C#5:4|D5:8|A4:1 G4:1 A4:6|E4:1 F4:1 C#4:2 D4:4|A3:1 G3:1 A3:6|G3:1 F3:1 E3:1 D3:1 C#3:4|D3:8',
    acc:'A|A|Dm|A|A Dm|A|A|Dm'},
  montagne:{nom:'Dans l’antre du roi de la montagne',src:'Edvard Grieg (1875)',cat:'classique',ton:'B',mode:'min',bpm:96,u:2,bar:8,
    mel:'B3:1 C#4:1 D4:1 E4:1 F#4:1 D4:1 F#4:2|F4:1 C#4:1 F4:2 E4:1 C4:1 E4:2|B3:1 C#4:1 D4:1 E4:1 F#4:1 D4:1 F#4:1 B4:1|A4:1 F#4:1 D4:1 F#4:1 A4:4|B3:1 C#4:1 D4:1 E4:1 F#4:1 D4:1 F#4:2|F4:1 C#4:1 F4:2 E4:1 C4:1 E4:2|B3:1 C#4:1 D4:1 E4:1 F#4:1 D4:1 F#4:1 B4:1|A4:1 F#4:1 D4:1 F#4:1 B4:4',
    acc:'Bm|F# C|Bm|D|Bm|F# C|Bm|D Bm'},
  largo:{nom:'Largo du Nouveau Monde',src:'Antonín Dvořák (1893)',cat:'classique',ton:'C',mode:'maj',bpm:60,u:2,bar:8,
    mel:'E4:3 G4:1 G4:4|E4:3 D4:1 C4:4|D4:2 E4:2 G4:2 E4:2|D4:8|E4:3 G4:1 G4:4|E4:3 D4:1 C4:4|D4:2 E4:2 D4:2 C4:2|C4:8',
    acc:'C|F C|G|G|C|F C|G|C'},
  greensleeves:{nom:'Greensleeves',src:'chanson anglaise du XVIe siècle',cat:'classique',ton:'A',mode:'min',bpm:60,u:2,pulse:3,bar:6,
    mel:'C5:2 D5:1 E5:1.5 F5:.5 E5:1|D5:2 B4:1 G4:1.5 A4:.5 B4:1|C5:2 A4:1 A4:1.5 G#4:.5 A4:1|B4:2 G#4:1 E4:2 A4:1|C5:2 D5:1 E5:1.5 F5:.5 E5:1|D5:2 B4:1 G4:1.5 A4:.5 B4:1|C5:1.5 B4:.5 A4:1 G#4:1.5 F#4:.5 G#4:1|A4:3 R:2 A4:1',
    acc:'Am|G|Am|E|Am|G|Am E|Am'},
  korobeiniki:{nom:'Korobeïniki',src:'chanson populaire russe (1861)',cat:'classique',ton:'A',mode:'min',bpm:132,u:2,bar:8,
    mel:'E5:2 B4:1 C5:1 D5:2 C5:1 B4:1|A4:2 A4:1 C5:1 E5:2 D5:1 C5:1|B4:3 C5:1 D5:2 E5:2|C5:2 A4:2 A4:4|D5:3 F5:1 A5:2 G5:1 F5:1|E5:3 C5:1 E5:2 D5:1 C5:1|B4:2 B4:1 C5:1 D5:2 E5:2|C5:2 A4:2 A4:4',
    acc:'E|Am|E|Am|Dm|C|E|Am'},
  diesirae:{nom:'Dies iræ',src:'chant grégorien (XIIIe s.)',cat:'classique',ton:'D',mode:'min',bpm:72,u:2,bar:8,
    mel:'F4:2 E4:2 F4:2 D4:2|E4:2 C4:2 D4:4|F4:2 F4:2 G4:2 F4:2|E4:2 D4:2 C4:2 E4:2|F4:2 E4:2 D4:4|F4:2 E4:2 F4:2 D4:2|E4:2 C4:2 D4:4|R:8',
    acc:'Dm|C Dm|Dm|C|Dm|Dm|C Dm|Dm'},
  funebre:{nom:'Marche funèbre',src:'Frédéric Chopin (1839)',cat:'classique',ton:'Bb',mode:'min',bpm:52,u:2,bar:8,
    mel:'Bb3:4 Bb3:3 Bb3:1|Bb3:4 Db4:3 C4:1|C4:3 Bb3:1 Bb3:3 A3:1|Bb3:8|Bb3:4 Bb3:3 Bb3:1|Bb3:4 Db4:3 C4:1|C4:3 Bb3:1 Bb3:3 A3:1|Bb3:8',
    acc:'Bbm|Bbm|F Bbm|Bbm|Bbm|Bbm|F Bbm|Bbm'},
  gymno:{nom:'Gymnopédie no 1',src:'Erik Satie (1888)',cat:'classique',ton:'D',mode:'maj',bpm:72,u:2,bar:6,
    mel:'R:2 F#5:2 A5:2|G5:2 F#5:2 C#5:2|B4:2 C#5:2 D5:2|A4:6|F#4:6|F#4:6|R:2 F#5:2 A5:2|G5:2 F#5:2 C#5:2|B4:2 C#5:2 D5:2|A4:6|C#5:6|F#5:6',
    acc:'Gmaj7|Dmaj7|Gmaj7|Dmaj7|Gmaj7|Dmaj7|Gmaj7|Dmaj7|Gmaj7|Dmaj7|Gmaj7|Dmaj7'},
  cancan:{nom:'Galop infernal (French cancan)',src:'Jacques Offenbach (1858)',cat:'classique',ton:'C',mode:'maj',bpm:150,u:2,bar:4,
    mel:'C4:4|D4:1 F4:1 E4:1 D4:1|G4:2 G4:2|G4:1 A4:1 E4:1 F4:1|D4:2 D4:2|D4:1 F4:1 E4:1 D4:1|C4:1 C5:1 B4:1 A4:1|G4:1 F4:1 E4:1 D4:1|C4:4|D4:1 F4:1 E4:1 D4:1|G4:2 G4:2|G4:1 A4:1 E4:1 F4:1|D4:2 D4:2|D4:1 F4:1 E4:1 D4:1|C4:1 G4:1 D4:1 E4:1|C4:4',
    acc:'C|G|C|C|G|G|C|G|C|G|C|C|G|G|G|C'},
  /* ---------- Airs originaux, écrits pour MozaWorld dans l'esprit des jeux 16 bits ---------- */
  marche:{nom:'La Marche des Tessons',src:'air original MozaWorld',cat:'original',ton:'C',mode:'maj',bpm:118,u:2,bar:8,
    mel:'G4:3 C5:1 E5:2 G5:2|F5:3 E5:1 D5:4|E5:2 C5:2 A4:2 F5:2|D5:6 R:2|G4:3 C5:1 E5:2 G5:2|A5:3 G5:1 F5:2 A5:2|G5:2 E5:2 D5:2 B4:2|C5:6 R:2',
    acc:'C|F G|Am F|G|C|F|C G|C'},
  halles:{nom:'Les Halles de Givre',src:'air original MozaWorld',cat:'original',ton:'F',mode:'maj',bpm:132,u:2,bar:6,
    mel:'C5:2 A4:1 C5:1 F5:2|E5:2 D5:2 C5:2|Bb4:2 G4:1 Bb4:1 E5:2|D5:2 C5:2 Bb4:2|A4:2 F4:1 A4:1 C5:2|D5:2 F5:2 A5:2|G5:2 E5:2 C5:2|F5:6',
    acc:'F|C|C7|Gm|F|Dm|C|F'},
  gouffre:{nom:'Le Gouffre aux Lucioles',src:'air original MozaWorld',cat:'original',ton:'A',mode:'min',bpm:84,u:2,bar:8,
    mel:'A4:2 E5:2 D5:1 C5:1 B4:2|C5:2 G4:2 A4:4|A4:2 E5:2 G5:1 F5:1 E5:2|D5:4 B4:4|C5:2 A4:2 F5:2 E5:2|D5:2 B4:2 G4:4|A4:2 C5:2 B4:1 G4:1 E4:2|A4:8',
    acc:'Am|C Am|Am|G|F|G|Am E|Am'},
  forge:{nom:'La Forge sous le Puits',src:'air original MozaWorld',cat:'original',ton:'D',mode:'min',bpm:104,u:2,bar:8,
    mel:'D4:1 D4:1 F4:1 D4:1 G#4:2 A4:2|D4:1 D4:1 F4:1 D4:1 C5:2 Bb4:2|A4:1 A4:1 G4:1 F4:1 E4:2 F4:2|D4:6 R:2|D5:1 D5:1 F5:1 D5:1 G#5:2 A5:2|D5:1 D5:1 F5:1 D5:1 C6:2 Bb5:2|A5:1 G5:1 F5:1 E5:1 F5:2 E5:2|D5:6 R:2',
    acc:'Dm|Dm Gm|Dm A|Dm|Dm|Dm Gm|Dm A|Dm'},
  voiles:{nom:'Voiles sur le Récif',src:'air original MozaWorld',cat:'original',ton:'G',mode:'maj',bpm:66,u:2,pulse:3,bar:6,
    mel:'D5:3 B4:2 G4:1|A4:2 B4:1 C5:3|B4:3 G4:2 E4:1|D4:6|E4:2 G4:1 C5:3|B4:2 A4:1 G4:3|A4:2 F#4:1 D4:2 F#4:1|G4:6',
    acc:'G|Am|Em|D|C|G|D|G'},
  lanternes:{nom:'Le Bal des Lanternes',src:'air original MozaWorld',cat:'original',ton:'C',mode:'maj',bpm:96,u:2,bar:8,
    mel:'E5:2 G5:2 A5:3 G5:1|E5:2 D5:2 C5:4|D5:2 E5:2 G5:2 E5:2|D5:8|E5:2 G5:2 A5:2 C6:2|A5:3 G5:1 E5:4|D5:2 E5:2 D5:2 C5:2|C5:8',
    acc:'C|G C|G|G|F|C|G|C'}};

/* Les zones actuelles ont chacune un air différent ; les zones ajoutées plus tard en reçoivent un selon leur type,
   et l'arrangement (tonalité, tempo, timbres, rythmes) les rend uniques. */
const MUS_ZONE={CIT:'nachtmusik',ANT:'clair',RES:'row',MAR:'twinkle',DON:'toccata',DON045:'korobeiniki',DON024:'berceuse',
  ASS152:'montagne',RES227:'frere',ASS155:'turca',RES079:'london',ANT120:'elise',RES374:'largo',RES122:'voiles',ASS012:'gouffre',
  ASS006:'greensleeves',RES021:'mary',RES212:'marche',RES345:'ode',ASS150:'cancan',RES136:'lanternes'};
const MUS_TYPE={CIT:['nachtmusik','ode','menuet','canon','marche','largo'],DON:['toccata','montagne','diesirae','funebre','forge','korobeiniki'],
  RES:['frere','clair','twinkle','mary','london','row','voiles'],ANT:['gouffre','elise','gymno','berceuse','greensleeves','lanternes'],
  MAR:['cancan','turca','korobeiniki','halles','menuet','twinkle']};
/* type de tuile : instrument de la trame, rythme, tempo */
const MUS_GENRE={CIT:{lead:'cuivre',tempo:1,batt:'marche'},DON:{lead:'orgue',tempo:.95,batt:'lourd'},RES:{lead:'harpe',tempo:1,batt:'leger'},
  ANT:{lead:'flute',tempo:.92,batt:'tribal'},MAR:{lead:'carre',tempo:1.05,batt:'sautille'}};
/* mana : timbres des deux pôles [vers −7, vers +7] et instrument d'arpège */
const MUS_MANA={Feu:{neg:'scie',pos:'cuivre',arp:'harpe'},Glace:{neg:'verre',pos:'cloche',arp:'cloche'},Eau:{neg:'triangle',pos:'piano',arp:'piano'},
  Sève:{neg:'anche',pos:'flute',arp:'harpe'},Pierre:{neg:'basson',pos:'orgue',arp:'clavecin'},Vent:{neg:'souffle',pos:'flute',arp:'cloche'}};
const MUS_SOMBRE={Égyptienne:'harm',Éthiopienne:'harm',Zouloue:'harm',Arabe:'harm',Perse:'harm',Indienne:'harm'};

const MUS={ctx:null,out:null,bus:null,echo:null,bruit:null,ondes:{},cur:null,vol:.5};
const MUS_PC={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
function musHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function musNote(tok){const m=/^([A-G])([#b]?)(-?\d)$/.exec(tok);if(!m)return null;return 12*(+m[3]+1)+MUS_PC[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0)}
/* lit un air : liste de notes {t,d,m} en unités, longueur totale, et accords {t,d,r,iv} */
function musLire(A){if(A._lu)return A._lu;const notes=[],mes=A.mel.split('|');let t=0;
  for(const b of mes)for(const tok of b.trim().split(/\s+/)){if(!tok)continue;const[n,dd]=tok.split(':'),d=dd?+dd:1;
    if(n!=='R'){const m=musNote(n);if(m!==null)notes.push({t,d,m})}t+=d}
  const QUAL={'':[0,4,7],m:[0,3,7],'7':[0,4,7,10],maj7:[0,4,7,11],m7:[0,3,7,10],dim:[0,3,6],sus4:[0,5,7]},acc=[];
  A.acc.split('|').forEach((b,i)=>{const cs=b.trim().split(/\s+/);cs.forEach((c,j)=>{const m=/^([A-G])([#b]?)(.*)$/.exec(c);if(!m)return;
    acc.push({t:i*A.bar+j*A.bar/cs.length,d:A.bar/cs.length,r:(MUS_PC[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0)+12)%12,iv:QUAL[m[3]]||QUAL['']})})});
  const L=Math.max(Math.ceil(t/A.bar),A.acc.split('|').length)*A.bar;return A._lu={notes,acc,L,mel:t}}
/* modes : comment déplacer chaque degré (demi-tons depuis la tonique) */
const MUS_MODES={maj:{maj:{},min:{4:3,9:8,11:10},harm:{4:3,9:8},phry:{2:1,4:3,9:8,11:10},lyd:{5:6},dor:{4:3,11:10}},
  min:{min:{},maj:{3:4,8:9,10:11},dor:{8:9},harm:{10:11},phry:{2:1},lyd:{3:4,8:9,10:11,5:6}}};
function musModeCible(A,pole,a,sombre){if(pole<0){if(a>=7)return sombre==='harm'?'harm':'phry';if(a>=5)return sombre||'phry';if(a>=3)return'min';return A.mode}
  if(pole>0){if(A.mode==='min'){if(a>=5)return'maj';if(a>=3)return'dor';return'min'}if(a>=5)return'lyd';return'maj'}return A.mode}
/* zone du jeu → fiche musicale */
function musZone(Z){const d=Z.d||{},type=Z.mod||Z.id,mana=d.mana||(typeof ZMANA!=='undefined'&&ZMANA[Z.id])||'Pierre';
  let air=MUS_ZONE[Z.id];if(!air){const p=MUS_TYPE[type]||MUS_TYPE.RES;air=p[musHash(Z.id)%p.length]}
  return{id:Z.id,type,mana,culture:d.culture||'',air}}
/* ---------- arrangement : construit la liste d'événements d'une boucle pour une zone et un niveau ---------- */
function musArranger(F,lv){const A=MUS_AIRS[F.air],P=musLire(A),pole=Math.sign(lv),a=Math.min(7,Math.round(Math.abs(lv))),h=musHash(F.id);
  const G=MUS_GENRE[F.type]||MUS_GENRE.RES,M=MUS_MANA[F.mana]||MUS_MANA.Pierre,mode=musModeCible(A,pole,a,MUS_SOMBRE[F.culture]);
  const map=MUS_MODES[A.mode][mode]||{},ton=(musNote(A.ton+'4')%12+(MUS_ZONE[F.id]?0:(h%7)-3)+12)%12,decal=MUS_ZONE[F.id]?0:(h%7)-3;
  const mv=m=>{m+=decal;const r=((m-ton)%12+12)%12;return m+((map[r]!==undefined?map[r]:r)-r)};
  const base=(A.mode==='maj'?[0,2,4,5,7,9,11]:[0,2,3,5,7,8,10]).map(r=>(r+(map[r]!==undefined?map[r]-r:0)+ton)%12).sort((x,y)=>x-y);
  const pas=(m,s)=>{let x=m+s;while(base.indexOf(((x%12)+12)%12)<0)x+=s;return x},tierce=(m,s)=>pas(pas(m,s),s),pasN=(m,k,s)=>{for(let i=0;i<k;i++)m=pas(m,s);return m};
  const pulse=A.pulse||A.u,ev=[],add=(t,d,m,v,voix)=>ev.push({t,d,m,v,voix});
  const octave=pole<0&&a>=6?-12:pole>0&&a>=7?12:0;
  const lead=a>=4&&pole?(pole<0?M.neg:M.pos):G.lead;
  /* 0 : la trame principale */
  const vm=.17*(1+Math.max(0,3-a)*.45);/* seule, la trame doit s'entendre autant que l'orchestre */
  for(const n of P.notes){const m=mv(n.m)+octave;add(n.t,n.d,m,vm,lead);
    if(!(a>=5&&pole<0)){let b=m-12;while(b>62)b-=12;add(n.t,n.d,b,a?.06:.08,'alto')}/* 23 nov. : la mélodie doublée plus bas, pour les médiums */
    if(a>=5)add(n.t,n.d,m+(pole<0?-12:12),.07,pole<0?'basson':'cloche');
    /* 23 nov. : une harmonie de plus à chaque palier. 2 : tierce sur les temps forts ; 3 : tierce sur toute la mélodie ;
       4 : sixte en dessous (trois voix) ; 6 : quinte au-dessus (quatre voix) ; 7 : tierce renforcée au timbre du pôle */
    const fort=Math.abs(n.t/pulse-Math.round(n.t/pulse))<1e-6,sd=pole<0?-1:1;
    if(a>=3||(a>=2&&fort))add(n.t,n.d,tierce(m,sd),a>=3?.05:.045,'triangle');
    if(a>=4)add(n.t,n.d,pasN(m,5,-1),.04,'alto');
    if(a>=6)add(n.t,n.d,pasN(m,4,1),.03,'triangle');
    if(a>=7)add(n.t,n.d,tierce(m,sd),.06,pole<0?M.neg:M.pos);
    if(a>=6&&pole>0&&n.d>=A.u*2)add(n.t-.25,.25,pas(m,1),.06,lead);
    if(a>=6&&pole<0&&n.d>=A.u)for(let q=0;q<n.d;q+=.5)add(n.t+q,.45,m-12,.035,'scie')}
  /* accords : basse, nappe, arpège */
  for(const c of P.acc){const r=mv(c.r+48),tons=c.iv.map(i=>mv(c.r+i+48)),rt=((r%12)+12)%12;let bas=40+((rt-4+12)%12);/* mi 2 à ré# 3 : le grave que rendent les haut-parleurs d'une télé */
    if(a>=1){if(a>=6){for(let q=0;q<c.d;q+=A.u/2)add(c.t+q,A.u/2*.9,bas+((q/(A.u/2))%2?12:0),.12,'basse')}
      else if(a>=3){for(let q=0;q<c.d;q+=pulse)add(c.t+q,pulse*.9,(q/pulse)%2&&c.iv.length?bas+7:bas,.13,'basse')}
      else add(c.t,c.d,bas,.14,'basse')}
    else add(c.t,c.d,bas,.14,'basse');/* 23 nov. : un fond grave dès le niveau 0 */
    if(a===1){let q=r;while(q<50)q+=12;while(q>62)q-=12;add(c.t,c.d,q,.035,'nappe');add(c.t,c.d,q+7,.03,'nappe')}/* 1 : quinte tenue */
    if(a>=2){let v=tons.map(m=>{while(m<50)m+=12;while(m>62)m-=12;return m});
      if(a>=3&&c.iv.length<4){let s7=pasN(v[0],6,1);while(s7>64)s7-=12;v.push(s7)}/* 3 : septième */
      if(a>=5)v.push(pole<0?v[0]+13:v[0]+14);if(a>=6)v.push(v[1]+12);if(a>=7)v.push(pole<0?v[0]+6:v[0]+11);
      for(const m of v)add(c.t,c.d,m,a>=5?.035:.045,a>=7?'choeur':'nappe')}
    if(a>=4&&!A.canon){const motif=[[0,1,2,1],[0,2,1,2],[0,1,2,3],[2,1,0,1]][h%4],st=A.u/2;let k=0;
      for(let q=0;q<c.d;q+=st,k++){const i=motif[k%4]%tons.length,o=pole>0?72:60;let m=tons[i];while(m<o)m+=12;add(c.t+q,st,m,.05,M.arp)}}}
  /* canon : la mélodie reprise en décalé (2 voix au palier 4, 3 voix au palier 6) */
  if(a>=4&&A.canon)for(let k=1;k<=(a>=6?2:1);k++)for(const n of P.notes){const t=(n.t+A.canon*k)%P.L;
    add(t,n.d,mv(n.m)+octave+(k===1?(pole<0?-12:12):0),.09,k===1?M.arp:M.neg)}
  /* 3 : percussions selon le type */
  if(a>=3){const nb=A.bar/pulse;for(let b=0;b<P.L/A.bar;b++){const t0=b*A.bar;
    for(let i=0;i<nb;i++){const t=t0+i*pulse,fort=i===0,dem=pulse/2;
      if(G.batt==='marche'){add(t,0,0,fort?1:.7,i%2?'caisse':'grosse');if(a>=6)add(t+dem,0,0,.4,'caisse')}
      else if(G.batt==='lourd'){add(t,0,0,1,i%2?'tom':'grosse');if(a>=5&&i===nb-1)add(t+dem,0,0,.8,'tom')}
      else if(G.batt==='leger'){add(t,0,0,.5,'hochet');add(t+dem,0,0,.35,'hochet');if(fort)add(t,0,0,.6,'grosse')}
      else if(G.batt==='tribal'){add(t,0,0,fort?1:.6,'tom');if((i+h)%2)add(t+dem,0,0,.5,'tom')}
      else{add(t,0,0,fort?1:.6,i%2?'caisse':'grosse');add(t+dem,0,0,.35,'charley')}
      if(a>=5)add(t+dem,0,0,.25,'charley')}
    if(a>=7&&b===0)add(t0,0,0,1,'cymbale')}}
  ev.sort((x,y)=>x.t-y.t);
  const bpm=A.bpm*G.tempo*(MUS_ZONE[F.id]?1:.94+(h%13)/100)*(pole>0?1+.045*a:pole<0?1-.045*a:1);
  return{ev,L:P.L,spu:60/Math.max(40,Math.min(190,bpm))/A.u,echo:pole<0?.25+.03*a:.18}}

/* ---------- synthétiseur : quelques timbres façon General MIDI / 16 bits ---------- */
const MUS_VOIX={
  carre:{w:'square',g:.32,lp:3200,a:.005,r:.05},triangle:{w:'triangle',g:1,a:.01,r:.1},
  cuivre:{w:'sawtooth',g:.6,lp:900,lpe:3200,a:.03,r:.08},scie:{w:'sawtooth',g:.36,lp:1500,det:[-9,9],a:.02,r:.12},
  orgue:{pw:[0,1,.7,.45,.3,0,.18,0,.12],g:.5,a:.01,r:.06},flute:{w:'sine',g:.7,vib:5,a:.06,r:.12,souffle:.04},
  cloche:{w:'sine',fm:3.5,idx:3,g:.9,a:.002,dk:1.8},verre:{w:'sine',det:[0,8],g:.7,a:.004,dk:2.2},
  piano:{w:'sine',fm:1,idx:1.6,g:.9,a:.003,dk:1.3},harpe:{w:'sawtooth',lp:2400,lpe:5000,g:1.1,a:.002,dk:.8},
  clavecin:{w:'square',lp:4200,g:.3,a:.001,dk:.5},anche:{w:'square',lp:1300,vib:4,g:.4,a:.03,r:.08},
  basson:{w:'sawtooth',lp:600,g:.55,a:.02,r:.08},souffle:{w:'triangle',vib:6,g:.9,a:.08,r:.2,souffle:.09},
  nappe:{w:'sawtooth',det:[-7,7],lp:1100,g:.5,a:.35,r:.5},choeur:{w:'sawtooth',det:[-10,0,10],bp:850,g:.9,a:.5,r:.7},
  basse:{w:'sawtooth',lp:650,det:[0,7],g:.5,a:.008,r:.08},alto:{w:'sawtooth',lp:1100,g:.5,a:.03,r:.1}};
function musBrancher(ctx,out,echo){if(MUS.ctx===ctx)return;MUS.ctx=ctx;MUS.bus=ctx.createGain();MUS.bus.gain.value=MUS.vol;
  /* 23 nov. : égaliseur fixe (4 filtres pour toute la musique) : on coupe l'infra-grave qu'une télé ne rend pas, on pousse graves et médiums, on adoucit les aigus */
  let eq=MUS.bus;for(const[t,f,g,q]of[['highpass',38,0,.7],['lowshelf',190,5,0],['peaking',420,3.5,.8],['highshelf',4500,-3,0]]){const b=ctx.createBiquadFilter();b.type=t;b.frequency.value=f;b.gain.value=g;if(q)b.Q.value=q;eq.connect(b);eq=b}eq.connect(out);
  MUS.envoi=ctx.createGain();MUS.envoi.gain.value=.2;MUS.bus.connect(MUS.envoi);
  if(echo)MUS.envoi.connect(echo);else{const d=ctx.createDelay(1),fb=ctx.createGain();d.delayTime.value=.3;fb.gain.value=.35;MUS.envoi.connect(d);d.connect(fb);fb.connect(d);d.connect(out)}
  const nb=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),c=nb.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1;MUS.bruit=nb}
function musOnde(V){const k=V.pw.join();if(!MUS.ondes[k]){const n=V.pw.length,re=new Float32Array(n),im=new Float32Array(V.pw);MUS.ondes[k]=MUS.ctx.createPeriodicWave(re,im)}return MUS.ondes[k]}
function musJouer(t,m,d,v,nom){const X=MUS.ctx,V=MUS_VOIX[nom]||MUS_VOIX.triangle,f=440*Math.pow(2,(m-69)/12),g=X.createGain();
  let dest=g,fin;
  if(V.lp||V.bp){const fl=X.createBiquadFilter();fl.type=V.bp?'bandpass':'lowpass';fl.frequency.value=V.bp||V.lp;if(V.bp)fl.Q.value=1.4;
    if(V.lpe){fl.frequency.setValueAtTime(V.lpe,t);fl.frequency.exponentialRampToValueAtTime(V.lp,t+Math.min(.4,d+.1))}fl.connect(g);dest=fl}
  const vol=v*V.g;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+V.a);
  if(V.dk){fin=t+Math.min(V.dk,d+V.dk*.6);g.gain.exponentialRampToValueAtTime(.0005,fin)}
  else{const tenue=Math.max(t+V.a+.01,t+d);g.gain.setValueAtTime(vol*.85,tenue);g.gain.linearRampToValueAtTime(0,tenue+V.r);fin=tenue+V.r}
  for(const dt of V.det||[0]){const o=X.createOscillator();if(V.pw)o.setPeriodicWave(musOnde(V));else o.type=V.w;o.frequency.value=f;o.detune.value=dt;
    if(V.fm){const mo=X.createOscillator(),mg=X.createGain();mo.frequency.value=f*V.fm;mg.gain.setValueAtTime(f*V.idx,t);mg.gain.exponentialRampToValueAtTime(f*.05,t+.5);mo.connect(mg);mg.connect(o.frequency);mo.start(t);mo.stop(fin+.05)}
    if(V.vib){const l=X.createOscillator(),lg=X.createGain();l.frequency.value=V.vib;lg.gain.value=f*.006;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(fin+.05)}
    o.connect(dest);o.start(t);o.stop(fin+.05)}
  if(V.sub){const o=X.createOscillator();o.type='sine';o.frequency.value=f/2;o.connect(dest);o.start(t);o.stop(fin+.05)}
  if(V.souffle)musBruit(t,Math.min(d,.3),V.souffle*v*4,'bandpass',f*2,2);
  g.connect(MUS.bus)}
function musBruit(t,d,v,type,fq,q){const X=MUS.ctx,s=X.createBufferSource(),fl=X.createBiquadFilter(),g=X.createGain();s.buffer=MUS.bruit;fl.type=type;fl.frequency.value=fq;fl.Q.value=q||1;
  g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+d);s.connect(fl);fl.connect(g);g.connect(MUS.bus);s.start(t,Math.random()*.5);s.stop(t+d+.02)}
function musFrappe(t,v,k){const X=MUS.ctx;
  if(k==='grosse'||k==='tom'){const o=X.createOscillator(),g=X.createGain(),f0=k==='tom'?190:120,f1=k==='tom'?80:42;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+.18);
    g.gain.setValueAtTime(.55*v,t);g.gain.exponentialRampToValueAtTime(.0005,t+(k==='tom'?.35:.3));o.connect(g);g.connect(MUS.bus);o.start(t);o.stop(t+.4);return}
  if(k==='caisse'){musBruit(t,.14,.3*v,'bandpass',1800,.8);const o=X.createOscillator(),g=X.createGain();o.frequency.value=190;g.gain.setValueAtTime(.18*v,t);g.gain.exponentialRampToValueAtTime(.0005,t+.08);o.connect(g);g.connect(MUS.bus);o.start(t);o.stop(t+.1);return}
  if(k==='charley')return musBruit(t,.045,.12*v,'highpass',7000);
  if(k==='hochet')return musBruit(t,.07,.1*v,'bandpass',5200,2);
  if(k==='cymbale')return musBruit(t,1.6,.16*v,'highpass',5000)}

/* ---------- lecture : appelée par l'ordonnanceur du jeu toutes les 60 ms ---------- */
function musLecture(F,lv,now){const cle=F.id+':'+Math.round(lv);let C=MUS.cur;
  if(!C||C.id!==F.id){if(C){MUS.bus.gain.cancelScheduledValues(now);MUS.bus.gain.setTargetAtTime(0,now,.08);MUS.bus.gain.setTargetAtTime(MUS.vol,now+.45,.15)}
    C=MUS.cur={id:F.id,cle:'',pos:0,i:0,tn:now+(C?.45:.1),F}}
  if(C.cle!==cle){const R=musArranger(F,lv),f=C.R?C.pos/C.R.L:0;C.R=R;C.cle=cle;C.pos=Math.floor(f*R.L);C.i=0;while(C.i<R.ev.length&&R.ev[C.i].t<C.pos)C.i++;
    if(MUS.envoi)MUS.envoi.gain.setTargetAtTime(R.echo,now,.3)}
  const R=C.R;if(C.tn<now-.5)C.tn=now+.05;
  while(C.tn<now+.3){const u0=C.pos;
    while(C.i<R.ev.length&&R.ev[C.i].t<u0+1){const e=R.ev[C.i++],t=Math.max(now,C.tn+(e.t-u0)*R.spu);
      if(e.d)musJouer(t,e.m,e.d*R.spu,e.v,e.voix);else musFrappe(t,e.v,e.voix)}
    C.pos++;C.tn+=R.spu;if(C.pos>=R.L){C.pos=0;C.i=0}}}
/* branchement au jeu : renvoie vrai si la musique de zone joue (le vieux bourdon se tait alors) */
function musiqueTick(Z,lv,now){if(typeof AX==='undefined'||!AX||!Z)return false;try{musBrancher(AX,master,typeof delayIn!=='undefined'?delayIn:null);
  if(!Z._mus)Z._mus=musZone(Z);if(!MUS_AIRS[Z._mus.air])return false;musLecture(Z._mus,lv,now);return true}catch(e){console.warn('musique',e);return false}}
function musiqueTitre(Z){const F=Z&&(Z._mus||(Z._mus=musZone(Z)));const A=F&&MUS_AIRS[F.air];return A?A.nom+' · '+A.src:''}
