# MozaWorld : brief de direction artistique des cartes de combat

Cible : illustration SVG inline, viewBox 160×100 (objet `ART` de `tv/src/habillage.js`), cadre HTML/CSS autour.
Lecture à 3 m : 3 plans au maximum (ciel, lieu, sujet). Le sujet occupe au moins 35 % de la hauteur.
Aucune forme pleine ne fait moins de 4 unités. Contraste sujet/fond d'au moins 3:1.
On garde ce qui marche aujourd'hui : fond en dégradé vertical, halo, lueur (`mz-lueur`), ombre portée.

## 0. Règles générales

- **Une carte = un lieu.** On ne réutilise plus une illustration par type (cloche, parchemin). Le type de zone se lit par un **petit emblème** de 10×10 posé en haut à droite de l'image :
  Citadelle = tour crénelée, Donjon = sceau carré, Ressource = épi, Antre = œil en amande, Assemblée = cercle de 5 points.
- **Deux pôles = deux états du même lieu.** On garde la même composition et la même ligne d'horizon. On change le ciel, la matière et un élément du sujet. **Contrainte d'équité :** les deux variantes ont la même luminosité moyenne (à ±10 %), le même nombre de couleurs vives (2) et un halo de même intensité. Le pôle − n'est jamais plus sombre ni plus « sale ». Le pôle + n'est jamais plus doré. Chaque paire oppose deux grandeurs : **ordre et ampleur**, ou **mystère et netteté**, ou **intimité et puissance**.
- **Marqueur de pôle** sur la pastille de coût : un demi-anneau à gauche pour −, à droite pour +, dans la couleur d'accent du pôle (indiquée dans chaque fiche entre crochets). Pas de signe « − » ni « + » visible. Le nom du pôle suffit.
- Palette interdite en dominante : or `#c9a45c`/`#e6c46a` (on le réserve aux communes de départ), gris neutre, cristal blanc-bleu générique.

## 1. Les 21 cartes de zone (5 d'origine + 16 de CARTE_PLUS)

Format : **Lieu** (forme de base) / **−** / **+**. Les accents [−, +] servent au marqueur de pôle et au liseré.

**CIT · Berestograd, la Ville-Écorce** (Glace, slave). Base : 3 tours en troncs de bouleau, rectangles `#ece6d6` rayés de tirets horizontaux `#2b2724`, coiffés de bulbes en oignon `#3d6f8f`, et un rempart de rondins au premier plan. [− `#b9b4e0`, + `#c2412f`]
− *Neige de l'oubli* : une grande congère lisse en courbe cache le pied des tours. Le ciel est blanc lilas `#dcd8ee`, avec 12 gros flocons ronds. Le haut des tours s'efface par paliers d'opacité (1, .7, .4). Grandeur : le silence et la page blanche.
+ *Rempart de mémoire* : la neige a fondu. Les écorces sont gravées de petits glyphes rouges `#c2412f` (chevrons et croix), le ciel est indigo `#1f2b52`, et une seule lanterne rouge brique est allumée. Grandeur : la densité du récit.

**DON · Puits des Neuf Édits** (Feu). Base : un puits vu en coupe, demi-ellipse de pierre `#4a2f28`, avec de la lave `#e3561d` au fond. 9 sceaux carrés de jade `#3f9e7a` à bord clair `#9fe0c0` sont fixés aux parois. [− `#3f9e7a`, + `#ff9a3c`]
− *Édit de fer* : les 9 sceaux forment une grille 3×3 parfaite au-dessus du puits, tenus par des chaînes verticales droites. La lave est figée en dalles hexagonales. La symétrie est totale. Grandeur : la monumentalité.
+ *Édit de délivrance* : les sceaux sont brisés en 2 ou 3 éclats et montent en spirale. La lave jaillit en geyser en forme de goutte inversée et la composition devient asymétrique. Grandeur : l'élan.

**RES · Chinampas de Tezcamixtli** (Vent, aztèque). Îlots rectangulaires plats `#6b4a2e` qui flottent dans un ciel turquoise `#5cc6c0`. Des racines pendent en traits ondulés et des rangées de maïs (triangles verts `#5f9a3a`) poussent dessus.
Niveau 1 : un îlot. Niveau 2 : deux îlots reliés par un canal de ciel. Niveau 3 : trois îlots, une passerelle et une barque.

