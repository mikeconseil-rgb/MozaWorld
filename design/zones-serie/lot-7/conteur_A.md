# Lot 7 — Conteur A, le Chroniqueur amer

Douze zones à cartes (fiche et 14 cartes chacune, soit 168 cartes) et quatorze Ressources (fiche légère, sans carte). Carte des familles : `familles_A.md`, écrite avant les cartes (10 h 11), mise à jour à 10 h 22 et à la remise.

**Budget du palier n** = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Table de points commune : « alliés » ×1,5 ; « tous » ×2,2 ; hésitation de tous = 9 ; `si` compté à 50 % ; vol de vie = moitié des dégâts de la carte, dégâts des `si` compris (comptés à 50 %) ; exil = prix 3 ; prixDefausse n rend 3n ; ennemiGarde n rend 2n ; **ennemiSoin n rend 2n** (leçon 8 du lot 6) ; invocation = PV/2 + attaque × 1,5. Budgets **calculés au script** à partir des `ops` (colonne `budget` de chaque carte) ; formes du palier 7 entre 45 et 55 points de base, sans tolérance, réveil de 60 à 100 %. Aucun boost.

**Validateur (valide.py, celui du lot 6 complété) : 0 erreur, 0 avertissement** sur 12 zones, 168 cartes, 26 fiches. Il vérifie : conditions `si` lues dans cartes.js et placées avant les dégâts ciblés (aucun lest en fin de carte) ; budgets recalculés depuis les `ops` (±15 %, palier 7 entre 45 et 55, réveil de 60 à 100 %) ; longueurs (ambiance 12–20 mots, récit 60–100, Ressource 30–50, `pal` ≤ 160 car., effet ≤ 250 car., ouverture du palier 7 en 3–6 mots) ; aucun nombre ni mot interdit dans la prose ; chutes « sans X. » 2 au plus ; cible et tag Loi ; familles principales (5 cartes ou plus, plafond 2 pôles chez A, 6 dans le lot), appoints dans 3 pôles au plus, colonnes vertébrales des 3 pôles sans famille principale, un seul crochet sur 5 cartes ou plus ; dégâts ciblés ≤ 4 (5 en Donjon), « tous » ≤ 3 ; prix sur 4 cartes au moins sur 7 et égalité à une carte près ; Antres 3 invocations par pôle, Assemblées 2 Lois par pôle ; mots de pôle des lots 1 à 6 ; noms (noms-pris, moitiés, préfixes, noms de B, C et D) ; premiers mots, gestes et objets des Ressources contre les 319 Ressources antérieures.

**Prix par pôle (cartes à prix sur 7, − / +)** : ANT107 6/6, ANT111 7/7, ANT203 7/7, ANT224 7/6, ANT235 7/7, ASS003 7/7, ASS077 6/7, ASS112 7/7, ASS163 6/7, ASS165 7/7, CIT021 6/6, DON114 6/6.

Recettes de récit (aucune deux fois, aucune reprise des formes de A au lot 6, documents cités 3 sur 12, aucune énumération) : ANT107 l'histoire de revenant ; ANT111 la chasse racontée par le chasseur ; ANT203 le retour du banni ; ANT224 le chantier qui tourne autrement ; ANT235 la vie de sainte corrigée par les faits ; ASS077 **la charte** (document) ; ASS003 **le registre des songes** (document) ; ASS165 le portrait d'une présidente ; ASS163 le débat à deux voix (raconté, sans dialogue au discours direct) ; ASS112 la légende de fondation ; DON114 **le devis** (document) ; CIT021 l'ordre mal transmis.

Recettes des extrêmes : −7 en foule (ANT107), vide (ANT111), silence (ANT203, ANT235, CIT021), ordre (ANT224, ASS077), démesure (ASS003, ASS163), ruine (ASS165, ASS112, DON114) ; +7 en vide (ANT107, ASS163), foule (ANT111, ASS077, ASS165), ordre (ANT203, ASS003, DON114), démesure (ANT224, ANT235, ASS112, CIT021). Aucun +7 où le végétal avale un bâtiment (l'herbe d'ASS112 couvre une colline et un cercle de pierres levées, pas une construction). Aucun pigment au +7.

Résonances des formes du palier 7 (posée → réveillée). Posées : Givre 5, Sang 4, Abîme 4, Sceau 4, Braise 4, Racine 3. Réveillées : Racine 5, Sang 4, Braise 4, Givre 4, Sceau 4, Abîme 3.

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT107 | Sang → Racine | Givre → Sang |
| ANT111 | Abîme → Braise | Sceau → Abîme |
| ANT203 | Racine → Givre | Braise → Sceau |
| ANT224 | Sceau → Racine | Abîme → Sceau |
| ANT235 | Givre → Braise | Sang → Givre |
| ASS077 | Racine → Sang | Braise → Abîme |
| ASS003 | Braise → Givre | Sceau → Racine |
| ASS165 | Abîme → Sang | Racine → Abîme |
| ASS163 | Givre → Braise | Sang → Sceau |
| ASS112 | Sang → Givre | Sceau → Braise |
| DON114 | Abîme → Racine | Givre → Sang |
| CIT021 | Givre → Racine | Braise → Sceau |

---

## 1. Draugakjarr, la Mangrove des Revenants (ANT107) — Antre · Mangrove · Eau · Nordique

Forme du récit : l'histoire de revenant (le noyé qui revient demander à boire). Recette du −7 : la foule (les noyés debout qui attendent la marée) ; du +7 : le vide (personne ne se noie plus, le tonneau des morts reste plein).

**Mort (−)** : la corne versée → la marée des noyés → le noyé des racines → le requin échoué → le draugr de la proue → la bière des morts → les Morts à table. Comptes au script (cartes sur 7, `si` et réveil compris) : vol de vie 7, dégâts ciblés 4, bêtes 4, dégâts à tous 3, affaiblissement 2, coups au hasard 2 ; crochet « le héros a moins de la moitié de ses PV » sur 3 ; prix sur 6 cartes (PV 6).

**Vie (+)** : la pousse rouge → le lait des racines → le héron des pilotis → les enfants sur la proue → la grande tortue → le poisson-sauteur → la Mangrove qui guérit. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, bêtes 4, garde des alliés 4, dégâts ciblés 3, affaiblissement 2 ; crochet « une de vos bêtes est en jeu » sur 2 ; prix sur 6 cartes (soin ennemi 4, défausse 2).

```json
{"fiche":"ANT107","nom":"Draugakjarr, la Mangrove des Revenants",
 "recit":"Le bateau de Grímr se perdit si loin au sud que la mer y devint chaude et que les arbres y marchaient sur leurs racines. On s'installa dans la mangrove. Grímr se noya entre les racines, à marée haute. Sæunn veilla le corps toute la nuit ; à la marée suivante, il revint, ruisselant, demander de la bière. Elle lui en servit. Depuis, chaque noyé de la mangrove revient boire. Les vivants brassent pour eux. Les morts ne paient pas, mais ils ne se plaignent jamais de la bière.",
 "pal":["Les racines sont nues et noires ; sur la vase grise, des noyés debout attendent la marée, une corne à boire vide à la main.","Les palétuviers perdent leurs feuilles, des cornes flottent entre les racines, et des pas mouillés montent la nuit jusqu'aux maisons.","Une mangrove chaude et sombre, des maisons de bois sur pilotis, une proue de dragon échouée entre les racines, et un tonneau de bière.","Les racines se couvrent de pousses rouges, des hérons pêchent sous les pilotis, et les enfants jouent sur la proue sans savoir ce qu'est un bateau.","Plus personne ne se noie : l'eau est claire jusqu'au fond, les poissons-sauteurs grouillent sur les racines, et le tonneau des morts reste plein."],
 "pm":"Mort","pp":"Vie"}
```

```json
[
{"id":"ANT107-moins-1","zone":"ANT107","pole":"-","palier":1,"nom":"La Corne versée","cout":1,"cible":1,
 "effet":"6 dégâts à la cible ; tous ces dégâts en vol de vie ; l'attaque de la cible baisse de 1. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",6],["volVie"],["affaiblit","cible",1],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Vol de vie","Prix"],
 "ambiance":"Sæunn verse une corne de bière sur les racines, chaque soir ; l'eau noire la boit sans un bruit.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT107-moins-2","zone":"ANT107","pole":"-","palier":2,"nom":"La Marée des noyés","cout":1,"cible":0,
 "effet":"Si le héros a moins de la moitié de ses PV, riposte 3 jusqu'à votre prochain tour. Puis 3 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Prix : le héros perd 1 PV.",
 "ops":[["si","blesse",[["riposte",3]]],["deg","tous",3],["volVie"],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Riposte","Vol de vie","Condition","Prix"],
 "ambiance":"À chaque marée haute, l'eau monte entre les racines et rapporte quelqu'un qu'on avait fini de pleurer.",
 "budget":"11,9 / 12,5 (−5 %)"},
{"id":"ANT107-moins-3","zone":"ANT107","pole":"-","palier":3,"nom":"Le Noyé des racines","cout":2,"cible":0,
 "effet":"Un Noyé des racines rejoint le combat : 12 PV, frappe 6. 3 coups de 3 au hasard ; tous ces dégâts en vol de vie. Prix : le héros perd 3 PV.",
 "ops":[["invoque","Noyé des racines",12,6],["deg","hasard",3,3],["volVie"],["prixPV",3]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Il marche au fond, entre les racines, la barbe pleine de vase, et cherche la maison de sa femme.",
 "budget":"25,5 / 24 (+6 %)"},
{"id":"ANT107-moins-4","zone":"ANT107","pole":"-","palier":4,"nom":"Le Requin échoué","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 10 dégâts à la cible. 8 dégâts à la cible ; tous ces dégâts en vol de vie. Un Requin échoué rejoint le combat : 10 PV, frappe 4. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",10]]],["deg","cible",8],["volVie"],["invoque","Requin échoué",10,4],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Vol de vie","Condition","Prix"],
 "ambiance":"Un requin du nord a suivi le bateau jusqu'ici ; il mord les mollets des vivants, jamais ceux des morts.",
 "budget":"28,5 / 28 (+2 %)"},
{"id":"ANT107-moins-5","zone":"ANT107","pole":"-","palier":5,"nom":"Le Draugr de la proue","cout":2,"cible":0,
 "effet":"5 dégâts à tous les ennemis ; tous ces dégâts en vol de vie. Un Draugr de la proue rejoint le combat : 14 PV, frappe 6. Prix : le héros perd 2 PV.",
 "ops":[["deg","tous",5],["volVie"],["invoque","Draugr de la proue",14,6],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Vol de vie","Prix"],
 "ambiance":"Le noyé du voyage dort encore à la proue, et se lève quand on parle trop fort de rentrer.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT107-moins-6","zone":"ANT107","pole":"-","palier":6,"nom":"La Bière des morts","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, le héros se soigne de 10. Puis 16 dégâts à la cible ; tous ces dégâts en vol de vie ; l'attaque de la cible baisse de 2.",
 "ops":[["si","blesse",[["soin","heros",10]]],["deg","cible",16],["volVie"],["affaiblit","cible",2]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Vol de vie","Soin","Condition"],
 "ambiance":"Les vivants brassent la bière des morts dans un tonneau à part, et n'y goûtent jamais, par politesse.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT107-moins7","zone":"ANT107","pole":"-","palier":7,"nom":"Les Morts à table","cout":2,"cible":1,
 "effet":"Les morts tiennent la table. 8 à la cible ; un Grímr-qui-revient (18 PV, frappe 8) ; 6 à tous ; tout en vol de vie. Pose Sang. Si Racine (consommée) : un Noyé de la marée (12 PV, frappe 6) ; 4 à tous ; 3 coups de 3 au hasard. Prix : héros −3 PV.",
 "ops":[["deg","cible",8],["invoque","Grímr-qui-revient",18,8],["deg","tous",6],["volVie"],["pose","Sang"],["reveil","Racine",true,[["invoque","Noyé de la marée",12,6],["deg","tous",4],["deg","hasard",3,3]]],["prixPV",3]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Vol de vie","Combo","Pose Sang","Réveil Racine","Prix"],
 "ambiance":"Grímr préside au bout de la table, ruisselant ; c'est lui qui décide quand la bière manque.",
 "budget":"49,8 sans combo ; réveil +32,8 (66 %)"},
{"id":"ANT107-plus-1","zone":"ANT107","pole":"+","palier":1,"nom":"La Pousse rouge","cout":1,"cible":0,
 "effet":"Le héros se soigne de 6. Une Tortue de vase rejoint le combat : 6 PV, frappe 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","heros",6],["invoque","Tortue de vase",6,2],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Soin","Prix"],
 "ambiance":"Une pousse de palétuvier, rouge comme une veine, plantée par Sæunn à l'endroit où Grímr s'est noyé.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT107-plus-2","zone":"ANT107","pole":"+","palier":2,"nom":"Le Lait des racines","cout":1,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, le héros se soigne de 6. Puis 3 dégâts à la cible ; vos alliés gagnent 4 de garde ; le héros se soigne de 5. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","bete",[["soin","heros",6]]],["deg","cible",3],["garde","allies",4],["soin","heros",5],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Coupée, la racine pleure une sève blanche ; on en frotte les plaies, et la peau se referme.",
 "budget":"12,8 / 12,5 (+2 %)"},
{"id":"ANT107-plus-3","zone":"ANT107","pole":"+","palier":3,"nom":"Le Héron des pilotis","cout":2,"cible":0,
 "effet":"Un Héron des pilotis rejoint le combat : 10 PV, frappe 4. Le héros se soigne de 8 ; vos alliés gagnent 5 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["invoque","Héron des pilotis",10,4],["soin","heros",8],["garde","allies",5],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Soin","Prix"],
 "ambiance":"Le héron gris pêche sous les maisons, immobile, et n'a jamais eu peur des morts qui passent.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT107-plus-4","zone":"ANT107","pole":"+","palier":4,"nom":"Les Enfants sur la proue","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros se soigne de 10 ; l'attaque de la cible baisse de 2 ; riposte 3 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",10],["soin","heros",10],["affaiblit","cible",2],["riposte",3],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"Les enfants nés ici grimpent sur la proue échouée ; ils croient qu'un bateau est une maison qui penche.",
 "budget":"29 / 28 (+4 %)"},
{"id":"ANT107-plus-5","zone":"ANT107","pole":"+","palier":5,"nom":"La Grande Tortue des racines","cout":2,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 8 de garde. Une Grande Tortue des racines rejoint le combat : 14 PV, frappe 6. Le héros se soigne de 12. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","bete",[["garde","allies",8]]],["invoque","Grande Tortue des racines",14,6],["soin","heros",12],["ennemiSoin",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Garde","Soin","Condition","Prix"],
 "ambiance":"Elle remonte la vase à marée basse, si vieille que des algues poussent sur sa carapace.",
 "budget":"30,8 / 32 (−4 %)"},
{"id":"ANT107-plus-6","zone":"ANT107","pole":"+","palier":6,"nom":"Le Poisson-sauteur","cout":2,"cible":0,
 "effet":"Le héros se soigne de 14 ; 5 dégâts à tous les ennemis. Un Poisson-sauteur des pousses rejoint le combat : 10 PV, frappe 4.",
 "ops":[["soin","heros",14],["deg","tous",5],["invoque","Poisson-sauteur des pousses",10,4]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Soin"],
 "ambiance":"Les poissons-sauteurs retournent la vase autour des pousses, et la vase remuée fait courir les racines.",
 "budget":"36 / 36 (+0 %)"},
{"id":"ANT107-plus7","zone":"ANT107","pole":"+","palier":7,"nom":"La Mangrove qui guérit","cout":2,"cible":1,
 "effet":"Plus personne ne se noie. 14 à la cible ; soin du héros 16 ; alliés +10 de garde ; cible −3 d'attaque. Pose Givre. Si Sang (consommée) : soin du héros 12 ; alliés +8 de garde ; 8 à la cible. Prix : ennemis soignés de 2.",
 "ops":[["deg","cible",14],["soin","heros",16],["garde","allies",10],["affaiblit","cible",3],["pose","Givre"],["reveil","Sang",true,[["soin","heros",12],["garde","allies",8],["deg","cible",8]]],["ennemiSoin",2]],
 "tags":["Antre","Eau","Forme ultime +7","Dégâts","Affaiblissement","Garde","Soin","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"L'eau est claire jusqu'au fond ; le tonneau des morts reste plein, et Sæunn le regarde sans rien dire.",
 "budget":"47 sans combo ; réveil +29,6 (63 %)"}
]
```

---

## 2. Nirivik, la Plaine des Gnous (ANT111) — Antre · Savane · Feu · Inuit

Forme du récit : la chasse racontée par le chasseur. Recette du −7 : le vide (la plaine rongée, les os) ; du +7 : la foule (le troupeau qui ne finit plus de passer, le campement qui mange à la file).

**Famine (−)** : le harpon planté → la hyène des os → le plus faible du troupeau → la croûte du trou d'eau → les hyènes couchées → le récit de la chasse → la Plaine rongée. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, affaiblissement 4, bêtes 4, dégâts ciblés 3, garde du héros 2 ; crochet « il ne reste qu'un ennemi » sur 3 ; prix sur 7 cartes (vos bêtes 4, PV 3).

**Festin (+)** : le troupeau en vue → le gnou au harpon → le partage devant la tente → le lion repu → les feux de dépeçage → le grand passage → le Festin sans fin. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, soin du héros 4, bêtes 4, dégâts ciblés 2, dégâts à tous 2 ; crochet « une de vos bêtes est en jeu » sur 3 ; prix sur 7 cartes (soin ennemi 4, vos bêtes 2, exil 1).

```json
{"fiche":"ANT111","nom":"Nirivik, la Plaine des Gnous",
 "recit":"Les ancêtres d'Uyarak ont marché vers le sud jusqu'à ce que la glace devienne herbe, et ils ont gardé leurs coutumes. Quand les gnous passent, on les chasse au harpon, au gué, comme le phoque au trou. On partage tout et on mange tout, tout de suite, parce que sur la banquise la viande ne se gardait pas. Puis les troupeaux s'en vont. Chaque soir de la saison sèche, Uyarak raconte sa chasse du dernier passage. Les enfants l'écoutent avec attention : c'est le seul repas qui revienne.",
 "pal":["Une plaine de cendre sous un soleil blanc, des os de gnous rongés jusqu'à la moelle, et des hyènes couchées à l'ombre des harpons plantés.","L'herbe brûlée craque sous les pas, les trous d'eau sont des croûtes de boue fendue, et les harpons dorment sous les tentes.","Une savane rousse, des tentes de peau rondes comme des maisons de neige, des harpons plantés devant les portes, et de la poussière à l'horizon.","Les gnous passent à perte de vue sous leur poussière ; on dépèce devant chaque tente, les feux fument, les enfants courent luisants de graisse.","Le troupeau ne finit plus de passer : la plaine est une rivière de dos noirs, et le campement mange à la file, sans s'arrêter, jusqu'au sommeil."],
 "pm":"Famine","pp":"Festin"}
```

