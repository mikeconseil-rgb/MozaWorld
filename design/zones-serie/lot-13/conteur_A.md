# Lot 13 — Conteur A, le Chroniqueur amer

Onze zones à cartes (fiche et 14 cartes chacune, soit 154 cartes). Carte des familles : `familles_A.md`, écrite avant les cartes (00 h 05, premier inscrit du lot), complétée à la remise (§ 7) après relecture de familles_B, C et D.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de la cible 5, de tous 9 ; `si` compté à 50 % ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n et ennemiSoin n rendent 2n ; prixBete n rend n ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (champ `budget`) ; formes du palier 7 entre 45 et 55 points de base, réveil de 60 à 100 %. Plafonds sur la carte entière, `si` et réveil compris : riposte 8, mana 2, dégâts ciblés 20 hors Donjon, 30 dans le Donjon.

**Validateur** (`valide.py`, script Python repris du lot 12 et complété avec les leçons du lot 12 dans `lecons12.py`, relancé sur ce fichier tel qu'il est remis ; cartes de B, C et D lues dans conteur_B.md, conteur_C.md et conteur_D.md ; familles de B, C et D relues à la main) : **0 erreur sur mes cartes**. Il reste 4 erreurs **de lot**, toutes du même type, « couple de colonne dans plus de 2 pôles du lot » : hésitation / `hesite` (A Abondance, D Nuit, B Floraison), marque / `vulnerable` (A Ombre, B Chaos, C Vide), brûlure / `brule` (B Cristal, C Poison, C Étoiles), bête / `bete` (B Abondance, C Calme, D Aurore). Elles viennent des 20 colonnes du lot pour 16 places de couple (voir les points pour le critique) ; sur les deux qui me touchent, je suis premier inscrit (familles_A.md écrit avant ceux de D, B et C), et les troisièmes l'ont déclaré. 7 avertissements, tous attendus et déclarés : 5e colonne (la place perdue), `blesse` déjà lu sur les Étoiles, même crochet que D ANT218 sur le Calme (D inscrit après moi), prix du Calme et de l'Exil déjà payés en principal (aucun prix neuf possible), et les deux couples de lot ci-dessus en avertissement de leçon. Il vérifie :
- **format et longueurs** : un bloc fiche et un bloc de 14 cartes par zone, paliers 1 à 7 ; récit de 60 à 100 mots ; `pal` de 160 caractères au plus ; ambiance de 12 à 20 mots ; effet de 250 caractères au plus, chaque nombre des `ops` présent dans le texte ; aucun mot de nombre ni chiffre dans la prose ; mots interdits ; chutes.
- **moteur** : opérations et arguments dans l'ordre, conditions lues dans `tv/src/cartes.js` (sans y toucher) ; `"cible":1` ; tag Loi, 2 Lois au moins par pôle d'Assemblée ; 3 invocations au moins par pôle d'Antre ; aucune condition rendue vraie ou fausse par une opération qui la précède ; garde des alliés comptée pour `garde`.
- **budgets** : écart de 15 % au plus aux paliers 1 à 6 ; palier 7 : base de 45 à 55, réveil de 60 à 100 %, ouverture de 3 à 6 mots, prix, résonance réveillée différente de la posée.
- **plafonds sur la carte entière** (`si` et réveil compris) : riposte 8, mana 2, dégâts ciblés 20 (30 en Donjon) ; aucune opération répétée au premier niveau ; écho sur 4 cartes exactement, au premier niveau.
- **familles** : places de LISTE.md tenues à l'unité ; pas de famille principale commune aux deux pôles d'une zone ; aucune famille principale déjà jouée par le même mot (lots 1 à 12) hors reprises et vocations déclarées ; appoints dans 3 de mes pôles au plus ; dégâts ciblés sur 4 cartes au plus, « tous » sur 3 au plus ; hésitation de tous jamais sur deux cartes de suite ; l'exil compté comme famille même en prix.
- **leçons du lot 12** : reprises et vocations avec un crochet et un prix principal neufs pour le mot entier (lots 1 à 12) ; bêtes à 40 PV au plus (60 au palier 7) ; pioche d'Assemblée dans le plafond de pioche, 2 Lois au moins ; prix principal sur 4 cartes au moins, second sur 2 au moins, jamais 7 sur 7 ; chaque crochet dans 3 de mes pôles au plus, l'intention ennemie dans 2 ; couples de colonne comptés au lot ; mot principal et institution absents de `noms-pris.txt` et des autres conteurs, pluriel compris.
- **bêtes** : nom par nom, sur une table de familles scientifiques ; aucune famille deux fois chez moi, 2 pôles du lot au plus.
- **noms** : absents de `noms-pris.txt` et des cartes de B, C et D ; prénoms et institutions absents des autres fichiers du lot.

**Places des familles (LISTE.md, suivie sans échange)** : marque 2 (Ruine CIT020, Pierre ANT194), garde des alliés 1 (Vide DON040), soin des alliés 2 (Ciel ASS151, Tempête ASS185), exil 1 (Cristal ANT194) ; places rares : hésitation (Nectar ASS186 ; de tous sur 3 cartes, jamais de suite), vol de vie (Vérité ANT096), coups au hasard (Fer ANT109), écho (Croissance ANT249 : 4 cartes, au premier niveau, jamais sous `si` ni sous réveil). **Vocations 4** : Abysse (ASS151) en pioche d'Assemblée, 2e emploi ; Exil (ASS194) en pioche d'Assemblée, 3e et dernier ; Bois (ANT109) et Pourriture (ANT249) en invocations, 3e et dernier emploi chacun. **Reprises 3** : Calme, Foyer, Mensonge. **Colonnes 4** : Étoiles (PV et `blesse`), Poison (défausse et `defausseAPrix`), Ombre (marque et `vulnerable`), Lumière (garde et `garde`) ; **place perdue déclarée** : Abondance, écrite avec une 5e colonne (hésitation et `hesite`), hors du compte des 4. 10 + 4 + 3 + 4 + 1 = 22.

**Reprises (3, déclarées ; neuves pour le mot entier, lots 1 à 12)** :
- **Calme en riposte** (2e emploi, après D ANT038 : `elan`, garde ennemie et défausse) : crochet `blesse`, jamais lu sur le Calme ; prix principal soin ennemi (les six sortes de prix ont déjà été payées en principal sur le Calme : aucun prix neuf possible, déclaré).
- **Foyer en affaiblissement** (2e emploi, après C CIT036 : `hesite`, soin ennemi) : `piocheCout0` et PV, tous deux neufs pour le Foyer.
- **Mensonge en mana** (2e emploi, après B ASS051 : `hesiteAvant`, défausse) : `brule` et la bête, neufs pour le Mensonge ; engoulevents (caprimulgidés).

**Vocations, neuves pour le mot** : Abysse `hesite` + soin ennemi ; Exil `cibleGarde` + soin ennemi (aucun prix neuf possible sur l'Exil, déclaré ; l'exil en prix aurait fait de l'exil une famille principale) ; Bois `hesite` + exil, pics (picidés) ; Pourriture `piocheCout0` + garde ennemie, gloutons (mustélidés).

**Crochets (3 de mes pôles au plus ; `hesite` et `hesiteAvant` ensemble)** : `blesse` 3 (Ruine, Étoiles, Calme), `cibleGarde` 3 (Ciel, Exil, Cristal), `hesite` 3 (Abondance, Abysse, Bois), `piocheCout0` 3 (Foyer, Pierre, Pourriture), `brule` 2 (Mensonge, Croissance), `vulnerable` 2 (Nectar, Ombre), `garde` 2 (Tempête, Lumière), `defausseAPrix` 1 (Poison), `cartesJouees` 1 (Vide). Intention ennemie : 2 pôles (Vérité `pietine`, Fer `seul`). Hors colonne, aucun pôle ne nourrit son propre crochet.

**Prix** : deux sortes par pôle, la principale sur 4 cartes au moins, la seconde sur 2 au moins ; aucun pôle ne paie le même prix sur ses 7 cartes.

**Points pour le critique**
- **20 colonnes au lot pour 16 places de couple** (8 couples × 2). J'ai inscrit les miennes le premier (familles_A.md, première version) : hésitation, PV, défausse, marque, garde, une fois chacun. D, inscrit juste après, a pris un pôle sur chacun de ses couples ; B et C, inscrits après, ont déclaré leurs troisièmes pôles. Il reste au lot 4 couples à 3 pôles : `hesite` (A, D, B), `vulnerable` (A, B, C), `brule` (B, C, C), `bete` (B, C, D). À arbitrer par le critique ; si un de mes pôles doit céder, l'Abondance (place perdue) est le plus simple à réécrire.
- **Étoiles en colonne `blesse`** : ce crochet a déjà été lu sur les Étoiles (un pôle, avant moi). C'est une colonne, pas une reprise, et les Étoiles n'avaient plus de couple neuf hors de la marque, que j'ai laissée.
- **Calme et Exil** : aucun prix neuf possible pour le mot (les six sortes déjà payées en principal) ; je prends le soin ennemi, jamais payé par la même famille sur ce mot.
- **Calme `blesse`** : D ANT218 lit aussi `blesse` sur le Calme ; il s'est inscrit après moi.
- **Nom changé** : « Le Jarghu de Galt Jalga » devient « Le Chuulgan de Galt Jalga » (B et C ont laissé le jarghu pour moi, mais Tsuglaan est dans noms-pris.txt ; chuulgan, l'assemblée de clan, ne l'est pas).
- **±7 changés après lecture des autres** : DON040 +7 les lanternes lâchées (C avait l'étoile en plein midi) ; CIT020 +7 les barques de riz par la brèche ; ASS151 +7 le plongeon au ciel (B avait les cordelettes) ; ANT096 +7 la traite devant la paroisse.
- **Pioche principale sur 2 de mes pôles** (Abysse et Exil), toutes deux en vocation d'Assemblée.
- **Erreurs de lot qui ne me concernent pas** : `brule` (B, C, C) et `bete` (B, C, D).

Recettes de récit (onze, aucune deux fois, aucune de mes lots 11 et 12 ; aucun document cité, aucun dialogue, aucune promotion qui éloigne) : CIT020 la ruine déclarée ; DON040 la censure du registre ; ASS151 l'honnêteté confisquée ; ASS186 l'honneur retourné ; ASS185 la précaution qui enchaîne ; ASS194 la peine recherchée ; ANT096 le coupable ailé ; ANT194 l'échange inégal ; ANT051 l'impôt contourné ; ANT109 le cycle commandé ; ANT249 le circuit du marchand. Recettes des extrêmes : dans le champ `recette` de chaque zone.

Résonances des formes du palier 7 (posée → réveillée). Posées : Racine 6, Sceau 4, Braise 4, Abîme 3, Givre 3, Sang 2. Réveillées : Givre 5, Abîme 4, Racine 4, Sceau 3, Braise 3, Sang 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| CIT020 | Sceau → Givre | Racine → Sceau |
| DON040 | Abîme → Sceau | Braise → Abîme |
| ASS151 | Abîme → Racine | Racine → Braise |
| ASS186 | Sang → Braise | Racine → Sang |
| ASS185 | Givre → Racine | Sceau → Givre |
| ASS194 | Braise → Abîme | Sang → Givre |
| ANT096 | Braise → Racine | Sceau → Sang |
| ANT194 | Givre → Abîme | Racine → Givre |
| ANT051 | Abîme → Braise | Braise → Racine |
| ANT109 | Sceau → Sang | Racine → Sceau |
| ANT249 | Givre → Abîme | Racine → Givre |

---

## 1. Hurmazgān, la Brèche entretenue (CIT020) — Citadelle · Marais · Sève · Perse

Forme du récit : la ruine déclarée (le commandant Farhad écrit chaque année que le fort s'enfonce, plante des rizières avec l'argent des réparations, et l'inspecteur, voyant les murs dans l'eau, relève la somme). Recette du −7 : l'engloutissement (les murs dans l'eau jusqu'aux créneaux) ; du +7 : le port (les barques de riz entrent dans la cour par la brèche).

**Ruine (−)** : le rapport au shah → la brique qui boit → les roseaux de la cour → l'argent des réparations → le fossé débordé → le mur qui penche → les Créneaux sous l'eau. Fil mécanique : **marque** (place), garde du héros en appoint, crochet « le héros a moins de la moitié de ses PV » (aucun PV en prix) ; prix : garde ennemie et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, garde du héros 4, dégâts ciblés 4, exil 3, riposte 3, affaiblissement 2, mana 2, hésitation 2, pioche 2, soin du héros 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (garde ennemie 5, exil 3).

**Abondance (+)** : le riz de la digue → les plants repiqués → les greniers de brique → le commandant Farhad → les barques de riz → l'inspecteur du shah → le Riz par la brèche. Fil mécanique : **colonne hésitation / « la cible hésite déjà »** (place perdue déclarée ; hésitation sur 4 cartes, lue sur 4, toujours avant), soin du héros en appoint ; prix : défausse et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 4, soin du héros 4, dégâts ciblés 4, affaiblissement 3, pioche 2, riposte 2, garde des alliés 2, garde du héros 2 ; crochet « la cible hésite déjà » sur 4 ; prix sur 7 cartes (défausse 5, PV 3).

```json
{"fiche":"CIT020","nom":"Hurmazgān, la Brèche entretenue",
 "recit":"Le commandant Farhad tenait Hurmazgān, un fort de briques planté dans les roseaux du marais. Chaque printemps, il écrivait au shah que les murs s'enfonçaient, et le shah envoyait de l'argent pour les réparer. Farhad le dépensait en digues et en rizières, qui rendaient bien. Les murs, faute de réparation, s'enfonçaient pour de bon. Un été, le shah dépêcha un inspecteur pour vérifier les lettres. L'inspecteur vit les murs dans l'eau jusqu'aux créneaux, et fit relever la somme.",
 "pal":["Seules les tours sortent des roseaux ; les murs de Hurmazgān sont dans l'eau jusqu'aux créneaux, et des hérons nichent au-dessus de la porte.","Les briques s'effritent dans l'eau brune ; la cour est inondée jusqu'aux genoux, et la garnison dort sur le chemin de ronde.","Un fort de briques au milieu des roseaux du marais ; une digue de terre mène à la porte, et des rizières verdissent sous les murs.","Les rizières entourent le fort jusqu'à l'horizon ; des barques chargées de riz glissent dans les canaux, et l'on bat le grain dans la cour.","Les barques de riz entrent dans la cour par la brèche ; le fort n'est plus qu'un port de grains, et ses murs servent de quais."],
 "pm":"Ruine","pp":"Abondance"}
```

```json
[
{"id":"CIT020-moins-1","zone":"CIT020","pole":"-","palier":1,"nom":"Le Rapport au shah","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; le héros gagne 5 de garde ; l'attaque de la cible baisse de 1. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","cible",2],["garde","heros",5],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Citadelle","Sève","Pôle −","Marque","Affaiblissement","Garde","Prix"],
 "ambiance":"Farhad trempe son calame et décrit au shah des murs qui s'enfoncent, brique après brique, dans la vase.",
 "budget":"11 / 10 (+10 %)"},
{"id":"CIT020-moins-2","zone":"CIT020","pole":"-","palier":2,"nom":"La Brique qui boit","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 8 dégâts à la cible. Puis la cible est marquée : +1 par coup reçu ; la cible hésite ; +1 mana de Sève. Prix : cette carte s'exile.",
 "ops":[["si","blesse",[["deg","cible",8]]],["vulnerable","cible",1],["hesite","cible"],["mana","Sève",1],["exil"]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Marque","Contrôle","Mana","Condition","Exil","Prix"],
 "ambiance":"La brique crue boit l'eau du marais par le pied, et le mur se met à pencher sans bruit.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"CIT020-moins-3","zone":"CIT020","pole":"-","palier":3,"nom":"Les Roseaux de la cour","cout":2,"cible":0,
 "effet":"Tous les ennemis sont marqués : +1 par coup reçu ; le héros gagne 10 de garde ; piochez 1 carte ; le héros se soigne de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","tous",1],["garde","heros",10],["pioche",1],["soin","heros",6],["ennemiGarde",1]],
 "tags":["Citadelle","Sève","Pôle −","Marque","Garde","Soin","Pioche","Prix"],
 "ambiance":"Les roseaux ont percé les dalles de la cour ; la garnison y fauche de quoi couvrir les toits.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"CIT020-moins-4","zone":"CIT020","pole":"-","palier":4,"nom":"L'Argent des réparations","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 18 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; riposte 3 jusqu'à votre prochain tour ; +1 mana de Sève. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","blesse",[["deg","cible",18]]],["vulnerable","cible",3],["riposte",3],["mana","Sève",1],["ennemiGarde",1]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Marque","Riposte","Mana","Condition","Prix"],
 "ambiance":"Le coffre du shah arrive par la digue ; Farhad signe le reçu et appelle ses terrassiers.",
 "budget":"25 / 28 (−11 %)"},
{"id":"CIT020-moins-5","zone":"CIT020","pole":"-","palier":5,"nom":"Le Fossé débordé","cout":2,"cible":1,
 "effet":"La cible est marquée : +3 par coup reçu ; le héros gagne 12 de garde ; la cible hésite ; piochez 1 carte ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["vulnerable","cible",3],["garde","heros",12],["hesite","cible"],["pioche",1],["affaiblit","cible",2],["exil"]],
 "tags":["Citadelle","Sève","Pôle −","Marque","Affaiblissement","Contrôle","Garde","Pioche","Exil","Prix"],
 "ambiance":"Le fossé a rejoint le marais ; on ne sait plus où finit la défense et où commencent les grenouilles.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"CIT020-moins-6","zone":"CIT020","pole":"-","palier":6,"nom":"Le Mur qui penche","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible. Puis tous les ennemis sont marqués : +2 par coup reçu ; riposte 5 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","blesse",[["deg","cible",20]]],["vulnerable","tous",2],["riposte",5],["ennemiGarde",1]],
 "tags":["Citadelle","Sève","Pôle −","Dégâts","Marque","Riposte","Condition","Prix"],
 "ambiance":"Le mur du nord penche sur l'eau comme un homme qui boit ; personne n'ose plus marcher dessus.",
 "budget":"31,2 / 36 (−13 %)"},
{"id":"CIT020-moins7","zone":"CIT020","pole":"-","palier":7,"nom":"Les Créneaux sous l'eau","cout":2,"cible":1,
 "effet":"La forteresse boit le marais. 14 à la cible ; tous marqués (+2) ; héros +18 de garde ; soin du héros 11. Pose Sceau. Si Givre (consommée) : la cible marquée (+3) ; héros +12 de garde ; riposte 5. Prix : ennemis +2 de garde ; cette carte s'exile.",
 "ops":[["deg","cible",14],["vulnerable","tous",2],["garde","heros",18],["soin","heros",11],["pose","Sceau"],["reveil","Givre",true,[["vulnerable","cible",3],["garde","heros",12],["riposte",5]]],["ennemiGarde",2],["exil"]],
 "tags":["Citadelle","Sève","Forme ultime −7","Dégâts","Marque","Riposte","Garde","Soin","Exil","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Seules les tours de Hurmazgān sortent des roseaux ; les hérons ont pris la porte, et la garnison les créneaux.",
 "budget":"45,6 sans combo ; réveil +28,6 (63 %)"},
{"id":"CIT020-plus-1","zone":"CIT020","pole":"+","palier":1,"nom":"Le Riz de la digue","cout":1,"cible":1,
 "effet":"La cible hésite ; le héros se soigne de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","cible"],["soin","heros",8],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Contrôle","Soin","Prix"],
 "ambiance":"Sur la digue neuve, payée par le shah, on brûle les chaumes de l'an passé avant de semer.",
 "budget":"10 / 10 (+0 %)"},
{"id":"CIT020-plus-2","zone":"CIT020","pole":"+","palier":2,"nom":"Les Plants repiqués","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Puis +1 mana de Sève ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["si","hesite",[["deg","cible",10]]],["mana","Sève",1],["pioche",1],["prixPV",1]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"Les femmes repiquent le riz pieds nus dans l'eau grise, en ligne, sous les murs du fort.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"CIT020-plus-3","zone":"CIT020","pole":"+","palier":3,"nom":"Les Greniers de brique","cout":2,"cible":1,
 "effet":"La cible hésite ; le héros se soigne de 14 ; riposte 3 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","cible"],["soin","heros",14],["riposte",3],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Contrôle","Riposte","Soin","Prix"],
 "ambiance":"Les greniers sont les seuls bâtiments réparés de Hurmazgān ; leurs briques sont cuites, et non crues.",
 "budget":"22 / 24 (−8 %)"},
{"id":"CIT020-plus-4","zone":"CIT020","pole":"+","palier":4,"nom":"Le Commandant Farhad","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 14 dégâts à la cible ; l'attaque de la cible baisse de 2. Puis vos alliés gagnent 12 de garde ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",14],["affaiblit","cible",2]]],["garde","allies",12],["pioche",1],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Affaiblissement","Garde","Pioche","Condition","Prix"],
 "ambiance":"Farhad compte ses sacs de riz à la lampe, et écrit au shah que le mur a cédé.",
 "budget":"25,4 / 28 (−9 %)"},
{"id":"CIT020-plus-5","zone":"CIT020","pole":"+","palier":5,"nom":"Les Barques de riz","cout":2,"cible":0,
 "effet":"Tous les ennemis hésitent ; le héros se soigne de 14 ; le héros gagne 10 de garde. Prix : le héros perd 2 PV.",
 "ops":[["hesite","tous"],["soin","heros",14],["garde","heros",10],["prixPV",2]],
 "tags":["Citadelle","Sève","Pôle +","Contrôle","Garde","Soin","Prix"],
 "ambiance":"Les barques plates descendent les canaux chargées de riz jusqu'au plat-bord, et la garnison les décharge en chantant.",
 "budget":"29 / 32 (−9 %)"},
{"id":"CIT020-plus-6","zone":"CIT020","pole":"+","palier":6,"nom":"L'Inspecteur du shah","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 1 ; riposte 5 jusqu'à votre prochain tour ; le héros gagne 12 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","hesite",[["deg","cible",20]]],["affaiblit","tous",1],["riposte",5],["garde","heros",12],["prixDefausse",1]],
 "tags":["Citadelle","Sève","Pôle +","Dégâts","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"L'inspecteur relève sa robe pour traverser la cour inondée, et note tout ce qu'il voit dans l'eau.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"CIT020-plus7","zone":"CIT020","pole":"+","palier":7,"nom":"Le Riz par la brèche","cout":2,"cible":1,
 "effet":"Le riz entre par la brèche. Si la cible hésite déjà, 8 à la cible. Tous hésitent ; soin du héros 14 ; alliés +20 de garde. Pose Racine. Si Sceau (consommée) : soin du héros 20 ; la cible −3 d'attaque. Prix : défaussez 1 carte ; héros −2 PV.",
 "ops":[["si","hesite",[["deg","cible",8]]],["hesite","tous"],["soin","heros",14],["garde","allies",20],["pose","Racine"],["reveil","Sceau",true,[["soin","heros",20],["affaiblit","cible",3]]],["prixDefausse",1],["prixPV",2]],
 "tags":["Citadelle","Sève","Forme ultime +7","Dégâts","Affaiblissement","Contrôle","Garde","Soin","Condition","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"Les barques de riz entrent par la brèche, et le fort sert de port aux grains.",
 "budget":"46 sans combo ; réveil +29 (63 %)"}
]
```

---

## 2. Xingchi Tai, le Registre effacé (DON040) — Donjon · Désert de sel · Pierre · Chinoise impériale

*Note du critique (lot 13) : Nom changé : « Yanchi Tai » devient « Xingchi Tai » (préfixe Yan- déjà en jeu deux fois : Yanchuan-Bi, Yancheng-fei).*

Forme du récit : la censure du registre (l'astronome Qiu Lan note une étoile invitée de mauvais augure ; le Bureau fait gratter la page ; l'étoile brille quand même). Recette du −7 : l'extinction (le ciel noir sur le sel, les instruments bâchés) ; du +7 : les lanternes lâchées (le ciel se peuple d'une lanterne par étoile effacée).

**Vide (−)** : la tour au bord du sel → le lac sans reflet → les instruments bâchés → la nuit couverte → le Bureau de l'astronomie → la page grattée → le Ciel noir. Fil mécanique : **garde des alliés** (place), crochet « vous avez déjà joué une autre carte ce tour » ; pièges du donjon : brûlure, coups au hasard ; prix : garde ennemie et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, dégâts ciblés 4, affaiblissement 2, hésitation 2, riposte 2 ; crochet « vous avez déjà joué une autre carte ce tour » sur 3 ; prix sur 7 cartes (garde ennemie 6, PV 3).

**Étoiles (+)** : l'étoile invitée → le registre ouvert → les astronomes de Xingchi → l'astronome Qiu Lan → l'été de l'étoile → le grattoir du Bureau → les Lanternes lâchées. Fil mécanique : **colonne PV / « le héros a moins de la moitié de ses PV »** (PV en prix sur 5 cartes, `blesse` lu sur 4, toujours avant le prix) ; pièges : brûlure, coups au hasard, dégâts à tous ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 4, garde du héros 3, brûlure 3, soin du héros 3, pioche 2, riposte 2, mana 2, affaiblissement 2, dégâts à tous 2 ; crochet « le héros a moins de la moitié de ses PV » sur 4 ; prix sur 7 cartes (PV 5, défausse 3).

```json
{"fiche":"DON040","nom":"Xingchi Tai, le Registre effacé",
 "recit":"La tour de Xingchi Tai, au bord du lac de sel, regarde le ciel pour l'empereur. Un été, l'astronome Qiu Lan y vit paraître une étoile invitée, plus brillante que toutes, et la nota au registre. Le Bureau de l'astronomie lut la page : une étoile nouvelle, cette année-là, était de mauvais augure pour la dynastie. On fit gratter la page. L'étoile brilla jusqu'à l'automne, visible en plein jour. Le registre de cette année-là est le seul sans étoile. Le ciel, lui, n'a pas été consulté.",
 "pal":["Le ciel est noir au-dessus du sel, sans une étoile ; les sphères de bronze sont bâchées, et la tour se tait au bord du lac blanc.","Des nuages bas couvrent le lac de sel ; les astronomes grattent des pages à la lampe, et des gardes barrent l'escalier de la tour.","Une tour d'observation au bord d'un lac de sel ; des sphères de bronze sur la terrasse, et des registres empilés dans les salles basses.","Une étoile nouvelle brille au-dessus du sel jusqu'au jour ; les gardes la montrent du doigt, et la terrasse ne désemplit plus la nuit.","Des lanternes lâchées montent sans fin du lac de sel, une pour chaque étoile effacée, et le ciel en est plein jusqu'à l'aube."],
 "pm":"Vide","pp":"Étoiles"}
```

```json
[
{"id":"DON040-moins-1","zone":"DON040","pole":"-","palier":1,"nom":"La Tour au bord du sel","cout":1,"cible":1,
 "effet":"Vos alliés gagnent 7 de garde ; l'attaque de la cible baisse de 1. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",7],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle −","Affaiblissement","Garde","Prix"],
 "ambiance":"La tour de Xingchi Tai se dresse seule au bord du lac blanc, battue de vent.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"DON040-moins-2","zone":"DON040","pole":"-","palier":2,"nom":"Le Lac sans reflet","cout":1,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 10 dégâts à la cible. Puis vos alliés gagnent 5 de garde ; +1 mana de Pierre. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",10]]],["garde","allies",5],["mana","Pierre",1],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Garde","Mana","Condition","Prix"],
 "ambiance":"Sous les nuages, le lac de sel ne reflète plus rien ; il est blanc, plat et muet.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"DON040-moins-3","zone":"DON040","pole":"-","palier":3,"nom":"Les Instruments bâchés","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 10 de garde ; la cible brûle : 3 par tour pendant 3 tours ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["garde","allies",10],["brulure","cible",3,3],["hesite","cible"],["prixPV",2]],
 "tags":["Donjon","Pierre","Pôle −","Brûlure","Contrôle","Garde","Prix"],
 "ambiance":"On a jeté des toiles cirées sur les sphères de bronze, et le gardien veille dessous avec un brasero.",
 "budget":"24 / 24 (+0 %)"},
{"id":"DON040-moins-4","zone":"DON040","pole":"-","palier":4,"nom":"La Nuit couverte","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 20 dégâts à la cible. Puis vos alliés gagnent 8 de garde ; riposte 4 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",20]]],["garde","allies",8],["riposte",4],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Pas une étoile de toute la nuit ; les astronomes jouent aux dés dans la salle basse, sous les registres.",
 "budget":"25,6 / 28 (−9 %)"},
{"id":"DON040-moins-5","zone":"DON040","pole":"-","palier":5,"nom":"Le Bureau de l'astronomie","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 12 de garde ; 4 coups de 4 au hasard ; piochez 1 carte. Prix : le héros perd 2 PV ; chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",12],["deg","hasard",4,4],["pioche",1],["prixPV",2],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Garde","Pioche","Prix"],
 "ambiance":"Les envoyés du Bureau arrivent en chaise à porteurs, avec des sceaux, des grattoirs et des visages fermés.",
 "budget":"30,4 / 32 (−5 %)"},
{"id":"DON040-moins-6","zone":"DON040","pole":"-","palier":6,"nom":"La Page grattée","cout":2,"cible":1,
 "effet":"Si vous avez déjà joué une autre carte ce tour, 20 dégâts à la cible. Puis vos alliés gagnent 12 de garde ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 6. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cartesJouees",[["deg","cible",20]]],["garde","allies",12],["affaiblit","tous",1],["soin","heros",6],["ennemiGarde",1]],
 "tags":["Donjon","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Soin","Condition","Prix"],
 "ambiance":"Qiu Lan gratte l'encre au couteau, ligne après ligne, jusqu'à rendre le papier mince comme une aile.",
 "budget":"35 / 36 (−3 %)"},
{"id":"DON040-moins7","zone":"DON040","pole":"-","palier":7,"nom":"Le Ciel noir","cout":2,"cible":1,
 "effet":"Plus une étoile au registre. 20 à la cible ; alliés +15 de garde ; tous hésitent ; riposte 4. Pose Abîme. Si Sceau (consommée) : alliés +12 de garde ; 10 à la cible ; riposte 3. Prix : ennemis +2 de garde ; héros −3 PV.",
 "ops":[["deg","cible",20],["garde","allies",15],["hesite","tous"],["riposte",4],["pose","Abîme"],["reveil","Sceau",true,[["garde","allies",12],["deg","cible",10],["riposte",3]]],["ennemiGarde",2],["prixPV",3]],
 "tags":["Donjon","Pierre","Forme ultime −7","Dégâts","Contrôle","Riposte","Garde","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Le ciel est noir sur le sel ; les sphères sont bâchées, et la tour ne regarde plus rien.",
 "budget":"48 sans combo ; réveil +30,4 (63 %)"},
{"id":"DON040-plus-1","zone":"DON040","pole":"+","palier":1,"nom":"L'Étoile invitée","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; le héros gagne 5 de garde. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",2],["garde","heros",5],["prixPV",1]],
 "tags":["Donjon","Pierre","Pôle +","Marque","Garde","Prix"],
 "ambiance":"Elle parut un soir à l'est de la Grande Ourse, plus vive que Vénus, et ne bougea plus.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON040-plus-2","zone":"DON040","pole":"+","palier":2,"nom":"Le Registre ouvert","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 12 dégâts à la cible. Puis piochez 1 carte ; la cible brûle : 2 par tour pendant 2 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["deg","cible",12]]],["pioche",1],["brulure","cible",2,2],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Brûlure","Pioche","Condition","Prix"],
 "ambiance":"Le registre est ouvert sur la table de pierre, l'encre encore fraîche à la page de l'été.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"DON040-plus-3","zone":"DON040","pole":"+","palier":3,"nom":"Les Astronomes de Xingchi","cout":2,"cible":0,
 "effet":"4 coups de 4 au hasard ; riposte 3 jusqu'à votre prochain tour ; le héros se soigne de 6. Prix : le héros perd 3 PV.",
 "ops":[["deg","hasard",4,4],["riposte",3],["soin","heros",6],["prixPV",3]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Riposte","Soin","Prix"],
 "ambiance":"Les astronomes se relaient sur la terrasse, la nuque raide, et notent l'étoile à chaque veille.",
 "budget":"25 / 24 (+4 %)"},
{"id":"DON040-plus-4","zone":"DON040","pole":"+","palier":4,"nom":"L'Astronome Qiu Lan","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible ; le héros se soigne de 8. Puis +2 mana de Pierre ; la cible hésite ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["deg","cible",20],["soin","heros",8]]],["mana","Pierre",2],["hesite","cible"],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Affaiblissement","Contrôle","Soin","Mana","Condition","Prix"],
 "ambiance":"Qiu Lan, les yeux rouges, recopie l'été sans l'étoile, d'une main qui ne tremble pas.",
 "budget":"28 / 28 (+0 %)"},
{"id":"DON040-plus-5","zone":"DON040","pole":"+","palier":5,"nom":"L'Été de l'étoile","cout":2,"cible":0,
 "effet":"6 dégâts à tous les ennemis ; le héros gagne 12 de garde ; l'attaque de chaque ennemi baisse de 1 ; +1 mana de Pierre. Prix : le héros perd 3 PV.",
 "ops":[["deg","tous",6],["garde","heros",12],["affaiblit","tous",1],["mana","Pierre",1],["prixPV",3]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Affaiblissement","Garde","Mana","Prix"],
 "ambiance":"Tout l'été, l'étoile brille en plein jour au-dessus du sel, et les caravaniers s'arrêtent pour la regarder.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"DON040-plus-6","zone":"DON040","pole":"+","palier":6,"nom":"Le Grattoir du Bureau","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible. Puis tous les ennemis brûlent : 2 par tour pendant 3 tours ; riposte 4 jusqu'à votre prochain tour ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",20]]],["brulure","tous",2,3],["riposte",4],["pioche",1],["prixPV",2]],
 "tags":["Donjon","Pierre","Pôle +","Dégâts","Brûlure","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Le grattoir d'ivoire du Bureau a effacé plus d'étoiles que l'aube ; il dort dans la soie.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"DON040-plus7","zone":"DON040","pole":"+","palier":7,"nom":"Les Lanternes lâchées","cout":2,"cible":1,
 "effet":"Le ciel se peuple de lanternes. Si vos PV sont sous la moitié, 10 à la cible. 20 à la cible ; tous brûlent (3 × 3 tours) ; héros +10 de garde. Pose Braise. Si Abîme (consommée) : 6 à tous ; soin du héros 16. Prix : héros −3 PV ; défaussez 1 carte.",
 "ops":[["si","blesse",[["deg","cible",10]]],["deg","cible",20],["brulure","tous",3,3],["garde","heros",10],["pose","Braise"],["reveil","Abîme",true,[["deg","tous",6],["soin","heros",16]]],["prixPV",3],["prixDefausse",1]],
 "tags":["Donjon","Pierre","Forme ultime +7","Dégâts","Brûlure","Garde","Soin","Condition","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"Des lanternes de papier montent du lac de sel, une pour chaque étoile effacée, jusqu'à remplir le ciel.",
 "budget":"46,8 sans combo ; réveil +29,2 (62 %)"}
]
```

---

## 3. Le Kamachikuy d'Ukhuqucha (ASS151) — Assemblée · Oasis · Sève · Inca

Forme du récit : l'honnêteté confisquée (le tribut se fixe sur la profondeur de la lagune ; le plongeur Atoq, honnête, ne trouve pas le fond ; l'Inca déclare la lagune sacrée et la prend). Recette du −7 : le gouffre (la lagune devenue puits noir) ; du +7 : le plongeon au ciel (les plongeurs sautent dans les nuages reflétés).

**Abysse (−)** : la loi de la profondeur → le plongeur Atoq → la vase rapportée → la loi du tribut d'eau → le fond introuvable → la loi du Soleil → le Puits de la lagune. Fil mécanique : **pioche d'Assemblée** (vocation, 2e emploi), affaiblissement en appoint, crochet « la cible hésite déjà » (aucune hésitation dans le pôle) ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, affaiblissement 4, dégâts ciblés 4, exil 3, mana 2, riposte 2, garde des alliés 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (soin ennemi 5, exil 3).

**Ciel (+)** : la loi des plongeurs → le ciel dans la lagune → les palmiers renversés → la loi de l'eau achetée → les plongeurs du reflet → le nuage d'Ukhuqucha → le Plongeon au ciel. Fil mécanique : **soin des alliés** (place), perce-garde en appoint, crochet « la cible a de la garde » (aucune garde ennemie en prix dans le pôle) ; prix : défausse et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, perce-garde 4, dégâts ciblés 4, mana 2, riposte 2, pioche 2, affaiblissement 2, exil 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (défausse 6, exil 2).

```json
{"fiche":"ASS151","nom":"Le Kamachikuy d'Ukhuqucha",
 "recit":"L'oasis d'Ukhuqucha payait son tribut d'après la profondeur de sa lagune. Chaque année, un plongeur allait toucher le fond, et le kamachikuy en déclarait la mesure. On plongeait peu, on remontait vite, et le tribut restait léger. Une année, le plongeur Atoq, qui était honnête, descendit aussi loin qu'il put. Il ne trouva pas le fond. L'Inca, apprenant qu'une lagune n'avait pas de fond, la déclara sacrée et la prit pour lui. Depuis, la lagune appartient au Soleil, et l'oasis achète son eau.",
 "pal":["La lagune n'est plus qu'un puits noir ; les palmiers penchent au-dessus du vide, et l'on n'entend pas tomber les pierres qu'on y jette.","L'eau sombre descend à pic sous les palmiers ; des plongeurs grelottent sur la rive, et des gardiens de l'Inca surveillent le bord.","Une lagune verte entre les dunes, bordée de palmiers ; des plongeurs remontent de la vase, et le kamachikuy siège sous un auvent de roseaux.","La lagune reflète le ciel si nettement que les nuages semblent couler dedans ; les plongeurs hésitent au bord, la tête renversée.","L'oasis paraît suspendue dans le ciel ; les plongeurs sautent dans les nuages reflétés et remontent les cheveux pleins de lumière."],
 "pm":"Abysse","pp":"Ciel"}
```

```json
[
{"id":"ASS151-moins-1","zone":"ASS151","pole":"-","palier":1,"nom":"Loi de la profondeur","cout":1,"cible":1,
 "effet":"Loi de la profondeur : piochez 1 carte ; l'attaque de la cible baisse de 3. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",1],["affaiblit","cible",3],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Affaiblissement","Pioche","Prix"],
 "ambiance":"Le tribut d'Ukhuqucha se compte en brasses de lagune, et chaque brasse coûte des sacs de dattes.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ASS151-moins-2","zone":"ASS151","pole":"-","palier":2,"nom":"Le Plongeur Atoq","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 12 dégâts à la cible. Puis piochez 1 carte ; +1 mana de Sève. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","hesite",[["deg","cible",12]]],["pioche",1],["mana","Sève",1],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"Atoq respire longtemps sur la rive, les yeux fermés, puis se laisse couler sans un remous.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS151-moins-3","zone":"ASS151","pole":"-","palier":3,"nom":"La Vase rapportée","cout":2,"cible":0,
 "effet":"Piochez 2 cartes ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 10 ; +1 mana de Sève. Prix : cette carte s'exile.",
 "ops":[["pioche",2],["affaiblit","tous",1],["soin","heros",10],["mana","Sève",1],["exil"]],
 "tags":["Assemblée","Sève","Pôle −","Affaiblissement","Soin","Pioche","Mana","Exil","Prix"],
 "ambiance":"Le plongeur ouvre la main devant le kamachikuy ; la vase noire coule entre ses doigts sur la natte.",
 "budget":"24,6 / 24 (+3 %)"},
{"id":"ASS151-moins-4","zone":"ASS151","pole":"-","palier":4,"nom":"Loi du tribut d'eau","cout":2,"cible":1,
 "effet":"Loi du tribut d'eau : si la cible hésite déjà, 16 dégâts à la cible ; piochez 1 carte. Puis riposte 5 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 3. Prix : chaque ennemi se soigne de 2.",
 "ops":[["si","hesite",[["deg","cible",16],["pioche",1]]],["riposte",5],["affaiblit","cible",3],["ennemiSoin",2]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Affaiblissement","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Le kamachikuy déclare la mesure à voix haute, et l'envoyé de l'Inca la note sans lever les yeux.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS151-moins-5","zone":"ASS151","pole":"-","palier":5,"nom":"Le Fond introuvable","cout":2,"cible":1,
 "effet":"Piochez 2 cartes ; riposte 4 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu ; vos alliés gagnent 8 de garde. Prix : cette carte s'exile.",
 "ops":[["pioche",2],["riposte",4],["vulnerable","cible",2],["garde","allies",8],["exil"]],
 "tags":["Assemblée","Sève","Pôle −","Marque","Riposte","Garde","Pioche","Exil","Prix"],
 "ambiance":"Atoq remonte bleu de froid, les mains vides : en bas, l'eau devient noire et ne finit pas.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS151-moins-6","zone":"ASS151","pole":"-","palier":6,"nom":"Loi du Soleil","cout":2,"cible":1,
 "effet":"Loi du Soleil : si la cible hésite déjà, 20 dégâts à la cible. Puis piochez 2 cartes ; vos alliés se soignent de 6 ; la cible brûle : 3 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","hesite",[["deg","cible",20]]],["pioche",2],["soin","allies",6],["brulure","cible",3,3],["ennemiSoin",1]],
 "tags":["Assemblée","Sève","Pôle −","Loi","Dégâts","Brûlure","Soin","Pioche","Condition","Prix"],
 "ambiance":"La lagune sans fond appartient désormais au Soleil, et ses gardiens comptent chaque cruche qu'on y puise.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ASS151-moins7","zone":"ASS151","pole":"-","palier":7,"nom":"Le Puits de la lagune","cout":2,"cible":1,
 "effet":"La lagune n'a plus de fond. 14 à la cible ; piochez 2 ; chaque ennemi −3 d'attaque ; alliés +10 de garde. Pose Abîme. Si Racine (consommée) : piochez 1 ; héros +16 de garde ; la cible −4 d'attaque. Prix : ennemis soignés de 2 ; cette carte s'exile.",
 "ops":[["deg","cible",14],["pioche",2],["affaiblit","tous",3],["garde","allies",10],["pose","Abîme"],["reveil","Racine",true,[["pioche",1],["garde","heros",16],["affaiblit","cible",4]]],["ennemiSoin",2],["exil"]],
 "tags":["Assemblée","Sève","Forme ultime −7","Dégâts","Affaiblissement","Garde","Pioche","Exil","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"La lagune d'Ukhuqucha est un puits noir sous les palmiers penchés ; on n'entend pas les pierres tomber.",
 "budget":"46,8 sans combo ; réveil +28,8 (62 %)"},
{"id":"ASS151-plus-1","zone":"ASS151","pole":"+","palier":1,"nom":"Loi des plongeurs","cout":1,"cible":1,
 "effet":"Loi des plongeurs : vos alliés se soignent de 4 ; la garde de la cible tombe à 0 ; +1 mana de Sève. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","allies",4],["briseGarde","cible"],["mana","Sève",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Perce-garde","Soin","Mana","Prix"],
 "ambiance":"Seuls les plongeurs du kamachikuy ont le droit d'entrer dans la lagune, et seulement à jeun.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ASS151-plus-2","zone":"ASS151","pole":"+","palier":2,"nom":"Le Ciel dans la lagune","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["soin","allies",4],["riposte",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Riposte","Soin","Condition","Prix"],
 "ambiance":"Par temps calme, la lagune reflète si bien le ciel qu'on voit les nuages passer sous ses pieds.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS151-plus-3","zone":"ASS151","pole":"+","palier":3,"nom":"Les Palmiers renversés","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 9 ; toute garde ennemie tombe à 0 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","allies",9],["briseGarde","tous"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Perce-garde","Soin","Pioche","Prix"],
 "ambiance":"Dans l'eau immobile, les palmiers poussent vers le bas, et les oiseaux semblent voler dessous.",
 "budget":"21,1 / 24 (−12 %)"},
{"id":"ASS151-plus-4","zone":"ASS151","pole":"+","palier":4,"nom":"Loi de l'eau achetée","cout":2,"cible":1,
 "effet":"Loi de l'eau achetée : si la cible a de la garde, 18 dégâts à la cible. Puis vos alliés se soignent de 8 ; piochez 1 carte ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["soin","allies",8],["pioche",1],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Loi","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Chaque famille de l'oasis paie sa cruche aux gardiens du Soleil, et le prix est gravé sur le seuil.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS151-plus-5","zone":"ASS151","pole":"+","palier":5,"nom":"Les Plongeurs du reflet","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 10 ; ces coups ignorent la garde ; riposte 4 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","allies",10],["ignoreGarde"],["riposte",4],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Pôle +","Affaiblissement","Perce-garde","Riposte","Soin","Prix"],
 "ambiance":"Les enfants de l'oasis apprennent à plonger dans le reflet sans déranger les nuages, les bras serrés.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS151-plus-6","zone":"ASS151","pole":"+","palier":6,"nom":"Le Nuage d'Ukhuqucha","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis vos alliés se soignent de 10 ; +1 mana de Sève ; le héros gagne 8 de garde. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["soin","allies",10],["mana","Sève",1],["garde","heros",8],["exil"]],
 "tags":["Assemblée","Sève","Pôle +","Dégâts","Garde","Soin","Mana","Condition","Exil","Prix"],
 "ambiance":"Un nuage s'arrête chaque soir au-dessus de la lagune, comme s'il attendait qu'on lui rende son reflet.",
 "budget":"31,4 / 36 (−13 %)"},
{"id":"ASS151-plus7","zone":"ASS151","pole":"+","palier":7,"nom":"Le Plongeon au ciel","cout":2,"cible":1,
 "effet":"On plonge dans le ciel. 14 à la cible ; alliés soignés de 13 ; toute garde ennemie à 0 ; alliés +10 de garde. Pose Racine. Si Braise (consommée) : alliés soignés de 14 ; la cible −3 d'attaque. Prix : cette carte s'exile ; défaussez 1 carte.",
 "ops":[["deg","cible",14],["soin","allies",13],["briseGarde","tous"],["garde","allies",10],["pose","Racine"],["reveil","Braise",true,[["soin","allies",14],["affaiblit","cible",3]]],["exil"],["prixDefausse",1]],
 "tags":["Assemblée","Sève","Forme ultime +7","Dégâts","Affaiblissement","Perce-garde","Garde","Soin","Exil","Combo","Pose Racine","Réveil Braise","Prix"],
 "ambiance":"Les plongeurs d'Ukhuqucha sautent dans les nuages reflétés et remontent les cheveux pleins de lumière.",
 "budget":"46,1 sans combo ; réveil +30 (65 %)"}
]
```

---

## 4. La Fakataha de Vaimoana (ASS186) — Assemblée · Savane · Feu · Polynésienne

Forme du récit : l'honneur retourné (une racine amère rend le chef malade ; la fakataha donne la coupe d'honneur aux hôtes ; on se dispute la place juste après eux). Recette du −7 : l'arrêt (chacun tient sa coupe sans boire, le bol renversé) ; du +7 : chacun boit à genoux à sa propre fleur.

