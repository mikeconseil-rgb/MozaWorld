# Critique du lot 11 : 48 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 10), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel. J'ai lu `tv/src/cartes.js` et `combat.js`, ainsi que la fonction `hesite` de `zonesplus.js`, sans rien y changer. LISTE.md, avec son tableau « Places des familles » et son paragraphe « Vocations », a servi de référence pour les places. Les reprises, les vocations et les crochets ont été recomptés au script sur les lots 1 à 10 (864 pôles). Les signalements des conteurs viennent des fichiers familles_A.md à familles_D.md.*

## Verdict

**Le lot est accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** La moyenne passe de **80,4** avant correction à **80,9 / 100** après. Aucune zone n'est refusée, et **aucune n'est sous 70** : aucune n'a donc été réécrite en entier.

Les corrections portent sur 40 cartes (dont 21 changements de condition), 5 récits, 5 bandes `pal`, 1 nom de zone et 1 nom de carte. Une note du critique est ajoutée en tête de 18 zones. Il y a cinq sortes de corrections :
- **Deux faits du moteur, que les validateurs ne voyaient pas :**
  - `hesite` et `hesiteAvant` sont un seul crochet. B l'avait dans 4 pôles et D dans 5, pour un plafond de 3.
  - « Vos alliés gagnent n de garde » lève aussi la Garde du héros. Trois pôles nourrissaient donc `garde` sans le savoir.
- **Six reprises de famille principale non déclarées chez D.** Cinq d'entre elles gardaient le prix principal du pôle d'origine.
- **Deux plafonds dépassés chez D :**
  - la Peste avait 6 cartes de dégâts ciblés, pour 5 au plus ;
  - trois pôles de D avaient le même assemblage `blesse`, défausse et soin ennemi, pour 2 au plus.
- **Le registre :** il y avait un sacrifice humain (B), une mutilation (C), un châtiment compté coup par coup (D), une saignée décrite (B) et des « garçons » frappés (B).
- **Des doublons d'image ou de nom :**
  - deux +7 du même couple chez A (contre C, puis contre D) ;
  - « Salinella » trop proche de « Salinera », déjà en jeu ;
  - « trois » dans trois zones de C.

À la remise, le validateur commun ne trouvait aucune erreur sur les règles écrites, sauf la Peste de D. Il vérifie :
- les longueurs ;
- l'ordre des opérations ;
- les conditions connues du moteur ;
- les conditions rendues vraies ou fausses, avec les `si` imbriqués ;
- les plafonds sur la carte entière, `si` et réveil compris ;
- l'écho au premier niveau ;
- le tag Loi et `"cible":1` ;
- les budgets et le palier 7.

Les leçons du lot 10 ont porté :
- **les demi-couples ont presque disparu.** Il en reste 1, contre 21 au lot 10 (A Étoiles, crochet lu sur 2 cartes et nourri sur 2) ;
- **`blesse` est revenu à sa place.** Il est dans 10 pôles, et jamais avec un prix en PV hors des deux colonnes ;
- **les intentions ennemies sont tenues :** 6 pôles, 2 au plus par conteur ;
- **l'enchaînement est en appoint dans 3 pôles au plus** (C et D en ont 3 chacun) ;
- **les places de LISTE.md sont tenues à l'unité.** Les places perdues sont déclarées et vérifiées.

Les récits restent la force du lot :
- « Ébliu le prit en honoraires, et les clans y mènent paître ses vaches. » (A ASS046) ;
- le censeur « cassé de son rang » pour avoir écrit ce qu'il avait vu, et le ruyi de jade du préfet (A ASS090) ;
- « les portes ont coûté plus que l'or. Nikētas en a commandé de neuves. » (B DON019) ;
- « Depuis, on récite une place vide, au milieu » (B ANT122) ;
- « C'est vrai, il les voit ; tout le monde, ici, les voit. » (C ASS175) ;
- « Depuis, à chaque toux, ce sont les bien-portants qui partent. » (C ASS099) ;
- la corde « que c'est d'en bas qu'on tient » (D ASS102) ;
- la dernière clause, « encore verte », qui nomme l'archiviste (D ASS123).

