# Lot 1 — Conteur A, le Chroniqueur amer

Six zones à cartes (fiche + 14 cartes chacune) et huit Ressources (fiche légère, sans carte).

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Conventions de points reprises de `cartes-2.2/conteur_A_paliers.md` : « tous » ×2,2 ; hésite tous = 9 ; ignoreGarde = 3 ; `si` compté à 50 % ; soin alliés ×1,5 ; vol de vie = moitié des dégâts ; exil = prix 3 ; prixBete n rend n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5 (un bloqueur sans attaque = PV/2).

Prix : 4 cartes sur 6 (paliers 1 à 6) dans chaque pôle de chaque zone. Boost : une seule fois dans tout le lot (réveil de la forme +7 du Jaugeur de Ta-Senut).

Recettes de récit (jamais deux fois de suite) : CIT016 les deux inscriptions ; DON030 le témoin d'en bas ; DON106 la chronique tronquée ; ANT209 l'inventaire de ruine ; ANT020 le revers ; ASS040 le témoin d'en bas.

Résonances des formes du palier 7 (posée → réveillée) :

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT016 | Braise → Sang | Sceau → Givre |
| DON030 | Abîme → Braise | Braise → Abîme |
| DON106 | Givre → Racine | Racine → Sang |
| ANT209 | Sang → Racine | Racine → Sceau |
| ANT020 | Sang → Givre | Racine → Braise |
| ASS040 | Sceau → Abîme | Abîme → Sceau |

---

## 1. Dezh-Saravand, le Col numéroté (CIT016) — Citadelle · Haute montagne · Pierre · Perse

**Chaos (−)** : la plainte sur le linteau → le mot gratté → la brèche bouchée → les frondeurs du relais → les péages → les feux des pillards → l'Interrègne. Fil mécanique : coups au hasard, riposte, garde de fortune ; on se défend sans chef.
**Ordre (+)** : le cordeau → la borne → le sauf-conduit → la corvée → les portes peintes → la file au sceau → le Col au cordeau. Fil mécanique : bloqueurs sans attaque, garde massive, affaiblissement et hésitation ; on commande, on ne frappe pas.

```json
{"fiche":"CIT016","nom":"Dezh-Saravand, le Col numéroté",
 "recit":"Sur le linteau de la porte, deux textes se chevauchent. Le premier, au ciseau : « Le roi des quatre vallées a tracé ce col au cordeau ; que chaque pierre porte son numéro et chaque voyageur son sceau. » Le second, gratté à la pointe de lance par la garnison de l'interrègne, recouvre le mot « roi » : « Sept hivers sans solde. » Entre les deux, Bahrouz, tailleur de la corvée, avait gravé sa marque, une chèvre, sur chaque pierre du rempart. On la retrouve des deux côtés : dans le mur, et dans les frondes.",
 "pal":["Rempart éventré, pierres numérotées roulées dans l'éboulis, bannières de garnison en loques ocre lessivé ; feux de pillards sur chaque lacet du col.",
        "Brèches bouchées de jarres et de selles, enduit sang-de-bœuf écaillé, relais de poste tenu par des frondeurs qui taxent à leur guise.",
        "Forteresse de pierre rose accrochée au col enneigé, chèvres sur les créneaux, route en lacets à moitié pavée, garnison maigre.",
        "Pavés posés au cordeau, bornes numérotées tous les cent pas, vantaux repeints au bleu de lapis ; files de muletiers qui attendent le sceau.",
        "Col entièrement dallé en terrasses, chaque pierre marquée de son numéro au vermillon, tours de signaux jusqu'à l'horizon ; plus aucun passage libre."],
 "pm":"Chaos","pp":"Ordre"}
```

```json
[
{"id":"CIT016-moins-1","zone":"CIT016","pole":"-","palier":1,"nom":"Sept hivers sans solde","cout":1,"cible":0,
 "effet":"2 coups de 4 dégâts au hasard. Le héros gagne 3 de garde.",
 "ops":[["deg","hasard",4,2],["garde","heros",3]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde"],
 "ambiance":"La garnison grava sa plainte sur le linteau à la pointe de lance, puis tira au hasard sur la route.",
 "budget":"10,4 / 10 (8 + garde 2,4)"},
{"id":"CIT016-moins-2","zone":"CIT016","pole":"-","palier":2,"nom":"Le Mot gratté","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0, puis 9 dégâts ; elle devient vulnérable 1. Prix : le héros perd 2 PV.",
 "ops":[["briseGarde","cible"],["deg","cible",9],["vulnerable","cible",1],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle −","Perce-garde","Dégâts","Marque","Prix"],
 "ambiance":"Le mot « roi » disparut sous les rayures ; on laissa le reste de la phrase, faute de temps.",
 "budget":"13 / 12,5 (brise-garde 3 + 9 + vulnérable 3 − 2 PV)"},
{"id":"CIT016-moins-3","zone":"CIT016","pole":"-","palier":3,"nom":"Brèche bouchée de selles","cout":1,"cible":0,
 "effet":"Le héros gagne 12 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",12],["riposte",4],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Riposte","Prix"],
 "ambiance":"Faute de pierres numérotées, on combla la brèche avec des selles, des jarres et la porte du relais.",
 "budget":"14,6 / 15 (garde 9,6 + riposte 8 − défausse 3)"},
{"id":"CIT016-moins-4","zone":"CIT016","pole":"-","palier":4,"nom":"Frondeurs du relais","cout":2,"cible":0,
 "effet":"Un Frondeur du relais rejoint le combat : 14 PV, frappe 5. Puis 4 coups de 3 dégâts au hasard.",
 "ops":[["invoque","Frondeur du relais",14,5],["deg","hasard",3,4]],
 "tags":["Citadelle","Pierre","Pôle −","Invocation","Dégâts"],
 "ambiance":"Ils taxaient les muletiers au caillou près, et payaient la garnison en promesses de fronde.",
 "budget":"26,5 / 28 (−5 % ; invocation 14,5 + 12)"},
{"id":"CIT016-moins-5","zone":"CIT016","pole":"-","palier":5,"nom":"Le Péage des pillards","cout":2,"cible":0,
 "effet":"8 dégâts à tous. Gagnez 2 mana Pierre ; jusqu'au prochain tour, chaque coup reçu renvoie 6 dégâts. Prix : le héros perd 4 PV.",
 "ops":[["deg","tous",8],["mana","Pierre",2],["riposte",6],["prixPV",4]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Mana","Riposte","Prix"],
 "ambiance":"Chaque lacet du col eut son péage, et chaque péage son chef, qui ne reconnaissait pas celui d'en dessous.",
 "budget":"31,6 / 32 (17,6 + mana 6 + riposte 12 − 4 PV)"},
{"id":"CIT016-moins-6","zone":"CIT016","pole":"-","palier":6,"nom":"Feux sur chaque lacet","cout":1,"cible":0,
 "effet":"Tous les ennemis brûlent : 3 dégâts au début de leurs 2 prochains tours. Puis 3 coups de 4 dégâts au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["brulure","tous",3,2],["deg","hasard",4,3],["ennemiGarde",1]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts dans le temps","Dégâts","Prix"],
 "ambiance":"Les pillards brûlaient les poutres du relais pour se chauffer ; la fumée annonçait le col jusqu'à la plaine.",
 "budget":"23,2 / 22,5 (brûlure tous 13,2 + 12 − garde ennemie 2)"},
{"id":"CIT016-moins7","zone":"CIT016","pole":"-","palier":7,"nom":"L'Interrègne du col","cout":2,"cible":0,
 "effet":"Plus de chef. 6 coups de 5 dégâts au hasard ; la garde de tous les ennemis tombe à 0 ; riposte 6 jusqu'au prochain tour. Pose Braise. Si Sang est posée (consommée) : 15 dégâts à tous. Prix : le héros perd 3 PV.",
 "ops":[["deg","hasard",5,6],["briseGarde","tous"],["riposte",6],["pose","Braise"],["reveil","Sang",true,[["deg","tous",15]]],["prixPV",3]],
 "tags":["Citadelle","Pierre","Forme ultime −7","Dégâts","Perce-garde","Riposte","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"Plus de roi, plus de solde, plus de numéros : la chèvre de Bahrouz roulait désormais dans les frondes.",
 "budget":"45,6 sans combo (30 + brise-garde tous 6,6 + riposte 12 − 3 PV) ; réveil +33 (72 %)"},
{"id":"CIT016-plus-1","zone":"CIT016","pole":"+","palier":1,"nom":"Le Cordeau du roi","cout":0,"cible":1,
 "effet":"Si la Garde est déjà levée, la cible perd 1 d'attaque pour le combat. Puis le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["si","garde",[["affaiblit","cible",1]]],["garde","heros",4],["prixPV",1]],
 "tags":["Citadelle","Pierre","Pôle +","Condition","Affaiblissement","Garde","Prix"],
 "ambiance":"Le premier arpenteur tendit une corde de crin d'un rocher à l'autre ; elle tint lieu de frontière.",
 "budget":"3,7 / 4 (affaiblit 1,5 si garde + garde 3,2 − 1 PV)"},
{"id":"CIT016-plus-2","zone":"CIT016","pole":"+","palier":2,"nom":"Borne numérotée","cout":1,"cible":0,
 "effet":"Une Borne numérotée se dresse : bloqueur de 20 PV, sans attaque. Le héros gagne 3 de garde.",
 "ops":[["invoque","Borne numérotée",20,0],["garde","heros",3]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde"],
 "ambiance":"Tous les cent pas, une borne : le numéro peint au vermillon, la chèvre de Bahrouz gravée au revers.",
 "budget":"12,4 / 12,5 (bloqueur 10 + garde 2,4)"},
{"id":"CIT016-plus-3","zone":"CIT016","pole":"+","palier":3,"nom":"Le Sauf-conduit","cout":1,"cible":1,
 "effet":"La cible hésite ce tour et perd 2 d'attaque pour le combat. Le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","cible"],["affaiblit","cible",2],["garde","heros",8],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Contrôle","Affaiblissement","Garde","Prix"],
 "ambiance":"Sans tablette scellée, le muletier attendait au pied de la tour ; certains y attendirent tout un hiver.",
 "budget":"14,4 / 15 (hésite 5 + affaiblit 6 + garde 6,4 − défausse 3)"},
{"id":"CIT016-plus-4","zone":"CIT016","pole":"+","palier":4,"nom":"La Corvée de Bahrouz","cout":2,"cible":0,
 "effet":"Un Mur de corvée se dresse : bloqueur de 30 PV, sans attaque. Le héros gagne 12 de garde ; tous les ennemis perdent 1 d'attaque. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Mur de corvée",30,0],["garde","heros",12],["affaiblit","tous",1],["prixPV",3]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde","Affaiblissement","Prix"],
 "ambiance":"Bahrouz tailla trois étés sans salaire et signa chaque pierre d'une chèvre que personne ne regardait.",
 "budget":"28,2 / 28 (bloqueur 15 + garde 9,6 + affaiblit tous 6,6 − 3 PV)"},
{"id":"CIT016-plus-5","zone":"CIT016","pole":"+","palier":5,"nom":"Vantaux au bleu de lapis","cout":2,"cible":0,
 "effet":"Le héros gagne 18 de garde. Tous les ennemis perdent 2 d'attaque pour le combat. Piochez 1 carte.",
 "ops":[["garde","heros",18],["affaiblit","tous",2],["pioche",1]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Affaiblissement","Pioche"],
 "ambiance":"On repeignit les vantaux au lapis broyé ; le bleu coûtait plus cher que le bois qu'il couvrait.",
 "budget":"31,6 / 32 (garde 14,4 + affaiblit tous 13,2 + pioche 4)"},
{"id":"CIT016-plus-6","zone":"CIT016","pole":"+","palier":6,"nom":"Muletiers au sceau","cout":1,"cible":1,
 "effet":"Tous les ennemis hésitent ce tour. Le héros gagne 12 de garde ; la cible devient vulnérable 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","tous"],["garde","heros",12],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Contrôle","Garde","Marque","Prix"],
 "ambiance":"File immobile au pied du col : chaque bât attendait l'empreinte de plomb qui l'autorisait à monter.",
 "budget":"21,6 / 22,5 (hésite tous 9 + garde 9,6 + vulnérable 6 − défausse 3)"},
{"id":"CIT016-plus7","zone":"CIT016","pole":"+","palier":7,"nom":"Le Col au cordeau","cout":2,"cible":0,
 "effet":"Édit du col. Une Tour de signaux se dresse (24 PV, frappe 4). Garde +22 ; tous les ennemis perdent 2 d'attaque. Pose Sceau. Si Givre est posée (consommée) : tous hésitent, perdent encore 2 d'attaque, garde +12. La carte s'exile.",
 "ops":[["invoque","Tour de signaux",24,4],["garde","heros",22],["affaiblit","tous",2],["pose","Sceau"],["reveil","Givre",true,[["hesite","tous"],["affaiblit","tous",2],["garde","heros",12]]],["exil"]],
 "tags":["Citadelle","Pierre","Forme ultime +7","Invocation","Garde","Affaiblissement","Combo","Pose Sceau","Réveil Givre","Contrôle","Prix","Exil"],
 "ambiance":"Le col fut dallé jusqu'au dernier lacet, chaque pierre numérotée ; on ne passa plus que par écrit.",
 "budget":"45,8 sans combo (invocation 18 + garde 17,6 + affaiblit tous 13,2 − exil 3) ; réveil +31,8 (69 %)"}
]
```

