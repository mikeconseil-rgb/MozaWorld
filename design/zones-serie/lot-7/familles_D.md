# Lot 7 : carte des familles, conteur D (le Lovecraftien)

**Première version : 10 h 16**, avant les cartes, après lecture de familles_C (10 h 06), familles_B (10 h 10) et familles_A (10 h 11). **D est le dernier inscrit** : la carte se ferme vers 10 h 41, et c'est D qui change sur toute famille pleine. Les comptes seront refaits au script sur conteur_D.md à la remise.

**Version de remise : 10 h 41**, après relecture de familles_A (10 h 37), familles_B (10 h 33), familles_C (10 h 26), conteur_A.md (10 h 37), conteur_B.md (10 h 33) et conteur_C.md (10 h 30). **Aucune famille principale changée.** Changés : appoints recomptés au script (dégâts à tous retirés de cinq pôles, perce-garde retirée de Pierre) ; le lucane d'Étoiles devient un pluvier doré (C signalait les coléoptères dans quatre pôles) ; RES024 (palissades en spirale, trop proches des bordigues de C RES124) et RES253 (plongeuses, proches des plongeurs de B RES221) changent de geste ; Bēlessunu (déjà chez A) devient Amat-Šamaš et la Ressource RES141 devient « Les Jacinthes de Kar-Nabium » (préfixe « Bulbes » déjà pris). Les lignes de comptes ci-dessous sont celles du script ; le tableau des pôles garde le plan, le script fait foi.

Définitions (critique du lot 6) : famille principale = 5 cartes ou plus sur 7 (palier 7, `si` et réveil compris) ; appoint = 3 ou 4 cartes, dans 3 pôles de D au plus par famille, pioche comprise ; crochet = condition `si`. Une seule exception assumée, imposée par CONSIGNES : les 3 ou 4 invocations obligées de chaque pôle d'Antre ne comptent pas comme appoint choisi (A et C font de même). Un seul crochet sur 5 cartes chez D : `cartesJouees` dans Sang (5 cartes), qui porte l'enchaînement (place rare) ; dans le lot, c'est le deuxième avec Raison de A (`pietine`), au plafond de 2.

## Ce que D a vérifié avant de choisir

