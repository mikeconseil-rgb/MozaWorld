# Lot 11 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes). Carte des familles : `familles_A.md`, écrite avant les cartes (15 h 38), complétée à la remise (récits, noms, prénoms, institutions, crochets revus) après lecture de conteur_B, C et D.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de la cible 5, de tous 9, des k premiers 4k ; `si` compté à 50 % ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n et ennemiSoin n rendent 2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget`) ; formes du palier 7 entre 45 et 55 points de base, réveil de 60 à 100 %. Aucun boost. Plafonds sur la carte entière, `si` et réveil compris : riposte 8, mana 2, dégâts ciblés 20 hors Donjon aux paliers 1 à 6.

**Validateur** (`valide.py`, script Python repris du lot 10 et complété avec les leçons du lot 10, relancé sur ce fichier tel qu'il est remis, après lecture de conteur_B, C et D) : **0 erreur** ; un seul avertissement, attendu : la 4e colonne (4 au plus). Il vérifie :
- format et longueurs : un bloc fiche et un bloc de 14 cartes par zone, paliers 1 à 7 sur chaque pôle, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus, ambiance de 12 à 20 mots (comptés aussi apostrophes séparées), effet de 250 caractères au plus, chaque nombre des `ops` présent dans le texte, aucun mot de nombre dans la prose, mots interdits, pigments au +7, chutes « …, sans X. » (2 au plus) et en parole rapportée ;
- moteur : opérations et arguments dans l'ordre, conditions lues dans `tv/src/cartes.js` (sans y toucher), `"cible":1` partout où il faut, tag Loi, au moins 2 Lois par pôle d'Assemblée, au moins 3 invocations par pôle d'Antre, aucune condition rendue vraie ou fausse par une opération qui la précède ;
- budgets : écart ≤ 15 % aux paliers 1 à 6 ; palier 7 entre 45 et 55 de base, réveil de 60 à 100 %, phrase d'ouverture de 3 à 6 mots, prix, résonance réveillée différente de la posée ;
- plafonds sur la carte entière (`si` et réveil compris) : riposte ≤ 8, mana ≤ 2, dégâts ciblés ≤ 20 hors Donjon aux paliers 1 à 6 ; aucune opération répétée au premier niveau ; **écho** sur 4 cartes exactement, au premier niveau, jamais sous `si` ni sous réveil ;
- familles : places de LISTE.md tenues à l'unité (15), pas de famille principale commune aux deux pôles d'une zone, aucune famille principale déjà jouée par le même mot (lots 1 à 10, exil compris) hors les 2 reprises déclarées et le 2e emploi de la pioche des Assemblées (au plus un emploi avant, sinon erreur) ; appoints (3 ou 4 cartes, exil payé et colonnes compris) dans 3 pôles au plus ; dégâts ciblés sur 4 cartes au plus (5 pour les gros coups des Étoiles) ; « tous » sur 3 au plus ;
- vocations : par mot et par type (gros coups depuis le lot 5, invocations, pioche des Assemblées), trois emplois au plus, jamais A deux fois, crochet, prix principal et bêtes nouveaux, un seul emploi par mot dans le lot (cartes de B, C et D comprises) ; colonnes 4 au plus ;
- **leçons du lot 10** : chaque crochet dans 3 de mes pôles au plus (`hesite` et `hesiteAvant` comptés ensemble), intention ennemie dans 2 ; l'enchaînement compté comme une famille (aucun appoint) ; aucun crochet déjà pris par le même mot (lots 1 à 10, 3 cartes ou plus) ni par le même mot chez B, C ou D au lot ; deux sortes de prix par pôle ; même assemblage prix + crochet dans 2 de mes pôles au plus ; couples comptés avec les cartes de B, C et D (2 pôles du lot au plus) ;
- bêtes, nom par nom, sur une table commune des familles scientifiques (lièvres = léporidés, effraies = tytonidés à part des rapaces diurnes…) : aucune famille deux fois chez moi, 2 pôles du lot au plus avec les cartes de B, C et D ;
- noms : absents de `noms-pris.txt` et des cartes de B, C et D ; moitiés, nom de lieu, mot principal (jamais répété chez A), mot traduit et complément ; mot de nom commun avec une zone du même couple dans le lot ; prénoms et institutions absents des autres fichiers du lot 11.

**Places des familles (LISTE.md), toutes tenues, aucune autre prise** : soin du héros 1 (Ombre ANT243), soin des alliés 1 (Fer ASS053), garde du héros 2 (Cendre ASS046, Mensonge ASS090 — reprise), garde des alliés 1 (Bois ASS053 — reprise), affaiblissement 1 (Feu ANT221), riposte 1 (Tempête ANT091), marque 1 (Vide DON125), mana 1 (Nuit ANT092), perce-garde 1 (Tyrannie ASS062), exil 1 (Lumière ANT243), pioche 2 (Sève ASS113, Vérité ASS090, 2e emploi chacune) ; places rares : écho 1 (Sang ASS113 : 4 cartes, toujours au premier niveau, jamais sous `si` ni sous réveil), hésitation 1 (Liberté ASS062). Brûlure et seconde perce-garde perdues (déjà jouées sur tous les mots libres). **Vocations 5** : Étoiles en gros coups (DON125, 3e et dernier emploi, 5 cartes de dégâts ciblés) ; Rêve (ANT175), Aurore (ANT092), Glace (ANT221), Ordre (ANT017) en invocations, 3e et dernier emploi chacun. **Colonnes 4** : Floraison (garde ennemie et `cibleGarde`), Cauchemar (PV et `blesse`), Calme (marque et `vulnerable`), Chaos (hésitation et `hesite`).

**Vocations (leçon 1 du lot 9)** : trois emplois au plus par mot et par type, comptés au script sur les lots 1 à 10 (tableau en tête de familles_A.md), jamais deux fois chez A ; chaque emploi prend un crochet, un prix principal et des familles de bêtes que les emplois précédents n'avaient pas.

**Crochets (leçon du lot 10)** : chacun dans 3 de mes pôles au plus ; `hesite` et `hesiteAvant`, que le moteur lit tous deux sur l'intention « h », comptés ensemble (2 pôles : Chaos, Ordre). Intention ennemie : 2 pôles (Vide `elan`, Sang `soinEnnemi`). Répartition : `garde` 3 (Étoiles, Liberté, Nuit), `vulnerable` 3 (Bois, Tempête, Calme), `piocheCout0` 3 (Vérité, Tyrannie, Rêve), `cibleGarde` 2 (Floraison, Lumière), `brule` 2 (Ombre, Feu), `troisCartes` 2 (Sève, Fer), `blesse` 2 (Cendre, Cauchemar), `cartesJouees` 2 (Glace, Mensonge), `defausseAPrix` 1 (Aurore). L'enchaînement (`cartesJouees`, `troisCartes`) compte comme une famille : jamais plus de 2 cartes par pôle, donc jamais en appoint. Aucun crochet déjà pris (3 cartes ou plus) par le même mot dans les lots 1 à 10, ni par le même mot chez B, C ou D au lot (vérifié au script).

**Prix (leçon 3 du lot 9)** : deux sortes de prix dans chaque pôle, la seconde sur 2 cartes au moins ; aucun pôle ne paie le même prix sur ses 7 cartes.

**Points pour le critique**
- **Deux reprises** : Mensonge → garde du héros (un seul emploi avant, D DON081, lot 2, 5 cartes tout juste) et Bois → garde des alliés (un seul emploi avant, C CIT027, lot 2, 5 cartes tout juste). Sans elles, 15 places, 5 vocations et 4 colonnes ne tenaient pas : il aurait fallu une 5e colonne. Chacune prend un crochet et des prix que le pôle d'origine n'avait pas (voir familles_A.md, § 2).
- **Défausse / `defausseAPrix`** : ce couple est déjà sur 3 pôles chez les autres (B Pourriture, C Nectar, D Ordre). Mon seul pôle qui lit `defausseAPrix` (Aurore) ne paie jamais en défausse sur ses cartes à crochet (il paie en bête et en exil) ; je ne prends pas le couple.
- **Crochets changés depuis le plan de 15 h 38** : `hesite` et `hesiteAvant` étaient sur 6 pôles ; comme le moteur les confond, quatre pôles ont changé (Étoiles → `garde`, Vérité → `piocheCout0`, Tyrannie et Mensonge, voir la suite). Au script, la Tyrannie avait déjà lu `cibleGarde` et le Mensonge `defausseAPrix` dans des lots précédents : Tyrannie → `piocheCout0`, Mensonge → `cartesJouees` (2 cartes). Le Rêve quitte `brule`, que C lit sur le même mot (ANT215), pour `piocheCout0`. Corrigé dans familles_A.md.
- **Bêtes revues après la remise de B, C et D** : les élans de B (cervidés) et mes rennes font 2 pôles ; les renards de C (canidés) et mes chacals dorés, 2 pôles. Les bouscarles de l'Aurore sont devenues des ours à collier.
- **Noms** : « La Garnison debout » (ANT017) était déjà un nom de carte chez B (CIT032) : devenu « Les Légionnaires debout ».
- **Récits revus** pour ne pas croiser B, C et D : ASS053 (C ANT046, même couple Fer/Bois, raconte le fer et la forêt : mon récit est la chaîne de justice), ASS062 (C a la marche de nuit : mon camp part de jour), ANT175 (le troc des cristaux, pas l'incubation).

Recettes de récit (aucune deux fois, aucun document cité, aucun dialogue, aucune énumération) : DON125 le renversement de fortune ; ASS113 la réconciliation imposée (la greffe) ; ASS046 l'arbitrage et ses honoraires ; ASS053 la justice d'apparat (la chaîne) ; ASS062 la désertion ; ASS090 l'inspection ; ANT243 la plainte exaucée ; ANT175 le troc ; ANT092 l'ascension commandée ; ANT091 le salaire supprimé ; ANT221 la surenchère ; ANT017 la fausse alerte. Recettes des extrêmes : dans le champ `recette` de chaque zone. Aucun nombre précis dans ma prose.

Résonances des formes du palier 7 (posée → réveillée). Posées : Givre 6, Sceau 5, Abîme 4, Braise 4, Racine 3, Sang 2. Réveillées : Racine 5, Sang 5, Abîme 4, Sceau 4, Givre 3, Braise 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| DON125 | Abîme → Givre | Sceau → Abîme |
| ASS113 | Sang → Racine | Racine → Sang |
| ASS046 | Braise → Sceau | Racine → Braise |
| ASS053 | Sceau → Braise | Racine → Sceau |
| ASS062 | Sceau → Sang | Givre → Racine |
| ASS090 | Sceau → Abîme | Givre → Sceau |
| ANT243 | Abîme → Racine | Braise → Abîme |
| ANT175 | Abîme → Sang | Givre → Abîme |
| ANT092 | Abîme → Givre | Braise → Sceau |
| ANT091 | Givre → Braise | Givre → Racine |
| ANT221 | Givre → Sang | Braise → Givre |
| ANT017 | Sang → Racine | Sceau → Sang |

---

## 1. Gälab, la Grille du Balambaras (DON125) — Donjon · Récif · Eau · Éthiopienne

Forme du récit : le renversement de fortune (le prisonnier qui apprend les étoiles par la grille, le geôlier qui descend à sa place). Recette du −7 : le vide (la fosse noire sous un ciel bouché) ; du +7 : la démesure (le ciel entier dans la fosse, en bas comme en haut).

**Vide (−)** : la grille fermée → la marée basse → les boyaux du corail → le balambaras Zewde → le ciel couvert → la disgrâce → la Saison des nuages. Fil mécanique : **marque** (place ; jamais principale sur le Vide), dégâts ciblés sur 4 cartes, garde du héros et affaiblissement en touche, crochet d'intention « la cible prend son élan » (1 de mes 2 pôles d'intention) ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, dégâts ciblés 4, garde du héros 3, affaiblissement 3, riposte 2, soin du héros 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 7 cartes (PV 4, défausse 3).

**Étoiles (+)** : le carreau du nord → le pilote Bäkri → les repères gravés → la grâce du négus → les boutres → la route de l'Inde → les Étoiles apprises. Fil mécanique : **gros coups** (vocation, 3e et dernier emploi sur les Étoiles après C ASS157 et D ASS031 ; 5 cartes de dégâts ciblés, 28 au plus), perce-garde en appoint (4 cartes), crochet « la Garde du héros est levée » (jamais sur les Étoiles en vocation) ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 5, perce-garde 4, pioche 2, soin du héros 2, exil 2, riposte 2, affaiblissement 2, garde du héros 2 ; crochet « la Garde du héros est levée » sur 2 ; prix sur 7 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"DON125","nom":"Gälab, la Grille du Balambaras",
 "recit":"Le balambaras Zewde gardait les prisonniers du négus dans une fosse du récif de Gälab, fermée d'une grille de fer. À marée basse, la fosse se vidait, et l'on ne voyait plus d'en bas que le ciel coupé en carreaux. Le pilote Bäkri y passa de longues années à apprendre les étoiles, carreau par carreau. Gracié, il mena les boutres du négus jusqu'aux côtes de l'Inde et retour. Zewde tomba plus tard en disgrâce et descendit à son tour dans la fosse. C'était la saison des nuages.",
 "pal":["La fosse est noire et sèche sous un ciel bouché ; la grille ne découpe plus rien, et l'on n'entend que la mer qui revient par le fond.","Des boyaux de corail sous la grille, où l'eau se retire à chaque marée ; des carreaux de ciel gris, et des prisonniers qui ne lèvent plus la tête.","Un récif plat percé d'une fosse ronde, fermée d'une grille rouillée ; des boutres à l'ancre au large, et le fortin du balambaras sur la pointe.","Par la grille, les étoiles passent de carreau en carreau ; on a gravé dans le corail des repères que les pilotes savent lire.","La grille est ouverte sur un ciel immense qui descend jusqu'à l'eau de la fosse ; les étoiles brillent en bas comme en haut."],
 "pm":"Vide","pp":"Étoiles"}
