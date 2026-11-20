# Lot 10 · carte des familles du conteur B (l'Explorateur marchand)

**Première version : 14 h 45**, avant la moindre carte, après lecture de familles_C.md et familles_A.md (14 h 30).

**Seconde version : 15 h 05**, après lecture de **familles_D.md (14 h 30, inscrit avant moi)**. Changements :
- **Cristal** : D le prend en invocations (ANT197, 3e et dernier emploi, inscrit avant moi). Je le lui laisse : mon ANT052 met sa vocation sur la **Pierre** (3e et dernier emploi, que D me laissait), et le Cristal passe en **brûlure** (reprise de A DON028, lot 6), avec `cartesJouees` (D lit `troisCartes` sur le Cristal).
- **Vide** : D y met la brûlure (ASS043). Mon Vide passe en **garde du héros** (reprise de D ASS031, lot 5, qui lisait `hesite` ; moi `piocheCout0`) ; ma seconde garde du héros quitte la Pierre.
- **Crochets** : ma Brume lit `garde` au lieu de `hesiteAvant` (A lit `hesite` sur sa Brume : même intention ennemie) ; mon Exil lit `troisCartes` au lieu de `hesite` (D lit `hesiteAvant` sur son Exil).
- **Bêtes** : canidés et lépidoptères passaient à 3 avec D (chiens, papillons de nuit). Mes renards deviennent des **nécrophores** (coléoptères, à 2 avec les lucioles de A), mon sphinx devient un **bourdon terrestre** (apidés, déjà dans le pôle).
- **Noms** : D a « Mortefalaise » et « l'Âtre des Égarés » : mon ANT004 devient **Fondebise, les Crémaillères sous la Glace** (ni préfixe Morte-, ni Âtre). D a « dix-neuf » aubes : mon ANT052 dit « vingt-six jours ».
- **Récits proches de D, signalés** : ASS027 (Vide/Étoiles) et ASS043 de D ont tous deux un astronome. Chez D, des étoiles dans la glace noire qui s'allument quand une du ciel s'éteint ; chez moi, une clepsydre qui ne s'accorde plus au ciel, et un temple qui garde l'heure de l'eau. Ni le même geste (lire la glace / mesurer l'eau), ni la même chute, ni le même ±7 (sa foule / mon ciel ouvert).

