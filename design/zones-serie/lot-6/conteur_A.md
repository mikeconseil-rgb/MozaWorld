# Lot 6 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes) et seize Ressources (fiche légère, sans carte). Carte des familles : `familles_A.md`, écrite avant les cartes (06 h 49) et mise à jour à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte (aucun vol de vie chez A) ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` : paliers 1 à 6 entre −13 % et +12 % ; formes du palier 7 entre **45 et 53 points de base** (leçon 8 du lot 5, sans tolérance), réveil de +61 à +66 %. Aucun boost.

Prix : 5 cartes à prix sur 6 (paliers 1 à 6) dans chacun des 24 pôles, donc à égalité dans chaque zone (compté au script) ; chaque forme du palier 7 a un prix. Antres : 4 cartes d'invocation au moins par pôle (7 dans les pôles de bêtes).

Leçons des lots 1 à 5 appliquées, vérifiées au script (validateur du lot 5 complété) :
- **Dégâts ciblés sur 4 cartes au plus par pôle, 5 en Donjon**, `si` compris : 4 partout, 5 seulement dans deux pôles de Donjon (DON009 −, DON028 −), dont l'autre pôle reste à 4. **Jamais en lest** : le validateur refuse plus de 2 cartes par pôle qui finissent sur « X dégâts à la cible » (forme 7 comprise).
- Écho sur 2 cartes au plus (DON099 −), jamais en famille. Récupération sur 4 cartes au plus. « Tous » sur 3 cartes sur 7 au plus ; hésitation de tous jamais sur deux cartes voisines.
- **Les deux pôles d'une zone n'ont jamais la même famille principale**, pioche, invocations et dégâts ciblés compris (contrôlé au script).
- **Couples déjà joués : familles comptées au script dans les cartes des lots 1 à 5** (5 cartes ou plus, `si` et réveil compris), pas dans les notes. Le validateur refuse toute famille principale déjà jouée par le même mot de pôle.
- **La pioche n'est famille nulle part** ; en appoint (3 ou 4 cartes) dans 2 pôles (ASS173 −, ASS120 −). Une famille d'appoint dans 3 de mes pôles au plus (hors invocations et dégâts ciblés).
- Conditions `si` prises dans `cartes.js` (lu sans modification) ; ni `defausseCommune` ni `recupCommune` ; aucun `si` testé après l'opération de la même carte qui le rendrait vrai (y compris un prix en PV avant `blesse`, une défausse payée avant `defausseAPrix`) ; `"cible":1` et « la cible » dès qu'une opération ou une condition vise un ennemi précis ; chaque nombre des `ops` figure dans l'effet ; tag « Loi » exactement quand l'effet commence par « Loi » (2 ou 3 Lois par pôle d'Assemblée).
- Phrase d'ouverture de 3 à 6 mots sur les 24 formes du palier 7 ; chaque forme pose une résonance et en réveille une autre.
- **Aucun nombre** dans la prose d'A (récits, `pal`, noms, ambiances), ni en chiffres ni en lettres. Au plus deux chutes en « …, sans X. » (il n'y en a aucune). Mots interdits des lots 1 à 5 absents (liste du validateur). Aucun pigment au +7.
- Prénoms et institutions sur la liste commune (familles_A à D) : aucun recoupement avec B, C ou D. Pas de « conseil », « kurultai », « darbar ».
- Noms vérifiés contre `noms-pris.txt` ; premiers mots des Ressources tous différents ; aucun récipient en objet principal, aucun produit tinctorial.

Recettes de récit (aucune deux fois, aucune reprise du lot 5) : ANT156 la liste des interdits ; ANT151 l'ordre noué en cordelette ; ANT027 l'inventaire sur tablette ; ANT205 l'éloge ; ANT114 l'épitaphe runique ; ASS173 le procès-verbal ; ASS120 les instructions de route ; ASS105 l'almanach ; DON009 l'acte de vente ; DON099 la consultation ; DON028 le poème d'adieu ; CIT018 le rapport d'inspection.

