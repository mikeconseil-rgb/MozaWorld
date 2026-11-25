# Visuel des cartes 2.2 (17 nov. 2026)

Demande de l'utilisateur : « c'est bien actuellement mais il faut plus de personnalisation ». Petite équipe : direction artistique (brief ci-joint), critique, intégration.

Code : `tv/src/cartes-visuel.js` (redéfinit `artCarte()` et `carteHTML()` d'habillage.js, CSS inclus). Tout est dessiné en SVG, rien à télécharger.

| Ce qui change | Comment ça se voit |
|---|---|
| Zone | Une scène par zone : biome (forêt, fjord, canyon, dunes, ruines, oasis, récif, cavernes, lande, delta, steppe, falaise, volcan, îles, mangrove, glacier) + monument de sa culture (13 cultures) + graine propre à la tuile. Fonctionne pour les 986 zones à venir. |
| Pôle | Même lieu, deux états à luminosité égale : − en gravure (hachures, anneau) et + en émail (soleil, motif Girih). Accent de couleur propre à chaque pôle, blason avec le glyphe du mot du pôle (Oubli, Mémoire, Mensonge, Vérité…), élément de scène tiré du pôle (neige, glyphes, masques, brume, chant…), marque du pôle sur la pastille de coût. |
| Palier | Colonne de 7 losanges (3 pour les Ressources). Palier 2 : bandeau de culture. 4 : halo et scène plus chargée, second bandeau. 5 : coins en matière du mana, bord à l'accent du pôle. 6 : petites capitales, halo blanc. |
| Mana | Couleurs de cadre et coins : flammes (Feu), éclats (Glace), vagues (Eau), feuilles (Sève), blocs (Pierre), volutes (Vent). |
| Forme ultime ±7 | Cadre animé, rayons et frise Girih dans l'image, sceau de résonance (posée pleine, réveillée en pointillé) entre l'image et le texte. |
| Secrets | Papier kraft, cadre en ficelle, objet trouvé dessiné au trait, décor de la zone d'origine en filigrane, sceau de cire. |
| Communes | Inchangées : seules cartes à garder l'or. |

Le texte se réduit par crans selon sa longueur ; dans la main, la carte choisie s'agrandit et montre tout son texte.
Lecture des données (fil cartes 2.2) : `ultime`, `pose`, `reveille`, `amb()`, `secret`, `zs`, clés de palier `ZONE#-3`, `ZONE#+5`, `RES079#r2`.

Critique (avant corrections) : personnalisation 7/10, équité des pôles 6, paliers 3, ultime/secrets 5, lisibilité 4, beauté 6. Corrigé ensuite : sujet agrandi et cerné, losanges de palier lisibles, scène qui évolue avec le palier, sceau de résonance hors de l'image, badge « mana gris » au-dessus de la carte, marque de pôle plus épaisse, objet du secret dessiné en grand, coins réservés aux paliers 5+.

## Rendu unique par carte (17 nov. au soir)

Demande : « retravaille les cartes, leur bordure, leurs effets ; le texte et le dessin doivent donner un rendu unique par carte ».
- **Dessin** : un sujet au premier plan tiré du nom de la carte (environ 40 mots-clés : chien, masque, lanterne, lettre, ardoise, flocon, trône…), sinon de son effet principal. La couleur du ciel et la mise en place de la scène dépendent de la carte, et le monument de la zone passe au fond.
- **Bordure** : chaque carte a son propre filet (4 formes de coins, 5 rythmes de trait) et ses médaillons en étoile (5, 6, 8 ou 10 branches), plus nombreux aux hauts paliers.
- **Effets animés** selon ce que fait la carte : braises, coup, lustre, brume, pages, onde, pouls, yeux, fissure. Ils jouent sur la carte choisie, dans les menus et sur les formes ultimes ; le reste de la main reste calme.
- **Texte** : chiffres en gras, « ◆ Prix » en rose clair, résonances en couleur. Dans la main, seule la première phrase s'affiche et la carte choisie montre tout. La phrase d'ambiance du conteur apparaît sur la carte choisie et dans les menus.
- Critique : avant corrections, reconnaissable 5/10 et texte 4/10. Ensuite : sujet agrandi avec un halo, fond estompé, teinte propre à chaque carte, variantes de document et de bouclier, plus aucun texte coupé dans la main.

## 3e tour (18 nov.) : images IA par carte

Demande : « les images des cartes sont assez basiques, il faut des images bien plus percutantes ». Choix de l'utilisateur : images IA avec un compte Hugging Face gratuit (quota quotidien, pas d'achat).

