# Champ de bataille en mosaïque (Arène, 22 nov. 2026)

Demande de l'utilisateur (22 nov.) : les 3 voies du Plateau font « comme un Moba, sans aucun intérêt tactique ». Il veut « un champ de batailles style Heroes of Might and Magic, mais en mosaïque, bord à bord » et « pouvoir déplacer les créatures ». Décision : on le teste d'abord dans l'Arène ; le jeu principal garde le Plateau tant qu'il n'a pas validé.

## L'Arène

- Adresse : `tv/arene.html` (ou `tv/index.html?arene`). Sur GitHub Pages : https://mikeconseil-rgb.github.io/MozaWorld/tv/arene.html
- Le combat est lancé tout de suite. Un menu règle le champ (mosaïque ou 3 voies), le paquet (départ, milieu, fort), le combat (rencontre ou éveil), le type et le niveau de la zone. On rejoue en un bouton, et les victoires et défaites sont comptées.
- La vraie partie n'est jamais touchée : dans l'Arène, le stockage du navigateur est une mémoire de page (`tv/src/arene-garde.js`).

## Règles du champ (première version)

- Le champ est un morceau du pavage Girih du monde, pris autour de la zone combattue. Les tuiles se touchent bord à bord, et l'on va d'une tuile à sa voisine.
- Le héros est à gauche et vos créatures autour de lui. Si vous n'en avez aucune, une escorte se forme : la Sentinelle et une bête de l'Antre. Les ennemis arrivent par la droite. Deux ou trois gouffres coupent le milieu, sans jamais couper le champ en deux.
- À votre tour, vous jouez vos cartes comme avant. Ensuite, ▲ ou Y passe sur le champ :
  - chaque créature avance de 3 tuiles, puis frappe un ennemi à son contact ;
  - le héros peut faire un pas ;
  - le Rempart ne bouge pas.
- Vos créatures ne frappent plus seules en fin de tour.
- **Contact :** en entrant sur une tuile voisine d'un adversaire, on s'arrête. Vos créatures barrent donc la route vers le héros.
- **Riposte :** une créature frappée au corps à corps qui reste debout riposte une fois par tour, à la moitié de sa force.
- **Tour ennemi :** chaque ennemi avance vers le héros (3 tuiles, 2 pour un chef) et frappe ce qu'il touche, le héros d'abord. Un ennemi qui « vole par-dessus » survole 4 tuiles sans tenir compte du contact. La Garde protège le héros : elle prend le coup en premier, puis le reste passe au héros.
- **Tuiles :**

| Tuile | Nom | Effet |
|---|---|---|
| Décagone | Hauteur | +1 d'attaque |
| Pentagone | Rempart | −2 dégâts reçus, au moins 1 |
| Hexagone | Source | +2 PV au début du tour |
| Papillon | Ronces | y entrer arrête le déplacement |
| Losange | Dalle | aucun effet |

- **Limite :** 5 créatures au plus sur le champ.

## Passe 2 (22 nov.)

Retour de l'utilisateur : « C'est difficile de jouer. Le champ de batailles devrait zoomer, être plus grand. Facile à voir les bêtes se déplacer. De plus le visuel des bêtes est moche à mourir. »
- Le champ est plus grand. Il zoome presque en plein écran quand on déplace ses créatures et pendant le tour ennemi ; les cartes se rangent alors.
- Les pions grandissent avec le zoom.
- Chaque pion suit son chemin tuile par tuile, et le chemin reste tracé un instant : en jaune pour vous, en rouge pour l'ennemi. L'ennemi frappe une fois arrivé.
- Les portraits sont peints (`tv/img/creatures/`, par `tools/images-cartes/generer-creatures.py`, Pollinations, gratuit) :
  - une image par monstre de zone ;
  - une image par archétype (oiseau, félin, canidé…) pour les quelque 2 000 bêtes des cartes ;
  - une image pour le héros, la Garde et la Sentinelle.

## Version téléphone (25 nov.)

Demande de l'utilisateur : « une version spécifique pour Pixel avec les cartes présentées bien plus gros. Je veux bien lire les cartes. »
- Adresse : `tv/arene-pixel.html`, ou l'Arène ouverte sur un écran tactile. La Xbox ne change pas.
- La main de cartes est plus grande et toujours entière à l'écran. Le champ est au-dessus.
- Toucher une carte l'ouvre en grand (la « loupe »), avec son texte entier et deux gros boutons : « Jouer (N mana) » et « Fermer ».
- Pour choisir une cible, le champ passe en grand, et l'on touche l'ennemi.
- Correctif : un combat pouvait planter quand le morceau de mosaïque n'avait pas de tuile assez large à gauche pour le héros.

## Factions (25 nov., 2.48)

Choix de l'utilisateur : « 2,3 et 4 », puis « A » (dans l'Arène d'abord). Code : `tv/src/factions-combat.js`. Chiffres provisoires.
- Chaque carte a la faction de son mana, chaque bête celle de la carte qui l'invoque, chaque ennemi celle de la zone combattue. Le journal annonce la faction ennemie et son opposée au début du combat.
- **Avantage** : un coup contre la faction opposée (Feu-Glace, Pierre-Eau, Vent-Sève) fait +50 %, arrondi au-dessus ; contre sa propre faction, −25 %, au moins 1.
- **Alliance** : la première fois dans un tour qu'on joue une carte d'une faction alliée (voisine sur la roue Feu, Pierre, Vent, Glace, Eau, Sève) d'une carte déjà jouée ce tour, on pioche une carte.
- **Terrain** : chaque tuile garde la faction de sa zone du monde (liseré à sa couleur). Une créature sur une tuile de sa faction gagne +1 d'attaque, −1 sur une tuile de la faction opposée.
- Le héros, la Garde et l'escorte n'ont pas de faction.

## Pistes non tranchées

- Construire soi-même le champ en posant des tuiles avant le combat : l'utilisateur hésite, à faire essayer dans l'Arène.
- Initiative par créature (à la manière du genre), tireurs, grandes créatures sur deux tuiles.