Le défaut neuf du lot : **les mots s'épuisent, et les reprises se font en silence.** A, B et C déclarent chacun 2 reprises, faute de mieux. D en fait 6 sans les déclarer. Son tableau disait « jamais principales chez D sur ce mot », et il lisait « jamais principales chez personne » comme une simple préférence. Les douze reprises du lot (sur 96 pôles) sont toutes un 2e emploi, chez un autre conteur que le premier. Il faut maintenant les borner par une règle (voir les arbitrages).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| DON125 | Gälab, la Grille du Balambaras | A | 81 | Le renversement de fortune, sec. Étoiles en gros coups : 3e et dernier emploi, régulier. |
| ASS113 | Le Zbor de Školjić | A | 81 | La greffe imposée, et le knez qui prélève sur chaque branche. L'écho est tenu à 4 cartes, et 3 cartes sont faites pour être doublées. |
| ASS046 | Le Dál d'Ard Luatha | A | 82 | Le meilleur récit de A : l'arbitre payé en pâturage. |
| ASS053 | Le Panchayat de Kejrisar | A | 81 | La chaîne de justice qui brûle les mains. « Très admirée des voyageurs » : c'est la 4e chute en « très » de A en deux lots. |
| ASS062 | Qimaavik, les Tentes pliées | A | 80 (79) | Le tyran qui « régna longtemps » sur des cercles de pierres. Le crochet `garde` était nourri par la garde des alliés : il devient `bete`. |
| ASS090 | Le Yushitai de Mogu-ling | A | 82 | L'inspection punie. Reprise déclarée (Mensonge en garde du héros). |
| ANT243 | Ṣillabtum, la Plainte au Soleil | A | 80 (79) | La plainte exaucée, et la prochaine à Sîn. Le +7 « plus une ombre » était celui de D ASS086 : il est changé. |
| ANT175 | oNgqongqo, les Cristaux troqués | A | 80 (79) | Le village qui a « mangé le sel ». La paroi pleine de rêves gardés était le +7 de C ANT215 : elle est changée. |
| ANT092 | Akegarasu-dake, le Palanquin du Seigneur | A | 79 (78) | Le seigneur endormi à l'aube parfaite. La chute est proche de celle de C ANT145 (le collecteur qui dort au matin) : tolérée. Crochet `garde` → `blesse`. |
| ANT091 | Esiqhotho, la Corne du Berger | A | 81 | « Son prix avait changé. » |
| ANT221 | Tāghestān, le Bûcher du Marzban | A | 81 | « Loué pour son bûcher, et muté avant le froid. » Glace en invocations : 3e emploi. |
| ANT017 | Ad Anseres, l'Alerte des Oies | A | 80 | La fausse alerte, et les pigeons « porteurs de la nouvelle ». Ordre en invocations : 3e emploi. |
| CIT032 | Cuauhyacac, les Hamacs de la Relève | B | 82 | Le fort endormi pris pour abandonné. Deux reprises déclarées (Sommeil, Éveil). |
| DON019 | Anemokremnos, les Vantaux du Logothète | B | 82 | Le seul document cité du lot, et le meilleur de B. Or en gros coups : 1er emploi compté. |
| ASS072 | Les Ah Kuch Kab de Kaxtunil | B | 81 (80) | La sève de l'aulne à la place du sang royal. La saignée n'est plus décrite au −7. |
| ASS081 | Le Sōson d'Akugawara | B | 80 (79) | Le tas devenu pré. Crochet `garde` → `vulnerable` : la garde des alliés le nourrissait sur 4 cartes. |
| ASS067 | Les Gardiennes d'Ehecapan | B | 81 (79) | La veille du corps. Les « garçons » frappés deviennent de jeunes guerriers à qui l'on barre la porte. |
| ASS073 | Le Calmecac de Citlalcuauhtla | B | 80 (78) | La nuit sans feu. Le feu neuf s'allumait « sur la poitrine d'un captif » : il s'allume maintenant sur la pierre de la colline. |
| ANT189 | Isikhwebu, la Lèche du Brouillard | B | 81 | « Mkhize ne garda pas un veau. » |
| ANT010 | Biancamar, la Cuvette des Avocettes | B | 80 (78) | Les oiseaux « qui ne témoignèrent pas ». Le nom (Salinella, face à Salinera) et le crochet (4e pôle `hesite`) sont changés. |
| ANT122 | Inis Fréma, la Litanie des Marées | B | 82 | La place vide dans la litanie. |
| ANT178 | Rung Tokkae, l'Oracle du Gecko | B | 81 | Le novice qui ne finit jamais de compter. |
| ANT087 | KwaNsizwa, la Plume attendue | B | 81 | Le rappel qui ne vint pas. Avec la garde des alliés, le Foyer est une vraie colonne garde et `garde` (crochet sur 4 cartes, Garde levée sur 6). |
| ANT135 | Phum Thom, la Carte perdue | B | 79 | Le récit dit deux fois « jettent leurs nasses au hasard », en deux phrases de suite. |
| DON113 | Caprasia, le Vœu d'Ancharius | C | 81 | « Ce qui montait du fond pour le regarder aussi. » Même idée que D ASS102 (quelque chose répond d'en bas) : tolérée, les objets diffèrent. |
| ASS147 | Bīt-Šārim, le Procès du Vent | C | 82 | Le vent condamné à ne souffler que la nuit. |
| ASS175 | Kerokastron, le Goûteur des Ruines | C | 83 | Le meilleur récit du lot. Colonne hésitation et `hesite`, propre. |
| ASS099 | Tikahoa, l'Exil des Bien-portants | C | 82 | Le bannissement inversé. |
| ASS127 | Ölgiitai, la Ceinture du Noyon | C | 81 | La grève du zèle, et le sceau « perdu quelque part sous les lamelles ». |
| ASS138 | Tepozoztoc, le Partage des Frères | C | 80 (79) | Le cuivre qui paie le pain. L'anneau « ôté avec le doigt » et deux « trois » sont retirés. |
| ANT240 | Aiôrousa, l'Échelle des Pèlerins | C | 81 (80) | La laure qui remonte en s'ouvrant. « Trois paumes » est retiré. |
| ANT145 | Mazacoyan, la Piste sans torche | C | 80 | Le guetteur à contretemps. Voir A ANT092. |
| ANT215 | Ca' Sbrighia, l'Atelier du Transfuge | C | 81 | L'assassin enrôlé comme portier. |
| ANT046 | Kraol Daek, la Réserve du Roi | C | 80 | La forêt sauvée par l'ordre qui ne vient pas. Fer en invocations : 3e emploi. |
| ANT196 | Melrakkahellir, la Cache mangée | C | 81 | L'appât vide. |
| ANT206 | Hypnokleia, la Basse-cour du Dieu | C | 81 (80) | Le prêtre qui mange les coqs. « Les vieux » devient « les vieux coqs ». |
| CIT025 | Gorelets, le Mot de nuit | D | 81 (80) | La montagne qui répond l'ancien mot. Le fouet devient les fers. Reprise non déclarée (Mensonge en garde des alliés), mais déjà conforme. |
| DON102 | Tlazolapan, le Tribut des Pirogues | D | 80 (77) | « Elles partent vides, et elles reviennent pleines. » Les gros coups passent de 6 à 5 cartes. La Guérison était une reprise non déclarée avec le même prix et le 3e même assemblage : crochet et prix changés. |
| ASS102 | Le Hyōjōshū de Kuragari | D | 82 | Le conseil qui sonde au lieu de délibérer. |
| ASS111 | L'Umhlangano d'eSidwadweni | D | 82 | La source qui parle la première. |
| ASS123 | Le Koinon d'Amarianon | D | 82 | Les clauses qui poussent dans la moisissure. |
| ASS136 | Aqiggiq, la Dette du Récif | D | 80 (79) | La flamme refusée qui revient seule. Crochet `hesiteAvant` → `piocheCout0`. |
| ASS086 | Le Mahfel de Dirang | D | 80 (78) | L'ombre arrivée avant le soleil. Deux reprises non déclarées, chacune avec le prix principal du pôle d'origine : un prix changé par pôle. |
| ANT043 | Kemsk, le Fond découvert | D | 81 (79) | Les noyés debout au fond. La Brume était une reprise non déclarée et le 5e pôle `hesite` de D : crochet et prix changés. |
| ANT132 | Rautoa, les Allées du Tahu'a | D | 81 | La route d'étoiles. Deux colonnes dans la même zone (bête et `bete`, défausse et `defausseAPrix`). |
| ANT094 | Ch'inkaya, le Salar qui retient | D | 81 | « Sa propre voix, qui dit ce qu'on n'a pas encore dit. » Silence en invocations : 3e emploi. |
| ANT238 | Tsaddanqal, la Citerne close | D | 81 | L'eau qui monte d'une main par an. |
| ANT213 | Glykeria, le Réfectoire des Loirs | D | 81 (80) | Le loir de plus. La Mémoire était une reprise non déclarée (marque) avec le prix de l'origine : un prix changé. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 80,7 (80,3).** Les chutes les plus sèches. Les reprises sont déclarées et propres. Mais deux +7 pris au même couple chez C et chez D, et un tic en « très ».
- **B, 80,8 (80,2).** Les meilleurs récits de choses (le compte des portes, la litanie). Mais le registre est le plus souvent dépassé : sacrifice, saignée, garçons frappés.
- **C, 81,1 (80,8).** Le meilleur récit du lot, des colonnes vraies, peu de corrections. Mais encore deux invocations doublées (ANT145 −5, ANT046 −5) et trois « trois ».
- **D, 81,0 (80,2).** L'étrangeté la plus juste, et des chutes très sûres. Mais six reprises non déclarées, un crochet dans 5 pôles et des gros coups à 6 cartes : le plus de corrections mécaniques.

