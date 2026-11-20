# Lot 9 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes). Carte des familles : `familles_A.md`, écrite avant les cartes (12 h 20), relue contre familles_B, C et D, et recomptée contre leurs cartes à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget` de chaque carte) ; formes du palier 7 entre 45 et 55 points de base, sans tolérance, réveil de 60 à 100 %. Aucun boost. Plafonds de valeur (leçon 4 du lot 8) : riposte 8 au plus par carte, dégâts ciblés 20 au plus par carte hors Donjon aux paliers 1 à 6, aucune opération répétée dans une carte.

**Validateur** (`valide.py`, script Python repris du lot 8 et complété avec les leçons du lot 8, relancé sur ce fichier tel qu'il est remis) : **0 erreur**, 2 avertissements voulus (le Sang en invocations, troisième emploi au compte strict ; 5 colonnes, voir plus bas). Il vérifie :
- format et longueurs : un bloc fiche et un bloc de 14 cartes par zone, paliers 1 à 7 sur chaque pôle, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus, ambiance de 12 à 20 mots, effet de 250 caractères au plus, chaque nombre des `ops` présent dans le texte, aucun nombre dans la prose ;
- moteur : opérations et arguments dans l'ordre, conditions lues dans `tv/src/cartes.js` (sans y toucher), `mana` ≤ 2, `"cible":1` partout où il faut, tag Loi, au moins 2 Lois par pôle d'Assemblée, au moins 3 invocations par pôle d'Antre ;
- conditions : aucune rendue vraie ou fausse par une opération qui la précède dans la carte ;
- budgets : écart ≤ 15 % aux paliers 1 à 6 ; palier 7 entre 45 et 55 de base, réveil de 60 à 100 %, phrase d'ouverture de 3 à 6 mots, prix, résonance réveillée différente de la posée ;
- **plafonds du lot 8** : riposte 8 au plus par carte (réveil compris), dégâts ciblés 20 au plus par carte hors Donjon (paliers 1 à 6), aucune opération répétée dans une carte, aucun `mana` répété (`si` compris) ;
- familles : places de LISTE.md tenues à l'unité, pas de famille principale commune aux deux pôles d'une zone, aucune famille principale déjà jouée par le même mot (lots 1 à 8), vocations comptées au compte strict (5 cartes, tout type de zone), appoints dans 3 pôles au plus, au moins 3 familles par pôle, dégâts ciblés sur 4 cartes au plus, « tous » sur 3 au plus, récupération et écho sur 4 au plus, crochet sur 4 cartes au plus, hésitation de tous jamais deux cartes de suite ;
- **couples du lot 8** : chaque couple qui se remplit lui-même (prix ou effet sur 3 cartes, crochet sur 2) seulement sur une colonne déclarée, et compté avec les cartes des autres conteurs du lot 9 ; même assemblage prix + crochet dans 2 de mes pôles au plus ;
- **reprises** : aucun crochet (2 cartes ou plus) déjà pris par le même mot dans les lots 1 à 8 (3 cartes ou plus) ;
- prix : 4 cartes au moins sur 7 par pôle, à une carte près dans la zone ;
- noms : absents de `noms-pris.txt`, **première moitié et nom de lieu comparés aussi**, seconde moitié, mot principal, mot traduit et préfixe comparés au lot ; familles d'animaux comptées sur les noms d'invocation (2 pôles du lot au plus, autres conteurs compris) ;
- prose : mots interdits, pigments au +7, chutes « …, sans X. » et **chutes en parole rapportée** (2 au plus : il y en a 1, « Atoq ne dit rien »).

**Places des familles (LISTE.md), toutes tenues, aucune autre prise** : soin du héros 1 (Corruption ASS054), soin des alliés 1 (Clarté ASS140), garde du héros 1 (Nectar ASS056), garde des alliés 2 (Famine CIT033, Mensonge ANT204), affaiblissement 1 (Pureté ASS054), riposte 1 (Festin CIT033), brûlure 2 (Ombre DON032, Rêve ASS025), marque 1 (Corail ASS153), mana 2 (Lumière DON032, Brume ASS140), perce-garde 1 (Cauchemar ASS025), exil 1 (Ordre ANT163), pioche 1 (Poison ASS056) ; places rares : hésitation (Os ASS153), enchaînement (Vérité ANT204 : « vous avez déjà joué une autre carte » sur 4 cartes, « au moins votre troisième carte » sur 3). Vocations : invocations sur le Cristal (ANT210, reprise unique de C ANT195) et sur le Sang (ANT018, voir le point pour le critique). Colonnes : Pierre (marque et `vulnerable`), Sève (hésitation et `hesite`), Chaos (défausse et `defausseAPrix`), Cendre (garde du héros et `garde`), Floraison (brûlure et `brule`).

**Point pour le critique : le lot manque de vocations.** Au compte strict (5 cartes d'invocation ou de dégâts ciblés, quel que soit le type de zone), A n'avait qu'**une** vocation libre (Pierre ou Cristal, dans la même zone, que D partage : je prends le Cristal, D le Pierre). Il me fallait 7 pôles hors places. Le lot entier est court : 11 vocations au compte strict (A 1, B 4, C 3, D 3) et 16 places de colonne (8 couples × 2) pour 28 pôles. J'ai pris **5 colonnes** (une de plus que la 4e permise), quatre sans prix et une seule à prix, pour laisser les couples à prix à B et D, et **le Sang en invocations** : troisième emploi au compte strict, mais jamais déclaré en vocation (C ANT121 : 6 bêtes sous une famille de marque ; B ANT167 : 5 bêtes sous une famille de riposte), jamais chez A, avec d'autres bêtes (vigognes et condors) et un autre crochet (`vol`). D fait de même avec l'Abysse. Si le critique préfère, le Sang devient une 6e colonne, mais tous les couples sont pleins à 2 dans le lot. Écrit dans familles_A.md à 12 h 20, avant les cartes.

**Couples du lot (leçon 3 du lot 8)** : marque/`vulnerable` (A Pierre, D Exil), hésitation/`hesite` (A Sève, D Sommeil), garde/`garde` (A Cendre, B Raison), brûlure/`brule` (A Floraison, D Sécheresse), défausse/`defausseAPrix` (C Ruine, A Chaos) : chacun à 2, aucun dépassement d'après les cartes des familles. Ailleurs, aucun de mes crochets n'est nourri par son pôle (vérifié au script).

**Couples de mots partagés** : C est inscrit avant moi sur Famine/Festin, Os/Corail, Cauchemar/Rêve et Cendre/Floraison ; j'y prends d'autres familles principales sur les deux pôles et d'autres crochets. Je suis inscrit avant B (Mensonge/Vérité, Brume/Clarté, Corruption/Pureté) et D (Ombre/Lumière, Poison/Nectar, Pierre/Cristal, Chaos/Ordre).

Recettes de récit (aucune deux fois, aucune reprise de mes formes des lots 7 et 8, documents cités 4 sur 12 : le testament, la recette, la supplique, le serment ; aucun dialogue, aucune ouverture « X était petit quand », aucune énumération, une seule chute en parole rapportée) : CIT033 la chronique d'un siège ; DON032 **le testament** ; ASS056 **la recette** ; ASS153 le pari ; ASS025 **la supplique** ; ASS054 **le serment** ; ASS140 la querelle de factions ; ANT210 l'héritage partagé ; ANT018 le voyage de corvée ; ANT204 la rumeur ; ANT163 la battue impériale ; ANT157 le retour.

Recettes des extrêmes : −7 en vide (CIT033, ASS140), silence (DON032, ASS056, ANT210), ordre (ASS153, ASS054), foule (ASS025, ANT204, ANT163), démesure (ANT018), ruine (ANT157) ; +7 en démesure (CIT033, ASS153, ASS140, ANT210), vide (DON032, ANT204), foule (ASS056, ANT157), ordre (ASS025, ANT163), silence (ASS054), végétal sans bâtiment (ANT018 : des queñuas sur un col). Aucun pigment au +7.

Résonances des formes du palier 7 (posée → réveillée). Posées : Racine 6, Sceau 4, Abîme 4, Braise 4, Sang 3, Givre 3. Réveillées : Sang 6, Givre 4, Abîme 4, Sceau 4, Braise 3, Racine 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT033 | Sceau → Givre | Racine → Sang |
| DON032 | Abîme → Givre | Sang → Braise |
| ASS056 | Racine → Abîme | Braise → Sceau |
| ASS153 | Givre → Racine | Sceau → Abîme |
| ASS025 | Abîme → Sang | Braise → Givre |
| ASS054 | Racine → Sceau | Sang → Abîme |
| ASS140 | Racine → Sang | Braise → Sceau |
| ANT210 | Abîme → Racine | Givre → Sang |
| ANT018 | Sceau → Abîme | Racine → Braise |
| ANT204 | Sceau → Givre | Abîme → Sang |
| ANT163 | Sang → Braise | Racine → Sceau |
| ANT157 | Givre → Racine | Braise → Sang |

---

## 1. Wi'ij-Kaj, l'Enceinte des Rations (CIT033) — Citadelle · Désert de sel · Pierre · Maya

Forme du récit : la chronique d'un siège (ce que la chronique dit, et ce qu'elle tait). Recette du −7 : le vide (les greniers ouverts et vides, la garnison muette) ; du +7 : la démesure (le festin sorti des greniers jusque sur la croûte de sel).

**Famine (−)** : la ration du rempart → le grenier muré → le compte du matin → le batab Ah Kawil → les chiens des assiégeants → la croûte de sel → les Greniers vides. Fil mécanique : garde des alliés (on tient le rempart ensemble, le ventre vide), affaiblissement et soin du héros en appoint, crochet « la cible prend son élan » ; prix : PV et exil. Autre famille que C ASS018 (garde du héros), autre crochet (C : `pietine`). Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, dégâts ciblés 4, soin du héros 4, affaiblissement 4, riposte 2, exil 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 7 cartes (PV 5, exil 2).

**Festin (+)** : le four de terre ouvert → le cacao du batab → le maïs du fond → le sel sur la table → les convives du rempart → le festin malgré tout → la Table sur le sel. Fil mécanique : riposte, jamais plus de 8 par carte (le soldat repu rend les coups), soin du héros, garde du héros et marque en appoint, crochet « la cible vole par-dessus » ; prix : soin ennemi et défausse. Autre famille que C ASS018 (hésitation), autre crochet (C : `garde`). Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, dégâts ciblés 4, dégâts à tous 3, marque 3, garde du héros 2, pioche 2, soin du héros 2 ; crochet « la cible vole par-dessus » sur 2 ; prix sur 7 cartes (soin ennemi 4, défausse 3).

```json
{"fiche":"CIT033","nom":"Wi'ij-Kaj, l'Enceinte des Rations",
 "recit":"Quand les gens de la côte assiégèrent Wi'ij-Kaj, le batab Ah Kawil fit murer les greniers de sel et de maïs. Il comptait lui-même les rations, chaque matin, à la main. La garnison maigrit sans se plaindre ; dehors, les assiégeants campaient sur la croûte de sel et mangeaient leurs chiens. À la fin de la saison sèche, ils levèrent le camp. Ah Kawil fit ouvrir les greniers pour le festin de la victoire : le maïs du fond avait germé, puis pourri. On festoya avec le sel. La chronique loue sa prévoyance.",
 "pal":["Les greniers murés sont ouverts et vides ; des remparts maigres, une garnison qui ne parle plus, et la croûte de sel jusqu'à l'horizon.","On compte les rations à voix basse ; les jarres de maïs sont scellées à la chaux, et des os de chiens blanchissent dans le camp d'en face.","Une enceinte de pierre sèche sur un désert de sel, des greniers voûtés, et un batab qui compte chaque matin ce qu'on mangera le soir.","Les fours de terre fument dans la cour ; on sale le cerf, on bat le cacao, et les soldats prennent du ventre sous le rempart.","Le festin déborde des greniers jusque sur la croûte de sel ; des tables sans fin, des chiens repus, et plus personne pour monter la garde."],
 "pm":"Famine","pp":"Festin"}
```

```json
[
{"id":"CIT033-moins-1","zone":"CIT033","pole":"-","palier":1,"nom":"La Ration du rempart","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 6 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["garde","allies",6],["riposte",2],["prixPV",1]],
 "tags":["Citadelle","Pierre","Pôle −","Riposte","Garde","Prix"],
 "ambiance":"Une galette de maïs pour la journée, rompue sur le rempart, et chacun garde sa part pour le soir.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"CIT033-moins-2","zone":"CIT033","pole":"-","palier":2,"nom":"Le Grenier muré","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts à la cible. Puis vos alliés gagnent 6 de garde ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["si","elan",[["deg","cible",8]]],["garde","allies",6],["soin","heros",4],["exil"]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Les maçons ont muré la porte du grenier à la chaux, et le batab a gardé la seule truelle.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"CIT033-moins-3","zone":"CIT033","pole":"-","palier":3,"nom":"Le Compte du matin","cout":2,"cible":1,
 "effet":"6 dégâts à la cible ; vos alliés gagnent 10 de garde ; l'attaque de chaque ennemi baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",6],["garde","allies",10],["affaiblit","tous",1],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Prix"],
 "ambiance":"Ah Kawil compte les rations à la main, chaque matin, et personne n'ose compter après lui.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"CIT033-moins-4","zone":"CIT033","pole":"-","palier":4,"nom":"Le Batab Ah Kawil","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 12 dégâts à la cible. Puis vos alliés gagnent 14 de garde ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",12]]],["garde","allies",14],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Le batab maigrit avec la garnison, dit la chronique ; elle ne dit pas qui portait ses repas.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"CIT033-moins-5","zone":"CIT033","pole":"-","palier":5,"nom":"Les Chiens des assiégeants","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 14 de garde ; riposte 3 jusqu'à votre prochain tour ; le héros se soigne de 8. Prix : cette carte s'exile.",
 "ops":[["garde","allies",14],["riposte",3],["soin","heros",8],["exil"]],
 "tags":["Citadelle","Pierre","Pôle −","Riposte","Garde","Soin","Exil","Prix"],
 "ambiance":"Dans le camp d'en face, on mange les chiens ; sur le rempart, on écoute les chiens se taire.",
 "budget":"27,8 / 32 (−13 %)"},
{"id":"CIT033-moins-6","zone":"CIT033","pole":"-","palier":6,"nom":"La Croûte de sel","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, l'attaque de la cible baisse de 3. Puis vos alliés gagnent 16 de garde ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 8. Prix : le héros perd 3 PV.",
 "ops":[["si","elan",[["affaiblit","cible",3]]],["garde","allies",16],["affaiblit","tous",1],["soin","heros",8],["prixPV",3]],
 "tags":["Citadelle","Pierre","Pôle −","Affaiblissement","Garde","Soin","Condition","Prix"],
 "ambiance":"Le sel crève les sandales et brûle les lèvres ; les assiégeants y campent, et y maigrissent aussi.",
 "budget":"35,3 / 36 (−2 %)"},
{"id":"CIT033-moins7","zone":"CIT033","pole":"-","palier":7,"nom":"Les Greniers vides","cout":2,"cible":1,
 "effet":"Le grenier ne garde rien. Alliés +22 de garde ; chaque ennemi −2 d'attaque ; soin du héros 10. Pose Sceau. Si Givre (consommée) : alliés +10 de garde ; 14 à la cible ; soin du héros 6. Prix : héros −3 PV.",
 "ops":[["garde","allies",22],["affaiblit","tous",2],["soin","heros",10],["pose","Sceau"],["reveil","Givre",true,[["garde","allies",10],["deg","cible",14],["soin","heros",6]]],["prixPV",3]],
 "tags":["Citadelle","Pierre","Forme ultime −7","Dégâts","Affaiblissement","Garde","Soin","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Les greniers sont ouverts et vides ; la garnison se tient serrée sur le rempart, et ne parle plus.",
 "budget":"46,6 sans combo ; réveil +32 (69 %)"},
{"id":"CIT033-plus-1","zone":"CIT033","pole":"+","palier":1,"nom":"Le Four de terre ouvert","cout":1,"cible":0,
 "effet":"Riposte 3 jusqu'à votre prochain tour ; le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",3],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle +","Riposte","Garde","Prix"],
 "ambiance":"On ouvre le four de terre de la cour ; la fumée du cerf monte au-dessus des greniers murés.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"CIT033-plus-2","zone":"CIT033","pole":"+","palier":2,"nom":"Le Cacao du batab","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",10]]],["riposte",3],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Le batab fait battre le cacao jusqu'à l'écume, et le verse lui-même aux soldats du rempart.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"CIT033-plus-3","zone":"CIT033","pole":"+","palier":3,"nom":"Le Maïs du fond","cout":2,"cible":0,
 "effet":"Riposte 5 jusqu'à votre prochain tour ; le héros gagne 10 de garde ; 3 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",5],["garde","heros",10],["deg","tous",3],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Riposte","Garde","Prix"],
 "ambiance":"Au fond du grenier, le maïs a germé, puis pourri ; on en fait quand même la bouillie du festin.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"CIT033-plus-4","zone":"CIT033","pole":"+","palier":4,"nom":"Le Sel sur la table","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 12 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",12]]],["riposte",6],["vulnerable","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Marque","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Faute de maïs, on sert le sel : en croûte, en pierre, en poudre, sur chaque plat du festin.",
 "budget":"25 / 28 (−11 %)"},
{"id":"CIT033-plus-5","zone":"CIT033","pole":"+","palier":5,"nom":"Les Convives du rempart","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; riposte 6 jusqu'à votre prochain tour ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",12],["riposte",6],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Riposte","Soin","Prix"],
 "ambiance":"Les soldats festoient le bouclier au bras ; repus, ils frappent plus fort que les assiégeants affamés.",
 "budget":"30 / 32 (−6 %)"},
{"id":"CIT033-plus-6","zone":"CIT033","pole":"+","palier":6,"nom":"Le Festin malgré tout","cout":2,"cible":1,
 "effet":"Riposte 8 jusqu'à votre prochain tour ; 4 dégâts à tous les ennemis ; la cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",8],["deg","tous",4],["vulnerable","cible",2],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Marque","Affaiblissement","Riposte","Prix"],
 "ambiance":"La chronique décrit un festin magnifique ; ceux qui y étaient se souviennent surtout du sel.",
 "budget":"30,8 / 36 (−14 %)"},
{"id":"CIT033-plus7","zone":"CIT033","pole":"+","palier":7,"nom":"La Table sur le sel","cout":2,"cible":1,
 "effet":"La garnison mange le désert. Riposte 8 ; 6 à tous ; soin du héros 12 ; tous marqués (+1). Pose Racine. Si Sang (consommée) : 16 à la cible ; soin du héros 12. Prix : ennemis soignés de 1.",
 "ops":[["riposte",8],["deg","tous",6],["soin","heros",12],["vulnerable","tous",1],["pose","Racine"],["reveil","Sang",true,[["deg","cible",16],["soin","heros",12]]],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Forme ultime +7","Dégâts","Marque","Riposte","Soin","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les tables sortent des greniers et courent sur la croûte de sel ; personne ne monte plus la garde.",
 "budget":"45,8 sans combo ; réveil +28 (61 %)"}
]
```

---

## 2. Taaqsiut, la Fondrière des Lueurs (DON032) — Donjon · Marais · Sève · Inuit

Forme du récit : **document, le testament** de l'angakkuq, puis ce qu'en ont fait les héritiers. Recette du −7 : le silence (l'ombre sans corps, la fondrière où rien ne se pose) ; du +7 : le vide (la lumière qui efface tout, plus une ombre, plus un témoin).

**Ombre (−)** : le tendon de caribou → la nuit qui ressemble → la peau sur la fondrière → l'ombre cousue → le piège sous la mousse → la fondrière qui s'ouvre → la Longue Ombre. Fil mécanique : brûlure (la morsure du froid qui monte du fond), garde du héros et marque en appoint, dégâts ciblés du Donjon sur 4 cartes (pas une vocation : A a déjà joué l'Ombre en gros coups), crochet « il ne reste qu'un ennemi » ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 7, dégâts ciblés 4, garde du héros 4, marque 4 ; crochet « il ne reste qu'un ennemi » sur 3 ; prix sur 7 cartes (PV 4, défausse 3).

**Lumière (+)** : la lueur sur la mousse → le soleil qui ne se couche pas → les peaux vendues → le marchand du sud → la lumière qui creuse → l'été sans nuit → le Grand Jour. Fil mécanique : mana de Sève (l'été qui fait tout pousser trop vite), soin du héros, garde du héros, perce-garde, affaiblissement et pioche en touche, dégâts ciblés sur 4 cartes, crochet « la cible s'apprête à piétiner » ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, soin du héros 4, dégâts ciblés 4, perce-garde 4, affaiblissement 2, garde du héros 2, dégâts à tous 2, exil 2, pioche 2, riposte 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 6 cartes (soin ennemi 4, exil 2).

```json
{"fiche":"DON032","nom":"Taaqsiut, la Fondrière des Lueurs",
 "recit":"Ceci est la parole que l'angakkuq Aningaaq laissa à ses neveux avant de partir sur la glace. Sous la fondrière dort une ombre que j'ai cousue au fond avec un tendon de caribou. L'hiver la tient, parce que la nuit lui ressemble. C'est l'été qu'il faut craindre : le soleil qui ne se couche pas chasse les ombres, et celle-ci, chassée, remonte. Couvrez la fondrière de peaux tout l'été. Les neveux ont vendu les peaux aux marchands du sud. Depuis, les étés sont très clairs à Taaqsiut, et personne n'y campe plus.",
 "pal":["Une ombre sans corps couvre la fondrière en plein jour ; la mousse est noire, l'eau ne reflète rien, et aucun oiseau ne s'y pose.","Des taches sombres glissent sous la mousse contre le vent ; les piquets de tente penchent vers le fond, et le froid mord jusqu'en été.","Une fondrière de mousse et d'eau brune entre les épinettes naines ; des peaux tendues sur des perches, et des pistes qui la contournent.","Le soleil ne quitte plus le ciel ; la mousse fume, des lueurs montent de l'eau, et les ombres des chasseurs raccourcissent sous leurs pieds.","Une lumière blanche sort de la fondrière et l'efface ; plus d'ombre nulle part, ni sous les pierres ni sous les pas, et personne pour le voir."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"DON032-moins-1","zone":"DON032","pole":"-","palier":1,"nom":"Le Tendon de caribou","cout":1,"cible":1,
 "effet":"La cible brûle : 2 par tour pendant 3 tours ; l'attaque de la cible baisse de 1 ; le héros se soigne de 2. Prix : le héros perd 1 PV.",
 "ops":[["brulure","cible",2,3],["affaiblit","cible",1],["soin","heros",2],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Brûlure","Affaiblissement","Soin","Prix"],
 "ambiance":"Aningaaq a cousu l'ombre au fond avec un tendon de caribou, au point serré des bottes d'hiver.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON032-moins-2","zone":"DON032","pole":"-","palier":2,"nom":"La Nuit qui ressemble","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 10 dégâts à la cible. La cible brûle : 3 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["deg","cible",10]]],["brulure","cible",3,3],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"L'hiver, la nuit de Taaqsiut ressemble tant à l'ombre du fond que celle-ci se croit déjà dehors.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"DON032-moins-3","zone":"DON032","pole":"-","palier":3,"nom":"La Peau sur la fondrière","cout":2,"cible":1,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours ; la cible est marquée : +2 par coup reçu ; le héros gagne 8 de garde. Prix : le héros perd 3 PV.",
 "ops":[["brulure","tous",2,3],["vulnerable","cible",2],["garde","heros",8],["prixPV",3]],
 "tags":["Donjon","Sève","Pôle −","Brûlure","Marque","Garde","Prix"],
 "ambiance":"Les peaux tendues sur la mousse gardent le fond dans le noir ; dessous, quelque chose gratte.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"DON032-moins-4","zone":"DON032","pole":"-","palier":4,"nom":"L'Ombre cousue","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 16 dégâts à la cible. La cible brûle : 3 par tour pendant 4 tours ; la cible est marquée : +2 par coup reçu ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["deg","cible",16]]],["brulure","cible",3,4],["vulnerable","cible",2],["garde","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Marque","Garde","Condition","Prix"],
 "ambiance":"Le tendon a tenu des hivers entiers ; à chaque printemps, les neveux le trouvent un peu plus lâche.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"DON032-moins-5","zone":"DON032","pole":"-","palier":5,"nom":"Le Piège sous la mousse","cout":2,"cible":1,
 "effet":"16 dégâts à la cible ; la cible brûle : 3 par tour pendant 3 tours ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",16],["brulure","cible",3,3],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Marque","Prix"],
 "ambiance":"Un pas sur la mousse noire, et le froid prend la jambe jusqu'au genou, en plein soleil.",
 "budget":"29 / 32 (−9 %)"},
{"id":"DON032-moins-6","zone":"DON032","pole":"-","palier":6,"nom":"La Fondrière qui s'ouvre","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 20 dégâts à la cible. Tous les ennemis brûlent : 2 par tour pendant 4 tours ; le héros gagne 10 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["deg","cible",20]]],["brulure","tous",2,4],["garde","heros",10],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Garde","Condition","Prix"],
 "ambiance":"La mousse se fend sans bruit sous le dernier chasseur, et l'eau brune ne rend pas ses bottes.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"DON032-moins7","zone":"DON032","pole":"-","palier":7,"nom":"La Longue Ombre","cout":2,"cible":1,
 "effet":"L'ombre remonte du fond. Tous brûlent (3 par tour, 4 tours) ; 6 à tous ; cible marquée (+2) ; héros +10 de garde. Pose Abîme. Si Givre (consommée) : la cible brûle (4 par tour, 3 tours) ; héros +12 de garde ; cible marquée (+3). Prix : héros −4 PV.",
 "ops":[["brulure","tous",3,4],["deg","tous",6],["vulnerable","cible",2],["garde","heros",10],["pose","Abîme"],["reveil","Givre",true,[["brulure","cible",4,3],["garde","heros",12],["vulnerable","cible",3]]],["prixPV",4]],
 "tags":["Donjon","Sève","Forme ultime −7","Dégâts","Brûlure","Marque","Garde","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"Une ombre sans corps couvre la fondrière à midi ; aucun oiseau ne s'y pose.",
 "budget":"49,6 sans combo ; réveil +30,6 (62 %)"},
{"id":"DON032-plus-1","zone":"DON032","pole":"+","palier":1,"nom":"La Lueur sur la mousse","cout":1,"cible":1,
 "effet":"+1 mana de Sève ; le héros se soigne de 5 ; l'attaque de la cible baisse de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Sève",1],["soin","heros",5],["affaiblit","cible",1],["ennemiSoin",1]],
 "tags":["Donjon","Sève","Pôle +","Affaiblissement","Soin","Mana","Prix"],
 "ambiance":"Une lueur pâle monte de la mousse au cœur de l'été, et les moustiques dansent dedans.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON032-plus-2","zone":"DON032","pole":"+","palier":2,"nom":"Le Soleil qui ne se couche pas","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 8 dégâts à la cible. Puis +1 mana de Sève ; le héros gagne 6 de garde.",
 "ops":[["si","pietine",[["deg","cible",8]]],["mana","Sève",1],["garde","heros",6]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Garde","Mana","Condition"],
 "ambiance":"À Taaqsiut, l'été, le soleil fait le tour du ciel sans toucher l'horizon, et cherche les ombres.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"DON032-plus-3","zone":"DON032","pole":"+","palier":3,"nom":"Les Peaux vendues","cout":2,"cible":1,
 "effet":"+2 mana de Sève ; 5 dégâts à tous les ennemis ; la garde de la cible tombe à 0 ; le héros gagne 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Sève",2],["deg","tous",5],["briseGarde","cible"],["garde","heros",4],["ennemiSoin",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Perce-garde","Garde","Mana","Prix"],
 "ambiance":"Les neveux ont vendu les peaux de la fondrière aux marchands du sud, contre du thé et des aiguilles.",
 "budget":"21,2 / 24 (−12 %)"},
{"id":"DON032-plus-4","zone":"DON032","pole":"+","palier":4,"nom":"Le Marchand du sud","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 16 dégâts à la cible. Puis +2 mana de Sève ; piochez 1 carte ; la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["deg","cible",16]]],["mana","Sève",2],["pioche",1],["briseGarde","cible"],["affaiblit","cible",2],["exil"]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Affaiblissement","Perce-garde","Pioche","Mana","Condition","Exil","Prix"],
 "ambiance":"Le marchand a roulé les peaux sur son traîneau sans demander ce qu'elles couvraient.",
 "budget":"24 / 28 (−14 %)"},
{"id":"DON032-plus-5","zone":"DON032","pole":"+","palier":5,"nom":"La Lumière qui creuse","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; +2 mana de Sève ; la garde de la cible tombe à 0 ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",18],["mana","Sève",2],["briseGarde","cible"],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Perce-garde","Soin","Mana","Prix"],
 "ambiance":"Le soleil fouille la fondrière découverte ; là où il insiste, la mousse s'enfonce et l'eau blanchit.",
 "budget":"31 / 32 (−3 %)"},
{"id":"DON032-plus-6","zone":"DON032","pole":"+","palier":6,"nom":"L'Été sans nuit","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, la cible est marquée : +2 par coup reçu. Puis +2 mana de Sève ; piochez 2 cartes ; le héros se soigne de 10 ; riposte 4 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["vulnerable","cible",2]]],["mana","Sève",2],["pioche",2],["soin","heros",10],["riposte",4],["exil"]],
 "tags":["Donjon","Sève","Pôle +","Marque","Riposte","Soin","Pioche","Mana","Condition","Exil","Prix"],
 "ambiance":"Les saules nains poussent d'une main en une semaine, et les chasseurs dorment les yeux bandés.",
 "budget":"32 / 36 (−11 %)"},
{"id":"DON032-plus7","zone":"DON032","pole":"+","palier":7,"nom":"Le Grand Jour","cout":2,"cible":1,
 "effet":"La fondrière ne dort plus. +2 mana de Sève ; 8 à tous ; les coups ignorent la garde ; soin du héros 14 ; riposte 4. Pose Sang. Si Braise (consommée) : 18 à la cible ; soin du héros 12. Prix : ennemis soignés de 1.",
 "ops":[["mana","Sève",2],["deg","tous",8],["ignoreGarde"],["soin","heros",14],["riposte",4],["pose","Sang"],["reveil","Braise",true,[["deg","cible",18],["soin","heros",12]]],["ennemiSoin",1]],
 "tags":["Donjon","Sève","Forme ultime +7","Dégâts","Perce-garde","Riposte","Soin","Mana","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Une lumière blanche sort de la fondrière et l'efface ; plus une ombre, même sous les pierres.",
 "budget":"46,6 sans combo ; réveil +30 (64 %)"}
]
```

---

## 3. Le Majles des Sorbetiers de Talesh-Bisheh (ASS056) — Assemblée · Jungle · Sève · Perse

Forme du récit : **document, la recette** du sorbet de la cour, et ce que le majles en a voté. Recette du −7 : le silence (la salle vide, les fleurs noires qui suintent) ; du +7 : la foule (toute la vallée qui vient boire).

**Poison (−)** : la cuillère de bois → la fleur qui ressemble → le sorbetier qui goûte → l'apprenti → le sirop de la forêt → le verre devant le khan → la Coupe du khan. Fil mécanique : pioche, Lois (on trie, on choisit, on écarte), brûlure, affaiblissement et garde du héros en appoint, crochet « un ennemi s'apprête à se soigner » (le poison dans le remède) ; prix : PV. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, dégâts ciblés 4, affaiblissement 4, brûlure 4, soin du héros 2, garde du héros 2 ; crochet « un ennemi s'apprête à se soigner » sur 3 ; prix sur 7 cartes (PV 7).

**Nectar (+)** : l'eau de rose → le sirop de fleurs → le sorbet à la neige → le maître Bahram → la neige de la montagne → la coupe partagée → le Sorbet sans fond. Fil mécanique : garde du héros, Lois (le sorbetier qu'on ne touche pas), soin des alliés en appoint, crochet « la cible prend son élan » ; prix : défausse et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, soin des alliés 4, dégâts ciblés 4, riposte 2, dégâts à tous 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 6 cartes (soin ennemi 3, défausse 3).

```json
{"fiche":"ASS056","nom":"Le Majles des Sorbetiers de Talesh-Bisheh",
 "recit":"Recette du sorbet de la cour, telle que la garde le majles des sorbetiers de Talesh-Bisheh. Prendre la neige de la montagne, l'eau de rose, le sirop des fleurs de la forêt. Remuer à la cuillère de bois, jamais de cuivre. Goûter avant de servir : le sorbetier boit devant le khan. Le maître Bahram a goûté toute sa vie et s'en porte bien. Ses apprentis n'ont pas tous eu sa chance, car certaines fleurs de la forêt se ressemblent beaucoup. Le majles a voté que la recette était bonne, et qu'il fallait mieux choisir les apprentis.",
 "pal":["Les lianes pendent chargées de fleurs noires qui suintent ; les cuillères de bois pourrissent dans les jarres, et la salle du majles est vide.","Des apprentis pâles trient les fleurs à la pince ; on brûle celles qui se ressemblent trop, et la fumée sent le miel amer.","Une salle fraîche au bord de la jungle, des jarres de neige sous la paille, des fleurs qui sèchent, et un maître sorbetier qui goûte.","Le sirop coule clair des cuves ; les papillons entrent par les fenêtres, et la cour en redemande avant la fin du repas.","Toute la vallée vient boire à la salle du majles ; le sorbet déborde des jarres jusque dans la jungle, et les fleurs se tournent vers les coupes."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"ASS056-moins-1","zone":"ASS056","pole":"-","palier":1,"nom":"La Loi de la cuillère de bois","cout":1,"cible":1,
 "effet":"Loi : 6 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",6],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Pioche","Prix"],
 "ambiance":"Le cuivre noircit au contact de certaines fleurs ; le bois, lui, ne dit rien à personne.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS056-moins-2","zone":"ASS056","pole":"-","palier":2,"nom":"La Fleur qui ressemble","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, la cible hésite. Puis piochez 1 carte ; l'attaque de la cible baisse de 1 ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","soinEnnemi",[["hesite","cible"]]],["pioche",1],["affaiblit","cible",1],["soin","heros",4],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Affaiblissement","Contrôle","Soin","Pioche","Condition","Prix"],
 "ambiance":"Des corolles blanches sur la même liane ; l'une parfume le sorbet, l'autre a vidé le banc des apprentis.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ASS056-moins-3","zone":"ASS056","pole":"-","palier":3,"nom":"La Loi du sorbetier qui goûte","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; la cible brûle : 3 par tour pendant 3 tours ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["brulure","cible",3,3],["garde","heros",8],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Brûlure","Garde","Pioche","Prix"],
 "ambiance":"Le sorbetier boit devant le khan, à la vue de tous, et sourit jusqu'à ce que le khan boive.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"ASS056-moins-4","zone":"ASS056","pole":"-","palier":4,"nom":"L'Apprenti","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 12 dégâts à la cible. Puis piochez 2 cartes ; la cible brûle : 3 par tour pendant 3 tours ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",12]]],["pioche",2],["brulure","cible",3,3],["riposte",2],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Brûlure","Riposte","Pioche","Condition","Prix"],
 "ambiance":"L'apprenti de l'été a goûté la mauvaise fleur ; le majles a noté son nom, et l'a rayé.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS056-moins-5","zone":"ASS056","pole":"-","palier":5,"nom":"Le Sirop de la forêt","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; piochez 2 cartes ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",14],["pioche",2],["affaiblit","tous",1],["soin","heros",6],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Affaiblissement","Soin","Pioche","Prix"],
 "ambiance":"Le sirop des fleurs de Talesh coule épais et doré ; on n'en connaît pas toujours toutes les fleurs.",
 "budget":"32,6 / 32 (+2 %)"},
{"id":"ASS056-moins-6","zone":"ASS056","pole":"-","palier":6,"nom":"La Loi du verre devant le khan","cout":2,"cible":1,
 "effet":"Loi : si un ennemi s'apprête à se soigner, 6 dégâts à tous les ennemis. Puis piochez 2 cartes ; l'attaque de la cible baisse de 3 ; le héros gagne 10 de garde ; la cible brûle : 2 par tour pendant 3 tours. Prix : le héros perd 3 PV.",
 "ops":[["si","soinEnnemi",[["deg","tous",6]]],["pioche",2],["affaiblit","cible",3],["garde","heros",10],["brulure","cible",2,3],["prixPV",3]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"Le majles a voté que le sorbetier boirait le verre entier, et non plus une gorgée.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ASS056-moins7","zone":"ASS056","pole":"-","palier":7,"nom":"La Coupe du khan","cout":2,"cible":1,
 "effet":"Le sorbet sert la mort. 10 à la cible ; piochez 2 ; chaque ennemi −2 d'attaque ; tous brûlent (2 par tour, 4 tours). Pose Racine. Si Abîme (consommée) : piochez 1 ; 16 à la cible ; cible −3 d'attaque. Prix : héros −3 PV.",
 "ops":[["deg","cible",10],["pioche",2],["affaiblit","tous",2],["brulure","tous",2,4],["pose","Racine"],["reveil","Abîme",true,[["pioche",1],["deg","cible",16],["affaiblit","cible",3]]],["prixPV",3]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Brûlure","Affaiblissement","Pioche","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Les fleurs noires suintent au-dessus des jarres ; dans la salle vide, une coupe attend encore le khan.",
 "budget":"45,8 sans combo ; réveil +29 (63 %)"},
{"id":"ASS056-plus-1","zone":"ASS056","pole":"+","palier":1,"nom":"La Loi de l'eau de rose","cout":1,"cible":0,
 "effet":"Loi : le héros gagne 6 de garde ; vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","heros",6],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Garde","Soin","Prix"],
 "ambiance":"L'eau de rose vient des jardins de Kashan à dos de mulet, et le majles en garde la clé.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ASS056-plus-2","zone":"ASS056","pole":"+","palier":2,"nom":"Le Sirop de fleurs","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts à la cible. Puis le héros gagne 8 de garde ; le héros se soigne de 2.",
 "ops":[["si","elan",[["deg","cible",8]]],["garde","heros",8],["soin","heros",2]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Garde","Soin","Condition"],
 "ambiance":"Le sirop clair de Talesh-Bisheh adoucit la neige, la langue, et l'humeur des émissaires.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ASS056-plus-3","zone":"ASS056","pole":"+","palier":3,"nom":"La Loi du sorbet à la neige","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 12 de garde ; vos alliés se soignent de 6 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",12],["soin","allies",6],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Affaiblissement","Garde","Soin","Prix"],
 "ambiance":"La neige descend de la montagne la nuit, sous la paille, et le majles la pèse à l'arrivée.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ASS056-plus-4","zone":"ASS056","pole":"+","palier":4,"nom":"Le Maître Bahram","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 14 dégâts à la cible. Puis le héros gagne 14 de garde ; riposte 5 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","elan",[["deg","cible",14]]],["garde","heros",14],["riposte",5],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Bahram a goûté chaque sorbet de la cour, toute sa vie, et ne s'est jamais assis pendant un repas.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ASS056-plus-5","zone":"ASS056","pole":"+","palier":5,"nom":"La Neige de la montagne","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros gagne 16 de garde ; vos alliés se soignent de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",10],["garde","heros",16],["soin","allies",8],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Les porteurs de neige arrivent à l'aube, trempés jusqu'aux os, avec des blocs encore bleus.",
 "budget":"31,8 / 32 (−1 %)"},
{"id":"ASS056-plus-6","zone":"ASS056","pole":"+","palier":6,"nom":"La Loi de la coupe partagée","cout":2,"cible":1,
 "effet":"Loi : si la cible prend son élan, tous les ennemis hésitent. Puis le héros gagne 18 de garde ; piochez 2 cartes ; 4 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","elan",[["hesite","tous"]]],["garde","heros",18],["pioche",2],["deg","tous",4],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Contrôle","Garde","Pioche","Condition","Prix"],
 "ambiance":"Le majles a voté que le khan et son hôte boiraient à la même coupe ; les hôtes se raréfient.",
 "budget":"33,7 / 36 (−6 %)"},
{"id":"ASS056-plus7","zone":"ASS056","pole":"+","palier":7,"nom":"Le Sorbet sans fond","cout":2,"cible":1,
 "effet":"Le khan ne goûte plus. Héros +20 de garde ; alliés soignés de 10 ; riposte 6 ; 4 à tous. Pose Braise. Si Sceau (consommée) : héros +10 de garde ; alliés soignés de 8 ; 12 à la cible. Prix : défaussez 1 carte.",
 "ops":[["garde","heros",20],["soin","allies",10],["riposte",6],["deg","tous",4],["pose","Braise"],["reveil","Sceau",true,[["garde","heros",10],["soin","allies",8],["deg","cible",12]]],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Riposte","Garde","Soin","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Toute la vallée vient boire à la salle du majles, et les fleurs se tournent vers les coupes.",
 "budget":"48,8 sans combo ; réveil +32 (66 %)"}
]
```

---

## 4. Le Rūnanga de Rua-Kōiwi (ASS153) — Assemblée · Cavernes cristallines · Pierre · Polynésienne

Forme du récit : le pari (deux façons de coucher les morts, et un rūnanga qui ne sait pas trancher). Recette du −7 : l'ordre (les os rangés jusqu'à la voûte, le lagon mort) ; du +7 : la démesure (la grotte devenue récif, où l'on ne trouve plus aucun mort).

**Os (−)** : les os propres → le lit de la grotte → le cristal froid → Tama → les os des ancêtres → la loi du pari → les Os intacts. Fil mécanique : hésitation, place rare, Lois (les morts bien rangés qui font reculer les vivants), garde des alliés en appoint, crochet « la cible vole par-dessus », toujours lu avant l'hésitation de la carte ; prix : PV et exil. Autre famille que C ANT054 (mana), autre crochet (C : `vulnerable`). Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 7, garde des alliés 4, dégâts ciblés 4, soin du héros 2, exil 2, pioche 2, riposte 2 ; crochet « la cible vole par-dessus » sur 3 ; prix sur 7 cartes (PV 5, exil 2).

**Corail (+)** : le corail nourri → le lagon de Hine → le mort couché dans l'eau → Hine → le récif qui couvre → le corail qui grandit → le Mort introuvable. Fil mécanique : marque, Lois (le corail qui prend sur tout ce qu'on lui donne), riposte et soin des alliés en appoint, crochet « la cible s'apprête à piétiner » ; prix : exil et défausse. Autre famille que C ANT054 (invocations), autre crochet (C : `elan`). Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, riposte 4, dégâts ciblés 4, soin des alliés 4, exil 3, garde du héros 2, pioche 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 6 cartes (défausse 3, exil 3).