**Poison (−)** : la loi de la racine amère → la coupe du chef → le bol de bois → la loi de l'hôte d'abord → le matāpule Latu → les malades de la fakataha → les Coupes tenues. Fil mécanique : **colonne défausse / « vous avez défaussé pour payer »** (défausse en prix sur 4 cartes, `defausseAPrix` lu sur 4, toujours avant le prix), brûlure en appoint ; prix : défausse et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 4, dégâts ciblés 4, pioche 3, garde du héros 3, mana 2, hésitation 2, riposte 2, soin du héros 2, affaiblissement 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 4 ; prix sur 7 cartes (défausse 4, PV 3).

**Nectar (+)** : la loi de la coupe des hôtes → la racine après le feu → le breuvage de Vaimoana → la loi de la fleur → les fleurs de l'herbe → la savane qui ruisselle → Boire à la fleur. Fil mécanique : **hésitation** (place rare ; hésitation de tous sur 3 cartes, jamais de suite), crochet « la cible est déjà marquée » (marque sur une seule carte, sans `si`) ; prix : PV et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : hésitation 7, dégâts ciblés 4, soin du héros 3, garde du héros 2, mana 2, pioche 2, riposte 2, garde des alliés 2, affaiblissement 2 ; crochet « la cible est déjà marquée » sur 3 ; prix sur 7 cartes (PV 5, défausse 3).

