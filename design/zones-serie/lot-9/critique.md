# Critique du lot 9 : 48 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 8), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js`, `combat.js`, et la fonction `hesite` de `zonesplus.js`, lus sans rien y changer). LISTE.md, avec son tableau « Places des familles » et son paragraphe « Vocations », a servi de référence pour les places. Les mots de pôle ont été recomptés au script sur les lots 1 à 8 (4 704 cartes), et les fichiers familles_A.md à familles_D.md ont servi pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,6 / 100** (80,4 avant). Aucune zone n'est refusée et **aucune n'est sous 70** : aucune n'est donc réécrite en entier. Les corrections portent sur 9 cartes, 1 récit et des notes en tête de 8 zones :
- B et C : cinq formes du palier 7 passaient le plafond de riposte (8) ou de mana (2) en ajoutant leur réveil au reste de la carte (jusqu'à riposte 14 et 4 mana) ;
- D : un écho caché sous un `si`, que le moteur laisse doubler et qui passe ensuite à la carte suivante (CIT024 +3) ;
- A : les viscaches, troisième pôle de rongeurs du lot (ANT018 +5) ;
- B : le récit d'ANT216, un ostracon adressé au centurion, donc une seconde lettre après celle de D (ASS178) ;
- D : un « vingt » en double dans une ambiance (ANT134 −4).

La mécanique est la plus propre de la série. Le validateur (longueurs, ordre des opérations, conditions du moteur, condition rendue vraie ou fausse par une opération qui la précède, `mana` ≤ 2, riposte ≤ 8, dégâts ciblés ≤ 20 hors Donjon, opérations répétées, tag Loi, `"cible":1`, budgets, palier 7) ne trouvait à la remise **aucune erreur** sur les règles écrites. Les leçons du lot 8 ont porté :
- les **places de LISTE.md sont tenues à l'unité** par les quatre conteurs (15 places de famille et 2 places rares chacun, aucune prise à un autre) ;
- les **huit couples qui se remplissent eux-mêmes sont à 2 pôles chacun**, pas un de plus ;
- aucune opération répétée au premier niveau, aucune riposte au-dessus de 8 ni aucun dégât ciblé au-dessus de 20 hors Donjon aux paliers 1 à 6 ;
- l'écho tient à 4 cartes exactement chez C et chez D ;
- aucun nom du lot n'est déjà en jeu, et les deux conteurs qui ont changé sept noms (C et D) n'ont laissé aucun doublon, par moitié, préfixe ou mot traduit ;
- chaque conteur a écrit sa carte des familles avant ses cartes, et le dernier inscrit (D) a relu les avertissements des trois autres.

Les récits restent la force du lot :
- « On festoya avec le sel. La chronique loue sa prévoyance. » (A CIT033) ;
- « Le serment est pur ; c'est la forêt qui ne l'a pas entendu. » (A ASS054) ;
- le baku peint sur la porte du kaisho, et « le domaine garde les rizières » (A ASS025) ;
- Arnaq qui garde une mèche de mousse contre son ventre toute la nuit (B ASS134) ;
- Nerva qui compte les mains, puis les têtes (B ASS122) ;
- Waman qui creuse seul, la nuit, le puits de son rêve (C ASS167) ;
- les barracudas qui suivent Tesfaye « comme des chiens » (C ANT062) ;
- « Que mon seigneur m'envoie un autre greffier. Le mien ne sort plus qu'à midi. » (D ASS178) ;
- Rhun, qui « gouverne encore son pays. Il ne sait plus lequel. » (D ASS047).

Le défaut neuf du lot vient, encore, de la répartition. La leçon 1 du lot 8 demandait à LISTE.md de compter les vocations libres **avant** de répartir. Elle a renvoyé ce compte aux conteurs, qui l'ont fait chacun de son côté, avec des maillages différents, et trop tard pour échanger une place. Au compte strict de la leçon 5 du lot 8 (5 cartes de dégâts ciblés valent des gros coups, quel que soit le type de zone), **les douze vocations du lot sont toutes des reprises** : les lots 1 à 4, écrits avant le plafond de 4 dégâts ciblés par pôle, ont semé des « gros coups » involontaires sur presque tous les mots. Voir les arbitrages et la règle proposée.

Les défauts de fond :

1. **Le stock de vocations est épuisé, et la règle ne le savait pas.** Sur les 12 pôles en vocation, 2 sont des troisièmes emplois du même type sur le même mot (A Sang en invocations, D Abysse en gros coups), et l'Abysse porte deux vocations dans le même lot (B en invocations, D en gros coups). Aucune correction n'était possible sans enfreindre une autre règle : les huit couples sont pleins à 2.
2. **Les plafonds de valeur ne comptaient pas le réveil.** A et D avaient compris « riposte 8 et mana 2 sur la carte entière, réveil compris » ; B et C les appliquaient opération par opération. Cinq formes ultimes donnaient ainsi riposte 9 à 14, ou 4 mana. Corrigé, voir les arbitrages.
3. **Un écho sous `si` contourne le garde-fou du moteur.** Le moteur refuse de doubler une carte qui porte un écho, mais il ne regarde que le premier niveau des `ops`. D l'avait remarqué et s'en servait. Corrigé.
4. **Les crochets d'intention ennemie servent de remplissage.** `vol` (12 pôles), `elan` (11), `pietine` (10), `seul` (9) et `soinEnnemi` (8) sont le crochet de 50 pôles sur 96, presque toujours sur 2 ou 3 cartes, avec le prix le plus commode (PV). Aucune règle écrite n'est enfreinte, mais le lot se lit comme un même pôle répété.
5. **Un seul prix par pôle, répété sur toutes les cartes.** Le réflexe relevé chez B au lot 8 a gagné C (23 pôles sur 24 : un seul type de prix sur 6 cartes) et D (19 sur 24 : le même prix sur les 7 cartes). Le prix est juste et lié au pôle, mais il ne fait plus de choix cornélien : c'est un impôt.

Réflexes de gabarit, un par conteur :
- A : la prose la plus sûre, mais 17 pôles sur 24 ont un crochet d'intention ennemie sur 3 cartes (`vol`, `elan`, `pietine`, `seul`, `soinEnnemi`), et 5 colonnes au lieu de 4.
- B : des récits de choses (le poivre, la grêle, la lampe, le bonnet), presque tous excellents. Ses quatre vocations reprennent chacune un mot où B avait déjà joué l'autre vocation (Abysse, Pureté, Sécheresse, Croissance), et la Sécheresse lit `blesse` pour la troisième fois chez lui (ANT070, ANT245, ANT031).
- C : l'ironie de l'effet inverse tenue à 6 récits sur 12, comme promis ; mais le prix unique sur 6 cartes partout, et deux formes ultimes qui doublaient leur riposte au réveil.
- D : l'étrangeté la plus juste du lot. Mais 19 pôles payent le même prix sur leurs 7 cartes, et l'écho sous `si` était voulu.

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT033 | Wi'ij-Kaj, l'Enceinte des Rations | A | 82 | « On festoya avec le sel. » La chronique du siège dit et tait juste ce qu'il faut. |
| DON032 | Taaqsiut, la Fondrière des Lueurs | A | 81 | Le testament de l'angakkuq, et les peaux vendues aux marchands du sud. Le +7 « personne pour le voir » rejoint le −7 sans le copier. |
| ASS056 | Le Majles des Sorbetiers de Talesh-Bisheh | A | 81 | La recette, et le vote : « il fallait mieux choisir les apprentis ». |
| ASS153 | Le Rūnanga de Rua-Kōiwi | A | 79 | Le pari des deux morts. La chute (« discute encore de qui a gagné ») est la plus attendue de A. |
| ASS025 | Le Kaisho d'Ukigusa | A | 82 | La supplique et le baku peint. Proche de D ANT134 (village japonais, sommeil, magistrat du domaine) : toléré, voir les arbitrages. |
| ASS054 | La Djadjat de Per-Ash | A | 82 | Le serment pur et la forêt qui recule. |
| ASS140 | Le Silention d'Homichlè | A | 81 | Le feu que l'on paie pour allumer et pour éteindre, et les pirates qui lisent le calendrier. |
| ANT210 | Washa-Meskot, la Nef des Vitres | A | 80 | Le partage de l'église : la nef aux uns, les vitres aux autres. Le Cristal en invocations est la reprise unique de C ANT195. Image proche de D ANT246 (la pierre devenue verre au +7) : tolérée, c'est l'image du couple. |
| ANT018 | Yawar-Qhasa, le Névé qui saigne | A | 79 (78) | « Atoq ne dit rien. » Le Sang en invocations est un troisième emploi (toléré, voir les arbitrages). Les viscaches deviennent des conures (rongeurs à 3). Le porteur de glace rappelle B DON007. |
| ANT204 | Saglujuaq, le Bivouac des Rumeurs | A | 81 | L'ours inventé, et « l'on mangea bien, du caribou ». La place d'enchaînement est tenue (4 et 3 cartes). |
| ANT163 | Qamargha-Darra, le Défilé de la Battue | A | 81 | « On ne compta pas les rabatteurs. » Le −7 et le +7 sont les plus frappants de A. |
| ANT157 | Yakeno-machi, le Quartier refleuri | A | 80 | Jinbei qui ne bâtit jamais. Même idée que C ASS108 (la cendre qui fait fleurir) : c'est la lecture du couple, et les intrigues diffèrent. Toléré. |
| DON097 | Pevarada, le Magazen des Poivres | B | 80 | L'inventaire par étages, et « vendre les clous et ne pas venir ». La Croissance en gros coups (5 cartes, permis en Donjon) est la reprise unique de A ANT155, avec `elan`. |
| DON007 | Batk'ab, le Caveau de la Grêle | B | 80 | La course des porteurs, vingt jours. Même geste de départ que A ANT018 (monter chercher la glace) : toléré, les intrigues n'ont rien de commun. |
| ASS134 | Le Katimavik de Nuvuttiq | B | 83 | Le meilleur récit de B : la lampe que personne ne revient souffler. Exil et Foyer sont deux colonnes vraies (PV et `blesse`, garde ennemie et `cibleGarde`). |
| ASS024 | La Fraglia de Sotovento | B | 81 | Les stances du Tasse au-dessus du vide. « Fraglia » n'est pas « Scuola » (C, lot 8), voir les arbitrages. |
| ASS022 | La Sabhā de Rontéa Kpos | B | 80 | L'ordalie des tours, et les deux plaideurs qui toussent. |
| ASS122 | Les Comices de Pilleata | B | 81 | Le bonnet de l'affranchi sur toutes les têtes. |
| ANT172 | Asiypampa, la Veillée des Rieurs | B | 80 | Le lama de plus, dont Rumi « n'a parlé à personne ». |
| ANT133 | Kyamessa, la Passe des Pèlerins | B | 81 | « Il avait les mains propres, ce qui ne lui ressemblait pas. » Seule chute en parole rapportée de B. |
| ANT216 | Hydreuma Fabrorum, la Colonne gisante | B | 79 (78) | Le dilemme du forgeron. L'ostracon au centurion était une lettre, comme D ASS178 : réécrit en chronique, même intrigue, même chute. La −7 donnait 4 mana et riposte 9 avec son réveil : ramenée à 2 et 8. |
| ANT150 | eMabaleni, l'Abri du Veau tacheté | B | 79 (78) | Le veau taché devenu la fierté du royaume. La −7 portait riposte 14 avec son réveil : ramenée à 8. La Pureté lit `hesite` sans le nourrir (1 carte) : pas une colonne. |
| ANT031 | Tikin Naj, les Champignonnières | B | 78 | Le proverbe et le maïs mangé par les rieurs. La Sécheresse en invocations est la reprise unique de A ANT113, mais elle lit `blesse` pour la troisième fois chez B (ANT070, ANT245). |
| ANT177 | Los Sollares, le Remous des Esturgeons | B | 79 | L'esturgeon qui remonte avec la pierre. Première vocation d'invocations sur l'Abysse, mais B y avait joué les gros coups (CIT031), et D prend l'Abysse en gros coups dans le même lot. |
| CIT009 | Artsat-Khoshuu, la Barrière de Genièvre | C | 80 | Le commandant qui « n'a jamais osé la contredire ». |
| DON096 | Vökuhaugr, le Jarl emmailloté | C | 80 (79) | Les voleurs qui auraient dû faire du bruit. La −7 portait riposte 14 avec son réveil : le réveil fait hésiter la cible. Le +7 à 24 dégâts au réveil est permis en Donjon. |
| ASS108 | Pa-Sebakh, la Cendre fertile | C | 81 | L'engrais se paie, et Henut brûle son champ « contre le vent ». |
| ASS167 | Yakumanta, le Puma menteur | C | 82 (81) | Le meilleur récit de C. La −7 portait riposte 11 avec son réveil : ramenée à 6. |
| ASS018 | Vada Tarda, le Dernier Convive | C | 81 | « Il aurait fallu inviter le maçon. » La loi du banquet n'a rien de l'hôte de D ASS047, voir les arbitrages. |
| ASS117 | Pukiqtuuq, l'Héritage refusé | C | 79 | La place d'écho tenue à 4 cartes. La chute (« il dit que la maison sent meilleur ») est l'une des deux paroles rapportées permises. |
| ASS158 | Mikh-Khorma, le Dattier condamné | C | 80 | Le dattier qui porte le fer. Le clou n'est pas le fer cloué de D ASS041, voir les arbitrages. |
| ANT099 | Qorihuayq'o, le Lavoir de l'Inca | C | 80 | Sayri mort riche et rouillé. L'Or lit `bete` sur 2 cartes : toléré, voir les arbitrages. |
| ANT054 | Ad Talos, le Préfet chanceux | C | 80 (79) | Les osselets de corail. La −7 donnait 4 mana avec son réveil : le réveil marque la cible. Corail en invocations : reprise unique de D ANT095, avec `elan`. |
| ANT076 | Khamoshgah, le Pavillon des Mainates | C | 81 | « L'aube appartenait aux oiseaux. » Première vocation d'invocations sur le Chant, où C avait joué les gros coups (DON103, lot 5). |
| ANT062 | Däsét Natsanet, les Arêtes du Soir | C | 82 | Les barracudas et les chaînes qui rouillent. |
| ANT073 | Sarigarh, les Parterres sur la Vase | C | 81 | Les jardins empilés, et le suivant déjà commandé. |
| CIT024 | Karu Llaqta, le Fort des Mitmas | D | 81 (80) | La terre fraîche « comme après une averse ». En +3, l'écho sous `si` passe au premier niveau. « Fort » est déjà dans cinq noms en jeu, avec d'autres secondes moitiés : toléré. |
| DON098 | Tonallan, le Puits du Soleil de nuit | D | 80 | Le soleil qui se lève un peu plus à l'ouest. L'Abysse en gros coups est un troisième emploi, déclaré : toléré. |
| ASS178 | L'Unken d'Apsû-Nawrum | D | 83 | Le meilleur récit du lot. La pioche sur la Lumière reprend C DON011 (lot 3) : tolérée, voir les arbitrages. |
| ASS094 | La Kopa de Volkhovnya | D | 82 | Le charme qui marche, et les maisons sans porte où l'on tousse. |
| ASS041 | L'Apella de Sidêroûs | D | 81 | La main dorée dont les doigts changent. |
| ASS047 | Le Gorsedd d'Ystrad Medd | D | 82 | « Il ne sait plus lequel. » |
| ANT176 | Hoogezijl, le Clocher des Basses Eaux | D | 81 | La porte fermée de l'intérieur. |
| ANT134 | Fuyugomori-ura, la Baie des Hivernants | D | 80 | Le rapport dont Okabe n'a pas écrit la seconde moitié. Le « vingt » d'une ambiance doublait B DON007 : changé. |
| ANT246 | Licovindos, les Menhirs de Verre | D | 79 | Le nom pas encore gravé. La Pierre en invocations est la reprise unique de C ANT195, mais le +7 « tout devient verre » est l'image d'A ANT210. |
| ANT208 | Aaqqiktuq, les Rangs de Glace | D | 81 | Le cercle qui recule vers le camp. |
| ANT185 | Bäräkät, la Cité des Colobes | D | 80 | Le conte « pourquoi », et Askale qui ne laisse pas monter les enfants. La Ruine en invocations reprend C ANT186 avec `cibleGarde`, le crochet de D sur sa propre Ruine (ANT061, lot 4). |
| ANT142 | Akhet-Weben, la Mine des Scarabées | D | 80 | Les scarabées qui attendent devant le tombeau, tournés vers l'est. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 80,8 (80,7).** Les chutes les plus sèches, toutes les places tenues. Mais 5 colonnes, le Sang en troisième emploi, et le crochet d'intention ennemie en réflexe.
- **B, 80,1 (79,9).** Le meilleur récit de sa série (ASS134), et des documents enfin rares. Mais deux formes ultimes au-dessus des plafonds, et une lettre en double.
- **C, 80,6 (80,3).** Une ironie tenue à 6 récits, des noms refaits avec soin. Mais trois formes ultimes au-dessus des plafonds, et un seul prix par pôle partout.
- **D, 80,8 (80,8).** L'étrangeté la plus juste (ASS178, ASS047, ANT176). Mais un écho sous `si` voulu, et le même prix sur 7 cartes dans 19 pôles.

Moyenne du lot : **80,6** (80,4 avant).

## Arbitrages demandés

- **Manque de vocations libres (A 5 colonnes, C 4, D 4, B 3).**
  - **Recompte au script**, par mot et par type de vocation (invocations : 5 cartes d'invocation ou plus ; gros coups : 5 cartes de dégâts ciblés ou plus, tout type de zone). Au compte strict, **les 12 vocations du lot sont des reprises** : sur chacun des 12 mots, les lots 1 à 8 avaient déjà au moins un pôle à 5 cartes de dégâts ciblés ou d'invocations. La plupart viennent des lots 1 à 4, écrits avant le plafond de 4 dégâts ciblés par pôle (leçon 1 du lot 5), où 5 cartes de dégâts n'étaient pas un choix.
  - **Avec la lecture des conteurs** (« sa propre vocation » = le même type), deux pôles dépassent la reprise unique :
    - **A ANT018 − Sang en invocations** : troisième emploi après C ANT121 (lot 3, 6 bêtes sous une marque) et B ANT167 (lot 5, 5 bêtes sous une riposte). Crochet `vol` (avant : `vulnerable`, `elan`), prix en bête (avant : PV), vigognes et condors.
    - **D DON098 − Abysse en gros coups** : troisième emploi après C ANT161 (lot 2) et B CIT031 (lot 5). Crochet `hesiteAvant` (avant : `vulnerable`, `seul`), prix en PV (avant : exil).
  - Et l'**Abysse porte deux vocations dans le lot** (B ANT177 en invocations, D DON098 en gros coups). B y avait déjà joué les gros coups (CIT031).
  - **Tranché : toléré pour le lot 9.** Chaque pôle en cause prend un crochet, un prix et des bêtes que les emplois précédents n'avaient pas. Toute correction aurait enfreint une autre règle : les huit couples qui se remplissent eux-mêmes sont pleins à 2, donc une colonne de plus n'avait pas de place. Les 5 colonnes de A dépassent la 4e permise par LISTE.md, mais chacune est un couple réel (4 cartes de prix ou d'effet, 4 cartes de crochet). **Tolérées**, la faute est dans la répartition.
  - **Règle proposée pour la suite** (voir la leçon 1) :
    - on compte par mot **et par type** de vocation ;
    - les gros coups ne comptent que depuis le lot 5, ou quand ils étaient déclarés ;
    - un même type peut servir **trois fois** par mot dans tout le jeu, jamais deux fois chez le même conteur, et chaque emploi prend un crochet, un prix et une famille de bêtes que les précédents n'avaient pas ;
    - un mot ne porte qu'une vocation par lot ;
    - la pioche principale des Assemblées suit la même règle : elle a déjà servi sur 16 des 17 mots où D a une place de famille dans ce lot.

    C'est LISTE.md qui fait ce compte au script, avant de répartir. S'il manque encore une vocation à un conteur, elle lui réserve une 4e colonne et prend la place chez un autre conteur. Il n'y a jamais de 5e colonne.
- **Crochets d'intention ennemie saturés (C).** Recompte : `vol` 12 pôles, `elan` 11, `pietine` 10, `seul` 9, `soinEnnemi` 8, soit 50 pôles sur 96, chacun sur 2 ou 3 cartes. Les assemblages : PV/`pietine` 5, défausse/`vol` 5 (C en comptait 4), PV/`elan` 4, PV/`vol` 4, PV/`seul` 4, PV/`soinEnnemi` 4. Aucun n'est un couple au sens de la leçon 3 du lot 8, puisque le prix ne nourrit pas la condition, et aucun conteur n'en a plus de 2 du même. **Tranché : toléré pour le lot 9** (aucune règle écrite n'est enfreinte), mais c'est le premier gabarit du lot. A en est la source principale : 17 pôles sur 24, sur 3 cartes chacun. Voir la leçon 2.
- **Pôles qui lisent un crochet qu'ils nourrissent, sans colonne déclarée.**
  - **C ANT099 + (Or)** lit `bete` sur 2 cartes. Il le nourrit avec les 4 invocations que tout Antre doit avoir. **Toléré** : la colonne bête et `bete` est celle du prix en bête (C Pourriture, D Poison, 2 pôles). Dans un Antre, lire `bete` sur 2 cartes au plus sans prix en bête relève de la vocation de type, pas d'une colonne.
  - **B ANT150 + (Pureté)** lit `hesite` sur 2 cartes et ne fait hésiter que sur 1. **Toléré** : un couple demande 3 cartes au moins du côté de l'effet. Les deux places hésitation et `hesite` restent A Sève et D Sommeil.
- **Écho.**
  - **C Abondance** (ASS117 +) : 4 cartes d'écho au premier niveau (+1, +3, +5, +7), 3 cartes à doubler. **Validé.**
  - **D Foyer** (CIT024 +) : 3 cartes au premier niveau et 1 sous `si cartesJouees` (+3). Le moteur (`carteCK`, `jeu`) refuse de doubler une carte dont les `ops` contiennent `echo` **au premier niveau** seulement. La carte +3 pouvait donc être doublée par l'écho précédent, puis relancer son propre écho vers la suivante : une chaîne que le garde-fou devait empêcher. **Corrigé** : l'écho de +3 passe au premier niveau, sans condition (budget 16 pour 15, +7 %). Le pôle a toujours 4 cartes d'écho exactement, et 3 cartes à doubler (+2, +5, +7).
- **Pioche principale sur la Lumière (D ASS178 +)**, déjà principale chez C au lot 3 (DON011, un Donjon où pioche et gros coups étaient tous deux sur 5 cartes ou plus). Recompte : la pioche a déjà été principale sur 16 des 17 mots où D a une place de famille ; seul le Ciel restait libre, et D y tient sa brûlure. **Toléré**, avec un autre crochet (`hesiteAvant`), un autre prix (soin ennemi) et une autre image. La pioche des Assemblées est une vocation de type : elle passe sous la règle des vocations (leçon 1).
- **Dégâts.**
  - **B DON097 + (Croissance)** : dégâts ciblés sur 5 cartes, permis dans un Donjon (leçon 1 du lot 5), 24 au palier 6 et 30 au palier 7, permis en Donjon. **Validé**, comme la reprise unique de gros coups sur la Croissance (A ANT155, lot 5), avec `elan` au lieu de `cartesJouees`.
  - **C DON096 + 7** : 24 dégâts ciblés au réveil. Le plafond de 20 vaut hors Donjon et aux paliers 1 à 6. **Validé.**
  - **Plafonds de valeur et réveil** : la leçon 4 du lot 8 dit « riposte 8 au plus par carte ». La riposte se cumule dans le moteur (`CB.riposte += n`), et le mana d'un réveil s'ajoute à celui de la carte. **Tranché : les plafonds (riposte 8, mana 2) valent pour la carte entière, réveil compris**, comme A et D l'avaient lu. Cinq formes ultimes corrigées, à budget égal :
    - B ANT216 −7 : 4 mana et riposte 9 → 2 et 8 (le réveil frappe à 14 et marque de 2) ;
    - B ANT150 −7 : riposte 14 → 8 (le réveil donne 15 de garde) ;
    - C DON096 −7 : riposte 14 → 8 (le réveil fait hésiter la cible et frappe à 19) ;
    - C ASS167 −7 : riposte 11 → 6 (le réveil affaiblit de 2 et pioche 1) ;
    - C ANT054 −7 : 4 mana → 2 (le réveil marque de 2).
- **Récits proches.**
  - **C ASS158 (le clou du dattier) et D ASS041 (le fer cloué)** : chez C, un clou punit un arbre vivant, qui donne plus de dattes ; chez D, des offrandes de fer rouillent sur une falaise, et une main de bronze volée ne rouille pas. Le clou est le seul objet commun, et il n'a ni la même fonction ni la même chute. **Toléré.**
  - **C ASS018 (la loi du banquet) et D ASS047 (le festin de l'hôte)** : chez C, une loi d'étiquette et un passeur qui fait attendre ; chez D, un hydromel d'oubli servi à un ennemi. **Toléré.**
  - **« Fraglia » (B ASS024) et « Scuola » (C ASS169, lot 8)** : deux confréries vénitiennes, mais deux mots différents, et aucun n'est la traduction de l'autre (la « Scuola » traduit « École », pas « Fraglia »). La leçon 6 du lot 5 limite un mot d'institution à une zone **par lot**. **Toléré.**
  - Trouvés à la relecture :
    - **B ANT216 (l'ostracon au centurion) et D ASS178 (la lettre au seigneur)** : deux lettres dans le lot, alors que la leçon 5 du lot 6 limite chaque forme de document à une fois par lot. B l'appelait « ostracon », mais c'est une lettre (« Dis-moi lequel »). **Corrigé chez B**, le côté le plus faible : le récit devient une chronique, avec le même forgeron, le même dilemme et la même colonne fendue.
    - **A ANT018 et B DON007** : deux porteurs qui montent chercher la glace au sommet. Chez A, la glace blanche est préférée à la neige rouge, et le curaca veut l'année suivante la plus rare. Chez B, c'est une course pour un mort, jusqu'au réveil du volcan. **Toléré**, mais les cartes de A tiennent à ce geste, et c'est le genre de doublon que la ligne d'intrigue commune doit attraper (leçon 7).
    - **A ASS025 et D ANT134** : deux villages japonais, le sommeil ou le rêve, un magistrat du domaine. Les intrigues diffèrent (la supplique sans réponse, le rapport écrit par un autre). **Toléré.**
- **Familles d'animaux, recomptées au script sur les noms d'invocation** (2 pôles du lot au plus) :
  - **rongeurs 3 → 2** : viscaches (A ANT018 +, une carte), cuys (C ANT099 +) et castors (D ANT176 +). Les viscaches et les cuys n'avaient pas été reconnus comme rongeurs (un chinchillidé, un cavidé). **Corrigé chez A**, le côté qui pèse le moins (une seule carte) : la « Colonie de viscaches » devient une « Colonie de conures » (psittacidés, seuls dans le lot), budget inchangé.
  - **à 2, conformes** : camélidés (vigognes de A, lama de B), bovidés (taureau de B, bœuf musqué de D), coléoptères (capricorne de B, scarabées de D), primates (gelada de A, colobe de D), canidés (renard arctique de A, renard de Sechura de C), crustacés (crabe violoniste de B, bernard-l'ermite et crabe des cocotiers de C), pinnipèdes (phoque et morse, tous deux chez D).
  - Faux amis écartés : le termite n'est pas un coléoptère, la cigale n'est pas un orthoptère, le tinamou n'est pas un gallinacé, le dugong n'est pas un cétacé, le pangolin n'est pas un xénarthre. Les arachnides (scorpion et tiques de B, tarentule de C) relèvent de trois ordres différents, à la maille de la famille courante (scorpions, acariens, araignées).
- **Noms changés en cours de route (C 7, D 7) : vérifiés au script.**
  - Comparés à `noms-pris.txt` (731 noms) et entre eux, par nom entier, par moitié, par mot principal, par préfixe de 5 lettres et sur chaque mot du nom : **aucun doublon**.
  - Les anciens noms (la Qenbet, le Dadgah, le Conventus, l'Isumataq, Atezcapan, Sidêrokrêmnos, Ogof Fêl, Veendaal, Licobriga…) ne restent dans aucun nom. Les mots d'institution (qenbet, dadgah, conventus, isumataq) restent dans les récits et les cartes de leur zone, où ils sont permis, chacun dans une seule zone.
  - Tolérés comme au lot 8 : « Fort » (D CIT024), « Puits » (D DON098) et « Cité » (D ANT185), déjà dans des noms en jeu mais avec une autre seconde moitié. Tolérés aussi : Tonallan face au Cadran de Tonalixco, Sidêroûs face à Eremosíderon, Qamargha-Darra face au Divan de Yakhdarra, et Artsat-Khoshuu face aux Clous de Khöshöö-Balgas. Chaque fois, c'est un autre lieu qui partage une racine.
  - « la Nef des Vitres » (A) et « les Menhirs de Verre » (D), sur le même couple Pierre et Cristal : le mot principal diffère, mais l'image est la même. **Toléré**, voir la leçon 6.
- **Lois** : chaque pôle d'Assemblée a au moins 2 Lois, et le tag suit le texte partout. **Validé.**

## Défauts de fond (au-delà des corrections)

1. **La répartition ne compte toujours pas les vocations.** La leçon 1 du lot 8 confiait ce compte à LISTE.md ; il a été laissé aux conteurs, qui l'ont fait après la distribution, chacun à sa maille. Le résultat est le même qu'au lot 8 : des colonnes de trop, et deux troisièmes emplois.
2. **Les mots de pôle s'usent plus vite que les règles.** Neuf lots ont joué chaque mot 12 à 16 fois. Les familles principales, les vocations et la pioche ont déjà servi presque partout, et les règles « jamais deux fois par mot » ne peuvent plus être tenues à la lettre. Il faut les remplacer par des règles de différence : un autre crochet, un autre prix, d'autres bêtes.
3. **Les plafonds sont lus opération par opération.** Riposte, mana et écho passaient leurs plafonds par le réveil ou par un `si`, que le texte des leçons ne nommait pas.
4. **Le crochet et le prix deviennent du remplissage.** Le crochet d'intention ennemie sur 2 ou 3 cartes et le prix unique sur toutes les cartes sont réguliers et sûrs, mais ils rendent les pôles interchangeables.
5. **Les formes de récit sont déclarées sous leur nom de détail.** « Ostracon », « inscription » et « stèle » cachaient une lettre et deux fois le même document gravé. La liste commune doit nommer la forme, pas le support.

## Corrections faites (9 cartes, 1 récit, et une note du critique en tête de 8 zones)

**Cartes**
- A : ANT018 +5 (bête : « Colonie de conures », ambiance).
- B : ANT216 −7, ANT150 −7 (réveil).
- C : DON096 −7, ASS167 −7, ANT054 −7 (réveil).
- D : CIT024 +3 (écho au premier niveau) ; ANT134 −4 (ambiance).

**Fiches et texte**
- Récit : B ANT216 (l'ostracon devient une chronique), avec sa ligne de forme et le bilan de B.
- Une note « Note du critique (lot 9) » en tête de chaque zone touchée : A ANT018 ; B ANT216, ANT150 ; C DON096, ASS167, ANT054 ; D CIT024, ANT134. Elles sont hors des blocs ```json```.

Les budgets des cartes touchées sont recalculés au script (« recalculé par le critique »), et leurs tags suivent les opérations.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 48 fiches et 672 cartes, soit pour chaque zone un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet ≤ 250 caractères, ambiance de 12 à 20 mots, récit de 60 à 100 mots (ANT216 réécrit : 92), cinq `pal` de 160 caractères au plus.
- Opérations et conditions :
  - toutes sont connues du moteur, avec leurs arguments dans le bon ordre ;
  - aucune opération répétée au premier niveau d'une carte ;
  - sur la carte entière, réveil compris : `mana` ≤ 2 et riposte ≤ 8 ;
  - aucun écho sous `si` ;
  - `"cible":1` partout où il le faut, et le tag Loi est conforme.
- Aucune condition n'est remplie ni vidée par la carte elle-même avant son `si` (`garde`, `hesite`, `hesiteAvant`, `elan`, `vol`, `pietine`, `soinEnnemi`, `brule`, `vulnerable`, `bete`, `defausseAPrix`, `cibleGarde`, `blesse`), `si` imbriqués compris.
- Budgets :
  - 0 écart au-delà de ±15 % ;
  - chaque palier 7 est entre 45 et 55 de base, avec un réveil de 60 à 100 % et une résonance réveillée différente de la résonance posée ;
  - dégâts ciblés ≤ 20 hors Donjon aux paliers 1 à 6.
- Places : chaque conteur a 15 places de famille et 2 places rares, exactement celles de LISTE.md (l'écho à 4 cartes chez C et chez D). Les 12 familles à 6 pôles en ont 6, et les places rares 2 au plus.
- Familles :
  - pas de famille principale commune aux deux pôles d'une zone, ni aux deux pôles d'un même mot dans le lot ;
  - appoints dans 3 pôles au plus par conteur ;
  - dégâts ciblés sur 4 cartes au plus par pôle (5 en Donjon) ;
  - « tous » sur 3 cartes au plus, sans deux hésitations de tous de suite ; écho et récupération sur 4 au plus ;
  - chaque famille d'animaux dans 2 pôles du lot au plus ;
  - chaque couple qui se remplit lui-même dans 2 pôles au plus ; aucun assemblage prix-crochet dans plus de 2 pôles d'un même conteur.
- Prix : 5 cartes sur 7 au moins dans chaque pôle, à une carte près dans chaque zone.
- Nombres précis : aucun ne revient dans deux zones du lot, une fois « vingt » retiré de D ANT134. Prénoms : aucun dans deux zones.
- Les 48 noms du lot sont uniques entre conteurs (par moitié, mot principal, mot traduit et préfixe) et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés.

## Leçons pour le lot 10 (à ajouter aux consignes)

1. **Les vocations se comptent par mot et par type, avec trois emplois.** Les gros coups ne comptent que depuis le lot 5 (ou déclarés). Un même type sert trois fois par mot au plus dans le jeu, jamais deux fois chez le même conteur. Chaque emploi prend un crochet, un prix et une famille de bêtes nouveaux pour ce mot, et un mot ne porte qu'une vocation par lot. La pioche des Assemblées suit cette règle. LISTE.md fait ce compte au script **avant** de répartir. S'il manque une vocation à un conteur, elle lui réserve une 4e colonne, jamais une 5e.
2. **Crochets d'intention ennemie** (`vol`, `elan`, `pietine`, `seul`, `soinEnnemi`) : chacun est le crochet de 8 pôles du lot au plus, 2 par conteur. Un même assemblage prix et crochet d'intention sert dans 3 pôles du lot au plus.
3. **Deux sortes de prix par pôle** au moins, la seconde sur 2 cartes. Un pôle ne paie pas le même prix sur toutes ses cartes.
4. **Les plafonds valent pour la carte entière, `si` et réveil compris** : riposte 8, mana 2, dégâts ciblés 20 (hors Donjon, paliers 1 à 6).
5. **L'écho s'écrit au premier niveau, jamais sous `si`** : le moteur ne voit pas un écho caché et laisse doubler la carte qui le porte.
6. **Même couple de mots, autre image au ±7** : deux zones du même couple dans un lot ne finissent pas sur la même métamorphose (« tout devient verre ») et ne partagent pas le mot de matière du nom (Vitres, Verre).
7. **La liste commune nomme la forme réelle du récit et son geste.** Un ostracon, une tablette ou un billet adressés à quelqu'un sont des lettres. Une stèle et une inscription sont un même document. Un geste d'intrigue (monter chercher la glace, souffler la lampe) sert une fois par lot.
8. **Familles d'animaux : une table commune, à la maille de la famille courante, lue par le script.** On n'identifie pas la famille au nom : la viscache et le cuy sont des rongeurs, le termite n'est pas un coléoptère.
