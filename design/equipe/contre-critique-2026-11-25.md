# Contre-critique du 25 nov. 2026 : le critique v3 relit dix zones déjà acceptées

*Essai de la fiche `critique_litteraire_v3.md` sur dix zones des lots 1 à 13 : les cinq que l'ancien critique a le mieux notées (86 et 87) et cinq tirées au hasard. Tableau de bord : `python3 design/equipe/mesures_texte.py`, sur les 566 zones à cartes.*

## Verdict

**Les dix zones avaient 83,3 de moyenne (écart type 3,0) ; elles ont 68 avec la v3 (écart type 8,7). Trois sont renvoyées à l'écriture (sous 60), dont deux que l'ancien critique avait acceptées sans correction de texte.** Les meilleures restent les meilleures (l'Alcázar de Benarrúz est première dans les deux cas), mais la note sépare enfin une zone qu'on citerait d'une zone qu'on oublie.

## Les trois défauts systémiques

**1. Le joueur est absent des récits.** 13 % seulement des 566 récits donnent une place à celui qui arrive (« vous », un étranger, « quiconque »). Les récits racontent une fable close : on sait ce qui est arrivé à Kléonikè, pas ce qu'on vient faire chez elle. Et dans le jeu web, le récit n'est affiché nulle part (vérifié dans `tv/src` le 25 nov. : il est chargé dans `Z.info.recit`, jamais montré). Ce que le joueur lit, ce sont les cinq phrases `pal`, en entrant dans la zone ou en changeant de palier.
*Consigne :* chaque récit se termine sur une prise pour le joueur : ce qui attend celui qui arrive, ou ce qu'il pourrait faire. Exemple ci-dessous pour les Fours de Thermokleia.

**2. Un seul gabarit pour presque tout.** Un personnage nommé, une coutume, quelqu'un qui s'en écarte, une conséquence, une chute ironique. 37 % des récits finissent sur une phrase de 10 mots ou moins ; trois des cinq zones les mieux notées de A suivent la même recette (la version officielle contredite par un objet : Kaldbrekka, le Col numéroté, et la saga qui ment). L'ancien critique interdisait des mots (« tiède », « quarante ») sans jamais nommer la recette.
*Consigne :* au plus un récit sur trois par conteur et par lot sur ce gabarit. Les autres formes possibles : une scène au présent, un dialogue, une règle énoncée (C), une liste d'objets (B), un témoignage qui ne finit pas (D), une adresse directe au joueur.

**3. Les voix ont fondu.** Un test d'attribution par le style ne retrouve le bon conteur que 45 fois sur 100 (25 au hasard ; seuil visé : 70). B, censé être l'optimiste qui aime l'économie et les explorateurs, écrit des fins aussi amères que A (le Relais de Sharga-Bulag, le Chapelet de corail de Sant Lèbre). L'ancien critique concluait pourtant que « la voix des quatre conteurs a tenu treize lots ».
*Consigne :* chaque récit de B finit sur un gain, un départ ou une découverte, même payés cher ; chaque récit de C contient une règle que le joueur pourrait vérifier ; chaque récit de D garde une chose inexpliquée.

Autre point à surveiller : 18 % des récits ont 4 noms propres ou plus, ce qui passe mal en narration à voix haute (« les ah kuch kab », « Chak Ek' »).

## Notes par zone

Sous-notes : Joueur /25, Image propre /20, Voix /15, Forme /15, Lisibilité /15, Cohérence /10.

| Zone | Conteur | Avant | v3 | J | I | V | F | L | C | Phrase la plus faible | Réécriture proposée | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DON081 L'Alcázar gelé de Benarrúz | D | 86 | **82** | 14 | 20 | 14 | 13 | 11 | 10 | « Deux voyageurs ont hiverné dans l'alcázar de Benarrúz, debout au milieu de la toundra. » (qui est debout ?) | « Au milieu de la toundra se dresse l'alcázar de Benarrúz. Deux voyageurs y ont passé l'hiver, et ne racontent pas le même. » | La meilleure : le mélange andalou et toundra **sert** le pôle Mensonge/Vérité. Manque seulement ce que le joueur y cherche. |
| DON082 Les Soupiraux d'Érikeia | C | 86 | **75** | 17 | 17 | 11 | 10 | 12 | 8 | « Mavros a gravé un seul mot sur la margelle du puits principal : écoute. » (chute d'horreur, territoire de D) | « Sur la margelle, Mavros a gravé l'ordre des dalles : deux ouvertes, une fermée. Personne n'a encore osé l'essayer. » | Bonne mécanique (on ouvre et ferme la mine), mais la fin cède le jeu de C pour un frisson convenu. Le grisou se devine dès « brûlaient bleu ». |
| ANT192 L'Aire de Kaldbrekka | A | 86 | **74** | 14 | 18 | 13 | 10 | 10 | 9 | « Le scalde précise qu'aucun homme ne tomba jamais de la falaise. » (annonce la chute) | Supprimer la phrase : les sangles suffisent. | La plus belle image de A (les sangles comme des manteaux), affaiblie par la phrase qui l'explique d'avance. « Mue » (la volière des faucons) n'est pas compris à l'oral. |
| DON030 Les Fours de Thermokleia | A | 87 | **73** | 15 | 15 | 13 | 9 | 12 | 9 | « L'hiver suivant, le foyer commun s'éteignit : personne d'autre ne savait cuire les briques du fourneau. » (morale attendue) | « Le foyer de la place est froid depuis. Il faudrait que quelqu'un descende la chercher. » | Les tessons nominatifs sont l'ostracisme athénien presque tel quel. La morale de l'indispensable banni se devine ; la réécriture donne au joueur sa raison de descendre. |
| CIT010 Shüüs-Aral, l'Île aux Gourdes | C | 80 | **72** | 15 | 18 | 13 | 11 | 7 | 8 | « chaque gourde remplie fait descendre l'île d'une main » | « Plus on boit la sève des bouleaux, plus l'île descend : Tsogt la tient haute à une portée d'arc, et personne ne boit. » | Image forte et vraie règle de C, mais il faut la calculer pour comprendre pourquoi le sang des chevaux sauve l'île. À l'oral, on décroche. |
| ASS177 L'Ukkin de Larsabba | D | 79 | **69** | 12 | 17 | 13 | 12 | 6 | 9 | Le récit coupé en pleine phrase (« et les roseaux de la rive ») | Finir la phrase par une chose qui manque : « … et les roseaux de la rive ont voté avec elle. » | L'assemblée qui vote le silence de la chanteuse est juste pour une Assemblée. Mais une phrase coupée, lue par la narration, sonne comme un bug. |
| CIT016 Dezh-Saravand, le Col numéroté | A | 86 | **67** | 13 | 15 | 13 | 10 | 7 | 9 | « On la retrouve des deux côtés : dans le mur, et dans les frondes. » (illisible sans relire) | « Quand la garnison démonta le rempart pour en faire des pierres de fronde, la chèvre de Bahrouz changea de camp avec elles. » | Citation dans la citation, puis une énigme que le joueur ne décode pas en passant. Encore la recette « officiel contre réel » de A. |
| ANT001 Le Relais de Sharga-Bulag | B | 82 | **57** | 8 | 13 | 9 | 9 | 12 | 6 | « Au relais suivant, un cavalier à la tablette d'argent passe sans même s'arrêter : quatre chevaux usés avant midi. » | « Au relais suivant, les loups m'attendaient : ils ont appris que les bêtes qu'on ne paie pas finissent sur la piste. » | **Renvoyée.** Un Antre sans antre : les loups passent en arrière-plan, rien à affronter ni à gagner. Énième carnet de B (7 récits ouvrent ainsi), et une fin amère que B n'est pas censé écrire. |
| ASS072 Les Ah Kuch Kab de Kaxtunil | B | 81 | **57** | 10 | 16 | 9 | 10 | 6 | 6 | « À Kaxtunil, le solstice d'hiver se nourrit de sang royal, sur une bande d'écorce de bouleau que les ah kuch kab brûlent avec le copal. » | « À Kaxtunil, au solstice d'hiver, le jeune roi doit saigner sur une bande d'écorce que le conseil des Gardiens brûle avec l'encens. » | **Renvoyée.** Belle idée (la sève rouge de l'aulne à la place du sang royal), mais quatre noms imprononçables, une cour maya dans une taïga sans un mot d'explication, et une Assemblée où le conseil ne délibère jamais. Rien de B (ni marché ni exploration). |
| ANT194 Ukkusiksalik, le Troc des Perles | A | 80 | **54** | 8 | 11 | 12 | 7 | 9 | 7 | « Les lampes du comptoir se paient en peaux, et Kaujak a les plus belles perles de l'archipel. » | Couper la chute et donner sa bête à l'Antre : « Les morses dorment contre les lampes éteintes, et Kaujak ne sait plus les tailler. » | **Renvoyée.** L'ancien critique écrivait lui-même « la chute se devine » et donnait 80. Perles de verre contre artisanat : un cliché du troc colonial. Antre sans bête dans le récit. |

## Ce qui marche (trois citations)

- « Ils s'accordent sur les azulejos du patio : il en manquait un par rangée, et chaque matin, un autre. » (DON081) : un détail vérifiable qui rend les deux versions vraies à la fois. C'est exactement le pôle Mensonge/Vérité, sans le nommer.
- « …accrochées comme des manteaux qu'on reviendra chercher. » (ANT192) : la mort dite par un objet et une attente, jamais par le mot.
- « Au printemps, on entailla les bouleaux, et l'on fit boire la sève aux chevaux. » (CIT010) : la dette rendue en un geste, sans morale.

## Validateur

Hors de cette relecture : les dix zones ont passé le validateur commun à leur lot.

## Consignes pour la suite

1. Lancer `mesures_texte.py` avant chaque lecture et recopier ses lignes ROUGES en tête du rapport.
2. Chaque récit finit sur une prise pour le joueur.
3. Un récit sur trois au plus sur le gabarit maison, par conteur et par lot.
4. Trois noms propres au plus par récit, prononçables par la narration française.
5. Un Antre a sa bête dans le récit ; une Assemblée a sa délibération ; une Citadelle a ce qu'on y garde ; un Donjon a ce qu'on y force.
