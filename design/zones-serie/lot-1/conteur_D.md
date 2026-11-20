# Lot 1 : conteur D (le Lovecraftien)

Six zones à cartes (fiche + 14 cartes) et huit Ressources (fiche légère). Format : `CONSIGNES.md` et `cartes-2.2/consignes-cartes.md` sections 4, 6 et 7. Nombres fixes ; budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %. Conventions de calcul reprises de `conteur_D_paliers.md` : « tous » sur dégâts et brûlure ×2,2 ; « tous » sur hésite, affaiblit, vulnérable, brise-garde ×2,5 ennemis ; un effet sous condition (`si`) compte pour moitié ; `ignoreGarde` = 3 ; `volVie` = moitié des dégâts ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n. Chaque budget a été recalculé par script.

Recettes de récit (profil D) : document interrompu (Ixkabal, Emthonjeni), deux témoins (Amba Tsehel), temps profond (Kyrtè), arrivée (Abiétum), détail qui cloche (Yaxuntik).

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| CIT013 Ixkabal | Givre / Braise | Racine / Sceau |
| DON101 Amba Tsehel | Sang / Givre | Sceau / Abîme |
| ANT137 Kyrtè | Abîme / Racine | Braise / Sceau |
| ANT045 Abiétum | Givre / Abîme | Racine / Braise |
| ANT183 Yaxuntik | Abîme / Sang | Sceau / Racine |
| ASS115 Emthonjeni | Sceau / Braise | Racine / Sang |

Prix : 5 cartes à prix sur 7 pour chaque pôle de chaque zone (30 au pôle −, 30 au pôle +). Boost : une seule carte (La Mer safran, ANT183 +7). Invocations des Antres : au moins 3 par pôle.

## Notes pour le critique
- ANT183 : le pôle + s'appelle « Or » dans la liste ; c'est l'or du pollen et des fleurs safran, jamais du métal, pour respecter l'interdit de l'or au +7 (le mot « or » n'apparaît dans aucun palier).
- Deux zones Peste / Guérison : DON101 (glacier éthiopien, rouleaux de guérison, fièvre conservée ; cartes de frappe et de contagion) et ASS115 (oasis zouloue, peste du bétail et lait du figuier ; lois de quarantaine et soins de tout le camp).
- Deux zones mayas à cartes (CIT013 volcan, abeilles et cire ; ANT183 lande, cerfs et stèles) et trois Ressources mayas : palettes, matériaux et silhouettes différents.

---

## Ixkabal, la Citadelle des Ruches (CIT013 · Citadelle · Feu)

```json
{
 "fiche": "CIT013",
 "nom": "Ixkabal, la Citadelle des Ruches",
 "recit": "Inventaire de la garnison d'Ixkabal, saison des pluies, relevé par le capitaine Ek' Yaxum. Murailles : trois cent vingt troncs-ruches maçonnés dans la lave refroidie, tous habités. Vivres : douze jarres de miel, à rationner, la sentinelle du flanc est ayant dormi deux jours après sa part. Hommes : soixante, valides, la peau un peu tiède au toucher. Les abeilles butinent désormais la nuit, du côté des fumerolles, et rentrent plus lourdes. Ce matin, le tronc dix-sept a été trouvé plein jusqu'à l'embouchure, et les abeilles qui en sortaient n'avaient plus",
 "pal": [
  "Les troncs-ruches suintent un miel brun de tourbe ; les abeilles mortes font des talus le long des murs, toutes la tête tournée vers le cratère.",
  "Remparts de lave tachés de soufre, sentinelles aux lèvres engourdies ; les abeilles rentrent aux ruches en volant à reculons.",
  "Forteresse maya de basalte et de stuc blanc sur le flanc d'un volcan, troncs-ruches scellés de boue dans les murs, panache de fumée, bourdonnement bas.",
  "Le miel déborde des embouchures et sèche en coulures ambrées sur les créneaux ; fleurs pourpres dans les fissures chaudes, gardes à la peau poisseuse.",
  "Les murs ont disparu sous des rayons de cire blonde qui respirent ; le cratère est en fleur, et chaque soldat dort la bouche ouverte sur un essaim."
 ],
 "pm": "Poison",
 "pp": "Nectar"
}
```

### Pôle − Poison

Progression : la piqûre de la sentinelle, la part de miel fou, les fumerolles butinées, le mortier de cire soufrée, les lèvres engourdies, les talus d'abeilles mortes, puis le fort entier devient un rempart de dards. Style : Garde qui pique (riposte), venin qui affaiblit et brûle ; le prix se paie en PV.

```json
[
{"id": "CIT013-moins-1", "zone": "CIT013", "pole": "-", "palier": 1, "nom": "La piqûre de la sentinelle", "cout": 1, "cible": 0, "effet": "Le héros gagne 6 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 3 dégâts.", "ops": [["garde", "heros", 6], ["riposte", 3]], "tags": ["Citadelle", "Feu", "Pôle −", "Garde", "Riposte"], "ambiance": "Ek' Yaxum compte les dards plantés dans le bouclier de la sentinelle : tous pointent vers l'intérieur du bouclier.", "budget": "10,8 (cible 10 ; vérifié)"},
{"id": "CIT013-moins-2", "zone": "CIT013", "pole": "-", "palier": 2, "nom": "La part de miel fou", "cout": 1, "cible": 1, "effet": "La cible perd 2 d'attaque pour le combat et brûle de 3 sur 2 tours. Le héros gagne 4 de garde et perd 3 PV.", "ops": [["affaiblit", "cible", 2], ["brulure", "cible", 3, 2], ["garde", "heros", 4], ["prixPV", 3]], "tags": ["Citadelle", "Feu", "Pôle −", "Affaiblissement", "Brûlure", "Garde", "Prix"], "ambiance": "Une cuillerée de miel brun par homme et par jour ; la sentinelle du flanc est en redemande.", "budget": "12,2 (cible 12,5 ; vérifié)"},
{"id": "CIT013-moins-3", "zone": "CIT013", "pole": "-", "palier": 3, "nom": "Les fumerolles butinées", "cout": 1, "cible": 0, "effet": "Tous les ennemis brûlent de 2 sur 3 tours ; jusqu'au prochain tour, chaque coup reçu renvoie 2 dégâts. Le héros perd 2 PV.", "ops": [["brulure", "tous", 2, 3], ["riposte", 2], ["prixPV", 2]], "tags": ["Citadelle", "Feu", "Pôle −", "Brûlure", "Riposte", "Prix"], "ambiance": "Les abeilles d'Ixkabal sortent après la tombée du jour et reviennent du cratère avec du soufre aux pattes.", "budget": "15,2 (cible 15 ; vérifié)"},
{"id": "CIT013-moins-4", "zone": "CIT013", "pole": "-", "palier": 4, "nom": "Le mortier de cire soufrée", "cout": 2, "cible": 0, "effet": "Le héros gagne 20 de garde ; jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Si la Garde était déjà levée : tous les ennemis perdent 1 d'attaque.", "ops": [["garde", "heros", 20], ["riposte", 4], ["si", "garde", [["affaiblit", "tous", 1]]]], "tags": ["Citadelle", "Feu", "Pôle −", "Garde", "Riposte", "Condition", "Affaiblissement"], "ambiance": "On rejointoie les troncs-ruches avec la cire des rayons morts ; le mur est plus chaud le lendemain.", "budget": "27,75 (cible 28 ; vérifié)"},
{"id": "CIT013-moins-5", "zone": "CIT013", "pole": "-", "palier": 5, "nom": "Les lèvres engourdies", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 2 d'attaque ; la cible hésite et brûle de 4 sur 3 tours. Le héros gagne 8 de garde et perd 6 PV.", "ops": [["affaiblit", "tous", 2], ["hesite", "cible"], ["brulure", "cible", 4, 3], ["garde", "heros", 8], ["prixPV", 6]], "tags": ["Citadelle", "Feu", "Pôle −", "Affaiblissement", "Contrôle", "Brûlure", "Garde", "Prix"], "ambiance": "Les sentinelles d'Ixkabal ne sentent plus leurs lèvres ; elles crient encore les relèves, sans un son.", "budget": "32,4 (cible 32 ; vérifié)"},
{"id": "CIT013-moins-6", "zone": "CIT013", "pole": "-", "palier": 6, "nom": "Les talus d'abeilles", "cout": 2, "cible": 0, "effet": "Le héros gagne 18 de garde et renvoie 5 dégâts par coup reçu jusqu'au prochain tour ; tous les ennemis brûlent de 2 sur 3 tours. Si le héros est sous la moitié de ses PV : tous perdent 1 d'attaque. −5 PV.", "ops": [["garde", "heros", 18], ["riposte", 5], ["brulure", "tous", 2, 3], ["si", "blesse", [["affaiblit", "tous", 1]]], ["prixPV", 5]], "tags": ["Citadelle", "Feu", "Pôle −", "Garde", "Riposte", "Brûlure", "Condition", "Affaiblissement", "Prix"], "ambiance": "On balaie les abeilles mortes au pied des remparts ; le lendemain, le talus est revenu, à la même hauteur.", "budget": "36,35 (cible 36 ; vérifié)"},
{"id": "CIT013-moins7", "zone": "CIT013", "pole": "-", "palier": 7, "nom": "Le Rempart de dards", "cout": 2, "cible": 0, "effet": "Le fort se hérisse : 25 de garde, riposte 6 jusqu'au prochain tour ; tous les ennemis perdent 2 d'attaque et brûlent de 2 sur 2 tours. −6 PV. Pose Givre. Si Braise (consommée) : tous brûlent de 4 sur 3 tours et perdent 1 d'attaque.", "ops": [["garde", "heros", 25], ["riposte", 6], ["affaiblit", "tous", 2], ["brulure", "tous", 2, 2], ["prixPV", 6], ["pose", "Givre"], ["reveil", "Braise", true, [["brulure", "tous", 4, 3], ["affaiblit", "tous", 1]]]], "tags": ["Citadelle", "Feu", "Forme ultime −7", "Garde", "Riposte", "Affaiblissement", "Brûlure", "Prix", "Pose Givre", "Réveil Braise"], "ambiance": "Il n'y a plus de murs à Ixkabal : un talus d'abeilles mortes, dard dehors, que le cratère tient chaud.", "budget": "49,8 (+33,9 si Braise, soit +68 % ; vérifié)"}
]
```

### Pôle + Nectar

Progression : une jarre de miel clair, un essaim sans dard, le tronc dix-sept, les créneaux ambrés, la garnison sucrée, la peau poisseuse, puis le cratère fleurit et la garnison devient essaim. Style : soins et garde pour tout le camp, essaims qui tiennent le terrain ; le prix nourrit l'ennemi ou blesse les essaims.