---

## 2. Les Fours de Thermokleia (DON030) — Donjon · Canyon · Feu · Grecque

**Exil (−)** : le tesson gratté → la main du frère → la descente → les galeries de soufre → ceux d'en bas → les bannis sans foyer → le Contre-Vote. Fil mécanique : gros coups sur une seule cible, perce-garde, bonus « un seul ennemi », cartes qui s'exilent ; on frappe seul.
**Foyer (+)** : la braise portée → les briques du fourneau → la cendre sous les marches → le tour remonté → le foyer commun → les cruches brisées → le Fourneau de la cité. Fil mécanique : brûlures-pièges, bonus « si la cible brûle », garde ; on tient le feu.

```json
{"fiche":"DON030","nom":"Les Fours de Thermokleia",
 "recit":"Kléonikè cuisait les tessons. Chaque printemps, l'assemblée commandait à son four des cruches qu'on brisait sur la place, en haut du canyon, pour graver sur chaque éclat le nom de celui qu'on voulait voir descendre aux galeries de soufre. Elle apprit à reconnaître les mains. L'année où son propre nom sortit, elle reconnut celle de son frère sur trente-sept éclats. Elle descendit avec son tour de potier sur le dos. L'hiver suivant, le foyer commun s'éteignit : personne d'autre ne savait cuire les briques du fourneau.",
 "pal":["Fond du canyon percé de galeries jaune soufre, fumerolles, tessons amoncelés jusqu'aux genoux ; les bannis y ont bâti des fours sans cheminée.",
        "Escaliers taillés vers le bas, cordes de descente élimées, éclats de cruche sur chaque marche ; en haut, le foyer de la place fume à peine.",
        "Canyon rouge brique, ville à flanc de falaise, place aux tessons au sommet, fours de potiers ouverts et vapeur tiède des sources.",
        "Fourneau commun rallumé, briques neuves en terre claire, façades enduites de blanc de céruse ; plus personne ne descend les escaliers.",
        "Le canyon chauffé comme un four, terrasses peintes au cinabre et à l'ocre jaune, foyer immense sur la place ; les galeries d'en bas sont murées."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"DON030-moins-1","zone":"DON030","pole":"-","palier":1,"nom":"Tesson gratté","cout":1,"cible":1,
 "effet":"10 dégâts ; la cible devient vulnérable 1. Prix : la carte s'exile.",
 "ops":[["deg","cible",10],["vulnerable","cible",1],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Marque","Exil","Prix"],
 "ambiance":"Sur l'éclat de cruche encore tiède, on grattait un nom à la pointe de fer ; le sien, jamais.",
 "budget":"10 / 10 (10 + vulnérable 3 − exil 3)"},
{"id":"DON030-moins-2","zone":"DON030","pole":"-","palier":2,"nom":"La Main du frère","cout":0,"cible":1,
 "effet":"6 dégâts ; s'il ne reste qu'un ennemi, 4 dégâts de plus. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",6],["si","seul",[["deg","cible",4]]],["prixPV",3]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Kléonikè connaissait cette écriture penchée : c'était celle des comptes du four, tenus par son frère.",
 "budget":"5 / 5 (6 + 2 si seul − 3 PV)"},
{"id":"DON030-moins-3","zone":"DON030","pole":"-","palier":3,"nom":"Le Tour sur le dos","cout":1,"cible":1,
 "effet":"10 dégâts qui ignorent la garde ; s'il ne reste qu'un ennemi, 6 dégâts de plus.",
 "ops":[["deg","cible",10],["ignoreGarde"],["si","seul",[["deg","cible",6]]]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Perce-garde","Condition"],
 "ambiance":"Elle descendit les escaliers du canyon, son tour de potier sanglé dans le dos, sans se retourner.",
 "budget":"16 / 15 (10 + ignore-garde 3 + 3 si seul)"},
{"id":"DON030-moins-4","zone":"DON030","pole":"-","palier":4,"nom":"Galeries de soufre","cout":2,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0, puis 11 dégâts à tous. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",11],["prixDefausse",1]],
 "tags":["Donjon","Feu","Pôle −","Perce-garde","Dégâts","Prix"],
 "ambiance":"Les bannis taillaient le soufre que la cité d'en haut leur achetait par panier, au prix fixé d'en haut.",
 "budget":"27,8 / 28 (brise-garde tous 6,6 + 24,2 − défausse 3)"},
{"id":"DON030-moins-5","zone":"DON030","pole":"-","palier":5,"nom":"Ceux d'en bas","cout":2,"cible":1,
 "effet":"24 dégâts qui ignorent la garde ; le héros se soigne de la moitié des dégâts infligés. Prix : le héros perd 4 PV ; la carte s'exile.",
 "ops":[["deg","cible",24],["ignoreGarde"],["volVie"],["prixPV",4],["exil"]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Perce-garde","Vol de vie","Exil","Prix"],
 "ambiance":"Ceux d'en bas n'avaient plus de nom au registre ; ils remontaient parfois la nuit, et on les entendait.",
 "budget":"32 / 32 (24 + ignore-garde 3 + vol de vie 12 − 4 PV − exil 3)"},
{"id":"DON030-moins-6","zone":"DON030","pole":"-","palier":6,"nom":"Bannis sans foyer","cout":1,"cible":1,
 "effet":"12 dégâts ; la cible devient vulnérable 1. S'il ne reste qu'un ennemi, il hésite ce tour et subit 10 dégâts de plus.",
 "ops":[["deg","cible",12],["vulnerable","cible",1],["si","seul",[["hesite","cible"],["deg","cible",10]]]],
 "tags":["Donjon","Feu","Pôle −","Dégâts","Marque","Condition","Contrôle"],
 "ambiance":"Au fond, les fours n'avaient pas de cheminée ; les bannis cuisaient leur pain dans la fumée de soufre.",
 "budget":"22,5 / 22,5 (12 + vulnérable 3 + 7,5 si seul)"},
{"id":"DON030-moins7","zone":"DON030","pole":"-","palier":7,"nom":"Le Contre-Vote","cout":2,"cible":1,
 "effet":"Rituel des tessons. Tous les ennemis deviennent vulnérables 3 et perdent leur garde ; 22 dégâts à la cible, qui ignorent la garde. Pose Abîme. Si Braise est posée (consommée) : 14 dégâts à tous. Prix : défaussez 2 cartes.",
 "ops":[["vulnerable","tous",3],["briseGarde","tous"],["deg","cible",22],["ignoreGarde"],["pose","Abîme"],["reveil","Braise",true,[["deg","tous",14]]],["prixDefausse",2]],
 "tags":["Donjon","Feu","Forme ultime −7","Marque","Perce-garde","Dégâts","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Les bannis brisèrent à leur tour des cruches et y gravèrent, un par un, les noms de la place.",
 "budget":"45,4 sans combo (vulnérable tous 19,8 + brise-garde tous 6,6 + 22 + ignore-garde 3 − défausse 6) ; réveil +30,8 (68 %)"},
{"id":"DON030-plus-1","zone":"DON030","pole":"+","palier":1,"nom":"La Braise portée","cout":1,"cible":1,
 "effet":"4 dégâts ; la cible brûle : 4 dégâts au début de ses 2 prochains tours. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",4],["brulure","cible",4,2],["prixPV",2]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Dégâts dans le temps","Prix"],
 "ambiance":"On portait la braise du foyer commun dans un tesson creux, à mains nues, jusqu'aux fours du quartier.",
 "budget":"10 / 10 (4 + brûlure 8 − 2 PV)"},
{"id":"DON030-plus-2","zone":"DON030","pole":"+","palier":2,"nom":"Briques du fourneau","cout":1,"cible":1,
 "effet":"Le héros gagne 8 de garde ; la cible brûle : 3 dégâts au début de ses 2 prochains tours.",
 "ops":[["garde","heros",8],["brulure","cible",3,2]],
 "tags":["Donjon","Feu","Pôle +","Garde","Dégâts dans le temps"],
 "ambiance":"Kléonikè seule savait le mélange : argile du canyon, paille hachée et une poignée de cendre de l'ancien foyer.",
 "budget":"12,4 / 12,5 (garde 6,4 + brûlure 6)"},
{"id":"DON030-plus-3","zone":"DON030","pole":"+","palier":3,"nom":"Cendre sous les marches","cout":2,"cible":0,
 "effet":"Piège. Tous les ennemis brûlent : 3 dégâts au début de leurs 3 prochains tours ; puis 3 dégâts à tous. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["brulure","tous",3,3],["deg","tous",3],["ennemiGarde",1]],
 "tags":["Donjon","Feu","Pôle +","Piège","Dégâts dans le temps","Dégâts","Prix"],
 "ambiance":"On répandit la cendre chaude sur les marches de la descente, pour que nul ne remonte sans s'y brûler.",
 "budget":"24,4 / 24 (brûlure tous 19,8 + 6,6 − garde ennemie 2)"},
{"id":"DON030-plus-4","zone":"DON030","pole":"+","palier":4,"nom":"Le Tour remonté","cout":1,"cible":1,
 "effet":"Le héros gagne 6 de garde ; 8 dégâts à la cible, et 8 de plus si elle brûle.",
 "ops":[["garde","heros",6],["deg","cible",8],["si","brule",[["deg","cible",8]]]],
 "tags":["Donjon","Feu","Pôle +","Garde","Dégâts","Condition"],
 "ambiance":"Un tour de potier remonta par la corde, sans potière ; on le remit en marche près du foyer.",
 "budget":"16,8 / 17,5 (garde 4,8 + 8 + 4 si brûle)"},
{"id":"DON030-plus-5","zone":"DON030","pole":"+","palier":5,"nom":"Le Foyer commun","cout":2,"cible":0,
 "effet":"Tous les ennemis brûlent : 4 dégâts au début de leurs 3 prochains tours. Le héros gagne 12 de garde. Prix : le héros perd 4 PV.",
 "ops":[["brulure","tous",4,3],["garde","heros",12],["prixPV",4]],
 "tags":["Donjon","Feu","Pôle +","Dégâts dans le temps","Garde","Prix"],
 "ambiance":"Le grand foyer de la place ne devait jamais s'éteindre ; on y nourrissait le feu avant les enfants.",
 "budget":"32 / 32 (brûlure tous 26,4 + garde 9,6 − 4 PV)"},
{"id":"DON030-plus-6","zone":"DON030","pole":"+","palier":6,"nom":"Cruches pour la place","cout":2,"cible":1,
 "effet":"6 coups de 5 dégâts au hasard ; si la cible brûle, 6 dégâts à tous. La cible devient vulnérable 2. Prix : chaque ennemi se soigne de 2.",
 "ops":[["deg","hasard",5,6],["si","brule",[["deg","tous",6]]],["vulnerable","cible",2],["ennemiSoin",2]],
 "tags":["Donjon","Feu","Pôle +","Dégâts","Condition","Marque","Prix"],
 "ambiance":"Le four cuisait des cruches qu'on ne remplissait jamais : elles finissaient toutes en éclats, sur la place.",
 "budget":"38,2 / 36 (+6 % ; 30 + 6,6 si brûle + vulnérable 6 − soin ennemi 4,4)"},
{"id":"DON030-plus7","zone":"DON030","pole":"+","palier":7,"nom":"Le Fourneau de la cité","cout":2,"cible":1,
 "effet":"Le foyer devient gardien : le Fourneau commun se dresse (30 PV, frappe 6) ; tous les ennemis brûlent 4 sur 3 tours. Pose Braise. Si Abîme est posée (consommée) : 18 dégâts à la cible qui ignorent la garde, soin 10. Prix : 3 PV.",
 "ops":[["invoque","Fourneau commun",30,6],["brulure","tous",4,3],["pose","Braise"],["reveil","Abîme",true,[["deg","cible",18],["ignoreGarde"],["soin","heros",10]]],["prixPV",3]],
 "tags":["Donjon","Feu","Forme ultime +7","Invocation","Dégâts dans le temps","Combo","Pose Braise","Réveil Abîme","Dégâts","Perce-garde","Soin","Prix"],
 "ambiance":"On rebâtit le fourneau en briques neuves, trop grand pour la place ; il chauffa la falaise entière.",
 "budget":"47,4 sans combo (invocation 24 + brûlure tous 26,4 − 3 PV) ; réveil +31 (65 %)"}
]
```

