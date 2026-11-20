# Lot 12 — Conteur A, le Chroniqueur amer

Onze zones à cartes (fiche et 14 cartes chacune, soit 154 cartes). Carte des familles : `familles_A.md`, écrite avant les cartes (19 h 27), après lecture de familles_D.md et familles_C.md, complétée à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de la cible 5, de tous 9 ; `si` compté à 50 % ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n et ennemiSoin n rendent 2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget`) ; formes du palier 7 entre 45 et 55 points de base, réveil de 60 à 100 %. Aucun boost. Plafonds sur la carte entière, `si` et réveil compris, palier 7 compris : riposte 8, mana 2, dégâts ciblés 20 hors Donjon, 30 dans le Donjon.

**Validateur** (`valide.py`, script Python repris du lot 11 et complété avec les leçons du lot 11, relancé sur ce fichier tel qu'il est remis ; cartes de D lues dans conteur_D.md, familles de B et C relues à la main) : **0 erreur**. 6 avertissements, tous attendus. Le 1er est la 4e colonne (4 au plus). Les 5 autres signalent un mot principal déjà en jeu dans un autre nom : yoriai, darbar, popol, cour, laine. Je les ai vérifiés à la main : chaque mot est un nom commun d'institution ou de lieu, et aucun nom de lieu ne se répète. Il vérifie :
- **format et longueurs** :
  - un bloc fiche et un bloc de 14 cartes par zone, paliers 1 à 7 sur chaque pôle ;
  - récit de 60 à 100 mots, `pal` de 160 caractères au plus ;
  - ambiance de 12 à 20 mots, comptés aussi en séparant les apostrophes ;
  - effet de 250 caractères au plus, chaque nombre des `ops` présent dans le texte ;
  - aucun mot de nombre ni chiffre dans la prose, ambiances comprises ; mots interdits ; pigments au +7 ;
  - chutes « …, sans X. » (2 au plus) et en parole rapportée.
- **moteur** :
  - opérations et arguments dans l'ordre, conditions lues dans `tv/src/cartes.js` (sans y toucher) ;
  - `"cible":1` partout où il faut, tag Loi, au moins 2 Lois par pôle d'Assemblée, au moins 3 invocations par pôle d'Antre ;
  - aucune condition rendue vraie ou fausse par une opération qui la précède ;
  - la garde des alliés compte comme garde du héros pour `garde`.
- **budgets** :
  - écart de 15 % au plus aux paliers 1 à 6 ;
  - palier 7 : base entre 45 et 55, réveil de 60 à 100 %, phrase d'ouverture de 3 à 6 mots, prix, résonance réveillée différente de la posée.
- **plafonds sur la carte entière** (`si`, réveil et palier 7 compris) :
  - riposte 8 au plus, mana 2 au plus ;
  - dégâts ciblés 20 au plus, 30 dans le Donjon ;
  - aucune opération répétée au premier niveau ;
  - **écho** sur exactement 4 cartes, au premier niveau, jamais sous `si` ni sous réveil.
- **familles** :
  - places de LISTE.md tenues à l'unité (15) ;
  - pas de famille principale commune aux deux pôles d'une zone ;
  - aucune famille principale déjà jouée par le même mot (lots 1 à 11), hors les reprises et vocations déclarées ;
  - appoints (3 ou 4 cartes) dans 3 de mes pôles au plus ;
  - dégâts ciblés sur 4 cartes au plus, « tous » sur 3 cartes au plus ;
  - hésitation de tous jamais sur deux cartes de suite.
- **reprises (leçon du lot 11)** : 2 au plus ; chacune au 2e emploi, d'origine autre que A, avec un crochet, un prix principal et des bêtes nouveaux.
- **vocations** :
  - par mot et par type, 3 emplois au plus, jamais A deux fois ;
  - crochet, prix principal et bêtes nouveaux ;
  - un seul emploi par mot dans le lot ;
  - colonnes 4 au plus.
- **crochets et couples** :
  - chaque crochet dans 3 de mes pôles au plus (`hesite` et `hesiteAvant` ensemble), l'intention ennemie dans 2 au plus ;
  - deux sortes de prix par pôle, la seconde sur 2 cartes au moins ;
  - même assemblage prix + crochet dans 2 pôles au plus ;
  - couples qui se remplissent eux-mêmes : seulement dans les colonnes déclarées, et dans 2 pôles du lot au plus, cartes de D comprises.
- **bêtes** : nom par nom, sur une table de familles scientifiques ; aucune famille deux fois chez moi, 2 pôles du lot au plus.
- **noms** :
  - absents de `noms-pris.txt` et des cartes de D ;
  - premières moitiés comparées à une lettre près ;
  - mot principal jamais répété chez A ;
  - prénoms et institutions absents des autres fichiers du lot.

**Places des familles (LISTE.md)** : soin du héros 2 (Bois DON018, Chaos ANT050), soin des alliés 1 (Glace ASS026), garde du héros 1 (Os ASS085 — reprise), garde des alliés 1 (Corruption ANT159), affaiblissement 1 (Mensonge ANT199 — reprise), riposte 2 (Famine CIT044, Étoiles ANT008), marque 1 (Sommeil ASS145), mana 1 (Poison ASS087), perce-garde 1 (Festin CIT044), exil 1 (Fer DON018), pioche 1 (Éveil ASS145, 2e emploi) ; places rares : écho 1 (Feu ASS026 : 4 cartes, toujours au premier niveau, jamais sous `si` ni sous réveil), coups au hasard 1 (Guérison ANT077). **Perdues : brûlure, seconde marque** (aucun mot libre sans 3e reprise). **Vocations 3** : Pureté (ANT159) et Vérité (ANT199) en invocations, 3e et dernier emploi chacune ; Corail (ASS085) en pioche d'Assemblée, 2e emploi. **Colonnes 4** : Nectar (défausse et `defausseAPrix`), Vide (PV et `blesse`), Peste (hésitation et `hesite`), Ordre (garde ennemie et `cibleGarde`). 15 + 3 + 4 = 22.

**Reprises (leçon 3 du lot 11), 2, déclarées** : Os en garde du héros (2e emploi, après B ANT160 : `elan`, PV ; ici `hesite`, défausse et exil, aucun PV) ; Mensonge en affaiblissement (2e emploi, après B ASS161 : `defausseAPrix`, défausse ; ici `piocheCout0`, PV et bête, drongos).

**Crochets (leçons des lots 10 et 11)** : chacun dans 3 de mes pôles au plus, `hesite` et `hesiteAvant` comptés ensemble. `vulnerable` 3 (Famine, Corruption, Chaos), `cibleGarde` 3 (Festin, Pureté, Ordre), `brule` 3 (Fer, Sommeil, Guérison), `hesite` 3 (Feu, Os, Peste), `piocheCout0` 3 (Éveil, Corail, Mensonge), `blesse` 2 (Glace, Vide), `garde` 2 (Poison, Étoiles), `defausseAPrix` 2 (Nectar, Vérité). Intention ennemie : 1 pôle (Bois `pietine`). La garde des alliés lève la Garde du héros : aucun pôle qui lit `garde` ne donne de garde sur plus d'une carte, et jamais avant son `si`.

**Prix (leçon 3 du lot 9)** : deux sortes de prix dans chaque pôle, la seconde sur 2 cartes au moins ; aucun pôle ne paie le même prix sur ses 7 cartes.

**Points pour le critique**
- **4 colonnes** : elles viennent des 2 places perdues (brûlure, seconde marque), comme au lot 11. Une 3e reprise ou une place d'un autre conteur aurait été la seule autre voie.
- **La pioche principale est sur 2 de mes pôles** : l'Éveil (ma place) et le Corail (vocation d'Assemblée). Au lot : A 2, B 2 (Chant, Exil), C 1 (Floraison), D 2 (Ruine, Mensonge), soit 7 pôles si l'on compte les vocations avec les places ; 5 si l'on compte les places seules. À arbitrer : je l'ai prise comme vocation de type, que LISTE.md autorise.
- **Couples pleins avec D** : PV / `blesse` (D Sécheresse, A Vide) et défausse / `defausseAPrix` (D Foyer, A Nectar).
- **La Vérité lit `defausseAPrix` sans payer en défausse** (pour ne pas faire un troisième couple défausse) : elle compte sur les défausses des autres cartes du tour.
- **Même couple que d'autres conteurs au lot** : Glace / Feu (C DON084), Corruption / Pureté (C ANT116), Vide / Étoiles (B ANT138), Mensonge / Vérité (D ASS029), Chaos / Ordre (B ANT085), Famine / Festin (B ASS088), Fer / Bois (D CIT029), Poison / Nectar (D DON118). Les images du ±7 ont été comparées à leurs cartes des familles (familles_A.md, § 6).
- **Le Mensonge chez D et chez moi** : B ASS161 avait 2 familles principales, la pioche et l'affaiblissement. D reprend la pioche (ASS029, crochet `garde`) et moi l'affaiblissement (ANT199, crochet `piocheCout0`). Chacune est un 2e emploi.
- **Mots principaux déjà en jeu** dans d'autres noms : yoriai, darbar, popol, cour, laine. Ce sont des noms communs d'institution ; les noms de lieu sont inédits.
- **Marque et brûlure hors colonne** : sur une seule carte dans les pôles qui lisent `vulnerable` ou `brule`, pour que le couple ne se remplisse pas lui-même. Le crochet compte donc surtout sur les autres cartes de la main.
- **Prénom changé à la remise** : Gebru → Mersha (trop proche de Gäbrä Krestos, C ANT168).

Recettes de récit (aucune deux fois, aucune de mon lot 11, aucun document cité, aucun dialogue, aucune énumération) : CIT044 la réputation ruineuse ; DON018 le portier ; ASS026 le précédent ; ASS145 le simulacre ; ASS085 l'otage substitué ; ASS087 l'accoutumance ; ANT159 l'entretien ; ANT008 le remploi ; ANT077 la confession publique ; ANT199 le juge et son oiseau ; ANT050 la mise en commun. Recettes des extrêmes : dans le champ `recette` de chaque zone. Aucun nombre précis dans ma prose, ambiances comprises.

Résonances des formes du palier 7 (posée → réveillée). Posées : Givre 4, Sang 4, Racine 4, Sceau 4, Abîme 4, Braise 2. Réveillées : Racine 5, Braise 4, Givre 4, Sceau 4, Sang 3, Abîme 2.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT044 | Givre → Braise | Sang → Givre |
| DON018 | Sang → Abîme | Racine → Sceau |
| ASS026 | Givre → Racine | Braise → Sang |
| ASS145 | Sceau → Givre | Abîme → Sceau |
| ASS085 | Racine → Sang | Sang → Racine |
| ASS087 | Abîme → Braise | Racine → Braise |
| ANT159 | Racine → Abîme | Sceau → Racine |
| ANT008 | Abîme → Givre | Givre → Sceau |
| ANT077 | Givre → Racine | Braise → Racine |
| ANT199 | Sang → Sceau | Sceau → Sang |
| ANT050 | Abîme → Braise | Sceau → Givre |

---

## 1. Utaat Uul, la Table du Noyan (CIT044) — Citadelle · Volcan · Feu · Mongole

Forme du récit : la réputation ruineuse (le mouton cuit dans les fentes du volcan attire à la forteresse tous les hôtes encombrants du khan). Recette du −7 : le vide (les marmites froides, la cour sans un cheval) ; du +7 : la foule (l'empire entier à table dans la cour).

**Famine (−)** : les marmites froides → la ration de cuir → le guet des fentes → le noyan Bayartu → les cordes bouillies → l'hiver tenu → la Garnison maigre. Fil mécanique : **riposte** (place 1/2 ; 8 au plus par carte, réveil compris), garde du héros en appoint, crochet « la cible est déjà marquée » (marque sur une seule carte : le couple ne se remplit pas lui-même) ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, dégâts ciblés 4, garde du héros 3, pioche 3, hésitation 2, soin du héros 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (PV 5, défausse 2).

**Festin (+)** : le mouton du volcan → les broches tournées → les hôtes du khan → l'ambassadeur repu → le cousin encombrant → le prince en disgrâce → le Festin de l'empire. Fil mécanique : **perce-garde** (place ; jamais principale sur le Festin), soin des alliés en appoint, crochet « la cible a de la garde » (aucune garde ennemie en prix) ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, dégâts ciblés 4, soin des alliés 4, riposte 2, pioche 2, garde du héros 2, hésitation 2, exil 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"CIT044","nom":"Utaat Uul, la Table du Noyan",
 "recit":"Le noyan Bayartu tenait Utaat Uul, une forteresse posée sur un volcan qui fume encore. Ses cuisiniers y cuisaient le mouton dans les fentes chaudes de la roche, et le khan, qui en goûta un jour de passage, le déclara le meilleur de l'empire. Il envoya dès lors à Utaat Uul tous ceux qu'il voulait honorer sans les garder près de lui : ambassadeurs, cousins, princes en disgrâce. Chacun voulait goûter le mouton du volcan. La garnison les nourrit tout l'hiver, et mangea les os. Bayartu fut fait gouverneur, pour sa table.",
 "pal":["Les marmites sont froides dans les fentes éteintes ; la cour est vide de chevaux, et la garnison ronge des lanières devant les braseros morts.","Des soldats maigres gardent les fentes qui fument encore ; on y fait bouillir du cuir de selle, et les chiens ne quittent plus la cuisine.","Une forteresse de pierre noire sur la pente d'un volcan ; des fumerolles dans la cour, des moutons dans les fentes, et la yourte du noyan au milieu.","Des hôtes en soie arrivent par la route du col ; les broches tournent au-dessus des fentes, et l'on dresse des tables jusque sur les remparts.","Toute la cour est une table où l'empire entier mange, princes et ambassadeurs coude à coude, et la fumée du volcan monte avec celle des broches."],
 "pm":"Famine","pp":"Festin"}
```