```json
[
{"id": "CIT013-plus-1", "zone": "CIT013", "pole": "+", "palier": 1, "nom": "La jarre de miel clair", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 8 et gagne 5 de garde. Le miel se partage : chaque ennemi se soigne de 1.", "ops": [["soin", "heros", 8], ["garde", "heros", 5], ["ennemiSoin", 1]], "tags": ["Citadelle", "Feu", "Pôle +", "Soin", "Garde", "Prix"], "ambiance": "La douzième jarre d'Ixkabal est la seule qu'on n'ait pas rationnée ; elle est restée pleine toute la saison.", "budget": "9,8 (cible 10 ; vérifié)"},
{"id": "CIT013-plus-2", "zone": "CIT013", "pole": "+", "palier": 2, "nom": "L'essaim sans dard", "cout": 1, "cible": 0, "effet": "Un essaim d'Ixkabal se pose devant vous : 10 PV, frappe 3. Le héros se soigne de 3.", "ops": [["invoque", "Essaim d'Ixkabal", 10, 3], ["soin", "heros", 3]], "tags": ["Citadelle", "Feu", "Pôle +", "Invocation", "Soin"], "ambiance": "Elles n'ont pas de dard, les abeilles d'Ixkabal ; elles se posent sur les plaies et lèchent.", "budget": "12,5 (cible 12,5 ; vérifié)"},
{"id": "CIT013-plus-3", "zone": "CIT013", "pole": "+", "palier": 3, "nom": "Le tronc dix-sept", "cout": 2, "cible": 0, "effet": "Le tronc plein s'ouvre : une bête de 16 PV qui frappe 4. Vos alliés gagnent 12 de garde ; si une bête était déjà en jeu, ils se soignent de 6. Défaussez 1 carte au hasard.", "ops": [["invoque", "Tronc-ruche plein", 16, 4], ["garde", "allies", 12], ["si", "bete", [["soin", "allies", 6]]], ["prixDefausse", 1]], "tags": ["Citadelle", "Feu", "Pôle +", "Invocation", "Garde", "Condition", "Soin", "Prix"], "ambiance": "Le tronc dix-sept est plein jusqu'à l'embouchure ; on l'a descellé, et il pesait plus lourd vide.", "budget": "23,6 (cible 24 ; vérifié)"},
{"id": "CIT013-plus-4", "zone": "CIT013", "pole": "+", "palier": 4, "nom": "Les créneaux ambrés", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 12 de garde et se soignent de 8.", "ops": [["garde", "allies", 12], ["soin", "allies", 8]], "tags": ["Citadelle", "Feu", "Pôle +", "Garde", "Soin"], "ambiance": "Les coulures de miel ont durci sur les créneaux d'Ixkabal ; les flèches s'y plantent et y restent, tièdes.", "budget": "17,6 (cible 17,5 ; vérifié)"},
{"id": "CIT013-plus-5", "zone": "CIT013", "pole": "+", "palier": 5, "nom": "La garnison sucrée", "cout": 2, "cible": 0, "effet": "Vos alliés se soignent de 12 et gagnent 15 de garde ; un essaim d'Ixkabal se lève (10 PV, frappe 3) ; piochez 1 carte. Chaque ennemi se soigne de 2.", "ops": [["soin", "allies", 12], ["garde", "allies", 15], ["invoque", "Essaim d'Ixkabal", 10, 3], ["pioche", 1], ["ennemiSoin", 2]], "tags": ["Citadelle", "Feu", "Pôle +", "Soin", "Garde", "Invocation", "Pioche", "Prix"], "ambiance": "Soixante hommes, tous valides ; le capitaine note qu'ils sourient pendant les gardes de nuit, et qu'ils sentent la fleur.", "budget": "33,1 (cible 32 ; vérifié)"},
{"id": "CIT013-plus-6", "zone": "CIT013", "pole": "+", "palier": 6, "nom": "La peau poisseuse", "cout": 2, "cible": 0, "effet": "Un garde-essaim se lève : 24 PV, frappe 6. Vos alliés se soignent de 10 ; si une bête était déjà en jeu, ils gagnent 12 de garde. Piochez 1 carte. Votre bête la plus faible perd 4 PV.", "ops": [["invoque", "Garde-essaim", 24, 6], ["soin", "allies", 10], ["si", "bete", [["garde", "allies", 12]]], ["pioche", 1], ["prixBete", 4]], "tags": ["Citadelle", "Feu", "Pôle +", "Invocation", "Soin", "Condition", "Garde", "Pioche", "Prix"], "ambiance": "Le garde de la porte est couvert d'abeilles du cou aux chevilles ; il dit qu'il a chaud.", "budget": "35,8 (cible 36 ; vérifié)"},
{"id": "CIT013-plus7", "zone": "CIT013", "pole": "+", "palier": 7, "nom": "Le Cratère en fleur", "cout": 3, "cible": 0, "effet": "La garnison devient essaim : deux bêtes (20 PV, frappe 6 ; 16 PV, frappe 3), vos alliés se soignent de 12 et gagnent 10 de garde. Chaque ennemi se soigne de 2. Pose Racine. Si Sceau (consommé) : piochez 4, +2 mana Feu, écho, récupérez.", "ops": [["invoque", "Essaim-capitaine", 20, 6], ["invoque", "Rayon de cire blonde", 16, 3], ["soin", "allies", 12], ["garde", "allies", 10], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sceau", true, [["pioche", 4], ["mana", "Feu", 2], ["echo"], ["recup"]]]], "tags": ["Citadelle", "Feu", "Forme ultime +7", "Invocation", "Soin", "Garde", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Le cratère d'Ixkabal fleurit en pourpre ; la garnison s'y couche, et chaque bouche ouverte bourdonne doucement.", "budget": "47,1 (+32 si Sceau, soit +68 % ; vérifié)"}
]
```

---

## L'Ermitage-Glacier d'Amba Tsehel (DON101 · Donjon · Glace)

```json
{
 "fiche": "DON101",
 "nom": "L'Ermitage-Glacier d'Amba Tsehel",
 "recit": "Deux récits de l'ermitage d'Amba Tsehel, creusé dans la langue d'un glacier. Selon le debtera Wolde Haylu, qui y coupait les rouleaux de guérison à la taille exacte de chaque malade, les cellules de glace soignaient une fièvre en une nuit, et les pèlerins redescendaient roses et affamés. Selon la pèlerine Tsige, la glace ne guérissait rien : elle conservait la fièvre, intacte, dans des corps qui ne refroidissaient plus, qu'on rangeait un peu plus bas chaque hiver. Tous deux ont mesuré les rouleaux que le glacier rend au printemps. Ils dépassent leurs porteurs d'une coudée.",
 "pal": [
  "Le glacier est veiné de jaune de bile ; dans chaque cellule un malade assis, rouge de fièvre, dont le souffle a fondu une alcôve parfaite autour de lui.",
  "Glace teintée de lie-de-vin, rouleaux tachés laissés sur les seuils ; les pèlerins emmitouflés toussent tous à la même seconde.",
  "Ermitage taillé dans la glace bleue d'un amba, croix ajourées, cierges de cire brune, moines en toges blanches et debteras penchés sur leurs rouleaux.",
  "La glace suinte une eau tiède et laiteuse, des mousses pâles gagnent les parois ; les convalescents dorment debout, la joue contre le mur, en souriant.",
  "Le glacier a fondu en une gorge claire et muette ; les rouleaux se déroulent seuls sur des lieues, et les guéris, une tête plus grands, s'y tiennent alignés."
 ],
 "pm": "Peste",
 "pp": "Guérison"
}
```

### Pôle − Peste

Progression : la toux à la même seconde, la fièvre gardée au froid, les seuils tachés, la cellule plus bas, le malade qui ne refroidit pas, l'alcôve de fonte, puis le glacier rend toute sa fièvre d'un coup. Style : contagion de zone (brûlures, marques, pièges), payée en PV.

```json
[
{"id": "DON101-moins-1", "zone": "DON101", "pole": "-", "palier": 1, "nom": "La toux à la même seconde", "cout": 1, "cible": 1, "effet": "3 dégâts à la cible ; elle brûle de 2 sur 2 tours et devient vulnérable 1.", "ops": [["deg", "cible", 3], ["brulure", "cible", 2, 2], ["vulnerable", "cible", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Brûlure", "Marque"], "ambiance": "Dans le couloir des cellules d'Amba Tsehel, les pèlerins toussent ensemble, puis se taisent ensemble, et attendent.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON101-moins-2", "zone": "DON101", "pole": "-", "palier": 2, "nom": "La fièvre gardée au froid", "cout": 1, "cible": 1, "effet": "6 dégâts à la cible ; tous les ennemis brûlent de 2 sur 2 tours. Le héros perd 3 PV.", "ops": [["deg", "cible", 6], ["brulure", "tous", 2, 2], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Brûlure", "Prix"], "ambiance": "Tsige pose la main sur la glace de la cellule : froide en surface, chaude une paume plus loin.", "budget": "11,8 (cible 12,5 ; vérifié)"},
{"id": "DON101-moins-3", "zone": "DON101", "pole": "-", "palier": 3, "nom": "Les seuils tachés", "cout": 1, "cible": 0, "effet": "Piège : jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Tous les ennemis brûlent de 2 sur 2 tours. Le héros perd 2 PV.", "ops": [["riposte", 4], ["brulure", "tous", 2, 2], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle −", "Riposte", "Brûlure", "Prix"], "ambiance": "Les rouleaux souillés sont laissés sur les seuils ; quiconque les enjambe rentre chez lui avec la même toux.", "budget": "14,8 (cible 15 ; vérifié)"},
{"id": "DON101-moins-4", "zone": "DON101", "pole": "-", "palier": 4, "nom": "La cellule plus bas", "cout": 2, "cible": 1, "effet": "14 dégâts à la cible ; elle devient vulnérable 2 et brûle de 4 sur 3 tours. Défaussez 1 carte au hasard.", "ops": [["deg", "cible", 14], ["vulnerable", "cible", 2], ["brulure", "cible", 4, 3], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Marque", "Brûlure", "Prix"], "ambiance": "Chaque hiver, on descend les fiévreux d'un étage ; l'escalier taillé par les moines compte une marche de plus.", "budget": "29 (cible 28 ; vérifié)"},
{"id": "DON101-moins-5", "zone": "DON101", "pole": "-", "palier": 5, "nom": "Le malade qui ne refroidit pas", "cout": 2, "cible": 1, "effet": "7 dégâts à tous ; tous les ennemis deviennent vulnérables 1 ; la cible brûle de 3 sur 3 tours.", "ops": [["deg", "tous", 7], ["vulnerable", "tous", 1], ["brulure", "cible", 3, 3]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Marque", "Brûlure"], "ambiance": "Le moine de la cellule basse a la peau rouge et sèche ; il est là depuis le règne d'avant.", "budget": "31,9 (cible 32 ; vérifié)"},
{"id": "DON101-moins-6", "zone": "DON101", "pole": "-", "palier": 6, "nom": "L'alcôve de fonte", "cout": 2, "cible": 0, "effet": "9 dégâts à tous ; la garde ennemie tombe ; tous les ennemis brûlent de 3 sur 2 tours. Le héros perd 5 PV.", "ops": [["deg", "tous", 9], ["briseGarde", "tous"], ["brulure", "tous", 3, 2], ["prixPV", 5]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Perce-garde", "Brûlure", "Prix"], "ambiance": "Autour de chaque malade, la glace a fondu en une niche exacte, lisse comme un moule, qui ne regèle pas.", "budget": "35,5 (cible 36 ; vérifié)"},
{"id": "DON101-moins7", "zone": "DON101", "pole": "-", "palier": 7, "nom": "La Fièvre rendue", "cout": 2, "cible": 0, "effet": "Le glacier rend ses malades : 10 dégâts à tous, la garde ennemie tombe, tous brûlent de 3 sur 3 tours et deviennent vulnérables 1. −6 PV. Pose Sang. Si Givre (consommé) : tous hésitent, perdent 2 d'attaque et subissent 5 dégâts.", "ops": [["deg", "tous", 10], ["briseGarde", "tous"], ["brulure", "tous", 3, 3], ["vulnerable", "tous", 1], ["prixPV", 6], ["pose", "Sang"], ["reveil", "Givre", true, [["hesite", "tous"], ["affaiblit", "tous", 2], ["deg", "tous", 5]]]], "tags": ["Donjon", "Glace", "Forme ultime −7", "Dégâts", "Perce-garde", "Brûlure", "Marque", "Prix", "Pose Sang", "Réveil Givre"], "ambiance": "Au printemps, Amba Tsehel s'ouvre de haut en bas, et la fièvre gardée là-dedans depuis des siècles sort tiède.", "budget": "50,8 (+36 si Givre, soit +71 % ; vérifié)"}
]
```