```json
{"fiche":"ASS186","nom":"La Fakataha de Vaimoana",
 "recit":"Dans la savane de Vaimoana, la racine du breuvage pousse après le passage du feu. À la fakataha, le chef boit la coupe d'honneur avant tous les autres. Une saison, la racine sortit amère, et le chef en fut malade jusqu'aux pluies. Le matāpule Latu proposa une règle nouvelle : la coupe d'honneur irait désormais à l'hôte, par respect. On l'adopta d'une voix. Depuis, on sert les hôtes avec une grande déférence, et l'on regarde leur visage. Autour du bol, chacun se dispute la place juste après eux.",
 "pal":["La savane est grise et l'herbe couchée ; le grand bol de bois est renversé, et chacun tient sa coupe pleine sans oser y boire.","La racine amère sèche sur des claies ; les chefs reniflent leur coupe, et l'on tend d'abord le breuvage aux étrangers assis à l'écart.","Une savane brûlée où repousse la racine ; au centre, le bol de la fakataha, les chefs assis en rond, et un matāpule qui verse.","Les fleurs percent les cendres de la savane ; les abeilles bourdonnent autour du bol, et le breuvage a pris le goût du miel.","La savane ruisselle de nectar ; chacun boit à genoux à sa propre fleur, et le grand bol vide repose au milieu, oublié."],
 "pm":"Poison","pp":"Nectar"}
```

