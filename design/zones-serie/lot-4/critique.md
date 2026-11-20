# Critique du lot 4 : 48 zones à cartes et 64 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 3), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). Les lots 1 à 3 ont servi de référence pour les pôles en double, et les fichiers familles_A.md à familles_D.md pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,7 / 100** (78,9 avant). Aucune zone refusée. Trois zones étaient sous 70 et sont réécrites en entier (14 cartes chacune) : **CIT039** (A, 66), **ASS157** (C, 67) et **ASS124** (C, 65). Elles passent à 79. Deux autres pôles sont réécrits en entier parce qu'ils recopiaient un pôle d'un autre conteur : **ASS172 +** (A, Mémoire) et **ASS032 +** (D, Mémoire).

Les leçons du lot 3 sont appliquées sur la mécanique pure. Aucun opérateur n'est cassé, aucun `mana` ne dépasse 2, le tag Loi est conforme, et chaque forme du palier 7 pose, réveille, ouvre sur sa phrase et paie. Aucune condition n'est testée après l'opération qui la remplirait. La carte commune des familles a été remplie, et les quatre conteurs ont signalé eux-mêmes leurs collisions, ce qui a beaucoup aidé.

Les récits restent bons, parfois très bons : le chiffre regravé jusqu'à faire une cuvette où l'eau croupit (ANT190), « l'unanimité moins une voix, les bancs ayant été montés sur le toit » (ASS118), le chameau debout au fond du baoli, « blanc jusqu'aux cils » (ANT095), l'appel qui compte deux cent six voix pour cent soixante-neuf hommes (CIT035), les gourdes pleines au bassin salé (DON126). Mais le lot 4 a un défaut neuf, qui tient à sa taille.

**Avec 48 zones, les mots de pôle reviennent trop.** Oubli/Mémoire revient cinq fois (ASS172, DON072, ANT202, ASS032, CIT035), Vide/Étoiles et Os/Corail quatre fois chacun, Tempête/Calme trois fois. Chaque conteur n'a vu que ses propres reprises. Les défauts de fond, tous corrigés :

1. **Des pôles qui se recopiaient d'un conteur à l'autre**, sur le même couple de mots :
   - Mémoire : ASS172 + (A) reprenait la pioche et la garde de CIT035 + (D) ; ASS032 + (D) et ANT202 + (C) jouaient tous deux la récupération, et ASS032 + ajoutait la marque de DON072 +.
   - Corail : CIT039 + (A) et ANT095 + (D) étaient deux pôles de bloqueurs et de garde des alliés, avec un nom en « Marjan » des deux côtés.
   - Calme : ASS124 + (C) recopiait la garde du héros de DON046 + (B).
   - Vide : ASS157 − (C) marquait 7 cartes sur 7, comme la forme marque de DON126 +.
2. **Trois zones monotones** : la Tempête d'ASS124 frappait « tous les ennemis » 7 fois sur 7, l'Os de CIT039 était « X dégâts à la cible » 7 fois avec la même condition `pietine`, les Étoiles d'ASS157 n'étaient que des gros coups payés en garde ennemie.
3. **La récupération au-delà de ce que fait le moteur** : ANT202 + récupérait sur 7 cartes, alors que `recup` est plafonné à 2 par tour et saute les cartes qui récupèrent elles-mêmes. La moitié de ces cartes ne faisait rien en jeu.
4. **Une condition morte** : `defausseCommune` (ASS032 −2, −4, −6). Depuis le 18 novembre, les cartes communes ne sont plus dans le paquet ; la condition ne peut plus être vraie.
5. **Des réflexes de gabarit**, un par conteur :
   - A : le mana revenait en appoint dans 6 pôles (ANT190, ANT166, ASS118, DON041, ANT217, ASS172), toujours sur +2, +4, +6.
   - B : les comptes doubles (« Deux registres », « Celui des… ») dans ANT211 et DON115, et « Carnet… encore » dans DON046 et CIT017.
   - C : les nombres précis en « trente-X » (ANT110, ANT195, ANT184, ASS143) et « la règle lue » dans une dizaine de récits.
   - D : « l'ennemi en tête » dans 11 cartes qui visaient en fait la cible, et le témoignage juré revient (DON035, DON120).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT190 | Les Grèves d'Ak Ek' | A | 81 (79) | Le chiffre gratté et regravé jusqu'à faire une cuvette : la meilleure image de A. Le mana des +3, +4 et +6 passe à 4 points (le soin le remplace en partie), pour casser le tic du lot. |