---

## 3. Le Baray sec de Romeas-Kor (DON106) — Donjon · Steppe · Vent · Khmère

**Mort (−)** : la poussière de digue → le vent qui boit → les houes dans le remblai → les vannes murées → le temple vide → le registre rongé → la Steppe reprend le Bassin. Fil mécanique : dégâts à tous, affaiblissement de tous, pièges ; la steppe use tout le monde, le héros compris.
**Vie (+)** : le riz du tribut → l'eau qui tient → les lotus → les rizières → les vannes rouvertes → la crue → le Bassin qui déborde. Fil mécanique : vol de vie et soin sur de gros coups ciblés ; le prix est que l'eau soigne aussi l'ennemi.

```json
{"fiche":"DON106","nom":"Le Baray sec de Romeas-Kor",
 "recit":"Registre des digues, sur feuilles de latanier cousues. An 1 du Bassin : le souverain ordonne un réservoir au milieu de la steppe, pour que le vent apprenne à boire ; la corvée est payée en riz du tribut. An 6 : l'eau tient ; on grave sur la digue le nom des donateurs. An 11 : la corvée est doublée pour bâtir le temple de l'île. Ans 12 à 19 : feuilles rongées. An 20 : la contremaîtresse Srey Pov fait murer les vannes, de l'intérieur. Dans la digue, on a retrouvé des houes.",
 "pal":["Bassin vide craquelé en dalles de boue sèche, digues éventrées, temple de l'île décapé par le sable jusqu'à la latérite ; des rafales sans une goutte de pluie.",
        "Herbe rase et jaune, vase fendue en écailles, balustrades-serpents à demi ensevelies ; des manches de houe affleurent dans le remblai.",
        "Steppe venteuse autour d'un grand réservoir peu profond, digues de latérite rouge, temple de grès sur son île, roseaux couchés par le vent.",
        "Eau haute et verte, rizières sur les talus, lotus aux vannes, bas-reliefs de grès lavés ; buffles et bateliers sur les canaux.",
        "La steppe noyée jusqu'à l'horizon, herbes plus hautes qu'un homme ; du temple ne dépasse qu'un toit de grès couvert de hérons, posé sur l'eau comme une île."],
 "pm":"Mort","pp":"Vie"}
```

