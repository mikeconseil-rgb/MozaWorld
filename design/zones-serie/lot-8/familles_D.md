# Lot 8 : carte des familles, conteur D (le Lovecraftien)

**Première version : 11 h 22**, avant les cartes. Aucun familles_A/B/C.md n'existait encore à cette heure (dossier relu à 11 h 10 et 11 h 19). **Version 2 : 11 h 30**, après lecture de familles_B (11 h 20, inscrit avant moi) : B prend Clarté en invocations (vocation), Sommeil en pioche, Cristal en mana, Nuit avec le crochet `vulnerable`, et des scolopendres, des chauves-souris, des cigognes, des chameaux. Je change en conséquence : Clarté → hésitation, Sommeil → mana, Cristal → colonne, Nuit → colonne sur `brule`, Glace → pioche, Feu → soin du héros ; bêtes de Fer, Bois, Rouille et Clarté changées. **Version de remise : 11 h 47**, après lecture de familles_C (11 h 37), de conteur_B.md (11 h 33) et une dernière relecture de familles_B. familles_A.md et conteur_A/C.md n'existent pas encore. Comptes refaits au script sur conteur_D.md (`valide.py`) ; le tableau ci-dessous est l'état des cartes remises.

Définitions (critiques des lots 6 et 7) : famille principale = 5 cartes ou plus sur 7 (palier 7, `si` et réveil compris) ; appoint = 3 ou 4 cartes, dans 3 pôles de D au plus par famille ; crochet = condition `si`, sur 2 ou 3 cartes, 4 dans une colonne vertébrale, jamais 5.

## Places de D (LISTE.md, leçon 3 du lot 7) : 17 familles principales, pas une de plus

Une place dans chacune des douze familles, une seconde en garde du héros, perce-garde et pioche, plus les places rares écho et hésitation. Restent 7 pôles. **Vocations possibles : 3 seulement** (gros coups du Donjon sur la Liberté ; invocations reprises sur Rouille et Fer). Clarté, ma quatrième, est prise en vocation par B (inscrit avant moi), et tous mes autres mots d'Antre ont déjà eu ma vocation (Brume, Nuit, Aurore, Or, Feu) ou leur unique reprise (Glace, Bois). **Il reste donc 4 pôles sans famille principale (Cristal, Vérité, Nuit, Bois), un de plus que le plafond de 3** : 24 − 17 − 3 = 4. Je ne prends aucune place d'un autre ; chacune de ces 4 colonnes a un crochet sur 4 cartes nourri par le pôle lui-même. Signalé au critique comme un arbitrage à trancher.

## Ce que D a vérifié avant de choisir

- **Mes 24 mots dans les lots 1 à 7, cartes comptées au script** (`hist.py`, 5 cartes ou plus, `si` et réveil compris) : aucune famille principale ci-dessous n'a déjà été principale sur le même mot. Écartés aussi mes recettes du lot 7 sur les mêmes mots : Sommeil en défausse et `defausseAPrix`, Guérison sur `hesite` en colonne, Mensonge en soin du héros, Vérité en hésitation.
- **Vocations** (leçon 1 du lot 7) : jamais ma propre vocation sur un mot déjà joué par moi (Tyrannie en gros coups, mon DON120 ; invocations sur Brume, Nuit, Aurore, Or, Feu). Reprises prises, une seule par mot, avec d'autres bêtes et un autre crochet : Rouille (C ANT110 : sauterelles et sangliers, `bete` → D : martinets et rougequeues, `elan`) ; Fer (A ASS114 : porteurs enchaînés, `cibleGarde` → D : scorpions, `pietine`). Liberté en gros coups : jamais joué sur ce mot.
- **Écho, place rare** : la leçon 2 du lot 5 limite l'écho à 4 cartes d'un pôle, parce que le moteur ne double pas une carte qui porte un écho (`cartes.js` : `!(cur().ops||[]).some(o=>o[0]==='echo')`, au premier niveau seulement). La Peste porte l'écho au premier niveau sur 3 cartes, et sous condition (`si hesite`) sur 2 autres, que le moteur double encore : 4 cartes du pôle restent doublables. Signalé au critique.
- **Couples partagés avec B (inscrit avant moi)** : d'autres familles principales sur les deux pôles, d'autres crochets sur le même mot. B : Sommeil pioche / Éveil garde des alliés → D : mana / garde du héros. B : Pierre brûlure / Cristal mana → D : pioche / colonne `vulnerable`. B : Mensonge mana / Vérité garde du héros → D : soin des alliés / colonne PV et `blesse`. B : Brume brûlure / Clarté invocations → D : exil / hésitation. B : Peste invocations / Guérison exil → D : écho / perce-garde. B : Nuit soin du héros (`vulnerable`) / Aurore invocations → D : colonne `brule` / garde du héros.
- **Couples partagés avec C (relu à 11 h 40)** : C s'est aligné sur moi (Rouille/Or : C pioche / soin du héros ; Fer/Bois : C marque / colonne `prixBete` et `bete` ; Glace/Feu : C colonne `ennemiGarde` et `cibleGarde` / mana). Aucune famille principale commune sur ces mots ; pas de forge chez C, pas de laque ni de boutre chez moi.
- **Couples partagés avec A (Exil/Foyer, Tyrannie/Liberté, Cauchemar/Rêve)** : A n'a rien publié à 11 h 47. Mes choix sont en tête de liste ; A s'alignera.

