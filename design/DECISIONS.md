# MozaWorld : registre des décisions

Une ligne par décision de l'utilisateur, la plus récente en haut. Statuts : **en vigueur**, **provisoire** (accepté « pour l'instant »), **remplacée** (avec ce qui la remplace). Toute nouvelle décision s'ajoute ici le jour même, et `REGLES.md` est corrigé en même temps.

## Règles provisoires à revoir (revue chaque dimanche)

| Règle | Depuis | Ce qui manque pour trancher |
|---|---|---|
| Lot graphique 2.6 et zones +33 % | 18 nov. | Fluidité validée sur la Xbox (18 nov.) ; reste son avis sur le rendu |
| Pouvoirs de carte du monde des 6 Assemblées | 17 nov. | Les jouer |
| Gameplay du monde, lot 1 : hordes (5 cycles de colère, 3 de marche, cibles 2 à 3 paliers plus faibles), domaines dès 2 tuiles et leurs bonus, défense +2/+1/+2, rivaux (1 chance sur 6 par cycle, préavis 2 cycles, verrou contestable), reprise par l'empreinte en un palier | 19 nov. | Les jouer ; réglages proposés par l'équipe, pas encore tranchés par l'utilisateur |
| Plateau de combat (3 voies, avant/arrière, cases Girih à effet, Manœuvre, Sentinelle, soutien de l'arrière, plancher de capacité ; passes 4-8 du 20-21 nov. : renforts annoncés, chef dans sa voie, échauffement, renfort lourd, Sentinelle de relève) | 19-21 nov. | Le jouer sur la Xbox ; notes des testeurs à chaque passe (design/plateau/notes.md) **Non gardé comme combat du jeu** : « 1 non » à la revue des provisoires du 22 nov. ; candidat de remplacement : le champ en mosaïque de l'Arène (ligne « Combat : champ de bataille en mosaïque »). |
| Gameplay du monde, lot 2 : tours de guet (prix, portée, sans entretien), Comptoir des Citadelles (prix en tesselles, primes après combat, change tesselles contre mana), aménagement de chaque Donjon (2 dispositifs, bonus des voisines), épreuve des rivaux | 19 nov. | Les jouer ; les principes sont décidés, les chiffres sont ceux de l'équipe |
| Gameplay du monde, lot 3 : caravanes (gains, risques de pillage), lois du catalogue de onze et leurs chiffres, prix des pactes par maison, forces des vagues du siège | 19-20 nov. | Les jouer ; les six réglages posés le 20 nov. sont confirmés (« Oui à tout »), les autres chiffres restent ceux de l'équipe |
| Monde de 925 zones (347 Ressources, 249 Antres, 195 Assemblées, 90 Donjons, 44 Citadelles posés) au lieu des 986 de la liste | 20 nov. | Décidé « pour l'instant » ; à revoir après le 28 nov. (pavage) |
| Minimum de 4 cartes actives au paquet de combat (désactivation des cartes) | 22 nov. | Sans objet si les cartes sortent du jeu (direction du 27 nov.) |
| 5 Citadelles épiques de victoire | 16 nov. | Arriver à la fin de partie |
| Fin du monde après une victoire épique | 16 nov. | Arriver à la fin de partie |



## 27 novembre 2026 au soir (personnage à l'image du joueur, 2.51)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Héros | Le héros d'exploration ressemble au joueur, d'après ses photos : longs cheveux bruns, lunettes rondes, barbe grise au menton. Le chapeau pointu et la lanterne visible sont enlevés (« 3 b ») | en vigueur | le voyageur au chapeau pointu (17 nov.) |
| Tenue du héros | Combinaison rouge à boutons, tête nue (carte de choix) ; la tenue randonneur au chapeau de paille reste dans le code (`HEROS_TENUE='rando'`) | en vigueur | |
| Chienne | Sa chienne noir et blanc (liste et museau mouchetés, queue à bout blanc, bandana rouge) l'accompagne en exploration (« 4 oui ») ; elle part se promener de son bord, renifle, revient, repart (« elle doit partir de son bord, se promener, puis revenir et repartir ») ; elle sera sa monture plus tard | en vigueur | |
| Portrait | Un portrait peint du joueur pour les menus, en plus du héros 3D (« 2 a et b ») ; sa photo peut passer par un outil gratuit en ligne pour ça | à faire | |

## 28 novembre 2026 (nuit : réponses aux questions du nouveau cœur du jeu)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Arène | Mots de l'utilisateur (27 nov., note dans le plan) : « Fait un repo pour le mode arène pour un futur projet ». Lecture de Claude : l'Arène sera copiée dans un dépôt à part (à créer par l'utilisateur) ; elle reste dans ce dépôt d'ici là. | en vigueur | — |
| Place du joueur | « 1 a » : vous menez une faction et la faites grandir. | en vigueur | — |
| Rythme | Notes du 27 nov. (« On garde la promenade : Oui », lutrin = « une version du menu de la carte du monde ») : promenade en temps réel, plateau qui avance par cycles ; le lutrin est une version du menu de la carte du monde. | en vigueur | — |
| Cycles des factions | « 4. Je verrais une évolution par cycle. Toute les factions joues. Puis prochain cycle.... », puis « En même temps en ordre d'avance style diplomatie devrait aussi être regardé ». Lecture de Claude : à chaque cycle, chaque faction (la vôtre, les rivales, l'Ombre) fait son coup sur le plateau ; le prototype compare le tour par faction et les ordres simultanés façon Diplomatie. | en vigueur (forme à choisir au prototype) | Combats contre hordes et rivaux |
| Risque | « 5. Je te laisse voir si c'est encore pertinent ». Choix de Claude : le risque est de perdre des tuiles reprises par les autres factions ; plus de héros mortel ni de blessures. | provisoire (à vérifier au prototype) | Blessures et mort du héros (le jeu actuel les garde jusqu'à la bascule) |
| But | « 6 faire gagner ça faction avec pourquoi pas un mode infinie... » : faire gagner sa faction ; un mode sans fin en option. | en vigueur | — |
| Bascule d'une tuile | Note « Exactement » à « faire basculer des tuiles par ce qu'on fait dans la zone ». Lecture de Claude : 2c (action dans la zone, aidée par l'encerclement), à confirmer. | provisoire | — |

## 27 novembre 2026 (soir : le combat de cartes sort, cœur du jeu = gestion des tuiles)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Combat et cartes | Mots de l'utilisateur (27 nov., 17 h 17 à 17 h 42, Toronto) : « Le monde est bien. Pour le combat.... Il faut tout revoir je crois », « Il n'y a pas eu de fun lors de mes tests » ; dans le plan de refonte : « je me demande même si je veux encore un système de combats de carte.... Le monde est bon. La mosaïque génial. Je voudrais au final avoir un gameplay sur un beau plateau représentant les tuile et zone. Et le fun serait je crois la gestion des tuiles. L'interaction dans les zones pour changer la faction d'une tuile », place du combat : « Nope », rôle des cartes : « Plus de carte » ; puis « Je voudrais une belle interfaces. Pour jouer avec les tuile. Comme posée sur lutrin. Avec ses effets de verre. De magie... De synergie.... ». Lecture de Claude : plus de combat de cartes ni de cartes ; le cœur du jeu devient la gestion des tuiles et de leurs factions sur un plateau en mosaïque posé sur un lutrin (vitrail, magie, synergies visibles), en agissant dans les zones pour faire basculer une tuile de faction. Détails à trancher (7 questions) : https://claude.ai/artifact/KqiagaMogUDuc3czzBukNB | en vigueur (direction) ; le jeu ne change qu'après les étapes du plan et son OK | Plateau à 3 voies, champ en mosaïque de l'Arène, combat de cartes, paquet et cartes de palier |

## 27 novembre 2026 (décor des zones)

| Sujet | Décision | Statut | Version |
|---|---|---|---|
| Graphismes : ressemblance entre zones | Mots de l'utilisateur : « 1a ». Question posée le 26 nov. : la ressemblance entre zones (40 paires sur 84 au-dessus de 15 %) ne se corrige plus par des couleurs et demande de retoucher le décor des zones, ce qui sort du gel jusqu'au 28 ; a) attendre après le 28, b) faire une exception. Lecture du coordinateur : on attend ; la retouche du décor des zones se fera après le 28 nov., aucune exception au gel. | en vigueur | 2.50 (rien de changé) |