### Pôle + Guérison

Progression : le rouleau coupé à la taille, le lait de la glace, les convalescents debout, la coudée de plus, l'eau tiède, les guéris qui grandissent, puis le rouleau se déroule sur toute la salle. Style : frappes uniques qui percent et soignent le héros ; le prix renforce la garde ennemie ou coûte des cartes.

```json
[
{"id": "DON101-plus-1", "zone": "DON101", "pole": "+", "palier": 1, "nom": "Le rouleau à la taille", "cout": 1, "cible": 1, "effet": "7 dégâts à la cible, qui ignorent sa garde ; le héros se soigne de la moitié. Défaussez 1 carte au hasard.", "ops": [["deg", "cible", 7], ["ignoreGarde"], ["volVie"], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Vol de vie", "Prix"], "ambiance": "Wolde Haylu étend le malade sur le parchemin et coupe au couteau, juste au-dessus du crâne, sans mesurer.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "DON101-plus-2", "zone": "DON101", "pole": "+", "palier": 2, "nom": "Le lait de la glace", "cout": 1, "cible": 1, "effet": "8 dégâts à la cible ; le héros se soigne de 8. Chaque ennemi gagne 2 de garde.", "ops": [["deg", "cible", 8], ["soin", "heros", 8], ["ennemiGarde", 2]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Soin", "Prix"], "ambiance": "L'eau qui coule des parois d'Amba Tsehel est blanche et tiède ; les pèlerins la boivent dans leurs mains.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "DON101-plus-3", "zone": "DON101", "pole": "+", "palier": 3, "nom": "Les convalescents debout", "cout": 1, "cible": 0, "effet": "Un convalescent endormi se lève et vous suit : 12 PV, frappe 3. Le héros se soigne de 5.", "ops": [["invoque", "Convalescent endormi", 12, 3], ["soin", "heros", 5]], "tags": ["Donjon", "Glace", "Pôle +", "Invocation", "Soin"], "ambiance": "Il dort debout, la joue contre la glace, et il marche quand vous marchez, sans ouvrir les yeux.", "budget": "15,5 (cible 15 ; vérifié)"},
{"id": "DON101-plus-4", "zone": "DON101", "pole": "+", "palier": 4, "nom": "La coudée de plus", "cout": 2, "cible": 1, "effet": "18 dégâts à la cible, qui ignorent sa garde ; le héros se soigne de la moitié. Défaussez 1 carte au hasard.", "ops": [["deg", "cible", 18], ["ignoreGarde"], ["volVie"], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Perce-garde", "Vol de vie", "Prix"], "ambiance": "Le rouleau rendu par le glacier dépasse son porteur d'une coudée ; le porteur, lui, a l'air de s'en réjouir.", "budget": "27 (cible 28 ; vérifié)"},
{"id": "DON101-plus-5", "zone": "DON101", "pole": "+", "palier": 5, "nom": "L'eau tiède", "cout": 2, "cible": 1, "effet": "Le héros se soigne de 12 et gagne 10 de garde ; piochez 1 carte. S'il est sous la moitié de ses PV : 16 dégâts à la cible.", "ops": [["soin", "heros", 12], ["garde", "heros", 10], ["pioche", 1], ["si", "blesse", [["deg", "cible", 16]]]], "tags": ["Donjon", "Glace", "Pôle +", "Soin", "Garde", "Pioche", "Condition", "Dégâts"], "ambiance": "Les debteras font descendre les fiévreux dans la mare de fonte ; ils en remontent roses, et réclament à manger.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "DON101-plus-6", "zone": "DON101", "pole": "+", "palier": 6, "nom": "Les guéris grandissent", "cout": 2, "cible": 1, "effet": "20 dégâts à la cible ; le héros se soigne de la moitié et de 6 de plus ; la cible devient vulnérable 2. Chaque ennemi gagne 3 de garde.", "ops": [["deg", "cible", 20], ["volVie"], ["soin", "heros", 6], ["vulnerable", "cible", 2], ["ennemiGarde", 3]], "tags": ["Donjon", "Glace", "Pôle +", "Dégâts", "Vol de vie", "Soin", "Marque", "Prix"], "ambiance": "Les pèlerins guéris d'Amba Tsehel baissent la tête pour franchir les portes qu'ils passaient debout à l'aller.", "budget": "36 (cible 36 ; vérifié)"},
{"id": "DON101-plus7", "zone": "DON101", "pole": "+", "palier": 7, "nom": "Le Rouleau déroulé", "cout": 3, "cible": 0, "effet": "Le rouleau couvre la salle : 4 coups de 8 dégâts au hasard, le héros se soigne de la moitié, vos alliés de 8. Chaque ennemi gagne 3 de garde. Pose Sceau. Si Abîme (consommé) : la garde ennemie tombe, 12 dégâts à tous.", "ops": [["deg", "hasard", 8, 4], ["volVie"], ["soin", "allies", 8], ["ennemiGarde", 3], ["pose", "Sceau"], ["reveil", "Abîme", true, [["briseGarde", "tous"], ["deg", "tous", 12]]]], "tags": ["Donjon", "Glace", "Forme ultime +7", "Dégâts", "Vol de vie", "Soin", "Prix", "Pose Sceau", "Réveil Abîme"], "ambiance": "Le dernier rouleau de Wolde Haylu sort de l'ermitage, descend la gorge et continue, mesuré pour quelqu'un de très grand.", "budget": "50 (+33,9 si Abîme, soit +68 % ; vérifié)"}
]
```

---

## La Coupole noyée de Kyrtè (ANT137 · Antre · Sève)

```json
{
 "fiche": "ANT137",
 "nom": "La Coupole noyée de Kyrtè",
 "recit": "Le marais de Kyrtè a mis neuf mille ans à empiler sa tourbe, une couche de sphaigne par été, et chaque couche a gardé ce qui y tombait : des aulnes, des aurochs, des crapauds à peau épaisse dont l'espèce n'a plus changé depuis. L'higoumène Arsénios y bâtit une église et fit poser dans sa coupole un ciel de tesselles bleues semé d'étoiles blanches ; en quatre générations, la tourbe l'avala jusqu'au tambour. Les crapauds pondent depuis dans la coupole. Au printemps, leurs cordons d'œufs dessinent sur l'eau les étoiles de la mosaïque. Toutes, sauf une.",
 "pal": [
  "La tourbe s'est affaissée en un puits brun ; la coupole béante n'a plus une tesselle, et des crapauds blancs de larve y descendent un à un.",
  "Eau stagnante couleur de bile, sphaignes qui pâlissent, tesselles tombées au fond ; chaque crapaud porte au ventre le poids d'une pierre avalée.",
  "Tourbière d'aulnes et de joncs, tambour de briques d'une église byzantine sorti de l'eau, coupole bleue étoilée sous la sphaigne, coassements du soir.",
  "Cordons d'œufs luisants entre les joncs, brume couleur de lait ; la nuit, le marais s'allume d'étoiles basses qui clignent toutes ensemble.",
  "Un frai noir piqué de points blancs couvre la coupole et le marais jusqu'à l'horizon ; dans le ciel nocturne, il manque une étoile par œuf."
 ],
 "pm": "Vide",
 "pp": "Étoiles"
}
```

### Pôle − Vide

Progression : un crapaud avale une tesselle, la sphaigne pâlit, le coassement s'inverse, les tesselles tombent au fond, le crapaud-gouffre se lève, le puits s'affaisse, puis la coupole devient une gueule. Style : peu de bêtes mais lourdes, qui crèvent la garde et dévorent ; le prix se paie en cartes et en bêtes.

