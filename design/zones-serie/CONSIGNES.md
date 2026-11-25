# Production des zones en série : consignes des conteurs (lots)

But : faire entrer beaucoup de nouvelles zones dans le jeu web, **sans zone au rabais**. Chaque zone est unique : son nom, son histoire, ses deux pôles, ses 14 cartes. Le critique relit chaque lot avant l'intégration. **Depuis le 25 nov., il suit `design/equipe/critique_litteraire_v3.md` et lance `python3 design/equipe/mesures_texte.py` avant de lire.**

## À lire avant d'écrire (dans cet ordre)
1. Ton profil et ta voix : `/home/user/MozaWorld/design/equipe/profils_agents.md`, puis ton fichier `agent_X_v2.md` (même dossier) et `consignes_conteurs.md`.
2. Les règles des cartes : `/mnt/project-files/cartes-2.2/consignes-cartes.md` (sections 1 à 7, surtout 6 « chaque palier donne une carte » et 7 « 250 caractères au plus »), puis `regles-avancees.md` (même dossier) pour le vocabulaire exact des `ops`.
3. Un exemple complet du format attendu : `/mnt/project-files/cartes-2.2/conteur_X_paliers.md` (ton propre fichier). Copie sa rigueur : budget vérifié, prix à égalité entre pôles, progression en 7 étapes.