```

```json
[
{"id":"DON125-moins-1","zone":"DON125","pole":"-","palier":1,"nom":"La Grille fermée","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",2],["riposte",2],["prixPV",1]],
 "tags":["Donjon","Eau","Pôle −","Marque","Riposte","Prix"],
 "ambiance":"Une grille de fer forgée au Choa couvre la fosse ; ses carreaux sont trop étroits pour une épaule.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON125-moins-2","zone":"DON125","pole":"-","palier":2,"nom":"La Marée basse","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","elan",[["deg","cible",10]]],["vulnerable","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Marque","Pioche","Condition","Prix"],
 "ambiance":"À marée basse, l'eau fuit par les boyaux du corail ; les prisonniers restent sur le sable mouillé.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON125-moins-3","zone":"DON125","pole":"-","palier":3,"nom":"Les Boyaux du corail","cout":2,"cible":1,
 "effet":"Tous les ennemis sont marqués : +2 par coup reçu ; l'attaque de la cible baisse de 2 ; le héros gagne 10 de garde. Prix : le héros perd 3 PV.",
 "ops":[["vulnerable","tous",2],["affaiblit","cible",2],["garde","heros",10],["prixPV",3]],
 "tags":["Donjon","Eau","Pôle −","Marque","Affaiblissement","Garde","Prix"],
 "ambiance":"Des passages trop bas pour un homme courent sous le récif ; la mer y entre en soufflant.",
 "budget":"24,2 / 24 (+1 %)"},
{"id":"DON125-moins-4","zone":"DON125","pole":"-","palier":4,"nom":"Le Balambaras Zewde","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 20 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; le héros gagne 15 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","elan",[["deg","cible",20]]],["vulnerable","cible",3],["garde","heros",15],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Marque","Garde","Condition","Prix"],
 "ambiance":"Zewde fait sa ronde au-dessus de la grille, le soir, et compte les têtes à la lueur d'une torche.",
 "budget":"28 / 28 (+0 %)"},
{"id":"DON125-moins-5","zone":"DON125","pole":"-","palier":5,"nom":"Le Ciel couvert","cout":2,"cible":1,
 "effet":"La cible est marquée : +3 par coup reçu ; 6 dégâts à tous les ennemis ; le héros se soigne de 12. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","cible",3],["deg","tous",6],["soin","heros",12],["prixPV",2]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Marque","Soin","Prix"],
 "ambiance":"Les nuages de la mousson ferment la grille ; en bas, on ne sait plus l'heure ni la saison.",
 "budget":"32,2 / 32 (+1 %)"},
{"id":"DON125-moins-6","zone":"DON125","pole":"-","palier":6,"nom":"La Disgrâce","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 24 dégâts à la cible. Puis tous les ennemis sont marqués : +2 par coup reçu ; l'attaque de chaque ennemi baisse de 1 ; riposte 3 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","elan",[["deg","cible",24]]],["vulnerable","tous",2],["affaiblit","tous",1],["riposte",3],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Marque","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Un messager du négus apporte un ordre scellé ; Zewde le lit, le relit, et rend lui-même son épée.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"DON125-moins7","zone":"DON125","pole":"-","palier":7,"nom":"La Saison des nuages","cout":2,"cible":1,
 "effet":"Le ciel se ferme. 18 à la cible ; la cible marquée (+4) ; la cible −3 d'attaque ; héros +15 de garde. Pose Abîme. Si Givre (consommée) : la cible marquée (+3) ; soin du héros 12 ; 10 à la cible. Prix : héros −4 PV.",
 "ops":[["deg","cible",18],["vulnerable","cible",4],["affaiblit","cible",3],["garde","heros",15],["pose","Abîme"],["reveil","Givre",true,[["vulnerable","cible",3],["soin","heros",12],["deg","cible",10]]],["prixPV",4]],
 "tags":["Donjon","Eau","Forme ultime −7","Dégâts","Marque","Affaiblissement","Garde","Soin","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"La fosse est noire sous un ciel bouché ; Zewde lève la tête vers une grille vide.",
 "budget":"47 sans combo ; réveil +31 (66 %)"},
{"id":"DON125-plus-1","zone":"DON125","pole":"+","palier":1,"nom":"Le Carreau du nord","cout":1,"cible":1,
 "effet":"8 dégâts à la cible ; ces coups ignorent la garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",8],["ignoreGarde"],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Perce-garde","Prix"],
 "ambiance":"Bäkri attend chaque nuit l'étoile qui traverse le carreau du nord, et lui donne le nom de sa mère.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON125-plus-2","zone":"DON125","pole":"+","palier":2,"nom":"Le Pilote Bäkri","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 14 dégâts à la cible. Puis la garde de la cible tombe à 0 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",14]]],["briseGarde","cible"],["pioche",1],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Perce-garde","Pioche","Condition","Prix"],
 "ambiance":"Bäkri trace la grille sur le sable de la fosse, et y pose des cailloux pour les étoiles.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON125-plus-3","zone":"DON125","pole":"+","palier":3,"nom":"Les Repères gravés","cout":2,"cible":1,
 "effet":"20 dégâts à la cible ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",20],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Soin","Prix"],
 "ambiance":"Avec un clou, Bäkri grave dans le corail le chemin des étoiles ; la marée efface, il recommence.",
 "budget":"24 / 24 (+0 %)"},
{"id":"DON125-plus-4","zone":"DON125","pole":"+","palier":4,"nom":"La Grâce du négus","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 26 dégâts à la cible. Puis la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 3 ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","garde",[["deg","cible",26]]],["briseGarde","cible"],["affaiblit","cible",3],["riposte",2],["exil"]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Affaiblissement","Perce-garde","Riposte","Condition","Exil","Prix"],
 "ambiance":"Un matin, on remonte Bäkri par une corde ; il cligne des yeux comme un oiseau de nuit au soleil.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON125-plus-5","zone":"DON125","pole":"+","palier":5,"nom":"Les Boutres du négus","cout":2,"cible":1,
 "effet":"28 dégâts à la cible ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",28],["riposte",2],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Riposte","Prix"],
 "ambiance":"Les boutres chargés d'encens et d'ivoire attendent au large ; le nouveau pilote ne regarde jamais la côte.",
 "budget":"30 / 32 (−6 %)"},
{"id":"DON125-plus-6","zone":"DON125","pole":"+","palier":6,"nom":"La Route de l'Inde","cout":2,"cible":1,
 "effet":"8 dégâts à tous les ennemis ; piochez 1 carte ; le héros gagne 3 de garde ; la cible est marquée : +2 par coup reçu ; la cible brûle : 2 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","tous",8],["pioche",1],["garde","heros",3],["vulnerable","cible",2],["brulure","cible",2,3],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Brûlure","Marque","Garde","Pioche","Prix"],
 "ambiance":"Bäkri mène les boutres par la haute mer, de nuit, en lisant le ciel comme on lit une grille.",
 "budget":"34 / 36 (−6 %)"},
{"id":"DON125-plus7","zone":"DON125","pole":"+","palier":7,"nom":"Les Étoiles apprises","cout":2,"cible":1,
 "effet":"Le pilote lit le ciel. 4 coups de 6 au hasard ; toute garde ennemie à 0 ; la cible −3 d'attaque ; soin du héros 12. Pose Sceau. Si Abîme (consommée) : 3 coups de 5 au hasard ; soin du héros 8 ; héros +8 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","hasard",6,4],["briseGarde","tous"],["affaiblit","cible",3],["soin","heros",12],["pose","Sceau"],["reveil","Abîme",true,[["deg","hasard",5,3],["soin","heros",8],["garde","heros",8]]],["exil"]],
 "tags":["Donjon","Eau","Forme ultime +7","Dégâts","Affaiblissement","Perce-garde","Garde","Soin","Exil","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"La grille ouverte sur le ciel entier ; les étoiles descendent jusqu'à l'eau de la fosse.",
 "budget":"48,6 sans combo ; réveil +29,4 (60 %)"}
]
```

---

## 2. Le Zbor de Školjić (ASS113) — Assemblée · Récif · Eau · Slave

Forme du récit : la réconciliation imposée (la greffe ordonnée par le zbor entre les oliviers de deux maisons ennemies). Recette du −7 : le silence (l'îlot barré, les olives qui tombent) ; du +7 : le geste (l'îlot qui cueille ensemble, chacun sur sa branche).

**Sang (−)** : la dette de sang → le quai partagé → les enterrements → la barque de Ljubo → la pierre du zbor → le guet des maisons → l'Îlot barré. Fil mécanique : **écho** (place rare, 4 cartes au premier niveau, jamais sous `si` ni sous réveil ; les cartes −2, −4 et −6, sans écho, sont faites pour être doublées), Lois ; affaiblissement, garde du héros et soin du héros en appoint ; crochet d'intention « un ennemi s'apprête à se soigner » (2e de mes 2 pôles d'intention) ; prix : PV et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : écho 4, affaiblissement 4, garde du héros 4, dégâts ciblés 4, pioche 2, soin du héros 2, riposte 2, marque 2 ; crochet « un ennemi s'apprête à se soigner » sur 3 ; prix sur 7 cartes (PV 4, garde ennemie 3).

**Sève (+)** : la branche de Vuk → le lien de laine → l'argile du knez → l'olivier pris → la récolte disputée → la part du knez → l'Olivier des maisons. Fil mécanique : **pioche** (place, 2e emploi sur la Sève après B ASS176, sans crochet), Lois ; soin du héros et garde des alliés en appoint ; crochet « c'est au moins votre troisième carte ce tour » (2 cartes, pas d'enchaînement en appoint) ; prix : PV et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, soin du héros 3, garde des alliés 3, dégâts ciblés 3, riposte 2, récupération 2, affaiblissement 2, soin des alliés 2, exil 2, garde du héros 2 ; crochet « c'est au moins votre troisième carte ce tour » sur 2 ; prix sur 7 cartes (PV 5, exil 2).

```json
{"fiche":"ASS113","nom":"Le Zbor de Školjić",
 "recit":"Les maisons de Vuk et de Ljubo, à Školjić, se devaient le sang depuis si longtemps que personne ne savait plus qui avait commencé. Le zbor du récif, las des enterrements, ordonna une greffe : une branche de l'olivier de Vuk sur le tronc de l'olivier de Ljubo, liée de laine et scellée d'argile, sous les yeux du knez Dobroslav. L'olivier prit et donna bien. Les maisons rivales se disputent désormais les olives, ce qui coûte moins d'hommes, et le knez prélève sa part sur chaque branche.",
 "pal":["Chaque porte de l'îlot est barrée, chaque barque tirée au sec ; la pierre du zbor est vide, et les olives pourrissent sous l'arbre.","Les gens de Vuk et ceux de Ljubo ne marchent plus sur le même quai ; on se croise en barque, les yeux sur l'eau.","Un îlot de calcaire au bord du récif, des maisons de pierre sèche, une pierre plate pour le zbor, et un vieil olivier greffé, lié de laine.","L'olivier greffé porte les fruits de l'une et l'autre maison ; on noue des laines de couleur pour savoir à qui est chaque branche.","Tout l'îlot cueille l'olivier ensemble à la saison, chacun sur sa branche nouée de laine, et le knez compte les paniers au pied du tronc."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"ASS113-moins-1","zone":"ASS113","pole":"-","palier":1,"nom":"La Dette de sang","cout":1,"cible":1,
 "effet":"Loi : la prochaine carte de zone de ce tour compte double ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["echo"],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Écho","Prix"],
 "ambiance":"Personne à Školjić ne sait plus qui a commencé ; chacun sait très bien à qui revient le prochain mort.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS113-moins-2","zone":"ASS113","pole":"-","palier":2,"nom":"Le Quai partagé","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Puis le héros gagne 8 de garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["garde","heros",8],["pioche",1],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Une corde coupe le quai en travers : ici les barques de Vuk, là celles de Ljubo.",
 "budget":"13,4 / 12,5 (+7 %)"},
{"id":"ASS113-moins-3","zone":"ASS113","pole":"-","palier":3,"nom":"Les Enterrements","cout":2,"cible":1,
 "effet":"Loi : 12 dégâts à la cible ; la prochaine carte de zone de ce tour compte double ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",12],["echo"],["garde","heros",10],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Garde","Écho","Prix"],
 "ambiance":"Le prêtre de l'îlot bénit les tombes le matin ; il ne demande plus de quelle maison.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS113-moins-4","zone":"ASS113","pole":"-","palier":4,"nom":"La Barque de Ljubo","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 18 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 2 ; le héros se soigne de 8. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","soinEnnemi",[["deg","cible",18]]],["affaiblit","tous",2],["soin","heros",8],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Ljubo rame autour du récif plutôt que de longer le quai de Vuk ; le détour lui prend la matinée.",
 "budget":"28,2 / 28 (+1 %)"},
{"id":"ASS113-moins-5","zone":"ASS113","pole":"-","palier":5,"nom":"La Pierre du zbor","cout":2,"cible":0,
 "effet":"Loi : la prochaine carte de zone de ce tour compte double ; le héros gagne 18 de garde ; riposte 5 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["echo"],["garde","heros",18],["riposte",5],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Riposte","Garde","Écho","Prix"],
 "ambiance":"Le zbor se réunit sur la pierre plate, chaque maison à un bout, et le knez au milieu, debout.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"ASS113-moins-6","zone":"ASS113","pole":"-","palier":6,"nom":"Le Guet des maisons","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 20 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; le héros se soigne de 12 ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","soinEnnemi",[["deg","cible",20]]],["affaiblit","cible",3],["soin","heros",12],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Marque","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Les fenêtres des maisons rivales se font face sur la crique ; on y voit des visages toute la nuit.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ASS113-moins7","zone":"ASS113","pole":"-","palier":7,"nom":"L'Îlot barré","cout":2,"cible":1,
 "effet":"Le sang revient toujours. La prochaine carte de zone compte double ; riposte 4 ; 6 à tous ; la cible marquée (+3) ; piochez 3. Pose Sang. Si Racine (consommée) : héros +18 de garde ; la cible −2 d'attaque ; riposte 4. Prix : héros −3 PV.",
 "ops":[["echo"],["riposte",4],["deg","tous",6],["vulnerable","cible",3],["pioche",3],["pose","Sang"],["reveil","Racine",true,[["garde","heros",18],["affaiblit","cible",2],["riposte",4]]],["prixPV",3]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Marque","Affaiblissement","Riposte","Garde","Pioche","Écho","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Chaque porte est barrée, chaque barque tirée au sec ; les olives tombent, et personne ne les ramasse.",
 "budget":"45,2 sans combo ; réveil +28,4 (63 %)"},
{"id":"ASS113-plus-1","zone":"ASS113","pole":"+","palier":1,"nom":"La Branche de Vuk","cout":1,"cible":0,
 "effet":"Loi : piochez 1 carte ; le héros se soigne de 4 ; vos alliés gagnent 2 de garde. Prix : le héros perd 1 PV.",
 "ops":[["pioche",1],["soin","heros",4],["garde","allies",2],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Garde","Soin","Pioche","Prix"],
 "ambiance":"On coupe au couteau la plus belle branche de l'olivier de Vuk ; Vuk regarde ailleurs, les bras croisés.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"ASS113-plus-2","zone":"ASS113","pole":"+","palier":2,"nom":"Le Lien de laine","cout":1,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 8 dégâts à la cible. Puis piochez 1 carte ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["si","troisCartes",[["deg","cible",8]]],["pioche",1],["riposte",3],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"La laine qui lie la greffe vient d'une brebis de Ljubo ; on l'a choisie exprès, chacun le sait.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS113-plus-3","zone":"ASS113","pole":"+","palier":3,"nom":"L'Argile du knez","cout":2,"cible":0,
 "effet":"Loi : piochez 2 cartes ; le héros se soigne de 10 ; vos alliés gagnent 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["soin","heros",10],["garde","allies",6],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le knez Dobroslav scelle la greffe d'argile de ses propres mains, puis se lave longuement dans la mer.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS113-plus-4","zone":"ASS113","pole":"+","palier":4,"nom":"L'Olivier pris","cout":2,"cible":1,
 "effet":"Piochez 1 carte ; vos alliés se soignent de 8 ; l'attaque de la cible baisse de 2 ; reprenez en main la dernière carte de votre défausse. Prix : le héros perd 1 PV.",
 "ops":[["pioche",1],["soin","allies",8],["affaiblit","cible",2],["recup"],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Affaiblissement","Soin","Pioche","Récupération","Prix"],
 "ambiance":"Au printemps, la branche de Vuk fleurit sur le tronc de Ljubo ; les maisons font semblant de rien.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS113-plus-5","zone":"ASS113","pole":"+","palier":5,"nom":"La Récolte disputée","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 16 dégâts à la cible. Puis piochez 2 cartes ; le héros gagne 12 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","troisCartes",[["deg","cible",16]]],["pioche",2],["garde","heros",12],["riposte",3],["exil"]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Riposte","Garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"On se dispute les olives une à une, sous l'arbre, avec des paniers marqués et beaucoup de cris.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS113-plus-6","zone":"ASS113","pole":"+","palier":6,"nom":"La Part du knez","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; vos alliés se soignent de 10 ; l'attaque de la cible baisse de 3 ; le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["soin","allies",10],["affaiblit","cible",3],["garde","heros",6],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Affaiblissement","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le knez prend sa part sur chaque branche, celle de Vuk et celle de Ljubo, puis recompte derrière eux.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"ASS113-plus7","zone":"ASS113","pole":"+","palier":7,"nom":"L'Olivier des maisons","cout":2,"cible":1,
 "effet":"L'arbre nourrit les ennemis. Piochez 2 ; soin du héros 18 ; alliés +10 de garde ; la cible marquée (+2) ; reprenez votre dernière défausse. Pose Racine. Si Sang (consommée) : soin du héros 14 ; 14 à la cible. Prix : cette carte s'exile.",
 "ops":[["pioche",2],["soin","heros",18],["garde","allies",10],["vulnerable","cible",2],["recup"],["pose","Racine"],["reveil","Sang",true,[["soin","heros",14],["deg","cible",14]]],["exil"]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Marque","Garde","Soin","Pioche","Récupération","Exil","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Tout l'îlot cueille ensemble, chacun sur sa branche nouée de laine ; le knez compte les paniers.",
 "budget":"45 sans combo ; réveil +28 (62 %)"}
]
```

---

## 3. Le Dál d'Ard Luatha (ASS046) — Assemblée · Haute montagne · Pierre · Celte

Forme du récit : l'arbitrage et ses honoraires (les clans prouvent leurs vieux foyers avec de la cendre montée de nuit ; le juge garde le pâturage). Recette du −7 : la ruine (la montagne grise de foyers froids) ; du +7 : la démesure (le pâturage fleuri jusqu'à la neige).

**Cendre (−)** : le foyer prouvé → les sacs de cendre → la montée de nuit → la cendre d'en face → le brithem Ébliu → les foyers froids → la Montagne grise. Fil mécanique : **garde du héros** (place ; jamais principale sur la Cendre), Lois ; riposte, affaiblissement et soin du héros en appoint ; crochet « le héros a moins de la moitié de ses PV » (aucun PV en prix) ; prix : défausse et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, riposte 4, soin du héros 4, dégâts ciblés 3, exil 2, affaiblissement 2, marque 2, pioche 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (défausse 5, exil 2).

**Floraison (+)** : l'herbe grasse → les ajoncs en fleur → le jugement rendu → les honoraires → les vaches du brithem → les clans bouviers → le Pâturage d'or. Fil mécanique : **colonne garde ennemie et « la cible a de la garde »** (crochet sur 4 cartes, toujours lu avant le prix ; garde ennemie en prix sur 5 cartes : la fleur pousse aussi pour l'adversaire), Lois ; soin du héros, soin des alliés, garde des alliés, affaiblissement et pioche à 4 cartes au plus ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 4, garde des alliés 4, soin des alliés 4, soin du héros 2, riposte 2, affaiblissement 2, pioche 2, hésitation 2, marque 2 ; crochet « la cible a de la garde » sur 4 ; prix sur 7 cartes (garde ennemie 5, PV 2).

```json
{"fiche":"ASS046","nom":"Le Dál d'Ard Luatha",
 "recit":"Les Uí Lomáin et les Uí Dercáin réclamaient le haut pâturage d'Ard Luatha. Le brithem Ébliu jugea que l'herbe irait au clan dont le foyer y avait brûlé le plus longtemps. Chaque clan monta donc de nuit des sacs de cendre pour prouver ses vieux foyers, puis d'autres sacs pour répondre à ceux d'en face. Le pâturage, gavé de cendre, fleurit comme aucun autre de la montagne. Ébliu le prit en honoraires, et les clans y mènent paître ses vaches.",
 "pal":["La montagne est grise jusqu'aux crêtes, couverte de foyers froids que personne n'a allumés ; le vent soulève la cendre et la laisse retomber.","Des cercles de pierres noircies sur l'herbe rase, des sacs vides éventrés ; chaque clan surveille les foyers de l'autre depuis son rocher.","Un haut pâturage entre les éboulis, une pierre levée où siège le dál, un sentier de nuit qui monte des vallées ; quelques vaches maigres.","L'herbe pousse grasse et drue sur la cendre ; les ajoncs fleurissent entre les rochers, et les vaches du brithem y paissent sans gardien.","Le pâturage fleurit jusqu'à la neige, en nappes d'or et de blanc ; les vaches du brithem y disparaissent jusqu'au dos, et les clans les gardent."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ASS046-moins-1","zone":"ASS046","pole":"-","palier":1,"nom":"Le Foyer prouvé","cout":1,"cible":0,
 "effet":"Loi : le héros gagne 10 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",10],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Riposte","Garde","Prix"],
 "ambiance":"Pour prouver un foyer, il faut sa cendre ; la loi du dál ne demande pas d'où elle vient.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS046-moins-2","zone":"ASS046","pole":"-","palier":2,"nom":"Les Sacs de cendre","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 8. Puis le héros gagne 10 de garde ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["soin","heros",8]]],["garde","heros",10],["affaiblit","cible",1],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Affaiblissement","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Des sacs de toile pleins de cendre de tourbe, montés à dos d'homme depuis les cuisines de la vallée.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS046-moins-3","zone":"ASS046","pole":"-","palier":3,"nom":"La Montée de nuit","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 14 de garde ; riposte 4 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",14],["riposte",4],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Marque","Riposte","Garde","Prix"],
 "ambiance":"Les porteurs des Uí Lomáin montent sans torche, et croisent dans le noir ceux des Uí Dercáin qui descendent.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ASS046-moins-4","zone":"ASS046","pole":"-","palier":4,"nom":"La Cendre d'en face","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 14. Puis 5 dégâts à la cible ; le héros gagne 16 de garde ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","heros",14]]],["deg","cible",5],["garde","heros",16],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Soin","Condition","Prix"],
 "ambiance":"Au matin, chaque clan découvre que l'autre a prouvé, cette nuit encore, des foyers très anciens.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"ASS046-moins-5","zone":"ASS046","pole":"-","palier":5,"nom":"Le Brithem Ébliu","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 18 de garde ; riposte 5 jusqu'à votre prochain tour ; piochez 1 carte ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",18],["riposte",5],["pioche",1],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Marque","Riposte","Garde","Pioche","Prix"],
 "ambiance":"Ébliu écoute les clans, pèse la cendre dans sa main, et demande toujours une nuit de plus pour juger.",
 "budget":"31,4 / 32 (−2 %)"},
{"id":"ASS046-moins-6","zone":"ASS046","pole":"-","palier":6,"nom":"Les Foyers froids","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 18. Puis 8 dégâts à la cible ; le héros gagne 20 de garde ; reprenez en main la dernière carte de votre défausse. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["soin","heros",18]]],["deg","cible",8],["garde","heros",20],["recup"],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Garde","Soin","Récupération","Condition","Exil","Prix"],
 "ambiance":"Des cercles de pierres noircies couvrent le pâturage, et aucun n'a jamais chauffé personne.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS046-moins7","zone":"ASS046","pole":"-","palier":7,"nom":"La Montagne grise","cout":2,"cible":1,
 "effet":"La cendre devient rempart. Héros +30 de garde ; riposte 6 ; piochez 1 ; 5 à tous. Pose Braise. Si Sceau (consommée) : soin du héros 15 ; 15 à la cible. Prix : défaussez 1 carte.",
 "ops":[["garde","heros",30],["riposte",6],["pioche",1],["deg","tous",5],["pose","Braise"],["reveil","Sceau",true,[["soin","heros",15],["deg","cible",15]]],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Dégâts","Riposte","Garde","Soin","Pioche","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"La montagne est grise jusqu'aux crêtes ; le vent soulève la cendre des foyers que personne n'a allumés.",
 "budget":"48 sans combo ; réveil +30 (62 %)"},
{"id":"ASS046-plus-1","zone":"ASS046","pole":"+","palier":1,"nom":"L'Herbe grasse","cout":1,"cible":1,
 "effet":"Loi : le héros se soigne de 6 ; l'attaque de la cible baisse de 1 ; riposte 1 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","heros",6],["affaiblit","cible",1],["riposte",1],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"Sur la cendre, l'herbe repousse plus verte et plus haute que partout ailleurs dans la montagne.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS046-plus-2","zone":"ASS046","pole":"+","palier":2,"nom":"Les Ajoncs en fleur","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; vos alliés gagnent 2 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["soin","allies",4],["garde","allies",2],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Les ajoncs fleurissent entre les éboulis ; leur odeur de miel monte jusqu'à la pierre du dál.",
 "budget":"11,4 / 12,5 (−9 %)"},
{"id":"ASS046-plus-3","zone":"ASS046","pole":"+","palier":3,"nom":"Le Jugement rendu","cout":2,"cible":0,
 "effet":"Loi : vos alliés se soignent de 8 ; vos alliés gagnent 8 de garde ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["soin","allies",8],["garde","allies",8],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Garde","Soin","Pioche","Prix"],
 "ambiance":"Ébliu rend son jugement au printemps, quand la fleur est là : le pâturage ira à qui l'a mérité.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS046-plus-4","zone":"ASS046","pole":"+","palier":4,"nom":"Les Honoraires","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 16 dégâts à la cible. Puis le héros se soigne de 10 ; l'attaque de la cible baisse de 2 ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["soin","heros",10],["affaiblit","cible",2],["riposte",2],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Affaiblissement","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les honoraires d'un brithem sont fixés par la coutume ; Ébliu connaît la coutume mieux que personne.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS046-plus-5","zone":"ASS046","pole":"+","palier":5,"nom":"Les Vaches du brithem","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 18 dégâts à la cible. Puis vos alliés se soignent de 8 ; piochez 1 carte ; la cible hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["soin","allies",8],["pioche",1],["hesite","cible"],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Contrôle","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les vaches d'Ébliu paissent dans les fleurs jusqu'au ventre, et leur lait se vend jusqu'à la côte.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS046-plus-6","zone":"ASS046","pole":"+","palier":6,"nom":"Les Clans bouviers","cout":2,"cible":1,
 "effet":"Loi : vos alliés se soignent de 12 ; vos alliés gagnent 8 de garde ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["soin","allies",12],["garde","allies",8],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Marque","Garde","Soin","Prix"],
 "ambiance":"Les gens des clans gardent maintenant les vaches du brithem, chacun de son côté du pâturage.",
 "budget":"31,6 / 36 (−12 %)"},
{"id":"ASS046-plus7","zone":"ASS046","pole":"+","palier":7,"nom":"Le Pâturage d'or","cout":2,"cible":1,
 "effet":"La fleur pousse pour tous. Si la cible a de la garde, 16 à la cible. Alliés +16 de garde ; 10 à tous. Pose Racine. Si Braise (consommée) : la cible marquée (+3) ; la cible hésite ; héros +19 de garde. Prix : ennemis +1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["garde","allies",16],["deg","tous",10],["pose","Racine"],["reveil","Braise",true,[["vulnerable","cible",3],["hesite","cible"],["garde","heros",19]]],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Dégâts","Marque","Contrôle","Garde","Condition","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Le pâturage fleurit jusqu'à la neige ; les vaches du brithem y disparaissent, et les clans les surveillent.",
 "budget":"47,2 sans combo ; réveil +29,2 (62 %)"}
]
```

---

## 4. Le Panchayat de Kejrisar (ASS053) — Assemblée · Désert de sable · Feu · Moghole

Forme du récit : la justice d'apparat (la chaîne de fer à clochettes tendue du fort au puits, qu'on ne peut tirer qu'au moment où personne n'écoute). Autre image que C ANT046 (même couple Fer/Bois : la forêt mise en réserve pour le fer) : ici, ni forge ni coupe, mais deux justices. Recette du −7 : l'ordre (la chaîne droite à travers le désert) ; du +7 : l'objet (le khejri qui couvre la place, la chaîne devenue corde à linge).

**Fer (−)** : la chaîne de justice → les clochettes → le faujdar Ruknuddin → le fer au soleil → les plaignants de nuit → le fort endormi → la Chaîne tendue. Fil mécanique : **soin des alliés** (place ; jamais principal sur le Fer), Lois ; garde du héros, affaiblissement et riposte en appoint ; crochet « c'est au moins votre troisième carte ce tour » (2 cartes) ; prix : soin ennemi et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, dégâts ciblés 4, garde du héros 3, affaiblissement 3, marque 2, pioche 2, riposte 2 ; crochet « c'est au moins votre troisième carte ce tour » sur 2 ; prix sur 7 cartes (soin ennemi 4, PV 3).

**Bois (+)** : le khejri du puits → les nattes du panchayat → la corde de fibre → les seaux de bois → l'ombre du soir → le jugement sous l'arbre → l'Arbre de Kejrisar. Fil mécanique : **garde des alliés** (reprise, 2e fois sur le Bois après C CIT027 au lot 2 ; voir la note au critique), Lois ; soin du héros et riposte en appoint ; crochet « la cible est déjà marquée » (marque sur la seule carte +7, lue ailleurs) ; prix : défausse et soin ennemi. C CIT027 lisait `garde` et payait en PV. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, soin du héros 4, riposte 4, dégâts ciblés 4, pioche 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (défausse 4, soin ennemi 3).

```json
{"fiche":"ASS053","nom":"Le Panchayat de Kejrisar",
 "recit":"Le panchayat de Kejrisar jugeait sous le khejri du puits. Le faujdar Ruknuddin, pour montrer la justice de l'empereur, fit tendre de son fort jusqu'au puits une chaîne de fer garnie de clochettes : quiconque avait un grief n'aurait qu'à tirer. Au soleil, la chaîne brûlait les mains. Les plaignants vinrent de nuit, et la nuit le faujdar dormait loin des clochettes. Les gens revinrent sous l'arbre, et le panchayat jugea comme avant. La chaîne fut très admirée des voyageurs.",
 "pal":["Une chaîne de fer tendue à travers le désert, droite comme une loi, brûlante, garnie de clochettes immobiles ; personne ne s'en approche.","Le fort du faujdar tient le puits sous sa chaîne ; des gardes en cuirasse chauffée au soleil, et des plaignants qui attendent la nuit.","Un bourg de terre sèche autour d'un puits profond, un khejri au tronc noué, un fort sur la dune ; une chaîne pend entre le fort et le puits.","Sous le khejri, le panchayat siège sur des nattes ; les branches portent des cordes, des seaux de bois et des chiffons noués en vœux.","Le khejri couvre la place de son ombre ; tout le bourg siège dessous, et la chaîne rouillée sert de corde à linge entre ses branches."],
 "pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"ASS053-moins-1","zone":"ASS053","pole":"-","palier":1,"nom":"La Chaîne de justice","cout":1,"cible":0,
 "effet":"Loi : vos alliés se soignent de 5 ; le héros gagne 5 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","allies",5],["garde","heros",5],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Garde","Soin","Prix"],
 "ambiance":"La chaîne descend du fort jusqu'au puits, assez longue pour qu'on la voie de la route des caravanes.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ASS053-moins-2","zone":"ASS053","pole":"-","palier":2,"nom":"Les Clochettes","cout":1,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["si","troisCartes",[["deg","cible",10]]],["soin","allies",4],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Des clochettes de cuivre pendent à chaque anneau ; le vent du désert les fait sonner pour rien.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS053-moins-3","zone":"ASS053","pole":"-","palier":3,"nom":"Le Faujdar Ruknuddin","cout":2,"cible":1,
 "effet":"Loi : vos alliés se soignent de 10 ; le héros gagne 8 de garde ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","allies",10],["garde","heros",8],["vulnerable","cible",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Marque","Garde","Soin","Prix"],
 "ambiance":"Ruknuddin montre la chaîne aux voyageurs de passage, et leur explique la justice de l'empereur.",
 "budget":"25,4 / 24 (+6 %)"},
{"id":"ASS053-moins-4","zone":"ASS053","pole":"-","palier":4,"nom":"Le Fer au soleil","cout":2,"cible":1,
 "effet":"8 dégâts à la cible ; vos alliés se soignent de 10 ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",8],["soin","allies",10],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Soin","Prix"],
 "ambiance":"À midi, le fer de la chaîne brûle comme une poêle ; même les corbeaux ne s'y posent pas.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS053-moins-5","zone":"ASS053","pole":"-","palier":5,"nom":"Les Plaignants de nuit","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 18 dégâts à la cible. Puis vos alliés se soignent de 10 ; piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","troisCartes",[["deg","cible",18]]],["soin","allies",10],["pioche",1],["riposte",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Riposte","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les plaignants viennent tirer la chaîne de nuit, quand elle est froide, et attendent que quelqu'un se lève.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS053-moins-6","zone":"ASS053","pole":"-","palier":6,"nom":"Le Fort endormi","cout":2,"cible":0,
 "effet":"Loi : vos alliés se soignent de 14 ; riposte 4 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["soin","allies",14],["riposte",4],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Riposte","Soin","Pioche","Prix"],
 "ambiance":"La nuit, le faujdar dort au fond du fort, loin des clochettes ; ses gardes n'entendent plus rien.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS053-moins7","zone":"ASS053","pole":"-","palier":7,"nom":"La Chaîne tendue","cout":2,"cible":1,
 "effet":"Le fer garde la place. Alliés soignés de 16 ; héros +15 de garde ; la cible −3 d'attaque ; la cible marquée (+2). Pose Sceau. Si Braise (consommée) : 16 à la cible ; soin du héros 13. Prix : ennemis soignés de 2.",
 "ops":[["soin","allies",16],["garde","heros",15],["affaiblit","cible",3],["vulnerable","cible",2],["pose","Sceau"],["reveil","Braise",true,[["deg","cible",16],["soin","heros",13]]],["ennemiSoin",2]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Marque","Affaiblissement","Garde","Soin","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Une chaîne de fer tendue à travers le désert, droite et brûlante ; ses clochettes ne sonnent plus pour personne.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"ASS053-plus-1","zone":"ASS053","pole":"+","palier":1,"nom":"Le Khejri du puits","cout":1,"cible":0,
 "effet":"Loi : vos alliés gagnent 5 de garde ; le héros se soigne de 4 ; riposte 1 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",5],["soin","heros",4],["riposte",1],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Riposte","Garde","Soin","Prix"],
 "ambiance":"Le khejri du puits a le tronc noué et les épines longues ; on ne l'a jamais coupé.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS053-plus-2","zone":"ASS053","pole":"+","palier":2,"nom":"Les Nattes du panchayat","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis vos alliés gagnent 6 de garde ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["garde","allies",6],["soin","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Les anciens du panchayat s'assoient sur des nattes de jonc, chacun à sa place, depuis toujours.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"ASS053-plus-3","zone":"ASS053","pole":"+","palier":3,"nom":"La Corde de fibre","cout":2,"cible":0,
 "effet":"Loi : vos alliés gagnent 12 de garde ; riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",12],["riposte",3],["pioche",1],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Riposte","Garde","Pioche","Prix"],
 "ambiance":"La corde du puits est tressée en fibre de khejri ; elle ne brûle les mains de personne.",
 "budget":"22,4 / 24 (−7 %)"},
{"id":"ASS053-plus-4","zone":"ASS053","pole":"+","palier":4,"nom":"Les Seaux de bois","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Puis vos alliés gagnent 12 de garde ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["garde","allies",12],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Les seaux de bois remontent l'eau fraîche ; on en boit un peu avant de commencer à se plaindre.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ASS053-plus-5","zone":"ASS053","pole":"+","palier":5,"nom":"L'Ombre du soir","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 14 de garde ; le héros se soigne de 10 ; piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",14],["soin","heros",10],["pioche",1],["riposte",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Riposte","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le panchayat siège quand l'ombre du khejri couvre la place, et se lève quand elle s'en va.",
 "budget":"32,8 / 32 (+2 %)"},
{"id":"ASS053-plus-6","zone":"ASS053","pole":"+","palier":6,"nom":"Le Jugement sous l'arbre","cout":2,"cible":1,
 "effet":"Loi : si la cible est déjà marquée, 20 dégâts à la cible. Puis vos alliés gagnent 14 de garde ; l'attaque de la cible baisse de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["garde","allies",14],["affaiblit","cible",3],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"On juge comme avant, sous l'arbre, à voix basse, et le faujdar n'en sait rien.",
 "budget":"32,8 / 36 (−9 %)"},
{"id":"ASS053-plus7","zone":"ASS053","pole":"+","palier":7,"nom":"L'Arbre de Kejrisar","cout":2,"cible":1,
 "effet":"L'arbre rend la justice. Alliés +22 de garde ; soin du héros 14 ; la cible marquée (+2) ; la cible hésite. Pose Racine. Si Sceau (consommée) : soin du héros 12 ; riposte 4 ; 10 à la cible. Prix : défaussez 1 carte.",
 "ops":[["garde","allies",22],["soin","heros",14],["vulnerable","cible",2],["hesite","cible"],["pose","Racine"],["reveil","Sceau",true,[["soin","heros",12],["riposte",4],["deg","cible",10]]],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Marque","Contrôle","Riposte","Garde","Soin","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Le khejri couvre la place de son ombre ; la chaîne rouillée sert de corde à linge entre ses branches.",
 "budget":"48,4 sans combo ; réveil +30 (62 %)"}
]
```

---

## 5. Qimaavik, les Tentes pliées (ASS062) — Assemblée · Savane · Feu · Inuit

> **Note du critique (lot 11)** : Crochet de la Liberté : `garde` devient `bete` en +2, +4, +6. Le moteur range le héros dans `CB.allies` : « vos alliés gagnent n de garde » lève aussi la Garde du héros, et le pôle nourrissait donc `garde` sur 3 cartes (couple garde et `garde` caché). Budgets inchangés (un `si` compte 50 %).

Forme du récit : la désertion (le camp qui part pendant que le chef chasse, et le laisse régner sur l'herbe). Recette du −7 : le vide (un homme seul au milieu des cercles de pierres) ; du +7 : la foule (la longue file du camp en marche).

**Tyrannie (−)** : le meilleur chasseur → celui qu'on écoute → l'angajuqqaaq → les tentes en rang → le feu ordonné → le mariage décidé → le Roi de l'herbe. Fil mécanique : **perce-garde** (place ; la seule libre sur la Tyrannie), Lois ; marque, dégâts à tous et garde du héros sur 2 cartes chacun ; crochet « vous avez en main une carte de coût 0 » (le chef qui garde une carte en réserve ; `cibleGarde` était déjà pris par la Tyrannie dans un lot précédent) ; prix : PV et exil. C ASS127 (même couple) lit `blesse`. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, dégâts ciblés 4, riposte 2, marque 2, exil 2, garde du héros 2, soin du héros 2, hésitation 2, dégâts à tous 2, affaiblissement 2, mana 2, pioche 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (PV 5, exil 2).

**Liberté (+)** : la chasse seule → les peaux pliées → les chiens muets → les acacias de l'ouest → les vieilles et les marmites → la halte choisie → la File dans la savane. Fil mécanique : **hésitation** (place rare ; hésitation de tous sur 2 cartes non voisines), Lois ; soin des alliés et pioche en appoint ; crochet « la Garde du héros est levée » (garde du héros sur la seule forme ultime) ; prix : soin ennemi et défausse. C ASS127 (même couple) lit `cartesJouees`. Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 7, soin des alliés 4, pioche 3, dégâts ciblés 3, garde des alliés 2, riposte 2, soin du héros 2, affaiblissement 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (soin ennemi 4, défausse 3).

```json
{"fiche":"ASS062","nom":"Qimaavik, les Tentes pliées",
 "recit":"Angutaq fut le meilleur chasseur du camp de Qimaavik, puis celui qu'on écoutait, puis celui qui décidait de tout : où dresser les tentes, qui épouserait qui, quand mettre le feu à l'herbe sèche. On l'appela angajuqqaaq, et personne ne le contredit. Un jour qu'il chassait seul l'antilope, le camp plia ses peaux et partit vers les acacias de l'ouest, chiens, vieilles et marmites compris. Angutaq revint régner sur des cercles de pierres et sur l'herbe brûlée. Il régna longtemps.",
 "pal":["Des cercles de pierres sur l'herbe brûlée, à perte de vue ; un homme debout au milieu, et le vent qui ne rapporte aucune voix.","Les tentes sont dressées en rang, à la place fixée ; l'herbe brûle où on l'a ordonné, et personne ne parle fort près de la tente du chef.","Un camp de tentes de peau dans la savane jaune, des chiens couchés à l'ombre des acacias, des lances qui sèchent ; l'herbe jusqu'aux hanches.","On plie les peaux sans bruit, on charge les traîneaux sur l'herbe ; une file part vers l'ouest, et les chiens suivent sans aboyer.","Le camp entier marche dans la savane, une longue file de tentes roulées, de chiens et de marmites ; à chaque halte, chacun plante où il veut."],
 "pm":"Tyrannie","pp":"Liberté"}