Moyenne du lot : **80,9** (80,4 avant).

## Arbitrages demandés

- **Reprises de famille principale sur un même mot.** Recompte au script sur les lots 1 à 10 (famille sur 5 cartes ou plus).
  - **Déclarées, régulières** (2e emploi, chez un autre conteur, crochet et prix principal nouveaux pour le mot) :
    - A : Mensonge en garde du héros (après D DON081), Bois en garde des alliés (après C CIT027) ;
    - B : Sommeil en garde des alliés (après A ANT026), Éveil en affaiblissement (après D ANT134) ;
    - C : Mort en brûlure (après D ANT223), Rêve en garde des alliés (après B CIT028).
    **Acceptées.** Chacune remplace une 5e ou une 6e colonne, que LISTE.md interdit.
  - **Non déclarées, chez D** : Mensonge en garde des alliés (après A ANT204), Guérison en soin des alliés (après A DON014), Ombre en garde du héros (après A CIT008), Lumière en brûlure (après C ANT080), Brume en affaiblissement (après B ASS052), Mémoire en marque (après A DON072).
    - Chacune est un 2e emploi chez un autre conteur, avec un crochet nouveau.
    - Mais cinq gardaient le prix principal de l'origine, ou étaient à égalité avec lui (Guérison et soin ennemi, Ombre et défausse, Lumière et PV, Brume et défausse, Mémoire et PV).
    - **Corrigé** : un prix par pôle passe à l'autre sorte du pôle, à budget égal (DON102 +3, ASS086 −3 et +3, ANT043 −4, ANT213 +3).
    - Le nombre (6) est **toléré pour ce lot**. Ramener D à 2 aurait défait 4 de ses places, que LISTE.md lui donnait. Ses notes en portent le prix.
  - **Douze reprises sur 96 pôles.** Les reprises sont acceptables : un mot qui a porté une famille une seule fois peut la porter une seconde fois, si le pôle change de crochet, de prix et d'image. Elles ne le sont plus sans plafond et sans déclaration. **Règle proposée pour les lots 12 et 13** :
    1. une reprise est un 2e emploi seulement, jamais un 3e ;
    2. elle est faite par un autre conteur que le premier emploi ;
    3. elle prend un crochet, un prix principal et, s'il y a des invocations, une bête principale nouveaux pour le mot ;
    4. elle est déclarée dans familles_X.md, avec le pôle d'origine, et comptée au script ;
    5. on en fait **2 au plus par conteur et par lot**. Au-delà, la place est perdue : LISTE.md compte au script, avant de répartir, les places tenables de chaque conteur, et retire celles qui demanderaient une 3e reprise.
