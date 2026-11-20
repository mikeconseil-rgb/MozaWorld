# Production des zones en série : consignes des conteurs (lots)

But : faire entrer beaucoup de nouvelles zones dans le jeu web, **sans zone au rabais**. Chaque zone est unique : son nom, son histoire, ses deux pôles, ses 14 cartes. Le critique relit chaque lot avant l'intégration.

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