```json
[
{"id":"DON106-moins-1","zone":"DON106","pole":"-","palier":1,"nom":"Poussière de digue","cout":0,"cible":0,
 "effet":"2 dégâts à tous ; s'il ne reste qu'un ennemi, 2 dégâts de plus. Prix : le héros perd 1 PV.",
 "ops":[["deg","tous",2],["si","seul",[["deg","cible",2]]],["prixPV",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Le vent ramassait la latérite des digues et la portait, rouge, jusque dans les jarres de riz.",
 "budget":"4,4 / 4 (4,4 + 1 si seul − 1 PV)"},
{"id":"DON106-moins-2","zone":"DON106","pole":"-","palier":2,"nom":"Le Vent apprend à boire","cout":1,"cible":0,
 "effet":"Tous les ennemis perdent 1 d'attaque pour le combat et subissent 3 dégâts.",
 "ops":[["affaiblit","tous",1],["deg","tous",3]],
 "tags":["Donjon","Vent","Pôle −","Affaiblissement","Dégâts"],
 "ambiance":"Le souverain avait promis que la steppe boirait ; ce fut le vent qui but le réservoir, saison après saison.",
 "budget":"13,2 / 12,5 (affaiblit tous 6,6 + 6,6)"},
{"id":"DON106-moins-3","zone":"DON106","pole":"-","palier":3,"nom":"Houes dans le remblai","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0, puis 5 coups de 3 dégâts au hasard. Prix : le héros perd 3 PV.",
 "ops":[["briseGarde","cible"],["deg","hasard",3,5],["prixPV",3]],
 "tags":["Donjon","Vent","Pôle −","Perce-garde","Dégâts","Prix"],
 "ambiance":"Les terrassiers de la corvée doublée restèrent dans le remblai, leurs houes posées en travers comme des étais.",
 "budget":"15 / 15 (brise-garde 3 + 15 − 3 PV)"},
{"id":"DON106-moins-4","zone":"DON106","pole":"-","palier":4,"nom":"Vannes murées","cout":2,"cible":1,
 "effet":"Piège. 9 dégâts à tous ; tous les ennemis perdent 1 d'attaque et la cible hésite ce tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",9],["affaiblit","tous",1],["hesite","cible"],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Piège","Dégâts","Affaiblissement","Contrôle","Prix"],
 "ambiance":"Srey Pov fit murer les vannes avec la brique du temple ; le mortier garde encore l'empreinte de ses doigts.",
 "budget":"28,4 / 28 (19,8 + affaiblit tous 6,6 + hésite 5 − défausse 3)"},
{"id":"DON106-moins-5","zone":"DON106","pole":"-","palier":5,"nom":"Le Temple vide","cout":2,"cible":0,
 "effet":"10 dégâts à tous ; tous les ennemis brûlent : 2 dégâts au début de leurs 2 prochains tours.",
 "ops":[["deg","tous",10],["brulure","tous",2,2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Dégâts dans le temps"],
 "ambiance":"Le vent entre par les portes du sanctuaire et ressort en sifflant entre les balustres des fenêtres.",
 "budget":"30,8 / 32 (22 + brûlure tous 8,8)"},
{"id":"DON106-moins-6","zone":"DON106","pole":"-","palier":6,"nom":"Feuilles rongées","cout":2,"cible":1,
 "effet":"5 coups de 6 dégâts au hasard ; tous les ennemis perdent 1 d'attaque ; la cible devient vulnérable 1. Prix : le héros perd 4 PV.",
 "ops":[["deg","hasard",6,5],["affaiblit","tous",1],["vulnerable","cible",1],["prixPV",4]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Affaiblissement","Marque","Prix"],
 "ambiance":"Huit années manquent au registre ; les termites ont laissé la reliure intacte et mangé tout le reste.",
 "budget":"35,6 / 36 (30 + affaiblit tous 6,6 + vulnérable 3 − 4 PV)"},
{"id":"DON106-moins7","zone":"DON106","pole":"-","palier":7,"nom":"La Steppe reprend le Bassin","cout":2,"cible":1,
 "effet":"Tempête de latérite. Tous les ennemis perdent 2 d'attaque, brûlent 3 sur 3 tours et subissent 7 dégâts. Pose Givre. Si Racine est posée (consommée) : 30 dégâts à la cible, qui ignorent la garde. Prix : le héros perd 3 PV.",
 "ops":[["affaiblit","tous",2],["brulure","tous",3,3],["deg","tous",7],["pose","Givre"],["reveil","Racine",true,[["deg","cible",30],["ignoreGarde"]]],["prixPV",3]],
 "tags":["Donjon","Vent","Forme ultime −7","Affaiblissement","Dégâts dans le temps","Dégâts","Combo","Pose Givre","Réveil Racine","Perce-garde","Prix"],
 "ambiance":"Le sable combla le bassin jusqu'aux marches du temple ; le nom des donateurs fut le premier effacé.",
 "budget":"45,4 sans combo (affaiblit tous 13,2 + brûlure tous 19,8 + 15,4 − 3 PV) ; réveil +33 (73 %)"},
{"id":"DON106-plus-1","zone":"DON106","pole":"+","palier":1,"nom":"Riz du tribut","cout":1,"cible":1,
 "effet":"6 dégâts ; le héros se soigne de 4.",
 "ops":[["deg","cible",6],["soin","heros",4]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin"],
 "ambiance":"Chaque terrassier touchait sa mesure de riz au pied de la digue, pesée au fléau de bronze du percepteur.",
 "budget":"10 / 10 (6 + soin 4)"},
{"id":"DON106-plus-2","zone":"DON106","pole":"+","palier":2,"nom":"L'Eau tient","cout":1,"cible":1,
 "effet":"10 dégâts ; le héros se soigne de la moitié des dégâts infligés et gagne 2 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",10],["volVie"],["garde","heros",2],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Vol de vie","Garde","Prix"],
 "ambiance":"La sixième année, l'eau monta jusqu'au troisième gradin de grès, et les crapauds revinrent avant les hommes.",
 "budget":"13,6 / 12,5 (+9 % ; 10 + vol de vie 5 + garde 1,6 − défausse 3)"},
{"id":"DON106-plus-3","zone":"DON106","pole":"+","palier":3,"nom":"Lotus aux vannes","cout":2,"cible":1,
 "effet":"12 dégâts. Le héros se soigne de 8 et gagne 10 de garde. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["deg","cible",12],["soin","heros",8],["garde","heros",10],["ennemiGarde",2]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Garde","Prix"],
 "ambiance":"Les lotus bloquèrent les vannes à mi-course ; personne n'osa les arracher, ni fermer pour de bon.",
 "budget":"24 / 24 (12 + soin 8 + garde 8 − garde ennemie 4)"},
{"id":"DON106-plus-4","zone":"DON106","pole":"+","palier":4,"nom":"Rizières sur le talus","cout":1,"cible":1,
 "effet":"10 dégâts ; le héros se soigne de la moitié des dégâts infligés. Gagnez 1 mana Vent.",
 "ops":[["deg","cible",10],["volVie"],["mana","Vent",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Vol de vie","Mana"],
 "ambiance":"Les familles de la corvée repiquèrent du riz sur la digue, avant que le temple fixe la dîme.",
 "budget":"18 / 17,5 (10 + vol de vie 5 + mana 3)"},
{"id":"DON106-plus-5","zone":"DON106","pole":"+","palier":5,"nom":"Srey Pov rouvre les vannes","cout":2,"cible":1,
 "effet":"9 dégâts à tous ; la cible hésite ce tour ; le héros se soigne de 10. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","tous",9],["hesite","cible"],["soin","heros",10],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Contrôle","Soin","Prix"],
 "ambiance":"Elle avait muré les vannes de l'intérieur ; elle les rouvrit de même, une brique par nuit, à tâtons.",
 "budget":"32,6 / 32 (19,8 + hésite 5 + soin 10 − soin ennemi 2,2)"},
{"id":"DON106-plus-6","zone":"DON106","pole":"+","palier":6,"nom":"Crue dans la steppe","cout":2,"cible":1,
 "effet":"22 dégâts ; le héros se soigne de la moitié des dégâts infligés et gagne 10 de garde. Prix : chaque ennemi se soigne de 2.",
 "ops":[["deg","cible",22],["volVie"],["garde","heros",10],["ennemiSoin",2]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Vol de vie","Garde","Prix"],
 "ambiance":"L'eau passa par-dessus les digues et couvrit l'herbe rase ; les pasteurs de la steppe durent apprendre la barque.",
 "budget":"36,6 / 36 (22 + vol de vie 11 + garde 8 − soin ennemi 4,4)"},
{"id":"DON106-plus7","zone":"DON106","pole":"+","palier":7,"nom":"Le Bassin qui déborde","cout":2,"cible":0,
 "effet":"Crue. Les Buffles de la digue entrent au combat (20 PV, frappe 6). 6 dégâts à tous ; le héros se soigne de 12 et gagne 4 de garde. Pose Racine. Si Sang est posée (consommée) : 8 dégâts à tous, soin 14. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Buffles de la digue",20,6],["deg","tous",6],["soin","heros",12],["garde","heros",4],["pose","Racine"],["reveil","Sang",true,[["deg","tous",8],["soin","heros",14]]],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Forme ultime +7","Invocation","Dégâts","Soin","Garde","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Le réservoir déborda sur la steppe ; les buffles gagnèrent le temple à la nage, le bouvier derrière eux.",
 "budget":"45,2 sans combo (invocation 19 + 13,2 + soin 12 + garde 3,2 − soin ennemi 2,2) ; réveil +31,6 (70 %)"}
]
```

---

## 4. La Ménagerie de Rukhsabad (ANT209) — Antre · Cité en ruines · Pierre · Moghole

**Mort (−)** : le guépard titré → les rations de Faïzou → les vautours → la trompe par la jali → la chasse sans maître → la meute maigre → la Grande Battue. Fil mécanique : bêtes fragiles qui frappent fort, bonus « si une bête est en jeu », la bête la plus faible paie le prix.
**Vie (+)** : la paonne → les rigoles → l'éléphanteau → la cornaline replacée → le jardin → l'éléphante de tête → la Ménagerie ouverte. Fil mécanique : bêtes robustes, soin des alliés, garde ; on fait durer la harde.

```json
{"fiche":"ANT209","nom":"La Ménagerie de Rukhsabad",
 "recit":"Ce qu'on a relevé dans la cour des fauves. Un collier de guépard en velours cramoisi, dont la plaque de cuivre porte un rang de cour supérieur à celui du gouverneur. Un registre de rations, de la main du gardien Faïzou : la colonne des bêtes s'allonge, celle des palefreniers raccourcit, puis s'arrête. Une jali de grès dont on a scié les entrelacs pour laisser passer une trompe. Un mur d'incrustations où la cornaline manque, remplacée par de la brique peinte en rouge. Les guépards, eux, chassent toujours dans les rues, en ligne, comme on les a dressés.",
 "pal":["Rues désertes de grès rouge passé, incrustations arrachées, jalis brisées ; des guépards maigres aux colliers délavés patrouillent entre les tombeaux.",
        "Cour des fauves aux cages ouvertes, auges de pierre vides, vautours sur les coupoles écaillées ; des éléphants osseux dans les écuries.",
        "Cité de grès rose à moitié écroulée, jardin aux quatre canaux à sec, pavillons de marbre fendus ; bêtes et pillards s'évitent.",
        "Canaux du jardin qui coulent à nouveau, herbes hautes entre les dalles, paons dans les arcades ; des éléphanteaux jouent dans les bassins.",
        "Hardes libres dans la salle des audiences, guépards couchés sur le trône de grès, éléphants au bain dans le bassin impérial ; des paons sur les grilles."],
 "pm":"Mort","pp":"Vie"}
```

