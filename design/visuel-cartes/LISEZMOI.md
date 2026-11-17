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