```json
[
{"id":"ASS186-moins-1","zone":"ASS186","pole":"-","palier":1,"nom":"Loi de la racine amère","cout":1,"cible":1,
 "effet":"Loi de la racine amère : la cible brûle : 3 par tour pendant 3 tours ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",3,3],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Brûlure","Pioche","Prix"],
 "ambiance":"Toute racine arrachée après un feu trop chaud est goûtée par le matāpule avant d'entrer au bol.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS186-moins-2","zone":"ASS186","pole":"-","palier":2,"nom":"La Coupe du chef","cout":1,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 12 dégâts à la cible. Puis la cible hésite ; +1 mana de Feu. Prix : le héros perd 1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",12]]],["hesite","cible"],["mana","Feu",1],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Contrôle","Mana","Condition","Prix"],
 "ambiance":"La coupe du chef est taillée dans une noix polie, plus vieille que la fakataha.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS186-moins-3","zone":"ASS186","pole":"-","palier":3,"nom":"Le Bol de bois","cout":2,"cible":0,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours ; le héros se soigne de 7 ; riposte 3 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","tous",2,3],["soin","heros",7],["riposte",3],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Brûlure","Riposte","Soin","Prix"],
 "ambiance":"Le grand bol à pieds courts trône au centre du cercle, et sa fibre a bu des générations de breuvage.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS186-moins-4","zone":"ASS186","pole":"-","palier":4,"nom":"Loi de l'hôte d'abord","cout":2,"cible":1,
 "effet":"Loi de l'hôte d'abord : si une carte a été défaussée en prix ce tour, 18 dégâts à la cible ; la garde de la cible tombe à 0. Puis l'attaque de chaque ennemi baisse de 1 ; piochez 1 carte ; +2 mana de Feu. Prix : le héros perd 1 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",18],["briseGarde","cible"]]],["affaiblit","tous",1],["pioche",1],["mana","Feu",2],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Affaiblissement","Perce-garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"La coupe d'honneur va désormais à l'hôte, par respect ; la fakataha l'a voté sans une voix contre.",
 "budget":"26,1 / 28 (−7 %)"},
{"id":"ASS186-moins-5","zone":"ASS186","pole":"-","palier":5,"nom":"Le Matāpule Latu","cout":2,"cible":1,
 "effet":"La cible brûle : 5 par tour pendant 3 tours ; le héros gagne 10 de garde ; la cible hésite ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",5,3],["garde","heros",10],["hesite","cible"],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle −","Brûlure","Contrôle","Garde","Pioche","Prix"],
 "ambiance":"Latu parle pour le chef, verse pour le chef, et goûte du bout des lèvres ce que boira l'hôte.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS186-moins-6","zone":"ASS186","pole":"-","palier":6,"nom":"Les Malades de la fakataha","cout":2,"cible":1,
 "effet":"Si une carte a été défaussée en prix ce tour, 20 dégâts à la cible. Puis la cible est marquée : +2 par coup reçu ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 12 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","defausseAPrix",[["deg","cible",20]]],["vulnerable","cible",2],["riposte",4],["garde","heros",12],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Marque","Riposte","Garde","Condition","Prix"],
 "ambiance":"Le chef a passé la saison sèche couché sous l'auvent, et la fakataha a siégé sans lui.",
 "budget":"31,6 / 36 (−12 %)"},
{"id":"ASS186-moins7","zone":"ASS186","pole":"-","palier":7,"nom":"Les Coupes tenues","cout":2,"cible":1,
 "effet":"Nul ne boit. Si une carte a été défaussée en prix ce tour, 10 à la cible. Tous brûlent (3 × 3 tours) ; chaque ennemi −2 d'attaque ; héros +15 de garde. Pose Sang. Si Braise (consommée) : 10 à la cible ; soin du héros 19. Prix : défaussez 1 carte.",
 "ops":[["si","defausseAPrix",[["deg","cible",10]]],["brulure","tous",3,3],["affaiblit","tous",2],["garde","heros",15],["pose","Sang"],["reveil","Braise",true,[["deg","cible",10],["soin","heros",19]]],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Brûlure","Affaiblissement","Garde","Soin","Condition","Combo","Pose Sang","Réveil Braise","Prix"],
 "ambiance":"Le bol est renversé dans l'herbe grise, et tout le cercle tient sa coupe pleine sans boire.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"ASS186-plus-1","zone":"ASS186","pole":"+","palier":1,"nom":"Loi de la coupe des hôtes","cout":1,"cible":1,
 "effet":"Loi de la coupe des hôtes : la cible hésite ; le héros gagne 6 de garde. Prix : le héros perd 1 PV.",
 "ops":[["hesite","cible"],["garde","heros",6],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Contrôle","Garde","Prix"],
 "ambiance":"L'hôte reçoit la coupe des mains du matāpule, et le cercle regarde sa gorge pendant qu'il boit.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ASS186-plus-2","zone":"ASS186","pole":"+","palier":2,"nom":"La Racine après le feu","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 12 dégâts à la cible. Puis la cible hésite ; le héros gagne 4 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["hesite","cible"],["garde","heros",4],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Après le feu, la racine pointe dans la cendre noire, rose et tendre, et on la déterre au bâton.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ASS186-plus-3","zone":"ASS186","pole":"+","palier":3,"nom":"Le Breuvage de Vaimoana","cout":2,"cible":0,
 "effet":"Tous les ennemis hésitent ; le héros se soigne de 10 ; piochez 1 carte ; +1 mana de Feu. Prix : le héros perd 2 PV.",
 "ops":[["hesite","tous"],["soin","heros",10],["pioche",1],["mana","Feu",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Contrôle","Soin","Pioche","Mana","Prix"],
 "ambiance":"Le breuvage de cette année est doux comme une eau de fleurs ; même les hôtes en redemandent.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS186-plus-4","zone":"ASS186","pole":"+","palier":4,"nom":"Loi de la fleur","cout":2,"cible":1,
 "effet":"Loi de la fleur : si la cible est déjà marquée, 18 dégâts à la cible. Puis la cible hésite ; riposte 5 jusqu'à votre prochain tour ; +1 mana de Feu. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["hesite","cible"],["riposte",5],["mana","Feu",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Contrôle","Riposte","Mana","Condition","Prix"],
 "ambiance":"Nul ne coupe une fleur pendant la fakataha ; les abeilles y ont autant de droits que les chefs.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS186-plus-5","zone":"ASS186","pole":"+","palier":5,"nom":"Les Fleurs de l'herbe","cout":2,"cible":1,
 "effet":"Tous les ennemis hésitent ; vos alliés gagnent 8 de garde ; l'attaque de la cible baisse de 3 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["hesite","tous"],["garde","allies",8],["affaiblit","cible",3],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Affaiblissement","Contrôle","Garde","Pioche","Prix"],
 "ambiance":"Les fleurs percent les cendres de la savane, et les abeilles bourdonnent jusque dans le cercle du bol.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ASS186-plus-6","zone":"ASS186","pole":"+","palier":6,"nom":"La Savane qui ruisselle","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis la cible hésite ; le héros se soigne de 10 ; riposte 5 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["hesite","cible"],["soin","heros",10],["riposte",5],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Contrôle","Riposte","Soin","Condition","Prix"],
 "ambiance":"Le nectar coule des fleurs sur les pieds des chefs, et les coupes posées s'emplissent toutes seules.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ASS186-plus7","zone":"ASS186","pole":"+","palier":7,"nom":"Boire à la fleur","cout":2,"cible":1,
 "effet":"Chacun boit à sa fleur. 14 à la cible ; tous hésitent ; soin du héros 13 ; alliés +8 de garde ; la cible marquée (+2). Pose Racine. Si Sang (consommée) : soin du héros 12 ; 6 à la cible ; la cible −4 d'attaque. Prix : héros −3 PV ; défaussez 1 carte.",
 "ops":[["deg","cible",14],["hesite","tous"],["soin","heros",13],["garde","allies",8],["vulnerable","cible",2],["pose","Racine"],["reveil","Sang",true,[["soin","heros",12],["deg","cible",6],["affaiblit","cible",4]]],["prixPV",3],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Marque","Affaiblissement","Contrôle","Garde","Soin","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Toute la fakataha boit à genoux, chacun à sa fleur, et le grand bol vide repose au milieu.",
 "budget":"45,6 sans combo ; réveil +30 (66 %)"}
]
```

---

## 5. Le Shūgi de Tsunagishima (ASS185) — Assemblée · Îles flottantes · Vent · Japonaise féodale

Forme du récit : la précaution qui enchaîne (après la grande tempête, le shūgi oblige chaque île à racheter une corde neuve au cordier Tokuemon ; le calme revient, et les îles trop bien tenues ne vont plus où est le poisson). Recette du −7 : le choc (les îles arrachées se heurtent dans la bourrasque) ; du +7 : le nœud (toutes les îles liées en une seule masse immobile).

**Tempête (−)** : la loi des cordes → la bourrasque → les îles qui se heurtent → la loi de la grande tempête → le cordier Tokuemon → les amarres rompues → les Îles arrachées. Fil mécanique : **soin des alliés** (place), coups au hasard en appoint, crochet « la Garde du héros est levée » (garde sur une seule carte, sans `si`) ; prix : exil et garde ennemie. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, coups au hasard 4, dégâts ciblés 4, mana 2, affaiblissement 2, riposte 2, exil 2 ; crochet « la Garde du héros est levée » sur 3 ; prix sur 7 cartes (garde ennemie 6, exil 2).

**Calme (+)** : la loi du calme → le calme revenu → les îles amarrées → la loi du rachat → la mer sans poisson → le nœud du shūgi → les Îles nouées. Fil mécanique : **riposte** (reprise 1 ; 8 au plus par carte), garde des alliés en appoint, crochet « le héros a moins de la moitié de ses PV » (aucun PV en prix) ; prix : soin ennemi et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, garde des alliés 4, dégâts ciblés 4, pioche 2, affaiblissement 2, hésitation 2, soin du héros 2, garde du héros 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 7 cartes (soin ennemi 5, défausse 3).

```json
{"fiche":"ASS185","nom":"Le Shūgi de Tsunagishima",
 "recit":"Les îles de Tsunagishima flottent au-dessus de la mer, chacune tenue à la falaise par sa corde de chanvre. Les années calmes, personne n'en changeait. Vint la grande tempête : des cordes cassèrent, et des îles partirent avec leurs rizières. Au shūgi qui suivit, on décida que chaque île rachèterait une corde neuve, plus grosse, au cordier Tokuemon, qui fixa lui-même son prix. On paya sans discuter. Le calme revint, et les îles, trop bien tenues, ne purent plus aller où était le poisson.",
 "pal":["Les îles arrachées tournoient dans la bourrasque et se heurtent ; des cordes rompues fouettent l'air, et la mer gronde très loin dessous.","Le vent tire les îles au bout de leurs cordes ; les cabanes claquent, et les gens s'accrochent aux pieux d'amarrage, à plat ventre.","Des îles de terre flottent au-dessus de la mer, chacune tenue à la falaise par une corde de chanvre, avec des rizières sur le dos.","Les îles dorment dans l'air immobile ; des cordes neuves, grosses comme des cuisses, les serrent à la falaise et les unes aux autres.","Toutes les îles sont nouées en une seule masse, tissée de cordes comme un filet ; rien ne bouge, et les barques pendent sans servir."],
 "pm":"Tempête","pp":"Calme"}
```

```json
[
{"id":"ASS185-moins-1","zone":"ASS185","pole":"-","palier":1,"nom":"Loi des cordes","cout":1,"cible":0,
 "effet":"Loi des cordes : vos alliés se soignent de 4 ; 3 coups de 2 au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","allies",4],["deg","hasard",2,3],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Soin","Prix"],
 "ambiance":"Chaque île entretient sa propre corde ; celle qui la laisse pourrir répond seule de sa chute.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS185-moins-2","zone":"ASS185","pole":"-","palier":2,"nom":"La Bourrasque","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 10 dégâts à la cible. Puis vos alliés se soignent de 4 ; +1 mana de Vent. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",10]]],["soin","allies",4],["mana","Vent",1],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"La bourrasque arrive de la mer en sifflant, et toutes les îles tirent sur leurs cordes à la fois.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS185-moins-3","zone":"ASS185","pole":"-","palier":3,"nom":"Les Îles qui se heurtent","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 8 ; 4 coups de 3 au hasard ; l'attaque de la cible baisse de 1. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["soin","allies",8],["deg","hasard",3,4],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Affaiblissement","Soin","Prix"],
 "ambiance":"Les îles se cognent dans la nuit ; les rizières de l'une versent dans les rizières de l'autre.",
 "budget":"25 / 24 (+4 %)"},
{"id":"ASS185-moins-4","zone":"ASS185","pole":"-","palier":4,"nom":"Loi de la grande tempête","cout":2,"cible":1,
 "effet":"Loi de la grande tempête : si la Garde du héros est levée, 18 dégâts à la cible. Puis vos alliés se soignent de 8 ; piochez 1 carte ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",18]]],["soin","allies",8],["pioche",1],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Marque","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le shūgi siège sous la pluie, les manches trempées, et vote les cordes neuves avant la fin de l'averse.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ASS185-moins-5","zone":"ASS185","pole":"-","palier":5,"nom":"Le Cordier Tokuemon","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 10 ; 4 coups de 3 au hasard ; riposte 3 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["soin","allies",10],["deg","hasard",3,4],["riposte",3],["exil"]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Riposte","Soin","Exil","Prix"],
 "ambiance":"Tokuemon tresse le chanvre devant sa porte, sans lever les yeux, et annonce son prix d'une voix égale.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS185-moins-6","zone":"ASS185","pole":"-","palier":6,"nom":"Les Amarres rompues","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis vos alliés se soignent de 10 ; l'attaque de chaque ennemi baisse de 1 ; +1 mana de Vent. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",20]]],["soin","allies",10],["affaiblit","tous",1],["mana","Vent",1],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Affaiblissement","Soin","Mana","Condition","Prix"],
 "ambiance":"Le bout d'une corde cassée pend de la falaise et bat contre la roche au rythme du vent.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ASS185-moins7","zone":"ASS185","pole":"-","palier":7,"nom":"Les Îles arrachées","cout":2,"cible":1,
 "effet":"Les cordes cèdent toutes. Alliés soignés de 12 ; 4 coups de 6 au hasard ; héros +10 de garde. Pose Givre. Si Racine (consommée) : alliés soignés de 10 ; riposte 4 ; 8 à la cible. Prix : cette carte s'exile ; ennemis +1 de garde.",
 "ops":[["soin","allies",12],["deg","hasard",6,4],["garde","heros",10],["pose","Givre"],["reveil","Racine",true,[["soin","allies",10],["riposte",4],["deg","cible",8]]],["exil"],["ennemiGarde",1]],
 "tags":["Assemblée","Vent","Forme ultime −7","Dégâts","Riposte","Garde","Soin","Exil","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Les îles arrachées tournoient et se heurtent dans la bourrasque, au-dessus d'une mer qui gronde.",
 "budget":"45 sans combo ; réveil +31 (69 %)"},
{"id":"ASS185-plus-1","zone":"ASS185","pole":"+","palier":1,"nom":"Loi du calme","cout":1,"cible":0,
 "effet":"Loi du calme : riposte 4 jusqu'à votre prochain tour ; vos alliés gagnent 3 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",4],["garde","allies",3],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Riposte","Garde","Prix"],
 "ambiance":"Quand le vent tombe, nul ne hausse la voix sur les îles avant que la mer se taise.",
 "budget":"9,6 / 10 (−4 %)"},
{"id":"ASS185-plus-2","zone":"ASS185","pole":"+","palier":2,"nom":"Le Calme revenu","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["deg","cible",10]]],["riposte",3],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Après la tempête, l'air ne bouge plus ; on entend les cordes neuves grincer doucement.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS185-plus-3","zone":"ASS185","pole":"+","palier":3,"nom":"Les Îles amarrées","cout":2,"cible":1,
 "effet":"Riposte 5 jusqu'à votre prochain tour ; vos alliés gagnent 8 de garde ; l'attaque de la cible baisse de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",5],["garde","allies",8],["affaiblit","cible",2],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Affaiblissement","Riposte","Garde","Prix"],
 "ambiance":"Les cordes neuves sont grosses comme des cuisses, et les îles ne dérivent plus d'une paume.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ASS185-plus-4","zone":"ASS185","pole":"+","palier":4,"nom":"Loi du rachat","cout":2,"cible":1,
 "effet":"Loi du rachat : si le héros a moins de la moitié de ses PV, 18 dégâts à la cible ; le héros se soigne de 6. Puis riposte 5 jusqu'à votre prochain tour ; la cible hésite. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","blesse",[["deg","cible",18],["soin","heros",6]]],["riposte",5],["hesite","cible"],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Dégâts","Contrôle","Riposte","Soin","Condition","Prix"],
 "ambiance":"Chaque île rachète sa corde au cordier, au prix du cordier, et le shūgi en tient le compte.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ASS185-plus-5","zone":"ASS185","pole":"+","palier":5,"nom":"La Mer sans poisson","cout":2,"cible":1,
 "effet":"Riposte 6 jusqu'à votre prochain tour ; vos alliés gagnent 10 de garde ; +2 mana de Vent ; la cible est marquée : +1 par coup reçu. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",6],["garde","allies",10],["mana","Vent",2],["vulnerable","cible",1],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle +","Marque","Riposte","Garde","Mana","Prix"],
 "ambiance":"Les bancs de poissons passent au large, et les îles amarrées les regardent passer sans bouger.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS185-plus-6","zone":"ASS185","pole":"+","palier":6,"nom":"Le Nœud du shūgi","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 20 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; le héros gagne 8 de garde ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["deg","cible",20]]],["riposte",6],["garde","heros",8],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Affaiblissement","Riposte","Garde","Condition","Prix"],
 "ambiance":"Le shūgi décide de nouer les îles entre elles, pour plus de sûreté, et le cordier se frotte les mains.",
 "budget":"31,4 / 36 (−13 %)"},
{"id":"ASS185-plus7","zone":"ASS185","pole":"+","palier":7,"nom":"Les Îles nouées","cout":2,"cible":1,
 "effet":"Toutes les îles se nouent. 15 à la cible ; riposte 8 ; alliés +10 de garde ; tous hésitent. Pose Sceau. Si Givre (consommée) : soin du héros 14 ; piochez 1 ; héros +12 de garde. Prix : ennemis soignés de 2 ; défaussez 1 carte.",
 "ops":[["deg","cible",15],["riposte",8],["garde","allies",10],["hesite","tous"],["pose","Sceau"],["reveil","Givre",true,[["soin","heros",14],["pioche",1],["garde","heros",12]]],["ennemiSoin",2],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Forme ultime +7","Dégâts","Contrôle","Riposte","Garde","Soin","Pioche","Combo","Pose Sceau","Réveil Givre","Prix"],
 "ambiance":"Toutes les îles sont nouées en une seule masse immobile, et les barques pendent sans servir.",
 "budget":"45 sans combo ; réveil +27,6 (61 %)"}
]
```

---

## 6. Le Chuulgan de Galt Jalga (ASS194) — Assemblée · Canyon · Feu · Mongole

Forme du récit : la peine recherchée (le khan relègue ses fâcheux dans un canyon où brûlent des veines de charbon ; on y vit au chaud ; la pire peine devient d'être renvoyé chez soi). Recette du −7 : le dos tourné (chaque exilé seul dans sa niche de roche) ; du +7 : la file (des cavaliers attendent au rebord qu'on les condamne).

**Exil (−)** : la loi de la relégation → la route du canyon → les fâcheux du khan → la loi du dos tourné → les niches de roche → la veine qui brûle → Chacun dans sa niche. Fil mécanique : **pioche d'Assemblée** (vocation, 3e et dernier emploi), mana en appoint, crochet « la cible a de la garde » (aucune garde ennemie en prix) ; prix : exil et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : pioche 7, mana 4, dégâts ciblés 4, hésitation 2, riposte 2, garde des alliés 2, garde du héros 2, affaiblissement 2, soin du héros 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (soin ennemi 5, PV 3).

