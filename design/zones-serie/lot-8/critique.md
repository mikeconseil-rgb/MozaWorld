# Critique du lot 8 : 48 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 7), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). LISTE.md et son tableau « Places des familles » ont servi de référence pour les places. Les pôles en double ont été recomptés au script sur les lots 1 à 7 (2 688 cartes), et les fichiers familles_A.md à familles_D.md ont servi pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,3 / 100** (79,8 avant). Aucune zone n'est refusée et **aucune n'est sous 70** : aucune n'est donc réécrite en entier. Les corrections portent sur 16 cartes, 7 fiches (récits ou noms) et le format :
- C : huit cartes aux valeurs hors norme (ripostes de 9 à 16, dégâts ciblés de 26 à 29 hors Donjon) et le crochet du Déluge (DON108 +) ;
- D : l'écho de la Peste ramené à 4 cartes (ASS036 −3) ;
- B : deux formes du palier 7 qui doublaient « +2 mana » dans la même carte ;
- A : trois bêtes (des addax, troisième pôle de bovidés du lot) ;
- deux noms : eMatsheni est déjà en jeu, et « l'École » double « la Scuola » ;
- quatre dernières phrases de D en « il dit que », et une durée en double.

La mécanique est aussi propre qu'au lot 7. Le validateur (longueurs, ordre des opérations, conditions du moteur, condition rendue vraie ou fausse par une opération qui la précède, `mana` ≤ 2, tag Loi, `"cible":1`, budgets, palier 7) ne trouve **aucune erreur** à la remise. Les leçons du lot 7 ont porté :
- les **places de LISTE.md sont tenues à l'unité** par les quatre conteurs (15 places de famille et 2 places rares chacun, aucune prise à un autre) ;
- aucune vocation n'est reprise par son propre auteur ;
- aucun couple de mots ne rejoue la famille principale du même mot dans le lot ;
- un seul récit en dialogue (B ASS051), aucune ouverture « X était petit quand » ;
- prix sur 5 à 7 cartes par pôle, à une carte près dans chaque zone.

Les récits restent la force du lot :
- « Personne n'a demandé dans quels os » (A CIT007) ;
- Sōemon, dont « la fille dit qu'il écrit lentement exprès » (A ANT059) ;
- « Le vin manque déjà ; le sang, pas encore » (A ASS110) ;
- « Le ciel n'est pas un motif » (B ANT098) ;
- la stèle du grand-père de celui qui avait levé la main le premier (B ASS044) ;
- « Shunsai avait tenu parole : aucun n'a rouillé » (C DON001) ;
- « À la porte du four, la loi a beaucoup d'amis » (C ASS135) ;
- « Celui qui est assis à ma place me rend mon salut » (D CIT006) ;
- la même voix derrière chaque fenêtre (D ASS093).

Le défaut neuf du lot vient de la répartition elle-même. LISTE.md donnait à chacun 17 places et laissait 7 pôles par conteur à une vocation ou à une colonne (3 au plus). Mais elle ne vérifiait pas que ces vocations étaient permises. D n'en avait que trois de libres, et il a donc dû poser une quatrième colonne.

Les défauts de fond :

1. **Des valeurs que le budget ne voit pas (C).** Une riposte de 16 pour une carte de coût 2 est dans le budget (2 points par point de riposte), mais le moteur la renvoie à chaque coup reçu par la Garde ou le héros. Contre trois ennemis, elle rend environ 48 dégâts. Les autres conteurs plafonnent à 6, 7 ou 8. De même, quatre cartes hors Donjon mettaient 26 à 29 dégâts sur une seule cible (A, B et D restent à 20 au plus hors Donjon). Corrigé, voir les arbitrages.
2. **Un plafond contourné par la répétition d'une opération (B).** ASS051 −7 et ASS044 +7 écrivaient `["mana",X,2]` deux fois de suite, soit 4 mana, plus 2 au réveil. Les deux formes étaient d'ailleurs la même carte (dégâts, 2 + 2 mana, pioche, hésitation, défausse ; réveil en mana, pioche et dégâts). Corrigé.
3. **Un tic de chute que la leçon 7 du lot 1 ne nommait pas : « il dit que ».** Six récits de D sur douze finissaient sur la parole rapportée d'un témoin (DON004, ASS060, ANT021, ANT033, ANT037, ANT174). Quatre sont repris.
4. **Les familles d'animaux : l'avertissement n'a pas suffi.** D écrivait dans sa carte des familles « A ne doit plus prendre de bovidés ». A, inscrit le dernier, a pris des addax en ne comptant que la gazelle de B. Le bouquetin de D est un bovidé. Corrigé chez A.
5. **Un nom de lieu déjà en jeu.** « eMatsheni » (D ASS180) est la place de « L'Imbizo d'eMatsheni ». Les conteurs comparent les secondes moitiés et les préfixes entre eux, mais pas la première moitié contre noms-pris.txt.

