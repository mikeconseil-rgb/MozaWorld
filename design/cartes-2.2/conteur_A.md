# Cartes 2.2 — Conteur A, le Chroniqueur amer

Tuiles : Berestograd (CIT), La Taïga de Kobor (DON045), La Lande de Cezo (ASS006), Les Ruines de Teoco (RES079), La Steppe de Gramir (RES212).

**Conventions d'écriture des `ops`** (vocabulaire de la section 2, rien d'autre) : une valeur `[a,b]` vaut a+bL ; cibles `"cible"`, `"tous"`, `"hasard"` (avec le nombre de coups en 4e position), `"heros"`, `"allies"` ; `["brulure", cible, n, t]` ; `["vulnerable", cible, n]` ; `["affaiblit", n, cible]` ; `["invoque", nom, PV, attaque]` ; `["reveil", résonance, consomme, [effets]]` ; `["si", condition, [effets]]` avec les conditions `bete`, `mipv`, `seul`, `hesite`, `garde`.

**Conventions de budget** (section 3) : « tous » = ×2,2 (dégâts, brûlure, affaiblit, vulnérable, brise-garde) ; hésite tous = 4 × 2,2 ≈ 9 ; ignoreGarde compté 3 (comme brise-garde) ; un effet sous `si` compté à 50 % ; soin « alliés » compté ×1,5 (héros + une bête) ; `exil` d'une carte de zone compté comme un prix de 3 (« carte exilée », section 1). Les cartes de pôle sont vérifiées de L1 à L6 (au palier 7 elles deviennent la forme ultime). Budget de pôle : coût 1 = 10 → 22,5 ; coût 2 = 16 → 36.

---

## 1. Berestograd, la Ville-Écorce (CIT) — Citadelle · Glace · Oubli (−) / Mémoire (+)

**Background (résumé).** Ouliana, illettrée choisie pour cela, racla onze hivers les écorces de la boue de la citadelle pour que les scribes du kniaz y recopient une généalogie neuve, effaçant le nom du frère noyé ; les Sèvelins furent saignés pour vernir les icônes repeintes.
À sa mort, on trouva sous sa paillasse une écorce intacte, pliée en huit, que personne ne déplia : la ville penche entre l'oubli qu'on achète et la mémoire qui réclame sa dette.

- **Pôle − (Oubli)** : la neige et le racloir effacent les noms ; les ennemis perdent leur garde et leurs ordres, mais le héros oublie aussi.
- **Pôle + (Mémoire)** : les écorces cousues aux murs font des témoins ; chaque coup reçu est noté et rendu, et ce qui fut jeté revient dans la main.