**Foyer (+)** : la loi du feu de veine → le charbon de la paroi → les yourtes au chaud → la loi de la peine renversée → Altan au coin du feu → les cavaliers au rebord → la File des condamnés. Fil mécanique : **affaiblissement** (reprise 2), soin des alliés en appoint, crochet « vous avez en main une carte de coût 0 » ; prix : PV et soin ennemi. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, soin des alliés 4, dégâts ciblés 4, garde du héros 2, riposte 2, mana 2, pioche 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (PV 5, soin ennemi 3).

```json
{"fiche":"ASS194","nom":"Le Chuulgan de Galt Jalga",
 "recit":"Le khan envoyait ses fâcheux au fond du canyon de Galt Jalga, où rien ne pousse. Altan, relégué pour avoir trop parlé au chuulgan, y trouva des veines de charbon qui brûlaient dans la roche depuis toujours. Il planta sa yourte contre la paroi et dormit au chaud tout l'hiver. D'autres relégués le rejoignirent, puis leurs familles. Les nobles, qui gelaient dans la steppe, se mirent à dire au khan des choses désagréables, et à attendre la sentence. La plus lourde peine du chuulgan, désormais, est d'être renvoyé chez soi.",
 "pal":["Chaque exilé est assis seul dans sa niche de roche rouge, le dos tourné aux autres ; aucune fumée ne monte du canyon.","Des yourtes isolées au fond de la gorge ; des cavaliers du khan surveillent le rebord, et les relégués ne se parlent pas.","Un canyon de roche rouge où la paroi fume par endroits ; des yourtes serrées contre les veines chaudes, et des chevaux maigres.","La paroi brûle doucement le long du canyon ; des familles cuisent sur la roche, et les feux des yourtes se voient depuis le rebord.","Le canyon fume de foyers jusqu'au rebord ; une file de cavaliers attend là-haut, en habits de fête, qu'on veuille bien les condamner."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ASS194-moins-1","zone":"ASS194","pole":"-","palier":1,"nom":"Loi de la relégation","cout":1,"cible":1,
 "effet":"Loi de la relégation : piochez 1 carte ; +1 mana de Feu ; la cible hésite. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",1],["mana","Feu",1],["hesite","cible"],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Contrôle","Pioche","Mana","Prix"],
 "ambiance":"Le relégué part sans escorte, avec un cheval et une outre, et ne se retourne pas au col.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS194-moins-2","zone":"ASS194","pole":"-","palier":2,"nom":"La Route du canyon","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. Puis piochez 1 carte ; +1 mana de Feu. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["pioche",1],["mana","Feu",1],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Pioche","Mana","Condition","Prix"],
 "ambiance":"La piste descend en lacets dans la roche rouge ; on y croise des os de chevaux, jamais un homme.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS194-moins-3","zone":"ASS194","pole":"-","palier":3,"nom":"Les Fâcheux du khan","cout":2,"cible":0,
 "effet":"Piochez 2 cartes ; +2 mana de Feu ; riposte 3 jusqu'à votre prochain tour ; vos alliés gagnent 5 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["pioche",2],["mana","Feu",2],["riposte",3],["garde","allies",5],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Riposte","Garde","Pioche","Mana","Prix"],
 "ambiance":"Ils arrivent un par un, le bavard, le cousin, le conseiller trop franc, et chacun choisit sa niche.",
 "budget":"24 / 24 (+0 %)"},
{"id":"ASS194-moins-4","zone":"ASS194","pole":"-","palier":4,"nom":"Loi du dos tourné","cout":2,"cible":1,
 "effet":"Loi du dos tourné : si la cible a de la garde, 18 dégâts à la cible ; la garde de la cible tombe à 0. Puis piochez 1 carte ; la cible est marquée : +2 par coup reçu ; le héros gagne 10 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["deg","cible",18],["briseGarde","cible"]]],["pioche",1],["vulnerable","cible",2],["garde","heros",10],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Marque","Perce-garde","Garde","Pioche","Condition","Prix"],
 "ambiance":"Au fond du canyon, on ne parle pas au voisin ; le khan a des oreilles jusque dans la roche.",
 "budget":"26,5 / 28 (−5 %)"},
{"id":"ASS194-moins-5","zone":"ASS194","pole":"-","palier":5,"nom":"Les Niches de roche","cout":2,"cible":0,
 "effet":"Piochez 2 cartes ; +2 mana de Feu ; l'attaque de chaque ennemi baisse de 1 ; le héros se soigne de 12. Prix : le héros perd 2 PV.",
 "ops":[["pioche",2],["mana","Feu",2],["affaiblit","tous",1],["soin","heros",12],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle −","Affaiblissement","Soin","Pioche","Mana","Prix"],
 "ambiance":"Chaque niche creusée dans la paroi abrite un homme, un feu de bouse et une rancune.",
 "budget":"30,6 / 32 (−4 %)"},
{"id":"ASS194-moins-6","zone":"ASS194","pole":"-","palier":6,"nom":"La Veine qui brûle","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis piochez 2 cartes ; la cible brûle : 3 par tour pendant 3 tours ; riposte 4 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["pioche",2],["brulure","cible",3,3],["riposte",4],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Brûlure","Riposte","Pioche","Condition","Prix"],
 "ambiance":"La veine de charbon rougeoie dans la paroi depuis toujours, et la neige fond à sa hauteur.",
 "budget":"33 / 36 (−8 %)"},
{"id":"ASS194-moins7","zone":"ASS194","pole":"-","palier":7,"nom":"Chacun dans sa niche","cout":2,"cible":1,
 "effet":"Chaque exilé se tait seul. 15 à la cible ; piochez 2 ; héros +15 de garde ; tous hésitent ; chaque ennemi −1 d'attaque. Pose Braise. Si Abîme (consommée) : piochez 1 ; soin du héros 15 ; alliés +8 de garde. Prix : ennemis soignés de 1 ; héros −2 PV.",
 "ops":[["deg","cible",15],["pioche",2],["garde","heros",15],["hesite","tous"],["affaiblit","tous",1],["pose","Braise"],["reveil","Abîme",true,[["pioche",1],["soin","heros",15],["garde","allies",8]]],["ennemiSoin",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Affaiblissement","Contrôle","Garde","Soin","Pioche","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"Chaque exilé est assis seul dans sa niche, dos tourné, et aucune fumée ne monte du canyon.",
 "budget":"46,6 sans combo ; réveil +28,6 (61 %)"},
{"id":"ASS194-plus-1","zone":"ASS194","pole":"+","palier":1,"nom":"Loi du feu de veine","cout":1,"cible":1,
 "effet":"Loi du feu de veine : l'attaque de la cible baisse de 2 ; vos alliés se soignent de 3. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",2],["soin","allies",3],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Affaiblissement","Soin","Prix"],
 "ambiance":"Le feu de la paroi appartient à tous les relégués ; nul ne l'éteint, nul ne le vend.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ASS194-plus-2","zone":"ASS194","pole":"+","palier":2,"nom":"Le Charbon de la paroi","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 2 ; le héros gagne 6 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["affaiblit","cible",2],["garde","heros",6],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Altan détache le charbon de la paroi au couteau et le pose, encore rouge, dans un pot de fer.",
 "budget":"13,8 / 12,5 (+10 %)"},
{"id":"ASS194-plus-3","zone":"ASS194","pole":"+","palier":3,"nom":"Les Yourtes au chaud","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 1 ; vos alliés se soignent de 8 ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",1],["soin","allies",8],["riposte",3],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"Les yourtes collées à la paroi n'ont pas besoin de feu ; les enfants y dorment sans couverture.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"ASS194-plus-4","zone":"ASS194","pole":"+","palier":4,"nom":"Loi de la peine renversée","cout":2,"cible":1,
 "effet":"Loi de la peine renversée : si vous avez en main une carte de coût 0, 18 dégâts à la cible ; piochez 1 carte. Puis l'attaque de la cible baisse de 3 ; +1 mana de Feu ; la cible hésite. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","piocheCout0",[["deg","cible",18],["pioche",1]]],["affaiblit","cible",3],["mana","Feu",1],["hesite","cible"],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Affaiblissement","Contrôle","Pioche","Mana","Condition","Prix"],
 "ambiance":"Le chuulgan prononce désormais le renvoi chez soi, et le condamné pâlit avant même la fin de la sentence.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS194-plus-5","zone":"ASS194","pole":"+","palier":5,"nom":"Altan au coin du feu","cout":2,"cible":1,
 "effet":"L'attaque de la cible baisse de 3 ; vos alliés se soignent de 8 ; le héros gagne 8 de garde ; piochez 1 carte. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","cible",3],["soin","allies",8],["garde","heros",8],["pioche",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Affaiblissement","Garde","Soin","Pioche","Prix"],
 "ambiance":"Altan reçoit les nouveaux relégués à sa yourte, leur sert le thé salé, et leur montre où creuser.",
 "budget":"29,4 / 32 (−8 %)"},
{"id":"ASS194-plus-6","zone":"ASS194","pole":"+","palier":6,"nom":"Les Cavaliers au rebord","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 2 ; la cible est marquée : +3 par coup reçu ; +1 mana de Feu. Prix : le héros perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["affaiblit","tous",2],["vulnerable","cible",3],["mana","Feu",1],["prixPV",2]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Marque","Affaiblissement","Mana","Condition","Prix"],
 "ambiance":"Des nobles en habits de fête attendent au rebord du canyon, et répètent ce qu'ils diront au khan.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"ASS194-plus7","zone":"ASS194","pole":"+","palier":7,"nom":"La File des condamnés","cout":2,"cible":1,
 "effet":"On demande l'exil. 14 à la cible ; chaque ennemi −2 d'attaque ; alliés soignés de 10 ; riposte 4. Pose Sang. Si Givre (consommée) : 6 à la cible ; la cible −3 d'attaque ; alliés soignés de 9. Prix : héros −3 PV ; ennemis soignés de 1.",
 "ops":[["deg","cible",14],["affaiblit","tous",2],["soin","allies",10],["riposte",4],["pose","Sang"],["reveil","Givre",true,[["deg","cible",6],["affaiblit","cible",3],["soin","allies",9]]],["prixPV",3],["ennemiSoin",1]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Affaiblissement","Riposte","Soin","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Le canyon fume de foyers, et une file de cavaliers attend là-haut qu'on veuille bien les condamner.",
 "budget":"45,2 sans combo ; réveil +28,5 (63 %)"}
]
```

---

## 7. Hoarmoor, les Chèvres taries (ANT096) — Antre · Lande · Vent · Gothique

Forme du récit : le coupable ailé (le berger Jonas Pell accuse les engoulevents de traire ses chèvres pour cacher le lait qu'il vend ; la paroisse chasse les oiseaux ; les chèvres restent taries). Recette du −7 : l'égarement (brouillard, lueurs trompeuses, sentiers tous pareils) ; du +7 : la traite en public (chaque berger trait devant la paroisse assise).

**Mensonge (−)** : le seau caché → la rumeur du berger → les engoulevents accusés → le lait du marché → le lièvre de la sorcière → la cloche contre les oiseaux → le Brouillard de Hoarmoor. Fil mécanique : **mana** (reprise 3 ; 2 au plus par carte, réveil compris), affaiblissement en appoint, invocations sur 4 cartes (engoulevents, lièvres), crochet « la cible brûle déjà » (brûlure sur une seule carte) ; prix : bête et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, affaiblissement 4, bêtes 4, dégâts ciblés 3, marque 2, garde du héros 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (vos bêtes 5, défausse 2).

**Vérité (+)** : la traite au grand jour → le vent qui déshabille → les pies du presbytère → le vicaire de Hoarmoor → le hérisson des haies → la lande nue → la Traite devant la paroisse. Fil mécanique : **vol de vie** (place rare), perce-garde en appoint, invocations sur 4 cartes (pies, hérisson), crochet d'intention « la cible s'apprête à piétiner » ; prix : soin ennemi et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : vol de vie 7, perce-garde 4, bêtes 4, dégâts ciblés 4, coups au hasard 2, riposte 2, dégâts à tous 2 ; crochet « la cible s'apprête à piétiner » sur 3 ; prix sur 7 cartes (soin ennemi 5, PV 3).

```json
{"fiche":"ANT096","nom":"Hoarmoor, les Chèvres taries",
 "recit":"Sur la lande de Hoarmoor, les chèvres de Jonas Pell ne donnaient plus de lait. Pell accusa les engoulevents, qui chassent au crépuscule autour des troupeaux : ils tétaient ses bêtes la nuit, assurait-il. Le vicaire le crut, et la paroisse avec lui. On sonna la cloche contre les oiseaux, on brûla les bruyères où ils nichent. Les chèvres restèrent taries. Pell, lui, vendait son lait au marché de la ville, le jeudi, à l'aube. Les engoulevents chantent toujours sur la lande, et n'ont jamais bu une goutte de lait.",
 "pal":["Un brouillard épais couvre la lande ; des lueurs trompeuses flottent entre les bruyères, et tous les sentiers se ressemblent.","Les bruyères brûlées fument sous la brume ; la cloche du hameau sonne contre les oiseaux, et des chèvres maigres errent sans berger.","Une lande de bruyère sous un ciel gris ; un hameau de pierre, un clocher trapu, et des chèvres qui broutent entre les rochers.","Le vent chasse la brume ; on voit le chemin du marché jusqu'à la ville, et les engoulevents chassent au crépuscule sans qu'on les maudisse.","Sur la lande nue, chaque berger trait ses chèvres devant la paroisse assise dans l'herbe, et l'on compte les seaux à voix haute."],
 "pm":"Mensonge","pp":"Vérité"}
```

```json
[
{"id":"ANT096-moins-1","zone":"ANT096","pole":"-","palier":1,"nom":"Le Seau caché","cout":1,"cible":1,
 "effet":"+2 mana de Vent ; l'attaque de la cible baisse de 1 ; la cible est marquée : +1 par coup reçu. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["mana","Vent",2],["affaiblit","cible",1],["vulnerable","cible",1],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Marque","Affaiblissement","Mana","Prix"],
 "ambiance":"Le seau de Pell dort sous la paille de l'étable, plein jusqu'au bord, couvert d'un sac.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT096-moins-2","zone":"ANT096","pole":"-","palier":2,"nom":"La Rumeur du berger","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Puis +1 mana de Vent ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["deg","cible",10]]],["mana","Vent",1],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Affaiblissement","Mana","Condition","Prix"],
 "ambiance":"Pell raconte au cabaret les oiseaux pendus aux pis de ses chèvres, et personne ne rit.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT096-moins-3","zone":"ANT096","pole":"-","palier":3,"nom":"Les Engoulevents accusés","cout":2,"cible":0,
 "effet":"Des Engoulevents accusés rejoignent le combat : 16 PV, frappe 3. +2 mana de Vent ; riposte 3 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["invoque","Engoulevents accusés",16,3],["mana","Vent",2],["riposte",3],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Riposte","Mana","Prix"],
 "ambiance":"Les engoulevents ouvrent leur bec immense au crépuscule, et la paroisse y voit des bouches de voleurs.",
 "budget":"22,5 / 24 (−6 %)"},
{"id":"ANT096-moins-4","zone":"ANT096","pole":"-","palier":4,"nom":"Le Lait du marché","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Puis +2 mana de Vent ; la cible brûle : 3 par tour pendant 3 tours ; piochez 1 carte. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","brule",[["deg","cible",18]]],["mana","Vent",2],["brulure","cible",3,3],["pioche",1],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Brûlure","Pioche","Mana","Condition","Prix"],
 "ambiance":"Le jeudi, avant l'aube, Pell descend au marché de la ville avec des cruches sous sa cape.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT096-moins-5","zone":"ANT096","pole":"-","palier":5,"nom":"Le Lièvre de la sorcière","cout":2,"cible":0,
 "effet":"Un Lièvre de la sorcière rejoint le combat : 20 PV, frappe 4. L'attaque de chaque ennemi baisse de 1 ; +2 mana de Vent ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Lièvre de la sorcière",20,4],["affaiblit","tous",1],["mana","Vent",2],["garde","heros",6],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Affaiblissement","Garde","Mana","Prix"],
 "ambiance":"On dit qu'une sorcière court la lande en lièvre ; Pell l'a vue aussi, quand il le fallait.",
 "budget":"30,4 / 32 (−5 %)"},
{"id":"ANT096-moins-6","zone":"ANT096","pole":"-","palier":6,"nom":"La Cloche contre les oiseaux","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. +2 mana de Vent. Des Engoulevents du clocher rejoignent le combat : 24 PV, frappe 4. La cible est marquée : +1 par coup reçu. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","brule",[["deg","cible",20]]],["mana","Vent",2],["invoque","Engoulevents du clocher",24,4],["vulnerable","cible",1],["prixBete",3]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Marque","Mana","Condition","Prix"],
 "ambiance":"La cloche sonne au crépuscule contre les engoulevents, qui s'envolent du clocher à chaque coup.",
 "budget":"34 / 36 (−6 %)"},
{"id":"ANT096-moins7","zone":"ANT096","pole":"-","palier":7,"nom":"Le Brouillard de Hoarmoor","cout":2,"cible":0,
 "effet":"La lande ment à tous. +2 mana de Vent ; un Grand Engoulevent (50 PV, frappe 6) ; chaque ennemi −2 d'attaque. Pose Braise. Si Racine (consommée) : des Lièvres gris (30 PV, frappe 4) ; héros +14 de garde. Prix : bête la plus faible −3 PV.",
 "ops":[["mana","Vent",2],["invoque","Grand Engoulevent",50,6],["affaiblit","tous",2],["pose","Braise"],["reveil","Racine",true,[["invoque","Lièvres gris",30,4],["garde","heros",14]]],["prixBete",3]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Affaiblissement","Garde","Mana","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"Le brouillard couvre Hoarmoor ; des lueurs flottent entre les bruyères, et tous les sentiers mentent.",
 "budget":"50,2 sans combo ; réveil +32,2 (64 %)"},
{"id":"ANT096-plus-1","zone":"ANT096","pole":"+","palier":1,"nom":"La Traite au grand jour","cout":1,"cible":1,
 "effet":"2 coups de 3 au hasard ; tous ces dégâts en vol de vie ; la garde de la cible tombe à 0. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","hasard",3,2],["volVie"],["briseGarde","cible"],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Perce-garde","Vol de vie","Prix"],
 "ambiance":"Une veuve trait sa chèvre devant l'église, à midi, et le seau se remplit sous les yeux de tous.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT096-plus-2","zone":"ANT096","pole":"+","palier":2,"nom":"Le Vent qui déshabille","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Tous ces dégâts en vol de vie. Une Pie de la paroisse rejoint le combat : 6 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["si","pietine",[["deg","cible",10]]],["volVie"],["invoque","Pie de la paroisse",6,2],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Le vent d'ouest chasse la brume en une heure, et la lande se montre telle qu'elle est.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT096-plus-3","zone":"ANT096","pole":"+","palier":3,"nom":"Les Pies du presbytère","cout":2,"cible":0,
 "effet":"Des Pies du presbytère rejoignent le combat : 16 PV, frappe 3. 2 coups de 4 au hasard ; tous ces dégâts en vol de vie ; ces coups ignorent la garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Pies du presbytère",16,3],["deg","hasard",4,2],["volVie"],["ignoreGarde"],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Perce-garde","Vol de vie","Prix"],
 "ambiance":"Les pies du presbytère volent tout ce qui brille et le rapportent sur le toit, à la vue de tous.",
 "budget":"25,5 / 24 (+6 %)"},
{"id":"ANT096-plus-4","zone":"ANT096","pole":"+","palier":4,"nom":"Le Vicaire de Hoarmoor","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 20 dégâts à la cible. Puis tous ces dégâts en vol de vie ; la garde de la cible tombe à 0 ; riposte 5 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","pietine",[["deg","cible",20]]],["volVie"],["briseGarde","cible"],["riposte",5],["ennemiSoin",1]],
 "tags":["Antre","Vent","Pôle +","Dégâts","Perce-garde","Riposte","Vol de vie","Condition","Prix"],
 "ambiance":"Le vicaire a vu le seau sous la paille ; il hésite entre son sermon et sa paroisse.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT096-plus-5","zone":"ANT096","pole":"+","palier":5,"nom":"Le Hérisson des haies","cout":2,"cible":0,
 "effet":"Un Hérisson des haies rejoint le combat : 20 PV, frappe 3. 5 dégâts à tous les ennemis ; tous ces dégâts en vol de vie ; +1 mana de Vent. Prix : chaque ennemi se soigne de 2.",
 "ops":[["invoque","Hérisson des haies",20,3],["deg","tous",5],["volVie"],["mana","Vent",1],["ennemiSoin",2]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Vol de vie","Mana","Prix"],
 "ambiance":"On accusait aussi le hérisson de téter les vaches ; il se roule en boule et ne répond rien.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT096-plus-6","zone":"ANT096","pole":"+","palier":6,"nom":"La Lande nue","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 12 dégâts à la cible. 8 dégâts à la cible ; tous ces dégâts en vol de vie. Des Pies de la lande nue rejoignent le combat : 14 PV, frappe 3. Prix : le héros perd 1 PV.",
 "ops":[["si","pietine",[["deg","cible",12]]],["deg","cible",8],["volVie"],["invoque","Pies de la lande nue",14,3],["prixPV",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Sur la lande nue, chaque pierre se voit jusqu'à l'horizon, et le chemin du marché aussi.",
 "budget":"31,5 / 36 (−12 %)"},
{"id":"ANT096-plus7","zone":"ANT096","pole":"+","palier":7,"nom":"La Traite devant la paroisse","cout":2,"cible":1,
 "effet":"Tout se voit en plein jour. 10 à tous ; tout en vol de vie ; toute garde ennemie à 0 ; héros +15 de garde. Pose Sceau. Si Sang (consommée) : 6 à la cible ; soin du héros 15 ; riposte 4. Prix : ennemis soignés de 2 ; héros −2 PV.",
 "ops":[["deg","tous",10],["volVie"],["briseGarde","tous"],["garde","heros",15],["pose","Sceau"],["reveil","Sang",true,[["deg","cible",6],["soin","heros",15],["riposte",4]]],["ennemiSoin",2],["prixPV",2]],
 "tags":["Antre","Vent","Forme ultime +7","Dégâts","Perce-garde","Riposte","Vol de vie","Garde","Soin","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"Chaque berger trait ses chèvres devant la paroisse assise, et l'on compte les seaux à voix haute.",
 "budget":"45,6 sans combo ; réveil +29 (64 %)"}
]
```

---

## 8. Ukkusiksalik, le Troc des Perles (ANT194) — Antre · Archipel · Eau · Inuit

Forme du récit : l'échange inégal (la sculptrice Kaujak troque ses lampes de pierre contre des perles de verre ; plus personne ne taille la pierre ; on rachète des lampes au comptoir). Recette du −7 : l'alignement (toutes les lampes éteintes posées en rang sur la grève) ; du +7 : la parure (tentes, kayaks et chiens cousus de perles qui cliquettent au vent).

**Pierre (−)** : la pierre à lampe → la sculptrice Kaujak → les morses du gisement → le gisement de stéatite → l'ours de la grève → la grève des lampes → les Lampes en rang. Fil mécanique : **marque** (place), riposte en appoint, invocations sur 4 cartes (morses, ours blanc), crochet « vous avez en main une carte de coût 0 » ; prix : bête et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, riposte 4, bêtes 4, dégâts ciblés 4 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (vos bêtes 6, PV 3).

**Cristal (+)** : les perles de verre → le comptoir → les narvals de la passe → le troc des lampes → les mergules sur la glace → le verre qui cliquette → l'Archipel paré. Fil mécanique : **exil** (place ; la carte s'exile sur 6 cartes), pioche en appoint, invocations sur 4 cartes (mergules, narvals), crochet « la cible a de la garde » (aucune garde ennemie en prix) ; prix : exil et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 6, bêtes 4, dégâts ciblés 4, pioche 3, garde du héros 2, mana 2, affaiblissement 2, soin du héros 2, garde des alliés 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (exil 6, défausse 3).

