# Lot 11 · carte des familles du conteur B (l'Explorateur marchand)

**Première version : 15 h 28**, avant la moindre carte. familles_D.md est apparu à la même minute (15 h 28 au `ls`, « 15 h 35 » dans son en-tête) : je le tiens pour inscrit avant moi, et je change ce qui le croise.

**Seconde version : après lecture de familles_D.md**, toujours avant les cartes. Changements :
- **Croissance** : D (ASS123, même couple) y met l'exil. Ma Croissance passe aux **coups au hasard** (place rare, jamais principale sur le mot : les graines que le vent jette sur la lande) ; l'**exil** va à la **Vie** (jamais principal sur le mot) ; l'**Éveil** prend l'**affaiblissement** (reprise, 1 avant, crochet `seul`).
- **Flamants** : D les a au Chant d'un autre salar (ANT094). Ma Pureté prend des **avocettes** (récurvirostridés), et mon récit d'ANT010 suit.
- **Formes** : D a « l'interdit de pêche » (ANT043) et « l'interdit de parole » sur le sel (ANT094). Mon ANT135 devient **la carte perdue** (les galeries du temple où l'on pêche à la décrue) ; mon ANT178 devient **l'oracle du gecko** (compter les cris, que l'écho de la grotte multiplie), sans vœu de silence.
- **Prénom** : D a « le ticitl Tlacotzin » ; mon souffleur de conque devient **Itzcuauhtzin**.
- **Noms** : yoriai, Popol Na, Multepal, Garnison, Collège, Veillée, Bassin, Grotte, Kraal, Prasat, Trapeang, Chryso-, Aero- et Tlalxoco sont déjà en jeu (noms-pris.txt) : tous mes noms changent, voir la section 4.
- **Couple défausse / `defausseAPrix`** : D le prend sur l'Ordre (ANT132), moi sur la Pourriture : **2 pôles, plein** pour A et C.

**Troisième version : à la remise** (cartes écrites et validées au script, 0 erreur), après relecture de familles_A.md (15 h 38), familles_C.md (15 h 59) et familles_D.md (15 h 46). Le script a relevé que quatre de mes familles avaient déjà été principales sur leur mot, chacune une fois, dont trois chez moi. Changements :
- **Clarté** : brûlure → **coups au hasard** (place rare, jamais principale sur le mot : le sel renvoie le soleil n'importe où).
- **Croissance** : coups au hasard → **pioche des Assemblées** (vocation, 2e emploi après D ASS100, qui lisait `troisCartes` et payait en PV ; moi `garde`, soin ennemi + PV).
- **Sève** : mana → **colonne brûlure / `brule`** (la bande trempée brûle avec le copal ; crochet sur 4 cartes, brûlure sur 3). Couple avec C Or (ASS138) : **plein**.
- **Foyer** : garde du héros → **colonne garde / `garde`** (crochet sur 4 cartes, garde du héros sur 2). Couple avec D Vérité : **plein**. Plus d'enchaînement chez moi au-delà d'une carte.
- **Oubli** : crochet `garde` → **`piocheCout0`** (`garde` reste à 3 pôles chez moi : Croissance, Corruption, Foyer).
- **Places perdues : garde du héros, brûlure, mana** (déjà principales sur tous les mots qui restaient libres). Restent deux reprises déclarées, Sommeil et Éveil, chacune sur un emploi d'un autre conteur.
- **Exil** : lynx (félins) et élans (cervidés, avec les rennes de A : plein), plus de gloutons (les mustélidés restent libres).
- **Nombres** : trente-six hamacs (CIT032), cinq nuits (ASS067 ; C a quatre), les Pléiades au lieu de sept étoiles (ASS073 ; C a sept), quelques pas (ANT189), plusieurs abbés (ANT178).
- **Nom** : ANT189 devient « Isikhwebu, la Lèche du Brouillard » (« des Brumes » est déjà le complément de mon Esiphingweni du lot 10).
- **Feu nouveau** : C a changé ANT145 (le guetteur à contretemps) ; ma nuit sans feu (ASS073) reste seule dans le lot.

## 1. Compte des vocations (au script, lots 1 à 10, 864 pôles)

Script `voc11.py` sur `poles.json` (lots 1 à 10), complété par la lecture des cartes des familles des lots 4 à 10 (emplois déclarés). Règle : par mot et par type ; invocations = 5 cartes d'invocation ou plus (tous lots) ; gros coups = 5 cartes de dégâts ciblés, comptés depuis le lot 5 ou déclarés ; pioche des Assemblées = 5 cartes de pioche dans une Assemblée ; trois emplois par mot au plus, jamais deux fois chez le même conteur, une seule vocation par mot dans le lot.

| Zone | Mot | Type | Emplois avant (lot, conteur, zone) | Verdict |
|---|---|---|---|---|
| DON019 | Rouille | gros coups | B ASS021 (lot 5), C ASS063 (lot 5) ; A ASS118 (lot 4, avant le lot 5, non déclaré) | **fermé pour moi** (déjà B) |
| DON019 | Or | gros coups | aucun compté (A DON020, lot 2, non déclaré) | **libre, 1er emploi : je le prends** |
| ANT189 | Brume | invocations | D ANT047 (5), C ANT129 (6), A ANT242 (10) | fermé (trois emplois) |
| ANT189 | Clarté | invocations | A ANT027 (6), B ANT098 (8) | fermé pour moi (déjà B) → **pas de vocation dans ANT189** |
| ANT010 | Corruption | invocations | A ANT156 (lot 6 : `brule`, bête + PV, suidés, rats, scolopendres) | **libre, 2e emploi : je le prends** |
| ANT010 | Pureté | invocations | B ANT150 (9), C ANT090 (10) | fermé pour moi |
| ANT122 | Oubli | invocations | C ANT202 (4), C CIT014 (5) | libre (3e), **laissé à D** (ANT213, même couple) |
| ANT122 | Mémoire | invocations | C ANT202 (lot 4 : `bete`, garde ennemie, cormorans), C ANT048 (lot 6 : `bete`, PV, cassenoix, renne, chienne, ourse) | **libre, 3e et dernier emploi : je le prends** |
| ANT178 | Silence | invocations | B ANT147 (5), A ANT042 (10) | fermé pour moi (déjà B) ; libre pour D (3e) |
| ANT178 | Chant | invocations | C ANT076 (lot 9 : `cartesJouees`, PV, bulbul, mainate, coucou), D ANT082 (lot 10 : `cibleGarde`, bête + défausse, grenouilles) | **libre, 3e et dernier emploi : je le prends** |
| ANT087 | Exil | invocations | A ANT187 (lot 5 : `seul`, PV, chiens, renards, chacals), D ANT102 (lot 10 : `hesiteAvant`, bête + défausse, chevaux) | **libre, 3e et dernier emploi : je le prends** |
| ANT087 | Foyer | invocations | A ANT187, C ANT067, B ANT004 | fermé |
| ANT135 | Ruine | invocations | C ANT186 (8), D ANT185 (9) | libre (3e), non pris (une vocation par Antre) |
| ANT135 | Abondance | invocations | C ANT165 (lot 2 : `bete`, soin ennemi + PV, kaïrons), C CIT012 (lot 3 : `bete`, garde ennemie, harengs) | **libre, 3e et dernier emploi : je le prends** |
| ASS072, ASS081, ASS067, ASS073 | tous | pioche des Assemblées | Sang, Sève (B ASS176), Mort, Vie (B ASS074) : déjà B ; Croissance : D ASS100 (lot 4) ; les autres libres | **v3 : Croissance, 2e emploi** ; les autres non pris |

**Mes vocations : 7 (v3)** : Or (DON019 +, gros coups, 1er), Corruption (ANT010 −, 2e), Mémoire (ANT122 +, 3e), Chant (ANT178 +, 3e), Exil (ANT087 −, 3e), Abondance (ANT135 +, 3e), Croissance (ASS081 +, pioche des Assemblées, 2e). **Trois colonnes** : Pourriture (ASS081 −), Sève (ASS072 +), Foyer (ANT087 +). 24 pôles = 14 places + 7 vocations + 3 colonnes.

**Pour A, C et D (couples partagés)** : je laisse libres l'**Oubli** en invocations (D ANT213) et le **Silence** en invocations (D ANT094, 3e emploi possible pour D). La **Clarté** en invocations reste ouverte à D (ANT043 : A et B l'ont eue, pas D). Sur Rouille/Or, C (ASS138) peut prendre la pioche des Assemblées sur la Rouille (aucun emploi), pas sur l'Or (A et C l'ont eue).

## 2. Les 24 pôles (famille principale ; appoint visé ; crochet ; prix principal + second sur 2 cartes)

Places de LISTE.md : une dans chacune des 12 familles, une seconde en **soin du héros, marque, riposte**, rares **écho** (4 cartes, au premier niveau) et **coups au hasard**. Familles choisies d'abord parmi celles **jamais principales sur le mot** (lots 1 à 10, au script) ; reprises déclarées (v3) : Sommeil en garde des alliés (A ANT026, lot 5) et Éveil en affaiblissement (D ANT134, lot 9), chacune avec un crochet et des prix que le pôle d'origine n'avait pas. Les reprises de la v2 sur mes propres emplois (Sève, Clarté, Foyer) sont retirées.

**Crochets : aucun dans plus de 3 de mes pôles. Intention ennemie dans 2 pôles** (Éveil `seul`, Vide `pietine`). **Enchaînement : une carte** (Sève, `cartesJouees`). Aucun demi-couple : un pôle qui lit un crochet ne nourrit jamais ce crochet sur plus d'une carte, sauf les trois colonnes.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT032 Citadelle, Jungle, aztèque, Sève | Sommeil → **garde des alliés** (reprise, 1 avant ; les dormeurs gardés dans les hamacs) ; soin des alliés, pioche ; `vulnerable` (marque sur 1 carte au plus) ; défausse + PV | Éveil → **affaiblissement** (v2 ; reprise, 1 avant : la conque qui fait sursauter l'assaillant) ; garde du héros, riposte ; `seul` (intention 1/2) ; PV + exil |
| DON019 Donjon, Falaise côtière, byzantine, Vent | Rouille → **écho** (place rare ; jamais principal sur le mot : la rouille gagne de proche en proche ; 4 cartes au premier niveau, 3 cartes à doubler) ; affaiblissement, perce-garde, dégâts ciblés ≤ 4 cartes ; `hesiteAvant` (hésitation sur 1 carte au plus) ; défausse + PV | Or → **gros coups** (vocation, 1er emploi ; 5 cartes de dégâts ciblés, 30 au plus) ; garde du héros, mana de Vent ; `cibleGarde` (sans garde ennemie en prix) ; PV + exil |
| ASS072 Assemblée, Forêt boréale, maya, Glace | Sang → **soin du héros**, Lois (jamais principal ; la saignée qui soigne) ; riposte, pioche ; `piocheCout0` ; défausse + soin ennemi | Sève → **colonne brûlure / `brule`** (v3 ; crochet 4, brûlure 3 : la bande trempée brûle avec le copal), Lois ; garde des alliés, mana de Glace sur 2 cartes ; exil + garde ennemie |
| ASS081 Assemblée, Lande, japonaise féodale, Vent | Pourriture → **colonne défausse et `defausseAPrix`** (4 et 4, toujours lu avant le prix ; le tas qui pourrit ce qu'on y jette) ; brûlure, affaiblissement ; défausse + PV ; Lois | Croissance → **pioche des Assemblées** (v3 ; vocation, 2e emploi après D ASS100 : tout pousse, et l'on ramasse), Lois ; soin du héros, garde des alliés ; `garde` (garde du héros sur 1 carte au plus) ; soin ennemi + PV |
| ASS067 Assemblée, Steppe, aztèque, Vent | Mort → **soin des alliés**, Lois (jamais principal ; les gardiennes de la morte) ; garde du héros, marque ; `cibleGarde` (sans garde ennemie en prix) ; PV + défausse | Vie → **exil** (v2 ; jamais principal sur le mot : le premier cri ne se pousse qu'une fois), Lois ; pioche, soin du héros, affaiblissement ; `hesite` (hésitation sur 1 carte au plus) ; exil + garde ennemie |
| ASS073 Assemblée, Forêt boréale, aztèque, Glace | Vide → **riposte**, Lois (jamais principal ; ≤ 8 par carte, réveil compris : la nuit sans feu rend les coups) ; garde du héros, hésitation ; `pietine` (intention 2/2) ; défausse + soin ennemi | Étoiles → **soin du héros**, Lois (jamais principal) ; pioche, marque ; `blesse` (aucun PV en prix) ; exil + défausse |
| ANT189 Antre, Désert de sel, zouloue, Pierre | Brume → **perce-garde** (jamais principal ; les hyènes sortent du blanc sans qu'on les voie) ; bêtes 3, dégâts ciblés ; `cibleGarde` (lu avant le perce-garde) ; bête + PV | Clarté → **coups au hasard** (v3 ; place rare, jamais principale sur le mot : le sel renvoie le soleil n'importe où) ; bêtes 3, perce-garde ; `hesite` (hésitation sur 1 carte au plus) ; exil + défausse |
| ANT010 Antre, Désert de sel, vénitienne, Pierre | Corruption → **invocations** (vocation, 2e emploi : artémies et mouches de saumure dans le sel gâté) ; affaiblissement, pioche ; `garde` (garde du héros sur 1 carte au plus) ; défausse + garde ennemie | Pureté → **marque** (jamais principale sur le mot ; le blanc qui montre tout) ; bêtes 3 (avocettes, v2), soin des alliés ; `hesiteAvant` ; bête + exil |
| ANT122 Antre, Mangrove, celte, Eau | Oubli → **marque** (jamais principale ; l'anguille qui glisse hors de la mémoire et laisse la cible nue) ; bêtes 3, hésitation ; `piocheCout0` (v3) ; PV + bête | Mémoire → **invocations** (vocation, 3e emploi : saumons et grues) ; soin des alliés, pioche ; `blesse` (aucun PV en prix) ; défausse + exil |
| ANT178 Antre, Cavernes cristallines, khmère, Pierre | Silence → **riposte** (jamais principale ; ≤ 8 ; le scorpion qui pique qui le dérange) ; bêtes 3, garde du héros ; `piocheCout0` ; bête + défausse | Chant → **invocations** (vocation, 3e emploi : geckos tokay et chauves-souris) ; mana de Pierre, affaiblissement ; `vulnerable` (marque sur 1 carte au plus) ; garde ennemie + PV |
| ANT087 Antre, Forêt boréale, zouloue, Glace | Exil → **invocations** (vocation, 3e emploi : lynx et élans de la forêt du nord) ; dégâts ciblés, riposte ; `brule` (brûlure sur 1 carte au plus) ; soin ennemi + PV | Foyer → **colonne garde / `garde`** (v3 ; crochet 4, garde du héros 2 : le kraal tient) ; bêtes 3, garde des alliés, dégâts ciblés ; bête + garde ennemie |
| ANT135 Antre, Delta fluvial, khmère, Eau | Ruine → **pioche** (jamais principale sur le mot ; on fouille les galeries du temple) ; bêtes 3, perce-garde ; `brule` (brûlure sur 1 carte au plus) ; défausse + PV | Abondance → **invocations** (vocation, 3e emploi : poissons-chats géants et pélicans) ; soin du héros, mana d'Eau ; `blesse` (aucun PV en prix) ; soin ennemi + bête |

**Comptes (v3, au script)** : soin du héros 2 (Sang, Étoiles), soin des alliés 1 (Mort), garde des alliés 1 (Sommeil), affaiblissement 1 (Éveil), riposte 2 (Vide, Silence), marque 2 (Pureté, Oubli), perce-garde 1 (Brume), exil 1 (Vie), pioche 1 (Ruine) ; rares : écho 1 (Rouille), coups au hasard 1 (Clarté). **14** ; garde du héros, brûlure et mana perdues. Vocations 7. Colonnes 3 (Pourriture, Sève, Foyer).

**Crochets (pôles, v3)** : `vulnerable` 2 (Sommeil, Chant), `seul` 1 (Éveil), `pietine` 1 (Vide), `hesiteAvant` 2 (Rouille, Pureté), `cibleGarde` 3 (Or, Mort, Brume), `piocheCout0` 3 (Sang, Silence, Oubli), `defausseAPrix` 1 (Pourriture, colonne), `garde` 3 (Croissance, Corruption, Foyer colonne), `hesite` 2 (Vie, Clarté), `blesse` 3 (Étoiles, Mémoire, Abondance, aucun avec un prix en PV), `brule` 3 (Exil, Ruine, Sève colonne).

**Couples (2 pôles du lot au plus)** : défausse / `defausseAPrix` (Pourriture ; avec D Ordre : plein), brûlure / `brule` (Sève ; avec C Or : plein), garde / `garde` (Foyer ; avec D Vérité : plein).

**Vocations : crochet, prix et bêtes nouveaux pour le mot** : Corruption `garde`, défausse + garde ennemie, crustacés (A : `brule`, bête + PV, suidés) ; Mémoire `blesse`, défausse + exil, salmonidés (C : `bete`, garde ennemie / PV, cormorans, corvidés) ; Chant `vulnerable`, garde ennemie + PV, geckos (C : `cartesJouees`, PV, passereaux ; D : `cibleGarde`, bête + défausse, anoures) ; Exil `brule`, soin ennemi + PV, félins (A : `seul`, PV, canidés ; D : `hesiteAvant`, bête + défausse, équidés) ; Abondance `blesse`, soin ennemi + bête, poissons-chats (siluriformes, pangasiidés) (C : `bete`, kaïrons, clupéidés) ; Or `cibleGarde`, PV + exil (gros coups, aucun emploi compté avant) ; Croissance `garde`, soin ennemi + PV (pioche ; D : `troisCartes`, PV).

## 3. Récits : forme, intrigue, première et dernière phrase (v3 : phrases telles qu'écrites)

Aucune forme de mes lots 8 à 10, ni de familles_D.md (v2 : ANT135 et ANT178 changés). Un seul document cité au plus (DON019, le compte). Aucun dialogue, aucune énumération, aucun sort tiré, aucun hivernage.

| Zone | Forme | Intrigue | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT032 | la consigne | la garnison dort par moitié dans trente-six hamacs ; un soir le souffleur de conque Itzcuauhtzin s'endort ; toute la garnison dort ; l'ennemi passe et croit le fort abandonné | « À Cuauhyacac, la consigne tient en une phrase : un hamac ne reste jamais vide. » | « Le tecuhtli fit peindre la victoire sur le mur, et doubler les conques. » |
| DON019 | **document : le compte d'entretien** | le stratège cache l'or du thème dans une grotte de falaise fermée de portes de fer ; le vent de mer les rouille chaque hiver ; on les remplace chaque printemps | « Compte des portes de la grotte d'Anemokremnos, tenu par le logothète Nikētas pour le stratège Bardanès. » | « Nikētas en a commandé de neuves. » |
| ASS072 | la substitution | chaque solstice l'ajaw donne son sang sur l'écorce au dieu du gel ; le jeune ajaw Chak Ek' y met en secret la sève rouge de l'aulne ; le dégel vient quand même | « À Kaxtunil, le solstice d'hiver se nourrit de sang royal, sur une bande d'écorce de bouleau que les ah kuch kab brûlent avec le copal. » | « Le dégel vint à son jour, et personne ne sut dire lequel des deux sangs l'avait appelé. » |
| ASS081 | le litige | deux villages du yoriai se disputent un tas de fumier sur la borne de la lande ; le bugyō ordonne de le partager à la pelle ; le temps de revenir, le tas est devenu un pré | « Le tas était sur la borne, et chacun des deux villages d'Akugawara jurait l'avoir commencé. » | « Quand les deux villages revinrent avec leurs pelles, le tas était un pré, et ils y mirent leurs chevaux ensemble. » |
| ASS067 | la veille du corps | les sages-femmes de la plaine gardent cinq nuits le corps d'une femme morte en couches, que les jeunes guerriers veulent voler pour ses doigts ; Tlazohtzin mène la veille | « Une femme morte en couches devient guerrière, et les jeunes gens de la plaine veulent un doigt d'elle pour la bataille : il rend invisible. » | « Au matin, le corps avait tous ses doigts, et personne n'avait dormi. » |
| ASS073 | la nuit sans feu | au bout de cinquante-deux ans on éteint tous les feux ; les prêtres doivent voir passer les Pléiades ; les nuages couvrent la forêt gelée ; Ilhuicatzin allume sans les voir | « Tous les cinquante-deux ans, on éteint chaque feu de la forêt de Citlalcuauhtla, on brise les pots, et l'on attend sur la colline de l'Étoile que les Pléiades passent au milieu du ciel. » | « La braise prit, et le calmecac déclara que les étoiles étaient passées derrière les nuages. » |
| ANT189 | l'heure de la lèche | le bouvier mène les bêtes au sel seulement par brume, car le sel aveugle ; les hyènes le savent ; une année la brume ne se lève pas | « Les bœufs de Mkhize ne vont au sel que dans la brume du matin : passé la brume, le pan d'Isikhwebu aveugle les bêtes et leur brûle les sabots. » | « L'hiver où la brume ne se leva pas une seule fois, les bœufs eurent tout le sel qu'ils voulaient, et Mkhize ne garda pas un veau. » |
| ANT010 | l'enquête | le maître du sel Zorzi Pasqualigo coupe le sel de sable ; les avocettes quittent sa cuvette ; l'inspecteur remarque les oiseaux absents | « Les avocettes ne se posent que sur l'eau qui fait le bon sel, disent les sauniers de Salinella, et l'Office du Sel de Venise paie le sel blanc au poids. » | « Zorzi fut condamné sur la foi des oiseaux, qui ne témoignèrent pas. » |
| ANT122 | la récitation | chaque grande marée, le file Ailill récite les trois cent dix noms de ceux que la mangrove a pris ; il en oublie un ; personne ne sait lequel | « À la grande marée de printemps, on récite à Inis Fréma les noms de ceux que les racines de la mangrove ont gardés. » | « Depuis, on récite une place vide, au milieu, et l'on s'y arrête le temps d'un souffle. » |
| ANT178 | l'oracle du gecko (v2) | le novice Sambath doit quitter la robe si le tokay de la caverne crie un nombre impair de fois ; l'écho du cristal multiplie les cris ; il ne finit jamais de compter, et reste | « Dans la pagode de Rung Tokkae, au fond de la caverne de cristal, on interroge le gecko : un nombre impair de cris veut dire oui. » | « Il y est resté toute sa vie, faute d'avoir jamais su compter jusqu'au bout. » |
| ANT087 | le rappel qui ne vint pas | un régiment exilé au nord attend le signe du roi pour rentrer ; le roi meurt sans l'envoyer ; ils restent | « Le roi envoya l'ibutho des Boucliers gris garder la forêt du nord, et promit d'envoyer une plume de touraco quand il faudrait rentrer. » | « Leurs fils, quand on leur parle du royaume, demandent de quel côté il se trouve. » |
| ANT135 | la carte perdue (v2) | à la décrue, les poissons restent pris dans les galeries du temple ; l'achar Vuthy seul sait où ; il meurt sans rien dire ; on pêche au hasard, et l'on prend davantage | « À chaque crue, le fleuve entre dans le temple de Phum Thom par la porte du roi, et à chaque décrue il y oublie ses poissons. » | « Les pêcheurs y jettent aujourd'hui leurs nasses au hasard, et prennent plus qu'au temps de l'achar. » |

## 4. Noms de zones (v2 ; comparés à noms-pris.txt par moitié, mot principal, préfixe et traduction, puis au script avant la remise)

Cuauhyacac, les Hamacs de la Relève (CIT032) ; Anemokremnos, les Vantaux du Logothète (DON019) ; Les Ah Kuch Kab de Kaxtunil (ASS072) ; Le Sōson d'Akugawara (ASS081) ; Les Gardiennes d'Ehecapan (ASS067) ; Le Calmecac de Citlalcuauhtla (ASS073) ; Isikhwebu, la Lèche du Brouillard (ANT189 ; v3) ; Salinella, la Cuvette des Avocettes (ANT010) ; Inis Fréma, la Litanie des Marées (ANT122) ; Rung Tokkae, l'Oracle du Gecko (ANT178) ; KwaNsizwa, la Plume attendue (ANT087) ; Phum Thom, la Carte perdue (ANT135). Écartés : Garnison, Veillée, Collège, Bassin, Grotte, Kraal, Popol Na, Multepal, Yoriai, Prasat, Trapeang, Trey, Racines, Chryso-, Aero-, Tlalxoco-, Sak (Sak Ch'en), noyé(e).

## 5. Prénoms, institutions, nombres

- **Prénoms** : Itzcuauhtzin (CIT032 ; v2, D a Tlacotzin) ; le stratège Bardanès et le logothète Nikētas (DON019) ; Chak Ek' (ASS072) ; Gonbei (ASS081) ; Tlazohtzin (ASS067) ; Ilhuicatzin (ASS073) ; Mkhize (ANT189) ; Zorzi Pasqualigo (ANT010) ; Ailill (ANT122) ; Sambath (ANT178) ; l'induna Mfanafuthi (ANT087) ; Achar Vuthy (ANT135).
- **Institutions** : le tecuhtli de la garnison (CIT032) ; le logothète du génikon (DON019) ; les ah kuch kab (ASS072 ; v2, Popol Na déjà en jeu) ; le sōson et le bugyō (ASS081 ; v2, yoriai déjà en jeu) ; la confrérie des sages-femmes (ASS067) ; le calmecac des prêtres du feu (ASS073) ; l'Office du Sel (ANT010) ; l'école des filid (ANT122) ; la pagode (ANT178) ; l'ibutho (ANT087) ; le wat (ANT135). Ni « conseil », ni « kurultai ».
- **Nombres précis (v3)** : trente-six hamacs (CIT032), cinq nuits (ASS067), cinquante-deux ans (ASS073), trois cent dix noms (ANT122). Aucun autre (D : onze, quatre cents, soixante ; C : quatre, sept, trente, neuf, trois, six).

## 6. Bêtes (familles scientifiques, vérifiées avant d'écrire ; une famille par pôle, aucune deux fois chez moi)

- Brume (ANT189 −) : hyène brune (hyénidés) ;
- Clarté (ANT189 +) : autruches (struthionidés) ;
- Corruption (ANT010 −, vocation) : artémies (crustacés branchiopodes, artémiidés), mouches de saumure (diptères, éphydridés) ;
- Pureté (ANT010 +) : avocettes élégantes (récurvirostridés ; v2, D a les flamants) ;
- Oubli (ANT122 −) : anguilles (anguillidés) ;
- Mémoire (ANT122 +, vocation) : saumons (salmonidés), grues cendrées (gruidés) ;
- Silence (ANT178 −) : scorpions (scorpionidés) ;
- Chant (ANT178 +, vocation) : geckos tokay (gekkonidés), chauves-souris des grottes (chiroptères) ;
- Exil (ANT087 −, vocation) : lynx (félins, 5 cartes), élans (cervidés ; avec les rennes de A : plein à 2) ;
- Foyer (ANT087 +) : bœufs nguni (bovidés) ;
- Ruine (ANT135 −) : macaques crabiers (primates, cercopithécidés) ;
- Abondance (ANT135 +, vocation) : poissons-chats géants (siluriformes, pangasiidés), pélicans à bec tacheté (pélécanidés).

**Pour A, C et D (v3)** : cervidés (A) et crustacés (D) sont à 2, pleins ; mes autres familles sont à 1 dans le lot. Les mouches de saumure (diptères) sont en appoint dans la Corruption, comme les mouches bleues de ma Corruption du lot 9 ; la bête principale du pôle reste l'artémie (5 cartes).

## 7. Extrêmes

−7 : vide (ASS073 : la forêt sans un feu ; ANT087 : le kraal vide), silence (ANT178), ruine (DON019 : les portes tombées en écailles ; ANT135), ordre (CIT032 : tous les hamacs pleins et immobiles), foule (ANT010 : les mouches sur le sel brun), démesure (ASS081). +7 : foule (CIT032, ASS067), ordre (ASS072, ANT010), objet (DON019 : l'or seul sur la roche), geste (ANT122, ANT178), démesure (ANT135 : le poisson-chat du sanctuaire), vide (ANT189 : le pan blanc à perte de vue). Aucun pigment au +7, aucun végétal qui avale un bâtiment (au +7 d'ANT135, l'eau et les poissons, pas les racines).