```json
[
{"id":"CIT044-moins-1","zone":"CIT044","pole":"-","palier":1,"nom":"Les Marmites froides","cout":1,"cible":0,
 "effet":"Riposte 3 jusqu'à votre prochain tour ; le héros gagne 5 de garde. Prix : le héros perd 1 PV.",
 "ops":[["riposte",3],["garde","heros",5],["prixPV",1]],
 "tags":["Citadelle","Feu","Pôle −","Riposte","Garde","Prix"],
 "ambiance":"Les marmites de fonte attendent dans les fentes ; la roche est chaude, il ne reste rien à y poser.",
 "budget":"9 / 10 (−10 %)"},
{"id":"CIT044-moins-2","zone":"CIT044","pole":"-","palier":2,"nom":"La Ration de cuir","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["riposte",3],["garde","heros",6],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"On découpe les selles en lanières que l'on fait bouillir dans la vapeur du volcan, une lanière par homme.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"CIT044-moins-3","zone":"CIT044","pole":"-","palier":3,"nom":"Le Guet des fentes","cout":2,"cible":1,
 "effet":"Riposte 8 jusqu'à votre prochain tour ; la cible hésite ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["riposte",8],["hesite","cible"],["pioche",1],["prixPV",2]],
 "tags":["Citadelle","Feu","Pôle −","Contrôle","Riposte","Pioche","Prix"],
 "ambiance":"Un soldat veille sur chaque fente qui fume encore, pour que personne n'y cuise rien en cachette.",
 "budget":"23 / 24 (−4 %)"},
{"id":"CIT044-moins-4","zone":"CIT044","pole":"-","palier":4,"nom":"Le Noyan Bayartu","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Puis riposte 4 jusqu'à votre prochain tour ; piochez 1 carte ; le héros se soigne de 8. Prix : le héros perd 3 PV.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["riposte",4],["pioche",1],["soin","heros",8],["prixPV",3]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Riposte","Soin","Pioche","Condition","Prix"],
 "ambiance":"Bayartu mange debout, avec ses hommes, la même lanière ; il compte ce qui reste de moutons pour le khan.",
 "budget":"26 / 28 (−7 %)"},
{"id":"CIT044-moins-5","zone":"CIT044","pole":"-","palier":5,"nom":"Les Cordes bouillies","cout":2,"cible":1,
 "effet":"Riposte 5 jusqu'à votre prochain tour ; le héros gagne 15 de garde ; la cible hésite ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",5],["garde","heros",15],["hesite","cible"],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Pôle −","Contrôle","Riposte","Garde","Pioche","Prix"],
 "ambiance":"Après les selles, les cordes des yourtes ; on dort sous le feutre affaissé, contre la roche chaude.",
 "budget":"28 / 32 (−12 %)"},
{"id":"CIT044-moins-6","zone":"CIT044","pole":"-","palier":6,"nom":"L'Hiver tenu","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["riposte",6],["vulnerable","cible",2],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Marque","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"La neige fond sur les murs noirs d'Utaat Uul avant la cour ; dedans, on a faim au chaud.",
 "budget":"32 / 36 (−11 %)"},
{"id":"CIT044-moins7","zone":"CIT044","pole":"-","palier":7,"nom":"La Garnison maigre","cout":2,"cible":1,
 "effet":"La faim mord la main. 10 à la cible ; riposte 8 ; soin du héros 10 ; chaque ennemi −2 d'attaque. Pose Givre. Si Braise (consommée) : 10 à la cible ; soin du héros 10 ; la cible −3 d'attaque. Prix : héros −3 PV.",
 "ops":[["deg","cible",10],["riposte",8],["soin","heros",10],["affaiblit","tous",2],["pose","Givre"],["reveil","Braise",true,[["deg","cible",10],["soin","heros",10],["affaiblit","cible",3]]],["prixPV",3]],
 "tags":["Citadelle","Feu","Forme ultime −7","Dégâts","Affaiblissement","Riposte","Soin","Combo","Pose Givre","Réveil Braise","Prix"],
 "ambiance":"Les marmites froides dans les fentes, la cour sans un cheval ; la garnison maigre mord quiconque approche.",
 "budget":"46,2 sans combo ; réveil +29 (63 %)"},
{"id":"CIT044-plus-1","zone":"CIT044","pole":"+","palier":1,"nom":"Le Mouton du volcan","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; +2 mana de Feu ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["briseGarde","cible"],["mana","Feu",2],["riposte",2],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Perce-garde","Riposte","Mana","Prix"],
 "ambiance":"On enterre le mouton entier dans une fente chaude, sous des pierres plates, et on l'oublie jusqu'au soir.",
 "budget":"11 / 10 (+10 %)"},
{"id":"CIT044-plus-2","zone":"CIT044","pole":"+","palier":2,"nom":"Les Broches tournées","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. Puis la garde de la cible tombe à 0 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["briseGarde","cible"],["pioche",1],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Perce-garde","Pioche","Condition","Prix"],
 "ambiance":"Les marmitons tournent les broches au-dessus de la roche qui fume, et la graisse siffle en tombant.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"CIT044-plus-3","zone":"CIT044","pole":"+","palier":3,"nom":"Les Hôtes du khan","cout":2,"cible":1,
 "effet":"Toute garde ennemie tombe à 0 ; vos alliés se soignent de 6 ; le héros gagne 8 de garde ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["briseGarde","tous"],["soin","allies",6],["garde","heros",8],["hesite","cible"],["exil"]],
 "tags":["Citadelle","Feu","Pôle +","Perce-garde","Contrôle","Garde","Soin","Exil","Prix"],
 "ambiance":"Chaque caravane du col amène un hôte avec sa lettre du khan, ses gens, ses chevaux et son appétit.",
 "budget":"24 / 24 (+0 %)"},
{"id":"CIT044-plus-4","zone":"CIT044","pole":"+","palier":4,"nom":"L'Ambassadeur repu","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis ces coups ignorent la garde ; vos alliés se soignent de 8 ; la cible hésite. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["ignoreGarde"],["soin","allies",8],["hesite","cible"],["ennemiSoin",2]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Perce-garde","Contrôle","Soin","Condition","Prix"],
 "ambiance":"L'ambassadeur de l'ouest mange à la table du noyan depuis l'automne, et parle de rester au printemps.",
 "budget":"26 / 28 (−7 %)"},
{"id":"CIT044-plus-5","zone":"CIT044","pole":"+","palier":5,"nom":"Le Cousin encombrant","cout":2,"cible":0,
 "effet":"Toute garde ennemie tombe à 0 ; 4 coups de 4 au hasard ; riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["briseGarde","tous"],["deg","hasard",4,4],["riposte",3],["pioche",1],["ennemiSoin",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Perce-garde","Riposte","Pioche","Prix"],
 "ambiance":"Le cousin du khan se plaint de la fumée, du vent, du mouton trop gras, et redemande du mouton.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"CIT044-plus-6","zone":"CIT044","pole":"+","palier":6,"nom":"Le Prince en disgrâce","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis la garde de la cible tombe à 0 ; vos alliés se soignent de 10 ; l'attaque de la cible baisse de 3. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["briseGarde","cible"],["soin","allies",10],["affaiblit","cible",3],["exil"]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Affaiblissement","Perce-garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Le prince exilé tient sa cour au bout de la table ; nul ne sait s'il passe avant le noyan.",
 "budget":"34 / 36 (−6 %)"},
{"id":"CIT044-plus7","zone":"CIT044","pole":"+","palier":7,"nom":"Le Festin de l'empire","cout":2,"cible":1,
 "effet":"Toute la cour à table. 14 à la cible ; toute garde ennemie à 0 ; alliés soignés de 14 ; héros +10 de garde. Pose Sang. Si Givre (consommée) : 6 à la cible ; alliés soignés de 14 ; les coups ignorent la garde. Prix : ennemis soignés de 2.",
 "ops":[["deg","cible",14],["briseGarde","tous"],["soin","allies",14],["garde","heros",10],["pose","Sang"],["reveil","Givre",true,[["deg","cible",6],["soin","allies",14],["ignoreGarde"]]],["ennemiSoin",2]],
 "tags":["Citadelle","Feu","Forme ultime +7","Dégâts","Perce-garde","Garde","Soin","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"La cour d'Utaat Uul n'est plus qu'une table ; l'empire y mange, et le noyan sert.",
 "budget":"45,6 sans combo ; réveil +30 (66 %)"}
]
```

---

## 2. Qiuqtaq, la Coque échouée (DON018) — Donjon · Savane · Feu · Inuit

Forme du récit : le portier (Anaqqiq ferme d'une porte de bois le navire de fer échoué dans la savane, pour finir les querelles, et vend l'entrée). Recette du −7 : la ruine (la coque rongée de rouille, ouverte au vent) ; du +7 : l'objet (la porte d'acacia, immense, debout seule dans l'herbe).

**Fer (−)** : la tôle arrachée → le couteau de cale → la cale du nord → les familles → la querelle des tôles → la serrure de la coque → la Coque rouillée. Fil mécanique : **exil** (place ; la carte s'exile sur 6 cartes), dégâts ciblés sur 4 cartes, crochet « la cible brûle déjà » (brûlure sur une seule carte) ; prix : exil et défausse. Les pièges de la coque : brûlure, coups au hasard, dégâts à tous. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 6, dégâts ciblés 4, riposte 3, dégâts à tous 3, marque 2, pioche 2, garde du héros 2, coups au hasard 2, affaiblissement 2, mana 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (exil 6, défausse 3).

**Bois (+)** : l'acacia de la porte → le guet de la savane → la serrure de bois → la clé d'Anaqqiq → le seuil → l'entrée payante → la Porte debout. Fil mécanique : **soin du héros** (place 1/2 ; jamais principal sur le Bois), garde du héros en appoint, dégâts ciblés sur 4 cartes, crochet d'intention « la cible s'apprête à piétiner » (mon seul pôle d'intention) ; prix : PV et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, dégâts ciblés 4, garde du héros 3, marque 2, riposte 2, exil 2, affaiblissement 2, pioche 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 7 cartes (PV 5, exil 2).

```json
{"fiche":"DON018","nom":"Qiuqtaq, la Coque échouée",
 "recit":"Au milieu de la savane de Qiuqtaq gît un navire de fer que personne n'a vu naviguer. Les familles venues du nord y taillent leurs lames depuis toujours, chacune dans sa cale, et l'on se battait souvent pour les meilleures tôles. Le vieil Anaqqiq, las des querelles, proposa de fermer la coque d'une porte d'acacia, avec une serrure, et d'en garder la clé pour tous. On accepta. Depuis, personne ne se bat plus dans la coque. On se bat devant la porte, et Anaqqiq vend l'entrée.",
 "pal":["La coque n'est plus qu'une dentelle de rouille couchée dans l'herbe ; le vent passe au travers des cales, et les tôles tombent quand on les touche.","Des cales sombres où les familles taillent le fer au burin ; des marques de propriété griffées sur chaque tôle, et des pièges de fil aux échelles.","Une coque de fer couchée dans la savane, plus haute que les acacias ; des tentes de peau autour, et une porte de bois frais fermée d'une serrure.","La porte d'acacia est sculptée de familles et de lames ; une file d'attente devant le seuil, et Anaqqiq assis sur un tabouret, la clé au cou.","Une porte immense, sculptée de chaque côté, se tient debout seule au milieu de la savane, sa serrure fermée, et plus aucune coque derrière."],
 "pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"DON018-moins-1","zone":"DON018","pole":"-","palier":1,"nom":"La Tôle arrachée","cout":1,"cible":1,
 "effet":"10 dégâts à la cible ; la cible est marquée : +1 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","cible",10],["vulnerable","cible",1],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Marque","Exil","Prix"],
 "ambiance":"Une tôle de la coque, arrachée au levier, chante dans le vent de la savane avant de tomber.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON018-moins-2","zone":"DON018","pole":"-","palier":2,"nom":"Le Couteau de cale","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["deg","cible",10]]],["riposte",3],["pioche",1],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Riposte","Pioche","Condition","Exil","Prix"],
 "ambiance":"On taille la lame dans la tôle, on la trempe au marigot, et la cale garde le reste.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON018-moins-3","zone":"DON018","pole":"-","palier":3,"nom":"La Cale du nord","cout":2,"cible":1,
 "effet":"6 dégâts à tous les ennemis ; la cible brûle : 3 par tour pendant 3 tours ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",6],["brulure","cible",3,3],["garde","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Brûlure","Garde","Prix"],
 "ambiance":"La cale du nord appartient aux gens d'Anaqqiq ; un fil tendu à l'échelle sonne quand on y descend.",
 "budget":"24 / 24 (+0 %)"},
{"id":"DON018-moins-4","zone":"DON018","pole":"-","palier":4,"nom":"Les Familles du nord","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Puis 3 coups de 4 au hasard ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["deg","cible",20]]],["deg","hasard",4,3],["affaiblit","cible",2],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Affaiblissement","Condition","Exil","Prix"],
 "ambiance":"Chaque famille a gravé sa marque au burin sur ses tôles, et chacune trouve la marque des autres mal placée.",
 "budget":"25 / 28 (−11 %)"},
{"id":"DON018-moins-5","zone":"DON018","pole":"-","palier":5,"nom":"La Querelle des tôles","cout":2,"cible":0,
 "effet":"6 dégâts à tous les ennemis ; tous les ennemis sont marqués : +1 par coup reçu ; +2 mana de Feu ; le héros gagne 8 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","tous",6],["vulnerable","tous",1],["mana","Feu",2],["garde","heros",8],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Marque","Garde","Mana","Exil","Prix"],
 "ambiance":"On se bat à coups de barre de fer dans la cale centrale ; la coque résonne comme une cloche.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"DON018-moins-6","zone":"DON018","pole":"-","palier":6,"nom":"La Serrure de la coque","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Puis 5 coups de 3 au hasard ; riposte 7 jusqu'à votre prochain tour. Prix : cette carte s'exile ; défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["deg","cible",20]]],["deg","hasard",3,5],["riposte",7],["exil"],["prixDefausse",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Riposte","Condition","Exil","Prix"],
 "ambiance":"La serrure a été forgée dans la coque même ; elle est plus lourde que la porte qu'elle ferme.",
 "budget":"33 / 36 (−8 %)"},
{"id":"DON018-moins7","zone":"DON018","pole":"-","palier":7,"nom":"La Coque rouillée","cout":2,"cible":0,
 "effet":"Le fer retourne au sable. 8 à tous ; chaque ennemi −2 d'attaque ; tous hésitent ; soin du héros 12. Pose Sang. Si Abîme (consommée) : riposte 6 ; 4 à tous ; piochez 1 ; +2 mana de Feu. Prix : cette carte s'exile ; défaussez 1 carte.",
 "ops":[["deg","tous",8],["affaiblit","tous",2],["hesite","tous"],["soin","heros",12],["pose","Sang"],["reveil","Abîme",true,[["riposte",6],["deg","tous",4],["pioche",1],["mana","Feu",2]]],["exil"],["prixDefausse",1]],
 "tags":["Donjon","Feu","Forme ultime −7","Dégâts","Affaiblissement","Contrôle","Riposte","Soin","Pioche","Mana","Exil","Combo","Pose Sang","Réveil Abîme","Prix"],
 "ambiance":"La coque n'est plus qu'une dentelle de rouille ; le vent de la savane la traverse.",
 "budget":"45,8 sans combo ; réveil +30,8 (67 %)"},
{"id":"DON018-plus-1","zone":"DON018","pole":"+","palier":1,"nom":"L'Acacia de la porte","cout":1,"cible":1,
 "effet":"Le héros se soigne de 8 ; la cible est marquée : +1 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",8],["vulnerable","cible",1],["prixPV",1]],
 "tags":["Donjon","Feu","Pôle +","Marque","Soin","Prix"],
 "ambiance":"Anaqqiq a choisi le plus vieil acacia de la colline, et l'a abattu en lui demandant pardon.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON018-plus-2","zone":"DON018","pole":"+","palier":2,"nom":"Le Guet de la savane","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 12 dégâts à la cible. Puis le héros se soigne de 5 ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["deg","cible",12]]],["soin","heros",5],["riposte",2],["prixPV",2]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les buffles passent au large de la coque ; un guetteur, sur le pont, crie quand ils approchent.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON018-plus-3","zone":"DON018","pole":"+","palier":3,"nom":"La Serrure de bois","cout":2,"cible":1,
 "effet":"Le héros se soigne de 13 ; le héros gagne 8 de garde ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["soin","heros",13],["garde","heros",8],["hesite","cible"],["exil"]],
 "tags":["Donjon","Feu","Pôle +","Contrôle","Garde","Soin","Exil","Prix"],
 "ambiance":"Une serrure d'acacia, à chevilles, que seule la clé d'Anaqqiq sait soulever dans le bon ordre.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"DON018-plus-4","zone":"DON018","pole":"+","palier":4,"nom":"La Clé d'Anaqqiq","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 20 dégâts à la cible. Puis le héros se soigne de 12 ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["deg","cible",20]]],["soin","heros",12],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Anaqqiq porte la clé au cou, sur un lacet de cuir, et dort avec la main fermée dessus.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON018-plus-5","zone":"DON018","pole":"+","palier":5,"nom":"Le Seuil","cout":2,"cible":1,
 "effet":"Le héros se soigne de 16 ; la cible est marquée : +2 par coup reçu ; piochez 1 carte ; le héros gagne 8 de garde. Prix : le héros perd 3 PV.",
 "ops":[["soin","heros",16],["vulnerable","cible",2],["pioche",1],["garde","heros",8],["prixPV",3]],
 "tags":["Donjon","Feu","Pôle +","Marque","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le seuil est usé par les pieds de ceux qui attendent ; on y voit encore des taches de bataille.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"DON018-plus-6","zone":"DON018","pole":"+","palier":6,"nom":"L'Entrée payante","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 20 dégâts à la cible. Puis le héros se soigne de 14 ; la cible brûle : 3 par tour pendant 3 tours ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","pietine",[["deg","cible",20]]],["soin","heros",14],["brulure","cible",3,3],["riposte",2],["exil"]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Brûlure","Riposte","Soin","Condition","Exil","Prix"],
 "ambiance":"Pour entrer tailler sa lame, on donne une peau à Anaqqiq ; il les empile contre la porte.",
 "budget":"34 / 36 (−6 %)"},
{"id":"DON018-plus7","zone":"DON018","pole":"+","palier":7,"nom":"La Porte debout","cout":2,"cible":1,
 "effet":"La porte tient seule. 14 à la cible ; soin du héros 18 ; héros +10 de garde ; chaque ennemi −2 d'attaque. Pose Racine. Si Sceau (consommée) : soin du héros 14 ; 12 à la cible ; piochez 1. Prix : héros −6 PV.",
 "ops":[["deg","cible",14],["soin","heros",18],["garde","heros",10],["affaiblit","tous",2],["pose","Racine"],["reveil","Sceau",true,[["soin","heros",14],["deg","cible",12],["pioche",1]]],["prixPV",6]],
 "tags":["Donjon","Feu","Forme ultime +7","Dégâts","Affaiblissement","Garde","Soin","Pioche","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"La porte d'acacia, immense et sculptée, tient seule dans l'herbe ; plus de coque derrière.",
 "budget":"47,2 sans combo ; réveil +30 (64 %)"}
]
```