## 25 novembre 2026 (remparts et mondes générés)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Remparts dans le jeu | « C'est intéressant j'aime bien. Faudrait ajouter le rempart in game », puis « Graphiquement parlant » (25 nov., 00 h 35 UTC) : murs crénelés, tours et portes le long des frontières de chaque royaume, en 3D et sur la carte (2.47). Les règles du prototype « Relève ton rempart » (relever, greffer, garnison) ne sont pas dans le jeu | en vigueur (exception voulue au gel du 23 nov.) | « frontière tracée en rempart double » sur la carte (2.30) |
| Mondes générés | « Il faut en même temps intégrer le moteur de génération de mondes », « Une nouvelle partie demandera le type de rosace royaumes ou aléatoire », « s'il n'y a pas suffisamment de tuiles pour finir de paver le plan, mets une zone d'ombre détruite », « Assure-toi de repasser les générations et de garder les meilleures » ; réponses du 24 nov. au soir (Toronto) : « 1. Oui pour l'instant, bientôt ce sera au hasard » (cœur fixe au centre), « 2 oui » (départ = votre fleur entière, maisons dans leurs fleurs), « 3 oui » (banque de mondes pré-générés et notés). En jeu en 2.49 ; carte classique gardée au choix (choix de Claude, question sans réponse) | en vigueur (exception voulue au gel) | carte fixe de 925 zones jusqu'au 28 nov. (« 1 a », 20 nov.), pour les nouvelles parties ; garder la carte classique en secours : question posée |

