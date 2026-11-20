# Lot 6 : conteur D (le Lovecraftien)

Douze zones à cartes (fiche et 14 cartes) et seize Ressources (fiche légère). Format : `CONSIGNES.md`, avec les leçons des lots 1 à 5, et `cartes-2.2/consignes-cartes.md`, sections 4, 6 et 7. Budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 % ; forme du palier 7 entre 45 et 55 points **sans tolérance** (leçon du lot 5), réveil de 60 à 100 % en plus.

Table de budget commune : « alliés » ×1,5 sur la garde et le soin ; « tous » ×2,2 ; un effet sous `si` compte pour 50 % ; `exil` = prix de 3 ; `volVie` = moitié des dégâts de la carte, `si` compris ; `ignoreGarde` = 3 ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n ; `prixBete` n = n. Chaque budget est calculé au script et rappelé dans le champ `budget`.

Recettes de récit, une par zone, aucune reprise du lot 5 : posologie de guérisseuse (Rumi-Tika), consignes de passation (Kirî-Ešnun), relevé de niches à galets (Yuraq-Machay, le seul compte faux d'un du lot chez D), rêve raconté (Inqilf-Meda), requête de bûcherons (Khet-Neheh), bando crié (Fondasecca), notes de gouverneur (Kishtpur), almanach des jours (Sak-Tz'ib), liste d'interdits récitée (eMatsheni), inventaire de scribe (Ta-Wehat), légende de plan (Veal Chhngai), sermon (Belolëd).

## Carte des familles

La carte complète (appoint, crochet, prix, prénoms, nombres, Ressources) est dans `lot-6/familles_D.md`, écrite avant les cartes (06 h 55) et mise à jour à la remise après relecture de familles_A (07 h 15), familles_B (08 h 59), familles_C (08 h 56), conteur_A.md, conteur_B.md et conteur_C.md. Résumé compté au script sur les cartes (familles sur 3 cartes ou plus, dégâts ciblés à part) :

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT115 Les Hampes de Rumi-Tika | Poison : bêtes 6 ; brûlure 4 ; dégâts ciblés 4 ; crochet `brule` 4 ; prix sur 6 cartes (PV) | Nectar : vol de vie 7 ; bêtes 4 ; dégâts à tous 3 ; dégâts ciblés 4 ; crochet `vol` 3 ; prix sur 6 cartes (soin ennemi) |
| ANT074 Kirî-Ešnun, les Jardins des Coupeuses | Chaos : bêtes 4 ; hasard 4 ; affaiblissement 4 ; dégâts ciblés 4 ; crochet `pietine` 3 ; prix sur 6 cartes (bête) | Ordre : brûlure 7 ; bêtes 4 ; garde du héros 4 ; dégâts ciblés 2 ; crochet `cartesJouees` 3 ; prix sur 6 cartes (défausse) |
| ANT075 Les Concrétions de Yuraq-Machay | Os : mana 4 ; exil 4 ; marque 3 ; bêtes 3 ; dégâts ciblés 4 ; crochet `seul` 3 ; prix sur 6 cartes (PV, exil) | Corail : bêtes 4 ; garde des alliés 4 ; soin des alliés 4 ; dégâts ciblés 4 ; crochet `bete` 5 ; prix sur 6 cartes (garde ennemie) |
| ANT104 Inqilf-Meda, la Plaine du Rêve commun | Sommeil : bêtes 6 ; soin des alliés 4 ; hésitation 3 ; dégâts ciblés 1 ; crochet `hesite` 3 ; prix sur 6 cartes (défausse) | Éveil : marque 5 (réécrit par le critique : la garde du héros était le 7e pôle du lot) ; riposte 4 ; bêtes 4 ; garde du héros 2 ; dégâts ciblés 4 ; crochet `elan` 3 ; prix sur 6 cartes (PV) |
| ANT182 Khet-Neheh, la Forêt aux Mâts | Tyrannie : bêtes 6 ; perce-garde 4 ; dégâts ciblés 4 ; crochet `cibleGarde` 3 ; prix sur 6 cartes (PV) | Liberté : récupération 4 ; bêtes 4 ; hasard 3 ; dégâts ciblés 4 ; crochet `seul` 3 ; prix sur 6 cartes (PV, défausse) |
| ASS144 Fondasecca, le Collège des Eaux | Sécheresse : affaiblissement 4 ; soin du héros 3 ; dégâts ciblés 4 ; crochet `blesse` 4 ; prix sur 7 cartes (PV) | Déluge : affaiblissement 7 ; dégâts ciblés 4 ; crochet `defausseAPrix` 3 ; prix sur 6 cartes (défausse) |
| ASS154 Le Bargad de Kishtpur | Pourriture : affaiblissement 4 ; brûlure 3 ; dégâts ciblés 4 ; crochet `soinEnnemi` 3 ; prix sur 6 cartes (défausse) | Croissance : garde des alliés 4 ; pioche 4 ; mana 3 ; soin du héros 3 ; dégâts ciblés 4 ; crochet `cibleGarde` 3 ; prix sur 6 cartes (soin ennemi) |
| ASS058 Le Banc des Jours de Sak-Tz'ib | Folie : soin du héros 7 ; dégâts à tous 3 ; dégâts ciblés 4 ; crochet `blesse` 3 ; prix sur 7 cartes (PV) | Raison : marque 4 ; pioche 4 ; brûlure 4 ; hésitation 3 ; dégâts ciblés 4 ; crochet `troisCartes` 2 ; prix sur 6 cartes (défausse) |
| ASS028 L'Imbizo d'eMatsheni | Sang : soin des alliés 7 ; bêtes 3 ; dégâts ciblés 4 ; crochet `bete` 3 ; prix sur 7 cartes (PV) | Sève : garde du héros 7 ; dégâts ciblés 4 ; crochet `garde` 3 ; prix sur 6 cartes (garde ennemie) |
| DON121 Ta-Wehat, la Tombe aux Pas | Cendre : marque 7 ; riposte 3 ; perce-garde 3 ; dégâts ciblés 5 ; crochet `pietine` 3 ; prix sur 6 cartes (PV) | Floraison : brûlure 7 ; dégâts ciblés 4 ; crochet `seul` 3 ; prix sur 6 cartes (garde ennemie) |
| DON078 Veal Chhngai, le Réservoir sous les Dunes | Ruine : pioche 4 ; riposte 3 ; perce-garde 3 ; dégâts ciblés 4 ; crochet `cibleGarde` 3 ; prix sur 6 cartes (défausse) | Abondance : garde du héros 4 ; soin du héros 4 ; mana 4 ; bêtes 3 ; dégâts ciblés 4 ; crochet `soinEnnemi` 3 ; prix sur 6 cartes (soin ennemi) |
| CIT034 Belolëd, la Citadelle du Glacier | Corruption : soin des alliés 4 ; bêtes 4 ; dégâts ciblés 4 ; crochet `bete` 3 ; prix sur 6 cartes (bête) | Pureté : garde du héros 4 ; garde des alliés 4 ; hésitation 3 ; dégâts ciblés 4 ; crochet `pietine` 3 ; prix sur 6 cartes (garde ennemie) |

- **Familles principales de D** (5 cartes ou plus) : vol de vie (ANT115 +, place rare), brûlure (ANT074 +, DON121 +), garde du héros (ANT104 +, ASS028 +), affaiblissement (ASS144 +), soin des alliés (ASS028 −), soin du héros (ASS058 −), marque (DON121 −, avec 5 dégâts ciblés, Donjon) ; bêtes en vocation dans trois Antres (ANT115 −, ANT104 −, ANT182 −). Ni hésitation, ni hasard, ni écho, ni enchaînement en principal.
- **Douze pôles sans famille principale**, construits sur un prix ou un crochet, comme le critique le demandait au lot 5 quand les plafonds sont pleins : ANT074 − (prix en bêtes), ANT075 − (exil et PV), ANT075 + (crochet `bete` sur 5 cartes, le seul crochet de D sur 5 cartes), ANT182 + (récupération), ASS144 − (PV sur 7 cartes), ASS154 − et ASS154 + (défausse ; soin ennemi), ASS058 + (défausse), DON078 − et DON078 + (défausse ; soin ennemi), CIT034 − et CIT034 + (prix en bêtes ; garde ennemie).
- **Comptes du lot** avec D, d'après les tableaux de familles_A, B et C à 08 h 56 : affaiblissement 6, brûlure 6, soin du héros 6, marque 5, soin des alliés 4, mana 5, vol de vie 2 (B ANT229 −, D ANT115 +), dégâts ciblés en principal 3 (C DON119 +, C DON015 −, D DON121 −). **Garde du héros : 7** (A 1, B 2, C 2, D 2) : voir les notes pour le critique.
- **Leçons du lot 5, vérifiées au script** : dégâts ciblés sur 4 cartes au plus par pôle (5 en Donjon), `si` compris ; écho nulle part ; aucune zone n'a la même famille principale à ses deux pôles ; prix au même nombre dans les deux pôles (6 et 6, ou 7 et 6) ; une famille d'appoint (3 ou 4 cartes) dans 3 pôles de D au plus, bêtes des Antres et dégâts ciblés à part ; « tous » sur 3 cartes au plus ; exil et récupération sur 4 cartes au plus ; formes du palier 7 entre 45 et 55 points de base, sans tolérance.

## Couples de pôles déjà en jeu : cartes relues avant d'écrire

Relevé au script sur les lots 1 à 5 (familles sur 5 cartes ou plus, bêtes à part), puis familles_A, B et C du lot 6.