**ANT · Exarchat des Lucioles** (Eau). Base : coupoles basses sur pilotis `#2a3d4a` au-dessus d'une lagune, et une jetée en diagonale. [− `#c8f25a`, + `#ff9f86`]
− *Luciole de nuit* : l'eau est indigo `#10223a` et 30 points vert acide `#c8f25a` laissent des traînées courbes et des reflets. Grandeur : la vitesse et la multitude.
+ *Lancière de l'aurore* : le ciel est saumon `#f2a58a` sur turquoise `#3fb0a8`. Une lancière se tient debout au bout de la jetée, en silhouette verticale d'environ 45 % de la hauteur, sur une eau lisse comme un miroir. Grandeur : tenir la ligne.

**MAR · Foire de Givrecloche** (Glace, assemblée politique). Base : 4 étals à toits pointus rayés et un portique qui porte une cloche de glace `#9fd6e8` (la cloche reste, mais propre à ce lieu). [− `#b9b3d6`, + `#2fb7d6`]
− *Lot de brume* : 3 bandes de brume horizontales (blanc à 50 %) traversent les étals. Au premier plan, des sacs ficelés et cachetés. Teintes lavande. Grandeur : le secret et la douceur.
+ *Lot de clarté* : le ciel est cyan franc `#7fd0e8` et les ombres sont nettes. Une grande ardoise `#24303a` porte 4 lignes de craie et une coche. Grandeur : la règle lisible.

**DON045 · La Taïga de Kobor** (Donjon, forêt boréale, Glace, slave). Base : sapins en triangles empilés `#2f5a46`, une tour de rondins avec un sceau, et un lac gelé au premier plan. [− `#7b5fb0`, + `#f1efe6`]
− *Mensonge* : le reflet dans le lac ne correspond pas. Il montre une tour de plus et une fenêtre allumée qui n'existe pas en haut. Des masques d'écorce sont pendus aux branches. Teintes violet sapin. Grandeur : le théâtre.
+ *Vérité* : la lumière zénithale tombe blanche et crue. Il ne reste qu'un tronc écorcé au centre, avec une ombre dure, et le lac reflète exactement la scène. Grandeur : le dépouillement.

**DON024 · Le Fjord de Rames** (Donjon, fjord, Glace, égyptienne). Base : des falaises verticales taillées en pylônes à fruit (trapèzes) `#5a6b7a` et une barque solaire à rames sur l'eau. [− `#2a8a8a`, + `#2f56b0`]
− *Cauchemar* : les falaises se penchent vers le centre, un œil oudjat est taillé dans la roche, et les rames s'allongent comme des pattes. Teintes pourpre `#3a2450` et sarcelle. Grandeur : le vertige sublime.
+ *Rêve* : les falaises se dissolvent en dégradé. La barque flotte dans un ciel lapis `#2f56b0` semé d'étoiles à 5 branches sable `#e8cf9a`. Grandeur : l'apesanteur.

**ASS152 · Le Canyon de Fjorhel** (Assemblée, canyon, Feu, nordique). Base : un canyon rouille aux parois en V `#9a4a2a` et un cercle de 7 pierres levées au fond. [− `#d9c7a0`, + `#ff7a2a`]
− *Silence* : rien ne bouge. Le cercle est vide, le ciel est un aplat sable `#e8d9b0` et les ombres sont longues et parallèles. Grandeur : la gravité.
+ *Chant* : 4 arcs concentriques partent du cercle et rebondissent sur les parois. Une rangée de petites silhouettes tient des cornes. Teintes orange vif et ombres violettes `#5a2f6a`. Grandeur : la voix commune.

**ASS155 · L'Oasis de Raak** (Assemblée, oasis, Sève, éthiopienne). Base : une église taillée dans le sol (une croix vue en plongée, creusée dans la roche) et 3 palmiers. [− `#c07a5a`, + `#5fd0c0`]
− *Pierre* : l'assemblée siège dans la fosse ocre rose `#c07a5a`. Plans massifs, joints visibles, ombre portée profonde. Grandeur : ce qui dure.
+ *Cristal* : la fosse est remplie d'une eau limpide `#5fd0c0`. La croix y transparaît en facettes plates (3 tons de vert d'eau), sans effet de brillance. Grandeur : la transparence.

