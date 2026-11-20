# Lot 5 : carte des familles, conteur D (le Lovecraftien)

Écrite avant les cartes. **Mise à jour à 05 h 50** : familles_C.md a été écrit dix secondes avant la première version de ce fichier (05 h 43 min 46 s contre 05 h 43 min 56 s) ; C garde donc ses familles sur nos quatre couples communs, et D a changé trois pôles (voir « Collisions avec C »). Format : pôle → famille principale (5 cartes ou plus, réveil compris), famille d'appoint, crochet (condition `si`, 2 à 4 cartes ; une seule exception chez D, l'enchaînement de DON076 Vie, qui est sa famille).

Règles tenues chez D : une famille principale dans 2 pôles au plus ; familles plafonnées au lot (hésitation, hasard, vol de vie, écho, enchaînement) : D en prend **trois, une fois chacune** (hésitation ANT162 −, écho ASS008 +, enchaînement DON076 +), **ni hasard ni vol de vie** en principal ; « tous » sur 3 cartes sur 7 au plus ; exil et récupération sur 4 cartes au plus par pôle ; plus de `defausseCommune` ; une même famille d'appoint dans 3 pôles au plus ; toute carte qui vise ou teste un ennemi précis porte `"cible":1` et dit « la cible ».

## Pôles (version finale, comptée au script sur les cartes remises)