```json
[
{"id": "ANT137-moins-1", "zone": "ANT137", "pole": "-", "palier": 1, "nom": "Le crapaud lesté", "cout": 1, "cible": 1, "effet": "Un crapaud lesté d'une tesselle sort de la tourbe : 6 PV, frappe 3. La garde de la cible tombe.", "ops": [["invoque", "Crapaud lesté", 6, 3], ["briseGarde", "cible"]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Perce-garde"], "ambiance": "Il a avalé une tesselle bleue de la coupole de Kyrtè ; on l'entend cliqueter quand il saute.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "ANT137-moins-2", "zone": "ANT137", "pole": "-", "palier": 2, "nom": "La sphaigne qui pâlit", "cout": 1, "cible": 1, "effet": "9 dégâts à la cible, qui ignorent sa garde. Si une bête est en jeu : 6 dégâts de plus. Défaussez 1 carte au hasard.", "ops": [["deg", "cible", 9], ["ignoreGarde"], ["si", "bete", [["deg", "cible", 6]]], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle −", "Dégâts", "Perce-garde", "Condition", "Prix"], "ambiance": "La sphaigne de Kyrtè blanchit par plaques rondes, de la taille exacte d'un crapaud assis.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "ANT137-moins-3", "zone": "ANT137", "pole": "-", "palier": 3, "nom": "Le coassement à l'envers", "cout": 1, "cible": 1, "effet": "Un crapaud blanc remonte du fond : 12 PV, frappe 4. La cible hésite ce tour. Votre bête la plus faible perd 2 PV.", "ops": [["invoque", "Crapaud blanc", 12, 4], ["hesite", "cible"], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Contrôle", "Prix"], "ambiance": "Le soir, le marais de Kyrtè coasse à rebours, de la fin du chant vers son début, puis se tait.", "budget": "15 (cible 15 ; vérifié)"},
{"id": "ANT137-moins-4", "zone": "ANT137", "pole": "-", "palier": 4, "nom": "Les tesselles au fond", "cout": 2, "cible": 0, "effet": "La garde ennemie tombe ; 6 dégâts à tous ; la cible devient vulnérable 1. Si une bête est en jeu : tous les ennemis hésitent.", "ops": [["briseGarde", "tous"], ["deg", "tous", 6], ["vulnerable", "cible", 1], ["si", "bete", [["hesite", "tous"]]]], "tags": ["Antre", "Sève", "Pôle −", "Perce-garde", "Dégâts", "Marque", "Condition", "Contrôle"], "ambiance": "Le ciel d'Arsénios tombe tesselle par tesselle dans l'eau brune ; au fond, elles sont rangées par couleur.", "budget": "28,7 (cible 28 ; vérifié)"},
{"id": "ANT137-moins-5", "zone": "ANT137", "pole": "-", "palier": 5, "nom": "Le crapaud-gouffre", "cout": 2, "cible": 1, "effet": "Le crapaud-gouffre se hisse hors de la coupole : 30 PV, frappe 8. La garde de la cible tombe et elle hésite. Défaussez 1 carte au hasard.", "ops": [["invoque", "Crapaud-gouffre", 30, 8], ["briseGarde", "cible"], ["hesite", "cible"], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Perce-garde", "Contrôle", "Prix"], "ambiance": "Il remplit le tambour de l'église comme un bouchon ; sa gorge bat au rythme où l'eau baisse.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "ANT137-moins-6", "zone": "ANT137", "pole": "-", "palier": 6, "nom": "Le puits qui s'affaisse", "cout": 2, "cible": 1, "effet": "18 dégâts à la cible, qui ignorent sa garde ; elle perd 2 d'attaque et devient vulnérable 2. Si une bête est en jeu : 12 dégâts de plus. Votre bête la plus faible perd 4 PV.", "ops": [["deg", "cible", 18], ["ignoreGarde"], ["affaiblit", "cible", 2], ["vulnerable", "cible", 2], ["si", "bete", [["deg", "cible", 12]]], ["prixBete", 4]], "tags": ["Antre", "Sève", "Pôle −", "Dégâts", "Perce-garde", "Affaiblissement", "Marque", "Condition", "Prix"], "ambiance": "La tourbe de Kyrtè descend d'une paume par nuit vers la coupole ouverte, avec les aulnes debout dessus.", "budget": "35 (cible 36 ; vérifié)"},
{"id": "ANT137-moins7", "zone": "ANT137", "pole": "-", "palier": 7, "nom": "La Gueule de Kyrtè", "cout": 3, "cible": 0, "effet": "La coupole s'ouvre : 12 dégâts à tous, qui ignorent la garde, la garde ennemie tombe, une gueule de tourbe se lève (20 PV, frappe 6). Bête la plus faible −6 PV, défaussez 1. Pose Abîme. Si Racine (consommée) : 22 dégâts à la cible, tous hésitent.", "ops": [["deg", "tous", 12], ["ignoreGarde"], ["briseGarde", "tous"], ["invoque", "Gueule de tourbe", 20, 6], ["prixBete", 6], ["prixDefausse", 1], ["pose", "Abîme"], ["reveil", "Racine", true, [["deg", "cible", 22], ["hesite", "tous"]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Dégâts", "Perce-garde", "Invocation", "Prix", "Pose Abîme", "Réveil Racine"], "ambiance": "Neuf mille ans de tourbe s'ouvrent au milieu du ciel d'Arsénios, et les crapauds blancs y entrent en file.", "budget": "46,9 (+32 si Racine, soit +68 % ; vérifié)"}
]
```

### Pôle + Étoiles

Progression : un cordon d'œufs, les étoiles basses, le têtard à une étoile, la brume de lait, le frai sur la coupole, une étoile par œuf, puis le ciel descend dans le marais. Style : beaucoup de petites bêtes, brûlures lumineuses sur tous et pioche ; le prix soigne l'ennemi, coûte des PV ou une bête.

```json
[
{"id": "ANT137-plus-1", "zone": "ANT137", "pole": "+", "palier": 1, "nom": "Un cordon d'œufs", "cout": 1, "cible": 1, "effet": "Un têtard luisant éclot : 8 PV, frappe 3. La cible brûle de 2 sur 2 tours. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Têtard luisant", 8, 3], ["brulure", "cible", 2, 2], ["ennemiSoin", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Brûlure", "Prix"], "ambiance": "Les œufs de Kyrtè brillent faiblement dans les joncs, chacun à la place exacte d'une étoile de la coupole.", "budget": "10,3 (cible 10 ; vérifié)"},
{"id": "ANT137-plus-2", "zone": "ANT137", "pole": "+", "palier": 2, "nom": "Les étoiles basses", "cout": 1, "cible": 1, "effet": "Tous les ennemis brûlent de 2 sur 3 tours ; 2 dégâts à la cible. Le héros perd 2 PV.", "ops": [["brulure", "tous", 2, 3], ["deg", "cible", 2], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle +", "Brûlure", "Dégâts", "Prix"], "ambiance": "Les feux du marais clignent tous ensemble, puis se rallument un par un, dans l'ordre de la mosaïque.", "budget": "13,2 (cible 12,5 ; vérifié)"},
{"id": "ANT137-plus-3", "zone": "ANT137", "pole": "+", "palier": 3, "nom": "Le têtard à une étoile", "cout": 1, "cible": 0, "effet": "Un têtard-étoile éclot : 10 PV, frappe 3. Piochez 1 carte. Si une bête était déjà en jeu : la cible brûle de 2 sur 2 tours.", "ops": [["invoque", "Têtard-étoile", 10, 3], ["pioche", 1], ["si", "bete", [["brulure", "cible", 2, 2]]]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Pioche", "Condition", "Brûlure"], "ambiance": "Chaque têtard porte sur le dos un point blanc ; les pêcheurs disent l'avoir vu au ciel la veille.", "budget": "15,5 (cible 15 ; vérifié)"},
{"id": "ANT137-plus-4", "zone": "ANT137", "pole": "+", "palier": 4, "nom": "La brume de lait", "cout": 2, "cible": 0, "effet": "Tous les ennemis brûlent de 3 sur 3 tours et deviennent vulnérables 1. Piochez 1 carte. Défaussez 1 carte au hasard.", "ops": [["brulure", "tous", 3, 3], ["vulnerable", "tous", 1], ["pioche", 1], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Brûlure", "Marque", "Pioche", "Prix"], "ambiance": "La brume monte du marais de Kyrtè et laisse sur la peau une pellicule qui luit dans le noir.", "budget": "28,3 (cible 28 ; vérifié)"},
{"id": "ANT137-plus-5", "zone": "ANT137", "pole": "+", "palier": 5, "nom": "Le frai sur la coupole", "cout": 2, "cible": 0, "effet": "Deux têtards-étoiles éclosent : 10 PV, frappent 3 chacun. Tous les ennemis brûlent de 2 sur 2 tours. Piochez 1 carte.", "ops": [["invoque", "Têtard-étoile", 10, 3], ["invoque", "Têtard-étoile", 10, 3], ["brulure", "tous", 2, 2], ["pioche", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Brûlure", "Pioche"], "ambiance": "Le frai recouvre la coupole d'Arsénios d'une couche épaisse et luisante ; on ne voit plus le bleu des tesselles.", "budget": "31,8 (cible 32 ; vérifié)"},
{"id": "ANT137-plus-6", "zone": "ANT137", "pole": "+", "palier": 6, "nom": "Une étoile par œuf", "cout": 2, "cible": 0, "effet": "Un crapaud constellé se lève : 20 PV, frappe 6. Tous les ennemis brûlent de 3 sur 3 tours. Si une bête était déjà en jeu : piochez 1 carte. Votre bête la plus faible perd 5 PV.", "ops": [["invoque", "Crapaud constellé", 20, 6], ["brulure", "tous", 3, 3], ["si", "bete", [["pioche", 1]]], ["prixBete", 5]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Brûlure", "Condition", "Pioche", "Prix"], "ambiance": "Les astronomes de la côte comptent les étoiles au-dessus de Kyrtè ; chaque printemps, ils en trouvent moins.", "budget": "35,8 (cible 36 ; vérifié)"},
{"id": "ANT137-plus7", "zone": "ANT137", "pole": "+", "palier": 7, "nom": "Le Ciel de frai", "cout": 3, "cible": 0, "effet": "Le ciel descend : une nuée de têtards (16 PV, frappe 5) ; tous brûlent de 4 sur 3 tours et deviennent vulnérables 1 ; piochez 1. Ennemis soignés de 2. Pose Braise. Si Sceau (consommé) : piochez 4, récupérez, +2 mana Sève, écho.", "ops": [["invoque", "Nuée de têtards", 16, 5], ["brulure", "tous", 4, 3], ["vulnerable", "tous", 1], ["pioche", 1], ["ennemiSoin", 2], ["pose", "Braise"], ["reveil", "Sceau", true, [["pioche", 4], ["recup"], ["mana", "Sève", 2], ["echo"]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Invocation", "Brûlure", "Marque", "Pioche", "Prix", "Pose Braise", "Réveil Sceau"], "ambiance": "Au-dessus de Kyrtè, le ciel nocturne est vide et lisse ; toutes ses étoiles nagent dans le marais.", "budget": "49 (+32 si Sceau, soit +65 % ; vérifié)"}
]
```

---

## Le Castellum d'Abiétum (ANT045 · Antre · Glace)

```json
{
 "fiche": "ANT045",
 "nom": "Le Castellum d'Abiétum",
 "recit": "Vous arrivez au castellum d'Abiétum par la seule route, une levée de rondins qui s'enfonce dans la mousse. La palissade tient encore. Dans la cour, le puits est large comme une aire de battage ; une chaîne de fer y descend, et vous entendez, très bas, l'eau qui respire sous la glace. Sur le linteau du poste de garde, une tablette du signifer Gaius Vennonius consigne la profondeur relevée chaque matin : quarante pieds, quarante, quarante, puis soixante, puis cent dix. Au-dessus des sapins, des grues tournent en rond. Elles sont arrivées à l'automne.",
 "pal": [
  "Le fort a glissé dans le puits : un anneau de palissade autour d'une eau couleur de tourbe, sous une glace où des brochets blancs nagent la tête en bas.",
  "Sapins penchés vers le puits, givre lie-de-vin sur les pieux ; la chaîne de fer descend d'un maillon chaque nuit, sans que personne ne la touche.",
  "Fortin romain de rondins et de pierre sèche dans une taïga de sapins, puits large au milieu de la cour, fumée des braseros, grues qui crient au loin.",
  "Les grues nichent sur les tours de garde, la palissade se couvre de duvet ; l'air sent l'œuf chaud, et les soldats dorment la tête levée.",
  "Le fort pend au ciel, tenu par mille becs accrochés à sa palissade ; sous lui, plus de puits ni de sol, et aucune ombre ne touche plus la taïga."
 ],
 "pm": "Abysse",
 "pp": "Ciel"
}
```

### Pôle − Abysse

