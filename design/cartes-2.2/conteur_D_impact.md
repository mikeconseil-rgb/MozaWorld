# Cartes « impact » : conteur D (le Lovecraftien)

Cartes modifiées seulement, d'après `revue-impact.md` (section 2) : cartes fades réécrites, crochets appliqués aux cartes correctes, formes du palier 7 et carte forte de plus de 250 caractères raccourcies (ops, résonance posée et résonance réveillée inchangées). Les ids remplacent ceux de `conteur_D_paliers.md` (cartes de palier) et de `conteur_D.md` (secrets). Les ops hors moteur sont signalées par `a_coder` ; une condition nouvelle s'écrit dans l'op `si` (`vol`, `elan`, `brule`, `vulnerable`, `troisCartes`…), avec un effet vide quand aucune op n'approche. Quand une condition porte sur l'état d'avant la carte (« si elle hésitait déjà », « si elle brûlait déjà »), l'op `si` est placée en tête de la liste, avant l'op qui remplirait la condition. Budget noté « obtenu / cible ».

## Le Fjord de Rames (DON024)

```json
{"id":"DON024-moins-1","zone":"DON024","pole":"-","palier":1,"nom":"Le compte des coups","cout":1,"cible":1,
 "effet":"Si la cible hésitait déjà : 6 dégâts, on l'a comptée un coup de trop. Puis 3 dégâts, et elle hésite ce tour.",
 "ops":[["si","hesite",[["deg","cible",6]]],["deg","cible",3],["hesite","cible"]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Contrôle","Condition"],
 "ambiance":"Cent quarante coups jusqu'au glacier ; le pilote les recompte, et celui qui s'est arrêté pour écouter en reçoit un de trop.",
 "budget":"11 / 10 (3 + hésite 5 + 6 à 50 %)"}
```

```json
{"id":"DON024-moins-3","zone":"DON024","pole":"-","palier":3,"nom":"Le froid dans les poumons","cout":1,"cible":1,
 "effet":"Tous les ennemis hésitent ce tour. 6 dégâts à la cible. Un ennemi qui volait par-dessus retombe gelé : il ne peut plus voler pendant 2 tours. Le froid coûte 4 PV au héros.",
 "ops":[["hesite","tous"],["deg","cible",6],["si","vol",[]],["prixPV",4]],
 "tags":["Donjon","Glace","Pôle −","Contrôle","Dégâts","Anti-vol","Condition","Prix"],
 "ambiance":"L'eau bleue gèle dans les poitrines ; même ce qui volait au-dessus du fjord tombe sur la glace, et n'en repart plus.",
 "budget":"15 / 15 (hésite tous 10 + 6 + anti-vol 3 − 4 PV)",
 "a_coder":"Nouvelle condition « vol » et effet « sansVol » : l'ennemi qui annonçait vol par-dessus perd ce vol et ne peut plus l'annoncer pendant 2 tours ; ses attaques frappent alors la Garde et les bloqueurs."}
```

```json
{"id":"DON024-plus-1","zone":"DON024","pole":"+","palier":1,"nom":"Le même rêve","cout":1,"cible":0,
 "effet":"Piochez 2 cartes, puis défaussez 1 carte au hasard. Une main bandée sort de la glace : 4 PV, frappe 1. Elle attrape le premier ennemi qui vole par-dessus : il frappe la main, pas le héros.",
 "ops":[["pioche",2],["prixDefausse",1],["invoque","Main sous la glace",4,1],["si","vol",[]]],
 "tags":["Donjon","Glace","Pôle +","Pioche","Invocation","Anti-vol","Prix"],
 "ambiance":"Les douze rameurs rêvent la même main qui sort de la glace ; au matin, elle tient une plume de ce qui passait au-dessus.",
 "budget":"11 / 10 (pioche 8 − défausse 3 + main 3,5 + interception 2,5)",
 "a_coder":"La Main sous la glace intercepte : la première attaque « vole par-dessus » du combat la frappe au lieu du héros, comme une bête que le vol ne contourne pas."}
```

