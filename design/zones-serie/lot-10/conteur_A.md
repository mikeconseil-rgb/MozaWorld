# Lot 10 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes). Carte des familles : `familles_A.md`, écrite avant les cartes (14 h 28), mise à jour à la remise après lecture de familles_B, C et D.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n et ennemiSoin n rendent 2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget`) ; formes du palier 7 entre 45 et 55 points de base, sans tolérance, réveil de 60 à 100 %. Aucun boost, aucun écho. Plafonds sur la carte entière, `si` et réveil compris : riposte 8, mana 2, dégâts ciblés 20 hors Donjon aux paliers 1 à 6.

**Validateur** (`valide.py`, script Python repris du lot 9 et complété avec les leçons du lot 9, relancé sur ce fichier tel qu'il est remis) : **0 erreur, 0 avertissement** (hors deux mentions de « mir » et « kapu » dans familles_B.md, qui les cite pour les éviter). Il vérifie :
- format et longueurs : un bloc fiche et un bloc de 14 cartes par zone, paliers 1 à 7 sur chaque pôle, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus, ambiance de 12 à 20 mots, effet de 250 caractères au plus, chaque nombre des `ops` présent dans le texte, aucun nombre dans la prose, mots interdits, pigments au +7, chutes « …, sans X. » (2 au plus) et en parole rapportée ;
- moteur : opérations et arguments dans l'ordre, conditions lues dans `tv/src/cartes.js` (sans y toucher), `"cible":1` partout où il faut, tag Loi, au moins 2 Lois par pôle d'Assemblée, au moins 3 invocations par pôle d'Antre, aucune condition rendue vraie ou fausse par une opération qui la précède ;
- budgets : écart ≤ 15 % aux paliers 1 à 6 ; palier 7 entre 45 et 55 de base, réveil de 60 à 100 %, phrase d'ouverture de 3 à 6 mots, prix, résonance réveillée différente de la posée ;
- **plafonds sur la carte entière (leçon 4 du lot 9)** : riposte ≤ 8, mana ≤ 2 (somme, `si` et réveil compris), dégâts ciblés ≤ 20 hors Donjon aux paliers 1 à 6 ; aucune opération répétée ; **aucun écho sous `si` ni sous réveil** (leçon 5) ;
- familles : places de LISTE.md tenues à l'unité, pas de famille principale commune aux deux pôles d'une zone, aucune famille principale déjà jouée par le même mot (lots 1 à 9, exil compris), appoints dans 3 pôles au plus, au moins 3 familles par pôle, dégâts ciblés sur 4 cartes au plus (5 en Donjon), « tous » sur 3 au plus, crochet sur 4 cartes au plus ;
- **vocations (leçon 1)** : par mot et par type (gros coups depuis le lot 5, pioche des Assemblées), trois emplois au plus, jamais A deux fois, crochet, prix principal et famille de bêtes nouveaux par rapport aux emplois précédents, un seul emploi par mot dans le lot ; **colonnes** : 3 (4 au plus) ;
- **crochets d'intention ennemie (leçon 2)** : 2 de mes pôles au plus ; **deux sortes de prix par pôle (leçon 3)**, la seconde sur 2 cartes, jamais le même prix sur 7 cartes ;
- couples qui se remplissent eux-mêmes seulement sur une colonne déclarée, et comptés avec les cartes des autres conteurs du lot 10 quand elles existent ; même assemblage prix + crochet dans 2 de mes pôles au plus ; aucun crochet déjà pris par le même mot (lots 1 à 9) ;
- **familles d'animaux sur une table commune (leçon 8)**, nom par nom (hyène = hyénidés, périophtalme = gobiidés, kōlea = charadriidés…) : aucune bête hors table, aucune famille deux fois chez moi, 2 pôles du lot au plus avec les cartes des autres conteurs ;
- noms : absents de `noms-pris.txt`, par moitié, nom de lieu, mot principal, mot traduit et préfixe ; mot de nom commun avec une zone du même couple dans le lot (leçon 6) ; prénoms et institutions absents des autres fichiers du lot 10.

**Places des familles (LISTE.md), toutes tenues, aucune autre prise** : soin du héros 1 (Vérité CIT023), soin des alliés 2 (Pureté ASS039, Cendre ANT034), garde du héros 1 (Oubli ASS132), garde des alliés 1 (Sang ANT123), affaiblissement 2 (Mémoire ASS132, Floraison ANT034), riposte 1 (Aurore DON059), brûlure 1 (Sommeil ANT141), marque 1 (Bois ASS075), mana 1 (Cauchemar ASS116), perce-garde 1 (Nuit DON059), exil 2 (Éveil ANT141, Chant ANT042), pioche 1 (Corruption ASS039, premier emploi de la pioche sur ce mot) ; places rares : coups au hasard (Rêve ASS116), vol de vie (Clarté ANT242). **Vocations 4** (invocations) : Ombre (ANT232, 2e emploi), Brume (ANT242, 3e et dernier), Sève (ANT123, 3e et dernier), Silence (ANT042, 2e). **Colonnes 3** : Mensonge (garde du héros et `garde`), Fer (PV et `blesse`), Lumière (brûlure et `brule`). Aucune 4e colonne.

**Vocations (leçon 1 du lot 9)** : comptées au script par mot et par type sur les lots 1 à 9 (tableau en tête de familles_A.md). Chacune prend un crochet, un prix principal et une famille de bêtes que les emplois précédents n'avaient pas : Ombre `cibleGarde`, vos bêtes, bihoreaux et périophtalmes (D ANT127 : `vol`, PV, bovidés, hyénidés, rapaces) ; Brume `hesite`, garde ennemie, pétrels et phaétons (D ANT047 et C ANT129 : `vol`, bête, défausse, perches, primates, félins, serpents) ; Sève `blesse`, soin ennemi, huppes et hérissons (C ANT121 et ANT188 : `bete`, défausse, bête, cervidés, ours, gallinacés, léporidés) ; Silence `vulnerable`, défausse, saïgas et tortues (B ANT147 : `pietine`, PV, poissons). J'ai laissé le Sommeil à B (ANT044) et le Chant à D (ANT082). Aucun de mes mots ne porte une autre vocation dans le lot d'après familles_B, C et D.

**Crochets d'intention ennemie (leçon 2 du lot 9)** : 2 pôles seulement (au lot 9 : 17) : Clarté `vol` (soin ennemi et exil), Sang `pietine` (bête et PV). Les 22 autres lisent `cibleGarde`, `hesiteAvant`, `vulnerable`, `cartesJouees`, `troisCartes`, `defausseAPrix`, `blesse`, `brule`, `hesite` ou `garde`, jamais nourris sur 3 cartes par leur propre pôle hors colonne (vérifié au script).

**Prix (leçon 3 du lot 9)** : deux sortes de prix dans chaque pôle, la seconde sur 2 cartes au moins ; aucun pôle ne paie le même prix sur ses 7 cartes ; prix sur 6 ou 7 cartes par pôle, à une carte près dans chaque zone.

**Points pour le critique**
- **Rêve et Éveil échangés** : ma carte des familles de 14 h 28 mettait l'exil sur le Rêve. Au script, l'exil (qui est aussi un prix) avait déjà été famille principale du Rêve (A ASS057, lot 5, 6 cartes) : le Rêve prend les coups au hasard (jamais principaux sur ce mot), l'Éveil l'exil (jamais principal sur ce mot). Corrigé dans familles_A.md.
- **D, Mensonge/Vérité (ANT071)** : familles_D.md (14 h 30) prévoit sur le Mensonge la même colonne garde/`garde` que mon CIT023 (14 h 28), et sur la Vérité le même soin du héros. Signalé dans familles_A.md ; c'est au second inscrit de changer.
- **B, ANT207** : familles_B.md (14 h 45) prévoit « l'hivernage », la forme de mon DON059. Signalé.
- **Familles d'animaux** : j'ai retiré mes chacals (le Sang a des hyènes) pour laisser les canidés à D et B. Les lépidoptères seraient à 3 (mes phalènes, inscrites les premières ; papillons de nuit de D ; sphinx de B) : signalé à B.
- « Verger » était déjà mot principal d'un nom en jeu (Eremosíderon) : ANT123 s'appelle « l'Arpent du Rachat ».

**Couples de mots partagés** : C est inscrit avant moi sur Sang/Sève, Ombre/Lumière, Cauchemar/Rêve et Corruption/Pureté : j'y prends d'autres familles principales et d'autres crochets sur les deux pôles. Je suis inscrit avant B (Brume/Clarté, Sommeil/Éveil, Fer/Bois) et D (Mensonge/Vérité, Nuit/Aurore, Silence/Chant). Images du ±7 propres à chaque zone (voir familles_A.md, section 8 et la ligne « Pour B et D »).

Recettes de récit (aucune deux fois, aucune reprise de mes formes des lots 7 à 9 ; documents cités 2 sur 12 : le décret, le procès-verbal ; aucun dialogue, aucune énumération, aucune ouverture « X était petit quand », aucune chute en parole rapportée) : CIT023 la ruse de guerre ; DON059 l'hivernage ; ASS116 **le décret** ; ASS039 **le procès-verbal d'enquête** ; ASS075 le concours ; ASS132 l'amnistie ; ANT232 la tentative ; ANT242 le tabou levé ; ANT141 la fondation pieuse ; ANT034 la translation des reliques ; ANT123 le règlement d'une vendetta ; ANT042 les funérailles payées.

Recettes des extrêmes : −7 en foule (CIT023, ASS039), silence (DON059, ANT141), ruine (ASS116, ANT034), ordre (ASS075, ANT123), vide (ASS132, ANT232, ANT042), démesure (ANT242) ; +7 en vide (CIT023, ASS039, ANT242), démesure (DON059, ASS075, ANT232), ordre (ASS116), foule (ASS132, ANT141, ANT042), objet (ANT034), geste (ANT123). Aucun pigment au +7, aucun végétal qui avale un bâtiment. Aucun nombre précis dans ma prose.

Résonances des formes du palier 7 (posée → réveillée). Posées : Racine 5, Braise 5, Sang 5, Sceau 4, Abîme 3, Givre 2. Réveillées : Givre 7, Racine 6, Sceau 5, Sang 2, Abîme 2, Braise 2.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT023 | Sceau → Racine | Racine → Sang |
| DON059 | Abîme → Givre | Braise → Abîme |
| ASS116 | Givre → Sceau | Sceau → Givre |
| ASS039 | Sang → Braise | Braise → Racine |
| ASS075 | Sang → Sceau | Racine → Givre |
| ASS132 | Racine → Sceau | Sang → Racine |
| ANT232 | Abîme → Racine | Braise → Givre |
| ANT242 | Givre → Sceau | Racine → Braise |
| ANT141 | Braise → Givre | Sceau → Sang |
| ANT034 | Sceau → Racine | Racine → Givre |
| ANT123 | Sang → Abîme | Braise → Racine |
| ANT042 | Abîme → Givre | Sang → Sceau |

---

## 1. Kahupō, la Palissade des Manteaux (CIT023) — Citadelle · Jungle · Sève · Polynésienne

Forme du récit : la ruse de guerre (les manteaux sur les piquets), et ce qu'en fait la génération suivante. Recette du −7 : la foule (une armée de manteaux vides à perte de vue) ; du +7 : le vide (la palissade ouverte, plus rien de caché, plus personne).

**Mensonge (−)** : le manteau sur le piquet → les feux de veille → les piquets dans la jungle → le rangatira Tūtaki → l'ennemi qui compte → le pā désert → la Forêt de manteaux. Fil mécanique : **colonne garde du héros et « la Garde du héros est levée »** (le pā tient tant que la ruse tient), riposte et garde des alliés en appoint ; prix : PV et défausse. Autre image que D ANT071. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 4, garde du héros 4, dégâts ciblés 4, garde des alliés 2, pioche 2, hésitation 2, soin du héros 2, marque 2 ; crochet « la Garde du héros est levée » sur 4 ; prix sur 7 cartes (PV 4, défausse 3).

**Vérité (+)** : le chant de la ruse → le festin du mariage → le petit-fils → les invités de l'amont → la palissade décrochée → le pā ouvert → la Vérité dite. Fil mécanique : soin du héros (on se porte mieux sans mentir, un temps), garde des alliés et affaiblissement en touche, crochet « la cible a de la garde » ; prix : PV et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, dégâts ciblés 4, garde des alliés 4, affaiblissement 2, exil 2, pioche 2, hésitation 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 6 cartes (PV 4, exil 2).

```json
{"fiche":"CIT023","nom":"Kahupō, la Palissade des Manteaux",
 "recit":"Quand les pirogues de l'amont remontèrent la rivière, le rangatira Tūtaki n'avait pas assez d'hommes pour tenir le pā. Il fit pendre les manteaux de plumes des femmes et des vieillards à des piquets, dans la jungle, et allumer un feu devant chacun. Les ennemis comptèrent les manteaux toute la nuit et repartirent à l'aube. On fit de la ruse un chant. Bien plus tard, à un festin de mariage, le petit-fils de Tūtaki la raconta en entier devant des invités de l'amont. Le petit-fils a été très applaudi.",
 "pal":["La jungle est pleine de manteaux sur des piquets, à perte de vue ; un feu devant chacun, et derrière la palissade presque personne.","Des piquets coiffés de plumes entre les fougères arborescentes ; les guetteurs entretiennent des feux devant des guerriers qui n'existent pas.","Un pā de terre et de pieux au-dessus de la rivière, dans la jungle mouillée ; des manteaux sèchent sur la palissade, des pirogues sur la rive.","On décroche les manteaux des piquets ; les anciens racontent la ruse aux enfants, et les feux de veille s'éteignent un à un dans la jungle.","La palissade est ouverte, les piquets nus, la rivière visible jusqu'à l'amont ; plus rien de caché dans le pā, et plus personne pour le tenir."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"CIT023-moins-1","zone":"CIT023","pole":"-","palier":1,"nom":"Le Manteau sur le piquet","cout":1,"cible":0,
 "effet":"Le héros gagne 8 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["garde","heros",8],["riposte",2],["prixPV",1]],
 "tags":["Citadelle","Sève","Pôle −","Riposte","Garde","Prix"],
 "ambiance":"Un manteau de plumes de kererū pend à un piquet de fougère ; de loin, il a des épaules.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"CIT023-moins-2","zone":"CIT023","pole":"-","palier":2,"nom":"Les Piquets dans la jungle","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis vos alliés gagnent 6 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","garde",[["deg","cible",10]]],["garde","allies",6],["prixDefausse",1],["pioche",1]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les femmes plantent les piquets entre les racines, à la distance qu'il faut entre des guerriers fatigués.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"CIT023-moins-3","zone":"CIT023","pole":"-","palier":3,"nom":"Les Feux de veille","cout":2,"cible":1,
 "effet":"Le héros gagne 14 de garde ; riposte 5 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",14],["riposte",5],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Citadelle","Sève","Pôle −","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"Un feu devant chaque manteau, entretenu toute la nuit par des enfants qui rampent de l'un à l'autre.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"CIT023-moins-4","zone":"CIT023","pole":"-","palier":4,"nom":"Le Rangatira Tūtaki","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 14 dégâts à la cible. Puis vos alliés gagnent 14 de garde ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","garde",[["deg","cible",14]]],["garde","allies",14],["hesite","cible"],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Tūtaki se promène entre les piquets en parlant fort, comme on parle à des hommes qu'on commande.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"CIT023-moins-5","zone":"CIT023","pole":"-","palier":5,"nom":"L'Ennemi qui compte","cout":2,"cible":1,
 "effet":"Le héros gagne 18 de garde ; riposte 6 jusqu'à votre prochain tour ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",18],["riposte",6],["hesite","cible"],["prixPV",2]],
 "tags":["Citadelle","Sève","Pôle −","Contrôle","Riposte","Garde","Prix"],
 "ambiance":"Sur l'autre rive, les guerriers de l'amont comptent les manteaux à voix basse, et se trompent en trop.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"CIT023-moins-6","zone":"CIT023","pole":"-","palier":6,"nom":"Le Pā désert","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 18 dégâts à la cible. Puis tous les ennemis sont marqués : +2 par coup reçu ; piochez 1 carte ; le héros se soigne de 14. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","garde",[["deg","cible",18]]],["vulnerable","tous",2],["pioche",1],["soin","heros",14],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Derrière la palissade, il ne reste que Tūtaki, ses chiens et les vieillards qui entretiennent les feux.",
 "budget":"37,2 / 36 (+3 %)"},
{"id":"CIT023-moins7","zone":"CIT023","pole":"-","palier":7,"nom":"La Forêt de manteaux","cout":2,"cible":1,
 "effet":"Les manteaux tiennent le pā. Si votre Garde est levée, 6 à tous. Héros +28 de garde ; riposte 8 ; la cible marquée (+2). Pose Sceau. Si Racine (consommée) : soin du héros 12 ; 17 à la cible. Prix : héros −4 PV.",
 "ops":[["si","garde",[["deg","tous",6]]],["garde","heros",28],["riposte",8],["vulnerable","cible",2],["pose","Sceau"],["reveil","Racine",true,[["soin","heros",12],["deg","cible",17]]],["prixPV",4]],
 "tags":["Citadelle","Sève","Forme ultime −7","Dégâts","Marque","Riposte","Garde","Soin","Condition","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Des manteaux sur des piquets, à perte de vue dans la jungle ; aucun ne bouge, et l'ennemi part.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"CIT023-plus-1","zone":"CIT023","pole":"+","palier":1,"nom":"Le Chant de la ruse","cout":1,"cible":1,
 "effet":"Le héros se soigne de 7 ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",7],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Citadelle","Sève","Pôle +","Affaiblissement","Soin","Prix"],
 "ambiance":"On a fait de la ruse des manteaux un chant que les enfants du pā savent avant de savoir nager.",
 "budget":"9 / 10 (−10 %)"},
{"id":"CIT023-plus-2","zone":"CIT023","pole":"+","palier":2,"nom":"Le Festin du mariage","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis le héros se soigne de 6 ; vos alliés gagnent 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["soin","heros",6],["garde","allies",4],["exil"]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Le four de terre est ouvert pour le mariage ; les invités de l'amont s'assoient côté rivière.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"CIT023-plus-3","zone":"CIT023","pole":"+","palier":3,"nom":"Le Petit-fils de Tūtaki","cout":2,"cible":0,
 "effet":"Le héros se soigne de 14 ; vos alliés gagnent 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["soin","heros",14],["garde","allies",8],["prixPV",2]],
 "tags":["Citadelle","Sève","Pôle +","Garde","Soin","Prix"],
 "ambiance":"Le petit-fils raconte bien ; il imite son grand-père parlant aux piquets, et toute la tablée rit.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"CIT023-plus-4","zone":"CIT023","pole":"+","palier":4,"nom":"Les Invités de l'amont","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 16 dégâts à la cible. Puis le héros se soigne de 14 ; l'attaque de la cible baisse de 3. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["soin","heros",14],["affaiblit","cible",3],["exil"]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"Les invités de l'amont rient aussi, plus longtemps que les autres, et repartent avant l'aube sans prendre congé.",
 "budget":"28 / 28 (+0 %)"},
{"id":"CIT023-plus-5","zone":"CIT023","pole":"+","palier":5,"nom":"La Palissade décrochée","cout":2,"cible":0,
 "effet":"Le héros se soigne de 16 ; vos alliés gagnent 10 de garde ; piochez 1 carte. Prix : le héros perd 3 PV.",
 "ops":[["soin","heros",16],["garde","allies",10],["pioche",1],["prixPV",3]],
 "tags":["Citadelle","Sève","Pôle +","Garde","Soin","Pioche","Prix"],
 "ambiance":"Puisque tout le monde sait, on décroche les manteaux des piquets et on les rend aux familles.",
 "budget":"29 / 32 (−9 %)"},
{"id":"CIT023-plus-6","zone":"CIT023","pole":"+","palier":6,"nom":"Le Pā ouvert","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 18 dégâts à la cible. Puis le héros se soigne de 18 ; la cible hésite ; piochez 1 carte.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["soin","heros",18],["hesite","cible"],["pioche",1]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Contrôle","Soin","Pioche","Condition"],
 "ambiance":"Les pirogues de l'amont remontent la rivière à la saison suivante ; cette fois, elles comptent juste.",
 "budget":"36 / 36 (+0 %)"},
{"id":"CIT023-plus7","zone":"CIT023","pole":"+","palier":7,"nom":"La Vérité dite","cout":2,"cible":1,
 "effet":"La vérité ouvre le pā. Soin du héros 24 ; alliés +12 de garde ; 5 à tous. Pose Racine. Si Sang (consommée) : soin du héros 12 ; 12 à la cible ; la cible hésite. Prix : héros −3 PV.",
 "ops":[["soin","heros",24],["garde","allies",12],["deg","tous",5],["pose","Racine"],["reveil","Sang",true,[["soin","heros",12],["deg","cible",12],["hesite","cible"]]],["prixPV",3]],
 "tags":["Citadelle","Sève","Forme ultime +7","Dégâts","Contrôle","Garde","Soin","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"La palissade est ouverte, la rivière visible jusqu'à l'amont ; tout le monde sait, et personne ne reste.",
 "budget":"46,4 sans combo ; réveil +29 (62 %)"}
]
```

---


> **Note du critique (lot 10)** : chaque pôle portait des dégâts ciblés sur 5 cartes. Permis dans un Donjon, mais cinq cartes de dégâts ciblés font des gros coups (leçon 5 du lot 8) : la Nuit et l'Aurore y étaient déjà passées chez A (ASS109, lot 5), et l'Aurore porte la pioche de D dans ce lot. Ramené à 4 cartes : en −2, le bonus de la cible qui hésite pioche au lieu de frapper ; en +5, la coulée brûle la cible au lieu de la frapper. Budgets recalculés.

## 2. Aumaarjuk, le Boyau de l'Hivernage (DON059) — Donjon · Volcan · Feu · Inuit

Forme du récit : l'hivernage (le camp qui descend dans la montagne chaude, et n'en remonte pas). Recette du −7 : le silence (les galeries noires où dort tout un camp) ; du +7 : la démesure (le ciel d'hiver qui entre par la montagne fendue).

**Nuit (−)** : la lampe éteinte → la galerie basse → le passage sous la croûte → Ittukusuk → la paroi qui cède → les dormeurs du fond → la Nuit du dedans. Fil mécanique : perce-garde (la nuit passe sous toutes les peaux), dégâts ciblés du Donjon sur 5 cartes au plus, garde du héros et soin du héros en touche, crochet « la cible hésite déjà » ; prix : soin ennemi et défausse. Autre image que D ASS010. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, dégâts ciblés 5, soin du héros 4, affaiblissement 2, garde du héros 2, hésitation 2, marque 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (soin ennemi 4, défausse 3).

**Aurore (+)** : la lueur de la lave → le retour du soleil → le guetteur à l'entrée → les enfants d'en bas → la coulée qui monte → la montagne fendue → l'Aurore du dessous. Fil mécanique : riposte, jamais plus de 8 par carte réveil compris (la montagne rend ce qu'on lui prend), dégâts ciblés et marque en touche, crochet « la cible est déjà marquée » ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, dégâts ciblés 5, marque 2, garde du héros 2, soin du héros 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (garde ennemie 4, PV 3).