| ANT041 | Skuggaskáli, le Naust des Dunes | A | 82 | Le jour qui passe entre les bordages, et le jarl qui taxe les rais. L'Ombre et la Lumière ne se ressemblent en rien. |
| ANT200 | Les Vasières de Koh Damnek | A | 81 (80) | Le compte des bâtons qui croît, celui des pêcheurs martelé. Le Sommeil est l'un des deux pôles d'hésitation du lot ; −1 et −6 soignent un peu moins. |
| ANT217 | Les Îles aux Juments de Dalai-Aduu | A | 80 (76) | Oyuun et ses noms de pâturages. La Folie partait en gros coups comme celle de DON126 (C) : elle lâche plus de juments (−1, −3, −5). Le +6 soigne au lieu de garder les alliés (plafond de la garde des alliés). |
| ANT166 | Statio Ursaria, le Poste des Ours | A | 82 (81) | Les deux pistes, côte à côte, qui montent. Le +4 pioche au lieu de donner du mana. |
| ASS118 | L'Anjoman des Vannes de Nayzar | A | 80 (76) | Le procès-verbal sous l'eau. La Rouille reprend la brûlure de DON020 (lot 2) mais en Lois et sur un crochet `brule` : toléré. Le +2, le +4 et le +6 perdent mana et garde des alliés. |
| ASS101 | Le Khural de Davs-Ulaan | A | 79 | Le khural « à mi-chemin des feux, pour ne froisser personne ». Exil/Foyer suit de près ANT016 (lot 3) dans son idée, mais les cartes diffèrent. |
| ASS172 | L'Airecht de Lios Aodha | A | 81 (74) | La satire qui « brûle sur la joue » : très bon. La Mémoire recopiait CIT035 + (pioche, garde). Elle devient la satire elle-même : pioche, coups et brûlure sur 4 cartes, crochet `brule`, sans garde. |
| DON072 | Le Hursag des Noms grattés | A | 82 | Le nom plus ancien, au fond du creux, que personne n'a su lire. La meilleure des cinq zones Oubli/Mémoire, et celle qu'on garde comme référence. |
| DON080 | Le Sanctuaire de Khyal-Sngat | A | 81 (78) | « Le tarif de la tempête n'est pas gravé. » La Tempête jouait le hasard sur `elan`, comme ANT192 (lot 2) : le crochet devient `vol` (−2, −4, −6). |
| DON041 | Les Îles-Jardins de Khwabnagar | A | 81 (78) | L'île plantée sans titre, dont on a retiré l'échelle. Le Rêve soigne les alliés comme CIT028 (lot 2) : son crochet passe de `hesite` à `bete`, et le mana des +2, +4 et +6 est retiré. |
| CIT039 | Le Qila de Pahar-Sipi | A | 79 (66) | **Réécrite.** Le testament et Daud qui « a commencé à tailler » sont gardés. Le nom en « Marjan » doublait ANT095 (D) : la zone devient le Qila de Pahar-Sipi. L'Os était sept fois « X dégâts à la cible » sur le crochet `pietine` de CIT003 ; il devient gros coups, garde du héros et affaiblissement, sur `blesse`. Le Corail recopiait les bloqueurs d'ANT095 + ; il devient la garde du héros sur 7 cartes, avec trois bloqueurs de corail, la marque et la pioche, sur `vulnerable`. |
| ANT225 | Le Mouillage de Kérasmos | B | 83 | Une louche de vin pour trois d'eau, et le rival qui vend le vin pur. L'écho de la Raison est l'un des deux du lot. |
| ANT089 | Les Fourmilières d'Arnaqtuq | B | 82 | La moitié du village qui creuse pour les scorpions : la meilleure chute de B. Le Poison est le second pôle d'hésitation. |
| ANT211 | La Caverne d'Âyinehkar | B | 82 | Les chauves-souris qui se jettent sur leur reflet. Le +7 dépassait 250 caractères et disait mal sa riposte : réécrit au texte. |
| ANT040 | Les Clos de Port Feamainn | B | 81 | La terre noire au prix du beurre. « L'ennemi vole » devient « la cible vole » sur −2, −3 et −6, ce que teste vraiment le moteur. |
| ANT001 | Le Relais de Sharga-Bulag | B | 82 (81) | Le cavalier à la tablette d'argent. La Pureté est le seul pôle d'enchaînement du lot. Ses bonus étaient écrits « +X » sans dire de quoi : +1, +4, +6 et +7 détaillés. |
| ASS048 | Le Concejo des Neiges de Ventisquera | B | 80 | Le poinçon qui « ressort propre plus souvent qu'avant ». Corruption/Pureté juste après ANT001 chez le même conteur, mais des cartes très différentes. |
| ASS078 | Le Consiglio de Sabbionara | B | 80 | Le fondaco qui dort, et le seul capitaine debout à midi. |
| ASS014 | Le Conseil des Cailloux d'Ezinkomeni | B | 81 | La galerie du fond où personne n'aime plus porter la lampe. |
| ASS103 | Le Cabildo de l'Atalaya de Bermejal | B | 77 | La mer qui rougit et les résiniers qui ne descendent pas voir. Le Sang et la Sève se touchent peu dans les cartes ; la zone est solide mais sans surprise. |
| DON046 | La Grotte de Poll Gaoithe | B | 81 | « La grotte me laisse passer. » Le Calme de la garde du héros est gardé ici : c'est ASS124 qui change. « L'ennemi vole » corrigé sur −2, −4 et −6. |
| DON115 | Le Zygostasion de Prasonèsi | B | 81 (80) | Les poids de pierre revendus pour lester les filets. L'ouverture « Deux registres » reprenait celle d'ANT211 : récrite. Le Cristal garde la marque (ANT195 la réduit). |
| CIT017 | Gedel-Kokeb, la Citadelle à la Corde | B | 81 (80) | La corde qui ne descend pas les nuits sans étoiles. La chute répétait « Carnet… encore » de DON046 et le « dix » de DON120 : récrite. Le Vide garde la perce-garde, sur `seul`. |
| ANT110 | Les Îles-champs d'Ambar-Diri | C | 81 | « Les buffles n'ont rien perdu. Ils attendent dans le chenal. » Rouille/Or comme ASS118, mais en bêtes et en champs : toléré. |
| ANT195 | Les Salines d'Iztapocan | C | 80 (79) | Tlacotzin qui change sa natte de place chaque soir. Le Cristal marquait comme DON115 (B) : la marque passe à 2 sur +5 et +6. |
| ANT007 | Atishdan, le Cratère aux Caracals | C | 82 | Le caracal qui ne retombe pas du côté des hommes. Le plus net des quatre Vide/Étoiles. |
| ANT184 | Wolfsglas, l'Église des Loups | C | 81 | La tache de feu que les freux couvent, la clé jetée dans le puits. |
| ANT202 | Les Radeaux à cormorans de Yuliangdu | C | 81 (78) | Les cormorans qui oublient le radeau du vieux Qiu : la chute est excellente. Mais la Mémoire récupérait sur 7 cartes : +2, +3, +5 et +6 piochent à la place, la récupération ne reste que sur 3 cartes. |
| ASS121 | Le Qaggiq d'Aqitsoq | C | 79 | Le tambour posé, et le rire qui vient quand même. |
| ASS143 | Le Warka d'Addi Kerkerra | C | 78 (77) | « On l'enfuma. Le vent tourna. » Le récit expliquait trop vers son milieu : resserré. |
| ASS157 | Le Paepae d'Ōtāhuri | C | 79 (67) | **Réécrite.** Le ciel « qui n'a plus de cases » est gardé. Le Vide marquait 7 cartes sur 7 (DON126) et les Étoiles n'étaient que des gros coups payés en garde ennemie. Le Vide devient perce-garde et hésitation, sur `hesite`, payé en défausse ; les Étoiles piochent, frappent, récupèrent (3 cartes) et donnent du mana d'Eau, sur `seul`, payées en garde ennemie. |
| ASS124 | L'Indaba de Sikhotheni | C | 79 (65) | **Réécrite.** La lance à pointe de cuivre est la meilleure chute de C. Mais la Tempête frappait « tous » 7 fois sur 7 et le Calme recopiait DON046 +. La Tempête devient marque, coups ciblés et dégâts à tous sur 3 cartes, crochet `elan`, payée en PV ; le Calme soigne les alliés, fait hésiter la cible (4 cartes), pioche et enchaîne sur 3 cartes. |
| DON126 | Halophoros, les Galeries du Géomètre | C | 80 | « Je ne mens qu'à qui a soif. » La Folie garde ses gros coups (ANT217 change) et son crochet `blesse` (le second crochet du lot sur 5 cartes ou plus). |
| DON061 | L'Ossuaire de Riffstein | C | 82 | « Ce qui n'a pas de nom n'est à personne. » Les quatre Os/Corail du lot se séparent maintenant. |
| CIT003 | Sangomori, le Fort de chaux | C | 79 | Les murs blanchis avec ce qui sort du four. L'Os garde le crochet `pietine` (CIT039 change). |
| ANT095 | Le Baoli de Marjanabad | D | 81 (80) | Le chameau blanc jusqu'aux cils. Le Corail garde ses bloqueurs ; le +5 donne la garde au héros au lieu des alliés (plafond). |
| ANT223 | Qilinpo, le Camp des Envoyés | D | 83 | La lettre coupée au milieu d'une phrase, et le bambou plus long. La meilleure zone du lot. |
| ANT061 | Les Hautes Termitières d'eNhlwathi | D | 81 (80) | Les tours qui continuent « du même pas, sans un manque ». « L'ennemi en tête » devient « la cible » sur +1, +4 et +6. |
| ANT140 | Ihuitepec, les Îles-Volières | D | 82 (81) | Les îles qui avancent contre le vent. Même correction de cible sur +1, +4 et +6. |
| ANT005 | La Berloga de Tchernoskal | D | 81 | Les traces qui fondent la neige jusqu'à la roche, vers le village. |
| ASS032 | La Sala des Ôles de Srah Kbal | D | 80 (74) | Les ôles « qui parlent de nous ». L'Oubli testait `defausseCommune`, morte : le crochet devient `elan`. La Mémoire récupérait comme ANT202 et marquait comme DON072 : +2 à +7 réécrits (récupération sur 4 cartes, pioche, crochet `defausseAPrix`, sans marque). |
| ASS100 | Les Qollqa de Sara-Urqu | D | 80 | Le bras couvert de radicelles, et « bon » aussi. Le +3 est rééquilibré. |
| ASS098 | Le Vétché de Smolna Pouchtcha | D | 80 (78) | Le résinier à la mâchoire de pierre. La Pierre affaiblissait sur 7 cartes : −2, −3 et −5 passent à 4 points d'affaiblissement de moins. L'écho du Cristal est l'un des deux du lot. |
| DON035 | Per-Shena, le Grenier sous la Glace | D | 82 (81) | Le grain qui déborde du toit cassé. Cible corrigée sur −4 et −6. |
| DON120 | Sabzgarh, le Fort sur la Digue | D | 81 (79) | « Ils dorment très bien. » La Tyrannie exilait 6 cartes sur 7 : −2 et −3 paient en PV, l'exil reste sur 4 cartes. Le +1 perd son soin. Cible corrigée sur +2, +4 et +6. |
| DON083 | Linn nan Lann, le Bassin des Lames pliées | D | 80 | La lame qui remonte le courant, droite. |
| CIT035 | Kār-Tâmti, la Citadelle de l'Appel | D | 81 | Deux cent six voix pour cent soixante-neuf hommes. La Mémoire de la garde est gardée ici (ASS172 change). |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 80,8 (77,6).** Toujours la meilleure prose (ANT190, DON072, ASS172). Mais une zone sous 70 (CIT039), le mana en appoint dans 6 pôles, et trois reprises de familles des lots 2 et 3 qu'il avait lui-même signalées sans les corriger.
- **B, 80,9 (80,7).** Le lot le plus propre : aucune collision ne venait de lui, et rien n'a été réécrit. Les corrections sont de lisibilité (« l'ennemi vole », bonus « +X ») et de gabarit (deux comptes, deux carnets).
- **C, 80,1 (77,5).** De belles chutes (ANT202, ASS124, DON126), mais deux zones sous 70, toutes deux sur des mots de pôle déjà pris dans le lot, et la récupération d'ANT202 que le moteur ne pouvait pas jouer.
- **D, 81,0 (79,8).** Les chutes indicibles toujours justes (ANT095, ANT223, CIT035). La condition morte, « l'ennemi en tête » dans 11 cartes, et la Mémoire d'ASS032 sont les seuls défauts.

