# MozaWorld

Jeu en monde ouvert pour PC (cible : RTX 2070, souris et clavier).

Le monde est découpé en zones selon une mosaïque géométrique **girih**. Chaque type de tuile correspond à un type de zone, et chaque zone possède un niveau de **-7 à +7** qui évolue dynamiquement selon les actions des joueurs. Ce niveau définit l'apparence, les ressources, la production, les monstres et les PNJ de la zone.

Le joueur commence faible, prend possession des zones une à une et tire ses pouvoirs (ressources, pouvoirs, créatures) des zones qu'il contrôle. À la mort, on perd tout et on recommence.

## État (17 novembre 2026)

- **Moteur visé pour le jeu final :** Unreal Engine 5 (choisi le 10 novembre). Le passage à Unreal attend que les règles soient éprouvées.
- **Version jouable actuelle :** une page web (Three.js), dans le dossier `tv/`. Décision du 17 novembre : c'est le jeu pour l'instant, Unreal reste la dernière étape. Elle est publiée par GitHub Pages à partir de la branche `main` : https://mikeconseil-rgb.github.io/MozaWorld/ . Elle se joue à la manette dans Edge sur Xbox Series S, ou au clavier sur PC. La version Google TV (APK) est arrêtée depuis le 17 novembre.
- **Après chaque changement dans `tv/src/` :** lancer `sh tv/build.sh` pour reconstruire `tv/index.html`, sinon la page publiée ne change pas.

## Où trouver quoi

| Dossier | Contenu |
|---|---|
| `tv/` | Le jeu jouable : sources dans `tv/src/`, page assemblée `tv/index.html`, journal des versions `tv/LISEZMOI.md` |
| `design/cartes-2.2/` | Règles du combat et des cartes (`regles-avancees.md`), consignes d'écriture, cartes des quatre conteurs, critiques, outils qui génèrent les données du jeu et le Grimoire |
| `design/donnees/` | Liste des 986 sous-zones (version 2) et son générateur |
| `design/gameplay-cinq-tuiles.md` | Rôle de chaque type de tuile (fiche du 16 novembre, avec les mises à jour du 17) |
| `design/relecture-equipe-2026-11-16.md` | Relecture d'équipe du 16 novembre |
| `design/visuel-cartes/` | Direction artistique des cartes |