```json
{"fiche":"ASS153","nom":"Le Rūnanga de Rua-Kōiwi",
 "recit":"Tama et Hine, qui tenaient ensemble Rua-Kōiwi, ne s'accordaient pas sur l'endroit où coucher les morts. Tama voulait la grotte de cristal, avec les os des ancêtres ; Hine voulait le lagon, où le corail pousse sur ce qu'on lui donne. Le rūnanga décida d'un pari : chacun coucherait un mort à sa façon, et l'on verrait lequel serait le mieux gardé. La saison suivante, les os de la grotte étaient propres et froids. Le corail avait si bien couvert l'autre mort qu'on ne le trouvait plus. Le rūnanga discute encore de qui a gagné.",
 "pal":["Les galeries de cristal sont tapissées d'os rangés jusqu'à la voûte ; plus un vivant n'y entre, et le lagon s'est retiré, mort et blanc.","On porte les morts à la grotte en procession ; les os blanchissent sur des lits de cristal, et le froid monte des galeries jusqu'au village.","Une grotte de cristal ouverte sur un lagon ; d'un côté les os des ancêtres sur leurs lits, de l'autre le corail, et le rūnanga assis au milieu.","Le corail remonte du lagon dans la grotte ; il couvre les marches, les lits de pierre, et des formes qu'on ne reconnaît plus.","La grotte est devenue récif : le corail ferme les galeries, pousse dans l'air comme dans l'eau, et l'on n'y trouve plus aucun mort."],
 "pm":"Os","pp":"Corail"}
```

