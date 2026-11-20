# Lot 5 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes) et seize Ressources (fiche légère, sans carte). Carte des familles : `familles_A.md`, écrite avant les cartes et mise à jour à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5. Les budgets sont **calculés au script** à partir des `ops` : paliers 1 à 6 entre −14 % et +12 % ; formes du palier 7 entre 45 et 50 points sans combo, réveil de +61 à +69 %. Aucun boost.

Prix : 5 cartes à prix sur 6 (paliers 1 à 6) dans chacun des 24 pôles, donc à égalité entre les deux pôles de chaque zone ; chaque forme du palier 7 a un prix. Antres : 4 cartes d'invocation au moins par pôle.

Leçons des lots 1 à 4 appliquées (vérifiées au script avant remise, validateur du lot 4 complété) :
- Conditions `si` prises dans `cartes.js` (lu sans modification) ; ni `defausseCommune` ni `recupCommune` ; **aucun `si` testé après l'opération de la même carte qui le rendrait vrai** (y compris un prix en PV avant `blesse`) ; « lu avant de marquer », « lu avant de la lever » quand le crochet précède l'opération ; ordre des opérations conforme au moteur, `mana` à 2 au plus ; `"cible":1` et « la cible » dans le texte dès qu'une opération ou une condition vise un ennemi précis ; chaque nombre des `ops` figure dans l'effet ; tag « Loi » exactement quand l'effet commence par « Loi ».
- Récupération sur 4 cartes au plus par pôle ; « tous » sur 3 cartes sur 7 au plus ; dégâts ciblés sur 5 cartes au plus par pôle ; aucun crochet sur 5 cartes ou plus (3 ou 4 partout) ; l'enchaînement (`cartesJouees`, `troisCartes`) n'est famille que dans ANT155 +.
- Une famille d'appoint (3 ou 4 cartes) dans 3 de mes pôles au plus, hors invocations et dégâts ciblés (comptée au script, liste plus bas).
- Phrase d'ouverture de 3 à 6 mots sur les 24 formes du palier 7 ; chaque forme pose une résonance et en réveille une autre.
- **Aucun nombre** dans la prose d'A (récits, `pal`, noms, ambiances), ni en chiffres ni en toutes lettres : il ne reste que « premier », « dernier », « un seul ».
- Au plus deux chutes en « …, sans X. » ; aucune leçon tirée en clair à la fin.
- Noms de cartes et de Ressources vérifiés contre `noms-pris.txt` et contre les fichiers de B, C et D remis avant moi (cartes et Ressources) ; premiers mots des Ressources tous différents (RES175 renommée pour s’écarter du Fil de lotus de C) ; aucun récipient en objet principal, aucun produit tinctorial.

Recettes de récit (aucune deux fois, aucune reprise du lot 4) : ANT155 la recette ; ANT187 les lettres d'exil ; ANT130 le compte du tribut ; ANT093 la supplique ; ANT026 le rapport de garde ; ASS017 le décret et ses ajouts ; ASS057 le songe consigné ; ASS114 le contrat ; ASS109 le serment ; DON014 la prescription ; DON047 la généalogie des dettes ; CIT008 le règlement.

Résonances des formes du palier 7 (posée → réveillée). Posées : Abîme 4, Racine 5, Givre 4, Braise 4, Sang 3, Sceau 4. Réveillées : Abîme 3, Racine 4, Givre 5, Braise 4, Sang 4, Sceau 4.

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT155 | Abîme → Racine | Racine → Sang |
| ANT187 | Abîme → Sceau | Racine → Braise |
| ANT130 | Braise → Givre | Sang → Racine |
| ANT093 | Racine → Givre | Givre → Sceau |
| ANT026 | Givre → Racine | Braise → Sang |
| ASS017 | Sang → Braise | Abîme → Sceau |
| ASS057 | Braise → Abîme | Sceau → Givre |
| ASS114 | Givre → Sang | Sceau → Racine |
| ASS109 | Abîme → Braise | Sceau → Givre |
| DON014 | Racine → Abîme | Sceau → Sang |
| DON047 | Sang → Givre | Racine → Braise |
| CIT008 | Givre → Abîme | Braise → Sceau |

Familles d'effets (comptées au script, palier 7 compris). A écrit le dernier et prend les places qui restent : **la dernière place** d'écho (ANT093 +) et d'enchaînement (ANT155 +) ; la dernière de marque (ANT130 +), garde du héros (CIT008 −), soin du héros (ASS017 −) et mana (ASS017 +) ; **deux** places de garde des alliés (ANT026 −, ASS109 −), soin des alliés (ANT187 +, DON014 +) et exil (ASS057 +, DON047 −). Aucune hésitation, aucun coup au hasard, aucun vol de vie, perce-garde, affaiblissement, riposte ou brûlure en famille principale (plafonds pleins sans A).

| Zone | Pôle − | Pôle + | Couple déjà écrit (lot 5, autres conteurs) |
|---|---|---|---|
| ANT155 Pourriture / Croissance | pioche (7) + vermine, `soinEnnemi` | enchaînement (`cartesJouees` 4, `troisCartes` 4) + garde du héros (4) | C ANT106 : exil / mana |
| ANT187 Exil / Foyer | invocations (6) une à une + exil en prix (3), `seul` | soin des alliés (7) + garde des alliés (3), `bete` | D ASS068 : pioche payée / brûlure |
| ANT130 Cendre / Floraison | charognards (7) + dégâts à tous (3), `elan` | marque (7) + bêtes de guerre, `vulnerable` | D ANT108 : affaiblissement / mana |
| ANT093 Tempête / Calme | pioche (7) + coups au hasard (3), `vol` | écho (4) + garde du héros (4), `garde` (corrigé par le critique) | D ANT038 : perce-garde / riposte |
| ANT026 Sommeil / Éveil | garde des alliés (7) + soin du héros (4), `pietine` | remonte lâchée (6) + gros coups, `elan` | C ANT236 : soin du héros / brûlure |
| ASS017 Sécheresse / Déluge | Lois de soin du héros (7) + pioche, `defausseAPrix` | Lois de mana d'Eau (7) + dégâts à tous (3), `cibleGarde` | B ANT245 : exil / invocations |
| ASS057 Cauchemar / Rêve | Lois de pioche payée en PV (7) + brûlure et dégâts à tous (3), `troisCartes` | Lois d'exil (6) + chevaux des songes (4) + garde des alliés (4), `seul` (réécrit par le critique) | B ANT009 : brûlure / garde du héros |
| ASS114 Fer / Bois | Lois de bloqueurs enchaînés (7) + affaiblissement (3), `cibleGarde` | Lois de pioche (7) + garde et soin du héros (4), `garde` | aucun |
| ASS109 Nuit / Aurore | Lois de garde des alliés (7), `vol` | Lois de pioche (7) + récupération et soin du héros (4), `blesse` | D DON062 : riposte / gros coups |
| DON014 Peste / Guérison | vermine (6) + dégâts à tous (2), `bete` | soin des alliés (7) + garde des alliés (3), `soinEnnemi` | C DON122 : vol de vie / affaiblissement |
| DON047 Sang / Sève | exil (6) + pioche (4), `blesse` | gros coups ciblés (5) + garde du héros (2), `pietine` | B ANT167 : riposte / mana |
| CIT008 Ombre / Lumière | garde du héros (7) + soin du héros (2), `defausseAPrix` | garnison (7) + marque (4), `vulnerable` | B ASS005 : défausse / soin des alliés |

Appoints de 3 ou 4 cartes chez A (hors invocations et dégâts ciblés) : garde du héros (ANT155 +, ANT093 +, ASS114 +), soin du héros (ANT026 −, ASS109 +, ASS114 +), dégâts à tous (ANT130 −, ASS017 +, ASS057 −), garde des alliés (ANT187 +, ASS057 +, DON014 +) ; une fois chacun : perce-garde, exil, hasard, brûlure, enchaînement, récupération, affaiblissement, marque. Le mana n'est appoint nulle part.

Ressources (un geste, un objet, une image chacune ; comparées aux lots 1 à 4 et aux Ressources de B, C et D du lot 5) : RES174 fendre les corégones à l'ulu, guirlandes entre les kayaks retournés ; RES041 tirer les mygales des terriers à la baguette, puis les frire ; RES347 casser la roche tachée de noir et la faire tremper, puis laisser le soleil boire l'eau (changé par le critique : B RES220 raclait déjà une pâte des parois à la spatule) ; RES367 saler et presser le poisson dans des cuves taillées au rivage ; RES265 cueillir aux saules nains le duvet des bœufs musqués ; RES175 nouer un fil rouge à la tige avant de déterrer la racine ; RES199 ouvrir et fermer à la marée la grille du vivier ; RES300 ligaturer les racines de palétuvier en fourches de rame ; RES222 secouer à la corde les pistachiers de la cendre ; RES301 tendre des collets de crin sur les troncs couchés ; RES189 relever les fagots à écrevisses ; RES376 couper la camomille entre les névés ; RES200 faire bouillir les vessies pour la colle des arcs ; RES116 gauler le kapok et battre la bourre ; RES314 piétiner le chuño sur les aires ; RES306 harponner les carpes à la torche. Gabarit « seigneur et petites gens » sur trois Ressources au plus (RES199, RES306, RES189).

## Points pour le critique

- **A prend les dernières places du lot** : écho, enchaînement, marque, garde du héros, soin du héros et mana à 1 ; garde des alliés, soin des alliés et exil à 2. Après A, ces familles sont toutes à leur plafond.
- **Vocations de type** : 6 pôles ont les invocations en principal (dont trois hors Antre : les porteurs enchaînés de Fer, ASS114 −, la vermine de la Peste, DON014 −, et la garnison de Lumière, CIT008 +) et 5 la pioche (dont 3 en Assemblée).
- **ASS057 + (Rêve)** : l'exil est la famille déclarée (6 cartes), mais la pioche est sur 7 cartes ; à juger.
- **L'exil est famille principale du Rêve et du Sang** (ASS057 +, DON047 −) : deux pôles où la carte quitte le combat, avec deux images différentes (le songe qui ne sert qu'une fois, la dette réglée puis le départ).
- **Fer = bloqueurs** : en Assemblée, les invocations à forte vie et faible attaque sont des porteurs enchaînés, en Lois.
- **Dégâts ciblés à 5 cartes** dans 22 pôles sur 24 : c'est le plafond de la leçon, tenu partout mais atteint presque partout.
- **Ressources à résine** : RES347 (sueur de roche) reste proche, par la matière, de l'encens de D (RES202) ; la résine tirée au feu (RES041) a été remplacée par les mygales pour cette raison.
- **Chuño** : D l'a laissé à A (RES314, noté dans `familles_D.md`). Les cordes de RES174 et RES222 remplacent des perches et des grimpeurs trop proches du Champ de perches (D RES168) et du Sycomore (C RES203).

---

## 1. Les Glacières de Kâmpéng Trey (ANT155) — Antre · Glacier · Glace · Khmère

Recette du récit : la recette (gravée sur la porte). Recette du −7 : la ruine (la voûte crevée, l'odeur) ; du +7 : la démesure (le glacier jusqu'aux rizières, les silures vivants dans la glace).

**Pourriture (−)** : le cachet décollé → les jarres crevées → le ver des voûtes → la saumure qui ronge → les corbeaux du seuil → le pillage du dégel → la Voûte crevée. Fil mécanique : pioche sur 7 cartes (on fouille les jarres), vermine en appoint (mouches, ver, corbeaux), perce-garde sur 3 cartes, crochet « un ennemi s'apprête à se soigner » (la pourriture gâte les remèdes) ; prix : PV et défausse.
**Croissance (+)** : la première crue → le silure pris vivant → un pas de glace → les crocodiles du gué gelé → la glace qui gagne → le glacier aux rizières → le Glacier-Mère. Fil mécanique : l'enchaînement est la famille (« si vous avez déjà joué une autre carte » sur 4 cartes, « au moins votre troisième carte » sur 4), bêtes de la crue prises dans la glace, garde du héros sur 4 cartes ; prix : garde et soin des ennemis, PV, défausse.

```json
{"fiche":"ANT155","nom":"Les Glacières de Kâmpéng Trey",
 "recit":"Sur la porte des glacières, le roi Srei Vorn fit graver sa recette : « Prends le poisson de la crue, sale-le, scelle-le en jarre sous la glace, et garde-le jusqu'à ce que le roi ait faim. » Chaque village scellait ses jarres de son propre cachet. Le roi n'eut jamais faim. Le glacier avança sur les jarres, les jarres gonflèrent, et Mao Sokhom, le gardien, apprit à reconnaître chaque village à l'odeur. Les nuits de dégel, les villageois viennent reprendre leur poisson. Ils frappent d'abord à la porte, par habitude.",
 "pal":["La voûte du glacier s'est affaissée, brune et suintante ; les jarres crevées ont tout gâté, des corbeaux marchent sur la saumure et l'odeur monte aux crêtes.","Jarres fendues sous une glace sale, cachets décollés, vers blancs dans les fentes ; le gardien bouche les fissures avec de la paille et du sel.","Un glacier bleu au-dessus des rizières, une porte sculptée dans sa paroi et, derrière, des galeries de jarres scellées, rangées par village.","La glace avance d'un pas chaque saison et recouvre les jarres intactes ; des silures pris dans la glace claire remuent encore les barbillons.","Le glacier a gagné jusqu'aux rizières : des silures géants nagent, lents, dans la glace transparente, et les villageois marchent au-dessus en les suivant."],
 "pm":"Pourriture","pp":"Croissance"}
```

```json
[
{"id":"ANT155-moins-1","zone":"ANT155","pole":"-","palier":1,"nom":"Le Cachet décollé","cout":1,"cible":1,
 "effet":"Piochez 1 carte ; 4 dégâts à la cible. Des Mouches de saumure rejoignent le combat : 4 PV, frappe 2. Prix : le héros perd 2 PV.",
 "ops":[["pioche",1],["deg","cible",4],["invoque","Mouches de saumure",4,2],["prixPV",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Mao Sokhom reconnaissait chaque village à son cachet ; les mouches ne connaissaient que la saumure.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT155-moins-2","zone":"ANT155","pole":"-","palier":2,"nom":"Les Jarres crevées","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, piochez 1 carte. Piochez 2 cartes ; 5 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","soinEnnemi",[["pioche",1]]],["pioche",2],["deg","cible",5],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Une jarre crevée ne rend pas le poisson du village : elle rend celui de tous, mêlé.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT155-moins-3","zone":"ANT155","pole":"-","palier":3,"nom":"Le Ver des voûtes","cout":2,"cible":1,
 "effet":"Le Ver des voûtes rejoint le combat : 8 PV, frappe 4. La garde de la cible tombe à 0 ; 8 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Ver des voûtes",8,4],["briseGarde","cible"],["deg","cible",8],["pioche",1],["prixPV",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"Le ver blanc des glacières creuse vers le sel ; il traverse un cachet royal comme un autre.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT155-moins-4","zone":"ANT155","pole":"-","palier":4,"nom":"La Saumure qui ronge","cout":2,"cible":0,
 "effet":"Toute garde ennemie tombe à 0 ; piochez 3 cartes. Si un ennemi s'apprête à se soigner, 6 dégâts à tous les ennemis.",
 "ops":[["briseGarde","tous"],["pioche",3],["si","soinEnnemi",[["deg","tous",6]]]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Perce-garde","Pioche","Condition"],
 "ambiance":"La saumure suinte sous la porte sculptée et ronge d'abord les gonds, puis le nom du roi.",
 "budget":"25,2 / 28 (−10 %)"},
{"id":"ANT155-moins-5","zone":"ANT155","pole":"-","palier":5,"nom":"Les Corbeaux du seuil","cout":2,"cible":1,
 "effet":"Un Corbeau des glacières rejoint le combat : 10 PV, frappe 6. Piochez 2 cartes ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Corbeau des glacières",10,6],["pioche",2],["deg","cible",12],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Les corbeaux attendent sur le linteau que le gardien ouvre ; ils entrent toujours avant lui.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT155-moins-6","zone":"ANT155","pole":"-","palier":6,"nom":"Le Pillage du dégel","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Puis piochez 3 cartes ; 20 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["pioche",3],["deg","cible",20],["prixPV",3]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Les nuits de dégel, les villageois reprennent leur poisson à pleins paniers, et frappent d'abord, par habitude.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT155-moins7","zone":"ANT155","pole":"-","palier":7,"nom":"La Voûte crevée","cout":2,"cible":0,
 "effet":"La glace rend ses morts. Piochez 3. La Nuée des voûtes (12 PV, frappe 6) ; toute garde ennemie tombe ; 7 dégâts à tous. Pose Abîme. Si Racine (consommée) : le Rat-roi des jarres (16 PV, frappe 8) ; piochez 2. Prix : le héros perd 3 PV.",
 "ops":[["pioche",3],["invoque","Nuée des voûtes",12,6],["briseGarde","tous"],["deg","tous",7],["pose","Abîme"],["reveil","Racine",true,[["invoque","Rat-roi des jarres",16,8],["pioche",2]]],["prixPV",3]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Perce-garde","Pioche","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Le dernier relevé de Mao Sokhom ne cite aucun village : il note l'odeur, et la date.",
 "budget":"46 sans combo ; réveil +28 (61 %)"},
{"id":"ANT155-plus-1","zone":"ANT155","pole":"+","palier":1,"nom":"La Première Crue","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 6 dégâts à la cible. Puis 5 dégâts à la cible ; le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",6]]],["deg","cible",5],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"La crue apporte le poisson du roi ; le glacier, lui, prend la crue entière, et la garde.",
 "budget":"9,2 / 10 (−8 %)"},
{"id":"ANT155-plus-2","zone":"ANT155","pole":"+","palier":2,"nom":"Le Silure pris vivant","cout":1,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, le héros gagne 8 de garde. Un Silure de la crue rejoint le combat : 10 PV, frappe 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cartesJouees",[["garde","heros",8]]],["invoque","Silure de la crue",10,4],["ennemiSoin",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Garde","Condition","Prix"],
 "ambiance":"On cassa la glace pour le sortir ; il était vivant, et il mordit le bras du gardien.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT155-plus-3","zone":"ANT155","pole":"+","palier":3,"nom":"Un pas de glace","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 12 dégâts à la cible. Puis 10 dégâts à la cible ; piochez 2 cartes. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","troisCartes",[["deg","cible",12]]],["deg","cible",10],["pioche",2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Chaque saison, la glace avance d'un pas ; Mao Sokhom recule sa natte d'autant, et la saison suivante encore.",
 "budget":"21 / 24 (−12 %)"},
{"id":"ANT155-plus-4","zone":"ANT155","pole":"+","palier":4,"nom":"Les Crocodiles du gué gelé","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 10 dégâts à la cible. Un Crocodile du gué rejoint le combat : 12 PV, frappe 6 ; 8 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["invoque","Crocodile du gué",12,6],["deg","cible",8],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les crocodiles du gué ont dormi sous la glace tout l'hiver ; ils se réveillent affamés et lents.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT155-plus-5","zone":"ANT155","pole":"+","palier":5,"nom":"La Glace qui gagne","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 6 dégâts à tous les ennemis. Un Silure noir rejoint le combat : 14 PV, frappe 5 ; 14 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","troisCartes",[["deg","tous",6]]],["invoque","Silure noir",14,5],["deg","cible",14],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"La glace recouvre les jarres intactes avec leurs cachets ; elle ne choisit pas les villages.",
 "budget":"33,1 / 32 (+3 %)"},
{"id":"ANT155-plus-6","zone":"ANT155","pole":"+","palier":6,"nom":"Le Glacier aux rizières","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, piochez 2 cartes. Si c'est au moins votre troisième carte, 14 dégâts à la cible. Puis 16 dégâts à la cible ; le héros gagne 8 de garde.",
 "ops":[["si","cartesJouees",[["pioche",2]]],["si","troisCartes",[["deg","cible",14]]],["deg","cible",16],["garde","heros",8]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Garde","Pioche","Condition"],
 "ambiance":"Les rizières du bas gèlent en pleine saison ; les paysans repiquent sur la glace, faute de mieux.",
 "budget":"33,4 / 36 (−7 %)"},
{"id":"ANT155-plus7","zone":"ANT155","pole":"+","palier":7,"nom":"Le Glacier-Mère","cout":2,"cible":0,
 "effet":"Le glacier avance d'un pas. Dès votre troisième carte, 8 dégâts à tous. Le Silure-roi (18 PV, frappe 8) ; 3 coups de 6 au hasard. Pose Racine. Si Sang (consommé) : un Crocodile des rizières (14 PV, frappe 8) ; 12 de garde. Prix : ennemis +1 de garde.",
 "ops":[["si","troisCartes",[["deg","tous",8]]],["invoque","Silure-roi",18,8],["deg","hasard",6,3],["pose","Racine"],["reveil","Sang",true,[["invoque","Crocodile des rizières",14,8],["garde","heros",12]]],["ennemiGarde",1]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Garde","Condition","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Le roi Srei Vorn n'eut jamais faim ; le glacier, si, et il descend chercher son dû.",
 "budget":"45,8 sans combo ; réveil +28,6 (62 %)"}
]
```

