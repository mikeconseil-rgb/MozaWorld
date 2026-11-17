# Cartes 2.2 : conteur B, l'Explorateur marchand

Conventions de calcul (identiques à `regles-avancees.md`, section 8) : « tous » = ×2,2 ; « alliés » (soin, garde) = ×1,5 ; une condition `si` compte pour moitié ; `ignoreGarde` = 2 ; `ennemiSoin` / `ennemiGarde` n rendent 2n. Le réveil est compté à part, en pourcentage de la base.
Syntaxe des `ops` : nombres fixes ou `[a,b]` = a+bL ; `["invoque",nom,PV,attaque]` ; `["brulure",cible,n,t]` ; `["vulnerable",cible,n]` ; `["affaiblit",n,cible]` ; `["mana",type,n]` ; `["reveil",résonance,consomme,[effets]]` ; `["si",condition,[effets]]` avec condition = `bete` / `moitiePV` / `seul` / `hesite` / `garde`.

**Résonances de B** (aucune posée deux fois, aucune réveillée deux fois) :

| Forme ultime | Pose | Réveille |
|---|---|---|
| Nuit close (Lucioles −7) | Abîme | Sang |
| L'Aube tenue (Lucioles +7) | Racine | Braise |
| L'Ensablement (Pama −7) | Sang | Abîme |
| Loi du Partage (Pama +7) | Sceau | Racine |
| Code de grès (Raak −7) | Givre | Sceau |
| Lentille de sel (Raak +7) | Braise | Givre |

Chaînes possibles : Lentille de sel → L'Aube tenue → Loi du Partage → (Code de grès d'une autre tuile Pierre, ou toute forme qui réveille Sceau) ; Nuit close ⇄ L'Ensablement (Abîme et Sang se nourrissent l'une l'autre). L'écho de la Loi du Partage double aussi la forme ultime jouée juste après.

---

## L'Exarchat des Lucioles (ANT-079)
*Antre · Nœud papillon · Mangrove · Eau · byzantine · Nuit (−) / Aurore (+)*

**Résumé.** La chair des murex nourrissait les larves de la reine Vespérine, qui éclairait le chenal en échange : un contrat peint au minium sur le pilotis du péage.
Un exarque a vendu la chair aux saleurs ; la reine a éteint sa lumière, et la pourpre se teint désormais à la lanterne sourde, en contrebande.

- **Nuit (−)** : les larves affamées colonisent les cuves clandestines ; on se bat dans le noir, avec des bêtes voraces et des cibles tachées de pourpre.
- **Aurore (+)** : le contrat rouvert ; les Vespérines adultes fixent la teinture par leur chaleur, et l'essaim nourri brûle tout ce qui menace les séchoirs.

