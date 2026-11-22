# Notes des testeurs du Plateau

Quatre testeurs jouent de vrais combats avec le banc `tv/tools/jouer.js` et notent sur 10. Rapports complets : `/mnt/project-files/plateau/passe-N/`.

| Passe | Fonctionnel | Joueur de cartes à échanges | Joueur de défense par étages | Joueur tactique généraliste | Moyenne gameplay |
|---|---|---|---|---|---|
| 1 (19 nov.) | 6,5 | 4,5 | 4,5 | 5,5 | 4,8 |
| 2 (19 nov.) | 7,5 | 6,5 | 6 | 6,5 | 6,3 |
| 3-4 (20 nov., jeu de la passe 3) | 7 | 6,5 | 6,5 | 6,5 | 6,5 |
| 5 (20 nov.) | 7,5 | 7 | 7 | 7,5 | 7,2 |
| 6 (20 nov.) | 7,5 | 7,5 | 7,5 | 7,5 | 7,5 |
| 7 (20 nov.) | 8 | 7,5 | 7,5 | 8 | 7,7 |
| 8 (21 nov.) | 8,5 | — | 8 | — | 8 (un seul testeur de gameplay a fini : limite d'usage) |

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

## Passe 2 : ce qui a été dit

- Mieux : la Sentinelle fait exister le plateau dès le départ ; la Manœuvre est un vrai coup tactique ; les badges de menace se lisent sans règle ; plus de défaite en chaîne par les blessures. Robot : 45 % en départ, 50-60 % en milieu, 50-80 % en fort.
- Reste : trop facile pour un joueur attentif (héros intact dans la plupart des combats) ; la conversion du tour 1 ne touchait que le chef (bogue) ; l'arrière marginal ; la menace mêlait ce tour et le suivant ; un bélier tuait la Sentinelle ; Retour pendant la Manœuvre ouvrait la pause ; la main débordait à 6 cartes ; un ennemi mort restait en fantôme.

## Passe 3 : ce qui change (réglages, pas de nouvelle mécanique)

Soutien de l'arrière (+2 de garde à l'avant de sa voie) ; une unité sur Bastion, Piège ou Tanière tient sa case ; menace séparée « ce tour » et « élan au prochain tour », « frappe tout le monde » comptée ; case proposée qui évite le bélier pour un bloqueur ; Sentinelle à 6 + niveau PV mais bélier ×1,5 contre elle et épargnée par les prix ; chef +30 % de PV (+50 % en éveil) ; +2 du centre réservé aux bêtes et au héros ; bouton Y pour la Manœuvre ; coups des bêtes écrits au journal ; correctifs (tour 1 pour tous les ennemis, Retour, main, fantômes, force affichée).

## Passe 4 (20 nov.) : ce qui a été dit sur le jeu de la passe 3

- Mieux : l'arrière sert enfin (soutien, cases tenues) ; vrais combos ; la Manœuvre avec échange est le meilleur geste ; combats de 4-5 tours avec une courbe.
- Reste : beaucoup trop facile (héros jamais touché par un ennemi, robot 60-90 %) ; la Garde qui cède absorbait tout le coup ; l'hésitation domine, l'habitude se contournait ; plus de vagues quand les sbires tombent ; badge de menace caché et faux (bélier, centre, vol) ; six cartes dont les ops ne disaient pas leur texte ; un prix « défaussez » gratuit en dernière carte.

## Passe 5 : ce qui change