```json
{"fiche":"ANT194","nom":"Ukkusiksalik, le Troc des Perles",
 "recit":"Kaujak taillait les lampes de pierre de tout l'archipel d'Ukkusiksalik. Quand un comptoir s'ouvrit sur la grande île, les marchands lui offrirent des perles de verre pour chaque lampe. Elle accepta, et les autres femmes aussi, qui portèrent bientôt des rangs de perles bleues. Les lampes partirent vers le sud, où l'on aimait la pierre taillée. Kaujak vieillit ; ses filles cousaient des perles et ne taillaient plus. Les lampes du comptoir se paient en peaux, et Kaujak a les plus belles perles de l'archipel.",
 "pal":["Sur la grève, toutes les lampes de pierre sont posées en rang, éteintes ; les morses dorment contre elles, et rien ne brille sur l'archipel.","Le gisement de pierre tendre est ouvert dans la falaise ; des lampes inachevées traînent sur les galets, et les morses gardent la passe.","Des îles basses sur une mer grise ; des tentes de peau près d'un gisement de pierre tendre, et un comptoir de planches sur la grande île.","Des perles de verre bleu brillent aux cols et aux bottes ; on troque devant le comptoir, et la glace de la passe scintille au soleil.","Tentes, kayaks et harnais des chiens sont cousus de perles ; l'archipel cliquette au vent, et la banquise brille comme du verre."],
 "pm":"Pierre","pp":"Cristal"}
```

```json
[
{"id":"ANT194-moins-1","zone":"ANT194","pole":"-","palier":1,"nom":"La Pierre à lampe","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; riposte 2 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["vulnerable","cible",2],["riposte",2],["prixBete",1]],
 "tags":["Antre","Eau","Pôle −","Marque","Riposte","Prix"],
 "ambiance":"La stéatite se taille au couteau d'os ; sa poussière grise colle aux doigts et ne part jamais.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT194-moins-2","zone":"ANT194","pole":"-","palier":2,"nom":"La Sculptrice Kaujak","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. La cible est marquée : +1 par coup reçu. Un Morse de la grève rejoint le combat : 6 PV, frappe 2. Prix : le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["vulnerable","cible",1],["invoque","Morse de la grève",6,2],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Kaujak creuse la cuvette de la lampe d'un geste rond, et la mèche de mousse y trouve sa place.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT194-moins-3","zone":"ANT194","pole":"-","palier":3,"nom":"Les Morses du gisement","cout":2,"cible":0,
 "effet":"Des Morses du gisement rejoignent le combat : 18 PV, frappe 3. Tous les ennemis sont marqués : +1 par coup reçu ; le héros gagne 6 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Morses du gisement",18,3],["vulnerable","tous",1],["garde","heros",6],["prixBete",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Marque","Garde","Prix"],
 "ambiance":"Les morses dorment au pied du gisement, et il faut les réveiller pour atteindre la bonne pierre.",
 "budget":"23,9 / 24 (+0 %)"},
{"id":"ANT194-moins-4","zone":"ANT194","pole":"-","palier":4,"nom":"Le Gisement de stéatite","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 18 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; riposte 3 jusqu'à votre prochain tour ; piochez 1 carte. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",18]]],["vulnerable","cible",3],["riposte",3],["pioche",1],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Marque","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Le gisement s'ouvre dans la falaise comme une plaie grise, et personne n'y monte plus.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT194-moins-5","zone":"ANT194","pole":"-","palier":5,"nom":"L'Ours de la grève","cout":2,"cible":1,
 "effet":"La cible est marquée : +3 par coup reçu. Un Ours blanc de la grève rejoint le combat : 26 PV, frappe 4. Riposte 3 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["vulnerable","cible",3],["invoque","Ours blanc de la grève",26,4],["riposte",3],["prixBete",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Marque","Riposte","Prix"],
 "ambiance":"L'ours blanc fouille les lampes abandonnées sur la grève, à la recherche d'un reste de graisse.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT194-moins-6","zone":"ANT194","pole":"-","palier":6,"nom":"La Grève des lampes","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Puis tous les ennemis sont marqués : +2 par coup reçu ; l'attaque de la cible baisse de 2 ; +2 mana d'Eau. Prix : votre bête la plus faible perd 2 PV ; le héros perd 1 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["vulnerable","tous",2],["affaiblit","cible",2],["mana","Eau",2],["prixBete",2],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Marque","Affaiblissement","Mana","Condition","Prix"],
 "ambiance":"Les lampes de pierre attendent sur les galets, plus lourdes que les perles et moins demandées.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ANT194-moins7","zone":"ANT194","pole":"-","palier":7,"nom":"Les Lampes en rang","cout":2,"cible":1,
 "effet":"Toutes les lampes s'éteignent. 10 à la cible ; tous marqués (+2) ; un Vieux Morse de pierre (40 PV, frappe 5). Pose Givre. Si Abîme (consommée) : 10 à la cible ; soin du héros 16 ; riposte 3. Prix : bête la plus faible −3 PV ; héros −2 PV.",
 "ops":[["deg","cible",10],["vulnerable","tous",2],["invoque","Vieux Morse de pierre",40,5],["pose","Givre"],["reveil","Abîme",true,[["deg","cible",10],["soin","heros",16],["riposte",3]]],["prixBete",3],["prixPV",2]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Marque","Riposte","Soin","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Toutes les lampes de pierre sont posées en rang sur la grève, éteintes, et les morses dorment contre elles.",
 "budget":"45,7 sans combo ; réveil +32 (70 %)"},
{"id":"ANT194-plus-1","zone":"ANT194","pole":"+","palier":1,"nom":"Les Perles de verre","cout":1,"cible":0,
 "effet":"Piochez 1 carte. Un Mergule du comptoir rejoint le combat : 8 PV, frappe 2. Le héros gagne 3 de garde. Prix : cette carte s'exile.",
 "ops":[["pioche",1],["invoque","Mergule du comptoir",8,2],["garde","heros",3],["exil"]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Pioche","Exil","Prix"],
 "ambiance":"Les perles bleues roulent dans la paume de Kaujak, froides et légères comme des gouttes gelées.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT194-plus-2","zone":"ANT194","pole":"+","palier":2,"nom":"Le Comptoir","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. Puis la garde de la cible tombe à 0 ; +1 mana d'Eau ; le héros gagne 5 de garde. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["briseGarde","cible"],["mana","Eau",1],["garde","heros",5],["exil"]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Perce-garde","Garde","Mana","Condition","Exil","Prix"],
 "ambiance":"Le comptoir de planches sent le goudron et le thé ; le marchand compte les perles par poignées.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT194-plus-3","zone":"ANT194","pole":"+","palier":3,"nom":"Les Narvals de la passe","cout":2,"cible":1,
 "effet":"Des Narvals de la passe rejoignent le combat : 22 PV, frappe 3. +1 mana d'Eau ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["invoque","Narvals de la passe",22,3],["mana","Eau",1],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Eau","Pôle +","Invocation","Affaiblissement","Mana","Exil","Prix"],
 "ambiance":"Les narvals passent sous la glace de la passe, et leurs défenses brillent comme du verre torsadé.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT194-plus-4","zone":"ANT194","pole":"+","palier":4,"nom":"Le Troc des lampes","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 18 dégâts à la cible. Puis piochez 1 carte ; riposte 5 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",18]]],["pioche",1],["riposte",5],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Marque","Riposte","Pioche","Condition","Prix"],
 "ambiance":"Une lampe pour un rang de perles : le marchand trouve le prix juste, et Kaujak aussi, ce jour-là.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT194-plus-5","zone":"ANT194","pole":"+","palier":5,"nom":"Les Mergules sur la glace","cout":2,"cible":0,
 "effet":"Des Mergules de la banquise rejoignent le combat : 22 PV, frappe 4. 4 dégâts à tous les ennemis ; le héros se soigne de 8. Prix : cette carte s'exile.",
 "ops":[["invoque","Mergules de la banquise",22,4],["deg","tous",4],["soin","heros",8],["exil"]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin","Exil","Prix"],
 "ambiance":"Les mergules se posent en foule sur la banquise, noir et blanc, et repartent tous d'un même élan.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ANT194-plus-6","zone":"ANT194","pole":"+","palier":6,"nom":"Le Verre qui cliquette","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 20 dégâts à la cible. Puis piochez 2 cartes ; vos alliés gagnent 12 de garde ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile ; défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",20]]],["pioche",2],["garde","allies",12],["affaiblit","cible",2],["exil"],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Affaiblissement","Garde","Pioche","Condition","Exil","Prix"],
 "ambiance":"Les perles cousues aux tentes cliquettent dans le vent, et l'on n'entend plus la mer.",
 "budget":"32,4 / 36 (−10 %)"},
{"id":"ANT194-plus7","zone":"ANT194","pole":"+","palier":7,"nom":"L'Archipel paré","cout":2,"cible":1,
 "effet":"Tout l'archipel se pare. 14 à la cible ; un Grand Narval de verre (40 PV, frappe 5) ; alliés +8 de garde. Pose Racine. Si Givre (consommée) : 6 à la cible ; alliés +10 de garde ; soin du héros 12. Prix : cette carte s'exile ; défaussez 1 carte.",
 "ops":[["deg","cible",14],["invoque","Grand Narval de verre",40,5],["garde","allies",8],["pose","Racine"],["reveil","Givre",true,[["deg","cible",6],["garde","allies",10],["soin","heros",12]]],["exil"],["prixDefausse",1]],
 "tags":["Antre","Eau","Forme ultime +7","Invocation","Dégâts","Garde","Soin","Exil","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"Tentes, kayaks et chiens sont cousus de perles, et l'archipel cliquette au vent comme une parure.",
 "budget":"45,1 sans combo ; réveil +30 (67 %)"}
]
```

---

## 9. Skiaros, l'Impôt du Soleil (ANT051) — Antre · Volcan · Feu · Grecque

*Note du critique (lot 13) : Dernière phrase du récit changée : « achète de l'huile pour y voir » rejouait la chute de ASS151 (« l'oasis achète son eau »).*