```

```json
[
{"id":"ASS062-moins-1","zone":"ASS062","pole":"-","palier":1,"nom":"Le Meilleur Chasseur","cout":1,"cible":1,
 "effet":"Loi : la garde de la cible tombe à 0 ; la cible est marquée : +2 par coup reçu ; riposte 1 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["vulnerable","cible",2],["riposte",1],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Marque","Perce-garde","Riposte","Prix"],
 "ambiance":"Angutaq rapporte une antilope quand les autres n'en voient pas ; on lui garde la meilleure place au feu.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS062-moins-2","zone":"ASS062","pole":"-","palier":2,"nom":"Celui qu'on écoute","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis la garde de la cible tombe à 0 ; le héros gagne 6 de garde ; le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["briseGarde","cible"],["garde","heros",6],["soin","heros",3],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Perce-garde","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Quand Angutaq parle, les autres chasseurs se taisent, d'abord par respect, ensuite par habitude.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"ASS062-moins-3","zone":"ASS062","pole":"-","palier":3,"nom":"L'Angajuqqaaq","cout":2,"cible":1,
 "effet":"Loi : ces coups ignorent la garde ; 5 dégâts à tous les ennemis ; le héros se soigne de 6 ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["ignoreGarde"],["deg","tous",5],["soin","heros",6],["hesite","cible"],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Perce-garde","Contrôle","Soin","Prix"],
 "ambiance":"On ne sait plus qui lui a donné ce nom ; Angutaq, lui, ne l'a jamais refusé.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS062-moins-4","zone":"ASS062","pole":"-","palier":4,"nom":"Les Tentes en rang","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 16 dégâts à la cible. Puis la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 3 ; le héros gagne 10 de garde. Prix : cette carte s'exile.",
 "ops":[["si","piocheCout0",[["deg","cible",16]]],["briseGarde","cible"],["affaiblit","cible",3],["garde","heros",10],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Perce-garde","Garde","Condition","Exil","Prix"],
 "ambiance":"Chaque tente est dressée à la place qu'il a dite, à la longueur de son bras de la voisine.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS062-moins-5","zone":"ASS062","pole":"-","palier":5,"nom":"Le Feu ordonné","cout":2,"cible":0,
 "effet":"Loi : toute garde ennemie tombe à 0 ; 6 dégâts à tous les ennemis ; riposte 2 jusqu'à votre prochain tour ; vos alliés gagnent 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","tous"],["deg","tous",6],["riposte",2],["garde","allies",4],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Perce-garde","Riposte","Garde","Prix"],
 "ambiance":"L'herbe sèche brûle quand Angutaq le veut et où il le veut ; le vent n'a pas été consulté.",
 "budget":"27,6 / 32 (−14 %)"},
{"id":"ASS062-moins-6","zone":"ASS062","pole":"-","palier":6,"nom":"Le Mariage décidé","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 3 ; piochez 1 carte ; +2 mana de Feu ; la cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["briseGarde","cible"],["affaiblit","cible",3],["pioche",1],["mana","Feu",2],["hesite","cible"],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Perce-garde","Contrôle","Pioche","Mana","Condition","Prix"],
 "ambiance":"Angutaq décide qui épouse qui ; les familles se saluent poliment aux noces, et ne se parlent plus.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ASS062-moins7","zone":"ASS062","pole":"-","palier":7,"nom":"Le Roi de l'herbe","cout":2,"cible":1,
 "effet":"Il règne sur l'herbe. 24 à la cible ; les coups ignorent la garde ; toute garde ennemie à 0 ; la cible marquée (+2) ; piochez 2. Pose Sceau. Si Sang (consommée) : 14 à la cible ; la cible brûle (3 × 3 tours) ; +2 mana de Feu. Prix : héros −2 PV.",
 "ops":[["deg","cible",24],["ignoreGarde"],["briseGarde","tous"],["vulnerable","cible",2],["pioche",2],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",14],["brulure","cible",3,3],["mana","Feu",2]]],["prixPV",2]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Brûlure","Marque","Perce-garde","Pioche","Mana","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Des cercles de pierres sur l'herbe brûlée, à perte de vue ; Angutaq debout au milieu, et personne à commander.",
 "budget":"45,6 sans combo ; réveil +29 (64 %)"},
{"id":"ASS062-plus-1","zone":"ASS062","pole":"+","palier":1,"nom":"La Chasse seule","cout":1,"cible":1,
 "effet":"Loi : la cible hésite ; vos alliés se soignent de 3 ; vos alliés gagnent 2 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["hesite","cible"],["soin","allies",3],["garde","allies",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Contrôle","Garde","Soin","Prix"],
 "ambiance":"Angutaq part seul sur la piste d'une antilope ; derrière lui, personne ne le regarde partir.",
 "budget":"9,9 / 10 (−1 %)"},
{"id":"ASS062-plus-2","zone":"ASS062","pole":"+","palier":2,"nom":"Les Peaux pliées","cout":1,"cible":1,
 "effet":"Si une bête alliée est en jeu, 12 dégâts à la cible. Puis la cible hésite ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["deg","cible",12]]],["hesite","cible"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Contrôle","Pioche","Condition","Prix"],
 "ambiance":"On plie les peaux sans un mot, de la plus vieille tente à la plus neuve, comme toujours.",
 "budget":"12 / 12,5 (−4 %) ; condition changée par le critique (lot 11)"},
{"id":"ASS062-plus-3","zone":"ASS062","pole":"+","palier":3,"nom":"Les Chiens muets","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis hésitent ; vos alliés se soignent de 6 ; piochez 1 carte ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["hesite","tous"],["soin","allies",6],["pioche",1],["riposte",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Contrôle","Riposte","Soin","Pioche","Prix"],
 "ambiance":"Les chiens suivent le camp sans aboyer ; eux aussi ont compris qu'il ne fallait rien dire.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS062-plus-4","zone":"ASS062","pole":"+","palier":4,"nom":"Les Acacias de l'ouest","cout":2,"cible":1,
 "effet":"Si une bête alliée est en jeu, 14 dégâts à la cible. Puis la cible hésite ; le héros se soigne de 10 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["deg","cible",14]]],["hesite","cible"],["soin","heros",10],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Affaiblissement","Contrôle","Soin","Condition","Prix"],
 "ambiance":"Les acacias de l'ouest ont de l'ombre pour tous ; personne n'y a encore marqué sa place.",
 "budget":"25 / 28 (−11 %) ; condition changée par le critique (lot 11)"},
{"id":"ASS062-plus-5","zone":"ASS062","pole":"+","palier":5,"nom":"Les Vieilles et les marmites","cout":2,"cible":0,
 "effet":"Les 2 premiers ennemis hésitent ; vos alliés se soignent de 8 ; piochez 1 carte ; vos alliés gagnent 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["hesite",2],["soin","allies",8],["pioche",1],["garde","allies",6],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Contrôle","Garde","Soin","Pioche","Prix"],
 "ambiance":"Les vieilles portent les marmites sur le dos et marchent plus vite que les jeunes hommes.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ASS062-plus-6","zone":"ASS062","pole":"+","palier":6,"nom":"La Halte choisie","cout":2,"cible":1,
 "effet":"Loi : si une bête alliée est en jeu, 18 dégâts à la cible. Puis tous les ennemis hésitent ; le héros se soigne de 8 ; l'attaque de la cible baisse de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["deg","cible",18]]],["hesite","tous"],["soin","heros",8],["affaiblit","cible",3],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Contrôle","Soin","Condition","Prix"],
 "ambiance":"À la halte, chacun plante sa tente où il veut ; le camp semble en désordre, et il l'est.",
 "budget":"32 / 36 (−11 %) ; condition changée par le critique (lot 11)"},
{"id":"ASS062-plus7","zone":"ASS062","pole":"+","palier":7,"nom":"La File dans la savane","cout":2,"cible":1,
 "effet":"Le camp part sans maître. Les 3 premiers hésitent ; alliés soignés de 12 ; 6 à tous ; riposte 3. Pose Givre. Si Racine (consommée) : la cible marquée (+3) ; héros +12 de garde ; la cible brûle (3 × 3 tours). Prix : ennemis soignés de 2.",
 "ops":[["hesite",3],["soin","allies",12],["deg","tous",6],["riposte",3],["pose","Givre"],["reveil","Racine",true,[["vulnerable","cible",3],["garde","heros",12],["brulure","cible",3,3]]],["ennemiSoin",2]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Brûlure","Marque","Contrôle","Riposte","Garde","Soin","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Une longue file de tentes roulées, de chiens et de marmites traverse la savane ; personne ne marche devant.",
 "budget":"45,2 sans combo ; réveil +27,6 (61 %)"}
]
```

---

## 6. Le Yushitai de Mogu-ling (ASS090) — Assemblée · Forêt de champignons géants · Sève · Chinoise impériale

Forme du récit : l'inspection (le censeur qui écrit ce qu'il voit, et que la cour casse parce que les faux rapports étaient plus anciens). Recette du −7 : la démesure (la forêt de chapeaux laqués collés, plus belle que la vraie) ; du +7 : le vide (la forêt nue, le pinceau posé).

**Mensonge (−)** : le compte qui monte → les chapeaux collés → les cueilleurs souriants → la résine du préfet → le rapport de l'an passé → le ruyi de jade → la Forêt laquée. Fil mécanique : **garde du héros** (reprise, 2e fois sur le Mensonge après D DON081 au lot 2 ; voir la note au critique), Lois ; hésitation et pioche en appoint ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 cartes, pour que l'enchaînement ne devienne pas une famille (le mensonge s'appuie sur ce qui a déjà été dit ; `defausseAPrix` était déjà pris par le Mensonge dans un lot précédent) ; prix : PV et garde ennemie. D CIT025 (même couple) a la garde des alliés et lit `hesiteAvant`. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, hésitation 4, dégâts ciblés 4, pioche 3, soin du héros 2, riposte 2, affaiblissement 2, mana 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 ; prix sur 7 cartes (PV 4, garde ennemie 3).

**Vérité (+)** : le censeur Gao → les troncs morts → ce qu'il a vu → le pinceau de Gao → le rapport invraisemblable → le rang cassé → la Forêt nue. Fil mécanique : **pioche** (place, 2e emploi sur la Vérité après B ASS161, qui lisait `vulnerable` et payait en PV), Lois ; marque et récupération en appoint ; crochet « vous avez en main une carte de coût 0 » (jamais lu par la Vérité) ; prix : défausse et exil. D CIT025 (même couple) a une colonne garde/`garde`. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, marque 4, dégâts ciblés 4, récupération 3, garde du héros 2, exil 2, affaiblissement 2, soin du héros 2, riposte 2, mana 2, hésitation 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (défausse 5, exil 2).

```json
{"fiche":"ASS090","nom":"Le Yushitai de Mogu-ling",
 "recit":"Chaque automne, le préfet de Mogu-ling envoyait à la cour le compte des champignons de longévité cueillis sous les grands chapeaux, et chaque automne le compte montait. Le censeur Gao Wenyuan fut envoyé voir. Il trouva des chapeaux collés à la résine sur des troncs morts, et des cueilleurs payés pour sourire. Il écrivit ce qu'il avait vu. Le Yushitai compara son rapport à ceux des années passées, le jugea invraisemblable, et le fit casser de son rang. Le préfet reçut un ruyi de jade.",
 "pal":["Des chapeaux laqués collés sur chaque tronc mort, jusqu'à l'horizon, plus beaux que les vrais ; des cueilleurs souriants à chaque détour.","Des pots de résine au pied des troncs, des chapeaux fraîchement collés qui sèchent ; les cueilleurs répètent leur sourire devant l'intendant.","Une forêt de champignons géants sous une brume douce, des cueilleurs en chapeaux de paille, un yamen aux tuiles vernies ; des paniers de lingzhi.","Les chapeaux collés se décollent et tombent ; on voit les troncs morts, les vrais champignons rares, et un censeur qui écrit au pinceau.","La forêt est nue et silencieuse, avec ses rares champignons vrais ; plus de cueilleurs, plus de préfet, et le pinceau du censeur posé sur une pierre."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"ASS090-moins-1","zone":"ASS090","pole":"-","palier":1,"nom":"Le Compte qui monte","cout":1,"cible":1,
 "effet":"Loi : le héros gagne 8 de garde ; la cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["garde","heros",8],["hesite","cible"],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Contrôle","Garde","Prix"],
 "ambiance":"Le compte des champignons de longévité monte chaque automne, recopié d'une écriture de plus en plus belle.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ASS090-moins-2","zone":"ASS090","pole":"-","palier":2,"nom":"Les Chapeaux collés","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 10 dégâts à la cible. Puis le héros gagne 8 de garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["garde","heros",8],["pioche",1],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Des chapeaux de champignons géants, découpés ailleurs, collés sur des troncs morts et lustrés à l'huile.",
 "budget":"13,4 / 12,5 (+7 %)"},
{"id":"ASS090-moins-3","zone":"ASS090","pole":"-","palier":3,"nom":"Les Cueilleurs souriants","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 14 de garde ; la cible hésite ; piochez 1 carte ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",14],["hesite","cible"],["pioche",1],["soin","heros",6],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Contrôle","Garde","Soin","Pioche","Prix"],
 "ambiance":"Les cueilleurs reçoivent une ligature de sapèques pour sourire au passage des inspecteurs, et un peu plus pour chanter.",
 "budget":"24,2 / 24 (+1 %)"},
{"id":"ASS090-moins-4","zone":"ASS090","pole":"-","palier":4,"nom":"La Résine du préfet","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 16 dégâts à la cible. Puis le héros gagne 16 de garde ; l'attaque de la cible baisse de 2 ; riposte 1 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",16]]],["garde","heros",16],["affaiblit","cible",2],["riposte",1],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"La résine chauffe dans des pots de terre au pied des troncs ; elle sent le pin, et colle tout.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"ASS090-moins-5","zone":"ASS090","pole":"-","palier":5,"nom":"Le Rapport de l'an passé","cout":2,"cible":0,
 "effet":"Loi : le héros gagne 18 de garde ; les 2 premiers ennemis hésitent ; piochez 1 carte ; +1 mana de Sève. Prix : le héros perd 1 PV.",
 "ops":[["garde","heros",18],["hesite",2],["pioche",1],["mana","Sève",1],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Contrôle","Garde","Pioche","Mana","Prix"],
 "ambiance":"Au Yushitai, on compare le rapport du censeur à ceux des années passées, et l'on hoche la tête.",
 "budget":"28,4 / 32 (−11 %)"},
{"id":"ASS090-moins-6","zone":"ASS090","pole":"-","palier":6,"nom":"Le Ruyi de jade","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros gagne 20 de garde ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",10],["garde","heros",20],["affaiblit","tous",1],["soin","heros",6],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Affaiblissement","Garde","Soin","Prix"],
 "ambiance":"Le préfet reçoit son ruyi de jade à genoux, et remercie la cour de sa clairvoyance.",
 "budget":"36,6 / 36 (+2 %)"},
{"id":"ASS090-moins7","zone":"ASS090","pole":"-","palier":7,"nom":"La Forêt laquée","cout":2,"cible":1,
 "effet":"La forêt ment pour lui. Héros +30 de garde ; tous hésitent ; riposte 4 ; reprenez votre dernière défausse ; la cible marquée (+2). Pose Sceau. Si Abîme (consommée) : 18 à la cible ; la cible brûle (3 × 3 tours) ; +1 mana de Sève. Prix : héros −3 PV.",
 "ops":[["garde","heros",30],["hesite","tous"],["riposte",4],["recup"],["vulnerable","cible",2],["pose","Sceau"],["reveil","Abîme",true,[["deg","cible",18],["brulure","cible",3,3],["mana","Sève",1]]],["prixPV",3]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Brûlure","Marque","Contrôle","Riposte","Garde","Récupération","Mana","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"Des chapeaux laqués sur chaque tronc mort, à perte de vue, plus beaux que des vrais ; pas un champignon.",
 "budget":"48 sans combo ; réveil +30 (62 %)"},
{"id":"ASS090-plus-1","zone":"ASS090","pole":"+","palier":1,"nom":"Le Censeur Gao","cout":1,"cible":1,
 "effet":"Loi : piochez 1 carte ; la cible est marquée : +2 par coup reçu ; le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",1],["vulnerable","cible",2],["garde","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Marque","Garde","Pioche","Prix"],
 "ambiance":"Gao Wenyuan voyage en charrette couverte, avec un serviteur et une boîte de pinceaux.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ASS090-plus-2","zone":"ASS090","pole":"+","palier":2,"nom":"Les Troncs morts","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis piochez 1 carte ; reprenez en main la dernière carte de votre défausse ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["pioche",1],["recup"],["affaiblit","cible",1],["exil"]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Affaiblissement","Pioche","Récupération","Condition","Exil","Prix"],
 "ambiance":"Gao frappe un chapeau du bout de son éventail : il sonne creux, et tombe à ses pieds.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS090-plus-3","zone":"ASS090","pole":"+","palier":3,"nom":"Ce qu'il a vu","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; la cible est marquée : +2 par coup reçu ; le héros se soigne de 8 ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["vulnerable","cible",2],["soin","heros",8],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Marque","Riposte","Soin","Pioche","Prix"],
 "ambiance":"Gao écrit ce qu'il a vu, sans rien ajouter ni ôter, et relit chaque caractère à voix basse.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS090-plus-4","zone":"ASS090","pole":"+","palier":4,"nom":"Le Pinceau de Gao","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 16 dégâts à la cible. Puis piochez 2 cartes ; reprenez en main la dernière carte de votre défausse ; le héros se soigne de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","piocheCout0",[["deg","cible",16]]],["pioche",2],["recup"],["soin","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Soin","Pioche","Récupération","Condition","Prix"],
 "ambiance":"L'encre de Gao est noire et sèche vite ; au Yushitai, on la trouve un peu trop franche.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS090-plus-5","zone":"ASS090","pole":"+","palier":5,"nom":"Le Rapport invraisemblable","cout":2,"cible":0,
 "effet":"Loi : piochez 2 cartes ; tous les ennemis sont marqués : +1 par coup reçu ; le héros gagne 10 de garde ; riposte 3 jusqu'à votre prochain tour ; +1 mana de Sève. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["vulnerable","tous",1],["garde","heros",10],["riposte",3],["mana","Sève",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Marque","Riposte","Garde","Pioche","Mana","Prix"],
 "ambiance":"Le rapport de Gao contredit tant d'automnes que la cour préfère ne pas le croire.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS090-plus-6","zone":"ASS090","pole":"+","palier":6,"nom":"Le Rang cassé","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 18 dégâts à la cible. Puis piochez 2 cartes ; reprenez en main la dernière carte de votre défausse ; l'attaque de la cible baisse de 3 ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["si","piocheCout0",[["deg","cible",18]]],["pioche",2],["recup"],["affaiblit","cible",3],["hesite","cible"],["exil"]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Affaiblissement","Contrôle","Pioche","Récupération","Condition","Exil","Prix"],
 "ambiance":"Gao rend son sceau de censeur, rentre à pied dans son village, et y cultive des champignons ordinaires.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS090-plus7","zone":"ASS090","pole":"+","palier":7,"nom":"La Forêt nue","cout":2,"cible":1,
 "effet":"Le censeur écrit ce qu'il voit. 16 à la cible ; piochez 3 ; la cible marquée (+3) ; +1 mana de Sève ; la cible brûle (3 × 3 tours). Pose Givre. Si Sceau (consommée) : tous hésitent ; 9 à tous. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",16],["pioche",3],["vulnerable","cible",3],["mana","Sève",1],["brulure","cible",3,3],["pose","Givre"],["reveil","Sceau",true,[["hesite","tous"],["deg","tous",9]]],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Brûlure","Marque","Contrôle","Pioche","Mana","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"La forêt nue, avec ses rares champignons vrais ; le pinceau du censeur est posé sur une pierre.",
 "budget":"46 sans combo ; réveil +28,8 (63 %)"}
]
```

---

## 7. Ṣillabtum, la Plainte au Soleil (ANT243) — Antre · Forêt de champignons géants · Sève · Mésopotamienne

> **Note du critique (lot 11)** : Bande +7 et ambiance de +7 : « plus une ombre » était la métamorphose du +7 de D ASS086 (même couple Ombre et Lumière, D inscrit avant). Le +7 dit maintenant les troncs qui se fendent et les greniers vides.

Forme du récit : la plainte exaucée (le prêtre porte au dieu du soleil la plainte des gens de l'ombre ; le dieu juge, et le jour entre). Recette du −7 : l'obscurité tenue (la nuit verte sous les chapeaux serrés) ; du +7 : le vide (plus une ombre, des greniers ouverts et vides).

**Ombre (−)** : l'effraie des lames → la plainte du prêtre → les musaraignes du grenier → le visage caché → l'effraie du temple → la pénombre verte → la Nuit sous les chapeaux. Fil mécanique : **soin du héros** (place ; jamais principal sur l'Ombre), bêtes sur 4 cartes (effraies, tytonidés ; musaraignes, soricidés), coups au hasard en appoint ; crochet « la cible brûle déjà » (aucune brûlure dans le pôle) ; prix : PV et bête. D ASS086 (même couple) a la garde du héros et lit `blesse`. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, bêtes 4, dégâts ciblés 4, coups au hasard 3, dégâts à tous 2, affaiblissement 2, garde du héros 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (vos bêtes 4, PV 3).

**Lumière (+)** : les lucioles du sentier → la saison des vents → le guêpier doré → le jour qui entre → les guêpiers du midi → le sol fendu → le Visage du dieu. Fil mécanique : **exil** (place ; la lumière ne se joue qu'une fois : 6 cartes s'exilent), bêtes sur 4 cartes (lucioles, lampyridés ; guêpiers, méropidés), marque et perce-garde en appoint ; crochet « la cible a de la garde » (aucune garde ennemie en prix) ; prix : exil et défausse. D ASS086 (même couple) a la brûlure et lit `vulnerable`. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 6, bêtes 4, marque 4, perce-garde 4, dégâts ciblés 4, garde du héros 2, pioche 2, soin du héros 2, dégâts à tous 2, affaiblissement 2, riposte 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (exil 6, défausse 2).

```json
{"fiche":"ANT243","nom":"Ṣillabtum, la Plainte au Soleil",
 "recit":"Le prêtre Ṣilli-Šamaš porta au dieu Šamaš la plainte des gens de Ṣillabtum : sous les grands chapeaux de la forêt, on ne voyait jamais son visage. Šamaš juge les plaintes. Une saison de vents cassa les chapeaux les plus hauts, et le jour entra. Les effraies quittèrent les lames, les musaraignes trouvèrent le grain, les guêpiers vinrent manger les lucioles, qu'on voyait enfin. Le sol sécha sous les troncs. Ṣilli-Šamaš prépare maintenant une plainte pour Sîn, qui a la charge de la nuit.",
 "pal":["Une nuit verte et sans fin sous les chapeaux serrés ; les effraies glissent entre les troncs, et l'on avance la main sur l'épaule de qui précède.","Une pénombre humide où brillent des lucioles ; les effraies nichent sous les lames, et les greniers dorment au sec, gardés par elles.","Une forêt de champignons géants au bord du fleuve, des greniers de brique crue entre les troncs, un petit temple de Šamaš sans fenêtre.","Des chapeaux cassés laissent passer le jour en colonnes ; les guêpiers chassent dans la lumière, et le sol se fend entre les troncs.","Les chapeaux abattus blanchissent en tas ; les troncs nus se fendent au soleil, les greniers sont ouverts et vides, et le temple voit enfin son dieu."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ANT243-moins-1","zone":"ANT243","pole":"-","palier":1,"nom":"L'Effraie des lames","cout":1,"cible":0,
 "effet":"Une Effraie des lames rejoint le combat : 6 PV, frappe 2. Le héros se soigne de 5. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Effraie des lames",6,2],["soin","heros",5],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Soin","Prix"],
 "ambiance":"L'effraie dort sous la lame d'un chapeau ; la nuit, elle frôle les greniers sans un bruit.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT243-moins-2","zone":"ANT243","pole":"-","palier":2,"nom":"La Plainte du prêtre","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 8 dégâts à la cible. Puis le héros se soigne de 6 ; 2 coups de 2 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",8]]],["soin","heros",6],["deg","hasard",2,2],["prixBete",1]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Ṣilli-Šamaš dicte la plainte au scribe, sur une tablette qu'on cuira au soleil, s'il en vient.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT243-moins-3","zone":"ANT243","pole":"-","palier":3,"nom":"Les Musaraignes du grenier","cout":2,"cible":0,
 "effet":"Des Musaraignes du grenier rejoignent le combat : 8 PV, frappe 3. Le héros se soigne de 10 ; 3 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Musaraignes du grenier",8,3],["soin","heros",10],["deg","tous",3],["prixBete",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Des musaraignes grosses comme un pouce rôdent au pied des greniers, et l'effraie les connaît toutes.",
 "budget":"24,1 / 24 (+0 %)"},
{"id":"ANT243-moins-4","zone":"ANT243","pole":"-","palier":4,"nom":"Le Visage caché","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 16 dégâts à la cible. Puis le héros se soigne de 12 ; 2 coups de 3 au hasard ; l'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",16]]],["soin","heros",12],["deg","hasard",3,2],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Sous les chapeaux, on ne voit pas le ciel ; on peint le soleil d'après les marchands.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT243-moins-5","zone":"ANT243","pole":"-","palier":5,"nom":"L'Effraie du temple","cout":2,"cible":0,
 "effet":"Une Effraie du temple rejoint le combat : 10 PV, frappe 4. Le héros se soigne de 14 ; 4 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Effraie du temple",10,4],["soin","heros",14],["deg","tous",4],["prixBete",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"L'effraie du temple niche au-dessus de la statue ; les prêtres disent que le dieu ne lui en veut pas.",
 "budget":"31,8 / 32 (−1 %)"},
{"id":"ANT243-moins-6","zone":"ANT243","pole":"-","palier":6,"nom":"La Pénombre verte","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Puis le héros se soigne de 16 ; 3 coups de 3 au hasard ; le héros gagne 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",18]]],["soin","heros",16],["deg","hasard",3,3],["garde","heros",4],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Une pénombre verte, humide et fraîche, où le grain se garde d'une saison à l'autre.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ANT243-moins7","zone":"ANT243","pole":"-","palier":7,"nom":"La Nuit sous les chapeaux","cout":2,"cible":1,
 "effet":"L'ombre soigne qui reste. Une Grande Effraie (14 PV, frappe 5) ; soin du héros 27 ; chaque ennemi −1 d'attaque. Pose Abîme. Si Racine (consommée) : héros +15 de garde ; 16 à la cible. Prix : bête la plus faible −2 PV.",
 "ops":[["invoque","Grande Effraie",14,5],["soin","heros",27],["affaiblit","tous",1],["pose","Abîme"],["reveil","Racine",true,[["garde","heros",15],["deg","cible",16]]],["prixBete",2]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Garde","Soin","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Une nuit verte sous les chapeaux serrés ; on avance la main sur l'épaule de celui qui précède.",
 "budget":"46,1 sans combo ; réveil +28 (61 %)"},
{"id":"ANT243-plus-1","zone":"ANT243","pole":"+","palier":1,"nom":"Les Lucioles du sentier","cout":1,"cible":1,
 "effet":"Des Lucioles du sentier rejoignent le combat : 4 PV, frappe 2. La cible est marquée : +2 par coup reçu ; le héros gagne 3 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Lucioles du sentier",4,2],["vulnerable","cible",2],["garde","heros",3],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Marque","Garde","Prix"],
 "ambiance":"Les lucioles éclairent le sentier entre les troncs ; on les suit pour rentrer, et elles le savent.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT243-plus-2","zone":"ANT243","pole":"+","palier":2,"nom":"La Saison des vents","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis ces coups ignorent la garde ; piochez 1 carte ; le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["ignoreGarde"],["pioche",1],["soin","heros",3],["exil"]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Perce-garde","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"Une saison de vents casse les chapeaux les plus hauts ; ils tombent lentement, comme des toits qu'on déplie.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT243-plus-3","zone":"ANT243","pole":"+","palier":3,"nom":"Le Guêpier doré","cout":2,"cible":1,
 "effet":"Un Guêpier doré rejoint le combat : 8 PV, frappe 4. La cible est marquée : +2 par coup reçu ; 4 dégâts à tous les ennemis. Prix : cette carte s'exile.",
 "ops":[["invoque","Guêpier doré",8,4],["vulnerable","cible",2],["deg","tous",4],["exil"]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Marque","Exil","Prix"],
 "ambiance":"Un guêpier doré se pose sur une lame cassée, au soleil, et attend qu'une luciole se montre.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ANT243-plus-4","zone":"ANT243","pole":"+","palier":4,"nom":"Le Jour qui entre","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 16 dégâts à la cible. Puis ces coups ignorent la garde ; le héros se soigne de 10 ; le héros gagne 8 de garde ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["ignoreGarde"],["soin","heros",10],["garde","heros",8],["affaiblit","cible",1],["exil"]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Affaiblissement","Perce-garde","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Le jour entre en colonnes dans la forêt ; les gens de Ṣillabtum lèvent la tête et plissent les yeux.",
 "budget":"27,4 / 28 (−2 %)"},
{"id":"ANT243-plus-5","zone":"ANT243","pole":"+","palier":5,"nom":"Les Guêpiers du midi","cout":2,"cible":1,
 "effet":"Des Guêpiers du midi rejoignent le combat : 10 PV, frappe 4. La cible est marquée : +3 par coup reçu ; riposte 3 jusqu'à votre prochain tour ; +1 mana de Sève ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["invoque","Guêpiers du midi",10,4],["vulnerable","cible",3],["riposte",3],["mana","Sève",1],["pioche",1],["exil"]],
 "tags":["Antre","Sève","Pôle +","Invocation","Marque","Riposte","Pioche","Mana","Exil","Prix"],
 "ambiance":"Les guêpiers chassent en bande dans la lumière neuve, et les lucioles ne sortent plus qu'à la nuit noire.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT243-plus-6","zone":"ANT243","pole":"+","palier":6,"nom":"Le Sol fendu","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 18 dégâts à la cible. Puis ces coups ignorent la garde ; tous les ennemis sont marqués : +2 par coup reçu ; riposte 2 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["ignoreGarde"],["vulnerable","tous",2],["riposte",2],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Marque","Affaiblissement","Perce-garde","Riposte","Condition","Exil","Prix"],
 "ambiance":"Le sol sèche et se fend entre les troncs ; les racines des chapeaux restants cherchent l'eau plus bas.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ANT243-plus7","zone":"ANT243","pole":"+","palier":7,"nom":"Le Visage du dieu","cout":2,"cible":1,
 "effet":"Tout se voit, rien ne reste. 28 à la cible ; une Nuée de lucioles (16 PV, frappe 6) ; les coups ignorent la garde ; la cible hésite. Pose Braise. Si Abîme (consommée) : 9 à tous ; tous hésitent. Prix : cette carte s'exile ; défaussez 1 carte.",
 "ops":[["deg","cible",28],["invoque","Nuée de lucioles",16,6],["ignoreGarde"],["hesite","cible"],["pose","Braise"],["reveil","Abîme",true,[["deg","tous",9],["hesite","tous"]]],["exil"],["prixDefausse",1]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Perce-garde","Contrôle","Exil","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"Les troncs nus se fendent au soleil, les greniers bâillent, et le temple voit enfin son dieu.",
 "budget":"47 sans combo ; réveil +28,8 (61 %)"}
]
```

---

## 8. oNgqongqo, les Cristaux troqués (ANT175) — Antre · Cavernes cristallines · Pierre · Zouloue

> **Note du critique (lot 11)** : Bande +7 et ambiance de +7 : la paroi couverte de rêves gardés était la métamorphose du +7 de C ANT215 (l'étagère de bouteilles à rêves, même couple, C inscrit avant). Le +7 dit maintenant les rêves qui débordent dans la grotte.

Forme du récit : le troc (le chef cède les cristaux qui gardent les rêves, et les rêves partent avec eux). Recette du −7 : la ruine (la grotte grattée jusqu'à la roche, des scolopendres dans les trous) ; du +7 : la démesure (les cristaux du sol au plafond, pleins de rêves).

**Cauchemar (−)** : la scolopendre du cristal → l'éclat taillé → les solifuges des fentes → les perles et le sel → la grande scolopendre → le marchand de la côte → la Grotte grattée. Fil mécanique : **colonne PV et « le héros a moins de la moitié de ses PV »** (crochet sur 4 cartes, toujours lu avant le prix ; PV en prix sur 5 cartes : le rêve vendu coûte au vendeur), bêtes sur 4 cartes (scolopendres, scolopendridés ; solifuges), riposte et coups au hasard en appoint ; prix : PV et bête. C ANT215 (même couple) a le soin du héros et lit `garde`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, coups au hasard 4, dégâts ciblés 4, riposte 3, soin du héros 2, mana 2, garde du héros 2, marque 2, affaiblissement 2 ; crochet « le héros a moins de la moitié de ses PV » sur 4 ; prix sur 7 cartes (PV 5, vos bêtes 2).

**Rêve (+)** : le souimanga de l'aloès → la mante des herbes → les souimangas du kraal → la mante priante → la pluie rêvée → la grande mante → les Cristaux pleins. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur le Rêve après C ANT144 et D ANT013 : souimangas, nectariniidés ; mantes, mantidés ; ni équidés, ni léporidés, ni anatidés, ni cervidés), soin des alliés en appoint ; crochet « vous avez en main une carte de coût 0 » (C : enchaînement, D : `bete` ; C ANT215 lit `brule` sur le Rêve, je l'ai laissé) ; prix : défausse et PV. C ANT215 (même couple) a une colonne garde/`garde`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, dégâts ciblés 4, soin des alliés 4, garde des alliés 2, affaiblissement 2, soin du héros 2, riposte 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (défausse 4, PV 3).

```json
{"fiche":"ANT175","nom":"oNgqongqo, les Cristaux troqués",
 "recit":"Les cristaux de la grotte d'oNgqongqo gardent les rêves de ceux qui dorment contre eux, et les rendent à qui les touche. Le chef Bhekizizwe en céda aux marchands de la côte, éclat par éclat, contre des perles et du sel. On rêva loin d'ici de pluie sur le kraal et de veaux noirs ; on rêva aussi de scolopendres. La grotte fut vide en une saison. Le village dort bien depuis, d'un sommeil sans images, et il a mangé le sel.",
 "pal":["La grotte est grattée jusqu'à la roche nue ; dans les trous des cristaux arrachés, des scolopendres, et le froid d'un lieu où plus personne ne dort.","Des parois écaillées où l'on a taillé au couteau ; des marchands qui pèsent des éclats, et des scolopendres qui s'installent dans les trous.","Une grotte de cristal au flanc d'une colline d'herbe, un enclos rond devant l'entrée, des nattes de dormeurs contre les parois qui luisent.","Les cristaux luisent doucement dans le noir ; les dormeurs y laissent leurs rêves, et les souimangas boivent à l'aloès devant l'entrée.","Tout le village dort contre les parois, et les rêves débordent des cristaux : une pluie fine tombe dans la grotte, des veaux noirs y passent."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ANT175-moins-1","zone":"ANT175","pole":"-","palier":1,"nom":"La Scolopendre du cristal","cout":1,"cible":0,
 "effet":"Une Scolopendre du cristal rejoint le combat : 6 PV, frappe 2. Riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Scolopendre du cristal",6,2],["riposte",2],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Riposte","Prix"],
 "ambiance":"Une scolopendre longue comme un avant-bras sort d'une fente du cristal, là où un rêve a été taillé.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT175-moins-2","zone":"ANT175","pole":"-","palier":2,"nom":"L'Éclat taillé","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. Puis 2 coups de 2 au hasard ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["si","blesse",[["deg","cible",10]]],["deg","hasard",2,2],["pioche",1],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le chef taille lui-même un éclat, au couteau, et le tend au marchand en détournant les yeux.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT175-moins-3","zone":"ANT175","pole":"-","palier":3,"nom":"Les Solifuges des fentes","cout":2,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 10. Des Solifuges des fentes rejoignent le combat : 8 PV, frappe 3. +2 mana de Pierre ; 2 coups de 2 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","blesse",[["soin","heros",10]]],["invoque","Solifuges des fentes",8,3],["mana","Pierre",2],["deg","hasard",2,2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Les solifuges courent sur la roche nue, très vite, et s'arrêtent net devant la lueur d'une braise.",
 "budget":"22,5 / 24 (−6 %)"},
{"id":"ANT175-moins-4","zone":"ANT175","pole":"-","palier":4,"nom":"Les Perles et le sel","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 16 dégâts à la cible. Puis le héros gagne 10 de garde ; 2 coups de 3 au hasard ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",16]]],["garde","heros",10],["deg","hasard",3,2],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Marque","Garde","Condition","Prix"],
 "ambiance":"Des perles de verre et un sac de sel pour un éclat ; le marchand repart content, le chef aussi.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT175-moins-5","zone":"ANT175","pole":"-","palier":5,"nom":"La Grande Scolopendre","cout":2,"cible":1,
 "effet":"14 dégâts à la cible. Une Grande Scolopendre rejoint le combat : 10 PV, frappe 4. Riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",14],["invoque","Grande Scolopendre",10,4],["riposte",3],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Riposte","Prix"],
 "ambiance":"La scolopendre a pris le trou du plus gros cristal, et personne ne va plus l'en déloger.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT175-moins-6","zone":"ANT175","pole":"-","palier":6,"nom":"Le Marchand de la côte","cout":2,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 16. Puis l'attaque de chaque ennemi baisse de 2 ; 3 coups de 3 au hasard ; le héros gagne 6 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","blesse",[["soin","heros",16]]],["affaiblit","tous",2],["deg","hasard",3,3],["garde","heros",6],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Soin","Condition","Prix"],
 "ambiance":"Le marchand de la côte dort mal depuis qu'il a touché les éclats, et il les revend très vite.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT175-moins7","zone":"ANT175","pole":"-","palier":7,"nom":"La Grotte grattée","cout":2,"cible":1,
 "effet":"Le cauchemar change de maître. Une Mère des scolopendres (14 PV, frappe 5) ; la cible −3 d'attaque ; 6 à tous ; riposte 4 ; la cible marquée (+2). Pose Abîme. Si Sang (consommée) : 24 à la cible ; +2 mana de Pierre. Prix : héros −3 PV.",
 "ops":[["invoque","Mère des scolopendres",14,5],["affaiblit","cible",3],["deg","tous",6],["riposte",4],["vulnerable","cible",2],["pose","Abîme"],["reveil","Sang",true,[["deg","cible",24],["mana","Pierre",2]]],["prixPV",3]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Marque","Affaiblissement","Riposte","Mana","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"La grotte grattée jusqu'à la roche ; des scolopendres dans chaque trou, et plus un dormeur contre les parois.",
 "budget":"47,7 sans combo ; réveil +30 (63 %)"},
{"id":"ANT175-plus-1","zone":"ANT175","pole":"+","palier":1,"nom":"Le Souimanga de l'aloès","cout":1,"cible":1,
 "effet":"Un Souimanga de l'aloès rejoint le combat : 4 PV, frappe 2. Vos alliés gagnent 4 de garde ; l'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Souimanga de l'aloès",4,2],["garde","allies",4],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Le souimanga plonge son bec courbe dans la fleur d'aloès devant la grotte, et repart en éclair vert.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT175-plus-2","zone":"ANT175","pole":"+","palier":2,"nom":"La Mante des herbes","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 8 dégâts à la cible. Une Mante des herbes rejoint le combat : 6 PV, frappe 2. Le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",8]]],["invoque","Mante des herbes",6,2],["soin","heros",4],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Une mante verte se tient immobile sur une tige, les pattes jointes ; on dit qu'elle regarde les dormeurs rêver.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT175-plus-3","zone":"ANT175","pole":"+","palier":3,"nom":"Les Souimangas du kraal","cout":2,"cible":0,
 "effet":"Des Souimangas du kraal rejoignent le combat : 8 PV, frappe 3. Vos alliés se soignent de 6 ; piochez 1 carte ; +1 mana de Pierre. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Souimangas du kraal",8,3],["soin","allies",6],["pioche",1],["mana","Pierre",1],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Pioche","Mana","Prix"],
 "ambiance":"Les souimangas nichent sous le toit de l'enclos, et chantent avant que les dormeurs ne sortent de la grotte.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT175-plus-4","zone":"ANT175","pole":"+","palier":4,"nom":"La Mante priante","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 14 dégâts à la cible. Une Mante priante rejoint le combat : 10 PV, frappe 3. Le héros se soigne de 8 ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",14]]],["invoque","Mante priante",10,3],["soin","heros",8],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"La mante priante se pose sur la natte d'un dormeur ; au réveil, il a rêvé de pluie.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT175-plus-5","zone":"ANT175","pole":"+","palier":5,"nom":"La Pluie rêvée","cout":2,"cible":0,
 "effet":"Des Souimangas de la pluie rejoignent le combat : 10 PV, frappe 4. Vos alliés se soignent de 8 ; vos alliés gagnent 6 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Souimangas de la pluie",10,4],["soin","allies",8],["garde","allies",6],["riposte",2],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Riposte","Garde","Soin","Prix"],
 "ambiance":"On rêve de pluie sur l'enclos ; dans le rêve, les oiseaux boivent à même les gouttes.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"ANT175-plus-6","zone":"ANT175","pole":"+","palier":6,"nom":"La Grande Mante","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 18 dégâts à la cible. Une Grande Mante rejoint le combat : 12 PV, frappe 4. Vos alliés se soignent de 6 ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",18]]],["invoque","Grande Mante",12,4],["soin","allies",6],["riposte",3],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"La grande mante se balance sur l'aloès, comme si un vent soufflait pour elle seule.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT175-plus7","zone":"ANT175","pole":"+","palier":7,"nom":"Les Cristaux pleins","cout":2,"cible":1,
 "effet":"Le rêve sort de la grotte. Une Nuée de souimangas (18 PV, frappe 7) ; alliés soignés de 14 ; tous hésitent. Pose Givre. Si Abîme (consommée) : 18 à la cible ; la cible marquée (+2) ; la cible brûle (2 × 3 tours). Prix : défaussez 1 carte.",
 "ops":[["invoque","Nuée de souimangas",18,7],["soin","allies",14],["hesite","tous"],["pose","Givre"],["reveil","Abîme",true,[["deg","cible",18],["vulnerable","cible",2],["brulure","cible",2,3]]],["prixDefausse",1]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Brûlure","Marque","Contrôle","Soin","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Le village dort contre les parois, et ses rêves débordent : il pleut dans la grotte, des veaux noirs y passent.",
 "budget":"46,5 sans combo ; réveil +30 (65 %)"}
]
```

---

## 9. Akegarasu-dake, le Palanquin du Seigneur (ANT092) — Antre · Haute montagne · Pierre · Japonaise féodale

> **Note du critique (lot 11)** : Crochet de la Nuit : `garde` devient `blesse` en −2, −4, −6, pour la même raison qu'ASS062 (la garde des alliés lève la Garde du héros : 3 cartes nourrissaient le crochet). Le pôle ne paie pas en PV. Budgets inchangés.

Forme du récit : l'ascension commandée (le seigneur qu'on monte de nuit voir l'aube, lune après lune, et qui dort le jour où elle est parfaite). Recette du −7 : le silence (la montagne noire, des pas réguliers) ; du +7 : le geste (les porteurs debout autour du palanquin fermé, devant le soleil).

**Nuit (−)** : la phalène du palanquin → le sentier des pèlerins → le lièvre variable → les porteurs dans le noir → les lièvres des cols → la brume du sommet → la Montagne noire. Fil mécanique : **mana de Pierre** (place ; 2 au plus par carte), bêtes sur 4 cartes (lièvres variables, léporidés ; phalène, géométridés), hésitation et récupération en appoint ; crochet « la Garde du héros est levée » (garde du héros sur la seule forme ultime) ; prix : défausse et bête. C ANT145 (même couple) a les invocations de la Nuit (engoulevents) et lit `bete`. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, bêtes 4, dégâts ciblés 4, hésitation 3, garde des alliés 2, soin du héros 2, récupération 2, riposte 2, affaiblissement 2, pioche 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (vos bêtes 4, défausse 3).

**Aurore (+)** : le pic noir du cèdre → le pic de la crête → l'ours à collier → les pics du versant → l'ourse des hêtres → le seigneur endormi → le Soleil sur les nuages. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur l'Aurore après D ANT105 et B ANT056 : pics noirs, picidés ; ours à collier, ursidés ; ni passereaux, ni équidés, ni félins, ni ardéidés, ni flamants), perce-garde et exil en appoint ; crochet « une carte a déjà été défaussée en prix ce tour » (aucune défausse dans le pôle ; D : `cibleGarde`, B : `blesse`) ; prix : bête et exil. C ANT145 (même couple) a la garde des alliés et lit `hesite`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, perce-garde 4, dégâts ciblés 4, exil 3, soin du héros 2, garde du héros 2, riposte 2, marque 2, affaiblissement 2, dégâts à tous 2, mana 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 3 ; prix sur 7 cartes (vos bêtes 4, exil 3).

```json
{"fiche":"ANT092","nom":"Akegarasu-dake, le Palanquin du Seigneur",
 "recit":"Le seigneur Kiriyama Tadanori voulut voir le soleil se lever du sommet d'Akegarasu-dake, comme les ascètes de la montagne. On le monta de nuit en palanquin, par le sentier des pèlerins. La brume prit le sommet. On redescendit, on remonta à la lune suivante, puis à la suivante. Les porteurs du village apprirent le sentier par cœur, dans le noir, pierre par pierre. À la fin de l'automne, l'aube fut parfaite. Le seigneur dormait dans le palanquin, et Yohei, le chef des porteurs, n'osa pas le réveiller.",
 "pal":["La montagne est noire du pied au sommet ; on entend des pas réguliers sur la pierre, un souffle de porteurs, et rien d'autre ne bouge.","Le sentier des pèlerins monte dans la nuit entre les rochers ; des lièvres blancs traversent, des phalènes battent contre le palanquin.","Une haute montagne de roche et de pins nains, un sentier jalonné de petits autels, un village de porteurs au pied ; la brume monte des vallées.","Le ciel pâlit derrière la crête ; les pics noirs frappent les troncs morts, et les porteurs posent le palanquin sur une dalle plate.","Le soleil sort d'une mer de nuages ; les porteurs se tiennent debout autour du palanquin fermé, et personne ne fait de bruit."],
 "pm":"Nuit","pp":"Aurore"}