```json
[
{"id":"CIT-moins","zone":"CIT","pole":"-","palier":"1-6","nom":"Neige de l'oubli","cout":1,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0, puis (1+L) dégâts à tous. S'il ne reste qu'un ennemi, il oublie son ordre : il hésite ce tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",[1,1]],["si","seul",[["hesite","cible"]]],["prixDefausse",1]],
 "tags":["Citadelle","Glace","Pôle −","Dégâts","Perce-garde","Contrôle","Condition","Prix"],
 "ambiance":"La neige recouvrit les créneaux comme l'enduit les icônes ; les gardes y perdirent leur consigne, et le héros une ligne.",
 "budget":"L1 10,5 / 10 → L6 21,5 / 22,5 (vérifié : brise-garde tous 6,6 + dégâts tous 2,2(1+L) + hésite si seul 2,5 − défausse 3)"},

{"id":"CIT-plus","zone":"CIT","pole":"+","palier":"1-6","nom":"Témoins aux créneaux","cout":1,"cible":0,
 "effet":"Jusqu'au prochain tour, chaque coup reçu par le héros renvoie (1+L) dégâts à l'attaquant. Le héros gagne (2+L) de garde. Reprenez en main la dernière carte de votre défausse.",
 "ops":[["riposte",[1,1]],["garde","heros",[2,1]],["recup"]],
 "tags":["Citadelle","Glace","Pôle +","Riposte","Garde","Récupération"],
 "ambiance":"Sur chaque rondin, une écorce cousue tenait le compte des coups ; les Échos du rempart désignaient le débiteur du doigt.",
 "budget":"L1 10,4 / 10 → L6 24,4 / 22,5 (+8 %, vérifié : riposte 2(1+L) + garde 0,8(2+L) + récup 4)"},

{"id":"CIT-moins7","zone":"CIT","pole":"-","palier":"7","nom":"Le Visage raboté","cout":2,"cible":0,
 "effet":"Rituel d'effacement. Tous les ennemis hésitent ce tour, leur garde tombe à 0, ils perdent 2 d'attaque pour le combat et subissent 12 dégâts. Pose Abîme. Si Givre est posée (consommée) : les visages oubliés se fendent, tous les ennemis deviennent vulnérables 5. Prix : défaussez 1 carte ; la carte s'exile.",
 "ops":[["hesite","tous"],["briseGarde","tous"],["affaiblit",2,"tous"],["deg","tous",12],["pose","Abîme"],["reveil","Givre",true,[["vulnerable","tous",5]]],["prixDefausse",1],["exil"]],
 "tags":["Citadelle","Glace","Forme ultime −7","Contrôle","Perce-garde","Affaiblissement","Dégâts","Combo","Pose Abîme","Réveil Givre","Marque","Prix","Exil"],
 "ambiance":"Le kniaz fit raboter son propre visage pour ressembler à toutes ses icônes ; la ville cessa d'obéir à qui que ce fût.",
 "budget":"49,2 sans combo (hésite tous 9 + brise-garde 6,6 + affaiblit 13,2 + 26,4 − défausse 3 − exil 3) ; réveil +33 (67 %)"},

{"id":"CIT-plus7","zone":"CIT","pole":"+","palier":"7","nom":"Le Tribunal des Bouleaux","cout":2,"cible":0,
 "effet":"Audience. Tous les ennemis deviennent vulnérables 4. Piochez 3 cartes, reprenez en main la dernière carte de la défausse, et la prochaine carte de zone jouée ce tour a son effet doublé. Pose Sceau. Si Sang est posée (consommée) : le frère noyé prononce la sentence, 15 dégâts à tous qui ignorent la garde. Prix : le héros, appelé à la barre, perd 3 PV.",
 "ops":[["vulnerable","tous",4],["pioche",3],["recup"],["echo"],["pose","Sceau"],["reveil","Sang",true,[["deg","tous",15],["ignoreGarde"]]],["prixPV",3]],
 "tags":["Citadelle","Glace","Forme ultime +7","Marque","Pioche","Récupération","Écho","Combo","Pose Sceau","Réveil Sang","Dégâts","Perce-garde","Prix"],
 "ambiance":"Le juge avait encore les cheveux mouillés ; il lut la chronique dans l'ordre, et le greffier n'omit aucun nom.",
 "budget":"45,4 sans combo (vulnérable tous 26,4 + pioche 12 + récup 4 + écho 6 − 3 PV) ; réveil +36 (79 %)"}
]
```

### Secrets de Berestograd (cartes utilitaires, un exemplaire chacune)