```json
[
{"id":"ANT209-moins-1","zone":"ANT209","pole":"-","palier":1,"nom":"Guépard au collier","cout":1,"cible":0,
 "effet":"Un Guépard au collier rejoint le combat : 8 PV, frappe 4.",
 "ops":[["invoque","Guépard au collier",8,4]],
 "tags":["Antre","Pierre","Pôle −","Invocation"],
 "ambiance":"Il portait au cou un rang de cour supérieur à celui du gouverneur, gravé sur une plaque de cuivre.",
 "budget":"10 / 10 (invocation 4 + 6)"},
{"id":"ANT209-moins-2","zone":"ANT209","pole":"-","palier":2,"nom":"Les Rations de Faïzou","cout":0,"cible":1,
 "effet":"4 dégâts ; si une bête est en jeu, 4 dégâts de plus. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["deg","cible",4],["si","bete",[["deg","cible",4]]],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Faïzou retranchait la viande des palefreniers pour remplir la colonne des fauves ; le registre restait toujours juste.",
 "budget":"5 / 5 (4 + 2 si bête − 1)"},
{"id":"ANT209-moins-3","zone":"ANT209","pole":"-","palier":3,"nom":"Vautour des coupoles","cout":1,"cible":1,
 "effet":"Un Vautour des coupoles rejoint le combat : 6 PV, frappe 5. La garde de la cible tombe à 0, puis 5 dégâts. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Vautour des coupoles",6,5],["briseGarde","cible"],["deg","cible",5],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Perce-garde","Dégâts","Prix"],
 "ambiance":"Les vautours se posèrent sur les coupoles le jour où les gardiens cessèrent de leur jeter les restes.",
 "budget":"16,5 / 15 (+10 % ; invocation 10,5 + brise-garde 3 + 5 − 2 PV)"},
{"id":"ANT209-moins-4","zone":"ANT209","pole":"-","palier":4,"nom":"La Trompe par la jali","cout":2,"cible":1,
 "effet":"Un Éléphant de remploi rejoint le combat : 20 PV, frappe 6. La garde de la cible tombe à 0, puis 6 dégâts.",
 "ops":[["invoque","Éléphant de remploi",20,6],["briseGarde","cible"],["deg","cible",6]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Perce-garde","Dégâts"],
 "ambiance":"On scia les entrelacs de grès pour laisser passer une trompe affamée ; l'éléphant mangea le jardin entier.",
 "budget":"28 / 28 (invocation 19 + brise-garde 3 + 6)"},
{"id":"ANT209-moins-5","zone":"ANT209","pole":"-","palier":5,"nom":"Chasse sans maître","cout":2,"cible":1,
 "effet":"14 dégâts ; la cible perd 2 d'attaque et devient vulnérable 2. Si une bête est en jeu, 8 dégâts à tous. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["deg","cible",14],["affaiblit","cible",2],["vulnerable","cible",2],["si","bete",[["deg","tous",8]]],["prixBete",3]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Marque","Condition","Prix"],
 "ambiance":"Dressés pour la battue impériale, les guépards rabattent encore les passants ; personne ne sonne plus la fin.",
 "budget":"31,8 / 32 (14 + affaiblit 6 + vulnérable 6 + 8,8 si bête − 3)"},
{"id":"ANT209-moins-6","zone":"ANT209","pole":"-","palier":6,"nom":"Les Colliers sans cou","cout":1,"cible":1,
 "effet":"La Meute maigre rejoint le combat : 10 PV, frappe 9. 7 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Meute maigre",10,9],["deg","cible",7],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Dans la cour traînent des colliers de velours vides ; plus loin rôdent des bêtes sans collier, bien plus maigres.",
 "budget":"22,5 / 22,5 (invocation 18,5 + 7 − 3 PV)"},
{"id":"ANT209-moins7","zone":"ANT209","pole":"-","palier":7,"nom":"La Grande Battue","cout":2,"cible":0,
 "effet":"Battue. 6 coups de 6 dégâts au hasard ; tous les ennemis deviennent vulnérables 2 et perdent 1 d'attaque. Pose Sang. Si Racine est posée (consommée) : un Guépard du rang (16 PV, frappe 10) surgit, 8 dégâts. Prix : votre bête la plus faible perd 8 PV.",
 "ops":[["deg","hasard",6,6],["vulnerable","tous",2],["affaiblit","tous",1],["pose","Sang"],["reveil","Racine",true,[["invoque","Guépard du rang",16,10],["deg","cible",8]]],["prixBete",8]],
 "tags":["Antre","Pierre","Forme ultime −7","Dégâts","Marque","Affaiblissement","Combo","Pose Sang","Réveil Racine","Invocation","Prix"],
 "ambiance":"Sans empereur pour la rappeler, la battue ne s'arrêta jamais ; elle rabat désormais tout ce qui bouge.",
 "budget":"47,8 sans combo (36 + vulnérable tous 13,2 + affaiblit tous 6,6 − bête 8) ; réveil +31 (65 %)"},
{"id":"ANT209-plus-1","zone":"ANT209","pole":"+","palier":1,"nom":"Paonne du parterre","cout":1,"cible":0,
 "effet":"Une Paonne du parterre rejoint le combat : 14 PV, frappe 2. Le héros gagne 3 de garde. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Paonne du parterre",14,2],["garde","heros",3],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"Les paons du jardin ont survécu à la cour ; ils crient encore aux heures où sonnaient les audiences.",
 "budget":"10,4 / 10 (invocation 10 + garde 2,4 − 2 PV)"},
{"id":"ANT209-plus-2","zone":"ANT209","pole":"+","palier":2,"nom":"Les Rigoles rouvertes","cout":1,"cible":0,
 "effet":"Vos alliés se soignent de 6 ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","allies",6],["garde","heros",8],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Soin","Garde","Prix"],
 "ambiance":"Quelqu'un désensabla les rigoles du jardin ; l'eau retrouva seule la pente tracée par l'architecte.",
 "budget":"12,4 / 12,5 (soin alliés 9 + garde 6,4 − défausse 3)"},
{"id":"ANT209-plus-3","zone":"ANT209","pole":"+","palier":3,"nom":"Éléphanteau des écuries","cout":2,"cible":0,
 "effet":"Un Éléphanteau des écuries rejoint le combat : 26 PV, frappe 4. Le héros se soigne de 5.",
 "ops":[["invoque","Éléphanteau des écuries",26,4],["soin","heros",5]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin"],
 "ambiance":"Né dans l'écurie impériale vide, il n'a jamais porté de palanquin ni connu la pique d'un cornac.",
 "budget":"24 / 24 (invocation 19 + soin 5)"},
{"id":"ANT209-plus-4","zone":"ANT209","pole":"+","palier":4,"nom":"La Cornaline replacée","cout":2,"cible":0,
 "effet":"Un Couple de guépards libres rejoint le combat : 18 PV, frappe 6. Vos alliés se soignent de 5 ; le héros gagne 8 de garde. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["invoque","Couple de guépards libres",18,6],["soin","allies",5],["garde","heros",8],["ennemiGarde",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Garde","Prix"],
 "ambiance":"Un tailleur sans commande remit la cornaline dans le mur, pierre par pierre, à la place de la brique peinte.",
 "budget":"27,9 / 28 (invocation 18 + soin alliés 7,5 + garde 6,4 − garde ennemie 4)"},
{"id":"ANT209-plus-5","zone":"ANT209","pole":"+","palier":5,"nom":"Le Jardin aux quatre canaux","cout":1,"cible":0,
 "effet":"Le héros gagne 10 de garde et pioche 1 carte. Si une bête est en jeu, vos alliés se soignent de 8.",
 "ops":[["garde","heros",10],["pioche",1],["si","bete",[["soin","allies",8]]]],
 "tags":["Antre","Pierre","Pôle +","Garde","Pioche","Condition","Soin"],
 "ambiance":"Le jardin fut tracé pour un seul souverain ; les guépards y dorment aujourd'hui en travers des allées.",
 "budget":"18 / 20 (−10 % ; garde 8 + pioche 4 + 6 si bête)"},
{"id":"ANT209-plus-6","zone":"ANT209","pole":"+","palier":6,"nom":"L'Éléphante de tête","cout":2,"cible":0,
 "effet":"L'Éléphante de tête rejoint le combat : 40 PV, frappe 8. Vos alliés se soignent de 4. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Éléphante de tête",40,8],["soin","allies",4],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Elle mène la harde par l'ancienne porte des audiences, que plus aucun garde ne songe à fermer.",
 "budget":"35 / 36 (invocation 32 + soin alliés 6 − 3 PV)"},
{"id":"ANT209-plus7","zone":"ANT209","pole":"+","palier":7,"nom":"La Ménagerie ouverte","cout":2,"cible":0,
 "effet":"Toutes les cages s'ouvrent : une Paonne (12 PV, frappe 2), un Guépard libre (14 PV, frappe 6) et une Éléphante (24 PV, frappe 5) entrent ; alliés soignés de 4. Pose Racine. Si Sceau est posée (consommée) : piochez 3, garde +15, alliés soignés de 6.",
 "ops":[["invoque","Paonne",12,2],["invoque","Guépard libre",14,6],["invoque","Éléphante",24,5],["soin","allies",4],["pose","Racine"],["reveil","Sceau",true,[["pioche",3],["garde","heros",15],["soin","allies",6]]]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Soin","Combo","Pose Racine","Réveil Sceau","Pioche","Garde"],
 "ambiance":"On rouvrit le registre de Faïzou à la dernière page pour y noter les naissances, sans colonne des rations.",
 "budget":"50,5 sans combo (invocations 9 + 16 + 19,5 + soin alliés 6) ; réveil +33 (65 %)"}
]
```

---

## 5. Le Quai gelé de Kar-Šumirak (ANT020) — Antre · Fjord · Glace · Mésopotamienne

**Sang (−)** : le dogue du temple → la libation → l'ours en cage → la porte tenue ouverte → l'ourse blessée → le compte des bêtes → le Bas-relief de la chasse. Fil mécanique : bêtes agressives payées en PV, vol de vie, bonus « héros sous la moitié de ses PV ».
**Sève (+)** : le renne de halage → les pins en terrasses → le castor → la résine → l'élan → la sève des greniers → la Pinède sur la tour. Fil mécanique : bêtes de trait, riposte, affaiblissement ; on englue l'ennemi au lieu de le saigner.

