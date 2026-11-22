# MozaWorld, version jouable (page web, Edge sur Xbox Series S)

> **État au 20 novembre 2026 : version 2.24.** Depuis le 17 : les 5 cartes communes sont retirées (départ avec 12 zones à vous), le combat se joue sur le Plateau (le Nœud est l'ancien terrain), le monde compte 925 zones chargées par régions. Les règles en vigueur sont dans `design/REGLES.md`.
>
> **Rappel du 17 novembre.** La version Google TV / Bravia est arrêtée : on ne livre plus d'APK. Le jeu se joue sur la page web (GitHub Pages, qui suit la branche main), dans Edge sur Xbox Series S, à la manette. Le dossier s'appelle encore `tv/` pour des raisons d'historique.
>
> Ce fichier est un journal de versions, **pas dans l'ordre** : chaque section décrit le jeu à sa date. Sont remplacés par des sections plus récentes : le Marché (Givrecloche est une Assemblée), les 8 puis 10 cartes de départ (5 communes toutes différentes), les 2 mana par tour (capacité de dépense de 1, 2, 3… et réserves par type), les Gerbes (les Ressources ne donnent plus de carte), tout ce qui parle d'APK. Les règles en vigueur du combat sont dans `design/cartes-2.2/regles-avancees.md`.

## Version 2.30 : la carte enluminée, royaumes bien délimités (22 novembre, `src/minicarte.js`)
Demande : « une carte mosaïque plus belle où chaque royaume est bien dessiné, des zones bien délimitées dans le chaos d'une mosaïque aléatoire ».
- Le sauvage devient une mosaïque sombre, gravée d'entrelacs Girih en bronze pâle (cordes en étoile entre les milieux des côtés : décagone {10/3}, pentagone et hexagone {n/2}, losange {4/1}, papillon noué au centre).
- Chaque royaume (le vôtre en or champagne, chaque maison rivale à ses couleurs) est rempli à ses couleurs, avec un entrelacs doré, et sa frontière est tracée en rempart double (filet sombre, trait de couleur, liseré clair) ; le vôtre a un halo d'or.
- Nom et blason de chaque royaume d'au moins 3 tuiles d'un seul tenant, au centre, quand on dézoome (de près, les noms des zones prennent le relais). Cadre doré à rosaces autour de la carte.
- La minicarte reprend les mêmes royaumes et frontières, sans noms ni halo (elle est redessinée à chaque image). X (couleurs des niveaux) garde l'ancien rendu.
- Coût : les arêtes partagées du monde (5 246) sont calculées une fois ; aucune image ni texture en plus. Captures : `node tv/tools/capture-carte.js <dossier>` (royaumes simulés en milieu de partie).

## Version 2.29 : plantages sur Xbox, mémoire (21-22 novembre, `src/memoire.js`)
Symptôme rapporté : écran noir « comme un plantage d'Edge », en marchant ou pendant une mue, vers 10 minutes de jeu, parfois en changeant la qualité d'image.
Mesures (banc `tv/tools/test-endurance.js`) : une région pesait ~700 Mo dans le navigateur, dont un sol d'un million de sommets ; rien ne grossissait sans fin, mais chaque voyage recharge la page.
- Avant chaque rechargement (voyage, sauvegarde chargée), la mémoire de la carte graphique est rendue tout de suite.
- Contexte WebGL perdu (écran noir) : la partie est enregistrée et la région rechargée au même endroit, avec un message.
- Sur Xbox (ou `?xbox=1`) : maille du sol 5,4 m au lieu de 4,2 (40 % de sommets en moins), anticrénelage ×2 au lieu de ×4 en Belle, et aucun multiéchantillon en Splendide (FXAA seul, image de rendu ~120 Mo → ~25 Mo : l'écran noir revenait surtout en Splendide).
- L'index de la grande maille du sol (inutile depuis les carreaux) est libéré : ~25 Mo en mémoire et autant sur la carte graphique.
- Fluide : la carte d'ombre est rendue à la mémoire, sans changer l'état d'éclairage des shaders.
- Bêtes errantes réutilisées (elles perdaient une dizaine de géométries par zone), chariots et tours libérés.
- Hordes : le bouton « Aller » n’est plus proposé vers une zone hors région (le reste corrigé en 2.27.2).
- Journal : si la page s'est fermée brutalement, le jeu le dit au démarrage suivant (moment, zone, minutes de jeu) ; `MZplantages()` dans la console rend les 10 derniers.

## Version 2.27 : boucle graphique 3 (20 novembre)

Trois améliorations acceptées par le testeur de l'équipe graphique :
- **Sol** : chaque famille de zone a sa propre écriture de pôle (−7 : craquelure sèche en Citadelle, lave en Donjon, cendres en Ressource, flaques-miroirs en Antre, dalles brisées en Assemblée ; +7 : Girih doré en relief, zellige, fleurs, nacre, mosaïque pleine). Les losanges du Marché sont codés en luminance et se lisent sous le gris.
- **Météo et lumière par lieu et par pôle** : plus de neige sur la lave (braises en Donjon, lucioles et pollen en Antre, poussière en Assemblée), ombres plus courtes vers +7, neige plus rare vers +7 dans la famille Glace.
- **Combat et barre du haut** : le décor de combat vient de la zone, le disque jaune derrière le héros et le texte fantôme ont disparu, la barre du haut est allégée.
- Le banc `tv/tools/boucle.js` mesure maintenant les 8 zones des planches. Une même version varie de ±150 appels d'un passage à l'autre dans le Marché : comparer sur plusieurs passages.

## Gameplay du monde : pacte et siège essayés ensemble (20 nov., testeur)

`node tv/tools/test-monde.js [dossier]` joue maintenant aussi le pacte et le siège final dans la longue partie : pacte signé depuis la fiche d'une maison, contestation entre maisons et prise, rupture et ses deux contestations ; siège lancé à la Pierre de Berestograd, rechargement, mort (le pacte tombe sans rancune, le siège est levé), siège rejoué jusqu'à la victoire (vague 1 tenue par les murs, vague 2 brisée au combat, vague 3), écran de victoire, palmarès, nouveau monde et vérification de sa remise à zéro ; captures `lot3b-*.png`. Réglages (provisoires) : une Citadelle en siège est à l'abri des maisons rivales (ni contestation ni prise, la contestation en cours tombe) ; 3 cycles entre l'annonce d'une vague et son arrivée ; prix d'un pacte au moins le quart du revenu en tesselles par cycle (Citadelles, caravanes en route, Dîme et Relais), et il suit ce quart ; la troisième vague dépasse d'au moins 1 la défense de la Citadelle à son annonce (une Citadelle bien aménagée, défense 22 à 25, tenait sinon les trois vagues sans combat) ; une vague en marche menace les caravanes qui vont à la Citadelle ; la Loi du Cadastre compte dans les contestations entre maisons. Corrigé : le nouveau monde tire toujours une graine différente (une chance sur 997 de garder l'ancienne, et alors rien n'était remis à zéro, la victoire non plus).

## Gameplay du monde : lot 3 essayé ensemble (20 nov., testeur)

`node tv/tools/test-monde.js [dossier]` joue maintenant aussi le lot 3 dans la longue partie : caravane ouverte, pillée, escortée ; Loi des Relais sur la caravane ; loi du catalogue réveillée sur le Delta de Pama (pôle −) puis renforcée par un Duel d'arguments gagné, et sa fin dix cycles plus tard ; écran « Lois du monde » ; mort et rechargement avec une caravane pillée et une loi renforcée ; captures `lot3-*.png`. Changements (provisoires) : pendant les 2 cycles d'arrêt d'une caravane pillée, le butin grossit (gain du cycle à chaque cycle) et l'escorte le rend en entier ; la Loi des Relais donne +1 tesselle par cycle (+2 renforcée) à une caravane dont le trajet passe dans sa juridiction ; sur la carte jouée, Cezo, Balpak, Pama et Raak portent une loi du catalogue sur leur pôle − (Feux trompeurs, Corvées, Corvées, Fossés) et leur loi écrite sur le pôle + (constante `LOIS_CATALOGUE_CARTE` dans `src/lois.js`). Corrigé dans `test-lois.js` : le message « Tour de guet abattue · Berestograd » venait de l'essai de la Loi des Vigies du même test (tour bâtie puis abattue sur la Citadelle), resté en file et passé devant celui de la loi renforcée ; ce n'était pas un bug du jeu.

## Gameplay du monde : les caravanes (19 nov., `src/caravanes.js`)

Une Ressource à vous au niveau 2 ou plus, dont une route mène à la Citadelle, ou à une zone à vous reliée à la Citadelle par vos zones, envoie une caravane : +1 tesselle par cycle, +2 au niveau 3. Une horde en marche vers une zone du trajet (30 % par cycle) ou une maison rivale voisine du trajet (15 %) peut la piller ; une tour de guet sur la zone menacée divise le risque par deux. Pillée, elle perd la cargaison du cycle et s'arrête 2 cycles ; à la Pierre d'éveil de la Ressource ou de la zone du pillage, « Escorter la caravane » ouvre un combat court contre deux pillards, et la victoire la remet en route avec sa cargaison. Une route coupée l'arrête. Visible : point qui avance sur la minicarte, ligne à la Pierre de la Ressource, « ⛟ » dans le bandeau, petit chariot 3D (72 triangles) entre les Pierres. Chiffres provisoires. Tests : `MZ.caravanes()` (état), `MZ.piller(id)`, `MZ.escorter(id)` ; script `node tv/tools/test-caravanes.js`.

## Gameplay du monde : les lois des Assemblées (19 nov., `src/lois.js`)

Chaque Assemblée porte une loi par pôle, en vigueur quand elle est à vous, activée et au palier 1 ou plus. Les six Assemblées écrites gardent leur loi (Brume / Clarté, péages, brûlis, Greniers, Silence / Chant, bornage) ; les autres reçoivent deux lois d'un catalogue de onze, tirées de leurs deux pôles, qui agissent sur leur juridiction (l'Assemblée et les zones à 2 tuiles ou moins) : Guet (préavis des hordes), Fossés (force des hordes), Feux trompeurs (cible des hordes), Témoins (chance des rivaux), Couvre-feu (rythme des rivaux), Cadastre (plafond des rivaux), Vigies (tours de guet), Dîme (tesselles), Corvées (entretien des Donjons aménagés), Communs (domaines), Relais (routes, puis caravanes). Gagner le Duel d'arguments met la loi en vigueur renforcée 10 cycles. Menu Pause → « Lois du monde » : lois en vigueur, lois endormies et comment les réveiller. Corrigé : une zone bornée par Raak qui n'est plus à vous n'est plus protégée. Tests : `MZ.lois()` (état), `MZ.loiForcer(id, 'guet')` (pose une loi du catalogue sur une Assemblée, test seulement), `MZ.loiRenforcer(id)`, `MZ.loisCycle()` ; script `node tv/tools/test-lois.js`. Pour le module des caravanes : `loiRelais(id)` rend la force de la Loi des Relais sur une zone (0, 1 ou 2).

## Version 2.15 : choix moraux, lot 2 (19 novembre)

- Quatre zones de plus ont leur scénario en 15 scènes (`src/scenarios-zones.js`) : **le Puits des Neuf Édits** (Tyrannie / Liberté : graver l'Édit ou ouvrir la cangue de Lan ; un ordre s'applique d'abord à la main qui le grave), **le Canyon de Fjorhel** (Silence / Chant : le tison qui dure trois souffles, l'écho qui finit par voter seul), **l'Oasis de Raak** (Pierre / Cristal : la loi gravée dans le grès ou écrite sur des barres de sel qui fondent), **les Cavernes de Balpak** (Cendre / Floraison : la résine qui noircit les bulletins ou l'eau qui fait fleurir les ongles).
- Dans les trois Assemblées, l'épreuve qui suit le choix reste le Duel d'arguments.
- Un prix peut maintenant coûter plusieurs cartes (« deux cartes perdues »).
- 8 zones sur 12 (hors Ressources) ont maintenant leur scénario ; restent l'Antre et l'Assemblée d'origine, la Lande de Cezo et le Delta de Pama.