Recettes des extrêmes : −7 en ruine (ANT156, ANT114), foule (ANT151), vide (ANT027, ASS120, ASS105), démesure (ANT205, DON099), silence (ASS173, DON028, CIT018), ordre (DON009) ; +7 en silence (ANT156, DON099), vide (ANT151), ordre (ANT027, ASS173), foule (ANT205, ASS105), démesure (ANT114, ASS120, DON009, DON028, CIT018). Aucun +7 où le végétal avale un bâtiment (la haie d'ANT114 ferme un enclos de tombes ; les troncs de DON009 ne touchent pas la forge).

Résonances des formes du palier 7 (posée → réveillée). Posées : chacune 4 fois. Réveillées : Racine 6, Braise 4, Sceau 4, Givre 4, Sang 3, Abîme 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT156 | Braise → Racine | Sceau → Braise |
| ANT151 | Sang → Racine | Racine → Sceau |
| ANT027 | Givre → Sang | Abîme → Givre |
| ANT205 | Givre → Sceau | Sceau → Braise |
| ANT114 | Racine → Abîme | Sang → Givre |
| ASS173 | Abîme → Sceau | Braise → Racine |
| ASS120 | Givre → Abîme | Sang → Givre |
| ASS105 | Sceau → Racine | Abîme → Sang |
| DON009 | Braise → Sceau | Racine → Braise |
| DON099 | Sang → Racine | Racine → Sang |
| DON028 | Givre → Abîme | Braise → Givre |
| CIT018 | Sceau → Braise | Abîme → Racine |

Familles d'effets (comptées au script, palier 7 compris). Familles plafonnées chez A : 2 pôles au plus chacune, et 3 places rares choisies pour le récit (enchaînement, hésitation, hasard).

| Zone | Pôle − | Pôle + | Déjà joué pour ces mots (lots 1 à 5, au script) |
|---|---|---|---|
| ANT156 Corruption / Pureté | invocations (7) + brûlure (4), `brule` | riposte (7) + garde du héros (4), bêtes (4), `garde` | Corruption : garde du héros, brûlure, vol de vie, perce-garde, affaiblissement ; Pureté : garde du héros, dégâts ciblés, récupération, pioche, soin du héros, brûlure |
| ANT151 Peste / Guérison | enchaînement (6) + affaiblissement (4), bêtes (4), hésitation (3) | invocations (7) + soin du héros (4), soin des alliés (3), `bete` | Peste : brûlure, affaiblissement, marque, riposte, perce-garde, hasard, vol de vie, exil, invocations… ; Guérison : soin du héros, garde du héros, pioche, récupération, soin des alliés, affaiblissement |
| ANT027 Brume / Clarté | garde des alliés (7) + bêtes (4), hésitation (3), `vol` | invocations (7) + perce-garde (4), soin du héros (3), `cibleGarde` | Brume : hésitation, affaiblissement, hasard, riposte, invocations (D ANT047) ; Clarté : pioche, perce-garde, garde des alliés, mana, écho, soin du héros. Lot 6 : C ANT129 (invocations / affaiblissement) |
| ANT205 Cendre / Floraison | perce-garde (7) + dégâts à tous (3), affaiblissement (3), bêtes (4), `pietine` | soin du héros (7) + bêtes (4), `blesse` | Cendre : brûlure, dégâts à tous, invocations, affaiblissement ; Floraison : pioche, écho, soin des alliés, riposte, garde du héros, marque, mana, invocations |
| ANT114 Os / Corail | marque (7) + bêtes (4), `elan` | garde des alliés (7) + riposte (4), bêtes (4), `seul` | Os : brûlure, affaiblissement, hasard, pioche, perce-garde, garde des alliés, invocations, exil ; Corail : pioche, garde du héros, mana, brûlure, soin du héros, invocations, soin des alliés |
| ASS173 Ombre / Lumière | Lois d'affaiblissement (7) + pioche (4), hésitation (3), `hesiteAvant` | Lois de soin du héros (7) + garde du héros (4), affaiblissement (4), `blesse` | Ombre : hésitation, perce-garde, riposte, garde du héros, pioche ; Lumière : brûlure, pioche, riposte, dégâts à tous, invocations, soin des alliés |
| ASS120 Sécheresse / Déluge | **pôle construit sur `defausseAPrix`** (7 cartes) + récupération (4), pioche (4), riposte (4), soin du héros (4) | Lois d'exil (6) + garde des alliés (4), dégâts à tous (3), soin des alliés (3), `cibleGarde` | Sécheresse : affaiblissement, pioche, marque, brûlure, garde du héros, vol de vie, mana, soin du héros, exil ; Déluge : dégâts à tous, hésitation, garde des alliés, invocations, mana |
| ASS105 Vide / Étoiles | Lois d'hésitation (7) + récupération (4), brûlure (4), hasard (3), `hesite` | Lois de mana d'Eau (7) + marque (4), hasard (3), `cartesJouees` (3) | Vide : perce-garde, pioche, invocations, exil, garde du héros ; Étoiles : brûlure, hasard, pioche, garde des alliés, soin des alliés, perce-garde, invocations |
| DON009 Fer / Bois | riposte (7) + gros coups ciblés (5), perce-garde (4), `elan` | garde du héros (7) + bêtes (4), récupération (3), `garde` | Fer : garde du héros, perce-garde, dégâts ciblés, invocations ; Bois : riposte, soin des alliés, garde des alliés, invocations, pioche |
| DON099 Cauchemar / Rêve | coups au hasard (7) + bêtes (4), écho (2), `vol` | marque (7) + soin des alliés (4), bêtes (4), `vulnerable` | Cauchemar : riposte, marque, dégâts ciblés, invocations, dégâts à tous, vol de vie, pioche, brûlure ; Rêve : soins, hésitation, écho, perce-garde, pioche, récupération, invocations, exil, garde du héros |
| DON028 Pierre / Cristal | perce-garde (7) + gros coups ciblés (5), garde du héros (4), hasard (3), marque (3), `cibleGarde` | brûlure (7) + marque (4), mana (3), `brule` | Pierre : dégâts à tous, garde des alliés, garde du héros, affaiblissement, dégâts ciblés, invocations ; Cristal : marque, invocations, dégâts ciblés, pioche, écho, perce-garde |
| CIT018 Rouille / Or | exil (6) + riposte (4), brûlure (4), bêtes (4), garde des alliés (3), `pietine` | affaiblissement (7) + garde des alliés (4), bêtes (3), `seul` | Rouille : marque, perce-garde, brûlure, affaiblissement, dégâts ciblés, garde du héros, hasard ; Or : pioche, mana, invocations, dégâts ciblés, récupération, garde des alliés, garde du héros |

Appoints de 3 ou 4 cartes chez A (hors invocations et dégâts ciblés), 3 pôles au plus par famille : hésitation (ANT027 −, ANT151 −, ASS173 −), affaiblissement (ANT151 −, ANT205 −, ASS173 +), soin du héros (ANT027 +, ANT151 +, ASS120 −), riposte (ANT114 +, ASS120 −, CIT018 −), soin des alliés (ANT151 +, ASS120 +, DON099 +), brûlure (ANT156 −, ASS105 −, CIT018 −), dégâts à tous (ANT156 −, ANT205 −, ASS120 +), garde du héros (ANT156 +, ASS173 +, DON028 −), récupération (ASS105 −, ASS120 −, DON009 +), hasard (ASS105 −, ASS105 +, DON028 −), marque (ASS105 +, DON028 −, DON028 +), mana (ASS120 −, ASS120 +, DON028 +), garde des alliés (ASS120 +, CIT018 −, CIT018 +), perce-garde (ANT027 +, DON009 −), pioche (ASS173 −, ASS120 −), enchaînement en crochet (ASS105 +, 3 cartes).

Ressources (un geste, un objet, une image chacune ; comparées aux 255 Ressources des lots 1 à 5 et aux tables de B, C et D du lot 6) : voir les notes avant chaque fiche. Gabarit « seigneur qui prélève et petites gens qui gardent » sur trois Ressources (RES325, RES114, RES337).

## Points pour le critique

- **ASS120 − (Sécheresse) est un pôle construit sur un crochet**, comme le demande le défaut de fond n° 1 du lot 5 : `defausseAPrix` sur les 7 cartes, et chaque carte paie elle-même une défausse qui sert à la suivante (le `si` est lu avant le prix de la carte, donc il ne compte que les défausses des cartes jouées avant). C'est mon seul crochet à 5 cartes ou plus (D a le sien sur `bete`, ANT075 +).
- **Trois places rares choisies pour le récit** : l'enchaînement de la Peste (ANT151 −, la contagion passe d'une carte à l'autre), l'hésitation du Vide (ASS105 −, le vertige du tombant ; ciblée surtout) et les coups au hasard du Cauchemar (DON099 −, le petit homme des marais). Avec B et C, l'hésitation, le hasard et l'enchaînement sont pleins à 2.
- **Garde du héros : 7 pôles dans le lot** d'après les tables du 06 h 55 (C 2, B 2, D 2, A 1 : DON009 +, le Bois qui encaisse). A a écrit sa table à 06 h 49, avant B et D ; la place de trop est à reprendre chez le dernier.
- **Quarantaine** : B ANT180 (Peste/Guérison) est une quarantaine de col ; ANT151 ne dit pas le mot (l'ordre du gouverneur, les malades portés au récif), et les images n'ont rien en commun (récif, poissons nettoyeurs contre col, manteau ciré, molosses).
- **Cordelettes nouées** : C cite le khipukamayuq (ASS095, institution) ; ANT151 ne garde que le geste (Huaman Tito noue les noms), sans le mot.
- **ANT114, Nordiques en savane** : le corail est l'arbre-corail (fleurs rouges), pas un corail marin ; la haie de +7 ferme un enclos de tombes, ce n'est pas un bâtiment avalé.
- **Dégâts ciblés à 4 cartes dans 22 pôles sur 24** : c'est le nouveau plafond, atteint presque partout ; les cartes sans dégâts ciblés portent la famille, une bête, un soin ou une marque, et 2 cartes par pôle au plus finissent sur des dégâts.
- **Appoints à 3 pôles** pour treize familles : chaque appoint est au plafond chez A, aucun au-dessus. Le tic signalé (la pioche) n'est plus qu'en 2 pôles.
- Ressources changées après lecture des tables de B et D : RES083 (termites → poudre de baobab : trop d'insectes avec les chenilles de B), RES151 (le manteau tendu sous l'arbre doublait les bâches de D RES010 : chaîne de mains à la place), RES321 (l'amarante battue et vannée doublait la quinoa de B RES327 : escamoles), RES328 (fauconneaux trop près des gerfauts de B ANT234, puis rhubarbe trop près du houblon des murs de B RES133 : clous de cuivre des portes).

---

## 1. Lua-Kapu, le Cratère des Interdits (ANT156) — Antre · Volcan · Feu · Polynésienne

Recette du récit : la liste des interdits (récitée à des oiseaux). Recette du −7 : la ruine (le cratère souillé, les carcasses) ; du +7 : le silence (personne ne monte, un vieil homme récite).

**Corruption (−)** : le four de terre → les baies sans offrande → le mille-pattes des coulées → la fumée regardée en face → l'anguille des tubes → la cuisson interdite → la Déesse muette. Fil mécanique : bêtes des coulées gâtées sur 7 cartes, brûlure sur 4 cartes, crochet « la cible brûle déjà » (3 cartes) ; prix : vos bêtes et PV.
**Pureté (+)** : la tresse sur la pierre → l'offrande jetée d'abord → le pas qu'on ne fait pas → la chouette des pierres levées → la lèvre interdite → les oiseaux qui ne descendent pas → le Cratère muet. Fil mécanique : riposte sur 7 cartes (le tapu frappe qui le touche), garde du héros sur 4 cartes, oiseaux blancs, crochet « la Garde est levée » (3 cartes) ; prix : garde ennemie et défausse.

```json
{"fiche":"ANT156","nom":"Lua-Kapu, le Cratère des Interdits",
 "recit":"Le prêtre Kaleo tenait la liste des interdits du cratère : ne pas cueillir les baies rouges de la lèvre sans en jeter d'abord à la déesse, ne pas cuire dans les fumerolles, ne pas mener les cochons au bord, ne pas regarder la fumée en face. Chaque génération en ajoutait. Quand la liste devint plus longue que sa mémoire, les gens cessèrent d'en tenir aucun. On cuit maintenant le cochon dans les fumerolles ; il a bon goût. Kaleo récite encore la liste, assis sur la lèvre, pour les oiseaux blancs.",
 "pal":["Le cratère fume jaune sur des carcasses de cochons ; les coulées noires sont fendues, croûtées de soufre, et plus aucun oiseau ne les survole.","Des fours de terre creusés près des fumerolles, des os rongés, des sentiers piétinés jusqu'à la lèvre ; les baies rouges sont arrachées sans offrande.","Un cratère fumant au-dessus de la forêt, des pierres levées sur sa lèvre, quelques fours de terre, et des oiseaux blancs qui tournent haut sans descendre.","Les sentiers se referment sous les fougères, les pierres levées portent des tresses fraîches ; les oiseaux blancs se posent sur la lèvre du cratère.","Plus personne ne monte : la lave coule claire, une nuée d'oiseaux blancs couvre la lèvre, et un vieil homme seul récite au bord, à voix basse."],
 "pm":"Corruption","pp":"Pureté"}
```

```json
[
{"id":"ANT156-moins-1","zone":"ANT156","pole":"-","palier":1,"nom":"Le Four de terre","cout":1,"cible":1,
 "effet":"Un Cochon des fumerolles rejoint le combat : 6 PV, frappe 3. La cible brûle : 2 par tour pendant 2 tours. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Cochon des fumerolles",6,3],["brulure","cible",2,2],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Brûlure","Prix"],
 "ambiance":"On a creusé le premier four à côté de la fumerolle ; le cochon y cuit sans bois ni pierre.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT156-moins-2","zone":"ANT156","pole":"-","palier":2,"nom":"Les Baies sans offrande","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts à la cible. Un Rat des fours rejoint le combat : 6 PV, frappe 2. La cible brûle : 2 par tour pendant 2 tours. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",6]]],["invoque","Rat des fours",6,2],["brulure","cible",2,2],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Les baies rouges de la lèvre se cueillent à pleines mains ; la déesse n'a plus sa poignée.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT156-moins-3","zone":"ANT156","pole":"-","palier":3,"nom":"La Scolopendre des coulées","cout":2,"cible":0,
 "effet":"Une Scolopendre des coulées rejoint le combat : 12 PV, frappe 6. 4 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Scolopendre des coulées",12,6],["deg","tous",4],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Elle vit dans les fentes chaudes des coulées et sort quand on retourne les pierres levées.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ANT156-moins-4","zone":"ANT156","pole":"-","palier":4,"nom":"La Fumée regardée en face","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts à tous les ennemis. Tous les ennemis brûlent : 2 par tour pendant 3 tours. Un Chien des fours rejoint le combat : 8 PV, frappe 4. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","tous",6]]],["brulure","tous",2,3],["invoque","Chien des fours",8,4],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Le jeune homme a regardé la fumée en face pour voir ; il a vu de la fumée.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"ANT156-moins-5","zone":"ANT156","pole":"-","palier":5,"nom":"L'Anguille des tubes","cout":2,"cible":1,
 "effet":"Une Anguille des tubes rejoint le combat : 14 PV, frappe 7. 12 dégâts à la cible ; le héros gagne 4 de garde.",
 "ops":[["invoque","Anguille des tubes",14,7],["deg","cible",12],["garde","heros",4]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Garde"],
 "ambiance":"Dans les tubes de lave refroidis, l'eau de pluie dort, et l'anguille aveugle y grossit.",
 "budget":"32,7 / 32 (+2 %)"},
{"id":"ANT156-moins-6","zone":"ANT156","pole":"-","palier":6,"nom":"La Cuisson interdite","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 14 dégâts à la cible. Un Grand Verrat soufré rejoint le combat : 16 PV, frappe 8. 10 dégâts à la cible. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",14]]],["invoque","Grand Verrat soufré",16,8],["deg","cible",10],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le cochon cuit dans la fumerolle a bon goût ; Kaleo le dit lui-même, la bouche pleine.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT156-moins7","zone":"ANT156","pole":"-","palier":7,"nom":"La Déesse muette","cout":2,"cible":1,
 "effet":"La déesse ne répond plus. Le Verrat-roi (18 PV, frappe 10) ; tous brûlent (3 par tour, 3 tours) ; 8 à la cible. Pose Braise. Si Racine (consommée) : une Scolopendre (14 PV, frappe 8) ; 6 dégâts à tous. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Verrat-roi des coulées",18,10],["brulure","tous",3,3],["deg","cible",8],["pose","Braise"],["reveil","Racine",true,[["invoque","Scolopendre géante",14,8],["deg","tous",6]]],["prixBete",3]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Brûlure","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Kaleo a cessé de compter les interdits rompus ; il compte les cochons, qui sont plus nombreux.",
 "budget":"48,8 sans combo ; réveil +32,2 (66 %)"},
{"id":"ANT156-plus-1","zone":"ANT156","pole":"+","palier":1,"nom":"La Tresse sur la pierre","cout":1,"cible":0,
 "effet":"Riposte 4 jusqu'à votre prochain tour ; le héros gagne 5 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",4],["garde","heros",5],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Riposte","Garde","Prix"],
 "ambiance":"Chaque matin, une tresse de feuilles fraîches noue la pierre levée ; personne n'avoue l'avoir nouée.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT156-plus-2","zone":"ANT156","pole":"+","palier":2,"nom":"L'Offrande jetée d'abord","cout":1,"cible":0,
 "effet":"Si la Garde du héros est levée, riposte 3 jusqu'à votre prochain tour. Un Oiseau blanc du cratère rejoint le combat : 6 PV, frappe 3. Le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["riposte",3]]],["invoque","Oiseau blanc du cratère",6,3],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Riposte","Garde","Condition","Prix"],
 "ambiance":"La première poignée de baies va dans la fumée ; l'autre poignée, on peut la manger.",
 "budget":"11,7 / 12,5 (−6 %)"},
{"id":"ANT156-plus-3","zone":"ANT156","pole":"+","palier":3,"nom":"Le Pas qu'on ne fait pas","cout":2,"cible":1,
 "effet":"Riposte 7 jusqu'à votre prochain tour ; 8 dégâts à la cible ; l'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",7],["deg","cible",8],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Riposte","Prix"],
 "ambiance":"Une pierre levée marque le bord ; le pied qui la dépasse revient brûlé, et sans excuse.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT156-plus-4","zone":"ANT156","pole":"+","palier":4,"nom":"La Chouette des pierres levées","cout":2,"cible":0,
 "effet":"Si la Garde du héros est levée, riposte 8 jusqu'à votre prochain tour. Une Chouette des pierres levées rejoint le combat : 10 PV, frappe 5. Le héros gagne 8 de garde.",
 "ops":[["si","garde",[["riposte",8]]],["invoque","Chouette des pierres levées",10,5],["garde","heros",8]],
 "tags":["Antre","Feu","Pôle +","Invocation","Riposte","Garde","Condition"],
 "ambiance":"Elle dort dans le creux de la plus haute pierre, et ne s'envole que devant les menteurs.",
 "budget":"26,9 / 28 (−4 %)"},
{"id":"ANT156-plus-5","zone":"ANT156","pole":"+","palier":5,"nom":"La Lèvre interdite","cout":2,"cible":1,
 "effet":"Riposte 8 jusqu'à votre prochain tour ; 12 dégâts à la cible ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",8],["deg","cible",12],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Riposte","Prix"],
 "ambiance":"Sur la lèvre du cratère, on ne parle qu'à voix basse ; les cris tombent dans la fumée.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT156-plus-6","zone":"ANT156","pole":"+","palier":6,"nom":"Les Oiseaux qui ne descendent pas","cout":2,"cible":0,
 "effet":"Si la Garde du héros est levée, 6 dégâts à tous les ennemis. Une Nuée d'oiseaux blancs rejoint le combat : 12 PV, frappe 6. Riposte 7 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","tous",6]]],["invoque","Nuée d'oiseaux blancs",12,6],["riposte",7],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Les oiseaux blancs tournent au-dessus des fours de terre ; ils attendent que les fours refroidissent.",
 "budget":"33,6 / 36 (−7 %)"},
{"id":"ANT156-plus7","zone":"ANT156","pole":"+","palier":7,"nom":"Le Cratère muet","cout":2,"cible":1,
 "effet":"Le cratère se tait. Riposte 12 jusqu'à votre prochain tour ; le héros gagne 16 de garde ; 12 dégâts à la cible. Pose Sceau. Si Braise (consommée) : un Grand Oiseau blanc (14 PV, frappe 8) ; riposte 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",12],["garde","heros",16],["deg","cible",12],["pose","Sceau"],["reveil","Braise",true,[["invoque","Grand Oiseau blanc",14,8],["riposte",6]]],["ennemiGarde",1]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Riposte","Garde","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Kaleo récite la liste aux oiseaux ; ils l'écoutent jusqu'au bout, ce que personne n'a jamais fait.",
 "budget":"46,8 sans combo ; réveil +31 (66 %)"}
]
```

---

## 2. Yaku Pata, les Terrasses du Récif (ANT151) — Antre · Récif · Eau · Inca

Recette du récit : l'ordre du gouverneur noué en cordelette (les noms des malades, nœud par nœud). Recette du −7 : la foule (les malades couchés jusqu'à l'eau) ; du +7 : le vide (plus un malade, seulement les poissons qui attendent).

**Peste (−)** : le premier nœud → le crabe des civières → la fièvre des porteurs → l'otarie fiévreuse → les coraux qui pâlissent → la cordelette trop longue → la Côte qui tousse. Fil mécanique : l'enchaînement est la famille (la contagion passe d'une carte à l'autre : « si vous avez déjà joué une autre carte » ou « au moins votre troisième carte » sur 6 cartes), affaiblissement sur 4 cartes, bêtes malades sur 4 ; prix : PV.
**Guérison (+)** : le bassin clair → la crevette nettoyeuse → les plaies lavées → le nœud défait → les poissons pour la cour → les terrasses vidées → le Récif qui rend. Fil mécanique : bêtes du récif sur 7 cartes (poissons nettoyeurs, tortues), soin des alliés sur 3 cartes et soin du héros sur 4, crochet « une de vos bêtes est en jeu » (3 cartes) ; prix : défausse et soin ennemi.

```json
{"fiche":"ANT151","nom":"Yaku Pata, les Terrasses du Récif",
 "recit":"Le gouverneur ordonna de porter les malades de la côte sur les terrasses du récif, à marée basse, et Huaman Tito noua chaque nom sur une cordelette. À marée haute, de petits poissons rayés venaient nettoyer les plaies ; beaucoup guérirent. Le gouverneur voulut ces poissons pour la cour et les fit monter dans des jarres par les chemins de montagne. Ils moururent au premier col. Les malades guéris restèrent sur le récif : la cordelette ne disait pas comment on défait un nœud.",
 "pal":["Les terrasses du récif sont couvertes de malades couchés côte à côte jusqu'à l'eau ; les porteurs déposent encore des civières, et la mer monte.","Des civières de roseau alignées sur les terrasses, des cordelettes nouées aux piquets ; l'eau des bassins se trouble et les coraux pâlissent.","Des terrasses de pierre taillées dans le récif, que la mer couvre et découvre ; des bassins clairs, des poissons rayés, une cordelette nouée à un piquet.","Dans les bassins clairs, les poissons rayés tournent autour des jambes des baigneurs ; des tortues dorment sur les terrasses, les cordelettes pendent dénouées.","Le récif est vivant et clair jusqu'au large ; les terrasses n'ont plus de malades, seulement des bancs de poissons rayés qui attendent qu'on entre dans l'eau."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"ANT151-moins-1","zone":"ANT151","pole":"-","palier":1,"nom":"Le Premier Nœud","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 3. Si vous avez déjà joué une autre carte ce tour, piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",3],["si","cartesJouees",[["pioche",1]]],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Affaiblissement","Pioche","Condition","Prix"],
 "ambiance":"Huaman Tito noue le premier nom sur la cordelette et serre fort, comme on serre un garrot.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT151-moins-2","zone":"ANT151","pole":"-","palier":2,"nom":"Le Crabe des civières","cout":1,"cible":1,
 "effet":"4 dégâts à la cible. Un Crabe des civières rejoint le combat : 8 PV, frappe 3. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",4],["invoque","Crabe des civières",8,3],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Les crabes montent sur les civières la nuit ; les malades ne les chassent plus.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT151-moins-3","zone":"ANT151","pole":"-","palier":3,"nom":"La Fièvre des porteurs","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 6 dégâts à tous les ennemis. Puis 8 dégâts à la cible ; l'attaque de la cible baisse de 3. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["deg","tous",6]]],["deg","cible",8],["affaiblit","cible",3],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Les porteurs déposent les civières et repartent ; un jour, ils restent couchés à côté.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ANT151-moins-4","zone":"ANT151","pole":"-","palier":4,"nom":"L'Otarie fiévreuse","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, une Otarie fiévreuse rejoint le combat : 10 PV, frappe 5. 10 dégâts à la cible. Un Crabe des terrasses rejoint le combat : 8 PV, frappe 4.",
 "ops":[["si","cartesJouees",[["invoque","Otarie fiévreuse",10,5]]],["deg","cible",10],["invoque","Crabe des terrasses",8,4]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Condition"],
 "ambiance":"L'otarie s'est hissée sur la terrasse des malades, et personne n'ose la renvoyer à la mer.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ANT151-moins-5","zone":"ANT151","pole":"-","palier":5,"nom":"Les Coraux qui pâlissent","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, l'attaque de chaque ennemi baisse de 2. Si c'est au moins votre troisième carte ce tour, 12 dégâts à la cible. Puis la cible hésite ; 3 coups de 5 au hasard. Prix : le héros perd 2 PV.",
 "ops":[["si","cartesJouees",[["affaiblit","tous",2]]],["si","troisCartes",[["deg","cible",12]]],["hesite","cible"],["deg","hasard",5,3],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Contrôle","Condition","Prix"],
 "ambiance":"Le corail pâlit d'abord au bord des civières, puis d'une terrasse à l'autre, en suivant l'eau.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT151-moins-6","zone":"ANT151","pole":"-","palier":6,"nom":"La Cordelette trop longue","cout":2,"cible":1,
 "effet":"Dès votre troisième carte, 8 dégâts à tous les ennemis. Un Lion de mer fiévreux rejoint le combat : 14 PV, frappe 7. Si vous avez déjà joué une autre carte, piochez 1 carte. La cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["deg","tous",8]]],["invoque","Lion de mer fiévreux",14,7],["si","cartesJouees",[["pioche",1]]],["hesite","cible"],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Contrôle","Pioche","Condition","Prix"],
 "ambiance":"La cordelette de Huaman Tito traîne maintenant dans l'eau, et les poissons en mordillent les nœuds.",
 "budget":"31,3 / 36 (−13 %)"},
{"id":"ANT151-moins7","zone":"ANT151","pole":"-","palier":7,"nom":"La Côte qui tousse","cout":2,"cible":1,
 "effet":"La côte tousse. Après une autre carte, 3 coups de 6 au hasard. Le Grand Crabe (18 PV, frappe 10) ; la cible : attaque −4, elle hésite. Pose Sang. Si Racine (consommée) : attaque −3 ; une Mouette (12 PV, frappe 7) ; garde 4. Prix : le héros perd 3 PV.",
 "ops":[["si","cartesJouees",[["deg","hasard",6,3]]],["invoque","Grand Crabe des nattes",18,10],["affaiblit","cible",4],["hesite","cible"],["pose","Sang"],["reveil","Racine",true,[["affaiblit","cible",3],["invoque","Mouette des terrasses",12,7],["garde","heros",4]]],["prixPV",3]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Contrôle","Garde","Condition","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Le gouverneur a fait savoir que la côte était saine ; la côte a toussé pendant la lecture.",
 "budget":"47 sans combo ; réveil +28,7 (61 %)"},
{"id":"ANT151-plus-1","zone":"ANT151","pole":"+","palier":1,"nom":"Le Bassin clair","cout":1,"cible":0,
 "effet":"Un Poisson rayé des bassins rejoint le combat : 6 PV, frappe 3. Le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Poisson rayé des bassins",6,3],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Le premier malade est entré dans le bassin en tremblant ; les poissons rayés sont venus à ses jambes.",
 "budget":"10,3 / 10 (+3 %)"},
{"id":"ANT151-plus-2","zone":"ANT151","pole":"+","palier":2,"nom":"La Crevette nettoyeuse","cout":1,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, vos alliés se soignent de 4. Une Crevette nettoyeuse rejoint le combat : 6 PV, frappe 3. Le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["soin","allies",4]]],["invoque","Crevette nettoyeuse",6,3],["soin","heros",4],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Soin","Condition","Prix"],
 "ambiance":"Elle entre dans la bouche ouverte du mérou, en ressort, et le mérou la laisse faire.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT151-plus-3","zone":"ANT151","pole":"+","palier":3,"nom":"Les Plaies lavées","cout":2,"cible":1,
 "effet":"6 dégâts à la cible ; vos alliés gagnent 6 de garde. Une Tortue des terrasses rejoint le combat : 14 PV, frappe 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",6],["garde","allies",6],["invoque","Tortue des terrasses",14,4],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"À marée haute, l'eau couvre les terrasses ; à marée basse, les plaies sont propres et roses.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ANT151-plus-4","zone":"ANT151","pole":"+","palier":4,"nom":"Le Nœud défait","cout":2,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, 10 dégâts à la cible. Le héros se soigne de 8. Un Pélican du récif rejoint le combat : 10 PV, frappe 6.",
 "ops":[["si","bete",[["deg","cible",10]]],["soin","heros",8],["invoque","Pélican du récif",10,6]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Condition"],
 "ambiance":"Huaman Tito a défait un nœud de sa cordelette avec les dents ; il ne sait plus lequel.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT151-plus-5","zone":"ANT151","pole":"+","palier":5,"nom":"Les Poissons pour la cour","cout":2,"cible":1,
 "effet":"8 dégâts à la cible. Une Raie des bassins rejoint le combat : 12 PV, frappe 6. Vos alliés se soignent de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",8],["invoque","Raie des bassins",12,6],["soin","allies",8],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Les jarres de poissons rayés montent vers la cour par les chemins ; elles arrivent pleines d'eau seulement.",
 "budget":"32,8 / 32 (+2 %)"},
{"id":"ANT151-plus-6","zone":"ANT151","pole":"+","palier":6,"nom":"Les Terrasses vidées","cout":2,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 6 de garde. Un Banc de poissons rayés rejoint le combat : 16 PV, frappe 8. 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["garde","allies",6]]],["invoque","Banc de poissons rayés",16,8],["deg","cible",12],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Les guéris sont restés sur le récif ; ils pêchent, et ne rendent pas les poissons rayés.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT151-plus7","zone":"ANT151","pole":"+","palier":7,"nom":"Le Récif qui rend","cout":2,"cible":0,
 "effet":"Le récif rend les malades. Le Grand Mérou des terrasses (18 PV, frappe 10) ; alliés soignés de 12, héros de 8. Pose Racine. Si Sceau (consommé) : la Tortue-mère (16 PV, frappe 8) ; le héros se soigne de 10. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Grand Mérou des terrasses",18,10],["soin","allies",12],["soin","heros",8],["pose","Racine"],["reveil","Sceau",true,[["invoque","Tortue-mère",16,8],["soin","heros",10]]],["ennemiSoin",2]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Soin","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Sur la cordelette de Huaman Tito, il ne reste qu'un nœud : le sien, qu'il n'a pas défait.",
 "budget":"45,6 sans combo ; réveil +30 (66 %)"}
]
```

---

## 3. Bīt-Erpeti, les Îles aux Nuées (ANT027) — Antre · Îles flottantes · Vent · Mésopotamienne

Recette du récit : l'inventaire sur tablette (le compte qui augmente le tribut). Recette du −7 : le vide (la brume pleine, on n'entend que des chèvres) ; du +7 : l'ordre (chaque île visible, chaque chèvre comptée).

**Brume (−)** : la corne des bergers → les îles qui se perdent → le bouc des radeaux → la brume sur le compte → les cordes qui grincent → le tribut sur la brume → les Îles perdues. Fil mécanique : garde des alliés sur 7 cartes (la brume couvre les troupeaux), chèvres et béliers sur 4 cartes, hésitation sur 3, crochet « la cible vole par-dessus » (3 cartes) ; prix : PV et défausse. Différent d'ANT129 (C, Brume en invocations).
**Clarté (+)** : le ciel nu → la tablette du compte → l'aigle du temple → tout compté → le tribut fixé au ciel clair → les aigles sous les îles → l'Inventaire complet. Fil mécanique : rapaces sur 7 cartes, perce-garde sur 4 cartes, crochet « la cible a de la garde » lu avant de la briser (3 cartes) ; prix : garde ennemie et PV. Différent d'ANT129 (C, Clarté en affaiblissement).

```json
{"fiche":"ANT027","nom":"Bīt-Erpeti, les Îles aux Nuées",
 "recit":"Le temple du Vent possédait les îles qui flottent dans les nuées, avec leurs chèvres et leurs roseaux. Chaque printemps, le scribe Ilī-iddinam montait les compter sur sa tablette. La brume en cachait toujours une partie, et le temple faisait payer aux bergers ce que la brume avait pris. Une année, le ciel fut nu ; Ilī-iddinam compta tout, et trouva plus qu'on n'avait jamais vu. Le temple fixa le tribut sur ce compte-là. Depuis, les bergers brûlent de l'encens au vent pour que la brume revienne.",
 "pal":["Une brume blanche et pleine : on entend bêler des chèvres et grincer des cordes, mais on ne voit plus ni île, ni radeau, ni ciel.","Les îles se perdent l'une l'autre dans la brume ; les radeaux de roseaux restent amarrés, et les bergers s'appellent à la corne d'une rive à l'autre.","Des îles de terre et de roseaux flottent dans les nuées, reliées par des cordes ; des chèvres y broutent, et un petit temple de brique les domine.","Le ciel s'ouvre entre les îles ; on voit les cordes tendues de l'une à l'autre, les troupeaux qu'on compte, et des aigles qui tournent dessous.","Ciel nu de part en part : chaque île est visible jusqu'à l'horizon, chaque chèvre est comptée, et les aigles nichent sur le toit du temple."],
 "pm":"Brume","pp":"Clarté"}
```

```json
[
{"id":"ANT027-moins-1","zone":"ANT027","pole":"-","palier":1,"nom":"La Corne des bergers","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 4 de garde. Une Chèvre des nuées rejoint le combat : 6 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["garde","allies",4],["invoque","Chèvre des nuées",6,2],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Dans la brume, les bergers de Bīt-Erpeti s'appellent à la corne ; les chèvres répondent avant eux.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT027-moins-2","zone":"ANT027","pole":"-","palier":2,"nom":"Les Îles qui se perdent","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, la cible hésite. Puis 5 dégâts à la cible ; vos alliés gagnent 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["hesite","cible"]]],["deg","cible",5],["garde","allies",6],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Une île amarrée le soir n'est plus là au matin ; la corde pend, coupée net.",
 "budget":"11,7 / 12,5 (−6 %)"},
{"id":"ANT027-moins-3","zone":"ANT027","pole":"-","palier":3,"nom":"Le Bouc des radeaux","cout":2,"cible":0,
 "effet":"Un Bouc des radeaux rejoint le combat : 14 PV, frappe 5. Vos alliés gagnent 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Bouc des radeaux",14,5],["garde","allies",8],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Le vieux bouc saute d'un radeau à l'autre dans la brume, et il ne tombe jamais.",
 "budget":"22,1 / 24 (−8 %)"},
{"id":"ANT027-moins-4","zone":"ANT027","pole":"-","palier":4,"nom":"La Brume sur le compte","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis 6 dégâts à la cible ; vos alliés gagnent 10 de garde ; la cible hésite.",
 "ops":[["si","vol",[["deg","cible",10]]],["deg","cible",6],["garde","allies",10],["hesite","cible"]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Contrôle","Garde","Condition"],
 "ambiance":"Sur la tablette d'Ilī-iddinam, une ligne entière dit seulement : « pris par la brume ».",
 "budget":"28 / 28 (+0 %)"},
{"id":"ANT027-moins-5","zone":"ANT027","pole":"-","palier":5,"nom":"Les Cordes qui grincent","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 10 de garde ; 8 dégâts à la cible ; l'attaque de chaque ennemi baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","allies",10],["deg","cible",8],["affaiblit","tous",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Affaiblissement","Garde","Prix"],
 "ambiance":"Les îles tirent sur leurs cordes dans le brouillard ; on entend grincer, on ne voit rien bouger.",
 "budget":"30,2 / 32 (−6 %)"},
{"id":"ANT027-moins-6","zone":"ANT027","pole":"-","palier":6,"nom":"Le Tribut sur la brume","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, vos alliés gagnent 10 de garde. Un Bélier noir des îles rejoint le combat : 16 PV, frappe 8. 12 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["garde","allies",10]]],["invoque","Bélier noir des îles",16,8],["deg","cible",12],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le temple fait payer ce que la brume a pris ; les bergers paient, et prient pour la brume.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ANT027-moins7","zone":"ANT027","pole":"-","palier":7,"nom":"Les Îles perdues","cout":2,"cible":1,
 "effet":"On ne voit plus les îles. Alliés : 16 de garde ; tous les ennemis hésitent ; le Troupeau des nuées (16 PV, frappe 8). Pose Givre. Si Sang (consommé) : alliés +10 de garde ; une Oie (10 PV, frappe 4) ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["garde","allies",16],["hesite","tous"],["invoque","Troupeau des nuées",16,8],["pose","Givre"],["reveil","Sang",true,[["garde","allies",10],["invoque","Oie de la brume",10,4],["hesite","cible"]]],["prixPV",2]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Contrôle","Garde","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Ilī-iddinam est monté avec sa tablette ; il est redescendu avec la tablette vierge, et toussant.",
 "budget":"46,2 sans combo ; réveil +28 (61 %)"},
{"id":"ANT027-plus-1","zone":"ANT027","pole":"+","palier":1,"nom":"Le Ciel nu","cout":1,"cible":1,
 "effet":"Un Faucon des nuées rejoint le combat : 4 PV, frappe 3. La garde de la cible tombe à 0 ; 3 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Faucon des nuées",4,3],["briseGarde","cible"],["deg","cible",3],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"Un matin sans brume, on voit des îles qu'aucun berger n'avait jamais vues ; elles ont des chèvres.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT027-plus-2","zone":"ANT027","pole":"+","palier":2,"nom":"La Tablette du compte","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à la cible. Une Grue des îles rejoint le combat : 6 PV, frappe 3. Le héros se soigne de 3. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",6]]],["invoque","Grue des îles",6,3],["soin","heros",3],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Ilī-iddinam presse son roseau dans l'argile fraîche ; au ciel clair, la tablette ne suffit pas.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT027-plus-3","zone":"ANT027","pole":"+","palier":3,"nom":"L'Aigle du temple","cout":2,"cible":1,
 "effet":"Un Aigle du temple rejoint le combat : 12 PV, frappe 6. 8 dégâts à la cible ; le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Aigle du temple",12,6],["deg","cible",8],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"L'aigle niche sous le toit du temple et compte les chèvres à sa manière, une par une.",
 "budget":"24,2 / 24 (+1 %)"},
{"id":"ANT027-plus-4","zone":"ANT027","pole":"+","palier":4,"nom":"Tout compté","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, la garde de la cible tombe à 0. Un Milan des îles rejoint le combat : 10 PV, frappe 5. 12 dégâts à la cible.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["invoque","Milan des îles",10,5],["deg","cible",12]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Perce-garde","Condition"],
 "ambiance":"Au soir, la tablette est pleine, recto et verso ; Ilī-iddinam demande une autre motte d'argile.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT027-plus-5","zone":"ANT027","pole":"+","palier":5,"nom":"Le Tribut fixé au ciel clair","cout":2,"cible":1,
 "effet":"Un Vautour du toit rejoint le combat : 14 PV, frappe 7. 5 dégâts à tous les ennemis ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Vautour du toit",14,7],["deg","tous",5],["affaiblit","cible",2],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Affaiblissement","Prix"],
 "ambiance":"Le temple a fixé le tribut sur le compte du ciel clair ; la brume n'y peut plus rien.",
 "budget":"32,5 / 32 (+2 %)"},
{"id":"ANT027-plus-6","zone":"ANT027","pole":"+","palier":6,"nom":"Les Aigles sous les îles","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à tous les ennemis. Un Aigle des îles rejoint le combat : 14 PV, frappe 8. Toute garde ennemie tombe à 0 ; le héros se soigne de 5. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","tous",6]]],["invoque","Aigle des îles",14,8],["briseGarde","tous"],["soin","heros",5],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Perce-garde","Soin","Condition","Prix"],
 "ambiance":"Sous les îles, les aigles tournent dans le ciel nu, et les chèvres ne regardent plus en bas.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ANT027-plus7","zone":"ANT027","pole":"+","palier":7,"nom":"L'Inventaire complet","cout":2,"cible":0,
 "effet":"Chaque chèvre est comptée. L'Aigle-lion du temple (20 PV, frappe 10) ; toute garde ennemie tombe ; 3 coups de 6 au hasard. Pose Abîme. Si Givre (consommé) : un Faucon (10 PV, frappe 6) ; soin 8, garde 10. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Aigle-lion du temple",20,10],["briseGarde","tous"],["deg","hasard",6,3],["pose","Abîme"],["reveil","Givre",true,[["invoque","Faucon des nuées",10,6],["soin","heros",8],["garde","heros",10]]],["ennemiGarde",1]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Perce-garde","Garde","Soin","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"Le compte est juste à la chèvre près ; c'est la première fois, et les bergers le regrettent.",
 "budget":"47,6 sans combo ; réveil +30 (63 %)"}
]
```

---

## 4. Les Plaines d'Emlotheni (ANT205) — Antre · Steppe · Vent · Zouloue

Recette du récit : l'éloge (le vers ajouté, que le chef veut retirer). Recette du −7 : la démesure (la plaine noire jusqu'à l'horizon) ; du +7 : la foule (les fleurs à hauteur d'homme, les troupeaux qui y disparaissent, les abeilles).

**Cendre (−)** : le feu d'hiver → le drongo des fumées → les hommes aux branches → l'enclos du chef → les greniers → le vent qui tourne → le Veld sans herbe. Fil mécanique : perce-garde sur 7 cartes (le feu emporte les enclos), dégâts à tous sur 3 cartes, oiseaux et chacals qui suivent le feu sur 3 cartes, crochet « la cible s'apprête à piétiner » (3 cartes) ; prix : PV et vos bêtes.
**Floraison (+)** : l'herbe neuve → la fleur sur les pieux → le gnou des brûlis → le vers retiré → la vache aux cornes en lyre → plus haute que jamais → la Cendre en fleurs. Fil mécanique : soin du héros sur 7 cartes (les herbes du guérisseur repoussent après le feu), troupeaux sur 4 cartes, riposte et affaiblissement en touches, crochet « le héros a moins de la moitié de ses PV » (3 cartes, aucun prix en PV dans ce pôle) ; prix : défausse et soin ennemi.

```json
{"fiche":"ANT205","nom":"Les Plaines d'Emlotheni",
 "recit":"Chaque hiver, le chef faisait brûler le veld d'Emlotheni pour que l'herbe repousse tendre, et l'imbongi Mandlakazi chantait ses louanges : celui qui allume l'horizon, celui dont la cendre engraisse les vaches. Une année, le vent tourna, et le feu prit l'enclos du chef, ses greniers, la hutte de ses femmes. Mandlakazi ajouta un vers à l'éloge : celui que son propre feu reconnaît. Le chef ordonna qu'on le retire. Au printemps, l'herbe repoussa plus haute que jamais sur l'enclos brûlé. Mandlakazi chante le vers quand même, plus bas.",
 "pal":["Une plaine noire jusqu'à l'horizon, sans un brin d'herbe ; le vent lève la cendre en colonnes, et les enclos ne sont plus que des cercles de pieux calcinés.","Des bandes de feu courent dans l'herbe sèche, des hommes battent les flammes à coups de branches ; des oiseaux noirs suivent le feu pour les sauterelles.","Une steppe d'herbe blonde, des enclos de pieux, des vaches au loin ; sur une colline, un homme debout chante en levant son bâton.","L'herbe neuve perce la cendre en touffes vertes ; les vaches broutent sur les brûlis, et des fleurs basses s'ouvrent autour des pieux noircis.","La plaine entière fleurit, jaune et blanche, à hauteur d'homme ; les troupeaux y disparaissent, et les abeilles bourdonnent sur toute l'étendue."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ANT205-moins-1","zone":"ANT205","pole":"-","palier":1,"nom":"Le Feu d'hiver","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 4 dégâts à tous les ennemis. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["deg","tous",4],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Perce-garde","Prix"],
 "ambiance":"Le chef d'Emlotheni allume le veld de sa main, au vent du soir, et regarde le feu partir.",
 "budget":"10,8 / 10 (+8 %)"},
{"id":"ANT205-moins-2","zone":"ANT205","pole":"-","palier":2,"nom":"Le Drongo des fumées","cout":1,"cible":1,
 "effet":"Un Drongo des fumées rejoint le combat : 6 PV, frappe 3. Si la cible s'apprête à piétiner, la garde de la cible tombe à 0. Puis 4 dégâts à la cible. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Drongo des fumées",6,3],["si","pietine",[["briseGarde","cible"]]],["deg","cible",4],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Perce-garde","Condition","Prix"],
 "ambiance":"Le drongo noir vole au ras des flammes et happe les sauterelles qui fuient, la queue fourchue au vent.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT205-moins-3","zone":"ANT205","pole":"-","palier":3,"nom":"Les Hommes aux branches","cout":2,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 12 dégâts à la cible ; le héros gagne 8 de garde ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["deg","cible",12],["garde","heros",8],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Affaiblissement","Perce-garde","Garde","Prix"],
 "ambiance":"Les jeunes gens battent les flammes à coups de branches vertes ; ils rentrent noirs jusqu'aux yeux.",
 "budget":"23,4 / 24 (−3 %)"},
{"id":"ANT205-moins-4","zone":"ANT205","pole":"-","palier":4,"nom":"L'Enclos du chef","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 6 dégâts à tous les ennemis. La garde de la cible tombe à 0 ; 12 dégâts à la cible. Un Chacal des brûlis rejoint le combat : 8 PV, frappe 4. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","pietine",[["deg","tous",6]]],["briseGarde","cible"],["deg","cible",12],["invoque","Chacal des brûlis",8,4],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Perce-garde","Condition","Prix"],
 "ambiance":"Le vent a tourné au milieu du chant ; le feu est entré dans l'enclos par la porte des vaches.",
 "budget":"29,6 / 28 (+6 %)"},
{"id":"ANT205-moins-5","zone":"ANT205","pole":"-","palier":5,"nom":"Les Greniers","cout":2,"cible":1,
 "effet":"Ces coups ignorent la garde ; 14 dégâts à la cible ; 5 dégâts à tous les ennemis ; le héros gagne 5 de garde.",
 "ops":[["ignoreGarde"],["deg","cible",14],["deg","tous",5],["garde","heros",5]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Perce-garde","Garde"],
 "ambiance":"Les greniers sur pilotis ont flambé comme des torches ; le sorgho grillé sentait bon jusqu'au soir.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT205-moins-6","zone":"ANT205","pole":"-","palier":6,"nom":"Le Vent qui tourne","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, la garde de la cible tombe à 0. Un Calao terrestre rejoint le combat : 16 PV, frappe 8. L'attaque de la cible baisse de 3 ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["briseGarde","cible"]]],["invoque","Calao terrestre",16,8],["affaiblit","cible",3],["hesite","cible"],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Affaiblissement","Perce-garde","Contrôle","Condition","Prix"],
 "ambiance":"Le calao terrestre marche dans la cendre chaude et crie la pluie ; Mandlakazi l'écoute, la pluie non.",
 "budget":"33,5 / 36 (−7 %)"},
{"id":"ANT205-moins7","zone":"ANT205","pole":"-","palier":7,"nom":"Le Veld sans herbe","cout":2,"cible":1,
 "effet":"Le veld n'a plus d'herbe. Coups qui ignorent la garde : 3 de 7 au hasard ; le Grand Calao (16 PV, frappe 8) ; la cible hésite. Pose Givre. Si Sceau (consommé) : un Chacal (12 PV, frappe 6) ; attaque −3 ; soin 5. Prix : le héros perd 2 PV.",
 "ops":[["ignoreGarde"],["deg","hasard",7,3],["invoque","Grand Calao",16,8],["hesite","cible"],["pose","Givre"],["reveil","Sceau",true,[["invoque","Chacal des brûlis",12,6],["affaiblit","cible",3],["soin","heros",5]]],["prixPV",2]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Perce-garde","Contrôle","Soin","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"Le chef n'a plus d'enclos ni de vaches ; il garde l'imbongi, qui chante d'autant mieux.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"ANT205-plus-1","zone":"ANT205","pole":"+","palier":1,"nom":"L'Herbe neuve","cout":1,"cible":1,
 "effet":"Le héros se soigne de 6 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","heros",6],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Affaiblissement","Soin","Prix"],
 "ambiance":"Au premier printemps après le feu, l'herbe d'Emlotheni pousse si tendre que les vaches pleurent de plaisir.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT205-plus-2","zone":"ANT205","pole":"+","palier":2,"nom":"La Fleur sur les pieux","cout":1,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 6. Puis le héros se soigne de 5 ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["soin","heros",6]]],["soin","heros",5],["riposte",3],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Riposte","Soin","Condition","Prix"],
 "ambiance":"Une fleur basse a poussé au pied de chaque pieu noirci de l'enclos ; personne ne les a semées.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"ANT205-plus-3","zone":"ANT205","pole":"+","palier":3,"nom":"Le Gnou des brûlis","cout":2,"cible":1,
 "effet":"Un Gnou des brûlis rejoint le combat : 12 PV, frappe 6. Le héros se soigne de 8 ; l'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Gnou des brûlis",12,6],["soin","heros",8],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Les gnous reviennent sur les brûlis dès la première pousse ; ils savent l'heure mieux que le chef.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT205-plus-4","zone":"ANT205","pole":"+","palier":4,"nom":"Le Vers retiré","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 10. Puis 10 dégâts à la cible ; le héros se soigne de 6 ; le héros gagne 6 de garde.",
 "ops":[["si","blesse",[["soin","heros",10]]],["deg","cible",10],["soin","heros",6],["garde","heros",6]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Soin","Condition"],
 "ambiance":"Le chef a fait retirer le vers de l'éloge ; Mandlakazi en fredonne l'air en marchant, bouche fermée.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"ANT205-plus-5","zone":"ANT205","pole":"+","palier":5,"nom":"La Vache aux cornes en lyre","cout":2,"cible":1,
 "effet":"10 dégâts à la cible. Une Vache aux cornes en lyre rejoint le combat : 14 PV, frappe 6. Le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",10],["invoque","Vache aux cornes en lyre",14,6],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Sa robe est tachée comme un ciel d'orage ; elle broute l'herbe neuve sur les cendres du chef.",
 "budget":"31,8 / 32 (−1 %)"},
{"id":"ANT205-plus-6","zone":"ANT205","pole":"+","palier":6,"nom":"Plus haute que jamais","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 12 dégâts à la cible. Le héros se soigne de 12. Un Essaim des fleurs basses rejoint le combat : 10 PV, frappe 6. Riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["deg","cible",12]]],["soin","heros",12],["invoque","Essaim des fleurs basses",10,6],["riposte",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"L'herbe la plus haute pousse sur l'enclos brûlé ; le chef n'y va plus, ses vaches si.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT205-plus7","zone":"ANT205","pole":"+","palier":7,"nom":"La Cendre en fleurs","cout":2,"cible":1,
 "effet":"La cendre fleurit. Soin 16 ; le Grand Koudou des fleurs (18 PV, frappe 10) ; 10 dégâts à la cible. Pose Sceau. Si Braise (consommée) : un Gnou (12 PV, frappe 6) ; alliés soignés de 10. Prix : chaque ennemi se soigne de 2.",
 "ops":[["soin","heros",16],["invoque","Grand Koudou des fleurs",18,10],["deg","cible",10],["pose","Sceau"],["reveil","Braise",true,[["invoque","Gnou des brûlis",12,6],["soin","allies",10]]],["ennemiSoin",2]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Soin","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Mandlakazi chante le vers retiré au milieu des fleurs ; elles lui arrivent à l'épaule et ne le répètent pas.",
 "budget":"45,6 sans combo ; réveil +30 (66 %)"}
]
```

---

## 5. Beinvellir, la Savane des Arbres-Corail (ANT114) — Antre · Savane · Feu · Nordique

Recette du récit : l'épitaphe (la pierre runique jamais corrigée). Recette du −7 : la ruine (les os jusqu'à la pierre couchée, les hyènes dans la coque du navire) ; du +7 : la démesure (la muraille rouge des arbres-corail en fleurs).

