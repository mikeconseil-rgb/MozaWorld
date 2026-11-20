# Lot 11 · carte des familles du conteur D (le Lovecraftien)

**Première version : 15 h 28 au `ls`** (l'en-tête disait par erreur « 15 h 35 »), avant la moindre carte. Aucun familles_A/B/C.md n'existait encore : D est le premier inscrit (B 15 h 30, C 15 h 32, A 15 h 38), et garde les mots, couples, formes, prénoms et noms qu'il inscrit ici.

**Mise à jour à la remise (cartes écrites et validées au script, 0 erreur hors du prénom signalé plus bas)**, après lecture de familles_A.md, familles_B.md et familles_C.md. Changements chez D :
- **Noms** (mot traduit, leçon 6 du lot 8) : Tlazolapan (« maison », la Maison des Nattes) → **Tlazolapan** ; eSidwadweni (« forêt », la Forêt aux Mâts, plusieurs « Bois ») → **eSidwadweni** ; Amarianon (« roseaux », le Kenbet des Roseaux) → **Amarianon** ; Aqiggiq (« outre », les Outres d'Aiolopétra) → **Aqiggiq** ; Kemsk (« baie », la Baie des Hivernants) → **Kemsk**.
- **Forme d'ANT043** : « l'interdit de pêche » faisait double avec mon propre « interdit de parole » (ANT094). ANT043 devient **le jour clair** : on ne pleure pas les noyés, on attend le jour sans brume pour aller les chercher.
- **Appoints** : l'Oubli prend la **riposte** (et non l'hésitation, pour ne pas nourrir `hesiteAvant`) ; la Clarté prend le **mana de Glace** sur 2 cartes au lieu d'une 4e riposte ; la Peste prend la **marque** (et non l'affaiblissement, déjà en appoint dans 3 pôles) ; l'Abysse prend le **soin des alliés** (et non la garde du héros) ; la Corruption et la Pureté prennent le **soin des alliés** ; la Pourriture prend le **mana de Feu** ; la Lumière la **riposte** ; la Brume le **soin du héros**.
- **Titre** : mon abbé est un **archimandrite** (C a « l'higoumène » dans ANT240, cité comme institution).
- **Bête** : mon « Loir des jarres » devient « Loir engraissé » (C a le même nom, ANT206).
- **Nombres** : « deux relèves », « deux mains » et « trois fois » retirés de mes ambiances ; il ne reste que onze, quatre cents et soixante.

## 1. Compte des vocations (au script `voc.py`, lots 1 à 10, plus les déclarations des cartes des familles des lots 4 à 10)

Règles appliquées : leçon 1 du lot 9 et leçon 1 du lot 10. Par mot et par type, trois emplois au plus dans le jeu, jamais deux chez le même conteur, un seul par mot dans le lot. Invocations : 5 cartes d'invocation ou plus. Gros coups : 5 cartes de dégâts ciblés ou plus, comptées depuis le lot 5, **et avant le lot 5 quand une carte des familles les déclare** (lots 4 : D DON120 compte). Pioche des Assemblées : 5 cartes de pioche ou plus dans une Assemblée (je compte aussi les autres types, pour être strict).

| Zone | Mot | Type | Emplois avant (lots 1 à 10) | Verdict |
|---|---|---|---|---|
| CIT025 | Mensonge, Vérité | — | Citadelle : pas de vocation de type | — |
| DON102 | Peste | gros coups | A DON014 (lot 5 : `bete`, PV et bête), C DON122 (lot 5 : `blesse`, PV). Avant le lot 5 : A ASS168 (lot 2), C DON079 (lot 3), sans carte des familles, non déclarés | **libre, 3e et dernier emploi : je le prends** |
| DON102 | Guérison | gros coups | A DON014 + (lot 5) ; **D DON101 (lot 1) et D DON042 (lot 2)**, non déclarés mais à moi | **non** (je ne le prends pas, par prudence) |
| ASS102 | Abysse | pioche | aucun | **libre, 1er emploi : ma place de pioche y va** |
| ASS102 | Ciel | pioche | B ANT177 (Antre, lot 9) | libre, laissé |
| ASS111 | Corruption | pioche | A ASS039 (lot 10) | libre, laissé |
| ASS111 | Pureté | pioche | B ASS048, D DON083 (lot 4) | non (déjà D) |
| ASS123 | Pourriture | pioche | A ANT155 (Antre) | libre, laissé |
| ASS123 | Croissance | pioche | D ASS100 (lot 4) | non (déjà D) |
| ASS136 | Glace | pioche | D ANT174 (lot 8, Antre) | non (déjà D, par prudence) |
| ASS136 | Feu | pioche | C ANT173 (Antre) | libre, laissé |
| ASS086 | Ombre | pioche | B ASS005 | libre, laissé |
| ASS086 | Lumière | pioche | C DON011, D ASS178 | non (déjà D) |
| ANT043 | Brume | invocations | A ANT242, D ANT047, C ANT129 | non (plein, et déjà D) |
| ANT043 | Clarté | invocations | A ANT027 (lot 6 : `cibleGarde`, garde ennemie et PV ; aigles, faucon, milan, vautour, grue), B ANT098 (lot 8 : `seul`, bête ; chameau, gangas, gazelle, hérisson) | **libre, 3e et dernier emploi : je le prends** |
| ANT132 | Chaos | invocations | D CIT015, A ANT146 | non (déjà D) |
| ANT132 | Ordre | invocations | D CIT030, C ANT065 | non (déjà D) |
| ANT094 | Silence | invocations | B ANT147 (lot 5 : `pietine`, PV ; congre, mérous, poulpe, rascasse), A ANT042 (lot 10 : `vulnerable`, défausse et PV ; saïgas, tortue) | **libre, 3e et dernier emploi : je le prends** |
| ANT094 | Chant | invocations | C ANT076, D ANT082 | non (déjà D) |
| ANT238 | Sécheresse | invocations | C ANT002, A ANT113, B ANT031 | non (plein) |
| ANT238 | Déluge | invocations | D CIT019, B ANT245 | non (déjà D) |
| ANT213 | Oubli | invocations | C ANT202 (lot 4 : `defausseAPrix`, défausse ; cormoran), C CIT014 (lot 5 : `pietine`, PV ; soldats) | **libre, 3e et dernier emploi : je le prends** |
| ANT213 | Mémoire | invocations | C ANT202, C ANT048 | libre (3e), laissé : une seule vocation par zone (les deux pôles n'ont pas la même famille principale) |

**Mes vocations, inscrites ici en premier : 4** (et la pioche de l'Abysse, qui est une place). C'est le maximum que mes mots permettent : Chaos, Ordre, Chant, Déluge, Brume, Lumière, Pureté, Croissance et Glace sont déjà à moi ou pleins. D'où **17 places + 4 vocations + 3 colonnes = 24**, ce que LISTE.md autorise (3 colonnes, pas de 4e).

Chaque emploi prend un crochet, un prix et une famille de bêtes nouveaux pour le mot :
- **Peste (DON102 −), gros coups**, 3e emploi : crochet `soinEnnemi` (A : `bete`, C : `blesse`), prix exil et garde ennemie (A : PV et bête, C : PV).
- **Clarté (ANT043 +), invocations**, 3e emploi : crochet `vulnerable` (A : `cibleGarde`, B : `seul`), prix défausse et exil (A : garde ennemie et PV, B : bête), **orques** (delphinidés ; A : rapaces et grue, B : camélidés, ptéroclidés, bovidés, érinacéidés).
- **Silence (ANT094 −), invocations**, 3e emploi : crochet `cibleGarde` (B : `pietine`, A : `vulnerable`), prix bête et soin ennemi (B : PV, A : défausse et PV), **nandous** (rhéidés ; B : poissons et poulpe, A : bovidés et tortue).
- **Oubli (ANT213 −), invocations**, 3e emploi : crochet `hesiteAvant` (C : `defausseAPrix`, `pietine`), prix bête et garde ennemie (C : défausse, PV), **loirs** (gliridés ; C : cormorans, soldats).
- **Pioche (place) sur l'Abysse (ASS102 −)**, 1er emploi : crochet `cibleGarde`, prix défausse et PV.

**Aux autres conteurs** : ces cinq mots (Peste, Clarté, Silence, Oubli, Abysse) portent donc leur vocation de ce lot chez D. Ciel, Corruption, Pourriture, Feu, Ombre et Mémoire restent libres pour une vocation chez A, B ou C.

## 2. Les 24 pôles (famille principale ; appoint ; crochet ; prix principal + second)

Familles principales jamais principales chez D sur ce mot (au script `hist.py`, 5 cartes ou plus, lots 1 à 10), et le plus souvent jamais principales sur ce mot chez personne. Deux sortes de prix par pôle, la seconde sur 2 cartes au moins, aucune sur les 7 cartes ; prix sur les 7 cartes de chaque pôle (deux sortes mêlées), donc à égalité entre les deux pôles d'une zone. Aucun pôle ne nourrit son crochet hors des trois colonnes (les pôles qui lisent `blesse` ne paient pas en PV, ceux qui lisent `cibleGarde` ne donnent pas de garde ennemie et ne la brisent pas, etc.).

| Pôle | Famille principale | Appoint (3 ou 4 cartes) | Crochet (2 à 4 cartes) | Prix |
|---|---|---|---|---|
| CIT025 − Mensonge | garde des alliés | affaiblissement | `hesiteAvant` | PV + garde ennemie |
| CIT025 + Vérité | **colonne garde / `garde`** (4 et 4, le crochet lu avant la garde de la carte) | riposte | `garde` | défausse + soin ennemi |
| DON102 − Peste | **gros coups** (vocation, 3e emploi ; 30 au plus par carte) | brûlure, marque | `soinEnnemi` (intention, 1/2) | exil + garde ennemie |
| DON102 + Guérison | soin des alliés | garde du héros | `blesse` (aucun prix en PV) | soin ennemi + défausse |
| ASS102 − Abysse | **pioche** (place, 1er emploi), Lois | hésitation, soin des alliés | `cibleGarde` | défausse + PV |
| ASS102 + Ciel | affaiblissement, Lois | dégâts à tous | `vol` (intention, 2/2) | exil + PV |
| ASS111 − Corruption | exil, Lois | brûlure, soin des alliés | `hesite` (aucune hésitation dans le pôle) | exil + PV |
| ASS111 + Pureté | mana (de Sève), Lois | soin du héros, soin des alliés | `cartesJouees` (enchaînement en appoint, 1/3) | soin ennemi + exil |
| ASS123 − Pourriture | **coups au hasard** (place rare), Lois | affaiblissement, mana de Feu | `brule` (aucune brûlure dans le pôle) | PV + soin ennemi |
| ASS123 + Croissance | exil (2e place), Lois | garde des alliés, pioche, soin du héros (3) | `troisCartes` (enchaînement en appoint, 2/3) | exil + garde ennemie |
| ASS136 − Glace | soin du héros, Lois | garde du héros | `hesiteAvant` | défausse + garde ennemie |
| ASS136 + Feu | riposte (8 au plus par carte), Lois | brûlure | `cibleGarde` | PV + exil |
| ASS086 − Ombre | garde du héros, Lois | marque | `blesse` (aucun prix en PV) | défausse + soin ennemi |
| ASS086 + Lumière | brûlure, Lois | perce-garde, riposte | `vulnerable` (aucune marque dans le pôle) | PV + garde ennemie |
| ANT043 − Brume | affaiblissement (2e place) | invocations (4), soin du héros | `hesite` (aucune hésitation dans le pôle) | bête + défausse |
| ANT043 + Clarté | **invocations** (vocation, 3e emploi) | perce-garde, exil (prix) | `vulnerable` (aucune marque dans le pôle) | défausse + exil |
| ANT132 − Chaos | **colonne bête / `bete`** (crochet sur 4 cartes, invocations sur 4, le crochet lu avant l'invocation de la carte) | dégâts à tous, coups au hasard | `bete` | bête + PV |
| ANT132 + Ordre | **colonne défausse / `defausseAPrix`** (4 et 4, le crochet lu avant la défausse de la carte) | invocations (4), garde des alliés, pioche | `defausseAPrix` | défausse + garde ennemie |
| ANT094 − Silence | **invocations** (vocation, 3e emploi) | mana (de Pierre) | `cibleGarde` | bête + soin ennemi |
| ANT094 + Chant | **vol de vie** (place rare) | invocations (4), coups au hasard | `troisCartes` (enchaînement en appoint, 3/3) | PV + défausse |
| ANT238 − Sécheresse | soin des alliés (2e place) | invocations (3), affaiblissement | `blesse` (aucun prix en PV) | défausse + soin ennemi |
| ANT238 + Déluge | perce-garde | invocations (3), garde des alliés | `brule` (aucune brûlure dans le pôle) | bête + garde ennemie |
| ANT213 − Oubli | **invocations** (vocation, 3e emploi) | riposte | `hesiteAvant` (lu avant l'hésitation de la carte) | bête + garde ennemie |
| ANT213 + Mémoire | marque | invocations (4), pioche | `garde` (aucune garde dans le pôle) | PV + soin ennemi |

**Places (LISTE.md, 17)** : soin du héros 1 (Glace), soin des alliés 2 (Guérison, Sécheresse), garde du héros 1 (Ombre), garde des alliés 1 (Mensonge), affaiblissement 2 (Ciel, Brume), riposte 1 (Feu), brûlure 1 (Lumière), marque 1 (Mémoire), mana 1 (Pureté), perce-garde 1 (Déluge), exil 2 (Corruption, Croissance), pioche 1 (Abysse) ; rares : coups au hasard 1 (Pourriture), vol de vie 1 (Chant). **17.** Vocations 4 (Peste, Clarté, Silence, Oubli). Colonnes 3 (Vérité garde/`garde`, Chaos bête/`bete`, Ordre défausse/`defausseAPrix`).

**Crochets, par conteur (leçon 2 du lot 10 : 3 pôles au plus)** : `hesiteAvant` 3 (Mensonge, Glace, Oubli), `blesse` 3 (Guérison, Ombre, Sécheresse), `cibleGarde` 3 (Abysse, Feu, Silence), `garde` 2 (Vérité, Mémoire), `hesite` 2 (Corruption, Brume), `brule` 2 (Pourriture, Déluge), `vulnerable` 2 (Lumière, Clarté), enchaînement 3 (Pureté `cartesJouees`, Croissance et Chant `troisCartes`), `bete` 1, `defausseAPrix` 1. **Intention ennemie : 2** (Peste `soinEnnemi`, Ciel `vol`), aucun `elan`, `pietine` ni `seul`.

**Couples (2 pôles du lot au plus, chacun)** : D prend garde/`garde` (Vérité), bête/`bete` (Chaos), défausse/`defausseAPrix` (Ordre), un pôle chacun. Je ne prends ni PV/`blesse`, ni garde ennemie/`cibleGarde`, ni brûlure/`brule`, ni marque/`vulnerable`, ni hésitation/`hesite`.

**Appoints (3 ou 4 cartes, 3 pôles au plus par famille, comptés au script sur les cartes)** : affaiblissement 3 (Mensonge, Pourriture, Sécheresse), brûlure 3 (Peste, Corruption, Feu), garde du héros 3 (Guérison, Glace, Vérité), garde des alliés 3 (Croissance, Ordre, Déluge), soin du héros 3 (Pureté, Croissance, Brume), soin des alliés 3 (Abysse, Corruption, Pureté), riposte 3 (Vérité, Lumière, Oubli), perce-garde 3 (Vérité, Lumière, Clarté), pioche 3 (Croissance, Ordre, Mémoire), exil 3 (Peste, Ciel, Clarté, comme prix), enchaînement 3 (Pureté, Croissance, Chant), dégâts à tous 2, coups au hasard 2, mana 2, marque 2, hésitation 1. Invocations des Antres hors vocation : 3 cartes (la charge du type), jamais 5.

**Plafonds** : riposte 8, mana 2, dégâts ciblés 20 (hors Donjon, paliers 1 à 6) et 30 en Donjon, sur la carte entière, `si` et réveil compris. Dégâts ciblés sur 4 cartes au plus dans tout pôle qui n'est pas la Peste (Guérison comprise, bien que Donjon). Aucun écho (pas de place d'écho). « Tous » sur 3 cartes au plus par pôle ; jamais deux hésitations de « tous » de suite.

## 3. Nombres précis (D)

Trois, un par zone : **onze** pirogues (DON102), **quatre cents** brasses (ASS102), **soixante** ans (ANT238). Rien d'autre de précis dans les récits, `pal`, noms et ambiances. Ni trois, ni sept, ni vingt, ni cent, ni mille.

## 4. Prénoms et institutions (D)

- **Prénoms** : le voïvode Yaropolk et la sentinelle Zhdan (CIT025) ; le ticitl Tlacotzin (DON102) ; le greffier Nikaidō Yukimasa (ASS102) ; l'induna Mavuso (ASS111) ; l'archiviste Nikèphoros (ASS123) ; la gardienne de lampe Arnaq (ASS136) ; l'arpenteur Bahador (ASS086) ; le kormchi Fedot (ANT043) ; le tahu'a Teva (ANT132) ; la gardienne du sel Ch'aska (ANT094) ; le debtera Zär'u (ANT238) ; l'archimandrite Ioannikios et frère Akakios (ANT213).
- **Institutions** : le hyōjōshū (ASS102), l'umhlangano (ASS111), le koinon (ASS123), le mahfel (ASS086). Écartés parce que déjà en jeu : imbizo, inkundla, ibandla, umkhandlu, anjoman, majles, divan, katimavik, yoriai, synaxe, silention.

## 5. Formes de récit : intrigue, première et dernière phrase

Aucune forme de mon lot 10 (revue, sentence, chronique, veille, gazette, comptes, cure, plongée, mensonge du guide, vie de saint, marche égarée, commande). Documents cités : 1 sur 12 (les chartes, ASS123). Aucune énumération, aucun dialogue, aucune lettre, aucune ouverture « X était petit quand », aucune chute en « X dit que ».

| Zone | Forme | Qui fait quoi, et comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT025 | le mot du guet | le voïvode fait répondre chaque nuit « La montagne dort » ; la sentinelle Zhdan répond la vérité, et le cratère donne le contre-mot | « À Gorelets, le mot de nuit n'a jamais changé depuis la fondation : « La montagne dort. » » | « Le voïvode a fait changer le mot. La montagne, elle, répond toujours l'ancien. » |
| DON102 | le tribut | chaque chinampa doit au temple du marais un tribut de malades ; le ticitl les rend guéris et muets ; on n'envoie plus que des pirogues vides, qui reviennent pleines | « Chaque chinampa de Tlazolapan doit au temple du marais un tribut de fièvres. » | « Elles partent vides, et elles reviennent pleines. » |
| ASS102 | le sondage | le conseil ne délibère pas, il sonde le cratère avec une corde lestée ; un jour la corde remonte plus longue, et quelqu'un tire d'en bas | « Le hyōjōshū de Kuragari ne délibère pas : il sonde. » | « La corde reste tendue depuis, et c'est d'en bas qu'on la tient. » |
| ASS111 | la purification | avant de parler, chaque induna se rince la bouche à la source ; la source garde ce qu'on y crache, noircit, et finit par parler la première | « Avant de parler à l'umhlangano d'eSidwadweni, chaque induna se rince la bouche à la source. » | « À la dernière réunion, la source a parlé la première, et personne ne s'est levé pour la contredire. » |
| ASS123 | **les chartes moisies** (document) | le koinon garde ses chartes dans une grotte humide ; des clauses que nul n'a écrites poussent dans la moisissure ; le koinon les suit, et la dernière nomme l'archiviste | « Le koinon d'Amarianon garde ses chartes au fond d'une grotte du canyon, là où la pierre sue. » | « La dernière clause, encore verte, porte le nom de Nikèphoros, et le koinon a voté de l'appliquer. » |
| ASS136 | la dette | chaque hiver, l'assemblée donne au récif une flamme par maison, par un trou dans la glace ; l'hiver où elle refuse, toutes les lampes s'allument seules, d'une même flamme | « À Aqiggiq, la première question de l'hiver est toujours la même : combien de flammes devons-nous au récif. » | « Cette nuit-là, toutes les lampes d'Aqiggiq se sont allumées seules, de la même flamme bleue. » |
| ASS086 | l'arpentage | l'arpenteur mesure chaque année l'ombre du pic à la chaîne ; le mahfel siège où elle tombe ; l'ombre s'allonge plus que le soleil ne le permet | « Le mahfel de Dirang siège là où tombe l'ombre du pic, et nulle part ailleurs. » | « Ce matin, l'ombre est arrivée avant le soleil, et le mahfel s'y est assis. » |
| ANT043 | **le jour clair** (à la remise ; d'abord « l'interdit de pêche », double de mon ANT094) | la brume ne se lève qu'une fois par génération ; on ne pleure pas les noyés, on attend ce jour pour les chercher ; Fedot sort le premier, et voit au fond ceux que la brume a pris | « Sur le fjord de Kemsk, la brume ne se lève qu'une fois par génération. » | « Ils étaient tous au fond, debout, et ils regardaient la barque. » |
| ANT132 | le jardin | le tahu'a plante les chapeaux en allées droites ; la nuit, ils se replantent selon un ordre à eux ; vu du sommet, le jardin trace une route d'étoiles | « Le tahu'a Teva planta les chapeaux de Rautoa en allées droites, comme on plante l'arbre à pain. » | « Vu du sommet, le jardin trace une route d'étoiles vers une île que personne n'a jamais touchée. » |
| ANT094 | l'interdit de parole | la loi de l'Inca défend de parler sur le salar, parce que le sel retient ; quand la pluie le couvre, le salar rend les voix, et la sienne qui dit ce qu'on n'a pas dit | « Sur le salar de Ch'inkaya, la loi de l'Inca défend de parler, parce que le sel retient. » | « On y reconnaît sa propre voix, qui dit ce qu'on n'a pas encore dit. » |
| ANT238 | le descellement | dans les ruines, une seule citerne n'a jamais été ouverte ; le debtera la descelle après soixante ans de sécheresse ; l'eau monte d'en dessous, et ne s'arrête pas | « Dans les ruines de Tsaddanqal, une seule citerne n'a jamais été ouverte, et c'est la seule qui ne soit pas fendue. » | « L'eau monte d'une main chaque année, et les ibis attendent déjà en haut des obélisques. » |
| ANT213 | la pénitence | au monastère, la pénitence se mange : un loir nourri de spores fait oublier une année ; frère Akakios en mange tant qu'il oublie qu'il est un homme | « Au monastère de Glykeria, la pénitence ne se fait pas à genoux : elle se mange. » | « Au printemps, quand on ouvre les jarres, il y a toujours un loir de plus, et l'on ne sait jamais lequel. » |

**Gestes d'intrigue (une fois par lot)** : répondre au mot de passe ; envoyer des malades en pirogue ; sonder un cratère à la corde ; se rincer la bouche à une source ; lire des clauses dans la moisissure ; donner une flamme par un trou dans la glace ; mesurer une ombre à la chaîne ; sortir le jour clair chercher ses noyés ; planter en allées ; se taire sur le sel ; desceller une citerne ; manger un loir engraissé.

## 6. Noms de zones (vérifiés contre noms-pris.txt : aucune moitié, aucune institution déjà en jeu)

Gorelets, le Mot de nuit (CIT025) ; Tlazolapan, le Tribut des Pirogues (DON102) ; Le Hyōjōshū de Kuragari (ASS102) ; L'Umhlangano d'eSidwadweni (ASS111) ; Le Koinon d'Amarianon (ASS123) ; Aqiggiq, la Dette du Récif (ASS136) ; Le Mahfel de Dirang (ASS086) ; Kemsk, le Fond découvert (ANT043) ; Rautoa, les Allées du Tahu'a (ANT132) ; Ch'inkaya, le Salar qui retient (ANT094) ; Tsaddanqal, la Citerne close (ANT238) ; Glykeria, le Réfectoire des Loirs (ANT213).
Mots principaux de seconde moitié, tous différents : Mot, Tribut, Dette, Fond, Allées, Salar, Citerne, Réfectoire. Compléments, tous différents : « de nuit », « des Pirogues », « du Récif », « du Tahu'a », « des Loirs ». Écartés : Imbizo, Inkundla, Anjoman, Majles, Katimajit (trop proche de Katimavik), Kolguba (Guba, déjà dans Lnyana Guba), Qulliq- (Qulliqtalik), Jardin (quatre noms), Rangs (Aaqqiktuq).

## 7. Bêtes (une famille par pôle d'Antre, à la maille de la famille courante)

| Pôle | Bêtes | Famille |
|---|---|---|
| ANT043 − Brume | phoques annelés | phocidés (pinnipèdes) |
| ANT043 + Clarté | orques | delphinidés (cétacés) |
| ANT132 − Chaos | crabes de cocotier | crustacés (anomoures, coenobitidés) |
| ANT132 + Ordre | fous à pieds rouges | sulidés |
| ANT094 − Silence | nandous de la puna (suris) | rhéidés |
| ANT094 + Chant | flamants des Andes | phoenicoptéridés |
| ANT238 − Sécheresse | damans des rochers | procaviidés (hyracoïdes) |
| ANT238 + Déluge | ibis hagedash | threskiornithidés |
| ANT213 − Oubli | loirs | gliridés (rongeurs, au sens large) |
| ANT213 + Mémoire | tortues sillonnées | testudinidés (tortues) |

Attention pour les autres : « loirs » se range aussi dans les **rongeurs** à la maille courante ; je compte donc D comme un pôle de rongeurs. Les tortues comptent dans « tortues ». Aucune autre famille de D n'est courante (rhéidés, phoenicoptéridés, procaviidés, sulidés, delphinidés, threskiornithidés).

## 8. ±7 (recettes tournantes)

−7 : foule (CIT025 la garnison qui répète le mot ; DON102 les pirogues pleines), démesure (ASS102 le cratère sans fond lisible), silence (ASS111 la source muette et noire ; ANT094 le salar muet), vide (ASS136 récif éteint ; ANT043 le blanc total), obscurité tenue (ASS086), ruine (ASS123 la grotte effondrée ; ANT132 les chapeaux renversés ; ANT238 la poussière), sommeil (ANT213 les jarres closes). +7 : ruine (CIT025 le rempart ouvert sur la lave), vide (DON102 les chinampas propres et désertes ; ASS086 la montagne sans ombre), objet (ASS102 la corde tendue ; ASS111 un seul bol d'eau ; ASS136 la flamme bleue ; ANT213 la carapace gravée), foule (ASS123 les villageois qui lisent ; ANT043 les noyés debout), ordre (ANT132 les allées jusqu'à l'horizon), démesure (ANT094 le miroir qui chante ; ANT238 l'eau jusqu'aux obélisques). Aucun pigment ; aucun végétal qui avale un bâtiment.

## 9. Avertissements à la remise (pour A, B, C et le critique)

D est inscrit le premier (15 h 28). Les points suivants touchent des inscrits plus tardifs ; d'après la leçon 6 du lot 10, c'est au second inscrit de changer :
- **Peste (C ASS099 −, pioche des Assemblées) et Abysse (C DON113 −, gros coups)** : la Peste porte déjà la vocation de D dans ce lot (gros coups, DON102 −) et l'Abysse aussi (pioche, ASS102 −). Un mot ne porte qu'une vocation par lot : C (15 h 32) a deux vocations sur des mots inscrits par D. C le notait lui-même pour le Ciel (« la pioche y reste possible sur le Ciel ») ; je garde la pioche sur l'Abysse, comme inscrit.
- **Couple défausse / `defausseAPrix`** : D Ordre (ANT132 +, 15 h 28), B Pourriture (15 h 30), C Nectar (15 h 32) : 3 pôles, A l'a déjà relevé. C est le troisième.
- **Prénom Tlacotzin** : D DON102 (15 h 28) ; B l'a changé (Itzcuauhtzin) ; **C l'emploie encore** (ANT145, le coureur).
- **Glykeria** : premier mot de mon nom ANT213 (« Glykeria, le Réfectoire des Loirs ») ; **C a « Glykeria, le Goûteur des Ruines »** (ASS175). Et C a le complément « des Loirs » (« Hypnokleia, le Portique des Loirs », ANT206) : la leçon 7 du lot 10 le défend dans le lot.
- **Rongeurs** : mes loirs (Oubli) et les loirs de C (Sommeil) font 2 pôles : plein. **Crustacés** : mes crabes de cocotier (Chaos) et les artémies de B (Corruption) : plein.
- **Arpenteur** : mon ASS086 a pour forme l'arpentage (Bahador mesure l'ombre à la chaîne) ; la chute de B ASS081 fait revenir « l'arpenteur avec sa corde ». Geste voisin, signalé.
- **Hésitation de A** : A lit `hesite` sur le Mensonge, D lit `hesiteAvant` : le moteur teste la même intention (`int.a === 'h'`) pour les deux. Ce n'est pas le même mot de condition, mais c'est le même crochet en jeu ; signalé pour A.
