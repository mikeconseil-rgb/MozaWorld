# Relecture d'équipe du 16 novembre 2026

Copie de référence. Document vivant : https://claude.ai/artifact/8QmtupatAD12tvmFf7NPCM

## En bref

Les PR 1, 3 et 2 sont fusionnées dans main (la 4 l'était déjà) : main contient la version télé, le combat au tour par tour, les styles v2 et la fiche de gameplay. La page se construit à l'identique, tourne sans erreur, et l'APK 1.4 (versionCode 6) se reconstruit avec la même clé.

L'équipe a relu le code, la liste des 986 zones, les textes des conteurs et les docs à la lumière de toutes les décisions. Les décisions tiennent entre elles ; ce qui ne suit pas, ce sont les fichiers écrits avant elles. Cinq constats majeurs :

1. **La moitié des axes de pôles contredit la décision « ni bon ni mauvais ».** 15 des 30 axes de la liste des 986 sont des paires bien/mal (Corruption/Pureté, Mort/Vie, Folie/Raison, Mensonge/Vérité…), soit environ 490 zones.
2. **La liste des 986 date d'avant les décisions.** Elle a encore 180 Marchés, 106 Citadelles, 340 Ressources, et des pôles −7/+7 sur les Ressources, qui vont maintenant de 0 à 3.
3. **Le combat télé ne suit pas encore l'économie décidée.** Le mana s'y remplit à chaque tour (2 + Ressource) ; il n'y a ni réserve unique, ni entretien, ni mise de départ, ni six types de mana, ni tesselles.
4. **La version télé garde l'ancien Marché** (Givrecloche, épreuve du Chantier) au lieu de l'Assemblée, et le paquet part de 8 cartes, plafonné à 24, au lieu de 15 à 40.
5. **Aucun choix moral n'existe encore en jeu**, alors qu'ils doivent porter 7 épreuves sur 10.

## Questions pour l'utilisateur (sans réponse, l'équipe suit la recommandation)

Réponses du 16 novembre : 1 non, les axes restent tels quels (« deux axes, choix moraux, donc dur de dire bien et mal ») ; 2 oui, liste régénérée dans `design/donnees/sous-zones-986-v2.csv`. 3 remplacé le 17 novembre après le test de l'APK 1.5 (« la mise de mana n'est pas le fun ») : une réserve de mana, une capacité de dépense qui monte de 1 par tour, des boosts vraiment rares ; une réserve par type de mana, la capacité par tour étant commune à tous les types (APK 1.7). 4 : les mêmes 10 cartes communes peu fortes pour tous au départ (niveau 0, peut-être 1, rien de plus) ; le 15 à 40 vaut pour le paquet forgé en Citadelle. 5 ouvert, à décider par des tests (« pas encore satisfait »).

1. **Axes bien/mal.** Remplacer les 15 axes bien/mal par des paires de forces opposées (ex. Corruption/Pureté → Rouille/Vernis, Mort/Vie → Os/Sève, Folie/Raison → Rêve/Calcul) ? Reco : oui, l'équipe propose les 15 paires, l'utilisateur valide.
2. **Liste des 986.** La régénérer avec 383 / 246 / 182 / 130 / 45, l'Assemblée à la place du Marché, les Ressources sans pôle mais avec leur type de mana, en gardant les 20 zones déjà écrites ? Reco : oui.
3. **Mana pendant un combat.** La mise sort de la réserve et forme le budget du combat ; le héros ajoute 1 mana par tour ; le mana non dépensé revient à la réserve en cas de victoire, perdu en cas de fuite ou de défaite. Reco : oui, pour le prochain APK.
4. **Paquet de départ.** Reco : le minimum de 15 vaut dès le début ; 15 cartes faibles que la forge des Citadelles remplace ensuite.
5. **Cycle d'entretien des pièges.** Reco : 1 cycle = 1 jour de jeu, le même délai que pour refaire évoluer une zone (40 s dans la démo télé).

## Écarts dans la version télé (APK 1.4)