**Os (−)** : la tombe ouverte → les os dans l'herbe → le vautour du navire → les hyènes qui rient → l'épée à la main → la fièvre et les mouches → la Savane des os. Fil mécanique : la marque sur 7 cartes (les charognards désignent le plus faible), hyènes et vautours sur 4 cartes, affaiblissement sur 2, crochet « la cible prend son élan » (3 cartes) ; prix : PV.
**Corail (+)** : la haie plantée → l'oiseau-soleil → les épines rouges → les chèvres dans l'enclos → la veuve qui plante → la pierre jamais corrigée → la Haie fermée. Fil mécanique : garde des alliés sur 7 cartes (la haie d'arbres-corail), riposte des épines sur 4 cartes, bêtes de l'enclos sur 4, crochet « il ne reste qu'un ennemi » (3 cartes) ; prix : garde ennemie.

```json
{"fiche":"ANT114","nom":"Beinvellir, la Savane des Arbres-Corail",
 "recit":"Hallveig fit dresser une pierre pour Ketill, son mari, qui mena le navire au sud plus loin que personne et prit une terre où les arbres fleurissent rouge comme le corail des mers. Le graveur écrivit qu'il mourut l'épée à la main. Ketill mourut de fièvre, au lit, en se plaignant des mouches. On l'enterra au pied d'un arbre-corail ; les hyènes le déterrèrent la nuit même. Hallveig fit planter une haie d'arbres-corail autour des tombes. La pierre, elle, n'a jamais été corrigée.",
 "pal":["Des os blanchis jonchent la savane jusqu'à la pierre runique couchée ; les hyènes dorment dans la coque éventrée d'un navire tiré à terre.","Des tombes ouvertes au pied des arbres, des os traînés dans l'herbe jaune ; la nuit, les hyènes rient autour de la pierre runique.","Une savane sèche, quelques arbres aux fleurs rouges, un navire tiré sur la rive, une pierre gravée de runes au pied d'un arbre.","Une haie d'arbres aux fleurs rouges entoure les tombes, serrée et épineuse ; les hyènes tournent dehors, les chèvres dorment dedans.","Les arbres-corail ont fleuri ensemble : une muraille rouge et vivante ferme l'enclos des morts, et des nuées d'oiseaux-soleil y bourdonnent."],
 "pm":"Os","pp":"Corail"}
```

```json
[
{"id":"ANT114-moins-1","zone":"ANT114","pole":"-","palier":1,"nom":"La Tombe ouverte","cout":1,"cible":1,
 "effet":"La cible est marquée : +1 par coup reçu. Une Hyène rieuse rejoint le combat : 6 PV, frappe 3. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",1],["invoque","Hyène rieuse",6,3],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"La terre de Beinvellir est dure ; on a enterré Ketill peu profond, et les hyènes l'ont su.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT114-moins-2","zone":"ANT114","pole":"-","palier":2,"nom":"Les Os dans l'herbe","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 6 dégâts à la cible. Puis 4 dégâts à la cible ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["si","elan",[["deg","cible",6]]],["deg","cible",4],["vulnerable","cible",2],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"On ramasse les os dans l'herbe jaune sans savoir à qui ils sont ; on les enterre tous ensemble.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT114-moins-3","zone":"ANT114","pole":"-","palier":3,"nom":"Le Vautour du navire","cout":2,"cible":1,
 "effet":"Un Vautour du navire rejoint le combat : 10 PV, frappe 6. La cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Vautour du navire",10,6],["vulnerable","cible",2],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Affaiblissement","Prix"],
 "ambiance":"Le vautour s'est perché sur la proue sculptée du navire tiré à terre ; il a le même profil.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT114-moins-4","zone":"ANT114","pole":"-","palier":4,"nom":"Les Hyènes qui rient","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, l'attaque de la cible baisse de 2. Puis tous les ennemis sont marqués : +1 par coup reçu ; la cible hésite ; le héros se soigne de 6 ; le héros gagne 6 de garde.",
 "ops":[["si","elan",[["affaiblit","cible",2]]],["vulnerable","tous",1],["hesite","cible"],["soin","heros",6],["garde","heros",6]],
 "tags":["Antre","Feu","Pôle −","Marque","Affaiblissement","Contrôle","Garde","Soin","Condition"],
 "ambiance":"La nuit, les hyènes rient autour de la pierre runique ; Hallveig dit qu'elles lisent les runes.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ANT114-moins-5","zone":"ANT114","pole":"-","palier":5,"nom":"L'Épée à la main","cout":2,"cible":1,
 "effet":"La cible est marquée : +3 par coup reçu ; 14 dégâts à la cible ; 3 coups de 3 au hasard. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","cible",3],["deg","cible",14],["deg","hasard",3,3],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Marque","Prix"],
 "ambiance":"Le graveur a écrit l'épée à la main ; Ketill tenait une chasse-mouches en crin, et l'a lâchée.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT114-moins-6","zone":"ANT114","pole":"-","palier":6,"nom":"La Fièvre et les mouches","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Un Chacal à chabraque rejoint le combat : 14 PV, frappe 7. La cible est marquée : +3 par coup reçu ; 4 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",10]]],["invoque","Chacal à chabraque",14,7],["vulnerable","cible",3],["deg","tous",4],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"La fièvre de Beinvellir vient avec les mouches ; les hommes du nord meurent en les chassant.",
 "budget":"38,3 / 36 (+6 %)"},
{"id":"ANT114-moins7","zone":"ANT114","pole":"-","palier":7,"nom":"La Savane des os","cout":2,"cible":1,
 "effet":"La savane garde les os. 12 dégâts à la cible ; tous marqués (+2 par coup) ; la Reine des hyènes (18 PV, frappe 10). Pose Racine. Si Abîme (consommé) : un Marabout (12 PV, frappe 6) ; la cible marquée (+2) ; 3 coups de 3 au hasard. Prix : 2 PV.",
 "ops":[["deg","cible",12],["vulnerable","tous",2],["invoque","Reine des hyènes",18,10],["pose","Racine"],["reveil","Abîme",true,[["invoque","Marabout des tombes",12,6],["vulnerable","cible",2],["deg","hasard",3,3]]],["prixPV",2]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Marque","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"La pierre runique est tombée dans l'herbe, face contre terre ; les hyènes dorment dessus, au chaud.",
 "budget":"47,2 sans combo ; réveil +30 (64 %)"},
{"id":"ANT114-plus-1","zone":"ANT114","pole":"+","palier":1,"nom":"La Haie plantée","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 6 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",6],["riposte",2],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Riposte","Garde","Prix"],
 "ambiance":"Hallveig a planté la première bouture d'arbre-corail elle-même, avec la bêche de Ketill.",
 "budget":"9,2 / 10 (−8 %)"},
{"id":"ANT114-plus-2","zone":"ANT114","pole":"+","palier":2,"nom":"L'Oiseau-soleil","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 6 dégâts à la cible. Un Oiseau-soleil rejoint le combat : 4 PV, frappe 3. Vos alliés gagnent 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","seul",[["deg","cible",6]]],["invoque","Oiseau-soleil",4,3],["garde","allies",4],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Il plonge son bec courbe dans les fleurs rouges et en ressort la gorge dorée de pollen.",
 "budget":"12,3 / 12,5 (−2 %)"},
{"id":"ANT114-plus-3","zone":"ANT114","pole":"+","palier":3,"nom":"Les Épines rouges","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 10 de garde ; riposte 4 jusqu'à votre prochain tour ; la cible hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",10],["riposte",4],["hesite","cible"],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Contrôle","Riposte","Garde","Prix"],
 "ambiance":"Les branches d'arbre-corail portent des épines courtes et dures ; les hyènes y laissent du poil.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT114-plus-4","zone":"ANT114","pole":"+","palier":4,"nom":"Les Chèvres dans l'enclos","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, vos alliés gagnent 8 de garde. Une Chèvre de l'enclos rejoint le combat : 14 PV, frappe 4. 10 dégâts à la cible.",
 "ops":[["si","seul",[["garde","allies",8]]],["invoque","Chèvre de l'enclos",14,4],["deg","cible",10]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Garde","Condition"],
 "ambiance":"Les chèvres dorment contre la haie, côté tombes ; dehors, les hyènes tournent jusqu'au jour.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"ANT114-plus-5","zone":"ANT114","pole":"+","palier":5,"nom":"La Veuve qui plante","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 12 de garde ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 6 ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",12],["affaiblit","tous",1],["soin","heros",6],["riposte",3],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Affaiblissement","Riposte","Garde","Soin","Prix"],
 "ambiance":"Hallveig plante une bouture par veille, en commençant par le côté d'où viennent les hyènes.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT114-plus-6","zone":"ANT114","pole":"+","palier":6,"nom":"La Pierre jamais corrigée","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 14 dégâts à la cible. Vos alliés gagnent 10 de garde. Un Taureau de l'enclos rejoint le combat : 14 PV, frappe 8. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","seul",[["deg","cible",14]]],["garde","allies",10],["invoque","Taureau de l'enclos",14,8],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le graveur est mort à son tour ; personne d'autre ne sait tailler les runes, ni ne le propose.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ANT114-plus7","zone":"ANT114","pole":"+","palier":7,"nom":"La Haie fermée","cout":2,"cible":1,
 "effet":"Les arbres ferment l'enclos. Alliés : 18 de garde ; riposte 6 ; une Nuée d'oiseaux-soleil (12 PV, frappe 6). Pose Sang. Si Givre (consommé) : alliés +10 de garde ; 10 dégâts à la cible ; soin 8. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",18],["riposte",6],["invoque","Nuée d'oiseaux-soleil",12,6],["pose","Sang"],["reveil","Givre",true,[["garde","allies",10],["deg","cible",10],["soin","heros",8]]],["ennemiGarde",1]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Riposte","Garde","Soin","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"La haie de Beinvellir fleurit rouge d'un bout à l'autre ; les hyènes s'assoient devant, et attendent.",
 "budget":"46,6 sans combo ; réveil +30 (64 %)"}
]
```

---

## 6. Le Cabildo de Jaralenga (ASS173) — Assemblée · Lande · Vent · Andalouse

Recette du récit : le procès-verbal (l'huile renvoyée de séance en séance). Recette du −7 : le silence (la salle qui délibère dans le noir) ; du +7 : l'ordre (on vote dehors, en plein jour, et chacun voit qui lève la main).

**Ombre (−)** : les volets clos → l'huile renvoyée → la séance suivante → le chemin effacé → les voix basses → la main égale → la Séance dans le noir. Fil mécanique : Lois d'affaiblissement sur 7 cartes (ce qui se décide dans l'ombre affaiblit), pioche sur 4 cartes, hésitation sur 3, crochet « la cible hésite déjà » lu avant de la faire hésiter (3 cartes) ; prix : défausse et PV.
**Lumière (+)** : la lanterne votée → l'huile de cuisine → la mèche → les voyageurs revenus → le droit de passage → les portes ouvertes → le Vote en plein jour. Fil mécanique : Lois de soin du héros sur 7 cartes (la lanterne ramène les voyageurs), garde du héros sur 4 cartes, affaiblissement sur 3, crochet « le héros a moins de la moitié de ses PV » lu avant tout prix en PV (3 cartes) ; prix : PV et soin ennemi.

```json
{"fiche":"ASS173","nom":"Le Cabildo de Jaralenga",
 "recit":"Les actes du cabildo de Jaralenga sont tenus par l'escribano Gil de Arcos, d'une main égale. On y lit que la veuve Mencía demanda une lanterne au carrefour de la lande, où les voyageurs se perdaient ; que la lanterne fut votée ; que l'huile fut renvoyée à la séance suivante, puis à la suivante. Mencía alluma la lanterne avec l'huile de sa cuisine. Les voyageurs revinrent, et le cabildo vota sur-le-champ un droit de passage. Gil de Arcos nota que la séance avait duré moins que la mèche.",
 "pal":["La lande est noire de bord à bord ; on n'y voit ni carrefour ni chemin, et dans la salle sans chandelle, le cabildo délibère à voix basse.","Des chemins effacés dans la bruyère, la lanterne du carrefour éteinte ; aux fenêtres de la salle, des volets clos et des voix basses.","Une lande de bruyère et d'ajoncs sous le vent, un carrefour avec sa lanterne sur un poteau, et la salle du cabildo blanchie à la chaux.","La lanterne brille au carrefour, d'autres s'allument le long des chemins ; les portes de la salle restent ouvertes, et la chaux luit au soleil.","Toute la lande est jalonnée de lanternes, chemin après chemin ; on vote dehors, en plein jour, et chacun voit qui lève la main."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ASS173-moins-1","zone":"ASS173","pole":"-","palier":1,"nom":"Les Volets clos","cout":1,"cible":1,
 "effet":"Loi : l'attaque de la cible baisse de 3 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","cible",3],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Affaiblissement","Pioche","Prix"],
 "ambiance":"Le cabildo de Jaralenga ferme les volets avant d'ouvrir la séance ; il dit que c'est pour le vent.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS173-moins-2","zone":"ASS173","pole":"-","palier":2,"nom":"L'Huile renvoyée","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, l'attaque de la cible baisse de 2. Puis la cible hésite ; le héros gagne 5 de garde.",
 "ops":[["si","hesiteAvant",[["affaiblit","cible",2]]],["hesite","cible"],["garde","heros",5]],
 "tags":["Assemblée","Vent","Pôle −","Affaiblissement","Contrôle","Garde","Condition"],
 "ambiance":"Dans l'acte, la ligne de l'huile revient à chaque séance, recopiée de la même main égale.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS173-moins-3","zone":"ASS173","pole":"-","palier":3,"nom":"La Séance suivante","cout":2,"cible":0,
 "effet":"Loi : l'attaque de chaque ennemi baisse de 2 ; piochez 2 cartes ; 2 coups de 2 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","tous",2],["pioche",2],["deg","hasard",2,2],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Affaiblissement","Pioche","Prix"],
 "ambiance":"On renvoie à la séance suivante ; à la séance suivante, on renvoie, et Gil de Arcos recopie.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ASS173-moins-4","zone":"ASS173","pole":"-","palier":4,"nom":"Le Chemin effacé","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis 8 dégâts à la cible ; l'attaque de la cible baisse de 3 ; la cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["si","hesiteAvant",[["deg","cible",10]]],["deg","cible",8],["affaiblit","cible",3],["hesite","cible"],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Affaiblissement","Contrôle","Condition","Prix"],
 "ambiance":"Le chemin du carrefour s'efface dans la bruyère dès la nuit ; les voyageurs le cherchent à tâtons.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS173-moins-5","zone":"ASS173","pole":"-","palier":5,"nom":"Les Voix basses","cout":2,"cible":1,
 "effet":"Loi : 12 dégâts à la cible ; l'attaque de la cible baisse de 4 ; piochez 2 cartes. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",12],["affaiblit","cible",4],["pioche",2],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Affaiblissement","Pioche","Prix"],
 "ambiance":"Au cabildo, on ne lève pas la main ; on vote à voix basse, et l'escribano compte comme il entend.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS173-moins-6","zone":"ASS173","pole":"-","palier":6,"nom":"La Main égale","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, l'attaque de chaque ennemi baisse de 2. Puis 14 dégâts à la cible ; l'attaque de la cible baisse de 2 ; la cible hésite ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesiteAvant",[["affaiblit","tous",2]]],["deg","cible",14],["affaiblit","cible",2],["hesite","cible"],["garde","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Affaiblissement","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Gil de Arcos écrit d'une main si égale qu'on ne voit jamais où il a hésité.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ASS173-moins7","zone":"ASS173","pole":"-","palier":7,"nom":"La Séance dans le noir","cout":2,"cible":1,
 "effet":"La lande s'éteint. L'attaque de chaque ennemi baisse de 3 ; 21 dégâts à la cible ; piochez 2 cartes. Pose Abîme. Si Sceau (consommé) : attaque de la cible −3 ; piochez 2 ; le héros se soigne de 12. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","tous",3],["deg","cible",21],["pioche",2],["pose","Abîme"],["reveil","Sceau",true,[["affaiblit","cible",3],["pioche",2],["soin","heros",12]]],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Forme ultime −7","Dégâts","Affaiblissement","Soin","Pioche","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Le cabildo délibère sans chandelle ; à la fin, personne ne sait qui a voté quoi, et c'est voulu.",
 "budget":"45,8 sans combo ; réveil +29 (63 %)"},
{"id":"ASS173-plus-1","zone":"ASS173","pole":"+","palier":1,"nom":"La Lanterne votée","cout":1,"cible":1,
 "effet":"Loi : le héros se soigne de 7 ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",7],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Affaiblissement","Soin","Prix"],
 "ambiance":"La lanterne du carrefour est votée à l'unanimité ; la mèche aussi ; l'huile est renvoyée.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS173-plus-2","zone":"ASS173","pole":"+","palier":2,"nom":"L'Huile de cuisine","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 6. Puis 6 dégâts à la cible ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","blesse",[["soin","heros",6]]],["deg","cible",6],["soin","heros",4],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Mencía a versé l'huile de sa cuisine dans la lanterne ; ce soir-là, elle a mangé froid.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS173-plus-3","zone":"ASS173","pole":"+","palier":3,"nom":"La Mèche","cout":2,"cible":0,
 "effet":"Loi : le héros se soigne de 8 ; le héros gagne 8 de garde ; l'attaque de chaque ennemi baisse de 1.",
 "ops":[["soin","heros",8],["garde","heros",8],["affaiblit","tous",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Affaiblissement","Garde","Soin"],
 "ambiance":"Gil de Arcos a mesuré la mèche de la lanterne pour l'acte ; il a noté sa longueur en doigts.",
 "budget":"21 / 24 (−12 %)"},
{"id":"ASS173-plus-4","zone":"ASS173","pole":"+","palier":4,"nom":"Les Voyageurs revenus","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 10. Puis 13 dégâts à la cible ; l'attaque de la cible baisse de 1 ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["soin","heros",10]]],["deg","cible",13],["affaiblit","cible",1],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Les voyageurs reviennent par la lande, guidés par la lanterne ; ils frappent chez Mencía pour remercier.",
 "budget":"24,8 / 28 (−11 %)"},
{"id":"ASS173-plus-5","zone":"ASS173","pole":"+","palier":5,"nom":"Le Droit de passage","cout":2,"cible":1,
 "effet":"Loi : le héros se soigne de 12 ; le héros gagne 10 de garde ; l'attaque de la cible baisse de 3 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["soin","heros",12],["garde","heros",10],["affaiblit","cible",3],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Affaiblissement","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le droit de passage fut voté sur-le-champ, à main levée, et la lanterne éclairait les mains.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS173-plus-6","zone":"ASS173","pole":"+","palier":6,"nom":"Les Portes ouvertes","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros gagne 12 de garde. Puis 14 dégâts à la cible ; le héros se soigne de 12 ; vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["garde","heros",12]]],["deg","cible",14],["soin","heros",12],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"On laisse les portes de la salle ouvertes ; la lumière du carrefour entre jusqu'au banc de l'escribano.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ASS173-plus7","zone":"ASS173","pole":"+","palier":7,"nom":"Le Vote en plein jour","cout":2,"cible":1,
 "effet":"On vote en plein jour. Le héros se soigne de 18 et gagne 12 de garde ; 12 dégâts à la cible ; piochez 2 cartes. Pose Braise. Si Racine (consommée) : vos alliés se soignent de 8 ; 5 dégâts à tous ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["soin","heros",18],["garde","heros",12],["deg","cible",12],["pioche",2],["pose","Braise"],["reveil","Racine",true,[["soin","allies",8],["deg","tous",5],["soin","heros",6]]],["prixPV",2]],
 "tags":["Assemblée","Vent","Forme ultime +7","Dégâts","Garde","Soin","Pioche","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Le cabildo siège dehors, sur la lande, et Mencía lève la main la première ; personne ne l'y a invitée.",
 "budget":"45,6 sans combo ; réveil +29 (64 %)"}
]
```

---

## 7. Le Fono des Glaces de Tai-Hukapapa (ASS120) — Assemblée · Glacier · Glace · Polynésienne

Recette du récit : les instructions de route (apprises jusqu'à l'arrivée, jamais au-delà). Recette du −7 : le vide (la glace sèche, les outres vides autour d'un feu éteint) ; du +7 : la démesure (la débâcle qui fend la glace et emporte le cercle de pierres).

**Sécheresse (−)** : le bloc taillé → le bois pour l'eau → le gobelet compté → l'outre vide → l'étoile basse → la suite jamais apprise → la Mer de pierre. Fil mécanique : pôle construit sur un crochet, « une carte a déjà été défaussée en prix ce tour » sur les 7 cartes (on ne boit qu'après avoir rendu du bois), chaque carte payant elle-même une défausse pour la suivante ; récupération sur 4 cartes (ce qu'on a rendu revient), pioche sur 4, riposte sur 4 ; prix : défausse.
**Déluge (+)** : le premier craquement → les crevasses qui chantent → les calebasses à genoux → le torrent → la pirogue emportée → on boit sans compter → la Débâcle. Fil mécanique : Lois d'exil sur 6 cartes (la débâcle emporte la carte avec elle), dégâts à tous sur 3 cartes, garde et soin des alliés, crochet « la cible a de la garde » (3 cartes) ; prix : exil.

```json
{"fiche":"ASS120","nom":"Le Fono des Glaces de Tai-Hukapapa",
 "recit":"Les instructions de Tavake se récitent encore au fono : navigue vers le sud tant que l'étoile basse reste à la proue ; quand la mer blanchit, suis les oiseaux qui ne rentrent pas ; quand la mer devient pierre, débarque. Personne n'a appris la suite, le chemin du retour. Sur la glace de Tai-Hukapapa, il n'y a d'eau douce que celle qu'on fait fondre, et le fono décide qui donne son bois pour qui boit. Chaque été, la glace craque, l'eau dévale en torrents, et l'on boit sans compter. Puis on recommence à compter.",
 "pal":["Un désert de glace sèche et dure jusqu'au bout du regard ; pas une goutte ne coule, et autour d'un feu éteint, des gens assis serrent des outres vides.","La glace craquelée ne fond plus ; on taille des blocs pour les faire fondre sur de petits feux, et le fono compte les gobelets un à un.","Une plaine de glace bleue au bord d'une mer grise, des pirogues tirées sur la glace, un cercle de pierres où le fono siège autour d'un feu.","Des ruisseaux courent sur la glace en plein jour, les crevasses chantent ; on remplit les calebasses à genoux, et les pirogues glissent vers l'eau.","La débâcle : la glace se fend d'un horizon à l'autre, l'eau douce dévale en torrents vers la mer et emporte le cercle de pierres du fono."],
 "pm":"Sécheresse","pp":"Déluge"}
```

```json
[
{"id":"ASS120-moins-1","zone":"ASS120","pole":"-","palier":1,"nom":"Le Bloc taillé","cout":1,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, reprenez en main la dernière carte de votre défausse. Puis le héros gagne 5 de garde ; l'attaque de la cible baisse de 1 ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["recup"]]],["garde","heros",5],["affaiblit","cible",1],["soin","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Affaiblissement","Garde","Soin","Récupération","Condition","Prix"],
 "ambiance":"On taille la glace en blocs et on les pose près du feu ; le fono surveille la flaque.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS120-moins-2","zone":"ASS120","pole":"-","palier":2,"nom":"Le Bois pour l'eau","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 8 dégâts à la cible. Puis +2 mana de Glace ; piochez 1 carte ; vos alliés se soignent de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",8]]],["mana","Glace",2],["pioche",1],["soin","allies",2],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"Au fono de Tai-Hukapapa, qui donne son bois boit le premier ; qui n'a plus de bois écoute.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ASS120-moins-3","zone":"ASS120","pole":"-","palier":3,"nom":"Le Gobelet compté","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, piochez 2 cartes. Puis reprenez en main la dernière carte de votre défausse ; 12 dégâts à la cible ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["pioche",2]]],["recup"],["deg","cible",12],["garde","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Garde","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Tavake compte les gobelets à voix haute ; personne ne boit pendant qu'il compte, ni après.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ASS120-moins-4","zone":"ASS120","pole":"-","palier":4,"nom":"L'Outre vide","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, +2 mana de Glace. Puis le héros se soigne de 10 ; riposte 4 jusqu'à votre prochain tour ; la cible brûle : 3 par tour pendant 2 tours.",
 "ops":[["si","defausseAPrix",[["mana","Glace",2]]],["soin","heros",10],["riposte",4],["brulure","cible",3,2]],
 "tags":["Assemblée","Glace","Pôle −","Brûlure","Riposte","Soin","Mana","Condition"],
 "ambiance":"Les outres de peau de phoque pendent vides au mât des pirogues ; le vent les fait claquer.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS120-moins-5","zone":"ASS120","pole":"-","palier":5,"nom":"L'Étoile basse","cout":2,"cible":1,
 "effet":"Loi : après une défausse payée ce tour, 6 dégâts à tous les ennemis. Piochez 2 cartes ; reprenez la dernière carte défaussée ; la cible brûle (3 par tour, 3 tours) ; riposte 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","tous",6]]],["pioche",2],["recup"],["brulure","cible",3,3],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Brûlure","Riposte","Pioche","Récupération","Condition","Prix"],
 "ambiance":"L'étoile basse ne se lève plus au-dessus de la glace ; les anciens la cherchent encore, par habitude.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS120-moins-6","zone":"ASS120","pole":"-","palier":6,"nom":"La Suite jamais apprise","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 14 dégâts à la cible. Puis riposte 5 jusqu'à votre prochain tour ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 12. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",14]]],["riposte",5],["affaiblit","tous",1],["soin","heros",12],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Affaiblissement","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les instructions s'arrêtent à la glace ; les enfants demandent la suite, et on leur récite le début.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ASS120-moins7","zone":"ASS120","pole":"-","palier":7,"nom":"La Mer de pierre","cout":2,"cible":1,
 "effet":"La mer devient pierre. Après une défausse payée ce tour : piochez 2, +2 mana de Glace. 14 à la cible ; tous hésitent ; riposte 5 ; soin 10. Pose Givre. Si Abîme (consommé) : reprenez une carte ; 7 à tous ; soin 10. Prix : défaussez 1 carte.",
 "ops":[["si","defausseAPrix",[["pioche",2],["mana","Glace",2]]],["deg","cible",14],["hesite","tous"],["riposte",5],["soin","heros",10],["pose","Givre"],["reveil","Abîme",true,[["recup"],["deg","tous",7],["soin","heros",10]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Contrôle","Riposte","Soin","Pioche","Récupération","Mana","Condition","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Autour du feu éteint, le fono délibère encore ; il n'y a plus de bois, seulement des voix.",
 "budget":"47 sans combo ; réveil +29,4 (63 %)"},
{"id":"ASS120-plus-1","zone":"ASS120","pole":"+","palier":1,"nom":"Le Premier Craquement","cout":1,"cible":0,
 "effet":"Loi : 4 dégâts à tous les ennemis ; vos alliés gagnent 3 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","tous",4],["garde","allies",3],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Garde","Exil","Prix"],
 "ambiance":"Le premier craquement de l'été court sous le fono assis ; personne ne se lève, tout le monde écoute.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"ASS120-plus-2","zone":"ASS120","pole":"+","palier":2,"nom":"Les Crevasses qui chantent","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts à la cible. Puis 6 dégâts à la cible ; vos alliés se soignent de 4. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["deg","cible",6],["soin","allies",4],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Soin","Condition","Exil","Prix"],
 "ambiance":"L'eau descend dans les crevasses en sifflant ; les enfants y collent l'oreille pour entendre le fond.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS120-plus-3","zone":"ASS120","pole":"+","palier":3,"nom":"Les Calebasses à genoux","cout":2,"cible":1,
 "effet":"Loi : vos alliés se soignent de 8 ; 10 dégâts à la cible ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["soin","allies",8],["deg","cible",10],["pioche",1],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Soin","Pioche","Exil","Prix"],
 "ambiance":"On remplit les calebasses à genoux dans les ruisseaux de glace ; personne ne compte, pour une fois.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS120-plus-4","zone":"ASS120","pole":"+","palier":4,"nom":"Le Torrent","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à tous les ennemis. Puis 12 dégâts à la cible ; le héros gagne 8 de garde ; +1 mana de Glace.",
 "ops":[["si","cibleGarde",[["deg","tous",6]]],["deg","cible",12],["garde","heros",8],["mana","Glace",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Garde","Mana","Condition"],
 "ambiance":"Le torrent de fonte dévale entre les pirogues tirées sur la glace ; on les attache en hâte.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS120-plus-5","zone":"ASS120","pole":"+","palier":5,"nom":"La Pirogue emportée","cout":2,"cible":1,
 "effet":"Loi : 8 dégâts à tous les ennemis ; l'attaque de la cible baisse de 2 ; vos alliés gagnent 8 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","tous",8],["affaiblit","cible",2],["garde","allies",8],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Affaiblissement","Garde","Exil","Prix"],
 "ambiance":"La pirogue de Tavake est partie avec la débâcle, vers le nord, et personne pour lui dire le chemin.",
 "budget":"30,2 / 32 (−6 %)"},
{"id":"ASS120-plus-6","zone":"ASS120","pole":"+","palier":6,"nom":"On boit sans compter","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Puis le héros se soigne de 13 ; vos alliés gagnent 10 de garde ; +1 mana de Glace. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["soin","heros",13],["garde","allies",10],["mana","Glace",1],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Garde","Soin","Mana","Condition","Exil","Prix"],
 "ambiance":"L'été, au fono, on boit sans compter ; l'hiver, on compte ce qu'on a bu l'été.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS120-plus7","zone":"ASS120","pole":"+","palier":7,"nom":"La Débâcle","cout":2,"cible":0,
 "effet":"La glace se fend. Le Léopard de mer rejoint le combat (16 PV, frappe 8) ; 3 coups de 6 au hasard ; alliés +10 de garde. Pose Sang. Si Givre (consommé) : alliés soignés de 10 ; piochez 2 ; +2 mana de Glace. Prix : cette carte s'exile.",
 "ops":[["invoque","Léopard de mer",16,8],["deg","hasard",6,3],["garde","allies",10],["pose","Sang"],["reveil","Givre",true,[["soin","allies",10],["pioche",2],["mana","Glace",2]]],["exil"]],
 "tags":["Assemblée","Glace","Forme ultime +7","Invocation","Dégâts","Garde","Soin","Pioche","Mana","Exil","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Le cercle de pierres du fono part à la dérive ; on siège sur la rive, debout.",
 "budget":"47 sans combo ; réveil +29 (62 %)"}
]
```

---

## 8. La Chambre des Tables de Motiband (ASS105) — Assemblée · Récif · Eau · Moghole

Recette du récit : l'almanach (les tables scellées avant la nuit qui les dément). Recette du −7 : le vide (le gouffre sous le récif, plus d'étoiles au-dessus) ; du +7 : la foule (les barques venues regarder le ciel plein).

**Vide (−)** : le tombant → l'étoile manquante → les plongeurs hagards → délibéré jusqu'à l'aube → les tables scellées → le gouffre bleu-noir → la Chambre au bord du vide. Fil mécanique : Lois d'hésitation sur 7 cartes (le vertige du tombant ; ciblée, et « tous » sur 2 cartes non voisines), récupération sur 4 cartes, brûlure sur 4, coups au hasard sur 3, crochet « la cible hésite déjà » lu avant de la faire hésiter (3 cartes) ; prix : défausse et PV.
**Étoiles (+)** : la table dressée → l'huile des lampes → les arcs de pierre → le nom gravé → les tables pour l'empereur → le ciel plein → le Ciel sans lampe. Fil mécanique : Lois de mana d'Eau sur 7 cartes, jamais plus de 2 par opération (chaque étoile mise en table rend), marque sur 4 cartes, garde des alliés, crochet « vous avez déjà joué une autre carte ce tour » (3 cartes) ; prix : garde ennemie.

```json
{"fiche":"ASS105","nom":"La Chambre des Tables de Motiband",
 "recit":"L'empereur fit bâtir sur le récif de Motiband une chambre de marbre où les astronomes dressent les tables du ciel ; les pêcheurs de perles leur portent l'huile des lampes. Une nuit, Fazil Beg, qui préside la Chambre des Tables, chercha une étoile à sa place et ne la trouva pas. On délibéra jusqu'à l'aube. Les tables étaient déjà copiées pour l'empereur, reliées de cuir, scellées. La Chambre vota que l'étoile était là. Depuis, les plongeurs qui descendent au tombant du récif disent qu'ils l'ont vue, en bas, dans le noir.",
 "pal":["Le récif s'arrête net sur un gouffre bleu-noir ; plus d'étoiles au-dessus, plus de fond au-dessous, et la chambre de marbre penche au bord du vide.","Au-delà du récif, l'eau plonge d'un coup dans le bleu sombre ; des plongeurs remontent hagards, et les lampes de la chambre fument sans éclairer.","Un récif clair à fleur d'eau, une chambre de marbre blanc posée dessus, des instruments de pierre sur la terrasse et des barques de pêcheurs de perles.","La nuit, les instruments de pierre découpent le ciel en arcs ; les astronomes notent à la lampe, et le récif luit d'étoiles reflétées.","Le ciel est si plein qu'on lit sans lampe ; des barques couvrent la lagune jusqu'au large pour le regarder, et chaque étoile a son nom gravé."],
 "pm":"Vide","pp":"Étoiles"}
```

```json
[
{"id":"ASS105-moins-1","zone":"ASS105","pole":"-","palier":1,"nom":"Le Tombant","cout":1,"cible":1,
 "effet":"Loi : la cible hésite ; la cible brûle : 2 par tour pendant 2 tours ; le héros gagne 3 de garde. Prix : le héros perd 1 PV.",
 "ops":[["hesite","cible"],["brulure","cible",2,2],["garde","heros",3],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Brûlure","Contrôle","Garde","Prix"],
 "ambiance":"Au bord du tombant de Motiband, le plongeur regarde en bas une fois, et ne regarde plus jamais.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ASS105-moins-2","zone":"ASS105","pole":"-","palier":2,"nom":"L'Étoile manquante","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 8 dégâts à la cible. Puis la cible hésite ; reprenez en main la dernière carte de votre défausse.",
 "ops":[["si","hesite",[["deg","cible",8]]],["hesite","cible"],["recup"]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Contrôle","Récupération","Condition"],
 "ambiance":"Fazil Beg a cherché l'étoile toute la nuit, la plume levée ; au matin, la plume avait séché.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS105-moins-3","zone":"ASS105","pole":"-","palier":3,"nom":"Les Plongeurs hagards","cout":2,"cible":1,
 "effet":"Loi : les 2 premiers ennemis hésitent ; 2 coups de 5 au hasard ; reprenez en main la dernière carte de votre défausse ; la cible est marquée : +1 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite",2],["deg","hasard",5,2],["recup"],["vulnerable","cible",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Marque","Contrôle","Récupération","Prix"],
 "ambiance":"Les pêcheurs de perles remontent du tombant sans perles ; ils disent qu'en bas, une lumière les regardait.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS105-moins-4","zone":"ASS105","pole":"-","palier":4,"nom":"Délibéré jusqu'à l'aube","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, reprenez en main la dernière carte de votre défausse. Puis 13 dégâts à la cible ; la cible hésite ; la cible brûle : 2 par tour pendant 3 tours. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["recup"]]],["deg","cible",13],["hesite","cible"],["brulure","cible",2,3],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Brûlure","Contrôle","Récupération","Condition","Prix"],
 "ambiance":"La Chambre a délibéré jusqu'à l'aube ; à l'aube, les tables étaient toujours scellées, et l'étoile absente.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS105-moins-5","zone":"ASS105","pole":"-","palier":5,"nom":"Les Tables scellées","cout":2,"cible":1,
 "effet":"Loi : tous les ennemis hésitent ; le héros gagne 8 de garde ; piochez 2 cartes ; vos alliés se soignent de 4 ; la cible brûle : 2 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","tous"],["garde","heros",8],["pioche",2],["soin","allies",4],["brulure","cible",2,3],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Brûlure","Contrôle","Garde","Soin","Pioche","Prix"],
 "ambiance":"Les tables reliées de cuir partent pour la cour scellées de cire verte ; personne ne les rouvrira.",
 "budget":"32,4 / 32 (+1 %)"},
{"id":"ASS105-moins-6","zone":"ASS105","pole":"-","palier":6,"nom":"Le Gouffre bleu-noir","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 14 dégâts à la cible. Puis la cible hésite ; 3 coups de 5 au hasard ; l'attaque de la cible baisse de 2. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",14]]],["hesite","cible"],["deg","hasard",5,3],["affaiblit","cible",2],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Affaiblissement","Contrôle","Condition","Prix"],
 "ambiance":"L'eau du gouffre est si noire que les plongeurs y voient des étoiles ; la Chambre en a pris acte.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS105-moins7","zone":"ASS105","pole":"-","palier":7,"nom":"La Chambre au bord du vide","cout":2,"cible":1,
 "effet":"La chambre penche au vide. Tous hésitent ; 16 à la cible ; 3 coups de 5 au hasard ; elle brûle (3 par tour, 3 tours). Pose Sceau. Si Racine (consommée) : la cible hésite ; reprenez une carte ; 12 à la cible ; soin 6 aux alliés. Prix : 1 défausse.",
 "ops":[["hesite","tous"],["deg","cible",16],["deg","hasard",5,3],["brulure","cible",3,3],["pose","Sceau"],["reveil","Racine",true,[["hesite","cible"],["recup"],["deg","cible",12],["soin","allies",6]]],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Brûlure","Contrôle","Soin","Récupération","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Fazil Beg a fait graver l'étoile manquante sur la terrasse, à sa place ; la pierre penche aussi.",
 "budget":"46 sans combo ; réveil +30 (65 %)"},
{"id":"ASS105-plus-1","zone":"ASS105","pole":"+","palier":1,"nom":"La Table dressée","cout":1,"cible":1,
 "effet":"Loi : +2 mana d'Eau ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Eau",2],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Marque","Mana","Prix"],
 "ambiance":"Chaque soir, un astronome de Motiband déroule la table du ciel sur la terrasse et la cale de galets.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS105-plus-2","zone":"ASS105","pole":"+","palier":2,"nom":"L'Huile des lampes","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, +1 mana d'Eau. Puis 7 dégâts à la cible ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["mana","Eau",1]]],["deg","cible",7],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Marque","Mana","Condition","Prix"],
 "ambiance":"Les pêcheurs de perles apportent l'huile des lampes en barque ; ils repartent les yeux baissés sur leurs rames.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ASS105-plus-3","zone":"ASS105","pole":"+","palier":3,"nom":"Les Arcs de pierre","cout":2,"cible":1,
 "effet":"Loi : 11 dégâts à la cible ; +2 mana d'Eau ; tous les ennemis sont marqués : +1 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",11],["mana","Eau",2],["vulnerable","tous",1],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Marque","Mana","Prix"],
 "ambiance":"Les grands arcs de pierre découpent le ciel en tranches ; on lit l'heure à l'ombre d'une étoile.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ASS105-plus-4","zone":"ASS105","pole":"+","palier":4,"nom":"Le Nom gravé","cout":2,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 6 dégâts à tous les ennemis. Puis +2 mana d'Eau ; le héros se soigne de 8 ; le héros gagne 10 de garde.",
 "ops":[["si","cartesJouees",[["deg","tous",6]]],["mana","Eau",2],["soin","heros",8],["garde","heros",10]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Garde","Soin","Mana","Condition"],
 "ambiance":"Chaque étoile mise en table a son nom gravé sur la terrasse ; le graveur ne lève jamais la tête.",
 "budget":"28,6 / 28 (+2 %)"},
{"id":"ASS105-plus-5","zone":"ASS105","pole":"+","palier":5,"nom":"Les Tables pour l'empereur","cout":2,"cible":0,
 "effet":"Loi : +2 mana d'Eau ; piochez 2 cartes ; vos alliés se soignent de 4 ; vos alliés gagnent 8 de garde ; 2 coups de 2 au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Eau",2],["pioche",2],["soin","allies",4],["garde","allies",8],["deg","hasard",2,2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Garde","Soin","Pioche","Mana","Prix"],
 "ambiance":"Les copistes recopient les tables à la lampe, et l'empereur les lit au jour, ce qui suffit.",
 "budget":"31,6 / 32 (−1 %)"},
{"id":"ASS105-plus-6","zone":"ASS105","pole":"+","palier":6,"nom":"Le Ciel plein","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 12 dégâts à la cible. Puis +2 mana d'Eau ; 3 coups de 4 au hasard ; vos alliés gagnent 10 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",12]]],["mana","Eau",2],["deg","hasard",4,3],["garde","allies",10],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Garde","Mana","Condition","Prix"],
 "ambiance":"Certaines nuits, le ciel de Motiband est si plein que les astronomes en laissent pour le lendemain.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS105-plus7","zone":"ASS105","pole":"+","palier":7,"nom":"Le Ciel sans lampe","cout":2,"cible":1,
 "effet":"On lit sans lampe. +2 mana d'Eau ; 14 dégâts à la cible ; tous marqués (+2 par coup) ; soin 12 ; piochez 2. Pose Abîme. Si Sang (consommé) : +2 mana d'Eau ; 3 coups de 5 au hasard ; alliés soignés de 8. Prix : ennemis +1 de garde.",
 "ops":[["mana","Eau",2],["deg","cible",14],["vulnerable","tous",2],["soin","heros",12],["pioche",2],["pose","Abîme"],["reveil","Sang",true,[["mana","Eau",2],["deg","hasard",5,3],["soin","allies",8]]],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Marque","Soin","Pioche","Mana","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Les lampes de la Chambre sont éteintes ; Fazil Beg lit les tables à la lumière des étoiles qu'elles décrivent.",
 "budget":"51,2 sans combo ; réveil +33 (64 %)"}
]
```

---

## 9. Les Forges de Chernolesye (DON009) — Donjon · Jungle · Sève · Slave

Recette du récit : l'acte de vente (la forêt vendue avec ses esprits). Recette du −7 : l'ordre (les fourneaux en rangs, les pièges tendus en lignes) ; du +7 : la démesure (les troncs durs comme le fer, si serrés qu'aucune hache n'y entre).

**Fer (−)** : l'acte de vente → le piège tendu → le charbon des arbres → la roue à eau → les pièges du sentier → le maître de forges → la Forêt-forge. Fil mécanique : riposte sur 7 cartes (les pièges de fer frappent qui passe), gros coups ciblés sur 5 cartes, perce-garde sur 4, crochet « la cible prend son élan » (3 cartes) ; prix : PV.
**Bois (+)** : la souche qui repousse → la hache cassée → l'ours des souches → plus dur que le fer → la charbonnière → les esprits ont lu l'acte → le Bois de fer. Fil mécanique : garde du héros sur 7 cartes (le tronc qui encaisse), bêtes de la forêt sur 4 cartes, récupération sur 3, crochet « la Garde est levée » lu avant de la relever (3 cartes) ; prix : garde ennemie et défausse.

```json
{"fiche":"DON009","nom":"Les Forges de Chernolesye",
 "recit":"L'acte de vente est clair : le boyard cède au maître de forges Radim la forêt de Chernolesye, avec ses arbres, ses bêtes, ses sources et ses esprits. Radim fit couper les arbres pour le charbon, tendit des pièges de fer pour les bêtes, capta les sources pour ses roues. Pour les esprits, il ne fit rien : l'acte ne disait pas comment. La charbonnière Lukerya dit qu'ils sont toujours là, et qu'ils ont lu l'acte. Les troncs coupés repoussent en une nuit, plus durs que le fer, et les haches s'y brisent.",
 "pal":["Des fourneaux alignés à perte de vue comme une armée au repos ; entre eux, ni arbre ni bête, seulement des pièges de fer tendus en lignes droites.","Des clairières de souches autour des meules de charbon ; des pièges de fer dans les sentiers, des roues à eau qui grincent, de la fumée sous les lianes.","Une jungle épaisse et chaude, une forge au bord d'une source, des charbonnières qui fument sous les arbres et des sentiers de bêtes.","Les souches repoussent en troncs serrés, plus durs que la pierre ; des haches cassées traînent à leur pied, et les pièges disparaissent sous l'écorce.","Des troncs immenses, durs comme le fer, se dressent si serrés qu'aucune hache n'y entre ; les bêtes vont et viennent entre eux sans crainte."],
 "pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"DON009-moins-1","zone":"DON009","pole":"-","palier":1,"nom":"L'Acte de vente","cout":1,"cible":1,
 "effet":"5 dégâts à la cible ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",5],["riposte",3],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Riposte","Prix"],
 "ambiance":"Radim a signé l'acte en bas de la page ; le boyard, en haut ; les esprits, nulle part.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON009-moins-2","zone":"DON009","pole":"-","palier":2,"nom":"Le Piège tendu","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, l'attaque de la cible baisse de 2. Puis riposte 3 jusqu'à votre prochain tour ; le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["si","elan",[["affaiblit","cible",2]]],["riposte",3],["garde","heros",4],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"Le piège de fer dort sous les feuilles, ouvert ; il attend une bête et prend souvent un homme.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"DON009-moins-3","zone":"DON009","pole":"-","palier":3,"nom":"Le Charbon des arbres","cout":2,"cible":1,
 "effet":"Ces coups ignorent la garde ; 14 dégâts à la cible ; riposte 4 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["ignoreGarde"],["deg","cible",14],["riposte",4],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Perce-garde","Riposte","Prix"],
 "ambiance":"Une meule de charbon de Chernolesye avale une clairière entière et rend un sac noir.",
 "budget":"24 / 24 (+0 %)"},
{"id":"DON009-moins-4","zone":"DON009","pole":"-","palier":4,"nom":"La Roue à eau","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, riposte 6 jusqu'à votre prochain tour. Puis la garde de la cible tombe à 0 ; 12 dégâts à la cible ; le héros gagne 8 de garde.",
 "ops":[["si","elan",[["riposte",6]]],["briseGarde","cible"],["deg","cible",12],["garde","heros",8]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Perce-garde","Riposte","Garde","Condition"],
 "ambiance":"Radim a détourné la source pour sa roue ; la roue tourne, et la source cherche son lit.",
 "budget":"27,4 / 28 (−2 %)"},
{"id":"DON009-moins-5","zone":"DON009","pole":"-","palier":5,"nom":"Les Pièges du sentier","cout":2,"cible":1,
 "effet":"Riposte 7 jusqu'à votre prochain tour ; la garde de la cible tombe à 0 ; la cible est marquée : +3 par coup reçu ; 3 coups de 3 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["riposte",7],["briseGarde","cible"],["vulnerable","cible",3],["deg","hasard",3,3],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Marque","Perce-garde","Riposte","Prix"],
 "ambiance":"Sur le sentier des bêtes, un piège à chaque détour ; les bêtes ont pris un autre sentier.",
 "budget":"34 / 32 (+6 %)"},
{"id":"DON009-moins-6","zone":"DON009","pole":"-","palier":6,"nom":"Le Maître de forges","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 16 dégâts à la cible. Puis riposte 8 jusqu'à votre prochain tour ; 3 coups de 4 au hasard. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",16]]],["riposte",8],["deg","hasard",4,3],["prixPV",2]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Radim compte ses haches cassées le soir, en silence, et en commande de nouvelles au matin.",
 "budget":"34 / 36 (−6 %)"},
{"id":"DON009-moins7","zone":"DON009","pole":"-","palier":7,"nom":"La Forêt-forge","cout":2,"cible":1,
 "effet":"La forêt devient forge. Riposte 10 ; ces coups ignorent la garde : 20 dégâts à la cible, 4 à tous les ennemis. Pose Braise. Si Sceau (consommé) : riposte 6 ; 12 dégâts à la cible ; toute garde ennemie tombe. Prix : le héros perd 2 PV.",
 "ops":[["riposte",10],["ignoreGarde"],["deg","cible",20],["deg","tous",4],["pose","Braise"],["reveil","Sceau",true,[["riposte",6],["deg","cible",12],["briseGarde","tous"]]],["prixPV",2]],
 "tags":["Donjon","Sève","Forme ultime −7","Dégâts","Perce-garde","Riposte","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Les fourneaux de Radim brûlent jour et nuit ; il n'y a plus d'arbres à vendre, ni à acheter.",
 "budget":"49,8 sans combo ; réveil +30,6 (61 %)"},
{"id":"DON009-plus-1","zone":"DON009","pole":"+","palier":1,"nom":"La Souche qui repousse","cout":1,"cible":1,
 "effet":"Le héros gagne 10 de garde ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","heros",10],["vulnerable","cible",1],["ennemiGarde",1]],
 "tags":["Donjon","Sève","Pôle +","Marque","Garde","Prix"],
 "ambiance":"La souche coupée la veille porte au matin une pousse grosse comme un bras, et dure comme lui.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON009-plus-2","zone":"DON009","pole":"+","palier":2,"nom":"La Hache cassée","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, riposte 4 jusqu'à votre prochain tour. Puis le héros gagne 6 de garde ; l'attaque de la cible baisse de 1.",
 "ops":[["si","garde",[["riposte",4]]],["garde","heros",6],["affaiblit","cible",1]],
 "tags":["Donjon","Sève","Pôle +","Affaiblissement","Riposte","Garde","Condition"],
 "ambiance":"La hache a rebondi sur le jeune tronc et s'est fendue net ; le bûcheron aussi a reculé.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"DON009-plus-3","zone":"DON009","pole":"+","palier":3,"nom":"L'Ours des souches","cout":2,"cible":1,
 "effet":"Un Ours des souches rejoint le combat : 14 PV, frappe 6. Le héros gagne 8 de garde ; la cible est marquée : +1 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Ours des souches",14,6],["garde","heros",8],["vulnerable","cible",1],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Marque","Garde","Prix"],
 "ambiance":"L'ours de Chernolesye dort entre les souches qui repoussent ; il se réveille quand elles grincent.",
 "budget":"22,4 / 24 (−7 %)"},
{"id":"DON009-plus-4","zone":"DON009","pole":"+","palier":4,"nom":"Plus dur que le fer","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 12 dégâts à la cible. Puis le héros gagne 14 de garde ; reprenez en main la dernière carte de votre défausse ; vos alliés se soignent de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",12]]],["garde","heros",14],["recup"],["soin","allies",4],["ennemiGarde",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Garde","Soin","Récupération","Condition","Prix"],
 "ambiance":"Le forgeron a frappé le jeune tronc de son meilleur fer ; le fer s'est tordu.",
 "budget":"25,2 / 28 (−10 %)"},
{"id":"DON009-plus-5","zone":"DON009","pole":"+","palier":5,"nom":"La Charbonnière","cout":2,"cible":1,
 "effet":"Un Loup des lianes rejoint le combat : 12 PV, frappe 6. Le héros gagne 10 de garde ; 10 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Loup des lianes",12,6],["garde","heros",10],["deg","cible",10],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"Lukerya surveille sa meule sous les lianes ; les loups viennent s'y chauffer et elle les laisse.",
 "budget":"30 / 32 (−6 %)"},
{"id":"DON009-plus-6","zone":"DON009","pole":"+","palier":6,"nom":"Les Esprits ont lu l'acte","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, un Esprit des souches rejoint le combat : 14 PV, frappe 8. Puis le héros gagne 14 de garde ; 14 dégâts à la cible ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["invoque","Esprit des souches",14,8]]],["garde","heros",14],["deg","cible",14],["recup"],["ennemiGarde",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Dégâts","Garde","Récupération","Condition","Prix"],
 "ambiance":"Lukerya dit que les esprits ont lu l'acte de vente, et trouvé une faute au nom.",
 "budget":"36,7 / 36 (+2 %)"},
{"id":"DON009-plus7","zone":"DON009","pole":"+","palier":7,"nom":"Le Bois de fer","cout":2,"cible":1,
 "effet":"Le bois devient fer. Garde 20 ; 16 dégâts à la cible ; le Grand Ours de Chernolesye (18 PV, frappe 10). Pose Racine. Si Braise (consommée) : alliés soignés de 10 ; garde 10 ; reprenez une carte ; riposte 3. Prix : défaussez 1 carte.",
 "ops":[["garde","heros",20],["deg","cible",16],["invoque","Grand Ours de Chernolesye",18,10],["pose","Racine"],["reveil","Braise",true,[["soin","allies",10],["garde","heros",10],["recup"],["riposte",3]]],["prixDefausse",1]],
 "tags":["Donjon","Sève","Forme ultime +7","Invocation","Dégâts","Riposte","Garde","Soin","Récupération","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Les forges de Radim sont froides ; les haches aussi, et personne ne parle de les rallumer.",
 "budget":"53 sans combo ; réveil +33 (62 %)"}
]
```

---

## 10. KwaPhuphe, les Marais des Songes (DON099) — Donjon · Marais · Sève · Zouloue

Recette du récit : la consultation (la devineresse qui désigne, puis se tait). Recette du −7 : la démesure (les lits juchés jusqu'aux toits, le marais qui rit) ; du +7 : le silence (le village qui dort dans l'herbe, le python qui veille).

**Cauchemar (−)** : les empreintes trop petites → le rire dans les roseaux → la hutte du potier → les osselets jetés → le hibou sur le toit → les lits sur les briques → le Marais qui rit. Fil mécanique : coups au hasard sur 7 cartes (le petit homme des marais frappe qui il veut ; place rare choisie pour le récit), gros coups ciblés sur 4 cartes, bêtes de la nuit sur 4, écho sur 2 cartes (le cauchemar qui revient), crochet « la cible vole par-dessus » (3 cartes) ; prix : PV.
**Rêve (+)** : le lit redescendu → le python endormi → l'encens de racines → la nuit dans la hutte du chef → le nom qu'on ne dit plus → les dormeurs qui sourient → le Village qui rêve. Fil mécanique : la marque sur 7 cartes (le rêve de la devineresse désigne), soin des alliés sur 4 cartes, serpents et grues sur 4, crochet « la cible est déjà marquée » lu avant de marquer (3 cartes) ; prix : défausse.

```json
{"fiche":"DON099","nom":"KwaPhuphe, les Marais des Songes",
 "recit":"Quand les cauchemars prirent le village de KwaPhuphe, on alla consulter la devineresse Nokuthula. Elle jeta les osselets, respira la fumée des racines et dormit une nuit dans la hutte du chef. Au matin, elle dit que le petit homme des marais avait été envoyé par quelqu'un, et désigna du menton la hutte du potier. On la brûla. Les cauchemars restèrent. Depuis, chacun dort sur un lit monté sur des briques, plus haut chaque saison, et Nokuthula, dont le lit est le plus haut, ne dit plus aucun nom.",
 "pal":["Le marais bouillonne, noir ; les huttes sont vides, les lits juchés si haut sur leurs briques qu'ils touchent les toits, et quelque chose rit dans les roseaux.","Des roseaux qui bougent sans vent, des empreintes trop petites dans la boue ; dans les huttes, les lits montent sur des briques, de plus en plus haut.","Un marais chaud de roseaux et de nénuphars, un village de huttes rondes sur une butte, et la fumée d'herbes qui sort de la hutte de la devineresse.","Des nénuphars ouverts sur l'eau calme, des pythons endormis sur les buttes ; les dormeurs sourient, et les lits redescendent à terre.","Le marais entier dort sous une brume dorée ; les villageois couchés à même l'herbe rêvent ensemble, et un grand python veille au milieu d'eux."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"DON099-moins-1","zone":"DON099","pole":"-","palier":1,"nom":"Les Empreintes trop petites","cout":1,"cible":1,
 "effet":"3 coups de 3 au hasard ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["deg","hasard",3,3],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Affaiblissement","Prix"],
 "ambiance":"Au matin, la boue devant les huttes de KwaPhuphe porte des empreintes de pieds nus, trop petites.",
 "budget":"11 / 10 (+10 %)"},
{"id":"DON099-moins-2","zone":"DON099","pole":"-","palier":2,"nom":"Le Rire dans les roseaux","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 2 coups de 4 au hasard. Un Petit homme des marais rejoint le combat : 6 PV, frappe 2. 2 coups de 2 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["si","vol",[["deg","hasard",4,2]]],["invoque","Petit homme des marais",6,2],["deg","hasard",2,2],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Quelque chose rit dans les roseaux, de plus en plus près ; personne ne sort voir ce que c'est.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON099-moins-3","zone":"DON099","pole":"-","palier":3,"nom":"La Hutte du potier","cout":2,"cible":1,
 "effet":"3 coups de 5 au hasard ; la cible brûle : 3 par tour pendant 2 tours ; la prochaine carte de zone de ce tour compte double. Prix : le héros perd 2 PV.",
 "ops":[["deg","hasard",5,3],["brulure","cible",3,2],["echo"],["prixPV",2]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Écho","Prix"],
 "ambiance":"On a brûlé la hutte du potier avec ses jarres ; elles ont éclaté une à une, comme des rires.",
 "budget":"25 / 24 (+4 %)"},
{"id":"DON099-moins-4","zone":"DON099","pole":"-","palier":4,"nom":"Les Osselets jetés","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis 3 coups de 4 au hasard ; la prochaine carte de zone de ce tour compte double ; l'attaque de la cible baisse de 2.",
 "ops":[["si","vol",[["deg","cible",10]]],["deg","hasard",4,3],["echo"],["affaiblit","cible",2]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Affaiblissement","Écho","Condition"],
 "ambiance":"Nokuthula jette les osselets sur la natte, les regarde longtemps, et lève les yeux vers le voisin.",
 "budget":"29 / 28 (+4 %)"},
{"id":"DON099-moins-5","zone":"DON099","pole":"-","palier":5,"nom":"Le Hibou sur le toit","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Un Hibou de mauvais augure rejoint le combat : 10 PV, frappe 6. 2 coups de 3 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",12],["invoque","Hibou de mauvais augure",10,6],["deg","hasard",3,2],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Le hibou s'est posé sur le toit du chef et n'en bouge plus ; personne n'ose le chasser.",
 "budget":"31 / 32 (−3 %)"},
{"id":"DON099-moins-6","zone":"DON099","pole":"-","palier":6,"nom":"Les Lits sur les briques","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 3 coups de 6 au hasard. 14 dégâts à la cible ; le héros gagne 6 de garde. Un Babouin de nuit rejoint le combat : 10 PV, frappe 5. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["deg","hasard",6,3]]],["deg","cible",14],["garde","heros",6],["invoque","Babouin de nuit",10,5],["prixPV",2]],
 "tags":["Donjon","Sève","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Chaque saison, on ajoute une rangée de briques sous les lits ; le petit homme, lui, grimpe.",
 "budget":"38,3 / 36 (+6 %)"},
{"id":"DON099-moins7","zone":"DON099","pole":"-","palier":7,"nom":"Le Marais qui rit","cout":2,"cible":1,
 "effet":"Le marais rit. 3 coups de 7 au hasard ; 14 à la cible ; tous marqués (+1 par coup) ; la cible brûle (3 par tour, 2 tours). Pose Sang. Si Racine (consommée) : 3 coups de 5 au hasard ; un Petit homme (10 PV, frappe 6). Prix : le héros perd 2 PV.",
 "ops":[["deg","hasard",7,3],["deg","cible",14],["vulnerable","tous",1],["brulure","cible",3,2],["pose","Sang"],["reveil","Racine",true,[["deg","hasard",5,3],["invoque","Petit homme des marais",10,6]]],["prixPV",2]],
 "tags":["Donjon","Sève","Forme ultime −7","Invocation","Dégâts","Brûlure","Marque","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Les lits touchent les toits ; Nokuthula dort sur le plus haut, et l'on entend rire en dessous.",
 "budget":"45,6 sans combo ; réveil +29 (64 %)"},
{"id":"DON099-plus-1","zone":"DON099","pole":"+","palier":1,"nom":"Le Lit redescendu","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; vos alliés se soignent de 2 ; 4 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",2],["soin","allies",2],["deg","cible",4],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Marque","Soin","Prix"],
 "ambiance":"Un vieux de KwaPhuphe a redescendu son lit à terre ; il a dormi d'une traite, et s'en vante.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON099-plus-2","zone":"DON099","pole":"+","palier":2,"nom":"Le Python endormi","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 6 dégâts à la cible. Un Python des buttes rejoint le combat : 8 PV, frappe 3. La cible est marquée : +1 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",6]]],["invoque","Python des buttes",8,3],["vulnerable","cible",1],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Le python s'enroule sur la butte au soleil ; les enfants enjambent sa queue en allant puiser.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"DON099-plus-3","zone":"DON099","pole":"+","palier":3,"nom":"L'Encens de racines","cout":2,"cible":0,
 "effet":"Tous les ennemis sont marqués : +1 par coup reçu ; vos alliés se soignent de 6 ; le héros gagne 10 de garde.",
 "ops":[["vulnerable","tous",1],["soin","allies",6],["garde","heros",10]],
 "tags":["Donjon","Sève","Pôle +","Marque","Garde","Soin"],
 "ambiance":"Nokuthula brûle des racines dans un tesson ; la fumée monte droit, et les dormeurs sourient.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"DON099-plus-4","zone":"DON099","pole":"+","palier":4,"nom":"La Nuit dans la hutte du chef","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, vos alliés se soignent de 6. Puis 12 dégâts à la cible ; la cible est marquée : +3 par coup reçu ; vos alliés gagnent 2 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["soin","allies",6]]],["deg","cible",12],["vulnerable","cible",3],["garde","allies",2],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Marque","Garde","Soin","Condition","Prix"],
 "ambiance":"Elle a dormi dans la hutte du chef ; au matin, elle savait qui, et ne l'a pas dit.",
 "budget":"24,9 / 28 (−11 %)"},
{"id":"DON099-plus-5","zone":"DON099","pole":"+","palier":5,"nom":"Le Nom qu'on ne dit plus","cout":2,"cible":1,
 "effet":"Un Serpent vert des ancêtres rejoint le combat : 14 PV, frappe 7. La cible est marquée : +3 par coup reçu ; vos alliés gagnent 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Serpent vert des ancêtres",14,7],["vulnerable","cible",3],["garde","allies",6],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Marque","Garde","Prix"],
 "ambiance":"Le serpent vert des ancêtres entre dans la hutte, fait le tour du foyer, et ressort sans rien nommer.",
 "budget":"30,7 / 32 (−4 %)"},
{"id":"DON099-plus-6","zone":"DON099","pole":"+","palier":6,"nom":"Les Dormeurs qui sourient","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 14 dégâts à la cible. La cible est marquée : +2 par coup reçu. Une Grue couronnée rejoint le combat : 12 PV, frappe 6. +2 mana de Sève ; le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",14]]],["vulnerable","cible",2],["invoque","Grue couronnée",12,6],["mana","Sève",2],["garde","heros",4],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Invocation","Dégâts","Marque","Garde","Mana","Condition","Prix"],
 "ambiance":"La grue couronnée danse au bord de l'eau pendant qu'ils dorment ; personne ne la voit, tous la rêvent.",
 "budget":"34,2 / 36 (−5 %)"},
{"id":"DON099-plus7","zone":"DON099","pole":"+","palier":7,"nom":"Le Village qui rêve","cout":2,"cible":1,
 "effet":"Le village rêve ensemble. Tous marqués (+2 par coup) ; le Grand Python (20 PV, frappe 10) ; alliés soignés de 8. Pose Racine. Si Sang (consommé) : la cible marquée (+3) ; une Grue (10 PV, frappe 6) ; +2 mana de Sève. Prix : défaussez 1 carte.",
 "ops":[["vulnerable","tous",2],["invoque","Grand Python des ancêtres",20,10],["soin","allies",8],["pose","Racine"],["reveil","Sang",true,[["vulnerable","cible",3],["invoque","Grue couronnée",10,6],["mana","Sève",2]]],["prixDefausse",1]],
 "tags":["Donjon","Sève","Forme ultime +7","Invocation","Marque","Soin","Mana","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les lits sont redescendus ; on dort dans l'herbe, tous ensemble, Nokuthula au milieu.",
 "budget":"47,2 sans combo ; réveil +29 (61 %)"}
]
```

---

## 11. Ishikiri-dō, la Carrière sous la Glace (DON028) — Donjon · Glacier · Glace · Japonaise féodale

Recette du récit : le poème d'adieu (accroché dans la salle de thé, brûlé avec elle). Recette du −7 : le silence (les moines figés dans la glace, la masse levée) ; du +7 : la démesure (le glacier devenu cristal, les faisceaux brûlants).

**Pierre (−)** : le coin de fer → la masse qui sonne → les blocs sur rouleaux → la galerie droite → les pierres de Sōen → le moine figé → la Carrière engloutie. Fil mécanique : perce-garde sur 7 cartes (le coin et la masse), gros coups ciblés sur 5 cartes, garde du héros sur 4, coups au hasard sur 3, crochet « la cible a de la garde » lu avant de la briser (3 cartes) ; prix : PV.
**Cristal (+)** : la glace claire → le prisme aux poutres → la loupe taillée → l'encens sans braise → la véranda au soleil → le château qui brûle → le Glacier de lumière. Fil mécanique : brûlure sur 7 cartes (la glace taillée en loupe), marque sur 4 cartes, mana de Glace sur 3, crochet « la cible brûle déjà » (3 cartes) ; prix : garde ennemie et défausse.

```json
{"fiche":"DON028","nom":"Ishikiri-dō, la Carrière sous la Glace",
 "recit":"Le moine Sōen tailla sous le glacier les pierres du château du seigneur, une à une, et laissa en mourant un poème d'adieu : « La pierre se tait, la glace écoute ; ce qu'on taille, on le devient. » Le seigneur fit encore tailler dans la glace la plus claire une loupe, pour allumer l'encens sans braise. Un été, on oublia la loupe sur la véranda, face au soleil. Le château brûla jusqu'aux fondations. Les pierres de Sōen tinrent debout, noircies, et le poème, accroché dans la salle de thé, brûla avec le reste.",
 "pal":["Un chaos de blocs fendus sous un glacier effondré ; des coins de fer plantés partout, et des moines figés dans la glace grise, la masse encore levée.","Des galeries taillées droit dans la roche sous la glace ; des blocs équarris attendent sur des rouleaux, et l'on entend sonner les masses.","Un glacier bleu au-dessus d'une carrière de granit, un sentier de moines, un petit temple de bois, des blocs prêts à descendre vers la vallée.","La glace devient claire comme l'eau ; des prismes taillés pendent aux poutres du temple, et la lumière dessine des arcs sur la neige.","Tout le glacier est devenu cristal : le soleil y entre et en ressort en faisceaux brûlants, et la neige fume partout où ils tombent."],
 "pm":"Pierre","pp":"Cristal"}
```

```json
[
{"id":"DON028-moins-1","zone":"DON028","pole":"-","palier":1,"nom":"Le Coin de fer","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 6 dégâts à la cible ; le héros gagne 3 de garde. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["deg","cible",6],["garde","heros",3],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Garde","Prix"],
 "ambiance":"Sōen enfonce le coin de fer dans la fente, frappe, écoute la pierre, et frappe encore.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"DON028-moins-2","zone":"DON028","pole":"-","palier":2,"nom":"La Masse qui sonne","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, riposte 3 jusqu'à votre prochain tour. Puis la garde de la cible tombe à 0 ; le héros gagne 6 de garde ; 2 coups de 2 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["riposte",3]]],["briseGarde","cible"],["garde","heros",6],["deg","hasard",2,2],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Riposte","Garde","Condition","Prix"],
 "ambiance":"Sous le glacier d'Ishikiri-dō, chaque coup de masse sonne longtemps ; la glace le rend plus grave.",
 "budget":"13,8 / 12,5 (+10 %)"},
{"id":"DON028-moins-3","zone":"DON028","pole":"-","palier":3,"nom":"Les Blocs sur rouleaux","cout":2,"cible":1,
 "effet":"Ces coups ignorent la garde ; 16 dégâts à la cible ; le héros gagne 6 de garde.",
 "ops":[["ignoreGarde"],["deg","cible",16],["garde","heros",6]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Garde"],
 "ambiance":"Les blocs équarris descendent vers la vallée sur des rouleaux de cèdre ; les moines tirent en chantant.",
 "budget":"23,8 / 24 (−1 %)"},
{"id":"DON028-moins-4","zone":"DON028","pole":"-","palier":4,"nom":"La Galerie droite","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 2 coups de 4 au hasard. Puis toute garde ennemie tombe à 0 ; 3 coups de 5 au hasard ; la cible est marquée : +1 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","hasard",4,2]]],["briseGarde","tous"],["deg","hasard",5,3],["vulnerable","cible",1],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Marque","Perce-garde","Condition","Prix"],
 "ambiance":"Sōen taillait ses galeries si droit qu'on y verrait le jour au bout ; mais au bout, la glace.",
 "budget":"27,6 / 28 (−1 %)"},
{"id":"DON028-moins-5","zone":"DON028","pole":"-","palier":5,"nom":"Les Pierres de Sōen","cout":2,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 18 dégâts à la cible ; la cible est marquée : +2 par coup reçu ; le héros gagne 6 de garde. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["deg","cible",18],["vulnerable","cible",2],["garde","heros",6],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Marque","Perce-garde","Garde","Prix"],
 "ambiance":"Les pierres de Sōen ont tenu quand le château a brûlé ; noircies, elles portent encore ses marques de taille.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"DON028-moins-6","zone":"DON028","pole":"-","palier":6,"nom":"Le Moine figé","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, toute garde ennemie tombe à 0. Puis 20 dégâts à la cible ; 3 coups de 3 au hasard ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["briseGarde","tous"]]],["deg","cible",20],["deg","hasard",3,3],["riposte",3],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Riposte","Condition","Prix"],
 "ambiance":"Un moine est resté pris dans la glace, la masse levée ; les novices le saluent en passant.",
 "budget":"36,3 / 36 (+1 %)"},
{"id":"DON028-moins7","zone":"DON028","pole":"-","palier":7,"nom":"La Carrière engloutie","cout":2,"cible":1,
 "effet":"La carrière avale ses moines. Coups qui ignorent la garde : 24 à la cible, 5 à tous ; la cible brûle (3 par tour, 3 tours). Pose Givre. Si Abîme (consommé) : toute garde ennemie tombe ; 14 à la cible ; marque +3. Prix : le héros perd 2 PV.",
 "ops":[["ignoreGarde"],["deg","cible",24],["deg","tous",5],["brulure","cible",3,3],["pose","Givre"],["reveil","Abîme",true,[["briseGarde","tous"],["deg","cible",14],["vulnerable","cible",3]]],["prixPV",2]],
 "tags":["Donjon","Glace","Forme ultime −7","Dégâts","Brûlure","Marque","Perce-garde","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Le glacier s'est affaissé sur la carrière ; dedans, les masses sont restées levées, et les moines avec.",
 "budget":"45 sans combo ; réveil +29,6 (66 %)"},
{"id":"DON028-plus-1","zone":"DON028","pole":"+","palier":1,"nom":"La Glace claire","cout":1,"cible":1,
 "effet":"La cible brûle : 3 par tour pendant 3 tours ; riposte 1 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["brulure","cible",3,3],["riposte",1],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Brûlure","Riposte","Prix"],
 "ambiance":"Au fond de la carrière, une veine de glace si claire qu'on lit au travers le poème de Sōen.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON028-plus-2","zone":"DON028","pole":"+","palier":2,"nom":"Le Prisme aux poutres","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts à la cible. Puis la cible brûle : 2 par tour pendant 3 tours ; la cible est marquée : +1 par coup reçu.",
 "ops":[["si","brule",[["deg","cible",6]]],["brulure","cible",2,3],["vulnerable","cible",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Brûlure","Marque","Condition"],
 "ambiance":"Les novices pendent des prismes de glace aux poutres du temple ; à midi, la neige se couvre d'arcs.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON028-plus-3","zone":"DON028","pole":"+","palier":3,"nom":"La Loupe taillée","cout":2,"cible":1,
 "effet":"La cible brûle : 4 par tour pendant 3 tours ; 8 dégâts à la cible ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",4,3],["deg","cible",8],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Brûlure","Marque","Prix"],
 "ambiance":"Le seigneur voulut une loupe de glace pour l'encens ; Sōen n'était plus là pour refuser.",
 "budget":"23 / 24 (−4 %)"},
{"id":"DON028-plus-4","zone":"DON028","pole":"+","palier":4,"nom":"L'Encens sans braise","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, la cible est marquée : +2 par coup reçu. Puis tous les ennemis brûlent : 2 par tour pendant 3 tours ; +1 mana de Glace ; le héros gagne 8 de garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["vulnerable","cible",2]]],["brulure","tous",2,3],["mana","Glace",1],["garde","heros",8],["pioche",1],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Brûlure","Marque","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"Le seigneur allume l'encens au soleil, à travers la glace ; la salle de thé sent la neige brûlée.",
 "budget":"27,6 / 28 (−1 %)"},
{"id":"DON028-plus-5","zone":"DON028","pole":"+","palier":5,"nom":"La Véranda au soleil","cout":2,"cible":1,
 "effet":"La cible brûle : 5 par tour pendant 3 tours ; 12 dégâts à la cible ; +2 mana de Glace. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",5,3],["deg","cible",12],["mana","Glace",2],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Brûlure","Mana","Prix"],
 "ambiance":"On a oublié la loupe sur la véranda, face au soleil d'été ; le plancher a fumé le premier.",
 "budget":"30 / 32 (−6 %)"},
{"id":"DON028-plus-6","zone":"DON028","pole":"+","palier":6,"nom":"Le Château qui brûle","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 8 dégâts à tous les ennemis. Puis tous les ennemis brûlent : 3 par tour pendant 3 tours ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["deg","tous",8]]],["brulure","tous",3,3],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Brûlure","Marque","Condition","Prix"],
 "ambiance":"Le château a brûlé jusqu'aux fondations, et le poème d'adieu de Sōen avec la salle de thé.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"DON028-plus7","zone":"DON028","pole":"+","palier":7,"nom":"Le Glacier de lumière","cout":2,"cible":1,
 "effet":"Le glacier devient lumière. Tous brûlent (4 par tour, 3 tours) ; 14 à la cible ; garde 10. Pose Braise. Si Givre (consommé) : la cible brûle (4 par tour, 3 tours) ; 10 dégâts à la cible ; +2 mana de Glace. Prix : défaussez 1 carte.",
 "ops":[["brulure","tous",4,3],["deg","cible",14],["garde","heros",10],["pose","Braise"],["reveil","Givre",true,[["brulure","cible",4,3],["deg","cible",10],["mana","Glace",2]]],["prixDefausse",1]],
 "tags":["Donjon","Glace","Forme ultime +7","Dégâts","Brûlure","Garde","Mana","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"La neige fume partout où tombent les faisceaux ; les pierres noircies de Sōen ne fument plus.",
 "budget":"45,4 sans combo ; réveil +28 (62 %)"}
]
```

---

## 12. Sabiyama-jō, le Château sur la Lave (CIT018) — Citadelle · Volcan · Feu · Japonaise féodale

Recette du récit : le rapport d'inspection (le même chaque printemps, puis le dernier). Recette du −7 : le silence (les armures soudées, les portes qui ne tournent plus) ; du +7 : la démesure (le château doré qu'on voit de toute la province, le trésor vide).

**Rouille (−)** : l'inspection → les lames rongées → les gonds soudés → les vapeurs jaunes → la cuirasse qui s'effrite → l'armurier gratte → les Armures soudées. Fil mécanique : exil sur 6 cartes (l'armure rouillée ne sert qu'une fois), riposte sur 4 cartes, brûlure des vapeurs sur 4, garde des alliés sur 3, ashigaru rouillés sur 4, crochet « la cible s'apprête à piétiner » (3 cartes) ; prix : exil.
**Or (+)** : la laque d'or → les gonds dorés → le trésor ouvert → ce qui brille se voit → l'or ne rouille pas → payer pour qu'il frappe moins → le Trésor vide. Fil mécanique : affaiblissement sur 7 cartes (l'or versé à l'assiégeant pour qu'il frappe moins fort), garde des alliés sur 4 cartes, samouraïs laqués sur 3, crochet « il ne reste qu'un ennemi » (3 cartes) ; prix : soin et garde des ennemis (c'est l'ennemi qu'on paie).