```json
[
{"id":"ANT111-moins-1","zone":"ANT111","pole":"-","palier":1,"nom":"Le Harpon planté","cout":1,"cible":1,
 "effet":"La cible est marquée : +2 par coup reçu ; le héros gagne 5 de garde. Prix : le héros perd 1 PV.",
 "ops":[["vulnerable","cible",2],["garde","heros",5],["prixPV",1]],
 "tags":["Antre","Feu","Pôle −","Marque","Garde","Prix"],
 "ambiance":"Quand les troupeaux sont partis, Uyarak plante son harpon devant la tente, pointe en l'air, et attend.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT111-moins-2","zone":"ANT111","pole":"-","palier":2,"nom":"La Hyène des os","cout":1,"cible":1,
 "effet":"Une Hyène des os rejoint le combat : 6 PV, frappe 3. La cible est marquée : +1 par coup reçu ; l'attaque de la cible baisse de 1. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["invoque","Hyène des os",6,3],["vulnerable","cible",1],["affaiblit","cible",1],["prixBete",1]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Affaiblissement","Prix"],
 "ambiance":"Elle suit le campement à distance et ronge ce qu'on jette ; cette saison, on ne jette rien.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT111-moins-3","zone":"ANT111","pole":"-","palier":3,"nom":"Le Plus Faible du troupeau","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 12 dégâts à la cible. La cible est marquée : +3 par coup reçu. Un Marabout des cendres rejoint le combat : 8 PV, frappe 4. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",12]]],["vulnerable","cible",3],["invoque","Marabout des cendres",8,4],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Dégâts","Marque","Condition","Prix"],
 "ambiance":"Le gnou resté en arrière traîne une patte ; tout le monde le regarde, les hyènes comme les chasseurs.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT111-moins-4","zone":"ANT111","pole":"-","palier":4,"nom":"La Croûte du trou d'eau","cout":2,"cible":1,
 "effet":"Tous les ennemis sont marqués : +2 par coup reçu ; l'attaque de la cible baisse de 2 ; le héros gagne 8 de garde ; le héros se soigne de 5. Prix : le héros perd 2 PV.",
 "ops":[["vulnerable","tous",2],["affaiblit","cible",2],["garde","heros",8],["soin","heros",5],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Marque","Affaiblissement","Garde","Soin","Prix"],
 "ambiance":"Au fond du trou d'eau, la boue s'est fendue en écailles ; un poisson y est mort en nageant.",
 "budget":"28,6 / 28 (+2 %)"},
{"id":"ANT111-moins-5","zone":"ANT111","pole":"-","palier":5,"nom":"Les Hyènes couchées","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, la cible est marquée : +3 par coup reçu. Une Meute de hyènes rejoint le combat : 14 PV, frappe 6. La cible est marquée : +4 par coup reçu. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["si","seul",[["vulnerable","cible",3]]],["invoque","Meute de hyènes",14,6],["vulnerable","cible",4],["prixBete",2]],
 "tags":["Antre","Feu","Pôle −","Invocation","Marque","Condition","Prix"],
 "ambiance":"Les hyènes ne chassent plus : elles se couchent à l'ombre des tentes et attendent, comme les chasseurs.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT111-moins-6","zone":"ANT111","pole":"-","palier":6,"nom":"Le Récit de la chasse","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, 14 dégâts à la cible. L'attaque de chaque ennemi baisse de 2 ; la cible est marquée : +5 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",14]]],["affaiblit","tous",2],["vulnerable","cible",5],["prixPV",2]],
 "tags":["Antre","Feu","Pôle −","Dégâts","Marque","Affaiblissement","Condition","Prix"],
 "ambiance":"Chaque soir, Uyarak raconte sa chasse du dernier passage ; le gnou grossit d'un récit à l'autre.",
 "budget":"33,2 / 36 (−8 %)"},
{"id":"ANT111-moins7","zone":"ANT111","pole":"-","palier":7,"nom":"La Plaine rongée","cout":2,"cible":1,
 "effet":"La plaine n'a plus d'herbe. Une Hyène-reine des cendres (18 PV, frappe 8) ; tous marqués (+3) ; cible −3 d'attaque. Pose Abîme. Si Braise (consommée) : cible marquée (+4) ; 12 à la cible ; cible −2 d'attaque. Prix : bête la plus faible −3 PV.",
 "ops":[["invoque","Hyène-reine des cendres",18,8],["vulnerable","tous",3],["affaiblit","cible",3],["pose","Abîme"],["reveil","Braise",true,[["vulnerable","cible",4],["deg","cible",12],["affaiblit","cible",2]]],["prixBete",3]],
 "tags":["Antre","Feu","Forme ultime −7","Invocation","Dégâts","Marque","Affaiblissement","Combo","Pose Abîme","Réveil Braise","Prix"],
 "ambiance":"Les os des gnous sont rongés jusqu'à la moelle ; les hyènes dorment dessus, et les enfants les regardent dormir.",
 "budget":"46,8 sans combo ; réveil +30 (64 %)"},
{"id":"ANT111-plus-1","zone":"ANT111","pole":"+","palier":1,"nom":"Le Troupeau en vue","cout":1,"cible":0,
 "effet":"Vos alliés gagnent 6 de garde ; le héros se soigne de 5. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",6],["soin","heros",5],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Garde","Soin","Prix"],
 "ambiance":"La poussière monte à l'horizon avant le bruit ; Uyarak tire le harpon de sous la tente.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ANT111-plus-2","zone":"ANT111","pole":"+","palier":2,"nom":"Le Gnou au harpon","cout":1,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 4 de garde. Un Gnou harponné rejoint le combat : 8 PV, frappe 2. Vos alliés gagnent 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","bete",[["garde","allies",4]]],["invoque","Gnou harponné",8,2],["garde","allies",4],["exil"]],
 "tags":["Antre","Feu","Pôle +","Invocation","Garde","Condition","Exil","Prix"],
 "ambiance":"On le harponne au gué comme un phoque au trou ; c'est lui qui tire le chasseur à l'eau.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ANT111-plus-3","zone":"ANT111","pole":"+","palier":3,"nom":"Le Partage devant la tente","cout":2,"cible":1,
 "effet":"8 dégâts à la cible ; vos alliés gagnent 8 de garde ; le héros se soigne de 8. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",8],["garde","allies",8],["soin","heros",8],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Tout se partage, jusqu'à la langue ; qui garde un morceau pour demain est montré du doigt.",
 "budget":"23,6 / 24 (−2 %)"},
{"id":"ANT111-plus-4","zone":"ANT111","pole":"+","palier":4,"nom":"Le Lion repu","cout":2,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 6 de garde. Un Lion repu rejoint le combat : 14 PV, frappe 6. Vos alliés gagnent 8 de garde. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","bete",[["garde","allies",6]]],["invoque","Lion repu",14,6],["garde","allies",8],["prixBete",3]],
 "tags":["Antre","Feu","Pôle +","Invocation","Garde","Condition","Prix"],
 "ambiance":"Le lion a tant mangé qu'il dort au milieu du troupeau, et les gnous broutent autour de lui.",
 "budget":"26,2 / 28 (−6 %)"},
{"id":"ANT111-plus-5","zone":"ANT111","pole":"+","palier":5,"nom":"Les Feux de dépeçage","cout":2,"cible":0,
 "effet":"Vos alliés gagnent 10 de garde ; le héros se soigne de 10 ; 4 dégâts à tous les ennemis. Prix : chaque ennemi se soigne de 1.",
 "ops":[["garde","allies",10],["soin","heros",10],["deg","tous",4],["ennemiSoin",1]],
 "tags":["Antre","Feu","Pôle +","Dégâts","Garde","Soin","Prix"],
 "ambiance":"Les feux fument devant chaque tente, la graisse coule sur les pierres, et personne ne parle la bouche vide.",
 "budget":"28,8 / 32 (−10 %)"},
{"id":"ANT111-plus-6","zone":"ANT111","pole":"+","palier":6,"nom":"Le Grand Passage","cout":2,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, 6 dégâts à tous les ennemis. Un Gnou de tête rejoint le combat : 16 PV, frappe 6. Vos alliés gagnent 10 de garde. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","bete",[["deg","tous",6]]],["invoque","Gnou de tête",16,6],["garde","allies",10],["prixBete",3]],
 "tags":["Antre","Feu","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le troupeau passe du matin au soir ; on ne chasse plus, on se contente de regarder la viande marcher.",
 "budget":"32,6 / 36 (−9 %)"},
{"id":"ANT111-plus7","zone":"ANT111","pole":"+","palier":7,"nom":"Le Festin sans fin","cout":2,"cible":1,
 "effet":"Le campement mange sans s'arrêter. Alliés +14 de garde ; un Gnou-roi du passage (18 PV, frappe 8) ; soin du héros 12. Pose Sceau. Si Abîme (consommée) : alliés +10 de garde ; soin du héros 10 ; 10 à la cible. Prix : ennemis soignés de 2.",
 "ops":[["garde","allies",14],["invoque","Gnou-roi du passage",18,8],["soin","heros",12],["pose","Sceau"],["reveil","Abîme",true,[["garde","allies",10],["soin","heros",10],["deg","cible",10]]],["ennemiSoin",2]],
 "tags":["Antre","Feu","Forme ultime +7","Invocation","Dégâts","Garde","Soin","Combo","Pose Sceau","Réveil Abîme","Prix"],
 "ambiance":"Les gnous passent encore, et le campement mange à la file ; personne ne pense à la saison sèche.",
 "budget":"45,8 sans combo ; réveil +32 (70 %)"}
]
```

---

## 3. Apparu-Nadû, l'Îlot du Ban (ANT203) — Antre · Delta fluvial · Eau · Mésopotamienne

Forme du récit : le retour du banni (récit, sans document). Recette du −7 : le silence (la ville a oublié le nom, les roseaux se taisent) ; du +7 : l'ordre (le quartier de roseaux recensé, le percepteur sur sa natte).

**Exil (−)** : la barque des bannis → le sanglier des roseaux → la hutte sans porte → le buffle du gué → le ban relu → le pardon tardif → l'Exilé à demeure. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, hésitation 4, bêtes 4, dégâts ciblés 3 ; crochet « la cible vole par-dessus » sur 3 ; prix sur 7 cartes (PV 4, défausse 3).

**Foyer (+)** : le feu de roseaux → l'oie de la hutte → la femme et les enfants → la natte sur le seuil → les autres bannis → le pélican apprivoisé → le Feu qui ne s'éteint plus. Pôle sans famille principale : sa colonne vertébrale est le crochet « la Garde du héros est levée » sur 4 cartes, nourri par la garde du héros (4 cartes) ; bêtes de la hutte sur 3 cartes ; prix : défausse et garde ennemie, sur les 7 cartes. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 4, dégâts ciblés 4, bêtes 3, riposte 2, soin du héros 2, dégâts à tous 2, affaiblissement 2, coups au hasard 2 ; crochet « la Garde du héros est levée » sur 4 ; prix sur 7 cartes (garde ennemie 4, défausse 3).

```json
{"fiche":"ANT203","nom":"Apparu-Nadû, l'Îlot du Ban",
 "recit":"Iddin-Nabû fut banni de la ville pour un vol de dattes qu'il n'avait peut-être pas commis. On le mit dans une barque de roseau, et le courant le laissa sur un îlot du delta. Il y bâtit une hutte, pêcha, apprivoisa un buffle ; sa femme le rejoignit, puis d'autres bannis, puis leurs familles. Un jour, la ville lui fit grâce et le rappela. Il ne revint pas. Alors la ville vint à lui : l'îlot devint un quartier, et le quartier reçut un percepteur, qui était l'ancien plaignant.",
 "pal":["Des chenaux vides et des huttes effondrées ; les roseaux sont gris et immobiles, et plus une barque ne passe à portée de voix de la ville.","Des roseaux coupés à ras, une barque sans rame tirée sur la boue, des sangliers qui fouillent les ruines d'une hutte sans porte.","Un îlot dans les roseaux du delta, une hutte de roseaux liés en arceaux, un buffle couché dans l'eau, et un feu qui fume devant l'entrée.","Des huttes neuves autour de l'ancienne, des nattes sur les seuils, des chiens et des enfants ; les barques font l'aller et retour avec la rive.","L'îlot est un quartier : les huttes sont alignées et numérotées à la craie, et le percepteur siège sur sa natte à l'entrée du chenal."],
 "pm":"Exil","pp":"Foyer"}
```

```json
[
{"id":"ANT203-moins-1","zone":"ANT203","pole":"-","palier":1,"nom":"La Barque des bannis","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 2 ; la cible hésite ; 2 coups de 1 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["affaiblit","cible",2],["hesite","cible"],["deg","hasard",1,2],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Contrôle","Prix"],
 "ambiance":"On met le banni dans une barque de roseau, sans rame, et le courant décide du reste.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT203-moins-2","zone":"ANT203","pole":"-","palier":2,"nom":"Le Sanglier des roseaux","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 6 dégâts à la cible. Un Sanglier des roseaux rejoint le combat : 6 PV, frappe 2. L'attaque de la cible baisse de 1. Prix : le héros perd 1 PV.",
 "ops":[["si","vol",[["deg","cible",6]]],["invoque","Sanglier des roseaux",6,2],["affaiblit","cible",1],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Dégâts","Affaiblissement","Condition","Prix"],
 "ambiance":"Il charge dans les roseaux sans rien voir, et les bannis ont appris à grimper vite.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ANT203-moins-3","zone":"ANT203","pole":"-","palier":3,"nom":"La Hutte sans porte","cout":2,"cible":1,
 "effet":"L'attaque de chaque ennemi baisse de 2 ; la cible hésite ; le héros gagne 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",2],["hesite","cible"],["garde","heros",8],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Affaiblissement","Contrôle","Garde","Prix"],
 "ambiance":"Iddin-Nabû bâtit sa hutte sans porte : personne ne venait, et il n'y avait rien à voler.",
 "budget":"22,6 / 24 (−6 %)"},
{"id":"ANT203-moins-4","zone":"ANT203","pole":"-","palier":4,"nom":"Le Buffle du gué","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, l'attaque de la cible baisse de 3. Un Buffle d'eau rejoint le combat : 12 PV, frappe 5. L'attaque de la cible baisse de 4. Prix : le héros perd 2 PV.",
 "ops":[["si","vol",[["affaiblit","cible",3]]],["invoque","Buffle d'eau",12,5],["affaiblit","cible",4],["prixPV",2]],
 "tags":["Antre","Eau","Pôle −","Invocation","Affaiblissement","Condition","Prix"],
 "ambiance":"Le buffle d'eau traverse le chenal avec les enfants sur le dos, et ne se presse pour personne.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ANT203-moins-5","zone":"ANT203","pole":"-","palier":5,"nom":"Le Ban relu","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts à la cible. Puis 10 dégâts à la cible ; tous les ennemis hésitent ; l'attaque de la cible baisse de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","vol",[["deg","cible",8]]],["deg","cible",10],["hesite","tous"],["affaiblit","cible",3],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle −","Dégâts","Affaiblissement","Contrôle","Condition","Prix"],
 "ambiance":"Un messager de la ville vient relire le ban à voix haute ; les grenouilles couvrent sa voix.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT203-moins-6","zone":"ANT203","pole":"-","palier":6,"nom":"Le Pardon tardif","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 3. Un Grand Sanglier des roseaux rejoint le combat : 14 PV, frappe 6. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","tous",3],["invoque","Grand Sanglier des roseaux",14,6],["prixPV",1]],
 "tags":["Antre","Eau","Pôle −","Invocation","Affaiblissement","Prix"],
 "ambiance":"Le pardon arrive sur une tablette cuite et scellée ; Iddin-Nabû s'en sert pour caler sa barque.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"ANT203-moins7","zone":"ANT203","pole":"-","palier":7,"nom":"L'Exilé à demeure","cout":2,"cible":1,
 "effet":"Le banni ne revient plus. 12 à la cible ; cible −4 d'attaque ; la cible hésite ; un Buffle-roi des chenaux (18 PV, frappe 8). Pose Racine. Si Givre (consommée) : cible −3 d'attaque ; 12 à la cible ; riposte 4. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",12],["affaiblit","cible",4],["hesite","cible"],["invoque","Buffle-roi des chenaux",18,8],["pose","Racine"],["reveil","Givre",true,[["affaiblit","cible",3],["deg","cible",12],["riposte",4]]],["prixDefausse",1]],
 "tags":["Antre","Eau","Forme ultime −7","Invocation","Dégâts","Affaiblissement","Contrôle","Riposte","Combo","Pose Racine","Réveil Givre","Prix"],
 "ambiance":"La ville a oublié le nom du banni ; les roseaux le savent encore, et le taisent quand on passe.",
 "budget":"47 sans combo ; réveil +29 (62 %)"},
{"id":"ANT203-plus-1","zone":"ANT203","pole":"+","palier":1,"nom":"Le Feu de roseaux","cout":1,"cible":1,
 "effet":"6 dégâts à la cible ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",6],["garde","heros",8],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Garde","Prix"],
 "ambiance":"Le soir du ban, Iddin-Nabû alluma un feu de roseaux ; il brûla vite, et il en alluma un autre.",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"ANT203-plus-2","zone":"ANT203","pole":"+","palier":2,"nom":"L'Oie de la hutte","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, 6 dégâts à la cible. Une Oie de garde rejoint le combat : 6 PV, frappe 2. Riposte 2 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","cible",6]]],["invoque","Oie de garde",6,2],["riposte",2],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Une oie est arrivée de la ville par le chenal ; elle s'ébroue devant le feu et ne bouge plus.",
 "budget":"11 / 12,5 (−12 %)"},
{"id": "ANT203-plus-3", "zone": "ANT203", "pole": "+", "palier": 3, "nom": "La Femme et les enfants", "cout": 2, "cible": 0, "effet": "Le héros gagne 10 de garde ; le héros se soigne de 8. Une Mangouste des greniers rejoint le combat : 8 PV, frappe 4. Prix : défaussez 1 carte au hasard.", "ops": [["garde", "heros", 10], ["soin", "heros", 8], ["invoque", "Mangouste des greniers", 8, 4], ["prixDefausse", 1]], "tags": ["Antre", "Eau", "Pôle +", "Invocation", "Garde", "Soin", "Prix"], "ambiance": "Sa femme est arrivée avec les enfants, la mangouste et la marmite, et n'a rien demandé.", "budget": "23 / 24 (−4 %)"},
{"id":"ANT203-plus-4","zone":"ANT203","pole":"+","palier":4,"nom":"La Natte sur le seuil","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, 6 dégâts à tous les ennemis. Puis 10 dégâts à la cible ; riposte 5 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["deg","tous",6]]],["deg","cible",10],["riposte",5],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Riposte","Condition","Prix"],
 "ambiance":"Sur le seuil de roseaux, une natte neuve, tressée serrée ; on s'y essuie les pieds, même ici.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ANT203-plus-5","zone":"ANT203","pole":"+","palier":5,"nom":"Les Autres Bannis","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; le héros gagne 12 de garde ; le héros se soigne de 8 ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["garde","heros",12],["soin","heros",8],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Antre","Eau","Pôle +","Dégâts","Affaiblissement","Garde","Soin","Prix"],
 "ambiance":"D'autres bannis sont venus, avec leurs barques et leurs rancunes ; on leur a montré où couper les roseaux.",
 "budget":"32,6 / 32 (+2 %)"},
{"id":"ANT203-plus-6","zone":"ANT203","pole":"+","palier":6,"nom":"Le Pélican apprivoisé","cout":2,"cible":0,
 "effet":"Si la Garde du héros est levée, vos alliés gagnent 10 de garde. Un Pélican apprivoisé rejoint le combat : 14 PV, frappe 6. 3 coups de 4 au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["garde","allies",10]]],["invoque","Pélican apprivoisé",14,6],["deg","hasard",4,3],["ennemiGarde",1]],
 "tags":["Antre","Eau","Pôle +","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Le pélican pêche pour les enfants de la hutte, et garde pour lui le plus gros poisson.",
 "budget":"32 / 36 (−11 %)"},
{"id":"ANT203-plus7","zone":"ANT203","pole":"+","palier":7,"nom":"Le Feu qui ne s'éteint plus","cout":2,"cible":0,
 "effet":"Le feu ne s'éteint plus. Si votre Garde est levée, 8 à tous. Héros +16 de garde ; chaque ennemi −3 d'attaque ; 2 coups de 4 au hasard. Pose Braise. Si Sceau (consommée) : héros +12 de garde ; 4 coups de 5 au hasard. Prix : ennemis +1 de garde.",
 "ops":[["si","garde",[["deg","tous",8]]],["garde","heros",16],["affaiblit","tous",3],["deg","hasard",4,2],["pose","Braise"],["reveil","Sceau",true,[["garde","heros",12],["deg","hasard",5,4]]],["ennemiGarde",1]],
 "tags":["Antre","Eau","Forme ultime +7","Dégâts","Affaiblissement","Garde","Condition","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Le feu de la hutte ne s'éteint plus ; le percepteur l'a inscrit sur sa tablette, avec le reste.",
 "budget":"47,4 sans combo ; réveil +29,6 (62 %)"}
]
```

---

## 4. Yancheng-fei, la Ville aux Druses (ANT224) — Antre · Cité en ruines · Pierre · Chinoise impériale

Forme du récit : le chantier qui tourne autrement (récit, sans document). Recette du −7 : l'ordre (les remparts rebâtis, pleins, muets) ; du +7 : la démesure (les cristaux ferment les rues, la ville devient une géode).

**Pierre (−)** : le bloc d'épreuve → la tortue des stèles → le mortier de riz → la salamandre des fondations → le rempart plein → les druses murées → la Ville d'une seule pierre. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, garde du héros 4, bêtes 4, dégâts ciblés 4, affaiblissement 2, dégâts à tous 2 ; crochet « la cible a de la garde » sur 3 ; prix sur 7 cartes (garde ennemie 4, défausse 3).

**Cristal (+)** : la druse ouverte → le scorpion des druses → les doigts coupés → le lézard de verre → la cour qui en veut d'autres → les rues violettes → la Géode ouverte. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, marque 4, dégâts ciblés 4, bêtes 3, garde du héros 2 ; crochet « la cible prend son élan » sur 2 ; prix sur 6 cartes (PV 6).

