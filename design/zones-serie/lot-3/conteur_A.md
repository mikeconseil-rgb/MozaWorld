# Lot 3 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche + 14 cartes chacune, 168 cartes) et douze Ressources (fiche légère, sans carte).

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points du lot 2, celle que le critique propose de rendre commune (leçon 5) : « alliés » ×1,5 ; « tous » ×2,2 (dégâts, brûlure, marque, affaiblissement, brise-garde) ; hésite tous = 9 ; ignoreGarde = 3 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixBete n rend n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5. Les budgets sont **calculés au script** à partir des `ops`. Formes du palier 7 : 42 à 53 points sans combo, réveil de +60 à +84 %.

Prix : 4 ou 5 cartes à prix sur 6 (paliers 1 à 6) dans chaque pôle, à égalité entre les deux pôles d'une même zone ; chaque forme du palier 7 a aussi un prix. **Boost : une seule fois dans le lot** (forme −7 de l'Ekklésia d'Athymna, « Le Peuple en transe »).

Leçons des lots 1 et 2 appliquées (vérifiées au script avant remise) :
- Ordre des opérations conforme au moteur, `mana` à 2 au plus, conditions `si` prises dans `cartes.js`. **Aucun `si` n'est testé après l'opération de la même carte qui le rendrait vrai** (garde → `garde`, hésite → `hesite`, brûlure → `brule`, vulnérable → `vulnerable`, invocation → `bete`, prixDefausse → `defausseAPrix`, prixPV → `blesse`, ennemiGarde → `cibleGarde`) : le test se lit toujours d'abord (« Si la cible brûle déjà, … Puis elle brûle »). `"cible":1` dès qu'une opération vise « cible ».
- Phrase d'ouverture de 3 à 6 mots sur les 24 formes du palier 7 (« L'homme se fait oiseau. », « Le fou monte sur le trône. »), comptée dans les 250 caractères.
- Aucun des mots ni des images interdits par les leçons des lots 1 et 2 (vérifié au script). **Aucun pigment ni aucune teinture nommés au +7**, et pas de rose : les +7 se disent par un objet, une foule ou un geste. Aucun nombre écrit dans la prose ne revient dans deux zones du lot (vérifié au script sur récits, `pal`, noms et ambiances).
- Aucun +7 où le végétal avale un bâtiment : les citadelles jumelles de Dûr-Ellamê poussent **à côté** de la forteresse, vides, et les treilles de Nushdaru restent des treilles.
- Chutes : un seul récit tronqué (ASS030) ; aucune chute « …, sans X. » ; pas de « Morale : », pas d'« une autre main a ajouté ».
- Tag « Loi » sur toutes les cartes d'Assemblée dont l'effet commence par « Loi », et nulle part ailleurs.
- Plafonds du lot (leçon 2 du lot 2) : **aucun de mes 24 pôles n'a pour famille principale l'hésitation ni les coups au hasard** (aucun coup au hasard dans tout le fichier ; l'hésitation n'apparaît qu'en appoint, sous condition).

Recettes de récit (aucune deux fois) : ANT016 le refus ; ANT053 le témoin d'en bas ; ANT198 l'inventaire ; ANT118 le revers ; ASS030 la chronique tronquée ; ASS083 le décret ; ASS064 les deux tablettes ; DON105 la liste de tribut ; DON002 la requête ; DON010 la description du voyageur ; CIT005 le rapport de l'espion ; CIT041 la lettre au roi.

Recettes des ±7 (toutes différentes) : −7 vide, monde renversé, démesure, ruine, silence, transe, retour du mal, obscurité, poussière, immobilité, vigilance morte, déliquescence ; +7 foule, ordre mécanique, dépouillement, table démesurée, cercle autour du feu, dalle de décrets, officine, lumière, monde retourné, engourdissement heureux, jardin clos, multiplication.

Résonances des formes du palier 7 (posée → réveillée). Chaque résonance est posée deux fois au moins et réveillée deux fois au moins ; des chaînes de trois sont possibles (par exemple Athymna Folie pose Abîme → Mélikrata Poison la réveille et pose Braise → Arbatana Glace la réveille et pose Givre → Ešnak-Šadê Peste la réveille).

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT016 | Abîme → Sceau | Racine → Sang |
| ANT053 | Racine → Sang | Sceau → Racine |
| ANT198 | Sceau → Abîme | Braise → Sceau |
| ANT118 | Sang → Racine | Braise → Sang |
| ASS030 | Givre → Braise | Braise → Sceau |
| ASS083 | Abîme → Braise | Sceau → Givre |
| ASS064 | Racine → Givre | Sceau → Racine |
| DON105 | Abîme → Braise | Braise → Sceau |
| DON002 | Sang → Braise | Abîme → Racine |
| DON010 | Braise → Abîme | Racine → Braise |
| CIT005 | Givre → Sang | Racine → Sang |
| CIT041 | Abîme → Racine | Racine → Abîme |

Familles d'effets (leçon 4 du lot 1, leçon 2 du lot 2) : aucune famille principale partagée entre mes 24 pôles, ni avec un pôle de même mot déjà écrit (lots 1 et 2, et fichiers de B et de D du lot 3 lus avant d'écrire).