```json
{"fiche":"CIT018","nom":"Sabiyama-jō, le Château sur la Lave",
 "recit":"Le rapport d'inspection de l'armurerie de Sabiyama est le même chaque printemps : les vapeurs du volcan ont rongé les lames, les cuirasses, les gonds. Le seigneur Tadakiyo fit laquer d'or toutes les armures, puisque l'or ne rouille pas. Quand l'ennemi vint, les armures dorées brillaient si bien qu'on les vit de la vallée. Le seigneur ouvrit son trésor et paya l'ennemi pour qu'il frappe moins fort ; l'ennemi frappa moins fort, et revint l'année suivante. L'inspecteur nota : armures en bon état, trésor vide.",
 "pal":["Plus un bruit au château : les armures rouillées sont soudées à leurs supports, les portes ne tournent plus sur leurs gonds, et la lave luit sous les douves.","Les vapeurs jaunes du cratère rongent tout ; des armuriers grattent les lames, et des plaques de rouille tombent des cuirasses pendues.","Un château noir au flanc d'un volcan qui fume, des murs de lave taillée, des armures en rang dans l'armurerie, des bannières dans le vent soufré.","On laque les armures d'or dans la cour ; les cuirasses brillent au soleil, et les gonds dorés des portes tournent sans un bruit.","Le château entier est doré, toits, murs et armures ; on le voit briller de toute la province, et les coffres du trésor sont ouverts, et vides."],
 "pm":"Rouille","pp":"Or"}
```