```json
{"fiche":"ANT020","nom":"Le Quai gelé de Kar-Šumirak",
 "recit":"Les bas-reliefs de Kar-Šumirak furent payés au poids de l'ours tué. Ils montrent le roi Iddin-Ahu seul sur la glace du fjord, l'arc tendu devant des ours blancs qui bondissent ; l'inscription en clous lui attribue quarante bêtes en une saison, la fondation du quai, des greniers et des pinèdes plantées en terrasses. Le sculpteur n'a rien oublié : la barque royale, le parasol, la libation de sang versée sur la glace. Il a seulement laissé, dans un coin du dernier panneau, la porte de la cage, et la main du valet qui la tient ouverte.",
 "pal":["Glace du fjord tachée de sang-de-bœuf passé, cages de cèdre éventrées, autels de brique crue qui suintent ; des ours affamés rôdent sur le quai.",
        "Briques crues fendues par le gel, bitume écaillé sur les cales, traces de traîneaux rougies ; dogues du temple enchaînés aux bornes.",
        "Fjord bleu-vert entre deux falaises, quai de brique crue et de bitume, tour à degrés sous le givre, pinèdes sombres sur les pentes.",
        "Pinèdes en terrasses jusqu'au quai, coulées de résine ambrée sur les briques ; rennes de halage qui tirent des troncs sur la glace.",
        "La tour à degrés couverte de pins, cascades de résine figée sur les gradins ; les bas-reliefs disparaissent sous l'ambre, le roi et ses ours pris dedans."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"ANT020-moins-1","zone":"ANT020","pole":"-","palier":1,"nom":"Dogue du temple","cout":1,"cible":0,
 "effet":"Un Dogue du temple rejoint le combat : 10 PV, frappe 5. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Dogue du temple",10,5],["prixPV",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Prix"],
 "ambiance":"On nourrissait les dogues du temple avec le sang des libations, pour qu'ils apprennent l'odeur du roi.",
 "budget":"10,5 / 10 (invocation 12,5 − 2 PV)"},
{"id":"ANT020-moins-2","zone":"ANT020","pole":"-","palier":2,"nom":"Libation sur la glace","cout":1,"cible":1,
 "effet":"7 dégâts ; le héros se soigne de la moitié des dégâts infligés. S'il a moins de la moitié de ses PV, 4 dégâts de plus.",
 "ops":[["deg","cible",7],["volVie"],["si","blesse",[["deg","cible",4]]]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Vol de vie","Condition"],
 "ambiance":"Le sang gelait avant de toucher la glace ; les prêtres le ramassaient en éclats, comme du corail.",
 "budget":"12,5 / 12,5 (7 + vol de vie 3,5 + 2 si blessé)"},
{"id":"ANT020-moins-3","zone":"ANT020","pole":"-","palier":3,"nom":"L'Ours de la cage","cout":2,"cible":1,
 "effet":"Un Ours de la cage rejoint le combat : 20 PV, frappe 8. 6 dégâts à la cible. Prix : le héros perd 4 PV.",
 "ops":[["invoque","Ours de la cage",20,8],["deg","cible",6],["prixPV",4]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Les cages de cèdre arrivaient du sud par bateau, et coûtaient plus cher que les ours qu'on y enfermait.",
 "budget":"24 / 24 (invocation 22 + 6 − 4 PV)"},
{"id":"ANT020-moins-4","zone":"ANT020","pole":"-","palier":4,"nom":"La Porte tenue ouverte","cout":1,"cible":1,
 "effet":"10 dégâts ; la cible devient vulnérable 1. Si une bête est en jeu, 6 dégâts à tous. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","cible",10],["vulnerable","cible",1],["si","bete",[["deg","tous",6]]],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Le valet tenait la porte de la cage d'une main ; de l'autre, la corde qui devait la refermer.",
 "budget":"17,6 / 17,5 (10 + vulnérable 3 + 6,6 si bête − 2)"},
{"id":"ANT020-moins-5","zone":"ANT020","pole":"-","palier":5,"nom":"L'Ourse blessée","cout":2,"cible":1,
 "effet":"Une Ourse blessée rejoint le combat : 16 PV, frappe 10. 10 dégâts à la cible ; le héros se soigne de la moitié. Prix : le héros perd 5 PV.",
 "ops":[["invoque","Ourse blessée",16,10],["deg","cible",10],["volVie"],["prixPV",5]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"La flèche royale ne l'avait pas tuée ; on la remit en cage pour la chasse suivante, plus furieuse encore.",
 "budget":"33 / 32 (invocation 23 + 10 + vol de vie 5 − 5 PV)"},
{"id":"ANT020-moins-6","zone":"ANT020","pole":"-","palier":6,"nom":"Quarante bêtes en une saison","cout":2,"cible":1,
 "effet":"La garde de la cible tombe à 0, puis 16 dégâts ; le héros se soigne de la moitié. S'il a moins de la moitié de ses PV, 10 dégâts à tous.",
 "ops":[["briseGarde","cible"],["deg","cible",16],["volVie"],["si","blesse",[["deg","tous",10]]]],
 "tags":["Antre","Glace","Pôle −","Perce-garde","Dégâts","Vol de vie","Condition"],
 "ambiance":"L'inscription compte quarante ours abattus ; le registre du port compte quarante-trois cages livrées au quai.",
 "budget":"38 / 36 (+6 % ; brise-garde 3 + 16 + vol de vie 8 + 11 si blessé)"},
{"id":"ANT020-moins7","zone":"ANT020","pole":"-","palier":7,"nom":"Le Bas-relief de la chasse","cout":2,"cible":1,
 "effet":"La chasse devient image. 24 dégâts à la cible, qui ignorent la garde ; vol de vie. Tous les ennemis deviennent vulnérables 2. Pose Sang. Si Givre est posée (consommée) : tous hésitent et subissent 10 dégâts. Prix : le héros perd 6 PV.",
 "ops":[["deg","cible",24],["ignoreGarde"],["volVie"],["vulnerable","tous",2],["pose","Sang"],["reveil","Givre",true,[["hesite","tous"],["deg","tous",10]]],["prixPV",6]],
 "tags":["Antre","Glace","Forme ultime −7","Dégâts","Perce-garde","Vol de vie","Marque","Combo","Pose Sang","Réveil Givre","Contrôle","Prix"],
 "ambiance":"Le sculpteur montra le roi seul face aux ours ; il fallut trois valets pour tenir la pose du modèle.",
 "budget":"46,2 sans combo (24 + ignore-garde 3 + vol de vie 12 + vulnérable tous 13,2 − 6 PV) ; réveil +31 (67 %)"},
{"id":"ANT020-plus-1","zone":"ANT020","pole":"+","palier":1,"nom":"Renne de halage","cout":1,"cible":0,
 "effet":"Un Renne de halage rejoint le combat : 12 PV, frappe 3.",
 "ops":[["invoque","Renne de halage",12,3]],
 "tags":["Antre","Glace","Pôle +","Invocation"],
 "ambiance":"Il tirait les troncs sur la glace jusqu'au quai, où l'on gravait sur chacun le nom du roi.",
 "budget":"10,5 / 10 (invocation 6 + 4,5)"},
{"id":"ANT020-plus-2","zone":"ANT020","pole":"+","palier":2,"nom":"Pins en terrasses","cout":1,"cible":0,
 "effet":"Le héros gagne 8 de garde ; tous les ennemis perdent 1 d'attaque ; riposte 2 jusqu'au prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",8],["affaiblit","tous",1],["riposte",2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Garde","Affaiblissement","Riposte","Prix"],
 "ambiance":"On planta les pins en gradins sur la falaise, comme une tour à degrés que personne n'aurait à cuire.",
 "budget":"14 / 12,5 (+12 % ; garde 6,4 + affaiblit tous 6,6 + riposte 4 − défausse 3)"},
{"id":"ANT020-plus-3","zone":"ANT020","pole":"+","palier":3,"nom":"Castor des digues","cout":2,"cible":1,
 "effet":"Un Castor des digues rejoint le combat : 18 PV, frappe 4. La cible perd 1 d'attaque ; riposte 4 jusqu'au prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Castor des digues",18,4],["affaiblit","cible",1],["riposte",4],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Affaiblissement","Riposte","Prix"],
 "ambiance":"Les castors barrèrent le torrent avec les troncs marqués au nom du roi, écorce et inscription comprises.",
 "budget":"24 / 24 (invocation 15 + affaiblit 3 + riposte 8 − garde ennemie 2)"},
{"id":"ANT020-plus-4","zone":"ANT020","pole":"+","palier":4,"nom":"Résine sur les flèches","cout":1,"cible":0,
 "effet":"Tous les ennemis perdent 1 d'attaque pour le combat ; jusqu'au prochain tour, chaque coup reçu renvoie 5 dégâts.",
 "ops":[["affaiblit","tous",1],["riposte",5]],
 "tags":["Antre","Glace","Pôle +","Affaiblissement","Riposte"],
 "ambiance":"Collées de résine fraîche, les flèches ne quittaient plus le carquois ; les ours vécurent un hiver de plus.",
 "budget":"16,6 / 17,5 (affaiblit tous 6,6 + riposte 10)"},
{"id":"ANT020-plus-5","zone":"ANT020","pole":"+","palier":5,"nom":"Élan des pinèdes","cout":2,"cible":1,
 "effet":"Un Élan des pinèdes rejoint le combat : 24 PV, frappe 6. La cible perd 2 d'attaque ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Élan des pinèdes",24,6],["affaiblit","cible",2],["garde","heros",8],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Affaiblissement","Garde","Prix"],
 "ambiance":"Les élans descendirent au quai brouter l'écorce des poutres, et la tour à degrés pencha d'un pouce.",
 "budget":"30,4 / 32 (invocation 21 + affaiblit 6 + garde 6,4 − défausse 3)"},
{"id":"ANT020-plus-6","zone":"ANT020","pole":"+","palier":6,"nom":"La Sève des greniers","cout":2,"cible":0,
 "effet":"Riposte 8 jusqu'au prochain tour. Le héros gagne 16 de garde ; tous les ennemis perdent 1 d'attaque. Gagnez 1 mana Glace. Prix : le héros perd 3 PV.",
 "ops":[["riposte",8],["garde","heros",16],["affaiblit","tous",1],["mana","Glace",1],["prixPV",3]],
 "tags":["Antre","Glace","Pôle +","Riposte","Garde","Affaiblissement","Mana","Prix"],
 "ambiance":"On scella les greniers d'orge à la résine de pin ; elle tint mieux que les sceaux-cylindres des intendants.",
 "budget":"35,4 / 36 (riposte 16 + garde 12,8 + affaiblit tous 6,6 + mana 3 − 3 PV)"},
{"id":"ANT020-plus7","zone":"ANT020","pole":"+","palier":7,"nom":"La Pinède sur la tour","cout":2,"cible":0,
 "effet":"La tour reverdit. La Pinède vivante se dresse (40 PV, frappe 3) ; tous les ennemis perdent 2 d'attaque ; riposte 5 jusqu'au prochain tour. Pose Racine. Si Braise est posée (consommée) : la résine s'embrase, tous brûlent 6 sur 3 tours.",
 "ops":[["invoque","Pinède vivante",40,3],["affaiblit","tous",2],["riposte",5],["pose","Racine"],["reveil","Braise",true,[["brulure","tous",6,3]]]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Affaiblissement","Riposte","Combo","Pose Racine","Réveil Braise","Dégâts dans le temps"],
 "ambiance":"Les racines descellèrent la brique crue gradin par gradin ; la tour à degrés devint une colline de pins.",
 "budget":"47,7 sans combo (invocation 24,5 + affaiblit tous 13,2 + riposte 10) ; réveil +39,6 (83 %)"}
]
```