---

## 3. Le Yoriai d'Itegata (ASS026) — Assemblée · Mangrove · Eau · Japonaise féodale

Forme du récit : le précédent (le yoriai offre au seigneur la glace d'un hiver exceptionnel, et elle devient redevance). Recette du −7 : le silence (la mangrove figée sous le givre, les barques prises) ; du +7 : le feu (tous les chaudrons à sel allumés la nuit le long des vasières). Même couple que C DON084 : ni grotte murée, ni éclair.

**Glace (−)** : la plaque de glace → le chef de maison → la paille roulée → le seigneur Ōkōchi → le registre des redevances → la glacière achetée → le Givre de la mangrove. Fil mécanique : **soin des alliés** (place ; jamais principal sur la Glace), Lois, pioche en appoint, crochet « le héros a moins de la moitié de ses PV » (jamais de PV en prix sur ce pôle) ; prix : défausse et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, pioche 4, dégâts ciblés 4, garde du héros 2, affaiblissement 2, marque 2, hésitation 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (défausse 5, garde ennemie 4).

**Feu (+)** : le feu du seigneur → la braise des chaudrons → le sel bouilli → le bois de mangrove → la nuit des chaudrons → le tribut d'été → les Chaudrons allumés. Fil mécanique : **écho** (place rare, 4 cartes au premier niveau : +1, +3, +5, +7 ; les cartes +2, +4 et +6, sans écho, sont faites pour être doublées), Lois, brûlure et soin du héros en appoint, crochet « la cible hésite déjà » (une seule carte la fait hésiter, après son `si`) ; prix : PV et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : écho 4, brûlure 4, dégâts ciblés 4, soin du héros 3, riposte 2, pioche 2, garde du héros 2, mana 2, affaiblissement 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (PV 5, soin ennemi 3).

```json
{"fiche":"ASS026","nom":"Le Yoriai d'Itegata",
 "recit":"Il ne gèle jamais à Itegata, entre les palétuviers. Un hiver pourtant, l'eau des vasières prit en plaques, et le yoriai des chefs de maison, émerveillé, vota d'envoyer la plus belle au seigneur Ōkōchi, roulée dans la paille. Le seigneur fut ravi d'une glace venue d'un pays si chaud. Il l'inscrivit au registre des redevances. Depuis, Itegata achète chaque été sa glace aux villages de montagne, au prix du sel qu'elle fait bouillir tout l'hiver dans ses chaudrons. Le gel n'est jamais revenu. Le tribut, si.",
 "pal":["La mangrove est figée sous le givre ; les barques sont prises dans les vasières, les racines blanches, et personne ne parle dans les maisons sur pilotis.","Une glacière creusée dans la berge, couverte de paille ; les chefs de maison comptent les blocs achetés, et les enfants n'ont pas le droit d'y toucher.","Un village sur pilotis entre les palétuviers ; des chaudrons à sel sur la vasière, une maison du yoriai au bout du ponton, et la marée qui monte.","Les chaudrons fument tout le long des vasières ; on porte le bois de mangrove à dos d'homme, et le sel s'empile en cônes devant chaque maison.","Tous les chaudrons sont allumés en même temps dans la nuit ; la vasière entière brille de feux, et la mangrove recule devant la chaleur."],
 "pm":"Glace","pp":"Feu"}
```

```json
[
{"id":"ASS026-moins-1","zone":"ASS026","pole":"-","palier":1,"nom":"La Plaque de glace","cout":1,"cible":0,
 "effet":"Loi : vos alliés se soignent de 5 ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","allies",5],["pioche",1],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Soin","Pioche","Prix"],
 "ambiance":"Un matin, l'eau de la vasière avait pris en plaques fines ; les enfants d'Itegata les levaient.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ASS026-moins-2","zone":"ASS026","pole":"-","palier":2,"nom":"Le Chef de maison","cout":1,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, vos alliés se soignent de 10. Puis piochez 1 carte ; le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","allies",10]]],["pioche",1],["garde","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Chaque chef de maison vote au yoriai en frappant le plancher du talon, une fois pour oui.",
 "budget":"11,7 / 12,5 (−6 %)"},
{"id":"ASS026-moins-3","zone":"ASS026","pole":"-","palier":3,"nom":"La Paille roulée","cout":2,"cible":1,
 "effet":"Loi : 6 dégâts à la cible ; vos alliés se soignent de 10 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",6],["soin","allies",10],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Affaiblissement","Soin","Prix"],
 "ambiance":"On roula la plus belle plaque dans la paille de riz, sur la barque la plus rapide.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS026-moins-4","zone":"ASS026","pole":"-","palier":4,"nom":"Le Seigneur Ōkōchi","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, vos alliés se soignent de 12. Puis 10 dégâts à la cible ; piochez 1 carte ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","blesse",[["soin","allies",12]]],["deg","cible",10],["pioche",1],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le seigneur Ōkōchi tint la glace dans sa paume jusqu'à ce qu'elle coule entre ses doigts, et sourit.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS026-moins-5","zone":"ASS026","pole":"-","palier":5,"nom":"Le Registre des redevances","cout":2,"cible":1,
 "effet":"Loi : 6 dégâts à la cible ; vos alliés se soignent de 14 ; la cible hésite ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",6],["soin","allies",14],["hesite","cible"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Contrôle","Soin","Pioche","Prix"],
 "ambiance":"Le scribe du château inscrivit la glace d'Itegata entre le riz et le sel, d'une écriture soignée.",
 "budget":"33 / 32 (+3 %)"},
{"id":"ASS026-moins-6","zone":"ASS026","pole":"-","palier":6,"nom":"La Glacière achetée","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, vos alliés se soignent de 14. Puis 14 dégâts à la cible ; la cible brûle : 3 par tour pendant 3 tours ; le héros gagne 8 de garde. Prix : chaque ennemi gagne 1 de garde ; défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","allies",14]]],["deg","cible",14],["brulure","cible",3,3],["garde","heros",8],["ennemiGarde",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Brûlure","Garde","Soin","Condition","Prix"],
 "ambiance":"Les montagnards descendent la glace en été et repartent avec le sel ; nul ne leur dit pourquoi.",
 "budget":"34,9 / 36 (−3 %)"},
{"id":"ASS026-moins7","zone":"ASS026","pole":"-","palier":7,"nom":"Le Givre de la mangrove","cout":2,"cible":1,
 "effet":"La mangrove ne bouge plus. Alliés soignés de 19 ; tous hésitent ; chaque ennemi −2 d'attaque. Pose Givre. Si Racine (consommée) : alliés soignés de 10 ; riposte 4 ; la cible marquée (+2). Prix : défaussez 1 carte ; ennemis +1 de garde.",
 "ops":[["soin","allies",19],["hesite","tous"],["affaiblit","tous",2],["pose","Givre"],["reveil","Racine",true,[["soin","allies",10],["riposte",4],["vulnerable","cible",2]]],["prixDefausse",1],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Forme ultime −7","Marque","Affaiblissement","Contrôle","Riposte","Soin","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"La mangrove figée sous le givre, les barques prises dans la vase blanche ; Itegata se tait.",
 "budget":"45,7 sans combo ; réveil +29 (63 %)"},
{"id":"ASS026-plus-1","zone":"ASS026","pole":"+","palier":1,"nom":"Le Feu du seigneur","cout":1,"cible":1,
 "effet":"Loi : la prochaine carte de zone de ce tour compte double ; la cible brûle : 2 par tour pendant 3 tours. Prix : le héros perd 2 PV.",
 "ops":[["echo"],["brulure","cible",2,3],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Brûlure","Écho","Prix"],
 "ambiance":"Le yoriai a voté que le feu d'hiver brûlerait pour le sel du seigneur, avant les maisons.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS026-plus-2","zone":"ASS026","pole":"+","palier":2,"nom":"La Braise des chaudrons","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 12 dégâts à la cible. Puis piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","hesite",[["deg","cible",12]]],["pioche",1],["riposte",2],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"On garde la braise sous la cendre des chaudrons ; le sel ne doit pas refroidir la nuit.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS026-plus-3","zone":"ASS026","pole":"+","palier":3,"nom":"Le Sel bouilli","cout":2,"cible":1,
 "effet":"Loi : 10 dégâts à la cible ; la prochaine carte de zone de ce tour compte double ; le héros se soigne de 6 ; le héros gagne 6 de garde. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",10],["echo"],["soin","heros",6],["garde","heros",6],["prixPV",3]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Garde","Soin","Écho","Prix"],
 "ambiance":"L'eau de mer bout tout l'hiver dans les chaudrons d'Itegata ; le sel monte en croûte grise.",
 "budget":"23,8 / 24 (−1 %)"},
{"id":"ASS026-plus-4","zone":"ASS026","pole":"+","palier":4,"nom":"Le Bois de mangrove","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 3 tours ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["si","hesite",[["deg","cible",20]]],["brulure","tous",2,3],["hesite","cible"],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Brûlure","Contrôle","Condition","Prix"],
 "ambiance":"Pour chauffer les chaudrons, on coupe les palétuviers rang après rang, et la mer avance dans les trouées.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ASS026-plus-5","zone":"ASS026","pole":"+","palier":5,"nom":"La Nuit des chaudrons","cout":2,"cible":1,
 "effet":"Loi : la prochaine carte de zone de ce tour compte double ; la cible brûle : 4 par tour pendant 3 tours ; +1 mana d'Eau ; riposte 4 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["echo"],["brulure","cible",4,3],["mana","Eau",1],["riposte",4],["affaiblit","cible",2],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Brûlure","Affaiblissement","Riposte","Écho","Mana","Prix"],
 "ambiance":"Les chaudrons fument toute la nuit ; les chefs de maison veillent à tour de rôle, le visage rouge.",
 "budget":"33 / 32 (+3 %)"},
{"id":"ASS026-plus-6","zone":"ASS026","pole":"+","palier":6,"nom":"Le Tribut d'été","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; le héros se soigne de 10 ; +2 mana d'Eau ; l'attaque de chaque ennemi baisse de 1. Prix : le héros perd 3 PV ; chaque ennemi se soigne de 1.",
 "ops":[["si","hesite",[["deg","cible",20]]],["vulnerable","cible",2],["soin","heros",10],["mana","Eau",2],["affaiblit","tous",1],["prixPV",3],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Marque","Affaiblissement","Soin","Mana","Condition","Prix"],
 "ambiance":"Chaque été, la barque d'Itegata remonte au château avec sa glace des montagnes et son sel de mer.",
 "budget":"33,6 / 36 (−7 %)"},
{"id":"ASS026-plus7","zone":"ASS026","pole":"+","palier":7,"nom":"Les Chaudrons allumés","cout":2,"cible":1,
 "effet":"Toute la vasière brûle. La prochaine carte de zone compte double ; tous brûlent (3 × 3 tours) ; soin du héros 15 ; héros +10 de garde. Pose Braise. Si Sang (consommée) : la cible brûle (5 × 4 tours) ; piochez 2. Prix : héros −3 PV.",
 "ops":[["echo"],["brulure","tous",3,3],["soin","heros",15],["garde","heros",10],["pose","Braise"],["reveil","Sang",true,[["brulure","cible",5,4],["pioche",2]]],["prixPV",3]],
 "tags":["Assemblée","Eau","Forme ultime +7","Brûlure","Garde","Soin","Pioche","Écho","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"Tous les chaudrons d'Itegata brûlent en même temps ; la vasière entière brille, et la mangrove recule.",
 "budget":"45,8 sans combo ; réveil +28 (61 %)"}
]
```

---

## 4. Le Darbar de Nindabad (ASS145) — Assemblée · Oasis · Sève · Moghole

Forme du récit : le simulacre (le vizir fait saluer un rideau à la place de l'empereur endormi). Recette du −7 : l'immobilité (le darbar endormi debout devant le rideau) ; du +7 : le geste (le rideau tombé, toute la cour debout devant la fenêtre ouverte).

**Sommeil (−)** : le balcon vide → le sommeil de l'empereur → le rideau brodé → les médecins → le salut au rideau → le vizir Itimad Khan → le Darbar endormi. Fil mécanique : **marque** (place ; jamais principale sur le Sommeil), Lois, hésitation en appoint (celle de tous jamais deux cartes de suite), crochet « la cible brûle déjà » (brûlure sur une seule carte) ; prix : défausse et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, hésitation 4, dégâts ciblés 4, pioche 2, soin du héros 2, affaiblissement 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (défausse 5, soin ennemi 4).

**Éveil (+)** : le tambour du matin → la fenêtre ouverte → le lever de la cour → les requêtes jugées → l'impôt levé → la guerre gagnée → l'Empereur éveillé. Fil mécanique : **pioche** (place, 2e emploi sur l'Éveil après B ASS078, qui lisait « la cible prend son élan » et payait en PV), Lois, mana en appoint, crochet « vous avez en main une carte de coût 0 » ; prix : garde ennemie et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, mana 4, dégâts ciblés 4, riposte 2, marque 2, affaiblissement 2, garde du héros 2, hésitation 2, soin du héros 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (garde ennemie 6, défausse 3).

```json
{"fiche":"ASS145","nom":"Le Darbar de Nindabad",
 "recit":"Chaque matin, l'empereur se montrait au balcon de Nindabad, et le darbar savait ainsi qu'il vivait. Quand il tomba dans un sommeil dont les médecins ne le tiraient pas, le vizir Itimad Khan fit tendre au balcon un rideau, et ordonna qu'on salue le rideau. Le darbar salua. On rendit la justice au nom du rideau, on leva l'impôt, on gagna une guerre. L'empereur s'éveilla au bout d'une saison et trouva l'empire mieux tenu que jamais. Il garda le rideau, et envoya Itimad Khan gouverner une province de sable.",
 "pal":["Toute la cour dort debout dans le jardin, tournée vers le rideau ; les jets d'eau se sont tus, et les paons dorment sur les marches du balcon.","Les courtisans saluent un rideau brodé d'or ; les médecins chuchotent sous les arcades, et les requêtes s'empilent sans que personne les lise.","Un palais de grès rouge au bord de l'oasis ; un balcon au-dessus du jardin à canaux, des cyprès, et la cour assemblée au pied des marches.","Les tambours sonnent sous le balcon dès l'aube ; les secrétaires courent entre les canaux, et chaque fenêtre du palais est ouverte.","Le rideau est tombé dans le canal ; toute la cour, debout et bruyante, regarde un empereur bien réveillé qui salue le jardin de la main."],
 "pm":"Sommeil","pp":"Éveil"}
```

```json
[
{"id":"ASS145-moins-1","zone":"ASS145","pole":"-","palier":1,"nom":"Le Balcon vide","cout":1,"cible":1,
 "effet":"Loi : la cible est marquée : +3 par coup reçu ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",3],["hesite","cible"],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Marque","Contrôle","Prix"],
 "ambiance":"Le darbar attend au pied du balcon de Nindabad ; personne ne s'y montre, et personne n'ose partir.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS145-moins-2","zone":"ASS145","pole":"-","palier":2,"nom":"Le Sommeil de l'empereur","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",10]]],["vulnerable","cible",2],["pioche",1],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Marque","Pioche","Condition","Prix"],
 "ambiance":"L'empereur dort sur ses coussins depuis la nouvelle lune ; il respire, on n'en sait pas plus.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS145-moins-3","zone":"ASS145","pole":"-","palier":3,"nom":"Le Rideau brodé","cout":2,"cible":1,
 "effet":"Loi : tous les ennemis sont marqués : +2 par coup reçu ; la cible hésite ; la cible brûle : 2 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","tous",2],["hesite","cible"],["brulure","cible",2,3],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Brûlure","Marque","Contrôle","Prix"],
 "ambiance":"Itimad Khan fit tendre au balcon un rideau brodé d'or, assez épais pour n'y voir personne.",
 "budget":"21,2 / 24 (−12 %)"},
{"id":"ASS145-moins-4","zone":"ASS145","pole":"-","palier":4,"nom":"Les Médecins","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; le héros se soigne de 10. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",18]]],["vulnerable","cible",3],["soin","heros",10],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Marque","Soin","Condition","Prix"],
 "ambiance":"Les médecins de Nindabad brûlent des résines au chevet de l'empereur et rédigent des rapports qui se ressemblent.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS145-moins-5","zone":"ASS145","pole":"-","palier":5,"nom":"Le Salut au rideau","cout":2,"cible":1,
 "effet":"Loi : 10 dégâts à la cible ; tous les ennemis sont marqués : +2 par coup reçu ; tous les ennemis hésitent ; piochez 1 carte. Prix : défaussez 1 carte au hasard ; chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",10],["vulnerable","tous",2],["hesite","tous"],["pioche",1],["prixDefausse",1],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Marque","Contrôle","Pioche","Prix"],
 "ambiance":"Chaque matin, le darbar s'incline devant le rideau d'or ; le vizir, à sa droite, rend le salut.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"ASS145-moins-6","zone":"ASS145","pole":"-","palier":6,"nom":"Le Vizir Itimad Khan","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Puis la cible est marquée : +4 par coup reçu ; l'attaque de la cible baisse de 3 ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["deg","cible",20]]],["vulnerable","cible",4],["affaiblit","cible",3],["garde","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Marque","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Itimad Khan signe au nom du rideau, d'une encre que personne d'autre n'a le droit d'utiliser.",
 "budget":"34,4 / 36 (−4 %)"},
{"id":"ASS145-moins7","zone":"ASS145","pole":"-","palier":7,"nom":"Le Darbar endormi","cout":2,"cible":1,
 "effet":"La cour dort debout. Tous marqués (+3) ; tous hésitent ; soin du héros 14 ; riposte 4. Pose Sceau. Si Givre (consommée) : la cible marquée (+4) ; chaque ennemi −2 d'attaque ; +1 mana de Sève. Prix : défaussez 1 carte ; ennemis soignés de 1.",
 "ops":[["vulnerable","tous",3],["hesite","tous"],["soin","heros",14],["riposte",4],["pose","Sceau"],["reveil","Givre",true,[["vulnerable","cible",4],["affaiblit","tous",2],["mana","Sève",1]]],["prixDefausse",1],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Forme ultime −7","Marque","Affaiblissement","Contrôle","Riposte","Soin","Mana","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Toute la cour de Nindabad dort debout devant le rideau ; les paons dorment sur les marches.",
 "budget":"45,8 sans combo ; réveil +28,2 (62 %)"},
{"id":"ASS145-plus-1","zone":"ASS145","pole":"+","palier":1,"nom":"Le Tambour du matin","cout":1,"cible":0,
 "effet":"Loi : piochez 2 cartes ; +1 mana de Sève. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["pioche",2],["mana","Sève",1],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Pioche","Mana","Prix"],
 "ambiance":"Le grand tambour sonne sous le balcon à l'aube, et tout Nindabad sait que la journée a commencé.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS145-plus-2","zone":"ASS145","pole":"+","palier":2,"nom":"La Fenêtre ouverte","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["pioche",1],["riposte",2],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Un serviteur ouvre la fenêtre du balcon et recule aussitôt, pour qu'on ne le prenne pas pour un autre.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS145-plus-3","zone":"ASS145","pole":"+","palier":3,"nom":"Le Lever de la cour","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; +2 mana de Sève ; l'attaque de la cible baisse de 2 ; tous les ennemis sont marqués : +1 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["mana","Sève",2],["affaiblit","cible",2],["vulnerable","tous",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Marque","Affaiblissement","Pioche","Mana","Prix"],
 "ambiance":"Les courtisans se lèvent tous ensemble dans le jardin, dans un froissement de soie qu'on entend des canaux.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS145-plus-4","zone":"ASS145","pole":"+","palier":4,"nom":"Les Requêtes jugées","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis piochez 2 cartes ; le héros gagne 8 de garde ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["pioche",2],["garde","heros",8],["affaiblit","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les requêtes jugées au nom du rideau sont scellées d'une cire verte qu'on n'avait jamais vue.",
 "budget":"28,4 / 28 (+1 %)"},
{"id":"ASS145-plus-5","zone":"ASS145","pole":"+","palier":5,"nom":"L'Impôt levé","cout":2,"cible":1,
 "effet":"Loi : 10 dégâts à la cible ; piochez 3 cartes ; la cible hésite ; le héros se soigne de 10. Prix : défaussez 1 carte au hasard ; chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",10],["pioche",3],["hesite","cible"],["soin","heros",10],["prixDefausse",1],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Contrôle","Soin","Pioche","Prix"],
 "ambiance":"Les collecteurs partent de Nindabad avec des ordres signés du vizir, et reviennent avec plus qu'on n'espérait.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ASS145-plus-6","zone":"ASS145","pole":"+","palier":6,"nom":"La Guerre gagnée","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis piochez 2 cartes ; riposte 4 jusqu'à votre prochain tour ; +2 mana de Sève ; 2 coups de 3 au hasard. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["pioche",2],["riposte",4],["mana","Sève",2],["deg","hasard",3,2],["ennemiGarde",2]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Riposte","Pioche","Mana","Condition","Prix"],
 "ambiance":"Une guerre fut gagnée au nom du rideau ; on en rapporta des étendards sans savoir à qui les montrer.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS145-plus7","zone":"ASS145","pole":"+","palier":7,"nom":"L'Empereur éveillé","cout":2,"cible":1,
 "effet":"Le rideau tombe. Piochez 3 ; +2 mana de Sève ; tous hésitent ; héros +14 de garde ; 6 à tous. Pose Abîme. Si Sceau (consommée) : piochez 2 ; soin du héros 12 ; la cible marquée (+3). Prix : défaussez 1 carte ; ennemis +1 de garde.",
 "ops":[["pioche",3],["mana","Sève",2],["hesite","tous"],["garde","heros",14],["deg","tous",6],["pose","Abîme"],["reveil","Sceau",true,[["pioche",2],["soin","heros",12],["vulnerable","cible",3]]],["prixDefausse",1],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Marque","Contrôle","Garde","Soin","Pioche","Mana","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Le rideau est tombé dans le canal ; l'empereur, réveillé, salue un jardin qui ne l'attendait plus.",
 "budget":"46,4 sans combo ; réveil +29 (62 %)"}
]
```

---

## 5. L'Ayllu de Mullupata (ASS085) — Assemblée · Archipel · Eau · Inca

*Note du critique (lot 12) : la chute du récit change. « Sayri … fut nommé gardien des momies de l'Inca, et ne revit pas l'île » était la troisième promotion qui éloigne du lot chez A (Bayartu fait gouverneur, Itimad Khan envoyé gouverner une province), après « muté avant le froid » au lot 11. La chute dit maintenant le prix de la ruse : la capitale, édifiée, demande plus de coquilles.*

Forme du récit : l'otage substitué (le kuraka envoie à la capitale des os de lamas parés de coquilles à la place des ancêtres ; la capitale, édifiée, réclame plus de coquilles). Recette du −7 : l'ordre des morts (les grottes ouvertes, les os rangés en murs) ; du +7 : la démesure (l'île couverte de coquilles rouges jusqu'aux toits).

**Os (−)** : les grottes des ancêtres → les os de lama → le conseil devant les grottes → le kuraka Sayri → les coquilles cousues → le convoi vers la capitale → les Murs d'os. Fil mécanique : **garde du héros** (reprise déclarée, 2e emploi sur l'Os après B ANT160, qui lisait « la cible prend son élan » et payait en PV), Lois, affaiblissement en appoint, crochet « la cible hésite déjà » (une seule carte la fait hésiter, après son `si`) ; prix : défausse et exil, aucun PV. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, affaiblissement 4, dégâts ciblés 4, pioche 2, riposte 2, exil 2, mana 2, soin du héros 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (défausse 5, exil 2).

**Corail (+)** : la coquille rouge → les plongeurs → le mullu de l'Inca → le récif rouge → les offrandes → la coquille de la capitale → l'Île de coquilles. Fil mécanique : **pioche** (vocation d'Assemblée, 2e emploi sur le Corail après C ASS002, sans crochet, payé en garde et soin ennemis), Lois, soin du héros en appoint, crochet « vous avez en main une carte de coût 0 » ; prix : défausse et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, soin du héros 4, dégâts ciblés 3, marque 2, garde du héros 2, mana 2, hésitation 2, affaiblissement 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (défausse 5, PV 4).

```json
{"fiche":"ASS085","nom":"L'Ayllu de Mullupata",
 "recit":"Les gens de Mullupata plongeaient pour le mullu, la coquille rouge que l'Inca exigeait pour ses offrandes. Quand la capitale réclama aussi les momies des ancêtres de l'île, pour les garder près des siennes, l'ayllu tint conseil devant les grottes. Le kuraka Sayri fit envoyer des os de lamas, emmaillotés et parés de coquilles. À la capitale, personne ne s'en aperçut, et on les honora longtemps. Les ancêtres de Mullupata restèrent dans leurs grottes. La capitale cite depuis Mullupata en exemple de piété, et lui réclame chaque année un peu plus de coquilles.",
 "pal":["Les grottes sont ouvertes au vent de mer ; les os y sont rangés en murs jusqu'à la voûte, et personne ne sait plus à qui ils sont.","Des momies assises dans les grottes de la falaise, emmaillotées de laine ; des paniers d'os de lamas au soleil, et des femmes qui cousent des coquilles.","Une île de roche noire dans l'archipel ; des terrasses de pierre sèche, des grottes au flanc de la falaise et des radeaux de jonc tirés sur la plage.","Les plongeurs remontent le mullu par paniers entiers ; on étale les coquilles rouges sur les terrasses, et les porteurs de la capitale attendent.","Les coquilles rouges couvrent l'île jusqu'aux toits ; les sentiers, les murs et les radeaux en sont pavés, et la mer autour paraît pâle."],
 "pm":"Os","pp":"Corail"}
```

```json
[
{"id":"ASS085-moins-1","zone":"ASS085","pole":"-","palier":1,"nom":"Les Grottes des ancêtres","cout":1,"cible":1,
 "effet":"Loi : le héros gagne 10 de garde ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",10],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Garde","Prix"],
 "ambiance":"Dans les grottes de Mullupata, les ancêtres sont assis face à la mer, pour voir revenir les plongeurs.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS085-moins-2","zone":"ASS085","pole":"-","palier":2,"nom":"Les Os de lama","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis le héros gagne 8 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",10]]],["garde","heros",8],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"On fait blanchir au soleil des os de lamas, choisis longs et droits, sur les terrasses du haut.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ASS085-moins-3","zone":"ASS085","pole":"-","palier":3,"nom":"Le Conseil devant les grottes","cout":2,"cible":0,
 "effet":"Loi : le héros gagne 16 de garde ; l'attaque de chaque ennemi baisse de 1 ; riposte 3 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["garde","heros",16],["affaiblit","tous",1],["riposte",3],["exil"]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Riposte","Garde","Exil","Prix"],
 "ambiance":"L'ayllu siège sur les rochers devant les grottes, pour que les ancêtres entendent ce qu'on décide pour eux.",
 "budget":"22,4 / 24 (−7 %)"},
{"id":"ASS085-moins-4","zone":"ASS085","pole":"-","palier":4,"nom":"Le Kuraka Sayri","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis le héros gagne 14 de garde ; la cible hésite ; +1 mana d'Eau. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",20]]],["garde","heros",14],["hesite","cible"],["mana","Eau",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Contrôle","Garde","Mana","Condition","Prix"],
 "ambiance":"Sayri parle peu au conseil ; il a déjà fait mesurer les os de lamas à la taille des momies.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ASS085-moins-5","zone":"ASS085","pole":"-","palier":5,"nom":"Les Coquilles cousues","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 20 de garde ; l'attaque de la cible baisse de 3 ; le héros se soigne de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",20],["affaiblit","cible",3],["soin","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Garde","Soin","Prix"],
 "ambiance":"Les femmes de l'île cousent le mullu sur les maillots, coquille contre coquille, sans laisser voir la laine.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS085-moins-6","zone":"ASS085","pole":"-","palier":6,"nom":"Le Convoi vers la capitale","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis le héros gagne 20 de garde ; riposte 3 jusqu'à votre prochain tour ; +1 mana d'Eau. Prix : cette carte s'exile.",
 "ops":[["si","hesite",[["deg","cible",20]]],["garde","heros",20],["riposte",3],["mana","Eau",1],["exil"]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Riposte","Garde","Mana","Condition","Exil","Prix"],
 "ambiance":"Le convoi des faux ancêtres quitte Mullupata en radeau, et toute l'île pleure comme il faut sur la plage.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS085-moins7","zone":"ASS085","pole":"-","palier":7,"nom":"Les Murs d'os","cout":2,"cible":1,
 "effet":"Les morts font le mur. 12 à la cible ; héros +24 de garde ; chaque ennemi −2 d'attaque ; la cible marquée (+2). Pose Racine. Si Sang (consommée) : héros +18 de garde ; soin du héros 12 ; piochez 1. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",12],["garde","heros",24],["affaiblit","tous",2],["vulnerable","cible",2],["pose","Racine"],["reveil","Sang",true,[["garde","heros",18],["soin","heros",12],["pioche",1]]],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Marque","Affaiblissement","Garde","Soin","Pioche","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les grottes ouvertes au vent de mer ; les os de Mullupata y sont rangés en murs jusqu'à la voûte.",
 "budget":"47,4 sans combo ; réveil +30,4 (64 %)"},
{"id":"ASS085-plus-1","zone":"ASS085","pole":"+","palier":1,"nom":"La Coquille rouge","cout":1,"cible":0,
 "effet":"Loi : piochez 2 cartes ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["soin","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Soin","Pioche","Prix"],
 "ambiance":"Le mullu vit au fond, sur les roches, hérissé de piquants rouges ; on le détache au couteau d'os.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS085-plus-2","zone":"ASS085","pole":"+","palier":2,"nom":"Les Plongeurs","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis piochez 1 carte ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["pioche",1],["soin","heros",4],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les plongeurs de Mullupata descendent une pierre serrée contre le ventre, et la lâchent pour remonter.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS085-plus-3","zone":"ASS085","pole":"+","palier":3,"nom":"Le Mullu de l'Inca","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; la cible est marquée : +2 par coup reçu ; le héros gagne 10 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["vulnerable","cible",2],["garde","heros",10],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Marque","Riposte","Garde","Pioche","Prix"],
 "ambiance":"Chaque coquille montée à la capitale porte un nœud de laine qui dit de quelle île elle vient.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS085-plus-4","zone":"ASS085","pole":"+","palier":4,"nom":"Le Récif rouge","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis piochez 2 cartes ; le héros se soigne de 10. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["pioche",2],["soin","heros",10],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"À marée basse, le récif de Mullupata est rouge de coquilles ouvertes, et les oiseaux s'y disputent.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS085-plus-5","zone":"ASS085","pole":"+","palier":5,"nom":"Les Offrandes","cout":2,"cible":1,
 "effet":"Loi : piochez 3 cartes ; +2 mana d'Eau ; la cible hésite ; l'attaque de la cible baisse de 2 ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",3],["mana","Eau",2],["hesite","cible"],["affaiblit","cible",2],["soin","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Affaiblissement","Contrôle","Soin","Pioche","Mana","Prix"],
 "ambiance":"On jette les coquilles rouges dans les sources de la capitale, pour que l'eau reste douce toute l'année.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ASS085-plus-6","zone":"ASS085","pole":"+","palier":6,"nom":"La Coquille de la capitale","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis piochez 2 cartes ; la cible brûle : 3 par tour pendant 3 tours ; le héros gagne 14 de garde. Prix : le héros perd 2 PV ; défaussez 1 carte au hasard.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["pioche",2],["brulure","cible",3,3],["garde","heros",14],["prixPV",2],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Brûlure","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les porteurs de la capitale pèsent le mullu sur la plage, et écrivent le poids sur leurs cordelettes.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"ASS085-plus7","zone":"ASS085","pole":"+","palier":7,"nom":"L'Île de coquilles","cout":2,"cible":0,
 "effet":"L'île devient offrande. Piochez 3 ; tous marqués (+2) ; +2 mana d'Eau ; 9 à tous. Pose Sang. Si Racine (consommée) : piochez 2 ; chaque ennemi −2 d'attaque ; tous hésitent. Prix : défaussez 1 carte ; héros −2 PV.",
 "ops":[["pioche",3],["vulnerable","tous",2],["mana","Eau",2],["deg","tous",9],["pose","Sang"],["reveil","Racine",true,[["pioche",2],["affaiblit","tous",2],["hesite","tous"]]],["prixDefausse",1],["prixPV",2]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Marque","Affaiblissement","Contrôle","Pioche","Mana","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Les coquilles rouges couvrent Mullupata jusqu'aux toits ; la mer autour de l'île paraît pâle.",
 "budget":"46 sans combo ; réveil +30,2 (66 %)"}
]
```

---

## 6. Le Popol Nah de Saktun (ASS087) — Assemblée · Glacier · Glace · Maya

Forme du récit : l'accoutumance (le prêtre envoyé de la cité, malade du balché à son arrivée, en devient le défenseur et le sert aux nouveaux venus). Recette du −7 : le silence (le popol nah fermé, les coupes retournées sur la glace) ; du +7 : la foule (tout Saktun boit à la même jarre au bord du glacier).

**Poison (−)** : la coupe de bienvenue → l'écorce amère → le prêtre Chablé → le breuvage des grottes → le sermon couché → l'habitude prise → les Coupes retournées. Fil mécanique : **mana** (place ; 2 au plus par carte, réveil compris), Lois, affaiblissement en appoint, crochet « la Garde du héros est levée » (une seule carte lève la Garde, sans `si`) ; prix : PV et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, affaiblissement 4, dégâts ciblés 4, pioche 2, brûlure 2, soin du héros 2, marque 2, hésitation 2, riposte 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (PV 6, soin ennemi 3).

**Nectar (+)** : la coupe de l'hôte → le miel des grottes → le prêtre guéri → les envoyés de la cité → la coupe versée → le visage guetté → la Jarre commune. Fil mécanique : **colonne défausse / `defausseAPrix`** (le crochet est lu sur 4 cartes, avant la défausse de la carte ; défausse en prix sur ces 4 cartes), Lois, soin des alliés en appoint ; prix : défausse et PV. Les gros coups du Nectar sont à D au lot (DON118) : pas de vocation ici. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 4, dégâts ciblés 4, pioche 2, riposte 2, soin du héros 2, garde du héros 2, affaiblissement 2, dégâts à tous 2, marque 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 4 ; prix sur 7 cartes (PV 4, défausse 4).

```json
{"fiche":"ASS087","nom":"Le Popol Nah de Saktun",
 "recit":"Le balché de Saktun se brasse au bord du glacier, avec le miel des abeilles des grottes et une écorce amère, et ceux qui n'en ont pas l'habitude en tombent malades plusieurs jours. Le prêtre Chablé, envoyé de la cité pour tenir le popol nah, en but à son arrivée, par politesse. Il prêcha ensuite tout un hiver contre le breuvage, couché. Au printemps, il s'y était fait. C'est lui, aujourd'hui, qui verse le balché aux envoyés de la cité, et qui guette leur visage.",
 "pal":["Le popol nah est fermé ; les coupes sont retournées sur la glace, et personne à Saktun ne boit plus rien que l'eau du glacier.","Des jarres de balché tournées contre le mur ; des malades couchés sur des nattes près du feu, et l'odeur d'écorce qui ne quitte plus la maison.","Une maison du conseil en pierre blanche au bord d'un glacier ; des grottes à abeilles dans la falaise, des jarres au frais dans la glace.","Les abeilles des grottes sortent au soleil ; on verse le balché aux visiteurs dans des coupes peintes, et l'on rit de leur grimace.","Tout Saktun boit à la même jarre au bord du glacier, du prêtre au porteur de glace, et personne ne se rappelle avoir été malade."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"ASS087-moins-1","zone":"ASS087","pole":"-","palier":1,"nom":"La Coupe de bienvenue","cout":1,"cible":1,
 "effet":"Loi : +2 mana de Glace ; l'attaque de la cible baisse de 2. Prix : le héros perd 1 PV.",
 "ops":[["mana","Glace",2],["affaiblit","cible",2],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Affaiblissement","Mana","Prix"],
 "ambiance":"À Saktun, on refuse l'eau à un hôte, jamais le balché ; il le boit debout, devant le popol nah.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS087-moins-2","zone":"ASS087","pole":"-","palier":2,"nom":"L'Écorce amère","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis +1 mana de Glace ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["si","garde",[["deg","cible",10]]],["mana","Glace",1],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"On racle l'écorce à la lame d'obsidienne et on la laisse tremper dans le miel toute une lune.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS087-moins-3","zone":"ASS087","pole":"-","palier":3,"nom":"Le Prêtre Chablé","cout":2,"cible":1,
 "effet":"Loi : +2 mana de Glace ; l'attaque de chaque ennemi baisse de 2 ; la cible brûle : 2 par tour pendant 3 tours. Prix : le héros perd 2 PV.",
 "ops":[["mana","Glace",2],["affaiblit","tous",2],["brulure","cible",2,3],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Brûlure","Affaiblissement","Mana","Prix"],
 "ambiance":"Chablé arriva de la cité avec ses livres pliés, et but par politesse ce qu'on lui tendit.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS087-moins-4","zone":"ASS087","pole":"-","palier":4,"nom":"Le Breuvage des grottes","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis +2 mana de Glace ; la cible est marquée : +2 par coup reçu ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",20]]],["mana","Glace",2],["vulnerable","cible",2],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Soin","Mana","Condition","Prix"],
 "ambiance":"Le balché vieillit dans les grottes à abeilles, au frais, entre la glace et le miel des rayons.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS087-moins-5","zone":"ASS087","pole":"-","palier":5,"nom":"Le Sermon couché","cout":2,"cible":1,
 "effet":"Loi : +2 mana de Glace ; l'attaque de chaque ennemi baisse de 2 ; la cible hésite ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["mana","Glace",2],["affaiblit","tous",2],["hesite","cible"],["garde","heros",8],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Affaiblissement","Contrôle","Garde","Mana","Prix"],
 "ambiance":"Tout un hiver, Chablé prêcha contre le balché depuis sa natte, et le popol nah vint l'écouter poliment.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS087-moins-6","zone":"ASS087","pole":"-","palier":6,"nom":"L'Habitude prise","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis +2 mana de Glace ; l'attaque de la cible baisse de 3 ; riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : chaque ennemi se soigne de 1 ; le héros perd 1 PV.",
 "ops":[["si","garde",[["deg","cible",20]]],["mana","Glace",2],["affaiblit","cible",3],["riposte",3],["pioche",1],["ennemiSoin",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Affaiblissement","Riposte","Pioche","Mana","Condition","Prix"],
 "ambiance":"Au printemps, Chablé demanda une coupe de balché pour la route, et on ne la lui refusa pas.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS087-moins7","zone":"ASS087","pole":"-","palier":7,"nom":"Les Coupes retournées","cout":2,"cible":1,
 "effet":"Plus personne ne boit. +2 mana de Glace ; 8 à tous ; tous hésitent ; soin du héros 12 ; tous marqués (+1). Pose Abîme. Si Braise (consommée) : 14 à la cible ; riposte 5 ; la cible brûle (2 × 3 tours). Prix : héros −3 PV ; ennemis soignés de 1.",
 "ops":[["mana","Glace",2],["deg","tous",8],["hesite","tous"],["soin","heros",12],["vulnerable","tous",1],["pose","Abîme"],["reveil","Braise",true,[["deg","cible",14],["riposte",5],["brulure","cible",2,3]]],["prixPV",3],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Brûlure","Marque","Contrôle","Riposte","Soin","Mana","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Le popol nah de Saktun est fermé ; les coupes sont retournées, et l'on boit l'eau du glacier.",
 "budget":"46,2 sans combo ; réveil +30 (65 %)"},
{"id":"ASS087-plus-1","zone":"ASS087","pole":"+","palier":1,"nom":"La Coupe de l'hôte","cout":1,"cible":0,
 "effet":"Loi : vos alliés se soignent de 4 ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["soin","allies",4],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Soin","Pioche","Prix"],
 "ambiance":"La coupe de l'hôte est peinte d'abeilles noires ; on ne la lave jamais, quel que soit le visiteur.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS087-plus-2","zone":"ASS087","pole":"+","palier":2,"nom":"Le Miel des grottes","cout":1,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 12 dégâts à la cible. Puis le héros se soigne de 6 ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",12]]],["soin","heros",6],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les abeilles des grottes n'ont pas de dard ; elles mordent, et leur miel garde le froid du glacier.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS087-plus-3","zone":"ASS087","pole":"+","palier":3,"nom":"Le Prêtre guéri","cout":2,"cible":1,
 "effet":"Loi : vos alliés se soignent de 8 ; le héros gagne 10 de garde ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["soin","allies",8],["garde","heros",10],["hesite","cible"],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Contrôle","Garde","Soin","Prix"],
 "ambiance":"Chablé a repris des couleurs et du ventre ; il dit le balché bon pour la doctrine.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS087-plus-4","zone":"ASS087","pole":"+","palier":4,"nom":"Les Envoyés de la cité","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 20 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; +1 mana de Glace ; le héros se soigne de 10. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",20]]],["affaiblit","cible",2],["mana","Glace",1],["soin","heros",10],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Affaiblissement","Soin","Mana","Condition","Prix"],
 "ambiance":"Les envoyés de la cité montent à Saktun avec des ordres scellés, et en redescendent sur des brancards.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS087-plus-5","zone":"ASS087","pole":"+","palier":5,"nom":"La Coupe versée","cout":2,"cible":1,
 "effet":"Loi : vos alliés se soignent de 10 ; 5 dégâts à tous les ennemis ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["soin","allies",10],["deg","tous",5],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Marque","Soin","Prix"],
 "ambiance":"Chablé verse lui-même le balché aux nouveaux venus, à pleine coupe, et leur souhaite la bienvenue.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS087-plus-6","zone":"ASS087","pole":"+","palier":6,"nom":"Le Visage guetté","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 20 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 1 ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 8 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",20]]],["affaiblit","tous",1],["riposte",4],["garde","heros",8],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Affaiblissement","Riposte","Garde","Pioche","Condition","Prix"],
 "ambiance":"Le prêtre guette la grimace de l'envoyé qui boit, et ne dit rien ; il se souvient de la sienne.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS087-plus7","zone":"ASS087","pole":"+","palier":7,"nom":"La Jarre commune","cout":2,"cible":1,
 "effet":"Tout Saktun boit ensemble. Si une carte a été défaussée en prix ce tour, 16 à la cible. Alliés soignés de 19 ; 6 à tous. Pose Racine. Si Braise (consommée) : alliés soignés de 10 ; tous marqués (+2). Prix : défaussez 1 carte ; héros −1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",16]]],["soin","allies",19],["deg","tous",6],["pose","Racine"],["reveil","Braise",true,[["soin","allies",10],["vulnerable","tous",2]]],["prixDefausse",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Marque","Soin","Condition","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Tout Saktun boit à la même jarre au bord du glacier, du prêtre au porteur de glace.",
 "budget":"45,7 sans combo ; réveil +28,2 (62 %)"}
]
```

---

## 7. Koniama, les Saints sous la chaux (ANT159) — Antre · Cité en ruines · Pierre · Byzantine

Forme du récit : l'entretien (l'évêché paie chaque printemps un chaulier pour recouvrir les saints que l'humidité ramène, et le chaulier les vénère en secret). Recette du −7 : la foule des visages (les saints revenus sur chaque pierre) ; du +7 : le blanc sans visage (tout chaulé jusqu'aux colonnes). Même couple que C ANT116 : ni récif, ni eau, ni étoiles d'épines.

**Corruption (−)** : la fouine du narthex → les visages revenus → le chat haret → l'humidité des ruines → les fouines de l'abside → l'évêque aux images → les Saints revenus. Fil mécanique : **garde des alliés** (place ; jamais principale sur la Corruption), invocations sur 4 cartes (fouines, chats harets), crochet « la cible est déjà marquée » (marque sur une seule carte) ; prix : bête et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, bêtes 4, dégâts ciblés 4, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (vos bêtes 5, PV 3).

**Pureté (+)** : la cigogne de la coupole → les hirondelles du clocher → la chaux du printemps → le chaulier Theodoros → les nids sur la coupole → le blanc des murs → l'Église chaulée. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur la Pureté après C ANT090 et B ANT150 ; bête principale : cigognes), soin des alliés en appoint, crochet « la cible a de la garde » (jamais lu sur la Pureté) ; prix : défausse et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, soin des alliés 4, dégâts ciblés 4, garde du héros 2, exil 2, affaiblissement 2, pioche 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (défausse 5, exil 2).

```json
{"fiche":"ANT159","nom":"Koniama, les Saints sous la chaux",
 "recit":"Dans la ville morte de Koniama, l'église est restée debout au milieu des ruines, et ses murs sont couverts de saints. Un évêque qui détestait les images les fit blanchir à la chaux. L'humidité des ruines les ramena dès l'hiver suivant, d'abord les yeux, puis les mains. L'évêché paie depuis le chaulier Theodoros pour les recouvrir chaque printemps. Theodoros vénère les icônes en secret, et il a doté ses filles avec la doctrine. Les cigognes nichent sur la coupole et ne prennent pas parti.",
 "pal":["Les saints sont revenus sur chaque pierre de Koniama ; des visages sur les colonnes tombées, sur les seuils, sur les murs des maisons sans toit.","Des yeux de saints percent la chaux grise de l'église ; les fouines courent dans l'abside, et les murs suintent d'une humidité qui sent la cave.","Une ville de pierre effondrée autour d'une église à coupole ; des colonnes couchées dans l'herbe, et des nids de cigognes sur le toit.","La chaux fraîche couvre les murs de l'église ; le chaulier travaille sur son échelle, et les hirondelles nichent sous les corniches blanches.","Tout est chaulé, l'église, les colonnes, les pierres des rues ; un blanc sans visage, et les cigognes posées dessus comme des taches de lumière."],
 "pm":"Corruption","pp":"Pureté"}
```

```json
[
{"id":"ANT159-moins-1","zone":"ANT159","pole":"-","palier":1,"nom":"La Fouine du narthex","cout":1,"cible":0,
 "effet":"Une Fouine du narthex rejoint le combat : 8 PV, frappe 3. Vos alliés gagnent 3 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Fouine du narthex",8,3],["garde","allies",3],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Une fouine a fait son nid derrière l'icône du narthex ; elle en sort à la nuit, les yeux brillants.",
 "budget":"11,1 / 10 (+11 %)"},
{"id":"ANT159-moins-2","zone":"ANT159","pole":"-","palier":2,"nom":"Les Visages revenus","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis vos alliés gagnent 7 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["garde","allies",7],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Un matin d'hiver, sous la chaux, on revit les yeux d'un saint, puis ceux de son voisin.",
 "budget":"11,4 / 12,5 (−9 %)"},
{"id":"ANT159-moins-3","zone":"ANT159","pole":"-","palier":3,"nom":"Le Chat haret","cout":2,"cible":1,
 "effet":"Un Chat haret rejoint le combat : 12 PV, frappe 4. Vos alliés gagnent 8 de garde ; l'attaque de la cible baisse de 1. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Chat haret",12,4],["garde","allies",8],["affaiblit","cible",1],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Les chats retournés à l'état sauvage chassent les fouines dans les ruines, et dorment sur l'autel.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ANT159-moins-4","zone":"ANT159","pole":"-","palier":4,"nom":"L'Humidité des ruines","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis vos alliés gagnent 10 de garde ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["garde","allies",10],["soin","heros",6],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"L'eau monte dans les murs de Koniama par les pierres tombées ; elle ramène les couleurs avec elle.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT159-moins-5","zone":"ANT159","pole":"-","palier":5,"nom":"Les Fouines de l'abside","cout":2,"cible":0,
 "effet":"Des Fouines de l'abside rejoignent le combat : 16 PV, frappe 4. Vos alliés gagnent 10 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Fouines de l'abside",16,4],["garde","allies",10],["riposte",3],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Riposte","Garde","Prix"],
 "ambiance":"Dans l'abside, les fouines ont rongé le bas des robes peintes, et laissé intacts les visages.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT159-moins-6","zone":"ANT159","pole":"-","palier":6,"nom":"L'Évêque aux images","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis vos alliés gagnent 12 de garde ; tous les ennemis sont marqués : +1 par coup reçu ; piochez 1 carte. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["garde","allies",12],["vulnerable","tous",1],["pioche",1],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Marque","Garde","Pioche","Condition","Prix"],
 "ambiance":"L'évêque qui fit chauler les saints est enterré sous le dallage ; son visage, lui, n'est revenu nulle part.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT159-moins7","zone":"ANT159","pole":"-","palier":7,"nom":"Les Saints revenus","cout":2,"cible":1,
 "effet":"Les murs ouvrent les yeux. Un Grand Chat des ruines (20 PV, frappe 5) ; alliés +16 de garde ; chaque ennemi −2 d'attaque. Pose Racine. Si Abîme (consommée) : alliés +12 de garde ; 14 à la cible. Prix : bête la plus faible −2 PV ; héros −2 PV.",
 "ops":[["invoque","Grand Chat des ruines",20,5],["garde","allies",16],["affaiblit","tous",2],["pose","Racine"],["reveil","Abîme",true,[["garde","allies",12],["deg","cible",14]]],["prixBete",2],["prixPV",2]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Garde","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Sur chaque pierre de Koniama, un visage de saint est revenu ; les colonnes tombées regardent le ciel.",
 "budget":"45,9 sans combo ; réveil +28,4 (62 %)"},
{"id":"ANT159-plus-1","zone":"ANT159","pole":"+","palier":1,"nom":"La Cigogne de la coupole","cout":1,"cible":0,
 "effet":"Une Cigogne de la coupole rejoint le combat : 8 PV, frappe 3. Vos alliés se soignent de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Cigogne de la coupole",8,3],["soin","allies",3],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"La cigogne claque du bec sur la coupole de Koniama, au-dessus des saints, sans regarder en bas.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT159-plus-2","zone":"ANT159","pole":"+","palier":2,"nom":"Les Hirondelles du clocher","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Des Hirondelles du clocher rejoignent le combat : 8 PV, frappe 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["invoque","Hirondelles du clocher",8,4],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les hirondelles bâtissent leurs nids de boue sous les corniches fraîchement chaulées, et les salissent aussitôt.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT159-plus-3","zone":"ANT159","pole":"+","palier":3,"nom":"La Chaux du printemps","cout":2,"cible":0,
 "effet":"Une Cigogne blanche rejoint le combat : 12 PV, frappe 4. Vos alliés se soignent de 6 ; le héros gagne 6 de garde. Prix : cette carte s'exile.",
 "ops":[["invoque","Cigogne blanche",12,4],["soin","allies",6],["garde","heros",6],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde","Soin","Exil","Prix"],
 "ambiance":"La chaux vive cuit dans une fosse derrière l'église ; Theodoros la remue au bâton, les yeux plissés.",
 "budget":"22,8 / 24 (−5 %)"},
{"id":"ANT159-plus-4","zone":"ANT159","pole":"+","palier":4,"nom":"Le Chaulier Theodoros","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Une Tortue grecque rejoint le combat : 16 PV, frappe 2. Vos alliés se soignent de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["invoque","Tortue grecque",16,2],["soin","allies",6],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Theodoros passe la chaux de bas en haut, et s'arrête toujours un instant devant les mains du saint.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT159-plus-5","zone":"ANT159","pole":"+","palier":5,"nom":"Les Nids sur la coupole","cout":2,"cible":1,
 "effet":"Des Cigognes de la coupole rejoignent le combat : 18 PV, frappe 5. Vos alliés se soignent de 6 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Cigognes de la coupole",18,5],["soin","allies",6],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Les cigognes reviennent chaque printemps sur les mêmes nids, plus larges d'une couronne de branches.",
 "budget":"28,5 / 32 (−11 %)"},
{"id":"ANT159-plus-6","zone":"ANT159","pole":"+","palier":6,"nom":"Le Blanc des murs","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Des Hirondelles de l'abside rejoignent le combat : 14 PV, frappe 4. Piochez 1 carte ; riposte 4 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["invoque","Hirondelles de l'abside",14,4],["pioche",1],["riposte",4],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Riposte","Pioche","Condition","Exil","Prix"],
 "ambiance":"Le blanc des murs aveugle à midi ; on y devine encore, de biais, la forme d'une auréole.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT159-plus7","zone":"ANT159","pole":"+","palier":7,"nom":"L'Église chaulée","cout":2,"cible":1,
 "effet":"Tout redevient blanc. Une Grande Cigogne blanche (26 PV, frappe 6) ; héros +12 de garde ; tous marqués (+2) ; piochez 1. Pose Sceau. Si Racine (consommée) : soin du héros 12 ; 10 à la cible ; chaque ennemi −1 d'attaque. Prix : défaussez 1 carte.",
 "ops":[["invoque","Grande Cigogne blanche",26,6],["garde","heros",12],["vulnerable","tous",2],["pioche",1],["pose","Sceau"],["reveil","Racine",true,[["soin","heros",12],["deg","cible",10],["affaiblit","tous",1]]],["prixDefausse",1]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Marque","Affaiblissement","Garde","Soin","Pioche","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Tout Koniama est chaulé jusqu'aux colonnes ; un blanc sans visage, où se posent les cigognes.",
 "budget":"45,8 sans combo ; réveil +28,6 (62 %)"}
]
```

---

## 8. Iakhu-Neheh, la Barque remployée (ANT008) — Antre · Fjord · Glace · Égyptienne

Forme du récit : le remploi (le successeur du roi déterre la barque funéraire pour y graver son nom ; le charpentier est payé une seconde fois). Recette du −7 : le vide (la fosse ouverte au bord du fjord, sans barque) ; du +7 : la démesure (la barque sur l'eau noire, chargée des étoiles qui ne se couchent pas). Même couple que B ANT138 (B n'était pas inscrit à l'écriture).

**Vide (−)** : l'orque du fjord → la fosse ouverte → les mouettes ivoire → le roi Nebka → les orques de la passe → le nom gratté → la Fosse vide. Fil mécanique : **colonne PV / `blesse`** (le crochet est lu sur 4 cartes, avant le prix de la carte ; PV en prix sur ces 4 cartes), invocations sur 4 cartes (orques, mouettes ivoire), affaiblissement en appoint ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, dégâts ciblés 4, affaiblissement 3, garde du héros 2, pioche 2, soin du héros 2, riposte 2, marque 2, hésitation 2 ; crochet « le héros a moins de la moitié de ses PV » sur 4 ; prix sur 7 cartes (PV 4, défausse 3).

**Étoiles (+)** : le lagopède des neiges → les étoiles impérissables → les bruants des neiges → le charpentier Hesy → la barque de cèdre → la proue regravée → les Étoiles qui ne se couchent pas. Fil mécanique : **riposte** (place 2/2 ; jamais principale sur les Étoiles ; 8 au plus par carte), invocations sur 4 cartes (lagopèdes, bruants), crochet « la Garde du héros est levée » (une seule carte lève la Garde, sans `si`) ; prix : bête et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, bêtes 4, dégâts ciblés 4, marque 2, soin du héros 2, affaiblissement 2, pioche 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (vos bêtes 5, garde ennemie 4).

```json
{"fiche":"ANT008","nom":"Iakhu-Neheh, la Barque remployée",
 "recit":"Le roi Nebka avait fait creuser, au bord du fjord, une fosse pour la barque de cèdre qui devait le porter parmi les étoiles impérissables, celles qui ne se couchent jamais. Le charpentier Hesy l'avait bâtie sans un clou. On la scella dans la fosse aux funérailles. Le successeur de Nebka, à court de cèdre, fit rouvrir la fosse, gratter le nom de la proue et graver le sien. Hesy fut payé de nouveau pour la remettre en état. On ne sait plus où navigue le vieux roi. Hesy, lui, a refusé de bâtir la suivante.",
 "pal":["La fosse est ouverte au bord du fjord, vide et noire sous un ciel sans étoile ; la glace a pris au fond, et personne n'y descend plus.","Des dalles de scellement brisées sur la grève ; des orques passent dans le fjord, et les ouvriers grattent un nom sur une proue de cèdre.","Un fjord étroit entre des falaises de glace ; une longue fosse de pierre sur la grève, un temple bas, et une barque de cèdre sous un abri de roseaux.","La barque glisse sur l'eau calme du fjord, la proue regravée ; les étoiles tournent au-dessus d'elle sans jamais toucher les falaises.","La barque de cèdre flotte sur l'eau noire, chargée d'étoiles jusqu'au bord ; le ciel entier tourne autour de sa proue, et aucune étoile ne se couche."],
 "pm":"Vide","pp":"Étoiles"}
```

```json
[
{"id":"ANT008-moins-1","zone":"ANT008","pole":"-","palier":1,"nom":"L'Orque du fjord","cout":1,"cible":1,
 "effet":"Une Orque du fjord rejoint le combat : 10 PV, frappe 3. L'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Orque du fjord",10,3],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Une orque remonte le fjord de Iakhu-Neheh à chaque marée, et souffle devant la fosse comme pour y regarder.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT008-moins-2","zone":"ANT008","pole":"-","palier":2,"nom":"La Fosse ouverte","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. Puis le héros gagne 6 de garde ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",10]]],["garde","heros",6],["pioche",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"On a levé les dalles de scellement au levier ; dessous, la fosse sent encore le cèdre et la résine.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"ANT008-moins-3","zone":"ANT008","pole":"-","palier":3,"nom":"Les Mouettes ivoire","cout":2,"cible":0,
 "effet":"Des Mouettes ivoire rejoignent le combat : 12 PV, frappe 4. L'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Mouettes ivoire",12,4],["affaiblit","tous",1],["soin","heros",6],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Les mouettes ivoire se posent sur les dalles brisées, blanches sur la pierre noire, et ne crient pas.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ANT008-moins-4","zone":"ANT008","pole":"-","palier":4,"nom":"Le Roi Nebka","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; riposte 3 jusqu'à votre prochain tour ; la cible brûle : 2 par tour pendant 4 tours. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",20]]],["vulnerable","cible",2],["riposte",3],["brulure","cible",2,4],["prixPV",3]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Brûlure","Marque","Riposte","Condition","Prix"],
 "ambiance":"Nebka voulait naviguer parmi les étoiles qui ne meurent pas ; il n'a navigué nulle part.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT008-moins-5","zone":"ANT008","pole":"-","palier":5,"nom":"Les Orques de la passe","cout":2,"cible":1,
 "effet":"Des Orques de la passe rejoignent le combat : 20 PV, frappe 5. L'attaque de la cible baisse de 3 ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Orques de la passe",20,5],["affaiblit","cible",3],["hesite","cible"],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Affaiblissement","Contrôle","Prix"],
 "ambiance":"Les orques de la passe chassent en rond autour des glaçons, et le fjord bouillonne sous la nuit d'hiver.",
 "budget":"28,5 / 32 (−11 %)"},
{"id":"ANT008-moins-6","zone":"ANT008","pole":"-","palier":6,"nom":"Le Nom gratté","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible. Puis +2 mana de Glace ; piochez 1 carte ; le héros gagne 10 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",20]]],["mana","Glace",2],["pioche",1],["garde","heros",10],["riposte",3],["prixPV",3]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Riposte","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"Les ouvriers du nouveau roi grattent le nom de Nebka sur la proue, signe après signe, au ciseau de cuivre.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ANT008-moins7","zone":"ANT008","pole":"-","palier":7,"nom":"La Fosse vide","cout":2,"cible":1,
 "effet":"Il ne reste que la fosse. Si le héros est sous la moitié de ses PV, 12 à la cible. Une Grande Orque noire (24 PV, frappe 7) ; tous marqués (+3). Pose Abîme. Si Givre (consommée) : tous hésitent ; 8 à la cible ; soin du héros 12. Prix : héros −3 PV.",
 "ops":[["si","blesse",[["deg","cible",12]]],["invoque","Grande Orque noire",24,7],["vulnerable","tous",3],["pose","Abîme"],["reveil","Givre",true,[["hesite","tous"],["deg","cible",8],["soin","heros",12]]],["prixPV",3]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Marque","Contrôle","Soin","Condition","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"La fosse au bord du fjord est vide et noire ; la glace a pris la place de la barque.",
 "budget":"45,3 sans combo ; réveil +29 (64 %)"},
{"id":"ANT008-plus-1","zone":"ANT008","pole":"+","palier":1,"nom":"Le Lagopède des neiges","cout":1,"cible":0,
 "effet":"Un Lagopède des neiges rejoint le combat : 6 PV, frappe 2. Riposte 2 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Lagopède des neiges",6,2],["riposte",2],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Riposte","Prix"],
 "ambiance":"Un lagopède blanc gratte la neige sur le toit du temple, et s'envole dès qu'on le regarde.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT008-plus-2","zone":"ANT008","pole":"+","palier":2,"nom":"Les Étoiles impérissables","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",10]]],["riposte",3],["vulnerable","cible",1],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Riposte","Condition","Prix"],
 "ambiance":"Au fond du fjord, l'hiver n'est qu'une nuit, et ses étoiles ne se couchent jamais.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT008-plus-3","zone":"ANT008","pole":"+","palier":3,"nom":"Les Bruants des neiges","cout":2,"cible":0,
 "effet":"Des Bruants des neiges rejoignent le combat : 10 PV, frappe 4. Riposte 4 jusqu'à votre prochain tour ; le héros se soigne de 6. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Bruants des neiges",10,4],["riposte",4],["soin","heros",6],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Riposte","Soin","Prix"],
 "ambiance":"Les bruants des neiges picorent les copeaux de cèdre autour de la barque, comme si c'était du grain.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ANT008-plus-4","zone":"ANT008","pole":"+","palier":4,"nom":"Le Charpentier Hesy","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis riposte 5 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2 ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",20]]],["riposte",5],["affaiblit","cible",2],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Affaiblissement","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Hesy assemble la barque sans un clou, à tenons et à ligatures, et chante pour serrer les cordes.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ANT008-plus-5","zone":"ANT008","pole":"+","palier":5,"nom":"La Barque de cèdre","cout":2,"cible":0,
 "effet":"Des Lagopèdes du fjord rejoignent le combat : 14 PV, frappe 5. Riposte 5 jusqu'à votre prochain tour ; le héros gagne 8 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Lagopèdes du fjord",14,5],["riposte",5],["garde","heros",8],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Riposte","Garde","Prix"],
 "ambiance":"La barque de cèdre sent la résine jusqu'au bout du fjord ; on la dit faite pour un ciel entier.",
 "budget":"29,9 / 32 (−7 %)"},
{"id":"ANT008-plus-6","zone":"ANT008","pole":"+","palier":6,"nom":"La Proue regravée","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis riposte 7 jusqu'à votre prochain tour ; +2 mana de Glace ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde ; votre bête la plus faible perd 1 PV.",
 "ops":[["si","garde",[["deg","cible",20]]],["riposte",7],["mana","Glace",2],["vulnerable","cible",2],["ennemiGarde",1],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Riposte","Mana","Condition","Prix"],
 "ambiance":"Sur la proue, le nom du nouveau roi brille, frais gravé ; sous le sien, on devine encore l'ancien.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT008-plus7","zone":"ANT008","pole":"+","palier":7,"nom":"Les Étoiles qui ne se couchent pas","cout":2,"cible":1,
 "effet":"La barque prend la mer. Un Grand Lagopède blanc (22 PV, frappe 6) ; riposte 8 ; chaque ennemi −2 d'attaque. Pose Givre. Si Sceau (consommée) : 14 à la cible ; soin du héros 14 ; piochez 1. Prix : bête la plus faible −2 PV ; ennemis +1 de garde.",
 "ops":[["invoque","Grand Lagopède blanc",22,6],["riposte",8],["affaiblit","tous",2],["pose","Givre"],["reveil","Sceau",true,[["deg","cible",14],["soin","heros",14],["pioche",1]]],["prixBete",2],["ennemiGarde",1]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Riposte","Soin","Pioche","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"La barque de cèdre flotte sur l'eau noire du fjord, chargée d'étoiles qui ne se couchent pas.",
 "budget":"45,2 sans combo ; réveil +32 (71 %)"}
]
```

---

## 9. Kuuguaq, les Aveux du Dégel (ANT077) — Antre · Delta fluvial · Eau · Inuit

Forme du récit : la confession publique (l'angakkuq chasse la toux par les aveux ; la toux part, les aveux restent, et le camp se sépare). Recette du −7 : le vide (le camp défait, les chiens seuls sur la glace) ; du +7 : la dispersion apaisée (une tente par rive, chacune son feu, le delta en chapelet).

**Peste (−)** : les moustiques du dégel → la toux des baleiniers → le chien de traîneau → l'angakkuq Uqsuralik → la grande maison de neige → les fautes tues → le Camp défait. Fil mécanique : **colonne hésitation / `hesite`** (le crochet est lu sur 4 cartes, toujours avant l'hésitation de la carte ; la cible hésite sur 4 cartes), invocations sur 4 cartes (moustiques, chiens de traîneau), marque en appoint ; prix : PV et bête. Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 4, bêtes 4, marque 4, dégâts ciblés 4, soin du héros 2, riposte 2, affaiblissement 2 ; crochet « la cible hésite déjà » sur 4 ; prix sur 7 cartes (PV 5, vos bêtes 2).

**Guérison (+)** : le béluga du chenal → les aveux → l'omble chevalier → le dégel → les bélugas du delta → la rive de chacun → le Delta en chapelet. Fil mécanique : **coups au hasard** (place rare ; jamais principaux sur la Guérison), invocations sur 4 cartes (bélugas, ombles), soin du héros en appoint, crochet « la cible brûle déjà » (brûlure sur une seule carte) ; prix : soin ennemi et bête. Comptes au script (cartes sur 7, `si` et réveil compris) : coups au hasard 7, bêtes 4, soin du héros 4, dégâts ciblés 3 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (soin ennemi 4, vos bêtes 3).

```json
{"fiche":"ANT077","nom":"Kuuguaq, les Aveux du Dégel",
 "recit":"Quand la toux vint au delta de Kuuguaq avec les baleiniers, l'angakkuq Uqsuralik déclara qu'elle venait des fautes tues, et que seuls les aveux la chasseraient. On s'assembla dans la grande maison de neige. Chacun dit tout : la viande cachée, le phoque pris sur la ligne d'un autre, la parole donnée puis reprise. La toux partit avec le dégel. Les aveux restèrent. L'été suivant, chaque famille de Kuuguaq dressa sa tente sur sa propre rive du delta, et elles y sont encore. Uqsuralik reçoit des cadeaux de toutes.",
 "pal":["Le camp est défait ; les traîneaux sont partis, les tentes rabattues, et seuls les chiens restent assis sur la glace du chenal.","Des tentes serrées sous la neige, des malades qui toussent derrière les peaux ; on se parle à voix basse, et chacun regarde ses voisins.","Un delta aux bras innombrables, plat sous le ciel ; des maisons de neige sur la berge, des séchoirs à poisson, et des bélugas dans le chenal.","La glace se rompt dans les chenaux ; les familles chargent les kayaks, et les bélugas remontent le delta en soufflant dans l'eau trouble.","Une tente sur chaque rive, chacune avec son feu ; le delta est un chapelet de lumières séparées par l'eau, et les kayaks se croisent sans s'arrêter."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"ANT077-moins-1","zone":"ANT077","pole":"-","palier":1,"nom":"Les Moustiques du dégel","cout":1,"cible":1,
 "effet":"Des Moustiques du dégel rejoignent le combat : 6 PV, frappe 2. La cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Moustiques du dégel",6,2],["hesite","cible"],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Contrôle","Prix"],
 "ambiance":"Au dégel, les moustiques montent des mares du delta en colonnes grises ; on rentre la tête au capuchon.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT077-moins-2","zone":"ANT077","pole":"-","palier":2,"nom":"La Toux des baleiniers","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 12 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",12]]],["vulnerable","cible",2],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Les baleiniers ont laissé au delta des barils, des couteaux, et une toux qui passe de tente en tente.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT077-moins-3","zone":"ANT077","pole":"-","palier":3,"nom":"Le Chien de traîneau","cout":2,"cible":1,
 "effet":"Un Chien de traîneau rejoint le combat : 12 PV, frappe 4. La cible hésite ; la cible est marquée : +2 par coup reçu. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Chien de traîneau",12,4],["hesite","cible"],["vulnerable","cible",2],["prixBete",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Marque","Contrôle","Prix"],
 "ambiance":"Le chien de tête dort devant la tente des malades, et grogne quand on veut y entrer.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT077-moins-4","zone":"ANT077","pole":"-","palier":4,"nom":"L'Angakkuq Uqsuralik","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis tous les ennemis sont marqués : +1 par coup reçu ; le héros se soigne de 8 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","hesite",[["deg","cible",20]]],["vulnerable","tous",1],["soin","heros",8],["pioche",1],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Uqsuralik écoute les malades tousser, la tête penchée, et dit que la toux parle de ce qu'on a tu.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"ANT077-moins-5","zone":"ANT077","pole":"-","palier":5,"nom":"La Grande Maison de neige","cout":2,"cible":0,
 "effet":"Une Nuée de moustiques rejoint le combat : 14 PV, frappe 5. Tous les ennemis hésitent ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Nuée de moustiques",14,5],["hesite","tous"],["garde","heros",8],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Contrôle","Garde","Prix"],
 "ambiance":"Tout Kuuguaq s'entasse dans la grande maison de neige, épaule contre épaule, pour avouer devant tous.",
 "budget":"27,9 / 32 (−13 %)"},
{"id":"ANT077-moins-6","zone":"ANT077","pole":"-","palier":6,"nom":"Les Fautes tues","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; l'attaque de la cible baisse de 3 ; riposte 3 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","hesite",[["deg","cible",20]]],["vulnerable","cible",3],["affaiblit","cible",3],["riposte",3],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Marque","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"La viande cachée, le phoque pris sur la ligne d'un autre : chacun dit tout, et personne n'oublie rien.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT077-moins7","zone":"ANT077","pole":"-","palier":7,"nom":"Le Camp défait","cout":2,"cible":1,
 "effet":"Chacun part de son côté. Si la cible hésite déjà, 14 à la cible. Un Grand Chien de tête (22 PV, frappe 6) ; tous hésitent ; chaque ennemi −2 d'attaque. Pose Givre. Si Racine (consommée) : soin du héros 14 ; riposte 8. Prix : héros −3 PV.",
 "ops":[["si","hesite",[["deg","cible",14]]],["invoque","Grand Chien de tête",22,6],["hesite","tous"],["affaiblit","tous",2],["pose","Givre"],["reveil","Racine",true,[["soin","heros",14],["riposte",8]]],["prixPV",3]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Contrôle","Riposte","Soin","Condition","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Le camp de Kuuguaq est défait ; les traîneaux sont partis, et les chiens restent assis sur la glace.",
 "budget":"46,2 sans combo ; réveil +30 (65 %)"},
{"id":"ANT077-plus-1","zone":"ANT077","pole":"+","palier":1,"nom":"Le Béluga du chenal","cout":1,"cible":0,
 "effet":"Un Béluga du chenal rejoint le combat : 10 PV, frappe 2. 2 coups de 2 au hasard. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Béluga du chenal",10,2],["deg","hasard",2,2],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"Un béluga blanc remonte le chenal au dégel et siffle sous la glace mince, comme pour appeler.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT077-plus-2","zone":"ANT077","pole":"+","palier":2,"nom":"Les Aveux","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis 3 coups de 2 au hasard ; le héros se soigne de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",10]]],["deg","hasard",2,3],["soin","heros",4],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Chacun avoue à son tour, debout près de la lampe ; ce qu'on dit ne se reprend plus.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT077-plus-3","zone":"ANT077","pole":"+","palier":3,"nom":"L'Omble chevalier","cout":2,"cible":0,
 "effet":"Un Omble chevalier rejoint le combat : 8 PV, frappe 4. 3 coups de 3 au hasard ; le héros se soigne de 6. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Omble chevalier",8,4],["deg","hasard",3,3],["soin","heros",6],["prixBete",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Les ombles remontent le delta en bancs rouges ; on les pêche au trident sous la glace qui craque.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ANT077-plus-4","zone":"ANT077","pole":"+","palier":4,"nom":"Le Dégel","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Puis 4 coups de 3 au hasard ; la cible brûle : 3 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",20]]],["deg","hasard",3,4],["brulure","cible",3,3],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"La glace des chenaux se rompt d'un coup avec un bruit de tonnerre, et la toux s'en va.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ANT077-plus-5","zone":"ANT077","pole":"+","palier":5,"nom":"Les Bélugas du delta","cout":2,"cible":0,
 "effet":"Des Bélugas du delta rejoignent le combat : 16 PV, frappe 4. 3 coups de 4 au hasard ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Bélugas du delta",16,4],["deg","hasard",4,3],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Les bélugas remontent le delta par troupeaux entiers, blancs dans l'eau trouble, et le camp mange enfin.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT077-plus-6","zone":"ANT077","pole":"+","palier":6,"nom":"La Rive de chacun","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Puis 4 coups de 4 au hasard ; le héros gagne 10 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",20]]],["deg","hasard",4,4],["garde","heros",10],["prixBete",2]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Chaque famille dresse sa tente sur sa rive, et ne traverse que pour porter un cadeau à Uqsuralik.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT077-plus7","zone":"ANT077","pole":"+","palier":7,"nom":"Le Delta en chapelet","cout":2,"cible":0,
 "effet":"Chaque rive a son feu. Un Grand Béluga blanc (20 PV, frappe 5) ; 4 coups de 5 au hasard ; soin du héros 12. Pose Braise. Si Racine (consommée) : 4 coups de 4 au hasard ; chaque ennemi −2 d'attaque. Prix : bête la plus faible −2 PV.",
 "ops":[["invoque","Grand Béluga blanc",20,5],["deg","hasard",5,4],["soin","heros",12],["pose","Braise"],["reveil","Racine",true,[["deg","hasard",4,4],["affaiblit","tous",2]]],["prixBete",2]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Soin","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Une tente sur chaque rive de Kuuguaq, chacune avec son feu ; les kayaks se croisent sans s'arrêter.",
 "budget":"47,5 sans combo ; réveil +29,2 (61 %)"}
]
```

---

## 10. Mai Qalat, la Cour du Calao (ANT199) — Antre · Oasis · Sève · Éthiopienne

Forme du récit : le juge et son oiseau (le juge suit le calao, que les plaideurs attirent avec des sauterelles, et sait ce que valent les sauterelles). Recette du −7 : la foule (l'oasis grouillante de sauterelles lâchées) ; du +7 : le vide (la cour nue, l'oiseau seul, les plaideurs partis). Même couple que D ASS029 : ni marée, ni racines nouées.

**Mensonge (−)** : le drongo menteur → les sauterelles cachées → la hyène rayée → le juge Mersha → les drongos de la cour → les plaideurs → l'Oasis aux sauterelles. Fil mécanique : **affaiblissement** (reprise déclarée, 2e emploi sur le Mensonge après B ASS161, qui lisait `defausseAPrix` et payait en défausse), invocations sur 4 cartes (drongos, hyène rayée), marque en appoint, crochet « vous avez en main une carte de coût 0 » ; prix : PV et bête, aucune défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, bêtes 4, dégâts ciblés 4, marque 3, garde du héros 2, riposte 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (PV 5, vos bêtes 3).

**Vérité (+)** : le calao du juge → le daman des rochers → la cour du calao → l'outarde de l'oasis → les calaos de la cour → les damans du puits → l'Oiseau seul. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur la Vérité après C ANT193 et D ANT162 ; bête principale : calaos), garde du héros en appoint, crochet « une carte a été défaussée en prix ce tour » (le pôle ne défausse jamais : il compte sur les autres cartes du tour) ; prix : bête et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, garde du héros 4, dégâts ciblés 4, marque 2, exil 2, affaiblissement 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 3 ; prix sur 7 cartes (vos bêtes 5, exil 2).

```json
{"fiche":"ANT199","nom":"Mai Qalat, la Cour du Calao",
 "recit":"À l'oasis de Mai Qalat, le juge Mersha tranchait les querelles d'eau devant un calao terrestre, un grand oiseau noir qui arpentait la cour. On disait que l'oiseau s'écartait du menteur. Les plaideurs apprirent à cacher des sauterelles dans leur manteau, et le calao s'approchait de qui en avait le plus. Mersha le savait, et jugeait en conséquence : celui qui pouvait payer tant de sauterelles avait aussi de quoi payer le juge. Les puits de Mai Qalat appartiennent aux plus riches. Personne ne s'en plaint, ni au juge, ni à l'oiseau.",
 "pal":["L'oasis grouille de sauterelles lâchées des manteaux ; elles couvrent les puits, les palmes et la chaise du juge, et les drongos s'en gavent.","Des plaideurs en manteaux gonflés attendent à l'ombre ; des sauterelles s'échappent des plis, et les drongos rôdent au-dessus de la cour.","Une oasis de palmiers et de puits au pied d'un escarpement ; une cour de terre battue, la chaise du juge sous un figuier, et un grand oiseau noir.","Le calao arpente la cour à pas comptés ; les plaideurs se taisent, et le juge note le chemin de l'oiseau sur une tablette de bois.","La cour est nue sous le figuier ; il n'y a plus de plaideurs ni de juge, seulement le calao qui marche seul d'un puits à l'autre."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"ANT199-moins-1","zone":"ANT199","pole":"-","palier":1,"nom":"Le Drongo menteur","cout":1,"cible":1,
 "effet":"Un Drongo menteur rejoint le combat : 4 PV, frappe 2. L'attaque de la cible baisse de 2. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Drongo menteur",4,2],["affaiblit","cible",2],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Le drongo de la cour imite le cri d'alarme des tisserins, et ramasse les sauterelles qu'ils lâchent.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT199-moins-2","zone":"ANT199","pole":"-","palier":2,"nom":"Les Sauterelles cachées","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; la cible est marquée : +1 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["affaiblit","cible",2],["vulnerable","cible",1],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Marque","Affaiblissement","Condition","Prix"],
 "ambiance":"On coud des poches dans la doublure des manteaux, à hauteur du cœur, pour y garder les sauterelles vivantes.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT199-moins-3","zone":"ANT199","pole":"-","palier":3,"nom":"La Hyène rayée","cout":2,"cible":1,
 "effet":"Une Hyène rayée rejoint le combat : 14 PV, frappe 4. L'attaque de la cible baisse de 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Hyène rayée",14,4],["affaiblit","cible",3],["prixBete",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"La hyène rayée rôde la nuit autour de la cour, et emporte les sandales que les plaideurs oublient.",
 "budget":"21 / 24 (−12 %)"},
{"id":"ANT199-moins-4","zone":"ANT199","pole":"-","palier":4,"nom":"Le Juge Mersha","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 1 ; la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["affaiblit","tous",1],["vulnerable","cible",2],["pioche",1],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Marque","Affaiblissement","Pioche","Condition","Prix"],
 "ambiance":"Mersha juge assis sur une chaise de bois sculpté, les yeux sur l'oiseau et l'esprit sur la bourse.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT199-moins-5","zone":"ANT199","pole":"-","palier":5,"nom":"Les Drongos de la cour","cout":2,"cible":0,
 "effet":"Des Drongos de la cour rejoignent le combat : 10 PV, frappe 4. L'attaque de chaque ennemi baisse de 2 ; le héros gagne 8 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Drongos de la cour",10,4],["affaiblit","tous",2],["garde","heros",8],["prixBete",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Les drongos de Mai Qalat se perchent sur le figuier de la cour et suivent les plaideurs des yeux.",
 "budget":"29,6 / 32 (−7 %)"},
{"id":"ANT199-moins-6","zone":"ANT199","pole":"-","palier":6,"nom":"Les Plaideurs","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis l'attaque de la cible baisse de 4 ; la cible est marquée : +2 par coup reçu ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["affaiblit","cible",4],["vulnerable","cible",2],["riposte",3],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Marque","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Les plaideurs riches arrivent les manteaux gonflés ; les pauvres ont leurs mains vides et leur bon droit.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT199-moins7","zone":"ANT199","pole":"-","palier":7,"nom":"L'Oasis aux sauterelles","cout":2,"cible":1,
 "effet":"Le mensonge nourrit la cour. Un Grand Drongo noir (16 PV, frappe 5) ; chaque ennemi −3 d'attaque ; soin du héros 13. Pose Sang. Si Sceau (consommée) : 12 à la cible ; héros +10 de garde ; riposte 4. Prix : héros −2 PV ; bête la plus faible −1 PV.",
 "ops":[["invoque","Grand Drongo noir",16,5],["affaiblit","tous",3],["soin","heros",13],["pose","Sang"],["reveil","Sceau",true,[["deg","cible",12],["garde","heros",10],["riposte",4]]],["prixPV",2],["prixBete",1]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Riposte","Garde","Soin","Combo","Pose Sang","Réveil Sceau","Prix"],
 "ambiance":"Les sauterelles lâchées couvrent les puits et les palmes de Mai Qalat ; les drongos s'en gavent.",
 "budget":"45,3 sans combo ; réveil +28 (62 %)"},
{"id":"ANT199-plus-1","zone":"ANT199","pole":"+","palier":1,"nom":"Le Calao du juge","cout":1,"cible":0,
 "effet":"Un Calao du juge rejoint le combat : 10 PV, frappe 3. Le héros gagne 2 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Calao du juge",10,3],["garde","heros",2],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"Le calao terrestre marche dans la cour comme un notable, les mains derrière le dos, dirait-on.",
 "budget":"10,1 / 10 (+1 %)"},
{"id":"ANT199-plus-2","zone":"ANT199","pole":"+","palier":2,"nom":"Le Daman des rochers","cout":1,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 8 dégâts à la cible. Un Daman des rochers rejoint le combat : 8 PV, frappe 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",8]]],["invoque","Daman des rochers",8,3],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les damans se chauffent sur l'escarpement au-dessus de l'oasis, et sifflent quand un étranger monte.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT199-plus-3","zone":"ANT199","pole":"+","palier":3,"nom":"La Cour du calao","cout":2,"cible":1,
 "effet":"Un Calao terrestre rejoint le combat : 14 PV, frappe 4. Le héros gagne 10 de garde ; la cible est marquée : +2 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["invoque","Calao terrestre",14,4],["garde","heros",10],["vulnerable","cible",2],["exil"]],
 "tags":["Antre","Sève","Pôle +","Invocation","Marque","Garde","Exil","Prix"],
 "ambiance":"On a balayé la cour de terre battue pour que le calao y marche droit et y laisse ses traces.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ANT199-plus-4","zone":"ANT199","pole":"+","palier":4,"nom":"L'Outarde de l'oasis","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 20 dégâts à la cible. Une Outarde de l'oasis rejoint le combat : 14 PV, frappe 4. L'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",20]]],["invoque","Outarde de l'oasis",14,4],["affaiblit","cible",2],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Une outarde traverse la cour à pas lents, et les plaideurs se demandent si elle compte aussi.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ANT199-plus-5","zone":"ANT199","pole":"+","palier":5,"nom":"Les Calaos de la cour","cout":2,"cible":0,
 "effet":"Des Calaos de la cour rejoignent le combat : 18 PV, frappe 5. Le héros gagne 12 de garde ; piochez 1 carte. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Calaos de la cour",18,5],["garde","heros",12],["pioche",1],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Pioche","Prix"],
 "ambiance":"Le calao a pris une femelle, et le couple arpente la cour ensemble ; Mersha y voit une complication.",
 "budget":"29,1 / 32 (−9 %)"},
{"id":"ANT199-plus-6","zone":"ANT199","pole":"+","palier":6,"nom":"Les Damans du puits","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 20 dégâts à la cible. Des Damans du puits rejoignent le combat : 16 PV, frappe 4. Riposte 4 jusqu'à votre prochain tour ; +1 mana de Sève. Prix : cette carte s'exile.",
 "ops":[["si","defausseAPrix",[["deg","cible",20]]],["invoque","Damans du puits",16,4],["riposte",4],["mana","Sève",1],["exil"]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Riposte","Mana","Condition","Exil","Prix"],
 "ambiance":"Les damans descendent boire au puits des pauvres, le seul de l'oasis où personne ne monte la garde.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT199-plus7","zone":"ANT199","pole":"+","palier":7,"nom":"L'Oiseau seul","cout":2,"cible":1,
 "effet":"L'oiseau juge seul. Un Grand Calao noir (26 PV, frappe 6) ; héros +15 de garde ; chaque ennemi −2 d'attaque. Pose Sceau. Si Sang (consommée) : 14 à la cible ; soin du héros 12 ; la cible marquée (+2). Prix : bête la plus faible −2 PV.",
 "ops":[["invoque","Grand Calao noir",26,6],["garde","heros",15],["affaiblit","tous",2],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",14],["soin","heros",12],["vulnerable","cible",2]]],["prixBete",2]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Marque","Affaiblissement","Garde","Soin","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"La cour de Mai Qalat est nue sous le figuier ; le calao marche seul d'un puits à l'autre.",
 "budget":"45,2 sans combo ; réveil +32 (71 %)"}
]
```

---

## 11. Mezhovina, la Laine commune (ANT050) — Antre · Lande · Vent · Slave

Forme du récit : la mise en commun (le starosta met tous les moutons à la commune pour finir les querelles d'encoches, et tient les balances). Recette du −7 : la dispersion (la lande sans bornes, les moutons au vent) ; du +7 : l'ordre (un seul troupeau, une seule marque, les balances au milieu). Même couple que B ANT085 (B n'était pas inscrit à l'écriture).

**Chaos (−)** : le vanneau de la lande → les encoches → la vipère péliade → le vent de la lande → les vanneaux dispersés → le starosta Dobrogost → la Lande sans bornes. Fil mécanique : **soin du héros** (place 2/2 ; jamais principal sur le Chaos), invocations sur 4 cartes (vanneaux, vipères péliades), coups au hasard sur 2 cartes, crochet « la cible est déjà marquée » (marque sur une seule carte) ; prix : bête et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, bêtes 4, dégâts ciblés 4, riposte 2, coups au hasard 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (vos bêtes 5, défausse 3).

**Ordre (+)** : l'étourneau de la lande → la laine commune → le bourdon de bruyère → les balances → les étourneaux en nuée → le troupeau unique → la Marque unique. Fil mécanique : **colonne garde ennemie / `cibleGarde`** (le crochet est lu sur 4 cartes, avant le prix de la carte ; garde ennemie en prix sur ces 4 cartes), invocations sur 4 cartes (étourneaux, bourdons), garde des alliés en appoint ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 4, bêtes 4, dégâts ciblés 4, garde du héros 2, affaiblissement 2, riposte 2, soin du héros 2 ; crochet « la cible a de la garde » sur 4 ; prix sur 7 cartes (PV 4, garde ennemie 4).

```json
{"fiche":"ANT050","nom":"Mezhovina, la Laine commune",
 "recit":"Sur la lande de Mezhovina, le vent disperse les moutons si loin que personne ne retrouvait plus les siens au printemps. Chaque famille les marquait d'une encoche à l'oreille, et les encoches se multiplièrent jusqu'à ne plus rien dire. Le starosta Dobrogost proposa d'en finir : tous les moutons à la commune, et la laine partagée à parts égales. On l'applaudit. Les querelles cessèrent. La laine de Mezhovina appartient désormais à tous, et se vend chez Dobrogost, qui tient les balances.",
 "pal":["La lande n'a plus de bornes ; les moutons sont dispersés jusqu'à l'horizon, couchés contre le vent, et personne ne sait plus à qui ils sont.","Des bergers se disputent un mouton à l'oreille entaillée de partout ; les vanneaux crient au-dessus des bruyères, et le vent emporte les mots.","Une lande rase et violette, balayée de vent ; un village de rondins au creux d'un vallon, des enclos de branches, et des moutons partout.","Les moutons rentrent en un seul troupeau derrière le chien du starosta ; on tond dans la grange commune, et la laine s'empile en ballots.","Un seul troupeau couvre la lande, chaque bête marquée du même signe ; au milieu, sous un auvent, les balances de Dobrogost pèsent la laine de tous."],
 "pm":"Chaos","pp":"Ordre"}
```

```json
[
{"id":"ANT050-moins-1","zone":"ANT050","pole":"-","palier":1,"nom":"Le Vanneau de la lande","cout":1,"cible":0,
 "effet":"Un Vanneau de la lande rejoint le combat : 6 PV, frappe 2. Le héros se soigne de 6. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Vanneau de la lande",6,2],["soin","heros",6],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Soin","Prix"],
 "ambiance":"Le vanneau crie et feint l'aile cassée pour éloigner les bergers de son nid, et les bergers le suivent.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT050-moins-2","zone":"ANT050","pole":"-","palier":2,"nom":"Les Encoches","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis le héros se soigne de 5 ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["soin","heros",5],["riposte",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"Une encoche pour la famille du moulin, une autre pour celle du gué : les oreilles ne disaient plus rien.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT050-moins-3","zone":"ANT050","pole":"-","palier":3,"nom":"La Vipère péliade","cout":2,"cible":0,
 "effet":"Une Vipère péliade rejoint le combat : 10 PV, frappe 4. Le héros se soigne de 10 ; 3 coups de 2 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Vipère péliade",10,4],["soin","heros",10],["deg","hasard",2,3],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"La péliade dort sur les pierres chaudes de la lande ; les moutons s'en écartent d'instinct.",
 "budget":"26 / 24 (+8 %)"},
{"id":"ANT050-moins-4","zone":"ANT050","pole":"-","palier":4,"nom":"Le Vent de la lande","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis le héros se soigne de 12 ; l'attaque de chaque ennemi baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["soin","heros",12],["affaiblit","tous",1],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Le vent de Mezhovina pousse les moutons comme des feuilles, d'un vallon à l'autre, jusqu'à la forêt.",
 "budget":"25,6 / 28 (−9 %)"},
{"id":"ANT050-moins-5","zone":"ANT050","pole":"-","palier":5,"nom":"Les Vanneaux dispersés","cout":2,"cible":0,
 "effet":"Des Vanneaux dispersés rejoignent le combat : 12 PV, frappe 4. Le héros se soigne de 12 ; le héros gagne 8 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Vanneaux dispersés",12,4],["soin","heros",12],["garde","heros",8],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Soin","Prix"],
 "ambiance":"Les vanneaux se lèvent en désordre au passage des bergers, et retombent ailleurs en criant.",
 "budget":"28,4 / 32 (−11 %)"},
{"id":"ANT050-moins-6","zone":"ANT050","pole":"-","palier":6,"nom":"Le Starosta Dobrogost","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis le héros se soigne de 16 ; tous les ennemis sont marqués : +1 par coup reçu ; piochez 1 carte. Prix : défaussez 1 carte au hasard ; votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["soin","heros",16],["vulnerable","tous",1],["pioche",1],["prixDefausse",1],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Dobrogost parle doucement et longtemps ; à la fin de l'assemblée, on ne sait plus qui a proposé quoi.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT050-moins7","zone":"ANT050","pole":"-","palier":7,"nom":"La Lande sans bornes","cout":2,"cible":1,
 "effet":"Le vent emporte les marques. Une Grande Vipère de la lande (18 PV, frappe 5) ; soin du héros 19 ; 3 coups de 4 au hasard. Pose Abîme. Si Braise (consommée) : soin du héros 12 ; 10 à la cible ; riposte 4. Prix : bête la plus faible −2 PV.",
 "ops":[["invoque","Grande Vipère de la lande",18,5],["soin","heros",19],["deg","hasard",4,3],["pose","Abîme"],["reveil","Braise",true,[["soin","heros",12],["deg","cible",10],["riposte",4]]],["prixBete",2]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Riposte","Soin","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"La lande de Mezhovina n'a plus de bornes ; les moutons dispersés se couchent contre le vent.",
 "budget":"45,5 sans combo ; réveil +30 (66 %)"},
{"id":"ANT050-plus-1","zone":"ANT050","pole":"+","palier":1,"nom":"L'Étourneau de la lande","cout":1,"cible":0,
 "effet":"Un Étourneau de la lande rejoint le combat : 6 PV, frappe 2. Vos alliés gagnent 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Étourneau de la lande",6,2],["garde","allies",4],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"Les étourneaux se posent sur le dos des moutons pour y chercher les tiques, et ne choisissent pas le troupeau.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT050-plus-2","zone":"ANT050","pole":"+","palier":2,"nom":"La Laine commune","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Puis piochez 1 carte ; le héros gagne 3 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["pioche",1],["garde","heros",3],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"La laine de chaque famille s'empile dans la grange commune, et nulle toison ne se distingue plus.",
 "budget":"11,4 / 12,5 (−9 %)"},
{"id":"ANT050-plus-3","zone":"ANT050","pole":"+","palier":3,"nom":"Le Bourdon de bruyère","cout":2,"cible":1,
 "effet":"Un Bourdon de bruyère rejoint le combat : 8 PV, frappe 4. Vos alliés gagnent 8 de garde ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Bourdon de bruyère",8,4],["garde","allies",8],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Les bourdons butinent la bruyère violette de la lande, en ordre, d'une touffe à la voisine.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ANT050-plus-4","zone":"ANT050","pole":"+","palier":4,"nom":"Les Balances","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis la cible hésite ; riposte 4 jusqu'à votre prochain tour ; le héros se soigne de 8. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["hesite","cible"],["riposte",4],["soin","heros",8],["ennemiGarde",2]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les balances de Dobrogost sont de chêne et de cuivre ; elles penchent toujours un peu du même côté.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT050-plus-5","zone":"ANT050","pole":"+","palier":5,"nom":"Les Étourneaux en nuée","cout":2,"cible":1,
 "effet":"Des Étourneaux en nuée rejoignent le combat : 14 PV, frappe 5. Vos alliés gagnent 10 de garde ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Étourneaux en nuée",14,5],["garde","allies",10],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Marque","Garde","Prix"],
 "ambiance":"Au soir, les étourneaux tournent au-dessus de la lande en une seule nuée, et pas un ne s'en écarte.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT050-plus-6","zone":"ANT050","pole":"+","palier":6,"nom":"Le Troupeau unique","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis la garde de la cible tombe à 0 ; +2 mana de Vent ; le héros gagne 14 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde ; le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["briseGarde","cible"],["mana","Vent",2],["garde","heros",14],["riposte",3],["ennemiGarde",1],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Perce-garde","Riposte","Garde","Mana","Condition","Prix"],
 "ambiance":"Tous les moutons de Mezhovina rentrent derrière le chien du starosta, et chacun porte la même marque.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"ANT050-plus7","zone":"ANT050","pole":"+","palier":7,"nom":"La Marque unique","cout":2,"cible":1,
 "effet":"Un seul troupeau. Si la cible a de la garde, 16 à la cible. Un Grand Bourdon des bruyères (20 PV, frappe 7) ; alliés +18 de garde. Pose Sceau. Si Givre (consommée) : soin du héros 16 ; chaque ennemi −2 d'attaque. Prix : ennemis +1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["invoque","Grand Bourdon des bruyères",20,7],["garde","allies",18],["pose","Sceau"],["reveil","Givre",true,[["soin","heros",16],["affaiblit","tous",2]]],["ennemiGarde",1]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Garde","Soin","Condition","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Un seul troupeau couvre la lande, chaque bête marquée du même signe ; au milieu, les balances de Dobrogost.",
 "budget":"48,1 sans combo ; réveil +29,2 (61 %)"}
]
```
