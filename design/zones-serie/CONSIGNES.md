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
