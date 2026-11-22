# Kobor : le canon retenu et le format des quêtes (à suivre à la lettre)

## Décision de l'utilisateur (22 nov., 8 h 57) sur les quêtes
« L'épreuve devrait être un combat de cartes ou un choix de dialogue. Il faut un arbre complexe de 3 à 8 étapes
qui amène, à la fin, aux deux choix d'évolution de la zone. »
Donc : chaque quête est un ARBRE de 3 à 8 nœuds (des embranchements de dialogue, des lieux, des combats de cartes),
et toutes les branches aboutissent au nœud final qui pose les DEUX choix (un vers chaque pôle).

## L'histoire (canon, à ne pas contredire)
Chaque hiver, le hameau de Kobor doit 400 zibelines au voïévode Borislav. Les peaux attendent le convoi dans le Coffre,
la loge creusée sous les mélèzes. Cet hiver, le Coffre est vide.
Vera, la cheffe du hameau, a vendu les peaux à Ilya, un marchand de grain du sud : sans ce grain, Kobor mourait de faim.
Bogdan, un trappeur, s'accuse à sa place pour sauver le hameau et la cheffe (il lui doit tout : elle a payé sa dette l'an passé).
L'inspecteur Gleb veut un coupable avant le dégel. Il dit vrai sur la vente, mais il vole lui-même une peau sur dix
à chaque tribut, et il veut abattre Vera : elle a écrit au tsar une plainte contre le voïévode, qui le nomme aussi.
C'est Gleb qui a laissé le reçu du grain sur le chemin du héros.
Ilya, le marchand, a un carnet : il prouve la vente de Vera, mais aussi les peaux volées que Gleb lui revend en douce.
Oustina, la femme de Bogdan, veut savoir si son mari est un voleur ; elle a caché vingt peaux pour leurs vieux jours.
Couche ancienne (touche de D, discrète) : il y a quarante ans, le hameau a déjà menti à un inspecteur et l'a enfermé
dans le Coffre. La glace l'y garde. Le vieux Matveï, gardien du Coffre, a fermé la porte ce jour-là.
Le sol suit le pôle : vers −7 (Mensonge) le gel ne lâche plus rien, tout est figé et muet ; vers +7 (Vérité) le dégel rend tout ce
qu'on avait enfoui, le meilleur et le pire.