Progression : la chaîne descend d'un maillon, le brochet blanc monte, la glace s'épaissit comme un mur, le silure du puits se montre, les sapins se penchent, les brochets nagent tête en bas, puis ce qui pèse au bout de la chaîne remonte. Style : bêtes lentes et massives, gel et affaiblissement ; le prix se paie en PV.

```json
[
{"id": "ANT045-moins-1", "zone": "ANT045", "pole": "-", "palier": 1, "nom": "La chaîne d'un maillon", "cout": 1, "cible": 1, "effet": "2 dégâts à la cible ; elle hésite ce tour et perd 1 d'attaque pour le combat.", "ops": [["deg", "cible", 2], ["hesite", "cible"], ["affaiblit", "cible", 1]], "tags": ["Antre", "Glace", "Pôle −", "Dégâts", "Contrôle", "Affaiblissement"], "ambiance": "Gaius Vennonius a marqué la chaîne d'un nœud de cuir ; au matin, le nœud est sous l'eau.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT045-moins-2", "zone": "ANT045", "pole": "-", "palier": 2, "nom": "Le brochet blanc", "cout": 1, "cible": 1, "effet": "Un brochet blanc remonte du puits : 14 PV, frappe 3. La cible perd 1 d'attaque. Le héros perd 2 PV.", "ops": [["invoque", "Brochet blanc", 14, 3], ["affaiblit", "cible", 1], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Il n'a pas d'yeux et il monte droit vers la lumière des braseros, la gueule fermée.", "budget": "12,5 (cible 12,5 ; vérifié)"},
{"id": "ANT045-moins-3", "zone": "ANT045", "pole": "-", "palier": 3, "nom": "La glace comme un mur", "cout": 1, "cible": 1, "effet": "Tous les ennemis hésitent ce tour ; la cible perd 1 d'attaque. Le héros gagne 6 de garde. Défaussez 1 carte au hasard.", "ops": [["hesite", "tous"], ["affaiblit", "cible", 1], ["garde", "heros", 6], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle −", "Contrôle", "Affaiblissement", "Garde", "Prix"], "ambiance": "La glace du puits d'Abiétum épaissit vers le bas ; on y voit, prises dedans, des bulles qui remontent encore.", "budget": "14,8 (cible 15 ; vérifié)"},
{"id": "ANT045-moins-4", "zone": "ANT045", "pole": "-", "palier": 4, "nom": "Le silure du puits", "cout": 2, "cible": 1, "effet": "Le silure du puits se hisse sur la margelle : 32 PV, frappe 4. La cible perd 2 d'attaque pour le combat.", "ops": [["invoque", "Silure du puits", 32, 4], ["affaiblit", "cible", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement"], "ambiance": "Ses barbillons tâtent la margelle de pierre sèche comme on cherche une marche dans le noir.", "budget": "28 (cible 28 ; vérifié)"},
{"id": "ANT045-moins-5", "zone": "ANT045", "pole": "-", "palier": 5, "nom": "Les sapins penchés", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 2 d'attaque ; 4 dégâts à la cible, qui hésite et devient vulnérable 2. Si une bête est en jeu : tous hésitent. Votre bête la plus faible perd 3 PV.", "ops": [["affaiblit", "tous", 2], ["deg", "cible", 4], ["hesite", "cible"], ["vulnerable", "cible", 2], ["si", "bete", [["hesite", "tous"]]], ["prixBete", 3]], "tags": ["Antre", "Glace", "Pôle −", "Affaiblissement", "Dégâts", "Contrôle", "Marque", "Condition", "Prix"], "ambiance": "Tous les sapins autour du castellum penchent vers le puits, et les plus proches ont leurs racines à l'air.", "budget": "32 (cible 32 ; vérifié)"},
{"id": "ANT045-moins-6", "zone": "ANT045", "pole": "-", "palier": 6, "nom": "Les brochets tête en bas", "cout": 2, "cible": 1, "effet": "Deux brochets aveugles remontent : 20 PV, frappent 5 chacun. La cible perd 1 d'attaque. Le héros perd 3 PV.", "ops": [["invoque", "Brochet aveugle", 20, 5], ["invoque", "Brochet aveugle", 20, 5], ["affaiblit", "cible", 1], ["prixPV", 3]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Sous la glace d'Abiétum, les brochets nagent à la verticale, la tête vers le fond, comme tirés.", "budget": "35 (cible 36 ; vérifié)"},
{"id": "ANT045-moins7", "zone": "ANT045", "pole": "-", "palier": 7, "nom": "Le Poids de la chaîne", "cout": 3, "cible": 0, "effet": "Ce qui pend au bout de la chaîne remonte : 40 PV, frappe 4. Tous les ennemis hésitent ce tour et perdent 2 d'attaque. Le héros perd 5 PV. Pose Givre. Si Abîme (consommé) : la garde ennemie tombe, 10 dégâts à tous.", "ops": [["invoque", "Le Poids de la chaîne", 40, 4], ["hesite", "tous"], ["affaiblit", "tous", 2], ["prixPV", 5], ["pose", "Givre"], ["reveil", "Abîme", true, [["briseGarde", "tous"], ["deg", "tous", 10]]]], "tags": ["Antre", "Glace", "Forme ultime −7", "Invocation", "Contrôle", "Affaiblissement", "Prix", "Pose Givre", "Réveil Abîme"], "ambiance": "La chaîne d'Abiétum remonte seule, maillon après maillon, et la tablette du signifer n'a plus de place pour le chiffre.", "budget": "46 (+29,5 si Abîme, soit +64 % ; vérifié)"}
]
```

### Pôle + Ciel

Progression : une grue tourne, le duvet couvre la palissade, les becs frappent d'en haut, le nid se pose sur la tour, les soldats dorment tête levée, l'air sent l'œuf chaud, puis la volée efface toutes les ombres. Style : bêtes rapides et coups multiples au hasard, écho ; le prix se paie en PV, cartes et bêtes.

```json
[
{"id": "ANT045-plus-1", "zone": "ANT045", "pole": "+", "palier": 1, "nom": "Une grue qui tourne", "cout": 1, "cible": 0, "effet": "Une grue d'Abiétum descend : 6 PV, frappe 3. 2 coups de 2 dégâts au hasard. Le héros perd 1 PV.", "ops": [["invoque", "Grue d'Abiétum", 6, 3], ["deg", "hasard", 2, 2], ["prixPV", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "Elle tourne au-dessus du castellum depuis l'automne, toujours dans le même sens, sans repartir vers le sud.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "ANT045-plus-2", "zone": "ANT045", "pole": "+", "palier": 2, "nom": "Le duvet sur la palissade", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 8 de garde. 3 coups de 2 dégâts au hasard.", "ops": [["garde", "allies", 8], ["deg", "hasard", 2, 3]], "tags": ["Antre", "Glace", "Pôle +", "Garde", "Dégâts"], "ambiance": "Le duvet pousse entre les pieux comme une mousse ; il est chaud au toucher, même à l'aube.", "budget": "12,4 (cible 12,5 ; vérifié)"},
{"id": "ANT045-plus-3", "zone": "ANT045", "pole": "+", "palier": 3, "nom": "Les becs d'en haut", "cout": 1, "cible": 0, "effet": "4 coups de 3 dégâts au hasard ; la cible devient vulnérable 1. Si une bête est en jeu : 3 coups de 2 de plus. Défaussez 1 carte au hasard.", "ops": [["deg", "hasard", 3, 4], ["vulnerable", "cible", 1], ["si", "bete", [["deg", "hasard", 2, 3]]], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Dégâts", "Marque", "Condition", "Prix"], "ambiance": "Les grues d'Abiétum frappent d'en haut, en piqué, et remontent avant que le cri soit fini.", "budget": "15 (cible 15 ; vérifié)"},
{"id": "ANT045-plus-4", "zone": "ANT045", "pole": "+", "palier": 4, "nom": "Le nid sur la tour", "cout": 2, "cible": 0, "effet": "Une grue couveuse (18 PV, frappe 5) et un oisillon (6 PV, frappe 2) s'installent. 3 coups de 3 dégâts au hasard. Votre bête la plus faible perd 3 PV.", "ops": [["invoque", "Grue couveuse", 18, 5], ["invoque", "Oisillon de grue", 6, 2], ["deg", "hasard", 3, 3], ["prixBete", 3]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "Le nid couvre la tour de guet ; dedans, un casque de légionnaire couvé avec les œufs.", "budget": "28,5 (cible 28 ; vérifié)"},
{"id": "ANT045-plus-5", "zone": "ANT045", "pole": "+", "palier": 5, "nom": "Les soldats tête levée", "cout": 2, "cible": 0, "effet": "5 coups de 4 dégâts au hasard ; la prochaine carte de zone jouée ce tour a son effet doublé. Si une bête est en jeu : 5 dégâts à tous.", "ops": [["deg", "hasard", 4, 5], ["echo"], ["si", "bete", [["deg", "tous", 5]]]], "tags": ["Antre", "Glace", "Pôle +", "Dégâts", "Écho", "Condition"], "ambiance": "La garnison d'Abiétum dort assise, le cou tendu vers le ciel, et se réveille au même battement d'ailes.", "budget": "31,5 (cible 32 ; vérifié)"},
{"id": "ANT045-plus-6", "zone": "ANT045", "pole": "+", "palier": 6, "nom": "L'odeur d'œuf chaud", "cout": 2, "cible": 0, "effet": "Une grue rose se pose : 22 PV, frappe 6. 4 coups de 3 dégâts au hasard ; écho. Si une bête était déjà en jeu : piochez 1 carte. Le héros perd 4 PV.", "ops": [["invoque", "Grue rose", 22, 6], ["deg", "hasard", 3, 4], ["echo"], ["si", "bete", [["pioche", 1]]], ["prixPV", 4]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Dégâts", "Écho", "Condition", "Pioche", "Prix"], "ambiance": "Tout le castellum sent l'œuf qui couve ; les braseros sont éteints, et personne n'a froid.", "budget": "36 (cible 36 ; vérifié)"},
{"id": "ANT045-plus7", "zone": "ANT045", "pole": "+", "palier": 7, "nom": "La Volée sans ombre", "cout": 3, "cible": 0, "effet": "Le ciel entier frappe : 8 coups de 4 dégâts au hasard ; une volée de grues se pose (16 PV, frappe 6) ; vos alliés gagnent 8 de garde. Le héros perd 6 PV. Pose Racine. Si Braise (consommée) : tous brûlent de 4 sur 3 tours, 3 coups de 3.", "ops": [["deg", "hasard", 4, 8], ["invoque", "Volée de grues", 16, 6], ["garde", "allies", 8], ["prixPV", 6], ["pose", "Racine"], ["reveil", "Braise", true, [["brulure", "tous", 4, 3], ["deg", "hasard", 3, 3]]]], "tags": ["Antre", "Glace", "Forme ultime +7", "Dégâts", "Invocation", "Garde", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "Au-dessus d'Abiétum, les ailes se touchent ; le sol du fort n'a plus d'ombre, même à midi sous les sapins.", "budget": "49,4 (+35,4 si Braise, soit +72 % ; vérifié)"}
]
```