**ANT120 · L'Oasis de Maulu** (Antre, oasis, Sève, zouloue). Base : une mare ronde et 3 huttes en ruche (dômes à rayures horizontales `#b08a4a`). Les pôles s'appellent Glace et Feu comme deux manas : le liseré reste celui du mana Sève pour lever l'ambiguïté. [− `#9fd3e6`, + `#e8562a`]
− *Tortue de givre* : la mare est gelée et une tortue géante à carapace de dômes hexagonaux y dort. Le givre est bleu pâle sur l'herbe. Grandeur : la patience.
+ *Salamandre d'oasis* : une salamandre ondule (courbe en S) dans la mare devenue braise. L'herbe est sèche et jaune, et les triangles des huttes s'allument. Grandeur : la fougue.

**ASS012 · Les Cavernes de cristal de Balpak** (Assemblée, cavernes, Pierre, maya). Base : une voûte de grotte avec des stalactites anguleuses et, au centre, une stèle maya à degrés `#7a6a58`. [− `#e07a3a`, + `#7ac25a`]
− *Cendres* : la cendre tombe en couches gris chaud `#8a7a70` et des braises courent dans les fissures. Des volutes de fumée en forme de glyphe de parole maya (spirales à crochet) sortent de la stèle. Grandeur : la purification par le feu.
+ *Floraison* : des lianes et 5 fleurs à 5 pétales `#f2b0c8` couvrent la stèle et les stalactites verdissent. Grandeur : le foisonnement.

**ASS006 · La Lande de Cezo** (Assemblée, lande, Vent, vénitienne). Base : une lande basse et une loggia en ruine à 3 arcs trilobés (gothique vénitien) `#cdbfa8`. [− `#8a2f6a`, + `#4f7aa0`]
− *Corruption* : la bruyère pourpre `#7a3a7a` déborde. Un masque laqué noir et rouge pend dans l'arc central et des bourses sont posées sur le parapet. Grandeur : le faste et la séduction.
+ *Pureté* : la lande est rase et couchée par le vent. Un linge blanc flotte entre les arcs devant un ciel ardoise clair. Grandeur : l'austérité et le souffle.

**ASS150 · Le Delta de Pama** (Assemblée, delta fluvial, Eau, inca). Base : un fleuve qui s'ouvre en éventail et des terrasses en escalier sur les deux rives, avec un appareil polygonal visible. [− `#b08a4a`, + `#3a8fd0`]
− *Ruine* : les terrasses sont effondrées et des blocs polygonaux sont épars dans l'eau. Le fleuve reprend ses bras et des roseaux poussent. Grandeur : le retour au fleuve.
+ *Abondance* : les terrasses sont pleines, les canaux se tressent en bleu, des épis de maïs sont rouges, jaunes et violets, et un quipu chargé de nœuds est tendu au premier plan. Grandeur : la profusion.

**RES227 · Les Dunes de Balo** (Feu, désert, zouloue). Dunes en courbes `#e08a3a` / `#b85a2a` sous un grand disque de soleil rouge `#d23a1f`. Niveau 2 : on ajoute un bouclier ovale planté. Niveau 3 : une bande de mirage ondulée au ras de l'horizon.

**RES079 · Les Ruines de Teoco** (Pierre, cité en ruines, aztèque). Une pyramide à degrés écroulée `#8a7a62` et une tête de serpent à plumes tombée au sol, dont les plumes sont des triangles. Niveau 2 : on ajoute un pan de mur à grecques. Niveau 3 : un brasero allumé au sommet.

**RES374 · La Taïga de Chika** (Glace, forêt boréale, maya). Une stèle maya enneigée entre des sapins. Le contraste culturel est voulu : glyphes en cartouches arrondis sur fond de neige. Niveau 2 : un abri de branches. Niveau 3 : une fumée qui monte de l'abri.

**RES122 · Le Récif de Cezo** (Eau, récif, vénitienne). Des poteaux d'amarrage rayés rouge et blanc (pali) plantés dans un récif turquoise `#2fb0b0`. Les coraux sont des éventails bordeaux `#8a2f3a`. Niveau 2 : on ajoute une gondole posée sur le fond. Niveau 3 : un banc de poissons en losanges.

**RES021 · L'Oasis de Sumak** (Sève, oasis, éthiopienne). Une source au pied d'un sycomore large `#3d6b35`, 2 jarres en terre et une croix processionnelle ajourée plantée à côté. Niveau 2 : on ajoute une ombrelle rouge. Niveau 3 : un vol d'ibis.