## PNJ (ids à utiliser tels quels)
vera (Vera, cheffe du hameau) · bogdan (Bogdan, trappeur) · oustina (Oustina, femme de Bogdan, tient le séchoir) ·
gleb (Gleb, inspecteur du trésor) · ilya (Ilya, marchand de grain) · matvei (le vieux Matveï, gardien du Coffre) ·
borislav (le voïévode Borislav : n'apparaît qu'aux paliers ±5 à ±7).
Lieux (ids) : camp (le camp des trappeurs), cercle (le cercle de pierres), belvedere (le belvédère), pierre (la Pierre d'éveil, devant le Coffre).

## Grandes lignes de l'arc (cadre ; à toi les détails, les embranchements et les surprises)
Palier 0 « Le coupable volontaire » : enquête ; choix final chez Gleb : confirmer Bogdan (−1, il part aux mines) ou désigner Vera (+1, enfermée au Coffre, grain saisi).
Mensonge : −1..−2 couvrir Bogdan et tenir le hameau ; −3 Oustina demande la vérité (mentir à quelqu'un qui y a droit) ;
−4..−5 Gleb a compris et veut sa part : truquer le registre, le hameau voisin paiera ; −6..−7 le voïévode arrive, offre à Vera le titre de starosta
si elle brûle sa plainte ; Matveï veut que tous jurent que « personne n'est jamais venu » ; le hameau devient le plus « en règle » de la taïga, et muet.
Vérité : +1..+2 le grain saisi, la faim, Bogdan méprisé ; +3 le carnet d'Ilya prouve les vols de Gleb (Ilya y perd sa barge) ;
+4..+5 le procès au cercle de pierres, la plainte de Vera enfin entendue, combat contre les hommes de Gleb ; le dégel rend l'inspecteur d'il y a quarante ans, Matveï avoue ;
+6..+7 chaque famille doit avouer ce qu'elle a caché au tribut, Vera la première ; Kobor plus pauvre, sans maître corrompu.
Aucun pôle n'est une fin heureuse. La Vérité a de vraies victoires (la plainte entendue), le Mensonge de vraies générosités.

## Règle des PNJ présents
L'état des PNJ dépend du PALIER, pas du chemin : chaque quête liste les PNJ absents à ce palier (« absents »).
Ex. : de −1 à −7, Bogdan est aux mines : il est dans « absents ». De +1 à +3, Vera est enfermée au Coffre : elle est dans « absents », et on lui parle par la grille du Coffre avec un nœud « lieu »: "pierre".
Le passé du joueur se lit par des TRACES (drapeaux posés par un choix) qui ajoutent une phrase à un texte : "txtTrace":{"menti_oustina":"phrase"}.

## Format (JSON strict, UTF-8)
{
 "quetes": {
  "0": {
   "t": "Le coupable volontaire",               // titre, 4 mots max
   "resume": "1 à 2 phrases : ce que la quête demande, clair",
   "absents": ["borislav"],
   "debut": "a",
   "noeuds": {
    "a": {"qui":"gleb", "txt":"…", "rep":[{"l":"Qui s'accuse ?","va":"b"},{"l":"Montrez-moi le Coffre","va":"c","trace":"vu_coffre"}]},
    "b": {"lieu":"camp", "txt":"…", "rep":[{"l":"Continuer","va":"d"}]},
    "c": {"qui":"bogdan", "txt":"…", "combat":"Des loups affamés rôdent autour du séchoir.", "gagne":"d", "apres":"texte après la victoire"},
    "d": {"qui":"gleb", "final":true, "txt":"…la question…",
          "fin":[{"vers":-1,"l":"Bogdan a vendu les peaux","prix":"Bogdan part aux mines.","epreuve":"dialogue","resultat":"ce qui arrive, 2 phrases","trace":"bogdan_mines"},
                 {"vers":1,"l":"C'est Vera","prix":"Vera est enfermée au Coffre, le grain est saisi.","epreuve":"combat","combat":"Les hommes du hameau refusent qu'on prenne Vera.","resultat":"…"}]}
   }
  }
 }
}
- Un nœud : "qui" (un PNJ, on lui parle avec A) OU "lieu" (on y va). "txt" : 450 caractères max, phrases courtes, on comprend qui parle et ce qui est en jeu.
- "rep" : 1 à 3 réponses ; "l" : 45 caractères max ; "va" : nœud suivant ; "trace" optionnelle. Les réponses doivent mener à des chemins VRAIMENT différents (info différente, PNJ différent, combat ou non), qui se rejoignent au nœud final.
- Nœud de combat : "combat" (une phrase : qui on affronte, pourquoi), "gagne" (nœud suivant), "apres" (texte après la victoire). Combat de cartes du jeu.
- Nœud final : "final":true et "fin" = exactement 2 choix : "vers" = palier visé (un vers chaque pôle : à 0, −1 et +1 ; à −3, −4 (s'enfoncer) et −2 (se raviser) ; etc.).
  "epreuve" : "combat" (il faut gagner un combat de cartes pour que la zone bouge ; ajoute "combat") ou "dialogue" (la zone bouge tout de suite).
  "prix" : le prix humain, dit honnêtement (ou "?" si caché, avec "cache":true) ; "resultat" : 2 phrases montrées quand la zone a bougé ;
  "cout" optionnel : {"pv":n} ou {"mana":n} (n ≤ 4).
- Arbre : 3 à 8 nœuds par quête, au moins un embranchement réel, au moins un nœud qui parle à un autre PNJ que celui du final.
- Paliers ±7 : une quête courte (3 nœuds) dont le final propose de revenir à ±6 (un seul choix est permis ici : "fin" à 1 élément) ; c'est la fin du pôle.
- Pas de nom réel d'historien, pas de citation de philosophe dans le texte du jeu.

## Répartition
- Auteur A : quêtes "0", "1", "2", "3"  → fichier 40-A.json
- Auteur B : quêtes "4", "5", "6", "7"  → 41-B.json, ET les répliques d'ambiance des 7 PNJ → 45-pnj.json :
  {"pnj":{"vera":{"dit":{"m5":"…","m2":"…","z":"…","p2":"…","p5":"…"}}, …}} (une réplique par bande de niveau : m5 = −7..−5, m2 = −4..−2, z = −1..+1, p2 = +2..+4, p5 = +5..+7 ; 180 caractères max ; ce que le PNJ dit quand on lui parle hors de la quête ; il ne dit rien qui contredise sa présence à ce palier).
- Auteur C : quêtes "-1", "-2", "-3", "-4" → 42-C.json
- Auteur D : quêtes "-5", "-6", "-7" → 43-D.json, ET le livre de la zone → 46-livre.json :
  {"titre":"…","auteur":"qui l'a écrit, une ligne","pages":[{"t":"…","txt":"≤ 600 car."}×4],"fin":{"m5":"…","m2":"…","z":"…","p2":"…","p5":"…"}} : le livre raconte CLAIREMENT l'histoire de départ (le canon), pas la suite.
Chaque auteur lit les quêtes voisines quand elles existent déjà dans le dossier, pour enchaîner (la fin de la quête n mène à la situation de la quête n±1).