---

## 6. Le Jaugeur de Ta-Senut (ASS040) — Assemblée · Récif · Eau · Égyptienne

**Sécheresse (−)** : le cran regravé → la loi de l'Année bonne → les galettes d'orge → le corail blanchi → l'édit des pêcheries → le récif à nu → la Loi de l'Étiage. Fil mécanique : lois qui affaiblissent et marquent tous les ennemis, hésitation, pioche fine ; l'assemblée taxe l'adversaire jusqu'à l'os.
**Déluge (+)** : l'éclat de l'ancienne échelle → la mer monte → les pêcheurs refusent → la loi de la Haute Eau → le pilier submergé → le corail remis → le Déluge du Jaugeur. Fil mécanique : pioche, récupération, écho et vagues de dégâts à tous ; la mer brasse la main.

```json
{"fiche":"ASS040","nom":"Le Jaugeur de Ta-Senut",
 "recit":"Nebet nettoyait les crans. Trois fois l'an, elle plongeait le long du pilier de grès planté dans le récif et grattait au couteau les coraux qui mangeaient les graduations, pour que l'assemblée des notables puisse lire la hauteur de la mer et fixer l'impôt des pêcheries. La quatrième année, on lui fit regraver les crans un empan plus bas. Elle ne posa pas de question ; on la payait en galettes d'orge. Toutes les années suivantes furent déclarées bonnes. Nebet gardait dans une jarre les éclats de l'ancienne échelle.",
 "pal":["Récif à sec et blanchi, coraux morts comme de la chaux écaillée, pilier de grès dressé hors de l'eau ; des croûtes de sel dans les lagunes.",
        "Mer basse, flaques tièdes entre des coraux brunis, crans du pilier à l'air libre ; percepteurs assis dans des barques échouées.",
        "Lagune turquoise sur le récif, pilier gradué à moitié immergé, pêcheurs en barques de papyrus, coraux roses et poissons rayés.",
        "Mer haute sur le récif, crans du pilier sous l'eau, cabanes de pêche sur pilotis ; des amulettes de faïence bleue flottent entre les barques.",
        "Récif noyé sous une mer verte, pilier englouti ; dans la salle de l'assemblée inondée, les bancs des notables servent de récif aux poissons-perroquets."],
 "pm":"Sécheresse","pp":"Déluge"}
```

```json
[
{"id":"ASS040-moins-1","zone":"ASS040","pole":"-","palier":1,"nom":"Le Cran regravé","cout":0,"cible":1,
 "effet":"La cible perd 1 d'attaque pour le combat. Défaussez 1 carte au hasard, puis piochez 1 carte.",
 "ops":[["affaiblit","cible",1],["prixDefausse",1],["pioche",1]],
 "tags":["Assemblée","Eau","Pôle −","Affaiblissement","Pioche","Prix"],
 "ambiance":"Nebet regrava le cran un empan plus bas, au couteau, sous l'eau, et reçut deux galettes d'orge en remontant.",
 "budget":"4 / 4 (affaiblit 3 + pioche 4 − défausse 3)"},
{"id":"ASS040-moins-2","zone":"ASS040","pole":"-","palier":2,"nom":"Loi de l'Année bonne","cout":1,"cible":0,
 "effet":"Loi. Tous les ennemis perdent 1 d'attaque pour le combat et deviennent vulnérables 1. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","tous",1],["vulnerable","tous",1],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Marque","Prix"],
 "ambiance":"L'assemblée vota que la mer lue sur le pilier était haute ; l'année était donc bonne, et l'impôt plein.",
 "budget":"12,2 / 12,5 (affaiblit tous 6,6 + vulnérable tous 6,6 − 1 PV)"},
{"id":"ASS040-moins-3","zone":"ASS040","pole":"-","palier":3,"nom":"Galettes d'orge","cout":1,"cible":1,
 "effet":"La cible hésite ce tour et perd 2 d'attaque pour le combat. Piochez 1 carte.",
 "ops":[["hesite","cible"],["affaiblit","cible",2],["pioche",1]],
 "tags":["Assemblée","Eau","Pôle −","Contrôle","Affaiblissement","Pioche"],
 "ambiance":"On cuisait les galettes de la plongeuse dans le four de l'assemblée, avec le sel raclé sur le récif.",
 "budget":"15 / 15 (hésite 5 + affaiblit 6 + pioche 4)"},
{"id":"ASS040-moins-4","zone":"ASS040","pole":"-","palier":4,"nom":"Corail blanchi","cout":2,"cible":1,
 "effet":"La garde de tous les ennemis tombe à 0 ; ils perdent 2 d'attaque. La cible devient vulnérable 2. Piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["affaiblit","tous",2],["vulnerable","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Perce-garde","Affaiblissement","Marque","Pioche","Prix"],
 "ambiance":"La mer baissa et le corail blanchit au soleil ; les notables firent chauler leurs façades du même blanc.",
 "budget":"26,8 / 28 (brise-garde tous 6,6 + affaiblit tous 13,2 + vulnérable 6 + pioche 4 − défausse 3)"},
{"id":"ASS040-moins-5","zone":"ASS040","pole":"-","palier":5,"nom":"Édit des pêcheries","cout":1,"cible":1,
 "effet":"Loi. Gagnez 2 mana Eau. La cible hésite ce tour et devient vulnérable 2. Piochez 1 carte.",
 "ops":[["mana","Eau",2],["hesite","cible"],["vulnerable","cible",2],["pioche",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Mana","Contrôle","Marque","Pioche"],
 "ambiance":"Chaque barque devait un panier par cran de mer lu sur le pilier ; les crans, eux, ne bougeaient plus.",
 "budget":"21 / 20 (mana 6 + hésite 5 + vulnérable 6 + pioche 4)"},
{"id":"ASS040-moins-6","zone":"ASS040","pole":"-","palier":6,"nom":"Le Récif à nu","cout":2,"cible":0,
 "effet":"Tous les ennemis hésitent ce tour, perdent 2 d'attaque et leur garde, et deviennent vulnérables 1. Piochez 1 carte. Prix : le héros perd 4 PV.",
 "ops":[["hesite","tous"],["affaiblit","tous",2],["briseGarde","tous"],["vulnerable","tous",1],["pioche",1],["prixPV",4]],
 "tags":["Assemblée","Eau","Pôle −","Contrôle","Affaiblissement","Perce-garde","Marque","Pioche","Prix"],
 "ambiance":"Le récif sortit de l'eau ; on marchait à pied sec jusqu'au pilier pour y lire une mer absente.",
 "budget":"35,4 / 36 (hésite tous 9 + affaiblit tous 13,2 + brise-garde tous 6,6 + vulnérable tous 6,6 + pioche 4 − 4 PV)"},
{"id":"ASS040-moins7","zone":"ASS040","pole":"-","palier":7,"nom":"La Loi de l'Étiage","cout":2,"cible":1,
 "effet":"Loi perpétuelle. Tous les ennemis hésitent, perdent 3 d'attaque et deviennent vulnérables 2 ; gagnez 2 mana Eau. Pose Sceau. Si Abîme est posée (consommée) : 27 dégâts à la cible, qui ignorent la garde.",
 "ops":[["hesite","tous"],["affaiblit","tous",3],["vulnerable","tous",2],["mana","Eau",2],["pose","Sceau"],["reveil","Abîme",true,[["deg","cible",27],["ignoreGarde"]]]],
 "tags":["Assemblée","Eau","Forme ultime −7","Loi","Contrôle","Affaiblissement","Marque","Mana","Combo","Pose Sceau","Réveil Abîme","Dégâts","Perce-garde"],
 "ambiance":"L'assemblée décréta l'étiage perpétuel et grava la loi sur le pilier, à hauteur d'homme, enfin lisible à sec.",
 "budget":"48 sans combo (hésite tous 9 + affaiblit tous 19,8 + vulnérable tous 13,2 + mana 6) ; réveil +30 (63 %)"},
{"id":"ASS040-plus-1","zone":"ASS040","pole":"+","palier":1,"nom":"L'Éclat de l'ancienne échelle","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte de votre défausse ; 1 dégât à tous. Prix : le héros perd 2 PV.",
 "ops":[["recup"],["deg","tous",1],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Récupération","Dégâts","Prix"],
 "ambiance":"Dans la jarre de Nebet, chaque éclat de corail gardait un trait de l'ancien cran, à la vraie hauteur.",
 "budget":"4,2 / 4 (récup 4 + 2,2 − 2 PV)"},
{"id":"ASS040-plus-2","zone":"ASS040","pole":"+","palier":2,"nom":"La Mer monte d'un empan","cout":1,"cible":0,
 "effet":"Piochez 2 cartes ; 2 dégâts à tous.",
 "ops":[["pioche",2],["deg","tous",2]],
 "tags":["Assemblée","Eau","Pôle +","Pioche","Dégâts"],
 "ambiance":"Un empan, exactement ce qu'on avait retranché au pilier ; la mer le reprit en une seule marée.",
 "budget":"12,4 / 12,5 (pioche 8 + 4,4)"},
{"id":"ASS040-plus-3","zone":"ASS040","pole":"+","palier":3,"nom":"Les Pêcheurs refusent l'impôt","cout":1,"cible":0,
 "effet":"Tous les ennemis hésitent ce tour ; 2 dégâts à tous ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["hesite","tous"],["deg","tous",2],["pioche",1],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Contrôle","Dégâts","Pioche","Prix"],
 "ambiance":"Les barques restèrent amarrées au pilier noyé ; aucun panier ne partit vers la salle de l'assemblée.",
 "budget":"15,4 / 15 (hésite tous 9 + 4,4 + pioche 4 − garde ennemie 2)"},
{"id":"ASS040-plus-4","zone":"ASS040","pole":"+","palier":4,"nom":"Loi de la Haute Eau","cout":2,"cible":0,
 "effet":"Loi. 8 dégâts à tous ; piochez 2 cartes ; la prochaine carte de zone jouée ce tour a son effet doublé. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",8],["pioche",2],["echo"],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Pioche","Écho","Prix"],
 "ambiance":"Votée dans une salle où l'eau montait aux chevilles, la loi fut gravée au-dessus des précédentes, plus haut.",
 "budget":"28,6 / 28 (17,6 + pioche 8 + écho 6 − défausse 3)"},
{"id":"ASS040-plus-5","zone":"ASS040","pole":"+","palier":5,"nom":"Le Pilier submergé","cout":2,"cible":0,
 "effet":"10 dégâts à tous ; tous les ennemis hésitent ce tour ; reprenez la dernière carte de la défausse. Prix : le héros perd 3 PV.",
 "ops":[["deg","tous",10],["hesite","tous"],["recup"],["prixPV",3]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Contrôle","Récupération","Prix"],
 "ambiance":"Le pilier disparut sous la mer ; plus personne ne pouvait lire la hauteur des eaux, ni la contester.",
 "budget":"32 / 32 (22 + hésite tous 9 + récup 4 − 3 PV)"},
{"id":"ASS040-plus-6","zone":"ASS040","pole":"+","palier":6,"nom":"Nebet remet le corail","cout":1,"cible":0,
 "effet":"Piochez 2 cartes ; reprenez la dernière carte de la défausse ; 2 dégâts à tous ; la prochaine carte de zone jouée ce tour a son effet doublé.",
 "ops":[["pioche",2],["recup"],["deg","tous",2],["echo"]],
 "tags":["Assemblée","Eau","Pôle +","Pioche","Récupération","Dégâts","Écho"],
 "ambiance":"Elle replongea avec sa jarre et recolla les éclats à la résine, cran après cran, à la bonne hauteur.",
 "budget":"22,4 / 22,5 (pioche 8 + récup 4 + 4,4 + écho 6)"},
{"id":"ASS040-plus7","zone":"ASS040","pole":"+","palier":7,"nom":"Le Déluge du Jaugeur","cout":2,"cible":0,
 "effet":"La mer vote. Piochez 3 cartes ; 12 dégâts à tous ; tous hésitent ; écho. Pose Abîme. Si Sceau est posée (consommée) : +1 de capacité ce tour, piochez 2 cartes et 9 dégâts à tous. Prix : le héros perd 4 PV.",
 "ops":[["pioche",3],["deg","tous",12],["hesite","tous"],["echo"],["pose","Abîme"],["reveil","Sceau",true,[["boost"],["pioche",2],["deg","tous",9]]],["prixPV",4]],
 "tags":["Assemblée","Eau","Forme ultime +7","Pioche","Dégâts","Contrôle","Écho","Combo","Pose Abîme","Réveil Sceau","Boost","Prix"],
 "ambiance":"La salle de l'assemblée fut noyée jusqu'aux chapiteaux ; les registres d'impôt flottèrent vers le large, illisibles.",
 "budget":"49,4 sans combo (pioche 12 + 26,4 + hésite tous 9 + écho 6 − 4 PV) ; réveil +33,8 (68 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

```json
{"fiche":"RES167","nom":"Le Sémantron de Pétrokhora",
 "recit":"Les moines de Pétrokhora pendirent à la falaise une planche de buis que le vent frappait seul, pour appeler aux offices sans payer de sonneur. Le percepteur de la province taxa le monastère au nombre de coups entendus. Les moines calèrent la planche. Le vent, lui, continua.",
 "pal":["Une planche de buis fendue qui cogne la falaise, ermitages creusés dans la roche à l'enduit écaillé ; un souffle maigre tourne dans les niches.",
        "Planches neuves pendues à chaque niche, cordes de chanvre qui vibrent, icônes repeintes au vermillon ; le vent remonte la falaise en rafales régulières."]}