---

## 2. Le Puits de Rukeiji (ANT187) — Antre · Oasis · Sève · Japonaise féodale

Recette du récit : les lettres d'exil (jamais envoyées). Recette du −7 : le vide (le puits comblé, les traces qui s'en vont) ; du +7 : la foule (la maisonnée de bêtes autour du foyer).

**Exil (−)** : l'ordre d'exil → le renard du puits → la lettre sans réponse → le corbeau de relégation → les chiens de la véranda → le chacal sans maître → la Dune sans traces. Fil mécanique : bêtes errantes sur 6 cartes, qui viennent une à une, crochet « il ne reste qu'un ennemi » (le banni contre un seul adversaire), pioche des lettres ; prix : la carte s'exile (3 fois), PV.
**Foyer (+)** : le bol devant la porte → la grue sur le faîte → les carpes du puits → le foyer allumé → les bols pour les bêtes → la maisonnée → le Foyer des bêtes. Fil mécanique : soin des alliés sur 7 cartes (le foyer nourrit la maisonnée), bêtes apprivoisées, garde des alliés sur 3 cartes, crochet « une bête est en jeu » ; prix : soin et garde des ennemis, PV, défausse.

```json
{"fiche":"ANT187","nom":"Le Puits de Rukeiji",
 "recit":"Le seigneur Ōmura Kiyotada fut relégué à Rukeiji pour un poème mal placé. De l'oasis, il écrivit au shōgun une lettre par saison, chacune plus courte : il demandait son retour, puis du papier, puis des nouvelles. Aucune ne reçut de réponse. Les dernières lettres ne demandent plus rien ; elles décrivent le renard qui boit au puits, la grue qui dort sur le toit, les chats du cuisinier. On les a retrouvées pliées dans un coffre, jamais envoyées, écrites au dos de l'ordre d'exil.",
 "pal":["L'oasis est vide : le puits comblé de sable, la maison sans toit et, sur la dune, une file de traces de renard qui s'en va sans revenir.","Volets cloués, jardin de sable que personne ne ratisse plus ; des chiens errants dorment sous la véranda et grognent quand on approche.","Un puits sous des palmiers, une maison de bois au toit d'écorce, un jardin de sable ratissé et un coffre à lettres sous la véranda.","Fumée du foyer au-dessus des palmes ; une grue sur le faîte, des carpes dans le puits, des bols posés pour les bêtes devant la porte.","La maison déborde de bêtes : renards, grues, chats et chiens couchés en rond autour du foyer, et le seigneur enjambe sa maisonnée pour sortir."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ANT187-moins-1","zone":"ANT187","pole":"-","palier":1,"nom":"L'Ordre d'exil","cout":1,"cible":0,
 "effet":"Un Chien errant rejoint le combat : 10 PV, frappe 1. Le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Chien errant",10,1],["garde","heros",4],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Le sceau du shōgun tenait tout le haut de la feuille ; le seigneur écrivit ses lettres dessous.",
 "budget":"8,7 / 10 (−13 %)"},
{"id":"ANT187-moins-2","zone":"ANT187","pole":"-","palier":2,"nom":"Le Renard du puits","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 8 dégâts à la cible. Un Renard des dunes rejoint le combat : 8 PV, frappe 4 ; 3 dégâts à la cible. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",8]]],["invoque","Renard des dunes",8,4],["deg","cible",3],["exil"]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Condition","Exil","Prix"],
 "ambiance":"Le renard boit au puits à la nuit tombée ; il ne vient jamais quand le seigneur l'attend.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT187-moins-3","zone":"ANT187","pole":"-","palier":3,"nom":"La Lettre sans réponse","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 8 dégâts à la cible. Piochez 2 cartes ; 12 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",8]]],["pioche",2],["deg","cible",12],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Il demanda son retour, puis du papier, puis des nouvelles ; chaque lettre tenait sur moins de papier.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT187-moins-4","zone":"ANT187","pole":"-","palier":4,"nom":"Le Corbeau de relégation","cout":2,"cible":0,
 "effet":"S'il ne reste qu'un ennemi, piochez 1 carte. Un Corbeau des sables rejoint le combat : 12 PV, frappe 6 ; piochez 2 cartes.",
 "ops":[["si","seul",[["pioche",1]]],["invoque","Corbeau des sables",12,6],["pioche",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Pioche","Condition"],
 "ambiance":"Le corbeau se pose sur le coffre aux lettres ; c'est le seul visiteur qui repart vers la capitale.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT187-moins-5","zone":"ANT187","pole":"-","palier":5,"nom":"Les Chiens de la véranda","cout":2,"cible":1,
 "effet":"Un Chien de garde errant rejoint le combat (12 PV, frappe 6), puis une Chienne maigre (8 PV, frappe 4). 10 dégâts à la cible. Prix : cette carte s'exile.",
 "ops":[["invoque","Chien de garde errant",12,6],["invoque","Chienne maigre",8,4],["deg","cible",10],["exil"]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Exil","Prix"],
 "ambiance":"Les chiens de la véranda ont appartenu à un autre relégué ; ils n'ont pas attendu son retour.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT187-moins-6","zone":"ANT187","pole":"-","palier":6,"nom":"Le Chacal sans maître","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 12 dégâts à la cible. Un Chacal du désert rejoint le combat : 16 PV, frappe 8 ; 14 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","seul",[["deg","cible",12]]],["invoque","Chacal du désert",16,8],["deg","cible",14],["prixPV",3]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le chacal suit les traces de la dune jusqu'au puits, puis repart par les mêmes, à reculons.",
 "budget":"37 / 36 (+3 %)"},
{"id":"ANT187-moins7","zone":"ANT187","pole":"-","palier":7,"nom":"La Dune sans traces","cout":2,"cible":1,
 "effet":"La maison se vide de bêtes. Le Chacal-roi rejoint le combat (18 PV, frappe 10) ; 16 dégâts à la cible ; piochez 2. Pose Abîme. Si Sceau (consommé) : piochez 3 ; un Renard blanc (12 PV, frappe 7). Prix : cette carte s'exile.",
 "ops":[["invoque","Chacal-roi",18,10],["deg","cible",16],["pioche",2],["pose","Abîme"],["reveil","Sceau",true,[["pioche",3],["invoque","Renard blanc",12,7]]],["exil"]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Pioche","Exil","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"La dernière lettre décrit des traces de renard qui s'en vont ; elle ne dit pas où va le seigneur.",
 "budget":"45 sans combo ; réveil +28,5 (63 %)"},
{"id":"ANT187-plus-1","zone":"ANT187","pole":"+","palier":1,"nom":"Le Bol devant la porte","cout":1,"cible":0,
 "effet":"Un Chat du cuisinier rejoint le combat : 6 PV, frappe 2. Vos alliés se soignent de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Chat du cuisinier",6,2],["soin","allies",4],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Le cuisinier posait un bol de riz devant la porte pour son chat ; il en posa vite davantage.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT187-plus-2","zone":"ANT187","pole":"+","palier":2,"nom":"La Grue sur le faîte","cout":1,"cible":0,
 "effet":"Si une bête est déjà en jeu, vos alliés se soignent de 4. Une Grue cendrée rejoint le combat : 8 PV, frappe 3. Vos alliés se soignent de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","bete",[["soin","allies",4]]],["invoque","Grue cendrée",8,3],["soin","allies",2],["ennemiSoin",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Soin","Condition","Prix"],
 "ambiance":"La grue dort sur le faîte du toit d'écorce, une patte repliée, comme une invitée qui s'attarde.",
 "budget":"12,3 / 12,5 (−2 %)"},
{"id":"ANT187-plus-3","zone":"ANT187","pole":"+","palier":3,"nom":"Les Carpes du puits","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 6 et gagnent 4 de garde ; piochez 1 carte. Si une bête est en jeu, 10 dégâts à la cible.",
 "ops":[["soin","allies",6],["garde","allies",4],["pioche",1],["si","bete",[["deg","cible",10]]]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Garde","Soin","Pioche","Condition"],
 "ambiance":"Le seigneur jeta des carpes dans le puits pour avoir quelqu'un à qui parler en tirant l'eau.",
 "budget":"22,8 / 24 (−5 %)"},
{"id":"ANT187-plus-4","zone":"ANT187","pole":"+","palier":4,"nom":"Le Foyer allumé","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 8 et gagnent 6 de garde ; 10 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","allies",8],["garde","allies",6],["deg","cible",10],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Il brûla les brouillons de ses lettres pour allumer le foyer ; le feu prit mieux qu'avec le bois.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"ANT187-plus-5","zone":"ANT187","pole":"+","palier":5,"nom":"Les Bols pour les bêtes","cout":2,"cible":1,
 "effet":"Si une bête est déjà en jeu, vos alliés se soignent de 8. Un Renard apprivoisé rejoint le combat : 10 PV, frappe 5 ; vos alliés se soignent de 6 ; 8 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["soin","allies",8]]],["invoque","Renard apprivoisé",10,5],["soin","allies",6],["deg","cible",8],["prixPV",2]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Une rangée de bols devant la porte, un par bête ; le seigneur mange dans le dernier.",
 "budget":"33,5 / 32 (+5 %)"},
{"id":"ANT187-plus-6","zone":"ANT187","pole":"+","palier":6,"nom":"La Maisonnée","cout":2,"cible":1,
 "effet":"Un Chien du foyer rejoint le combat : 14 PV, frappe 6. Vos alliés se soignent de 8 ; 10 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Chien du foyer",14,6],["soin","allies",8],["deg","cible",10],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Il ne demande plus son retour ; il demande du riz, et qu'on ne lui envoie pas de chat.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT187-plus7","zone":"ANT187","pole":"+","palier":7,"nom":"Le Foyer des bêtes","cout":2,"cible":1,
 "effet":"Le seigneur sert ses bêtes. Alliés : soin 10, garde 8. Une Grue blanche (12 PV, frappe 6) ; 10 dégâts à la cible. Pose Racine. Si Braise (consommée) : tous brûlent, 3 par tour sur 3 tours ; alliés : soin 6. Prix : ennemis soignés de 2.",
 "ops":[["soin","allies",10],["garde","allies",8],["invoque","Grue blanche",12,6],["deg","cible",10],["pose","Racine"],["reveil","Braise",true,[["brulure","tous",3,3],["soin","allies",6]]],["ennemiSoin",2]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Brûlure","Garde","Soin","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Autour du foyer, renards, grues et chiens dorment en rond ; le coffre aux lettres sert de marchepied.",
 "budget":"45,2 sans combo ; réveil +28,8 (64 %)"}
]
```

---

## 3. Le Fjord de Nextépec (ANT130) — Antre · Fjord · Glace · Aztèque

Recette du récit : le compte du tribut (la bande pliée du collecteur). Recette du −7 : le silence (la plaine de cendre muette) ; du +7 : le geste (les rives jettent des fleurs et se lient les poignets).

**Cendre (−)** : la pluie de cendre → le coyote des terrasses → les toits effondrés → le lynx des falaises → payé en cendre → la meute sur la cendre → la Plaine de cendre. Fil mécanique : charognards sur 7 cartes (vautours, coyotes, lynx), payés en blessures de vos propres bêtes, dégâts à tous sur 3 cartes, crochet « la cible prend son élan » ; prix : vos bêtes, PV.
**Floraison (+)** : le souci planté → le bouclier fleuri → les captifs fleuris → la guerre convenue → la pirogue des guerriers → le jaguar de la fête → le Pont de fleurs. Fil mécanique : la marque sur 7 cartes (la guerre fleurie désigne le captif), bêtes de guerre, crochet « la cible est marquée » lu avant de marquer ; prix : PV, défausse, soin ennemi.

```json
{"fiche":"ANT130","nom":"Le Fjord de Nextépec",
 "recit":"Le collecteur Itzcuin tenait le compte du fjord sur une bande de papier pliée en accordéon : tant de manteaux de plumes, tant de jarres de miel, tant de captifs « fleuris » pour la fête. Les captifs ne se cueillaient qu'à la guerre ; on fit donc la guerre aux villages d'en face, qui la firent en retour, aux dates convenues. Puis le volcan du fond du fjord parla, et la cendre couvrit les rives à égalité. Le dernier pli de la bande porte une seule ligne, de la main d'Itzcuin : « Payé en cendre. »",
 "pal":["La cendre a comblé le fjord jusqu'aux falaises : une plaine molle et muette d'où dépassent des proues de pirogues et le sommet des temples.","Cendre sur les terrasses et sur la glace des berges, toits effondrés sous son poids ; des vautours tournent au-dessus des fleurs couchées.","Un fjord étroit sous un volcan qui fume, des terrasses de fleurs chauffées par des sources, des temples à degrés face à face sur les rives.","Les terrasses débordent de soucis et de fleurs de cacao ; des guerriers aux boucliers fleuris traversent en pirogue pour la guerre convenue.","Les rives jettent des fleurs dans le fjord jusqu'à le couvrir ; les guerriers des camps opposés marchent dessus pour se rejoindre et se lier les poignets."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ANT130-moins-1","zone":"ANT130","pole":"-","palier":1,"nom":"La Pluie de cendre","cout":1,"cible":0,
 "effet":"Un Vautour de cendre rejoint le combat : 4 PV, frappe 3. 2 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Vautour de cendre",4,3],["deg","tous",2],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"La première cendre tomba sur les terrasses comme une farine ; les vautours arrivèrent avant la pluie suivante.",
 "budget":"8,9 / 10 (−11 %)"},
{"id":"ANT130-moins-2","zone":"ANT130","pole":"-","palier":2,"nom":"Le Coyote des terrasses","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 6 dégâts à la cible. Un Coyote des cendres rejoint le combat : 8 PV, frappe 4. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","elan",[["deg","cible",6]]],["invoque","Coyote des cendres",8,4],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le coyote creuse la cendre des terrasses à la recherche des greniers ; il trouve surtout des fleurs.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT130-moins-3","zone":"ANT130","pole":"-","palier":3,"nom":"Les Toits effondrés","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Puis 10 dégâts à la cible ; un Vautour pape rejoint le combat : 8 PV, frappe 5. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",10]]],["deg","cible",10],["invoque","Vautour pape",8,5],["prixPV",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les toits de chaume ne portaient pas la cendre ; ceux des temples, oui, et ils tinrent seuls.",
 "budget":"24,5 / 24 (+2 %)"},
{"id":"ANT130-moins-4","zone":"ANT130","pole":"-","palier":4,"nom":"Le Lynx des falaises","cout":2,"cible":1,
 "effet":"Un Lynx des falaises rejoint le combat : 10 PV, frappe 6 ; 10 dégâts à la cible. Si la cible prend son élan, 8 dégâts de plus à la cible.",
 "ops":[["invoque","Lynx des falaises",10,6],["deg","cible",10],["si","elan",[["deg","cible",8]]]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Condition"],
 "ambiance":"Le lynx descend des falaises par les coulées de cendre, et ses traces s'effacent derrière lui.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ANT130-moins-5","zone":"ANT130","pole":"-","palier":5,"nom":"Payé en cendre","cout":2,"cible":1,
 "effet":"5 dégâts à tous les ennemis. Un Coyote des cendres rejoint le combat : 10 PV, frappe 6 ; 10 dégâts à la cible. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["deg","tous",5],["invoque","Coyote des cendres",10,6],["deg","cible",10],["prixBete",3]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Itzcuin écrivit la ligne lui-même ; le seigneur la lut sans protester, ce qui l'inquiéta davantage.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT130-moins-6","zone":"ANT130","pole":"-","palier":6,"nom":"La Meute sur la cendre","cout":2,"cible":1,
 "effet":"Un Coyote noir rejoint le combat (12 PV, frappe 7), puis un Vautour pape (8 PV, frappe 5). 12 dégâts à la cible. Prix : votre bête la plus faible perd 4 PV.",
 "ops":[["invoque","Coyote noir",12,7],["invoque","Vautour pape",8,5],["deg","cible",12],["prixBete",4]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Sur la plaine de cendre, seules les meutes se déplacent encore, en file, sur les traces de la précédente.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ANT130-moins7","zone":"ANT130","pole":"-","palier":7,"nom":"La Plaine de cendre","cout":2,"cible":0,
 "effet":"Le fjord n'est plus qu'une plaine. 6 dégâts à tous. Le Vautour-roi des cendres (16 PV, frappe 10) ; 3 coups de 4 au hasard. Pose Braise. Si Givre (consommé) : tous hésitent, −1 d'attaque ; 16 de garde. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["deg","tous",6],["invoque","Vautour-roi des cendres",16,10],["deg","hasard",4,3],["pose","Braise"],["reveil","Givre",true,[["hesite","tous"],["affaiblit","tous",1],["garde","heros",16]]],["prixBete",3]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Contrôle","Garde","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"Sous la cendre, les rives se touchent enfin ; on ne sait plus laquelle devait le tribut.",
 "budget":"45,2 sans combo ; réveil +28,4 (63 %)"},
{"id":"ANT130-plus-1","zone":"ANT130","pole":"+","palier":1,"nom":"Le Souci planté","cout":1,"cible":1,
 "effet":"La cible est marquée : +1 dégât à chaque coup. Un Colibri de guerre rejoint le combat : 4 PV, frappe 2. Le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",1],["invoque","Colibri de guerre",4,2],["garde","heros",4],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Marque","Garde","Prix"],
 "ambiance":"On plantait un souci sur la terrasse de chaque captif promis ; la fleur poussait avant la guerre.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ANT130-plus-2","zone":"ANT130","pole":"+","palier":2,"nom":"Le Bouclier fleuri","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 6 dégâts à la cible. Puis elle est marquée : +1 dégât à chaque coup ; 3 dégâts à la cible ; le héros gagne 4 de garde.",
 "ops":[["si","vulnerable",[["deg","cible",6]]],["vulnerable","cible",1],["deg","cible",3],["garde","heros",4]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Garde","Condition"],
 "ambiance":"Le bouclier fleuri se voit de la rive d'en face ; il ne sert qu'à cela.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ANT130-plus-3","zone":"ANT130","pole":"+","palier":3,"nom":"Les Captifs fleuris","cout":2,"cible":1,
 "effet":"La cible est marquée : +2 dégâts à chaque coup. Un Ocelot des neiges rejoint le combat : 8 PV, frappe 4 ; 8 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","cible",2],["invoque","Ocelot des neiges",8,4],["deg","cible",8],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Marque","Prix"],
 "ambiance":"Itzcuin comptait les captifs fleuris d'avance, et chaque rive fournissait sa part.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT130-plus-4","zone":"ANT130","pole":"+","palier":4,"nom":"La Guerre convenue","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 10 dégâts à la cible. Puis elle est marquée : +2 dégâts à chaque coup ; 12 dégâts à la cible. Un Aigle des terrasses rejoint le combat : 6 PV, frappe 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["vulnerable","cible",2],["deg","cible",12],["invoque","Aigle des terrasses",6,4],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"La date de la guerre était gravée aux temples ; on se battait à l'heure dite, puis on rentrait.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ANT130-plus-5","zone":"ANT130","pole":"+","palier":5,"nom":"La Pirogue des guerriers","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, piochez 1 carte. Tous les ennemis sont marqués : +1 dégât à chaque coup ; 14 dégâts à la cible ; piochez 2 cartes. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","vulnerable",[["pioche",1]]],["vulnerable","tous",1],["deg","cible",14],["pioche",2],["ennemiSoin",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Pioche","Condition","Prix"],
 "ambiance":"Les pirogues traversent entre les glaces, chargées de guerriers parés comme pour une noce.",
 "budget":"28,4 / 32 (−11 %)"},
{"id":"ANT130-plus-6","zone":"ANT130","pole":"+","palier":6,"nom":"Le Jaguar de la fête","cout":2,"cible":1,
 "effet":"Un Jaguar des neiges rejoint le combat : 14 PV, frappe 7. La cible est marquée : +3 dégâts à chaque coup ; 12 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Jaguar des neiges",14,7],["vulnerable","cible",3],["deg","cible",12],["prixPV",3]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Marque","Prix"],
 "ambiance":"Le jaguar des neiges descend aux terrasses le jour de la fête, attiré par le parfum, pas par le bruit.",
 "budget":"35,5 / 36 (−1 %)"},
{"id":"ANT130-plus7","zone":"ANT130","pole":"+","palier":7,"nom":"Le Pont de fleurs","cout":2,"cible":0,
 "effet":"Les rives se lient. Ennemis marqués (+2 par coup). L'Aigle de l'autre rive (14 PV, frappe 8) ; 3 coups de 5 au hasard. Pose Sang. Si Racine (consommée) : un Jaguar des neiges (14 PV, frappe 8) ; soin 10. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","tous",2],["invoque","Aigle de l'autre rive",14,8],["deg","hasard",5,3],["pose","Sang"],["reveil","Racine",true,[["invoque","Jaguar des neiges",14,8],["soin","heros",10]]],["prixPV",2]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Marque","Soin","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Sur le pont de fleurs, chacun lie le poignet de l'autre ; personne ne sait plus qui est le captif.",
 "budget":"45,2 sans combo ; réveil +29 (64 %)"}
]
```

