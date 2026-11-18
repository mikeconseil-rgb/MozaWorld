# MozaWorld : règles en vigueur

État au 17 novembre 2026 (soir). Cette page dit **la règle qui s'applique aujourd'hui**, par sujet. Quand une décision change une règle, on corrige cette page le jour même et on ajoute une ligne à `DECISIONS.md`. En cas de désaccord avec un autre document, cette page gagne ; le détail du combat et des cartes est dans `cartes-2.2/regles-avancees.md`.

Légende : **(provisoire)** = accepté « pour l'instant », à revoir. **(pas encore dans le jeu)** = décidé, mais la version jouée ne le fait pas encore.

## 1. Le cadre

- Monde ouvert découpé en zones selon une mosaïque Girih qui pave tout le plan, sans trou. Le monde est tiré au hasard.
- La version jouée est une page web (dossier `tv/`), dans Edge sur Xbox Series S, à la manette, ou au clavier sur PC. C'est le jeu pour l'instant ; Unreal Engine 5 sur PC (RTX 2070) reste la dernière étape, sans date.
- Jeu solo d'abord. Vue à la troisième personne. Français seule langue. Budget : gratuit seulement ; tout achat se demande au cas par cas.
- L'adversaire principal est le monde sauvage. Les rivaux joués par l'ordinateur sont secondaires **(pas encore dans le jeu)**.

## 2. Les cinq types de tuile

| Forme | Type | Nombre visé sur 986 | Rôle |
|---|---|---|---|
| Hexagone allongé | Ressource | 383 | Source du mana ; niveaux 0 à 3, sans pôle ; aucune carte |
| Nœud papillon | Antre | 246 | Bêtes alliées ; passif de combat propre à chaque Antre et à chaque pôle |
| Losange | Assemblée | 182 | Siège politique ; cartes de loi ; pouvoir sur la carte du monde **(provisoire)** |
| Pentagone | Donjon | 130 | Cartes de puissance ; passif résistance et piège ; s'aménage une fois conquis |
| Décagone | Citadelle | 45 | Capitale ; passif endurance et Garde levée ; commerce **(pas encore dans le jeu)** |

- Chaque zone est unique : son histoire, ses deux pôles, ses cartes, son bonus. Les quatre conteurs écrivent, le critique juge le ton.
- Une zone va de −7 à +7. Les deux pôles ne sont ni le bien ni le mal : ce sont deux évolutions opposées, chacune avec sa grandeur et son prix. L'écart entre −7 et +7 doit être frappant, avec un saut visible à chaque palier (la mue).
- 5 Citadelles épiques donnent chacune une victoire à ±7 **(provisoire)** ; après une victoire, fin de ce monde et nouveau monde **(provisoire)**.

## 3. Prendre et faire monter une zone