```json
{"fiche":"DON059","nom":"Aumaarjuk, le Boyau de l'Hivernage",
 "recit":"L'hiver où le phoque manqua, Ittukusuk mena son camp dans les galeries chaudes de la montagne qui fume. Il y faisait doux ; on y dormait nu, les lampes ne servaient plus, et la longue nuit d'en haut ne se voyait pas d'en bas. Au retour du soleil, Ittukusuk monta seul à l'entrée, regarda la glace, et redescendit. Personne ne remonta l'année suivante non plus. On pêche dans les eaux chaudes du fond des poissons sans yeux. Les enfants nés là-dessous appellent aurore la lueur de la lave.",
 "pal":["Des galeries noires où dort un camp entier sans lampe ; on n'entend que la roche qui travaille, et l'air chaud qui monte du fond.","Des boyaux bas, chauds au toucher, où les peaux de phoque pourrissent ; des passages qui se ferment derrière qui s'y engage.","Une montagne qui fume au-dessus de la banquise ; une entrée basse dans la neige noircie, et une odeur de soufre jusqu'aux traîneaux.","La lave luit au fond des galeries ; les enfants d'en bas jouent dans sa lueur, et l'entrée se couvre de givre que personne ne gratte.","La montagne s'est fendue de haut en bas ; le ciel d'hiver entre dans les galeries, et ses rideaux de lumière se mêlent à la lave."],
 "pm":"Nuit","pp":"Aurore"}
```

```json
[
{"id":"DON059-moins-1","zone":"DON059","pole":"-","palier":1,"nom":"La Lampe éteinte","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; le héros gagne 6 de garde ; l'attaque de la cible baisse de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["briseGarde","cible"],["garde","heros",6],["affaiblit","cible",1],["ennemiSoin",1]],
 "tags":["Donjon","Feu","Pôle −","Affaiblissement","Perce-garde","Garde","Prix"],
 "ambiance":"On a laissé la lampe de pierre s'éteindre le soir de la descente ; en bas, l'huile est inutile.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"DON059-moins-2","zone":"DON059","pole":"-","palier":2,"nom":"La Galerie basse","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, piochez 1 carte. Puis la garde de la cible tombe à 0 ; la cible hésite ; le héros se soigne de 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesiteAvant",[["pioche",1]]],["briseGarde","cible"],["hesite","cible"],["soin","heros",5],["prixDefausse",1]],
 "tags":["Donjon","Feu","Pôle −","Pioche","Perce-garde","Contrôle","Soin","Condition","Prix"],
 "ambiance":"On y avance à genoux, dans le noir chaud, en tenant la botte de celui qui précède.",
 "budget":"12 / 12,5 (−4 %), recalculé par le critique"},
{"id":"DON059-moins-3","zone":"DON059","pole":"-","palier":3,"nom":"Le Passage sous la croûte","cout":2,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 6 dégâts à tous les ennemis ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["briseGarde","cible"],["deg","tous",6],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Perce-garde","Soin","Prix"],
 "ambiance":"La croûte de lave sonne creux sous les genoux ; dessous, quelque chose de plus chaud attend.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"DON059-moins-4","zone":"DON059","pole":"-","palier":4,"nom":"Ittukusuk","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis la garde de la cible tombe à 0 ; le héros gagne 12 de garde ; la cible hésite. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","hesiteAvant",[["deg","cible",20]]],["briseGarde","cible"],["garde","heros",12],["hesite","cible"],["ennemiSoin",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Perce-garde","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Ittukusuk connaît chaque boyau à l'odeur ; il n'a pas remonté depuis l'hiver où le phoque manqua.",
 "budget":"25,6 / 28 (−9 %)"},
{"id":"DON059-moins-5","zone":"DON059","pole":"-","palier":5,"nom":"La Paroi qui cède","cout":2,"cible":1,
 "effet":"22 dégâts à la cible ; la garde de la cible tombe à 0 ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",22],["briseGarde","cible"],["soin","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Perce-garde","Soin","Prix"],
 "ambiance":"La roche chaude s'ouvre sous l'épaule, et l'on tombe dans une galerie que personne ne connaissait.",
 "budget":"28 / 32 (−12 %)"},
{"id":"DON059-moins-6","zone":"DON059","pole":"-","palier":6,"nom":"Les Dormeurs du fond","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 24 dégâts à la cible. Puis ces coups ignorent la garde ; la cible est marquée : +3 par coup reçu ; l'attaque de chaque ennemi baisse de 1 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","hesiteAvant",[["deg","cible",24]]],["ignoreGarde"],["vulnerable","cible",3],["affaiblit","tous",1],["pioche",1],["ennemiSoin",1]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Marque","Affaiblissement","Perce-garde","Pioche","Condition","Prix"],
 "ambiance":"Au fond, les vieux dorment nus contre la paroi chaude ; ils ne savent plus si c'est l'hiver.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"DON059-moins7","zone":"DON059","pole":"-","palier":7,"nom":"La Nuit du dedans","cout":2,"cible":1,
 "effet":"La nuit descend sous terre. 20 à la cible ; toute garde ennemie à 0 ; les coups ignorent la garde ; tous marqués (+1) ; soin du héros 13. Pose Abîme. Si Givre (consommée) : 20 à la cible ; la cible marquée (+3). Prix : défaussez 1 carte.",
 "ops":[["deg","cible",20],["briseGarde","tous"],["ignoreGarde"],["vulnerable","tous",1],["soin","heros",13],["pose","Abîme"],["reveil","Givre",true,[["deg","cible",20],["vulnerable","cible",3]]],["prixDefausse",1]],
 "tags":["Donjon","Feu","Forme ultime −7","Dégâts","Marque","Perce-garde","Soin","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"Des galeries noires où dort un camp entier ; l'air chaud monte du fond, et rien ne bouge.",
 "budget":"46,2 sans combo ; réveil +29 (63 %)"},
{"id":"DON059-plus-1","zone":"DON059","pole":"+","palier":1,"nom":"La Lueur de la lave","cout":1,"cible":1,
 "effet":"6 dégâts à la cible ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",6],["riposte",3],["ennemiGarde",1]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Riposte","Prix"],
 "ambiance":"Au fond, la lave éclaire les visages par en dessous, d'une lumière qui ne se lève pas.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON059-plus-2","zone":"DON059","pole":"+","palier":2,"nom":"Le Retour du soleil","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["riposte",3],["pioche",1],["prixPV",1]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"En haut, le soleil revient sur la banquise ; en bas, personne n'a compté les jours pour le savoir.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"DON059-plus-3","zone":"DON059","pole":"+","palier":3,"nom":"Le Guetteur à l'entrée","cout":2,"cible":1,
 "effet":"Riposte 5 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu ; le héros gagne 10 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",5],["vulnerable","cible",2],["garde","heros",10],["ennemiGarde",1]],
 "tags":["Donjon","Feu","Pôle +","Marque","Riposte","Garde","Prix"],
 "ambiance":"On envoie un garçon voir l'entrée ; il revient dire qu'il fait froid, et l'on rit de lui.",
 "budget":"22 / 24 (−8 %)"},
{"id":"DON059-plus-4","zone":"DON059","pole":"+","palier":4,"nom":"Les Enfants d'en bas","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; le héros se soigne de 8. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["riposte",6],["soin","heros",8],["ennemiGarde",1]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"Les enfants nés sous la montagne ont la peau pâle et les yeux grands ; ils ont peur du vent.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON059-plus-5","zone":"DON059","pole":"+","palier":5,"nom":"La Coulée qui monte","cout":2,"cible":1,
 "effet":"Riposte 7 jusqu'à votre prochain tour ; la cible brûle : 4 par tour pendant 3 tours ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["riposte",7],["brulure","cible",4,3],["garde","heros",8],["prixPV",2]],
 "tags":["Donjon","Feu","Pôle +","Riposte","Brûlure","Garde","Prix"],
 "ambiance":"La lave monte dans les galeries hautes chaque printemps, et chasse les familles vers le fond.",
 "budget":"30,4 / 32 (−5 %), recalculé par le critique"},
{"id":"DON059-plus-6","zone":"DON059","pole":"+","palier":6,"nom":"La Montagne fendue","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Puis riposte 8 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["riposte",8],["vulnerable","cible",2],["affaiblit","cible",2],["ennemiGarde",2]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Marque","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Une fente s'ouvre du sommet à la mer ; par elle, le froid d'en haut descend jusqu'aux dormeurs.",
 "budget":"33 / 36 (−8 %)"},
{"id":"DON059-plus7","zone":"DON059","pole":"+","palier":7,"nom":"L'Aurore du dessous","cout":2,"cible":0,
 "effet":"L'aurore monte de la lave. Riposte 6 ; 8 à tous ; soin du héros 12 ; chaque ennemi −1 d'attaque. Pose Braise. Si Abîme (consommée) : riposte 2 ; soin du héros 10 ; 6 à tous. Prix : héros −3 PV.",
 "ops":[["riposte",6],["deg","tous",8],["soin","heros",12],["affaiblit","tous",1],["pose","Braise"],["reveil","Abîme",true,[["riposte",2],["soin","heros",10],["deg","tous",6]]],["prixPV",3]],
 "tags":["Donjon","Feu","Forme ultime +7","Dégâts","Affaiblissement","Riposte","Soin","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"La montagne fendue laisse entrer le ciel d'hiver ; ses lueurs vertes se mêlent à la lave.",
 "budget":"45,2 sans combo ; réveil +27,2 (60 %)"}
]
```

---

## 3. Les Conjecteurs de Summa Glacies (ASS116) — Assemblée · Glacier · Glace · Romaine

Forme du récit : **document, le décret** des décurions de la station du col, et ce qu'il advint du conjecteur. Recette du −7 : la ruine (la station ensevelie, les soldats pris dans la glace) ; du +7 : l'ordre (les songes rangés sur des tablettes, dans des niches taillées dans le glacier).

**Cauchemar (−)** : le soldat qui crie → la garde de nuit → les hommes dans la glace → le décurion → la tablette scellée → la panique de la porte → la Station ensevelie. Fil mécanique : mana de Glace, jamais plus de 2 par carte (la peur qui fait courir), Lois, hésitation et pioche en touche, crochet « vous avez déjà joué une autre carte ce tour » ; prix : PV et défausse. Autre famille que C ASS146 (garde des alliés), autre crochet (C : `vulnerable`). Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, dégâts ciblés 4, dégâts à tous 3, marque 2, pioche 2, hésitation 2, affaiblissement 2, garde du héros 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 3 ; prix sur 7 cartes (PV 4, défausse 3).

**Rêve (+)** : le songe acheté → le conjecteur Herennius → la niche de glace → le songe de la mule → la tablette vendue → l'archive du col → les Songes rangés. Fil mécanique : **coups au hasard**, place rare, Lois (le rêve frappe où il veut, et le conjecteur le revend), pioche en touche, crochet « une carte a déjà été défaussée en prix ce tour », sans plus de 2 défausses en prix ; prix : PV et défausse. L'exil, d'abord prévu, était déjà la famille du Rêve en ASS057 (lot 5) : je l'ai porté sur l'Éveil (ANT141). Autre famille que C ASS146 (colonne d'hésitation), autre crochet (C : `hesite`). Comptes au script (cartes sur 7, `si` et réveil compris) : coups au hasard 7, dégâts ciblés 4, pioche 3, garde du héros 2, soin du héros 2, affaiblissement 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 3 ; prix sur 6 cartes (PV 4, défausse 2).

