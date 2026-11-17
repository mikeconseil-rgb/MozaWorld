# Cartes 2.2 par palier — Conteur A, le Chroniqueur amer

Application de la section 6 des consignes : une carte différente par palier. Pour chaque pôle, les paliers 1 à 6 racontent une petite histoire en sept étapes vers le pôle ; le palier 7 reprend telle quelle la forme ultime de `conteur_A.md` (référence pour les backgrounds, les secrets et les conventions d'`ops`).

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %.

| Coût | P1 | P2 | P3 | P4 | P5 | P6 |
|---|---|---|---|---|---|---|
| 0 | 4 | 5 | 6 | 7 | 8 | 9 |
| 1 | 10 | 12,5 | 15 | 17,5 | 20 | 22,5 |
| 2 | 16 | 20 | 24 | 28 | 32 | 36 |

Conventions de points reprises de `conteur_A.md` (« tous » ×2,2 ; hésite tous ≈ 9 ; ignoreGarde 3 ; `si` à 50 % ; soin alliés ×1,5 ; exil = prix 3), plus : `volVie` compté comme un soin de la moitié des dégâts ; `prixBete` n rend n. Prix : 4 cartes sur 6 (paliers 1-6) dans chaque pôle, donc à égalité entre − et +.

---

## 1. Berestograd, la Ville-Écorce (CIT) — Glace

**Oubli (−)** : la boue reçoit les écorces → Ouliana racle → la généalogie neuve → les Sèvelins saignés → les icônes repeintes → la neige de l'oubli → le Visage raboté. Fil mécanique : brise-garde, hésitation et défausse (le héros oublie aussi).
**Mémoire (+)** : une lettre ramassée → l'écorce cousue au mur → le témoin venu de loin → l'ambre rouvert → la vieille conteuse → les témoins aux créneaux → le Tribunal. Fil mécanique : récupération, riposte, marque et pioche.

```json
[
{"id":"CIT-moins-1","zone":"CIT","pole":"-","palier":1,"nom":"Écorces à la boue","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0, puis 7 dégâts.",
 "ops":[["briseGarde","cible"],["deg","cible",7]],
 "tags":["Citadelle","Glace","Pôle −","Perce-garde","Dégâts"],
 "ambiance":"Dettes, promesses, insultes au voisin : tout finissait dans la boue, et la boue ne rendait rien.",
 "budget":"10 / 10 (brise-garde 3 + 7)"},
{"id":"CIT-moins-2","zone":"CIT","pole":"-","palier":2,"nom":"Le Tesson d'Ouliana","cout":0,"cible":0,
 "effet":"Défaussez 1 carte au hasard, puis piochez 2 cartes.",
 "ops":[["prixDefausse",1],["pioche",2]],
 "tags":["Citadelle","Glace","Pôle −","Pioche","Prix"],
 "ambiance":"Elle grattait jusqu'au blanc de l'aubier, pour trois mesures de seigle la saison.",
 "budget":"5 / 5 (pioche 8 − défausse 3)"},
{"id":"CIT-moins-3","zone":"CIT","pole":"-","palier":3,"nom":"Généalogie neuve","cout":1,"cible":1,
 "effet":"La cible perd 2 d'attaque pour le combat, hésite ce tour et subit 7 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit",2,"cible"],["hesite","cible"],["deg","cible",7],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Affaiblissement","Contrôle","Dégâts","Prix"],
 "ambiance":"Sur l'écorce raclée, les scribes recopièrent une lignée sans frère, d'une encre encore fraîche.",
 "budget":"15 / 15 (affaiblit 6 + hésite 5 + 7 − défausse 3)"},
{"id":"CIT-moins-4","zone":"CIT","pole":"-","palier":4,"nom":"Le Vernis des Sèvelins","cout":2,"cible":1,
 "effet":"La garde de la cible tombe à 0, puis 16 dégâts ; le héros se soigne de la moitié des dégâts infligés.",
 "ops":[["briseGarde","cible"],["deg","cible",16],["volVie"]],
 "tags":["Citadelle","Glace","Pôle −","Perce-garde","Dégâts","Vol de vie"],
 "ambiance":"On saigna les troncs qui refusaient leur ambre, et le vernis brilla sur les icônes neuves.",
 "budget":"27 / 28 (brise-garde 3 + 16 + vol de vie 8)"},
{"id":"CIT-moins-5","zone":"CIT","pole":"-","palier":5,"nom":"Icône repeinte","cout":1,"cible":1,
 "effet":"Tous les ennemis hésitent ce tour et leur garde tombe à 0 ; 7 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","tous"],["briseGarde","tous"],["deg","cible",7],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Contrôle","Perce-garde","Dégâts","Prix"],
 "ambiance":"Sous le visage du kniaz, le saint d'origine attendait, raboté mais pas tout à fait parti.",
 "budget":"19,6 / 20 (hésite tous 9 + brise-garde tous 6,6 + 7 − défausse 3)"},
{"id":"CIT-moins-6","zone":"CIT","pole":"-","palier":6,"nom":"Neige de l'oubli","cout":1,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0, puis 7 dégâts à tous. S'il ne reste qu'un ennemi, il hésite ce tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",7],["si","seul",[["hesite","cible"]]],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Perce-garde","Dégâts","Contrôle","Condition","Prix"],
 "ambiance":"La neige recouvrit les créneaux comme l'enduit les icônes ; les gardes y perdirent leur consigne.",
 "budget":"21,5 / 22,5 (brise-garde tous 6,6 + 15,4 + hésite si seul 2,5 − défausse 3)"},
{"id": "CIT-moins7", "zone": "CIT", "pole": "-", "palier": 7, "nom": "Le Visage raboté", "cout": 2, "cible": 0,
 "effet":"Rituel d'effacement. Tous les ennemis hésitent ce tour, leur garde tombe à 0, ils perdent 2 d'attaque pour le combat et subissent 12 dégâts. Pose Abîme. Si Givre est posée (consommée) : les visages oubliés se fendent, tous les ennemis deviennent vulnérables 5. Prix : défaussez 1 carte ; la carte s'exile.",
 "ops":[["hesite", "tous"], ["briseGarde", "tous"], ["affaiblit", 2, "tous"], ["deg", "tous", 12], ["pose", "Abîme"], ["reveil", "Givre", true, [["vulnerable", "tous", 5]]], ["prixDefausse", 1], ["exil"]],
 "tags":["Citadelle", "Glace", "Forme ultime −7", "Contrôle", "Perce-garde", "Affaiblissement", "Dégâts", "Combo", "Pose Abîme", "Réveil Givre", "Marque", "Prix", "Exil"],
 "ambiance":"Le kniaz fit raboter son propre visage pour ressembler à toutes ses icônes ; la ville cessa d'obéir à qui que ce fût.",
 "budget":"49,2 sans combo (hésite tous 9 + brise-garde 6,6 + affaiblit 13,2 + 26,4 − défausse 3 − exil 3) ; réveil +33 (67 %)"},
{"id":"CIT-plus-1","zone":"CIT","pole":"+","palier":1,"nom":"Lettre ramassée","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte de votre défausse.",
 "ops":[["recup"]],
 "tags":["Citadelle","Glace","Pôle +","Récupération"],
 "ambiance":"Une écorce affleurait dans la boue de la cour ; quelqu'un la ramassa au lieu de la racler.",
 "budget":"4 / 4 (récup 4)"},
{"id":"CIT-plus-2","zone":"CIT","pole":"+","palier":2,"nom":"Écorce cousue au mur","cout":1,"cible":0,
 "effet":"Le héros gagne 10 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 3 dégâts. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",10],["riposte",3],["prixPV",2]],
 "tags":["Citadelle","Glace","Pôle +","Garde","Riposte","Prix"],
 "ambiance":"On cousit les lettres aux rondins comme des écailles, au fil de tendon, et l'aiguille piqua les doigts.",
 "budget":"12 / 12,5 (garde 8 + riposte 6 − 2 PV)"},
{"id":"CIT-plus-3","zone":"CIT","pole":"+","palier":3,"nom":"Le Témoin venu de loin","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2 ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts ; reprenez la dernière carte de la défausse. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",2],["riposte",4],["recup"],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle +","Marque","Riposte","Récupération","Prix"],
 "ambiance":"Il avait marché trois hivers pour réclamer une dette, l'écorce du contrat cousue dans sa doublure.",
 "budget":"15 / 15 (vulnérable 6 + riposte 8 + récup 4 − défausse 3)"},
{"id":"CIT-plus-4","zone":"CIT","pole":"+","palier":4,"nom":"L'Ambre rouvert","cout":1,"cible":0,
 "effet":"Piochez 3 cartes, puis défaussez 1 carte au hasard. Le héros gagne 8 de garde.",
 "ops":[["pioche",3],["prixDefausse",1],["garde","heros",8]],
 "tags":["Citadelle","Glace","Pôle +","Pioche","Garde","Prix"],
 "ambiance":"Les Sèvelins ouvrirent leur ambre : dedans, les lettres qu'ils avaient avalées pour les sauver.",
 "budget":"15,4 / 17,5 (−12 % ; pioche 12 + garde 6,4 − défausse 3)"},
{"id":"CIT-plus-5","zone":"CIT","pole":"+","palier":5,"nom":"La Vieille Conteuse","cout":2,"cible":0,
 "effet":"Tous les ennemis deviennent vulnérables 3. Piochez 2 cartes, reprenez la dernière carte de la défausse, et la prochaine carte de zone jouée ce tour a son effet doublé. Prix : le héros perd 4 PV.",
 "ops":[["vulnerable","tous",3],["pioche",2],["recup"],["echo"],["prixPV",4]],
 "tags":["Citadelle","Glace","Pôle +","Marque","Pioche","Récupération","Écho","Prix"],
 "ambiance":"Elle récita la chronique de mémoire, en mesure, et chaque nom désigna quelqu'un dans la salle.",
 "budget":"33,8 / 32 (vulnérable tous 19,8 + pioche 8 + récup 4 + écho 6 − 4 PV)"},
{"id":"CIT-plus-6","zone":"CIT","pole":"+","palier":6,"nom":"Témoins aux créneaux","cout":1,"cible":0,
 "effet":"Jusqu'au prochain tour, chaque coup reçu par le héros renvoie 7 dégâts. Le héros gagne 8 de garde. Reprenez la dernière carte de la défausse.",
 "ops":[["riposte",7],["garde","heros",8],["recup"]],
 "tags":["Citadelle","Glace","Pôle +","Riposte","Garde","Récupération"],
 "ambiance":"Les Échos du rempart désignaient chaque assaillant du doigt, et l'écorce cousue tenait le compte.",
 "budget":"24,4 / 22,5 (+8 % ; riposte 14 + garde 6,4 + récup 4)"},
{"id": "CIT-plus7", "zone": "CIT", "pole": "+", "palier": 7, "nom": "Le Tribunal des Bouleaux", "cout": 2, "cible": 0,
 "effet":"Audience. Tous les ennemis deviennent vulnérables 4. Piochez 3 cartes, reprenez en main la dernière carte de la défausse, et la prochaine carte de zone jouée ce tour a son effet doublé. Pose Sceau. Si Sang est posée (consommée) : le frère noyé prononce la sentence, 15 dégâts à tous qui ignorent la garde. Prix : le héros, appelé à la barre, perd 3 PV.",
 "ops":[["vulnerable", "tous", 4], ["pioche", 3], ["recup"], ["echo"], ["pose", "Sceau"], ["reveil", "Sang", true, [["deg", "tous", 15], ["ignoreGarde"]]], ["prixPV", 3]],
 "tags":["Citadelle", "Glace", "Forme ultime +7", "Marque", "Pioche", "Récupération", "Écho", "Combo", "Pose Sceau", "Réveil Sang", "Dégâts", "Perce-garde", "Prix"],
 "ambiance":"Le juge avait encore les cheveux mouillés ; il lut la chronique dans l'ordre, et le greffier n'omit aucun nom.",
 "budget":"45,4 sans combo (vulnérable tous 26,4 + pioche 12 + récup 4 + écho 6 − 3 PV) ; réveil +36 (79 %)"}
]
```

---

## 2. La Taïga de Kobor (DON045) — Glace

**Mensonge (−)** : la promesse au trésor → la suie de lampe → la peau teinte → les années manquantes → les trappeurs en peaux → quatre cents, toutes noires → le Coffre scellé. Fil mécanique : hésitation, leurres invoqués et bonus « si une bête est en jeu ».
**Vérité (+)** : le doute de l'inspecteur → le pouce mouillé → la teinture qui coule → les chiens recomptés → le Coffre ouvert → le registre de l'An 23 → le Compte juste. Fil mécanique : marque (vulnérable), dégâts qui ignorent la garde, coups au hasard, bonus « un seul ennemi ».

```json
[
{"id":"DON045-moins-1","zone":"DON045","pole":"-","palier":1,"nom":"Promesse au trésor","cout":1,"cible":1,
 "effet":"La cible hésite ce tour. Piochez 1 carte ; le héros gagne 2 de garde.",
 "ops":[["hesite","cible"],["pioche",1],["garde","heros",2]],
 "tags":["Donjon","Glace","Pôle −","Contrôle","Pioche","Garde"],
 "ambiance":"Quatre cents zibelines par hiver, promit le voïévode ; le trésor nota le chiffre sans lever les yeux.",
 "budget":"10,6 / 10 (hésite 5 + pioche 4 + garde 1,6)"},
{"id":"DON045-moins-2","zone":"DON045","pole":"-","palier":2,"nom":"Suie de lampe","cout":1,"cible":1,
 "effet":"La cible perd 2 d'attaque pour le combat ; si elle hésite, elle en perd 2 de plus. Piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit",2,"cible"],["si","hesite",[["affaiblit",2,"cible"]]],["pioche",1],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Affaiblissement","Condition","Pioche","Prix"],
 "ambiance":"On racla les lampes du hameau pour noircir les peaux ; on veilla ensuite dans le noir.",
 "budget":"12 / 12,5 (affaiblit 6 + 3 si hésite + pioche 4 − 1 PV)"},
{"id":"DON045-moins-3","zone":"DON045","pole":"-","palier":3,"nom":"Peau teinte","cout":2,"cible":1,
 "effet":"Un Chien teint en zibeline rejoint le combat : 18 PV, frappe 6 à chaque tour. La cible, trompée par le leurre, hésite ce tour.",
 "ops":[["invoque","Chien teint en zibeline",18,6],["hesite","cible"]],
 "tags":["Donjon","Glace","Pôle −","Invocation","Contrôle"],
 "ambiance":"Passé à la suie, le chien du hameau valait une zibeline au registre, tant qu'il ne pleuvait pas.",
 "budget":"23 / 24 (invocation 9 + 9 + hésite 5)"},
{"id":"DON045-moins-4","zone":"DON045","pole":"-","palier":4,"nom":"Les Années manquantes","cout":1,"cible":1,
 "effet":"Défaussez 2 cartes au hasard, piochez 3 cartes et gagnez 2 mana Glace. La cible hésite ce tour.",
 "ops":[["prixDefausse",2],["pioche",3],["mana","Glace",2],["hesite","cible"]],
 "tags":["Donjon","Glace","Pôle −","Pioche","Mana","Contrôle","Prix"],
 "ambiance":"Six feuillets arrachés au registre ; le relieur fut payé en peaux, noires évidemment.",
 "budget":"17 / 17,5 (pioche 12 + mana 6 + hésite 5 − défausse 6)"},
{"id":"DON045-moins-5","zone":"DON045","pole":"-","palier":5,"nom":"Trappeurs en peaux","cout":2,"cible":0,
 "effet":"Un Trappeur déguisé rejoint le combat : 20 PV, frappe 8. Tous les ennemis perdent 1 d'attaque pour le combat ; si une bête est en jeu, ils hésitent aussi ce tour. Prix : votre bête la plus faible perd 4 PV.",
 "ops":[["invoque","Trappeur déguisé",20,8],["affaiblit",1,"tous"],["si","bete",[["hesite","tous"]]],["prixBete",4]],
 "tags":["Donjon","Glace","Pôle −","Invocation","Affaiblissement","Contrôle","Condition","Prix"],
 "ambiance":"Quand les chiens manquèrent, les trappeurs enfilèrent les peaux eux-mêmes et marchèrent à quatre pattes devant l'inspecteur.",
 "budget":"29,1 / 32 (−9 % ; invocation 22 + affaiblit tous 6,6 + hésite tous 4,5 à 50 % − 4 bête)"},
{"id":"DON045-moins-6","zone":"DON045","pole":"-","palier":6,"nom":"Quatre cents, toutes noires","cout":2,"cible":0,
 "effet":"Tous les ennemis hésitent ce tour. Un Chien teint rejoint le combat : 22 PV, frappe 7. Si une bête était déjà en jeu, piochez 2 cartes. Gagnez 1 mana Glace. Prix : le héros perd 3 PV.",
 "ops":[["hesite","tous"],["si","bete",[["pioche",2]]],["invoque","Chien teint",22,7],["mana","Glace",1],["prixPV",3]],
 "tags":["Donjon","Glace","Pôle −","Contrôle","Invocation","Condition","Pioche","Mana","Prix"],
 "ambiance":"L'An 16, le compte tomba juste et d'un noir parfaitement égal ; personne n'osa en frotter une.",
 "budget":"34,5 / 36 (hésite tous 9 + invocation 21,5 + pioche 4 à 50 % + mana 3 − 3 PV)"},
{"id": "DON045-moins7", "zone": "DON045", "pole": "-", "palier": 7, "nom": "Le Coffre scellé", "cout": 2, "cible": 1,
 "effet":"On referme la loge. L'Inspecteur gelé rejoint le combat : 36 PV, ne frappe pas, encaisse. Tous les ennemis perdent 2 d'attaque pour le combat, la cible hésite ce tour, piochez 2 cartes et gagnez 1 mana Glace. Pose Givre. Si Racine est posée (consommée) : la meute sort du Coffre, deux Chiens de la meute teinte rejoignent le combat (12 PV, frappent 6 chacun).",
 "ops":[["invoque", "L'Inspecteur gelé", 36, 0], ["affaiblit", 2, "tous"], ["hesite", "cible"], ["pioche", 2], ["mana", "Glace", 1], ["pose", "Givre"], ["reveil", "Racine", true, [["invoque", "Chien de la meute teinte", 12, 6], ["invoque", "Chien de la meute teinte", 12, 6]]]],
 "tags":["Donjon", "Glace", "Forme ultime −7", "Invocation", "Affaiblissement", "Contrôle", "Pioche", "Mana", "Combo", "Pose Givre", "Réveil Racine"],
 "ambiance":"Le registre de l'An 23 tomba juste parce que l'inspecteur ne sortit jamais du Coffre ; il garde la porte depuis.",
 "budget":"47,2 sans combo (invocation 18 + affaiblit tous 13,2 + hésite 5 + pioche 8 + mana 3) ; réveil +30 (64 %)"},
{"id":"DON045-plus-1","zone":"DON045","pole":"+","palier":1,"nom":"Le Doute de l'inspecteur","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2, puis subit 4 dégâts.",
 "ops":[["vulnerable","cible",2],["deg","cible",4]],
 "tags":["Donjon","Glace","Pôle +","Marque","Dégâts"],
 "ambiance":"L'inspecteur relut trois fois la colonne des zibelines ; elle était trop régulière pour une forêt.",
 "budget":"10 / 10 (vulnérable 6 + 4)"},
{"id":"DON045-plus-2","zone":"DON045","pole":"+","palier":2,"nom":"Le Pouce mouillé","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 1, puis subit 9 dégâts qui ignorent la garde. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","cible",1],["deg","cible",9],["ignoreGarde"],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle +","Marque","Dégâts","Perce-garde","Prix"],
 "ambiance":"Il frotta la peau, et la teinture lui noircit le pouce : la vérité tache d'abord celui qui cherche.",
 "budget":"13 / 12,5 (vulnérable 3 + 9 + ignore-garde 3 − 2 PV)"},
{"id":"DON045-plus-3","zone":"DON045","pole":"+","palier":3,"nom":"La Teinture qui coule","cout":1,"cible":1,
 "effet":"La garde de tous les ennemis tombe à 0 et ils deviennent vulnérables 1 ; 4 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["briseGarde","tous"],["vulnerable","tous",1],["deg","cible",4],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle +","Perce-garde","Marque","Dégâts","Prix"],
 "ambiance":"Le dégel fit couler la suie des quatre mille peaux en une rigole noire jusqu'à la porte.",
 "budget":"15,2 / 15 (brise-garde tous 6,6 + vulnérable tous 6,6 + 4 − 2 PV)"},
{"id":"DON045-plus-4","zone":"DON045","pole":"+","palier":4,"nom":"Les Chiens recomptés","cout":2,"cible":0,
 "effet":"4 coups de 5 dégâts au hasard, qui ignorent la garde. S'il ne reste qu'un ennemi, il subit encore 10 dégâts.",
 "ops":[["deg","hasard",5,4],["ignoreGarde"],["si","seul",[["deg","cible",10]]]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Perce-garde","Condition"],
 "ambiance":"Au hameau, on compta les niches vides : dix-sept, de l'An 17, comme par hasard.",
 "budget":"28 / 28 (20 + ignore-garde 3 + 10 si seul à 50 %)"},
{"id":"DON045-plus-5","zone":"DON045","pole":"+","palier":5,"nom":"Le Coffre ouvert","cout":2,"cible":1,
 "effet":"La cible devient vulnérable 3, puis subit 20 dégâts qui ignorent la garde. Piochez 1 carte. Prix : le héros perd 4 PV.",
 "ops":[["vulnerable","cible",3],["deg","cible",20],["ignoreGarde"],["pioche",1],["prixPV",4]],
 "tags":["Donjon","Glace","Pôle +","Marque","Dégâts","Perce-garde","Pioche","Prix"],
 "ambiance":"Sous les mélèzes, la loge exhalait l'odeur du chien mouillé ; quatre mille fois la même.",
 "budget":"32 / 32 (vulnérable 9 + 20 + ignore-garde 3 + pioche 4 − 4 PV)"},
{"id":"DON045-plus-6","zone":"DON045","pole":"+","palier":6,"nom":"Le Registre de l'An 23","cout":2,"cible":1,
 "effet":"Tous les ennemis deviennent vulnérables 2 ; 16 dégâts à la cible qui ignorent la garde ; reprenez la dernière carte de la défausse. S'il ne reste qu'un ennemi, il devient vulnérable 2 de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","tous",2],["deg","cible",16],["ignoreGarde"],["recup"],["si","seul",[["vulnerable","cible",2]]],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle +","Marque","Dégâts","Perce-garde","Récupération","Condition","Prix"],
 "ambiance":"Le dernier registre tombe juste, d'une écriture sans ratures ; on ne sait pas qui le tint.",
 "budget":"36,2 / 36 (vulnérable tous 13,2 + 16 + ignore-garde 3 + récup 4 + 3 si seul − défausse 3)"},
{"id": "DON045-plus7", "zone": "DON045", "pole": "+", "palier": 7, "nom": "Le Compte juste", "cout": 2, "cible": 0,
 "effet":"Recensement. Tous les ennemis deviennent vulnérables 2, puis 5 coups de 6 dégâts au hasard qui ignorent la garde ; s'il ne reste qu'un ennemi, il subit encore 10 dégâts. Pose Sang. Si Abîme est posée (consommée) : les années manquantes ressortent du registre, 4 coups de 6 dégâts au hasard, reprenez la dernière carte de la défausse et piochez 1 carte. Prix : le héros perd 4 PV.",
 "ops":[["vulnerable", "tous", 2], ["deg", "hasard", 6, 5], ["ignoreGarde"], ["si", "seul", [["deg", "cible", 10]]], ["pose", "Sang"], ["reveil", "Abîme", true, [["deg", "hasard", 6, 4], ["recup"], ["pioche", 1]]], ["prixPV", 4]],
 "tags":["Donjon", "Glace", "Forme ultime +7", "Marque", "Dégâts", "Perce-garde", "Condition", "Combo", "Pose Sang", "Réveil Abîme", "Récupération", "Pioche", "Prix"],
 "ambiance":"On recompta peau par peau, puis chien par chien, puis trappeur par trappeur ; le compte fut juste, et payé en sang.",
 "budget":"47,2 sans combo (vulnérable tous 13,2 + 30 + ignore-garde 3 + 10 si seul à 50 % − 4 PV) ; réveil +32 (68 %)"}
]
```

---

## 3. La Lande de Cezo (ASS006) — Vent

**Corruption (−)** : la fève creusée → le plomb dans la fève → la fève lestée → le paravent goudronné → le banc vendu aux sauniers → le premier incendie → la Lande brûlée trois fois. Fil mécanique : brûlure, affaiblissement, mana Vent et écho (la maison qui achète paie le héros).
**Pureté (+)** : la fève jetée en l'air → le cercle de pierre → le vote au vent → les paravents arrachés → le retour des bergers → le brûlis réglé → le Vent sans paravent. Fil mécanique : pioche, écho, soin, puis bergers invoqués et bonus « si une bête est en jeu ».

```json
[
{"id":"ASS006-moins-1","zone":"ASS006","pole":"-","palier":1,"nom":"Fève creusée","cout":0,"cible":1,
 "effet":"La cible brûle : 2 dégâts au début de chacun de ses 2 prochains tours.",
 "ops":[["brulure","cible",2,2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts dans le temps"],
 "ambiance":"Une fève de bruyère évidée au poinçon, le premier hiver, par un conseiller qui jurait plaisanter.",
 "budget":"4 / 4 (brûlure 2 × 2)"},
{"id":"ASS006-moins-2","zone":"ASS006","pole":"-","palier":2,"nom":"Plomb dans la fève","cout":1,"cible":1,
 "effet":"La cible brûle : 4 dégâts au début de chacun de ses 2 prochains tours, et perd 1 d'attaque pour le combat. Gagnez 1 mana Vent. Prix : le héros perd 2 PV.",
 "ops":[["brulure","cible",4,2],["affaiblit",1,"cible"],["mana","Vent",1],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts dans le temps","Affaiblissement","Mana","Prix"],
 "ambiance":"Le plomb venait des sceaux fondus de l'ancien conseil ; il pesait juste ce qu'il fallait.",
 "budget":"12 / 12,5 (brûlure 8 + affaiblit 3 + mana 3 − 2 PV)"},
{"id":"ASS006-moins-3","zone":"ASS006","pole":"-","palier":3,"nom":"Fève lestée","cout":1,"cible":1,
 "effet":"La cible brûle : 5 dégâts au début de chacun de ses 2 prochains tours. Tous les ennemis perdent 1 d'attaque pour le combat. Prix : le héros perd 2 PV.",
 "ops":[["brulure","cible",5,2],["affaiblit",1,"tous"],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts dans le temps","Affaiblissement","Prix"],
 "ambiance":"La fève lestée retombait toujours dans le cercle des sauniers ; le conseiller qui la jeta toussa longtemps.",
 "budget":"14,6 / 15 (brûlure 10 + affaiblit tous 6,6 − 2 PV)"},
{"id":"ASS006-moins-4","zone":"ASS006","pole":"-","palier":4,"nom":"Le Paravent goudronné","cout":1,"cible":1,
 "effet":"La cible hésite ce tour ; si elle hésite, elle brûle aussi de 3 au début de ses 2 prochains tours. Le héros gagne 8 de garde et 1 mana Vent.",
 "ops":[["hesite","cible"],["si","hesite",[["brulure","cible",3,2]]],["garde","heros",8],["mana","Vent",1]],
 "tags":["Assemblée","Vent","Pôle −","Contrôle","Condition","Dégâts dans le temps","Garde","Mana"],
 "ambiance":"Derrière la toile goudronnée, le vent tombait, et les fèves aussi, exactement où on les attendait.",
 "budget":"17,4 / 17,5 (hésite 5 + brûlure 6 à 50 % + garde 6,4 + mana 3)"},
{"id":"ASS006-moins-5","zone":"ASS006","pole":"-","palier":5,"nom":"Le Banc vendu aux sauniers","cout":2,"cible":1,
 "effet":"Gagnez 3 mana Vent ; la prochaine carte de zone jouée ce tour a son effet doublé. Tous les ennemis perdent 2 d'attaque pour le combat ; la cible brûle de 4 au début de ses 2 prochains tours. Prix : le héros perd 4 PV.",
 "ops":[["mana","Vent",3],["echo"],["affaiblit",2,"tous"],["brulure","cible",4,2],["prixPV",4]],
 "tags":["Assemblée","Vent","Pôle −","Mana","Écho","Affaiblissement","Dégâts dans le temps","Prix"],
 "ambiance":"La seconde inscription fut gravée plus bas, d'une main plus fine : banc cédé, avec le vent.",
 "budget":"32,2 / 32 (mana 9 + écho 6 + affaiblit tous 13,2 + brûlure 8 − 4 PV)"},
{"id":"ASS006-moins-6","zone":"ASS006","pole":"-","palier":6,"nom":"Premier incendie","cout":2,"cible":0,
 "effet":"Tous les ennemis brûlent : 4 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. Piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["brulure","tous",4,3],["briseGarde","tous"],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts dans le temps","Perce-garde","Pioche","Prix"],
 "ambiance":"La bruyère brûla une première fois, par un ciel sans orage ; les bornes du commun partirent avec.",
 "budget":"35 / 36 (brûlure tous 26,4 + brise-garde tous 6,6 + pioche 4 − 2 PV)"},
{"id": "ASS006-moins7", "zone": "ASS006", "pole": "-", "palier": 7, "nom": "La Lande brûlée trois fois", "cout": 2, "cible": 0,
 "effet":"Le feu efface les bornes. Tous les ennemis brûlent : 6 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. La prochaine carte de zone jouée ce tour a son effet doublé. Pose Braise. Si Sceau est posée (consommée) : la loi est achetée, +1 de capacité ce tour, piochez 3 cartes, gagnez encore 2 mana Vent et tous les ennemis hésitent ce tour. Prix : le héros perd 3 PV.",
 "ops":[["brulure", "tous", 6, 3], ["briseGarde", "tous"], ["echo"], ["pose", "Braise"], ["reveil", "Sceau", true, [["boost"], ["pioche", 3], ["mana", "Vent", 2], ["hesite", "tous"]]], ["prixPV", 3]],
 "tags":["Assemblée", "Vent", "Forme ultime −7", "Dégâts dans le temps", "Perce-garde", "Mana", "Écho", "Combo", "Pose Braise", "Réveil Sceau", "Boost", "Pioche", "Contrôle", "Prix"],
 "ambiance":"Chaque incendie emporta une rangée de bornes, et chaque nouveau cadastre fut signé au banc, par les mêmes mains.",
 "budget":"48,6 sans combo (brûlure tous 33 + brise-garde 6,6 + mana 6 + écho 6 − 3 PV) ; réveil +33 (69 %)"},
{"id":"ASS006-plus-1","zone":"ASS006","pole":"+","palier":1,"nom":"Fève jetée en l'air","cout":0,"cible":0,
 "effet":"Piochez 1 carte.",
 "ops":[["pioche",1]],
 "tags":["Assemblée","Vent","Pôle +","Pioche"],
 "ambiance":"Une poignée de fèves lancée au-dessus du banc ; le vent seul décidait où elles retombaient.",
 "budget":"4 / 4 (pioche 4)"},
{"id":"ASS006-plus-2","zone":"ASS006","pole":"+","palier":2,"nom":"Le Cercle de pierre","cout":1,"cible":0,
 "effet":"Défaussez 1 carte au hasard. Piochez 1 carte ; le héros gagne 8 de garde et se soigne de 5.",
 "ops":[["prixDefausse",1],["pioche",1],["garde","heros",8],["soin","heros",5]],
 "tags":["Assemblée","Vent","Pôle +","Pioche","Garde","Soin","Prix"],
 "ambiance":"On ne comptait que les fèves tombées dans le cercle ; les autres, on les laissait à la lande.",
 "budget":"12,4 / 12,5 (pioche 4 + garde 6,4 + soin 5 − défausse 3)"},
{"id":"ASS006-plus-3","zone":"ASS006","pole":"+","palier":3,"nom":"Vote au vent","cout":1,"cible":0,
 "effet":"Défaussez 1 carte au hasard, puis piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Le héros se soigne de 7.",
 "ops":[["prixDefausse",1],["pioche",1],["echo"],["soin","heros",7]],
 "tags":["Assemblée","Vent","Pôle +","Pioche","Écho","Soin","Prix"],
 "ambiance":"Sans paravent, le vent rendit des verdicts que personne n'avait payés ; on en jeta quelques-uns, par prudence.",
 "budget":"14 / 15 (pioche 4 + écho 6 + soin 7 − défausse 3)"},
{"id":"ASS006-plus-4","zone":"ASS006","pole":"+","palier":4,"nom":"Paravents arrachés","cout":1,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0. Piochez 2 cartes ; le héros se soigne de 3.",
 "ops":[["briseGarde","tous"],["pioche",2],["soin","heros",3]],
 "tags":["Assemblée","Vent","Pôle +","Perce-garde","Pioche","Soin"],
 "ambiance":"On arracha les montants au burin ; les trous restèrent dans la pierre du banc, pour mémoire.",
 "budget":"17,6 / 17,5 (brise-garde tous 6,6 + pioche 8 + soin 3)"},
{"id":"ASS006-plus-5","zone":"ASS006","pole":"+","palier":5,"nom":"Retour des bergers","cout":2,"cible":0,
 "effet":"Une Bergère de la lande rejoint le combat : 20 PV, frappe 5. Tous vos alliés se soignent de 6 ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Bergère de la lande",20,5],["soin","allies",6],["garde","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Invocation","Soin","Garde","Prix"],
 "ambiance":"Les bergers revinrent s'asseoir au banc avec leurs bêtes, ce que l'ancienne inscription n'interdisait pas.",
 "budget":"29,9 / 32 (−7 % ; invocation 17,5 + soin alliés 9 + garde 6,4 − défausse 3)"},
{"id":"ASS006-plus-6","zone":"ASS006","pole":"+","palier":6,"nom":"Brûlis réglé","cout":2,"cible":0,
 "effet":"8 dégâts à tous les ennemis. Si une bête est en jeu, tous vos alliés se soignent de 8. Piochez 2 cartes ; la prochaine carte de zone jouée ce tour a son effet doublé. Prix : le héros perd 2 PV.",
 "ops":[["deg","tous",8],["si","bete",[["soin","allies",8]]],["pioche",2],["echo"],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Condition","Soin","Pioche","Écho","Prix"],
 "ambiance":"Cette fois, le feu fut mis par parcelles, au vu de tous, et la bruyère repoussa pour les moutons.",
 "budget":"35,6 / 36 (dégâts tous 17,6 + soin alliés 6 à 50 % + pioche 8 + écho 6 − 2 PV)"},
{"id": "ASS006-plus7", "zone": "ASS006", "pole": "+", "palier": 7, "nom": "Le Vent sans paravent", "cout": 2, "cible": 0,
 "effet":"Les bergers reviennent au banc. Les Bergers du banc rejoignent le combat : 24 PV, frappent 5. Tous vos alliés se soignent de 8, le héros gagne 8 de garde, piochez 2 cartes. Pose Racine. Si Braise est posée (consommée) : le brûlis réglé, la garde de tous les ennemis tombe à 0 et ils subissent 12 dégâts.",
 "ops":[["invoque", "Bergers du banc", 24, 5], ["soin", "allies", 8], ["garde", "heros", 8], ["pioche", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["briseGarde", "tous"], ["deg", "tous", 12]]]],
 "tags":["Assemblée", "Vent", "Forme ultime +7", "Invocation", "Soin", "Garde", "Pioche", "Combo", "Pose Racine", "Réveil Braise", "Perce-garde", "Dégâts"],
 "ambiance":"On arracha les trous des paravents au burin ; les bergers rallumèrent la lande eux-mêmes, par parcelles, et l'appelèrent un vote.",
 "budget":"45,9 sans combo (invocation 19,5 + soin alliés 12 + garde 6,4 + pioche 8) ; réveil +33 (72 %)"}
]
```

---

## 4. Les Ruines de Teoco (RES079) — Pierre

Trois Gerbes tirées de l'inventaire de ruine : la marche retournée, la meule usée, puis la lame du mur tourné.

```json
[
{"id":"RES079-gerbe-1","zone":"RES079","pole":"res","palier":1,"nom":"La Marche retournée","cout":0,"cible":0,
 "effet":"Piochez 1 carte ; le héros gagne 4 de garde.",
 "ops":[["pioche",1],["garde","heros",4]],
 "tags":["Ressource","Pierre","Gerbe","Pioche","Garde"],
 "ambiance":"Une marche reposée à l'envers, glyphes de tribut contre la terre : on s'y abrite sans lire.",
 "budget":"7,2 / 7 (pioche 4 + garde 3,2)"},
{"id":"RES079-gerbe-2","zone":"RES079","pole":"res","palier":2,"nom":"La Meule en cuvette","cout":0,"cible":0,
 "effet":"Piochez 1 carte, gagnez 1 mana Pierre ; le héros gagne 3 de garde.",
 "ops":[["pioche",1],["mana","Pierre",1],["garde","heros",3]],
 "tags":["Ressource","Pierre","Gerbe","Pioche","Mana","Garde"],
 "ambiance":"Au fond de la meule usée, quelqu'un grava un compte de capes ; le maïs, lui, ne fut pas compté.",
 "budget":"9,4 / 9 (pioche 4 + mana 3 + garde 2,4)"},
{"id":"RES079-gerbe-3","zone":"RES079","pole":"res","palier":3,"nom":"Éclat du mur tourné","cout":0,"cible":1,
 "effet":"Piochez 1 carte ; 7 dégâts à la cible.",
 "ops":[["pioche",1],["deg","cible",7]],
 "tags":["Ressource","Pierre","Gerbe","Pioche","Dégâts"],
 "ambiance":"Une lame d'obsidienne arrachée à l'enceinte, tranchant vers le dedans, comme le voulaient les collecteurs.",
 "budget":"11 / 11 (pioche 4 + 7)"}
]
```

---

## 5. La Steppe de Gramir (RES212) — Vent

Trois Gerbes tirées du revers : l'anneau usé, la proclamation clouée, puis l'orge du tribut.

```json
[
{"id":"RES212-gerbe-1","zone":"RES212","pole":"res","palier":1,"nom":"L'Anneau usé","cout":0,"cible":0,
 "effet":"Piochez 1 carte et gagnez 1 mana Vent.",
 "ops":[["pioche",1],["mana","Vent",1]],
 "tags":["Ressource","Vent","Gerbe","Pioche","Mana"],
 "ambiance":"L'anneau du relais brille d'usure ; officiellement, aucun cheval n'y fut attaché depuis la proclamation.",
 "budget":"7 / 7 (pioche 4 + mana 3)"},
{"id":"RES212-gerbe-2","zone":"RES212","pole":"res","palier":2,"nom":"La Proclamation clouée","cout":0,"cible":1,
 "effet":"Piochez 1 carte ; la cible hésite ce tour.",
 "ops":[["pioche",1],["hesite","cible"]],
 "tags":["Ressource","Vent","Gerbe","Pioche","Contrôle"],
 "ambiance":"Lue à voix haute au poteau, la proclamation arrêtait tout le monde, le temps de la lecture.",
 "budget":"9 / 9 (pioche 4 + hésite 5)"},
{"id":"RES212-gerbe-3","zone":"RES212","pole":"res","palier":3,"nom":"Orge du tribut","cout":0,"cible":0,
 "effet":"Piochez 1 carte ; le héros se soigne de 7.",
 "ops":[["pioche",1],["soin","heros",7]],
 "tags":["Ressource","Vent","Gerbe","Pioche","Soin"],
 "ambiance":"Une gerbe d'orge d'hiver liée au crin de cheval ; le percepteur ne demanda jamais d'où venait le crin.",
 "budget":"11 / 11 (pioche 4 + soin 7)"}
]
```

---

## Récapitulatif des progressions

| Tuile · pôle | P1 | P2 | P3 | P4 | P5 | P6 | P7 (pose → réveille) |
|---|---|---|---|---|---|---|---|
| Berestograd − Oubli | Écorces à la boue (1) | Le Tesson d'Ouliana (0) | Généalogie neuve (1) | Le Vernis des Sèvelins (2) | Icône repeinte (1) | Neige de l'oubli (1) | Le Visage raboté (Abîme → Givre) |
| Berestograd + Mémoire | Lettre ramassée (0) | Écorce cousue au mur (1) | Le Témoin venu de loin (1) | L'Ambre rouvert (1) | La Vieille Conteuse (2) | Témoins aux créneaux (1) | Le Tribunal des Bouleaux (Sceau → Sang) |
| Kobor − Mensonge | Promesse au trésor (1) | Suie de lampe (1) | Peau teinte (2) | Les Années manquantes (1) | Trappeurs en peaux (2) | Quatre cents, toutes noires (2) | Le Coffre scellé (Givre → Racine) |
| Kobor + Vérité | Le Doute de l'inspecteur (1) | Le Pouce mouillé (1) | La Teinture qui coule (1) | Les Chiens recomptés (2) | Le Coffre ouvert (2) | Le Registre de l'An 23 (2) | Le Compte juste (Sang → Abîme) |
| Cezo − Corruption | Fève creusée (0) | Plomb dans la fève (1) | Fève lestée (1) | Le Paravent goudronné (1) | Le Banc vendu aux sauniers (2) | Premier incendie (2) | La Lande brûlée trois fois (Braise → Sceau) |
| Cezo + Pureté | Fève jetée en l'air (0) | Le Cercle de pierre (1) | Vote au vent (1) | Paravents arrachés (1) | Retour des bergers (2) | Brûlis réglé (2) | Le Vent sans paravent (Racine → Braise) |
| Teoco (Gerbes) | La Marche retournée | La Meule en cuvette | Éclat du mur tourné | | | | |
| Gramir (Gerbes) | L'Anneau usé | La Proclamation clouée | Orge du tribut | | | | |

(coût entre parenthèses). Prix : paliers 1-6, 4 cartes sur 6 dans chacun des six pôles. Les secrets de Berestograd restent ceux de `conteur_A.md`.