```

```json
[
{"id":"ANT092-moins-1","zone":"ANT092","pole":"-","palier":1,"nom":"La Phalène du palanquin","cout":1,"cible":0,
 "effet":"+2 mana de Pierre. Une Phalène du palanquin rejoint le combat : 4 PV, frappe 2. Vos alliés gagnent 2 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["invoque","Phalène du palanquin",4,2],["garde","allies",2],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Mana","Prix"],
 "ambiance":"Une phalène grise se pose sur le rideau du palanquin et y reste jusqu'au sommet, comme une invitée.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT092-moins-2","zone":"ANT092","pole":"-","palier":2,"nom":"Le Sentier des pèlerins","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. Puis +1 mana de Pierre ; la cible hésite. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","blesse",[["deg","cible",10]]],["mana","Pierre",1],["hesite","cible"],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Contrôle","Mana","Condition","Prix"],
 "ambiance":"De petits autels de pierre jalonnent le sentier ; les porteurs les touchent en passant, et ne s'arrêtent pas.",
 "budget":"12 / 12,5 (−4 %) ; condition changée par le critique (lot 11)"},
{"id":"ANT092-moins-3","zone":"ANT092","pole":"-","palier":3,"nom":"Le Lièvre variable","cout":2,"cible":0,
 "effet":"+2 mana de Pierre. Un Lièvre variable rejoint le combat : 8 PV, frappe 3. Reprenez en main la dernière carte de votre défausse ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["invoque","Lièvre variable",8,3],["recup"],["soin","heros",6],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Soin","Récupération","Mana","Prix"],
 "ambiance":"Un lièvre variable, déjà blanc aux pattes, traverse le sentier devant la lanterne de tête et s'arrête net.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT092-moins-4","zone":"ANT092","pole":"-","palier":4,"nom":"Les Porteurs dans le noir","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 16 dégâts à la cible. Puis +2 mana de Pierre ; l'attaque de la cible baisse de 2 ; la cible hésite ; riposte 1 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","blesse",[["deg","cible",16]]],["mana","Pierre",2],["affaiblit","cible",2],["hesite","cible"],["riposte",1],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Contrôle","Riposte","Mana","Condition","Prix"],
 "ambiance":"Les porteurs montent sans lumière ; chacun sait sous ses sandales où tombe la pierre suivante.",
 "budget":"26 / 28 (−7 %) ; condition changée par le critique (lot 11)"},
{"id":"ANT092-moins-5","zone":"ANT092","pole":"-","palier":5,"nom":"Les Lièvres des cols","cout":2,"cible":0,
 "effet":"+2 mana de Pierre. Des Lièvres des cols rejoignent le combat : 10 PV, frappe 4. Reprenez en main la dernière carte de votre défausse ; vos alliés gagnent 6 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["invoque","Lièvres des cols",10,4],["recup"],["garde","allies",6],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Pioche","Récupération","Mana","Prix"],
 "ambiance":"Les lièvres des cols changent de robe avec la saison ; en haut, ils sont blancs comme la brume.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ANT092-moins-6","zone":"ANT092","pole":"-","palier":6,"nom":"La Brume du sommet","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 18 dégâts à la cible. Puis +2 mana de Pierre ; la cible hésite ; le héros se soigne de 8 ; l'attaque de chaque ennemi baisse de 1. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",18]]],["mana","Pierre",2],["hesite","cible"],["soin","heros",8],["affaiblit","tous",1],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Contrôle","Soin","Mana","Condition","Prix"],
 "ambiance":"La brume prend le sommet juste avant l'aube ; Yohei fait poser le palanquin, et l'on redescend.",
 "budget":"32,6 / 36 (−9 %) ; condition changée par le critique (lot 11)"},
{"id":"ANT092-moins7","zone":"ANT092","pole":"-","palier":7,"nom":"La Montagne noire","cout":2,"cible":1,
 "effet":"La nuit porte le seigneur. +2 mana de Pierre ; un Grand Lièvre blanc (14 PV, frappe 5) ; riposte 6 ; piochez 1 ; 5 à tous. Pose Abîme. Si Givre (consommée) : 18 à la cible ; héros +14 de garde. Prix : bête la plus faible −2 PV.",
 "ops":[["mana","Pierre",2],["invoque","Grand Lièvre blanc",14,5],["riposte",6],["pioche",1],["deg","tous",5],["pose","Abîme"],["reveil","Givre",true,[["deg","cible",18],["garde","heros",14]]],["prixBete",2]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Riposte","Garde","Pioche","Mana","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"La montagne noire du pied au sommet ; on n'entend que les pas réguliers des porteurs sur la pierre.",
 "budget":"45,5 sans combo ; réveil +29,2 (64 %)"},
{"id":"ANT092-plus-1","zone":"ANT092","pole":"+","palier":1,"nom":"Le Pic noir du cèdre","cout":1,"cible":0,
 "effet":"Un Pic noir du cèdre rejoint le combat : 4 PV, frappe 2. Ces coups ignorent la garde ; le héros se soigne de 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Pic noir du cèdre",4,2],["ignoreGarde"],["soin","heros",3],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Perce-garde","Soin","Prix"],
 "ambiance":"Le pic noir frappe un cèdre mort à l'aube ; le bruit descend la montagne jusqu'au village des porteurs.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT092-plus-2","zone":"ANT092","pole":"+","palier":2,"nom":"Le Pic de la crête","cout":1,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 10 dégâts à la cible. Un Pic de la crête rejoint le combat : 6 PV, frappe 2. Le héros gagne 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["invoque","Pic de la crête",6,2],["garde","heros",4],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Garde","Condition","Exil","Prix"],
 "ambiance":"Sur la crête, un pic à calotte rouge guette le soleil, puis se met au travail sans attendre personne.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ANT092-plus-3","zone":"ANT092","pole":"+","palier":3,"nom":"L'Ours à collier","cout":2,"cible":1,
 "effet":"Un Ours à collier rejoint le combat : 12 PV, frappe 3. La garde de la cible tombe à 0 ; le héros se soigne de 8 ; riposte 2 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Ours à collier",12,3],["briseGarde","cible"],["soin","heros",8],["riposte",2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Perce-garde","Riposte","Soin","Prix"],
 "ambiance":"Un ours à collier blanc lève la tête sur le versant, renifle la brume, et s'en retourne aux glands.",
 "budget":"24,5 / 24 (+2 %)"},
{"id":"ANT092-plus-4","zone":"ANT092","pole":"+","palier":4,"nom":"Les Pics du versant","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 16 dégâts à la cible. Des Pics du versant rejoignent le combat : 8 PV, frappe 3. La cible est marquée : +2 par coup reçu ; piochez 1 carte ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["si","defausseAPrix",[["deg","cible",16]]],["invoque","Pics du versant",8,3],["vulnerable","cible",2],["pioche",1],["affaiblit","cible",1],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Marque","Affaiblissement","Pioche","Condition","Exil","Prix"],
 "ambiance":"Les pics du versant se répondent d'arbre en arbre ; les porteurs disent que c'est l'heure de poser.",
 "budget":"26,5 / 28 (−5 %)"},
{"id":"ANT092-plus-5","zone":"ANT092","pole":"+","palier":5,"nom":"L'Ourse des hêtres","cout":2,"cible":0,
 "effet":"Une Ourse des hêtres rejoint le combat : 14 PV, frappe 4. Ces coups ignorent la garde ; le héros gagne 10 de garde ; 4 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Ourse des hêtres",14,4],["ignoreGarde"],["garde","heros",10],["deg","tous",4],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Perce-garde","Garde","Prix"],
 "ambiance":"L'ourse des hêtres descend vers le sentier avec la lumière, sans hâte, comme une voisine.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ANT092-plus-6","zone":"ANT092","pole":"+","palier":6,"nom":"Le Seigneur endormi","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 18 dégâts à la cible. Des Pics de l'aube rejoignent le combat : 10 PV, frappe 4. L'attaque de la cible baisse de 2 ; +2 mana de Pierre ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["si","defausseAPrix",[["deg","cible",18]]],["invoque","Pics de l'aube",10,4],["affaiblit","cible",2],["mana","Pierre",2],["hesite","cible"],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Affaiblissement","Contrôle","Mana","Condition","Exil","Prix"],
 "ambiance":"Le seigneur dort, la bouche ouverte, derrière le rideau ; Yohei regarde le soleil pour lui.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT092-plus7","zone":"ANT092","pole":"+","palier":7,"nom":"Le Soleil sur les nuages","cout":2,"cible":1,
 "effet":"L'aube vient sans témoin. Un Grand Ours de la crête (16 PV, frappe 6) ; toute garde ennemie à 0 ; 9 à tous ; la cible marquée (+2). Pose Braise. Si Sceau (consommée) : 16 à la cible ; riposte 4 ; +2 mana de Pierre. Prix : bête la plus faible −2 PV.",
 "ops":[["invoque","Grand Ours de la crête",16,6],["briseGarde","tous"],["deg","tous",9],["vulnerable","cible",2],["pose","Braise"],["reveil","Sceau",true,[["deg","cible",16],["riposte",4],["mana","Pierre",2]]],["prixBete",2]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Marque","Perce-garde","Riposte","Mana","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Le soleil sort d'une mer de nuages ; les porteurs se tiennent autour du palanquin fermé, et personne ne parle.",
 "budget":"47,4 sans combo ; réveil +30 (63 %)"}
]
```

---

## 10. Esiqhotho, la Corne du Berger (ANT091) — Antre · Toundra · Glace · Zouloue

Forme du récit : le salaire supprimé (le berger du ciel qu'on cesse de payer parce qu'il n'y a plus d'orage). Recette du −7 : la démesure (l'orage d'un bord à l'autre de la toundra) ; du +7 : le silence (les lacs-miroirs, pas un souffle).

**Tempête (−)** : le labbe de l'orage → la grêle du printemps → le gerfaut des nuées → les tentes arrachées → les labbes du large → le troupeau dispersé → la Toundra déchaînée. Fil mécanique : **riposte** (place ; 8 au plus par carte, réveil compris), bêtes sur 4 cartes (labbes, stercorariidés ; gerfauts, falconidés), brûlure en appoint (la grêle qui cuit) ; crochet « la cible est déjà marquée » (marque sur la seule forme ultime) ; prix : défausse et bête. C ASS147 (même couple) a la garde des alliés et lit `troisCartes`. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, bêtes 4, dégâts ciblés 4, brûlure 3, garde du héros 2, dégâts à tous 2, soin du héros 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (vos bêtes 4, défausse 3).

**Calme (+)** : le renne du berger → le salaire en rennes → le plongeon du lac → la mémoire de veau → les rennes de la corne → le prix changé → les Lacs-miroirs. Fil mécanique : **colonne marque et « la cible est déjà marquée »** (crochet sur 4 cartes, toujours lu avant la marque de la carte ; marque sur 4 cartes), bêtes sur 4 cartes (rennes, cervidés ; plongeons, gaviidés), récupération et mana de Glace en appoint ; prix : PV et bête. C ASS147 (même couple) a l'exil et lit `defausseAPrix`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, marque 4, dégâts ciblés 4, mana 3, récupération 3, soin du héros 2, riposte 2, garde du héros 2, affaiblissement 2, garde des alliés 2, soin des alliés 2 ; crochet « la cible est déjà marquée » sur 4 ; prix sur 7 cartes (PV 4, vos bêtes 3).

```json
{"fiche":"ANT091","nom":"Esiqhotho, la Corne du Berger",
 "recit":"Le berger du ciel Mgcini chassait les orages de la toundra d'Esiqhotho avec une corne de buffle et une queue de gnou, et on le payait en rennes. Il n'y eut plus d'orage de mémoire de veau. Le chef Dlamuka jugea qu'on payait pour rien, et cessa de payer. Mgcini rangea sa corne. L'orage du printemps arracha les tentes de peau et dispersa le troupeau jusqu'aux lacs. On rappela Mgcini ; son prix avait changé.",
 "pal":["L'orage couvre la toundra d'un bord à l'autre ; des tentes de peau volent, le troupeau court vers les lacs, et la grêle blanchit tout.","Des nuages bas traînent sur les lichens ; les labbes crient, les rennes se serrent, et la corne de Mgcini pend, muette, à son piquet.","Une toundra de lichens et de lacs, des tentes de peau autour d'un enclos de pierres, des rennes ; un homme assis sur une butte avec une corne.","Le vent tombe ; les lacs se lissent, les plongeons y glissent sans ride, et le troupeau broute en paix autour du berger du ciel.","Pas un souffle sur la toundra : les lacs sont des miroirs parfaits, les rennes immobiles, et la corne de Mgcini repose sur ses genoux."],
 "pm":"Tempête","pp":"Calme"}