```json
[
{"id":"CIT-secret1","zone":"CIT","pole":"secret","palier":"-","secret":"L'écorce pliée en huit","nom":"L'écorce pliée en huit","cout":0,"cible":0,
 "effet":"Piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Cette carte s'exile : on ne la déplie pas.",
 "ops":[["pioche",1],["echo"],["exil"]],
 "tags":["Secret","Utilitaire","Pioche","Écho","Exil"],
 "ambiance":"Onze hivers de raclage, et une seule écorce gardée ; ce qu'elle disait, Ouliana l'emporta sans savoir le lire.",
 "budget":"7 (pioche 4 + écho 6 − exil 3)"},

{"id":"CIT-secret2","zone":"CIT","pole":"secret","palier":"-","secret":"Le racloir d'Ouliana","nom":"Le racloir d'Ouliana","cout":0,"cible":0,
 "effet":"Défaussez 1 carte au hasard, piochez 2 cartes et gagnez 1 mana Glace.",
 "ops":[["prixDefausse",1],["pioche",2],["mana","Glace",1]],
 "tags":["Secret","Utilitaire","Pioche","Mana","Prix"],
 "ambiance":"Un tesson encore blanc d'aubier : trois mesures de seigle la saison pour gratter la mémoire des autres.",
 "budget":"8 (pioche 8 + mana 3 − défausse 3)"},

{"id":"CIT-secret3","zone":"CIT","pole":"secret","palier":"-","secret":"Le nom du frère noyé","nom":"Le nom du frère noyé","cout":1,"cible":1,
 "effet":"Prononcez le nom : la cible hésite ce tour et perd 1 d'attaque pour le combat.",
 "ops":[["hesite","cible"],["affaiblit",1,"cible"]],
 "tags":["Secret","Utilitaire","Contrôle","Affaiblissement"],
 "ambiance":"La racleuse oublia une écorce sous les copeaux ; le nom y était, et la main de l'assassin s'arrêta.",
 "budget":"8 (hésite 5 + affaiblit 3)"},

{"id":"CIT-secret4","zone":"CIT","pole":"secret","palier":"-","secret":"La cave sous la palissade","nom":"La cave sous la palissade","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte de votre défausse et gagnez 1 mana Glace.",
 "ops":[["recup"],["mana","Glace",1]],
 "tags":["Secret","Utilitaire","Récupération","Mana"],
 "ambiance":"Sous les rondins effacés, la terre gardait ce que la ville avait jeté, en couches, comme un registre.",
 "budget":"7 (récup 4 + mana 3)"},

{"id":"CIT-secret5","zone":"CIT","pole":"secret","palier":"-","secret":"La généalogie d'origine","nom":"La généalogie d'origine","cout":1,"cible":0,
 "effet":"Piochez 2 cartes.",
 "ops":[["pioche",2]],
 "tags":["Secret","Utilitaire","Pioche"],
 "ambiance":"Sur le balcon rebâti, les noms reprirent leur ordre ; le kniaz y figurait, mais en cadet, et après son frère.",
 "budget":"8 (pioche 8)"},

{"id":"CIT-secret6","zone":"CIT","pole":"secret","palier":"-","secret":"La niche aux lettres","nom":"La niche aux lettres","cout":1,"cible":0,
 "effet":"La phrase s'arrête ici : tous les ennemis hésitent ce tour.",
 "ops":[["hesite","tous"]],
 "tags":["Secret","Utilitaire","Contrôle"],
 "ambiance":"Les écorces cousues le long du rempart formaient une accusation ; le dernier mot manquait, et tout le monde se tut pour l'attendre.",
 "budget":"9 (hésite tous ≈ 9)"},

{"id":"CIT-secret7","zone":"CIT","pole":"secret","palier":"-","secret":"Une lettre dans la boue","nom":"Une lettre dans la boue","cout":0,"cible":0,
 "effet":"Piochez 1 carte et gagnez 2 mana Glace. Cette carte s'exile.",
 "ops":[["pioche",1],["mana","Glace",2],["exil"]],
 "tags":["Secret","Utilitaire","Pioche","Mana","Exil"],
 "ambiance":"Une écorce blanche sur un toit d'isba, ni grattée ni recopiée : la seule page de la ville sans propriétaire.",
 "budget":"7 (pioche 4 + mana 6 − exil 3)"}
]
```

---

## 2. La Taïga de Kobor (DON045) — Donjon · Forêt boréale · Glace · inspiration slave · Mensonge (−) / Vérité (+)

**Background** *(la chronique tronquée)*. An 14 de la Régence : le voïévode de Kobor promet au trésor quatre cents zibelines par hiver. An 15 : trois cent quatre-vingt-dix. An 16 : quatre cents, toutes d'un noir égal. Ans 17 à 22 : le registre manque. An 23 : l'inspecteur descend au Coffre, la loge creusée sous les mélèzes, et y compte quatre mille peaux. Il en frotte une au pouce mouillé ; elle déteint. Les chiens du hameau avaient disparu l'An 17, les trappeurs l'An 20, quand la suie vint à manquer. On scella le Coffre avec l'inspecteur dedans. Le registre de l'An 23 tombe juste.

- **Pôle − (Mensonge)** : les peaux teintes, les chiens déguisés en zibelines, le compte gonflé ; on survit en trompant l'œil de celui qui compte.
- **Pôle + (Vérité)** : le pouce mouillé, le compte nu ; tout ce qu'on marque déteint et saigne, celui qui marque aussi.