Réflexes de gabarit, un par conteur :
- A : toujours la prose la plus sûre. Ses colonnes (Sang, Cauchemar, Rêve) et l'écho de la Sève reprennent pourtant trait pour trait les quatre colonnes de D (garde et `garde`, marque et `vulnerable`, hésitation et `hesite`, brûlure et `brule`).
- B : la même facture de pôle partout. Un seul type de prix sur 6 cartes, des dégâts ciblés sur 4 cartes, un crochet sur 3 cartes, et le couple PV et `pietine` dans trois pôles (DON036 −, ASS171 +, ANT241 −). Dans les récits, la vente recule (2 sur 12), mais les documents cités dominent (note, éloge, réponse, vie, proclamation, berceuse, plaidoirie).
- C : l'ironie de l'effet inverse dans dix récits sur douze : la promesse tenue à la lettre, le conseil qui marche par erreur, la loi qui nourrit ceux qu'elle visait. Chacune est réussie, mais l'ensemble se devine.
- D : « il dit que » en chute, et la colonne brûlure et `brule` sur la Nuit, qui reprend sa Peste du lot 7 (CIT011) et sa Nuit en brûlure (DON109). Elle est tolérée, voir les arbitrages.

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT007 | Gemb Sälam, le Bastion de la Solde | A | 82 | « Personne n'a demandé dans quels os. » Os et Corail changent de famille sur les deux pôles face à B DON036. Le Corail lit `cibleGarde` comme celui de B : toléré, parce que chez A le pôle paie la garde ennemie qu'il lit. |
| DON088 | Hout-Ger, la Crypte des Chantres | A | 81 | L'enseignement du chantre, et les pilleurs « qui paient mieux que les morts ». Le Silence en gros coups est la reprise unique d'un Donjon (C DON103, lot 5), avec un autre crochet. |
| ASS034 | Le Tinkuy de Hanaq-Marka | A | 81 | Les îles liées « qui dérivent ensemble ». La Raison passe à l'exil pour s'écarter de B ASS009 : bien vu. |
| ASS110 | Le Šībūtum de Karān-Ḫursag | A | 82 | « Le vin manque déjà ; le sang, pas encore. » L'écho de la Sève tient à 4 cartes : c'est la place rare d'écho, voir les arbitrages. |
| ASS015 | Le Guruš de Qišat-Kuṣṣi | A | 80 | Le vote qui ne change rien, et Lu-Nanna qui marque les arbres. Un récit sobre, une chute attendue. |
| ASS182 | L'Office des Échansons de Ṭābat-Ṣēri | A | 82 | Bēlessunu « ne sait plus s'en passer ». |
| ANT059 | Shiokemuri-zaki, la Pointe des Adieux | A | 83 | Le meilleur récit du lot. Crabes et mouettes, chacun à 2 pôles avec B. |
| ANT063 | Khoosonbulag, le Campement de l'Hiver blanc | A | 82 | « Dulmaa, elle, se souvient surtout de la chèvre. » La Famine en invocations reprend C ANT068 (lot 3), avec d'autres bêtes et un autre crochet. |
| ANT015 | Kyndilstaðir, le Lopin de la Torche | A | 80 | Le récit du proscrit, trop proche de D CIT006, a été changé par A lui-même avant la remise. |
| ANT113 | Fontegheto, la Clepsydre du Consul | A | 81 (80) | « Qu'aucun désordre n'a eu lieu. » Les addax de la Sécheresse deviennent des hyènes (bovidés à 3). |
| ANT227 | Daluin Khad, l'Embarcadère de la Flotte | A | 80 | Deux colonnes dans la même zone (marque et `vulnerable` ; hésitation et `hesite`), toutes deux nourries par le pôle. Les juments revenues à la nage, « pas toutes ». |
| ANT146 | Ajawlel, la Cour tirée au sort | A | 81 | « Il ne restait à la cour que le roi et les singes. » Le Chaos en invocations reprend D CIT015 (lot 5) avec `pietine` au lieu de `blesse`. |
| CIT004 | Ahu-Mārama, le Pā des Nacres | B | 80 | La nacre tournée vers l'intérieur. |
| DON036 | Shorabagh, le Thana englouti | B | 79 | La note du cartographe, et l'arbre dessiné à la place du fort. Os en PV et `pietine` : voir les couples. |
| ASS051 | Le Tahtamum de Ḫana-ṣēri | B | 80 (79) | Le seul dialogue du lot, et le meilleur usage de la forme : « Et le dieu ? — Il ne prend rien. » La −7 doublait « +2 Vent » : le second mana devient une récupération. |
| ASS045 | Le Dikastérion de Thymoleia | B | 79 | La plaidoirie pour la ruche (un monologue, pas un dialogue). Le Poison (PV et `blesse`) est l'une des deux places de ce couple. |
| ASS044 | Le Multepal de Tunich Ha' | B | 80 (79) | Le récit à rebours, jusqu'au vote. La +7 était la même carte que la −7 d'ASS051, avec « +2 Feu » deux fois : le second mana devient l'hésitation de tous. |
| ASS009 | L'Ordo des Viviers de Saxum Rubrum | B | 80 | « Il n'avait jamais mangé une murène, et il n'en mangea pas. » La Folie n'a aucune Loi (comme trois pôles de D) : non bloquant. |
| ASS171 | La Lögrétta de Svefnfjörður | B | 80 | La saga brève : seule la loi des baleines tint dans le fjord. Rien de commun avec le banni de D CIT006, en dehors du Nord. |
| ANT098 | Liangfeng-sui, la Balise des Sables | B | 81 | « Le ciel n'est pas un motif. » |
| ANT164 | Peristerea, le Ravin des Colombiers | B | 80 | La vie abrégée du saint. Elle est proche de D ASS036 (même couple, guérison dont on ignore l'auteur) : tolérée, voir les arbitrages. |
| ANT228 | Nanacatepec, la Colline du Feu nouveau | B | 79 | La liste d'interdits, la seule du lot. Le Vide (`prixBete` et `bete`) est l'une des deux places de ce couple. |
| ANT241 | Bingxia-wan, la Rade du Sceau | B | 79 | « Le sceau n'a pas été mouillé. » La Tempête en invocations reprend A ANT093 (lot 5), avec `pietine` au lieu de `vol`. |
| ANT056 | Khor-e Sepideh, l'Anse des Flamants | B | 80 | La berceuse, et le père qui s'endort « dès le deuxième vers ». L'Aurore en invocations reprend D ANT105 (lot 3), avec `blesse` au lieu de `cibleGarde`. |
| DON001 | Kogane-zaki, les Sabres laqués | C | 81 | « Shunsai avait tenu parole : aucun n'a rouillé. » |
| DON108 | Tasiujarjuaq, les Inuksuit | C | 79 (78) | Pauloosie « n'avait jamais dit que ses inuksuit montraient l'eau ». Le Déluge en gros coups gardait le crochet `cibleGarde` d'A ASS017 (lot 5) : il devient `elan` (+2, +5). |
| ASS169 | La Scuola delle Balote | C | 80 (79) | Le seul scrutin de la lagune « où l'argent ne sert à rien ». +5 : de 26 à 18 dégâts, avec une marque. |
| ASS001 | Le Hreppr de Stjörnusandr | C | 81 | Kolbeinn à qui l'on demande la permission de boire. |
| ASS135 | La Zunftstube de Glutberg | C | 80 | Le seul « vous » de C, et la loi qui a beaucoup d'amis. |
| ASS049 | La Hromada de Plavyshche | C | 80 (79) | Bohdan, qui ne se plaint pas de l'odeur. +6 : de 29 à 20 dégâts, avec de la garde. |
| ANT011 | Takhtegāh, le Boutre sans plan | C | 80 (78) | Le plan mesuré après la mise à l'eau. −6 et +5 (28 dégâts chacune) redescendent à 18 et 20. |
| ANT237 | Ta-Henet, l'Ordonnance de Sennefer | C | 80 | « Il n'en a plus jamais parlé à Sennefer. » |
| ANT030 | Badda-Malih, la Banquise de sel | C | 80 (77) | Le conseil « qui marche très bien ». Les ripostes 10 et 16 passent à 6 et 8. |
| ANT230 | Wayllakancha, le Mur des Années | C | 80 | La dernière pierre, et « une autre plante à veiller ». Les suris sont des nandous (ratites, 2 avec l'autruche). |
| ANT065 | Géranóessa, l'Alphabet des Grues | C | 80 (77) | Les noms écrits de deux façons selon la saison. Renommée (« l'École » doublait « la Scuola »). Les ripostes 9 et 14 passent à 6 et 8. |
| ANT186 | Uxmuul, le Maïs sur les toits | C | 80 | Le seul +7 où le végétal couvre des maisons. |
| CIT006 | Fornhjarta, le Banc des Hors-la-loi | D | 81 | « Celui qui est assis à ma place me rend mon salut. » Le récit du banni est le seul à la première personne. |
| DON004 | Sourdeval, la Geôle des Palmiers | D | 80 (79) | Les palmiers qui font un pas chaque nuit. La chute « il dit que » est reprise. |
| ASS093 | Hoyanegra, le Concejo du Lendemain | D | 81 | La même voix derrière chaque fenêtre. « Concejo » existe déjà dans un autre nom en jeu (Ventisquera), avec une autre seconde moitié : toléré. |
| ASS180 | eDwaleni, l'Inkundla du Rocher | D | 79 (77) | Les louanges du chef devenu rocher. Renommée : eMatsheni est déjà en jeu. Le Cristal est une colonne (marque et `vulnerable`), voir les arbitrages. |
| ASS125 | Chuwi Saqil, les Pierres-Oreillers | D | 80 | « Avec du sel sur les lèvres. » |
| ASS036 | Inbhear Fiabhrais, le Cautère du Loch | D | 79 (77) | L'entaille droite dont personne ne se souvient. L'écho passait sur 5 cartes : il est ramené à 4. « Trois jours » doublait B ANT098. |
| ASS060 | Esiqhingini, l'Autre Rive | D | 81 | Zanele, attendue sur une grève que personne ne connaît. |
| ANT021 | Phuyupata, le Relais des Chasquis | D | 80 (79) | La main froide et calleuse « comme celle d'un coureur ». Chute reprise. |
| ANT033 | Rzhavets, les Amarres du Ciel | D | 80 (79) | Kuzma qui ne lève plus la tête. Chute reprise. |
| ANT037 | Marjanpur, le Jardin de Lune | D | 79 (78) | Les lueurs dans la marge de la miniature. La Nuit en brûlure et `brule` reprend la recette de D au lot 7 : tolérée. Chute reprise. Le préfixe « Marjan- » existe en jeu (le Baoli de Marjanabad) : toléré, c'est un autre nom. |
| ANT214 | Ḫurri-Parzilli, la Grotte des Présages | D | 81 | Le troisième présage interrompu. |
| ANT174 | Navanieve, la Glacière des Muletiers | D | 80 | Les dames qui n'ont plus jamais eu froid. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 81,3 (81,2).** Les meilleurs récits du lot, toutes les places tenues. Une seule faute, les addax, commise malgré l'avertissement écrit de D.
- **B, 79,8 (79,6).** De bons récits de documents et le seul dialogue. Mais la facture des pôles est la plus mécanique du lot, et deux formes du palier 7 étaient la même carte.
- **C, 80,1 (79,2).** Les chutes les plus nettes. Mais huit cartes portaient des chiffres hors norme, un crochet était repris et un nom doublait un mot traduit.
- **D, 80,1 (79,4).** L'étrangeté la plus juste (ASS093, CIT006, ASS060). Mais six chutes en « il dit que », un écho sur 5 cartes et un nom déjà en jeu.

## Arbitrages demandés

- **Colonnes vertébrales de D (4) et de A (3 ou 4)** :
  - **L'écho de la Sève (A ASS110 +) et de la Peste (D ASS036 −).** LISTE.md donne une place rare d'écho à A et à D, mais la leçon 2 du lot 5 plafonne l'écho à 4 cartes par pôle, parce que le moteur ne double pas une carte qui porte un écho. **Tranché** : la place d'écho se tient à 4 cartes exactement, et elle compte comme une famille principale. A n'a donc que 3 colonnes (Sang, Cauchemar, Rêve), et la Sève reste à 4 cartes : on n'ajoute pas d'écho en +6. La Peste de D passait sur 5 cartes. En −3, l'écho sous `si hesite` devient une brûlure de la cible : il reste 4 cartes d'écho et 3 cartes à doubler (−2, −3, −5).
  - **Les quatre colonnes de D** (Cristal : marque et `vulnerable` ; Vérité : PV et `blesse` ; Nuit : brûlure et `brule` ; Bois : garde du héros et `garde`). Vérifié au script, D n'avait aucune vocation libre :
    - Nuit et Aurore : invocations de D lui-même (ANT105, lot 3) ;
    - Brume : D ANT047, lot 5 ;
    - Feu : D ANT005, lot 4 ;
    - Bois : déjà repris (B DON003, lot 3, puis C ANT084, lot 7) ;
    - Glace : C deux fois (lots 4 et 5) ;
    - Or : trois fois ;
    - Clarté : reprise par B dans ce lot ;
    - Tyrannie en gros coups : D DON120, lot 4.

    Toutes les places de famille du lot sont prises. Toute correction aurait donc enfreint une autre règle : une vocation reprise par son auteur, ou la place d'un autre. **Toléré** : les quatre colonnes sont réelles, et chacune remplit elle-même sa condition. La faute est dans la répartition, voir la leçon 1. La Nuit est la plus faible, parce qu'elle refait la recette de D au lot 7 (brûlure et `brule` sur la Peste de CIT011, brûlure en famille sur la Nuit de DON109). Elle reste à 79.
- **Couples prix-crochet : la portée de la leçon 2 du lot 7.** **Tranché** : le plafond (2 pôles du lot) vaut pour tout couple où **le pôle remplit lui-même sa condition**, c'est-à-dire les quatre couples nommés (`prixPV` et `blesse`, défausse et `defausseAPrix`, `prixBete` et `bete`, `ennemiGarde` et `cibleGarde`) et les colonnes sans prix (garde du héros et `garde`, brûlure et `brule`, marque et `vulnerable`, hésitation et `hesite`). Un prix qui ne nourrit pas la condition (PV et `pietine`, PV et `elan`, défausse et `cibleGarde`) ne fait pas un couple : c'est une coïncidence, pas une colonne. On ne la compte pas, comme A l'a fait. Recompte au script (prix ou effet sur 3 cartes au moins, crochet sur 2 au moins) :
  - PV et `blesse` 2 (B Poison, D Vérité) ;
  - défausse et `defausseAPrix` 2 (B Étoiles, C Croissance) ;
  - `prixBete` et `bete` 2 (B Vide, C Bois) ;
  - `ennemiGarde` et `cibleGarde` 2 (A Corail, C Glace) ;
  - garde et `garde` 2 (A Sang, D Bois) ;
  - brûlure et `brule` 2 (A Sève, D Nuit) ;
  - marque et `vulnerable` 2 (A Cauchemar, D Cristal) ;
  - hésitation et `hesite` 1 (A Rêve).

  **Validé.** Le PV et `pietine` de B sur trois pôles n'est pas une faute, mais c'est un réflexe de facture : voir la leçon 3.
- **Déluge en gros coups (C DON108 +)**, après A ASS017 + (lot 5, Assemblée), où les dégâts ciblés étaient famille principale sur 5 cartes avec le crochet `cibleGarde`. **Tranché** : une famille principale de dégâts ciblés est une vocation de gros coups, quel que soit le type de zone. C'est donc la reprise unique permise entre conteurs (C se trompait en la disant « jamais jouée »), avec d'autres images (la crue d'une mangrove inuit, pas la pluie votée) et **un autre crochet**. Le `cibleGarde` de +2 et +5 devient `elan` (la crue qui prend l'ennemi en pleine charge). Les 28 et 26 dégâts de +4 et +6 restent : c'est un Donjon.
- **familles_A.md écrit après les cartes (11 h 54)** : vérifié au script contre LISTE.md. **A n'a pris aucune place d'un autre.** Il tient exactement ses 15 places de famille (secondes places en soin du héros, marque et riposte) et ses deux places rares (écho, coups au hasard), plus 4 vocations et 3 colonnes. Ses quatre couples sont à 2 avec ceux des autres, sans dépassement. Une seule faute vient de l'ordre d'écriture : les **addax** (voir les familles d'animaux).
- **Récits proches** :
  - B ANT164 (vie de saint) et D ASS036 (la vallée guérie), même couple Peste et Guérison. Les deux histoires finissent sur une guérison dont on ignore l'auteur. Chez B, le soignant est connu et son pouvoir douteux ; chez D, il est inconnu et sa trace visible (l'entaille). Les images n'ont rien en commun (colombiers, lancette). **Toléré**, mais c'est le type de collision que la ligne d'intrigue doit attraper.
  - B ASS171 (la saga du lögsögumaðr endormi) et D CIT006 (le banni dont la place est prise) : deux assemblées nordiques, deux intrigues sans rapport. **Toléré.**
  - Ce n'est pas la « vie d'une guérisseuse » : Gormlaith est la médecin de la vallée d'à côté.
  - Le seul dialogue reste B ASS051. La plaidoirie d'ASS045 est un monologue, et le « J'ai été déclaré » de D CIT006 un récit à la première personne. **Validé.**
- **Familles d'animaux, recomptées au script sur les noms d'invocation** (2 pôles du lot au plus) :
  - **bovidés 3 → 2** : gazelle (B Clarté), bouquetin (D Glace) et addax (A Sécheresse). A, inscrit le dernier et prévenu par D, change : les addax de −3, −6 et −7 deviennent la Hyène du consul, la Hyène des dunes et la Grande Hyène rayée (hyénidés, 1). Les budgets sont inchangés.
  - **à 2, conformes** :
    - bovidés, serpents (couleuvres de B et C), grues (B, C), lépidoptères (B, C), anguilliformes (murène, congre), diptères (mouches, taon), camélidés (chameau, dromadaire), batraciens (axolotl, grenouille), chiroptères (vampire, chauve-souris) ;
    - crustacés, laridés, canidés, orthoptères, coléoptères (le ver luisant est un lampyre), ardéidés, tortues, cnidaires, cétacés, hyménoptères ;
    - ratites (autruche et suri, le nandou des Andes, tous deux chez C).
  - Faux amis écartés : le poisson-perroquet (scaridé, pas un psittacidé), le termite (pas un hyménoptère), le taret (un bivalve), le labbe (un stercorariidé, pas un laridé).
- **Valeurs hautes chez C** : **corrigées.** Le budget compte la riposte 2 points par point, ce qui suppose environ deux coups reçus. Or le moteur la déclenche à chaque coup sur la Garde ou le héros, et elle se cumule. Les autres conteurs plafonnent à 8. Les dégâts ciblés hors Donjon plafonnent à 20 chez A, B et D (paliers 1 à 6). Huit cartes corrigées, à budget égal (à 15 % près) :
  - ANT030 −4 et −5 : riposte 10 → 6 et 16 → 8, plus de la garde du héros ;
  - ANT065 −4 et −6 : riposte 9 → 6 et 14 → 8, plus de la garde du héros (et en −6 l'affaiblissement de tous) ;
  - ANT011 −6 : 28 → 18 dégâts, plus de marque et une riposte 4 ;
  - ANT011 +5 : 28 → 20 dégâts, plus un affaiblissement ;
  - ASS049 +6 : 29 → 20 dégâts, plus de la garde du héros ;
  - ASS169 +5 : 26 → 18 dégâts, plus une marque.

  Aucune famille principale ne change, et aucun appoint ne dépasse 3 pôles chez C.
- **Formes de B doublées** (ASS051 −7 et ASS044 +7) : une opération répétée pour passer un plafond du moteur (2 mana par opération) est une faute, comme si elle dépassait le plafond. **Corrigé** : le second « +2 » devient une récupération (ASS051) et l'hésitation de tous (ASS044), ce qui distingue aussi les deux cartes.
- **Noms** :
  - D ASS180 devient **eDwaleni, l'Inkundla du Rocher** (« au rocher »), car eMatsheni est déjà en jeu ;
  - C ANT065 devient **Géranóessa, l'Alphabet des Grues**, car la Scuola d'ASS169 est le même mot traduit, chez le même conteur.
  - Tolérés : « Concejo » (D ASS093), « Banc », « Relais », « Grotte » et « Glacière », déjà dans des noms en jeu mais avec une autre seconde moitié ; le préfixe « Marjan- » (D ANT037) face au Baoli de Marjanabad.
  - Aucun mot principal ni préfixe ne revient dans le lot.
- **Format** : C et D écrivaient deux tableaux de 7 cartes par zone. Ils sont fusionnés en un seul bloc de 14 cartes, placé après la présentation des deux pôles, pour que le script lise partout un bloc fiche et un bloc de 14 cartes. **Fait.**
- **Lois** : quatre pôles d'Assemblée n'en ont aucune (B ASS009 −, D ASS093 +, ASS180 +, ASS060 +), mais l'autre pôle de chacune de ces zones en a. **Non bloquant.**

## Défauts de fond (au-delà des corrections)

1. **La répartition des places ne voit pas les vocations.** LISTE.md a réparti les familles, mais elle a laissé à chaque conteur 7 pôles « vocation ou colonne » sans vérifier quels mots pouvaient encore porter une vocation. D n'en avait que 3, et la règle des 3 colonnes ne pouvait pas tenir.
2. **Le budget ne protège pas des valeurs extrêmes.** Une riposte, une brûlure de tous ou des dégâts ciblés restent dans la table à n'importe quelle hauteur, tant que le reste de la carte est vide. Le lot 8 a des cartes « un seul chiffre » chez C, et c'est un risque d'équilibre que le validateur ne voit pas.
3. **Les colonnes se copient d'un conteur à l'autre.** Les quatre colonnes de D et les quatre pôles hors famille de A sont les mêmes assemblages. Une colonne n'est pas une place rare, mais elle s'épuise de la même façon.
4. **Les avertissements écrits ne sont pas relus.** D avait écrit « A ne doit plus prendre de bovidés », et A a écrit sa carte des familles après ses cartes. La carte se remplit avant d'écrire, et le dernier inscrit relit les avertissements des autres.
5. **Les tics de chute se déplacent.** « Sans X » et « Morale : » ont disparu. Le témoin qui « dit que » les a remplacés.

## Corrections faites (25 objets modifiés : 16 cartes, 7 fiches, le format de C et de D, plus une note du critique en tête de chaque zone touchée)

**Cartes**
- A : ANT113 −3, −6, −7 (bêtes ; noms de carte −3 « La Hyène du consul », −6 « Le Clan des dunes » ; ambiances −3 et −6).
- B : ASS051 −7, ASS044 +7.
- C : ANT030 −4, −5 ; ANT065 −4, −6 ; ANT011 −6, +5 ; ASS049 +6 ; ASS169 +5 ; DON108 +2, +5 (crochet).
- D : ASS036 −3.

**Fiches**
- Noms : ASS180 (D, et ses 7 mentions), ANT065 (C).
- Récits : DON004, ANT021, ANT033 et ANT037 (D, dernière phrase) ; ASS036 (D, « trois jours » → « jusqu'au dimanche »).

**Format** : C et D, un bloc de 14 cartes par zone au lieu de deux blocs de 7.

Les budgets des cartes touchées sont recalculés au script (« recalculé par le critique »), et leurs tags suivent les opérations.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 48 fiches et 672 cartes, soit pour chaque zone un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet ≤ 250 caractères, ambiance de 12 à 20 mots, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2, et aucune carte ne répète une opération de mana. `"cible":1` est partout où il le faut, et le tag Loi est conforme.
- Aucune condition n'est remplie ni vidée par la carte elle-même avant son `si` (`garde`, `hesite`, `hesiteAvant`, `elan`, `vol`, `pietine`, `brule`, `vulnerable`, `bete`, `defausseAPrix`, `cibleGarde`, `blesse`).
- Budgets : 0 écart au-delà de ±15 %. Chaque palier 7 est entre 45 et 55 de base, avec un réveil de 60 à 100 % et une résonance réveillée différente de la résonance posée.
- Places : chaque conteur a 15 places de famille et 2 places rares, exactement celles de LISTE.md (l'écho à 4 cartes chez A et chez D).
- Familles :
  - pas de famille principale commune aux deux pôles d'une zone, ni aux deux pôles d'un même mot dans le lot ;
  - appoints dans 3 pôles au plus par conteur ;
  - dégâts ciblés sur 4 cartes au plus par pôle (5 en Donjon) ;
  - « tous » sur 3 cartes au plus ; écho et récupération sur 4 au plus ;
  - crochets sur 4 cartes au plus ;
  - chaque famille d'animaux dans 2 pôles du lot au plus ;
  - chaque couple prix-crochet ou effet-crochet dans 2 pôles au plus.
- Prix : 5 cartes sur 7 au moins dans chaque pôle, à une carte près dans chaque zone.
- Les 48 noms du lot sont uniques entre conteurs (par moitié, mot principal, mot traduit et préfixe) et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés.

## Leçons pour le lot 9 (à ajouter aux consignes)

1. **LISTE.md vérifie les vocations avant de répartir.** Pour chaque conteur, elle compte au script les mots qui peuvent encore porter une vocation (pas déjà joués en vocation par lui, pas déjà repris). S'il en manque, elle échange une place avec un autre conteur au lieu de laisser une colonne de trop.
2. **La place d'écho se tient à 4 cartes** (le plafond du moteur), et elle compte comme famille principale. Jamais 5, même sous un `si`.
3. **Une colonne est un couple qui se remplit lui-même**, avec un prix (PV et `blesse`, défausse et `defausseAPrix`, bête et `bete`, garde ennemie et `cibleGarde`) ou sans prix (garde et `garde`, brûlure et `brule`, marque et `vulnerable`, hésitation et `hesite`). Chaque couple sert dans 2 pôles du lot au plus. Un prix qui ne nourrit pas la condition (PV et `pietine`) n'en est pas un, mais le même assemblage ne revient pas dans plus de 2 pôles d'un conteur.
4. **Plafonds de valeur, en plus du budget** : riposte 8 au plus par carte ; dégâts ciblés 20 au plus hors Donjon aux paliers 1 à 6. On ne répète pas une opération dans une carte pour passer un plafond (deux « +2 mana »).
5. **Une reprise de mot prend un autre crochet que le pôle d'origine**, quel que soit le type de zone : une famille principale de dégâts ciblés compte comme des gros coups.
6. **Noms** : la première moitié (le nom de lieu) se compare aussi à noms-pris.txt, et le mot traduit compte, y compris chez le même conteur (Scuola et École).
7. **Chutes** : « X dit que », ou le témoin dont on rapporte la parole, compte comme une tournure de fin, deux fois au plus par conteur et par lot. Chez C, l'ironie de l'effet inverse ne fait pas plus de 6 récits sur 12.
8. **La carte des familles s'écrit avant les cartes, et le dernier inscrit relit les avertissements des autres** (bêtes, couples, places) avant de remettre.