```

```json
[
{"id":"ANT091-moins-1","zone":"ANT091","pole":"-","palier":1,"nom":"Le Labbe de l'orage","cout":1,"cible":1,
 "effet":"Riposte 2 jusqu'à votre prochain tour. Un Labbe de l'orage rejoint le combat : 4 PV, frappe 2. La cible brûle : 1 par tour pendant 2 tours ; le héros gagne 3 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",2],["invoque","Labbe de l'orage",4,2],["brulure","cible",1,2],["garde","heros",3],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Brûlure","Riposte","Garde","Prix"],
 "ambiance":"Un labbe sombre plonge sur les mouettes devant l'orage, comme s'il lui ouvrait la route.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT091-moins-2","zone":"ANT091","pole":"-","palier":2,"nom":"La Grêle du printemps","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 8 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; 2 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",8]]],["riposte",3],["deg","tous",2],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"La grêle tombe drue sur les lichens ; les rennes tournent le dos au vent et attendent.",
 "budget":"13,4 / 12,5 (+7 %)"},
{"id":"ANT091-moins-3","zone":"ANT091","pole":"-","palier":3,"nom":"Le Gerfaut des nuées","cout":2,"cible":1,
 "effet":"Riposte 4 jusqu'à votre prochain tour. Un Gerfaut des nuées rejoint le combat : 8 PV, frappe 3. La cible brûle : 2 par tour pendant 3 tours ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",4],["invoque","Gerfaut des nuées",8,3],["brulure","cible",2,3],["soin","heros",4],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Brûlure","Riposte","Soin","Prix"],
 "ambiance":"Le gerfaut chasse sous les nuées noires ; il aime l'orage, parce que tout le reste se cache.",
 "budget":"23,5 / 24 (−2 %)"},
{"id":"ANT091-moins-4","zone":"ANT091","pole":"-","palier":4,"nom":"Les Tentes arrachées","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Puis riposte 5 jusqu'à votre prochain tour ; 4 dégâts à tous les ennemis ; l'attaque de la cible baisse de 1. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["riposte",5],["deg","tous",4],["affaiblit","cible",1],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Le vent arrache les tentes de peau et les roule sur la toundra ; les piquets restent plantés, seuls.",
 "budget":"28,8 / 28 (+3 %)"},
{"id":"ANT091-moins-5","zone":"ANT091","pole":"-","palier":5,"nom":"Les Labbes du large","cout":2,"cible":0,
 "effet":"Riposte 5 jusqu'à votre prochain tour. Des Labbes du large rejoignent le combat : 10 PV, frappe 4. Tous les ennemis brûlent : 1 par tour pendant 3 tours ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["riposte",5],["invoque","Labbes du large",10,4],["brulure","tous",1,3],["garde","heros",6],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Brûlure","Riposte","Garde","Prix"],
 "ambiance":"Les labbes du large suivent l'orage à l'intérieur des terres, et pillent ce qu'il a laissé.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"ANT091-moins-6","zone":"ANT091","pole":"-","palier":6,"nom":"Le Troupeau dispersé","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 3 ; le héros se soigne de 6. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["riposte",6],["affaiblit","cible",3],["soin","heros",6],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Affaiblissement","Riposte","Soin","Condition","Prix"],
 "ambiance":"Le troupeau court jusqu'aux lacs du nord ; on mettra une lune à rassembler les rennes.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT091-moins7","zone":"ANT091","pole":"-","palier":7,"nom":"La Toundra déchaînée","cout":2,"cible":1,
 "effet":"L'orage rend chaque coup. Riposte 8 ; un Gerfaut blanc (16 PV, frappe 6) ; la cible marquée (+2) ; piochez 1 ; la cible hésite. Pose Givre. Si Braise (consommée) : 22 à la cible ; +2 mana de Glace. Prix : bête la plus faible −2 PV.",
 "ops":[["riposte",8],["invoque","Gerfaut blanc",16,6],["vulnerable","cible",2],["pioche",1],["hesite","cible"],["pose","Givre"],["reveil","Braise",true,[["deg","cible",22],["mana","Glace",2]]],["prixBete",2]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Marque","Contrôle","Riposte","Pioche","Mana","Combo","Pose Givre","Réveil Braise","Prix"],
 "ambiance":"L'orage couvre la toundra d'un bord à l'autre ; la corne de Mgcini pend, muette, au piquet.",
 "budget":"46 sans combo ; réveil +28 (61 %)"},
{"id":"ANT091-plus-1","zone":"ANT091","pole":"+","palier":1,"nom":"Le Renne du berger","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu. Un Renne du berger rejoint le combat : 4 PV, frappe 1. +1 mana de Glace. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",2],["invoque","Renne du berger",4,1],["mana","Glace",1],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Marque","Mana","Prix"],
 "ambiance":"Le renne de Mgcini porte une clochette d'os, et broute toujours un peu à l'écart des autres.",
 "budget":"11,5 / 10 (+15 %)"},
{"id":"ANT091-plus-2","zone":"ANT091","pole":"+","palier":2,"nom":"Le Salaire en rennes","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis reprenez en main la dernière carte de votre défausse ; riposte 1 jusqu'à votre prochain tour ; le héros se soigne de 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["recup"],["riposte",1],["soin","heros",3],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Riposte","Soin","Récupération","Condition","Prix"],
 "ambiance":"Chaque saison, on mène à Mgcini des rennes du troupeau ; il les choisit lui-même, et prend les meilleurs.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT091-plus-3","zone":"ANT091","pole":"+","palier":3,"nom":"Le Plongeon du lac","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, le héros se soigne de 12. Un Plongeon du lac rejoint le combat : 8 PV, frappe 3. La cible est marquée : +2 par coup reçu ; +1 mana de Glace. Prix : le héros perd 1 PV.",
 "ops":[["si","vulnerable",[["soin","heros",12]]],["invoque","Plongeon du lac",8,3],["vulnerable","cible",2],["mana","Glace",1],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Marque","Soin","Mana","Condition","Prix"],
 "ambiance":"Le plongeon glisse sur le lac lisse, disparaît, et ressort très loin ; l'eau ne garde pas sa trace.",
 "budget":"22,5 / 24 (−6 %)"},
{"id":"ANT091-plus-4","zone":"ANT091","pole":"+","palier":4,"nom":"La Mémoire de veau","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Puis reprenez en main la dernière carte de votre défausse ; le héros gagne 12 de garde ; l'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["recup"],["garde","heros",12],["affaiblit","cible",2],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Affaiblissement","Garde","Récupération","Condition","Prix"],
 "ambiance":"De mémoire de veau, pas un orage ; les jeunes bouviers ne savent plus ce qu'est la grêle.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"ANT091-plus-5","zone":"ANT091","pole":"+","palier":5,"nom":"Les Rennes de la corne","cout":2,"cible":1,
 "effet":"Des Rennes de la corne rejoignent le combat : 10 PV, frappe 4. La cible est marquée : +3 par coup reçu ; +2 mana de Glace ; vos alliés gagnent 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Rennes de la corne",10,4],["vulnerable","cible",3],["mana","Glace",2],["garde","allies",4],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Marque","Garde","Mana","Prix"],
 "ambiance":"Les rennes de Mgcini broutent autour de sa butte, et l'on dit que l'orage les contourne.",
 "budget":"28,8 / 32 (−10 %)"},
{"id":"ANT091-plus-6","zone":"ANT091","pole":"+","palier":6,"nom":"Le Prix changé","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Puis reprenez en main la dernière carte de votre défausse ; l'attaque de chaque ennemi baisse de 1 ; vos alliés se soignent de 10. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["recup"],["affaiblit","tous",1],["soin","allies",10],["prixBete",2]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Affaiblissement","Soin","Récupération","Condition","Prix"],
 "ambiance":"On rappelle Mgcini ; il écoute, sourit, et demande un renne blanc de plus par saison.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT091-plus7","zone":"ANT091","pole":"+","palier":7,"nom":"Les Lacs-miroirs","cout":2,"cible":1,
 "effet":"Le ciel se tait, payé. Un Grand Renne blanc (14 PV, frappe 5) ; tous marqués (+2) ; alliés soignés de 10 ; héros +6 de garde. Pose Givre. Si Racine (consommée) : alliés +8 de garde ; riposte 3 ; 14 à la cible. Prix : héros −2 PV.",
 "ops":[["invoque","Grand Renne blanc",14,5],["vulnerable","tous",2],["soin","allies",10],["garde","heros",6],["pose","Givre"],["reveil","Racine",true,[["garde","allies",8],["riposte",3],["deg","cible",14]]],["prixPV",2]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Marque","Riposte","Garde","Soin","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Pas un souffle sur la toundra ; les lacs sont des miroirs, la corne dort sur les genoux du berger.",
 "budget":"45,5 sans combo ; réveil +29,6 (65 %)"}
]
```

---

## 11. Tāghestān, le Bûcher du Marzban (ANT221) — Antre · Désert de sable · Feu · Perse

Forme du récit : la surenchère (chaque gouverneur veut un bûcher de Sadeh plus haut que le précédent, jusqu'à la dernière racine du désert). Recette du −7 : le vide (le désert gelé, sans un buisson) ; du +7 : la démesure (le bûcher qui éclaire le désert jusqu'à l'horizon).

**Glace (−)** : la vipère à cornes → le ganga des puits → les vipères du sable froid → les jarres fendues → la vipère des racines → les gangas du marzban → le Désert gelé. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur la Glace après C ANT184 et C ANT173 : vipères à cornes, vipéridés ; gangas, ptéroclidés ; ni canidés, ni bovidés, ni phocidés), coups au hasard et mana de Feu en appoint ; crochet « vous avez déjà joué une autre carte ce tour » (2 cartes ; C : `garde`) ; prix : PV et bête (C : défausse). D ASS136 (même couple) a le soin du héros et lit `hesiteAvant`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, mana 3, coups au hasard 3, dégâts ciblés 3, affaiblissement 2, garde du héros 2, marque 2, pioche 2, soin du héros 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 ; prix sur 7 cartes (PV 4, vos bêtes 3).

**Feu (+)** : le dromadaire chargé → la fête de Sadeh → la salamandre du bûcher → les chameliers → les dromadaires du tagh → le feu vu du palais → le Bûcher d'Ardavan. Fil mécanique : **affaiblissement** (place ; jamais principal sur le Feu), bêtes sur 4 cartes (salamandres, salamandridés ; dromadaires, camélidés), mana de Feu en appoint ; crochet « la cible brûle déjà » (aucune brûlure dans le pôle) ; prix : PV et garde ennemie. D ASS136 (même couple) a la riposte et lit `cibleGarde`. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, bêtes 4, dégâts ciblés 4, mana 3, garde du héros 2, dégâts à tous 2, riposte 2, pioche 2, soin du héros 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (PV 4, garde ennemie 3).

```json
{"fiche":"ANT221","nom":"Tāghestān, le Bûcher du Marzban",
 "recit":"Chaque hiver, pour la fête de Sadeh, le marzban Ardavan faisait dresser au milieu des dunes de Tāghestān un bûcher plus haut que celui de son prédécesseur, afin qu'on le voie de la capitale. Les chameliers coupaient le tagh à des journées à la ronde. On dit que le feu se vit jusqu'au palais. L'hiver suivant, il ne restait plus une racine à brûler dans le désert, et les nuits gelèrent les jarres. Ardavan fut loué pour son bûcher, et muté avant le froid.",
 "pal":["Le désert gelé à perte de vue, sans un buisson ; les jarres fendues devant les maisons, et le sable qui crisse sous le givre.","Des souches de tagh arrachées, des fosses de sable froid ; les vipères dorment enterrées, et les gangas boivent la glace des citernes.","Des dunes basses semées de buissons de tagh, un village de pisé autour d'un puits, et sur une butte le temple du feu.","Des fagots de tagh empilés à dos de dromadaire autour d'un bûcher qui monte ; les chameliers chantent, et la nuit sent la résine.","Le bûcher brûle si haut qu'il éclaire le désert jusqu'à l'horizon ; les dunes rougeoient, et les salamandres dansent dans la braise."],
 "pm":"Glace","pp":"Feu"}