- **Places perdues.**
  - A perd 2 places (brûlure, seconde perce-garde). Vérifié au script : la brûlure a déjà été principale sur ses 24 mots, et la perce-garde n'est libre que sur la Tyrannie, qui la prend.
  - B perd 3 places (garde du héros, brûlure, mana). La garde du héros n'est libre sur aucun de ses mots. La brûlure et le mana sont libres sur des mots qui tiennent déjà une autre place ou une vocation (Mémoire, Silence, Ruine ; Mort, Corruption, Pureté). Un échange ne ferait que déplacer la perte.
  **Validé** : une place perdue vaut mieux qu'une reprise de plus.
- **Colonnes : A 4, C 4.**
  - C : 17 places et 3 vocations seulement possibles. La 4e colonne est celle que LISTE.md prévoit.
  - A : 15 places tenues (2 perdues) et 5 vocations. Ce sont les places perdues qui obligent à une 4e colonne, et non le compte des vocations. **Toléré**, car le résultat est le même (24 pôles sans 5e colonne).
  - Les 14 colonnes du lot se remplissent toutes elles-mêmes, avec le crochet sur 4 cartes et l'effet sur 3 au moins (B Sève : brûlure sur 3).
- **Couples.**
  - **Défausse et `defausseAPrix` : 2 pôles** (B Pourriture, D Ordre). Le Nectar de C, troisième au plan, est passé à l'hésitation avant les cartes. A Aurore, C Abysse, C Calme et C Fer lisent `defausseAPrix` sans jamais payer en défausse. Après correction, B Pureté le lit aussi sans payer en défausse. **Conforme.**
  - **Chez C, PV et `brule` (3 pôles dans le lot) et défausse et `vulnerable` (6 pôles dans le lot).** Ce ne sont pas des couples, car le prix ne nourrit pas la condition. Ce sont des assemblages. Leur plafond est de 2 pôles par conteur (C en a 2 de chaque), ou de 3 dans le lot pour un crochet d'intention, ce qu'ils ne sont pas. **Conformes.**
  - Les autres couples : garde ennemie et `cibleGarde` 2, PV et `blesse` 2, hésitation et `hesite` 2, brûlure et `brule` 2, garde et `garde` 2 (D Vérité, B Foyer), marque et `vulnerable` 1, bête et `bete` 1.