---

## 4. Le Hawz de Tondābād (ANT093) — Antre · Marais · Sève · Perse

Recette du récit : la supplique (d'un coupeur de roseaux au gouverneur, avec la réponse en marge). Recette du −7 : la démesure (l'orage qui ne s'en va plus) ; du +7 : le silence (le miroir sans bord).

**Tempête (−)** : ce que jette l'orage → la pluie de carpes → les roseaux coupés → le grain sur les digues → le sanglier sur le toit → la vue dégagée → l'Orage permanent. Fil mécanique : pioche sur 7 cartes (l'orage jette sur la rive de quoi jouer), bêtes tombées du ciel, coups au hasard sur 3 cartes, crochet « la cible vole par-dessus » ; prix : PV et défausse.
**Calme (+)** : l'eau lisse → le héron immobile → le reflet du pavillon → l'impôt du reflet → les barques sur les nuages → le héron et son image → le Miroir sans bord. Fil mécanique : l'écho sur 4 cartes (+1, +2, +3, +7 : l'eau-miroir double la carte suivante), et trois cartes à doubler sans écho (+4, +5, +6, corrigées par le critique : le moteur ne double pas une carte qui porte un écho), bêtes du bassin, garde du héros sur 4 cartes, crochet « votre Garde est levée » lu avant de la lever ; prix : défausse, PV, soin et garde des ennemis.

```json
{"fiche":"ANT093","nom":"Le Hawz de Tondābād",
 "recit":"Supplique de Bahram, coupeur de roseaux, au gouverneur de Tondābād : « Votre Excellence a bâti son pavillon au milieu du marais pour regarder les orages, et nous a fait couper les roseaux qui gênaient la vue. Depuis, rien n'arrête plus le vent. Les orages jettent sur nos toits des hérons, des carpes, une fois un sanglier. Les jours de calme, l'eau est si lisse que Votre Excellence s'y voit à l'envers et réclame l'impôt de son reflet. Nous demandons à laisser repousser les roseaux. » En marge : « Accordé pour l'an prochain. »",
 "pal":["Un orage tourne sans fin au-dessus du marais rasé ; il pleut des hérons et des carpes, et le pavillon du gouverneur n'est plus qu'une charpente qui siffle.","Roseaux couchés, toits crevés, poissons morts sur les digues ; les coupeurs amarrent leurs barques aux piliers du pavillon à chaque grain.","Un marais de roseaux autour d'un bassin carré, un pavillon à colonnes de bois au milieu, des barques de coupeurs et un ciel lourd.","L'eau du bassin devient lisse comme une plaque ; le pavillon s'y reflète entier, et les hérons visent leur propre image sans bouger.","Plus un souffle : le marais est un miroir sans bord où le ciel se pose, et les barques glissent sur les nuages sans laisser de sillage."],
 "pm":"Tempête","pp":"Calme"}
```

```json
[
{"id":"ANT093-moins-1","zone":"ANT093","pole":"-","palier":1,"nom":"Ce que jette l'orage","cout":1,"cible":0,
 "effet":"Piochez 1 carte. Un Héron jeté rejoint le combat : 4 PV, frappe 2. 2 coups de 2 dégâts au hasard. Prix : le héros perd 2 PV.",
 "ops":[["pioche",1],["invoque","Héron jeté",4,2],["deg","hasard",2,2],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le héron tombé sur le toit de Bahram se releva et resta : il n'avait plus de roseaux.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT093-moins-2","zone":"ANT093","pole":"-","palier":2,"nom":"La Pluie de carpes","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, piochez 1 carte. Piochez 2 cartes ; 4 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["pioche",1]]],["pioche",2],["deg","cible",4],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Les jours de grain, les enfants ramassent les carpes dans les ruelles avant que le percepteur arrive.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT093-moins-3","zone":"ANT093","pole":"-","palier":3,"nom":"Les Roseaux coupés","cout":2,"cible":1,
 "effet":"Piochez 2 cartes ; 10 dégâts à la cible. Un Sanglier des digues rejoint le combat : 8 PV, frappe 5. Prix : le héros perd 4 PV.",
 "ops":[["pioche",2],["deg","cible",10],["invoque","Sanglier des digues",8,5],["prixPV",4]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"On coupa les roseaux pour la vue du gouverneur ; le vent entra par la même trouée.",
 "budget":"25,5 / 24 (+6 %)"},
{"id":"ANT093-moins-4","zone":"ANT093","pole":"-","palier":4,"nom":"Le Grain sur les digues","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Piochez 2 cartes ; 3 coups de 4 dégâts au hasard.",
 "ops":[["si","vol",[["deg","cible",10]]],["pioche",2],["deg","hasard",4,3]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Pioche","Condition"],
 "ambiance":"Le grain prend les digues de biais ; les coupeurs se couchent dans les barques et comptent les éclairs.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT093-moins-5","zone":"ANT093","pole":"-","palier":5,"nom":"Le Sanglier sur le toit","cout":2,"cible":1,
 "effet":"Le Sanglier tombé du ciel rejoint le combat : 12 PV, frappe 6. Piochez 2 cartes ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Sanglier tombé du ciel",12,6],["pioche",2],["deg","cible",12],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le sanglier passa la nuit sur le toit de la veuve ; elle demanda au gouverneur s'il était imposable.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT093-moins-6","zone":"ANT093","pole":"-","palier":6,"nom":"La Vue dégagée","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, piochez 2 cartes. Piochez 3 cartes ; 16 dégâts à la cible. Un Héron cendré rejoint le combat : 6 PV, frappe 4. Prix : le héros perd 4 PV.",
 "ops":[["si","vol",[["pioche",2]]],["pioche",3],["deg","cible",16],["invoque","Héron cendré",6,4],["prixPV",4]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Depuis le pavillon, la vue porte jusqu'aux montagnes ; on y voit venir chaque orage de très loin.",
 "budget":"37 / 36 (+3 %)"},
{"id":"ANT093-moins7","zone":"ANT093","pole":"-","palier":7,"nom":"L'Orage permanent","cout":2,"cible":0,
 "effet":"L'orage ne s'en va plus. 4 coups de 6 dégâts au hasard ; piochez 3. Le Grand Héron de l'orage (12 PV, frappe 6). Pose Racine. Si Givre (consommé) : tous hésitent ; 5 dégâts à tous ; piochez 3. Prix : le héros perd 3 PV.",
 "ops":[["deg","hasard",6,4],["pioche",3],["invoque","Grand Héron de l'orage",12,6],["pose","Racine"],["reveil","Givre",true,[["hesite","tous"],["deg","tous",5],["pioche",3]]],["prixPV",3]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Contrôle","Pioche","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"La réponse en marge est restée sans suite : le pavillon tient debout, les roseaux n'ont pas eu le temps.",
 "budget":"48 sans combo ; réveil +32 (67 %)"},
{"id":"ANT093-plus-1","zone":"ANT093","pole":"+","palier":1,"nom":"L'Eau lisse","cout":1,"cible":0,
 "effet":"Écho : la prochaine carte de zone de ce tour compte double. Le héros gagne 3 de garde. Une Grenouille du bassin rejoint le combat : 2 PV, frappe 1.",
 "ops":[["echo"],["garde","heros",3],["invoque","Grenouille du bassin",2,1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Écho"],
 "ambiance":"Bahram ne coupe plus les jours de calme : la moindre lame de faux trouble le reflet du gouverneur.",
 "budget":"10,9 / 10 (+9 %)"},
{"id":"ANT093-plus-2","zone":"ANT093","pole":"+","palier":2,"nom":"Le Héron immobile","cout":1,"cible":1,
 "effet":"Un Héron du bassin rejoint le combat : 6 PV, frappe 3. Écho. Si votre Garde est levée, 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Héron du bassin",6,3],["echo"],["si","garde",[["deg","cible",6]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Écho","Condition","Prix"],
 "ambiance":"Le héron vise le poisson et son image à la fois ; il attend qu'ils se rejoignent.",
 "budget":"13,5 / 12,5 (+8 %)"},
{"id":"ANT093-plus-3","zone":"ANT093","pole":"+","palier":3,"nom":"Le Reflet du pavillon","cout":2,"cible":0,
 "effet":"Si votre Garde est levée, piochez 1 carte. Écho ; piochez 2 cartes ; le héros se soigne de 4 et gagne 8 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["pioche",1]]],["echo"],["pioche",2],["soin","heros",4],["garde","heros",8],["ennemiSoin",1]],
 "tags":["Antre","Sève","Pôle +","Garde","Soin","Pioche","Écho","Condition","Prix"],
 "ambiance":"Le pavillon a ses colonnes dans l'air et dans l'eau ; on ne sait plus lesquelles portent le toit.",
 "budget":"24,2 / 24 (+1 %)"},
{"id":"ANT093-plus-4","zone":"ANT093","pole":"+","palier":4,"nom":"L'Impôt du reflet","cout":2,"cible":1,
 "effet":"18 dégâts à la cible. Une Carpe miroir rejoint le combat : 10 PV, frappe 4. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",18],["invoque","Carpe miroir",10,4],["prixPV",2]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Invocation","Prix"],
 "ambiance":"Le gouverneur se vit à l'envers dans le bassin et fit lever l'impôt sur le reflet des maisons.",
 "budget":"27 / 28 (-4 %) recalculé par le critique"},
{"id":"ANT093-plus-5","zone":"ANT093","pole":"+","palier":5,"nom":"Les Barques sur les nuages","cout":2,"cible":1,
 "effet":"Si votre Garde est levée, 12 dégâts à la cible. Le héros gagne 10 de garde ; piochez 2 cartes ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","garde",[["deg","cible",12]]],["garde","heros",10],["pioche",2],["deg","cible",12],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Condition","Dégâts","Garde","Pioche","Prix"],
 "ambiance":"Les coupeurs rament sur le ciel renversé ; ils évitent les nuages, par superstition, comme des écueils.",
 "budget":"31 / 32 (-3 %) recalculé par le critique"},
{"id":"ANT093-plus-6","zone":"ANT093","pole":"+","palier":6,"nom":"Le Héron et son image","cout":2,"cible":1,
 "effet":"Un Héron blanc rejoint le combat (12 PV, frappe 6), puis son Reflet (8 PV, frappe 4). 14 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Héron blanc",12,6],["invoque","Reflet du héron",8,4],["deg","cible",14],["prixPV",3]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"Le bassin compte un héron de trop ; un seul a des plumes, et c'est lui qui a faim.",
 "budget":"36 / 36 (+0 %) recalculé par le critique"},
{"id":"ANT093-plus7","zone":"ANT093","pole":"+","palier":7,"nom":"Le Miroir sans bord","cout":2,"cible":1,
 "effet":"Le ciel se pose sur l'eau. Écho. Le Héron-reflet (14 PV, frappe 8) ; 12 de garde ; piochez 2 ; 6 dégâts à la cible. Pose Givre. Si Sceau (consommé) : piochez 3 ; écho ; 14 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["echo"],["invoque","Héron-reflet",14,8],["garde","heros",12],["pioche",2],["deg","cible",6],["pose","Givre"],["reveil","Sceau",true,[["pioche",3],["echo"],["garde","heros",14]]],["ennemiGarde",1]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Garde","Pioche","Écho","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"Plus un souffle sur le marais : le gouverneur cherche son pavillon, et ne trouve que son reflet.",
 "budget":"46,6 sans combo ; réveil +29,2 (63 %)"}
]
```

---

## 5. Pervigilium, le Fortin des Veilles (ANT026) — Antre · Steppe · Vent · Romaine

Recette du récit : le rapport de garde (toujours le même). Recette du −7 : le silence (tout dort, même le vent) ; du +7 : l'ordre (tous les bûchers de la ligne brûlent à la fois).

**Sommeil (−)** : rien à signaler → la relève oubliée → les chevaux couchés en cercle → le bûcher couvert de nids → la palissade penchée → le décurion assis → la Garnison endormie. Fil mécanique : garde des alliés sur 7 cartes (le troupeau endormi fait le mur), chevaux lourds à faible attaque, soin du héros sur 4 cartes, crochet « la cible s'apprête à piétiner » ; prix : PV, soin et garde des ennemis.
**Éveil (+)** : la sonnerie de relève → le bûcher d'exercice → la patrouille au trot → le feu sur la tour → l'enclos ouvert → le signal de fortin en fortin → la Ligne en feu. Fil mécanique : invocations sur 6 cartes (la remonte lâchée, chiens et aigles), gros coups, crochet « la cible prend son élan » ; prix : PV, garde ennemie, défausse.

```json
{"fiche":"ANT026","nom":"Pervigilium, le Fortin des Veilles",
 "recit":"Les rapports du fortin de Pervigilium sont conservés au camp de la légion, liés par saison. Ils sont tous de la main du décurion Marcus Albucius et disent tous la même chose : « Rien à signaler. Chevaux de remonte au pâturage. Feu de signal prêt. » On cessa de les lire bien avant qu'il cesse de les écrire. Quand les cavaliers de la steppe passèrent enfin, le feu ne fut pas allumé : on retrouva la garnison endormie, et le décurion assis, le stylet à la main, sur un rapport commencé.",
 "pal":["Herbe haute jusqu'aux créneaux, chevaux couchés en cercle dans la cour, sentinelles assises contre les pieux ; tout dort, même le vent dans les enseignes.","Pieux penchés, fossé comblé d'herbe, garnison qui somnole à l'ombre de la palissade ; le bûcher du signal est couvert de nids d'alouettes.","Un fortin de terre et de pieux sur la steppe, un enclos de chevaux de remonte, une tour de guet et son bûcher de signal prêt à prendre.","Patrouilles au trot, trompe à chaque relève ; on allume le bûcher pour s'exercer et la fumée se voit d'un fortin à l'autre.","Tous les bûchers de la ligne brûlent à la fois, à perte de vue ; la remonte entière galope hors de l'enclos et plus personne ne se couche."],
 "pm":"Sommeil","pp":"Éveil"}
```

```json
[
{"id":"ANT026-moins-1","zone":"ANT026","pole":"-","palier":1,"nom":"Rien à signaler","cout":1,"cible":0,
 "effet":"Un Cheval assoupi rejoint le combat : 10 PV, frappe 1. Vos alliés gagnent 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Cheval assoupi",10,1],["garde","allies",4],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Albucius écrivait son rapport avant la relève, pour gagner du temps ; la relève, elle, n'en gagnait plus.",
 "budget":"10,3 / 10 (+3 %)"},
{"id":"ANT026-moins-2","zone":"ANT026","pole":"-","palier":2,"nom":"La Relève oubliée","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, vos alliés gagnent 6 de garde. Puis vos alliés gagnent 4 de garde ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","pietine",[["garde","allies",6]]],["garde","allies",4],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle −","Garde","Soin","Condition","Prix"],
 "ambiance":"La sentinelle de minuit ne réveilla pas celle de l'aube ; aucune ne s'en plaignit au rapport.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ANT026-moins-3","zone":"ANT026","pole":"-","palier":3,"nom":"Les Chevaux couchés en cercle","cout":2,"cible":0,
 "effet":"Une Jument de remonte rejoint le combat (14 PV, frappe 2), puis un Hongre (10 PV, frappe 2). Vos alliés gagnent 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Jument de remonte",14,2],["invoque","Hongre de remonte",10,2],["garde","allies",6],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Les chevaux de remonte dorment en cercle, la tête dedans ; c'est l'herbe qui monte la garde.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT026-moins-4","zone":"ANT026","pole":"-","palier":4,"nom":"Le Bûcher couvert de nids","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, vos alliés gagnent 8 de garde. Vos alliés gagnent 8 de garde ; le héros se soigne de 6 ; 6 dégâts à la cible.",
 "ops":[["si","pietine",[["garde","allies",8]]],["garde","allies",8],["soin","heros",6],["deg","cible",6]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Garde","Soin","Condition"],
 "ambiance":"Les alouettes nichent dans le bûcher du signal ; personne n'a le cœur de les déloger avant l'automne.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ANT026-moins-5","zone":"ANT026","pole":"-","palier":5,"nom":"La Palissade penchée","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 10 de garde. Une Mule du fortin rejoint le combat : 16 PV, frappe 2 ; 10 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",10],["invoque","Mule du fortin",16,2],["deg","cible",10],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"La palissade penche vers l'intérieur, comme une garnison qui s'adosse ; la mule la soutient, debout.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT026-moins-6","zone":"ANT026","pole":"-","palier":6,"nom":"Le Décurion assis","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, le héros se soigne de 10. Vos alliés gagnent 12 de garde ; 14 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["soin","heros",10]]],["garde","allies",12],["deg","cible",14],["pioche",1],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le stylet est resté dans sa main ; sur la tablette, il n'avait écrit que la date, très appliqué.",
 "budget":"35,4 / 36 (−2 %)"},
{"id":"ANT026-moins7","zone":"ANT026","pole":"-","palier":7,"nom":"La Garnison endormie","cout":2,"cible":1,
 "effet":"Le fortin dort debout. Alliés : 16 de garde. La Remonte endormie (20 PV, frappe 3) ; soin 12 ; la cible hésite. Pose Givre. Si Racine (consommée) : un Chien de garde (12 PV, frappe 6) ; alliés : 12 de garde. Prix : ennemis soignés de 2.",
 "ops":[["garde","allies",16],["invoque","Remonte endormie",20,3],["soin","heros",12],["hesite","cible"],["pose","Givre"],["reveil","Racine",true,[["invoque","Chien de garde",12,6],["garde","allies",12]]],["ennemiSoin",2]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Contrôle","Garde","Soin","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Les cavaliers de la steppe passèrent au pas, pour ne réveiller personne ; ils y réussirent parfaitement.",
 "budget":"46,3 sans combo ; réveil +29,4 (63 %)"},
{"id":"ANT026-plus-1","zone":"ANT026","pole":"+","palier":1,"nom":"La Trompe de relève","cout":1,"cible":0,
 "effet":"Un Chien de guerre rejoint le combat : 6 PV, frappe 4. Le héros gagne 3 de garde. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Chien de guerre",6,4],["garde","heros",3],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"La trompe sonne à chaque relève ; les chiens se lèvent avant les hommes, et grondent contre eux.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT026-plus-2","zone":"ANT026","pole":"+","palier":2,"nom":"Le Bûcher d'exercice","cout":1,"cible":1,
 "effet":"Un Cheval de patrouille rejoint le combat : 6 PV, frappe 5. 4 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Cheval de patrouille",6,5],["deg","cible",4],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"On allume le bûcher pour s'exercer ; les fortins voisins répondent, et toute la ligne se fâche.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT026-plus-3","zone":"ANT026","pole":"+","palier":3,"nom":"La Patrouille au trot","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Un Étalon de remonte rejoint le combat : 10 PV, frappe 6. Piochez 1 carte.",
 "ops":[["si","elan",[["deg","cible",10]]],["invoque","Étalon de remonte",10,6],["pioche",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Pioche","Condition"],
 "ambiance":"La patrouille part au trot et revient au trot ; elle ne rapporte rien, mais elle le rapporte éveillée.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT026-plus-4","zone":"ANT026","pole":"+","palier":4,"nom":"Le Feu sur la tour","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 6 dégâts à la cible. Puis 12 dégâts à la cible ; elle brûle : 3 dégâts au début de ses 2 prochains tours. Piochez 2 cartes. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",6]]],["deg","cible",12],["brulure","cible",3,2],["pioche",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Brûlure","Pioche","Condition","Prix"],
 "ambiance":"Le feu prend d'un coup sur la tour ; dans la fumée, les nids d'alouettes s'envolent les premiers.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT026-plus-5","zone":"ANT026","pole":"+","palier":5,"nom":"L'Enclos ouvert","cout":2,"cible":1,
 "effet":"Un Étalon noir rejoint le combat (12 PV, frappe 8), puis une Jument rétive (8 PV, frappe 6). 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Étalon noir",12,8],["invoque","Jument rétive",8,6],["deg","cible",6],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"On ouvre l'enclos sans compter les bêtes ; la remonte sort d'elle-même, au galop, vers la fumée.",
 "budget":"34 / 32 (+6 %)"},
{"id":"ANT026-plus-6","zone":"ANT026","pole":"+","palier":6,"nom":"Le Signal de fortin en fortin","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts à la cible. Un Aigle des steppes rejoint le combat : 10 PV, frappe 8. 12 dégâts à la cible ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["deg","cible",8]]],["invoque","Aigle des steppes",10,8],["deg","cible",12],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le signal court de fortin en fortin plus vite qu'un cheval ; Albucius, cette fois, n'a rien à écrire.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT026-plus7","zone":"ANT026","pole":"+","palier":7,"nom":"La Ligne en feu","cout":2,"cible":0,
 "effet":"Tous les bûchers s'allument. L'Étalon de la ligne (18 PV, frappe 10). Tous les ennemis brûlent, 2 par tour sur 3 tours ; 3 coups de 4 au hasard. Pose Braise. Si Sang (consommé) : 7 dégâts à tous, en vol de vie ; 8 de garde. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Étalon de la ligne",18,10],["brulure","tous",2,3],["deg","hasard",4,3],["pose","Braise"],["reveil","Sang",true,[["deg","tous",7],["volVie"],["garde","heros",8]]],["prixPV",3]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Brûlure","Vol de vie","Garde","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"Toute la ligne brûle à la fois, d'un horizon à l'autre ; les cavaliers de la steppe font demi-tour.",
 "budget":"46,2 sans combo ; réveil +29,5 (64 %)"}
]
```

---

## 6. La Skhodka de Kaplitsa (ASS017) — Assemblée · Archipel · Eau · Slave

Recette du récit : le décret et ses ajouts au couteau. Recette du −7 : la ruine (gouttières dévissées, mer retirée) ; du +7 : la démesure (on vote debout dans les barques amarrées aux faîtes).

**Sécheresse (−)** : loi de la gouttière → la dîme du starosta → loi des gouttières dévissées → le seau qu'on passe → loi de la gorgée → loi du starosta → le Toit du starosta. Fil mécanique : soin du héros sur 7 cartes (l'eau rationnée va d'abord au starosta), Lois, pioche, crochet « une carte a déjà été défaussée en prix ce tour » ; prix : défausse, soin des ennemis.
**Déluge (+)** : loi des tonneaux → les gouttières qui chantent → loi de la crue → la ruelle d'eau → loi des faîtes → les barques amarrées aux toits → le Vote dans les barques. Fil mécanique : mana d'Eau sur 7 cartes, jamais plus de 2 par opération (la crue remplit les toits), gros coups, dégâts à tous sur 3 cartes, crochet « la cible a de la garde » ; prix : PV, défausse, soin et garde des ennemis.

```json
{"fiche":"ASS017","nom":"La Skhodka de Kaplitsa",
 "recit":"Décret de la skhodka de Kaplitsa, gravé sur la poutre du hangar commun : « Chaque île recueille la pluie de ses toits dans ses gouttières, et la boit. » Premier ajout, au couteau : « …après en avoir versé la dîme à la gouttière du starosta. » Ajout suivant : « Les gouttières des îles qui n'ont pas payé seront dévissées. » Le starosta Ostap Vodianik fit élargir la sienne à chaque saison sèche. L'année du déluge, elle déborda la première, et l'eau de toutes les îles lui tomba sur la tête.",
 "pal":["Toits de chaume racornis, gouttières dévissées empilées devant la maison du starosta ; la mer a reculé autour des îles et découvre des rochers secs.","Les gouttières de bouleau pendent, fendues ; on passe le seau d'île en île et chaque passeur en boit une gorgée avant de le tendre.","Un archipel d'îlots boisés reliés par des barques ; chaque isba a ses gouttières de bouleau, et un grand hangar commun domine l'île du conseil.","Pluies lourdes, gouttières qui chantent, tonneaux qui débordent ; les ruelles d'eau entre les isbas montent jusqu'aux marches.","Les îles ont disparu sous la crue : seuls dépassent les toits, et la skhodka vote debout dans les barques amarrées aux faîtes."],
 "pm":"Sécheresse","pp":"Déluge"}
```

```json
[
{"id":"ASS017-moins-1","zone":"ASS017","pole":"-","palier":1,"nom":"Loi de la gouttière","cout":1,"cible":0,
 "effet":"Loi : le héros se soigne de 8 ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","heros",8],["pioche",1],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Soin","Pioche","Prix"],
 "ambiance":"La loi tenait en une ligne sur la poutre ; les ajouts au couteau prirent bientôt toute la largeur.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS017-moins-2","zone":"ASS017","pole":"-","palier":2,"nom":"La Dîme du starosta","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, piochez 1 carte. Le héros se soigne de 6 ; 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["pioche",1]]],["soin","heros",6],["deg","cible",6],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"La gouttière d'Ostap Vodianik s'élargit à chaque saison sèche ; celle des îles, jamais.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS017-moins-3","zone":"ASS017","pole":"-","palier":3,"nom":"Loi des gouttières dévissées","cout":2,"cible":1,
 "effet":"Loi : toute garde ennemie tombe à 0. Le héros se soigne de 10 ; −3 d'attaque à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["soin","heros",10],["affaiblit","cible",3],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Perce-garde","Soin","Prix"],
 "ambiance":"Les gouttières des îles en retard s'empilent devant la maison du starosta, rangées par taille.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"ASS017-moins-4","zone":"ASS017","pole":"-","palier":4,"nom":"Le Seau qu'on passe","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, le héros se soigne de 8. Puis il se soigne de 8 ; piochez 2 cartes ; 8 dégâts à la cible.",
 "ops":[["si","defausseAPrix",[["soin","heros",8]]],["soin","heros",8],["pioche",2],["deg","cible",8]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Soin","Pioche","Condition"],
 "ambiance":"Le seau passe d'île en île ; chaque passeur boit une gorgée, et le dernier rend un seau vide.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS017-moins-5","zone":"ASS017","pole":"-","palier":5,"nom":"Loi de la gorgée","cout":2,"cible":1,
 "effet":"Loi : le héros se soigne de 12 et gagne 8 de garde ; 12 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","heros",12],["garde","heros",8],["deg","cible",12],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Garde","Soin","Prix"],
 "ambiance":"La skhodka fixa la gorgée à la mesure d'une louche ; le starosta fournit la louche, et la tint.",
 "budget":"28,2 / 32 (−12 %)"},
{"id":"ASS017-moins-6","zone":"ASS017","pole":"-","palier":6,"nom":"Loi du starosta","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, 10 dégâts à la cible. Le héros se soigne de 14 ; 14 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["soin","heros",14],["deg","cible",14],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le starosta ne vote pas les lois sur l'eau : il les boit, debout, devant le hangar.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS017-moins7","zone":"ASS017","pole":"-","palier":7,"nom":"Le Toit du starosta","cout":2,"cible":1,
 "effet":"Le starosta boit pour tous. Le héros se soigne de 16 et gagne 12 de garde ; 16 dégâts à la cible ; piochez 2. Pose Sang. Si Braise (consommée) : tous les ennemis brûlent, 3 par tour sur 3 tours ; soin 10. Prix : chaque ennemi se soigne de 2.",
 "ops":[["soin","heros",16],["garde","heros",12],["deg","cible",16],["pioche",2],["pose","Sang"],["reveil","Braise",true,[["brulure","tous",3,3],["soin","heros",10]]],["ennemiSoin",2]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Brûlure","Garde","Soin","Pioche","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Sa gouttière était la plus large de l'archipel ; le jour du déluge, elle le resta, et de loin.",
 "budget":"45,2 sans combo ; réveil +29,8 (66 %)"},
{"id":"ASS017-plus-1","zone":"ASS017","pole":"+","palier":1,"nom":"Loi des tonneaux","cout":1,"cible":0,
 "effet":"Loi : +1 mana d'Eau ; piochez 1 carte ; le héros se soigne de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Eau",1],["pioche",1],["soin","heros",4],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Soin","Pioche","Mana","Prix"],
 "ambiance":"Chaque isba doit tenir un tonneau sous sa gouttière ; la loi ne dit pas quoi faire quand il déborde.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS017-plus-2","zone":"ASS017","pole":"+","palier":2,"nom":"Les Gouttières qui chantent","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts à la cible. +2 mana d'Eau ; 3 dégâts à la cible.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["mana","Eau",2],["deg","cible",3]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Mana","Condition"],
 "ambiance":"Les gouttières de bouleau chantent sous la pluie lourde ; chaque île reconnaît la sienne à la note.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS017-plus-3","zone":"ASS017","pole":"+","palier":3,"nom":"Loi de la crue","cout":2,"cible":0,
 "effet":"Loi : +2 mana d'Eau ; 5 dégâts à tous les ennemis ; piochez 2 cartes. Prix : le héros perd 2 PV.",
 "ops":[["mana","Eau",2],["deg","tous",5],["pioche",2],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Pioche","Mana","Prix"],
 "ambiance":"La skhodka décréta que l'eau de pluie appartenait à qui la recevait ; elle en reçut jusqu'aux genoux.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS017-plus-4","zone":"ASS017","pole":"+","palier":4,"nom":"La Ruelle d'eau","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis sa garde tombe à 0 ; +2 mana d'Eau ; 14 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["briseGarde","cible"],["mana","Eau",2],["deg","cible",14],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Perce-garde","Mana","Condition","Prix"],
 "ambiance":"Les ruelles d'eau montent jusqu'aux marches des isbas ; on rend visite au voisin en barque, par la fenêtre.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"ASS017-plus-5","zone":"ASS017","pole":"+","palier":5,"nom":"Loi des faîtes","cout":2,"cible":1,
 "effet":"Loi : +2 mana d'Eau ; 5 dégâts à tous les ennemis ; 12 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Eau",2],["deg","tous",5],["deg","cible",12],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Pioche","Mana","Prix"],
 "ambiance":"Il fut décidé que chaque famille garderait son toit ; c'était devenu la seule chose à garder.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS017-plus-6","zone":"ASS017","pole":"+","palier":6,"nom":"Les Barques amarrées aux toits","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. +2 mana d'Eau ; 18 dégâts à la cible ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["mana","Eau",2],["deg","cible",18],["garde","heros",8],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Garde","Mana","Condition","Prix"],
 "ambiance":"Les barques sont amarrées aux cheminées ; Ostap Vodianik écope la sienne avec la louche de la gorgée.",
 "budget":"34,4 / 36 (−4 %)"},
{"id":"ASS017-plus7","zone":"ASS017","pole":"+","palier":7,"nom":"Le Vote dans les barques","cout":2,"cible":1,
 "effet":"On vote debout dans l'eau. +2 mana d'Eau ; 6 dégâts à tous ; 16 dégâts à la cible ; piochez 2 ; 6 de garde. Pose Abîme. Si Sceau (consommé) : piochez 3 ; +2 mana d'Eau ; 10 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Eau",2],["deg","tous",6],["deg","cible",16],["pioche",2],["garde","heros",6],["pose","Abîme"],["reveil","Sceau",true,[["pioche",3],["mana","Eau",2],["deg","cible",10]]],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Garde","Pioche","Mana","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"On vote à main levée, l'autre main au faîte ; le starosta, lui, vote assis sur son toit.",
 "budget":"46 sans combo ; réveil +28 (61 %)"}
]
```

---

## 7. Le Conseil de Züüdtei-Tal (ASS057) — Assemblée · Savane · Feu · Mongole

Recette du récit : le songe consigné (les rêves de la chamane dictés au scribe et changés en décrets). Recette du −7 : la démesure (la savane qui brûle par bandes décrétées) ; du +7 : la foule (tout le camp endormi en plein jour).

**Cauchemar (−)** : loi du cheval noir → le rêve d'herbe qui brûle → loi du feu de l'après-midi → la chamane sans sommeil → loi de l'autre chamane → les décrets lus aux troupeaux → la Savane décrétée. Fil mécanique : pioche sur 7 cartes payée en PV (chaque songe dicté coûte une nuit), Lois, gros coups, brûlure sur 3 cartes, crochet « c'est au moins votre troisième carte » (3 cartes) ; prix : PV seulement, comme le sommeil perdu.
**Rêve (+)** : loi du cheval blanc → la remise d'impôt → loi du dormeur → le scribe à voix basse → loi des yourtes ouvertes → le rêve de chevaux → le Camp endormi. Fil mécanique : l'exil sur 6 cartes (un songe ne sert qu'une fois : la carte quitte le combat et revient au suivant), Lois, chevaux des songes sur 4 cartes, garde des alliés sur 4 cartes, pioche sur une seule (réécrit par le critique : la pioche était sur 7 cartes, comme le Cauchemar), crochet « il ne reste qu'un ennemi » ; prix : l'exil.

```json
{"fiche":"ASS057","nom":"Le Conseil de Züüdtei-Tal",
 "recit":"Chaque matin, au conseil de Züüdtei-Tal, la chamane Bürged racontait son rêve, et le scribe du khan l'écrivait en décret. Rêver d'un cheval blanc valait une remise d'impôt ; rêver d'herbe qui brûle valait un feu de brousse, allumé l'après-midi pour ne pas contredire le ciel. Les bonnes années, Bürged rêvait beaucoup de chevaux. Puis le khan fit nommer une autre chamane, qui rêvait de taxes. Bürged cessa de dormir. Le scribe, qui ne savait plus quoi écrire, se mit à rêver lui-même.",
 "pal":["La savane brûle par bandes régulières, comme décrétées ; du conseil restent des carcasses de perches, et des chevaux affolés courent entre les feux.","Herbe roussie par carrés, fumées le soir, scribes qui lisent des décrets à des troupeaux nerveux ; personne ne dort plus sous les yourtes.","Une savane d'herbes hautes et d'acacias, un camp de yourtes autour de la grande yourte du conseil, des chevaux qui paissent à perte de vue.","Chevaux blancs dans les herbes, yourtes ouvertes à midi ; on dort au conseil, et le scribe note à voix basse ce que murmurent les dormeurs.","Tout le camp dort en plein jour, couché dans l'herbe autour de la yourte ouverte, et les décrets s'écrivent mot à mot sous la main du scribe endormi."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ASS057-moins-1","zone":"ASS057","pole":"-","palier":1,"nom":"Loi du cheval noir","cout":1,"cible":0,
 "effet":"Loi : piochez 2 cartes ; le héros gagne 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["garde","heros",4],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Garde","Pioche","Prix"],
 "ambiance":"Bürged rêva d'un cheval noir ; le scribe chercha longtemps dans quelle colonne l'inscrire.",
 "budget":"9,2 / 10 (−8 %)"},
{"id":"ASS057-moins-2","zone":"ASS057","pole":"-","palier":2,"nom":"Le Rêve d'herbe qui brûle","cout":1,"cible":1,
 "effet":"Piochez 1 carte. La cible brûle : 3 dégâts au début de ses 3 prochains tours. Prix : le héros perd 1 PV.",
 "ops":[["pioche",1],["brulure","cible",3,3],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Brûlure","Pioche","Prix"],
 "ambiance":"On alluma le feu l'après-midi, pour ne pas contredire le ciel ; le ciel, lui, ne fut pas consulté.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS057-moins-3","zone":"ASS057","pole":"-","palier":3,"nom":"Loi du feu de l'après-midi","cout":2,"cible":1,
 "effet":"Loi : si c'est au moins votre troisième carte ce tour, 10 dégâts à la cible. Piochez 2 cartes ; 3 dégâts à tous les ennemis ; 6 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["deg","cible",10]]],["pioche",2],["deg","tous",3],["deg","cible",6],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le décret fixait l'heure du feu de brousse ; il ne disait pas de quel côté soufflerait le vent.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS057-moins-4","zone":"ASS057","pole":"-","palier":4,"nom":"La Chamane sans sommeil","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, piochez 1 carte. Piochez 3 cartes ; 11 dégâts à la cible.",
 "ops":[["si","troisCartes",[["pioche",1]]],["pioche",3],["deg","cible",11]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Pioche","Condition"],
 "ambiance":"Bürged veille assise devant sa yourte ; tant qu'elle ne dort pas, personne ne peut lui prendre ses rêves.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS057-moins-5","zone":"ASS057","pole":"-","palier":5,"nom":"Loi de l'autre chamane","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; 14 dégâts à la cible ; −2 d'attaque à la cible ; elle brûle : 3 dégâts au début de ses 2 prochains tours. Prix : le héros perd 3 PV.",
 "ops":[["pioche",2],["deg","cible",14],["affaiblit","cible",2],["brulure","cible",3,2],["prixPV",3]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Brûlure","Affaiblissement","Pioche","Prix"],
 "ambiance":"L'autre chamane rêvait de taxes avec une grande précision ; le khan admira la netteté de ses songes.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS057-moins-6","zone":"ASS057","pole":"-","palier":6,"nom":"Les Décrets lus aux troupeaux","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 6 dégâts à tous les ennemis. Piochez 3 cartes ; 16 dégâts à la cible ; le héros gagne 6 de garde. Prix : le héros perd 3 PV.",
 "ops":[["si","troisCartes",[["deg","tous",6]]],["pioche",3],["deg","cible",16],["garde","heros",6],["prixPV",3]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les scribes lisent les décrets aux troupeaux, faute d'éleveurs encore éveillés pour les écouter.",
 "budget":"36,4 / 36 (+1 %)"},
{"id":"ASS057-moins7","zone":"ASS057","pole":"-","palier":7,"nom":"La Savane décrétée","cout":2,"cible":1,
 "effet":"Le cauchemar devient la loi. Piochez 3 ; 5 dégâts à tous ; tous brûlent, 2 par tour sur 3 tours ; 12 dégâts à la cible. Pose Braise. Si Abîme (consommé) : toute garde ennemie tombe ; 16 dégâts à la cible ; piochez 2. Prix : le héros perd 3 PV.",
 "ops":[["pioche",3],["deg","tous",5],["brulure","tous",2,3],["deg","cible",12],["pose","Braise"],["reveil","Abîme",true,[["briseGarde","tous"],["deg","cible",16],["pioche",2]]],["prixPV",3]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Brûlure","Perce-garde","Pioche","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"La savane brûle par bandes régulières ; le scribe en a recopié le plan avant qu'on le lui dicte.",
 "budget":"45,2 sans combo ; réveil +30,6 (68 %)"},
{"id":"ASS057-plus-1","zone":"ASS057","pole":"+","palier":1,"nom":"Loi du cheval blanc","cout":1,"cible":0,
 "effet":"Loi : le héros se soigne de 6 et gagne 4 de garde ; gagnez 1 mana de Feu. Prix : cette carte s'exile.",
 "ops":[["soin","heros",6],["garde","heros",4],["mana","Feu",1],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Soin","Garde","Mana","Exil","Prix"],
 "ambiance":"Rêver d'un cheval blanc valait une remise d'impôt ; on ne rêvait jamais du même cheval chaque nuit.",
 "budget":"9,2 / 10 (-8 %) recalculé par le critique"},
{"id":"ASS057-plus-2","zone":"ASS057","pole":"+","palier":2,"nom":"La Remise d'impôt","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 6 dégâts à la cible. Un Poulain des songes rejoint le combat : 8 PV, frappe 3 ; vos alliés gagnent 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",6]]],["invoque","Poulain des songes",8,3],["garde","allies",4],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Condition","Dégâts","Invocation","Garde","Exil","Prix"],
 "ambiance":"La remise ne valait que pour l'année du rêve ; l'année suivante, il fallait rêver de nouveau.",
 "budget":"13,3 / 12,5 (+6 %) recalculé par le critique"},
{"id":"ASS057-plus-3","zone":"ASS057","pole":"+","palier":3,"nom":"Loi du dormeur","cout":2,"cible":1,
 "effet":"Loi : la cible hésite ; 14 dégâts à la cible ; vos alliés se soignent de 6. Prix : cette carte s'exile.",
 "ops":[["hesite","cible"],["deg","cible",14],["soin","allies",6],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Contrôle","Dégâts","Soin","Exil","Prix"],
 "ambiance":"Nul ne réveille un dormeur au conseil : son rêve appartient peut-être déjà au khan.",
 "budget":"25 / 24 (+4 %) recalculé par le critique"},
{"id":"ASS057-plus-4","zone":"ASS057","pole":"+","palier":4,"nom":"Le Scribe à voix basse","cout":2,"cible":1,
 "effet":"Un Cheval blanc des songes rejoint le combat : 14 PV, frappe 6. S'il ne reste qu'un ennemi, 12 dégâts à la cible. Puis 6 dégâts à la cible.",
 "ops":[["invoque","Cheval blanc des songes",14,6],["si","seul",[["deg","cible",12]]],["deg","cible",6]],
 "tags":["Assemblée","Feu","Pôle +","Invocation","Condition","Dégâts"],
 "ambiance":"Le scribe note ce que murmurent les dormeurs, jamais ce qu'il rêve lui-même ; il rêve pourtant.",
 "budget":"28 / 28 (+0 %) recalculé par le critique"},
{"id":"ASS057-plus-5","zone":"ASS057","pole":"+","palier":5,"nom":"Loi des yourtes ouvertes","cout":2,"cible":1,
 "effet":"Loi : vos alliés gagnent 8 de garde et se soignent de 6 ; 14 dégâts à la cible ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["garde","allies",8],["soin","allies",6],["deg","cible",14],["pioche",1],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Garde","Soin","Pioche","Exil","Prix"],
 "ambiance":"On dort yourtes ouvertes, à midi, pour que les rêves entrent ; il entre surtout des mouches.",
 "budget":"33,6 / 32 (+5 %)"},
{"id":"ASS057-plus-6","zone":"ASS057","pole":"+","palier":6,"nom":"Le Rêve de chevaux","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, vos alliés se soignent de 8. Un Cheval blanc des songes rejoint le combat : 14 PV, frappe 6. 12 dégâts à la cible ; vos alliés gagnent 6 de garde. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["soin","allies",8]]],["invoque","Cheval blanc des songes",14,6],["deg","cible",12],["garde","allies",6],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Condition","Soin","Invocation","Dégâts","Garde","Exil","Prix"],
 "ambiance":"Bürged rêva tant de chevaux blancs que le khan en compta l'impôt remis ; il réveilla la chamane.",
 "budget":"38,2 / 36 (+6 %) recalculé par le critique"},
{"id":"ASS057-plus7","zone":"ASS057","pole":"+","palier":7,"nom":"Le Camp endormi","cout":2,"cible":0,
 "effet":"Les décrets s'écrivent seuls. Un Poulain des songes (8 PV, frappe 3) ; tous les ennemis hésitent ; alliés : 10 de garde. La Jument des songes (16 PV, frappe 8). Pose Sceau. Si Givre (consommé) : −3 d'attaque à tous ; 14 de garde. Prix : exil.",
 "ops":[["invoque","Poulain des songes",8,3],["hesite","tous"],["garde","allies",10],["invoque","Jument des songes",16,8],["pose","Sceau"],["reveil","Givre",true,[["affaiblit","tous",3],["garde","heros",14]]],["exil"]],
 "tags":["Assemblée","Feu","Forme ultime +7","Combo","Pose Sceau","Réveil Givre","Invocation","Contrôle","Garde","Affaiblissement","Exil","Prix"],
 "ambiance":"Tout le camp dort en plein jour ; c'est le seul décret que personne n'a jamais contesté.",
 "budget":"base 46,3 + réveil 31 (67 %) recalculé par le critique"}
]
```

---

## 8. La Maison des Nattes de Che'ha' (ASS114) — Assemblée · Delta fluvial · Eau · Maya

Recette du récit : le contrat de vente (et la clause qui manquait). Recette du −7 : l'ordre (les files de porteurs enchaînés au rythme du gong) ; du +7 : la foule (la forêt si dense que le conseil siège dans les branches).

**Fer (−)** : loi du clou planté → le fer à porteur → loi des haches → la barge de fer → loi du gong → les souches cloutées → la Chaîne des haleurs. Fil mécanique : les porteurs enchaînés font bloqueurs (invocations à forte vie et faible attaque, sur 7 cartes), Lois, gros coups, affaiblissement sur 3 cartes, crochet « la cible a de la garde » ; prix : PV, garde ennemie.
**Bois (+)** : loi de l'écorce fraîche → le clou arraché → loi de la tablette → les plaies qui se ferment → le scribe entre les racines → loi des noms gravés → la Forêt des noms. Fil mécanique : pioche sur 7 cartes (les tablettes d'écorce), Lois, garde du héros et soin du héros sur 4 cartes chacun, crochet « votre Garde est levée » lu avant de la lever ; prix : soin et garde des ennemis, défausse, PV.

```json
{"fiche":"ASS114","nom":"La Maison des Nattes de Che'ha'","recit":"Contrat passé entre le conseil de Che'ha' et les marchands de fer venus d'amont : le conseil cède les acajous du delta, pied par pied ; les marchands paient en haches, en clous et en fers à porteurs. Le scribe Ah K'an Ch'ok marqua chaque arbre vendu d'un clou planté dans l'écorce. Les haches abattirent les arbres, et les fers attachèrent les porteurs qui les traînèrent au fleuve. Le contrat ne prévoyait pas ce que deviendrait le delta sans racines. La crue suivante l'a précisé.","pal":["Le delta n'est qu'une plaine de souches cloutées ; des files de porteurs enchaînés halent les derniers troncs vers les barges de fer, au rythme d'un gong.","Clairières de souches, rives effondrées, chaînes qui cliquettent sur les pontons ; des clous rouillés luisent dans l'écorce des arbres encore debout.","Un delta de bras boueux sous les acajous et les fromagers, une natte de conseil sous le plus grand arbre, des pirogues chargées de cacao.","Les clous sont arrachés et les plaies de l'écorce se ferment ; les scribes écrivent sur des tablettes d'écorce fraîche, assis entre les racines.","Une forêt si dense que le fleuve s'y perd en bras innombrables ; le conseil siège dans les branches, et chaque arbre porte un nom gravé."],"pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"ASS114-moins-1","zone":"ASS114","pole":"-","palier":1,"nom":"Loi du clou planté","cout":1,"cible":1,
 "effet":"Loi : un Porteur enchaîné rejoint le combat : 8 PV, frappe 1. 5 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Porteur enchaîné",8,1],["deg","cible",5],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Invocation","Dégâts","Prix"],
 "ambiance":"Ah K'an Ch'ok plantait le clou d'un seul coup ; il assurait que l'arbre ne sentait rien.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ASS114-moins-2","zone":"ASS114","pole":"-","palier":2,"nom":"Le Fer à porteur","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, −2 d'attaque à la cible. Un Porteur au collier rejoint le combat : 10 PV, frappe 1. −1 d'attaque à la cible. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["affaiblit","cible",2]]],["invoque","Porteur au collier",10,1],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Invocation","Affaiblissement","Condition","Prix"],
 "ambiance":"Les marchands payaient en fers à porteurs ; le conseil les trouva commodes, et les essaya d'abord ailleurs.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ASS114-moins-3","zone":"ASS114","pole":"-","palier":3,"nom":"Loi des haches","cout":2,"cible":1,
 "effet":"Loi : la garde de la cible tombe à 0 ; 12 dégâts à la cible. Un Porteur de troncs rejoint le combat : 12 PV, frappe 2. Prix : le héros perd 2 PV.",
 "ops":[["briseGarde","cible"],["deg","cible",12],["invoque","Porteur de troncs",12,2],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"Une hache contre un acajou, pied par pied, comme le voulait le contrat ; on ne marchanda pas.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS114-moins-4","zone":"ASS114","pole":"-","palier":4,"nom":"La Barge de fer","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Un Haleur enchaîné rejoint le combat : 14 PV, frappe 2. 10 dégâts à la cible ; −1 d'attaque à la cible.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["invoque","Haleur enchaîné",14,2],["deg","cible",10],["affaiblit","cible",1]],
 "tags":["Assemblée","Eau","Pôle −","Invocation","Dégâts","Affaiblissement","Condition"],
 "ambiance":"La barge de fer descend le fleuve chargée d'acajou ; elle remonte chargée de clous, pour l'année suivante.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS114-moins-5","zone":"ASS114","pole":"-","palier":5,"nom":"Loi du gong","cout":2,"cible":1,
 "effet":"Loi : des Porteurs à la chaîne rejoignent le combat : 16 PV, frappe 2. 14 dégâts à la cible ; piochez 2 cartes. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Porteurs à la chaîne",16,2],["deg","cible",14],["pioche",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le gong bat la cadence des haleurs ; celui qui le frappe est enchaîné aussi, par la cheville.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS114-moins-6","zone":"ASS114","pole":"-","palier":6,"nom":"Les Souches cloutées","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. Puis 18 dégâts à la cible ; un Gardien des chaînes rejoint le combat : 12 PV, frappe 4. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["deg","cible",18],["invoque","Gardien des chaînes",12,4],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Chaque souche porte encore son clou ; le scribe peut prouver, arbre par arbre, que tout a été payé.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS114-moins7","zone":"ASS114","pole":"-","palier":7,"nom":"La Chaîne des haleurs","cout":2,"cible":0,
 "effet":"Le fer tient les hommes. La Colonne enchaînée (24 PV, frappe 3) ; alliés : 8 de garde ; −1 d'attaque à tous ; 3 coups de 5 au hasard. Pose Givre. Si Sang (consommé) : 3 coups de 7 au hasard, en vol de vie. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Colonne enchaînée",24,3],["garde","allies",8],["affaiblit","tous",1],["deg","hasard",5,3],["pose","Givre"],["reveil","Sang",true,[["deg","hasard",7,3],["volVie"]]],["prixPV",2]],
 "tags":["Assemblée","Eau","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Vol de vie","Garde","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Le contrat est rempli à la lettre : le delta n'a plus d'arbre à vendre, ni d'acheteur.",
 "budget":"45,7 sans combo ; réveil +31,5 (69 %)"},
{"id":"ASS114-plus-1","zone":"ASS114","pole":"+","palier":1,"nom":"Loi de l'écorce fraîche","cout":1,"cible":0,
 "effet":"Loi : piochez 2 cartes ; le héros gagne 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",2],["garde","heros",4],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Garde","Pioche","Prix"],
 "ambiance":"On écrit sur l'écorce fraîche avec une épine ; le texte durcit avec l'arbre et ne s'efface plus.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS114-plus-2","zone":"ASS114","pole":"+","palier":2,"nom":"Le Clou arraché","cout":1,"cible":1,
 "effet":"Si votre Garde est levée, piochez 1 carte. Piochez 1 carte ; 6 dégâts à la cible ; le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","garde",[["pioche",1]]],["pioche",1],["deg","cible",6],["soin","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les enfants arrachent les clous de l'écorce et les revendent aux marchands, qui les replantent plus bas.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS114-plus-3","zone":"ASS114","pole":"+","palier":3,"nom":"Loi de la tablette","cout":2,"cible":0,
 "effet":"Loi : piochez 3 cartes ; le héros gagne 8 de garde et se soigne de 6. Prix : le héros perd 1 PV.",
 "ops":[["pioche",3],["garde","heros",8],["soin","heros",6],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Garde","Soin","Pioche","Prix"],
 "ambiance":"Le conseil rédigea un autre contrat, sur écorce : chaque arbre y signe, d'une entaille qui se referme.",
 "budget":"23,4 / 24 (−3 %)"},
{"id":"ASS114-plus-4","zone":"ASS114","pole":"+","palier":4,"nom":"Les Plaies qui se ferment","cout":2,"cible":1,
 "effet":"Si votre Garde est levée, 12 dégâts à la cible. Piochez 2 cartes ; le héros se soigne de 8 et gagne 6 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",12]]],["pioche",2],["soin","heros",8],["garde","heros",6],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"La plaie du clou se ferme en bourrelet ; on y lit encore la date de la vente, à l'envers.",
 "budget":"24,8 / 28 (−11 %)"},
{"id":"ASS114-plus-5","zone":"ASS114","pole":"+","palier":5,"nom":"Le Scribe entre les racines","cout":2,"cible":1,
 "effet":"Piochez 3 cartes ; 14 dégâts à la cible. Reprenez en main la dernière carte de votre défausse.",
 "ops":[["pioche",3],["deg","cible",14],["recup"]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Pioche","Récupération"],
 "ambiance":"Devenu vieux, Ah K'an Ch'ok recopie le contrat entre les racines ; il y ajoute une clause.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS114-plus-6","zone":"ASS114","pole":"+","palier":6,"nom":"Loi des noms gravés","cout":2,"cible":1,
 "effet":"Loi : si votre Garde est levée, piochez 2 cartes. Piochez 2 cartes ; 16 dégâts à la cible ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["pioche",2]]],["pioche",2],["deg","cible",16],["garde","heros",10],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Chaque arbre reçoit un nom gravé ; un arbre nommé ne se vend plus au pied.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS114-plus7","zone":"ASS114","pole":"+","palier":7,"nom":"La Forêt des noms","cout":2,"cible":1,
 "effet":"Les arbres ont un nom. Piochez 3 ; un Singe hurleur (14 PV, frappe 6) ; 10 dégâts à la cible ; soin 6 ; récupérez la dernière défausse. Pose Sceau. Si Racine (consommée) : un Jaguar (16 PV, frappe 8) ; alliés : soin 6. Prix : ennemis soignés de 1.",
 "ops":[["pioche",3],["invoque","Singe hurleur",14,6],["deg","cible",10],["soin","heros",6],["recup"],["pose","Sceau"],["reveil","Racine",true,[["invoque","Jaguar des branches",16,8],["soin","allies",6]]],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Forme ultime +7","Invocation","Dégâts","Soin","Pioche","Récupération","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Le conseil siège dans les branches ; on y vote en criant, et le singe hurleur conclut.",
 "budget":"45,8 sans combo ; réveil +29 (63 %)"}
]
```

---

## 9. Le Kurultai d'Üür-Shalbag (ASS109) — Assemblée · Marais · Sève · Mongole

Recette du récit : le serment (et l'heure qu'on a changée). Recette du −7 : l'obscurité habitée (les yeux des chevaux dans les roseaux) ; du +7 : le geste (tous les clans, main levée, qui n'arrivent jamais au dernier mot).