**Troisième version : à la remise (cartes écrites et validées, valider10.py 0 erreur)**, après relecture de familles_A.md (14 h 48), familles_C.md (14 h 56), familles_D.md (14 h 52) et des cartes publiées de A, C et D. Changements :
- **Foyer (ANT004 +)** lit `blesse` au lieu de `garde` : C ANT067, pôle d'origine de la vocation, lisait déjà `garde` (A ANT187 lisait `bete`, D a sa colonne `brule` sur le Foyer). Aucun PV en prix sur le pôle.
- **Noms** : « corral », « grains » et « prairie » traduisaient des mots principaux déjà pris (enclos, perles, prés) ; D a « le Chœur des Lamelles ». ASS091 devient **Vetaherrera, le Recuento des Crinières**, ANT024 **Sant Lèbre, le Chapelet de corail**, ANT201 **Cluain Meala, la Cueillette des Ombelles**, ASS027 **Per-Merkhet, l'Heure de l'Eau**.
- **Nombres** : le chapelet a **soixante** grains (cinquante servait déjà dans les cinquante-trois fèves d'ASS084).
- **Prix** : Guérison (ASS020 +) payait en soin ennemi sur les 7 cartes ; soin ennemi sur 5, exil sur 3.
- **Récits** : la dernière phrase d'ANT004 ne commence plus par « On » (trois chutes en « On »).
- **Sort tiré** : C ASS119 (forme « le malentendu », inscrite avant moi) a aussi un sort tiré ; C l'a signalé, je le signale aussi au critique. Si l'un change, c'est ASS084.

## 1. Compte des vocations (au script, lots 1 à 9, 768 pôles)

Script `voc10.py` sur `poles.json` (lots 1 à 9). Règle de la leçon 1 du lot 9 : par mot et par type ; invocations = 5 cartes d'invocation ou plus ; gros coups = 5 cartes de dégâts ciblés, comptés depuis le lot 5 ; pioche des Assemblées = 5 cartes de pioche ; trois emplois par mot au plus, jamais deux fois chez le même conteur, une seule vocation par mot dans le lot.

| Zone | Mot | Type | Emplois avant (lot, conteur, zone) | Verdict |
|---|---|---|---|---|
| DON124 | Brume | gros coups | aucun depuis le lot 5 | libre, mais **A prend la Brume en invocations** (ANT242) : un mot, une vocation par lot |
| DON124 | Clarté | gros coups | aucun depuis le lot 5 | **libre, 1er emploi : je le prends** |
| ANT044 | Sommeil | invocations | C ANT236 (lot 5, `brule`, PV), D ANT104 (lot 6) | **libre, 3e et dernier emploi : je le prends** (A me le laisse) |
| ANT044 | Éveil | invocations | A ANT026 (lot 5), C ANT236 (lot 5) | libre (3e), non pris : un seul pôle d'invocations par Antre |
| ANT024 | Os | invocations | C CIT003 (lot 4), D ANT095 (lot 4) | libre (3e), non pris |
| ANT024 | Corail | invocations | D ANT095 (lot 4, `bete`), C ANT054 (lot 9, `elan`) | **libre, 3e et dernier emploi : je le prends** |
| ANT004 | Exil | invocations | A ANT187 (lot 5) | libre (2e), non pris |
| ANT004 | Foyer | invocations | A ANT187 (lot 5, `seul`, PV, canidés), C ANT067 (lot 6) | **libre, 3e et dernier emploi : je le prends** |
| ANT207 | Pourriture | invocations | C ANT106 (lot 5, `seul`, gypaètes) | **libre, 2e emploi : je le prends** (C ne peut pas : déjà C) |
| ANT207 | Croissance | invocations | A CIT041, B ANT040, C ANT106 | fermé (trois emplois, et déjà B) |
| ANT201 | Poison | invocations | D ANT115 (lot 6), C ANT128 (lot 7) | **libre, 3e et dernier emploi : je le prends** |
| ANT201 | Nectar | invocations | D CIT013 (lot 1), A CIT005 (lot 3) | libre (3e), non pris |
| ANT052 | Pierre | invocations | C ANT195 (lot 4, `pietine`, PV, crapaud, lézard, tortue), D ANT246 (lot 9, `vol`, PV, lièvres) | **libre, 3e et dernier emploi : je le prends** (v2, laissé par D) |
| ANT052 | Cristal | invocations | C ANT195 (lot 4), A ANT210 (lot 9) | **pris par D** (ANT197, inscrit avant moi) |
| ASS004 | Fer | pioche | C ASS158 (lot 9, `vol`, PV) | **libre, 2e emploi : ma place de pioche** |
| DON124 | Brume | pioche | aucun | **libre, 1er emploi : ma seconde place de pioche** (A y a sa vocation d'invocations, pas la pioche) |
| — | Étoiles, Guérison, Mort, Vie, Sommeil, Éveil, Os, Foyer | pioche | 3 emplois ou déjà B | fermés pour ma pioche |

**Mes vocations : 7, une par Antre et une au Donjon** : Clarté (DON124 +, gros coups), Sommeil (ANT044 −), Corail (ANT024 +), Foyer (ANT004 +), Pourriture (ANT207 −), Poison (ANT201 −), **Pierre (ANT052 −)** (v2 : le Cristal est à D). **Aucune colonne.** 24 pôles = 17 places + 7 vocations. Aucun mot ne porte deux vocations dans le lot (A : Ombre, Brume, Sève, Silence ; C : Glace, Ciel, Pureté, Sécheresse, pioche Tempête ; D : Tyrannie, Guérison, Chant, Exil, Cristal, pioche Aurore).

## 2. Les 24 pôles (famille principale ; appoint visé ; crochet ; prix principal + second sur 2 cartes)

Familles principales jamais principales sur le même mot (lots 1 à 9, au script), sauf **trois reprises** (v2) : Vide en garde du héros (D ASS031, lot 5, `hesite`), Cristal en brûlure (A DON028, lot 6) et Fer en pioche (C ASS158, lot 9, `vol`, PV), chacune avec un autre crochet et d'autres prix. La garde du héros a été principale sur tous mes mots sauf la Liberté, et la brûlure sur tous sauf le Vide, que D a pris. **Crochets d'intention ennemie sur 1 pôle** (Pierre, `elan`). Aucun couple qui se remplit lui-même (aucune colonne chez moi) : aucun crochet n'est nourri sur 3 cartes par son propre pôle.

| Zone | Pôle − | Pôle + |
|---|---|---|
| DON124 Donjon, Récif, zouloue, Eau | Brume → **pioche** (on tâtonne dans la brume, on trouve) ; dégâts ciblés, affaiblissement ; `garde` (v2 ; garde sur une carte) ; PV + défausse | Clarté → **gros coups** (vocation, 1er emploi : la sagaie dans l'eau claire) ; marque 2 au plus ; `vulnerable` ; exil + défausse |
| ASS084 Assemblée, Haute montagne, andalouse, Pierre | Tyrannie → **garde des alliés**, Lois (la vanne fermée protège le village) ; affaiblissement ; `troisCartes` (3 cartes au plus) ; défausse + PV | Liberté → **garde du héros**, Lois (le seul jamais principal sur le mot) ; pioche ; `blesse` (sans PV en prix) ; exil + défausse |
| ASS027 Assemblée, Champignons géants, égyptienne, Sève | Vide → **garde du héros** (v2, reprise de D ASS031 lot 5 ; dans le noir, rien à frapper), Lois ; hésitation ; `piocheCout0` ; défausse + PV | Étoiles → **exil**, Lois (une étoile ne se lève qu'une fois par nuit) ; marque, pioche, garde du héros, soin des alliés (4 chacun) ; `hesite` (sans hésitation dans le pôle) ; exil + défausse |
| ASS020 Assemblée, Volcan, vénitienne, Feu | Peste → **soin des alliés**, Lois (les gardiens du lazaret) ; garde des alliés ; `brule` (sans brûlure sur 3 cartes) ; PV + défausse | Guérison → **hésitation** (place rare ; le pavillon de quarantaine qui arrête les navires), Lois ; affaiblissement ; `garde` (garde du héros sur 2 cartes au plus) ; soin ennemi (5) + exil (3) |
| ASS091 Assemblée, Marais, andalouse, Sève | Mort → **riposte** (≤ 8 par carte, réveil compris), Lois ; garde des alliés ; `blesse` (sans PV en prix) ; défausse + garde ennemie | Vie → **marque**, Lois ; soin du héros ; `cartesJouees` (3 cartes au plus) ; PV + soin ennemi |
| ASS004 Assemblée, Fjord, égyptienne, Glace | Fer → **pioche** (reprise de C, 2e emploi), Lois ; soin du héros (4), mana de Glace et dégâts à tous (3) ; `vulnerable` (sans marque sur 3 cartes) ; défausse + garde ennemie | Bois → **perce-garde**, Lois (le coin de bois qui fend le granit) ; riposte et coups au hasard (4) ; `cibleGarde` (lu avant le perce-garde, sans garde ennemie en prix) ; PV + exil |
| ANT044 Antre, Falaise côtière, inuit, Vent | Sommeil → **invocations** (vocation, 3e emploi : morses et ours endormis) ; hésitation (4) ; `cartesJouees` ; bête + défausse | Éveil → **écho** (place rare, 4 cartes au premier niveau, 3 cartes faites pour être doublées : le premier cri réveille la colonie) ; bêtes 4 ; `blesse` (sans PV en prix) ; bête + exil |
| ANT024 Antre, Récif, gothique, Eau | Os → **soin du héros** (le grain d'os du pauvre) ; bêtes 4 ; `blesse` (sans PV en prix) ; défausse + bête | Corail → **invocations** (vocation, 3e emploi) ; mana d'Eau ; `brule` (sans brûlure sur 3 cartes) ; garde ennemie + défausse |
| ANT004 Antre, Glacier, gothique, Glace | Exil → **mana** de Glace (≤ 2 par carte, réveil compris) ; bêtes 3, brûlure ; `troisCartes` (v2) ; PV + exil | Foyer → **invocations** (vocation, 3e emploi : les bêtes de la maison) ; soin des alliés ; `blesse` (v3 ; sans PV en prix) ; soin ennemi + défausse |
| ANT207 Antre, Toundra, japonaise féodale, Glace | Pourriture → **invocations** (vocation, 2e emploi : charognards du camp) ; coups au hasard (4) ; `vulnerable` ; bête + PV | Croissance → **affaiblissement** (l'ail des ours et les pousses qui rendent la force, la reprennent à l'ennemi) ; bêtes 4, riposte 3 ; `troisCartes` (3 cartes au plus) ; garde ennemie + PV |
| ANT201 Antre, Delta fluvial, celte, Eau | Poison → **invocations** (vocation, 3e emploi : vipères, crapauds, frelons de la prairie) ; brûlure ; `hesiteAvant` ; bête + défausse | Nectar → **perce-garde** (les abeilles passent entre les plaques) ; bêtes 4, soin du héros 4 ; `cibleGarde` (lu avant le perce-garde) ; bête + exil |
| ANT052 Antre, Mangrove, mésopotamienne, Eau | Pierre → **invocations** (v2 : vocation, 3e et dernier emploi : buffles, sangliers, pélicans) ; pioche ; `elan` (intention, 1/2) ; défausse + exil | Cristal → **brûlure** (v2 : reprise de A DON028, lot 6 ; le sel dans les entailles) ; bêtes 4 ; `cartesJouees` ; garde ennemie + PV |


**Comptes (v2, vérifiés au script sur les cartes à la remise)** : soin du héros 1 (Os), soin des alliés 1 (Peste), garde du héros 2 (Liberté, Vide), garde des alliés 1 (Tyrannie), affaiblissement 1 (Croissance), riposte 1 (Mort), brûlure 1 (Cristal), marque 1 (Vie), mana 1 (Exil), perce-garde 2 (Bois, Nectar), exil 1 (Étoiles), pioche 2 (Brume, Fer) ; rares : écho 1 (Éveil), hésitation 1 (Guérison). **17.** Vocations 7. Colonnes 0.

**Avec A et C (mêmes mots)** : A Brume invocations / Clarté vol de vie (`vol`) / Sommeil brûlure / Éveil coups au hasard / Fer colonne PV-`blesse` / Bois marque (`defausseAPrix`) ; C Pourriture soin du héros (`bete`) / Croissance perce-garde (`cibleGarde`). Aucune de mes familles ni aucun de mes crochets n'est le leur sur le même mot.

**Couples (2 pôles du lot au plus)** : je n'en prends aucun. Il reste, après A et C : garde / `garde` 1, brûlure / `brule` 1, marque / `vulnerable` 2, bête / `bete` 2 (D).

## 3. Récits : forme, intrigue, première et dernière phrase

Aucune forme de mes lots 8 et 9 (inventaire, rite funéraire, coutume, métier par sa règle, ordalie, décret retourné, conte de veillée, pèlerinage, chronique, légende de troupeau, proverbe, mesure manquée, vie de saint), ni de A ou C au lot 10. **Un seul document cité** (ASS004, le rapport). Aucun dialogue, aucune énumération, aucune chute en parole rapportée. Une seule histoire d'argent (ASS020, la soie jaunie).

| Zone | Forme | Intrigue | Première phrase | Dernière phrase |
|---|---|---|---|---|
| DON124 | l'année sans brume | Mondli tient les nasses de roseau du récif, qui ne prennent que par brume ; une saison claire, les poissons voient les roseaux ; il descend sous le récif chercher le vieux mérou à la sagaie | « Les nasses d'Esiphingweni sont des enclos de roseaux plantés dans le récif, et elles ne prennent que par temps de brume. » | « Il remonta avec la sagaie, sans le poisson, et la brume revint le lendemain. » |
| ASS084 | le tirage au sort | chaque année une fève noire désigne qui tient la clé de la vanne de l'acequia ; Ginés la garde ; le village ouvre les vannes à la pioche | « À Benizalte, on tire au sort chaque printemps celui qui tiendra la clé de l'acequia. » | « La clé pend toujours à son clou, chez sa veuve, et personne ne vient la réclamer. » |
| ASS027 | la vérification | l'horologue garde l'heure à la clepsydre sous les chapeaux ; une fois l'an il monte voir les étoiles ; elles ne s'accordent plus ; il donne raison à l'eau | « Sous les chapeaux de Per-Merkhet, on ne voit jamais le ciel, et l'heure du temple se garde à l'eau. » | « Le temple a une heure d'avance sur le ciel, et ne s'en excuse pas. » |
| ASS020 | le marché retourné | la Sanità envoie les balles suspectes à l'île de soufre ; la soie cramoisie du marchand Bembo revient jaune ; elle se vend | « Toute balle venue d'un port suspect passe d'abord par Solfera, l'île qui fume au large. » | « L'année suivante, Bembo envoya à l'île des soies qui n'avaient jamais vu un malade. » |
| ASS091 | le dénombrement | après l'hiver noyé, les yegüeros comptent les juments vivantes et mortes au corral ; le vieux Cristóbal compte aussi les poulains à naître | « Chaque été, les yegüeros de Vetaherrera sortent du marais les juments sauvages et les comptent au corral. » | « Il ajouta au compte les ventres ronds, et le corregidor, qui n'y entendait rien, signa. » |
| ASS004 | **document : le rapport** | l'intendant Ankhu taille un obélisque dans le granit du fjord ; le fer casse au froid ; les coins de bois mouillés gèlent et fendent la pierre ; trop | « Rapport de l'intendant Ankhu au vizir, écrit au bord de la mer froide. » | « Nous rapportons la moitié ; l'autre était trop belle pour voyager. » |
| ANT044 | l'attente | la vieille Aalasi guette chaque printemps le premier guillemot ; l'année où elle s'endort, la colonie revient sans elle | « Chaque printemps, Aalasi s'assoit au bord de la falaise d'Appaliarsuit et attend le premier guillemot. » | « On ne la réveilla pas, et les oiseaux ne s'en aperçurent pas. » |
| ANT024 | la vie d'un objet | le chapelet du patron corailleur : grains d'os, puis de corail un à un avec la fortune, puis vendus un à un | « Le chapelet de Bertran Aicart avait d'abord soixante grains d'os de bœuf, enfilés par sa mère quand il partit plonger sur les bancs de Sant Lèbre. » | « On l'enterra avec, et il n'y restait qu'un grain de corail, au milieu. » |
| ANT004 | la procession | le glacier avance sur Fondebise ; le curé le bénit trois étés ; le village part ; les âtres sortent de la glace des générations plus tard | « Quand le glacier descendit sur Fondebise, le curé Jacquemet monta le bénir avec la croix, et tout le village derrière lui. » | « Les âtres, eux, étaient en bon ordre, chacun avec sa crémaillère. » |
| ANT207 | l'hivernage | une garnison d'ashigaru hiverne sur la toundra ; le riz pourrit, les hommes aussi ; au printemps, un Aïnou leur montre l'ail des ours | « Le seigneur envoya trente-huit hommes garder la côte nord, et oublia de leur dire comment on y passe l'hiver. » | « Tōkichi en planta autour du poste, qui fut abandonné l'année suivante. » |
| ANT201 | la cueillette | Eithne coupe la reine-des-prés pour l'hydromel du chef, à côté de l'œnanthe mortelle ; elle les distingue à l'odeur ; elle perd l'odorat | « Dans les prés du delta, la reine-des-prés et l'œnanthe poussent au même endroit, et se ressemblent. » | « Elle coupe encore, et personne n'est mort, ce qui ne prouve rien. » |
| ANT052 | le convoi | la crapaudine de pierre du temple vient des montagnes sur un radeau de roseaux ; elle coule dans le marais ; on bâtit le temple là | « Il n'y a pas une pierre dans le marais de Gu-Abba, et la porte du temple devait tourner sur une. » | « La porte tourne sur une pierre que personne n'a vue. » |

## 4. Noms de zones (définitifs, v3 ; comparés au script à noms-pris.txt par moitié, mot principal, préfixe et traduction, et aux fiches publiées de A, C et D)

Esiphingweni, la Sagaie des Brumes (DON124) ; Benizalte, la Clé de l'Acequia (ASS084) ; Per-Merkhet, l'Heure de l'Eau (ASS027) ; Solfera, les Balles jaunies (ASS020) ; Vetaherrera, le Recuento des Crinières (ASS091) ; Iaret-Mehty, l'Obélisque du Nord (ASS004) ; Appaliarsuit, le Nichoir des Guillemots (ANT044) ; Sant Lèbre, le Chapelet de corail (ANT024) ; Fondebise, les Crémaillères sous la Glace (ANT004) ; Kitamagari, les Baraques du Givre (ANT207) ; Cluain Meala, la Cueillette des Ombelles (ANT201) ; Gu-Abba, la Crapaudine engloutie (ANT052).

## 5. Prénoms, institutions, nombres

- **Prénoms** : Mondli kaNdaba (DON124) ; Ginés Molina (ASS084) ; l'horologue Amenemope (ASS027) ; le marchand Zuane Bembo (ASS020) ; le yegüero Cristóbal Ojeda (ASS091) ; l'intendant Ankhu (ASS004) ; Aalasi (ANT044) ; Bertran Aicart (ANT024) ; le curé Jacquemet (ANT004) ; Tōkichi (ANT207) ; Eithne (ANT201) ; Ur-Lugal (ANT052).
- **Institutions** : la clé de l'acequia et le tirage des fèves (ASS084, pas d'assemblée nommée) ; les horologues du temple (ASS027) ; la Sanità et ses provéditeurs (ASS020) ; la junte des yegüeros et le corregidor (ASS091) ; le vizir (ASS004). Ni « conseil », ni « Maison de Vie », ni « mir », ni « kapu ».
- **Nombres précis (B)** : dix-sept nasses (DON124), cinquante-trois fèves (ASS084), soixante grains (ANT024, v3), trente-huit hommes et onze survivants (ANT207), vingt-six jours (ANT052). Aucun ailleurs (un, deux, la moitié, une heure). Ni vingt, ni quarante, ni cent, et « cinquante » une seule fois (dans cinquante-trois).

## 6. Bêtes (noms d'invocation ; une famille par pôle, aucune deux fois chez moi)

- Sommeil (vocation) : morses, phoques barbus (pinnipèdes), ours blanc (ursidés) ;
- Éveil : guillemots, macareux (alcidés), mouettes tridactyles (laridés) ;
- Os : murène (murénidés), poulpe (céphalopodes) ;
- Corail (vocation) : mérou (serranidés), labres (labridés), rascasse (scorpénidés), langouste (crustacés) ;
- Exil : bouquetin (caprins), gypaète (rapaces), hermine (mustélidés) ;
- Foyer (vocation) : chat (félins), grillons (orthoptères), hirondelles (hirundinidés) ;
- Pourriture (vocation) : corbeaux à gros bec (corvidés), mouches à viande (diptères), nécrophores (coléoptères) ;
- Croissance : cerf sika (cervidés), grues du Japon (gruidés) ;
- Poison (vocation) : vipères péliades (serpents), crapauds (batraciens), frelons (vespidés) ;
- Nectar : abeilles noires, bourdons (apidés) ;
- Pierre (vocation) : buffle d'eau (bovidés), sanglier des roseaux (suidés), pélican frisé (pélécanidés) ;
- Cristal : martin-pêcheur pie (alcédinidés), héron goliath (ardéidés), avocettes (récurvirostridés).

**Rencontres avec A, C et D, à 2 au plus** : serpents (A vipères Sommeil, B Poison), apidés (A abeilles Éveil, B Nectar), batraciens (D grenouilles, B crapauds), rapaces (D condors, B gypaète), bovidés (A saïgas, B buffles), corvidés (A corneilles, B corbeaux), coléoptères (A lucioles, B nécrophores), félins (A lions, B chat), mustélidés (A blaireaux, B hermine), gruidés (A grues, B grues du Japon), cervidés (C rennes, B cerf sika), suidés (C porcs, B sanglier), ardéidés (A bihoreaux, B héron goliath). **Chacune de ces familles est pleine à 2.** Plus de canidés ni de lépidoptères chez moi (D et A les ont).

## 7. Extrêmes

−7 : vide (DON124, ANT044, ANT201), silence (ASS027, ANT004), ruine (ASS020, ANT207), ordre (ASS084), foule (ASS091, ANT024), démesure (ASS004, ANT052). +7 : démesure (DON124, ASS004, ANT207), foule (ASS084, ANT044, ANT004), ordre (ASS027, ASS091), objet (ASS020 : les soies jaunes), geste (ANT024, ANT052), vide (ANT201). Aucun pigment au +7, aucun végétal qui avale un bâtiment. **Avec A sur Brume/Clarté** : son +7 est « on voit jusqu'à la mer, plus un oiseau » ; le mien sera le fond du récif vu d'en haut, la sagaie et le mérou. **Sur Sommeil/Éveil** : son ermite dans un volcan ; ma falaise d'oiseaux. **Sur Fer/Bois** : son église sans clous ; mon obélisque fendu au coin de bois.
