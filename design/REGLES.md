# MozaWorld : règles en vigueur

État au 17 novembre 2026 (soir). Cette page dit **la règle qui s'applique aujourd'hui**, par sujet. Quand une décision change une règle, on corrige cette page le jour même et on ajoute une ligne à `DECISIONS.md`. En cas de désaccord avec un autre document, cette page gagne ; le détail du combat et des cartes est dans `cartes-2.2/regles-avancees.md`.

Légende : **(provisoire)** = accepté « pour l'instant », à revoir. **(pas encore dans le jeu)** = décidé, mais la version jouée ne le fait pas encore.

## 1. Le cadre

- Monde ouvert découpé en zones selon une mosaïque Girih qui pave tout le plan, sans trou. Le monde est tiré au hasard.
- La version jouée est une page web (dossier `tv/`), dans Edge sur Xbox Series S, à la manette, ou au clavier sur PC. C'est le jeu pour l'instant ; Unreal Engine 5 sur PC (RTX 2070) reste la dernière étape, sans date.
- Jeu solo d'abord. Vue à la troisième personne. Français seule langue. Budget : gratuit seulement ; tout achat se demande au cas par cas.
- L'adversaire principal est le monde sauvage. Les rivaux joués par l'ordinateur sont secondaires (18-19 nov., dans le jeu : quatre maisons, voir section 8).

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
- Environ 7 épreuves sur 10 reposent sur un choix moral cornélien, dur mais juste, pour adultes ; le choix décide du pôle. Les choix restent dans le monde après la mort du héros.
- **Scénario de zone** (18 nov., dans le jeu pour la Taïga de Kobor seulement) : chaque zone a une histoire en 15 marches, de −7 à +7, écrite par son conteur. À chaque éveil, la Pierre montre une scène et deux réponses : l'une enfonce la zone d'un palier dans son pôle, l'autre la ramène d'un palier vers l'autre pôle. Aucune n'est la bonne.
  - Chaque réponse a un prix payé au moment du choix : mana, PV retirés au prochain combat, une carte perdue ou exilée, la rancune d'une voisine. Le prix est annoncé, ou caché (« ? »).
  - Une parole donnée reste donnée : si l'épreuve échoue (blessure), on la retente sans pouvoir rechoisir.
  - Paliers 3 et 6 : respirations, sans choix. Se raviser (revenir vers 0) ne donne pas de carte.
  - Chaque réponse peut laisser une trace que le monde garde, même après la mort du héros ; une trace change des scènes plus loin.
  - À venir : l'épreuve habillée par la scène (soir 2), les effets des traces sur les zones voisines (soir 3), la narration à voix haute en français (voix d'homme et de femme). Les autres zones gardent le menu « Palier +1 / −1 » tant que leur scénario n'est pas écrit. Scénario complet : https://claude.ai/artifact/MLacQJNg6wYNcahU3DKw12