```json
{"fiche":"ANT224","nom":"Yancheng-fei, la Ville aux Druses",
 "recit":"L'empereur ordonna de relever les remparts de Yancheng avec les pierres de la ville morte. L'inspecteur Lü Fengchun fit fendre un bloc pour en vérifier le grain : il était creux, et tapissé de cristaux violets. Il l'envoya à la cour. La cour en voulut d'autres. On fendit les blocs du rempart, puis ceux des maisons, puis ceux des tombes, et chacun cachait sa druse. Le mur ne fut jamais rebâti. Les cavaliers qu'il devait arrêter passèrent un jour, regardèrent les pierres ouvertes, et en emportèrent quelques-unes.",
 "pal":["Des remparts rebâtis bloc sur bloc, gris et pleins, sans une fente ; chaque druse a été murée, et la ville n'est plus qu'une pierre muette.","Les blocs fendus sont recollés au mortier de riz, les cristaux grattés au ciseau, et des maçons montent un mur gris où plus rien ne brille.","Une ville morte de pierre grise, des blocs ouverts comme des fruits sur le pavé, et dans chacun une druse violette qui luit au soleil bas.","Les druses débordent des blocs ouverts, des scorpions pâles y nichent, et les rues brillent de violet quand le soleil se couche.","Les cristaux ont poussé hors des pierres jusqu'à fermer les rues ; la ville entière est une géode ouverte au ciel, où l'on ne peut plus marcher."],
 "pm":"Pierre","pp":"Cristal"}
```

```json
[
{"id":"ANT224-moins-1","zone":"ANT224","pole":"-","palier":1,"nom":"Le Bloc d'épreuve","cout":1,"cible":0,
 "effet":"+1 mana de Pierre ; le héros gagne 6 de garde ; 3 coups de 1 au hasard. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Pierre",1],["garde","heros",6],["deg","hasard",1,3],["ennemiGarde",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Garde","Mana","Prix"],
 "ambiance":"Lü Fengchun frappe le bloc au maillet pour en éprouver le grain ; le son est plein, il signe.",
 "budget":"8,8 / 10 (−12 %)"},
{"id":"ANT224-moins-2","zone":"ANT224","pole":"-","palier":2,"nom":"La Tortue des stèles","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à la cible. Une Tortue des stèles rejoint le combat : 8 PV, frappe 3. +1 mana de Pierre. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["deg","cible",6]]],["invoque","Tortue des stèles",8,3],["mana","Pierre",1],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Mana","Condition","Prix"],
 "ambiance":"Elle porte une stèle sur le dos depuis si longtemps que la stèle a pris la forme de sa carapace.",
 "budget":"11,5 / 12,5 (−8 %)"},
{"id":"ANT224-moins-3","zone":"ANT224","pole":"-","palier":3,"nom":"Le Mortier de riz","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 10 dégâts à la cible. Puis +2 mana de Pierre ; le héros gagne 10 de garde ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",10]]],["mana","Pierre",2],["garde","heros",10],["affaiblit","cible",2],["ennemiGarde",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Garde","Mana","Condition","Prix"],
 "ambiance":"On colle les blocs au mortier de riz gluant ; les cristaux restent dedans, et personne ne les voit plus.",
 "budget":"23 / 24 (−4 %)"},
{"id":"ANT224-moins-4","zone":"ANT224","pole":"-","palier":4,"nom":"La Salamandre des fondations","cout":2,"cible":0,
 "effet":"Une Salamandre des fondations rejoint le combat : 12 PV, frappe 6. +2 mana de Pierre ; le héros gagne 10 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Salamandre des fondations",12,6],["mana","Pierre",2],["garde","heros",10],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Garde","Mana","Prix"],
 "ambiance":"Une salamandre noire vit dans les fondations ; quand on soulève une pierre, elle déménage sous la suivante.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT224-moins-5","zone":"ANT224","pole":"-","palier":5,"nom":"Le Rempart plein","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, 12 dégâts à la cible. +2 mana de Pierre. Un Lion de pierre des portes rejoint le combat : 14 PV, frappe 6. Riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["deg","cible",12]]],["mana","Pierre",2],["invoque","Lion de pierre des portes",14,6],["riposte",3],["ennemiGarde",1]],
 "tags":["Antre","Pierre","Pôle −","Invocation","Dégâts","Riposte","Mana","Condition","Prix"],
 "ambiance":"Un lion de pierre gardait la porte ; on l'a fendu aussi, et il était creux, comme le reste.",
 "budget":"32 / 32 (+0 %)"},
{"id":"ANT224-moins-6","zone":"ANT224","pole":"-","palier":6,"nom":"Les Druses murées","cout":2,"cible":1,
 "effet":"+2 mana de Pierre ; 5 dégâts à tous les ennemis ; l'attaque de chaque ennemi baisse de 2 ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Pierre",2],["deg","tous",5],["affaiblit","tous",2],["hesite","cible"],["prixDefausse",1]],
 "tags":["Antre","Pierre","Pôle −","Dégâts","Affaiblissement","Contrôle","Mana","Prix"],
 "ambiance":"Lü Fengchun fait murer les druses qu'on trouve encore : un rempart, dit-il, n'a pas à briller.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ANT224-moins7","zone":"ANT224","pole":"-","palier":7,"nom":"La Ville d'une seule pierre","cout":2,"cible":1,
 "effet":"La ville redevient une pierre. 10 à la cible ; +2 mana de Pierre ; une Tortue des remparts (18 PV, frappe 8) ; héros +16 de garde. Pose Sceau. Si Racine (consommée) : +2 mana de Pierre ; héros +12 de garde ; 6 à tous. Prix : ennemis +2 de garde.",
 "ops":[["deg","cible",10],["mana","Pierre",2],["invoque","Tortue des remparts",18,8],["garde","heros",16],["pose","Sceau"],["reveil","Racine",true,[["mana","Pierre",2],["garde","heros",12],["deg","tous",6]]],["ennemiGarde",2]],
 "tags":["Antre","Pierre","Forme ultime −7","Invocation","Dégâts","Garde","Mana","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"Les remparts sont rebâtis, gris et pleins ; plus rien ne brille, et l'empereur se déclare satisfait.",
 "budget":"45,8 sans combo ; réveil +28,8 (63 %)"},
{"id":"ANT224-plus-1","zone":"ANT224","pole":"+","palier":1,"nom":"La Druse ouverte","cout":1,"cible":1,
 "effet":"Riposte 3 jusqu'à votre prochain tour ; la cible est marquée : +1 par coup reçu ; le héros gagne 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["riposte",3],["vulnerable","cible",1],["garde","heros",4],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Marque","Riposte","Garde","Prix"],
 "ambiance":"Le bloc s'ouvre sous le coin comme un fruit mûr, et la lumière violette éclabousse les mains.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ANT224-plus-2","zone":"ANT224","pole":"+","palier":2,"nom":"Le Scorpion des druses","cout":1,"cible":0,
 "effet":"Un Scorpion des druses rejoint le combat : 6 PV, frappe 3. Riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["invoque","Scorpion des druses",6,3],["riposte",3],["prixPV",1]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Riposte","Prix"],
 "ambiance":"Le scorpion pâle vit entre les cristaux, et pique la main qui veut les arracher.",
 "budget":"12,5 / 12,5 (+0 %)"},
{"id":"ANT224-plus-3","zone":"ANT224","pole":"+","palier":3,"nom":"Les Doigts entaillés","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 12 dégâts à la cible. Puis riposte 6 jusqu'à votre prochain tour ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["si","elan",[["deg","cible",12]]],["riposte",6],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Marque","Riposte","Condition","Prix"],
 "ambiance":"Les carriers qui fendent les blocs ont les doigts entaillés ; le soir, ils les trempent dans le vin.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ANT224-plus-4","zone":"ANT224","pole":"+","palier":4,"nom":"Le Lézard de verre","cout":2,"cible":0,
 "effet":"Un Lézard de verre rejoint le combat : 10 PV, frappe 4. Riposte 6 jusqu'à votre prochain tour ; le héros se soigne de 5. Prix : le héros perd 2 PV.",
 "ops":[["invoque","Lézard de verre",10,4],["riposte",6],["soin","heros",5],["prixPV",2]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Riposte","Soin","Prix"],
 "ambiance":"Translucide, il dort sur les cristaux au soleil ; on ne le voit que lorsqu'il bouge.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ANT224-plus-5","zone":"ANT224","pole":"+","palier":5,"nom":"La Cour qui en veut d'autres","cout":2,"cible":1,
 "effet":"6 dégâts à la cible ; riposte 8 jusqu'à votre prochain tour ; tous les ennemis sont marqués : +2 par coup reçu. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",6],["riposte",8],["vulnerable","tous",2],["prixPV",3]],
 "tags":["Antre","Pierre","Pôle +","Dégâts","Marque","Riposte","Prix"],
 "ambiance":"Chaque convoi part chargé de druses vers la cour, et revient avec une commande plus longue.",
 "budget":"32,2 / 32 (+1 %)"},
{"id":"ANT224-plus-6","zone":"ANT224","pole":"+","palier":6,"nom":"Les Rues violettes","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, riposte 8 jusqu'à votre prochain tour. 10 dégâts à la cible. Un Grand Scorpion violet rejoint le combat : 16 PV, frappe 6.",
 "ops":[["si","elan",[["riposte",8]]],["deg","cible",10],["invoque","Grand Scorpion violet",16,6]],
 "tags":["Antre","Pierre","Pôle +","Invocation","Dégâts","Riposte","Condition"],
 "ambiance":"Au soleil couchant, toute la rue luit de violet, et l'on marche en regardant ses pieds.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ANT224-plus7","zone":"ANT224","pole":"+","palier":7,"nom":"La Géode ouverte","cout":2,"cible":1,
 "effet":"La ville devient une géode. 12 à la cible ; riposte 14 ; cible marquée (+3). Pose Abîme. Si Sceau (consommée) : riposte 8 ; 10 à la cible ; héros +6 de garde. Prix : héros −3 PV.",
 "ops":[["deg","cible",12],["riposte",14],["vulnerable","cible",3],["pose","Abîme"],["reveil","Sceau",true,[["riposte",8],["deg","cible",10],["garde","heros",6]]],["prixPV",3]],
 "tags":["Antre","Pierre","Forme ultime +7","Dégâts","Marque","Riposte","Garde","Combo","Pose Abîme","Réveil Sceau","Prix"],
 "ambiance":"Les cristaux ont fermé les rues ; on ne marche plus dans la ville, on la regarde depuis les collines.",
 "budget":"46 sans combo ; réveil +30,8 (67 %)"}
]
```

---

## 5. Dongmian Feng, le Pic des Dormants (ANT235) — Antre · Glacier · Glace · Chinoise impériale

Forme du récit : la vie de sainte corrigée par les faits. Recette du −7 : le silence (la grotte murée, plus de pèlerins) ; du +7 : le mouvement démesuré (le glacier rompu, tout ce qui dormait debout et affamé).

**Sommeil (−)** : la grotte de glace → l'ours contre la nonne → le givre sur les cils → les hérissons roulés → le sommeil partagé → les pèlerins transis → le Long Hiver. Pôle sans famille principale : sa colonne vertébrale est le prix en bêtes (6 cartes), qui meurent de froid contre les dormeurs, et le crochet « une de vos bêtes est en jeu » (4 cartes) qui en profite ; bêtes sur 4 cartes, brûlure du gel sur 4, soin du héros sur 4. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 4, brûlure 4, bêtes 4, dégâts ciblés 3, garde du héros 2, affaiblissement 2, garde des alliés 2 ; crochet « une de vos bêtes est en jeu » sur 4 ; prix sur 7 cartes (vos bêtes 6, PV 1).

**Éveil (+)** : le craquement → la marmotte qui siffle → la glace qui coule → le bharal des corniches → les traces fraîches → l'ours affamé → le Glacier rompu. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, bêtes 4, dégâts ciblés 4, dégâts à tous 3, coups au hasard 2, affaiblissement 2, marque 2 ; crochet « la cible prend son élan » sur 2 ; prix sur 7 cartes (garde ennemie 4, défausse 3).