```

```json
{"fiche":"RES296","nom":"La Saline de Haute-Orbière",
 "recit":"Le chapitre de Haute-Orbière tailla ses pinacles dans le sel gemme, faute de pierre à vingt lieues. Chaque printemps, frère Anselme remplaçait ce que la rosée avait fondu. Une année de disette, le chapitre vendit la nef bloc par bloc, pour saler le poisson du carême.",
 "pal":["Ogives de sel ébréchées, pinacles fondus en moignons, sol craquelé d'un blanc sale ; quelques blocs taillés oubliés au pied d'une grue de bois.",
        "Nef de sel gemme rose rouverte en carrière, gradins de taille, chariots chargés de blocs ; le soleil couchant rougit les remplages de sel."]}
```

```json
{"fiche":"RES091","nom":"Le Carn d'Eithlenn",
 "recit":"Chaque clan qui passait le col ajoutait une pierre au carn d'Eithlenn, preuve qu'il avait payé son passage au roi de la vallée. Le roi mourut sans héritier. Les clans continuèrent d'empiler, par habitude, et personne ne vint jamais réclamer le tribut.",
 "pal":["Un carn bas et moussu sur le col venté, pierres levées penchées, lichen ocre ; quelques blocs tombés que nul ne remet en place.",
        "Carn haut comme une tour, cercle de pierres dressées tout autour, carriers qui débitent la roche du col ; des blocs marqués d'encoches bordent le chemin."]}
```

```json
{"fiche":"RES324","nom":"Les Fours de Castra Sabulonis",
 "recit":"La légion réquisitionna le sable du désert pour couler le verre des thermes du gouverneur. Le décurion Vibius tenait les fours ; il écrivit dans son rapport que le désert était inépuisable. Il l'était. Les thermes, non : on en démonta les vitres pour payer la solde.",
 "pal":["Fours de brique éventrés dans les dunes, coulures de verre vert bouteille sur le sable, bornes militaires à moitié enfouies ; la chaleur tremble.",
        "Fours rallumés en rangée, fumée ocre, gobelets et vitres empilés dans des caisses ; le sable vitrifié luit en plaques sous le soleil de midi."]}
```

```json
{"fiche":"RES379","nom":"Anémoskala, l'Escalier des Moulins",
 "recit":"Les moulins d'Anémoskala montaient la falaise en escalier, un par famille. L'archonte préleva une mouture sur dix au profit du sanctuaire du port. Les familles arrêtèrent leurs ailes un jour sur dix. On ne sut jamais lequel, et l'archonte non plus.",
 "pal":["Tours de moulins décapitées le long de l'escalier taillé, ailes de toile en lambeaux, meules fendues ; le vent siffle dans les fenêtres vides.",
        "Moulins blanchis à la chaux, ailes de toile tendue qui tournent ensemble, sacs de farine sur les marches ; la falaise entière grince et respire."]}
```

```json
{"fiche":"RES214","nom":"Les Terrasses de Motu-Akoa",
 "recit":"Les chefs de Motu-Akoa élevaient leurs plateformes de basalte toujours plus haut, chacun au-dessus de son prédécesseur. Les porteurs de pierre s'arrêtèrent avant les chefs. La dernière terrasse est restée à moitié pavée ; la pierre manquante attend encore sur la grève, calée sur ses rouleaux.",
 "pal":["Plateformes de basalte effondrées sous les fougères, dalles tombées dans le sable noir, poteaux sculptés couchés ; la carrière dort.",
        "Terrasses redressées pierre à pierre, basalte frais taillé à l'herminette, rouleaux de bois sur la grève ; la carrière résonne de coups sourds."]}
```

```json
{"fiche":"RES036","nom":"Les Digues de Dahan-Abzar",
 "recit":"Le gouverneur fit découper le delta en carreaux d'irrigation, chacun avec sa vanne et son percepteur. Le gardien d'écluse Mehran vendait l'eau la nuit à ceux qui n'avaient pas de vanne. Leurs carreaux fleurirent mieux que ceux du gouverneur, qui fit doubler les percepteurs.",
 "pal":["Bras du delta envasés, vannes de bois pourri bloquées, carreaux de jardin à sec sous les palmiers ; un filet d'eau brune court sous les roseaux.",
        "Canaux en damier pleins à ras bord, vannes peintes au bleu de lapis, roues à godets qui grincent ; l'eau déborde des carreaux vers les vergers."]}
```

```json
{"fiche":"RES277","nom":"Les Naphtes d'Erešu",
 "recit":"Au fond du canyon d'Erešu, le bitume suintait de la roche et brûlait seul. Les prêtres en scellaient des jarres qu'ils vendaient comme feu consacré. La tisserande Amat-Ilu, qui y trempait ses mèches, savait que n'importe quelle lampe l'allumait aussi bien.",
 "pal":["Flaques de bitume figées dans le canyon ocre, flammes basses qui vacillent, jarres scellées brisées ; une odeur âcre stagne entre les parois.",
        "Sources de naphte en colonnes de feu, rigoles de bitume chaud vers des cuves de brique cuite ; la nuit, le canyon rougeoie comme un four."]}
```