```json
[
{"id":"CIT018-moins-1","zone":"CIT018","pole":"-","palier":1,"nom":"L'Inspection","cout":1,"cible":1,
 "effet":"Le héros gagne 8 de garde ; +1 mana de Feu ; la cible est marquée : +1 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["garde","heros",8],["mana","Feu",1],["vulnerable","cible",1],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Marque","Garde","Mana","Exil","Prix"],
 "ambiance":"L'inspecteur de Sabiyama recopie le rapport du printemps dernier, et change seulement la date.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"CIT018-moins-2","zone":"CIT018","pole":"-","palier":2,"nom":"Les Lames rongées","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, riposte 3 jusqu'à votre prochain tour. Puis 8 dégâts à la cible ; la cible brûle : 2 par tour pendant 2 tours. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["riposte",3]]],["deg","cible",8],["brulure","cible",2,2],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Brûlure","Riposte","Condition","Exil","Prix"],
 "ambiance":"Les vapeurs rongent une lame en une saison ; on la tire du fourreau, il en sort un tronçon.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"CIT018-moins-3","zone":"CIT018","pole":"-","palier":3,"nom":"Les Gonds soudés","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 10 de garde ; la garde de la cible tombe à 0 ; la cible est marquée : +2 par coup reçu. Un Ashigaru de rouille rejoint le combat : 6 PV, frappe 2. Prix : cette carte s'exile.",
 "ops":[["garde","allies",10],["briseGarde","cible"],["vulnerable","cible",2],["invoque","Ashigaru de rouille",6,2],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Invocation","Marque","Perce-garde","Garde","Exil","Prix"],
 "ambiance":"La grande porte ne tourne plus sur ses gonds rouillés ; on passe par la poterne, de côté.",
 "budget":"24 / 24 (+0 %)"},
{"id":"CIT018-moins-4","zone":"CIT018","pole":"-","palier":4,"nom":"Les Vapeurs jaunes","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Tous les ennemis brûlent : 2 par tour pendant 3 tours. Un Ashigaru rouillé rejoint le combat : 10 PV, frappe 4.",
 "ops":[["si","pietine",[["deg","cible",10]]],["brulure","tous",2,3],["invoque","Ashigaru rouillé",10,4]],
 "tags":["Citadelle","Feu","Pôle −","Invocation","Dégâts","Brûlure","Condition"],
 "ambiance":"Le vent tourne, et les vapeurs jaunes descendent du cratère dans la cour ; les soldats ferment les yeux.",
 "budget":"29,2 / 28 (+4 %)"},
{"id":"CIT018-moins-5","zone":"CIT018","pole":"-","palier":5,"nom":"La Cuirasse qui s'effrite","cout":2,"cible":1,
 "effet":"Riposte 6 jusqu'à votre prochain tour ; le héros gagne 12 de garde ; la cible brûle : 3 par tour pendant 3 tours ; +1 mana de Feu. Prix : cette carte s'exile.",
 "ops":[["riposte",6],["garde","heros",12],["brulure","cible",3,3],["mana","Feu",1],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Brûlure","Riposte","Garde","Mana","Exil","Prix"],
 "ambiance":"La cuirasse tient encore debout sur son support ; on la touche, et elle tombe en écailles rousses.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"CIT018-moins-6","zone":"CIT018","pole":"-","palier":6,"nom":"L'Armurier gratte","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, vos alliés gagnent 10 de garde. 10 dégâts à la cible ; riposte 5 jusqu'à votre prochain tour. Un Samouraï de rouille rejoint le combat : 12 PV, frappe 6. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["garde","allies",10]]],["deg","cible",10],["riposte",5],["invoque","Samouraï de rouille",12,6],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Invocation","Dégâts","Riposte","Garde","Condition","Exil","Prix"],
 "ambiance":"L'armurier gratte la rouille du matin au soir ; le soir, elle est revenue là où il a commencé.",
 "budget":"38 / 36 (+6 %)"},
{"id":"CIT018-moins7","zone":"CIT018","pole":"-","palier":7,"nom":"Les Armures soudées","cout":2,"cible":1,
 "effet":"Les armures se soudent. Riposte 10 ; alliés +14 de garde ; 12 à la cible, qui brûle (2 par tour, 2 tours). Pose Sceau. Si Braise (consommée) : riposte 6 ; un Gardien rouillé (14 PV, frappe 6) ; 4 à la cible. Prix : cette carte s'exile.",
 "ops":[["riposte",10],["garde","allies",14],["deg","cible",12],["brulure","cible",2,2],["pose","Sceau"],["reveil","Braise",true,[["riposte",6],["invoque","Gardien rouillé",14,6],["deg","cible",4]]],["exil"]],
 "tags":["Citadelle","Feu","Forme ultime −7","Invocation","Dégâts","Brûlure","Riposte","Garde","Exil","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Plus rien ne bouge à Sabiyama ; les armures montent la garde seules, soudées à leurs supports.",
 "budget":"49,8 sans combo ; réveil +32 (64 %)"},
{"id":"CIT018-plus-1","zone":"CIT018","pole":"+","palier":1,"nom":"La Laque d'or","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 3 ; le héros gagne 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","cible",3],["garde","heros",4],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Affaiblissement","Garde","Prix"],
 "ambiance":"On laque d'or la première armure dans la cour de Sabiyama ; le seigneur Tadakiyo la regarde sécher.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT018-plus-2","zone":"CIT018","pole":"+","palier":2,"nom":"Les Gonds dorés","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, l'attaque de la cible baisse de 2. Vos alliés gagnent 6 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","seul",[["affaiblit","cible",2]]],["garde","allies",6],["riposte",2],["ennemiGarde",1]],
 "tags":["Citadelle","Feu","Pôle +","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les gonds dorés des portes tournent sans un bruit ; on n'entend plus arriver personne.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"CIT018-plus-3","zone":"CIT018","pole":"+","palier":3,"nom":"Le Trésor ouvert","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 1 ; vos alliés gagnent 8 de garde. Un Porte-bannière doré rejoint le combat : 8 PV, frappe 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","tous",1],["garde","allies",8],["invoque","Porte-bannière doré",8,4],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Le seigneur ouvre le trésor devant l'envoyé ennemi ; l'envoyé compte, et salue bas.",
 "budget":"24 / 24 (+0 %)"},
{"id":"CIT018-plus-4","zone":"CIT018","pole":"+","palier":4,"nom":"Ce qui brille se voit","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 12 dégâts à la cible. L'attaque de la cible baisse de 4 ; le héros gagne 10 de garde.",
 "ops":[["si","seul",[["deg","cible",12]]],["affaiblit","cible",4],["garde","heros",10]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Condition"],
 "ambiance":"Les armures dorées brillent si bien qu'on les voit de la vallée ; l'ennemi aussi les voit.",
 "budget":"26 / 28 (−7 %)"},
{"id":"CIT018-plus-5","zone":"CIT018","pole":"+","palier":5,"nom":"L'Or ne rouille pas","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; l'attaque de la cible baisse de 3 ; vos alliés gagnent 10 de garde ; +1 mana de Feu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",10],["affaiblit","cible",3],["garde","allies",10],["mana","Feu",1],["ennemiGarde",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Mana","Prix"],
 "ambiance":"Tadakiyo l'a dit à ses armuriers : l'or ne rouille pas ; personne n'a parlé du reste.",
 "budget":"32 / 32 (+0 %)"},
{"id":"CIT018-plus-6","zone":"CIT018","pole":"+","palier":6,"nom":"Payer pour qu'il frappe moins","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, l'attaque de chaque ennemi baisse de 2. Un Samouraï laqué d'or rejoint le combat : 14 PV, frappe 8. 12 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","seul",[["affaiblit","tous",2]]],["invoque","Samouraï laqué d'or",14,8],["deg","cible",12],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"L'ennemi a pris l'or et frappé moins fort ; l'année suivante, il est revenu frapper moins fort encore.",
 "budget":"35,4 / 36 (−2 %)"},
{"id":"CIT018-plus7","zone":"CIT018","pole":"+","palier":7,"nom":"Le Trésor vide","cout":2,"cible":1,
 "effet":"Le trésor est vide. Attaque de chaque ennemi −3 ; alliés +14 de garde ; 14 dégâts à la cible. Pose Abîme. Si Racine (consommée) : attaque de la cible −3 ; un Porte-bannière doré (10 PV, frappe 6) ; +2 mana de Feu. Prix : ennemis soignés de 2.",
 "ops":[["affaiblit","tous",3],["garde","allies",14],["deg","cible",14],["pose","Abîme"],["reveil","Racine",true,[["affaiblit","cible",3],["invoque","Porte-bannière doré",10,6],["mana","Feu",2]]],["ennemiSoin",2]],
 "tags":["Citadelle","Feu","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Garde","Mana","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"L'inspecteur a noté : armures en bon état, trésor vide ; il a signé, et demandé ses gages.",
 "budget":"46,2 sans combo ; réveil +29 (63 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

### Les Colliers de Plavuchka (RES205) — Ressource · Îles flottantes · Vent · slave

Geste : enfiler les cèpes sur des fils et les pendre au vent. Objet : colliers de cèpes séchés. Chute : la doyenne qui garde le meilleur.

```json
{"fiche":"RES205","nom":"Les Colliers de Plavuchka",
 "recit":"Sur les îles qui flottent au-dessus de Plavuchka, les cèpes poussent dans la mousse des bords. Les femmes les enfilent sur des fils de lin et les pendent aux branches, où le vent les sèche vite. Baba Zlata goûte chaque collier et garde le meilleur pour elle.",
 "pal":["Un fil tendu entre les bouleaux du bord de l'île, quelques cèpes enfilés qui sèchent et se balancent au-dessus du vide.","Les îles entières pavoisées de colliers bruns, d'arbre en arbre ; le vent sent le champignon jusqu'aux nuées, et les femmes enfilent jusqu'à la nuit."]}