```json
{"fiche":"ASS116","nom":"Les Conjecteurs de Summa Glacies",
 "recit":"Décret des décurions de Summa Glacies, affiché à la porte du relais. Les soldats de la garde du col ne raconteront plus leurs rêves au réfectoire, ni aux muletiers, ni entre eux. Les hommes vus dans la glace ne seront pas nommés. Tout rêve sera dit au conjecteur Herennius, qui l'achètera au prix fixé, l'écrira sur une tablette et la scellera. Le conjecteur vécut longtemps et mourut riche. On ouvrit enfin ses tablettes : il n'y avait écrit que des comptes. Ses tablettes ont servi à rallumer le poêle.",
 "pal":["La station du col est ensevelie sous la glace bleue ; des soldats y sont pris debout, la bouche ouverte, et le vent siffle dans les toits crevés.","Des visages affleurent dans le glacier sous les murs du relais ; la garde de nuit ajoute des feux et ne regarde plus vers le bas.","Un relais de pierre au sommet du col, une porte cloutée, un réfectoire enfumé ; des mules sur le glacier et un décret cloué au chambranle.","Le conjecteur tient boutique près de l'âtre ; des soldats font la queue pour vendre leurs songes, et des tablettes scellées s'empilent derrière lui.","Des niches taillées dans le glacier, alignées jusqu'au sommet, une tablette scellée dans chacune ; plus personne ne rêve à voix haute au col."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ASS116-moins-1","zone":"ASS116","pole":"-","palier":1,"nom":"Le Soldat qui crie","cout":1,"cible":1,
 "effet":"Loi : +2 mana de Glace ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 1 PV.",
 "ops":[["mana","Glace",2],["vulnerable","cible",2],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Marque","Mana","Prix"],
 "ambiance":"Un soldat de la garde crie dans son sommeil ; toute la chambrée se lève et prend ses armes.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS116-moins-2","zone":"ASS116","pole":"-","palier":2,"nom":"La Garde de nuit","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 10 dégâts à la cible. Puis +2 mana de Glace ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["mana","Glace",2],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"On ajoute des feux sur le chemin de ronde, et personne ne regarde plus le glacier en bas.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS116-moins-3","zone":"ASS116","pole":"-","palier":3,"nom":"Les Hommes dans la glace","cout":2,"cible":1,
 "effet":"+2 mana de Glace ; 6 dégâts à tous les ennemis ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["mana","Glace",2],["deg","tous",6],["hesite","cible"],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Contrôle","Mana","Prix"],
 "ambiance":"Sous le relais, le glacier montre des visages ; les muletiers jurent qu'ils n'y étaient pas hier.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ASS116-moins-4","zone":"ASS116","pole":"-","palier":4,"nom":"Le Décurion","cout":2,"cible":1,
 "effet":"Loi : si vous avez déjà joué une autre carte ce tour, 16 dégâts à la cible. Puis +2 mana de Glace ; le héros gagne 12 de garde ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cartesJouees",[["deg","cible",16]]],["mana","Glace",2],["garde","heros",12],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Affaiblissement","Garde","Mana","Condition","Prix"],
 "ambiance":"Le décurion fait clouer le décret à la porte, puis rentre dormir avec une lampe allumée.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"ASS116-moins-5","zone":"ASS116","pole":"-","palier":5,"nom":"La Tablette scellée","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; +2 mana de Glace ; piochez 2 cartes. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",18],["mana","Glace",2],["pioche",2],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Pioche","Mana","Prix"],
 "ambiance":"Le rêve écrit est scellé à la cire rouge, et la cire porte le sceau du conjecteur, pas du soldat.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS116-moins-6","zone":"ASS116","pole":"-","palier":6,"nom":"La Panique de la porte","cout":2,"cible":1,
 "effet":"Loi : si vous avez déjà joué une autre carte ce tour, 20 dégâts à la cible. Puis +2 mana de Glace ; 6 dégâts à tous les ennemis ; le héros gagne 10 de garde. Prix : le héros perd 3 PV.",
 "ops":[["si","cartesJouees",[["deg","cible",20]]],["mana","Glace",2],["deg","tous",6],["garde","heros",10],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Garde","Mana","Condition","Prix"],
 "ambiance":"Une nuit, toute la garde court vers la porte en même temps, chacun fuyant le rêve d'un autre.",
 "budget":"34,2 / 36 (−5 %)"},
{"id":"ASS116-moins7","zone":"ASS116","pole":"-","palier":7,"nom":"La Station ensevelie","cout":2,"cible":1,
 "effet":"Le col rêve à leur place. +2 mana de Glace ; 8 à tous ; tous hésitent ; la cible −4 d'attaque ; la cible marquée (+2). Pose Givre. Si Sceau (consommée) : soin du héros 17 ; chaque ennemi −1 d'attaque ; la cible marquée (+2). Prix : défaussez 1 carte.",
 "ops":[["mana","Glace",2],["deg","tous",8],["hesite","tous"],["affaiblit","cible",4],["vulnerable","cible",2],["pose","Givre"],["reveil","Sceau",true,[["soin","heros",17],["affaiblit","tous",1],["vulnerable","cible",2]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Marque","Affaiblissement","Contrôle","Soin","Mana","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"La station est ensevelie sous la glace bleue ; des soldats y sont pris debout, la bouche ouverte.",
 "budget":"47,6 sans combo ; réveil +29,6 (62 %)"},
{"id":"ASS116-plus-1","zone":"ASS116","pole":"+","palier":1,"nom":"Le Songe acheté","cout":1,"cible":0,
 "effet":"Loi : 2 coups de 3 au hasard ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["deg","hasard",3,2],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Pioche","Prix"],
 "ambiance":"Herennius paie le songe en pain, puis en vin, puis en monnaie, selon qu'il est bon ou mauvais.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS116-plus-2","zone":"ASS116","pole":"+","palier":2,"nom":"Le Conjecteur Herennius","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 8 dégâts à la cible. Puis 2 coups de 3 au hasard ; le héros gagne 4 de garde.",
 "ops":[["si","defausseAPrix",[["deg","cible",8]]],["deg","hasard",3,2],["garde","heros",4]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Garde","Condition"],
 "ambiance":"Le conjecteur écoute les yeux fermés, hoche la tête et écrit beaucoup plus que ce qu'on lui a dit.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"ASS116-plus-3","zone":"ASS116","pole":"+","palier":3,"nom":"La Niche de glace","cout":2,"cible":0,
 "effet":"3 coups de 4 au hasard ; le héros se soigne de 8 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["deg","hasard",4,3],["soin","heros",8],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Soin","Pioche","Prix"],
 "ambiance":"On taille une niche dans le glacier pour chaque tablette ; le froid garde la cire mieux qu'un coffre.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS116-plus-4","zone":"ASS116","pole":"+","palier":4,"nom":"Le Songe de la mule","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, 16 dégâts à la cible. Puis 3 coups de 4 au hasard ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",16]]],["deg","hasard",4,3],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Un muletier a rêvé que sa mule parlait ; Herennius l'a payé très cher, et n'a pas dit pourquoi.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ASS116-plus-5","zone":"ASS116","pole":"+","palier":5,"nom":"La Tablette vendue","cout":2,"cible":0,
 "effet":"3 coups de 6 au hasard ; le héros gagne 10 de garde ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","hasard",6,3],["garde","heros",10],["soin","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Certaines tablettes partent vers la ville dans les bâts des mules ; on ne sait pas à qui.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS116-plus-6","zone":"ASS116","pole":"+","palier":6,"nom":"L'Archive du col","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, 18 dégâts à la cible. Puis 3 coups de 6 au hasard ; piochez 1 carte ; l'attaque de chaque ennemi baisse de 1. Prix : le héros perd 3 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",18]]],["deg","hasard",6,3],["pioche",1],["affaiblit","tous",1],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Affaiblissement","Pioche","Condition","Prix"],
 "ambiance":"Les niches montent jusqu'au sommet du glacier ; le conjecteur y monte seul, avec une lampe et un ciseau.",
 "budget":"34,6 / 36 (−4 %)"},
{"id":"ASS116-plus7","zone":"ASS116","pole":"+","palier":7,"nom":"Les Songes rangés","cout":2,"cible":1,
 "effet":"Le rêve frappe où il veut. 4 coups de 7 au hasard ; tous hésitent ; la cible marquée (+3) ; reprenez la dernière carte défaussée. Pose Sceau. Si Givre (consommée) : 16 à la cible ; tous marqués (+2). Prix : défaussez 1 carte.",
 "ops":[["deg","hasard",7,4],["hesite","tous"],["vulnerable","cible",3],["recup"],["pose","Sceau"],["reveil","Givre",true,[["deg","cible",16],["vulnerable","tous",2]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Marque","Contrôle","Récupération","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Des niches de glace alignées jusqu'au sommet, une tablette scellée dans chacune ; personne ne rêve plus à voix haute.",
 "budget":"47 sans combo ; réveil +29,2 (62 %)"}
]
```

---

## 4. Le Hērbedestān de Tang-e Āzar (ASS039) — Assemblée · Canyon · Feu · Perse

Forme du récit : **document, le procès-verbal d'enquête** de l'inspecteur du roi. Recette du −7 : la foule (marchands de bois, porteurs, fidèles, fumée grasse) ; du +7 : le vide (une flamme blanche au fond d'un canyon où plus personne ne monte).

**Corruption (−)** : le bois moins cher → le charnier d'en bas → le marchand de bois → la pièce dans la manche → le registre arrangé → la fumée grasse → le Feu bien nourri. Fil mécanique : pioche, Lois (on sait tout, on se tient tous), premier emploi de la pioche sur ce mot ; garde du héros et affaiblissement en touche ; crochet « le héros a moins de la moitié de ses PV », sans PV en prix ; prix : soin ennemi et défausse. Autre famille que C ANT090 (marque), autre crochet (C : `hesite`). Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, garde du héros 4, dégâts ciblés 4, affaiblissement 3, soin du héros 2, marque 2, récupération 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (soin ennemi 4, défausse 3).

**Pureté (+)** : l'autel lavé → le bois de grenadier → l'inspecteur Ardashir → les mains des hērbeds → la flamme qui fume → le sentier désert → la Flamme seule. Fil mécanique : soin des alliés, Lois (le temple soigne ceux qui restent), garde des alliés et brûlure en touche, crochet « la cible brûle déjà » ; prix : exil et PV. Autre famille que C ANT090 (invocations), autre crochet (C : `garde`). Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, exil 4, dégâts ciblés 3, garde des alliés 2, brûlure 2, pioche 2, affaiblissement 2, marque 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (exil 4, PV 4).

```json
{"fiche":"ASS039","nom":"Le Hērbedestān de Tang-e Āzar",
 "recit":"Procès-verbal de l'inspecteur Ardashir, envoyé par le roi au hērbedestān de Tang-e Āzar. Le feu sacré du canyon brûle sans interruption, comme il est dit. Le bois qui le nourrit vient du charnier d'en bas, où les vautours ont nettoyé les os : les hērbeds le paient moins cher. J'ai fait éteindre le feu, laver l'autel et rallumer la flamme avec du bois de grenadier monté de la plaine. Elle fume beaucoup. Les fidèles montent moins. Le feu est pur ; l'inspecteur recommande qu'on le rapproche de la route.",
 "pal":["Le canyon grouille de marchands de bois, de porteurs de civières et de fidèles ; la fumée grasse du feu sacré monte entre les parois noircies.","Des tas de bois gris au pied de la tour du silence ; les hērbeds comptent des pièces sous l'auvent, et les vautours tournent au-dessus de l'autel.","Un temple du feu taillé dans la paroi rouge du canyon, une flamme qui ne s'éteint jamais, et un sentier de pèlerins qui descend vers la plaine.","On monte du bois de grenadier à dos d'âne ; l'autel est lavé, les mains des prêtres aussi, et la flamme fume blanc dans l'air sec du canyon.","Une flamme blanche au fond du canyon vide ; pas un fidèle, pas une odeur, pas un vautour, et le vent qui ne porte plus rien jusqu'à la plaine."],
 "pm":"Corruption","pp":"Pureté"}
```

```json
[
{"id":"ASS039-moins-1","zone":"ASS039","pole":"-","palier":1,"nom":"La Loi du bois moins cher","cout":1,"cible":1,
 "effet":"Loi : piochez 1 carte ; l'attaque de la cible baisse de 1 ; le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",1],["affaiblit","cible",1],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Affaiblissement","Garde","Pioche","Prix"],
 "ambiance":"Le bois du charnier brûle aussi bien que l'autre, disent les hērbeds, et il coûte bien moins cher.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS039-moins-2","zone":"ASS039","pole":"-","palier":2,"nom":"Le Charnier d'en bas","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 6. Puis 8 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","heros",6]]],["deg","cible",8],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Au pied de la tour du silence, les porteurs ramassent ce que les vautours ont laissé sécher.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS039-moins-3","zone":"ASS039","pole":"-","palier":3,"nom":"Le Marchand de bois","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; piochez 2 cartes ; l'attaque de chaque ennemi baisse de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",10],["pioche",2],["affaiblit","tous",1],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Pioche","Prix"],
 "ambiance":"Le marchand de bois monte chaque semaine avec ses ânes, et redescend avec les offrandes de la semaine.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"ASS039-moins-4","zone":"ASS039","pole":"-","palier":4,"nom":"La Loi de la manche","cout":2,"cible":1,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, le héros se soigne de 12. Puis piochez 2 cartes ; le héros gagne 10 de garde ; l'attaque de la cible baisse de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["soin","heros",12]]],["pioche",2],["garde","heros",10],["affaiblit","cible",2],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Affaiblissement","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Une pièce dans la manche du hērbed, et le nom du défunt est lu plus près de la flamme.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS039-moins-5","zone":"ASS039","pole":"-","palier":5,"nom":"Le Registre arrangé","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; piochez 1 carte ; la cible est marquée : +2 par coup reçu ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",18],["pioche",1],["vulnerable","cible",2],["recup"],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Marque","Pioche","Récupération","Prix"],
 "ambiance":"Le registre du temple compte autant de bûches de grenadier qu'il en faut ; les ânes en portent d'autres.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS039-moins-6","zone":"ASS039","pole":"-","palier":6,"nom":"La Loi de la fumée","cout":2,"cible":0,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, riposte 4 jusqu'à votre prochain tour. Puis piochez 2 cartes ; 6 dégâts à tous les ennemis ; le héros gagne 12 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["riposte",4]]],["pioche",2],["deg","tous",6],["garde","heros",12],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Riposte","Garde","Pioche","Condition","Prix"],
 "ambiance":"La fumée grasse colle aux parois du canyon ; les fidèles disent que la prière monte plus lourde.",
 "budget":"32,8 / 36 (−9 %)"},
{"id":"ASS039-moins7","zone":"ASS039","pole":"-","palier":7,"nom":"Le Feu bien nourri","cout":2,"cible":1,
 "effet":"Le feu sacré a des créanciers. 18 à la cible ; piochez 2 ; héros +16 de garde ; reprenez la dernière carte défaussée ; la cible marquée (+2). Pose Sang. Si Braise (consommée) : 20 à la cible ; la cible marquée (+3). Prix : défaussez 1 carte.",
 "ops":[["deg","cible",18],["pioche",2],["garde","heros",16],["recup"],["vulnerable","cible",2],["pose","Sang"],["reveil","Braise",true,[["deg","cible",20],["vulnerable","cible",3]]],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Marque","Garde","Pioche","Récupération","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Le canyon grouille de marchands, de porteurs et de fidèles ; la flamme n'a jamais été si haute.",
 "budget":"45,8 sans combo ; réveil +29 (63 %)"},
{"id":"ASS039-plus-1","zone":"ASS039","pole":"+","palier":1,"nom":"La Loi de l'autel lavé","cout":1,"cible":0,
 "effet":"Loi : vos alliés se soignent de 6 ; vos alliés gagnent 3 de garde. Prix : cette carte s'exile.",
 "ops":[["soin","allies",6],["garde","allies",3],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Garde","Soin","Exil","Prix"],
 "ambiance":"On lave l'autel à l'eau de source, puis l'eau, puis les mains qui l'ont portée.",
 "budget":"9,6 / 10 (−4 %)"},
{"id":"ASS039-plus-2","zone":"ASS039","pole":"+","palier":2,"nom":"Le Bois de grenadier","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; la cible brûle : 2 par tour pendant 2 tours. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["soin","allies",4],["brulure","cible",2,2],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Brûlure","Soin","Condition","Prix"],
 "ambiance":"Le grenadier brûle clair et sent bon ; il vient de la plaine, à dos d'âne, et coûte très cher.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ASS039-plus-3","zone":"ASS039","pole":"+","palier":3,"nom":"L'Inspecteur Ardashir","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 10 ; vos alliés gagnent 6 de garde ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["soin","allies",10],["garde","allies",6],["pioche",1],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Garde","Soin","Pioche","Exil","Prix"],
 "ambiance":"Ardashir a fait éteindre le feu qui n'avait pas été éteint depuis le grand-père du roi.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS039-plus-4","zone":"ASS039","pole":"+","palier":4,"nom":"La Loi des mains","cout":2,"cible":1,
 "effet":"Loi : si la cible brûle déjà, 16 dégâts à la cible. Puis vos alliés se soignent de 12 ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",16]]],["soin","allies",12],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Les hērbeds montrent leurs mains à l'inspecteur, paumes ouvertes ; elles sentent le grenadier, et rien d'autre.",
 "budget":"30 / 28 (+7 %)"},
{"id":"ASS039-plus-5","zone":"ASS039","pole":"+","palier":5,"nom":"La Flamme qui fume","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 14 ; tous les ennemis brûlent : 2 par tour pendant 2 tours ; la cible est marquée : +2 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["soin","allies",14],["brulure","tous",2,2],["vulnerable","cible",2],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Brûlure","Marque","Soin","Exil","Prix"],
 "ambiance":"La flamme pure fume blanc et pique les yeux ; on prie en toussant, puis on prie moins longtemps.",
 "budget":"32,8 / 32 (+2 %)"},
{"id":"ASS039-plus-6","zone":"ASS039","pole":"+","palier":6,"nom":"La Loi du sentier","cout":2,"cible":1,
 "effet":"Loi : si la cible brûle déjà, 18 dégâts à la cible. Puis vos alliés se soignent de 14 ; l'attaque de chaque ennemi baisse de 1. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",18]]],["soin","allies",14],["affaiblit","tous",1],["prixPV",3]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Le sentier des pèlerins se couvre de cailloux tombés des parois, que personne ne vient plus balayer.",
 "budget":"33,6 / 36 (−7 %)"},
{"id":"ASS039-plus7","zone":"ASS039","pole":"+","palier":7,"nom":"La Flamme seule","cout":2,"cible":1,
 "effet":"La flamme brûle pour personne. Alliés soignés de 18 ; 6 à tous ; piochez 1 ; la cible marquée (+2). Pose Braise. Si Racine (consommée) : alliés soignés de 10 ; 6 à tous. Prix : cette carte s'exile ; héros −2 PV.",
 "ops":[["soin","allies",18],["deg","tous",6],["pioche",1],["vulnerable","cible",2],["pose","Braise"],["reveil","Racine",true,[["soin","allies",10],["deg","tous",6]]],["exil"],["prixPV",2]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Marque","Soin","Pioche","Exil","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Une flamme blanche au fond du canyon vide, et le vent qui ne porte plus rien jusqu'à la plaine.",
 "budget":"45,2 sans combo ; réveil +28,2 (62 %)"}
]
```

---

## 5. Le Mir de Bezgvozdye (ASS075) — Assemblée · Forêt boréale · Glace · Slave

Forme du récit : le concours (le forgeron et le charpentier devant le mir), et ce que coûte le gagnant. Recette du −7 : l'ordre (des palissades de fer, des clous en rangs, une forge qui ne s'arrête plus) ; du +7 : la démesure (les bulbes de bois montent au-dessus de la taïga).