```json
[
{"id": "ANT079-moins", "zone": "ANT079", "pole": "-", "palier": "1-6", "nom": "Larve-de-Cuve", "cout": 2, "cible": 1, "effet": "Une Larve-de-Cuve affamée rejoint le combat ((2+3L) PV, frappe (2+2L) à chaque tour). La nuit tombe sur la cible : elle hésite ce tour et garde une tache pourpre (+1 dégât à chaque coup reçu). La larve a faim : le héros perd 2 PV.", "ops": [["invoque", "Larve-de-Cuve", [2, 3], [2, 2]], ["hesite", "cible"], ["vulnerable", "cible", 1], ["prixPV", 2]], "tags": ["Pôle −", "Invocation", "Contrôle", "Marque", "Prix"], "ambiance": "Sous la bâche goudronnée, la larve a mangé la teinture ; maintenant elle vous mange les doigts.", "budget": "cible 16 → 36 (L1 → L6) ; carte 14,5 → 37 (-9 % / +3 %) vérifié"},
{"id": "ANT079-plus", "zone": "ANT079", "pole": "+", "palier": "1-6", "nom": "Essaim-Fixeur", "cout": 2, "cible": 0, "effet": "Une Vespérine adulte rejoint le combat ((4+4L) PV, frappe (1+L) à chaque tour) ; sa chaleur fixe la pourpre sur l'ennemi : tous les ennemis brûlent de 2 pendant 3 tours. Les larves réclament leur nasse : défaussez 1 carte au hasard.", "ops": [["invoque", "Vespérine adulte", [4, 4], [1, 1]], ["brulure", "tous", 2, 3], ["prixDefausse", 1]], "tags": ["Pôle +", "Invocation", "Dégâts dans le temps", "Zone d'effet", "Prix"], "ambiance": "Chaque Vespérine qui passe au ras des toiles fixe la pourpre ; il faut juste payer sa nasse.", "budget": "cible 16 → 36 (L1 → L6) ; carte 17,2 → 34,7 (+7 % / -4 %) vérifié"},
{"id": "ANT079-moins7", "zone": "ANT079", "pole": "-", "palier": "7", "nom": "Nuit close", "cout": 3, "cible": 0, "effet": "Toutes les lanternes s'éteignent. Deux Ballots luisants rejoignent le combat (6 PV, frappent 5 chacun) ; tous les ennemis hésitent ce tour et sont tachés de pourpre (+3 dégâts à chaque coup reçu). Piochez 1 carte. Le héros perd 5 PV ; la carte s'exile. Pose Abîme. Si Sang est posée (consommée) : la Reine Vespérine, affamée pour de bon, se retourne contre l'ennemi et rejoint le combat (24 PV, frappe 14).", "ops": [["invoque", "Ballot luisant", 6, 5], ["invoque", "Ballot luisant", 6, 5], ["hesite", "tous"], ["vulnerable", "tous", 3], ["pioche", 1], ["prixPV", 5], ["exil"], ["pose", "Abîme"], ["reveil", "Sang", true, [["invoque", "Reine Vespérine affamée", 24, 14]]]], "tags": ["Pôle −", "Forme ultime", "Invocation", "Contrôle", "Zone d'effet", "Marque", "Pioche", "Prix", "Exil", "Pose Abîme", "Combo", "Réveille Sang"], "ambiance": "Anthémios a éteint le chenal ; dans le noir, seuls ses ballots volés luisent, et la reine attend son heure.", "budget": "base 48,6 (cible 45-55) + réveil 33 (68 % de la base) vérifié"},
{"id": "ANT079-plus7", "zone": "ANT079", "pole": "+", "palier": "7", "nom": "L'Aube tenue", "cout": 3, "cible": 0, "effet": "La reine tient l'aurore et trois couleurs passent sur le champ : la pourpre brûle tous les ennemis de 4 pendant 3 tours ; le safran soigne tous vos alliés de 10 (16 si une bête est en jeu) ; l'indigo retire 1 d'attaque à tous les ennemis. Les nasses doublent : défaussez 2 cartes au hasard. Pose Racine. Si Braise est posée (consommée) : la pourpre vire au violet : 10 dégâts à tous et +2 dégâts à chaque coup qu'ils recevront.", "ops": [["brulure", "tous", 4, 3], ["soin", "allies", 10], ["affaiblit", 1, "tous"], ["si", "bete", [["soin", "allies", 6]]], ["prixDefausse", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["deg", "tous", 10], ["vulnerable", "tous", 2]]]], "tags": ["Pôle +", "Forme ultime", "Dégâts dans le temps", "Zone d'effet", "Soin", "Affaiblissement", "Condition", "Prix", "Pose Racine", "Combo", "Réveille Braise", "Dégâts", "Marque"], "ambiance": "Pourpre, safran, indigo passent sur l'eau : la reine tient l'aube, et la mangrove entière devient séchoir.", "budget": "base 46,5 (cible 45-55) + réveil 35,2 (76 % de la base) vérifié"}
]
```

