# Critique du lot 10 : 48 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 9), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js`, `combat.js`, et la fonction `hesite` de `zonesplus.js`, lus sans rien y changer). LISTE.md, avec son tableau « Places des familles » et son paragraphe « Vocations », a servi de référence pour les places. Les vocations et les crochets ont été recomptés au script sur les lots 1 à 9 (768 pôles), et les fichiers familles_A.md à familles_D.md ont servi pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **81,0 / 100** (80,6 avant). Aucune zone n'est refusée et **aucune n'est sous 70** : aucune n'est donc réécrite en entier. Les corrections portent sur 31 cartes, 3 récits, 2 bandes `pal`, 1 nom de zone et des notes en tête de 12 zones :
- A, B et D : trois pôles de Donjon cachaient des gros coups (5 cartes de dégâts ciblés), et la Tyrannie de D était sa deuxième vocation du même type sur ce mot (DON120, lot 4, déclaré) ;
- B : l'enchaînement en appoint dans 6 pôles (3 au plus), le même assemblage défausse et `blesse` dans 3 pôles (2 au plus), un troisième pôle de bovidés dans le lot, et la vipère péliade, déjà bête principale du Poison chez C (lot 7) ;
- B : le sort tiré (déjà chez C, inscrit avant) et la chute de l'hivernage (déjà chez A, inscrit avant) ;
- C : le même mot principal « Eau » dans deux noms ;
- D : une carte de Donjon à 42 dégâts ciblés (plafond de 30) ;
- A : un récit qui disait deux fois sa chute.

La mécanique reste très propre. À la remise, le validateur commun (longueurs, ordre des opérations, conditions du moteur, condition rendue vraie ou fausse par une opération qui la précède, `si` imbriqués compris, plafonds sur la carte entière avec `si` et réveil, écho au premier niveau, opérations répétées, tag Loi, `"cible":1`, budgets, palier 7) ne trouvait **aucune erreur** sur les règles écrites, sauf la carte DON112 −6. Les leçons du lot 9 ont porté :
- **crochets d'intention ennemie : 7 pôles sur 96** (50 au lot 9), 2 par conteur au plus ;
- **deux sortes de prix dans les 96 pôles**, la seconde sur 2 cartes au moins, aucun prix sur les 7 cartes d'un pôle ;
- **plafonds sur la carte entière** : aucune riposte au-dessus de 8 ni aucun mana au-dessus de 2, réveil compris ; **aucun écho sous `si`** ;
- places de LISTE.md tenues à l'unité (17 par conteur, l'écho à 4 cartes chez B et C) ;
- **aucun lépidoptère en double** : les sphinx de B et les papillons de nuit de D avaient été retirés avant la remise.

Les récits restent la force du lot :
- « Le temple a une heure d'avance sur le ciel, et ne s'en excuse pas. » (B ASS027) ;
- « Ce matin, le soleil s'est levé au balcon, et le kachahri s'est prosterné. » (D ASS010) ;
- « On l'a prié de se rendormir, pour le bien de la maison. » (A ANT141) ;
- « Nous rapportons la moitié ; l'autre était trop belle pour voyager. » (B ASS004) ;
- Ukkaliq, que l'on élit chaque printemps pour défaire ce qu'elle a fait (C ASS035) ;
- la famille du plus gros éclat, « la plus juste de la côte » (C ASS119) ;
- les grenouilles qui chantent l'office plus juste que les frères (D ANT082) ;
- « C'est leur peau qui rouille. » (D ANT022).

Le défaut neuf du lot : **les plafonds sont tenus à une carte près, et les réflexes se déplacent.** Les crochets d'intention ont presque disparu, mais `blesse` les a remplacés (14 pôles, dont 5 chez B). Les couples qui se remplissent eux-mêmes sont à 2 au plus, mais 21 pôles lisent un crochet sur 3 cartes et le nourrissent sur 2, juste sous le seuil. Les Donjons ont mis 5 cartes de dégâts ciblés sous une autre famille principale, ce qui est permis par la leçon 1 du lot 5 mais fait des gros coups au sens de la leçon 5 du lot 8.

Les défauts de fond :