**Fer (−)** : le clou offert → la forge d'Ostap → le soc et la hache → la limaille dans la neige → le forgeron qui part → la rouille sur l'enclume → la Forge sans feu. Fil mécanique : **colonne PV et « le héros a moins de la moitié de ses PV »** (le fer se paie au sang de celui qui le bat), perce-garde et dégâts ciblés en touche ; prix : PV et garde ennemie. Autre image que B ASS004 (aucune eau, aucun port). Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 4, perce-garde 4, riposte 4, affaiblissement 2, soin du héros 2, pioche 2, garde du héros 2, dégâts à tous 2, marque 2 ; crochet « le héros a moins de la moitié de ses PV » sur 4 ; prix sur 7 cartes (PV 4, garde ennemie 3).

**Bois (+)** : le pin choisi → le charpentier Nestor → l'assemblage à queue d'aronde → l'église sans clous → les bulbes de tremble → la hache ébréchée → la Taïga des bulbes. Fil mécanique : marque (le bois choisi, marqué à la hache), Lois, garde des alliés et soin des alliés en touche, crochet « une carte a déjà été défaussée en prix ce tour », sans défausse en prix ; prix : soin ennemi et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, garde des alliés 4, dégâts ciblés 4, soin des alliés 2, pioche 2, hésitation 2, riposte 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 3 ; prix sur 7 cartes (soin ennemi 4, PV 3).

```json
{"fiche":"ASS075","nom":"Le Mir de Bezgvozdye",
 "recit":"Quand le mir de Bezgvozdye décida de bâtir une église, le forgeron Ostap offrit les clous et le charpentier Nestor offrit de s'en passer. On vota pour le bois, qui ne rouille pas. Nestor bâtit l'église sans un clou, à la hache seule, avec des bulbes de tremble qui brillent comme de l'argent sous la neige. Ostap, vexé, partit pour la ville avec son enclume. Les marchands viennent de loin voir l'église. Les haches s'ébrèchent sur les rondins de pin. On fait réparer les haches au village voisin, qui prend cher.",
 "pal":["Des palissades de fer autour de chaque isba, des clous plantés en rangs dans la neige, et une forge qui tape nuit et jour sans un mot de personne.","La limaille noircit la neige devant la forge ; on cloue les portes, les traîneaux, les ruches, et les pins autour ont des cercles de fer.","Un village d'isbas dans la taïga gelée, une forge fumante au bout du chemin, des rondins de pin empilés et une place où le mir se réunit.","Les rondins s'emboîtent sans un clou ; les copeaux de tremble couvrent la place, et les haches chantent sous les ordres d'un charpentier.","Des bulbes de tremble montent au-dessus de la taïga, l'un sur l'autre, plus haut que les pins ; les haches ébréchées pendent aux murs."],
 "pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"ASS075-moins-1","zone":"ASS075","pole":"-","palier":1,"nom":"Le Clou offert","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 8 dégâts à la cible. Puis la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["si","blesse",[["deg","cible",8]]],["briseGarde","cible"],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Affaiblissement","Perce-garde","Condition","Prix"],
 "ambiance":"Ostap pose un clou forgé sur la table du mir, encore chaud, et ne dit rien de plus.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS075-moins-2","zone":"ASS075","pole":"-","palier":2,"nom":"La Forge d'Ostap","cout":1,"cible":0,
 "effet":"Riposte 3 jusqu'à votre prochain tour ; piochez 1 carte ; le héros se soigne de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",3],["pioche",1],["soin","heros",4],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Riposte","Soin","Pioche","Prix"],
 "ambiance":"La forge fume au bout du chemin ; on y entend battre le fer dès que la neige blanchit.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS075-moins-3","zone":"ASS075","pole":"-","palier":3,"nom":"Le Soc et la hache","cout":2,"cible":1,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, 14 dégâts à la cible. Puis le héros gagne 12 de garde ; l'attaque de la cible baisse de 2 ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",14]]],["garde","heros",12],["affaiblit","cible",2],["riposte",2],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"Tout ce qui coupe, au village, est passé par l'enclume d'Ostap, et il le rappelle à chaque assemblée.",
 "budget":"24,6 / 24 (+3 %)"},
{"id":"ASS075-moins-4","zone":"ASS075","pole":"-","palier":4,"nom":"La Limaille dans la neige","cout":2,"cible":0,
 "effet":"Toute garde ennemie tombe à 0 ; 6 dégâts à tous les ennemis ; le héros se soigne de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["briseGarde","tous"],["deg","tous",6],["soin","heros",6],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Perce-garde","Soin","Prix"],
 "ambiance":"La neige est noire de limaille autour de la forge ; les enfants y trouvent des clous tordus.",
 "budget":"23,8 / 28 (−15 %)"},
{"id":"ASS075-moins-5","zone":"ASS075","pole":"-","palier":5,"nom":"Le Forgeron qui part","cout":2,"cible":1,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, 18 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; reprenez en main la dernière carte de votre défausse ; +2 mana de Glace ; la cible hésite. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",18]]],["vulnerable","cible",3],["recup"],["mana","Glace",2],["hesite","cible"],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Contrôle","Récupération","Mana","Condition","Prix"],
 "ambiance":"Ostap charge son enclume sur un traîneau et part pour la ville ; il ne salue pas le charpentier.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS075-moins-6","zone":"ASS075","pole":"-","palier":6,"nom":"La Rouille sur l'enclume","cout":2,"cible":0,
 "effet":"Ces coups ignorent la garde ; 8 dégâts à tous les ennemis ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 10 de garde. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["ignoreGarde"],["deg","tous",8],["riposte",4],["garde","heros",10],["ennemiGarde",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Perce-garde","Riposte","Garde","Prix"],
 "ambiance":"L'enclume qu'il n'a pas emportée rouille sous la neige, et personne ne sait plus la faire chanter.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ASS075-moins7","zone":"ASS075","pole":"-","palier":7,"nom":"La Forge sans feu","cout":2,"cible":1,
 "effet":"Le fer saigne qui le bat. Si le héros est sous la moitié de ses PV, tous marqués (+1). 33 à la cible ; garde de la cible à 0 ; la cible marquée (+2) ; piochez 1. Pose Sang. Si Sceau (consommée) : 20 à la cible ; riposte 5. Prix : héros −4 PV.",
 "ops":[["si","blesse",[["vulnerable","tous",1]]],["deg","cible",33],["briseGarde","cible"],["vulnerable","cible",2],["pioche",1],["pose","Sang"],["reveil","Sceau",true,[["deg","cible",20],["riposte",5]]],["prixPV",4]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Marque","Perce-garde","Riposte","Pioche","Condition","Combo","Pose Sang","Réveil Sceau","Prix"],
 "ambiance":"Des palissades de fer autour de chaque isba, et une forge qui tape nuit et jour sans un mot.",
 "budget":"45,3 sans combo ; réveil +30 (66 %)"},
{"id":"ASS075-plus-1","zone":"ASS075","pole":"+","palier":1,"nom":"Le Pin choisi","cout":1,"cible":1,
 "effet":"Loi : la cible est marquée : +2 par coup reçu ; vos alliés gagnent 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["vulnerable","cible",2],["garde","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Marque","Garde","Prix"],
 "ambiance":"Nestor choisit ses pins sur pied, l'hiver, et les marque d'une encoche que lui seul sait lire.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ASS075-plus-2","zone":"ASS075","pole":"+","palier":2,"nom":"Le Charpentier Nestor","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 8 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; vos alliés se soignent de 3. Prix : le héros perd 1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",8]]],["vulnerable","cible",2],["soin","allies",3],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Marque","Soin","Condition","Prix"],
 "ambiance":"Nestor travaille sans règle ni fil à plomb, l'œil fermé, et il ne se trompe jamais devant le mir.",
 "budget":"13,5 / 12,5 (+8 %)"},
{"id":"ASS075-plus-3","zone":"ASS075","pole":"+","palier":3,"nom":"La Queue d'aronde","cout":2,"cible":1,
 "effet":"Loi : la cible est marquée : +3 par coup reçu ; vos alliés gagnent 10 de garde ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["vulnerable","cible",3],["garde","allies",10],["pioche",1],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Marque","Garde","Pioche","Prix"],
 "ambiance":"Les rondins s'emboîtent l'un dans l'autre par une entaille en queue d'aronde, sans clou ni cheville.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS075-plus-4","zone":"ASS075","pole":"+","palier":4,"nom":"L'Église sans clous","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 16 dégâts à la cible. Puis tous les ennemis sont marqués : +1 par coup reçu ; vos alliés se soignent de 8. Prix : le héros perd 2 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",16]]],["vulnerable","tous",1],["soin","allies",8],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Marque","Soin","Condition","Prix"],
 "ambiance":"L'église tient debout par son seul poids, et le mir l'a déclarée plus solide que la forge.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ASS075-plus-5","zone":"ASS075","pole":"+","palier":5,"nom":"Les Bulbes de tremble","cout":2,"cible":1,
 "effet":"Loi : la cible est marquée : +3 par coup reçu ; vos alliés gagnent 14 de garde ; 4 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["vulnerable","cible",3],["garde","allies",14],["deg","tous",4],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Marque","Garde","Prix"],
 "ambiance":"Les bardeaux de tremble des bulbes brillent comme de l'argent sous la neige ; ils grisent en un été.",
 "budget":"32,6 / 32 (+2 %)"},
{"id":"ASS075-plus-6","zone":"ASS075","pole":"+","palier":6,"nom":"La Hache ébréchée","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 18 dégâts à la cible. Puis la cible est marquée : +4 par coup reçu ; la cible hésite ; piochez 1 carte ; riposte 4 jusqu'à votre prochain tour. Prix : le héros perd 3 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",18]]],["vulnerable","cible",4],["hesite","cible"],["pioche",1],["riposte",4],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Marque","Contrôle","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Les haches s'ébrèchent sur le pin gelé ; on les porte au village voisin, qui les rend tard.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ASS075-plus7","zone":"ASS075","pole":"+","palier":7,"nom":"La Taïga des bulbes","cout":2,"cible":1,
 "effet":"Le bois monte sans un clou. 14 à la cible ; tous marqués (+2) ; alliés +14 de garde ; la cible hésite. Pose Racine. Si Givre (consommée) : la cible marquée (+3) ; 12 à la cible ; riposte 4. Prix : ennemis soignés de 1.",
 "ops":[["deg","cible",14],["vulnerable","tous",2],["garde","allies",14],["hesite","cible"],["pose","Racine"],["reveil","Givre",true,[["vulnerable","cible",3],["deg","cible",12],["riposte",4]]],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Marque","Contrôle","Riposte","Garde","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"Des bulbes de tremble montent au-dessus de la taïga, plus haut que les pins, et pas un clou dedans.",
 "budget":"47 sans combo ; réveil +29 (62 %)"}
]
```

---


> **Note du critique (lot 10)** : le récit disait deux fois sa chute (« les filles d'en haut n'épousent toujours pas… », puis « ne se marient toujours pas entre eux… ») : une seule phrase reste.

## 6. L'Umkhandlu d'eKhoweni (ASS132) — Assemblée · Forêt de champignons géants · Sève · Zouloue

Forme du récit : l'amnistie (l'umkhandlu décrète l'oubli d'une guerre), et ce qui reste quand on a oublié. Recette du −7 : le vide (une clairière muette sous les chapeaux, plus un chant, plus un nom) ; du +7 : la foule (tous les ancêtres nommés à voix haute par la forêt entière).

