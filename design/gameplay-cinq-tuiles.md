# Gameplay des cinq tuiles Girih

Copie de référence du 16 novembre 2026. Document vivant (version complète, avec débats et options étudiées) : https://claude.ai/artifact/UCXWVpwr7ZqH9VsApnLh27

## Décisions validées le 16 novembre 2026

1. **Formes et types :** Hexagone allongé = Ressource, Nœud papillon = Antre, Losange = Assemblée, Pentagone = Donjon, Décagone = Citadelle (avec le commerce).
2. **Quantités :** 383 / 246 / 182 / 130 / 45, total 986. Le monde est tiré au hasard : ce sont des proportions visées (≈ 39 % / 25 % / 18 % / 13 % / 4,6 %) que le générateur sans trou respecte à chaque carte.
3. **Ressources :** source du mana, design simple et background léger, niveaux 0 à 3 sans côté + ou −. Elles donnent 1 mana de leur couleur au niveau 1, 2 au niveau 2, 2 plus un bonus au niveau 3.
4. **Bonus du niveau 3 :** on choisit parmi trois bonus d'un type ; types différents cumulés, même type seul le meilleur compte. Bonus imaginatifs mais mineurs. Le bonus choisi joue le rôle du pôle.
5. **Routes :** elles forgent les pouvoirs. Une route greffe le bonus du niveau 3 d'une Ressource comme atout (« perk ») sur la carte de pouvoir de la tuile reliée. Une tuile reçoit autant de routes qu'elle a de côtés (losange 4, pentagone 5, décagone 10). Route coupée = atout perdu. Une Ressource isolée donne son mana normalement.
6. **Donjon possédé :** devient un jeu de gestion et de défense de donjon (inspiration de genre seulement, rien copier). Chaque Donjon possédé déverrouille un dispositif de défense propre à sa sous-zone. Le mana paie les pièges ; c'est le même mana que pour les cartes ; chaque piège a une couleur, on peut payer avec une couleur que son paquet n'utilise pas. Hordes et rivaux doivent vaincre le Donjon tel que le joueur l'a aménagé.
7. **Assemblée :** siège politique de la région, épreuve = duel d'arguments en cartes, donne des cartes de loi et un multiplicateur de voix. Système de voix pondérées par type de tuile.
8. **Choix moraux :** environ 7 épreuves sur 10 reposent sur un choix cornélien pour adultes, dur mais juste ; le choix décide du pôle. Les 3 autres sont des épreuves d'adresse ou de combat pures.
9. **Citadelles :** 45, chacune avec son propre style graphique (manga, noir et blanc et brouillard…) ; une famille de styles par type pour les petites tuiles.
10. **Tuiles épiques :** 5 Citadelles épiques, une par grande région (accord provisoire).

## Ce que la géométrie impose (mesuré)

| Forme | Taille (losange = 1) | Voisines | Part naturelle | Particularité |
| --- | --- | --- | --- | --- |
| Décagone | 8,1 | 10 | 1 à 7 % | Énorme et rare, centre des rosaces |
| Hexagone allongé | 2,2 | 6 | 25 à 34 % | Forme des chaînes, comme des filons |
| Pentagone | 1,8 | 5 | 4 à 10 % | Au cœur d'étoiles de losanges |
| Nœud papillon | 1,4 | 6 | 22 à 37 % | Deux creux qui pincent un passage, forme des meutes |
| Losange | 1 | 4 | 25 à 34 % | Petit, entre les autres, facile à encercler |

Avec 106 décagones, les Citadelles couvraient 36 % du monde ; avec 45, 18 %. Le générateur sans trou (controle-zones/pavage/girih_exact.py), même poussé à 11 %, n'a placé que 7 décagones sur 152.

## Fiches

### Hexagone allongé : Ressource
- Ce qu'on y fait : explorer, récolter selon le biome, poser une installation, tracer une route (ouverte au niveau 2).
- Épreuve, la Récolte sous menace : remplir une grosse commande avant la fin du temps pendant que le monde sauvage reprend le terrain. Au niveau 3, un gardien.
- Donne : le mana (1 / 2 / 2 + bonus), des matériaux, une carte d'équipement (la hache de feu du début). On commence sur une Ressource de niveau 1.
- Bonus du niveau 3 (proposition en cours) : une carte (ex. « Braise »), un pouvoir de terrain actif en combat dans la zone (ex. « Lac gelé »), ou une activité sur les tuiles voisines (ex. « Fumerolles »).

### Nœud papillon : Antre
- Ce qu'on y fait : suivre des pistes, affronter les bêtes en combat au tour par tour.
- Épreuve, la Chasse : vaincre l'alpha en combat de cartes ; l'abattre (+, passage ouvert à tous) ou le soumettre (−, barrage sauf pour soi).
- Donne : cartes Créature (alliés qui combattent devant le héros) ; Antres voisins = meute qui se renforce.
- Principale source de hordes : à ±7, souvent un seul des deux pôles envahit.

