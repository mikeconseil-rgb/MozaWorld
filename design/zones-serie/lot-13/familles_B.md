# Lot 13 · carte des familles du conteur B (l'Explorateur marchand)

**Première version : 00 h 02**, avant la moindre carte. À cette heure, aucun familles_A/C/D.md n'est dans le dossier : je suis le **premier inscrit**. Je relirai les trois fichiers avant la remise ; ce qui changera sera noté au § 8.

## 1. Compte des vocations (au script, `voc13.py`, sur les cartes des lots 1 à 12, 1 048 pôles ; famille sur 5 cartes ou plus ; gros coups depuis le lot 5)

| Mot | Invocations | Gros coups (lot 5+) | Pioche d'Assemblée | Pour B |
|---|---|---|---|---|
| Vide | A ANT190 (l.4), C ANT007 (l.4) | — | C ASS157 (l.4) | D prend les invocations au lot (ANT039) : non |
| Étoiles | D ANT137, A ANT190, C ANT007 | A DON125, D ASS031 | C ASS157 | invocations pleines ; reprise de marque (LISTE) |
| Fer | C ANT046, A ASS114, D ANT214 | A ASS114, A DON009 | B ASS004, C ASS158 | pleines ou déjà B : reprise de marque (LISTE) |
| Bois | B DON003, C ANT084 | A ASS114 | A ASS114 | A prend les invocations au lot (ANT109) : non |
| Famine | C ANT068, A ANT063 | — | B ASS080 | place (soin du héros) |
| Festin | C ANT068 | — | — | colonne |
| Pierre | B ANT052, C ANT195, D ANT246 | B DON012, A DON028 | D ASS180 (l.8) | **pioche d'Assemblée : 2e emploi, je la prends** |
| Cristal | D ANT197, C ANT195, A ANT210 | B DON012 | D ASS098 | C prend la pioche au lot (ASS191) : colonne |
| Chaos | D CIT015, A ANT146 | C ASS082, B DON053 | C ASS166 | place perdue (colonne) |
| Ordre | A ANT017, D CIT030, C ANT065 | B DON053 | C ASS166, C ASS082 | reprise de brûlure (LISTE) |
| Cendre | A ANT130, C ANT230 | A ANT130, D DON121 | C ASS108 | place (soin du héros) |
| Floraison | B ANT019, A ANT130 | A ANT130 | C ASS149, A ASS070 | D prend la pioche au lot (ASS183) : colonne |
| Ombre | A ANT232, C ANT168, D ANT127 | A CIT008, B ASS005 | B ASS005 | place rare (enchaînement) |
| Lumière | D ANT014 (l.12), A CIT008 (l.5) | A CIT008, B ASS005 | D ASS178 | **invocations : 3e et dernier emploi, je le prends** |
| Tempête | A ANT093, B ANT241 | A ANT093 | C ASS179 | C prend les invocations au lot (ANT117) ; place (mana) |
| Calme | D ANT057 (l.12), A ANT093 (l.5) | A ANT093 | — | **invocations : 3e et dernier emploi, je le prends** |
| Ruine | C ANT186, D ANT185 | C DON015 | D ASS139 | place (garde des alliés) |
| Abondance | B ANT135, C ANT165, C CIT012 | — | C ASS143 | colonne |
| Os | C CIT003 (l.4), D ANT095 (l.4) | C ASS131 | B ASS055 | **invocations : 3e et dernier emploi, je le prends** |
| Corail | B ANT024, D ANT095, C ANT054 | — | A ASS085, C ASS002 | place (exil) |
| Folie | D ANT169, A ANT217, B ANT225, C ANT101 | B ANT097, A DON114 | A ASS083 | place (garde du héros) |
| Raison | A ANT053 (l.3), C ANT101 (l.5) | — | A ASS083 | **invocations : 3e et dernier emploi, je le prends** |

