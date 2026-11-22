# Critique du lot 13 (le dernier) : 42 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 12), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). LISTE.md, avec sa section « Places des familles (calculées au script) », a servi de référence pour les places, les vocations, les reprises et les colonnes. Les reprises, les vocations, les prix principaux et les bêtes ont été recomptés au script sur les lots 1 à 12. Les signalements des conteurs viennent des fichiers familles_A.md à familles_D.md et des notes en tête de conteur_X.md.*

## Verdict

**Le lot est accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** La moyenne passe de **80,9** avant correction à **81,3 / 100** après. Aucune zone n'est refusée, et **aucune n'est sous 70** : aucune n'a donc été réécrite en entier.

Les corrections ne touchent à aucune `ops` : budgets, familles, couples et places sont inchangés. Elles portent sur 9 cartes (noms, phrases d'ouverture et ambiances), 4 récits, 4 bandes `pal` et 3 noms de zone. Une note du critique est ajoutée en tête de 12 zones. Il y a quatre sortes de corrections :
- **Quatre ±7 rejoués sur un couple partagé, par le second inscrit** (leçon 3 du lot 12) :
  - B ANT226 −7 (les charpentes qui sortent de la houle, les eiders sur les foyers) rejouait l'engloutissement de A CIT020 (les murs dans l'eau, les hérons sur la porte) ;
  - C ASS191 −7 (la plaine dallée de verdicts jusqu'à l'horizon) rejouait les cairns de B ASS184 (les cairns couvrent la plaine jusqu'à l'horizon) ;
  - C DON050 +7 (les balayeurs qui marchent sur les nuages descendus) rejouait le plongeon dans les nuages reflétés de A ASS151 ;
  - C ASS190 −7 (« personne n'y goûte ») rejouait les coupes tenues sans boire de A ASS186 : seule la bande change.
- **Un même geste d'intrigue dans trois récits** : le registre où manque l'année ou la nuit du prodige (A DON040, premier inscrit ; B ASS192 ; D ANT039, sur le même couple et le même désert de sel que A). Et l'inspecteur venu vérifier, chute de A CIT020, revenait chez B ANT248.
- **Trois préfixes de lieu déjà en jeu** : Yan- (A), Salt- (B), Eheca- (B).
- **Deux tics** : la chute « … achète X » deux fois chez A (ASS151, ANT051), et « trois » dans deux zones de C.

À la remise, les quatre validateurs ne trouvaient aucune erreur sur les règles écrites, hors les quatre couples à 3 pôles qu'ils déclaraient tous. Le mien non plus. Il vérifie :
- le format (un bloc fiche et un bloc de 14 cartes par zone, JSON lisible) ;
- les longueurs ;
- l'ordre des opérations et les conditions connues du moteur ;
- les conditions rendues vraies ou fausses par une opération qui les précède, `si` imbriqués compris, la garde des alliés comptée comme une Garde levée ;
- les plafonds sur la carte entière, `si` et réveil compris ;
- l'écho au premier niveau ;
- le tag Loi, 2 Lois au moins par pôle d'Assemblée, et `"cible":1` ;
- les bêtes à 40 PV au plus (60 au palier 7) ;
- les budgets et le palier 7.

Les leçons du lot 12 ont porté :
- **les places ont été comptées avant d'écrire.** LISTE.md donne pour chaque conteur ses places libres (couplage maximal), ses vocations, 3 reprises et 4 colonnes, plus une place perdue déclarée. Les 84 pôles tiennent exactement leur place (vérifié pôle par pôle) ;
- **3 reprises par conteur**, toutes un 2e emploi par un autre conteur ;
- **la pioche d'Assemblée tient dans son plafond** : 6 pôles au lot, tous désignés ;
- **chaque pôle d'Assemblée a 2 Lois au moins** ;
- **aucune bête au-dessus de 40 PV aux paliers 1 à 6** : 40 au plus partout, 50 au plus au palier 7 ;
- **les noms et institutions ont été comparés entre conteurs** : D a changé son « calpulco » pour ne pas recouper le Calpulli de B, A son « Jarghu » pour le Chuulgan.

Les récits restent la force du lot, et finissent la série haut :
- « La plus lourde peine du chuulgan, désormais, est d'être renvoyé chez soi. » (A ASS194) ;
- « Autour du bol, chacun se dispute la place juste après eux. » (A ASS186) ;
- « La paix de la feis dure jusqu'aux premières fleurs. » (B ASS193) ;
- Arnaviaq, qui « répond qu'on ne pêche pas avec ce qu'on n'a pas » (B ANT112) ;
- « on y est affranchi tous les printemps, et toujours par le même homme » (C ASS187) ;
- Kyrillos, « le seul empereur que personne, en bas, n'a vu tomber » (C ASS189) ;
- les anciens fous, « les hommes les plus raisonnables du pays, et ils ne servent plus à rien » (C ANT247) ;
- la juge qui fixe le jour de la débâcle, « puis elle a demandé qu'on lui tisse un feutre neuf » (D ASS195) ;
- les pas de l'abba, introuvables « ni à l'aller, ni au retour » (D ANT218).

Le défaut neuf du lot : **la série a fini par épuiser les couples de colonne.** LISTE.md donnait 20 colonnes pour 16 places de couple, et le dit. Les quatre places en trop se sont posées sur quatre couples à 3 pôles (voir les arbitrages).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT020 | Hurmazgān, la Brèche entretenue | A | 82 | La ruine déclarée, et l'inspecteur qui « fit relever la somme ». Les barques de riz par la brèche au +7 : une vraie image. |
| DON040 | Xingchi Tai, le Registre effacé | A | 81 (80) | « Le ciel, lui, n'a pas été consulté. » Nom changé (Yanchi : préfixe Yan- déjà deux fois en jeu). |
| ASS151 | Le Kamachikuy d'Ukhuqucha | A | 81 | L'honnêteté confisquée. Pioche d'Assemblée en vocation, 2e emploi. |
| ASS186 | La Fakataha de Vaimoana | A | 82 | L'honneur retourné. Colonne défausse / `defausseAPrix` propre. |
| ASS185 | Le Shūgi de Tsunagishima | A | 81 | Les îles trop bien tenues. Calme en riposte : reprise, prix principal sans sorte neuve possible (voir les arbitrages). |
| ASS194 | Le Chuulgan de Galt Jalga | A | 83 | Le meilleur récit de A : la peine renversée. |
| ANT096 | Hoarmoor, les Chèvres taries | A | 81 | Le coupable ailé. Mensonge en mana : reprise neuve (`brule`, la bête, des engoulevents). |
| ANT194 | Ukkusiksalik, le Troc des Perles | A | 80 | L'échange inégal, juste, mais la chute se devine. |
| ANT051 | Skiaros, l'Impôt du Soleil | A | 81 (80) | La ville exempte dans l'ombre. La chute « achète de l'huile » rejouait celle de ASS151 : elle change. |
| ANT109 | Yūzpur, les Bosquets abattus | A | 82 | Le cycle commandé : « pour que l'empereur revienne les faire abattre ». |
| ANT249 | Gniloozero, le Potager du Marchand | A | 80 | Le circuit du marchand. Écho sur 4 cartes exactement, au premier niveau. |
| DON090 | Puka Whetū, le Plafond des Navigateurs | B | 80 | La natte tenue à l'envers, « et arriva quand même ». Ciel artificiel, distinct de celui de C (voir les arbitrages). |
| ASS130 | Le Tümen d'Ulias-Modon | B | 81 | Le tümen sans chevaux qui juge des étriers. |
| ASS013 | Le Calpulli de Tepetlaxco | B | 81 | Le festin qui se paie : « les marchands passent par l'autre col ». |
| ASS184 | Le Ráð de Bjartvangr | B | 80 (79) | La loi qui ne tient que sur la face sèche. Nom changé (Saltvöllr : préfixe Salt- déjà en jeu, Saltvidda). |
| ASS192 | Les Provéditeurs de Pozzo Moro | B | 80 (79) | La meilleure récolte dans le désordre. La page blanche du registre devient une ligne : « chacun pour soi ». |
| ASS193 | La Feis de Machaire Loisc | B | 82 | Le meilleur récit de B : la paix du champ noir. |
| ANT078 | Sotz'ha, l'Aven aux Mélèzes | B | 80 | Le midi renvoyé par la pyrite. Lumière en invocations : 3e et dernier emploi, quetzals. |
| ANT191 | Ayauhtlan, la Rotonde du Vent | B | 80 (79) | Les iguanes devins. Nom changé (Ehecaxochco : préfixe Eheca- déjà en jeu, Ehecapan). |
| ANT226 | Qarmaliit, les Toits sous la Marée | B | 80 (78) | La clé d'une porte qui n'existe plus. Le −7 était l'engloutissement de A CIT020 : il devient le récif raclé par la glace. |
| ANT112 | Sauniqtuuq, la Mer partie | B | 82 | Les hameçons pour une mer qui reviendra. |
| ANT248 | Rakiwasi, les Cordelettes dénouées | B | 80 (79) | Le compte refait de mémoire. L'inspecteur vérificateur (chute de A CIT020) devient le petit-fils dont les nœuds changent. |
| DON050 | Falakgarh, la Sphère enterrée | C | 81 (79) | Le règne qui dure tant que l'étoile reste propre. Le +7 (marcher sur les nuages) était celui de A ASS151 : il devient la cour rebâtie au fond de la coupe. |
| ASS187 | Le Mīšarum d'Arrapzu | C | 83 (82) | L'affranchissement annuel, par le même homme. « Trois » revenait aussi en ANT117 : l'ambiance −2 change. |
| ASS189 | Le Chartophylakeion de Pagovouni | C | 83 | Le glacier qui oublie à rebours. Premier emploi de la pioche d'Assemblée sur l'Oubli. |
| ASS190 | Le Synédrion de Limnokéra | C | 80 (79) | Le vote qui s'assombrit. Bande −7 changée (le refus de goûter était à A ASS186). Colonne `brule`, la même que B ASS184 (voir les arbitrages). |
| ASS191 | Le Törü de Chuluut-Kherem | C | 82 (80) | La justice transparente, « et pas un mot ». Le −7 (la plaine dallée) était celui de B ASS184 : il devient la ville murée dans ses verdicts. |
| ANT117 | Kur-Imhulli, les Onagres du Devin | C | 80 | Le secret de l'enclos. Calme en colonne bête / `bete` : 3e pôle du couple. |
| ANT035 | Sternkuhle, le Trou du Komtur | C | 81 | L'étoile remontée « qui a laissé sa place ». Ses deux pôles sont des 3es pôles de couple (`vulnerable`, `brule`). |
| ANT081 | Dūr-Ṣippatim, les Semences du Pillage | C | 82 | Les armées datées à la forme d'une feuille. |
| ANT247 | Durnopole, le Conseiller nu-pieds | C | 83 | Le fou devenu raisonnable, donc inutile. |
| ANT119 | Pir-e Gorosneh, le Derviche à jeun | C | 82 | « C'est le village, en dessous, qui a pris du ventre. » Festin en riposte : reprise neuve. |
| CIT042 | Brìcola, le Chenal menteur | D | 82 | « Ils bougent toujours. » Le fort double au −7. |
| DON111 | Ḫalpi-Šadî, les Bouleaux saignés | D | 81 | La sève qui endort. Poison en marque : reprise, `elan` et garde ennemie neufs. |
| ASS183 | Le Teccalli de Tlalnextli | D | 82 | Le vent qui choisit, le conseil qui vote après. |
| ASS188 | Le Wiec de Karbowo | D | 81 | La dette qui ne brûle pas. |
| ASS195 | Le Zarga de Tsas-Khaalga | D | 83 | Le meilleur récit de D : la juge et le feutre neuf, dit sans un mot de trop. |
| ANT171 | Tulach Uiseog, la Motte aux Alouettes | D | 83 | Le vœu de silence et la motte qui monte avec le chant. |
| ANT039 | Shiraniwa, les Pluviers sans ombre | D | 81 (79) | Les lueurs qui marchent sur le sel. Le registre où manque la nuit rejouait A DON040 (même couple, même désert de sel) : le manque passe au sel de cette nuit-là, que personne ne garde. |
| ANT218 | Akinètos, les Traces du Stylite | D | 83 | Le désert qui garde chaque pas, sauf ceux de l'abba. |
| ANT139 | Alfayt, la Rigole de l'Aube | D | 81 | Le fil blanc et le fil noir. |
| ANT032 | Thma Pich, le Grès qui rend le jour | D | 81 | Le cristal refermé à la glaise, et le mur qui luit. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 81,3 (81,1).** Des chutes toujours aussi sèches, et le premier inscrit qui a pris ses couples et ses ±7 avant les autres. Mais la chute « on finit par acheter ce qu'on avait » revient (ASS151, ANT051, et en écho ANT249).
- **B, 80,5 (80,0).** Les récits de choses les plus sûrs (la clé sans porte, les hameçons, la feis sur la cendre). Mais trois récits reprenaient un geste ou une image d'un inscrit avant lui, et deux préfixes de nom étaient déjà en jeu.
- **C, 81,7 (81,1).** L'ironie la plus juste du lot, sur six récits sur dix, juste sous le plafond. Mais trois ±7 copiés sans le voir, malgré la comparaison annoncée.
- **D, 81,8 (81,6).** L'étrangeté la plus tenue, et une seule correction, sur un registre qui doublait celui de A.

Moyenne du lot : **81,3** (80,9 avant).

## Arbitrages demandés

- **Couples de colonne à 3 pôles (20 colonnes pour 16 places).** Recompté au script (effet sur 3 cartes ou plus, crochet sur 2 ou plus), dans l'ordre d'inscription A, D, B, C :
  - `hesite` : A Abondance, D Nuit, B Floraison ;
  - `vulnerable` : A Ombre, B Chaos, C Vide ;
  - `brule` : B Cristal, C Poison, C Étoiles. **C en compte bien deux lui-même** ;
  - `bete` : D Aurore et C Calme (bête en prix), B Abondance (invocation) ;
  - à 2, conformes : PV / `blesse` (A Étoiles, D Calme), défausse / `defausseAPrix` (A Poison, D Chant), garde ennemie / `cibleGarde` (B Festin, C Nectar), garde / `garde` (A Lumière, par la garde du héros et des alliés ; D Nectar).

  **Tranché : les quatre 3es pôles sont acceptés, sans changer de crochet.** Trois raisons :
  1. **Aucun couple n'a de place libre.** Les huit couples sont pleins à 2 : il n'y a donc nulle part où déplacer un 3e pôle. Quand C, dernier inscrit, a écrit sa carte des familles, il ne restait qu'une place sur `brule` et une sur `cibleGarde` pour ses 5 colonnes. LISTE.md avait annoncé ce compte avant les cartes.
  2. **Un crochet « libre » hors des huit couples ne fait pas une colonne.** Les crochets libres restants sont les intentions ennemies, `piocheCout0` et l'enchaînement. Un pôle qui en prend un sans famille principale devient une mosaïque d'appoints, ce que les leçons 4 du lot 6 et 3 du lot 8 interdisent plus fermement que le plafond des couples. Changer le crochet du dernier inscrit aurait donc remplacé un défaut léger par un défaut lourd.
  3. **Un 3e pôle ne gêne pas le jeu ici.** Ces quatre crochets lisent des états que le moteur garde ou qu'il borne :
     - la marque dure tout le combat ;
     - une bête reste sur le terrain ;
     - les pièges des Donjons font déjà brûler tous les ennemis ;
     - le chef qui hésite deux tours de suite « s'habitue ».
     Trois colonnes ne font donc pas de combo que deux ne faisaient pas. Le plafond servait la variété du lot. Or les trois pôles diffèrent par le type de zone ou par le prix, sauf un cas.
  - **Ce cas est B ASS184 Cristal et C ASS190 Poison** : deux Assemblées, défausse en prix principal et PV en second, brûlure sur 4 cartes lue sur 4. Le même assemblage, mais sur deux mots, deux images (le sel qui brûle les yeux, la cire sombre) et deux familles d'appoint (garde du héros et perce-garde chez B, affaiblissement chez C). **Toléré** : c'est la place que C ne pouvait pas éviter.
  - Chez C, les deux pôles d'ANT035 sont des 3es pôles (`vulnerable` et `brule`). C'est le prix de son dernier rang d'inscription, et le lot n'avait pas d'autre colonne à lui donner.
- **Prix principaux non neufs sur des reprises et des mots épuisés.** Recompté sur les lots 1 à 12 (prix principal = la sorte payée sur le plus de cartes, 5 au moins) :
  - **Calme (A ASS185), Étoiles (B DON090) et Exil (A ASS194)** : les six sortes de prix y ont déjà été principales. Aucun prix neuf n'est possible : **accepté**. Chaque fois, le prix est neuf contre l'origine de la reprise ou contre les emplois précédents de la vocation ;
  - **Ordre (B ASS192)** : une seule sorte n'y avait jamais été principale, la bête. Or une Assemblée n'invoque pas, et `prixBete` sans bête ne coûte rien : ce serait un faux prix. L'exil est **accepté** ;
  - **Fer (B ASS130)** : le soin ennemi n'y a été payé que sur 4 cartes, jamais en principal à 5. Il est **neuf au sens de la règle**, contrairement à ce que B craignait ;
  - **Floraison (D ASS183)** : c'est le prix second (soin ennemi) qui a déjà servi. La règle ne vise que le prix principal (la défausse) : **conforme** ;
  - vocations : C Oubli (exil), C Cristal (garde ennemie) et D Vide (bête) paient un prix déjà principal ailleurs sur le mot, mais neuf contre chaque emploi précédent de la même vocation. C'est ce que demande la leçon 1 du lot 9. La règle « neuf pour le mot entier » de la leçon 2 du lot 12 ne vise que les reprises. **Conforme.**
- **`defausseAPrix` lu sans défausse dans le pôle** : B ASS184 Pierre (soin ennemi, exil), B ANT078 Lumière (exil, PV), et aussi **B ANT191 Tempête** (PV, bête), que B ne signalait pas. Trois cartes par pôle, toujours en bonus de `si`. C'est un crochet de paquet : il vaut avec les autres cartes, et 32 pôles du lot paient en défausse sur 2 cartes au moins. Le moteur remet `defPrix` à zéro à chaque tour, et la carte ne remplit pas elle-même sa condition. **Toléré**, comme aux lots 11 et 12. B est au plafond de 3 pôles pour ce crochet.
- **Bêtes, recomptées sur une table commune** (les 42 familles des noms d'invocation, à la maille de la famille courante ; les rongeurs comptent comme une famille, comme au lot 12) :
  - **à 2, conformes** :
    - strigidés (A chevêche, ANT051 + ; C chouettes, ANT035 +) ;
    - ursidés (A ours blanc, ANT194 − ; C ours bruns, ANT119 +) ;
    - érinacéidés (A hérisson des haies, ANT096 + ; D hérissons du désert, ANT218 +) ;
    - corvidés (A pies, ANT096 + ; B corbeaux, ANT078 −) ;
    - rongeurs (C spermophiles, ANT247 − ; C porcs-épics, ANT119 −) ;
  - **les tytonidés ne sont pas à 2** : les effraies ne sont que chez C (ANT081 −). Aucune effraie chez A ni chez D, dont le Silence invoque des sphinx, qui sont des papillons (sphingidés). **Les scorpions ne sont que chez D** (ANT039 +). Les cartes des familles de C et de A comptaient à tort ces deux familles en double ;
  - **seules** : toutes les autres familles :
    - mammifères : odobénidés, monodontidés, mustélidés, félidés, cervidés, léporidés, bovidés, équidés, canidés, viverridés, manidés ;
    - oiseaux : caprimulgidés, alcidés, picidés, oriolidés, falconidés, stercorariidés, trogonidés, apodidés, anatidés, psittacidés, rhéidés, columbidés, gruidés, alaudidés, charadriidés, ptéroclidés, upupidés ;
    - reptiles : vipéridés, iguanidés, testudinidés ;
    - autres : osméridés, artémies, grillons, cigales, bourdons, libellules ;
  - chaque vocation et chaque reprise d'Antre a une bête principale qui n'a jamais été invoquée sur son mot aux lots 1 à 12. Seule exception, hors vocation : les alouettes de D ANT171 (Chant, une colonne) avaient deux cartes sur le Chant de A ANT042 (lot 10), dont les grues étaient la bête principale. **Toléré** : ce n'est pas une reprise, et le geste diffère (le tumulus des pleureuses, la motte qui monte).
- **Deux ciels artificiels (B DON090, C DON050).** B perce une voûte que traversent les vraies étoiles, pour apprendre la mer. C taille un ciel renversé dans une coupe de marbre, et le balaie. Ce sont deux gestes différents (percer, balayer), sur deux couples différents. **Toléré.** Le +7 de C, la cour qui descend au fond de la coupe, a été choisi pour ne ressembler ni à la voûte de B (« comme le ciel lui-même »), ni aux lanternes de A DON040, ni au plongeon de A ASS151.
- **Quatre récits de commerce chez B** (DON090, ASS013, ASS184, ANT191). C'est la voix de l'Explorateur marchand, et les quatre intrigues diffèrent : la carte du ciel vendue, l'hôte qui paie le festin, les places à l'abri du vent, les iguanes vendus comme devins. **Toléré.**
- **Mots principaux de B « Plafond », « Calpulli », « Rotonde », « Toits ».** Aucun n'est un mot principal ni un mot d'institution dans `noms-pris.txt`. Au lot 9, ils ne paraissent que dans des `pal` ou des noms de carte. « Toits » n'est en jeu que dans un complément (« le Maïs sur les toits »), et la règle des compléments vaut dans le lot. **Validés.**
- **Noms de D, Tlalnextli et Tsas-Khaalga.** Ce sont des noms de lieu, pas des mots principaux, et aucun ne reprend un nom du lot. Tsas-Khaalga est à une lettre de « Tsaa-Nuur » (noms-pris) sur le premier mot, mais les premières moitiés entières diffèrent. Le lot 12 avait toléré « Mai Qalat » et « Vai Toromiro » pour la même raison. **Validés.**
- **Registre.** Tous les récits, `pal`, ambiances et noms de carte ont été relus pour un jeu de fantasy grand public pour adultes. **Rien ne dépasse** : aucune violence détaillée, aucun sacrifice, aucune mutilation, aucun châtiment décrit, aucun enfant en danger, aucun contenu sexuel. Sont gardés :
  - le pillage de Dūr-Ṣippatim (C ANT081), qui ne se lit qu'aux noyaux laissés ;
  - les feutres des morts posés sur la glace (D ASS195), un rite dit sans corps ;
  - Ásvör qui lave les plaies des bêtes à la saumure, « et les bêtes crient, mais guérissent toutes » (B ASS184 +4) ;
  - les oiseaux « pendus aux pis » des chèvres dans la rumeur de Pell (A ANT096 −2) : des oiseaux accrochés pour téter, pas des pendus ;
  - les gencives qui saignent à la fin de l'hiver (A ANT249), le scorbut nommé sans être montré ;
  - le cavalier qui tombe dans un terrier « et se relève en riant » (C ANT247 −4).
  Les enfants du lot plongent dans un reflet, dorment au chaud ou lisent une sentence en sautant. Le petit-fils de Mallku (B ANT248) ne fait que nouer des cordelettes.
- **Dégâts des formes ultimes de D** (jusqu'à 38 à la cible, et 40 au réveil, sur ASS183, ASS195 et ANT171). Le plafond de 20 vaut aux paliers 1 à 6 (arbitrage du lot 9). Les bases restent de 45 à 55 et les réveils de 60 à 100 %. **Toléré**, comme D ASS139 au lot 12.
- **Décors et images proches, tolérés** :
  - les +7 du Calme : les iguanes « immobiles comme des pierres sculptées » (B ANT191) et la harde qui dort debout sous la cendre (C ANT117). Figer et endormir restent deux gestes ;
  - les +7 du Nectar : les essaims qui couvrent le marais (C ASS190) et les bouleaux pris dans le sucre, où les abeilles bourdonnent (D DON111). L'un couvre de bêtes, l'autre enrobe de sucre ;
  - les +7 de la Mémoire : la vallée jonchée de parchemins rendus par le glacier (C ASS189) et la savane où tout porte des encoches (D ASS188). L'un rend des écrits, l'autre grave ;
  - les deux brumes du Mensonge : le brouillard aux lueurs de A ANT096 et le fort double de D CIT042. L'un égare, l'autre dédouble.
- **Noms.**
  - **Corrigés** :
    - « Yanchi Tai » (A DON040) devient « **Xingchi Tai** ». Le préfixe Yan- était déjà deux fois en jeu (Yanchuan-Bi, Yancheng-fei) ;
    - « Saltvöllr » (B ASS184) devient « **Bjartvangr** ». Salt- était dans les Enclos de Saltvidda, et le mot traduit (« sel ») compte ;
    - « Ehecaxochco » (B ANT191) devient « **Ayauhtlan** ». Eheca- était dans les Gardiennes d'Ehecapan.
  - **Tolérés** :
    - « Puka Whetū » (B), dont le premier mot est à une lettre de « Muka-Roa » ;
    - « Kur-Imhulli » et « Dūr-Ṣippatim » (C) : deux mots akkadiens de trois lettres, de sens différents (montagne, forteresse) ;
    - des compléments déjà en jeu ailleurs, mais seuls dans le lot : « des Perles », « du Soleil », « du Vent ».
  - Aucun mot principal, complément, préfixe, institution ni prénom n'est en double dans le lot après correction.
- **Nombres.** Il y a peu de nombres précis. « Trois » était dans deux zones de C (ANT117 −3, ASS187 −2) : l'ambiance d'ASS187 change. « Deux » revient comme un mot courant chez C (les deux fleuves, les deux rives, ses deux oursons), « une demi-journée » une fois. **Toléré.**

## Défauts de fond (au-delà des corrections)

1. **La comparaison des ±7 reste déclarée plus que faite.** Les quatre ±7 corrigés sont du second inscrit, sur des couples que sa carte des familles listait. C en avait trois (DON050, ASS190, ASS191), B un (ANT226).
2. **La liste commune ne porte pas les gestes d'intrigue d'un conteur à l'autre.** Le registre où manque le prodige est venu trois fois, chez trois conteurs. L'inspecteur vérificateur est venu deux fois.
3. **Les crochets d'état sont trop faciles.** `vulnerable`, `bete` et `brule` sont presque toujours vrais une fois la marque posée, la bête invoquée ou un Donjon possédé. Une colonne sur ces crochets tient la règle, mais pèse peu au combat.
4. **La règle des préfixes vise surtout noms-pris.txt.** Trois préfixes en double venaient de noms déjà en jeu, et non du lot.

## Corrections faites (9 cartes, 4 récits, 4 bandes `pal`, 3 noms de zone, et une note du critique en tête de 12 zones)

**Cartes** (aucune `ops` touchée ; budgets inchangés)
- B :
  - ANT226 −7 : nom (« Le Récif raclé »), phrase d'ouverture (« La glace a tout raclé. ») et ambiance ;
  - ASS192 +5 : nom (« La ligne de la crue ») et ambiance ;
  - ANT248 +5 : nom (« Les nœuds du petit-fils ») et ambiance.
- C :
  - DON050 +7 : nom (« La Cour au fond de la coupe »), phrase d'ouverture (« La cour descend sous le ciel. ») et ambiance ;
  - ASS191 −7 : ambiance (la ville murée dans ses verdicts) ;
  - ASS187 −2 : ambiance (« un sceau à chaque verrou », au lieu de « trois sceaux »).
- D :
  - ANT039 −5 : nom (« Les sacs scellés ») et ambiance ;
  - ANT039 −6 : nom (« Le sel du seigneur ») et ambiance ;
  - ANT039 +6 : ambiance (« Kurobei n'a rien dit »).

**Fiches et texte**
- Récits :
  - A ANT051 : dernière phrase (« … et les lampes y brûlent à midi, chacune au tarif de l'archonte. ») ;
  - B ASS192 : dernière phrase (« Lunardo le recopia, avec une seule ligne pour l'année de la crue : « chacun pour soi ». Les jardiniers la savent par cœur. ») ;
  - B ANT248 : l'inspecteur devient le petit-fils à qui l'on confie les cordelettes ;
  - D ANT039 : le registre des nuits devient le sel de cette nuit-là, parti en sacs scellés, dont personne n'a gardé une poignée.
- Bandes `pal` : B ANT226 −6..−7 (le récif raclé) ; C ASS190 −6..−7 (le sceau qui gagne tout) ; C ASS191 −6..−7 (la ville murée dans ses verdicts) ; C DON050 +6..+7 (la cour au fond de la coupe).
- Noms de zone : Xingchi Tai (A DON040), Bjartvangr (B ASS184), Ayauhtlan (B ANT191), partout dans les fichiers (titres, tableaux, fiches, ambiances).
- Les notes hors blocs suivent les cartes changées (progressions, tableau des résonances, chiffres de C, phrase de registre de D).
- Une note « Note du critique (lot 13) », hors des blocs ```json```, en tête de chaque zone touchée : A DON040, ANT051 ; B ASS184, ASS192, ANT191, ANT226, ANT248 ; C DON050, ASS187, ASS190, ASS191 ; D ANT039.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 42 fiches et 588 cartes. Chaque zone a un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet de 250 caractères au plus, ambiance de 12 à 20 mots, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus.
- Opérations et conditions :
  - toutes sont connues du moteur, avec leurs arguments dans le bon ordre ;
  - aucune opération n'est répétée dans un même niveau d'une carte ;
  - sur la carte entière, réveil compris : `mana` ≤ 2 et riposte ≤ 8 ;
  - dégâts ciblés ≤ 20 hors Donjon et ≤ 30 en Donjon, `si` compris, aux paliers 1 à 6 (30 au plus : B DON090 +6) ;
  - aucun écho sous `si` ni sous réveil. L'écho est sur 4 cartes exactement (A Croissance, D Étoiles) ;
  - `"cible":1` est partout où il le faut, et le tag Loi est conforme, avec 2 Lois au moins dans chacun des 32 pôles d'Assemblée ;
  - aucune condition n'est remplie ni vidée par la carte elle-même avant son `si`, `si` imbriqués compris, la garde des alliés comptée comme une Garde levée.
- Bêtes : 40 PV au plus aux paliers 1 à 6, 50 au plus au palier 7. Chaque pôle d'Antre a 3 invocations au moins.
- Budgets : aucun écart au-delà de ±15 %. Chaque palier 7 a une base de 45 à 55, un réveil de 60 à 100 % et une phrase d'ouverture de 3 à 6 mots.
- Places : les 84 pôles tiennent exactement la famille, la vocation, la reprise ou la colonne que leur donne LISTE.md. Aucune famille ne dépasse 6 pôles (l'exil est à 6, la pioche à 6, vocations comprises), ni 1 pôle par conteur pour les places rares.
- Familles :
  - aucune famille principale n'est commune aux deux pôles d'une zone ;
  - les appoints, enchaînement compris, sont dans 3 pôles au plus par conteur ;
  - les dégâts ciblés sont sur 4 cartes au plus par pôle ;
  - « tous » est sur 3 cartes au plus, sans deux hésitations de « tous » de suite.
- Crochets :
  - chacun est dans 3 pôles au plus par conteur, `hesite` et `hesiteAvant` comptés ensemble (D : Nuit, Vérité, Mort) ;
  - les intentions ennemies sont dans 8 pôles, 2 au plus par conteur (A `pietine`, `seul` ; B `vol`, `soinEnnemi` ; C `vol`, `pietine` ; D `elan`, `seul`) ;
  - couples : quatre à 3 pôles, acceptés (voir les arbitrages), les quatre autres à 2.
- Prix : deux sortes par pôle, la seconde sur 2 cartes au moins, aucune sur 7 cartes sur 7. Chaque pôle a 6 ou 7 cartes à prix sur 7, à une carte près entre les deux pôles d'une zone.
- Les 42 noms du lot sont uniques entre conteurs (par moitié, mot principal, complément, mot traduit et préfixe, à une lettre près), hors les tolérances ci-dessus. Ils sont absents de `noms-pris.txt`, où ils sont maintenant ajoutés.

## Bilan de la série (lots 1 à 13)

**Ce qui a marché**
- **La voix des quatre conteurs a tenu treize lots.** A a gardé ses chutes sèches, B ses objets, C son ironie, D son étrangeté. Les meilleurs récits du dernier lot valent ceux du premier, et aucune zone n'est sous 70 aux lots 12 et 13.
- **Le validateur commun a rendu les règles mécaniques sûres.** Aucune erreur de moteur aux lots 12 et 13 :
  - plus aucune condition inconnue, rendue vraie ou rendue fausse par la carte ;
  - plus aucun écho caché, plus aucun plafond franchi par un réveil.
- **Le comptage des places avant l'écriture** (leçon 1 du lot 12) a fermé la série proprement. Il n'y a eu ni reprise de trop ni dernier inscrit sacrifié, et les places perdues ont été annoncées avant les cartes.
- **Le registre grand public est acquis.** Les conteurs suggèrent d'eux-mêmes au lieu de montrer, et il n'y avait rien à réécrire au lot 13.

**Ce qui reste fragile**
- **La variété s'use plus vite que les règles.** Au dernier lot, les couples de colonne, les prix principaux et les familles libres de plusieurs mots étaient épuisés. Les règles ont tenu, mais en acceptant des 3es pôles et des prix déjà payés.
- **Les doublons d'image et d'intrigue entre conteurs** restent le défaut le plus constant : ±7 au même geste, même registre, même inspecteur. Le second inscrit compare ses familles et ses objets, rarement le geste de son intrigue.
- **Les noms** se heurtent maintenant surtout aux plus de 900 noms déjà en jeu, par préfixe ou à une lettre près. Le contrôle doit rester au script.

**À surveiller en jeu**
- **Les crochets d'état** (`vulnerable`, `bete`, `brule`, ce dernier nourri par les pièges des Donjons) : vérifier en simulation que les colonnes qui les lisent ne jouent pas leur bonus à chaque carte.
- **`defausseAPrix` sans défausse dans le pôle** (B Pierre, Lumière, Tempête, et 4 pôles au lot 12) : il ne vaut que dans un paquet qui paie en défausse. À regarder dans les paquets réels.
- **Les formes ultimes de D à fort dégât ciblé** (jusqu'à 78 avec le réveil) contre le boss du niveau 5 : c'est voulu, mais c'est le sommet du jeu.
- **Les bêtes de 40 PV aux paliers 5 et 6**, nombreuses au lot 13 : le mur que le budget ne voit pas. Il est plafonné, mais il est à surveiller avec les Antres au palier 6.