```

```json
[
{"id":"ANT221-moins-1","zone":"ANT221","pole":"-","palier":1,"nom":"La Vipère à cornes","cout":1,"cible":1,
 "effet":"Une Vipère à cornes rejoint le combat : 4 PV, frappe 2. +1 mana de Feu ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Vipère à cornes",4,2],["mana","Feu",1],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Affaiblissement","Mana","Prix"],
 "ambiance":"La vipère à cornes s'enfouit dans le sable froid ; ses yeux et ses cornes dépassent à peine.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT221-moins-2","zone":"ANT221","pole":"-","palier":2,"nom":"Le Ganga des puits","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 8 dégâts à la cible. Un Ganga des puits rejoint le combat : 4 PV, frappe 2. 2 coups de 2 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","cartesJouees",[["deg","cible",8]]],["invoque","Ganga des puits",4,2],["deg","hasard",2,2],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le ganga trempe les plumes de son ventre au puits, et repart porter l'eau à sa nichée.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT221-moins-3","zone":"ANT221","pole":"-","palier":3,"nom":"Les Vipères du sable froid","cout":2,"cible":0,
 "effet":"Des Vipères du sable froid rejoignent le combat : 10 PV, frappe 3. Le héros gagne 8 de garde ; +2 mana de Feu. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Vipères du sable froid",10,3],["garde","heros",8],["mana","Feu",2],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Garde","Mana","Prix"],
 "ambiance":"Les nuits de Tāghestān gèlent le sable ; les vipères s'y serrent en nœuds, sous les souches arrachées.",
 "budget":"20,9 / 24 (−13 %)"},
{"id":"ANT221-moins-4","zone":"ANT221","pole":"-","palier":4,"nom":"Les Jarres fendues","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 16 dégâts à la cible. Des Gangas des jarres rejoignent le combat : 8 PV, frappe 3. 2 coups de 3 au hasard ; la cible est marquée : +2 par coup reçu. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","cartesJouees",[["deg","cible",16]]],["invoque","Gangas des jarres",8,3],["deg","hasard",3,2],["vulnerable","cible",2],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Le gel fend les jarres d'eau devant les maisons ; au matin, on ramasse des tessons pris dans la glace.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ANT221-moins-5","zone":"ANT221","pole":"-","palier":5,"nom":"La Vipère des racines","cout":2,"cible":1,
 "effet":"Une Vipère des racines rejoint le combat : 12 PV, frappe 4. +2 mana de Feu ; l'attaque de la cible baisse de 2 ; piochez 1 carte ; le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Vipère des racines",12,4],["mana","Feu",2],["affaiblit","cible",2],["pioche",1],["garde","heros",6],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Affaiblissement","Garde","Pioche","Mana","Prix"],
 "ambiance":"La vipère s'est logée dans le trou d'une racine arrachée, là où le tagh tenait la dune.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ANT221-moins-6","zone":"ANT221","pole":"-","palier":6,"nom":"Les Gangas du marzban","cout":2,"cible":1,
 "effet":"Des Gangas du marzban rejoignent le combat : 10 PV, frappe 4. 3 coups de 3 au hasard ; le héros se soigne de 10 ; la cible est marquée : +2 par coup reçu. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Gangas du marzban",10,4],["deg","hasard",3,3],["soin","heros",10],["vulnerable","cible",2],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Soin","Prix"],
 "ambiance":"Les gangas du marzban, gardés en cage pour la fête, ont été lâchés le lendemain ; ils sont restés.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT221-moins7","zone":"ANT221","pole":"-","palier":7,"nom":"Le Désert gelé","cout":2,"cible":1,
 "effet":"Le froid mord pour vous. Une Grande Vipère blanche (16 PV, frappe 6) ; 6 à tous ; riposte 4 ; piochez 1 ; soin du héros 6. Pose Givre. Si Sang (consommée) : 20 à la cible ; reprenez votre dernière défausse ; la cible hésite. Prix : héros −2 PV.",
 "ops":[["invoque","Grande Vipère blanche",16,6],["deg","tous",6],["riposte",4],["pioche",1],["soin","heros",6],["pose","Givre"],["reveil","Sang",true,[["deg","cible",20],["recup"],["hesite","cible"]]],["prixPV",2]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Contrôle","Riposte","Soin","Pioche","Récupération","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Le désert gelé à perte de vue, sans un buisson ; les jarres fendues, et le givre sur le sable.",
 "budget":"46,2 sans combo ; réveil +29 (63 %)"},
{"id":"ANT221-plus-1","zone":"ANT221","pole":"+","palier":1,"nom":"Le Dromadaire chargé","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 1. Un Dromadaire chargé rejoint le combat : 6 PV, frappe 1. Le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",1],["invoque","Dromadaire chargé",6,1],["garde","heros",4],["prixPV",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Le dromadaire ploie sous les fagots de tagh, et grogne à chaque pas comme s'il savait pour quoi.",
 "budget":"9,7 / 10 (−3 %)"},
{"id":"ANT221-plus-2","zone":"ANT221","pole":"+","palier":2,"nom":"La Fête de Sadeh","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; +1 mana de Feu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["deg","cible",10]]],["affaiblit","cible",2],["mana","Feu",1],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Mana","Condition","Prix"],
 "ambiance":"Pour Sadeh, on chasse l'hiver par le feu ; les mobeds bénissent le bûcher, et le marzban le mesure.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT221-plus-3","zone":"ANT221","pole":"+","palier":3,"nom":"La Salamandre du bûcher","cout":2,"cible":1,
 "effet":"L'attaque de la cible baisse de 2. Une Salamandre du bûcher rejoint le combat : 8 PV, frappe 3. 4 dégâts à tous les ennemis. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",2],["invoque","Salamandre du bûcher",8,3],["deg","tous",4],["prixPV",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Affaiblissement","Prix"],
 "ambiance":"Les mobeds disent que la salamandre naît dans le feu sacré ; celle-ci est sortie du bûcher en pleine nuit.",
 "budget":"22,3 / 24 (−7 %)"},
{"id":"ANT221-plus-4","zone":"ANT221","pole":"+","palier":4,"nom":"Les Chameliers","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 16 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; +2 mana de Feu ; riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["deg","cible",16]]],["affaiblit","cible",3],["mana","Feu",2],["riposte",2],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Riposte","Mana","Condition","Prix"],
 "ambiance":"Les chameliers coupent le tagh au loin, et rapportent les racines quand il n'y a plus de branches.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT221-plus-5","zone":"ANT221","pole":"+","palier":5,"nom":"Les Dromadaires du tagh","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 1. Des Dromadaires du tagh rejoignent le combat : 12 PV, frappe 4. Le héros se soigne de 10 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",1],["invoque","Dromadaires du tagh",12,4],["soin","heros",10],["pioche",1],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Invocation","Affaiblissement","Soin","Pioche","Prix"],
 "ambiance":"Une file de dromadaires chargés de bois traverse les dunes jusqu'à l'horizon, à l'aller comme au retour.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT221-plus-6","zone":"ANT221","pole":"+","palier":6,"nom":"Le Feu vu du palais","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; +2 mana de Feu ; le héros gagne 6 de garde ; la cible hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["deg","cible",18]]],["affaiblit","cible",3],["mana","Feu",2],["garde","heros",6],["hesite","cible"],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Contrôle","Garde","Mana","Condition","Prix"],
 "ambiance":"On dit que le feu de Sadeh se vit jusqu'au palais ; personne au palais ne l'a jamais confirmé.",
 "budget":"31,8 / 36 (−12 %)"},
{"id":"ANT221-plus7","zone":"ANT221","pole":"+","palier":7,"nom":"Le Bûcher d'Ardavan","cout":2,"cible":1,
 "effet":"Le désert brûle pour être vu. 16 à la cible ; la cible −4 d'attaque ; une Grande Salamandre (14 PV, frappe 5) ; riposte 4. Pose Braise. Si Givre (consommée) : soin du héros 14 ; piochez 2 ; 4 à tous. Prix : héros −2 PV.",
 "ops":[["deg","cible",16],["affaiblit","cible",4],["invoque","Grande Salamandre",14,5],["riposte",4],["pose","Braise"],["reveil","Givre",true,[["soin","heros",14],["pioche",2],["deg","tous",4]]],["prixPV",2]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Riposte","Soin","Pioche","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"Le bûcher éclaire le désert jusqu'à l'horizon ; les dunes rougeoient, et les salamandres dansent dans la braise.",
 "budget":"48,5 sans combo ; réveil +30,8 (64 %)"}
]
```

---

## 12. Ad Anseres, l'Alerte des Oies (ANT017) — Antre · Oasis · Sève · Romaine

Forme du récit : la fausse alerte (les oies sacrées crient à chaque chacal, la garnison cesse de se lever, puis vient la vraie nuit). Recette du −7 : la ruine (l'oasis rongée, le camp ouvert) ; du +7 : l'ordre (tout en rang au soleil).

**Chaos (−)** : le chacal doré → le cri de chaque nuit → les criquets pèlerins → les légionnaires debout → les chacals des jardins → les légionnaires couchés → l'Oasis rongée. Fil mécanique : **colonne hésitation et « la cible hésite déjà »** (crochet sur 4 cartes, toujours lu avant l'hésitation de la carte ; hésitation sur 4 cartes, de tous sur 2 cartes non voisines), bêtes sur 4 cartes (chacals dorés, canidés ; criquets pèlerins, acrididés), brûlure en appoint ; prix : PV et défausse. D ANT132 (même couple) a une colonne bête/`bete`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, hésitation 4, dégâts ciblés 4, brûlure 3, riposte 2, garde du héros 2, coups au hasard 2, soin du héros 2, affaiblissement 2, mana 2 ; crochet « la cible hésite déjà » sur 4 ; prix sur 7 cartes (PV 4, défausse 3).

**Ordre (+)** : l'oie sacrée → le pigeon du colombier → les oies du Capitole → les pigeons des messages → l'oie de garde → le préfet Pomponius → le Camp en rang. Fil mécanique : **invocations** (vocation, 3e et dernier emploi sur l'Ordre après D CIT030 et C ANT065 : oies, anatidés ; pigeons, columbidés ; ni gruidés ni pélécanidés), garde des alliés en appoint ; crochet « la cible hésite déjà » (hésitation sur la seule forme ultime ; D : `troisCartes` et `garde`, C : `cibleGarde`) ; prix : bête et défausse (C : PV). D ANT132 (même couple) a une colonne défausse/`defausseAPrix`. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, garde des alliés 4, dégâts ciblés 4, garde du héros 2, pioche 2, soin du héros 2, affaiblissement 2, riposte 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (vos bêtes 4, défausse 3).

```json
{"fiche":"ANT017","nom":"Ad Anseres, l'Alerte des Oies",
 "recit":"Le préfet Pomponius Bassus fit venir d'Italie des oies sacrées pour le camp de l'oasis, puisque celles du Capitole avaient jadis sauvé Rome. Elles criaient à chaque chacal. Les chacals vinrent chaque nuit, les oies crièrent chaque nuit, la garnison se leva chaque nuit, puis cessa de se lever. Bassus fit aussi bâtir un colombier, pour les messages. La nuit où les nomades descendirent du djebel, les oies crièrent très fort. Les pigeons partirent au matin, porteurs de la nouvelle.",
 "pal":["Les palmiers rongés jusqu'au cœur, le camp éventré, des plumes d'oies sur le sable ; les criquets couvrent tout d'un bruit de pluie sèche.","Des chacals rôdent entre les jardins ; les oies crient sans cesse, et les sentinelles dorment debout contre les palissades.","Une oasis de palmiers et de jardins clos autour d'une source, un camp romain carré, un enclos d'oies près de la porte et un colombier rond.","Les palmiers en rangs, les canaux droits, l'enclos des oies balayé ; les pigeons partent du colombier à heure fixe vers le nord.","Tout est en rang : palmiers, tentes, oies, pigeons sur les corniches du colombier ; la garnison aligne ses boucliers au soleil, et rien ne bouge."],
 "pm":"Chaos","pp":"Ordre"}