### Les six secrets (cartes utilitaires, mana gris)
```json
[
{"id": "ANT079-secret1", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "Le contrat peint au minium", "nom": "Contrat au minium", "cout": 0, "cible": 0, "effet": "Un échange en règle : défaussez 1 carte au hasard, piochez 2 cartes et gagnez 1 mana d'Eau.", "ops": [["prixDefausse", 1], ["pioche", 2], ["mana", "Eau", 1]], "tags": ["Secret", "Utilitaire", "Prix", "Pioche", "Mana"], "ambiance": "Peint sur le pilotis : la ruche éclaire le chenal, l'Exarchat nourrit les larves. Chacun donne, chacun reçoit.", "budget": "cible 6-10 ; carte 8 (vérifié)"},
{"id": "ANT079-secret2", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "Quatre langues de comptoir", "nom": "Quatre langues", "cout": 1, "cible": 1, "effet": "On marchande dans la langue de la cible : elle hésite ce tour. Piochez 1 carte.", "ops": [["hesite", "cible"], ["pioche", 1]], "tags": ["Secret", "Utilitaire", "Contrôle", "Pioche"], "ambiance": "Au troisième étage du comptoir, quatre langues se mêlent ; qui parle seulement la sienne a déjà perdu.", "budget": "cible 6-10 ; carte 9 (vérifié)"},
{"id": "ANT079-secret3", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "Larve-de-Cuve", "nom": "Ballot qui luit", "cout": 0, "cible": 1, "effet": "La cible prend la lueur de la larve : +2 dégâts à chaque coup qu'elle reçoit, jusqu'à la fin du combat. La carte s'exile.", "ops": [["vulnerable", "cible", 2], ["exil"]], "tags": ["Secret", "Utilitaire", "Marque", "Exil"], "ambiance": "Le ballot volé luit sous sa bâche ; qui le porte devient la seule lumière du chenal, et la cible.", "budget": "cible 6-10 ; carte 6 (vérifié)"},
{"id": "ANT079-secret4", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "Le signal des passeurs", "nom": "Éclats des passeurs", "cout": 1, "cible": 0, "effet": "Un éclat bref, un éclat long : piochez 1 carte, et la prochaine carte de zone jouée ce tour a son effet doublé.", "ops": [["pioche", 1], ["echo"]], "tags": ["Secret", "Utilitaire", "Pioche", "Écho"], "ambiance": "Deux éclats sur la canopée prune, et les passeurs savent déjà quelle barque laisser filer.", "budget": "cible 6-10 ; carte 10 (vérifié)"},
{"id": "ANT079-secret5", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "Le baril de saumure", "nom": "Baril crevé", "cout": 1, "cible": 1, "effet": "On crève le baril : la saumure ronge les bâches, la garde de tous les ennemis tombe et la cible perd 1 d'attaque pour le combat.", "ops": [["briseGarde", "tous"], ["affaiblit", 1, "cible"]], "tags": ["Secret", "Utilitaire", "Perce-garde", "Zone d'effet", "Affaiblissement"], "ambiance": "Anthémios salait la chair volée dans ces barils ; crevez-les, la saumure ronge ses propres bâches.", "budget": "cible 6-10 ; carte 9,6 (vérifié)"},
{"id": "ANT079-secret6", "zone": "ANT079", "pole": "secret", "palier": "-", "secret": "La nasse de Zoé", "nom": "La nasse de Zoé", "cout": 0, "cible": 0, "effet": "Ce que le chenal a pris remonte : reprenez en main la dernière carte de votre défausse et gagnez 1 mana d'Eau.", "ops": [["recup"], ["mana", "Eau", 1]], "tags": ["Secret", "Utilitaire", "Récupération", "Mana"], "ambiance": "Zoé a gardé ses nasses ; ce que le chenal emporte à marée haute, elle le repêche à marée basse.", "budget": "cible 6-10 ; carte 7 (vérifié)"}
]
```

---

## Le Delta de Pama (ASS-150)
*Assemblée · Losange · Delta fluvial · Eau · inca · Ruine (−) / Abondance (+)*

