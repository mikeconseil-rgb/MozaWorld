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

## Pistes non tranchées

- Construire soi-même le champ en posant des tuiles avant le combat : l'utilisateur hésite, à faire essayer dans l'Arène.
- Initiative par créature (à la manière du genre), tireurs, grandes créatures sur deux tuiles.