```

### Les Ramures de Lu-yuan (RES042) — Ressource · Savane · Feu · chinoise impériale

Geste : ramasser dans l'herbe brûlée les bois tombés des cerfs. Objet : ramures. Chute : la fatigue des princes.

```json
{"fiche":"RES042","nom":"Les Ramures de Lu-yuan",
 "recit":"Après le feu de printemps, les cerfs du parc de Lu-yuan perdent leurs bois dans l'herbe brûlée. Les gardes les ramassent avant les hyènes et les comptent devant l'intendant Gao. Les apothicaires de la cour les râpent en poudre contre la fatigue des princes.",
 "pal":["Une savane noircie, un bois de cerf tombé dans la cendre, et un garde penché qui le ramasse en regardant autour de lui.","Des fagots de ramures sur les charrettes du palais ; des cerfs aux têtes nues paissent l'herbe neuve sans lever les yeux."]}
```

### La Manne de Tamrī-ṣēri (RES368) — Ressource · Désert de sel · Pierre · mésopotamienne

Geste : secouer les tamaris à l'aube au-dessus de toiles. Objet : manne. Chute : les galettes mangées en marchant.

```json
{"fiche":"RES368","nom":"La Manne de Tamrī-ṣēri",
 "recit":"Au bord du désert de sel, les tamaris de Tamrī-ṣēri suintent la nuit une gomme blanche qui durcit en grains. À l'aube, les enfants secouent les branches au-dessus de toiles tendues. Les vieilles en font des galettes sucrées qu'on mange en marchant.",
 "pal":["Un tamaris tordu sur la croûte de sel, des grains blancs collés aux rameaux, et un enfant qui secoue une branche au-dessus d'une toile.","Des rangées de tamaris secoués à l'aube ; les toiles blanchissent de manne, et les fourmis arrivent en files depuis le désert."]}