**Ressources (64)** : A 81 (79), B 81 (80), C 80 (79), D 81 (80). Les gestes sont variés et les récits courts. Il y avait deux doublons d'objet, deux doublons de geste, un troisième produit tinctorial et deux noms qui commençaient par le même mot (voir les arbitrages).

## Arbitrages demandés

- **CIT035 (D) et ASS172 (A), Oubli/Mémoire, mêmes familles et crochet `garde`** : **corrigé dans ASS172 +**, réécrit en entier (voir le tableau). CIT035 garde la garde ; ASS172 joue la satire (pioche, coups, brûlure, crochet `brule`).
- **ANT095 (D) et CIT039 (A), Corail** : **corrigé dans CIT039**, réécrite et renommée (le « Marjan » des deux noms faisait doublon). ANT095 garde les bloqueurs et la garde des alliés ; CIT039 + garde le héros.
- **CIT003 (C) et CIT039 (A), `pietine` sur l'Os** : **corrigé dans CIT039** (crochet `blesse`). CIT003 garde `pietine`.
- **ASS032 (D) et ANT202 (C), récupération des deux côtés ; ANT202 récupère sur 7 cartes** : **corrigé des deux côtés.** Le moteur applique `recup` deux fois par tour au plus et saute les cartes qui récupèrent : 7 cartes de récupération ne jouent pas. ANT202 + passe à 3 cartes de récupération (+2, +3, +5, +6 piochent). ASS032 + est réécrit sur 4 cartes de récupération, avec un crochet différent (`defausseAPrix`) et sans la marque de DON072 +. Total du lot : 3 pôles où la récupération est famille d'appoint, aucun où elle domine.
- **DON126 (C) et ANT217 (A), Folie en gros coups** : **corrigé dans ANT217 −**, qui lâche plus de juments et frappe moins. DON126 garde les gros coups.
- **Cristal et marque, DON115 (B) et ANT195 (C)** : **corrigé dans ANT195** (marque à 2 sur +5 et +6, famille d'appoint seulement). DON115 garde la marque.
- **Calme et garde du héros, DON046 (B) et ASS124 (C)** : **corrigé dans ASS124**, réécrite (soin des alliés et hésitation ciblée).
- **Vide et perce-garde, CIT017 (B) et ASS157 (C)** : **validé après réécriture d'ASS157.** Le Vide d'ASS157 était une copie de la marque de DON126 + ; il devient perce-garde, mais avec l'hésitation en appoint, le crochet `hesite` et un prix en défausse. CIT017 joue sur `seul` et sans hésitation. La perce-garde est à 6 pôles, soit le plafond.
- **Vide/Étoiles quatre fois** (ANT190 A, CIT017 B, ANT007 C, ASS157 C) : **validé.** Vide : mana et soin (ANT190), perce-garde sur `seul` (CIT017), bêtes qui bondissent (ANT007), perce-garde et hésitation (ASS157). Étoiles : chacune a une autre famille principale. Pour le lot 5, quatre fois le même couple est trop (voir les leçons).
- **Reprises par A de familles des lots précédents** :
  - Tempête en coups au hasard (ANT192, lot 2) : **corrigé dans DON080** (crochet `vol` au lieu de `elan`).
  - Rouille en brûlure (DON020, lot 2) : **toléré pour ASS118.** Les cartes sont des Lois, et le crochet `brule` diffère du `cibleGarde` de DON020.
  - Mémoire en pioche (ASS071, ANT179) : **réglé par la réécriture d'ASS172 +**, qui ne garde la pioche qu'en appoint.
  - Rêve en soin des alliés (CIT028, lot 2) : **corrigé dans DON041 +** (crochet `bete`, mana retiré).
- **Plafonds des familles** (vérifiés au script, famille principale = 5 cartes ou plus, réveil compris) : **tenus après correction.**
  - Deux pôles au plus : hésitation 2 (ANT200 −, ANT089 −), coups au hasard 2 (DON080 −, ANT061 +), vol de vie 2 (DON041 −, ANT001 −), écho 2 (ANT225 −, ASS098 +), enchaînement 1 (ANT001 +).
  - Six pôles au plus : riposte 6, dégâts à tous 6, affaiblissement 6, brûlure 6, mana 6, soin du héros 6, perce-garde 6, marque 5, soin des alliés 5, garde du héros 5, garde des alliés 5, exil 3, récupération 3. Avant correction, la garde des alliés, le mana et la marque passaient le plafond.
  - L'invocation, les gros coups ciblés et la pioche sont des vocations de type et ne sont pas plafonnées.
  - Crochets sur 5 cartes ou plus : `cartesJouees` (ANT001 +, B) et `blesse` (DON126 −, C). Deux pôles, un par conteur : conforme.
- **DON120 (D), exil sur 6 cartes sur 7** : **trop, corrigé.** L'exil reste sur 4 cartes (−2 et −3 paient en PV). C'est conforme à l'arbitrage du lot 3 : une carte exilée revient au combat suivant, et le budget compte l'exil comme un prix de 3.
- **Lisibilité** :
  - `elan` et `pietine` sur des cartes sans cible : le moteur prend alors le premier ennemi vivant. 11 cartes de D disaient « l'ennemi en tête » en jouant contre lui ; elles visent maintenant la cible (`"cible":1`) et le disent.
  - « L'ennemi vole » (B, 6 cartes) devient « la cible vole », ce que teste `vol`.
  - `defausseCommune` : condition morte depuis le retrait des communes. ASS032 −2, −4 et −6 passent à `elan`. Ne plus l'utiliser.
  - « 3 dégâts, 9 si… » : la tournure est claire quand le 9 est le total ; le validateur vérifie que le second nombre est bien la somme des deux opérations. Aucune erreur.
  - Bonus « +X » sans objet (ANT001) : détaillés.
- **Ressources** :
  - **RES211 et RES096** : pas de doublon (deux produits, deux gestes). Mais l'épuisette de RES211 revenait dans RES268 : RES211 passe au râteau de roseau.
  - **RES068 et RES001** : validé, les gestes diffèrent.
  - **RES243 et RES184** : **doublon, corrigé dans RES184**, qui avait aussi le geste de RES035. RES184 devient les os de seiche que les scribes utilisent pour gratter leurs erreurs.
  - **RES092 et RES251** : toléré (même matière, deux usages). Mais RES092 et RES040 taillaient tous deux des lames : RES040 détache maintenant des écailles pour les harpons.
  - **RES356 et l'eau de nuage de D (RES241)** : toléré, les deux gestes diffèrent. La calebasse de RES356 revenait dans RES242 : RES356 prend un seau de bambou.
  - **RES013 et RES242** : même geste (inciser, puis recueillir dans un récipient). RES242 racle maintenant à la cuiller de corne.
  - **Le raisin de RES016 et RES034** : **doublon d'objet.** RES016 devient **Les Magnaneries de Luntai-Ye** (vers à soie).
  - **Les trois teintures** (B RES022 orseille, A RES353 campêche, A RES196 pourpre) : **deux au plus**, et A en avait deux. RES196 devient **Les Troncs à miel de Tepexco** (abeilles sans dard), et le `pal` de RES353 ne parle plus de jambes teintes.
  - **RES237 et RES080**, deux noms en « Claies » : RES080 devient **Le Fjord aux holothuries de Haishen**, et ses claies deviennent des grilles de bambou.
  - « Quatre piquets » (RES161) doublait le « quatre » d'ANT001 : retiré.

## Défauts de fond (au-delà des corrections)

1. **Les mots de pôle sont la vraie limite du lot.** Le couple Oubli/Mémoire revient cinq fois, Vide/Étoiles et Os/Corail quatre fois, Tempête/Calme, Folie/Raison, Pierre/Cristal, Ruine/Abondance et Corruption/Pureté trois fois chacun. Même avec des cartes différentes, le joueur lira cinq fois « Mémoire ». Je n'ai changé les mots d'aucune zone : les récits sont construits dessus. C'est à régler en amont, dans LISTE.md.
2. **Les familles secondaires sont toutes au plafond.** Riposte, dégâts à tous, affaiblissement, brûlure, mana, soin du héros et perce-garde sont à 6 pôles chacun. Avec 96 pôles, le plafond de 6 laisse peu de marge, et le lot 5 devra chercher ailleurs (bêtes, prix, réveils, combinaisons).
3. **Les budgets.** Les quatre conteurs appliquent la même table. Restent l'oubli du vol de vie dans 2 ou 3 cartes, et des formes du palier 7 entre 40 et 60 au lieu de 45 à 55. Les écarts sont mineurs et laissés tels quels, sauf sur les cartes corrigées, recalculées au script.
4. **Les tics de prose**, listés dans le verdict (le mana de A, les deux comptes de B, les « trente-X » et « la règle lue » de C, le témoignage juré de D). Seuls les doublons entre zones sont corrigés ; « la règle lue » chez C reste dans plusieurs récits.
5. **Les nombres simples partagés** (cent, dix, neuf, sept entre deux conteurs) : les doublons dans un même registre sont corrigés (CIT017 et DON120 pour « dix », ANT001 et RES161 pour « quatre »). Les autres sont des mots courants dans des contextes sans rapport : tolérés.

## Corrections faites (128 objets modifiés : 114 cartes et 14 fiches, plus les lignes de prose « Familles » et « Fil mécanique » des zones touchées)

**Zones réécrites**
- **CIT039** (A) : 14 cartes, nom, fiche et récit (le nom seul change ; « La Quille dans la roche » remplace l'ancien +3).
- **ASS157** (C) et **ASS124** (C) : 14 cartes chacune.

**Pôles réécrits (collisions)**
- **ASS172 +** (A, 7 cartes) et **ASS032 +2 à +7** (D, 6 cartes).

**Familles, plafonds et lisibilité (cartes)**
- A : ANT190 +3, +4, +6 ; ASS118 +2, +4, +6 ; DON041 +2, +4, +6 ; ANT166 +4 ; ANT217 −1, −3, −5, +6 ; ANT200 −1, −6 ; DON080 −2, −4, −6.
- B : ANT001 +1, +4, +6, +7 ; ANT211 +7 ; ANT040 −2, −3, −6 ; DON046 −2, −4, −6 ; CIT017 −3 (ambiance).
- C : ANT202 +2, +3, +5, +6 ; ANT195 +5, +6.
- D : ASS032 −2, −4, −6 ; ANT095 +5 ; ASS100 +3 ; DON120 +1, −2, −3, +2, +4, +6 ; ASS098 −2, −3, −5 ; ANT061 +1, +4, +6 ; ANT140 +1, +4, +6 ; DON035 −4, −6.

Les budgets de ces cartes sont recalculés au script (« recalculé par le critique ») et leurs tags mis à jour.

**Fiches**
- Zones : CIT039 (nom, récit), DON115 (ouverture du récit), CIT017 (chute), ASS143 (récit resserré).
- Ressources : RES196 et RES016 (nouvelles fiches), RES080 (nom, objet), RES184 (nouvel objet), RES211, RES356, RES353, RES040, RES242, RES161.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 112 fiches (48 zones et 64 Ressources) et les tableaux de cartes.
- 48 zones à 14 cartes (pôles − et +, paliers 1 à 7), soit 672 cartes.
- Chaque effet fait 250 caractères ou moins. Chaque ambiance compte 12 à 20 mots, chaque récit 60 à 100 mots (30 à 50 pour une Ressource), chaque `pal` 160 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2, et `"cible":1` figure partout où une opération ou une condition vise la cible.
- Le tag Loi est conforme.
- Chaque forme du palier 7 pose une résonance, en réveille une autre, a une phrase d'ouverture et un prix.
- Aucune condition n'est remplie par la carte elle-même avant son `si`, et aucune ne teste `defausseCommune`.
- Les plafonds de familles et de crochets sont tenus (comptés au script, réveil compris).
- Les 112 noms du lot sont uniques entre conteurs et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés (356 noms, triés, sans doublon).

**Non bloquant, laissé tel quel** : B, C et D écrivent deux tableaux de 7 cartes par zone au lieu d'un tableau de 14, et les identifiants du palier 7 n'ont pas le même format chez A (`-moins7`). `assembler.py` range les cartes par zone, pôle et palier : sans effet.

## Leçons pour le lot 5 (à ajouter aux consignes)

1. **Un couple de mots de pôle sert deux fois au plus par lot**, et jamais deux fois chez le même conteur. LISTE.md le vérifie avant la distribution. Si un couple revient, le second conteur prend une autre famille principale sur **les deux** pôles, et le dit dans sa carte des familles.
2. **Relire les pôles du même couple dans les lots précédents**, pas seulement dans le lot : les reprises de A (Tempête, Rouille, Mémoire, Rêve) étaient connues et signalées, mais pas corrigées. Signaler ne suffit pas : on change avant de remettre.
3. **La récupération suit le moteur** : `recup` joue deux fois par tour au plus et saute les cartes qui récupèrent. Elle n'est jamais famille principale : 4 cartes au plus par pôle.
4. **Ne plus utiliser `defausseCommune`** : les communes ne sont plus dans le paquet, la condition est toujours fausse.
5. **Une carte sans cible joue contre le premier ennemi vivant.** Si l'effet ou la condition porte sur un ennemi précis (`elan`, `pietine`, `vol`, dégâts), on met `"cible":1` et on écrit « la cible ». « L'ennemi en tête » et « l'ennemi vole » sont interdits.
6. **Pas d'appoint réflexe** : une même famille d'appoint (le mana chez A au lot 4, la marque au lot 3) ne revient pas dans plus de 3 pôles d'un même conteur.
7. **Un pôle « tous les ennemis » ne frappe pas tous les ennemis sur plus de 3 cartes sur 7**, et une forme ne répète pas « X dégâts à la cible » sur toutes les cartes d'un pôle. Au moins trois familles par pôle, comme au lot 3.
8. **Ressources** : un produit tinctorial, un récipient (calebasse, épuisette) ou un premier mot de nom (« Claies ») ne revient pas deux fois dans le lot. La liste commune des objets s'ajoute à celle des nombres.