---

## La Lande de Yaxuntik (ANT183 · Antre · Vent)

```json
{
 "fiche": "ANT183",
 "nom": "La Lande de Yaxuntik",
 "recit": "À Yaxuntik, sur la lande que le vent couche du même côté, les familles gardent des cerfs à demi apprivoisés entre les stèles, et la fête de la mue se tient au début des pluies. On ramasse les bois tombés, on les pend aux linteaux, on boit l'atole de maïs nouveau. Ix Nikte' Chan, qui garde la harde depuis vingt saisons, a compté cette année cent douze bois tombés, ce qui est normal, et noté qu'une poussière orange couvre les stèles comme les herbes. Les bois tombés pèsent plus lourd que les cerfs.",
 "pal": [
  "La lande est une croûte orange qui crisse sous le pas ; les cerfs couchés ont des bois de rouille friable, et les stèles suintent un jus brun.",
  "Herbes piquées de pustules couleur de brique, vent chargé de spores ; les cerfs perdent leurs bois deux fois par lune et les enterrent.",
  "Lande maya battue par le vent, herbes rases et buissons jaunes, stèles de calcaire sculpté entre les rochers, harde de cerfs et feux d'atole.",
  "Le pollen fait des dunes jaunes au pied des stèles ; les bois des cerfs portent des fleurs, et le vent souffle toujours vers la harde, même de face.",
  "Une mer de fleurs couleur d'or battu, épaisse de deux coudées ; le pollen dore les stèles comme à la feuille, et les bois des cerfs ont pris racine."
 ],
 "pm": "Rouille",
 "pp": "Or"
}
```

### Pôle − Rouille

Progression : la poussière orange, le daguet aux bois friables, les pustules couleur de brique, les stèles qui suintent, le cerf rouillé, la harde couchée, puis la lande entière devient croûte. Style : la rouille ronge la garde et marque les ennemis, des cerfs fragiles qui frappent fort ; le prix coûte des cartes, des PV ou des bêtes.

```json
[
{"id": "ANT183-moins-1", "zone": "ANT183", "pole": "-", "palier": 1, "nom": "La poussière orange", "cout": 1, "cible": 1, "effet": "4 dégâts à la cible ; sa garde tombe et elle devient vulnérable 1.", "ops": [["deg", "cible", 4], ["briseGarde", "cible"], ["vulnerable", "cible", 1]], "tags": ["Antre", "Vent", "Pôle −", "Dégâts", "Perce-garde", "Marque"], "ambiance": "Ix Nikte' Chan essuie la stèle du milieu avec sa manche ; la poussière orange revient pendant qu'elle essuie.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT183-moins-2", "zone": "ANT183", "pole": "-", "palier": 2, "nom": "Le daguet aux bois friables", "cout": 1, "cible": 1, "effet": "Un daguet rouillé se lève : 6 PV, frappe 5. La garde de la cible tombe et elle devient vulnérable 1. Défaussez 1 carte au hasard.", "ops": [["invoque", "Daguet rouillé", 6, 5], ["briseGarde", "cible"], ["vulnerable", "cible", 1], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Perce-garde", "Marque", "Prix"], "ambiance": "Ses bois s'effritent quand il charge, et chaque éclat laisse dans la plaie une tache orange.", "budget": "13,5 (cible 12,5 ; vérifié)"},
{"id": "ANT183-moins-3", "zone": "ANT183", "pole": "-", "palier": 3, "nom": "Les pustules couleur de brique", "cout": 1, "cible": 1, "effet": "Tous les ennemis deviennent vulnérables 1 ; 4 dégâts à la cible, qui perd 1 d'attaque.", "ops": [["vulnerable", "tous", 1], ["deg", "cible", 4], ["affaiblit", "cible", 1]], "tags": ["Antre", "Vent", "Pôle −", "Marque", "Dégâts", "Affaiblissement"], "ambiance": "Les herbes de Yaxuntik se couvrent de petites cloques qui éclatent au passage de la harde, toutes du même côté.", "budget": "14,5 (cible 15 ; vérifié)"},
{"id": "ANT183-moins-4", "zone": "ANT183", "pole": "-", "palier": 4, "nom": "Les stèles qui suintent", "cout": 2, "cible": 0, "effet": "La garde ennemie tombe ; 7 dégâts à tous ; la cible devient vulnérable 2. Le héros perd 2 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", 7], ["vulnerable", "cible", 2], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle −", "Perce-garde", "Dégâts", "Marque", "Prix"], "ambiance": "Les glyphes des stèles s'effacent de bas en haut sous un jus brun, et ce qui reste se lit autrement.", "budget": "26,9 (cible 28 ; vérifié)"},
{"id": "ANT183-moins-5", "zone": "ANT183", "pole": "-", "palier": 5, "nom": "Le cerf rouillé", "cout": 2, "cible": 1, "effet": "Un cerf rouillé se lève : 16 PV, frappe 10. La garde de la cible tombe ; elle devient vulnérable 2. Si une bête était déjà en jeu : tous vulnérables 1. Défaussez 1 carte au hasard.", "ops": [["invoque", "Cerf rouillé", 16, 10], ["briseGarde", "cible"], ["vulnerable", "cible", 2], ["si", "bete", [["vulnerable", "tous", 1]]], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Perce-garde", "Marque", "Condition", "Prix"], "ambiance": "Ses bois pèsent plus lourd que lui ; il les porte, la tête basse, et charge sans lever les yeux.", "budget": "32,75 (cible 32 ; vérifié)"},
{"id": "ANT183-moins-6", "zone": "ANT183", "pole": "-", "palier": 6, "nom": "La harde couchée", "cout": 2, "cible": 1, "effet": "Un cerf couché se relève : 20 PV, frappe 8. Tous les ennemis perdent 1 d'attaque et deviennent vulnérables 1 ; la garde de la cible tombe. Votre bête la plus faible perd 4 PV.", "ops": [["invoque", "Cerf couché", 20, 8], ["affaiblit", "tous", 1], ["vulnerable", "tous", 1], ["briseGarde", "cible"], ["prixBete", 4]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Affaiblissement", "Marque", "Perce-garde", "Prix"], "ambiance": "La harde de Yaxuntik est couchée dans la croûte, les pattes repliées ; quand on approche, une tête se tourne.", "budget": "36 (cible 36 ; vérifié)"},
{"id": "ANT183-moins7", "zone": "ANT183", "pole": "-", "palier": 7, "nom": "La Croûte de Yaxuntik", "cout": 2, "cible": 0, "effet": "La lande se referme sur l'ennemi : tous deviennent vulnérables 2, perdent 1 d'attaque, leur garde tombe, 9 dégâts à tous. Défaussez 1 carte. Pose Abîme. Si Sang (consommé) : le héros perd 5 PV, 16 dégâts à tous.", "ops": [["vulnerable", "tous", 2], ["affaiblit", "tous", 1], ["briseGarde", "tous"], ["deg", "tous", 9], ["prixDefausse", 1], ["pose", "Abîme"], ["reveil", "Sang", true, [["prixPV", 5], ["deg", "tous", 16]]]], "tags": ["Antre", "Vent", "Forme ultime −7", "Marque", "Affaiblissement", "Perce-garde", "Dégâts", "Prix", "Pose Abîme", "Réveil Sang"], "ambiance": "La croûte orange a pris stèles, cerfs et linteaux ; la fête de la mue a lieu quand même.", "budget": "46,8 (+30,2 si Sang, soit +65 % ; vérifié)"}
]
```

### Pôle + Or

Progression : un bois en fleur, les dunes de pollen, la biche couronnée, le vent qui souffle vers la harde, la harde fleurie, les bois qui prennent racine, puis la lande devient une mer de fleurs. Style : main pleine (pioche, mana Vent, écho) et cerfs qui grandissent ; le prix soigne ou protège l'ennemi, coûte une carte ou une bête. Ici « Or » est l'or du pollen et des fleurs, pas du métal.

```json
[
{"id": "ANT183-plus-1", "zone": "ANT183", "pole": "+", "palier": 1, "nom": "Un bois en fleur", "cout": 1, "cible": 0, "effet": "Un faon de pollen vous suit : 6 PV, frappe 2. Piochez 1 carte.", "ops": [["invoque", "Faon de pollen", 6, 2], ["pioche", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Pioche"], "ambiance": "Le premier bois tombé de la saison porte trois fleurs jaunes, ouvertes, sur l'empaumure.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT183-plus-2", "zone": "ANT183", "pole": "+", "palier": 2, "nom": "Les dunes de pollen", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes ; ajoutez 1 mana Vent ; le héros gagne 4 de garde. Chaque ennemi se soigne de 1.", "ops": [["pioche", 2], ["mana", "Vent", 1], ["garde", "heros", 4], ["ennemiSoin", 1]], "tags": ["Antre", "Vent", "Pôle +", "Pioche", "Mana", "Garde", "Prix"], "ambiance": "Le vent de Yaxuntik dépose le pollen contre les stèles en dunes qui gardent la forme des sabots.", "budget": "12 (cible 12,5 ; vérifié)"},
{"id": "ANT183-plus-3", "zone": "ANT183", "pole": "+", "palier": 3, "nom": "La biche couronnée", "cout": 1, "cible": 0, "effet": "Une biche couronnée de fleurs se lève : 14 PV, frappe 4. Piochez 1 carte. Si une bête était déjà en jeu : vos alliés gagnent 6 de garde. Défaussez 1 carte au hasard.", "ops": [["invoque", "Biche couronnée", 14, 4], ["pioche", 1], ["si", "bete", [["garde", "allies", 6]]], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Pioche", "Condition", "Garde", "Prix"], "ambiance": "Ix Nikte' Chan ne reconnaît pas la biche ; elle porte pourtant l'entaille d'oreille de la harde.", "budget": "16,4 (cible 15 ; vérifié)"},
{"id": "ANT183-plus-4", "zone": "ANT183", "pole": "+", "palier": 4, "nom": "Le vent vers la harde", "cout": 2, "cible": 0, "effet": "Piochez 2 cartes, ajoutez 2 mana Vent, reprenez la dernière carte de votre défausse ; écho. Si une bête est en jeu : vos alliés gagnent 12 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["pioche", 2], ["mana", "Vent", 2], ["recup"], ["echo"], ["si", "bete", [["garde", "allies", 12]]], ["ennemiGarde", 1]], "tags": ["Antre", "Vent", "Pôle +", "Pioche", "Mana", "Récupération", "Écho", "Condition", "Garde", "Prix"], "ambiance": "Le vent souffle vers la harde de quelque côté qu'on se tienne, et il sent le maïs nouveau.", "budget": "26,8 (cible 28 ; vérifié)"},
{"id": "ANT183-plus-5", "zone": "ANT183", "pole": "+", "palier": 5, "nom": "La harde fleurie", "cout": 2, "cible": 0, "effet": "Un cerf fleuri (22 PV, frappe 6) et un faon de pollen (6 PV, frappe 2) vous rejoignent. Piochez 1 carte ; vos alliés gagnent 4 de garde.", "ops": [["invoque", "Cerf fleuri", 22, 6], ["invoque", "Faon de pollen", 6, 2], ["pioche", 1], ["garde", "allies", 4]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Pioche", "Garde"], "ambiance": "Les cerfs de Yaxuntik broutent les fleurs qui poussent sur le dos des autres, et personne ne s'en plaint.", "budget": "33,2 (cible 32 ; vérifié)"},
{"id": "ANT183-plus-6", "zone": "ANT183", "pole": "+", "palier": 6, "nom": "Les bois qui prennent racine", "cout": 2, "cible": 0, "effet": "Un cerf enraciné se dresse : 34 PV, frappe 5. Piochez 2 cartes, ajoutez 2 mana Vent. Si une bête était déjà en jeu : écho. Chaque ennemi se soigne de 2.", "ops": [["invoque", "Cerf enraciné", 34, 5], ["pioche", 2], ["mana", "Vent", 2], ["si", "bete", [["echo"]]], ["ennemiSoin", 2]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Pioche", "Mana", "Condition", "Écho", "Prix"], "ambiance": "Le vieux cerf a baissé la tête pour boire ; ses bois ont touché terre, et il est resté.", "budget": "37,1 (cible 36 ; vérifié)"},
{"id": "ANT183-plus7", "zone": "ANT183", "pole": "+", "palier": 7, "nom": "La Mer safran", "cout": 3, "cible": 0, "effet": "La lande fleurit jusqu'à l'horizon : piochez 4, +2 mana Vent, reprenez la dernière défausse, écho, +1 de capacité ; vos alliés gagnent 12 de garde. Ennemis : +2 de garde. Pose Sceau. Si Racine (consommée) : une harde enracinée (30 PV, frappe 8).", "ops": [["pioche", 4], ["mana", "Vent", 2], ["recup"], ["echo"], ["boost"], ["garde", "allies", 12], ["ennemiGarde", 2], ["pose", "Sceau"], ["reveil", "Racine", true, [["invoque", "Harde enracinée", 30, 8], ["garde", "allies", 6]]]], "tags": ["Antre", "Vent", "Forme ultime +7", "Pioche", "Mana", "Récupération", "Écho", "Boost", "Garde", "Prix", "Pose Sceau", "Réveil Racine"], "ambiance": "Plus de stèles à Yaxuntik, plus d'herbes, plus de chemins : des fleurs safran, et des têtes de cerfs.", "budget": "45 (+31,8 si Racine, soit +71 % ; vérifié)"}
]
```