1. **Les gros coups cachés des Donjons.** A DON059 (Nuit et Aurore) et B DON124 (Brume) avaient chacun 5 cartes de dégâts ciblés sous une autre famille principale. Au compte de la leçon 1 du lot 9, la Nuit et l'Aurore y étaient déjà passées chez A (ASS109, lot 5). La Brume et l'Aurore portaient ainsi deux vocations dans le lot : A ANT242 et D ASS010 y tiennent l'autre. Corrigé (4 cartes).
2. **Une vocation de D sur un mot qu'il avait déjà joué.** La carte des familles de D au lot 4 déclarait sur la Tyrannie (DON120) « exil, gros coups ciblés », avec 7 cartes de dégâts ciblés. DON112 − en faisait donc un deuxième emploi chez D. Corrigé en colonne.
3. **`blesse` devient le crochet de remplissage.** Il revient dans 14 pôles (A 3, B 5, C 2, D 4), presque toujours sur 3 cartes et sans prix en PV. Il n'enfreint qu'une règle écrite, chez B (voir les arbitrages), mais il joue le rôle que tenaient `vol` et `elan` au lot 9.
4. **Les demi-couples.** 21 pôles lisent sur 3 cartes un crochet qu'ils nourrissent sur 2 (A 10, B 4, C 7) : marque et `vulnerable`, brûlure et `brule`, garde et `garde`, hésitation et `hesite`. Aucun n'est une colonne, mais le seuil est visé.
5. **Les tables de bêtes restent tenues par conteur.** Trois bovidés (saïga, bouquetin, buffle) et une péliade déjà prise ont échappé aux validateurs.