**Oubli (−)** : les vers retirés → l'imbongi Sibusiso → la spore qui endort → le kraal d'en haut → le gué sans nom → la clairière muette → la Paix sans mémoire. Fil mécanique : garde du héros, Lois (on ne se bat plus pour ce qu'on ne sait plus), exil et pioche en touche, crochet « la cible est déjà marquée » ; prix : défausse et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, dégâts ciblés 4, pioche 3, exil 3, soin du héros 2, marque 2, affaiblissement 2, récupération 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (défausse 4, exil 3).

**Mémoire (+)** : l'éloge du roi → les noms des ancêtres → le kraal d'en bas → la vieille qui se souvient → la querelle qui revient → les chapeaux qui chantent → la Forêt des noms. Fil mécanique : affaiblissement, Lois (le passé qui pèse sur les bras), hésitation et pioche en touche, crochet « la cible hésite déjà » ; prix : PV et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, garde des alliés 4, dégâts ciblés 4, soin du héros 2, pioche 2, hésitation 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (PV 4, garde ennemie 3).

```json
{"fiche":"ASS132","nom":"L'Umkhandlu d'eKhoweni",
 "recit":"Après la guerre entre le kraal d'en haut et le kraal d'en bas, l'umkhandlu d'eKhoweni décida qu'on l'oublierait. L'imbongi Sibusiso retira de ses éloges tous les vers qui en parlaient. On brûla les boucliers, on rebaptisa le gué. Les enfants grandirent sous les grands champignons sans rien savoir. Une génération plus tard, les gens d'en haut et ceux d'en bas ne se marient toujours pas entre eux, et personne ne se rappelle pourquoi.",
 "pal":["Une clairière muette sous les chapeaux géants ; plus un chant, plus un nom, et des enfants qui jouent sans savoir à quoi ils jouent.","Une pluie de spores pâles tombe des lamelles ; les vieux s'endorment au soleil, et l'on a rebaptisé le gué d'un nom qui ne dit rien.","Des kraals ronds sous des champignons hauts comme des arbres, un gué entre eux, et une place où l'umkhandlu s'assied sur des peaux.","Les anciens récitent les lignées à l'ombre des pieds de champignon ; une vieille corrige l'imbongi, et tout le monde se tait pour l'écouter.","Toute la forêt nomme les ancêtres à voix haute ; les chapeaux résonnent de lignées sans fin, et chaque enfant sait qui a tué qui."],
 "pm":"Oubli","pp":"Mémoire"}
```

```json
[
{"id":"ASS132-moins-1","zone":"ASS132","pole":"-","palier":1,"nom":"La Loi des vers retirés","cout":1,"cible":0,
 "effet":"Loi : le héros gagne 12 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",12],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Garde","Pioche","Prix"],
 "ambiance":"Sibusiso a retiré de l'éloge les vers de la guerre ; le chant est plus court, et plus beau.",
 "budget":"10,6 / 10 (+6 %)"},
{"id":"ASS132-moins-2","zone":"ASS132","pole":"-","palier":2,"nom":"L'Imbongi Sibusiso","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis le héros gagne 8 de garde ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["garde","heros",8],["exil"],["soin","heros",4]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"L'imbongi chante devant le roi en sautant sur place ; il sait ce qu'il a retiré, et se tait.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ASS132-moins-3","zone":"ASS132","pole":"-","palier":3,"nom":"La Spore qui endort","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 20 de garde ; la cible est marquée : +2 par coup reçu ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",20],["vulnerable","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Marque","Garde","Pioche","Prix"],
 "ambiance":"Les spores pâles tombent des lamelles au crépuscule ; ceux qui les respirent dorment sans rêver.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS132-moins-4","zone":"ASS132","pole":"-","palier":4,"nom":"Le Kraal d'en haut","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Puis le héros gagne 16 de garde ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["garde","heros",16],["affaiblit","cible",2],["exil"]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Affaiblissement","Garde","Condition","Exil","Prix"],
 "ambiance":"En haut, on dit les gens d'en bas trop fiers ; personne ne sait plus d'où vient le mot.",
 "budget":"23,8 / 28 (−15 %)"},
{"id":"ASS132-moins-5","zone":"ASS132","pole":"-","palier":5,"nom":"Le Gué sans nom","cout":2,"cible":1,
 "effet":"Loi : le héros gagne 22 de garde ; la cible est marquée : +2 par coup reçu ; le héros se soigne de 6 ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",22],["vulnerable","cible",2],["soin","heros",6],["recup"],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Marque","Garde","Soin","Récupération","Prix"],
 "ambiance":"On a rebaptisé le gué où l'on s'était battu ; son nouveau nom ne veut rien dire, exprès.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ASS132-moins-6","zone":"ASS132","pole":"-","palier":6,"nom":"La Clairière muette","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Puis le héros gagne 20 de garde ; l'attaque de chaque ennemi baisse de 1 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["garde","heros",20],["affaiblit","tous",1],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"Sous les plus hauts chapeaux, la clairière se tait ; les enfants y jouent à la guerre sans la nommer.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ASS132-moins7","zone":"ASS132","pole":"-","palier":7,"nom":"La Paix sans mémoire","cout":2,"cible":1,
 "effet":"La forêt a tout oublié. 10 à la cible ; héros +32 de garde ; tous hésitent ; reprenez la dernière carte défaussée. Pose Racine. Si Sceau (consommée) : héros +18 de garde ; 6 à tous. Prix : cette carte s'exile.",
 "ops":[["deg","cible",10],["garde","heros",32],["hesite","tous"],["recup"],["pose","Racine"],["reveil","Sceau",true,[["garde","heros",18],["deg","tous",6]]],["exil"]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Contrôle","Garde","Récupération","Exil","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Une clairière muette sous les chapeaux géants ; plus un chant, plus un nom, plus une querelle.",
 "budget":"45,6 sans combo ; réveil +27,6 (61 %)"},
{"id":"ASS132-plus-1","zone":"ASS132","pole":"+","palier":1,"nom":"La Loi de l'éloge","cout":1,"cible":1,
 "effet":"Loi : l'attaque de la cible baisse de 2 ; vos alliés gagnent 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",2],["garde","allies",4],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Affaiblissement","Garde","Prix"],
 "ambiance":"L'éloge du roi remonte jusqu'aux ancêtres ; l'imbongi en a gardé la mélodie, et quelques trous.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS132-plus-2","zone":"ASS132","pole":"+","palier":2,"nom":"Les Noms des ancêtres","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 2 ; piochez 1 carte ; le héros se soigne de 3. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",2],["pioche",1],["soin","heros",3],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle +","Affaiblissement","Soin","Pioche","Prix"],
 "ambiance":"Chaque enfant d'eKhoweni doit savoir réciter sa lignée avant de savoir mener les veaux.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS132-plus-3","zone":"ASS132","pole":"+","palier":3,"nom":"Le Kraal d'en bas","cout":2,"cible":1,
 "effet":"Loi : si la cible hésite déjà, 14 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 1 ; vos alliés gagnent 8 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",14]]],["affaiblit","tous",1],["garde","allies",8],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Au kraal d'en bas, les femmes savent des chants que les hommes n'ont jamais entendus.",
 "budget":"21,2 / 24 (−12 %)"},
{"id":"ASS132-plus-4","zone":"ASS132","pole":"+","palier":4,"nom":"La Vieille qui se souvient","cout":2,"cible":1,
 "effet":"8 dégâts à la cible ; l'attaque de la cible baisse de 4 ; la cible hésite ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",8],["affaiblit","cible",4],["hesite","cible"],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Affaiblissement","Contrôle","Pioche","Prix"],
 "ambiance":"Une vieille, aveugle, corrige l'imbongi au milieu de l'éloge ; personne n'ose la faire taire.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS132-plus-5","zone":"ASS132","pole":"+","palier":5,"nom":"La Querelle qui revient","cout":2,"cible":1,
 "effet":"Loi : si la cible hésite déjà, 18 dégâts à la cible. Puis l'attaque de la cible baisse de 5 ; le héros se soigne de 8. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",18]]],["affaiblit","cible",5],["soin","heros",8],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Les jeunes gens apprennent enfin qui a tué qui, au gué ; ils sortent les lances le soir même.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS132-plus-6","zone":"ASS132","pole":"+","palier":6,"nom":"Les Chapeaux qui chantent","cout":2,"cible":1,
 "effet":"L'attaque de chaque ennemi baisse de 2 ; la cible hésite ; vos alliés gagnent 14 de garde. Prix : le héros perd 3 PV.",
 "ops":[["affaiblit","tous",2],["hesite","cible"],["garde","allies",14],["prixPV",3]],
 "tags":["Assemblée","Sève","Pôle +","Affaiblissement","Contrôle","Garde","Prix"],
 "ambiance":"Les chapeaux géants renvoient les voix ; une lignée récitée sous eux revient plus fort et plus longue.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS132-plus7","zone":"ASS132","pole":"+","palier":7,"nom":"La Forêt des noms","cout":2,"cible":1,
 "effet":"Chaque arbre récite un ancêtre. Si la cible hésite déjà, 8 à tous. La cible −6 d'attaque ; alliés +20 de garde. Pose Sang. Si Racine (consommée) : la cible marquée (+2) ; 20 à la cible ; chaque ennemi −1 d'attaque. Prix : ennemis +2 de garde.",
 "ops":[["si","hesite",[["deg","tous",8]]],["affaiblit","cible",6],["garde","allies",20],["pose","Sang"],["reveil","Racine",true,[["vulnerable","cible",2],["deg","cible",20],["affaiblit","tous",1]]],["ennemiGarde",2]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Marque","Affaiblissement","Garde","Condition","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Toute la forêt nomme les ancêtres à voix haute ; chaque enfant sait qui a tué qui.",
 "budget":"46,8 sans combo ; réveil +32,6 (70 %)"}
]
```

---

## 7. Taaqtuq, le Lacis des Lampes (ANT232) — Antre · Mangrove · Eau · Inuit

Forme du récit : la tentative (allumer une lampe sur chaque racine), et ce qu'elle attire. Recette du −7 : le vide (le lacis noir, sans une lampe ni un reflet) ; du +7 : la démesure (une flamme sur chaque racine jusqu'à la mer).