- **`hesite` et `hesiteAvant`.**
  - Dans `cartes.js`, `condition()` rend `I==='h'` pour `hesiteAvant`, et `t.int.a==='h'` pour `hesite`. C'est la même lecture de l'intention de la cible : elle est remplie dès que l'opération `hesite` a joué (`zonesplus.js` pose `int.a='h'`).
  - **Il faut les compter ensemble**, comme A l'a fait. B en avait 4 pôles et D 5.
  - **Corrigé** : B Pureté → `defausseAPrix` ; D Brume → `vulnerable` ; D Glace → `piocheCout0`. Après correction : A 2, B 3, C 3, D 3.
- **Trouvé à la relecture : la garde des alliés lève la Garde du héros.**
  - Le combat crée `allies:[hero]`. `alliesDe('allies')` rend donc le héros avec les bêtes, et `garder(hero)` appelle `leverGarde`. « Vos alliés gagnent n de garde » remplit ainsi `garde`, et « vos alliés se soignent » soigne aussi le héros.
  - Trois pôles nourrissaient `garde` sans le savoir : A Liberté (crochet lu 3 fois, Garde levée 3 fois), A Nuit (3 et 3), B Croissance (3 et 4, un second couple garde et `garde` chez B).
  - **Corrigé** : Liberté → `bete`, Nuit → `blesse`, Croissance → `vulnerable`. Ce sont trois crochets que ces mots n'avaient jamais eus, et que l'autre conteur du même couple n'a pas.
  - Le Foyer de B, que les scripts comptaient comme une colonne « 4 et 2 », est une vraie colonne (Garde levée sur 6 cartes).
  - Aucune carte ne lit `garde` après une garde des alliés.
- **Assemblage `blesse`, défausse et soin ennemi** dans 3 pôles de D (Guérison, Ombre, Sécheresse), pour 2 au plus. **Corrigé** : la Guérison lit `piocheCout0` en +2, +5, +7.
- **Gros coups de la Peste (D DON102 −) : 6 cartes de dégâts ciblés**, pour 5 au plus (leçon 1 du lot 5). **Corrigé** : en −1, 5 dégâts à tous (budget 11 pour 10).
- **Récits et registre.** Tous les récits, `pal`, ambiances et noms de carte ont été relus pour un jeu de fantasy grand public pour adultes : aucune violence détaillée, aucun enfant en danger, aucun contenu sexuel. Sont réécrits :
  - B ASS073 : le feu neuf « sur la poitrine d'un captif » (récit et ambiance +1) devient « sur la pierre de la colline » ;
  - B ASS067 :
    - les « garçons » qui viennent voler un doigt à la morte, et celui que la doyenne frappe, deviennent de jeunes guerriers à qui elle barre la porte ;
    - cela touche le récit, 2 bandes et 4 ambiances, sans changer la chute ;
  - B ASS072 : la langue entaillée du −7 (bande et ambiance) devient un sang donné à tour de rôle ;
  - C ASS138 +3 : l'anneau « ôté avec le doigt » est ôté par les gardes du palais ;
  - D CIT025 :
    - le fouet, et « la garnison compte les coups », deviennent les fers ;
    - cela touche le récit, l'ambiance et le nom de −5 ;
  - C ANT206 : « attendit que les vieux meurent » se lisait comme des vieillards : ce sont les vieux coqs.

  Sont gardés : la vendetta de A ASS113 (dite, non montrée), les noyés debout de D ANT043, les pirogues de « corps immobiles » de D DON102, et l'assassin de C ANT215 (« un homme habile », qui ne tue personne). Le passage coupé par le filtre pendant l'écriture de A ne se retrouve pas dans le texte remis : les douze récits de A sont dans le registre.
