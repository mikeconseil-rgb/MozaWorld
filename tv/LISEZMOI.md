# MozaWorld, version jouable (page web, Edge sur Xbox Series S)

> **État au 17 novembre 2026 (soir).** La version Google TV / Bravia est arrêtée : on ne livre plus d'APK. Le jeu se joue sur la page web (GitHub Pages, qui suit la branche main), dans Edge sur Xbox Series S, à la manette. Le dossier s'appelle encore `tv/` pour des raisons d'historique.
>
> Ce fichier est un journal de versions, **pas dans l'ordre** : chaque section décrit le jeu à sa date. Sont remplacés par des sections plus récentes : le Marché (Givrecloche est une Assemblée), les 8 puis 10 cartes de départ (5 communes toutes différentes), les 2 mana par tour (capacité de dépense de 1, 2, 3… et réserves par type), les Gerbes (les Ressources ne donnent plus de carte), tout ce qui parle d'APK. Les règles en vigueur du combat sont dans `design/cartes-2.2/regles-avancees.md`.

## Gameplay du monde : les hordes du sauvage (18-19 nov.)

Fichier `src/hordes.js`. Chaque zone a un pôle envahisseur (−7, +7 ou les deux), affiché dans la fiche de zone et à la Pierre d'éveil. Une zone au palier 7 de ce pôle lève une horde après 5 cycles ; la horde est annoncée (message, flèche rouge sur la minicarte, ligne « Menaces » du bandeau) et arrive 3 cycles plus tard sur une zone voisine (2 tuiles au plus) plus faible de 2 paliers, vos zones d'abord. Pour la briser : allez à la Pierre d'éveil de la zone visée, OK, « Affronter l'avant-garde ». Sinon, à l'arrivée, sa force affronte la défense de la zone (niveau, Citadelle à 3 tuiles, rempart, pièges du Donjon, lois) ; si elle passe, la zone recule d'un palier (une Ressource perd aussi ses routes) et une zone à vous tombée à 0 redevient sauvage. Au palier 7 de l'autre pôle, pas de horde et une carte de palier 7 plus forte. Les zones sauvages à ±6 peuvent gronder et monter à ±7. L'assaut contre le Donjon d'origine (economie.js) ne change pas.

Tests : `MZ.horde(source?, cible?)` lève une horde tout de suite (sans argument, il choisit ou crée une source à ±7), `MZ.hordeArrive(source?)` la résout. Script : `node tv/tools/test-hordes.js`.

## Historique : édition salon (Sony Bravia / Google TV), 15 novembre

Version légère de la démo « grandes zones », pensée pour une télé vue du canapé et pilotée à la télécommande.

## Le but