```json
{"id":"DON024-plus-3","zone":"DON024","pole":"+","palier":3,"nom":"Le dormeur qui rame","cout":2,"cible":0,
 "effet":"Un dormeur aux bandelettes se lève : 16 PV, frappe 5. Il rame dans votre rythme : les tours où vous jouez 3 cartes ou plus, il frappe une fois de plus. Piochez 1 carte et reprenez la dernière carte de votre défausse.",
 "ops":[["invoque","Dormeur aux bandelettes",16,5],["pioche",1],["recup"],["si","troisCartes",[]]],
 "tags":["Donjon","Glace","Pôle +","Invocation","Pioche","Récupération","Condition"],
 "ambiance":"Il dort, les yeux peints ouverts, et il rame dans votre rythme ; si vous pressez la cadence, il la presse aussi.",
 "budget":"26 / 24 (bête 15,5 + pioche 4 + récup 4 + coup en plus 5 à 50 %)",
 "a_coder":"Nouvelle condition « troisCartes », évaluée à la fin de chaque tour : si le héros a joué 3 cartes ou plus ce tour, le Dormeur aux bandelettes frappe deux fois."}
```

```json
{"id":"DON024-plus-5","zone":"DON024","pole":"+","palier":5,"nom":"Deux dormeurs, un seul rêve","cout":2,"cible":0,
 "effet":"Deux dormeurs jumeaux se lèvent : 14 PV, frappent 4 chacun. Quand un ennemi prend son élan, ils le frappent aussitôt. Piochez 1 ; la prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi gagne 3 de garde.",
 "ops":[["invoque","Dormeur jumeau",14,4],["invoque","Dormeur jumeau",14,4],["pioche",1],["echo"],["ennemiGarde",3],["si","elan",[["deg","cible",8]]]],
 "tags":["Donjon","Glace","Pôle +","Invocation","Pioche","Écho","Anti-élan","Condition","Prix"],
 "ambiance":"Deux dormeurs tournent la tête du même côté, avant le bruit ; quand l'ennemi se ramasse pour frapper, ils sont déjà sur lui.",
 "budget":"34 / 32 (bêtes 26 + pioche 4 + écho 6 − 6 + réaction 8 à 50 %)",
 "a_coder":"Réaction à l'élan : quand un ennemi annonce élan, chaque Dormeur jumeau en jeu le frappe aussitôt (4 chacun), en plus de sa frappe de fin de tour ; le deg 8 sous la condition « elan » l'approche."}
```

```json
{"id":"DON024-plus-6","zone":"DON024","pole":"+","palier":6,"nom":"Le rêve tire les vivants","cout":2,"cible":0,
 "effet":"Reprenez la dernière carte de votre défausse, piochez 2 cartes, ajoutez 2 mana Glace. Un rameur endormi se lève : 18 PV, frappe 6. Si une bête était déjà en jeu : vos alliés gagnent 10 de garde. Votre bête la plus faible perd 4 PV.",
 "ops":[["recup"],["pioche",2],["mana","Glace",2],["invoque","Rameur endormi",18,6],["si","bete",[["garde","allies",10]]],["prixBete",4]],
 "tags":["Donjon","Glace","Pôle +","Récupération","Pioche","Mana","Invocation","Garde","Condition","Prix"],
 "ambiance":"Les vivants dorment mieux sur la barque qu'à terre ; chaque matin, l'un d'eux a les doigts bleus.",
 "budget":"36 / 36 (inchangé, texte raccourci)"}
```