**Mes vocations : 5** (Pierre en pioche d'Assemblée, 2e emploi ; Lumière, Calme, Os, Raison en invocations, 3e et dernier emploi). Aucune n'est un emploi que j'avais déjà sur le mot.

## 2. Les places (LISTE.md, suivies sans échange)

9 places libres, 5 vocations, 3 reprises, 4 colonnes, 1 place perdue déclarée (Chaos, écrit avec une colonne hors du compte des 4). **Aucun échange.**

## 3. Les 22 pôles (famille principale ; appoint 3-4 cartes ; crochet ; prix principal + second sur 2 cartes au moins)

| Zone | Pôle | Famille principale | Appoint | Crochet | Prix |
|---|---|---|---|---|---|
| DON090 Donjon, Falaise côtière, polynésienne, Vent | Vide − | **soin des alliés** | dégâts ciblés (4), perce-garde | `brule` (aucune brûlure dans le pôle) | PV + défausse |
| | Étoiles + | **marque — reprise 1** (après C ANT083, lot 7 : `troisCartes`, PV) | dégâts ciblés (4), coups au hasard | `piocheCout0` (jamais lu sur les Étoiles) | défausse + PV |
| ASS130 Assemblée, Mangrove, mongole, Eau | Fer − | **marque — reprise 2** (après C ANT011, lot 8 : `vulnerable`, PV), Lois | pioche, affaiblissement | `hesite` (jamais lu sur le Fer ; aucune hésitation dans le pôle) | soin ennemi + défausse |
| | Bois + | **exil**, Lois | garde des alliés, pioche | `troisCartes` | exil + PV |
| ASS013 Assemblée, Haute montagne, aztèque, Pierre | Famine − | **soin du héros**, Lois | affaiblissement, mana | `brule` (aucune brûlure dans le pôle) | défausse + garde ennemie |
| | Festin + | **colonne PV / `blesse`** (PV sur 4, `blesse` sur 4, lu avant tout soin), Lois | dégâts à tous, riposte | `blesse` | PV + soin ennemi |
| ASS184 Assemblée, Désert de sel, nordique, Pierre | Pierre − | **pioche — vocation** (2e emploi après D ASS180 : `pietine`, garde ennemie), Lois | garde du héros | `piocheCout0` (jamais lu sur la Pierre) | soin ennemi (jamais prix principal sur la Pierre) + exil |
| | Cristal + | **colonne garde ennemie / `cibleGarde`** (garde ennemie sur 4, `cibleGarde` sur 4, lu avant), Lois | perce-garde (après le `si`), mana | `cibleGarde` (jamais lu sur le Cristal) | garde ennemie + défausse |
| ASS192 Assemblée, Oasis, vénitienne, Sève | Chaos − | **place perdue : colonne marque / `vulnerable`** (marque sur 4, `vulnerable` sur 4, lu avant), Lois | coups au hasard, dégâts à tous | `vulnerable` | PV + défausse |
| | Ordre + | **brûlure — reprise 3** (après D ANT074, lot 6 : `cartesJouees`, défausse), Lois | garde des alliés, pioche | `soinEnnemi` (intention 1/2 ; jamais lu sur l'Ordre) | exil + PV |
| ASS193 Assemblée, Savane, celte, Feu | Cendre − | **soin du héros**, Lois | riposte, garde des alliés | `vulnerable` (aucune marque dans le pôle) | soin ennemi + PV |
| | Floraison + | **colonne hésitation / `hesite`** (hésitation de la cible sur 4, `hesite` sur 4, toujours lu avant), Lois | soin des alliés, mana | `hesite` | garde ennemie + défausse |
| ANT078 Antre, Forêt boréale, maya, Glace | Ombre − | **enchaînement** (place rare : `cartesJouees` et `troisCartes` sur 5 cartes) ; bêtes 3 | affaiblissement | (l'enchaînement) | PV + bête |
| | Lumière + | **invocations — vocation** (3e emploi) | perce-garde, soin des alliés | `garde` (jamais lu sur la Lumière ; aucune garde dans le pôle) | exil + défausse |
| ANT191 Antre, Cité en ruines, aztèque, Pierre | Tempête − | **mana** ; bêtes 3 | dégâts à tous | `defausseAPrix` (aucune défausse en prix dans le pôle) | PV + bête |
| | Calme + | **invocations — vocation** (3e emploi) | riposte | `blesse` (jamais lu sur le Calme ; aucun PV en prix) | exil + garde ennemie |
| ANT226 Antre, Récif, inuit, Eau | Ruine − | **garde des alliés** ; bêtes 3 | soin du héros | `cartesJouees` | défausse + bête |
| | Abondance + | **colonne défausse / `defausseAPrix`** (défausse sur 4, `defausseAPrix` sur 4, lu avant) ; bêtes 3 | soin des alliés | `defausseAPrix` | défausse + soin ennemi |
| ANT112 Antre, Désert de sel, inuit, Pierre | Os − | **invocations — vocation** (3e emploi) | marque | `garde` (jamais lu sur l'Os ; aucune garde dans le pôle) | garde ennemie (jamais prix principal sur l'Os) + PV |
| | Corail + | **exil** ; bêtes 3 | soin du héros | `hesite` (aucune hésitation dans le pôle) | exil + bête |
| ANT248 Antre, Savane, inca, Feu | Folie − | **garde du héros** ; bêtes 3 | coups au hasard | `piocheCout0` | PV + défausse |
| | Raison + | **invocations — vocation** (3e emploi) | hésitation | `brule` (jamais lu sur la Raison ; aucune brûlure dans le pôle) | bête (jamais prix principal sur la Raison) + soin ennemi |

**Comptes chez B** :
- crochets (2 cartes ou plus) : `brule` 3 (Vide, Famine, Raison), `piocheCout0` 3 (Étoiles, Pierre, Folie), `hesite` 3 (Fer, Floraison, Corail ; aucun `hesiteAvant`), `vulnerable` 2, `blesse` 2, `garde` 2 (aucun pôle qui lit `garde` ne lève de garde, ni héros ni alliés), `defausseAPrix` 2, `cartesJouees` 2, `troisCartes` 2, `cibleGarde` 1, intention : `soinEnnemi` 1 (Ordre) ;
- colonnes (couples qui se remplissent) : PV / `blesse` (Festin), garde ennemie / `cibleGarde` (Cristal), marque / `vulnerable` (Chaos, place perdue), hésitation / `hesite` (Floraison), défausse / `defausseAPrix` (Abondance). Chacun une fois chez moi ;
- appoints, 3 pôles au plus : soin des alliés, mana, garde des alliés, pioche, perce-garde, coups au hasard, dégâts à tous, riposte, affaiblissement, exil en prix (Ordre, Lumière, Calme) à 3 ; soin du héros 2 ; enchaînement en appoint 2 (Bois, Ruine) ;
- Lois : 2 cartes au moins par pôle d'Assemblée (12 pôles, je vise 2 ou 3 chacun).

## 4. Reprises (3, désignées par LISTE.md, aucune autre)

| Mot | Famille | Origine | Crochet de l'origine → le mien | Prix principal de l'origine → le mien | Bête |
|---|---|---|---|---|---|
| Étoiles (DON090 +) | marque | C ANT083 (lot 7) | `troisCartes` → `piocheCout0` (jamais lu sur le mot) | PV → défausse | Donjon, sans bêtes |
| Fer (ASS130 −) | marque | C ANT011 (lot 8) | `vulnerable` → `hesite` (jamais lu sur le mot) | PV → soin ennemi | Assemblée, sans bêtes |
| Ordre (ASS192 +) | brûlure | D ANT074 (lot 6) | `cartesJouees` → `soinEnnemi` (jamais lu sur le mot) | défausse → exil | Assemblée, sans bêtes |

**Point pour le critique** : sur les Étoiles, le Fer et l'Ordre, **les six sortes de prix ont déjà été prix principal** d'au moins un pôle (lots 1 à 12, compté au script). Un prix principal neuf pour le mot entier n'existe pas. J'ai pris le moins servi, et jamais celui de l'origine : la défausse des Étoiles (2 pôles), le soin ennemi du Fer (1 pôle, A ASS053), l'exil de l'Ordre (1 pôle, A ANT163). Même chose pour les vocations de la Lumière (exil, 1 pôle, A ANT243) et du Calme (exil, 1 pôle, C ASS147). Pierre (soin ennemi), Os (garde ennemie) et Raison (bête) ont un prix principal neuf.

## 5. Bêtes (famille scientifique, à la maille de la famille courante ; une famille par pôle, aucune deux fois chez moi)

| Pôle | Bêtes | Famille | Neuve pour le mot ? |
|---|---|---|---|
| Ombre − | chauves-souris (de Camazotz) | chiroptères | sans objet (pas une vocation) |
| Lumière + | quetzals | trogonidés | oui (lucioles, phaétons, guêpiers, soldats avant) |
| Tempête − | martinets | apodidés | sans objet |
| Calme + | iguanes | iguanidés (lézards) | oui (hérons, salamandres, tigres, bœufs musqués avant) |
| Ruine − | phoques annelés | phocidés (pinnipèdes) | sans objet |
| Abondance + | capelans | osméridés (poissons) | sans objet |
| Os − | caribous | cervidés | oui (chacals, chameaux, viscaches, murènes avant) |
| Corail + | artémies (crevettes de saumure) | artémiidés (crustacés branchiopodes) | sans objet |
| Folie − | perroquets | psittacidés | sans objet |
| Raison + | nandous | rhéidés | oui (lions de bronze, bœufs musqués, outardes, mules avant) |

PV : 40 au plus aux paliers 1 à 6, 60 au plus au palier 7.

## 6. Noms, prénoms, institutions, formes de récit (liste commune)

| Zone | Nom | Prénom | Institution | Forme du récit | Première phrase → dernière phrase (intrigue) |
|---|---|---|---|---|---|
| DON090 | Puka Rangi, le Plafond des Navigateurs | Hinaraurea | — | récit d'une vente | « Les élèves de Hinaraurea apprenaient les levers d'étoiles couchés sous la voûte. » → la carte vendue (une natte percée) mène l'acheteur à bon port ; on bouche la voûte quand un étranger monte |
| ASS130 | Le Jarghu de Khar-Modon | Esentei | jarghu (tribunal mongol) | récit d'un jugement annuel | les soldats d'une flotte restés dans la mangrove jugent chaque année la perte des étriers → on juge encore des étriers, sans chevaux |
| ASS013 | Le Calpulli de Tepetlaxco | Itztli (marchand) | calpulli | récit d'une coutume née d'un repas | le marchand reçu en pleine disette par le festin que la loi impose → les bonnes années, les marchands passent par l'autre col |
| ASS184 | Le Ráð de Saltvöllr | Ásvör | ráð (conseil nordique) | portrait d'une loi qui s'use | les lois dites depuis un bloc de sel que la pluie ronge → le conseil n'a plus que les lois qui tiennent sur la face sèche |
| ASS192 | Les Provéditeurs de Pozzo Moro | Lunardo Dolfinetto | provéditeurs aux eaux | chronique d'une crue | le registre des tours d'eau perdu une année → recopié avec une page blanche pour cette année-là |
| ASS193 | La Feis de Machaire Loisc | Éimhear | feis (fête-assemblée) | explication d'une coutume | l'assemblée tenue sur la savane brûlée, où personne ne réclame un champ → la paix dure jusqu'aux premières fleurs |
| ANT078 | Sotz'ha, l'Aven aux Mélèzes | Ah Kin Couoh (titre et nom) | — | légende d'un geste | le calendrier d'un peuple monté au nord, où le soleil ne passe jamais au zénith → la plaque de pyrite ternie, « et l'on appelle cela un midi » |
| ANT191 | Ehecaxochco, la Rotonde du Vent | Nochtli | — | récit d'un savoir vendu | la vieille lit le temps aux martinets et aux iguanes, un marchand achète les iguanes → il fait toujours beau dans la plaine (sur le papier) |
| ANT226 | Qarmaliit, les Toits sous la Marée | Ukaliq | — | récit de migration | les familles bâtissent sur le récif pour être près du capelan → les phoques dorment dans les maisons, et partent aussi quand le capelan arrive |
| ANT112 | Sauniqtuuq, la Mer partie | Arnaviaq | — | portrait d'une vieille | elle taille des hameçons d'os pour une mer partie → elle les accroche aux branches de corail, « pour quand elle reviendra » |
| ANT248 | Rakiwasi, les Cordelettes dénouées | Mallku | quipucamayoc (titre) | récit d'un contrôle | les perroquets dénouent les cordelettes la nuit, Mallku les renoue de mémoire → le compte est le même chaque matin, on ne sait pas s'il est juste |

Aucun nombre précis dans les récits (je ne prends ni « deux », ni « trois », ni « sept »). Un seul récit d'argent au sens strict (ANT191) ; une vente en DON090.

## 7. Gestes du ±7 (pour les couples partagés : je suis premier inscrit, les suivants comparent)

| Couple | Mes ±7 (le geste) | Autres conteurs du lot sur le couple |
|---|---|---|
| Vide / Étoiles | −7 : la voûte n'a plus un trou, la bouche de la grotte aspire les nattes vers un ciel sans rien ; +7 : la voûte criblée comme un ciel, les élèves couchés relient les trous du doigt sur la pierre | A DON040, C ANT035, D ANT039 |
| Fer / Bois | −7 : les racines de la mangrove sous chaînes, les barques boulonnées, l'eau rouille ; +7 : le tribunal siège sur un radeau de planches, les cuirasses refaites en lamelles de bois (pas de végétal qui avale un bâtiment) | A ANT109 |
| Famine / Festin | −7 : les meules de pierre retournées, les terrasses nues ; +7 : les plats passent de main en main le long des terrasses, de maison en maison jusqu'au col (pas de table qui s'étend, pas de grenier qui déborde) | C ANT119 |
| Pierre / Cristal | −7 : des cairns partout, le conseil assis sur des pierres, en silence ; +7 : les aiguilles de sel dépassent les tentes, et le soleil de midi projette au sol les lois qu'on y a gravées | A ANT194, C ASS191, D ANT032 |
| Chaos / Ordre | −7 : chacun ouvre sa vanne, les rigoles se croisent et débordent ; +7 : au coup de cloche, toutes les vannes tournent ensemble | — |
| Cendre / Floraison | −7 : on trace les limites au bâton dans la cendre, le vent les efface ; +7 : la savane fleurit à hauteur de taille, et chacun porte à ses cheveux la fleur de son champ | D ASS183 |
| Ombre / Lumière | −7 : le puits n'est plus qu'un trou de chauves-souris sous la neige ; +7 : chacun tient une plaque de pyrite tournée vers le puits | A ANT051 |
| Tempête / Calme | −7 : le vent passe par la porte du temple rond et roule les pierres ; +7 : la fumée des foyers monte droite, et les iguanes couvrent chaque marche | A ASS185, C ANT117, D ANT218 |
| Ruine / Abondance | −7 : les côtes de baleine des toits debout dans la houle, des phoques sur les pierres du foyer ; +7 : on étend les capelans sur les toits jusqu'à ne plus voir l'herbe | A CIT020, C ANT081 |
| Os / Corail | −7 : un champ blanc d'ossements, des bois de caribou empilés ; +7 : les pierres poussent des branches de corail, on y suspend les hameçons | — |
| Folie / Raison | −7 : des cordelettes nouées au hasard pendent des acacias, les perroquets répètent des comptes ; +7 : les feux de brousse sont mis en carrés réguliers, les nandous passent en files | C ANT247 |

## 8. Mises à jour (22 novembre, 08 h 30, à la remise) — **ce paragraphe remplace les §§ 3, 5, 6 et 7 là où ils diffèrent**

Relu : familles_A.md (00 h 02), familles_D.md (08 h 13, ordre au `ls` : A 00:02:12, D 00:02:23, B 00:02:25, C 00:03:05), familles_C.md (v2, 08 h 10) et conteur_D.md. A et D sont inscrits avant moi : j'ai changé tout ce qui croisait leurs mots. C, inscrit après, avait déjà changé sur la base de ma v1 ; j'ai suivi ses changements pour ne rien recroiser.

**Crochets changés** (même crochet sur le même mot chez un autre conteur du lot) : Vide `brule` (A, D) → `garde` ; Pierre `piocheCout0` (A) → `defausseAPrix` (C prend `cartesJouees`, D `troisCartes`) ; Lumière `garde` (A) → `defausseAPrix` ; Calme `blesse` (A, D) → `vol` (intention 2/2) ; Cendre `vulnerable` (D) → `piocheCout0` ; Ruine `cartesJouees` → `cartesJouees` gardé (C l'a quitté pour `garde`) ; Folie → `piocheCout0` ; Tempête `defausseAPrix` (gardé).

**Colonnes changées** : il ne restait qu'une place de couple libre au lot (garde ennemie / `cibleGarde`). Festin → garde ennemie / `cibleGarde` (2e du lot, avec C Nectar) ; Cristal → brûlure / `brule` (3e : C Poison, C Étoiles) ; Chaos (place perdue) → marque / `vulnerable` (3e : A Ombre, C Vide) ; Floraison → hésitation / `hesite` (3e : A Abondance, D Nuit) ; Abondance → bête / `bete` sans prix (les invocations nourrissent `bete` ; C Calme et D Aurore paient en bête). **Signalé au critique : 20 colonnes au lot pour 16 à 18 places**, un seul de mes couples par couple, aucun à 4.

**Tableau final des 22 pôles** (comptes au script sur les cartes remises) :

| Pôle | Famille principale | Appoints | Crochet | Prix (principal / second) | Bêtes |
|---|---|---|---|---|---|
| DON090 − Vide | soin des alliés 7 | dégâts ciblés 4, perce-garde 3 | `garde` 3 | PV 5 / défausse 2 | — |
| DON090 + Étoiles | marque 7 (reprise) | dégâts ciblés 4, hasard 4 | `piocheCout0` 3 | défausse 5 / PV 2 | — |
| ASS130 − Fer | marque 7 (reprise), Lois 2 | affaiblissement 4, pioche 3, garde 4 | `hesite` 3 | soin ennemi 5 / défausse 2 | — |
| ASS130 + Bois | exil 6, Lois 2 | garde des alliés 4, soin 4, pioche 3 | `troisCartes` 3 | exil 6 / PV 2 | — |
| ASS013 − Famine | soin du héros 7, Lois 2 | affaiblissement 4, mana 4 | `brule` 3 | défausse 5 / garde ennemie 2 | — |
| ASS013 + Festin | colonne garde ennemie / `cibleGarde` 4/4, Lois 2 | riposte 4, dégâts à tous 3 | `cibleGarde` 4 | garde ennemie 4 / PV 3 | — |
| ASS184 − Pierre | pioche 7 (vocation), Lois 2 | garde 4, dégâts ciblés 4 | `defausseAPrix` 3 | soin ennemi 5 / exil 2 | — |
| ASS184 + Cristal | colonne brûlure / `brule` 4/4, Lois 2 | garde 4, mana 4, perce-garde 4 | `brule` 4 | défausse 4 / PV 3 | — |
| ASS192 − Chaos | place perdue : colonne marque / `vulnerable` 4/4, Lois 2 | hasard 4, dégâts à tous 3 | `vulnerable` 4 | garde ennemie 4 / défausse 3 | — |
| ASS192 + Ordre | brûlure 7 (reprise), Lois 2 | garde des alliés 4, pioche 3, exil 4 | `soinEnnemi` 3 | exil 4 / PV 3 | — |
| ASS193 − Cendre | soin du héros 7, Lois 2 | riposte 4, garde des alliés 4 | `piocheCout0` 3 | soin ennemi 5 / PV 2 | — |
| ASS193 + Floraison | colonne hésitation / `hesite` 4/4, Lois 2 | soin des alliés 4, mana 4 | `hesite` 4 | garde ennemie 4 / défausse 3 | — |
| ANT078 − Ombre | enchaînement 5 (place rare) | invocations 4, affaiblissement 4 | `cartesJouees` 3, `troisCartes` 2 | PV 5 / bête 2 | grands corbeaux (corvidés) |
| ANT078 + Lumière | invocations 6 (vocation) | perce-garde 4, soin des alliés 4, exil 4 | `defausseAPrix` 3 | exil 4 / PV 2 | quetzals (trogonidés) |
| ANT191 − Tempête | mana 7 | invocations 4, dégâts à tous 3 | `defausseAPrix` 3 | PV 5 / bête 2 | martinets (apodidés) |
| ANT191 + Calme | invocations 7 (vocation) | riposte 4, exil 4 | `vol` 3 | exil 4 / garde ennemie 3 | iguanes (iguanidés) |
| ANT226 − Ruine | garde des alliés 7 | invocations 3, soin 4 | `cartesJouees` 3 | défausse 5 / bête 2 | eiders (anatidés) |
| ANT226 + Abondance | colonne bête / `bete` 4/4 | soin des alliés 4, dégâts ciblés 4 | `bete` 4 | défausse 4 / soin ennemi 3 | capelans (osméridés) |
| ANT112 − Os | invocations 6 (vocation) | marque 4, dégâts ciblés 4 | `garde` 3 | garde ennemie 5 / PV 2 | bœufs musqués (bovidés) |
| ANT112 + Corail | exil 5 | invocations 4, soin 4 | `hesite` 3 | exil 5 / bête 2 | artémies (artémiidés) |
| ANT248 − Folie | garde du héros 7 | invocations 4, hasard 3 | `piocheCout0` 3 | PV 5 / bête 2 | perroquets et aras (psittacidés) |
| ANT248 + Raison | invocations 7 (vocation) | hésitation 4, dégâts ciblés 4 | `brule` 3 | bête 5 / soin ennemi 2 | nandous (rhéidés) |

**Bêtes changées** : Ombre (chauves-souris, puis engoulevents de A) → **grands corbeaux (corvidés)** ; Os (caribous = rennes de A, cervidés) → **bœufs musqués (bovidés)** ; Ruine (phoques annelés de A) → **eiders (anatidés)**. Aucune de mes familles n'est ailleurs dans le lot.

**Noms et prénoms changés** (déjà en jeu, ou dans le lot) : ASS130 « Le Jarghu de Khar-Modon » (Jarghu chez A et C, Khar- en jeu) → **Le Tümen d'Ulias-Modon** ; DON090 « la Voûte percée » (Voûte en jeu), puis « Puka Rangi » (Rangiwai en jeu) → **Puka Whetū, le Plafond des Navigateurs** ; ASS193 « L'Óenach » (en jeu) → **La Feis de Machaire Loisc** ; ANT078 « le Puits » (en jeu) → **Sotz'ha, l'Aven aux Mélèzes** ; ANT191 « le Temple » (en jeu) → **Ehecaxochco, la Rotonde du Vent** ; ANT248 « la Maison » (en jeu) → **Rakiwasi, les Cordelettes dénouées**. Prénoms (déjà employés aux lots précédents) : Ollin → Itztli, Hallveig → Ásvör, Fedelm → Éimhear, Pech → Ah Kin Couoh, Necahual → Nochtli, Paninnguaq → Arnaviaq, Waman → Mallku ; Marin → Lunardo (Dolfinetto).

**Gestes du ±7 changés** : Calme (la fumée droite, prise aussi par C) → **les plumes étalées sur l'escalier sans rien pour les tenir** ; Cristal (le soleil qui projette les lois, trop près de la roche qui rend la lumière de D) → **chaque famille casse une pointe de sel gravée et sale son pain avec la loi** ; Raison (les nandous en files, trop près de « tout s'aligne » de C v1) → **la cordelette commune tendue d'un acacia à l'autre, où chaque berger noue son compte en passant**. Les autres sont comparés à D (conteur_D.md) et à A et C (familles) : gestes différents.