## 25 novembre 2026 (factions)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Factions | « Assigner à chaque zone une faction, alignée sur les manas, plus une », puis « 1 ok. 2 parfait 3.a 4 a » (24 nov., 19 h 44 Toronto) : six factions de mana (Braisiers/Feu, Ordre du Socle/Pierre, Compagnie des Vents/Vent, Veille Blanche/Glace, Ligue des Marées/Eau, Cercle des Racines/Sève) + l'Ombre (le sauvage, zones d'ombre détruites) ; faction FIXE, d'après le mana de la zone ; affichage sur la carte d'abord (tv/src/factions.js, 2.46) ; « on va ajouter tout un gameplay autour » (après le 28) | en vigueur | — |
| Carte des factions | « Une interface sur la carte pour voir les factions, chaque zone avec la couleur et le sigle de la faction » : X fait tourner types, niveaux, factions sur la carte du monde ; fiche de zone avec sa faction | en vigueur (2.46) | — |
| Cartes et factions | « 2,3 et 4 » puis « A » (24 nov., 20 h Toronto) : avantage +50 % contre l'opposée / −25 % même faction + alliance (pioche), terrain de faction sur le champ en mosaïque, dans l'Arène d'abord (2.48) ; sceaux de faction (3, 6, 10 zones d'une faction → une carte, 21 cartes) à écrire | provisoire (chiffres) | — |
| Voisinages de factions | « Lors du placement des tuiles on mettra des tuiles de même faction plus naturellement ensemble. Certaines jamais coller » : roue Feu, Pierre, Vent, Glace, Eau, Sève ; même faction attirée, voisines sur la roue alliées, opposées jamais en contact (Feu-Glace, Pierre-Eau, Vent-Sève), l'Ombre touche tout ; pour le générateur de mondes. Sur la carte classique (925 zones), 379 contacts sur 2 346 sont entre factions opposées (tracés en rouge) | provisoire (couples opposés proposés par Claude) | — |

## 25 novembre 2026

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Critique littéraire | « Je trouve le critique pas assez critique... Ou pertinent » puis « Le littéraire aussi » : le critique des textes passe en v3 (design/equipe/critique_litteraire_v3.md, grille joueur / image / voix / forme / lisibilité / cohérence, refus sous 60, tableau de bord mesures_texte.py) | en vigueur | rapports lot-*/critique.md (notes de 77 à 87, aucun refus) |
| Critique littéraire | Grille recalée sur dix notes à l'aveugle de l'utilisateur (« Notes : 1=1 2=2 … ») : une histoire claire 30, tension 20, joueur 15, image 15, voix 10, voix haute 10 ; plus de points de cohérence ; recalage si la corrélation avec ses notes passe sous 0,6 | en vigueur | grille v3 du même jour |
## 24 novembre 2026 (musique)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Musique | Korobeïniki reste l'air de la Taïga de Kobor, même s'il fait penser à Tetris (chanson russe du domaine public) | en vigueur | |
| Musique | Aux niveaux extrêmes, on doit continuer de reconnaître les chansons : ajouter des instruments et des harmonies, sans déformer l'air (version 2.43.1) | en vigueur | passage en mineur, phrygien ou lydien et tempo ±31 % vers ±7 (17 nov.) |

## 23 novembre 2026 (musique)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Musique | Encore un peu plus d'harmonies à chaque niveau (version 2.42.7) | en vigueur | |
| Musique | « La musique est bonne » ; ajouter un peu de médiums et de graves (version 2.42.6) | en vigueur | |

## 22 novembre 2026 (revue des dix provisoires)

Réponses de l'utilisateur à la liste de dix réglages du dimanche 22 nov., point par point. Les autres provisoires sont gardés tels quels jusqu'après le 28.