```json
{"id":"DON024-moins7","zone":"DON024","pole":"-","palier":7,"nom":"Les rames rentrées","cout":2,"cible":0,
 "effet":"Le fjord gèle par le fond : 10 dégâts à tous, la garde ennemie tombe, tous hésitent ce tour et perdent 2 d'attaque. Le héros perd 6 PV. Pose Givre. Si Abîme est posée (consommée) : tous deviennent vulnérables 3 et subissent encore 10 dégâts.",
 "ops":[["deg","tous",10],["briseGarde","tous"],["hesite","tous"],["affaiblit",2,"tous"],["prixPV",6],["pose","Givre"],
        ["reveil","Abîme",true,[["vulnerable",3,"tous"],["deg","tous",10]]]],
 "tags":["Donjon","Glace","Forme ultime −7","Dégâts","Perce-garde","Contrôle","Affaiblissement","Marque","Prix","Pose Givre","Réveil Abîme"],
 "ambiance":"On rentre les douze rames ; le fjord gèle par le fond, et les dormeurs, en bas, ouvrent la bouche.",
 "budget":"48,5 (+44,5 si Abîme, soit +92 % ; inchangé, texte raccourci)"}
```

```json
{"id":"DON024-plus7","zone":"DON024","pole":"+","palier":7,"nom":"Le rêve des douze rames","cout":3,"cible":0,
 "effet":"Piochez 3, reprenez la dernière carte défaussée, +4 mana Glace, +1 capacité, écho. Un rameur se lève (10 PV, frappe 4). Ennemis +3 garde. Pose Sceau. Si Racine est posée (consommée) : un rameur de 20 PV frappe 6, piochez 2, alliés +15 garde.",
 "ops":[["pioche",3],["recup"],["mana","Glace",4],["boost"],["echo"],["invoque","Rameur endormi",10,4],["ennemiGarde",3],["pose","Sceau"],
        ["reveil","Racine",true,[["invoque","Équipage du rêve",20,6],["pioche",2],["garde","allies",15]]]],
 "tags":["Donjon","Glace","Forme ultime +7","Pioche","Récupération","Mana","Boost","Écho","Invocation","Prix","Pose Sceau","Réveil Racine"],
 "ambiance":"Les douze rameurs rêvent la même chose ; au réveil, il y a treize paires de mains sur les rames.",
 "budget":"45 (+39 si Racine, soit +87 % ; inchangé, texte raccourci)"}
```

## Les Cavernes de cristal de Balpak (ASS012)

```json
{"id":"ASS012-moins-1","zone":"ASS012","pole":"-","palier":1,"nom":"Une pincée de résine","cout":0,"cible":1,
 "effet":"Si la cible brûlait déjà : chacune de ses brûlures dure 1 tour de plus, la fumée descend. Puis elle brûle de 2 au début de son prochain tour.",
 "ops":[["si","brule",[["brulure","cible",2,1]]],["brulure","cible",2,1]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts dans le temps","Condition"],
 "ambiance":"Une pincée de résine sur une plaie qui fume déjà ; la fumée descend au lieu de monter, et ne s'en va plus.",
 "budget":"4 / 4 (brûlure 2 + prolongation 4 à 50 %)",
 "a_coder":"Nouvelle condition « brule » (la cible brûlait avant cette carte) et effet « prolonge » : chaque brûlure en cours sur la cible gagne 1 tour ; la brûlure 2 sur 1 tour sous si l'approche."}
```

```json
{"id":"ASS012-moins-2","zone":"ASS012","pole":"-","palier":2,"nom":"Le bulletin noirci","cout":1,"cible":0,
 "effet":"Chaque ennemi brûle de 2 au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard. Si la carte défaussée porte une brûlure, elle brûle quand même : chaque ennemi brûle encore de 3.",
 "ops":[["brulure","tous",2,2],["pioche",1],["prixDefausse",1],["si","defausseBrule",[["brulure","tous",3,1]]]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts dans le temps","Pioche","Condition","Prix"],
 "ambiance":"Le scribe jette au feu le bulletin de trop ; celui qui portait déjà de la cendre brûle deux fois, et noircit les autres.",
 "budget":"13,1 / 12,5 (brûlure tous 8,8 + pioche 4 − défausse 3 + 6,6 à 50 %)",
 "a_coder":"Nouvelle condition « defausseBrule » : vraie si la carte défaussée par cette carte contient une op brulure (Torche, une autre carte Cendre…) ; chaque ennemi brûle alors de 3 au début de son prochain tour."}
```

