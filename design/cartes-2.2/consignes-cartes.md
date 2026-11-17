# Consignes d'écriture des cartes (version 2.2)

Ces consignes servent aux quatre conteurs (profils dans `/mnt/project-files/etape3/profils_agents.md`, consignes communes dans `etape3/consignes_conteurs.md`), au critique et au game design. Elles servent aussi de **méthode réutilisable** pour chaque nouvelle tuile ajoutée au jeu.

## 1. Règles du jeu à respecter (décisions de l'utilisateur)

- Le héros part avec **5 cartes communes toutes différentes et faibles** (Coup de bâton, Pas de côté, Pieu planté, Jet de pierre, Torche), sans carte de pioche. Assez pour une zone de niveau 0, peut-être 1.
- **Chaque carte a un impact** (utilisateur, 17 nov.) : un rôle qu'on retient et un crochet de combo identifiable, parce qu'elle permet peut-être de tuer « l'impossible boss du niveau 5 ». Pas de carte fade.
- **Terrain** (17 nov.) : la garde du héros est une unité, la Garde, qui prend les coups ; les bloqueurs et les bêtes tiennent le terrain ; les ennemis peuvent voler par-dessus, enfoncer au bélier ou piétiner (voir regles-avancees.md, section 1 bis).
- On gagne une **carte de zone uniquement quand la zone monte d'un palier** (épreuve réussie à la Pierre d'éveil), une copie par palier. Toutes les copies suivent le niveau actuel de la zone (L = écart à zéro, 1 à 7).
- **Les cartes doivent être différentes selon le pôle choisi** (− ou +) et toujours **liées au background de la zone ET au pôle**. Deux pôles d'une même zone ne doivent jamais être la même mécanique en miroir (pas « 10 dégâts » contre « 10 de garde » : deux façons de jouer).
- **Aucun pôle n'est le bien.** Un −7 n'est pas forcément mauvais ni un +7 bon. Chaque pôle a sa grandeur et son prix.
- **Choix cornéliens** : environ 2 cartes de pôle sur 3 portent un **prix** (perte de PV, défausse, ennemi qui se renforce, bête blessée, carte exilée…). Le prix doit être distribué à égalité entre pôles − et +.
- **Mana** : six types (Feu, Glace, Eau, Sève, Pierre, Vent). Une carte de zone se paie dans la réserve du type de sa zone ; sans assez de mana de ce type, elle se joue en **mana gris** (infini) avec 25 % d'effet en moins. La capacité de dépense monte de 1 par tour (1, 2, 3…). Les **boosts de capacité sont vraiment rares** (au plus une carte sur dix, et seulement à partir de L5).
- **Ressources** (hexagone) : pas de pôle, niveaux 1 à 3 seulement, une **Gerbe** propre à chaque tuile, coût 0, petite et tirée de son biome.
- **Forme du palier 7** (nouveau en 2.2, demande de l'utilisateur) : à ±7, la carte du pôle **change de nature**, pas seulement de chiffres. Toutes les copies se transforment en une **forme ultime** avec un autre nom et une autre mécanique (ex. une attaque devient un rituel, une invocation devient une armée qui se sacrifie). « Plus c'est dur, plus le pouvoir est ultime. » Et surtout, les formes ultimes doivent permettre des **combos vraiment forts entre elles** grâce aux **Résonances** (voir plus bas).
- **Résonances** (combos entre cartes de palier 7) : il y a six résonances, partagées par tout le jeu : **Braise** (feu qui couve, brûlure), **Givre** (figer, contrôle), **Sang** (prix payé, sacrifice), **Racine** (bêtes, invocations), **Sceau** (lois, cartes, pioche), **Abîme** (le vide, l'oubli, l'exil). Chaque forme ultime **pose** une résonance (elle reste posée tout le combat, on peut en cumuler) et **réveille** une autre résonance : « Si Braise est posée : … » avec un effet bonus énorme (souvent qui consomme la résonance). Les deux résonances d'une carte doivent venir du background et du pôle. Un combo de deux formes ultimes doit valoir nettement plus que deux cartes séparées (bonus de 60 à 100 % du budget), et une chaîne de trois cartes doit être possible.
- **Secrets**- **Secrets** (nouveau, demande de l'utilisateur) : chaque secret trouvé donne **une carte utilitaire** (un exemplaire). Utilitaire = elle agit sur les cartes, le mana, les intentions ou les règles du combat ; **ni dégâts, ni soin, ni garde directs**. Coût 0 ou 1, valeur fixe (pas de L). Elle reprend l'objet ou le lieu du secret.
- **Contre-pouvoir** : une carte de zone a son effet doublé dans la zone qu'elle contre (géré par le moteur, rien à écrire).

## 2. Le vocabulaire des effets (ce que le moteur sait faire)

Chaque effet s'écrit comme une opération. Les nombres « a+bL » grandissent avec l'écart L (1 à 7). Les opérations marquées *(2.2)* sont ajoutées dans la version 2.2.

| Opération | Effet | Tags |
|---|---|---|
| `deg` cible / tous / hasard×n | dégâts à une cible, à tous les ennemis, ou n coups au hasard | Dégâts |
| `garde` héros / alliés | garde (absorbe les coups jusqu'au tour suivant) | Garde |
| `soin` héros / alliés | soin | Soin |
| `pioche` n | piocher n cartes | Pioche |
| `hesite` cible / tous / n | l'ennemi n'exécute pas son intention ce tour | Contrôle |
| `affaiblit` n cible / tous | −n d'attaque pour tout le combat | Affaiblissement |
| `briseGarde` cible / tous | la garde ennemie tombe à 0 | Perce-garde |
| `ignoreGarde` | les dégâts de la carte ignorent la garde | Perce-garde |
| `invoque` nom, PV, attaque | une bête alliée (3 au plus) qui frappe à chaque tour et encaisse les coups à la place du héros | Invocation |
| `brulure` n, t tours *(2.2)* | la cible (ou tous) subit n dégâts au début de chacun de ses t prochains tours | Dégâts dans le temps |
| `vulnerable` n *(2.2)* | la cible subit +n dégâts à chaque coup jusqu'à la fin du combat | Marque |
| `riposte` n *(2.2)* | jusqu'au prochain tour, chaque coup reçu par le héros renvoie n dégâts à l'attaquant | Riposte |
| `volVie` *(2.2)* | le héros se soigne de la moitié des dégâts infligés par la carte | Vol de vie |
| `echo` *(2.2)* | la prochaine carte de zone jouée ce tour a son effet doublé | Écho |
| `recup` *(2.2)* | reprendre en main la dernière carte de la défausse | Récupération |
| `mana` type n *(2.2)* | ajouter n mana d'un type à la réserve | Mana |
| `boost` | +1 de capacité de dépense ce tour (rare) | Boost |
| `exil` *(2.2)* | la carte quitte le combat après usage | Exil |
| `pose` résonance *(2.2)* | pose une résonance (Braise, Givre, Sang, Racine, Sceau, Abîme) pour le combat | Combo |
| `reveil` résonance, consomme oui/non → effets *(2.2)* | si la résonance est posée : effets bonus (et on la retire si « consomme ») | Combo |
| `si` condition → effets *(2.2)* | bonus si : une bête est en jeu / le héros a moins de la moitié de ses PV / un seul ennemi reste / la cible hésite / le héros a de la garde | Condition |
| Prix : `prixPV` n, `prixDefausse` n, `prixBete` n, `ennemiGarde` n, `ennemiSoin` n *(2.2)* | le héros perd n PV (jamais sous 1) ; défausse n cartes au hasard ; la bête alliée la plus faible perd n PV ; chaque ennemi gagne n de garde ; chaque ennemi se soigne de n | Prix |

## 3. Budget de puissance (game design)

Points : 1 dégât = 1 ; 1 garde = 0,8 ; 1 soin = 1 ; pioche = 4 par carte ; hésite = 5 (tous : 4 par ennemi) ; affaiblit = 3 par point et par ennemi ; brise-garde = 3 ; brûlure = n×t ; vulnérable = 3n ; riposte = 2n ; invocation = PV/2 + attaque×1,5 ; écho = 6 ; récup = 4 ; boost = 6 ; mana = 3 par mana. « Tous » sur des dégâts : ×2,2 (≈ 2-3 ennemis).
Un prix rend des points : 1 PV = 1, défausse = 3 par carte, chaque ennemi +n garde = 2n, etc.

**Budget d'une carte de pôle** = (4 + 6 × coût) × (1 + 0,25 × (L − 1)), prix déduits. Donc au palier 1, coût 2 ≈ 16 points ; au palier 7 ≈ 40 points. Tolérance ±15 %.
**Gerbe** (Ressource) : coût 0, environ 7 / 9 / 11 points aux niveaux 1 / 2 / 3.
**Forme du palier 7** : même coût que la carte du pôle ou +1, environ 45 à 55 points sans combo, plus le bonus de réveil (60 à 100 % en plus). Pas de chiffre simplement gonflé : une autre mécanique.
**Secret** : coût 0 ou 1, environ 6 à 10 points, utilitaire seulement.

## 4. Format de sortie (pour chaque carte)

```json
{"id":"CIT-moins","zone":"CIT","pole":"-","palier":"1-7","nom":"…","cout":1,"cible":0,
 "effet":"Texte joueur, avec les nombres écrits a+bL quand ils grandissent (ex. « (2+L) dégâts à tous »).",
 "ops":[["deg","tous",[2,1]],["briseGarde","tous"],["si","seul",[["hesite","cible"]]]],
 "tags":["Pôle −","Dégâts","Perce-garde"],
 "ambiance":"Une phrase (12 à 20 mots), dans la voix du conteur, qui relie la carte au background et au pôle.",
 "budget":"16 → 40 (vérifié)"}
```
`palier` vaut `1-6` (carte du pôle) ou `7` (forme ultime) ; `pole` vaut `-`, `+`, `res` (Gerbe) ou `secret`. Pour un secret, ajouter `"secret":"titre exact du secret"`.

## 5. Méthode pour une nouvelle tuile (chaque jour)

1. Lire la ligne de la tuile (type, biome, mana, culture, pôles) dans `sous-zones-986-v2.csv` et son background s'il existe ; sinon, le conteur à qui elle revient écrit d'abord un **background court** (60 à 100 mots) et une ligne par pôle.
2. Choisir le conteur selon le ton (A décadence et tribut ; B échanges, routes, exploration ; C ruse, pièges, magie ; D horreur cosmique, l'indicible). Répartir pour que chacun ait sa part.
3. Écrire 4 cartes (pôle − paliers 1-6, pôle + paliers 1-6, forme ultime −7, forme ultime +7, chacune avec sa résonance posée et sa résonance réveillée) ou une Gerbe pour une Ressource, plus une carte utilitaire par secret de la tuile.
4. Vérifier : deux pôles = deux mécaniques différentes ; prix réparti ; budget dans la tolérance ; boost rare ; aucune famille d'effets répétée trois fois de suite dans la même région de la carte.
5. Critique : ton et esprit uniques (une ambiance ne doit pas pouvoir passer d'une tuile à l'autre), aucune source réelle recopiée.
6. Ajouter les entrées au fichier `tv/src/cartes.js` (données seulement, le moteur lit les `ops`), régénérer le récapitulatif, construire l'APK.

## 6. MISE À JOUR (18 h 22) : chaque palier donne une carte différente

Nouvelle règle de l'utilisateur : « Chaque palier donne une carte ». Pour chaque pôle d'une tuile, on écrit **7 cartes distinctes**, une par palier (1, 2, 3, 4, 5, 6 et la forme ultime du palier 7). Elles forment une **progression** liée au background (une petite histoire en 7 étapes vers le pôle), avec des mécaniques qui se répondent (synergies internes au pôle), pas la même carte avec des chiffres plus gros.
- Les nombres sont **fixes** (plus de a+bL) : budget de la carte du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)).
- Le palier 7 garde ses règles : nature différente, pose une résonance, en réveille une autre.
- Ressources : 3 Gerbes distinctes (niveaux 1, 2, 3).
- On possède la carte d'un palier tant que la zone est sur ce pôle à ce palier ou au-delà ; sinon elle s'endort (elle quitte le paquet de combat et revient quand la zone reprend ce palier).
- Format JSON : un objet par carte, avec `"palier": 1` … `7` (nombre), `"pole": "-"` ou `"+"` (ou `"res"` avec `"palier"` 1 à 3).

## 7. Longueur du texte (17 nov., fil « visuel des cartes »)
Le champ `effet` doit tenir en **250 caractères au plus** : au-delà d'environ 290, la carte devient illisible dans la main sur la télé. La narration va dans `ambiance`, pas dans `effet`. À la date du 17 nov., 22 formes du palier 7 dépassent 290 caractères et sont à raccourcir.
