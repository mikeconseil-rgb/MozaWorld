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