```json
[
{"id":"DON045-moins","zone":"DON045","pole":"-","palier":"1-6","nom":"Peau teinte","cout":2,"cible":1,
 "effet":"Un Chien teint en zibeline rejoint le combat : (6+4L) PV, frappe (3+L) à chaque tour. La cible, trompée par le leurre, hésite ce tour.",
 "ops":[["invoque","Chien teint en zibeline",[6,4],[3,1]],["hesite","cible"]],
 "tags":["Donjon","Glace","Pôle −","Invocation","Contrôle"],
 "ambiance":"Passé à la suie de lampe, le chien du hameau valait une zibeline au registre, tant qu'il ne pleuvait pas.",
 "budget":"L1 16 / 16 → L6 33,5 / 36 (−7 %, vérifié : invocation PV/2 + 1,5 × attaque + hésite 5)"},

{"id":"DON045-plus","zone":"DON045","pole":"+","palier":"1-6","nom":"Le Pouce mouillé","cout":2,"cible":1,
 "effet":"La cible devient vulnérable L, puis subit (10+L) dégâts qui ignorent la garde. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","cible",[0,1]],["deg","cible",[10,1]],["ignoreGarde"],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle +","Marque","Dégâts","Perce-garde","Prix"],
 "ambiance":"L'inspecteur frotta la peau, et la teinture lui noircit le pouce ; la vérité tache d'abord celui qui la cherche.",
 "budget":"L1 15 / 16 → L6 35 / 36 (vérifié : vulnérable 3L + dégâts 10+L + ignore-garde 3 − 2 PV)"},

{"id":"DON045-moins7","zone":"DON045","pole":"-","palier":"7","nom":"Le Coffre scellé","cout":2,"cible":1,
 "effet":"On referme la loge. L'Inspecteur gelé rejoint le combat : 36 PV, ne frappe pas, encaisse. Tous les ennemis perdent 2 d'attaque pour le combat, la cible hésite ce tour, piochez 2 cartes et gagnez 1 mana Glace. Pose Givre. Si Racine est posée (consommée) : la meute sort du Coffre, deux Chiens de la meute teinte rejoignent le combat (12 PV, frappent 6 chacun).",
 "ops":[["invoque","L'Inspecteur gelé",36,0],["affaiblit",2,"tous"],["hesite","cible"],["pioche",2],["mana","Glace",1],["pose","Givre"],["reveil","Racine",true,[["invoque","Chien de la meute teinte",12,6],["invoque","Chien de la meute teinte",12,6]]]],
 "tags":["Donjon","Glace","Forme ultime −7","Invocation","Affaiblissement","Contrôle","Pioche","Mana","Combo","Pose Givre","Réveil Racine"],
 "ambiance":"Le registre de l'An 23 tomba juste parce que l'inspecteur ne sortit jamais du Coffre ; il garde la porte depuis.",
 "budget":"47,2 sans combo (invocation 18 + affaiblit tous 13,2 + hésite 5 + pioche 8 + mana 3) ; réveil +30 (64 %)"},

{"id":"DON045-plus7","zone":"DON045","pole":"+","palier":"7","nom":"Le Compte juste","cout":2,"cible":0,
 "effet":"Recensement. Tous les ennemis deviennent vulnérables 2, puis 5 coups de 6 dégâts au hasard qui ignorent la garde ; s'il ne reste qu'un ennemi, il subit encore 10 dégâts. Pose Sang. Si Abîme est posée (consommée) : les années manquantes ressortent du registre, 4 coups de 6 dégâts au hasard, reprenez la dernière carte de la défausse et piochez 1 carte. Prix : le héros perd 4 PV.",
 "ops":[["vulnerable","tous",2],["deg","hasard",6,5],["ignoreGarde"],["si","seul",[["deg","cible",10]]],["pose","Sang"],["reveil","Abîme",true,[["deg","hasard",6,4],["recup"],["pioche",1]]],["prixPV",4]],
 "tags":["Donjon","Glace","Forme ultime +7","Marque","Dégâts","Perce-garde","Condition","Combo","Pose Sang","Réveil Abîme","Récupération","Pioche","Prix"],
 "ambiance":"On recompta peau par peau, puis chien par chien, puis trappeur par trappeur ; le compte fut juste, et payé en sang.",
 "budget":"47,2 sans combo (vulnérable tous 13,2 + 30 + ignore-garde 3 + 10 si seul à 50 % − 4 PV) ; réveil +32 (68 %)"}
]
```

