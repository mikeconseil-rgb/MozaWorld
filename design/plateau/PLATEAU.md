# Le Plateau : champ de bataille en mosaïque

Demande de l'utilisateur (19 nov. 2026) : améliorer le gameplay du jeu de cartes avec un plateau de bataille relativement petit, en mosaïque, et du placement défensif de créatures, dans l'esprit des jeux de tactique à créatures et des jeux de cartes à étages (genre et mécaniques seulement : aucun nom, carte, image ni contenu repris). Une équipe de testeurs note chaque passe, et le gameplay s'améliore passe après passe.

Le Plateau agrandit le Nœud (deux voies et un centre, choisi le 17 nov.). Code : `tv/src/plateau.js` (terrain, placement, dessin) et `tv/src/combat.js` (coups).

## Les règles (passe 2)

- **Trois voies** : haute, du milieu, basse. De votre côté, chaque voie a **deux cases** : l'avant et l'arrière. Le héros est derrière tout le monde, la Garde juste devant lui. Le décagone du centre reste à tenir (vos coups +2 si vous avez au moins autant d'unités que l'ennemi).
- **Placement** : quand une carte fait venir une bête ou un bloqueur, le jeu propose une case (l'avant de la voie la plus menacée), puis vous la déplacez : ▲ ▼ change de voie, ◀ arrière, ▶ avant, OK pose, Retour garde la case proposée. Poser sur une case prise échange les deux unités. Quatre unités au plus sur le plateau (la plus faible part pour faire de la place).
- **Un coup ennemi suit sa voie** : l'unité d'avant, sinon celle d'arrière, sinon la Garde, sinon le héros. Une voie vide laisse passer jusqu'à la Garde. « Vole par-dessus » va droit au héros. Un coup qui piétine passe à l'unité suivante de la voie.
- **Vos bêtes** frappent l'ennemi de leur voie (l'avant, puis l'arrière), sinon un ennemi sur une Tribune voisine ; si leur voie est vide, elles vont frapper le chef ou une voie voisine, à moitié. À l'avant, pleine force ; à l'arrière, elles sont à l'abri tant que l'avant tient, et frappent à moitié. Au début de votre tour, une unité d'arrière **avance** si l'avant de sa voie est vide.
- **Manœuvre** (bouton à droite de « Fin du tour ») : une fois par tour, déplacer une de vos unités, échange compris ; elle frappe à moitié ce tour-là.
- **Sentinelle** : votre Citadelle envoie un bloqueur au début de chaque combat (6 + 2 × niveau PV, frappe 1 + niveau/2). Au début du tour 1, vous placez la Sentinelle et les unités des passifs.
- **Menace** : chaque voie affiche le total des coups annoncés contre elle et qui les prendra (une unité, la Garde ou le héros). Un élan compte double.
- **Début de combat** : au tour 1, un ennemi qui devait piétiner ou enfoncer prend son élan à la place. La capacité de dépense vaut au moins la moitié du numéro du tour ; avant le tour 4, les blessures n'en retirent qu'1 au plus. Un ennemi qu'on fait hésiter deux tours de suite s'habitue.
- **Les ennemis** se répartissent sur les voies ; le second d'une voie avance quand le premier tombe. Le chef reste derrière et **annonce la voie qu'il vise** (elle tourne à chaque tour).
- **Les cases sont des tuiles Girih**. Votre royaume pave trois de vos cases, une par type de zone que vous tenez ; la zone combattue pave deux cases ennemies de sa forme :
  - Décagone, **Bastion** (Citadelle) : +3 de garde à l'unité posée là, à chaque tour.
  - Pentagone, **Piège** (Donjon) : tant qu'une unité s'y tient, le premier coup porté chaque tour dans sa voie rend 4 dégâts à son auteur.
  - Nœud papillon, **Tanière** (Antre) : l'unité posée là reprend 2 PV à chaque tour.
  - Hexagone, **Source** (Ressource) : l'unité posée là frappe +2.
  - Losange, **Tribune** (Assemblée) : l'unité posée là attire les coups des voies voisines laissées vides.
- Le bélier ne fait double que contre la Garde et les bloqueurs. Un ennemi qui vole par-dessus ignore la Garde, même avec les blessures.
- La Garde change de place : elle protège le héros, derrière les voies (avant le Plateau, elle prenait tous les coups en premier).

## Banc de jeu pour les testeurs

`node tv/tools/jouer.js` joue un combat coup par coup ou des lots par un robot ; voir l'en-tête du fichier.

## Notes des testeurs

Voir `notes.md` (une ligne par passe et par testeur).