**Nuit (−)** : loi du cercle → les troupeaux serrés → loi de la nuit sans lune → les gardiens dos à dos → loi des chevaux des autres → les yeux dans les roseaux → la Nuit sans fin. Fil mécanique : garde des alliés sur 7 cartes (les troupeaux mis en rond la nuit), Lois, bêtes volées, pioche, crochet « la cible vole par-dessus » ; prix : PV, défausse.
**Aurore (+)** : loi du serment → debout dans l'eau → loi du jour long → les ombres allongées → le serment répété → loi de minuit, lue à l'aube → l'Aube sans fin. Fil mécanique : pioche sur 7 cartes (le serment relu à chaque aube), Lois, récupération sur 4 cartes, soin du héros, crochet « le héros a moins de la moitié de ses PV » ; prix : garde ennemie, défausse, PV.

```json
{"fiche":"ASS109","nom":"Le Kurultai d'Üür-Shalbag",
 "recit":"Formule du serment d'Üür-Shalbag, que chaque chef de clan prononce à l'aube, debout dans le marais jusqu'aux genoux : « Je ne prendrai pas de nuit ce que je ne peux pas demander de jour. » Le noyan Tömör-Ochir la prononçait d'une voix plus claire que personne. On remarqua tard que ses troupeaux grossissaient chaque saison, et toujours après les nuits sans lune. On ne changea pas le serment. On changea l'heure : le kurultai se tient désormais à minuit, et l'on y jure de ne rien prendre de jour.",
 "pal":["Une nuit qui ne finit pas sur le marais : on ne voit que les yeux des chevaux en rond dans les roseaux, et des torches qui s'éteignent quand on les approche.","Brumes du soir, roseaux piétinés, troupeaux serrés en cercle ; les gardiens veillent dos à dos et comptent leurs bêtes au toucher.","Un marais de roseaux et d'îlots d'herbe, des yourtes sur des radeaux de rondins, des chevaux qui pataugent, un tertre pour le kurultai.","Le jour se lève tôt et se couche tard ; les chefs debout dans l'eau prononcent le serment, et leurs ombres s'allongent sur les roseaux.","Une aube qui ne finit pas : tous les clans debout dans le marais, la main levée, répètent le serment sans jamais arriver au dernier mot."],
 "pm":"Nuit","pp":"Aurore"}
```

