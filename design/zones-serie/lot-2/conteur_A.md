# Lot 2 — Conteur A, le Chroniqueur amer

Huit zones à cartes (fiche + 14 cartes chacune) et douze Ressources (fiche légère, sans carte).

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Conventions de points reprises du lot 1 : « tous » ×2,2 ; hésite tous = 9 ; ignoreGarde = 3 ; `si` compté à 50 % ; soin des bêtes ×1,5 ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixBete n rend n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5 (un bloqueur sans attaque = PV/2). Les budgets de ce fichier sont **calculés au script** à partir des `ops`, pas à la main.

Prix : 4 cartes sur 6 (paliers 1 à 6) dans chaque pôle de chaque zone ; chaque forme du palier 7 a aussi un prix. Boost : une seule fois dans le lot (forme +7 des Fonderies de Kraleng-Dek, palier 7, réveil exclu).

Leçons du lot 1 appliquées :
- Ordre des opérations conforme au moteur (`["affaiblit", qui, n]`, `["vulnerable", qui, n]`, `["brulure", qui, n, tours]`, `["deg", "hasard", n, coups]`), `mana` à 2 au plus, conditions `si` prises dans la liste du moteur (`bete`, `blesse`, `seul`, `hesite`, `garde`, `elan`, `vol`, `brule`, `vulnerable`, `cibleGarde`, `defausseAPrix`).
- Aucun des mots ni des images interdits par la leçon 2 (vérifié au script). Aucun nombre écrit en toutes lettres ne revient dans deux zones (« trois » ne reste que dans RES248, « deux » que dans ANT086 ; « par centaines » que dans DON037).
- Recettes de −7 et de +7 tournantes (voir chaque zone) : foule, ordre, démesure, silence, ruine, vide. **Aucun +7 où le végétal avale un bâtiment** : la basilique d'Embrakion reste intacte sous les pétales, et le corail de Lingshao (animal) soulève la stèle au lieu de l'avaler.
- Chute « …, sans X. » : deux fois en tout dans le lot (DON037 −2, RES107). Pas de « Morale : », pas de récit tronqué en dernière phrase, une seule chute en forme de pointe ironique (RES074).
- Tag « Loi » sur toutes les cartes d'Assemblée dont l'effet commence par « Loi », et nulle part ailleurs.

Recettes de récit (jamais deux fois de suite) : ANT170 le témoin d'en bas ; ANT192 le revers ; ANT086 les deux inscriptions ; ASS070 la chronique tronquée ; ASS168 le témoin d'en bas ; DON037 l'inventaire de ruine ; DON020 les deux inscriptions ; CIT002 le revers.

Résonances des formes du palier 7 (posée → réveillée) :

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT170 | Racine → Sang | Sceau → Racine |
| ANT192 | Abîme → Givre | Givre → Abîme |
| ANT086 | Abîme → Racine | Racine → Braise |
| ASS070 | Braise → Sceau | Racine → Braise |
| ASS168 | Givre → Sceau | Sceau → Sang |
| DON037 | Sang → Abîme | Racine → Givre |
| DON020 | Braise → Givre | Sang → Sceau |
| CIT002 | Sang → Racine | Givre → Braise |

Familles d'effets (leçon 4 du critique), une ligne par zone :

