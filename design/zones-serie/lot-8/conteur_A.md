# Lot 8 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes). Plus de Ressources. Carte des familles : `familles_A.md`, relue contre familles_B, C et D et recomptée contre les cartes de conteur_B, C et D à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte, dégâts des `si` compris (comptés à 50 %) ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget` de chaque carte) ; formes du palier 7 entre 45 et 55 points de base, sans tolérance, réveil de 60 à 100 %. Aucun boost.

**Validateur (script Python, 0 erreur, 0 avertissement à la remise)** : budgets des paliers 1 à 6 à ±15 % et formes du palier 7 (base 45–55, réveil 60–100 %, pose différente du réveil, prix, phrase d'ouverture) recalculés depuis les `ops` ; chaque nombre des `ops` présent dans le texte de l'effet, « la cible » écrite quand une opération vise la cible ; effets ≤ 250 signes ; conditions `si` toutes connues du moteur (`tv/src/cartes.js`), aucune rendue toujours vraie ou toujours fausse par une opération précédente de la carte ; Lois en Assemblée seulement (2 au moins par pôle), 3 invocations au moins par pôle d'Antre ; prix sur 4 cartes au moins par pôle, à une carte près entre les pôles ; familles comptées par pôle (`si` et réveil compris) : la famille déclarée à 5 cartes ou plus, jamais deux, dégâts ciblés sur 4 cartes au plus (5 au Donjon), « tous » sur 3 cartes au plus, écho et récupération sur 4 au plus, crochets sur 4 cartes au plus ; places de LISTE.md tenues exactement ; aucune famille principale déjà jouée par le même mot aux lots 1 à 7, aucune vocation déjà jouée par A ni reprise deux fois ; appoints dans 3 de mes pôles au plus par famille ; colonnes (crochet sur 4 cartes, nourri par 3 cartes au moins, jamais sur une intention ennemie) ; familles d'animaux sur les noms d'invocation dans 2 de mes pôles au plus ; récits de 60 à 100 mots (comptés de deux façons), ambiances de 12 à 20 mots, aucun nombre ni chiffre dans la prose, aucun mot interdit, deux chutes « sans X. » au plus, aucun dialogue ni « X était petit quand » ; noms absents de `noms-pris.txt` et des conteurs B, C et D du lot 8, comparés par seconde moitié, mot principal et préfixe.

**Places des familles (LISTE.md, leçon 3 du lot 7), toutes tenues, aucune autre prise** : soin du héros 2 (Mort ANT059, Exil ANT015), soin des alliés 1 (Os CIT007), garde du héros 1 (Festin ANT063), garde des alliés 1 (Poison ASS182), affaiblissement 1 (Chant DON088), riposte 2 (Corail CIT007, Folie ASS034), brûlure 1 (Vie ANT059), marque 2 (Tyrannie ASS015, Déluge ANT113), mana 1 (Nectar ASS182), perce-garde 1 (Ordre ANT146), exil 1 (Raison ASS034), pioche 1 (Liberté ASS015) ; places rares : coups au hasard (Foyer ANT015), écho (Sève ASS110, tenu à 4 cartes, voir plus bas). Vocations : invocations des Antres sur la Famine (ANT063), la Sécheresse (ANT113) et le Chaos (ANT146), gros coups du Donjon sur le Silence (DON088). Colonnes vertébrales : Sang (ASS110 −, crochet « la Garde du héros est levée » nourri par la garde du héros), Cauchemar (ANT227 −, marque et « la cible est déjà marquée ») et Rêve (ANT227 +, hésitation et « la cible hésite déjà »). Aucune colonne sur un des couples prix-crochet pleins du lot (`prixPV`/`blesse`, défausse/`defausseAPrix`, `prixBete`/`bete`) ; `ennemiGarde`/`cibleGarde` dans un seul de mes pôles (Corail), avec C Glace : 2.

**Point pour le critique : l'écho.** LISTE.md me donne une place rare d'écho, mais la leçon 2 du lot 5 interdit l'écho sur plus de 4 cartes d'un pôle. Une famille principale demande 5 cartes. J'ai gardé la leçon du moteur : la Sève (ASS110 +) porte l'écho sur 4 cartes, ses 3 autres cartes sont les grosses brûlures faites pour être doublées, et le pôle a sa propre colonne (brûlure sur 4 cartes, crochet « la cible brûle déjà » sur 4). Compté strictement, c'est un quatrième pôle sans famille à 5 cartes. Il l'est par la règle, pas par choix ; si le critique préfère 5 cartes d'écho, il suffit d'ajouter l'écho à la carte +6.

Recettes de récit (aucune deux fois, aucune reprise de mes formes du lot 7, documents cités 3 sur 12 : l'enseignement, la lettre au roi, la relation du consul ; aucun dialogue, aucune ouverture « X était petit quand », aucune énumération) : CIT007 la solde ; DON088 **l'enseignement** (document) ; ASS034 le remède voté ; ASS110 **la lettre au roi** (document) ; ASS015 le vote qui ne change rien ; ASS182 la transmission d'un geste ; ANT059 le poème d'adieu jamais fini ; ANT063 le conte de l'hiver blanc ; ANT015 la coutume du tour de terre ; ANT113 **la relation du consul** (document) ; ANT227 le rêve du chaman pris au mot ; ANT146 la fête du roi tiré au sort.

Recettes des extrêmes : −7 en ordre (CIT007, ASS015), silence (DON088, ASS182, ANT059), démesure (ASS034), ruine (ASS110, ANT227), vide (ANT063, ANT015, ANT113), foule (ANT146) ; +7 en démesure (CIT007, ASS110, ANT015, ANT113, ANT227), foule (DON088, ASS182, ANT059, ANT063), ordre (ASS034, ANT146), vide (ASS015). Aucun +7 où le végétal avale un bâtiment (la vigne d'ASS110 couvre un volcan, pas une construction). Aucun pigment au +7.

Résonances des formes du palier 7 (posée → réveillée). Posées : Sceau 5, Abîme 4, Racine 4, Givre 4, Braise 4, Sang 3. Réveillées : Racine 5, Sceau 4, Givre 4, Sang 4, Abîme 4, Braise 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT007 | Sceau → Braise | Abîme → Sceau |
| DON088 | Sang → Givre | Racine → Sang |
| ASS034 | Givre → Racine | Sceau → Racine |
| ASS110 | Braise → Sang | Racine → Braise |
| ASS015 | Sceau → Givre | Givre → Abîme |
| ASS182 | Abîme → Sang | Sceau → Racine |
| ANT059 | Givre → Abîme | Sang → Givre |
| ANT063 | Abîme → Givre | Braise → Racine |
| ANT015 | Racine → Abîme | Braise → Sceau |
| ANT113 | Braise → Racine | Givre → Sceau |
| ANT227 | Abîme → Sang | Racine → Abîme |
| ANT146 | Sang → Sceau | Sceau → Braise |

---

## 1. Gemb Sälam, le Bastion de la Solde (CIT007) — Citadelle · Désert de sable · Feu · Éthiopienne

Forme du récit : la solde (comment la garnison est payée, et avec quoi elle l'est maintenant). Recette du −7 : l'ordre (le rempart d'os rangés comme des briques, la garde sans chair) ; du +7 : la démesure (les colliers qui traînent jusqu'aux pieds, le corail en tas dans la cour).

**Os (−)** : la perle d'os → le cordon du mort → les os sous le rempart → le couteau à perles → l'azmach Tesfaye → la ronde des os → les Os en rangs. Fil mécanique : soin des alliés (les morts rendent leurs perles aux vivants), affaiblissement en appoint, soin et garde du héros en touche, crochet « la cible prend son élan » ; prix : PV et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 6, dégâts ciblés 4, affaiblissement 4, dégâts à tous 2, exil 2, garde du héros 2, soin du héros 2 ; crochet « la cible prend son élan » sur 3 ; prix sur 6 cartes (PV 4, exil 2).

**Corail (+)** : la perle de mer → la caravane de sel → le récif sur le cou → le compte des perles → le corail des marchands → les cordons qui traînent → le Récif dans la cour. Fil mécanique : riposte (le soldat paré rend les coups), garde des alliés et mana de Feu en appoint, perce-garde en touche, crochet « la cible a de la garde » nourri par le prix en garde ennemie ; prix : défausse et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 6, garde des alliés 4, dégâts ciblés 4, mana 4, dégâts à tous 3, garde du héros 2, soin des alliés 2, perce-garde 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (défausse 4, garde ennemie 3).

```json
{"fiche":"CIT007","nom":"Gemb Sälam, le Bastion de la Solde",
 "recit":"Le négus paie la garnison de Gemb Sälam en perles de corail, montées de la mer par les caravanes de sel. Chaque soldat les enfile sur un cordon qu'il porte au cou. Quand un soldat meurt, on enterre ses os au pied du rempart, et son cordon passe à la recrue qui le remplace. L'azmach Tesfaye porte celui du fondateur, enroulé autour de sa taille. Depuis que la côte a changé de maître, le corail ne monte plus. Les recrues reçoivent des perles d'os, taillées au couteau. Personne n'a demandé dans quels os.",
 "pal":["Le rempart est fait d'os blanchis rangés comme des briques ; des soldats sans chair montent la garde, et leurs colliers d'os cliquettent au vent chaud.","Les cordons des recrues sont d'os taillé, plus blancs chaque saison ; on creuse au pied du rempart plus souvent qu'on n'y monte.","Un fort de pierre sèche au milieu des dunes, une citerne, un mât à signaux, et des soldats qui portent au cou un cordon de perles.","Les caravanes de sel montent jusqu'à la porte ; les cordons s'allongent, on compte les perles le soir et on rit plus fort qu'avant.","Les colliers traînent jusqu'aux pieds des soldats ; le corail s'entasse dans la cour, les enfants y jouent, et le fort luit comme un récif à sec."],
 "pm":"Os","pp":"Corail"}
```

```json
[
{"id":"CIT007-moins-1","zone":"CIT007","pole":"-","palier":1,"nom":"La Perle d'os","cout":1,"cible":0,
 "effet":"Vos alliés se soignent de 5 ; 2 dégâts à tous les ennemis. Prix : le héros perd 1 PV.",
 "ops":[["soin","allies",5],["deg","tous",2],["prixPV",1]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Soin","Prix"],
 "ambiance":"La recrue reçoit son cordon d'os taillé au couteau ; il est léger, et ne fait aucun bruit au cou.",
 "budget":"10,9 / 10 (+9 %)"},
{"id":"CIT007-moins-2","zone":"CIT007","pole":"-","palier":2,"nom":"Le Cordon du mort","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts à la cible. Puis vos alliés se soignent de 5 ; l'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",8]]],["soin","allies",5],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Le cordon passe du cou du mort au cou du vivant, tel quel, ni lavé ni raccourci.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"CIT007-moins-3","zone":"CIT007","pole":"-","palier":3,"nom":"Les Os sous le rempart","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 12 ; riposte 3 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["soin","allies",12],["riposte",3],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Riposte","Soin","Exil","Prix"],
 "ambiance":"On enterre les morts au pied du rempart, debout, le visage tourné vers les dunes qu'ils gardaient.",
 "budget":"21 / 24 (−12 %)"},
{"id":"CIT007-moins-4","zone":"CIT007","pole":"-","palier":4,"nom":"Le Couteau à perles","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, l'attaque de la cible baisse de 2. Puis 14 dégâts à la cible ; le héros gagne 12 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["affaiblit","cible",2]]],["deg","cible",14],["garde","heros",12],["prixPV",2]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Le vieux Mesfin taille les perles sur une pierre plate, et ne demande jamais d'où vient l'os.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"CIT007-moins-5","zone":"CIT007","pole":"-","palier":5,"nom":"L'Azmach Tesfaye","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 9 ; l'attaque de la cible baisse de 3 ; le héros se soigne de 7.",
 "ops":[["soin","allies",9],["affaiblit","cible",3],["soin","heros",7]],
 "tags":["Citadelle","Feu","Pôle −","Affaiblissement","Soin"],
 "ambiance":"Tesfaye porte le cordon du fondateur enroulé à la taille ; il cliquette à chaque pas de sa ronde.",
 "budget":"29,5 / 32 (−8 %)"},
{"id":"CIT007-moins-6","zone":"CIT007","pole":"-","palier":6,"nom":"La Ronde des os","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 14 dégâts à la cible. Puis vos alliés se soignent de 10 ; le héros gagne 10 de garde ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","elan",[["deg","cible",14]]],["soin","allies",10],["garde","heros",10],["affaiblit","cible",2],["exil"]],
 "tags":["Citadelle","Feu","Pôle −","Dégâts","Affaiblissement","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"La nuit, la ronde passe sur le rempart blanchi ; les cordons cliquettent, et les dunes se taisent.",
 "budget":"33 / 36 (−8 %)"},
{"id":"CIT007-moins7","zone":"CIT007","pole":"-","palier":7,"nom":"Les Os en rangs","cout":2,"cible":1,
 "effet":"La garnison n'a plus de chair. Alliés soignés de 16 ; 7 à tous ; soin du héros 10. Pose Sceau. Si Braise (consommée) : alliés soignés de 6 ; 12 à la cible ; soin du héros 10. Prix : héros −3 PV.",
 "ops":[["soin","allies",16],["deg","tous",7],["soin","heros",10],["pose","Sceau"],["reveil","Braise",true,[["soin","allies",6],["deg","cible",12],["soin","heros",10]]],["prixPV",3]],
 "tags":["Citadelle","Feu","Forme ultime −7","Dégâts","Soin","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Sur le rempart blanc, des soldats sans chair montent la garde, et leurs colliers d'os comptent le vent.",
 "budget":"46,4 sans combo ; réveil +31 (67 %)"},
{"id":"CIT007-plus-1","zone":"CIT007","pole":"+","palier":1,"nom":"La Perle de mer","cout":1,"cible":1,
 "effet":"Riposte 2 jusqu'à votre prochain tour ; vos alliés gagnent 5 de garde ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",2],["garde","allies",5],["vulnerable","cible",1],["ennemiGarde",1]],
 "tags":["Citadelle","Feu","Pôle +","Marque","Riposte","Garde","Prix"],
 "ambiance":"Une perle de corail, percée à la main sur la côte, vaut une saison de garde au fort des dunes.",
 "budget":"11 / 10 (+10 %)"},
{"id":"CIT007-plus-2","zone":"CIT007","pole":"+","palier":2,"nom":"La Caravane de sel","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis riposte 2 jusqu'à votre prochain tour ; +1 mana de Feu ; le héros gagne 5 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["riposte",2],["mana","Feu",1],["garde","heros",5],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Riposte","Garde","Mana","Condition","Prix"],
 "ambiance":"Les caravanes montent le sel vers les hautes terres, et redescendent avec un sachet de perles pour la garnison.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"CIT007-plus-3","zone":"CIT007","pole":"+","palier":3,"nom":"Le Récif sur le cou","cout":2,"cible":0,
 "effet":"5 dégâts à tous les ennemis ; riposte 2 jusqu'à votre prochain tour ; vos alliés gagnent 6 de garde ; +1 mana de Feu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","tous",5],["riposte",2],["garde","allies",6],["mana","Feu",1],["ennemiGarde",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Riposte","Garde","Mana","Prix"],
 "ambiance":"Les plus vieux soldats portent tant de corail qu'on dit, en riant, qu'ils ont un récif au cou.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"CIT007-plus-4","zone":"CIT007","pole":"+","palier":4,"nom":"Le Compte des perles","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 14 dégâts à la cible. Puis la garde de la cible tombe à 0 ; vos alliés gagnent 12 de garde ; vos alliés se soignent de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",14]]],["briseGarde","cible"],["garde","allies",12],["soin","allies",3],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Perce-garde","Garde","Soin","Condition","Prix"],
 "ambiance":"Le soir, on compte les perles à voix haute, cordon par cordon, et l'azmach écoute sans rien dire.",
 "budget":"25,9 / 28 (−7 %)"},
{"id":"CIT007-plus-5","zone":"CIT007","pole":"+","palier":5,"nom":"Le Corail des marchands","cout":2,"cible":1,
 "effet":"16 dégâts à la cible ; riposte 2 jusqu'à votre prochain tour ; +2 mana de Feu ; le héros gagne 8 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",16],["riposte",2],["mana","Feu",2],["garde","heros",8],["ennemiGarde",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Riposte","Garde","Mana","Prix"],
 "ambiance":"Les marchands de la côte vendent le corail à la branche ; Tesfaye achète tout, même les branches cassées.",
 "budget":"30,4 / 32 (−5 %)"},
{"id":"CIT007-plus-6","zone":"CIT007","pole":"+","palier":6,"nom":"Les Cordons qui traînent","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à tous les ennemis. Puis la garde de la cible tombe à 0 ; vos alliés gagnent 12 de garde ; +2 mana de Feu ; riposte 3 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","tous",6]]],["briseGarde","cible"],["garde","allies",12],["mana","Feu",2],["riposte",3],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Pôle +","Dégâts","Perce-garde","Riposte","Garde","Mana","Condition","Prix"],
 "ambiance":"Les cordons s'allongent tant qu'on les porte en écharpe, puis en ceinture, et enfin on marche dessus.",
 "budget":"33 / 36 (−8 %)"},
{"id":"CIT007-plus7","zone":"CIT007","pole":"+","palier":7,"nom":"Le Récif dans la cour","cout":2,"cible":1,
 "effet":"Le fort devient récif. 20 à la cible ; 6 à tous ; riposte 8. Pose Abîme. Si Sceau (consommée) : riposte 2 ; 18 à la cible ; alliés soignés de 6. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",20],["deg","tous",6],["riposte",8],["pose","Abîme"],["reveil","Sceau",true,[["riposte",2],["deg","cible",18],["soin","allies",6]]],["prixDefausse",1]],
 "tags":["Citadelle","Feu","Forme ultime +7","Dégâts","Riposte","Soin","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Le corail s'entasse dans la cour ; les enfants y grimpent, et la garnison ne sait plus où marcher.",
 "budget":"46,2 sans combo ; réveil +31 (67 %)"}
]
```

---

## 2. Hout-Ger, la Crypte des Chantres (DON088) — Donjon · Steppe · Vent · Égyptienne

Forme du récit : **document, l'enseignement** (la sagesse d'un père à son fils, à l'égyptienne), puis une ligne du narrateur. Recette du −7 : le silence (le couloir muet, les puits ouverts) ; du +7 : la foule (bergers, pilleurs et chèvres qui chantent en cercle).

**Silence (−)** : le chantre qui tousse → la dalle qui s'ouvre → la lampe éteinte → le couloir muet → le pilleur qui se tait → le puits sous la dalle → le Silence du seigneur. Fil mécanique : gros coups du Donjon (le piège qui frappe celui qui se tait), marque et brûlure en appoint, crochet « la cible s'apprête à piétiner » ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 5, brûlure 4, marque 4, garde du héros 2, dégâts à tous 2 ; crochet « la cible s'apprête à piétiner » sur 2 ; prix sur 6 cartes (PV 4, défausse 2).

**Chant (+)** : la leçon d'Iny → la voix qui tient → le chant des bergers → le refrain du couloir → les chèvres qui reprennent → la tombe qui chante → Toute la steppe chante. Fil mécanique : affaiblissement (le chant qui endort les pièges et les bras), soin du héros en appoint, hésitation et riposte en touche, crochet « vous avez déjà joué une autre carte ce tour » (le chant qui continue) ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, soin du héros 4, dégâts ciblés 4, exil 2, hésitation 2, riposte 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 ; prix sur 6 cartes (soin ennemi 4, exil 2).

```json
{"fiche":"DON088","nom":"Hout-Ger, la Crypte des Chantres",
 "recit":"Commencement de l'enseignement que fit le chantre Iny pour son fils Pawah. Ne te tais jamais dans le couloir du seigneur Nakht. Ses pièges dorment tant qu'on chante, et s'éveillent au silence : ton grand-père s'est tu pour tousser. Chante quand tu as soif, chante quand la lampe meurt. Les morts paient d'avance, et ils ne reprennent rien. Fin de l'enseignement. Pawah l'a bien retenu. Il chante aujourd'hui dans le couloir pour les pilleurs, qui paient mieux que les morts, et les pièges dorment pour eux aussi.",
 "pal":["Plus un chant : le couloir est muet, les dalles ouvertes sur des puits, et le vent de la steppe passe sans bruit sur les pilleurs couchés.","Les chantres se relaient moins souvent ; des dalles se soulèvent d'elles-mêmes, et des traces de pas s'arrêtent net au milieu du couloir.","Une tombe basse dans l'herbe rase, une porte de pierre, et un couloir où une voix chante jour et nuit pour un mort qu'on ne voit pas.","Les voix se multiplient sous terre ; le chant sort par les fentes du tumulus, et les bergers le reprennent en menant leurs chèvres.","Toute la steppe chante : bergers, pilleurs et chèvres en cercle autour de la tombe ouverte, et les pièges dorment sous les dalles."],
 "pm":"Silence","pp":"Chant"}
```

```json
[
{"id":"DON088-moins-1","zone":"DON088","pole":"-","palier":1,"nom":"Le Chantre qui tousse","cout":1,"cible":1,
 "effet":"9 dégâts à la cible ; la cible brûle : 1 par tour pendant 2 tours. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",9],["brulure","cible",1,2],["prixPV",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Brûlure","Prix"],
 "ambiance":"Le grand-père de Pawah s'est tu pour tousser ; la dalle s'est ouverte avant la fin de la toux.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON088-moins-2","zone":"DON088","pole":"-","palier":2,"nom":"La Dalle qui s'ouvre","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Puis 8 dégâts à la cible ; la cible est marquée : +1 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["deg","cible",10]]],["deg","cible",8],["vulnerable","cible",1],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Marque","Condition","Prix"],
 "ambiance":"La dalle bascule sans un grincement ; on n'entend que le souffle de celui qui tombe, puis plus rien.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON088-moins-3","zone":"DON088","pole":"-","palier":3,"nom":"La Lampe éteinte","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; le héros gagne 6 de garde ; la cible brûle : 2 par tour pendant 2 tours.",
 "ops":[["deg","cible",18],["garde","heros",6],["brulure","cible",2,2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Brûlure","Garde"],
 "ambiance":"Quand la lampe meurt, le chantre doit chanter dans le noir ; certains ont préféré se taire.",
 "budget":"26,8 / 24 (+12 %)"},
{"id":"DON088-moins-4","zone":"DON088","pole":"-","palier":4,"nom":"Le Couloir muet","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, la cible est marquée : +3 par coup reçu. Puis 7 dégâts à tous les ennemis ; la cible brûle : 2 par tour pendant 4 tours. Prix : le héros perd 2 PV.",
 "ops":[["si","pietine",[["vulnerable","cible",3]]],["deg","tous",7],["brulure","cible",2,4],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Brûlure","Marque","Condition","Prix"],
 "ambiance":"Les pilleurs avancent pieds nus, sans un mot, et comptent les dalles du bout des orteils.",
 "budget":"25,9 / 28 (−7 %)"},
{"id":"DON088-moins-5","zone":"DON088","pole":"-","palier":5,"nom":"Le Pilleur qui se tait","cout":2,"cible":1,
 "effet":"24 dégâts à la cible ; la cible est marquée : +2 par coup reçu ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",24],["vulnerable","cible",2],["garde","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Marque","Garde","Prix"],
 "ambiance":"Le pilleur a mis un chiffon dans sa bouche pour ne pas crier ; le piège n'attendait pas de cri.",
 "budget":"31,8 / 32 (−1 %)"},
{"id":"DON088-moins-6","zone":"DON088","pole":"-","palier":6,"nom":"Le Puits sous la dalle","cout":2,"cible":0,
 "effet":"3 coups de 8 au hasard ; tous les ennemis sont marqués : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["deg","hasard",8,3],["vulnerable","tous",2],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Marque","Prix"],
 "ambiance":"Au fond du puits, des lampes, des sandales et des chiffons, et le silence de ceux qui les portaient.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"DON088-moins7","zone":"DON088","pole":"-","palier":7,"nom":"Le Silence du seigneur","cout":2,"cible":1,
 "effet":"Plus personne ne chante. 40 à la cible ; la cible brûle (3 par tour, 3 tours). Pose Sang. Si Givre (consommée) : 22 à la cible ; 3 à tous. Prix : héros −3 PV.",
 "ops":[["deg","cible",40],["brulure","cible",3,3],["pose","Sang"],["reveil","Givre",true,[["deg","cible",22],["deg","tous",3]]],["prixPV",3]],
 "tags":["Donjon","Vent","Forme ultime −7","Dégâts","Brûlure","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Le seigneur Nakht n'a plus de chantre ; sa tombe se tait, et ce qui y entre se tait aussi.",
 "budget":"46 sans combo ; réveil +28,6 (62 %)"},
{"id":"DON088-plus-1","zone":"DON088","pole":"+","palier":1,"nom":"La Leçon d'Iny","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 2 ; le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","cible",2],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Affaiblissement","Soin","Prix"],
 "ambiance":"Iny fait répéter son fils dans le couloir, jusqu'à ce que la voix tienne même la bouche sèche.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON088-plus-2","zone":"DON088","pole":"+","palier":2,"nom":"La Voix qui tient","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 6 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; le héros se soigne de 6. Prix : cette carte s'exile.",
 "ops":[["si","cartesJouees",[["deg","cible",6]]],["affaiblit","cible",2],["soin","heros",6],["exil"]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"Pawah chante en mangeant, chante en buvant, et a appris à respirer au milieu d'un mot.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON088-plus-3","zone":"DON088","pole":"+","palier":3,"nom":"Le Chant des bergers","cout":2,"cible":1,
 "effet":"L'attaque de chaque ennemi baisse de 2 ; la cible hésite ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["affaiblit","tous",2],["hesite","cible"],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Affaiblissement","Contrôle","Soin","Prix"],
 "ambiance":"Le chant sort par les fentes du tumulus ; les bergers de la steppe le reprennent sans savoir pourquoi.",
 "budget":"24,2 / 24 (+1 %)"},
{"id":"DON088-plus-4","zone":"DON088","pole":"+","palier":4,"nom":"Le Refrain du couloir","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, riposte 4 jusqu'à votre prochain tour. Puis l'attaque de la cible baisse de 4 ; riposte 5 jusqu'à votre prochain tour.",
 "ops":[["si","cartesJouees",[["riposte",4]]],["affaiblit","cible",4],["riposte",5]],
 "tags":["Donjon","Vent","Pôle +","Affaiblissement","Riposte","Condition"],
 "ambiance":"Le refrain tourne dans le couloir et revient sur lui-même, comme un chien qui se couche.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON088-plus-5","zone":"DON088","pole":"+","palier":5,"nom":"Les Chèvres qui reprennent","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; l'attaque de la cible baisse de 3 ; le héros se soigne de 9. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",14],["affaiblit","cible",3],["soin","heros",9],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Affaiblissement","Soin","Prix"],
 "ambiance":"Les chèvres s'arrêtent de brouter quand le chant passe, et certaines, dit-on, bêlent juste.",
 "budget":"30 / 32 (−6 %)"},
{"id":"DON088-plus-6","zone":"DON088","pole":"+","palier":6,"nom":"La Tombe qui chante","cout":2,"cible":1,
 "effet":"16 dégâts à la cible ; l'attaque de la cible baisse de 4 ; tous les ennemis hésitent. Prix : cette carte s'exile.",
 "ops":[["deg","cible",16],["affaiblit","cible",4],["hesite","tous"],["exil"]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Affaiblissement","Contrôle","Exil","Prix"],
 "ambiance":"La tombe chante seule, à présent ; les pilleurs l'entendent de loin et pressent le pas pour l'écouter.",
 "budget":"34 / 36 (−6 %)"},
{"id":"DON088-plus7","zone":"DON088","pole":"+","palier":7,"nom":"Toute la steppe chante","cout":2,"cible":1,
 "effet":"Toute la steppe chante. 20 à la cible ; chaque ennemi −3 d'attaque ; riposte 5. Pose Racine. Si Sang (consommée) : cible −3 d'attaque ; 14 à la cible ; héros +10 de garde. Prix : ennemis soignés de 2.",
 "ops":[["deg","cible",20],["affaiblit","tous",3],["riposte",5],["pose","Racine"],["reveil","Sang",true,[["affaiblit","cible",3],["deg","cible",14],["garde","heros",10]]],["ennemiSoin",2]],
 "tags":["Donjon","Vent","Forme ultime +7","Dégâts","Affaiblissement","Riposte","Garde","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Bergers, pilleurs et chèvres chantent en cercle autour de la tombe ouverte, et les dalles ne bougent plus.",
 "budget":"45,8 sans combo ; réveil +31 (68 %)"}
]
```

---

## 3. Le Tinkuy de Hanaq-Marka (ASS034) — Assemblée · Îles flottantes · Vent · Inca

Forme du récit : le remède voté (récit, sans document ni dialogue). Recette du −7 : la démesure (les îles qui se cognent, les malades qui sautent au-dessus du vide) ; du +7 : l'ordre (les îles nouées en grappe, qui dérivent ensemble où le vent les mène).

**Folie (−)** : le saut du malade → la loi des sauteurs → les cordelettes emmêlées → la loi des ponts coupés → l'île qui tournoie → le rire au-dessus du vide → les Îles folles. Fil mécanique : Lois de riposte (celui qu'on pousse rend le coup), coups au hasard et dégâts à tous en appoint, crochet « la cible a de la garde » (on pousse d'abord celui qui se tient bien droit) ; prix : PV. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, coups au hasard 4, dégâts à tous 3, garde du héros 2, dégâts ciblés 2, soin du héros 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 6 cartes (PV 6).

**Raison (+)** : la loi du nœud → les cordelettes du tinkuy → la loi des cordes de laine → Wayllu chez les tisserands → le compteur des îles → la loi du mal des nuées → les Îles liées. Fil mécanique : exil (la carte part avec le malade qu'on mène sur l'île du bout), pioche et garde du héros en appoint, crochet « vous avez déjà joué une autre carte ce tour » ; prix : exil, sur 6 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 6, pioche 4, dégâts ciblés 4, garde du héros 4, garde des alliés 2, soin des alliés 2, marque 2, dégâts à tous 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 2 ; prix sur 7 cartes (exil 6, défausse 1).

```json
{"fiche":"ASS034","nom":"Le Tinkuy de Hanaq-Marka",
 "recit":"Sur les îles de Hanaq-Marka, le mal des nuées prend ceux qui regardent trop longtemps en bas. Ils rient, ils sautent d'une île à l'autre, et certains ne retombent sur rien. Le tinkuy a longtemps cherché un remède. Il a voté qu'on lierait toutes les îles par des cordes de laine tressée, pour qu'aucune ne s'éloigne des autres. Le tisserand Wayllu a tressé les cordes pendant une saison entière. Depuis, les îles ne se séparent plus. Elles dérivent ensemble, et chaque matin le tinkuy vote la direction qu'elles ont prise.",
 "pal":["Les îles se cognent et tournoient ; des malades sautent de l'une à l'autre en riant au-dessus du vide, et les cordelettes pendent, dénouées, dans le vent.","Les cordelettes s'emmêlent ; les îles dérivent chacune de son côté, et les ponts de corde restent tendus vers des îles parties.","Des îles de terre et de roseau flottent dans le ciel, reliées par des ponts de corde ; au centre, un cercle de pierres où siège le tinkuy.","Les cordes de laine se resserrent ; les îles se touchent presque, et l'on mène les malades sur l'île du bout de la corde.","Les îles ne se quittent plus, nouées en grappe dans le ciel ; elles dérivent ensemble où le vent veut, et le tinkuy vote après coup."],
 "pm":"Folie","pp":"Raison"}
```

```json
[
{"id":"ASS034-moins-1","zone":"ASS034","pole":"-","palier":1,"nom":"Le Saut du malade","cout":1,"cible":0,
 "effet":"Riposte 3 jusqu'à votre prochain tour ; 2 coups de 2 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["riposte",3],["deg","hasard",2,2],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Riposte","Prix"],
 "ambiance":"Le malade saute sans regarder et retombe sur une île ; il dit que ce sont elles qui viennent.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS034-moins-2","zone":"ASS034","pole":"-","palier":2,"nom":"La Loi des sauteurs","cout":1,"cible":1,
 "effet":"Loi : si la cible a de la garde, riposte 3 jusqu'à votre prochain tour. Puis 3 dégâts à tous les ennemis ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["riposte",3]]],["deg","tous",3],["riposte",2],["prixPV",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Le tinkuy a voté qu'on ne retiendrait plus les sauteurs : ceux qui tombent n'ont pas voté contre.",
 "budget":"12,6 / 12,5 (+1 %)"},
{"id":"ASS034-moins-3","zone":"ASS034","pole":"-","palier":3,"nom":"Les Cordelettes emmêlées","cout":2,"cible":0,
 "effet":"Riposte 5 jusqu'à votre prochain tour ; 3 coups de 3 au hasard ; le héros gagne 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["riposte",5],["deg","hasard",3,3],["garde","heros",6],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Riposte","Garde","Prix"],
 "ambiance":"Les nœuds de la veille se mêlent à ceux du jour ; le compteur tire, et tout vient avec.",
 "budget":"21,8 / 24 (−9 %)"},
{"id":"ASS034-moins-4","zone":"ASS034","pole":"-","palier":4,"nom":"La Loi des ponts coupés","cout":2,"cible":1,
 "effet":"Loi : si la cible a de la garde, 5 dégâts à tous les ennemis. Puis 6 dégâts à la cible ; riposte 6 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","tous",5]]],["deg","cible",6],["riposte",6],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Quand une île part trop loin, on coupe le pont avant qu'il ne tire les autres.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ASS034-moins-5","zone":"ASS034","pole":"-","palier":5,"nom":"L'Île qui tournoie","cout":2,"cible":0,
 "effet":"5 dégâts à tous les ennemis ; riposte 7 jusqu'à votre prochain tour ; le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["deg","tous",5],["riposte",7],["soin","heros",6],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Riposte","Soin","Prix"],
 "ambiance":"L'île tourne sur elle-même comme une feuille dans un ruisseau ; ses habitants ont appris à manger debout.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS034-moins-6","zone":"ASS034","pole":"-","palier":6,"nom":"Le Rire au-dessus du vide","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, riposte 6 jusqu'à votre prochain tour. Puis 3 coups de 5 au hasard ; le héros gagne 10 de garde ; le héros se soigne de 6.",
 "ops":[["si","cibleGarde",[["riposte",6]]],["deg","hasard",5,3],["garde","heros",10],["soin","heros",6]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Riposte","Garde","Soin","Condition"],
 "ambiance":"Les sauteurs rient en l'air, toujours ; on n'a jamais su si c'était de joie ou de peur.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ASS034-moins7","zone":"ASS034","pole":"-","palier":7,"nom":"Les Îles folles","cout":2,"cible":1,
 "effet":"Les îles n'obéissent plus. 10 à la cible ; riposte 10 ; 3 coups de 6 au hasard. Pose Givre. Si Racine (consommée) : riposte 6 ; 3 coups de 4 au hasard ; 6 à la cible. Prix : héros −3 PV.",
 "ops":[["deg","cible",10],["riposte",10],["deg","hasard",6,3],["pose","Givre"],["reveil","Racine",true,[["riposte",6],["deg","hasard",4,3],["deg","cible",6]]],["prixPV",3]],
 "tags":["Assemblée","Vent","Forme ultime −7","Dégâts","Riposte","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Les îles se cognent avec un bruit de roseaux brisés, et les malades sautent en riant.",
 "budget":"45 sans combo ; réveil +30 (67 %)"},
{"id":"ASS034-plus-1","zone":"ASS034","pole":"+","palier":1,"nom":"La Loi du nœud","cout":1,"cible":1,
 "effet":"Loi : 4 dégâts à la cible ; piochez 1 carte ; le héros gagne 6 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","cible",4],["pioche",1],["garde","heros",6],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Dégâts","Garde","Pioche","Exil","Prix"],
 "ambiance":"Chaque île a son nœud sur la cordelette du tinkuy ; quand une île s'éloigne, on serre son nœud.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ASS034-plus-2","zone":"ASS034","pole":"+","palier":2,"nom":"Les Cordelettes du tinkuy","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, piochez 1 carte. Puis 6 dégâts à la cible ; le héros gagne 6 de garde ; vos alliés gagnent 3 de garde. Prix : cette carte s'exile.",
 "ops":[["si","cartesJouees",[["pioche",1]]],["deg","cible",6],["garde","heros",6],["garde","allies",3],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"Les cordelettes pendent au mur du tinkuy, et on les relit à voix haute avant chaque vote.",
 "budget":"13,4 / 12,5 (+7 %)"},
{"id":"ASS034-plus-3","zone":"ASS034","pole":"+","palier":3,"nom":"La Loi des cordes de laine","cout":2,"cible":0,
 "effet":"Loi : vos alliés se soignent de 10 ; le héros gagne 12 de garde. Prix : cette carte s'exile.",
 "ops":[["soin","allies",10],["garde","heros",12],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Garde","Soin","Exil","Prix"],
 "ambiance":"Le tinkuy a voté de lier toutes les îles ; on a tondu les lamas jusqu'à la peau.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ASS034-plus-4","zone":"ASS034","pole":"+","palier":4,"nom":"Wayllu chez les tisserands","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; piochez 2 cartes ; la cible est marquée : +2 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","cible",14],["pioche",2],["vulnerable","cible",2],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Marque","Pioche","Exil","Prix"],
 "ambiance":"Wayllu tresse du matin au soir, assis sur le bord de l'île, les pieds au-dessus des nuages.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS034-plus-5","zone":"ASS034","pole":"+","palier":5,"nom":"Le Compteur des îles","cout":2,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, le héros gagne 10 de garde. Puis vos alliés se soignent de 10 ; 6 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cartesJouees",[["garde","heros",10]]],["soin","allies",10],["deg","tous",6],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Le compteur passe de corde en corde, et note les malades avant les naissances.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ASS034-plus-6","zone":"ASS034","pole":"+","palier":6,"nom":"La Loi du mal des nuées","cout":2,"cible":1,
 "effet":"Loi : 20 dégâts à la cible ; piochez 2 cartes ; la cible est marquée : +3 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","cible",20],["pioche",2],["vulnerable","cible",3],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Dégâts","Marque","Pioche","Exil","Prix"],
 "ambiance":"Le tinkuy a voté qu'on mènerait les malades sur l'île du bout de la corde, la plus petite.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS034-plus7","zone":"ASS034","pole":"+","palier":7,"nom":"Les Îles liées","cout":2,"cible":0,
 "effet":"Les îles ne se quittent plus. 10 à tous ; alliés +12 de garde ; chaque ennemi −2 d'attaque. Pose Sceau. Si Racine (consommée) : riposte 3 ; 8 à tous ; alliés +6 de garde. Prix : cette carte s'exile.",
 "ops":[["deg","tous",10],["garde","allies",12],["affaiblit","tous",2],["pose","Sceau"],["reveil","Racine",true,[["riposte",3],["deg","tous",8],["garde","allies",6]]],["exil"]],
 "tags":["Assemblée","Vent","Forme ultime +7","Dégâts","Affaiblissement","Riposte","Garde","Exil","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Les îles dérivent ensemble, nouées en grappe, et le tinkuy se réunit chaque matin pour savoir où il est.",
 "budget":"46,6 sans combo ; réveil +30,8 (66 %)"}
]
```

---

## 4. Le Šībūtum de Karān-Ḫursag (ASS110) — Assemblée · Volcan · Feu · Mésopotamienne

Forme du récit : **document, la lettre au roi** (« Dis à mon seigneur… »). Recette du −7 : la ruine (les vignes arrachées, les bassins à la porte) ; du +7 : la démesure (la vigne jusqu'au cratère, la vendange toute l'année).

**Sang (−)** : la loi de la coupe à la porte → le bassin des anciens → la loi du sang par maison → Šamaš-nāṣir donne le sien → le bétail à saigner → la loi des mains sur la porte → la Montagne abreuvée. Pôle sans famille principale, **colonne vertébrale** : crochet « la Garde du héros est levée » sur 4 cartes, nourri par la garde du héros que posent 4 autres cartes (on verse, puis on tient la porte) ; prix en PV sur les 7 cartes, riposte et vol de vie en appoint, dégâts à tous sur 3 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 4, dégâts ciblés 4, vol de vie 4, riposte 3, dégâts à tous 3, soin du héros 2, affaiblissement 2, coups au hasard 2 ; crochet « la Garde du héros est levée » sur 4 ; prix sur 7 cartes (PV 7).

**Sève (+)** : le cep sur la cendre → la loi du vin nouveau → la vendange qui revient → la loi du vin versé → le vigneron Abum → les terrasses jusqu'au cratère → la Vigne sur le cratère. Place rare de l'**écho**, tenue au plafond moteur de 4 cartes (leçon 2 du lot 5) : les 3 cartes sans écho sont les grosses brûlures, faites pour être doublées. Colonne vertébrale : brûlure sur 4 cartes et crochet « la cible brûle déjà » sur 4 ; soin des alliés en appoint ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : écho 4, soin des alliés 4, dégâts ciblés 4, brûlure 4, exil 3, garde du héros 2, riposte 2 ; crochet « la cible brûle déjà » sur 4 ; prix sur 7 cartes (soin ennemi 4, exil 3).

```json
{"fiche":"ASS110","nom":"Le Šībūtum de Karān-Ḫursag",
 "recit":"Dis à mon seigneur : ainsi parle Šamaš-nāṣir, ton serviteur. La montagne fume de nouveau au-dessus des vignes. Les anciens du šībūtum se sont assis à la porte et ont décidé que chaque maison lui verserait du sang. J'ai donné le mien avant tous les autres. Les vignerons, eux, ont versé leur vin nouveau dans la fente, et la fumée s'est couchée aussi. Que mon seigneur me dise lequel, du sang ou du vin, a calmé la montagne. En attendant, nous versons l'un et l'autre. Le vin manque déjà ; le sang, pas encore.",
 "pal":["Les vignes sont arrachées, la porte des anciens est couverte de mains sombres, et chaque maison a son bassin où l'on verse à tour de rôle.","Les vignerons vendent leurs ceps pour du bétail à saigner ; sur les marches de la porte, des bassins de pierre sèchent en croûtes.","Un bourg de briques sur le flanc d'un volcan qui fume, des vignes en terrasses sur la cendre, et les anciens assis à la porte.","Les terrasses gagnent la pente jusqu'aux fumerolles ; le vin nouveau coule dans les fentes, et la fumée se couche sur les ceps.","La vigne a couvert le volcan jusqu'au cratère ; les grappes pendent au-dessus des fumerolles, et le bourg vendange toute l'année."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"ASS110-moins-1","zone":"ASS110","pole":"-","palier":1,"nom":"La Loi de la coupe à la porte","cout":1,"cible":0,
 "effet":"Loi : si la Garde du héros est levée, riposte 3 jusqu'à votre prochain tour. Puis le héros gagne 5 de garde ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["riposte",3]]],["garde","heros",5],["riposte",2],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Riposte","Garde","Condition","Prix"],
 "ambiance":"Chaque maison passe à la porte avec sa coupe ; les anciens regardent le niveau, pas le visage.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS110-moins-2","zone":"ASS110","pole":"-","palier":2,"nom":"Le Bassin des anciens","cout":1,"cible":1,
 "effet":"Le héros se soigne de 5 ; le héros gagne 4 de garde ; la cible hésite. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",5],["garde","heros",4],["hesite","cible"],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Contrôle","Garde","Soin","Prix"],
 "ambiance":"Le bassin de pierre ne se vide jamais ; le fond a pris une couleur qu'on ne lave plus.",
 "budget":"12,2 / 12,5 (−2 %)"},
{"id":"ASS110-moins-3","zone":"ASS110","pole":"-","palier":3,"nom":"La Loi du sang par maison","cout":2,"cible":1,
 "effet":"Loi : si la Garde du héros est levée, 5 dégâts à tous les ennemis. Puis 10 dégâts à la cible ; tous ces dégâts en vol de vie. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["deg","tous",5]]],["deg","cible",10],["volVie"],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Le šībūtum a voté que chaque maison verserait, les grandes comme les petites ; les petites ont plus de bras.",
 "budget":"21,2 / 24 (−11 %)"},
{"id":"ASS110-moins-4","zone":"ASS110","pole":"-","palier":4,"nom":"Šamaš-nāṣir donne le sien","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; le héros gagne 10 de garde ; l'attaque de la cible baisse de 2 ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",12],["garde","heros",10],["affaiblit","cible",2],["riposte",3],["prixPV",3]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"Le gouverneur a tendu le bras avant tous les autres, devant témoins, et l'a écrit au roi le soir.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ASS110-moins-5","zone":"ASS110","pole":"-","palier":5,"nom":"Le Bétail à saigner","cout":2,"cible":0,
 "effet":"Si la Garde du héros est levée, le héros se soigne de 10. Puis 6 dégâts à tous les ennemis ; tous ces dégâts en vol de vie ; riposte 4 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["soin","heros",10]]],["deg","tous",6],["volVie"],["riposte",4],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Riposte","Vol de vie","Soin","Condition","Prix"],
 "ambiance":"Les vignerons ont vendu leurs ceps pour des brebis ; on les saigne à la porte, puis on les mange.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ASS110-moins-6","zone":"ASS110","pole":"-","palier":6,"nom":"La Loi des mains sur la porte","cout":2,"cible":1,
 "effet":"Loi : si la Garde du héros est levée, 16 dégâts à la cible. Puis l'attaque de la cible baisse de 3 ; 3 coups de 4 au hasard ; tous ces dégâts en vol de vie. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["deg","cible",16]]],["affaiblit","cible",3],["deg","hasard",4,3],["volVie"],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Affaiblissement","Vol de vie","Condition","Prix"],
 "ambiance":"Ceux qui ont versé posent la main sur la porte ; les plus vieilles mains s'effacent sous les nouvelles.",
 "budget":"37 / 36 (+3 %)"},
{"id":"ASS110-moins7","zone":"ASS110","pole":"-","palier":7,"nom":"La Montagne abreuvée","cout":2,"cible":1,
 "effet":"La montagne boit à la porte. 6 à tous ; 3 coups de 7 au hasard ; tout en vol de vie. Pose Braise. Si Sang (consommée) : héros +8 de garde ; 22 à la cible. Prix : héros −4 PV.",
 "ops":[["deg","tous",6],["deg","hasard",7,3],["volVie"],["pose","Braise"],["reveil","Sang",true,[["garde","heros",8],["deg","cible",22]]],["prixPV",4]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Vol de vie","Garde","Combo","Pose Braise","Réveil Sang","Prix"],
 "ambiance":"La fumée se couche, la porte est rouge du seuil au linteau, et les anciens parlent déjà de la suite.",
 "budget":"47,3 sans combo ; réveil +28,4 (60 %)"},
{"id":"ASS110-plus-1","zone":"ASS110","pole":"+","palier":1,"nom":"Le Cep sur la cendre","cout":1,"cible":0,
 "effet":"La prochaine carte de zone de ce tour compte double ; vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["echo"],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Soin","Écho","Prix"],
 "ambiance":"Le cep pousse dans la cendre, tordu comme un poing, et donne un vin noir qui sent la fumée.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS110-plus-2","zone":"ASS110","pole":"+","palier":2,"nom":"La Loi du vin nouveau","cout":1,"cible":1,
 "effet":"Loi : si la cible brûle déjà, 10 dégâts à la cible. Puis la cible brûle : 3 par tour pendant 3 tours. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["deg","cible",10]]],["brulure","cible",3,3],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Brûlure","Condition","Exil","Prix"],
 "ambiance":"Le šībūtum a voté que le vin nouveau irait à la montagne avant les hommes ; personne n'a voté contre.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS110-plus-3","zone":"ASS110","pole":"+","palier":3,"nom":"La Vendange qui revient","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, vos alliés se soignent de 6. Puis 14 dégâts à la cible ; la prochaine carte de zone de ce tour compte double. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["soin","allies",6]]],["deg","cible",14],["echo"],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Soin","Écho","Condition","Prix"],
 "ambiance":"Sur la cendre chaude, la vigne donne à la fin de l'été, puis encore aux froids, plus sucré.",
 "budget":"22,5 / 24 (−6 %)"},
{"id":"ASS110-plus-4","zone":"ASS110","pole":"+","palier":4,"nom":"La Loi du vin versé","cout":2,"cible":1,
 "effet":"Loi : si la cible brûle déjà, 12 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 4 tours ; le héros gagne 8 de garde. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["deg","cible",12]]],["brulure","tous",2,4],["garde","heros",8],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Brûlure","Garde","Condition","Exil","Prix"],
 "ambiance":"On verse le vin dans la fente ; la vapeur sent la vendange, et les anciens font semblant de rien.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS110-plus-5","zone":"ASS110","pole":"+","palier":5,"nom":"Le Vigneron Abum","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; la prochaine carte de zone de ce tour compte double ; vos alliés se soignent de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",12],["echo"],["soin","allies",8],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Soin","Écho","Prix"],
 "ambiance":"Abum a planté plus haut que tous les autres, au bord des fumerolles ; ses grappes mûrissent par-dessous.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS110-plus-6","zone":"ASS110","pole":"+","palier":6,"nom":"Les Terrasses jusqu'au cratère","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, riposte 6 jusqu'à votre prochain tour. Puis la cible brûle : 5 par tour pendant 4 tours ; le héros gagne 10 de garde. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["riposte",6]]],["brulure","cible",5,4],["garde","heros",10],["exil"]],
 "tags":["Assemblée","Feu","Pôle +","Brûlure","Riposte","Garde","Condition","Exil","Prix"],
 "ambiance":"Les terrasses montent jusqu'aux fumerolles ; les murets sont chauds au toucher, et les lézards n'en partent plus.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ASS110-plus7","zone":"ASS110","pole":"+","palier":7,"nom":"La Vigne sur le cratère","cout":2,"cible":1,
 "effet":"La vigne couvre la montagne. La prochaine carte de zone compte double ; tous brûlent (3 par tour, 3 tours) ; alliés soignés de 16. Pose Racine. Si Braise (consommée) : la cible brûle (4 par tour, 4 tours) ; riposte 6. Prix : ennemis soignés de 2.",
 "ops":[["echo"],["brulure","tous",3,3],["soin","allies",16],["pose","Racine"],["reveil","Braise",true,[["brulure","cible",4,4],["riposte",6]]],["ennemiSoin",2]],
 "tags":["Assemblée","Feu","Forme ultime +7","Brûlure","Riposte","Soin","Écho","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Les grappes pendent au-dessus du cratère ; le bourg vendange toute l'année, et ne verse plus rien à la porte.",
 "budget":"45,8 sans combo ; réveil +28 (61 %)"}
]
```

---

## 5. Le Guruš de Qišat-Kuṣṣi (ASS015) — Assemblée · Forêt boréale · Glace · Mésopotamienne

Forme du récit : le vote qui ne change rien (récit). Recette du −7 : l'ordre (chaque tronc et chaque homme scellés, l'abattage en rangs) ; du +7 : le vide (le camp abandonné, les haches dans les souches, les pistes partout).

**Tyrannie (−)** : la loi du sceau sur l'écorce → Lu-Nanna marque → la tablette des comptes → la loi du bois marqué → les feux éteints tôt → la loi de l'épaule scellée → le Sceau partout. Fil mécanique : Lois de marque (le sceau du surveillant), affaiblissement et exil en appoint, crochet « il ne reste qu'un ennemi » ; prix : défausse et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, affaiblissement 4, dégâts ciblés 4, exil 3, riposte 2, coups au hasard 2, garde du héros 2 ; crochet « il ne reste qu'un ennemi » sur 2 ; prix sur 6 cartes (défausse 3, exil 3).

**Liberté (+)** : la loi du guruš → la piste vers le sud → les chants autour du feu → la loi de la tablette brisée → le vote sous la neige → la loi des haches dans les souches → la Forêt sans maîtres. Fil mécanique : Lois de pioche (chacun choisit sa route), mana de Glace et hésitation en appoint, crochet « c'est au moins votre troisième carte ce tour » ; prix : PV, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, mana 4, dégâts ciblés 4, hésitation 3, soin du héros 2, dégâts à tous 2 ; crochet « c'est au moins votre troisième carte ce tour » sur 2 ; prix sur 5 cartes (PV 5).

```json
{"fiche":"ASS015","nom":"Le Guruš de Qišat-Kuṣṣi",
 "recit":"On a envoyé les bûcherons d'Ur couper des pins dans une forêt si froide que la sève y gèle. Le surveillant Lu-Nanna marque de son sceau chaque arbre à abattre. L'assemblée des jeunes hommes, le guruš, s'est réunie sous la neige et a voté qu'ils étaient libres de rentrer. Les anciens ont approuvé. Lu-Nanna a scellé la tablette lui-même, avec soin. Ils sont toujours là. La route du sud traverse la forêt, et c'est Lu-Nanna qui marque les arbres qu'on abat pour l'ouvrir.",
 "pal":["Chaque tronc porte le sceau du surveillant, et chaque homme aussi, à l'épaule ; on abat en rangs, dans la neige, et personne ne parle.","Les sceaux se multiplient sur les écorces ; les tablettes de comptes s'empilent sous un auvent, et les feux s'éteignent tôt.","Une forêt de pins sous la neige, un camp de bûcherons en briques crues apportées du sud, et une clairière où s'assied le guruš.","Des pistes s'ouvrent dans la neige vers le sud ; on chante autour des feux, et des tablettes brisées gisent sous l'auvent.","Le camp est vide, les haches plantées dans les souches ; des pistes partent dans toutes les directions, et la neige les recouvre une à une."],
 "pm":"Tyrannie","pp":"Liberté"}
```

```json
[
{"id":"ASS015-moins-1","zone":"ASS015","pole":"-","palier":1,"nom":"La Loi du sceau sur l'écorce","cout":1,"cible":1,
 "effet":"Loi : la cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 1 ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",2],["affaiblit","cible",1],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Marque","Affaiblissement","Riposte","Prix"],
 "ambiance":"Le sceau de Lu-Nanna mord l'écorce gelée ; l'arbre marqué tombera, et son bûcheron aussi, un jour.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS015-moins-2","zone":"ASS015","pole":"-","palier":2,"nom":"Lu-Nanna marque","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 8 dégâts à la cible. 4 dégâts à la cible ; la cible est marquée : +2 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",8]]],["deg","cible",4],["vulnerable","cible",2],["exil"]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Condition","Exil","Prix"],
 "ambiance":"Le surveillant ne crie jamais ; il appuie son sceau, souffle dessus, et passe à l'arbre suivant.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS015-moins-3","zone":"ASS015","pole":"-","palier":3,"nom":"La Tablette des comptes","cout":2,"cible":1,
 "effet":"Tous les ennemis sont marqués : +1 par coup reçu ; l'attaque de la cible baisse de 2 ; piochez 2 cartes ; 3 coups de 2 au hasard. Prix : cette carte s'exile.",
 "ops":[["vulnerable","tous",1],["affaiblit","cible",2],["pioche",2],["deg","hasard",2,3],["exil"]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Affaiblissement","Pioche","Exil","Prix"],
 "ambiance":"Chaque arbre abattu a sa ligne sur la tablette ; chaque homme aussi, juste en dessous, en plus petit.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS015-moins-4","zone":"ASS015","pole":"-","palier":4,"nom":"La Loi du bois marqué","cout":2,"cible":1,
 "effet":"Loi : s'il ne reste qu'un ennemi, la cible est marquée : +3 par coup reçu. 12 dégâts à la cible ; la cible est marquée : +3 par coup reçu ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["vulnerable","cible",3]]],["deg","cible",12],["vulnerable","cible",3],["garde","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Marque","Garde","Condition","Prix"],
 "ambiance":"Le guruš a voté qu'un arbre marqué ne se laisse pas debout ; Lu-Nanna marque avant le vote.",
 "budget":"27,3 / 28 (−2 %)"},
{"id":"ASS015-moins-5","zone":"ASS015","pole":"-","palier":5,"nom":"Les Feux éteints tôt","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; l'attaque de chaque ennemi baisse de 2 ; la cible est marquée : +3 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","cible",12],["affaiblit","tous",2],["vulnerable","cible",3],["exil"]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Marque","Affaiblissement","Exil","Prix"],
 "ambiance":"Le surveillant fait éteindre les feux tôt, pour ménager le bois ; on dort habillés et serrés, la bouche fermée.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"ASS015-moins-6","zone":"ASS015","pole":"-","palier":6,"nom":"La Loi de l'épaule scellée","cout":2,"cible":1,
 "effet":"Loi : tous les ennemis sont marqués : +2 par coup reçu ; la cible hésite ; le héros gagne 10 de garde ; riposte 4 jusqu'à votre prochain tour.",
 "ops":[["vulnerable","tous",2],["hesite","cible"],["garde","heros",10],["riposte",4]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Marque","Contrôle","Riposte","Garde"],
 "ambiance":"Chaque bûcheron porte le sceau à l'épaule, comme les arbres ; ainsi on sait à qui appartient la hache.",
 "budget":"34,2 / 36 (−5 %)"},
{"id":"ASS015-moins7","zone":"ASS015","pole":"-","palier":7,"nom":"Le Sceau partout","cout":2,"cible":1,
 "effet":"Tout porte le sceau. Cible marquée (+6) ; cible −3 d'attaque ; 3 coups de 7 au hasard. Pose Sceau. Si Givre (consommée) : cible marquée (+3) ; 16 à la cible ; cible −1 d'attaque. Prix : défaussez 1 carte.",
 "ops":[["vulnerable","cible",6],["affaiblit","cible",3],["deg","hasard",7,3],["pose","Sceau"],["reveil","Givre",true,[["vulnerable","cible",3],["deg","cible",16],["affaiblit","cible",1]]],["prixDefausse",1]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Marque","Affaiblissement","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Les troncs, les hommes, les tablettes et la neige même portent le sceau ; Lu-Nanna l'appuie sans regarder.",
 "budget":"45 sans combo ; réveil +28 (62 %)"},
{"id":"ASS015-plus-1","zone":"ASS015","pole":"+","palier":1,"nom":"La Loi du guruš","cout":1,"cible":0,
 "effet":"Loi : piochez 1 carte ; +1 mana de Glace ; le héros se soigne de 4. Prix : le héros perd 1 PV.",
 "ops":[["pioche",1],["mana","Glace",1],["soin","heros",4],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Soin","Pioche","Mana","Prix"],
 "ambiance":"Les jeunes hommes s'assoient en cercle dans la clairière, et chacun parle à son tour, même les plus timides.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS015-plus-2","zone":"ASS015","pole":"+","palier":2,"nom":"La Piste vers le sud","cout":1,"cible":1,
 "effet":"5 dégâts à la cible ; piochez 1 carte ; la cible hésite.",
 "ops":[["deg","cible",5],["pioche",1],["hesite","cible"]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Contrôle","Pioche"],
 "ambiance":"Une piste part du camp vers le sud ; chaque matin quelqu'un la refait, et la neige la recouvre.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ASS015-plus-3","zone":"ASS015","pole":"+","palier":3,"nom":"Les Chants autour du feu","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, piochez 1 carte. Puis 10 dégâts à la cible ; +1 mana de Glace ; le héros se soigne de 8.",
 "ops":[["si","troisCartes",[["pioche",1]]],["deg","cible",10],["mana","Glace",1],["soin","heros",8]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Soin","Pioche","Mana","Condition"],
 "ambiance":"On chante autour des feux des chansons d'Ur où il fait chaud ; les pins écoutent, couverts de neige.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ASS015-plus-4","zone":"ASS015","pole":"+","palier":4,"nom":"La Loi de la tablette brisée","cout":2,"cible":1,
 "effet":"Loi : 12 dégâts à la cible ; piochez 2 cartes ; tous les ennemis hésitent. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",12],["pioche",2],["hesite","tous"],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Contrôle","Pioche","Prix"],
 "ambiance":"Le guruš a voté qu'on briserait la tablette des comptes ; Lu-Nanna en a fait une copie avant le vote.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS015-plus-5","zone":"ASS015","pole":"+","palier":5,"nom":"Le Vote sous la neige","cout":2,"cible":1,
 "effet":"Si c'est au moins votre troisième carte ce tour, 6 dégâts à tous les ennemis. Puis 12 dégâts à la cible ; piochez 2 cartes ; +2 mana de Glace. Prix : le héros perd 2 PV.",
 "ops":[["si","troisCartes",[["deg","tous",6]]],["deg","cible",12],["pioche",2],["mana","Glace",2],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"On vote à main levée, les mains gelées ; ceux qui hésitent gardent les leurs sous le manteau.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ASS015-plus-6","zone":"ASS015","pole":"+","palier":6,"nom":"La Loi des haches dans les souches","cout":2,"cible":1,
 "effet":"Loi : piochez 2 cartes ; la cible hésite ; 6 dégâts à tous les ennemis ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["hesite","cible"],["deg","tous",6],["garde","heros",10],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Dégâts","Contrôle","Garde","Pioche","Prix"],
 "ambiance":"Le guruš a voté de planter les haches dans les souches, et de les y laisser ; elles y restent.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ASS015-plus7","zone":"ASS015","pole":"+","palier":7,"nom":"La Forêt sans maîtres","cout":2,"cible":0,
 "effet":"Plus personne ne marque. Piochez 3 ; +2 mana de Glace ; 3 coups de 7 au hasard ; riposte 5. Pose Givre. Si Abîme (consommée) : piochez 2 ; 3 coups de 4 au hasard ; riposte 4. Prix : héros −3 PV.",
 "ops":[["pioche",3],["mana","Glace",2],["deg","hasard",7,3],["riposte",5],["pose","Givre"],["reveil","Abîme",true,[["pioche",2],["deg","hasard",4,3],["riposte",4]]],["prixPV",3]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Riposte","Pioche","Mana","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Le camp est vide ; les pistes partent dans toutes les directions, et aucune ne semble aller au sud.",
 "budget":"46 sans combo ; réveil +28 (61 %)"}
]
```

---

## 6. L'Office des Échansons de Ṭābat-Ṣēri (ASS182) — Assemblée · Désert de sel · Pierre · Mésopotamienne

Forme du récit : la transmission d'un geste (la vieille enseigne au jeune, récit). Recette du −7 : le silence (les coupes renversées, les goûteurs assis qui ne se lèvent plus) ; du +7 : la foule (les enfants qui lèchent la croûte du lac).

**Poison (−)** : la loi de la goutte du réveil → la fiole sur l'étagère → le jeune Ilšu-ibni grimace → la loi des coupes de pierre → la langue noire → la loi du roi qui ne meurt pas → les Goûteurs assis. Fil mécanique : Lois de garde des alliés (les échansons endurcis, goutte après goutte), affaiblissement et hésitation en appoint, crochet « un ennemi s'apprête à se soigner » ; prix : PV et exil, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, dégâts ciblés 4, affaiblissement 4, hésitation 3, exil 2, brûlure 2 ; crochet « un ennemi s'apprête à se soigner » sur 2 ; prix sur 7 cartes (PV 5, exil 2).

**Nectar (+)** : la loi de la cuillère de sirop → les jarres de la cour → les abeilles du lac → la loi des joues rondes → le sirop pour le goût → la loi du roi sans goûteur → le Lac de sucre. Fil mécanique : Lois de mana de Pierre (le sirop qui paie la maison), soin du héros, récupération et riposte en appoint, crochet « le héros a moins de la moitié de ses PV » ; prix : soin ennemi et défausse, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, soin du héros 4, récupération 4, dégâts ciblés 4, riposte 3, dégâts à tous 2, garde du héros 2 ; crochet « le héros a moins de la moitié de ses PV » sur 2 ; prix sur 6 cartes (soin ennemi 3, défausse 3).

```json
{"fiche":"ASS182","nom":"L'Office des Échansons de Ṭābat-Ṣēri",
 "recit":"Dans la maison des échansons de Ṭābat-Ṣēri, au bord du lac de sel, on goûte le vin du roi avant lui. Pour y survivre, chaque échanson boit une goutte de poison au réveil, puis une cuillère de sirop de dattes pour le goût. La vieille Bēlessunu enseigne le geste au jeune Ilšu-ibni, qui grimace. Elle a goûté chaque coupe du roi pendant tout son règne, et n'y a jamais trouvé de poison. Le roi est mort de vieillesse. Bēlessunu boit toujours sa goutte au réveil : elle ne sait plus s'en passer.",
 "pal":["Le lac de sel est jaune et craquelé ; dans la maison, des coupes renversées, et des goûteurs assis contre le mur qui ne se lèvent plus.","Des fioles s'alignent sur les étagères ; les échansons ont la peau grise et la langue sombre, et ne mangent plus de dattes.","Un lac de sel blanc sous un ciel dur, une maison de briques au toit plat, et des échansons qui goûtent le vin du roi dans des coupes de pierre.","Des jarres de sirop de dattes s'empilent dans la cour ; des abeilles tournent au-dessus, et les échansons ont des joues rondes.","Le sirop déborde des jarres jusqu'au lac et fige le sel en sucre ; des enfants viennent lécher la croûte, et le roi boit sans goûteur."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"ASS182-moins-1","zone":"ASS182","pole":"-","palier":1,"nom":"La Loi de la goutte du réveil","cout":1,"cible":1,
 "effet":"Loi : 3 dégâts à la cible ; vos alliés gagnent 5 de garde ; l'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",3],["garde","allies",5],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Affaiblissement","Garde","Prix"],
 "ambiance":"Une goutte au réveil, sur le bout de la langue ; Bēlessunu le fait sans ouvrir les yeux.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS182-moins-2","zone":"ASS182","pole":"-","palier":2,"nom":"La Fiole sur l'étagère","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 8 dégâts à la cible. Puis 5 dégâts à la cible ; vos alliés gagnent 6 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",8]]],["deg","cible",5],["garde","allies",6],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Chaque échanson a sa fiole marquée de son nom ; à sa mort, on la vide dans le lac.",
 "budget":"14,2 / 12,5 (+14 %)"},
{"id":"ASS182-moins-3","zone":"ASS182","pole":"-","palier":3,"nom":"Le Jeune Ilšu-ibni grimace","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; vos alliés gagnent 8 de garde ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["deg","cible",10],["garde","allies",8],["hesite","cible"],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Garde","Exil","Prix"],
 "ambiance":"Ilšu-ibni grimace à chaque goutte ; Bēlessunu dit que le jour où il ne grimacera plus, il sera échanson.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"ASS182-moins-4","zone":"ASS182","pole":"-","palier":4,"nom":"La Loi des coupes de pierre","cout":2,"cible":1,
 "effet":"Loi : 12 dégâts à la cible ; vos alliés gagnent 10 de garde ; l'attaque de chaque ennemi baisse de 1. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",12],["garde","allies",10],["affaiblit","tous",1],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Affaiblissement","Garde","Prix"],
 "ambiance":"Les coupes du roi sont en pierre, pour qu'on ne puisse pas accuser le métal du poison.",
 "budget":"27,6 / 28 (−1 %)"},
{"id":"ASS182-moins-5","zone":"ASS182","pole":"-","palier":5,"nom":"La Langue sombre","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 6 dégâts à tous les ennemis. Puis vos alliés gagnent 12 de garde ; la cible hésite ; riposte 4 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","tous",6]]],["garde","allies",12],["hesite","cible"],["riposte",4],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les vieux échansons ont la langue sombre jusqu'à la gorge, et ne sentent plus ni poison ni vin.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ASS182-moins-6","zone":"ASS182","pole":"-","palier":6,"nom":"La Loi du roi qui ne meurt pas","cout":2,"cible":1,
 "effet":"Loi : vos alliés gagnent 14 de garde ; l'attaque de la cible baisse de 3 ; la cible brûle : 2 par tour pendant 3 tours ; le héros se soigne de 6. Prix : cette carte s'exile.",
 "ops":[["garde","allies",14],["affaiblit","cible",3],["brulure","cible",2,3],["soin","heros",6],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Brûlure","Affaiblissement","Garde","Soin","Exil","Prix"],
 "ambiance":"La maison a voté que le roi ne mourrait pas empoisonné ; c'est la seule loi toujours tenue.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"ASS182-moins7","zone":"ASS182","pole":"-","palier":7,"nom":"Les Goûteurs assis","cout":2,"cible":1,
 "effet":"Les goûteurs ne se lèvent plus. Alliés +22 de garde ; tous hésitent ; tous brûlent (2 par tour, 3 tours). Pose Abîme. Si Sang (consommée) : alliés +10 de garde ; cible −3 d'attaque ; la cible brûle (3 par tour, 3 tours). Prix : héros −3 PV.",
 "ops":[["garde","allies",22],["hesite","tous"],["brulure","tous",2,3],["pose","Abîme"],["reveil","Sang",true,[["garde","allies",10],["affaiblit","cible",3],["brulure","cible",3,3]]],["prixPV",3]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Brûlure","Affaiblissement","Contrôle","Garde","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Assis contre le mur, la coupe à la main, ils ne sont pas morts ; ils n'ont plus envie.",
 "budget":"45,6 sans combo ; réveil +30 (66 %)"},
{"id":"ASS182-plus-1","zone":"ASS182","pole":"+","palier":1,"nom":"La Loi de la cuillère de sirop","cout":1,"cible":0,
 "effet":"Loi : +1 mana de Pierre ; le héros se soigne de 6 ; reprenez en main la dernière carte de votre défausse. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Pierre",1],["soin","heros",6],["recup"],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Soin","Récupération","Mana","Prix"],
 "ambiance":"Une cuillère de sirop après la goutte : la maison l'a votée pour le goût, et pour la paix.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS182-plus-2","zone":"ASS182","pole":"+","palier":2,"nom":"Les Jarres de la cour","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 6. Puis 6 dégâts à la cible ; +1 mana de Pierre ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","heros",6]]],["deg","cible",6],["mana","Pierre",1],["recup"],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Soin","Récupération","Mana","Condition","Prix"],
 "ambiance":"Les jarres de sirop s'empilent dans la cour, scellées à la cire ; les abeilles trouvent toujours la fente.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS182-plus-3","zone":"ASS182","pole":"+","palier":3,"nom":"Les Abeilles du lac","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; +2 mana de Pierre ; riposte 3 jusqu'à votre prochain tour.",
 "ops":[["deg","cible",12],["mana","Pierre",2],["riposte",3]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Riposte","Mana"],
 "ambiance":"Des abeilles sauvages ont suivi les jarres jusqu'au lac de sel ; elles boivent aux fentes et piquent les voleurs.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS182-plus-4","zone":"ASS182","pole":"+","palier":4,"nom":"La Loi des joues rondes","cout":2,"cible":0,
 "effet":"Loi : +2 mana de Pierre ; reprenez en main la dernière carte de votre défausse ; 5 dégâts à tous les ennemis ; le héros gagne 8 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Pierre",2],["recup"],["deg","tous",5],["garde","heros",8],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Garde","Récupération","Mana","Prix"],
 "ambiance":"La maison a voté que l'échanson mangerait autant que le roi : il faut des joues rondes pour goûter juste.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ASS182-plus-5","zone":"ASS182","pole":"+","palier":5,"nom":"Le Sirop pour le goût","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, +2 mana de Pierre. Puis 16 dégâts à la cible ; le héros se soigne de 10 ; +1 mana de Pierre. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["mana","Pierre",2]]],["deg","cible",16],["soin","heros",10],["mana","Pierre",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Bēlessunu prend sa cuillère de sirop avant la goutte, maintenant, et non plus après ; personne n'ose lui dire.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS182-plus-6","zone":"ASS182","pole":"+","palier":6,"nom":"La Loi du roi sans goûteur","cout":2,"cible":1,
 "effet":"Loi : 16 dégâts à la cible ; +2 mana de Pierre ; reprenez en main la dernière carte de votre défausse ; riposte 4 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",16],["mana","Pierre",2],["recup"],["riposte",4],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Riposte","Récupération","Mana","Prix"],
 "ambiance":"Le nouveau roi boit sans goûteur ; la maison l'a laissé faire, et garde les fioles au cas où.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ASS182-plus7","zone":"ASS182","pole":"+","palier":7,"nom":"Le Lac de sucre","cout":2,"cible":0,
 "effet":"Le sel devient sucre. +2 mana de Pierre ; soin du héros 12 ; 10 à tous ; héros +10 de garde. Pose Sceau. Si Racine (consommée) : +2 mana de Pierre ; soin du héros 10 ; riposte 6. Prix : défaussez 1 carte.",
 "ops":[["mana","Pierre",2],["soin","heros",12],["deg","tous",10],["garde","heros",10],["pose","Sceau"],["reveil","Racine",true,[["mana","Pierre",2],["soin","heros",10],["riposte",6]]],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Dégâts","Riposte","Garde","Soin","Mana","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Le sirop a figé le sel en croûte sucrée ; les enfants la lèchent à genoux, parmi les abeilles.",
 "budget":"45 sans combo ; réveil +28 (62 %)"}
]
```

---

## 7. Shiokemuri-zaki, la Pointe des Adieux (ANT059) — Antre · Falaise côtière · Vent · Japonaise féodale

Forme du récit : le poème d'adieu jamais fini (récit). Recette du −7 : le silence (le cap nu, les papiers collés aux rochers, plus une mouette) ; du +7 : la foule (la falaise couverte de bassins brûlants, de nids et de baigneurs).

**Mort (−)** : le pinceau de Sōemon → le crabe au visage → le papier pris au vent → les crabes du sentier → le kimono plié → le grand crabe des rochers → le Cap sans oiseaux. Fil mécanique : soin du héros (le calme de celui qui a fini), crabes à visage de guerrier sur 4 cartes, garde du héros et exil en appoint, crochet « il ne reste qu'un ennemi » ; prix : exil et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, exil 4, garde du héros 4, bêtes 4, dégâts ciblés 3, affaiblissement 2, riposte 2 ; crochet « il ne reste qu'un ennemi » sur 3 ; prix sur 6 cartes (exil 4, défausse 2).

**Vie (+)** : la source au pied du cap → la mouette du nid de papier → le bain de Sōemon → les mouettes qui crient → les bassins fumants → la grande mouette des falaises → la Falaise qui fume. Fil mécanique : brûlure (l'eau de la source, qui guérit les uns et ébouillante les autres), mouettes sur 4 cartes, soin des alliés et perce-garde en appoint, crochet « la cible brûle déjà » ; prix : PV et soin ennemi, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 6, soin des alliés 4, bêtes 4, perce-garde 4, dégâts ciblés 3, riposte 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (PV 4, soin ennemi 3).

```json
{"fiche":"ANT059","nom":"Shiokemuri-zaki, la Pointe des Adieux",
 "recit":"Au cap de Shiokemuri, les vieux serviteurs du seigneur viennent écrire leur poème d'adieu sur une bande de papier, la donnent au vent, puis sautent. Sōemon a monté le sentier avec son pinceau, son papier et son plus beau kimono. Le vent lui a pris la feuille avant le dernier vers. Il est redescendu en chercher une autre, et s'est baigné à la source chaude du pied de la falaise, pour se calmer. Il remonte chaque printemps, depuis. Le vent prend toujours la feuille trop tôt. Sa fille dit qu'il écrit lentement exprès.",
 "pal":["Le cap est nu, battu par le vent ; des bandes de papier blanc sont collées aux rochers, des crabes à visage de guerrier rôdent, et plus une mouette.","Les mouettes partent ; le sentier se couvre de papiers déchirés, et des crabes au dos grimaçant montent des vagues vers les rochers.","Un cap de roche noire sur la mer, un sentier de pierre jusqu'au sommet, des mouettes qui crient, et une source chaude qui fume au pied.","La source déborde en bassins fumants le long de la falaise ; les mouettes nichent jusque sur le sentier, et les vieux s'y baignent.","La falaise fume du haut en bas, couverte de bassins brûlants et de nids ; des familles entières s'y baignent parmi les mouettes qui crient."],
 "pm":"Mort","pp":"Vie"}
```

```json
[
{"id":"ANT059-moins-1","zone":"ANT059","pole":"-","palier":1,"nom":"Le Pinceau de Sōemon","cout":1,"cible":1,
 "effet":"Le héros se soigne de 6 ; le héros gagne 4 de garde ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["soin","heros",6],["garde","heros",4],["affaiblit","cible",1],["exil"]],
 "tags":["Antre","Vent","Pôle −","Affaiblissement","Garde","Soin","Exil","Prix"],
 "ambiance":"Sōemon a broyé son encre la veille, lentement, et lavé son pinceau dans l'eau de la source.",
 "budget":"9,2 / 10 (−8 %)"},
{"id":"ANT059-moins-2","zone":"ANT059","pole":"-","palier":2,"nom":"Le Crabe au visage","cout":1,"cible":0,
 "effet":"Un Crabe au visage de guerrier rejoint le combat : 8 PV, frappe 3. Le héros se soigne de 5 ; le héros gagne 3 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Crabe au visage de guerrier",8,3],["soin","heros",5],["garde","heros",3],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Garde","Soin","Prix"],
 "ambiance":"Sur sa carapace, un visage de guerrier fronce les sourcils ; les pêcheurs le relâchent toujours, par politesse.",
 "budget":"12,9 / 12,5 (+3 %)"},
{"id":"ANT059-moins-3","zone":"ANT059","pole":"-","palier":3,"nom":"Le Papier pris au vent","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 10 dégâts à la cible. Le héros se soigne de 12 ; le héros gagne 8 de garde ; la cible hésite. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",10]]],["soin","heros",12],["garde","heros",8],["hesite","cible"],["exil"]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Contrôle","Garde","Soin","Condition","Exil","Prix"],
 "ambiance":"Le vent a pris la feuille avant le dernier vers ; Sōemon l'a regardée partir, le pinceau levé.",
 "budget":"25,4 / 24 (+6 %)"},
{"id":"ANT059-moins-4","zone":"ANT059","pole":"-","palier":4,"nom":"Les Crabes du sentier","cout":2,"cible":1,
 "effet":"4 dégâts à la cible. Un Crabes du sentier rejoint le combat : 14 PV, frappe 5. Le héros se soigne de 10.",
 "ops":[["deg","cible",4],["invoque","Crabes du sentier",14,5],["soin","heros",10]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Soin"],
 "ambiance":"Les crabes montent le sentier en file, de côté, et s'arrêtent là où les vieux ont sauté.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT059-moins-5","zone":"ANT059","pole":"-","palier":5,"nom":"Le Kimono plié","cout":2,"cible":1,
 "effet":"Le héros se soigne de 14 ; le héros gagne 12 de garde ; l'attaque de la cible baisse de 2 ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["soin","heros",14],["garde","heros",12],["affaiblit","cible",2],["riposte",2],["exil"]],
 "tags":["Antre","Vent","Pôle −","Affaiblissement","Riposte","Garde","Soin","Exil","Prix"],
 "ambiance":"Sōemon replie son plus beau kimono en redescendant ; il le rangera dans le coffre jusqu'au printemps.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT059-moins-6","zone":"ANT059","pole":"-","palier":6,"nom":"Le Grand Crabe des rochers","cout":2,"cible":0,
 "effet":"S'il ne reste qu'un ennemi, le héros se soigne de 10. Un Grand Crabe des rochers rejoint le combat : 20 PV, frappe 8. Le héros se soigne de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["soin","heros",10]]],["invoque","Grand Crabe des rochers",20,8],["soin","heros",8],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Soin","Condition","Prix"],
 "ambiance":"Le grand crabe garde le bord du cap, pinces ouvertes, comme s'il attendait qu'on lui tende quelque chose.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT059-moins7","zone":"ANT059","pole":"-","palier":7,"nom":"Le Cap sans oiseaux","cout":2,"cible":1,
 "effet":"Le cap se tait. S'il ne reste qu'un ennemi, 16 à la cible. 6 à la cible ; soin du héros 16 ; un Crabe-seigneur (18 PV, frappe 8). Pose Givre. Si Abîme (consommée) : soin du héros 14 ; 12 à la cible ; riposte 2. Prix : cette carte s'exile.",
 "ops":[["si","seul",[["deg","cible",16]]],["deg","cible",6],["soin","heros",16],["invoque","Crabe-seigneur",18,8],["pose","Givre"],["reveil","Abîme",true,[["soin","heros",14],["deg","cible",12],["riposte",2]]],["exil"]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Riposte","Soin","Condition","Exil","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Plus une mouette ; les papiers collés aux rochers sèchent au vent, et les crabes les lisent de côté.",
 "budget":"48 sans combo ; réveil +30 (62 %)"},
{"id":"ANT059-plus-1","zone":"ANT059","pole":"+","palier":1,"nom":"La Source au pied du cap","cout":1,"cible":1,
 "effet":"La cible brûle : 2 par tour pendant 3 tours ; vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["brulure","cible",2,3],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Brûlure","Soin","Prix"],
 "ambiance":"La source sort de la roche au pied du cap, si chaude qu'on y cuit les œufs des mouettes.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT059-plus-2","zone":"ANT059","pole":"+","palier":2,"nom":"La Mouette du nid de papier","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, vos alliés se soignent de 4. Une Mouette du nid de papier rejoint le combat : 6 PV, frappe 3. La garde de la cible tombe à 0. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["soin","allies",4]]],["invoque","Mouette du nid de papier",6,3],["briseGarde","cible"],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Perce-garde","Soin","Condition","Prix"],
 "ambiance":"Une mouette a tapissé son nid avec les poèmes de Sōemon ; ses petits dorment sur des vers inachevés.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT059-plus-3","zone":"ANT059","pole":"+","palier":3,"nom":"Le Bain de Sōemon","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; la cible brûle : 3 par tour pendant 3 tours ; ces coups ignorent la garde ; la cible est marquée : +1 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",10],["brulure","cible",3,3],["ignoreGarde"],["vulnerable","cible",1],["prixPV",2]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Brûlure","Marque","Perce-garde","Prix"],
 "ambiance":"Sōemon se baigne jusqu'au menton après chaque descente ; il dit que l'eau lui rend ses vers.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT059-plus-4","zone":"ANT059","pole":"+","palier":4,"nom":"Les Mouettes qui crient","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Une Colonie de mouettes rejoint le combat : 12 PV, frappe 6. Tous les ennemis brûlent : 1 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",10]]],["invoque","Colonie de mouettes",12,6],["brulure","tous",1,3],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"Les mouettes crient au-dessus des bassins, et plongent sur tout ce qui ressemble à du papier.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT059-plus-5","zone":"ANT059","pole":"+","palier":5,"nom":"Les Bassins fumants","cout":2,"cible":1,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours ; vos alliés se soignent de 8 ; la garde de la cible tombe à 0 ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["brulure","tous",2,3],["soin","allies",8],["briseGarde","cible"],["riposte",2],["prixPV",2]],
 "tags":["Antre","Vent","Pôle +","Brûlure","Perce-garde","Riposte","Soin","Prix"],
 "ambiance":"La source déborde en bassins le long de la falaise ; chacun a sa chaleur, et son vieux.",
 "budget":"30,2 / 32 (−6 %)"},
{"id":"ANT059-plus-6","zone":"ANT059","pole":"+","palier":6,"nom":"La Grande Mouette des falaises","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 14 dégâts à la cible. Une Grande Mouette des falaises rejoint le combat : 16 PV, frappe 7. La cible brûle : 3 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","brule",[["deg","cible",14]]],["invoque","Grande Mouette des falaises",16,7],["brulure","cible",3,3],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Brûlure","Condition","Prix"],
 "ambiance":"La grande mouette vole contre le vent sans bouger les ailes, et crie quand quelqu'un monte le sentier.",
 "budget":"32,5 / 36 (−10 %)"},
{"id":"ANT059-plus7","zone":"ANT059","pole":"+","palier":7,"nom":"La Falaise qui fume","cout":2,"cible":1,
 "effet":"La falaise entière bout. Tous brûlent (3 par tour, 3 tours) ; alliés soignés de 10 ; toute garde ennemie à 0 ; riposte 4. Pose Sang. Si Givre (consommée) : la cible brûle (4 par tour, 4 tours) ; un Mouette-reine (12 PV, frappe 6). Prix : héros −3 PV.",
 "ops":[["brulure","tous",3,3],["soin","allies",10],["briseGarde","tous"],["riposte",4],["pose","Sang"],["reveil","Givre",true,[["brulure","cible",4,4],["invoque","Mouette-reine",12,6]]],["prixPV",3]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Brûlure","Perce-garde","Riposte","Soin","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"La falaise fume du haut en bas ; des familles entières s'y baignent, et personne ne monte plus au cap.",
 "budget":"46,4 sans combo ; réveil +31 (67 %)"}
]
```

---

## 8. Khoosonbulag, le Campement de l'Hiver blanc (ANT063) — Antre · Lande · Vent · Mongole

Forme du récit : le conte de l'hiver blanc (la neige gelée en croûte). Recette du −7 : le vide (la lande dure comme un plat, les bêtes mortes debout) ; du +7 : la foule (toute la lande à table, des cavaliers qui arrivent encore).

**Famine (−)** : le vautour moine → la croûte sur l'herbe → le gypaète des os → les bêtes mortes debout → le ciel gris → le gypaète barbu → la Lande blanche. Fil mécanique : **vocation d'Antre, invocations** (6 cartes : vautours et gypaètes, qui arrivent avec la faim) ; marque et coups au hasard en appoint, crochet « un ennemi s'apprête à se soigner » (les vautours fondent sur qui mange) ; prix : vos bêtes, et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 6, marque 4, coups au hasard 4, dégâts ciblés 3 ; crochet « un ennemi s'apprête à se soigner » sur 2 ; prix sur 6 cartes (vos bêtes 5, PV 1).

**Festin (+)** : la chèvre de Dulmaa → le chien noir de la porte → les pierres chaudes → les voisins aux mains vides → le bankhar aux os → les chaudrons devant les yourtes → la Lande à table. Fil mécanique : garde du héros (le ventre plein, la porte gardée), chiens bankhars sur 3 cartes, soin du héros et mana de Vent en appoint, crochet « une de vos bêtes est en jeu » ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, mana 4, soin du héros 4, bêtes 3, dégâts ciblés 3, exil 2 ; crochet « une de vos bêtes est en jeu » sur 2 ; prix sur 6 cartes (soin ennemi 4, exil 2).

```json
{"fiche":"ANT063","nom":"Khoosonbulag, le Campement de l'Hiver blanc",
 "recit":"L'hiver où la neige gela en croûte, les bêtes de Dulmaa ne trouvèrent plus l'herbe dessous. Elles moururent debout, serrées les unes contre les autres. Les vautours vinrent de si loin que le ciel en devint gris. Au printemps, il restait à Dulmaa une chèvre et son chien. Elle donna quand même la fête du printemps, avec la chèvre, et invita toute la lande. Les voisins vinrent les mains vides et mangèrent tout. On en parle encore comme du plus beau festin de mémoire d'homme. Dulmaa, elle, se souvient surtout de la chèvre.",
 "pal":["La lande est blanche et dure comme un plat ; des bêtes mortes debout, et un ciel gris de vautours qui ne prennent même plus la peine de se poser.","La neige gèle en croûte sur l'herbe ; les troupeaux grattent sans rien trouver, et les vautours tournent de plus en plus bas.","Une lande rase sous le vent, des yourtes blanches, des chèvres et des moutons mêlés, et un grand chien noir couché devant chaque porte.","Les chaudrons fument devant les yourtes ; on cuit la viande avec des pierres chaudes, et les chiens attendent les os en remuant la queue.","Toute la lande est à table : des feux à perte de vue, des cavaliers qui arrivent encore, et des chiens si gras qu'ils ne se lèvent plus pour les os."],
 "pm":"Famine","pp":"Festin"}
```

```json
[
{"id":"ANT063-moins-1","zone":"ANT063","pole":"-","palier":1,"nom":"Le Vautour moine","cout":1,"cible":1,
 "effet":"Un Vautour moine rejoint le combat : 6 PV, frappe 3. La cible est marquée : +1 par coup reçu. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Vautour moine",6,3],["vulnerable","cible",1],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"Le vautour moine se pose sur la yourte et attend, la tête dans les épaules, comme un vieux.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT063-moins-2","zone":"ANT063","pole":"-","palier":2,"nom":"La Croûte sur l'herbe","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 8 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; 3 coups de 1 au hasard.",
 "ops":[["si","soinEnnemi",[["deg","cible",8]]],["vulnerable","cible",2],["deg","hasard",1,3]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Condition"],
 "ambiance":"La neige a fondu un jour de vent chaud, puis tout a regelé en croûte sur l'herbe.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT063-moins-3","zone":"ANT063","pole":"-","palier":3,"nom":"Le Gypaète des os","cout":2,"cible":0,
 "effet":"Un Gypaète des os rejoint le combat : 12 PV, frappe 5. 3 coups de 3 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Gypaète des os",12,5],["deg","hasard",3,3],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Le gypaète monte les os très haut et les laisse tomber sur les pierres, puis il descend manger la moelle.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT063-moins-4","zone":"ANT063","pole":"-","palier":4,"nom":"Les Bêtes mortes debout","cout":2,"cible":0,
 "effet":"Un Vautour des carcasses rejoint le combat : 18 PV, frappe 8. Piochez 1 carte. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Vautour des carcasses",18,8],["pioche",1],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Pioche","Prix"],
 "ambiance":"Les moutons sont morts debout, serrés les uns contre les autres ; de loin, on croit encore le troupeau vivant.",
 "budget":"24 / 28 (−14 %)"},
{"id":"ANT063-moins-5","zone":"ANT063","pole":"-","palier":5,"nom":"Le Ciel gris","cout":2,"cible":0,
 "effet":"Si un ennemi s'apprête à se soigner, tous les ennemis sont marqués : +2 par coup reçu. Une Nuée de vautours rejoint le combat : 16 PV, frappe 6. 3 coups de 3 au hasard. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["vulnerable","tous",2]]],["invoque","Nuée de vautours",16,6],["deg","hasard",3,3],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Il y a tant de vautours que le ciel devient gris à midi ; Dulmaa n'ose plus lever la tête.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT063-moins-6","zone":"ANT063","pole":"-","palier":6,"nom":"Le Gypaète barbu","cout":2,"cible":1,
 "effet":"14 dégâts à la cible. Un Gypaète barbu rejoint le combat : 18 PV, frappe 8. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","cible",14],["invoque","Gypaète barbu",18,8],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Le gypaète barbu a l'œil cerclé de rouge ; il regarde la chèvre plus que les morts.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT063-moins7","zone":"ANT063","pole":"-","palier":7,"nom":"La Lande blanche","cout":2,"cible":1,
 "effet":"Le ciel est aux vautours. Un Roi des vautours (20 PV, frappe 9) ; tous marqués (+2) ; 3 coups de 4 au hasard. Pose Abîme. Si Givre (consommée) : un Vautour de la croûte (12 PV, frappe 6) ; 14 à la cible. Prix : bête la plus faible −3 PV.",
 "ops":[["invoque","Roi des vautours",20,9],["vulnerable","tous",2],["deg","hasard",4,3],["pose","Abîme"],["reveil","Givre",true,[["invoque","Vautour de la croûte",12,6],["deg","cible",14]]],["prixBete",3]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Marque","Combo","Pose Abîme","Réveil Givre","Prix"],
 "ambiance":"La lande est dure comme un plat, et les vautours ne prennent même plus la peine de se poser.",
 "budget":"45,7 sans combo ; réveil +29 (63 %)"},
{"id":"ANT063-plus-1","zone":"ANT063","pole":"+","palier":1,"nom":"La Chèvre de Dulmaa","cout":1,"cible":0,
 "effet":"Le héros gagne 6 de garde ; le héros se soigne de 4 ; +1 mana de Vent. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","heros",6],["soin","heros",4],["mana","Vent",1],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Garde","Soin","Mana","Prix"],
 "ambiance":"La chèvre est la seule bête vivante du campement ; Dulmaa la trait matin et soir en lui parlant.",
 "budget":"9,8 / 10 (−2 %)"},
{"id":"ANT063-plus-2","zone":"ANT063","pole":"+","palier":2,"nom":"Le Chien noir de la porte","cout":1,"cible":0,
 "effet":"Un Chien noir de la porte rejoint le combat : 8 PV, frappe 3. Le héros gagne 5 de garde.",
 "ops":[["invoque","Chien noir de la porte",8,3],["garde","heros",5]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde"],
 "ambiance":"Le grand chien noir dort devant la porte de la yourte, et ne se lève que pour les inconnus.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT063-plus-3","zone":"ANT063","pole":"+","palier":3,"nom":"Les Pierres chaudes","cout":2,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, le héros gagne 10 de garde. Puis 10 dégâts à la cible ; le héros gagne 12 de garde ; +1 mana de Vent. Prix : cette carte s'exile.",
 "ops":[["si","bete",[["garde","heros",10]]],["deg","cible",10],["garde","heros",12],["mana","Vent",1],["exil"]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Mana","Condition","Exil","Prix"],
 "ambiance":"On chauffe les pierres au feu, puis on les met dans la bête avec la viande, et on ferme.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ANT063-plus-4","zone":"ANT063","pole":"+","palier":4,"nom":"Les Voisins aux mains vides","cout":2,"cible":0,
 "effet":"Le héros gagne 14 de garde ; le héros se soigne de 8 ; 4 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","heros",14],["soin","heros",8],["deg","tous",4],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Les voisins sont venus à cheval, les mains vides, et se sont assis sans rien demander ; c'était la coutume.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT063-plus-5","zone":"ANT063","pole":"+","palier":5,"nom":"Le Bankhar aux os","cout":2,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, le héros se soigne de 8. Un Bankhar aux os rejoint le combat : 16 PV, frappe 6. Le héros gagne 10 de garde ; +1 mana de Vent. Prix : cette carte s'exile.",
 "ops":[["si","bete",[["soin","heros",8]]],["invoque","Bankhar aux os",16,6],["garde","heros",10],["mana","Vent",1],["exil"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde","Soin","Mana","Condition","Exil","Prix"],
 "ambiance":"Le bankhar attend les os assis, très droit ; il ne mendie pas, il surveille.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT063-plus-6","zone":"ANT063","pole":"+","palier":6,"nom":"Les Chaudrons devant les yourtes","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; le héros gagne 16 de garde ; +2 mana de Vent ; le héros se soigne de 6. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",14],["garde","heros",16],["mana","Vent",2],["soin","heros",6],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Garde","Soin","Mana","Prix"],
 "ambiance":"Les chaudrons fument devant chaque yourte ; on goûte chez l'un, puis chez l'autre, et personne ne rentre.",
 "budget":"36,8 / 36 (+2 %)"},
{"id":"ANT063-plus7","zone":"ANT063","pole":"+","palier":7,"nom":"La Lande à table","cout":2,"cible":1,
 "effet":"Toute la lande mange. 12 à la cible ; héros +20 de garde ; une Meute des bankhars (20 PV, frappe 8). Pose Braise. Si Racine (consommée) : héros +12 de garde ; un Chiot gras (10 PV, frappe 4) ; 10 à la cible. Prix : ennemis soignés de 2.",
 "ops":[["deg","cible",12],["garde","heros",20],["invoque","Meute des bankhars",20,8],["pose","Braise"],["reveil","Racine",true,[["garde","heros",12],["invoque","Chiot gras",10,4],["deg","cible",10]]],["ennemiSoin",2]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Garde","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Des feux à perte de vue, des cavaliers qui arrivent encore, et des chiens trop gras pour se lever.",
 "budget":"46 sans combo ; réveil +30,6 (67 %)"}
]
```

---

## 9. Kyndilstaðir, le Lopin de la Torche (ANT015) — Antre · Forêt de champignons géants · Sève · Nordique

Forme du récit : la coutume du tour de terre (la terre qu'on prend en la parcourant, et ce qu'il en reste sous des chapeaux humides). Recette du −7 : le vide (la hutte éteinte, personne à des lieues) ; du +7 : la démesure (chaque pied de champignon creusé et habité, les foyers qui luisent à travers les chapeaux).

**Exil (−)** : la génisse qu'on n'avait pas → l'escargot des lames → la torche éteinte → la limace des sentiers → les fils partis → la limace-reine → la Terre la mieux gardée. Fil mécanique : soin du héros (celle qui se soigne seule sur son lopin), escargots et limaces sur 4 cartes, riposte et récupération en appoint, crochet « il ne reste qu'un ennemi » ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, riposte 4, bêtes 4, récupération 3, dégâts ciblés 3 ; crochet « il ne reste qu'un ennemi » sur 2 ; prix sur 6 cartes (PV 4, défausse 2).

**Foyer (+)** : le feu au milieu → la torche des hommes → les grillons sous les lames → le ver luisant du foyer → la chambre de plus → les étincelles dans les spores → les Foyers dans les chapeaux. Place rare des **coups au hasard** (les étincelles qui sautent dans les spores) ; grillons et vers luisants sur 4 cartes, garde des alliés et perce-garde en appoint, crochet « une de vos bêtes est en jeu » ; prix : exil et garde ennemie, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : coups au hasard 7, bêtes 4, garde des alliés 4, perce-garde 3, exil 2, pioche 2 ; crochet « une de vos bêtes est en jeu » sur 2 ; prix sur 7 cartes (garde ennemie 5, exil 2).

```json
{"fiche":"ANT015","nom":"Kyndilstaðir, le Lopin de la Torche",
 "recit":"La loi donnait à une femme autant de terre qu'elle en ferait le tour entre l'aube et le soir, une génisse à la main. Hallveig n'avait pas de génisse : elle a pris une torche, comme les hommes. Mais sous les champignons, l'air est humide, et la torche s'est éteinte au bout de quelques pas. Sa terre fait le tour de sa hutte. Ses fils sont partis chercher plus large. Hallveig a creusé le pied du champignon et allumé son feu au milieu. Elle dit que c'est la terre la mieux gardée du pays.",
 "pal":["Des champignons gris hauts comme des tours, une hutte creusée dans un pied, éteinte ; des limaces sur le seuil, et personne à des lieues.","Les chapeaux se referment au-dessus des sentiers ; les spores tombent comme une neige sèche, et les traces de pas s'effacent derrière soi.","Une forêt de champignons géants aux chapeaux bruns, des sentiers mous sous les pas, et une fumée mince qui monte d'un pied creusé.","La hutte s'agrandit dans le pied du champignon ; un feu brûle au milieu, et des grillons chantent sous les lames.","Chaque pied de champignon est creusé et habité ; les foyers luisent à travers les chapeaux, et le chant des grillons couvre les voix."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ANT015-moins-1","zone":"ANT015","pole":"-","palier":1,"nom":"La Génisse qu'on n'avait pas","cout":1,"cible":0,
 "effet":"Le héros se soigne de 6 ; riposte 2 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",6],["riposte",2],["prixPV",1]],
 "tags":["Antre","Sève","Pôle −","Riposte","Soin","Prix"],
 "ambiance":"La vieille loi voulait une génisse pour mesurer la terre d'une femme ; Hallveig n'avait que ses bras.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT015-moins-2","zone":"ANT015","pole":"-","palier":2,"nom":"L'Escargot des lames","cout":1,"cible":0,
 "effet":"Un Escargot des lames rejoint le combat : 10 PV, frappe 2. Le héros se soigne de 4.",
 "ops":[["invoque","Escargot des lames",10,2],["soin","heros",4]],
 "tags":["Antre","Sève","Pôle −","Invocation","Soin"],
 "ambiance":"Les escargots montent le long des pieds blancs et laissent derrière eux un sentier qui brille.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT015-moins-3","zone":"ANT015","pole":"-","palier":3,"nom":"La Torche éteinte","cout":2,"cible":0,
 "effet":"S'il ne reste qu'un ennemi, le héros se soigne de 8. Le héros se soigne de 10 ; riposte 4 jusqu'à votre prochain tour ; reprenez en main la dernière carte de votre défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["soin","heros",8]]],["soin","heros",10],["riposte",4],["recup"],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Riposte","Soin","Récupération","Condition","Prix"],
 "ambiance":"La torche a grésillé sous les chapeaux humides, puis s'est éteinte ; Hallveig a planté un piquet là.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT015-moins-4","zone":"ANT015","pole":"-","palier":4,"nom":"La Limace des sentiers","cout":2,"cible":1,
 "effet":"8 dégâts à la cible. Une Limace des sentiers rejoint le combat : 14 PV, frappe 5. Le héros se soigne de 8. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",8],["invoque","Limace des sentiers",14,5],["soin","heros",8],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Les limaces sont longues comme un bras ; elles passent la borne sans la voir, et Hallveig les laisse faire.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT015-moins-5","zone":"ANT015","pole":"-","palier":5,"nom":"Les Fils partis","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 14 dégâts à la cible. Le héros se soigne de 12 ; riposte 5 jusqu'à votre prochain tour ; reprenez en main la dernière carte de votre défausse. Prix : le héros perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",14]]],["soin","heros",12],["riposte",5],["recup"],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Riposte","Soin","Récupération","Condition","Prix"],
 "ambiance":"Ses fils sont partis chercher une terre plus large ; ils envoient des nouvelles, et pas de place.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT015-moins-6","zone":"ANT015","pole":"-","palier":6,"nom":"La Limace-reine","cout":2,"cible":0,
 "effet":"Une Limace-reine rejoint le combat : 20 PV, frappe 6. Le héros se soigne de 10 ; riposte 4 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Limace-reine",20,6],["soin","heros",10],["riposte",4],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Riposte","Soin","Prix"],
 "ambiance":"La limace-reine fait le tour de la terre de Hallveig chaque soir, et met moins de temps qu'elle.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT015-moins7","zone":"ANT015","pole":"-","palier":7,"nom":"La Terre la mieux gardée","cout":2,"cible":1,
 "effet":"Hallveig ne sort plus. 12 à la cible ; soin du héros 18 ; un Escargot des souches (18 PV, frappe 7). Pose Racine. Si Abîme (consommée) : soin du héros 14 ; 12 à la cible ; reprenez la dernière carte défaussée. Prix : héros −3 PV.",
 "ops":[["deg","cible",12],["soin","heros",18],["invoque","Escargot des souches",18,7],["pose","Racine"],["reveil","Abîme",true,[["soin","heros",14],["deg","cible",12],["recup"]]],["prixPV",3]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Soin","Récupération","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Hallveig garde sa terre assise sur le seuil ; d'ici, elle en voit le bout de tous les côtés.",
 "budget":"46,5 sans combo ; réveil +30 (65 %)"},
{"id":"ANT015-plus-1","zone":"ANT015","pole":"+","palier":1,"nom":"Le Feu au milieu","cout":1,"cible":0,
 "effet":"Un Grillon du foyer rejoint le combat : 6 PV, frappe 2. 2 coups de 2 au hasard ; vos alliés gagnent 3 de garde. Prix : cette carte s'exile.",
 "ops":[["invoque","Grillon du foyer",6,2],["deg","hasard",2,2],["garde","allies",3],["exil"]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Garde","Exil","Prix"],
 "ambiance":"Hallveig a allumé son feu au milieu du pied creusé ; la fumée sort par le chapeau, comme d'une cheminée.",
 "budget":"10,6 / 10 (+6 %)"},
{"id":"ANT015-plus-2","zone":"ANT015","pole":"+","palier":2,"nom":"La Torche des hommes","cout":1,"cible":0,
 "effet":"3 coups de 3 au hasard ; ces coups ignorent la garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","hasard",3,3],["ignoreGarde"],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"Les hommes prenaient leur terre en portant le feu ; Hallveig a pris une torche, et personne n'a ri.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT015-plus-3","zone":"ANT015","pole":"+","palier":3,"nom":"Les Grillons sous les lames","cout":2,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, 3 coups de 3 au hasard. Un Grillons sous les lames rejoint le combat : 12 PV, frappe 4. Vos alliés gagnent 6 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","bete",[["deg","hasard",3,3]]],["invoque","Grillons sous les lames",12,4],["garde","allies",6],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Les grillons sont venus avec le feu, on ne sait d'où ; ils chantent sous les lames, au chaud.",
 "budget":"21,7 / 24 (−10 %)"},
{"id":"ANT015-plus-4","zone":"ANT015","pole":"+","palier":4,"nom":"Le Ver luisant du foyer","cout":2,"cible":1,
 "effet":"Un Ver luisant du foyer rejoint le combat : 14 PV, frappe 5. 3 coups de 3 au hasard ; la garde de la cible tombe à 0. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Ver luisant du foyer",14,5],["deg","hasard",3,3],["briseGarde","cible"],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"Les vers luisants s'allument dans la chair du champignon, et Hallveig dit qu'ils gardent les bords.",
 "budget":"24,5 / 28 (−12 %)"},
{"id":"ANT015-plus-5","zone":"ANT015","pole":"+","palier":5,"nom":"La Chambre de plus","cout":2,"cible":0,
 "effet":"3 coups de 8 au hasard ; ces coups ignorent la garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","hasard",8,3],["ignoreGarde"],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"Hallveig creuse une chambre de plus dans le pied, puis une autre, pour des fils qui ne reviennent pas.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT015-plus-6","zone":"ANT015","pole":"+","palier":6,"nom":"Les Étincelles dans les spores","cout":2,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 10 de garde. Puis 8 dégâts à la cible ; 3 coups de 7 au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","bete",[["garde","allies",10]]],["deg","cible",8],["deg","hasard",7,3],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Une étincelle dans les spores, et l'air s'allume en petites flammes bleues qui courent entre les chapeaux.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ANT015-plus7","zone":"ANT015","pole":"+","palier":7,"nom":"Les Foyers dans les chapeaux","cout":2,"cible":0,
 "effet":"Chaque champignon a son foyer. 4 coups de 6 au hasard ; alliés +12 de garde ; un Grand Ver luisant (12 PV, frappe 4). Pose Braise. Si Sceau (consommée) : 4 coups de 5 au hasard ; un Grillon-braise (9 PV, frappe 3). Prix : cette carte s'exile.",
 "ops":[["deg","hasard",6,4],["garde","allies",12],["invoque","Grand Ver luisant",12,4],["pose","Braise"],["reveil","Sceau",true,[["deg","hasard",5,4],["invoque","Grillon-braise",9,3]]],["exil"]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Garde","Exil","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Les foyers luisent à travers les chapeaux, et le chant des grillons couvre les voix de ceux qui sont venus.",
 "budget":"47,4 sans combo ; réveil +29 (61 %)"}
]
```

---

## 10. Fontegheto, la Clepsydre du Consul (ANT113) — Antre · Oasis · Sève · Vénitienne

> **Note du critique (lot 8)** : les addax de la Sécheresse (−3, −6, −7) deviennent des hyènes : avec la gazelle de B (Clarté) et le bouquetin de D (Glace), les bovidés passaient à 3 pôles du lot. Le reste de la zone est inchangé.

Forme du récit : **document, la relation du consul** au Sérénissime Prince. Recette du −7 : le vide (la source morte, la clepsydre qui goutte sur rien) ; du +7 : la démesure (la palmeraie devenue lagune, le comptoir qu'on visite en barque).

**Sécheresse (−)** : la rigole sèche → le tour d'eau sans eau → la hyène du consul → la clepsydre qui goutte → les gerboises à la clepsydre → le clan des dunes → la Source morte. Fil mécanique : **vocation d'Antre, invocations** (7 cartes : gerboises et hyènes ; c'est la première fois que la Sécheresse invoque), vol de vie en appoint (la soif boit), crochet « la cible prend son élan » ; prix : vos bêtes. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, vol de vie 4, dégâts ciblés 3, pioche 2, coups au hasard 2 ; crochet « la cible prend son élan » sur 2 ; prix sur 5 cartes (vos bêtes 5).

**Déluge (+)** : l'orage sur l'oued → le héron des rigoles → la ligne de l'eau → la tortue molle → les arcades dans l'eau → la héronnière de la palmeraie → la Palmeraie-lagune. Fil mécanique : marque (la ligne que l'eau laisse sur tout ce qu'elle touche), hérons pourprés et tortues sur 4 cartes, soin des alliés et perce-garde en appoint, crochet « la cible vole par-dessus » ; prix : défausse et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, soin des alliés 4, bêtes 4, perce-garde 4, dégâts ciblés 3 ; crochet « la cible vole par-dessus » sur 2 ; prix sur 6 cartes (garde ennemie 3, défausse 3).

```json
{"fiche":"ANT113","nom":"Fontegheto, la Clepsydre du Consul",
 "recit":"Relation du consul Zuane Barbolan au Sérénissime Prince. L'eau de la source se partage par tours, mesurés à la clepsydre : chaque famille a son tour, chaque palmier sa rigole. Cet été, la source a tari. J'ai fait tenir les tours quand même, à l'heure exacte, sur des rigoles sèches. Puis l'orage a fait déborder l'oued et noyé la palmeraie. J'ai fait tenir les tours : chaque famille a reçu son eau, pas une goutte de plus. Que Votre Sérénité note qu'aucun désordre n'a eu lieu.",
 "pal":["La source n'est plus qu'un trou de sable ; les palmiers morts gardent leurs rigoles sèches, et la clepsydre du consul goutte sur rien.","Les rigoles se fendillent ; les palmes jaunissent par le haut, et des gerboises viennent lécher la clepsydre du consul.","Une palmeraie autour d'une source, des rigoles de terre en éventail, un comptoir vénitien à arcades, et une clepsydre sous une tonnelle.","L'oued gonfle et déborde dans les rigoles ; des hérons pêchent entre les palmiers, et les arcades du comptoir ont les pieds dans l'eau.","La palmeraie est une lagune où flottent les dattes ; le comptoir se visite en barque, et la clepsydre déborde sans que personne la regarde."],
 "pm":"Sécheresse","pp":"Déluge"}
```

```json
[
{"id":"ANT113-moins-1","zone":"ANT113","pole":"-","palier":1,"nom":"La Rigole sèche","cout":1,"cible":0,
 "effet":"Une Gerboise des sables rejoint le combat : 8 PV, frappe 3. Piochez 1 carte. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Gerboise des sables",8,3],["pioche",1],["prixBete",1]],
 "tags":["Antre","Sève","Pôle −","Invocation","Pioche","Prix"],
 "ambiance":"La gerboise sort la nuit et lèche la rosée sur les palmes ; c'est tout ce qui reste à boire.",
 "budget":"11,5 / 10 (+15 %)"},
{"id":"ANT113-moins-2","zone":"ANT113","pole":"-","palier":2,"nom":"Le Tour d'eau sans eau","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts à la cible. Une Gerboise des rigoles rejoint le combat : 8 PV, frappe 3.",
 "ops":[["si","elan",[["deg","cible",8]]],["invoque","Gerboise des rigoles",8,3]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Condition"],
 "ambiance":"À l'heure dite, la famille ouvre sa rigole ; il n'en sort que du sable, et le consul note.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT113-moins-3","zone":"ANT113","pole":"-","palier":3,"nom":"La Hyène du consul","cout":2,"cible":1,
 "effet":"6 dégâts à la cible. Une Hyène du consul rejoint le combat : 20 PV, frappe 6. Tous ces dégâts en vol de vie. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","cible",6],["invoque","Hyène du consul",20,6],["volVie"],["prixBete",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"La hyène du consul boit ce qui reste dans l'abreuvoir, et regarde les autres bêtes sans gêne.",
 "budget":"26 / 24 (+8 %)"},
{"id":"ANT113-moins-4","zone":"ANT113","pole":"-","palier":4,"nom":"La Clepsydre qui goutte","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, une Gerboise des puits rejoint le combat : 10 PV, frappe 4. Puis 3 coups de 3 au hasard ; tous ces dégâts en vol de vie ; piochez 2 cartes.",
 "ops":[["si","elan",[["invoque","Gerboise des puits",10,4]]],["deg","hasard",3,3],["volVie"],["pioche",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Vol de vie","Pioche","Condition"],
 "ambiance":"La clepsydre a sa propre eau, dans un vase de verre ; elle goutte toujours, et c'est la seule.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ANT113-moins-5","zone":"ANT113","pole":"-","palier":5,"nom":"Les Gerboises à la clepsydre","cout":2,"cible":0,
 "effet":"Un Gerboises de la clepsydre rejoint le combat : 18 PV, frappe 7. 5 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Gerboises de la clepsydre",18,7],["deg","tous",5],["volVie"],["prixBete",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Les gerboises grimpent à la tonnelle et regardent goutter la clepsydre, la tête penchée.",
 "budget":"34 / 32 (+6 %)"},
{"id":"ANT113-moins-6","zone":"ANT113","pole":"-","palier":6,"nom":"Le Clan des dunes","cout":2,"cible":0,
 "effet":"Une Hyène des dunes rejoint le combat : 18 PV, frappe 8. 3 coups de 4 au hasard. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Hyène des dunes",18,8],["deg","hasard",4,3],["prixBete",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Les hyènes sont descendues des dunes pour boire ; elles lèchent le fond des rigoles sèches, et repartent.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ANT113-moins7","zone":"ANT113","pole":"-","palier":7,"nom":"La Source morte","cout":2,"cible":1,
 "effet":"La source ne coule plus. 18 à la cible ; une Grande Hyène rayée (22 PV, frappe 8) ; tout en vol de vie. Pose Braise. Si Racine (consommée) : une Gerboise-mère (12 PV, frappe 5) ; 12 à la cible ; tout en vol de vie. Prix : bête la plus faible −3 PV.",
 "ops":[["deg","cible",18],["invoque","Grande Hyène rayée",22,8],["volVie"],["pose","Braise"],["reveil","Racine",true,[["invoque","Gerboise-mère",12,5],["deg","cible",12],["volVie"]]],["prixBete",3]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Dégâts","Vol de vie","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"La clepsydre goutte sur rien ; le consul note l'heure de chaque tour, et le sable boit la goutte.",
 "budget":"47 sans combo ; réveil +31,5 (67 %)"},
{"id":"ANT113-plus-1","zone":"ANT113","pole":"+","palier":1,"nom":"L'Orage sur l'oued","cout":1,"cible":0,
 "effet":"Tous les ennemis sont marqués : +1 par coup reçu ; vos alliés se soignent de 2.",
 "ops":[["vulnerable","tous",1],["soin","allies",2]],
 "tags":["Antre","Sève","Pôle +","Marque","Soin"],
 "ambiance":"L'orage gronde sur les monts, très loin ; ici, il ne pleut pas, et l'oued commence à couler.",
 "budget":"9,6 / 10 (−4 %)"},
{"id":"ANT113-plus-2","zone":"ANT113","pole":"+","palier":2,"nom":"Le Héron des rigoles","cout":1,"cible":1,
 "effet":"Un Héron des rigoles rejoint le combat : 6 PV, frappe 3. La cible est marquée : +1 par coup reçu ; la garde de la cible tombe à 0. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Héron des rigoles",6,3],["vulnerable","cible",1],["briseGarde","cible"],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Marque","Perce-garde","Prix"],
 "ambiance":"Les hérons sont arrivés avec l'eau, pourpres et silencieux, et pêchent dans les rigoles du consul.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT113-plus-3","zone":"ANT113","pole":"+","palier":3,"nom":"La Ligne de l'eau","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; vos alliés se soignent de 6 ; ces coups ignorent la garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",10]]],["vulnerable","cible",3],["soin","allies",6],["ignoreGarde"],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Dégâts","Marque","Perce-garde","Soin","Condition","Prix"],
 "ambiance":"L'eau laisse une ligne de boue sur les murs et les jambes ; on mesure tout à cette ligne.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT113-plus-4","zone":"ANT113","pole":"+","palier":4,"nom":"La Tortue molle","cout":2,"cible":1,
 "effet":"Une Tortue molle de l'oued rejoint le combat : 14 PV, frappe 5. La cible est marquée : +3 par coup reçu ; la garde de la cible tombe à 0. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Tortue molle de l'oued",14,5],["vulnerable","cible",3],["briseGarde","cible"],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Marque","Perce-garde","Prix"],
 "ambiance":"Une tortue molle est descendue avec l'oued ; elle dort dans la fontaine du comptoir, et mord les doigts.",
 "budget":"24,5 / 28 (−12 %)"},
{"id":"ANT113-plus-5","zone":"ANT113","pole":"+","palier":5,"nom":"Les Arcades dans l'eau","cout":2,"cible":0,
 "effet":"Tous les ennemis sont marqués : +2 par coup reçu ; vos alliés se soignent de 10 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","tous",2],["soin","allies",10],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Marque","Soin","Pioche","Prix"],
 "ambiance":"Les arcades du comptoir ont les pieds dans l'eau ; on traverse la cour sur des planches, comme chez nous.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ANT113-plus-6","zone":"ANT113","pole":"+","palier":6,"nom":"La Héronnière de la palmeraie","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, la cible est marquée : +3 par coup reçu. 10 dégâts à la cible. Un Hérons pourprés de la palmeraie rejoint le combat : 18 PV, frappe 7. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","vol",[["vulnerable","cible",3]]],["deg","cible",10],["invoque","Hérons pourprés de la palmeraie",18,7],["ennemiGarde",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Les hérons nichent dans les palmiers noyés, si nombreux que les palmes plient sous les nids.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT113-plus7","zone":"ANT113","pole":"+","palier":7,"nom":"La Palmeraie-lagune","cout":2,"cible":1,
 "effet":"La palmeraie devient lagune. 8 à la cible ; tous marqués (+3) ; alliés soignés de 10 ; toute garde ennemie à 0. Pose Givre. Si Sceau (consommée) : cible marquée (+3) ; une Tortue-reine (14 PV, frappe 6) ; 4 à la cible. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",8],["vulnerable","tous",3],["soin","allies",10],["briseGarde","tous"],["pose","Givre"],["reveil","Sceau",true,[["vulnerable","cible",3],["invoque","Tortue-reine",14,6],["deg","cible",4]]],["prixDefausse",1]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Dégâts","Marque","Perce-garde","Soin","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"Les dattes flottent entre les troncs ; le consul se fait mener en barque à la clepsydre, qui déborde.",
 "budget":"46,4 sans combo ; réveil +29 (62 %)"}
]
```

---

## 11. Daluin Khad, l'Embarcadère de la Flotte (ANT227) — Antre · Falaise côtière · Vent · Mongole

Forme du récit : le rêve du chaman pris au mot (récit). Recette du −7 : la ruine (les carcasses de navires aux rochers, les juments noyées sur l'écume) ; du +7 : la démesure (la mer ferme comme une steppe, les chevaux qui y galopent).

**Cauchemar (−)** : le hennissement sous l'eau → la jument noyée → les physalies de la crique → l'épave aux rochers → le songe de Böke → les juments sur l'écume → la Flotte noyée. Pôle sans famille principale, **colonne vertébrale** : la marque (4 cartes) que le pôle pose lui-même, et le crochet « la cible est déjà marquée » qui en profite (4 cartes, toujours lu avant la marque de la carte) ; juments noyées et physalies sur 4 cartes, récupération en appoint ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 4, bêtes 4, récupération 4, dégâts ciblés 3, dégâts à tous 2 ; crochet « la cible est déjà marquée » sur 4 ; prix sur 5 cartes (PV 3, garde ennemie 2).

**Rêve (+)** : Böke dort sur la falaise → le cormoran du mât → les chevaux sur la mer → la baleine du large → le songe raconté → le khan qui écoute → la Mer comme une steppe. Pôle sans famille principale, **colonne vertébrale** : l'hésitation (4 cartes) que le pôle pose lui-même, et le crochet « la cible hésite déjà » qui en profite (4 cartes, toujours lu avant l'hésitation de la carte : le rêve de Böke gagne qui s'arrête pour l'écouter) ; pioche, cormorans et baleines en appoint ; prix : défausse, sur 5 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 4, dégâts ciblés 4, bêtes 4, pioche 4, écho 3, garde du héros 2, dégâts à tous 2, coups au hasard 2 ; crochet « la cible hésite déjà » sur 4 ; prix sur 5 cartes (défausse 5).

```json
{"fiche":"ANT227","nom":"Daluin Khad, l'Embarcadère de la Flotte",
 "recit":"Le chaman Böke rêva que les chevaux du khan marchaient sur la mer jusqu'aux îles d'en face. Le khan fit construire des navires et tailler dans la falaise de Daluin un chemin pour y descendre ses juments. La tempête noya la flotte à mi-chemin. Les juments revinrent à la nage, pas toutes. Les nuits de vent, on voit encore les autres galoper sur l'écume, au pied de la falaise. Böke a fait un autre rêve depuis. Il ne l'a raconté à personne, et le khan ne le lui a pas demandé.",
 "pal":["Des carcasses de navires pendent aux rochers ; la nuit, des juments noyées galopent sur l'écume, et les physalies couvrent la grève comme une neige molle.","Des épaves s'échouent au pied de la falaise ; on entend des hennissements sous l'eau, et les physalies s'accumulent dans les criques.","Une falaise grise sur la mer, un chemin taillé pour descendre les chevaux, des navires à quai, et des yourtes au bord du vide.","Des baleines passent au large en soufflant ; les cormorans sèchent leurs ailes sur les mâts, et le chaman dort sur la falaise.","La mer est ferme comme une steppe : des chevaux y galopent jusqu'à l'horizon, des baleines les suivent, et la falaise dort sous les cormorans."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ANT227-moins-1","zone":"ANT227","pole":"-","palier":1,"nom":"Le Hennissement sous l'eau","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; la cible hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","cible",2],["hesite","cible"],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle −","Marque","Contrôle","Prix"],
 "ambiance":"Les nuits de vent, on entend hennir sous l'eau, au pied de la falaise ; les chevaux du camp répondent.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT227-moins-2","zone":"ANT227","pole":"-","palier":2,"nom":"La Jument noyée","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 8 dégâts à la cible. Une Jument noyée rejoint le combat : 8 PV, frappe 3. Prix : le héros perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",8]]],["invoque","Jument noyée",8,3],["prixPV",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Elle remonte le chemin taillé, ruisselante, la crinière pleine d'algues, et cherche sa place à l'attache.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT227-moins-3","zone":"ANT227","pole":"-","palier":3,"nom":"Les Physalies de la crique","cout":2,"cible":1,
 "effet":"Une Flottille de physalies rejoint le combat : 12 PV, frappe 4. La cible est marquée : +3 par coup reçu ; reprenez en main la dernière carte de votre défausse.",
 "ops":[["invoque","Flottille de physalies",12,4],["vulnerable","cible",3],["recup"]],
 "tags":["Antre","Vent","Pôle −","Invocation","Marque","Récupération"],
 "ambiance":"Les physalies s'entassent dans la crique où coulèrent les navires, et luisent la nuit comme des yeux.",
 "budget":"25 / 24 (+4 %)"},
{"id":"ANT227-moins-4","zone":"ANT227","pole":"-","palier":4,"nom":"L'Épave aux rochers","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 6 dégâts à tous les ennemis. Puis 3 coups de 4 au hasard ; piochez 1 carte ; reprenez en main la dernière carte de votre défausse. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","tous",6]]],["deg","hasard",4,3],["pioche",1],["recup"],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Une coque est restée pendue aux rochers, à mi-falaise ; le vent y siffle un air que personne n'aime.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT227-moins-5","zone":"ANT227","pole":"-","palier":5,"nom":"Le Songe de Böke","cout":2,"cible":0,
 "effet":"Tous les ennemis sont marqués : +2 par coup reçu ; 3 dégâts à tous les ennemis ; riposte 5 jusqu'à votre prochain tour ; reprenez en main la dernière carte de votre défausse.",
 "ops":[["vulnerable","tous",2],["deg","tous",3],["riposte",5],["recup"]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Marque","Riposte","Récupération"],
 "ambiance":"Böke dort la tête vers la mer ; il s'agite, il parle, et le khan fait garder sa yourte.",
 "budget":"33,8 / 32 (+6 %)"},
{"id":"ANT227-moins-6","zone":"ANT227","pole":"-","palier":6,"nom":"Les Juments sur l'écume","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 16 dégâts à la cible. Un Juments de l'écume rejoint le combat : 20 PV, frappe 8. Reprenez en main la dernière carte de votre défausse. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",16]]],["invoque","Juments de l'écume",20,8],["recup"],["prixPV",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Récupération","Condition","Prix"],
 "ambiance":"Elles galopent sur l'écume sans s'enfoncer, jusqu'au matin, puis la mer les reprend toutes ensemble.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT227-moins7","zone":"ANT227","pole":"-","palier":7,"nom":"La Flotte noyée","cout":2,"cible":1,
 "effet":"La flotte revient à la nage. Si la cible est marquée, 20 à la cible. Une Jument-reine noyée (22 PV, frappe 9) ; cible marquée (+5). Pose Abîme. Si Sang (consommée) : une Physalie géante (14 PV, frappe 6) ; 12 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["invoque","Jument-reine noyée",22,9],["vulnerable","cible",5],["pose","Abîme"],["reveil","Sang",true,[["invoque","Physalie géante",14,6],["deg","cible",12]]],["ennemiGarde",2]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Marque","Condition","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Les navires remontent à la nage, avec leurs juments, et attendent au pied de la falaise l'ordre de rentrer.",
 "budget":"45,5 sans combo ; réveil +28 (62 %)"},
{"id":"ANT227-plus-1","zone":"ANT227","pole":"+","palier":1,"nom":"Böke dort sur la falaise","cout":1,"cible":1,
 "effet":"La cible hésite ; la prochaine carte de zone de ce tour compte double ; le héros gagne 3 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","cible"],["echo"],["garde","heros",3],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Contrôle","Garde","Écho","Prix"],
 "ambiance":"Le chaman dort au bord du vide, la tête vers la mer ; on ne le réveille pas, on attend.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT227-plus-2","zone":"ANT227","pole":"+","palier":2,"nom":"Le Cormoran du mât","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 8 dégâts à la cible. Un Cormoran du mât rejoint le combat : 8 PV, frappe 3.",
 "ops":[["si","hesite",[["deg","cible",8]]],["invoque","Cormoran du mât",8,3]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Condition"],
 "ambiance":"Le cormoran sèche ses ailes ouvertes sur le mât d'un navire qui n'est jamais reparti.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT227-plus-3","zone":"ANT227","pole":"+","palier":3,"nom":"Les Chevaux sur la mer","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, tous les ennemis hésitent. Puis piochez 2 cartes ; 4 dégâts à tous les ennemis ; la prochaine carte de zone de ce tour compte double. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["hesite","tous"]]],["pioche",2],["deg","tous",4],["echo"],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Pioche","Écho","Condition","Prix"],
 "ambiance":"Dans le rêve, les chevaux marchaient sur la mer comme sur la steppe gelée, et ne mouillaient pas leurs sabots.",
 "budget":"24,3 / 24 (+1 %)"},
{"id":"ANT227-plus-4","zone":"ANT227","pole":"+","palier":4,"nom":"La Baleine du large","cout":2,"cible":1,
 "effet":"4 dégâts à la cible. Une Baleine du large rejoint le combat : 24 PV, frappe 7. La cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",4],["invoque","Baleine du large",24,7],["hesite","cible"],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Contrôle","Prix"],
 "ambiance":"Une baleine passe au large en soufflant ; Böke dit qu'elle porte les chevaux noyés sur son dos.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT227-plus-5","zone":"ANT227","pole":"+","palier":5,"nom":"Le Songe raconté","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, piochez 2 cartes. Un Cormorans des épaves rejoint le combat : 14 PV, frappe 5. Le héros gagne 10 de garde ; 3 coups de 2 au hasard.",
 "ops":[["si","hesite",[["pioche",2]]],["invoque","Cormorans des épaves",14,5],["garde","heros",10],["deg","hasard",2,3]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Garde","Pioche","Condition"],
 "ambiance":"Böke a raconté son rêve devant la cour ; le khan a écouté jusqu'au bout, le plat intact.",
 "budget":"32,5 / 32 (+2 %)"},
{"id":"ANT227-plus-6","zone":"ANT227","pole":"+","palier":6,"nom":"Le Khan qui écoute","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 16 dégâts à la cible. Puis tous les ennemis hésitent ; piochez 2 cartes ; 3 coups de 3 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",16]]],["hesite","tous"],["pioche",2],["deg","hasard",3,3],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Contrôle","Pioche","Condition","Prix"],
 "ambiance":"Le khan écoute les rêves comme on écoute les éclaireurs, et donne ses ordres le soir même.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ANT227-plus7","zone":"ANT227","pole":"+","palier":7,"nom":"La Mer comme une steppe","cout":2,"cible":1,
 "effet":"La mer porte les chevaux. 18 à la cible ; une Grande Baleine grise (24 PV, frappe 8) ; piochez 2. Pose Racine. Si Abîme (consommée) : piochez 2 ; 7 à tous ; la prochaine carte de zone compte double. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",18],["invoque","Grande Baleine grise",24,8],["pioche",2],["pose","Racine"],["reveil","Abîme",true,[["pioche",2],["deg","tous",7],["echo"]]],["prixDefausse",1]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Pioche","Écho","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Des chevaux galopent sur la mer jusqu'à l'horizon ; les baleines les suivent, et Böke dort, enfin tranquille.",
 "budget":"47 sans combo ; réveil +29,4 (63 %)"}
]
```

---

## 12. Ajawlel, la Cour tirée au sort (ANT146) — Antre · Cité en ruines · Pierre · Maya

Forme du récit : la fête du roi tiré au sort (récit). Recette du −7 : la foule (singes hurleurs et fourmis maîtres de la cité) ; du +7 : l'ordre (chaque dalle à sa place, chaque jarre comptée, la cour entière autour du roi tiré au sort).

**Chaos (−)** : le singe du trône → les fourmis du grenier → les jarres renversées → la colonne de fourmis → le hurlement du matin → la cour qui s'en va → les Singes à la cour. Fil mécanique : **vocation d'Antre, invocations** (7 cartes : singes hurleurs et fourmis légionnaires) ; vol de vie et coups au hasard en appoint, crochet « la cible s'apprête à piétiner » (la colonne qui passe sur tout) ; prix : vos bêtes et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, vol de vie 4, coups au hasard 3, dégâts ciblés 3, dégâts à tous 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 6 cartes (vos bêtes 3, défausse 3).

**Ordre (+)** : le balai du roi → le motmot des murs → la dalle remise → l'iguane de la chaussée → l'impôt de maïs → les motmots dans les niches → le Trône de pierre. Fil mécanique : perce-garde (le collecteur passe toutes les portes), garde des alliés et brûlure en appoint, motmots et iguanes sur 4 cartes, crochet « la cible a de la garde » ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, garde des alliés 4, bêtes 4, brûlure 4, riposte 2, soin des alliés 2, dégâts ciblés 2, exil 2 ; crochet « la cible a de la garde » sur 2 ; prix sur 6 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"ANT146","nom":"Ajawlel, la Cour tirée au sort",
 "recit":"Les seigneurs ont quitté la cité depuis longtemps, mais les gens du village voisin y montent encore au jour de la fête. Ils tirent au sort une cour : un roi, des scribes, des gardes, un collecteur. Cette année, le sort est tombé sur Ah Tok', le potier. Il s'est assis sur le trône de pierre, a fait balayer la chaussée, laver les marches et compter les jarres. Puis il a levé un impôt en maïs, payable avant le soir. Le lendemain matin, il ne restait à la cour que le roi et les singes.",
 "pal":["La forêt a soulevé toutes les dalles ; des singes hurleurs crient sur les marches, des fourmis passent en colonnes, et le trône est vide dans l'herbe.","Des racines percent la chaussée ; les jarres sont renversées, et des singes dorment sur le trône de pierre.","Une cité de pierre blanche que la forêt grignote, une chaussée droite vers un palais vide, et un trône où personne ne s'assoit.","Les gens du village sont montés pour la fête ; la chaussée est balayée, les jarres comptées, et un potier s'assoit sur le trône.","Chaque dalle est à sa place, chaque jarre comptée ; une cour entière se presse au palais, et le roi tiré au sort lève l'impôt."],
 "pm":"Chaos","pp":"Ordre"}
```

```json
[
{"id":"ANT146-moins-1","zone":"ANT146","pole":"-","palier":1,"nom":"Le Singe du trône","cout":1,"cible":0,
 "effet":"Un Singe hurleur du trône rejoint le combat : 6 PV, frappe 2. 2 coups de 2 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Singe hurleur du trône",6,2],["deg","hasard",2,2],["prixBete",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Un singe hurleur s'assoit sur le trône dès que le roi se lève, et crie à sa place.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT146-moins-2","zone":"ANT146","pole":"-","palier":2,"nom":"Les Fourmis du grenier","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 8 dégâts à la cible. Une Fourmis légionnaires rejoint le combat : 6 PV, frappe 3.",
 "ops":[["si","pietine",[["deg","cible",8]]],["invoque","Fourmis légionnaires",6,3]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Condition"],
 "ambiance":"Les fourmis légionnaires traversent le grenier en colonne, et le maïs de l'impôt part avec elles.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT146-moins-3","zone":"ANT146","pole":"-","palier":3,"nom":"Les Jarres renversées","cout":2,"cible":0,
 "effet":"Un Singes du marché rejoint le combat : 12 PV, frappe 4. 4 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Singes du marché",12,4],["deg","tous",4],["volVie"],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Les singes renversent les jarres comptées la veille, et mangent ce qui coule sur les marches.",
 "budget":"22,2 / 24 (−7 %)"},
{"id":"ANT146-moins-4","zone":"ANT146","pole":"-","palier":4,"nom":"La Colonne de fourmis","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, une Fourmi-soldat rejoint le combat : 10 PV, frappe 4. Une Colonne de fourmis rejoint le combat : 14 PV, frappe 4. 3 coups de 3 au hasard ; tous ces dégâts en vol de vie. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","pietine",[["invoque","Fourmi-soldat",10,4]]],["invoque","Colonne de fourmis",14,4],["deg","hasard",3,3],["volVie"],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"La colonne de fourmis monte les marches du palais, et les gardes tirés au sort s'écartent sans rien dire.",
 "budget":"30 / 28 (+7 %)"},
{"id":"ANT146-moins-5","zone":"ANT146","pole":"-","palier":5,"nom":"Le Hurlement du matin","cout":2,"cible":0,
 "effet":"Une Troupe de hurleurs rejoint le combat : 16 PV, frappe 6. 5 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Troupe de hurleurs",16,6],["deg","tous",5],["volVie"],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Les hurleurs crient du haut des temples au lever du jour ; on les entend jusqu'au village.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT146-moins-6","zone":"ANT146","pole":"-","palier":6,"nom":"La Cour qui s'en va","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 16 dégâts à la cible. Un Grand Hurleur roux rejoint le combat : 20 PV, frappe 7. Piochez 2 cartes. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","pietine",[["deg","cible",16]]],["invoque","Grand Hurleur roux",20,7],["pioche",2],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"La cour redescend au village dans la nuit, sans prévenir le roi, avec ce qu'elle a pu emporter.",
 "budget":"34,5 / 36 (−4 %)"},
{"id":"ANT146-moins7","zone":"ANT146","pole":"-","palier":7,"nom":"Les Singes à la cour","cout":2,"cible":1,
 "effet":"Le roi reste seul. 4 à la cible ; un Hurleur-roi (22 PV, frappe 8) ; 3 coups de 5 au hasard ; tout en vol de vie. Pose Sang. Si Sceau (consommée) : une Fourmi-reine (12 PV, frappe 5) ; 12 à la cible ; tout en vol de vie. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",4],["invoque","Hurleur-roi",22,8],["deg","hasard",5,3],["volVie"],["pose","Sang"],["reveil","Sceau",true,[["invoque","Fourmi-reine",12,5],["deg","cible",12],["volVie"]]],["prixDefausse",1]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Vol de vie","Combo","Pose Sang","Réveil Sceau","Prix"],
 "ambiance":"Au matin, il ne reste au palais que le roi sur son trône, et les singes qui crient autour.",
 "budget":"48,5 sans combo ; réveil +31,5 (65 %)"},
{"id":"ANT146-plus-1","zone":"ANT146","pole":"+","palier":1,"nom":"Le Balai du roi","cout":1,"cible":1,
 "effet":"Vos alliés gagnent 5 de garde ; la garde de la cible tombe à 0 ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",5],["briseGarde","cible"],["vulnerable","cible",1],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Marque","Perce-garde","Garde","Prix"],
 "ambiance":"Ah Tok' a d'abord ordonné de balayer la chaussée ; on a balayé, et il en a été tout étonné.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT146-plus-2","zone":"ANT146","pole":"+","palier":2,"nom":"Le Motmot des murs","cout":1,"cible":0,
 "effet":"Un Motmot des murs rejoint le combat : 8 PV, frappe 3. Ces coups ignorent la garde.",
 "ops":[["invoque","Motmot des murs",8,3],["ignoreGarde"]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Perce-garde"],
 "ambiance":"Le motmot balance sa queue comme un pendule sur le mur du palais, et compte avec le collecteur.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT146-plus-3","zone":"ANT146","pole":"+","palier":3,"nom":"La Dalle remise","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, la garde de la cible tombe à 0. Puis vos alliés gagnent 8 de garde ; la cible brûle : 2 par tour pendant 3 tours ; riposte 4 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["garde","allies",8],["brulure","cible",2,3],["riposte",4],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Brûlure","Perce-garde","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les gardes du jour recouchent les dalles soulevées et les tapent au maillet, sérieux comme des maçons.",
 "budget":"23,1 / 24 (−4 %)"},
{"id":"ANT146-plus-4","zone":"ANT146","pole":"+","palier":4,"nom":"L'Iguane de la chaussée","cout":2,"cible":1,
 "effet":"Un Iguane de la chaussée rejoint le combat : 16 PV, frappe 5. La cible brûle : 3 par tour pendant 4 tours ; ces coups ignorent la garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Iguane de la chaussée",16,5],["brulure","cible",3,4],["ignoreGarde"],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Brûlure","Perce-garde","Prix"],
 "ambiance":"Un iguane se chauffe au milieu de la chaussée balayée ; le roi a ordonné qu'on lui laisse sa place.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT146-plus-5","zone":"ANT146","pole":"+","palier":5,"nom":"L'Impôt de maïs","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 12 de garde ; tous les ennemis brûlent : 2 par tour pendant 3 tours ; vos alliés se soignent de 3 ; la garde de la cible tombe à 0. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",12],["brulure","tous",2,3],["soin","allies",3],["briseGarde","cible"],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Brûlure","Perce-garde","Garde","Soin","Prix"],
 "ambiance":"Le collecteur passe de jarre en jarre avec son bâton, et prend sa part avant que le roi ait parlé.",
 "budget":"33,1 / 32 (+3 %)"},
{"id":"ANT146-plus-6","zone":"ANT146","pole":"+","palier":6,"nom":"Les Motmots dans les niches","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 16 dégâts à la cible. Un Motmots des niches rejoint le combat : 18 PV, frappe 6. 3 coups de 4 au hasard ; ces coups ignorent la garde. Prix : cette carte s'exile ; chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["deg","cible",16]]],["invoque","Motmots des niches",18,6],["deg","hasard",4,3],["ignoreGarde"],["exil"],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Perce-garde","Condition","Exil","Prix"],
 "ambiance":"Dans les niches où l'on posait les dieux, les motmots font leur nid ; le roi les a nommés gardes.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ANT146-plus7","zone":"ANT146","pole":"+","palier":7,"nom":"Le Trône de pierre","cout":2,"cible":1,
 "effet":"Tout en ordre. Alliés +12 de garde ; tous brûlent (3 par tour, 3 tours) ; garde de la cible à 0 ; un Iguane-gardien (14 PV, frappe 6). Pose Sceau. Si Braise (consommée) : riposte 6 ; 16 à la cible ; alliés soignés de 4. Prix : cette carte s'exile.",
 "ops":[["garde","allies",12],["brulure","tous",3,3],["briseGarde","cible"],["invoque","Iguane-gardien",14,6],["pose","Sceau"],["reveil","Braise",true,[["riposte",6],["deg","cible",16],["soin","allies",4]]],["exil"]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Dégâts","Brûlure","Perce-garde","Riposte","Garde","Soin","Exil","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Ah Tok' tient le trône de pierre jusqu'au soir, la cour en rang devant lui, les jarres comptées.",
 "budget":"50,2 sans combo ; réveil +34 (68 %)"}
]
```