- **Décors et motifs proches.**
  - **Deux monastères orthodoxes (C ANT240 et D ANT213), tous deux byzantins par LISTE.md.** Les gestes diffèrent (ouvrir l'échelle à tous ; manger la pénitence), comme les bêtes (corbeaux et abeilles ; loirs et tortues), les ±7 (la laure posée sur les pins puis bourdonnante ; les jarres closes puis la carapace gravée) et les titres (« l'ancien » ; l'archimandrite). **Toléré.**
  - **L'arpentage (B ASS081 et D ASS086).** La chute de B ne fait plus revenir d'arpenteur : il ne reste qu'un litige sur une borne, contre une ombre mesurée à la chaîne. **Validé.**
  - **La chaîne de justice (A ASS053) et le fer et la forêt (C ANT046).** Les intrigues diffèrent (la cloche qu'on ne peut pas tirer ; la coupe interdite pour garder le fer), comme les ±7 (la chaîne dans le désert puis la corde à linge ; les souches et les fours, puis la forêt défendue). **Validé.**
  - **Trouvés à la relecture (leçon 6 du lot 9 : même couple, autre image au ±7) :**
    - A ANT243 et D ASS086 finissaient tous deux au +7 sur « plus d'ombre » ;
    - A ANT175 et C ANT215 sur une paroi pleine de rêves gardés.
    A était inscrit après C et D : **corrigé chez A**, bande +7 et ambiance de la carte +7.
  - **Tolérés** :
    - A ANT092 et C ANT145 (Nuit et Aurore) finissent tous deux sur un puissant qui dort au moment voulu, mais les gestes diffèrent (le palanquin, la piste) ;
    - C DON113 et D ASS102 (Abysse et Ciel) ont tous deux « quelque chose d'en bas » ;
    - B ANT178 et D ANT094 ont tous deux un lieu qui rend les voix (l'écho du cristal, le miroir du sel) ;
    - B ANT122 et D ANT213 ont tous deux, au +7, les noms un par un.
    C'est la pente du couple. Voir la leçon 6.
- **Bêtes, recomptées au script sur une table commune** (60 familles, nom par nom, à la maille de la famille courante) :
  - **à 2, conformes** : cervidés (rennes de A, élans de B), canidés (chacals de A, renards polaires de C), crustacés (artémies de B, crabes de cocotier de D) ;
  - **rongeurs : 1 seul pôle** (les loirs de D). C a remplacé ses loirs par des hérissons (érinacéidés), et les lièvres de A (léporidés) et les musaraignes de A (soricidés) ne sont pas des rongeurs ;
  - faux amis écartés : les effraies (tytonidés) ne sont pas des rapaces diurnes, et seul le gerfaut de A en est un ; les solifuges de A et les scorpions de B sont deux ordres d'arachnides ; les labbes de A ne sont pas des laridés comme les goélands de C ;
  - les vocations ont toutes une bête principale nouvelle pour leur mot.
- **Vocations du lot**, recomptées : A 5, B 7, C 3, D 4.
  - Les 3es emplois sont réguliers : Étoiles, Rêve, Aurore, Glace, Ordre, Mémoire, Chant, Exil, Abondance, Fer, Peste, Clarté, Silence, Oubli.
  - Les 2es emplois aussi : Corruption, Croissance (pioche), Ciel, Nuit, Poison (pioche), Sève et Vérité (pioche), Abysse (pioche, 1er emploi), Or (1er emploi compté).
  - Aucun mot ne porte deux vocations dans le lot.
- **Invocations doublées (C ANT145 −5, ANT046 −5)** : deux bêtes du même nom dans une carte. Aucun plafond n'est passé. **Toléré**, comme au lot 10, mais c'est le deuxième lot de suite chez C.
- **Petits points tolérés** :
  - A ASS062 +7 a un réveil à 59 % au compte commun, et 61 % à celui de A (les k premiers qui hésitent comptent 4k au lieu de 4,5k). C'est un écart de table, pas une erreur.
  - « Loir » au début de deux effets de D ANT213 trompe un test naïf du tag Loi : ce n'est pas une Loi.
- **Noms.**
  - « Salinella » (B ANT010) est à une lettre de « Les Roses de Salinera », déjà en jeu. **Corrigé** : la zone devient Biancamar, la Cuvette des Avocettes, partout dans le fichier.
  - Tolérés comme aux lots 9 et 10 :
    - des préfixes de langue partagés avec des noms en jeu : Esiqhotho et Esiqhingini (locatif zoulou), Ad Anseres et Ad Talos, Anemokremnos et Anémoskala, Ca' Sbrighia et deux « Ca' » ;
    - des mots principaux déjà au pluriel dans un autre nom en jeu, avec une autre seconde moitié : Échelle, Piste, Atelier, Fond, Citerne.
  - Aucun mot principal, complément, préfixe ni prénom n'est en double dans le lot.
- **Nombres.** C avait « trois » dans trois zones (ANT215, ANT240, ASS138). **Corrigé** dans les ambiances d'ASS138 et d'ANT240. Il n'y a plus de nombre précis en double. « Trois cent dix » (B), « quatre cents » (D) et « trente-six » (B) sont des nombres distincts de « trois », « quatre » et « trente » (C).

## Défauts de fond (au-delà des corrections)

1. **Les validateurs comptent les règles écrites, pas le moteur.** `hesite` et `hesiteAvant`, ou la garde des alliés qui lève la Garde du héros : les quatre validateurs les traitaient comme des choses différentes. Le moteur, lui, ne les distingue pas.
2. **La reprise devient le moyen ordinaire de tenir les places.** Les reprises déclarées sont propres, mais douze pôles sur 96 rejouent une famille déjà jouée sur leur mot. Le premier inscrit (D) les fait sans le dire.
3. **Le registre n'est pas relu au filtre du public.** Le sacrifice, la mutilation et le fouet viennent d'une culture d'inspiration rendue fidèlement. Mais la carte ne peut pas montrer ce que le récit suggère.
4. **Les ±7 des couples partagés se comparent encore aux fiches et non aux images.** Deux réserves de rêves et deux « plus d'ombre » ont passé les cartes des familles.

## Corrections faites (40 cartes, 5 récits, 5 bandes `pal`, 1 nom de zone, 1 nom de carte, et une note du critique en tête de 18 zones)

**Cartes**
- A :
  - ASS062 +2, +4, +6 (`garde` → `bete`) ;
  - ANT092 −2, −4, −6 (`garde` → `blesse`) ;
  - ambiances de ANT243 +7 et ANT175 +7.
- B :
  - ASS081 +2, +4, +6 (`garde` → `vulnerable`, `"cible":1`) ;
  - ANT010 +2, +4, +6 (`hesiteAvant` → `defausseAPrix`, et `"cible":0` en +6, où plus rien ne vise la cible) ;
  - ambiances : ASS073 +1, ASS067 −3, −5, −6, +6, ASS072 −7.
- C : ambiances d'ASS138 −6, +3, +6 et d'ANT240 +4.
- D :
  - DON102 −1 (5 dégâts à tous) ;
  - DON102 +2, +5, +7 (`blesse` → `piocheCout0`) ;
  - DON102 +3 (prix : défausse) ;
  - ASS086 −3 et +3 (prix) ;
  - ANT043 −2, −4, −6 (`hesite` → `vulnerable`), et ANT043 −4 (prix : bête) ;
  - ANT213 +3 (prix) ;
  - ASS136 −2, −4, −6 (`hesiteAvant` → `piocheCout0`) ;
  - CIT025 −5 (ambiance et nom : « Les fers de la porte »).

**Fiches et texte**
- Récits : B ASS073, B ASS067, C ANT206, D CIT025 (fers au lieu de fouet), B ANT010 (le nom de lieu).
- Bandes `pal` :
  - A ANT243 +7 et ANT175 +7 ;
  - B ASS072 −7 ;
  - B ASS067, deux bandes (−5..−2, +2..+5).
- Nom de zone : B ANT010, Biancamar, la Cuvette des Avocettes, partout dans le fichier (tableau des résonances et carte +7 « La Pureté de Biancamar » compris).
- Une note « Note du critique (lot 11) », hors des blocs ```json```, en tête de chaque zone touchée :
  - A ASS062, ANT092, ANT243, ANT175 ;
  - B ASS081, ANT010, ASS073, ASS067, ASS072 ;
  - C ASS138, ANT240, ANT206 ;
  - D DON102, ASS086, ANT043, ANT213, ASS136, CIT025.

Les budgets des cartes touchées sont recalculés au script. Le champ `budget` porte « recalculé par le critique (lot 11) », ou « condition changée par le critique (lot 11) » quand seule la condition change (un `si` compte 50 % quelle que soit la condition).

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 48 fiches et 672 cartes. Chaque zone a un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet de 250 caractères au plus, ambiance de 12 à 20 mots, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus.
- Opérations et conditions :
  - toutes sont connues du moteur, avec leurs arguments dans le bon ordre ;
  - aucune opération n'est répétée au premier niveau d'une carte, hors les deux invocations doublées tolérées ;
  - sur la carte entière, réveil compris : `mana` ≤ 2 et riposte ≤ 8 ;
  - dégâts ciblés ≤ 20 hors Donjon et ≤ 30 en Donjon, aux paliers 1 à 6 ;
  - aucun écho sous `si` ni sous réveil ;
  - l'écho est sur 4 cartes exactement (A Sang, B Rouille), et 3 cartes sans écho sont faites pour être doublées ;
  - `"cible":1` est partout où il le faut, et le tag Loi est conforme ;
  - aucune condition n'est remplie ni vidée par la carte elle-même avant son `si`, `si` imbriqués compris. La garde des alliés est comptée comme une Garde levée.
- Budgets : aucun écart au-delà de ±15 %. Chaque palier 7 a une base de 45 à 55, un réveil de 60 à 100 % (sauf A ASS062 +7, voir plus haut) et une phrase d'ouverture de 3 à 6 mots.
- Places : chaque conteur tient ses places de LISTE.md, sauf les places perdues déclarées (A 2, B 3). Les 12 familles à 6 pôles ont 6 pôles au plus, et les places rares 2 au plus.
- Familles :
  - aucune famille principale n'est commune aux deux pôles d'une zone, ni aux deux pôles d'un même mot dans le lot ;
  - les appoints, enchaînement compris, sont dans 3 pôles au plus par conteur ;
  - les dégâts ciblés sont sur 4 cartes au plus par pôle, et 5 pour les quatre gros coups (A Étoiles, B Or, C Ciel, D Peste) ;
  - « tous » est sur 3 cartes au plus, sans deux hésitations de « tous » de suite ;
  - chaque famille d'animaux est dans 2 pôles du lot au plus.
- Colonnes : A 4, B 3, C 4, D 3.
- Crochets :
  - chacun est dans 3 pôles au plus par conteur, `hesite` et `hesiteAvant` comptés ensemble ;
  - les intentions ennemies sont dans 6 pôles, 2 par conteur au plus (A `elan`, `soinEnnemi` ; B `pietine`, `seul` ; C `pietine` ; D `soinEnnemi`, `vol`) ;
  - aucun assemblage prix et crochet n'est dans plus de 2 pôles d'un même conteur.
- Prix : deux sortes par pôle, la seconde sur 2 cartes au moins. Chaque pôle a 6 ou 7 cartes à prix sur 7, à une carte près dans chaque zone.
- Les 48 noms du lot sont uniques entre conteurs (par moitié, mot principal, mot traduit et préfixe), hors les tolérances ci-dessus. Ils sont absents de `noms-pris.txt`, où ils sont maintenant ajoutés.

## Leçons pour le lot 12 (à ajouter aux consignes)

1. **`hesite` et `hesiteAvant` sont un seul crochet** (le moteur lit `int.a === 'h'` pour les deux). Ils comptent ensemble dans le plafond de 3 pôles par conteur.
2. **« Vos alliés gagnent n de garde » lève aussi la Garde du héros**, car le héros est dans `CB.allies` (et « vos alliés se soignent » le soigne aussi). Elle nourrit `garde` dans les couples, les demi-couples et les conditions rendues vraies.
3. **Une reprise de famille principale sur un mot** :
   - est un 2e emploi seulement, par un autre conteur que le premier ;
   - prend un crochet, un prix principal et une bête principale nouveaux ;
   - est déclarée dans familles_X.md ;
   - se fait 2 fois au plus par conteur et par lot.
   Au-delà, la place est perdue, et LISTE.md la retire avant de répartir.
4. **Les gros coups font 5 cartes de dégâts ciblés, jamais 6.** Un même assemblage de crochet et de deux prix (`blesse`, défausse, soin ennemi) compte comme un seul assemblage.
5. **Registre grand public pour adultes.** Pas de sacrifice humain, de mutilation, de châtiment corporel décrit, ni de coup porté à un enfant ou à un « garçon ». On suggère (les fers, la porte barrée) au lieu de montrer, même quand la culture d'inspiration le ferait.
6. **Même couple dans le lot : le second inscrit compare les images du ±7, pas seulement les familles.** Deux réserves de rêves ou deux « plus d'ombre » font une même métamorphose.
7. **Noms : la première moitié se compare aussi à une lettre près** (Salinella, Salinera). Un nombre précis compte aussi dans les ambiances (« trois » dans trois zones de C).