- **ANT170** (Peste / Guérison) — − : marque (Vulnérable) en chaîne + vermine invoquée qui frappe fort et meurt vite ; condition « cible déjà marquée ». + : garde (les bandelettes) + soin du héros + bêtes sacrées robustes ; condition « une bête est en jeu ».
- **ANT192** (Tempête / Calme) — − : coups au hasard en rafale + oiseaux de proie invoqués ; conditions « élan » et « vole par-dessus » ; prix en défausse (le vent emporte). + : hésitation + bêtes lourdes qui tiennent (bœufs musqués, phoque) ; condition « la cible hésite » ; prix en PV.
- **ANT086** (Ruine / Abondance) — − : dégâts à tous + sangliers invoqués + prix sur la bête la plus faible ; condition « une bête est en jeu » ; un peu de perce-garde. + : mana Pierre + troupeau invoqué (bêtes nombreuses) + soin des bêtes ; prix : les ennemis mangent aussi.
- **ASS070** (Cendre / Floraison) — − : lois de défausse : on paie en cartes défaussées et la carte rapporte plus si une carte a déjà été défaussée en prix (condition defausseAPrix) ; perce-garde ; un peu de brûlure. + : lois qui refleurissent : écho, récupération, pioche ; soin en appoint ; prix : les ennemis profitent aussi de la floraison.
- **ASS168** (Peste / Guérison) — − : lois de quarantaine : affaiblissement, hésitation ciblée, condition « il ne reste qu'un ennemi » (l'isolement) ; aucune marque, aucune invocation. + : lois du jardin des simples : pioche, soin, condition « le héros est sous la moitié de ses PV » ; prix : exil, défausse, l'ennemi se soigne aussi.
- **DON037** (Sang / Sève) — − : gros coups sur une cible payés en PV, vol de vie, bonus « héros sous la moitié de ses PV » ; on plonge pour le tribut. + : pièges et riposte : le corail coupe qui frappe ; dégâts à tous, garde ; prix : le corail protège aussi l'ennemi (garde ennemie).
- **DON020** (Rouille / Or) — − : brûlure (la rouille qui ronge) + perce-garde ; bonus « si la cible brûle » ; prix en PV. + : gros coups ciblés, marque (Vulnérable), mana ; bonus « si la cible a de la garde » ; prix en défausse ; le seul boost du lot.
- **CIT002** (Corruption / Pureté) — − : commandement acheté : soldats invoqués (bêtes qui frappent), garde, ennemis soudoyés qui hésitent ; prix : l'ennemi profite aussi du marché (garde ou soin ennemis). + : garde massive + perce-garde (on purge l'ennemi de sa protection) ; prix : exil (ce qui est pur ne sert qu'une fois) et défausse.

---

## 1. Les Étuves de Hesy-Meref (ANT170) — Antre · Forêt de champignons géants · Sève · Égyptienne

Recette du récit : le témoin d'en bas. Recette du −7 : la foule (vermine partout) ; du +7 : l'ordre (cours de soin en enfilade).

**Peste (−)** : les croûtes sous le pétrin → le pain compté → les nattes brûlées → le chacal des fosses → les fournils au plomb → la nuée des greniers → le Peuple des greniers. Fil mécanique : marque (Vulnérable) en chaîne + vermine invoquée qui frappe fort et meurt vite ; condition « cible déjà marquée ».
**Guérison (+)** : le duvet blanc → l'ibis du canal → le lin propre → la chatte du fournil → les pains sur les claies → le babouin porte-baume → les Chats du seuil. Fil mécanique : garde (les bandelettes) + soin du héros + bêtes sacrées robustes ; condition « une bête est en jeu ».

```json
{"fiche":"ANT170","nom":"Les Étuves de Hesy-Meref",
 "recit":"Méryt pétrissait les pains de moisissure. Les médecins de la Maison de Vie les laissaient verdir à l'ombre des chapeaux, puis en bandaient les plaies des carriers : le duvet blanc refermait tout. L'année du recensement, le scribe du vizir compta les pains et les fit charger pour l'armée du nord, jusqu'au dernier. Méryt garda les croûtes tombées sous le pétrin. Les rats aussi. Au printemps suivant, on brûlait des nattes devant chaque porte, et la chatte du fournil ne quittait plus le seuil.",
 "pal":["Chapeaux effondrés en bouillie brune, ruelles grouillantes de rats et de mouches, nattes brûlées devant chaque porte ; les murs de brique crue suintent.",
        "Pieds de champignons tachés de moisissure verte, fournils scellés au plomb du vizir, fosses de chaux vive au bord du canal ; des chacals rôdent la nuit.",
        "Champignons géants au-dessus d'un village de brique crue, Maison de Vie aux piliers peints, fournils qui fument ; ibis dans les flaques du canal.",
        "Pains verdissants alignés sur des claies sous les chapeaux, plaies bandées de lin propre, une chatte sur chaque seuil ; colonnes peintes de malachite.",
        "Cours de soin en enfilade sous les chapeaux, claies à perte de vue, ibis et babouins en rangs ; on n'entend que le froissement du lin."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"ANT170-moins-1","zone":"ANT170","pole":"-","palier":1,"nom":"Croûtes sous le pétrin","cout":1,"cible":1,
 "effet":"Un Rat du fournil rejoint le combat : 6 PV, frappe 4. La cible devient vulnérable 1. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Rat du fournil",6,4],["vulnerable","cible",1],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"Méryt balaya les croûtes sous le pétrin, faute de mieux ; les rats du fournil vinrent les chercher avant elle.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT170-moins-2","zone":"ANT170","pole":"-","palier":2,"nom":"Le Pain compté","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2, puis 6 dégâts ; si une bête est en jeu, 4 dégâts de plus.",
 "ops":[["vulnerable","cible",2],["deg","cible",6],["si","bete",[["deg","cible",4]]]],
 "tags":["Antre","Sève","Pôle −","Marque","Dégâts","Condition"],
 "ambiance":"Le scribe du vizir comptait les pains au bâton, sans les toucher, et emportait jusqu'au dernier.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT170-moins-3","zone":"ANT170","pole":"-","palier":3,"nom":"Les Nattes brûlées","cout":1,"cible":0,
 "effet":"Tous les ennemis deviennent vulnérables 1 et subissent 5 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","tous",1],["deg","tous",5],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle −","Marque","Dégâts","Prix"],
 "ambiance":"Chaque porte brûlait la natte de son malade sur le seuil ; la fumée verte montait jusqu'aux chapeaux.",
 "budget":"14,6 / 15 (−3 %)"},
{"id":"ANT170-moins-4","zone":"ANT170","pole":"-","palier":4,"nom":"Chacal des fosses","cout":2,"cible":1,
 "effet":"Un Chacal des fosses rejoint le combat : 14 PV, frappe 7. Si la cible est déjà marquée, 12 dégâts ; puis elle devient vulnérable 2. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Chacal des fosses",14,7],["si","vulnerable",[["deg","cible",12]]],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Antre","Sève","Pôle −","Invocation","Condition","Dégâts","Marque","Prix"],
 "ambiance":"Les fosses de chaux vive du canal n'étaient pas assez profondes ; les chacals l'apprirent avant les fossoyeurs.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ANT170-moins-5","zone":"ANT170","pole":"-","palier":5,"nom":"Fournils au plomb","cout":2,"cible":0,
 "effet":"3 coups de 6 dégâts au hasard ; tous les ennemis deviennent vulnérables 1. Si une bête est en jeu : 8 dégâts à tous.",
 "ops":[["deg","hasard",6,3],["vulnerable","tous",1],["si","bete",[["deg","tous",8]]]],
 "tags":["Antre","Sève","Pôle −","Dégâts","Marque","Condition"],
 "ambiance":"Le vizir fit sceller les fournils au plomb ; dès lors, on n'y cuisit plus rien.",
 "budget":"33,4 / 32 (+4 %)"},
{"id":"ANT170-moins-6","zone":"ANT170","pole":"-","palier":6,"nom":"Nuée des greniers","cout":1,"cible":0,
 "effet":"Une Nuée de mouches rejoint le combat : 6 PV, frappe 6. Tous les ennemis deviennent vulnérables 1 et subissent 3 dégâts. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Nuée de mouches",6,6],["vulnerable","tous",1],["deg","tous",3],["prixBete",3]],
 "tags":["Antre","Sève","Pôle −","Invocation","Marque","Dégâts","Prix"],
 "ambiance":"Dans les greniers vides du recensement, les mouches tenaient leurs propres registres, au plafond, en colonnes noires.",
 "budget":"22,2 / 22,5 (−1 %)"},
{"id":"ANT170-moins7","zone":"ANT170","pole":"-","palier":7,"nom":"Le Peuple des greniers","cout":2,"cible":0,
 "effet":"La vermine devient un peuple. Le Peuple des greniers rejoint le combat (20 PV, frappe 8) ; tous les ennemis deviennent vulnérables 2 et subissent 10 dégâts. Pose Racine. Si Sang est posée (consommée) : 15 dégâts à tous. Prix : 4 PV.",
 "ops":[["invoque","Peuple des greniers",20,8],["vulnerable","tous",2],["deg","tous",10],["pose","Racine"],["reveil","Sang",true,[["deg","tous",15]]],["prixPV",4]],
 "tags":["Antre","Sève","Forme ultime −7","Invocation","Marque","Dégâts","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les rats occupèrent la Maison de Vie pièce par pièce, et dormaient sur les claies où séchaient les pains.",
 "budget":"53,2 sans combo ; réveil +33 (62 %)"},
{"id":"ANT170-plus-1","zone":"ANT170","pole":"+","palier":1,"nom":"Duvet blanc","cout":0,"cible":0,
 "effet":"Le héros se soigne de 3 et gagne 2 de garde.",
 "ops":[["soin","heros",3],["garde","heros",2]],
 "tags":["Antre","Sève","Pôle +","Soin","Garde"],
 "ambiance":"Sur la plaie du carrier, le duvet du pain moisi prenait en quelques jours, comme une peau neuve.",
 "budget":"4,6 / 4 (+15 %)"},
{"id":"ANT170-plus-2","zone":"ANT170","pole":"+","palier":2,"nom":"Ibis du canal","cout":1,"cible":0,
 "effet":"Un Ibis du canal rejoint le combat : 12 PV, frappe 3. Le héros se soigne de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Ibis du canal",12,3],["soin","heros",4],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"L'ibis fouillait les flaques du canal au pied des étuves, et les médecins le laissaient entrer dans la cour.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT170-plus-3","zone":"ANT170","pole":"+","palier":3,"nom":"Lin propre","cout":1,"cible":0,
 "effet":"Le héros gagne 10 de garde et se soigne de 4 ; si une bête est en jeu, il gagne 8 de garde de plus.",
 "ops":[["garde","heros",10],["soin","heros",4],["si","bete",[["garde","heros",8]]]],
 "tags":["Antre","Sève","Pôle +","Garde","Soin","Condition"],
 "ambiance":"Les bandes de lin bouillies séchaient sur les cordes tendues entre les pieds des champignons, loin des mouches.",
 "budget":"15,2 / 15 (+1 %)"},
{"id":"ANT170-plus-4","zone":"ANT170","pole":"+","palier":4,"nom":"La Chatte du fournil","cout":2,"cible":0,
 "effet":"La Chatte du fournil rejoint le combat : 18 PV, frappe 6. Le héros gagne 10 de garde et se soigne de 5. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Chatte du fournil",18,6],["garde","heros",10],["soin","heros",5],["ennemiSoin",2]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Soin","Prix"],
 "ambiance":"Elle ne quittait plus le seuil de Méryt ; aucun scribe n'osa jamais la compter avec les biens du fournil.",
 "budget":"26,6 / 28 (−5 %)"},
{"id":"ANT170-plus-5","zone":"ANT170","pole":"+","palier":5,"nom":"Pains sur les claies","cout":2,"cible":0,
 "effet":"Le héros gagne 22 de garde, se soigne de 8 et pioche 1 carte ; si une bête est en jeu, vos bêtes se soignent de 6. Prix : la carte s'exile.",
 "ops":[["garde","heros",22],["soin","heros",8],["pioche",1],["si","bete",[["soin","allies",6]]],["exil"]],
 "tags":["Antre","Sève","Pôle +","Garde","Soin","Pioche","Condition","Exil","Prix"],
 "ambiance":"Les pains verdissaient sur les claies, à l'ombre des chapeaux ; on les retournait une fois par jour.",
 "budget":"31,1 / 32 (−3 %)"},
{"id":"ANT170-plus-6","zone":"ANT170","pole":"+","palier":6,"nom":"Babouin porte-baume","cout":1,"cible":0,
 "effet":"Un Babouin porte-baume rejoint le combat : 16 PV, frappe 4. Le héros gagne 8 de garde et se soigne de 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Babouin porte-baume",16,4],["garde","heros",8],["soin","heros",5],["prixDefausse",1]],
 "tags":["Antre","Sève","Pôle +","Invocation","Garde","Soin","Prix"],
 "ambiance":"Le babouin portait le pot de baume d'une cour à l'autre, et mordait quiconque y touchait.",
 "budget":"22,4 / 22,5 (+0 %)"},
{"id":"ANT170-plus7","zone":"ANT170","pole":"+","palier":7,"nom":"Les Chats du seuil","cout":2,"cible":0,
 "effet":"Le soin devient garnison. Les Chats du seuil rejoignent le combat (24 PV, frappe 5) ; garde +20 et soin 14 au héros. Pose Sceau. Si Racine est posée (consommée) : piochez 2 cartes, vos bêtes se soignent de 14. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Chats du seuil",24,5],["garde","heros",20],["soin","heros",14],["pose","Sceau"],["reveil","Racine",true,[["pioche",2],["soin","allies",14]]],["ennemiSoin",2]],
 "tags":["Antre","Sève","Forme ultime +7","Invocation","Garde","Soin","Combo","Pose Sceau","Réveil Racine","Pioche","Prix"],
 "ambiance":"Un chat sur chaque seuil, inscrit au registre des médecins comme un soignant, avec sa ration de poisson.",
 "budget":"45,1 sans combo ; réveil +29 (64 %)"}
]
```

---

## 2. L'Aire de Kaldbrekka (ANT192) — Antre · Glacier · Glace · Nordique

Recette du récit : le revers. Recette du −7 : la démesure (tourmente qui ne retombe plus) ; du +7 : le silence (air immobile, cloches sans battant).

**Tempête (−)** : le faucon dénoué → la rafale sur la mue → les sangles des dénicheurs → les labbes du chenal → les cloches qui sonnent seules → le gerfaut du tribut → la Tourmente lâchée. Fil mécanique : coups au hasard en rafale + oiseaux de proie invoqués ; conditions « élan » et « vole par-dessus » ; prix en défausse (le vent emporte).
**Calme (+)** : le vent tombe → le bœuf musqué → le chaperon → la harde en cercle → la neige lisse → le phoque du chenal → le Calme blanc. Fil mécanique : hésitation + bêtes lourdes qui tiennent (bœufs musqués, phoque) ; condition « la cible hésite » ; prix en PV.

```json
{"fiche":"ANT192","nom":"L'Aire de Kaldbrekka",
 "recit":"Kaldbrekka n'eut jamais de roi ; elle eut des gerfauts, qui coûtaient davantage. La saga du chef Hallvarð raconte qu'il apprivoisa la tempête en dénichant ses enfants, les faucons blancs du glacier, et qu'il en envoyait chaque été au roi du sud, qui lui rendait du blé, des cloches de bronze et la paix. Le scalde précise qu'aucun homme ne tomba jamais de la falaise. Dans la mue de pierre sèche, au-dessus des perchoirs, pendent pourtant les sangles des dénicheurs, une par homme, accrochées comme des manteaux qu'on reviendra chercher.",
 "pal":["Glacier fendu jusqu'à la roche, tourmente qui ne retombe jamais, mue éventrée où claquent des sangles ; des gerfauts lâchés crient au-dessus des crevasses.",
        "Rafales de neige sur les perchoirs de pierre sèche, cloches de bronze vert-de-gris qui sonnent seules, chaperons de cuir pourris dans la congère.",
        "Langue de glace bleue entre des falaises sombres, mue de pierre sèche au toit de tourbe ; gerfauts sur leurs perchoirs, bœufs musqués dans la moraine.",
        "Vent tombé, neige lisse sur la moraine, hardes de bœufs musqués en cercle ; perchoirs vides, chaperons peints de vermillon pendus aux poutres.",
        "Air immobile, glacier lisse comme une dalle, pas un cri ; bœufs musqués figés en cercle sous le givre, cloches pendues sans battant."],
 "pm":"Tempête","pp":"Calme"}
```

```json
[
{"id":"ANT192-moins-1","zone":"ANT192","pole":"-","palier":1,"nom":"Le Faucon dénoué","cout":1,"cible":0,
 "effet":"Un Gerfaut de l'aire rejoint le combat : 4 PV, frappe 4. Puis 2 coups de 2 dégâts au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Gerfaut de l'aire",4,4],["deg","hasard",2,2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"On dénoua la longe du premier gerfaut un matin de vent ; le chef Hallvarð appela ce jour une victoire.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT192-moins-2","zone":"ANT192","pole":"-","palier":2,"nom":"Rafale sur la mue","cout":0,"cible":1,
 "effet":"2 coups de 2 dégâts au hasard ; si la cible prend son élan, elle hésite ce tour. Prix : le héros perd 1 PV.",
 "ops":[["deg","hasard",2,2],["si","elan",[["hesite","cible"]]],["prixPV",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Condition","Contrôle","Prix"],
 "ambiance":"La rafale entrait par la porte basse de la mue et faisait tourner les gerfauts sur leurs perchoirs.",
 "budget":"5,5 / 5 (+10 %)"},
{"id":"ANT192-moins-3","zone":"ANT192","pole":"-","palier":3,"nom":"Les Sangles des dénicheurs","cout":1,"cible":1,
 "effet":"4 coups de 4 dégâts au hasard ; si la cible vole par-dessus, 6 dégâts de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","hasard",4,4],["si","vol",[["deg","cible",6]]],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"On descendait le dénicheur au bout d'une sangle de cuir de phoque ; le vent décidait de la suite.",
 "budget":"16 / 15 (+7 %)"},
{"id":"ANT192-moins-4","zone":"ANT192","pole":"-","palier":4,"nom":"Labbes du chenal","cout":2,"cible":0,
 "effet":"Un Labbe pillard rejoint le combat : 10 PV, frappe 6. Puis 5 coups de 3 dégâts au hasard.",
 "ops":[["invoque","Labbe pillard",10,6],["deg","hasard",3,5]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts"],
 "ambiance":"Les labbes volaient leur pêche aux gerfauts en plein ciel, et personne au sud ne réclamait les labbes.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ANT192-moins-5","zone":"ANT192","pole":"-","palier":5,"nom":"Les Cloches sonnent seules","cout":2,"cible":0,
 "effet":"6 coups de 4 dégâts au hasard. Si la cible prend son élan : 10 dégâts à tous.",
 "ops":[["deg","hasard",4,6],["si","elan",[["deg","tous",10]]]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Condition"],
 "ambiance":"Les cloches de bronze du roi du sud sonnaient seules dans la tourmente ; on cessa de compter les coups.",
 "budget":"35 / 32 (+9 %)"},
{"id":"ANT192-moins-6","zone":"ANT192","pole":"-","palier":6,"nom":"Le Gerfaut du tribut","cout":1,"cible":0,
 "effet":"Le Gerfaut du tribut rejoint le combat : 8 PV, frappe 8. Puis 3 coups de 3 dégâts au hasard. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Gerfaut du tribut",8,8],["deg","hasard",3,3],["prixPV",3]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Le plus blanc de la couvée était promis au sud ; il creva l'œil de l'homme au chaperon.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ANT192-moins7","zone":"ANT192","pole":"-","palier":7,"nom":"La Tourmente lâchée","cout":2,"cible":0,
 "effet":"L'aire s'ouvre. La Volée de l'aire rejoint le combat (16 PV, frappe 10) ; 8 coups de 4 dégâts au hasard. Pose Abîme. Si Givre est posée (consommée) : tous les ennemis hésitent et subissent 12 dégâts. Prix : défaussez 2 cartes.",
 "ops":[["invoque","Volée de l'aire",16,10],["deg","hasard",4,8],["pose","Abîme"],["reveil","Givre",true,[["hesite","tous"],["deg","tous",12]]],["prixDefausse",2]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Combo","Pose Abîme","Réveil Givre","Contrôle","Prix"],
 "ambiance":"On ouvrit toutes les portes de la mue le même jour ; la tempête ne retomba plus sur Kaldbrekka.",
 "budget":"49 sans combo ; réveil +35,4 (72 %)"},
{"id":"ANT192-plus-1","zone":"ANT192","pole":"+","palier":1,"nom":"Le Vent tombe","cout":0,"cible":1,
 "effet":"La cible hésite ce tour. Prix : le héros perd 1 PV.",
 "ops":[["hesite","cible"],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Contrôle","Prix"],
 "ambiance":"Un matin sans vent, les gerfauts restèrent sur leurs perchoirs, et les dénicheurs sur leurs paillasses.",
 "budget":"4 / 4 (+0 %)"},
{"id":"ANT192-plus-2","zone":"ANT192","pole":"+","palier":2,"nom":"Bœuf musqué de la moraine","cout":1,"cible":1,
 "effet":"Un Bœuf musqué de la moraine rejoint le combat : 18 PV, frappe 2. Si la cible hésite, 4 dégâts. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Bœuf musqué de la moraine",18,2],["si","hesite",[["deg","cible",4]]],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Condition","Dégâts","Prix"],
 "ambiance":"Le bœuf musqué broutait la moraine sans regarder le ciel ; la saga d'Hallvarð ne le mentionne nulle part.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT192-plus-3","zone":"ANT192","pole":"+","palier":3,"nom":"Le Chaperon","cout":1,"cible":1,
 "effet":"Si la cible hésitait déjà, 8 dégâts. Puis elle hésite ce tour et subit 6 dégâts.",
 "ops":[["si","hesite",[["deg","cible",8]]],["hesite","cible"],["deg","cible",6]],
 "tags":["Antre","Glace","Pôle +","Condition","Dégâts","Contrôle"],
 "ambiance":"Le chaperon de cuir aveuglait le gerfaut : il se tenait coi, immobile, et l'homme de la mue respirait enfin.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ANT192-plus-4","zone":"ANT192","pole":"+","palier":4,"nom":"Harde en cercle","cout":2,"cible":0,
 "effet":"La Harde en cercle rejoint le combat : 24 PV, frappe 3. Tous les ennemis hésitent ce tour ; le héros gagne 6 de garde. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Harde en cercle",24,3],["hesite","tous"],["garde","heros",6],["prixPV",3]],
 "tags":["Antre","Glace","Pôle +","Invocation","Contrôle","Garde","Prix"],
 "ambiance":"Devant le loup, les bœufs musqués se mettaient en cercle, cornes dehors, les veaux au milieu, et attendaient.",
 "budget":"27,3 / 28 (−2 %)"},
{"id":"ANT192-plus-5","zone":"ANT192","pole":"+","palier":5,"nom":"Neige lisse","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; si elle hésite, 14 dégâts de plus. Puis tous les ennemis hésitent ce tour ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",10],["si","hesite",[["deg","cible",14]]],["hesite","tous"],["garde","heros",10],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Condition","Contrôle","Garde","Prix"],
 "ambiance":"La neige tombée sans vent effaça les traces des dénicheurs sur la moraine, et celles des chefs aussi.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT192-plus-6","zone":"ANT192","pole":"+","palier":6,"nom":"Phoque du chenal","cout":1,"cible":1,
 "effet":"Un Phoque du chenal rejoint le combat : 14 PV, frappe 5. La cible hésite ce tour et subit 4 dégâts.",
 "ops":[["invoque","Phoque du chenal",14,5],["hesite","cible"],["deg","cible",4]],
 "tags":["Antre","Glace","Pôle +","Invocation","Contrôle","Dégâts"],
 "ambiance":"Le phoque remontait le chenal gelé jusqu'à la mue vide et dormait des heures sur la glace.",
 "budget":"23,5 / 22,5 (+4 %)"},
{"id":"ANT192-plus7","zone":"ANT192","pole":"+","palier":7,"nom":"Le Calme blanc","cout":2,"cible":1,
 "effet":"Plus un souffle. La Harde figée se dresse (bloqueur de 40 PV). Tous les ennemis hésitent et perdent 2 d'attaque ; 8 dégâts à la cible. Pose Givre. Si Abîme est posée (consommée) : 28 dégâts à la cible, qui ignorent la garde. Prix : 3 PV.",
 "ops":[["invoque","Harde figée",40,0],["hesite","tous"],["affaiblit","tous",2],["deg","cible",8],["pose","Givre"],["reveil","Abîme",true,[["deg","cible",28],["ignoreGarde"]]],["prixPV",3]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Contrôle","Affaiblissement","Dégâts","Combo","Pose Givre","Réveil Abîme","Perce-garde","Prix"],
 "ambiance":"Les bœufs musqués restèrent en cercle tout l'hiver sous le givre ; les cloches n'avaient plus de battant.",
 "budget":"47,2 sans combo ; réveil +31 (66 %)"}
]
```

---

## 3. Ráth Mórbanna, le Fort aux Truies (ANT086) — Antre · Cité en ruines · Pierre · Celte

Recette du récit : les deux inscriptions. Recette du −7 : la ruine (halle déterrée par les groins) ; du +7 : la foule (fort plein à craquer de bêtes et de bouviers).

**Ruine (−)** : le groin dans la halle → la truie ramenée → les bauges dans le talus → le verrat de la halle → les chaudrons fendus → les corbeaux sur les crânes → la Harde ensauvagée. Fil mécanique : dégâts à tous + sangliers invoqués + prix sur la bête la plus faible ; condition « une bête est en jeu » ; un peu de perce-garde.
**Abondance (+)** : la truie du festin → les glands en tas → les porcelets sous les chênes → le chaudron de bronze → le bouvier et ses bœufs → le cuissot du roi → le Festin dû. Fil mécanique : mana Pierre + troupeau invoqué (bêtes nombreuses) + soin des bêtes ; prix : les ennemis mangent aussi.

```json
{"fiche":"ANT086","nom":"Ráth Mórbanna, le Fort aux Truies",
 "recit":"Sur une arête de la pierre levée, les entailles en bâtons disent : « Chaque ferme doit une truie au festin de Mórbanna, et le roi doit le festin à chaque ferme. » Sur l'arête opposée, plus petites, plus profondes : « Le roi a mangé. » Entre les deux, il faut compter les hivers où les fermes montèrent leurs truies sans être invitées. La porchère Órlaith, la dernière à monter la sienne, s'arrêta à mi-pente et la ramena chez elle. Les sangliers qui fouillent aujourd'hui la halle descendent, dit-on, de celle-là.",
 "pal":["Halle effondrée, poteaux sculptés déterrés par les groins, chaudrons fendus dans la boue ; des sangliers par dizaines dans les fossés du rempart.",
        "Talus du rempart troué de bauges, pierre levée penchée sous le lichen, enclos de clayonnage rompus ; corbeaux sur des crânes de truies.",
        "Fort circulaire en ruine sur une colline herbeuse, halle au toit crevé, pierre levée entaillée sur ses arêtes ; porcs à demi sauvages sous les chênes.",
        "Clayonnages neufs, enclos pleins de truies et de porcelets, chaudrons de bronze qui fument devant la halle rechaumée ; glands en tas au pied du talus.",
        "Fort plein à craquer de porcs, de bouviers et de chaudrons, poteaux de la halle luisants de graisse ; on mange jusque sur le rempart."],
 "pm":"Ruine","pp":"Abondance"}
```

```json
[
{"id":"ANT086-moins-1","zone":"ANT086","pole":"-","palier":1,"nom":"Le Groin dans la halle","cout":1,"cible":0,
 "effet":"Une Laie des fossés rejoint le combat : 6 PV, frappe 4. 2 dégâts à tous. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Laie des fossés",6,4],["deg","tous",2],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"La laie retournait le sol de la halle à la recherche des os du dernier festin, et en trouvait.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT086-moins-2","zone":"ANT086","pole":"-","palier":2,"nom":"La Truie ramenée","cout":0,"cible":0,
 "effet":"2 dégâts à tous ; si une bête est en jeu, 2 dégâts de plus à tous. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","tous",2],["si","bete",[["deg","tous",2]]],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"À mi-pente, Órlaith fit demi-tour avec sa truie ; on ne lui demanda rien, il n'y avait plus personne.",
 "budget":"4,6 / 5 (−8 %)"},
{"id":"ANT086-moins-3","zone":"ANT086","pole":"-","palier":3,"nom":"Bauges dans le talus","cout":1,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0, puis 4 dégâts à tous.",
 "ops":[["briseGarde","tous"],["deg","tous",4]],
 "tags":["Antre","Pierre","Pôle −","Perce-garde","Dégâts"],
 "ambiance":"Les sangliers creusèrent leurs bauges dans le talus du rempart, là où les rois avaient enterré leurs pieux.",
 "budget":"15,4 / 15 (+3 %)"},
{"id":"ANT086-moins-4","zone":"ANT086","pole":"-","palier":4,"nom":"Le Verrat de la halle","cout":2,"cible":0,
 "effet":"Le Verrat de la halle rejoint le combat : 16 PV, frappe 8. 4 dégâts à tous. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Verrat de la halle",16,8],["deg","tous",4],["prixBete",3]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Il dormait sur la pierre du trône, couché de travers, et chargeait quiconque montait les marches.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"ANT086-moins-5","zone":"ANT086","pole":"-","palier":5,"nom":"Chaudrons fendus","cout":2,"cible":0,
 "effet":"10 dégâts à tous ; si une bête est en jeu, 8 dégâts de plus à tous.",
 "ops":[["deg","tous",10],["si","bete",[["deg","tous",8]]]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Condition"],
 "ambiance":"Les chaudrons du festin roulèrent dans les fossés ; les groins les retournèrent jusqu'à les fendre en deux.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ANT086-moins-6","zone":"ANT086","pole":"-","palier":6,"nom":"Corbeaux sur les crânes","cout":1,"cible":0,
 "effet":"Les Corbeaux du talus rejoignent le combat : 6 PV, frappe 6. 5 dégâts à tous. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Corbeaux du talus",6,6],["deg","tous",5],["prixBete",2]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Sur le talus, les crânes de truies alignés comme un compte ; les corbeaux venaient y vérifier l'addition.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ANT086-moins7","zone":"ANT086","pole":"-","palier":7,"nom":"La Harde ensauvagée","cout":2,"cible":0,
 "effet":"La halle retourne au groin. La Harde ensauvagée rejoint le combat (18 PV, frappe 10) ; gardes ennemies à 0, puis 9 dégâts à tous. Pose Abîme. Si Racine est posée (consommée) : 16 dégâts à tous. Prix : votre bête la plus faible perd 4 PV.",
 "ops":[["invoque","Harde ensauvagée",18,10],["briseGarde","tous"],["deg","tous",9],["pose","Abîme"],["reveil","Racine",true,[["deg","tous",16]]],["prixBete",4]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Perce-garde","Dégâts","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"La harde déterra la pierre levée et la coucha dans la boue ; l'arête du roi tomba face contre terre.",
 "budget":"46,4 sans combo ; réveil +35,2 (76 %)"},
{"id":"ANT086-plus-1","zone":"ANT086","pole":"+","palier":1,"nom":"La Truie du festin","cout":1,"cible":0,
 "effet":"Une Truie de ferme rejoint le combat : 10 PV, frappe 2. Gagnez 1 mana Pierre.",
 "ops":[["invoque","Truie de ferme",10,2],["mana","Pierre",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Mana"],
 "ambiance":"Chaque ferme montait sa truie au fort à la première gelée, une corde de jonc passée derrière l'oreille.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT086-plus-2","zone":"ANT086","pole":"+","palier":2,"nom":"Glands en tas","cout":0,"cible":0,
 "effet":"Gagnez 2 mana Pierre ; le héros se soigne de 1. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Pierre",2],["soin","heros",1],["ennemiSoin",1]],
 "tags":["Antre","Pierre","Pôle +","Mana","Soin","Prix"],
 "ambiance":"Les enfants ramassaient les glands sous les chênes du fossé et les versaient en tas au pied du talus.",
 "budget":"4,8 / 5 (−4 %)"},
{"id":"ANT086-plus-3","zone":"ANT086","pole":"+","palier":3,"nom":"Porcelets sous les chênes","cout":1,"cible":0,
 "effet":"Une Portée de porcelets rejoint le combat : 8 PV, frappe 3. Vos bêtes se soignent de 4.",
 "ops":[["invoque","Portée de porcelets",8,3],["soin","allies",4]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Soin"],
 "ambiance":"Sous les chênes, la portée suivait la truie en file, et le porcher les comptait deux fois par jour.",
 "budget":"14,5 / 15 (−3 %)"},
{"id":"ANT086-plus-4","zone":"ANT086","pole":"+","palier":4,"nom":"Le Chaudron de bronze","cout":2,"cible":0,
 "effet":"Le héros se soigne de 10, vos bêtes de 6 ; gagnez 2 mana Pierre et piochez 1 carte. Prix : chaque ennemi se soigne de 2.",
 "ops":[["soin","heros",10],["soin","allies",6],["mana","Pierre",2],["pioche",1],["ennemiSoin",2]],
 "tags":["Antre","Pierre","Pôle +","Soin","Mana","Pioche","Prix"],
 "ambiance":"Le chaudron fumait devant la halle tout l'hiver, et nul n'en était chassé, pas même l'étranger.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT086-plus-5","zone":"ANT086","pole":"+","palier":5,"nom":"Le Bouvier et ses bœufs","cout":2,"cible":0,
 "effet":"Les Bœufs du bouvier rejoignent le combat : 22 PV, frappe 5. Gagnez 2 mana Pierre ; vos bêtes se soignent de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Bœufs du bouvier",22,5],["mana","Pierre",2],["soin","allies",6],["ennemiGarde",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Mana","Soin","Prix"],
 "ambiance":"Le bouvier rentrait ses bœufs dans l'enceinte au soir, et les poteaux de la porte en gardaient le poil.",
 "budget":"31,5 / 32 (−2 %)"},
{"id":"ANT086-plus-6","zone":"ANT086","pole":"+","palier":6,"nom":"Le Cuissot du roi","cout":1,"cible":0,
 "effet":"Le héros se soigne de 8 et gagne 5 de garde ; gagnez 2 mana Pierre. Si une bête est en jeu, vos bêtes se soignent de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","heros",8],["garde","heros",5],["mana","Pierre",2],["si","bete",[["soin","allies",8]]],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle +","Soin","Garde","Mana","Condition","Prix"],
 "ambiance":"On découpait le cuissot sur la table de la halle ; la part du roi allait au plus bruyant.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ANT086-plus7","zone":"ANT086","pole":"+","palier":7,"nom":"Le Festin dû","cout":2,"cible":0,
 "effet":"Le roi sert à table. Le Troupeau de Mórbanna entre en jeu (36 PV, frappe 6) ; vos bêtes se soignent de 12 ; +2 mana Pierre. Pose Racine. Si Braise est posée (consommée) : tous brûlent 4 sur 3 tours ; soin 6 à vos bêtes. Prix : soin 2 à chaque ennemi.",
 "ops":[["invoque","Troupeau de Mórbanna",36,6],["soin","allies",12],["mana","Pierre",2],["pose","Racine"],["reveil","Braise",true,[["brulure","tous",4,3],["soin","allies",6]]],["ennemiSoin",2]],
 "tags":["Antre","Pierre","Forme ultime +7","Invocation","Soin","Mana","Combo","Pose Racine","Réveil Braise","Dégâts dans le temps","Prix"],
 "ambiance":"Órlaith remonta la pente avec sa truie, les fermes derrière elle ; le roi, cette fois, servit à table.",
 "budget":"46,6 sans combo ; réveil +35,4 (76 %)"}
]
```

---

## 4. Le Synode des Fumées d'Embrakion (ASS070) — Assemblée · Jungle · Sève · Byzantine

Recette du récit : la chronique tronquée (un palimpseste dans le trou). Recette du −7 : le vide (clairière de brûlis sans un oiseau) ; du +7 : la foule (pollen, colibris, abeilles ; la basilique reste intacte).

**Cendre (−)** : la loi de la fumée → les cloches d'argile → la loi des clairières → le psaume gratté → la loi du brûlis → les registres cloués → les Actes brûlés. Fil mécanique : lois de défausse : on paie en cartes défaussées et la carte rapporte plus si une carte a déjà été défaussée en prix (condition defausseAPrix) ; perce-garde ; un peu de brûlure.
**Floraison (+)** : la loi des Fleurs → le pollen taxé → les ruches dans les niches → la loi des Lianes → les fresques lavées → l'encre pourpre → le Synode des Pétales. Fil mécanique : lois qui refleurissent : écho, récupération, pioche ; soin en appoint ; prix : les ennemis profitent aussi de la floraison.

```json
{"fiche":"ASS070","nom":"Le Synode des Fumées d'Embrakion",
 "recit":"Actes du synode d'Embrakion, sur parchemin de peau de tapir. Première indiction : le logothète Kosmas établit l'impôt de la fumée ; chaque foyer de la jungle paie un sou par feu allumé. Troisième indiction : les villages cuisent la nuit, sous des cloches d'argile. Quatrième : le synode taxe la braise et fait brûler toute clairière non déclarée. De la cinquième à la huitième, le parchemin a été gratté et recouvert d'un psaume. Neuvième indiction : la jungle a fleuri jusque sous l'autel. Le logothète signe la loi des Fleurs, et taxe le pollen.",
 "pal":["Clairière de brûlis à perte de vue, souches charbonneuses, basilique de brique sans toit au milieu ; fumée brune qui ne monte pas, plus un oiseau.",
        "Lisières roussies, cloches d'argile renversées sur des feux cachés, fresques de l'abside noircies de suie ; registres d'impôt cloués aux portes.",
        "Basilique de brique au fond d'une jungle épaisse, coupole couverte de mousse, fumées de cuisine entre les fromagers ; perroquets sur le narthex.",
        "Lianes en fleur sur les colonnes de remploi, ruches dans les niches, fresques lavées où reparaît le vermillon ; pétales sur les bancs du synode.",
        "Jungle en fleur jusqu'à l'horizon, air épais de pollen, nuées de colibris ; la basilique intacte sert de grenier à pétales jusqu'à la coupole."],
 "pm":"Cendre","pp":"Floraison"}
```

```json
[
{"id":"ASS070-moins-1","zone":"ASS070","pole":"-","palier":1,"nom":"Le Sou par feu","cout":0,"cible":1,
 "effet":"Loi de la fumée : 5 dégâts ; si une carte a déjà été défaussée en prix ce tour, 4 dégâts de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",5],["si","defausseAPrix",[["deg","cible",4]]],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Condition","Prix"],
 "ambiance":"Le percepteur montait aux villages compter les fumées depuis la crête, et inscrivait un sou par panache.",
 "budget":"4 / 4 (+0 %)"},
{"id":"ASS070-moins-2","zone":"ASS070","pole":"-","palier":2,"nom":"Cloches d'argile","cout":1,"cible":1,
 "effet":"7 dégâts ; la cible hésite ce tour.",
 "ops":[["deg","cible",7],["hesite","cible"]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Contrôle"],
 "ambiance":"On cuisait la nuit sous des cloches d'argile percées d'un trou ; la fumée rampait au sol.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS070-moins-3","zone":"ASS070","pole":"-","palier":3,"nom":"Les Clairières non déclarées","cout":1,"cible":0,
 "effet":"Loi des clairières : tous les ennemis brûlent 2 sur 2 tours. Si une carte a déjà été défaussée en prix ce tour : 6 dégâts à tous.",
 "ops":[["brulure","tous",2,2],["si","defausseAPrix",[["deg","tous",6]]]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts dans le temps","Condition","Dégâts"],
 "ambiance":"Le synode fit brûler les clairières que nul n'avait déclarées ; il y en eut davantage l'année suivante.",
 "budget":"15,4 / 15 (+3 %)"},
{"id":"ASS070-moins-4","zone":"ASS070","pole":"-","palier":4,"nom":"Le Psaume gratté","cout":2,"cible":1,
 "effet":"16 dégâts qui ignorent la garde ; si une carte a déjà été défaussée en prix ce tour, 10 de plus. Piochez 2 cartes. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",16],["ignoreGarde"],["si","defausseAPrix",[["deg","cible",10]]],["pioche",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Perce-garde","Condition","Pioche","Prix"],
 "ambiance":"Sous le psaume, à contre-jour, on devine encore les colonnes d'un rôle d'impôt et quelques noms de villages.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ASS070-moins-5","zone":"ASS070","pole":"-","palier":5,"nom":"Le Brûlis ordonné","cout":2,"cible":0,
 "effet":"Loi du brûlis : la garde de tous les ennemis tombe à 0, puis 9 dégâts à tous. Si une carte a déjà été défaussée en prix ce tour : tous brûlent 3 sur 2 tours. Prix : la carte s'exile.",
 "ops":[["briseGarde","tous"],["deg","tous",9],["si","defausseAPrix",[["brulure","tous",3,2]]],["exil"]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Perce-garde","Dégâts","Condition","Dégâts dans le temps","Exil","Prix"],
 "ambiance":"Le diacre lisait la loi devant la lisière, et l'on y portait la torche avant l'amen.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS070-moins-6","zone":"ASS070","pole":"-","palier":6,"nom":"Registres cloués","cout":1,"cible":1,
 "effet":"Piochez 2 cartes. 12 dégâts ; si une carte a déjà été défaussée en prix ce tour, 8 de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["deg","cible",12],["si","defausseAPrix",[["deg","cible",8]]],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Pioche","Dégâts","Condition","Prix"],
 "ambiance":"Les rôles de la fumée étaient cloués aux portes ; la pluie de la jungle les décollait en un mois.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ASS070-moins7","zone":"ASS070","pole":"-","palier":7,"nom":"Les Actes brûlés","cout":2,"cible":1,
 "effet":"Le synode brûle ses propres Actes. Tous les ennemis perdent leur garde et brûlent 4 sur 3 tours ; 16 dégâts à la cible, qui ignorent la garde. Pose Braise. Si Sceau est posée (consommée) : piochez 2, 12 dégâts à tous. Prix : défaussez 2 cartes.",
 "ops":[["briseGarde","tous"],["brulure","tous",4,3],["deg","cible",16],["ignoreGarde"],["pose","Braise"],["reveil","Sceau",true,[["pioche",2],["deg","tous",12]]],["prixDefausse",2]],
 "tags":["Assemblée","Sève","Forme ultime −7","Perce-garde","Dégâts dans le temps","Dégâts","Combo","Pose Braise","Réveil Sceau","Pioche","Prix"],
 "ambiance":"Le logothète fit porter les Actes au bûcher d'une clairière ; le psaume brûla avec, et l'impôt dessous.",
 "budget":"46 sans combo ; réveil +34,4 (75 %)"},
{"id":"ASS070-plus-1","zone":"ASS070","pole":"+","palier":1,"nom":"La Loi des Fleurs","cout":0,"cible":0,
 "effet":"Loi des Fleurs : la prochaine carte de zone jouée ce tour a son effet doublé. Prix : le héros perd 2 PV.",
 "ops":[["echo"],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Écho","Prix"],
 "ambiance":"Le logothète signa la loi des Fleurs à l'encre pourpre, d'une main pressée, avant la saison des pluies.",
 "budget":"4 / 4 (+0 %)"},
{"id":"ASS070-plus-2","zone":"ASS070","pole":"+","palier":2,"nom":"Le Pollen taxé","cout":1,"cible":0,
 "effet":"Piochez 2 cartes ; le héros se soigne de 4.",
 "ops":[["pioche",2],["soin","heros",4]],
 "tags":["Assemblée","Sève","Pôle +","Pioche","Soin"],
 "ambiance":"On pesait le pollen au trébuchet du synode, sur des feuilles de figuier, et le vent en emportait la moitié.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS070-plus-3","zone":"ASS070","pole":"+","palier":3,"nom":"Ruches dans les niches","cout":1,"cible":1,
 "effet":"Reprenez en main la dernière carte de la défausse et piochez 1 carte ; 9 dégâts. Prix : chaque ennemi se soigne de 1.",
 "ops":[["recup"],["pioche",1],["deg","cible",9],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle +","Récupération","Pioche","Dégâts","Prix"],
 "ambiance":"Les abeilles s'installèrent dans les niches des saints, et les saints eurent enfin de quoi payer l'impôt.",
 "budget":"14,8 / 15 (−1 %)"},
{"id":"ASS070-plus-4","zone":"ASS070","pole":"+","palier":4,"nom":"La Loi des Lianes","cout":2,"cible":0,
 "effet":"Loi des Lianes : la prochaine carte de zone jouée ce tour a son effet doublé ; piochez 2 cartes ; soin 6 et garde 8 au héros.",
 "ops":[["echo"],["pioche",2],["soin","heros",6],["garde","heros",8]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Écho","Pioche","Soin","Garde"],
 "ambiance":"Elle interdisait de couper les lianes de la basilique ; elle fut votée sous les lianes, faute d'autre toit.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ASS070-plus-5","zone":"ASS070","pole":"+","palier":5,"nom":"Fresques lavées","cout":2,"cible":1,
 "effet":"Reprenez en main la dernière carte de la défausse, piochez 2 cartes ; écho ; 16 dégâts. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["recup"],["pioche",2],["echo"],["deg","cible",16],["ennemiGarde",2]],
 "tags":["Assemblée","Sève","Pôle +","Récupération","Pioche","Écho","Dégâts","Prix"],
 "ambiance":"La pluie lava la suie de l'abside : sous les saints reparut le vermillon, puis un saint plus ancien.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS070-plus-6","zone":"ASS070","pole":"+","palier":6,"nom":"L'Encre pourpre","cout":1,"cible":1,
 "effet":"Loi de l'encre pourpre : écho ; piochez 2 cartes ; 10 dégâts. Prix : le héros perd 2 PV.",
 "ops":[["echo"],["pioche",2],["deg","cible",10],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Écho","Pioche","Dégâts","Prix"],
 "ambiance":"L'encre pourpre était réservée au logothète ; on la tirait d'un coquillage que la jungle ne connaissait pas.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ASS070-plus7","zone":"ASS070","pole":"+","palier":7,"nom":"Le Synode des Pétales","cout":2,"cible":0,
 "effet":"Loi des pétales. Reprenez la dernière carte de la défausse, piochez 3 cartes, gagnez 2 mana Sève ; écho ; soin 14 et garde 10. Pose Racine. Si Braise est posée (consommée) : 14 dégâts à tous. Prix : chaque ennemi se soigne de 2.",
 "ops":[["recup"],["pioche",3],["mana","Sève",2],["echo"],["soin","heros",14],["garde","heros",10],["pose","Racine"],["reveil","Braise",true,[["deg","tous",14]]],["ennemiSoin",2]],
 "tags":["Assemblée","Sève","Forme ultime +7","Loi","Récupération","Pioche","Mana","Écho","Soin","Garde","Combo","Pose Racine","Réveil Braise","Dégâts","Prix"],
 "ambiance":"Le synode siégea dans une nef pleine de pétales, et vota l'impôt sur le pollen à l'unanimité.",
 "budget":"45,6 sans combo ; réveil +30,8 (68 %)"}
]
```

---

## 5. Le Lazaret de Guadalcebrán (ASS168) — Assemblée · Mangrove · Eau · Andalouse

Recette du récit : le témoin d'en bas. Recette du −7 : le silence (lazaret clos, navires sans équipage) ; du +7 : l'ordre (chenaux au carré, chaque lit fait).

**Peste (−)** : le panier à perche → les jours d'ancrage → le drapeau jaune → la loi du vinaigre → les navires sans équipage → le lazaret clos → la Quarantaine sans terme. Fil mécanique : lois de quarantaine : affaiblissement, hésitation ciblée, condition « il ne reste qu'un ennemi » (l'isolement) ; aucune marque, aucune invocation.
**Guérison (+)** : la fumée de genévrier → la loi des simples → la citerne rouverte → la loi des galeries → les malades au soleil → la lettre séchée → les Portes ouvertes. Fil mécanique : lois du jardin des simples : pioche, soin, condition « le héros est sous la moitié de ses PV » ; prix : exil, défausse, l'ennemi se soigne aussi.

```json
{"fiche":"ASS168","nom":"Le Lazaret de Guadalcebrán",
 "recit":"Inés trempait les lettres. Chaque navire entré dans la mangrove de Guadalcebrán déposait son courrier dans un panier, au bout d'une perche ; elle le plongeait dans le vinaigre, le séchait à la fumée de genévrier et le portait au conseil du lazaret, qui fixait les jours d'ancrage, payés au jour. Elle savait lire, ce que le conseil ignorait. Un printemps, une lettre venue d'outre-mer annonçait que le mal y avait cessé depuis les vendanges. Inés la sécha avec soin, comme les autres, et la glissa sous la pile.",
 "pal":["Lazaret clos sur ses pilotis, navires ancrés sans équipage entre les palétuviers, azulejos verdis de vase ; aucune cloche, aucun appel, l'eau ne bouge plus.",
        "Drapeaux jaunes aux mâts, paniers à perche sur les quais, odeur de vinaigre ; carreaux bleus éclatés sous les arches prises dans les racines.",
        "Lazaret blanc sur pilotis au milieu de la mangrove, patios carrelés de bleu, navires à l'ancre dans le chenal ; hérons sur les racines.",
        "Jardin des simples en carreaux sur les terrasses, citerne rouverte, convalescents au soleil sur les galeries ; azulejos remis à neuf.",
        "Chenaux taillés au carré, palétuviers tondus en haies, galeries chaulées de frais ; chaque navire déchargé, chaque lit fait."],
 "pm":"Peste","pp":"Guérison"}
```

```json
[
{"id":"ASS168-moins-1","zone":"ASS168","pole":"-","palier":1,"nom":"Le Panier à perche","cout":0,"cible":1,
 "effet":"La cible perd 1 d'attaque pour le combat ; s'il ne reste qu'un ennemi, il hésite ce tour. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",1],["si","seul",[["hesite","cible"]]],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Affaiblissement","Condition","Contrôle","Prix"],
 "ambiance":"Le panier au bout de la perche passait du navire au quai sans qu'une main touche une autre main.",
 "budget":"4,5 / 4 (+12 %)"},
{"id":"ASS168-moins-2","zone":"ASS168","pole":"-","palier":2,"nom":"Les Jours d'ancrage","cout":1,"cible":1,
 "effet":"Loi des jours d'ancrage : la cible hésite ce tour, perd 2 d'attaque pour le combat et subit 3 dégâts.",
 "ops":[["hesite","cible"],["affaiblit","cible",2],["deg","cible",3]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Contrôle","Affaiblissement","Dégâts"],
 "ambiance":"Le conseil comptait les jours d'ancrage à la craie sur la porte, et ne les effaçait jamais.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ASS168-moins-3","zone":"ASS168","pole":"-","palier":3,"nom":"Le Drapeau jaune","cout":1,"cible":1,
 "effet":"Tous les ennemis perdent 1 d'attaque ; 6 dégâts à la cible. S'il ne reste qu'un ennemi, il perd 2 d'attaque de plus. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",1],["deg","cible",6],["si","seul",[["affaiblit","cible",2]]],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Affaiblissement","Dégâts","Condition","Prix"],
 "ambiance":"Le drapeau jaune restait au mât tant que le conseil n'avait pas encaissé ; la toile pâlissait avant la dette.",
 "budget":"13,6 / 15 (−9 %)"},
{"id":"ASS168-moins-4","zone":"ASS168","pole":"-","palier":4,"nom":"La Loi du vinaigre","cout":2,"cible":1,
 "effet":"Loi du vinaigre : tous les ennemis perdent 2 d'attaque ; la cible hésite ce tour et subit 4 dégâts ; s'il ne reste qu'un ennemi, 16 dégâts de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","tous",2],["hesite","cible"],["deg","cible",4],["si","seul",[["deg","cible",16]]],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Contrôle","Dégâts","Condition","Prix"],
 "ambiance":"Tout ce qui venait du large passait par le vinaigre : lettres, pièces, rosaires, et une fois un perroquet.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"ASS168-moins-5","zone":"ASS168","pole":"-","palier":5,"nom":"Navires sans équipage","cout":2,"cible":1,
 "effet":"Tous les ennemis hésitent ce tour et perdent 1 d'attaque ; 8 dégâts à la cible. S'il ne reste qu'un ennemi, 16 dégâts de plus.",
 "ops":[["hesite","tous"],["affaiblit","tous",1],["deg","cible",8],["si","seul",[["deg","cible",16]]]],
 "tags":["Assemblée","Eau","Pôle −","Contrôle","Affaiblissement","Dégâts","Condition"],
 "ambiance":"Les équipages descendaient au lazaret, les navires restaient au chenal ; les palétuviers poussèrent dans les cales.",
 "budget":"31,6 / 32 (−1 %)"},
{"id":"ASS168-moins-6","zone":"ASS168","pole":"-","palier":6,"nom":"Le Lazaret clos","cout":1,"cible":1,
 "effet":"Loi du lazaret clos : la cible perd 3 d'attaque pour le combat, hésite ce tour et subit 4 dégâts ; s'il ne reste qu'un ennemi, 12 dégâts de plus. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["affaiblit","cible",3],["hesite","cible"],["deg","cible",4],["si","seul",[["deg","cible",12]]],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Affaiblissement","Contrôle","Dégâts","Condition","Prix"],
 "ambiance":"On mura la passerelle avec les carreaux bleus du patio, posés à l'envers, motif contre le mur.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ASS168-moins7","zone":"ASS168","pole":"-","palier":7,"nom":"La Quarantaine sans terme","cout":2,"cible":1,
 "effet":"Loi de la quarantaine sans terme : tous les ennemis hésitent et perdent 3 d'attaque ; la cible devient vulnérable 3 ; s'il reste un seul ennemi, 20 dégâts. Pose Givre. Si Sceau est posée (consommée) : piochez 2, 10 dégâts à tous. Prix : 3 PV.",
 "ops":[["hesite","tous"],["affaiblit","tous",3],["vulnerable","cible",3],["si","seul",[["deg","cible",20]]],["pose","Givre"],["reveil","Sceau",true,[["pioche",2],["deg","tous",10]]],["prixPV",3]],
 "tags":["Assemblée","Eau","Forme ultime −7","Loi","Contrôle","Affaiblissement","Marque","Condition","Dégâts","Combo","Pose Givre","Réveil Sceau","Pioche","Prix"],
 "ambiance":"Le conseil vota la quarantaine sans date de fin ; il siégea ensuite à huis clos, puis cessa de siéger.",
 "budget":"44,8 sans combo ; réveil +30 (67 %)"},
{"id":"ASS168-plus-1","zone":"ASS168","pole":"+","palier":1,"nom":"Fumée de genévrier","cout":0,"cible":0,
 "effet":"Piochez 1 carte ; si le héros est sous la moitié de ses PV, il se soigne de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",1],["si","blesse",[["soin","heros",4]]],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Pioche","Condition","Soin","Prix"],
 "ambiance":"Inés séchait les lettres au-dessus d'un brasier de genévrier ; son tablier en gardait l'odeur jusqu'à l'hiver.",
 "budget":"3,8 / 4 (−5 %)"},
{"id":"ASS168-plus-2","zone":"ASS168","pole":"+","palier":2,"nom":"La Loi des simples","cout":1,"cible":0,
 "effet":"Loi des simples : piochez 2 cartes ; le héros se soigne de 4.",
 "ops":[["pioche",2],["soin","heros",4]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Pioche","Soin"],
 "ambiance":"Le conseil fit planter la sauge et la rue en carreaux sur la terrasse, chaque carreau loué à un apothicaire.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS168-plus-3","zone":"ASS168","pole":"+","palier":3,"nom":"La Citerne rouverte","cout":1,"cible":0,
 "effet":"Le héros se soigne de 8 et pioche 1 carte ; s'il est sous la moitié de ses PV, il se soigne de 6 de plus.",
 "ops":[["soin","heros",8],["pioche",1],["si","blesse",[["soin","heros",6]]]],
 "tags":["Assemblée","Eau","Pôle +","Soin","Pioche","Condition"],
 "ambiance":"On rouvrit la citerne murée du lazaret ; l'eau de pluie y dormait sous une voûte de briques, intacte.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ASS168-plus-4","zone":"ASS168","pole":"+","palier":4,"nom":"La Loi des galeries","cout":2,"cible":0,
 "effet":"Loi des galeries : piochez 3 cartes ; le héros se soigne de 10 et gagne 6 de garde ; s'il est sous la moitié de ses PV, soin 8 de plus. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",3],["soin","heros",10],["garde","heros",6],["si","blesse",[["soin","heros",8]]],["ennemiSoin",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Pioche","Soin","Garde","Condition","Prix"],
 "ambiance":"La loi mettait les convalescents au soleil sur les galeries, de la troisième heure à la sixième, et pas plus.",
 "budget":"28,6 / 28 (+2 %)"},
{"id":"ASS168-plus-5","zone":"ASS168","pole":"+","palier":5,"nom":"Malades au soleil","cout":2,"cible":0,
 "effet":"Le héros se soigne de 14, gagne 8 de garde et pioche 2 cartes ; s'il est sous la moitié de ses PV, soin 10 de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","heros",14],["garde","heros",8],["pioche",2],["si","blesse",[["soin","heros",10]]],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle +","Soin","Garde","Pioche","Condition","Prix"],
 "ambiance":"Couchés en rang sur les galeries, les malades regardaient passer les hérons ; le conseil comptait les lits vides.",
 "budget":"30,4 / 32 (−5 %)"},
{"id":"ASS168-plus-6","zone":"ASS168","pole":"+","palier":6,"nom":"La Lettre séchée","cout":1,"cible":0,
 "effet":"Loi de la lettre séchée : piochez 3 cartes, le héros se soigne de 6 ; s'il est sous la moitié de ses PV, piochez 1 carte et soin 8 de plus. Prix : la carte s'exile.",
 "ops":[["pioche",3],["soin","heros",6],["si","blesse",[["pioche",1],["soin","heros",8]]],["exil"]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Pioche","Soin","Condition","Exil","Prix"],
 "ambiance":"La lettre glissée sous la pile reparut un matin sur la table du conseil, dépliée, sèche.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ASS168-plus7","zone":"ASS168","pole":"+","palier":7,"nom":"Les Portes ouvertes","cout":2,"cible":1,
 "effet":"Loi des portes ouvertes : piochez 3, soin 20 ; les Convalescents se lèvent (bloqueur de 24 PV) ; sous la moitié des PV, soin +10. Pose Sceau. Si Sang est posée (consommée) : 16 dégâts qui ignorent la garde, soin 12. Prix : chaque ennemi soigne 2.",
 "ops":[["pioche",3],["soin","heros",20],["invoque","Convalescents",24,0],["si","blesse",[["soin","heros",10]]],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",16],["ignoreGarde"],["soin","heros",12]]],["ennemiSoin",2]],
 "tags":["Assemblée","Eau","Forme ultime +7","Loi","Pioche","Soin","Invocation","Condition","Combo","Pose Sceau","Réveil Sang","Dégâts","Perce-garde","Prix"],
 "ambiance":"On ouvrit les portes du lazaret un matin de marée haute ; les convalescents sortirent les premiers, en chemise.",
 "budget":"44,6 sans combo ; réveil +31 (70 %)"}
]
```

---

## 6. Les Parcs perliers de Lingshao (DON037) — Donjon · Récif · Eau · Chinoise impériale

Recette du récit : l'inventaire de ruine. Recette du −7 : la foule (requins en cercle, cordes coupées par centaines) ; du +7 : la démesure (le récif monte plus haut que les mâts).

**Sang (−)** : la pierre de plongée → la corde coupée → les ailerons dans le chenal → l'huître ouverte au couteau → le boisseau du tribut → les requins en cercle → l'Appât. Fil mécanique : gros coups sur une cible payés en PV, vol de vie, bonus « héros sous la moitié de ses PV » ; on plonge pour le tribut.
**Sève (+)** : le corail sur la pierre → la bouture → la passe étroite → les parcs envahis → le corail de feu → la lagune qui se ferme → le Récif qui monte. Fil mécanique : pièges et riposte : le corail coupe qui frappe ; dégâts à tous, garde ; prix : le corail protège aussi l'ennemi (garde ennemie).

```json
{"fiche":"DON037","nom":"Les Parcs perliers de Lingshao",
 "recit":"Relevé sur le récif de Lingshao, à marée basse. Une stèle de l'eunuque des perles, plantée dans le corail : elle fixe le tribut à un boisseau par saison et promet la mort à qui vendrait une perle de plus. Des pierres de plongée percées, chacune liée à une corde coupée net. Un panier d'huîtres ouvertes au couteau, vides, que le corail a soudé au récif. Une tablette laquée où les noms des plongeurs s'alignent en colonnes ; la dernière colonne est restée blanche, et le pinceau sec est encore posé dessus.",
 "pal":["Lagune rougie, coraux brisés par les pierres de plongée, cordes coupées qui flottent par centaines ; des requins tournent en cercle autour de la stèle.",
        "Eau trouble autour des parcs perliers, paniers d'huîtres éventrés, bouées laquées qui s'écaillent ; ailerons à l'entrée du chenal.",
        "Récif turquoise derrière une digue de corail taillé, barques des plongeurs à proue de dragon, stèle de l'eunuque dans les hauts-fonds ; tortues dans les passes.",
        "Coraux vermillon qui reprennent sur les pierres de plongée et les paniers, parcs perliers à l'abandon ; la stèle n'affleure plus qu'à marée basse.",
        "Le récif a monté hors de l'eau en falaises de corail vermillon et malachite, plus haut que les mâts ; la stèle se dresse au sommet, sèche et lisible."],
 "pm":"Sang","pp":"Sève"}
```

```json
[
{"id":"DON037-moins-1","zone":"DON037","pole":"-","palier":1,"nom":"Pierre de plongée","cout":1,"cible":1,
 "effet":"10 dégâts ; si le héros est sous la moitié de ses PV, 4 dégâts de plus. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",10],["si","blesse",[["deg","cible",4]]],["prixPV",2]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"La pierre percée entraînait le plongeur au fond en quelques battements de cœur ; remonter, c'était son affaire.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON037-moins-2","zone":"DON037","pole":"-","palier":2,"nom":"La Corde coupée","cout":0,"cible":1,
 "effet":"5 dégâts ; le héros se soigne de la moitié des dégâts infligés. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",5],["volVie"],["prixPV",3]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Vol de vie","Prix"],
 "ambiance":"Quand la corde revenait coupée, le contremaître inscrivait le nom en bas de la colonne, sans le barrer.",
 "budget":"4,5 / 5 (−10 %)"},
{"id":"DON037-moins-3","zone":"DON037","pole":"-","palier":3,"nom":"Ailerons dans le chenal","cout":1,"cible":1,
 "effet":"12 dégâts ; si le héros est sous la moitié de ses PV, 8 dégâts de plus.",
 "ops":[["deg","cible",12],["si","blesse",[["deg","cible",8]]]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Condition"],
 "ambiance":"Les requins attendaient à l'entrée du chenal la saison du tribut ; ils la connaissaient mieux que l'eunuque.",
 "budget":"16 / 15 (+7 %)"},
{"id":"DON037-moins-4","zone":"DON037","pole":"-","palier":4,"nom":"L'Huître ouverte au couteau","cout":2,"cible":1,
 "effet":"22 dégâts qui ignorent la garde ; le héros se soigne de la moitié des dégâts infligés. Prix : le héros perd 6 PV.",
 "ops":[["deg","cible",22],["ignoreGarde"],["volVie"],["prixPV",6]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Perce-garde","Vol de vie","Prix"],
 "ambiance":"On ouvrait chaque huître au couteau sur le pont ; mille coquilles pour une perle digne du boisseau.",
 "budget":"30 / 28 (+7 %)"},
{"id":"DON037-moins-5","zone":"DON037","pole":"-","palier":5,"nom":"Le Boisseau du tribut","cout":2,"cible":1,
 "effet":"5 coups de 6 dégâts au hasard ; si le héros est sous la moitié de ses PV, la cible devient vulnérable 2.",
 "ops":[["deg","hasard",6,5],["si","blesse",[["vulnerable","cible",2]]]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Condition","Marque"],
 "ambiance":"Le boisseau de l'eunuque avait un double fond ; les plongeurs le savaient, et plongeaient quand même.",
 "budget":"33 / 32 (+3 %)"},
{"id":"DON037-moins-6","zone":"DON037","pole":"-","palier":6,"nom":"Requins en cercle","cout":1,"cible":1,
 "effet":"16 dégâts ; le héros se soigne de la moitié des dégâts infligés ; s'il est sous la moitié de ses PV, 8 dégâts de plus. Prix : le héros perd 5 PV.",
 "ops":[["deg","cible",16],["volVie"],["si","blesse",[["deg","cible",8]]],["prixPV",5]],
 "tags":["Donjon","Eau","Pôle −","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Ils tournaient autour de la stèle à marée haute, lentement, comme des percepteurs autour d'un village.",
 "budget":"23 / 22,5 (+2 %)"},
{"id":"DON037-moins7","zone":"DON037","pole":"-","palier":7,"nom":"L'Appât","cout":2,"cible":1,
 "effet":"Le plongeur se fait appât. Tous les ennemis deviennent vulnérables 3 ; 24 dégâts à la cible, le héros se soigne de la moitié. Pose Sang. Si Abîme est posée (consommée) : la garde de tous tombe à 0, 14 dégâts à tous. Prix : 8 PV.",
 "ops":[["vulnerable","tous",3],["deg","cible",24],["volVie"],["pose","Sang"],["reveil","Abîme",true,[["briseGarde","tous"],["deg","tous",14]]],["prixPV",8]],
 "tags":["Donjon","Eau","Forme ultime −7","Marque","Dégâts","Vol de vie","Combo","Pose Sang","Réveil Abîme","Perce-garde","Prix"],
 "ambiance":"Le dernier plongeur de Lingshao descendit sans pierre, une entaille au bras ; les requins quittèrent la stèle.",
 "budget":"47,8 sans combo ; réveil +37,4 (78 %)"},
{"id":"DON037-plus-1","zone":"DON037","pole":"+","palier":1,"nom":"Le Corail sur la pierre","cout":1,"cible":0,
 "effet":"Le héros gagne 6 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 3 dégâts.",
 "ops":[["garde","heros",6],["riposte",3]],
 "tags":["Donjon","Eau","Pôle +","Garde","Riposte"],
 "ambiance":"Le corail prit d'abord sur les pierres de plongée abandonnées, une saison après la dernière corde coupée.",
 "budget":"10,8 / 10 (+8 %)"},
{"id":"DON037-plus-2","zone":"DON037","pole":"+","palier":2,"nom":"Bouture de corail","cout":0,"cible":0,
 "effet":"Riposte 3 jusqu'au prochain tour ; le héros gagne 2 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",3],["garde","heros",2],["ennemiGarde",1]],
 "tags":["Donjon","Eau","Pôle +","Riposte","Garde","Prix"],
 "ambiance":"Une branche cassée par la rame repoussait dans la vase ; aucun registre de l'eunuque ne comptait le corail.",
 "budget":"5,6 / 5 (+12 %)"},
{"id":"DON037-plus-3","zone":"DON037","pole":"+","palier":3,"nom":"La Passe étroite","cout":1,"cible":0,
 "effet":"Piège. 5 dégâts à tous ; riposte 3 jusqu'au prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","tous",5],["riposte",3],["ennemiGarde",1]],
 "tags":["Donjon","Eau","Pôle +","Piège","Dégâts","Riposte","Prix"],
 "ambiance":"La passe se resserra d'une rame chaque année ; les barques du tribut y laissaient leur peinture et leur quille.",
 "budget":"15 / 15 (+0 %)"},
{"id":"DON037-plus-4","zone":"DON037","pole":"+","palier":4,"nom":"Parcs envahis","cout":2,"cible":0,
 "effet":"Le héros gagne 14 de garde ; riposte 6 jusqu'au prochain tour ; 3 dégâts à tous.",
 "ops":[["garde","heros",14],["riposte",6],["deg","tous",3]],
 "tags":["Donjon","Eau","Pôle +","Garde","Riposte","Dégâts"],
 "ambiance":"Les parcs perliers se couvrirent de corail ; les huîtres y vécurent enfin assez vieilles pour ne plus valoir rien.",
 "budget":"29,8 / 28 (+6 %)"},
{"id":"DON037-plus-5","zone":"DON037","pole":"+","palier":5,"nom":"Le Corail de feu","cout":2,"cible":0,
 "effet":"Piège. 9 dégâts à tous ; tous les ennemis brûlent 2 sur 2 tours ; riposte 5 jusqu'au prochain tour. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["deg","tous",9],["brulure","tous",2,2],["riposte",5],["ennemiGarde",2]],
 "tags":["Donjon","Eau","Pôle +","Piège","Dégâts","Dégâts dans le temps","Riposte","Prix"],
 "ambiance":"Le corail de feu brûlait la peau des plongeurs qui s'y frottaient ; on le laissa pousser devant la stèle.",
 "budget":"34,6 / 32 (+8 %)"},
{"id":"DON037-plus-6","zone":"DON037","pole":"+","palier":6,"nom":"La Lagune se ferme","cout":1,"cible":0,
 "effet":"Si la Garde est déjà levée, 8 dégâts à tous. Riposte 6 jusqu'au prochain tour ; le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","tous",8]]],["riposte",6],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Donjon","Eau","Pôle +","Condition","Dégâts","Riposte","Garde","Prix"],
 "ambiance":"Une année, le récif ferma la lagune au large ; la jonque du tribut attendit un mois devant, puis repartit.",
 "budget":"23,4 / 22,5 (+4 %)"},
{"id":"DON037-plus7","zone":"DON037","pole":"+","palier":7,"nom":"Le Récif qui monte","cout":2,"cible":0,
 "effet":"Le récif sort de l'eau. Une Falaise de corail se dresse (bloqueur de 30 PV) ; riposte 10 ; 8 dégâts à tous. Pose Racine. Si Givre est posée (consommée) : tous les ennemis perdent 2 d'attaque, riposte +10. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["invoque","Falaise de corail",30,0],["riposte",10],["deg","tous",8],["pose","Racine"],["reveil","Givre",true,[["affaiblit","tous",2],["riposte",10]]],["ennemiGarde",2]],
 "tags":["Donjon","Eau","Forme ultime +7","Invocation","Riposte","Dégâts","Combo","Pose Racine","Réveil Givre","Affaiblissement","Prix"],
 "ambiance":"Le corail monta plus haut que les mâts et laissa la stèle au sommet, sèche, lisible de partout.",
 "budget":"48,6 sans combo ; réveil +33,2 (68 %)"}
]
```

---

## 7. Les Fonderies de Kraleng-Dek (DON020) — Donjon · Mangrove · Eau · Khmère

Recette du récit : les deux inscriptions. Recette du −7 : le vide (mangrove morte, plus un four allumé) ; du +7 : la démesure (sanctuaire couvert d'or, palétuviers abattus jusqu'à l'horizon).

**Rouille (−)** : l'écaille de fer → la chaîne rongée → le bois manque → les fours éteints → la feuille de fer → les coulures brunes → la Rouille du sanctuaire. Fil mécanique : brûlure (la rouille qui ronge) + perce-garde ; bonus « si la cible brûle » ; prix en PV.
**Or (+)** : la feuille gardée → le poids de feuille → les soufflets de bambou → les lingots au pied des tours → le cinabre reparaît → la saison sèche du tribut → le Sanctuaire pesé. Fil mécanique : gros coups ciblés, marque (Vulnérable), mana ; bonus « si la cible a de la garde » ; prix en défausse ; le seul boost du lot.

```json
{"fiche":"DON020","nom":"Les Fonderies de Kraleng-Dek",
 "recit":"Sur la stèle de fondation, face au levant : « Le souverain donne au sanctuaire de Kraleng-Dek les forgerons de la mangrove, leurs femmes, leurs fours et le bois des palétuviers, pour qu'à chaque saison sèche la statue reçoive son poids de feuille d'or. » Sur la face du couchant, d'une main plus fruste : « Le bois manque. La feuille sera de fer. » Les forgerons tinrent parole. Le sanctuaire s'habilla d'une écaille brune qui part par plaques au vent de mer ; dessous, par endroits, brille une feuille d'or qu'un forgeron avait gardée pour lui.",
 "pal":["Mangrove morte en échasses de bois sec, eau couleur de rouille, sanctuaire nu sous ses écailles de fer tombées ; plus un forgeron, plus un four allumé.",
        "Fours de latérite éteints dans la vase, palétuviers coupés à hauteur d'homme, coulures brunes sur les grès ; chaînes de forge rongées pendues aux racines.",
        "Mangrove épaisse autour d'un sanctuaire de grès sur une butte, fours de forgerons qui fument sous les palétuviers ; pirogues chargées de charbon.",
        "Fours rallumés en rangées, soufflets de bambou qui ronflent, lingots empilés au pied des tours ; bas-reliefs lavés où le cinabre reparaît.",
        "Sanctuaire couvert de feuille d'or jusqu'aux marches, eau qui en renvoie l'éclat à aveugler ; palétuviers abattus jusqu'à l'horizon pour les fours."],
 "pm":"Rouille","pp":"Or"}
```

```json
[
{"id":"DON020-moins-1","zone":"DON020","pole":"-","palier":1,"nom":"Écaille de fer","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 3 dégâts, puis elle brûle : 2 dégâts au début de ses 2 prochains tours.",
 "ops":[["briseGarde","cible"],["deg","cible",3],["brulure","cible",2,2]],
 "tags":["Donjon","Eau","Pôle −","Perce-garde","Dégâts","Dégâts dans le temps"],
 "ambiance":"La première écaille tomba du linteau à la mousson ; on la remit en place avec un clou.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON020-moins-2","zone":"DON020","pole":"-","palier":2,"nom":"Chaîne rongée","cout":0,"cible":1,
 "effet":"La cible brûle : 3 dégâts au début de ses 2 prochains tours. Prix : le héros perd 1 PV.",
 "ops":[["brulure","cible",3,2],["prixPV",1]],
 "tags":["Donjon","Eau","Pôle −","Dégâts dans le temps","Prix"],
 "ambiance":"La chaîne du soufflet rouillait en une saison ; le forgeron la remplaça par une corde, en silence.",
 "budget":"5 / 5 (+0 %)"},
{"id":"DON020-moins-3","zone":"DON020","pole":"-","palier":3,"nom":"Le Bois manque","cout":1,"cible":1,
 "effet":"Tous les ennemis brûlent 2 sur 3 tours ; la garde de la cible tombe à 0. Prix : le héros perd 2 PV.",
 "ops":[["brulure","tous",2,3],["briseGarde","cible"],["prixPV",2]],
 "tags":["Donjon","Eau","Pôle −","Dégâts dans le temps","Perce-garde","Prix"],
 "ambiance":"On coupa les palétuviers jusqu'à hauteur d'homme ; les souches restèrent dans la vase, et la mer avança.",
 "budget":"14,2 / 15 (−5 %)"},
{"id":"DON020-moins-4","zone":"DON020","pole":"-","palier":4,"nom":"Fours éteints dans la vase","cout":2,"cible":1,
 "effet":"La garde de tous les ennemis tombe à 0, puis 8 dégâts à tous ; si la cible brûle, 6 dégâts de plus.",
 "ops":[["briseGarde","tous"],["deg","tous",8],["si","brule",[["deg","cible",6]]]],
 "tags":["Donjon","Eau","Pôle −","Perce-garde","Dégâts","Condition"],
 "ambiance":"Les fours de latérite s'enfoncèrent dans la vase un à un ; le dernier fumait encore quand l'eau entra.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"DON020-moins-5","zone":"DON020","pole":"-","palier":5,"nom":"La Feuille de fer","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 8 dégâts. La garde de la cible tombe à 0 ; 10 dégâts, puis elle brûle : 6 dégâts au début de ses 3 prochains tours. Prix : le héros perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",8]]],["briseGarde","cible"],["deg","cible",10],["brulure","cible",6,3],["prixPV",3]],
 "tags":["Donjon","Eau","Pôle −","Condition","Dégâts","Perce-garde","Dégâts dans le temps","Prix"],
 "ambiance":"Les forgerons battirent le fer aussi mince que la feuille d'or promise ; il tint une saison sèche.",
 "budget":"32 / 32 (+0 %)"},
{"id":"DON020-moins-6","zone":"DON020","pole":"-","palier":6,"nom":"Coulures brunes","cout":1,"cible":1,
 "effet":"Tous les ennemis brûlent 3 sur 3 tours ; si la cible brûlait déjà, 6 dégâts. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",6]]],["brulure","tous",3,3],["prixPV",2]],
 "tags":["Donjon","Eau","Pôle −","Condition","Dégâts","Dégâts dans le temps","Prix"],
 "ambiance":"Les pluies firent couler la rouille sur les bas-reliefs ; les danseuses de grès portent depuis des robes brunes.",
 "budget":"20,8 / 22,5 (−8 %)"},
{"id":"DON020-moins7","zone":"DON020","pole":"-","palier":7,"nom":"La Rouille du sanctuaire","cout":2,"cible":1,
 "effet":"Le sanctuaire s'écaille. Tous les ennemis perdent leur garde, deviennent vulnérables 1 et brûlent 4 sur 3 tours ; 8 dégâts à la cible. Pose Braise. Si Givre est posée (consommée) : tous perdent 2 d'attaque et subissent 8 dégâts. Prix : 3 PV.",
 "ops":[["briseGarde","tous"],["vulnerable","tous",1],["brulure","tous",4,3],["deg","cible",8],["pose","Braise"],["reveil","Givre",true,[["affaiblit","tous",2],["deg","tous",8]]],["prixPV",3]],
 "tags":["Donjon","Eau","Forme ultime −7","Perce-garde","Marque","Dégâts dans le temps","Dégâts","Combo","Pose Braise","Réveil Givre","Affaiblissement","Prix"],
 "ambiance":"La dernière écaille tomba un soir sans vent ; le sanctuaire nu se tint seul dans la vase rouge.",
 "budget":"44,6 sans combo ; réveil +30,8 (69 %)"},
{"id":"DON020-plus-1","zone":"DON020","pole":"+","palier":1,"nom":"La Feuille gardée","cout":1,"cible":1,
 "effet":"8 dégâts ; si la cible a de la garde, 6 dégâts de plus.",
 "ops":[["deg","cible",8],["si","cibleGarde",[["deg","cible",6]]]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Condition"],
 "ambiance":"Le forgeron glissa sa feuille d'or sous une écaille de fer, au revers du linteau, où nul ne regarde.",
 "budget":"11 / 10 (+10 %)"},
{"id":"DON020-plus-2","zone":"DON020","pole":"+","palier":2,"nom":"Le Poids de feuille","cout":0,"cible":1,
 "effet":"Gagnez 1 mana Eau ; 5 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Eau",1],["deg","cible",5],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle +","Mana","Dégâts","Prix"],
 "ambiance":"On pesait la feuille à la balance du sanctuaire contre la statue elle-même, couchée sur le plateau.",
 "budget":"5 / 5 (+0 %)"},
{"id":"DON020-plus-3","zone":"DON020","pole":"+","palier":3,"nom":"Soufflets de bambou","cout":1,"cible":1,
 "effet":"12 dégâts ; la cible devient vulnérable 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Marque","Prix"],
 "ambiance":"Deux enfants par four tiraient les soufflets de bambou, du lever au coucher, en chantant les chiffres du tribut.",
 "budget":"15 / 15 (+0 %)"},
{"id":"DON020-plus-4","zone":"DON020","pole":"+","palier":4,"nom":"Lingots au pied des tours","cout":2,"cible":1,
 "effet":"20 dégâts ; si la cible a de la garde, 10 dégâts de plus. Gagnez 2 mana Eau. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",20],["si","cibleGarde",[["deg","cible",10]]],["mana","Eau",2],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Condition","Mana","Prix"],
 "ambiance":"Les lingots s'empilaient au pied des tours en attendant le batteur ; les gardes dormaient dessus, par ordre.",
 "budget":"28 / 28 (+0 %)"},
{"id":"DON020-plus-5","zone":"DON020","pole":"+","palier":5,"nom":"Le Cinabre reparaît","cout":2,"cible":1,
 "effet":"La cible devient vulnérable 3 ; 18 dégâts. Piochez 1 carte.",
 "ops":[["vulnerable","cible",3],["deg","cible",18],["pioche",1]],
 "tags":["Donjon","Eau","Pôle +","Marque","Dégâts","Pioche"],
 "ambiance":"Sous la rouille lavée, le cinabre des bas-reliefs reparut, et avec lui les visages qu'on avait voulu oublier.",
 "budget":"31 / 32 (−3 %)"},
{"id":"DON020-plus-6","zone":"DON020","pole":"+","palier":6,"nom":"La Saison sèche du tribut","cout":1,"cible":1,
 "effet":"16 dégâts qui ignorent la garde ; la cible devient vulnérable 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",16],["ignoreGarde"],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Donjon","Eau","Pôle +","Dégâts","Perce-garde","Marque","Prix"],
 "ambiance":"À la saison sèche, les bateliers du souverain venaient peser l'or ; on rallumait tous les fours la veille.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"DON020-plus7","zone":"DON020","pole":"+","palier":7,"nom":"Le Sanctuaire pesé","cout":2,"cible":1,
 "effet":"Le tribut est pesé. +1 de capacité ce tour, +2 mana Eau ; 30 dégâts à la cible, qui ignorent la garde ; elle devient vulnérable 2. Pose Sang. Si Sceau est posée (consommée) : piochez 3 cartes, 18 dégâts. Prix : défaussez 2 cartes.",
 "ops":[["boost"],["mana","Eau",2],["deg","cible",30],["ignoreGarde"],["vulnerable","cible",2],["pose","Sang"],["reveil","Sceau",true,[["pioche",3],["deg","cible",18]]],["prixDefausse",2]],
 "tags":["Donjon","Eau","Forme ultime +7","Boost","Mana","Dégâts","Perce-garde","Marque","Combo","Pose Sang","Réveil Sceau","Pioche","Prix"],
 "ambiance":"Le sanctuaire fut couvert d'or jusqu'aux marches ; pour les fours, il fallut la mangrove entière, puis la côte.",
 "budget":"45 sans combo ; réveil +30 (67 %)"}
]
```

---

## 8. Le Pukara de Chuqiraqay (CIT002) — Citadelle · Haute montagne · Pierre · Inca

Recette du récit : le revers. Recette du −7 : la foule (tentes de mercenaires, portes ouvertes aux caravanes) ; du +7 : le vide (forteresse close, neige intacte).

**Corruption (−)** : le ballot d'étoffe → le nœud refait → les frondeurs des caravanes → le péage dans la porte → le capitaine en manteau de prix → les joints forcés → la Garnison vendue. Fil mécanique : commandement acheté : soldats invoqués (bêtes qui frappent), garde, ennemis soudoyés qui hésitent ; prix : l'ennemi profite aussi du marché (garde ou soin ennemis).
**Pureté (+)** : l'eau de neige → les ballots brûlés → la laine écrue → le lama blanc du tribut → le rempart lavé → la porte close → la Neige intacte. Fil mécanique : garde massive + perce-garde (on purge l'ennemi de sa protection) ; prix : exil (ce qui est pur ne sert qu'une fois) et défausse.

```json
{"fiche":"CIT002","nom":"Le Pukara de Chuqiraqay",
 "recit":"Personne n'a jamais pris Chuqiraqay ; on l'a achetée. Les cordelettes à nœuds du gouverneur disent autre chose : une forteresse jointe sans mortier sur le col, des pierres où une aiguille n'entre pas, une garnison nourrie du maïs du tribut et vêtue de laine écrue, une neige qui n'a jamais vu de sang. Le compteur Atuq renouait les cordes à chaque solstice. Dans le faisceau des étoffes, un fil teint n'a pas de nœud de départ : il commence au milieu, noué après coup, et porte autant de nœuds que la garnison comptait d'hommes.",
 "pal":["Terrasses du col couvertes de tentes de mercenaires, étoffes de prix pendues aux créneaux, portes ouvertes aux caravanes ; cordes à nœuds emmêlées.",
        "Joints du rempart forcés au levier pour y cacher des ballots, sentinelles en manteaux de prix, péage installé dans la porte trapézoïdale.",
        "Forteresse de pierres jointes sans mortier sur un col enneigé, portes trapézoïdales, terrasses de pommes de terre ; lamas chargés, garnison en laine écrue.",
        "Rempart lavé à l'eau de neige, ballots brûlés au pied des tours, sentinelles en laine écrue ; seuls les lamas du tribut passent encore la porte.",
        "Forteresse vide et close, joints si fins que le givre n'y prend pas, neige intacte sur toutes les terrasses ; personne n'entre plus, personne ne sort."],
 "pm":"Corruption","pp":"Pureté"}
```

```json
[
{"id":"CIT002-moins-1","zone":"CIT002","pole":"-","palier":1,"nom":"Le Ballot d'étoffe","cout":1,"cible":0,
 "effet":"Une Sentinelle achetée rejoint le combat : 10 PV, frappe 3. Le héros gagne 3 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Sentinelle achetée",10,3],["garde","heros",3],["ennemiGarde",1]],
 "tags":["Citadelle","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Un ballot d'étoffe fine glissé sous le manteau, et la sentinelle regardait les lamas passer sans les compter.",
 "budget":"9,9 / 10 (−1 %)"},
{"id":"CIT002-moins-2","zone":"CIT002","pole":"-","palier":2,"nom":"Le Nœud refait","cout":0,"cible":1,
 "effet":"Si la Garde est déjà levée, la cible hésite ce tour. Puis le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["hesite","cible"]]],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle −","Condition","Contrôle","Garde","Prix"],
 "ambiance":"Atuq défaisait un nœud, en refaisait un autre un peu plus bas ; la corde gardait la même longueur.",
 "budget":"5,1 / 5 (+2 %)"},
{"id":"CIT002-moins-3","zone":"CIT002","pole":"-","palier":3,"nom":"Frondeurs des caravanes","cout":1,"cible":0,
 "effet":"Les Frondeurs des caravanes rejoignent le combat : 12 PV, frappe 6. Le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Frondeurs des caravanes",12,6],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Citadelle","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Ils escortaient les caravanes jusqu'au col, puis tenaient le rempart une nuit, pour qui payait la nuit.",
 "budget":"16,2 / 15 (+8 %)"},
{"id":"CIT002-moins-4","zone":"CIT002","pole":"-","palier":4,"nom":"Le Péage dans la porte","cout":2,"cible":0,
 "effet":"Le héros gagne 16 de garde ; gagnez 2 mana Pierre ; tous les ennemis hésitent ce tour.",
 "ops":[["garde","heros",16],["mana","Pierre",2],["hesite","tous"]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Mana","Contrôle"],
 "ambiance":"On installa le péage dans l'embrasure même de la porte trapézoïdale ; l'ennemi aussi payait, et passait.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"CIT002-moins-5","zone":"CIT002","pole":"-","palier":5,"nom":"Le Capitaine en manteau de prix","cout":2,"cible":0,
 "effet":"Le Capitaine en manteau de prix rejoint le combat : 24 PV, frappe 8. Le héros gagne 12 de garde. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Capitaine en manteau de prix",24,8],["garde","heros",12],["ennemiSoin",2]],
 "tags":["Citadelle","Pierre","Pôle −","Invocation","Garde","Prix"],
 "ambiance":"Son manteau valait la récolte du col ; il le portait par-dessus la cuirasse, visible de loin.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"CIT002-moins-6","zone":"CIT002","pole":"-","palier":6,"nom":"Les Joints forcés","cout":1,"cible":0,
 "effet":"Le héros gagne 14 de garde ; riposte 4 jusqu'au prochain tour. Si une bête est en jeu, tous les ennemis hésitent ce tour.",
 "ops":[["garde","heros",14],["riposte",4],["si","bete",[["hesite","tous"]]]],
 "tags":["Citadelle","Pierre","Pôle −","Garde","Riposte","Condition","Contrôle"],
 "ambiance":"Les pierres jointes sans mortier furent écartées au levier pour cacher les ballots ; le rempart tint quand même.",
 "budget":"23,7 / 22,5 (+5 %)"},
{"id":"CIT002-moins7","zone":"CIT002","pole":"-","palier":7,"nom":"La Garnison vendue","cout":2,"cible":0,
 "effet":"Le col est vendu. La Garnison achetée rejoint le combat (30 PV, frappe 8) ; tous les ennemis hésitent ; garde +16. Pose Sang. Si Racine est posée (consommée) : Renforts achetés (20 PV, frappe 8), garde +12. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Garnison achetée",30,8],["hesite","tous"],["garde","heros",16],["pose","Sang"],["reveil","Racine",true,[["invoque","Renforts achetés",20,8],["garde","heros",12]]],["ennemiSoin",2]],
 "tags":["Citadelle","Pierre","Forme ultime −7","Invocation","Contrôle","Garde","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Le jour où l'ennemi monta au col, il trouva les portes ouvertes et sa propre solde déjà payée.",
 "budget":"44,4 sans combo ; réveil +31,6 (71 %)"},
{"id":"CIT002-plus-1","zone":"CIT002","pole":"+","palier":1,"nom":"Eau de neige","cout":0,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; le héros gagne 5 de garde. Prix : la carte s'exile.",
 "ops":[["briseGarde","cible"],["garde","heros",5],["exil"]],
 "tags":["Citadelle","Pierre","Pôle +","Perce-garde","Garde","Exil","Prix"],
 "ambiance":"Chaque matin, on lavait la porte à l'eau de neige fondue, pour qu'aucune main n'y reste.",
 "budget":"4 / 4 (+0 %)"},
{"id":"CIT002-plus-2","zone":"CIT002","pole":"+","palier":2,"nom":"Ballots brûlés","cout":1,"cible":0,
 "effet":"La garde de tous les ennemis tombe à 0 ; le héros gagne 8 de garde.",
 "ops":[["briseGarde","tous"],["garde","heros",8]],
 "tags":["Citadelle","Pierre","Pôle +","Perce-garde","Garde"],
 "ambiance":"Les ballots d'étoffe fine brûlèrent au pied des tours ; la fumée bleue se vit depuis les vallées voisines.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"CIT002-plus-3","zone":"CIT002","pole":"+","palier":3,"nom":"Laine écrue","cout":1,"cible":0,
 "effet":"Le héros gagne 14 de garde et se soigne de 6. Prix : la carte s'exile.",
 "ops":[["garde","heros",14],["soin","heros",6],["exil"]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Soin","Exil","Prix"],
 "ambiance":"La garnison ne porta plus que la laine écrue, qu'on ne pouvait ni vendre ni cacher.",
 "budget":"14,2 / 15 (−5 %)"},
{"id":"CIT002-plus-4","zone":"CIT002","pole":"+","palier":4,"nom":"Le Lama blanc du tribut","cout":2,"cible":0,
 "effet":"Le Lama blanc du tribut se dresse : bloqueur de 20 PV, sans attaque. Le héros gagne 14 de garde ; la garde de tous les ennemis tombe à 0.",
 "ops":[["invoque","Lama blanc du tribut",20,0],["garde","heros",14],["briseGarde","tous"]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde","Perce-garde"],
 "ambiance":"Seuls les lamas blancs du tribut passaient la porte, sans charge, et on vérifiait encore leur toison.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"CIT002-plus-5","zone":"CIT002","pole":"+","palier":5,"nom":"Le Rempart lavé","cout":2,"cible":0,
 "effet":"Si la Garde est déjà levée, la garde de tous les ennemis tombe à 0 et ils subissent 8 dégâts. Puis le héros gagne 26 de garde. Prix : la carte s'exile.",
 "ops":[["si","garde",[["briseGarde","tous"],["deg","tous",8]]],["garde","heros",26],["exil"]],
 "tags":["Citadelle","Pierre","Pôle +","Condition","Perce-garde","Dégâts","Garde","Exil","Prix"],
 "ambiance":"On frotta le rempart à l'eau de neige jusqu'à effacer les marques de levier, tout un été.",
 "budget":"29,9 / 32 (−7 %)"},
{"id":"CIT002-plus-6","zone":"CIT002","pole":"+","palier":6,"nom":"La Porte close","cout":1,"cible":0,
 "effet":"Le héros gagne 20 de garde ; riposte 5 jusqu'au prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",20],["riposte",5],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Riposte","Prix"],
 "ambiance":"On ferma la porte trapézoïdale par un bloc taillé à sa mesure exacte ; il n'y eut plus de péage.",
 "budget":"23 / 22,5 (+2 %)"},
{"id":"CIT002-plus7","zone":"CIT002","pole":"+","palier":7,"nom":"La Neige intacte","cout":2,"cible":0,
 "effet":"Personne n'entre plus. Garde +30 ; la garde de tous les ennemis tombe à 0 et ils hésitent ; riposte 6 jusqu'au prochain tour. Pose Givre. Si Braise est posée (consommée) : tous les ennemis brûlent 5 sur 3 tours. Prix : la carte s'exile.",
 "ops":[["garde","heros",30],["briseGarde","tous"],["hesite","tous"],["riposte",6],["pose","Givre"],["reveil","Braise",true,[["brulure","tous",5,3]]],["exil"]],
 "tags":["Citadelle","Pierre","Forme ultime +7","Garde","Perce-garde","Contrôle","Riposte","Combo","Pose Givre","Réveil Braise","Dégâts dans le temps","Exil","Prix"],
 "ambiance":"La forteresse resta close sur sa neige ; Atuq, dehors, renouait les cordes d'une garnison qu'il ne voyait plus.",
 "budget":"48,6 sans combo ; réveil +33 (68 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

Gestes de ce lot (leçon 5, à reporter dans la liste commune) : RES123 ramasser le duvet d'eider dans les nids ; RES173 marquer des troncs au fer pour les faire glisser sur la glace ; RES290 recueillir l'encre des coprins dans des bassines ; RES107 tirer à la corde de grands éventails ; RES248 plonger des étoffes dans une source brûlante pour fixer la teinture ; RES238 fouler le poisson au pied dans des jarres ; RES090 creuser et pailler des fosses à taro ; RES226 vanner le sorgho au vent ; RES255 écorcer les palétuviers pour tanner les cuirs ; RES074 broyer le cinabre au pilon ; RES256 fendre le bambou pour des armatures de kayak ; RES280 suspendre des jambons au vent.

### Les Brisants de Dúnsker (RES123) — Récif · Eau · nordique

```json
{"fiche":"RES123","nom":"Les Brisants de Dúnsker",
 "recit":"Sur les brisants de Dúnsker, les femmes ramassent le duvet des nids d'eider à marée basse, une poignée par nid, quand la cane est partie pêcher. Il sèche sur des claies de bois flotté. La cane revient, regarde, et refait son nid avec ce qui reste.",
 "pal":["Écueils noirs battus d'écume, nids d'eider déserts, sacs de duvet moisis sur un séchoir effondré ; quelques canes dans le ressac.",
        "Brisants couverts de nids, canes qui couvent par milliers, femmes courbées sur les rochers avec leurs sacs ; le duvet vole jusqu'au rivage."]}
```

### La Bandite de Val Gelèra (RES173) — Forêt boréale · Glace · vénitienne

```json
{"fiche":"RES173","nom":"La Bandite de Val Gelèra",
 "recit":"La République des lagunes fit de Val Gelèra une forêt bannie : chaque mélèze y portait au fer le sceau du lion, promis aux pilotis d'un palais. Le garde Zuane marquait les troncs l'hiver, quand la glace les portait. Les villageois se chauffaient au bois mort, contre amende.",
 "pal":["Mélèzes marqués au fer qui pourrissent debout, rivière gelée encombrée de troncs oubliés ; la cabane du garde n'a plus de toit.",
        "Troncs marqués du lion qui glissent en file sur la glace de la rivière, haches qui sonnent ; la neige est couverte de copeaux jusqu'aux genoux."]}
```

### L'Encrerie de Corte Mufa (RES290) — Forêt de champignons géants · Sève · vénitienne

```json
{"fiche":"RES290","nom":"L'Encrerie de Corte Mufa",
 "recit":"Sous les chapeaux de Corte Mufa, les coprins fondent en encre noire en quelques nuits. L'imprimeur du doge en recueillait les gouttes dans des bassines de cuivre, pour les édits. L'encre pâlissait en un an ; les édits aussi. On n'en imprima jamais d'autres.",
 "pal":["Coprins fondus en flaques noires sur le sol, bassines de cuivre vert-de-gris renversées ; une presse à vis couchée sous les chapeaux.",
        "Coprins par centaines qui s'égouttent dans des bassines alignées, presse remise en marche ; feuilles d'édits fraîches qui sèchent sur des cordes."]}
```

### Les Terrasses aux Éventails de Hawapur (RES107) — Iles flottantes · Vent · moghole

```json
{"fiche":"RES107","nom":"Les Terrasses aux Éventails de Hawapur",
 "recit":"Sur l'île flottante de Hawapur, le gouverneur fit tendre de grands éventails de toile au-dessus des terrasses, que des serviteurs tiraient à la corde pour pousser l'île vers la fraîcheur. Quand le gouverneur mourut, ils lâchèrent les cordes ; l'île dériva vers le vent, sans lui.",
 "pal":["Éventails de toile déchirés qui pendent au-dessus des terrasses, cordes effilochées ; l'île dérive au hasard des brises.",
        "Grands éventails qui battent en cadence, cordes tendues, pavillons de toile tendue ; l'île file droit dans un courant d'air vif."]}
```

### Les Teintureries d'Atashgir (RES248) — Volcan · Feu · moghole

```json
{"fiche":"RES248","nom":"Les Teintureries d'Atashgir",
 "recit":"Aux sources brûlantes d'Atashgir, les teinturiers plongeaient les étoffes de la cour dans l'eau du volcan, qui fixait le safran mieux qu'aucun mordant. L'intendant exigeait une pièce sur trois. Les teinturiers apprirent à rater la troisième.",
 "pal":["Bassins de soufre jaune envasés, perches à étoffes renversées, chiffons décolorés pris dans la croûte ; la vapeur monte à peine.",
        "Bassins bouillonnants bordés de perches où sèchent des étoffes safran et garance ; la vapeur rouge du volcan couvre la pente."]}
```

### Les Jarres de Koh Prâmâ (RES238) — Archipel · Eau · khmère

```json
{"fiche":"RES238","nom":"Les Jarres de Koh Prâmâ",
 "recit":"Sur les îles de Koh Prâmâ, les pêcheurs foulent le poisson au pied dans de grandes jarres de grès, avec le sel, pour en tirer une pâte qui se garde un an. Les anciens reconnaissent une jarre à l'odeur, et nomment la barque qui l'a remplie.",
 "pal":["Jarres de grès fendues sur la grève, filets pourris, une odeur aigre portée par le vent ; les barques sont tirées sur le sable.",
        "Jarres alignées à perte de vue sous des toits de palmes, pêcheurs qui foulent au pied en chantant ; la mer est couverte de barques."]}
```

### Les Fosses de Vaitapura (RES090) — Marais · Sève · polynésienne

```json
{"fiche":"RES090","nom":"Les Fosses de Vaitapura",
 "recit":"Le chef de Vaitapura fit creuser dans le marais des fosses à taro, chacune au nom d'une famille. Les meilleures racines montaient au chef, les autres restaient au fond. Quelques générations plus tard, les fosses du chef étaient les seules qu'on ne bêchait plus.",
 "pal":["Fosses envahies d'eau noire et de roseaux, taros pourris en surface, bêches de bois abandonnées sur les talus.",
        "Fosses curées et paillées de feuilles, taros aux larges feuilles qui dépassent les têtes ; les familles bêchent côte à côte."]}
```

### Les Aires de KwaMoya (RES226) — Iles flottantes · Vent · zouloue

```json
{"fiche":"RES226","nom":"Les Aires de KwaMoya",
 "recit":"Sur les îles flottantes de KwaMoya, les femmes vannent le sorgho au bord du vide. Le vent emporte la balle jusqu'aux nuages, le grain retombe dans les paniers ; ce qui manque le panier tombe sur les îles d'en dessous, qui ne disent jamais merci.",
 "pal":["Aires de terre battue craquelées au bord du vide, paniers de vannage percés ; la balle de sorgho tourne en rond sans s'envoler.",
        "Aires pleines de femmes qui lancent le grain en l'air, balle dorée de soleil qui s'envole en traînées ; enclos de bétail sur chaque île."]}
```

### Les Tanneries de Gu-Ennara (RES255) — Mangrove · Eau · mésopotamienne

```json
{"fiche":"RES255","nom":"Les Tanneries de Gu-Ennara",
 "recit":"À Gu-Ennara, les tanneurs écorçaient les palétuviers pour tanner les cuirs du temple. L'intendant fixait le compte des peaux, jamais celui des arbres. Quand la mangrove recula, il fit graver la tablette de l'année avec le même nombre que la précédente.",
 "pal":["Palétuviers écorcés qui meurent debout, fosses à tan à sec, cuirs raidis oubliés sur les claies ; l'eau saumâtre a gagné.",
        "Écorce en piles rouges au bord des fosses, peaux qui trempent dans l'eau brune, palétuviers épais au-delà ; les barques à cuir vont et viennent."]}
```

### Le Canyon de Danxue (RES074) — Canyon · Feu · chinoise impériale

```json
{"fiche":"RES074","nom":"Le Canyon de Danxue",
 "recit":"Dans le canyon de Danxue, les mineurs broyaient le cinabre au pilon pour le vermillon des édits impériaux. Le préfet n'en signait aucun sans y goûter l'encre du bout du pinceau, par superstition. Il mourut lentement, et très ponctuel.",
 "pal":["Galeries effondrées dans la falaise rouge, mortiers de pierre renversés, poussière écarlate qui colle aux bottes.",
        "Galeries étayées sur toute la falaise, pilons qui battent en cadence, sacs de poudre vermillon descendus à la corde jusqu'aux mulets."]}
```

### Les Chantiers de Qajarnaq (RES256) — Jungle · Sève · inuit

```json
{"fiche":"RES256","nom":"Les Chantiers de Qajarnaq",
 "recit":"Les chasseurs de Qajarnaq, venus d'un pays de glace, fendaient le bambou de la jungle pour les armatures de leurs kayaks, faute d'os de baleine. Leur ancien exigeait la première coque de chaque saison. Il en possédait vingt, et ne savait plus pagayer.",
 "pal":["Armatures de bambou fendues qui pourrissent sous les lianes, peaux moisies tendues sur des cadres ; la rivière charrie des feuilles.",
        "Chantier bruyant sur la berge, bambous fendus en lattes, kayaks neufs alignés ; les pagaies claquent sur la rivière brune."]}
```

### Les Séchoirs de Peñalbarda (RES280) — Lande · Vent · andalouse

```json
{"fiche":"RES280","nom":"Les Séchoirs de Peñalbarda",
 "recit":"Sur la lande de Peñalbarda, on suspendait les jambons aux poutres des séchoirs ouverts au vent de la sierra. Le seigneur en prenait un par fenêtre. Les paysans murèrent les fenêtres une à une, et les jambons séchèrent moins bien, mais pour eux.",
 "pal":["Séchoirs aux fenêtres murées, crochets vides aux poutres, toits de tuiles cassées ; le vent siffle dans les fentes.",
        "Séchoirs aux fenêtres rouvertes où pendent des rangées de jambons, chaux fraîche sur les murs ; le vent de la sierra traverse tout."]}
```

---

## Notes pour le critique

1. **ASS070, pôle Cendre** : l'interdit commun « cendre au −7 » est respecté à la lettre dans les phrases `pal` (suie, souches charbonneuses, fumée brune) ; le mot ne reste que dans le nom du pôle, imposé par la liste.
2. **DON020, pôle Or** : l'or apparaît au +7 (sanctuaire couvert de feuille d'or). C'est l'axe de la zone, donc l'exception prévue ; je l'ai payée dans la même phrase (la mangrove abattue jusqu'à l'horizon pour les fours). Le reste de ma palette +7 reste peint (cinabre, malachite, lapis, céruse, guède).
3. **Deux Peste / Guérison chez moi** (ANT170, ASS168), après DON101 et ASS115 au lot 1 et DON042 (D) dans ce lot. Familles séparées : ANT170 − marque en chaîne + vermine / ASS168 − affaiblissement + isolement (`seul`) ; ANT170 + garde des bandelettes + bêtes sacrées / ASS168 + pioche + soin conditionné à `blesse`. Le soin du héros revient comme appoint dans les deux Guérison : à surveiller.
4. **CIT002 Pureté contre mon CIT016 Ordre (lot 1)** : deux Citadelles à forte garde. Pureté repose sur la perce-garde et l'exil comme prix, sans affaiblissement ni hésitation avant le palier 7 ; à vous de juger si l'écart suffit.
5. **Résonances en miroir** dans ANT192 (Abîme ↔ Givre), comme DON030 au lot 1. Les autres zones ne bouclent pas sur elles-mêmes.
6. **Moteur** : `soin` « allies » parcourt `CB.allies`, qui contient aussi l'unité Garde (`gardeU`) ; « vos bêtes se soignent » peut donc soigner la Garde. Sans gravité, mais à savoir. `defausseAPrix` (ASS070 −) est faux au premier jeu d'une carte qui paie après son `si` : voulu, il faut avoir déjà payé une défausse ailleurs.
7. **Invocations dans une Assemblée** : ASS168 +7 lève un bloqueur (les Convalescents, 24 PV sans attaque). Si les Assemblées ne doivent pas invoquer, on le remplace par une garde de 20.
8. **Allusions** : RES173 et RES290 évoquent une république des lagunes, un doge et un lion sans nommer de lieu réel. Fedelm (nom de légende irlandaise) a été remplacé par Órlaith dans ANT086.
9. **Ressources, gestes du lot** : duvet d'eider ramassé ; troncs marqués au fer et glissés sur la glace ; encre de coprins recueillie ; éventails tirés à la corde ; étoffes teintes dans une source brûlante ; poisson foulé dans des jarres ; fosses à taro paillées ; sorgho vanné au vent ; palétuviers écorcés pour le tan ; cinabre broyé au pilon ; bambou fendu pour des kayaks ; jambons pendus au vent. Aucun ne reprend un geste du lot 1 ; à croiser avec les listes de B, C et D.