```json
[
{"id":"ASS153-moins-1","zone":"ASS153","pole":"-","palier":1,"nom":"La Loi des os propres","cout":1,"cible":1,
 "effet":"Loi : la cible hésite ; vos alliés gagnent 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["hesite","cible"],["garde","allies",4],["prixPV",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Contrôle","Garde","Prix"],
 "ambiance":"Les os des ancêtres sont lavés au lagon, puis séchés sur le cristal avant d'être couchés.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ASS153-moins-2","zone":"ASS153","pole":"-","palier":2,"nom":"Le Lit de la grotte","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis la cible hésite ; le héros se soigne de 3. Prix : le héros perd 1 PV.",
 "ops":[["si","vol",[["deg","cible",10]]],["hesite","cible"],["soin","heros",3],["prixPV",1]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Soin","Condition","Prix"],
 "ambiance":"Chaque mort a son lit de cristal, taillé à sa mesure, et le froid de la grotte le garde.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS153-moins-3","zone":"ASS153","pole":"-","palier":3,"nom":"La Loi du cristal froid","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis hésitent ; vos alliés gagnent 10 de garde ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["hesite","tous"],["garde","allies",10],["pioche",1],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Contrôle","Garde","Pioche","Exil","Prix"],
 "ambiance":"Le rūnanga a voté que nul ne parlerait fort dans la grotte, pour ne pas déranger le froid.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS153-moins-4","zone":"ASS153","pole":"-","palier":4,"nom":"Tama","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 14 dégâts à la cible. Puis la cible hésite ; riposte 5 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["deg","cible",14]]],["hesite","cible"],["riposte",5],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Tama a couché son mort dans le cristal, les bras le long du corps, et n'est jamais revenu voir.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ASS153-moins-5","zone":"ASS153","pole":"-","palier":5,"nom":"Les Os des ancêtres","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; les 2 premiers ennemis hésitent ; reprenez en main la dernière carte de votre défausse ; le héros gagne 8 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","cible",12],["hesite",2],["recup"],["garde","heros",8],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Garde","Récupération","Exil","Prix"],
 "ambiance":"Les crânes des ancêtres regardent l'entrée de la grotte ; les vivants entrent à reculons.",
 "budget":"27,4 / 32 (−14 %)"},
{"id":"ASS153-moins-6","zone":"ASS153","pole":"-","palier":6,"nom":"La Loi du pari","cout":2,"cible":1,
 "effet":"Loi : si la cible vole par-dessus, 6 dégâts à tous les ennemis. Puis tous les ennemis hésitent ; vos alliés gagnent 12 de garde ; le héros se soigne de 4. Prix : le héros perd 3 PV.",
 "ops":[["si","vol",[["deg","tous",6]]],["hesite","tous"],["garde","allies",12],["soin","heros",4],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Contrôle","Garde","Soin","Condition","Prix"],
 "ambiance":"Le rūnanga a fixé l'enjeu du pari avant de le lancer, puis a oublié de dire qui en jugerait.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ASS153-moins7","zone":"ASS153","pole":"-","palier":7,"nom":"Les Os intacts","cout":2,"cible":1,
 "effet":"Les morts ne bougent plus. 14 à la cible ; les 3 premiers hésitent ; alliés +12 de garde ; riposte 5. Pose Givre. Si Racine (consommée) : la cible hésite ; 16 à la cible ; alliés +8 de garde. Prix : héros −3 PV.",
 "ops":[["deg","cible",14],["hesite",3],["garde","allies",12],["riposte",5],["pose","Givre"],["reveil","Racine",true,[["hesite","cible"],["deg","cible",16],["garde","allies",8]]],["prixPV",3]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Dégâts","Contrôle","Riposte","Garde","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Les os rangés montent jusqu'à la voûte de cristal ; plus un vivant ne passe l'entrée.",
 "budget":"47,4 sans combo ; réveil +30,6 (65 %)"},
{"id":"ASS153-plus-1","zone":"ASS153","pole":"+","palier":1,"nom":"La Loi du corail nourri","cout":1,"cible":1,
 "effet":"Loi : la cible est marquée : +2 par coup reçu ; riposte 2 jusqu'à votre prochain tour.",
 "ops":[["vulnerable","cible",2],["riposte",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Marque","Riposte"],
 "ambiance":"Le corail pousse sur ce qu'on lui donne : une rame, une ancre, un panier, un pied qui traîne.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS153-plus-2","zone":"ASS153","pole":"+","palier":2,"nom":"Le Lagon de Hine","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; vos alliés se soignent de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["deg","cible",10]]],["vulnerable","cible",2],["soin","allies",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Marque","Soin","Condition","Prix"],
 "ambiance":"Hine nage chaque matin au-dessus de son mort, et compte les branches qui ont poussé dessus.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS153-plus-3","zone":"ASS153","pole":"+","palier":3,"nom":"La Loi du mort couché dans l'eau","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis sont marqués : +1 par coup reçu ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 8 de garde ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["vulnerable","tous",1],["riposte",4],["garde","heros",8],["pioche",1],["exil"]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Marque","Riposte","Garde","Pioche","Exil","Prix"],
 "ambiance":"Le rūnanga a voté qu'on coucherait le mort de Hine au fond, lesté de pierres de cristal.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS153-plus-4","zone":"ASS153","pole":"+","palier":4,"nom":"Hine","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 14 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; vos alliés se soignent de 6 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["deg","cible",14]]],["vulnerable","cible",3],["soin","allies",6],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Hine ne dit jamais qu'elle a gagné ; elle dit seulement que son mort est bien gardé.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS153-plus-5","zone":"ASS153","pole":"+","palier":5,"nom":"Le Récif qui couvre","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; la cible est marquée : +3 par coup reçu ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 4 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","cible",14],["vulnerable","cible",3],["riposte",4],["garde","heros",4],["exil"]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Marque","Riposte","Garde","Exil","Prix"],
 "ambiance":"Le corail a couvert les pierres du lest, puis la forme du mort, puis l'endroit où elle était.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"ASS153-plus-6","zone":"ASS153","pole":"+","palier":6,"nom":"La Loi du corail qui grandit","cout":2,"cible":1,
 "effet":"Loi : si la cible s'apprête à piétiner, tous les ennemis sont marqués : +1 par coup reçu. Puis la cible est marquée : +3 par coup reçu ; 5 dégâts à tous les ennemis ; vos alliés se soignent de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["vulnerable","tous",1]]],["vulnerable","cible",3],["deg","tous",5],["soin","allies",8],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Marque","Soin","Condition","Prix"],
 "ambiance":"Le rūnanga a interdit de couper le corail du lagon ; il monte maintenant les marches de la grotte.",
 "budget":"32,3 / 36 (−10 %)"},
{"id":"ASS153-plus7","zone":"ASS153","pole":"+","palier":7,"nom":"Le Mort introuvable","cout":2,"cible":1,
 "effet":"Le corail garde le mort. 16 à la cible ; tous marqués (+2) ; riposte 6 ; alliés soignés de 6. Pose Sceau. Si Abîme (consommée) : cible marquée (+3) ; 12 à la cible ; alliés soignés de 6. Prix : cette carte s'exile.",
 "ops":[["deg","cible",16],["vulnerable","tous",2],["riposte",6],["soin","allies",6],["pose","Sceau"],["reveil","Abîme",true,[["vulnerable","cible",3],["deg","cible",12],["soin","allies",6]]],["exil"]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Dégâts","Marque","Riposte","Soin","Exil","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"La grotte est devenue récif ; le corail ferme les galeries, et l'on ne trouve plus aucun mort.",
 "budget":"47,2 sans combo ; réveil +30 (64 %)"}
]
```

---

## 5. Le Kaisho d'Ukigusa (ASS025) — Assemblée · Marais · Sève · Japonaise féodale

Forme du récit : **document, la supplique** des villageois au magistrat, et sa réponse. Recette du −7 : la foule (tout le village qui dort debout dans la boue) ; du +7 : l'ordre retrouvé (chacun son rêve, les maisons qui flottent).