*Note du critique (lot 7) : les marmottes du Sommeil deviennent des hérissons et un ourson (rongeurs au plafond : les marmottes restent à l'Éveil). Dans ANT203 +3, le chat devient une mangouste (félins au plafond).*

```json
{"fiche":"ANT235","nom":"Dongmian Feng, le Pic des Dormants",
 "recit":"Les pèlerins racontent que la nonne Jingxu passa un hiver entier en méditation dans une grotte du glacier, sans manger, réchauffée par un ours qui dormait contre elle. C'est vrai. Au printemps, l'ours se réveilla avant elle, et il avait faim. Les moines du monastère, en bas, ont gardé l'histoire jusqu'à la fin de l'hiver et l'ont arrêtée là. Ils vendent aux pèlerins des images de soie où la nonne dort contre l'ours. On n'a jamais peint le printemps.",
 "pal":["Tout dort sous la neige : la grotte est murée de glace bleue, l'ours et la nonne n'y sont plus que des ombres, et aucun pèlerin ne monte.","La neige ferme les sentiers, les marmottes ont bouché leurs terriers, et une fumée mince sort d'une grotte du glacier.","Un glacier sous un pic, une grotte creusée dans la glace bleue, des drapeaux de prière gelés raides, et en bas un monastère aux toits courbes.","La glace craque et coule, les torrents grondent, les bharals descendent des corniches, et des traces d'ours fraîches sortent de la grotte.","Le glacier se rompt et glisse en blocs énormes dans la vallée ; tout ce qui dormait est debout et affamé, et le monastère ferme ses portes."],
 "pm":"Sommeil","pp":"Éveil"}
```

```json
[
{"id":"ANT235-moins-1","zone":"ANT235","pole":"-","palier":1,"nom":"La Grotte de glace","cout":1,"cible":1,
 "effet":"Le héros se soigne de 6 ; la cible brûle : 2 par tour pendant 2 tours. Prix : le héros perd 1 PV.",
 "ops":[["soin","heros",6],["brulure","cible",2,2],["prixPV",1]],
 "tags":["Antre","Glace","Pôle −","Brûlure","Soin","Prix"],
 "ambiance":"La grotte est si froide que le souffle y gèle ; Jingxu s'y assied et ferme les yeux.",
 "budget":"9 / 10 (−10 %)"},
{"id":"ANT235-moins-2","zone":"ANT235","pole":"-","palier":2,"nom":"L'Ours contre la nonne","cout":1,"cible":0,
 "effet":"Si une de vos bêtes est en jeu, le héros gagne 6 de garde. Un Ours brun du glacier rejoint le combat : 8 PV, frappe 2. Le héros gagne 4 de garde. Prix : votre bête la plus faible perd 1 PV.",
 "ops":[["si","bete",[["garde","heros",6]]],["invoque","Ours brun du glacier",8,2],["garde","heros",4],["prixBete",1]],
 "tags":["Antre","Glace","Pôle −","Invocation","Garde","Condition","Prix"],
 "ambiance":"L'ours est entré dans la grotte pour dormir ; il a trouvé la nonne, et s'est couché contre elle.",
 "budget":"11,6 / 12,5 (−7 %)"},
{"id":"ANT235-moins-3","zone":"ANT235","pole":"-","palier":3,"nom":"Le Givre sur les cils","cout":2,"cible":1,
 "effet":"La cible brûle : 3 par tour pendant 3 tours ; le héros se soigne de 8 ; riposte 2 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 1. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["brulure","cible",3,3],["soin","heros",8],["riposte",2],["affaiblit","cible",1],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Brûlure","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"Au matin, le givre a collé ses cils ; Jingxu ne les ouvre pas, pour ne pas les arracher.",
 "budget":"22 / 24 (−8 %)"},
{"id": "ANT235-moins-4", "zone": "ANT235", "pole": "-", "palier": 4, "nom": "Les Hérissons roulés", "cout": 2, "cible": 1, "effet": "Si une de vos bêtes est en jeu, 10 dégâts à la cible. Un Hérisson du col rejoint le combat : 10 PV, frappe 3. La cible brûle : 3 par tour pendant 3 tours ; le héros se soigne de 6. Prix : votre bête la plus faible perd 2 PV.", "ops": [["si", "bete", [["deg", "cible", 10]]], ["invoque", "Hérisson du col", 10, 3], ["brulure", "cible", 3, 3], ["soin", "heros", 6], ["prixBete", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Dégâts", "Brûlure", "Soin", "Condition", "Prix"], "ambiance": "Les hérissons se sont roulés sous le foin des terriers vides ; ils dorment, et le col est muet.", "budget": "27,5 / 28 (−2 %)"},
{"id":"ANT235-moins-5","zone":"ANT235","pole":"-","palier":5,"nom":"Le Sommeil partagé","cout":2,"cible":1,
 "effet":"Si une de vos bêtes est en jeu, vos alliés gagnent 10 de garde. 10 dégâts à la cible. Une Ourse et ses petits rejoint le combat : 14 PV, frappe 6. Prix : votre bête la plus faible perd 3 PV.",
 "ops":[["si","bete",[["garde","allies",10]]],["deg","cible",10],["invoque","Ourse et ses petits",14,6],["prixBete",3]],
 "tags":["Antre","Glace","Pôle −","Invocation","Dégâts","Garde","Condition","Prix"],
 "ambiance":"Une ourse et ses petits dorment au fond de la grotte, et la nonne respire à leur rythme.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ANT235-moins-6","zone":"ANT235","pole":"-","palier":6,"nom":"Les Pèlerins transis","cout":2,"cible":0,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours ; l'attaque de chaque ennemi baisse de 2 ; le héros gagne 10 de garde. Prix : votre bête la plus faible perd 2 PV.",
 "ops":[["brulure","tous",2,3],["affaiblit","tous",2],["garde","heros",10],["prixBete",2]],
 "tags":["Antre","Glace","Pôle −","Brûlure","Affaiblissement","Garde","Prix"],
 "ambiance":"Les pèlerins montent voir la grotte en plein hiver ; on redescend sur des brancards ceux qui se sont assis.",
 "budget":"32,4 / 36 (−10 %)"},
{"id": "ANT235-moins7", "zone": "ANT235", "pole": "-", "palier": 7, "nom": "Le Long Hiver", "cout": 2, "cible": 1, "effet": "On dort sous la glace. Si une bête est là, alliés +12 de garde. 18 à la cible ; un Ours-roi du pic (20 PV, frappe 9). Pose Givre. Si Braise (consommée) : un Ourson des neiges (12 PV, frappe 6) ; soin du héros 14. Prix : bête la plus faible −3 PV.", "ops": [["si", "bete", [["garde", "allies", 12]]], ["deg", "cible", 18], ["invoque", "Ours-roi du pic", 20, 9], ["pose", "Givre"], ["reveil", "Braise", true, [["invoque", "Ourson des neiges", 12, 6], ["soin", "heros", 14]]], ["prixBete", 3]], "tags": ["Antre", "Glace", "Forme ultime −7", "Invocation", "Dégâts", "Garde", "Soin", "Condition", "Combo", "Pose Givre", "Réveil Braise", "Prix"], "ambiance": "La grotte est murée de glace bleue ; dedans, des ombres qui dorment, et dehors, plus de pèlerins.", "budget": "45,7 sans combo ; réveil +29 (63 %)"},
{"id":"ANT235-plus-1","zone":"ANT235","pole":"+","palier":1,"nom":"Le Craquement","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 2 coups de 3 au hasard ; l'attaque de la cible baisse de 1. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["briseGarde","cible"],["deg","hasard",3,2],["affaiblit","cible",1],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Affaiblissement","Perce-garde","Prix"],
 "ambiance":"Un craquement traverse le glacier dans la nuit ; au monastère, les moines se regardent sans parler.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ANT235-plus-2","zone":"ANT235","pole":"+","palier":2,"nom":"La Marmotte qui siffle","cout":1,"cible":0,
 "effet":"Une Marmotte siffleuse rejoint le combat : 6 PV, frappe 2. Ces coups ignorent la garde ; 2 coups de 3 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["invoque","Marmotte siffleuse",6,2],["ignoreGarde"],["deg","hasard",3,2],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"La marmotte sort avant les autres et siffle ; tout le versant se réveille à son cri.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ANT235-plus-3","zone":"ANT235","pole":"+","palier":3,"nom":"La Glace qui coule","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, 10 dégâts à la cible. Puis toute garde ennemie tombe à 0 ; 4 dégâts à tous les ennemis ; la cible est marquée : +2 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["deg","cible",10]]],["briseGarde","tous"],["deg","tous",4],["vulnerable","cible",2],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Perce-garde","Condition","Prix"],
 "ambiance":"Le glacier se met à couler en torrents bruns, et emporte les drapeaux de prière gelés.",
 "budget":"24,4 / 24 (+2 %)"},
{"id":"ANT235-plus-4","zone":"ANT235","pole":"+","palier":4,"nom":"Le Bharal des corniches","cout":2,"cible":1,
 "effet":"12 dégâts à la cible. Un Bharal des corniches rejoint le combat : 12 PV, frappe 5. La garde de la cible tombe à 0. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",12],["invoque","Bharal des corniches",12,5],["briseGarde","cible"],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"Les bharals descendent des corniches avant l'herbe, et lèchent la neige fondante en attendant qu'elle verdisse.",
 "budget":"25,5 / 28 (−9 %)"},
{"id":"ANT235-plus-5","zone":"ANT235","pole":"+","palier":5,"nom":"Les Traces fraîches","cout":2,"cible":1,
 "effet":"Si la cible prend son élan, la garde de la cible tombe à 0. Puis 16 dégâts à la cible ; ces coups ignorent la garde ; la cible est marquée : +4 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","elan",[["briseGarde","cible"]]],["deg","cible",16],["ignoreGarde"],["vulnerable","cible",4],["ennemiGarde",1]],
 "tags":["Antre","Glace","Pôle +","Dégâts","Marque","Perce-garde","Condition","Prix"],
 "ambiance":"Des traces d'ours fraîches sortent de la grotte et descendent tout droit vers le monastère.",
 "budget":"30,5 / 32 (−5 %)"},
{"id":"ANT235-plus-6","zone":"ANT235","pole":"+","palier":6,"nom":"L'Ours affamé","cout":2,"cible":0,
 "effet":"Toute garde ennemie tombe à 0 ; 6 dégâts à tous les ennemis. Un Ours affamé rejoint le combat : 14 PV, frappe 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["briseGarde","tous"],["deg","tous",6],["invoque","Ours affamé",14,6],["prixDefausse",1]],
 "tags":["Antre","Glace","Pôle +","Invocation","Dégâts","Perce-garde","Prix"],
 "ambiance":"L'ours s'est réveillé avant la nonne, maigre et furieux ; c'est la scène qu'on ne peint pas.",
 "budget":"32,8 / 36 (−9 %)"},
{"id":"ANT235-plus7","zone":"ANT235","pole":"+","palier":7,"nom":"Le Glacier rompu","cout":2,"cible":1,
 "effet":"Le glacier se rompt. 14 à la cible ; toute garde ennemie à 0 ; un Ours-tonnerre du glacier (18 PV, frappe 8) ; cible −2 d'attaque. Pose Sang. Si Givre (consommée) : les coups ignorent la garde ; 6 à tous ; 12 à la cible. Prix : ennemis +1 de garde.",
 "ops":[["deg","cible",14],["briseGarde","tous"],["invoque","Ours-tonnerre du glacier",18,8],["affaiblit","cible",2],["pose","Sang"],["reveil","Givre",true,[["ignoreGarde"],["deg","tous",6],["deg","cible",12]]],["ennemiGarde",1]],
 "tags":["Antre","Glace","Forme ultime +7","Invocation","Dégâts","Affaiblissement","Perce-garde","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Des blocs grands comme des temples glissent dans la vallée ; tout ce qui dormait est debout, et a faim.",
 "budget":"45,6 sans combo ; réveil +28,2 (62 %)"}
]
```

---

## 6. La Douma de Pustogorod (ASS077) — Assemblée · Cité en ruines · Pierre · Slave

Forme du récit : document, la charte (gramota sur écorce de bouleau), citée puis racontée. Recette du −7 : l'ordre (les ruines déblayées en rangs, une seule voix) ; du +7 : la foule (la place pleine, chacun parle, personne ne lit plus).

**Tyrannie (−)** : le sceau du prince → la grille du puits → le boyard en manteau → les gardes sur la place → l'écorce saisie → la douma réunie → la Place rangée. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, affaiblissement 4, dégâts ciblés 4, pioche 3, hésitation 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 2 ; prix sur 6 cartes (défausse 6).

**Liberté (+)** : le seau remonté → le registre au brasero → le droit de fermer les portes → le maire élu → les fours de la boulangerie → le dimanche sur la place → la Place pleine. Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 7, riposte 4, dégâts ciblés 4, soin du héros 2 ; crochet « il ne reste qu'un ennemi » sur 2 ; prix sur 7 cartes (PV 6, exil 1).

```json
{"fiche":"ASS077","nom":"La Douma de Pustogorod",
 "recit":"« Par cette gramota, la douma des boyards accorde aux gens de Pustogorod le droit d'élire leur maire, de lever leurs taxes et de fermer leurs portes à qui leur plaît. » La charte, sur écorce de bouleau, fut accordée l'année où le prince brûla la ville. On la cacha dans le puits, où le feu ne l'atteignit pas. Chaque printemps, Gorislava la remonte et la lit tout haut au milieu des murs écroulés, puis la redescend. Personne n'a jamais contesté aucun de ces droits.",
 "pal":["Les ruines sont déblayées en rangs, les portes refaites et gardées, et une seule voix lit des ordres au milieu de la place vide.","Des gardes du prince campent dans les ruines, les pierres sont marquées à son sceau, et le puits est fermé d'une grille.","Une ville écroulée de brique noircie, une église sans coupole, un puits au milieu de la place, et une femme qui y descend une corde.","Des cabanes de rondins s'adossent aux murs, on cuit le pain dans les fours de l'ancienne boulangerie, et la place se remplit le dimanche.","La place est pleine à craquer, chacun parle à la fois, des registres flambent dans un brasero, et personne ne lit plus la charte."],
 "pm":"Tyrannie","pp":"Liberté"}
```

```json
[
{"id":"ASS077-moins-1","zone":"ASS077","pole":"-","palier":1,"nom":"Le Sceau du prince","cout":1,"cible":1,
 "effet":"Loi : le héros gagne 8 de garde ; l'attaque de la cible baisse de 1 ; piochez 1 carte. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",8],["affaiblit","cible",1],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Affaiblissement","Garde","Pioche","Prix"],
 "ambiance":"Chaque pierre de la ville porte maintenant le sceau du prince, gravé petit, dans un coin.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ASS077-moins-2","zone":"ASS077","pole":"-","palier":2,"nom":"La Grille du puits","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, piochez 1 carte. Puis le héros gagne 10 de garde ; la cible hésite. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["pioche",1]]],["garde","heros",10],["hesite","cible"],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Contrôle","Garde","Pioche","Condition","Prix"],
 "ambiance":"Le prince a fait griller le puits ; il dit que c'est pour éviter qu'on y tombe.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS077-moins-3","zone":"ASS077","pole":"-","palier":3,"nom":"Le Boyard en manteau","cout":2,"cible":0,
 "effet":"Loi : le héros gagne 14 de garde ; l'attaque de chaque ennemi baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",14],["affaiblit","tous",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Affaiblissement","Garde","Prix"],
 "ambiance":"Le boyard porte son manteau de martre même en été, et ne s'assied que sur sa propre chaise.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"ASS077-moins-4","zone":"ASS077","pole":"-","palier":4,"nom":"Les Gardes sur la place","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros gagne 12 de garde ; piochez 2 cartes. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",10],["garde","heros",12],["pioche",2],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Garde","Pioche","Prix"],
 "ambiance":"Les gardes du prince campent sur la place et allument leur feu contre le mur de l'église.",
 "budget":"24,6 / 28 (−12 %)"},
{"id":"ASS077-moins-5","zone":"ASS077","pole":"-","palier":5,"nom":"L'Écorce saisie","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, le héros gagne 10 de garde. Puis 10 dégâts à la cible ; le héros gagne 12 de garde ; l'attaque de la cible baisse de 3. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["garde","heros",10]]],["deg","cible",10],["garde","heros",12],["affaiblit","cible",3],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Loi","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Le prince a voulu saisir la charte ; on lui a remis une écorce de bouleau, et elle était vierge.",
 "budget":"29,6 / 32 (−7 %)"},
{"id":"ASS077-moins-6","zone":"ASS077","pole":"-","palier":6,"nom":"La Douma réunie","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros gagne 16 de garde ; tous les ennemis hésitent.",
 "ops":[["deg","cible",10],["garde","heros",16],["hesite","tous"]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts","Contrôle","Garde"],
 "ambiance":"La douma se réunit sur des bancs de pierre ; les boyards votent, et le prince compte les voix.",
 "budget":"31,8 / 36 (−12 %)"},
{"id":"ASS077-moins7","zone":"ASS077","pole":"-","palier":7,"nom":"La Place rangée","cout":2,"cible":1,
 "effet":"Une seule voix parle. 14 à la cible ; héros +20 de garde ; chaque ennemi −3 d'attaque. Pose Racine. Si Sang (consommée) : héros +12 de garde ; cible −2 d'attaque ; 16 à la cible. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",14],["garde","heros",20],["affaiblit","tous",3],["pose","Racine"],["reveil","Sang",true,[["garde","heros",12],["affaiblit","cible",2],["deg","cible",16]]],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Dégâts","Affaiblissement","Garde","Combo","Pose Racine","Réveil Sang","Prix"],
 "ambiance":"Les ruines sont déblayées en rangs, les portes gardées, et une seule voix lit les ordres sur la place vide.",
 "budget":"46,8 sans combo ; réveil +31,6 (68 %)"},
{"id":"ASS077-plus-1","zone":"ASS077","pole":"+","palier":1,"nom":"Le Seau remonté","cout":1,"cible":1,
 "effet":"Loi : la cible brûle : 2 par tour pendant 3 tours ; riposte 2 jusqu'à votre prochain tour ; le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["brulure","cible",2,3],["riposte",2],["soin","heros",3],["exil"]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Brûlure","Riposte","Soin","Exil","Prix"],
 "ambiance":"Gorislava remonte l'écorce du puits au printemps, la sèche contre sa poitrine, et la déroule sans trembler.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS077-plus-2","zone":"ASS077","pole":"+","palier":2,"nom":"Le Registre au brasero","cout":1,"cible":0,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 2 tours ; le héros gagne 4 de garde. Prix : le héros perd 1 PV.",
 "ops":[["brulure","tous",2,2],["garde","heros",4],["prixPV",1]],
 "tags":["Assemblée","Pierre","Pôle +","Brûlure","Garde","Prix"],
 "ambiance":"Le registre des corvées brûle mal : le parchemin se tord, noircit, et refuse longtemps de flamber.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS077-plus-3","zone":"ASS077","pole":"+","palier":3,"nom":"Le Droit de fermer les portes","cout":2,"cible":1,
 "effet":"Loi : s'il ne reste qu'un ennemi, 10 dégâts à la cible. Riposte 5 jusqu'à votre prochain tour ; la cible brûle : 3 par tour pendant 3 tours. Prix : le héros perd 2 PV.",
 "ops":[["si","seul",[["deg","cible",10]]],["riposte",5],["brulure","cible",3,3],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Brûlure","Riposte","Condition","Prix"],
 "ambiance":"La charte permet de fermer les portes à qui l'on veut ; les portes ont brûlé, le droit tient.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS077-plus-4","zone":"ASS077","pole":"+","palier":4,"nom":"Le Maire élu","cout":2,"cible":1,
 "effet":"La cible brûle : 4 par tour pendant 3 tours ; le héros se soigne de 10 ; la cible est marquée : +3 par coup reçu. Prix : le héros perd 3 PV.",
 "ops":[["brulure","cible",4,3],["soin","heros",10],["vulnerable","cible",3],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle +","Brûlure","Marque","Soin","Prix"],
 "ambiance":"On élit un maire chaque printemps parmi les ruines ; c'est toujours Gorislava, faute d'autres candidats.",
 "budget":"28 / 28 (+0 %)"},
{"id":"ASS077-plus-5","zone":"ASS077","pole":"+","palier":5,"nom":"Les Fours de la boulangerie","cout":2,"cible":1,
 "effet":"Loi : 8 dégâts à la cible ; tous les ennemis brûlent : 2 par tour pendant 3 tours ; riposte 6 jusqu'à votre prochain tour. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",8],["brulure","tous",2,3],["riposte",6],["prixPV",2]],
 "tags":["Assemblée","Pierre","Pôle +","Loi","Dégâts","Brûlure","Riposte","Prix"],
 "ambiance":"On cuit le pain dans les fours de la vieille boulangerie ; la croûte garde le goût de la suie.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"ASS077-plus-6","zone":"ASS077","pole":"+","palier":6,"nom":"Le Dimanche sur la place","cout":2,"cible":1,
 "effet":"S'il ne reste qu'un ennemi, la cible brûle : 4 par tour pendant 3 tours. 14 dégâts à la cible ; la cible brûle : 3 par tour pendant 3 tours ; l'attaque de la cible baisse de 3. Prix : le héros perd 3 PV.",
 "ops":[["si","seul",[["brulure","cible",4,3]]],["deg","cible",14],["brulure","cible",3,3],["affaiblit","cible",3],["prixPV",3]],
 "tags":["Assemblée","Pierre","Pôle +","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"Le dimanche, la place se remplit ; chacun a son avis, et personne n'a le temps d'écouter les autres.",
 "budget":"35 / 36 (−3 %)"},
{"id":"ASS077-plus7","zone":"ASS077","pole":"+","palier":7,"nom":"La Place pleine","cout":2,"cible":1,
 "effet":"Tout le monde parle. 12 à la cible ; tous brûlent (3 par tour, 3 tours) ; riposte 8. Pose Braise. Si Abîme (consommée) : la cible brûle (4 par tour, 4 tours) ; 14 à la cible. Prix : héros −2 PV.",
 "ops":[["deg","cible",12],["brulure","tous",3,3],["riposte",8],["pose","Braise"],["reveil","Abîme",true,[["brulure","cible",4,4],["deg","cible",14]]],["prixPV",2]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Dégâts","Brûlure","Riposte","Combo","Pose Braise","Réveil Abîme","Prix"],
 "ambiance":"Les registres flambent dans un brasero, chacun parle à la fois, et la charte reste au fond du puits.",
 "budget":"45,8 sans combo ; réveil +30 (66 %)"}
]
```

---

## 7. Le Khwabkhana de Dudpahar (ASS003) — Assemblée · Volcan · Feu · Moghole

Forme du récit : document, le registre des songes (une entrée citée, puis l'histoire du registre). Recette du −7 : la démesure (le volcan crache, le registre brûle, tous les dormeurs crient) ; du +7 : l'ordre (la cour dort en rangs et rêve le même cheval blanc).

**Cauchemar (−)** : le songe rayé → le palefrenier qui crie → la page brûlée → les dormeurs agités → l'offrande du rêveur → le songe de feu → le Registre en feu. Comptes au script (cartes sur 7, `si` et réveil compris) : exil 7, dégâts ciblés 4, hésitation 4, dégâts à tous 3, marque 2, garde du héros 2, brûlure 2, riposte 2, soin du héros 2, affaiblissement 2 ; crochet « la cible hésite déjà » sur 2 ; prix sur 7 cartes (exil 7, PV 2).

**Rêve (+)** : le cheval blanc → la mousseline → le beau songe noté → les offrandes empilées → le songe du prince → la cour endormie → le Même Songe pour tous. Comptes au script (cartes sur 7, `si` et réveil compris) : mana 7, soin du héros 4, pioche 4, dégâts ciblés 3, garde du héros 2, garde des alliés 2 ; crochet « une carte a déjà été défaussée en prix ce tour » sur 2 ; prix sur 7 cartes (garde ennemie 4, défausse 3).

```json
{"fiche":"ASS003","nom":"Le Khwabkhana de Dudpahar",
 "recit":"« Nuit de jeudi. Le prince Nasrullah a rêvé d'un cheval blanc qui montait la montagne : présage favorable. » Ainsi commencent les pages du registre que tient Mirza Nauroz au Khwabkhana, la Maison des songes, sur le flanc du volcan. Les mauvais songes y étaient rayés d'un trait, et le rêveur payait une offrande. Les courtisans apprirent vite à ne rêver que de chevaux blancs. Le seul songe de feu du registre, celui d'un palefrenier, est rayé d'un trait propre, à la date de la veille de l'éruption.",
 "pal":["Le volcan crache sur la Maison des songes, les pages du registre s'envolent en flammes, et tous les dormeurs du palais crient le même cri.","Des dormeurs agités sur les terrasses, des pages raturées qui brûlent dans les braseros, et une fumée rouge qui grossit au sommet.","Un pavillon de grès rouge au flanc du volcan, des lits de repos sur les terrasses, un scribe à son pupitre, et une fumée mince au sommet.","Les courtisans dorment sous des voiles de mousseline, le registre s'épaissit de beaux songes, et les offrandes s'empilent devant le pupitre.","Toute la cour dort en rangs sur les terrasses et rêve le même cheval blanc ; le scribe n'a plus qu'à recopier la page de la veille."],
 "pm":"Cauchemar","pp":"Rêve"}
```

```json
[
{"id":"ASS003-moins-1","zone":"ASS003","pole":"-","palier":1,"nom":"Le Songe rayé","cout":1,"cible":1,
 "effet":"Loi : 5 dégâts à la cible ; la cible hésite ; la cible est marquée : +1 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","cible",5],["hesite","cible"],["vulnerable","cible",1],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Marque","Contrôle","Exil","Prix"],
 "ambiance":"Mirza Nauroz raye le mauvais songe d'un trait net, sans lever la plume, et le rêveur paie.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS003-moins-2","zone":"ASS003","pole":"-","palier":2,"nom":"Le Palefrenier qui crie","cout":1,"cible":1,
 "effet":"Si la cible hésite déjà, la cible brûle : 2 par tour pendant 3 tours. Puis riposte 4 jusqu'à votre prochain tour ; le héros gagne 4 de garde. Prix : cette carte s'exile.",
 "ops":[["si","hesiteAvant",[["brulure","cible",2,3]]],["riposte",4],["garde","heros",4],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Brûlure","Riposte","Garde","Condition","Exil","Prix"],
 "ambiance":"Le palefrenier crie dans son sommeil, toutes les nuits, et réveille les chevaux du prince.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ASS003-moins-3","zone":"ASS003","pole":"-","palier":3,"nom":"La Page brûlée","cout":2,"cible":1,
 "effet":"Loi : 5 dégâts à tous les ennemis ; la cible hésite ; le héros se soigne de 6 ; la cible est marquée : +2 par coup reçu. Prix : cette carte s'exile.",
 "ops":[["deg","tous",5],["hesite","cible"],["soin","heros",6],["vulnerable","cible",2],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Marque","Contrôle","Soin","Exil","Prix"],
 "ambiance":"Les pages raturées finissent au brasero ; la fumée a, dit-on, l'odeur du songe qu'elles portaient.",
 "budget":"25 / 24 (+4 %)"},
{"id":"ASS003-moins-4","zone":"ASS003","pole":"-","palier":4,"nom":"Les Dormeurs agités","cout":2,"cible":1,
 "effet":"14 dégâts à la cible ; la cible hésite ; riposte 3 jusqu'à votre prochain tour ; le héros se soigne de 4. Prix : cette carte s'exile.",
 "ops":[["deg","cible",14],["hesite","cible"],["riposte",3],["soin","heros",4],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Contrôle","Riposte","Soin","Exil","Prix"],
 "ambiance":"Sur les terrasses, les courtisans se retournent sous la mousseline et serrent les poings sans se réveiller.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS003-moins-5","zone":"ASS003","pole":"-","palier":5,"nom":"L'Offrande du rêveur","cout":2,"cible":1,
 "effet":"Loi : si la cible hésite déjà, 10 dégâts à la cible. Puis 18 dégâts à la cible ; la cible brûle : 3 par tour pendant 3 tours. Prix : cette carte s'exile ; le héros perd 1 PV.",
 "ops":[["si","hesiteAvant",[["deg","cible",10]]],["deg","cible",18],["brulure","cible",3,3],["exil"],["prixPV",1]],
 "tags":["Assemblée","Feu","Pôle −","Loi","Dégâts","Brûlure","Condition","Exil","Prix"],
 "ambiance":"Pour un songe rayé, le rêveur offre un plat d'argent ; pour un songe noté, il n'offre rien.",
 "budget":"28 / 32 (−12 %)"},
{"id":"ASS003-moins-6","zone":"ASS003","pole":"-","palier":6,"nom":"Le Songe de feu","cout":2,"cible":1,
 "effet":"6 dégâts à tous les ennemis ; l'attaque de la cible baisse de 3 ; le héros gagne 10 de garde ; piochez 2 cartes. Prix : cette carte s'exile.",
 "ops":[["deg","tous",6],["affaiblit","cible",3],["garde","heros",10],["pioche",2],["exil"]],
 "tags":["Assemblée","Feu","Pôle −","Dégâts","Affaiblissement","Garde","Pioche","Exil","Prix"],
 "ambiance":"Le palefrenier a rêvé de feu ; Mirza Nauroz a rayé le songe proprement, la veille de l'éruption.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ASS003-moins7","zone":"ASS003","pole":"-","palier":7,"nom":"Le Registre en feu","cout":2,"cible":1,
 "effet":"Le registre brûle. 14 à la cible ; tous hésitent ; 8 à tous ; cible −3 d'attaque. Pose Braise. Si Givre (consommée) : 12 à la cible ; la cible hésite ; 4 coups de 3 au hasard. Prix : cette carte s'exile ; héros −1 PV.",
 "ops":[["deg","cible",14],["hesite","tous"],["deg","tous",8],["affaiblit","cible",3],["pose","Braise"],["reveil","Givre",true,[["deg","cible",12],["hesite","cible"],["deg","hasard",3,4]]],["exil"],["prixPV",1]],
 "tags":["Assemblée","Feu","Forme ultime −7","Dégâts","Affaiblissement","Contrôle","Exil","Combo","Pose Braise","Réveil Givre","Prix"],
 "ambiance":"La Maison des songes brûle avec son registre, et les dormeurs du palais crient ensemble.",
 "budget":"45,6 sans combo ; réveil +29 (64 %)"},
{"id":"ASS003-plus-1","zone":"ASS003","pole":"+","palier":1,"nom":"Le Cheval blanc","cout":1,"cible":0,
 "effet":"Loi : +1 mana de Feu ; piochez 1 carte ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Feu",1],["pioche",1],["soin","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Soin","Pioche","Mana","Prix"],
 "ambiance":"Un cheval blanc monte la montagne : présage favorable, note Mirza Nauroz, les yeux sur sa page.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS003-plus-2","zone":"ASS003","pole":"+","palier":2,"nom":"La Mousseline","cout":1,"cible":1,
 "effet":"Si une carte a déjà été défaussée en prix ce tour, +1 mana de Feu. Puis 8 dégâts à la cible ; riposte 3 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","defausseAPrix",[["mana","Feu",1]]],["deg","cible",8],["riposte",3],["ennemiGarde",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Riposte","Mana","Condition","Prix"],
 "ambiance":"On dort sous des voiles de mousseline si fins qu'on croit voir au travers les songes du voisin.",
 "budget":"13,5 / 12,5 (+8 %)"},
{"id":"ASS003-plus-3","zone":"ASS003","pole":"+","palier":3,"nom":"Le Beau Songe noté","cout":2,"cible":0,
 "effet":"Loi : +2 mana de Feu ; piochez 2 cartes ; le héros se soigne de 8 ; le héros gagne 8 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["mana","Feu",2],["pioche",2],["soin","heros",8],["garde","heros",8],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Garde","Soin","Pioche","Mana","Prix"],
 "ambiance":"Le registre s'épaissit de beaux songes ; Mirza Nauroz a dû faire relier un nouveau volume.",
 "budget":"25,4 / 24 (+6 %)"},
{"id":"ASS003-plus-4","zone":"ASS003","pole":"+","palier":4,"nom":"Les Offrandes empilées","cout":2,"cible":1,
 "effet":"+2 mana de Feu ; vos alliés gagnent 14 de garde ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Feu",2],["garde","allies",14],["affaiblit","cible",2],["ennemiGarde",1]],
 "tags":["Assemblée","Feu","Pôle +","Affaiblissement","Garde","Mana","Prix"],
 "ambiance":"Les offrandes s'empilent devant le pupitre : on paie pour faire noter son rêve avant celui des autres.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"ASS003-plus-5","zone":"ASS003","pole":"+","palier":5,"nom":"Le Songe du prince","cout":2,"cible":1,
 "effet":"Loi : si une carte a déjà été défaussée en prix ce tour, piochez 2 cartes. Puis 12 dégâts à la cible ; +2 mana de Feu ; le héros se soigne de 10. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","defausseAPrix",[["pioche",2]]],["deg","cible",12],["mana","Feu",2],["soin","heros",10],["prixDefausse",1]],
 "tags":["Assemblée","Feu","Pôle +","Loi","Dégâts","Soin","Pioche","Mana","Condition","Prix"],
 "ambiance":"Le prince Nasrullah raconte son rêve à la cour ; la cour l'avait rêvé aussi, la même nuit.",
 "budget":"29 / 32 (−9 %)"},
{"id":"ASS003-plus-6","zone":"ASS003","pole":"+","palier":6,"nom":"La Cour endormie","cout":2,"cible":1,
 "effet":"+2 mana de Feu ; 5 dégâts à tous les ennemis ; vos alliés gagnent 8 de garde ; la cible est marquée : +3 par coup reçu. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["mana","Feu",2],["deg","tous",5],["garde","allies",8],["vulnerable","cible",3],["ennemiGarde",1]],
 "tags":["Assemblée","Feu","Pôle +","Dégâts","Marque","Garde","Mana","Prix"],
 "ambiance":"Toute la cour dort l'après-midi pour rêver davantage ; les affaires attendent le soir.",
 "budget":"33,6 / 36 (−7 %)"},
{"id":"ASS003-plus7","zone":"ASS003","pole":"+","palier":7,"nom":"Le Même Songe pour tous","cout":2,"cible":1,
 "effet":"Toute la cour rêve pareil. 14 à la cible ; +2 mana de Feu ; soin du héros 14 ; piochez 1 ; héros +16 de garde. Pose Sceau. Si Racine (consommée) : +2 mana de Feu ; soin du héros 10 ; 14 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["deg","cible",14],["mana","Feu",2],["soin","heros",14],["pioche",1],["garde","heros",16],["pose","Sceau"],["reveil","Racine",true,[["mana","Feu",2],["soin","heros",10],["deg","cible",14]]],["ennemiGarde",2]],
 "tags":["Assemblée","Feu","Forme ultime +7","Dégâts","Garde","Soin","Pioche","Mana","Combo","Pose Sceau","Réveil Racine","Prix"],
 "ambiance":"La cour dort en rangs sur les terrasses ; le scribe recopie chaque matin la page de la veille.",
 "budget":"46,8 sans combo ; réveil +30 (64 %)"}
]
```

---

## 8. La Junta d'Escarchavega (ASS165) — Assemblée · Toundra · Glace · Andalouse

Forme du récit : le portrait d'une présidente. Recette du −7 : la ruine (la place effondrée dans un lac noir) ; du +7 : la foule (la bourgade entière dehors, muette, la tête levée).

**Abysse (−)** : le sol qui cède → les piquets autour du trou → la Fuente → les rondins qui penchent → la junta au bord → l'eau sans fond → la Place engloutie. Comptes au script (cartes sur 7, `si` et réveil compris) : garde des alliés 7, affaiblissement 4, dégâts ciblés 4, garde du héros 2 ; crochet « la cible a de la garde » sur 2 ; prix sur 7 cartes (garde ennemie 4, PV 3).

**Ciel (+)** : les lueurs vertes → la mantille → la tête levée → les oies du dégel → la langue du ciel → la nuit dehors → le Ciel en feu. Comptes au script (cartes sur 7, `si` et réveil compris) : soin du héros 7, mana 4, riposte 4, dégâts ciblés 3, exil 2, dégâts à tous 2 ; crochet « la cible vole par-dessus » sur 3 ; prix sur 7 cartes (soin ennemi 4, exil 2, PV 1).

```json
{"fiche":"ASS165","nom":"La Junta d'Escarchavega",
 "recit":"Doña Leonor préside la junta d'Escarchavega depuis que les hommes sont partis chercher l'or plus au nord. Elle porte la mantille par-dessus les pelisses. Quand le sol dégela et qu'un trou d'eau noire s'ouvrit au milieu de la place, elle décida qu'on bâtirait autour, et le baptisa la Fuente. Elle ne le regarde jamais. Elle regarde le ciel, où passent des lueurs vertes, et dit que Dieu y écrit dans une langue qu'il n'a pas apprise aux Castillans. Les hommes ne sont pas revenus. La Fuente s'élargit chaque été.",
 "pal":["La place s'est effondrée dans un lac noir sans fond ; les maisons penchent au bord, et les bancs de la junta flottent sur l'eau sombre.","La terre dégelée s'affaisse en creux d'eau noire, les rondins penchent, et des piquets reliés d'une corde entourent le trou de la place.","Une bourgade de rondins à balcons andalous dans la toundra, une place autour d'un trou d'eau noire, et une femme en mantille sur un banc.","Le ciel s'allume de lueurs vertes la nuit, la junta siège dehors pour les regarder, et la toundra gelée tient dur sous les pas.","Le ciel brûle de voiles vertes d'un horizon à l'autre ; la bourgade entière est dehors, muette, la tête levée, et personne ne regarde le sol."],
 "pm":"Abysse","pp":"Ciel"}
```

```json
[
{"id":"ASS165-moins-1","zone":"ASS165","pole":"-","palier":1,"nom":"Le Sol qui cède","cout":1,"cible":1,
 "effet":"Loi : vos alliés gagnent 5 de garde ; l'attaque de la cible baisse de 1 ; le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",5],["affaiblit","cible",1],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Affaiblissement","Garde","Prix"],
 "ambiance":"Un matin de dégel, la place s'enfonce d'un pied ; doña Leonor fait déplacer son banc, rien d'autre.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ASS165-moins-2","zone":"ASS165","pole":"-","palier":2,"nom":"Les Piquets autour du trou","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à la cible. Puis vos alliés gagnent 6 de garde ; 2 coups de 2 au hasard. Prix : le héros perd 1 PV.",
 "ops":[["si","cibleGarde",[["deg","cible",6]]],["garde","allies",6],["deg","hasard",2,2],["prixPV",1]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Garde","Condition","Prix"],
 "ambiance":"On plante des piquets autour du trou et on y tend une corde ; les enfants s'y suspendent pour regarder.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"ASS165-moins-3","zone":"ASS165","pole":"-","palier":3,"nom":"La Fuente","cout":2,"cible":0,
 "effet":"Loi : vos alliés gagnent 10 de garde ; l'attaque de chaque ennemi baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["garde","allies",10],["affaiblit","tous",2],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Affaiblissement","Garde","Prix"],
 "ambiance":"Doña Leonor a baptisé le trou la Fuente : c'est plus convenable qu'un trou, et cela ne coûte rien.",
 "budget":"23,2 / 24 (−3 %)"},
{"id":"ASS165-moins-4","zone":"ASS165","pole":"-","palier":4,"nom":"Les Rondins qui penchent","cout":2,"cible":1,
 "effet":"12 dégâts à la cible ; vos alliés gagnent 12 de garde ; le héros gagne 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["deg","cible",12],["garde","allies",12],["garde","heros",4],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Garde","Prix"],
 "ambiance":"Les maisons du bord penchent vers l'eau noire ; on y dort la tête du côté de la rue.",
 "budget":"27,6 / 28 (−1 %)"},
{"id":"ASS165-moins-5","zone":"ASS165","pole":"-","palier":5,"nom":"La Junta au bord","cout":2,"cible":1,
 "effet":"Loi : si la cible a de la garde, la garde de la cible tombe à 0. Puis 8 dégâts à la cible ; vos alliés gagnent 12 de garde ; l'attaque de la cible baisse de 3. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["deg","cible",8],["garde","allies",12],["affaiblit","cible",3],["ennemiGarde",1]],
 "tags":["Assemblée","Glace","Pôle −","Loi","Dégâts","Affaiblissement","Perce-garde","Garde","Condition","Prix"],
 "ambiance":"La junta siège au bord du trou, sur des bancs cloués à des planches, pour que rien n'y glisse.",
 "budget":"30,9 / 32 (−3 %)"},
{"id":"ASS165-moins-6","zone":"ASS165","pole":"-","palier":6,"nom":"L'Eau sans fond","cout":2,"cible":1,
 "effet":"Vos alliés gagnent 14 de garde ; la cible hésite ; 5 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["garde","allies",14],["hesite","cible"],["deg","tous",5],["prixPV",2]],
 "tags":["Assemblée","Glace","Pôle −","Dégâts","Contrôle","Garde","Prix"],
 "ambiance":"On a descendu dans la Fuente une corde lestée ; on l'a remontée mouillée, et sans le poids.",
 "budget":"30,8 / 36 (−14 %)"},
{"id":"ASS165-moins7","zone":"ASS165","pole":"-","palier":7,"nom":"La Place engloutie","cout":2,"cible":1,
 "effet":"La place s'enfonce. 12 à la cible ; alliés +16 de garde ; chaque ennemi −3 d'attaque. Pose Abîme. Si Sang (consommée) : alliés +10 de garde ; cible −2 d'attaque ; 12 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["deg","cible",12],["garde","allies",16],["affaiblit","tous",3],["pose","Abîme"],["reveil","Sang",true,[["garde","allies",10],["affaiblit","cible",2],["deg","cible",12]]],["ennemiGarde",2]],
 "tags":["Assemblée","Glace","Forme ultime −7","Dégâts","Affaiblissement","Garde","Combo","Pose Abîme","Réveil Sang","Prix"],
 "ambiance":"Les bancs de la junta flottent sur l'eau noire ; doña Leonor préside depuis le balcon d'en face.",
 "budget":"47 sans combo ; réveil +30 (64 %)"},
{"id":"ASS165-plus-1","zone":"ASS165","pole":"+","palier":1,"nom":"Les Lueurs vertes","cout":1,"cible":0,
 "effet":"Loi : le héros se soigne de 6 ; +1 mana de Glace ; riposte 2 jusqu'à votre prochain tour. Prix : cette carte s'exile.",
 "ops":[["soin","heros",6],["mana","Glace",1],["riposte",2],["exil"]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Riposte","Soin","Mana","Exil","Prix"],
 "ambiance":"Les lueurs vertes passent sur la toundra ; doña Leonor dit que Dieu y écrit sans ponctuation.",
 "budget":"10 / 10 (+0 %)"},
{"id":"ASS165-plus-2","zone":"ASS165","pole":"+","palier":2,"nom":"La Mantille","cout":1,"cible":1,
 "effet":"Si la cible vole par-dessus, 8 dégâts à la cible. Puis le héros se soigne de 6 ; le héros gagne 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","vol",[["deg","cible",8]]],["soin","heros",6],["garde","heros",4],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Garde","Soin","Condition","Prix"],
 "ambiance":"Elle porte la mantille par-dessus les pelisses, et l'épingle de jais ne quitte jamais son chignon.",
 "budget":"11,2 / 12,5 (−10 %)"},
{"id":"ASS165-plus-3","zone":"ASS165","pole":"+","palier":3,"nom":"La Tête levée","cout":2,"cible":1,
 "effet":"Loi : le héros se soigne de 10 ; riposte 4 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : chaque ennemi se soigne de 1.",
 "ops":[["soin","heros",10],["riposte",4],["affaiblit","cible",2],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"À Escarchavega, on reconnaît les gens de la junta à leur nuque raide, à force de regarder en haut.",
 "budget":"22 / 24 (−8 %)"},
{"id":"ASS165-plus-4","zone":"ASS165","pole":"+","palier":4,"nom":"Les Oies du dégel","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 10 dégâts à la cible. Puis 8 dégâts à la cible ; le héros se soigne de 10 ; +2 mana de Glace. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","vol",[["deg","cible",10]]],["deg","cible",8],["soin","heros",10],["mana","Glace",2],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Soin","Mana","Condition","Prix"],
 "ambiance":"Les oies remontent au nord en longues lignes ; doña Leonor les regarde partir sans un mot.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS165-plus-5","zone":"ASS165","pole":"+","palier":5,"nom":"La Langue du ciel","cout":2,"cible":1,
 "effet":"Loi : le héros se soigne de 22 ; +2 mana de Glace ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 3 PV.",
 "ops":[["soin","heros",22],["mana","Glace",2],["vulnerable","cible",2],["prixPV",3]],
 "tags":["Assemblée","Glace","Pôle +","Loi","Marque","Soin","Mana","Prix"],
 "ambiance":"Le ciel parle une langue que Dieu n'a pas apprise aux Castillans ; doña Leonor l'écoute quand même.",
 "budget":"31 / 32 (−3 %)"},
{"id":"ASS165-plus-6","zone":"ASS165","pole":"+","palier":6,"nom":"La Nuit dehors","cout":2,"cible":1,
 "effet":"Si la cible vole par-dessus, 6 dégâts à tous les ennemis. Puis le héros se soigne de 14 ; riposte 6 jusqu'à votre prochain tour ; vos alliés gagnent 4 de garde. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","vol",[["deg","tous",6]]],["soin","heros",14],["riposte",6],["garde","allies",4],["ennemiSoin",1]],
 "tags":["Assemblée","Glace","Pôle +","Dégâts","Riposte","Garde","Soin","Condition","Prix"],
 "ambiance":"Les nuits claires, la junta siège dehors sous les couvertures, et ne vote rien tant que le ciel bouge.",
 "budget":"35,4 / 36 (−2 %)"},
{"id":"ASS165-plus7","zone":"ASS165","pole":"+","palier":7,"nom":"Le Ciel en feu","cout":2,"cible":1,
 "effet":"Le ciel s'embrase de vert. 10 à la cible ; soin du héros 18 ; riposte 8 ; +2 mana de Glace. Pose Racine. Si Abîme (consommée) : soin du héros 12 ; 6 à tous ; riposte 4. Prix : cette carte s'exile.",
 "ops":[["deg","cible",10],["soin","heros",18],["riposte",8],["mana","Glace",2],["pose","Racine"],["reveil","Abîme",true,[["soin","heros",12],["deg","tous",6],["riposte",4]]],["exil"]],
 "tags":["Assemblée","Glace","Forme ultime +7","Dégâts","Riposte","Soin","Mana","Exil","Combo","Pose Racine","Réveil Abîme","Prix"],
 "ambiance":"Toute la bourgade est sortie, la tête levée et muette ; personne ne regarde plus le sol qui s'ouvre.",
 "budget":"47 sans combo ; réveil +33,2 (71 %)"}
]
```

---

## 9. Le Hui de Wai-Marama (ASS163) — Assemblée · Delta fluvial · Eau · Polynésienne

Forme du récit : le débat à deux voix (Tapuhi pour l'ombre, Rongo pour la torche). Recette du −7 : la démesure (les arbres refermés sur tous les chenaux) ; du +7 : le vide (un banc de sable nu sous un soleil blanc).

**Ombre (−)** : l'ombre du grand arbre → la voix basse → les blessés couchés → les racines aériennes → le débat sous l'arbre → les pirogues dans la pénombre → le Delta refermé. Comptes au script (cartes sur 7, `si` et réveil compris) : soin des alliés 7, pioche 4, hésitation 4, dégâts ciblés 3, garde du héros 2 ; crochet « le héros a moins de la moitié de ses PV » sur 2 ; prix sur 6 cartes (PV 3, défausse 3).

**Lumière (+)** : la torche plantée → le visage éclairé → les torches des berges → le menteur montré → la flamme dans l'eau → le fleuve qui change de lit → le Banc de sable. Comptes au script (cartes sur 7, `si` et réveil compris) : marque 7, brûlure 4, dégâts ciblés 4, garde des alliés 2, soin du héros 2, dégâts à tous 2 ; crochet « la cible est déjà marquée » sur 2 ; prix sur 7 cartes (garde ennemie 4, PV 2, exil 1).

```json
{"fiche":"ASS163","nom":"Le Hui de Wai-Marama",
 "recit":"Tapuhi voulait que le hui se tienne sous le grand arbre de la berge, à l'ombre, où personne n'a chaud et où l'on parle doucement. Rongo voulait qu'il se tienne la nuit, avec des torches, pour qu'on voie le visage de celui qui parle. Ils en débattirent sous l'arbre, puis la nuit aux torches, puis de nouveau sous l'arbre. Pendant le débat, le fleuve changea de lit et emporta l'arbre. Le hui se tient désormais sur un banc de sable, en plein soleil, et chacun y parle vite.",
 "pal":["Les arbres du delta se sont refermés sur les chenaux ; l'eau est noire et immobile, et les voix y passent sans visage.","Les racines aériennes pendent au-dessus des chenaux, les pirogues glissent dans la pénombre, et l'on se parle à voix basse.","Un delta de chenaux et de bancs de sable, un grand arbre sur la berge, des pirogues tirées au sec, et des torches éteintes plantées dans la vase.","Les torches brûlent la nuit le long des berges, les visages luisent, et l'eau des chenaux renvoie chaque flamme en tremblant.","Plus une ombre : un banc de sable nu sous un soleil blanc, l'eau qui brille de partout, et des gens qui parlent vite en plissant les yeux."],
 "pm":"Ombre","pp":"Lumière"}
```

```json
[
{"id":"ASS163-moins-1","zone":"ASS163","pole":"-","palier":1,"nom":"L'Ombre du grand arbre","cout":1,"cible":0,
 "effet":"Loi : vos alliés se soignent de 5 ; piochez 1 carte. Prix : le héros perd 1 PV.",
 "ops":[["soin","allies",5],["pioche",1],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Soin","Pioche","Prix"],
 "ambiance":"Sous le grand arbre, personne n'a chaud, personne ne crie, et personne ne voit très bien qui parle.",
 "budget":"10,5 / 10 (+5 %)"},
{"id":"ASS163-moins-2","zone":"ASS163","pole":"-","palier":2,"nom":"La Voix basse","cout":1,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, vos alliés se soignent de 4. Puis la cible hésite ; vos alliés se soignent de 4. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","blesse",[["soin","allies",4]]],["hesite","cible"],["soin","allies",4],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Contrôle","Soin","Condition","Prix"],
 "ambiance":"Tapuhi parle si bas qu'il faut se pencher vers lui ; on finit toujours par lui donner raison.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS163-moins-3","zone":"ASS163","pole":"-","palier":3,"nom":"Les Blessés couchés","cout":2,"cible":1,
 "effet":"Loi : 8 dégâts à la cible ; vos alliés se soignent de 8 ; le héros gagne 6 de garde. Prix : le héros perd 1 PV.",
 "ops":[["deg","cible",8],["soin","allies",8],["garde","heros",6],["prixPV",1]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Garde","Soin","Prix"],
 "ambiance":"On couche les blessés des pirogues dans l'ombre des racines, sur des nattes, et on évente leur visage.",
 "budget":"23,8 / 24 (−1 %)"},
{"id":"ASS163-moins-4","zone":"ASS163","pole":"-","palier":4,"nom":"Les Racines aériennes","cout":2,"cible":1,
 "effet":"Vos alliés se soignent de 11 ; piochez 2 cartes ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["soin","allies",11],["pioche",2],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Pôle −","Affaiblissement","Soin","Pioche","Prix"],
 "ambiance":"Les racines aériennes descendent des branches jusqu'à l'eau ; les enfants s'y balancent et tombent dans le chenal.",
 "budget":"27,5 / 28 (−2 %)"},
{"id":"ASS163-moins-5","zone":"ASS163","pole":"-","palier":5,"nom":"Le Débat sous l'arbre","cout":2,"cible":1,
 "effet":"Loi : si le héros a moins de la moitié de ses PV, piochez 2 cartes. Puis 8 dégâts à la cible ; vos alliés se soignent de 10 ; la cible hésite. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["pioche",2]]],["deg","cible",8],["soin","allies",10],["hesite","cible"],["prixPV",2]],
 "tags":["Assemblée","Eau","Pôle −","Loi","Dégâts","Contrôle","Soin","Pioche","Condition","Prix"],
 "ambiance":"Le débat dure sous l'arbre jusqu'au soir ; à l'ombre, personne ne pense à rentrer.",
 "budget":"30 / 32 (−6 %)"},
{"id":"ASS163-moins-6","zone":"ASS163","pole":"-","palier":6,"nom":"Les Pirogues dans la pénombre","cout":2,"cible":0,
 "effet":"Vos alliés se soignent de 12 ; tous les ennemis hésitent ; 4 dégâts à tous les ennemis.",
 "ops":[["soin","allies",12],["hesite","tous"],["deg","tous",4]],
 "tags":["Assemblée","Eau","Pôle −","Dégâts","Contrôle","Soin"],
 "ambiance":"Les pirogues glissent dans la pénombre des chenaux, sans bruit de pagaie, comme si elles avaient honte.",
 "budget":"35,8 / 36 (−1 %)"},
{"id":"ASS163-moins7","zone":"ASS163","pole":"-","palier":7,"nom":"Le Delta refermé","cout":2,"cible":1,
 "effet":"L'ombre ferme les chenaux. 12 à la cible ; alliés soignés de 16 ; la cible hésite ; héros +10 de garde. Pose Givre. Si Braise (consommée) : alliés soignés de 10 ; piochez 1 ; 10 à la cible. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",12],["soin","allies",16],["hesite","cible"],["garde","heros",10],["pose","Givre"],["reveil","Braise",true,[["soin","allies",10],["pioche",1],["deg","cible",10]]],["prixDefausse",1]],
 "tags":["Assemblée","Eau","Forme ultime −7","Dégâts","Contrôle","Garde","Soin","Pioche","Combo","Pose Givre","Réveil Braise","Prix"],
 "ambiance":"Les arbres se sont refermés sur les chenaux ; l'eau ne bouge plus, et les voix y passent sans visage.",
 "budget":"46 sans combo ; réveil +29 (63 %)"},
{"id":"ASS163-plus-1","zone":"ASS163","pole":"+","palier":1,"nom":"La Torche plantée","cout":1,"cible":1,
 "effet":"Loi : la cible est marquée : +2 par coup reçu ; la cible brûle : 2 par tour pendant 2 tours ; vos alliés gagnent 2 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","cible",2],["brulure","cible",2,2],["garde","allies",2],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Brûlure","Marque","Garde","Prix"],
 "ambiance":"Rongo plante une torche devant celui qui parle, pour qu'on voie s'il cligne des yeux.",
 "budget":"10,4 / 10 (+4 %)"},
{"id":"ASS163-plus-2","zone":"ASS163","pole":"+","palier":2,"nom":"Le Visage éclairé","cout":1,"cible":1,
 "effet":"Si la cible est déjà marquée, 8 dégâts à la cible. Puis la cible est marquée : +3 par coup reçu ; le héros se soigne de 3. Prix : cette carte s'exile.",
 "ops":[["si","vulnerable",[["deg","cible",8]]],["vulnerable","cible",3],["soin","heros",3],["exil"]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Marque","Soin","Condition","Exil","Prix"],
 "ambiance":"À la lueur des torches, les visages se creusent, et les menteurs se grattent la joue.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"ASS163-plus-3","zone":"ASS163","pole":"+","palier":3,"nom":"Les Torches des berges","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis sont marqués : +2 par coup reçu ; 4 dégâts à tous les ennemis ; vos alliés gagnent 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","tous",2],["deg","tous",4],["garde","allies",4],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Dégâts","Marque","Garde","Prix"],
 "ambiance":"Les torches brûlent toute la nuit le long des berges, et les moustiques viennent assister au hui.",
 "budget":"24,8 / 24 (+3 %)"},
{"id":"ASS163-plus-4","zone":"ASS163","pole":"+","palier":4,"nom":"Le Menteur montré","cout":2,"cible":1,
 "effet":"Si la cible est déjà marquée, 12 dégâts à la cible. Puis 6 dégâts à la cible ; la cible est marquée : +3 par coup reçu ; la cible brûle : 3 par tour pendant 3 tours. Prix : le héros perd 3 PV.",
 "ops":[["si","vulnerable",[["deg","cible",12]]],["deg","cible",6],["vulnerable","cible",3],["brulure","cible",3,3],["prixPV",3]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Brûlure","Marque","Condition","Prix"],
 "ambiance":"Rongo montre le menteur du doigt, et toute la berge le regarde ; le menteur regarde l'eau.",
 "budget":"27 / 28 (−4 %)"},
{"id":"ASS163-plus-5","zone":"ASS163","pole":"+","palier":5,"nom":"La Flamme dans l'eau","cout":2,"cible":1,
 "effet":"Loi : la cible est marquée : +4 par coup reçu ; tous les ennemis brûlent : 2 par tour pendant 3 tours ; le héros se soigne de 5. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["vulnerable","cible",4],["brulure","tous",2,3],["soin","heros",5],["ennemiGarde",1]],
 "tags":["Assemblée","Eau","Pôle +","Loi","Brûlure","Marque","Soin","Prix"],
 "ambiance":"L'eau des chenaux renvoie chaque flamme en tremblant ; on dirait que le fleuve siège aussi au hui.",
 "budget":"28,2 / 32 (−12 %)"},
{"id":"ASS163-plus-6","zone":"ASS163","pole":"+","palier":6,"nom":"Le Fleuve qui change de lit","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; la cible est marquée : +4 par coup reçu ; 6 dégâts à tous les ennemis. Prix : le héros perd 3 PV.",
 "ops":[["deg","cible",10],["vulnerable","cible",4],["deg","tous",6],["prixPV",3]],
 "tags":["Assemblée","Eau","Pôle +","Dégâts","Marque","Prix"],
 "ambiance":"Le fleuve a changé de lit pendant le débat, et il a emporté le grand arbre avec ses racines.",
 "budget":"32,2 / 36 (−11 %)"},
{"id":"ASS163-plus7","zone":"ASS163","pole":"+","palier":7,"nom":"Le Banc de sable","cout":2,"cible":1,
 "effet":"Plus une ombre nulle part. 16 à la cible ; cible marquée (+5) ; la cible brûle (4 par tour, 3 tours) ; héros +10 de garde. Pose Sang. Si Sceau (consommée) : cible marquée (+3) ; 20 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["deg","cible",16],["vulnerable","cible",5],["brulure","cible",4,3],["garde","heros",10],["pose","Sang"],["reveil","Sceau",true,[["vulnerable","cible",3],["deg","cible",20]]],["ennemiGarde",2]],
 "tags":["Assemblée","Eau","Forme ultime +7","Dégâts","Brûlure","Marque","Garde","Combo","Pose Sang","Réveil Sceau","Prix"],
 "ambiance":"Le hui se tient sur un banc de sable, en plein soleil ; chacun y parle vite, les yeux plissés.",
 "budget":"47 sans combo ; réveil +29 (62 %)"}
]
```

---

## 10. Le Thing de Fúlahóll (ASS112) — Assemblée · Steppe · Vent · Nordique

Forme du récit : la légende de fondation (comment la colline du thing a pris son nom). Recette du −7 : la ruine (le charnier, personne ne monte siéger) ; du +7 : la démesure (l'herbe plus haute qu'un cavalier, le thing qui se cherche à la voix ; aucun bâtiment avalé).

**Pourriture (−)** : le cheval laissé → les mouches de la session → la carcasse qui empoisonne → l'odeur jusqu'aux tentes → le procès perdu → le charnier → la Colline des carcasses. Comptes au script (cartes sur 7, `si` et réveil compris) : riposte 7, marque 4, dégâts ciblés 4, brûlure 4 ; crochet « un ennemi s'apprête à se soigner » sur 2 ; prix sur 7 cartes (PV 4, soin ennemi 3).

**Croissance (+)** : l'herbe plus verte → le brûlis de printemps → les chevaux au poitrail → le pré du thing → la cendre fertile → l'herbe haute → la Steppe sous l'herbe. Comptes au script (cartes sur 7, `si` et réveil compris) : brûlure 7, mana 4, garde des alliés 4, dégâts ciblés 3, soin du héros 2 ; crochet « la cible brûle déjà » sur 2 ; prix sur 7 cartes (défausse 6, exil 1).

```json
{"fiche":"ASS112","nom":"Le Thing de Fúlahóll",
 "recit":"Le thing de la steppe se tenait jadis sur une colline sans nom. Un été, le cheval de la diseuse de lois mourut pendant la session. Elle venait de perdre un procès contre son voisin : personne ne l'aida à l'enterrer, et elle refusa de le faire seule. La carcasse pourrit là jusqu'à l'été suivant, et l'herbe y repoussa plus haute et plus verte qu'ailleurs. On appela l'endroit la Colline pourrie. Depuis, qui perd un procès y laisse un cheval. Ragnfríðr, qui les a tous perdus, fauche la plus belle herbe.",
 "pal":["La colline n'est plus qu'un charnier : des carcasses de chevaux à perte de vue, des mouches en nuages, et personne n'ose monter siéger.","Des carcasses à tous les degrés de pourriture sur le flanc, des mouches, et une odeur que le vent porte jusqu'aux tentes du thing.","Une colline basse dans la steppe venteuse, un cercle de pierres levées au sommet, l'herbe plus verte sur un flanc, et des chevaux qui paissent.","L'herbe monte jusqu'au poitrail des chevaux sur toute la colline, verte et drue, et les tentes du thing se plantent dans un pré.","L'herbe a recouvert la colline et la steppe alentour, plus haute qu'un cavalier ; le thing s'y cherche à la voix, sans se voir."],
 "pm":"Pourriture","pp":"Croissance"}
```

```json
[
{"id":"ASS112-moins-1","zone":"ASS112","pole":"-","palier":1,"nom":"Le Cheval laissé","cout":1,"cible":1,
 "effet":"Loi : riposte 3 jusqu'à votre prochain tour ; la cible est marquée : +1 par coup reçu ; le héros gagne 4 de garde. Prix : le héros perd 2 PV.",
 "ops":[["riposte",3],["vulnerable","cible",1],["garde","heros",4],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Marque","Riposte","Garde","Prix"],
 "ambiance":"Ragnfríðr dessangle son cheval mort, prend la selle, et redescend la colline à pied sans se retourner.",
 "budget":"10,2 / 10 (+2 %)"},
{"id":"ASS112-moins-2","zone":"ASS112","pole":"-","palier":2,"nom":"Les Mouches de la session","cout":1,"cible":1,
 "effet":"Si un ennemi s'apprête à se soigner, 8 dégâts à la cible. Puis riposte 3 jusqu'à votre prochain tour ; la cible brûle : 1 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["si","soinEnnemi",[["deg","cible",8]]],["riposte",3],["brulure","cible",1,3],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Brûlure","Riposte","Condition","Prix"],
 "ambiance":"Les mouches suivent les débats d'une carcasse à l'autre, et se posent sur ceux qui parlent trop longtemps.",
 "budget":"11 / 12,5 (−12 %)"},
{"id":"ASS112-moins-3","zone":"ASS112","pole":"-","palier":3,"nom":"La Carcasse qui empoisonne","cout":2,"cible":1,
 "effet":"Loi : riposte 6 jusqu'à votre prochain tour ; la cible brûle : 3 par tour pendant 3 tours ; la cible est marquée : +2 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["riposte",6],["brulure","cible",3,3],["vulnerable","cible",2],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Brûlure","Marque","Riposte","Prix"],
 "ambiance":"Le loup qui mange une carcasse du thing ne va pas loin ; on le retrouve couché dans l'herbe.",
 "budget":"25 / 24 (+4 %)"},
{"id":"ASS112-moins-4","zone":"ASS112","pole":"-","palier":4,"nom":"L'Odeur jusqu'aux tentes","cout":2,"cible":0,
 "effet":"Riposte 6 jusqu'à votre prochain tour ; l'attaque de chaque ennemi baisse de 2 ; le héros se soigne de 4. Prix : chaque ennemi se soigne de 1.",
 "ops":[["riposte",6],["affaiblit","tous",2],["soin","heros",4],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle −","Affaiblissement","Riposte","Soin","Prix"],
 "ambiance":"Le vent porte l'odeur jusqu'aux tentes ; on plaide en se pinçant le nez, et plus court.",
 "budget":"27,2 / 28 (−3 %)"},
{"id":"ASS112-moins-5","zone":"ASS112","pole":"-","palier":5,"nom":"Le Procès perdu","cout":2,"cible":1,
 "effet":"Loi : si un ennemi s'apprête à se soigner, riposte 8 jusqu'à votre prochain tour. Puis 6 dégâts à la cible ; riposte 6 jusqu'à votre prochain tour ; la cible est marquée : +3 par coup reçu. Prix : le héros perd 2 PV.",
 "ops":[["si","soinEnnemi",[["riposte",8]]],["deg","cible",6],["riposte",6],["vulnerable","cible",3],["prixPV",2]],
 "tags":["Assemblée","Vent","Pôle −","Loi","Dégâts","Marque","Riposte","Condition","Prix"],
 "ambiance":"Ragnfríðr a perdu son procès ; elle salue, prend son cheval par la bride et le mène à la colline.",
 "budget":"33 / 32 (+3 %)"},
{"id":"ASS112-moins-6","zone":"ASS112","pole":"-","palier":6,"nom":"Le Charnier","cout":2,"cible":1,
 "effet":"8 dégâts à la cible ; riposte 8 jusqu'à votre prochain tour ; tous les ennemis brûlent : 2 par tour pendant 3 tours. Prix : chaque ennemi se soigne de 1.",
 "ops":[["deg","cible",8],["riposte",8],["brulure","tous",2,3],["ennemiSoin",1]],
 "tags":["Assemblée","Vent","Pôle −","Dégâts","Brûlure","Riposte","Prix"],
 "ambiance":"Le flanc de la colline est couvert de carcasses ; chacune a son procès, et chacune son nom.",
 "budget":"35,2 / 36 (−2 %)"},
{"id":"ASS112-moins7","zone":"ASS112","pole":"-","palier":7,"nom":"La Colline des carcasses","cout":2,"cible":1,
 "effet":"Personne ne monte plus siéger. 12 à la cible ; riposte 12 ; tous marqués (+2). Pose Sang. Si Givre (consommée) : riposte 6 ; la cible brûle (3 par tour, 3 tours) ; 10 à la cible. Prix : héros −2 PV.",
 "ops":[["deg","cible",12],["riposte",12],["vulnerable","tous",2],["pose","Sang"],["reveil","Givre",true,[["riposte",6],["brulure","cible",3,3],["deg","cible",10]]],["prixPV",2]],
 "tags":["Assemblée","Vent","Forme ultime −7","Dégâts","Brûlure","Marque","Riposte","Combo","Pose Sang","Réveil Givre","Prix"],
 "ambiance":"Les mouches tiennent la colline ; le thing se réunit en bas, dans la poussière, et juge mal.",
 "budget":"47,2 sans combo ; réveil +31 (66 %)"},
{"id":"ASS112-plus-1","zone":"ASS112","pole":"+","palier":1,"nom":"L'Herbe plus verte","cout":1,"cible":1,
 "effet":"Loi : la cible brûle : 2 par tour pendant 3 tours ; vos alliés gagnent 4 de garde ; +1 mana de Vent. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",2,3],["garde","allies",4],["mana","Vent",1],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Brûlure","Garde","Mana","Prix"],
 "ambiance":"Là où le cheval a pourri, l'herbe repousse plus verte qu'ailleurs ; les autres chevaux viennent la brouter.",
 "budget":"10,8 / 10 (+8 %)"},
{"id":"ASS112-plus-2","zone":"ASS112","pole":"+","palier":2,"nom":"Le Brûlis de printemps","cout":1,"cible":1,
 "effet":"Si la cible brûle déjà, 6 dégâts à la cible. Puis 6 dégâts à la cible ; la cible brûle : 3 par tour pendant 2 tours. Prix : cette carte s'exile.",
 "ops":[["si","brule",[["deg","cible",6]]],["deg","cible",6],["brulure","cible",3,2],["exil"]],
 "tags":["Assemblée","Vent","Pôle +","Dégâts","Brûlure","Condition","Exil","Prix"],
 "ambiance":"Au printemps, on brûle la vieille herbe ; la colline fume, et le vert monte derrière la cendre.",
 "budget":"12 / 12,5 (−4 %)"},
{"id":"ASS112-plus-3","zone":"ASS112","pole":"+","palier":3,"nom":"Les Chevaux au poitrail","cout":2,"cible":0,
 "effet":"Loi : tous les ennemis brûlent : 2 par tour pendant 2 tours ; vos alliés gagnent 8 de garde ; le héros se soigne de 6. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","tous",2,2],["garde","allies",8],["soin","heros",6],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Brûlure","Garde","Soin","Prix"],
 "ambiance":"L'herbe monte jusqu'au poitrail des chevaux, et les juges arrivent au thing les jambes vertes.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"ASS112-plus-4","zone":"ASS112","pole":"+","palier":4,"nom":"Le Pré du thing","cout":2,"cible":1,
 "effet":"La cible brûle : 4 par tour pendant 3 tours ; +2 mana de Vent ; le héros se soigne de 5 ; la cible est marquée : +2 par coup reçu. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","cible",4,3],["mana","Vent",2],["soin","heros",5],["vulnerable","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Brûlure","Marque","Soin","Mana","Prix"],
 "ambiance":"On fauche le pré du thing avant la session ; le foin sert à payer les amendes.",
 "budget":"26 / 28 (−7 %)"},
{"id":"ASS112-plus-5","zone":"ASS112","pole":"+","palier":5,"nom":"La Cendre fertile","cout":2,"cible":1,
 "effet":"Loi : si la cible brûle déjà, 6 dégâts à tous les ennemis. Puis 10 dégâts à la cible ; la cible brûle : 4 par tour pendant 3 tours ; l'attaque de la cible baisse de 2. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","brule",[["deg","tous",6]]],["deg","cible",10],["brulure","cible",4,3],["affaiblit","cible",2],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Loi","Dégâts","Brûlure","Affaiblissement","Condition","Prix"],
 "ambiance":"Ragnfríðr répand la cendre des brûlis sur ses terres ; elle dit qu'elle a perdu ses procès pour ça.",
 "budget":"31,6 / 32 (−1 %)"},
{"id":"ASS112-plus-6","zone":"ASS112","pole":"+","palier":6,"nom":"L'Herbe haute","cout":2,"cible":1,
 "effet":"Tous les ennemis brûlent : 2 par tour pendant 3 tours ; +2 mana de Vent ; vos alliés gagnent 8 de garde ; la cible brûle : 3 par tour pendant 3 tours. Prix : défaussez 1 carte au hasard.",
 "ops":[["brulure","tous",2,3],["mana","Vent",2],["garde","allies",8],["brulure","cible",3,3],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Pôle +","Brûlure","Garde","Mana","Prix"],
 "ambiance":"Dans l'herbe haute, le cercle de pierres a disparu ; on le retrouve en s'y cognant les genoux.",
 "budget":"34,8 / 36 (−3 %)"},
{"id":"ASS112-plus7","zone":"ASS112","pole":"+","palier":7,"nom":"La Steppe sous l'herbe","cout":2,"cible":1,
 "effet":"L'herbe dépasse les cavaliers. 14 à la cible ; la cible brûle (5 par tour, 3 tours) ; alliés +12 de garde ; +2 mana de Vent. Pose Sceau. Si Braise (consommée) : la cible brûle (4 par tour, 3 tours) ; alliés +14 de garde. Prix : défaussez 1 carte.",
 "ops":[["deg","cible",14],["brulure","cible",5,3],["garde","allies",12],["mana","Vent",2],["pose","Sceau"],["reveil","Braise",true,[["brulure","cible",4,3],["garde","allies",14]]],["prixDefausse",1]],
 "tags":["Assemblée","Vent","Forme ultime +7","Dégâts","Brûlure","Garde","Mana","Combo","Pose Sceau","Réveil Braise","Prix"],
 "ambiance":"L'herbe a recouvert la colline et la steppe ; le thing s'y cherche à la voix, à l'aveugle.",
 "budget":"46,4 sans combo ; réveil +28,8 (62 %)"}
]
```

---

## 11. Yakhchal-e Behzad, le Donjon de l'Architecte (DON114) — Donjon · Toundra · Glace · Perse

Forme du récit : document, le devis (cité, puis ce qu'il est devenu). Recette du −7 : la ruine (les murs percés de partout, la voix qui compte les marches) ; du +7 : l'ordre (tout est exact, et le donjon fonctionne sans personne).

**Folie (−)** : le coup de pioche → les griffures → le couloir tordu → la voix derrière le mur → le mur percé → l'escalier sans fin → le Donjon percé. Comptes au script (cartes sur 7, `si` et réveil compris) : perce-garde 7, dégâts ciblés 5, coups au hasard 4, riposte 2, affaiblissement 2 ; crochet « le héros a moins de la moitié de ses PV » sur 2 ; prix sur 6 cartes (PV 5, défausse 1).

**Raison (+)** : la trappe sous la neige → le devis → les lames dans les murs → les marques du maître → le couloir à l'angle juste → le prix d'une province → le Donjon exact. Pôle sans famille principale : sa colonne vertébrale est le crochet « la cible s'apprête à piétiner » sur 6 cartes (le piège calculé pour qui charge ; mon seul crochet à 5 cartes ou plus du lot) ; marque sur 4, garde du héros sur 4 ; prix : garde ennemie et défausse. Comptes au script (cartes sur 7, `si` et réveil compris) : dégâts ciblés 4, garde du héros 4, marque 4, coups au hasard 3, affaiblissement 2, soin du héros 2, riposte 2 ; crochet « la cible s'apprête à piétiner » sur 6 ; prix sur 6 cartes (garde ennemie 4, défausse 2).

```json
{"fiche":"DON114","nom":"Yakhchal-e Behzad, le Donjon de l'Architecte",
 "recit":"« Au shah, de la part de l'ostad Behzad : murs de glace doublés de feutre, couloirs tournants contre le vent, chambres froides pour la viande, trappes sous la neige pour les voleurs, et un escalier que seul le maître connaît. Prix : celui d'une province. » Le shah paya. Behzad bâtit tout, exactement. Puis le shah, qui avait froid, voulut qu'on ajoute un feu. Behzad refusa : le devis n'en prévoyait pas. On l'enferma dans son escalier. Il en connaît la sortie, dit-on, mais elle ne figure pas au devis.",
 "pal":["Les murs de glace sont percés de partout, des couloirs creusés au hasard s'ouvrent sur le vide, et une voix compte les marches dans le noir.","Des galeries tordues partent des couloirs droits, la glace est griffée à mains nues, et l'on entend creuser derrière les murs.","Un donjon de glace enfoncé dans la toundra, des murs doublés de feutre, des couloirs qui tournent, et un escalier qui descend sans rampe.","Chaque couloir a son piège : trappes sous la neige, lames de glace dans les murs, et des marques que seul le maître sait lire.","Tout est exact : les couloirs se répondent à l'angle juste, les pièges attendent sans bouger, et le donjon fonctionne sans personne dedans."],
 "pm":"Folie","pp":"Raison"}
```

```json
[
{"id":"DON114-moins-1","zone":"DON114","pole":"-","palier":1,"nom":"Le Coup de pioche","cout":1,"cible":1,
 "effet":"Ces coups ignorent la garde ; la cible est marquée : +1 par coup reçu ; riposte 3 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["ignoreGarde"],["vulnerable","cible",1],["riposte",3],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Marque","Perce-garde","Riposte","Prix"],
 "ambiance":"Behzad donne un coup de pioche dans le mur de son escalier, puis un autre, pour voir.",
 "budget":"11 / 10 (+10 %)"},
{"id":"DON114-moins-2","zone":"DON114","pole":"-","palier":2,"nom":"Les Griffures","cout":1,"cible":1,
 "effet":"La garde de la cible tombe à 0 ; 3 coups de 3 au hasard ; riposte 1 jusqu'à votre prochain tour. Prix : le héros perd 1 PV.",
 "ops":[["briseGarde","cible"],["deg","hasard",3,3],["riposte",1],["prixPV",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Riposte","Prix"],
 "ambiance":"La glace des couloirs est griffée à mains nues, en lignes qui ne mènent nulle part.",
 "budget":"13 / 12,5 (+4 %)"},
{"id":"DON114-moins-3","zone":"DON114","pole":"-","palier":3,"nom":"Le Couloir tordu","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, 12 dégâts à la cible. Puis toute garde ennemie tombe à 0 ; 5 dégâts à tous les ennemis. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["deg","cible",12]]],["briseGarde","tous"],["deg","tous",5],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Condition","Prix"],
 "ambiance":"Un couloir tordu part du couloir droit, revient sur lui-même, et s'arrête contre un mur plein.",
 "budget":"21,6 / 24 (−10 %)"},
{"id":"DON114-moins-4","zone":"DON114","pole":"-","palier":4,"nom":"La Voix derrière le mur","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; ces coups ignorent la garde ; 2 coups de 4 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["deg","cible",18],["ignoreGarde"],["deg","hasard",4,2],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Prix"],
 "ambiance":"On entend creuser derrière les murs, la nuit ; quand on frappe, cela s'arrête, puis cela reprend.",
 "budget":"26 / 28 (−7 %)"},
{"id":"DON114-moins-5","zone":"DON114","pole":"-","palier":5,"nom":"Le Mur percé","cout":2,"cible":1,
 "effet":"Si le héros a moins de la moitié de ses PV, ces coups ignorent la garde. Puis 20 dégâts à la cible ; la garde de la cible tombe à 0 ; l'attaque de la cible baisse de 2. Prix : le héros perd 2 PV.",
 "ops":[["si","blesse",[["ignoreGarde"]]],["deg","cible",20],["briseGarde","cible"],["affaiblit","cible",2],["prixPV",2]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Affaiblissement","Perce-garde","Condition","Prix"],
 "ambiance":"Un matin, le mur de la chambre froide est percé de part en part ; la viande est intacte.",
 "budget":"28,5 / 32 (−11 %)"},
{"id":"DON114-moins-6","zone":"DON114","pole":"-","palier":6,"nom":"L'Escalier sans fin","cout":2,"cible":1,
 "effet":"18 dégâts à la cible ; ces coups ignorent la garde ; 3 coups de 4 au hasard ; le héros gagne 4 de garde.",
 "ops":[["deg","cible",18],["ignoreGarde"],["deg","hasard",4,3],["garde","heros",4]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Perce-garde","Garde"],
 "ambiance":"L'escalier descend toujours ; Behzad compte les marches à voix haute et ne retombe jamais sur le même compte.",
 "budget":"36,2 / 36 (+1 %)"},
{"id":"DON114-moins7","zone":"DON114","pole":"-","palier":7,"nom":"Le Donjon percé","cout":2,"cible":1,
 "effet":"Le donjon se perce partout. 22 à la cible ; toute garde ennemie à 0 ; 3 coups de 4 au hasard ; les coups ignorent la garde ; cible −2 d'attaque. Pose Abîme. Si Racine (consommée) : 16 à la cible ; 4 coups de 4 au hasard. Prix : héros −3 PV.",
 "ops":[["deg","cible",22],["briseGarde","tous"],["deg","hasard",4,3],["ignoreGarde"],["affaiblit","cible",2],["pose","Abîme"],["reveil","Racine",true,[["deg","cible",16],["deg","hasard",4,4]]],["prixPV",3]],
 "tags":["Donjon","Glace","Forme ultime −7","Dégâts","Affaiblissement","Perce-garde","Combo","Pose Abîme","Réveil Racine","Prix"],
 "ambiance":"Les couloirs creusés au hasard s'ouvrent sur le vide, et une voix compte les marches dans le noir.",
 "budget":"46,6 sans combo ; réveil +32 (69 %)"},
{"id":"DON114-plus-1","zone":"DON114","pole":"+","palier":1,"nom":"La Trappe sous la neige","cout":1,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 10 dégâts à la cible. Puis l'attaque de la cible baisse de 1 ; le héros se soigne de 3. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","pietine",[["deg","cible",10]]],["affaiblit","cible",1],["soin","heros",3],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Affaiblissement","Soin","Condition","Prix"],
 "ambiance":"Une trappe sous la neige du couloir, calculée pour le poids d'un homme armé, pas d'un enfant.",
 "budget":"9 / 10 (−10 %)"},
{"id":"DON114-plus-2","zone":"DON114","pole":"+","palier":2,"nom":"Le Devis","cout":1,"cible":1,
 "effet":"Le héros gagne 6 de garde ; la cible est marquée : +2 par coup reçu ; 2 coups de 2 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",6],["vulnerable","cible",2],["deg","hasard",2,2],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Marque","Garde","Prix"],
 "ambiance":"Le devis tient sur une seule feuille d'une écriture fine ; il prévoit tout, au clou près.",
 "budget":"11,8 / 12,5 (−6 %)"},
{"id":"DON114-plus-3","zone":"DON114","pole":"+","palier":3,"nom":"Les Lames dans les murs","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 16 dégâts à la cible. Puis riposte 5 jusqu'à votre prochain tour ; l'attaque de la cible baisse de 2. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","pietine",[["deg","cible",16]]],["riposte",5],["affaiblit","cible",2],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Affaiblissement","Riposte","Condition","Prix"],
 "ambiance":"Des lames de glace dorment dans l'épaisseur des murs, et sortent quand on s'appuie au mauvais endroit.",
 "budget":"22 / 24 (−8 %)"},
{"id":"DON114-plus-4","zone":"DON114","pole":"+","palier":4,"nom":"Les Marques du maître","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, la cible hésite. Puis la cible est marquée : +3 par coup reçu ; 3 coups de 4 au hasard ; le héros gagne 6 de garde. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","pietine",[["hesite","cible"]]],["vulnerable","cible",3],["deg","hasard",4,3],["garde","heros",6],["prixDefausse",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Marque","Contrôle","Garde","Condition","Prix"],
 "ambiance":"Sur les murs, des marques que seul Behzad sait lire ; elles disent où poser le pied.",
 "budget":"25,3 / 28 (−10 %)"},
{"id":"DON114-plus-5","zone":"DON114","pole":"+","palier":5,"nom":"Le Couloir à l'angle juste","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 8 dégâts à tous les ennemis. Puis vos alliés gagnent 8 de garde ; riposte 7 jusqu'à votre prochain tour. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","pietine",[["deg","tous",8]]],["garde","allies",8],["riposte",7],["ennemiGarde",1]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Riposte","Garde","Condition","Prix"],
 "ambiance":"Le couloir tourne à l'angle juste pour qu'une charge s'écrase contre le mur d'en face.",
 "budget":"30,4 / 32 (−5 %)"},
{"id":"DON114-plus-6","zone":"DON114","pole":"+","palier":6,"nom":"Le Prix d'une province","cout":2,"cible":1,
 "effet":"Si la cible s'apprête à piétiner, 20 dégâts à la cible. Puis la cible est marquée : +4 par coup reçu ; le héros gagne 12 de garde ; le héros se soigne de 4.",
 "ops":[["si","pietine",[["deg","cible",20]]],["vulnerable","cible",4],["garde","heros",12],["soin","heros",4]],
 "tags":["Donjon","Glace","Pôle +","Dégâts","Marque","Garde","Soin","Condition"],
 "ambiance":"Le shah a payé le prix d'une province ; Behzad a rendu la monnaie, exacte, dans une bourse cousue.",
 "budget":"35,6 / 36 (−1 %)"},
{"id":"DON114-plus7","zone":"DON114","pole":"+","palier":7,"nom":"Le Donjon exact","cout":2,"cible":1,
 "effet":"Tout fonctionne sans personne. Si la cible va piétiner, 24 à la cible. Tous marqués (+2) ; héros +16 de garde ; 3 coups de 4 au hasard. Pose Givre. Si Sang (consommée) : héros +12 de garde ; 20 à la cible. Prix : ennemis +2 de garde.",
 "ops":[["si","pietine",[["deg","cible",24]]],["vulnerable","tous",2],["garde","heros",16],["deg","hasard",4,3],["pose","Givre"],["reveil","Sang",true,[["garde","heros",12],["deg","cible",20]]],["ennemiGarde",2]],
 "tags":["Donjon","Glace","Forme ultime +7","Dégâts","Marque","Garde","Condition","Combo","Pose Givre","Réveil Sang","Prix"],
 "ambiance":"Les pièges attendent sans bouger, les couloirs se répondent, et le donjon marche très bien sans personne.",
 "budget":"46 sans combo ; réveil +29,6 (64 %)"}
]
```

---

## 12. Kab'an Witz, le Rempart des Embruns (CIT021) — Citadelle · Falaise côtière · Vent · Maya

Forme du récit : l'ordre mal transmis, de rempart en rempart. Recette du −7 : le silence (le rempart blanc, les guetteurs immobiles) ; du +7 : la démesure (le rempart qui flambe comme une torche et ne garde plus rien).

**Glace (−)** : la grêle → les embruns gelés → le manteau de coton → les doigts engourdis → le créneau de glace → le silence du rempart → le Rempart blanc. Comptes au script (cartes sur 7, `si` et réveil compris) : affaiblissement 7, garde des alliés 4, dégâts ciblés 4, mana 4, garde du héros 2 ; crochet « la Garde du héros est levée » sur 2 ; prix sur 6 cartes (PV 4, garde ennemie 2).

**Feu (+)** : le brasero allumé → l'ordre emporté → un feu par créneau → les guetteurs réchauffés → la pierre qui chauffe → les pirogues vers la lumière → le Rempart-torche. Comptes au script (cartes sur 7, `si` et réveil compris) : garde du héros 7, riposte 4, dégâts ciblés 3, affaiblissement 2, exil 2, brûlure 2 ; crochet « la cible a de la garde » sur 2 ; prix sur 6 cartes (défausse 4, exil 2).

```json
{"fiche":"CIT021","nom":"Kab'an Witz, le Rempart des Embruns",
 "recit":"Quand la grêle tomba sur la côte, chose que personne n'avait jamais vue, le batab Ah Kan Ek' fit crier de rempart en rempart : « Allumez les feux pour les guetteurs. » Le vent de la falaise emporta la fin de la phrase. On alluma des feux partout, sur chaque créneau, et les guetteurs, réchauffés, s'endormirent. Les pirogues ennemies, qui cherchaient la côte dans la nuit, n'eurent qu'à ramer vers la lumière. Le batab a gardé son rang : il avait donné le bon ordre.",
 "pal":["La grêle a tout couvert : le rempart est blanc et muet, les créneaux sont des blocs de glace, et les guetteurs ne bougent plus.","La grêle crépite sur les dalles, les embruns gèlent sur les créneaux, et les guetteurs serrent leurs manteaux de coton sans rien voir.","Une citadelle de pierre blanche au bord de la falaise, des créneaux tournés vers la mer, des embruns, et des braseros éteints à chaque angle.","Des feux brûlent sur chaque créneau, la pierre chauffe, les guetteurs somnolent, et la mer en bas renvoie les lueurs.","Le rempart entier flambe comme une torche au-dessus de la mer ; on le voit de toutes les pirogues de la côte, et il ne garde plus rien."],
 "pm":"Glace","pp":"Feu"}
```

```json
[
{"id":"CIT021-moins-1","zone":"CIT021","pole":"-","palier":1,"nom":"La Grêle","cout":1,"cible":1,
 "effet":"L'attaque de la cible baisse de 2 ; vos alliés gagnent 3 de garde. Prix : le héros perd 1 PV.",
 "ops":[["affaiblit","cible",2],["garde","allies",3],["prixPV",1]],
 "tags":["Citadelle","Vent","Pôle −","Affaiblissement","Garde","Prix"],
 "ambiance":"La grêle tombe sur la côte, chose que personne n'avait vue ; les enfants la ramassent pour la goûter.",
 "budget":"8,6 / 10 (−14 %)"},
{"id":"CIT021-moins-2","zone":"CIT021","pole":"-","palier":2,"nom":"Les Embruns gelés","cout":1,"cible":1,
 "effet":"Si la Garde du héros est levée, l'attaque de la cible baisse de 2. Puis 3 dégâts à la cible ; l'attaque de la cible baisse de 1 ; +1 mana de Vent ; le héros gagne 4 de garde. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["si","garde",[["affaiblit","cible",2]]],["deg","cible",3],["affaiblit","cible",1],["mana","Vent",1],["garde","heros",4],["ennemiGarde",1]],
 "tags":["Citadelle","Vent","Pôle −","Dégâts","Affaiblissement","Garde","Mana","Condition","Prix"],
 "ambiance":"Les embruns gèlent en route et retombent en grésil sur les créneaux, avec un bruit de sable.",
 "budget":"13,2 / 12,5 (+6 %)"},
{"id":"CIT021-moins-3","zone":"CIT021","pole":"-","palier":3,"nom":"Le Manteau de coton","cout":2,"cible":0,
 "effet":"L'attaque de chaque ennemi baisse de 2 ; vos alliés gagnent 6 de garde ; +1 mana de Vent. Prix : le héros perd 2 PV.",
 "ops":[["affaiblit","tous",2],["garde","allies",6],["mana","Vent",1],["prixPV",2]],
 "tags":["Citadelle","Vent","Pôle −","Affaiblissement","Garde","Mana","Prix"],
 "ambiance":"Les guetteurs serrent leurs manteaux de coton matelassé, faits contre les flèches et non contre le froid.",
 "budget":"21,4 / 24 (−11 %)"},
{"id":"CIT021-moins-4","zone":"CIT021","pole":"-","palier":4,"nom":"Les Doigts engourdis","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; l'attaque de la cible baisse de 3 ; le héros gagne 6 de garde ; la cible hésite. Prix : chaque ennemi gagne 1 de garde.",
 "ops":[["deg","cible",10],["affaiblit","cible",3],["garde","heros",6],["hesite","cible"],["ennemiGarde",1]],
 "tags":["Citadelle","Vent","Pôle −","Dégâts","Affaiblissement","Contrôle","Garde","Prix"],
 "ambiance":"Les archers ont les doigts si engourdis qu'ils ne sentent plus la corde, et tirent trop tôt.",
 "budget":"26,8 / 28 (−4 %)"},
{"id":"CIT021-moins-5","zone":"CIT021","pole":"-","palier":5,"nom":"Le Créneau de glace","cout":2,"cible":1,
 "effet":"Si la Garde du héros est levée, l'attaque de chaque ennemi baisse de 2. Puis 8 dégâts à la cible ; l'attaque de la cible baisse de 3 ; vos alliés gagnent 8 de garde. Prix : le héros perd 2 PV.",
 "ops":[["si","garde",[["affaiblit","tous",2]]],["deg","cible",8],["affaiblit","cible",3],["garde","allies",8],["prixPV",2]],
 "tags":["Citadelle","Vent","Pôle −","Dégâts","Affaiblissement","Garde","Condition","Prix"],
 "ambiance":"Chaque créneau porte une barbe de glace ; on la casse au matin, et elle a repoussé à midi.",
 "budget":"31,2 / 32 (−2 %)"},
{"id":"CIT021-moins-6","zone":"CIT021","pole":"-","palier":6,"nom":"Le Silence du rempart","cout":2,"cible":1,
 "effet":"L'attaque de la cible baisse de 4 ; +2 mana de Vent ; 5 dégâts à tous les ennemis ; le héros se soigne de 6.",
 "ops":[["affaiblit","cible",4],["mana","Vent",2],["deg","tous",5],["soin","heros",6]],
 "tags":["Citadelle","Vent","Pôle −","Dégâts","Affaiblissement","Soin","Mana"],
 "ambiance":"Le rempart se tait sous la grêle ; on n'entend que la mer, en bas, qui ne gèle pas.",
 "budget":"35 / 36 (−3 %)"},
{"id":"CIT021-moins7","zone":"CIT021","pole":"-","palier":7,"nom":"Le Rempart blanc","cout":2,"cible":1,
 "effet":"Le rempart blanchit et se tait. 14 à la cible ; cible −5 d'attaque ; alliés +12 de garde ; +2 mana de Vent. Pose Givre. Si Racine (consommée) : cible −3 d'attaque ; alliés +8 de garde ; 12 à la cible. Prix : héros −2 PV.",
 "ops":[["deg","cible",14],["affaiblit","cible",5],["garde","allies",12],["mana","Vent",2],["pose","Givre"],["reveil","Racine",true,[["affaiblit","cible",3],["garde","allies",8],["deg","cible",12]]],["prixPV",2]],
 "tags":["Citadelle","Vent","Forme ultime −7","Dégâts","Affaiblissement","Garde","Mana","Combo","Pose Givre","Réveil Racine","Prix"],
 "ambiance":"Les guetteurs ne bougent plus sur le rempart blanc, et la grêle s'entasse sur leurs épaules.",
 "budget":"47,4 sans combo ; réveil +30,6 (65 %)"},
{"id":"CIT021-plus-1","zone":"CIT021","pole":"+","palier":1,"nom":"Le Brasero allumé","cout":1,"cible":0,
 "effet":"Le héros gagne 8 de garde ; riposte 2 jusqu'à votre prochain tour ; 2 coups de 1 au hasard. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",8],["riposte",2],["deg","hasard",1,2],["prixDefausse",1]],
 "tags":["Citadelle","Vent","Pôle +","Dégâts","Riposte","Garde","Prix"],
 "ambiance":"Ah Kan Ek' fait crier de rempart en rempart : « Allumez les feux pour les guetteurs. »",
 "budget":"9,4 / 10 (−6 %)"},
{"id":"CIT021-plus-2","zone":"CIT021","pole":"+","palier":2,"nom":"L'Ordre emporté","cout":1,"cible":1,
 "effet":"Si la cible a de la garde, 6 dégâts à la cible. Puis 4 dégâts à la cible ; le héros gagne 8 de garde ; l'attaque de la cible baisse de 1. Prix : cette carte s'exile.",
 "ops":[["si","cibleGarde",[["deg","cible",6]]],["deg","cible",4],["garde","heros",8],["affaiblit","cible",1],["exil"]],
 "tags":["Citadelle","Vent","Pôle +","Dégâts","Affaiblissement","Garde","Condition","Exil","Prix"],
 "ambiance":"Le vent de la falaise emporte la fin de la phrase ; chaque guetteur la finit à sa façon.",
 "budget":"13,4 / 12,5 (+7 %)"},
{"id":"CIT021-plus-3","zone":"CIT021","pole":"+","palier":3,"nom":"Un Feu par créneau","cout":2,"cible":0,
 "effet":"Le héros gagne 14 de garde ; riposte 5 jusqu'à votre prochain tour ; 3 dégâts à tous les ennemis. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",14],["riposte",5],["deg","tous",3],["prixDefausse",1]],
 "tags":["Citadelle","Vent","Pôle +","Dégâts","Riposte","Garde","Prix"],
 "ambiance":"On allume un feu sur chaque créneau, puis entre les créneaux, pour faire bonne mesure.",
 "budget":"24,8 / 24 (+3 %)"},
{"id":"CIT021-plus-4","zone":"CIT021","pole":"+","palier":4,"nom":"Les Guetteurs réchauffés","cout":2,"cible":0,
 "effet":"Le héros gagne 26 de garde ; le héros se soigne de 8. Prix : défaussez 1 carte au hasard.",
 "ops":[["garde","heros",26],["soin","heros",8],["prixDefausse",1]],
 "tags":["Citadelle","Vent","Pôle +","Garde","Soin","Prix"],
 "ambiance":"Réchauffés, les guetteurs s'adossent à la pierre chaude, et s'endorment l'un après l'autre.",
 "budget":"25,8 / 28 (−8 %)"},
{"id":"CIT021-plus-5","zone":"CIT021","pole":"+","palier":5,"nom":"La Pierre qui chauffe","cout":2,"cible":1,
 "effet":"Si la cible a de la garde, la garde de la cible tombe à 0. Puis 8 dégâts à la cible ; le héros gagne 14 de garde ; riposte 6 jusqu'à votre prochain tour. Prix : défaussez 1 carte au hasard.",
 "ops":[["si","cibleGarde",[["briseGarde","cible"]]],["deg","cible",8],["garde","heros",14],["riposte",6],["prixDefausse",1]],
 "tags":["Citadelle","Vent","Pôle +","Dégâts","Perce-garde","Riposte","Garde","Condition","Prix"],
 "ambiance":"La pierre du rempart chauffe sous les feux et craque la nuit, comme un vieillard qui se retourne.",
 "budget":"29,7 / 32 (−7 %)"},
{"id":"CIT021-plus-6","zone":"CIT021","pole":"+","palier":6,"nom":"Les Pirogues vers la lumière","cout":2,"cible":1,
 "effet":"10 dégâts à la cible ; le héros gagne 16 de garde ; tous les ennemis brûlent : 2 par tour pendant 3 tours.",
 "ops":[["deg","cible",10],["garde","heros",16],["brulure","tous",2,3]],
 "tags":["Citadelle","Vent","Pôle +","Dégâts","Brûlure","Garde"],
 "ambiance":"Les pirogues ennemies cherchaient la côte dans la nuit ; elles n'ont eu qu'à ramer vers la lumière.",
 "budget":"36 / 36 (+0 %)"},
{"id":"CIT021-plus7","zone":"CIT021","pole":"+","palier":7,"nom":"Le Rempart-torche","cout":2,"cible":1,
 "effet":"Le rempart flambe comme une torche. Héros +20 de garde ; riposte 8 ; la cible brûle (4 par tour, 3 tours) ; cible −2 d'attaque. Pose Braise. Si Sceau (consommée) : héros +14 de garde ; riposte 9. Prix : cette carte s'exile.",
 "ops":[["garde","heros",20],["riposte",8],["brulure","cible",4,3],["affaiblit","cible",2],["pose","Braise"],["reveil","Sceau",true,[["garde","heros",14],["riposte",9]]],["exil"]],
 "tags":["Citadelle","Vent","Forme ultime +7","Brûlure","Affaiblissement","Riposte","Garde","Exil","Combo","Pose Braise","Réveil Sceau","Prix"],
 "ambiance":"Le rempart flambe au-dessus de la mer ; toute la côte le voit, et il ne garde plus rien.",
 "budget":"47 sans combo ; réveil +29,2 (62 %)"}
]
```

---

## Ressources (fiche légère, sans carte)

### Les Sauterelles d'Erṣet-Išāti (RES257) — Ressource · Savane · Feu · mésopotamienne

Geste : ramasser derrière le feu de brousse les sauterelles grillées. Objet : sauterelles. Chute : le prêtre qui condamne et qui achète.

```json
{"fiche":"RES257","nom":"Les Sauterelles d'Erṣet-Išāti",
 "recit":"Quand l'herbe de la savane brûle, les gens d'Erṣet-Išāti suivent le feu à quelques pas, courbés, et ramassent dans la cendre les sauterelles grillées. Bēlessunu les vend au marché du temple en cornets de feuilles. Le prêtre dit que c'est un fléau ; il en achète.",
 "pal":["Une ligne de feu basse dans l'herbe sèche, et derrière elle, dans la cendre, une femme courbée qui ramasse quelque chose.","La savane brûle en longs fronts ; derrière chaque front avance une ligne de ramasseurs courbés, et les cornets de feuilles se remplissent."]}
```

### Le Dictame de Kryoskopos (RES101) — Ressource · Glacier · Glace · grecque

Geste : cueillir le dictame au bord des crevasses avec une pince au bout d'une perche. Objet : dictame. Chute : le cueilleur qui n'a jamais été blessé.

```json
{"fiche":"RES101","nom":"Le Dictame de Kryoskopos",
 "recit":"Le dictame pousse au bord des crevasses du glacier, là où la glace a laissé la roche nue. Kallias le cueille à plat ventre, avec une pince au bout d'une perche. Les médecins jurent qu'il fait sortir les flèches des plaies. Kallias n'a jamais été blessé.",
 "pal":["Une crevasse bleue au bord du glacier, une touffe grise sur la roche, et une longue perche penchée au-dessus du vide.","Des perches penchées sur toutes les crevasses, des hommes couchés à plat ventre sur la glace, et des bottes de dictame qui sèchent."]}
```

### Les Arbouses de Kokkinolophos (RES355) — Ressource · Lande · Vent · byzantine

Geste : cueillir au crochet les arbouses des hautes branches pour l'eau-de-vie des moines. Objet : arbouses. Chute : le remède pris par précaution.

```json
{"fiche":"RES355","nom":"Les Arbouses de Kokkinolophos",
 "recit":"Sur la lande de Kokkinolophos, les arbousiers rougissent au cœur de l'hiver. Les moines cueillent les fruits au crochet sur les hautes branches et en tirent une eau-de-vie qu'ils déclarent médicinale. L'higoumène Theophylaktos en prend chaque soir, par précaution.",
 "pal":["Une lande rase sous le vent, quelques arbousiers couverts de fruits rouges, et un moine qui lève un crochet vers les branches.","Les arbousiers rouges jusqu'à l'horizon, les crochets levés de tous les moines, et l'alambic du monastère qui fume jour et nuit."]}
```

### Los Bolaños de Alcazarén (RES207) — Ressource · Cité en ruines · Pierre · andalouse

Geste : rouler hors des rues les boulets de pierre du siège pour bâtir le couvent. Objet : boulets de pierre. Chute : les assiégeants qui reconnaissent leur ouvrage.

```json
{"fiche":"RES207","nom":"Los Bolaños de Alcazarén",
 "recit":"Le siège d'Alcazarén a laissé dans les rues des boulets de pierre ronds comme des melons. Fray Ginés les fait rouler jusqu'au chantier du couvent, où on les monte en murs, au mortier. Le couvent est solide. Les anciens assiégeants viennent le visiter et reconnaissent leur ouvrage.",
 "pal":["Une rue de ruines mauresques, un boulet de pierre arrêté contre un seuil, et un moine qui le pousse du pied.","Des files de boulets qui roulent vers le chantier, et les murs du couvent qui montent, ronds et bosselés comme un tas de melons."]}
```

### Les Anches de Kalamóessa (RES208) — Ressource · Marais · Sève · grecque

Geste : couper les roseaux de l'année et les fendre en anches d'aulos. Objet : anches. Chute : l'oreille que l'artisan rend aux roseaux.

```json
{"fiche":"RES208","nom":"Les Anches de Kalamóessa",
 "recit":"Dans le marais de Kalamóessa, Lysimachos coupe les roseaux de l'année, les sèche un hiver, puis les fend en anches d'aulos. Il les essaie de son souffle et en jette beaucoup. Les joueurs disent qu'il a l'oreille ; lui dit qu'il a des roseaux.",
 "pal":["Une roselière grise au bord de l'eau, et un homme qui coupe une tige, la regarde de près, puis la jette.","Des barques chargées de bottes de roseaux, des anches qui sèchent sur des claies, et des sons de souffle qui sortent de chaque cabane."]}
```

### Les Opales de Wärq Amba (RES039) — Ressource · Haute montagne · Pierre · éthiopienne

Geste : gratter à la pointe les veines d'opale dans les talus après les pluies. Objet : opale. Chute : le feu que les marchands ne paient pas.

```json
{"fiche":"RES039","nom":"Les Opales de Wärq Amba",
 "recit":"Après les grandes pluies, les talus de Wärq Amba laissent voir des veines de pierre laiteuse. Les enfants les grattent au clou, puis les mouillent de salive pour voir bouger le feu dedans. Les marchands d'en bas les achètent au poids. Le feu, ils ne le paient pas.",
 "pal":["Un talus raviné après la pluie, une veine de pierre laiteuse, et un enfant qui la gratte à la pointe d'un clou.","Des talus grattés sur toute la montagne, des enfants qui crachent sur les pierres pour les faire briller, et des marchands qui attendent en bas."]}
```

### Le Natron de Lithoskala (RES130) — Ressource · Désert de sel · Pierre · byzantine

Geste : lever à la pelle le natron des lacs secs et le mouler en pains. Objet : natron. Chute : la transparence dont les verriers ignorent l'origine.

```json
{"fiche":"RES130","nom":"Le Natron de Lithoskala",
 "recit":"Les lacs secs de Lithoskala se couvrent chaque été d'une croûte grise. On la lève à la pelle et on la moule en pains pour les verriers de la capitale. Le logothète prélève sa part au passage. Les verriers ignorent d'où leur vient la transparence.",
 "pal":["Un lac sec sous le soleil, une croûte grise fendillée, et un homme qui la soulève à la pelle.","Des pains gris alignés sur le lac à perte de vue, des chariots qui partent vers la capitale, et un scribe qui écrit à l'ombre."]}
```

### La Soie de Byssiôn (RES125) — Ressource · Récif · Eau · byzantine

Geste : couper la touffe de soie des grandes nacres. Objet : soie de mer. Chute : l'étoffe impériale réduite à des gants.

```json
{"fiche":"RES125","nom":"La Soie de Byssiôn",
 "recit":"Sur le récif de Byssiôn, les plongeurs descendent jusqu'aux grandes nacres plantées dans le sable et coupent au couteau la touffe de fils dorés qui les tient. Lavée et filée, elle donne une étoffe que seule l'impératrice a le droit de porter. Elle en a des gants.",
 "pal":["Une eau claire sur un fond de sable, une grande nacre plantée de travers, et un plongeur qui tient un couteau.","Des plongeurs qui remontent des touffes dorées, des femmes qui les lavent au citron sur les rochers, et des fils qui brillent au soleil."]}
```

### Les Galets du four de Maunga Umu (RES249) — Ressource · Haute montagne · Pierre · polynésienne

Geste : éprouver au feu les galets du four de terre et garder ceux qui n'éclatent pas. Objet : pierres de four. Chute : les pierres prêtées qu'on ne rend pas.

*Note du critique (lot 7) : RES249 et RES004 sont renommées (« Les Pierres de… » et « Le Bois… » ouvraient déjà cinq et deux noms de Ressources en jeu).*

```json
{"fiche":"RES249","nom":"Les Galets du four de Maunga Umu",
 "recit":"Pour le four de terre, il faut des pierres qui supportent le feu. À Maunga Umu, Tamatea chauffe les galets de basalte un à un ; la plupart éclatent. Il garde ceux qui tiennent et les prête pour les fêtes. On les lui rend rarement.",
 "pal":["Un feu sur la pente, des galets noirs dans les braises, et le claquement sec d'une pierre qui éclate.","Des tas de galets fendus autour des feux et, à part sur une natte, les rares pierres qui ont tenu, marquées d'un trait."]}
```

### Les Caribous de Sermilinnguaq (RES179) — Ressource · Glacier · Glace · inuit

Geste : dégager à la hache les caribous que le glacier rend en reculant. Objet : viande gelée ancienne. Chute : les anciens qui refusent, les jeunes qui mangent.

```json
{"fiche":"RES179","nom":"Les Caribous de Sermilinnguaq",
 "recit":"En reculant, le glacier de Sermilinnguaq rend des caribous morts depuis si longtemps que personne n'en connaît la race. Aqqaluk les dégage à la hache. Les chiens mangent cette viande sans poser de questions. Les anciens n'y touchent pas. Les jeunes, si.",
 "pal":["Le front bleu du glacier, une forme brune prise dans la glace, et un homme qui la regarde, la hache à la main.","Des carcasses debout dans la glace bleue tout le long du front, des hommes qui taillent, et des chiens couchés qui attendent."]}
```

### Les Pontes de Kâmpong Rôlea (RES054) — Ressource · Fjord · Glace · khmère

Geste : immerger des branches de sapin pour que les harengs y pondent, puis les relever. Objet : œufs de hareng. Chute : les branches gardées d'une année sur l'autre.

```json
{"fiche":"RES054","nom":"Les Pontes de Kâmpong Rôlea",
 "recit":"Au printemps, les harengs entrent dans le fjord de Kâmpong Rôlea pour frayer. Les pêcheurs y plongent des branches de sapin lestées et les relèvent blanches d'œufs. On croque les œufs sur la branche. Sokha garde ses branches d'une année sur l'autre.",
 "pal":["Une eau grise et froide au pied des falaises, une branche de sapin lestée qui s'enfonce, et une barque qui s'éloigne.","Des branches relevées blanches d'œufs, couchées en rangs sur la grève, et des enfants qui les croquent à même le bois."]}
```

### La Pouzzolane d'Ardentia (RES276) — Ressource · Volcan · Feu · romaine

Geste : charger la pouzzolane rouge pour le mortier des jetées. Objet : pouzzolane. Chute : le volcan qui finira dans la mer.

```json
{"fiche":"RES276","nom":"La Pouzzolane d'Ardentia",
 "recit":"Sur les pentes d'Ardentia, les esclaves chargent la cendre rouge du volcan dans des chariots qui descendent jusqu'au port. Mêlée à la chaux, elle durcit sous l'eau, et l'on en bâtit les jetées. À ce train, dit l'ingénieur Vitalis, le volcan finira dans la mer.",
 "pal":["Une pente de cendre rouge sous le volcan, une pelle plantée, et un chariot qui attend, encore vide.","Des files de chariots rouges qui descendent vers le port, et des jetées neuves, rouges aussi, qui avancent dans la mer."]}
```

### Le Silphium de Psammathous (RES139) — Ressource · Désert de sable · Feu · grecque

Geste : inciser la racine du silphium et laisser sécher le suc. Objet : silphium. Chute : la garde qui fait vendre davantage.

```json
{"fiche":"RES139","nom":"Le Silphium de Psammathous",
 "recit":"Dans les dunes de Psammathous, le silphium ne pousse que sauvage : personne n'a jamais su le semer. On incise la racine, et le suc séché vaut son poids d'argent. Le gouverneur fait garder chaque touffe par un soldat. Les soldats coûtent cher ; on vend davantage de suc.",
 "pal":["Des dunes nues, une touffe de tiges jaunes dans un creux, et un soldat assis à côté qui s'ennuie.","Un soldat près de chaque touffe, des racines incisées qui pleurent un suc brun, et des marchands qui pèsent l'argent."]}
```

### Les Crocs de Kār-Tiāmti (RES004) — Ressource · Fjord · Glace · mésopotamienne

Geste : tirer au croc le bois flotté et l'empiler pour les fours à briques. Objet : bois flotté. Chute : le nom du roi sur la brique, aucun pour le bois.

```json
{"fiche":"RES004","nom":"Les Crocs de Kār-Tiāmti",
 "recit":"Rien ne pousse au fjord de Kār-Tiāmti, mais la mer y apporte des troncs blanchis venus d'on ne sait où. Les briquetiers les tirent au croc et les empilent près des fours. Chaque brique cuite porte le nom du roi. Le bois n'a jamais dit le sien.",
 "pal":["Une grève de galets gris, un tronc blanchi échoué par la marée, et un homme qui le tire au croc.","Des piles de bois blanchi le long des fours, la fumée des briques qui monte, et des troncs qui arrivent encore à chaque marée."]}
```