**Ombre (−)** : le périophtalme de la vase → le bihoreau des racines → les bihoreaux du lacis → le grand bihoreau → la colonie de périophtalmes → le bihoreau-roi → le Lacis noir. Fil mécanique : **invocations, vocation** (2e emploi sur l'Ombre, après D ANT127 : autre crochet que `vol`, autre prix que les PV, autres bêtes que bovidés, hyénidés et rapaces), affaiblissement en touche, crochet « la cible a de la garde » ; prix : vos bêtes et défausse. Autre famille que C ASS035 (mana), autre crochet (C : `garde`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, affaiblissement 4, dégâts ciblés 4, garde du héros 2, soin du héros 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (vos bêtes 5, défausse 2).

**Lumière (+)** : l'essaim de lucioles → la phalène des lampes → l'huile de phoque → la grande phalène → les moustiques en nuées → la nuée de lucioles → les Racines allumées. Fil mécanique : **colonne brûlure et « la cible brûle déjà »** (l'huile qui prend d'une racine à l'autre), soin des alliés et garde du héros en touche, lucioles et phalènes ; prix : vos bêtes et garde ennemie. Autre famille que C ASS035 (écho), autre crochet (C : `troisCartes`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, brûlure 4, dégâts ciblés 4, soin des alliés 4, marque 2, garde du héros 2 ; crochet « la cible brûle déjà » sur 4 ; prix sur 7 cartes (vos bêtes 4, garde ennemie 3).

```json
{"fiche":"ANT232","nom":"Taaqtuq, le Lacis des Lampes",
 "recit":"Qajaq, qui avait peur des ombres sous les racines, alluma une lampe à huile sur chaque racine du lacis. Les ombres reculèrent dans l'eau. Les moustiques vinrent aux lampes en nuées, puis les phalènes, puis les hérons de nuit qui mangent les phalènes, et plus personne ne dormit. L'huile manqua avant la saison des pluies ; on chassa le phoque la nuit, sous les lampes, pour en refaire. Au printemps, le camp souffla les lampes une à une, Qajaq le dernier. On a gardé l'ombre ; les hérons sont restés aussi.",
 "pal":["Le lacis de racines est noir d'un bout à l'autre ; pas une lampe, pas un reflet sur l'eau, et les kayaks glissent sans qu'on les voie.","Des ombres épaisses sous les palétuviers ; les bihoreaux guettent sans bouger, et les périophtalmes sautent de racine en racine dans la vase.","Une mangrove d'eau saumâtre, des huttes de peau sur pilotis entre les racines, des kayaks amarrés et des lampes de pierre éteintes.","Des lampes à huile brûlent sur les racines ; les moustiques tournent en nuées, et les phalènes viennent se coller aux pierres chaudes.","Chaque racine porte sa flamme, jusqu'à la mer et sans fin ; la mangrove brille comme en plein jour, et plus personne n'y ferme l'œil."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ANT232-moins-1","zone":"ANT232","pole":"-","palier":1,"nom":"Le Périophtalme de la vase","cout":1,"cible":1,
 "effet":"Un Périophtalme de la vase rejoint le combat : 8 PV, frappe 2. L'attaque de la cible baisse de 1. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Périophtalme de la vase",8,2],["affaiblit","cible",1],["prixBete",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Le poisson qui marche regarde le kayak d'un œil, la vase de l'autre, et saute dans l'ombre.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT232-moins-2","zone":"ANT232","pole":"-","palier":2,"nom":"Le Bihoreau des racines","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts à la cible. Un Bihoreau des racines rejoint le combat : 8 PV, frappe 3. Le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["invoque","Bihoreau des racines",8,3],["garde","heros",4],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le héron de nuit attend sur une racine noire, le cou rentré, aussi longtemps qu'il le faut.",
 "budget":"12,7 / 12,5 (+2 %)"},
{"id":"ANT232-moins-3","zone":"ANT232","pole":"-","palier":3,"nom":"Les Bihoreaux du lacis","cout":2,"cible":1,
 "effet":"Un Bihoreau du lacis rejoint le combat : 12 PV, frappe 4. L'attaque de la cible baisse de 2 ; le héros se soigne de 6. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Bihoreau du lacis",12,4],["affaiblit","cible",2],["soin","heros",6],["prixBete",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Ils sont venus aux lampes pour les phalènes, et ils sont restés quand on a soufflé les lampes.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT232-moins-4","zone":"ANT232","pole":"-","palier":4,"nom":"Le Grand Bihoreau","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Un Grand Bihoreau rejoint le combat : 14 PV, frappe 5. Le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["invoque","Grand Bihoreau",14,5],["garde","heros",8],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le plus vieux héron du lacis pêche sous la hutte de Qajaq, et Qajaq lui laisse les têtes.",
 "budget":"24,9 / 28 (−11 %)"},
{"id":"ANT232-moins-5","zone":"ANT232","pole":"-","palier":5,"nom":"La Colonie de périophtalmes","cout":2,"cible":0,
 "effet":"Une Colonie de périophtalmes rejoint le combat : 16 PV, frappe 6. L'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 8. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Colonie de périophtalmes",16,6],["affaiblit","tous",1],["soin","heros",8],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"À marée basse, la vase grouille de poissons qui se battent pour une racine à l'ombre.",
 "budget":"29,6 / 32 (−7 %)"},
{"id":"ANT232-moins-6","zone":"ANT232","pole":"-","palier":6,"nom":"Le Bihoreau-roi","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 16 dégâts à la cible. Un Bihoreau-roi des palétuviers rejoint le combat : 20 PV, frappe 7. La cible hésite. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["invoque","Bihoreau-roi des palétuviers",20,7],["hesite","cible"],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Contrôle","Condition","Prix"],
 "ambiance":"Un héron noir à aigrette blanche se pose au milieu du camp, et personne n'ose le chasser.",
 "budget":"31,5 / 36 (−12 %)"},
{"id":"ANT232-moins7","zone":"ANT232","pole":"-","palier":7,"nom":"Le Lacis noir","cout":2,"cible":1,
 "effet":"L'ombre a pris des ailes. 15 à la cible ; un Bihoreau des ténèbres (26 PV, frappe 9) ; chaque ennemi −1 d'attaque. Pose Abîme. Si Racine (consommée) : un Périophtalme géant (12 PV, frappe 5) ; 16 à la cible. Prix : bête la plus faible −3 PV.",
 "ops":[["deg","cible",15],["invoque","Bihoreau des ténèbres",26,9],["affaiblit","tous",1],["pose","Abîme"],["reveil","Racine",true,[["invoque","Périophtalme géant",12,5],["deg","cible",16]]],["prixBete",3]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Le lacis est noir d'un bout à l'autre ; des yeux de héron luisent sous chaque racine.",
 "budget":"45,1 sans combo ; réveil +29,5 (65 %)"},
{"id":"ANT232-plus-1","zone":"ANT232","pole":"+","palier":1,"nom":"L'Essaim de lucioles","cout":1,"cible":1,
 "effet":"La cible brûle : 2 par tour pendant 3 tours. Une Ronde de lucioles rejoint le combat : 6 PV, frappe 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["brulure","cible",2,3],["invoque","Ronde de lucioles",6,2],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Brûlure","Prix"],
 "ambiance":"Avant les lampes, il n'y avait que les lucioles ; elles se sont tues quand les flammes sont venues.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT232-plus-2","zone":"ANT232","pole":"+","palier":2,"nom":"La Phalène des lampes","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Une Phalène des lampes rejoint le combat : 6 PV, frappe 2. Vos alliés gagnent 2 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["invoque","Phalène des lampes",6,2],["garde","allies",2],["prixBete",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Les phalènes collent leurs ailes à la pierre chaude des lampes, et l'huile sent la poussière brûlée.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ANT232-plus-3","zone":"ANT232","pole":"+","palier":3,"nom":"L'Huile de phoque","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, vos alliés se soignent de 6. Puis tous les ennemis brûlent : 2 par tour pendant 3 tours ; la cible est marquée : +2 par coup reçu. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","brule",[["soin","allies",6]]],["brulure","tous",2,3],["vulnerable","cible",2],["prixBete",1]],
 "tags":["Antre","Eau","Pôle +","Brûlure","Marque","Soin","Condition","Prix"],
 "ambiance":"On remplit les lampes d'huile de phoque à la louche, et chaque soir il en faut plus.",
 "budget":"22,7 / 24 (−5 %)"},
{"id":"ANT232-plus-4","zone":"ANT232","pole":"+","palier":4,"nom":"La Grande Phalène","cout":2,"cible":1,
 "effet":"Une Grande Phalène rejoint le combat : 12 PV, frappe 4. Vos alliés se soignent de 6 ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Grande Phalène",12,4],["soin","allies",6],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Marque","Soin","Prix"],
 "ambiance":"Une phalène large comme une main tourne autour de la lampe de Qajaq toute la nuit.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT232-plus-5","zone":"ANT232","pole":"+","palier":5,"nom":"Les Moustiques en nuées","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 16 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 4 tours ; le héros gagne 8 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",16]]],["brulure","tous",2,4],["garde","heros",8],["prixBete",2]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Brûlure","Garde","Condition","Prix"],
 "ambiance":"Les nuées de moustiques montent des racines vers les lampes ; on dort la tête dans un sac.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT232-plus-6","zone":"ANT232","pole":"+","palier":6,"nom":"La Nuée de lucioles","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Une Nuée de lucioles rejoint le combat : 16 PV, frappe 5. Vos alliés se soignent de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","brule",[["deg","cible",18]]],["invoque","Nuée de lucioles",16,5],["soin","allies",6],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Quand les lampes s'éteignent une à une, les lucioles reviennent, timides, sur les racines nues.",
 "budget":"31,5 / 36 (−12 %)"},
{"id":"ANT232-plus7","zone":"ANT232","pole":"+","palier":7,"nom":"Les Racines allumées","cout":2,"cible":1,
 "effet":"La mangrove brûle en plein jour. 9 à la cible ; tous brûlent (3 par tour, 4 tours) ; héros +16 de garde. Pose Braise. Si Givre (consommée) : la cible brûle (4 par tour, 3 tours) ; 12 à la cible ; alliés soignés de 4. Prix : bête la plus faible −3 PV.",
 "ops":[["deg","cible",9],["brulure","tous",3,4],["garde","heros",16],["pose","Braise"],["reveil","Givre",true,[["brulure","cible",4,3],["deg","cible",12],["soin","allies",4]]],["prixBete",3]],
 "tags":["Antre","Eau","Forme ultime +7","Dégâts","Brûlure","Garde","Soin","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"Chaque racine porte sa flamme jusqu'à la mer ; la mangrove brille, et personne n'y dort plus.",
 "budget":"45,2 sans combo ; réveil +30 (66 %)"}
]
```

---

## 8. Ka'ua'u, la Faille des Pétrels (ANT242) — Antre · Canyon · Feu · Polynésienne

Forme du récit : le tabou levé (le kapu des pétrels, levé une saison, rétabli trop tard). Recette du −7 : la démesure (la brume qui monte jusqu'au bord et le déborde, pleine de cris) ; du +7 : le vide (on voit jusqu'à la mer, et plus un oiseau).

**Brume (−)** : le pétrel des terriers → le puffin de la faille → le phaéton à brins rouges → la colonie de pétrels → le grand puffin → le phaéton des crêtes → la Brume qui crie. Fil mécanique : **invocations, vocation** (3e et dernier emploi sur la Brume, après D ANT047 et C ANT129, tous deux sur `vol` : ici « la cible hésite déjà », prix en garde ennemie et exil, oiseaux de mer), affaiblissement en touche ; prix : garde ennemie et exil. Autre image que B DON124. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, affaiblissement 4, dégâts ciblés 4, soin du héros 2, exil 2, garde du héros 2, hésitation 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (garde ennemie 5, exil 2).

**Clarté (+)** : le pluvier kōlea → le ciel ouvert → les terriers vides → les cordes de fibre → le kōlea des crêtes → le kapu rétabli → la Faille claire. Fil mécanique : **vol de vie**, place rare (on voit tout, et l'on prend tout), garde du héros et coups au hasard en touche, pluviers et geckos, crochet « la cible vole par-dessus » ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : vol de vie 7, dégâts ciblés 4, bêtes 4, dégâts à tous 3, garde du héros 3, exil 2, coups au hasard 2 ; crochet « la cible vole par-dessus » sur 2 ; prix sur 7 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"ANT242","nom":"Ka'ua'u, la Faille des Pétrels",
 "recit":"Une année de disette, le chef Keawe leva le kapu qui protégeait les pétrels de la faille. Pendant toute la saison des brumes, on descendit sur des cordes de fibre jusqu'aux terriers, et l'on tira les oiseaux de leurs trous avec des crochets de bois. On mangea bien, et l'on fit sécher le reste. L'année suivante, la brume revint dans la faille sans un cri d'oiseau. Keawe rétablit le kapu, sous peine de mort, et fit garder les terriers vides. Le kapu est rétabli, et très bien respecté.",
 "pal":["La brume monte de la faille jusqu'au bord et le déborde ; on n'y voit plus sa main, et les cris des pétrels emplissent tout le blanc.","Des bancs de brume roulent dans la faille rouge ; on entend les oiseaux revenir aux terriers sans les voir, et les cordes pendent dans le blanc.","Une faille de roche rouge qui descend vers la mer, des terriers dans les parois, des cordes de fibre et des crochets de bois au bord.","Le ciel s'ouvre sur la faille ; on voit les terriers vides, les cordes usées, et des pluviers qui picorent sur les corniches nues.","Pas une brume, pas un oiseau ; on voit de la crête jusqu'à la mer chaque caillou de la faille, et rien n'y bouge."],
 "pm":"Brume","pp":"Clarté"}
```

```json
[
{"id":"ANT242-moins-1","zone":"ANT242","pole":"-","palier":1,"nom":"Le Pétrel des terriers","cout":1,"cible":1,
 "effet":"Un Pétrel des terriers rejoint le combat : 8 PV, frappe 3. L'attaque de la cible baisse de 1. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Pétrel des terriers",8,3],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Le pétrel rentre au terrier la nuit, dans la brume, en criant comme un enfant qu'on appelle.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT242-moins-2","zone":"ANT242","pole":"-","palier":2,"nom":"Le Puffin de la faille","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 8 dégâts à la cible. Un Puffin de la faille rejoint le combat : 8 PV, frappe 3. Le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["si","hesite",[["deg","cible",8]]],["invoque","Puffin de la faille",8,3],["soin","heros",3],["exil"]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Soin","Condition","Exil","Prix"],
 "ambiance":"Les puffins volent au ras de la brume, et y plongent comme on plonge dans la mer.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT242-moins-3","zone":"ANT242","pole":"-","palier":3,"nom":"Le Phaéton à brins rouges","cout":2,"cible":1,
 "effet":"Un Phaéton à brins rouges rejoint le combat : 12 PV, frappe 4. La cible hésite ; le héros gagne 8 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Phaéton à brins rouges",12,4],["hesite","cible"],["garde","heros",8],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Contrôle","Garde","Prix"],
 "ambiance":"Ses longues plumes rouges traînent derrière lui dans le blanc ; les chefs en font des chasse-mouches.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"ANT242-moins-4","zone":"ANT242","pole":"-","palier":4,"nom":"La Colonie de pétrels","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 14 dégâts à la cible. Une Colonie de pétrels rejoint le combat : 16 PV, frappe 5. L'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","hesite",[["deg","cible",14]]],["invoque","Colonie de pétrels",16,5],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Exil","Prix"],
 "ambiance":"Toute la paroi crie à la tombée du jour, quand la colonie rentre de la mer avec la brume.",
 "budget":"25,5 / 28 (−9 %)"},
{"id":"ANT242-moins-5","zone":"ANT242","pole":"-","palier":5,"nom":"Le Grand Puffin","cout":2,"cible":1,
 "effet":"Un Grand Puffin rejoint le combat : 16 PV, frappe 6. La cible hésite ; l'attaque de chaque ennemi baisse de 1 ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Grand Puffin",16,6],["hesite","cible"],["affaiblit","tous",1],["recup"],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Affaiblissement","Contrôle","Récupération","Prix"],
 "ambiance":"Le plus gros des puffins dort dans le terrier du fond, celui que les cordes n'atteignent pas.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT242-moins-6","zone":"ANT242","pole":"-","palier":6,"nom":"Le Phaéton des crêtes","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 18 dégâts à la cible. Un Phaéton des crêtes rejoint le combat : 18 PV, frappe 7. Le héros gagne 8 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",18]]],["invoque","Phaéton des crêtes",18,7],["garde","heros",8],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Il tourne au-dessus de la crête dans la brume, si haut qu'on ne voit que ses plumes rouges.",
 "budget":"32,9 / 36 (−9 %)"},
{"id":"ANT242-moins7","zone":"ANT242","pole":"-","palier":7,"nom":"La Brume qui crie","cout":2,"cible":1,
 "effet":"La brume crie de partout. 10 à la cible ; une Nuée de pétrels (24 PV, frappe 9) ; chaque ennemi −1 d'attaque ; soin du héros 8. Pose Givre. Si Sceau (consommée) : un Phaéton de brume (12 PV, frappe 5) ; 16 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["deg","cible",10],["invoque","Nuée de pétrels",24,9],["affaiblit","tous",1],["soin","heros",8],["pose","Givre"],["reveil","Sceau",true,[["invoque","Phaéton de brume",12,5],["deg","cible",16]]],["ennemiGarde",2]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Soin","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"La brume déborde la faille, pleine de cris d'oiseaux ; on n'y voit plus sa main.",
 "budget":"46,1 sans combo ; réveil +29,5 (64 %)"},
{"id":"ANT242-plus-1","zone":"ANT242","pole":"+","palier":1,"nom":"Le Pluvier kōlea","cout":1,"cible":1,
 "effet":"6 dégâts à la cible ; tous ces dégâts en vol de vie. Un Pluvier kōlea rejoint le combat : 4 PV, frappe 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",6],["volVie"],["invoque","Pluvier kōlea",4,1],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Le kōlea revient de très loin chaque hiver, et picore sur les corniches comme s'il n'était jamais parti.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT242-plus-2","zone":"ANT242","pole":"+","palier":2,"nom":"Le Ciel ouvert","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis 2 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Prix : cette carte s'exile.",
 "ops":[["si","vol",[["deg","cible",10]]],["deg","tous",2],["volVie"],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Vol de vie","Condition","Exil","Prix"],
 "ambiance":"Quand la brume se lève, on voit les oiseaux de la crête à la mer, et les oiseaux nous voient.",
 "budget":"11,1 / 12,5 (−11 %)"},
{"id":"ANT242-plus-3","zone":"ANT242","pole":"+","palier":3,"nom":"Les Terriers vides","cout":2,"cible":0,
 "effet":"3 coups de 4 au hasard ; tous ces dégâts en vol de vie. Un Gecko des corniches rejoint le combat : 8 PV, frappe 3. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","hasard",4,3],["volVie"],["invoque","Gecko des corniches",8,3],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Les terriers sont vides jusqu'au fond ; les geckos y dorment le jour, à la place des oiseaux.",
 "budget":"24,5 / 24 (+2 %)"},
{"id":"ANT242-plus-4","zone":"ANT242","pole":"+","palier":4,"nom":"Les Cordes de fibre","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 16 dégâts à la cible. Puis 4 dégâts à tous les ennemis ; tous ces dégâts en vol de vie ; le héros gagne 6 de garde. Prix : cette carte s'exile.",
 "ops":[["si","vol",[["deg","cible",16]]],["deg","tous",4],["volVie"],["garde","heros",6],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Vol de vie","Garde","Condition","Exil","Prix"],
 "ambiance":"Les cordes de fibre de coco pendent toujours dans la faille ; personne ne les a remontées.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT242-plus-5","zone":"ANT242","pole":"+","palier":5,"nom":"Le Kōlea des crêtes","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; tous ces dégâts en vol de vie. Un Kōlea des crêtes rejoint le combat : 12 PV, frappe 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",14],["volVie"],["invoque","Kōlea des crêtes",12,4],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Un pluvier doré se pose sur la corde du chef, et s'envole avant qu'on ait levé la main.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT242-plus-6","zone":"ANT242","pole":"+","palier":6,"nom":"Le Kapu rétabli","cout":2,"cible":1,
 "effet":"3 coups de 5 au hasard ; tous ces dégâts en vol de vie ; l'attaque de la cible baisse de 2 ; le héros gagne 8 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","hasard",5,3],["volVie"],["affaiblit","cible",2],["garde","heros",8],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Vol de vie","Garde","Prix"],
 "ambiance":"Des gardes veillent jour et nuit sur les terriers vides, une lance à la main, sous peine de mort.",
 "budget":"32,9 / 36 (−9 %)"},
{"id":"ANT242-plus7","zone":"ANT242","pole":"+","palier":7,"nom":"La Faille claire","cout":2,"cible":0,
 "effet":"La clarté boit la faille. 8 à tous ; tout en vol de vie ; un Grand Gecko des crêtes (16 PV, frappe 6) ; héros +8 de garde. Pose Racine. Si Braise (consommée) : 6 à tous ; soin du héros 15. Prix : ennemis soignés de 2.",
 "ops":[["deg","tous",8],["volVie"],["invoque","Grand Gecko des crêtes",16,6],["garde","heros",8],["pose","Racine"],["reveil","Braise",true,[["deg","tous",6],["soin","heros",15]]],["ennemiSoin",2]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Vol de vie","Garde","Soin","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"On voit de la crête jusqu'à la mer chaque caillou de la faille, et rien n'y bouge.",
 "budget":"45,8 sans combo ; réveil +28,2 (62 %)"}
]
```

---

## 9. Akakiou Kellion, la Cellule du Dormeur (ANT141) — Antre · Volcan · Feu · Byzantine

Forme du récit : la fondation pieuse (le saint qui dort, et la maison qui vit de son sommeil). Recette du −7 : le silence (tout le monastère endormi pendant que la montagne gronde) ; du +7 : la foule (une foule éveillée qui couvre la pente jusqu'au cratère).

**Sommeil (−)** : la vipère des nattes → la natte du saint → le scorpion des nattes → la cendre sur les tuiles → la grande vipère du cratère → les malades en rangs → le Saint endormi. Fil mécanique : brûlure (la montagne qui couve sous le sommeil), soin du héros et hésitation en touche, crochet « la cible a de la garde » ; prix : vos bêtes et PV. Le Sommeil en invocations est laissé à B (ANT044). Autre image que B ANT044 (aucune falaise, aucune mer). Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 7, bêtes 4, dégâts ciblés 3, soin du héros 3, hésitation 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (vos bêtes 4, PV 3).

**Éveil (+)** : le coq du monastère → la cloche des heures → l'essaim des ruches du mur → l'ermite qui s'étire → le coq de la cloche → le bâton demandé → le Monastère éveillé. Fil mécanique : **exil** (on ne se réveille qu'une fois : la carte part), coups au hasard et pioche en touche, coqs et abeilles, crochet « c'est au moins votre troisième carte ce tour » ; prix : exil et PV. L'exil était d'abord prévu sur le Rêve (ASS116), où il avait déjà été famille principale (ASS057, lot 5) : l'Éveil le prend, le Rêve prend les coups au hasard. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 5, bêtes 4, coups au hasard 4, dégâts ciblés 3, pioche 3, soin du héros 2, garde du héros 2, affaiblissement 2 ; crochet « c'est au moins votre troisième carte ce tour » sur 2 ; prix sur 7 cartes (exil 5, PV 2).

```json
{"fiche":"ANT141","nom":"Akakiou Kellion, la Cellule du Dormeur",
 "recit":"L'ermite Akakios s'endormit dans sa cellule au flanc du volcan, et ne se réveilla pas de tout l'été. La montagne grondait ; il dormait. Des bergers le virent, puis des pèlerins vinrent, puis l'évêque, qui fit bâtir un monastère autour de la cellule et vendre aux malades des nuits sur la natte du saint. À l'automne, Akakios se réveilla, s'étira et demanda son bâton pour partir. On l'a prié de se rendormir, pour le bien de la maison.",
 "pal":["Le monastère entier dort sur ses nattes, moines, pèlerins et mulets ; la montagne gronde, et pas un souffle ne lui répond.","Des malades dorment en rangs sous les voûtes ; la cendre chaude tombe sur les tuiles, et les moines marchent pieds nus pour ne réveiller personne.","Une cellule creusée au flanc du volcan, un monastère de pierre noire autour, et des pèlerins qui montent, une natte roulée sur le dos.","Les cloches sonnent à chaque heure ; les coqs du monastère chantent sans arrêt, et les abeilles bourdonnent dans les ruches du mur.","Une foule éveillée couvre la pente jusqu'au cratère ; on chante, on crie, on sonne, et l'ermite réveillé cherche en vain son bâton."],
 "pm":"Sommeil","pp":"Éveil"}
