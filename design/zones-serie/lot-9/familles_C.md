# Lot 9 : carte des familles, conteur C (le Sournois)

**Première version : 12 h 16**, avant la moindre carte. Elle contenait les vocations, les places, les 24 pôles et les couples. À cette heure, aucun autre fichier familles_X.md n'existait dans lot-9 : C était inscrit le premier sur ses douze couples.

**Version complète : 14 h 00**, à la remise. Elle ajoute les prénoms, les institutions, les récits et les bêtes. Elle a été écrite après relecture de :
- familles_A.md (12 h 38) et conteur_A.md (12 h 38) ;
- familles_B.md (13 h 53) et conteur_B.md (13 h 53) ;
- familles_D.md et conteur_D.md (14 h 01). C remet le dernier.

Les comptes ci-dessous sont ceux du script sur conteur_C.md tel qu'il est remis. Ce qui a changé depuis 12 h 16 est listé à la fin.

**Vocations possibles pour C : 3** (Corail, Chant, Tyrannie, une par Antre). Il me faut 7 pôles hors places : **3 vocations + 4 colonnes**. La 4e colonne est déclarée.

## Compte des vocations (leçon 1 du lot 8), au script sur les lots 1 à 8

Règle : un mot peut porter une vocation si C ne l'y a jamais jouée et si elle n'a pas déjà été reprise (une seule fois avant, par un autre conteur, au plus). Une famille principale de dégâts ciblés compte comme des gros coups, quel que soit le type de zone.

| Zone | Mot | Vocation de son type | Avant (lots 1 à 8) | Verdict |
|---|---|---|---|---|
| ANT099 | Rouille | invocations | C ANT110 (lot 4), D ANT033 (lot 8) | non : déjà jouée par C |
| ANT099 | Or | invocations | D ANT183 (1), B ANT148 (2), C ANT110 (4) | non |
| ANT054 | Os | invocations | C CIT003 (4), D ANT095 (4) | non |
| ANT054 | Corail | invocations | D ANT095 (lot 4, crochet `bete`) | **oui, reprise unique** |
| ANT076 | Silence | invocations | B ANT147 (lot 5, `pietine`) | oui, reprise unique |
| ANT076 | Chant | invocations | aucune | **oui, première** |
| ANT062 | Tyrannie | invocations | D ANT182 (lot 6, `cibleGarde`) | **oui, reprise unique** |
| ANT062 | Liberté | invocations | A ANT166 (lot 4, `troisCartes`) | oui, reprise unique |
| ANT073 | Pourriture | invocations | C ANT106 (lot 5) | non : déjà jouée par C |
| ANT073 | Croissance | invocations | A CIT041 (3), B ANT040 (4), C ANT106 (5) | non |
| DON096 | Sommeil | gros coups | B DON023 (3), A ANT200 (4) | non : déjà reprise |
| DON096 | Éveil | gros coups | B ASS078 (4), A ANT026 (5), C ANT236 (5) | non |