- **Totaux du lot avant D** (A + B + C, familles principales) : affaiblissement 6, riposte 6, mana 6, marque 6 (**pleines** : D n'en prend aucune) ; perce-garde 5, garde du héros 5, garde des alliés 5, brûlure 5, exil 5 (une place chacune) ; soin du héros 4, soin des alliés 4 ; pioche 1 ; hésitation 1 (B), vol de vie 1 (A), hasard 0, enchaînement 0, écho 0.
- **Les mêmes mots dans les lots 1 à 6, cartes comptées au script** : la plupart des familles libres sont déjà jouées sur mes mots. Écartés par le script : Vide, Mort, Vie, Pierre, Cristal, Étoiles, Sommeil, Éveil, Mensonge et Vérité en invocations (5 cartes ou plus déjà) ; Nuit et Aurore en gros coups ; Chaos en hasard ; Ordre, Sang, Sève, Calme, Tempête, Ombre et Lumière en pioche ; Lumière en soin, brûlure, riposte et perce-garde ; Guérison en soin, garde, écho, récupération, mana, pioche et affaiblissement ; Calme en soin du héros et des alliés.
- **Couples partagés, inscrits avant D** : D prend d'autres familles principales sur les deux pôles.
  - Mort/Vie (A ANT107 : vol de vie / soin du héros) → D : prix en bêtes et `bete` / crochet `elan`.
  - Pierre/Cristal (A ANT224 : mana / riposte) → D : crochet `pietine` et garde ennemie / soin des alliés.
  - Sommeil/Éveil (A ANT235 : prix en bêtes et `bete` / perce-garde) → D : défausse et `defausseAPrix` / soin des alliés.
  - Tyrannie/Liberté (A ASS077 : garde du héros / brûlure) → D : pioche / garde ennemie et `cibleGarde`.
  - Ombre/Lumière (A ASS163 : soin des alliés / marque) → D : hasard / garde du héros.
  - Peste/Guérison (B ANT049 : PV et `blesse` / marque) → D : crochet `brule` / crochet `hesite`.
  - Nuit/Aurore (B ASS089 : soin des alliés / mana) → D : brûlure / soin du héros.
  - Chaos/Ordre (B DON053 : hésitation / défausse et `defausseAPrix`) → D : PV et `blesse` / crochet `garde`.
  - Sang/Sève (B DON034 : brûlure / marque) → D : enchaînement / perce-garde.
  - Mensonge/Vérité (C ANT103 : invocations / affaiblissement) → D : soin du héros / hésitation.
  - Vide/Étoiles (C ANT083 : mana / marque) → D : crochet `seul` / vol de vie.

## Pôles (famille principale ; appoints ; crochet — prix)

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT088 Antre, Lande, romaine, Vent | Vide → **colonne vertébrale : crochet `seul` sur 4 cartes** (le creux de la lande qui isole ; lièvres, blaireaux ; exil 3) — PV, exil | Étoiles → **vol de vie** (place rare choisie : le ciel qui boit ; engoulevents, pluviers ; garde du héros 3 ; `vol` 2) — soin ennemi |
| ANT153 Antre, Forêt de champignons géants, slave, Sève | Pierre → **colonne vertébrale : garde ennemie payée et crochet `pietine` sur 4 cartes** (la pierre durcit qui s'avance et l'écrase quand il charge ; loirs, cloportes géants ; dégâts ciblés 4) — garde ennemie | Cristal → **soin des alliés** (les bêtes couchées sur le cristal ; limaces de verre, araignées de cave ; garde des alliés 3 ; `bete` 2) — PV |
| ANT233 Antre, Volcan, mongole, Feu | Mort → **colonne vertébrale : prix en bêtes (`prixBete`) et crochet `bete` sur 4 cartes** (les chevaux des morts menés au cône ; hésitation 3) — vos bêtes | Vie → **colonne vertébrale : crochet `elan` sur 4 cartes** (la harde de juments qui reçoit la charge ; juments, poulains, gerboises ; soin du héros 3) — soin ennemi |
| ANT006 Antre, Lande, zouloue, Vent | Sommeil → **colonne vertébrale : défausse payée (`prixDefausse`) et crochet `defausseAPrix` sur 4 cartes** (ce que le dormeur oublie revient ; pangolins, porcs-épics ; pioche 3) — défausse | Éveil → **soin des alliés** (le troupeau réveillé qui se relève ; taureaux nguni, pintades ; garde des alliés 3 ; `pietine` 2) — PV |
| ANT064 Antre, Fjord, zouloue, Glace | Mensonge → **soin du héros** (le faux remède qui soulage ; seiches ; hésitation 3 ; `hesiteAvant` 2) — défausse | Vérité → **hésitation** (place rare choisie : le flairage, où l'accusé se fige ; macareux, morses ; perce-garde 2 ; `seul` 2) — garde ennemie |
| ASS137 Assemblée, Toundra, égyptienne, Glace | Sang → **enchaînement** (place rare choisie : la saignée qui appelle la suivante, `cartesJouees` et `troisCartes` ; brûlure 3) — PV | Sève → **perce-garde** (la résine des cèdres qui ronge la cuirasse ; soin du héros 3 ; `cibleGarde` 3) — défausse |
| ASS011 Assemblée, Fjord, gothique, Glace | Tyrannie → **pioche**, Lois (le seigneur décide de ce qu'on tient en main ; exil 3 ; `defausseAPrix` 2) — défausse | Liberté → **colonne vertébrale : garde ennemie payée et crochet `cibleGarde` sur 4 cartes** (on arme les maîtres, puis on brise leurs chaînes ; récupération 3) — garde ennemie |
| ASS133 Assemblée, Cité en ruines, zouloue, Pierre | Chaos → **colonne vertébrale : PV payés et crochet `blesse` sur 4 cartes** (la furie des blessés ; dégâts à tous 3) — PV | Ordre → **colonne vertébrale : crochet `garde` sur 4 cartes**, nourri par la garde du héros (4) (le mur de boucliers) — défausse |
| ASS106 Assemblée, Toundra, moghole, Glace | Tempête → **colonne vertébrale : crochet `vol` sur 4 cartes** (le blizzard qui abat ce qui vole ; affaiblissement 3) — PV | Calme → **garde des alliés** (le camp serré sous le feutre ; récupération 3 ; `defausseAPrix` 2) — défausse |
| ASS019 Assemblée, Jungle, japonaise féodale, Sève | Ombre → **coups au hasard** (place rare choisie : les coups qui viennent du fourré ; exil 3 ; `hesiteAvant` 2) — PV | Lumière → **garde du héros** (le cercle de lanternes où l'on se tient ; affaiblissement 3 ; `seul` 2) — soin ennemi |
| DON109 Donjon, Archipel, byzantine, Eau | Nuit → **brûlure** (le feu grégeois des brûlots ; dégâts ciblés 5, vocation de Donjon ; perce-garde 3 ; `elan` 2) — PV | Aurore → **soin du héros** (la vigile qui finit ; dégâts ciblés 4 ; marque 3 ; `blesse` 3) — défausse |
| CIT011 Citadelle, Forêt de champignons géants, aztèque, Sève | Peste → **colonne vertébrale : crochet `brule` sur 4 cartes**, nourri par la brûlure (3) (la fièvre qui gagne ; affaiblissement 3) — PV | Guérison → **colonne vertébrale : crochet `hesite` sur 4 cartes**, nourri par l'hésitation (3) (la fumée du guérisseur qui endort l'assaillant ; garde des alliés 2) — soin ennemi |

**Comptes de D (familles principales)** : soin des alliés 2 (Cristal, Éveil), soin du héros 2 (Mensonge, Aurore), perce-garde 1 (Sève), garde des alliés 1 (Calme), garde du héros 1 (Lumière), brûlure 1 (Nuit), pioche 1 (Tyrannie) ; places rares : vol de vie 1 (Étoiles), hésitation 1 (Vérité), enchaînement 1 (Sang), hasard 1 (Ombre). Ni affaiblissement, ni riposte, ni mana, ni marque, ni exil en principal.
**Pôles sans famille principale (11), chacun avec sa colonne vertébrale** : un prix payé et le crochet qui en profite (Pierre, Mort, Sommeil, Liberté, Chaos), un crochet nourri par le pôle (Ordre, Peste, Guérison), un crochet d'intention ennemie sur 4 cartes (Vide `seul`, Vie `elan`, Tempête `vol`). Le nombre est élevé parce que D est le dernier inscrit et que les familles libres sont presque toutes déjà jouées sur ses mots dans les lots 1 à 6. Aucune mosaïque : chaque colonne porte 4 cartes au moins.
**Totaux du lot avec D** : soin des alliés 6, soin du héros 6, perce-garde 6, garde des alliés 6, garde du héros 6, brûlure 6, affaiblissement 6, riposte 6, mana 6, marque 6, exil 5, pioche 2 ; hésitation 2, vol de vie 2, hasard 1, enchaînement 1, écho 0. **Toutes les familles à 6 sont pleines** : personne ne peut plus y entrer.
**Appoints de D au script (3 ou 4 cartes, 3 pôles au plus ; invocations des Antres et dégâts ciblés à part)** : exil 3 (Vide, Tyrannie, Ombre), dégâts à tous 3 (Vide, Chaos, Tempête), garde du héros 3 (Étoiles, Vie, Ordre), garde des alliés 3 (Cristal, Éveil, Mensonge), hésitation 3 (Mort, Mensonge, Guérison), soin du héros 3 (Vie, Sang, Sève), pioche 3 (Sommeil, Sang, Sève), mana 3 (Éveil, Sang, Tempête), perce-garde 3 (Vérité, Liberté, Nuit), riposte 3 (Sang, Tyrannie, Ordre), marque 3 (Ordre, Ombre, Aurore), affaiblissement 3 (Tempête, Lumière, Peste), brûlure 2 (Sang, Peste), récupération 2 (Liberté, Calme), hasard 2 (Chaos, Tempête), soin des alliés 1 (Guérison). Prix sur 6 ou 7 cartes sur 7 dans les 24 pôles.

## Nombres précis, prénoms, institutions (D)

- **Nombres** : un nombre précis dans 3 récits de zone au plus : quatre-vingts (ANT233), vingt-trois (ASS133), soixante-dix (DON109). Ailleurs, « un », « deux », « trois » courants seulement. Pas de compte faux d'un (recette du lot 6). Ni dix-neuf (B).
- **Prénoms** : l'augure Gaius Vettius (ANT088), la vieille Zlata et le bûcheron Mstislav (ANT153), Odval (ANT233), Nkosinathi (ANT006), Dumisani (ANT064), le prêtre Iuput (ASS137), Jost Ammerer (ASS011), l'induna Sobantu (ASS133), Khwaja Ayaz (ASS106), maître Kogure Sōan et son élève Tama (ASS019), le calfat Akindynos (DON109), Necahual (CIT011). Ressources : Seonag Rua (RES051), Möngke (RES197), Qhawa (RES071), Amat-Šamaš (RES141), Tertia Marcia (RES270), Thandeka (RES024), Hina-rau (RES072), Sinchi Tupa (RES326), Okō (RES110), Kiyo (RES253), Genzō (RES378), Ailín (RES266), Radko (RES201).
- **Institutions** : la Maison de Vie (ASS137), la Diète (ASS011), l'ibandla (ASS133), le jharokha, la séance du balcon (ASS106), le yoriai (ASS019), le calpulli (CIT011). Ni « conseil », ni « chapitre », ni « douma », ni « thing », ni « darbar », ni « divan », ni « imbizo ».

## Formes de récit (D), pour la liste commune

Documents cités : 3 (épitaphe, firman, ex-voto), contre 11 au lot 6. Aucune énumération. Aucune reprise des recettes de D au lot 6 (posologie, consignes, relevé, rêve raconté, requête, bando, notes, almanach, liste d'interdits, inventaire, légende de plan, sermon), ni des formes de A, B et C ci-dessus.

| Zone | Forme |
|---|---|
| ANT088 | le rite interrompu (l'augure trace son templum) |
| ANT153 | la mise en garde à celui qui part |
| ANT233 | la coutume expliquée à un étranger |
| ANT006 | la garde de nuit, racontée par le garçon qui gardait |
| ANT064 | la cérémonie vue par un enfant |
| ASS137 | **document : l'épitaphe** (une stèle) |
| ASS011 | le témoignage d'un vieux serf, à la première personne |
| ASS133 | la bataille vue du rang |
| ASS106 | **document : le firman** |
| ASS019 | la leçon du maître à l'élève (dialogue) |
| DON109 | **document : l'ex-voto** |
| CIT011 | le souvenir d'enfance |

## Bêtes (familles d'animaux)

Lièvres et blaireaux (Vide), engoulevents et pluviers dorés (Étoiles), loirs et cloportes géants (Pierre), limaces de verre et araignées de cave (Cristal), chevaux morts (Mort), juments, poulains et gerboises (Vie), pangolins et porcs-épics (Sommeil), taureaux nguni et pintades (Éveil), seiches (Mensonge), macareux et morses (Vérité). Aucun rapace, singe, cervidé, serpent, crapaud, grenouille, corvidé, scorpion, sanglier, chien, tortue, crabe ni lézard (deux pôles déjà pris chez A, B ou C).

## Gestes, objets et images des Ressources (D)

Vérifiés contre les Ressources des lots 1 à 6 et contre les tables de A, B et C. Écartés pour doublon : quartz, duvet de chameau, truffes et réglisse (B RES371), gui, miel et ruches, chuño, charqui, nori, taro, feutre, morilles, latex, lait de lune, sphaigne, lichen, écorce, pain enterré (RES112), soie de mer (A RES125), sauterelles (A RES257).

| Ressource | Geste | Objet | Image 2-3 |
|---|---|---|---|
| RES051 Cavernes cristallines, celte | détacher au ciseau les veines bleues de fluorine et les tourner en coupes | fluorine | la paroi zébrée de bleu, les tours à perche qui grincent |
| RES197 Lande, mongole | agiter une houppe blanche devant les terriers pour faire sortir les marmottes curieuses | marmottes | des chasseurs à plat ventre devant chaque terrier |
| RES071 Canyon, inca | tresser chaque année le pont d'herbe au-dessus du canyon et lâcher l'ancien | cordes d'ichu | le pont neuf qui se balance, l'ancien qui tombe dans la gorge |
| RES141 Lande, mésopotamienne | arracher les bulbes de jacinthe sauvage à la houe pour la colle des scribes | colle de bulbes | la lande retournée, des tas de bulbes blancs |
| RES270 Récif, romaine | ramasser les murènes au crochet dans les trous du récif pour les viviers | murènes | les viviers de pierre où tournent des murènes |
| RES024 Mangrove, zouloue | glisser sur la vase, un genou sur une planche, et prendre à la main les périophtalmes qui sautent | périophtalmes | des glisseurs sur toute la vase, les poissons qui sautent devant eux |
| RES072 Delta fluvial, polynésienne | battre la racine à poison dans l'eau des chenaux et ramasser les poissons qui remontent, ivres | poissons étourdis | l'eau blanchie et les poissons qui flottent sur le flanc |
| RES326 Forêt boréale, inca | ramasser au matin les galets que le gel a fendus, les meilleurs pour la fronde | pierres de fronde | les clairières semées de galets ouverts |
| RES110 Îles flottantes, japonaise féodale | tendre des toiles de chanvre au vent pour boire la nuée | eau de nuée | des toiles perlées qui gouttent dans des gouttières de bambou |
| RES253 Archipel, japonaise féodale | regarder le fond par une lunette de bois à fond de verre et décrocher les turbans à la perche | turbans cornus | les barques immobiles, chaque pêcheur penché sur sa lunette |
| RES378 Fjord, japonaise féodale | arracher le kombu à la gaffe depuis la barque et l'étendre sur les galets | kombu | les grèves noires de rubans qui sèchent |
| RES266 Jungle, celte | couper les crosses des fougères arborescentes au printemps | crosses de fougère | les fougères géantes étêtées, les crosses roulées en tas |
| RES201 Volcan, slave | gratter à la raclette de bois la croûte d'alun aux lèvres des fumerolles | alun | les fumerolles bordées de croûtes pâles, les racleurs masqués de linge |

Aucun gabarit « seigneur qui prélève », ni « nom, compte, anomalie », ni « le produit part vers… » plus de deux fois. Aucun produit tinctorial. Récipients : aucun en objet principal. Aucun geste de gaule ni de branches battues au-dessus d'une toile (les toiles de RES110 boivent le vent, rien ne tombe dessus).