| Sujet | Mots de l'utilisateur | Lecture retenue | Statut |
|---|---|---|---|
| 1. Plateau à trois voies comme combat du jeu | « 1 non » | Le Plateau à trois voies n'est pas gardé ; le champ en mosaïque où l'on déplace ses créatures est à l'essai dans l'Arène | remplace « Plateau, provisoire » (19 nov.) ; la suite se décide dans l'Arène |
| 2. Blessures façon Shadowrun, mort à la troisième défaite | « 2 ok » | Gardées | en vigueur |
| 3. Pièges du Donjon : un seul rythme d'entretien, sans choix au menu | « 3 oui » | Rythme par défaut gardé, choix retiré du menu | en vigueur (retrait du menu à faire dans le jeu) |
| 4. Maisons rivales : 1 chance sur 6 par cycle, pas avant le 10e cycle | « 4 ok pour l'instant on y reviendra » | Gardé | provisoire |
| 5. Zone contestée sans défense : la maison réussit 55 fois sur 100 | « 5 elle le prend », puis « 5 elle réussit 100 mais un délai pour intervenir » | Sans défense du joueur, la maison réussit à coup sûr ; le joueur garde un délai pour intervenir (lecture de Claude : le préavis actuel de 2 cycles entre l'annonce et l'échéance ; l'effet des protections, domaines, pièges et lois, reste à régler) | en vigueur (à faire dans le jeu) ; remplace les 55 sur 100 |
| 6. Hordes : arrivée 3 cycles après l'annonce | « 6 ok » | Gardé | en vigueur |
| 7. Zone tombée à 0 sous une horde : sauvage, reprise par l'empreinte en un palier sans combat | « 7 ok » | Gardé | en vigueur |
| 8. Caravanes : pillage 30 % près d'une horde, 15 % près d'une maison | « Plus grande. Faudrait des cas automatique », puis « 8 ok » à la proposition de Claude | 50 % par cycle près d'une horde, 25 % près d'une maison rivale ; pillage automatique quand la horde vise une zone du trajet (chiffres proposés par Claude, acceptés) | en vigueur (à faire dans le jeu) ; remplace 30 % et 15 % |
| 9. Siège final : trois vagues, 3 cycles, relance après 5 cycles | « 9 ok pour l'instant » | Gardé | provisoire |
| 10. Délai de 40 secondes avant de refaire évoluer une même zone | « 10 pour la beta non. Je dois pouvoir enchaîné les monter de compétences » | Plus de délai dans la bêta ; le délai d'un jour reste prévu pour le jeu complet | en vigueur (à retirer dans le jeu) ; remplace le délai raccourci à 40 s |

## 22 novembre 2026 (Kobor : PNJ et quêtes)

| Sujet | Décision | Statut | Version |
|---|---|---|---|
| Taïga de Kobor (zone pilote) | « Ce n'est qu'un habillage… Des PNJ et un système de quête à l'intérieur de la zone. Ce sera le résultat des quêtes qui déterminera l'évolution de la zone. Quêtes adultes, choix cornéliens. L'histoire est un charabia : refais-la. » Deux historiens (grands hommes) et un philosophe (cas moral), puis les quatre auteurs ; boucle critique + historien | en vigueur, Kobor seulement (pas généralisé sans accord) | 2.40 |
| Lecture validée (« 1 oui 2 oui ») | 1. Seule Kobor change, les autres zones gardent leurs scènes ; 2. on garde taïga, Glace, pôles Mensonge / Vérité, histoire réécrite de zéro | en vigueur | 2.40 |
| Forme des quêtes (« 3. ») | « L'épreuve devrait être un combat de cartes ou un choix de dialogue. Un arbre complexe de 3 à 8 étapes qui amène à la fin aux deux choix d'évolution de la zone. » Plus de mini-jeu d'épreuve à Kobor | en vigueur | 2.40 |
| Kobor, boucle critique + historien | Cinq tours : critique 64 → 80 → 87 → 91/100 (objectif 90 de l'utilisateur) ; philosophe 88/100, leçon apprenable dans les deux sens (se raviser coûte le knout dans les deux sens) ; entrées de quête selon le dernier choix (retour vers 0, remontée) ; plainte de Vera, double dîme de Gleb, Zverevo, Bogdan au fort avant les mines | en vigueur | 2.41 |

## 22 novembre 2026 (paquet modifiable)

| Sujet | Décision | Statut | Version |
|---|---|---|---|
| Paquet de combat : écran | « L'écran de visualisation du paquet ne permet pas de bien voir les cartes » : chaque carte en grand, texte entier, dans une grille qui s'adapte (télé, téléphone en paysage et en portrait), manette ou toucher | en vigueur | `src/paquet.js` |
| Paquet de combat : activer ou désactiver | « Je voudrais pouvoir éditer mon paquet en pouvant activer ou désactiver une carte » : A ou un toucher bascule la carte (toutes ses copies) ; une carte désactivée reste au paquet mais n'est plus piochée en combat (le duel d'Assemblée garde son paquet politique) ; sauvegardé avec la partie | en vigueur | `src/paquet.js` |
| Paquet de combat : garde-fou | Au moins 4 cartes actives (ou tout le paquet s'il est plus petit) | provisoire | `src/paquet.js` |

## 22 novembre 2026 (téléphone)

| Sujet | Décision | Statut | Version |
|---|---|---|---|
| Plateforme : téléphone | « On pourrait ajouter des commandes pour mon Pixel 9 Pro » : commandes tactiles (stick flottant à gauche, caméra au doigt à droite, sceaux A B X Y, carte, zoom, courir ; menus, cartes et cibles se touchent directement), en paysage, qualité « Équilibrée » par défaut. Rien ne change pour la Xbox ni le clavier | en vigueur | 2.34 |

## 22 novembre 2026 (annonces sobres)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Interface : annonces | « Enlève les affiches lors des montées de zone et autre, ça prend trop d'espace, restons plus sobre pour l'interface tout en gardant le style » : annonces en petit billet sous la barre du haut, fiche de zone seulement sur demande (RB) | en vigueur (2.42) | Le grand titre central avec coup de pinceau et sceau (2.31) |

## 21 novembre 2026 soir (interface « Carnet sombre »)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Combat : champ de bataille en mosaïque bord à bord, créatures à déplacer (retour de test : « 3 voies comme un Moba, sans aucun intérêt tactique ») ; à tester d'abord dans une Arène à part | 22 nov. | Le jouer dans l'Arène et dire ce qui manque | provisoire (à l'essai) | « Je veux pouvoir déplacer les créatures » ; carte de décision « Dans l'Arène d'abord » |
| Interface du Plateau (5 passes d'équipe, notes finales 8 / 7,5 / 8,5 / 8 sur 10) | 22 nov. | Le jouer sur la Xbox ; la Manœuvre « comme le placement » reste à faire en réglage | en vigueur | demande du 20 nov. « 5 passe avec l'équipe pour améliorer l'interface du gameplay » |
| Interface : style | Style « Carnet sombre » retenu sur maquette (« C'est bien mieux », puis « C'est bien ») : encre, parchemin usé et brûlé aux coins, sceaux de cire, jauges tordues, écriture à la main, touche lovecraftienne (yeux, notes) et coups de pinceau acrylique ; champ de bataille en damier de mosaïque collée (habillage du Plateau, sans changer ses règles) ; **pas de tentacules, pas de coulures**. Ordre choisi : exploration (2.31), puis combat, puis menu pause. | en vigueur (exploration en 2.31, le reste à venir) | L'interface dorée sur fond sombre (barre en îlots) |

## 21 novembre 2026 soir (carte du monde, royaumes)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Carte du monde : royaumes | « Une carte mosaïque plus belle où chaque royaume est bien dessiné, des zones bien délimitées dans le chaos d'une mosaïque aléatoire » ; à la question du sens de « royaumes », réponse « 1 » : les royaumes sont les territoires des joueurs (le vôtre et ceux des quatre maisons rivales), qui changent pendant la partie, pas des royaumes fixes en décor | en vigueur (2.30) : sauvage sombre à entrelacs Girih, royaumes à leurs couleurs avec frontière en rempart, nom et blason ; minicarte au même style | carte du monde colorée par type (2.24) |

## 20 novembre 2026 (minicarte)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Minicarte | « Améliore encore la minimap pour qu'elle soit plus jolie et pratique » : médaillon rond centré sur le héros et zoom à trois crans, plus une carte du monde complète (Vue ou C) d'où l'on voyage | en vigueur : rotation avec la caméra confirmée par l'utilisateur le 20 nov. (« Oui » à la recommandation de garder la rotation, lecture du coordinateur) ; couleurs par type | minicarte carrée de toute la région (2.4) ; Vue = liste de voyage |

## 20 novembre 2026 (deuxième passe de cohérence, « A partout »)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Gameplay du monde | D'ici le 28 nov., hordes, rivaux, domaines, caravanes, lois, pacte et siège restent dans la région de départ ; un test qui voyage entre régions vérifie que rien ne se perd (`tv/tools/test-voyage.js`) | en vigueur | |
| Gel | Plus de nouveau système à partir du 23 nov. ; du 23 au 28 on joue, on corrige et on règle. Les zones à écrire et les images des cartes continuent (contenu) | en vigueur | |
| Provisoires | Dimanche 22 nov., une liste courte des dix réglages qui comptent, à trancher par oui ou non ; les autres sont gardés tels quels jusqu'après le 28 | en vigueur | revue de tous les provisoires un par un |
| Tests | Les tests du monde tournent tout seuls chaque nuit et à la demande (`.github/workflows/tests-monde.yml`) | en vigueur | tests du monde lancés à la main |
| Plan | Le plan de travail est réécrit en plan de fin, jour par jour jusqu'au 28 nov. | en vigueur | plan en trois jalons du 17 nov. |

## 20 novembre 2026 (zones en série)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Zones | Option 1 choisie : le monde entier est posé, ~580 zones jouables le 28 nov. (383 Ressources + ~200 zones à cartes), les autres visibles mais scellées jusqu'en décembre ; pas de zones au rabais | en vigueur | |
| Monde | Chargement par régions de 1,7 km (voyage = sauvegarde et recomposition), choix technique de Claude pour tenir sur la Xbox | en vigueur | toutes les zones construites au démarrage |
| Taille du monde | « 1 a » (20 nov., 15 h 45 UTC) : on garde 925 zones et 88 Donjons pour l'instant (le pavage n'a pas pu être agrandi) et on finit d'écrire les zones ; pas de travail sur le pavage avant le 28 nov. | en vigueur | but de 986 zones et 130 Donjons |

## 19 novembre 2026 (gameplay du monde, réponses de l'utilisateur)

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Maisons rivales, contestation | Sans défense la maison réussit à coup sûr, 3 cycles pour intervenir ; réussie, elle PREND la zone (palier gardé ; au plafond, la zone redevient sauvage avec votre empreinte) | en vigueur (22 nov., « 5 elle le prend », « elle réussit 100 mais un délai pour intervenir », puis « 2 ») | 55 %, 2 cycles, la zone perdait un palier |
| Citadelles épiques | Tirées une fois pour toute la carte (graine), Berestograd jamais épique : elle reste au jeu contre le monde sauvage (« non, elle devrait être gardée pour le PvE », puis carte : « Berestograd hors des épiques ») | en vigueur (22 nov.) | 5 tirées parmi les Citadelles de la région chargée ; puis Berestograd toujours comprise (20 nov., provisoire) |
| Lot 3, réglages | Prix du pacte au moins le quart du revenu, qui suit ce quart ; 3e vague du siège au-dessus de la défense (combat obligatoire) ; Fossés, Guet, Greniers et Feux trompeurs sans effet sur les vagues ; une vague en marche menace les caravanes ; vengeance d'un pacte rompu hors Couvre-feu ; on peut rester dans le monde après la victoire | en vigueur (20 nov., « Oui à tout ») | |
| Hordes | Une horde ne vise que les zones plus faibles de 2 ou 3 paliers | en vigueur | |
| Hordes | Une zone à vous qui tombe à 0 sous une horde redevient sauvage (« Non » à « elle reste à vous ») ; elle garde votre empreinte (« Bonne idée », 19 nov.) | en vigueur | « reste à vous » (essai du 19 nov.) |
| Rivaux | Un rival ne prend pas une zone sauvage sans rien faire : il doit réussir une épreuve annoncée et visible | en vigueur | prise sans combat (essai du 19 nov.) |
| Empreinte | Reprendre une ancienne zone en réussissant un seul palier | en vigueur | |
| Domaines | Un domaine compte dès 2 tuiles sur la petite carte, 3 sur la grande | en vigueur | |
| Verrous | Le verrou de Citadelle empêche les prises des rivaux, pas leurs contestations | en vigueur | |
| Tesselles | Primes gardées (horde brisée 5, rival repoussé 4) ; change de 4 tesselles contre 1 mana gardé | en vigueur | |
| Tours de guet | Pas d'entretien en mana pour l'instant | en vigueur | |
| Lot 3 | Les quatre idées : caravanes (4), pacte avec une maison (5), siège final d'une Citadelle épique (6), pouvoirs des Assemblées (7) (« Oui à tout », « Les deux ») | en vigueur (en ligne, PR 61) | |
| Lot 2 | Tours de guet (7), commerce en Citadelle avec les tesselles (9), aménager chaque Donjon possédé (10) | en vigueur (en ligne, PR 55) | |

## 19 novembre 2026

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Choix moraux | « Oui à tout », lot 2 des scénarios : le Puits des Neuf Édits, le Canyon de Fjorhel, l'Oasis de Raak, les Cavernes de Balpak | en vigueur | |
| Choix moraux | Continuer les scénarios sur d'autres zones sans attendre le verdict sur Kobor (testé ce week-end) : lot 1 = Berestograd, l'Oasis de Maulu, le Fjord de Rames | en vigueur | |
| Livres | « Ajoute également des livres à laisser dans les zones, racontant l'histoire de la zone » : un livre par zone non Ressource (4 pages + dernière page selon le niveau) ; Ressources sans livre pour l'instant (design simple) | en vigueur (2.11) | rien |
| Livres | « Ajoute également des livres à laisser dans les zones, racontant l'histoire de la zone » : un livre par zone non Ressource (4 pages + dernière page selon le niveau) ; Ressources sans livre (design simple), confirmé par l'utilisateur le 19 nov. (« Ressources sans livre ») | en vigueur (2.11) | rien |
| Graphismes | Équipe graphique en boucles quotidiennes jusqu'à l'échéance (~28 nov.) : critique, direction artistique, rendu et performance, producteur, artisans, testeur-juge ; ce que le testeur accepte est fusionné sans attendre l'utilisateur | en vigueur | |
| Inscriptions | « Ajouts de texte et d'inscription pour enrichir chaque zone non ressources » : 4 objets écrits par Antre, Assemblée, Donjon et Citadelle, texte du conteur de la zone qui change en 5 bandes de niveau ; Ressources exclues | en vigueur (2.9) | rien |
| Combat | « Un plateau de bataille relativement petit, en mosaïque », placement défensif des créatures, équipe de 4 testeurs (fonctionnel, joueur de cartes à échanges, joueur de défense par étages, joueur tactique généraliste) qui notent chaque passe : le Plateau (3 voies × avant/arrière) agrandit le Nœud ; la Garde passe devant le héros, derrière les voies | provisoire | le Nœud à 2 voies (17 nov.) |
| Échéance | « Il faut tout terminer d'ici 10 jours » ; appliquer chaque lot une fois les tests acceptés par l'équipe | en vigueur | rien |

## 18 novembre 2026

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Départ | Plus de cartes communes (« me pue au nez ») : les 12 zones du territoire de départ sont à vous dès le début, au niveau 1, pôle tiré au hasard pour chaque zone ; le paquet de départ = leurs 6 cartes de palier 1 | en vigueur | 5 communes toutes différentes (17 nov.), départ au niveau 0 à conquérir |
| Équilibrage | Après les tests (≈ 300 combats simulés) : on garde le début plus facile qu'avant (6 vraies cartes, territoire facile) ; zones de bordure à ±6 pour garder l'écart mortel ; 15 cartes toujours nécessaires pour ouvrir les zones scellées | en vigueur (« Oui à tout ») | bordure à ±5 |
| Mort | L'héritier reçoit de nouveau le territoire de départ au niveau 1 (pôles retirés) avec ses cartes de palier 1 ; les autres zones redeviennent sauvages | en vigueur (« Oui à tout », 18 nov.) | repartir avec les 5 communes |
| Choix moraux | Chaque zone a un scénario en 15 marches (−7 à +7) écrit par son conteur. À chaque éveil, une scène pose un dilemme : une réponse enfonce la zone d'un palier dans son pôle, l'autre la ramène d'un palier vers l'autre pôle ; chaque réponse a un prix (annoncé ou caché) et mène à une épreuve qui colle à l'histoire | en vigueur (Kobor seule, soir 1 sur 3) | menu « Palier +1 / −1 » |
| Choix moraux | Une parole donnée reste donnée : si l'épreuve échoue, on la retente sans rechoisir | en vigueur | |
| Choix moraux | Paliers 3 et 6 sans choix (respirations), pour rester à environ 7 choix sur 10 ; se raviser ne donne pas de carte | en vigueur | |
| Choix moraux | Le ton de la Taïga de Kobor (familles déportées, hameau rasé, inspecteur enfermé vivant) est le bon niveau de dur pour adultes | en vigueur | |
| Choix moraux | Coder Kobor en 3 soirs (scène, épreuve habillée, traces) avant d'écrire les autres zones | en vigueur | |
| Narration | Textes des scènes en français, lus par une voix d'homme et une voix de femme françaises de base (Piper : Tom et Siwis), gratuites ; pas d'anglais, pas d'accent québécois pour l'instant | en vigueur (pas encore dans le jeu) | |
| Graphismes | Suite du lot graphique (« Tout oui ») : décors par pôle sur les zones d'origine, exploration épurée (RB ou Tab pour l'interface complète), monde animé (vent, braises et lucioles, créatures qui errent) ; les cartes des 48 secrets des lieux attendent | en vigueur | |
| Graphismes | Essai de la 2.6 sur la Xbox : « C'est fluide » | en vigueur | |
| Méthode | Les PR sont fusionnées par le fil qui les a faites dès qu'elles sont prêtes (test de fumée passé), sans attendre l'utilisateur | en vigueur | fusion par l'utilisateur |
| Graphismes | Lot 2.6 tiré de l'évaluation graphique (idées 6, 1 et 8 recommandées, lancées en attendant le choix de l'utilisateur) : combat animé, décors par pôle, zones agrandies d'un tiers avec trois lieux par tuile | provisoire | |
| Zones | Arête des tuiles 400 m (zones +33 %) à la demande « zones plus grandes » | provisoire | arête 300 m (17 nov.) |

