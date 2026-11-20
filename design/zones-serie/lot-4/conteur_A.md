# Lot 4 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche + 14 cartes chacune, 168 cartes) et seize Ressources (fiche légère, sans carte).

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésite tous = 9 ; ignoreGarde = 3 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte ; exil = prix 3 ; prixDefausse n rend 3n ; prixBete n rend n ; ennemiGarde n rend 2n ; ennemiSoin n rend 2,2n ; invocation = PV/2 + attaque × 1,5. Les budgets sont **calculés au script** à partir des `ops`. Formes du palier 7 : 42 à 52,4 points sans combo, réveil de +61 à +75 %. Aucun boost.

Prix : 4 ou 5 cartes à prix sur 6 (paliers 1 à 6) dans chaque pôle, à égalité entre les deux pôles d'une même zone ; chaque forme du palier 7 a un prix. Antres : 3 cartes d'invocation au moins par pôle.

Leçons des lots 1 à 3 appliquées (vérifiées au script avant remise) :
- Ordre des opérations conforme au moteur, `mana` à 2 au plus, conditions `si` prises dans `cartes.js`, **aucun `si` testé après l'opération de la même carte qui le rendrait vrai**, `"cible":1` dès qu'une opération vise « cible », tag « Loi » exactement quand l'effet commence par « Loi ».
- Phrase d'ouverture de 3 à 6 mots sur les 24 formes du palier 7 ; chaque forme pose une résonance et en réveille une autre.
- **Aucun nombre écrit en toutes lettres** dans la prose d'A (récits, `pal`, noms, ambiances) : il ne reste que « premier », « dernier », « un seul ». Les comptes se disent par « la dîme », « tous moins un », « çà et là ».
- Aucun crochet sur 5 cartes ou plus (3 ou 4 partout) ; enchaînement (`cartesJouees`, `troisCartes`) sur 3 cartes au plus ; « tous » de l'hésitation jamais sur deux paliers de suite.
- Trois familles au moins par pôle (comptées au script : une famille compte dès 2 cartes).
- Chutes de récit : une seule chute « …, sans X. » ; pas de « Morale : », pas d'« une autre main a ajouté ».
- Noms de cartes vérifiés contre `noms-pris.txt` et contre les fichiers de B et de D remis avant moi.

Recettes de récit (aucune deux fois) : ANT190 les deux inscriptions ; ANT041 le témoin d'en bas ; ANT200 le revers ; ANT217 la chronique tronquée ; ANT166 l'inventaire de ruine ; ASS118 le procès-verbal ; ASS101 la sentence ; ASS172 l'interrogatoire ; DON072 les instructions au tailleur ; DON080 le tarif gravé ; DON041 les légendes d'album ; CIT039 le testament.

Résonances des formes du palier 7 (posée → réveillée). Posées : Abîme 3, Racine 4, Givre 5, Braise 3, Sang 4, Sceau 5. Réveillées : Abîme 5, Racine 4, Givre 3, Braise 4, Sang 4, Sceau 4.

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT190 | Abîme → Racine | Racine → Sceau |
| ANT041 | Givre → Sang | Braise → Givre |
| ANT200 | Givre → Racine | Racine → Braise |
| ANT217 | Sang → Abîme | Sceau → Sang |
| ANT166 | Sang → Givre | Racine → Abîme |
| ASS118 | Braise → Sceau | Sceau → Braise |
| ASS101 | Abîme → Sceau | Braise → Racine |
| ASS172 | Givre → Abîme | Sceau → Sang |
| DON072 | Abîme → Braise | Sceau → Abîme |
| DON080 | Sang → Braise | Givre → Sceau |
| DON041 | Sang → Racine | Sceau → Givre |
| CIT039 | Givre → Sang | Racine → Abîme |

Familles d'effets (carte des familles : `familles_A.md`). Plafonds du lot tenus avec B, C et D : A prend **une** hésitation (ANT200 −), **un** pôle de coups au hasard (DON080 −) et **un** de vol de vie (DON041 −), les dernières places du lot ; aucune garde du héros en famille principale (le plafond de 6 était plein) ; perce-garde, affaiblissement, riposte, brûlure, marque : un pôle chacune.

| Zone | Pôle − | Pôle + | Déjà écrits sous les mêmes mots |
|---|---|---|---|
| ANT190 Vide / Étoiles | bêtes pillardes + pioche payée en défausse, `vol` | tortues + mana d'Eau + soin du héros, `bete` | Vide : perce-garde (ANT137, DON104, B CIT017, C ASS157), exil (C ANT007) ; Étoiles : brûlure, pioche-hasard, pioche (C ASS157, avec mana d'Eau en appoint) |
| ANT041 Ombre / Lumière | riposte + bêtes, `elan` | dégâts à tous + bêtes, `seul` | Ombre : hésitation, gros coups ; Lumière : brûlure-marque, gros coups-pioche, riposte |
| ANT200 Sommeil / Éveil | hésitation + bêtes à 0 d'attaque + soin, `hesite` | dégâts à tous + bêtes + pioche, `cartesJouees` (3) | Sommeil : affaiblissement (B DON023) ; Éveil : riposte (B DON023) |
| ANT217 Folie / Raison | gros coups ciblés payés en bêtes (`prixBete`), `pietine` | pioche + garde des alliés, `soinEnnemi` | Folie : hasard, brûlure, dégâts à tous, mana-pioche ; gros coups payés en PV chez C (DON126, `blesse`) ; Raison : marque, perce-garde, mana, affaiblissement |
| ANT166 Tyrannie / Liberté | affaiblissement + bêtes enchaînées, `defausseAPrix` | invocations + récupération + mana de Glace, `troisCartes` (3) | D DON120 (exil / dégâts à tous) |
| ASS118 Rouille / Or | Lois de brûlure + perce-garde (3), `cibleGarde` | Lois de récupération + mana de Sève, `blesse` | Rouille : marque-perce (ANT183), affaiblissement-perce (ANT148), **brûlure-perce (DON020, A, lot 2)** ; Or : pioche, gros coups, invocations (C ANT110) |
| ASS101 Exil / Foyer | Lois qui s'exilent + gros coups ciblés, `seul` | mana de Pierre + soin du héros + pioche, `bete` | Exil : gros coups-perce, hasard, brûlure, garde du héros ; Foyer : brûlure, garde des alliés, pioche, soin-affaiblissement |
| ASS172 Oubli / Mémoire | Lois de mana de Feu + dégâts à tous + soin, `blesse` | Lois de pioche + gros coups (la satire) + garde, `garde` | Oubli : hésitation-affaiblissement, gros coups, invocations (C ANT202), affaiblissement (D ASS032), soin (D CIT035) ; Mémoire : **pioche-gros coups (B ASS071, B ANT179)**, récupération (C, D), riposte (D CIT035) |
| DON072 Oubli / Mémoire | perce-garde + exil + dégâts à tous, `cibleGarde` | marque + gros coups ciblés + pioche, `vulnerable` | voir ASS172 |
| DON080 Tempête / Calme | coups au hasard + dégâts à tous + mana de Vent, `elan` | soin du héros + pioche + affaiblissement (3), `troisCartes` (3) | Tempête : **hasard (ANT192, A, lot 2)**, dégâts à tous (DON082, C ASS124), gros coups (B DON046) ; Calme : hésitation, brûlure-marque, garde du héros (B DON046, C ASS124) |
| DON041 Cauchemar / Rêve | vol de vie + gros coups + bêtes peintes, `vol` | mana de Vent + soin des alliés + pioche (4), `hesite` | Cauchemar : riposte, marque, gros coups-vol de vie (B DON068), dégâts à tous ; Rêve : **garde et soin des alliés (B CIT028)**, écho, perce-garde, pioche |
| CIT039 Os / Corail | gros coups ciblés + garde du héros (4) + riposte (1), `pietine` | soldats et bloqueurs + garde et soin des alliés, `bete` | Os : brûlure-affaiblissement, hasard, perce-garde (C DON061), garde des alliés (C CIT003), affaiblissement (D ANT095) ; Corail : pioche-garde, mana, brûlure (C DON061), garde du héros (C CIT003), invocations de récif (D ANT095) |

Gestes des Ressources (un par Ressource ; comparés aux lots 1 à 3 et aux cartes de B, C et D du lot 4) : RES329 étaler le caillé sur la roche ; RES312 porter les pierres chaudes aux bains ; RES023 haler le bois flotté ; RES157 graver les comptes dans la glace ; RES068 fouir les racines de renouée ; RES211 pêcher les ponces à l'épuisette ; RES341 traire les rennes en cercle ; RES366 enterrer les calames dans le fumier ; RES029 prendre les œufs d'autruche ; RES109 écorcer le chêne-liège ; RES360 secouer le poivre sur des nattes ; RES356 grimper par les lamelles puiser l'eau des chapeaux ; RES218 frapper les piliers au maillet ; RES353 flotter le bois de teinture ; RES307 planter les fascines contre la dune ; RES196 presser l'escargot pourpre sur l'écheveau. Structures de chute (au plus deux par tournure) : prélèvement (RES211, déjoué par la matière ; RES366), prix inversé (RES312, RES360), fidélité (RES341, RES196), ressemblance (RES023, RES068), ruse sue de tous (RES029, RES356) ; une seule fois : la part des voleurs comptée d'avance (RES329), la règle absurde (RES157), le temps long (RES109), le revers (RES218), le profit pour rien (RES353), l'ironie du puissant (RES307). Aucune chute en « part vers… ».



---

## 1. Les Grèves d'Ak Ek' (ANT190) — Antre · Archipel · Eau · Maya

Recette du récit : les deux inscriptions. Recette du −7 : le vide (la grève lisse, les paniers pourris) ; du +7 : la foule (une marée de petites tortues entre les jambes des veilleurs).

**Vide (−)** : la dîme des œufs → la frégate voleuse → les œufs déterrés → le chiffre regravé → le requin des passes → tous les paniers moins un → la Grève lisse. Fil mécanique : bêtes pillardes (crabes, frégates, requin) qui prennent pour vous, pioche payée en défausse (le tribut prend la main), condition « la cible vole par-dessus » (la frégate vole ce qui vole) ; prix : défausse surtout, une fois des PV.
**Étoiles (+)** : Ak Ek' se lève → la première tortue → les bâtons de nid → les veilleurs de grève → la fente de l'observatoire → la tortue-mère → la Marée des petites. Fil mécanique : tortues à chaque palier (de la première à la marée des petites), mana d'Eau (le calendrier dit quand), soin du héros, peu de pioche, condition « une bête est en jeu » ; prix : les ennemis se couvrent ou se soignent, une défausse, des PV.

```json
{"fiche":"ANT190","nom":"Les Grèves d'Ak Ek'",
 "recit":"Sur la première marche de l'observatoire, du temps du seigneur Uk'ab Tun : « Quand Ak Ek' se lève, les tortues montent, et chaque île donne au seigneur la dîme de ses œufs. » Sur la dernière marche, d'un glyphe plus maigre : « Chaque île donne tous ses paniers, moins un. » Le chiffre de la première inscription a été gratté et regravé si souvent que la pierre s'est creusée en cuvette ; l'eau de pluie y croupit. Les tortues ne sont pas revenues. Les frégates, si.",
 "pal":["Grèves lisses à perte de vue, nids éventrés comblés de sable, paniers d'osier pourris au pied de l'observatoire ; les frégates tournent sur une mer vide.","Traces de carapaces traînées jusqu'aux canots, coquilles vides au vent, crabes partout ; les paniers du tribut s'empilent plus haut que les cases.","Archipel de sable blanc et de palétuviers bas, cases de palmes, petit observatoire de pierre sur l'île du milieu ; des traces de tortue montent la nuit.","Nids balisés de bâtons, veilleurs assis sur la grève, tortues en files sous la lune ; les fentes de l'observatoire relevé visent la ceinture d'étoiles.","Chaque nuit la grève bouge : une marée de petites tortues court vers l'eau entre les jambes des veilleurs, et les canots attendent qu'elle soit passée."],
 "pm":"Vide","pp":"Étoiles"}
```

```json
[
{"id":"ANT190-moins-1","zone":"ANT190","pole":"-","palier":1,"nom":"La Dîme des œufs","cout":1,"cible":1,
 "effet":"Un Crabe fantôme rejoint le combat : 4 PV, frappe 3. 3 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Crabe fantôme",4,3],["deg","cible",3],["pioche",1],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le collecteur d'Uk'ab Tun comptait les œufs à voix haute ; les crabes suivaient ses pas.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ANT190-moins-2","zone":"ANT190","pole":"-","palier":2,"nom":"La Frégate voleuse","cout":1,"cible":1,
 "effet":"Une Frégate voleuse rejoint le combat : 6 PV, frappe 4. Si la cible vole par-dessus, piochez 1 carte. 2 dégâts à la cible.",
 "ops":[["invoque","Frégate voleuse",6,4],["si","vol",[["pioche",1]]],["deg","cible",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Pioche","Condition"],
 "ambiance":"La frégate ne pêche pas : elle harcèle le fou jusqu'à ce qu'il lâche son poisson.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT190-moins-3","zone":"ANT190","pole":"-","palier":3,"nom":"Les Œufs déterrés","cout":1,"cible":0,
 "effet":"Piochez 2 cartes. Un Crabe de vase rejoint le combat (4 PV, frappe 2), puis un autre. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["invoque","Crabe de vase",4,2],["invoque","Crabe de vase",4,2],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Pioche","Prix"],
 "ambiance":"Les collecteurs creusaient d'une main ; les crabes finissaient les nids laissés ouverts.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ANT190-moins-4","zone":"ANT190","pole":"-","palier":4,"nom":"Le Chiffre regravé","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 12 dégâts. Puis 10 dégâts à la cible ; piochez 2 cartes ; un Crabe des cases rejoint le combat : 8 PV, frappe 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",12]]],["deg","cible",10],["pioche",2],["invoque","Crabe des cases",8,4],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le graveur du seigneur venait à chaque lune ; il apportait son ciseau, jamais de quoi poncer la marche.",
 "budget":"31 / 28 (+11 %)"},
{"id":"ANT190-moins-5","zone":"ANT190","pole":"-","palier":5,"nom":"Le Requin des passes","cout":2,"cible":1,
 "effet":"Le Requin des passes rejoint le combat : 14 PV, frappe 8. 8 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Requin des passes",14,8],["deg","cible",8],["pioche",1],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Pioche","Prix"],
 "ambiance":"Le requin des passes suivait les canots du tribut trop chargés, patient comme un percepteur.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT190-moins-6","zone":"ANT190","pole":"-","palier":6,"nom":"Tous les paniers, moins un","cout":1,"cible":1,
 "effet":"Piochez 3 cartes, puis 12 dégâts à la cible ; si elle vole par-dessus, 6 de plus. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",3],["deg","cible",12],["si","vol",[["deg","cible",6]]],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le panier laissé à chaque île était le plus petit ; on y couchait les œufs fendus.",
 "budget":"24 / 22,5 (+7 %)"},
{"id":"ANT190-moins7","zone":"ANT190","pole":"-","palier":7,"nom":"La Grève lisse","cout":2,"cible":1,
 "effet":"La grève se vide. La Frégate-reine rejoint le combat (16 PV, frappe 10) ; 14 dégâts à la cible ; piochez 2. Pose Abîme. Si Racine (consommée) : un Requin des passes (14 PV, frappe 8) et 12 dégâts. Prix : défaussez 1 carte.",
 "ops":[["invoque","Frégate-reine",16,10],["deg","cible",14],["pioche",2],["pose","Abîme"],["reveil","Racine",true,[["invoque","Requin des passes",14,8],["deg","cible",12]]],["prixDefausse",1]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Pioche","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Le dernier relevé d'Uk'ab Tun tient en une ligne : île du milieu, rien.",
 "budget":"42 sans combo ; réveil +31 (74 %)"},
{"id":"ANT190-plus-1","zone":"ANT190","pole":"+","palier":1,"nom":"Ak Ek' se lève","cout":1,"cible":0,
 "effet":"+1 mana d'Eau ; piochez 1 carte ; le héros se soigne de 3.",
 "ops":[["mana","Eau",1],["pioche",1],["soin","heros",3]],
 "tags":["Antre","Eau","Pôle +","Soin","Pioche","Mana"],
 "ambiance":"Les vieilles guettaient la ceinture d'étoiles au-dessus de l'observatoire ; ce soir-là seulement, on allumait le guet.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT190-plus-2","zone":"ANT190","pole":"+","palier":2,"nom":"La Première Tortue","cout":1,"cible":1,
 "effet":"Si une bête est déjà en jeu, 8 dégâts à la cible. Une Tortue de grève rejoint le combat : 12 PV, frappe 2. +1 mana d'Eau. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","bete",[["deg","cible",8]]],["invoque","Tortue de grève",12,2],["mana","Eau",1],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"La première tortue de la saison montait seule, lentement ; personne ne la touchait, c'était elle qui ouvrait la grève.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT190-plus-3","zone":"ANT190","pole":"+","palier":3,"nom":"Les Bâtons de nid","cout":1,"cible":0,
 "effet":"Si une bête est déjà en jeu, piochez 2 cartes. Une Tortue caouanne rejoint le combat : 8 PV, frappe 2 ; le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","bete",[["pioche",2]]],["invoque","Tortue caouanne",8,2],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Pioche","Condition","Prix"],
 "ambiance":"Une entaille par nuit de ponte : les enfants apprenaient à compter à l'envers du tribut.",
 "budget":"13,8 / 15,0 (-8 %), recalculé par le critique"},
{"id":"ANT190-plus-4","zone":"ANT190","pole":"+","palier":4,"nom":"Les Veilleurs de grève","cout":2,"cible":0,
 "effet":"Une Tortue verte rejoint le combat : 18 PV, frappe 3. Piochez 1 carte ; le héros se soigne de 10. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Tortue verte",18,3],["pioche",1],["soin","heros",10],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Soin","Pioche","Prix"],
 "ambiance":"Les veilleurs gardaient les nids la nuit, assis dos à la mer, un bâton sur les genoux.",
 "budget":"24,5 / 28,0 (-12 %), recalculé par le critique"},
{"id":"ANT190-plus-5","zone":"ANT190","pole":"+","palier":5,"nom":"La Fente de l'observatoire","cout":2,"cible":0,
 "effet":"+2 mana d'Eau ; piochez 2 cartes ; si une bête est en jeu, le héros se soigne de 4. Une Tortue-luth rejoint le combat : 20 PV, frappe 4. Prix : chaque ennemi se soigne de 2.",
 "ops":[["mana","Eau",2],["pioche",2],["si","bete",[["soin","heros",4]]],["invoque","Tortue-luth",20,4],["ennemiSoin",2]],
 "tags":["Antre","Eau","Pôle +","Invocation","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"On rouvrit la fente murée par le seigneur ; cette nuit-là, la tortue-luth sortit de l'eau.",
 "budget":"27,6 / 32 (−14 %)"},
{"id":"ANT190-plus-6","zone":"ANT190","pole":"+","palier":6,"nom":"La Tortue-mère","cout":1,"cible":0,
 "effet":"Si une bête est déjà en jeu, vos alliés gagnent 6 de garde. La Tortue-mère rejoint le combat : 30 PV, frappe 3 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["garde","allies",6]]],["invoque","Tortue-mère",30,3],["pioche",1],["prixPV",2]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Pioche","Condition","Prix"],
 "ambiance":"On dit qu'elle était déjà vieille sous Uk'ab Tun, et qu'elle pond exprès sous la marche gravée.",
 "budget":"25,1 / 22,5 (+12 %), recalculé par le critique"},
{"id":"ANT190-plus7","zone":"ANT190","pole":"+","palier":7,"nom":"La Marée des petites","cout":2,"cible":0,
 "effet":"La grève se met à courir. La Nuée des petites rejoint le combat (26 PV, frappe 6) ; +2 mana d'Eau ; piochez 2 ; soin 14. Pose Racine. Si Sceau (consommée) : +2 mana d'Eau, piochez 3, soin 10. Prix : ennemis +3 de garde.",
 "ops":[["invoque","Nuée des petites",26,6],["mana","Eau",2],["pioche",2],["soin","heros",14],["pose","Racine"],["reveil","Sceau",true,[["mana","Eau",2],["pioche",3],["soin","heros",10]]],["ennemiGarde",3]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Soin","Pioche","Mana","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Les veilleurs restent debout sans bouger, les pieds dans le flot des carapaces ; les canots attendent, rames levées.",
 "budget":"44 sans combo ; réveil +28 (64 %)"}
]
```

