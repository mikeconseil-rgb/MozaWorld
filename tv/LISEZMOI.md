# MozaWorld, édition salon (Sony Bravia / Google TV)

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
- **Paquet de départ** : les mêmes 10 cartes communes pour tout le monde (5 Coup de bâton, 3 Pas de côté, 2 Souffle court), assez pour une zone de niveau 0, peut-être 1. Paquet de 40 cartes au plus.
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