Garde qui cède : le reste du coup passe au héros ; renforts (éveil : le chef appelle un sbire aux tours 3 et 5, annoncé la veille, dans sa voie ; rencontre : un renfort au tour 3 s'il reste moins de 2 ennemis) ; hésitation : l'habitude tient tout le tour, un chef n'hésite qu'une fois tous les 3 tours, « tous hésitent » ne retire au chef qu'1 d'attaque ; vulnérabilité plafonnée à 3 ; menace calculée comme le coup réel (bélier, Source, centre +1, vol affiché à part) ; l'élan du tour 1 garde le vrai coup pour le tour 2 ; une bête dont la voie est vide vise d'abord une voie voisine occupée ; un bloqueur n'est plus proposé face à un bélier ni retiré d'office ; prix « défaussez » sur le dessus de la pioche si la main est vide ; six cartes corrigées (Écorces à la boue, Lettre ramassée, La Cangue ouverte, Brume des crevasses, Dalles bleues, Le premier chacal) ; badge de menace au-dessus des bulles ; aide lisible pendant le placement.

## Passe 5 : ce qui a été dit

- Mieux : les renforts d'éveil annoncés dans une voie sont la meilleure nouveauté (combats de 6 à 9 tours, une ligne qui casse puis se reconstruit) ; pour la première fois des ennemis touchent le héros ; menace exacte ; cartes qui tiennent leur texte.
- Reste : les rencontres restent faciles (robot 87-100 % en milieu) ; le chef finit désarmé par les malus d'attaque empilés ; les « +N à chaque coup reçu » s'ajoutent sans plafond ; le chef, hors des voies, n'est jamais frappé à pleine force ; un renfort annoncé en rencontre ne venait pas ; un élan perdu frappait quand même fort ; gratuité de la Cangue qui fuyait ; dégât à virgule contre la Sentinelle ; bloqueur proposé face au bélier.

## Passe 6 : ce qui change

Nouveautés (3) :
1. **Le chef se tient dans la voie qu'il vise** : les bêtes de cette voie le frappent à pleine force.
2. **Renforts tenus** : en rencontre, un renfort au tour 3, toujours ; un renfort annoncé vient même si ses alliés tombent avant ; il entre en prenant son élan.
3. **Plancher et échauffement** : malus d'attaque bornés à 60 % (chef 75 %) ; à partir du tour 4, +1 d'attaque par tour pour les ennemis ; bonus de dégâts reçus plafonnés à +4 par coup ; chef +40 % de PV (+70 % en éveil). Robot : milieu en rencontre 70 %, fort en éveil 95 %.

Correctifs : brûlures plafonnées (les 2 plus fortes comptent à chaque tic) ; élan perdu qui supprime le coup fort (et coup fort dans la voie de l'élan) ; bélier converti au tour 1 qui reste un bélier ; gratuité de la Cangue limitée au tour, coût 0 affiché ; dégâts arrondis contre la Sentinelle ; bloqueur plus proposé face au bélier ; badge du vol qui compte la résistance du héros ; message d'habitude du chef ; brûlure écrite avant « est vaincu ».

## Passe 6 : ce qui a été dit

Un commentaire mal fermé coupait les renforts dans la première version ; corrigé, les testeurs ont rejoué.
- Mieux : le chef dans sa voie est « la meilleure idée depuis la Manœuvre » (on place à l'avance là où il ira) ; renforts tenus ; le plancher garde le chef dangereux ; l'échauffement rend la fin meurtrière ; un départ enfin tendu. Robot : 25 % en milieu (trop dur pour lui), les testeurs gagnent tout.
- Reste : renforts qui n'entrent pas toujours en élan ; renfort perdu si le chef meurt avant l'annonce ; échauffement affiché deux fois ; plateau vide en fin de combat avec le paquet de départ ; une unité tout juste posée évincée ; le chef pas montré dans sa voie (pour les passes d'interface).

## Passe 7 : ce qui change

Nouveautés (3) :
1. **Sentinelle de relève** : une fois par combat, plateau vide au début de votre tour, la Citadelle renvoie une Sentinelle à la moitié de ses PV.
2. **Renforts qui entrent en élan** : toujours, avec leur coup fort au tour suivant ; tour d'arrivée retenu à l'annonce (vient même si le chef tombe) ; en rencontre, −30 % de PV.
3. **Place gardée** : une unité arrivée ce tour n'est jamais évincée.

Réglages : échauffement annoncé une fois, avec le total, et pas pour un renfort qui entre. Robot : milieu en rencontre 40 %, fort en éveil 55 %, départ 65 %.

## Passe 7 : ce qui a été dit

- Mieux : renforts qui entrent en élan (un tour pour répondre) ; éveil milieu « enfin dur et juste », gagné à 1 PV au tour 9 ; place gardée ; échauffement lisible.
- Reste : le coup fort d'un renfort ne tombe jamais sur un mur (tué ou fait hésiter avant) ; un Colporteur de renfort prenait deux élans puis un bélier ; hésitation pendant un élan sans effet ; élan affiché trop bas ; relève posée d'office ; éviction invisible ; rencontres en fort encore faciles ; PV payés par les cartes nulle part récapitulés.

## Passe 8 : ce qui change

Nouveautés (3) :
1. **Renfort lourd** : en éveil, le renfort du tour 5 a 1,5 fois ses PV et ne lâche pas son élan ; son coup fort tombe pour de bon sur la voie.
2. **Hésitation qui retarde l'élan** : l'ennemi reprend son élan au tour suivant ; et l'élan affiché est le vrai coup qui suivra.
3. **Fin de combat franche** : à partir du tour 6, plus de « se met en garde ».

Réglages : tous les renforts finissent en coup fort (fin du double élan) ; −30 % de PV au renfort seulement en rencontre de niveau ≤ 2 ; Sentinelle de relève placée à la manette ; la plus faible part (attaque × PV, bloqueurs compris) ; journal du vol qui nomme la Garde ; PV payés écrits avec le total.

## Passe 8 : ce qui a été dit

Deux testeurs ont fini (fonctionnel 8,5, défense par étages 8) ; les deux autres ont été coupés par la limite d'usage hebdomadaire.
- Mieux : pour la première fois, un piétinement annoncé tombe sur le mur et la ligne l'absorbe ; renforts à pleine vie qui forcent à choisir entre rafale de cartes et mur ; renfort lourd lisible ; fin de combat franche ; PV payés visibles. Les quatre bogues fonctionnels de la passe 7 sont corrigés.
- Reste : les renforts lourds meurent juste avant leur coup (passés de ×1,5 à ×2 PV) ; rencontre en fort réglée en 3 tours ; « perd son élan » écrit à tort pour un lourd (corrigé) ; bloqueurs sans attaque évincés trop vite (poids revu).
- Pour l'interface : chef posé sur sa rangée, badge de menace au-dessus des bulles, main de 8 cartes, « PV n/12 », choix de l'unité qui part, pictogramme « hésite », récapitulatif de fin de combat.