```json
[
{"id":"ASS109-moins-1","zone":"ASS109","pole":"-","palier":1,"nom":"Loi du cercle","cout":1,"cible":0,
 "effet":"Loi : vos alliés gagnent 4 de garde. Un Cheval des roseaux rejoint le combat : 6 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["garde","allies",4],["invoque","Cheval des roseaux",6,2],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Invocation","Garde","Prix"],
 "ambiance":"La nuit, chaque clan met ses bêtes en rond, têtes dedans ; les voleurs comptent les queues, dehors.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS109-moins-2","zone":"ASS109","pole":"-","palier":2,"nom":"Les Troupeaux serrés","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, vos alliés gagnent 6 de garde. Puis vos alliés gagnent 4 de garde ; 5 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["si","vol",[["garde","allies",6]]],["garde","allies",4],["deg","cible",5],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Les bêtes serrées les unes contre les autres se tiennent chaud, et se volent aussi l'herbe du voisin.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ASS109-moins-3","zone":"ASS109","pole":"-","palier":3,"nom":"Loi de la nuit sans lune","cout":2,"cible":1,
 "effet":"Loi : vos alliés gagnent 8 de garde ; piochez 2 cartes ; 8 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["garde","allies",8],["pioche",2],["deg","cible",8],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Garde","Pioche","Prix"],
 "ambiance":"Les nuits sans lune, Tömör-Ochir se couchait tôt ; on le voyait toujours ronfler, de loin.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS109-moins-4","zone":"ASS109","pole":"-","palier":4,"nom":"Les Gardiens dos à dos","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Vos alliés gagnent 8 de garde ; le héros gagne 6 de garde ; 8 dégâts à la cible.",
 "ops":[["si","vol",[["deg","cible",10]]],["garde","allies",8],["garde","heros",6],["deg","cible",8]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Garde","Condition"],
 "ambiance":"Les gardiens veillent dos à dos, chacun sûr de l'autre ; c'est ainsi qu'on les vole ensemble.",
 "budget":"27,4 / 28 (−2 %)"},
{"id":"ASS109-moins-5","zone":"ASS109","pole":"-","palier":5,"nom":"Loi des chevaux des autres","cout":2,"cible":1,
 "effet":"Loi : un Cheval volé rejoint le combat : 12 PV, frappe 5. Vos alliés gagnent 8 de garde ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Cheval volé",12,5],["garde","allies",8],["deg","cible",12],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Invocation","Dégâts","Garde","Prix"],
 "ambiance":"Le kurultai statua qu'un cheval trouvé de nuit dans un troupeau étranger s'y était perdu tout seul.",
 "budget":"32,1 / 32 (+0 %)"},
{"id":"ASS109-moins-6","zone":"ASS109","pole":"-","palier":6,"nom":"Les Yeux dans les roseaux","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, vos alliés gagnent 10 de garde. Puis ils gagnent 10 de garde ; 16 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["garde","allies",10]]],["garde","allies",10],["deg","cible",16],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Dans les roseaux, des yeux de chevaux brillent en rond ; personne ne sait plus à quel clan ils sont.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ASS109-moins7","zone":"ASS109","pole":"-","palier":7,"nom":"La Nuit sans fin","cout":2,"cible":0,
 "effet":"Le marais garde ses voleurs. Alliés : 14 de garde. L'Étalon de nuit (16 PV, frappe 8) ; piochez 2 ; 6 de garde. Pose Abîme. Si Braise (consommée) : tous les ennemis brûlent, 3 par tour sur 3 tours ; 3 coups de 3 au hasard. Prix : le héros perd 3 PV.",
 "ops":[["garde","allies",14],["invoque","Étalon de nuit",16,8],["pioche",2],["garde","heros",6],["pose","Abîme"],["reveil","Braise",true,[["brulure","tous",3,3],["deg","hasard",3,3]]],["prixPV",3]],
 "tags":["Assemblée","Sève","Forme ultime −7","Invocation","Dégâts","Brûlure","Garde","Pioche","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Le serment ne parle que de la nuit ; depuis qu'elle ne finit plus, tout le marais est en règle.",
 "budget":"46,6 sans combo ; réveil +28,8 (62 %)"},
{"id":"ASS109-plus-1","zone":"ASS109","pole":"+","palier":1,"nom":"Loi du serment","cout":1,"cible":0,
 "effet":"Loi : piochez 2 cartes ; le héros se soigne de 3. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["pioche",2],["soin","heros",3],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Soin","Pioche","Prix"],
 "ambiance":"La formule est courte, chacun la sait par cœur, et chacun l'entend à sa façon.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS109-plus-2","zone":"ASS109","pole":"+","palier":2,"nom":"Debout dans l'eau","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, il se soigne de 6. Piochez 1 carte ; 6 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","blesse",[["soin","heros",6]]],["pioche",1],["deg","cible",6],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"On jure les pieds dans l'eau froide, pour que le serment ne dure pas plus que la patience.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS109-plus-3","zone":"ASS109","pole":"+","palier":3,"nom":"Loi du jour long","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; reprenez en main la dernière carte de votre défausse ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["recup"],["deg","cible",12],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Pioche","Récupération","Prix"],
 "ambiance":"Plus le jour est long, plus il reste de temps pour demander ; on demande donc, et beaucoup.",
 "budget":"21 / 24 (−12 %)"},
{"id":"ASS109-plus-4","zone":"ASS109","pole":"+","palier":4,"nom":"Les Ombres allongées","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, piochez 2 cartes. Piochez 2 cartes ; 12 dégâts à la cible ; reprenez la dernière carte défaussée. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["pioche",2]]],["pioche",2],["deg","cible",12],["recup"],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Les ombres des chefs s'allongent sur les roseaux pendant le serment ; elles touchent les troupeaux voisins.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS109-plus-5","zone":"ASS109","pole":"+","palier":5,"nom":"Le Serment répété","cout":2,"cible":1,
 "effet":"Piochez 3 cartes ; 14 dégâts à la cible ; le héros se soigne de 6.",
 "ops":[["pioche",3],["deg","cible",14],["soin","heros",6]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Soin","Pioche"],
 "ambiance":"Tömör-Ochir répète le serment plus clairement que les autres ; il a eu, de nuit, le temps de l'apprendre.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ASS109-plus-6","zone":"ASS109","pole":"+","palier":6,"nom":"Loi de minuit, lue à l'aube","cout":2,"cible":1,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, 12 dégâts à la cible. Piochez 3 cartes ; 14 dégâts à la cible ; reprenez la dernière carte défaussée. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",12]]],["pioche",3],["deg","cible",14],["recup"],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Le serment de minuit se relit à l'aube : personne n'a rien pris de jour, c'est certain.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS109-plus7","zone":"ASS109","pole":"+","palier":7,"nom":"L'Aube sans fin","cout":2,"cible":0,
 "effet":"Le serment n'a pas de fin. Piochez 3 ; reprenez la dernière carte défaussée ; soin 12 ; 10 de garde ; 5 dégâts à tous. Pose Sceau. Si Givre (consommé) : tous hésitent ; −2 d'attaque à tous ; piochez 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["pioche",3],["recup"],["soin","heros",12],["garde","heros",10],["deg","tous",5],["pose","Sceau"],["reveil","Givre",true,[["hesite","tous"],["affaiblit","tous",2],["pioche",2]]],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Affaiblissement","Contrôle","Garde","Soin","Pioche","Récupération","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Tous les clans lèvent la main et recommencent le serment ; le dernier mot n'est jamais prononcé.",
 "budget":"45 sans combo ; réveil +30,2 (67 %)"}
]
```