| Sujet | Dans le code | Décidé | Correction proposée |
| --- | --- | --- | --- |
| Losange | Givrecloche = Foire (Marché), épreuve du Chantier (main.js, combat.js) | Assemblée, duel d'arguments en cartes | Givrecloche devient l'Assemblée |
| Mana en combat | 2 + Ressource, rempli à chaque tour (combat.js) | Réserve unique avec entretien, mise de départ | Réserve au HUD, mise au début du combat |
| Types de mana | Un seul mana sans couleur | Six types, un par famille de biomes | Couleur sur chaque carte et Ressource |
| Ressource | Monte jusqu'à ±3, pôles Folie/Raison (main.js, zones2.js) | 0 à 3 sans pôle, bonus au niveau 3 | Ressource 0–3, choix de 3 bonus |
| Paquet | 8 au départ, 24 au plus | 15 à 40, forgé dans les Citadelles | 15 au départ, forge à Berestograd |
| Citadelle | Épreuve d'adresse | Siège au tour par tour, commerce, tesselles | Plus tard |
| Antre | Chasse aux lucioles (réflexe) | Combat contre l'alpha, abattre ou soumettre | Combat contre l'alpha |
| Choix moraux | Aucun | 7 épreuves sur 10 | Un choix moral avant chaque éveil |
| Donjon possédé | Rien après la conquête | Pièges payés en mana, assauts | Premier test décidé (Q14) |
| Contre-pouvoirs | Cycle avec le Marché | Cycle avec l'Assemblée | Renommer |

## Écarts dans les données

- Les 24 biomes de la liste correspondent exactement à la table des six manas.
- Liste des 986 (etape2/sous-zones-986.csv) : Ressource 340 (décidé 383), Antre 220 (246), Marché 180 (Assemblée 182), Donjon 140 (130), Citadelle 106 (45).
- Axes conformes : Glace/Feu, Fer/Bois, Sécheresse/Déluge, Tempête/Calme, Abysse/Ciel, Os/Corail, Pierre/Cristal, Nuit/Aurore, Silence/Chant, Sommeil/Éveil, Brume/Clarté, Oubli/Mémoire, Sang/Sève, Cendre/Floraison, Vide/Étoiles.
- Axes bien/mal à refaire : Corruption/Pureté, Ombre/Lumière, Tyrannie/Liberté, Poison/Nectar, Chaos/Ordre, Famine/Festin, Rouille/Or, Mort/Vie, Cauchemar/Rêve, Folie/Raison, Ruine/Abondance, Peste/Guérison, Mensonge/Vérité, Exil/Foyer, Pourriture/Croissance.
- Textes des conteurs (etape3 v2) : citent encore le Marché ; zones à axes bien/mal à relire.
- unreal/ : à mettre à jour avec la liste. controle-zones/ : parle encore de Marché.

## Trous de design restants

Duel d'arguments de l'Assemblée ; siège de la Citadelle ; pièges et assauts du Donjon possédé ; économie de la tesselle ; bonus concrets du niveau 3 par mana ; durée avant les hordes ; comment le monde rappelle les choix moraux à l'héritier ; victoires des 5 Citadelles épiques ; taille du monde face à 15–25 h de vie.

## Avis de l'équipe

- Game designer : la boucle est complète ; risque n° 1 = le choix moral jamais testé.
- Économiste : première grille : Ressource 1 / 2 / 2 + bonus par cycle, piège 1 mana par cycle, mise de combat 3 à 6.
- Level designer : basculer Givrecloche en Assemblée avant d'y mettre des cartes de loi.
- Directrice artistique : rien à changer au rendu télé ; renommer seulement Folie/Raison.
- Critique : refaire les 15 axes bien/mal.
- Conteurs A, B, C, D : grandeur des ruines ; routes marchandes de la tesselle ; pièges des Donjons sauvages ; Rêve et Abysse comme pôles étranges mais féconds.

## Prochaines étapes

1. APK 1.5 (Q14) : réserve unique de mana coloré, Ressources 0–3, mise de départ, paquet de 15, puis Donjon des Neuf Édits à aménager (3–4 pièges, un assaut).
2. Premier choix moral dans le même APK.
3. Givrecloche devient l'Assemblée.
4. Liste des 986 régénérée.
5. Grille économique chiffrée, testée au simulateur.
