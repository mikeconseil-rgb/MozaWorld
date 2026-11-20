# Lot 5 : carte des familles, conteur C (le Sournois)

Famille principale = 5 cartes ou plus sur 7 (palier 7 et réveil compris). Appoint = 2 à 4 cartes. Crochet = condition `si` et nombre de cartes qui la portent (2 ou 3, jamais 5 ou plus chez moi dans ce lot).
**Première version écrite à 05 h 43** (05 h 43 min 46 s), avant toute autre carte des familles du lot 5. **Mise à jour à 06 h 05 puis à la remise**, après lecture de familles_D (05 h 45, mis à jour 05 h 50), familles_B (05 h 47) et familles_A (05 h 52) : nombres précis, Ressources et collisions ajoutés ; mes familles ne changent pas. Elle sera relue encore avant la remise.

## Ce que j'ai vérifié avant de choisir
- Les 24 pôles des mêmes mots dans les lots 1 à 4, cartes comprises (relevé au script) : aucune de mes familles principales ne reprend celle d'un pôle du même mot déjà en jeu.
- Onze de mes douze couples reviennent ailleurs dans le lot 5 (A : Sommeil/Éveil, Pourriture/Croissance, Peste/Guérison ; B : Glace/Feu, Rouille/Or, Folie/Raison, Silence/Chant ; D : Mensonge/Vérité, Poison/Nectar, Chaos/Ordre, Oubli/Mémoire). J'écris le premier : les seconds prennent une autre famille principale sur les deux pôles (leçon 1 du lot 4). Os/Corail n'est qu'à moi.
- Leçons du lot 4 : récupération sur 4 cartes au plus par pôle (jamais principale) ; pas de `defausseCommune` ; « la cible » avec `"cible":1` (aussi pour `elan`, `pietine`, `vol`, `hesite`, `cibleGarde`, `brule`, `vulnerable`) ; une famille d'appoint dans 3 de mes pôles au plus (hors dégâts ciblés, et hors invocations des Antres, vocation du type) ; « tous » sur 3 cartes sur 7 au plus ; au moins trois familles par pôle.

## Plafonds tenus de mon côté
- Places rares (2 pôles par lot) : **vol de vie 1** (DON122 Peste), **coups au hasard 1** (ASS063 Rouille). Ni hésitation, ni écho, ni enchaînement en famille principale.
- Familles plafonnées (2 pôles au plus chez moi) : perce-garde 2, affaiblissement 2, marque 2, riposte 2, brûlure 2, garde des alliés 2, soin du héros 2, soin des alliés 2, mana 2, exil 2, garde du héros 1, dégâts à tous 0 (impossible avec « tous » sur 3 cartes au plus).
- Vocations (non plafonnées) : pioche (ANT173 Feu, le signal qui passe), invocations des Antres.

## Pôles (comptes finaux, faits au script sur conteur_C.md)