## 17 novembre 2026

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Musique | Musique MIDI par zone : classique du domaine public, comptines populaires et airs originaux style 16 bits, remixés par zone ; on ajoute des accords et des couches à la trame à chaque palier vers ±7 | en vigueur | notes générées au hasard par type de tuile |
| Assemblée | Épreuve = Duel d'arguments avec un petit paquet politique à part (choix 2 sur 3) : 5 cartes communes + une carte de voix par type de tuile tenue ; vote des voisines avant le duel | en vigueur | le Chantier de la Foire (hérité du Marché) |
| Méthode | Lots du soir de trois nouveautés au plus, verdict après test (garder, ajuster, retirer), revue des provisoires chaque dimanche | en vigueur | « une livraison et trois questions par soir » (16 nov.) |
| Juges | Juge visuel des zones (80 %) suspendu tant que le jeu est la version web ; le critique reste pour les textes et les cartes | en vigueur | jugement de toute nouvelle zone (10 nov.) |
| Méthode | Test automatique avant chaque fusion, numéro de version affiché, document « Règles en vigueur » et ce registre | en vigueur | |
| Gerbes | Retirées du jeu et du Grimoire ; textes gardés pour de futurs atouts | en vigueur | une Gerbe par Ressource (17 nov., après-midi) |
| Paquet | La forge du paquet en Citadelle est gardée pour plus tard | en vigueur | |
| Assemblée | Cible : duel d'arguments et votes, en plus des pouvoirs de carte du monde ; le Chantier hérité du Marché est à remplacer | en vigueur | |
| Remparts | Un rempart naît d'une route entre deux Citadelles, ou entre une Citadelle et un Donjon | en vigueur | voisinage simple (17 nov., 20 h 50) |
| Blessures | Prototype façon Shadowrun joué deux ou trois soirs, puis un seul système ; cartes en chiffres d'ici là | provisoire | |
| Cartes | Une seule sorte de carte : la carte de combat par palier ; la « carte de pouvoir » est retirée | en vigueur | carte de pouvoir Mineure, Majeure, Ultime (15 nov.) |
| Plateforme | La version web est le jeu pour l'instant ; Unreal reste la dernière étape | en vigueur | « banc d'essai avant Unreal » (15-16 nov.) |
| Assemblées | Un pouvoir sur la carte du monde par Assemblée (6 écrits) | provisoire | |
| Antres | Un passif de combat par Antre et par pôle : « chaque zone est unique, maximiser les bonus » | en vigueur | |
| Départ | Territoire de départ de 12 tuiles au niveau 0 (1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée, 6 Ressources) | en vigueur | 5 à 7 tuiles, puis 9 (même jour) |
| Combat | Champ de bataille « le Nœud » ; rempart aussi entre Citadelle et Donjon | en vigueur | |
| Combat | Passifs du royaume : Citadelle endurance et Garde levée, Donjon résistance et piège | en vigueur | |
| Monde | Zones au-delà du départ : pôle et palier au hasard ; mort assurée à +5 d'écart ; boss standard à chaque palier | en vigueur | un boss propre à chaque zone au niveau 5 (proposition) |
| Routes | Sur une route, pas de rencontre, sauf Citadelle ou rempart adverse actif | en vigueur | |
| Ressources | Les Ressources ne donnent pas de carte | en vigueur | carte d'équipement de la Ressource (16 nov.) |
| Combat | « Bloqueurs sur le terrain » : la Garde devient une unité ; chaque carte doit avoir un impact et un crochet de combo | en vigueur | |
| Départ | 5 cartes communes toutes différentes | remplacée (18 nov. : territoire de départ donné au niveau 1, plus de communes) | 10 communes (16 nov.), 8 cartes (15 nov.) |
| Plateforme | Arrêt de la version Google TV et des APK ; jeu sur la page web, Edge sur Xbox Series S, manette | en vigueur | version télé Bravia (15 nov.) |
| Cartes | Une carte distincte par palier ; palier 7 qui change de nature, avec combos (résonances) ; secrets = cartes utilitaires ; cartes différentes par pôle, liées à l'histoire | en vigueur | |
| Cartes | Cartes gagnées seulement aux montées de palier, jamais après un combat | en vigueur | carte après victoire (16 nov.) |
| Contenu | De nouvelles zones chaque jour, environ 50 tuiles, la majorité d'ici le dimanche 22 novembre | en vigueur | |
| Mana | Mana gris de base infini, effet 25 % plus faible ; réserve par type ; capacité de dépense +1 par tour commune ; boosts très rares ; communes payables avec tout type | en vigueur (communes retirées le 18 nov.) | réserve unique et mise de départ (16 nov.) |
| Interface | Un minimum d'art dans les cartes et l'écran de combat ; déplacement plus rapide | en vigueur | « la beauté n'est pas une priorité » (16 nov.) |