---

## 2. Skuggaskáli, le Naust des Dunes (ANT041) — Antre · Désert de sable · Feu · Nordique

Recette du récit : le témoin d'en bas (la balayeuse). Recette du −7 : l'enfouissement (le naust sous la dune, une nuit de planches) ; du +7 : le geste (tout un peuple en plein soleil derrière un bouclier poli).

**Ombre (−)** : la coudée d'ombre → la vipère de quille → le loyer des bêtes → la chouette du bordage → sous la proue → le renard des dunes → la Coque ensevelie. Fil mécanique : riposte à chaque carte (ce qui vit dans l'ombre mord qui entre), bêtes d'ombre, un peu d'affaiblissement, condition « la cible prend son élan » ; prix : PV et défausse.
**Lumière (+)** : le rai taxé → le bouclier poli → le faucon de midi → les bordages fendus → le lézard de cuivre → la pierre-soleil → le Navire de midi. Fil mécanique : dégâts à tous (le jour entre partout), bêtes de midi, un peu de garde du héros (le bouclier poli, 3 cartes), condition « il ne reste qu'un ennemi » ; prix : PV, défausse, soin ennemi.

```json
{"fiche":"ANT041","nom":"Skuggaskáli, le Naust des Dunes",
 "recit":"Ása balayait chaque matin le sable hors du naust. Le jarl Bárð Skeiðarnef avait fait haler son navire à travers les dunes et l'avait retourné sur des poteaux : c'était la seule ombre de la contrée. Il la louait à la coudée, contre du sel, des chèvres ou des enfants. Ása dormait sous la proue, là où l'ombre n'arrivait qu'à midi. Elle vit les familles payer, puis payer pour leurs bêtes. Un été, les bordages se fendirent au soleil et le jour passa entre eux. Le jarl fit taxer les rais.",
 "pal":["Le naust a sombré sous la dune : seule la quille dépasse du sable. Dessous, une nuit de planches où luisent des yeux ; plus personne n'y paie rien.","Sable entassé contre les bordages, poteaux penchés, coudées d'ombre marquées à la craie sur le sol ; des vipères dorment dans les tolets.","Dunes rousses sous un ciel blanc, un navire retourné sur des poteaux en guise de halle, des chèvres serrées dans sa bande d'ombre.","Bordages fendus, rais de soleil qui tombent en lames dans la halle ; on paie sa place au jour, et le jarl fait polir les boucliers.","La coque démontée brûle pour la cuisine ; tout le peuple vit en plein soleil, voilé de blanc, et marche derrière un bouclier poli porté au bout d'une perche."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ANT041-moins-1","zone":"ANT041","pole":"-","palier":1,"nom":"La Coudée d'ombre","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, elle perd 1 d'attaque. Riposte 3 ; le héros gagne 4 de garde.",
 "ops":[["si","elan",[["affaiblit","cible",1]]],["riposte",3],["garde","heros",4]],
 "tags":["Antre","Feu","Pôle −","Affaiblissement","Riposte","Garde","Condition"],
 "ambiance":"Le jarl mesurait l'ombre à son pied ; le pied d'Ása était plus court.",
 "budget":"10,7 / 10 (+7 %)"},
{"id":"ANT041-moins-2","zone":"ANT041","pole":"-","palier":2,"nom":"La Vipère de quille","cout":1,"cible":0,
 "effet":"Une Vipère de quille rejoint le combat : 4 PV, frappe 4. Riposte 3. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Vipère de quille",4,4],["riposte",3],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Riposte","Prix"],
 "ambiance":"La vipère avait loué la quille avant tout le monde ; elle n'avait jamais payé et mordait le collecteur.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT041-moins-3","zone":"ANT041","pole":"-","palier":3,"nom":"Le Loyer des bêtes","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 8 dégâts. Puis 3 dégâts à la cible ; riposte 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","elan",[["deg","cible",8]]],["deg","cible",3],["riposte",5],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Une chèvre valait une demi-coudée, un chien une entière ; un enfant se discutait.",
 "budget":"14 / 15 (−7 %)"},
{"id":"ANT041-moins-4","zone":"ANT041","pole":"-","palier":4,"nom":"La Chouette du bordage","cout":2,"cible":1,
 "effet":"La Chouette du bordage rejoint le combat : 8 PV, frappe 6. Riposte 6 ; si la cible prend son élan, elle perd 2 d'attaque. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Chouette du bordage",8,6],["riposte",6],["si","elan",[["affaiblit","cible",2]]],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"La chouette nichait entre les planches disjointes et retenait le visage des tricheurs.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT041-moins-5","zone":"ANT041","pole":"-","palier":5,"nom":"Sous la proue","cout":2,"cible":1,
 "effet":"Riposte 8 ; le héros gagne 10 de garde ; 6 dégâts à la cible, qui perd 1 d'attaque. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["riposte",8],["garde","heros",10],["deg","cible",6],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"Sous la proue, l'ombre ne venait qu'à midi ; Ása y gardait son balai et un couteau.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ANT041-moins-6","zone":"ANT041","pole":"-","palier":6,"nom":"Le Renard des dunes","cout":1,"cible":1,
 "effet":"Si la cible prend son élan, 6 dégâts. Le Renard des dunes rejoint le combat : 10 PV, frappe 6. Riposte 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","elan",[["deg","cible",6]]],["invoque","Renard des dunes",10,6],["riposte",4],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Le renard entrait par la fente des tolets et ressortait avec un fromage ; on taxa la fente.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ANT041-moins7","zone":"ANT041","pole":"-","palier":7,"nom":"La Coque ensevelie","cout":2,"cible":1,
 "effet":"Le naust passe sous la dune. Riposte 10 ; le Ver de quille rejoint le combat (20 PV, frappe 8) ; garde 12. Pose Givre. Si Sang (consommée) : riposte 10 de plus et 14 dégâts à la cible. Prix : le héros perd 4 PV.",
 "ops":[["riposte",10],["invoque","Ver de quille",20,8],["garde","heros",12],["pose","Givre"],["reveil","Sang",true,[["riposte",10],["deg","cible",14]]],["prixPV",4]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Riposte","Garde","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Quand la dune eut couvert le naust, on cessa de payer ; ceux d'en dessous ne remontèrent pas.",
 "budget":"47,6 sans combo ; réveil +34 (71 %)"},
{"id":"ANT041-plus-1","zone":"ANT041","pole":"+","palier":1,"nom":"Le Rai taxé","cout":1,"cible":0,
 "effet":"3 dégâts à tous les ennemis ; le héros se soigne de 3.",
 "ops":[["deg","tous",3],["soin","heros",3]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Soin"],
 "ambiance":"Le collecteur du jarl posait la main dans chaque rai de soleil et comptait les doigts éclairés.",
 "budget":"9,6 / 10 (−4 %)"},
{"id":"ANT041-plus-2","zone":"ANT041","pole":"+","palier":2,"nom":"Le Bouclier poli","cout":1,"cible":1,
 "effet":"Le héros gagne 10 de garde. Si un seul ennemi reste, 8 dégâts à la cible. Puis 3 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["garde","heros",10],["si","seul",[["deg","cible",8]]],["deg","cible",3],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Bárð fit polir son bouclier au sable jusqu'à ce qu'il rende le jour.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT041-plus-3","zone":"ANT041","pole":"+","palier":3,"nom":"Le Faucon de midi","cout":1,"cible":0,
 "effet":"Le Faucon de midi rejoint le combat : 8 PV, frappe 5. 3 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Faucon de midi",8,5],["deg","tous",3],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"Le faucon ne chassait qu'en plein midi, quand les rongeurs n'avaient plus d'ombre où se glisser.",
 "budget":"15,1 / 15 (+1 %)"},
{"id":"ANT041-plus-4","zone":"ANT041","pole":"+","palier":4,"nom":"Les Bordages fendus","cout":2,"cible":1,
 "effet":"Si un seul ennemi reste, 10 dégâts à la cible. 7 dégâts à tous les ennemis ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",10]]],["deg","tous",7],["garde","heros",10],["prixPV",2]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Les planches éclatèrent avec un bruit de fouet ; les familles sortirent, les bras sur la tête.",
 "budget":"26,4 / 28 (−6 %)"},
{"id":"ANT041-plus-5","zone":"ANT041","pole":"+","palier":5,"nom":"Le Lézard de cuivre","cout":2,"cible":0,
 "effet":"Le Lézard de cuivre rejoint le combat : 16 PV, frappe 5. 6 dégâts à tous les ennemis ; le héros se soigne de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Lézard de cuivre",16,5],["deg","tous",6],["soin","heros",4],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Soin","Prix"],
 "ambiance":"Le lézard se chauffait sur le bouclier du jarl, posé au soleil ; personne n'osait le chasser de là.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT041-plus-6","zone":"ANT041","pole":"+","palier":6,"nom":"La Pierre-soleil","cout":1,"cible":1,
 "effet":"5 dégâts à tous les ennemis ; piochez 1 carte ; le héros se soigne de 4. Si un seul ennemi reste, 10 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",5],["pioche",1],["soin","heros",4],["si","seul",[["deg","cible",10]]],["prixDefausse",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le pilote gardait la pierre-soleil pour la haute mer ; dans les dunes, elle servit à trouver le jarl.",
 "budget":"21 / 22,5 (−7 %)"},
{"id":"ANT041-plus7","zone":"ANT041","pole":"+","palier":7,"nom":"Le Navire de midi","cout":2,"cible":0,
 "effet":"La coque brûle à midi. 12 dégâts à tous ; le Dragon de proue rejoint le combat (18 PV, frappe 8) ; le héros gagne 10 de garde. Pose Braise. Si Givre (consommée) : 15 dégâts à tous. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","tous",12],["invoque","Dragon de proue",18,8],["garde","heros",10],["pose","Braise"],["reveil","Givre",true,[["deg","tous",15]]],["prixDefausse",1]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Garde","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"On garda la tête de dragon de la proue ; elle marche en tête, sur une perche.",
 "budget":"52,4 sans combo ; réveil +33 (63 %)"}
]
```

---

## 3. Les Vasières de Koh Damnek (ANT200) — Antre · Archipel · Eau · Khmère

