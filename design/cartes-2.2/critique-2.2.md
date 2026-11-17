# Critique des cartes 2.2 (agent critique et game design)

Fichiers lus : regles-avancees.md, consignes-cartes.md, conteur_A.md (+ conteur_A_paliers.md), conteur_B.md, conteur_C.md, conteur_D.md. 24 formes du palier 7, 21 tuiles.

**Alerte de structure.** Seul A applique la mise à jour de 18 h 22 (« chaque palier donne une carte », 7 cartes par pôle, nombres fixes). B, C et D livrent encore une carte « 1-6 » en a+bL. Ces trois fichiers sont à reprendre au format paliers avant intégration dans `cartes.js`.

## 1. Verdict par tuile

| Tuile | Ton unique ? | Pôles différents ? | Lien au background | Note |
|---|---|---|---|---|
| CIT Berestograd (A) | Oui : écorces, raclage, noms effacés, très net | Oui (oubli = brise-garde et défausse ; mémoire = riposte et récupération) | Excellent, progression en 7 étapes | 9 |
| DON045 Taïga de Kobor (A) | Oui (peaux teintes, pouce mouillé) | Oui (meute contre vérité qui tache) | Fort | 8 (prix seulement sur +) |
| ASS006 Lande de Cezo (A) | Oui (fève lestée, paravents) | Oui (brûlure contre vote, écho) | Fort | 8 |
| RES079 Ruines de Teoco (A) | Oui (obsidienne tournée vers le dedans) | n/a | Bon | 7 |
| RES212 Steppe de Gramir (A) | Ambiance oui, mécanique clonée sur RES334 | n/a | Bon | 5 |
| ANT079 Lucioles (B) | Oui (pourpre, larves, contrat au minium) | À moitié : les deux pôles 1-6 invoquent une bête | Fort | 7 |
| ASS150 Delta de Pama (B) | Oui (cordons à nœuds, crue votée) | Oui | Bon | 8 |
| ASS155 Oasis de Raak (B) | Ambiance oui (barre de sel) | Oui, mais **aucun prix dans les deux pôles**, et clone de ASS156 | Moyen | 5 |
| RES021 / RES122 / RES136 (B) | Oui (encens, corail d'Alvise, nid de Vann) | n/a | Bon | 7 (RES136 casse le jeu, voir §2) |
| DON058 Puits des Neuf Édits (C) | Oui (sceaux, cangues, lave) | Oui (tyrannie ciblée, liberté de zone) | Fort | 8 |
| ASS156 Givrecloche (C) | Oui (cartons d'orgue, brume, abbesse) | Oui ; prix seulement sur + | Fort | 6 (clone mécanique de Raak) |
| ASS152 Canyon de Fjorhel (C) | Oui (voix renvoyées par la paroi) | Oui ; prix seulement sur − | Fort | 7 |
| ANT120 Oasis de Maulu (C) | Oui (portes de l'aube et de midi) | À moitié : deux invocations au 1-6 ; 7 bien distincts | Bon | 7 |
| RES227 Dunes de Balo (C) | Oui | n/a | Bon | 7 |
| RES334 Chinampas (D) | Oui (entailles, îles qui reviennent) | n/a | Excellent (7 secrets réussis) | 8 |
| DON024 Fjord de Rames (D) | Oui (bandelettes, rameurs endormis, horreur juste) | Oui | Fort | 8 |
| ASS012 Cavernes de Balpak (D) | Oui (calcite rose de gencive) ; le −7 « bancs figés » pourrait passer à Givrecloche | Oui | Bon | 7 |
| RES374 / RES345 (D) | Oui (résine, bouse tiède) | n/a | Bon | 7 |

Sources réelles : aucune œuvre ni texte recopié repéré. Les mots culturels (kniaz, isba, exarque, cangue) restent des couleurs, pas des citations. Tic à corriger : six cartes d'Assemblée s'appellent « Loi de… » ou « Vote… » (Loi des greniers, Loi gravée, Loi de sel, Loi du tison, Loi des Cendres, Loi de Floraison). Elles sont interchangeables dans le Grimoire.

## 2. Corrections obligatoires

1. `RES136-gerbe` (Nid de salangane) | **Boucle infinie** : coût 0 + récupération ; deux copies (ou une copie avec Lettre ramassée `CIT-plus-1`, ou CIT-secret4) se reprennent sans fin, ce qui donne une garde et un mana infinis | ops → `[["garde","heros",[2,3]],["si","garde",[["pioche",1]]]]` (garde 2+3N, pioche 1 si le héros avait déjà de la garde ; 7,2 / 9,6 / 12). **Plus une règle moteur** : « Récupération ne reprend jamais une carte qui a elle-même Récupération ; 2 récupérations au plus par tour. »
2. Règle `mana` (section 5) | Le mana gagné en combat reste dans la réserve. Avec les Gerbes à coût 0 (RES021, RES227) et les secrets (DON058-secret-4 : +3 Feu), on cultive le mana sans limite | Nouveau texte : « Le mana ajouté par une carte est du **mana de combat** : il disparaît à la fin du combat. Seules les Ressources remplissent la réserve durable. »
3. Règle `echo` | L'écho (8 formes sur 24 le donnent) double le réveil d'une forme 7 : on gagne environ 80 points pour 6 de budget, et deux échos s'empilent | Nouveau texte : « L'écho double l'effet de base d'une carte, **jamais un réveil** ; une carte doublée par l'écho ne transmet pas son propre écho. »
4. Secrets qui posent une résonance (`DON058-secret-1`, `ASS156-secret-3`, `RES334-secret7`) | Pour 1 de coût, ils ouvrent un réveil de 30 à 45 points : ce sont les cartes les plus rentables du jeu | Ajouter `["prixDefausse",1]` et la règle « une résonance posée par un secret ou par l'atout Greffe ne donne que **la moitié** du réveil ».
5. `ASS156-plus7` (Le Treizième Carton) | Boost, écho, pioche 3, et au réveil pioche 2 plus 3 mana Glace : moteur trop fort pour un coût de 2 | Retirer `["boost"]` ; dans le réveil, `["mana","Glace",3]` devient `["mana","Glace",1]`.
6. `ASS006-moins7` (La Lande brûlée trois fois) | 4 mana Vent par lancer plus un boost au réveil, avec un écho de base | Retirer `["mana","Vent",2]` de la base (garder celui du réveil) ; base ≈ 42,6, compensée par `["brulure","tous",6,3]` (≈ 46).
7. `ANT079-moins` (Larve-de-Cuve) | L'attaque 2+2L atteint 14 par tour au palier 6, et la bête frappe chaque tour : l'invocation est sous-évaluée par la formule | `["invoque","Larve-de-Cuve",[4,3],[2,1]]` (PV 4+3L, attaque 2+L).
8. `ANT079-moins7` (Nuit close), réveil | La Reine 24 PV / 14 d'attaque frappe chaque tour : elle gagne seule un combat de boss | `["invoque","Reine Vespérine affamée",30,9]`.
9. `ASS155-moins` / `ASS155-plus` / `ASS155-moins7` (Raak, B) | Clone de Givrecloche (`ASS156-moins` = hésite + garde 2+3L à l'identique ; −7 = hésite tous + affaiblit + grosse garde + pose Givre) ; aucun prix dans la tuile | Raak devient une tuile de **sel et d'échange**. `ASS155-moins` → `[["garde","heros",[3,2]],["riposte",[1,1]],["prixDefausse",1]]` (« le prix de l'eau gravé : qui frappe paie »). `ASS155-moins7` : remplacer `hesite tous` par `["riposte",6]` ; la pose passe à **Sang** et le réveil à **Braise** (voir §3) ; ajouter `["prixPV",4]`. `ASS155-plus` : ajouter `["prixPV",2]` et passer à `["deg","cible",[4,2]]`.
10. `DON045-moins` / `ASS152-plus` / `ASS156-moins` | Prix absents d'un seul pôle (Kobor −, Fjorhel +, Givrecloche −) | `DON045-moins` : ajouter `["prixBete",2]` (le chien teint déteint) ; `ASS152-plus` : ajouter `["prixPV",2]` et `["garde","allies",[2,3]]` ; `ASS156-moins` : ajouter `["ennemiGarde",1]` et `["garde","heros",[3,3]]`.
11. `RES212-gerbe` (Gramir) | Ops identiques à `RES334-gerbe` (pioche 1 + soin 1+2N) ; 5 Gerbes sur 9 font « pioche 1 + X » | ops → `[["deg","hasard",[1,1],2],["affaiblit",1,"cible"]]` (les cavaliers du tribut ; 7 / 9 / 11).
12. Format D et B | D écrit `["vulnerable",n,cible]` (RES334-secret1, DON024-moins7, ASS012-plus, ASS012-moins7, ASS012-plus7), et B écrit la condition `moitiePV` alors que A écrit `mipv` : le moteur lira mal ces cartes | Tout passer en `["vulnerable",cible,n]` et en une seule clé de condition, `mipv`. Renommer aussi les cartes « Loi de… » : `ASS155-plus` « Barre de sel », `ASS012-moins` « Résine au scrutin », `ASS012-plus` « Calcite en fleur ».

## 3. Carte des combos (24 formes du palier 7)

| Forme | Pose | Réveille |
|---|---|---|
| CIT−7 Visage raboté / CIT+7 Tribunal des Bouleaux | Abîme / Sceau | Givre / Sang |
| DON045−7 Coffre scellé / DON045+7 Compte juste | Givre / Sang | Racine / Abîme |
| ASS006−7 Lande brûlée / ASS006+7 Vent sans paravent | Braise / Racine | Sceau / Braise |
| ANT079−7 Nuit close / ANT079+7 Aube tenue | Abîme / Racine | Sang / Braise |
| ASS150−7 Ensablement / ASS150+7 Loi du Partage | Sang / Sceau | Abîme / Racine |
| ASS155−7 Code de grès / ASS155+7 Lentille de sel | Givre / Braise | Sceau / Givre |
| DON058−7 Neuvième Édit / DON058+7 Puits ouvert | Sceau / Braise | Sang / Givre |
| ASS156−7 Scrutin sans visage / ASS156+7 Treizième Carton | Givre / Sceau | Abîme / Sang |
| ASS152−7 Mutisme / ASS152+7 Voix qui reviennent | Abîme / Racine | Sceau / Braise |
| ANT120−7 Troupeau de l'Aube / ANT120+7 Midi Rouge | Racine / Sang | Givre / Racine |
| DON024−7 Rames rentrées / DON024+7 Rêve des douze rames | Givre / Sceau | Abîme / Racine |
| ASS012−7 Siège de cendre / ASS012+7 Conseil en fleur | Braise / Racine | Sceau / Sang |

**Comptes (posée / réveillée)** : Sceau 5/4 · Racine 5/4 · Givre 4/4 · Braise 4/3 · Abîme 3/4 · Sang **3/5**. Les secrets ajoutent Sceau (1) et Abîme (2), l'atout Greffe ajoute Racine.

**Déséquilibres**
- **Sang** est le goulot : réveillée 5 fois, posée 3 fois seulement, et aucun secret ni atout ne la pose. Le correctif 9 (Raak −7 pose Sang) donne 4/5.
- **Braise** est la moins réveillée (3) : le correctif 9 (Raak −7 réveille Braise) la porte à 4. Sceau et Racine sont posées trop souvent (5 + secret ou Greffe) ; à surveiller.
- **Paires en double** (la même pose avec le même réveil) : Sceau→Sang ×3 (CIT+7, DON058−7, ASS156+7), Racine→Braise ×2 (ANT079+7, ASS152+7), Givre→Abîme ×2 (ASS156−7, DON024−7), Braise→Sceau ×2 (ASS006−7, ASS012−7), Braise→Givre ×2 (ASS155+7, DON058+7). Conseil : `ASS156+7` passe à pose Sceau / réveil **Braise** (la cloche fondue), ce qui casse le triplé.
- La boucle Givre ⇄ Abîme se joue sur la seule Glace (DON024−7, CIT−7, ASS156−7) : c'est une bonne identité, mais le correctif 3 (pas d'écho sur un réveil) est vital pour elle.

**Les 3 meilleures chaînes à montrer au joueur**
1. **Le Grand Gel** (tout en Glace, une seule réserve) : *Les rames rentrées* (pose Givre) → *Le Visage raboté* (réveil Givre : vulnérable 5 à tous ; pose Abîme) → *Le Scrutin sans visage* (réveil Abîme : brise-garde et 12 à tous, avec la vulnérabilité, soit environ 27 par ennemi). Contrôle total, puis exécution.
2. **La Meute de midi** (Feu → Feu → Sève) : *Le Puits ouvert* (pose Braise, brûlure 5×3 à tous) → *Les Voix qui reviennent* (réveil Braise : nouvelle brûlure et 6 à tous ; pose Racine et deux Écho-Chanteurs) → *Midi Rouge* (sacrifie une bête ; réveil Racine : 15 à tous qui ignorent la garde). Les brûlures cumulées font fondre une horde.
3. **Le Prix de la crue** (Feu → Eau → Feu) : *Le Mutisme de la Faille* (pose Abîme) → *L'Ensablement* (réveil Abîme : 14 à tous qui ignorent la garde, tous hésitent ; pose Sang) → *Le Neuvième Édit* (réveil Sang : 10 à tous et 10 de soin ; pose Sceau, qui prépare *La Lande brûlée trois fois* au tour suivant). C'est la chaîne qui récompense le plus le joueur qui a payé ses PV.