**RES212 · La Steppe de Gramir** (Vent, steppe, slave). De longues herbes inclinées `#c9b56a`, un kourgane (tertre) et une baba de pierre (statue trapue). Niveau 2 : on ajoute un cheval au galop en silhouette. Niveau 3 : des nuages en rouleaux.

**RES345 · Le Canyon de Zima** (Feu, canyon, zouloue). Un canyon ocre et un éboulis de blocs en chute. Un kraal (enclos circulaire) est posé sur le replat. Niveau 2 : on ajoute un aloès en étoile. Niveau 3 : la poussière d'éboulis en arc.

**RES136 · Les Falaises de Srekor** (Vent, falaise côtière, khmère). Une falaise dont le sommet est taillé en tour-visage aux yeux mi-clos, au-dessus d'une mer `#3a7a9a`. Niveau 2 : on ajoute des nids d'oiseaux. Niveau 3 : des voiles de jonque au large.

## 2. Motifs de culture (bandeau de cadre, 6 unités de haut, motif répété)

Le bandeau a une seule couleur (la couleur claire du mana) sur la couleur sombre du mana. Le pas de répétition est de 12 à 16 unités.

| Culture | Forme répétée |
|---|---|
| Slave | Losange à 4 crochets aux pointes (« semence » brodée), séparé par 2 points. |
| Égyptienne | Frise de papyrus : tige verticale surmontée d'une ombelle en éventail de 3 traits, puis un trait vertical. |
| Nordique | Entrelacs : deux rubans en S qui se croisent, d'épaisseur constante. |
| Zouloue | Triangles pleins alternés haut/bas (dents de scie) avec une ligne médiane, comme une perlerie. |
| Éthiopienne | Petite croix ajourée (carré évidé à 4 boucles) et un losange plein. |
| Aztèque | Grecque en escalier (xicalcoliuhqui) : crochet carré et 2 marches. |
| Maya | Cartouche arrondi (rectangle aux coins très ronds) avec un point central, en alternance avec une volute de parole. |
| Vénitienne | Arc trilobé répété (arcature gothique), avec une pastille entre les arcs. |
| Inca | Tocapu : carré divisé en 4 avec une diagonale et un petit carré en damier. |
| Khmère | Lotus en bouton (ogive à 3 pétales), en alternance avec une perle. |

## 3. Matériaux du cadre par mana

| Mana | Matériau et ornement | Sombre / moyen / clair |
|---|---|---|
| Feu | Terre cuite émaillée. Des écailles imbriquées en relief, en très faible opacité, dans le cadre, et des craquelures fines aux coins. | `#3a1a12` / `#b5482a` / `#f0a060` |
| Glace | Bois blanchi et givre. Des fougères de givre (chevrons ramifiés) partent des coins vers le centre. | `#1d2c38` / `#6f9bb0` / `#e4f1f4` |
| Eau | Laque indigo. 3 filets ondulés parallèles en bas du cadre et des gouttes aux coins. | `#0f2340` / `#1f5f8e` / `#5fd0c8` |
| Sève | Bois vert ciré. Des vrilles en spirale aux coins et des nervures de feuille sur les côtés. | `#1f3a1c` / `#4f7f3a` / `#d9b22e` (le safran pique) |
| Pierre | Ardoise et ocre. Appareillage à joints décalés sur les côtés, avec des clous ronds aux coins. | `#2a2420` / `#7a6450` / `#c99a5a` |
| Vent | Lin écru et indigo délavé. Des plis en rubans diagonaux et des fils effilochés aux coins. | `#28323e` / `#5b7896` / `#e2d8c0` |

La bordure actuelle colorée par zone est remplacée par la couleur moyenne du mana. La couleur propre à la zone ne reste que dans le liseré d'accent de pôle.

## 4. Progression par palier (|niveau| de 1 à 7)

Le palier se lit d'abord par **7 petits losanges** sur le bord gauche de l'image : ceux du palier sont pleins dans l'accent du pôle, les autres sont en creux. Ensuite, chaque palier ajoute un élément.

| Palier | Ajout |
|---|---|
| 1 | Illustration de base et cadre uni dans le matériau du mana. |
| 2 | Le bandeau culturel apparaît en haut de l'image. |
| 3 | Rosaces Girih aux 4 coins : étoile à 10 branches simplifiée, 8 unités, couleur claire du mana. Elles rattachent la carte au monde en mosaïque. |
| 4 | Le bandeau culturel est répété sous le texte. L'élément secondaire de la scène apparaît : flocons, sceaux en spirale, foule, lianes, etc. |
| 5 | La texture du matériau du mana couvre tout le cadre et un double liseré intérieur apparaît dans l'accent du pôle. |
| 6 | Halo coloré de pôle derrière le sujet. Le titre passe en petites capitales espacées et l'ombre du cadre s'élargit. |
| 7 | Forme ultime (§ 5). |