Recette du récit : le revers (la pointe d'abord, puis la stèle officielle, fissurée par un chiffre martelé). Recette du −7 : l'immobilité (la vase craquelée où tout dort) ; du +7 : la démesure (le lac jusqu'aux toits, les poissons qui sautent dans les barques).

**Sommeil (−)** : le bâton planté → le poisson-serpent dans la vase → le trou de souffle → la tortue de vase → le compte des dormeurs → le buffle qui dort debout → le Lac retiré. Fil mécanique : hésitation sur la cible (deux fois seulement sur tous, jamais de suite), bêtes endormies à 0 ou 1 d'attaque qui encaissent, soin du héros, condition « la cible hésite déjà » ; prix : défausse, PV, garde et soin ennemis.
**Éveil (+)** : la première pluie → les bâtons arrachés → le héron sur la vase → le poisson-serpent réveillé → l'eau aux pilotis → le crocodile du chenal → la Crue. Fil mécanique : dégâts à tous à chaque carte (la crue frappe partout), bêtes réveillées qui frappent fort, pioche, condition « vous avez déjà joué une autre carte ce tour » (3 cartes) ; prix : PV, défausse, soin ennemi.

```json
{"fiche":"ANT200","nom":"Les Vasières de Koh Damnek",
 "recit":"Le percepteur du roi ne vit jamais un poisson dormir. La stèle du quai vante pourtant sa sagesse : quand le lac se retire, poissons-serpents et tortues s'enfouissent dans la vase des îles jusqu'aux pluies ; il les fit compter endormis, un bâton planté par trou de souffle, et l'impôt fut levé sur les bâtons. Aux pluies, les îles payèrent en poissons réveillés, et le roi loua un lac si fertile. Au revers de la stèle, le compte des bâtons croît d'année en année. Celui des pêcheurs a été martelé.",
 "pal":["Le lac retiré au-delà de la vue, îles posées sur une vase craquelée percée de trous de souffle ; plus rien ne bouge, les buffles dorment debout.","Vasières grises hérissées de bâtons de compte, barques échouées sur la boue, pilotis à nu ; des tortues dorment en tas sous les maisons.","Archipel de petites îles sur un lac brun et plat, maisons sur pilotis, nasses de bambou, un quai de grès avec sa stèle.","Eau qui monte aux genoux des pilotis, bâtons arrachés qui flottent, hérons partout ; on pêche depuis les fenêtres.","Le lac en crue jusqu'aux toits, eaux grouillantes, crocodiles dans les chenaux ; dans chaque barque, on se bat contre les poissons qui sautent dedans."],
 "pm":"Sommeil","pp":"Éveil"}
```

```json
[
{"id":"ANT200-moins-1","zone":"ANT200","pole":"-","palier":1,"nom":"Le Bâton planté","cout":1,"cible":1,
 "effet":"La cible hésite ; 5 dégâts à la cible.",
 "ops":[["hesite","cible"],["deg","cible",5]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Contrôle"],
 "ambiance":"Un bâton par trou de souffle : le percepteur désignait les trous du bout de son ombrelle.",
 "budget":"10,0 / 10,0 (+0 %), recalculé par le critique"},
{"id":"ANT200-moins-2","zone":"ANT200","pole":"-","palier":2,"nom":"Le Poisson-serpent dans la vase","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 8 dégâts. Puis 3 dégâts à la cible. Un Poisson-serpent endormi rejoint le combat : 14 PV, frappe 0. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",8]]],["deg","cible",3],["invoque","Poisson-serpent endormi",14,0],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Enroulé dans sa motte de boue, le poisson respire par un trou ; on l'impose au trou.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT200-moins-3","zone":"ANT200","pole":"-","palier":3,"nom":"Le Trou de souffle","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, piochez 1 carte. Puis elle hésite ; 6 dégâts à la cible ; le héros se soigne de 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["pioche",1]]],["hesite","cible"],["deg","cible",6],["soin","heros",5],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Contrôle","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les enfants bouchaient les trous du pied pour baisser le compte ; les poissons en mouraient parfois.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ANT200-moins-4","zone":"ANT200","pole":"-","palier":4,"nom":"La Tortue de vase","cout":2,"cible":0,
 "effet":"Tous les ennemis hésitent. Une Tortue de vase rejoint le combat : 24 PV, frappe 1. Le héros se soigne de 6. Prix : le héros perd 2 PV.",
 "ops":[["hesite","tous"],["invoque","Tortue de vase",24,1],["soin","heros",6],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Contrôle","Soin","Prix"],
 "ambiance":"La tortue dormait sous la maison du chef, sa carapace couverte de boue sèche ; on avait bâti l'escalier autour.",
 "budget":"26,5 / 28 (−5 %)"},
{"id":"ANT200-moins-5","zone":"ANT200","pole":"-","palier":5,"nom":"Le Compte des dormeurs","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 12 dégâts. Puis elle hésite ; 14 dégâts à la cible ; le héros se soigne de 10. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","hesite",[["deg","cible",12]]],["hesite","cible"],["deg","cible",14],["soin","heros",10],["ennemiSoin",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Contrôle","Soin","Condition","Prix"],
 "ambiance":"Le percepteur ajoutait les bâtons de l'an passé, car rien ne meurt en dormant.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ANT200-moins-6","zone":"ANT200","pole":"-","palier":6,"nom":"Le Buffle qui dort debout","cout":1,"cible":1,
 "effet":"La cible hésite. Un Buffle endormi rejoint le combat : 30 PV, frappe 0. Le héros gagne 5 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","cible"],["invoque","Buffle endormi",30,0],["garde","heros",5],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Garde","Contrôle","Prix"],
 "ambiance":"Aux plus chaudes semaines, les buffles s'endormaient debout dans la vase, et l'on taxait aussi leurs ronflements.",
 "budget":"21,0 / 22,5 (-7 %), recalculé par le critique"},
{"id":"ANT200-moins7","zone":"ANT200","pole":"-","palier":7,"nom":"Le Lac retiré","cout":2,"cible":1,
 "effet":"Tout le lac s'endort. Tous les ennemis hésitent ; le Grand Poisson-serpent rejoint le combat (30 PV, frappe 4) ; soin 12 ; piochez 1. Pose Givre. Si Racine (consommée) : soin 10 et 18 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","tous"],["invoque","Grand Poisson-serpent",30,4],["soin","heros",12],["pioche",1],["pose","Givre"],["reveil","Racine",true,[["soin","heros",10],["deg","cible",18]]],["prixDefausse",1]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Contrôle","Soin","Pioche","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Quand le lac ne revint pas, le percepteur fit planter un bâton pour le lac lui-même.",
 "budget":"43 sans combo ; réveil +28 (65 %)"},
{"id":"ANT200-plus-1","zone":"ANT200","pole":"+","palier":1,"nom":"La Première Pluie","cout":1,"cible":0,
 "effet":"3 dégâts à tous les ennemis ; piochez 1 carte.",
 "ops":[["deg","tous",3],["pioche",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Pioche"],
 "ambiance":"À la première averse, toutes les mottes de boue se fendent ensemble, avec un bruit de marmite qu'on découvre.",
 "budget":"10,6 / 10 (+6 %)"},
{"id":"ANT200-plus-2","zone":"ANT200","pole":"+","palier":2,"nom":"Les Bâtons arrachés","cout":1,"cible":0,
 "effet":"Si vous avez déjà joué une autre carte ce tour, piochez 1 carte. 5 dégâts à tous les ennemis. Prix : le héros perd 1 PV.",
 "ops":[["si","cartesJouees",[["pioche",1]]],["deg","tous",5],["prixPV",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"L'eau emporta les bâtons de compte vers le large ; personne ne tendit la main.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT200-plus-3","zone":"ANT200","pole":"+","palier":3,"nom":"Le Héron sur la vase","cout":1,"cible":0,
 "effet":"Le Héron cendré rejoint le combat : 6 PV, frappe 5. 3 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Héron cendré",6,5],["deg","tous",3],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"Le héron attend au bord des trous de souffle : il est le premier servi.",
 "budget":"14,1 / 15 (−6 %)"},
{"id":"ANT200-plus-4","zone":"ANT200","pole":"+","palier":4,"nom":"Le Poisson-serpent réveillé","cout":2,"cible":0,
 "effet":"Un Poisson-serpent réveillé rejoint le combat : 10 PV, frappe 7. 5 dégâts à tous ; si vous avez déjà joué une autre carte ce tour, 3 de plus à tous. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Poisson-serpent réveillé",10,7],["deg","tous",5],["si","cartesJouees",[["deg","tous",3]]],["prixPV",2]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Réveillé, le poisson-serpent mord tout ce qui bouge, y compris la main qui le compte.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"ANT200-plus-5","zone":"ANT200","pole":"+","palier":5,"nom":"L'Eau aux pilotis","cout":2,"cible":0,
 "effet":"9 dégâts à tous les ennemis ; piochez 2 cartes ; si vous avez déjà joué une autre carte ce tour, 4 de plus à tous. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","tous",9],["pioche",2],["si","cartesJouees",[["deg","tous",4]]],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"L'eau monta aux pilotis en une nuit ; au matin, la barque du percepteur flottait au-dessus de son propre quai.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT200-plus-6","zone":"ANT200","pole":"+","palier":6,"nom":"Le Crocodile du chenal","cout":1,"cible":0,
 "effet":"Le Crocodile du chenal rejoint le combat : 16 PV, frappe 8. 2 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Crocodile du chenal",16,8],["deg","tous",2],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Prix"],
 "ambiance":"Le crocodile remonta jusqu'au quai et s'allongea devant la stèle, la gueule ouverte.",
 "budget":"21,4 / 22,5 (−5 %)"},
{"id":"ANT200-plus7","zone":"ANT200","pole":"+","palier":7,"nom":"La Crue","cout":2,"cible":0,
 "effet":"Le lac se lève d'un coup. 12 dégâts à tous ; le Crocodile-roi rejoint le combat (20 PV, frappe 10) ; piochez 1. Pose Racine. Si Braise (consommée) : 12 dégâts à tous et piochez 2. Prix : le héros perd 4 PV.",
 "ops":[["deg","tous",12],["invoque","Crocodile-roi",20,10],["pioche",1],["pose","Racine"],["reveil","Braise",true,[["deg","tous",12],["pioche",2]]],["prixPV",4]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Dégâts","Pioche","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Cette année-là, la barque du percepteur fut retrouvée pleine de poissons, et lui nulle part.",
 "budget":"51,4 sans combo ; réveil +34,4 (67 %)"}
]
```

---

## 4. Les Îles aux Juments de Dalai-Aduu (ANT217) — Antre · Archipel · Eau · Mongole

Recette du récit : la chronique tronquée (années animales, une page manquante). Recette du −7 : la démesure (la harde qui nage en cercle autour de l'archipel) ; du +7 : l'ordre (chaque île son enclos, les juments en file vers l'outre).

**Folie (−)** : l'eau de mer bue → la jument de sel → les rameurs mordus → l'étalon qui nage → la harde en cercle → la barque du noyon → la Harde dans la mer. Fil mécanique : gros coups ciblés, juments folles à forte attaque et peu de PV, et le prix se paie sur vos propres bêtes (elles se mordent entre elles) ; condition « la cible frappe fort ou piétine ».
**Raison (+)** : le chien d'Oyuun → les noms des pâturages → la jument bue → la citerne de l'île → le hongre de bât → le chant compté → les Enclos de l'archipel. Fil mécanique : pioche (on compte l'eau), garde des alliés, bêtes robustes à faible attaque, condition « un ennemi s'apprête à se soigner » (Oyuun sait qui a soif) ; prix : défausse, PV, garde et soin ennemis.

```json
{"fiche":"ANT217","nom":"Les Îles aux Juments de Dalai-Aduu",
 "recit":"Année du Cheval : le noyon Temürbaatar débarque sur les îles les juments du khan, pour les tenir loin des fièvres de la steppe. Année de la Brebis : les puits des îles sont saumâtres ; les juments boivent la mer. Du Singe au Chien : la page manque. Année du Porc : les juments nagent d'île en île, tête haute, et mordent les rameurs ; le noyon est rentré par une autre barque. Seule la vieille Oyuun les approche encore, une outre d'eau douce sur l'épaule, en leur chantant les noms des pâturages.",
 "pal":["Les juments ont pris l'archipel : barques coulées, yourtes piétinées, et une harde ruisselante qui nage en cercle autour des îles en hennissant à la mer.","Puits comblés de pierres, enclos défoncés, crins accrochés aux rochers ; des juments maigres lèchent le sel sur les galets.","Îles basses et herbeuses sur une mer grise, yourtes blanches, juments au piquet ; une barque fait la navette avec des outres.","Citernes creusées et couvertes de feutre, juments pansées qui attendent leur tour, chiens de berger sur les crêtes ; on chante en tirant l'eau.","Chaque île a son enclos et sa citerne ; des rangs de juments bues et peignées attendent en file, la tête tournée vers l'outre qu'on apporte."],
 "pm":"Folie","pp":"Raison"}
```

```json
[
{"id":"ANT217-moins-1","zone":"ANT217","pole":"-","palier":1,"nom":"L'Eau de mer bue","cout":1,"cible":1,
 "effet":"Une Jument assoiffée rejoint le combat : 4 PV, frappe 4. 2 dégâts à la cible.",
 "ops":[["invoque","Jument assoiffée",4,4],["deg","cible",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts"],
 "ambiance":"Les juments burent la mer longuement, puis levèrent la tête et regardèrent le large.",
 "budget":"10,0 / 10,0 (+0 %), recalculé par le critique"},
{"id":"ANT217-moins-2","zone":"ANT217","pole":"-","palier":2,"nom":"La Jument de sel","cout":1,"cible":1,
 "effet":"Une Jument de sel rejoint le combat : 6 PV, frappe 6. 3 dégâts à la cible. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Jument de sel",6,6],["deg","cible",3],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Sa robe avait blanchi de sel jusqu'au garrot ; elle mordait ses propres flancs quand elle avait soif.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT217-moins-3","zone":"ANT217","pole":"-","palier":3,"nom":"Les Rameurs mordus","cout":1,"cible":1,
 "effet":"Si la cible frappe fort ou piétine, 8 dégâts à la cible. Une Jument mordeuse rejoint le combat : 6 PV, frappe 7. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","pietine",[["deg","cible",8]]],["invoque","Jument mordeuse",6,7],["prixBete",3]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Les rameurs du noyon montraient leurs avant-bras au retour ; on y comptait les dents mieux que les rames.",
 "budget":"14,5 / 15,0 (-3 %), recalculé par le critique"},
{"id":"ANT217-moins-4","zone":"ANT217","pole":"-","palier":4,"nom":"L'Étalon qui nage","cout":2,"cible":1,
 "effet":"L'Étalon de mer rejoint le combat : 10 PV, frappe 9. 12 dégâts à la cible. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Étalon de mer",10,9],["deg","cible",12],["prixBete",3]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"L'étalon nageait d'île en île et ne prenait pied que pour se battre.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ANT217-moins-5","zone":"ANT217","pole":"-","palier":5,"nom":"La Harde en cercle","cout":2,"cible":0,
 "effet":"Deux Juments de sel rejoignent le combat (6 PV, frappe 6) ; 6 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Jument de sel",6,6],["invoque","Jument de sel",6,6],["deg","tous",6],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"La harde tournait autour de l'archipel sans aborder, comme une garde qui a perdu son roi.",
 "budget":"35,2 / 32,0 (+10 %), recalculé par le critique"},
{"id":"ANT217-moins-6","zone":"ANT217","pole":"-","palier":6,"nom":"La Barque du noyon","cout":1,"cible":1,
 "effet":"Une Jument folle rejoint le combat : 8 PV, frappe 8. 8 dégâts à la cible ; si elle frappe fort ou piétine, 6 de plus. Prix : votre bête la plus faible perd 4 PV.",
 "ops":[["invoque","Jument folle",8,8],["deg","cible",8],["si","pietine",[["deg","cible",6]]],["prixBete",4]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Temürbaatar repartit de nuit, par une barque de pêcheur, et fit écrire au khan que les juments se portaient bien.",
 "budget":"23 / 22,5 (+2 %)"},
{"id":"ANT217-moins7","zone":"ANT217","pole":"-","palier":7,"nom":"La Harde dans la mer","cout":2,"cible":1,
 "effet":"Les juments prennent la mer. La Harde de sel rejoint le combat (14 PV, frappe 14) ; 18 dégâts à la cible ; 4 à tous. Pose Sang. Si Abîme (consommée) : 30 dégâts à la cible. Prix : votre bête la plus faible perd 6 PV.",
 "ops":[["invoque","Harde de sel",14,14],["deg","cible",18],["deg","tous",4],["pose","Sang"],["reveil","Abîme",true,[["deg","cible",30]]],["prixBete",6]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Combo","Pose Sang","Réveil Abîme","Prix"],
 "ambiance":"Au large, les pêcheurs voient parfois passer des crinières blanches, cap sur la steppe.",
 "budget":"48,8 sans combo ; réveil +30 (61 %)"},
{"id":"ANT217-plus-1","zone":"ANT217","pole":"+","palier":1,"nom":"Le Chien d'Oyuun","cout":1,"cible":0,
 "effet":"Un Chien de berger rejoint le combat : 6 PV, frappe 2. Piochez 1 carte.",
 "ops":[["invoque","Chien de berger",6,2],["pioche",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Pioche"],
 "ambiance":"Le chien d'Oyuun nageait devant la barque et aboyait aux juments ; elles le laissaient approcher, lui.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT217-plus-2","zone":"ANT217","pole":"+","palier":2,"nom":"Les Noms des pâturages","cout":1,"cible":0,
 "effet":"Piochez 2 cartes ; si un ennemi s'apprête à se soigner, piochez 1 de plus. Vos alliés gagnent 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["si","soinEnnemi",[["pioche",1]]],["garde","allies",4],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Garde","Pioche","Condition","Prix"],
 "ambiance":"Oyuun chantait les pâturages un par un ; les juments dressaient l'oreille aux noms connus.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"ANT217-plus-3","zone":"ANT217","pole":"+","palier":3,"nom":"La Jument bue","cout":1,"cible":0,
 "effet":"La Jument d'Oyuun rejoint le combat : 16 PV, frappe 3. Piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Jument d'Oyuun",16,3],["pioche",1],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Pioche","Prix"],
 "ambiance":"Une jument but à l'outre, s'ébroua, puis suivit la vieille jusqu'au rivage sans qu'on la tienne.",
 "budget":"14,5 / 15 (−3 %)"},
{"id":"ANT217-plus-4","zone":"ANT217","pole":"+","palier":4,"nom":"La Citerne de l'île","cout":2,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 10 dégâts à la cible. Piochez 2 cartes ; vos alliés gagnent 12 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["deg","cible",10]]],["pioche",2],["garde","allies",12],["prixPV",2]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Garde","Pioche","Condition","Prix"],
 "ambiance":"On creusa la citerne au pic, dans la roche, et on la couvrit de feutre contre le sel des embruns.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"ANT217-plus-5","zone":"ANT217","pole":"+","palier":5,"nom":"Le Hongre de bât","cout":2,"cible":0,
 "effet":"Le Hongre de bât rejoint le combat : 22 PV, frappe 4. Piochez 2 cartes ; vos alliés gagnent 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Hongre de bât",22,4],["pioche",2],["garde","allies",6],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Pioche","Prix"],
 "ambiance":"Le hongre portait les outres d'île en île, une à chaque flanc, et ne buvait qu'après les juments.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ANT217-plus-6","zone":"ANT217","pole":"+","palier":6,"nom":"Le Chant compté","cout":1,"cible":1,
 "effet":"Piochez 3 cartes ; si un ennemi s'apprête à se soigner, 12 dégâts à la cible. Le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",3],["si","soinEnnemi",[["deg","cible",12]]],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Oyuun comptait l'eau par couplets : tant de vers pour une jument, tant pour un poulain, jamais un de plus.",
 "budget":"21,0 / 22,5 (-7 %), recalculé par le critique"},
{"id":"ANT217-plus7","zone":"ANT217","pole":"+","palier":7,"nom":"Les Enclos de l'archipel","cout":2,"cible":0,
 "effet":"Chaque île a son enclos. Piochez 3 ; alliés +14 de garde ; la Jument de tête rejoint le combat (24 PV, frappe 6). Pose Sceau. Si Sang (consommée) : piochez 2, alliés soignés de 14. Prix : ennemis +3 de garde.",
 "ops":[["pioche",3],["garde","allies",14],["invoque","Jument de tête",24,6],["pose","Sceau"],["reveil","Sang",true,[["pioche",2],["soin","allies",14]]],["ennemiGarde",3]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Garde","Soin","Pioche","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Le khan reçut une jument des îles, peignée et docile ; personne ne sut dire qui l'avait dressée.",
 "budget":"43,8 sans combo ; réveil +29 (66 %)"}
]
```

---

## 5. Statio Ursaria, le Poste des Ours (ANT166) — Antre · Glacier · Glace · Romaine

Recette du récit : l'inventaire de ruine (un collier, une cage, un registre, des traces). Recette du −7 : l'ordre carcéral (herses, cages, bêtes enchaînées sous une statue) ; du +7 : la foule de bêtes (le glacier rendu aux ours et aux aigles, les gardiens qui suivent sans armes).

**Tyrannie (−)** : le collier de bronze → l'ours à la chaîne → le registre des envois → le loup muselé → la herse du col → l'aigle aveuglé → le Procurateur de glace. Fil mécanique : affaiblissement à chaque carte (la chaîne), bêtes enchaînées qui souffrent pour vous, condition « une carte a déjà été défaussée en prix ce tour » (le registre exige son dû) ; prix : défausse et votre bête la plus faible.
**Liberté (+)** : la porte de la cage → l'aigle lâché → le verrou intact → l'ours qui monte → les gardiens sans armes → la piste pieds nus → le Col ouvert. Fil mécanique : bêtes lâchées à chaque palier, récupération (ce qui était pris revient), mana de Glace, condition « c'est au moins votre troisième carte du tour » (3 cartes) ; prix : défausse, PV, garde ennemie.

```json
{"fiche":"ANT166","nom":"Statio Ursaria, le Poste des Ours",
 "recit":"Trouvé au poste du col : un collier de bronze gravé « Je suis à Gaius Varenus, procurateur. Si je m'enfuis, rends-moi au poste », serré autour d'un crâne d'ours ; une cage de mélèze, porte ouverte, verrou intact ; le registre des envois à l'arène de la ville, ours, aigles, loups, dont la dernière ligne porte les noms des gardiens eux-mêmes ; et, prises dans la glace du col, les pistes d'un ours et d'un homme pieds nus, côte à côte, qui montent.",
 "pal":["Le col fermé de herses et de cages ; ours enchaînés aux pieux de glace, aigles aveuglés sur leurs perchoirs, et la statue du procurateur qui barre le passage.","Cages empilées sur le glacier, chaînes gelées dans la neige, gardiens emmitouflés autour d'un brasero ; un chariot d'envoi attend son chargement.","Un poste de pierres sèches au pied du glacier, enclos de pieux, cages vides ; un sentier monte vers le col entre des murs de glace bleue.","Portes de cages ouvertes, chaînes coupées pendues aux pieux ; des traces de pattes partent vers le haut, et les gardiens ne les suivent pas encore.","Les cages rouillent ouvertes dans la neige ; ours et aigles vont et viennent sur le glacier, et les gardiens montent le col sans armes, derrière les bêtes."],
 "pm":"Tyrannie","pp":"Liberté"}
```

```json
[
{"id":"ANT166-moins-1","zone":"ANT166","pole":"-","palier":1,"nom":"Le Collier de bronze","cout":1,"cible":1,
 "effet":"La cible perd 2 d'attaque ; 4 dégâts à la cible.",
 "ops":[["affaiblit","cible",2],["deg","cible",4]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Affaiblissement"],
 "ambiance":"Le bronzier gravait la formule d'avance sur tous les colliers, pour des bêtes encore libres.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT166-moins-2","zone":"ANT166","pole":"-","palier":2,"nom":"L'Ours à la chaîne","cout":1,"cible":1,
 "effet":"Un Ours enchaîné rejoint le combat : 14 PV, frappe 4. La cible perd 1 d'attaque. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["invoque","Ours enchaîné",14,4],["affaiblit","cible",1],["prixBete",3]],
 "tags":["Antre","Glace","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"L'ours tournait autour du pieu, toujours dans le même sens ; la neige en gardait le cercle.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT166-moins-3","zone":"ANT166","pole":"-","palier":3,"nom":"Le Registre des envois","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, la cible perd 2 d'attaque. Puis elle en perd 1 ; 3 dégâts à la cible ; piochez 2 cartes. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["affaiblit","cible",2]]],["affaiblit","cible",1],["deg","cible",3],["pioche",2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Affaiblissement","Pioche","Condition","Prix"],
 "ambiance":"Le registre ne connaissait que les têtes envoyées ; les bêtes mortes en route y figuraient comme livrées.",
 "budget":"14 / 15 (−7 %)"},
{"id":"ANT166-moins-4","zone":"ANT166","pole":"-","palier":4,"nom":"Le Loup muselé","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 10 dégâts à la cible. Un Loup muselé rejoint le combat (10 PV, frappe 6) ; tous les ennemis perdent 1 d'attaque ; 6 dégâts à la cible. Prix : défaussez 1 carte.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["invoque","Loup muselé",10,6],["affaiblit","tous",1],["deg","cible",6],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"La muselière de fer était trop petite pour un loup adulte ; on prenait donc les louveteaux, qui grandissaient dedans.",
 "budget":"28,6 / 28 (+2 %)"},
{"id":"ANT166-moins-5","zone":"ANT166","pole":"-","palier":5,"nom":"La Herse du col","cout":2,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, la cible perd 2 d'attaque. Tous les ennemis perdent 2 d'attaque ; 10 dégâts à la cible ; le héros gagne 8 de garde. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","defausseAPrix",[["affaiblit","cible",2]]],["affaiblit","tous",2],["deg","cible",10],["garde","heros",8],["prixBete",3]],
 "tags":["Antre","Glace","Pôle −","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Varenus fit poser une herse au sommet du col ; elle ne fermait rien que la neige ne fermât déjà.",
 "budget":"29,6 / 32 (−7 %)"},
{"id":"ANT166-moins-6","zone":"ANT166","pole":"-","palier":6,"nom":"L'Aigle aveuglé","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, 8 dégâts à la cible. Un Aigle aveuglé rejoint le combat (6 PV, frappe 7) ; la cible perd 2 d'attaque. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["deg","cible",8]]],["invoque","Aigle aveuglé",6,7],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"On cousait les paupières des aigles pour le voyage ; à l'arène, on coupait le fil.",
 "budget":"20,5 / 22,5 (−9 %)"},
{"id":"ANT166-moins7","zone":"ANT166","pole":"-","palier":7,"nom":"Le Procurateur de glace","cout":2,"cible":1,
 "effet":"Le col se ferme. Tous les ennemis perdent 3 d'attaque ; l'Ours de l'arène rejoint le combat (22 PV, frappe 9) ; 8 dégâts. Pose Sang. Si Givre (consommée) : tous perdent 2 d'attaque, 16 dégâts à la cible. Prix : votre bête la plus faible perd 6 PV.",
 "ops":[["affaiblit","tous",3],["invoque","Ours de l'arène",22,9],["deg","cible",8],["pose","Sang"],["reveil","Givre",true,[["affaiblit","tous",2],["deg","cible",16]]],["prixBete",6]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"La statue de Varenus tient toujours le col ; le gel lui a fendu le bras qui tendait la chaîne.",
 "budget":"46,3 sans combo ; réveil +29,2 (63 %)"},
{"id":"ANT166-plus-1","zone":"ANT166","pole":"+","palier":1,"nom":"La Porte de la cage","cout":1,"cible":0,
 "effet":"Récupérez la dernière carte de la défausse ; +1 mana de Glace ; le héros gagne 4 de garde.",
 "ops":[["recup"],["mana","Glace",1],["garde","heros",4]],
 "tags":["Antre","Glace","Pôle +","Garde","Récupération","Mana"],
 "ambiance":"La porte de mélèze tourna sur ses gonds sans grincer ; quelqu'un les avait graissés au suif, la veille.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ANT166-plus-2","zone":"ANT166","pole":"+","palier":2,"nom":"L'Aigle lâché","cout":1,"cible":1,
 "effet":"Un Aigle lâché rejoint le combat : 6 PV, frappe 6. Si c'est au moins votre troisième carte du tour, 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Aigle lâché",6,6],["si","troisCartes",[["deg","cible",6]]],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"L'aigle resta longtemps sur le toit du poste, la tête tournée vers l'intérieur, avant de comprendre.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT166-plus-3","zone":"ANT166","pole":"+","palier":3,"nom":"Le Verrou intact","cout":1,"cible":0,
 "effet":"Récupérez la dernière carte de la défausse ; +2 mana de Glace. Un Chamois du col rejoint le combat : 8 PV, frappe 3. Prix : le héros perd 2 PV.",
 "ops":[["recup"],["mana","Glace",2],["invoque","Chamois du col",8,3],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Récupération","Mana","Prix"],
 "ambiance":"Le verrou de la cage est intact et la porte ouverte : on l'avait ouverte avec la clé du procurateur.",
 "budget":"16,5 / 15 (+10 %)"},
{"id":"ANT166-plus-4","zone":"ANT166","pole":"+","palier":4,"nom":"L'Ours qui monte","cout":2,"cible":1,
 "effet":"L'Ours du col rejoint le combat : 20 PV, frappe 7. Piochez 1 carte ; si c'est au moins votre troisième carte du tour, 10 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Ours du col",20,7],["pioche",1],["si","troisCartes",[["deg","cible",10]]],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Libéré, l'ours ne descendit pas vers les villages : il monta vers la glace.",
 "budget":"27,5 / 28,0 (-2 %), recalculé par le critique"},
{"id":"ANT166-plus-5","zone":"ANT166","pole":"+","palier":5,"nom":"Les Gardiens sans armes","cout":2,"cible":0,
 "effet":"Récupérez la dernière carte de la défausse ; +2 mana de Glace. Un Gardien affranchi rejoint le combat (16 PV, frappe 5) ; vos alliés gagnent 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["recup"],["mana","Glace",2],["invoque","Gardien affranchi",16,5],["garde","allies",6],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Garde","Récupération","Mana","Prix"],
 "ambiance":"Les gardiens lurent leurs noms au bas du registre, posèrent leurs lances et prirent le sentier.",
 "budget":"29,7 / 32 (−7 %)"},
{"id":"ANT166-plus-6","zone":"ANT166","pole":"+","palier":6,"nom":"La Piste pieds nus","cout":1,"cible":1,
 "effet":"Un Loup lâché rejoint le combat : 10 PV, frappe 7. Récupérez la dernière carte de la défausse ; si c'est au moins votre troisième carte du tour, 8 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Loup lâché",10,7],["recup"],["si","troisCartes",[["deg","cible",8]]],["prixPV",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Récupération","Condition","Prix"],
 "ambiance":"L'homme marchait pieds nus ; la glace a gardé ses orteils mieux que son nom.",
 "budget":"21,5 / 22,5 (−4 %)"},
{"id":"ANT166-plus7","zone":"ANT166","pole":"+","palier":7,"nom":"Le Col ouvert","cout":2,"cible":1,
 "effet":"Les bêtes passent devant. L'Ours-roi (26 PV, frappe 8) et l'Aigle des neiges (10 PV, frappe 8) arrivent ; récupérez une carte ; +2 mana de Glace. Pose Racine. Si Abîme (consommée) : 22 dégâts, piochez 2. Prix : défaussez 1 carte.",
 "ops":[["invoque","Ours-roi du col",26,8],["invoque","Aigle des neiges",10,8],["recup"],["mana","Glace",2],["pose","Racine"],["reveil","Abîme",true,[["deg","cible",22],["pioche",2]]],["prixDefausse",1]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Pioche","Récupération","Mana","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Au col, les marchands croisent maintenant des ours qui ne fuient pas, et des hommes sans armes qui les suivent.",
 "budget":"49 sans combo ; réveil +30 (61 %)"}
]
```

---

## 6. L'Anjoman des Vannes de Nayzar (ASS118) — Assemblée · Marais · Sève · Perse

Recette du récit : le procès-verbal de séance. Recette du −7 : la noyade lente (la salle du conseil prise par les roseaux, les vannes soudées) ; du +7 : l'ordre mécanique (des vannes qui s'ouvrent seules au son d'une cloche).

**Rouille (−)** : Loi de la vanne grippée → Loi du graissage refusé → Loi de l'eau rouge → Loi des gonds → Loi de la crue reportée → Loi des bancs sur le toit → le Vote sous l'eau. Fil mécanique : Lois de brûlure (la rouille ronge tour après tour), garde ennemie qui tombe (3 cartes), affaiblissement (2), condition « la cible a de la garde » ; prix : PV, défausse, garde ennemie.
**Or (+)** : Loi de la feuille d'or → Loi du donateur honoré → Loi du trésorier → Loi des vannes dorées → Loi du rachat → Loi de l'unanimité moins une voix → la Cloche des vannes. Fil mécanique : Lois de récupération (on rachète ce qu'on a perdu), mana de Sève, garde des alliés, condition « le héros est sous la moitié de ses PV » ; prix : défausse, PV, garde et soin ennemis.

```json
{"fiche":"ASS118","nom":"L'Anjoman des Vannes de Nayzar",
 "recit":"Procès-verbal de l'anjoman de Nayzar, séance des eaux basses. Ordre du jour : les vannes de fer offertes par le satrape, qui ne tournent plus. Proposition du doyen Farhad : les graisser. Proposition du trésorier : les dorer, pour honorer le donateur, attendu à la saison sèche. Débat sur le prix de l'or, puis sur la loyauté du doyen. Autre point : la crue. Reporté, l'assemblée n'ayant plus pied. Décision : la dorure, adoptée à l'unanimité moins une voix, les bancs ayant été montés sur le toit.",
 "pal":["Le marais a pris la salle du conseil : roseaux entre les bancs, vannes soudées par la rouille en murailles brunes, et l'eau qui monte sans bruit.","Vannes grippées couleur de sang séché, canaux envasés, barques échouées dans les roseaux ; des bancs de conseil empilés sur les toits.","Marais de roseaux et de canaux droits, maisons de brique crue sur des buttes, vannes de fer aux écluses ; une salle à coupole basse.","Vannes graissées, puis dorées à la feuille par-dessus ; les canaux se vident à heure fixe, les rizières sortent de l'eau.","Vannes dorées qui s'ouvrent seules au son d'une cloche ; des barques de conseillers défilent sur des canaux au cordeau, pas une goutte où il ne faut pas."],
 "pm":"Rouille","pp":"Or"}
```

```json
[
{"id":"ASS118-moins-1","zone":"ASS118","pole":"-","palier":1,"nom":"Loi de la vanne grippée","cout":1,"cible":1,
 "effet":"Loi de la vanne grippée : la cible brûle de 2 pendant 3 tours ; si elle a de la garde, 4 dégâts. Puis 2 dégâts à la cible.",
 "ops":[["brulure","cible",2,3],["si","cibleGarde",[["deg","cible",4]]],["deg","cible",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Condition"],
 "ambiance":"Le doyen Farhad appuya de tout son poids sur la manivelle ; elle céda, la vanne non.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS118-moins-2","zone":"ASS118","pole":"-","palier":2,"nom":"Loi du graissage refusé","cout":1,"cible":1,
 "effet":"Loi du graissage refusé : si la cible a de la garde, elle tombe. Tous les ennemis brûlent de 1 pendant 3 tours ; 4 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["brulure","tous",1,3],["deg","cible",4],["prixPV",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Perce-garde","Condition","Prix"],
 "ambiance":"Le suif coûtait peu, mais il fallait le voter ; le trésorier fit observer qu'on ne graisse pas un présent.",
 "budget":"11,1 / 12,5 (−11 %)"},
{"id":"ASS118-moins-3","zone":"ASS118","pole":"-","palier":3,"nom":"Loi de l'eau rouge","cout":1,"cible":1,
 "effet":"Loi de l'eau rouge : la cible brûle de 3 pendant 4 tours et perd 1 d'attaque ; 3 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",3,4],["affaiblit","cible",1],["deg","cible",3],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Affaiblissement","Prix"],
 "ambiance":"Au bas des vannes, l'eau rouillait ; on disait que les poissons y rougissaient de honte.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ASS118-moins-4","zone":"ASS118","pole":"-","palier":4,"nom":"Loi des gonds","cout":2,"cible":1,
 "effet":"Loi des gonds : si la cible a de la garde, 10 dégâts. Puis sa garde tombe ; tous les ennemis brûlent de 2 pendant 3 tours ; 6 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["briseGarde","cible"],["brulure","tous",2,3],["deg","cible",6],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Perce-garde","Condition","Prix"],
 "ambiance":"Les gonds rongés lâchèrent en pleine séance ; on vota la remise en place de la vanne.",
 "budget":"25,2 / 28 (−10 %)"},
{"id":"ASS118-moins-5","zone":"ASS118","pole":"-","palier":5,"nom":"Loi de la crue reportée","cout":2,"cible":1,
 "effet":"Loi de la crue reportée : si la cible a de la garde, 6 dégâts. Tous les ennemis brûlent de 3 pendant 3 tours et perdent 1 d'attaque ; 8 dégâts à la cible. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",6]]],["brulure","tous",3,3],["affaiblit","tous",1],["deg","cible",8],["ennemiGarde",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"La crue passa d'un ordre du jour au suivant ; l'eau, elle, n'attendit pas.",
 "budget":"33,4 / 32 (+4 %)"},
{"id":"ASS118-moins-6","zone":"ASS118","pole":"-","palier":6,"nom":"Loi des bancs sur le toit","cout":1,"cible":1,
 "effet":"Loi des bancs sur le toit : la garde de la cible tombe ; elle brûle de 4 pendant 4 tours ; 2 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","cible"],["brulure","cible",4,4],["deg","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Perce-garde","Pioche","Prix"],
 "ambiance":"On hissa les bancs sur le toit avec des cordes de chanvre ; le banc du trésorier monta le premier.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"ASS118-moins7","zone":"ASS118","pole":"-","palier":7,"nom":"Le Vote sous l'eau","cout":2,"cible":1,
 "effet":"L'anjoman siège noyé. Tous les ennemis brûlent de 5 pendant 3 tours ; 14 dégâts à la cible. Pose Braise. Si Sceau (consommée) : tous brûlent de 4 pendant 3 tours de plus ; piochez 1. Prix : le héros perd 4 PV.",
 "ops":[["brulure","tous",5,3],["deg","cible",14],["pose","Braise"],["reveil","Sceau",true,[["brulure","tous",4,3],["pioche",1]]],["prixPV",4]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Brûlure","Pioche","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"On vote encore à Nayzar, dans l'eau jusqu'à la ceinture ; seules les mains levées sont sèches.",
 "budget":"43 sans combo ; réveil +30,4 (71 %)"},
{"id":"ASS118-plus-1","zone":"ASS118","pole":"+","palier":1,"nom":"Loi de la feuille d'or","cout":1,"cible":0,
 "effet":"Loi de la feuille d'or : récupérez la dernière carte de la défausse ; +1 mana de Sève ; vos alliés gagnent 2 de garde.",
 "ops":[["recup"],["mana","Sève",1],["garde","allies",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Garde","Récupération","Mana"],
 "ambiance":"La feuille d'or arriva roulée dans un roseau creux ; le doreur la posait d'un souffle.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"ASS118-plus-2","zone":"ASS118","pole":"+","palier":2,"nom":"Loi du donateur honoré","cout":1,"cible":0,
 "effet":"Loi du donateur honoré : récupérez une carte ; piochez 1 carte ; si le héros est sous la moitié de ses PV, il se soigne de 6. Le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["recup"],["pioche",1],["si","blesse",[["soin","heros",6]]],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Garde","Soin","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Le satrape ne vint pas à la saison sèche ; on laissa la dorure en place, au cas où.",
 "budget":"12,2 / 12,5 (-2 %), recalculé par le critique"},
{"id":"ASS118-plus-3","zone":"ASS118","pole":"+","palier":3,"nom":"Loi du trésorier","cout":1,"cible":0,
 "effet":"Loi du trésorier : +2 mana de Sève ; piochez 1 carte ; récupérez une carte ; vos alliés gagnent 5 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Sève",2],["pioche",1],["recup"],["garde","allies",5],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Garde","Pioche","Récupération","Mana","Prix"],
 "ambiance":"Le trésorier tenait les comptes de l'or sur une tablette de cire, qu'il emportait chez lui chaque soir.",
 "budget":"17 / 15 (+13 %)"},
{"id":"ASS118-plus-4","zone":"ASS118","pole":"+","palier":4,"nom":"Loi des vannes dorées","cout":2,"cible":1,
 "effet":"Loi des vannes dorées : récupérez une carte ; le héros gagne 12 de garde ; 10 dégâts à la cible ; si le héros est sous la moitié de ses PV, piochez 2 cartes. Prix : le héros perd 2 PV.",
 "ops":[["recup"],["garde","heros",12],["deg","cible",10],["si","blesse",[["pioche",2]]],["prixPV",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Garde","Pioche","Récupération","Condition","Prix"],
 "ambiance":"Dorées, les vannes brillaient sous la vase ; on les voyait des barques, et nul ne les atteignait.",
 "budget":"25,6 / 28,0 (-9 %), recalculé par le critique"},
{"id":"ASS118-plus-5","zone":"ASS118","pole":"+","palier":5,"nom":"Loi du rachat","cout":2,"cible":0,
 "effet":"Loi du rachat : récupérez une carte et piochez 2 ; +2 mana de Sève ; vos alliés se soignent de 6 et gagnent 8 de garde. Prix : chaque ennemi se soigne de 2.",
 "ops":[["recup"],["pioche",2],["mana","Sève",2],["soin","allies",6],["garde","allies",8],["ennemiSoin",2]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Garde","Soin","Pioche","Récupération","Mana","Prix"],
 "ambiance":"Les familles noyées rachetèrent leurs buttes au prix de l'or des vannes.",
 "budget":"32,2 / 32 (+1 %)"},
{"id":"ASS118-plus-6","zone":"ASS118","pole":"+","palier":6,"nom":"Loi de l'unanimité moins une voix","cout":1,"cible":1,
 "effet":"Loi de l'unanimité moins une voix : si le héros est sous la moitié de ses PV, il se soigne de 10. Récupérez une carte ; piochez 2 ; 6 dégâts à la cible. Prix : défaussez 1 carte.",
 "ops":[["si","blesse",[["soin","heros",10]]],["recup"],["pioche",2],["deg","cible",6],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Soin","Pioche","Récupération","Condition","Prix"],
 "ambiance":"La voix contre était celle de Farhad ; le procès-verbal la note d'une écriture plus petite que les autres.",
 "budget":"20,0 / 22,5 (-11 %), recalculé par le critique"},
{"id":"ASS118-plus7","zone":"ASS118","pole":"+","palier":7,"nom":"La Cloche des vannes","cout":2,"cible":0,
 "effet":"L'or fait tourner l'eau. Récupérez une carte ; piochez 2 ; +2 mana de Sève ; alliés +16 de garde, soignés de 8. Pose Sceau. Si Braise (consommée) : piochez 2, +2 mana de Sève, alliés +12 de garde. Prix : ennemis soignés de 2.",
 "ops":[["recup"],["pioche",2],["mana","Sève",2],["garde","allies",16],["soin","allies",8],["pose","Sceau"],["reveil","Braise",true,[["pioche",2],["mana","Sève",2],["garde","allies",12]]],["ennemiSoin",2]],
 "tags":["Assemblée","Sève","Forme ultime +7","Garde","Soin","Pioche","Récupération","Mana","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"Au son de la cloche, les vannes s'ouvrent ensemble ; personne ne sait plus qui tire la corde.",
 "budget":"44,8 sans combo ; réveil +28,4 (63 %)"}
]
```

---

## 7. Le Khural de Davs-Ulaan (ASS101) — Assemblée · Désert de sel · Pierre · Mongole

Recette du récit : la sentence et ce qu'il en advint. Recette du −7 : la dispersion (les cercles de pierres noircies, chacun qui s'éloigne seul) ; du +7 : le geste (la braise passée de main en main autour d'un feu unique).

**Exil (−)** : Loi de la nuit des loups → Loi du cheval et de l'outre → Loi du soufflet → Loi de la croûte de sel → Loi du banni seul → Loi des cercles noircis → la Plaine sans feu. Fil mécanique : Lois qui s'exilent après usage (comme le condamné, elles ne reviennent pas ce combat), gros coups ciblés, un peu de dégâts à tous, la garde ignorée ou brisée sur 2 cartes, condition « il ne reste qu'un ennemi » ; prix : l'exil de la Loi, et des PV à la forme ultime.
**Foyer (+)** : Loi de la bouse sèche → Loi de la braise passée → Loi du chien de yourte → Loi du feu à mi-chemin → Loi du soufflet rendu → Loi des feutres serrés → le Feu unique. Fil mécanique : mana de Pierre à chaque Loi (le combustible qu'on se passe), soin du héros, pioche, condition « une bête est en jeu » (le chien et le chameau du camp) ; prix : défausse, PV, garde et soin ennemis.

```json
{"fiche":"ASS101","nom":"Le Khural de Davs-Ulaan",
 "recit":"Sentence du khural sur le sel de Davs-Ulaan : Batu le forgeron, pour avoir laissé mourir le feu du clan pendant la nuit des loups, est banni sur la croûte avec un cheval, une outre et son soufflet, qu'on ne savait à qui donner. L'hiver suivant, une fumée monta au milieu du sel. Batu y avait rallumé un feu à la bouse de son cheval, et des familles allèrent s'y chauffer, puis d'autres. Le khural siège depuis à mi-chemin des feux, pour ne froisser personne.",
 "pal":["Plaine de sel nue jusqu'au bout du ciel, yourtes démontées, cercles de pierres noircies là où brûlaient les feux ; des cavaliers s'éloignent, chacun seul.","Croûte de sel craquelée, campements épars et petits, feux couverts de cendre ; une piste de sabots part vers le milieu de la plaine.","Désert de sel rose et blanc, yourtes en cercle autour d'un feu de bouse, chameaux couchés ; la tente du khural au bord du campement.","Les campements se rapprochent, fumées mêlées, chiens qui passent d'un feu à l'autre ; la tente du khural plantée à mi-chemin.","Un seul feu immense au milieu du sel, yourtes serrées feutre contre feutre tout autour ; on se passe les braises de main en main jusqu'au bord."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ASS101-moins-1","zone":"ASS101","pole":"-","palier":1,"nom":"Loi de la nuit des loups","cout":1,"cible":1,
 "effet":"Loi de la nuit des loups : s'il ne reste qu'un ennemi, 4 dégâts à la cible. Puis 8 dégâts à la cible.",
 "ops":[["si","seul",[["deg","cible",4]]],["deg","cible",8]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Condition"],
 "ambiance":"Cette nuit-là, Batu veillait le feu ; il entendit les loups et sortit voir, le soufflet encore à la main.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS101-moins-2","zone":"ASS101","pole":"-","palier":2,"nom":"Loi du cheval et de l'outre","cout":1,"cible":1,
 "effet":"Loi du cheval et de l'outre : s'il ne reste qu'un ennemi, 6 dégâts à la cible. Puis 12 dégâts à la cible. Prix : la carte s'exile.",
 "ops":[["si","seul",[["deg","cible",6]]],["deg","cible",12],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Condition","Exil","Prix"],
 "ambiance":"Le khural lui laissa un cheval et une outre : ainsi, sa mort ne serait pas un meurtre.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS101-moins-3","zone":"ASS101","pole":"-","palier":3,"nom":"Loi du soufflet","cout":1,"cible":1,
 "effet":"Loi du soufflet : les dégâts de cette carte ignorent la garde. 12 dégâts à la cible ; s'il ne reste qu'un ennemi, 6 de plus. Prix : la carte s'exile.",
 "ops":[["ignoreGarde"],["deg","cible",12],["si","seul",[["deg","cible",6]]],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Perce-garde","Condition","Exil","Prix"],
 "ambiance":"Personne ne voulut du soufflet d'un forgeron maudit ; on l'attacha à la selle du banni.",
 "budget":"15 / 15 (+0 %)"},
{"id":"ASS101-moins-4","zone":"ASS101","pole":"-","palier":4,"nom":"Loi de la croûte de sel","cout":2,"cible":1,
 "effet":"Loi de la croûte de sel : 8 dégâts à tous les ennemis ; 14 dégâts à la cible. Prix : la carte s'exile.",
 "ops":[["deg","tous",8],["deg","cible",14],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Exil","Prix"],
 "ambiance":"Sur la croûte, les sabots ne laissent pas de trace ; on ne suit pas un banni, on l'oublie.",
 "budget":"28,6 / 28 (+2 %)"},
{"id":"ASS101-moins-5","zone":"ASS101","pole":"-","palier":5,"nom":"Loi du banni seul","cout":2,"cible":1,
 "effet":"Loi du banni seul : s'il ne reste qu'un ennemi, 14 dégâts à la cible. La garde de la cible tombe ; 20 dégâts à la cible ; piochez 1 carte. Prix : la carte s'exile.",
 "ops":[["si","seul",[["deg","cible",14]]],["briseGarde","cible"],["deg","cible",20],["pioche",1],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Perce-garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"Batu marcha jusqu'à ce que le campement ne soit plus qu'une fumée, puis plus rien.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS101-moins-6","zone":"ASS101","pole":"-","palier":6,"nom":"Loi des cercles noircis","cout":1,"cible":1,
 "effet":"Loi des cercles noircis : 6 dégâts à tous les ennemis ; 8 dégâts à la cible ; piochez 1 carte. Prix : la carte s'exile.",
 "ops":[["deg","tous",6],["deg","cible",8],["pioche",1],["exil"]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Pioche","Exil","Prix"],
 "ambiance":"Là où l'on plie une yourte reste un rond de pierres noires ; le sel les garde des années.",
 "budget":"22,2 / 22,5 (−1 %)"},
{"id":"ASS101-moins7","zone":"ASS101","pole":"-","palier":7,"nom":"La Plaine sans feu","cout":2,"cible":1,
 "effet":"Chacun part seul. 10 dégâts à tous ; 24 à la cible ; piochez 1. Pose Abîme. Si Sceau (consommée) : 13 dégâts à tous. Prix : la carte s'exile et le héros perd 3 PV.",
 "ops":[["deg","tous",10],["deg","cible",24],["pioche",1],["pose","Abîme"],["reveil","Sceau",true,[["deg","tous",13]]],["exil"],["prixPV",3]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Dégâts","Pioche","Exil","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Le khural bannit tant et si bien qu'il ne resta personne pour siéger ; la tente vide claque au vent.",
 "budget":"44 sans combo ; réveil +28,6 (65 %)"},
{"id":"ASS101-plus-1","zone":"ASS101","pole":"+","palier":1,"nom":"Loi de la bouse sèche","cout":1,"cible":0,
 "effet":"Loi de la bouse sèche : +1 mana de Pierre ; le héros se soigne de 3 ; piochez 1 carte.",
 "ops":[["mana","Pierre",1],["soin","heros",3],["pioche",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Soin","Pioche","Mana"],
 "ambiance":"Le cheval de Batu donnait chaque jour de quoi tenir un feu : son seul impôt.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS101-plus-2","zone":"ASS101","pole":"+","palier":2,"nom":"Loi de la braise passée","cout":1,"cible":0,
 "effet":"Loi de la braise passée : +2 mana de Pierre ; si une bête est en jeu, le héros se soigne de 6. Puis il se soigne de 3 ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["si","bete",[["soin","heros",6]]],["soin","heros",3],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"On porte la braise d'une yourte à l'autre dans une louche de fer, en courant.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS101-plus-3","zone":"ASS101","pole":"+","palier":3,"nom":"Loi du chien de yourte","cout":1,"cible":0,
 "effet":"Loi du chien de yourte : un Chien de yourte rejoint le combat (10 PV, frappe 3) ; +1 mana de Pierre ; le héros se soigne de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Chien de yourte",10,3],["mana","Pierre",1],["soin","heros",4],["ennemiGarde",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Invocation","Soin","Mana","Prix"],
 "ambiance":"Les chiens trouvèrent le feu de Batu avant les hommes ; ils revenaient le matin, le poil sentant la fumée.",
 "budget":"14,5 / 15 (−3 %)"},
{"id":"ASS101-plus-4","zone":"ASS101","pole":"+","palier":4,"nom":"Loi du feu à mi-chemin","cout":2,"cible":0,
 "effet":"Loi du feu à mi-chemin : si une bête est en jeu, le héros gagne 10 de garde. +2 mana de Pierre ; piochez 2 ; le héros se soigne de 10. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["garde","heros",10]]],["mana","Pierre",2],["pioche",2],["soin","heros",10],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Garde","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"Le khural planta sa tente entre les feux, à égale distance, et fit mesurer la distance à la corde.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS101-plus-5","zone":"ASS101","pole":"+","palier":5,"nom":"Loi du soufflet rendu","cout":2,"cible":0,
 "effet":"Loi du soufflet rendu : +2 mana de Pierre ; un Chameau de bât rejoint le combat (20 PV, frappe 3) ; le héros se soigne de 8 ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["invoque","Chameau de bât",20,3],["soin","heros",8],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Invocation","Soin","Pioche","Mana","Prix"],
 "ambiance":"On offrit à Batu de lui rendre sa place au clan ; il demanda seulement qu'on lui rende sa forge.",
 "budget":"29,5 / 32 (−8 %)"},
{"id":"ASS101-plus-6","zone":"ASS101","pole":"+","palier":6,"nom":"Loi des feutres serrés","cout":1,"cible":0,
 "effet":"Loi des feutres serrés : si une bête est en jeu, +2 mana de Pierre et piochez 1. +1 mana de Pierre ; le héros se soigne de 10 ; vos alliés gagnent 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","bete",[["mana","Pierre",2],["pioche",1]]],["mana","Pierre",1],["soin","heros",10],["garde","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Garde","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"Les feutres des yourtes se touchaient ; on s'entendait ronfler d'une famille à l'autre.",
 "budget":"20,6 / 22,5 (−8 %)"},
{"id":"ASS101-plus7","zone":"ASS101","pole":"+","palier":7,"nom":"Le Feu unique","cout":2,"cible":0,
 "effet":"Une seule flamme pour tous. +2 mana de Pierre ; soin 18 ; piochez 2 ; le Grand Chien du camp arrive (20 PV, frappe 5). Pose Braise. Si Racine (consommée) : soin 16, +2 mana de Pierre, piochez 2. Prix : ennemis +3 de garde.",
 "ops":[["mana","Pierre",2],["soin","heros",18],["pioche",2],["invoque","Grand Chien du camp",20,5],["pose","Braise"],["reveil","Racine",true,[["soin","heros",16],["mana","Pierre",2],["pioche",2]]],["ennemiGarde",3]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Invocation","Soin","Pioche","Mana","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Le feu de Batu brûle encore au milieu du sel ; on y forge les fers du khural.",
 "budget":"43,5 sans combo ; réveil +30 (69 %)"}
]
```

---

## 8. L'Airecht de Lios Aodha (ASS172) — Assemblée · Canyon · Feu · Celte

Recette du récit : l'interrogatoire. Recette du −7 : le silence social (des gens qui se croisent sans se reconnaître, les encoches rabotées) ; du +7 : la foule (un barde à chaque corniche, qui récite à chaque passant le nom de son grand-père).

**Oubli (−)** : Loi du nom payé → Loi de la lignée tronquée → Loi de la cendre froide → Loi de l'encoche rabotée → Loi de l'amnistie → Loi du passant sans salut → le Canyon muet. Fil mécanique : mana de Feu à chaque Loi (on brûle les bâtons à encoches des dettes et des lignées), dégâts à tous, un peu de soin, condition « le héros est sous la moitié de ses PV » ; prix : l'ennemi oublie aussi ses blessures (il se soigne), défausse, PV.
**Mémoire (+)** : *(Réécrit par le critique, lot 4.)* Loi de la satire → Loi de la joue brûlée → Loi de la lignée chantée → Loi du feu de la corniche → Loi des ennemis payants → Loi du roi de nuit → la Généalogie entière. Fil mécanique : pioche à chaque Loi (les vers reviennent l'un après l'autre), gros coups ciblés, et la satire qui brûle sur la joue (brûlure sur 4 cartes) ; crochet « la cible brûle déjà ». La garde du héros et le crochet `garde` partent : ils recopiaient la Mémoire de CIT035 (D).

```json
{"fiche":"ASS172","nom":"L'Airecht de Lios Aodha",
 "recit":"Devant l'airecht du canyon, on interrogea le barde Cathal Mac Ruaidh. « Pourquoi as-tu cessé de chanter la lignée du roi ? — Il m'a payé pour en oublier un nom. — Lequel ? — Je ne sais plus : il a bien payé. — Et ses ennemis, qui t'ont payé aussi ? — Pour eux, j'ai gardé la satire. Une satire ne s'oublie pas, elle brûle sur la joue. » On renvoya Cathal à son feu, en haut de la corniche. Depuis, le roi ne descend plus le canyon que de nuit, la joue couverte.",
 "pal":["Le canyon muet : encoches rabotées sur les parois, cendres froides au cercle des bardes, et des gens qui se croisent sans savoir qui est qui.","Bâtons à encoches brisés au fond du ravin, feux de corniche éteints çà et là ; les passants baissent la tête devant les parois grattées.","Canyon de grès rouge, corniches habitées, cercle de pierres au fond où se tient l'airecht ; un feu de barde fume en haut de la paroi.","Encoches fraîches sur les parois, feux allumés de corniche en corniche ; on monte écouter les bardes avec du pain et un manteau.","Chaque paroi couverte d'encoches de la base au ciel, un feu à chaque corniche, et des bardes partout qui récitent au passant le nom de son grand-père."],
 "pm":"Oubli","pp":"Mémoire"}
```

```json
[
{"id":"ASS172-moins-1","zone":"ASS172","pole":"-","palier":1,"nom":"Loi du nom payé","cout":1,"cible":1,
 "effet":"Loi du nom payé : +1 mana de Feu ; 7 dégâts à la cible.",
 "ops":[["mana","Feu",1],["deg","cible",7]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Mana"],
 "ambiance":"Le roi paya en génisses ; Cathal les mena paître et, chemin faisant, perdit le nom.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS172-moins-2","zone":"ASS172","pole":"-","palier":2,"nom":"Loi de la lignée tronquée","cout":1,"cible":1,
 "effet":"Loi de la lignée tronquée : si le héros est sous la moitié de ses PV, piochez 1 carte. +2 mana de Feu ; 7 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["pioche",1]]],["mana","Feu",2],["deg","cible",7],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"La lignée récitée sautait désormais un aïeul ; le fils de l'oublié écoutait, au premier rang, et ne disait rien.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS172-moins-3","zone":"ASS172","pole":"-","palier":3,"nom":"Loi de la cendre froide","cout":1,"cible":0,
 "effet":"Loi de la cendre froide : on brûle les bâtons de compte. +1 mana de Feu ; 4 dégâts à tous ; le héros se soigne de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["mana","Feu",1],["deg","tous",4],["soin","heros",4],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Soin","Mana","Prix"],
 "ambiance":"Les bâtons à encoches des dettes brûlèrent au cercle des bardes ; créanciers et débiteurs se chauffèrent ensemble.",
 "budget":"13,6 / 15 (−9 %)"},
{"id":"ASS172-moins-4","zone":"ASS172","pole":"-","palier":4,"nom":"Loi de l'encoche rabotée","cout":2,"cible":0,
 "effet":"Loi de l'encoche rabotée : si le héros est sous la moitié de ses PV, il se soigne de 10. +2 mana de Feu ; 6 dégâts à tous ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["soin","heros",10]]],["mana","Feu",2],["deg","tous",6],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"On rabota les encoches des parois au couteau ; les copeaux allèrent au feu, avec les noms.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ASS172-moins-5","zone":"ASS172","pole":"-","palier":5,"nom":"Loi de l'amnistie","cout":2,"cible":0,
 "effet":"Loi de l'amnistie : +2 mana de Feu ; le héros se soigne de 10 ; 8 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 2.",
 "ops":[["mana","Feu",2],["soin","heros",10],["deg","tous",8],["ennemiSoin",2]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Soin","Mana","Prix"],
 "ambiance":"L'airecht vota l'oubli des querelles ; les clans se serrèrent la main et oublièrent aussi pourquoi.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"ASS172-moins-6","zone":"ASS172","pole":"-","palier":6,"nom":"Loi du passant sans salut","cout":1,"cible":1,
 "effet":"Loi du passant sans salut : si le héros est sous la moitié de ses PV, +2 mana de Feu. +1 mana de Feu ; 10 dégâts à la cible ; le héros gagne 4 de garde ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["mana","Feu",2]]],["mana","Feu",1],["deg","cible",10],["garde","heros",4],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"On se croisait sans se saluer ; on ne savait plus qui avait tué le père de qui.",
 "budget":"20,2 / 22,5 (−10 %)"},
{"id":"ASS172-moins7","zone":"ASS172","pole":"-","palier":7,"nom":"Le Canyon muet","cout":2,"cible":0,
 "effet":"Plus personne ne se connaît. +2 mana de Feu ; 10 dégâts à tous ; soin 18 ; piochez 1. Pose Givre. Si Abîme (consommée) : +2 mana de Feu, 12 dégâts à tous. Prix : chaque ennemi se soigne de 3.",
 "ops":[["mana","Feu",2],["deg","tous",10],["soin","heros",18],["pioche",1],["pose","Givre"],["reveil","Abîme",true,[["mana","Feu",2],["deg","tous",12]]],["ennemiSoin",3]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Soin","Pioche","Mana","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Le roi descend le canyon en plein jour, maintenant ; personne ne le reconnaît, et il en paraît soulagé.",
 "budget":"43,4 sans combo ; réveil +32,4 (75 %)"},
{"id":"ASS172-plus-1","zone":"ASS172","pole":"+","palier":1,"nom":"Loi de la satire","cout":1,"cible":1,
 "effet":"Loi de la satire : piochez 1 carte ; la cible subit 3 dégâts et brûle de 1 pendant 3 tours.",
 "ops":[["pioche",1],["deg","cible",3],["brulure","cible",1,3]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Brûlure"],
 "ambiance":"La satire de Cathal tenait en peu de vers ; un enfant la chanta sous la fenêtre du roi.",
 "budget":"10,0 / 10,0 (+0 %), recalculé par le critique"},
{"id":"ASS172-plus-2","zone":"ASS172","pole":"+","palier":2,"nom":"Loi de la joue brûlée","cout":1,"cible":1,
 "effet":"Loi de la joue brûlée : si la cible brûle déjà, 6 dégâts à la cible. Piochez 1 carte ; 8 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",6]]],["pioche",1],["deg","cible",8],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Une cloque se leva sur la joue du roi au premier vers ; les médecins accusèrent le vent du canyon.",
 "budget":"14,0 / 12,5 (+12 %), recalculé par le critique"},
{"id":"ASS172-plus-3","zone":"ASS172","pole":"+","palier":3,"nom":"Loi de la lignée chantée","cout":1,"cible":1,
 "effet":"Loi de la lignée chantée : piochez 2 cartes ; la cible brûle de 2 pendant 3 tours et subit 4 dégâts. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["brulure","cible",2,3],["deg","cible",4],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Brûlure","Prix"],
 "ambiance":"Cathal chantait les aïeux de chaque passant, à rebours, jusqu'à celui qui avait volé une vache.",
 "budget":"15,0 / 15,0 (+0 %), recalculé par le critique"},
{"id":"ASS172-plus-4","zone":"ASS172","pole":"+","palier":4,"nom":"Loi du feu de la corniche","cout":2,"cible":1,
 "effet":"Loi du feu de la corniche : si la cible brûle déjà, piochez 2 cartes. Piochez 1 ; 20 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","brule",[["pioche",2]]],["pioche",1],["deg","cible",20],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le feu de Cathal brûlait si haut sur la corniche qu'on le voyait du palais ; c'était voulu.",
 "budget":"26,0 / 28,0 (-7 %), recalculé par le critique"},
{"id":"ASS172-plus-5","zone":"ASS172","pole":"+","palier":5,"nom":"Loi des ennemis payants","cout":2,"cible":1,
 "effet":"Loi des ennemis payants : tous les ennemis brûlent de 2 pendant 3 tours ; piochez 2 cartes ; 14 dégâts à la cible. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["brulure","tous",2,3],["pioche",2],["deg","cible",14],["ennemiGarde",2]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Brûlure","Prix"],
 "ambiance":"Les ennemis du roi payaient le barde en sel et en harpes, qu'il accordait sur la satire.",
 "budget":"31,2 / 32,0 (-2 %), recalculé par le critique"},
{"id":"ASS172-plus-6","zone":"ASS172","pole":"+","palier":6,"nom":"Loi du roi de nuit","cout":1,"cible":1,
 "effet":"Loi du roi de nuit : si la cible brûle déjà, 10 dégâts à la cible. Piochez 2 ; 12 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["deg","cible",10]]],["pioche",2],["deg","cible",12],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Le roi passe de nuit, la joue sous son manteau ; les feux des corniches s'allument quand même.",
 "budget":"22,0 / 22,5 (-2 %), recalculé par le critique"},
{"id":"ASS172-plus7","zone":"ASS172","pole":"+","palier":7,"nom":"La Généalogie entière","cout":2,"cible":1,
 "effet":"Chaque nom revient. Piochez 3 ; 24 dégâts à la cible ; tous les ennemis brûlent de 2 pendant 3 tours. Pose Sceau. Si Sang (consommée) : piochez 2 et 20 dégâts à la cible. Prix : le héros perd 4 PV.",
 "ops":[["pioche",3],["deg","cible",24],["brulure","tous",2,3],["pose","Sceau"],["reveil","Sang",true,[["pioche",2],["deg","cible",20]]],["prixPV",4]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Pioche","Brûlure","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"On récite désormais la lignée du roi en entier, avec le nom oublié, que tout le canyon a retrouvé.",
 "budget":"base 45,2 ; réveil +28,0 (62 %), recalculé par le critique"}
]
```

---

## 9. Le Hursag des Noms grattés (DON072) — Donjon · Haute montagne · Pierre · Mésopotamienne

Recette du récit : les instructions au tailleur de pierre. Recette du −7 : l'effacement (la paroi rabotée nue, plus un signe, même le chemin sans bornes) ; du +7 : la démesure (la montagne gravée jusqu'au sommet, nom par-dessus nom).

**Oubli (−)** : le ciseau d'Ur-Lugal → le nom du père → les mêmes cases → les éclats au pied de la paroi → l'échafaudage vide → le creux sans nom → la Paroi rabotée. Fil mécanique : les gardes tombent ou sont ignorées (le ciseau rabote ce qui protégeait), dégâts à tous, condition « la cible a de la garde » ; prix : la carte s'exile (ce qui est gratté ne revient pas ce combat), PV, défausse.
**Mémoire (+)** : la première entaille → le nom en creux → la liste des victoires → le soleil rasant → la place laissée → le nom sous le nom → la Montagne écrite. Fil mécanique : marque (graver dure tout le combat), gros coups ciblés, pioche, condition « la cible est déjà vulnérable » (on regrave dans le creux) ; prix : PV, défausse, garde ennemie.

```json
{"fiche":"DON072","nom":"Le Hursag des Noms grattés",
 "recit":"Instructions du roi Ishme-Nanna au chef des tailleurs, pour la falaise du col : « Tu effaceras le nom de mon père et tu graveras le mien dans les mêmes cases ; le reste du texte peut servir. Sous mes victoires, laisse de la place. » Le tailleur Ur-Lugal obéit. La place est toujours vide, à hauteur d'échafaudage. Quand le soleil frise la paroi, on lit encore sous le nom du roi celui du père, plus profond ; et au fond du creux, un autre, plus ancien, que personne n'a su lire.",
 "pal":["Falaise rabotée nue sur des lieues, éclats de pierre jusqu'aux genoux, échafaudages vides ; plus un signe nulle part, même le chemin a perdu ses bornes.","Paroi grattée par plaques, noms martelés en creux, tas d'éclats au pied ; des tailleurs descendent en rappel avec leurs ciseaux.","Col de montagne sous une haute falaise gravée de signes en coins, échafaudage contre la paroi, sentier de caravanes au pied.","Signes ravivés au ciseau, victoires peintes de suie dans les creux ; des échafaudages neufs montent sur toute la largeur.","La montagne gravée jusqu'au sommet, signe sur signe, nom par-dessus nom, en couches lisibles ; des tailleurs pendus aux cordes continuent la liste."],
 "pm":"Oubli","pp":"Mémoire"}
```

```json
[
{"id":"DON072-moins-1","zone":"DON072","pole":"-","palier":1,"nom":"Le Ciseau d'Ur-Lugal","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 4 dégâts. Puis sa garde tombe ; 5 dégâts à la cible.",
 "ops":[["si","cibleGarde",[["deg","cible",4]]],["briseGarde","cible"],["deg","cible",5]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Condition"],
 "ambiance":"Ur-Lugal tenait son ciseau de bronze comme un calame : il effaçait avec le soin qu'il mettait à écrire.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON072-moins-2","zone":"DON072","pole":"-","palier":2,"nom":"Le Nom du père","cout":1,"cible":1,
 "effet":"Les dégâts de cette carte ignorent la garde : 12 dégâts à la cible. Prix : la carte s'exile.",
 "ops":[["ignoreGarde"],["deg","cible",12],["exil"]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Exil","Prix"],
 "ambiance":"Le nom du père céda par éclats ; le tailleur ramassa les morceaux et les jeta dans le ravin.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON072-moins-3","zone":"DON072","pole":"-","palier":3,"nom":"Les Mêmes Cases","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts. Puis toutes les gardes ennemies tombent ; 3 dégâts à tous. Prix : la carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["briseGarde","tous"],["deg","tous",3],["exil"]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Condition","Exil","Prix"],
 "ambiance":"Le roi voulait ses signes dans les cases du père, à la même taille ; son nom était plus long.",
 "budget":"14,2 / 15 (−5 %)"},
{"id":"DON072-moins-4","zone":"DON072","pole":"-","palier":4,"nom":"Les Éclats au pied de la paroi","cout":2,"cible":1,
 "effet":"Toutes les gardes ennemies tombent ; 6 dégâts à tous ; 10 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["briseGarde","tous"],["deg","tous",6],["deg","cible",10],["prixPV",2]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Prix"],
 "ambiance":"Au pied de la falaise, les éclats des noms grattés font une pente où les mulets glissent.",
 "budget":"27,8 / 28 (−1 %)"},
{"id":"DON072-moins-5","zone":"DON072","pole":"-","palier":5,"nom":"L'Échafaudage vide","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts. Les dégâts de cette carte ignorent la garde : 18 dégâts à la cible ; 4 dégâts à tous. Prix : la carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["ignoreGarde"],["deg","cible",18],["deg","tous",4],["exil"]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Condition","Exil","Prix"],
 "ambiance":"L'échafaudage attend toujours les victoires ; les choucas y nichent, et les caravaniers y pendent leurs outres.",
 "budget":"32,8 / 32 (+2 %)"},
{"id":"DON072-moins-6","zone":"DON072","pole":"-","palier":6,"nom":"Le Creux sans nom","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 8 dégâts. Puis sa garde tombe ; 12 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",8]]],["briseGarde","cible"],["deg","cible",12],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Perce-garde","Pioche","Condition","Prix"],
 "ambiance":"Au fond du creux reste un nom illisible ; on le suppose grand, puisqu'on l'a gratté.",
 "budget":"20 / 22,5 (−11 %)"},
{"id":"DON072-moins7","zone":"DON072","pole":"-","palier":7,"nom":"La Paroi rabotée","cout":2,"cible":1,
 "effet":"La montagne perd son nom. Toutes les gardes ennemies tombent ; 10 dégâts à tous ; 18 à la cible. Pose Abîme. Si Braise (consommée) : tous les ennemis brûlent de 4 pendant 3 tours. Prix : la carte s'exile.",
 "ops":[["briseGarde","tous"],["deg","tous",10],["deg","cible",18],["pose","Abîme"],["reveil","Braise",true,[["brulure","tous",4,3]]],["exil"]],
 "tags":["Donjon","Pierre","Forme ultime −7","Dégâts","Brûlure","Perce-garde","Exil","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Les caravanes passent le col sans lever les yeux ; la paroi lisse ne leur dit plus à qui payer.",
 "budget":"43,6 sans combo ; réveil +26,4 (61 %)"},
{"id":"DON072-plus-1","zone":"DON072","pole":"+","palier":1,"nom":"La Première Entaille","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 1 ; 3 dégâts à la cible ; piochez 1 carte.",
 "ops":[["vulnerable","cible",1],["deg","cible",3],["pioche",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Marque","Pioche"],
 "ambiance":"La première entaille d'un nom se fait d'un coup sec ; le reste n'est que patience.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON072-plus-2","zone":"DON072","pole":"+","palier":2,"nom":"Le Nom en creux","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 8 dégâts. Puis 6 dégâts à la cible ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",8]]],["deg","cible",6],["pioche",1],["prixPV",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Pioche","Condition","Prix"],
 "ambiance":"Un nom gratté reste en creux ; la pluie s'y loge et le relit chaque hiver.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON072-plus-3","zone":"DON072","pole":"+","palier":3,"nom":"La Liste des victoires","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2 ; 8 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",2],["deg","cible",8],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Marque","Pioche","Prix"],
 "ambiance":"Ishme-Nanna dictait ses victoires avant de les livrer ; les tailleurs gravaient pendant qu'il marchait.",
 "budget":"15 / 15 (+0 %)"},
{"id":"DON072-plus-4","zone":"DON072","pole":"+","palier":4,"nom":"Le Soleil rasant","cout":2,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 12 dégâts. Puis 12 dégâts à la cible, qui devient vulnérable 2 ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["deg","cible",12],["vulnerable","cible",2],["pioche",1],["prixPV",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Marque","Pioche","Condition","Prix"],
 "ambiance":"Au soleil couchant, la lumière frise la paroi, et tous les noms grattés remontent à la surface.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON072-plus-5","zone":"DON072","pole":"+","palier":5,"nom":"La Place laissée","cout":2,"cible":1,
 "effet":"Tous les ennemis deviennent vulnérables 2 ; 16 dégâts à la cible ; piochez 1 carte. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["vulnerable","tous",2],["deg","cible",16],["pioche",1],["ennemiGarde",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Marque","Pioche","Prix"],
 "ambiance":"Ur-Lugal laissa la place promise, exactement de la bonne hauteur ; il la mesura avec la coudée royale.",
 "budget":"29,2 / 32 (−9 %)"},
{"id":"DON072-plus-6","zone":"DON072","pole":"+","palier":6,"nom":"Le Nom sous le nom","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 10 dégâts. Puis 10 dégâts à la cible, qui devient vulnérable 2 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["deg","cible",10],["vulnerable","cible",2],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Marque","Pioche","Condition","Prix"],
 "ambiance":"Le tailleur grava le roi plus profond que le père, pour qu'il tienne ; il tint moins longtemps.",
 "budget":"22 / 22,5 (−2 %)"},
{"id":"DON072-plus7","zone":"DON072","pole":"+","palier":7,"nom":"La Montagne écrite","cout":2,"cible":1,
 "effet":"Tout est gravé. Tous les ennemis deviennent vulnérables 3 ; 20 dégâts à la cible ; piochez 2. Pose Sceau. Si Abîme (consommée) : 28 dégâts à la cible. Prix : le héros perd 4 PV.",
 "ops":[["vulnerable","tous",3],["deg","cible",20],["pioche",2],["pose","Sceau"],["reveil","Abîme",true,[["deg","cible",28]]],["prixPV",4]],
 "tags":["Donjon","Pierre","Forme ultime +7","Dégâts","Marque","Pioche","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"Les tailleurs ne descendent plus de leurs cordes ; on leur monte le pain et les noms du jour.",
 "budget":"43,8 sans combo ; réveil +28 (64 %)"}
]
```

---

## 10. Le Sanctuaire de Khyal-Sngat (DON080) — Donjon · Falaise côtière · Vent · Khmère

Recette du récit : le tarif gravé et sa note en marge. Recette du −7 : la ruine (tours décapitées, tuiles envolées, la cloche qui roule sur les dalles) ; du +7 : l'immobilité (la mer d'huile, la flamme qui ne bouge plus).

**Tempête (−)** : la barque sans tarif → le vent du large → les cloches dans la tour → les tuiles envolées → la flotte sortie → les mouettes rabattues → le Cap arraché. Fil mécanique : coups au hasard à chaque carte (la rafale ne choisit pas), dégâts à tous (4 cartes), mana de Vent, condition « la cible prend son élan » (le vent brise la charge) ; prix : PV, défausse, garde ennemie.
**Calme (+)** : le panier de riz → la mer d'huile → le buffle de la flottille → la voile pendante → les cloches du roi → le bonze trésorier → la Mer arrêtée. Fil mécanique : soin du héros à chaque carte (le repos forcé), pioche, affaiblissement sur 3 cartes (sans vent, plus de force), un peu de garde, condition « c'est au moins votre troisième carte du tour » (la patience des moines, 3 cartes) ; prix : garde et soin ennemis, défausse.

```json
{"fiche":"DON080","nom":"Le Sanctuaire de Khyal-Sngat",
 "recit":"Tarif gravé à la porte du sanctuaire de Khyal-Sngat, sur la falaise : pour une nuit de calme, une barque donne un panier de riz ; une flottille, un buffle ; la flotte du roi, les cloches de bronze des villages. En marge, de la main du bonze trésorier : « Le roi a payé. La flotte est sortie. » Les cloches pendent depuis dans la tour du sanctuaire, et le vent les fait sonner pour les moines. Le tarif de la tempête n'est pas gravé. Les villages le paient quand même, en barques.",
 "pal":["Le cap arraché : tours décapitées, toits de tuiles envolés, l'écume jusqu'au sanctuaire ; une cloche de bronze roule sur les dalles au gré des rafales.","Vent continu qui couche les palmiers, tuiles qui claquent, moines arc-boutés dans les galeries ; au pied de la falaise, des barques brisées.","Falaise de grès au-dessus d'une mer verte, sanctuaire à tours en épi, escalier taillé jusqu'au port ; des cloches tintent dans la tour.","Mer lisse au pied du cap, barques à l'ancre qui ne partent pas ; les moines comptent les paniers de riz déposés sur les marches.","Mer d'huile jusqu'à l'horizon, voiles pendantes, mouettes posées sur l'eau ; sur la falaise, la flamme des lampes ne bouge plus, ni les moines."],
 "pm":"Tempête","pp":"Calme"}
```

```json
[
{"id":"DON080-moins-1","zone":"DON080","pole":"-","palier":1,"nom":"La Barque sans tarif","cout":1,"cible":0,
 "effet":"2 coups de 3 dégâts au hasard ; +1 mana de Vent.",
 "ops":[["deg","hasard",3,2],["mana","Vent",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Mana"],
 "ambiance":"Une barque partit sans payer son panier de riz ; on retrouva sa voile accrochée au toit du sanctuaire.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON080-moins-2","zone":"DON080","pole":"-","palier":2,"nom":"Le Vent du large","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, le vent la rabat : 6 dégâts à la cible. 3 coups de 3 dégâts au hasard. Prix : le héros perd 1 PV.",
 "ops":[["si","vol",[["deg","cible",6]]],["deg","hasard",3,3],["prixPV",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Le vent du large arrive sans prévenir ; les novices l'entendent d'abord dans les cloches, puis dans leurs os.",
 "budget":"11,0 / 12,5 (-12 %), recalculé par le critique"},
{"id":"DON080-moins-3","zone":"DON080","pole":"-","palier":3,"nom":"Les Cloches dans la tour","cout":1,"cible":0,
 "effet":"4 coups de 3 dégâts au hasard ; 3 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","hasard",3,4],["deg","tous",3],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Prix"],
 "ambiance":"Les cloches des villages sonnent dans la tour au gré du vent ; nul ne sait les taire.",
 "budget":"15,6 / 15 (+4 %)"},
{"id":"DON080-moins-4","zone":"DON080","pole":"-","palier":4,"nom":"Les Tuiles envolées","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. 5 coups de 4 dégâts au hasard ; +2 mana de Vent. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["deg","cible",10]]],["deg","hasard",4,5],["mana","Vent",2],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Les tuiles du toit partirent par rangées entières ; on en ramasse encore sur la plage, vernissées et intactes.",
 "budget":"29,0 / 28,0 (+4 %), recalculé par le critique"},
{"id":"DON080-moins-5","zone":"DON080","pole":"-","palier":5,"nom":"La Flotte sortie","cout":2,"cible":0,
 "effet":"8 dégâts à tous les ennemis ; 3 coups de 4 dégâts au hasard ; +2 mana de Vent. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["deg","tous",8],["deg","hasard",4,3],["mana","Vent",2],["ennemiGarde",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Mana","Prix"],
 "ambiance":"La flotte du roi sortit au matin par mer calme ; le bonze trésorier nota l'heure, puis ferma le registre.",
 "budget":"31,6 / 32 (−1 %)"},
{"id":"DON080-moins-6","zone":"DON080","pole":"-","palier":6,"nom":"Les Mouettes rabattues","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts à la cible. 4 dégâts à tous ; 4 coups de 3 dégâts au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",8]]],["deg","tous",4],["deg","hasard",3,4],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Condition","Prix"],
 "ambiance":"Le vent rabat les mouettes contre la falaise ; les moines les ramassent le soir, étourdies, et les relâchent.",
 "budget":"21,8 / 22,5 (-3 %), recalculé par le critique"},
{"id":"DON080-moins7","zone":"DON080","pole":"-","palier":7,"nom":"Le Cap arraché","cout":2,"cible":0,
 "effet":"La falaise perd ses tours. 8 dégâts à tous ; 6 coups de 4 au hasard ; +2 mana de Vent. Pose Sang. Si Braise (consommée) : 7 coups de 4 au hasard. Prix : le héros perd 5 PV.",
 "ops":[["deg","tous",8],["deg","hasard",4,6],["mana","Vent",2],["pose","Sang"],["reveil","Braise",true,[["deg","hasard",4,7]]],["prixPV",5]],
 "tags":["Donjon","Vent","Forme ultime −7","Dégâts","Mana","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Le tarif a été emporté avec la porte ; les villages paient désormais en barques, une par tempête.",
 "budget":"42,6 sans combo ; réveil +28 (66 %)"},
{"id":"DON080-plus-1","zone":"DON080","pole":"+","palier":1,"nom":"Le Panier de riz","cout":1,"cible":1,
 "effet":"La cible perd 2 d'attaque ; le héros se soigne de 4.",
 "ops":[["affaiblit","cible",2],["soin","heros",4]],
 "tags":["Donjon","Vent","Pôle +","Affaiblissement","Soin"],
 "ambiance":"Le pêcheur posa son panier de riz sur la marche et attendit ; la mer se coucha avant la nuit.",
 "budget":"10 / 10 (+0 %)"},
{"id":"DON080-plus-2","zone":"DON080","pole":"+","palier":2,"nom":"La Mer d'huile","cout":1,"cible":0,
 "effet":"Le héros se soigne de 6 et gagne 4 de garde ; piochez 1 carte. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","heros",6],["garde","heros",4],["pioche",1],["ennemiGarde",1]],
 "tags":["Donjon","Vent","Pôle +","Garde","Soin","Pioche","Prix"],
 "ambiance":"La mer devint si lisse que les pêcheurs y voyaient leurs dettes ; ils rentrèrent à la rame.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"DON080-plus-3","zone":"DON080","pole":"+","palier":3,"nom":"Le Buffle de la flottille","cout":1,"cible":0,
 "effet":"Si c'est au moins votre troisième carte du tour, piochez 2 cartes. Le héros se soigne de 10 ; piochez 1. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","troisCartes",[["pioche",2]]],["soin","heros",10],["pioche",1],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le buffle monta l'escalier de la falaise, marche après marche, poussé par la flottille entière.",
 "budget":"15 / 15 (+0 %)"},
{"id":"DON080-plus-4","zone":"DON080","pole":"+","palier":4,"nom":"La Voile pendante","cout":2,"cible":0,
 "effet":"Tous les ennemis perdent 2 d'attaque ; le héros se soigne de 10 et gagne 8 de garde ; piochez 1 carte. Prix : chaque ennemi se soigne de 2.",
 "ops":[["affaiblit","tous",2],["soin","heros",10],["garde","heros",8],["pioche",1],["ennemiSoin",2]],
 "tags":["Donjon","Vent","Pôle +","Affaiblissement","Garde","Soin","Pioche","Prix"],
 "ambiance":"Les voiles pendaient comme du linge mouillé ; les équipages dormaient à l'ombre et ne mangeaient plus.",
 "budget":"29,2 / 28 (+4 %)"},
{"id":"DON080-plus-5","zone":"DON080","pole":"+","palier":5,"nom":"Les Cloches du roi","cout":2,"cible":0,
 "effet":"Si c'est au moins votre troisième carte du tour, le héros se soigne de 10. Puis il se soigne de 14 et gagne 6 de garde ; piochez 2 cartes. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","troisCartes",[["soin","heros",10]]],["soin","heros",14],["garde","heros",6],["pioche",2],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Garde","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les villages livrèrent leurs cloches une à une ; les jours de fête, on y frappe désormais sur des marmites.",
 "budget":"28,8 / 32 (−10 %)"},
{"id":"DON080-plus-6","zone":"DON080","pole":"+","palier":6,"nom":"Le Bonze trésorier","cout":1,"cible":1,
 "effet":"Si c'est au moins votre troisième carte du tour, piochez 2 cartes. Le héros se soigne de 12 ; piochez 1 ; 4 dégâts à la cible. Prix : chaque ennemi gagne 2 de garde.",
 "ops":[["si","troisCartes",[["pioche",2]]],["soin","heros",12],["pioche",1],["deg","cible",4],["ennemiGarde",2]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le bonze trésorier compte les paniers assis, sans hâte ; il dit que le calme se paie d'abord en patience.",
 "budget":"20 / 22,5 (−11 %)"},
{"id":"DON080-plus7","zone":"DON080","pole":"+","palier":7,"nom":"La Mer arrêtée","cout":2,"cible":0,
 "effet":"Plus rien ne bouge. Tous les ennemis perdent 3 d'attaque ; soin 16 ; garde 10 ; piochez 1. Pose Givre. Si Sceau (consommée) : piochez 3, tous perdent 2 d'attaque, soin 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","tous",3],["soin","heros",16],["garde","heros",10],["pioche",1],["pose","Givre"],["reveil","Sceau",true,[["pioche",3],["affaiblit","tous",2],["soin","heros",6]]],["prixDefausse",1]],
 "tags":["Donjon","Vent","Forme ultime +7","Affaiblissement","Garde","Soin","Pioche","Combo","Pose Givre","Réveil Sceau","Prix"],
 "ambiance":"Depuis que la mer s'est arrêtée, les barques pourrissent à l'ancre ; on paie encore le riz, par habitude.",
 "budget":"44,8 sans combo ; réveil +31,2 (70 %)"}
]
```

---

## 11. Les Îles-Jardins de Khwabnagar (DON041) — Donjon · Iles flottantes · Vent · Moghole

Recette du récit : les légendes d'un album. Recette du −7 : le monde renversé (îles retournées, racines au ciel, jardins pendus) ; du +7 : la multiplication (une flottille d'îles-jardins à la file, une par feuille).

**Cauchemar (−)** : la lampe de veille → les grenadiers qui saignent → la feuille brûlée → le bassin aux paons noirs → la cire de l'album → l'échelle retirée → l'Île sans titre. Fil mécanique : vol de vie à chaque carte (le cauchemar se nourrit du dormeur), gros coups ciblés, bêtes peintes (paon noir, lion de cire, lion-oiseau), condition « la cible vole par-dessus » (ce qui vole dans le rêve) ; prix : PV surtout, défausse.
**Rêve (+)** : le pinceau d'une soie → la feuille du lion-oiseau → le paon du bassin → les jardiniers de l'île neuve → l'album relié → le récit du matin → la Flottille d'îles. Fil mécanique : soin des alliés à chaque carte (le rêve veille sur les dormeurs), mana de Vent, pioche (4 cartes), condition « la cible hésite » ; prix : défausse, PV, garde et soin ennemis.

```json
{"fiche":"DON041","nom":"Les Îles-Jardins de Khwabnagar",
 "recit":"Légendes de l'album de l'atelier, aux îles volantes de Khwabnagar. Feuille du lion-oiseau : rêvé par l'empereur, peint par Ustad Nihal, planté par les jardiniers sur une île neuve. Feuille du bassin aux paons : rêvé, peint, planté. Feuille des grenadiers qui saignent : rêvé, peint ; l'empereur fit brûler la feuille, l'île fut plantée quand même. Feuille sans titre : peinte par Nihal un matin où l'empereur n'avait rien raconté. Plantée. On a depuis retiré l'échelle de cette île-là ; elle ne descend plus.",
 "pal":["Îles retournées, racines au ciel, jardins pendus à l'envers au-dessus du vide ; des bêtes peintes sans yeux arpentent les allées, et l'air sent la cire brûlée.","Grenadiers aux fruits noirs, bassins couverts de cendre, échelles de corde coupées ; certaines îles dérivent sans jardinier.","Îles flottantes reliées par des échelles, jardins en carrés, pavillons de grès rouge ; un atelier de peintres au bord d'un bassin.","Îles neuves amarrées les unes aux autres, jets d'eau, paons blancs ; des feuilles d'album sèchent sur des cordes entre les arbres.","Une flottille d'îles-jardins à la file, chacune comme une feuille d'album, avec ses jets d'eau, ses paons, et un jardinier qui dort sous chaque arbre."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"DON041-moins-1","zone":"DON041","pole":"-","palier":1,"nom":"La Lampe de veille","cout":1,"cible":1,
 "effet":"7 dégâts à la cible ; le héros se soigne de la moitié des dégâts infligés (vol de vie).",
 "ops":[["deg","cible",7],["volVie"]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie"],
 "ambiance":"La lampe de veille brûlait toute la nuit au chevet de l'empereur ; il refusait le noir depuis l'enfance.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"DON041-moins-2","zone":"DON041","pole":"-","palier":2,"nom":"Les Grenadiers qui saignent","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 6 dégâts. Puis 8 dégâts à la cible ; vol de vie. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["deg","cible",6]]],["deg","cible",8],["volVie"],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Les grenades de l'île s'ouvrent seules et coulent sur les dalles ; les jardiniers y marchent chaussés.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON041-moins-3","zone":"DON041","pole":"-","palier":3,"nom":"La Feuille brûlée","cout":1,"cible":1,
 "effet":"10 dégâts à la cible, qui brûle de 2 pendant 2 tours ; vol de vie. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",10],["brulure","cible",2,2],["volVie"],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Brûlure","Vol de vie","Prix"],
 "ambiance":"L'empereur fit brûler la feuille dans son brasero ; l'odeur de cire y resta l'hiver.",
 "budget":"16 / 15 (+7 %)"},
{"id":"DON041-moins-4","zone":"DON041","pole":"-","palier":4,"nom":"Le Bassin aux paons noirs","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts. Un Paon noir rejoint le combat (8 PV, frappe 6) ; 10 dégâts à la cible ; vol de vie. Prix : le héros perd 3 PV.",
 "ops":[["si","vol",[["deg","cible",10]]],["invoque","Paon noir",8,6],["deg","cible",10],["volVie"],["prixPV",3]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Les paons du bassin noirci ne font plus la roue ; ils crient la nuit, sous les fenêtres de l'atelier.",
 "budget":"30 / 28 (+7 %)"},
{"id":"DON041-moins-5","zone":"DON041","pole":"-","palier":5,"nom":"La Cire de l'album","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; vol de vie ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",18],["volVie"],["pioche",1],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle −","Dégâts","Vol de vie","Pioche","Prix"],
 "ambiance":"Nihal fixait ses couleurs à la cire chaude ; certaines feuilles ont fondu, et l'île a suivi.",
 "budget":"29 / 32 (−9 %)"},
{"id":"DON041-moins-6","zone":"DON041","pole":"-","palier":6,"nom":"L'Échelle retirée","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts. Un Lion de cire rejoint le combat (6 PV, frappe 5) ; 8 dégâts à la cible ; vol de vie. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",8]]],["invoque","Lion de cire",6,5],["deg","cible",8],["volVie"],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle −","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Les jardiniers retirèrent l'échelle de l'île sans titre ; ceux d'en haut ne protestèrent pas.",
 "budget":"23,5 / 22,5 (+4 %)"},
{"id":"DON041-moins7","zone":"DON041","pole":"-","palier":7,"nom":"L'Île sans titre","cout":2,"cible":1,
 "effet":"Le rêve se plante seul. Le Lion-oiseau sans yeux arrive (12 PV, frappe 10) ; 22 dégâts à la cible ; vol de vie. Pose Sang. Si Racine (consommée) : 30 dégâts à la cible. Prix : le héros perd 5 PV.",
 "ops":[["invoque","Lion-oiseau sans yeux",12,10],["deg","cible",22],["volVie"],["pose","Sang"],["reveil","Racine",true,[["deg","cible",30]]],["prixPV",5]],
 "tags":["Donjon","Vent","Forme ultime −7","Invocation","Dégâts","Vol de vie","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"L'île sans titre ne descend plus ; la nuit, on voit ses arbres bouger contre les étoiles, sans vent.",
 "budget":"49 sans combo ; réveil +30 (61 %)"},
{"id":"DON041-plus-1","zone":"DON041","pole":"+","palier":1,"nom":"Le Pinceau d'une soie","cout":1,"cible":0,
 "effet":"+1 mana de Vent ; vos alliés se soignent de 4.",
 "ops":[["mana","Vent",1],["soin","allies",4]],
 "tags":["Donjon","Vent","Pôle +","Soin","Mana"],
 "ambiance":"Le pinceau de Nihal n'avait qu'un poil d'écureuil ; il peignait les cils des paons.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON041-plus-2","zone":"DON041","pole":"+","palier":2,"nom":"La Feuille du lion-oiseau","cout":1,"cible":0,
 "effet":"Si une bête est en jeu, piochez 1 carte. Piochez 2 ; vos alliés se soignent de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["pioche",1]]],["pioche",2],["soin","allies",4],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Soin","Pioche","Condition","Prix"],
 "ambiance":"L'empereur raconta le lion-oiseau au réveil, les yeux encore fermés ; Nihal le peignit avant qu'il les ouvre.",
 "budget":"13,0 / 12,5 (+4 %), recalculé par le critique"},
{"id":"DON041-plus-3","zone":"DON041","pole":"+","palier":3,"nom":"Le Paon du bassin","cout":1,"cible":0,
 "effet":"Un Paon du bassin rejoint le combat : 8 PV, frappe 2. +1 mana de Vent ; vos alliés se soignent de 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Paon du bassin",8,2],["mana","Vent",1],["soin","allies",4],["ennemiGarde",1]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Soin","Mana","Prix"],
 "ambiance":"On fit monter les paons par l'échelle, un à un, dans des paniers couverts de soie verte.",
 "budget":"14 / 15 (−7 %)"},
{"id":"DON041-plus-4","zone":"DON041","pole":"+","palier":4,"nom":"Les Jardiniers de l'île neuve","cout":2,"cible":0,
 "effet":"Si une bête est en jeu, vos alliés se soignent de 8. Piochez 2 cartes ; un Paon du bassin rejoint le combat (10 PV, frappe 3) ; vos alliés se soignent de 6. Prix : le héros perd 2 PV.",
 "ops":[["si","bete",[["soin","allies",8]]],["pioche",2],["invoque","Paon du bassin",10,3],["soin","allies",6],["prixPV",2]],
 "tags":["Donjon","Vent","Pôle +","Invocation","Soin","Pioche","Condition","Prix"],
 "ambiance":"Les jardiniers plantaient d'après la feuille, au cordeau ; quand le rêve était flou, ils plantaient flou.",
 "budget":"30,5 / 28,0 (+9 %), recalculé par le critique"},
{"id":"DON041-plus-5","zone":"DON041","pole":"+","palier":5,"nom":"L'Album relié","cout":2,"cible":1,
 "effet":"Piochez 3 cartes ; +2 mana de Vent ; vos alliés se soignent de 6 ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",3],["mana","Vent",2],["soin","allies",6],["hesite","cible"],["prixDefausse",1]],
 "tags":["Donjon","Vent","Pôle +","Contrôle","Soin","Pioche","Mana","Prix"],
 "ambiance":"Relié en cuir de chèvre, l'album pesait plus que son île ; on le portait sur un brancard.",
 "budget":"29 / 32 (−9 %)"},
{"id":"DON041-plus-6","zone":"DON041","pole":"+","palier":6,"nom":"Le Récit du matin","cout":1,"cible":1,
 "effet":"Si une bête est en jeu, vos alliés se soignent de 8. Puis ils se soignent de 6 ; piochez 1 carte ; 4 dégâts à la cible. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","bete",[["soin","allies",8]]],["soin","allies",6],["pioche",1],["deg","cible",4],["ennemiSoin",1]],
 "tags":["Donjon","Vent","Pôle +","Dégâts","Soin","Pioche","Condition","Prix"],
 "ambiance":"Chaque matin, l'atelier attendait le récit de l'empereur, pinceaux trempés ; certains matins, il ne venait pas.",
 "budget":"21,0 / 22,5 (-7 %), recalculé par le critique"},
{"id":"DON041-plus7","zone":"DON041","pole":"+","palier":7,"nom":"La Flottille d'îles","cout":2,"cible":0,
 "effet":"Chaque rêve a son île. Piochez 3 ; +2 mana de Vent ; alliés soignés de 12 ; le Paon blanc arrive (16 PV, frappe 4). Pose Sceau. Si Givre (consommée) : piochez 3, tous les ennemis hésitent, alliés soignés de 6. Prix : défaussez 1 carte.",
 "ops":[["pioche",3],["mana","Vent",2],["soin","allies",12],["invoque","Paon blanc",16,4],["pose","Sceau"],["reveil","Givre",true,[["pioche",3],["hesite","tous"],["soin","allies",6]]],["prixDefausse",1]],
 "tags":["Donjon","Vent","Forme ultime +7","Invocation","Contrôle","Soin","Pioche","Mana","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Les îles se suivent dans le ciel comme les feuilles dans l'album ; sous chaque arbre, un jardinier dort.",
 "budget":"47 sans combo ; réveil +30 (64 %)"}
]
```

---

## 12. Le Qila de Pahar-Sipi (CIT039) — Citadelle · Haute montagne · Pierre · Moghole

Recette du récit : le testament. Recette du −7 : le dénuement (remparts d'os, poussière blanche, une garnison maigre) ; du +7 : le monde retourné (la citadelle ressortie de la roche comme un récif, des coquillages dans les citernes).

**Os (−)** : *(Réécrit par le critique, lot 4.)* le fémur de l'éléphant → la palissade d'os → le crâne au créneau → la garnison maigre → les os liés au cuir → la poussière blanche → le Rempart d'ivoire. Fil mécanique : gros coups ciblés (le fémur comme massue), garde du héros sur 4 cartes, affaiblissement sur 3 ; crochet « le héros est sous la moitié de ses PV » (la garnison maigre frappe plus fort), qui remplace « piétine », déjà pris par CIT003 ; prix : PV surtout.
**Corail (+)** : *(Réécrit par le critique, lot 4.)* le caillou de corail → le ciseau de Daud → la quille dans la roche → la citerne aux coquillages → le capitaine de corail → le récif du col → la Citadelle-récif. Fil mécanique : la Garde du héros sur les 7 cartes (le corail pousse sur les murs que Daud taille), bloqueurs de corail à 0 d'attaque sur 3 cartes, marque légère (le corail coupe), pioche ; crochet « la cible est déjà vulnérable ». Les soldats invoqués, la garde et le soin des alliés partent : ils recopiaient le Corail d'ANT095 (D).

```json
{"fiche":"CIT039","nom":"Le Qila de Pahar-Sipi",
 "recit":"Testament de Rustam Ali Beg, qiladar du fort de Pahar-Sipi. À l'empereur, je lègue le fort, qu'il n'a jamais vu qu'en peinture. À mes soldats, les os des éléphants du premier siège, dont ils ont fait la palissade, et qui tiennent mieux que les murs payés par le trésor. À mon fils Daud, le corail qu'on trouve dans la roche du col, puisque la montagne fut une mer et qu'il voulait être marin. Daud a répondu qu'il le serait, et il a commencé à tailler.",
 "pal":["Remparts de crânes d'éléphants et de fémurs liés au cuir, poussière blanche sur tout le col ; derrière les os, une garnison maigre monte la garde.","Murs de pierre éboulés, brèches bouchées d'os, défenses plantées en chevaux de frise ; les soldats raclent la roche pour un peu de mortier.","Forteresse de pierre grise sur un col enneigé, porte à arc brisé, citernes creusées ; dans la roche du col, des veines roses pleines de fossiles.","Pierre rose taillée dans la roche du col, merlons sculptés en branches, coquillages scellés dans les murs ; la garnison se renouvelle.","La citadelle ressortie de la roche comme un récif : tours ramifiées de pierre-corail, soldats en foule sur les branches, coquillages au fond des citernes."],
 "pm":"Os","pp":"Corail"}
```

```json
[
{"id":"CIT039-moins-1","zone":"CIT039","pole":"-","palier":1,"nom":"Le Fémur de l'éléphant","cout":1,"cible":1,
 "effet":"8 dégâts à la cible, qui perd 1 d'attaque.",
 "ops":[["deg","cible",8],["affaiblit","cible",1]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Affaiblissement"],
 "ambiance":"Le fémur d'un éléphant du siège barre encore la poterne ; on le soulève à plusieurs pour sortir.",
 "budget":"11,0 / 10,0 (+10 %), recalculé par le critique"},
{"id":"CIT039-moins-2","zone":"CIT039","pole":"-","palier":2,"nom":"La Palissade d'os","cout":1,"cible":1,
 "effet":"Le héros gagne 12 de garde ; 4 dégâts à la cible. Prix : le héros perd 1 PV.",
 "ops":[["garde","heros",12],["deg","cible",4],["prixPV",1]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde","Prix"],
 "ambiance":"Les soldats lièrent les côtes au cuir mouillé ; en séchant, le cuir serra plus fort que le fer.",
 "budget":"12,6 / 12,5 (+1 %), recalculé par le critique"},
{"id":"CIT039-moins-3","zone":"CIT039","pole":"-","palier":3,"nom":"Le Crâne au créneau","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, la cible perd 2 d'attaque. Puis elle en perd 1 ; 12 dégâts à la cible. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["affaiblit","cible",2]]],["affaiblit","cible",1],["deg","cible",12],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"On posa un crâne d'éléphant à chaque créneau ; les chevaux de l'ennemi refusaient d'approcher.",
 "budget":"16,0 / 15,0 (+7 %), recalculé par le critique"},
{"id":"CIT039-moins-4","zone":"CIT039","pole":"-","palier":4,"nom":"La Garnison maigre","cout":2,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, 12 dégâts de plus. 18 dégâts à la cible ; le héros gagne 6 de garde. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["deg","cible",12]]],["deg","cible",18],["garde","heros",6],["prixPV",3]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le trésor n'envoyait plus la solde ; la garnison mangeait le grain des chevaux, puis les chevaux.",
 "budget":"25,8 / 28,0 (-8 %), recalculé par le critique"},
{"id":"CIT039-moins-5","zone":"CIT039","pole":"-","palier":5,"nom":"Les Os liés au cuir","cout":2,"cible":1,
 "effet":"Le héros gagne 16 de garde ; 16 dégâts à la cible ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",16],["deg","cible",16],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Garde","Pioche","Prix"],
 "ambiance":"Rustam fit relever la palissade os par os, chaque soldat portant le sien jusqu'au rempart.",
 "budget":"29,8 / 32,0 (-7 %), recalculé par le critique"},
{"id":"CIT039-moins-6","zone":"CIT039","pole":"-","palier":6,"nom":"La Poussière blanche","cout":1,"cible":1,
 "effet":"Si le héros est sous la moitié de ses PV, il se soigne de 8. 20 dégâts à la cible, qui ignorent la garde. Prix : le héros perd 3 PV.",
 "ops":[["si","blesse",[["soin","heros",8]]],["ignoreGarde"],["deg","cible",20],["prixPV",3]],
 "tags":["Citadelle","Pierre","Pôle −","Dégâts","Soin","Perce-garde","Condition","Prix"],
 "ambiance":"La poussière d'os blanchit les manteaux, les barbes et le pain ; on la reconnaît aux dents des soldats.",
 "budget":"24,0 / 22,5 (+7 %), recalculé par le critique"},
{"id":"CIT039-moins7","zone":"CIT039","pole":"-","palier":7,"nom":"Le Rempart d'ivoire","cout":2,"cible":1,
 "effet":"Le fort se fait squelette. 26 dégâts à la cible, qui perd 2 d'attaque ; le héros gagne 20 de garde ; piochez 1. Pose Givre. Si Sang (consommée) : 24 dégâts à la cible et soin 10. Prix : le héros perd 5 PV.",
 "ops":[["deg","cible",26],["affaiblit","cible",2],["garde","heros",20],["pioche",1],["pose","Givre"],["reveil","Sang",true,[["deg","cible",24],["soin","heros",10]]],["prixPV",5]],
 "tags":["Citadelle","Pierre","Forme ultime −7","Dégâts","Garde","Soin","Pioche","Affaiblissement","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Le rempart d'ivoire n'a jamais été pris ; il n'y avait plus rien derrière qui vaille le siège.",
 "budget":"base 47,0 ; réveil +34,0 (72 %), recalculé par le critique"},
{"id":"CIT039-plus-1","zone":"CIT039","pole":"+","palier":1,"nom":"Le Caillou de corail","cout":1,"cible":0,
 "effet":"Le héros gagne 8 de garde ; piochez 1 carte.",
 "ops":[["garde","heros",8],["pioche",1]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Pioche"],
 "ambiance":"Daud trouva le premier caillou de corail en curant une citerne ; il le garda dans sa ceinture.",
 "budget":"10,4 / 10,0 (+4 %), recalculé par le critique"},
{"id":"CIT039-plus-2","zone":"CIT039","pole":"+","palier":2,"nom":"Le Ciseau de Daud","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 1 et subit 4 dégâts ; le héros gagne 10 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["vulnerable","cible",1],["deg","cible",4],["garde","heros",10],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Garde","Marque","Prix"],
 "ambiance":"Daud taillait le corail de la roche au ciseau de son père, celui qui avait servi aux affûts.",
 "budget":"12,0 / 12,5 (-4 %), recalculé par le critique"},
{"id":"CIT039-plus-3","zone":"CIT039","pole":"+","palier":3,"nom":"La Quille dans la roche","cout":1,"cible":1,
 "effet":"Si la cible est déjà vulnérable, le héros gagne 8 de garde de plus. Puis il gagne 12 de garde ; 3 dégâts à la cible. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","vulnerable",[["garde","heros",8]]],["garde","heros",12],["deg","cible",3],["ennemiGarde",1]],
 "tags":["Citadelle","Pierre","Pôle +","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Daud tailla d'abord une quille dans la roche du col ; les soldats demandèrent ce qu'il comptait faire naviguer.",
 "budget":"13,8 / 15,0 (-8 %), recalculé par le critique"},
{"id":"CIT039-plus-4","zone":"CIT039","pole":"+","palier":4,"nom":"La Citerne aux coquillages","cout":2,"cible":0,
 "effet":"Un Bloqueur de corail se dresse (18 PV, frappe 0). Le héros gagne 14 de garde ; piochez 2 cartes. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Bloqueur de corail",18,0],["garde","heros",14],["pioche",2],["prixPV",2]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Garde","Pioche","Prix"],
 "ambiance":"Au fond des citernes, on trouve des coquillages que la montagne a gardés ; l'eau y a goût de sel.",
 "budget":"26,2 / 28,0 (-6 %), recalculé par le critique"},
{"id":"CIT039-plus-5","zone":"CIT039","pole":"+","palier":5,"nom":"Le Capitaine de corail","cout":2,"cible":1,
 "effet":"Si la cible est déjà vulnérable, 10 dégâts. Le Capitaine de corail se dresse (10 PV, frappe 0) ; le héros gagne 20 de garde ; 6 dégâts à la cible. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["invoque","Capitaine de corail",10,0],["garde","heros",20],["deg","cible",6],["prixDefausse",1]],
 "tags":["Citadelle","Pierre","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Daud donna au capitaine le visage de Rustam, avec la barbe ; la garnison le salua avant de comprendre.",
 "budget":"29,0 / 32,0 (-9 %), recalculé par le critique"},
{"id":"CIT039-plus-6","zone":"CIT039","pole":"+","palier":6,"nom":"Le Récif du col","cout":1,"cible":1,
 "effet":"La cible devient vulnérable 2 ; le héros gagne 16 de garde ; piochez 1 carte. Prix : chaque ennemi se soigne de 1.",
 "ops":[["vulnerable","cible",2],["garde","heros",16],["pioche",1],["ennemiSoin",1]],
 "tags":["Citadelle","Pierre","Pôle +","Garde","Pioche","Marque","Prix"],
 "ambiance":"Les murs repoussent en branches là où Daud a taillé ; nul ne sait plus ce qui est bâti.",
 "budget":"20,8 / 22,5 (-8 %), recalculé par le critique"},
{"id":"CIT039-plus7","zone":"CIT039","pole":"+","palier":7,"nom":"La Citadelle-récif","cout":2,"cible":1,
 "effet":"La montagne redevient mer. Héros +28 de garde ; un Récif vivant se dresse (24 PV, frappe 0) ; tous les ennemis vulnérables 2 ; piochez 2. Pose Racine. Si Abîme (consommée) : +20 de garde, piochez 3, 8 dégâts à la cible. Prix : ennemis +3 de garde.",
 "ops":[["garde","heros",28],["invoque","Récif vivant",24,0],["vulnerable","tous",2],["pioche",2],["pose","Racine"],["reveil","Abîme",true,[["garde","heros",20],["pioche",3],["deg","cible",8]]],["ennemiGarde",3]],
 "tags":["Citadelle","Pierre","Forme ultime +7","Invocation","Dégâts","Garde","Pioche","Marque","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"L'empereur fit enfin peindre la citadelle ; le peintre la mit sous l'eau, par erreur, croit-on.",
 "budget":"base 49,6 ; réveil +36,0 (73 %), recalculé par le critique"}
]
```

---

## Ressources (fiche légère, sans carte)

### Les Rochers à caillé de Khad-Ereg (RES329) — Ressource · Falaise côtière · Vent · mongole

Geste : étaler le caillé en galettes sur la roche au vent salé. Chute : la part des voleurs comptée d'avance.

```json
{"fiche":"RES329","nom":"Les Rochers à caillé de Khad-Ereg",
 "recit":"Sur les rochers de Khad-Ereg, les femmes étalent le caillé en galettes et le laissent durcir au vent du large, qui le sale en passant. Les goélands en volent chaque jour. On compte la perte d'avance, et l'on étale pour eux une rangée de plus.",
 "pal":["Quelques galettes blanches sur une roche plate au bord du vide ; une femme les retourne une à une, dos au vent.","Toute la falaise piquée de ronds blancs, rangée après rangée ; les goélands tournent au-dessus et les femmes chantent pour les tenir à distance."]}
```

### Les Pierres chaudes de K'ak' Witz (RES312) — Ressource · Volcan · Feu · maya

Geste : porter les pierres chauffées aux fumerolles vers les bains de vapeur. Chute : le prix inversé : le meilleur reste en bas.

```json
{"fiche":"RES312","nom":"Les Pierres chaudes de K'ak' Witz",
 "recit":"À K'ak' Witz, les porteurs cueillent aux fumerolles des pierres si chaudes qu'il faut des paniers mouillés pour les tenir, et les montent aux bains de vapeur du seigneur. En route, elles refroidissent. Les plus chaudes vont donc aux bains des porteurs, au pied de la montagne.",
 "pal":["Une fumerolle, un panier mouillé posé à côté, un homme qui y fait rouler une pierre avec un bâton fourchu.","Une file de porteurs aux paniers fumants grimpe vers les bains du seigneur ; au pied du volcan, les huttes de vapeur sifflent toutes ensemble."]}
```

### Les Grèves à bois de Rekavík (RES023) — Ressource · Archipel · Eau · nordique

Geste : haler le bois flotté à la gaffe. Chute : la ressemblance (une poutre qui fut une porte).

```json
{"fiche":"RES023","nom":"Les Grèves à bois de Rekavík",
 "recit":"Sur les îles de Rekavík, rien ne pousse : le bois vient par la mer. Après chaque tempête, on hale les troncs à la gaffe et on les empile par familles. Dans la halle du chef, une poutre porte encore des gonds.",
 "pal":["Une grève de galets, un tronc blanchi échoué dans l'écume, un homme qui le tire à la gaffe hors des vagues.","Des troncs à perte de vue sur la grève, empilés par familles ; on hale à la corde, à plusieurs, en criant la cadence."]}
```

### Les Tablettes de glace de Šuruppû (RES157) — Ressource · Forêt boréale · Glace · mésopotamienne

Geste : graver les comptes au calame dans des plaques de glace. Chute : la règle absurde (les dettes qui fondent, la copie qu'on ne fait jamais).

```json
{"fiche":"RES157","nom":"Les Tablettes de glace de Šuruppû",
 "recit":"Faute d'argile, le scribe de Šuruppû grave les comptes de l'hiver dans des plaques de glace sciées sur la rivière, et les dresse contre les sapins. Au printemps, les dettes fondent. Le temple a ordonné qu'on les recopie avant le dégel ; personne n'en trouve le temps.",
 "pal":["Quelques plaques de glace gravées de signes en coins, dressées contre les troncs, à l'ombre ; un scribe souffle sur ses doigts.","Des allées de plaques gravées sous toute la forêt, rangées par créancier ; des scribes emmitouflés y ajoutent des lignes à la lueur des torches."]}
```

### Les Racines de Cecepan (RES068) — Ressource · Toundra · Glace · aztèque

Geste : fouiller la neige au bâton à fouir pour déterrer les racines de renouée. Chute : la ressemblance (les racines en forme d'hommes vont à l'autel).

```json
{"fiche":"RES068","nom":"Les Racines de Cecepan",
 "recit":"Sur la toundra de Cecepan, les femmes fouillent la neige au bâton à fouir et déterrent les racines rouges de la renouée, sucrées par le gel. Les prêtres les veulent pour l'autel ; on leur garde les plus tordues, qui ressemblent à des hommes.",
 "pal":["Une plaine blanche, un bâton planté dans un trou de neige, une femme accroupie qui secoue une racine rouge.","La toundra criblée de petits puits dans la neige, des tas de racines rouges à chaque pas ; les bâtons à fouir sont plantés debout comme des piquets."]}
```

### Les Ponces du lac de Kuh-e Dud (RES211) — Ressource · Volcan · Feu · perse

Geste : ramasser à l'épuisette les pierres ponces qui flottent sur le lac du cratère. Chute : le prélèvement déjoué par la matière (une taxe au poids sur ce qui ne pèse rien).

```json
{"fiche":"RES211","nom":"Les Ponces du lac de Kuh-e Dud",
 "recit":"Le cratère de Kuh-e Dud garde un lac où flottent des pierres. On les ramasse au râteau de roseau depuis une barque ; les bains de la ville les achètent pour râper les talons. Le gouverneur prélève sa part au poids. Elles ne pèsent rien.",
 "pal":["Un lac vert au fond du cratère, quelques pierres grises qui flottent ; une barque de roseaux et un long râteau.","Le lac couvert de ponces d'une rive à l'autre, barques serrées, râteaux qui peignent l'eau ; on empile les pierres en meules légères sur la grève."]}
```

### Le Piquet de Tsaa-Nuur (RES341) — Ressource · Toundra · Glace · mongole

Geste : traire les rennes attachés en cercle. Chute : la fidélité (la bête tarit avec sa trayeuse).

```json
{"fiche":"RES341","nom":"Le Piquet de Tsaa-Nuur",
 "recit":"Au piquet de Tsaa-Nuur, on attache les rennes en cercle, tête vers le centre, et on les trait à genoux dans un seau d'écorce. Le lait est épais comme de la crème. Une renne ne se laisse traire que par une seule femme ; quand celle-ci meurt, la bête tarit.",
 "pal":["Un piquet planté dans la neige, une poignée de rennes attachés autour ; une femme à genoux trait dans un seau d'écorce.","Des cercles de rennes partout sur la plaine blanche, une femme sous chaque bête ; la vapeur du lait monte des seaux."]}
```

### Les Roselières de Qalamzar (RES366) — Ressource · Lande · Vent · perse

Geste : couper les roseaux à calame et les enterrer pour qu'ils durcissent. Chute : le prélèvement (les droits partent, les tordus instruisent).

```json
{"fiche":"RES366","nom":"Les Roselières de Qalamzar",
 "recit":"À Qalamzar, on coupe les roseaux de la lande et on les enterre des mois dans le fumier, pour qu'ils durcissent. Les plus droits partent à la chancellerie, qui en taille les calames des percepteurs. Les tordus restent ; les enfants apprennent à écrire avec.",
 "pal":["Une lande rase battue de vent, une touffe de roseaux, un homme qui les coupe au ras et les lie en botte.","Des bottes de roseaux dressées en faisceaux sur toute la lande, des fosses de fumier ouvertes ; on trie les tiges droites à contre-jour."]}
```

### Les Couvées de Campus Struthius (RES029) — Ressource · Savane · Feu · romaine

Geste : dérober les œufs d'autruche au nid. Chute : la ruse sue de tous (l'œuf vidé).

```json
{"fiche":"RES029","nom":"Les Couvées de Campus Struthius",
 "recit":"À Campus Struthius, un soldat agite un manteau pour détourner l'autruche ; l'autre roule les œufs hors du nid avec le pied. Le légat les veut entiers, pour en faire des coupes. On les lui envoie vidés par un trou d'aiguille. L'omelette reste au poste.",
 "pal":["Herbe haute et rousse, un nid creusé dans le sable, une autruche qui charge un homme agitant un manteau rouge.","Coquilles empilées en pyramide devant le poste, autruches parquées derrière des pieux ; des artisans percent les œufs à l'aiguille."]}
```

### Les Chênes-lièges de Corchuela (RES109) — Ressource · Savane · Feu · andalouse

Geste : écorcer les chênes-lièges à la hachette. Chute : le temps long (une date qu'on ne relit qu'une génération après).

```json
{"fiche":"RES109","nom":"Les Chênes-lièges de Corchuela",
 "recit":"À Corchuela, les écorceurs ouvrent le liège à la hachette sans entamer le bois, puis le décollent en planches courbes. Le chêne reste rouge et nu. On peint sur le tronc l'année de la levée ; on ne la relit que lorsque les enfants ont grandi.",
 "pal":["Des chênes clairsemés dans l'herbe sèche, un tronc dépouillé jusqu'au genou, un homme qui tire sur une planche de liège.","Des troncs rouges dénudés jusqu'aux branches sur toute la savane, et des piles de planches courbes qui sèchent au soleil."]}
```

### Les Poivrières de Mirchbagh (RES360) — Ressource · Jungle · Sève · moghole

Geste : secouer les grappes de poivre sur des nattes. Chute : le prix inversé (ceux qui récoltent n'en mangent pas).

```json
{"fiche":"RES360","nom":"Les Poivrières de Mirchbagh",
 "recit":"À Mirchbagh, on monte aux arbres où grimpe la liane de poivre et l'on secoue les grappes vertes sur des nattes étendues dessous. Au soleil, elles noircissent. Le poivre part pour les cuisines du palais, payé au poids d'argent. Au village, on assaisonne au gingembre.",
 "pal":["Un arbre enlacé de lianes, une natte étendue dessous, un garçon dans les branches qui secoue une grappe verte.","Des nattes partout sous les arbres, couvertes de grains qui noircissent ; une odeur piquante flotte, et l'on éternue en marchant."]}
```

### Les Chapeaux-citernes de Kampong Phsit (RES356) — Ressource · Forêt de champignons géants · Sève · khmère

Geste : grimper par les lamelles puiser l'eau de pluie dans les chapeaux. Chute : la ruse sue de tous (le saint homme paie plus).

```json
{"fiche":"RES356","nom":"Les Chapeaux-citernes de Kampong Phsit",
 "recit":"À Kampong Phsit, les chapeaux des champignons géants se creusent en vieillissant et gardent la pluie. On y grimpe par les lamelles, pieds nus, pour la puiser au seau de bambou. Elle a un goût de terre. Le bonze affirme qu'elle guérit ; on la lui vend plus cher.",
 "pal":["Un chapeau creusé en cuvette, une femme agrippée aux lamelles qui puise en haut avec un seau de bambou.","Une forêt de chapeaux pleins comme des bassins, grimpeurs partout, porteurs aux jarres ; les enfants y nagent quand personne ne regarde."]}
```

### Les Piliers sonnants de Lithophonia (RES218) — Ressource · Cavernes cristallines · Pierre · grecque

Geste : frapper les colonnes de cristal au maillet pour écouter les fêlures. Chute : le revers (le défaut sert mieux que la qualité).

```json
{"fiche":"RES218","nom":"Les Piliers sonnants de Lithophonia",
 "recit":"Dans les cavernes de Lithophonia, le carrier frappe chaque colonne de cristal au maillet et écoute. Une colonne saine chante clair ; on la débite pour les temples. Une fêlée sonne faux : on la marque à la craie et on la laisse. Le chœur de la ville y répète.",
 "pal":["Une caverne aux colonnes translucides, un homme l'oreille collée à l'une d'elles, le maillet levé.","Des colonnes marquées à la craie à perte de vue, débitées ou laissées debout ; le tintement des maillets roule d'une salle à l'autre."]}
```

### Les Chenaux de Chak Che' (RES353) — Ressource · Mangrove · Eau · maya

Geste : tronçonner le bois de teinture et le faire flotter. Chute : le profit pour rien (les crabes teints gratis).

```json
{"fiche":"RES353","nom":"Les Chenaux de Chak Che'",
 "recit":"À Chak Che', on tronçonne le bois de teinture de la mangrove et on le fait flotter en radeaux jusqu'à la côte. En route, il saigne : les chenaux rougissent derrière lui. Les teinturiers paient le bois au poids ; les crabes sont rouges pour rien.",
 "pal":["Un chenal sombre entre les racines, quelques bûches liées qui flottent, et l'eau qui rosit autour d'elles.","Des radeaux de bûches à la file dans tous les chenaux, une eau rouge comme du vin ; sur les berges, les crabes ont pris la couleur du bois."]}
```

### Les Fascines de Sandgarð (RES307) — Ressource · Désert de sable · Feu · nordique

Geste : planter des fascines de genêt contre la dune. Chute : l'ironie (le puissant bâtit en dur et perd).

```json
{"fiche":"RES307","nom":"Les Fascines de Sandgarð",
 "recit":"À Sandgarð, la dune avance chaque nuit de vent. Les familles plantent devant leurs portes des fascines de genêt et les relèvent chaque matin. Le jarl a fait bâtir les siennes en pierre, pour qu'elles durent. Le sable a passé entre les pierres ; sa halle est enterrée.",
 "pal":["Une dune qui lèche une maison de tourbe, quelques branches de genêt plantées en ligne devant la porte.","Des rangées de fascines dressées sur toutes les dunes autour du hameau, et des familles qui les replantent à l'aube, pelle à la main."]}
```

### Les Troncs à miel de Tepexco (RES196) — Ressource · Falaise côtière · Vent · aztèque

Geste : presser l'escargot de roche sur l'écheveau puis le reposer vivant. Chute : la fidélité (les escargots la reconnaissent).

```json
{"fiche":"RES196","nom":"Les Troncs à miel de Tepexco",
 "recit":"Sur la falaise de Tepexco, le vent chasse les fourmis. On cale donc dans les fentes de la roche des troncs creux bouchés d'argile, où nichent les abeilles sans dard. En saison sèche, Xochitl ouvre chaque bouchon, prend le miel du seigneur, puis le sien, et rebouche en s'excusant.",
 "pal":["Quelques troncs creux calés dans les fentes de la paroi, bouchés d'argile ; une femme couchée au bord colle l'oreille contre l'un d'eux.","La falaise hérissée de troncs-ruches au-dessus des vagues ; le vent sent le miel, et les jarres passent de main en main le long d'un sentier taillé."]}
```