**Background.** *(Le bilan contradictoire.)* Le cordon de l'Assemblée compte, en nœuds rouges, quarante greniers de tubercules séchés au gel, montés à dos de lama depuis les terrasses. Le cordon des bateliers de jonc, noué en cachette sous les quais, compte autre chose : des digues jamais réparées, des corvées payées et jamais faites, du sel passé en fraude à chaque crue. Ce matin, Huaman Quispe, délégué des pêcheurs, déroule les deux cordons sur la table du conseil. Le fleuve monte. Il faut voter avant midi : renforcer les greniers, ou ouvrir les digues et laisser la vase ensevelir les champs des rivaux.

- **Ruine (−)** : l'Assemblée vote la rupture des digues ; la crue noie les champs rivaux et les siens, et le delta devient une friche de vase où l'on troque à la perche.
- **Abondance (+)** : on vote la corvée des digues ; les greniers débordent, les caravanes de lamas descendent, et l'abondance nourrit tout le monde, rivaux compris.

```json
[
{"id": "ASS150-moins", "zone": "ASS150", "pole": "-", "palier": "1-6", "nom": "Vote de la crue", "cout": 1, "cible": 0, "effet": "L'Assemblée vote l'ouverture des digues : la garde de tous les ennemis s'effondre, puis (2+L) dégâts à tous. Vos champs boivent aussi : le héros perd 2 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", [2, 1]], ["prixPV", 2]], "tags": ["Pôle −", "Perce-garde", "Zone d'effet", "Dégâts", "Prix"], "ambiance": "Huaman a voté la crue : les champs du rival boivent, les siens aussi, mais la vase paie mieux.", "budget": "cible 10 → 22,5 (L1 → L6) ; carte 11,2 → 22,2 (+12 % / -1 %) vérifié"},
{"id": "ASS150-plus", "zone": "ASS150", "pole": "+", "palier": "1-6", "nom": "Loi des greniers", "cout": 1, "cible": 0, "effet": "L'Assemblée vote la corvée des digues et les greniers débordent : piochez 2 cartes et gagnez 1 mana d'Eau. L'abondance nourrit tout le monde : chaque ennemi se soigne de 2.", "ops": [["pioche", 2], ["mana", "Eau", 1], ["ennemiSoin", 2]], "tags": ["Pôle +", "Pioche", "Mana", "Prix"], "ambiance": "Chaque nœud rouge du cordon compte un grenier plein ; quand ils débordent, même les rivaux mangent.", "budget": "cible 10 → 22,5 (L1 → L6) ; carte 10 → 25 (+0 % / +11 %) vérifié"},
{"id": "ASS150-moins7", "zone": "ASS150", "pole": "-", "palier": "7", "nom": "L'Ensablement", "cout": 2, "cible": 0, "effet": "Plus une digue debout, le delta s'envase : tous les ennemis perdent 3 d'attaque pour le combat, leur garde tombe et ils subissent +3 dégâts à chaque coup. Le héros perd 6 PV ; s'il a moins de la moitié de ses PV, tous les ennemis hésitent ce tour. Pose Sang. Si Abîme est posée (consommée) : la vase les engloutit : 14 dégâts à tous qui ignorent la garde, et ils hésitent ce tour.", "ops": [["affaiblit", 3, "tous"], ["briseGarde", "tous"], ["vulnerable", "tous", 3], ["prixPV", 6], ["si", "moitiePV", [["hesite", "tous"]]], ["pose", "Sang"], ["reveil", "Abîme", true, [["deg", "tous", 14], ["ignoreGarde"], ["hesite", "tous"]]]], "tags": ["Pôle −", "Forme ultime", "Affaiblissement", "Perce-garde", "Zone d'effet", "Marque", "Prix", "Condition", "Contrôle", "Pose Sang", "Combo", "Réveille Abîme", "Dégâts"], "ambiance": "Plus une digue debout : la vase monte aux genoux des lamas, et l'on troque désormais à la perche.", "budget": "base 44,6 (cible 45-55) + réveil 41,6 (93 % de la base) vérifié"},
{"id": "ASS150-plus7", "zone": "ASS150", "pole": "+", "palier": "7", "nom": "Loi du Partage", "cout": 2, "cible": 0, "effet": "Les quarante greniers s'ouvrent pour toute la vallée : piochez 3 cartes, tous vos alliés se soignent de 12 et gagnent 12 de garde, et la prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi se soigne de 3. Pose Sceau. Si Racine est posée (gardée) : une Caravane de lamas descend des terrasses (24 PV, frappe 8) et tous vos alliés se soignent encore de 8.", "ops": [["pioche", 3], ["soin", "allies", 12], ["garde", "allies", 12], ["echo"], ["ennemiSoin", 3], ["pose", "Sceau"], ["reveil", "Racine", false, [["invoque", "Caravane de lamas", 24, 8], ["soin", "allies", 8]]]], "tags": ["Pôle +", "Forme ultime", "Pioche", "Soin", "Zone d'effet", "Garde", "Écho", "Prix", "Pose Sceau", "Combo", "Réveille Racine", "Invocation"], "ambiance": "On ouvre les greniers d'un coup ; la caravane descend des terrasses, et le cordon compte pour toute la vallée.", "budget": "base 44,4 (cible 45-55) + réveil 36 (81 % de la base) vérifié"}
]
```