| Zone | Pôle | Famille principale | Appoint (2 à 4 cartes) | Crochet |
|---|---|---|---|---|
| ANT038 (Jungle, moghole) | Tempête − | **Perce-garde** ciblée, 7 cartes (la mousson arrache les abris) | bêtes de mousson (4), dégâts à tous (2) ; prix en PV | `cibleGarde` (3) |
| ANT038 | Calme + | **Riposte**, 7 (le tigre immobile sous la pluie arrêtée) | bêtes (4), soin du héros (4) | `elan` (3) |
| ANT162 (Récif, grecque) | Mensonge − | **Hésitation** ciblée, 7 (les leurres du récif ; « tous » sur 1 carte) | bêtes-leurres (5, vocation d'Antre) ; défausse en prix | `pietine` (3) |
| ANT162 | Vérité + | **Marque**, 7 (le fond qui se montre) | pioche (4), bêtes du fond (3) | `seul` (3) |
| ANT126 (Savane, khmère) | Oubli − | **Brûlure** ciblée, 7 (le feu de brousse efface les pistes) | affaiblissement (4), éléphants égarés (3) | `brule` (3) |
| ANT126 | Mémoire + | **Soin des alliés**, 7 (le troupeau revient chercher ses blessés) | éléphants (4), garde des alliés (4) | `bete` (3) |
| ANT047 (Marais, nordique) | Brume − | **Invocations**, 7 (ce qui marche dans la brume) | affaiblissement (4) ; prix sur la bête | `vol` (3) |
| ANT047 | Clarté + | **Soin du héros**, 7 (l'eau claire de la tourbière) | garde du héros (4), bêtes de l'eau claire (4) | `blesse` (3) |
| ANT108 (Mangrove, romaine) | Cendre − | **Affaiblissement** ciblé, 7 (la cendre étouffe) | brûlure (4), crabes et hérons de cendre (4) | `soinEnnemi` (3) |
| ANT108 | Floraison + | **Mana** d'Eau, 7 (la floraison sous l'eau) | bêtes des corolles (4), soin des alliés (4) | `bete` (3) |
| ASS068 (Fjord, grecque) | Exil − | **Pioche**, Lois, 7 (l'ostracisme ; défausse en prix) | hésitation ciblée (3), récupération (3), exil (1) | `defausseAPrix` (3) |
| ASS068 | Foyer + | **Brûlure**, Lois, 7 (le feu commun) | garde du héros (4) | `garde` (3) |
| ASS008 (Volcan, chinoise impériale) | Poison − | **Soin du héros**, Lois, 7 (l'élixir qui guérit et ronge) | brûlure (4), dégâts à tous (3) ; prix en PV | `brule` (3) |
| ASS008 | Nectar + | **Écho**, Lois, 7 (la coupe d'après) | pioche (4), soin du héros (4) | `seul` (3) |
| ASS031 (Jungle, inuit) | Vide − | **Garde du héros**, Lois, 7 (le ciel blanc sans repère) | hésitation ciblée (3) | `hesite` (3) |
| ASS031 | Étoiles + | **Perce-garde**, Lois, 7 (la lumière d'étoile passe au travers) | pioche (4), mana de Sève (4) | `cibleGarde` (3) |
| DON062 (Canyon, japonaise féodale) | Nuit − | **Riposte**, 7 (les pièges de la veille) | affaiblissement (4) | `pietine` (3) |
| DON062 | Aurore + | **Gros coups ciblés**, 6 (le premier rayon) | brûlure (4), perce-garde (3, dont `ignoreGarde` 2) | `blesse` (3) |
| DON076 (Haute montagne, slave) | Mort − | **Affaiblissement** ciblé, 7 (le froid du kourgane) | exil (3) | `elan` (3) |
| DON076 | Vie + | **Enchaînement**, 7 (`cartesJouees` 4, `troisCartes` 4) | soin du héros (4), riposte (3), récupération (3) | enchaînement (seul crochet de D sur 5 cartes ou plus) |
| DON110 (Archipel, perse) | Abysse − | **Garde du héros**, 7 (la pression du fond) | exil (3), riposte (2) | `garde` (3) |
| DON110 | Ciel + | **Mana** d'Eau, 7 (les tours qui boivent les nuages) | garde du héros (4), coups au hasard (3), riposte (3) | `vol` (3) |
| CIT015 (Désert de sel, vénitienne) | Chaos − | **Invocations**, 7 (la cohue des sauniers et des déserteurs) | dégâts à tous (3), soin des alliés (2) ; prix sur la bête | `blesse` (3) |
| CIT015 | Ordre + | **Marque**, 7 (la croix de craie du lazaret) | garde des alliés (4), gardes postés (3) | `vulnerable` (3) |

Les dégâts ciblés servent partout de charge utile (2 à 4 cartes par pôle ; 5 à 7 dans quatre pôles où ils accompagnent la famille : DON062 +, DON076 +, ASS031 +, DON110 +). Comme au lot 4, ils comptent comme une vocation et ne sont pas plafonnés ; aucun pôle n'est pour autant « X dégâts à la cible » sur ses 7 cartes (vérifié au script).

Comptes chez D (famille principale) : perce-garde 2, riposte 2, marque 2 (ANT162 +, CIT015 +), brûlure 2, affaiblissement 2, mana 2, garde du héros 2, soin du héros 2 (ANT047 +, ASS008 −) ; une fois : hésitation, écho, enchaînement, soin des alliés, pioche ; invocations 2 (ANT047 −, CIT015 −), plus ANT162 − où les bêtes-leurres sont sur 5 cartes (vocation d'Antre). Aucune garde des alliés, aucun dégât à tous, aucun exil ni récupération en principal.

Appoints chez D (pôles où la famille est sur 2 à 4 cartes, hors bêtes des Antres et dégâts ciblés ; compté au script) : garde du héros 3 (ANT047 +, ASS068 +, DON110 +), soin du héros 3 (ANT038 +, ASS008 +, DON076 +), pioche 3 (ANT162 +, ASS008 +, ASS031 +), affaiblissement 3, brûlure 3, dégâts à tous 3 (ANT038 −, ASS008 −, CIT015 −), riposte 3 (DON076 +, DON110 −, DON110 +), hésitation 2, exil 2, récupération 2, garde des alliés 2, soin des alliés 2, perce-garde 1, mana 1, coups au hasard 1. Ailleurs, ces familles ne paraissent que sur une carte.

## Couples de mots de pôle : ce que D change (lots 1 à 4 relus, cartes comprises)

- **Tempête / Calme** (ANT192 hasard / gros coups, DON082 dégâts à tous / brûlure de tous, ASS124 marque / soin des alliés, DON046 gros coups / garde du héros, DON080 hasard / soin et pioche ; au lot 5 aussi chez A, ANT093) : perce-garde / riposte, jamais employées sur ce couple.
- **Mensonge / Vérité** (ANT198 marque / brûlure, ASS161 pioche / pioche et marque en appoint, DON081 riposte / gros coups sans garde ; au lot 5 aussi chez C, ANT193) : hésitation / marque. La marque de Vérité était un appoint d'ASS161 (4 cartes, crochet `vulnerable`) : ici elle domine, sur `seul`, sans pioche en principal.
- **Oubli / Mémoire** (sept zones : exil, gros coups, bêtes, affaiblissement, hésitation, mana, soin / pioche cinq fois, riposte, récupération ; au lot 5 aussi chez C, CIT014 : garde des alliés / soin du héros) : brûlure / soin des alliés.
- **Brume / Clarté** (ANT100 gros coups / écho, ASS052 affaiblissement de tous / garde et mana, ASS170 garde du héros / pioche, DON021 riposte et hasard / gros coups et brûlure) : invocations / soin du héros.
- **Cendre / Floraison** (ANT019 dégâts à tous / soin, ASS033 brûlure / garde du héros et riposte, ASS070 gros coups / pioche et écho ; au lot 5 aussi chez A, ANT130) : affaiblissement / mana.
- **Exil / Foyer** (ANT016 marque / pioche, ANT239 hasard / garde des alliés, ASS059 brûlure / pioche et soin, ASS101 exil / soin et mana, CIT036 garde du héros / soin, DON030 gros coups ; au lot 5 aussi chez A, ANT187) : pioche payée en défausse / brûlure. La pioche n'a jamais été du côté Exil ; la brûlure jamais du côté Foyer.
- **Poison / Nectar** (ANT089 gros coups et hésitation / soin, CIT005 et CIT013 garde du héros et riposte / soin, DON010 affaiblissement et brûlure / soin ; au lot 5 aussi chez C, ASS061 : marque / affaiblissement, le goûteur) : soin du héros (l'élixir qui guérit et ronge, jamais employé côté Poison) / écho. Aucun soin en principal pour le Nectar, et pas de goûteur : l'image de D est celle des alchimistes du cratère.
- **Vide / Étoiles** (six zones : bêtes, pioche, gros coups, perce-garde ; Étoiles : bêtes, pioche trois fois, garde, hasard) : garde du héros / perce-garde. La perce-garde de CIT017 était du côté Vide (sur `seul`) ; ici elle passe du côté Étoiles, sur `cibleGarde`.
- **Nuit / Aurore** (ANT105 bêtes et affaiblissement de tous / gros coups sans garde, ASS148 pioche et récupération / brûlure et marque de tous ; au lot 5 aussi chez A, ASS109) : riposte / gros coups ciblés sur `blesse` (ANT105 jouait `cibleGarde` et `ignoreGarde` sur 5 cartes ; ici `ignoreGarde` sur 2 cartes au plus).
- **Mort / Vie** (neuf zones : bêtes, gros coups, exil, garde du héros / soin, bêtes, garde, pioche, mana, vol de vie) : affaiblissement ciblé / enchaînement.
- **Abysse / Ciel** (ANT045 affaiblissement / hasard, ANT161 gros coups / gros coups sur `vol` ; au lot 5 aussi chez B, CIT031) : garde du héros / mana. Le `vol` du Ciel reste un crochet de 3 cartes.
- **Chaos / Ordre** (hasard trois fois, garde du héros, marque / mana, riposte, pioche, garde du héros, garde des alliés ; au lot 5 aussi chez C, ASS082 : mana / soin des alliés) : invocations / marque (la marque de l'Ordre n'a jamais dominé : ASS128 la portait sur 3 cartes de « tous »).

## Collisions avec C (familles_C.md, premier écrit) : ce que D a changé

- **Poison / Nectar** (C ASS061 : marque / affaiblissement, image du goûteur) : D abandonne la marque du Poison et le goûteur ; Poison = soin du héros, crochet `brule` (C : `hesite`). Nectar = écho (C : affaiblissement, `soinEnnemi`).
- **Chaos / Ordre** (C ASS082 : mana / soin des alliés) : D abandonne le soin des alliés de l'Ordre ; Ordre = marque, crochet `vulnerable` (C : `troisCartes`). Chaos = invocations, crochet `blesse` (C : `defausseAPrix`).
- **Oubli / Mémoire** (C CIT014 : garde des alliés / soin du héros) : D abandonne la garde des alliés de la Mémoire ; Oubli = brûlure (`brule`), Mémoire = soin des alliés (`bete`). C : `pietine` / `vol`.
- **Mensonge / Vérité** (C ANT193 : perce-garde / riposte, crochets `cibleGarde` / `elan`) : D garde hésitation / marque, crochets `pietine` / `seul`. Images : C, une jungle vénitienne et le mimétisme ; D, un récif grec et les plongeurs d'éponges.
- Plafonds avec C : C prend un vol de vie et un hasard, D une hésitation, un écho et un enchaînement. Il reste au lot : hésitation 1, hasard 1, vol de vie 1, écho 1, enchaînement 1.

## Nombres précis de D (récits, `pal`, noms, ambiances) : liste finale

quinze (feuilles, ANT038) · vingt et une (brasses, ANT162) · six cent douze (générations, ANT126) · soixante et onze (pieds, ANT047) · vingt-trois (jours, ANT108) · cent dix-huit, quatre-vingt-dix et cent dix-neuf (tessons, ASS068) · vingt (l'article, ASS008) · cinq cent un (noms d'étoiles, ASS031) · vingt-cinq et vingt-six (veilleurs, DON062) · trois cent trois (croix, DON076) · soixante-quatre (brasses, DON110) · cent quatre-vingt-sept (malades, CIT015).

Changés après lecture de familles_B.md, qui réserve quatorze, treize, dix-sept et vingt-quatre : D les avait prévus à 05 h 43, mais les laisse à B (ANT108 passe de quatorze à vingt-trois jours, ASS008 de l'article treize à l'article vingt, DON062 de dix-sept et dix-huit à vingt-cinq et vingt-six, ANT162 de vingt-quatre à vingt et une brasses). « Dix-neuf » (prévu pour ANT038) est retiré parce qu'il revenait dans « cent dix-neuf » ; « deux cent cinquante » (CIT015) est retiré parce qu'il commençait comme le « deux cent quatre-vingts » de B. Aucun « trente-X », aucun « quarante ». Aucun nombre de cette liste ne figure dans celles de B ou de C ; A n'en prend aucun.

## Ressources de D : geste, objet, image

| Ressource | Geste | Objet | Image (plan visuel) |
|---|---|---|---|
| RES118 Champignons géants, slave | battre les pieds des champignons au maillet pour faire tomber les spores dans des draps | farine de spores | nuée brune sous les chapeaux, draps tendus au sol |
| RES369 Canyon, khmère | grimper aux palmiers par des échelles de bambou fixées à demeure et masser les grappes de fleurs pour faire couler la sève | sucre de palme | une échelle de bambou contre chaque tronc, au fond du canyon (les fours fumants sont retirés : C RES037 a des fosses fumantes au bord du canyon) |
| RES331 Cavernes cristallines, égyptienne | fendre la sélénite en feuilles minces, à la lame de cuivre | plaques de sélénite | piles de feuilles laiteuses à l'entrée de la grotte |
| RES019 Glacier, inca | étendre au soleil du glacier des lanières de viande de lama salée et les retourner chaque midi | viande séchée (charqui) | lanières sombres en rangs sur la glace bleue (le chuño prévu d'abord est laissé à A, RES314, qui l'a aussi pris) |
| RES150 Mangrove, byzantine | détacher au couteau courbe les huîtres des racines-échasses à marée basse | huîtres de palétuvier | racines couvertes de coquilles, découvertes par la marée |
| RES198 Glacier, polynésienne | descendre à la corde le long des séracs pour prendre les œufs des oiseaux de mer | œufs | paroi de séracs bleus, cordes, nuées d'oiseaux |
| RES142 Oasis, inca | égrener les cosses de caroubier sur une pierre creuse | farine de caroube | arbres tordus aux cosses pendantes, meules de pierre |
| RES274 Désert de sel, éthiopienne | découper la croûte en briques à la hache et les équarrir | briques de sel | caravane chargée de plaques blanches sur la croûte |
| RES038 Lande, grecque | peigner la résine collée aux barbes des chèvres qui broutent le ciste | ladanum | chèvres noires dans la bruyère, peignes de cuir |
| RES289 Mangrove, moghole | enfumer à la torche de feuilles les rayons pendus au-dessus de l'eau | miel sauvage | rayons sous les branches, barques en dessous |
| RES057 Toundra, grecque | râteler le lichen des rennes et le sécher en meules | lichen (fourrage et farine d'hiver) | meules rondes de lichen pâle jusqu'à l'horizon (les bois de renne sont retirés : trop près des défenses de mammouth de B RES126) |
| RES117 Delta fluvial, mésopotamienne | cueillir à la perche le bitume qui remonte en bulles et le rouler en boules | bitume | plaques noires luisantes sur l'eau |
| RES202 Cité en ruines, éthiopienne | entailler l'écorce des arbres à encens, puis revenir détacher les larmes séchées | encens | arbres d'encens poussés dans les salles du palais effondré (le geste n'est plus de gratter une résine : A RES347 décolle une résine à la spatule) |
| RES164 Champignons géants, zouloue | arracher l'écorce fibreuse des pieds et la tordre en cordes | cordes de fibre | lanières pendues à sécher entre les pieds |
| RES370 Haute montagne, chinoise impériale | scier et polir les pierres à encre dans l'ardoise du torrent | pierres à encre | rangées de pierres noires qui sèchent au bord de l'eau |
| RES168 Delta fluvial, japonaise féodale | tendre des filets entre des perches à marée pour y faire prendre les algues | algues séchées | champ de perches dans le delta, feuilles noires au soleil |

Noms des Ressources (premiers mots tous différents) : Les Draps de Gribnoïé · Les Palmiers à sucre de Phnom Thnot · Les Feuillets de Per-Iâh · Les Lanières de Rit'i Qocha · Les Huîtres des Échasses de Kalamonia · Les Séracs aux Œufs de Hukahau · Les Caroubiers de Puquio Ch'aki · Les Briques blanches d'Asbo Arra · Les Barbes de Ciste d'Aigolophos · Les Rayons pendus de Shahd-Ban · Le Lichen des Rennes de Kryopédion · Les Bulles de bitume d'Id-Kalam · Les Larmes d'encens de Däbrä Säqo · Les Cordiers d'eMakhoweni · L'Ardoise à encre de Yanxi-Jian · Le Champ de perches d'Amanoura.

Récipients : un seul nommé, les sacs de farine de RES118 (aucune calebasse, épuisette, seau, jarre, panier ni cuve). Aucun produit tinctorial. Objets relus contre A, B et C : B a retiré de ses Ressources les œufs, le sel, les draps et les algues que D avait déjà ; C a retiré les cordes d'écorce et la vesse-de-loup. D a changé RES019, RES057, RES202 et RES369 (voir le tableau).

## Relecture à la remise (familles_A.md 05 h 52, familles_B.md mise à jour 06 h 10, familles_C.md mise à jour 06 h 08)

- Ordre d'écriture : C 05 h 43 min 46 s, D 05 h 43 min 56 s, B 05 h 47, A 05 h 52. D ne touche à aucune famille de C (voir « Collisions avec C ») ; B et A se sont rangés derrière D sur Abysse/Ciel, Tempête/Calme, Exil/Foyer, Cendre/Floraison et Nuit/Aurore.
- Places rares du lot, recomptées sur les quatre fichiers : hésitation 2 (B ASS023 −, D ANT162 −), hasard 2 (C ASS063 −, B DON086 +), vol de vie 2 (B ANT097 −, C DON122 −), écho 2 (D ASS008 +, A ANT093 +), enchaînement 2 (D DON076 +, A ANT155 +). Toutes pleines.
- Familles à 6 pôles au plus : C et A les déclarent toutes à 6 exactement, avec les deux pôles de D chacune ; les comptes de D ci-dessus sont ceux des cartes remises, sans changement de famille principale depuis 05 h 50.
- Couples du lot : chaque couple de D partagé avec un autre conteur a, des deux côtés, d'autres familles principales et d'autres crochets.