## 16 novembre 2026

| Sujet | Décision | Statut | Remplace |
|---|---|---|---|
| Pôles | −7 n'est pas mauvais ni +7 bon : deux pôles qui évoluent ; les 30 axes de pôles sont gardés | en vigueur | |
| Zones | Liste des 986 régénérée : 383 Ressources, 246 Antres, 182 Assemblées, 130 Donjons, 45 Citadelles ; monde tiré au hasard | en vigueur | 340 / 220 / 180 / 140 / 106 (9 nov.) |
| Mana | Six types de mana, un par famille de biomes | en vigueur | |
| Monnaie | La tesselle, séparée du mana | en vigueur | |
| Épreuves | Environ 70 % de choix moraux cornéliens, durs mais justes ; ils restent après la mort | en vigueur | |
| Assemblée | Le losange est l'Assemblée politique ; le commerce passe dans les Citadelles | en vigueur | Losange = Marché (9 nov.) |
| Donjon | Un Donjon conquis s'aménage ; le mana paie les pièges ; hordes et rivaux doivent le vaincre | en vigueur | |
| Routes | « Les routes forgent les pouvoirs » : l'atout du niveau 3 d'une Ressource se greffe par la route | en vigueur | route de toute zone à ±2 (9 nov.) |
| Ressources | Source du mana ; niveaux 0 à 3 sans pôle ; 1, puis 2, puis 2 mana et un atout au choix | en vigueur | |
| Citadelles | 45, chacune avec son style graphique ; 5 épiques de victoire | provisoire pour les 5 épiques | |
| Paquet | Le paquet se forge dans les Citadelles, 15 à 40 cartes | remplacée en partie | voir 17 nov. : 15 = seuil de sortie du départ, forge pour plus tard |
| Mana | Réserve unique avec entretien et mise de départ | remplacée | voir 17 nov. |
| Combat | Tour par tour avec cartes ; règles du jeu d'abord, en prototypes simples | en vigueur | |
| Style | Un style de rendu vraiment différent par tuile, surtout les grosses | en vigueur | |
| PC ZEUS | Pas de date ; le jeu doit être plus abouti avant | en vigueur | |