- `tv/tools/images-cartes/liste.js` fait un prompt par carte (nom, ambiance du conteur, biome, culture, pôle, palier, couleurs du mana) dans `cartes.json`. Secrets : encre et sépia sur papier kraft. Les Ressources et les communes n'ont pas d'image.
- `tv/tools/images-cartes/generer.py --max 20` (variable `HF_TOKEN`) génère les images manquantes en WebP 480×320 dans `tv/img/cartes/` et réécrit `tv/src/cartes-images.js`. Relancer ensuite `sh tv/build.sh`.
- Noms de fichiers : `ZONE_m3` / `ZONE_p7` pour les paliers, `S-<titre-du-secret>` pour les secrets. La carte de base d'une zone prend l'image de son palier actuel.
- Affichage (`cartes-visuel.js`, `fichierImage` et `peint`) : l'image remplace la scène vectorielle, chargée en différé ; les effets animés, losanges de palier, cadre et bandeau restent par-dessus. Si l'image manque ou ne charge pas, le dessin vectoriel s'affiche.

### Décors peints Pollinations (19 nov.)

Échéance du 28 nov. : le quota Hugging Face (8 images par jour) ne suffit pas. Choix de l'utilisateur : Pollinations, gratuit et sans compte (1 image toutes les 45 s). Son seul modèle gratuit (« sana ») peint bien les paysages mais rate les sujets, donc :
- `tv/tools/images-cartes/generer-pollinations.py` peint un **décor par carte** (biome, culture, pôle, palette, heure tirée de la clé) dans `tv/img/cartes/fonds/` ; secrets exclus (kraft).
- `cartes-visuel.js` pose le sujet vectoriel et les effets de la carte par-dessus ce décor (`scene(…, nu)`, classe `.kpeint.decor`).
- Une image complète Hugging Face dans `tv/img/cartes/` gagne toujours sur le décor ; `generer.py` continue d'en ajouter par lots.
- `generer.py --manifeste` liste les deux jeux (`CARTES_IMG`, `CARTES_FOND`) dans `tv/src/cartes-images.js`.

## 4e tour (21 nov.) : cadres ornés

Verdict de l'utilisateur après test : « Visuel ok à 80 % », puis « les cadres sont trop simples ». Corrigé dans `cartes-visuel.js` (bloc CSS « Cadres ornés ») :
- bord en métal ciselé (dégradé bronze aux paliers 1-2, vieil or aux 3-4, or vif aux 5-7) et fond à trame girih ;
- quatre écoinçons d'orfèvrerie par carte (`angles()` : rinceau, étoile girih, éventail ou grecque, tirés de la clé), avec une gemme à la couleur du mana ; ils grandissent avec le palier ;
- illustration sous vitre : filet doré, coins échancrés (`.kvitre`) ;
- nom dans un cartouche à losanges, texte dans un panneau gravé.
Les médaillons latéraux de l'ancien filet sont retirés ; secrets (kraft) et communes ne changent pas.

## Cinquième passe (22 nov.) : léger relief 3D

Demande de l'utilisateur après les cadres ornés : « Faudrait un léger effet 3d ». Tout est en CSS dans `tv/src/cartes-visuel.js` (bloc « Léger relief 3D »), sans image ni script de plus.

- Épaisseur : une tranche sombre sous la carte (ombres empilées, variable `--tr`), plus haute aux paliers élevés.
- Biseau : arête claire en haut à gauche et sombre en bas à droite sur le métal du cadre (`--bz`) ; cartouche du nom en saillie ; image, vitre et panneau du texte en creux.
- Mouvement : seule la carte choisie (main de combat, carte montrée seule dans une boîte) bascule doucement de −7° à +7° en 6 s, avec un reflet qui traverse la vitre. Les grilles de cartes (Grimoire) restent immobiles pour garder la Xbox fluide.
- `prefers-reduced-motion` coupe le basculement et le reflet ; le relief fixe reste.

## Sixième passe (24 nov.) : lire les cartes à 3 m et sur téléphone

Critique graphique 2.44 : en combat, le texte des cartes faisait 10 px à 720p et il était coupé. Utilisateur, à propos du téléphone : « Je veux bien lire les cartes ». Bloc « Lecture à 3 m » à la fin du CSS de `tv/src/cartes-visuel.js`.

- Cartes non choisies : plus de texte de règle (il était coupé) ni de ligne mana et vertu ; la peinture prend les deux tiers de la carte, le nom passe à 17 px à 720p.
- Carte choisie : 24u × 31u (307 × 397 px à 720p), texte de règle entier à 22 px à 720p (33 px en 1080p). Elle déborde sur ses voisines par des marges négatives, sans les pousser, et passe devant le plateau. `ajuster()` réduit la police par pas de 4 % (8 pas au plus) pour les textes longs, après avoir caché la citation et agrandi la carte (classe `haute`, 34u).
- Pendant le placement d'une unité ou le choix d'une cible, la carte reprend sa petite taille : on regarde le plateau.
- Téléphone (`body.tactile`, hauteur sous 600 px) : la carte choisie fait 88 % de la hauteur, texte à 16 px. Si la main dépasse le bas de l'écran, `ajuster()` mesure le dépassement (`--kdy`) et la carte remonte d'autant.
- Les sélecteurs sont en `#combat … !important` parce que `cartes-relook.js` est chargé après et force ses tailles.
- Mesure : `tv/tools/test-fumee.js` ne couvre pas la lisibilité ; vérifier à 1280 × 720 que `.ct` de la carte choisie ne déborde pas (`scrollHeight <= clientHeight`).