## Couples prix-crochet (leçon 2 du lot 7) : revus à la remise contre B et C

Comptés au script sur les tableaux de B et de C et sur mes cartes. Pour qu'aucun couple ne dépasse 2 pôles du lot, j'ai changé à la remise :

- Cauchemar : `seul` → `hesiteAvant` (PV/`seul` était à 3 avec B Vérité et C Sécheresse) ;
- Peste : `brule` → `hesite` (PV/`brule` : B Pierre, C Feu, D Nuit) ;
- Nuit : prix PV → soin ennemi (même raison ; soin ennemi/`brule` : C Abondance et D Nuit, 2) ;
- Mensonge : `defausseAPrix` → `bete` (défausse/`defausseAPrix` : B Étoiles et C Croissance, plein) ;
- Glace : `cibleGarde` → `troisCartes` (défausse/`cibleGarde` : B Corail, C Déluge, C Pourriture) ;
- Feu : `elan` → `cartesJouees` (PV/`elan` : C Sang, D Liberté) ;
- Bois : prix défausse → PV (défausse/`garde` : B Cristal, C Or).

Couples de D dans 2 pôles, aucun ailleurs dans le lot : `ennemiGarde`/`pietine` (Pierre, Fer), PV/`garde` (Éveil, Bois), PV/`hesiteAvant` (Cauchemar, Brume). Couples de D partagés avec un seul autre pôle : PV/`blesse` (B Poison), PV/`hesite` (B Lumière), PV/`elan` (C Sang), PV/`vulnerable` (C Fer), PV/`cartesJouees` (B Folie), soin ennemi/`brule` (C Abondance), soin ennemi/`soinEnnemi` (B Nectar). Hors de D, encore à 3 dans le lot : PV/`pietine` (B), défausse/`cibleGarde` (B, C), PV/`vol` (B, C).