Réflexes de gabarit, un par conteur :
- A : les chutes ironiques les plus sûres (« très applaudi », « très bien respecté », « pour le bien de la maison »), mais 10 demi-couples sur 24 pôles, réglés juste sous le seuil.
- B : de très bons récits de choses (la clepsydre, l'obélisque, le chapelet), mais l'enchaînement dans 6 pôles et `blesse` dans 5. Le header annonçait ces chiffres comme « à regarder » au lieu de les corriger.
- C : l'ironie de l'effet inverse tenue à 5 récits ; mais deux noms en « l'Eau », et quatre cartes qui invoquent deux fois la même bête.
- D : l'étrangeté la plus juste du lot (ASS010, ASS107, ANT082), mais une vocation déjà jouée chez lui, connue et laissée « à trancher ».

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT023 | Kahupō, la Palissade des Manteaux | A | 82 | La ruse devenue chant, racontée devant les invités de l'amont. Le +7 (la palissade vide) est proche du +7 de D ANT071 (le sel nu) : toléré, voir les arbitrages. |
| DON059 | Aumaarjuk, le Boyau de l'Hivernage | A | 80 (79) | « Les enfants nés là-dessous appellent aurore la lueur de la lave. » Les deux pôles avaient 5 cartes de dégâts ciblés : ramenés à 4. |
| ASS116 | Les Conjecteurs de Summa Glacies | A | 81 | Le décret, et les tablettes qui ne contenaient que des comptes. |
| ASS039 | Le Hērbedestān de Tang-e Āzar | A | 81 | Le procès-verbal : le feu est pur, et « qu'on le rapproche de la route ». |
| ASS075 | Le Mir de Bezgvozdye | A | 80 | L'église sans un clou et les haches réparées au village voisin. Fer et Bois sans rien de commun avec B ASS004. |
| ASS132 | L'Umkhandlu d'eKhoweni | A | 80 (78) | L'oubli voté. Le récit disait deux fois sa chute : une seule phrase reste. |
| ANT232 | Taaqtuq, le Lacis des Lampes | A | 80 | Les lampes, les phalènes, les hérons de nuit : la seule famille de lépidoptères du lot. |
| ANT242 | Ka'ua'u, la Faille des Pétrels | A | 81 | Le kapu levé puis « très bien respecté ». Le Brume en invocations est un 3e emploi régulier. |
| ANT141 | Akakiou Kellion, la Cellule du Dormeur | A | 82 | « On l'a prié de se rendormir, pour le bien de la maison. » |
| ANT034 | Glimmerstein, le Reliquaire des Cendres | A | 81 | « Les fleurs se vendent mieux que les os. » « Des Cendres » revient chez D CIT038 : toléré, voir les arbitrages. |
| ANT123 | Khunbahā, l'Arpent du Rachat | A | 81 | Le prix du sang payé en arbres, et la vendetta « que les anciens appellent un progrès ». |
| ANT042 | Plakun-Mogila, le Tumulus des Pleureuses | A | 82 | La pleureuse qui ne sait qu'un chant, et le nom d'Ivan à chaque enterrement. |
| DON124 | Esiphingweni, la Sagaie des Brumes | B | 80 (79) | Les nasses qui ne prennent que dans le blanc, et le vieux mérou. La Brume avait 5 cartes de dégâts ciblés : 4. Clarté en gros coups validée. |
| ASS084 | Benizalte, la Clé de l'Acequia | B | 80 (79) | La clé gardée et la vanne cassée à la pioche. Le sort tiré (déjà chez C) devient un tour de rôle, voir les arbitrages. |
| ASS027 | Per-Merkhet, l'Heure de l'Eau | B | 82 | Le meilleur récit de B. L'astronome de D ASS043 est toléré, voir les arbitrages. |
| ASS020 | Solfera, les Balles jaunies | B | 81 | La quarantaine qui décolore, et le « jaune de Solfera » vendu partout. |
| ASS091 | Vetaherrera, le Recuento des Crinières | B | 82 (81) | Cristóbal qui compte les ventres ronds. Crochet de la Vie : `cartesJouees` devient `defausseAPrix`. |
| ASS004 | Iaret-Mehty, l'Obélisque du Nord | B | 82 | Le rapport, les coins de cèdre, et la moitié restée « trop belle pour voyager ». |
| ANT044 | Appaliarsuit, le Nichoir des Guillemots | B | 81 (80) | Aalasi qui s'endort avant l'oiseau. Crochet du Sommeil : `cartesJouees` devient `seul`. L'écho de l'Éveil est tenu à 4 cartes. |
| ANT024 | Sant Lèbre, le Chapelet de corail | B | 81 (80) | Le chapelet d'os et de corail. Crochet de l'Os : `blesse` devient `bete`. |
| ANT004 | Fondebise, les Crémaillères sous la Glace | B | 80 (79) | Les âtres « en bon ordre » sous la glace. Les bouquetins (3e pôle de bovidés) deviennent des lagopèdes. |
| ANT207 | Kitamagari, les Baraques du Givre | B | 79 (78) | L'ail montré par l'Aïnou. Deuxième hivernage du lot, et même fin sur « l'année suivante » qu'A DON059 : chute changée. Crochet de la Croissance : `troisCartes` devient `hesiteAvant`. |
| ANT201 | Cluain Meala, la Cueillette des Ombelles | B | 81 (79) | « Personne n'est mort, ce qui ne prouve rien. » La vipère péliade, bête principale du Poison chez C (ANT128, lot 7), devient la salamandre tachetée. |
| ANT052 | Gu-Abba, la Crapaudine engloutie | B | 81 | « La porte tourne sur une pierre que personne n'a vue. » |
| CIT010 | Shüüs-Aral, l'Île aux Gourdes | C | 80 | L'île qui monte avec la sève, et le sang des chevaux bu au siège. « Île » est déjà dans treize noms en jeu, avec d'autres secondes moitiés : toléré. |
| DON005 | Qhunuwasi, l'Or du Gouverneur | C | 79 | Les pilleurs qui grelottent au soleil : l'ironie la plus attendue de C. Glace en gros coups : 2e emploi régulier. |
| ASS035 | Nuvuksaq, le Vote du Crépuscule | C | 82 | Ukkaliq élue chaque printemps pour défaire ce qu'elle a fait. |
| ASS119 | Saviqsiuvik, le Sac des Éclats | C | 82 | L'enfant qui range les éclats. Inscrit avant B pour le sort tiré : il garde son geste. |
| ASS104 | K'anchi', l'Épi contesté | C | 81 | L'or « que les dieux avaient oublié de durcir ». |
| ASS179 | Tlalcozpan, l'Eau exaucée | C | 80 | L'offrande qui exauce trop : la lagune immobile qui pourrit. Tempête en pioche validée. |
| ASS146 | Inber Codlata, le Juge endormi | C | 81 | Le dormeur qui rêve de lui-même, puis d'un autre, et l'oublie. |
| ANT060 | Borj-e Vārūneh, l'Ouvrage à rebours | C | 81 | La tour qui monte aussi haut que le trou descend. |
| ANT090 | Ros Fíona, le Geis de la Source | C | 79 (78) | Le geis qui protège Daig. Ancien nom « l'Eau du Geis » (même mot principal qu'ASS179) : changé. |
| ANT002 | Hrímfell, le Lac de Gizur | C | 80 | La plainte exaucée en une nuit. « Lac » est déjà dans un nom en jeu : toléré. |
| ANT158 | Lua Mahi, le Festin scellé | C | 81 | La fosse qu'on rescelle « sans y croire davantage ». |
| ANT181 | Hoya del Cuerdo, les Amandiers du Fou | C | 82 | Le fou devenu le Sensé, et sa fille traitée de folle. |
| CIT038 | Hiuchi-jō, la Revue des Cendres | D | 82 | La garnison de cendre et les vides marqués à la craie. |
| DON112 | Bolurzar, le Visage du Satrape | D | 80 (78) | La facette où le satrape ne paraît pas. La Tyrannie en gros coups (2e emploi chez D) devient une colonne garde ennemie et `cibleGarde`. |
| ASS107 | Le Gubaé de Zäbol | D | 82 | L'orage posé en anneau, et le chant qui retombe plus bas d'un ton. |
| ASS043 | L'Onmyō-ryō de Hoshimi | D | 81 | Les étoiles qui passent du ciel à la glace. Deuxième astronome du couple avec B ASS027 : toléré. |
| ASS010 | Le Kachahri de Shabgir | D | 83 | Le meilleur récit du lot. La pioche sur l'Aurore est un 2e emploi régulier. |
| ASS160 | La Charité de Craiemont | D | 82 | Les comptes de la Charité, et le noyé « que nul n'a perdu ». |
| ANT131 | Sarmakan, la Quarantaine des Chameaux | D | 81 | Le troupeau revenu du nord, qui tousse. |
| ANT022 | KwaNyathi, l'Épave aux Hippopotames | D | 81 | « C'est leur peau qui rouille. » |
| ANT071 | Kavir-e Farrokh, le Mirage du Guide | D | 81 | La ville que personne n'a bâtie. D a bien changé de familles et de crochets face à A CIT023. |
| ANT082 | Zema-Gäddel, le Chœur des Lamelles | D | 82 | Les grenouilles qui apprennent l'office. |
| ANT102 | Jirghal-un Zuu, l'Âtre des Égarés | D | 81 | Le feu de la steppe qui brûle « sur rien ». |
| ANT197 | K'uychi-Mayu, la Muraille à la Dérive | D | 81 | Le mur parti en mer, debout, avec sa porte. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 80,9 (80,7).** Les chutes les plus sèches, aucune règle écrite enfreinte hors Donjon. Mais 10 demi-couples, et un Donjon aux gros coups cachés.
- **B, 80,8 (80,1).** Les meilleurs récits de choses, mais le plus de corrections : enchaînement, assemblage, bêtes, sort tiré, hivernage, gros coups cachés.
- **C, 80,7 (80,6).** Une ironie tenue, des colonnes vraies. Mais un nom en double et des invocations doublées.
- **D, 81,4 (81,3).** L'étrangeté la plus juste du lot. Mais une vocation déjà jouée chez lui, et une carte à 42 en Donjon.