---

## 3. La Lande de Cezo (ASS006) — Assemblée · Lande · Vent · inspiration vénitienne · Corruption (−) / Pureté (+)

**Background** *(les deux inscriptions)*. Sur le dossier du banc des conseillers, au milieu de la lande, la première inscription dit : ICI LE VENT VOTE, NUL NE L'ACHÈTE. On jetait en l'air des fèves de bruyère, et l'on comptait celles qui retombaient dans le cercle. La seconde, gravée plus bas d'une main plus fine, dit : BANC CÉDÉ À LA MAISON DES SAUNIERS, AVEC LE VENT. On voit encore dans la pierre les trous des paravents de toile goudronnée qu'on dressait pour que les fèves tombent où il fallait. Derrière le banc, la bruyère a brûlé trois fois. Jamais par la foudre.

- **Pôle − (Corruption)** : la fève lestée, le paravent, le feu mis à la lande pour effacer les bornes ; la maison qui achète paie aussi le héros, en feu et en mana.
- **Pôle + (Pureté)** : le vent sans paravent, la fève qui tombe où elle tombe ; on jette les fèves douteuses, et le brûlis réglé rend la lande aux bergers.

```json
[
{"id":"ASS006-moins","zone":"ASS006","pole":"-","palier":"1-6","nom":"Fève lestée","cout":1,"cible":1,
 "effet":"La cible brûle : (2+L) dégâts au début de chacun de ses 2 prochains tours. Le vote est truqué : tous les ennemis perdent 1 d'attaque pour le combat. Prix : la corruption coûte 2 PV au héros.",
 "ops":[["brulure","cible",[2,1],2],["affaiblit",1,"tous"],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts dans le temps","Affaiblissement","Prix"],
 "ambiance":"La fève de bruyère, creusée et remplie de plomb, retombait toujours dans le cercle des sauniers ; le conseiller qui la jeta toussa longtemps.",
 "budget":"L1 10,6 / 10 → L6 20,6 / 22,5 (−8 %, vérifié : brûlure 2(2+L) + affaiblit tous 6,6 − 2 PV)"},

{"id":"ASS006-plus","zone":"ASS006","pole":"+","palier":"1-6","nom":"Vote au vent","cout":1,"cible":0,
 "effet":"Défaussez 1 carte au hasard (les fèves douteuses), puis piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Le héros se soigne de (1+2L).",
 "ops":[["prixDefausse",1],["pioche",1],["echo"],["soin","heros",[1,2]]],
 "tags":["Assemblée","Vent","Pôle +","Pioche","Écho","Soin","Prix"],
 "ambiance":"Sans paravent, le vent rendit des verdicts que personne n'avait payés ; on en jeta quelques-uns, par prudence, avant de compter.",
 "budget":"L1 10 / 10 → L6 20 / 22,5 (−11 %, vérifié : pioche 4 + écho 6 + soin 1+2L − défausse 3)"},

{"id":"ASS006-moins7","zone":"ASS006","pole":"-","palier":"7","nom":"La Lande brûlée trois fois","cout":2,"cible":0,
 "effet":"Le feu efface les bornes. Tous les ennemis brûlent : 6 dégâts au début de chacun de leurs 3 prochains tours, et leur garde tombe à 0. La prochaine carte de zone jouée ce tour a son effet doublé. Pose Braise. Si Sceau est posée (consommée) : la loi est achetée, +1 de capacité ce tour, piochez 3 cartes, gagnez encore 2 mana Vent et tous les ennemis hésitent ce tour. Prix : le héros perd 3 PV.",
 "ops":[["brulure","tous",6,3],["briseGarde","tous"],["echo"],["pose","Braise"],["reveil","Sceau",true,[["boost"],["pioche",3],["mana","Vent",2],["hesite","tous"]]],["prixPV",3]],
 "tags":["Assemblée","Vent","Forme ultime −7","Dégâts dans le temps","Perce-garde","Mana","Écho","Combo","Pose Braise","Réveil Sceau","Boost","Pioche","Contrôle","Prix"],
 "ambiance":"Chaque incendie emporta une rangée de bornes, et chaque nouveau cadastre fut signé au banc, par les mêmes mains.",
 "budget":"48,6 sans combo (brûlure tous 33 + brise-garde 6,6 + mana 6 + écho 6 − 3 PV) ; réveil +33 (69 %)"},

{"id":"ASS006-plus7","zone":"ASS006","pole":"+","palier":"7","nom":"Le Vent sans paravent","cout":2,"cible":0,
 "effet":"Les bergers reviennent au banc. Les Bergers du banc rejoignent le combat : 24 PV, frappent 5. Tous vos alliés se soignent de 8, le héros gagne 8 de garde, piochez 2 cartes. Pose Racine. Si Braise est posée (consommée) : le brûlis réglé, la garde de tous les ennemis tombe à 0 et ils subissent 12 dégâts.",
 "ops":[["invoque","Bergers du banc",24,5],["soin","allies",8],["garde","heros",8],["pioche",2],["pose","Racine"],["reveil","Braise",true,[["briseGarde","tous"],["deg","tous",12]]]],
 "tags":["Assemblée","Vent","Forme ultime +7","Invocation","Soin","Garde","Pioche","Combo","Pose Racine","Réveil Braise","Perce-garde","Dégâts"],
 "ambiance":"On arracha les trous des paravents au burin ; les bergers rallumèrent la lande eux-mêmes, par parcelles, et l'appelèrent un vote.",
 "budget":"45,9 sans combo (invocation 19,5 + soin alliés 12 + garde 6,4 + pioche 8) ; réveil +33 (72 %)"}
]
```