**Bilan : 3 vocations possibles au plus** (une par Antre : ANT054, ANT076, ANT062 ; un Antre n'a qu'un pôle d'invocations : **je prends Corail, Chant et Tyrannie**). Le Donjon n'en a aucune, ANT099 et ANT073 non plus. Il me faut 7 pôles hors places (24 − 17) : **3 vocations + 4 colonnes**. Je prends donc la **4e colonne** que permet LISTE.md, et je le dis ici. Les quatre colonnes sont les quatre couples prix-crochet, un seul pôle chacun chez moi ; aucune colonne sans prix (garde/`garde`, brûlure/`brule`, marque/`vulnerable`, hésitation/`hesite`), pour ne pas recopier les colonnes de A et D au lot 8.

## Places de C (LISTE.md) : 17 familles principales, toutes tenues

Une place dans chacune des douze familles, une seconde en **garde du héros, perce-garde et pioche** ; places rares **écho**, à 4 cartes exactement, et **hésitation**. Les familles déjà principales sur le même mot (lots 1 à 8, au script) sont évitées partout. Sur nos couples communs, je suis inscrit avant A, B et D.

## Les 24 pôles (famille principale ; appoint ; crochet ; prix), au script

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT009 Citadelle, Fjord, mongole, Glace | Peste → **garde des alliés** 7 ; appoint affaiblissement 3 ; `soinEnnemi` ; défausse | Guérison → **colonne** PV 6 et `blesse` 4 ; appoint soin du héros 4, garde du héros 4 ; PV |
| DON096 Donjon, Archipel, nordique, Eau | Sommeil → **riposte** 7 (8 au plus par carte) ; appoint garde du héros 3, hésitation 3 ; `elan` ; défausse | Éveil → **soin du héros** 7 ; appoint pioche 3, mana d'Eau 3 ; `troisCartes` ; PV |
| ASS108 Assemblée, Mangrove, égyptienne, Eau | Cendre → **pioche** 7, Lois ; appoint brûlure 4, affaiblissement 3 ; `vol` ; défausse | Floraison → **perce-garde** 7, Lois ; appoint soin des alliés 4 ; `seul` ; soin ennemi |
| ASS167 Assemblée, Désert de sable, inca, Feu | Cauchemar → **garde du héros** 7, Lois ; appoint riposte 3 ; `hesiteAvant` ; PV | Rêve → **affaiblissement** 7, Lois ; appoint soin du héros 4, mana de Feu 3 ; `hesite` ; défausse |
| ASS018 Assemblée, Delta fluvial, romaine, Eau | Famine → **garde du héros** 7, Lois ; aucun appoint ; `pietine` ; PV et exil | Festin → **hésitation** 7 (place rare), Lois ; appoint soin des alliés 4 ; `garde` ; soin ennemi |
| ASS117 Assemblée, Forêt de champignons géants, inuit, Sève | Ruine → **colonne** défausse 7 et `defausseAPrix` 4 ; appoint pioche 3, garde des alliés 3 ; défausse | Abondance → **écho** (place rare) sur 4 cartes exactement (1, 3, 5, 7), Lois ; appoint soin des alliés 4 ; `cartesJouees` ; garde ennemie |
| ASS158 Assemblée, Oasis, perse, Sève | Fer → **pioche** 7, Lois ; appoint marque 4 ; `vol` ; PV | Bois → **brûlure** 7, Lois ; appoint garde des alliés 4 ; `blesse` (sans prix en PV) ; défausse |
| ANT099 Antre, Désert de sable, inca, Feu | Rouille → **colonne** garde ennemie 6 et `cibleGarde` 4 ; appoint coups au hasard 4, perce-garde 3, bêtes 4 ; garde ennemie | Or → **soin des alliés** 7 ; bêtes 4 ; `bete` ; PV |
| ANT054 Antre, Jungle, romaine, Sève | Os → **mana** de Sève 7 ; appoint riposte 4, bêtes 4 ; `vulnerable` (aucune marque dans le pôle) ; vos bêtes | Corail → **invocations** 7, vocation reprise ; appoint brûlure 4 ; `elan` (avant : `bete`) ; PV |
| ANT076 Antre, Savane, moghole, Feu | Silence → **exil** 6 ; appoint hésitation 3, bêtes 4 ; `soinEnnemi` ; exil | Chant → **invocations** 7, vocation première ; appoint marque 4, riposte 3 ; `cartesJouees` ; PV |
| ANT062 Antre, Récif, éthiopienne, Eau | Tyrannie → **invocations** 7, vocation reprise ; appoint affaiblissement 4, garde du héros 3 ; `seul` (avant : `cibleGarde`) ; vos bêtes | Liberté → **perce-garde** 7 ; appoint coups au hasard 4, bêtes 4 ; `cibleGarde` (lu avant la garde brisée) ; défausse |
| ANT073 Antre, Delta fluvial, moghole, Eau | Pourriture → **colonne** `prixBete` 6 et `bete` 4, nourrie par 4 cartes d'invocation ; appoint hésitation 3, dégâts à tous 3 ; vos bêtes | Croissance → **marque** 7 ; appoint soin du héros 4, bêtes 4 ; `vol` ; soin ennemi |

Dégâts ciblés sur 4 cartes dans chaque pôle. Aucun crochet sur 5 cartes.

**Familles principales** :

| Famille | Pôles |
|---|---|
| soin du héros | 1 |
| soin des alliés | 1 |
| garde du héros | 2 |
| garde des alliés | 1 |
| affaiblissement | 1 |
| riposte | 1 |
| brûlure | 1 |
| marque | 1 |
| mana | 1 |
| perce-garde | 2 |
| exil | 1 |
| pioche | 2 |
| écho (rare) | 1 |
| hésitation (rare) | 1 |

Soit 17 places. S'y ajoutent les vocations (invocations 3) et 4 colonnes, sans famille principale.

**Appoints (3 ou 4 cartes), en pôles, au script** :
- **3 pôles** : affaiblissement (Peste, Cendre, Tyrannie), soin du héros (Guérison, Rêve, Croissance), garde du héros (Guérison, Sommeil, Tyrannie), hésitation (Sommeil, Silence, Pourriture), soin des alliés (Floraison, Festin, Abondance), riposte (Cauchemar, Os, Chant).
- **2 pôles** : pioche, mana, brûlure, garde des alliés, marque, coups au hasard.
- **1 pôle** : perce-garde, dégâts à tous.
- Les bêtes en appoint ne sont que dans les Antres (règle des 3 cartes).

## Couples (leçon 3 du lot 8)

**Mes 4 colonnes, couples à prix, un pôle chacun chez moi, pleins à 2 dans le lot** :

| Couple | Mon pôle | Second pôle du lot |
|---|---|---|
| PV/`blesse` | Guérison | B Exil, ASS134 |
| défausse/`defausseAPrix` | Ruine | A Chaos, ANT163 |
| garde ennemie/`cibleGarde` | Rouille | B Foyer, ASS134 |
| `prixBete`/`bete` | Pourriture | D Poison, ASS047, vérifié sur conteur_D.md |

**Couples sans prix** (garde/`garde`, brûlure/`brule`, marque/`vulnerable`, hésitation/`hesite`) : aucun de mes pôles ne les nourrit (au script). Festin lit `garde` sans garde, Os lit `vulnerable` sans marque, Rêve lit `hesite` sans hésitation.

**Assemblages non nourrissants** : chacun une seule fois chez moi. Ceux qui sont à 3 ou 4 pôles du lot :
- PV/`pietine` : Famine, avec A ASS140 et ANT210, B ANT172 et D ASS178 ;
- PV/`elan` : Corail, avec A CIT033, B ASS022 et D ASS041 ;
- PV/`vol` : Fer, avec A ASS153, B ANT133 et D ANT246 ;
- défausse/`vol` : Cendre, avec A ASS054, B ASS024 et D ASS041 ;
- soin ennemi/`vol` : Croissance, avec A CIT033 et D DON098 ;
- bêtes/`seul` : Tyrannie, avec A ANT204 et D ANT246 ;
- PV/`cartesJouees` : Chant, avec A ANT204 et D ANT142 ;
- garde ennemie/`cartesJouees` : Abondance, avec B ANT031 et D ANT134.

La leçon 3 ne les compte pas comme des couples. Ils sont signalés au critique.

**Couples de mots partagés dans le lot** : j'y suis inscrit le premier, et le second prend d'autres familles principales sur les deux pôles.

| Couple de mots | Second conteur |
|---|---|
| Peste/Guérison | D ASS094 |
| Sommeil/Éveil | D ANT134 |
| Cendre/Floraison | A ANT157 |
| Cauchemar/Rêve | A ASS025 |
| Famine/Festin | A CIT033 |
| Ruine/Abondance | D ANT185 |
| Fer/Bois | B ANT216 |
| Rouille/Or | D ASS041 |
| Os/Corail | A ASS153 |
| Silence/Chant | B ASS024 |
| Tyrannie/Liberté | B ASS122 |
| Pourriture/Croissance | B DON097 |

## Prénoms, institutions, nombres (C)

**Prénoms**, aucun chez A, B ou D (relu) :

| Zone | Prénoms |
|---|---|
| CIT009 | l'emch Narangerel, le commandant Tömör |
| DON096 | le jarl Hrafnkell, les frères Ketill et Ulfr |
| ASS108 | Ipy, Henut |
| ASS167 | Waman |
| ASS018 | le passeur Vibius Lentulus |
| ASS117 | Aqqaluk |
| ASS158 | le jardinier Farrokh |
| ANT099 | Sayri |
| ANT054 | le préfet du camp Pacuvius |
| ANT076 | l'ustad Faqirullah |
| ANT062 | le pêcheur Tesfaye |
| ANT073 | le nawab Sikandar Beg, le jardinier Ghulam Rasul |

**Institutions et titres** : l'emch (médecin), le commandant, la saga, la qenbet (magistrats), l'assemblée de l'aube, le conventus, l'isumataq (le plus sage des aînés), le dadgah, l'envoyé de l'Inca, le castellum et son préfet du camp, le subahdar, l'ustad, le shum, le nawab. Aucune n'est dans les noms de zones (voir plus bas). Aucune de A (majles, rūnanga, kaisho, djadjat, silention, batab), de B (katimavik, centurion, fraglia, sabha, comices, duumvir) ou de D (unken, kopa, apella, gorsedd, ayllu, curaca).

**Nombres** : aucun nombre précis. Seulement « un », « deux » (les deux règles, les deux frères, deux sacs) et « quatre » osselets dans une main de joueur. Ni « neuf » : les « parterres neufs » sont devenus « nouveaux ». Ni « trois » (B), ni « trente » ou « huit » (D). Aucun nombre dans les noms.

## Récits (une forme par zone, aucune reprise de mes lots 7 et 8)

Les 6 récits d'ironie de l'effet inverse sont le plafond. Il y a 2 chutes en parole rapportée (ASS117 « il dit que », ANT076 « il a répondu que »). Aucun récit en « vous », aucun dialogue, aucune ouverture « X était petit quand ».

| Zone | Forme | Ironie de l'effet inverse | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT009 Artsat-Khoshuu, la Barrière de Genièvre | fable de garnison | oui | « À la porte d'Artsat-Khoshuu, deux règles : on traverse la fumée de genièvre, et l'on donne à l'emch Narangerel un bol de son sang. » | « Le commandant Tömör, qui tient le compte des visiteurs, n'a jamais osé la contredire. » |
| DON096 Vökuhaugr, le Jarl emmailloté | pillage raté | oui | « Les frères Ketill et Ulfr ont ramé jusqu'à Vökuhaugr de nuit, sans un mot, les avirons emmaillotés de laine. » | « Seulement, il fallait faire du bruit, et les deux frères étaient venus en voleurs. » |
| ASS108 Pa-Sebakh, la Cendre fertile | jugement de voisinage | oui | « Ipy brûla sa roselière au bord de la mangrove, comme chaque année avant la crue. » | « L'année suivante, elle a brûlé son propre champ, contre le vent. » |
| ASS167 Yakumanta, le Puma menteur | confession, à la première personne | non | « À Yakumanta, chacun dit à l'assemblée de l'aube ce qu'il a rêvé. » | « Je le creuse seul, la nuit. » |
| ASS018 Vada Tarda, le Dernier Convive | loi d'étiquette et son bénéficiaire | non | « La loi du conventus de Vada Tarda est courte : au banquet des moissons, nul ne touche aux plats avant que le dernier invité soit couché à table. » | « On a parlé une fois de bâtir un pont ; il aurait fallu inviter le maçon. » |
| ASS117 Pukiqtuuq, l'Héritage refusé | usage du camp, et celui qui le refuse | oui | « Au camp de Pukiqtuuq, personne n'habite la maison de ses parents. » | « Il a fini par sortir ; il dit que la maison sent meilleur depuis. » |
| ASS158 Mikh-Khorma, le Dattier condamné | procès d'un arbre | oui | « Un dattier de Mikh-Khorma laissa tomber une palme sèche sur la tête du jardinier Farrokh, qui en mourut. » | « Depuis, chaque dattier qui ne donne pas est cité devant le dadgah, qui n'a jamais été si bien nourri. » |
| ANT099 Qorihuayq'o, le Lavoir de l'Inca | portrait d'un tricheur | non | « Les orpailleurs de Qorihuayq'o lavent l'or rouge de la ravine : des pépites prises dans une croûte de rouille qu'il faut frotter des heures au sable. » | « Sayri est mort très riche, et couvert de rouille jusqu'aux coudes. » |
| ANT054 Ad Talos, le Préfet chanceux | jeu truqué | non | « Au castellum d'Ad Talos, perdu dans la forêt, les légionnaires jouent leur solde aux osselets. » | « Le jour où on l'a trouvé au pied de la falaise, ses osselets étaient encore dans sa main, et ils tombaient toujours sur la même face. » |
| ANT076 Khamoshgah, le Pavillon des Mainates | concours et son vainqueur | non | « Au pavillon de Khamoshgah, le concours de chant ne se juge pas à l'oreille. » | « Il a répondu que l'aube appartenait aux oiseaux, et qu'il n'était pas venu pour les vexer. » |
| ANT062 Däsét Natsanet, les Arêtes du Soir | évasion | oui | « Le shum de Däsét Natsanet n'avait ni chaînes ni murs pour ses prisonniers : les barracudas du lagon suffisaient. » | « Elles rouillent très vite, dans l'eau salée. » |
| ANT073 Sarigarh, les Parterres sur la Vase | chronique d'un jardin | non | « Le nawab Sikandar Beg voulut un jardin sur le delta de Sarigarh, avec ses canaux droits, ses parterres et son pavillon. » | « Le nawab actuel a déjà commandé le suivant. » |

## Bêtes (familles d'animaux, une famille par pôle chez moi, au script)

| Pôle | Bêtes | Familles | Dans le lot |
|---|---|---|---|
| ANT099 − Rouille | renard de Sechura, tarentule rousse, scolopendre géante | canidés, araignées, myriapodes | **canidés pleins à 2 avec A** (ANT204, renards arctiques) ; les arachnides sont à 2 avec B (scorpion jaune, ANT216) si on les groupe |
| ANT099 + Or | cuy doré, flamant des Andes | rongeurs, phoenicoptéridés | **rongeurs pleins à 2 avec A** (ANT018, viscaches) |
| ANT054 − Os | pangolin géant, okapi | pholidotes, giraffidés | seuls |
| ANT054 + Corail | bernard-l'ermite rouge, crabe des cocotiers, escargot géant | crustacés, gastéropodes | **crustacés pleins à 2 avec B** (ANT133, crabes violonistes) |
| ANT076 − Silence | mangouste grise, hérisson indien | herpestidés, érinacéidés | seuls |
| ANT076 + Chant | bulbul orphée, mainate religieux, coucou koel | pycnonotidés, sturnidés, cuculidés | seuls |
| ANT062 − Tyrannie | barracuda du lagon, mérou géant, poisson-lion | sphyrénidés, serranidés, scorpénidés | seuls |
| ANT062 + Liberté | raie manta, dugong (les poissons volants ne sont que dans le décor) | raies, siréniens | seuls (le dugong n'est pas un cétacé) |
| ANT073 − Pourriture | ver de vase, sangsue géante, silure du Gange | annélides, siluriformes | seuls |
| ANT073 + Croissance | rhinocéros indien, pélican gris | rhinocérotidés, pélécanidés | seuls |

Pas de bête hors des Antres.

**Avertissements** :
- **pour A, B et D** : canidés, rongeurs et crustacés sont pleins à 2 avec moi.
- **pour D** : je tiens un pôle d'annélides, siluriformes, araignées, myriapodes, poissons de récif (sphyrénidés, serranidés, scorpénidés), raies, siréniens, rhinocérotidés, pélécanidés, sturnidés, pycnonotidés, cuculidés, herpestidés, érinacéidés, pholidotes, giraffidés, phoenicoptéridés et gastéropodes.
- **ce que j'ai vérifié**, sur conteur_D.md : aucune des familles de D (hyménoptères, ésocidés, castoridés, pinnipèdes, phalacrocoracidés, léporidés, orthoptères, odobénidés, bovidés, primates, bucérotidés, caprimulgidés, coléoptères) n'est chez moi.

## Ce qui a changé depuis 12 h 16

**Crochet de la Cendre** : `brule` → `vol`, avant la moindre carte de la zone. Avec la brûlure en appoint, la Cendre aurait nourri brûlure/`brule`, déjà plein avec A Floraison et D Sécheresse.

**Après lecture de A, B et D** :
- **Prénoms** : Atoq → Waman, Bahram → Farrokh, Kusi → Sayri (Kusi Ñusta est chez D).
- **Institutions** : djadjat (A) → qenbet ; majles (A) → dadgah ; katimajiit (près du katimavik de B) → isumataq ; centurion (B) → préfet du camp ; ayllu (D) retiré.
- **Bêtes** : vigogne (camélidés pleins chez A et B), calao (D) et caracal (A) retirés.
- **Forme du récit de DON096** : la « coutume expliquée » (B) est devenue un pillage raté.

**À la remise, noms de zones** (comparés par moitié et par mot traduit) :

| Ancien nom | Proche de | Nouveau nom |
|---|---|---|
| La Qenbet de Pa-Sebakh | A, la Djadjat de Per-Ash | Pa-Sebakh, la Cendre fertile |
| Le Dadgah de Mikh-Khorma | A, le Majles des Sorbetiers ; le Divan de Yakhdarra ; l'Anjoman des Vannes | Mikh-Khorma, le Dattier condamné |
| Le Conventus de Vada Tarda | la Curie de Fervidum, l'Ordo des Viviers | Vada Tarda, le Dernier Convive |
| L'Isumataq de Pukiqtuuq | le Katimavik | Pukiqtuuq, l'Héritage refusé |
| Le Huñunakuy de Yakumanta | une assemblée traduite | Yakumanta, le Puma menteur |
| Ad Talos, les Osselets du Préfet | *talus* = osselet, mot traduit dans le même nom | Ad Talos, le Préfet chanceux |
| Däsét Natsanet, le Lagon du Shum | la Lagune des Pieux-d'Encre | Däsét Natsanet, les Arêtes du Soir |

Tous ces noms sont absents de noms-pris.txt et de A, B et D, au script.

**Proches de D, signalés** :
- ASS041 a un mur d'offrandes de fer cloué. Mon Mikh-Khorma a un clou planté dans un dattier : une peine, pas une offrande, sur un arbre vivant.
- ASS047 a un festin d'hôte. Mon Vada Tarda a une loi d'étiquette du banquet, sans hôte ni ennemi.