Les Ressources (1 à 3) ont des losanges d'ambre. Les éléments ajoutés aux niveaux 2 et 3 sont décrits au § 1. Le niveau 3 de Ressource reçoit aussi les rosaces de coins.

## 5. Forme ultime (±7) et résonances

- **Nouvelle carte, même lieu, vue autrement.** L'illustration déborde le cadre de l'image vers le haut : le sujet dépasse de 8 unités sur le bandeau. Le cadre prend une **frise Girih complète** (polygones pentagonaux et papillons en traits) dans la couleur claire du mana. Le nom est sur 2 lignes, le second en plus petit, et la carte reçoit un fin contour animé (pulsation lente de 3 s, opacité de .6 à 1).
- Les accents restent ceux du pôle. Les deux ultimes d'une même zone ont la **même richesse d'ornement**.
- **Sceau de résonance** : un médaillon rond de 14 unités en bas au centre, entre l'image et le texte. Il montre deux glyphes : à gauche la résonance posée (plein), à droite celle qui est réveillée (contour seul), reliées par un trait.

| Résonance | Glyphe (dans un cercle de 10) | Couleur |
|---|---|---|
| Braise | Losange vertical avec 3 points au-dessus | `#ff7a3a` |
| Givre | Étoile à 6 branches droites sans ramification | `#bfe6f2` |
| Sang | Goutte inversée barrée d'un trait horizontal | `#c2203a` |
| Racine | Trait vertical qui se divise en 3 en bas (trident inversé) | `#6fb04a` |
| Sceau | Carré sur la pointe avec un point central | `#3fae86` |
| Abîme | Spirale à 1,5 tour vers le centre | `#5a4ac0` |

Les résonances ont aussi chacune leur couleur dans le HUD de combat, sans or ni gris.

## 6. Cartes de secret (utilitaires) et communes

**Secrets.** Ce sont des cartes trouvées et non gagnées, et on doit le sentir au premier coup d'œil.
- Le fond est en papier kraft `#c9a77a`, avec l'illustration dessinée **en traits seulement**, encre `#2a1f1a` d'épaisseur 1,6 et sans aplats, comme une page de carnet.
- Le cadre est en ficelle : une bordure en tirets de 2 et 2, couleur `#7a5a3a`. Une petite étiquette pendue au coin haut gauche porte la culture d'origine, en abrégé, dans son motif.
- Chaque secret dessine **l'objet trouvé** (clé, carte pliée, fiole, outil, lettre) posé sur le motif de culture de la zone, très pâle en fond.
- Il n'y a ni losanges de palier ni pôle. L'emblème du type de zone est remplacé par une loupe.

**Communes (Coup de bâton, Pas de côté, Souffle court).** On ne change presque rien, parce que leur sobriété est leur identité.
- On garde le cadre or/bois actuel `#c9a45c`. C'est **le seul endroit où l'or reste**, ce qui le rend signifiant : « carte du héros ».
- Une seule couleur d'illustration par carte, sur le fond en dégradé brun actuel. Ni bandeau, ni rosace, ni losange.
- Une seule retouche : chaque commune reçoit une **ligne de sol** commune (trait horizontal `#7a5a3c` à y=86) pour les relier visuellement au portrait du héros, qui porte un bâton.

## 7. Ordre de codage suggéré

1. Les emblèmes de type et les losanges de palier, qui donnent la lisibilité immédiate.
2. Les 6 matériaux de mana : variables CSS sur le cadre, et `<pattern>` SVG pour les textures.
3. Les 10 bandeaux de culture : un `<pattern>` par culture, choisi par `CARTE_PLUS[i].culture` (les 5 zones d'origine reçoivent une culture fixe : CIT slave, DON chinoise (sceaux de jade, motif de grecque carrée continue), RES aztèque, ANT vénitienne (coupoles et lagune), MAR slave).
4. Les illustrations : `ART[id]` devient `{base, moins, plus}`. On choisit la variante selon le signe de `S.lv[id]` et on garde `base` pour les plans communs.
5. La forme ultime et le sceau de résonance.
6. Le style des secrets.