### Losange : Assemblée
- Ce qu'on y fait : siéger, négocier, intriguer, proposer des décrets pour la région.
- Épreuve, le Duel d'arguments : combat de cartes (arguments, promesses, menaces) ; chaque voisine possédée apporte des voix.
- Donne : cartes de loi (impôt, milice, trêve, sceller un Donjon), multiplicateur de voix.
- Prise : gagner le duel contre le conseil en place ; encerclée de ses 4 côtés, elle est dissoute et redevient sauvage.

Voix pondérées (proposition) :

| Action politique | Ressource | Antre | Losange | Donjon | Citadelle |
| --- | --- | --- | --- | --- | --- |
| Lever une milice contre une horde | 1 | 2 | 1 | 1 | 3 |
| Fixer l'impôt de la région | 2 | 1 | 3 | 1 | 2 |
| Ouvrir ou fermer une route | 2 | 1 | 2 | 1 | 2 |
| Sceller ou desceller un Donjon | 1 | 1 | 1 | 3 | 2 |
| Proclamer une trêve avec un rival | 1 | 1 | 3 | 1 | 2 |

### Pentagone : Donjon
- Conquête, la Descente : étages, salles, pièges, boss, avec le paquet formé des pouvoirs du royaume. À ±7, boss très dur.
- Donne : cartes Majeures et Ultimes, reliques, Brise-sceau.
- Après la conquête : aménager salles, pièges et gardiens (créatures des Antres) ; chaque Donjon possédé déverrouille un dispositif ; le mana paie les pièges ; monter de niveau = repousser un assaut du monde sauvage ; une horde qui passe près peut y être attirée et s'y briser.

### Décagone : Citadelle
- Ce qu'on y fait : gouverner, recevoir ses vassaux, tenir les sièges.
- Épreuve, la Garde du château : siège au tour par tour (défenseurs et tours = cartes) ; pour la prendre, l'assaut contre la garnison sauvage.
- Donne : verrouille ses voisines (portée 3), route entre deux Citadelles = rempart, point de retour, cartes Bastion, réserve de 2 mana d'un tour à l'autre, commerce (boutique de cartes, forge des contre-pouvoirs, change de mana). Certaines sont épiques : les mener à ±7 fait gagner.

## Comment les types s'emboîtent
1. Ressource : départ sur une Ressource de niveau 1, premier mana et première arme.
2. Antre : premières créatures alliées.
3. Assemblée : lois de la région grâce aux voix des tuiles.
4. Donjon : cartes ultimes, puis Donjon à aménager.
5. Citadelle : capitale qui protège le reste, commerce, remparts.
6. Guerre : les zones à ±7, surtout les Antres, lèvent des hordes.

Cycle des contre-pouvoirs (version télé) : Donjon → Citadelle → Antre → Assemblée → Ressource → Donjon (la carte d'un type facilite l'épreuve du suivant).

## Exemples de choix moraux
- Ressource : le filon passe sous le cimetière du village ; creuser enrichit mais le village te renie.
- Antre : l'alpha défend ses petits ; l'abattre ouvre le col aux caravanes affamées, l'épargner laisse la meute grandir près des fermes.
- Assemblée : voter une loi qui nourrit la région en réquisitionnant les réserves d'un village qui risque de ne pas passer l'hiver.
- Donjon : le boss est le geôlier d'un mal plus grand ; le tuer brise le sceau, l'épargner c'est pactiser.
- Citadelle : ouvrir les portes aux réfugiés alors que des espions se cachent parmi eux, ou les laisser dehors face à la horde.

## Questions ouvertes de l'équipe (16 novembre, avec recommandation)
1. Taille du paquet en combat : 20 cartes.
2. Plafond de mana : 10 par tour.
3. Lieu du combat : sur place, le décor sert d'arène.
4. Le joueur sait-il quelle option mène au + ou au − : non.
5. Les choix moraux survivent-ils à la mort : oui, l'héritier hérite des rancunes.
6. Qui aménage les Donjons non pris : rivaux et monde sauvage.
7. Le monde sauvage vote-t-il à l'Assemblée : oui, contre par défaut.
8. Une horde fait-elle baisser une Ressource : oui, d'un niveau, et coupe ses routes.
9. Monnaie du commerce : or séparé du mana.
10. Après une victoire épique : nouveau monde tiré au hasard.
11. Couronne de transition de style autour des Citadelles : oui.
12. Texte des 383 Ressources : quelques lignes chacune.
13. Folie à −7 : pas pour l'instant.
14. Premier test sur la version télé : combat de cartes payé avec le mana des Ressources, puis un Donjon à aménager.