## 9 au 15 novembre 2026

| Date | Sujet | Décision | Statut |
|---|---|---|---|
| 15 nov. | Plateforme | Version pour la télé Bravia, banc d'essai des règles | remplacée (17 nov.) |
| 12 nov. | Adversaire | Le monde sauvage est l'adversaire ; quatre rivaux secondaires | en vigueur |
| 12 nov. | Zones | Chaque zone est une rareté, « comme une carte de Magic rare » ; pas de zones au rabais | en vigueur |
| 12 nov. | Mort | On perd tout ; les zones redeviennent sauvages en gardant leur niveau ; empreinte pour l'ancien maître | en vigueur |
| 12 nov. | Guerre | Les zones à ±7 envahissent ; souvent un seul pôle envahit, l'autre donne un pouvoir plus fort | en vigueur |
| 12 nov. | Mosaïque | Elle pave tout le plan, sans trou ; contrôle de zones « un peu comme le Go » ; route entre deux Citadelles = rempart | en vigueur (rempart confirmé le 17 nov.) |
| 12 nov. | Évolution | Bonds de +1 avec un gros changement ; délai avant de refaire évoluer une même zone ; relief qui change surtout à la mue | en vigueur |
| 12 nov. | Règle des 15 % | Une incitation à faire de belles zones au style propre, pas un chiffre strict | en vigueur |
| 12 nov. | Budget | Gratuit seulement ; tout achat se demande | en vigueur |
| 10 nov. | Moteur | Unreal Engine 5 | en vigueur (dernière étape) |
| 10 nov. | Juge | Chaque zone jugée à 80 % au moins par un juge « level designer » | suspendue (17 nov.) |
| 9 nov. | Base | Carte aléatoire, solo d'abord, vue à la troisième personne, visuels et musique générés par IA | en vigueur |
| 9 nov. | Mort | Trois blessures avant la mort | en vigueur (prototype Shadowrun en test) |
| 9 nov. | Difficulté | Paliers 6 et 7 beaucoup plus durs ; bonus à la prise de risque | en vigueur |
| 9 nov. | Équipe | Quatre conteurs et un critique ; 12 races originales ; 5 règles du critique | en vigueur |