| Zone | Pôle − : famille principale (appoint ; crochet) — prix | Pôle + : famille principale (appoint ; crochet) — prix |
|---|---|---|
| ANT173 Haifeng-tai | Glace : garde des alliés (chèvres et phoques givrés, affaiblissement ; `garde` 2) — défausse | Feu : pioche (milans, dégâts ciblés ; `bete` 2) — bête |
| ANT193 Ca' Frasca | Mensonge : perce-garde (phasmes, mantes, hésitation ; `cibleGarde` 2) — défausse | Vérité : riposte (grenouilles, serpents corail, soin du héros ; `elan` 2) — garde ennemie |
| ANT236 Hengivík | Sommeil : soin du héros (paresseux, hésitation ; `blesse` 2) — soin ennemi | Éveil : brûlure (fourmis rouges, singes hurleurs, dégâts à tous 2 ; `brule` 2) — PV |
| ANT101 Per-Mehty | Folie : marque (lemmings, renards, coups au hasard ; `vulnerable` 2) — défausse | Raison : riposte (bœufs musqués, garde du héros ; `pietine` 2) — PV |
| ANT106 Zegwa-Dél | Pourriture : exil (gypaètes, affaiblissement ; `seul` 2) — exil | Croissance : mana de Vent (géladas, soin des alliés ; `bete` 2) — garde ennemie |
| ASS082 Nogoon-Ordo | Chaos : Lois de mana (dégâts à tous 3, dégâts ciblés ; `defausseAPrix` 2) — défausse | Ordre : Lois de soin des alliés (pioche, garde des alliés ; `troisCartes` 2) — soin ennemi |
| ASS061 Sharbatabad | Poison : Lois de marque (dégâts ciblés, hésitation ; `hesite` 2) — PV | Nectar : Lois d'affaiblissement (pioche, soin du héros ; `soinEnnemi` 2) — soin ennemi |
| ASS131 Fichtenau | Os : Lois d'exil (dégâts ciblés, garde du héros, perce-garde ; `cibleGarde` 2) — exil, PV | Corail : Lois de soin des alliés (clavaires-boucliers, garde du héros, pioche ; `bete` 2) — défausse |
| ASS063 Rotenspor | Rouille : Lois de coups au hasard (exil 2, dégâts ciblés ; `vol` 2) — PV, exil | Or : Lois de garde du héros (pioche, marque ; `garde` 2) — garde ennemie |
| DON122 Cathair Ceirte | Peste : vol de vie (brûlure, marque ; `blesse` 2) — PV | Guérison : affaiblissement (riposte, soin du héros ; `elan` 2) — soin ennemi |
| DON103 Tettigeia | Silence : perce-garde (gros coups, marque ; `seul` 2) — défausse | Chant : brûlure (dégâts à tous 2, dégâts ciblés ; `brule` 2) — garde ennemie |
| CIT014 Patolcalco | Oubli : garde des alliés (soldats sans nom et murs de boucliers, affaiblissement ; `pietine` 2) — PV | Mémoire : soin du héros (riposte 4, récupération 4 ; `vol` 2) — défausse |