---

## Le Figuier d'Emthonjeni (ASS115 · Assemblée · Sève)

```json
{
 "fiche": "ASS115",
 "nom": "Le Figuier d'Emthonjeni",
 "recit": "Lois de l'assemblée d'Emthonjeni, une rangée de perles par loi sur le collier de l'inyanga Nomvula kaSithebe. Une bête qui tousse ne boit pas au bassin du haut. Une bête qui tousse deux jours est menée hors de l'enclos, sur la piste du sud. Les racines du figuier qui percent l'enclos ne se coupent pas : on soigne avec leur lait. Cette saison, cinquante-huit bêtes sont parties au sud, et six cents malades ont guéri au lait ; ils ont la peau lisse comme l'écorce. Les racines sont sous les huttes. Au collier, une rangée reste sans perles.",
 "pal": [
  "Le bassin n'est plus qu'une boue vert d'eau stagnante ; l'enclos est vide, les bouses sèches alignées au cordeau, le figuier défeuillé d'un seul côté.",
  "Herbes jaunies autour de la source, vaches maigres attachées à l'écart ; sur les branches basses, les vautours se posent tous face au tronc.",
  "Source cerclée de pierres sous un grand figuier, huttes de paille en ruche autour d'un enclos à bétail, palmiers ilala, assemblée assise à l'ombre.",
  "Les racines soulèvent l'enclos et suintent un lait blanc ; les guéris dorment au soleil, et leurs cicatrices ont disparu, même les plus anciennes.",
  "Le figuier a couvert l'oasis d'un dôme de racines blanches comme le lait ; les huttes y sont enlacées, et nul n'en sort plus, même pour boire."
 ],
 "pm": "Peste",
 "pp": "Guérison"
}
```

### Pôle − Peste

Progression : loi du bassin du haut, loi des deux jours, la piste du sud, les bouses au cordeau, l'enclos vide, le figuier d'un seul côté, puis la grande quarantaine. Style : lois de contrôle (hésitation, affaiblissement de tous), pioche, fièvre qui couve ; le prix coûte des cartes ou des PV.

```json
[
{"id": "ASS115-moins-1", "zone": "ASS115", "pole": "-", "palier": 1, "nom": "Loi du bassin du haut", "cout": 1, "cible": 1, "effet": "Loi : la cible hésite ce tour et perd 1 d'attaque pour le combat. Le héros gagne 3 de garde.", "ops": [["hesite", "cible"], ["affaiblit", "cible", 1], ["garde", "heros", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Contrôle", "Affaiblissement", "Garde"], "ambiance": "Nomvula fait reculer la vache qui tousse d'un seul geste du bâton ; la vache ne tourne pas la tête.", "budget": "10,4 (cible 10 ; vérifié)"},
{"id": "ASS115-moins-2", "zone": "ASS115", "pole": "-", "palier": 2, "nom": "Loi des deux jours", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour ; la cible brûle de 1 sur 2 tours ; piochez 1 carte. Défaussez 1 carte au hasard.", "ops": [["hesite", "tous"], ["brulure", "cible", 1, 2], ["pioche", 1], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Contrôle", "Brûlure", "Pioche", "Prix"], "ambiance": "Deux jours, on compte sur les doigts devant l'enclos d'Emthonjeni ; le troisième matin, personne ne compte plus.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "ASS115-moins-3", "zone": "ASS115", "pole": "-", "palier": 3, "nom": "La piste du sud", "cout": 1, "cible": 1, "effet": "La cible perd 2 d'attaque ; tous les ennemis brûlent de 2 sur 2 tours ; piochez 1 carte. Le héros perd 3 PV.", "ops": [["affaiblit", "cible", 2], ["brulure", "tous", 2, 2], ["pioche", 1], ["prixPV", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Affaiblissement", "Brûlure", "Pioche", "Prix"], "ambiance": "Sur la piste du sud, les traces de sabots s'en vont toutes, et une seule paire revient, à reculons.", "budget": "15,8 (cible 15 ; vérifié)"},
{"id": "ASS115-moins-4", "zone": "ASS115", "pole": "-", "palier": 4, "nom": "Les bouses au cordeau", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour et perdent 1 d'attaque pour le combat. Piochez 2 cartes ; ajoutez 1 mana Sève.", "ops": [["hesite", "tous"], ["affaiblit", "tous", 1], ["pioche", 2], ["mana", "Sève", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Contrôle", "Affaiblissement", "Pioche", "Mana"], "ambiance": "Les bouses séchées de l'enclos vide sont alignées au cordeau ; personne à Emthonjeni ne les a rangées.", "budget": "28,5 (cible 28 ; vérifié)"},
{"id": "ASS115-moins-5", "zone": "ASS115", "pole": "-", "palier": 5, "nom": "L'enclos vide", "cout": 2, "cible": 0, "effet": "Tous les ennemis perdent 2 d'attaque et brûlent de 3 sur 2 tours. Piochez 2 cartes. Défaussez 1 carte au hasard.", "ops": [["affaiblit", "tous", 2], ["brulure", "tous", 3, 2], ["pioche", 2], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Affaiblissement", "Brûlure", "Pioche", "Prix"], "ambiance": "Cinquante-huit bêtes menées au sud ; l'enclos garde leur odeur, et la poussière y reste chaude la nuit.", "budget": "33,2 (cible 32 ; vérifié)"},
{"id": "ASS115-moins-6", "zone": "ASS115", "pole": "-", "palier": 6, "nom": "Le figuier d'un seul côté", "cout": 2, "cible": 1, "effet": "Loi : tous les ennemis hésitent ce tour et brûlent de 3 sur 3 tours ; la cible perd 1 d'attaque ; piochez 1 carte. Le héros perd 3 PV.", "ops": [["hesite", "tous"], ["brulure", "tous", 3, 3], ["affaiblit", "cible", 1], ["pioche", 1], ["prixPV", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Contrôle", "Brûlure", "Affaiblissement", "Pioche", "Prix"], "ambiance": "Le figuier d'Emthonjeni a perdu ses feuilles du côté du sud, d'un trait net, comme tranché par une loi.", "budget": "33,8 (cible 36 ; vérifié)"},
{"id": "ASS115-moins7", "zone": "ASS115", "pole": "-", "palier": 7, "nom": "La Grande Quarantaine", "cout": 2, "cible": 0, "effet": "Loi de l'assemblée : tous les ennemis hésitent, perdent 2 d'attaque et brûlent de 2 sur 3 tours ; piochez 2, +2 mana Sève. Défaussez 1 carte. Pose Sceau. Si Braise (consommée) : tous brûlent de 5 sur 3 tours.", "ops": [["hesite", "tous"], ["affaiblit", "tous", 2], ["brulure", "tous", 2, 3], ["pioche", 2], ["mana", "Sève", 2], ["prixDefausse", 1], ["pose", "Sceau"], ["reveil", "Braise", true, [["brulure", "tous", 5, 3]]]], "tags": ["Assemblée", "Sève", "Forme ultime −7", "Loi", "Contrôle", "Affaiblissement", "Brûlure", "Pioche", "Mana", "Prix", "Pose Sceau", "Réveil Braise"], "ambiance": "Toute l'oasis est sur la piste du sud ; sous le figuier, l'assemblée continue d'enfiler ses perles, seule.", "budget": "49,2 (+33 si Braise, soit +67 % ; vérifié)"}
]
```

### Pôle + Guérison

Progression : le lait des racines, loi des racines qu'on ne coupe pas, six cents malades, la peau tiède et lisse, les racines sous les huttes, loi du lait pour tous, puis le dôme du figuier enlace l'oasis. Style : soins de tout le camp, pioche et récupération, une racine qui tient le terrain ; le prix soigne ou protège l'ennemi, ou coûte une carte.