```

### Les Baobabs de Qaqqaliaq (RES083) — Ressource · Savane · Feu · inuit

Geste : fendre à l'ulu les fruits du baobab et en vider la poudre. Objet : poudre de baobab. Chute : l'ulu qui ne sait pas où il est.

```json
{"fiche":"RES083","nom":"Les Baobabs de Qaqqaliaq",
 "recit":"Les femmes de Qaqqaliaq ont gardé l'ulu de leurs grand-mères, même sous les baobabs. Elles en fendent les fruits, durs comme la pierre, et en vident la poudre blanche et acide. Aana dit que l'ulu ne sait pas où il est.",
 "pal":["Un baobab énorme et nu, quelques fruits tombés à son pied, et une femme assise qui en fend un d'un coup d'ulu.","Sous chaque baobab, un cercle de femmes et d'ulus ; la poudre blanche vole dans le vent chaud, et les coques vides s'entassent comme des crânes."]}
```

### Le Gui de Tír Luain (RES151) — Ressource · Îles flottantes · Vent · celte

Geste : couper le gui à la faucille, couché sur la branche, et le passer de main en main. Objet : gui. Chute : le plus vieux toujours au bout de la chaîne.

```json
{"fiche":"RES151","nom":"Le Gui de Tír Luain",
 "recit":"À Tír Luain, les chênes penchent au-dessus du vide. On coupe le gui à la faucille, couché sur la branche, et on le passe de main en main jusqu'au milieu de l'île : ce qui tombe se perd dans les nuages. Cathal, le plus vieux, est toujours au bout.",
 "pal":["Un chêne penché au bord d'une île, une touffe de gui dans ses branches, et un homme couché à plat ventre sur la branche, la faucille à la main.","Des chaînes de bras tendus de chaque chêne jusqu'au milieu de l'île ; les boules de gui passent de main en main, et pas une ne tombe."]}