---

## 4. Les Ruines de Teoco (RES079) — Ressource · Cité en ruines · Pierre · inspiration aztèque

**Background** *(l'inventaire de ruine)*. Ce que les récolteurs ramassent à Teoco tient en quatre objets. Une marche d'escalier reposée à l'envers, ses glyphes de tribut tournés contre la terre. Une meule à maïs usée en cuvette, au fond de laquelle quelqu'un a gravé un compte de capes de coton. Un registre peint sur peau, dont la colonne des capes s'arrête au milieu d'une ligne. Et, le long de l'enceinte, des lames d'obsidienne fichées dans l'enduit, tranchant vers l'intérieur. Le mur n'avait pas été bâti contre ceux du dehors.

- **Niveaux 1 à 3** : plus on récolte, plus on arrache d'éclats au mur tourné.

```json
[
{"id":"RES079-gerbe","zone":"RES079","pole":"res","palier":"1-3","nom":"Gerbe de Teoco : éclat du mur tourné","cout":0,"cible":1,
 "effet":"Piochez 1 carte ; (1+2L) dégâts à la cible.",
 "ops":[["pioche",1],["deg","cible",[1,2]]],
 "tags":["Ressource","Pierre","Gerbe","Pioche","Dégâts"],
 "ambiance":"Une lame d'obsidienne arrachée à l'enceinte, tranchant vers le dedans, comme le voulaient ceux qui levaient le tribut.",
 "budget":"7 / 9 / 11 (pioche 4 + dégâts 1+2L)"}
]
```

---

## 5. La Steppe de Gramir (RES212) — Ressource · Steppe · Vent · inspiration slave

**Background** *(le revers)*. La steppe de Gramir fut libérée deux fois, et chaque fois de ses habitants. La proclamation, clouée au poteau du relais, raconte la suite : les colons de la régence y semèrent l'orge d'hiver, l'herbe folle recula devant le soc, et l'on préleva le premier tribut en gerbes dès la troisième moisson. Le poteau tient encore. Son anneau d'attache, en fer forgé, est usé jusqu'au brillant, alors qu'on n'y attache plus de chevaux depuis la proclamation. Officiellement.

- **Niveaux 1 à 3** : la gerbe de tribut grossit, le pain qu'on en tire aussi.

```json
[
{"id":"RES212-gerbe","zone":"RES212","pole":"res","palier":"1-3","nom":"Gerbe de Gramir : orge du tribut","cout":0,"cible":0,
 "effet":"Piochez 1 carte ; le héros se soigne de (1+2L).",
 "ops":[["pioche",1],["soin","heros",[1,2]]],
 "tags":["Ressource","Vent","Gerbe","Pioche","Soin"],
 "ambiance":"Une gerbe d'orge d'hiver, liée au crin de cheval ; le percepteur ne demanda jamais d'où venait le crin.",
 "budget":"7 / 9 / 11 (pioche 4 + soin 1+2L)"}
]
```

---

## Récapitulatif

| Tuile | Carte | Pôle | Coût | Mécanique | Prix | Pose | Réveille |
|---|---|---|---|---|---|---|---|
| Berestograd | Neige de l'oubli | − 1-6 | 1 | brise-garde + dégâts à tous, hésite si seul | défausse 1 | | |
| Berestograd | Témoins aux créneaux | + 1-6 | 1 | riposte + garde + récupération | | | |
| Berestograd | Le Visage raboté | −7 | 2 | rituel : tous hésitent, brise-garde, affaiblit, dégâts | défausse 1, exil | Abîme | Givre |
| Berestograd | Le Tribunal des Bouleaux | +7 | 2 | vulnérable tous + pioche 3 + récup + écho | 3 PV | Sceau | Sang |
| Kobor | Peau teinte | − 1-6 | 2 | invocation leurre + hésite | | | |
| Kobor | Le Pouce mouillé | + 1-6 | 2 | marque + dégâts perce-garde | 2 PV | | |
| Kobor | Le Coffre scellé | −7 | 2 | mur invoqué (0 attaque) + affaiblit tous + pioche | | Givre | Racine |
| Kobor | Le Compte juste | +7 | 2 | 5 coups au hasard sur cibles marquées | 4 PV | Sang | Abîme |
| Cezo | Fève lestée | − 1-6 | 1 | brûlure + affaiblit tous | 2 PV | | |
| Cezo | Vote au vent | + 1-6 | 1 | défausse → pioche + écho + soin | défausse 1 | | |
| Cezo | La Lande brûlée trois fois | −7 | 2 | brûlure tous + brise-garde + mana + écho | 3 PV | Braise | Sceau |
| Cezo | Le Vent sans paravent | +7 | 2 | invocation des bergers + soin alliés + garde + pioche | | Racine | Braise |
| Teoco | Éclat du mur tourné | res | 0 | pioche + dégâts | | | |
| Gramir | Orge du tribut | res | 0 | pioche + soin | | | |

Résonances : chaque résonance est posée une seule fois et réveillée une seule fois sur mes six formes ultimes (aucune carte ne réveille sa propre pose). Chaînes de trois possibles avec un pôle par tuile : **Kobor +7** (pose Sang) → **Tribunal des Bouleaux** (réveille Sang, pose Sceau) → **Lande brûlée trois fois** (réveille Sceau, pose Braise) ; ou **Vent sans paravent** (pose Racine) → **Coffre scellé** (réveille Racine, pose Givre) → **Visage raboté** (réveille Givre, pose Abîme). Prix : 4 cartes de pôle sur 6 (2 côté −, 2 côté +), et 2 formes ultimes par côté. Un seul boost (réveil de la Lande brûlée, palier 7).

## Ce qui change par rapport à la 2.1

1. Les deux pôles ne sont plus des miroirs : Mémoire passe d'un simple « garde à tous » à la riposte des témoins avec récupération, Kobor oppose un leurre invoqué (Mensonge) à une marque perce-garde (Vérité), et Cezo oppose la brûlure de la fève lestée à un moteur pioche/écho (le Sceau générique de la 2.1 collait à n'importe quelle tuile).
2. Chaque tuile a reçu son background (Kobor, Cezo, Teoco, Gramir) et chaque carte en reprend un objet précis (peau teinte, pouce mouillé, fève lestée, paravent, lame d'obsidienne, anneau d'attache) ; les Gerbes grandissent enfin de 7 à 11 points (Gramir ne grandissait pas).
3. La forme 7 change de nature (rituel, tribunal, coffre scellé, recensement, incendie, retour des bergers), les prix sont répartis à égalité entre pôles, et les six résonances forment un cycle pour que les formes ultimes se combinent fort entre elles.