```json
{"id":"ASS012-moins-3","zone":"ASS012","pole":"-","palier":3,"nom":"Les pores bouchés","cout":1,"cible":1,
 "effet":"La garde de tous les ennemis tombe. La cible brûle de 3 au début de ses 3 prochains tours. L'air sec fait tousser : un ennemi qui vole par-dessus perd son vol ce tour. La cendre coûte 3 PV au héros.",
 "ops":[["briseGarde","tous"],["brulure","cible",3,3],["si","vol",[]],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle −","Perce-garde","Dégâts dans le temps","Anti-vol","Condition","Prix"],
 "ambiance":"La cendre colmate les pores du cristal ; l'air devient sec à tousser, et ce qui planait sous la voûte retombe sur les bancs.",
 "budget":"16,5 / 15 (brise-garde tous 7,5 + brûlure 9 + anti-vol 3 − 3 PV)",
 "a_coder":"Condition « vol » : l'ennemi qui annonçait vol par-dessus garde son attaque mais la porte comme une attaque normale ce tour (la Garde, puis les bloqueurs et les bêtes, puis le héros)."}
```

```json
{"id":"ASS012-moins-4","zone":"ASS012","pole":"-","palier":4,"nom":"Loi des Cendres","cout":2,"cible":0,
 "effet":"Chaque ennemi brûle de 5 au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard : votre bulletin brûle avec les autres. Si Braise est posée (gardée) : la brûlure dure 3 tours.",
 "ops":[["brulure","tous",5,2],["pioche",1],["prixDefausse",1],["reveil","Braise",false,[["brulure","tous",5,1]]]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts dans le temps","Pioche","Prix","Réveil Braise"],
 "ambiance":"On vote en brûlant la résine ; là où un feu couve déjà, la loi s'y adosse, et la pointe de cristal ne refroidit plus.",
 "budget":"28,5 / 28 (brûlure tous 22 + pioche 4 − défausse 3 + 11 à 50 %)"}
```

```json
{"id":"ASS012-moins-5","zone":"ASS012","pole":"-","palier":5,"nom":"Les bancs durcis","cout":2,"cible":1,
 "effet":"Si la cible brûlait déjà : elle hésitera aussi au tour suivant. Elle hésite ce tour et brûle de 4 au début de ses 3 prochains tours. Tous les ennemis perdent 2 d'attaque. Défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["hesite","cible"]]],["hesite","cible"],["brulure","cible",4,3],["affaiblit",2,"tous"],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Contrôle","Dégâts dans le temps","Affaiblissement","Condition","Prix"],
 "ambiance":"Les bancs ont cessé de pousser ; ceux qui s'y assoient brûlants s'y collent, et se relèvent un tour plus tard.",
 "budget":"31,5 / 32 (hésite 5 + brûlure 12 + affaiblit tous 15 − défausse 3 + hésite différé 5 à 50 %)",
 "a_coder":"Condition « brule » (la cible brûlait avant cette carte) et hésitation différée : la cible hésite aussi à son prochain tour ; le hesite sous si l'approche (à compter comme une seule hésitation pour la règle du verrou)."}
```

```json
{"id":"ASS012-moins7","zone":"ASS012","pole":"-","palier":7,"nom":"Le Siège de cendre","cout":3,"cible":0,
 "effet":"Le conseil vote à votre place : tous les ennemis hésitent ce tour, leur garde tombe, chacun brûle de 4 pendant 3 tours. Écho. Pose Braise. Si Sceau est posée (consommée) : chaque ennemi brûle encore de 5 pendant 3 tours et devient vulnérable 1.",
 "ops":[["hesite","tous"],["briseGarde","tous"],["brulure","tous",4,3],["echo"],["pose","Braise"],
        ["reveil","Sceau",true,[["brulure","tous",5,3],["vulnerable",1,"tous"]]]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Contrôle","Perce-garde","Dégâts dans le temps","Écho","Pose Braise","Réveil Sceau"],
 "ambiance":"Le dernier scrutin est sec : les bancs se figent, tièdes, et chacun reste assis là où la loi l'a trouvé.",
 "budget":"49,9 (+40,5 si Sceau, soit +81 % ; inchangé, texte raccourci)"}
```

