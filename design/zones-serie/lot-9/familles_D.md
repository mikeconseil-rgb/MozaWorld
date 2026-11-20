# Lot 9 : carte des familles, conteur D (le Lovecraftien)

**Première version : 12 h 40**, avant la moindre carte, après lecture de familles_C.md (12 h 17), familles_A.md (12 h 25) et familles_B.md (12 h 26). **D est le dernier inscrit** : sur mes onze couples partagés, je prends d'autres familles principales que A, B et C sur les deux pôles, d'autres crochets sur le même mot et d'autres images. Les couples pleins et les vocations prises avant moi sont relus dans leurs tableaux (voir plus bas). Je relirai les trois fichiers avant la remise.

**Mise à jour à la remise : 14 h 03**, cartes écrites et validées (`valide.py`, 0 erreur), après relecture de familles_A.md et conteur_A.md (12 h 38), familles_B.md et conteur_B.md (13 h 53), familles_C.md et conteur_C.md (14 h 01). Changements depuis la v1 :
- **Couples recomptés au script sur les cartes de A et de B** (colonne : un pôle lit le crochet sur 4 cartes et porte l'opération qui le remplit sur 4 cartes) : marque/`vulnerable` (A ANT210−, D CIT024−), hésitation/`hesite` (A ANT018+, D ANT134−), brûlure/`brule` (A ANT157+, D ANT176−), `prixBete`/`bete` (C ANT073−, D ASS047−), garde/`garde` (A ANT157−, B ANT172+), PV/`blesse` (B ASS134−, C CIT009+), garde ennemie/`cibleGarde` (B ASS134+, C ANT099−), défausse/`defausseAPrix` (A ANT163−, C ASS117−) : **les huit à 2, aucun à 3**. Pour cela, deux pôles de D ont perdu l'opération qui nourrissait leur crochet : la Guérison (lit `brule`) n'a plus aucune brûlure (affaiblissement et marque à la place), l'Abondance (lit `vulnerable`) n'a plus aucune marque (affaiblissement à la place). Écarts hors de D, sans colonne : B ANT150+ (Pureté) lit `hesite` sur 2 cartes et fait hésiter sur 1 ; C ANT099+ (Or) lit `bete` sur 2 cartes, nourri par les 4 invocations de son Antre (C inscrit avant moi).
- **Bêtes recomptées au script sur les noms d'invocation de A, B et C** : aucune famille de D ne rejoint A, B ou C hors des trois déjà dites (bovidés, primates, coléoptères, pleines à 2). Noms trop proches changés : « Grande sauterelle de cristal » → « Grande sauterelle des facettes » et « Nuée de sauterelles » → « Vol de sauterelles claires » (A : « Grande Chauve-souris de cristal », « Nuée de chauves-souris ») ; « Harde en cercle » → « Bœufs en cercle » (A « Harde d'éléphants », B « Harde de sika ») ; « Reine du quartz » → « Reine-abeille » (B « Reine des termites »).
- **Noms au mot traduit** (leçon 6 du lot 8 : la première moitié se compare à noms-pris.txt, mot traduit compris) : sept premières moitiés changées, leur sens étant le mot principal d'un nom pris : Atezcapan (étang-miroir) → **Tonallan** ; Sidêrokrêmnos (falaise de fer) → **Sidêroûs** ; Ogof Fêl (grotte du miel) → **Ystrad Medd** ; Veendaal (tourbière) → **Hoogezijl** ; Licobriga (colline) → **Licovindos** ; Bäräkät Hagara (cité) → **Bäräkät** ; Iat-Weben (butte) → **Akhet-Weben**. Les tableaux ci-dessous portent les nouveaux noms.
- **Lumière** : prix en soin ennemi et exil (exil sur 2 cartes seulement, pour ne pas faire de l'exil une famille principale).
- Plafonds tenus au script (riposte 8, dégâts ciblés 20 hors Donjon aux paliers 1 à 6, mana 2 par carte, réveil compris ; aucune opération deux fois au premier niveau ; « tous » sur 3 cartes au plus par pôle).

## Compte des vocations (leçon 1 du lot 8), au script sur les lots 1 à 8

Script `hist.py` (cartes des lots 1 à 8, 5 cartes ou plus, `si` et réveil compris). Même règle que A, B et C : un pôle compte en vocation dès qu'il a 5 cartes d'invocation ou plus (Antre), ou 5 cartes de dégâts ciblés ou plus (gros coups, tout type de zone). Un mot est libre si D n'y a jamais joué **cette** vocation (leçon 1 du lot 7 : « sa propre vocation ») et s'il n'a servi qu'une fois au plus chez un autre. Les prises de A, B et C au lot 9 comptent.

| Zone | Mot | Vocation | Avant (lots 1 à 8, et lot 9 inscrit avant moi) | Verdict |
|---|---|---|---|---|
| DON098 | Abysse | gros coups | C ANT161 (lot 2 : 5 dégâts ciblés sous une famille de marque), B CIT031 (lot 5 : 5 dégâts ciblés sous une famille d'exil) | **non au compte strict ; jamais déclarée, jamais chez D : je la prends, voir le bilan** |
| DON098 | Ciel | gros coups | C ANT161 (5), D DON110 (lot 5, 5) | non : déjà jouée par D |
| ANT176 | Sécheresse | invocations | A ANT113 (lot 8) ; **B ANT031 la prend au lot 9** | non : reprise faite |
| ANT176 | Déluge | invocations | D CIT019 (lot 2), B ANT245 | non |
| ANT134 | Sommeil | invocations | D ANT104 (lot 6), C ANT236 | non |
| ANT134 | Éveil | invocations | A ANT026, C ANT236 | non |
| ANT246 | Pierre | invocations | C ANT195 (lot 4, crochet `pietine`) ; A la laisse libre | **oui, reprise unique : je la prends** |
| ANT246 | Cristal | invocations | C ANT195 ; **A ANT210 la prend au lot 9** | non |
| ANT208 | Chaos | invocations | D CIT015 (lot 5), A ANT146 | non |
| ANT208 | Ordre | invocations | D CIT030 (lot 3), C ANT065 | non |
| ANT185 | Ruine | invocations | C ANT186 (lot 8, crochet `bete`). D y a joué les gros coups (ANT061, lot 4), pas les invocations | **oui, reprise unique : je la prends** (autre vocation que la mienne ; signalé) |
| ANT185 | Abondance | invocations | C ANT165, C CIT012 | non |
| ANT142 | Nuit | invocations | D ANT105 (lot 3) | non |
| ANT142 | Aurore | invocations | D ANT105, B ANT056 | non |

**Bilan : 2 vocations au compte strict (Pierre, Ruine), 3 avec l'Abysse.** Il me faut 7 pôles hors places (24 − 17). Les colonnes sans dépassement ne sont plus que 4 (voir les couples) : 17 + 2 + 4 = 23, il manque un pôle. **Je prends l'Abysse en gros coups** (vocation de type du Donjon), comme A prend le Sang : troisième emploi au compte strict, mais **jamais déclaré en vocation** (chez C, ANT161, c'était la marque ; chez B, CIT031, l'exil), **jamais chez D**, avec un autre crochet que les deux (`hesiteAvant` ; avant : `vulnerable`/`hesite`, `seul`) et une autre image (le puits du soleil de nuit, ni gouffre ni remous). Point pour le critique : sans cela, il faudrait une 5e colonne sur un couple plein. **Colonnes : 4**, la 4e permise par LISTE.md, et je le dis ici.

## Places de D (LISTE.md) : 17 familles principales

Une place dans chacune des douze familles, une seconde en **soin du héros, marque, riposte** ; places rares **écho (4 cartes exactement)** et **coups au hasard**. Familles déjà principales sur le même mot (lots 1 à 8, au script) évitées partout, **sauf une** : la pioche n'est libre (jamais principale sur le mot) que sur Abysse, Ciel et Poison ; Ciel est la pioche de B (ANT177) et Poison celle de A (ASS056) dans ce lot, et l'Abysse porte ma vocation. **La pioche va donc sur la Lumière**, où elle a été principale une fois, chez C au lot 3 (DON011, un Donjon : gros coups et pioche) ; image, crochet et prix différents. Signalé au critique.

## Couples (leçon 3 du lot 8) : ce qui restait à D

Relus dans les tableaux de A, B et C : défausse/`defausseAPrix` **plein** (C Ruine, A Chaos), garde/`garde` **plein** (A Cendre, B Raison), garde ennemie/`cibleGarde` **plein** (C Rouille, B Foyer), PV/`blesse` **plein** (C Guérison, B Exil). Restaient un pôle chacun : marque/`vulnerable` (A Pierre), hésitation/`hesite` (A Sève), `prixBete`/`bete` (C Pourriture), brûlure/`brule` (A Floraison). **D prend ces quatre-là, un pôle chacun : les huit couples sont alors pleins à 2.** Aucun autre pôle de D ne nourrit son crochet (vérifié au script à la remise) : Guérison lit `brule` sans aucune brûlure dans le pôle, Abondance lit `vulnerable` sans aucune marque dans le pôle, aucune bête ne paie sous `bete` hors du Poison.

Changés à cause de A, B et C avant la moindre carte : Chaos (colonne défausse → garde des alliés), Exil (colonne garde/`garde` → colonne marque/`vulnerable`), Nectar (colonne garde ennemie → exil), Poison (pioche → colonne bête/`bete`, A a la pioche), Déluge (soin du héros → coups au hasard, B a le soin du héros), Peste (garde des alliés → soin du héros, C a la garde des alliés), Pierre (marque → invocations, A a la colonne marque sur la Pierre), Sécheresse (invocations → colonne brûlure/`brule`, B a la reprise), Rouille (crochet `cibleGarde` → `elan`, c'est celui de C), images de CIT024 (ni lampe ni feu porté : B ASS134 souffle la lampe du banni) et de DON098 (ni gouffre ni remous : B ANT177 sonde un remous).

## Les 24 pôles (famille principale ; appoint visé ; crochet ; prix)

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT024 Citadelle, Toundra, inca, Glace | Exil → **colonne marque et `vulnerable`** (4 et 4 : les mitmas gardent la coiffe de leur vallée, qu'on les reconnaisse) ; garde du héros ; PV, exil | Foyer → **écho** (place rare, 4 cartes exactement : le carré de terre de la vallée reçoit la pluie de là-bas) ; 3 cartes doublables ; `cartesJouees` ; défausse |
| DON098 Donjon, Fjord, aztèque, Glace | Abysse → **gros coups**, vocation (voir le bilan) : 5 cartes ; `hesiteAvant` ; PV | Ciel → **brûlure** (le soleil sur la pierre du sommet) ; perce-garde ; `vol` ; exil, soin ennemi |
| ASS178 Assemblée, Marais, mésopotamienne, Sève | Ombre → **marque**, Lois (l'ombre témoigne contre celui qui la porte) ; `pietine` ; PV | Lumière → **pioche**, Lois (à midi, on voit tout : exception ci-dessus) ; `hesiteAvant` ; soin ennemi, exil (2 cartes) |
| ASS094 Assemblée, Forêt de champignons géants, slave, Sève | Peste → **soin du héros**, Lois (le charme qui fait sortir le mal) ; `seul` ; PV | Guérison → **riposte** (≤ 8 par carte : le mal renvoyé à qui l'a envoyé), Lois ; `brule` (aucune brûlure dans le pôle) ; soin ennemi |
| ASS041 Assemblée, Falaise côtière, grecque, Vent | Rouille → **mana** de Vent, Lois (le fer cloué en offrande) ; `elan` ; PV | Or → **riposte** (≤ 8 : la main du voleur clouée), Lois ; `vol` ; défausse |
| ASS047 Assemblée, Cavernes cristallines, celte, Pierre | Poison → **colonne `prixBete` et `bete`** (4 et 4 : l'abeille du quartz meurt de sa piqûre), Lois ; bêtes 4 ; vos bêtes, PV | Nectar → **exil**, Lois (l'hydromel de l'hôte ne se boit qu'une fois) ; `soinEnnemi` ; exil, soin ennemi |
| ANT176 Antre, Marais, gothique, Sève | Sécheresse → **colonne brûlure et `brule`** (4 et 4 : la tourbe du marais asséché brûle par-dessous) ; bêtes 3 ; PV | Déluge → **coups au hasard** (place rare : la crue charrie tout) ; bêtes 3 ; `pietine` ; défausse |
| ANT134 Antre, Fjord, japonaise féodale, Glace | Sommeil → **colonne hésitation et `hesite`** (4 et 4, le crochet lu avant toute hésitation de la carte, jamais deux « tous » de suite) ; bêtes 4 ; PV | Éveil → **affaiblissement** (le réveil engourdi) ; bêtes 4 ; `cartesJouees` ; garde ennemie |
| ANT246 Antre, Steppe, celte, Vent | Pierre → **invocations**, vocation (reprise unique de C ANT195 ; `vol` au lieu de `pietine`, et pas le `vulnerable` de A) ; PV | Cristal → **garde du héros** (le menhir devenu clair) ; bêtes 4 ; `seul` ; vos bêtes |
| ANT208 Antre, Glacier, inuit, Glace | Chaos → **garde des alliés** (la débâcle, et la harde qui se serre) ; bêtes 4 ; `pietine` ; défausse | Ordre → **soin du héros** (le cercle des bœufs musqués) ; bêtes 4 ; `troisCartes` ; soin ennemi |
| ANT185 Antre, Jungle, éthiopienne, Sève | Ruine → **invocations**, vocation (reprise unique de C ANT186 ; `cibleGarde` au lieu de `bete`) ; PV | Abondance → **perce-garde** (les greniers qui crèvent les murs) ; bêtes 4 ; `vulnerable` (aucune marque dans le pôle) ; soin ennemi |
| ANT142 Antre, Cavernes cristallines, égyptienne, Pierre | Nuit → **marque** (la nuit de la montagne désigne) ; bêtes 4 ; `elan` ; défausse | Aurore → **soin des alliés** (le jour roulé dans le cristal) ; bêtes 4 ; `cartesJouees` ; PV |

**Comptes prévus** : soin du héros 2 (Peste, Ordre), soin des alliés 1 (Aurore), garde du héros 1 (Cristal), garde des alliés 1 (Chaos), affaiblissement 1 (Éveil), riposte 2 (Guérison, Or), brûlure 1 (Ciel), marque 2 (Ombre, Nuit), mana 1 (Rouille), perce-garde 1 (Abondance), exil 1 (Nectar), pioche 1 (Lumière) ; rares : écho 1 (Foyer, 4 cartes exactement), coups au hasard 1 (Déluge). Soit 17. Vocations 3 (Pierre, Ruine, Abysse). Colonnes 4 (Exil, Poison, Sécheresse, Sommeil).

**Familles d'un même mot dans le lot (le second change sur les deux pôles)** : Exil/Foyer (B : colonnes PV/`blesse` et garde ennemie/`cibleGarde`) → D : colonne marque / écho. Abysse/Ciel (B : invocations, `elan` / pioche, `vulnerable`) → D : gros coups, `hesiteAvant` / brûlure, `vol`. Ombre/Lumière (A : brûlure, `seul` / mana, `pietine`) → D : marque, `pietine` / pioche, `hesiteAvant`. Peste/Guérison (C : garde des alliés, `soinEnnemi` / colonne PV/`blesse`) → D : soin du héros, `seul` / riposte, `brule`. Rouille/Or (C : colonne garde ennemie/`cibleGarde` / soin des alliés, `bete`) → D : mana, `elan` / riposte, `vol`. Poison/Nectar (A : pioche, `soinEnnemi` / garde du héros, `elan`) → D : colonne bête/`bete` / exil, `soinEnnemi` (le `soinEnnemi` de A est sur le Poison, pas sur le Nectar). Sécheresse/Déluge (B : invocations, `blesse` / soin du héros, `cartesJouees`) → D : colonne brûlure/`brule` / hasard, `pietine`. Sommeil/Éveil (C : riposte, `elan` / soin du héros, `troisCartes`) → D : colonne `hesite` / affaiblissement, `cartesJouees`. Pierre/Cristal (A : colonne marque/`vulnerable` / invocations, `pietine`) → D : invocations, `vol` / garde du héros, `seul`. Chaos/Ordre (A : colonne défausse / exil, `elan`) → D : garde des alliés, `pietine` / soin du héros, `troisCartes`. Ruine/Abondance (C : colonne défausse / écho, `cartesJouees`) → D : invocations, `cibleGarde` / perce-garde, `vulnerable`. Nuit/Aurore : seul D dans le lot.

**Plafonds (leçons 2 et 4 du lot 8)** : écho sur 4 cartes exactement (Foyer), riposte 8 au plus par carte réveil compris, dégâts ciblés 20 au plus hors Donjon aux paliers 1 à 6, jamais deux fois la même opération au même niveau d'une carte.

## Nombres précis (D)

Trois au plus, un par zone : **trente** lances (ASS047), l'an **huit** du roi (ANT142), et rien d'autre de précis. Ni « trois » (B : trois jours), ni « douze », « onze », « neuf », « vingt », « soixante », « deux cents » (B). Aucun nombre dans les noms.

## Prénoms et institutions (D)

- **Prénoms** : Kusi Ñusta (CIT024) ; le prêtre Tezcacoatl (DON098) ; Awīl-Ea, qui écrit à Ibbi-Ninurta (ASS178) ; la babka Ulita (ASS094) ; Dexikratês, le voleur (ASS041) ; Elidir et Rhun (ASS047) ; frère Gerolf (ANT176) ; le magistrat Okabe Jinza (ANT134) ; le druide Dumnoveros (ANT246) ; le chasseur Kunuk (ANT208) ; la vieille Askale (ANT185) ; Ameny-Seneb, chef d'expédition (ANT142). Aucun chez A, B ou C (relu à la remise : C a écarté Kusi et l'ayllu à cause de D).
- **Institutions** : l'ayllu (CIT024), l'unken (ASS178), la kopa (ASS094), l'apella (ASS041), le gorsedd (ASS047). Ni « conseil », ni « vétché », ni « skhodka », ni « hromada », ni « ekklèsia », ni « oireachtas », ni « óenach » (déjà en jeu), ni « curaca » (A).

## Formes de récit (D) : intrigue, première et dernière phrase

Documents cités : 4 sur 12 (la lettre, le charme, l'inscription, la stèle). Aucune énumération, aucun dialogue, aucune ouverture « X était petit quand », aucun récit à la première personne hors document. **Aucune chute en « X dit que »** (six au lot 8). Aucune forme de A ou de B, ni de mes lots 7 et 8.

| Zone | Forme | Qui fait quoi, et comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT024 | la relève | les mitmas gardent la coiffe de leur vallée et font un carré de leur terre dans la cour ; il y pleut quand il pleut là-bas ; la relève les trouve tournés vers le sud | « L'Inca envoya l'ayllu de Kusi Ñusta garder le fort de Karu Llaqta, au bord de la toundra, là où le maïs ne lève plus. » | « …et sous le gel, la terre du carré était fraîche, comme après une averse. » |
| DON098 | la croyance et son ouvrage | les prêtres éclairent au fond d'un puits la route du soleil sous la terre ; le feu s'éteint une nuit | « Les Mexica savent que le soleil, la nuit, passe sous la terre. » | « Il s'est levé tard, ruisselant, et depuis, il se lève un peu plus à l'ouest. » |
| ASS178 | **la lettre** (document) | l'envoyé du roi voit l'unken condamner un pêcheur sur la longueur de son ombre | « À Ibbi-Ninurta, mon seigneur, dis : ainsi parle Awīl-Ea, ton serviteur. » | « Le mien ne sort plus qu'à midi. » |
| ASS094 | **le charme** (document) | la kopa fait réciter chaque printemps le charme qui envoie le mal « dans la maison sans porte » ; au fond du bois, des maisons sans porte | « Charme de la babka Ulita, que la kopa de Volkhovnya fait dire à l'orée du bois quand la toux descend des chapeaux. » | « …il y a maintenant des maisons sans porte, et qu'on y tousse. » (rapporté par les bûcherons : seule parole rapportée de D) |
| ASS041 | la notice du guide (périégèse) | sur le mur des offrandes de fer rouillé, la main dorée du voleur, clouée, qui ne rouille pas | « Sur la falaise de Sidêroûs, l'apella se tient devant le trésor du dieu. » | « …ses doigts ne sont jamais repliés de la même façon. » |
| ASS047 | le festin | l'hôte sert le premier hydromel à l'ennemi venu prendre sa vallée ; l'ennemi parle toute la nuit avec sagesse et repart | « Au gorsedd d'Ystrad Medd, la loi de l'hôte veut qu'on serve à l'étranger le premier hydromel. » | « Il gouverne encore son pays. Il ne sait plus lequel. » |
| ANT176 | l'histoire d'un ouvrage | frère Gerolf tient l'écluse toute sa vie ; l'abbé la mure ; le marais baisse et rend une église plus ancienne | « Les moines de Hoogezijl ont endigué le marais pour bâtir leur abbaye, et frère Gerolf en a tenu l'écluse toute sa vie. » | « Elle était fermée de l'intérieur. » |
| ANT134 | l'enquête d'un magistrat | le magistrat attend le printemps dans un village qui dort tout l'hiver ; le chef lit le rapport | « Le magistrat Okabe Jinza fut envoyé à Fuyugomori-ura parce que la baie ne payait plus le riz d'hiver. » | « Okabe avait dormi depuis la deuxième neige. » |
| ANT246 | **l'inscription** (document) | le druide retaille les noms des chefs gravés sur les menhirs ; les pierres deviennent claires | « Sur la steppe de Licovindos, chaque menhir porte, en lettres grecques, le nom d'un chef et celui de son cheval. » | « …il a lu son propre nom, de sa main, qu'il n'avait pas encore gravé. » |
| ANT208 | la traque | le chasseur suit un bœuf musqué blessé jusqu'à une plaine où la glace se tient en cercle | « Kunuk suivait un bœuf musqué blessé sur le glacier d'Aaqqiktuq quand le brouillard tomba. » | « …sauf ce cercle, qui a reculé vers le camp. » |
| ANT185 | le conte étiologique (« pourquoi ») | le roi part et confie ses greniers aux singes ; les greniers se remplissent seuls ; les colobes en sortent blancs | « Pourquoi les colobes de Bäräkät portent-ils un manteau blanc ? » | « Elle ne laisse pas non plus les enfants monter à la cité. » |
| ANT142 | **la stèle d'expédition** (document) | le chef d'expédition rapporte au roi une boule de cristal où dort un peu de jour ; les scarabées suivent | « Stèle de l'expédition d'Ameny-Seneb, gravée à l'entrée de la mine d'Akhet-Weben. » | « …et ils attendent devant la porte du tombeau, tournés vers l'est. » |

## Noms de zones (moitiés, mot principal, mot traduit et préfixe, contre noms-pris.txt et A, B)

Karu Llaqta, le Fort des Mitmas (CIT024) ; Tonallan, le Puits du Soleil de nuit (DON098) ; L'Unken d'Apsû-Nawrum (ASS178) ; La Kopa de Volkhovnya (ASS094) ; L'Apella de Sidêroûs (ASS041) ; Le Gorsedd d'Ystrad Medd (ASS047) ; Hoogezijl, le Clocher des Basses Eaux (ANT176) ; Fuyugomori-ura, la Baie des Hivernants (ANT134) ; Licovindos, les Menhirs de Verre (ANT246) ; Aaqqiktuq, les Rangs de Glace (ANT208) ; Bäräkät, la Cité des Colobes (ANT185) ; Akhet-Weben, la Mine des Scarabées (ANT142). Écartés parce que déjà en jeu : Pukara (le Pukara de Chuqiraqay), Chiri- (Chiri-Pampa), -wasi (Hampiwasi), Kheper (Mer-Kheper), Debre/Dabra (Debre Nefas, Debre Zigba), Bäläs (« figue » : le Figuier d'Emthonjeni), Moraine, Rempart des…, Galerie.

## Bêtes (familles d'animaux, une par pôle chez D)

| Pôle | Bêtes | Familles |
|---|---|---|
| ASS047 − Poison | abeilles du quartz | hyménoptères (apidés) |
| ANT176 − Sécheresse | brochets des fossés | ésocidés |
| ANT176 + Déluge | castors de l'écluse | castoridés |
| ANT134 − Sommeil | phoques de la baie | pinnipèdes (phocidés) |
| ANT134 + Éveil | cormorans de pêche | phalacrocoracidés |
| ANT246 − Pierre | lièvres de la steppe | léporidés |
| ANT246 + Cristal | sauterelles claires | orthoptères |
| ANT208 − Chaos | morses | odobénidés |
| ANT208 + Ordre | bœufs musqués | bovidés (**2 avec B, plein**) |
| ANT185 − Ruine | colobes | primates (**2 avec A, plein**) |
| ANT185 + Abondance | calaos | bucérotidés |
| ANT142 − Nuit | engoulevents | caprimulgidés |
| ANT142 + Aurore | scarabées | coléoptères (**2 avec B, plein**) |

**Avertissement pour C** (inscrit avant moi, bêtes pas encore publiées) : bovidés, primates et coléoptères sont pleins à 2 avec D ; D tient un pôle de hyménoptères, ésocidés, castoridés, pinnipèdes, phalacrocoracidés, léporidés, orthoptères, odobénidés, bucérotidés, caprimulgidés. Aucune famille de D n'en rejoint une de A ou de B à 2 en dehors des trois nommées.

## ±7 (recettes prévues)

−7 : vide (CIT024, ANT208), ruine (ANT176, ANT185), silence (ANT134, ASS094), foule (ASS178, ANT246), démesure (DON098, ASS041), ordre (ASS047, ANT142). +7 : ordre (CIT024, ANT208), démesure (DON098, ANT142), silence (ASS178), foule (ASS094, ANT185), vide (ASS041, ANT134), objet (ASS047, ANT246, ANT176). Aucun pigment ; aucun végétal qui avale un bâtiment au +7.