Comptes de cartes par pôle (famille principale / appoints) : voir la section « Notes pour le critique » de conteur_C.md, qui recopie la sortie du validateur.
Appoints chez moi (nombre de pôles, hors dégâts ciblés et invocations d'Antre) : affaiblissement 3 (ANT173 −, ANT106 −, CIT014 −), hésitation ciblée 3 (ANT193 −, ANT236 −, ASS061 −), soin du héros 3 (ANT193 +, ASS061 +, DON122 +), dégâts à tous 3 (ANT236 +, ASS082 −, DON103 +), garde du héros 3 (ANT101 +, ASS131 −, ASS131 +), pioche 3 (ANT106 +, ASS131 +, ASS063 −), marque 3 (ASS063 +, DON122 −, DON103 −), riposte 2, et une fois chacun : coups au hasard, soin des alliés, garde des alliés, enchaînement (`troisCartes`, 2 cartes), perce-garde, bloqueurs hors Antre, exil, brûlure, récupération. La pioche est en plus famille principale (6 cartes) des Assemblées ASS082 +, ASS061 +, ASS063 + et du Feu d'ANT173 (vocation).

## Collisions relevées dans le lot 5 (relues à 06 h 08 et à la remise)
- **Glace / Feu, B ASS023** et **Silence / Chant, B ANT147** : B avait d'abord mis son Feu en pioche et son Silence en perce-garde, comme mes ANT173 + et DON103 −. **Réglé par B** (mise à jour de familles_B) : Feu → perce-garde, Silence → invocations. Mes familles ne changent pas.
- **Jungle, B ANT009 (Cauchemar / Rêve)** : B avait des guêpes-papier, des paresseux et un hamac. **Réglé des deux côtés** : B quitte les hamacs et les guêpes ; de mon côté, ANT193 Vérité remplace ses guêpes-papier par des serpents corail. Il reste des paresseux chez B parmi d'autres bêtes de nuit (singe de nuit, kinkajou), en appoint ; chez moi ils portent tout le pôle Sommeil d'ANT236 : à signaler, pas à corriger à mon sens.
- Les autres couples partagés ont changé chez A et D (voir leurs fichiers).
- Plafonds du lot, recomptés sur les quatre fichiers après la mise à jour de B : vol de vie 2 (B ANT097, C DON122), hasard 2 (C ASS063, B DON086), hésitation 2 (B ASS023 −, D ANT162 −), écho 2 (D ASS008, A ANT093), enchaînement 2 (D DON076, A ANT155). Les familles plafonnées à 6 sont toutes à 6 au plus avec mes deux pôles chacune ; la perce-garde reste à 6 (D ANT038, D ASS031, B DON012, B ASS023 +, C ANT193, C DON103).

## Nombres précis pris par C (récits, `pal`, noms, ambiances)
onze (les tours de guet, ANT173) · vingt-deux (les années du goûteur, ASS061) · cinq (les fèves du patolli, CIT014) · neuf (les noms qui restent à la garnison, CIT014). Aucun « trente-X », pas de « quarante ». Vérifiés contre les listes de B et de D (A n'en prend aucun).

## Gestes, objets et images des Ressources (C)
Vérifiés contre les Ressources des lots 1 à 4 (relevé au script) et contre les listes de A, B et D du lot 5. Changés en route : le kapok (A RES116), le parchemin tendu sur cadres (B RES332, vélin), la poudre de vesse-de-loup (trop près des spores de D RES118), les cordes d'écorce de baobab (D RES164), le sel de saumure (D RES274), la cire blanchie (B RES332, même geste de blanchir), les oursins sous la glace (B RES259, même plan sous la glace du fjord) ; et, contre les lots précédents, l'amadou, les sangsues, la soude, le naphte, les œufs d'autruche et le marbre scié au fil.

| Ressource | Geste | Objet | Image |
|---|---|---|---|
| RES190 Champignons géants, grecque | enfiler les morilles à l'aiguille en colliers | morilles séchées | colliers bruns pendus sous les avant-toits |
| RES163 Îles flottantes, khmère | casser les tiges de lotus et tirer les fils, roulés sur la cuisse | fil de lotus | bassins de lotus au bord des îles, fileuses assises dans l'eau |
| RES085 Falaise côtière, éthiopienne | cueillir les feuilles de gesho sur les corniches | gesho (l'amer de la bière) | feuilles étalées sur les toits plats au bord du vide |
| RES073 Forêt boréale, slave | tresser des laptis en liber de tilleul | laptis (chaussons d'écorce) | rubans de liber qui trempent dans la mare, paires pendues aux perches |
| RES320 Champignons géants, celte | fendre le bois mort qui luit et le planter le long des sentiers | bois luisant | piquets pâles qui balisent les sentiers la nuit |
| RES273 Marais, byzantine | pousser une cuve ronde parmi les rosettes et cueillir les macres | macres (châtaignes d'eau) | cuves rondes au milieu des rosettes flottantes |
| RES287 Fjord, polynésienne | scier et polir des hameçons dans l'os d'une baleine échouée | hameçons d'os | carcasse blanche sur la grève, polisseurs autour |
| RES033 Haute montagne, romaine | engraisser les loirs dans des jarres percées | loirs | rangées de jarres à trous sous les chênes de montagne |
| RES152 Cité en ruines, égyptienne | piocher la brique crue des ruines pour l'engrais des champs | terre des ruines (sebakh) | ânes chargés qui sortent des ruines, murs entamés |
| RES025 Désert de sel, japonaise féodale | retourner une à une les prunes salées sur les claies | prunes salées | claies de prunes rouges sur la croûte blanche |
| RES203 Savane, byzantine | entailler à l'ongle de fer chaque figue de sycomore | figues de sycomore | grand sycomore isolé, grimpeurs dans les branches |
| RES119 Fjord, éthiopienne | lier des bottes de roseau en barques | barques de roseau (tankwa) | barques jaunes qui sèchent à l'envers sur la grève |
| RES169 Désert de sel, moghole | faire tourner les carafes dans un bain de salpêtre pour rafraîchir l'eau | eau rafraîchie au salpêtre | bassins blancs et carafes de cuivre qu'on tourne |
| RES009 Oasis, gothique | percer et polir les noyaux de dattes en grains de chapelet | chapelets de noyaux | grains bruns qui sèchent sur des toiles, sous les palmes |
| RES261 Îles flottantes, maya | ouvrir les cabosses et faire fermenter les fèves sous les feuilles | fèves de cacao | tas de feuilles fumants, cabosses ouvertes en coques |
| RES037 Canyon, nordique | brûler le bois de pin dans une fosse en entonnoir pour le goudron | goudron de pin | fosses fumantes sur le rebord du canyon, rigole noire |