- **Poison / Nectar** (lots 1 à 5 : hésitation, gros coups, marque, garde du héros, affaiblissement, brûlure / soin du héros, soin et garde des alliés ; lot 6, C DON119 : perce-garde / gros coups). ANT115 : bêtes venimeuses en vocation, crochet `brule` / vol de vie, jamais employé sur ce couple.
- **Chaos / Ordre** (huit zones ; l'Ordre a eu mana, riposte, soin des alliés, pioche, hésitation, garde, marque, affaiblissement, jamais la brûlure). ANT074 : prix en bêtes / brûlure (l'aigre des jardinières), crochet `cartesJouees` sur 3 cartes.
- **Os / Corail** (sept zones ; lot 6, A ANT114 : marque / garde des alliés). ANT075 : exil et PV / crochet `bete`. Mes appoints recoupent ceux de A sur le même mot (marque 3 du côté de l'Os, garde des alliés 4 du côté du Corail), mais en appoint seulement.
- **Sommeil / Éveil** (cinq zones : garde des alliés, hésitation, soin du héros, garde du héros, affaiblissement / gros coups, dégâts à tous, brûlure, pioche, riposte ; lot 6, B ASS050 : soin des alliés / enchaînement). ANT104 : bêtes en vocation avec soin des alliés 4 / garde du héros (jamais employée sur l'Éveil). Ma première table (06 h 55) donnait aussi le soin des alliés au Sommeil, avec le même crochet `hesite` que B. B l'avait écrit dès 06 h 49 : D a cédé. Mon Sommeil est passé en bêtes (6 cartes), et le soin des alliés n'y est plus qu'un appoint (4).
- **Tyrannie / Liberté** (ANT166, DON086, DON120 ; lot 6, C ASS095 : hésitation / soin des alliés). ANT182 : bêtes du réseau en vocation, crochet `cibleGarde` / récupération et crochet `seul`.
- **Sécheresse / Déluge** (sept zones ; lot 6, A ASS120 : crochet `defausseAPrix` du côté de la Sécheresse). ASS144 : PV sur les 7 cartes, crochet `blesse` / affaiblissement (jamais employé sur le Déluge). Mon Déluge porte aussi `defausseAPrix`, sur 3 cartes, du côté opposé à celui de A.
- **Pourriture / Croissance** (six zones ; lot 6, B DON107 : mana / soin du héros). ASS154 : défausse, brûlure et affaiblissement, crochet `soinEnnemi` / soin ennemi. Ma première table mettait aussi la Pourriture en mana (de Feu, sur 7 cartes). B l'avait écrite avant : D a cédé, et le mana n'y est plus que sur 2 cartes.
- **Folie / Raison** (dix zones, jamais le soin du héros du côté de la Folie ; lot 6, C CIT022 : garde des alliés / garde du héros). ASS058 : soin du héros (la fièvre rieuse) / défausse et `troisCartes`.
- **Sang / Sève** (dix zones : la Sève n'avait jamais eu la garde du héros ; lot 6, C ANT188 : mana payé en PV / bêtes). ASS028 : soin des alliés payé en PV, crochet `bete` / garde du héros, crochet `garde`.
- **Cendre / Floraison** (cinq zones ; lot 6, A ANT205 : perce-garde / soin du héros). DON121 : marque (jamais employée du côté de la Cendre) / brûlure (jamais du côté de la Floraison). La perce-garde reste à 3 cartes dans ma Cendre.
- **Ruine / Abondance** (huit zones ; lot 6, C DON015 : gros coups / riposte). DON078 : défausse, dégâts ciblés ramenés à 4 pour ne pas reprendre les gros coups de C / soin ennemi, riposte sur 2 cartes seulement.
- **Corruption / Pureté** (six zones ; lot 6, A ANT156 : bêtes / riposte). CIT034 : prix en bêtes (la neige rouge prend la garnison) / garde ennemie ; riposte sur 2 cartes.

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT115 Les Hampes de Rumi-Tika | Sang / Racine | Racine / Braise |
| ANT074 Kirî-Ešnun, les Jardins des Coupeuses | Racine / Sang | Sceau / Racine |
| ANT075 Les Concrétions de Yuraq-Machay | Abîme / Givre | Racine / Abîme |
| ANT104 Inqilf-Meda, la Plaine du Rêve commun | Givre / Racine | Braise / Givre |
| ANT182 Khet-Neheh, la Forêt aux Mâts | Givre / Sceau | Racine / Givre |
| ASS144 Fondasecca, le Collège des Eaux | Braise / Abîme | Abîme / Sceau |
| ASS154 Le Bargad de Kishtpur | Sang / Braise | Sceau / Sang |
| ASS058 Le Banc des Jours de Sak-Tz'ib | Abîme / Braise | Sceau / Givre |
| ASS028 L'Imbizo d'eMatsheni | Sang / Sceau | Givre / Racine |
| DON121 Ta-Wehat, la Tombe aux Pas | Abîme / Sang | Braise / Sceau |
| DON078 Veal Chhngai, le Réservoir sous les Dunes | Braise / Abîme | Sceau / Sang |
| CIT034 Belolëd, la Citadelle du Glacier | Sang / Abîme | Givre / Braise |

Chaque résonance est posée 4 fois et réveillée 4 fois dans mes douze zones (compté au script) ; aucune forme ne réveille ce qu'elle pose. Chaîne de trois possible : ANT104 + pose Braise → ASS154 − la réveille et pose Sang → ANT074 − le réveille et pose Racine ; ou ANT075 + réveille Abîme et pose Racine → ANT104 − réveille Racine et pose Givre → ASS058 + réveille Givre et pose Sceau.

## ±7 : recettes tournantes

- −7 : la pente aux oiseaux pendus (Rumi-Tika), la marée de légionnaires (Kirî-Ešnun), le treillis d'os blanc (Yuraq-Machay), la plaine qui rêve d'une source (Inqilf-Meda), les souches qui fument en rangs (Khet-Neheh), la lagune bue (Fondasecca), les greniers qui font trembler l'air (Kishtpur), le canyon qui rit (Sak-Tz'ib), la mare rouge (eMatsheni), la tombe pleine de cendre (Ta-Wehat), le temple sous la dune (Veal Chhngai), la garnison rouge sans ordres (Belolëd).
- +7 : la hampe en fleur et les colibris (Rumi-Tika), les allées droites sous les gradins (Kirî-Ešnun), le corail de pierre autour des bêtes vivantes (Yuraq-Machay), les mâchoires qui broutent dans la nuit (Inqilf-Meda), la forêt sans allées (Khet-Neheh), le Collège qui siège sur une barge (Fondasecca), le banian sans bord (Kishtpur), le rai qui brûle la paroi (Sak-Tz'ib), le marais qui bourgeonne (eMatsheni), la dune en fleur que les caravanes contournent (Ta-Wehat), le riz sur les dunes (Veal Chhngai), la citadelle blanche sans odeur (Belolëd).
- Recettes : immobilité (Khet-Neheh +), foule (Kirî-Ešnun −, Inqilf-Meda +), vide (Ta-Wehat −, Belolëd +), démesure (Kishtpur +, Veal Chhngai +), ruine (Veal Chhngai −, Fondasecca −), ordre (Kirî-Ešnun +, Sak-Tz'ib +). Aucun +7 peint ou teint ; aucune architecture qui devient organisme ; les végétaux du +7 poussent à côté des bâtiments ou au-dessus (la dune de Ta-Wehat, le riz de Veal Chhngai), sans les avaler.

## Ressources : geste, objet, image

poser des gluaux dans les arbustes du rebord quand les grives traversent (objet : grives ; image : le rebord hérissé de baguettes engluées) (RES050) · faire tomber les lucioles des palétuviers à l'éventail, au crépuscule (objet : lucioles dans des manches de gaze ; image : la mangrove qui clignote d'un seul battement) (RES076) · cueillir à l'aube les pousses tendres du khat sur les terrasses chaudes du cône (objet : feuilles de khat ; image : terrasses vertes sous la fumerolle) (RES275) · chercher du pied, à gué, les galets de jade dans les rivières de dégel (objet : jade ; image : les gués pleins de gens immobiles, jambes nues) (RES304) · cueillir le jasmin dans le noir, avant le soleil, pour l'essence des bains (objet : fleurs de jasmin ; image : des draps blancs de fleurs sur le sable) (RES342) · détacher de la paroi les cubes de pyrite au ciseau d'os et les polir au sable en miroirs (objet : miroirs de pyrite ; image : la lumière qui court de miroir en miroir) (RES060) · battre au bâton les branches gelées d'argousier au-dessus de peaux étendues (objet : baies d'argousier ; image : les fourrés orange battus, les peaux couvertes de baies) (RES027) · cueillir la nuit, sur les troncs, les coléoptères aux élytres de métal vert pour la marqueterie (objet : élytres ; image : les troncs luisants d'insectes du pied à la cime) (RES014) · gauler les oliviers penchés au bord de l'île au-dessus de bâches tendues dans le vide (objet : olives ; image : les bâches pendues sous l'île) (RES010) · fermer entre deux îlots le labyrinthe de filets de la madrague et lever la chambre à la main (objet : thons ; image : la chambre qui bouillonne entre les barques) (RES206) · verser du sel dans les trous de la vase à marée basse et cueillir les couteaux qui sortent (objet : couteaux, coquillages ; image : la vase hérissée de coquilles dressées) (RES030) · casser au marteau les coquilles de murex et en tirer la glande qui devient pourpre au soleil (objet : pourpre ; image : les monticules de coquilles brisées sous la falaise) (RES229) · fondre dans des chaudrons de cuivre la graisse des queues de mouton (objet : suif ; image : les fumées grasses au-dessus des campements) (RES045) · détacher en dalles un banc de pierre fine et le tailler en pierres à aiguiser (objet : pierres à aiguiser ; image : les pierres qui trempent en rangs dans les bassins) (RES308) · poser des pièges de pierre aux renards dans les salles effondrées (objet : fourrures de renard ; image : les pistes de renard d'une salle à l'autre) (RES210) · sonder la tourbière à la perche et lever à la bêche les mottes de fer des marais (objet : minerai de fer ; image : les fosses rouillées et les fourneaux d'argile sous les épicéas) (RES067).

- Relus contre les tableaux de familles_A, B et C et contre conteur_A.md et conteur_C.md : aucun objet, geste ni image en commun. RES076 a quitté les cages de bambou (C RES349 empile des cages de grillons) pour des manches de gaze. Les renards de RES210 sont restés chez D (C les a laissés : « ni renard pris au piège »).
- Récipients : un seul nommé, le chaudron de RES045, où fond le suif. Un seul produit tinctorial, la pourpre de RES229. Premiers mots des noms : tous différents (Gluaux, Lucioles, Khat, Gués, Jasmins, Miroirs, Argousaie, Élytres, Oliviers, Madrague, Couteaux, Murex, Chaudrons, Affûtoirs, Renardières, Ferrières) ; RES308, RES210 et RES067 ont été renommés : « Pierres » et « Pièges » ouvrent déjà des noms de cartes de A, et « Fosses » un nom de carte de B ; « rognons » est laissé aux silex de A (RES286).
- Chutes : aucune Ressource sur « nom, compte chiffré, puis anomalie de cette année ». Les chutes tournent : un détail qui cloche (Nubifera, Tlachialoyan, Chak-Sayab, Caño Salado, Almenara-Alta), une habitude des bêtes (Iglunnguit, Rupes Purpurea, Isla Atunera), une marque qui reste (Togiyama, oKhuni), une règle de métier (Amba Tsehay, Chatsargan-Nuur, Boscoverde, Campi Grassi), une croyance (Chameli-Bagh, Kurehama).

## Notes pour le critique

- **Garde du héros à 7 pôles dans le lot** (plafond 6) : A 1 (DON009 +), B 2 (ANT143 +, ANT180 −), C 2 (ANT222 −, CIT022 +), D 2 (ANT104 +, ASS028 +). Mes deux pôles sont déclarés dans familles_D depuis 06 h 55. Quand j'ai lu familles_C vers 07 h 04, C n'avait que CIT022 + en garde du héros ; l'ANT222 − apparaît dans sa version de 08 h 56. Je ne l'ai pas retiré, car il faudrait réécrire 5 cartes d'un pôle déjà équilibré. Si le critique tranche contre D, c'est l'Éveil d'ANT104 + qui cède le plus facilement (les bêtes y sont déjà 4).
- **Recoupement avec B, réglé par D** : B (ASS050 −, DON107 −) signalait un arbitrage sur le soin des alliés du Sommeil et le mana de la Pourriture. B les avait écrits le premier (06 h 49), donc D a cédé : le Sommeil d'ANT104 est en bêtes (6 cartes, soin des alliés 4), la Pourriture d'ASS154 est construite sur la défausse (mana 2). Il reste un recoupement : le crochet `hesite`, sur 3 cartes de mon Sommeil. Il n'y a donc plus rien à arbitrer de ce côté.
- **Cordelettes nouées** : C (ASS095, le khipukamayuq) et A (ANT151) en ont déjà. Mon relevé de Yuraq-Machay (ANT075) se fait donc avec des galets posés dans des niches, et non avec un cordon. C'est le seul compte faux d'un de D : huit gardiens, neuf galets.
- **Nombres précis** : 3 récits de zone sur 12 en portent un (ANT075 huit et neuf, ANT104 douze, ASS154 sept ; « onze » laissé à B, DON089). Ailleurs : « mille » (ASS154, `pal` et nom de carte), « trois clés » (ASS144, `pal`), « trois colibris » (ANT115) et « trois jours » (DON121) dans les ambiances. « Neuf » d'ASS154 est l'adjectif (le tronc neuf).
- **Vol de vie** (ANT115 +) : sur les 7 cartes, avec 4 dégâts ciblés au plus ; le budget compte la moitié des dégâts, `si` compris. Le soin ennemi comme prix freine le pôle.
- **Crochet `bete` sur 5 cartes** (ANT075 +) : c'est le seul pôle de D construit sur une condition, et le seul crochet de D sur 5 cartes. Les 4 bêtes du pôle et les 3 du pôle − le rendent jouable.
- **Dégâts ciblés** : 4 cartes au plus par pôle, 5 en Donjon (DON121 − seulement). Les deux pôles d'une même zone ne partagent plus les gros coups : DON121 + et les deux pôles de DON078 sont à 4. Ma Ruine (DON078 −) ne reprend donc pas la famille principale de la Ruine de C (DON015 −).
- **Appoints réflexes** : après une première validation, la garde du héros (12 pôles), la pioche (10), l'affaiblissement (6) et le mana (5) dépassaient 3 pôles. Une trentaine de cartes ont été reprises (garde et pioche remplacées par riposte, soin, ou dégâts plus gros sur la même carte). Le validateur compte maintenant 3 pôles au plus pour chaque famille, hors bêtes des Antres et dégâts ciblés.
- **Noms** : aucun nom de fiche ni de carte ne figure dans noms-pris.txt ni dans les conteurs des lots 1 à 6 (vérifié au script). Le validateur garde un avertissement : « Banc », le premier mot du Banc des Jours de Sak-Tz'ib (ASS058), ouvre aussi une forme +7 de C (« Le Banc des décurions », ASS162). C'est un nom de carte, pas de zone, et je l'ai laissé.
- **Institutions** : le Collège des Eaux, le divan, les gardiens des jours, l'imbizo. C écarte expressément « divan » et « imbizo » de ses propres textes : il n'y a pas de recoupement. Le voïvode prévu pour Belolëd n'a pas servi.

---

## Les Hampes de Rumi-Tika (ANT115 · Antre · Haute montagne · Pierre · inca)

```json
{
 "fiche": "ANT115",
 "nom": "Les Hampes de Rumi-Tika",
 "recit": "Remèdes de Sisa Ch'aska, guérisseuse du col de Rumi-Tika. Pour la toux du froid : une cuillère du nectar des hampes, cueilli quand les colibris dorment. Pour la plaie qui suppure : l'épine noire d'une hampe morte, chauffée, posée une nuit. Pour l'enfant qui ne parle pas : rien. Ne jamais cueillir sur une hampe qui porte des oiseaux pris dans ses épines ; ceux-là ne sont pas morts de froid. Une hampe fleurit une fois dans la vie d'un homme, puis sèche debout. Celle du col a fleuri l'an dernier. Elle fleurit encore.",
 "pal": [
  "Les hampes mortes hérissent la pente, raides et brunes ; à chaque épine pend un oiseau sec, et les lamas qui s'y frottent ne se relèvent pas.",
  "Les hampes sèchent debout ; les premiers colibris restent pris aux épines, et les bergers mènent leurs lamas loin du col, la bouche couverte.",
  "Puna d'altitude sous un col de pierre : touffes d'ichu, lamas, terrasses abandonnées, et quelques hampes géantes dressées comme des colonnes.",
  "Les hampes se couvrent de fleurs vert pâle jusqu'à la pointe ; les colibris s'y battent par centaines et le nectar coule sur la pierre.",
  "Toute la pente fleurit à la fois ; le nectar ruisselle en rigoles collantes, les colibris ne se posent plus, et les lamas lèchent la roche jusqu'au sang."
 ],
 "pm": "Poison",
 "pp": "Nectar"
}
```

### Pôle − Poison

Progression : le crapaud sous la hampe, la mygale, le condor pris aux épines, la hampe morte, le chat des pierres, les mygales en grappe, puis la pente qui garde tout. Style : chaque carte pose une bête venimeuse ; le venin couve (brûlure) et ce qui brûle déjà se fait frapper ou affaiblir. Prix : les épines piquent la main (PV), sur 6 cartes.

```json
[
{"id": "ANT115-moins-1", "zone": "ANT115", "pole": "-", "palier": 1, "nom": "Le crapaud des épines", "cout": 1, "cible": 0, "effet": "Un crapaud des épines sort de sous une hampe morte : 8 PV, frappe 2. Le héros gagne 4 de garde.", "ops": [["invoque", "Crapaud des épines", 8, 2], ["garde", "heros", 4]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Garde"], "ambiance": "Sisa Ch'aska ramasse les crapauds sous les hampes mortes avec un bâton fendu, jamais à la main.", "budget": "10,2 (cible 10, écart +2 % ; vérifié au script)"},
{"id": "ANT115-moins-2", "zone": "ANT115", "pole": "-", "palier": 2, "nom": "La mygale de la hampe", "cout": 1, "cible": 1, "effet": "Une mygale descend de la hampe : 10 PV, frappe 2. La cible subit 2 dégâts au début de ses 2 prochains tours. Le héros perd 1 PV.", "ops": [["invoque", "Mygale de la hampe", 10, 2], ["brulure", "cible", 2, 2], ["prixPV", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "La mygale de Rumi-Tika tisse entre les épines un voile si fin que les colibris le traversent sans le voir.", "budget": "11 (cible 12,5, écart -12 % ; vérifié au script)"},
{"id": "ANT115-moins-3", "zone": "ANT115", "pole": "-", "palier": 3, "nom": "Le condor pris aux épines", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : elle perd 2 d'attaque. Un condor dégagé des épines se joint à vous : 14 PV, frappe 3. Le héros perd 1 PV.", "ops": [["si", "brule", [["affaiblit", "cible", 2]]], ["invoque", "Condor des épines", 14, 3], ["prixPV", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Affaiblissement", "Invocation", "Prix"], "ambiance": "Le condor qu'on dégage d'une hampe morte ne s'envole pas ; il marche derrière celui qui l'a dégagé.", "budget": "13,5 (cible 15, écart -10 % ; vérifié au script)"},
{"id": "ANT115-moins-4", "zone": "ANT115", "pole": "-", "palier": 4, "nom": "La hampe morte", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle perd 2 d'attaque. Puis elle subit 8 dégâts, et 4 au début de ses 4 prochains tours. Le héros perd 2 PV.", "ops": [["si", "brule", [["affaiblit", "cible", 2]]], ["deg", "cible", 8], ["brulure", "cible", 4, 4], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Affaiblissement", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Une hampe morte reste debout des années sur la pente de Rumi-Tika ; ses épines noircissent sans tomber.", "budget": "25 (cible 28, écart -11 % ; vérifié au script)"},
{"id": "ANT115-moins-5", "zone": "ANT115", "pole": "-", "palier": 5, "nom": "Le chat des pierres", "cout": 2, "cible": 1, "effet": "Un chat des pierres sort des terrasses : 22 PV, frappe 7. La cible perd sa garde. Si elle brûle déjà : elle subit 12 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Chat des pierres", 22, 7], ["briseGarde", "cible"], ["si", "brule", [["deg", "cible", 12]]], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Perce-garde", "Condition", "Dégâts", "Prix"], "ambiance": "Le chat des terrasses abandonnées chasse entre les hampes mortes, et les épines ne le piquent jamais.", "budget": "28,5 (cible 32, écart -11 % ; vérifié au script)"},
{"id": "ANT115-moins-6", "zone": "ANT115", "pole": "-", "palier": 6, "nom": "Les mygales en grappe", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle subit 8 dégâts. Puis une grappe de mygales tombe d'une hampe : 18 PV, frappe 6. Tous les ennemis subissent 2 dégâts au début de leurs 3 prochains tours. Le héros perd 3 PV.", "ops": [["si", "brule", [["deg", "cible", 8]]], ["invoque", "Mygales en grappe", 18, 6], ["brulure", "tous", 2, 3], ["prixPV", 3]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Dégâts", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "Les bergers de Rumi-Tika secouent leurs ponchos le soir ; il en tombe des mygales, chaque soir quelques-unes.", "budget": "32,2 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ANT115-moins-7", "zone": "ANT115", "pole": "-", "palier": 7, "nom": "La Pente qui garde", "cout": 3, "cible": 1, "effet": "La pente garde ce qu'elle prend. Un condor pendu (24 PV, frappe 6). La cible subit 11 dégâts ; tous brûlent, 3 par tour pendant 3 tours. Héros −4 PV. Pose Sang. Si Racine (consommée) : crapauds (14 PV, frappe 4) ; la cible brûle, 4 pendant 4 tours.", "ops": [["invoque", "Condor pendu", 24, 6], ["deg", "cible", 11], ["brulure", "tous", 3, 3], ["prixPV", 4], ["pose", "Sang"], ["reveil", "Racine", true, [["invoque", "Crapauds de la hampe", 14, 4], ["brulure", "cible", 4, 4]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Invocation", "Dégâts", "Dégâts dans le temps", "Prix", "Pose Sang", "Réveil Racine"], "ambiance": "Sur la pente morte, Sisa Ch'aska ne cueille plus rien ; elle compte les oiseaux pendus, et le compte monte.", "budget": "47,8 (+29 si Racine, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Nectar

Progression : la première goutte, le colibri qui fond sur la cible, le colibri géant, le nectar qui coule, la nuée, la fleur qui boit, puis la hampe ouverte. Style : chaque carte frappe et le héros boit la moitié de ce qu'il frappe (vol de vie sur les 7 cartes) ; contre une cible qui vole, les colibris frappent de plus. Prix : le nectar nourrit aussi l'ennemi (soin ennemi), sur 6 cartes.

```json
[
{"id": "ANT115-plus-1", "zone": "ANT115", "pole": "+", "palier": 1, "nom": "La première goutte", "cout": 1, "cible": 1, "effet": "Un colibri de la hampe défend sa fleur : 4 PV, frappe 2. Vol de vie : la cible subit 5 dégâts, et le héros se soigne de la moitié. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Colibri de la hampe", 4, 2], ["volVie"], ["deg", "cible", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Vol de vie", "Dégâts", "Prix"], "ambiance": "La première goutte de nectar perle au bout de la hampe, et trois colibris se la disputent avant qu'elle tombe.", "budget": "10,3 (cible 10, écart +3 % ; vérifié au script)"},
{"id": "ANT115-plus-2", "zone": "ANT115", "pole": "+", "palier": 2, "nom": "Le colibri qui fond", "cout": 1, "cible": 1, "effet": "Vol de vie. Si la cible vole : elle subit 4 dégâts. Puis elle subit 6 dégâts. Le héros se soigne de la moitié des dégâts.", "ops": [["volVie"], ["si", "vol", [["deg", "cible", 4]]], ["deg", "cible", 6]], "tags": ["Antre", "Pierre", "Pôle +", "Vol de vie", "Condition", "Dégâts"], "ambiance": "Le colibri de Rumi-Tika attaque tout ce qui vole près de sa fleur, condor compris, au bec, dans l'œil.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT115-plus-3", "zone": "ANT115", "pole": "+", "palier": 3, "nom": "Le colibri géant", "cout": 1, "cible": 0, "effet": "Un colibri géant se poste sur la hampe : 8 PV, frappe 3. Vol de vie : 3 coups de 2 dégâts au hasard, et le héros se soigne de la moitié. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Colibri géant", 8, 3], ["volVie"], ["deg", "hasard", 2, 3], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Vol de vie", "Dégâts", "Prix"], "ambiance": "Le colibri géant des hautes pentes bat des ailes si lentement qu'on les compte ; il boit une fleur entière.", "budget": "15,3 (cible 15, écart +2 % ; vérifié au script)"},
{"id": "ANT115-plus-4", "zone": "ANT115", "pole": "+", "palier": 4, "nom": "Le nectar qui coule", "cout": 2, "cible": 1, "effet": "Vol de vie : la cible subit 12 dégâts. Si elle vole : 6 de plus. Le héros se soigne de la moitié des dégâts et gagne 6 de garde. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["deg", "cible", 12], ["si", "vol", [["deg", "cible", 6]]], ["garde", "heros", 6], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Vol de vie", "Dégâts", "Condition", "Garde", "Prix"], "ambiance": "Le nectar des hampes coule sur la pierre en fils épais ; les lamas le lèchent, les renards aussi.", "budget": "25,1 (cible 28, écart -10 % ; vérifié au script)"},
{"id": "ANT115-plus-5", "zone": "ANT115", "pole": "+", "palier": 5, "nom": "La nuée de colibris", "cout": 2, "cible": 0, "effet": "Une nuée de colibris tourne autour de vous : 16 PV, frappe 5. Vol de vie : tous les ennemis subissent 5 dégâts, et le héros se soigne de la moitié. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Nuée de colibris", 16, 5], ["volVie"], ["deg", "tous", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Vol de vie", "Dégâts", "Prix"], "ambiance": "Quand les hampes de Rumi-Tika fleurissent, les colibris arrivent de vallées où personne n'en a jamais vu.", "budget": "29,8 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ANT115-plus-6", "zone": "ANT115", "pole": "+", "palier": 6, "nom": "La fleur qui boit", "cout": 2, "cible": 1, "effet": "Vol de vie : tous les ennemis subissent 6 dégâts ; le héros se soigne de la moitié, puis de 6, et gagne 10 de garde. Si la cible vole : elle hésite. Chaque ennemi se soigne de 1.", "ops": [["volVie"], ["deg", "tous", 6], ["soin", "heros", 6], ["garde", "heros", 10], ["si", "vol", [["hesite", "cible"]]], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Vol de vie", "Dégâts", "Soin", "Garde", "Condition", "Contrôle", "Prix"], "ambiance": "Sisa Ch'aska a vu une fleur de hampe se refermer sur un colibri ; le colibri buvait encore.", "budget": "34,1 (cible 36, écart -5 % ; vérifié au script)"},
{"id": "ANT115-plus-7", "zone": "ANT115", "pole": "+", "palier": 7, "nom": "La Hampe ouverte", "cout": 3, "cible": 1, "effet": "La fleur boit le combat. Un colibri-lance (16 PV, frappe 6). Vol de vie : la cible subit 15 dégâts, tous les ennemis 4. Chaque ennemi se soigne de 2. Pose Racine. Si Braise (consommée) : tous brûlent, 3 par tour pendant 3 tours ; héros soigné de 10.", "ops": [["invoque", "Colibri-lance", 16, 6], ["volVie"], ["deg", "cible", 15], ["deg", "tous", 4], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["brulure", "tous", 3, 3], ["soin", "heros", 10]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Invocation", "Vol de vie", "Dégâts", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "La hampe du col fleurit pour la seconde année ; les colibris qui la boivent ne quittent plus le col.", "budget": "48,3 (+29,8 si Braise, soit +62 % ; vérifié au script)"}
]
```

---

## Kirî-Ešnun, les Jardins des Coupeuses (ANT074 · Antre · Jungle · Sève · mésopotamienne)

```json
{
 "fiche": "ANT074",
 "nom": "Kirî-Ešnun, les Jardins des Coupeuses",
 "recit": "Ce que Nūr-Šamaš laisse à Ibni-Adad, qui garde après lui les gradins de Kirî-Ešnun. À l'aube, ouvre la vanne du haut : les fourmis attendent l'eau pour couper. Ne balaie pas les feuilles qu'elles taillent en coins, ne les compte pas. Quand la colonne noire descend de la forêt, monte sur le toit du temple et laisse-la passer ; elle ne prend que ce qui bouge. Les jardins sous les gradins sont à elles, pas à nous. J'y suis descendu une fois, par le puits. Les allées sont droites, et plus larges que mes épaules.",
 "pal": [
  "La colonne noire couvre les gradins d'un bord à l'autre ; les canaux grouillent de fourmis, et les arbres dépouillés montrent leurs nervures blanches.",
  "Les raids descendent de la forêt chaque soir ; les vannes sont arrachées, les feuilles en coins jonchent les marches et les oiseaux suivent la colonne.",
  "Gradins de brique crue sous la jungle : canaux, vannes de bois, un temple à degrés pris dans les lianes, et des fourmis qui portent des feuilles.",
  "Les fourmis coupent en rangs ; les canaux sont curés, les feuilles taillées en coins s'empilent en tas réguliers et la jungle recule d'un pas chaque nuit.",
  "Plus une feuille ne pend au hasard : la jungle est taillée en gradins verts parfaitement nets, et sous chaque marche on entend les jardins respirer."
 ],
 "pm": "Chaos",
 "pp": "Ordre"
}
```

### Pôle − Chaos

Progression : la soldate, le raid du soir, les oiseaux qui suivent la colonne, la vanne arrachée, la colonne noire, les nervures blanches, puis la marée de légionnaires. Style : la colonne frappe au hasard et use l'attaque de l'ennemi ; elle redouble contre qui piétine ou charge. Prix : la colonne dépense ses propres bêtes (la plus faible perd des PV), sur 6 cartes.

```json
[
{"id": "ANT074-moins-1", "zone": "ANT074", "pole": "-", "palier": 1, "nom": "La soldate de la colonne", "cout": 1, "cible": 1, "effet": "Une soldate de la colonne noire : 6 PV, frappe 3. La cible subit 3 dégâts. La bête alliée la plus faible perd 1 PV.", "ops": [["invoque", "Soldate de la colonne", 6, 3], ["deg", "cible", 3], ["prixBete", 1]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Nūr-Šamaš dit que la colonne de Kirî-Ešnun n'a pas de tête ; elle n'a que des bords.", "budget": "9,5 (cible 10, écart -5 % ; vérifié au script)"},
{"id": "ANT074-moins-2", "zone": "ANT074", "pole": "-", "palier": 2, "nom": "Le raid du soir", "cout": 1, "cible": 1, "effet": "4 coups de 2 dégâts au hasard. La cible perd 1 d'attaque. Si elle piétine ou charge : 2 coups de 2 de plus.", "ops": [["deg", "hasard", 2, 4], ["affaiblit", "cible", 1], ["si", "pietine", [["deg", "hasard", 2, 2]]]], "tags": ["Antre", "Sève", "Pôle −", "Dégâts", "Affaiblissement", "Condition"], "ambiance": "Le raid du soir passe sur les gradins de Kirî-Ešnun en emportant tout ce qui n'a pas grimpé au toit.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT074-moins-3", "zone": "ANT074", "pole": "-", "palier": 3, "nom": "Les oiseaux suiveurs", "cout": 1, "cible": 1, "effet": "Les oiseaux qui suivent la colonne fondent avec elle : 12 PV, frappe 4. La cible subit 4 dégâts. La bête alliée la plus faible perd 2 PV.", "ops": [["invoque", "Oiseaux suiveurs", 12, 4], ["deg", "cible", 4], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Les oiseaux suiveurs mangent ce que la colonne fait fuir, et ils ne se posent jamais devant elle.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ANT074-moins-4", "zone": "ANT074", "pole": "-", "palier": 4, "nom": "La vanne arrachée", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 1 d'attaque. 5 coups de 3 dégâts au hasard. Si la cible piétine ou charge : elle perd 2 d'attaque. Le héros gagne 6 de garde. La bête alliée la plus faible perd 2 PV.", "ops": [["affaiblit", "tous", 1], ["deg", "hasard", 3, 5], ["si", "pietine", [["affaiblit", "cible", 2]]], ["garde", "heros", 6], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Affaiblissement", "Dégâts", "Condition", "Garde", "Prix"], "ambiance": "La vanne du haut a été retrouvée au pied des gradins, rongée au bois vif, les clous posés à côté.", "budget": "27,4 (cible 28, écart -2 % ; vérifié au script)"},
{"id": "ANT074-moins-5", "zone": "ANT074", "pole": "-", "palier": 5, "nom": "La colonne noire", "cout": 2, "cible": 1, "effet": "La colonne noire descend de la forêt : 20 PV, frappe 6. Tous les ennemis subissent 4 dégâts. Si la cible piétine ou charge : elle subit 8 dégâts. La bête alliée la plus faible perd 3 PV.", "ops": [["invoque", "Colonne de légionnaires", 20, 6], ["deg", "tous", 4], ["si", "pietine", [["deg", "cible", 8]]], ["prixBete", 3]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Dégâts", "Condition", "Prix"], "ambiance": "Ibni-Adad est monté sur le toit du temple ; la colonne a passé dessous toute la nuit.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ANT074-moins-6", "zone": "ANT074", "pole": "-", "palier": 6, "nom": "Les nervures blanches", "cout": 2, "cible": 1, "effet": "La cible perd 3 d'attaque et subit 10 dégâts. 4 coups de 3 dégâts au hasard. Tous les ennemis subissent 3 dégâts. La bête alliée la plus faible perd 3 PV.", "ops": [["affaiblit", "cible", 3], ["deg", "cible", 10], ["deg", "hasard", 3, 4], ["deg", "tous", 3], ["prixBete", 3]], "tags": ["Antre", "Sève", "Pôle −", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Après le raid, les arbres des gradins gardent leurs feuilles, mais vides : il n'en reste que les nervures.", "budget": "34,6 (cible 36, écart -4 % ; vérifié au script)"},
{"id": "ANT074-moins-7", "zone": "ANT074", "pole": "-", "palier": 7, "nom": "La Marée de légionnaires", "cout": 3, "cible": 1, "effet": "La forêt marche sur vous. Une marée de légionnaires (30 PV, frappe 8). 6 coups de 3 au hasard ; la cible perd 2 d'attaque. Votre bête la plus faible perd 5 PV. Pose Racine. Si Sang (consommé) : 5 coups de 4 au hasard, héros soigné de 9.", "ops": [["invoque", "Marée de légionnaires", 30, 8], ["deg", "hasard", 3, 6], ["affaiblit", "cible", 2], ["prixBete", 5], ["pose", "Racine"], ["reveil", "Sang", true, [["deg", "hasard", 4, 5], ["soin", "heros", 9]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Invocation", "Dégâts", "Affaiblissement", "Prix", "Pose Racine", "Réveil Sang"], "ambiance": "Quand la marée passe, Kirî-Ešnun se tait d'un coup : même les grenouilles des canaux montent aux arbres.", "budget": "46 (+29 si Sang, soit +63 % ; vérifié au script)"}
]
```

### Pôle + Ordre

Progression : la feuille en coin, la vanne du haut, les jardinières, les rangs de coupeuses, la soldate à grosse tête, l'aigre des jardins, puis les jardins sous les gradins. Style : chaque carte pose un aigre qui ronge tour après tour ; à la deuxième carte du tour, la colonne en ajoute. Prix : une carte part au jardin (défausse), sur 6 cartes.

```json
[
{"id": "ANT074-plus-1", "zone": "ANT074", "pole": "+", "palier": 1, "nom": "La feuille en coin", "cout": 1, "cible": 1, "effet": "Une coupeuse taille sa feuille : 6 PV, frappe 2. La cible subit 2 dégâts au début de ses 3 prochains tours. Défaussez 1 carte au hasard.", "ops": [["invoque", "Coupeuse", 6, 2], ["brulure", "cible", 2, 3], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "Les coupeuses de Kirî-Ešnun taillent chaque feuille en coin, toujours le même, et le portent tête haute.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ANT074-plus-2", "zone": "ANT074", "pole": "+", "palier": 2, "nom": "La vanne du haut", "cout": 1, "cible": 1, "effet": "La cible subit 3 dégâts au début de ses 3 prochains tours. Si vous avez déjà joué une autre carte ce tour : 2 de plus pendant 2 tours. Le héros gagne 3 de garde.", "ops": [["brulure", "cible", 3, 3], ["si", "cartesJouees", [["brulure", "cible", 2, 2]]], ["garde", "heros", 3]], "tags": ["Antre", "Sève", "Pôle +", "Dégâts dans le temps", "Condition", "Garde"], "ambiance": "À l'aube, Ibni-Adad ouvre la vanne du haut ; les fourmis attendent l'eau en rangs, sans toucher une feuille.", "budget": "13,4 (cible 12,5, écart +7 % ; vérifié au script)"},
{"id": "ANT074-plus-3", "zone": "ANT074", "pole": "+", "palier": 3, "nom": "Les jardinières", "cout": 1, "cible": 1, "effet": "Des jardinières montent du sous-sol : 10 PV, frappe 3. La cible subit 3 dégâts au début de ses 3 prochains tours. Défaussez 1 carte au hasard.", "ops": [["invoque", "Jardinières", 10, 3], ["brulure", "cible", 3, 3], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "Les jardinières ne sortent jamais au jour ; elles sentent l'aigre, et l'herbe meurt où elles passent.", "budget": "15,5 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "ANT074-plus-4", "zone": "ANT074", "pole": "+", "palier": 4, "nom": "Les rangs de coupeuses", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 2 dégâts au début de leurs 3 prochains tours. Si vous avez déjà joué une autre carte ce tour : la cible subit 3 dégâts pendant 3 tours. La cible subit 6 dégâts. Le héros gagne 8 de garde. Défaussez 1 carte au hasard.", "ops": [["brulure", "tous", 2, 3], ["si", "cartesJouees", [["brulure", "cible", 3, 3]]], ["deg", "cible", 6], ["garde", "heros", 8], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Dégâts dans le temps", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Les coupeuses avancent en rangs droits à travers les gradins, et la jungle recule d'un pas chaque nuit.", "budget": "27,1 (cible 28, écart -3 % ; vérifié au script)"},
{"id": "ANT074-plus-5", "zone": "ANT074", "pole": "+", "palier": 5, "nom": "La soldate à grosse tête", "cout": 2, "cible": 1, "effet": "Une soldate à grosse tête garde le puits : 18 PV, frappe 6. La cible subit 4 dégâts au début de ses 4 prochains tours. Défaussez 1 carte au hasard.", "ops": [["invoque", "Soldate à grosse tête", 18, 6], ["brulure", "cible", 4, 4], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "La soldate du puits a la tête plus large que le corps, et elle bouche le puits avec.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ANT074-plus-6", "zone": "ANT074", "pole": "+", "palier": 6, "nom": "L'aigre des jardins", "cout": 2, "cible": 1, "effet": "La cible subit 5 dégâts au début de ses 4 prochains tours, et 8 dégâts tout de suite. Si vous avez déjà joué une autre carte ce tour : 8 de plus. Le héros gagne 8 de garde. Défaussez 1 carte au hasard.", "ops": [["brulure", "cible", 5, 4], ["deg", "cible", 8], ["si", "cartesJouees", [["deg", "cible", 8]]], ["garde", "heros", 8], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Dégâts dans le temps", "Dégâts", "Condition", "Garde", "Prix"], "ambiance": "L'aigre qui monte des jardins sous les gradins pique les yeux de Nūr-Šamaš depuis qu'il garde les vannes.", "budget": "35,4 (cible 36, écart -2 % ; vérifié au script)"},
{"id": "ANT074-plus-7", "zone": "ANT074", "pole": "+", "palier": 7, "nom": "Les Jardins sous les gradins", "cout": 3, "cible": 1, "effet": "Chaque marche a ses jardinières. La fourmilière du temple (26 PV, frappe 5). Tous les ennemis brûlent, 3 par tour pendant 3 tours. Héros +12 de garde. Défaussez 1 carte au hasard. Pose Sceau. Si Racine (consommée) : la cible brûle, 6 pendant 5 tours.", "ops": [["invoque", "Fourmilière du temple", 26, 5], ["brulure", "tous", 3, 3], ["garde", "heros", 12], ["prixDefausse", 1], ["pose", "Sceau"], ["reveil", "Racine", true, [["brulure", "cible", 6, 5]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Invocation", "Dégâts dans le temps", "Garde", "Prix", "Pose Sceau", "Réveil Racine"], "ambiance": "Sous les gradins, les allées sont droites et larges ; Nūr-Šamaš n'y est jamais redescendu.", "budget": "46,9 (+30 si Racine, soit +64 % ; vérifié au script)"}
]
```

---

## Les Concrétions de Yuraq-Machay (ANT075 · Antre · Cavernes cristallines · Pierre · inca)

```json
{
 "fiche": "ANT075",
 "nom": "Les Concrétions de Yuraq-Machay",
 "recit": "Relevé de Yuraq-Machay par Amaru Quillca, gardien des niches. Niche du haut : la grande salle ; la concrétion a gagné un pas. Niche de gauche : les salles basses, où la roche devient légère comme de l'os ; on y enfonce le doigt. Niche de droite : les bêtes. Les viscaches qui dorment contre la paroi y restent ; la pierre les prend par les pattes, et elles respirent encore. Niche du bas : les gens. Huit gardiens sont entrés pour le relevé. La niche du bas tient neuf galets, et Amaru les a tous posés.",
 "pal": [
  "La grotte n'est plus qu'un treillis d'os blanc ; les parois sonnent creux sous le doigt, et les viscaches figées se brisent quand une goutte tombe.",
  "Les salles basses blanchissent et s'allègent ; la roche se creuse en alvéoles fines, et l'écho y revient avec un léger retard.",
  "Cavernes de calcite et de cristaux sous une montagne andine : galeries humides, bassins, viscaches, et des niches à galets creusées à l'entrée.",
  "Des concrétions en branches poussent des parois vers les bassins ; les bêtes qui dorment au fond s'éveillent couvertes d'une croûte fine et blanche.",
  "Le corail de pierre a rempli les galeries : branches, éventails, coupes, tous tournés vers ce qui respire, et dedans les bêtes vivent encore, lentes et énormes."
 ],
 "pm": "Os",
 "pp": "Corail"
}
```

### Pôle − Os

Progression : la paroi creuse, l'os de la montagne, le doigt dans la roche, la viscache figée, les alvéoles, l'écho en retard, puis le treillis blanc. Style : des cartes fortes qui cassent après usage (exil sur 4 cartes), et qui fêlent la cible ; contre un ennemi resté seul, elles frappent ou figent de plus. Prix : l'exil et les PV, sur 6 cartes.

```json
[
{"id": "ANT075-moins-1", "zone": "ANT075", "pole": "-", "palier": 1, "nom": "La paroi creuse", "cout": 1, "cible": 1, "effet": "Une viscache blanche sort d'une alvéole : 6 PV, frappe 2. La cible est marquée : +1 dégât à chaque coup.", "ops": [["invoque", "Viscache blanche", 6, 2], ["vulnerable", "cible", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Marque"], "ambiance": "Amaru Quillca frappe la paroi du bout de son bâton ; dans les salles basses, elle répond comme un tambour.", "budget": "9 (cible 10, écart -10 % ; vérifié au script)"},
{"id": "ANT075-moins-2", "zone": "ANT075", "pole": "-", "palier": 2, "nom": "L'os de la montagne", "cout": 1, "cible": 1, "effet": "La cible subit 9 dégâts. Si un seul ennemi reste : 6 de plus. Gagnez 1 mana de Pierre. Le héros perd 2 PV.", "ops": [["deg", "cible", 9], ["si", "seul", [["deg", "cible", 6]]], ["mana", "Pierre", 1], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Dégâts", "Condition", "Mana", "Prix"], "ambiance": "La roche des salles basses de Yuraq-Machay pèse moins qu'une galette ; on la casse entre deux doigts.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT075-moins-3", "zone": "ANT075", "pole": "-", "palier": 3, "nom": "Le doigt dans la roche", "cout": 1, "cible": 1, "effet": "La cible perd sa garde et subit 12 dégâts. Gagnez 1 mana de Pierre. Exil.", "ops": [["briseGarde", "cible"], ["deg", "cible", 12], ["mana", "Pierre", 1], ["exil"]], "tags": ["Antre", "Pierre", "Pôle −", "Perce-garde", "Dégâts", "Mana", "Exil"], "ambiance": "Le doigt qu'on enfonce dans la paroi en ressort blanc, et il le reste jusqu'au soir.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ANT075-moins-4", "zone": "ANT075", "pole": "-", "palier": 4, "nom": "La viscache figée", "cout": 2, "cible": 1, "effet": "Une viscache de calcaire se dégage de la paroi : 20 PV, frappe 4. La cible est marquée 2. Si un seul ennemi reste : marque 2 de plus. Gagnez 1 mana de Pierre. Le héros perd 2 PV.", "ops": [["invoque", "Viscache de calcaire", 20, 4], ["vulnerable", "cible", 2], ["si", "seul", [["vulnerable", "cible", 2]]], ["mana", "Pierre", 1], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Marque", "Condition", "Mana", "Prix"], "ambiance": "La viscache figée contre la paroi respire encore ; sa fourrure est devenue pierre, poil à poil.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT075-moins-5", "zone": "ANT075", "pole": "-", "palier": 5, "nom": "Les alvéoles", "cout": 2, "cible": 1, "effet": "La cible perd sa garde et subit 20 dégâts. Si un seul ennemi reste : 6 de plus. Gagnez 2 mana de Pierre. Exil.", "ops": [["briseGarde", "cible"], ["deg", "cible", 20], ["si", "seul", [["deg", "cible", 6]]], ["mana", "Pierre", 2], ["exil"]], "tags": ["Antre", "Pierre", "Pôle −", "Perce-garde", "Dégâts", "Condition", "Mana", "Exil"], "ambiance": "Les alvéoles des salles basses sont toutes de la même taille, celle d'un pouce, et elles sont propres.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT075-moins-6", "zone": "ANT075", "pole": "-", "palier": 6, "nom": "L'écho en retard", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 8 dégâts. La cible hésite et perd 3 d'attaque. Piochez 2 cartes. Exil.", "ops": [["deg", "tous", 8], ["hesite", "cible"], ["affaiblit", "cible", 3], ["pioche", 2], ["exil"]], "tags": ["Antre", "Pierre", "Pôle −", "Dégâts", "Contrôle", "Affaiblissement", "Pioche", "Exil"], "ambiance": "Dans les salles basses, l'écho revient un peu après la voix ; Amaru dit qu'il revient de plus loin.", "budget": "36,6 (cible 36, écart +2 % ; vérifié au script)"},
{"id": "ANT075-moins-7", "zone": "ANT075", "pole": "-", "palier": 7, "nom": "Le Treillis blanc", "cout": 3, "cible": 1, "effet": "La montagne n'est qu'os. Une viscache d'os (22 PV, frappe 6). Tous les ennemis sont marqués 2 ; la cible subit 17 dégâts. Exil. Pose Abîme. Si Givre (consommé) : tous hésitent, la cible subit 12 dégâts, héros +10 de garde.", "ops": [["invoque", "Viscache d'os", 22, 6], ["vulnerable", "tous", 2], ["deg", "cible", 17], ["exil"], ["pose", "Abîme"], ["reveil", "Givre", true, [["hesite", "tous"], ["deg", "cible", 12], ["garde", "heros", 10]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Invocation", "Marque", "Dégâts", "Exil", "Pose Abîme", "Réveil Givre"], "ambiance": "Au dernier relevé, la niche des salles basses ne tenait plus que des galets blancs, légers comme de l'os.", "budget": "47,2 (+28,8 si Givre, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Corail

Progression : la croûte fine, le bassin blanc, les guácharos, les branches vers l'eau, la viscache encroûtée, les éventails de pierre, puis le corail de la montagne. Style : la concrétion pousse autour de ce qui vit ; une bête déjà en jeu donne à 5 cartes leur moitié de garde ou de soin. Prix : l'ennemi s'abrite aussi derrière la pierre (garde ennemie), sur 6 cartes.

```json
[
{"id": "ANT075-plus-1", "zone": "ANT075", "pole": "+", "palier": 1, "nom": "La croûte fine", "cout": 1, "cible": 0, "effet": "Si une bête alliée est déjà en jeu : vos alliés gagnent 4 de garde. Puis une écrevisse blanche monte du bassin : 8 PV, frappe 2.", "ops": [["si", "bete", [["garde", "allies", 4]]], ["invoque", "Écrevisse blanche", 8, 2]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Garde", "Invocation"], "ambiance": "L'écrevisse blanche du bassin porte sur la carapace une croûte qui pousse un peu chaque nuit.", "budget": "9,4 (cible 10, écart -6 % ; vérifié au script)"},
{"id": "ANT075-plus-2", "zone": "ANT075", "pole": "+", "palier": 2, "nom": "Le bassin blanc", "cout": 1, "cible": 0, "effet": "Si une bête alliée est déjà en jeu : vos alliés se soignent de 5. Vos alliés gagnent 8 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "bete", [["soin", "allies", 5]]], ["garde", "allies", 8], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Soin", "Garde", "Prix"], "ambiance": "L'eau du bassin blanc de Yuraq-Machay laisse sur la peau un voile qui durcit en séchant.", "budget": "11,4 (cible 12,5, écart -9 % ; vérifié au script)"},
{"id": "ANT075-plus-3", "zone": "ANT075", "pole": "+", "palier": 3, "nom": "Les guácharos", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 6 dégâts. Puis des guácharos descendent de la voûte : 12 PV, frappe 4. Chaque ennemi gagne 1 de garde.", "ops": [["si", "bete", [["deg", "cible", 6]]], ["invoque", "Guácharos des galeries", 12, 4], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Les guácharos crient dans le noir pour voir ; à Yuraq-Machay, les branches de pierre leur répondent.", "budget": "13 (cible 15, écart -13 % ; vérifié au script)"},
{"id": "ANT075-plus-4", "zone": "ANT075", "pole": "+", "palier": 4, "nom": "Les branches vers l'eau", "cout": 2, "cible": 1, "effet": "Vos alliés se soignent de 6. La cible subit 8 dégâts. Riposte 3. Gagnez 2 mana de Pierre. Chaque ennemi gagne 1 de garde.", "ops": [["soin", "allies", 6], ["deg", "cible", 8], ["riposte", 3], ["mana", "Pierre", 2], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Soin", "Dégâts", "Riposte", "Mana", "Prix"], "ambiance": "Les concrétions poussent toutes vers les bassins, même celles du plafond, qui se courbent pour y arriver.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ANT075-plus-5", "zone": "ANT075", "pole": "+", "palier": 5, "nom": "La viscache encroûtée", "cout": 2, "cible": 0, "effet": "Si une bête alliée est déjà en jeu : vos alliés se soignent de 6. Puis une viscache encroûtée se lève : 24 PV, frappe 5. Le héros gagne 8 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "bete", [["soin", "allies", 6]]], ["invoque", "Viscache encroûtée", 24, 5], ["garde", "heros", 8], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Soin", "Invocation", "Garde", "Prix"], "ambiance": "La viscache qui dormait au fond s'est réveillée deux fois plus lourde, et sa croûte ne craque pas.", "budget": "28,4 (cible 32, écart -11 % ; vérifié au script)"},
{"id": "ANT075-plus-6", "zone": "ANT075", "pole": "+", "palier": 6, "nom": "Les éventails de pierre", "cout": 2, "cible": 1, "effet": "La cible subit 10 dégâts. Riposte 5. Vos alliés gagnent 10 de garde. Gagnez 1 mana de Pierre. Chaque ennemi gagne 1 de garde.", "ops": [["deg", "cible", 10], ["riposte", 5], ["garde", "allies", 10], ["mana", "Pierre", 1], ["ennemiGarde", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Dégâts", "Riposte", "Garde", "Mana", "Prix"], "ambiance": "Les éventails de pierre de la grande salle s'ouvrent vers l'entrée, du côté où l'on respire.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ANT075-plus-7", "zone": "ANT075", "pole": "+", "palier": 7, "nom": "Le Corail de la montagne", "cout": 3, "cible": 1, "effet": "La pierre pousse vers vous. Si une bête est là : alliés +10 de garde, soignés de 6. Une bête-corail (30 PV, frappe 6). La cible subit 12 dégâts. Héros +6 de garde, ennemis +2. Pose Racine. Si Abîme (consommé) : alliés soignés de 12 et +10 de garde.", "ops": [["si", "bete", [["garde", "allies", 10], ["soin", "allies", 6]]], ["invoque", "Bête-corail", 30, 6], ["deg", "cible", 12], ["garde", "heros", 6], ["ennemiGarde", 2], ["pose", "Racine"], ["reveil", "Abîme", true, [["soin", "allies", 12], ["garde", "allies", 10]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Condition", "Garde", "Soin", "Invocation", "Dégâts", "Prix", "Pose Racine", "Réveil Abîme"], "ambiance": "Amaru Quillca ne pose plus de galet dans la niche des bêtes : ici, elles ne meurent plus, elles grandissent.", "budget": "47,3 (+30 si Abîme, soit +63 % ; vérifié au script)"}
]
```

---

## Inqilf-Meda, la Plaine du Rêve commun (ANT104 · Antre · Savane · Feu · éthiopienne)

```json
{
 "fiche": "ANT104",
 "nom": "Inqilf-Meda, la Plaine du Rêve commun",
 "recit": "Dereje, bouvier d'Inqilf-Meda, raconte ce qu'il a rêvé pendant les douze jours où il a dormi dans l'herbe, comme cela arrive ici à la saison des mouches. Il marchait derrière le troupeau, vers une source qu'il ne connaissait pas. Les bœufs ne broutaient pas. Ils avançaient en ligne, tête basse, et chaque fois qu'il voulait s'arrêter, l'un d'eux se retournait pour l'attendre. À la source, il s'est penché pour boire et s'est réveillé. Les autres bouviers, réveillés le même matin, ont fait le même rêve. Les bœufs avaient les sabots mouillés.",
 "pal": [
  "La plaine dort : bœufs couchés, lions couchés, bouviers couchés, tous dans l'herbe haute qui pousse par-dessus, et seules les mouches volent.",
  "Les troupeaux somnolent debout à midi ; des bouviers dorment au pied des acacias, et le bourdonnement des mouches couvre le vent.",
  "Savane d'acacias sous les hauts plateaux : bœufs à grandes cornes, huttes rondes, feux de bouviers, et des mouches qui tournent autour des yeux.",
  "Les bêtes ne se couchent plus ; la nuit, des yeux brillent par milliers dans l'herbe, et le troupeau broute en ligne jusqu'à l'aube.",
  "Plus personne ne dort : la plaine bouge la nuit comme le jour, les bœufs paissent l'herbe jusqu'à la terre, et même les lionnes gardent les yeux ouverts."
 ],
 "pm": "Sommeil",
 "pp": "Éveil"
}
```

### Pôle − Sommeil

Progression : la mouche aux yeux, le bœuf dormeur, la sieste du bouvier, la lionne assoupie, l'herbe par-dessus, le bourdonnement, puis la plaine endormie. Style : on endort la cible, et le troupeau se couche autour de vous (bêtes sur 6 cartes) ; il se refait pendant qu'elle dort (soin des alliés sur 4 cartes) ; une cible qui hésite déjà donne plus de soin ou un coup. Prix : une carte s'endort (défausse), sur 6 cartes.

```json
[
{"id": "ANT104-moins-1", "zone": "ANT104", "pole": "-", "palier": 1, "nom": "La mouche aux yeux", "cout": 1, "cible": 1, "effet": "La cible hésite. Une mouche des yeux tourne autour d'elle : 6 PV, frappe 1.", "ops": [["hesite", "cible"], ["invoque", "Mouche des yeux", 6, 1]], "tags": ["Antre", "Feu", "Pôle −", "Contrôle", "Invocation"], "ambiance": "À Inqilf-Meda, les mouches se posent au coin des yeux, toujours du même côté, et le bœuf ferme celui-là.", "budget": "9,5 (cible 10, écart -5 % ; vérifié au script)"},
{"id": "ANT104-moins-2", "zone": "ANT104", "pole": "-", "palier": 2, "nom": "Le bœuf dormeur", "cout": 1, "cible": 0, "effet": "Un bœuf dormeur se couche devant vous : 16 PV, frappe 4. Défaussez 1 carte au hasard.", "ops": [["invoque", "Bœuf dormeur", 16, 4], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Prix"], "ambiance": "Le bœuf dormeur d'Inqilf-Meda se couche en travers du chemin et ronfle ; les lions l'enjambent.", "budget": "11 (cible 12,5, écart -12 % ; vérifié au script)"},
{"id": "ANT104-moins-3", "zone": "ANT104", "pole": "-", "palier": 3, "nom": "La sieste du bouvier", "cout": 1, "cible": 1, "effet": "Si la cible hésite déjà : le héros se soigne de 4. Puis le chien du bouvier veille à sa place : 10 PV, frappe 2. Le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["si", "hesite", [["soin", "heros", 4]]], ["invoque", "Chien du bouvier", 10, 2], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Soin", "Invocation", "Prix"], "ambiance": "Dereje dort au pied d'un acacia, le bâton sur les genoux ; les bœufs se couchent en rond autour de lui.", "budget": "13 (cible 15, écart -13 % ; vérifié au script)"},
{"id": "ANT104-moins-4", "zone": "ANT104", "pole": "-", "palier": 4, "nom": "La lionne assoupie", "cout": 2, "cible": 1, "effet": "Une lionne assoupie s'étend au soleil : 22 PV, frappe 5. Si la cible hésite déjà : elle subit 8 dégâts. Vos alliés se soignent de 6. Défaussez 1 carte au hasard.", "ops": [["invoque", "Lionne assoupie", 22, 5], ["si", "hesite", [["deg", "cible", 8]]], ["soin", "allies", 6], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Condition", "Dégâts", "Soin", "Prix"], "ambiance": "La lionne assoupie ne chasse plus ; elle dort contre les bœufs, et les bœufs ne bougent pas.", "budget": "28,5 (cible 28, écart +2 % ; vérifié au script)"},
{"id": "ANT104-moins-5", "zone": "ANT104", "pole": "-", "palier": 5, "nom": "L'herbe par-dessus", "cout": 2, "cible": 1, "effet": "La cible hésite. Vos alliés se soignent de 10 et gagnent 6 de garde ; le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["hesite", "cible"], ["soin", "allies", 10], ["garde", "allies", 6], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Contrôle", "Soin", "Garde", "Prix"], "ambiance": "L'herbe d'Inqilf-Meda pousse sur les dormeurs en une nuit, et ils se réveillent dessous, reposés.", "budget": "30,2 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ANT104-moins-6", "zone": "ANT104", "pole": "-", "palier": 6, "nom": "Le bourdonnement", "cout": 2, "cible": 1, "effet": "Une nuée de mouches tourne sur la plaine : 16 PV, frappe 4. Si la cible hésite déjà : vos alliés se soignent de 8. Tous les ennemis perdent 1 d'attaque. Vos alliés se soignent de 6. Défaussez 1 carte au hasard.", "ops": [["invoque", "Nuée de mouches", 16, 4], ["si", "hesite", [["soin", "allies", 8]]], ["affaiblit", "tous", 1], ["soin", "allies", 6], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Condition", "Soin", "Affaiblissement", "Prix"], "ambiance": "Le bourdonnement des mouches couvre le vent ; quand il tombe d'un coup, toute la plaine bâille.", "budget": "32,6 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ANT104-moins-7", "zone": "ANT104", "pole": "-", "palier": 7, "nom": "La Plaine endormie", "cout": 3, "cible": 0, "effet": "Tout le troupeau se couche. Tous les ennemis hésitent. Un taureau dormeur (24 PV, frappe 4). Vos alliés se soignent de 12 et gagnent 6 de garde. Défaussez 2 cartes. Pose Givre. Si Racine (consommée) : alliés soignés de 11 et +10 de garde.", "ops": [["hesite", "tous"], ["invoque", "Taureau dormeur", 24, 4], ["soin", "allies", 12], ["garde", "allies", 6], ["prixDefausse", 2], ["pose", "Givre"], ["reveil", "Racine", true, [["soin", "allies", 11], ["garde", "allies", 10]]]], "tags": ["Antre", "Feu", "Forme ultime −7", "Contrôle", "Invocation", "Soin", "Garde", "Prix", "Pose Givre", "Réveil Racine"], "ambiance": "Les bouviers d'Inqilf-Meda rêvent tous de la même source, et le troupeau, au matin, a les sabots mouillés.", "budget": "46 (+28,5 si Racine, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Éveil

Progression : les yeux dans l'herbe, le gélada de veille, la nuit debout, le bœuf sans sommeil, la ligne de l'aube, la lionne aux yeux ouverts, puis la plaine éveillée. Style (repris par le critique) : ce qui ne dort plus regarde ; la cible est marquée sur 5 cartes, et contre une cible qui prend son élan, la veille répond (riposte ou coup). Prix : on ne dort plus (PV), sur 6 cartes.

```json
[
{"id": "ANT104-plus-1", "zone": "ANT104", "pole": "+", "palier": 1, "nom": "Les yeux dans l'herbe", "cout": 1, "cible": 1, "effet": "La cible est marquée : +1 dégât à chaque coup. Si elle prend son élan : riposte 2. La cible subit 6 dégâts. Le héros perd 1 PV.", "ops": [["vulnerable", "cible", 1], ["si", "elan", [["riposte", 2]]], ["deg", "cible", 6], ["prixPV", 1]], "tags": ["Antre", "Feu", "Pôle +", "Marque", "Condition", "Riposte", "Dégâts", "Prix"], "ambiance": "La nuit, des yeux s'allument dans l'herbe d'Inqilf-Meda, par paires, et aucun ne cligne.", "budget": "10 / 10 (+0 %) — recalculé par le critique"},
{"id": "ANT104-plus-2", "zone": "ANT104", "pole": "+", "palier": 2, "nom": "Le gélada de veille", "cout": 1, "cible": 0, "effet": "Un gélada de veille grimpe sur une termitière : 8 PV, frappe 3. Le héros gagne 6 de garde.", "ops": [["invoque", "Gélada de veille", 8, 3], ["garde", "heros", 6]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Garde"], "ambiance": "Le gélada de veille crie avant que le lion bouge ; depuis la saison sèche, il crie aussi la nuit.", "budget": "13,3 (cible 12,5, écart +6 % ; vérifié au script)"},
{"id": "ANT104-plus-3", "zone": "ANT104", "pole": "+", "palier": 3, "nom": "La nuit debout", "cout": 1, "cible": 1, "effet": "Si la cible prend son élan : elle subit 6 dégâts. Puis elle est marquée 2 et subit 2 dégâts. Riposte 2. Le héros perd 1 PV.", "ops": [["si", "elan", [["deg", "cible", 6]]], ["vulnerable", "cible", 2], ["riposte", 2], ["deg", "cible", 2], ["prixPV", 1]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Dégâts", "Marque", "Riposte", "Prix"], "ambiance": "Dereje ne se couche plus ; il passe la nuit debout dans l'enclos, la lance à la main.", "budget": "14 / 15 (-7 %) — recalculé par le critique"},
{"id": "ANT104-plus-4", "zone": "ANT104", "pole": "+", "palier": 4, "nom": "Le bœuf sans sommeil", "cout": 2, "cible": 0, "effet": "Un bœuf sans sommeil se poste devant vous : 24 PV, frappe 6. Riposte 4. Le héros perd 2 PV.", "ops": [["invoque", "Bœuf sans sommeil", 24, 6], ["riposte", 4], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Riposte", "Prix"], "ambiance": "Le bœuf sans sommeil broute la nuit, la tête haute, et l'herbe sous lui ne repousse pas.", "budget": "27 / 28 (-4 %) — recalculé par le critique"},
{"id": "ANT104-plus-5", "zone": "ANT104", "pole": "+", "palier": 5, "nom": "La ligne de l'aube", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : elle subit 8 dégâts. Puis elle est marquée 3 et subit 14 dégâts. Piochez 1 carte. Le héros perd 2 PV.", "ops": [["si", "elan", [["deg", "cible", 8]]], ["vulnerable", "cible", 3], ["deg", "cible", 14], ["pioche", 1], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Dégâts", "Marque", "Pioche", "Prix"], "ambiance": "À l'aube, le troupeau d'Inqilf-Meda est déjà en ligne face à l'est, comme s'il avait attendu.", "budget": "29 / 32 (-9 %) — recalculé par le critique"},
{"id": "ANT104-plus-6", "zone": "ANT104", "pole": "+", "palier": 6, "nom": "La lionne aux yeux ouverts", "cout": 2, "cible": 1, "effet": "Une lionne aux yeux ouverts rôde autour de vous : 22 PV, frappe 6. La cible est marquée 3 et subit 8 dégâts. Le héros perd 3 PV.", "ops": [["invoque", "Lionne aux yeux ouverts", 22, 6], ["vulnerable", "cible", 3], ["deg", "cible", 8], ["prixPV", 3]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Marque", "Dégâts", "Prix"], "ambiance": "La lionne qui ne dort plus chasse à toute heure, et le soir elle revient se coucher, les yeux ouverts.", "budget": "34 / 36 (-6 %) — recalculé par le critique"},
{"id": "ANT104-plus-7", "zone": "ANT104", "pole": "+", "palier": 7, "nom": "La Plaine éveillée", "cout": 3, "cible": 0, "effet": "Plus personne ne dort. Le héros gagne 12 de garde. Un troupeau éveillé (26 PV, frappe 6). Tous les ennemis sont marqués 1. Riposte 5. Le héros perd 3 PV. Pose Braise. Si Givre (consommé) : héros +10 de garde ; 6 dégâts à tous ; piochez 2.", "ops": [["garde", "heros", 12], ["invoque", "Troupeau éveillé", 26, 6], ["vulnerable", "tous", 1], ["riposte", 5], ["prixPV", 3], ["pose", "Braise"], ["reveil", "Givre", true, [["garde", "heros", 10], ["deg", "tous", 6], ["pioche", 2]]]], "tags": ["Antre", "Feu", "Forme ultime +7", "Garde", "Invocation", "Marque", "Riposte", "Prix", "Pose Braise", "Réveil Givre"], "ambiance": "À Inqilf-Meda, la nuit n'a plus de bruit de sommeil : rien que des mâchoires qui broutent, partout.", "budget": "45,2 sans combo ; réveil +29,2 (65 %) — recalculé par le critique"}
]
```

---

## Khet-Neheh, la Forêt aux Mâts (ANT182 · Antre · Forêt boréale · Glace · égyptienne)

```json
{
 "fiche": "ANT182",
 "nom": "Khet-Neheh, la Forêt aux Mâts",
 "recit": "Requête des bûcherons de Khet-Neheh à l'intendant des mâts. Nous avons abattu les arbres marqués. Nous demandons du grain, de l'huile et des manteaux, car l'hiver est venu avant le bateau. Nous demandons aussi qu'on nous dise pourquoi les souches ne pourrissent pas. Sous l'écorce courent des fils blancs, et les souches restent chaudes. Les élans ne passent plus que par des allées que nous n'avons pas tracées. Ipuy, notre chef d'équipe, a dormi contre une souche. Nous ne demandons rien pour lui. Il va bien. Il ne veut plus partir.",
 "pal": [
  "Les épicéas se tiennent en rangs exacts sur un tapis de fils blancs ; les élans marchent en file dans les allées, et les souches fument dans le gel.",
  "Des fils blancs courent sous l'écorce et sur la neige ; les arbres s'alignent, et les bêtes ne quittent plus les allées que la forêt leur laisse.",
  "Taïga de grands épicéas au bord d'un fleuve gelé : chantier de mâts, traîneaux de grumes, tentes de toile blanche, et des élans entre les troncs.",
  "Les souches coupées repartent en rejets désordonnés ; le vent porte les graines par nuées, et les élans traversent la forêt dans tous les sens.",
  "La forêt a défait ses rangs : jeunes arbres partout, à travers le chantier et sur le fleuve gelé, et les bêtes vont où elles veulent, en foule."
 ],
 "pm": "Tyrannie",
 "pp": "Liberté"
}
```

### Pôle − Tyrannie

Progression : le fil blanc, les rangs d'épicéas, les loups en file, la souche chaude, l'ours sous les fils, les allées tracées, puis le réseau blanc. Style : le réseau fait marcher les bêtes en file pour vous ; contre une cible qui se garde, il arrache la garde et frappe. Prix : le froid du chantier (PV), sur 6 cartes.

```json
[
{"id": "ANT182-moins-1", "zone": "ANT182", "pole": "-", "palier": 1, "nom": "Le fil blanc", "cout": 1, "cible": 0, "effet": "Un élan des allées sort d'entre les troncs : 10 PV, frappe 3.", "ops": [["invoque", "Élan des allées", 10, 3]], "tags": ["Antre", "Glace", "Pôle −", "Invocation"], "ambiance": "Le fil blanc qui court sous l'écorce de Khet-Neheh se tend quand on le touche, et il est chaud.", "budget": "9,5 (cible 10, écart -5 % ; vérifié au script)"},
{"id": "ANT182-moins-2", "zone": "ANT182", "pole": "-", "palier": 2, "nom": "Les rangs d'épicéas", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : elle la perd et subit 4 dégâts. La cible subit 6 dégâts et perd 1 d'attaque. Le héros perd 1 PV.", "ops": [["si", "cibleGarde", [["briseGarde", "cible"], ["deg", "cible", 4]]], ["deg", "cible", 6], ["affaiblit", "cible", 1], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle −", "Condition", "Perce-garde", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "Les bûcherons ont tendu un cordeau le long des rangs d'épicéas ; aucun tronc ne dépasse d'un doigt.", "budget": "11,5 (cible 12,5, écart -8 % ; vérifié au script)"},
{"id": "ANT182-moins-3", "zone": "ANT182", "pole": "-", "palier": 3, "nom": "Les loups en file", "cout": 1, "cible": 1, "effet": "Des loups passent en file par l'allée : 14 PV, frappe 4. Si la cible a de la garde : elle la perd. Le héros perd 1 PV.", "ops": [["invoque", "Loups en file", 14, 4], ["si", "cibleGarde", [["briseGarde", "cible"]]], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Condition", "Perce-garde", "Prix"], "ambiance": "Les loups de Khet-Neheh marchent l'un derrière l'autre dans l'allée, et ne s'arrêtent pas pour flairer.", "budget": "13,5 (cible 15, écart -10 % ; vérifié au script)"},
{"id": "ANT182-moins-4", "zone": "ANT182", "pole": "-", "palier": 4, "nom": "La souche chaude", "cout": 2, "cible": 0, "effet": "Un ratel sort d'une souche chaude : 20 PV, frappe 6. Riposte 5. Le héros perd 2 PV.", "ops": [["invoque", "Ratel des souches", 20, 6], ["riposte", 5], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Riposte", "Prix"], "ambiance": "Ipuy a dormi contre la souche chaude ; il dit que, de près, elle sent le pain.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ANT182-moins-5", "zone": "ANT182", "pole": "-", "palier": 5, "nom": "L'ours sous les fils", "cout": 2, "cible": 1, "effet": "Un ours couvert de fils blancs se lève : 26 PV, frappe 6. Si la cible a de la garde : elle la perd et subit 8 dégâts. Le héros gagne 8 de garde. Le héros perd 2 PV.", "ops": [["invoque", "Ours sous les fils", 26, 6], ["si", "cibleGarde", [["briseGarde", "cible"], ["deg", "cible", 8]]], ["garde", "heros", 8], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Condition", "Perce-garde", "Dégâts", "Garde", "Prix"], "ambiance": "L'ours de Khet-Neheh n'a pas dormi de l'hiver ; des fils blancs lui sortent du pelage, au dos.", "budget": "31,9 (cible 32, écart -0 % ; vérifié au script)"},
{"id": "ANT182-moins-6", "zone": "ANT182", "pole": "-", "palier": 6, "nom": "Les allées tracées", "cout": 2, "cible": 1, "effet": "Des élans en colonne descendent l'allée : 20 PV, frappe 5. Tous les ennemis perdent 1 d'attaque. La cible subit 10 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Élans en colonne", 20, 5], ["affaiblit", "tous", 1], ["deg", "cible", 10], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Personne n'a tracé les allées de Khet-Neheh ; elles sont pourtant droites, et les élans les suivent.", "budget": "32,1 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ANT182-moins-7", "zone": "ANT182", "pole": "-", "palier": 7, "nom": "Le Réseau blanc", "cout": 3, "cible": 1, "effet": "La forêt donne les ordres. Un grand élan blanc (30 PV, frappe 7). La cible hésite et subit 10 dégâts. Héros +14 de garde, −4 PV. Pose Givre. Si Sceau (consommé) : loups (14 PV, frappe 4), tous perdent leur garde, la cible subit 10 dégâts.", "ops": [["invoque", "Grand élan blanc", 30, 7], ["hesite", "cible"], ["deg", "cible", 10], ["garde", "heros", 14], ["prixPV", 4], ["pose", "Givre"], ["reveil", "Sceau", true, [["invoque", "Loups du réseau", 14, 4], ["briseGarde", "tous"], ["deg", "cible", 10]]]], "tags": ["Antre", "Glace", "Forme ultime −7", "Invocation", "Contrôle", "Dégâts", "Garde", "Prix", "Pose Givre", "Réveil Sceau"], "ambiance": "Les souches de Khet-Neheh fument en rangs dans le gel ; sous la neige, tous les fils mènent au même lieu.", "budget": "47,7 (+29,6 si Sceau, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Liberté

Progression : la souche qui rejette, l'élan lâché, les graines au vent, le lièvre variable, les rejets en désordre, la harde dans tous les sens, puis la forêt défaite. Style : ce qu'on lâche revient (récupération sur 4 cartes) et frappe un peu partout ; contre un ennemi resté seul, on frappe plus fort. Prix : PV et une défausse, sur 6 cartes.

```json
[
{"id": "ANT182-plus-1", "zone": "ANT182", "pole": "+", "palier": 1, "nom": "La souche qui rejette", "cout": 1, "cible": 1, "effet": "Reprenez en main la dernière carte de la défausse. La cible subit 7 dégâts. Le héros perd 1 PV.", "ops": [["recup"], ["deg", "cible", 7], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle +", "Récupération", "Dégâts", "Prix"], "ambiance": "La souche coupée repart de tous les côtés à la fois, et aucun rejet ne pousse droit.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT182-plus-2", "zone": "ANT182", "pole": "+", "palier": 2, "nom": "L'élan lâché", "cout": 1, "cible": 0, "effet": "Un élan lâché traverse le chantier : 10 PV, frappe 3. Le héros gagne 5 de garde.", "ops": [["invoque", "Élan lâché", 10, 3], ["garde", "heros", 5]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Garde"], "ambiance": "L'élan lâché de Khet-Neheh passe à travers le chantier, à travers les tentes, et ne prend aucune allée.", "budget": "13,5 (cible 12,5, écart +8 % ; vérifié au script)"},
{"id": "ANT182-plus-3", "zone": "ANT182", "pole": "+", "palier": 3, "nom": "Les graines au vent", "cout": 1, "cible": 1, "effet": "Reprenez en main la dernière carte de la défausse. Riposte 2. S'il ne reste qu'un ennemi : il subit 6 dégâts. Tous les ennemis subissent 2 dégâts. Le héros perd 1 PV.", "ops": [["recup"], ["riposte", 2], ["si", "seul", [["deg", "cible", 6]]], ["deg", "tous", 2], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle +", "Récupération", "Riposte", "Condition", "Dégâts", "Prix"], "ambiance": "Les graines des épicéas tombent par nuées sur le fleuve gelé, et le vent les ramène sur le chantier.", "budget": "14,4 (cible 15, écart -4 % ; vérifié au script)"},
{"id": "ANT182-plus-4", "zone": "ANT182", "pole": "+", "palier": 4, "nom": "Le lièvre variable", "cout": 2, "cible": 0, "effet": "Un lièvre variable bondit hors des rangs : 12 PV, frappe 4. Reprenez en main la dernière carte de la défausse. 4 coups de 2 dégâts au hasard. Le héros gagne 6 de garde. Le héros perd 1 PV.", "ops": [["invoque", "Lièvre variable", 12, 4], ["recup"], ["deg", "hasard", 2, 4], ["garde", "heros", 6], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Récupération", "Dégâts", "Garde", "Prix"], "ambiance": "Le lièvre variable a gardé son pelage d'hiver au printemps, et personne ne sait plus où il court.", "budget": "27,8 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ANT182-plus-5", "zone": "ANT182", "pole": "+", "palier": 5, "nom": "Les rejets en désordre", "cout": 2, "cible": 1, "effet": "Reprenez en main la dernière carte de la défausse. Piochez 2 cartes. 3 coups de 4 dégâts au hasard. S'il ne reste qu'un ennemi : il subit 8 dégâts. Le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["recup"], ["pioche", 2], ["deg", "hasard", 4, 3], ["si", "seul", [["deg", "cible", 8]]], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Récupération", "Pioche", "Dégâts", "Condition", "Soin", "Prix"], "ambiance": "Ipuy revient du bois avec des rejets plein les bras, et les replante n'importe où, en riant.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ANT182-plus-6", "zone": "ANT182", "pole": "+", "palier": 6, "nom": "La harde dans tous les sens", "cout": 2, "cible": 1, "effet": "Une harde d'élans traverse la forêt : 24 PV, frappe 6. Tous les ennemis subissent 4 dégâts. S'il ne reste qu'un ennemi : il subit 10 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Harde d'élans", 24, 6], ["deg", "tous", 4], ["si", "seul", [["deg", "cible", 10]]], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Dégâts", "Condition", "Prix"], "ambiance": "La harde passe sur le fleuve gelé, sur le chantier, sur les grumes, et ne laisse aucune piste droite.", "budget": "32,8 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ANT182-plus-7", "zone": "ANT182", "pole": "+", "palier": 7, "nom": "La Forêt défaite", "cout": 3, "cible": 0, "effet": "Les rangs se défont. Des élans libres (24 PV, frappe 6). 5 coups de 4 dégâts au hasard. Piochez 2 cartes. Le héros perd 3 PV. Pose Racine. Si Givre (consommé) : 4 coups de 4 au hasard ; héros soigné de 10 ; piochez 1 carte.", "ops": [["invoque", "Élans libres", 24, 6], ["deg", "hasard", 4, 5], ["pioche", 2], ["prixPV", 3], ["pose", "Racine"], ["reveil", "Givre", true, [["deg", "hasard", 4, 4], ["soin", "heros", 10], ["pioche", 1]]]], "tags": ["Antre", "Glace", "Forme ultime +7", "Invocation", "Dégâts", "Pioche", "Prix", "Pose Racine", "Réveil Givre"], "ambiance": "Au dégel, la forêt de Khet-Neheh n'a plus d'allées ; les mâts marqués ont repoussé de leurs souches.", "budget": "46 (+30 si Givre, soit +65 % ; vérifié au script)"}
]
```

---

## Fondasecca, le Collège des Eaux (ASS144 · Assemblée · Mangrove · Eau · vénitienne)

```json
{
 "fiche": "ASS144",
 "nom": "Fondasecca, le Collège des Eaux",
 "recit": "Bando du Collège des Eaux de Fondasecca, crié par Zuane Marangon sur les quais. Il est rappelé que l'eau des citernes est au Collège, et qu'on la reçoit par jour et par tête. Il est défendu de puiser aux racines des palétuviers, de saler les puits, de sortir après la marée de nuit. Il est rappelé que la marée de nuit monte quand la lagune est basse. Qui l'a vue monter le dira au Collège et à personne d'autre. Le bando se crie à chaque quai. Au dernier, Zuane le crie à l'eau, qui écoute.",
 "pal": [
  "La lagune s'est retirée jusqu'à l'horizon ; les palétuviers sèchent debout dans une croûte de sel, et les gondoles gisent sur le flanc, blanches.",
  "L'eau baisse dans les canaux ; le sel monte le long des racines, et les citernes du Collège sont gardées jour et nuit par des hommes à lance.",
  "Ville de pilotis au fond d'une mangrove : canaux, palétuviers, palais de brique sur les racines, et le Collège des Eaux au bout de la lagune.",
  "La marée ne redescend plus tout à fait ; les quais sont sous l'eau, on vote dans des barques, et les crabes montent dans les salles basses.",
  "L'eau a monté jusqu'aux toits et ne bouge plus ; des bancs de poissons passent par les fenêtres, et le Collège siège sur une barge, les pieds dans l'eau."
 ],
 "pm": "Sécheresse",
 "pp": "Déluge"
}
```

### Pôle − Sécheresse

Progression : la loi de la ration, le sel aux racines, la loi des citernes, la gondole sur le flanc, la loi des lances, la croûte de sel, puis la lagune bue. Style : chaque carte se paie en PV (la soif), et un héros qui a moins de la moitié de ses PV frappe ou fige plus fort ; la ration donne un peu de garde, de soin et de cartes. Prix : PV sur les 7 cartes.

```json
[
{"id": "ASS144-moins-1", "zone": "ASS144", "pole": "-", "palier": 1, "nom": "Loi de la ration", "cout": 1, "cible": 0, "effet": "Loi : le héros se soigne de 7. Riposte 2. Le héros perd 1 PV.", "ops": [["soin", "heros", 7], ["riposte", 2], ["prixPV", 1]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Soin", "Riposte", "Prix"], "ambiance": "À Fondasecca, l'eau de la ration se mesure à la louche du Collège, et la louche rétrécit.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS144-moins-2", "zone": "ASS144", "pole": "-", "palier": 2, "nom": "Le sel aux racines", "cout": 1, "cible": 1, "effet": "Si le héros a moins de la moitié de ses PV : la cible subit 6 dégâts. Puis elle subit 6 dégâts et hésite. Le héros perd 1 PV.", "ops": [["si", "blesse", [["deg", "cible", 6]]], ["deg", "cible", 6], ["hesite", "cible"], ["prixPV", 1]], "tags": ["Assemblée", "Eau", "Pôle −", "Condition", "Dégâts", "Contrôle", "Prix"], "ambiance": "Le sel monte le long des racines des palétuviers, une ligne blanche par jour, comme une marée qui sèche.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS144-moins-3", "zone": "ASS144", "pole": "-", "palier": 3, "nom": "Loi des citernes gardées", "cout": 1, "cible": 1, "effet": "Loi : le héros gagne 12 de garde. La cible perd 1 d'attaque. Gagnez 1 mana d'Eau. Le héros perd 1 PV.", "ops": [["garde", "heros", 12], ["affaiblit", "cible", 1], ["mana", "Eau", 1], ["prixPV", 1]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Garde", "Affaiblissement", "Mana", "Prix"], "ambiance": "Les citernes du Collège des Eaux sont fermées de trois clés ; Zuane Marangon porte la troisième au cou.", "budget": "14,6 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ASS144-moins-4", "zone": "ASS144", "pole": "-", "palier": 4, "nom": "La gondole sur le flanc", "cout": 2, "cible": 1, "effet": "Si le héros a moins de la moitié de ses PV : la cible subit 10 dégâts. Puis elle perd sa garde et subit 12 dégâts. Piochez 2 cartes. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 10]]], ["briseGarde", "cible"], ["deg", "cible", 12], ["pioche", 2], ["prixPV", 2]], "tags": ["Assemblée", "Eau", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Pioche", "Prix"], "ambiance": "Les gondoles de Fondasecca gisent sur le flanc dans la vase sèche, et le sel les a peintes en blanc.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ASS144-moins-5", "zone": "ASS144", "pole": "-", "palier": 5, "nom": "Loi des lances", "cout": 2, "cible": 1, "effet": "Loi : la cible perd 3 d'attaque et subit 16 dégâts. Le héros se soigne de 8. Le héros perd 2 PV.", "ops": [["affaiblit", "cible", 3], ["deg", "cible", 16], ["soin", "heros", 8], ["prixPV", 2]], "tags": ["Assemblée", "Eau", "Pôle −", "Loi", "Affaiblissement", "Dégâts", "Soin", "Prix"], "ambiance": "Les hommes à lance du Collège gardent les citernes face à la ville, le dos à l'eau qui reste.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ASS144-moins-6", "zone": "ASS144", "pole": "-", "palier": 6, "nom": "La croûte de sel", "cout": 2, "cible": 0, "effet": "Tous les ennemis subissent 6 dégâts et perdent 1 d'attaque. Si le héros a moins de la moitié de ses PV : tous subissent 4 dégâts de plus. Le héros se soigne de 8. Gagnez 1 mana d'Eau. Le héros perd 3 PV.", "ops": [["deg", "tous", 6], ["affaiblit", "tous", 1], ["si", "blesse", [["deg", "tous", 4]]], ["soin", "heros", 8], ["mana", "Eau", 1], ["prixPV", 3]], "tags": ["Assemblée", "Eau", "Pôle −", "Dégâts", "Affaiblissement", "Condition", "Soin", "Mana", "Prix"], "ambiance": "La croûte de sel craque sous la botte comme une vitre, et dessous la vase est encore chaude.", "budget": "32,2 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ASS144-moins-7", "zone": "ASS144", "pole": "-", "palier": 7, "nom": "La Lagune bue", "cout": 3, "cible": 1, "effet": "La lagune a soif de vous. Si le héros a moins de la moitié de ses PV : tous hésitent, piochez 2. La cible subit 20 dégâts, perd 3 d'attaque. Héros +18 de garde, −5 PV. Pose Braise. Si Abîme (consommé) : piochez 2, la cible hésite et subit 16 dégâts.", "ops": [["si", "blesse", [["hesite", "tous"], ["pioche", 2]]], ["deg", "cible", 20], ["affaiblit", "cible", 3], ["garde", "heros", 18], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Abîme", true, [["pioche", 2], ["hesite", "cible"], ["deg", "cible", 16]]]], "tags": ["Assemblée", "Eau", "Forme ultime −7", "Condition", "Contrôle", "Pioche", "Dégâts", "Affaiblissement", "Garde", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "Quand la lagune s'est retirée, Zuane Marangon a crié le bando au sable, et le sable a écouté.", "budget": "46,8 (+29 si Abîme, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Déluge

Progression : la loi de la barque, l'eau aux genoux, la loi du vote en barque, les crabes dans les salles, la loi de la marée haute, les poissons aux fenêtres, puis la ville sous l'eau. Style : l'eau alourdit la cible ou tous les ennemis à chaque carte ; si une carte est déjà partie en prix ce tour, l'eau en prend plus. Prix : une carte emportée (défausse), sur 6 cartes.

```json
[
{"id": "ASS144-plus-1", "zone": "ASS144", "pole": "+", "palier": 1, "nom": "Loi de la barque", "cout": 1, "cible": 1, "effet": "Loi : la cible perd 2 d'attaque. Le héros se soigne de 7. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "cible", 2], ["soin", "heros", 7], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Affaiblissement", "Soin", "Prix"], "ambiance": "À Fondasecca, quand l'eau monte, on vote assis dans les barques, et la barque du doge prend l'eau.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS144-plus-2", "zone": "ASS144", "pole": "+", "palier": 2, "nom": "L'eau aux genoux", "cout": 1, "cible": 1, "effet": "Tous les ennemis perdent 1 d'attaque. Si une carte a déjà été défaussée en prix ce tour : la cible perd 1 d'attaque. Gagnez 1 mana d'Eau.", "ops": [["affaiblit", "tous", 1], ["si", "defausseAPrix", [["affaiblit", "cible", 1]]], ["mana", "Eau", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Affaiblissement", "Condition", "Mana"], "ambiance": "L'eau monte aux genoux dans la salle du Collège ; les greffiers lèvent leurs registres au-dessus de la tête.", "budget": "11,1 (cible 12,5, écart -11 % ; vérifié au script)"},
{"id": "ASS144-plus-3", "zone": "ASS144", "pole": "+", "palier": 3, "nom": "Loi du vote en barque", "cout": 1, "cible": 1, "effet": "Loi : la cible perd 2 d'attaque. Piochez 2 cartes. Si une carte a déjà été défaussée en prix ce tour : la cible subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "cible", 2], ["pioche", 2], ["si", "defausseAPrix", [["deg", "cible", 6]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Affaiblissement", "Pioche", "Condition", "Dégâts", "Prix"], "ambiance": "Le vote en barque se fait à la rame levée, et l'on compte les rames avant que l'eau les reprenne.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ASS144-plus-4", "zone": "ASS144", "pole": "+", "palier": 4, "nom": "Les crabes dans les salles", "cout": 2, "cible": 1, "effet": "La cible perd 3 d'attaque et subit 16 dégâts. Si une carte a déjà été défaussée en prix ce tour : elle perd 2 d'attaque de plus. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "cible", 3], ["deg", "cible", 16], ["si", "defausseAPrix", [["affaiblit", "cible", 2]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Affaiblissement", "Dégâts", "Condition", "Prix"], "ambiance": "Les crabes montent dans les salles basses du Collège, et se rangent sur les bancs, à la place des sages.", "budget": "25 (cible 28, écart -11 % ; vérifié au script)"},
{"id": "ASS144-plus-5", "zone": "ASS144", "pole": "+", "palier": 5, "nom": "Loi de l'eau aux marches", "cout": 2, "cible": 1, "effet": "Loi : tous les ennemis perdent 2 d'attaque. Reprenez en main la dernière carte de la défausse. La cible hésite. Gagnez 2 mana d'Eau. Le héros se soigne de 6. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "tous", 2], ["recup"], ["hesite", "cible"], ["mana", "Eau", 2], ["soin", "heros", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Loi", "Affaiblissement", "Récupération", "Contrôle", "Mana", "Soin", "Prix"], "ambiance": "La loi de la marée haute se crie depuis les toits ; Zuane Marangon la crie depuis le campanile.", "budget": "31,2 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "ASS144-plus-6", "zone": "ASS144", "pole": "+", "palier": 6, "nom": "Les poissons aux fenêtres", "cout": 2, "cible": 1, "effet": "La cible perd 4 d'attaque, hésite et subit 14 dégâts. Le héros gagne 8 de garde. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "cible", 4], ["hesite", "cible"], ["deg", "cible", 14], ["garde", "heros", 8], ["prixDefausse", 1]], "tags": ["Assemblée", "Eau", "Pôle +", "Affaiblissement", "Contrôle", "Dégâts", "Garde", "Prix"], "ambiance": "Des bancs de poissons argentés passent par les fenêtres du palais, tous dans le même sens, vers le Collège.", "budget": "34,4 (cible 36, écart -4 % ; vérifié au script)"},
{"id": "ASS144-plus-7", "zone": "ASS144", "pole": "+", "palier": 7, "nom": "La Ville sous l'eau", "cout": 3, "cible": 1, "effet": "Le Collège siège dans l'eau. Tous les ennemis perdent 2 d'attaque et subissent 6 dégâts ; la cible 4 de plus. Piochez 2. Héros +18 de garde. Défaussez 1. Pose Abîme. Si Sceau (consommé) : piochez 2, la cible perd 5 d'attaque, héros +12 de garde.", "ops": [["affaiblit", "tous", 2], ["deg", "tous", 6], ["deg", "cible", 4], ["pioche", 2], ["garde", "heros", 18], ["prixDefausse", 1], ["pose", "Abîme"], ["reveil", "Sceau", true, [["pioche", 2], ["affaiblit", "cible", 5], ["garde", "heros", 12]]]], "tags": ["Assemblée", "Eau", "Forme ultime +7", "Affaiblissement", "Dégâts", "Pioche", "Garde", "Prix", "Pose Abîme", "Réveil Sceau"], "ambiance": "Le Collège des Eaux siège sur une barge, au-dessus de la ville, et il vote encore, à la rame levée.", "budget": "49,8 (+32,6 si Sceau, soit +65 % ; vérifié au script)"}
]
```

---

## Le Bargad de Kishtpur (ASS154 · Assemblée · Savane · Feu · moghole)

```json
{
 "fiche": "ASS154",
 "nom": "Le Bargad de Kishtpur",
 "recit": "Notes de Mirza Qasim, gouverneur de Kishtpur, sur le banian où se tient le divan. Le premier hiver, j'ai observé les racines qui descendent des branches : elles tombent droit, comme des cordes, et prennent racine où elles touchent. Le second, plusieurs étaient devenues des troncs, et le divan siégeait entre elles. Les greniers de l'impôt, au bord de la savane, pourrissent ; le grain chauffe dans les tas, et les pauvres viennent s'y réchauffer. Cet hiver, une racine est descendue au-dessus de mon siège. Je l'ai fait couper. Ce matin, il y en avait sept.",
 "pal": [
  "Les greniers de l'impôt ne sont plus que des tas fumants de grain noir ; la chaleur de la pourriture fait trembler l'air, et les termites ont mangé le divan.",
  "Les toits de chaume s'affaissent sur le grain mouillé ; des moisissures blanches couvrent les sacs, et les termites montent leurs tours contre les piliers.",
  "Savane sèche autour d'un banian géant : pavillon de grès rouge, greniers de l'impôt, éléphants, et des scribes assis sous les branches.",
  "Les racines du banian descendent par centaines et prennent pied ; entre ces troncs neufs, le divan siège dans une forêt qui n'était pas là.",
  "Le banian couvre la savane d'un horizon à l'autre, mille troncs pour un seul arbre ; les éléphants vivent dessous, et ses figues tombent en averse."
 ],
 "pm": "Pourriture",
 "pp": "Croissance"
}
```

### Pôle − Pourriture

Progression : la loi du grain mouillé, le tas qui chauffe, la loi des moisissures, les termites au pilier, la loi de l'impôt pourri, le grain noir, puis les greniers fumants. Style : la pourriture ronge la cible tour après tour et lui use l'attaque ; le tas chauffe encore (mana de Feu sur 2 cartes) ; quand un ennemi va se soigner, la pourriture le prend de vitesse. Prix : le grain pourri (défausse), sur 6 cartes.

```json
[
{"id": "ASS154-moins-1", "zone": "ASS154", "pole": "-", "palier": 1, "nom": "Loi du grain mouillé", "cout": 1, "cible": 1, "effet": "Loi : la cible perd 1 d'attaque. Le héros se soigne de 7.", "ops": [["affaiblit", "cible", 1], ["soin", "heros", 7]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Affaiblissement", "Soin"], "ambiance": "Mirza Qasim fait mouiller le grain de l'impôt avant de le peser ; à Kishtpur, le grain mouillé pèse plus.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS154-moins-2", "zone": "ASS154", "pole": "-", "palier": 2, "nom": "Le tas qui chauffe", "cout": 1, "cible": 1, "effet": "Gagnez 2 mana de Feu. La cible subit 7 dégâts. Si un ennemi s'apprête à se soigner : 4 de plus. Défaussez 1 carte au hasard.", "ops": [["mana", "Feu", 2], ["deg", "cible", 7], ["si", "soinEnnemi", [["deg", "cible", 4]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Mana", "Dégâts", "Condition", "Prix"], "ambiance": "Les pauvres de Kishtpur dorment contre les tas de grain pourri ; la nuit, les tas sont plus chauds qu'eux.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS154-moins-3", "zone": "ASS154", "pole": "-", "palier": 3, "nom": "Loi des moisissures", "cout": 1, "cible": 1, "effet": "Loi : piochez 2 cartes. La cible subit 3 dégâts au début de ses 3 prochains tours. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["brulure", "cible", 3, 3], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Pioche", "Dégâts dans le temps", "Prix"], "ambiance": "Les moisissures blanches couvrent les sacs de l'impôt en une nuit, et les scribes les comptent avec le grain.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ASS154-moins-4", "zone": "ASS154", "pole": "-", "palier": 4, "nom": "Les termites au pilier", "cout": 2, "cible": 1, "effet": "La cible perd sa garde et subit 18 dégâts. Si un ennemi s'apprête à se soigner : la cible perd 2 d'attaque. Le héros gagne 6 de garde. Défaussez 1 carte au hasard.", "ops": [["briseGarde", "cible"], ["deg", "cible", 18], ["si", "soinEnnemi", [["affaiblit", "cible", 2]]], ["garde", "heros", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Perce-garde", "Dégâts", "Condition", "Affaiblissement", "Garde", "Prix"], "ambiance": "Les termites montent leurs tours contre les piliers du divan, et les piliers ne sonnent plus quand on les frappe.", "budget": "25,8 (cible 28, écart -8 % ; vérifié au script)"},
{"id": "ASS154-moins-5", "zone": "ASS154", "pole": "-", "palier": 5, "nom": "Loi de l'impôt pourri", "cout": 2, "cible": 1, "effet": "Loi : piochez 2 cartes. Tous les ennemis subissent 5 dégâts. La cible perd 3 d'attaque. Le héros se soigne de 8. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["deg", "tous", 5], ["affaiblit", "cible", 3], ["soin", "heros", 8], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Pioche", "Dégâts", "Affaiblissement", "Soin", "Prix"], "ambiance": "La loi de l'impôt pourri compte le grain gâté au prix du bon ; le divan l'a votée sans un mot.", "budget": "33 (cible 32, écart +3 % ; vérifié au script)"},
{"id": "ASS154-moins-6", "zone": "ASS154", "pole": "-", "palier": 6, "nom": "Le grain noir", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 2 dégâts au début de leurs 3 prochains tours. Si un ennemi s'apprête à se soigner : la cible subit 10 dégâts. Elle en subit 16. Héros +6 de garde. Défaussez 1 carte au hasard.", "ops": [["brulure", "tous", 2, 3], ["si", "soinEnnemi", [["deg", "cible", 10]]], ["deg", "cible", 16], ["garde", "heros", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Dégâts dans le temps", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Le grain noir fume au fond des greniers de Kishtpur ; on y cuirait du pain sans allumer de feu.", "budget": "36 (cible 36, écart +0 % ; vérifié au script)"},
{"id": "ASS154-moins-7", "zone": "ASS154", "pole": "-", "palier": 7, "nom": "Les Greniers fumants", "cout": 3, "cible": 1, "effet": "Le grain chauffe sous vous. 2 mana de Feu. Tous brûlent, 3 par tour pendant 3 tours. La cible subit 18 dégâts, perd 2 d'attaque. Défaussez 1. Pose Sang. Si Braise (consommée) : la cible brûle 4 pendant 4 tours et subit 8 dégâts ; 2 mana de Feu.", "ops": [["mana", "Feu", 2], ["brulure", "tous", 3, 3], ["deg", "cible", 18], ["affaiblit", "cible", 2], ["prixDefausse", 1], ["pose", "Sang"], ["reveil", "Braise", true, [["brulure", "cible", 4, 4], ["mana", "Feu", 2], ["deg", "cible", 8]]]], "tags": ["Assemblée", "Feu", "Forme ultime −7", "Mana", "Dégâts dans le temps", "Dégâts", "Affaiblissement", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "Les greniers fumants de Kishtpur font trembler l'air au-dessus de la savane, et les vautours n'y descendent pas.", "budget": "46,8 (+30 si Braise, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Croissance

Progression : la loi de la racine qui descend, la racine qui touche, la loi du tronc neuf, le divan entre les troncs, la loi de l'ombre partagée, la forêt qui n'était pas là, puis le banian sans bord. Style : pioche, garde des alliés et racines qui fendent la garde de la cible ; mais l'arbre nourrit aussi l'ennemi. Prix : soin ennemi, sur 6 cartes.

```json
[
{"id": "ASS154-plus-1", "zone": "ASS154", "pole": "+", "palier": 1, "nom": "Loi de la racine qui descend", "cout": 1, "cible": 0, "effet": "Loi : piochez 1 carte. Vos alliés gagnent 4 de garde. Gagnez 1 mana de Feu. Chaque ennemi se soigne de 1.", "ops": [["pioche", 1], ["garde", "allies", 4], ["mana", "Feu", 1], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Pioche", "Garde", "Mana", "Prix"], "ambiance": "Les racines du bargad tombent droit des branches, comme des cordes, et prennent pied là où elles touchent.", "budget": "9,6 (cible 10, écart -4 % ; vérifié au script)"},
{"id": "ASS154-plus-2", "zone": "ASS154", "pole": "+", "palier": 2, "nom": "La racine qui touche", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : elle la perd. La cible subit 8 dégâts. Riposte 2.", "ops": [["si", "cibleGarde", [["briseGarde", "cible"]]], ["deg", "cible", 8], ["riposte", 2]], "tags": ["Assemblée", "Feu", "Pôle +", "Condition", "Perce-garde", "Dégâts", "Riposte"], "ambiance": "Une racine du bargad est descendue sur un éléphant qui dormait ; l'éléphant porte maintenant un tronc de plus.", "budget": "13,5 (cible 12,5, écart +8 % ; vérifié au script)"},
{"id": "ASS154-plus-3", "zone": "ASS154", "pole": "+", "palier": 3, "nom": "Loi du tronc neuf", "cout": 1, "cible": 0, "effet": "Loi : vos alliés gagnent 8 de garde. Piochez 2 cartes. Chaque ennemi se soigne de 1.", "ops": [["garde", "allies", 8], ["pioche", 2], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Garde", "Pioche", "Prix"], "ambiance": "Chaque tronc neuf du bargad reçoit un numéro de la main d'un scribe ; les numéros ne suffisent plus.", "budget": "15,4 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "ASS154-plus-4", "zone": "ASS154", "pole": "+", "palier": 4, "nom": "Le divan entre les troncs", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 8 dégâts. Puis elle en subit 12. Le héros gagne 10 de garde et se soigne de 6. Chaque ennemi se soigne de 1.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["deg", "cible", 12], ["garde", "heros", 10], ["soin", "heros", 6], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Condition", "Dégâts", "Garde", "Soin", "Prix"], "ambiance": "Le divan de Kishtpur siège entre les troncs du bargad, et chaque mois il recule son tapis d'un pas.", "budget": "27,8 (cible 28, écart -1 % ; vérifié au script)"},
{"id": "ASS154-plus-5", "zone": "ASS154", "pole": "+", "palier": 5, "nom": "Loi de l'ombre partagée", "cout": 2, "cible": 0, "effet": "Loi : piochez 2 cartes. Vos alliés gagnent 8 de garde. Gagnez 2 mana de Feu. Riposte 5. Chaque ennemi se soigne de 2.", "ops": [["pioche", 2], ["garde", "allies", 8], ["mana", "Feu", 2], ["riposte", 5], ["ennemiSoin", 2]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Pioche", "Garde", "Mana", "Riposte", "Prix"], "ambiance": "La loi de l'ombre partagée ouvre l'ombre du bargad à tous, pauvres, bêtes et ennemis du gouverneur.", "budget": "29,2 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ASS154-plus-6", "zone": "ASS154", "pole": "+", "palier": 6, "nom": "La forêt qui n'était pas là", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : tous les ennemis perdent la leur. La cible subit 16 dégâts ; tous les ennemis, 4. Le héros se soigne de 8. Chaque ennemi se soigne de 1.", "ops": [["si", "cibleGarde", [["briseGarde", "tous"]]], ["deg", "cible", 16], ["deg", "tous", 4], ["soin", "heros", 8], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Condition", "Perce-garde", "Dégâts", "Soin", "Prix"], "ambiance": "Mirza Qasim a mis une matinée à sortir à cheval de la forêt du bargad, qui est un seul arbre.", "budget": "33,9 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ASS154-plus-7", "zone": "ASS154", "pole": "+", "palier": 7, "nom": "Le Banian sans bord", "cout": 3, "cible": 1, "effet": "Un seul arbre, mille troncs. Vos alliés gagnent 12 de garde et se soignent de 8. La cible subit 16 dégâts. Piochez 2 cartes. Chaque ennemi se soigne de 2. Pose Sceau. Si Sang (consommé) : héros soigné de 10 ; 2 mana de Feu ; la cible subit 12 dégâts.", "ops": [["garde", "allies", 12], ["soin", "allies", 8], ["deg", "cible", 16], ["pioche", 2], ["ennemiSoin", 2], ["pose", "Sceau"], ["reveil", "Sang", true, [["soin", "heros", 10], ["mana", "Feu", 2], ["deg", "cible", 12]]]], "tags": ["Assemblée", "Feu", "Forme ultime +7", "Garde", "Soin", "Dégâts", "Pioche", "Prix", "Pose Sceau", "Réveil Sang"], "ambiance": "Sous le bargad de Kishtpur, il pleut des figues toute l'année, et le divan siège sous un seul arbre.", "budget": "46 (+28 si Sang, soit +61 % ; vérifié au script)"}
]
```

---

## Le Banc des Jours de Sak-Tz'ib (ASS058 · Assemblée · Canyon · Feu · maya)

```json
{
 "fiche": "ASS058",
 "nom": "Le Banc des Jours de Sak-Tz'ib",
 "recit": "Almanach des gardiens des jours de Sak-Tz'ib, tenu par Sak Nikte'. Jour du Vent : on ne siège pas ; le canyon souffle chaud et les vieux rient sans raison. Jour de la Maison : on compte les jours sur la paroi, un trait par lever de soleil. Jour du Lézard : on brûle le piment devant l'entrée, pour les fous. Jour de la Mort : on se tait. Jour du Cerf : la lumière passe par la fente et touche le dernier trait. Ce matin, Sak Nikte' est montée tracer le trait du jour. Il était déjà tracé.",
 "pal": [
  "Le canyon souffle une chaleur de forge ; la fumée du piment roule au fond, et les gardiens dansent sur la corniche en riant, au bord du vide.",
  "Le vent chaud monte du fond ; les traits de la paroi se brouillent sous des dessins nouveaux, et des rires montent des grottes peintes.",
  "Canyon de grès rouge : escaliers taillés, grottes peintes, la paroi aux traits des jours, et les gardiens assis sur un banc de pierre.",
  "Chaque trait de la paroi est repris au cordeau ; le soleil passe par la fente à l'heure dite, et les gardiens se lèvent ensemble, sans un mot.",
  "La fente du canyon jette un rai de soleil qui brûle la pierre à l'endroit exact du jour ; les gardiens le suivent pas à pas, et la paroi fume en lignes."
 ],
 "pm": "Folie",
 "pp": "Raison"
}
```

### Pôle − Folie

Progression : la loi du jour du Vent, le rire des vieux, la loi du piment brûlé, la danse sur la corniche, la loi des dessins nouveaux, la chaleur de forge, puis le canyon qui rit. Style : chaque carte coûte des PV et en rend aussitôt, souvent plus (soin du héros sur les 7 cartes) ; un héros qui a moins de la moitié de ses PV rit plus fort. Prix : PV sur les 7 cartes.

```json
[
{"id": "ASS058-moins-1", "zone": "ASS058", "pole": "-", "palier": 1, "nom": "Loi du jour du Vent", "cout": 1, "cible": 1, "effet": "Loi : le héros se soigne de 8. La cible perd 1 d'attaque. Le héros perd 1 PV.", "ops": [["soin", "heros", 8], ["affaiblit", "cible", 1], ["prixPV", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Soin", "Affaiblissement", "Prix"], "ambiance": "Le jour du Vent, le canyon de Sak-Tz'ib souffle chaud, et les vieux gardiens rient sans savoir de quoi.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS058-moins-2", "zone": "ASS058", "pole": "-", "palier": 2, "nom": "Le rire des vieux", "cout": 1, "cible": 0, "effet": "Si le héros a moins de la moitié de ses PV : il se soigne de 6. Tous les ennemis subissent 3 dégâts. Le héros se soigne de 3. Le héros perd 1 PV.", "ops": [["si", "blesse", [["soin", "heros", 6]]], ["deg", "tous", 3], ["soin", "heros", 3], ["prixPV", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Condition", "Soin", "Dégâts", "Prix"], "ambiance": "Le rire des vieux gardiens descend le canyon de corniche en corniche, et les jeunes rient en l'entendant.", "budget": "11,6 (cible 12,5, écart -7 % ; vérifié au script)"},
{"id": "ASS058-moins-3", "zone": "ASS058", "pole": "-", "palier": 3, "nom": "Loi du piment brûlé", "cout": 1, "cible": 1, "effet": "Loi : le héros se soigne de 6. La cible subit 2 dégâts au début de ses 3 prochains tours. Piochez 1 carte. Le héros perd 1 PV.", "ops": [["soin", "heros", 6], ["brulure", "cible", 2, 3], ["pioche", 1], ["prixPV", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Soin", "Dégâts dans le temps", "Pioche", "Prix"], "ambiance": "Le jour du Lézard, Sak Nikte' brûle le piment devant l'entrée du canyon ; les fous toussent et se calment.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS058-moins-4", "zone": "ASS058", "pole": "-", "palier": 4, "nom": "La danse sur la corniche", "cout": 2, "cible": 1, "effet": "Si le héros a moins de la moitié de ses PV : la cible subit 10 dégâts. Puis elle en subit 10. Le héros se soigne de 10. Riposte 2. Le héros perd 2 PV.", "ops": [["si", "blesse", [["deg", "cible", 10]]], ["deg", "cible", 10], ["soin", "heros", 10], ["riposte", 2], ["prixPV", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Condition", "Dégâts", "Soin", "Riposte", "Prix"], "ambiance": "Les gardiens dansent sur la corniche au bord du vide, et aucun n'est jamais tombé, ce qui inquiète.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS058-moins-5", "zone": "ASS058", "pole": "-", "palier": 5, "nom": "Loi des dessins nouveaux", "cout": 2, "cible": 1, "effet": "Loi : le héros se soigne de 12. Piochez 2 cartes. La cible hésite et subit 8 dégâts. Le héros perd 2 PV.", "ops": [["soin", "heros", 12], ["pioche", 2], ["hesite", "cible"], ["deg", "cible", 8], ["prixPV", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Soin", "Pioche", "Contrôle", "Dégâts", "Prix"], "ambiance": "Sur la paroi de Sak-Tz'ib, des dessins nouveaux couvrent les traits des jours ; personne ne les a tracés.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "ASS058-moins-6", "zone": "ASS058", "pole": "-", "palier": 6, "nom": "La chaleur de forge", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 6 dégâts. Si le héros a moins de la moitié de ses PV : il se soigne de 10. Puis il se soigne de 8. La cible subit 10 dégâts. Le héros perd 3 PV.", "ops": [["deg", "tous", 6], ["si", "blesse", [["soin", "heros", 10]]], ["soin", "heros", 8], ["deg", "cible", 10], ["prixPV", 3]], "tags": ["Assemblée", "Feu", "Pôle −", "Dégâts", "Condition", "Soin", "Prix"], "ambiance": "La chaleur monte du fond du canyon comme d'une forge, et les gardiens y descendent pour se rafraîchir.", "budget": "33,2 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS058-moins-7", "zone": "ASS058", "pole": "-", "palier": 7, "nom": "Le Canyon qui rit", "cout": 3, "cible": 1, "effet": "Les gardiens dansent au bord. Héros soigné de 18, −4 PV. Tous les ennemis subissent 6 dégâts ; la cible hésite et en subit 14. Pose Abîme. Si Braise (consommée) : tous brûlent, 2 par tour pendant 3 tours ; héros soigné de 10 ; la cible, 6 dégâts.", "ops": [["soin", "heros", 18], ["deg", "tous", 6], ["hesite", "cible"], ["deg", "cible", 14], ["prixPV", 4], ["pose", "Abîme"], ["reveil", "Braise", true, [["brulure", "tous", 2, 3], ["soin", "heros", 10], ["deg", "cible", 6]]]], "tags": ["Assemblée", "Feu", "Forme ultime −7", "Soin", "Dégâts", "Contrôle", "Prix", "Pose Abîme", "Réveil Braise"], "ambiance": "Au fond du canyon de Sak-Tz'ib, la fumée du piment ne monte plus ; les gardiens la respirent en riant.", "budget": "46,2 (+29,2 si Braise, soit +63 % ; vérifié au script)"}
]
```

### Pôle + Raison

Progression : la loi du trait, la fente du canyon, la loi du cordeau, le soleil à l'heure dite, la loi des traits repris, les gardiens qui se lèvent, puis le rai du jour exact. Style : on pioche, on marque la cible, on la brûle au soleil compté ; à la troisième carte du tour, le compte rapporte plus. Prix : une carte rejetée (défausse), sur 6 cartes.

```json
[
{"id": "ASS058-plus-1", "zone": "ASS058", "pole": "+", "palier": 1, "nom": "Loi du trait", "cout": 1, "cible": 1, "effet": "Loi : piochez 2 cartes. La cible est marquée : +1 dégât à chaque coup. Gagnez 1 mana de Feu. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["vulnerable", "cible", 1], ["mana", "Feu", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Pioche", "Marque", "Mana", "Prix"], "ambiance": "Un trait par lever de soleil : les gardiens de Sak-Tz'ib n'en ont jamais manqué un, ni tracé deux.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ASS058-plus-2", "zone": "ASS058", "pole": "+", "palier": 2, "nom": "La fente du canyon", "cout": 1, "cible": 1, "effet": "La cible subit 3 dégâts au début de ses 3 prochains tours, et elle est marquée 1.", "ops": [["brulure", "cible", 3, 3], ["vulnerable", "cible", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Dégâts dans le temps", "Marque"], "ambiance": "Le soleil passe par la fente du canyon une fois par jour, et la tache de lumière avance d'un trait.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS058-plus-3", "zone": "ASS058", "pole": "+", "palier": 3, "nom": "Loi du cordeau", "cout": 1, "cible": 1, "effet": "Loi : si c'est au moins votre troisième carte ce tour, piochez 1 carte. Piochez 2 cartes. La cible hésite. Le héros gagne 4 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "troisCartes", [["pioche", 1]]], ["pioche", 2], ["hesite", "cible"], ["garde", "heros", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Condition", "Pioche", "Contrôle", "Garde", "Prix"], "ambiance": "Les traits de la paroi sont repris au cordeau de coton, tendu par deux gardiens qui ne se parlent pas.", "budget": "15,2 (cible 15, écart +1 % ; vérifié au script)"},
{"id": "ASS058-plus-4", "zone": "ASS058", "pole": "+", "palier": 4, "nom": "Le soleil à l'heure dite", "cout": 2, "cible": 1, "effet": "La cible subit 4 dégâts au début de ses 4 prochains tours, et 10 tout de suite. Elle est marquée 2. Défaussez 1 carte au hasard.", "ops": [["brulure", "cible", 4, 4], ["deg", "cible", 10], ["vulnerable", "cible", 2], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Dégâts dans le temps", "Dégâts", "Marque", "Prix"], "ambiance": "À Sak-Tz'ib, le soleil arrive à la fente à l'heure dite, et les gardiens se lèvent avant qu'il arrive.", "budget": "29 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "ASS058-plus-5", "zone": "ASS058", "pole": "+", "palier": 5, "nom": "Loi des traits repris", "cout": 2, "cible": 1, "effet": "Loi : piochez 2 cartes. Si c'est au moins votre troisième carte ce tour : la cible subit 10 dégâts. Elle en subit 12. Le héros gagne 8 de garde. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["si", "troisCartes", [["deg", "cible", 10]]], ["deg", "cible", 12], ["garde", "heros", 8], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Pioche", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Sak Nikte' reprend chaque trait effacé par le vent ; elle n'en a jamais trouvé un de travers.", "budget": "28,4 (cible 32, écart -11 % ; vérifié au script)"},
{"id": "ASS058-plus-6", "zone": "ASS058", "pole": "+", "palier": 6, "nom": "Les gardiens qui se lèvent", "cout": 2, "cible": 1, "effet": "Tous les ennemis hésitent. La cible subit 5 dégâts au début de ses 3 prochains tours, et 12 tout de suite. Défaussez 1 carte au hasard.", "ops": [["hesite", "tous"], ["brulure", "cible", 5, 3], ["deg", "cible", 12], ["prixDefausse", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Contrôle", "Dégâts dans le temps", "Dégâts", "Prix"], "ambiance": "Les gardiens des jours se lèvent tous ensemble, sans signal, au moment exact où la lumière touche le trait.", "budget": "32,8 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ASS058-plus-7", "zone": "ASS058", "pole": "+", "palier": 7, "nom": "Le Rai du jour exact", "cout": 3, "cible": 1, "effet": "Le soleil tombe à l'heure. Tous brûlent, 3 par tour pendant 3 tours. La cible est marquée 3 et subit 12 dégâts. Piochez 2. Défaussez 1. Pose Sceau. Si Givre (consommé) : tous hésitent, la cible brûle 4 pendant 3 tours, piochez 2.", "ops": [["brulure", "tous", 3, 3], ["vulnerable", "cible", 3], ["deg", "cible", 12], ["pioche", 2], ["prixDefausse", 1], ["pose", "Sceau"], ["reveil", "Givre", true, [["hesite", "tous"], ["brulure", "cible", 4, 3], ["pioche", 2]]]], "tags": ["Assemblée", "Feu", "Forme ultime +7", "Dégâts dans le temps", "Marque", "Dégâts", "Pioche", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Le rai du jour exact brûle la paroi de Sak-Tz'ib en lignes droites ; la pierre fume derrière lui.", "budget": "45,8 (+28,8 si Givre, soit +63 % ; vérifié au script)"}
]
```

---

## L'Imbizo d'eMatsheni (ASS028 · Assemblée · Marais · Sève · zouloue)

```json
{
 "fiche": "ASS028",
 "nom": "L'Imbizo d'eMatsheni",
 "recit": "Ce qui est défendu aux gens d'eMatsheni, tel que Nomvula le récite à l'imbizo. On ne coupe pas l'arbre qui saigne. On ne marche pas pieds nus dans la mare rouge. On ne lave pas une plaie avec l'eau du marais, car elle se referme avant le soir, et ce qui est dedans y reste. On ne dort pas sous les branches basses. On n'enterre pas les morts près des racines. Ceux qui l'ont fait les ont retrouvés au printemps, debout, l'écorce épaisse sur les épaules. On ne leur parle pas. Ils répondent.",
 "pal": [
  "La mare est rouge et épaisse ; les arbres saignent par chaque entaille, et les gens de l'imbizo s'y tiennent jusqu'aux genoux, sans bouger.",
  "Les troncs pleurent une sève rouge qui caille sur l'écorce ; les mares se teintent, et les hérons marchent les pattes tachées.",
  "Marais de papyrus et d'arbres à sève rouge : kraal sur une butte, cercle de l'imbizo, bœufs dans l'eau basse, pirogues entre les roseaux.",
  "Une écorce neuve couvre tout ce qui reste immobile : poteaux du kraal, pirogues échouées, bœufs couchés, d'une peau brune et luisante.",
  "Le marais bourgeonne : les troncs s'épaississent à vue d'œil, l'écorce gagne les bœufs et les gens, et chacun porte aux épaules un rameau en fleur."
 ],
 "pm": "Sang",
 "pp": "Sève"
}
```

### Pôle − Sang

Progression : la loi de l'arbre qui saigne, la mare rouge, la loi du sang donné, les bœufs dans l'eau rouge, la loi de la plaie fermée, l'entaille, puis la mare de l'imbizo. Style : le héros donne son sang (PV) et ses alliés se soignent sur les 7 cartes ; une bête déjà en jeu en reçoit plus. Prix : PV sur les 7 cartes.

```json
[
{"id": "ASS028-moins-1", "zone": "ASS028", "pole": "-", "palier": 1, "nom": "Loi de l'arbre qui saigne", "cout": 1, "cible": 0, "effet": "Loi : un héron taché se joint à vous : 6 PV, frappe 2. Vos alliés se soignent de 4. Le héros perd 2 PV.", "ops": [["invoque", "Héron taché", 6, 2], ["soin", "allies", 4], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Invocation", "Soin", "Prix"], "ambiance": "On ne coupe pas l'arbre qui saigne à eMatsheni ; les hérons, eux, y aiguisent leur bec.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS028-moins-2", "zone": "ASS028", "pole": "-", "palier": 2, "nom": "La mare rouge", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : vos alliés se soignent de 4. La cible subit 6 dégâts. Vos alliés se soignent de 3. Le héros perd 1 PV.", "ops": [["si", "bete", [["soin", "allies", 4]]], ["deg", "cible", 6], ["soin", "allies", 3], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Soin", "Dégâts", "Prix"], "ambiance": "La mare rouge d'eMatsheni ne gèle pas, ne sèche pas, et les bœufs y boivent sans qu'on les y mène.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "ASS028-moins-3", "zone": "ASS028", "pole": "-", "palier": 3, "nom": "Loi du sang donné", "cout": 1, "cible": 0, "effet": "Loi : vos alliés se soignent de 6 et gagnent 4 de garde. Le héros se soigne de 4. Le héros perd 2 PV.", "ops": [["soin", "allies", 6], ["garde", "allies", 4], ["soin", "heros", 4], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Soin", "Garde", "Prix"], "ambiance": "À l'imbizo, Nomvula entaille sa paume au-dessus du bol commun, et chacun y trempe les doigts.", "budget": "15,8 (cible 15, écart +5 % ; vérifié au script)"},
{"id": "ASS028-moins-4", "zone": "ASS028", "pole": "-", "palier": 4, "nom": "Les bœufs dans l'eau rouge", "cout": 2, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 8 dégâts. Puis un bœuf de l'imbizo entre dans la mare : 20 PV, frappe 4. Vos alliés se soignent de 6. Le héros perd 2 PV.", "ops": [["si", "bete", [["deg", "cible", 8]]], ["invoque", "Bœuf de l'imbizo", 20, 4], ["soin", "allies", 6], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Dégâts", "Invocation", "Soin", "Prix"], "ambiance": "Les bœufs de l'imbizo se tiennent dans l'eau rouge jusqu'au poitrail, et leurs plaies se ferment dans la nuit.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ASS028-moins-5", "zone": "ASS028", "pole": "-", "palier": 5, "nom": "Loi de la plaie fermée", "cout": 2, "cible": 0, "effet": "Loi : vos alliés se soignent de 10 et gagnent 5 de garde. Le héros se soigne de 6. Piochez 2 cartes. Le héros perd 2 PV.", "ops": [["soin", "allies", 10], ["garde", "allies", 5], ["soin", "heros", 6], ["pioche", 2], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Soin", "Garde", "Pioche", "Prix"], "ambiance": "La plaie lavée à l'eau du marais se referme avant le soir, et Nomvula défend d'y regarder de près.", "budget": "33 (cible 32, écart +3 % ; vérifié au script)"},
{"id": "ASS028-moins-6", "zone": "ASS028", "pole": "-", "palier": 6, "nom": "L'entaille au bras", "cout": 2, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : vos alliés se soignent de 8. La cible subit 14 dégâts et perd 2 d'attaque. Vos alliés se soignent de 6. Le héros perd 3 PV.", "ops": [["si", "bete", [["soin", "allies", 8]]], ["deg", "cible", 14], ["affaiblit", "cible", 2], ["soin", "allies", 6], ["prixPV", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Soin", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "L'entaille dans le tronc rouge ne se referme pas ; elle s'élargit, lentement, comme une bouche.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "ASS028-moins-7", "zone": "ASS028", "pole": "-", "palier": 7, "nom": "La Mare de l'imbizo", "cout": 3, "cible": 1, "effet": "Tout le cercle saigne ensemble. Vos alliés se soignent de 14. Un taureau rouge (24 PV, frappe 6). La cible subit 10 dégâts. Le héros perd 5 PV. Pose Sang. Si Sceau (consommé) : piochez 2 cartes ; alliés soignés de 8 ; la cible subit 10 dégâts.", "ops": [["soin", "allies", 14], ["invoque", "Taureau rouge", 24, 6], ["deg", "cible", 10], ["prixPV", 5], ["pose", "Sang"], ["reveil", "Sceau", true, [["pioche", 2], ["soin", "allies", 8], ["deg", "cible", 10]]]], "tags": ["Assemblée", "Sève", "Forme ultime −7", "Soin", "Invocation", "Dégâts", "Prix", "Pose Sang", "Réveil Sceau"], "ambiance": "L'imbizo d'eMatsheni se tient dans la mare rouge, et chacun en sort plus lourd qu'il n'y est entré.", "budget": "47 (+30 si Sceau, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Sève

Progression : la loi de l'écorce neuve, la peau brune, la loi des poteaux du kraal, les pirogues échouées, la loi du rameau, les bœufs couchés, puis le marais qui bourgeonne. Style : la sève scelle le héros sous une écorce (garde du héros sur les 7 cartes) ; si la garde est déjà levée, l'écorce rend les coups ou frappe. Prix : l'ennemi s'écorce aussi (garde ennemie), sur 6 cartes.

```json
[
{"id": "ASS028-plus-1", "zone": "ASS028", "pole": "+", "palier": 1, "nom": "Loi de l'écorce neuve", "cout": 1, "cible": 0, "effet": "Loi : le héros gagne 8 de garde. Riposte 2.", "ops": [["garde", "heros", 8], ["riposte", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Riposte"], "ambiance": "Le poteau du kraal qu'on n'a pas bougé de l'hiver porte une écorce neuve, brune et luisante.", "budget": "10,4 (cible 10, écart +4 % ; vérifié au script)"},
{"id": "ASS028-plus-2", "zone": "ASS028", "pole": "+", "palier": 2, "nom": "La peau brune", "cout": 1, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible subit 6 dégâts. Le héros gagne 10 de garde. La cible subit 4 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "garde", [["deg", "cible", 6]]], ["garde", "heros", 10], ["deg", "cible", 4], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Les gens d'eMatsheni se frottent la peau avec la sève, et au matin elle ne se plisse plus.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS028-plus-3", "zone": "ASS028", "pole": "+", "palier": 3, "nom": "Loi des poteaux du kraal", "cout": 1, "cible": 1, "effet": "Loi : le héros gagne 14 de garde. La cible hésite. Chaque ennemi gagne 1 de garde.", "ops": [["garde", "heros", 14], ["hesite", "cible"], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Contrôle", "Prix"], "ambiance": "Les poteaux du kraal d'eMatsheni ont pris racine, et le kraal s'élargit d'une enjambée chaque été.", "budget": "14,2 (cible 15, écart -5 % ; vérifié au script)"},
{"id": "ASS028-plus-4", "zone": "ASS028", "pole": "+", "palier": 4, "nom": "Les pirogues échouées", "cout": 2, "cible": 1, "effet": "Si le héros a déjà de la garde : riposte 4. Le héros gagne 14 de garde. La cible subit 10 dégâts. Gagnez 1 mana de Sève. Chaque ennemi gagne 1 de garde.", "ops": [["si", "garde", [["riposte", 4]]], ["garde", "heros", 14], ["deg", "cible", 10], ["mana", "Sève", 1], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Riposte", "Garde", "Dégâts", "Mana", "Prix"], "ambiance": "Les pirogues échouées dans les roseaux se couvrent d'écorce, et l'une d'elles a fait des rameaux.", "budget": "26,2 (cible 28, écart -6 % ; vérifié au script)"},
{"id": "ASS028-plus-5", "zone": "ASS028", "pole": "+", "palier": 5, "nom": "Loi du rameau", "cout": 2, "cible": 1, "effet": "Loi : le héros gagne 16 de garde. Piochez 2 cartes. La cible hésite et perd 2 d'attaque. Chaque ennemi gagne 1 de garde.", "ops": [["garde", "heros", 16], ["pioche", 2], ["hesite", "cible"], ["affaiblit", "cible", 2], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Garde", "Pioche", "Contrôle", "Affaiblissement", "Prix"], "ambiance": "Celui qui porte un rameau sur l'épaule parle le premier à l'imbizo, et personne ne lui répond.", "budget": "29,8 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ASS028-plus-6", "zone": "ASS028", "pole": "+", "palier": 6, "nom": "Les bœufs couchés", "cout": 2, "cible": 1, "effet": "Si le héros a déjà de la garde : la cible subit 12 dégâts. Le héros gagne 18 de garde et se soigne de 8. La cible subit 10 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "garde", [["deg", "cible", 12]]], ["garde", "heros", 18], ["soin", "heros", 8], ["deg", "cible", 10], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Dégâts", "Garde", "Soin", "Prix"], "ambiance": "Les bœufs couchés au bord du marais ne se relèvent plus ; leur écorce est chaude, et ils ruminent encore.", "budget": "36,4 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "ASS028-plus-7", "zone": "ASS028", "pole": "+", "palier": 7, "nom": "Le Marais qui bourgeonne", "cout": 3, "cible": 1, "effet": "L'écorce vous gagne aussi. Héros +28 de garde, alliés +10. La cible subit 12 dégâts. Piochez 1. Ennemis +2 de garde. Pose Givre. Si Racine (consommée) : bœuf d'écorce (20 PV, frappe 4), héros +10 de garde, la cible subit 6 dégâts.", "ops": [["garde", "heros", 28], ["garde", "allies", 10], ["deg", "cible", 12], ["pioche", 1], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Racine", true, [["invoque", "Bœuf d'écorce", 20, 4], ["garde", "heros", 10], ["deg", "cible", 6]]]], "tags": ["Assemblée", "Sève", "Forme ultime +7", "Garde", "Dégâts", "Pioche", "Prix", "Pose Givre", "Réveil Racine"], "ambiance": "Nomvula porte un rameau en fleur sur chaque épaule, et sa voix, à l'imbizo, sent la sève.", "budget": "46,4 (+30 si Racine, soit +65 % ; vérifié au script)"}
]
```

---

## Ta-Wehat, la Tombe aux Pas (DON121 · Donjon · Désert de sable · Feu · égyptienne)

```json
{
 "fiche": "DON121",
 "nom": "Ta-Wehat, la Tombe aux Pas",
 "recit": "Inventaire dressé par le scribe Amenmose à l'ouverture de la tombe de Ta-Wehat. Un lit de bois doré, intact. Des jarres de grain, scellées. Un coffre de linge. Sur le sol des salles, un lit de cendre fine, épais d'une main, que les bâtisseurs ont tamisé pour qu'on y lise les pas des voleurs : sans une trace. Des graines dans une coupe, qui ont germé à l'ouverture. Un miroir de bronze. Dans la dernière salle, sur la cendre, des pas : de la porte jusqu'au mur du fond, pieds nus, petits. Ils ne reviennent pas.",
 "pal": [
  "La cendre a comblé les salles jusqu'aux plafonds ; chaque pas s'y imprime et reste, et des pas que personne n'a faits traversent les couloirs.",
  "Une cendre fine couvre les dalles et monte le long des murs ; les lampes la font briller, et chaque matin on y trouve des traces nouvelles.",
  "Tombe creusée sous une dune : couloirs peints, salles à piliers, jarres scellées, et le sable qui coule doucement par les fentes du plafond.",
  "Des pousses vertes percent la cendre des salles ; leur sève luit dans le soleil des fentes, et qui les touche se couvre de cloques.",
  "La dune entière a fleuri au-dessus de la tombe : tiges et ombelles plus hautes qu'un homme, une sève qui coule au soleil, et la peau brûle à leur ombre."
 ],
 "pm": "Cendre",
 "pp": "Floraison"
}
```

### Pôle − Cendre

Progression : le lit de cendre, la trace nouvelle, les pas sans retour, la lampe qui fait briller, les couloirs comblés, les pas que personne n'a faits, puis la tombe pleine de cendre. Style : chaque pas laisse sa marque (la cible subit plus à chaque coup), puis le piège tombe ; contre une cible qui piétine ou charge, la cendre en garde plus. Prix : PV, sur 6 cartes.

```json
[
{"id": "DON121-moins-1", "zone": "DON121", "pole": "-", "palier": 1, "nom": "Le lit de cendre", "cout": 1, "cible": 1, "effet": "La cible est marquée : +2 dégâts à chaque coup. Riposte 2.", "ops": [["vulnerable", "cible", 2], ["riposte", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Marque", "Riposte"], "ambiance": "Les bâtisseurs de Ta-Wehat ont tamisé la cendre des salles plus fin que la farine, pour y lire les pas.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON121-moins-2", "zone": "DON121", "pole": "-", "palier": 2, "nom": "La trace nouvelle", "cout": 1, "cible": 1, "effet": "Si la cible piétine ou charge : elle est marquée 1. Puis elle est marquée 2 et subit 6 dégâts. Le héros perd 1 PV.", "ops": [["si", "pietine", [["vulnerable", "cible", 1]]], ["vulnerable", "cible", 2], ["deg", "cible", 6], ["prixPV", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Marque", "Dégâts", "Prix"], "ambiance": "Chaque matin, Amenmose trouve dans la cendre une trace nouvelle, et ce n'est jamais la sienne.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "DON121-moins-3", "zone": "DON121", "pole": "-", "palier": 3, "nom": "Les pas sans retour", "cout": 1, "cible": 1, "effet": "La cible perd sa garde et est marquée 2. Riposte 3. Le héros perd 1 PV.", "ops": [["briseGarde", "cible"], ["vulnerable", "cible", 2], ["riposte", 3], ["prixPV", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Perce-garde", "Marque", "Riposte", "Prix"], "ambiance": "Les petits pas de la dernière salle vont de la porte au mur du fond, et ne reviennent pas.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "DON121-moins-4", "zone": "DON121", "pole": "-", "palier": 4, "nom": "La lampe qui fait briller", "cout": 2, "cible": 1, "effet": "Tous les ennemis sont marqués 1. Si la cible piétine ou charge : elle subit 10 dégâts. Elle en subit 16. Le héros perd 2 PV.", "ops": [["vulnerable", "tous", 1], ["si", "pietine", [["deg", "cible", 10]]], ["deg", "cible", 16], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Marque", "Condition", "Dégâts", "Prix"], "ambiance": "À la lumière des lampes, la cendre de Ta-Wehat brille, et les pas anciens se relèvent en creux.", "budget": "25,6 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "DON121-moins-5", "zone": "DON121", "pole": "-", "palier": 5, "nom": "Les couloirs comblés", "cout": 2, "cible": 1, "effet": "La cible est marquée 3. Elle subit 16 dégâts, qui ignorent sa garde. Le héros gagne 8 de garde. Le héros perd 2 PV.", "ops": [["vulnerable", "cible", 3], ["ignoreGarde"], ["deg", "cible", 16], ["garde", "heros", 8], ["prixPV", 2]], "tags": ["Donjon", "Feu", "Pôle −", "Marque", "Perce-garde", "Dégâts", "Garde", "Prix"], "ambiance": "Les couloirs comblés de cendre jusqu'aux genoux gardent la forme des jambes de ceux qui sont passés.", "budget": "32,4 (cible 32, écart +1 % ; vérifié au script)"},
{"id": "DON121-moins-6", "zone": "DON121", "pole": "-", "palier": 6, "nom": "Les pas que personne n'a faits", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : elle est marquée 2. Puis elle est marquée 3 et subit 18 dégâts. Riposte 4. Le héros perd 3 PV.", "ops": [["si", "pietine", [["vulnerable", "cible", 2]]], ["vulnerable", "cible", 3], ["deg", "cible", 18], ["riposte", 4], ["prixPV", 3]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Marque", "Dégâts", "Riposte", "Prix"], "ambiance": "Amenmose a fait sortir tous les ouvriers et ratisser la cendre ; au matin, les petits pas étaient revenus.", "budget": "35 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "DON121-moins-7", "zone": "DON121", "pole": "-", "palier": 7, "nom": "La Tombe pleine de cendre", "cout": 3, "cible": 1, "effet": "La cendre se souvient de tout. Tous les ennemis sont marqués 2 et perdent leur garde. La cible subit 22 dégâts. Héros +10 de garde, −3 PV. Pose Abîme. Si Sang (consommé) : la cible est marquée 3 et subit 18 dégâts ; héros +4 de garde.", "ops": [["vulnerable", "tous", 2], ["briseGarde", "tous"], ["deg", "cible", 22], ["garde", "heros", 10], ["prixPV", 3], ["pose", "Abîme"], ["reveil", "Sang", true, [["vulnerable", "cible", 3], ["deg", "cible", 18], ["garde", "heros", 4]]]], "tags": ["Donjon", "Feu", "Forme ultime −7", "Marque", "Perce-garde", "Dégâts", "Garde", "Prix", "Pose Abîme", "Réveil Sang"], "ambiance": "Ta-Wehat est pleine de cendre jusqu'aux plafonds, et chaque pas qu'on y fait y reste, à jamais imprimé.", "budget": "46,8 (+30,2 si Sang, soit +65 % ; vérifié au script)"}
]
```

### Pôle + Floraison

Progression : la graine germée, la pousse dans la cendre, la sève qui luit, les cloques, les ombelles, l'ombre qui brûle, puis la dune en fleur. Style : chaque carte pose une sève qui brûle tour après tour, et le gros coup tombe sur la cible restée seule. Prix : les tiges abritent aussi l'ennemi (garde ennemie), sur 6 cartes.

```json
[
{"id": "DON121-plus-1", "zone": "DON121", "pole": "+", "palier": 1, "nom": "La graine germée", "cout": 1, "cible": 1, "effet": "La cible subit 2 dégâts au début de ses 3 prochains tours. Le héros se soigne de 4.", "ops": [["brulure", "cible", 2, 3], ["soin", "heros", 4]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Soin"], "ambiance": "Les graines de la coupe de Ta-Wehat ont germé à l'ouverture, et leurs tiges cherchent la porte.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON121-plus-2", "zone": "DON121", "pole": "+", "palier": 2, "nom": "La pousse sous la cendre", "cout": 1, "cible": 1, "effet": "La cible subit 3 dégâts au début de ses 3 prochains tours. Si un seul ennemi reste : il subit 6 dégâts. Gagnez 1 mana de Feu. Chaque ennemi gagne 1 de garde.", "ops": [["brulure", "cible", 3, 3], ["si", "seul", [["deg", "cible", 6]]], ["mana", "Feu", 1], ["ennemiGarde", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Condition", "Dégâts", "Mana", "Prix"], "ambiance": "Les pousses percent la cendre des salles en une nuit, et la cendre, autour d'elles, devient grasse et douce.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON121-plus-3", "zone": "DON121", "pole": "+", "palier": 3, "nom": "La sève qui luit", "cout": 1, "cible": 0, "effet": "Tous les ennemis subissent 2 dégâts au début de leurs 3 prochains tours. Riposte 2. Chaque ennemi gagne 1 de garde.", "ops": [["brulure", "tous", 2, 3], ["riposte", 2], ["ennemiGarde", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Riposte", "Prix"], "ambiance": "La sève des pousses de Ta-Wehat luit dans le soleil des fentes ; à l'ombre, elle ne fait rien.", "budget": "15,2 (cible 15, écart +1 % ; vérifié au script)"},
{"id": "DON121-plus-4", "zone": "DON121", "pole": "+", "palier": 4, "nom": "Les cloques", "cout": 2, "cible": 1, "effet": "La cible subit 5 dégâts au début de ses 4 prochains tours. Si un seul ennemi reste : 3 de plus pendant 3 tours. Piochez 1 carte. Chaque ennemi gagne 1 de garde.", "ops": [["brulure", "cible", 5, 4], ["si", "seul", [["brulure", "cible", 3, 3]]], ["pioche", 1], ["ennemiGarde", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Condition", "Pioche", "Prix"], "ambiance": "Amenmose a frôlé une tige au soleil ; trois jours après, la cloque avait la forme exacte de la feuille.", "budget": "26,5 (cible 28, écart -5 % ; vérifié au script)"},
{"id": "DON121-plus-5", "zone": "DON121", "pole": "+", "palier": 5, "nom": "Les ombelles", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 2 dégâts au début de leurs 3 prochains tours. La cible subit 12 dégâts. Gagnez 2 mana de Feu. Chaque ennemi gagne 1 de garde.", "ops": [["brulure", "tous", 2, 3], ["deg", "cible", 12], ["mana", "Feu", 2], ["ennemiGarde", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Dégâts", "Mana", "Prix"], "ambiance": "Les ombelles de la dune s'ouvrent à midi, toutes à la même seconde, et l'air au-dessus d'elles ondule.", "budget": "29,2 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "DON121-plus-6", "zone": "DON121", "pole": "+", "palier": 6, "nom": "L'ombre qui brûle", "cout": 2, "cible": 1, "effet": "La cible subit 5 dégâts au début de ses 4 prochains tours. Si un seul ennemi reste : il subit 12 dégâts. Le héros gagne 10 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["brulure", "cible", 5, 4], ["si", "seul", [["deg", "cible", 12]]], ["garde", "heros", 10], ["ennemiGarde", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Dégâts dans le temps", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "À Ta-Wehat, on ne s'abrite pas à l'ombre des tiges : c'est là que la sève goutte, et elle brûle.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "DON121-plus-7", "zone": "DON121", "pole": "+", "palier": 7, "nom": "La Dune en fleur", "cout": 3, "cible": 1, "effet": "Le désert fleurit sur vous. Tous les ennemis brûlent, 3 par tour pendant 4 tours. La cible subit 16 dégâts. Héros +10 de garde ; ennemis +2. Pose Braise. Si Sceau (consommé) : piochez 2 cartes ; la cible brûle, 5 pendant 3 tours ; héros +8 de garde.", "ops": [["brulure", "tous", 3, 4], ["deg", "cible", 16], ["garde", "heros", 10], ["ennemiGarde", 2], ["pose", "Braise"], ["reveil", "Sceau", true, [["pioche", 2], ["brulure", "cible", 5, 3], ["garde", "heros", 8]]]], "tags": ["Donjon", "Feu", "Forme ultime +7", "Dégâts dans le temps", "Dégâts", "Garde", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "La dune au-dessus de Ta-Wehat est en fleur, et les caravanes la contournent d'une journée de marche.", "budget": "46,4 (+29,4 si Sceau, soit +63 % ; vérifié au script)"}
]
```

---

## Veal Chhngai, le Réservoir sous les Dunes (DON078 · Donjon · Désert de sable · Feu · khmère)

```json
{
 "fiche": "DON078",
 "nom": "Veal Chhngai, le Réservoir sous les Dunes",
 "recit": "Légende du plan du réservoir de Veal Chhngai, levé par Chhun Vireak. A : le temple, enterré jusqu'aux tours. B : la digue ouest, sous la dune. C : le réservoir, à sec ; le fond est de sable fin. D : les galeries d'eau, effondrées. E : les rizières, à sec. F : la source. Sur le terrain, nous n'avons trouvé ni F ni trace d'aucune source. Le plan a été levé en saison sèche. Nous sommes revenus à la fin de la saison suivante. Le réservoir était plein, et il ne pleut jamais ici.",
 "pal": [
  "Le sable a tout repris : seules les pointes des tours dépassent, la dune coule par les galeries, et les dalles cèdent sous le pas dans un souffle sec.",
  "Le réservoir est un lit de sable ; les galeries s'effondrent une à une, et le vent dépose des dunes sur les marches du temple.",
  "Temple khmer à demi enterré au bord d'un grand réservoir à sec : digues, tours en bouton de lotus, puits, et la dune qui avance.",
  "L'eau monte par le fond du réservoir ; des rizières vertes s'étendent sur le sable, et les greniers débordent de grain jusque sur les marches.",
  "Le réservoir déborde dans le désert ; le riz pousse jusqu'aux dunes, si dru qu'on marche dessus, et les bêtes du sable viennent y manger, énormes."
 ],
 "pm": "Ruine",
 "pp": "Abondance"
}
```

### Pôle − Ruine

Progression : la dalle qui cède, le souffle sec, le puits de descente, la galerie effondrée, la digue sous la dune, les tours enterrées, puis le temple repris. Style : pièges, riposte et gros coups ; on descend par les puits en piochant ce qu'on trouve, et contre une cible qui se garde, la dalle tombe plus lourd. Prix : la main qui glisse (défausse), sur 6 cartes.

```json
[
{"id": "DON078-moins-1", "zone": "DON078", "pole": "-", "palier": 1, "nom": "La dalle qui cède", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 4. Riposte 3.", "ops": [["soin", "heros", 4], ["riposte", 3]], "tags": ["Donjon", "Feu", "Pôle −", "Soin", "Riposte"], "ambiance": "Chhun Vireak a appris à marcher sur les dalles de Veal Chhngai en tâtant chacune du talon.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON078-moins-2", "zone": "DON078", "pole": "-", "palier": 2, "nom": "Le souffle sec", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : elle la perd. 3 coups de 3 dégâts au hasard. Piochez 1 carte. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["briseGarde", "cible"]]], ["deg", "hasard", 3, 3], ["pioche", 1], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Perce-garde", "Dégâts", "Pioche", "Prix"], "ambiance": "Quand une dalle cède, il en sort un souffle sec qui sent la pierre fendue et l'eau très ancienne.", "budget": "11,5 (cible 12,5, écart -8 % ; vérifié au script)"},
{"id": "DON078-moins-3", "zone": "DON078", "pole": "-", "palier": 3, "nom": "Le puits de descente", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes. Riposte 4. Le héros gagne 4 de garde. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["riposte", 4], ["garde", "heros", 4], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Pioche", "Riposte", "Garde", "Prix"], "ambiance": "On descend aux galeries par les puits, à la corde ; au fond, le sable est humide, sans eau.", "budget": "16,2 (cible 15, écart +8 % ; vérifié au script)"},
{"id": "DON078-moins-4", "zone": "DON078", "pole": "-", "palier": 4, "nom": "La galerie effondrée", "cout": 2, "cible": 1, "effet": "Tous les ennemis subissent 6 dégâts. Si la cible a de la garde : elle subit 10 dégâts. Riposte 4. La cible perd 2 d'attaque. Défaussez 1 carte au hasard.", "ops": [["deg", "tous", 6], ["si", "cibleGarde", [["deg", "cible", 10]]], ["riposte", 4], ["affaiblit", "cible", 2], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Dégâts", "Condition", "Riposte", "Affaiblissement", "Prix"], "ambiance": "La galerie D s'est effondrée derrière Chhun Vireak ; il est sorti par un puits absent de son plan.", "budget": "29,2 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "DON078-moins-5", "zone": "DON078", "pole": "-", "palier": 5, "nom": "La digue sous la dune", "cout": 2, "cible": 1, "effet": "La cible perd sa garde, hésite et subit 18 dégâts. Piochez 2 cartes. Défaussez 1 carte au hasard.", "ops": [["briseGarde", "cible"], ["hesite", "cible"], ["deg", "cible", 18], ["pioche", 2], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Perce-garde", "Contrôle", "Dégâts", "Pioche", "Prix"], "ambiance": "La digue ouest de Veal Chhngai tient encore sous la dune, et la dune, de ce côté, est mouillée.", "budget": "31 (cible 32, écart -3 % ; vérifié au script)"},
{"id": "DON078-moins-6", "zone": "DON078", "pole": "-", "palier": 6, "nom": "Les tours enterrées", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle subit 12 dégâts. Puis elle en subit 16. Tous les ennemis perdent 1 d'attaque. Le héros gagne 10 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 12]]], ["deg", "cible", 16], ["affaiblit", "tous", 1], ["garde", "heros", 10], ["prixDefausse", 1]], "tags": ["Donjon", "Feu", "Pôle −", "Condition", "Dégâts", "Affaiblissement", "Garde", "Prix"], "ambiance": "Des tours du temple ne dépassent que les boutons de lotus ; la nuit, le sable tinte contre elles.", "budget": "33,6 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "DON078-moins-7", "zone": "DON078", "pole": "-", "palier": 7, "nom": "Le Temple repris", "cout": 3, "cible": 1, "effet": "La dune entre au temple. La cible subit 20 dégâts ; tous les ennemis, 8, et perdent leur garde. Piochez 2 cartes. Défaussez 2 cartes au hasard. Pose Braise. Si Abîme (consommé) : la cible subit 16 dégâts ; tous hésitent ; piochez 1 carte.", "ops": [["deg", "cible", 20], ["deg", "tous", 8], ["briseGarde", "tous"], ["pioche", 2], ["prixDefausse", 2], ["pose", "Braise"], ["reveil", "Abîme", true, [["deg", "cible", 16], ["hesite", "tous"], ["pioche", 1]]]], "tags": ["Donjon", "Feu", "Forme ultime −7", "Dégâts", "Perce-garde", "Pioche", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "Le temple de Veal Chhngai a sombré sous la dune en une saison ; la dune en garde la forme.", "budget": "46,2 (+28,8 si Abîme, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Abondance

Progression : l'eau par le fond, la rizière sur le sable, les greniers qui débordent, le grain sur les marches, le riz qui monte, les bêtes du sable, puis le réservoir qui déborde. Style : mana de Feu, soin et garde du héros, et les bêtes qui viennent manger ; quand un ennemi va se soigner, la crue frappe. Prix : l'ennemi mange aussi (soin ennemi), sur 6 cartes.

```json
[
{"id": "DON078-plus-1", "zone": "DON078", "pole": "+", "palier": 1, "nom": "L'eau par le fond", "cout": 1, "cible": 1, "effet": "Gagnez 1 mana de Feu. Le héros se soigne de 4 et gagne 3 de garde. La cible perd 1 d'attaque. Chaque ennemi se soigne de 1.", "ops": [["mana", "Feu", 1], ["soin", "heros", 4], ["garde", "heros", 3], ["affaiblit", "cible", 1], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Mana", "Soin", "Garde", "Affaiblissement", "Prix"], "ambiance": "L'eau monte par le fond du réservoir de Veal Chhngai, sans un bruit, et elle est froide comme un puits.", "budget": "10,2 (cible 10, écart +2 % ; vérifié au script)"},
{"id": "DON078-plus-2", "zone": "DON078", "pole": "+", "palier": 2, "nom": "La rizière sur le sable", "cout": 1, "cible": 1, "effet": "Si un ennemi s'apprête à se soigner : la cible subit 8 dégâts. Puis elle en subit 6. Le héros gagne 3 de garde.", "ops": [["si", "soinEnnemi", [["deg", "cible", 8]]], ["deg", "cible", 6], ["garde", "heros", 3]], "tags": ["Donjon", "Feu", "Pôle +", "Condition", "Dégâts", "Garde"], "ambiance": "Les rizières de Veal Chhngai verdissent sur le sable nu ; personne ne les a plantées, ni ne les récolte.", "budget": "12,4 (cible 12,5, écart -1 % ; vérifié au script)"},
{"id": "DON078-plus-3", "zone": "DON078", "pole": "+", "palier": 3, "nom": "Les greniers qui débordent", "cout": 1, "cible": 0, "effet": "Gagnez 2 mana de Feu. Le héros se soigne de 6 et gagne 6 de garde. Chaque ennemi se soigne de 1.", "ops": [["mana", "Feu", 2], ["soin", "heros", 6], ["garde", "heros", 6], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Mana", "Soin", "Garde", "Prix"], "ambiance": "Les greniers du temple débordent de grain jusque sur les marches, et le grain y germe sans eau.", "budget": "14,6 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "DON078-plus-4", "zone": "DON078", "pole": "+", "palier": 4, "nom": "Le grain sur les marches", "cout": 2, "cible": 1, "effet": "Un buffle du réservoir vient manger le grain : 18 PV, frappe 5. La cible subit 10 dégâts. Si un ennemi s'apprête à se soigner : le héros gagne 6 de garde. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Buffle du réservoir", 18, 5], ["deg", "cible", 10], ["si", "soinEnnemi", [["garde", "heros", 6]]], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Invocation", "Dégâts", "Condition", "Garde", "Prix"], "ambiance": "Le buffle qui mange le grain sur les marches du temple n'a pas de troupeau, et il grandit.", "budget": "26,7 (cible 28, écart -5 % ; vérifié au script)"},
{"id": "DON078-plus-5", "zone": "DON078", "pole": "+", "palier": 5, "nom": "Le riz qui monte", "cout": 2, "cible": 0, "effet": "Gagnez 2 mana de Feu. Le héros se soigne de 14. Riposte 6. Chaque ennemi se soigne de 1.", "ops": [["mana", "Feu", 2], ["soin", "heros", 14], ["riposte", 6], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Mana", "Soin", "Riposte", "Prix"], "ambiance": "Le riz de Veal Chhngai monte d'une main par nuit, et le matin les épis sont lourds et chauds.", "budget": "29,8 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "DON078-plus-6", "zone": "DON078", "pole": "+", "palier": 6, "nom": "Les bêtes du sable", "cout": 2, "cible": 1, "effet": "Des lézards du sable viennent manger le riz : 20 PV, frappe 6. Si un ennemi s'apprête à se soigner : la cible subit 14 dégâts. Elle en subit 10. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Lézards du riz", 20, 6], ["si", "soinEnnemi", [["deg", "cible", 14]]], ["deg", "cible", 10], ["ennemiSoin", 1]], "tags": ["Donjon", "Feu", "Pôle +", "Invocation", "Condition", "Dégâts", "Prix"], "ambiance": "Les lézards du sable viennent manger le riz la nuit, et ils repartent vers les dunes, gros comme des chiens.", "budget": "33,8 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "DON078-plus-7", "zone": "DON078", "pole": "+", "palier": 7, "nom": "Le Réservoir qui déborde", "cout": 3, "cible": 1, "effet": "Le riz pousse jusqu'aux dunes. Des bêtes du riz (24 PV, frappe 7). La cible subit 16 dégâts. 2 mana de Feu. Héros soigné de 8. Ennemis soignés de 2. Pose Sceau. Si Sang (consommé) : la cible subit 16 dégâts ; héros soigné de 8 ; 2 mana de Feu.", "ops": [["invoque", "Bêtes du riz", 24, 7], ["deg", "cible", 16], ["mana", "Feu", 2], ["soin", "heros", 8], ["ennemiSoin", 2], ["pose", "Sceau"], ["reveil", "Sang", true, [["deg", "cible", 16], ["soin", "heros", 8], ["mana", "Feu", 2]]]], "tags": ["Donjon", "Feu", "Forme ultime +7", "Invocation", "Dégâts", "Mana", "Soin", "Prix", "Pose Sceau", "Réveil Sang"], "ambiance": "Le réservoir déborde dans le désert, et le riz de Veal Chhngai pousse sur les dunes, plus dru qu'une natte.", "budget": "48,1 (+30 si Sang, soit +62 % ; vérifié au script)"}
]
```

---

## Belolëd, la Citadelle du Glacier (CIT034 · Citadelle · Glacier · Glace · slave)

```json
{
 "fiche": "CIT034",
 "nom": "Belolëd, la Citadelle du Glacier",
 "recit": "Sermon du père Ostromir à la garnison de Belolëd, le dimanche où la neige a rougi. Frères, la neige rouge n'est pas du sang. Elle pousse au soleil, comme la mousse sur les murs, et elle ne fait pas de mal. Ceux qui ont dormi dans le champ rouge sont revenus au matin les joues chaudes, et ils n'ont plus froid. Ce n'est pas une grâce. Ne vous y couchez pas. La glace bleue du col, elle, ne cache rien : on y voit les morts de l'autre guerre, debout. Priez pour eux. Ils ont l'air d'attendre la relève.",
 "pal": [
  "Le glacier est rouge d'un bord à l'autre ; la neige poisse sous la botte, les remparts suintent, et les sentinelles dorment debout, les joues brûlantes.",
  "Des plaques rouges gagnent la neige au soleil ; elles montent le long des murs, et des soldats se couchent dedans à la pause, sans avoir froid.",
  "Citadelle de rondins et de pierre sur un glacier : palissade, bulbe de la chapelle, crevasses, et la garnison en pelisses autour des braseros.",
  "La neige rouge recule ; les murs sont grattés à vif, la glace du col redevient bleue, et les soldats se lavent à l'eau de fonte matin et soir.",
  "Le glacier est d'un blanc parfait : plus une algue, plus une mousse, plus une odeur ; les remparts brillent, et rien ne vit à une lieue, sauf la garnison."
 ],
 "pm": "Corruption",
 "pp": "Pureté"
}
```

### Pôle − Corruption

Progression : la plaque rouge, le champ rouge, le soldat couché dans la neige, les remparts qui suintent, la relève aux joues chaudes, les sentinelles debout, puis la garnison rouge. Style : la neige rouge lève des soldats et les soigne ; si un soldat est déjà là, elle en fait plus. Prix : le soldat le plus faible s'y use (bête), sur 6 cartes.

```json
[
{"id": "CIT034-moins-1", "zone": "CIT034", "pole": "-", "palier": 1, "nom": "La plaque rouge", "cout": 1, "cible": 0, "effet": "Une sentinelle aux joues rouges prend son poste : 8 PV, frappe 2. Vos alliés se soignent de 2.", "ops": [["invoque", "Sentinelle aux joues rouges", 8, 2], ["soin", "allies", 2]], "tags": ["Citadelle", "Glace", "Pôle −", "Invocation", "Soin"], "ambiance": "La première plaque rouge est apparue sous la fenêtre du père Ostromir, la veille d'un dimanche.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "CIT034-moins-2", "zone": "CIT034", "pole": "-", "palier": 2, "nom": "Le champ rouge", "cout": 1, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 4 dégâts. Puis elle en subit 6. Vos alliés gagnent 4 de garde. Votre bête la plus faible perd 1 PV.", "ops": [["si", "bete", [["deg", "cible", 4]]], ["deg", "cible", 6], ["garde", "allies", 4], ["prixBete", 1]], "tags": ["Citadelle", "Glace", "Pôle −", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Ceux qui ont dormi dans le champ rouge de Belolëd ont rêvé de la même chose, et n'en disent rien.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "CIT034-moins-3", "zone": "CIT034", "pole": "-", "palier": 3, "nom": "Le soldat couché dans la neige", "cout": 1, "cible": 1, "effet": "Un soldat se relève de la neige rouge : 12 PV, frappe 3. La cible perd 2 d'attaque. Votre bête la plus faible perd 2 PV.", "ops": [["invoque", "Soldat de la neige rouge", 12, 3], ["affaiblit", "cible", 2], ["prixBete", 2]], "tags": ["Citadelle", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Le soldat couché dans la neige rouge s'est relevé sans grelotter ; sa pelisse fumait.", "budget": "14,5 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "CIT034-moins-4", "zone": "CIT034", "pole": "-", "palier": 4, "nom": "Les remparts qui suintent", "cout": 2, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : tous les ennemis subissent 4 dégâts. La cible subit 14 dégâts. Riposte 4. Votre bête la plus faible perd 2 PV.", "ops": [["si", "bete", [["deg", "tous", 4]]], ["deg", "cible", 14], ["riposte", 4], ["prixBete", 2]], "tags": ["Citadelle", "Glace", "Pôle −", "Condition", "Dégâts", "Riposte", "Prix"], "ambiance": "Les remparts de Belolëd suintent une eau rouge au soleil de midi, et les soldats y posent les mains.", "budget": "24,4 (cible 28, écart -13 % ; vérifié au script)"},
{"id": "CIT034-moins-5", "zone": "CIT034", "pole": "-", "palier": 5, "nom": "La relève aux joues chaudes", "cout": 2, "cible": 0, "effet": "La relève monte du champ rouge : 22 PV, frappe 6. Vos alliés se soignent de 6. Tous les ennemis perdent 1 d'attaque. Votre bête la plus faible perd 3 PV.", "ops": [["invoque", "Relève rouge", 22, 6], ["soin", "allies", 6], ["affaiblit", "tous", 1], ["prixBete", 3]], "tags": ["Citadelle", "Glace", "Pôle −", "Invocation", "Soin", "Affaiblissement", "Prix"], "ambiance": "La relève aux joues chaudes n'a plus besoin de braseros ; elle dort dehors, et le père Ostromir prie seul.", "budget": "32,6 (cible 32, écart +2 % ; vérifié au script)"},
{"id": "CIT034-moins-6", "zone": "CIT034", "pole": "-", "palier": 6, "nom": "Les sentinelles debout", "cout": 2, "cible": 1, "effet": "Si une bête alliée est déjà en jeu : la cible subit 12 dégâts. Tous les ennemis subissent 6 dégâts. Vos alliés gagnent 8 de garde et se soignent de 4. La cible hésite. Votre bête la plus faible perd 3 PV.", "ops": [["si", "bete", [["deg", "cible", 12]]], ["deg", "tous", 6], ["garde", "allies", 8], ["soin", "allies", 4], ["hesite", "cible"], ["prixBete", 3]], "tags": ["Citadelle", "Glace", "Pôle −", "Condition", "Dégâts", "Garde", "Soin", "Contrôle", "Prix"], "ambiance": "Les sentinelles de Belolëd dorment debout, les yeux ouverts, et ne manquent jamais une relève.", "budget": "36,8 (cible 36, écart +2 % ; vérifié au script)"},
{"id": "CIT034-moins-7", "zone": "CIT034", "pole": "-", "palier": 7, "nom": "La Garnison rouge", "cout": 3, "cible": 1, "effet": "La neige commande la garnison. Une compagnie rouge (30 PV, frappe 8). Alliés soignés de 10 ; la cible subit 10 dégâts. Votre bête la plus faible perd 5 PV. Pose Sang. Si Abîme (consommé) : sentinelles (14 PV, frappe 4), 10 dégâts, alliés +4 PV.", "ops": [["invoque", "Compagnie rouge", 30, 8], ["soin", "allies", 10], ["deg", "cible", 10], ["prixBete", 5], ["pose", "Sang"], ["reveil", "Abîme", true, [["invoque", "Sentinelles rouges", 14, 4], ["deg", "cible", 10], ["soin", "allies", 4]]]], "tags": ["Citadelle", "Glace", "Forme ultime −7", "Invocation", "Soin", "Dégâts", "Prix", "Pose Sang", "Réveil Abîme"], "ambiance": "La garnison rouge de Belolëd ne descend plus du glacier ; elle n'a plus froid, ni faim, ni ordres.", "budget": "47 (+29 si Abîme, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Pureté

Progression : la neige grattée, l'eau de fonte, la glace du col, les remparts à vif, le blanc parfait, rien ne vit à une lieue, puis la citadelle blanche. Style : garde du héros et des alliés, riposte, et ennemis figés quand ils piétinent ou chargent ; mais sur le blanc, l'ennemi voit venir et se garde. Prix : garde ennemie, sur 6 cartes.

```json
[
{"id": "CIT034-plus-1", "zone": "CIT034", "pole": "+", "palier": 1, "nom": "La neige grattée", "cout": 1, "cible": 0, "effet": "Le héros gagne 8 de garde. Riposte 2.", "ops": [["garde", "heros", 8], ["riposte", 2]], "tags": ["Citadelle", "Glace", "Pôle +", "Garde", "Riposte"], "ambiance": "Le père Ostromir fait gratter la neige rouge au pied des murs, à la pelle de bois, jusqu'à la glace.", "budget": "10,4 (cible 10, écart +4 % ; vérifié au script)"},
{"id": "CIT034-plus-2", "zone": "CIT034", "pole": "+", "palier": 2, "nom": "L'eau de fonte", "cout": 1, "cible": 1, "effet": "Si la cible piétine ou charge : elle hésite. Vos alliés gagnent 6 de garde. La cible perd 2 d'attaque. Chaque ennemi gagne 1 de garde.", "ops": [["si", "pietine", [["hesite", "cible"]]], ["garde", "allies", 6], ["affaiblit", "cible", 2], ["ennemiGarde", 1]], "tags": ["Citadelle", "Glace", "Pôle +", "Condition", "Contrôle", "Garde", "Affaiblissement", "Prix"], "ambiance": "Les soldats de Belolëd se lavent à l'eau de fonte matin et soir, et ils ont les mains bleues.", "budget": "13,7 (cible 12,5, écart +10 % ; vérifié au script)"},
{"id": "CIT034-plus-3", "zone": "CIT034", "pole": "+", "palier": 3, "nom": "La glace du col", "cout": 1, "cible": 0, "effet": "Le héros gagne 12 de garde. Piochez 1 carte. Gagnez 1 mana de Glace. Chaque ennemi gagne 1 de garde.", "ops": [["garde", "heros", 12], ["pioche", 1], ["mana", "Glace", 1], ["ennemiGarde", 1]], "tags": ["Citadelle", "Glace", "Pôle +", "Garde", "Pioche", "Mana", "Prix"], "ambiance": "Dans la glace bleue du col, on voit les morts de l'autre guerre ; ils ont tous les yeux ouverts.", "budget": "14,6 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "CIT034-plus-4", "zone": "CIT034", "pole": "+", "palier": 4, "nom": "Les remparts à vif", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : elle subit 10 dégâts. Vos alliés gagnent 10 de garde. Riposte 4. La cible subit 6 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "pietine", [["deg", "cible", 10]]], ["garde", "allies", 10], ["riposte", 4], ["deg", "cible", 6], ["ennemiGarde", 1]], "tags": ["Citadelle", "Glace", "Pôle +", "Condition", "Dégâts", "Garde", "Riposte", "Prix"], "ambiance": "Les remparts grattés à vif brillent au soleil de Belolëd, et l'on voit l'ennemi venir de très loin.", "budget": "29 (cible 28, écart +4 % ; vérifié au script)"},
{"id": "CIT034-plus-5", "zone": "CIT034", "pole": "+", "palier": 5, "nom": "Le blanc parfait", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent leur garde. La cible subit 14 dégâts. Le héros gagne 10 de garde. Piochez 1 carte. Chaque ennemi gagne 1 de garde.", "ops": [["briseGarde", "tous"], ["deg", "cible", 14], ["garde", "heros", 10], ["pioche", 1], ["ennemiGarde", 1]], "tags": ["Citadelle", "Glace", "Pôle +", "Perce-garde", "Dégâts", "Garde", "Pioche", "Prix"], "ambiance": "Sur le blanc parfait du glacier, la moindre trace se voit d'une lieue, et l'ennemi le sait.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "CIT034-plus-6", "zone": "CIT034", "pole": "+", "palier": 6, "nom": "Rien ne vit à une lieue", "cout": 2, "cible": 1, "effet": "Si la cible piétine ou charge : tous les ennemis hésitent. La cible subit 16 dégâts et perd 2 d'attaque. Vos alliés gagnent 10 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "pietine", [["hesite", "tous"]]], ["deg", "cible", 16], ["affaiblit", "cible", 2], ["garde", "allies", 10], ["ennemiGarde", 1]], "tags": ["Citadelle", "Glace", "Pôle +", "Condition", "Contrôle", "Dégâts", "Affaiblissement", "Garde", "Prix"], "ambiance": "Autour de Belolëd, plus un lichen, plus une mouche ; le père Ostromir appelle cela la paix.", "budget": "36,4 (cible 36, écart +1 % ; vérifié au script)"},
{"id": "CIT034-plus-7", "zone": "CIT034", "pole": "+", "palier": 7, "nom": "La Citadelle blanche", "cout": 3, "cible": 1, "effet": "Plus rien ne vit ici. Héros +18 de garde, alliés +12. La cible hésite et subit 16 dégâts. Chaque ennemi gagne 2 de garde. Pose Givre. Si Braise (consommée) : tous brûlent, 2 par tour pendant 3 tours ; la cible subit 10 dégâts ; héros +6 de garde.", "ops": [["garde", "heros", 18], ["garde", "allies", 12], ["hesite", "cible"], ["deg", "cible", 16], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Braise", true, [["brulure", "tous", 2, 3], ["deg", "cible", 10], ["garde", "heros", 6]]]], "tags": ["Citadelle", "Glace", "Forme ultime +7", "Garde", "Contrôle", "Dégâts", "Prix", "Pose Givre", "Réveil Braise"], "ambiance": "La citadelle blanche de Belolëd brille sur un glacier sans une algue, et la garnison n'y a plus d'odeur.", "budget": "45,8 (+28 si Braise, soit +61 % ; vérifié au script)"}
]
```

---

## Ressources

### Les Gluaux de Nubifera (RES050 · Îles flottantes, Vent, romaine)

```json
{
 "fiche": "RES050",
 "nom": "Les Gluaux de Nubifera",
 "recit": "À l'automne, les grives qui traversent le ciel se posent pour la nuit sur les îles de Nubifera. Les esclaves plantent des gluaux dans les arbustes du rebord ; au matin, on décolle les oiseaux un à un. Certains matins, les baguettes portent des plumes d'oiseaux que personne ne connaît.",
 "pal": [
  "Quelques arbustes tordus au bord de l'île, des baguettes engluées plantées dans les branches, et des grives prises qui battent encore des ailes.",
  "Le rebord de l'île est hérissé de gluaux sur toute sa longueur ; les grives arrivent par nuées, et les esclaves les décollent à deux mains jusqu'au soir."
 ]
}
```

### Les Lucioles de Kurehama (RES076 · Mangrove, Eau, japonaise féodale)

```json
{
 "fiche": "RES076",
 "nom": "Les Lucioles de Kurehama",
 "recit": "À Kurehama, au crépuscule d'été, les enfants entrent dans la mangrove avec des éventails de papier et font tomber les lucioles dans des manches de gaze, pour les jardins du château. Dans les palétuviers, les lucioles s'allument et s'éteignent toutes ensemble, au même battement, comme un cœur.",
 "pal": [
  "Quelques lucioles dans les racines des palétuviers, des enfants aux éventails, et des manches de gaze qui luisent faiblement sur la vase.",
  "Des milliers de lucioles battent ensemble dans la mangrove, à la même seconde ; les manches de gaze luisent aux proues des barques, et la nuit entière clignote."
 ]
}
```

### Le Khat d'Amba Tsehay (RES275 · Volcan, Feu, éthiopienne)

```json
{
 "fiche": "RES275",
 "nom": "Le Khat d'Amba Tsehay",
 "recit": "Sur les pentes chaudes d'Amba Tsehay, les femmes cueillent à l'aube les pousses tendres du khat, qu'on mâche pour veiller. Le cône fume au-dessus des terrasses. Les arbustes les plus proches de la fumerolle donnent les feuilles les plus vertes. On ne les cueille jamais.",
 "pal": [
  "Des terrasses de pierre noire au flanc du cône, quelques arbustes de khat, et des femmes qui cueillent dans la fumée du matin.",
  "Les terrasses montent jusqu'à la fumerolle, vertes d'un bout à l'autre ; les fagots de feuilles descendent à dos d'âne, encore humides de vapeur."
 ]
}
```

### Les Gués de Chak-Sayab (RES304 · Toundra, Glace, maya)

```json
{
 "fiche": "RES304",
 "nom": "Les Gués de Chak-Sayab",
 "recit": "Au dégel, les gens de Chak-Sayab entrent jambes nues dans les rivières de la toundra et cherchent du pied les galets de jade. On reconnaît le jade au froid : il reste glacé dans la main quand l'eau le quitte. Certains restent glacés toute la nuit, posés près du feu.",
 "pal": [
  "Une rivière de dégel entre des berges de mousse, quelques chercheurs immobiles dans le courant, et des galets verts posés sur une peau.",
  "Les gués sont pleins de gens jambes nues, côte à côte, qui tâtent le fond du pied ; sur les berges, le jade s'empile en tas verts et luisants."
 ]
}
```

### Les Jasmins de Chameli-Bagh (RES342 · Oasis, Sève, moghole)

```json
{
 "fiche": "RES342",
 "nom": "Les Jasmins de Chameli-Bagh",
 "recit": "Dans l'oasis de Chameli-Bagh, on cueille le jasmin avant le soleil, quand les fleurs sont encore fermées, pour l'essence des bains de la cour. Les cueilleuses travaillent dans le noir, à l'odeur seule. Elles disent que les buissons se tournent vers elles quand elles arrivent.",
 "pal": [
  "Des buissons de jasmin au bord d'un bassin, quelques cueilleuses dans l'ombre de l'aube, et des fleurs blanches sur un drap.",
  "Les jasmins couvrent l'oasis jusqu'aux palmiers ; les draps de fleurs s'étendent sur le sable, et l'odeur arrête les caravanes au loin."
 ]
}
```

### Les Miroirs de Tlachialoyan (RES060 · Cavernes cristallines, Pierre, aztèque)

```json
{
 "fiche": "RES060",
 "nom": "Les Miroirs de Tlachialoyan",
 "recit": "Dans la grotte de Tlachialoyan, la pyrite pousse en cubes parfaits dans la paroi. Les polisseurs les détachent au ciseau d'os et les polissent au sable en miroirs pour les prêtres. Dans les miroirs de cette grotte, la flamme des torches monte un peu plus haut qu'en vrai.",
 "pal": [
  "Une paroi semée de cubes dorés, quelques polisseurs à la lueur des torches, et des éclats de pyrite dans le sable du sol.",
  "Des miroirs polis sont posés partout dans la grotte ; chacun renvoie la torche à un autre, et la lumière court de miroir en miroir jusqu'au fond."
 ]
}
```

### L'Argousaie de Chatsargan-Nuur (RES027 · Marais, Sève, mongole)

```json
{
 "fiche": "RES027",
 "nom": "L'Argousaie de Chatsargan-Nuur",
 "recit": "Au premier gel, les familles de Chatsargan-Nuur coupent les rameaux d'argousier chargés et les hissent sur le toit des yourtes, où ils gèlent. L'hiver, on gratte les baies dures au couteau, au-dessus d'un bol. On en tire une huile pour les brûlures. Les fourrés taillés portent le plus l'automne d'après.",
 "pal": [
  "Des fourrés épineux au bord du marais gelé, des baies orange sur les branches, et un rameau coupé posé sur le toit d'une yourte.",
  "Tous les toits du campement hérissés de rameaux gelés, orange de baies ; devant chaque porte, quelqu'un gratte au couteau au-dessus d'un bol."
 ]
}
```

### Les Élytres de Boscoverde (RES014 · Jungle, Sève, vénitienne)

```json
{
 "fiche": "RES014",
 "nom": "Les Élytres de Boscoverde",
 "recit": "À Boscoverde, les ramasseurs sortent la nuit avec une lampe et cueillent sur les troncs des coléoptères aux élytres de métal vert, qui partent vers les ateliers de marqueterie de la lagune. Ils dépouillent toujours les mêmes troncs. Chaque nuit, les insectes y sont revenus.",
 "pal": [
  "Quelques troncs dans le noir de la jungle, une lampe à huile, et des insectes verts qui luisent sur l'écorce.",
  "Les troncs sont couverts d'élytres luisants du pied à la cime ; les ramasseurs les détachent à pleines mains, et les troncs brillent encore derrière eux."
 ]
}
```

### Les Oliviers du Vide d'Almenara-Alta (RES010 · Îles flottantes, Vent, andalouse)

```json
{
 "fiche": "RES010",
 "nom": "Les Oliviers du Vide d'Almenara-Alta",
 "recit": "Sur l'île d'Almenara-Alta, les oliviers du bord penchent au-dessus du vide. À la récolte, on tend sous eux des bâches attachées au rocher et on gaule les branches. Les olives qui manquent la bâche tombent dans les nuages ; on dit qu'elles poussent ailleurs, plus bas.",
 "pal": [
  "Quelques oliviers penchés au bord de l'île, une bâche qui pend dans le vide, et des gauleurs qui frappent les branches.",
  "Les bâches pendent sous l'île tout le long du bord, lourdes d'olives noires, et les gaules battent les branches au-dessus des nuages."
 ]
}
```

### La Madrague d'Isla Atunera (RES206 · Archipel, Eau, andalouse)

```json
{
 "fiche": "RES206",
 "nom": "La Madrague d'Isla Atunera",
 "recit": "Chaque printemps, les pêcheurs d'Isla Atunera tendent entre deux îlots le labyrinthe de filets de la madrague. Les thons y entrent seuls et vont jusqu'à la chambre. Quand elle est pleine, on la lève à la main, en chantant. Le patron dit que les thons ne cherchent pas la sortie.",
 "pal": [
  "Des barques ancrées autour d'un carré de flotteurs, des filets tendus entre deux îlots, et l'eau calme au-dessus de la chambre.",
  "La chambre bouillonne de thons entre les barques ; les hommes lèvent le filet à la main en chantant, et l'eau autour des îlots se trouble."
 ]
}
```

### Les Couteaux de Caño Salado (RES030 · Mangrove, Eau, andalouse)

```json
{
 "fiche": "RES030",
 "nom": "Les Couteaux de Caño Salado",
 "recit": "À marée basse, les femmes de Caño Salado marchent sur la vase et versent une pincée de sel dans chaque petit trou. Le coquillage qui vit dessous sort aussitôt, droit comme un couteau, et on le cueille. Certains trous salés ne rendent rien ; de là monte un souffle.",
 "pal": [
  "Une vase luisante entre les palétuviers, des trous minuscules, et des femmes penchées qui versent le sel du bout des doigts.",
  "La vase est hérissée de coquilles dressées à perte de vue ; on les cueille à deux mains, et la mangrove sent le sel et l'iode."
 ]
}
```

### Les Murex de Rupes Purpurea (RES229 · Falaise côtière, Vent, romaine)

```json
{
 "fiche": "RES229",
 "nom": "Les Murex de Rupes Purpurea",
 "recit": "Au pied de la falaise de Rupes Purpurea, les esclaves de l'atelier cassent au marteau les coquilles de murex et en tirent une glande blanche qui, au soleil, devient pourpre. L'odeur monte jusqu'au phare. Les mouettes, si voraces ailleurs, ne se posent jamais sur les tas.",
 "pal": [
  "Quelques tas de coquilles brisées sous la falaise, des esclaves au marteau, et une tache violette qui sèche sur une pierre plate.",
  "Les monticules de coquilles dépassent les toits de l'atelier ; les étoffes pourpres sèchent sur la falaise, et le vent porte l'odeur jusqu'au large."
 ]
}
```

### Les Chaudrons de Campi Grassi (RES045 · Steppe, Vent, vénitienne)

```json
{
 "fiche": "RES045",
 "nom": "Les Chaudrons de Campi Grassi",
 "recit": "Dans la steppe de Campi Grassi, les bergers engraissent des moutons à queue lourde et fondent la graisse des queues dans des chaudrons de cuivre ; le suif part vers les chandeliers de la lagune. Les chandelles de Campi Grassi brûlent sans fumée, et leur flamme sent l'herbe mouillée.",
 "pal": [
  "Un troupeau de moutons aux queues larges, un chaudron fumant sur un feu d'herbes, et des pains de suif blanc posés sur une natte.",
  "Des fumées grasses s'élèvent de chaque campement sur toute la steppe ; les pains de suif s'empilent sur les chariots, et les moutons broutent alentour."
 ]
}
```

### Les Affûtoirs de Togiyama (RES308 · Cavernes cristallines, Pierre, japonaise féodale)

```json
{
 "fiche": "RES308",
 "nom": "Les Affûtoirs de Togiyama",
 "recit": "Au fond des grottes de Togiyama, un banc de pierre fine se détache en dalles. Les tailleurs la découpent en pierres à aiguiser pour les forgerons de sabres. Une lame passée sur cette pierre coupe mieux qu'aucune autre. Les tailleurs, eux, n'ont plus d'empreintes au bout des doigts.",
 "pal": [
  "Une galerie basse, un banc de pierre pâle dans la paroi, et quelques dalles taillées qui trempent dans une flaque.",
  "Les pierres à aiguiser trempent en rangs dans les bassins de la grotte ; le bruit des scies à eau monte de partout, régulier comme un souffle."
 ]
}
```

### Les Renardières d'Iglunnguit (RES210 · Cité en ruines, Pierre, inuit)

```json
{
 "fiche": "RES210",
 "nom": "Les Renardières d'Iglunnguit",
 "recit": "Dans les salles effondrées d'Iglunnguit, les renards blancs gîtent sous les dalles. Les chasseurs posent des pièges de pierre à l'entrée des salles et reviennent chaque matin. Les renards d'Iglunnguit ont le pelage plus épais qu'ailleurs ; ils ne quittent jamais les ruines, même l'été.",
 "pal": [
  "Quelques salles sans toit sous la neige, des traces de renard entre les dalles, et un piège de pierre refermé.",
  "Les ruines sont tracées de pistes de renards d'une salle à l'autre ; les peaux blanches sèchent tendues sur les murs, et les pièges claquent la nuit."
 ]
}
```

### Les Ferrières d'oKhuni (RES067 · Forêt boréale, Glace, zouloue)

```json
{
 "fiche": "RES067",
 "nom": "Les Ferrières d'oKhuni",
 "recit": "Dans la tourbière d'oKhuni, sous les épicéas, les forgerons sondent à la perche et lèvent à la bêche des mottes de fer brun. Ils les fondent dans des fourneaux d'argile, au soufflet de peau. La tourbière refait son fer en une génération. Près des fosses, l'eau a goût de sang.",
 "pal": [
  "Quelques fosses rouillées entre les épicéas, des mottes brunes sur la mousse, et la fumée d'un fourneau d'argile.",
  "Les fosses criblent la tourbière jusqu'au fleuve gelé ; les fourneaux rougeoient en ligne sous les arbres, et les soufflets battent jour et nuit."
 ]
}
```