---

## 10. Hampiwasi, l'Île des Remèdes (DON014) — Donjon · Îles flottantes · Vent · Inca

Recette du récit : la prescription (et ce que le gouverneur en fit). Recette du −7 : la ruine habitée (radeaux pourris, vermine) ; du +7 : la foule (le village volant des guéris).

**Peste (−)** : les rats des amarres → le cuy fiévreux → les mouches des radeaux → les amarres coupées → le condor qui suit l'île → le rat-roi des cabanes → la Dérive des radeaux. Fil mécanique : la vermine sur 6 cartes (rats, mouches, condors, cuys malades), dégâts à tous sur 2 cartes, crochet « une bête est en jeu » lu avant d'invoquer ; prix : vos propres bêtes, PV.
**Guérison (+)** : le bouillon de cuy → les feuilles mâchées → le guéri qui reste → les cordes réparées → les jardins en pots → Mama Tika à bord → le Village volant. Fil mécanique : soin des alliés sur 7 cartes (les guéris se relèvent et restent), bêtes et convalescents, garde des alliés sur 3 cartes, crochet « un ennemi s'apprête à se soigner » ; prix : soin ennemi, défausse, PV.

```json
{"fiche":"DON014","nom":"Hampiwasi, l'Île des Remèdes",
 "recit":"Prescription de Mama Tika, guérisseuse de Hampiwasi : « Pour la fièvre des vallées, mener le malade sur l'île flottante, l'amarrer, le nourrir de bouillon de cuy et de feuilles mâchées, et ne le ramener que guéri. » Les malades venaient de tout l'empire, et l'île grandissait de radeaux. Quand la fièvre devint peste, le gouverneur fit couper les amarres, une nuit de vent, sans prévenir Mama Tika, qui était à bord. On voit encore l'île passer, certains soirs. Elle a des jardins, maintenant.",
 "pal":["Des radeaux pourris dérivent, liés par des cordes moisies ; des nuées de mouches et des condors suivent l'île, et des rats courent sur les nattes vides.","Amarres coupées, radeaux qui se détachent, cuys malades dans les enclos ; des fumées de feuilles brûlées montent des cabanes fermées.","Une île de radeaux de roseaux tressés, retenue au ciel par de longues cordes, avec des cabanes de guérison et des herbes en pots.","Les herbes débordent des radeaux ; des malades guéris réparent les cordes et des lamas broutent sur les toits de chaume.","L'île est devenue un village volant : les guéris y sont tous restés, tressent des radeaux neufs et tendent des cordes vers chaque vallée."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"DON014-moins-1","zone":"DON014","pole":"-","palier":1,"nom":"Les Rats des amarres","cout":1,"cible":1,
 "effet":"Si une bête est déjà en jeu, 4 dégâts à la cible. Des Rats des amarres rejoignent le combat : 4 PV, frappe 3. 2 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["deg","cible",4]]],["invoque","Rats des amarres",4,3],["deg","tous",2],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les rats montent par les amarres, comme les malades ; eux n'ont besoin d'aucune prescription.",
 "budget":"10,9 / 10 (+9 %)"},
{"id":"DON014-moins-2","zone":"DON014","pole":"-","palier":2,"nom":"Le Cuy fiévreux","cout":1,"cible":1,
 "effet":"Un Cuy fiévreux rejoint le combat : 6 PV, frappe 3. −2 d'attaque à la cible. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Cuy fiévreux",6,3],["affaiblit","cible",2],["prixBete",1]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Le bouillon de cuy guérissait la fièvre ; quand le cuy eut la fièvre, personne ne sut quoi boire.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"DON014-moins-3","zone":"DON014","pole":"-","palier":3,"nom":"Les Mouches des radeaux","cout":2,"cible":1,
 "effet":"Si une bête est déjà en jeu, 8 dégâts à la cible. Une Nuée de mouches rejoint le combat : 6 PV, frappe 5. 10 dégâts à la cible. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","bete",[["deg","cible",8]]],["invoque","Nuée de mouches",6,5],["deg","cible",10],["prixBete",2]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les mouches suivent l'île d'un radeau à l'autre ; elles savent avant Mama Tika qui ne guérira pas.",
 "budget":"22,5 / 24 (−6 %)"},
{"id":"DON014-moins-4","zone":"DON014","pole":"-","palier":4,"nom":"Les Amarres coupées","cout":2,"cible":1,
 "effet":"5 dégâts à tous les ennemis ; 12 dégâts à la cible ; −1 d'attaque à la cible.",
 "ops":[["deg","tous",5],["deg","cible",12],["affaiblit","cible",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Affaiblissement"],
 "ambiance":"Le gouverneur fit couper les amarres une nuit de vent ; il ne fit prévenir personne, par discrétion.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON014-moins-5","zone":"DON014","pole":"-","palier":5,"nom":"Le Condor qui suit l'île","cout":2,"cible":1,
 "effet":"Si une bête est déjà en jeu, 6 dégâts à la cible. Un Condor charognard rejoint le combat : 12 PV, frappe 7. 14 dégâts à la cible. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","bete",[["deg","cible",6]]],["invoque","Condor charognard",12,7],["deg","cible",14],["prixBete",2]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le condor suit l'île à distance, sans un battement d'aile ; il a tout le ciel pour attendre.",
 "budget":"31,5 / 32 (−2 %)"},
{"id":"DON014-moins-6","zone":"DON014","pole":"-","palier":6,"nom":"Le Rat-roi des cabanes","cout":2,"cible":1,
 "effet":"Le Rat-roi des cabanes rejoint le combat (14 PV, frappe 8), puis des Rats des amarres (4 PV, frappe 3). 14 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Rat-roi des cabanes",14,8],["invoque","Rats des amarres",4,3],["deg","cible",14],["prixPV",3]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Dans les cabanes fermées, les rats se nouent par la queue ; le nœud grossit, et il mange.",
 "budget":"36,5 / 36 (+1 %)"},
{"id":"DON014-moins7","zone":"DON014","pole":"-","palier":7,"nom":"La Dérive des radeaux","cout":2,"cible":0,
 "effet":"L'île part avec ses rats. La Nuée des radeaux (16 PV, frappe 9), puis un Condor charognard (12 PV, frappe 7) ; 3 coups de 4 au hasard. Pose Racine. Si Abîme (consommé) : 3 coups de 7 au hasard ; piochez 2. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Nuée des radeaux",16,9],["invoque","Condor charognard",12,7],["deg","hasard",4,3],["pose","Racine"],["reveil","Abîme",true,[["deg","hasard",7,3],["pioche",2]]],["prixBete",3]],
 "tags":["Donjon","Vent","Forme ultime −7","Invocation","Dégâts","Pioche","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"On voit encore l'île passer certains soirs, plus basse ; le vent qui l'a emportée ne la ramène pas.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"DON014-plus-1","zone":"DON014","pole":"+","palier":1,"nom":"Le Bouillon de cuy","cout":1,"cible":0,
 "effet":"Vos alliés se soignent de 4. Un Lama de l'île rejoint le combat : 6 PV, frappe 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","allies",4],["invoque","Lama de l'île",6,2],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Mama Tika faisait boire le bouillon brûlant, une gorgée par prière ; les prières étaient courtes.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"DON014-plus-2","zone":"DON014","pole":"+","palier":2,"nom":"Les Feuilles mâchées","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 6 dégâts à la cible. Vos alliés se soignent de 4 ; 4 dégâts à la cible.",
 "ops":[["si","soinEnnemi",[["deg","cible",6]]],["soin","allies",4],["deg","cible",4]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Condition"],
 "ambiance":"On mâche les feuilles pour le malade quand il n'a plus la force ; la guérisseuse a les dents vertes.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON014-plus-3","zone":"DON014","pole":"+","palier":3,"nom":"Le Guéri qui reste","cout":2,"cible":1,
 "effet":"Un Guéri des vallées rejoint le combat : 10 PV, frappe 4. Vos alliés se soignent de 6 ; 6 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Guéri des vallées",10,4],["soin","allies",6],["deg","cible",6],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Le premier guéri refusa de redescendre ; il disait que la vallée l'avait déjà rendu malade une fois.",
 "budget":"23,8 / 24 (−1 %)"},
{"id":"DON014-plus-4","zone":"DON014","pole":"+","palier":4,"nom":"Les Cordes réparées","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Vos alliés se soignent de 8 et gagnent 6 de garde ; 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["soin","allies",8],["garde","allies",6],["deg","cible",6],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Les guéris réparent les cordes au nœud de pêcheur, et celles du gouverneur au nœud coulant.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"DON014-plus-5","zone":"DON014","pole":"+","palier":5,"nom":"Les Jardins en pots","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 10. Un Chien des guérisseurs rejoint le combat : 10 PV, frappe 5 ; 8 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","allies",10],["invoque","Chien des guérisseurs",10,5],["deg","cible",8],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Les herbes en pots poussent à l'abri des radeaux ; le vent du ciel les rend amères, donc efficaces.",
 "budget":"33,3 / 32 (+4 %)"},
{"id":"DON014-plus-6","zone":"DON014","pole":"+","palier":6,"nom":"Mama Tika à bord","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, vos alliés se soignent de 8. Puis vos alliés se soignent de 10 et gagnent 8 de garde ; 10 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","soinEnnemi",[["soin","allies",8]]],["soin","allies",10],["garde","allies",8],["deg","cible",10],["prixPV",3]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Mama Tika était à bord quand on coupa les amarres ; elle finit sa tournée avant de regarder en bas.",
 "budget":"37,6 / 36 (+4 %)"},
{"id":"DON014-plus7","zone":"DON014","pole":"+","palier":7,"nom":"Le Village volant","cout":2,"cible":0,
 "effet":"Les guéris ne redescendent plus. Alliés : soin 14, garde 10. Un Porteur de cordes (14 PV, frappe 6). Pose Sceau. Si Sang (consommé) : 3 coups de 5 au hasard, en vol de vie ; alliés : soin 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","allies",14],["garde","allies",10],["invoque","Porteur de cordes",14,6],["pose","Sceau"],["reveil","Sang",true,[["deg","hasard",5,3],["volVie"],["soin","allies",6]]],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Forme ultime +7","Invocation","Dégâts","Vol de vie","Garde","Soin","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Le village tend des cordes vers chaque vallée ; on y monte malade, on n'en redescend pas.",
 "budget":"46,8 sans combo ; réveil +31,5 (67 %)"}
]
```