Se promener de zone en zone dans la mosaïque Girih. Chaque zone a une **Pierre d'éveil**. Devant elle, OK ouvre l'éveil :
on choisit le pôle (▲ vers +, ▼ vers −), on réussit l'épreuve de la zone, et la zone fait un bond d'un palier avec une **mue**
(la caméra tourne au-dessus de la zone pendant qu'elle se transforme). Chaque réussite donne une **carte de pouvoir**.

| Zone | Type | Épreuve | Commandes |
|---|---|---|---|
| Berestograd | Citadelle | La Garde des portes : repousser les pillards au passage du cercle d'or | flèches |
| Puits des Neuf Édits | Donjon | Le Grand Donjon : labyrinthe dans le noir, gardiens, lave qui monte | flèches |
| Chinampas de Tezcamixtli | Ressource | La Récolte : cueillir des gerbes lumineuses dans le monde, en temps limité | ▲ ◀ ▶, OK saute |
| Exarchat des Lucioles | Antre | La Chasse aux lucioles : frapper quand la reine traverse l'affût | OK |
| Foire de Givrecloche | Marché | Le Chantier : rejouer un plan de flèches de plus en plus long | flèches |

## Version 1.2 : combat au tour par tour et premiers pouvoirs

Avant d'éveiller une zone, il faut l'**activer** : à sa Pierre d'éveil, on bat ses gardiens au tour par tour. La zone devient à vous et donne son pouvoir :

| Zone | Pouvoir gagné à l'activation |
|---|---|
| Ressource (Tezcamixtli) | **Source de mana** : +1 mana par tour ; 2 mana au niveau 2 ; 2 mana et une carte de plus en main au niveau 3. Une Ressource ne monte que jusqu'à ±3. |
| Antre (Lucioles) | **Bête alliée** : la carte d'appel fait venir une créature qui frappe à chaque tour et encaisse les coups à la place du héros (3 bêtes au plus). |
| Donjon (Neuf Édits) | Carte d'attaque forte. |
| Citadelle (Berestograd) | +6 PV et une carte de garde pour tous les alliés. |
| Marché (Givrecloche) | Carte gratuite qui fait piocher (et donne 1 mana au niveau 2). |

Combat : le héros commence avec 30 PV, 2 mana par tour et 8 cartes (Coup de bâton, Pas de côté, Souffle court). Chaque tour : le mana se remplit, on pioche jusqu'à 5 cartes,
on joue ses cartes (◀ ▶ choisir, OK jouer, ▼ fin du tour), puis les bêtes frappent et chaque monstre fait l'action annoncée au-dessus de sa tête
(attaque, garde, frappe tout le monde, prend son élan puis frappe fort, soigne). Retour : pause, on peut fuir sans blessure.
Les cartes de zone se renforcent quand la zone s'éveille et leur effet est **doublé dans la zone qu'elles contrent** (même cycle que les épreuves).
En marchant, des créatures surgissent parfois (réglable dans le menu : fréquentes, normales, rares, aucune) ; une victoire permet d'ajouter une carte au paquet de combat.
Une défaite = une blessure ; à la mort, le paquet de combat revient aux cartes de départ et les zones sont à réactiver.
Pendant un combat la 3D n'est plus dessinée, pour ménager la télé.

## Version 1.7 : mana par type et Donjon à aménager

Premier test décidé le 16 novembre : un combat payé avec le mana des Ressources, puis un Donjon à aménager (`src/economie.js`).

- **Six réserves de mana, une par type** (Feu, Glace, Eau, Sève, Pierre, Vent ; total affiché en haut à droite). Départ : 3 Feu, 3 Glace, 3 Eau, 3 Vent. Chaque zone a son type : Berestograd et Givrecloche Glace, Neuf Édits Feu, Tezcamixtli Vent, Lucioles Eau. Un **cycle** dure 60 s ; à chaque cycle la Ressource activée ajoute 1 Vent, puis 2 au niveau 2. Les vaincus lâchent le mana de leur zone (1 en rencontre, 2 à l'activation). La Ressource va de 0 à 3, sans pôle.
- **Combat payé avec les réserves** (la mise est retirée depuis le 17 novembre) : une carte de zone se paie avec le mana de sa zone, une carte commune avec n'importe quel type. La capacité de dépense monte de 1 par tour (1, 2, 3…), tous types confondus. Les boosts sont rares : seule la carte de Givrecloche à 5 ou plus donne +1 de capacité pour le tour.
- **Paquet de départ** : les mêmes 5 cartes communes, toutes différentes, pour tout le monde (Coup de bâton, Pas de côté, Pieu planté, Jet de pierre, Torche), assez pour une zone de niveau 0, peut-être 1. Paquet de 40 cartes au plus.
- **Terrain (17 nov.)** : la garde du héros est une unité, la Garde, qui prend les coups et s'effrite de moitié à chaque tour ; bloqueurs et bêtes tiennent le terrain (3 places) ; les ennemis volent par-dessus, enfoncent au bélier ou piétinent. Voir design/cartes-2.2/regles-avancees.md, section 1 bis.
- **Donjon des Neuf Édits à aménager** : une fois activé, sa Pierre propose « Aménager le Donjon ». Quatre salles, un piège par salle, payé avec la réserve : chaque piège a son type de mana, pour la pose et l'entretien : Herse de givre (2 Glace, force 3), Glyphe de brume (2 Vent, force 2, le piège suivant compte double), Fosse de lave (3 Feu, force 5), Gardien des marais (4 Eau, force 6).
- **Assauts** : tous les 3 cycles, le monde sauvage attaque le Donjon. La horde (force 6 + 3 par palier du Donjon + 2 par assaut déjà repoussé + hasard) traverse les salles dans l'ordre. Repoussée : +2 Feu. Passée : une salle est saccagée et le Donjon recule d'un palier. « Provoquer un assaut maintenant » sert à tester vite.
- **Trois rythmes d'entretien à comparer** (menu, ou écran du Donjon) : à chaque cycle (1 mana par piège, sinon il dort), à l'assaut (2 mana par piège quand l'assaut arrive, sinon il ne se déclenche pas), usure (pas d'entretien, chaque piège sert 3 assauts puis casse).

## Version 1.8 : interface du combat et déplacement (17 novembre)

Retour de l'utilisateur après essai sur la Bravia : l'écran de combat et les cartes étaient « vraiment moches », et le déplacement trop lent et « plate » à la télécommande.

- **Cartes illustrées** (`src/habillage.js`) : vrai cadre de carte, pastille de coût à la couleur du mana, une illustration par sorte de carte (les trois communes partagent chacune la leur, comme convenu : « un type commun au début, c'est ok »), nom, ligne de type (Attaque, Défense, Technique, Boost, Invocation · type de mana) et texte.
- **Écran de combat** : un décor peint par zone (forêt et palissade de Berestograd, voûtes et lave des Neuf Édits, canaux de Tezcamixtli, grotte aux lucioles, foire enneigée de Givrecloche), le héros et ses bêtes à gauche, les monstres à droite, chaque créature avec son propre portrait, une plaque de nom et de vie, et son intention en médaillon. Le journal passe sous le titre ; « Fin du tour » devient un sceau rond ; le mana du tour en gemmes.
- Tout est dessiné en vecteurs (SVG) dans le code : gratuit, rien à télécharger, net sur une grande télé. La logique du combat (`combat.js`) n'est pas touchée : `habillage.js` redéfinit seulement `portrait()`, `carteHTML()` et `uniteEl()`.
- **Déplacement plus rapide** : marche 14 au lieu de 8,5, course 27 au lieu de 17, et la course part au bout de 0,35 s au lieu de 1,1 s ; le virage accélère quand on tient ◀ ou ▶. Les rencontres gardent la même fréquence dans le temps.
- **Marche automatique** : ▲ deux fois de suite, le héros court tout seul ; ◀ ▶ pour diriger, ▼ ou OK pour s'arrêter.
- APK : `MozaWorld-TV-1.8-interface.apk`, versionCode 10, s'installe par-dessus la 1.7.

## Version 1.9 : manette Xbox (17 novembre)

L'utilisateur a branché une manette Xbox sur la Bravia. La WebView d'Android ne voit pas les sticks : l'appli (`MainActivity.java`) relaie elle-même les axes et les boutons à la page (`window.MZpad`) ; sur PC, `src/manette.js` lit l'API Gamepad du navigateur. La télécommande et le clavier marchent toujours, et l'aide à l'écran affiche les boutons de la manette dès qu'on s'en sert.

| Où | Commandes à la manette |
|---|---|
| Monde | stick gauche : marcher dans la direction poussée (vitesse selon l'inclinaison ; à fond plus d'une demi-seconde, ou gâchette RT, ou clic du stick : courir) · stick droit : caméra · A : sauter, agir devant une Pierre · X : marche automatique · Y : paquet de combat · Vue : voyager · B ou Menu : menu |
| Combat | stick, croix ou LB / RB : choisir la carte ou la cible · A : jouer · X : fin du tour · B : annuler la cible ou pause |
| Menus | stick ou croix (maintenu, ça défile) · A : valider · B : retour |
| Épreuves | stick ou croix, A pour OK ; la Récolte se joue au stick comme le monde |

Mana confirmé par l'utilisateur le même jour (déjà en place depuis la 1.7) : la limite de dépense par tour est commune à tous les types, et les cartes communes se paient avec n'importe quel type.
APK : `MozaWorld-TV-1.9-manette.apk`, versionCode 11, s'installe par-dessus la 1.8.

## Version 2.3 : les routes forgent les pouvoirs (17 novembre)

- Une Ressource au **niveau 3** propose trois **atouts** de son mana (menu « Choisir l'atout » de sa Pierre d'éveil) ; le choix tient lieu de pôle.
- Dès le **niveau 2**, le menu « Routes » relie la Ressource à une tuile voisine (qui partage un côté). Au niveau 3, l'atout se greffe sur **toutes les cartes de la tuile reliée** ; le texte de la carte l'affiche.
- Une tuile reçoit au plus autant de routes qu'elle a de côtés. Atouts de mana différents : cumulés ; même mana : un seul compte. Si la Ressource redescend sous le niveau 2, ses routes sont coupées.
- Minicarte : route en pointillés (atout pas encore greffé) ou pleine (atout actif).
- 18 atouts (3 par mana), codés dans `src/routes.js` : Tison, Soufflet, Cendre chaude, Givre aux tempes, Gel lent, Conserve, Marée, Source, Reflux, Bouture, Sève lente, Greffe, Assise, Poids, Remploi, Rafale, Vent porteur, Girouette.

APK : `MozaWorld-TV-2.3-routes.apk`, versionCode 16.

## Version 2.2 : les cartes des conteurs (17 novembre)

Demandes de l'utilisateur : des cartes différentes selon le pôle, liées au background de la zone ; une carte différente à chaque palier ; au palier 7, une carte qui change de nature et permet des combos forts ; une carte utilitaire pour chaque secret.

- **229 cartes** écrites par les quatre conteurs (A, B, C, D), relues par le critique et le game design : 7 cartes par pôle pour les 12 zones à pôles (paliers 1 à 6, puis la forme du palier 7), 3 Gerbes par Ressource, 31 cartes de secrets, plus les 10 communes de départ.
- **Une carte par palier** : chaque palier réussi ajoute au paquet la carte de ce palier (clé `ZONE#-3`, `ZONE#+5`, `RES079#r2`). Si la zone redescend sous ce palier ou change de pôle, la carte dort hors du paquet de combat et revient quand la zone reprend ce palier.
- **Résonances** (Braise, Givre, Sang, Racine, Sceau, Abîme) : chaque forme du palier 7 en pose une et en réveille une autre ; elles s'affichent en haut du combat.
- **Nouvelles mécaniques** : brûlure, marque, riposte, vol de vie, écho, récupération, exil, conditions, prix.
- **Garde-fous** : le mana gagné par une carte disparaît à la fin du combat ; l'écho ne double jamais un réveil ; une récupération ne reprend pas une carte qui récupère (2 par tour au plus) ; une résonance posée par un secret ne réveille qu'à moitié.
- **Secrets** : trouver un secret ajoute sa carte utilitaire au paquet de combat.
- Code : `src/cartes.js` (moteur des opérations) et `src/cartes-donnees.js` (généré par `design/cartes-2.2/outils/assembler.py` à partir des fichiers des conteurs). Règles : `design/cartes-2.2/regles-avancees.md`. Méthode pour les nouvelles tuiles : `design/cartes-2.2/consignes-cartes.md`.

APK : `MozaWorld-TV-2.2-cartes.apk`, versionCode 15, s'installe par-dessus la 2.1 (les anciennes copies de cartes de zone restent jouables et suivent le niveau actuel de la zone).

## Version 2.8 (web) : décors par pôle partout, exploration épurée, monde animé (18 novembre)

Choix de l'utilisateur après l'essai de la 2.6 (« C'est fluide », puis « Tout oui » sur les idées 1, 2 et 3 de la suite des graphismes).

- **Décors par pôle sur les zones d'origine** (`src/poles-decor.js`) : Berestograd, les Neuf Édits, les Lucioles et Givrecloche reçoivent les mêmes familles d'objets que les nouvelles tuiles (arbres morts, éclats, flèches noires vers −7 ; bannières, cristaux, lanternes, fleurs, tours Girih vers +7), seulement dans leur ceinture : le cœur écrit à la main ne change pas. Tezcamixtli n'en a pas (une Ressource n'a pas de pôle). Les familles vides ne sont plus dessinées du tout.
- **Exploration épurée** (`src/epure.js`) : par défaut, la fiche de la zone (en haut à gauche) n'apparaît que 9 secondes en entrant dans une zone, l'aide des commandes s'efface après la première minute, la minicarte rapetisse ; le nom de la zone entre au centre avec un effet de mise au point. **RB** à la manette (ou **Tab** au clavier) bascule entre l'interface épurée et l'interface complète ; le choix est retenu.
- **Monde animé** (`src/monde-anime.js`) : le vent fait ployer arbres, roseaux, bannières et poteaux (dans le shader), plus fort vers −7 ; des braises montent vers −7 et des lucioles de la couleur du pôle dérivent vers +7 ; cinq ou six créatures errent à 20 à 70 m du héros (bêtes à quatre pattes qui broutent, insectes ailés dans les Antres, feux follets dans les Donjons) et s'enfuient si on approche. Rien de tout cela en qualité « Fluide ».
- Mesure (rendu logiciel) contre la 2.6 : triangles quasi identiques (+0 à +4 %), appels de dessin +5 à +21 % (surtout les créatures).
## Version 2.7 (web) : les choix moraux de la Taïga de Kobor, soir 1 (18 novembre)

- **La scène remplace le menu des paliers** (`src/scenarios.js`) : à la Pierre de la Taïga de Kobor, une scène de l'histoire du registre (le voïévode Mstisla, l'inspecteur Zakhar, la veuve Oustina) et deux réponses. L'une enfonce la zone d'un palier dans son pôle (Mensonge ou Vérité), l'autre la ramène d'un palier. 15 scènes, de −7 à +7.
- **Le prix** est payé au choix : mana, PV retirés au prochain combat, carte perdue ou exilée. Un prix caché s'affiche « ? ».
- **Parole donnée** : après un échec, seul « Tenir parole » reste ; on ne rechoisit pas.
- **Traces** (`S.memoire`) gardées après la mort ; certaines changent déjà le texte des scènes suivantes. Se raviser ne donne pas de carte.
- Les autres zones ne changent pas. Prochains soirs : l'épreuve habillée par la scène, puis les effets des traces.

## Version 2.6 (web) : combat animé, décors par pôle, zones plus grandes et lieux à découvrir (18 novembre)

Lot du soir tiré de l'évaluation graphique du 17 novembre (idées 6, 1 et 8).

- **Combat animé** (`src/anim-combat.js`) : la carte jouée quitte la main et vole vers sa cible avant que l'effet parte ; l'attaquant prend son élan et fonce ; la cible encaisse avec un éclair, un trait de coup et des étincelles ; l'écran tremble sur les coups de 8 ou plus ; soins et gardes ont leur lueur ; les unités respirent ; les vaincus se dissolvent ; le décor de la zone dérive lentement. Seulement du CSS et l'API Web Animations : aucune règle changée.
- **Décors propres à chaque pôle** (`src/poles-decor.js`, nouvelles tuiles) : vers −7, arbres morts, colonnes brisées, éclats d'obsidienne fendus de la couleur du pôle et trois flèches noires effondrées ; vers +7, bannières, cristaux lumineux, lanternes, grandes fleurs et trois tours Girih dorées. Chaque objet a son seuil, donc chaque palier en ajoute. La végétation du biome se penche et dépérit vers −7, grandit vers +7. Les objets éteints ne sont pas dessinés.
- **Zones agrandies d'un tiers** (`SC` 3 → 4 dans `src/core.js`, arête 400 m) ; maille du terrain 3,6 → 4,2 m et densité de végétation plafonnée pour rester fluide. Mesure (rendu logiciel, triangles par image avec les ombres) : Berestograd −31 %, Taïga de Kobor environ +7 %, Canyon de Fjorhel environ +22 % par rapport à la 2.5.
- **Trois lieux par nouvelle tuile** (`src/lieux.js`) : un camp abandonné, un cercle de pierres levées et un belvédère, dans trois directions loin de la Pierre. Un rai de lumière les signale de loin tant que leur secret n'est pas trouvé. 48 secrets de plus (79 au total) ; ils sont ajoutés après les anciens, donc les sauvegardes gardent leurs secrets trouvés. Ces nouveaux secrets ne donnent pas encore de carte.

## Version 2.4 (web, Edge sur Xbox Series S) : héros animé, zones +50 %, minicarte, bandeau, sauvegardes (17 novembre)

Le 17 novembre, l'utilisateur a arrêté la version Google TV : il joue seulement à la version web, dans Edge sur la Series S. On ne livre plus d'APK.
- **Héros** (`src/heros.js`) : un voyageur articulé, avec chapeau pointu, écharpe, tunique, cape et bâton à lanterne. Il est animé à la main : marche, course penchée, saut, atterrissage, respiration au repos, cape et lanterne qui bougent. **Double saut** : appuyer une seconde fois en l'air fait une culbute.
- **Zones +50 %** : SC passe de 2 à 3 (arête de 300 m). Les cœurs des zones écrits à la main gardent leur taille, et les ceintures et les nouvelles tuiles s'agrandissent. La maille du terrain passe de 3 à 3,6 m. La marche passe à 16, la course à 31.
- **Minicarte** : vos zones sont pleines et bordées d'or, avec un fanion ; les zones sauvages sont sombres. Chaque zone a le symbole de son type. Les Pierres de vos zones où une épreuve est possible clignotent, et une légende est ajoutée.
- **Bandeau** (`src/bandeau.js`) : en haut à droite, le mana par type (gris ∞), la production par cycle, et les domaines possédés par type (Citadelles, Donjons, Ressources, Antres, Assemblées).
- **Sauvegardes** (`src/sauvegardes.js`) : dans le menu, Sauvegarder (20 emplacements), Charger une partie, et Nouvelle partie.
- **Menus** : la liste défile pour garder le choix visible, et le cadre est limité à 84 % de la hauteur (marge de sécurité des télés).

## Version 2.1-grimoire : le Grimoire des cartes (17 novembre)

Ce que l'utilisateur a demandé : « ajoute un menu dans le jeu pour y mettre le grimoire ». Le menu pause a maintenant une entrée **Grimoire des cartes** (`src/grimoire.js`). On y trouve les règles des cartes, les cartes communes, puis une page par zone. Chaque page dit où gagner la carte (la Pierre d'éveil et son épreuve), le mana, le niveau actuel de la zone et le nombre de copies dans le paquet. Elle montre aussi la carte de chaque pôle au palier actuel, puis aux paliers 4 et 7. Tout est lu dans les cartes elles-mêmes, au niveau voulu, donc le Grimoire suit les cartes 2.2 sans retouche. Les longues listes (Voyager, Grimoire) défilent maintenant à la manette.

APK : `MozaWorld-TV-2.1-grimoire.apk`, versionCode 14.

## Version 2.1 : une carte par pôle, un effet par tuile (17 novembre)

Ce que l'utilisateur a demandé : « les cartes doivent être différentes selon le pôle choisi », liées à l'histoire de la zone et du pôle, et chaque tuile doit avoir un effet unique.
- Chaque zone qui a des pôles a maintenant deux cartes qui ne se ressemblent pas, une par pôle (`POLES` dans `src/zonesplus.js`). Par exemple, l'Oubli de Berestograd efface la garde des ennemis, et sa Mémoire dresse un rempart. La Tyrannie des Neuf Édits frappe fort mais blesse le héros, et leur Liberté frappe tous les ennemis. La version jouée dépend du côté où se trouve la zone, et sa force dépend de l'écart à zéro.
- Les Ressources n'ont pas de pôle, mais chacune a sa propre gerbe, tirée de son biome (`GERBES`).
- Nouveau comportement des ennemis : un ennemi peut « hésiter », c'est-à-dire perdre son action du tour.
- La liste complète, avec le lieu d'acquisition et chaque palier de −7 à +7, est dans `/mnt/project-files/demo-tv/v2.0/cartes-2.1.md`.

APK : `MozaWorld-TV-2.1.apk`, versionCode 13.

## Version 2.0 : fluidité, monuments, mana gris, carte agrandie (17 novembre)

Retour de test de la 1.9 : déplacements laborieux, « ça rame », marches dures à monter, activation peu claire, manque de mana.

- **Fluidité** (`src/fluidite.js`) : la scène envoyait ~630 000 triangles à chaque image, car les objets en série n'étaient jamais écartés. Chaque série a maintenant une sphère qui couvre tous ses exemplaires, et le terrain est découpé en carreaux : on ne dessine que ce qui est devant la caméra et pas perdu dans la brume.
- **Marches** : on franchit sans sauter tout ce qui fait moins de 1,35 m. Le héros et la caméra sont 30 % plus petits : les décors paraissent 30 % plus grands, sans toucher aux niveaux.
- **Monuments** : chaque Pierre d'éveil devient un monument selon le type (trône pour la Citadelle, obélisque gravé pour le Donjon, idole à rayons pour la Ressource, carcasse géante pour l'Antre, crieur pour l'Assemblée). La zone d'activation passe de 7 à 11 m.
- **Mana gris** : base infinie. Les cartes communes se paient en gris ; une carte de zone sans assez de mana de son type se joue quand même en gris, avec un effet affaibli (−25 %, pas de contre-pouvoir), signalé par un ruban gris sur la carte. Les réserves par type restent.
- **Cartes** : ni les combats ni l'activation ne donnent de carte. Chaque montée de niveau d'une zone (mue) donne sa carte de combat, en plus de la carte de pouvoir.
- **Carte agrandie** (`src/carte.js`, `src/zonesplus.js`, générateur dans `tools/carte/`) : 16 nouvelles tuiles Girih exactes (graine 12) autour des cinq zones, 21 en tout, dont 8 Ressources (tous les types de mana). Chaque tuile tire une sous-zone de la liste des 986 : nom, biome, mana, culture, pôles. Relief, couleurs, ciel et végétation viennent du biome ; le pôle négatif assombrit et crevasse, le pôle positif soulève en gradins lumineux. Une tuile reprend l'épreuve, les gardiens et la carte de combat de son type, à son nom (une Ressource passe le Chantier, la Récolte restant propre à Tezcamixtli). Chaque Ressource activée produit son propre mana à chaque cycle.
- Prévu : de nouvelles tuiles chaque jour jusqu'à environ 50 ; l'interface qui relie à la mue les bonus des tuiles reliées par des routes viendra avec les routes, qui n'existent pas encore dans la version télé.

APK : `MozaWorld-TV-2.0.apk`, versionCode 12, s'installe par-dessus la 1.9 (la partie en cours est gardée, les nouvelles tuiles s'ajoutent au niveau 0).