```json
{"id":"ASS012-plus-1","zone":"ASS012","pole":"+","palier":1,"nom":"L'eau du puits","cout":0,"cible":1,
 "effet":"La cible devient vulnérable 1. Si une bête est en jeu : la calcite l'épaissit, votre bête la plus blessée gagne 3 PV maximum et se soigne de 3. Chaque ennemi se soigne de 1.",
 "ops":[["vulnerable",1,"cible"],["si","bete",[["soin","allies",3]]],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Marque","Soin","Condition","Prix"],
 "ambiance":"On verse l'eau du puits sur la bête blessée ; elle ne coule pas, elle est bue, et la peau durcit en calcite rose.",
 "budget":"3,8 / 4 (vulnérable 3 + PV max et soin 6 à 50 % − 2,2)",
 "a_coder":"Effet « pvMax » : la bête alliée la plus blessée gagne 3 PV maximum pour le combat, puis se soigne de 3 ; le soin des alliés sous si l'approche."}
```

```json
{"id":"ASS012-plus-2","zone":"ASS012","pole":"+","palier":2,"nom":"Un pétale sur le banc","cout":1,"cible":1,
 "effet":"Une pousse de calcite se dresse en bloqueur : 6 PV, épines 2 (chaque coup reçu renvoie 2). Chaque soin la fait grossir de 2 PV maximum. Vos alliés se soignent de 3. La cible devient vulnérable 1.",
 "ops":[["invoque","Pousse de calcite",6,0],["soin","allies",3],["vulnerable",1,"cible"]],
 "tags":["Assemblée","Pierre","Pôle +","Bloqueur","Épines","Soin","Marque"],
 "ambiance":"Sur le banc du doyen, un pétale de calcite, épais comme une gencive ; on le frappe, il saigne du cristal, et grossit.",
 "budget":"14 / 12,5 (bloqueur 3 + épines 4 + soin 3 + vulnérable 3 + croissance 1)",
 "a_coder":"La Pousse de calcite est un bloqueur (attaque 0) à épines : chaque coup reçu renvoie 2 dégâts à l'attaquant ; chaque soin qu'elle reçoit lui donne +2 PV maximum. L'invoque à attaque 0 approche le bloqueur."}
```

```json
{"id":"ASS012-plus-3","zone":"ASS012","pole":"+","palier":3,"nom":"Loi de Floraison","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2. Vos alliés se soignent de 8. Piochez 1 carte. Chaque ennemi se soigne de 2. Pour ce combat, chaque soin reçu par un ennemi le rend vulnérable 1 de plus : la plaie fleurit.",
 "ops":[["vulnerable",2,"cible"],["soin","allies",8],["pioche",1],["ennemiSoin",2],["si","soinEnnemi",[["vulnerable",1,"tous"]]]],
 "tags":["Assemblée","Pierre","Pôle +","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"La loi est votée : la calcite fleurit dans toute plaie qu'on referme, rose de gencive, et chaque fleur est une porte.",
 "budget":"16,6 / 15 (vulnérable 6 + soin 8 + pioche 4 − 4,4 + floraison 3)",
 "a_coder":"Effet durable « plaieFleurit » pour le combat : chaque fois qu'un ennemi reçoit un soin (prix ennemiSoin ou intention soin), il gagne vulnérable 1 ; le vulnerable sous la condition « soinEnnemi » approche le premier déclenchement, celui de cette carte."}
```