- Assemblée : l'épreuve est le **Duel d'arguments** (le Chantier ne sert plus qu'aux Ressources). C'est un duel de cartes contre le Conseil en place (deux orateurs et le président), joué avec le moteur de combat mais avec un **paquet politique à part**, jamais mêlé au paquet de combat. Les PV des orateurs sont leur conviction ; ceux du héros, son crédit (24, +2 par Assemblée tenue).
  - Paquet politique : 5 cartes communes à tous (Argument, Réfutation, Promesse, Menace, Rallier), plus une carte de voix par type de tuile tenue (Milice au prétoire pour les Citadelles, Édit scellé pour les Donjons, Clameur de la meute pour les Antres, Greniers ouverts pour les Ressources, Motion d'ordre pour les Assemblées) : 5 à 10 cartes.
  - Vote avant le duel : chaque voisine tenue vote pour vous (Assemblée 3, Citadelle 2, Ressource 2, Antre 1, Donjon 1) ; une voisine sauvage vote pour le pôle qui lui ressemble et contre l'autre (±1). Chaque voix nette retire 3 de conviction au Conseil (ou lui en ajoute).
  - Gagner fait monter l'Assemblée d'un palier ; perdre blesse, comme une épreuve ratée. Le Conseil se renforce avec le palier visé.

## 4. Le territoire de départ

- 12 tuiles : 1 Citadelle, 2 Donjons, 2 Antres, 1 Assemblée, 6 Ressources. **Elles sont à vous dès le début**, déjà activées, au niveau 1, chacune vers un pôle tiré au hasard (les Ressources au niveau 1, sans pôle). Pas de combat d'activation pour elles (18 nov.).
- Autour, les zones sont à ±6 (±5 avant le 18 nov. ; avec un départ au niveau 1, l'écart de 5 qui rend les gardiens mortels est gardé) ; au-delà, pôle et niveau au hasard à chaque partie. Les Ressources hors départ ont un niveau 0 à 3 au hasard.
- Les zones hors départ sont scellées tant que le paquet compte moins de 15 cartes (6 au départ, une de plus par palier gagné). Une zone qui dépasse de 5 niveaux votre plus haute zone a des gardiens mortels.

- **Contrôle des zones** (18-19 nov., dans le jeu ; « juste un peu comme le Go », référence Carcassonne) :
  - **Domaine** : un groupe d'un seul tenant de tuiles voisines (qui partagent un côté) du même type, **2 tuiles au moins** (une tuile seule ne compte pas). Il est **fermé** quand toutes ses tuiles sont à vous et activées. Un domaine fermé donne un bonus propre à son type, un par domaine fermé **(provisoire)** : Ressources +1 mana par cycle (du mana de la première tuile) ; Antres +2 PV à chaque bête en combat ; Citadelles +5 PV au héros en combat (+2 cases avec les blessures) ; Donjons +1 de résistance ; Assemblées +1 voix au vote du Duel d'arguments. Un toast annonce chaque domaine qui se ferme ou s'ouvre ; le bandeau compte les domaines fermés.
  - **Cœur du royaume** : une zone à vous dont toutes les voisines sont à vous et activées. Aucun rival ne peut la viser.
  - **Encerclée** : une zone sauvage dont toutes les voisines sont à vous et activées. Ses gardiens d'activation sont affaiblis : PV −25 %, attaque −1 **(provisoire)**.
  - **Verrou de Citadelle** : une Citadelle à vous et activée verrouille sa zone et ses voisines (même sauvages). Aucun rival ne peut prendre une zone verrouillée ou au cœur. Un rival peut contester une zone verrouillée (le verrou baisse ses chances de 20 points), mais pas une zone au cœur **(provisoire, 19 nov.)**.
  - Défense d'une zone à vous face au monde (hordes, rivaux) **(provisoire)** : au cœur +2, domaine fermé +1, verrou de Citadelle +2, cumulables. Face à une horde, le verrou ne s'ajoute pas au +3 de la Citadelle à 3 tuiles (19 nov.). Face aux rivaux, seul le domaine fermé compte en pratique : une zone au cœur ou verrouillée ne peut pas être visée.
  - La Pierre d'éveil d'une zone montre son domaine (tuiles tenues sur le total) et son statut : au cœur, encerclée, verrouillée.

## 5. Les cartes

- Départ : **plus de cartes communes** (18 nov.). Le paquet de départ, ce sont les 6 cartes de palier 1 des zones à cartes du territoire de départ, chacune du pôle tiré pour sa zone.
- **Une seule sorte de carte** : la carte de combat. On en gagne une, distincte, à chaque palier réussi d'une zone (paliers 1 à 6). Au palier 7, la carte change de nature et porte une résonance (Braise, Givre, Sang, Racine, Sceau, Abîme) qui permet les grands combos. La « carte de pouvoir » de la première version (Mineure, Majeure, Ultime) est supprimée **(retrait en cours dans le jeu)**.
- Les cartes diffèrent selon le pôle et viennent toujours de l'histoire de la zone. Chaque carte doit avoir un impact et un crochet de combo.
- Un secret trouvé donne une carte utilitaire. Les combats ne donnent jamais de carte. Les Ressources ne donnent pas de carte (les Gerbes sont retirées, leurs textes gardés pour de futurs atouts).
- Paquet : 40 cartes au plus. La forge du paquet en Citadelle est gardée pour plus tard.
- Contre-pouvoir : une carte de zone a son effet doublé dans la zone qu'elle contre.

## 6. Le mana et les routes

- Six types de mana, un par famille de biomes : Feu, Glace, Eau, Sève, Pierre, Vent. Une réserve par type.
- Une Ressource donne 1 mana de son type au niveau 1, 2 au niveau 2, 2 et un atout au niveau 3 (on choisit un atout parmi trois ; ce choix tient lieu de pôle).
- En combat, la capacité de dépense vaut le numéro du tour (1, 2, 3…), tous types confondus. Les boosts sont très rares. Le mana gris est infini, avec 25 % d'effet en moins : une carte de zone sans assez de son mana se joue en gris. Il n'y a plus de cartes communes à payer avec n'importe quel mana (18 nov.).
- Une route relie une Ressource de niveau 2 à une tuile voisine ; au niveau 3, elle greffe l'atout sur les cartes de cette tuile. Une tuile reçoit au plus autant de routes qu'elle a de côtés. Route coupée, atout perdu. Une horde fait baisser une Ressource d'un niveau et coupe ses routes (18-19 nov., dans le jeu).
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
- À la mort, le héros perd tout. L'héritier reçoit de nouveau le territoire de départ au niveau 1, pôles retirés au hasard, avec ses 6 cartes de palier 1. Ses autres zones gardent leur niveau mais redeviennent sauvages. Son empreinte rend leur reprise plus facile, tant que personne d'autre ne les a prises. La mort nourrit le monde sauvage.
- **Rivaux** (18-19 nov., dans le jeu) : quatre maisons rivales, secondaires et lentes, chacune avec le tempérament d'un conteur : Grisaille (A, aime les chutes, vise les Citadelles), Comptevent (B, explorateur-marchand, prend les Ressources), Sombreclef (C, sournoise, donjons et magie, vise les Donjons), Ombrelieue (D, mouvance lovecraftienne, prend les Antres). Écran « Rivaux » au menu Pause.
  - À chaque cycle, une maison agit avec une chance sur 6 **(provisoire, 19 nov. : était 1 sur 3)**, pas avant le 10e cycle **(provisoire, 19 nov. : était le 3e)** : soit elle prend une zone sauvage hors du territoire de départ (2 zones au plus par maison sur la carte de 21 zones, 1 + zones/20 en général **(provisoire)**), soit elle annonce qu'elle fera l'épreuve d'une de vos zones dans 2 cycles **(provisoire)** pour la baisser d'un palier. Une seule contestation à la fois.
  - Défense : aller à la Pierre de la zone avant l'échéance et battre le champion de la maison. Sans défense, la maison réussit 55 fois sur 100 **(provisoire)**, 10 de moins par point de protection de la zone **(provisoire ; vient du module Domaines)**, 10 au moins. Réussite : la zone reste à vous mais perd un palier et se repose.
  - Ne peuvent pas être contestées : une zone bornée (Pierre de bornage de Raak), une zone au cœur du royaume, une zone au repos. Une zone verrouillée ne peut pas être prise, mais elle peut être contestée **(provisoire, 19 nov.)**.
  - Une zone de rival se reprend comme une zone sauvage, en battant ses gardiens, un peu plus forts (PV ×1,2, attaque +1) **(provisoire)**.
  - Après la mort, les rivaux restent ; une zone prise par un rival perd votre empreinte. Une contestation tombe si la zone visée n'est plus à vous (mort du héros) **(provisoire, 19 nov.)** ; les hordes en marche, elles, continuent.
- **Empreinte** (18-19 nov., dans le jeu) : sur une ancienne zone à vous redevenue sauvage, les gardiens sont affaiblis (PV ×0,7), l'épreuve est plus facile d'un cran, la zone n'est pas scellée, et réussir l'épreuve d'un seul palier suffit à la reprendre, sans combat d'activation **(provisoire)**. L'empreinte s'efface quand un rival prend la zone.
- Les zones à ±7 lèvent des hordes qui envahissent les zones plus faibles ; souvent un seul des deux pôles envahit, et l'autre donne un pouvoir plus fort. Citadelles, remparts et Donjons aménagés défendent. L'assaut périodique contre le Donjon d'origine aménagé reste en place ; les hordes s'y ajoutent.
- **Hordes du sauvage** (18-19 nov., dans le jeu) :
  - Chaque zone (sauf les Ressources) a un **pôle envahisseur** fixé une fois pour toutes : −7, +7, ou les deux (environ une zone sur six) **(provisoire)**. Il est affiché dans la fiche de zone et à la Pierre d'éveil.
  - Au palier 7 de son pôle envahisseur, une zone, à vous ou sauvage, lève une horde après 5 cycles **(provisoire)** ; après chaque horde, elle attend de nouveau 5 cycles. Une seule horde par zone à la fois ; aucune avant le cycle 6 d'une partie **(provisoire)**.
  - Au palier 7 de l'autre pôle, la zone ne lève pas de horde et sa carte de palier 7 joue comme un palier 9 **(provisoire)**.
  - La horde est annoncée (message, flèche rouge sur la minicarte, ligne « Menaces » du bandeau) et arrive 3 cycles plus tard **(provisoire)** ; les Greniers de Pama doublent ce délai pour vos zones. Elle vise une zone à 2 tuiles au plus, plus faible de 2 ou 3 paliers exactement (« plus faibles de deux ou trois paliers » ; pas au-delà, ni une zone à 0) **(provisoire, 19 nov.)**, vos zones d'abord, la plus proche d'abord. La Brume de Givrecloche cache vos zones voisines.
  - Le héros peut aller à la Pierre d'éveil de la zone visée et affronter l'avant-garde (deux créatures de la zone source, de la force du palier de la cible +2) **(provisoire)**. Victoire : la horde est brisée, 3 mana du type de la source **(provisoire)**. Défaite : une blessure, la horde marche toujours.
  - Sans réponse, à l'arrivée : force de la horde (7 + 0 à 3) contre défense = niveau de la cible + 3 si une Citadelle tenue est à 3 tuiles ou moins + 3 si un rempart touche la zone + pièges actifs du Donjon aménagé voisin (2 au plus) + pouvoirs du domaine **(provisoire)**. La même Citadelle ne compte qu'une fois : son +3 « à 3 tuiles » remplace le +2 de son verrou, on garde le plus fort **(provisoire, 19 nov.)**. La défense tient à égalité ; elle rapporte alors 1 mana du type de la source.
  - Si la horde passe : la zone recule d'un palier vers 0 (Ressource : −1 niveau et routes coupées) ; une zone à vous qui tombe à 0 **reste à vous**, au niveau 0 : une seule horde ne la rend pas sauvage **(provisoire, 19 nov.)**. La Pierre de bornage de Raak protège la zone bornée.
  - Une zone sauvage à ±6 de son pôle envahisseur peut **gronder** et monter à ±7 (1 chance sur 40 par cycle) **(provisoire)**, pour que la guerre existe aussi quand le monde tiré n'a aucune zone à ±7.

## 9. Le beau et les juges

- Chaque zone doit avoir un style propre ; un style de rendu différent par tuile, surtout pour les 45 Citadelles.
- Les deux pôles changent les **décors eux-mêmes**, pas seulement la teinte : chaque palier vers ±7 ajoute des objets propres au pôle (nouvelles tuiles depuis la 2.6, zones d'origine depuis la 2.8, sauf les Ressources qui n'ont pas de pôle).
- Zones : arête de 400 m depuis la 2.6 (300 m avant). Chaque nouvelle tuile a trois lieux à découvrir (camp, cercle de pierres, belvédère), chacun avec un secret.
- **Inscriptions (19 nov., 2.9)** : chaque zone qui n'est pas une Ressource a quatre objets écrits (stèle, panneau, mur gravé, borne), écrits par le conteur de la zone. Leur texte change en cinq bandes de niveau (−7..−5, −4..−2, −1..+1, +2..+4, +5..+7) et l'objet suit le pôle. On lit en passant à côté, sans bouton ; une rune bleue signale un texte pas encore lu à ce niveau. Les Ressources n'en ont pas (design simple). Textes : `design/inscriptions/`, relus par le critique.
- Le combat est animé (carte qui vole, élan, impact), sans que les animations changent les règles.
- Le monde est animé : vent dans la végétation, braises vers −7 et lucioles vers +7, créatures qui errent (décoratives) (2.8).
- Exploration épurée par défaut : fiche de zone quelques secondes à l'entrée, aide qui s'efface, minicarte réduite ; RB ou Tab affiche l'interface complète (2.8).
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