```

```json
[
{"id":"ANT141-moins-1","zone":"ANT141","pole":"-","palier":1,"nom":"La Vipère des nattes","cout":1,"cible":1,
 "effet":"La cible brûle : 2 par tour pendant 3 tours. Une Vipère des nattes rejoint le combat : 4 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["brulure","cible",2,3],["invoque","Vipère des nattes",4,2],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Brûlure","Prix"],
 "ambiance":"Une vipère dort roulée sous la natte du saint ; les moines disent qu'elle le garde, et la laissent.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT141-moins-2","zone":"ANT141","pole":"-","palier":2,"nom":"La Natte du saint","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts à la cible. Puis la cible brûle : 2 par tour pendant 3 tours ; la cible hésite. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["brulure","cible",2,3],["hesite","cible"],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Contrôle","Condition","Prix"],
 "ambiance":"Une nuit sur la natte du saint coûte un mouton ; les malades en ressortent reposés, ou pas du tout.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT141-moins-3","zone":"ANT141","pole":"-","palier":3,"nom":"Le Scorpion des nattes","cout":2,"cible":0,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours. Un Scorpion des nattes rejoint le combat : 10 PV, frappe 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["brulure","tous",2,3],["invoque","Scorpion des nattes",10,3],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Brûlure","Prix"],
 "ambiance":"Les scorpions aiment la chaleur des nattes, et les pèlerins qui dorment trop bien ne les sentent pas.",
 "budget":"21,7 / 24 (−10 %)"},
{"id":"ANT141-moins-4","zone":"ANT141","pole":"-","palier":4,"nom":"La Cendre sur les tuiles","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Puis la cible brûle : 4 par tour pendant 3 tours ; le héros se soigne de 8. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["brulure","cible",4,3],["soin","heros",8],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Soin","Condition","Prix"],
 "ambiance":"La cendre chaude tombe toute la nuit sur les tuiles ; on la balaie à l'aube, à pas de loup.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT141-moins-5","zone":"ANT141","pole":"-","palier":5,"nom":"La Grande Vipère du cratère","cout":2,"cible":1,
 "effet":"La cible brûle : 3 par tour pendant 4 tours. Une Grande Vipère du cratère rejoint le combat : 14 PV, frappe 5. La cible hésite. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["brulure","cible",3,4],["invoque","Grande Vipère du cratère",14,5],["hesite","cible"],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Brûlure","Contrôle","Prix"],
 "ambiance":"Elle descend du cratère quand la montagne gronde, et vient dormir dans la chaleur de la cellule.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT141-moins-6","zone":"ANT141","pole":"-","palier":6,"nom":"Les Malades en rangs","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 18 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 4 tours ; le héros se soigne de 8. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["brulure","tous",2,4],["soin","heros",8],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Soin","Condition","Prix"],
 "ambiance":"Les malades dorment en rangs sous les voûtes ; certains ne se réveillent pas, et on dit qu'ils sont guéris.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT141-moins7","zone":"ANT141","pole":"-","palier":7,"nom":"Le Saint endormi","cout":2,"cible":1,
 "effet":"Le saint dort dans le feu. Tous brûlent (3 par tour, 4 tours) ; un Scorpion-roi des cendres (14 PV, frappe 5) ; héros +10 de garde. Pose Braise. Si Givre (consommée) : la cible brûle (5 par tour, 3 tours) ; soin du héros 14. Prix : héros −3 PV.",
 "ops":[["brulure","tous",3,4],["invoque","Scorpion-roi des cendres",14,5],["garde","heros",10],["pose","Braise"],["reveil","Givre",true,[["brulure","cible",5,3],["soin","heros",14]]],["prixPV",3]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Brûlure","Garde","Soin","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"Le monastère entier dort sur ses nattes ; la montagne gronde, et pas un souffle ne lui répond.",
 "budget":"45,9 sans combo ; réveil +29 (63 %)"},
{"id":"ANT141-plus-1","zone":"ANT141","pole":"+","palier":1,"nom":"Le Coq du monastère","cout":1,"cible":0,
 "effet":"2 coups de 3 au hasard. Un Coq du monastère rejoint le combat : 6 PV, frappe 2. Prix : cette carte s'exile.",
 "ops":[["exil"],["deg","hasard",3,2],["invoque","Coq du monastère",6,2]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Exil","Prix"],
 "ambiance":"Le coq du monastère chante à toute heure, depuis que le saint s'est réveillé ; personne n'ose le tuer.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT141-plus-2","zone":"ANT141","pole":"+","palier":2,"nom":"La Cloche des heures","cout":1,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 8 dégâts à la cible. Puis piochez 1 carte ; le héros se soigne de 7. Prix : cette carte s'exile.",
 "ops":[["si","troisCartes",[["deg","cible",8]]],["exil"],["pioche",1],["soin","heros",7]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"On sonne les heures pour réveiller les pèlerins qui ont payé leur nuit, et les autres avec.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT141-plus-3","zone":"ANT141","pole":"+","palier":3,"nom":"L'Essaim des ruches du mur","cout":2,"cible":0,
 "effet":"3 coups de 5 au hasard. Un Essaim des ruches du mur rejoint le combat : 10 PV, frappe 3. Prix : cette carte s'exile.",
 "ops":[["exil"],["deg","hasard",5,3],["invoque","Essaim des ruches du mur",10,3]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Exil","Prix"],
 "ambiance":"Les ruches sont maçonnées dans le mur d'enceinte ; quand la cloche sonne, l'essaim sort d'un coup.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT141-plus-4","zone":"ANT141","pole":"+","palier":4,"nom":"L'Ermite qui s'étire","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 14 dégâts à la cible. Puis le héros gagne 10 de garde ; piochez 1 carte ; l'attaque de la cible baisse de 3. Prix : cette carte s'exile.",
 "ops":[["si","troisCartes",[["deg","cible",14]]],["exil"],["garde","heros",10],["pioche",1],["affaiblit","cible",3]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"Akakios s'étire, fait craquer son dos et demande à manger, comme après une sieste trop longue.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT141-plus-5","zone":"ANT141","pole":"+","palier":5,"nom":"Le Coq de la cloche","cout":2,"cible":0,
 "effet":"Un Coq de la cloche rejoint le combat : 12 PV, frappe 4. 3 coups de 5 au hasard ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Coq de la cloche",12,4],["deg","hasard",5,3],["pioche",1],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Un coq roux s'est installé dans le clocher ; il chante avant la cloche, et la cloche le suit.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT141-plus-6","zone":"ANT141","pole":"+","palier":6,"nom":"Le Bâton demandé","cout":2,"cible":1,
 "effet":"6 dégâts à tous les ennemis ; le héros gagne 10 de garde ; le héros se soigne de 10 ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["exil"],["deg","tous",6],["garde","heros",10],["soin","heros",10],["affaiblit","cible",2]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Soin","Exil","Prix"],
 "ambiance":"L'ermite demande son bâton ; les moines cherchent longtemps, et ne le trouvent pas de toute la journée.",
 "budget":"34,2 / 36 (−5 %)"},
{"id":"ANT141-plus7","zone":"ANT141","pole":"+","palier":7,"nom":"Le Monastère éveillé","cout":2,"cible":1,
 "effet":"Le monastère ne dort plus. 4 coups de 6 au hasard ; un Grand Essaim du cratère (14 PV, frappe 5) ; tous marqués (+1) ; la cible hésite. Pose Sceau. Si Sang (consommée) : 16 à la cible ; la cible marquée (+2) ; riposte 4. Prix : héros −3 PV.",
 "ops":[["deg","hasard",6,4],["invoque","Grand Essaim du cratère",14,5],["vulnerable","tous",1],["hesite","cible"],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",16],["vulnerable","cible",2],["riposte",4]]],["prixPV",3]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Marque","Contrôle","Riposte","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Une foule éveillée couvre la pente jusqu'au cratère ; on chante, on crie, on sonne.",
 "budget":"47,1 sans combo ; réveil +30 (64 %)"}
]
```

---

## 10. Glimmerstein, le Reliquaire des Cendres (ANT034) — Antre · Cavernes cristallines · Pierre · Gothique

Forme du récit : la translation des reliques (les os et la cendre descendus dans la grotte), et ce qui pousse dessus. Recette du −7 : la ruine (la grotte comble de cendre jusqu'aux voûtes) ; du +7 : l'objet (l'autel et les châsses sous les fleurs blanches, sans bâtiment avalé).

**Cendre (−)** : la corneille de la cendre → le sac de cendre → le blaireau des châsses → frère Ortolf → la grande corneille → la suie sur le cristal → la Grotte comble. Fil mécanique : soin des alliés (la cendre des maisons qui garde ses morts au chaud), corneilles et blaireaux, crochet « vous avez déjà joué une autre carte ce tour » ; prix : vos bêtes et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, bêtes 4, dégâts ciblés 3, garde des alliés 2, exil 2, affaiblissement 2, dégâts à tous 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 ; prix sur 7 cartes (vos bêtes 5, exil 2).

**Floraison (+)** : le rouge-gorge des châsses → la fleur dans la cendre → l'escargot de l'autel → la cueillette à genoux → le grand rouge-gorge → les fleurs pressées → l'Autel fleuri. Fil mécanique : affaiblissement (les fleurs qui alourdissent les bras), soin des alliés en touche, rouges-gorges et escargots, crochet « la Garde du héros est levée » ; prix : soin ennemi et vos bêtes. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, bêtes 4, dégâts ciblés 4, soin des alliés 3, garde du héros 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (soin ennemi 4, vos bêtes 3).

```json
{"fiche":"ANT034","nom":"Glimmerstein, le Reliquaire des Cendres",
 "recit":"Quand la ville de Glimmerstein brûla, frère Ortolf descendit les reliques dans la grotte de cristal, avec ce qu'il put de cendre des maisons, pour que les morts restent près du saint. Sous la lumière que le cristal tire du jour, la cendre se couvrit de fleurs blanches dès le printemps. Les pèlerins venaient pour les os ; ils repartirent avec les fleurs, que les frères leur vendaient pressées dans du parchemin. Ortolf garda les reliques sous clé, et la clé sur lui. Les fleurs se vendent mieux que les os.",
 "pal":["La grotte est comble de cendre jusqu'aux voûtes de cristal ; les châsses fendues affleurent, et la lumière ne passe plus qu'en fils gris.","Des sacs de cendre des maisons brûlées s'entassent contre les parois ; les corneilles fouillent la cendre, et le cristal se ternit de suie.","Une grotte de cristal sous une ville de pierre, des châsses alignées sur un autel, et une lumière pâle qui tombe des aiguilles du plafond.","Des fleurs blanches sortent de la cendre sous la lumière du cristal ; les frères les cueillent à genoux, et des rouges-gorges nichent dans les châsses.","L'autel disparaît sous les fleurs blanches, les châsses aussi ; les aiguilles de cristal ruissellent de lumière, et l'on ne sait plus où sont les os."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ANT034-moins-1","zone":"ANT034","pole":"-","palier":1,"nom":"La Corneille de la cendre","cout":1,"cible":0,
 "effet":"Vos alliés se soignent de 4. Une Corneille de la cendre rejoint le combat : 4 PV, frappe 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["soin","allies",4],["invoque","Corneille de la cendre",4,2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Soin","Prix"],
 "ambiance":"Une corneille fouille la cendre des maisons, et en sort une cuillère, un dé, une bague noircie.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT034-moins-2","zone":"ANT034","pole":"-","palier":2,"nom":"Le Sac de cendre","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 8 dégâts à la cible. Puis vos alliés se soignent de 4 ; vos alliés gagnent 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","cartesJouees",[["deg","cible",8]]],["soin","allies",4],["garde","allies",4],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Chaque famille a descendu un sac de cendre de sa maison, pour que ses morts dorment près du saint.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"ANT034-moins-3","zone":"ANT034","pole":"-","palier":3,"nom":"Le Blaireau des châsses","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 8. Un Blaireau des châsses rejoint le combat : 10 PV, frappe 4. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["soin","allies",8],["invoque","Blaireau des châsses",10,4],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Soin","Prix"],
 "ambiance":"Un blaireau a creusé son terrier sous l'autel ; les frères le nourrissent, de peur qu'il creuse plus loin.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT034-moins-4","zone":"ANT034","pole":"-","palier":4,"nom":"Frère Ortolf","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 14 dégâts à la cible. Puis vos alliés se soignent de 10 ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","cartesJouees",[["deg","cible",14]]],["soin","allies",10],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"Ortolf porte la clé des reliques à la ceinture, et ne la pose même pas pour dormir.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT034-moins-5","zone":"ANT034","pole":"-","palier":5,"nom":"La Grande Corneille","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 10. Une Grande Corneille du reliquaire rejoint le combat : 14 PV, frappe 5. Vos alliés gagnent 4 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["soin","allies",10],["invoque","Grande Corneille du reliquaire",14,5],["garde","allies",4],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Soin","Prix"],
 "ambiance":"La plus vieille corneille se perche sur la châsse du saint et ne laisse personne approcher sans payer.",
 "budget":"32,3 / 32 (+1 %)"},
{"id":"ANT034-moins-6","zone":"ANT034","pole":"-","palier":6,"nom":"La Suie sur le cristal","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 12 ; 6 dégâts à tous les ennemis ; l'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["soin","allies",12],["deg","tous",6],["affaiblit","cible",2],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Soin","Prix"],
 "ambiance":"La suie de la ville monte jusqu'aux aiguilles de cristal, et la lumière de la grotte devient grise.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ANT034-moins7","zone":"ANT034","pole":"-","palier":7,"nom":"La Grotte comble","cout":2,"cible":1,
 "effet":"La cendre garde ses morts. 12 à la cible ; alliés soignés de 14 ; un Blaireau-père des cryptes (14 PV, frappe 6). Pose Sceau. Si Racine (consommée) : alliés soignés de 10 ; 6 à tous. Prix : bête la plus faible −3 PV.",
 "ops":[["deg","cible",12],["soin","allies",14],["invoque","Blaireau-père des cryptes",14,6],["pose","Sceau"],["reveil","Racine",true,[["soin","allies",10],["deg","tous",6]]],["prixBete",3]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Soin","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"La grotte est comble de cendre jusqu'aux voûtes ; les châsses fendues affleurent à peine.",
 "budget":"46 sans combo ; réveil +28,2 (61 %)"},
{"id":"ANT034-plus-1","zone":"ANT034","pole":"+","palier":1,"nom":"Le Rouge-gorge des châsses","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 2. Un Rouge-gorge des châsses rejoint le combat : 4 PV, frappe 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","cible",2],["invoque","Rouge-gorge des châsses",4,2],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Prix"],
 "ambiance":"Un rouge-gorge a fait son nid dans la châsse du saint, entre les os ; Ortolf l'a laissé faire.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT034-plus-2","zone":"ANT034","pole":"+","palier":2,"nom":"La Fleur dans la cendre","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 1 ; le héros gagne 6 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","garde",[["deg","cible",10]]],["affaiblit","cible",1],["garde","heros",6],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Une fleur blanche sort de la cendre des maisons, là où le cristal laisse tomber le jour.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"ANT034-plus-3","zone":"ANT034","pole":"+","palier":3,"nom":"L'Escargot de l'autel","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 1. Un Escargot de l'autel rejoint le combat : 10 PV, frappe 3. Vos alliés se soignent de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","tous",1],["invoque","Escargot de l'autel",10,3],["soin","allies",6],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Un escargot pâle monte lentement le long de l'autel, et laisse sur la pierre une trace qui brille.",
 "budget":"23,1 / 24 (−4 %)"},
{"id":"ANT034-plus-4","zone":"ANT034","pole":"+","palier":4,"nom":"La Cueillette à genoux","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 14 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; le héros gagne 10 de garde ; piochez 1 carte. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","garde",[["deg","cible",14]]],["affaiblit","cible",3],["garde","heros",10],["pioche",1],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les frères cueillent les fleurs à genoux, comme on prie, et les comptent avant de se relever.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT034-plus-5","zone":"ANT034","pole":"+","palier":5,"nom":"Le Grand Rouge-gorge","cout":2,"cible":1,
 "effet":"L'attaque de la cible baisse de 3. Un Grand Rouge-gorge rejoint le combat : 14 PV, frappe 5. Vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","cible",3],["invoque","Grand Rouge-gorge",14,5],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Soin","Prix"],
 "ambiance":"Il chante sous les voûtes de cristal, et sa voix revient de partout, comme s'ils étaient une foule.",
 "budget":"27,5 / 32 (−14 %)"},
{"id":"ANT034-plus-6","zone":"ANT034","pole":"+","palier":6,"nom":"Les Fleurs pressées","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 16 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 2 ; la cible est marquée : +4 par coup reçu ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",16]]],["affaiblit","tous",2],["vulnerable","cible",4],["recup"],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Marque","Affaiblissement","Récupération","Condition","Prix"],
 "ambiance":"Les fleurs pressées dans du parchemin partent avec les pèlerins ; les os restent sous clé.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ANT034-plus7","zone":"ANT034","pole":"+","palier":7,"nom":"L'Autel fleuri","cout":2,"cible":1,
 "effet":"Les fleurs ont pris l'autel. 8 à la cible ; chaque ennemi −2 d'attaque ; un Escargot géant (16 PV, frappe 5) ; alliés soignés de 8. Pose Racine. Si Givre (consommée) : la cible −5 d'attaque ; 14 à la cible. Prix : bête la plus faible −2 PV.",
 "ops":[["deg","cible",8],["affaiblit","tous",2],["invoque","Escargot géant",16,5],["soin","allies",8],["pose","Racine"],["reveil","Givre",true,[["affaiblit","cible",5],["deg","cible",14]]],["prixBete",2]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Soin","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"L'autel disparaît sous les fleurs blanches ; on ne sait plus où sont les os du saint.",
 "budget":"46,7 sans combo ; réveil +29 (62 %)"}
]
```

---

## 11. Khunbahā, l'Arpent du Rachat (ANT123) — Antre · Cité en ruines · Pierre · Perse

Forme du récit : le règlement d'une vendetta (le prix du sang payé en arbres), et la querelle qui change d'objet. Recette du −7 : l'ordre (une tour de guet par famille, des tombes en rangs) ; du +7 : le geste (on gemme chaque tronc, côte à côte, sans se parler).

**Sang (−)** : la hyène des ruines → le poignard à la ceinture → la lionne des colonnes → le frère de Shirin → la hyène du puits → les tours de guet → les Tombes en rangs. Fil mécanique : garde des alliés (chaque famille fait bloc), riposte et affaiblissement en touche, hyènes et lions, crochet « la cible s'apprête à piétiner » ; prix : vos bêtes et PV. Autre famille que C CIT010 (garde du héros), autre crochet (C : `seul`). Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, bêtes 4, dégâts ciblés 3, riposte 2, affaiblissement 2 ; crochet « la cible s'apprête à piétiner » sur 2 ; prix sur 7 cartes (vos bêtes 4, PV 3).

**Sève (+)** : la huppe des pistachiers → le hérisson du verger → la huppe de la résine → le hérisson des rigoles → la grande huppe → le hérisson-roi du puits → le Verger qui saigne. Fil mécanique : **invocations, vocation** (3e et dernier emploi sur la Sève, après C ANT121 et C ANT188, tous deux sur `bete` : ici « le héros a moins de la moitié de ses PV », prix en soin ennemi et exil, huppes et hérissons), soin des alliés et soin du héros en touche ; prix : soin ennemi et exil. Autre famille que C CIT010 (exil), autre crochet (C : `troisCartes`). Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, soin du héros 3, soin des alliés 3, pioche 2, exil 2, affaiblissement 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"ANT123","nom":"Khunbahā, l'Arpent du Rachat",
 "recit":"Quand le fils de Babak tua le frère de Shirin dans les ruines, les anciens fixèrent le prix du sang en arbres : un verger de pistachiers, planté par la famille du meurtrier sur la terre du mort. Babak et ses fils creusèrent les rigoles, montèrent l'eau du puits et plantèrent entre les colonnes tombées. Le verger prit ; la résine coula, les huppes vinrent. La famille de Shirin récolta, puis voulut agrandir le verger sur la terre de Babak, qui refusa. Elles se battent maintenant pour le verger, ce que les anciens appellent un progrès.",
 "pal":["Une tour de guet par famille dans les ruines, des fossés tracés au cordeau, et des tombes en rangs entre les colonnes tombées.","Des taches brunes sur les dalles du vieux bazar ; les hommes portent le poignard à la ceinture, et les hyènes rôdent entre les colonnes.","Une cité morte de briques crues et de colonnes tombées, un puits encore vivant, et de jeunes pistachiers plantés entre les dalles.","La résine coule des troncs de pistachier en larmes claires ; les huppes nichent dans les colonnes, et l'eau court dans des rigoles neuves.","Le verger court entre les colonnes jusqu'à l'horizon ; on gemme chaque tronc, et les familles récoltent côte à côte sans se parler."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"ANT123-moins-1","zone":"ANT123","pole":"-","palier":1,"nom":"La Hyène des ruines","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 4 de garde. Une Hyène des ruines rejoint le combat : 4 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["garde","allies",4],["invoque","Hyène des ruines",4,2],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"La hyène lèche les dalles du vieux bazar, là où le frère de Shirin est tombé.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ANT123-moins-2","zone":"ANT123","pole":"-","palier":2,"nom":"Le Poignard à la ceinture","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Puis vos alliés gagnent 6 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","pietine",[["deg","cible",10]]],["garde","allies",6],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Chaque homme des familles porte le poignard à la ceinture, même pour aller au puits.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ANT123-moins-3","zone":"ANT123","pole":"-","palier":3,"nom":"La Lionne des colonnes","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 10 de garde. Une Lionne des colonnes rejoint le combat : 10 PV, frappe 4. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["garde","allies",10],["invoque","Lionne des colonnes",10,4],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Une lionne maigre dort à l'ombre des colonnes tombées ; on dit qu'elle a goûté du sang des familles.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT123-moins-4","zone":"ANT123","pole":"-","palier":4,"nom":"Le Frère de Shirin","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 16 dégâts à la cible. Puis vos alliés gagnent 12 de garde ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["deg","cible",16]]],["garde","allies",12],["riposte",3],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Il est mort sur les dalles du bazar ; Shirin a lavé la tache elle-même, et la tache est revenue.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ANT123-moins-5","zone":"ANT123","pole":"-","palier":5,"nom":"La Hyène du puits","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 12 de garde. Une Hyène du puits rejoint le combat : 12 PV, frappe 4. L'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["garde","allies",12],["invoque","Hyène du puits",12,4],["affaiblit","cible",2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"La hyène attend près du puits que les familles viennent puiser, chacune à son heure.",
 "budget":"31,4 / 32 (−2 %)"},
{"id":"ANT123-moins-6","zone":"ANT123","pole":"-","palier":6,"nom":"Les Tours de guet","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 16 de garde ; riposte 4 jusqu'à votre prochain tour ; l'attaque de chaque ennemi baisse de 1. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["garde","allies",16],["riposte",4],["affaiblit","tous",1],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"Chaque famille a relevé une tour dans les ruines, et de chaque tour on surveille l'autre.",
 "budget":"31,8 / 36 (−12 %)"},
{"id":"ANT123-moins7","zone":"ANT123","pole":"-","palier":7,"nom":"Les Tombes en rangs","cout":2,"cible":1,
 "effet":"Le sang garde les ruines. 10 à la cible ; alliés +18 de garde ; un Lion des ruines (16 PV, frappe 6). Pose Sang. Si Abîme (consommée) : alliés +12 de garde ; 14 à la cible. Prix : héros −3 PV.",
 "ops":[["deg","cible",10],["garde","allies",18],["invoque","Lion des ruines",16,6],["pose","Sang"],["reveil","Abîme",true,[["garde","allies",12],["deg","cible",14]]],["prixPV",3]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Garde","Combo","Pose Sang","Réveil Abîme","Prix"],
 "ambiance":"Des tombes en rangs entre les colonnes tombées ; chaque famille compte les siennes, et celles de l'autre.",
 "budget":"45,6 sans combo ; réveil +28,4 (62 %)"},
{"id":"ANT123-plus-1","zone":"ANT123","pole":"+","palier":1,"nom":"La Huppe des pistachiers","cout":1,"cible":0,
 "effet":"Une Huppe des pistachiers rejoint le combat : 8 PV, frappe 3. Le héros gagne 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Huppe des pistachiers",8,3],["garde","heros",4],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"La huppe dresse sa crête sur le plus vieux pistachier, et chante comme on frappe à une porte.",
 "budget":"9,7 / 10 (−3 %)"},
{"id":"ANT123-plus-2","zone":"ANT123","pole":"+","palier":2,"nom":"Le Hérisson du verger","cout":1,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 8. Un Hérisson du verger rejoint le combat : 8 PV, frappe 3. Piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["soin","heros",8]]],["invoque","Hérisson du verger",8,3],["pioche",1],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"Le hérisson sort la nuit sous les pistachiers et mange les insectes qui montent vers la résine.",
 "budget":"13,5 / 12,5 (+8 %)"},
{"id":"ANT123-plus-3","zone":"ANT123","pole":"+","palier":3,"nom":"La Huppe de la résine","cout":2,"cible":1,
 "effet":"Une Huppe de la résine rejoint le combat : 14 PV, frappe 4. Vos alliés se soignent de 5 ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Huppe de la résine",14,4],["soin","allies",5],["vulnerable","cible",1],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Marque","Soin","Prix"],
 "ambiance":"Elle plonge son bec dans les larmes de résine, et ses plumes en gardent l'odeur toute la saison.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT123-plus-4","zone":"ANT123","pole":"+","palier":4,"nom":"Le Hérisson des rigoles","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 12. Un Hérisson des rigoles rejoint le combat : 16 PV, frappe 5. L'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["soin","heros",12]]],["invoque","Hérisson des rigoles",16,5],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"Il dort dans les rigoles sèches entre les arrosages, roulé en boule contre la brique crue.",
 "budget":"24,5 / 28 (−12 %)"},
{"id":"ANT123-plus-5","zone":"ANT123","pole":"+","palier":5,"nom":"La Grande Huppe des colonnes","cout":2,"cible":0,
 "effet":"Une Grande Huppe des colonnes rejoint le combat : 16 PV, frappe 6. Vos alliés se soignent de 6 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Grande Huppe des colonnes",16,6],["soin","allies",6],["pioche",1],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Pioche","Prix"],
 "ambiance":"Elle niche dans le chapiteau d'une colonne tombée, et surveille le verger des familles.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ANT123-plus-6","zone":"ANT123","pole":"+","palier":6,"nom":"Le Hérisson-roi du puits","cout":2,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 14. Un Hérisson-roi du puits rejoint le combat : 20 PV, frappe 7. L'attaque de chaque ennemi baisse de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["soin","heros",14]]],["invoque","Hérisson-roi du puits",20,7],["affaiblit","tous",1],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Un vieux hérisson vit au bord du puits ; les enfants des familles le nourrissent, chacun de son côté.",
 "budget":"32,1 / 36 (−11 %)"},
{"id":"ANT123-plus7","zone":"ANT123","pole":"+","palier":7,"nom":"Le Verger qui saigne","cout":2,"cible":1,
 "effet":"La sève coule en bêtes. 11 à la cible ; une Nuée de huppes (26 PV, frappe 9) ; alliés soignés de 8. Pose Braise. Si Racine (consommée) : alliés soignés de 8 ; 16 à la cible. Prix : ennemis soignés de 2.",
 "ops":[["deg","cible",11],["invoque","Nuée de huppes",26,9],["soin","allies",8],["pose","Braise"],["reveil","Racine",true,[["soin","allies",8],["deg","cible",16]]],["ennemiSoin",2]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Soin","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Le verger court entre les colonnes ; la résine coule en ruisseaux, et les familles récoltent sans se parler.",
 "budget":"45,5 sans combo ; réveil +28 (62 %)"}
]
```