```

```json
[
{"id":"ANT017-moins-1","zone":"ANT017","pole":"-","palier":1,"nom":"Le Chacal doré","cout":1,"cible":1,
 "effet":"La cible hésite. Un Chacal doré rejoint le combat : 4 PV, frappe 2. La cible brûle : 1 par tour pendant 2 tours. Prix : le héros perd 1 PV.",
 "ops":[["hesite","cible"],["invoque","Chacal doré",4,2],["brulure","cible",1,2],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Brûlure","Contrôle","Prix"],
 "ambiance":"Un chacal doré se glisse entre les palmiers jusqu'à l'enclos ; il ne veut rien, il regarde les oies.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT017-moins-2","zone":"ANT017","pole":"-","palier":2,"nom":"Le Cri de chaque nuit","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis le héros gagne 4 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",10]]],["garde","heros",4],["riposte",2],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les oies crient au chacal, la garnison saute sur ses armes, et le chacal est déjà loin.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ANT017-moins-3","zone":"ANT017","pole":"-","palier":3,"nom":"Les Criquets pèlerins","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, riposte 6 jusqu'à votre prochain tour. Des Criquets pèlerins rejoignent le combat : 6 PV, frappe 3. La cible hésite ; 3 coups de 3 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["riposte",6]]],["invoque","Criquets pèlerins",6,3],["hesite","cible"],["deg","hasard",3,3],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Contrôle","Riposte","Condition","Prix"],
 "ambiance":"Les criquets pèlerins arrivent du sud en nuage bas ; on les entend avant de les voir, comme une averse.",
 "budget":"24,5 / 24 (+2 %)"},
{"id":"ANT017-moins-4","zone":"ANT017","pole":"-","palier":4,"nom":"Les Légionnaires debout","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, le héros se soigne de 12. Puis tous les ennemis hésitent ; la cible brûle : 2 par tour pendant 3 tours ; le héros gagne 8 de garde. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["soin","heros",12]]],["hesite","tous"],["brulure","cible",2,3],["garde","heros",8],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Brûlure","Contrôle","Garde","Soin","Condition","Prix"],
 "ambiance":"Le centurion fait lever la garnison à chaque cri ; au matin, les hommes dorment sur leurs lances.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ANT017-moins-5","zone":"ANT017","pole":"-","palier":5,"nom":"Les Chacals des jardins","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Des Chacals dorés rejoignent le combat : 10 PV, frappe 4. L'attaque de la cible baisse de 2 ; la cible brûle : 2 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["invoque","Chacals dorés",10,4],["affaiblit","cible",2],["brulure","cible",2,3],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Brûlure","Affaiblissement","Prix"],
 "ambiance":"Les chacals ont compris le jeu : ils viennent, les oies crient, et ils repartent en trottant.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT017-moins-6","zone":"ANT017","pole":"-","palier":6,"nom":"Les Légionnaires couchés","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 18 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 2 ; le héros se soigne de 8 ; +1 mana de Sève. Prix : le héros perd 2 PV.",
 "ops":[["si","hesite",[["deg","cible",18]]],["affaiblit","tous",2],["soin","heros",8],["mana","Sève",1],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Affaiblissement","Soin","Mana","Condition","Prix"],
 "ambiance":"Une nuit, aux cris des oies, personne ne se lève ; le centurion lui-même se retourne dans son lit.",
 "budget":"31,2 / 36 (−13 %)"},
{"id":"ANT017-moins7","zone":"ANT017","pole":"-","palier":7,"nom":"L'Oasis rongée","cout":2,"cible":1,
 "effet":"Le désert entre partout. Une Nuée de criquets (14 PV, frappe 5) ; tous hésitent ; 8 à tous ; piochez 1 ; +2 mana de Sève. Pose Sang. Si Racine (consommée) : 25 à la cible ; 2 coups de 2 au hasard. Prix : défaussez 1 carte.",
 "ops":[["invoque","Nuée de criquets",14,5],["hesite","tous"],["deg","tous",8],["pioche",1],["mana","Sève",2],["pose","Sang"],["reveil","Racine",true,[["deg","cible",25],["deg","hasard",2,2]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Contrôle","Pioche","Mana","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Les palmiers rongés jusqu'au cœur, le camp ouvert, et des plumes d'oies sur le sable.",
 "budget":"48,1 sans combo ; réveil +29 (60 %)"},
{"id":"ANT017-plus-1","zone":"ANT017","pole":"+","palier":1,"nom":"L'Oie sacrée","cout":1,"cible":0,
 "effet":"Une Oie sacrée rejoint le combat : 6 PV, frappe 2. Vos alliés gagnent 4 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Oie sacrée",6,2],["garde","allies",4],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"L'oie sacrée a voyagé depuis Rome en cage d'osier, et le fait encore payer à tout le camp.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT017-plus-2","zone":"ANT017","pole":"+","palier":2,"nom":"Le Pigeon du colombier","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Un Pigeon du colombier rejoint le combat : 4 PV, frappe 2. Le héros gagne 4 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",10]]],["invoque","Pigeon du colombier",4,2],["garde","heros",4],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le pigeon du colombier connaît la route du nord ; on lui noue un message à la patte.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ANT017-plus-3","zone":"ANT017","pole":"+","palier":3,"nom":"Les Oies du Capitole","cout":2,"cible":0,
 "effet":"Des Oies du Capitole rejoignent le combat : 10 PV, frappe 3. Vos alliés gagnent 8 de garde ; piochez 1 carte ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Oies du Capitole",10,3],["garde","allies",8],["pioche",1],["soin","heros",4],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Soin","Pioche","Prix"],
 "ambiance":"On rappelle aux recrues que des oies ont sauvé Rome ; les recrues regardent les oies avec méfiance.",
 "budget":"24,1 / 24 (+0 %)"},
{"id":"ANT017-plus-4","zone":"ANT017","pole":"+","palier":4,"nom":"Les Pigeons des messages","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 16 dégâts à la cible. Des Pigeons des messages rejoignent le combat : 8 PV, frappe 3. L'attaque de la cible baisse de 2 ; le héros gagne 6 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",16]]],["invoque","Pigeons des messages",8,3],["affaiblit","cible",2],["garde","heros",6],["prixBete",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Les pigeons des messages partent à heure fixe, et le préfet note chaque départ dans son registre.",
 "budget":"26,3 / 28 (−6 %)"},
{"id":"ANT017-plus-5","zone":"ANT017","pole":"+","palier":5,"nom":"L'Oie de garde","cout":2,"cible":1,
 "effet":"Une Oie de garde rejoint le combat : 12 PV, frappe 4. Vos alliés gagnent 10 de garde ; riposte 2 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Oie de garde",12,4],["garde","allies",10],["riposte",2],["affaiblit","cible",1],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"L'oie de garde se tient à la porte du camp, le cou tendu, et crie à chaque passant.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ANT017-plus-6","zone":"ANT017","pole":"+","palier":6,"nom":"Le Préfet Pomponius","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 18 dégâts à la cible. Des Pigeons du préfet rejoignent le combat : 10 PV, frappe 4. Piochez 1 carte ; le héros se soigne de 9 ; riposte 2 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","hesite",[["deg","cible",18]]],["invoque","Pigeons du préfet",10,4],["pioche",1],["soin","heros",9],["riposte",2],["prixBete",2]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Riposte","Soin","Pioche","Condition","Prix"],
 "ambiance":"Pomponius Bassus aime l'ordre : les palmiers en rangs, les oies en rangs, les messages à heure fixe.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT017-plus7","zone":"ANT017","pole":"+","palier":7,"nom":"Le Camp en rang","cout":2,"cible":1,
 "effet":"Le camp tient son rang. Une Grande Oie du camp (16 PV, frappe 5) ; alliés +16 de garde ; tous hésitent ; la cible marquée (+2). Pose Sceau. Si Sang (consommée) : 23 à la cible ; la cible brûle (2 × 3 tours). Prix : défaussez 1 carte.",
 "ops":[["invoque","Grande Oie du camp",16,5],["garde","allies",16],["hesite","tous"],["vulnerable","cible",2],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",23],["brulure","cible",2,3]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Brûlure","Marque","Contrôle","Garde","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Tout est en rang au soleil : palmiers, tentes, oies, pigeons ; la garnison aligne ses boucliers.",
 "budget":"46,7 sans combo ; réveil +29 (62 %)"}
]
```
