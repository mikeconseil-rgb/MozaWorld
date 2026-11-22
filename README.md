# MozaWorld

Jeu en monde ouvert. La version jouée aujourd'hui est une page web, à la manette dans Edge sur Xbox Series S ; la version finale est visée sur PC avec Unreal Engine 5 (RTX 2070, souris et clavier).

Le monde est découpé en zones selon une mosaïque géométrique **girih**. Chaque type de tuile correspond à un type de zone, et chaque zone possède un niveau de **-7 à +7** qui évolue dynamiquement selon les actions des joueurs. Ce niveau définit l'apparence, les ressources, la production, les monstres et les PNJ de la zone.

Le joueur commence faible, prend possession des zones une à une et tire ses pouvoirs (ressources, pouvoirs, créatures) des zones qu'il contrôle. À la mort, on perd tout et on recommence.

## État (20 novembre 2026, version 2.24)

- **Le monde :** 925 zones posées sur une mosaïque Girih sans trou, dont 791 jouables ; les autres sont visibles mais scellées en attendant leur texte. Le monde se charge par régions.
- **Ce qui se joue :** territoire de départ de 12 zones, cartes gagnées aux paliers, combat sur le Plateau (trois voies), choix moraux scénarisés sur 8 zones, hordes, domaines, maisons rivales, tours de guet, Comptoir, caravanes, lois des Assemblées, pacte et siège final.

- **Moteur visé pour le jeu final :** Unreal Engine 5 (choisi le 10 novembre). Le passage à Unreal attend que les règles soient éprouvées.
- **Version jouable actuelle :** une page web (Three.js), dans le dossier `tv/`. Décision du 17 novembre : c'est le jeu pour l'instant, Unreal reste la dernière étape. Elle est publiée par GitHub Pages à partir de la branche `main` : https://mikeconseil-rgb.github.io/MozaWorld/ . Elle se joue à la manette dans Edge sur Xbox Series S, ou au clavier sur PC. La version Google TV (APK) est arrêtée depuis le 17 novembre.
- **Après chaque changement dans `tv/src/` :** lancer `sh tv/build.sh` pour reconstruire `tv/index.html`, sinon la page publiée ne change pas.

## Où trouver quoi

| Dossier | Contenu |
|---|---|
| `design/REGLES.md` | **Les règles en vigueur**, par sujet, avec un lexique. À lire en premier |
| `design/DECISIONS.md` | Registre des décisions, avec leur statut (en vigueur, provisoire, remplacée) |
| `tv/` | Le jeu jouable : sources dans `tv/src/`, page assemblée `tv/index.html`, journal des versions `tv/LISEZMOI.md` |
| `design/cartes-2.2/` | Règles du combat et des cartes (`regles-avancees.md`), consignes d'écriture, cartes des quatre conteurs, critiques, outils qui génèrent les données du jeu et le Grimoire |
| `design/donnees/` | Liste des 986 sous-zones (version 2) et son générateur |
| `design/gameplay-cinq-tuiles.md` | Rôle de chaque type de tuile (fiche du 16 novembre, avec les mises à jour du 17) |
| `design/relecture-equipe-2026-11-16.md` | Relecture d'équipe du 16 novembre |
| `design/plateau/` | Règles du Plateau de combat (`PLATEAU.md`) et notes des testeurs |
| `design/zones-serie/` | Consignes et lots des zones écrites en série |
| `design/inscriptions/` | Livres et inscriptions des zones |
| `design/visuel-cartes/` | Direction artistique des cartes |
| `design/equipe/` | Profils des quatre conteurs, consignes, races, textes des 20 premières zones, critiques |
| `design/simulation/` | Simulateur des 20 scénarios de gameplay (9 novembre) |
| `archives/` | Anciens prototypes (contrôle de zones, démos, préparation Unreal) |

## Avant de fusionner

Un test de fumée tourne sur chaque pull request (`.github/workflows/test-fumee.yml`) : la page démarre, une partie se lance, un combat se joue, sans erreur. Pour le lancer à la main : `node tv/tools/test-fumee.js`.

Les tests du gameplay du monde tournent tout seuls chaque nuit et à la demande (`.github/workflows/tests-monde.yml`, onglet Actions de GitHub) : `test-voyage` (voyage entre deux régions), `test-monde` (longue partie, plusieurs minutes), `test-hordes`, `test-rivaux`, `test-domaines`, `test-donjons`, `test-tours`, `test-commerce`, `test-caravanes`, `test-lois`, `test-pacte`, `test-siege` (dossier `tv/tools/`). À lancer aussi à la main quand on touche au module concerné.
