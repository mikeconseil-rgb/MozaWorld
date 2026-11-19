# Notes des testeurs du Plateau

Quatre testeurs jouent de vrais combats avec le banc `tv/tools/jouer.js` et notent sur 10. Rapports complets : `/mnt/project-files/plateau/passe-N/`.

| Passe | Fonctionnel | Joueur de cartes à échanges | Joueur de défense par étages | Joueur tactique généraliste | Moyenne gameplay |
|---|---|---|---|---|---|
| 1 (19 nov.) | 6,5 | 4,5 | 4,5 | 5,5 | 4,8 |

## Passe 1 : ce qui a été dit

- Les quatre : le paquet de départ n'a aucune carte qui fait venir une unité, donc le plateau est vide au début du jeu ; une unité posée ne bouge plus ; l'arrière n'est pas rentable ; la menace par voie n'est pas affichée.
- Trois sur quatre : la spirale des blessures (capacité qui retombe à 1 au tour 3) tue les combats en 2 ou 3 tours.
- Bogues : aide du placement figée, voie du chef qui change après l'élan, rangées qui se chevauchent, main qui cache la voie basse, Garde comptée contre un vol, garde du Bastion qui s'accumule, bélier double contre les bêtes, X qui finit le tour pendant le placement, horde sur deux voies, duel avec cases vides.

## Passe 2 : ce qui change

Nouveautés (3) :
1. **Manœuvre** : une fois par tour, déplacer une de vos unités (échange compris) ; elle frappe à moitié ce tour.
2. **Sentinelle** : votre Citadelle envoie un bloqueur (6 + 2 × niveau PV, frappe 1 + niveau/2) au début de chaque combat ; il se place, comme les unités des passifs, au début du tour 1.
3. **Rangs utiles** : l'arrière avance quand l'avant de sa voie est vide ; une bête dont la voie est vide frappe le chef ou une voie voisine à moitié ; le Piège ne marche que si une unité s'y tient, et rend 4.

Réglages et correctifs : capacité de dépense au moins la moitié du tour, et blessures qui ne retirent qu'1 de capacité avant le tour 4 ; au tour 1, un coup qui piétine ou un bélier devient un élan ; une deuxième hésitation de suite ne prend plus ; menace affichée sur chaque voie, avec qui la prendra ; l'élan compte double dans la menace et verrouille la voie du chef ; tous les bogues ci-dessus.