## Ce qu'il faut écrire, pour chaque zone qui n'est pas une Ressource
1. **Fiche** (un bloc ```json``` à part) :
   `{"fiche":"ANT209","nom":"…","recit":"…","pal":["…","…","…","…","…"],"pm":"Mort","pp":"Vie"}`
   - `nom` : un nom propre inventé, enraciné dans la culture d'inspiration, unique dans tout le jeu. Forme libre mais courte (ex. « La Taïga de Kobor », « Berestograd, la Ville-Écorce »).
   - `recit` : le background, 60 à 100 mots, dans ta voix, avec un personnage nommé et un détail concret. Pas de source réelle recopiée.
   - `pal` : 5 phrases (≤ 160 caractères chacune) qui décrivent **ce qu'on voit** dans la zone aux bandes −7..−6, −5..−2, −1..+1, +2..+5, +6..+7. L'écart entre −7 et +7 doit être frappant (le lieu est méconnaissable), avec un saut graduel. Ni bien ni mal : chaque pôle a sa grandeur et son prix.
   - `pm` / `pp` : reprends les pôles donnés dans la liste du lot (tu peux préciser le mot s'il est trop plat, en le disant au critique).
2. **14 cartes** (un bloc ```json``` avec un tableau) : pôle − paliers 1 à 7 et pôle + paliers 1 à 7, au format de la section 4 + 6 des consignes. Champ `zone` = l'identifiant sans tiret (ex. `ANT209`). Palier 7 = forme ultime qui change de nature, pose une résonance et en réveille une autre. Les deux pôles = deux façons de jouer, jamais un miroir. Effet ≤ 250 caractères. Ambiance 12 à 20 mots.
   - Les Antres invoquent des bêtes (au moins 3 cartes d'invocation par pôle, chacune liée au background).
   - Les Assemblées penchent vers le contrôle, la pioche, les lois (cartes de loi) ; les Donjons vers la puissance brute et les pièges ; les Citadelles vers la garde, l'endurance et le commandement.
3. Pas d'inscriptions, de livre ni de scénario : d'autres équipes les écrivent ensuite.

## Pour chaque Ressource
Un seul bloc ```json``` par Ressource : `{"fiche":"RES167","nom":"…","recit":"…","pal":["…","…"]}`
- `recit` : background **léger**, 30 à 50 mots, sans livre ni inscription.
- `pal` : 2 phrases (≤ 160 caractères) : ce qu'on voit aux niveaux 0-1, puis aux niveaux 2-3 (la source donne plus).
- Aucune carte (une Ressource ne donne que du mana).

## Garde-fous du critique (leçons des lots précédents)
- Une ambiance ne doit pas pouvoir passer d'une zone à l'autre : un nom, un objet, un geste propres à la zone.
- Varier les chutes et les tics (pas de « une autre main a ajouté », pas de chiffres fétiches répétés, pas toujours un scribe ou un narrateur qui hésite).
- Donner un prix aux deux pôles. Aucun pôle n'est le bien.
- Un nom de zone ne doit pas reprendre un nom déjà en jeu (liste : `/mnt/project-files/zones-serie/noms-pris.txt`).

## Où écrire
`/mnt/project-files/zones-serie/lot-N/conteur_X.md` (N = numéro du lot, X = ta lettre). Le dossier est un montage réseau : écris le fichier en une fois (ou par grosses parties), puis relis-le une dizaine de secondes après pour vérifier qu'il est complet. Ne touche à aucun autre fichier.

## Leçons du critique après le lot 1 (à appliquer dès le lot 2)

1. **Ordre des opérations** : `["affaiblit", qui, n]`, `["vulnerable", qui, n]`, `["brulure", qui, n, tours]`, `["deg", "hasard", n, coups]`. Pas plus de 2 `mana` par opération (plafond du moteur). Les conditions `si` doivent figurer dans la liste du moteur (`bete`, `blesse`, `seul`, `hesite`, `garde`, `elan`, `vol`, `pietine`, `brule`, `vulnerable`, `cibleGarde`, `defausseAPrix`…) : une condition inconnue est toujours fausse, et sans message d'erreur.
2. **Mots et images interdits au lot 2** (déjà usés) : « repeint », « ocre lessivé », « lanterne sourde », « deux … presque pareils », « en aplats », le rose au +7, « tiède », « quarante ». Un nombre précis ne revient pas dans deux zones du même lot.
3. **Faire tourner les +7 et les −7** : au moins trois recettes différentes par conteur dans un lot (par exemple vide, ordre, foule, silence, démesure, ruine). Une seule zone par lot, tous conteurs confondus, où le végétal avale un bâtiment au +7.
4. **Même mots de pôle chez un même conteur** : avant d'écrire, poser une ligne « famille d'effets − / famille d'effets + » pour chaque zone et vérifier qu'elles ne partagent pas leur famille principale (c'était le cas d'ASS166 et d'ASS128).
5. **Ressources : un geste par lot.** Tailler la glace, racler des lamelles, lancer des cerfs-volants, relever une crue : chaque geste n'apparaît qu'une fois dans le lot. Les conteurs tiennent une liste commune de leurs gestes et la consultent avant d'écrire.
6. **Compter au script, pas à l'œil** : ambiance de 12 à 20 mots, récit de 60 à 100 mots, `pal` de 160 caractères au plus, effet de 250 caractères au plus. Lancer le validateur avant de remettre le fichier.
7. **Chutes** : la même tournure de fin (« …, sans X. », « Morale : », un récit tronqué, « Toutes, sauf une ») au plus deux fois par conteur et par lot.
8. **Tag « Loi »** : obligatoire sur toute carte d'Assemblée dont l'effet commence par « Loi », et interdit ailleurs.

## Leçons du critique après le lot 2 (à appliquer dès le lot 3)

1. **Une condition se lit avant ce qui la remplirait.** Il ne faut jamais tester dans une carte ce que la même carte vient de faire. Écrire « si elle hésitait déjà… Puis elle hésite », « si la Garde était déjà levée… Puis vous gagnez », « si une carte a déjà été défaussée en prix ce tour… Puis défaussez ». `defausseAPrix` vaut pour **le tour**, pas pour le combat. Le validateur doit signaler tout `si X` précédé, dans la même carte, d'une opération qui rend X vrai (`garde` héros → `garde`, `hesite` → `hesite`, `brulure` → `brule`, `vulnerable` → `vulnerable`, `invoque` → `bete`, `prixDefausse` → `defausseAPrix`).
2. **Un plafond de familles par lot, tous conteurs confondus.** Au plus deux pôles du lot dont la famille principale est l'hésitation (ce lot en avait cinq), et au plus deux pour les coups au hasard (les trois Folie y étaient tombées). Quand un mot de pôle revient, que ce soit dans le lot ou dans un lot précédent, celui qui écrit le second lit d'abord les cartes du premier, pas seulement sa fiche. La leçon 4 vaut aussi entre lots : ANT161 rejouait ANT045.
3. **Le +7 ne se peint pas.** Au +7, pas de couple de pigments ni de teintures nommés (vermillon, cinabre, malachite, lapis, céruse ; garance, indigo, guède, rocou), sauf quand la couleur est la matière même de la zone, et dans deux zones au plus par conteur et par lot. Au −7, plus de « sang-de-bœuf passé ». Le +7 se dit par un objet, une foule ou un geste.
4. **Les chutes des Ressources tournent aussi.** Au plus trois Ressources par conteur et par lot sur la même structure : le seigneur qui prélève et les petites gens qui rusent (A), ou le nom, puis le compte chiffré, puis « cette année, une anomalie » (D). La liste commune des gestes s'étend à l'**image** : deux Ressources ne partagent ni le geste (plumes ramassées sur une falaise) ni le plan visuel (trous fumants dans la glace).
5. **Une seule table de budget, dans le validateur commun.** Pour l'instant, A et B comptent « alliés » ×1,5 et C et D ×1 ; D compte « tous » ×2,5 pour l'hésitation, l'affaiblissement et la marque, les autres ×2,2. Proposition : « alliés » ×1,5 et « tous » ×2,2 partout, inscrits dans consignes-cartes.md et dans le script. Écrire `"cible":1` dès qu'une opération vise « cible ».
6. **La phrase d'ouverture de la forme ultime est obligatoire.** Elle dit en 3 à 6 mots le changement de nature (« Le roi sert à table. ») et compte dans les 250 caractères. Si la carte déborde, on resserre le reste (« alliés +15 de garde ») au lieu de la sacrifier. Même règle de rotation pour les récits en journal : deux journaux du même lot ne suivent pas la même numérotation de jours (ASS070 et DON021 suivaient tous deux 1, 3, 5, 9).

## Leçons du critique après le lot 3 (à appliquer dès le lot 4)

1. **L'enchaînement a son plafond.** `cartesJouees` et `troisCartes` sont la famille principale de deux pôles au plus par lot, et ne passent pas 3 cartes ailleurs. La carte en cours compte : écrire « si vous avez déjà joué une autre carte ce tour » ou « si c'est au moins votre troisième carte ».
2. **Le vol de vie et l'écho ont le même plafond que l'hésitation et le hasard**, deux pôles par lot. Toutes les autres familles (perce-garde, affaiblissement, marque, riposte, brûlure, garde du héros) sont famille principale (5 cartes ou plus) dans 2 pôles au plus par conteur et 6 au plus par lot. Avant d'écrire, les conteurs remplissent ensemble **une seule carte des familles du lot** (pôle → famille principale, famille d'appoint, crochet), et chacun y relit aussi ses propres pôles.
3. **Les crochets tournent aussi.** Une même condition (`blesse`, `seul`, `vol`, `pietine`, `cibleGarde`…) sur 5 cartes ou plus : 2 pôles au plus dans le lot, et 1 seul par conteur.
4. **Pas la même carte avec de plus gros chiffres.** Un pôle mêle au moins trois familles sur ses 7 cartes. Une hésitation de « tous » ne revient pas plus d'une carte sur deux : le moteur fait « s'habituer » un chef qui hésite deux tours de suite.
5. **Même biome et mêmes mots de pôle dans un lot** (DON002 et ASS159) : le second conteur change d'image (ni la même eau, ni les mêmes barques, ni la même altitude), pas seulement de cartes.
6. **La liste des nombres précis est commune aux quatre conteurs**, pour les récits, les `pal`, les noms et les ambiances. Les tics à surveiller sont l'instrument qui « répond » dans la bande +2..+5 (B, au plus deux fois), le récit qui finit sur un conseil à l'impératif (C, au plus deux fois) et la marque en appoint réflexe (A).
7. **Une seule table de budget, complétée** : exil = 3 points de prix, vol de vie = moitié des dégâts de la carte, `si` = 50 %. Le validateur commun la porte, et ses écarts au-delà de ±15 % sont corrigés avant la remise.
8. **Ressources** : la chute « le produit part vers… » (B) suit la même règle que les autres gabarits (3 au plus). Un même objet est un doublon même quand le geste diffère (tesselles d'or fabriquées, puis décollées).

## Leçons du critique après le lot 4 (à appliquer dès le lot 5)

1. **Un couple de mots de pôle sert deux fois au plus par lot**, et jamais deux fois chez le même conteur. LISTE.md le vérifie avant la distribution. Si un couple revient, le second conteur prend une autre famille principale sur **les deux** pôles, et le dit dans sa carte des familles.
2. **Relire les pôles du même couple dans les lots précédents**, pas seulement dans le lot : les reprises de A (Tempête, Rouille, Mémoire, Rêve) étaient connues et signalées, mais pas corrigées. Signaler ne suffit pas : on change avant de remettre.
3. **La récupération suit le moteur** : `recup` joue deux fois par tour au plus et saute les cartes qui récupèrent. Elle n'est jamais famille principale : 4 cartes au plus par pôle.
4. **Ne plus utiliser `defausseCommune`** : les communes ne sont plus dans le paquet, la condition est toujours fausse.
5. **Une carte sans cible joue contre le premier ennemi vivant.** Si l'effet ou la condition porte sur un ennemi précis (`elan`, `pietine`, `vol`, dégâts), on met `"cible":1` et on écrit « la cible ». « L'ennemi en tête » et « l'ennemi vole » sont interdits.
6. **Pas d'appoint réflexe** : une même famille d'appoint (le mana chez A au lot 4, la marque au lot 3) ne revient pas dans plus de 3 pôles d'un même conteur.
7. **Un pôle « tous les ennemis » ne frappe pas tous les ennemis sur plus de 3 cartes sur 7**, et une forme ne répète pas « X dégâts à la cible » sur toutes les cartes d'un pôle. Au moins trois familles par pôle, comme au lot 3.
8. **Ressources** : un produit tinctorial, un récipient (calebasse, épuisette) ou un premier mot de nom (« Claies ») ne revient pas deux fois dans le lot. La liste commune des objets s'ajoute à celle des nombres.

## Leçons du critique après le lot 5 (à appliquer dès le lot 6)

1. **Dégâts ciblés : 4 cartes au plus par pôle, 5 dans un Donjon**, `si` compris. Ils ne servent jamais de lest en fin de carte, et jamais 7 sur 7.
2. **L'écho n'est jamais sur plus de 4 cartes d'un pôle**, et au moins 2 cartes du pôle, sans écho, sont faites pour être doublées : le moteur ne double pas une carte qui porte un écho. Même règle pour toute famille que le moteur bloque sur elle-même.
3. **Une place au plafond se choisit, elle ne se prend pas.** Si la famille ne tient pas dans le moteur ou dans la zone, le pôle prend une vocation de son type (bêtes, gros coups, pioche) ou un crochet, pas la dernière place libre. Les deux pôles d'une zone n'ont jamais la même famille principale, pioche comprise.
4. **Prix à égalité, comptés au script** : même nombre de cartes à prix par pôle, à une carte près.
5. **Couples déjà joués : compter les cartes des lots précédents au script**, pas lire leurs notes. La Mort n'est plus l'affaiblissement, la Vérité n'est plus la marque, le Foyer n'est plus la brûlure.
6. **Une liste commune des prénoms et des institutions**, comme celle des nombres : aucun prénom deux fois dans un lot, et un mot d'institution (kurultai, conseil) dans une seule zone.
7. **Tics à surveiller** : la pioche de A en appoint dans 3 pôles au plus ; « au prix de… » chez B une fois ; une recette de récit de C pas deux fois mot pour mot ; chez D, un nombre précis dans 6 récits sur 12 au plus et le compte faux d'un une fois. Une recette d'un lot ne revient pas au lot suivant chez le même conteur.
8. **Formes du palier 7 : base de 45 à 55, sans tolérance**, et vol de vie compté sur les dégâts des `si` dans la table commune.

## Leçons du critique après le lot 6 (à appliquer dès le lot 7)

1. **Une carte des familles se ferme.** À une heure fixée, avant les cartes, le dernier inscrit sur une famille pleine change la sienne. Un pôle au-delà du plafond est repris par son auteur avant la remise, jamais « laissé au suivant ».
2. **Quatre cartes à prix au moins sur sept par pôle** (environ deux sur trois), comptées au script, en plus de l'égalité entre les pôles.
3. **Aucune vocation n'exempte du plafond d'appoint.** La pioche des Assemblées, comme les autres familles, est en appoint (3 ou 4 cartes) dans 3 pôles au plus par conteur.
4. **Un pôle sans famille principale a une colonne vertébrale** : un crochet sur 4 cartes ou plus, ou un prix que le pôle paie et dont il profite (`prixDefausse` et `defausseAPrix`, `prixPV` et `blesse`, `prixBete` et `bete`). Sinon, il prend une vocation de son type. Pas de mosaïque de quatre appoints.
5. **Les formes de récit entrent dans la liste commune**, comme les nombres et les prénoms. Chaque forme de document (liste d'interdits, inventaire, almanach, procès-verbal, lettre, règlement, relevé) sert une fois par lot. Le document cité ne dépasse pas 4 récits par conteur, et l'énumération (articles, quarts, lettres, jours) 2 récits dans le lot.
6. **Les noms se comparent par moitié.** La seconde partie d'un nom (« la Porte des Bannis », « la Citadelle des Ruches ») ne revient pas, même avec un autre lieu. Un préfixe de lieu (Kalten-, Prey) ne sert qu'une fois par lot.
7. **Tics à surveiller** : le « vous » de C dans 3 récits au plus ; une famille d'animaux (rapaces, singes, cervidés) dans 2 pôles du lot au plus ; un même geste de Ressource (gauler ou battre des branches au-dessus d'une toile) une fois par lot, toutes tables confondues.
8. **Table commune** : `ennemiSoin` n = 2 n, comme `ennemiGarde`.

## Leçons du lot 7 (pour le lot 8)

1. **Une vocation suit la règle des mots de pôle.** Un conteur ne reprend jamais sa propre vocation (invocations, gros coups) sur un mot qu'il a déjà joué. Entre conteurs, une seule reprise par mot, avec d'autres bêtes et un autre crochet.
2. **Trois pôles sans famille principale au plus par conteur.** La colonne est un prix que le pôle paie et dont il profite, ou un crochet que le pôle remplit lui-même. Un crochet d'intention ennemie (`seul`, `elan`, `vol`, `pietine`) ne fait pas une colonne à lui seul. Chaque couple prix-crochet (`prixPV` et `blesse`, défausse et `defausseAPrix`, `prixBete` et `bete`, `ennemiGarde` et `cibleGarde`) sert dans 2 pôles du lot au plus.
3. **Les places se répartissent avant d'écrire.** Avec 48 zones, les familles sont pleines. LISTE.md donne à chaque conteur ses places (trois familles à 2 pôles, une place rare), et le dernier inscrit n'hérite plus des restes.
4. **La liste commune porte l'intrigue, pas seulement la forme** : une ligne « qui fait quoi, et comment ça finit », la première et la dernière phrase de chaque récit. Un seul récit en dialogue par lot, une seule ouverture « X était petit quand ».
5. **Les familles d'animaux se comptent au script sur les noms d'invocation**, à la maille de la famille courante (rongeurs, mustélidés, félins, ours, équidés, gallinacés, lézards, rapaces…) : 2 pôles du lot au plus.
6. **Noms** : le mot principal de la seconde moitié (Plaine, Rempart, Garnison) ne revient pas dans le lot. Le premier mot d'une Ressource ne reprend pas un premier mot en jeu. Un mot traduit (Fortezza) compte comme le même mot.
7. **Ressources : l'objet se compare par catégorie** (l'eau, les galets, les poissons qui sèchent), pas seulement par geste.
8. **Validateur** : une condition rendue fausse ou toujours vraie par une opération qui la précède dans la même carte est une erreur : `hesite` puis `hesite` ou `hesiteAvant` ; `briseGarde` puis `cibleGarde` ; `hesite` puis `elan`, `vol` ou `pietine`.


## Leçons du critique après le lot 8 (à appliquer dès le lot 9)

1. **LISTE.md vérifie les vocations avant de répartir.** Pour chaque conteur, elle compte au script les mots qui peuvent encore porter une vocation (pas déjà joués en vocation par lui, pas déjà repris). S'il en manque, elle échange une place avec un autre conteur au lieu de laisser une colonne de trop.
2. **La place d'écho se tient à 4 cartes** (le plafond du moteur), et elle compte comme famille principale. Jamais 5, même sous un `si`.
3. **Une colonne est un couple qui se remplit lui-même**, avec un prix (PV et `blesse`, défausse et `defausseAPrix`, bête et `bete`, garde ennemie et `cibleGarde`) ou sans prix (garde et `garde`, brûlure et `brule`, marque et `vulnerable`, hésitation et `hesite`). Chaque couple sert dans 2 pôles du lot au plus. Un prix qui ne nourrit pas la condition (PV et `pietine`) n'en est pas un, mais le même assemblage ne revient pas dans plus de 2 pôles d'un conteur.
4. **Plafonds de valeur, en plus du budget** : riposte 8 au plus par carte ; dégâts ciblés 20 au plus hors Donjon aux paliers 1 à 6. On ne répète pas une opération dans une carte pour passer un plafond (deux « +2 mana »).
5. **Une reprise de mot prend un autre crochet que le pôle d'origine**, quel que soit le type de zone : une famille principale de dégâts ciblés compte comme des gros coups.
6. **Noms** : la première moitié (le nom de lieu) se compare aussi à noms-pris.txt, et le mot traduit compte, y compris chez le même conteur (Scuola et École).
7. **Chutes** : « X dit que », ou le témoin dont on rapporte la parole, compte comme une tournure de fin, deux fois au plus par conteur et par lot. Chez C, l'ironie de l'effet inverse ne fait pas plus de 6 récits sur 12.
8. **La carte des familles s'écrit avant les cartes, et le dernier inscrit relit les avertissements des autres** (bêtes, couples, places) avant de remettre.

## Leçons du critique après le lot 9 (à appliquer dès le lot 10)

1. **Les vocations se comptent par mot et par type, avec trois emplois.** Les gros coups ne comptent que depuis le lot 5 (ou déclarés). Un même type sert trois fois par mot au plus dans le jeu, jamais deux fois chez le même conteur. Chaque emploi prend un crochet, un prix et une famille de bêtes nouveaux pour ce mot, et un mot ne porte qu'une vocation par lot. La pioche des Assemblées suit cette règle. LISTE.md fait ce compte au script **avant** de répartir. S'il manque une vocation à un conteur, elle lui réserve une 4e colonne, jamais une 5e.
2. **Crochets d'intention ennemie** (`vol`, `elan`, `pietine`, `seul`, `soinEnnemi`) : chacun est le crochet de 8 pôles du lot au plus, 2 par conteur. Un même assemblage prix et crochet d'intention sert dans 3 pôles du lot au plus.
3. **Deux sortes de prix par pôle** au moins, la seconde sur 2 cartes. Un pôle ne paie pas le même prix sur toutes ses cartes.
4. **Les plafonds valent pour la carte entière, `si` et réveil compris** : riposte 8, mana 2, dégâts ciblés 20 (hors Donjon, paliers 1 à 6).
5. **L'écho s'écrit au premier niveau, jamais sous `si`** : le moteur ne voit pas un écho caché et laisse doubler la carte qui le porte.
6. **Même couple de mots, autre image au ±7** : deux zones du même couple dans un lot ne finissent pas sur la même métamorphose (« tout devient verre ») et ne partagent pas le mot de matière du nom (Vitres, Verre).
7. **La liste commune nomme la forme réelle du récit et son geste.** Un ostracon, une tablette ou un billet adressés à quelqu'un sont des lettres. Une stèle et une inscription sont un même document. Un geste d'intrigue (monter chercher la glace, souffler la lampe) sert une fois par lot.
8. **Familles d'animaux : une table commune, à la maille de la famille courante, lue par le script.** On n'identifie pas la famille au nom : la viscache et le cuy sont des rongeurs, le termite n'est pas un coléoptère.

## Leçons du critique après le lot 10 (à appliquer dès le lot 11)

1. **Cinq cartes de dégâts ciblés font des gros coups, même dans un Donjon et même non déclarés.** Un pôle de Donjon qui a une autre famille principale s'arrête à 4. Le compte des vocations lit aussi les cartes des familles des lots anciens : un emploi déclaré compte, même avant le lot 5.
2. **Tout crochet, pas seulement d'intention ennemie, sert dans 3 pôles au plus par conteur.** Un pôle qui lit un crochet sur 3 cartes et le nourrit sur 2 compte dans son couple, avec le même plafond de 2 pôles par lot.
3. **L'enchaînement (`cartesJouees`, `troisCartes`) est une famille** : en appoint dans 3 pôles au plus par conteur, comme les autres.
4. **Une reprise de vocation change de bête principale** : la famille qui porte le plus de cartes ne doit avoir servi dans aucun emploi précédent du mot, pas même en appoint.
5. **La table commune des bêtes donne la famille scientifique de chaque nom avant l'écriture** : le saïga, le bouquetin et le buffle sont trois bovidés ; le frelon n'est pas un apidé ; la chouette n'est pas un rapace diurne.
6. **Une forme ou un geste signalé en double se change avant la remise, par le second inscrit**, et sa chute avec lui. On ne le laisse pas au critique.
7. **Noms : le complément de la seconde moitié (« des Cendres ») ne revient pas non plus dans le lot**, et un conteur ne répète jamais son propre mot principal (« l'Eau » deux fois).

## Leçons du critique après le lot 11 (à appliquer dès le lot 12)

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

## Leçons du critique après le lot 12 (à appliquer dès le lot 13)

1. **Les places se comptent avant de se répartir.** LISTE.md calcule au script, pour chaque conteur, le couplage maximal de ses pôles avec les familles libres sur ses mots. Elle ne donne que ces places, plus les reprises permises. Ce qui manque devient une vocation ou une colonne (4 au plus), ou une place perdue, déclarée avant les cartes.
2. **Reprises : 3 au plus par conteur**, chacune un 2e emploi par un autre conteur. Le crochet et le prix principal sont neufs pour le mot entier, pas seulement contre l'origine. On ne reprend jamais son propre crochet sur un mot.
3. **Même couple dans le lot : on compare le geste du ±7, pas ses objets.** La table qui s'étend, le chant à l'unisson ou la ville sous l'eau font une même métamorphose, quel que soit le décor. Le second inscrit change avant la remise.
4. **Noms : le mot principal et le mot d'institution se comparent entre conteurs avant la remise, et à noms-pris.txt, pluriel compris.** Ce lot avait deux « Attente », et trois institutions déjà en jeu (Yoriai, Darbar, Popol Na).
5. **La pioche d'Assemblée compte dans le plafond de la famille pioche** (6 pôles du lot), vocation comprise. Une Assemblée garde 2 cartes de Loi au moins par pôle.
6. **Bêtes : 40 PV au plus aux paliers 1 à 6, 60 au palier 7.** Le budget compte les PV pour moitié et ne voit pas le mur.
7. **Chutes : une recette de conteur, une fois par lot.** C'est le cas de la promotion qui éloigne chez A, et de « aujourd'hui » dans la dernière phrase chez C (trois fois au lot).

## Bilan du critique après le lot 13 (fin de la série)

**Ce qui a marché**
- **La voix des quatre conteurs a tenu treize lots.** A a gardé ses chutes sèches, B ses objets, C son ironie, D son étrangeté. Les meilleurs récits du dernier lot valent ceux du premier, et aucune zone n'est sous 70 aux lots 12 et 13.
- **Le validateur commun a rendu les règles mécaniques sûres.** Aucune erreur de moteur aux lots 12 et 13 :
  - plus aucune condition inconnue, rendue vraie ou rendue fausse par la carte ;
  - plus aucun écho caché, plus aucun plafond franchi par un réveil.
- **Le comptage des places avant l'écriture** (leçon 1 du lot 12) a fermé la série proprement. Il n'y a eu ni reprise de trop ni dernier inscrit sacrifié, et les places perdues ont été annoncées avant les cartes.
- **Le registre grand public est acquis.** Les conteurs suggèrent d'eux-mêmes au lieu de montrer, et il n'y avait rien à réécrire au lot 13.

**Ce qui reste fragile**
- **La variété s'use plus vite que les règles.** Au dernier lot, les couples de colonne, les prix principaux et les familles libres de plusieurs mots étaient épuisés. Les règles ont tenu, mais en acceptant des 3es pôles et des prix déjà payés.
- **Les doublons d'image et d'intrigue entre conteurs** restent le défaut le plus constant : ±7 au même geste, même registre, même inspecteur. Le second inscrit compare ses familles et ses objets, rarement le geste de son intrigue.
- **Les noms** se heurtent maintenant surtout aux plus de 900 noms déjà en jeu, par préfixe ou à une lettre près. Le contrôle doit rester au script.

**À surveiller en jeu**
- **Les crochets d'état** (`vulnerable`, `bete`, `brule`, ce dernier nourri par les pièges des Donjons) : vérifier en simulation que les colonnes qui les lisent ne jouent pas leur bonus à chaque carte.
- **`defausseAPrix` sans défausse dans le pôle** (B Pierre, Lumière, Tempête, et 4 pôles au lot 12) : il ne vaut que dans un paquet qui paie en défausse. À regarder dans les paquets réels.
- **Les formes ultimes de D à fort dégât ciblé** (jusqu'à 78 avec le réveil) contre le boss du niveau 5 : c'est voulu, mais c'est le sommet du jeu.
- **Les bêtes de 40 PV aux paliers 5 et 6**, nombreuses au lot 13 : le mur que le budget ne voit pas. Il est plafonné, mais il est à surveiller avec les Antres au palier 6.