Forme du récit : l'impôt contourné (l'archonte Kleitarchos taxe les maisons que touche le soleil ; la ville se rebâtit dans l'ombre du cratère, exempte, et l'archonte taxe l'huile). Recette du −7 : l'entassement (la ville serrée dans l'ombre, aucune fenêtre au soleil) ; du +7 : l'éclairage par en dessous (la coulée éclaire les rues, on lit dehors à minuit).

**Ombre (−)** : l'ombre du cratère → les maisons sans fenêtre → les grillons sous le seuil → l'archonte Kleitarchos → la ville exempte → l'huile achetée → Toute la ville à l'ombre. Fil mécanique : **colonne marque / « la cible est déjà marquée »** (marque sur 4 cartes, lue sur 4, toujours avant), mana en appoint, invocations sur 4 cartes (vipères, grillons) ; prix : bête et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 4, bêtes 4, dégâts ciblés 4, mana 4, affaiblissement 2, garde du héros 2, soin du héros 2 ; crochet « la cible est déjà marquée » sur 4 ; prix sur 7 cartes (vos bêtes 5, PV 2).

**Lumière (+)** : la coulée de nuit → la rue éclairée → les cigales de minuit → la chevêche du rempart → les lecteurs de minuit → la coulée sous la ville → On lit dehors à minuit. Fil mécanique : **colonne garde / « la Garde du héros est levée »** (garde du héros ou des alliés sur 4 cartes, lue sur 4, toujours avant), soin des alliés en appoint, invocations sur 4 cartes (cigales, chevêche) ; prix : soin ennemi et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 4, dégâts ciblés 4, soin des alliés 4, garde du héros 2, mana 2, affaiblissement 2, exil 2, garde des alliés 2, riposte 2 ; crochet « la Garde du héros est levée » sur 4 ; prix sur 7 cartes (soin ennemi 5, exil 2).

```json
{"fiche":"ANT051","nom":"Skiaros, l'Impôt du Soleil",
 "recit":"La ville de Skiaros est bâtie sur la pente d'un volcan qui fume toujours. Le panache cache le soleil une bonne part du jour, et seules les maisons du bas en reçoivent un peu. L'archonte Kleitarchos, à court d'argent, frappa d'un impôt toute maison que touchait le soleil. On démolit, on rebâtit plus haut, dans l'ombre du cratère, et la ville entière fut exempte. Kleitarchos, sans recette, taxa l'huile des lampes. Toute la ville vit dans l'ombre, exempte, et les lampes y brûlent à midi, chacune au tarif de l'archonte.",
 "pal":["La ville s'entasse dans l'ombre du cratère, maison contre maison, sans une fenêtre tournée vers le soleil ; la cendre tombe sur les toits.","Des ruelles froides sous le panache gris ; les lampes brûlent à midi, et des vipères dorment sur les seuils encore chauds.","Une ville blanche sur la pente d'un volcan qui fume ; des terrasses, un théâtre, et le panache qui passe sur les toits.","La coulée descend la nuit vers la mer ; sa lueur rouge éclaire les façades, et les cigales chantent comme en plein jour.","La coulée passe sous la ville et l'éclaire par en dessous ; on lit dehors à minuit, et les chevêches ne savent plus quand chasser."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ANT051-moins-1","zone":"ANT051","pole":"-","palier":1,"nom":"L'Ombre du cratère","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu. Une Vipère des cendres rejoint le combat : 6 PV, frappe 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["vulnerable","cible",2],["invoque","Vipère des cendres",6,2],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"L'ombre du cratère tombe sur la ville dès le milieu du matin, froide comme une eau de puits.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT051-moins-2","zone":"ANT051","pole":"-","palier":2,"nom":"Les Maisons sans fenêtre","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 12 dégâts à la cible. Puis +1 mana de Feu ; l'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["mana","Feu",1],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Affaiblissement","Mana","Condition","Prix"],
 "ambiance":"Les maisons neuves tournent le dos au soleil ; on a muré les fenêtres pour ne rien devoir.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT051-moins-3","zone":"ANT051","pole":"-","palier":3,"nom":"Les Grillons sous le seuil","cout":2,"cible":0,
 "effet":"Des Grillons des cendres rejoignent le combat : 16 PV, frappe 3. Tous les ennemis sont marqués : +1 par coup reçu ; riposte 2 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Grillons des cendres",16,3],["vulnerable","tous",1],["riposte",2],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Riposte","Prix"],
 "ambiance":"Les grillons des cendres chantent sous les seuils, dans le noir, et se taisent quand on ouvre.",
 "budget":"22,1 / 24 (−8 %)"},
{"id":"ANT051-moins-4","zone":"ANT051","pole":"-","palier":4,"nom":"L'Archonte Kleitarchos","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 18 dégâts à la cible. Puis +2 mana de Feu ; piochez 1 carte ; le héros gagne 6 de garde ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",18]]],["mana","Feu",2],["pioche",1],["garde","heros",6],["hesite","cible"],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Contrôle","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"Kleitarchos fait mesurer l'ombre de chaque maison au pied, et sa plume grince sous le panache.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"ANT051-moins-5","zone":"ANT051","pole":"-","palier":5,"nom":"La Ville exempte","cout":2,"cible":1,
 "effet":"La cible est marquée : +3 par coup reçu. Des Vipères cornues rejoignent le combat : 22 PV, frappe 4. Le héros se soigne de 6. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["vulnerable","cible",3],["invoque","Vipères cornues",22,4],["soin","heros",6],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Soin","Prix"],
 "ambiance":"Toute la ville s'est réfugiée dans l'ombre ; le registre de l'impôt n'a plus une ligne écrite.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ANT051-moins-6","zone":"ANT051","pole":"-","palier":6,"nom":"L'Huile achetée","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 20 dégâts à la cible. Puis l'attaque de chaque ennemi baisse de 1 ; +2 mana de Feu ; le héros gagne 10 de garde ; la cible brûle : 3 par tour pendant 3 tours. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","vulnerable",[["deg","cible",20]]],["affaiblit","tous",1],["mana","Feu",2],["garde","heros",10],["brulure","cible",3,3],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Brûlure","Affaiblissement","Garde","Mana","Condition","Prix"],
 "ambiance":"Le marchand d'huile monte la ruelle chaque soir, et chaque cruche porte le sceau de l'archonte.",
 "budget":"37,6 / 36 (+4 %)"},
{"id":"ANT051-moins7","zone":"ANT051","pole":"-","palier":7,"nom":"Toute la ville à l'ombre","cout":2,"cible":1,
 "effet":"Personne ne voit le soleil. Si la cible est marquée, 10 à la cible. Tous marqués (+2) ; une Vieille Vipère (40 PV, frappe 5) ; +2 mana de Feu. Pose Abîme. Si Braise (consommée) : 10 à la cible ; soin du héros 20. Prix : bête la plus faible −3 PV.",
 "ops":[["si","vulnerable",[["deg","cible",10]]],["vulnerable","tous",2],["invoque","Vieille Vipère",40,5],["mana","Feu",2],["pose","Abîme"],["reveil","Braise",true,[["deg","cible",10],["soin","heros",20]]],["prixBete",3]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Marque","Soin","Mana","Condition","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"La ville s'entasse dans l'ombre du cratère, et la cendre tombe sur les fenêtres murées.",
 "budget":"48,7 sans combo ; réveil +30 (62 %)"},
{"id":"ANT051-plus-1","zone":"ANT051","pole":"+","palier":1,"nom":"La Coulée de nuit","cout":1,"cible":0,
 "effet":"Le héros gagne 8 de garde. Une Cigale du basalte rejoint le combat : 6 PV, frappe 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","heros",8],["invoque","Cigale du basalte",6,2],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Garde","Prix"],
 "ambiance":"La coulée descend la nuit vers la mer, et sa lueur rouge monte le long des façades.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ANT051-plus-2","zone":"ANT051","pole":"+","palier":2,"nom":"La Rue éclairée","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 12 dégâts à la cible. Puis +1 mana de Feu ; l'attaque de la cible baisse de 1 ; piochez 1 carte. Prix : cette carte s'exile.",
 "ops":[["si","garde",[["deg","cible",12]]],["mana","Feu",1],["affaiblit","cible",1],["pioche",1],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Affaiblissement","Pioche","Mana","Condition","Exil","Prix"],
 "ambiance":"La rue principale de Skiaros brille comme à midi, et les chiens ne savent plus quand dormir.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT051-plus-3","zone":"ANT051","pole":"+","palier":3,"nom":"Les Cigales de minuit","cout":2,"cible":0,
 "effet":"Des Cigales de minuit rejoignent le combat : 16 PV, frappe 3. Vos alliés gagnent 6 de garde ; vos alliés se soignent de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Cigales de minuit",16,3],["garde","allies",6],["soin","allies",4],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Garde","Soin","Prix"],
 "ambiance":"Les cigales chantent dans la lueur de la lave, à minuit, comme en plein été.",
 "budget":"23,7 / 24 (−1 %)"},
{"id":"ANT051-plus-4","zone":"ANT051","pole":"+","palier":4,"nom":"La Chevêche du rempart","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 18 dégâts à la cible. Une Chevêche du rempart rejoint le combat : 20 PV, frappe 3. Riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","garde",[["deg","cible",18]]],["invoque","Chevêche du rempart",20,3],["riposte",3],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"La chevêche guette du haut du rempart, les yeux ronds, et ne trouve plus la nuit.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ANT051-plus-5","zone":"ANT051","pole":"+","palier":5,"nom":"Les Lecteurs de minuit","cout":2,"cible":1,
 "effet":"Le héros gagne 12 de garde ; vos alliés se soignent de 8 ; la garde de la cible tombe à 0 ; +2 mana de Feu. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","heros",12],["soin","allies",8],["briseGarde","cible"],["mana","Feu",2],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Perce-garde","Garde","Soin","Mana","Prix"],
 "ambiance":"Les vieux lisent dehors à minuit, assis sur leurs seuils, sans une goutte d'huile.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ANT051-plus-6","zone":"ANT051","pole":"+","palier":6,"nom":"La Coulée sous la ville","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 20 dégâts à la cible. Puis vos alliés se soignent de 8 ; la cible est marquée : +2 par coup reçu ; l'attaque de la cible baisse de 2. Prix : cette carte s'exile.",
 "ops":[["si","garde",[["deg","cible",20]]],["soin","allies",8],["vulnerable","cible",2],["affaiblit","cible",2],["exil"]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Marque","Affaiblissement","Soin","Condition","Exil","Prix"],
 "ambiance":"La lave passe sous les dalles de la ville ; elles sont chaudes, et brillent par les fentes.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ANT051-plus7","zone":"ANT051","pole":"+","palier":7,"nom":"On lit dehors à minuit","cout":2,"cible":1,
 "effet":"La nuit n'éteint plus rien. Si votre Garde est levée, 10 à la cible. Alliés +10 de garde ; une Grande Cigale (36 PV, frappe 5) ; alliés soignés de 7. Pose Braise. Si Racine (consommée) : alliés soignés de 10 ; riposte 8. Prix : ennemis soignés de 2.",
 "ops":[["si","garde",[["deg","cible",10]]],["garde","allies",10],["invoque","Grande Cigale",36,5],["soin","allies",7],["pose","Braise"],["reveil","Racine",true,[["soin","allies",10],["riposte",8]]],["ennemiSoin",2]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Riposte","Garde","Soin","Condition","Combo","Pose Braise","Réveil Racine","Prix"],
 "ambiance":"La coulée éclaire Skiaros par en dessous, et toute la ville lit dehors à minuit.",
 "budget":"49 sans combo ; réveil +31 (63 %)"}
]
```

---

## 10. Yūzpur, les Bosquets abattus (ANT109) — Antre · Lande · Vent · Moghole

Forme du récit : le cycle commandé (le darogha Wazir Beg fait abattre les bosquets pour les guépards de l'empereur ; le gibier disparaît, l'empereur ne vient plus ; on replante, aux frais des bûcherons). Recette du −7 : l'alignement de fer (lande rase, piquets et chaînes) ; du +7 : pied à terre (la forêt si serrée que les cavaliers descendent et marchent).

**Fer (−)** : les piquets de fer → les chaînes des guépards → les guépards de l'empereur → le darogha Wazir Beg → la lande rase → la chasse sans gibier → le Fer dans la lande. Fil mécanique : **coups au hasard** (place rare), riposte en appoint, invocations sur 4 cartes (guépards, faucons sacres), crochet d'intention « il ne reste qu'un ennemi » ; prix : bête et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : coups au hasard 7, bêtes 4, riposte 3, dégâts ciblés 3, affaiblissement 2 ; crochet « il ne reste qu'un ennemi » sur 3 ; prix sur 7 cartes (vos bêtes 6, défausse 3).

**Bois (+)** : le pic des bosquets → les loriots de la lande → les pics des acacias → le pic flamboyant → le tambour des pics → les loriots des fourrés → la Forêt du darogha. Fil mécanique : **invocations** (vocation, 3e et dernier emploi ; bête principale : les pics), garde des alliés en appoint, crochet « la cible hésite déjà » (aucune hésitation dans le pôle) ; prix : garde ennemie et exil. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, garde des alliés 4, exil 4, dégâts ciblés 4, soin du héros 2, affaiblissement 2 ; crochet « la cible hésite déjà » sur 3 ; prix sur 7 cartes (exil 4, garde ennemie 3).

```json
{"fiche":"ANT109","nom":"Yūzpur, les Bosquets abattus",
 "recit":"L'empereur aimait chasser au guépard sur la lande de Yūzpur. Les bosquets gênaient la course des bêtes : le darogha Wazir Beg les fit abattre, et la lande devint rase comme un tapis. L'empereur vint, chassa, revint. Mais sans bosquets, les antilopes n'avaient plus où mettre bas, et le gibier disparut. L'empereur cessa de venir. Wazir Beg, inquiet pour sa charge, fit replanter. On replante les bosquets, aux frais des bûcherons, pour que l'empereur revienne les faire abattre.",
 "pal":["La lande est rase jusqu'à l'horizon ; des piquets de fer marquent la course, des chaînes traînent dans la poussière, et rien d'autre ne tient debout.","Des souches noircies partout ; les guépards tirent sur leurs chaînes, et le vent soulève le sable entre les piquets de la chasse.","Une lande de hautes herbes semée de bosquets ; une tour de chasse en grès, et des guépards encapuchonnés sur les chariots.","Les bosquets repoussent en rangs serrés ; on entend tambouriner les pics, et les antilopes reviennent mettre bas à l'ombre.","La forêt est si serrée que les cavaliers mettent pied à terre et marchent ; les pics tambourinent partout, et l'on cherche la tour à la voix."],
 "pm":"Fer","pp":"Bois"}
```

```json
[
{"id":"ANT109-moins-1","zone":"ANT109","pole":"-","palier":1,"nom":"Les Piquets de fer","cout":1,"cible":0,
 "effet":"2 coups de 3 au hasard. Un Faucon sacre rejoint le combat : 6 PV, frappe 2. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["deg","hasard",3,2],["invoque","Faucon sacre",6,2],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Des piquets de fer marquent la course des guépards, plantés droit dans la lande rase.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT109-moins-2","zone":"ANT109","pole":"-","palier":2,"nom":"Les Chaînes des guépards","cout":1,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 10 dégâts à la cible. 3 coups de 2 au hasard ; riposte 2 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","seul",[["deg","cible",10]]],["deg","hasard",2,3],["riposte",2],["prixDefausse",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Les guépards tirent sur leurs chaînes en sentant le vent, et le fer chante sur les piquets.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT109-moins-3","zone":"ANT109","pole":"-","palier":3,"nom":"Les Guépards de l'empereur","cout":2,"cible":0,
 "effet":"Des Guépards de l'empereur rejoignent le combat : 18 PV, frappe 4. 3 coups de 3 au hasard. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Guépards de l'empereur",18,4],["deg","hasard",3,3],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Prix"],
 "ambiance":"Les guépards encapuchonnés attendent sur les chariots ; on leur ôte le capuchon au signal.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT109-moins-4","zone":"ANT109","pole":"-","palier":4,"nom":"Le Darogha Wazir Beg","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 20 dégâts à la cible. 4 coups de 3 au hasard ; l'attaque de la cible baisse de 2. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",20]]],["deg","hasard",3,4],["affaiblit","cible",2],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Wazir Beg compte les souches à cheval, et chaque souche est une ligne de plus à son crédit.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT109-moins-5","zone":"ANT109","pole":"-","palier":5,"nom":"La Lande rase","cout":2,"cible":0,
 "effet":"4 coups de 4 au hasard. Des Faucons de la chasse rejoignent le combat : 18 PV, frappe 3. +1 mana de Vent. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["deg","hasard",4,4],["invoque","Faucons de la chasse",18,3],["mana","Vent",1],["prixBete",2]],
 "tags":["Antre","Vent","Pôle −","Invocation","Dégâts","Mana","Prix"],
 "ambiance":"La lande est rase comme un tapis ; le vent y court sans obstacle, et le sable avec lui.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT109-moins-6","zone":"ANT109","pole":"-","palier":6,"nom":"La Chasse sans gibier","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 20 dégâts à la cible. 4 coups de 4 au hasard ; riposte 4 jusqu'à votre prochain tour ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard ; votre bête la plus faible perd 1 PV.",
 "ops":[["si","seul",[["deg","cible",20]]],["deg","hasard",4,4],["riposte",4],["garde","heros",6],["prixDefausse",1],["prixBete",1]],
 "tags":["Antre","Vent","Pôle −","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Les guépards courent pour rien sur la lande vide, et l'empereur repart avant midi.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"ANT109-moins7","zone":"ANT109","pole":"-","palier":7,"nom":"Le Fer dans la lande","cout":2,"cible":1,
 "effet":"Rien ne tient debout. 4 coups de 6 au hasard ; un Guépard royal (40 PV, frappe 6). Pose Sceau. Si Sang (consommée) : 3 coups de 4 au hasard ; riposte 4 ; la cible −4 d'attaque. Prix : bête la plus faible −3 PV ; défaussez 1 carte.",
 "ops":[["deg","hasard",6,4],["invoque","Guépard royal",40,6],["pose","Sceau"],["reveil","Sang",true,[["deg","hasard",4,3],["riposte",4],["affaiblit","cible",4]]],["prixBete",3],["prixDefausse",1]],
 "tags":["Antre","Vent","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Riposte","Combo","Pose Sceau","Réveil Sang","Prix"],
 "ambiance":"La lande est rase jusqu'à l'horizon ; seuls les piquets de fer et les chaînes tiennent debout.",
 "budget":"47 sans combo ; réveil +32 (68 %)"},
{"id":"ANT109-plus-1","zone":"ANT109","pole":"+","palier":1,"nom":"Le Pic des bosquets","cout":1,"cible":0,
 "effet":"Un Pic à dos d'or rejoint le combat : 8 PV, frappe 2. Vos alliés gagnent 4 de garde. Prix : cette carte s'exile.",
 "ops":[["invoque","Pic à dos d'or",8,2],["garde","allies",4],["exil"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde","Exil","Prix"],
 "ambiance":"Le pic à dos d'or frappe l'acacia à coups secs, et toute la lande l'entend.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ANT109-plus-2","zone":"ANT109","pole":"+","palier":2,"nom":"Les Loriots de la lande","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, 10 dégâts à la cible. Des Loriots dorés rejoignent le combat : 8 PV, frappe 2. +1 mana de Vent. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",10]]],["invoque","Loriots dorés",8,2],["mana","Vent",1],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Les loriots sifflent dans les jeunes bosquets, jaunes comme des fruits qu'on aurait oubliés.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ANT109-plus-3","zone":"ANT109","pole":"+","palier":3,"nom":"Les Pics des acacias","cout":2,"cible":0,
 "effet":"Des Pics des acacias rejoignent le combat : 22 PV, frappe 3. Vos alliés gagnent 6 de garde ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["invoque","Pics des acacias",22,3],["garde","allies",6],["soin","heros",4],["exil"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Garde","Soin","Exil","Prix"],
 "ambiance":"Les pics creusent leurs loges dans les acacias replantés, et les bûcherons n'osent plus y toucher.",
 "budget":"23,7 / 24 (−1 %)"},
{"id":"ANT109-plus-4","zone":"ANT109","pole":"+","palier":4,"nom":"Le Pic flamboyant","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 18 dégâts à la cible. Un Pic flamboyant rejoint le combat : 24 PV, frappe 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","hesite",[["deg","cible",18]]],["invoque","Pic flamboyant",24,4],["ennemiGarde",1]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Le pic flamboyant passe d'un tronc à l'autre en éclair rouge, et la lande se tait.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT109-plus-5","zone":"ANT109","pole":"+","palier":5,"nom":"Le Tambour des pics","cout":2,"cible":1,
 "effet":"Des Pics tambourineurs rejoignent le combat : 26 PV, frappe 4. Vos alliés gagnent 8 de garde ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["invoque","Pics tambourineurs",26,4],["garde","allies",8],["affaiblit","cible",1],["exil"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Affaiblissement","Garde","Exil","Prix"],
 "ambiance":"Les pics tambourinent partout dans les bosquets, et l'on dirait une armée qui avance.",
 "budget":"28,6 / 32 (−11 %)"},
{"id":"ANT109-plus-6","zone":"ANT109","pole":"+","palier":6,"nom":"Les Loriots des fourrés","cout":2,"cible":1,
 "effet":"Si la cible hésite déjà, 20 dégâts à la cible. Des Loriots des fourrés rejoignent le combat : 20 PV, frappe 3. Riposte 4 jusqu'à votre prochain tour ; le héros se soigne de 6. Prix : cette carte s'exile.",
 "ops":[["si","hesite",[["deg","cible",20]]],["invoque","Loriots des fourrés",20,3],["riposte",4],["soin","heros",6],["exil"]],
 "tags":["Antre","Vent","Pôle +","Invocation","Dégâts","Riposte","Soin","Condition","Exil","Prix"],
 "ambiance":"Dans les fourrés serrés, les cavaliers mettent pied à terre, et les loriots se moquent d'eux.",
 "budget":"35,5 / 36 (−1 %)"},
{"id":"ANT109-plus7","zone":"ANT109","pole":"+","palier":7,"nom":"La Forêt du darogha","cout":2,"cible":1,
 "effet":"La lande redevient forêt. 10 à la cible ; un Grand Pic (44 PV, frappe 6) ; alliés +10 de garde. Pose Racine. Si Sceau (consommée) : des Jeunes pics (26 PV, frappe 3) ; 8 à la cible ; la cible −2 d'attaque. Prix : ennemis +1 de garde.",
 "ops":[["deg","cible",10],["invoque","Grand Pic",44,6],["garde","allies",10],["pose","Racine"],["reveil","Sceau",true,[["invoque","Jeunes pics",26,3],["deg","cible",8],["affaiblit","cible",2]]],["ennemiGarde",1]],
 "tags":["Antre","Vent","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Garde","Combo","Pose Racine","Réveil Sceau","Prix"],
 "ambiance":"La forêt est si serrée que les cavaliers marchent à pied, et les pics tambourinent partout.",
 "budget":"51 sans combo ; réveil +31,5 (62 %)"}
]
```

---

## 11. Gniloozero, le Potager du Marchand (ANT249) — Antre · Toundra · Glace · Slave

Forme du récit : le circuit du marchand (Sava achète le poisson gâté au dégel pour fumer ses choux, seuls légumes de la toundra, et les revend aux pêcheurs à la fin de l'hiver). Recette du −7 : le dégel (les fosses ouvertes, gloutons et labbes sur le poisson) ; du +7 : la démesure (des choux énormes jusqu'à l'horizon sous le soleil de minuit).

**Pourriture (−)** : les fosses du dégel → le poisson gâté → les gloutons de la grève → le glouton du marchand → les labbes du lac → le vieux glouton du dégel → la Grève pourrie. Fil mécanique : **invocations** (vocation, 3e et dernier emploi ; bête principale : les gloutons), marque en appoint, crochet « vous avez en main une carte de coût 0 » ; prix : garde ennemie et bête. Comptes au script (cartes sur 7, `si` et réveil compris) : bêtes 7, dégâts ciblés 4, marque 3, riposte 2 ; crochet « vous avez en main une carte de coût 0 » sur 3 ; prix sur 7 cartes (garde ennemie 6, vos bêtes 3).

**Croissance (+)** : les choux de Sava → le potager sous le soleil → les rennes des jardins → la cave aux semences → le printemps du marchand → les bourdons des choux → les Choux jusqu'à l'horizon. Fil mécanique : **écho** (place rare : 4 cartes, au premier niveau ; les 3 autres faites pour être doublées), soin des alliés en appoint, invocations sur 3 cartes (rennes, bourdons), crochet « la cible brûle déjà » (brûlure sur une seule carte) ; prix : bête et PV. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 4, écho 4, bêtes 4, dégâts ciblés 4, mana 2, pioche 2 ; crochet « la cible brûle déjà » sur 3 ; prix sur 7 cartes (vos bêtes 5, PV 4).

```json
{"fiche":"ANT249","nom":"Gniloozero, le Potager du Marchand",
 "recit":"Au bord du lac de Gniloozero, le dégel ouvre chaque printemps les fosses où les pêcheurs gardent le poisson d'hiver. Ce qui avait pourri, on le jetait aux gloutons. Le marchand Sava se mit à l'acheter, pour presque rien, et à en fumer un potager derrière sa maison. Les choux y devinrent énormes, les seuls de toute la toundra. À la fin de l'hiver, quand les gencives saignent, il les revend aux pêcheurs au prix du sel. Les pêcheurs lui vendent leur poisson gâté au dégel, et le lui rachètent en choux.",
 "pal":["Le dégel a ouvert toutes les fosses ; le poisson pourrit sur la grève, et les gloutons et les labbes se disputent la rive puante.","Des fosses crevées par le dégel ; une odeur lourde monte du lac, et les pêcheurs trient le poisson gâté à mains nues.","Un lac gris dans la toundra ; des cabanes de rondins, des fosses couvertes de mousse, et un potager clos derrière la maison du marchand.","Le potager de Sava déborde de sa clôture ; de gros choux verts poussent sous le soleil de minuit, et les rennes rôdent autour.","Des choux énormes couvrent la toundra jusqu'à l'horizon ; les rennes s'y perdent, et le soleil de minuit les fait luire comme des pierres."],
 "pm":"Pourriture","pp":"Croissance"}
```

```json
[
{"id":"ANT249-moins-1","zone":"ANT249","pole":"-","palier":1,"nom":"Les Fosses du dégel","cout":1,"cible":1,
 "effet":"Un Glouton des fosses rejoint le combat : 8 PV, frappe 2. La cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Glouton des fosses",8,2],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Marque","Prix"],
 "ambiance":"Le dégel ouvre les fosses une à une, et l'odeur monte avant même que la glace cède.",
 "budget":"11 / 10 (+10 %)"},
{"id":"ANT249-moins-2","zone":"ANT249","pole":"-","palier":2,"nom":"Le Poisson gâté","cout":1,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 10 dégâts à la cible. Un Labbe pillard rejoint le combat : 8 PV, frappe 2. Le héros gagne 3 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","piocheCout0",[["deg","cible",10]]],["invoque","Labbe pillard",8,2],["garde","heros",3],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le poisson gâté sort des fosses en blocs mous, et les pêcheurs le trient sans gants.",
 "budget":"12,4 / 12,5 (−1 %)"},
{"id":"ANT249-moins-3","zone":"ANT249","pole":"-","palier":3,"nom":"Les Gloutons de la grève","cout":2,"cible":0,
 "effet":"Des Gloutons de la grève rejoignent le combat : 22 PV, frappe 3. Riposte 2 jusqu'à votre prochain tour ; +1 mana de Glace. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Gloutons de la grève",22,3],["riposte",2],["mana","Glace",1],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Riposte","Mana","Prix"],
 "ambiance":"Les gloutons descendent de la toundra dès le dégel, et rien ne les fait reculer.",
 "budget":"21,5 / 24 (−10 %)"},
{"id":"ANT249-moins-4","zone":"ANT249","pole":"-","palier":4,"nom":"Le Glouton du marchand","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 18 dégâts à la cible. Un Glouton du marchand rejoint le combat : 24 PV, frappe 4. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","piocheCout0",[["deg","cible",18]]],["invoque","Glouton du marchand",24,4],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Condition","Prix"],
 "ambiance":"Un glouton rôde chaque nuit autour du potager de Sava ; le marchand le laisse faire, il garde les choux.",
 "budget":"25 / 28 (−11 %)"},
{"id":"ANT249-moins-5","zone":"ANT249","pole":"-","palier":5,"nom":"Les Labbes du lac","cout":2,"cible":0,
 "effet":"Des Labbes du lac rejoignent le combat : 24 PV, frappe 4. Tous les ennemis sont marqués : +1 par coup reçu ; piochez 1 carte ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["invoque","Labbes du lac",24,4],["vulnerable","tous",1],["pioche",1],["riposte",3],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Marque","Riposte","Pioche","Prix"],
 "ambiance":"Les labbes tournent au-dessus des fosses et volent le poisson jusque dans les mains des pêcheurs.",
 "budget":"32,6 / 32 (+2 %)"},
{"id":"ANT249-moins-6","zone":"ANT249","pole":"-","palier":6,"nom":"Le Vieux Glouton du dégel","cout":2,"cible":1,
 "effet":"Si vous avez en main une carte de coût 0, 20 dégâts à la cible. Un Vieux Glouton du dégel rejoint le combat : 26 PV, frappe 4. La cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde ; votre bête la plus faible perd 2 PV.",
 "ops":[["si","piocheCout0",[["deg","cible",20]]],["invoque","Vieux Glouton du dégel",26,4],["vulnerable","cible",2],["ennemiGarde",1],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Le vieux glouton a les babines grises ; il connaît chaque fosse du lac, et l'ordre du dégel.",
 "budget":"31 / 36 (−14 %)"},
{"id":"ANT249-moins7","zone":"ANT249","pole":"-","palier":7,"nom":"La Grève pourrie","cout":2,"cible":1,
 "effet":"Le dégel ouvre les fosses. 8 à la cible ; un Glouton-roi (46 PV, frappe 6) ; chaque ennemi −2 d'attaque. Pose Givre. Si Abîme (consommée) : des Labbes du dégel (24 PV, frappe 4) ; 10 à la cible. Prix : ennemis +2 de garde ; bête la plus faible −3 PV.",
 "ops":[["deg","cible",8],["invoque","Glouton-roi",46,6],["affaiblit","tous",2],["pose","Givre"],["reveil","Abîme",true,[["invoque","Labbes du dégel",24,4],["deg","cible",10]]],["ennemiGarde",2],["prixBete",3]],
 "tags":["Antre","Glace","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Combo","Pose Givre","Réveil Abîme","Prix"],
 "ambiance":"Le poisson pourrit sur la grève ouverte, et les gloutons et les labbes se disputent la rive.",
 "budget":"46,2 sans combo ; réveil +28 (61 %)"},
{"id":"ANT249-plus-1","zone":"ANT249","pole":"+","palier":1,"nom":"Les Choux de Sava","cout":1,"cible":0,
 "effet":"La prochaine carte de zone de ce tour compte double ; vos alliés se soignent de 3. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["echo"],["soin","allies",3],["prixBete",1]],
 "tags":["Antre","Glace","Pôle +","Soin","Écho","Prix"],
 "ambiance":"Les choux de Sava sont plus gros qu'une tête d'homme, et plus chers qu'un manteau.",
 "budget":"9,5 / 10 (−5 %)"},
{"id":"ANT249-plus-2","zone":"ANT249","pole":"+","palier":2,"nom":"Le Potager sous le soleil","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 10 dégâts à la cible. Un Renne du potager rejoint le combat : 8 PV, frappe 2. +1 mana de Glace. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",10]]],["invoque","Renne du potager",8,2],["mana","Glace",1],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Le soleil de minuit tourne autour du potager sans se coucher, et les choux le suivent.",
 "budget":"14 / 12,5 (+12 %)"},
{"id":"ANT249-plus-3","zone":"ANT249","pole":"+","palier":3,"nom":"Les Rennes des jardins","cout":2,"cible":0,
 "effet":"La prochaine carte de zone de ce tour compte double. Des Rennes des jardins rejoignent le combat : 20 PV, frappe 3. Vos alliés se soignent de 4. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["echo"],["invoque","Rennes des jardins",20,3],["soin","allies",4],["prixBete",2]],
 "tags":["Antre","Glace","Pôle +","Invocation","Soin","Écho","Prix"],
 "ambiance":"Les rennes rôdent autour de la clôture et passent la tête entre les pieux pour mordre une feuille.",
 "budget":"24,5 / 24 (+2 %)"},
{"id":"ANT249-plus-4","zone":"ANT249","pole":"+","palier":4,"nom":"La Cave aux semences","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 18 dégâts à la cible. Puis le héros gagne 6 de garde ; piochez 1 carte ; la cible est marquée : +2 par coup reçu ; +2 mana de Glace. Prix : le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",18]]],["garde","heros",6],["pioche",1],["vulnerable","cible",2],["mana","Glace",2],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Garde","Pioche","Mana","Condition","Prix"],
 "ambiance":"Sava garde ses graines dans une cave sèche, sous clé, et ne les compte que seul.",
 "budget":"28,8 / 28 (+3 %)"},
{"id":"ANT249-plus-5","zone":"ANT249","pole":"+","palier":5,"nom":"Le Printemps du marchand","cout":2,"cible":1,
 "effet":"La prochaine carte de zone de ce tour compte double ; vos alliés se soignent de 10 ; piochez 1 carte ; la cible brûle : 2 par tour pendant 3 tours. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["echo"],["soin","allies",10],["pioche",1],["brulure","cible",2,3],["prixBete",2]],
 "tags":["Antre","Glace","Pôle +","Brûlure","Soin","Pioche","Écho","Prix"],
 "ambiance":"Sava étale le poisson gâté sur ses planches au printemps, et le potager fume dans le froid.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT249-plus-6","zone":"ANT249","pole":"+","palier":6,"nom":"Les Bourdons des choux","cout":2,"cible":1,
 "effet":"Si la cible brûle déjà, 20 dégâts à la cible. Des Bourdons des choux rejoignent le combat : 20 PV, frappe 3. L'attaque de la cible baisse de 2 ; riposte 4 jusqu'à votre prochain tour. Prix : votre bête la plus faible perd 2 PV ; le héros perd 1 PV.",
 "ops":[["si","brule",[["deg","cible",20]]],["invoque","Bourdons des choux",20,3],["affaiblit","cible",2],["riposte",4],["prixBete",2],["prixPV",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Les bourdons de la toundra s'enfoncent dans les fleurs de chou, lourds et velus comme des pouces.",
 "budget":"35,5 / 36 (−1 %)"},
{"id":"ANT249-plus7","zone":"ANT249","pole":"+","palier":7,"nom":"Les Choux jusqu'à l'horizon","cout":2,"cible":1,
 "effet":"Tout devient potager. La prochaine carte de zone compte double ; un Grand Renne (50 PV, frappe 5) ; alliés soignés de 8. Pose Racine. Si Givre (consommée) : 10 à la cible ; alliés soignés de 13. Prix : bête la plus faible −2 PV ; héros −2 PV.",
 "ops":[["echo"],["invoque","Grand Renne",50,5],["soin","allies",8],["pose","Racine"],["reveil","Givre",true,[["deg","cible",10],["soin","allies",13]]],["prixBete",2],["prixPV",2]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Soin","Écho","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"Des choux énormes couvrent la toundra jusqu'à l'horizon, et les rennes s'y perdent.",
 "budget":"46,5 sans combo ; réveil +29,5 (63 %)"}
]
```