---

## 11. Aukpaluk, les Fosses Rouges (DON047) — Donjon · Steppe · Vent · Inuit

Recette du récit : la généalogie des dettes (récitée par le dernier ancien). Recette du −7 : le vide (le champ de fosses sans une tente) ; du +7 : la démesure (la forêt basse et rouge des saules).

**Sang (−)** : la cache ouverte → le fils d'Anguti → le payeur quitte le camp → les couteaux au seuil → la veuve paie en chiens → le silence payé → le Camp vidé. Fil mécanique : l'exil sur 6 cartes (la dette se règle une fois, puis le payeur part : la carte quitte le combat), pioche, coups ciblés sur 4 cartes seulement, crochet « le héros a moins de la moitié de ses PV » ; prix : l'exil.
**Sève (+)** : la sève de saule → l'épieu durci au feu → les chatons rouges → le chasseur sur les racines → la récolte de printemps → la forêt basse → la Forêt rouge. Fil mécanique : gros coups ciblés (l'épieu durci à la sève), garde du héros sur 2 cartes, bêtes des saules, coups au hasard sur 2 cartes, crochet « la cible s'apprête à piétiner » ; prix : garde et soin ennemis, PV.

```json
{"fiche":"DON047","nom":"Aukpaluk, les Fosses Rouges",
 "recit":"L'ancien Qillaq récite les dettes d'Aukpaluk comme d'autres récitent leurs ancêtres : le fils d'Anguti a tué le frère de Pualu pour une cache de viande ouverte ; le cousin de Pualu a tué le fils d'Anguti ; la veuve a payé en peaux, puis en chiens, puis en silence. Chaque dette réglée, le payeur quittait le camp au printemps. Il ne reste aujourd'hui que Qillaq et les caches, creusées dans le sol gelé, où la viande se garde mieux que les familles. Au-dessus, les saules nains poussent rouges.",
 "pal":["Un champ de fosses ouvertes et de caches éventrées sur la steppe gelée ; pas une tente, pas un chien, des os rongés et le vent qui siffle dans les trous.","Tentes tournées dos à dos, couteaux plantés au seuil, sang gelé autour des caches ; les chiens grondent quand un voisin passe.","Une steppe gelée sous un ciel immense, des tentes de peau, des caches de viande creusées dans le sol et couvertes de pierres plates.","Les saules nains rougissent et se couvrent de chatons ; on en tire la sève au printemps et l'on durcit au feu des épieux de saule.","Les saules ont monté plus haut que les tentes et couvrent la steppe d'une forêt basse et rouge ; les chasseurs y marchent sur des sentiers de racines."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"DON047-moins-1","zone":"DON047","pole":"-","palier":1,"nom":"La Cache ouverte","cout":1,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, 2 coups de 2 dégâts au hasard. Puis 2 coups de 4 dégâts au hasard ; le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["deg","hasard",2,2]]],["deg","hasard",4,2],["soin","heros",3],["exil"]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Soin","Condition","Exil","Prix"],
 "ambiance":"La cache était couverte de pierres plates ; quelqu'un en avait déplacé une, et cela suffit.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON047-moins-2","zone":"DON047","pole":"-","palier":2,"nom":"Le Fils d'Anguti","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 6 dégâts à la cible. Puis 9 dégâts à la cible ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["deg","cible",6]]],["deg","cible",9],["pioche",1],["exil"]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Pioche","Condition","Exil","Prix"],
 "ambiance":"Qillaq dit le nom du fils d'Anguti à voix haute ; lui seul peut encore le dire.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON047-moins-3","zone":"DON047","pole":"-","palier":3,"nom":"Le Payeur quitte le camp","cout":2,"cible":0,
 "effet":"Piochez 2 cartes ; le héros se soigne de 6 ; 5 dégâts à tous les ennemis. Prix : cette carte s'exile.",
 "ops":[["pioche",2],["soin","heros",6],["deg","tous",5],["exil"]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Soin","Pioche","Exil","Prix"],
 "ambiance":"Sa dette réglée, le payeur pliait sa tente au printemps ; on ne prononçait plus son nom.",
 "budget":"22 / 24 (−8 %)"},
{"id":"DON047-moins-4","zone":"DON047","pole":"-","palier":4,"nom":"Les Couteaux au seuil","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. Puis 14 dégâts à la cible ; le héros gagne 10 de garde.",
 "ops":[["si","blesse",[["deg","cible",10]]],["deg","cible",14],["garde","heros",10]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Garde","Condition"],
 "ambiance":"Le couteau planté au seuil de la tente ne menace personne ; il rappelle seulement qui doit quoi.",
 "budget":"27 / 28 (−4 %)"},
{"id":"DON047-moins-5","zone":"DON047","pole":"-","palier":5,"nom":"La Veuve paie en chiens","cout":2,"cible":1,
 "effet":"Un Chien de traîneau rejoint le combat (10 PV, frappe 6), puis une Chienne de tête (8 PV, frappe 5). La cible brûle : 3 dégâts au début de ses 3 prochains tours. Prix : cette carte s'exile.",
 "ops":[["invoque","Chien de traîneau",10,6],["invoque","Chienne de tête",8,5],["brulure","cible",3,3],["exil"]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Brûlure","Exil","Prix"],
 "ambiance":"La veuve paya en chiens ; les chiens revinrent seuls chez elle, la nuit, et on les lui laissa.",
 "budget":"31,5 / 32 (−2 %)"},
{"id":"DON047-moins-6","zone":"DON047","pole":"-","palier":6,"nom":"Le Silence payé","cout":2,"cible":1,
 "effet":"22 dégâts à la cible ; −2 d'attaque à la cible ; piochez 2 cartes. Prix : cette carte s'exile.",
 "ops":[["deg","cible",22],["affaiblit","cible",2],["pioche",2],["exil"]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Affaiblissement","Pioche","Exil","Prix"],
 "ambiance":"Pour finir, la veuve paya en silence ; c'est la seule dette que Qillaq ne récite jamais.",
 "budget":"33 / 36 (−8 %)"},
{"id":"DON047-moins7","zone":"DON047","pole":"-","palier":7,"nom":"Le Camp vidé","cout":2,"cible":1,
 "effet":"Le dernier payeur s'en va. 20 dégâts à la cible ; 6 dégâts à tous ; piochez 2 ; 10 de garde. Pose Sang. Si Givre (consommé) : tous les ennemis hésitent ; −2 d'attaque à tous ; 12 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","cible",20],["deg","tous",6],["pioche",2],["garde","heros",10],["pose","Sang"],["reveil","Givre",true,[["hesite","tous"],["affaiblit","tous",2],["garde","heros",12]]],["exil"]],
 "tags":["Donjon","Vent","Forme ultime −7","Dégâts","Affaiblissement","Contrôle","Garde","Pioche","Exil","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Il ne reste que Qillaq et les caches ; il récite les dettes aux fosses, qui n'en doivent aucune.",
 "budget":"46,2 sans combo ; réveil +31,8 (69 %)"},
{"id":"DON047-plus-1","zone":"DON047","pole":"+","palier":1,"nom":"La Sève de saule","cout":1,"cible":1,
 "effet":"11 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",11],["ennemiGarde",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Prix"],
 "ambiance":"Au printemps, on entaille les saules nains au ras du sol ; la sève rouge colle aux doigts.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON047-plus-2","zone":"DON047","pole":"+","palier":2,"nom":"L'Épieu durci au feu","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 6 dégâts à la cible. Puis 8 dégâts à la cible, qui ignorent sa garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","pietine",[["deg","cible",6]]],["deg","cible",8],["ignoreGarde"],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Perce-garde","Condition","Prix"],
 "ambiance":"L'épieu enduit de sève passe au feu ; il en sort plus dur que l'os, et rouge.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"DON047-plus-3","zone":"DON047","pole":"+","palier":3,"nom":"Les Chatons rouges","cout":2,"cible":0,
 "effet":"3 coups de 5 dégâts au hasard. Piochez 1 carte ; le héros se soigne de 6.",
 "ops":[["deg","hasard",5,3],["pioche",1],["soin","heros",6]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Pioche"],
 "ambiance":"Les saules se couvrent de chatons rouges ; les enfants nés dans l'année en reçoivent un, pour le nom.",
 "budget":"25 / 24 (+4 %)"},
{"id":"DON047-plus-4","zone":"DON047","pole":"+","palier":4,"nom":"Le Chasseur sur les racines","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, le héros gagne 10 de garde. 16 dégâts à la cible. Un Renard rouge rejoint le combat : 8 PV, frappe 4. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["garde","heros",10]]],["deg","cible",16],["invoque","Renard rouge",8,4],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le chasseur avance sur les racines sans toucher le sol ; il ne laisse aucune trace à venger.",
 "budget":"28 / 28 (+0 %)"},
{"id":"DON047-plus-5","zone":"DON047","pole":"+","palier":5,"nom":"La Récolte de printemps","cout":2,"cible":1,
 "effet":"20 dégâts à la cible ; le héros se soigne de 8 ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",20],["soin","heros",8],["pioche",1],["ennemiGarde",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Pioche","Prix"],
 "ambiance":"La sève se récolte en commun et se partage à la louche ; ce partage-là, personne ne le conteste.",
 "budget":"30 / 32 (−6 %)"},
{"id":"DON047-plus-6","zone":"DON047","pole":"+","palier":6,"nom":"La Forêt basse","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 12 dégâts à la cible. Puis 22 dégâts à la cible ; un Loup des saules rejoint le combat : 10 PV, frappe 6. Prix : le héros perd 4 PV.",
 "ops":[["si","pietine",[["deg","cible",12]]],["deg","cible",22],["invoque","Loup des saules",10,6],["prixPV",4]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les saules ont recouvert les caches ; personne ne sait plus laquelle appartenait à qui, et c'est tant mieux.",
 "budget":"38 / 36 (+6 %)"},
{"id":"DON047-plus7","zone":"DON047","pole":"+","palier":7,"nom":"La Forêt rouge","cout":2,"cible":0,
 "effet":"Les saules dépassent les tentes. 3 coups de 8 au hasard. Un Ours des saules (16 PV, frappe 8) ; 6 de garde. Pose Racine. Si Braise (consommée) : tous brûlent, 3 par tour sur 3 tours ; 2 coups de 4 au hasard. Prix : le héros perd 3 PV.",
 "ops":[["deg","hasard",8,3],["invoque","Ours des saules",16,8],["garde","heros",6],["pose","Racine"],["reveil","Braise",true,[["brulure","tous",3,3],["deg","hasard",4,2]]],["prixPV",3]],
 "tags":["Donjon","Vent","Forme ultime +7","Invocation","Dégâts","Brûlure","Garde","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Sous la forêt rouge, les fosses se sont refermées ; Qillaq y chante les noms, et rien ne répond.",
 "budget":"45,8 sans combo ; réveil +27,8 (61 %)"}
]
```

---

## 12. Banteay Chhatr, le Fort des Parasols (CIT008) — Citadelle · Toundra · Glace · Khmère