**Cauchemar (−)** : le baku peint → le rêve du grand-père → le marais asséché → les enfants qui crient → le rêve qui reste → la loi du domaine → le Kaisho des dormeurs. Fil mécanique : perce-garde, Lois (le rêve qui passe les volets et les amulettes), garde du héros et hésitation en appoint, crochet « la cible a de la garde », lu avant la garde brisée et sans garde ennemie en prix ; prix : PV et exil. Autre famille que C ASS167 (garde du héros), autre crochet (C : `hesiteAvant`). Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, garde du héros 4, dégâts ciblés 4, hésitation 4, dégâts à tous 3, pioche 2, soin du héros 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (PV 6, exil 1).

**Rêve (+)** : les rêves rendus → la supplique → l'eau rendue → le baku → les rizières du domaine → les marais rendus → le Marais qui rêve. Fil mécanique : brûlure, Lois (la fièvre des rêves qui retournent au marais), pioche et garde des alliés en appoint, crochet « un ennemi s'apprête à se soigner » ; prix : défausse et PV. Autre famille que C ASS167 (affaiblissement), autre crochet (C : `hesite`). Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 7, pioche 4, dégâts ciblés 4, garde des alliés 4, soin du héros 2 ; crochet « un ennemi s'apprête à se soigner » sur 3 ; prix sur 6 cartes (défausse 4, PV 2).

```json
{"fiche":"ASS025","nom":"Le Kaisho d'Ukigusa",
 "recit":"Supplique des villageois d'Ukigusa au magistrat du domaine. Depuis que l'on a asséché le bas du marais pour les rizières, les rêves des dormeurs ne s'en vont plus nulle part : ils restent dans les maisons, comme l'eau dans un pot. Les enfants rêvent les rêves de leurs grands-parents, et les vieux crient la nuit. Nous demandons qu'un baku soit envoyé pour les manger, ou que l'on rende l'eau au marais. Réponse du magistrat : un baku a été peint sur la porte du kaisho. Le domaine garde les rizières.",
 "pal":["Tout le village dort debout dans la boue des rizières, les yeux ouverts ; des cris montent des maisons vides, et personne ne se réveille.","Les volets restent clos en plein jour ; on accroche des amulettes aux portes, et le baku peint s'écaille sur le kaisho.","Un village de chaume entre les roseaux et les rizières neuves, un kaisho au toit d'écorce, et le bas du marais qui sèche au soleil.","L'eau revient dans les canaux ; des lucioles flottent sur les roseaux, et les dormeurs sourient dans des rêves qui ne sont qu'à eux.","Le marais a repris les rizières ; des maisons flottent sur l'eau calme, et chacun y dort le rêve d'un autre sans en souffrir."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ASS025-moins-1","zone":"ASS025","pole":"-","palier":1,"nom":"La Loi du baku peint","cout":1,"cible":1,
 "effet":"Loi : la garde de la cible tombe à 0 ; riposte 2 jusqu'à votre prochain tour ; le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["riposte",2],["garde","heros",4],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Perce-garde","Riposte","Garde","Prix"],
 "ambiance":"Le magistrat a fait peindre un baku sur la porte du kaisho ; il a le museau d'un tapir.",
 "budget":"9,2 / 10 (−8 %)"},
{"id":"ASS025-moins-2","zone":"ASS025","pole":"-","palier":2,"nom":"Le Rêve du grand-père","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis ces coups ignorent la garde ; la cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["ignoreGarde"],["hesite","cible"],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Perce-garde","Contrôle","Condition","Prix"],
 "ambiance":"Le fils du meunier rêve d'une guerre qu'il n'a pas faite, et en chante les chansons.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS025-moins-3","zone":"ASS025","pole":"-","palier":3,"nom":"La Loi du marais asséché","cout":2,"cible":1,
 "effet":"Loi : toute garde ennemie tombe à 0 ; 4 dégâts à tous les ennemis ; la cible hésite ; le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["briseGarde","tous"],["deg","tous",4],["hesite","cible"],["garde","heros",6],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Perce-garde","Contrôle","Garde","Prix"],
 "ambiance":"Le domaine a fait creuser des fossés dans le bas du marais ; l'eau est partie, les rêves sont restés.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS025-moins-4","zone":"ASS025","pole":"-","palier":4,"nom":"Les Enfants qui crient","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Puis la garde de la cible tombe à 0 ; le héros se soigne de 13 ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["briseGarde","cible"],["soin","heros",13],["pioche",1],["exil"]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Perce-garde","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"Les enfants crient la nuit avec la voix de leurs grands-parents, et les grands-parents se taisent.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ASS025-moins-5","zone":"ASS025","pole":"-","palier":5,"nom":"Le Rêve qui reste","cout":2,"cible":1,
 "effet":"17 dégâts à la cible ; ces coups ignorent la garde ; la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",17],["ignoreGarde"],["vulnerable","cible",2],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Marque","Perce-garde","Pioche","Prix"],
 "ambiance":"Les rêves restent dans les maisons comme l'eau dans un pot ; les amulettes n'y changent rien.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS025-moins-6","zone":"ASS025","pole":"-","palier":6,"nom":"La Loi du domaine","cout":2,"cible":1,
 "effet":"Loi : si la cible a de la garde, 6 dégâts à tous les ennemis. Puis toute garde ennemie tombe à 0 ; tous les ennemis hésitent ; le héros gagne 15 de garde. Prix : le héros perd 3 PV.",
 "ops":[["si","cibleGarde",[["deg","tous",6]]],["briseGarde","tous"],["hesite","tous"],["garde","heros",15],["prixPV",3]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Perce-garde","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Le domaine garde les rizières : c'est écrit au bas de la supplique, d'une écriture très soignée.",
 "budget":"31,2 / 36 (−13 %)"},
{"id":"ASS025-moins7","zone":"ASS025","pole":"-","palier":7,"nom":"Le Kaisho des dormeurs","cout":2,"cible":1,
 "effet":"Le village rêve debout. Toute garde ennemie à 0 ; 7 à tous ; la cible hésite ; héros +10 de garde ; soin du héros 14. Pose Abîme. Si Sang (consommée) : 14 à la cible ; soin du héros 10 ; la cible hésite. Prix : héros −3 PV.",
 "ops":[["briseGarde","tous"],["deg","tous",7],["hesite","cible"],["garde","heros",10],["soin","heros",14],["pose","Abîme"],["reveil","Sang",true,[["deg","cible",14],["soin","heros",10],["hesite","cible"]]],["prixPV",3]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Perce-garde","Contrôle","Garde","Soin","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Le village dort debout dans la boue des rizières, les yeux ouverts, et personne ne se réveille.",
 "budget":"46 sans combo ; réveil +29 (63 %)"},
{"id":"ASS025-plus-1","zone":"ASS025","pole":"+","palier":1,"nom":"La Loi des rêves rendus","cout":1,"cible":1,
 "effet":"Loi : la cible brûle : 2 par tour pendant 3 tours ; piochez 1 carte.",
 "ops":[["brulure","cible",2,3],["pioche",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Brûlure","Pioche"],
 "ambiance":"Le kaisho a voté que chacun rendrait au marais les rêves qui ne sont pas les siens.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS025-plus-2","zone":"ASS025","pole":"+","palier":2,"nom":"La Supplique","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Puis la cible brûle : 2 par tour pendant 3 tours ; vos alliés gagnent 3 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["brulure","cible",2,3],["garde","allies",3],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Brûlure","Garde","Condition","Prix"],
 "ambiance":"La supplique est écrite au pinceau, très proprement, par le seul villageois qui dort encore bien.",
 "budget":"11,6 / 12,5 (−7 %)"},
{"id":"ASS025-plus-3","zone":"ASS025","pole":"+","palier":3,"nom":"La Loi de l'eau rendue","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis brûlent : 2 par tour pendant 3 tours ; vos alliés gagnent 10 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","tous",2,3],["garde","allies",10],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Brûlure","Garde","Prix"],
 "ambiance":"On a rouvert les fossés en secret, la nuit ; l'eau revient au marais, et les rêves la suivent.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ASS025-plus-4","zone":"ASS025","pole":"+","palier":4,"nom":"Le Baku","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 14 dégâts à la cible. Puis la cible brûle : 3 par tour pendant 4 tours ; piochez 1 carte ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",14]]],["brulure","cible",3,4],["pioche",1],["soin","heros",6],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Brûlure","Soin","Pioche","Condition","Prix"],
 "ambiance":"Un vrai baku est venu manger les rêves ; il a mangé aussi ceux qui étaient bons, sans distinction.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS025-plus-5","zone":"ASS025","pole":"+","palier":5,"nom":"Les Rizières du domaine","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; la cible brûle : 4 par tour pendant 3 tours ; +1 mana de Sève ; vos alliés gagnent 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",14],["brulure","cible",4,3],["mana","Sève",1],["garde","allies",4],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Brûlure","Garde","Mana","Prix"],
 "ambiance":"Les rizières du domaine boivent l'eau rendue ; le riz y pousse fiévreux, trop vert, trop vite.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ASS025-plus-6","zone":"ASS025","pole":"+","palier":6,"nom":"La Loi des marais rendus","cout":2,"cible":0,
 "effet":"Loi : si un ennemi s'apprête à se soigner, tous les ennemis hésitent. Puis tous les ennemis brûlent : 2 par tour pendant 4 tours ; piochez 2 cartes ; le héros se soigne de 8. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["hesite","tous"]]],["brulure","tous",2,4],["pioche",2],["soin","heros",8],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Brûlure","Contrôle","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le kaisho a voté que le marais rêverait pour tous ; les lucioles flottent au-dessus des roseaux.",
 "budget":"36,1 / 36 (+0 %)"},
{"id":"ASS025-plus7","zone":"ASS025","pole":"+","palier":7,"nom":"Le Marais qui rêve","cout":2,"cible":1,
 "effet":"Le marais rêve pour tous. 12 à la cible ; tous brûlent (3 par tour, 4 tours) ; piochez 1 ; alliés +6 de garde. Pose Braise. Si Givre (consommée) : la cible brûle (4 par tour, 3 tours) ; 12 à la cible ; alliés +4 de garde. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",12],["brulure","tous",3,4],["pioche",1],["garde","allies",6],["pose","Braise"],["reveil","Givre",true,[["brulure","cible",4,3],["deg","cible",12],["garde","allies",4]]],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Brûlure","Garde","Pioche","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"Le marais a repris les rizières ; des maisons flottent, et chacun dort le rêve d'un autre.",
 "budget":"46,6 sans combo ; réveil +28,8 (62 %)"}
]
```

---

## 6. La Djadjat de Per-Ash (ASS054) — Assemblée · Forêt boréale · Glace · Égyptienne

Forme du récit : **document, le serment** des scribes, et ce qu'il couvre. Recette du −7 : l'ordre (les souches alignées et scellées à perte de vue) ; du +7 : le silence (la forêt qui reprend le temple, plus un bruit de hache).