| Zone | Pôle − | Pôle + | Déjà écrits sous les mêmes mots |
|---|---|---|---|
| ANT016 Exil / Foyer | bêtes de falaise fragiles + marque, combo « vole par-dessus » ; prix : exil de la carte | bêtes gardiennes robustes + récupération et pioche, combo « prend son élan » ; prix : garde ennemie, défausse | DON030 (gros coups seul / brûlures-pièges), ANT239 et ASS059 (garde et soin) |
| ANT053 Folie / Raison | dégâts à tous + bêtes, combo « charge ou piétine » ; prix : votre bête la plus faible | automates (bêtes à gros PV, peu d'attaque) + mana de Sève, combo « déjà une carte jouée ce tour » ; prix : défausse | DON077 (hasard, écho / perce-garde), ANT055 (brûlure, hésitation / garde, intentions), ANT169 (bêtes au hasard / marques) |
| ANT198 Mensonge / Vérité | leurres sans attaque + marque, combo « une bête est en jeu » ; prix : défausse, exil | vraies bêtes + brûlure, combo « brûle déjà » ; prix : PV | DON081 (riposte, intentions / ignore la garde), ASS161 de B (défausse-carburant / marques) |
| ANT118 Famine / Festin | meute fragile + gros coups sur l'ennemi resté seul ; prix : PV | sacrifice de vos bêtes (prixBete moteur) → mana de Pierre, pioche, soin des alliés ; prix : soin ennemi | DON073 (gros coups, perce-garde, blessé / dégâts à tous, brûlure, vol de vie) |
| ASS030 Glace / Feu | lois de brise-garde + marque, combo « la cible a de la garde » ; prix : PV | lois de brûlure + garde et soin des alliés, combo « troisième carte du tour » ; prix : défausse, soin ennemi | DON013 (hésitation, affaiblissement / brûlures, perce-garde, écho) |
| ASS083 Folie / Raison | lois de pioche, mana de Feu et écho, combo « héros sous la moitié » ; le seul boost ; prix : PV, défausse | lois d'affaiblissement + pioche, combo « prend son élan » ; prix : garde ennemie, défausse | voir ANT053 ; ni hasard ni marque ni perce-garde |
| ASS064 Peste / Guérison | contagion : riposte + marque, combo « charge ou piétine » ; prix : PV | soin du héros + récupération et pioche, combo « vole par-dessus » (démons ailés) ; prix : défausse, soin ennemi | DON101, ASS115, ANT170, ASS168, DON042 ; au lot 3, ASS096 de D (dégâts à tous et exil / écho, garde levée) |
| DON105 Ruine / Abondance | gros coups ciblés payés en défausse + marque, combo « déjà vulnérable » ; prix : défausse | dégâts à tous + garde + mana de Pierre, combo « la cible a de la garde » ; prix : garde et soin ennemis | ANT086, ANT165, DON017 (dégâts à tous dans les trois Ruine) |
| DON002 Sécheresse / Déluge | gros coups ciblés + vol de vie, combo « héros sous la moitié » ; prix : PV | toutes les gardes ennemies brisées + dégâts à tous, combo « charge ou piétine » ; prix : défausse | ASS040 (affaiblissement, marques / pioche, récupération, écho), ANT070, CIT019, ASS159 de D |
| DON010 Poison / Nectar | brûlure longue sur une cible + affaiblissement, combo « brûle déjà » ; prix : PV | gros coups ciblés + soin du héros, combo « un seul ennemi » ; prix : soin ennemi, défausse | CIT013 (garde, riposte / essaims, soin du camp) |
| CIT005 Poison / Nectar | garde massive payée en PV (contrepoison), combo « héros sous la moitié » ; prix : PV | soldats invoqués + garde et soin des alliés, combo « allié invoqué en jeu » ; prix : soin ennemi, défausse | CIT013, et DON010 ci-dessus |
| CIT041 Pourriture / Croissance | affaiblissement de tous + garde du héros, combo « Garde déjà levée » ; prix : PV | récupération + bloqueurs de chair de champignon + garde des alliés, combo « allié invoqué en jeu » ; prix : garde ennemie, défausse | DON051 (perce-garde, marques, brûlure / garde, riposte) |

Gestes des Ressources (un par Ressource ; comparés aux lots 1 et 2 et aux listes de B et de D du lot 3) : RES183 grimper au palmier à la boucle de corde pour pendre la jarre à vin ; RES153 plonger en serrant une pierre percée ; RES099 souffler des fioles de verre ; RES297 suivre le chien qui flaire l'ambre gris ; RES063 prendre les sangsues jambes nues ; RES333 estamper le nom du roi dans la brique ; RES165 couper les tesselles d'or à la marteline ; RES043 plumer la laine à la main ; RES007 coudre le vent dans des outres ; RES104 planter des perches-jalons dans la glace ; RES154 vanner le grain à la pelle ; RES293 démonter un fort pour bâtir des fermes. Structures de chute : trois seulement sur « l'autorité prélève, les petites gens font avec » (RES043, RES154, RES165) ; les autres finissent sur un geste (RES183, RES153), une règle absurde (RES333, RES104), un prix inversé (RES297, RES063), une ruse sue de tous (RES007, RES099) ou une ressemblance (RES293).

---

## 1. Scopulum Aquilae, le Cap des Relégués (ANT016) — Antre · Falaise côtière · Vent · Romaine

Recette du récit : le refus. Recette du −7 : le vide (la villa rendue aux oiseaux) ; du +7 : la foule (une maisonnée entière sur la roche).

**Exil (−)** : le cachet intact → le cormoran nourri à la main → le phoque du débarcadère → les barques qui ne viennent plus → les chèvres de la corniche → le refus plié → la Nuée du cap. Fil mécanique : oiseaux et bêtes de falaise fragiles qui frappent fort, marque (Vulnérable), condition « la cible vole par-dessus » ; le prix est souvent l'exil de la carte, comme les lettres qui partent et ne reviennent pas.
**Foyer (+)** : le laraire contre le vent → les oies de Fulvia → le molosse de la maison → les barques du matin → le serpent du laraire → la lettre jamais envoyée → le Chien de la mosaïque. Fil mécanique : bêtes gardiennes robustes, récupération et pioche (la maison garde tout), condition « la cible prend son élan » (les oies donnent l'alerte) ; le prix : défausse, ou l'ennemi se couvre aussi.

```json
{"fiche":"ANT016","nom":"Scopulum Aquilae, le Cap des Relégués",
 "recit":"Lucius Ostorius Pansa, relégué sur le cap pour un mot de trop au banquet, écrivit au Sénat chaque mois pendant quatorze ans. Ses tablettes revenaient, le cachet intact. Il apprit à nourrir les cormorans à la main et à nommer les phoques. Puis Fulvia débarqua avec les lares de la maison, le molosse, les oies, et l'ordre de rappel enfin signé. Pansa lut l'ordre, le plia, et fit bâtir un laraire à l'abri du vent. On a retrouvé sa réponse au Sénat dans le mur du laraire, roulée serré. Elle tient en un mot : non.",
 "pal":["Villa ouverte au vent, toits arrachés, laraire renversé ; des cormorans sur chaque mur, du guano sur les mosaïques, une barque pourrie au pied de la roche.","Murets écroulés, jardin brûlé par le sel, phoques vautrés sur les marches du débarcadère ; des tablettes de cire fondues sèchent sur la terrasse.","Promontoire battu des vents, petite villa à péristyle accrochée à la roche, cormorans sur les récifs ; un chien aboie aux mouettes.","Murs relevés et chaulés, oies dans la cour, fumée du foyer couchée par le vent ; des barques de ravitaillement amarrées chaque matin.","Toute une maisonnée sur le cap : affranchis, cousins, clients, un laraire à chaque porte et un chien à chaque seuil ; plus une coudée de roche nue."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ANT016-moins-1","zone":"ANT016","pole":"-","palier":1,"nom":"Le Cachet intact","cout":1,"cible":1,
 "effet":"4 dégâts à la cible. Un Cormoran du cap rejoint le combat : 4 PV, frappe 5. Prix : la carte s'exile.",
 "ops":[["deg","cible",4],["invoque","Cormoran du cap",4,5],["exil"]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Exil","Prix"],
 "ambiance":"Les tablettes de Pansa revenaient de Rome sans qu'on eût brisé la cire ; il les grattait et réécrivait dessus.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT016-moins-2","zone":"ANT016","pole":"-","palier":2,"nom":"Le Cormoran nourri à la main","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts. Puis 6 dégâts à la cible ; si une bête est en jeu, elle devient vulnérable 1.",
 "ops":[["si","vol",[["deg","cible",8]]],["deg","cible",6],["si","bete",[["vulnerable","cible",1]]]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Condition"],
 "ambiance":"Pansa tendait la sardine du bout des doigts ; le cormoran la prenait sans jamais toucher la main.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT016-moins-3","zone":"ANT016","pole":"-","palier":3,"nom":"Le Phoque du débarcadère","cout":1,"cible":1,
 "effet":"Un Phoque du débarcadère rejoint le combat : 12 PV, frappe 4. 5 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Phoque du débarcadère",12,4],["deg","cible",5],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Le phoque occupait les marches où devait accoster la barque de Rome ; personne ne vint le déloger.",
 "budget":"14 / 15 (−7 %)"},
{"id":"ANT016-moins-4","zone":"ANT016","pole":"-","palier":4,"nom":"Les Barques qui ne viennent plus","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 14 dégâts. Puis 14 dégâts à la cible, qui devient vulnérable 2. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["deg","cible",14]]],["deg","cible",14],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Les barques de ravitaillement s'espacèrent, puis cessèrent ; Pansa compta les voiles au large, aucune ne tournait vers le cap.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT016-moins-5","zone":"ANT016","pole":"-","palier":5,"nom":"Les Chèvres de la corniche","cout":2,"cible":1,
 "effet":"Une Chèvre de corniche rejoint le combat (8 PV, frappe 6), puis une autre. Si la cible vole par-dessus, 10 dégâts ; elle devient vulnérable 1. Prix : la carte s'exile.",
 "ops":[["invoque","Chèvre de corniche",8,6],["invoque","Chèvre de corniche",8,6],["si","vol",[["deg","cible",10]]],["vulnerable","cible",1],["exil"]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Marque","Condition","Exil","Prix"],
 "ambiance":"Les chèvres descendaient la falaise là où l'homme ne passe pas ; Pansa les suivit une fois.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT016-moins-6","zone":"ANT016","pole":"-","palier":6,"nom":"Le Refus plié","cout":1,"cible":1,
 "effet":"Piochez 2 cartes ; 12 dégâts à la cible, qui devient vulnérable 2. Prix : la carte s'exile et le héros perd 2 PV.",
 "ops":[["pioche",2],["deg","cible",12],["vulnerable","cible",2],["exil"],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Pioche","Exil","Prix"],
 "ambiance":"Pansa plia l'ordre de rappel avec soin, comme on plie un linge qu'on ne portera plus.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ANT016-moins7","zone":"ANT016","pole":"-","palier":7,"nom":"La Nuée du cap","cout":2,"cible":1,
 "effet":"L'homme se fait oiseau. La Nuée du cap rejoint le combat (10 PV, frappe 12) ; 14 dégâts à la cible, vulnérable 3 ; piochez 1. Pose Abîme. Si Sceau est posée (consommée) : 28 dégâts à la cible. Prix : la carte s'exile.",
 "ops":[["invoque","Nuée du cap",10,12],["deg","cible",14],["vulnerable","cible",3],["pioche",1],["pose","Abîme"],["reveil","Sceau",true,[["deg","cible",28]]],["exil"]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Marque","Pioche","Exil","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Les pêcheurs du continent juraient voir un homme parmi les cormorans, debout sur le récif, les bras écartés pour sécher.",
 "budget":"47 sans combo ; réveil +28 (60 %)"},
{"id":"ANT016-plus-1","zone":"ANT016","pole":"+","palier":1,"nom":"Le Laraire contre le vent","cout":1,"cible":0,
 "effet":"Récupérez la dernière carte de la défausse ; le héros gagne 8 de garde et se soigne de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["recup"],["garde","heros",8],["soin","heros",2],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Garde","Soin","Récupération","Prix"],
 "ambiance":"Le premier laraire fut une niche creusée dans la roche, du côté où le vent ne soufflait jamais.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT016-plus-2","zone":"ANT016","pole":"+","palier":2,"nom":"Les Oies de Fulvia","cout":1,"cible":1,
 "effet":"Les Oies de Fulvia rejoignent le combat : 10 PV, frappe 2. Si la cible prend son élan, elle hésite. Le héros se soigne de 2.",
 "ops":[["invoque","Oies de Fulvia",10,2],["si","elan",[["hesite","cible"]]],["soin","heros",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Contrôle","Soin","Condition"],
 "ambiance":"Fulvia avait fait monter les oies par le sentier, en cage, et elles criaient avant chaque barque.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT016-plus-3","zone":"ANT016","pole":"+","palier":3,"nom":"Le Molosse de la maison","cout":1,"cible":0,
 "effet":"Le Molosse de la maison rejoint le combat : 16 PV, frappe 4. Piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Molosse de la maison",16,4],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Pioche","Prix"],
 "ambiance":"Le molosse renifla le cap, aboya aux cormorans, puis se coucha devant la porte de Pansa pour toujours.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ANT016-plus-4","zone":"ANT016","pole":"+","palier":4,"nom":"Les Barques du matin","cout":2,"cible":1,
 "effet":"Récupérez la dernière carte de la défausse et piochez 1 carte ; vos alliés gagnent 14 de garde. Si la cible prend son élan, 10 dégâts. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["recup"],["pioche",1],["garde","allies",14],["si","elan",[["deg","cible",10]]],["ennemiGarde",2]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Fulvia payait les bateliers d'avance ; ils accostaient à l'aube avec l'huile, le grain et les nouvelles.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"ANT016-plus-5","zone":"ANT016","pole":"+","palier":5,"nom":"Le Serpent du laraire","cout":2,"cible":0,
 "effet":"Le Serpent du laraire rejoint le combat : 22 PV, frappe 5. Vos alliés se soignent de 8 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Serpent du laraire",22,5],["soin","allies",8],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Soin","Pioche","Prix"],
 "ambiance":"Le serpent vint loger sous la niche des lares ; Fulvia lui laissait un œuf chaque soir.",
 "budget":"31,5 / 32 (−2 %)"},
{"id":"ANT016-plus-6","zone":"ANT016","pole":"+","palier":6,"nom":"La Lettre jamais envoyée","cout":1,"cible":1,
 "effet":"Récupérez la dernière carte de la défausse et piochez 1 carte ; le héros gagne 12 de garde. Si la cible prend son élan, elle hésite et subit 6 dégâts. Prix : la carte s'exile.",
 "ops":[["recup"],["pioche",1],["garde","heros",12],["si","elan",[["hesite","cible"],["deg","cible",6]]],["exil"]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Garde","Pioche","Récupération","Condition","Exil","Prix"],
 "ambiance":"Pansa roula sa réponse au Sénat, la glissa dans le mur du laraire et fit enduire par-dessus.",
 "budget":"20,1 / 22,5 (−11 %)"},
{"id":"ANT016-plus7","zone":"ANT016","pole":"+","palier":7,"nom":"Le Chien de la mosaïque","cout":2,"cible":0,
 "effet":"La mosaïque du seuil aboie. Le Chien de la mosaïque arrive (34 PV, frappe 6) ; alliés +16 de garde ; récupérez une carte, piochez 1. Pose Racine. Si Sang (consommée) : piochez 3, alliés soignés de 12. Prix : ennemis +3 de garde.",
 "ops":[["invoque","Chien de la mosaïque",34,6],["garde","allies",16],["recup"],["pioche",1],["pose","Racine"],["reveil","Sang",true,[["pioche",3],["soin","allies",12]]],["ennemiGarde",3]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Garde","Soin","Pioche","Récupération","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Le chien de tesselles noires montrait les dents sur le seuil ; un matin, le seuil était vide.",
 "budget":"47,2 sans combo ; réveil +30 (64 %)"}
]
```

---

## 2. Le Paradeisos de Chrysolithos (ANT053) — Antre · Jungle · Sève · Byzantine

Recette du récit : le témoin d'en bas. Recette du −7 : le monde renversé (les singes tiennent la cour) ; du +7 : l'ordre mécanique (plus une bête vivante).

**Folie (−)** : le sermon aux paons → Sabbas à quatre pattes → les singes de la galerie → le tapis de l'ambassade → le léopard du trône → le tailleur mordu → la Cour des singes. Fil mécanique : les bêtes de Sabbas frappent tout le monde (dégâts à tous), plus fort quand l'ennemi charge ou piétine (Sabbas rugit au sol) ; le prix tombe souvent sur vos propres bêtes, qui ne savent pas qui mordre.
**Raison (+)** : sept tours de clé → l'huile des rouages → l'oiseau mécanique → le kiosque des ambassades → la clé de Zoé → le paon de bronze → le Trône qui rugit. Fil mécanique : automates de bronze qui encaissent (beaucoup de PV, peu d'attaque), mana de Sève, et des cartes qui paient davantage si vous avez déjà joué une carte ce tour (le mécanisme qu'on remonte) ; le prix : une carte défaussée, ou l'ennemi qui se couvre pendant qu'on tourne la clé.

```json
{"fiche":"ANT053","nom":"Le Paradeisos de Chrysolithos",
 "recit":"Zoé, esclave du paradeisos, remontait chaque matin les lions de bronze du sébastokrator : sept tours de clé, et ils rugissaient à l'heure des ambassades. Sous les lianes vivait Sabbas le fou, qui dormait avec les singes et prêchait aux paons ; les envoyés aimaient voir un saint. Un été, la moisissure grippa les rouages, et les lions se turent devant l'envoyé du calife. On fouetta Zoé. Sabbas, lui, rugit à leur place, à quatre pattes sur le tapis, et l'envoyé signa le traité. On l'habilla de soie. Il mordit le tailleur.",
 "pal":["Les singes tiennent la cour en robes de soie déchirées, un léopard dort sur le trône, et les lions de bronze éventrés servent de perchoirs.","Rouages rouillés dans la boue, paons qui criaillent sur les mosaïques de la galerie ; un ermite nu prêche aux lianes, et les singes l'écoutent.","Jardin impérial taillé dans la jungle, galeries à coupoles dorées, volières et bassins ; des lions de bronze gardent l'escalier du kiosque.","Allées désherbées chaque matin, automates huilés qui chantent à l'heure, singes en cages numérotées ; des esclaves passent avec des clés à la ceinture.","Chaque arbre cerclé de bronze, chaque oiseau une mécanique qui chante juste ; on n'entend que le cliquetis des clés, et pas une bête vivante."],
 "pm":"Folie","pp":"Raison"}
```

```json
[
{"id":"ANT053-moins-1","zone":"ANT053","pole":"-","palier":1,"nom":"Le Sermon aux paons","cout":1,"cible":0,
 "effet":"Un Paon du kiosque rejoint le combat : 6 PV, frappe 3. 2 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Paon du kiosque",6,3],["deg","tous",2],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Sabbas prêchait aux paons de la galerie la vanité des plumes ; ils faisaient la roue, et il pleurait.",
 "budget":"9,9 / 10 (−1 %)"},
{"id":"ANT053-moins-2","zone":"ANT053","pole":"-","palier":2,"nom":"Sabbas à quatre pattes","cout":1,"cible":1,
 "effet":"4 dégâts à tous les ennemis ; si la cible charge ou piétine, 8 dégâts à la cible.",
 "ops":[["deg","tous",4],["si","pietine",[["deg","cible",8]]]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Condition"],
 "ambiance":"Sabbas marchait à quatre pattes dans les allées, et grondait contre les gardes qui piétinaient les fourmis.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"ANT053-moins-3","zone":"ANT053","pole":"-","palier":3,"nom":"Les Singes de la galerie","cout":1,"cible":0,
 "effet":"Un Singe de la galerie rejoint le combat : 6 PV, frappe 6. 3 dégâts à tous les ennemis. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Singe de la galerie",6,6],["deg","tous",3],["prixBete",3]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Les singes volaient les clés des automates et les jetaient dans le bassin ; Sabbas applaudissait, Zoé plongeait.",
 "budget":"15,6 / 15 (+4 %)"},
{"id":"ANT053-moins-4","zone":"ANT053","pole":"-","palier":4,"nom":"Le Tapis de l'ambassade","cout":2,"cible":0,
 "effet":"9 dégâts à tous les ennemis ; si l'ennemi en tête charge ou piétine, 9 dégâts de plus à tous. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",9],["si","pietine",[["deg","tous",9]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Devant l'envoyé du calife, Sabbas rugit si fort que les lions de bronze en parurent honteux.",
 "budget":"26,7 / 28 (−5 %)"},
{"id":"ANT053-moins-5","zone":"ANT053","pole":"-","palier":5,"nom":"Le Léopard du trône","cout":2,"cible":0,
 "effet":"Le Léopard du trône rejoint le combat : 12 PV, frappe 10. 5 dégâts à tous les ennemis ; si l'ennemi en tête charge ou piétine, 3 de plus à tous. Prix : votre bête la plus faible perd 4 PV.",
 "ops":[["invoque","Léopard du trône",12,10],["deg","tous",5],["si","pietine",[["deg","tous",3]]],["prixBete",4]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le léopard dormait au pied du trône ; Sabbas seul lui tirait la queue, et il se laissait faire.",
 "budget":"31,3 / 32 (−2 %)"},
{"id":"ANT053-moins-6","zone":"ANT053","pole":"-","palier":6,"nom":"Le Tailleur mordu","cout":1,"cible":1,
 "effet":"8 dégâts à tous les ennemis ; si une bête est en jeu, elle mord : 10 dégâts à la cible. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","tous",8],["si","bete",[["deg","cible",10]]],["prixBete",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Le tailleur prit les mesures de Sabbas pour la robe de soie ; il en garda les dents au poignet.",
 "budget":"20,6 / 22,5 (−8 %)"},
{"id":"ANT053-moins7","zone":"ANT053","pole":"-","palier":7,"nom":"La Cour des singes","cout":2,"cible":0,
 "effet":"Le fou monte sur le trône. La Cour des singes rejoint le combat (18 PV, frappe 10) ; 12 dégâts à tous les ennemis. Pose Racine. Si Sang est posée (consommée) : 14 dégâts à tous. Prix : votre bête la plus faible perd 5 PV.",
 "ops":[["invoque","Cour des singes",18,10],["deg","tous",12],["pose","Racine"],["reveil","Sang",true,[["deg","tous",14]]],["prixBete",5]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Quand le sébastokrator partit pour la capitale, Sabbas s'assit sur son trône ; les singes vinrent baiser ses pieds sales.",
 "budget":"45,4 sans combo ; réveil +30,8 (68 %)"},
{"id":"ANT053-plus-1","zone":"ANT053","pole":"+","palier":1,"nom":"Sept tours de clé","cout":1,"cible":0,
 "effet":"Un Lion de bronze rejoint le combat : 14 PV, frappe 2. +1 mana de Sève. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Lion de bronze",14,2],["mana","Sève",1],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Mana","Prix"],
 "ambiance":"Zoé comptait les tours de clé à voix basse ; au septième, le lion ouvrait la gueule, et pas avant.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT053-plus-2","zone":"ANT053","pole":"+","palier":2,"nom":"L'Huile des rouages","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une carte ce tour, 10 dégâts à la cible. Le héros gagne 6 de garde ; +1 mana de Sève.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["garde","heros",6],["mana","Sève",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Garde","Mana","Condition"],
 "ambiance":"L'huile de palme rancissait vite dans les rouages ; Zoé les graissait le soir, à la lueur des lucioles.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"ANT053-plus-3","zone":"ANT053","pole":"+","palier":3,"nom":"L'Oiseau mécanique","cout":1,"cible":0,
 "effet":"Un Oiseau mécanique rejoint le combat : 12 PV, frappe 4. Piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Oiseau mécanique",12,4],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Pioche","Prix"],
 "ambiance":"L'oiseau de bronze chantait juste au-dessus des bassins ; les vrais oiseaux de la jungle se taisaient.",
 "budget":"14 / 15 (−7 %)"},
{"id":"ANT053-plus-4","zone":"ANT053","pole":"+","palier":4,"nom":"Le Kiosque des ambassades","cout":2,"cible":1,
 "effet":"Un Lion de bronze rejoint le combat : 20 PV, frappe 3. +2 mana de Sève. Si vous avez déjà joué une carte ce tour, 14 dégâts à la cible, qui ignorent la garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Lion de bronze",20,3],["mana","Sève",2],["si","cartesJouees",[["deg","cible",14],["ignoreGarde"]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Perce-garde","Mana","Condition","Prix"],
 "ambiance":"Sous le kiosque, les ambassadeurs attendaient que les lions rugissent ; derrière la tenture, Zoé tournait la manivelle.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT053-plus-5","zone":"ANT053","pole":"+","palier":5,"nom":"La Clé de Zoé","cout":2,"cible":0,
 "effet":"Le héros gagne 16 de garde, pioche 2 cartes et gagne 2 mana de Sève ; si une bête est en jeu, vos alliés gagnent 10 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",16],["pioche",2],["mana","Sève",2],["si","bete",[["garde","allies",10]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"Après le fouet, on confia la clé maîtresse à Zoé ; aucun intendant ne savait plus s'en servir.",
 "budget":"29,8 / 32,0 (-7%) — recalculé par le critique"},
{"id":"ANT053-plus-6","zone":"ANT053","pole":"+","palier":6,"nom":"Le Paon de bronze","cout":1,"cible":1,
 "effet":"Un Paon de bronze rejoint le combat : 16 PV, frappe 5. Si vous avez déjà joué une carte ce tour, 12 dégâts à la cible. +1 mana de Sève. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["invoque","Paon de bronze",16,5],["si","cartesJouees",[["deg","cible",12]]],["mana","Sève",1],["ennemiGarde",2]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Le paon de bronze faisait la roue à heure fixe, sans crier ; on vendit les vrais au marché.",
 "budget":"20,5 / 22,5 (−9 %)"},
{"id":"ANT053-plus7","zone":"ANT053","pole":"+","palier":7,"nom":"Le Trône qui rugit","cout":2,"cible":1,
 "effet":"Le palais se remonte seul. Le Trône-automate arrive (40 PV, frappe 6) ; alliés +10 de garde ; +2 mana de Sève, piochez 2. Pose Sceau. Si Racine (consommée) : 30 dégâts à la cible, qui ignorent la garde. Prix : défaussez 1 carte.",
 "ops":[["invoque","Trône-automate",40,6],["garde","allies",10],["mana","Sève",2],["pioche",2],["pose","Sceau"],["reveil","Racine",true,[["deg","cible",30],["ignoreGarde"]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Perce-garde","Garde","Pioche","Mana","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Le trône s'élevait seul quand on entrait, et ses lions rugissaient ; Zoé tenait la clé, debout derrière.",
 "budget":"52 sans combo ; réveil +33 (63 %)"}
]
```

---

## 3. Les Galeries aux Ibis de Hor-Ouadjet (ANT198) — Antre · Désert de sable · Feu · Égyptienne

Recette du récit : l'inventaire. Recette du −7 : la démesure (galeries sans fin de jarres neuves et vides) ; du +7 : le dépouillement (la falaise vidée par le vent).

**Mensonge (−)** : la jarre au vœu → plume et sable → le chat par erreur → le crocodile de roseaux → les vendeurs de vœux → la galerie murée → les Jarres neuves. Fil mécanique : des leurres qui encaissent sans frapper (momies de lin, crocodile de roseaux), et l'ennemi qui s'y découvre (Vulnérable) ; condition « une bête est en jeu » (le leurre tient) ; le prix est une carte défaussée ou exilée.
**Vérité (+)** : le bassin des ibis → le soleil dans la galerie → le chacal de la nécropole → les jarres brisées → le cobra du seuil → les os au soleil → l'Ibis de la falaise. Fil mécanique : de vraies bêtes qui frappent, la brûlure du soleil qui entre dans les galeries, et des coups plus forts sur ce qui brûle déjà ; le prix est en PV, car la vérité se paie au grand jour.

```json
{"fiche":"ANT198","nom":"Les Galeries aux Ibis de Hor-Ouadjet",
 "recit":"Inventaire de la galerie des ibis, dressé par l'embaumeur Pa-Khered à la demande du grand prêtre. Jarres scellées : plus de mille, chacune vendue à un pèlerin avec son vœu. Contenant un ibis entier : une sur dix. Une plume, du sable et une prière : la plupart. Du lin roulé autour de rien : beaucoup. Un chat, par erreur : un. Le grand prêtre lut l'inventaire jusqu'au bout, fit murer la galerie et commanda des jarres neuves. Pa-Khered fut chargé de les remplir.",
 "pal":["Galeries sans fin de jarres scellées, empilées jusqu'aux voûtes, toutes neuves et toutes vides ; les pèlerins font la queue sous les torches.","Ateliers d'embaumement enfumés, ballots de lin et de plumes, sable tamisé versé dans les jarres ; à l'entrée, des vendeurs crient le prix des vœux.","Dunes au pied d'une falaise percée de galeries, temple de brique à l'entrée, ibis vivants dans un bassin de roseaux ; un chacal rôde au crépuscule.","Galeries éventrées par le vent, jarres brisées sur le sable, os d'ibis blanchis au soleil ; des pèlerins trient le vrai du lin.","Falaise ouverte comme un livre, plus une jarre entière ; le vent a vidé les galeries jusqu'à la roche, et des ibis vivants couvent dans les alvéoles."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"ANT198-moins-1","zone":"ANT198","pole":"-","palier":1,"nom":"La Jarre au vœu","cout":1,"cible":1,
 "effet":"Une Momie de lin rejoint le combat : 14 PV, frappe 0. La cible devient vulnérable 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Momie de lin",14,0],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"Chaque pèlerin repartait léger : il laissait sa jarre, son vœu et le prix d'un ibis invisible.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT198-moins-2","zone":"ANT198","pole":"-","palier":2,"nom":"Plume et sable","cout":1,"cible":1,
 "effet":"Si une bête est en jeu, la cible devient vulnérable 2. 6 dégâts à la cible ; le héros gagne 4 de garde.",
 "ops":[["si","bete",[["vulnerable","cible",2]]],["deg","cible",6],["garde","heros",4]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Marque","Garde","Condition"],
 "ambiance":"Une plume, une poignée de sable tamisé, une prière : Pa-Khered roulait le tout dans le lin.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ANT198-moins-3","zone":"ANT198","pole":"-","palier":3,"nom":"Le Chat par erreur","cout":1,"cible":1,
 "effet":"Si une bête est déjà en jeu, 6 dégâts à la cible. Puis le Chat par erreur rejoint le combat (8 PV, frappe 5) ; la cible devient vulnérable 1. Prix : la carte s'exile.",
 "ops":[["si","bete",[["deg","cible",6]]],["invoque","Chat par erreur",8,5],["vulnerable","cible",1],["exil"]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Condition","Exil","Prix"],
 "ambiance":"Le chat de l'atelier dormait sur les ballots de lin ; on le scella avec eux, par mégarde.",
 "budget":"14,5 / 15 (−3 %)"},
{"id":"ANT198-moins-4","zone":"ANT198","pole":"-","palier":4,"nom":"Le Crocodile de roseaux","cout":2,"cible":1,
 "effet":"Un Crocodile de roseaux rejoint le combat : 26 PV, frappe 0. Tous les ennemis deviennent vulnérables 1 ; 10 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Crocodile de roseaux",26,0],["vulnerable","tous",1],["deg","cible",10],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Prix"],
 "ambiance":"Le crocodile sacré de l'entrée était une botte de roseaux sous une peau tannée, changée à chaque crue.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"ANT198-moins-5","zone":"ANT198","pole":"-","palier":5,"nom":"Les Vendeurs de vœux","cout":2,"cible":1,
 "effet":"Si une bête est en jeu, tous les ennemis deviennent vulnérables 2. La cible devient vulnérable 2 et subit 12 dégâts ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["vulnerable","tous",2]]],["vulnerable","cible",2],["deg","cible",12],["garde","heros",8],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Marque","Garde","Condition","Prix"],
 "ambiance":"À l'entrée, les vendeurs criaient leurs prix : vœu exaucé, vœu à demi, vœu pour un mort.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT198-moins-6","zone":"ANT198","pole":"-","palier":6,"nom":"La Galerie murée","cout":1,"cible":1,
 "effet":"Si une bête est en jeu, 12 dégâts à la cible. Puis une Momie de lin rejoint le combat (16 PV, frappe 0) ; tous les ennemis deviennent vulnérables 1 ; piochez 1. Prix : la carte s'exile.",
 "ops":[["si","bete",[["deg","cible",12]]],["invoque","Momie de lin",16,0],["vulnerable","tous",1],["pioche",1],["exil"]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Pioche","Condition","Exil","Prix"],
 "ambiance":"Le grand prêtre fit murer la galerie de l'inventaire ; les maçons travaillèrent sans lampe, pour ne rien voir.",
 "budget":"21,6 / 22,5 (−4 %)"},
{"id":"ANT198-moins7","zone":"ANT198","pole":"-","palier":7,"nom":"Les Jarres neuves","cout":2,"cible":1,
 "effet":"Le mensonge devient culte. La Procession des jarres rejoint le combat (36 PV, frappe 0) ; tous les ennemis deviennent vulnérables 3 ; 10 dégâts à la cible. Pose Sceau. Si Abîme est posée (consommée) : 28 dégâts à la cible. Prix : défaussez 1 carte.",
 "ops":[["invoque","Procession des jarres",36,0],["vulnerable","tous",3],["deg","cible",10],["pose","Sceau"],["reveil","Abîme",true,[["deg","cible",28]]],["prixDefausse",1]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Marque","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"Les jarres neuves arrivèrent par barques entières ; Pa-Khered les remplit de sable en récitant la prière exacte.",
 "budget":"44,8 sans combo ; réveil +28 (63 %)"},
{"id":"ANT198-plus-1","zone":"ANT198","pole":"+","palier":1,"nom":"Le Bassin des ibis","cout":1,"cible":1,
 "effet":"Un Ibis vivant rejoint le combat : 6 PV, frappe 4. La cible brûle de 1 pendant 3 tours. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Ibis vivant",6,4],["brulure","cible",1,3],["prixPV",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Brûlure","Prix"],
 "ambiance":"Dans le bassin de roseaux, devant le temple, les ibis vivants pêchaient ; les pèlerins ne les regardaient pas.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT198-plus-2","zone":"ANT198","pole":"+","palier":2,"nom":"Le Soleil dans la galerie","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 8 dégâts. Puis 2 dégâts à la cible, et tous les ennemis brûlent de 1 pendant 3 tours.",
 "ops":[["si","brule",[["deg","cible",8]]],["deg","cible",2],["brulure","tous",1,3]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Brûlure","Condition"],
 "ambiance":"Un pan de falaise tomba ; le soleil entra dans la galerie, et le lin se mit à fumer.",
 "budget":"12,6 / 12,5 (+1 %)"},
{"id":"ANT198-plus-3","zone":"ANT198","pole":"+","palier":3,"nom":"Le Chacal de la nécropole","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts. Puis le Chacal de la nécropole rejoint le combat (8 PV, frappe 5) ; la cible brûle de 2 pendant 2 tours. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",6]]],["invoque","Chacal de la nécropole",8,5],["brulure","cible",2,2],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Le chacal fouillait les jarres renversées ; il les flairait une à une, et ne gardait que les vraies.",
 "budget":"16,5 / 15 (+10 %)"},
{"id":"ANT198-plus-4","zone":"ANT198","pole":"+","palier":4,"nom":"Les Jarres brisées","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 12 dégâts. Puis tous les ennemis brûlent de 3 pendant 3 tours ; 6 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",12]]],["brulure","tous",3,3],["deg","cible",6],["prixPV",3]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Les pèlerins brisèrent leurs jarres pour voir ; certains y trouvèrent leur ibis, la plupart un peu de sable chaud.",
 "budget":"28,8 / 28 (+3 %)"},
{"id":"ANT198-plus-5","zone":"ANT198","pole":"+","palier":5,"nom":"Le Cobra du seuil","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts. Puis le Cobra du seuil rejoint le combat (12 PV, frappe 9) ; la cible brûle de 4 pendant 3 tours. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["invoque","Cobra du seuil",12,9],["brulure","cible",4,3],["prixPV",3]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Le cobra logeait dans la jarre du grand prêtre, sous le seuil, la seule qu'on n'ouvrait jamais.",
 "budget":"33,5 / 32 (+5 %)"},
{"id":"ANT198-plus-6","zone":"ANT198","pole":"+","palier":6,"nom":"Les Os au soleil","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts. Puis tous les ennemis brûlent de 2 pendant 3 tours ; 6 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["brulure","tous",2,3],["deg","cible",6],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Les os des vrais ibis blanchissaient sur le sable ; il y en avait si peu qu'on les comptait.",
 "budget":"22,2 / 22,5 (−1 %)"},
{"id":"ANT198-plus7","zone":"ANT198","pole":"+","palier":7,"nom":"L'Ibis de la falaise","cout":2,"cible":0,
 "effet":"La galerie s'ouvre au ciel. L'Ibis de la falaise rejoint le combat (16 PV, frappe 10) ; tous les ennemis brûlent de 4 pendant 3 tours. Pose Braise. Si Sceau est posée (consommée) : 14 dégâts à tous. Prix : le héros perd 5 PV.",
 "ops":[["invoque","Ibis de la falaise",16,10],["brulure","tous",4,3],["pose","Braise"],["reveil","Sceau",true,[["deg","tous",14]]],["prixPV",5]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Brûlure","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Les ibis vivants revinrent pondre dans les alvéoles vidées ; Pa-Khered les regardait faire, et ne vendait plus rien.",
 "budget":"44,4 sans combo ; réveil +30,8 (69 %)"}
]
```

---

## 4. Bouthysia, la Ville des Broches (ANT118) — Antre · Cité en ruines · Pierre · Grecque

Recette du récit : le revers. Recette du −7 : la ruine (l'agora rendue aux chiens) ; du +7 : la démesure (une table unique de l'agora au temple).

**Famine (−)** : la broche vide → les citernes à sec → la meute de l'agora → l'herbe entre les dalles → le chien de Kallias → le compte gratté → la Meute d'hiver. Fil mécanique : des chiens maigres qui frappent fort et tombent vite, et des coups qui redoublent quand il ne reste qu'un ennemi (la meute isole le dernier) ; le prix est en PV, la faim d'abord.
**Festin (+)** : la couronne du bœuf → les broches neuves → le couteau du sacrificateur → la rue des processions → l'hécatombe → les chèvres de la fête → la Table de la cité. Fil mécanique : on amène les bêtes, puis on les sacrifie (votre bête la plus faible perd des PV) pour du mana de Pierre, de la pioche et des soins pour tous vos alliés ; condition « une bête est en jeu » ; le prix : les ennemis mangent aussi.

```json
{"fiche":"ANT118","nom":"Bouthysia, la Ville des Broches",
 "recit":"Pour sa fête, Bouthysia sacrifiait cent bœufs devant le temple, et chaque citoyen repartait avec sa broche de viande. Les broches de fer servaient aussi de monnaie ; on les pendait aux murs du sanctuaire, par milliers. L'hiver du siège, il n'y eut plus de bœufs. Le magistrat Kallias maintint la procession avec des broches vides, pour que l'assiégeant entende chanter. Les chiens de la ville la suivirent jusqu'à l'autel. Au revers de la stèle de la fête, quelqu'un a gravé le compte des chiens mangés cet hiver-là, puis l'a gratté, trait par trait.",
 "pal":["Agora vide, autels froids, broches de fer arrachées des murs et rongées ; des chiens squelettiques dorment dans le temple, et nul ne les chasse.","Portes murées, citernes à sec, herbe arrachée entre les dalles pour la soupe ; les chiens suivent les passants à distance et ne grognent plus.","Ville grecque en ruines sur une colline de calcaire, temple sans toit, murs hérissés de broches de fer rouillées ; des chiens errants sur l'agora.","Autels rallumés, fumée de graisse au-dessus du temple, bœufs couronnés dans la rue des processions ; les broches neuves brillent aux murs.","Une table unique court de l'agora au temple, sur des stades ; la fumée des autels cache le ciel, et la cité entière mâche."],
 "pm":"Famine","pp":"Festin"}
```

```json
[
{"id":"ANT118-moins-1","zone":"ANT118","pole":"-","palier":1,"nom":"La Broche vide","cout":1,"cible":1,
 "effet":"Un Chien maigre rejoint le combat : 4 PV, frappe 5. 3 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Chien maigre",4,5],["deg","cible",3],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Kallias levait sa broche vide au passage de l'autel ; derrière lui, les chiens regardaient la broche, pas l'autel.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT118-moins-2","zone":"ANT118","pole":"-","palier":2,"nom":"Les Citernes à sec","cout":1,"cible":1,
 "effet":"9 dégâts à la cible ; s'il ne reste qu'elle, 8 dégâts de plus. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",9],["si","seul",[["deg","cible",8]]],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Au fond de la citerne de l'agora, on raclait une boue verte qu'on faisait bouillir pour les enfants.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT118-moins-3","zone":"ANT118","pole":"-","palier":3,"nom":"La Meute de l'agora","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 8 dégâts à la cible. Puis un Chien de l'agora rejoint le combat (6 PV, frappe 6) ; 2 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","seul",[["deg","cible",8]]],["invoque","Chien de l'agora",6,6],["deg","cible",2],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les chiens de l'agora chassaient en silence, à la nuit, et choisissaient toujours celui qui marchait seul.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ANT118-moins-4","zone":"ANT118","pole":"-","palier":4,"nom":"L'Herbe entre les dalles","cout":2,"cible":1,
 "effet":"20 dégâts à la cible, qui devient vulnérable 1 ; s'il ne reste qu'elle, 14 dégâts de plus. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",20],["vulnerable","cible",1],["si","seul",[["deg","cible",14]]],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"On arracha l'herbe entre les dalles pour la soupe ; au printemps, l'agora était propre comme un autel.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT118-moins-5","zone":"ANT118","pole":"-","palier":5,"nom":"Le Chien de Kallias","cout":2,"cible":1,
 "effet":"Le Chien de Kallias rejoint le combat : 10 PV, frappe 12. 6 dégâts à la cible ; s'il ne reste qu'un ennemi, 12 dégâts de plus. Prix : le héros perd 4 PV.",
 "ops":[["invoque","Chien de Kallias",10,12],["deg","cible",6],["si","seul",[["deg","cible",12]]],["prixPV",4]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le chien du magistrat fut le dernier épargné ; il suivait Kallias à l'assemblée, et mangeait dans sa main.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT118-moins-6","zone":"ANT118","pole":"-","palier":6,"nom":"Le Compte gratté","cout":1,"cible":1,
 "effet":"Si une bête est en jeu, 10 dégâts à la cible ; s'il ne reste qu'un ennemi, 12 dégâts de plus. Puis 10 dégâts à la cible.",
 "ops":[["si","bete",[["deg","cible",10]]],["si","seul",[["deg","cible",12]]],["deg","cible",10]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Condition"],
 "ambiance":"Au revers de la stèle, des traits serrés pour les chiens mangés, puis un raclage soigneux à la pointe.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ANT118-moins7","zone":"ANT118","pole":"-","palier":7,"nom":"La Meute d'hiver","cout":2,"cible":1,
 "effet":"La ville appartient aux chiens. La Meute d'hiver rejoint le combat (14 PV, frappe 14) ; 16 dégâts à la cible ; s'il ne reste qu'elle, 12 de plus. Pose Sang. Si Racine est posée (consommée) : 30 dégâts à la cible. Prix : le héros perd 6 PV.",
 "ops":[["invoque","Meute d'hiver",14,14],["deg","cible",16],["si","seul",[["deg","cible",12]]],["pose","Sang"],["reveil","Racine",true,[["deg","cible",30]]],["prixPV",6]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Condition","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Quand l'assiégeant entra enfin, il trouva l'agora tenue par les chiens ; ils ne reculèrent pas devant les lances.",
 "budget":"44 sans combo ; réveil +30 (68 %)"},
{"id":"ANT118-plus-1","zone":"ANT118","pole":"+","palier":1,"nom":"La Couronne du bœuf","cout":1,"cible":0,
 "effet":"Un Bœuf couronné rejoint le combat : 14 PV, frappe 2. Le héros se soigne de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Bœuf couronné",14,2],["soin","heros",2],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"On tressait au bœuf une couronne d'olivier ; il suivait la flûte jusqu'à l'autel sans se faire prier.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT118-plus-2","zone":"ANT118","pole":"+","palier":2,"nom":"Les Broches neuves","cout":1,"cible":0,
 "effet":"Si une bête est en jeu, vos alliés se soignent de 6. +1 mana de Pierre ; le héros gagne 5 de garde.",
 "ops":[["si","bete",[["soin","allies",6]]],["mana","Pierre",1],["garde","heros",5]],
 "tags":["Antre","Pierre","Pôle +","Garde","Soin","Mana","Condition"],
 "ambiance":"Les forgerons rendaient chaque broche un peu plus légère ; personne ne pèse la monnaie un jour de fête.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT118-plus-3","zone":"ANT118","pole":"+","palier":3,"nom":"Le Couteau du sacrificateur","cout":1,"cible":0,
 "effet":"Votre bête la plus faible perd 6 PV : +2 mana de Pierre, piochez 1 carte, vos alliés se soignent de 7.",
 "ops":[["prixBete",6],["mana","Pierre",2],["pioche",1],["soin","allies",7]],
 "tags":["Antre","Pierre","Pôle +","Soin","Pioche","Mana","Prix"],
 "ambiance":"Le sacrificateur cachait le couteau sous l'orge ; le bœuf hochait la tête, et l'on disait qu'il consentait.",
 "budget":"14,5 / 15 (−3 %)"},
{"id":"ANT118-plus-4","zone":"ANT118","pole":"+","palier":4,"nom":"La Rue des processions","cout":2,"cible":0,
 "effet":"Un Bœuf de procession rejoint le combat : 24 PV, frappe 3. Vos alliés se soignent de 8 et gagnent 4 de garde. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Bœuf de procession",24,3],["soin","allies",8],["garde","allies",4],["ennemiSoin",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Garde","Soin","Prix"],
 "ambiance":"La rue des processions montait à l'autel entre les citoyens ; les assiégeants regardaient depuis la colline.",
 "budget":"28,9 / 28 (+3 %)"},
{"id":"ANT118-plus-5","zone":"ANT118","pole":"+","palier":5,"nom":"L'Hécatombe","cout":2,"cible":0,
 "effet":"Votre bête la plus faible perd 10 PV : +2 mana de Pierre, piochez 2 cartes, vos alliés se soignent de 10 ; 6 dégâts à tous les ennemis.",
 "ops":[["prixBete",10],["mana","Pierre",2],["pioche",2],["soin","allies",10],["deg","tous",6]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Soin","Pioche","Mana","Prix"],
 "ambiance":"Cent bœufs devant le temple, le sang dans les rigoles jusqu'à la porte basse ; les chiens attendaient dessous.",
 "budget":"32,2 / 32 (+1 %)"},
{"id":"ANT118-plus-6","zone":"ANT118","pole":"+","palier":6,"nom":"Les Chèvres de la fête","cout":1,"cible":0,
 "effet":"Si une bête est déjà en jeu, vos alliés se soignent de 8. Puis une Chèvre de la fête rejoint le combat (16 PV, frappe 5) ; +1 mana de Pierre. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","bete",[["soin","allies",8]]],["invoque","Chèvre de la fête",16,5],["mana","Pierre",1],["ennemiSoin",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin","Mana","Condition","Prix"],
 "ambiance":"Les petites gens n'offraient qu'une chèvre ; elle rôtissait sur la même broche que le bœuf du magistrat.",
 "budget":"20,1 / 22,5 (−11 %)"},
{"id":"ANT118-plus7","zone":"ANT118","pole":"+","palier":7,"nom":"La Table de la cité","cout":2,"cible":0,
 "effet":"Toute la cité passe à table. Le Taureau de la fête arrive (30 PV, frappe 6) ; alliés soignés de 14 ; +2 mana de Pierre. Pose Braise. Si Sang (consommée) : 10 dégâts à tous, alliés soignés de 8. Prix : chaque ennemi se soigne de 3.",
 "ops":[["invoque","Taureau de la fête",30,6],["soin","allies",14],["mana","Pierre",2],["pose","Braise"],["reveil","Sang",true,[["deg","tous",10],["soin","allies",8]]],["ennemiSoin",3]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Soin","Mana","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"On invita les assiégeants à la table, après la paix ; ils mangèrent les mêmes bœufs, sur les mêmes broches.",
 "budget":"44,4 sans combo ; réveil +34 (77 %)"}
]
```

---

## 5. L'Adbar d'Arbatana (ASS030) — Assemblée · Forêt boréale · Glace · Éthiopienne

Recette du récit : la chronique tronquée (la seule du lot). Recette du −7 : le silence (le conseil gelé sur ses bancs) ; du +7 : le cercle (la forêt entière assise autour du feu).

**Glace (−)** : la loi du bois gardé → le givre des barbes → la loi du premier gel → le brasero éteint → la loi du genévrier fendu → le palais du choum → le Cercle gelé. Fil mécanique : lois qui font tomber la garde ennemie (le gel rend les boucliers cassants) et qui marquent (Vulnérable), plus fortes si la cible a de la garde ; le prix est en PV, le froid mord d'abord ceux qui votent.
**Feu (+)** : la première tasse → la loi du brasero au centre → la deuxième tasse → la loi des fagots → la troisième tasse → les croix de bois → le Grand Feu de la Croix. Fil mécanique : lois de brûlure qui chauffent tout le cercle (garde et soin de vos alliés), et des cartes qui paient davantage si c'est au moins votre troisième carte du tour, comme on ne vote qu'à la troisième tasse ; le prix : une carte jetée au feu, ou l'ennemi qui se réchauffe aussi.

```json
{"fiche":"ASS030","nom":"L'Adbar d'Arbatana",
 "recit":"Registre du conseil, tenu sous le genévrier sacré. Premier gel : on vote de garder le bois pour le palais du choum ; le grand feu de la Croix ne sera pas allumé. Deuxième gel : Askalé torréfie le café devant les anciens, trois tournées, et nul ne vote avant la troisième tasse. Grand gel : le genévrier se fend jusqu'au cœur. Le choum fait dire que le bois fendu lui revient, puisque le conseil s'est assis dessous. Askalé rallume son brasero au milieu du cercle. Les anciens se lèvent, et",
 "pal":["Le conseil gelé sur ses bancs : anciens assis sous le givre, genévrier fendu jusqu'au cœur, cendres froides au centre du cercle ; pas un bruit.","Neige sur les bancs de pierre, givre dans les barbes, brasero éteint ; au-dessus de la forêt, seul le palais du choum fume.","Genévriers et bouleaux sur les hauts plateaux, un arbre sacré au milieu d'un cercle de pierres ; une femme torréfie le café sur des braises.","Croix de bois dressées pour la fête, fagots empilés en cône au centre du cercle, odeur de café et d'encens ; on chante sous l'arbre.","Le grand feu tient le centre jour et nuit, la neige recule jusqu'aux derniers arbres ; la forêt entière vient s'asseoir en cercle, tasse en main."],
 "pm":"Glace","pp":"Feu"}
```

```json
[
{"id":"ASS030-moins-1","zone":"ASS030","pole":"-","palier":1,"nom":"Loi du bois gardé","cout":1,"cible":1,
 "effet":"Loi du bois gardé : si la cible a de la garde, elle tombe. Puis 6 dégâts à la cible, qui devient vulnérable 1. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["deg","cible",6],["vulnerable","cible",1],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Perce-garde","Condition","Prix"],
 "ambiance":"Le conseil vota de garder le bois pour le choum ; les anciens rentrèrent chez eux les mains vides.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ASS030-moins-2","zone":"ASS030","pole":"-","palier":2,"nom":"Le Givre des barbes","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts. Puis la cible devient vulnérable 2 ; le héros gagne 4 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["vulnerable","cible",2],["garde","heros",4]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Garde","Condition"],
 "ambiance":"Le givre prenait dans les barbes pendant les débats ; le plus vieux ne pouvait plus ouvrir la bouche.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"ASS030-moins-3","zone":"ASS030","pole":"-","palier":3,"nom":"Loi du premier gel","cout":1,"cible":1,
 "effet":"Loi du premier gel : toutes les gardes ennemies tombent ; tous les ennemis deviennent vulnérables 1 ; 6 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["briseGarde","tous"],["vulnerable","tous",1],["deg","cible",6],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Perce-garde","Prix"],
 "ambiance":"Au premier gel, les boucliers de cuir des gardes du choum craquaient comme du pain sec.",
 "budget":"16,2 / 15 (+8 %)"},
{"id":"ASS030-moins-4","zone":"ASS030","pole":"-","palier":4,"nom":"Le Brasero éteint","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, elle tombe et la cible subit 14 dégâts. Puis elle devient vulnérable 3 et subit 12 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"],["deg","cible",14]]],["vulnerable","cible",3],["deg","cible",12],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Perce-garde","Condition","Prix"],
 "ambiance":"Askalé garda son brasero éteint tout l'hiver, sur ordre ; elle le nettoyait chaque soir, comme une arme.",
 "budget":"26,5 / 28 (−5 %)"},
{"id":"ASS030-moins-5","zone":"ASS030","pole":"-","palier":5,"nom":"Loi du genévrier fendu","cout":2,"cible":1,
 "effet":"Loi du genévrier fendu : toutes les gardes ennemies tombent ; tous les ennemis deviennent vulnérables 2 ; 8 dégâts à la cible ; le héros gagne 10 de garde. Prix : le héros perd 4 PV.",
 "ops":[["briseGarde","tous"],["vulnerable","tous",2],["deg","cible",8],["garde","heros",10],["prixPV",4]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Perce-garde","Garde","Prix"],
 "ambiance":"L'arbre sacré se fendit dans la nuit ; au matin, le conseil siégeait dans la fente, par habitude.",
 "budget":"31,8 / 32 (−1 %)"},
{"id":"ASS030-moins-6","zone":"ASS030","pole":"-","palier":6,"nom":"Le Palais du choum","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, elle tombe et la cible devient vulnérable 2. Puis 12 dégâts à la cible ; le héros gagne 8 de garde.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"],["vulnerable","cible",2]]],["deg","cible",12],["garde","heros",8]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Perce-garde","Garde","Condition"],
 "ambiance":"Le palais du choum brûlait le bois du conseil dans chaque cheminée ; ses fenêtres ruisselaient de buée.",
 "budget":"22,9 / 22,5 (+2 %)"},
{"id":"ASS030-moins7","zone":"ASS030","pole":"-","palier":7,"nom":"Le Cercle gelé","cout":2,"cible":1,
 "effet":"Le conseil gèle sur ses bancs. Gardes ennemies brisées ; tous les ennemis deviennent vulnérables 3 ; 12 dégâts à la cible ; le héros gagne 14 de garde. Pose Givre. Si Braise (consommée) : 28 dégâts à la cible. Prix : le héros perd 5 PV.",
 "ops":[["briseGarde","tous"],["vulnerable","tous",3],["deg","cible",12],["garde","heros",14],["pose","Givre"],["reveil","Braise",true,[["deg","cible",28]]],["prixPV",5]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Marque","Perce-garde","Garde","Combo","Pose Givre","Réveil Braise","Prix"],
 "ambiance":"Au printemps, on trouva les anciens assis en cercle sous le givre, la main levée pour voter.",
 "budget":"44,6 sans combo ; réveil +28 (63 %)"},
{"id":"ASS030-plus-1","zone":"ASS030","pole":"+","palier":1,"nom":"La Première Tasse","cout":1,"cible":0,
 "effet":"Tous les ennemis brûlent de 1 pendant 3 tours ; vos alliés se soignent de 3 ; le héros gagne 2 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["brulure","tous",1,3],["soin","allies",3],["garde","heros",2],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Brûlure","Garde","Soin","Prix"],
 "ambiance":"La première tasse, l'abol, se boit brûlante et sans parler ; Askalé la sert d'abord au plus pauvre.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ASS030-plus-2","zone":"ASS030","pole":"+","palier":2,"nom":"Loi du brasero au centre","cout":1,"cible":0,
 "effet":"Loi du brasero au centre : si c'est au moins votre troisième carte du tour, tous les ennemis brûlent de 3 pendant 2 tours. Vos alliés gagnent 6 de garde.",
 "ops":[["si","troisCartes",[["brulure","tous",3,2]]],["garde","allies",6]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Brûlure","Garde","Condition"],
 "ambiance":"Askalé posa son brasero au milieu du cercle ; aucune loi ne disait où le poser, et personne n'osa.",
 "budget":"13,8 / 12,5 (+10 %)"},
{"id":"ASS030-plus-3","zone":"ASS030","pole":"+","palier":3,"nom":"La Deuxième Tasse","cout":1,"cible":1,
 "effet":"La cible brûle de 3 pendant 3 tours ; vos alliés se soignent de 4 ; si c'est au moins votre troisième carte du tour, piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",3,3],["soin","allies",4],["si","troisCartes",[["pioche",1]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Brûlure","Soin","Pioche","Condition","Prix"],
 "ambiance":"À la deuxième tasse, la tona, les langues se délient : on parle du bois, puis du choum, tout bas.",
 "budget":"14 / 15 (−7 %)"},
{"id":"ASS030-plus-4","zone":"ASS030","pole":"+","palier":4,"nom":"Loi des fagots en cône","cout":2,"cible":0,
 "effet":"Loi des fagots en cône : tous les ennemis brûlent de 3 pendant 3 tours ; vos alliés gagnent 8 de garde. Prix : chaque ennemi se soigne de 2.",
 "ops":[["brulure","tous",3,3],["garde","allies",8],["ennemiSoin",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Brûlure","Garde","Prix"],
 "ambiance":"Chaque famille apporta son fagot en cachette et le posa contre les autres, au pied de la croix.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS030-plus-5","zone":"ASS030","pole":"+","palier":5,"nom":"La Troisième Tasse","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte du tour, vos alliés se soignent de 10 et vous piochez 2 cartes. La cible brûle de 5 pendant 3 tours ; vos alliés gagnent 6 de garde.",
 "ops":[["si","troisCartes",[["soin","allies",10],["pioche",2]]],["brulure","cible",5,3],["garde","allies",6]],
 "tags":["Assemblée","Glace","Pôle +","Brûlure","Garde","Soin","Pioche","Condition"],
 "ambiance":"La troisième tasse est la baraka, la bénédiction ; à Arbatana, c'est aussi l'heure du vote.",
 "budget":"33,7 / 32 (+5 %)"},
{"id":"ASS030-plus-6","zone":"ASS030","pole":"+","palier":6,"nom":"Les Croix de bois","cout":1,"cible":0,
 "effet":"Tous les ennemis brûlent de 2 pendant 3 tours ; vos alliés gagnent 6 de garde et se soignent de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","tous",2,3],["garde","allies",6],["soin","allies",4],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle +","Brûlure","Garde","Soin","Prix"],
 "ambiance":"Les croix de la fête furent taillées dans le genévrier fendu ; le choum les fit compter, puis renonça.",
 "budget":"23,4 / 22,5 (+4%) — recalculé par le critique"},
{"id":"ASS030-plus7","zone":"ASS030","pole":"+","palier":7,"nom":"Le Grand Feu de la Croix","cout":2,"cible":0,
 "effet":"Le feu tient le conseil. Tous les ennemis brûlent de 5 pendant 3 tours ; vos alliés gagnent 12 de garde et se soignent de 8. Pose Braise. Si Sceau est posée (consommée) : piochez 3, alliés soignés de 14. Prix : chaque ennemi se soigne de 3.",
 "ops":[["brulure","tous",5,3],["garde","allies",12],["soin","allies",8],["pose","Braise"],["reveil","Sceau",true,[["pioche",3],["soin","allies",14]]],["ennemiSoin",3]],
 "tags":["Assemblée","Glace","Forme ultime +7","Brûlure","Garde","Soin","Pioche","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Le grand feu tomba du côté du palais, comme le veut la coutume, et la forêt vint s'asseoir autour.",
 "budget":"52,8 sans combo ; réveil +33 (62 %)"}
]
```

---

## 6. L'Ekklésia aux Vapeurs d'Athymna (ASS083) — Assemblée · Volcan · Feu · Grecque

Recette du récit : le décret (trois décrets successifs du peuple). Recette du −7 : la transe (tout le peuple respire la vapeur) ; du +7 : l'ordre (le cratère scellé sous une dalle de décrets).

**Folie (−)** : la loi de la vapeur → Kléoboulé respire → la loi des tablettes non lues → les scribes endormis → la loi de l'urne pleine → la prophétesse sans vapeur → le Peuple en transe. Fil mécanique : lois de l'excès d'inspiration : pioche, mana de Feu, écho (la carte suivante compte double), plus fortes quand le héros est sous la moitié de ses PV ; le prix est en PV et en cartes, la vapeur se respire. Seul boost du lot, à la forme −7.
**Raison (+)** : le caillou blanc → la loi du tour de parole → le héraut relit → la loi de la fente bouchée → les tables du compte → la loi des cailloux noirs → la Dalle des décrets. Fil mécanique : lois de mesure qui affaiblissent les ennemis pour tout le combat, pioche, et punition de qui prend son élan (« nul ne parle avant son tour ») ; le prix : l'ennemi se couvre pendant qu'on compte, ou une carte défaussée.

```json
{"fiche":"ASS083","nom":"L'Ekklésia aux Vapeurs d'Athymna",
 "recit":"Il a plu au peuple d'Athymna, Phainippos présidant : que la prophétesse Kléoboulé, qui respire la vapeur du cratère depuis vingt ans, soit nourrie aux frais de la cité ; que ses oracles soient gravés ; que l'assemblée vote ensuite, au caillou, s'il faut les suivre. Il a plu au peuple, l'année d'après : que la vapeur ayant cessé, Kléoboulé continue de prophétiser, la cité n'ayant rien changé à sa ration. Il a plu au peuple, enfin : que les cailloux noirs soient retirés de l'urne, pour gagner du temps.",
 "pal":["L'assemblée entière respire au bord du cratère ; les gradins sont couverts de dormeurs qui parlent, et l'urne déborde de cailloux d'une seule couleur.","Fumerolles jaunes sur les gradins, tablettes d'oracles empilées sans être lues ; la prophétesse parle sans arrêt, et les scribes s'endorment.","Gradins de lave noire au bord d'un cratère fumant, tribune de pierre, fente d'où monte la vapeur ; une urne de bronze au pied de la tribune.","Fente du cratère bouchée de pierres, citoyens rangés par tribus, cailloux comptés sur des tables ; un héraut lit chaque décret à voix haute.","Le cratère couvert d'une dalle gravée de décrets, l'assemblée assise en rangs exacts ; on n'entend que les cailloux tomber un à un dans l'urne."],
 "pm":"Folie","pp":"Raison"}
```

```json
[
{"id":"ASS083-moins-1","zone":"ASS083","pole":"-","palier":1,"nom":"Loi de la vapeur","cout":1,"cible":1,
 "effet":"Loi de la vapeur : piochez 1 carte, +1 mana de Feu ; 3 dégâts à la cible ; si le héros est sous la moitié de ses PV, piochez 1 de plus. Prix : le héros perd 2 PV.",
 "ops":[["pioche",1],["mana","Feu",1],["deg","cible",3],["si","blesse",[["pioche",1]]],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"La loi fixait la place de chacun autour de la fente ; les plus proches votaient d'une voix plus forte.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS083-moins-2","zone":"ASS083","pole":"-","palier":2,"nom":"Kléoboulé respire","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, +2 mana de Feu. Piochez 2 cartes ; 2 dégâts à la cible.",
 "ops":[["si","blesse",[["mana","Feu",2]]],["pioche",2],["deg","cible",2]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Pioche","Mana","Condition"],
 "ambiance":"Kléoboulé se penchait sur la fente, les yeux ouverts ; ce qu'elle disait ensuite, elle ne s'en souvenait jamais.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS083-moins-3","zone":"ASS083","pole":"-","palier":3,"nom":"Loi des tablettes non lues","cout":1,"cible":0,
 "effet":"Loi des tablettes non lues : piochez 2 cartes, +2 mana de Feu ; la prochaine carte de zone de ce tour compte double. Prix : défaussez 1 carte au hasard ; le héros perd 2 PV.",
 "ops":[["pioche",2],["mana","Feu",2],["echo"],["prixDefausse",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Pioche","Écho","Mana","Prix"],
 "ambiance":"Les oracles s'empilaient plus vite qu'on ne les gravait ; un décret ordonna de ne graver que les courts.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ASS083-moins-4","zone":"ASS083","pole":"-","palier":4,"nom":"Les Scribes endormis","cout":2,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, la prochaine carte de zone de ce tour compte double. Piochez 3 cartes, +2 mana de Feu ; 8 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["echo"]]],["pioche",3],["mana","Feu",2],["deg","cible",8],["prixPV",3]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Pioche","Écho","Mana","Condition","Prix"],
 "ambiance":"Les scribes s'endormaient dans la vapeur, le stylet à la main ; on gravait leurs rêves avec le reste.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS083-moins-5","zone":"ASS083","pole":"-","palier":5,"nom":"Loi de l'urne pleine","cout":2,"cible":0,
 "effet":"Loi de l'urne pleine : la prochaine carte de zone de ce tour compte double ; piochez 2, +2 mana de Feu ; si le héros est sous la moitié de ses PV, 12 dégâts à tous. Prix : défaussez 1 carte au hasard.",
 "ops":[["echo"],["pioche",2],["mana","Feu",2],["si","blesse",[["deg","tous",12]]],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Pioche","Écho","Mana","Condition","Prix"],
 "ambiance":"L'urne de bronze débordait avant la fin du vote ; on comptait les cailloux tombés à terre comme des voix.",
 "budget":"30,2 / 32 (−6 %)"},
{"id":"ASS083-moins-6","zone":"ASS083","pole":"-","palier":6,"nom":"La Prophétesse sans vapeur","cout":1,"cible":1,
 "effet":"Piochez 2 cartes ; 10 dégâts à la cible ; si le héros est sous la moitié de ses PV, +2 mana de Feu.",
 "ops":[["pioche",2],["deg","cible",10],["si","blesse",[["mana","Feu",2]]]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Pioche","Mana","Condition"],
 "ambiance":"La fente ne fumait plus ; Kléoboulé s'y penchait quand même, et parlait plus longtemps qu'avant.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ASS083-moins7","zone":"ASS083","pole":"-","palier":7,"nom":"Le Peuple en transe","cout":2,"cible":0,
 "effet":"Tout le peuple prophétise. +1 capacité ce tour ; piochez 3, +2 mana de Feu ; 12 dégâts à tous ; écho. Pose Abîme. Si Braise est posée (consommée) : 18 dégâts à tous. Prix : le héros perd 6 PV, défaussez 1 carte.",
 "ops":[["boost"],["pioche",3],["mana","Feu",2],["deg","tous",12],["echo"],["pose","Abîme"],["reveil","Braise",true,[["deg","tous",18]]],["prixPV",6],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Pioche","Écho","Mana","Boost","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"L'année où la vapeur revint, l'assemblée entière se coucha au bord du cratère, et chacun vota pour soi.",
 "budget":"47,4 sans combo ; réveil +39,6 (84 %)"},
{"id":"ASS083-plus-1","zone":"ASS083","pole":"+","palier":1,"nom":"Le Caillou blanc","cout":1,"cible":1,
 "effet":"La cible perd 2 d'attaque ; piochez 1 carte ; si elle prend son élan, elle hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["affaiblit","cible",2],["pioche",1],["si","elan",[["hesite","cible"]]],["ennemiGarde",1]],
 "tags":["Assemblée","Feu","Pôle +","Affaiblissement","Contrôle","Pioche","Condition","Prix"],
 "ambiance":"Phainippos tenait le caillou blanc au-dessus de l'urne jusqu'à ce que la tribune se taise.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ASS083-plus-2","zone":"ASS083","pole":"+","palier":2,"nom":"Loi du tour de parole","cout":1,"cible":1,
 "effet":"Loi du tour de parole : si la cible prend son élan, elle hésite et perd 2 d'attaque. Puis tous les ennemis perdent 1 d'attaque.",
 "ops":[["si","elan",[["hesite","cible"],["affaiblit","cible",2]]],["affaiblit","tous",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Affaiblissement","Contrôle","Condition"],
 "ambiance":"Nul ne parle avant l'appel du héraut ; qui se lève trop tôt reste debout, muet, jusqu'au soir.",
 "budget":"12,1 / 12,5 (−3 %)"},
{"id":"ASS083-plus-3","zone":"ASS083","pole":"+","palier":3,"nom":"Le Héraut relit","cout":1,"cible":1,
 "effet":"Piochez 2 cartes ; tous les ennemis perdent 1 d'attaque ; 4 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["affaiblit","tous",1],["deg","cible",4],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Affaiblissement","Pioche","Prix"],
 "ambiance":"Le héraut relisait chaque décret lentement ; l'assemblée découvrait parfois ce qu'elle avait voté.",
 "budget":"15,6 / 15 (+4 %)"},
{"id":"ASS083-plus-4","zone":"ASS083","pole":"+","palier":4,"nom":"Loi de la fente bouchée","cout":2,"cible":1,
 "effet":"Loi de la fente bouchée : tous les ennemis perdent 2 d'attaque ; piochez 1 carte ; le héros gagne 10 de garde ; si la cible prend son élan, 12 dégâts. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["affaiblit","tous",2],["pioche",1],["garde","heros",10],["si","elan",[["deg","cible",12]]],["ennemiGarde",2]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"On boucha la fente avec les pierres de la tribune ; Kléoboulé s'assit dessus, et se tut enfin.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"ASS083-plus-5","zone":"ASS083","pole":"+","palier":5,"nom":"Les Tables du compte","cout":2,"cible":1,
 "effet":"Piochez 2 cartes ; la cible perd 3 d'attaque ; si elle prend son élan, elle hésite et subit 10 dégâts. Le héros gagne 8 de garde.",
 "ops":[["pioche",2],["affaiblit","cible",3],["si","elan",[["hesite","cible"],["deg","cible",10]]],["garde","heros",8]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Affaiblissement","Contrôle","Garde","Pioche","Condition"],
 "ambiance":"Sur les tables, les cailloux s'alignaient par dizaines ; un compteur payé à la journée ne se trompe jamais.",
 "budget":"30,9 / 32 (−3 %)"},
{"id":"ASS083-plus-6","zone":"ASS083","pole":"+","palier":6,"nom":"Loi des cailloux noirs","cout":1,"cible":1,
 "effet":"Loi des cailloux noirs : tous les ennemis perdent 2 d'attaque ; piochez 1 carte ; le héros gagne 4 de garde ; si la cible prend son élan, 12 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","tous",2],["pioche",1],["garde","heros",4],["si","elan",[["deg","cible",12]]],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"On retira les cailloux noirs de l'urne pour gagner du temps ; les votes devinrent unanimes, et plus courts.",
 "budget":"23,4 / 22,5 (+4 %)"},
{"id":"ASS083-plus7","zone":"ASS083","pole":"+","palier":7,"nom":"La Dalle des décrets","cout":2,"cible":1,
 "effet":"Le cratère est scellé. Tous les ennemis perdent 3 d'attaque ; 14 dégâts à la cible ; piochez 2 ; le héros gagne 12 de garde. Pose Sceau. Si Givre (consommée) : tous hésitent et perdent 2 d'attaque ; piochez 2. Prix : ennemis +3 de garde.",
 "ops":[["affaiblit","tous",3],["deg","cible",14],["pioche",2],["garde","heros",12],["pose","Sceau"],["reveil","Givre",true,[["hesite","tous"],["affaiblit","tous",2],["pioche",2]]],["ennemiGarde",3]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Affaiblissement","Contrôle","Garde","Pioche","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Sur la dalle du cratère, les décrets sont gravés si serrés qu'on ne peut plus en ajouter.",
 "budget":"45,4 sans combo ; réveil +30,2 (67 %)"}
]
```

---

## 7. Le Puhrum d'Ešnak-Šadê (ASS064) — Assemblée · Haute montagne · Pierre · Mésopotamienne

Recette du récit : les deux tablettes. Recette du −7 : le retour (toutes les chèvres redescendent) ; du +7 : l'officine (chaque maison a son étagère de remèdes).

**Peste (−)** : la loi de la chèvre blanche → les portes scellées d'argile → la loi du col → les bergers fiévreux → la loi de la chèvre chargée → l'autre versant → la Montagne aux chèvres. Fil mécanique : la contagion se donne à qui vous touche : riposte (qui frappe le malade prend sa fièvre) et marques (Vulnérable), plus fortes sur l'ennemi qui charge ou piétine ; le prix est en PV, le héros est malade aussi. Ni quarantaine (ASS168), ni vermine (ANT170), ni dégâts à tous avec exil (ASS096 de D, même lot).
**Guérison (+)** : la racine cuite → l'amulette d'argile → la loi du torrent → les bottes de racines → la loi de l'officine → la main de Ninsun-ama → l'Officine du conseil. Fil mécanique : on refait le remède : soin du héros et récupération de la dernière carte défaussée, pioche ; les amulettes frappent les démons ailés (condition « la cible vole par-dessus ») ; le prix : une carte défaussée, ou l'ennemi qui se soigne aussi, car l'asû ne refuse personne.

```json
{"fiche":"ASS064","nom":"Le Puhrum d'Ešnak-Šadê",
 "recit":"Deux tablettes sur la même étagère du conseil. La première, de la main de l'asû Ninsun-ama : « Pour la fièvre des bergers, cuire la racine, laver le malade au torrent, brûler sa couche, et ne pas toucher aux chèvres. » La seconde, scellée par les anciens : « Que la fièvre soit chargée sur une chèvre blanche, menée au col et lâchée vers le village d'en face. » Les anciens votèrent la seconde, une chèvre coûtant moins qu'une racine. La chèvre redescendit le lendemain par l'autre versant, avec les bergers d'en face.",
 "pal":["Les chèvres blanches lâchées au col redescendent toutes, par centaines, vers les maisons murées ; les bancs du conseil sont vides.","Huttes de pierre aux portes scellées d'argile, bergers fiévreux couchés sur des peaux ; une chèvre enrubannée attend au pied du col.","Village de pierre sèche accroché à la montagne, maison du conseil à toit plat, chèvres sur les pentes ; l'asû fait sécher ses racines au soleil.","Racines pendues en bottes à chaque linteau, malades lavés dans le torrent, amulettes d'argile cuite au cou des enfants ; les chèvres paissent tranquilles.","Chaque maison a son étagère de remèdes et son amulette au seuil ; le conseil siège dans l'officine de l'asû, entre les jarres étiquetées."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"ASS064-moins-1","zone":"ASS064","pole":"-","palier":1,"nom":"Loi de la chèvre blanche","cout":1,"cible":1,
 "effet":"Loi de la chèvre blanche : riposte 4 ; 3 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["riposte",4],["deg","cible",3],["prixPV",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Riposte","Dégâts","Prix"],
 "ambiance":"On choisit la chèvre la plus blanche ; son berger la nourrit de pain la veille, et ne dormit pas.",
 "budget":"10,0 / 10,0 (+0%) — recalculé par le critique"},
{"id":"ASS064-moins-2","zone":"ASS064","pole":"-","palier":2,"nom":"Les Portes scellées d'argile","cout":1,"cible":1,
 "effet":"Riposte 4 ; si la cible charge ou piétine, elle devient vulnérable 2 et subit 4 dégâts.",
 "ops":[["riposte",4],["si","pietine",[["vulnerable","cible",2],["deg","cible",4]]]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Marque","Riposte","Condition"],
 "ambiance":"Les portes des malades furent scellées d'argile fraîche, au sceau du conseil ; on passait le pain par le toit.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS064-moins-3","zone":"ASS064","pole":"-","palier":3,"nom":"Loi du col","cout":1,"cible":0,
 "effet":"Loi du col : riposte 5 ; 3 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["riposte",5],["deg","tous",3],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Riposte","Dégâts","Prix"],
 "ambiance":"Le berger mena la chèvre au col, défit la corde et redescendit sans se retourner, selon la loi.",
 "budget":"14,6 / 15,0 (-3%) — recalculé par le critique"},
{"id":"ASS064-moins-4","zone":"ASS064","pole":"-","palier":4,"nom":"Les Bergers fiévreux","cout":2,"cible":1,
 "effet":"Si la cible charge ou piétine, elle devient vulnérable 3. Puis riposte 8 ; tous les ennemis deviennent vulnérables 1 ; 4 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","pietine",[["vulnerable","cible",3]]],["riposte",8],["vulnerable","tous",1],["deg","cible",4],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Marque","Riposte","Condition","Prix"],
 "ambiance":"Les bergers fiévreux parlaient à leurs chèvres dans leur sommeil ; les chèvres répondaient, de l'autre côté du mur.",
 "budget":"28,1 / 28 (+0 %)"},
{"id":"ASS064-moins-5","zone":"ASS064","pole":"-","palier":5,"nom":"Loi de la chèvre chargée","cout":2,"cible":0,
 "effet":"Loi de la chèvre chargée : riposte 8 ; 6 dégâts à tous les ennemis ; le héros gagne 6 de garde. Prix : le héros perd 4 PV.",
 "ops":[["riposte",8],["deg","tous",6],["garde","heros",6],["prixPV",4]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Riposte","Dégâts","Garde","Prix"],
 "ambiance":"Les anciens chargèrent la fièvre sur la chèvre par une formule, et la formule sur une tablette, qu'on scella.",
 "budget":"30,0 / 32,0 (-6%) — recalculé par le critique"},
{"id":"ASS064-moins-6","zone":"ASS064","pole":"-","palier":6,"nom":"L'Autre Versant","cout":1,"cible":1,
 "effet":"Riposte 6 ; si la cible charge ou piétine, elle subit 16 dégâts.",
 "ops":[["riposte",6],["si","pietine",[["deg","cible",16]]]],
 "tags":["Assemblée","Pierre","Pôle −","Riposte","Condition","Dégâts"],
 "ambiance":"La chèvre blanche redescendit par l'autre versant, suivie des bergers d'en face, qui toussaient.",
 "budget":"20,0 / 22,5 (-11%) — recalculé par le critique"},
{"id":"ASS064-moins7","zone":"ASS064","pole":"-","palier":7,"nom":"La Montagne aux chèvres","cout":2,"cible":0,
 "effet":"Les chèvres redescendent toutes. Riposte 12 ; tous les ennemis deviennent vulnérables 3 ; 6 dégâts à tous. Pose Racine. Si Givre est posée (consommée) : riposte 8, 8 dégâts à tous. Prix : le héros perd 6 PV.",
 "ops":[["riposte",12],["vulnerable","tous",3],["deg","tous",6],["pose","Racine"],["reveil","Givre",true,[["riposte",8],["deg","tous",8]]],["prixPV",6]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Dégâts","Marque","Riposte","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"Chaque village chassa sa chèvre vers le col ; toutes s'y croisèrent, et choisirent chacune une autre vallée.",
 "budget":"51 sans combo ; réveil +33,6 (66 %)"},
{"id":"ASS064-plus-1","zone":"ASS064","pole":"+","palier":1,"nom":"La Racine cuite","cout":1,"cible":0,
 "effet":"Le héros se soigne de 8 ; récupérez la dernière carte de la défausse. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","heros",8],["recup"],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Soin","Récupération","Prix"],
 "ambiance":"La racine cuisait toute une nuit dans la marmite de Ninsun-ama ; l'odeur seule faisait fuir les mouches.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS064-plus-2","zone":"ASS064","pole":"+","palier":2,"nom":"L'Amulette d'argile","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts. Puis le héros se soigne de 5 et gagne 4 de garde.",
 "ops":[["si","vol",[["deg","cible",8]]],["soin","heros",5],["garde","heros",4]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Garde","Soin","Condition"],
 "ambiance":"Sur l'amulette, l'asû gravait un démon ailé grimaçant, pour que le démon se croie déjà dans la maison.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ASS064-plus-3","zone":"ASS064","pole":"+","palier":3,"nom":"Loi du torrent","cout":1,"cible":0,
 "effet":"Loi du torrent : le héros se soigne de 10 ; récupérez la dernière carte de la défausse ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","heros",10],["recup"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Soin","Pioche","Récupération","Prix"],
 "ambiance":"On lavait les malades dans le torrent glacé, à l'aube ; ceux qui criaient guérissaient plus vite, disait l'asû.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ASS064-plus-4","zone":"ASS064","pole":"+","palier":4,"nom":"Les Bottes de racines","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 14 dégâts. Puis le héros se soigne de 18 et gagne 6 de garde ; récupérez une carte. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","vol",[["deg","cible",14]]],["soin","heros",18],["garde","heros",6],["recup"],["ennemiSoin",2]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Garde","Soin","Récupération","Condition","Prix"],
 "ambiance":"Les bottes de racines pendaient aux linteaux ; les marchands d'en face les payaient le prix demandé.",
 "budget":"29,4 / 28 (+5 %)"},
{"id":"ASS064-plus-5","zone":"ASS064","pole":"+","palier":5,"nom":"Loi de l'officine","cout":2,"cible":1,
 "effet":"Loi de l'officine : si la cible vole par-dessus, 12 dégâts. Puis le héros se soigne de 16 ; récupérez une carte ; piochez 1.",
 "ops":[["si","vol",[["deg","cible",12]]],["soin","heros",16],["recup"],["pioche",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Soin","Pioche","Récupération","Condition"],
 "ambiance":"Le conseil vota l'officine sans débat, l'année où le fils d'un ancien prit la fièvre.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS064-plus-6","zone":"ASS064","pole":"+","palier":6,"nom":"La Main de Ninsun-ama","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts. Puis le héros se soigne de 12 ; récupérez une carte ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",10]]],["soin","heros",12],["recup"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Soin","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Ninsun-ama posait la main sur le front du malade et comptait à voix basse ; personne ne sut jamais jusqu'où.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ASS064-plus7","zone":"ASS064","pole":"+","palier":7,"nom":"L'Officine du conseil","cout":2,"cible":0,
 "effet":"Le conseil siège chez l'asû. Le héros se soigne de 24 et gagne 16 de garde ; récupérez une carte ; piochez 2. Pose Sceau. Si Racine est posée (consommée) : soin 16, récupérez une carte, piochez 2. Prix : chaque ennemi se soigne de 3.",
 "ops":[["soin","heros",24],["garde","heros",16],["recup"],["pioche",2],["pose","Sceau"],["reveil","Racine",true,[["soin","heros",16],["recup"],["pioche",2]]],["ennemiSoin",3]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Garde","Soin","Pioche","Récupération","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Les anciens siègent désormais entre les jarres étiquetées ; ils votent à voix basse, pour ne pas réveiller les malades.",
 "budget":"42,2 sans combo ; réveil +28 (66 %)"}
]
```

---

## 8. Xiuhtecalco, la Ville aux Pots brisés (DON105) — Donjon · Cité en ruines · Pierre · Aztèque

Recette du récit : la liste de tribut. Recette du −7 : l'obscurité (la nuit sans feu) ; du +7 : la lumière (un feu neuf sur chaque marche).

**Ruine (−)** : le balai de jonc → le foyer éteint → les pots fracassés → les statues de la maison → la nuit des percepteurs → les pots enterrés → la Nuit sans feu. Fil mécanique : gros coups sur une seule cible, payés en cartes défaussées (on brise ce qu'on possède), et plus forts si la cible est déjà fêlée (Vulnérable) ; à la forme −7, la défausse paie le coup d'avance. Pas de dégâts à tous : ils étaient la Ruine d'ANT086, d'ANT165 et de DON017.
**Abondance (+)** : le feu neuf → les ballots de coton → les chaussées des porteurs → le grenier qui cède → les piles du marché → les échafaudages → la Ville-Brasier. Fil mécanique : dégâts à tous (les greniers trop pleins s'écroulent sur qui passe dessous), garde et mana de Pierre ; plus fort si la cible a de la garde ; le prix : l'ennemi s'engraisse aussi et se couvre, ce qui nourrit le crochet suivant.

```json
{"fiche":"DON105","nom":"Xiuhtecalco, la Ville aux Pots brisés",
 "recit":"Liste du tribut dû au seigneur de la vallée pour la Ligature des Années. Manteaux de coton : un ballot par maison. Miel : une jarre par terrasse. Pots de cuisine : autant qu'on en a brisé au dernier soir du cycle, à racheter aux potiers du seigneur. Note du percepteur : la potière Citlali n'a rien brisé ; elle a enterré ses pots sous le foyer éteint, et prétend qu'ils dorment. Amende : le double, payable en pots neufs. Citlali a payé avec les siens, déterrés et lavés.",
 "pal":["Nuit sans feu sur les terrasses, tessons jusqu'aux chevilles, statues de maison brisées en tas ; personne n'ose rallumer, personne ne dort.","Foyers éteints, balais de jonc devant chaque porte, pots fracassés au pied des murs ; les percepteurs passent avec des torches qu'ils ne prêtent pas.","Ville de terrasses en ruines au flanc d'une colline, pyramide écroulée au centre, marchés envahis d'herbe ; des potiers travaillent dans les décombres.","Feux neufs dans chaque maison, porteurs chargés de ballots sur les chaussées, pots neufs empilés au marché ; la pyramide se couvre d'échafaudages.","Un feu neuf sur chaque marche de la pyramide et sur chaque toit ; la ville brille toute la nuit comme un brasier rangé, et nul n'y dort."],
 "pm":"Ruine","pp":"Abondance"}
```

```json
[
{"id":"DON105-moins-1","zone":"DON105","pole":"-","palier":1,"nom":"Le Balai de jonc","cout":1,"cible":1,
 "effet":"12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Prix"],
 "ambiance":"Au dernier soir du cycle, on balaie la maison jusqu'au seuil, puis on jette le balai.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON105-moins-2","zone":"DON105","pole":"-","palier":2,"nom":"Le Foyer éteint","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 10 dégâts. Puis 8 dégâts à la cible.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["deg","cible",8]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Condition"],
 "ambiance":"Citlali versa de l'eau sur les braises ; la vapeur monta, et la nuit tomba dans la maison.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON105-moins-3","zone":"DON105","pole":"-","palier":3,"nom":"Les Pots fracassés","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 6 dégâts. Puis elle devient vulnérable 2 et subit 10 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",6]]],["vulnerable","cible",2],["deg","cible",10],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Les pots de cuisine volaient contre les murs, un par un ; les voisins comptaient les éclats par-dessus la haie.",
 "budget":"16 / 15 (+7 %)"},
{"id":"DON105-moins-4","zone":"DON105","pole":"-","palier":4,"nom":"Les Statues de la maison","cout":2,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 14 dégâts. Puis 22 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",14]]],["deg","cible",22],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Les petites statues du foyer furent brisées à la tête d'abord, pour qu'elles ne voient pas la suite.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON105-moins-5","zone":"DON105","pole":"-","palier":5,"nom":"La Nuit des percepteurs","cout":2,"cible":1,
 "effet":"La garde de la cible tombe ; si elle est déjà vulnérable, 12 dégâts. Puis 26 dégâts à la cible. Prix : défaussez 2 cartes au hasard.",
 "ops":[["briseGarde","cible"],["si","vulnerable",[["deg","cible",12]]],["deg","cible",26],["prixDefausse",2]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Condition","Prix"],
 "ambiance":"Les percepteurs du seigneur passaient dans la nuit sans feu avec leurs torches, et notaient chaque maison.",
 "budget":"29 / 32 (−9 %)"},
{"id":"DON105-moins-6","zone":"DON105","pole":"-","palier":6,"nom":"Les Pots enterrés","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 12 dégâts. Puis 12 dégâts à la cible ; elle devient vulnérable 1.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["deg","cible",12],["vulnerable","cible",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Marque","Condition"],
 "ambiance":"Sous le foyer éteint, Citlali enterra ses pots dans la paille, l'embouchure tournée vers le bas.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"DON105-moins7","zone":"DON105","pole":"-","palier":7,"nom":"La Nuit sans feu","cout":2,"cible":1,
 "effet":"Toute la ville s'éteint. Défaussez 2 cartes au hasard : 44 dégâts à la cible, qui ignorent la garde ; elle devient vulnérable 2. Pose Abîme. Si Braise est posée (consommée) : 30 dégâts à la cible.",
 "ops":[["prixDefausse",2],["deg","cible",44],["ignoreGarde"],["vulnerable","cible",2],["pose","Abîme"],["reveil","Braise",true,[["deg","cible",30]]]],
 "tags":["Donjon","Pierre","Forme ultime −7","Dégâts","Marque","Perce-garde","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Pendant la nuit sans feu, nul ne parle ; on guette des toits la flamme neuve, ou rien.",
 "budget":"47 sans combo ; réveil +30 (64 %)"},
{"id":"DON105-plus-1","zone":"DON105","pole":"+","palier":1,"nom":"Le Feu neuf","cout":1,"cible":0,
 "effet":"4 dégâts à tous les ennemis ; +1 mana de Pierre. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","tous",4],["mana","Pierre",1],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Mana","Prix"],
 "ambiance":"Les coureurs portaient le feu neuf de terrasse en terrasse ; chaque maison payait sa braise d'un manteau.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"DON105-plus-2","zone":"DON105","pole":"+","palier":2,"nom":"Les Ballots de coton","cout":1,"cible":0,
 "effet":"Si la cible a de la garde, 4 dégâts à tous les ennemis. Puis le héros gagne 10 de garde.",
 "ops":[["si","cibleGarde",[["deg","tous",4]]],["garde","heros",10]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Garde","Condition"],
 "ambiance":"Les ballots de coton s'empilaient dans la cour du seigneur ; les gardes dormaient dessus, et y trouvaient chaud.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"DON105-plus-3","zone":"DON105","pole":"+","palier":3,"nom":"Les Chaussées des porteurs","cout":1,"cible":0,
 "effet":"5 dégâts à tous les ennemis ; +1 mana de Pierre ; le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","tous",5],["mana","Pierre",1],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Garde","Mana","Prix"],
 "ambiance":"Les porteurs montaient les chaussées le front tendu sous la sangle ; on ne leur demandait pas ce qu'ils portaient.",
 "budget":"15,2 / 15 (+1 %)"},
{"id":"DON105-plus-4","zone":"DON105","pole":"+","palier":4,"nom":"Le Grenier qui cède","cout":2,"cible":0,
 "effet":"Si la cible a de la garde, 10 dégâts à tous les ennemis. Puis 7 dégâts à tous ; +1 mana de Pierre. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","cibleGarde",[["deg","tous",10]]],["deg","tous",7],["mana","Pierre",1],["ennemiSoin",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Le grenier du seigneur céda sous le maïs du tribut ; il ensevelit les percepteurs qui venaient le compter.",
 "budget":"25 / 28 (−11 %)"},
{"id":"DON105-plus-5","zone":"DON105","pole":"+","palier":5,"nom":"Les Piles du marché","cout":2,"cible":0,
 "effet":"8 dégâts à tous les ennemis ; le héros gagne 12 de garde ; +2 mana de Pierre.",
 "ops":[["deg","tous",8],["garde","heros",12],["mana","Pierre",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Garde","Mana"],
 "ambiance":"Au marché, les pots neufs montaient en colonnes branlantes ; Citlali vendait les siens au pied, sans crier.",
 "budget":"33,2 / 32 (+4 %)"},
{"id":"DON105-plus-6","zone":"DON105","pole":"+","palier":6,"nom":"Les Échafaudages","cout":1,"cible":0,
 "effet":"Si la cible a de la garde, 8 dégâts à tous les ennemis. Puis 5 dégâts à tous ; le héros gagne 6 de garde. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","cibleGarde",[["deg","tous",8]]],["deg","tous",5],["garde","heros",6],["ennemiGarde",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"On rehaussait la pyramide à chaque cycle, par-dessus l'ancienne ; les échafaudages tombaient parfois avec les maçons.",
 "budget":"20,6 / 22,5 (−8 %)"},
{"id":"DON105-plus7","zone":"DON105","pole":"+","palier":7,"nom":"La Ville-Brasier","cout":2,"cible":0,
 "effet":"Un feu neuf sur chaque marche. 14 dégâts à tous les ennemis ; le héros gagne 16 de garde ; +2 mana de Pierre. Pose Braise. Si Sceau est posée (consommée) : 12 dégâts à tous, +2 mana de Pierre. Prix : chaque ennemi gagne 3 de garde.",
 "ops":[["deg","tous",14],["garde","heros",16],["mana","Pierre",2],["pose","Braise"],["reveil","Sceau",true,[["deg","tous",12],["mana","Pierre",2]]],["ennemiGarde",3]],
 "tags":["Donjon","Pierre","Forme ultime +7","Dégâts","Garde","Mana","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Chaque marche de la pyramide reçut sa flamme ; le seigneur les fit compter, et réclama une jarre par flamme.",
 "budget":"43,6 sans combo ; réveil +32,4 (74 %)"}
]
```

---

## 9. Iou-Nefer, les Îles aux Chadoufs (DON002) — Donjon · Iles flottantes · Vent · Égyptienne

Recette du récit : la requête. Recette du −7 : la poussière (les îles fendues se vident en pluie sèche) ; du +7 : le monde retourné (le fleuve monté jusqu'aux îles).

**Sécheresse (−)** : la corde raccourcie → les figuiers secs → la jarre à moitié pleine → l'île du surveillant → le vent qui boit → la requête d'Ipy → l'Île qui se boit. Fil mécanique : gros coups sur une seule cible et vol de vie (on boit ce qu'on frappe), plus forts quand le héros est sous la moitié de ses PV ; le prix est en PV, la soif d'abord. Rien de l'affaiblissement ni des marques du Jaugeur de Ta-Senut (ASS040).
**Déluge (+)** : la corde rallongée → la jarre qui déborde → les cascades des terrasses → la crue de la nuit → les îles basses → les roseaux sur les terrasses → le Fleuve au ciel. Fil mécanique : l'eau emporte les gardes (toutes les gardes ennemies tombent) et frappe tout le monde, plus fort sur l'ennemi qui charge ou piétine (il glisse) ; le prix : la crue emporte aussi vos cartes. Ni pioche, ni récupération, ni écho : c'était le Déluge de Ta-Senut.

```json
{"fiche":"DON002","nom":"Iou-Nefer, les Îles aux Chadoufs",
 "recit":"Requête du jardinier Ipy au surveillant des îles. Mon chadouf descend sa jarre jusqu'au fleuve, tout en bas, depuis l'enfance de mon père. Le surveillant a fait raccourcir d'une coudée les cordes de toutes les îles, pour que l'eau monte d'abord à la sienne. Mes figuiers sèchent. Je demande que ma corde me soit rendue. Réponse du surveillant : accordé, à condition que l'île descende d'autant. L'île d'Ipy descendit. Elle touche maintenant le fleuve, et chaque crue en emporte un morceau de plus.",
 "pal":["Îles fendues comme des briques mal cuites, cordes de chadouf pendant dans le vide ; la poussière tombe des îles en pluie sèche sur le fleuve.","Figuiers morts sur les terrasses suspendues, cordes raccourcies, jarres remontées à moitié pleines ; seule l'île du surveillant reste verte.","Îles de terre noire flottant au-dessus du fleuve, chadoufs aux longues cordes plongeant jusqu'à l'eau ; figuiers et vignes sur les terrasses.","Cordes rallongées, jarres qui débordent en remontant, cascades tombant des terrasses dans le vide ; les îles basses frôlent les roseaux.","Le fleuve est monté jusqu'aux îles : elles flottent sur l'eau comme des radeaux, chadoufs inutiles dressés vers le ciel ; des barques accostent aux terrasses."],
 "pm":"Sécheresse","pp":"Déluge"}
```

```json
[
{"id":"DON002-moins-1","zone":"DON002","pole":"-","palier":1,"nom":"La Corde raccourcie","cout":1,"cible":1,
 "effet":"8 dégâts à la cible ; le héros se soigne de la moitié des dégâts. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",8],["volVie"],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Prix"],
 "ambiance":"Le surveillant fit couper une coudée à chaque corde, et garda les bouts pour attacher ses ânes.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON002-moins-2","zone":"DON002","pole":"-","palier":2,"nom":"Les Figuiers secs","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, 8 dégâts. Puis 8 dégâts à la cible.",
 "ops":[["si","blesse",[["deg","cible",8]]],["deg","cible",8]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Condition"],
 "ambiance":"Les figues séchaient sur la branche avant d'être mûres ; Ipy les mangeait quand même, pour la soif.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON002-moins-3","zone":"DON002","pole":"-","palier":3,"nom":"La Jarre à moitié pleine","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, 6 dégâts. Puis 10 dégâts à la cible ; le héros se soigne de la moitié des dégâts. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",6]]],["deg","cible",10],["volVie"],["prixPV",3]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"La jarre remontait du fleuve à moitié pleine ; le vent buvait l'autre moitié pendant la montée.",
 "budget":"15 / 15 (+0 %)"},
{"id":"DON002-moins-4","zone":"DON002","pole":"-","palier":4,"nom":"L'Île du surveillant","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; si le héros est sous la moitié de ses PV, 10 de plus ; il se soigne de la moitié des dégâts. Prix : le héros perd 4 PV.",
 "ops":[["deg","cible",18],["si","blesse",[["deg","cible",10]]],["volVie"],["prixPV",4]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"L'île du surveillant restait verte au milieu des îles grises ; ses canards nageaient dans un bassin.",
 "budget":"28 / 28 (+0 %)"},
{"id":"DON002-moins-5","zone":"DON002","pole":"-","palier":5,"nom":"Le Vent qui boit","cout":2,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, 12 dégâts. Puis 20 dégâts à la cible, qui ignorent la garde ; le héros se soigne de la moitié. Prix : le héros perd 5 PV.",
 "ops":[["si","blesse",[["deg","cible",12]]],["deg","cible",20],["ignoreGarde"],["volVie"],["prixPV",5]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Perce-garde","Vol de vie","Condition","Prix"],
 "ambiance":"Le vent d'été passait sur les îles sans s'arrêter, et repartait plus lourd qu'il n'était venu.",
 "budget":"34 / 32 (+6 %)"},
{"id":"DON002-moins-6","zone":"DON002","pole":"-","palier":6,"nom":"La Requête d'Ipy","cout":1,"cible":1,
 "effet":"12 dégâts à la cible ; le héros se soigne de la moitié des dégâts ; s'il est sous la moitié de ses PV, 8 de plus.",
 "ops":[["deg","cible",12],["volVie"],["si","blesse",[["deg","cible",8]]]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Condition"],
 "ambiance":"Ipy dicta sa requête au scribe du marché et paya en figues ; on ne lui rendit pas les figues.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"DON002-moins7","zone":"DON002","pole":"-","palier":7,"nom":"L'Île qui se boit","cout":2,"cible":1,
 "effet":"L'île boit sa propre terre. 34 dégâts à la cible, qui ignorent la garde ; le héros se soigne de la moitié. Pose Sang. Si Braise est posée (consommée) : 28 dégâts à la cible. Prix : le héros perd 8 PV.",
 "ops":[["deg","cible",34],["ignoreGarde"],["volVie"],["pose","Sang"],["reveil","Braise",true,[["deg","cible",28]]],["prixPV",8]],
 "tags":["Donjon","Vent","Forme ultime −7","Dégâts","Perce-garde","Vol de vie","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Les îles sèches se fendirent ; il tomba sur le fleuve une pluie de terre, et pas une goutte.",
 "budget":"46 sans combo ; réveil +28 (61 %)"},
{"id":"DON002-plus-1","zone":"DON002","pole":"+","palier":1,"nom":"La Corde rallongée","cout":1,"cible":0,
 "effet":"Toutes les gardes ennemies tombent ; 3 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",3],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Perce-garde","Prix"],
 "ambiance":"On noua les bouts coupés aux cordes raccourcies ; les nœuds tinrent jusqu'à la première vraie crue.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"DON002-plus-2","zone":"DON002","pole":"+","palier":2,"nom":"La Jarre qui déborde","cout":1,"cible":1,
 "effet":"4 dégâts à tous les ennemis ; si la cible charge ou piétine, elle subit 10 dégâts.",
 "ops":[["deg","tous",4],["si","pietine",[["deg","cible",10]]]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Condition"],
 "ambiance":"La jarre remontait pleine, puis débordait, puis remontait encore pleine ; Ipy ne savait plus où la vider.",
 "budget":"13,8 / 12,5 (+10%) — recalculé par le critique"},
{"id":"DON002-plus-3","zone":"DON002","pole":"+","palier":3,"nom":"Les Cascades des terrasses","cout":1,"cible":0,
 "effet":"5 dégâts à tous les ennemis ; le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","tous",5],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Prix"],
 "ambiance":"L'eau tombait des terrasses dans le vide, et le vent la rendait en bruine aux îles d'en dessous.",
 "budget":"13,8 / 15,0 (-8%) — recalculé par le critique"},
{"id":"DON002-plus-4","zone":"DON002","pole":"+","palier":4,"nom":"La Crue de la nuit","cout":2,"cible":0,
 "effet":"Si l'ennemi en tête charge ou piétine, 10 dégâts à tous. Puis 7 dégâts à tous ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["deg","tous",10]]],["deg","tous",7],["soin","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Condition","Dégâts","Soin","Prix"],
 "ambiance":"La crue monta dans la nuit ; au matin, les cordes des chadoufs flottaient à plat sur l'eau.",
 "budget":"29,4 / 28,0 (+5%) — recalculé par le critique"},
{"id":"DON002-plus-5","zone":"DON002","pole":"+","palier":5,"nom":"Les Îles basses","cout":2,"cible":0,
 "effet":"Toutes les gardes ennemies tombent ; 10 dégâts à tous les ennemis ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",10],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"L'île d'Ipy fut la première à toucher l'eau ; ses figuiers burent jusqu'à en mourir.",
 "budget":"29,6 / 32 (−7 %)"},
{"id":"DON002-plus-6","zone":"DON002","pole":"+","palier":6,"nom":"Les Roseaux sur les terrasses","cout":1,"cible":0,
 "effet":"Si l'ennemi en tête charge ou piétine, 8 dégâts à tous. Puis 6 dégâts à tous les ennemis.",
 "ops":[["si","pietine",[["deg","tous",8]]],["deg","tous",6]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Condition"],
 "ambiance":"Les roseaux du fleuve poussaient maintenant sur les terrasses ; les hérons y venaient pêcher en hauteur.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"DON002-plus7","zone":"DON002","pole":"+","palier":7,"nom":"Le Fleuve au ciel","cout":2,"cible":0,
 "effet":"Le fleuve monte aux îles. Toutes les gardes ennemies tombent ; 18 dégâts à tous les ennemis. Pose Abîme. Si Racine est posée (consommée) : 12 dégâts à tous. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",18],["pose","Abîme"],["reveil","Racine",true,[["deg","tous",12]]],["prixDefausse",1]],
 "tags":["Donjon","Vent","Forme ultime +7","Dégâts","Perce-garde","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Les barques accostent maintenant aux terrasses ; le surveillant reçoit les requêtes sur un radeau, et n'en lit aucune.",
 "budget":"43,2 sans combo ; réveil +26,4 (61 %)"}
]
```

---

## 10. Les Citernes de Mélikrata (DON010) — Donjon · Oasis · Sève · Grecque

Recette du récit : la description du voyageur. Recette du −7 : l'immobilité (l'assemblée des condamnés assis au bord de l'eau) ; du +7 : l'engourdissement heureux (la palmeraie où personne ne repart).

**Poison (−)** : la source amère → les pieds froids → la coupe du condamné → la dalle de ciguë → les amis qui parlent → la ciguë des rives → la Sentence à la source. Fil mécanique : la ciguë monte lentement (brûlures longues sur une cible), affaiblit, puis frappe plus fort ce qui brûle déjà ; le prix est en PV. Pas de garde ni de riposte : c'est le poison d'Ixkabal (CIT013), pas celui-ci.
**Nectar (+)** : la source douce → le miel des palmiers → l'hydromel du voyageur → les ruches de la palmeraie → la récolte du miel → un mois de plus → la Tombe près de la source douce. Fil mécanique : l'ivresse du miel : de gros coups sur une cible et un soin du héros à chaque carte, plus forts quand il ne reste qu'un ennemi ; le prix : les ennemis boivent aussi, ou une carte défaussée. Ni essaims ni garde de camp, à l'inverse d'Ixkabal.

```json
{"fiche":"DON010","nom":"Les Citernes de Mélikrata",
 "recit":"Le voyageur Hégésandros décrit Mélikrata ainsi : des citernes jumelles dans la même palmeraie, l'une douce comme le miel, l'autre amère, où pousse la ciguë. Les colons boivent à la première et jugent à l'autre. Le condamné boit la ciguë au bord de l'eau, assis, et ses amis lui parlent jusqu'à ce que ses pieds refroidissent ; on dit que c'est plus humain. Hégésandros comptait repartir après la récolte du miel. Il est enterré près de la citerne douce, avec une jarre pleine.",
 "pal":["Au bord de la citerne amère, des condamnés assis en rangs, la coupe aux pieds, et leurs amis qui leur parlent ; la palmeraie ne bouge plus.","Ciguë haute le long des rigoles, palmes jaunies, puits murés de pierres sèches ; une coupe de terre posée sur chaque margelle.","Palmeraie autour de citernes jumelles en pierre, ruches de terre dans les troncs, colonnes grecques à demi enterrées ; des colons puisent à l'ombre.","Ruches débordantes, rayons suspendus aux palmes, jarres de miel au frais dans les citernes ; des voyageurs dorment sous les arbres, repus.","Toute la palmeraie dort, ivre, entre les jarres ouvertes ; les caravanes arrivent et ne repartent pas, les chameaux broutent les tombes fleuries."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"DON010-moins-1","zone":"DON010","pole":"-","palier":1,"nom":"La Source amère","cout":1,"cible":1,
 "effet":"La cible brûle de 3 pendant 3 tours et perd 1 d'attaque. Prix : le héros perd 1 PV.",
 "ops":[["brulure","cible",3,3],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Donjon","Sève","Pôle −","Brûlure","Affaiblissement","Prix"],
 "ambiance":"L'eau de la citerne amère est claire comme l'autre ; seule la ciguë des bords la trahit.",
 "budget":"11 / 10 (+10 %)"},
{"id":"DON010-moins-2","zone":"DON010","pole":"-","palier":2,"nom":"Les Pieds froids","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, elle perd 2 d'attaque et subit 6 dégâts. Puis elle brûle de 2 pendant 3 tours.",
 "ops":[["si","brule",[["affaiblit","cible",2],["deg","cible",6]]],["brulure","cible",2,3]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Affaiblissement","Condition"],
 "ambiance":"Le froid monte des pieds aux genoux ; les amis du condamné lui tâtent les jambes pour suivre.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON010-moins-3","zone":"DON010","pole":"-","palier":3,"nom":"La Coupe du condamné","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 8 dégâts. Puis elle brûle de 3 pendant 3 tours et perd 1 d'attaque. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",8]]],["brulure","cible",3,3],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"La coupe de terre ne sert qu'une fois ; on la brise ensuite sur la margelle, où restent les tessons.",
 "budget":"14 / 15 (−7 %)"},
{"id":"DON010-moins-4","zone":"DON010","pole":"-","palier":4,"nom":"La Dalle de ciguë","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 14 dégâts. Puis elle brûle de 5 pendant 3 tours et perd 2 d'attaque. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",14]]],["brulure","cible",5,3],["affaiblit","cible",2],["prixPV",3]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"Sous la dalle du passage, la ciguë pousse dans l'ombre humide ; qui marche dessus la respire jusqu'au soir.",
 "budget":"25 / 28 (−11 %)"},
{"id":"DON010-moins-5","zone":"DON010","pole":"-","palier":5,"nom":"Les Amis qui parlent","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, elle perd 3 d'attaque. Puis tous les ennemis brûlent de 3 pendant 3 tours ; 8 dégâts à la cible. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["affaiblit","cible",3]]],["brulure","tous",3,3],["deg","cible",8],["prixPV",3]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"Les amis parlent au condamné de tout, sauf de la ciguë ; c'est plus humain, et plus long.",
 "budget":"29,3 / 32 (−8 %)"},
{"id":"DON010-moins-6","zone":"DON010","pole":"-","palier":6,"nom":"La Ciguë des rives","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 12 dégâts. Puis elle brûle de 4 pendant 3 tours et perd 1 d'attaque.",
 "ops":[["si","brule",[["deg","cible",12]]],["brulure","cible",4,3],["affaiblit","cible",1]],
 "tags":["Donjon","Sève","Pôle −","Dégâts","Brûlure","Affaiblissement","Condition"],
 "ambiance":"La ciguë des rives fleurit en ombelles blanches ; les enfants des colons apprennent tôt à ne pas les cueillir.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"DON010-moins7","zone":"DON010","pole":"-","palier":7,"nom":"La Sentence à la source","cout":2,"cible":1,
 "effet":"La source amère rend la sentence. Si la cible brûle déjà, 16 dégâts. Puis elle brûle de 8 pendant 4 tours et perd 3 d'attaque. Pose Braise. Si Abîme est posée (consommée) : tous les ennemis brûlent de 5 pendant 3 tours. Prix : −5 PV.",
 "ops":[["si","brule",[["deg","cible",16]]],["brulure","cible",8,4],["affaiblit","cible",3],["pose","Braise"],["reveil","Abîme",true,[["brulure","tous",5,3]]],["prixPV",5]],
 "tags":["Donjon","Sève","Forme ultime −7","Dégâts","Brûlure","Affaiblissement","Condition","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"Les condamnés de l'année attendent en rang au bord de l'eau amère ; aucun ne regarde l'autre.",
 "budget":"44 sans combo ; réveil +33 (75 %)"},
{"id":"DON010-plus-1","zone":"DON010","pole":"+","palier":1,"nom":"La Source douce","cout":1,"cible":1,
 "effet":"7 dégâts à la cible ; le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",7],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Prix"],
 "ambiance":"L'eau de la citerne douce a goût de miel coupé ; les ânes des caravanes refusent ensuite de boire ailleurs.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"DON010-plus-2","zone":"DON010","pole":"+","palier":2,"nom":"Le Miel des palmiers","cout":1,"cible":1,
 "effet":"Le héros se soigne de 5 ; 2 dégâts à la cible ; s'il ne reste qu'elle, 12 dégâts de plus.",
 "ops":[["soin","heros",5],["deg","cible",2],["si","seul",[["deg","cible",12]]]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Condition"],
 "ambiance":"Les abeilles de Mélikrata butinent les fleurs de palmier ; leur miel est si épais qu'on le coupe au couteau.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON010-plus-3","zone":"DON010","pole":"+","palier":3,"nom":"L'Hydromel du voyageur","cout":1,"cible":1,
 "effet":"11 dégâts à la cible ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",11],["soin","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Prix"],
 "ambiance":"Hégésandros goûta l'hydromel le premier soir, puis nota dans son carnet : « repartir après la récolte ».",
 "budget":"14 / 15 (−7 %)"},
{"id":"DON010-plus-4","zone":"DON010","pole":"+","palier":4,"nom":"Les Ruches de la palmeraie","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 14 dégâts. Puis 16 dégâts à la cible ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","seul",[["deg","cible",14]]],["deg","cible",16],["soin","heros",8],["ennemiSoin",2]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Les ruches de terre sont maçonnées dans les troncs des palmiers ; on les ouvre au crépuscule, enfumées de palmes.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"DON010-plus-5","zone":"DON010","pole":"+","palier":5,"nom":"La Récolte du miel","cout":2,"cible":1,
 "effet":"20 dégâts à la cible ; le héros se soigne de 10 ; s'il ne reste qu'un ennemi, il se soigne de 8 de plus.",
 "ops":[["deg","cible",20],["soin","heros",10],["si","seul",[["soin","heros",8]]]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Condition"],
 "ambiance":"À la récolte, la colonie a les doigts collés ; on reporte les procès, faute de pouvoir tenir la coupe.",
 "budget":"34 / 32 (+6 %)"},
{"id":"DON010-plus-6","zone":"DON010","pole":"+","palier":6,"nom":"Un mois de plus","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 12 dégâts. Puis 12 dégâts à la cible ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","seul",[["deg","cible",12]]],["deg","cible",12],["soin","heros",8],["ennemiSoin",2]],
 "tags":["Donjon","Sève","Pôle +","Dégâts","Soin","Condition","Prix"],
 "ambiance":"Le carnet d'Hégésandros dit « un mois de plus » à chaque page, d'une écriture de plus en plus ronde.",
 "budget":"21,6 / 22,5 (−4 %)"},
{"id":"DON010-plus7","zone":"DON010","pole":"+","palier":7,"nom":"La Tombe près de la source douce","cout":2,"cible":1,
 "effet":"Nul ne repart de Mélikrata. 30 dégâts à la cible ; le héros se soigne de 16 ; piochez 1. Pose Racine. Si Braise est posée (consommée) : 26 dégâts à la cible, le héros se soigne de 10. Prix : chaque ennemi se soigne de 3.",
 "ops":[["deg","cible",30],["soin","heros",16],["pioche",1],["pose","Racine"],["reveil","Braise",true,[["deg","cible",26],["soin","heros",10]]],["ennemiSoin",3]],
 "tags":["Donjon","Sève","Forme ultime +7","Dégâts","Soin","Pioche","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"On enterra Hégésandros près de la citerne douce, avec une jarre pleine ; les abeilles vinrent la vider.",
 "budget":"43,4 sans combo ; réveil +36 (83 %)"}
]
```

---

## 11. Nushdaru, la Citadelle du Contrepoison (CIT005) — Citadelle · Désert de sel · Pierre · Perse

Recette du récit : le rapport de l'espion. Recette du −7 : la vigilance morte (une garnison qui ne mange plus que la poudre) ; du +7 : le jardin clos (la relève se fait en musique, une coupe à la main).

**Poison (−)** : la pincée du matin → les jarres de cire noire → le goûteur → le puits empoisonné → les lèvres bleues → les corbeaux du chemin de ronde → la Garnison immunisée. Fil mécanique : le contrepoison pris chaque jour : on paie des PV pour une garde énorme, et le héros sous la moitié de ses PV devient plus dur (affaiblissement des ennemis, coups) ; le prix est toujours en PV. Ni riposte ni brûlure : ce sont le Poison d'Ixkabal (CIT013) et celui de Mélikrata (DON010).
**Nectar (+)** : le sorbet des sentinelles → la glacière en dôme → les grenadiers de la cour → le coing des remparts → la relève en musique → le bassin couvert → le Jardin clos. Fil mécanique : le commandement par la table : soldats invoqués (archers, lanciers, cavaliers), garde et soin de tous vos alliés, plus forts si un allié invoqué est déjà en jeu ; le prix : l'ennemi se rafraîchit aussi, ou une carte défaussée.

```json
{"fiche":"CIT005","nom":"Nushdaru, la Citadelle du Contrepoison",
 "recit":"Rapport au khan sur la citadelle de Nushdaru. Le puits est empoisonné depuis la dernière lune, comme ordonné. La garnison boit quand même. Le gouverneur Farrokh prend chaque matin une pincée de la même poudre dans son sorbet, depuis l'enfance ; ses soldats l'imitent, par flatterie d'abord, puis par habitude. Les corbeaux qui boivent au puits meurent ; les sentinelles, non. Je demande d'autres ordres. Je bois avec eux depuis un mois, et je ne me suis jamais aussi bien porté.",
 "pal":["Remparts frottés de poudre blanche, puits couverts de corbeaux morts, garnison aux lèvres bleuies qui veille sans ciller ; rien ne pousse à des lieues.","Puits gardés, jarres scellées de cire noire, soldats qui goûtent chaque plat avant le gouverneur ; des oiseaux morts sur le chemin de ronde.","Citadelle de briques crues sur un désert de sel, tours rondes, bassin couvert au centre de la cour ; des caravanes de sel au pied des murs.","Jardins en terrasses arrosés goutte à goutte, glacière en dôme, sorbets au coing servis aux sentinelles ; des grenadiers dans la cour.","La citadelle est un jardin clos : bassins, glacières, treilles sur le chemin de ronde ; la garnison se relève en musique, une coupe à la main."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"CIT005-moins-1","zone":"CIT005","pole":"-","palier":1,"nom":"La Pincée du matin","cout":1,"cible":0,
 "effet":"Si le héros est sous la moitié de ses PV, il gagne 6 de garde. Puis il gagne 12 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["garde","heros",6]]],["garde","heros",12],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Condition","Prix"],
 "ambiance":"Farrokh prend sa pincée de poudre chaque matin dans le sorbet ; il la goûte, la nomme, et sourit.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT005-moins-2","zone":"CIT005","pole":"-","palier":2,"nom":"Les Jarres de cire noire","cout":1,"cible":1,
 "effet":"Le héros gagne 8 de garde ; riposte 2 ; si le héros est sous la moitié de ses PV, 6 dégâts à la cible.",
 "ops":[["garde","heros",8],["riposte",2],["si","blesse",[["deg","cible",6]]]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Riposte","Condition","Dégâts"],
 "ambiance":"Les jarres de vivres sont scellées de cire noire et ouvertes devant témoins ; on se méfie, par principe.",
 "budget":"13,4 / 12,5 (+7%) — recalculé par le critique"},
{"id":"CIT005-moins-3","zone":"CIT005","pole":"-","palier":3,"nom":"Le Goûteur","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, 10 dégâts à la cible. Puis il gagne 16 de garde. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",10]]],["garde","heros",16],["prixPV",3]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le goûteur du gouverneur a goûté tous les poisons du désert ; il ne sent plus le goût du sel.",
 "budget":"14,8 / 15 (−1 %)"},
{"id":"CIT005-moins-4","zone":"CIT005","pole":"-","palier":4,"nom":"Le Puits empoisonné","cout":2,"cible":0,
 "effet":"Si le héros est sous la moitié de ses PV, riposte 8. Puis il gagne 28 de garde. Prix : le héros perd 4 PV.",
 "ops":[["si","blesse",[["riposte",8]]],["garde","heros",28],["prixPV",4]],
 "tags":["Citadelle","Pierre","Pôle −","Condition","Riposte","Garde","Prix"],
 "ambiance":"Le khan fit empoisonner le puits de Nushdaru ; la garnison but, toussa un peu, et remonta la garde.",
 "budget":"26,4 / 28,0 (-6%) — recalculé par le critique"},
{"id":"CIT005-moins-5","zone":"CIT005","pole":"-","palier":5,"nom":"Les Lèvres bleues","cout":2,"cible":1,
 "effet":"Le héros gagne 30 de garde ; riposte 3 ; si le héros est sous la moitié de ses PV, 12 dégâts à la cible. Prix : le héros perd 5 PV.",
 "ops":[["garde","heros",30],["riposte",3],["si","blesse",[["deg","cible",12]]],["prixPV",5]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les sentinelles ont les lèvres bleues et ne clignent plus des yeux ; les marchands de sel détournent le regard.",
 "budget":"31 / 32 (−3 %)"},
{"id":"CIT005-moins-6","zone":"CIT005","pole":"-","palier":6,"nom":"Les Corbeaux du chemin de ronde","cout":1,"cible":1,
 "effet":"Le héros gagne 20 de garde ; si le héros est sous la moitié de ses PV, riposte 4 et la cible subit 6 dégâts.",
 "ops":[["garde","heros",20],["si","blesse",[["riposte",4],["deg","cible",6]]]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Condition","Riposte","Dégâts"],
 "ambiance":"Les corbeaux qui boivent au puits tombent raides sur le chemin de ronde ; on les balaie chaque matin.",
 "budget":"23,0 / 22,5 (+2%) — recalculé par le critique"},
{"id":"CIT005-moins7","zone":"CIT005","pole":"-","palier":7,"nom":"La Garnison immunisée","cout":2,"cible":1,
 "effet":"Le poison devient armure. Vos alliés gagnent 30 de garde ; riposte 6 ; si le héros est sous la moitié de ses PV, tous les ennemis perdent 2 d'attaque. Pose Givre. Si Sang est posée (consommée) : 30 dégâts à la cible. Prix : le héros perd 8 PV.",
 "ops":[["garde","allies",30],["riposte",6],["si","blesse",[["affaiblit","tous",2]]],["pose","Givre"],["reveil","Sang",true,[["deg","cible",30]]],["prixPV",8]],
 "tags":["Citadelle","Pierre","Forme ultime −7","Dégâts","Affaiblissement","Riposte","Garde","Condition","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"L'espion du khan resta à Nushdaru ; il prend sa pincée avec les autres et guette la route du khan.",
 "budget":"46,6 sans combo ; réveil +30 (64 %)"},
{"id":"CIT005-plus-1","zone":"CIT005","pole":"+","palier":1,"nom":"Le Sorbet des sentinelles","cout":1,"cible":0,
 "effet":"Un Archer de la garnison rejoint le combat : 10 PV, frappe 3. Vos alliés se soignent de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Archer de la garnison",10,3],["soin","allies",2],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"À chaque relève, on porte aux sentinelles un sorbet de neige au coing ; elles le boivent face au désert.",
 "budget":"10,3 / 10 (+3 %)"},
{"id":"CIT005-plus-2","zone":"CIT005","pole":"+","palier":2,"nom":"La Glacière en dôme","cout":1,"cible":0,
 "effet":"Si un allié invoqué est en jeu, vos alliés gagnent 8 de garde. Puis le héros se soigne de 4 ; vos alliés gagnent 4 de garde.",
 "ops":[["si","bete",[["garde","allies",8]]],["soin","heros",4],["garde","allies",4]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Soin","Condition"],
 "ambiance":"La glacière en dôme garde la neige jusqu'aux grandes chaleurs ; on y descend en manteau.",
 "budget":"13,6 / 12,5 (+9 %)"},
{"id":"CIT005-plus-3","zone":"CIT005","pole":"+","palier":3,"nom":"Les Grenadiers de la cour","cout":1,"cible":0,
 "effet":"Un Lancier du bassin rejoint le combat : 14 PV, frappe 4. Vos alliés se soignent de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Lancier du bassin",14,4],["soin","allies",4],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Sous les grenadiers de la cour, les lanciers se reposent ; les fruits éclatent sur leurs casques.",
 "budget":"16 / 15 (+7 %)"},
{"id":"CIT005-plus-4","zone":"CIT005","pole":"+","palier":4,"nom":"Le Coing des remparts","cout":2,"cible":0,
 "effet":"Si un allié invoqué est en jeu, vos alliés se soignent de 10. Puis vos alliés gagnent 14 de garde ; un Archer de la garnison rejoint le combat (10 PV, frappe 3). Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","bete",[["soin","allies",10]]],["garde","allies",14],["invoque","Archer de la garnison",10,3],["ennemiSoin",2]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde","Soin","Condition","Prix"],
 "ambiance":"Les coings mûrissent sur le rempart sud ; on les cuit au miel pour la garnison, et pour l'assiégeant.",
 "budget":"29,4 / 28 (+5 %)"},
{"id":"CIT005-plus-5","zone":"CIT005","pole":"+","palier":5,"nom":"La Relève en musique","cout":2,"cible":0,
 "effet":"Un Cavalier de la citadelle rejoint le combat : 16 PV, frappe 5. Vos alliés gagnent 8 de garde et se soignent de 6.",
 "ops":[["invoque","Cavalier de la citadelle",16,5],["garde","allies",8],["soin","allies",6]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde","Soin"],
 "ambiance":"La relève se fait au son du târ ; la nouvelle garde reçoit sa coupe avant de monter.",
 "budget":"34,1 / 32 (+7 %)"},
{"id":"CIT005-plus-6","zone":"CIT005","pole":"+","palier":6,"nom":"Le Bassin couvert","cout":1,"cible":0,
 "effet":"Si un allié invoqué est en jeu, vos alliés gagnent 10 de garde. Puis vos alliés se soignent de 10 ; piochez 1 carte. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","bete",[["garde","allies",10]]],["soin","allies",10],["pioche",1],["ennemiSoin",2]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le khan n'a jamais trouvé le bassin couvert de la cour ; Farrokh n'y verse pas sa poudre.",
 "budget":"20,6 / 22,5 (−8 %)"},
{"id":"CIT005-plus7","zone":"CIT005","pole":"+","palier":7,"nom":"Le Jardin clos","cout":2,"cible":0,
 "effet":"La citadelle devient jardin. La Garde du bassin arrive (28 PV, frappe 7) ; alliés +16 de garde et soignés de 10. Pose Racine. Si Sang (consommée) : alliés soignés de 16 et +16 de garde. Prix : chaque ennemi se soigne de 3.",
 "ops":[["invoque","Garde du bassin",28,7],["garde","allies",16],["soin","allies",10],["pose","Racine"],["reveil","Sang",true,[["soin","allies",16],["garde","allies",16]]],["ennemiSoin",3]],
 "tags":["Citadelle","Pierre","Forme ultime +7","Invocation","Garde","Soin","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les assiégeants de Nushdaru finirent par demander à entrer, pour la glace ; Farrokh les fit asseoir au jardin.",
 "budget":"52,1 sans combo ; réveil +43,2 (83 %)"}
]
```

---

## 12. Dûr-Ellamê, la Forteresse sous les Chapeaux (CIT041) — Citadelle · Forêt de champignons géants · Sève · Mésopotamienne

Recette du récit : la lettre au roi. Recette du −7 : la déliquescence (des murs fondus en talus) ; du +7 : la multiplication (des citadelles jumelles partout dans la forêt, toutes vides).

**Pourriture (−)** : la coupe qui noircit → les étais de cèdre → les briques spongieuses → les fissures à la craie → le mur coupé → la porte qui ne tient à rien → la Citadelle molle. Fil mécanique : tout s'affaisse ensemble : les ennemis perdent de l'attaque pour tout le combat pendant que le héros s'étaie (garde), et la carte paie davantage si la Garde était déjà levée ; le prix est en PV. Pas de perce-garde ni de marques : c'était la Pourriture de Morvèle (DON051).
**Croissance (+)** : la jeune pousse → l'arrosage des murs → le contrefort vivant → un rang par lune → les toits-chapeaux → la lettre au roi → les Citadelles jumelles. Fil mécanique : ce qu'on coupe repousse : récupération de la dernière carte défaussée, bloqueurs de chair de champignon qui encaissent, garde de tous vos alliés, plus forte si un allié invoqué est déjà en jeu ; le prix : l'ennemi s'abrite aussi sous les chapeaux, ou une carte défaussée.

```json
{"fiche":"CIT041","nom":"Dûr-Ellamê, la Forteresse sous les Chapeaux",
 "recit":"À mon seigneur le roi, ton serviteur Nabû-ušallim. Que le roi se porte bien. La forteresse de Dûr-Ellamê ne se porte pas bien. Les champignons poussent dans les murs ; j'ai fait couper, comme le roi l'a ordonné, et les briques ont pourri autour des coupes. J'ai fait arroser les autres pour qu'ils tiennent le mur. Ils le tiennent. Le mur gagne maintenant un rang de briques par lune, et la porte ne ferme plus. Que le roi me dise s'il faut couper le mur.",
 "pal":["Murs de brique crue fondus en talus spongieux, tours couchées, odeur de cave ; la garnison garde une porte qui ne tient plus à rien.","Briques noircies autour de chaque coupe, chapeaux tranchés qui suintent, étais de cèdre partout ; un scribe marque les fissures à la craie.","Citadelle de brique crue au milieu de champignons géants, murs à redans, chapeaux qui percent les terrasses ; des soldats taillent les jeunes pousses.","Les pieds des champignons font contreforts, les chapeaux couvrent les tours comme des toits ; on arrose les murs, qui gagnent un rang par lune.","Des citadelles jumelles ont poussé partout dans la forêt, chacune avec ses redans et sa porte, toutes vides ; la garnison ne sait plus laquelle garder."],
 "pm":"Pourriture","pp":"Croissance"}
```

```json
[
{"id":"CIT041-moins-1","zone":"CIT041","pole":"-","palier":1,"nom":"La Coupe qui noircit","cout":1,"cible":0,
 "effet":"Tous les ennemis perdent 1 d'attaque ; le héros gagne 6 de garde. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","tous",1],["garde","heros",6],["prixPV",1]],
 "tags":["Citadelle","Sève","Pôle −","Affaiblissement","Garde","Prix"],
 "ambiance":"Autour de chaque coupe, la brique noircit en une nuit ; au matin, le doigt s'y enfonce.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"CIT041-moins-2","zone":"CIT041","pole":"-","palier":2,"nom":"Les Étais de cèdre","cout":1,"cible":0,
 "effet":"Si la Garde est déjà levée, tous les ennemis perdent 1 d'attaque. Puis le héros gagne 12 de garde.",
 "ops":[["si","garde",[["affaiblit","tous",1]]],["garde","heros",12]],
 "tags":["Citadelle","Sève","Pôle −","Affaiblissement","Garde","Condition"],
 "ambiance":"Le cèdre des étais venait de très loin, payé par le roi ; il pourrit aussi, mais plus lentement.",
 "budget":"12,9 / 12,5 (+3 %)"},
{"id":"CIT041-moins-3","zone":"CIT041","pole":"-","palier":3,"nom":"Les Briques spongieuses","cout":1,"cible":1,
 "effet":"Tous les ennemis perdent 1 d'attaque, la cible 1 de plus ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",1],["affaiblit","cible",1],["garde","heros",8],["prixPV",2]],
 "tags":["Citadelle","Sève","Pôle −","Affaiblissement","Garde","Prix"],
 "ambiance":"Les briques boivent l'eau comme des éponges ; les béliers de l'ennemi s'y enfoncent et y restent.",
 "budget":"14 / 15 (−7 %)"},
{"id":"CIT041-moins-4","zone":"CIT041","pole":"-","palier":4,"nom":"Les Fissures à la craie","cout":2,"cible":0,
 "effet":"Si la Garde est déjà levée, tous les ennemis perdent 2 d'attaque. Puis le héros gagne 20 de garde ; tous les ennemis perdent 1 d'attaque. Prix : le héros perd 3 PV.",
 "ops":[["si","garde",[["affaiblit","tous",2]]],["garde","heros",20],["affaiblit","tous",1],["prixPV",3]],
 "tags":["Citadelle","Sève","Pôle −","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Le scribe de Nabû-ušallim marquait chaque fissure d'un trait de craie ; à la fin, le mur était blanc.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"CIT041-moins-5","zone":"CIT041","pole":"-","palier":5,"nom":"Le Mur coupé","cout":2,"cible":1,
 "effet":"Tous les ennemis perdent 2 d'attaque ; 10 dégâts à la cible ; le héros gagne 16 de garde. Prix : le héros perd 4 PV.",
 "ops":[["affaiblit","tous",2],["deg","cible",10],["garde","heros",16],["prixPV",4]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Affaiblissement","Garde","Prix"],
 "ambiance":"Sur ordre du roi, on coupa le champignon du mur nord ; le mur nord se coucha dans la nuit.",
 "budget":"32 / 32 (+0 %)"},
{"id":"CIT041-moins-6","zone":"CIT041","pole":"-","palier":6,"nom":"La Porte qui ne tient à rien","cout":1,"cible":1,
 "effet":"Si la Garde est déjà levée, 12 dégâts à la cible. Puis tous les ennemis perdent 1 d'attaque ; le héros gagne 14 de garde.",
 "ops":[["si","garde",[["deg","cible",12]]],["affaiblit","tous",1],["garde","heros",14]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Affaiblissement","Garde","Condition"],
 "ambiance":"La porte tient debout seule, sans mur autour ; la garnison la garde quand même, par ordre.",
 "budget":"23,8 / 22,5 (+6 %)"},
{"id":"CIT041-moins7","zone":"CIT041","pole":"-","palier":7,"nom":"La Citadelle molle","cout":2,"cible":1,
 "effet":"Tout s'affaisse, l'ennemi aussi. Tous les ennemis perdent 3 d'attaque ; 10 dégâts à la cible ; le héros gagne 30 de garde. Pose Abîme. Si Racine est posée (consommée) : tous perdent 2 d'attaque, 10 dégâts à tous. Prix : −6 PV.",
 "ops":[["affaiblit","tous",3],["deg","cible",10],["garde","heros",30],["pose","Abîme"],["reveil","Racine",true,[["affaiblit","tous",2],["deg","tous",10]]],["prixPV",6]],
 "tags":["Citadelle","Sève","Forme ultime −7","Dégâts","Affaiblissement","Garde","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"La forteresse s'affaissa en talus spongieux ; les assiégeants s'y enlisèrent jusqu'aux genoux, et le siège finit là.",
 "budget":"47,8 sans combo ; réveil +35,2 (74 %)"},
{"id":"CIT041-plus-1","zone":"CIT041","pole":"+","palier":1,"nom":"La Jeune Pousse","cout":1,"cible":0,
 "effet":"Un Rejet de champignon rejoint le combat : 16 PV, frappe 0. Récupérez la dernière carte de la défausse. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Rejet de champignon",16,0],["recup"],["ennemiGarde",1]],
 "tags":["Citadelle","Sève","Pôle +","Invocation","Récupération","Prix"],
 "ambiance":"Les soldats taillaient les jeunes pousses au ras de la brique ; elles repoussaient pendant la relève.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT041-plus-2","zone":"CIT041","pole":"+","palier":2,"nom":"L'Arrosage des murs","cout":1,"cible":0,
 "effet":"Si un allié invoqué est en jeu, vos alliés gagnent 8 de garde. Puis le héros gagne 6 de garde ; récupérez la dernière carte de la défausse.",
 "ops":[["si","bete",[["garde","allies",8]]],["garde","heros",6],["recup"]],
 "tags":["Citadelle","Sève","Pôle +","Garde","Récupération","Condition"],
 "ambiance":"Nabû-ušallim fit arroser les champignons des murs à l'eau du canal, en cachette du messager du roi.",
 "budget":"13,6 / 12,5 (+9 %)"},
{"id":"CIT041-plus-3","zone":"CIT041","pole":"+","palier":3,"nom":"Le Contrefort vivant","cout":1,"cible":0,
 "effet":"Un Contrefort vivant rejoint le combat : 20 PV, frappe 1. Vos alliés gagnent 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Contrefort vivant",20,1],["garde","allies",4],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"Le pied du champignon s'appuyait contre le mur comme un contrefort ; il était plus solide que le mur.",
 "budget":"13,3 / 15 (−11 %)"},
{"id":"CIT041-plus-4","zone":"CIT041","pole":"+","palier":4,"nom":"Un rang par lune","cout":2,"cible":0,
 "effet":"Si un allié invoqué est en jeu, vos alliés gagnent 14 de garde. Puis un Pied de champignon rejoint le combat (30 PV, frappe 3) ; récupérez une carte. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","bete",[["garde","allies",14]]],["invoque","Pied de champignon",30,3],["recup"],["ennemiGarde",2]],
 "tags":["Citadelle","Sève","Pôle +","Invocation","Garde","Récupération","Condition","Prix"],
 "ambiance":"Le mur gagnait un rang par lune ; personne ne posait les briques, et toutes portaient le sceau royal.",
 "budget":"27,9 / 28 (+0 %)"},
{"id":"CIT041-plus-5","zone":"CIT041","pole":"+","palier":5,"nom":"Les Toits-chapeaux","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 14 de garde et se soignent de 6 ; récupérez la dernière carte de la défausse ; piochez 1 carte.",
 "ops":[["garde","allies",14],["soin","allies",6],["recup"],["pioche",1]],
 "tags":["Citadelle","Sève","Pôle +","Garde","Soin","Pioche","Récupération"],
 "ambiance":"Les chapeaux couvrent les tours mieux que les toits de roseau ; il n'y pleut plus, il y suinte.",
 "budget":"33,8 / 32 (+6 %)"},
{"id":"CIT041-plus-6","zone":"CIT041","pole":"+","palier":6,"nom":"La Lettre au roi","cout":1,"cible":1,
 "effet":"Si un allié invoqué est en jeu, 12 dégâts à la cible. Puis un Rejet de champignon rejoint le combat (22 PV, frappe 2) ; récupérez une carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["deg","cible",12]]],["invoque","Rejet de champignon",22,2],["recup"],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Invocation","Dégâts","Récupération","Condition","Prix"],
 "ambiance":"La lettre de Nabû-ušallim attend sa réponse ; le roi a changé, et le nouveau ne lit pas les anciennes.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"CIT041-plus7","zone":"CIT041","pole":"+","palier":7,"nom":"Les Citadelles jumelles","cout":2,"cible":0,
 "effet":"La forteresse pousse en double. La Citadelle jumelle arrive (40 PV, frappe 4) ; alliés +16 de garde ; récupérez une carte. Pose Racine. Si Abîme (consommée) : récupérez une carte, piochez 2, alliés +12 de garde. Prix : ennemis +3 de garde.",
 "ops":[["invoque","Citadelle jumelle",40,4],["garde","allies",16],["recup"],["pose","Racine"],["reveil","Abîme",true,[["recup"],["pioche",2],["garde","allies",12]]],["ennemiGarde",3]],
 "tags":["Citadelle","Sève","Forme ultime +7","Invocation","Garde","Pioche","Récupération","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Un matin, une autre forteresse se dressait dans la forêt, avec la même porte ; la garnison se partagea.",
 "budget":"43,2 sans combo ; réveil +26,4 (61 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

### Les Grimpeurs de Mer-Ouadj (RES183) — Ressource · Jungle · Sève · égyptienne

Geste : grimper au palmier à la boucle de corde et pendre une jarre sous la spathe entaillée.

```json
{"fiche":"RES183","nom":"Les Grimpeurs de Mer-Ouadj",
 "recit":"À Mer-Ouadj, le grimpeur monte au palmier avec une boucle de corde passée autour du tronc et des reins, entaille la spathe et y pend une jarre. Au matin, le vin de palme a fermenté. Il boit la première gorgée là-haut, et ne redescend pas toujours droit.",
 "pal":["Un palmier plus haut que la jungle, une jarre pendue sous les palmes ; à son pied, une boucle de corde usée par les reins.","Un grimpeur sur chaque tronc, des jarres qui montent et descendent au bout des cordes ; une odeur de vin aigre flotte sous les arbres."]}
```

### Les Pierres de plongée d'Akrokymé (RES153) — Ressource · Archipel · Eau · grecque

Geste : descendre au fond en serrant une pierre percée contre la poitrine, relié à la barque par une corde.

```json
{"fiche":"RES153","nom":"Les Pierres de plongée d'Akrokymé",
 "recit":"À Akrokymé, le plongeur serre contre sa poitrine une pierre plate percée d'un trou et descend avec elle jusqu'aux bancs d'éponges. Une corde le relie à la barque. Le patron tient la corde et compte à voix haute ; c'est lui qui décide quand on remonte.",
 "pal":["Une barque à l'ancre au-dessus des rochers, une corde qui plonge dans l'eau verte ; des éponges noires sèchent sur le plat-bord.","Barques serrées sur la passe, plongeurs qui remontent par grappes, pierres percées alignées sur le quai ; les éponges blanchissent en tas au soleil."]}
```

### Les Souffleries de Rigzar (RES099) — Ressource · Désert de sable · Feu · perse

Geste : souffler à la canne des fioles de verre vert tiré du sable.

```json
{"fiche":"RES099","nom":"Les Souffleries de Rigzar",
 "recit":"Le sable de Rigzar fond en verre vert. Le souffleur Bahram y façonne des fioles à larmes, que les veuves remplissent et scellent à la cire avant de les enterrer avec le mari. Bahram en a soufflé pour toute la ville. Il en revend beaucoup, vides, aux veuves suivantes.",
 "pal":["Un four de terre au creux d'une dune, une canne de fer, quelques fioles vertes posées sur le sable ; la fumée monte droit.","Fours alignés au pied des dunes, souffleurs qui tournent leurs cannes ensemble, fioles par paniers ; autour des fours, le sable a fondu en croûtes vertes."]}
```

### Les Grèves d'Anbar-Sar (RES297) — Ressource · Récif · Eau · perse

Geste : suivre un chien qui flaire l'ambre gris sur le récif découvert.

```json
{"fiche":"RES297","nom":"Les Grèves d'Anbar-Sar",
 "recit":"Après les tempêtes, les chiens d'Anbar-Sar courent sur le récif découvert et s'arrêtent devant une boule grise qui sent la terre mouillée et le musc. Leur maître la ramasse : un peu d'ambre gris vaut une maison. Le chien, lui, reçoit un poisson.",
 "pal":["Un récif à marée basse, un chien qui flaire les flaques ; des coquilles, du varech, et rien d'autre à perte de vue.","Des chiens partout sur le récif, nez au sol, et leurs maîtres qui suivent avec des paniers ; une odeur de musc flotte jusqu'au village."]}
```

### Les Sangsuaires de Palus Lenta (RES063) — Ressource · Marais · Sève · romaine

Geste : entrer jambes nues dans le marais pour y prendre les sangsues, puis les détacher une à une.

```json
{"fiche":"RES063","nom":"Les Sangsuaires de Palus Lenta",
 "recit":"Les femmes de Palus Lenta entrent dans le marais jambes nues et en ressortent couvertes de sangsues, qu'elles détachent une à une dans des jarres d'eau douce. Les médecins de la ville les achètent pour saigner les sénateurs. Les femmes se soignent au vinaigre.",
 "pal":["Un étang de roseaux, une femme immobile dans l'eau jusqu'aux genoux ; une jarre bouchée de lin attend sur la berge.","Des rangs de femmes dans le marais, jambes noires de sangsues, charrettes de jarres sur la chaussée ; les médecins viennent choisir eux-mêmes."]}
```

### Les Briqueteries de Ša-Libitti (RES333) — Ressource · Désert de sable · Feu · mésopotamienne

Geste : estamper le nom du roi dans chaque brique fraîche.

```json
{"fiche":"RES333","nom":"Les Briqueteries de Ša-Libitti",
 "recit":"À Ša-Libitti, chaque brique sort du moule avec le nom du roi, estampé dans l'argile fraîche. Quand le roi change, on change le tampon. Les briques déjà cuites gardent le nom de l'ancien ; on les pose face contre le mur, par prudence.",
 "pal":["Quelques moules de bois au bord d'un canal ensablé, briques qui sèchent en rangs sur le sable ; un tampon de terre cuite posé sur une pierre.","Champs de briques à perte de vue, fours qui fument jour et nuit, ouvriers qui frappent le tampon en cadence ; des piles de briques tournées face au sol."]}
```

### Les Tessellaires de Kalothermos (RES165) — Ressource · Canyon · Feu · byzantine

Geste : couper à la marteline les tesselles d'or prises dans le verre.

```json
{"fiche":"RES165","nom":"Les Tessellaires de Kalothermos",
 "recit":"Au fond du canyon de Kalothermos, on couche une feuille d'or sous un voile de verre, puis on coupe les tesselles à la marteline. Les églises de la capitale les achètent par sacs. Les tailleurs ont de l'or sous les ongles ; le torrent où ils se lavent brille jusqu'au village.",
 "pal":["Un four de verrier contre la paroi rouge, une galette de verre qui refroidit sur la pierre ; quelques éclats dorés dans la poussière.","Ateliers étagés le long du canyon, marteaux qui tintent, sacs de tesselles empilés au pied des parois ; tout le fond du ravin scintille."]}
```

### Les Bergeries de Kiša-Ṣēri (RES043) — Ressource · Steppe · Vent · mésopotamienne

Geste : plumer la laine des moutons à la main, sans forces.

```json
{"fiche":"RES043","nom":"Les Bergeries de Kiša-Ṣēri",
 "recit":"Avant qu'on ait des forces, on plumait les moutons de Kiša-Ṣēri à la main, au printemps, quand la laine lâche d'elle-même. Les bergers le font encore, par habitude. Le temple leur vend des forces chaque année ; elles rouillent sous les lits.",
 "pal":["Un troupeau sur la steppe rase, un berger accroupi qui tire la laine à pleines mains ; des flocons s'envolent avec le vent.","Enclos de roseaux sur toute la steppe, monceaux de laine qu'on tasse dans des sacs ; des flocons blancs roulent jusqu'à l'horizon."]}
```

### Les Outres d'Aiolopétra (RES007) — Ressource · Iles flottantes · Vent · grecque

Geste : ouvrir une outre face aux rafales et la nouer d'un coup sec.

```json
{"fiche":"RES007","nom":"Les Outres d'Aiolopétra",
 "recit":"Sur les îles d'Aiolopétra, on coud le vent dans des outres de chèvre : on les ouvre face aux rafales et on les noue d'un coup sec. Les marins les achètent pour les calmes. La plupart ne contiennent que l'haleine du vendeur ; les marins le savent, et rament.",
 "pal":["Une île flottante couverte de rochers, une vieille qui tend une outre ouverte au vent ; des outres gonflées pendent à un piquet.","Îles hérissées de piquets, outres gonflées en grappes qui ballottent et sifflent ; des barques volantes font la queue pour charger."]}
```

### Les Perches du col de Gelidum (RES104) — Ressource · Glacier · Glace · romaine

Geste : planter dans la glace des perches de mélèze qui jalonnent la route.

```json
{"fiche":"RES104","nom":"Les Perches du col de Gelidum",
 "recit":"Chaque automne, le cantonnier du col de Gelidum plante des perches de mélèze dans la glace, à un pas d'écart, pour que les légions retrouvent la route sous la neige. Il est payé à la perche. Le col est donc très bien balisé, en zigzag.",
 "pal":["Un glacier nu sous un ciel blanc, quelques perches de mélèze plantées de travers ; une hutte de pierre au pied de la moraine.","Des perches à perte de vue, en zigzags serrés sur la glace, bottes de mélèze empilées près de la hutte ; une colonne de soldats suit les perches."]}
```

### Les Aires à vanner de Ta-Nefou (RES154) — Ressource · Lande · Vent · égyptienne

Geste : lancer le grain battu au vent avec une pelle de bois pour en séparer la balle.

```json
{"fiche":"RES154","nom":"Les Aires à vanner de Ta-Nefou",
 "recit":"Sur la lande de Ta-Nefou, les vanneuses lancent le grain battu vers le ciel avec des pelles de bois, et le vent emporte la balle. Le grain retombe à leurs pieds. La balle file jusqu'au domaine du temple, qui la ramasse et la revend aux vanneuses en fourrage.",
 "pal":["Une aire de terre battue sur la lande, une femme qui lance le grain à la pelle ; un nuage de balle dorée file avec le vent.","Aires en chapelet sur toute la lande, pelles levées ensemble, nuages de balle qui roulent vers l'horizon ; des greniers coniques se remplissent."]}
```

### Les Pierres de Caer Lladron (RES293) — Ressource · Cité en ruines · Pierre · celte

Geste : démonter les murs d'une forteresse pierre à pierre pour bâtir les fermes.

```json
{"fiche":"RES293","nom":"Les Pierres de Caer Lladron",
 "recit":"Les gens de la vallée démontent Caer Lladron pierre à pierre pour bâtir leurs fermes. Chaque linteau porte un bout d'entrelacs ; on les pose à l'envers, de peur que le fort ne les reconnaisse. Le fort rétrécit chaque année ; les fermes ont toutes un air de famille.",
 "pal":["Un rempart écroulé dans la bruyère, une charrette à bœufs chargée de pierres taillées ; un homme fait levier avec une barre de chêne.","Le fort réduit à ses fondations, des chemins de charrettes vers chaque vallée, fermes neuves aux linteaux sculptés ; des carriers chantent en démontant."]}
```