## Gameplay du monde : le pacte avec une maison rivale (19 nov., `src/pacte.js`)

Idée validée par l'utilisateur : contre des tesselles à chaque cycle, une maison rivale cesse de vous contester et s'en prend aux autres maisons ; si vous rompez, elle conteste deux fois. Au menu Pause, « Rivaux », une maison, « Proposer un pacte » (ou au Comptoir d'une Citadelle tenue, « Proposer un pacte à une maison rivale ») ; un seul pacte à la fois, le premier cycle payé à la signature. Prix par cycle (provisoires) : Comptevent 1 + 1 par zone qu'elle tient, Sombreclef 2 + 1, Grisaille 3 + 1, Ombrelieue la dîme (la moitié du revenu de vos Citadelles, au moins 1). Sous pacte, la maison ne conteste plus vos zones, ne tente plus vos anciennes zones, et conteste les zones des autres maisons (annoncée 2 cycles avant, une chance sur deux : la zone passe à elle, ou redevient sauvage si elle est au plafond). Bourse trop maigre : avertissement, puis rupture au cycle suivant. Rupture (menu ou paiement) : deux contestations de vos zones l'une après l'autre, et refus d'un pacte pendant 10 cycles. Sombreclef trahit une fois sur cinq quand elle agit. À la mort, le pacte tombe sans rancune. Bandeau : ⚭ et le blason dans la ligne Rivaux, ✂ pour la vengeance. Tests : `MZ.pacte(k)` signe sans payer (`'gri'`, `'cpv'`, `'sbc'`, `'omb'` ; sans argument, l'état), `MZ.rompre()`, `MZ.pacteAgit()` fait agir la maison du pacte, `MZ.pacteResout(true|false)` règle sa contestation contre une autre maison ; script `node tv/tools/test-pacte.js`.

## Gameplay du monde : le siège final (19 nov., `src/siege.js`)