```json
[
{"id": "ASS115-plus-1", "zone": "ASS115", "pole": "+", "palier": 1, "nom": "Le lait des racines", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 6 ; piochez 1 carte.", "ops": [["soin", "heros", 6], ["pioche", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Soin", "Pioche"], "ambiance": "Nomvula entaille la racine d'un ongle ; le lait qui perle est tiède comme celui d'une vache.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ASS115-plus-2", "zone": "ASS115", "pole": "+", "palier": 2, "nom": "Loi des racines qu'on ne coupe pas", "cout": 1, "cible": 0, "effet": "Loi : reprenez la dernière carte de votre défausse ; le héros se soigne de 6 et gagne 5 de garde. Chaque ennemi se soigne de 1.", "ops": [["recup"], ["soin", "heros", 6], ["garde", "heros", 5], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Récupération", "Soin", "Garde", "Prix"], "ambiance": "Les racines du figuier traversent la clôture d'épineux de l'enclos ; on a percé la clôture pour les laisser passer.", "budget": "11,8 (cible 12,5 ; vérifié)"},
{"id": "ASS115-plus-3", "zone": "ASS115", "pole": "+", "palier": 3, "nom": "Six cents malades", "cout": 1, "cible": 0, "effet": "Vos alliés se soignent de 8 ; piochez 2 cartes ; le héros gagne 3 de garde. Chaque ennemi se soigne de 1.", "ops": [["soin", "allies", 8], ["pioche", 2], ["garde", "heros", 3], ["ennemiSoin", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Soin", "Pioche", "Garde", "Prix"], "ambiance": "Six cents malades à la file devant la racine d'Emthonjeni ; aucun n'a quitté la file, même les mourants.", "budget": "16,2 (cible 15 ; vérifié)"},
{"id": "ASS115-plus-4", "zone": "ASS115", "pole": "+", "palier": 4, "nom": "La peau d'écorce", "cout": 2, "cible": 0, "effet": "Le héros se soigne de 12 et gagne 10 de garde ; reprenez la dernière carte de votre défausse ; piochez 1 carte. Chaque ennemi gagne 1 de garde.", "ops": [["soin", "heros", 12], ["garde", "heros", 10], ["recup"], ["pioche", 1], ["ennemiGarde", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Soin", "Garde", "Récupération", "Pioche", "Prix"], "ambiance": "Les guéris d'Emthonjeni ont la peau lisse comme l'écorce, sans grain de beauté ni ride, et ils ne transpirent plus.", "budget": "26 (cible 28 ; vérifié)"},
{"id": "ASS115-plus-5", "zone": "ASS115", "pole": "+", "palier": 5, "nom": "Les racines sous les huttes", "cout": 2, "cible": 0, "effet": "Une racine du figuier sort du sol et tient le terrain : 20 PV, frappe 3. Vos alliés se soignent de 8 ; piochez 2 cartes ; le héros gagne 2 de garde.", "ops": [["invoque", "Racine du figuier", 20, 3], ["soin", "allies", 8], ["pioche", 2], ["garde", "heros", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Invocation", "Soin", "Pioche", "Garde"], "ambiance": "Le sol des huttes se bombe d'une nuit à l'autre ; on dort mieux, disent-ils, sur la bosse tiède.", "budget": "32,1 (cible 32 ; vérifié)"},
{"id": "ASS115-plus-6", "zone": "ASS115", "pole": "+", "palier": 6, "nom": "Loi du lait pour tous", "cout": 2, "cible": 0, "effet": "Loi : vos alliés se soignent de 18 ; piochez 2 cartes ; reprenez la dernière carte de votre défausse ; +2 mana Sève. Si le héros est sous la moitié de ses PV : il se soigne de 10. Chaque ennemi se soigne de 2.", "ops": [["soin", "allies", 18], ["pioche", 2], ["recup"], ["mana", "Sève", 2], ["si", "blesse", [["soin", "heros", 10]]], ["ennemiSoin", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Soin", "Pioche", "Récupération", "Mana", "Condition", "Prix"], "ambiance": "L'assemblée vote le lait du figuier pour tous, ennemis compris ; le figuier n'a pas attendu le vote.", "budget": "36,6 (cible 36 ; vérifié)"},
{"id": "ASS115-plus7", "zone": "ASS115", "pole": "+", "palier": 7, "nom": "Le Dôme du figuier", "cout": 3, "cible": 0, "effet": "Le figuier enlace l'oasis : un dôme de racines (40 PV, frappe 4) ; vos alliés se soignent de 15 et gagnent 10 de garde ; piochez 1. Ennemis soignés de 2. Pose Racine. Si Sang (consommé) : −6 PV, alliés soignés de 22, piochez 3, récupérez.", "ops": [["invoque", "Dôme du figuier", 40, 4], ["soin", "allies", 15], ["garde", "allies", 10], ["pioche", 1], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sang", true, [["prixPV", 6], ["soin", "allies", 22], ["pioche", 3], ["recup"]]]], "tags": ["Assemblée", "Sève", "Forme ultime +7", "Invocation", "Soin", "Garde", "Pioche", "Prix", "Pose Racine", "Réveil Sang"], "ambiance": "Sous le dôme d'Emthonjeni, on n'entend plus la source ; on entend le figuier boire, lentement, à petites gorgées.", "budget": "48,6 (+32 si Sang, soit +66 % ; vérifié)"}
]
```

---

# Ressources

## La Tourbière de Myrvåg (RES284)

```json
{
 "fiche": "RES284",
 "nom": "La Tourbière de Myrvåg",
 "recit": "Les tourbiers de Myrvåg découpent la tourbe en briques à la bêche et la sèchent sur des claies jusqu'aux premières neiges. Torgrim Hesse en tire trois charretées par été. Les mottes qu'il laisse en place sont tièdes au toucher, et celles qu'il coupe repoussent dans la nuit.",
 "pal": [
  "Tourbière brune semée de linaigrettes, claies de briques qui fument au soleil, eau couleur de thé entre les mottes, bêches plantées dans la tranche.",
  "Les mottes coupées repoussent avant l'aube ; la sève de sphaigne perle aux tranches, épaisse et verte, et les claies ploient sous les briques."
 ]
}
```

## Le Sous-bois d'Ox Lu'um (RES354)

```json
{
 "fiche": "RES354",
 "nom": "Le Sous-bois d'Ox Lu'um",
 "recit": "Sous les chapeaux d'Ox Lu'um, les teinturières tendent des toiles de coton et recueillent la pluie de spores bleues qui en tombe à l'aube. Ix Ch'ab en remplit une calebasse par jour. Le soir, les spores retombent vers le haut, et se reposent sur les lamelles.",
 "pal": [
  "Champignons géants aux chapeaux mauves serrés comme un toit, toiles de coton tendues entre les pieds striés, poudre bleue sur les mains.",
  "Les lamelles se chargent d'une poudre épaisse qui ploie les chapeaux ; les spores montent du sol en colonnes lentes et chaudes au crépuscule."
 ]
}
```

## Le Cénote de Sak Nikte' (RES247)

```json
{
 "fiche": "RES247",
 "nom": "Le Cénote de Sak Nikte'",
 "recit": "Au fond de la plaine sèche, le cénote de Sak Nikte' est la seule eau à trois jours de marche. Les porteuses y descendent par une échelle de lianes, remplissent leurs jarres, remontent. L'eau a baissé d'une main cette année. Les racines qui pendent au-dessus ont allongé d'autant.",
 "pal": [
  "Puits rond dans le calcaire, eau verte au fond, racines pendues sur la paroi, échelle de lianes et jarres de terre posées sur la margelle.",
  "Les racines touchent l'eau et la font monter vers elles en filets ; les jarres se remplissent seules au bord, et l'eau y reste fraîche tout le jour."
 ]
}
```

## La Mangrove de Harâbân (RES193)

```json
{
 "fiche": "RES193",
 "nom": "La Mangrove de Harâbân",
 "recit": "Les cueilleurs de Harâbân récoltent à marée basse les feuilles de palétuvier, salées, pour le bétail des villages côtiers, et rapportent les plus belles au jardinier du caravansérail. La marée remonte toujours à la même heure. Cette semaine, elle remonte aussi par les racines.",
 "pal": [
  "Palétuviers vert sourd sur pilotis de racines, vase luisante à marée basse, barques plates chargées de feuilles, faïence bleue d'un caravansérail au loin.",
  "Les racines aériennes ont doublé et retiennent l'eau en vasques immobiles ; les feuilles repoussent dans l'heure, plus épaisses, gorgées de sève salée."
 ]
}
```

## Les Cavernes d'Iqsinaq (RES338)

```json
{
 "fiche": "RES338",
 "nom": "Les Cavernes d'Iqsinaq",
 "recit": "Les chasseurs d'Iqsinaq viennent tailler dans les cavernes les pointes de quartz qui arment leurs harpons, et laissent en échange une lampe de pierre allumée. Ataata Kunuk y entretient la même lampe depuis trente hivers. La paroi, autour de la mèche, a repoussé de deux doigts.",
 "pal": [
  "Galeries bleutées hérissées de quartz, lampes de stéatite qui brûlent la graisse de phoque, éclats taillés au sol, souffle froid venu du fond.",
  "Les veines de quartz épaississent à vue autour des lampes ; les pointes taillées la veille ont regagné leur place sur la paroi, à peine plus longues."
 ]
}
```

## La Futaie de Barfabad (RES008)

```json
{
 "fiche": "RES008",
 "nom": "La Futaie de Barfabad",
 "recit": "Au pavillon de chasse de Barfabad, Mirza Qasim recueille à l'aube le givre des sapins sur des plateaux d'argent, pour les parfumeurs de la cour. Ses plateaux se couvrent désormais seuls, même en été, d'aiguilles de givre qu'aucun sapin de la futaie ne porte.",
 "pal": [
  "Sapins enneigés autour d'un pavillon de grès rouge, plateaux d'argent posés sous les branches, flacons d'essence alignés sur un muret de neige.",
  "Le givre pousse en aiguilles longues comme des doigts sur chaque plateau ; les flacons débordent, et la futaie sent la résine froide jusqu'au pavillon."
 ]
}
```

## Le Glacier de Tuk Kâk (RES089)

```json
{
 "fiche": "RES089",
 "nom": "Le Glacier de Tuk Kâk",
 "recit": "Au pied du glacier de Tuk Kâk, les moines creusent des bassins carrés qu'ils laissent geler et dont ils découpent la glace en dalles pour les terrasses des sanctuaires. Le frère Sok Vanna les compte à chaque saison. Les bassins gèlent désormais de bas en haut.",
 "pal": [
  "Langue de glace descendant vers des bassins carrés, dalles bleues empilées sur des traîneaux de bambou, robes safran des moines sur la moraine.",
  "La glace remonte des bassins en marches régulières, comme taillées ; chaque matin il y a une terrasse de plus, et le froid sent la fleur de lotus."
 ]
}
```

## La Moraine bleue de Mer-Ikhem (RES267)

```json
{
 "fiche": "RES267",
 "nom": "La Moraine bleue de Mer-Ikhem",
 "recit": "Les faïenciers de Mer-Ikhem broient le sable de quartz que rejette la moraine et le cuisent en glaçure bleue pour les amulettes du temple. Le potier Nebamon en façonne cent par jour. Cette saison, les amulettes sortent froides du four, et leur glaçure craque comme une eau qui gèle.",
 "pal": [
  "Glacier bleu-blanc sous une falaise de grès, moraine de sable clair, fours de potier fumants, amulettes de faïence bleue qui sèchent sur des nattes.",
  "Les fours soufflent du givre ; la glaçure bleue gagne les moules, les nattes et les mains des potiers, et les amulettes s'empilent en congères turquoise."
 ]
}
```