Moyenne du lot : **81,0** (80,6 avant).

## Arbitrages demandés

- **Vocations, recomptées au script sur les lots 1 à 9** (invocations : 5 cartes d'invocation ou plus ; gros coups : 5 cartes de dégâts ciblés ou plus, depuis le lot 5 ou déclarés, tout type de zone ; pioche des Assemblées : 5 cartes de pioche ou plus dans une Assemblée).
  - **Déclarées et régulières** :
    - A : Ombre (2e), Brume (3e), Sève (3e) et Silence (2e) en invocations, pioche de la Corruption (1re) ;
    - B : Clarté en gros coups (1re depuis le lot 5), Sommeil, Corail, Foyer, Poison et Pierre en invocations (3e et dernier emploi chacun), Pourriture en invocations (2e), pioche du Fer (2e) ;
    - C : Glace en gros coups (2e), Ciel et Pureté en invocations (2e), Sécheresse (3e), pioche de la Tempête (1re des Assemblées ; A ANT093 était un Antre) ;
    - D : Guérison, Chant et Exil en invocations (2e), Cristal (3e), pioche de l'Aurore (2e).
  - Chaque emploi a un crochet et un prix nouveaux pour son mot (vérifié sur les pôles précédents).
  - **B, 7 vocations et aucune colonne** : permis. LISTE.md donne « une vocation de son type, ou une colonne », et ne limite que les colonnes. **Validé.**
  - **D DON112 − (Tyrannie en gros coups)** : D écrivait que DON120 (lot 4) ne comptait pas. Mais la carte des familles de D au lot 4 déclare « Tyrannie : exil, gros coups ciblés », avec 7 cartes de dégâts ciblés : c'est un emploi déclaré. D ne peut pas reprendre le même type sur le même mot. **Corrigé** : le pôle devient une colonne garde ennemie et `cibleGarde` (prix sur 5 cartes, crochet sur 4, toujours lu avant le prix), dégâts ciblés sur 4 cartes, et la carte −6 passe de 42 à 30 (plafond du Donjon). C'est la troisième colonne de D, et ce couple sert dans 2 pôles du lot (C Calme, D Tyrannie).
  - **Gros coups cachés (non déclarés)** :
    - A DON059 − et + (5 cartes chacun) : Nuit et Aurore en gros coups chez A au lot 5 (ASS109), et l'Aurore porte déjà la pioche de D ;
    - B DON124 − (5 cartes) : la Brume porte déjà les invocations de A.
    **Corrigé** : 4 cartes, à budget égal. En A −2, le bonus pioche au lieu de frapper ; en A +5, la coulée brûle (4 par tour, 3 tours) au lieu de frapper ; en B −3, deux coups de 4 au hasard.
  - **Bêtes des troisièmes emplois.**
    - Le Poison de B prenait la vipère péliade, la bête principale du Poison de C (ANT128, lot 7). **Corrigé** : salamandre tachetée.
    - Le Foyer de B a des chats, et le Foyer d'A (ANT187, lot 5) en avait un, sur une carte, sous des chiens et des renards. **Toléré** : la bête principale est nouvelle.
- **`blesse` chez B (Liberté, Mort, Éveil, Os, Foyer, sans prix en PV).**
  - Le crochet seul n'enfreint aucune règle écrite : un crochet qui n'est pas d'intention ennemie n'a de plafond qu'à 5 cartes.
  - Mais trois de ces pôles paient en défausse (Liberté, Mort, Os) : c'est le même assemblage prix et crochet dans 3 pôles d'un conteur, 2 au plus (leçon 3 du lot 8). **Corrigé** : l'Os lit `bete` (il paie déjà en bête : premier couple bête et `bete` du lot).
  - Le reste est une répétition, **tolérée** à 4 pôles. Voir la leçon 2.
  - Trouvé à la relecture : **l'enchaînement de B en appoint dans 6 pôles** (`cartesJouees` ou `troisCartes` sur 3 cartes : Tyrannie, Vie, Sommeil, Exil, Croissance, Cristal). Les leçons 1 du lot 3 et 3 du lot 6 en font une famille, en appoint dans 3 pôles d'un conteur au plus. **Corrigé** sur trois pôles, avec des crochets que ces mots n'avaient jamais eus :
    - Sommeil → `seul` (second crochet d'intention de B, avec l'élan de la Pierre) ;
    - Vie → `defausseAPrix` ;
    - Croissance → `hesiteAvant`.
- **Les « 8 pôles de A » signalés par D (crochet lu sur 3 cartes, nourri sur 2).**
  - Recompte : **10 pôles chez A** (Nuit, Aurore, Rêve, Pureté, Oubli, Mémoire, Brume, Floraison, Silence, Chant), 4 chez B, 7 chez C, aucun chez D.
  - Aucun n'est une colonne : un couple demande 3 cartes au moins du côté de l'effet, comme au lot 9 (B ANT150). Les couples qui se remplissent eux-mêmes restent à 2 pôles au plus, et les colonnes déclarées sont toutes à 4 et 4.
  - **Tranché : toléré**, aucune règle écrite n'est enfreinte. Mais c'est un réglage sous le seuil : voir la leçon 2.
- **Sort tiré deux fois (B ASS084 et C ASS119).** Les deux récits reposent sur le même geste : une main qui tire un jeton dans un contenant (la fève dans le chapeau, l'éclat dans le sac). C'est un geste d'intrigue, une fois par lot (leçon 7 du lot 9). C était inscrit avant. **Corrigé chez B** : la clé passe à tour de rôle d'une maison à l'autre, et Ginés la garde quand elle lui échoit. Même intrigue, même chute ; la carte −1 « La fève noire » devient « La clé reçue ». Le « troisième coup de pioche » d'une ambiance, même ordinal que « la troisième heure » d'ASS027, disparaît.
- **Deux astronomes (B ASS027 et D ASS043, Vide et Étoiles).** Gestes différents (mesurer l'eau contre les étoiles, lire le ciel dans la glace), intrigues différentes (l'heure d'avance gardée, les étoiles qui descendent). Les ±7 diffèrent : la cuve sèche et le toit ouvert, contre le ciel vide et le ciel sous les pieds. **Toléré**, c'est l'image du couple.
- **« L'hivernage » (A DON059 et B ANT207).** La forme est restée deux fois : familles_B.md la déclare encore sous ce nom. Les deux récits finissaient aussi sur « l'année suivante » (« Personne ne remonta l'année suivante non plus » ; « le poste, qui fut abandonné l'année suivante »). Les intrigues diffèrent : on ne remonte plus, contre l'ail montré par l'étranger. **Corrigé chez B** (inscrit après) : la chute devient « Le seigneur, au printemps suivant, envoya la relève avec du riz. » La forme réelle du récit de B est « le remède de l'étranger ».
- **Mensonge et Vérité (A CIT023, puis D ANT071).** D a bien changé :
  - Mensonge : colonne marque et `vulnerable` (A : colonne garde et `garde`) ;
  - Vérité : mana et `hesite` (A : soin du héros et `cibleGarde`) ;
  - images : le mirage devenu ville, au lieu des manteaux sur piquets.
  **Validé.** Les deux +7 mettent tout à nu (la palissade ouverte, le sel nu). Mais chez A c'est un abandon (« plus personne pour le tenir »), chez D une lisibilité totale : **toléré**.
- **Familles d'animaux, recomptées au script sur les noms d'invocation** (2 pôles du lot au plus) :
  - **lépidoptères : 1** (les phalènes de A). Les sphinx de B et les papillons de nuit de D ont été retirés avant la remise : le risque signalé par A n'existe plus.
  - **bovidés 3 → 2** : saïgas (A ANT042 −), bouquetins (B ANT004 −) et buffles (B ANT052 −). B les comptait à 2 : le saïga n'avait pas été reconnu comme bovidé. **Corrigé chez B**, qui en avait deux. Les bouquetins (2 cartes) deviennent des lagopèdes : gallinacés, à 2 avec le coq de A.
  - **serpents 2 → 1** après le changement de la péliade de B (reste la vipère de A).
  - **à 2, conformes** : corvidés (A, B), mustélidés (A, B), félins (A, B), gruidés (A, B), apidés (A, B), ardéidés (A, B), coléoptères (lucioles de A, nécrophores de B), lézards (geckos de A, varans de D), anoures (B, D), rapaces diurnes (gypaète de B, condors de D), cervidés (B, C), suidés (B, C), rongeurs (castors de C, lemmings de D), gallinacés (A, B).
  - Faux amis écartés : les chouettes et l'effraie de D sont des rapaces nocturnes (strigiformes), pas des rapaces diurnes ; le frelon (vespidés) n'est pas un apidé ; la langouste est seule chez les crustacés.
- **Tempête en pioche (C ASS179 −).** Le premier emploi de la pioche sur ce mot était un Antre (A ANT093, lot 5), qui ne compte pas comme pioche des Assemblées. De toute façon, le crochet (`cartesJouees`) et les prix (garde ennemie, exil) sont nouveaux. **Validé.**
- **Clarté en gros coups chez B (DON124 +), sans autre famille à 5 cartes.** Dans un Donjon, les gros coups sont la vocation du type : 5 cartes de dégâts ciblés font la famille principale. C'est le premier emploi compté (B lots 1 à 3, avant le lot 5 et non déclarés). **Validé.**
- **Invocations doublées (C ANT060 +4, +6, ANT090 +4, ANT002 −6)** : deux bêtes du même nom dans une carte. Le moteur invoque bien deux bêtes, aucun plafond n'est passé, et le budget les compte deux fois. **Toléré.**
- **Noms.**
  - « l'Eau exaucée » (C ASS179) et « l'Eau du Geis » (C ANT090) : même mot principal dans le lot (leçon 6 du lot 7). **Corrigé** : ANT090 devient « Ros Fíona, le Geis de la Source ».
  - « le Reliquaire des Cendres » (A) et « la Revue des Cendres » (D) : les secondes moitiés diffèrent, mais le complément est le même. **Toléré**, voir la leçon 7.
  - Tolérés comme au lot 9 : « Île » (C CIT010), « Lac » (C ANT002) et « Eau » (C ASS179) sont déjà dans des noms en jeu, avec une autre seconde moitié. Per-Merkhet et Iaret-Mehty (B) face à Per-Mehty, et Appaliarsuit face aux Filets d'Appalik : chaque fois, c'est un autre lieu qui partage une racine.
- **Lois** : chaque pôle d'Assemblée a au moins 2 Lois, et le tag suit le texte partout. **Validé.**

## Défauts de fond (au-delà des corrections)

1. **Les règles sont lues comme des seuils à frôler.** Demi-couples à 3 et 2, 5 cartes de dégâts ciblés « permises en Donjon » sous une autre famille, `blesse` partout où l'intention ennemie était interdite. Les plafonds tiennent, mais les pôles se ressemblent à nouveau.
2. **Les déclarations des lots anciens ne sont pas relues.** D a compté DON120 sur les seules cartes, sans lire sa propre carte des familles du lot 4.
3. **Les tables de bêtes s'arrêtent au lot.** Le Poison de B a pris l'espèce même de l'emploi précédent, et personne n'a reconnu le saïga comme bovidé.
4. **Les formes de récit signalées ne sont pas changées.** Le sort tiré et l'hivernage étaient signalés par les deux conteurs en cause, et laissés au critique.

## Corrections faites (31 cartes, 3 récits, 2 bandes `pal`, 1 nom, et une note du critique en tête de 12 zones)

**Cartes**
- A : DON059 −2, +5 (dégâts ciblés ramenés à 4 cartes par pôle).
- B :
  - DON124 −3 (dégâts ciblés ramenés à 4 cartes) ;
  - ANT044 −2, −4, −6 (`seul`) ; ASS091 +2, +4, +6 (`defausseAPrix`) ; ANT207 +2, +4, +6 (`hesiteAvant`) ; ANT024 −2, −5, −6 (`bete`) ;
  - ANT004 −2, −7 (lagopèdes) et l'ambiance de −2 ;
  - ANT201 −1, −4, −7 (salamandres), avec les ambiances qui nommaient la vipère ;
  - ASS084 −1 (« La clé reçue ») et l'ambiance d'une autre carte (« sous les pioches »).
- D : DON112 −1, −2, −3, −4, −6 (colonne garde ennemie et `cibleGarde`, −6 ramenée à 30).

**Fiches et texte**
- Récits :
  - B ASS084 (le tour de rôle remplace le sort tiré, 85 mots) ;
  - B ANT207 (dernière phrase) ;
  - A ASS132 (une chute au lieu de deux).
- `pal` : B ANT004 −7 (lagopèdes), B ANT201 −7 (salamandres).
- Nom : C ANT090, « Ros Fíona, le Geis de la Source », partout dans le fichier.
- Une note « Note du critique (lot 10) », hors des blocs ```json```, en tête de chaque zone touchée :
  - A DON059, ASS132 ;
  - B DON124, ASS084, ASS091, ANT044, ANT024, ANT004, ANT207, ANT201 ;
  - C ANT090 ;
  - D DON112.

Les lignes « Progression » et « Récit » de B ASS084, ANT004 et ANT201 suivent les changements. Les budgets des cartes touchées sont recalculés au script (« recalculé par le critique », ou « condition changée par le critique » quand seule la condition change : un `si` compte 50 % quelle que soit la condition). Leurs tags suivent les opérations.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 48 fiches et 672 cartes, soit pour chaque zone un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet ≤ 250 caractères, ambiance de 12 à 20 mots, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus.
- Opérations et conditions :
  - toutes sont connues du moteur, avec leurs arguments dans le bon ordre ;
  - aucune opération répétée au premier niveau d'une carte, hors les quatre invocations doublées tolérées ;
  - sur la carte entière, réveil compris : `mana` ≤ 2 et riposte ≤ 8 ;
  - dégâts ciblés ≤ 20 hors Donjon et ≤ 30 en Donjon aux paliers 1 à 6 ;
  - aucun écho sous `si` ni sous réveil ;
  - `"cible":1` partout où il le faut, et le tag Loi est conforme.
- Aucune condition n'est remplie ni vidée par la carte elle-même avant son `si` (`garde`, `hesite`, `hesiteAvant`, `elan`, `vol`, `pietine`, `soinEnnemi`, `brule`, `vulnerable`, `bete`, `defausseAPrix`, `cibleGarde`, `blesse`), `si` imbriqués compris.
- Budgets :
  - aucun écart au-delà de ±15 % ;
  - chaque palier 7 est entre 45 et 55 de base, avec un réveil de 60 à 100 % et une résonance réveillée différente de la résonance posée ;
  - chaque forme ultime s'ouvre sur une phrase de 3 à 6 mots.
- Places : chaque conteur a ses 15 places de famille et ses 2 places rares de LISTE.md (l'écho à 4 cartes chez B et chez C). Les 12 familles à 6 pôles en ont 6, et les places rares 2 au plus.
- Familles :
  - pas de famille principale commune aux deux pôles d'une zone, ni aux deux pôles d'un même mot dans le lot ;
  - appoints, enchaînement compris, dans 3 pôles au plus par conteur ;
  - dégâts ciblés sur 4 cartes au plus par pôle, 5 seulement pour les gros coups déclarés des Donjons (B DON124 +, C DON005 −) ;
  - « tous » sur 3 cartes au plus, sans deux hésitations de tous de suite ;
  - écho et récupération sur 4 cartes au plus ;
  - chaque famille d'animaux dans 2 pôles du lot au plus.
- Colonnes : A 3, B 0, C 3, D 3.
- Couples qui se remplissent eux-mêmes : 2 pôles au plus chacun.
  - à 2 : PV et `blesse` (A Fer, C Abysse), brûlure et `brule` (A Lumière, D Foyer), garde ennemie et `cibleGarde` (C Calme, D Tyrannie) ;
  - à 1 : garde et `garde`, marque et `vulnerable`, hésitation et `hesite`, défausse et `defausseAPrix`, bête et `bete`.
- Assemblages prix et crochet : aucun dans plus de 2 pôles d'un même conteur.
- Crochets d'intention ennemie : 7 pôles, 2 par conteur au plus (A `vol`, `pietine` ; B `elan`, `seul` ; C `seul`, `elan` ; D `soinEnnemi`, `pietine`).
- Prix : deux sortes par pôle, la seconde sur 2 cartes au moins ; 6 ou 7 cartes à prix sur 7 dans chaque pôle, à une carte près dans chaque zone.
- Nombres précis : aucun ne revient dans deux zones du lot. Prénoms : aucun dans deux zones.
- Les 48 noms du lot sont uniques entre conteurs (par moitié, mot principal, mot traduit et préfixe), hors les tolérances ci-dessus. Ils sont absents de `noms-pris.txt`, où ils sont maintenant ajoutés.

## Leçons pour le lot 11 (à ajouter aux consignes)

1. **Cinq cartes de dégâts ciblés font des gros coups, même dans un Donjon et même non déclarés.** Un pôle de Donjon qui a une autre famille principale s'arrête à 4. Le compte des vocations lit aussi les cartes des familles des lots anciens : un emploi déclaré compte, même avant le lot 5.
2. **Tout crochet, pas seulement d'intention ennemie, sert dans 3 pôles au plus par conteur.** Un pôle qui lit un crochet sur 3 cartes et le nourrit sur 2 compte dans son couple, avec le même plafond de 2 pôles par lot.
3. **L'enchaînement (`cartesJouees`, `troisCartes`) est une famille** : en appoint dans 3 pôles au plus par conteur, comme les autres.
4. **Une reprise de vocation change de bête principale** : la famille qui porte le plus de cartes ne doit avoir servi dans aucun emploi précédent du mot, pas même en appoint.
5. **La table commune des bêtes donne la famille scientifique de chaque nom avant l'écriture** : le saïga, le bouquetin et le buffle sont trois bovidés ; le frelon n'est pas un apidé ; la chouette n'est pas un rapace diurne.
6. **Une forme ou un geste signalé en double se change avant la remise, par le second inscrit**, et sa chute avec lui. On ne le laisse pas au critique.
7. **Noms : le complément de la seconde moitié (« des Cendres ») ne revient pas non plus dans le lot**, et un conteur ne répète jamais son propre mot principal (« l'Eau » deux fois).