Recette du récit : le règlement de la garnison (et l'article ajouté). Recette du −7 : l'ordre (la garnison rangée par rang sous le dais) ; du +7 : le geste (les parasols brûlés, tout le monde à découvert).

**Ombre (−)** : article de l'ombre → le parasol le plus haut → les rangs dans la pénombre → le givre sous les toiles → l'officier sous son rang → le dais des parasols → la Pénombre réglementaire. Fil mécanique : garde du héros sur 7 cartes (l'ombre des parasols, réservée au rang), soin du héros sur 2 cartes, crochet « une carte a déjà été défaussée en prix ce tour » (le rang se paie) ; prix : défausse, PV.
**Lumière (+)** : les parasols repliés → le soleil de minuit → l'exercice dans la lumière → les ombres qui tournent → les funérailles du capitaine → le capitaine à découvert → les Parasols brûlés. Fil mécanique : la garnison sortie au jour (invocations sur 7 cartes : soldats, archers, éléphant), marque sur 4 cartes, crochet « la cible est marquée » lu avant de marquer ; prix : garde et soin ennemis, PV, défausse.

```json
{"fiche":"CIT008","nom":"Banteay Chhatr, le Fort des Parasols",
 "recit":"Règlement du fort de Banteay Chhatr, article de l'ombre : « Le commandant se tient sous le parasol le plus haut ; ses officiers, sous des parasols plus bas, selon leur rang ; les soldats, au soleil. » Sur la toundra, l'été, le soleil ne se couche pas, et les parasols sont la seule ombre à des lieues. Le capitaine Chea Rith, qui n'avait droit qu'à un parasol bas, tomba d'insolation en défendant la porte. On lui fit des funérailles sous le grand parasol. Le règlement fut aussitôt complété d'un article sur les funérailles.",
 "pal":["Un dais de parasols empilés couvre tout le fort ; dessous, une pénombre glacée où la garnison se tient rangée par rang, sans voir le ciel.","Parasols serrés au-dessus des remparts, cours plongées dans l'ombre, soldats en rangs qui grelottent ; le givre ne fond plus sous les toiles.","Un fort de latérite aux tours en bouton de lotus, posé sur la toundra plate ; des parasols de toile hissés sur les remparts selon le rang.","Parasols repliés, soleil bas qui ne se couche pas ; la garnison s'exerce dans la lumière et les ombres des tours tournent autour du fort.","On a brûlé les parasols : le fort brille sous le soleil de minuit, et chaque soldat, du capitaine au porteur d'eau, se tient à découvert."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"CIT008-moins-1","zone":"CIT008","pole":"-","palier":1,"nom":"Article de l'ombre","cout":1,"cible":1,
 "effet":"Le héros gagne 10 de garde ; −1 d'attaque à la cible. Prix : le héros perd 1 PV.",
 "ops":[["garde","heros",10],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Citadelle","Glace","Pôle −","Affaiblissement","Garde","Prix"],
 "ambiance":"Le règlement mesure l'ombre au pas : tant de pas pour un capitaine, moins pour un sergent.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT008-moins-2","zone":"CIT008","pole":"-","palier":2,"nom":"Le Parasol le plus haut","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, le héros gagne 6 de garde. Puis il gagne 8 de garde ; 5 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["garde","heros",6]]],["garde","heros",8],["deg","cible",5],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le parasol du commandant dépasse les tours ; on le voit de la toundra avant le fort lui-même.",
 "budget":"10,8 / 12,5 (−14 %)"},
{"id":"CIT008-moins-3","zone":"CIT008","pole":"-","palier":3,"nom":"Les Rangs dans la pénombre","cout":2,"cible":0,
 "effet":"Le héros gagne 14 de garde et se soigne de 4. Un Soldat de rang rejoint le combat : 10 PV, frappe 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",14],["soin","heros",4],["invoque","Soldat de rang",10,4],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Invocation","Garde","Soin","Prix"],
 "ambiance":"Sous les parasols, chacun se tient à sa place exacte ; un pas de côté, et l'on est au soleil.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"CIT008-moins-4","zone":"CIT008","pole":"-","palier":4,"nom":"Le Givre sous les toiles","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 10 dégâts à la cible. Le héros gagne 14 de garde ; 12 dégâts à la cible.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["garde","heros",14],["deg","cible",12]],
 "tags":["Citadelle","Glace","Pôle −","Dégâts","Garde","Condition"],
 "ambiance":"Le givre ne fond plus sous les toiles ; les officiers grelottent à l'ombre, et ne bougent pas.",
 "budget":"28,2 / 28 (+1 %)"},
{"id":"CIT008-moins-5","zone":"CIT008","pole":"-","palier":5,"nom":"L'Officier sous son rang","cout":2,"cible":1,
 "effet":"Le héros gagne 16 de garde et se soigne de 6 ; 14 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",16],["soin","heros",6],["deg","cible",14],["prixPV",2]],
 "tags":["Citadelle","Glace","Pôle −","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Un officier promu change de parasol le jour même ; on ne change pas la toile, on la hausse.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"CIT008-moins-6","zone":"CIT008","pole":"-","palier":6,"nom":"Le Dais des parasols","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, le héros gagne 10 de garde. Puis il gagne 18 de garde ; 16 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["garde","heros",10]]],["garde","heros",18],["deg","cible",16],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"Les parasols serrés font un toit continu ; plus personne, dans le fort, ne sait l'heure qu'il est.",
 "budget":"35,4 / 36 (−2 %)"},
{"id":"CIT008-moins7","zone":"CIT008","pole":"-","palier":7,"nom":"La Pénombre réglementaire","cout":2,"cible":1,
 "effet":"Le fort entier sous l'ombre. Le héros gagne 26 de garde ; −1 d'attaque à tous ; 6 dégâts à tous ; 8 dégâts à la cible. Pose Givre. Si Abîme (consommé) : toute garde ennemie tombe ; 3 coups de 6 au hasard ; piochez 1. Prix : défaussez 1 carte.",
 "ops":[["garde","heros",26],["affaiblit","tous",1],["deg","tous",6],["deg","cible",8],["pose","Givre"],["reveil","Abîme",true,[["briseGarde","tous"],["deg","hasard",6,3],["pioche",1]]],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Forme ultime −7","Dégâts","Affaiblissement","Perce-garde","Garde","Pioche","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Sous le dais, tout le fort est à l'ombre, selon le rang ; le règlement est enfin appliqué partout.",
 "budget":"45,6 sans combo ; réveil +28,6 (63 %)"},
{"id":"CIT008-plus-1","zone":"CIT008","pole":"+","palier":1,"nom":"Les Parasols repliés","cout":1,"cible":1,
 "effet":"Un Soldat à découvert rejoint le combat : 6 PV, frappe 4. La cible est marquée : +1 dégât à chaque coup. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Soldat à découvert",6,4],["vulnerable","cible",1],["ennemiGarde",1]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Marque","Prix"],
 "ambiance":"On replie les parasols à l'aube, pour la revue ; l'aube, sur la toundra, dure tout l'été.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT008-plus-2","zone":"CIT008","pole":"+","palier":2,"nom":"Le Soleil de minuit","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 6 dégâts à la cible. Un Archer au soleil rejoint le combat : 6 PV, frappe 4. 3 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","vulnerable",[["deg","cible",6]]],["invoque","Archer au soleil",6,4],["deg","cible",3],["ennemiSoin",1]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Au soleil de minuit, les archers tirent sans ombre portée ; l'ennemi ne voit pas d'où vient le trait.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"CIT008-plus-3","zone":"CIT008","pole":"+","palier":3,"nom":"L'Exercice dans la lumière","cout":2,"cible":1,
 "effet":"Un Lancier de latérite rejoint le combat : 10 PV, frappe 6. La cible est marquée : +2 dégâts à chaque coup ; 6 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Lancier de latérite",10,6],["vulnerable","cible",2],["deg","cible",6],["prixPV",2]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Dégâts","Marque","Prix"],
 "ambiance":"La garnison s'exerce en plein jour, sans ombre où se reposer ; les meilleurs n'y pensent plus.",
 "budget":"24 / 24 (+0 %)"},
{"id":"CIT008-plus-4","zone":"CIT008","pole":"+","palier":4,"nom":"Les Ombres qui tournent","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 12 dégâts à la cible. Un Porteur d'eau armé rejoint le combat : 8 PV, frappe 4. 12 dégâts à la cible.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["invoque","Porteur d'eau armé",8,4],["deg","cible",12]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Dégâts","Condition"],
 "ambiance":"Les ombres des tours tournent autour du fort comme des aiguilles ; on monte la garde dedans.",
 "budget":"28 / 28 (+0 %)"},
{"id":"CIT008-plus-5","zone":"CIT008","pole":"+","palier":5,"nom":"Les Funérailles du capitaine","cout":2,"cible":1,
 "effet":"Le Garde du capitaine rejoint le combat : 14 PV, frappe 6. La cible est marquée : +3 dégâts à chaque coup ; 10 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Garde du capitaine",14,6],["vulnerable","cible",3],["deg","cible",10],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Dégâts","Marque","Prix"],
 "ambiance":"Chea Rith eut le grand parasol pour ses funérailles ; ses hommes, debout autour, restèrent au soleil.",
 "budget":"32 / 32 (+0 %)"},
{"id":"CIT008-plus-6","zone":"CIT008","pole":"+","palier":6,"nom":"Le Capitaine à découvert","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 14 dégâts à la cible. Un Éléphant de garnison rejoint le combat : 18 PV, frappe 8. 10 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",14]]],["invoque","Éléphant de garnison",18,8],["deg","cible",10],["prixPV",2]],
 "tags":["Citadelle","Glace","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le nouveau capitaine refusa tout parasol ; le règlement n'avait pas d'article pour ce cas-là.",
 "budget":"36 / 36 (+0 %)"},
{"id":"CIT008-plus7","zone":"CIT008","pole":"+","palier":7,"nom":"Les Parasols brûlés","cout":2,"cible":0,
 "effet":"On brûle les parasols. Tous les ennemis sont marqués (+2 par coup). L'Éléphant au soleil (20 PV, frappe 10) ; 3 coups de 3 au hasard. Pose Braise. Si Sceau (consommé) : piochez 3 ; un Lancier (12 PV, frappe 7). Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","tous",2],["invoque","Éléphant au soleil",20,10],["deg","hasard",3,3],["pose","Braise"],["reveil","Sceau",true,[["pioche",3],["invoque","Lancier de latérite",12,7]]],["ennemiGarde",1]],
 "tags":["Citadelle","Glace","Forme ultime +7","Invocation","Dégâts","Marque","Pioche","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Les parasols brûlent en haut des remparts ; c'est la première ombre que la garnison voit monter.",
 "budget":"45,2 sans combo ; réveil +28,5 (63 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

### Les Poissons fendus d'Akuliaq (RES174) — Ressource · Delta fluvial · Eau · inuit

Geste : fendre les corégones à l'ulu et les pendre ouverts au vent. Objet : poisson blanc séché. Chute : la part des voleurs comptée large, de bon gré.

```json
{"fiche":"RES174","nom":"Les Poissons fendus d'Akuliaq",
 "recit":"À la remontée des corégones, les femmes d'Akuliaq fendent chaque poisson d'un geste d'ulu et le pendent ouvert aux cordes tendues entre les kayaks retournés. Les mouettes et les chiens prennent leur part. La vieille Ataata dit qu'on sèche pour tout le monde, et compte large.",
 "pal":["Une corde tendue entre des kayaks retournés, quelques poissons ouverts qui sèchent au vent, une femme assise qui fend le suivant d'un geste d'ulu.","Des guirlandes de poissons rouges et blancs d'un kayak à l'autre, sur toute la berge du delta ; les mouettes tournent et des enfants les chassent à la fronde."]}
```

### Les Mygales de Srok Khsach (RES041) — Ressource · Désert de sable · Feu · khmère

Geste : tirer les mygales de leurs terriers à la baguette, puis les frire. Objet : mygales frites. Chute : le voyageur qui grimace et redemande.

```json
{"fiche":"RES041","nom":"Les Mygales de Srok Khsach",
 "recit":"Les dunes de Srok Khsach sont criblées de trous. Les enfants y glissent une baguette, attendent que la mygale la morde, puis la tirent au jour. Le soir, on les frit à l'ail dans la graisse. Les voyageurs grimacent, mangent, et redemandent.",
 "pal":["Une dune criblée de trous, un enfant accroupi qui glisse une baguette dans un terrier, une mygale noire accrochée au bout.","Toute la pente de sable piquée d'enfants accroupis ; des marmites de graisse fument au pied des dunes, et les mygales frites passent de main en main."]}
```

### La Sueur de roche de Kohsar-Bagh (RES347) — Ressource · Glacier · Glace · moghole

Geste : décoller à la spatule la résine noire qui suinte des fissures au soleil. Objet : sueur de roche (résine minérale). Chute : le remède contre le vertige, récolté au bout d'une corde.

```json
{"fiche":"RES347","nom":"La Sueur de roche de Kohsar-Bagh","recit":"Au soleil de midi, les parois de Kohsar-Bagh se tachent de noir. Les cueilleurs cassent à la masse les blocs tachés, les font tremper dans l'eau du glacier et laissent le soleil boire l'eau brune. Il reste une pâte que les médecins de la cour prescrivent contre le vertige.","pal":["Une paroi tachée de noir au-dessus du glacier, un homme qui casse la roche à la masse, et des blocs qui trempent dans une mare de fonte.","Des mares brunes en rangées sur la moraine, qui baissent au soleil ; des cueilleurs raclent la pâte au bord, et des porteurs remontent avec des blocs noirs."]}
```

### Les Cuves de Portus Algidus (RES367) — Ressource · Fjord · Glace · romaine

Geste : saler et presser les poissons dans des cuves taillées au rivage. Objet : sauce de poisson (garum). Chute : le préfet qui demande sa mutation.

```json
{"fiche":"RES367","nom":"Les Cuves de Portus Algidus",
 "recit":"À Portus Algidus, on a taillé des cuves dans la roche du fjord, au ras de la marée. On y couche le poisson sous le sel, on presse. La sauce voyage jusqu'aux tables de l'empire ; l'odeur reste au port, et le préfet a demandé sa mutation.",
 "pal":["Une cuve rectangulaire creusée dans la roche du rivage, des poissons couchés sous le sel, un homme qui les presse sous une planche.","Des cuves taillées tout le long du fjord, des pressoirs de bois, des barques chargées de poisson ; l'odeur se sent depuis la passe."]}
```

### La Laine des saules d'Umingmaktuuq (RES265) — Ressource · Toundra · Glace · inuit

Geste : cueillir aux saules nains le duvet perdu par les bœufs musqués. Objet : duvet de bœuf musqué. Chute : les bêtes habituées à être suivies sans être chassées.

```json
{"fiche":"RES265","nom":"La Laine des saules d'Umingmaktuuq",
 "recit":"Au printemps, les bœufs musqués d'Umingmaktuuq perdent leur duvet sur les saules nains. Les enfants passent derrière le troupeau et cueillent la laine aux branches, touffe à touffe. Les bœufs ne se retournent pas : ils ont l'habitude qu'on les suive sans les chasser.",
 "pal":["Un buisson de saule ras, quelques touffes brunes accrochées aux brindilles, un enfant qui les détache une à une dans le vent.","Toute la toundra hérissée de laine brune après le passage du troupeau ; des familles suivent les bœufs, sacs à l'épaule, en riant."]}
```

### Les Hommes-racines de Lingshen (RES175) — Ressource · Forêt boréale · Glace · chinoise impériale

Geste : nouer un fil rouge à la tige puis déterrer la racine au bâton d'os. Objet : racines de ginseng. Chute : le fil noué d'avance, par confiance.

```json
{"fiche":"RES175","nom":"Les Hommes-racines de Lingshen",
 "recit":"À Lingshen, quand un chercheur trouve la racine d'homme-plante, il noue un fil rouge à sa tige pour qu'elle ne s'enfuie pas, puis la déterre au bâton d'os. Les vieux nouent leur fil avant même de voir la racine : elle vient alors d'elle-même.",
 "pal":["Un chercheur agenouillé dans les fougères, un fil rouge noué à une tige frêle, un bâton d'os qui dégage la terre autour de la racine.","Sous les bouleaux, des fils rouges partout, noués aux tiges comme des rubans de fête ; des chercheurs avancent en file, à genoux, sans parler."]}
```

### Le Vivier de Kopua-nui (RES199) — Ressource · Mangrove · Eau · polynésienne

Geste : ouvrir et fermer à la marée la grille de bois du vivier. Objet : mulets du vivier. Chute : le gardien qui puise aussi pour ses propres fêtes.

```json
{"fiche":"RES199","nom":"Le Vivier de Kopua-nui",
 "recit":"Un mur de corail ferme l'anse de Kopua-nui. À la marée montante, le gardien ouvre la grille de bois et les jeunes mulets entrent. À la descendante, il la referme : les gros ne sortent plus. Le chef y puise pour ses fêtes ; le gardien, pour les siennes.",
 "pal":["Un mur de corail bas en arc entre les palétuviers, une grille de bois dans la passe, un gardien assis qui regarde monter l'eau.","Le vivier bouillonne de dos argentés ; le gardien et ses fils ouvrent la grille à la marée, et des pirogues attendent dehors pour la fête."]}
```

### Les Fourches de rame de Barena Storta (RES300) — Ressource · Mangrove · Eau · vénitienne

Geste : ligaturer et courber les racines de palétuvier pour qu'elles poussent en fourches. Objet : fourches de rame. Chute : l'ouvrage qu'on lègue sans le voir fini.

```json
{"fiche":"RES300","nom":"Les Fourches de rame de Barena Storta",
 "recit":"Les charpentiers de Barena Storta ne taillent pas leurs fourches de rame : ils les font pousser. On ligature une racine de palétuvier encore jeune, on la courbe un peu chaque saison, et l'on coupe enfin une fourche parfaite. Celui qui l'a liée la voit rarement.",
 "pal":["Une racine de palétuvier liée d'une cordelette, pliée en coude au-dessus de la vase ; un charpentier qui la resserre d'un cran.","Des racines ployées et liées à perte de vue, comme des bras tordus ; les barques des charpentiers passent entre elles avec des scies et des cordes."]}
```

### Les Pistachiers du Šad-Išāti (RES222) — Ressource · Volcan · Feu · mésopotamienne

Geste : secouer à la corde les pistachiers sauvages poussés sur la cendre. Objet : pistaches. Chute : l'arbre qui survit au nom qu'il porte.

```json
{"fiche":"RES222","nom":"Les Pistachiers du Šad-Išāti",
 "recit":"Sur les pentes de cendre du Šad-Išāti, des pistachiers sauvages poussent où rien ne tient. On passe une corde autour du tronc, les enfants tirent en cadence, et les noix pleuvent. Chaque arbre porte le nom d'une famille ; certaines ont disparu, et leur arbre donne quand même.",
 "pal":["Un pistachier noueux sur la pente de cendre, une corde nouée au tronc, des enfants qui tirent en cadence et des noix qui pleuvent.","Toute la pente couverte d'arbres sombres qui tremblent sous les cordes ; des rangées de femmes ramassent dans la cendre, et des ânes descendent chargés de sacs."]}
```

### Les Collets de Bulga-Tal (RES301) — Ressource · Forêt boréale · Glace · mongole

Geste : tendre des collets de crin le long des troncs couchés. Objet : peaux de zibeline. Chute : la proie qui apprend la règle du chasseur.

```json
{"fiche":"RES301","nom":"Les Collets de Bulga-Tal","recit":"Les trappeurs de Bulga-Tal tendent leurs collets de crin le long des troncs couchés, là où passe la zibeline. Le khan veut des peaux sans trou : on ne chasse donc qu'au collet, jamais à la flèche. Les zibelines les plus vieilles ont appris à passer dessous.","pal":["Un tronc couché dans la neige, un collet de crin tendu au-dessus, et des traces menues qui contournent le piège.","Des troncs couchés garnis de collets dans toute la forêt ; au camp, des zibelines pendues par la queue à une perche, au-dessus d'un feu de mousse."]}
```

### Les Fagots à écrevisses de Rakovets (RES189) — Ressource · Mangrove · Eau · slave

Geste : immerger des fagots appâtés et les relever pleins d'écrevisses. Objet : écrevisses. Chute : l'interdit du jour contourné par la nuit.

```json
{"fiche":"RES189","nom":"Les Fagots à écrevisses de Rakovets",
 "recit":"À Rakovets, on lie des fagots autour d'un morceau de viande et on les noie entre les racines des palétuviers. La nuit venue, on les relève à la lanterne : ils ruissellent d'écrevisses. Le pope défend la pêche le jour de la fête : on pêche donc la nuit.",
 "pal":["Un fagot de branches attaché à une perche, noyé dans l'eau brune entre les racines ; une lanterne posée sur la barque à côté.","Toute la mangrove piquée de lanternes ; on hisse des fagots ruisselants où s'accrochent les écrevisses, et les barques s'enfoncent sous le poids."]}
```

### La Camomille de Peñablanca (RES376) — Ressource · Glacier · Glace · andalouse

Geste : couper au petit couteau l'herbe argentée entre les plaques de névé. Objet : camomille des cimes. Chute : le conseil des apothicaires, que les cueilleurs n'écoutent pas.

```json
{"fiche":"RES376","nom":"La Camomille de Peñablanca",
 "recit":"Entre les plaques de névé de Peñablanca pousse une herbe argentée et amère que les apothicaires de la ville paient très cher. Les cueilleurs la coupent au petit couteau, une tige par touffe. Les apothicaires conseillent d'en prendre peu. Les cueilleurs en boivent tous les soirs.",
 "pal":["Une touffe d'herbe argentée au bord d'une plaque de neige, un cueilleur penché qui coupe une seule tige au petit couteau.","Des cueilleurs dispersés sur toute la pente, penchés entre les taches de névé ; des mulets attendent en bas, chargés de bouquets séchés."]}
```

### Les Vessies de Tsagaan-Shavar (RES200) — Ressource · Mangrove · Eau · mongole

Geste : faire bouillir les vessies natatoires pour la colle des arcs. Objet : colle de poisson. Chute : l'exigence du khan et l'odeur qu'elle coûte.

```json
{"fiche":"RES200","nom":"Les Vessies de Tsagaan-Shavar",
 "recit":"Au bord des vasières de Tsagaan-Shavar, on vide les gros poissons de leur vessie, on la fait bouillir longuement, et l'on en tire une colle claire. Elle tient la corne et le bois des arcs. Les archers du khan l'exigent fraîche ; elle ne sent jamais bon.",
 "pal":["Un chaudron sur un feu de racines au bord de la vase, des vessies blanches qui flottent, un homme qui remue au bâton.","Des cordes tendues entre les palétuviers, chargées de vessies qui sèchent au vent ; des cavaliers attendent les pains de colle à l'ombre."]}
```

### Les Kapokiers de Xylokampos (RES116) — Ressource · Jungle · Sève · byzantine

Geste : gauler les gousses de kapok et battre la bourre. Objet : bourre de kapok. Chute : le confort pour l'empereur, l'âme pour les moines.

```json
{"fiche":"RES116","nom":"Les Kapokiers de Xylokampos",
 "recit":"Les moines de Xylokampos gaulent les gousses des kapokiers et battent la bourre pour garnir les coussins du palais. On dit que l'empereur dort mieux sur la bourre de Xylokampos. Les moines dorment sur des planches ; ils assurent que c'est meilleur pour l'âme.",
 "pal":["Un kapokier immense, une gousse éclatée au pied, un moine qui bat la bourre blanche à la baguette sur une pierre plate.","Des flocons blancs volent sous tous les arbres comme une neige qui ne fond pas ; des moines en file portent des sacs gonflés vers le monastère."]}
```

### Les Aires à chuño de Chiri-Pampa (RES314) — Ressource · Haute montagne · Pierre · inca

Geste : piétiner les pommes de terre gelées pour en chasser l'eau. Objet : chuño (pommes de terre séchées). Chute : ce qui se garde plus longtemps que ceux qui l'ont fait.

```json
{"fiche":"RES314","nom":"Les Aires à chuño de Chiri-Pampa",
 "recit":"À Chiri-Pampa, on étale les petites pommes de terre sur la paille et le gel les prend. Au matin, la famille les piétine pour en chasser l'eau. On recommence jusqu'à les rendre légères comme des cailloux creux. Elles se gardent plus longtemps que leurs maîtres.",
 "pal":["Un carré de paille couvert de petits tubercules givrés à l'aube, une femme qui les foule pieds nus, à petits pas.","Des aires entières de tubercules noircis ; des familles piétinent en rang en chantant, et des tas de chuño léger s'élèvent près des greniers."]}
```

### Les Barques à torches de Kiṣal-Appari (RES306) — Ressource · Marais · Sève · mésopotamienne

Geste : harponner les carpes au trident, la nuit, à la torche. Objet : carpes. Chute : le collecteur qui arrive après le repas.

```json
{"fiche":"RES306","nom":"Les Barques à torches de Kiṣal-Appari",
 "recit":"Les nuits sans vent, les pêcheurs de Kiṣal-Appari glissent sur le marais, une torche à la proue et un trident à la main. Les carpes montent vers la lumière. On les grille le soir même, fendues, au bord de l'eau ; le collecteur du temple arrive toujours après le repas.",
 "pal":["Une barque noire sur l'eau immobile, une torche à la proue, un pêcheur debout, le trident levé au-dessus de son reflet.","Le marais constellé de torches doublées dans l'eau ; des carpes fendues grillent sur des feux de berge, et l'on mange debout, les pieds dans la vase."]}
```