La victoire existe : 5 Citadelles épiques par monde (toutes s'il y en a 5 ou moins ; sur la carte jouée, Berestograd), marquées « ♛ Citadelle épique » dans la fiche, à la Pierre et sur la minicarte. Quand une Citadelle épique à vous atteint ±7, sa Pierre propose « Lancer le siège final » (avertissement, puis confirmation) : trois vagues du monde sauvage de suite, chacune annoncée 2 cycles avant son arrivée, de force 7 + 1 tous les 10 cycles + 4, 6 puis 8 (+0 ou 1), contre la défense des hordes (`defenseHorde`). À la Pierre, « Briser la vague » ouvre le combat d'avant-garde. Une vague qui passe : la Citadelle recule d'un palier et le siège se relance après 5 cycles de repos. Trois vagues tenues ou brisées : écran de victoire (zones, hordes, maisons, temps de jeu), victoire au palmarès (`localStorage` « mz-palmares-1 », menu Pause « Palmarès ») et « Commencer un nouveau monde ». Visible : ligne Menaces « ♛ … vague n/3 », toasts, double cercle rouge sur la minicarte. Chiffres provisoires. Tests : `MZ.siege(id?)` lance le siège (Citadelle mise à vous et à ±7), `MZ.siegeVague(true|false)` résout la vague en cours, `MZ.palmares()` ; script `node tv/tools/test-siege.js`.

## Version 2.14 : choix moraux de trois nouvelles zones (19 novembre)

- Trois zones de plus ont leur scénario en 15 scènes (`src/scenarios-zones.js`), sur le modèle de la Taïga de Kobor : **Berestograd** (Oubli / Mémoire : l'écorce pliée en huit d'Ouliana, le frère noyé du kniaz), **l'Oasis de Maulu** (Glace / Feu : une source pour un seul troupeau, la quatrième bête boit à votre place), **le Fjord de Rames** (Cauchemar / Rêve : le cent quarante et unième coup de rame, les embaumés sous la glace).
- Nouveau type de prix : du mana d'un type précis (Sève, Glace).
- L'épreuve qui suit le choix reste celle de la zone ; l'habillage par la scène viendra avec le soir 2 de Kobor.
## Version 2.13 : boucle graphique 2 (19 novembre)

Trois améliorations acceptées par le testeur de l'équipe graphique, détaillées dans les sections « Boucle graphique 2 » ci-dessous :
une grammaire de pôle propre à chaque type de zone (sol), un ciel signature par zone (le +7 se teinte au lieu de blanchir, rai des lieux adouci),
et une image plus propre et plus légère (FXAA, ombres limitées à leur boîte, objets cachés par le brouillard non dessinés).
Mesures (rendu logiciel, avant → après) : Citadelle 1 056 346 → 681 408 triangles et 832 → 395 appels ; RES227 765 664 → 670 438 et 638 → 396 ; ASS152 505 702 → 424 994 et 328 → 293.

## Boucle graphique 2 : ciels signature (19 novembre, boucle 2)

Fichier neuf `src/ciels.js` (après `styles.js` dans `build.sh`) et rai des lieux refait dans `src/lieux.js`. Aucun objet ni appel de dessin en plus.
- **Un ciel par famille** (lissé sur ~2 s en changeant de zone) : Glace, aurores en rideaux (Berestograd, Taïga…) ; Feu, plafond bas éclairé par en dessous de braise (Puits, Canyon, Désert) ; Eau et Sève, voûte de canopée assombrie et rayons verts autour du soleil (Lucioles, Oasis, Récif) ; Pierre, grand soleil bas (élévation 17° au plus) et bande de poussière à l'horizon ; Vent, cirrus longs et striés (Chinampas, Lande, Steppe). Givrecloche reste neutre (noir et blanc).
- **Vers −7** : zénith assombri de 40 %, étoiles ; pour le Feu, soleil noir cerclé de lumière (éclipse). **Vers +7** : zénith saturé (luminance ≤ .45), halo de 22° autour du soleil, anneau Girih très pâle au-dessus de 30°.
- **+7 colore au lieu d'éclaircir** : à niveau positif, exposition ≤ 1 (Puits : .62), halo ≤ .8 (Glace .45, Puits .5), météo ≤ 1,2, soleil des nouvelles tuiles ≤ 1,25 ; l'horizon (et donc le brouillard, toujours de la même couleur) glisse vers la dominante du pôle, saturé ×1,4, luminance ≤ .55 ; zénith et ombres prennent la complémentaire (Puits ambre / turquoise, RES374 jade / rose pâle, ANT120 vert tendre / prune ; les autres d'après leur mana, tournés selon le biome) ; brouillard ×.75. Givrecloche et Chinampas (manga) gardent leur horizon.
- **Rais des lieux** : cône ouvert additif sans brouillard, invisible à moins de 18 m et éteint au-delà de 400 m, teinté du pôle de la zone ; plus de trait blanc diagonal dans le ciel. Il s'éteint toujours quand le secret est trouvé.
- Mesures (rendu logiciel, même machine) : triangles et appels de dessin dans le bruit de mesure (±2 %) ; le rai coûte deux fois moins de triangles. Le shader du ciel passe à 4 octaves de bruit pour les nuages, le calque du mode n'en prend que 3.
- Limite : sur le Puits à +7, l'orange vif vient surtout de la lave et du motif Girih lumineux du sol (émission du terrain), que cette boucle ne touche pas.
## Boucle graphique 2, amélioration 1 : une grammaire de pôle par type de zone (19 novembre 2026)

- Sol (`src/sol.js`) : l'octet A de la carte du sol porte un code de grammaire (Citadelle, Donjon, Ressource, Antre, Assemblée, Marché). Fini le même tampon partout :
  - **−7** : glace noire en plaques hexagonales, givre dans les joints (Citadelle) ; failles de braise de Voronoï (Donjon) ; flaques noires qui reflètent le ciel (Ressource) ; mycélium phosphorescent ramifié (Antre) ; dalles soulevées et fendues en damier (Assemblée) ; traînées de sel et de suie (Marché).
  - **+7** : Girih or à 10 branches (Citadelle) ; zellige khatam cobalt et blanc (Donjon) ; terrasses concentriques de jade (Ressource) ; mosaïque d'hexagones turquoise et nacre (Antre) ; rosace à 12 branches lapis et argent (Assemblée) ; losanges blanc et bleu glacier (Marché).
  - Couleurs saturées, mêlées à la teinte du mana ; la force suit le palier ; en qualité Fluide, le repli à une seule lecture de bruit garde la couleur et l'ordre de l'étoile de chaque grammaire.
- Décors de pôle (`src/poles-decor.js`) : un jeu d'objets par type (même nombre d'objets par pôle) et un repère + différent par type : tour Girih, arche en fer à cheval, terrasses à degrés, aiguilles de cristal, coupole, kiosque.
- Mesures contre la base (même code sans ces changements) : triangles et appels de dessin à moins de 1,5 % (bruit de mesure).
- Reprise après le testeur (même jour, `src/sol.js` seul) :
  - Ressource −7 : moins de flaques, mieux découpées ; noir d'eau profond, reflet au ton du mana (fresnel ramené de 0,08 + 1,6 f à 0,012 + 0,26 f), rides et éclats en points, frange de reflet au bord et liseré clair de berge ; la terre détrempée n'est presque plus assombrie.
  - Ressource +7 : anneaux pleins alternés jade sombre / jade clair, contremarches dans l'ombre, rayon borné pour rester des cercles, opacité 0,35 + 0,09 par palier.
  - Marqueterie posée (khatam, hexagones, losanges) : opacité 0,05 + 0,13 par palier (≈ 0,18 au palier 1, ≈ 0,96 au palier 7), bord fondu de 0,45 m au palier 1 à presque franc au palier 7 ; le khatam ne montre que ses étoiles aux bas paliers.
  - Antre +7 : turquoise plus bleue, nacre plus irisée et plus présente, joints sombres et épais, mélange au mana ramené à 0,08.
  - Donjon +7 : étoiles blanches sur champ de cobalt, mélange au mana à 0,05, un peu de cobalt émis et moins de reflet ; près du repère, le halo chaud de la zone (hors de `sol.js`) rosit encore le sol.
  - Mesures (RES227) : sous +2 % par rapport à la version refusée, sous +15 % par rapport à la base.
## Gameplay du monde : lot 2 essayé ensemble (19 nov., testeur)

`node tv/tools/test-monde.js` joue maintenant aussi le lot 2 dans la longue partie (tour, deuxième Donjon aménagé, les quatre achats du Comptoir, tentative de rival devancée puis réussie, horde sur une zone couverte par une tour et un Donjon, mort, rechargement) et affiche la défense de chaque zone de départ. Réglages (provisoires) : force d'une horde 7 + 1 tous les 10 cycles + 0 à 3 ; Citadelle +3 à 2 tuiles ou moins (au lieu de 3) ; une voisine d'un Donjon aménagé reçoit la moitié de sa traversée, +4 au plus ; deux dispositifs par Donjon tenu ; le Comptoir ne vend que les cartes des secrets déjà trouvés (perdues à la mort) ; à la mort, les pièges de tous les Donjons sont perdus. Corrigé : le message d'un secret ne dit plus « Carte utilitaire gagnée » quand la carte est déjà dans le paquet.

## Gameplay du monde : le commerce en Citadelle (19 nov., `src/commerce.js`)

La tesselle (◇ dans le bandeau) est la monnaie des Citadelles, séparée du mana et jamais achetée : chaque Citadelle tenue en rapporte 1 + son palier par cycle, briser une horde 5, repousser un rival 4 ; la mort vide la bourse. À la Pierre d'éveil d'une Citadelle tenue, OK puis « Comptoir » : la carte utilitaire d'un secret déjà trouvé et absente du paquet, perdue à la mort (6 tesselles, +3 à chaque achat, une par cycle), la réparation des pièges d'un Donjon tenu (5), deux cycles de retard pour une horde en marche (8, une fois par horde), 1 mana du type de la Citadelle pour 4 tesselles. Tous les prix sont provisoires. Tests : `MZ.tesselles(n)` en donne, `MZ.comptoir(id?)` ouvre le Comptoir, `MZ.commerceCycle()` verse un cycle ; script `node tv/tools/test-commerce.js`.

## Version 2.11 : livres des zones (19 novembre)

Demande de l'utilisateur : « des livres laissés dans les zones, racontant l'histoire de la zone ».

- Chaque Antre, Assemblée, Donjon et Citadelle a **un livre ouvert sur un lutrin** (12 livres). Il est écrit par un personnage de la zone (greffier, relieur, pilote, chanoine…), dans la voix du conteur de la zone, et relu par le critique.
- En passant près du lutrin, le cartouche montre le titre et l'auteur ; **A** ouvre le livre. Quatre pages racontent l'histoire de la zone ; la **dernière page**, d'une autre plume, change selon le niveau (cinq bandes, comme les inscriptions). ◀ ▶ ou A pour tourner, B pour refermer.
- Une rune bleue flotte au-dessus d'un livre dont la dernière page n'a pas encore été lue à ce niveau.
- Données : `design/inscriptions/livres_*.json`, assemblées avec les inscriptions par `python3 design/inscriptions/assembler.py`.

## Boucle graphique 2, amélioration 3 : image propre et budget repris (19 novembre)

Fichiers : `src/fluidite.js` (ombres, coupe, flocons) et `src/styles.js` (FXAA). Aucune règle du jeu ne change, aucune lumière ajoutée.
- **Anticrénelage FXAA en Belle et Splendide** : depuis que la passe finale lit la profondeur, l'ancienne cible MSAA ×4 n'était plus utilisée. Une passe FXAA 3.11 « console » la remplace : 5 lectures de luminance et 2 lectures le long du bord. Le grain est posé ensuite, donc il reste net. L'effet est atténué sur les écoles d'encre (Givrecloche, Chinampas). Rien ne change en Fluide ni en Équilibrée.
- **Ombres limitées à leur boîte** : la passe d'ombre ne dessine plus que ce qui touche la boîte de 240 m (marge de 30 m). Pour les carreaux de terrain, seuls tombent ceux qui sont hors de la boîte, ou à plus de 200 m du héros du côté opposé au soleil (leur ombre ne peut tomber que plus loin encore). Le plan lointain de la caméra d'ombre suit l'élévation du soleil : 260 + 120/tan(élévation) + 60 m, borné entre 300 et 520. Ainsi, tout ce qui reçoit une ombre dans la boîte reste entre near et far, même quand le soleil est rasant. La boîte est calée sur la grille des texels autour du héros, ce qui supprime le scintillement des bords d'ombre.
- **La qualité choisie coupe vraiment les ombres** : choisir Fluide au menu supprime la passe d'ombre (avant, la carte 2048 restait active après un changement). En Équilibrée, la carte fait 1024. La baisse **automatique** de qualité, quand l'image ralentit, ne touche pas aux ombres.
- **Coupe selon le brouillard** : la distance de coupe vaut 2,3/densité + 40 m, bornée entre 180 et 620 m. Elle part de la densité visée, ou de la densité lissée si celle-ci est plus claire. Un petit objet ordinaire, à plus de 80 m de la caméra, qui fait moins d'un pixel une fois noyé dans la brume, n'est pas envoyé à la vue de la caméra. Il garde son ombre, et son état « visible » est remis à l'identique avant la passe d'ombre.
- **Flocons** : taille limitée à 18 px, fondu entre 1,5 et 5 m devant la caméra.

### Reprise 2.3b : ombres perdues près du héros (refus du testeur)

Constat du testeur : quand deux bancs tournent en même temps, les ombres du héros, de la coquille d'ANT120, du pilier de RES374 et de la pierre d'ASS152 manquent environ une fois sur deux. Ce n'était jamais le cas avec 3972fd9.
- **Cause** : sous charge, la baisse automatique de qualité de `main.js` (sous 27 images/s, Belle → Équilibrée → Fluide) passait par l'enveloppe de `resize`, qui coupait alors les ombres. Ce que l'on voyait dépendait donc du rythme des images. Les planches de `boucles/boucle-2/apres-3` le montrent : ASS152 et RES374 n'y ont plus aucune ombre, et l'image y est moins définie.
- **Correction** : seul le choix du joueur, au menu ou au démarrage, allume ou coupe les ombres. La baisse automatique ne change plus que la définition, comme avant.
- **Points vérifiés et durcis en même temps** :
  - (i) la passe d'ombre teste les carreaux de terrain contre la boîte ; il n'y a plus de rayon fixe de 130 m, qui oubliait les collines placées face au soleil bas ;
  - (ii) le calage sur les texels ne fait que décaler ensemble la cible et le soleil, d'un demi-texel au plus, après `stepAtmo`, qui les replace à chaque image quel que soit dt, et donc aussi après `MZ.tp` et `MZ.set` ;
  - (iii) le far suit l'élévation du soleil (voir plus haut) ;
  - (iv) les « miettes » sont jugées dans `scene.onBeforeRender`, donc sur les matrices de l'image en cours, avec la position, l'échelle, la géométrie et le matériau lus à l'instant. Elles sont rendues visibles avant la passe d'ombre. Leur liste est refaite à chaque mue, ou quand la scène gagne ou perd un enfant, mais plus jamais au compte des images.
- **Vérifié** : trois passages de `tools/boucle.js`, à chaque fois deux en parallèle (charge proche de 9 sur 4 cœurs). Au centre de chaque planche à 0, les ombres du héros, du pilier, de la coquille et de l'obélisque sont présentes à chaque fois. Hors du banc, sur la même page, une baisse automatique simulée vers Fluide garde les ombres, alors que Fluide choisi au menu les coupe.
- **Gardé tel quel** : le FXAA, le plafonnement des flocons et la coupe selon le brouillard. Des recadrages à pleine résolution, avant et après FXAA, des arêtes de sapins à CIT +7 et DON045 sont dans `boucles/boucle-2/fxaa-3b/`.

Mesures après la reprise (banc logiciel, Belle figée, hasard fixé, images pas à pas de 50 ms, par image, ombre comprise), triangles / appels de dessin. « Avant » correspond à 3972fd9, mesuré dans les mêmes conditions :

| Zone | Avant (3972fd9) | Après (2.3b) | Écart |
|---|---|---|---|
| CIT | 521 004 / 413 | 410 405 / 213 | −21 % / −48 % |
| DON | 398 982 / 277 | 302 959 / 202 | −24 % / −27 % |
| RES | 678 765 / 373 | 612 427 / 258 | −10 % / −31 % |
| ANT | 567 156 / 286 | 469 999 / 227 | −17 % / −21 % |
| MAR | 563 434 / 346 | 420 240 / 252 | −25 % / −27 % |
| DON045 | 264 863 / 181 | 230 451 / 173 | −13 % / −4 % |
| ASS152 | 237 169 / 205 | 221 559 / 187 | −7 % / −9 % |
| ANT120 | 247 492 / 211 | 218 178 / 196 | −12 % / −7 % |

En Fluide, à CIT : 299 075 / 295 → 285 539 / 135. Aucune zone ne monte. Les gains de triangles sont un peu plus faibles qu'en 2.3 (CIT −25 %), parce que le far et les carreaux de terrain gardent désormais tout ce qui peut porter une ombre dans la boîte.

Avec `tools/boucle.js` (mesures.json, deux images, qualité automatique), six passages sous charge comparés à `boucles/boucle-2/avant` : CIT 1 056 346 / 832 → 687 196 à 820 954 / 417 à 472 (−22 à −35 % / −43 à −50 %) ; RES227 765 664 / 638 → 691 881 à 733 316 / 375 à 428 (−4 à −10 % / −33 à −41 %) ; ASS152 505 702 / 328 → 428 930 à 463 580 / 285 à 298 (−8 à −15 % / −9 à −13 %). Aucune erreur JavaScript.

## Version 2.10 : boucle graphique 1 (19 novembre)

Première boucle de l'équipe graphique (critique, direction artistique, rendu et performance, producteur, trois artisans, testeur-juge). Les trois améliorations ont été acceptées par le testeur ; détails dans les sections « Boucle 1 » plus bas, captures avant, après et intégrées dans `boucles/boucle-1/` du dossier du projet.
- Étalonnage signature par zone et par pôle (`src/styles.js`) : fini le noir bouché à −7 et le blanc brûlé à +7, chaque zone a ses teintes.
- Sol vivant (`src/sol.js`) : grain par biome, failles lumineuses vers −7, motif Girih doré vers +7.
- Interface : un seul titre de zone, barre du haut en îlots (avec domaines, hordes et rivaux), texte des cartes de combat lisible.
- Mesures intégrées contre la 2.9 : triangles +0 à +9 %, appels de dessin +2 à +7 %.

## Gameplay du monde : tours de guet (19 nov., `src/tours.js`)

À la Pierre d'éveil d'une zone à vous (Ressource de niveau 1 ou plus, Donjon ou Citadelle tenus), OK puis « Bâtir une tour de guet » : 3 mana du type de la zone, une tour par zone. La tour donne +2 de défense contre les hordes à sa zone et à vos zones voisines (sans cumul de plusieurs tours), et une horde qui vise une zone couverte arrive 2 cycles plus tard (l'annonce le dit). Elle tombe si la zone n'est plus à vous (sauvage, rival, mort du héros) ou si une horde passe sur elle. Visible : ligne « Tour de guet » ou « Sous la garde d'une tour de guet » à la Pierre, petite tour crénelée sur la minicarte, petite tour 3D à côté de la Pierre. Pour les autres modules : `defenseTours(id)` → `{bonus, raisons}`, `preavisTours(id)` → cycles gagnés. Tests : `MZ.tour(id?)` bâtit sans payer, `MZ.tourTombe(id)` l'abat ; script `node tv/tools/test-tours.js`.

## Gameplay du monde : Donjons aménagés (19 nov., `src/donjons.js`)

Chaque Donjon à vous et activé s'aménage, et plus seulement celui d'origine : à sa Pierre d'éveil, OK puis « Aménager les salles ». Le Donjon d'origine garde ses 4 salles des Neuf Édits et son assaut périodique ; les autres ont 2 salles au palier 0 ou 1, 3 au palier 2, 4 au palier 3 et plus (une salle au-delà est scellée), nommées d'après la zone (« Porte de Kobor », « Galerie des racines gelées », « Crypte slave », « Chambre du Sceau de Kobor »). Un piège par salle, payé en mana de son type. Chaque Donjon tenu déverrouille un dispositif : 1 Donjon, Herse et Glyphe ; puis Lave, Gardien, et deux pièges nouveaux, Ronces de sève (Sève) et Voûte d'éboulis (Pierre). Une horde qui vise un Donjon tenu ou une de ses voisines à vous traverse ses salles : chaque piège éveillé ajoute sa force à la défense, la Glyphe double le suivant (le plafond de 2 a disparu). Si la horde passe sur le Donjon lui-même, elle saccage sa première salle piégée. L'entretien suit le rythme du menu (par cycle, à l'assaut, usure) pour tous les Donjons. Un rival qui conteste un Donjon aménagé a 10 points de chance en moins par piège actif. Pour les autres modules : `piegesDonjon(id)` (pièges actifs d'un Donjon tenu) et `reparerPieges(id)` (réveille et remet l'usure à 3, sans mana). Tests : `MZ.amenager(id)` ouvre les salles, `MZ.amenager(id, ['herse','lave'])` pose sans payer et rend l'état ; script `node tv/tools/test-donjons.js`.

## Gameplay du monde : l'épreuve des rivaux (19 nov.)

Décision de l'utilisateur : un rival ne prend plus une zone sauvage d'un coup, il doit en réussir l'épreuve (`src/rivaux.js`). La maison annonce sa tentative (« La maison Grisaille tente l'épreuve de … : elle s'y attaque dans 2 cycles »), la zone apparaît en pointillés de sa couleur sur la minicarte, avec un « ? » après le blason dans la ligne Rivaux du bandeau, dans l'écran Rivaux, la fiche de zone et à la Pierre d'éveil. À l'échéance, elle réussit 75 fois sur 100 au palier 0 ou ±1, puis 60, 40 et 25 jusqu'à ±7 (provisoire) ; sinon ses gens repartent. Pour la devancer : activer la zone avant elle, ou, à la Pierre, « Défier les gens de la maison » et battre son champion. Une tentative par maison à la fois ; zones verrouillées ou au cœur jamais visées ; rythme, plafond et contestations inchangés. Tests : `MZ.rival('prise')` lance une tentative, `MZ.rivalTente()` les résout tout de suite (`MZ.rivalTente(true)` ou `(false)` force le résultat, `MZ.rivalTente('gri', true)` pour une maison) ; script `node tv/tools/test-rivaux.js`.

## Gameplay du monde : test d'ensemble (19 nov.)

Domaines, hordes et rivaux joués ensemble : `node tv/tools/test-monde.js [dossier]` lance une longue partie simulée (40 cycles, prises, hordes, rivaux, combats d'avant-garde et de champion, mort du héros, rechargement de la sauvegarde), vérifie la cohérence de l'état et les menus, et prend trois captures (bandeau, Pierre d'une zone menacée, écran Rivaux). Réglages du 19 nov. (provisoires) : une horde ne vise que des zones plus faibles de 2 ou 3 paliers ; une zone à vous tombée à 0 redevient sauvage, avec empreinte (décidé le 19 nov.) ; la même Citadelle ne compte qu'une fois dans la défense contre une horde ; les rivaux agissent une fois sur 6 cycles, pas avant le 10e ; une contestation tombe si la zone n'est plus à vous. Quand la barre d'état est trop pleine, elle passe sur deux lignes au lieu d'être coupée.

## Gameplay du monde : les hordes du sauvage (18-19 nov.)

Fichier `src/hordes.js`. Chaque zone a un pôle envahisseur (−7, +7 ou les deux), affiché dans la fiche de zone et à la Pierre d'éveil. Une zone au palier 7 de ce pôle lève une horde après 5 cycles ; la horde est annoncée (message, flèche rouge sur la minicarte, ligne « Menaces » du bandeau) et arrive 3 cycles plus tard sur une zone voisine (2 tuiles au plus) plus faible de 2 ou 3 paliers (pas au-delà), vos zones d'abord. Pour la briser : allez à la Pierre d'éveil de la zone visée, OK, « Affronter l'avant-garde ». Sinon, à l'arrivée, sa force affronte la défense de la zone (niveau, Citadelle à 3 tuiles, rempart, pièges du Donjon, lois) ; si elle passe, la zone recule d'un palier (une Ressource perd aussi ses routes) et une zone à vous tombée à 0 redevient sauvage, avec votre empreinte. Au palier 7 de l'autre pôle, pas de horde et une carte de palier 7 plus forte. Les zones sauvages à ±6 peuvent gronder et monter à ±7. L'assaut contre le Donjon d'origine (economie.js) ne change pas.

Tests : `MZ.horde(source?, cible?)` lève une horde tout de suite (sans argument, il choisit ou crée une source à ±7), `MZ.hordeArrive(source?)` la résout. Script : `node tv/tools/test-hordes.js`.

## Gameplay du monde : contrôle des zones (18-19 nov., `src/domaines.js`)

Un peu de Go, un peu de Carcassonne. Un **domaine** est un groupe d'au moins 2 tuiles voisines du même type ; quand elles sont toutes à vous et activées, il est **fermé** et donne son bonus (Ressources +1 mana par cycle, Antres +2 PV par bête, Citadelles +5 PV au héros, Donjons +1 résistance, Assemblées +1 voix au vote du duel). Une zone à vous entourée des vôtres est **au cœur du royaume** ; une zone sauvage entourée des vôtres est **encerclée** et ses gardiens d'activation sont affaiblis (PV −25 %, attaque −1). Une Citadelle tenue **verrouille** sa zone et ses voisines contre les rivaux. Bandeau : ◈ domaines fermés, sur la ligne Domaines ; Pierre d'éveil : domaine et statut de la zone ; toast à chaque domaine fermé ou rouvert. Pour les autres modules : `verrouillee(id)`, `defenseMonde(id)` → `{bonus, raisons}`, `domaines()` → `[{type, ids, ferme}]`. Test : `window.MZ.domaines()`, `MZ.prendre(id)` (prend et active une zone ; `MZ.prendre(id,true)` la rend), `MZ.statutZone(id)`, `MZ.cycle()` ; script `node tv/tools/test-domaines.js`.


## Gameplay du monde : les rivaux (18-19 nov.)

Quatre maisons rivales (`src/rivaux.js`), secondaires face au monde sauvage : Grisaille ♜, Comptevent ☼, Sombreclef ☾, Ombrelieue ⊚, chacune avec sa couleur, son blason et son type de zone préféré. Une fois tous les 6 cycles en moyenne, pas avant le 10e cycle, l'une prend une zone sauvage hors du départ (sa couleur sur la minicarte, son nom dans la fiche de zone, une ligne « Rivaux » dans le bandeau) ou annonce qu'elle conteste une de vos zones dans 2 cycles. Pour défendre : aller à la Pierre de la zone et battre le champion ; sinon la zone risque de perdre un palier. Zones bornées, verrouillées ou au repos : intouchables. Une zone de rival se reprend en l'activant (gardiens renforcés). Une ancienne zone à vous (empreinte) se reprend aussi en réussissant un seul palier. Écran « Rivaux » au menu Pause. Tests : `MZ.rival()` (ou `MZ.rival('prise')`, `MZ.rival('conteste')`), `MZ.rivalArrive()` ; script `node tools/test-rivaux.js`.

## Version 2.9 : inscriptions des zones (19 novembre)

Demande de l'utilisateur : enrichir chaque zone qui n'est pas une Ressource avec des textes et des inscriptions.

- Les 12 Antres, Assemblées, Donjons et Citadelles du jeu ont chacun **quatre objets écrits** : stèle, panneau, mur gravé ou borne (48 objets, 240 textes). Chaque texte est écrit par le conteur de la zone (A, B, C ou D) et relu par le critique (84/100, 16 corrections appliquées).
- Le texte **change avec le niveau**, en cinq bandes : −7..−5, −4..−2, −1..+1, +2..+4, +5..+7. L'objet suit aussi le pôle : vers −7 il s'enfonce, penche et se ternit ; vers +7 il se dresse et prend la lumière du pôle.
- **Lire** : il suffit de passer à côté (moins de 11 m). Un cartouche sombre s'ouvre en bas de l'écran, sans bouton et sans arrêter le jeu. Une **rune bleue** flotte au-dessus d'un texte pas encore lu à ce niveau ; quand une zone a changé de bande, le cartouche le dit.
- Fichiers : `src/inscriptions.js` (objets, lecture), `src/inscriptions-donnees.js` (généré par `python3 design/inscriptions/assembler.py` depuis `design/inscriptions/conteur_*.json`). Pour une nouvelle zone, ajouter ses 4 inscriptions dans le fichier de son conteur, relancer l'assembleur puis `sh tv/build.sh`.

## Historique : édition salon (Sony Bravia / Google TV), 15 novembre

Version légère de la démo « grandes zones », pensée pour une télé vue du canapé et pilotée à la télécommande.

## Le but

Se promener de zone en zone dans la mosaïque Girih. Chaque zone a une **Pierre d'éveil**. Devant elle, OK ouvre l'éveil :
on choisit le pôle (▲ vers +, ▼ vers −), on réussit l'épreuve de la zone, et la zone fait un bond d'un palier avec une **mue**
(la caméra tourne au-dessus de la zone pendant qu'elle se transforme). Chaque réussite donne une **carte de pouvoir**.

| Zone | Type | Épreuve | Commandes |
|---|---|---|---|
| Berestograd | Citadelle | La Garde des portes : repousser les pillards au passage du cercle d'or | flèches |
| Puits des Neuf Édits | Donjon | Le Grand Donjon : labyrinthe dans le noir, gardiens, lave qui monte | flèches |
| Chinampas de Tezcamixtli | Ressource | La Récolte : cueillir des gerbes lumineuses dans le monde, en temps limité | ▲ ◀ ▶, OK saute |
| Exarchat des Lucioles | Antre | La Chasse aux lucioles : frapper quand la reine traverse l'affût | OK |
| Foire de Givrecloche | Marché | Le Chantier : rejouer un plan de flèches de plus en plus long | flèches |

## Version 1.2 : combat au tour par tour et premiers pouvoirs

Avant d'éveiller une zone, il faut l'**activer** : à sa Pierre d'éveil, on bat ses gardiens au tour par tour. La zone devient à vous et donne son pouvoir :

| Zone | Pouvoir gagné à l'activation |
|---|---|
| Ressource (Tezcamixtli) | **Source de mana** : +1 mana par tour ; 2 mana au niveau 2 ; 2 mana et une carte de plus en main au niveau 3. Une Ressource ne monte que jusqu'à ±3. |
| Antre (Lucioles) | **Bête alliée** : la carte d'appel fait venir une créature qui frappe à chaque tour et encaisse les coups à la place du héros (3 bêtes au plus). |
| Donjon (Neuf Édits) | Carte d'attaque forte. |
| Citadelle (Berestograd) | +6 PV et une carte de garde pour tous les alliés. |
| Marché (Givrecloche) | Carte gratuite qui fait piocher (et donne 1 mana au niveau 2). |

Combat : le héros commence avec 30 PV, 2 mana par tour et 8 cartes (Coup de bâton, Pas de côté, Souffle court). Chaque tour : le mana se remplit, on pioche jusqu'à 5 cartes,
on joue ses cartes (◀ ▶ choisir, OK jouer, ▼ fin du tour), puis les bêtes frappent et chaque monstre fait l'action annoncée au-dessus de sa tête
(attaque, garde, frappe tout le monde, prend son élan puis frappe fort, soigne). Retour : pause, on peut fuir sans blessure.
Les cartes de zone se renforcent quand la zone s'éveille et leur effet est **doublé dans la zone qu'elles contrent** (même cycle que les épreuves).
En marchant, des créatures surgissent parfois (réglable dans le menu : fréquentes, normales, rares, aucune) ; une victoire permet d'ajouter une carte au paquet de combat.
Une défaite = une blessure ; à la mort, le paquet de combat revient aux cartes de départ et les zones sont à réactiver.
Pendant un combat la 3D n'est plus dessinée, pour ménager la télé.

## Version 1.7 : mana par type et Donjon à aménager

Premier test décidé le 16 novembre : un combat payé avec le mana des Ressources, puis un Donjon à aménager (`src/economie.js`).

- **Six réserves de mana, une par type** (Feu, Glace, Eau, Sève, Pierre, Vent ; total affiché en haut à droite). Départ : 3 Feu, 3 Glace, 3 Eau, 3 Vent. Chaque zone a son type : Berestograd et Givrecloche Glace, Neuf Édits Feu, Tezcamixtli Vent, Lucioles Eau. Un **cycle** dure 60 s ; à chaque cycle la Ressource activée ajoute 1 Vent, puis 2 au niveau 2. Les vaincus lâchent le mana de leur zone (1 en rencontre, 2 à l'activation). La Ressource va de 0 à 3, sans pôle.
- **Combat payé avec les réserves** (la mise est retirée depuis le 17 novembre) : une carte de zone se paie avec le mana de sa zone, une carte commune avec n'importe quel type. La capacité de dépense monte de 1 par tour (1, 2, 3…), tous types confondus. Les boosts sont rares : seule la carte de Givrecloche à 5 ou plus donne +1 de capacité pour le tour.
- **Paquet de départ** : les mêmes 5 cartes communes, toutes différentes, pour tout le monde (Coup de bâton, Pas de côté, Pieu planté, Jet de pierre, Torche), assez pour une zone de niveau 0, peut-être 1. Paquet de 40 cartes au plus.
- **Terrain (17 nov.)** : la garde du héros est une unité, la Garde, qui prend les coups et s'effrite de moitié à chaque tour ; bloqueurs et bêtes tiennent le terrain (3 places) ; les ennemis volent par-dessus, enfoncent au bélier ou piétinent. Voir design/cartes-2.2/regles-avancees.md, section 1 bis.
- **Donjon des Neuf Édits à aménager** : une fois activé, sa Pierre propose « Aménager le Donjon ». Quatre salles, un piège par salle, payé avec la réserve : chaque piège a son type de mana, pour la pose et l'entretien : Herse de givre (2 Glace, force 3), Glyphe de brume (2 Vent, force 2, le piège suivant compte double), Fosse de lave (3 Feu, force 5), Gardien des marais (4 Eau, force 6).
- **Assauts** : tous les 3 cycles, le monde sauvage attaque le Donjon. La horde (force 6 + 3 par palier du Donjon + 2 par assaut déjà repoussé + hasard) traverse les salles dans l'ordre. Repoussée : +2 Feu. Passée : une salle est saccagée et le Donjon recule d'un palier. « Provoquer un assaut maintenant » sert à tester vite.
- **Trois rythmes d'entretien à comparer** (menu, ou écran du Donjon) : à chaque cycle (1 mana par piège, sinon il dort), à l'assaut (2 mana par piège quand l'assaut arrive, sinon il ne se déclenche pas), usure (pas d'entretien, chaque piège sert 3 assauts puis casse).

## Version 1.8 : interface du combat et déplacement (17 novembre)

Retour de l'utilisateur après essai sur la Bravia : l'écran de combat et les cartes étaient « vraiment moches », et le déplacement trop lent et « plate » à la télécommande.

- **Cartes illustrées** (`src/habillage.js`) : vrai cadre de carte, pastille de coût à la couleur du mana, une illustration par sorte de carte (les trois communes partagent chacune la leur, comme convenu : « un type commun au début, c'est ok »), nom, ligne de type (Attaque, Défense, Technique, Boost, Invocation · type de mana) et texte.
- **Écran de combat** : un décor peint par zone (forêt et palissade de Berestograd, voûtes et lave des Neuf Édits, canaux de Tezcamixtli, grotte aux lucioles, foire enneigée de Givrecloche), le héros et ses bêtes à gauche, les monstres à droite, chaque créature avec son propre portrait, une plaque de nom et de vie, et son intention en médaillon. Le journal passe sous le titre ; « Fin du tour » devient un sceau rond ; le mana du tour en gemmes.
- Tout est dessiné en vecteurs (SVG) dans le code : gratuit, rien à télécharger, net sur une grande télé. La logique du combat (`combat.js`) n'est pas touchée : `habillage.js` redéfinit seulement `portrait()`, `carteHTML()` et `uniteEl()`.
- **Déplacement plus rapide** : marche 14 au lieu de 8,5, course 27 au lieu de 17, et la course part au bout de 0,35 s au lieu de 1,1 s ; le virage accélère quand on tient ◀ ou ▶. Les rencontres gardent la même fréquence dans le temps.
- **Marche automatique** : ▲ deux fois de suite, le héros court tout seul ; ◀ ▶ pour diriger, ▼ ou OK pour s'arrêter.
- APK : `MozaWorld-TV-1.8-interface.apk`, versionCode 10, s'installe par-dessus la 1.7.

## Version 1.9 : manette Xbox (17 novembre)

L'utilisateur a branché une manette Xbox sur la Bravia. La WebView d'Android ne voit pas les sticks : l'appli (`MainActivity.java`) relaie elle-même les axes et les boutons à la page (`window.MZpad`) ; sur PC, `src/manette.js` lit l'API Gamepad du navigateur. La télécommande et le clavier marchent toujours, et l'aide à l'écran affiche les boutons de la manette dès qu'on s'en sert.

| Où | Commandes à la manette |
|---|---|
| Monde | stick gauche : marcher dans la direction poussée (vitesse selon l'inclinaison ; à fond plus d'une demi-seconde, ou gâchette RT, ou clic du stick : courir) · stick droit : caméra · A : sauter, agir devant une Pierre · X : marche automatique · Y : paquet de combat · Vue : voyager · B ou Menu : menu |
| Combat | stick, croix ou LB / RB : choisir la carte ou la cible · A : jouer · X : fin du tour · B : annuler la cible ou pause |
| Menus | stick ou croix (maintenu, ça défile) · A : valider · B : retour |
| Épreuves | stick ou croix, A pour OK ; la Récolte se joue au stick comme le monde |

Mana confirmé par l'utilisateur le même jour (déjà en place depuis la 1.7) : la limite de dépense par tour est commune à tous les types, et les cartes communes se paient avec n'importe quel type.
APK : `MozaWorld-TV-1.9-manette.apk`, versionCode 11, s'installe par-dessus la 1.8.

## Version 2.3 : les routes forgent les pouvoirs (17 novembre)

- Une Ressource au **niveau 3** propose trois **atouts** de son mana (menu « Choisir l'atout » de sa Pierre d'éveil) ; le choix tient lieu de pôle.
- Dès le **niveau 2**, le menu « Routes » relie la Ressource à une tuile voisine (qui partage un côté). Au niveau 3, l'atout se greffe sur **toutes les cartes de la tuile reliée** ; le texte de la carte l'affiche.
- Une tuile reçoit au plus autant de routes qu'elle a de côtés. Atouts de mana différents : cumulés ; même mana : un seul compte. Si la Ressource redescend sous le niveau 2, ses routes sont coupées.
- Minicarte : route en pointillés (atout pas encore greffé) ou pleine (atout actif).
- 18 atouts (3 par mana), codés dans `src/routes.js` : Tison, Soufflet, Cendre chaude, Givre aux tempes, Gel lent, Conserve, Marée, Source, Reflux, Bouture, Sève lente, Greffe, Assise, Poids, Remploi, Rafale, Vent porteur, Girouette.

APK : `MozaWorld-TV-2.3-routes.apk`, versionCode 16.

## Version 2.2 : les cartes des conteurs (17 novembre)

Demandes de l'utilisateur : des cartes différentes selon le pôle, liées au background de la zone ; une carte différente à chaque palier ; au palier 7, une carte qui change de nature et permet des combos forts ; une carte utilitaire pour chaque secret.

- **229 cartes** écrites par les quatre conteurs (A, B, C, D), relues par le critique et le game design : 7 cartes par pôle pour les 12 zones à pôles (paliers 1 à 6, puis la forme du palier 7), 3 Gerbes par Ressource, 31 cartes de secrets, plus les 10 communes de départ.
- **Une carte par palier** : chaque palier réussi ajoute au paquet la carte de ce palier (clé `ZONE#-3`, `ZONE#+5`, `RES079#r2`). Si la zone redescend sous ce palier ou change de pôle, la carte dort hors du paquet de combat et revient quand la zone reprend ce palier.
- **Résonances** (Braise, Givre, Sang, Racine, Sceau, Abîme) : chaque forme du palier 7 en pose une et en réveille une autre ; elles s'affichent en haut du combat.
- **Nouvelles mécaniques** : brûlure, marque, riposte, vol de vie, écho, récupération, exil, conditions, prix.
- **Garde-fous** : le mana gagné par une carte disparaît à la fin du combat ; l'écho ne double jamais un réveil ; une récupération ne reprend pas une carte qui récupère (2 par tour au plus) ; une résonance posée par un secret ne réveille qu'à moitié.
- **Secrets** : trouver un secret ajoute sa carte utilitaire au paquet de combat.
- Code : `src/cartes.js` (moteur des opérations) et `src/cartes-donnees.js` (généré par `design/cartes-2.2/outils/assembler.py` à partir des fichiers des conteurs). Règles : `design/cartes-2.2/regles-avancees.md`. Méthode pour les nouvelles tuiles : `design/cartes-2.2/consignes-cartes.md`.

APK : `MozaWorld-TV-2.2-cartes.apk`, versionCode 15, s'installe par-dessus la 2.1 (les anciennes copies de cartes de zone restent jouables et suivent le niveau actuel de la zone).

## Boucle 1 · 2 (web) : le sol vivant (19 novembre 2026)

Constat : de près, le sol des zones était un aplat uni (une couleur par sommet tous les 4,2 m). Nouveau fichier `src/sol.js` (assemblé juste après `poles-decor.js`), qui enchaîne un second `onBeforeCompile` sur le matériau du terrain, sans toucher à `core.js` ni à `zonesplus.js`.

- **Carte des zones** : une DataTexture GW×GH (un texel par sommet du terrain) donne au fragment le motif du biome, le niveau ((lv+7)/14) et le mana du pôle. Remplie au chargement, réécrite pour la seule zone qui mue (on enveloppe `rebuild`). Un fondu près des frontières évite toute marche entre zones.
- **Grain** : taches de ~8 m et grain de ~0,7 m (±8 % de luminosité), fondus avec la distance (pas de moiré). Le bruit vient d'une petite texture de bruit **générée par le code** (aucune image).
- **Motif par biome** : rides de sable (Désert, Récif, fond des Canyons), givre et paillettes qui scintillent avec le regard (Forêt boréale côté Donjon, Fjord, Cavernes, Berestograd), touffes sombres (Steppe, Lande, Delta, autres forêts boréales, Lucioles), dalles en quinconce (Cité en ruines), strates sur les pentes (Canyon, Falaise), oasis = sable ou touffes selon la couleur du sol ; ailleurs, roche selon la pente. Deux zones de même couleur se distinguent ainsi par leur motif.
- **Pôle −** : failles en réseau de Voronoï, plus nombreuses et plus larges à chaque palier (un quart du réseau au palier 1, tout au palier 7), le fond luit dans la couleur du pôle négatif du mana : braise (Feu), glace noire (Glace), vase luisante (Eau), sève aigre (Sève), sang de la roche (Pierre), orage violet (Vent).
- **Pôle +** : incrustation Girih or pâle, médaillons à étoile à 10 branches en quinconce : palier 1 l'étoile seule et un quart des médaillons, 3 le décagone, 4 la faïence turquoise, 5 l'étoile intérieure et la rosace, 6 les rayons et le treillis qui relient les médaillons, 7 tous posés.
- **Givrecloche et Chinampas** gardent leur style de rendu : le motif y est coupé tant que « Styles par zone » est actif (le grain reste).
- **Qualité « Fluide »** : ni Voronoï ni Girih complet ; un repli bon marché garde les pôles lisibles (failles tirées d'une seule lecture de bruit, médaillon réduit à l'étoile et son décagone). Le shader se recompile seul quand la qualité entre ou sort de « Fluide ».
- Mesure (rendu logiciel, même vue, avec et sans `sol.js`) : 0 triangle et 0 appel de dessin en plus ; le temps d'une image ne bouge pas de façon mesurable. Les chiffres de `boucle.js` varient de quelques % d'une passe à l'autre (cadrage de la caméra), avec ou sans le sol.
## Boucle 1-1 (web) : étalonnage signature par zone et par pôle (19 novembre)

Dans la passe finale seulement (`src/styles.js`, uniformes `sigSh`, `sigMi`, `sigHi`, `sigK`, `sigOn` de `mFinal`) : aucun objet, aucun appel de dessin en plus.

- **Table `SIG`** : chaque zone a trois couleurs (ombres, tons moyens, hautes lumières) au pôle −7 et trois au pôle +7. Berestograd ombres ardoise / lumières ambre, les Neuf Édits bordeaux / crème, les Lucioles vert abysse / écume, Givrecloche neutre froid, Tezcamixtli terre / jade, les Assemblées prune / braise à −7 et lavande / ivoire à +7 (ASS152 exactement). Les nouvelles tuiles prennent la famille de leur type (Donjon bordeaux / or rose, Ressource sarcelle / menthe, Antre olive / chartreuse…), mêlée à 30 % aux couleurs de leur mana et tournée selon le biome ; repli sur `PMANA` seul. La Taïga de Kobor (DON045) et la Taïga de Chika (RES374), même biome et même mana, ont maintenant des teintes opposées.
- **Dans le shader** : split-toning à trois tons pondéré par la luminance ; vers −7, ombres relevées et plancher des noirs teinté (fin des aplats noirs), vignette teintée ; vers +7, un cran d'exposition en moins, épaule douce avant l'unique ACES, halo réduit, blancs désaturés de 10 %, ombres pastel (fin du blanc brûlé). Progression sur |niveau|/7 avec une petite marche nette aux paliers ±3 et ±6 ; fondu d'environ 2 s quand on change de zone ou de palier.
- Givrecloche (noir et blanc) et Tezcamixtli (manga) gardent leur école : l'étalonnage n'y agit qu'à 30 %.
- **Frange blanche de Givrecloche −7** corrigée : depuis la zone, à −7, les tuiles voisines au loin passent dans la brume de MAR et le ciel reste à la couleur du brouillard.
- Mesure (rendu logiciel) : triangles et appels de dessin inchangés (même écart que d'une capture à l'autre).

## Version 2.8 (web) : décors par pôle partout, exploration épurée, monde animé (18 novembre)

Choix de l'utilisateur après l'essai de la 2.6 (« C'est fluide », puis « Tout oui » sur les idées 1, 2 et 3 de la suite des graphismes).

- **Décors par pôle sur les zones d'origine** (`src/poles-decor.js`) : Berestograd, les Neuf Édits, les Lucioles et Givrecloche reçoivent les mêmes familles d'objets que les nouvelles tuiles (arbres morts, éclats, flèches noires vers −7 ; bannières, cristaux, lanternes, fleurs, tours Girih vers +7), seulement dans leur ceinture : le cœur écrit à la main ne change pas. Tezcamixtli n'en a pas (une Ressource n'a pas de pôle). Les familles vides ne sont plus dessinées du tout.
- **Exploration épurée** (`src/epure.js`) : par défaut, la fiche de la zone (en haut à gauche) n'apparaît que 9 secondes en entrant dans une zone, l'aide des commandes s'efface après la première minute, la minicarte rapetisse ; le nom de la zone entre au centre avec un effet de mise au point. **RB** à la manette (ou **Tab** au clavier) bascule entre l'interface épurée et l'interface complète ; le choix est retenu.
- **Monde animé** (`src/monde-anime.js`) : le vent fait ployer arbres, roseaux, bannières et poteaux (dans le shader), plus fort vers −7 ; des braises montent vers −7 et des lucioles de la couleur du pôle dérivent vers +7 ; cinq ou six créatures errent à 20 à 70 m du héros (bêtes à quatre pattes qui broutent, insectes ailés dans les Antres, feux follets dans les Donjons) et s'enfuient si on approche. Rien de tout cela en qualité « Fluide ».
- Mesure (rendu logiciel) contre la 2.6 : triangles quasi identiques (+0 à +4 %), appels de dessin +5 à +21 % (surtout les créatures).
## Version 2.7 (web) : les choix moraux de la Taïga de Kobor, soir 1 (18 novembre)

- **La scène remplace le menu des paliers** (`src/scenarios.js`) : à la Pierre de la Taïga de Kobor, une scène de l'histoire du registre (le voïévode Mstisla, l'inspecteur Zakhar, la veuve Oustina) et deux réponses. L'une enfonce la zone d'un palier dans son pôle (Mensonge ou Vérité), l'autre la ramène d'un palier. 15 scènes, de −7 à +7.
- **Le prix** est payé au choix : mana, PV retirés au prochain combat, carte perdue ou exilée. Un prix caché s'affiche « ? ».
- **Parole donnée** : après un échec, seul « Tenir parole » reste ; on ne rechoisit pas.
- **Traces** (`S.memoire`) gardées après la mort ; certaines changent déjà le texte des scènes suivantes. Se raviser ne donne pas de carte.
- Les autres zones ne changent pas. Prochains soirs : l'épreuve habillée par la scène, puis les effets des traces.

## Version 2.6 (web) : combat animé, décors par pôle, zones plus grandes et lieux à découvrir (18 novembre)

Lot du soir tiré de l'évaluation graphique du 17 novembre (idées 6, 1 et 8).

- **Combat animé** (`src/anim-combat.js`) : la carte jouée quitte la main et vole vers sa cible avant que l'effet parte ; l'attaquant prend son élan et fonce ; la cible encaisse avec un éclair, un trait de coup et des étincelles ; l'écran tremble sur les coups de 8 ou plus ; soins et gardes ont leur lueur ; les unités respirent ; les vaincus se dissolvent ; le décor de la zone dérive lentement. Seulement du CSS et l'API Web Animations : aucune règle changée.
- **Décors propres à chaque pôle** (`src/poles-decor.js`, nouvelles tuiles) : vers −7, arbres morts, colonnes brisées, éclats d'obsidienne fendus de la couleur du pôle et trois flèches noires effondrées ; vers +7, bannières, cristaux lumineux, lanternes, grandes fleurs et trois tours Girih dorées. Chaque objet a son seuil, donc chaque palier en ajoute. La végétation du biome se penche et dépérit vers −7, grandit vers +7. Les objets éteints ne sont pas dessinés.
- **Zones agrandies d'un tiers** (`SC` 3 → 4 dans `src/core.js`, arête 400 m) ; maille du terrain 3,6 → 4,2 m et densité de végétation plafonnée pour rester fluide. Mesure (rendu logiciel, triangles par image avec les ombres) : Berestograd −31 %, Taïga de Kobor environ +7 %, Canyon de Fjorhel environ +22 % par rapport à la 2.5.
- **Trois lieux par nouvelle tuile** (`src/lieux.js`) : un camp abandonné, un cercle de pierres levées et un belvédère, dans trois directions loin de la Pierre. Un rai de lumière les signale de loin tant que leur secret n'est pas trouvé. 48 secrets de plus (79 au total) ; ils sont ajoutés après les anciens, donc les sauvegardes gardent leurs secrets trouvés. Ces nouveaux secrets ne donnent pas encore de carte.

## Version 2.4 (web, Edge sur Xbox Series S) : héros animé, zones +50 %, minicarte, bandeau, sauvegardes (17 novembre)

Le 17 novembre, l'utilisateur a arrêté la version Google TV : il joue seulement à la version web, dans Edge sur la Series S. On ne livre plus d'APK.
- **Héros** (`src/heros.js`) : un voyageur articulé, avec chapeau pointu, écharpe, tunique, cape et bâton à lanterne. Il est animé à la main : marche, course penchée, saut, atterrissage, respiration au repos, cape et lanterne qui bougent. **Double saut** : appuyer une seconde fois en l'air fait une culbute.
- **Zones +50 %** : SC passe de 2 à 3 (arête de 300 m). Les cœurs des zones écrits à la main gardent leur taille, et les ceintures et les nouvelles tuiles s'agrandissent. La maille du terrain passe de 3 à 3,6 m. La marche passe à 16, la course à 31.
- **Minicarte** : vos zones sont pleines et bordées d'or, avec un fanion ; les zones sauvages sont sombres. Chaque zone a le symbole de son type. Les Pierres de vos zones où une épreuve est possible clignotent, et une légende est ajoutée.
- **Bandeau** (`src/bandeau.js`) : en haut à droite, le mana par type (gris ∞), la production par cycle, et les domaines possédés par type (Citadelles, Donjons, Ressources, Antres, Assemblées).
- **Sauvegardes** (`src/sauvegardes.js`) : dans le menu, Sauvegarder (20 emplacements), Charger une partie, et Nouvelle partie.
- **Menus** : la liste défile pour garder le choix visible, et le cadre est limité à 84 % de la hauteur (marge de sécurité des télés).

## Version 2.1-grimoire : le Grimoire des cartes (17 novembre)

Ce que l'utilisateur a demandé : « ajoute un menu dans le jeu pour y mettre le grimoire ». Le menu pause a maintenant une entrée **Grimoire des cartes** (`src/grimoire.js`). On y trouve les règles des cartes, les cartes communes, puis une page par zone. Chaque page dit où gagner la carte (la Pierre d'éveil et son épreuve), le mana, le niveau actuel de la zone et le nombre de copies dans le paquet. Elle montre aussi la carte de chaque pôle au palier actuel, puis aux paliers 4 et 7. Tout est lu dans les cartes elles-mêmes, au niveau voulu, donc le Grimoire suit les cartes 2.2 sans retouche. Les longues listes (Voyager, Grimoire) défilent maintenant à la manette.

APK : `MozaWorld-TV-2.1-grimoire.apk`, versionCode 14.

## Version 2.1 : une carte par pôle, un effet par tuile (17 novembre)

Ce que l'utilisateur a demandé : « les cartes doivent être différentes selon le pôle choisi », liées à l'histoire de la zone et du pôle, et chaque tuile doit avoir un effet unique.
- Chaque zone qui a des pôles a maintenant deux cartes qui ne se ressemblent pas, une par pôle (`POLES` dans `src/zonesplus.js`). Par exemple, l'Oubli de Berestograd efface la garde des ennemis, et sa Mémoire dresse un rempart. La Tyrannie des Neuf Édits frappe fort mais blesse le héros, et leur Liberté frappe tous les ennemis. La version jouée dépend du côté où se trouve la zone, et sa force dépend de l'écart à zéro.
- Les Ressources n'ont pas de pôle, mais chacune a sa propre gerbe, tirée de son biome (`GERBES`).
- Nouveau comportement des ennemis : un ennemi peut « hésiter », c'est-à-dire perdre son action du tour.
- La liste complète, avec le lieu d'acquisition et chaque palier de −7 à +7, est dans `/mnt/project-files/demo-tv/v2.0/cartes-2.1.md`.

APK : `MozaWorld-TV-2.1.apk`, versionCode 13.

## Version 2.0 : fluidité, monuments, mana gris, carte agrandie (17 novembre)

Retour de test de la 1.9 : déplacements laborieux, « ça rame », marches dures à monter, activation peu claire, manque de mana.

- **Fluidité** (`src/fluidite.js`) : la scène envoyait ~630 000 triangles à chaque image, car les objets en série n'étaient jamais écartés. Chaque série a maintenant une sphère qui couvre tous ses exemplaires, et le terrain est découpé en carreaux : on ne dessine que ce qui est devant la caméra et pas perdu dans la brume.
- **Marches** : on franchit sans sauter tout ce qui fait moins de 1,35 m. Le héros et la caméra sont 30 % plus petits : les décors paraissent 30 % plus grands, sans toucher aux niveaux.
- **Monuments** : chaque Pierre d'éveil devient un monument selon le type (trône pour la Citadelle, obélisque gravé pour le Donjon, idole à rayons pour la Ressource, carcasse géante pour l'Antre, crieur pour l'Assemblée). La zone d'activation passe de 7 à 11 m.
- **Mana gris** : base infinie. Les cartes communes se paient en gris ; une carte de zone sans assez de mana de son type se joue quand même en gris, avec un effet affaibli (−25 %, pas de contre-pouvoir), signalé par un ruban gris sur la carte. Les réserves par type restent.
- **Cartes** : ni les combats ni l'activation ne donnent de carte. Chaque montée de niveau d'une zone (mue) donne sa carte de combat, en plus de la carte de pouvoir.
- **Carte agrandie** (`src/carte.js`, `src/zonesplus.js`, générateur dans `tools/carte/`) : 16 nouvelles tuiles Girih exactes (graine 12) autour des cinq zones, 21 en tout, dont 8 Ressources (tous les types de mana). Chaque tuile tire une sous-zone de la liste des 986 : nom, biome, mana, culture, pôles. Relief, couleurs, ciel et végétation viennent du biome ; le pôle négatif assombrit et crevasse, le pôle positif soulève en gradins lumineux. Une tuile reprend l'épreuve, les gardiens et la carte de combat de son type, à son nom (une Ressource passe le Chantier, la Récolte restant propre à Tezcamixtli). Chaque Ressource activée produit son propre mana à chaque cycle.
- Prévu : de nouvelles tuiles chaque jour jusqu'à environ 50 ; l'interface qui relie à la mue les bonus des tuiles reliées par des routes viendra avec les routes, qui n'existent pas encore dans la version télé.

APK : `MozaWorld-TV-2.0.apk`, versionCode 12, s'installe par-dessus la 1.9 (la partie en cours est gardée, les nouvelles tuiles s'ajoutent au niveau 0).

## Suggestions du projet intégrées

- Une épreuve par type de zone, chaque réussite = **+1 palier** avec un gros changement visible (mue).
- **Pôle choisi librement**, zone par zone.
- Difficulté qui monte avec l'éloignement de zéro ; cartes **Mineure** (paliers 1 à 3), **Majeure** (4-5), **Ultime** (6-7).
- **Contre-pouvoirs** : la carte d'une zone facilite l'épreuve d'une autre (Donjon → Citadelle → Antre → Marché → Ressource → Donjon).
- **Repérage** : avant l'épreuve, la zone montre brièvement ses deux paliers voisins.
- **Délai** avant de refaire évoluer la même zone (40 s ici au lieu d'un jour).
- **Trois blessures avant la mort** ; à la mort on perd ses cartes, les zones gardent leur niveau et redeviennent sauvages,
  et l'**empreinte** rend plus facile la reprise de ses anciennes zones.
- Secrets dorés qui n'existent qu'à certains niveaux ; musique propre à chaque zone et qui change avec le niveau.

## Commandes

Télécommande : ▲ ▼ marcher (tenir ▲ pour courir), ◀ ▶ tourner, OK sauter ou agir, Retour : menu.
Manette : croix ou stick, A = OK, B = Retour. Au clavier (pour tester sur PC) : flèches ou W A S D, Entrée, Échap, M pour la musique.

La partie est sauvegardée dans le navigateur de la télé. Le menu propose aussi Voyager, Paquet de cartes, Musique, Qualité d'image.
Si l'image saccade, la qualité baisse toute seule ; on peut la changer dans le menu.

## Assemblage

`sh build.sh` assemble `src/` en `index.html` (une seule page, Three.js r128 chargé depuis cdnjs).

## Application Android TV (APK)

`android/build-apk.sh` construit `MozaWorld-TV.apk` sans Android Studio (Ubuntu : `apt install aapt apksigner dalvik-exchange android-sdk-platform-23 zipalign`).
L'appli est une fenêtre plein écran qui affiche le jeu embarqué : Three.js et les polices sont dans l'APK, rien n'est téléchargé sur la télé.
Elle apparaît dans le lanceur Google TV avec sa bannière ; Retour ouvre le menu du jeu, qui propose « Quitter le jeu ».
La clé de signature (`mozaworld.keystore`) n'est pas dans le dépôt ; elle est gardée dans le dossier du projet pour que les versions suivantes s'installent par-dessus.

## Styles de rendu par zone (essai, APK 1.2-styles)

Chaque grande zone peut avoir son propre style de dessin, appliqué dans la dernière passe d'image (`src/styles.js`).
La passe relit la profondeur de chaque pixel, retrouve le point du monde qu'il montre et la zone où il tombe :
le style bascule exactement à la frontière, même quand on regarde une zone depuis sa voisine.

- **Givrecloche** : noir et blanc, brouillard épais (seul ce qui est dans la zone compte). Côté Brume, nuit d'encre ; côté Clarté, brume blanche. Les lumières colorées gardent leur couleur.
- **Chinampas** : manga. Traits d'encre (contours tirés de la profondeur), aplats, trame de points dans les ombres. Côté Folie, encre lourde et trame dense ; côté Raison, trait fin et pastel.

Menu → « Styles par zone » pour comparer avec et sans. Planches : `node tools/styles-capture.js index.html <dossier>`.

### 2.4 · Territoire de départ, zones scellées et chemins (17 nov.)
- Territoire de départ (regles-avancees.md, section 1 ter) : 12 tuiles au niveau 0 (choix C2) : 6 zones à cartes (1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée) et 6 Ressources. Ce sont les 5 zones d'origine plus les plus proches qui manquent (ZONES_DEP dans main.js).
- Les zones qui l'entourent sont à ±5 ; au-delà, pôle et niveau au hasard, tirés à chaque nouvelle partie (S.graine). Les Ressources hors départ ont un niveau 0 à 3 au hasard.
- Les Ressources ne donnent pas de carte de combat (elles produisent du mana).
- Zones scellées : hors du territoire de départ, une zone ne peut pas être activée tant que toutes les zones de départ ne sont pas à vous ou que le paquet compte moins de 15 cartes (une zone où vous avez une empreinte reste reprenable). Le bandeau montre « ⌂ x/12 départ ».
- Chemins (chemins.js) : chaque route ouverte trace un chemin de dalles entre les Pierres des deux zones ; le tracé reste si la route est coupée. Sur un chemin, aucune rencontre, sauf dans une Citadelle. Exception à venir : un rempart actif qui n'est pas à vous.

### 2.4 · Pouvoirs de carte du monde des Assemblées (17 nov., provisoires)
Code : tv/src/assemblees.js. Une Assemblée n'agit pas en combat : sa loi agit sur le monde quand elle est à vous, activée et au palier 1 ou plus (pôle − ou + selon le signe du palier).
1. Givrecloche (MAR) : Brume, le Donjon voisin n'est pas assailli ; Clarté, la minicarte montre le niveau et les secrets des zones à 2 tuiles.
2. Lande de Cezo (ASS006) : +1 mana par route ouverte à chaque cycle.
3. Balpak (ASS012) : repos des Pierres de Balpak et de ses voisines divisé par deux.
4. Delta de Pama (ASS150) : les assauts du sauvage arrivent deux fois plus tard.
5. Canyon de Fjorhel (ASS152) : Silence, deux fois moins de rencontres dans vos zones ; Chant, rencontres plus fréquentes, +1 mana par victoire.
6. Oasis de Raak (ASS155) : « Borner une zone » à sa Pierre ; la zone bornée ne recule pas face à une horde (et plus tard un rival).

### 2.4 · Une seule sorte de carte (17 nov., décision 2a)
- La « carte de pouvoir » de la 1.0 est retirée (S.cards, newCard, rangs Mineure/Majeure/Ultime, menu Paquet, compteur Cartes du HUD). La mue montre seulement la carte de combat du palier, et rien pour une Ressource.
- Le cycle des contre-pouvoirs (CONTRE) passe par la possession : si vous possédez et avez activé la zone qui en contre une autre, l'épreuve de celle-ci est plus facile, −1, puis −2 dès le palier 4 et −3 dès le palier 6 de la zone qui contre. En combat, la carte de la zone qui contre reste doublée (contreX).

### 2.5 · Interfaces et graphismes (17 nov.)
- 2.5.1 (retour de test du 18 nov.) : l'état tient sur une seule barre sombre en haut de l'écran (mana, domaines, territoire, royaume, danger, blessures, secrets).
- tv/src/ecrin.js : habillage commun des interfaces (cadres à filets d'or, coins ornés, fleurons, menus en lignes de manuscrit, bandeau en tableau, mue mise en scène). MZ_VERSION (affiché au titre et dans la pause) : à monter à chaque PR de jeu.
- Graphismes : la version web part en qualité « Belle » (ombres 2048, anticrénelage ×4) ; nouveau réglage « Splendide » (image en pleine largeur 1920). Si l'image tombe sous 27 images/s, la qualité baisse seule. Poussières de lumière autour du héros, couleur de la zone (tv/src/poussiere.js).

### Boucle 1.3 · Interface classieuse (19 nov. 2026)
- Un seul titre de zone : tant que le bandeau central est visible, le cartouche du haut à gauche s'efface (`body.toast-vu`, MutationObserver sur `#toast`), puis revient. À l'entrée dans une zone, le bandeau part au bout de ~3 s, sans répéter la phrase du palier que le cartouche affiche ensuite ; un léger voile sombre (60 %, sans cadre) le détache du décor.
- Surtitre du cartouche : deux éléments (type · biome) sur une seule ligne ; le détail complet reste en infobulle.
- Barre du haut en trois îlots (mana · territoire · ressources) séparés d'un filet d'or à losange ; valeurs clés en grand (zones à vous, paquet), un seul accent (l'or). Blessures et secrets rejoignent l'îlot des ressources (bandeau.js).
- Cartes de combat : les cartes non choisies montrent nom, type et trois lignes de texte avec fondu bas ; la carte choisie a une hauteur fixe et `ajuster()` réduit sa police par pas de 4 % (6 au plus), une mesure par carte et par main ; elle s'écarte de ses voisines et porte une ombre de la couleur de son mana. Mana du tour en grille de pastilles.
- Fichiers : ecrin.js, bandeau.js, cartes-visuel.js. Rien ne change dans main.js, combat.js, cartes.js ni anim-combat.js, ni dans la scène 3D (triangles et appels de dessin identiques, aux variations du tirage près).

### Boucle 3.2 · Météo et lumière signées par lieu et par pôle (20 nov. 2026)
- Fin de la neige sur la lave : chaque lieu a sa météo (ciels.js, cibles AT dans l'enveloppe de Z.atm, lissage de stepAtmo gardé) — neige dense / givre en paillettes (Glace), braises qui montent / cendres pâles (Feu), lucioles / pollen doré (Eau, Sève, mangrove), sable rouge / poussière horizontale / presque rien (Pierre et déserts : canyon, sable, sel, savane, steppe), bruine / akènes / pétales (Vent), flocons d'encre / rien (Givrecloche) ; un septième par palier ; mélange additif changé seulement au changement de famille ou de pôle (wI ≤ 1,2) ; soleil par paliers (−7…−4 rasant 8–12°, −3…+3 vers 35°, +4…+7 haut 55–65°, Pierre ≤ 17°), sol hémisphérique teinté de l'ombre du pôle ; les 260 poussières de lumière (poussiere.js) montent en braises, clignotent en lucioles ou glissent en grains, toujours un seul appel de dessin. Mesures : appels et triangles dans le bruit du banc (CIT 422 contre 454 avant sur la même machine).
### Boucle 3.1 · Sol : une écriture de pôle par famille de zone (20 nov. 2026)
- tv/src/sol.js : chaque famille a sa propre écriture de sol, en qualité Belle comme en Fluide (seuls le Voronoï du Donjon et le Girih complet restent réservés à Belle). À −7 : craquelure sèche en relief, sans lueur (Citadelle), veines de lave (Donjon), cendres en points qui couvent à peine (Ressource), flaques noires en miroir qui prennent le zénith ou l'horizon selon l'angle de vue (Antre), grandes dalles brisées et basculées (Assemblée). À +7 : Girih en relief doré, levé par la normale seule (Citadelle), traits Girih ou zellige (Donjon), prairie semée de fleurs (Ressource), nacre en écailles (Antre), mosaïque Girih pleine en trois aplats terre cuite, sable et vert de cuivre (Assemblée). Marché : losanges codés en luminance (craie sur encre à −7, sombres sur blanc à +7), lisibles à travers le gris de Givrecloche. Au niveau 0, chaque famille garde une trace faible de son motif. L'échelle ou la densité saute aux paliers ±2, ±4 et ±6. Le relief passe par la normale (dérivées), sans texture ni géométrie : aucun appel de dessin en plus. tv/tools/boucle.js mesure désormais les zones des planches.