## Pôles (famille principale ; appoints ; crochet — prix), compté au script

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT006 Citadelle, Cité en ruines, nordique, Pierre | Exil → **garde des alliés** (les bannis revenus qui tiennent le banc ; invocations 4 ; `bete` 2) — PV, exil | Foyer → **perce-garde** (la pierre du foyer qui fend ce qu'on y pose ; soin du héros 4, garde du héros 4 ; `cibleGarde` 2) — soin ennemi |
| DON004 Donjon, Oasis, gothique, Sève | Tyrannie → **brûlure** (le fer rouge et la cage au soleil ; garde du héros 4, affaiblissement 3 ; `brule` 2) — défausse | Liberté → **gros coups, vocation de Donjon**, 5 cartes (la source qui crève la tour ; invocations 4, soin du héros 4 ; `elan` 2) — PV |
| ASS093 Assemblée, Steppe, andalouse, Vent | Sommeil → **mana**, Lois (la nuit rend le souffle ; hésitation 4 ; `vol` 2) — soin ennemi | Éveil → **garde du héros**, Lois (la ronde du sereno ; marque 4, soin du héros 3 ; `garde` 2) — PV |
| ASS180 Assemblée, Steppe, zouloue, Vent | Pierre → **pioche**, Lois (chaque passant ramasse une pierre du tas ; affaiblissement 4, perce-garde 4, riposte 3 ; `pietine` 2) — garde ennemie | Cristal → **colonne vertébrale : `vulnerable` sur 4 cartes**, nourri par la marque (4) ; affaiblissement 4, coups au hasard 3 — PV |
| ASS125 Assemblée, Haute montagne, maya, Pierre | Cauchemar → **affaiblissement**, Lois (le rêve qui vide l'assaillant ; hésitation 3 ; `hesiteAvant` 2) — PV | Rêve → **riposte**, Lois (on ne frappe pas un dormeur : le coup revient ; `blesse` 2) — défausse |
| ASS036 Assemblée, Fjord, celte, Glace | Peste → **écho** (place rare : la contagion recopie la carte suivante ; brûlure 4 ; `hesite` 2) — PV | Guérison → **perce-garde**, Lois (la lancette ; `soinEnnemi` 2) — soin ennemi |
| ASS060 Assemblée, Archipel, zouloue, Eau | Mensonge → **soin des alliés**, Lois (le mensonge qui console ; invocations 4 ; `bete` 2) — défausse | Vérité → **colonne vertébrale : PV payés sur 7 cartes et `blesse` sur 4** (ce qui est vrai se paie au corps) ; riposte 3 — PV |
| ANT021 Antre, Lande, inca, Vent | Brume → **exil** (ce qui entre dans la brume n'en ressort pas ; tinamous ; `hesiteAvant` 2) — exil, PV | Clarté → **hésitation** (place rare : la lumière crue qui fige ; colibris, ouettes ; `elan` 2) — soin ennemi |
| ANT033 Antre, Îles flottantes, slave, Vent | Rouille → **invocations, vocation reprise** (martinets, rougequeues ; `elan` 2) — vos bêtes | Or → **marque** (l'or désigne qui le porte ; loriots ; `cartesJouees` 2) — défausse |
| ANT037 Antre, Récif, moghole, Eau | Nuit → **colonne vertébrale : `brule` sur 4 cartes**, nourri par la brûlure (4) ; calmars luisants, poissons-lanternes — soin ennemi | Aurore → **garde du héros** (poissons-perroquets ; `seul` 2) — soin ennemi |
| ANT214 Antre, Cavernes cristallines, mésopotamienne, Pierre | Fer → **invocations, vocation reprise** (scorpions ; perce-garde 3 ; `pietine` 2) — garde ennemie | Bois → **colonne vertébrale : `garde` sur 4 cartes**, nourri par la garde du héros (4) ; capricornes du cèdre — PV |
| ANT174 Antre, Lande, andalouse, Vent | Glace → **pioche** (on déterre la neige des glacières ; bouquetins ; `troisCartes` 2) — défausse | Feu → **soin du héros** (le brûlis qui cautérise ; huppes, guêpiers ; brûlure 3 ; `cartesJouees` 2) — PV |

**Comptes de D (script)** : garde du héros 2 (Éveil, Aurore), perce-garde 2 (Foyer, Guérison), pioche 2 (Pierre, Glace), soin du héros 1 (Feu), soin des alliés 1 (Mensonge), garde des alliés 1 (Exil), affaiblissement 1 (Cauchemar), riposte 1 (Rêve), brûlure 1 (Tyrannie), marque 1 (Or), mana 1 (Sommeil), exil 1 (Brume) ; places rares : écho 1 (Peste), hésitation 1 (Clarté). Soit 17. Vocations 3 (Liberté, Rouille, Fer). Colonnes 4 (Cristal, Vérité, Nuit, Bois).

**Appoints (script)** : affaiblissement 3 (Tyrannie, Pierre, Cristal), brûlure 3 (Peste, Nuit, Feu), garde du héros 3 (Foyer, Tyrannie, Bois), soin du héros 3 (Foyer, Liberté, Éveil), marque 2, hésitation 2, perce-garde 2, riposte 2 (Pierre, Vérité), coups au hasard 1 (Cristal). Crochets : 2 cartes partout, 4 dans les colonnes, jamais 5. Prix sur 7 cartes dans les 24 pôles.

**Totaux du lot** (A compté sur ses places de LISTE.md, B et C sur leurs tableaux) : 5 pôles par famille avant la seconde place de A, 6 au plus après ; écho 2 (A, D) ; hésitation 2 (B, D).

## Nombres précis, prénoms, institutions (D)

- **Nombres** : aucun nombre précis ; « deux » et « trois » courants seulement, dans 4 récits (ASS180, ASS036, ASS060, ANT214).
- **Prénoms** : Thorgils, le frère qui garde la porte (CIT006 ; le narrateur banni n'a pas de nom), sire Enguerrand (DON004), le sereno Blas Ortuño (ASS093), le chef Bhekizwe et l'imbongi Mthunzi (ASS180), le vieil Aj Kawoq (ASS125), la médecin Gormlaith (ASS036), Zanele (ASS060), le chasqui Sayri (ANT021), le forgeron Kuzma (ANT033), le peintre Hunarmand (ANT037), le devin Ṣilli-Adad (ANT214), le muletier Celedonio (ANT174). Vérifiés au script contre familles_B, familles_C et conteur_B : aucun en commun (C cite Kuzma comme image de D, sans le reprendre).
- **Institutions** : l'assemblée d'automne (CIT006, sans nom propre), le concejo (ASS093), l'inkundla (ASS180), le cercle des ajk'ij (ASS125), l'oireachtas (ASS036), l'umkhandlu (ASS060). C s'interdit « concejo » ; B a la lögrétta, le tahtamum, le multepal, l'ordo, le dikastérion.

## Formes de récit (D) : intrigue, première et dernière phrase (leçon 4 du lot 7)

Aucun dialogue (B a le seul du lot, ASS051), aucune ouverture « X était petit quand », aucun « Moi, X », aucun enfant témoin (mes tics du lot 7). Documents cités : 2 (la complainte, les louanges). Aucune énumération. Changées après B : la saga (B a la saga brève, ASS171) et la vie de guérisseuse (B a la vie de saint, ANT164).

| Zone | Forme | Qui fait quoi, et comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT006 | le récit du banni, à la première personne | le hors-la-loi voit chaque soir quelqu'un assis à sa place vide au banc de la halle ; son frère ne le regarde plus | « J'ai été déclaré hors-la-loi à l'assemblée d'automne de Fornhjarta, pour un meurtre que je ne niais pas. » | « Celui qui est assis à ma place me rend mon salut. » |
| DON004 | la complainte des porteuses d'eau (document) | le seigneur mure la source et enchaîne les palmiers ; la source le noie ; les palmiers libres avancent | « Voici ce que chantent les porteuses d'eau de Sourdeval en montant au donjon. » | « Le dernier couplet, on ne le chante pas : il dit que les palmiers, chaque nuit, font un pas vers le village. » |
| ASS093 | le conte de village | le concejo dort sur chaque question ; le sereno entend une voix étrangère dicter la réponse | « À Hoyanegra, le concejo ne vote jamais le jour où l'on parle : il dort dessus. » | « Ce n'était la voix de personne du village. » |
| ASS180 | les louanges d'un chef (document) | l'imbongi loue le chef qui s'est assis sur le rocher et n'en est plus descendu | « Voici les louanges du chef Bhekizwe, telles que l'imbongi Mthunzi les crie à l'inkundla d'eMatsheni. » | « Les jours de grêle, deux éclats de cristal s'y allument, à hauteur d'homme assis. » |
| ASS125 | l'anecdote du voyageur puni | un marchand secoue un dormeur sacré ; c'est lui qui se retrouve endormi en bas | « Sur la montagne de Chuwi Saqil, les gardiens des jours dorment en cercle, la tête sur une pierre plate, et disent au matin au cercle des ajk'ij ce qu'ils ont vu. » | « Au sommet, le vieux s'est réveillé avec du sel sur les lèvres. » |
| ASS036 | le mal vu depuis la vallée voisine | la fièvre passe la colline avec la fumée des bassines ; la vallée guérit sans médecin, et chacun porte l'entaille de la lancette | « Dans la vallée qui touche Inbhear Fiabhrais, on n'a jamais eu de médecin. » | « Personne ici ne se souvient d'une lancette. » |
| ASS060 | la coutume et son exception | on dit des noyés qu'ils sont « sur l'autre île » ; Zanele part avec la barque des vivres | « Sur les îles d'Esiqhingini, on ne dit jamais d'un pêcheur qu'il s'est noyé : on dit qu'il est parti pour l'autre île. » | « Les rameurs disent qu'ils l'ont laissée sur une grève que personne ne connaît, où on l'attendait. » |
| ANT021 | le relais de coureurs | Sayri reçoit dans la brume un message d'un relais vide | « Au relais de Phuyupata, le chasqui qui arrive crie son message et tend la cordelette au suivant sans s'arrêter. » | « Il dit que la main était froide, et calleuse comme celle d'un coureur. » |
| ANT033 | le conte merveilleux (skazka) | Kuzma garde l'or au lieu de forger ; l'île détachée monte, dorée, et ses gens font des signes | « Dans un certain royaume, les îles flottaient, et chacune tenait à la terre par une chaîne de fer. » | « Kuzma ne lève plus la tête : il dit que ce ne sont pas des adieux. » |
| ANT037 | la commande d'un tableau | le peintre peint le jardin de nuit sur le récif, puis rend une feuille vide pour l'aube | « Le nawab de Marjanpur fit dresser un jardin de nuit sur le récif que découvre la marée basse : tapis, coussins, lampes d'argent posées sur le corail. » | « Il dit qu'à l'aube, les lueurs de la marge avaient levé la tête. » |
| ANT214 | le devin qui écrit ses présages | Ṣilli-Adad descend écrire des présages et ne remonte pas ; le cèdre a pris racine | « Le devin Ṣilli-Adad descendit dans la grotte de cristal avec une hache de fer et un bâton de cèdre, pour ajouter des présages à la série du roi. » | « On a retrouvé la tablette près de la hache fendue, et le bâton de cèdre avait pris racine dans le cristal. » |
| ANT174 | le récit du vieux à l'auberge | la neige des glacières, passée au feu de lande, ne fond plus ; celles qui en mangent n'ont plus froid | « Les muletiers de Navanieve chargent la neige la nuit, au fond des glacières de pierre, et la descendent à Grenade avant le soleil, cousue dans la paille. » | « Celedonio dit seulement que, depuis, aucune d'elles n'a plus eu froid. » |

Proche signalé par C : son ANT230 (inca, la veille de la puya) ; C a remplacé son cordon à nœuds par un muret pour ne pas croiser ma cordelette de chasqui.

## Noms

Mots principaux des secondes moitiés : Banc, Geôle, Concejo, Inkundla, Pierres-Oreillers, Cautère, Rive, Relais, Amarres, Jardin, Grotte, Glacière. Aucun dans les noms de B au lot 8 (Pā, Thana, Tahtamum, Dikastérion, Multepal, Ordo, Lögrétta, Balise, Ravin, Colline, Rade, Anse), aucun premier mot traduit ne les reprend. **Lomanieve (« colline de neige ») devient Navanieve** (« plateau de neige ») à cause de « Nanacatepec, la Colline du Feu nouveau » (B). Les 12 noms sont absents de noms-pris.txt.

## Bêtes (familles d'animaux, comptées au script sur les noms d'invocation)

| Pôle | Bêtes | Familles |
|---|---|---|
| ANT021 − Brume | Tinamou de la puna, Tinamous de la brume, Grand tinamou (et le Coureur de brume, humain) | tinamous |
| ANT021 + Clarté | Colibri de la puna, Nuée de colibris, Ouette blanche, Ouettes des Andes | colibris, anatidés |
| ANT033 − Rouille | Martinets (de la chaîne, sous l'île, de la Saint-Élie), Grand martinet, Rougequeues | martinets, muscicapidés |
| ANT033 + Or | Loriots (de la coupole, du tsar, d'or), Loriot-roi | loriots |
| ANT037 − Nuit | Poisson-lanterne, Banc de poissons-lanternes, Calmar luisant, Grand calmar luisant | myctophidés, céphalopodes |
| ANT037 + Aurore | Poisson-perroquet, Poissons-perroquets, Grand perroquet de mer | scaridés |
| ANT214 − Fer | Scorpions (de la veine, de limaille, noir, de fer, de la galerie, du seuil), Scorpion-homme | scorpions |
| ANT214 + Bois | Capricorne du cèdre, Capricornes du cèdre, Grand capricorne | cérambycidés |
| ANT174 − Glace | Bouquetin de la sierra, Bouquetins des glacières, Vieux bouquetin | bovidés (avec B Clarté, gazelle : 2, plafond) |
| ANT174 + Feu | Huppe de la lande, Huppes du brûlis, Guêpiers de la brande | huppes, guêpiers |

Hors Antres, des humains seulement : bannis revenus (CIT006 Exil), captifs et porteuses (DON004 Liberté ; « noyés » retiré pour ne pas doubler ASS060), noyés revenus et rameurs (ASS060 Mensonge). Aucune famille animale de D chez C ; chez B, les seuls bovidés. **A ne doit plus prendre de bovidés.** Aucun rongeur, mustélidé, félin, ours, équidé, gallinacé, lézard, rapace, canidé, corvidé ni serpent.