---

## L'Oasis de Raak (ASS-155)
*Assemblée · Losange · Oasis · Sève · éthiopienne · Pierre (−) / Cristal (+)*

**Background.** *(Le carnet de bord.)* Carnet de Tsehay Abera, convoyeuse de sel. Jour 1 : quarante chameaux chargés de barres taillées à la hache sur la plaine blanche ; enfin, les palmiers de Raak. Jour 2 : abreuvé les bêtes à la source. L'Assemblée siège en contrebas, dans une salle creusée en spirale dans le grès rouge ; les anciens y gravent chaque tarif, et ce qui est gravé ne se discute plus. Jour 3 : un clan du désert propose d'écrire la loi sur des barres de sel, qui circulent et fondent à la première pluie. J'ai vendu les miennes au double. Vote demain.

- **Pierre (−)** : la loi se grave et ne bouge plus ; les anciens figent les tarifs, l'oasis devient une forteresse de grès où rien ne passe sans payer l'ancien prix.
- **Cristal (+)** : la loi circule en barres de sel ; tout se voit, tout se négocie, et la lumière qui traverse le sel perce n'importe quelle garde.

```json
[
{"id": "ASS155-moins", "zone": "ASS155", "pole": "-", "palier": "1-6", "nom": "Loi gravée", "cout": 1, "cible": 1, "effet": "Les anciens gravent le tarif dans le grès : le héros gagne (2+3L) de garde, et la cible, qui ne peut plus le discuter, hésite ce tour.", "ops": [["garde", "heros", [2, 3]], ["hesite", "cible"]], "tags": ["Pôle −", "Garde", "Contrôle"], "ambiance": "Ce qui est gravé dans le grès ne se discute plus : l'ancien prix de l'eau, et votre silence.", "budget": "cible 10 → 22,5 (L1 → L6) ; carte 9 → 21 (-10 % / -7 %) vérifié"},
{"id": "ASS155-plus", "zone": "ASS155", "pole": "+", "palier": "1-6", "nom": "Loi de sel", "cout": 1, "cible": 1, "effet": "La loi passe de main en main, claire comme une barre de sel : (3+2L) dégâts à la cible, qui traversent sa garde. Piochez 1 carte.", "ops": [["deg", "cible", [3, 2]], ["ignoreGarde"], ["pioche", 1]], "tags": ["Pôle +", "Dégâts", "Perce-garde", "Pioche"], "ambiance": "Tsehay paie avec une barre de sel qui passe de main en main ; la loi suit, claire comme elle.", "budget": "cible 10 → 22,5 (L1 → L6) ; carte 11 → 21 (+10 % / -7 %) vérifié"},
{"id": "ASS155-moins7", "zone": "ASS155", "pole": "-", "palier": "7", "nom": "Code de grès", "cout": 2, "cible": 0, "effet": "L'Assemblée se fige dans la pierre : tous les ennemis hésitent ce tour et perdent 2 d'attaque pour le combat ; le héros gagne 15 de garde et, jusqu'au prochain tour, renvoie 4 dégâts à chaque coup reçu. Piochez 1 carte. Pose Givre. Si Sceau est posée (consommée) : la loi est gravée pour toujours : tous les ennemis perdent encore 3 d'attaque et tous vos alliés gagnent 15 de garde.", "ops": [["hesite", "tous"], ["affaiblit", 2, "tous"], ["garde", "heros", 15], ["riposte", 4], ["pioche", 1], ["pose", "Givre"], ["reveil", "Sceau", true, [["affaiblit", 3, "tous"], ["garde", "allies", 15]]]], "tags": ["Pôle −", "Forme ultime", "Contrôle", "Zone d'effet", "Affaiblissement", "Garde", "Riposte", "Pioche", "Pose Givre", "Combo", "Réveille Sceau"], "ambiance": "Les anciens s'assoient au fond de la spirale de grès ; plus rien dans l'oasis ne bouge, pas même l'ennemi.", "budget": "base 46 (cible 45-55) + réveil 37,8 (82 % de la base) vérifié"},
{"id": "ASS155-plus7", "zone": "ASS155", "pole": "+", "palier": "7", "nom": "Lentille de sel", "cout": 2, "cible": 1, "effet": "On taille une barre de sel en lentille et on la tend au soleil de l'oasis : 12 dégâts à la cible qui ignorent sa garde, puis elle brûle de 6 pendant 3 tours et subit +3 dégâts à chaque coup. Piochez 1 carte. Pose Braise. Si Givre est posée (consommée) : ce qui est figé se fend comme du sel : 25 dégâts à la cible qui ignorent la garde, et la garde de tous les ennemis tombe.", "ops": [["deg", "cible", 12], ["ignoreGarde"], ["brulure", "cible", 6, 3], ["vulnerable", "cible", 3], ["pioche", 1], ["pose", "Braise"], ["reveil", "Givre", true, [["deg", "cible", 25], ["ignoreGarde"], ["briseGarde", "tous"]]]], "tags": ["Pôle +", "Forme ultime", "Dégâts", "Perce-garde", "Dégâts dans le temps", "Marque", "Pioche", "Pose Braise", "Combo", "Réveille Givre", "Zone d'effet"], "ambiance": "Une barre de sel taillée en lentille, le soleil de l'oasis, et la plus vieille loi du désert prend feu.", "budget": "base 45 (cible 45-55) + réveil 33,6 (75 % de la base) vérifié"}
]
```