```json
{"id":"ASS012-plus-4","zone":"ASS012","pole":"+","palier":4,"nom":"Les ongles en fleur","cout":1,"cible":1,
 "effet":"Si la cible était déjà vulnérable : les ongles griffent deux fois. 6 dégâts à la cible, le héros se soigne de la moitié. Puis elle devient vulnérable 2.",
 "ops":[["si","vulnerable",[["deg","cible",6]]],["deg","cible",6],["volVie"],["vulnerable",2,"cible"]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Vol de vie","Marque","Multi-coups","Condition"],
 "ambiance":"Sous les ongles des conseillers, des corolles blanches ; sur une peau déjà ouverte, elles griffent deux fois avant de se refermer.",
 "budget":"19,5 / 17,5 (6 + vol de vie 3 + vulnérable 6 + second coup 9 à 50 %)",
 "a_coder":"Nouvelle condition « vulnerable » (la cible était marquée avant cette carte) : la griffe frappe une seconde fois, comme un coup séparé (la marque s'ajoute à chaque coup, vol de vie compris) ; le deg 6 sous si l'approche."}
```

```json
{"id":"ASS012-plus7","zone":"ASS012","pole":"+","palier":7,"nom":"Le Conseil en fleur","cout":2,"cible":1,
 "effet":"Deux conseillers fleuris (18 PV, frappent 5). Alliés soignés de 10, cible vulnérable 2, piochez 1. Votre bête la plus faible perd 6 PV. Pose Racine. Si Sang est posée (consommée) : 3e conseiller (16 PV, frappe 5), soin 10, tous vulnérables 2.",
 "ops":[["invoque","Conseiller fleuri",18,5],["invoque","Conseiller fleuri",18,5],["soin","allies",10],["vulnerable",2,"cible"],["pioche",1],["prixBete",6],["pose","Racine"],
        ["reveil","Sang",true,[["invoque","Troisième siège",16,5],["soin","allies",10],["vulnerable",2,"tous"]]]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Invocation","Soin","Marque","Pioche","Prix","Pose Racine","Réveil Sang"],
 "ambiance":"Les sièges ont fleuri pendant la séance ; deux conseillers se lèvent, et les pétales poussent dans le sens des veines.",
 "budget":"47 (+40,5 si Sang, soit +86 % ; inchangé, texte raccourci)"}
```

## Les secrets de Tezcamixtli (RES334)

```json
{"id":"RES334-secret1","zone":"RES334","pole":"secret","palier":"fixe","secret":"La baguette entaillée","nom":"Une entaille de plus","cout":0,"cible":1,
 "effet":"La cible devient vulnérable 1 par carte déjà jouée ce tour (au plus 3) : les vieux l'ont comptée une fois de trop.",
 "ops":[["vulnerable",1,"cible"],["si","cartesJouees",[["vulnerable",2,"cible"]]]],
 "tags":["Secret","Utilitaire","Marque","Condition"],
 "ambiance":"Les vieux recomptent les tiges : une entaille de plus que de cultivateurs, et l'entaille en trop porte votre ennemi.",
 "budget":"≈ 6 à 9 (vulnérable 1 par carte déjà jouée, 2 en moyenne, 3 au plus)",
 "a_coder":"Effet « parCarteJouee » : vulnérable égal au nombre de cartes déjà jouées ce tour, au plus 3 ; le vulnérable 1 plus 2 sous la condition « cartesJouees » (2 cartes ou plus déjà jouées) l'approche."}
```

```json
{"id":"RES334-secret2","zone":"RES334","pole":"secret","palier":"fixe","secret":"Bouture de l'Île-Mère","nom":"Bouture de l'Île-Mère","cout":1,"cible":0,
 "effet":"La prochaine carte de zone jouée ce tour a son effet doublé. Si Racine est posée (gardée) : la bouture grossit encore, la carte de zone d'après est doublée aussi.",
 "ops":[["echo"],["reveil","Racine",false,[["echo"]]]],
 "tags":["Secret","Utilitaire","Écho","Réveil Racine"],
 "ambiance":"Une bouture de la taille d'une galette ; là où des racines tiennent déjà le sol, elle grossit de deux mains par jour.",
 "budget":"9 (écho 6 + second écho 6 à 50 %)",
 "a_coder":"Deux échos à la suite : le second doit viser la deuxième carte de zone jouée ce tour, pas redoubler la première."}
```