## Suggestions du projet intégrées

- Une épreuve par type de zone, chaque réussite = **+1 palier** avec un gros changement visible (mue).
- **Pôle choisi librement**, zone par zone.
- Difficulté qui monte avec l'éloignement de zéro ; cartes **Mineure** (paliers 1 à 3), **Majeure** (4-5), **Ultime** (6-7).
- **Contre-pouvoirs** : la carte d'une zone facilite l'épreuve d'une autre (Donjon → Citadelle → Antre → Marché → Ressource → Donjon).
- **Repérage** : avant l'épreuve, la zone montre brièvement ses deux paliers voisins.
- **Délai** avant de refaire évoluer la même zone (40 s ici au lieu d'un jour).
- **Trois blessures avant la mort** ; à la mort on perd ses cartes, les zones gardent leur niveau et redeviennent sauvages,
  et l'**empreinte** rend plus facile la reprise de ses anciennes zones.
- Secrets dorés qui n'existent qu'à certains niveaux ; musique propre à chaque zone et qui change avec le niveau.

## Commandes

Télécommande : ▲ ▼ marcher (tenir ▲ pour courir), ◀ ▶ tourner, OK sauter ou agir, Retour : menu.
Manette : croix ou stick, A = OK, B = Retour. Au clavier (pour tester sur PC) : flèches ou W A S D, Entrée, Échap, M pour la musique.

La partie est sauvegardée dans le navigateur de la télé. Le menu propose aussi Voyager, Paquet de cartes, Musique, Qualité d'image.
Si l'image saccade, la qualité baisse toute seule ; on peut la changer dans le menu.

## Assemblage

`sh build.sh` assemble `src/` en `index.html` (une seule page, Three.js r128 chargé depuis cdnjs).

## Application Android TV (APK)

`android/build-apk.sh` construit `MozaWorld-TV.apk` sans Android Studio (Ubuntu : `apt install aapt apksigner dalvik-exchange android-sdk-platform-23 zipalign`).
L'appli est une fenêtre plein écran qui affiche le jeu embarqué : Three.js et les polices sont dans l'APK, rien n'est téléchargé sur la télé.
Elle apparaît dans le lanceur Google TV avec sa bannière ; Retour ouvre le menu du jeu, qui propose « Quitter le jeu ».
La clé de signature (`mozaworld.keystore`) n'est pas dans le dépôt ; elle est gardée dans le dossier du projet pour que les versions suivantes s'installent par-dessus.

## Styles de rendu par zone (essai, APK 1.2-styles)

Chaque grande zone peut avoir son propre style de dessin, appliqué dans la dernière passe d'image (`src/styles.js`).
La passe relit la profondeur de chaque pixel, retrouve le point du monde qu'il montre et la zone où il tombe :
le style bascule exactement à la frontière, même quand on regarde une zone depuis sa voisine.

- **Givrecloche** : noir et blanc, brouillard épais (seul ce qui est dans la zone compte). Côté Brume, nuit d'encre ; côté Clarté, brume blanche. Les lumières colorées gardent leur couleur.
- **Chinampas** : manga. Traits d'encre (contours tirés de la profondeur), aplats, trame de points dans les ombres. Côté Folie, encre lourde et trame dense ; côté Raison, trait fin et pastel.

Menu → « Styles par zone » pour comparer avec et sans. Planches : `node tools/styles-capture.js index.html <dossier>`.

### 2.4 · Territoire de départ, zones scellées et chemins (17 nov.)
- Territoire de départ (regles-avancees.md, section 1 ter) : 12 tuiles au niveau 0 (choix C2) : 6 zones à cartes (1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée) et 6 Ressources. Ce sont les 5 zones d'origine plus les plus proches qui manquent (ZONES_DEP dans main.js).
- Les zones qui l'entourent sont à ±5 ; au-delà, pôle et niveau au hasard, tirés à chaque nouvelle partie (S.graine). Les Ressources hors départ ont un niveau 0 à 3 au hasard.
- Les Ressources ne donnent pas de carte de combat (elles produisent du mana).
- Zones scellées : hors du territoire de départ, une zone ne peut pas être activée tant que toutes les zones de départ ne sont pas à vous ou que le paquet compte moins de 15 cartes (une zone où vous avez une empreinte reste reprenable). Le bandeau montre « ⌂ x/12 départ ».
- Chemins (chemins.js) : chaque route ouverte trace un chemin de dalles entre les Pierres des deux zones ; le tracé reste si la route est coupée. Sur un chemin, aucune rencontre, sauf dans une Citadelle. Exception à venir : un rempart actif qui n'est pas à vous.

### 2.4 · Pouvoirs de carte du monde des Assemblées (17 nov., provisoires)
Code : tv/src/assemblees.js. Une Assemblée n'agit pas en combat : sa loi agit sur le monde quand elle est à vous, activée et au palier 1 ou plus (pôle − ou + selon le signe du palier).
1. Givrecloche (MAR) : Brume, le Donjon voisin n'est pas assailli ; Clarté, la minicarte montre le niveau et les secrets des zones à 2 tuiles.
2. Lande de Cezo (ASS006) : +1 mana par route ouverte à chaque cycle.
3. Balpak (ASS012) : repos des Pierres de Balpak et de ses voisines divisé par deux.
4. Delta de Pama (ASS150) : les assauts du sauvage arrivent deux fois plus tard.
5. Canyon de Fjorhel (ASS152) : Silence, deux fois moins de rencontres dans vos zones ; Chant, rencontres plus fréquentes, +1 mana par victoire.
6. Oasis de Raak (ASS155) : « Borner une zone » à sa Pierre ; la zone bornée ne recule pas face à une horde (et plus tard un rival).

### 2.4 · Une seule sorte de carte (17 nov., décision 2a)
- La « carte de pouvoir » de la 1.0 est retirée (S.cards, newCard, rangs Mineure/Majeure/Ultime, menu Paquet, compteur Cartes du HUD). La mue montre seulement la carte de combat du palier, et rien pour une Ressource.
- Le cycle des contre-pouvoirs (CONTRE) passe par la possession : si vous possédez et avez activé la zone qui en contre une autre, l'épreuve de celle-ci est plus facile, −1, puis −2 dès le palier 4 et −3 dès le palier 6 de la zone qui contre. En combat, la carte de la zone qui contre reste doublée (contreX).

### 2.5 · Interfaces et graphismes (17 nov.)
- 2.5.1 (retour de test du 18 nov.) : l'état tient sur une seule barre sombre en haut de l'écran (mana, domaines, territoire, royaume, danger, blessures, secrets).
- tv/src/ecrin.js : habillage commun des interfaces (cadres à filets d'or, coins ornés, fleurons, menus en lignes de manuscrit, bandeau en tableau, mue mise en scène). MZ_VERSION (affiché au titre et dans la pause) : à monter à chaque PR de jeu.
- Graphismes : la version web part en qualité « Belle » (ombres 2048, anticrénelage ×4) ; nouveau réglage « Splendide » (image en pleine largeur 1920). Si l'image tombe sous 27 images/s, la qualité baisse seule. Poussières de lumière autour du héros, couleur de la zone (tv/src/poussiere.js).