---

## L'Oasis de Sumak (RES-021)
*Ressource · Hexagone allongé · Oasis · Sève · éthiopienne · niveaux 1 à 3*

**Background.** *(La route d'une marchandise.)* Une larme de résine perle sur l'écorce d'un arbre tordu, au bord de la source de Sumak. Mekdes Tadesse l'incise, la laisse durcir onze jours, la décolle au couteau d'os et la jette dans un panier tressé. Au puits, on trie les larmes par couleur : ambre clair pour les autels lointains, brun pour les fumigations des marchés. Les ânes les montent par la passe, les caravanes les descendent vers la côte, et dans des ports qu'elle ne verra jamais, sa récolte partira en fumée bleue. *(Distincte de Raak : basalte noir et résine ambrée, silhouette de fumées au-dessus d'un ravin d'arbres tordus.)*

```json
[
{"id": "RES021-gerbe", "zone": "RES021", "pole": "res", "palier": "1-3", "nom": "Larme d'encens", "cout": 0, "cible": 0, "effet": "Le héros se soigne de (2+2L) et gagne 1 mana de Sève.", "ops": [["soin", "heros", [2, 2]], ["mana", "Sève", 1]], "tags": ["Ressource", "Gerbe", "Soin", "Mana"], "ambiance": "Onze jours sur l'écorce, une larme ambrée décollée au couteau d'os : elle panse avant de partir en fumée.", "budget": "cible 7 / 9 / 11 (niveaux 1-3) ; carte 7 / 9 / 11 (vérifié)"}
]
```

---

## Le Récif de Cezo (RES-122)
*Ressource · Hexagone allongé · Récif · Eau · vénitienne · niveaux 1 à 3*

**Background.** *(La journée de foire.)* À l'aube, la marée découvre le récif de Cezo, et la foire n'a que six heures. Les barques à fond plat accostent sur les têtes de corail, les plongeurs remontent les branches rouges dans des filets lestés, et sur des planches posées entre deux rochers, Alvise Moranzon pèse le corail à la balance de laiton, brin par brin. Les souffleurs de perles achètent le rouge, les marchands de la lagune vendent leur verre bleu. À midi, l'eau remonte : on charge, on paie, on file, et ce qui reste sur les planches appartient à la mer.

```json
[
{"id": "RES122-gerbe", "zone": "RES122", "pole": "res", "palier": "1-3", "nom": "Branche de corail", "cout": 0, "cible": 1, "effet": "1 dégât à la cible ; jusqu'au prochain tour, chaque coup reçu par le héros renvoie (2+L) dégâts.", "ops": [["deg", "cible", 1], ["riposte", [2, 1]]], "tags": ["Ressource", "Gerbe", "Dégâts", "Riposte"], "ambiance": "Alvise pèse le corail brin par brin ; qui le vole s'écorche les mains sur les têtes rouges.", "budget": "cible 7 / 9 / 11 (niveaux 1-3) ; carte 7 / 9 / 11 (vérifié)"}
]
```

---

## Les Falaises de Srekor (RES-136)
*Ressource · Hexagone allongé · Falaise côtière · Vent · khmère · niveaux 1 à 3*

**Background.** *(Le carnet de bord.)* Carnet de Sokha Mey, acheteuse de nids. Premier jour : la falaise de Srekor tombe droit dans la mer, et le vent y siffle si fort qu'on se parle par gestes. Les cueilleurs montent par des échelles de rotin, une torche entre les dents, jusqu'aux grottes où les salanganes collent leurs nids de salive. Deuxième jour : un panier de nids pèse moins qu'une poule et vaut une barque. Je paie en pains de sucre de palme ; le vieux Vann redescend sans un mot, puis repart vers une grotte qu'il n'a montrée à personne.

```json
[
{"id": "RES136-gerbe", "zone": "RES136", "pole": "res", "palier": "1-3", "nom": "Nid de salangane", "cout": 0, "cible": 0, "effet": "Reprenez en main la dernière carte de votre défausse ; le héros gagne (1+3L) de garde.", "ops": [["recup"], ["garde", "heros", [1, 3]]], "tags": ["Ressource", "Gerbe", "Récupération", "Garde"], "ambiance": "Le vieux Vann redescend l'échelle de rotin avec le nid que vous aviez laissé tomber, sans un mot.", "budget": "cible 7 / 9 / 11 (niveaux 1-3) ; carte 7,2 / 9,6 / 12 (vérifié)"}
]
```

---

## Récapitulatif

| Tuile | Carte | Pôle / palier | Coût | Tags |
|---|---|---|---|---|
| Exarchat des Lucioles | **Larve-de-Cuve** | - 1-6 | 2 | Pôle −, Invocation, Contrôle, Marque, Prix |
| Exarchat des Lucioles | **Essaim-Fixeur** | + 1-6 | 2 | Pôle +, Invocation, Dégâts dans le temps, Zone d'effet, Prix |
| Exarchat des Lucioles | **Nuit close** | - 7 | 3 | Pôle −, Forme ultime, Invocation, Contrôle, Zone d'effet, Marque, Pioche, Prix, Exil, Pose Abîme, Combo, Réveille Sang |
| Exarchat des Lucioles | **L'Aube tenue** | + 7 | 3 | Pôle +, Forme ultime, Dégâts dans le temps, Zone d'effet, Soin, Affaiblissement, Condition, Prix, Pose Racine, Combo, Réveille Braise, Dégâts, Marque |
| Exarchat des Lucioles | **Contrat au minium** | secret - | 0 | Secret, Utilitaire, Prix, Pioche, Mana |
| Exarchat des Lucioles | **Quatre langues** | secret - | 1 | Secret, Utilitaire, Contrôle, Pioche |
| Exarchat des Lucioles | **Ballot qui luit** | secret - | 0 | Secret, Utilitaire, Marque, Exil |
| Exarchat des Lucioles | **Éclats des passeurs** | secret - | 1 | Secret, Utilitaire, Pioche, Écho |
| Exarchat des Lucioles | **Baril crevé** | secret - | 1 | Secret, Utilitaire, Perce-garde, Zone d'effet, Affaiblissement |
| Exarchat des Lucioles | **La nasse de Zoé** | secret - | 0 | Secret, Utilitaire, Récupération, Mana |
| Delta de Pama | **Vote de la crue** | - 1-6 | 1 | Pôle −, Perce-garde, Zone d'effet, Dégâts, Prix |
| Delta de Pama | **Loi des greniers** | + 1-6 | 1 | Pôle +, Pioche, Mana, Prix |
| Delta de Pama | **L'Ensablement** | - 7 | 2 | Pôle −, Forme ultime, Affaiblissement, Perce-garde, Zone d'effet, Marque, Prix, Condition, Contrôle, Pose Sang, Combo, Réveille Abîme, Dégâts |
| Delta de Pama | **Loi du Partage** | + 7 | 2 | Pôle +, Forme ultime, Pioche, Soin, Zone d'effet, Garde, Écho, Prix, Pose Sceau, Combo, Réveille Racine, Invocation |
| Oasis de Raak | **Loi gravée** | - 1-6 | 1 | Pôle −, Garde, Contrôle |
| Oasis de Raak | **Loi de sel** | + 1-6 | 1 | Pôle +, Dégâts, Perce-garde, Pioche |
| Oasis de Raak | **Code de grès** | - 7 | 2 | Pôle −, Forme ultime, Contrôle, Zone d'effet, Affaiblissement, Garde, Riposte, Pioche, Pose Givre, Combo, Réveille Sceau |
| Oasis de Raak | **Lentille de sel** | + 7 | 2 | Pôle +, Forme ultime, Dégâts, Perce-garde, Dégâts dans le temps, Marque, Pioche, Pose Braise, Combo, Réveille Givre, Zone d'effet |
| Oasis de Sumak | **Larme d'encens** | res 1-3 | 0 | Ressource, Gerbe, Soin, Mana |
| Récif de Cezo | **Branche de corail** | res 1-3 | 0 | Ressource, Gerbe, Dégâts, Riposte |
| Falaises de Srekor | **Nid de salangane** | res 1-3 | 0 | Ressource, Gerbe, Récupération, Garde |

## Ce qui change par rapport à la 2.1

1. Lucioles : les deux « Appel » 2.1 (une bête fragile contre une bête solide, la même mécanique en miroir) deviennent deux jeux distincts tirés du background : Nuit = larve vorace + contrôle + marque pourpre, Aurore = bête solide + brûlure de zone (la chaleur qui fixe la teinture), chacune avec son prix.
2. Pama et Raak : les « Lois » 2.1 coût 0 (garde/pioche, pioche/soin, pioche 3 + boost) passent à coût 1 et à des mécaniques d'Assemblée (vote de la crue, greniers et mana avec ennemis nourris, tarif gravé qui fait hésiter, loi de sel qui perce la garde) ; le boost disparaît (trop fréquent).
3. Nouveaux : six formes ultimes qui changent de nature et forment des chaînes de résonances, trois Gerbes recentrées sur leur denrée (résine, corail, nid) au lieu de « pioche + soin », et six cartes utilitaires tirées des secrets des Lucioles.