```json
{"id":"RES334-secret3","zone":"RES334","pole":"secret","palier":"fixe","secret":"Galle de Tezcamixtli","nom":"La ronde des galles","cout":1,"cible":0,
 "effet":"La galle éclate : tous les ennemis dansent et hésitent ce tour. Un ennemi qui volait par-dessus retombe dans la ronde : sa prochaine attaque frappe la Garde. Défaussez 1 carte au hasard. Exil.",
 "ops":[["hesite","tous"],["si","vol",[]],["prixDefausse",1],["exil"]],
 "tags":["Secret","Utilitaire","Contrôle","Anti-vol","Condition","Prix","Exil"],
 "ambiance":"Une galle brune éclate en spores ; tout ce qui passait au-dessus de l'île redescend danser à rebours dans la ronde.",
 "budget":"9 (hésite tous 10 + anti-vol 2 − défausse 3)",
 "a_coder":"Condition « vol » : l'ennemi qui annonçait vol par-dessus perd le vol pour sa prochaine attaque, qui frappe la Garde, puis les bloqueurs et les bêtes."}
```

```json
{"id":"RES334-secret4","zone":"RES334","pole":"secret","palier":"fixe","secret":"La danse à rebours","nom":"L'île qui revient","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte de votre défausse. Ajoutez 1 mana Vent. Si elle avait été défaussée par un prix : elle revient grandie, la prochaine carte de zone jouée ce tour a son effet doublé.",
 "ops":[["recup"],["mana","Vent",1],["si","repriseParPrix",[["echo"]]]],
 "tags":["Secret","Utilitaire","Récupération","Mana","Écho","Condition"],
 "ambiance":"L'île revient porter ce qu'on lui avait arraché ; elle remonte contre le vent, et ce qu'elle rapporte a poussé pendant le voyage.",
 "budget":"10 (récup 4 + mana 3 + écho 6 à 50 %)",
 "a_coder":"Nouvelle condition « repriseParPrix » : vraie si la carte reprise avait été défaussée par un prixDefausse ; l'écho s'applique alors, idéalement à cette carte reprise seulement."}
```

```json
{"id":"RES334-secret5","zone":"RES334","pole":"secret","palier":"fixe","secret":"Le panier du cultivateur manquant","nom":"Le panier encore plein","cout":1,"cible":0,
 "effet":"Piochez 1 carte par bête alliée en jeu (au moins 1, au plus 3) : chaque cultivateur absent rapporte son panier.",
 "ops":[["pioche",1],["si","bete",[["pioche",1]]]],
 "tags":["Secret","Utilitaire","Pioche","Condition"],
 "ambiance":"Sous l'île du nord, les paniers sont encore pleins ; il y en a autant que de choses qui se sont levées pour vous.",
 "budget":"≈ 8 (pioche 4 par bête, 2 en moyenne ; 12 au plus avec 3 bêtes)",
 "a_coder":"Pioche égale au nombre de bêtes alliées en jeu (au moins 1, au plus 3) ; la pioche 1 plus 1 sous la condition « bete » l'approche."}
```

```json
{"id":"RES334-secret6","zone":"RES334","pole":"secret","palier":"fixe","secret":"Le rang de plus","nom":"Le rang que personne n'a semé","cout":0,"cible":1,
 "effet":"Si la cible prend son élan : elle perd 3 d'attaque pour le combat, le rang la dépasse d'une tête. Sinon, elle en perd 1. Piochez 1 carte.",
 "ops":[["si","elan",[["affaiblit",2,"cible"]]],["affaiblit",1,"cible"],["pioche",1]],
 "tags":["Secret","Utilitaire","Affaiblissement","Anti-élan","Pioche","Condition"],
 "ambiance":"Un rang de maïs que personne n'a semé ; quand l'ennemi se dresse pour frapper, le rang se dresse plus haut, d'une tête exactement.",
 "budget":"10 (affaiblit 3 + pioche 4 + affaiblit 2 à 50 % 3)",
 "a_coder":"Nouvelle condition « elan » (la cible a annoncé élan) : elle perd 3 d'attaque au total ; l'affaiblit 2 sous si complète l'affaiblit 1."}
```