```

### Les Défenses de Castra Borealis (RES325) — Ressource · Toundra · Glace · romaine

Geste : dégeler à l'eau chaude des thermes les défenses de mammouth. Objet : ivoire fossile. Chute : le préfet expédie, les soldats taillent des dés (gabarit « seigneur et petites gens », 1 sur 3).

```json
{"fiche":"RES325","nom":"Les Défenses de Castra Borealis",
 "recit":"Les soldats de Castra Borealis ont vu une défense courbe sortir du gel. Ils versent l'eau chaude des thermes dans les trous pour en dégager d'autres. Le préfet les envoie à Rome comme cornes de géants ; les soldats en gardent les éclats pour se tailler des dés.",
 "pal":["Un trou fumant dans la toundra gelée, une défense jaunie qui dépasse du gel, et un légionnaire qui y verse de l'eau chaude.","Les défenses dégagées, alignées devant le fort comme une palissade courbe ; les chariots les attendent, et la vapeur monte de tous les trous."]}
```

### Les Clous de Khöshöö-Balgas (RES328) — Ressource · Cité en ruines · Pierre · mongole

Geste : arracher à la tenaille les clous de cuivre des portes effondrées et les fondre. Objet : clous de cuivre fondus en lingots. Chute : la ville vendue clou par clou.

```json
{"fiche":"RES328","nom":"Les Clous de Khöshöö-Balgas",
 "recit":"Les portes de Khöshöö-Balgas sont tombées depuis longtemps, mais leurs clous de cuivre tiennent encore dans le bois pourri. Les enfants les arrachent à la tenaille, et les forgerons du campement les fondent en lingots. Bat-Erdene dit que la ville se vend clou par clou, et qu'il en reste.",
 "pal":["Une porte effondrée dans le sable, des clous verdis plantés dans le bois noir, et un enfant qui en arrache un à la tenaille.","Des portes arrachées dans toutes les ruines ; près des yourtes, les forgerons coulent le cuivre en lingots, et une fumée verte monte au vent."]}
```

### Les Amadouviers de Coill Dorcha (RES155) — Ressource · Forêt boréale · Glace · celte

Geste : détacher à la hache les sabots d'amadou et les battre au maillet. Objet : amadou. Chute : l'étincelle au premier coup.

```json
{"fiche":"RES155","nom":"Les Amadouviers de Coill Dorcha",
 "recit":"Dans la forêt de Coill Dorcha, des champignons durs comme des sabots poussent sur les bouleaux morts. Brigid les détache à la hache, les fait bouillir, les bat au maillet et en tire une peau brune qui prend l'étincelle au premier coup de briquet.",
 "pal":["Un bouleau mort sous la neige, des sabots gris accrochés à son tronc, et une femme qui en détache un d'un coup de hache.","Des troncs écaillés de sabots dans toute la forêt ; près des huttes, l'amadou battu sèche en feuilles brunes, et des étincelles volent."]}
```

### Les Œufs de Svartbjørg (RES299) — Ressource · Falaise côtière · Vent · nordique

Geste : descendre à la corde prendre les œufs de guillemot sur les corniches. Objet : œufs de guillemot. Chute : les frères qui tiennent la corde parce qu'ils ont faim.

```json
{"fiche":"RES299","nom":"Les Œufs de Svartbjørg",
 "recit":"Au printemps, les guillemots de Svartbjørg pondent sur les corniches nues, un œuf pointu chacun. Eirik descend au bout d'une corde que tiennent ses frères, remplit le sac pendu à son cou et remonte. Ses frères tiennent bien la corde : ils ont faim aussi.",
 "pal":["Une falaise noire au-dessus de la mer, des oiseaux serrés sur les corniches, et une corde qui pend du haut, tendue par un poids.","Des cordes pendues tout le long de la falaise, des hommes qui s'y balancent ; les oiseaux tournent en criant, et les sacs remontent pleins."]}
```

### Le Pollen de Pujiang (RES114) — Ressource · Marais · Sève · chinoise impériale

Geste : secouer les épis de massette au-dessus d'un tamis. Objet : pollen de massette. Chute : ce qui colle aux manches (gabarit « seigneur et petites gens », 2 sur 3).

```json
{"fiche":"RES114","nom":"Le Pollen de Pujiang",
 "recit":"À la fin de l'été, les massettes du marais de Pujiang se couvrent de pollen d'or. Les femmes passent en barque et secouent les épis au-dessus d'un tamis. Le surintendant prélève sa part pour les médecins du palais ; les femmes gardent ce qui colle à leurs manches.",
 "pal":["Des massettes brunes dans l'eau dormante, une barque immobile, et une femme qui secoue un épi au-dessus d'un tamis.","Des barques partout entre les massettes ; l'air au-dessus du marais est jaune de pollen, et les manches des femmes aussi."]}
```

### La Latérite de Srae Krâham (RES128) — Ressource · Désert de sel · Pierre · khmère

Geste : couper à la bêche la latérite molle sous la croûte de sel. Objet : blocs de latérite. Chute : le soleil qui fait le reste.

```json
{"fiche":"RES128","nom":"La Latérite de Srae Krâham",
 "recit":"Sous la croûte de sel de Srae Krâham dort une terre rouge qu'on coupe à la bêche comme du beurre ; à l'air, elle durcit en pierre. Le temple l'achète au poids. Kosal dit qu'il vend de la terre, et que le soleil fait le reste.",
 "pal":["Une croûte de sel ouverte d'un coup de bêche, la terre rouge et humide dessous, et un homme qui en lève un bloc.","Des blocs rouges empilés sur le sel aussi loin qu'on voit ; ils sèchent au soleil et sonnent déjà comme la pierre quand on les frappe."]}
```

### Le Bois d'aigle de Prey Khmau (RES316) — Ressource · Savane · Feu · khmère

Geste : fendre les arbres malades pour en tailler le cœur noir parfumé. Objet : bois d'aigle. Chute : l'éclat gardé pour les jours sans encens.

```json
{"fiche":"RES316","nom":"Le Bois d'aigle de Prey Khmau",
 "recit":"Dans la savane de Prey Khmau, certains arbres tombent malades et noircissent au cœur. Les chercheurs les reconnaissent à l'odeur, les fendent à la hache et taillent les veines noires. Ce bois parfume les temples ; Mealea en porte toujours un éclat sur elle, pour les jours sans encens.",
 "pal":["Un arbre gris au milieu de l'herbe sèche, une entaille noire dans son tronc, et un homme qui la renifle de près.","Des troncs fendus partout dans la savane, les veines noires mises à nu ; au feu des camps, l'odeur monte et attire les acheteurs."]}
```

### Les Silexières de Cnoc Breac (RES286) — Ressource · Savane · Feu · celte

Geste : creuser des puits dans la craie et remonter les rognons de silex. Objet : silex. Chute : les meilleures pierres pour Fergus.

```json
{"fiche":"RES286","nom":"Les Silexières de Cnoc Breac",
 "recit":"Sur la savane de Cnoc Breac, la craie affleure sous l'herbe brûlée. Les mineurs y creusent des puits étroits, descendent au bout d'une échelle de corde et remontent les rognons de silex, noirs dans leur croûte blanche. Fergus taille les meilleurs en pointes de lance.",
 "pal":["Un puits rond dans la craie au milieu de l'herbe roussie, un tas de rognons noirs au bord, et une échelle de corde qui dépasse.","La plaine trouée de puits blancs jusqu'à l'horizon ; des tas d'éclats noirs brillent au soleil, et les tailleurs frappent à la ronde."]}
```

### Les Pieux de Valle Sorda (RES337) — Ressource · Marais · Sève · vénitienne

Geste : arracher au couteau les grappes de moules des vieux pieux, à l'étale. Objet : moules. Chute : le podestat vend les pieux, les pêcheurs gardent les moules (gabarit « seigneur et petites gens », 3 sur 3).

```json
{"fiche":"RES337","nom":"Les Pieux de Valle Sorda",
 "recit":"Dans le marais de Valle Sorda, les pieux d'un quai disparu sont couverts de moules noires. À l'étale, les pêcheurs les arrachent par grappes au couteau. Le podestat a vendu les pieux à un marchand de bois ; les moules, personne n'a pensé à les vendre.",
 "pal":["Des pieux noirs dans l'eau du marais, couverts de grappes sombres, et une barque arrêtée contre eux à l'étale.","Tous les pieux de l'ancien quai entourés de barques ; les grappes de moules s'entassent sur les bancs, et les pieux nus blanchissent."]}
```

### Les Roses de Salinera (RES182) — Ressource · Désert de sel · Pierre · vénitienne

Geste : dégager au pinceau les roses de sable sous la croûte. Objet : roses de sable. Chute : plus de casse que de vente.

```json
{"fiche":"RES182","nom":"Les Roses de Salinera",
 "recit":"Dans le désert de Salinera, le gypse cristallise en roses de pierre sous la croûte. Les facteurs vénitiens les achètent pour les cabinets de curiosités des palais. Nicolò les dégage au pinceau, une à une, et en casse plus qu'il n'en vend.",
 "pal":["Une croûte de sel soulevée, une rose de pierre beige à demi dégagée, et un homme à genoux qui la brosse au pinceau.","Des caisses de roses de sable alignées sur le quai des chameaux ; les facteurs les déballent une à une à l'ombre des toiles."]}
```

### Les Escamoles de Tlalxoco (RES321) — Ressource · Steppe · Vent · aztèque

Geste : creuser au pied des agaves et lever les œufs de fourmis à la cuillère. Objet : escamoles. Chute : on rebouche pour l'année suivante.

```json
{"fiche":"RES321","nom":"Les Escamoles de Tlalxoco",
 "recit":"Sur la steppe de Tlalxoco, les fourmis noires nichent au pied des agaves. Au printemps, on creuse jusqu'aux chambres, on lève les œufs blancs à la cuillère de bois et on rebouche, pour l'année suivante. Citlali les fait revenir dans la graisse ; les seigneurs de Texcoco en redemandent.",
 "pal":["Un agave bleu dans l'herbe rase, un trou fraîchement creusé à son pied, et des fourmis noires qui courent sur la terre remuée.","Des trous rebouchés au pied de chaque agave de la steppe ; les grappes d'œufs blancs remplissent les jarres, et le vent emporte l'odeur."]}
```