**Corruption (−)** : le bois sacré → la bûche comptée → la résine → le juge Nebamun → le pot du temple → le serment pur → la Forêt qui recule. Fil mécanique : soin du héros, Lois (le juge qui s'engraisse), récupération et dégâts à tous en appoint, crochet « la cible prend son élan » ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, dégâts ciblés 4, récupération 3, dégâts à tous 3, garde du héros 2, riposte 2, marque 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 7 cartes (garde ennemie 5, PV 2).

**Pureté (+)** : l'eau lustrale → le cèdre debout → le pot scellé → le fils de Nebamun → le serment sans faute → la voix égale → le Serment pur. Fil mécanique : affaiblissement, Lois (la parole nette qui désarme), pioche et hésitation en appoint, crochet « la cible vole par-dessus » ; prix : exil et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, pioche 4, dégâts ciblés 4, hésitation 4, soin du héros 2, riposte 2, exil 2, garde du héros 2 ; crochet « la cible vole par-dessus » sur 3 ; prix sur 6 cartes (défausse 4, exil 2).

```json
{"fiche":"ASS054","nom":"La Djadjat de Per-Ash",
 "recit":"Serment des scribes de la djadjat de Per-Ash, prononcé chaque année devant les cèdres : je n'ai ni vendu le bois sacré, ni compté une bûche pour une autre, ni laissé la résine couler hors du pot du temple. Le juge Nebamun l'a prononcé toute sa vie sans changer un mot, d'une voix égale, et sa forêt a reculé jusqu'à la colline. Son fils le prononce à son tour, avec la même voix. Les marchands de bois assistent au serment, et applaudissent. Le serment est pur ; c'est la forêt qui ne l'a pas entendu.",
 "pal":["Des souches alignées à perte de vue, chacune marquée du sceau du temple ; la neige tombe sur un pays sans arbre, et la djadjat siège dehors.","Les traîneaux de bois descendent la nuit vers le fleuve ; des cèdres portent le sceau du temple, et ne sont plus là le lendemain.","Une forêt de cèdres et de pins sous la neige, un temple de bois au bord du fleuve gelé, et des scribes qui jurent devant les troncs.","Les coupes se referment ; les jeunes cèdres montent serrés, la résine coule dans les pots du temple, et l'on compte chaque bûche à voix haute.","La forêt a repris le temple et la berge ; entre les troncs immenses, plus un bruit de hache, et les scribes jurent à voix basse."],
 "pm":"Corruption","pp":"Pureté"}
```

```json
[
{"id":"ASS054-moins-1","zone":"ASS054","pole":"-","palier":1,"nom":"La Loi du bois sacré","cout":1,"cible":0,
 "effet":"Loi : le héros se soigne de 8 ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","heros",8],["recup"],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Soin","Récupération","Prix"],
 "ambiance":"Le bois sacré porte le sceau du temple ; le sceau, lui, se vend à part, et plus cher.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS054-moins-2","zone":"ASS054","pole":"-","palier":2,"nom":"La Bûche comptée","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Puis le héros se soigne de 6 ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["deg","cible",10]]],["soin","heros",6],["recup"],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Soin","Récupération","Condition","Prix"],
 "ambiance":"Une bûche pour le temple, une bûche pour le scribe : le registre n'en connaît qu'une.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS054-moins-3","zone":"ASS054","pole":"-","palier":3,"nom":"La Loi de la résine","cout":2,"cible":0,
 "effet":"Loi : le héros se soigne de 10 ; 4 dégâts à tous les ennemis ; reprenez en main la dernière carte de votre défausse. Prix : le héros perd 2 PV.",
 "ops":[["soin","heros",10],["deg","tous",4],["recup"],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Soin","Récupération","Prix"],
 "ambiance":"La résine coule des cèdres blessés ; une part va au pot du temple, l'autre au fleuve.",
 "budget":"20,8 / 24 (−13 %)"},
{"id":"ASS054-moins-4","zone":"ASS054","pole":"-","palier":4,"nom":"Le Juge Nebamun","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 14 dégâts à la cible. Puis le héros se soigne de 12 ; piochez 1 carte ; le héros gagne 6 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["deg","cible",14]]],["soin","heros",12],["pioche",1],["garde","heros",6],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Nebamun juge assis sur un siège de cèdre, enveloppé de fourrures, et ne prend jamais froid.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"ASS054-moins-5","zone":"ASS054","pole":"-","palier":5,"nom":"Le Pot du temple","cout":2,"cible":1,
 "effet":"13 dégâts à la cible ; le héros se soigne de 17. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",13],["soin","heros",17],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Soin","Prix"],
 "ambiance":"Le pot du temple est toujours plein à la fin de l'hiver ; personne ne demande de quoi.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS054-moins-6","zone":"ASS054","pole":"-","palier":6,"nom":"La Loi du serment pur","cout":2,"cible":1,
 "effet":"Loi : si la cible prend son élan, 6 dégâts à tous les ennemis. Puis le héros se soigne de 16 ; riposte 4 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["deg","tous",6]]],["soin","heros",16],["riposte",4],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Riposte","Soin","Condition","Prix"],
 "ambiance":"Le serment se prononce d'une voix égale, sans changer un mot, devant les marchands qui applaudissent.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ASS054-moins7","zone":"ASS054","pole":"-","palier":7,"nom":"La Forêt qui recule","cout":2,"cible":1,
 "effet":"Le juge boit la forêt. Soin du héros 20 ; 6 à tous ; cible marquée (+2) ; riposte 4. Pose Racine. Si Sceau (consommée) : soin du héros 10 ; 14 à la cible ; héros +6 de garde. Prix : ennemis +1 de garde.",
 "ops":[["soin","heros",20],["deg","tous",6],["vulnerable","cible",2],["riposte",4],["pose","Racine"],["reveil","Sceau",true,[["soin","heros",10],["deg","cible",14],["garde","heros",6]]],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Marque","Riposte","Garde","Soin","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Des souches scellées à perte de vue sous la neige ; la djadjat siège dehors, faute de toit.",
 "budget":"45,2 sans combo ; réveil +28,8 (64 %)"},
{"id":"ASS054-plus-1","zone":"ASS054","pole":"+","palier":1,"nom":"La Loi de l'eau lustrale","cout":1,"cible":1,
 "effet":"Loi : l'attaque de la cible baisse de 2 ; piochez 1 carte.",
 "ops":[["affaiblit","cible",2],["pioche",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Affaiblissement","Pioche"],
 "ambiance":"Avant le serment, le scribe se lave les mains au fleuve, même quand il faut briser la glace.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS054-plus-2","zone":"ASS054","pole":"+","palier":2,"nom":"Le Cèdre debout","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",10]]],["affaiblit","cible",2],["soin","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Un vieux cèdre est resté debout au milieu des souches ; personne n'a osé le marquer du sceau.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS054-plus-3","zone":"ASS054","pole":"+","palier":3,"nom":"La Loi du pot scellé","cout":2,"cible":0,
 "effet":"Loi : l'attaque de chaque ennemi baisse de 2 ; piochez 1 carte ; riposte 4 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["affaiblit","tous",2],["pioche",1],["riposte",4],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Affaiblissement","Riposte","Pioche","Exil","Prix"],
 "ambiance":"La djadjat a voté que le pot de résine serait scellé à la cire, et ouvert devant tous.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ASS054-plus-4","zone":"ASS054","pole":"+","palier":4,"nom":"Le Fils de Nebamun","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 14 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; la cible hésite ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",14]]],["affaiblit","cible",3],["hesite","cible"],["soin","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Affaiblissement","Contrôle","Soin","Condition","Prix"],
 "ambiance":"Le fils prononce le serment avec la voix de son père ; il a appris aussi à compter les bûches.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ASS054-plus-5","zone":"ASS054","pole":"+","palier":5,"nom":"Le Serment sans faute","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; l'attaque de la cible baisse de 3 ; piochez 1 carte ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",14],["affaiblit","cible",3],["pioche",1],["hesite","cible"],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Affaiblissement","Contrôle","Pioche","Prix"],
 "ambiance":"Pas un mot ne change d'une année à l'autre ; les scribes le savent par cœur, les cèdres aussi.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS054-plus-6","zone":"ASS054","pole":"+","palier":6,"nom":"La Loi de la voix égale","cout":2,"cible":1,
 "effet":"Loi : si la cible vole par-dessus, l'attaque de chaque ennemi baisse de 1. Puis l'attaque de la cible baisse de 4 ; tous les ennemis hésitent ; le héros gagne 10 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","vol",[["affaiblit","tous",1]]],["affaiblit","cible",4],["hesite","tous"],["garde","heros",10],["riposte",2],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Affaiblissement","Contrôle","Riposte","Garde","Condition","Exil","Prix"],
 "ambiance":"La djadjat a voté qu'on jurerait désormais devant la forêt, et non plus devant les marchands.",
 "budget":"33,3 / 36 (−8 %)"},
{"id":"ASS054-plus7","zone":"ASS054","pole":"+","palier":7,"nom":"Le Serment pur","cout":2,"cible":1,
 "effet":"Le serment tient seul debout. 14 à la cible ; chaque ennemi −2 d'attaque ; la cible hésite ; héros +16 de garde ; piochez 1. Pose Sang. Si Abîme (consommée) : cible −3 d'attaque ; 14 à la cible ; héros +8 de garde. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",14],["affaiblit","tous",2],["hesite","cible"],["garde","heros",16],["pioche",1],["pose","Sang"],["reveil","Abîme",true,[["affaiblit","cible",3],["deg","cible",14],["garde","heros",8]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Affaiblissement","Contrôle","Garde","Pioche","Combo","Pose Sang","Réveil Abîme","Prix"],
 "ambiance":"La forêt a repris le temple ; entre les troncs immenses, plus un bruit de hache, et l'on jure bas.",
 "budget":"46 sans combo ; réveil +29,4 (64 %)"}
]
```

---

## 7. Le Silention d'Homichlè (ASS140) — Assemblée · Récif · Eau · Byzantine

Forme du récit : la querelle de factions (Bleus et Verts, le feu contre la brume, et le logothète qui tranche pour qui paie). Recette du −7 : le vide (la brume a mangé l'île, des cloches que personne ne sonne) ; du +7 : la démesure (le récif qui flambe comme un phare, plus aucun endroit où se cacher).

**Brume (−)** : la brume qui garde → les Verts → les nuits sans lune → le pirate dans la brume → le récif caché → le feu éteint → l'Île effacée. Fil mécanique : mana d'Eau, Lois (la brume qu'on vend aux Verts), perce-garde et riposte en appoint, crochet « un ennemi s'apprête à se soigner » ; prix : PV et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, riposte 4, dégâts ciblés 4, perce-garde 4, pioche 2, soin du héros 2, garde du héros 2, hésitation 2, marque 2 ; crochet « un ennemi s'apprête à se soigner » sur 3 ; prix sur 6 cartes (PV 4, soin ennemi 2).

**Clarté (+)** : le feu sur le récif → les Bleus → le bois payé → le logothète Kosmas → les navires marchands → le calendrier → le Feu de Kosmas. Fil mécanique : soin des alliés, Lois (le port qui s'anime), exil en appoint, crochet « la cible s'apprête à piétiner » ; prix : exil et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, dégâts ciblés 4, exil 3, mana 2, dégâts à tous 2, pioche 2, hésitation 2, garde du héros 2, riposte 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 6 cartes (PV 3, exil 3).

```json
{"fiche":"ASS140","nom":"Le Silention d'Homichlè",
 "recit":"Au silention d'Homichlè, les Bleus voulaient allumer un feu sur le récif pour percer la brume ; les Verts disaient que la brume gardait l'île des pirates mieux qu'une muraille. Le logothète Kosmas trancha pour le feu, parce que les Bleus avaient payé le bois. Les navires marchands vinrent en nombre, et les pirates aussi, qui voyaient le feu de très loin. Les Verts payèrent à leur tour pour qu'on l'éteigne. Depuis, on allume le feu quand les Bleus paient, on l'éteint quand les Verts paient, et les pirates ont appris à lire le calendrier.",
 "pal":["La brume a mangé l'île ; on ne voit plus ni le récif ni la mer, seulement des cloches qui sonnent quelque part, et que personne ne sonne.","Le brouillard colle aux voiles et aux murs ; les pêcheurs rentrent à la corde, et les Verts comptent à voix basse les navires perdus.","Une île basse cernée de récifs, un phare éteint sur un rocher, une salle de marbre où Bleus et Verts siègent face à face.","Un feu brûle sur le récif ; les navires entrent par la passe, les quais s'animent, et l'on voit nettement les voiles des pirates au large.","Le récif flambe nuit et jour comme un phare immense ; la mer est claire jusqu'au fond, et l'île n'a plus aucun endroit où se cacher."],
 "pm":"Brume","pp":"Clarté"}
```

```json
[
{"id":"ASS140-moins-1","zone":"ASS140","pole":"-","palier":1,"nom":"La Loi de la brume qui garde","cout":1,"cible":0,
 "effet":"Loi : +1 mana d'Eau ; riposte 2 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["mana","Eau",1],["riposte",2],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Riposte","Pioche","Mana","Prix"],
 "ambiance":"Le silention a voté que la brume était une muraille, et qu'on ne percerait pas une muraille.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS140-moins-2","zone":"ASS140","pole":"-","palier":2,"nom":"Les Verts","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Puis +1 mana d'Eau ; le héros se soigne de 4.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["mana","Eau",1],["soin","heros",4]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Soin","Mana","Condition"],
 "ambiance":"Les Verts siègent du côté de la mer, en manteaux mouillés, et parlent bas pour ne pas chasser la brume.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS140-moins-3","zone":"ASS140","pole":"-","palier":3,"nom":"La Loi des nuits sans lune","cout":2,"cible":0,
 "effet":"Loi : +2 mana d'Eau ; toute garde ennemie tombe à 0 ; le héros gagne 8 de garde ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Eau",2],["briseGarde","tous"],["garde","heros",8],["pioche",1],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Perce-garde","Garde","Pioche","Mana","Prix"],
 "ambiance":"Le silention a voté que le feu resterait éteint les nuits sans lune ; les Verts ont payé la séance.",
 "budget":"21 / 24 (−12 %)"},
{"id":"ASS140-moins-4","zone":"ASS140","pole":"-","palier":4,"nom":"Le Pirate dans la brume","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 14 dégâts à la cible. Puis +2 mana d'Eau ; ces coups ignorent la garde ; riposte 4 jusqu'à votre prochain tour ; le héros se soigne de 4. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",14]]],["mana","Eau",2],["ignoreGarde"],["riposte",4],["soin","heros",4],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Perce-garde","Riposte","Soin","Mana","Condition","Prix"],
 "ambiance":"Le pirate rame sans bruit entre les récifs ; il connaît la passe mieux que les pilotes du port.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS140-moins-5","zone":"ASS140","pole":"-","palier":5,"nom":"Le Récif caché","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; +2 mana d'Eau ; la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",18],["mana","Eau",2],["briseGarde","cible"],["affaiblit","cible",1],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Affaiblissement","Perce-garde","Mana","Prix"],
 "ambiance":"Sous la brume, le récif attend les coques ; les épaves nourrissent l'île mieux que le commerce.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS140-moins-6","zone":"ASS140","pole":"-","palier":6,"nom":"La Loi du feu éteint","cout":2,"cible":1,
 "effet":"Loi : si un ennemi s'apprête à se soigner, tous les ennemis hésitent. Puis +2 mana d'Eau ; le héros gagne 14 de garde ; riposte 4 jusqu'à votre prochain tour ; la cible est marquée : +1 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["hesite","tous"]]],["mana","Eau",2],["garde","heros",14],["riposte",4],["vulnerable","cible",1],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Marque","Contrôle","Riposte","Garde","Mana","Condition","Prix"],
 "ambiance":"Le logothète a fait éteindre le feu pour les Verts, puis payer les Bleus pour le rallumer.",
 "budget":"30,7 / 36 (−15 %)"},
{"id":"ASS140-moins7","zone":"ASS140","pole":"-","palier":7,"nom":"L'Île effacée","cout":2,"cible":1,
 "effet":"La brume cache l'île. 18 à la cible ; +2 mana d'Eau ; toute garde ennemie à 0 ; riposte 8 ; la cible hésite. Pose Racine. Si Sang (consommée) : 18 à la cible ; cible marquée (+3) ; alliés soignés de 2. Prix : héros −2 PV.",
 "ops":[["deg","cible",18],["mana","Eau",2],["briseGarde","tous"],["riposte",8],["hesite","cible"],["pose","Racine"],["reveil","Sang",true,[["deg","cible",18],["vulnerable","cible",3],["soin","allies",2]]],["prixPV",2]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Marque","Perce-garde","Contrôle","Riposte","Soin","Mana","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"La brume a mangé l'île ; on entend des cloches quelque part, et personne ne les sonne.",
 "budget":"49,6 sans combo ; réveil +30 (60 %)"},
{"id":"ASS140-plus-1","zone":"ASS140","pole":"+","palier":1,"nom":"La Loi du feu sur le récif","cout":1,"cible":1,
 "effet":"Loi : vos alliés se soignent de 4 ; l'attaque de la cible baisse de 1.",
 "ops":[["soin","allies",4],["affaiblit","cible",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Affaiblissement","Soin"],
 "ambiance":"Le silention a voté le feu sur le récif ; les Bleus ont porté le bois eux-mêmes, en chantant.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS140-plus-2","zone":"ASS140","pole":"+","palier":2,"nom":"Les Bleus","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; +1 mana d'Eau. Prix : le héros perd 1 PV.",
 "ops":[["si","pietine",[["deg","cible",10]]],["soin","allies",4],["mana","Eau",1],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Les Bleus siègent du côté du port, en manteaux secs, et votent tout ce qui fait venir les navires.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS140-plus-3","zone":"ASS140","pole":"+","palier":3,"nom":"La Loi du bois payé","cout":2,"cible":0,
 "effet":"Loi : vos alliés se soignent de 8 ; 4 dégâts à tous les ennemis ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["soin","allies",8],["deg","tous",4],["pioche",1],["exil"]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Soin","Pioche","Exil","Prix"],
 "ambiance":"Le bois du feu est payé d'avance par les Bleus ; le logothète tient le compte et la clé.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ASS140-plus-4","zone":"ASS140","pole":"+","palier":4,"nom":"Le Logothète Kosmas","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 14 dégâts à la cible. Puis vos alliés se soignent de 8 ; la cible hésite ; le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["deg","cible",14]]],["soin","allies",8],["hesite","cible"],["garde","heros",6],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Contrôle","Garde","Soin","Condition","Prix"],
 "ambiance":"Kosmas tranche toujours pour la faction qui a payé, et l'écrit dans un latin très clair.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"ASS140-plus-5","zone":"ASS140","pole":"+","palier":5,"nom":"Les Navires marchands","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; vos alliés se soignent de 11 ; +1 mana d'Eau. Prix : cette carte s'exile.",
 "ops":[["deg","cible",12],["soin","allies",11],["mana","Eau",1],["exil"]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Soin","Mana","Exil","Prix"],
 "ambiance":"Les navires entrent par la passe éclairée, chargés d'huile et de soie, et repartent chargés de sel.",
 "budget":"28,5 / 32 (−11 %)"},
{"id":"ASS140-plus-6","zone":"ASS140","pole":"+","palier":6,"nom":"La Loi du calendrier","cout":2,"cible":1,
 "effet":"Loi : si la cible s'apprête à piétiner, 6 dégâts à tous les ennemis. Puis vos alliés se soignent de 12 ; riposte 4 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["deg","tous",6]]],["soin","allies",12],["riposte",4],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Riposte","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le silention affiche le calendrier des feux sur la porte du port ; les pirates savent lire.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ASS140-plus7","zone":"ASS140","pole":"+","palier":7,"nom":"Le Feu de Kosmas","cout":2,"cible":1,
 "effet":"Le récif brûle en phare. 14 à la cible ; alliés soignés de 16 ; les coups ignorent la garde ; héros +6 de garde ; riposte 3. Pose Braise. Si Sceau (consommée) : alliés soignés de 8 ; 16 à la cible ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["deg","cible",14],["soin","allies",16],["ignoreGarde"],["garde","heros",6],["riposte",3],["pose","Braise"],["reveil","Sceau",true,[["soin","allies",8],["deg","cible",16],["hesite","cible"]]],["exil"]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Perce-garde","Contrôle","Riposte","Garde","Soin","Exil","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Le récif flambe nuit et jour ; la mer est claire jusqu'au fond, l'île n'a plus d'abri.",
 "budget":"48,8 sans combo ; réveil +33 (68 %)"}
]
```

---

## 8. Washa-Meskot, la Nef des Vitres (ANT210) — Antre · Cavernes cristallines · Pierre · Éthiopienne

Forme du récit : l'héritage partagé (la nef aux anciens, les vitres aux jeunes). Recette du −7 : le silence (la nef murée, plus une lueur, plus un chant) ; du +7 : la démesure (la falaise devenue vitrail, la vallée vue à travers l'autel).

**Pierre (−)** : le ciseau de Gebre-Kristos → la nef sombre → les anciens de la nef → la pierre sombre et sûre → le daman dans la fenêtre → le mur des anciens → la Nef aveugle. Fil mécanique : **colonne marque et `vulnerable`** (la pierre qu'on marque avant de la tailler : marque sur 4 cartes, crochet « la cible est déjà marquée » sur 4, toujours lu avant la marque de la carte), geladas et damans sur 4 cartes, garde des alliés en appoint ; prix : vos bêtes et exil (sans crochet `bete`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, marque 4, dégâts ciblés 4, garde des alliés 4, exil 2, soin du héros 2, riposte 2 ; crochet « la cible est déjà marquée » sur 4 ; prix sur 6 cartes (vos bêtes 4, exil 2).

**Cristal (+)** : la poche de cristal → les vitres non posées → les jeunes frères → le marché de la vallée → le vol des chauves-souris → le cristal taillé → la Falaise-vitrail. Fil mécanique : **vocation d'Antre, invocations** sur 7 cartes (chauves-souris et ibis caronculés ; reprise unique de C ANT195, qui lisait `vulnerable` : ici « la cible s'apprête à piétiner »), mana de Pierre en appoint ; prix : PV et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, dégâts ciblés 4, mana 3, garde du héros 2, exil 2, soin du héros 2, dégâts à tous 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 5 cartes (PV 3, exil 2).

```json
{"fiche":"ANT210","nom":"Washa-Meskot, la Nef des Vitres",
 "recit":"Le moine Gebre-Kristos, en taillant une église dans la falaise, perça une poche de cristal, et la lumière entra dans la nef par des vitres que personne n'avait posées. À sa mort, ses frères se disputèrent l'église. Les anciens voulaient la pierre, sombre et sûre ; les jeunes voulaient le cristal et ses fenêtres. Ils partagèrent : la nef aux uns, les vitres aux autres. Les jeunes taillèrent le cristal pour le vendre au marché de la vallée. Depuis, la nef est sombre et sûre, et les damans dorment dans les trous des fenêtres.",
 "pal":["La nef est murée de pierre brute ; plus une lueur, plus un chant, et les damans dorment en tas dans les niches des fenêtres bouchées.","Les anciens bouchent les fenêtres de pierres sèches ; la nef s'assombrit, l'encens stagne, et des geladas guettent depuis la corniche.","Une église taillée dans la falaise rouge, une nef sombre, et des vitres de cristal brut qui jettent la lumière sur les fresques.","Le cristal perce la roche autour des fenêtres ; des éclats de lumière dansent sur les murs, et les chauves-souris ne savent plus où dormir.","La falaise entière est devenue vitrail ; la lumière traverse la pierre de part en part, et l'on voit la vallée à travers l'autel."],
 "pm":"Pierre","pp":"Cristal"}
```

```json
[
{"id":"ANT210-moins-1","zone":"ANT210","pole":"-","palier":1,"nom":"Le Ciseau de Gebre-Kristos","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu. Un Daman des corniches rejoint le combat : 6 PV, frappe 1.",
 "ops":[["vulnerable","cible",2],["invoque","Daman des corniches",6,1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Marque"],
 "ambiance":"Gebre-Kristos marquait la roche au charbon avant de la tailler, et ne se trompait jamais de trait.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT210-moins-2","zone":"ANT210","pole":"-","palier":2,"nom":"La Nef sombre","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Un Gelada des falaises rejoint le combat : 8 PV, frappe 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["invoque","Gelada des falaises",8,2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Dans la nef sans fenêtre, les anciens chantent de mémoire ; les geladas écoutent depuis la corniche.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT210-moins-3","zone":"ANT210","pole":"-","palier":3,"nom":"Les Anciens de la nef","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 12 dégâts à la cible. Puis tous les ennemis sont marqués : +1 par coup reçu ; vos alliés gagnent 8 de garde ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["vulnerable","tous",1],["garde","allies",8],["soin","heros",4],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Marque","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Les anciens ont gardé la pierre ; ils disent qu'une église n'a pas besoin de voir dehors.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ANT210-moins-4","zone":"ANT210","pole":"-","palier":4,"nom":"La Pierre sombre et sûre","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 10 de garde ; riposte 5 jusqu'à votre prochain tour ; piochez 1 carte. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["garde","allies",10],["riposte",5],["pioche",1],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Riposte","Garde","Pioche","Prix"],
 "ambiance":"La nef ne laisse passer ni le vent ni la lumière, et pas davantage les nouvelles de la vallée.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ANT210-moins-5","zone":"ANT210","pole":"-","palier":5,"nom":"Le Daman dans la fenêtre","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Un Daman des vitres murées rejoint le combat : 14 PV, frappe 4. Le héros se soigne de 9. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["invoque","Daman des vitres murées",14,4],["soin","heros",9],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Les damans ont pris les trous des fenêtres pour terriers, et sifflent quand un frère approche.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ANT210-moins-6","zone":"ANT210","pole":"-","palier":6,"nom":"Le Mur des anciens","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, tous les ennemis hésitent. Puis la cible est marquée : +3 par coup reçu ; vos alliés gagnent 12 de garde ; riposte 4 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","vulnerable",[["hesite","tous"]]],["vulnerable","cible",3],["garde","allies",12],["riposte",4],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Marque","Contrôle","Riposte","Garde","Condition","Exil","Prix"],
 "ambiance":"Les anciens ont muré la dernière fenêtre ; ils ont gardé une pierre de cristal, pour la sacristie.",
 "budget":"32,9 / 36 (−9 %)"},
{"id":"ANT210-moins7","zone":"ANT210","pole":"-","palier":7,"nom":"La Nef aveugle","cout":2,"cible":1,
 "effet":"La pierre bouche les vitres. Tous marqués (+2) ; alliés +14 de garde ; un Grand Gelada de la nef (20 PV, frappe 6). Pose Abîme. Si Racine (consommée) : cible marquée (+3) ; 12 à la cible ; alliés +8 de garde. Prix : bête la plus faible −3 PV.",
 "ops":[["vulnerable","tous",2],["garde","allies",14],["invoque","Grand Gelada de la nef",20,6],["pose","Abîme"],["reveil","Racine",true,[["vulnerable","cible",3],["deg","cible",12],["garde","allies",8]]],["prixBete",3]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Marque","Garde","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"La nef est murée de pierre brute ; les damans dorment en tas dans les niches des fenêtres.",
 "budget":"46 sans combo ; réveil +30,6 (67 %)"},
{"id":"ANT210-plus-1","zone":"ANT210","pole":"+","palier":1,"nom":"La Poche de cristal","cout":1,"cible":0,
 "effet":"Une Chauve-souris du cristal rejoint le combat : 6 PV, frappe 2. Le héros gagne 5 de garde.",
 "ops":[["invoque","Chauve-souris du cristal",6,2],["garde","heros",5]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde"],
 "ambiance":"Le ciseau a percé la roche sur du vide, et une poche de cristal a éclairé la nef.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT210-plus-2","zone":"ANT210","pole":"+","palier":2,"nom":"Les Vitres non posées","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Une Chauve-souris des vitres rejoint le combat : 8 PV, frappe 2.",
 "ops":[["si","pietine",[["deg","cible",10]]],["invoque","Chauve-souris des vitres",8,2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Condition"],
 "ambiance":"Personne n'a posé ces vitres ; on dit qu'elles ont poussé dans la falaise pendant le carême.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT210-plus-3","zone":"ANT210","pole":"+","palier":3,"nom":"Les Jeunes Frères","cout":2,"cible":0,
 "effet":"Un Ibis caronculé rejoint le combat : 14 PV, frappe 4. Riposte 4 jusqu'à votre prochain tour ; +1 mana de Pierre. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Ibis caronculé",14,4],["riposte",4],["mana","Pierre",1],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Riposte","Mana","Prix"],
 "ambiance":"Les jeunes frères ont gardé le cristal, et les ibis qui nichent dans les fenêtres avec lui.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT210-plus-4","zone":"ANT210","pole":"+","palier":4,"nom":"Le Marché de la vallée","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 16 dégâts à la cible. Un Ibis du marché rejoint le combat : 16 PV, frappe 4. La cible hésite. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["deg","cible",16]]],["invoque","Ibis du marché",16,4],["hesite","cible"],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Contrôle","Condition","Exil","Prix"],
 "ambiance":"Le cristal de la nef se vend à la livre au marché de la vallée, et les ibis suivent.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ANT210-plus-5","zone":"ANT210","pole":"+","palier":5,"nom":"Le Vol des chauves-souris","cout":2,"cible":1,
 "effet":"10 dégâts à la cible. Une Nuée de chauves-souris rejoint le combat : 16 PV, frappe 6. Le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",10],["invoque","Nuée de chauves-souris",16,6],["garde","heros",6],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"Les chauves-souris quittent la nef à chaque fenêtre taillée, et cherchent en vain un coin sombre.",
 "budget":"29,8 / 32 (−7 %)"},
{"id":"ANT210-plus-6","zone":"ANT210","pole":"+","palier":6,"nom":"Le Cristal taillé","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 6 dégâts à tous les ennemis. Un Ibis-roi des vitres rejoint le combat : 20 PV, frappe 6. +2 mana de Pierre ; le héros se soigne de 6. Prix : le héros perd 3 PV.",
 "ops":[["si","pietine",[["deg","tous",6]]],["invoque","Ibis-roi des vitres",20,6],["mana","Pierre",2],["soin","heros",6],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Les jeunes taillent le cristal en lames fines, si fines que la falaise devient transparente.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ANT210-plus7","zone":"ANT210","pole":"+","palier":7,"nom":"La Falaise-vitrail","cout":2,"cible":1,
 "effet":"La falaise devient vitrail. Une Grande Chauve-souris de cristal (24 PV, frappe 7) ; 6 à tous ; soin du héros 10 ; +2 mana de Pierre. Pose Givre. Si Sang (consommée) : 16 à la cible ; soin du héros 10 ; piochez 1. Prix : cette carte s'exile.",
 "ops":[["invoque","Grande Chauve-souris de cristal",24,7],["deg","tous",6],["soin","heros",10],["mana","Pierre",2],["pose","Givre"],["reveil","Sang",true,[["deg","cible",16],["soin","heros",10],["pioche",1]]],["exil"]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Soin","Pioche","Mana","Exil","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"La lumière traverse la falaise de part en part, et l'on voit la vallée à travers l'autel.",
 "budget":"48,7 sans combo ; réveil +30 (62 %)"}
]
```

---

## 9. Yawar-Qhasa, le Névé qui saigne (ANT018) — Antre · Glacier · Glace · Inca

> **Note du critique (lot 9)** : Les viscaches de +5 deviennent des conures : les rongeurs étaient à 3 pôles dans le lot (viscaches, cuys de C ANT099, castors de D ANT176). Budget inchangé.

Forme du récit : le voyage de corvée (la glace montée pour la fête de l'Inca). Recette du −7 : la démesure (le col rouge de la moraine aux crêtes) ; du +7 : le végétal (la forêt de queñuas qui prend le col, sans bâtiment avalé).

**Sang (−)** : la neige rouge → le lama d'Atoq → la glace pour l'Inca → le curaca → la plus digne → le porteur plus jeune → le Col qui saigne. Fil mécanique : **vocation d'Antre, invocations** sur 7 cartes (vigognes et condors ; voir familles_A.md : jamais déclarée en vocation sur ce mot, mais 5 et 6 bêtes chez B et C au compte strict), crochet « la cible vole par-dessus » (avant : `vulnerable`, `elan`) ; prix : vos bêtes et exil, sans crochet `bete`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, dégâts ciblés 4, garde des alliés 2, soin des alliés 2, exil 2, affaiblissement 2 ; crochet « la cible vole par-dessus » sur 3 ; prix sur 5 cartes (vos bêtes 3, exil 2).

**Sève (+)** : la sève du queñua → la glace blanche → les paniers d'Atoq → la chicha fraîche → le queñua qui pleure → les mains collées → la Forêt de résine. Fil mécanique : **colonne hésitation et `hesite`** (la sève qui colle : hésitation sur 4 cartes, crochet « la cible hésite déjà » sur 4, toujours lu avant l'hésitation de la carte), colibris et conures sur 4 cartes (viscaches avant la note du critique), soin du héros en appoint ; prix : PV (sans `blesse`) et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, hésitation 4, dégâts ciblés 4, soin du héros 3, mana 2, riposte 2, récupération 2, pioche 2, garde du héros 2, dégâts à tous 2 ; crochet « la cible hésite déjà » sur 4 ; prix sur 6 cartes (PV 3, défausse 3).

```json
{"fiche":"ANT018","nom":"Yawar-Qhasa, le Névé qui saigne",
 "recit":"Le curaca envoya Atoq chercher de la glace au col pour la fête de l'Inca, avec un lama et une corde. Là-haut, la neige était rouge, et Atoq crut voir du sang ; il pria, et remplit ses paniers de glace blanche, plus loin, au pied des queñuas. En bas, on fêta l'Inca avec la glace d'Atoq, et l'on but de la chicha fraîche. L'année suivante, le curaca envoya un porteur plus jeune et demanda la neige rouge : plus rare, donc plus digne. Atoq ne dit rien.",
 "pal":["Tout le col est rouge, de la moraine aux crêtes ; la neige suinte, les condors tournent sans se poser, et la glace saigne sous les pas.","Des traînées rouges descendent des névés ; les porteurs grattent la neige teintée dans leurs paniers, et les vigognes refusent de monter.","Un col glacé sous les crêtes, des taches rouges sur les névés, et un sentier de pierres plates où passent les porteurs de glace.","Les queñuas montent plus haut que la neige ; leur écorce rouge pleure une sève claire, et les colibris boivent au bord des glaces.","Une forêt de queñuas a pris le col ; la glace coule en ruisseaux de sève, et les porteurs ne trouvent plus un bloc à rapporter."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"ANT018-moins-1","zone":"ANT018","pole":"-","palier":1,"nom":"La Neige rouge","cout":1,"cible":0,
 "effet":"Une Vigogne du col rejoint le combat : 14 PV, frappe 2.",
 "ops":[["invoque","Vigogne du col",14,2]],
 "tags":["Antre","Glace","Pôle −","Invocation"],
 "ambiance":"Là-haut, la neige est rouge par plaques, et les vigognes la contournent sans la brouter.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT018-moins-2","zone":"ANT018","pole":"-","palier":2,"nom":"Le Lama d'Atoq","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Une Vigogne de la corde rejoint le combat : 8 PV, frappe 2.",
 "ops":[["si","vol",[["deg","cible",10]]],["invoque","Vigogne de la corde",8,2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Condition"],
 "ambiance":"Atoq monte avec un lama, une corde et des paniers vides, et redescend courbé sous la glace.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT018-moins-3","zone":"ANT018","pole":"-","palier":3,"nom":"La Glace pour l'Inca","cout":2,"cible":0,
 "effet":"Un Condor du col rejoint le combat : 14 PV, frappe 4. Vos alliés gagnent 6 de garde ; +1 mana de Glace. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Condor du col",14,4],["garde","allies",6],["mana","Glace",1],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Garde","Mana","Prix"],
 "ambiance":"La glace du col descend en courant de relais en relais, pour fondre dans la coupe de l'Inca.",
 "budget":"21,2 / 24 (−12 %)"},
{"id":"ANT018-moins-4","zone":"ANT018","pole":"-","palier":4,"nom":"Le Curaca","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 14 dégâts à la cible. Un Condor des neiges rejoint le combat : 16 PV, frappe 4. Vos alliés se soignent de 4. Prix : cette carte s'exile.",
 "ops":[["si","vol",[["deg","cible",14]]],["invoque","Condor des neiges",16,4],["soin","allies",4],["exil"]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Soin","Condition","Exil","Prix"],
 "ambiance":"Le curaca n'est jamais monté au col ; il connaît la neige par ce qu'on lui en rapporte.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ANT018-moins-5","zone":"ANT018","pole":"-","palier":5,"nom":"La Plus Digne","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Un Troupeau de vigognes rejoint le combat : 20 PV, frappe 4. Piochez 1 carte. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","cible",12],["invoque","Troupeau de vigognes",20,4],["pioche",1],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le curaca demande la neige rouge, parce qu'elle est plus rare ; il ne demande pas pourquoi.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT018-moins-6","zone":"ANT018","pole":"-","palier":6,"nom":"Le Porteur plus jeune","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 6 dégâts à tous les ennemis. Un Condor-roi rejoint le combat : 22 PV, frappe 6. L'attaque de chaque ennemi baisse de 1 ; vos alliés se soignent de 4. Prix : cette carte s'exile.",
 "ops":[["si","vol",[["deg","tous",6]]],["invoque","Condor-roi",22,6],["affaiblit","tous",1],["soin","allies",4],["exil"]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"Le porteur plus jeune remplit ses paniers de neige rouge, et ne prie pas en la grattant.",
 "budget":"36,2 / 36 (+1 %)"},
{"id":"ANT018-moins7","zone":"ANT018","pole":"-","palier":7,"nom":"Le Col qui saigne","cout":2,"cible":1,
 "effet":"Le glacier saigne à blanc. 18 à la cible ; un Grand Condor rouge (26 PV, frappe 7) ; chaque ennemi −1 d'attaque. Pose Sceau. Si Abîme (consommée) : 16 à la cible ; alliés +8 de garde ; riposte 2. Prix : bête la plus faible −2 PV.",
 "ops":[["deg","cible",18],["invoque","Grand Condor rouge",26,7],["affaiblit","tous",1],["pose","Sceau"],["reveil","Abîme",true,[["deg","cible",16],["garde","allies",8],["riposte",2]]],["prixBete",2]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Riposte","Garde","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"Tout le col est rouge de la moraine aux crêtes, et les condors tournent sans se poser.",
 "budget":"46,1 sans combo ; réveil +29,6 (64 %)"},
{"id":"ANT018-plus-1","zone":"ANT018","pole":"+","palier":1,"nom":"La Sève du queñua","cout":1,"cible":1,
 "effet":"La cible hésite. Un Colibri des queñuas rejoint le combat : 6 PV, frappe 1.",
 "ops":[["hesite","cible"],["invoque","Colibri des queñuas",6,1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Contrôle"],
 "ambiance":"L'écorce rouge des queñuas pèle en feuilles fines ; dessous, la sève colle aux doigts comme du miel.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT018-plus-2","zone":"ANT018","pole":"+","palier":2,"nom":"La Glace blanche","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis +1 mana de Glace ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",10]]],["mana","Glace",1],["soin","heros",4],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Atoq a pris la glace blanche, plus loin, au pied des queñuas, là où la neige ne saigne pas.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT018-plus-3","zone":"ANT018","pole":"+","palier":3,"nom":"Les Paniers d'Atoq","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 12 dégâts à la cible. Puis tous les ennemis hésitent ; riposte 3 jusqu'à votre prochain tour ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",12]]],["hesite","tous"],["riposte",3],["recup"],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Contrôle","Riposte","Récupération","Condition","Prix"],
 "ambiance":"Les paniers d'Atoq sont tressés de paille de puna, et la sève des queñuas les rend étanches.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT018-plus-4","zone":"ANT018","pole":"+","palier":4,"nom":"La Chicha fraîche","cout":2,"cible":1,
 "effet":"Un Colibri-comète rejoint le combat : 12 PV, frappe 4. La cible hésite ; le héros se soigne de 8 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Colibri-comète",12,4],["hesite","cible"],["soin","heros",8],["pioche",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Contrôle","Soin","Pioche","Prix"],
 "ambiance":"On boit la chicha rafraîchie à la glace du col, et l'on oublie vite d'où vient la glace.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT018-plus-5","zone":"ANT018","pole":"+","palier":5,"nom":"Le Queñua qui pleure","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 16 dégâts à la cible. Une Colonie de conures rejoint le combat : 18 PV, frappe 4. Piochez 1 carte ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",16]]],["invoque","Colonie de conures",18,4],["pioche",1],["recup"],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Les conures se chauffent sur les pierres, entre les queñuas qui pleurent leur sève au soleil.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ANT018-plus-6","zone":"ANT018","pole":"+","palier":6,"nom":"Les Mains collées","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 6 dégâts à tous les ennemis. Puis tous les ennemis hésitent ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 10 de garde ; +1 mana de Glace. Prix : le héros perd 2 PV.",
 "ops":[["si","hesite",[["deg","tous",6]]],["hesite","tous"],["riposte",4],["garde","heros",10],["mana","Glace",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Contrôle","Riposte","Garde","Mana","Condition","Prix"],
 "ambiance":"La sève prend aux mains ceux qui grattent la glace trop près des arbres, et ne les lâche plus.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT018-plus7","zone":"ANT018","pole":"+","palier":7,"nom":"La Forêt de résine","cout":2,"cible":1,
 "effet":"La glace coule en sève. Un Grand Colibri du col (20 PV, frappe 6) ; 6 à tous ; soin du héros 12 ; héros +6 de garde. Pose Racine. Si Braise (consommée) : 16 à la cible ; soin du héros 8 ; héros +6 de garde. Prix : défaussez 1 carte.",
 "ops":[["invoque","Grand Colibri du col",20,6],["deg","tous",6],["soin","heros",12],["garde","heros",6],["pose","Racine"],["reveil","Braise",true,[["deg","cible",16],["soin","heros",8],["garde","heros",6]]],["prixDefausse",1]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Garde","Soin","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Une forêt de queñuas a pris le col ; la glace coule en ruisseaux de sève claire.",
 "budget":"46 sans combo ; réveil +28,8 (63 %)"}
]
```

---

## 10. Saglujuaq, le Bivouac des Rumeurs (ANT204) — Antre · Forêt boréale · Glace · Inuit

Forme du récit : la rumeur (l'ours inventé qui grossit de camp en camp). Recette du −7 : la foule (les camps entiers serrés autour des feux, les traces qui mènent partout) ; du +7 : le vide (chaque trace expliquée, plus rien à raconter).

**Mensonge (−)** : le chasseur Iqaluk → l'ours de la forêt → le camp voisin → un ours de plus → l'ourse qui parlait → la grande chasse → le Bivouac des Rumeurs. Fil mécanique : garde des alliés (le mensonge que tout le camp tient ensemble), corbeaux et renards arctiques sur 4 cartes, récupération en appoint (l'histoire qui revient), crochet « il ne reste qu'un ennemi » ; prix : vos bêtes et exil, sans crochet `bete`. Autre famille que B ASS022 (vol de vie), autre crochet (B : `hesite`). Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, bêtes 4, dégâts ciblés 4, récupération 3, exil 2, soin du héros 2, riposte 2 ; crochet « il ne reste qu'un ennemi » sur 3 ; prix sur 6 cartes (vos bêtes 4, exil 2).

**Vérité (+)** : Iqaluk avoue → personne ne le crut → les traces vérifiées → le caribou de l'été → le carcajou → la vérité qui revient → la Chasse de l'été. Fil mécanique : enchaînement, place rare (la vérité ne vaut qu'après d'autres paroles : « vous avez déjà joué une autre carte ce tour » sur 4 cartes, « c'est au moins votre troisième carte » sur 3), lagopèdes et carcajous sur 4 cartes, mana de Glace et affaiblissement en appoint ; prix : PV et garde ennemie. Autre famille que B ASS022 (soin des alliés), autre crochet (B : `elan`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, mana 4, dégâts ciblés 4, affaiblissement 3, soin du héros 2, riposte 2, dégâts à tous 2, pioche 2, garde du héros 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 4 ; crochet « c'est au moins votre troisième carte ce tour » sur 3 ; prix sur 6 cartes (PV 4, garde ennemie 2).

```json
{"fiche":"ANT204","nom":"Saglujuaq, le Bivouac des Rumeurs",
 "recit":"Un chasseur de Saglujuaq raconta au camp voisin qu'il avait vu un ours blanc dans la forêt, loin de la mer. Le camp voisin le répéta au suivant, avec un ours de plus ; le suivant, avec une ourse et ses petits qui parlaient. Au printemps, l'histoire revint à Saglujuaq si grande qu'on organisa une chasse. On ne trouva pas d'ours. On trouva le chasseur, Iqaluk, qui avouait l'avoir inventé. Personne ne le crut. La chasse dura tout l'été, et l'on mangea bien, du caribou.",
 "pal":["Des camps entiers se pressent sous les épinettes autour de feux où chacun raconte l'ours ; les traces mènent partout, et nulle part.","Des traces trop grandes sillonnent la neige entre les arbres ; on veille tard autour des feux, et les corbeaux répètent ce qu'ils entendent.","Un bivouac de tentes de peau à l'orée de la forêt boréale, des séchoirs à poisson, et des pistes qui partent vers les autres camps.","Les chasseurs reviennent avec du caribou et des récits courts ; les traces sont relevées, comparées, et l'on rit des ours d'hier.","Le bivouac est silencieux et net ; chaque trace est expliquée, chaque piste nommée, et personne n'a plus rien à raconter aux voisins."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"ANT204-moins-1","zone":"ANT204","pole":"-","palier":1,"nom":"Le Chasseur Iqaluk","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 5 de garde. Un Renard arctique rejoint le combat : 4 PV, frappe 1.",
 "ops":[["garde","allies",5],["invoque","Renard arctique",4,1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Garde"],
 "ambiance":"Iqaluk raconte bien, surtout le soir, et le renard qui le suit ramasse les restes du récit.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT204-moins-2","zone":"ANT204","pole":"-","palier":2,"nom":"L'Ours de la forêt","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 10 dégâts à la cible. Vos alliés gagnent 5 de garde ; +1 mana de Glace. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","seul",[["deg","cible",10]]],["garde","allies",5],["mana","Glace",1],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Garde","Mana","Condition","Prix"],
 "ambiance":"Un ours blanc loin de la mer : personne n'en a jamais vu, donc tout le monde écoute.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT204-moins-3","zone":"ANT204","pole":"-","palier":3,"nom":"Le Camp voisin","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 10 de garde ; reprenez en main la dernière carte de votre défausse. Un Corbeau bavard rejoint le combat : 10 PV, frappe 3. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["garde","allies",10],["recup"],["invoque","Corbeau bavard",10,3],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Garde","Récupération","Prix"],
 "ambiance":"Le camp voisin répète l'histoire au suivant ; le corbeau du camp la répète aux autres corbeaux.",
 "budget":"23,5 / 24 (−2 %)"},
{"id":"ANT204-moins-4","zone":"ANT204","pole":"-","palier":4,"nom":"Un ours de plus","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 14 dégâts à la cible. Vos alliés gagnent 12 de garde ; reprenez en main la dernière carte de votre défausse ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",14]]],["garde","allies",12],["recup"],["soin","heros",4],["exil"]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Garde","Soin","Récupération","Condition","Exil","Prix"],
 "ambiance":"À chaque camp, l'ours prend une patte, une dent, un frère ; personne ne ment, chacun ajoute.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ANT204-moins-5","zone":"ANT204","pole":"-","palier":5,"nom":"L'Ourse qui parlait","cout":2,"cible":0,
 "effet":"Un Renard des rumeurs rejoint le combat : 16 PV, frappe 4. Vos alliés gagnent 10 de garde ; riposte 4 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Renard des rumeurs",16,4],["garde","allies",10],["riposte",4],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Riposte","Garde","Prix"],
 "ambiance":"Au dernier camp, l'ourse parlait, et ses petits aussi ; on a cru surtout les petits.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT204-moins-6","zone":"ANT204","pole":"-","palier":6,"nom":"La Grande Chasse","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 16 dégâts à la cible. Vos alliés gagnent 14 de garde ; reprenez en main la dernière carte de votre défausse ; riposte 4 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",16]]],["garde","allies",14],["recup"],["riposte",4],["exil"]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Riposte","Garde","Récupération","Condition","Exil","Prix"],
 "ambiance":"Tous les camps partent ensemble au printemps, lances serrées, derrière la rumeur.",
 "budget":"33,8 / 36 (−6 %)"},
{"id":"ANT204-moins7","zone":"ANT204","pole":"-","palier":7,"nom":"Le Bivouac des Rumeurs","cout":2,"cible":1,
 "effet":"Le mensonge nourrit le camp. Alliés +18 de garde ; un Grand Corbeau menteur (20 PV, frappe 6) ; chaque ennemi −1 d'attaque. Pose Sceau. Si Givre (consommée) : alliés +8 de garde ; 14 à la cible ; soin du héros 6. Prix : bête la plus faible −2 PV.",
 "ops":[["garde","allies",18],["invoque","Grand Corbeau menteur",20,6],["affaiblit","tous",1],["pose","Sceau"],["reveil","Givre",true,[["garde","allies",8],["deg","cible",14],["soin","heros",6]]],["prixBete",2]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Garde","Soin","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Des camps entiers se serrent sous les épinettes, et chacun raconte l'ours à son voisin.",
 "budget":"45,2 sans combo ; réveil +29,6 (65 %)"},
{"id":"ANT204-plus-1","zone":"ANT204","pole":"+","palier":1,"nom":"Iqaluk avoue","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, l'attaque de la cible baisse de 2. Un Lagopède des saules rejoint le combat : 8 PV, frappe 2.",
 "ops":[["si","cartesJouees",[["affaiblit","cible",2]]],["invoque","Lagopède des saules",8,2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Affaiblissement","Condition"],
 "ambiance":"Iqaluk avoue au printemps, devant tout le camp, qu'il n'a jamais vu d'ours ; on le trouve modeste.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT204-plus-2","zone":"ANT204","pole":"+","palier":2,"nom":"Personne ne le crut","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 10 dégâts à la cible. Puis +1 mana de Glace ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["mana","Glace",1],["soin","heros",4],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Un homme qui avoue un mensonge, disent les anciens, en cache forcément un plus gros.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT204-plus-3","zone":"ANT204","pole":"+","palier":3,"nom":"Les Traces vérifiées","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 16 dégâts à la cible. Un Carcajou des traces rejoint le combat : 14 PV, frappe 4. L'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["deg","cible",16]]],["invoque","Carcajou des traces",14,4],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"On relève les traces une par une : renard, lièvre, carcajou, et aucune patte d'ours.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT204-plus-4","zone":"ANT204","pole":"+","palier":4,"nom":"Le Caribou de l'été","cout":2,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 6 dégâts à tous les ennemis. Puis +2 mana de Glace ; riposte 5 jusqu'à votre prochain tour ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","tous",6]]],["mana","Glace",2],["riposte",5],["recup"],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Riposte","Récupération","Mana","Condition","Prix"],
 "ambiance":"La chasse à l'ours rapporte du caribou tout l'été, et personne ne s'en plaint à voix haute.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT204-plus-5","zone":"ANT204","pole":"+","palier":5,"nom":"Le Carcajou","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, un Carcajou-chef rejoint le combat : 20 PV, frappe 6. Puis 17 dégâts à la cible ; +1 mana de Glace. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["invoque","Carcajou-chef",20,6]]],["deg","cible",17],["mana","Glace",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Le carcajou suit la chasse et vole les caches de viande ; lui, au moins, existe.",
 "budget":"27,5 / 32 (−14 %)"},
{"id":"ANT204-plus-6","zone":"ANT204","pole":"+","palier":6,"nom":"La Vérité qui revient","cout":2,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, le héros gagne 18 de garde. Puis piochez 2 cartes ; l'attaque de chaque ennemi baisse de 2 ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["garde","heros",18]]],["pioche",2],["affaiblit","tous",2],["riposte",3],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Affaiblissement","Riposte","Garde","Pioche","Condition","Prix"],
 "ambiance":"La vérité revient à Saglujuaq après la chasse, petite et maigre, et personne ne lui fait de place.",
 "budget":"32,4 / 36 (−10 %)"},
{"id":"ANT204-plus7","zone":"ANT204","pole":"+","palier":7,"nom":"La Chasse de l'été","cout":2,"cible":1,
 "effet":"La vérité ne nourrit personne. Si c'est votre troisième carte, 8 à tous. Un Vieux Carcajou (24 PV, frappe 7) ; +2 mana de Glace ; héros +14 de garde. Pose Abîme. Si Sang (consommée) : 18 à la cible ; piochez 1 ; soin du héros 8. Prix : héros −2 PV.",
 "ops":[["si","troisCartes",[["deg","tous",8]]],["invoque","Vieux Carcajou",24,7],["mana","Glace",2],["garde","heros",14],["pose","Abîme"],["reveil","Sang",true,[["deg","cible",18],["pioche",1],["soin","heros",8]]],["prixPV",2]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Garde","Soin","Pioche","Mana","Condition","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Le bivouac est net et silencieux ; chaque trace est expliquée, et personne ne raconte plus rien.",
 "budget":"46,5 sans combo ; réveil +30 (65 %)"}
]
```

---

## 11. Qamargha-Darra, le Défilé de la Battue (ANT163) — Antre · Canyon · Feu · Moghole

Forme du récit : la battue impériale (le grand veneur a tout prévu, sauf les éléphants). Recette du −7 : la foule (le défilé devenu une seule bête affolée) ; du +7 : l'ordre (le gibier qui passe en file devant le trône).

**Chaos (−)** : le rabatteur → le tambour qui se tait → le cercle qui se serre → Daulat Khan → l'éléphant en rut → la bête affolée → le Défilé fou. Fil mécanique : **colonne défausse et `defausseAPrix`** (le cercle qui jette tout devant lui : défausse en prix sur 7 cartes, crochet « une carte a déjà été défaussée en prix ce tour » sur 4), sangliers et éléphants sur 4 cartes, brûlure en appoint (la poussière brûlante du défilé) ; prix : défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, dégâts ciblés 4, brûlure 4, pioche 2, riposte 2, garde du héros 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 4 ; prix sur 7 cartes (défausse 7).

**Ordre (+)** : le mir-shikar → l'ordre des tirs → la place des tentes → le silence des tambours → la récompense → l'empereur admirable → la Battue parfaite. Fil mécanique : exil (chaque bête à sa place, puis hors du jeu), guépards et caracals dressés sur 4 cartes, soin des alliés en appoint, crochet « la cible prend son élan » ; prix : exil et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 6, bêtes 4, dégâts ciblés 4, soin des alliés 4, hésitation 2, mana 2, riposte 2, garde du héros 2, perce-garde 2, pioche 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 7 cartes (exil 6, soin ennemi 1).

```json
{"fiche":"ANT163","nom":"Qamargha-Darra, le Défilé de la Battue",
 "recit":"Pour la grande battue de l'empereur, on rabattit tout le gibier du pays vers le défilé : cerfs, sangliers, guépards, chacals, et les rabatteurs eux-mêmes, en cercle de plus en plus serré. Le mir-shikar Daulat Khan avait tout prévu : l'ordre des tirs, la place des tentes, le silence des tambours. Il n'avait pas prévu les éléphants. Quand le cercle se ferma, le défilé ne fut plus qu'une bête affolée. L'empereur, note le registre de la cour, chassa ce jour-là avec une maîtrise admirable. Daulat Khan fut récompensé. On ne compta pas les rabatteurs.",
 "pal":["Le défilé n'est qu'une bête affolée : cornes, défenses et poussière mêlées entre les falaises rouges, et les tentes de l'empereur piétinées.","Les rabatteurs referment le cercle en criant ; le gibier se heurte aux parois, les tambours se taisent trop tôt, et la poussière monte du fond.","Un défilé de grès rouge entre des falaises brûlantes, des tentes de chasse à l'entrée, et des guetteurs postés sur les corniches.","Les tirs suivent l'ordre prévu ; les guépards encapuchonnés attendent sur leurs charrettes, et chaque bête tombe à l'endroit marqué.","Le défilé est une salle d'apparat ; le gibier passe en file devant le trône, la tête basse, et les falaises portent des tapis."],
 "pm":"Chaos","pp":"Ordre"}
```

```json
[
{"id":"ANT163-moins-1","zone":"ANT163","pole":"-","palier":1,"nom":"Le Rabatteur","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 6 dégâts à la cible. Un Sanglier des gorges rejoint le combat : 8 PV, frappe 2. +1 mana de Feu. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",6]]],["invoque","Sanglier des gorges",8,2],["mana","Feu",1],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Le rabatteur bat les buissons au bâton, et le sanglier qu'il lève charge celui d'à côté.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT163-moins-2","zone":"ANT163","pole":"-","palier":2,"nom":"Le Tambour qui se tait","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 10 dégâts à la cible. Puis la cible brûle : 2 par tour pendant 3 tours ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["brulure","cible",2,3],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Pioche","Condition","Prix"],
 "ambiance":"Le tambour devait battre jusqu'au signal ; il s'est tu trop tôt, et le gibier a tourné.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT163-moins-3","zone":"ANT163","pole":"-","palier":3,"nom":"Le Cercle qui se serre","cout":2,"cible":0,
 "effet":"Une Laie des broussailles rejoint le combat : 12 PV, frappe 3. Tous les ennemis brûlent : 2 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Laie des broussailles",12,3],["brulure","tous",2,3],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Brûlure","Prix"],
 "ambiance":"Le cercle des rabatteurs se resserre en criant, et chaque bête cherche le trou qui n'existe plus.",
 "budget":"20,7 / 24 (−14 %)"},
{"id":"ANT163-moins-4","zone":"ANT163","pole":"-","palier":4,"nom":"Daulat Khan","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 16 dégâts à la cible. Puis le héros gagne 8 de garde ; riposte 5 jusqu'à votre prochain tour ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",16]]],["garde","heros",8],["riposte",5],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Riposte","Garde","Pioche","Condition","Prix"],
 "ambiance":"Daulat Khan a tout prévu sur un grand rouleau ; il n'y a pas écrit le mot « éléphant ».",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ANT163-moins-5","zone":"ANT163","pole":"-","palier":5,"nom":"L'Éléphant en rut","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Un Éléphant en rut rejoint le combat : 24 PV, frappe 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["invoque","Éléphant en rut",24,5],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Un éléphant de bât, pris dans le cercle, a senti les autres ; il a cessé d'obéir au cornac.",
 "budget":"28,5 / 32 (−11 %)"},
{"id":"ANT163-moins-6","zone":"ANT163","pole":"-","palier":6,"nom":"La Bête affolée","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 8 dégâts à tous les ennemis. Puis la cible brûle : 4 par tour pendant 4 tours ; le héros gagne 8 de garde ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","tous",8]]],["brulure","cible",4,4],["garde","heros",8],["recup"],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Garde","Récupération","Condition","Prix"],
 "ambiance":"Le défilé ne fait plus qu'une bête : cornes, défenses, sabots et rabatteurs mêlés dans la poussière.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ANT163-moins7","zone":"ANT163","pole":"-","palier":7,"nom":"Le Défilé fou","cout":2,"cible":1,
 "effet":"Le gibier chasse l'empereur. Une Harde d'éléphants (38 PV, frappe 7) ; tous brûlent (2 par tour, 5 tours). Pose Sang. Si Braise (consommée) : riposte 5 ; la cible brûle (4 par tour, 5 tours). Prix : défaussez 2 cartes.",
 "ops":[["invoque","Harde d'éléphants",38,7],["brulure","tous",2,5],["pose","Sang"],["reveil","Braise",true,[["riposte",5],["brulure","cible",4,5]]],["prixDefausse",2]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Brûlure","Riposte","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Les tentes de l'empereur sont piétinées, et la poussière rouge cache le fond du défilé.",
 "budget":"45,5 sans combo ; réveil +30 (66 %)"},
{"id":"ANT163-plus-1","zone":"ANT163","pole":"+","palier":1,"nom":"Le Mir-shikar","cout":1,"cible":1,
 "effet":"Un Guépard dressé rejoint le combat : 10 PV, frappe 3. La cible hésite. Prix : cette carte s'exile.",
 "ops":[["invoque","Guépard dressé",10,3],["hesite","cible"],["exil"]],
 "tags":["Antre","Feu","Pôle +","Invocation","Contrôle","Exil","Prix"],
 "ambiance":"Le mir-shikar tient le guépard encapuchonné sur la charrette, et ne l'ôte qu'au signal.",
 "budget":"11,5 / 10 (+15 %)"},
{"id":"ANT163-plus-2","zone":"ANT163","pole":"+","palier":2,"nom":"L'Ordre des tirs","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; +1 mana de Feu. Prix : cette carte s'exile.",
 "ops":[["si","elan",[["deg","cible",10]]],["soin","allies",4],["mana","Feu",1],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Soin","Mana","Condition","Exil","Prix"],
 "ambiance":"L'empereur tire d'abord, puis les princes, puis les émirs, chacun à son rang et à son heure.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT163-plus-3","zone":"ANT163","pole":"+","palier":3,"nom":"La Place des tentes","cout":2,"cible":0,
 "effet":"Un Caracal du défilé rejoint le combat : 12 PV, frappe 4. Vos alliés se soignent de 6 ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["invoque","Caracal du défilé",12,4],["soin","allies",6],["riposte",2],["exil"]],
 "tags":["Antre","Feu","Pôle +","Invocation","Riposte","Soin","Exil","Prix"],
 "ambiance":"Les tentes sont plantées selon le plan, chacune à sa distance du trône, et le caracal dort devant.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT163-plus-4","zone":"ANT163","pole":"+","palier":4,"nom":"Le Silence des tambours","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 14 dégâts à la cible. Puis la cible hésite ; +2 mana de Feu ; le héros gagne 8 de garde ; reprenez en main la dernière carte de votre défausse. Prix : cette carte s'exile.",
 "ops":[["si","elan",[["deg","cible",14]]],["hesite","cible"],["mana","Feu",2],["garde","heros",8],["recup"],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Contrôle","Garde","Récupération","Mana","Condition","Exil","Prix"],
 "ambiance":"Au signal, les tambours se taisent ensemble, et l'on n'entend plus que le gibier qui court.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ANT163-plus-5","zone":"ANT163","pole":"+","palier":5,"nom":"La Récompense","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Un Guépards de l'empereur rejoint le combat : 18 PV, frappe 5. La garde de la cible tombe à 0 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",12],["invoque","Guépards de l'empereur",18,5],["briseGarde","cible"],["pioche",1],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"Daulat Khan a reçu un cheval, un sabre et une robe d'honneur ; les rabatteurs, un repas.",
 "budget":"33,5 / 32 (+5 %)"},
{"id":"ANT163-plus-6","zone":"ANT163","pole":"+","palier":6,"nom":"L'Empereur admirable","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 6 dégâts à tous les ennemis. Puis vos alliés se soignent de 10 ; la cible est marquée : +1 par coup reçu ; le héros gagne 8 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","elan",[["deg","tous",6]]],["soin","allies",10],["vulnerable","cible",1],["garde","heros",8],["riposte",3],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Marque","Riposte","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Selon le registre, l'empereur a tiré juste, longtemps, avec une maîtrise admirable et sans aide.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT163-plus7","zone":"ANT163","pole":"+","palier":7,"nom":"La Battue parfaite","cout":2,"cible":1,
 "effet":"La chasse tourne en parade. 6 à la cible ; un Guépard royal (24 PV, frappe 7) ; alliés soignés de 10 ; toute garde ennemie à 0. Pose Racine. Si Sceau (consommée) : 16 à la cible ; alliés soignés de 6 ; piochez 1. Prix : cette carte s'exile.",
 "ops":[["deg","cible",6],["invoque","Guépard royal",24,7],["soin","allies",10],["briseGarde","tous"],["pose","Racine"],["reveil","Sceau",true,[["deg","cible",16],["soin","allies",6],["pioche",1]]],["exil"]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Perce-garde","Soin","Pioche","Exil","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Le gibier passe en file devant le trône, la tête basse, et les falaises portent des tapis.",
 "budget":"47,1 sans combo ; réveil +29 (62 %)"}
]
```

---

## 12. Yakeno-machi, le Quartier refleuri (ANT157) — Antre · Cité en ruines · Pierre · Japonaise féodale

Forme du récit : le retour (le marchand revenu après l'incendie, qui attend le printemps pour bâtir et ne bâtit jamais). Recette du −7 : la ruine (la cendre aux genoux, la ville morte) ; du +7 : la foule (toute la ville haute descendue boire sous les fleurs).

**Cendre (−)** : la cendre aux genoux → les racines vivantes → la boutique de Jinbei → l'incendie → le printemps attendu → les ruines classées → le Quartier de cendre. Fil mécanique : **colonne garde du héros et `garde`** (on tient sous la cendre : garde du héros sur 4 cartes, crochet « la Garde du héros est levée » sur 4, toujours lu avant la garde de la carte), salamandres géantes sur 4 cartes, pioche en appoint ; prix : soin ennemi et exil. Autre chose que C ASS108 (pioche en famille, `brule`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, garde du héros 4, dégâts ciblés 4, pioche 3, mana 2, soin du héros 2, riposte 2, brûlure 2, exil 2 ; crochet « la Garde du héros est levée » sur 4 ; prix sur 6 cartes (soin ennemi 4, exil 2).

**Floraison (+)** : les cerisiers du temple → le saké sous les fleurs → les gens de la ville haute → le cerf du sanctuaire → les fleurs dehors → le magistrat → le Quartier refleuri. Fil mécanique : **colonne brûlure et `brule`** (la floraison qui flambe : brûlure sur 4 cartes, crochet « la cible brûle déjà » sur 4, toujours lu avant la brûlure de la carte), bouscarles et cerfs sika sur 4 cartes, récupération en appoint ; prix : PV et vos bêtes, sans crochet `bete`. Autre chose que C ASS108 (perce-garde, `seul`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, brûlure 4, dégâts ciblés 4, récupération 3, soin du héros 2, garde des alliés 2, riposte 2 ; crochet « la cible brûle déjà » sur 4 ; prix sur 6 cartes (PV 4, vos bêtes 2).

```json
{"fiche":"ANT157","nom":"Yakeno-machi, le Quartier refleuri",
 "recit":"Le marchand de saké Jinbei revint à Yakeno-machi après l'incendie, pour relever sa boutique. Il ne trouva que la cendre, à hauteur de genou, et sous la cendre les racines des cerisiers du temple, vivantes. Il attendit le printemps pour bâtir. Au printemps, le quartier fleurit si fort que les gens de la ville haute vinrent s'asseoir dans les ruines pour boire. Jinbei leur vendit du saké. Il ne bâtit jamais : on ne boit pas sous un toit quand les fleurs sont dehors, et le magistrat a classé les ruines.",
 "pal":["La cendre couvre le quartier jusqu'aux genoux ; des poutres noires, des puits comblés, et pas un bruit sous le ciel gris de la ville morte.","Des pans de mur tiennent encore ; la pluie fait une boue grise dans les rues, et des salamandres sortent des puits pour s'y coucher.","Un quartier de bois incendié au pied de la ville haute, des boutiques qu'on relève lentement, et les cerisiers du temple qui reverdissent.","Les cerisiers fleurissent dans les ruines ; des nattes sont posées sur la cendre, on boit sous les branches, et les bouscarles chantent dans les poutres.","Toute la ville haute est descendue boire dans les ruines en fleurs ; les pétales couvrent la cendre, et personne ne songe plus à bâtir."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ANT157-moins-1","zone":"ANT157","pole":"-","palier":1,"nom":"La Cendre aux genoux","cout":1,"cible":0,
 "effet":"Le héros gagne 6 de garde. Une Salamandre des cendres rejoint le combat : 6 PV, frappe 1.",
 "ops":[["garde","heros",6],["invoque","Salamandre des cendres",6,1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde"],
 "ambiance":"Jinbei marche dans la cendre jusqu'aux genoux, et cherche du pied le seuil de sa boutique.",
 "budget":"9,3 / 10 (−7 %)"},
{"id":"ANT157-moins-2","zone":"ANT157","pole":"-","palier":2,"nom":"Les Racines vivantes","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis +1 mana de Pierre ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",10]]],["mana","Pierre",1],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Sous la cendre, les racines des cerisiers du temple sont vivantes, et la terre y reste chaude.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT157-moins-3","zone":"ANT157","pole":"-","palier":3,"nom":"La Boutique de Jinbei","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 12 dégâts à la cible. Puis le héros gagne 12 de garde ; piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",12]]],["garde","heros",12],["pioche",1],["riposte",2],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Riposte","Garde","Pioche","Condition","Prix"],
 "ambiance":"De la boutique de saké, il reste le comptoir de pierre et une jarre fendue, pleine de cendre.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ANT157-moins-4","zone":"ANT157","pole":"-","palier":4,"nom":"L'Incendie","cout":2,"cible":1,
 "effet":"Une Salamandre géante rejoint le combat : 16 PV, frappe 4. La cible brûle : 3 par tour pendant 3 tours ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["invoque","Salamandre géante",16,4],["brulure","cible",3,3],["riposte",2],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Brûlure","Riposte","Exil","Prix"],
 "ambiance":"L'incendie a pris un soir de vent, dans la rue des teinturiers, et n'a rien laissé debout.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ANT157-moins-5","zone":"ANT157","pole":"-","palier":5,"nom":"Le Printemps attendu","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 16 dégâts à la cible. Puis le héros gagne 16 de garde ; reprenez en main la dernière carte de votre défausse ; +2 mana de Pierre. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",16]]],["garde","heros",16],["recup"],["mana","Pierre",2],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Récupération","Mana","Condition","Prix"],
 "ambiance":"Jinbei attend le printemps pour bâtir, assis sur sa jarre, le dos à la ville haute.",
 "budget":"28,8 / 32 (−10 %)"},
{"id":"ANT157-moins-6","zone":"ANT157","pole":"-","palier":6,"nom":"Les Ruines classées","cout":2,"cible":0,
 "effet":"Si la Garde du héros est levée, 6 dégâts à tous les ennemis. Une Salamandre-mère rejoint le combat : 20 PV, frappe 5. Le héros se soigne de 6 ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","garde",[["deg","tous",6]]],["invoque","Salamandre-mère",20,5],["soin","heros",6],["pioche",1],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"Le magistrat a classé les ruines ; on n'y bâtit plus, on n'y balaie plus, on y vient voir.",
 "budget":"31,1 / 36 (−14 %)"},
{"id":"ANT157-moins7","zone":"ANT157","pole":"-","palier":7,"nom":"Le Quartier de cendre","cout":2,"cible":1,
 "effet":"La cendre garde la ville. Héros +18 de garde ; un Hanzaki du vieux puits (26 PV, frappe 6) ; tous brûlent (2 par tour, 3 tours). Pose Givre. Si Racine (consommée) : 18 à la cible ; héros +10 de garde ; piochez 1. Prix : ennemis soignés de 1.",
 "ops":[["garde","heros",18],["invoque","Hanzaki du vieux puits",26,6],["brulure","tous",2,3],["pose","Givre"],["reveil","Racine",true,[["deg","cible",18],["garde","heros",10],["pioche",1]]],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Brûlure","Garde","Pioche","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"La cendre couvre le quartier jusqu'aux genoux, et pas un bruit sous le ciel gris.",
 "budget":"47,6 sans combo ; réveil +30 (63 %)"},
{"id":"ANT157-plus-1","zone":"ANT157","pole":"+","palier":1,"nom":"Les Cerisiers du temple","cout":1,"cible":1,
 "effet":"La cible brûle : 2 par tour pendant 3 tours. Une Bouscarle du temple rejoint le combat : 4 PV, frappe 1.",
 "ops":[["brulure","cible",2,3],["invoque","Bouscarle du temple",4,1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Brûlure"],
 "ambiance":"Les cerisiers du temple ont brûlé jusqu'au tronc, et fleurissent quand même, plus fort qu'avant.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT157-plus-2","zone":"ANT157","pole":"+","palier":2,"nom":"Le Saké sous les fleurs","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis le héros se soigne de 4 ; +1 mana de Pierre. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["soin","heros",4],["mana","Pierre",1],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"On boit le saké de Jinbei sur la cendre, une fleur dans la coupe, et l'on paie plus cher.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT157-plus-3","zone":"ANT157","pole":"+","palier":3,"nom":"Les Gens de la ville haute","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 12 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 3 tours ; reprenez en main la dernière carte de votre défausse. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",12]]],["brulure","tous",2,3],["recup"],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Brûlure","Récupération","Condition","Prix"],
 "ambiance":"Les gens de la ville haute descendent boire dans les ruines, en soie claire, et remontent gris.",
 "budget":"21,2 / 24 (−12 %)"},
{"id":"ANT157-plus-4","zone":"ANT157","pole":"+","palier":4,"nom":"Le Cerf du sanctuaire","cout":2,"cible":0,
 "effet":"Un Cerf sika du sanctuaire rejoint le combat : 18 PV, frappe 4. Vos alliés gagnent 6 de garde ; reprenez en main la dernière carte de votre défausse. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Cerf sika du sanctuaire",18,4],["garde","allies",6],["recup"],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde","Récupération","Prix"],
 "ambiance":"Un cerf sika est descendu du sanctuaire pour brouter les pétales ; personne ne l'a chassé.",
 "budget":"24,2 / 28 (−14 %)"},
{"id":"ANT157-plus-5","zone":"ANT157","pole":"+","palier":5,"nom":"Les Fleurs dehors","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 16 dégâts à la cible. Puis la cible brûle : 4 par tour pendant 3 tours ; piochez 1 carte ; riposte 4 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",16]]],["brulure","cible",4,3],["pioche",1],["riposte",4],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Brûlure","Riposte","Pioche","Condition","Prix"],
 "ambiance":"On ne boit pas sous un toit quand les fleurs sont dehors : c'est devenu la règle du quartier.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT157-plus-6","zone":"ANT157","pole":"+","palier":6,"nom":"Le Magistrat","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts à tous les ennemis. Une Harde de sika rejoint le combat : 22 PV, frappe 5. Reprenez en main la dernière carte de votre défausse ; le héros se soigne de 6. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","tous",6]]],["invoque","Harde de sika",22,5],["recup"],["soin","heros",6],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Soin","Récupération","Condition","Prix"],
 "ambiance":"Le magistrat est venu voir les ruines en fleurs, a bu, et les a classées le lendemain.",
 "budget":"33,1 / 36 (−8 %)"},
{"id":"ANT157-plus7","zone":"ANT157","pole":"+","palier":7,"nom":"Le Quartier refleuri","cout":2,"cible":1,
 "effet":"Les ruines fleurissent sans toit. Tous brûlent (3 par tour, 4 tours) ; un Grand Cerf blanc (20 PV, frappe 5) ; alliés +4 de garde. Pose Braise. Si Sang (consommée) : 16 à la cible ; riposte 4 ; alliés +4 de garde. Prix : héros −3 PV.",
 "ops":[["brulure","tous",3,4],["invoque","Grand Cerf blanc",20,5],["garde","allies",4],["pose","Braise"],["reveil","Sang",true,[["deg","cible",16],["riposte",4],["garde","allies",4]]],["prixPV",3]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Brûlure","Riposte","Garde","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"Toute la ville haute boit dans les ruines en fleurs, et les pétales couvrent la cendre.",
 "budget":"45,7 sans combo ; réveil +28,8 (63 %)"}
]
```