---

## 12. Plakun-Mogila, le Tumulus des Pleureuses (ANT042) — Antre · Steppe · Vent · Slave

Forme du récit : les funérailles payées (la pleureuse trop bonne, et le mort qui prend la place des autres). Recette du −7 : le vide (la steppe sans un bruit) ; du +7 : la foule (une pleureuse sur chaque tumulus, et le même nom partout).

**Silence (−)** : le saïga des tumulus → la tortue des steppes → la harde de saïgas → la vieille tortue → le saïga des herbes hautes → la grande harde muette → la Steppe muette. Fil mécanique : **invocations, vocation** (2e emploi sur le Silence, après B ANT147 : autre crochet que `pietine`, autre prix que les PV seuls, bêtes de steppe au lieu de poissons), hésitation et affaiblissement en touche, crochet « la cible est déjà marquée » ; prix : PV et défausse. Autre image que D ANT082. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, dégâts ciblés 4, hésitation 2, garde du héros 2, marque 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (défausse 4, PV 3).

**Chant (+)** : l'alouette du tumulus → la voix louée → la grue des steppes → le nom d'Ivan → la grande grue cendrée → l'enterrement suivant → le Chant de tous les morts. Fil mécanique : exil (la pleureuse chante une fois, et le chant part), soin du héros et dégâts à tous en touche, alouettes et grues, crochet « la cible hésite déjà » ; prix : exil et vos bêtes. Le Chant en invocations est laissé à D (ANT082). Comptes au script (cartes sur 7, `si` et réveil compris) : exil 5, bêtes 4, dégâts ciblés 4, dégâts à tous 3, affaiblissement 2, pioche 2, hésitation 2, garde des alliés 2, soin du héros 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (exil 5, vos bêtes 2).

```json
{"fiche":"ANT042","nom":"Plakun-Mogila, le Tumulus des Pleureuses",
 "recit":"Quand Ivan mourut, sa veuve Vassilissa paya la meilleure pleureuse de la steppe pour chanter sur son tumulus. La pleureuse chanta si bien, et si longtemps, que les gens des villages voisins vinrent l'écouter et pleurèrent Ivan, qu'ils n'avaient pas connu. À l'enterrement suivant, on lui demanda son chant ; elle ne savait que celui-là. Elle le chanta, avec le nom d'Ivan. Depuis, on pleure Ivan à chaque enterrement, et les autres morts n'ont plus de place.",
 "pal":["La steppe sans un bruit jusqu'à l'horizon ; l'herbe ne bruisse plus, les tumulus se taisent, et même le vent passe sans siffler.","Des saïgas paissent sans bruit autour des tumulus ; les femmes de pierre regardent l'est, et les chariots roulent sur des roues graissées.","Une steppe d'herbe haute sous un ciel immense, des tumulus ronds et des femmes de pierre, et un village de terre au bord d'une rivière lente.","Une pleureuse chante sur un tumulus ; les alouettes montent avec sa voix, et des gens arrivent des villages voisins pour l'écouter.","Une pleureuse sur chaque tumulus, des foules autour, et le même nom chanté par toute la steppe ; les grues passent sans qu'on les entende."],
 "pm":"Silence","pp":"Chant"}
```

```json
[
{"id":"ANT042-moins-1","zone":"ANT042","pole":"-","palier":1,"nom":"Le Saïga des tumulus","cout":1,"cible":1,
 "effet":"Un Saïga des tumulus rejoint le combat : 8 PV, frappe 2. La cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Saïga des tumulus",8,2],["hesite","cible"],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Contrôle","Prix"],
 "ambiance":"Le saïga broute au pied du tumulus, le nez pendant, et ne lève pas la tête quand on passe.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT042-moins-2","zone":"ANT042","pole":"-","palier":2,"nom":"La Tortue des steppes","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 8 dégâts à la cible. Une Tortue des steppes rejoint le combat : 10 PV, frappe 2. Le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",8]]],["invoque","Tortue des steppes",10,2],["garde","heros",4],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Elle traverse le chemin des chariots si lentement que les bœufs s'arrêtent pour l'attendre.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ANT042-moins-3","zone":"ANT042","pole":"-","palier":3,"nom":"La Harde de saïgas","cout":2,"cible":1,
 "effet":"Une Harde de saïgas rejoint le combat : 14 PV, frappe 4. La cible est marquée : +2 par coup reçu ; le héros gagne 6 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Harde de saïgas",14,4],["vulnerable","cible",2],["garde","heros",6],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Marque","Garde","Prix"],
 "ambiance":"La harde passe sur la steppe sans un bruit de sabot, comme une ombre de nuage.",
 "budget":"22,8 / 24 (−5 %)"},
{"id":"ANT042-moins-4","zone":"ANT042","pole":"-","palier":4,"nom":"La Vieille Tortue","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 14 dégâts à la cible. Une Vieille Tortue du tumulus rejoint le combat : 18 PV, frappe 4. L'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",14]]],["invoque","Vieille Tortue du tumulus",18,4],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"La vieille tortue vit dans le flanc du tumulus d'Ivan ; elle y était avant Ivan, et y sera après.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT042-moins-5","zone":"ANT042","pole":"-","palier":5,"nom":"Le Saïga des herbes hautes","cout":2,"cible":1,
 "effet":"Un Saïga des herbes hautes rejoint le combat : 18 PV, frappe 7. La cible hésite ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Saïga des herbes hautes",18,7],["hesite","cible"],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Marque","Contrôle","Prix"],
 "ambiance":"Il dresse la tête dans les herbes hautes et regarde le tumulus, comme s'il attendait la voix.",
 "budget":"27,5 / 32 (−14 %)"},
{"id":"ANT042-moins-6","zone":"ANT042","pole":"-","palier":6,"nom":"La Grande Harde muette","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Une Grande Harde de saïgas muets rejoint le combat : 22 PV, frappe 7. L'attaque de chaque ennemi baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["invoque","Grande Harde de saïgas muets",22,7],["affaiblit","tous",1],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Des hardes entières traversent la steppe sans un bruit, et l'herbe se relève derrière eux.",
 "budget":"35,1 / 36 (−2 %)"},
{"id":"ANT042-moins7","zone":"ANT042","pole":"-","palier":7,"nom":"La Steppe muette","cout":2,"cible":1,
 "effet":"La steppe se tait et charge. Un Saïga-roi de la steppe (26 PV, frappe 9) ; 6 à tous ; soin du héros 9. Pose Abîme. Si Givre (consommée) : une Tortue-mère du tumulus (14 PV, frappe 4) ; 16 à la cible. Prix : défaussez 1 carte.",
 "ops":[["invoque","Saïga-roi de la steppe",26,9],["deg","tous",6],["soin","heros",9],["pose","Abîme"],["reveil","Givre",true,[["invoque","Tortue-mère du tumulus",14,4],["deg","cible",16]]],["prixDefausse",1]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Soin","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"La steppe sans un bruit jusqu'à l'horizon ; même le vent passe sans siffler.",
 "budget":"45,7 sans combo ; réveil +29 (63 %)"},
{"id":"ANT042-plus-1","zone":"ANT042","pole":"+","palier":1,"nom":"L'Alouette du tumulus","cout":1,"cible":1,
 "effet":"Une Alouette du tumulus rejoint le combat : 6 PV, frappe 2. L'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["exil"],["invoque","Alouette du tumulus",6,2],["affaiblit","cible",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Affaiblissement","Exil","Prix"],
 "ambiance":"L'alouette monte au-dessus du tumulus en chantant, et redescend quand la pleureuse commence.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT042-plus-2","zone":"ANT042","pole":"+","palier":2,"nom":"La Voix louée","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis la cible hésite ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","hesiteAvant",[["deg","cible",10]]],["exil"],["hesite","cible"],["pioche",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Pioche","Condition","Exil","Prix"],
 "ambiance":"Vassilissa a payé la pleureuse d'une vache et d'un châle ; on trouve cela cher, puis on écoute.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT042-plus-3","zone":"ANT042","pole":"+","palier":3,"nom":"La Grue des steppes","cout":2,"cible":0,
 "effet":"Une Grue des steppes rejoint le combat : 12 PV, frappe 4. 4 dégâts à tous les ennemis ; reprenez en main la dernière carte de votre défausse. Prix : cette carte s'exile.",
 "ops":[["exil"],["invoque","Grue des steppes",12,4],["deg","tous",4],["recup"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Récupération","Exil","Prix"],
 "ambiance":"Les grues passent au-dessus du tumulus en criant, et la pleureuse prend leur cri dans son chant.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ANT042-plus-4","zone":"ANT042","pole":"+","palier":4,"nom":"Le Nom d'Ivan","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 16 dégâts à la cible. Puis la cible hésite ; le héros se soigne de 10 ; vos alliés gagnent 6 de garde. Prix : cette carte s'exile.",
 "ops":[["si","hesiteAvant",[["deg","cible",16]]],["exil"],["hesite","cible"],["soin","heros",10],["garde","allies",6]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Ivan était un homme ordinaire ; dans le chant, il devient bon, fort, et regretté de tous.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"ANT042-plus-5","zone":"ANT042","pole":"+","palier":5,"nom":"La Grande Grue cendrée","cout":2,"cible":1,
 "effet":"Un Grande Grue cendrée rejoint le combat : 16 PV, frappe 5. 6 dégâts à tous les ennemis ; l'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Grande Grue cendrée",16,5],["deg","tous",6],["affaiblit","cible",2],["prixBete",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Affaiblissement","Prix"],
 "ambiance":"La grande grue se pose sur le tumulus voisin, celui d'un autre mort, et danse pour Ivan.",
 "budget":"32,7 / 32 (+2 %)"},
{"id":"ANT042-plus-6","zone":"ANT042","pole":"+","palier":6,"nom":"L'Enterrement suivant","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 18 dégâts à la cible. Puis piochez 1 carte ; vos alliés gagnent 8 de garde ; riposte 6 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["si","hesiteAvant",[["deg","cible",18]]],["exil"],["pioche",1],["garde","allies",8],["riposte",6]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Riposte","Garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"À l'enterrement suivant, la famille paie la même pleureuse ; elle chante le seul chant qu'elle sait.",
 "budget":"31,6 / 36 (−12 %)"},
{"id":"ANT042-plus7","zone":"ANT042","pole":"+","palier":7,"nom":"Le Chant de tous les morts","cout":2,"cible":1,
 "effet":"Toute la steppe pleure Ivan. Une Nuée d'alouettes (18 PV, frappe 6) ; 6 à tous ; soin du héros 12 ; tous marqués (+1). Pose Sang. Si Sceau (consommée) : soin du héros 15 ; 15 à la cible. Prix : bête la plus faible −3 PV.",
 "ops":[["invoque","Nuée d'alouettes",18,6],["deg","tous",6],["soin","heros",12],["vulnerable","tous",1],["pose","Sang"],["reveil","Sceau",true,[["soin","heros",15],["deg","cible",15]]],["prixBete",3]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Marque","Soin","Combo","Pose Sang","Réveil Sceau","Prix"],
 "ambiance":"Une pleureuse sur chaque tumulus, et le même nom chanté par toute la steppe.",
 "budget":"46,8 sans combo ; réveil +30 (64 %)"}
]
```