- Activer une zone : battre ses gardiens à la Pierre d'éveil, au tour par tour. La zone est alors à vous.
- Éveiller : réussir l'épreuve de la zone la fait bondir d'un palier, dans le pôle choisi, avec une mue. Plus on s'éloigne de zéro, plus c'est dur ; les paliers 6 et 7 sont des combats de boss.
- Un délai sépare deux évolutions d'une même zone (un jour dans le jeu complet, 40 secondes dans la version jouée). Ce n'est pas une punition d'échec.
- Environ 7 épreuves sur 10 reposent sur un choix moral cornélien, dur mais juste, pour adultes ; le choix décide du pôle. Les choix restent dans le monde après la mort du héros **(pas encore dans le jeu : les épreuves actuelles sont des mini-jeux d'adresse)**.
- Assemblée : l'épreuve est le **Duel d'arguments** (le Chantier ne sert plus qu'aux Ressources). C'est un duel de cartes contre le Conseil en place (deux orateurs et le président), joué avec le moteur de combat mais avec un **paquet politique à part**, jamais mêlé au paquet de combat. Les PV des orateurs sont leur conviction ; ceux du héros, son crédit (24, +2 par Assemblée tenue).
  - Paquet politique : 5 cartes communes à tous (Argument, Réfutation, Promesse, Menace, Rallier), plus une carte de voix par type de tuile tenue (Milice au prétoire pour les Citadelles, Édit scellé pour les Donjons, Clameur de la meute pour les Antres, Greniers ouverts pour les Ressources, Motion d'ordre pour les Assemblées) : 5 à 10 cartes.
  - Vote avant le duel : chaque voisine tenue vote pour vous (Assemblée 3, Citadelle 2, Ressource 2, Antre 1, Donjon 1) ; une voisine sauvage vote pour le pôle qui lui ressemble et contre l'autre (±1). Chaque voix nette retire 3 de conviction au Conseil (ou lui en ajoute).
  - Gagner fait monter l'Assemblée d'un palier ; perdre blesse, comme une épreuve ratée. Le Conseil se renforce avec le palier visé.

## 4. Le territoire de départ

- 12 tuiles au niveau 0 : 1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée, 6 Ressources.
- Autour, les zones sont à ±5 ; au-delà, pôle et niveau au hasard à chaque partie. Les Ressources hors départ ont un niveau 0 à 3 au hasard.
- Les zones hors départ sont scellées tant que les 12 ne sont pas prises et que le paquet compte moins de 15 cartes. Une zone qui dépasse de 5 niveaux votre plus haute zone a des gardiens mortels.

## 5. Les cartes

- Départ : les mêmes 5 communes pour tous, toutes différentes et faibles (Coup de bâton, Pas de côté, Pieu planté, Jet de pierre, Torche).
- **Une seule sorte de carte** : la carte de combat. On en gagne une, distincte, à chaque palier réussi d'une zone (paliers 1 à 6). Au palier 7, la carte change de nature et porte une résonance (Braise, Givre, Sang, Racine, Sceau, Abîme) qui permet les grands combos. La « carte de pouvoir » de la première version (Mineure, Majeure, Ultime) est supprimée **(retrait en cours dans le jeu)**.
- Les cartes diffèrent selon le pôle et viennent toujours de l'histoire de la zone. Chaque carte doit avoir un impact et un crochet de combo.
- Un secret trouvé donne une carte utilitaire. Les combats ne donnent jamais de carte. Les Ressources ne donnent pas de carte (les Gerbes sont retirées, leurs textes gardés pour de futurs atouts).
- Paquet : 40 cartes au plus. La forge du paquet en Citadelle est gardée pour plus tard.
- Contre-pouvoir : une carte de zone a son effet doublé dans la zone qu'elle contre.

## 6. Le mana et les routes

- Six types de mana, un par famille de biomes : Feu, Glace, Eau, Sève, Pierre, Vent. Une réserve par type.
- Une Ressource donne 1 mana de son type au niveau 1, 2 au niveau 2, 2 et un atout au niveau 3 (on choisit un atout parmi trois ; ce choix tient lieu de pôle).
- En combat, la capacité de dépense vaut le numéro du tour (1, 2, 3…), tous types confondus. Les boosts sont très rares. Le mana gris est infini, avec 25 % d'effet en moins.
- Une route relie une Ressource de niveau 2 à une tuile voisine ; au niveau 3, elle greffe l'atout sur les cartes de cette tuile. Une tuile reçoit au plus autant de routes qu'elle a de côtés. Route coupée, atout perdu. Une horde fait baisser une Ressource d'un niveau et coupe ses routes **(pas encore dans le jeu)**.
- Sur une route, pas de rencontre, sauf dans une Citadelle ou près d'un rempart adverse actif.
- Le mana paie aussi les pièges du Donjon possédé. Le rythme d'entretien des pièges n'est pas tranché (trois rythmes à comparer dans le menu).
- La monnaie du commerce est la tesselle, séparée du mana **(pas encore dans le jeu)**.

## 7. Le combat

- Tour par tour, sur place, sur le Nœud : deux voies et un centre à tenir.
- La garde du héros est une unité, la Garde, qui s'effrite à chaque tour. Bêtes et bloqueurs tiennent le terrain (3 places). Les ennemis annoncent leur intention : attaque, vol par-dessus, bélier, élan puis frappe qui piétine, soin.
- Passifs du royaume : chaque Citadelle donne de l'endurance et lève la Garde ; chaque Donjon donne de la résistance et un piège ; chaque Antre donne un passif propre à son pôle.
- Rempart : une **route** qui relie deux Citadelles, ou une Citadelle et un Donjon, toutes possédées. Elle s'ouvre au menu « Remparts » de la Pierre d'éveil d'une Citadelle au palier 1 ou plus. Le rempart pose un bloqueur de 10 PV au début des combats de son domaine, 2 au plus ; il tombe si l'une des deux zones est perdue.
- Blessures **(provisoire)** : prototype façon Shadowrun (moniteur de 10 cases, niveaux L, M, S, D), à jouer deux ou trois soirs avant de garder un seul système. D'ici là, les cartes restent en chiffres.

## 8. La mort et la guerre

- Une défaite coûte une blessure de campagne ; à la troisième, le héros meurt.
- À la mort, le héros perd tout et repart avec les 5 communes. Ses zones gardent leur niveau mais redeviennent sauvages. Son empreinte rend leur reprise plus facile, tant que personne d'autre ne les a prises. La mort nourrit le monde sauvage.
- Les zones à ±7 lèvent des hordes qui envahissent les zones plus faibles ; souvent un seul des deux pôles envahit, et l'autre donne un pouvoir plus fort. Citadelles, remparts et Donjons aménagés défendent **(dans le jeu : seulement les assauts contre le Donjon aménagé)**.

## 9. Le beau et les juges

- Chaque zone doit avoir un style propre ; un style de rendu différent par tuile, surtout pour les 45 Citadelles.
- Les deux pôles changent les **décors eux-mêmes**, pas seulement la teinte : chaque palier vers ±7 ajoute des objets propres au pôle (nouvelles tuiles depuis la 2.6, zones d'origine depuis la 2.7, sauf les Ressources qui n'ont pas de pôle).
- Zones : arête de 400 m depuis la 2.6 (300 m avant). Chaque nouvelle tuile a trois lieux à découvrir (camp, cercle de pierres, belvédère), chacun avec un secret.
- Le combat est animé (carte qui vole, élan, impact), sans que les animations changent les règles.
- Le monde est animé : vent dans la végétation, braises vers −7 et lucioles vers +7, créatures qui errent (décoratives) (2.7).
- Exploration épurée par défaut : fiche de zone quelques secondes à l'entrée, aide qui s'efface, minicarte réduite ; RB ou Tab affiche l'interface complète (2.7).
- Le juge visuel des zones (note de 80 % au moins) est **suspendu** tant que le jeu est la version web. Il reprendra sous Unreal. Le critique reste en place pour les textes et les cartes.
- Musique : propre à chaque zone et à chaque niveau. Style MIDI : chaque zone a son air, tiré du classique du domaine public (Bach, Mozart, Beethoven, Grieg…), des comptines populaires (Frère Jacques, Au clair de la lune…) ou d'airs originaux dans l'esprit des jeux 16 bits (jamais une mélodie de jeu reprise). Au niveau 0 on n'entend que la trame ; chaque palier vers ±7 ajoute une couche (basse, accords, percussions, arpège ou canon, accords enrichis, ornements, harmonie). Vers −7 l'air passe en mineur puis en mode sombre et ralentit ; vers +7 il s'éclaire et accélère. Détail : `tv/src/musique.js` ; écoute : juke-box `tv/musique.html`.

## Lexique

| Mot | Sens |
|---|---|
| Pierre d'éveil | Le monument d'une zone, où on l'active et où on tente ses épreuves |
| Activer | Prendre une zone en battant ses gardiens |
| Éveil, palier | Un bond d'un niveau, vers − ou vers + |
| Mue | La transformation visible de la zone à chaque palier |
| Pôle | L'un des deux sens d'évolution d'une zone (par exemple Oubli et Mémoire) |
| La Garde | L'unité qui prend les coups devant le héros |
| Bloqueur | Unité sans attaque qui tient le terrain |
| Atout | Bonus d'une Ressource de niveau 3, greffé sur des cartes par une route |
| Résonance | Marque posée par une carte du palier 7, qu'une autre réveille pour un combo |
| Empreinte | Avantage de l'ancien maître pour reprendre ses zones après sa mort |
| Tesselle | La monnaie des Citadelles |
| Le Nœud | Le champ de bataille : deux voies et un centre |
