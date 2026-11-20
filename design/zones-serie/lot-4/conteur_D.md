# Lot 4 : conteur D (le Lovecraftien)

Douze zones à cartes (fiche + 14 cartes) et seize Ressources (fiche légère). Format : `CONSIGNES.md` (avec les leçons des lots 1, 2 et 3) et `cartes-2.2/consignes-cartes.md`, sections 4, 6 et 7. Nombres fixes ; budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 % ; forme du palier 7 entre 45 et 55 points, réveil de 60 à 100 % en plus.

Table de budget unique (leçon 7 du lot 3) : « alliés » ×1,5 sur la garde et le soin ; « tous » ×2,2 partout (dégâts, brûlure, hésitation, affaiblissement, marque, perce-garde) ; un effet sous `si` compte pour 50 % ; `exil` = prix de 3 ; `volVie` = moitié des dégâts de la carte (aucune carte de D n'en porte) ; `ignoreGarde` = 3 ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n ; `prixBete` n = n. Chaque budget est calculé par le script et rappelé dans le champ `budget`.

Recettes de récit (profil D), aucune reprise d'une recette du lot 3 sur la même forme : deux témoins (Marjanabad), rapport interrompu (Qilinpo), temps profond (eNhlwathi), arrivée (Ihuitepec), croyance du village (Tchernoskal), mesure et répétition (Srah Kbal), détail qui cloche dans une journée banale (Sara-Urqu), interrogatoire (Smolna Pouchtcha), aveu devant un tribunal (Per-Shena), rapport d'ingénieur complet (Sabzgarh), rite en étapes (Linn nan Lann), appel du soir et compte (Kār-Tâmti). Un seul récit tronqué (Qilinpo).

## Carte des familles (leçons 2 à 4 du lot 3)

La carte complète, avec les crochets, est dans `lot-4/familles_D.md`, écrite avant les cartes et relue contre `familles_B.md` (puis A et C au moment de la remise). Résumé :

| Zone | Pôle − : famille principale | Pôle + : famille principale |
|---|---|---|
| ANT095 Le Baoli de Marjanabad | Os : affaiblissement (le charognard décharne), invocations de charognards, prix sur la bête ; crochet `seul` | Corail : invocations de récif lentes à gros PV, garde des alliés, soin ; crochet `bete` |
| ANT223 Qilinpo, le Camp des Envoyés | Mort : brûlure (le feu de brousse), invocations de charognards du feu ; crochet `brule` | Vie : garde des alliés (le troupeau qui se referme), invocations, soin ; crochet `blesse` |
| ANT061 Les Hautes Termitières d'eNhlwathi | Ruine : gros coups ciblés (l'oryctérope ouvre la termitière), invocations de mangeurs de termites, perce-garde légère ; crochet `cibleGarde` | Abondance : coups au hasard (l'essaim ailé), invocations de la colonie, soin du héros ; crochet `elan` |
| ANT140 Ihuitepec, les Îles-Volières | Chaos : marque (les oiseaux lâchés désignent une proie), invocations, défausse en prix ; crochet `vol` | Ordre : mana de Vent (les plumes rangées), invocations en formation, garde ; crochet `pietine` |
| ANT005 La Berloga de Tchernoskal | Glace : garde du héros (la croûte de givre), invocations dormantes à gros PV, affaiblissement ; crochet `garde` | Feu : invocations de bêtes brûlantes, défausse en prix comme combustible, dégâts à tous en appoint (4 cartes) ; crochet `defausseAPrix` |
| ASS032 La Sala des Ôles de Srah Kbal | Oubli : affaiblissement de tous (on oublie comment frapper), Lois, exil ; crochet `elan` *(corrigé par le critique : `defausseCommune` ne peut plus être vrai)* | Mémoire : *(réécrit par le critique)* récupération sur 4, pioche, Lois ; crochet `defausseAPrix` |
| ASS100 Les Qollqa de Sara-Urqu | Pourriture : brûlure lente (la fermentation des greniers), Lois, prix « ennemis se soignent » ; crochets `brule` et `soinEnnemi` | Croissance : pioche (les semences qui germent), Lois, soin et garde des alliés ; crochet `troisCartes` |
| ASS098 Le Vétché de Smolna Pouchtcha | Pierre : garde du héros (la peau qui se fait pierre), Lois, affaiblissement ; crochet `garde` | Cristal : écho (la sève cristallisée résonne), Lois, pioche ; crochet `cartesJouees` (3 cartes) |
| DON035 Per-Shena, le Grenier sous la Glace | Ruine : riposte (les pièges de la tombe qui s'effondre), dégâts à tous, garde du héros ; crochet `pietine` | Abondance : garde des alliés (les sacs en rempart), mana de Glace, gros coups ; crochet `seul` |
| DON120 Sabzgarh, le Fort sur la Digue | Tyrannie : exil (le bannissement : la carte paie de sa présence), gros coups ciblés, hésitation ciblée ; crochet `hesite` | Liberté : dégâts à tous (la digue rompue), soin du héros, perce-garde légère ; crochet `elan` |
| DON083 Linn nan Lann, le Bassin des Lames pliées | Corruption : perce-garde (la rouille mange les armures), gros coups, marque, prix en PV ; crochet `cibleGarde` | Pureté : pioche (l'eau claire montre le fond), soin du héros, coups ciblés ; crochet `blesse` |
| CIT035 Kār-Tâmti, la Citadelle de l'Appel | Oubli : soin du héros (la garnison oublie ses blessures), garde du héros, défausse en prix ; crochet `defausseAPrix` | Mémoire : riposte (la rancune gravée), soldats (invocations), garde ; crochet `garde` |

- Familles plafonnées au lot (hésitation, hasard, vol de vie, écho, enchaînement) : D n'en prend que deux en famille principale, une fois chacune : les coups au hasard (ANT061 Abondance, l'essaim) et l'écho (ASS098 Cristal, la sève qui sonne). Aucune hésitation, aucun vol de vie, aucun enchaînement en principal ; l'enchaînement n'apparaît que sur 3 cartes (`troisCartes` d'ASS100 +, `cartesJouees` d'ASS098 +).
- Autres familles : 2 pôles au plus chez D pour chacune (affaiblissement, brûlure, garde du héros, riposte, garde des alliés, invocations, pioche) ; une seule fois la marque, la perce-garde, les gros coups et les dégâts à tous, que B tient déjà deux fois.
- Crochets : aucune condition sur 5 cartes ou plus dans un pôle (vérifié au script). Chaque pôle mêle au moins trois familles. Aucune hésitation de « tous » sur deux cartes qui se suivent (une seule carte en tout : la forme −7 de DON120).
- Prix : entre 5 et 6 cartes à prix sur 7 dans chaque pôle, et le même nombre aux deux pôles d'une zone (vérifié au script).

## Mots de pôle déjà en jeu : cartes relues avant d'écrire

- **Os / Corail** (ASS002 : affaiblissement et brûlure / pioche, garde, riposte ; ASS055 : hasard / mana ; au lot 4, A CIT039, C DON061 et CIT003). ANT095 est un Antre : charognards qui affaiblissent / bêtes de récif lentes et garde des alliés. Aucune mer fossile sous le désert (c'était l'image d'ASS002) : ici le corail pousse sur les os, au fond d'un puits.
- **Mort / Vie** (sept zones, presque toutes invocations et soin ; au lot 4, B ASS014 : exil / mana). ANT223 : la Mort brûle (brûlure), la Vie dresse la garde du troupeau ; ni soin ni pioche en famille principale.
- **Ruine / Abondance** (ANT086, ANT165, DON017 : dégâts à tous ; DON105 : gros coups payés en défausse, marque ; CIT012 : garde ; au lot 4, C ASS143). ANT061 : gros coups ciblés sur l'ennemi qui s'abrite / averse au hasard ; DON035 : riposte des pièges / garde des alliés et mana. Les dégâts à tous restent en appoint (4 cartes au plus).
- **Chaos / Ordre** (hasard et garde partout ; CIT030, mon lot 3 : brûlure / garde et cadence ; au lot 4, B ANT211 : perce-garde / riposte). ANT140 : marque / mana de Vent et formation.
- **Glace / Feu** (ASS030 : perce-garde et marque / brûlure de tous ; DON013 : garde / brûlure de tous ; au lot 4, C ANT184). ANT005 : garde du héros et bêtes dormantes / bêtes brûlantes ; la brûlure n'est qu'une touche (2 cartes).
- **Oubli / Mémoire** (ANT179 : gros coups et exil / enchaînement ; ASS071 : dégâts et hésitation de tous / pioche et écho ; au lot 4, A ASS172 et DON072, C ANT202). ASS032 : affaiblissement de tous / récupération et marque ; CIT035 : soin du héros / riposte. Deux images différentes : la glace qui emporte et rend des ôles, l'argile crue qui fond à l'air salé.
- **Pourriture / Croissance** (CIT041 : affaiblissement et garde / récupération et bêtes ; DON051 : marque / riposte ; au lot 4, B ANT040 : dégâts à tous / invocations et mana de Vent). ASS100 : brûlure lente et Lois / pioche, soin et garde des alliés ; le mana n'y est qu'une touche.
- **Pierre / Cristal** (aucun avant le lot 4 ; B DON115 : dégâts à tous / marque ; C ANT195). ASS098 : garde du héros et affaiblissement / écho.
- **Corruption / Pureté** (CIT002 : garde / perce-garde et exil ; ANT066 : brûlure / duel ; au lot 4, B ANT001 : vol de vie / enchaînement, B ASS048 : défausse comme carburant / récupération). DON083 : perce-garde (la rouille) / pioche et soin.
- **Tyrannie / Liberté** (aucun avant le lot 4 ; A ANT166 au lot 4). DON120 : exil et coups lourds sur une cible figée / dégâts à tous et soin.

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT095 Le Baoli de Marjanabad | Givre / Sang | Racine / Braise |
| ANT223 Qilinpo, le Camp des Envoyés | Braise / Racine | Racine / Sceau |
| ANT061 Les Hautes Termitières d'eNhlwathi | Abîme / Racine | Racine / Sceau |
| ANT140 Ihuitepec, les Îles-Volières | Sang / Abîme | Sceau / Racine |
| ANT005 La Berloga de Tchernoskal | Givre / Braise | Braise / Givre |
| ASS032 La Sala des Ôles de Srah Kbal | Abîme / Givre | Sceau / Abîme |
| ASS100 Les Qollqa de Sara-Urqu | Braise / Sang | Sceau / Racine |
| ASS098 Le Vétché de Smolna Pouchtcha | Givre / Sceau | Sceau / Givre |
| DON035 Per-Shena, le Grenier sous la Glace | Sang / Abîme | Racine / Sang |
| DON120 Sabzgarh, le Fort sur la Digue | Abîme / Sang | Braise / Abîme |
| DON083 Linn nan Lann, le Bassin des Lames pliées | Abîme / Braise | Givre / Sceau |
| CIT035 Kār-Tâmti, la Citadelle de l'Appel | Sang / Givre | Sang / Braise |

Chaque résonance est posée 4 fois et réveillée 4 fois dans mes douze zones ; aucune forme ne réveille ce qu'elle pose. Chaîne de trois possible, par exemple : ANT005 Feu pose Braise → DON083 Corruption la réveille et pose Abîme → ASS032 Mémoire le réveille et pose Sceau.

## ±7 : recettes tournantes

- −7 : os qui comblent un puits (Marjanabad), incendie couché (Qilinpo), ruine ouverte comme un fruit (eNhlwathi), cages éventrées (Ihuitepec), gel en marche (Tchernoskal), conseil pris sous la glace (Srah Kbal), fermentation (Sara-Urqu), pétrification (Smolna Pouchtcha), glace refermée sur des pendus (Per-Shena), boue craquelée et corvée (Sabzgarh), eau de poix sans reflet (Linn nan Lann), oubli des noms (Kār-Tâmti).
- +7 : caravane branchue qui respire (Marjanabad), démesure du troupeau (Qilinpo), essaim qui fait la nuit (eNhlwathi), mosaïque d'oiseaux immobile (Ihuitepec), montagne-four (Tchernoskal), foule des conseils rendus (Srah Kbal), greniers qui marchent (Sara-Urqu), forêt claire qui sonne (Smolna Pouchtcha), foule de petits scribes (Per-Shena), dormeurs au fil de l'eau (Sabzgarh), forêt d'épées debout (Linn nan Lann), la mer qui répond à l'appel (Kār-Tâmti).
- Aucun +7 peint ou teint, aucun végétal qui avale un bâtiment. Une seule architecture qui devient organisme au +7 (les greniers de Sara-Urqu), conformément au profil D. Les nombres précis de mes fiches et ambiances (quatre-vingt-quatre, vingt-sept et vingt-neuf, trois cent vingt, deux cent six, cent soixante-neuf) n'apparaissent chacun que dans une zone, et aucun ne figure dans les listes finales d'A, B et C (« vingt-deux » d'abord prévu pour Qilinpo est laissé à B ; les visages de Smolna Pouchtcha passent de trois à « deux, puis trois » pour laisser « quatre » à B).

## Gestes des Ressources (geste, objet, image)

creuser la galerie du kariz à la lampe, au fond des puits, et envoyer les déblais au treuil (RES006) · charger de minerai les fourneaux d'argile que le vent de mer attise (RES018) · détacher au percuteur de basalte des écailles d'une pierre de fer tombée du ciel (RES040) · cueillir les crocus à l'aube et en séparer les stigmates à l'ongle (RES096) · faire rouler les meules taillées jusqu'à la vallée, une perche passée dans l'œil (RES346) · balayer le guano des chauves-souris dans les tours, au crépuscule (RES260) · inciser les lames des chapeaux et recueillir leur lait dans des calebasses (RES242) · mener en laisse les loutres dressées qui rabattent le poisson vers les filets (RES103) · pendre les grappes dans des maisons de brique ajourées où passe le vent chaud (RES016) · tendre des rets sur les grèves pour les cailles épuisées qui tombent du ciel (RES084) · monter aux échelles de bambou pour décoller les nids de salanganes (RES282) · tresser la vigne en corbeille au ras de la cendre, contre le vent (RES034) · descendre des nasses de pandanus dans le nuage sous l'île et les remonter pleines d'eau (RES241) · enfiler les tranches de chapeau sur des fils de paille et les pendre sous l'auvent (RES233) · scier le marbre au fil de fer, au sable et à l'eau (RES127) · pêcher à la torche et à l'épuisette les crevettes rouges des vasques souterraines (RES268).

Structures de chute : aucune Ressource sur « un nom, un compte chiffré, puis une anomalie de cette année ». Trois finissent sur un détail qui inquiète (RES006, RES040, RES242), deux sur une croyance rapportée (RES346, RES260), les onze autres sur un geste ou une image. RES127 (marbre scié) remplace le mumiyo d'abord prévu, que B avait déjà pris (RES028) ; RES096 (crocus) remplace la gomme de férule, que A a aussi prévue (RES211, Volcan perse) ; RES006 creuse la galerie (et ne remonte plus la vase, geste proche de RES240 chez C).

## Notes pour le critique

- **Plafonds du lot** : D prend un pôle de coups au hasard (ANT061 +) et un pôle d'écho (ASS098 +). Avec l'écho de B (ANT225 −), l'écho est plein pour le lot. Il reste à A et C : deux hésitations, un hasard, un vol de vie, un enchaînement.
- **Mots de pôle en nombre** : cinq pôles Oubli/Mémoire dans le lot (A ASS172 et DON072, C ANT202, D ASS032 et CIT035). Mes deux zones ont été séparées entre elles (affaiblissement et récupération contre soin et riposte) ; à croiser avec A et C.
- **DON120 Tyrannie et `exil`** : six cartes sur sept s'exilent (dont la forme −7). C'est la famille du pôle (la digue ne se bâtit qu'une fois par combat), comptée comme un prix de 3. Les cartes sont donc fortes et à usage unique, comme l'était la Peste d'ASS096 au lot 3.
- **Conditions qui lisent l'ennemi en tête** (`elan`, `pietine`) sur des cartes sans cible : le moteur lit alors le premier ennemi vivant ; le texte dit « l'ennemi en tête ».
- **`defausseCommune`** (ASS032 −) : vrai si une carte commune (sans zone) est dans la défausse. Condition peu employée jusqu'ici ; elle dit l'oubli des gestes de base.
- **Collisions avec A et C, relevées à la remise** (familles_A.md et familles_C.md ont été écrits deux minutes après familles_D.md ; selon la règle, le premier garde sa famille, mais je les signale) :
  - **CIT035 (D) et ASS172 (A), Oubli / Mémoire** : mêmes familles principales (soin du héros / riposte) et même crochet `garde` au pôle +. Les images diffèrent (argile crue à l'air salé contre bardes du canyon), pas les mécaniques : l'un des deux doit changer.
  - **ANT095 Corail (D) et CIT039 Corail (A)** : invocations, garde des alliés et crochet `bete` des deux côtés (bêtes de récif contre soldats et bloqueurs).
  - **ASS032 Mémoire (D) et ANT202 Mémoire (C)** : récupération en principal des deux côtés ; D l'accompagne de Lois et de marque (`vulnerable`), C de bêtes (`bete`).
  - **ANT005 Feu (D) et ANT184 Feu (C)** : C a les dégâts à tous en principal ; j'ai ramené les miens à 4 cartes (le Feu de D est fait de bêtes et de cartes brûlées en prix).
  - **Plafonds du lot** : avec les quatre cartes de familles, garde du héros (8), invocations (9), affaiblissement, perce-garde, riposte, brûlure et dégâts à tous (7 chacune) dépassent 6. Dans l'ordre d'écriture (B, D, C, A), B + D + C restent à 6 ou moins pour chacune ; le dépassement vient des derniers pôles écrits. L'hésitation est pleine (A ANT200, B ANT089) ; D n'en prend aucune.
- **Récits** : un seul tronqué (Qilinpo) ; une seule fin sur une phrase courte du type « Elles parlent de nous » (Srah Kbal). Pas de « La Chose-qui- », pas de mot de l'indicible (vérifié au script).

---

## Le Baoli de Marjanabad (ANT095 · Antre · Oasis · Sève · moghole)

```json
{
 "fiche": "ANT095",
 "nom": "Le Baoli de Marjanabad",
 "recit": "Deux voyageurs ont décrit le baoli de Marjanabad, le puits à degrés de l'oasis. Le chamelier Rahim Bakhsh y compte quatre-vingt-quatre marches, une carcasse de bête sur chaque palier et des chacals qui descendent boire la nuit. L'arpenteur Mir Jafar n'a vu ni chacals ni carcasses : une eau verte, des rameaux de corail qui montent du fond, et des marches qu'il n'a pas pu compter, tant elles étaient couvertes. Ils s'accordent sur un seul point. Au fond, sous l'eau, un chameau se tient debout, blanc jusqu'aux cils.",
 "pal": [
  "Le baoli est à sec jusqu'au dernier palier ; des os blanchis comblent les marches, et les chacals y dorment en rang, la tête tournée vers le fond.",
  "L'eau baisse d'une marche par nuit ; des carcasses de chameaux restent prises aux paliers, et des vautours attendent sur les arcs du pavillon.",
  "Oasis de palmiers autour d'un puits à degrés moghol : arcs de grès, paliers ombreux, eau verte au fond, caravaniers qui descendent remplir les outres.",
  "Des rameaux de corail montent le long des marches ; les outres reviennent pleines d'une eau salée, et un crabe pâle garde chaque palier.",
  "Le corail a passé la margelle et gagne les palmiers ; sur chaque marche, une caravane entière se tient immobile, branchue, et ses flancs se soulèvent."
 ],
 "pm": "Os",
 "pp": "Corail"
}
```

### Pôle − Os

Progression : le chacal du premier palier, les marches nettoyées, le vautour des arcs, la carcasse au palier, le chameau sans peau, les chacals en rang, puis le puits n'est plus qu'os. Style : on ronge l'ennemi (il perd son attaque pour tout le combat) pendant que les charognards tiennent le terrain ; contre un ennemi resté seul, on finit de le décharner. Prix : la bête la plus faible est mangée par les autres, ou le héros saigne.

```json
[
{"id": "ANT095-moins-1", "zone": "ANT095", "pole": "-", "palier": 1, "nom": "Le chacal du premier palier", "cout": 1, "cible": 1, "effet": "Un chacal monte du premier palier : 6 PV, frappe 2. La cible perd 1 d'attaque et subit 1 dégât.", "ops": [["invoque", "Chacal du baoli", 6, 2], ["affaiblit", "cible", 1], ["deg", "cible", 1]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Dégâts"], "ambiance": "Rahim Bakhsh jure que le chacal du premier palier l'attend chaque soir, assis, comme un portier.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT095-moins-2", "zone": "ANT095", "pole": "-", "palier": 2, "nom": "Les marches nettoyées", "cout": 1, "cible": 1, "effet": "La cible perd 2 d'attaque et subit 5 dégâts. S'il ne reste qu'un ennemi : il perd encore 2 d'attaque. Le héros perd 2 PV.", "ops": [["affaiblit", "cible", 2], ["deg", "cible", 5], ["si", "seul", [["affaiblit", "cible", 2]]], ["prixPV", 2]], "tags": ["Antre", "Sève", "Pôle −", "Affaiblissement", "Dégâts", "Condition", "Prix"], "ambiance": "Au matin, les marches du baoli sont propres ; les carcasses de la veille n'ont laissé que l'os, rangé.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT095-moins-3", "zone": "ANT095", "pole": "-", "palier": 3, "nom": "Le vautour des arcs", "cout": 1, "cible": 0, "effet": "Un vautour quitte les arcs du pavillon : 10 PV, frappe 3. Tous les ennemis perdent 1 d'attaque. Votre bête la plus faible perd 2 PV.", "ops": [["invoque", "Vautour des arcs", 10, 3], ["affaiblit", "tous", 1], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Sur les arcs de grès, les vautours de Marjanabad attendent dans l'ordre où ils sont arrivés, et pas autrement.", "budget": "14,1 (cible 15, écart -6 % ; vérifié au script)"},
{"id": "ANT095-moins-4", "zone": "ANT095", "pole": "-", "palier": 4, "nom": "La carcasse au palier", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 2 d'attaque et subissent 4 dégâts. S'il ne reste qu'un ennemi : il perd 2 d'attaque et subit 6 dégâts. Votre bête la plus faible perd 2 PV.", "ops": [["affaiblit", "tous", 2], ["deg", "tous", 4], ["si", "seul", [["affaiblit", "cible", 2], ["deg", "cible", 6]]], ["prixBete", 2]], "tags": ["Antre", "Sève", "Pôle −", "Affaiblissement", "Dégâts", "Condition", "Prix"], "ambiance": "Chaque palier du puits garde sa carcasse ; quand l'eau baisse d'une marche, une carcasse neuve l'attend déjà.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT095-moins-5", "zone": "ANT095", "pole": "-", "palier": 5, "nom": "Le chameau sans peau", "cout": 2, "cible": 1, "effet": "Un chameau décharné remonte les marches : 20 PV, frappe 6. La cible perd 3 d'attaque et subit 4 dégâts. Le héros perd 3 PV.", "ops": [["invoque", "Chameau décharné", 20, 6], ["affaiblit", "cible", 3], ["deg", "cible", 4], ["prixPV", 3]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Le chameau tombé au troisième palier remonte au crépuscule avec la caravane, plus léger, et personne ne le décharge.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT095-moins-6", "zone": "ANT095", "pole": "-", "palier": 6, "nom": "Les chacals en rang", "cout": 2, "cible": 1, "effet": "Une meute de chacals se couche sur les marches : 16 PV, frappe 5. Tous les ennemis perdent 2 d'attaque et subissent 1 dégât. S'il ne reste qu'un ennemi : il perd encore 3 d'attaque.", "ops": [["invoque", "Meute de chacals", 16, 5], ["affaiblit", "tous", 2], ["deg", "tous", 1], ["si", "seul", [["affaiblit", "cible", 3]]]], "tags": ["Antre", "Sève", "Pôle −", "Invocation", "Affaiblissement", "Dégâts", "Condition"], "ambiance": "Les chacals du baoli dorment en rang sur les os, tête tournée vers le fond ; ils ne rêvent pas.", "budget": "35,4 (cible 36, écart -2 % ; vérifié au script)"},
{"id": "ANT095-moins-7", "zone": "ANT095", "pole": "-", "palier": 7, "nom": "L'Ossuaire des marches", "cout": 3, "cible": 0, "effet": "Le puits n'est plus qu'os. Un gardien d'os se lève (24 PV, frappe 6). Tous −3 d'attaque, 4 dégâts à tous. Votre bête la plus faible perd 5 PV. Pose Givre. Si Sang (consommé) : 8 dégâts à tous, tous −1 d'attaque, héros soigné de 6.", "ops": [["invoque", "Gardien d'os", 24, 6], ["affaiblit", "tous", 3], ["deg", "tous", 4], ["prixBete", 5], ["pose", "Givre"], ["reveil", "Sang", true, [["deg", "tous", 8], ["affaiblit", "tous", 1], ["soin", "heros", 6]]]], "tags": ["Antre", "Sève", "Forme ultime −7", "Invocation", "Affaiblissement", "Dégâts", "Prix", "Pose Givre", "Réveil Sang"], "ambiance": "Le baoli de Marjanabad est comblé d'os jusqu'à la margelle, et les marches, dessous, se comptent encore à la main.", "budget": "44,6 (+30,2 si Sang, soit +68 % ; vérifié au script)"}
]
```

### Pôle + Corail

Progression : le crabe pâle, la margelle qui ramifie, l'éponge des paliers, le poisson-perroquet, le chameau branchu, la caravane qui respire, puis le récif passe la margelle. Style : des bêtes lentes et épaisses qui encaissent, une garde qui couvre tout le camp et se renforce quand une bête est déjà là. Prix : l'eau salée soigne aussi l'ennemi, ou coûte une carte.

```json
[
{"id": "ANT095-plus-1", "zone": "ANT095", "pole": "+", "palier": 1, "nom": "Le crabe pâle", "cout": 1, "cible": 0, "effet": "Un crabe pâle garde le palier : 10 PV, frappe 2. Le héros gagne 3 de garde.", "ops": [["invoque", "Crabe pâle", 10, 2], ["garde", "heros", 3]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Garde"], "ambiance": "Mir Jafar a noté un crabe pâle par palier, d'eau douce, qui n'avait aucune raison d'être là.", "budget": "10,4 (cible 10, écart +4 % ; vérifié au script)"},
{"id": "ANT095-plus-2", "zone": "ANT095", "pole": "+", "palier": 2, "nom": "La margelle qui ramifie", "cout": 1, "cible": 0, "effet": "Si une bête est en jeu : vos alliés gagnent 4 de garde. Vos alliés gagnent 6 de garde et se soignent de 3. Chaque ennemi se soigne de 1.", "ops": [["si", "bete", [["garde", "allies", 4]]], ["garde", "allies", 6], ["soin", "allies", 3], ["ennemiSoin", 1]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Garde", "Soin", "Prix"], "ambiance": "Les rameaux de corail ont pris sur la margelle de grès, et ils poussent du côté où l'on puise.", "budget": "11,9 (cible 12,5, écart -5 % ; vérifié au script)"},
{"id": "ANT095-plus-3", "zone": "ANT095", "pole": "+", "palier": 3, "nom": "L'éponge des paliers", "cout": 1, "cible": 0, "effet": "Une éponge des paliers s'accroche aux marches : 22 PV, frappe 1. Vos alliés se soignent de 2. Le héros perd 1 PV.", "ops": [["invoque", "Éponge des paliers", 22, 1], ["soin", "allies", 2], ["prixPV", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Soin", "Prix"], "ambiance": "L'éponge du quatrième palier a doublé depuis la saison dernière ; elle boit l'eau des outres posées à côté d'elle.", "budget": "14,5 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ANT095-plus-4", "zone": "ANT095", "pole": "+", "palier": 4, "nom": "Le poisson-perroquet", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : vos alliés gagnent 4 de garde. Un poisson-perroquet broute le corail : 18 PV, frappe 5. Vos alliés gagnent 6 de garde.", "ops": [["si", "bete", [["garde", "allies", 4]]], ["invoque", "Poisson-perroquet du puits", 18, 5], ["garde", "allies", 6]], "tags": ["Antre", "Sève", "Pôle +", "Condition", "Garde", "Invocation"], "ambiance": "Le poisson-perroquet du baoli broute le corail des marches, et rejette du sable blanc qui n'existe pas dans l'oasis.", "budget": "26,1 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT095-plus-5", "zone": "ANT095", "pole": "+", "palier": 5, "nom": "Le chameau branchu", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : vos alliés se soignent de 4. Un chameau de corail sort de l'eau : 30 PV, frappe 4. Le héros gagne 12 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["soin", "allies", 4]]], ["invoque", "Chameau de corail", 30, 4], ["garde", "heros", 12], ["prixDefausse", 1]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Garde", "Soin", "Condition", "Prix"], "ambiance": "Le chameau du fond a remonté les marches, branchu jusqu'aux cils, et il a rejoint la caravane sans qu'on l'appelle.", "budget": "30,6 / 32,0 (-4 %), recalculé par le critique"},
{"id": "ANT095-plus-6", "zone": "ANT095", "pole": "+", "palier": 6, "nom": "La caravane qui respire", "cout": 2, "cible": 0, "effet": "Une caravane de corail s'arrête sur les marches : 26 PV, frappe 6. Vos alliés gagnent 10 de garde et se soignent de 4. Chaque ennemi se soigne de 2.", "ops": [["invoque", "Caravane de corail", 26, 6], ["garde", "allies", 10], ["soin", "allies", 4], ["ennemiSoin", 2]], "tags": ["Antre", "Sève", "Pôle +", "Invocation", "Garde", "Soin", "Prix"], "ambiance": "La caravane du septième palier est couverte de rameaux ; on ne la voit pas bouger, mais ses flancs se soulèvent.", "budget": "35,6 (cible 36, écart -1 % ; vérifié au script)"},
{"id": "ANT095-plus-7", "zone": "ANT095", "pole": "+", "palier": 7, "nom": "Le Récif de Marjanabad", "cout": 3, "cible": 0, "effet": "Le corail passe la margelle. Un récif vivant se dresse (36 PV, frappe 5) ; alliés +12 de garde, soignés de 6. Le héros perd 4 PV. Pose Racine. Si Braise (consommée) : une caravane figée (20 PV, frappe 3), alliés +10 de garde, soignés de 2.", "ops": [["invoque", "Récif vivant", 36, 5], ["garde", "allies", 12], ["soin", "allies", 6], ["prixPV", 4], ["pose", "Racine"], ["reveil", "Braise", true, [["invoque", "Caravane figée", 20, 3], ["garde", "allies", 10], ["soin", "allies", 2]]]], "tags": ["Antre", "Sève", "Forme ultime +7", "Invocation", "Garde", "Soin", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "Le récif gagne les palmiers ; les caravaniers qui puisent à Marjanabad repartent avec une eau salée, et moins vite.", "budget": "44,9 (+29,5 si Braise, soit +66 % ; vérifié au script)"}
]
```

---

## Qilinpo, le Camp des Envoyés (ANT223 · Antre · Savane · Feu · chinoise impériale)

```json
{
 "fiche": "ANT223",
 "nom": "Qilinpo, le Camp des Envoyés",
 "recit": "Rapport de l'envoyé Zhao Mingyu au Bureau des Présages. Nous campons depuis la saison sèche au bord de la savane de Qilinpo, qu'on brûle chaque année. Le qilin est venu au troisième feu, comme promis : le cou plus haut que les acacias, la robe semée de taches régulières. Il broute les pousses qui sortent de la cendre le lendemain même. Nous l'avons mesuré au bambou : vingt-sept pieds. Au matin, vingt-neuf. Les petits nés sous la cendre ont déjà notre taille. Je prie le Bureau d'envoyer un bambou plus long, et des ordres sur ce qu'il faut faire des",
 "pal": [
  "La savane n'est qu'un feu couché d'un horizon à l'autre ; les acacias tiennent debout, noirs, et des marabouts marchent dans les flammes sans hâte.",
  "Les brûlis s'élargissent chaque soir ; les tentes de l'envoyé sont roussies, et des gazelles cuisent sous la cendre, les pattes repliées comme pour dormir.",
  "Savane d'herbe haute piquée d'acacias, camp de tentes de soie au bord d'un brûlis, bambous de mesure plantés en ligne, cendre fraîche où pointe le vert.",
  "L'herbe repousse le lendemain du feu et passe les tentes ; des qilins tachetés broutent à hauteur des bambous, suivis de petits déjà grands comme des chevaux.",
  "Un troupeau de qilins couvre la savane jusqu'à l'horizon ; leurs cous passent les nuages bas, et le camp de l'envoyé tient entre leurs sabots."
 ],
 "pm": "Mort",
 "pp": "Vie"
}
```

### Pôle − Mort

Progression : la première cendre, le marabout du brûlis, les gazelles sous la cendre, la hyène aux pattes roussies, le feu couché, les marabouts dans les flammes, puis la savane brûle debout. Style : on allume, et l'on frappe plus fort ce qui brûle déjà ; les charognards marchent dans le feu. Prix : le héros se roussit, la bête la plus faible y reste.

```json
[
{"id": "ANT223-moins-1", "zone": "ANT223", "pole": "-", "palier": 1, "nom": "La première cendre", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : 3 dégâts. La cible subit 3 dégâts et brûle de 2 pendant 3 tours.", "ops": [["si", "brule", [["deg", "cible", 3]]], ["deg", "cible", 3], ["brulure", "cible", 2, 3]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps"], "ambiance": "Les gens de Qilinpo allument le premier feu à la main, et ne regardent jamais de quel côté il part.", "budget": "10,5 (cible 10, écart +5 % ; vérifié au script)"},
{"id": "ANT223-moins-2", "zone": "ANT223", "pole": "-", "palier": 2, "nom": "Le marabout du brûlis", "cout": 1, "cible": 1, "effet": "Si la cible brûle déjà : 4 dégâts. Un marabout arpente le brûlis : 8 PV, frappe 2. La cible brûle de 2 pendant 2 tours. Le héros perd 1 PV.", "ops": [["si", "brule", [["deg", "cible", 4]]], ["invoque", "Marabout du brûlis", 8, 2], ["brulure", "cible", 2, 2], ["prixPV", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Invocation", "Dégâts dans le temps", "Prix"], "ambiance": "Le marabout marche devant les flammes au pas de l'envoyé, et s'arrête quand il s'arrête.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT223-moins-3", "zone": "ANT223", "pole": "-", "palier": 3, "nom": "Les gazelles sous la cendre", "cout": 1, "cible": 0, "effet": "Tous les ennemis brûlent de 1 pendant 3 tours et subissent 4 dégâts.", "ops": [["brulure", "tous", 1, 3], ["deg", "tous", 4]], "tags": ["Antre", "Feu", "Pôle −", "Dégâts dans le temps", "Dégâts"], "ambiance": "Sous la cendre de Qilinpo, les gazelles ont les pattes repliées comme pour dormir, toutes tournées vers le camp.", "budget": "15,4 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "ANT223-moins-4", "zone": "ANT223", "pole": "-", "palier": 4, "nom": "La hyène aux pattes roussies", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : elle brûle de 3 pendant 2 tours de plus. Une hyène roussie sort de la fumée : 16 PV, frappe 5. La cible brûle de 3 pendant 3 tours. Le héros perd 2 PV.", "ops": [["si", "brule", [["brulure", "cible", 3, 2]]], ["invoque", "Hyène roussie", 16, 5], ["brulure", "cible", 3, 3], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts dans le temps", "Invocation", "Prix"], "ambiance": "La hyène de Qilinpo a les pattes roussies jusqu'au jarret, et elle revient au brûlis chaque soir.", "budget": "25,5 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "ANT223-moins-5", "zone": "ANT223", "pole": "-", "palier": 5, "nom": "Le feu couché", "cout": 2, "cible": 1, "effet": "Si la cible brûle déjà : 8 dégâts. Tous les ennemis brûlent de 2 pendant 4 tours. La cible subit 11 dégâts. Le héros perd 3 PV.", "ops": [["si", "brule", [["deg", "cible", 8]]], ["brulure", "tous", 2, 4], ["deg", "cible", 11], ["prixPV", 3]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Le feu de Qilinpo se couche la nuit sans s'éteindre, et se relève à l'aube exactement où on l'avait laissé.", "budget": "29,6 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ANT223-moins-6", "zone": "ANT223", "pole": "-", "palier": 6, "nom": "Les marabouts dans les flammes", "cout": 2, "cible": 1, "effet": "Des marabouts traversent le feu : 20 PV, frappent 5. Tous les ennemis brûlent de 2 pendant 3 tours. La cible subit 6 dégâts. Votre bête la plus faible perd 3 PV.", "ops": [["invoque", "Marabouts du feu", 20, 5], ["brulure", "tous", 2, 3], ["deg", "cible", 6], ["prixBete", 3]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Dégâts dans le temps", "Dégâts", "Prix"], "ambiance": "Les marabouts marchent dans les flammes sans hâte ; l'envoyé a noté que leurs plumes ne prennent pas.", "budget": "33,7 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ANT223-moins-7", "zone": "ANT223", "pole": "-", "palier": 7, "nom": "La Savane couchée", "cout": 3, "cible": 1, "effet": "La savane brûle debout. Un marabout de cendre se lève (20 PV, frappe 6). Tous brûlent de 3 pendant 4 tours ; 2 dégâts à tous. Le héros perd 4 PV. Pose Braise. Si Racine (consommée) : tous brûlent de 2 pendant 3 tours, 6 dégâts à tous, 6 à la cible.", "ops": [["invoque", "Marabout de cendre", 20, 6], ["brulure", "tous", 3, 4], ["deg", "tous", 2], ["prixPV", 4], ["pose", "Braise"], ["reveil", "Racine", true, [["brulure", "tous", 2, 3], ["deg", "tous", 6], ["deg", "cible", 6]]]], "tags": ["Antre", "Feu", "Forme ultime −7", "Invocation", "Dégâts dans le temps", "Dégâts", "Prix", "Pose Braise", "Réveil Racine"], "ambiance": "Les acacias de Qilinpo tiennent debout dans le feu, noirs et entiers, et le feu les contourne avec soin.", "budget": "45,8 (+32,4 si Racine, soit +71 % ; vérifié au script)"}
]
```

### Pôle + Vie

Progression : la pousse dans la cendre, le petit sous la mère, le bambou de mesure, le qilin tacheté, l'herbe qui passe les tentes, le troupeau qui se referme, puis les qilins couvrent la savane. Style : le camp se couvre d'une garde épaisse et de grandes bêtes qui grandissent ; plus le héros est blessé, plus le troupeau se referme. Prix : l'herbe nourrit aussi l'ennemi, et le troupeau dresse ses gardes en face.

```json
[
{"id": "ANT223-plus-1", "zone": "ANT223", "pole": "+", "palier": 1, "nom": "La pousse dans la cendre", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 5 de garde. Le héros se soigne de 3. Si vous êtes sous la moitié de vos PV : il se soigne de 3 de plus.", "ops": [["garde", "allies", 5], ["soin", "heros", 3], ["si", "blesse", [["soin", "heros", 3]]]], "tags": ["Antre", "Feu", "Pôle +", "Garde", "Soin", "Condition"], "ambiance": "La pousse sort de la cendre le lendemain du feu, et l'envoyé la mesure avant même d'avoir déjeuné.", "budget": "10,5 (cible 10, écart +5 % ; vérifié au script)"},
{"id": "ANT223-plus-2", "zone": "ANT223", "pole": "+", "palier": 2, "nom": "Le petit sous la mère", "cout": 1, "cible": 0, "effet": "Un petit qilin se serre sous sa mère : 10 PV, frappe 2. Vos alliés gagnent 5 de garde. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Petit qilin", 10, 2], ["garde", "allies", 5], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Garde", "Prix"], "ambiance": "Le petit sous la cendre a la taille d'un poulain le premier soir, celle de sa mère le troisième.", "budget": "11,8 (cible 12,5, écart -6 % ; vérifié au script)"},
{"id": "ANT223-plus-3", "zone": "ANT223", "pole": "+", "palier": 3, "nom": "Le bambou de mesure", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 8 de garde. Piochez 1 carte. Si vous êtes sous la moitié de vos PV : vos alliés gagnent 4 de garde de plus.", "ops": [["garde", "allies", 8], ["pioche", 1], ["si", "blesse", [["garde", "allies", 4]]]], "tags": ["Antre", "Feu", "Pôle +", "Garde", "Pioche", "Condition"], "ambiance": "Le bambou de mesure planté hier ne suffit plus ; Zhao Mingyu en fait lier deux bout à bout.", "budget": "16 (cible 15, écart +7 % ; vérifié au script)"},
{"id": "ANT223-plus-4", "zone": "ANT223", "pole": "+", "palier": 4, "nom": "Le qilin tacheté", "cout": 2, "cible": 0, "effet": "Si vous êtes sous la moitié de vos PV : vos alliés se soignent de 4. Un qilin tacheté broute au-dessus des tentes : 24 PV, frappe 4. Vos alliés gagnent 8 de garde. Chaque ennemi se soigne de 2.", "ops": [["si", "blesse", [["soin", "allies", 4]]], ["invoque", "Qilin tacheté", 24, 4], ["garde", "allies", 8], ["ennemiSoin", 2]], "tags": ["Antre", "Feu", "Pôle +", "Condition", "Soin", "Invocation", "Garde", "Prix"], "ambiance": "Les taches du qilin sont régulières : l'envoyé les a comptées, et le lendemain, il y avait une rangée de plus.", "budget": "26,2 (cible 28, écart -6 % ; vérifié au script)"},
{"id": "ANT223-plus-5", "zone": "ANT223", "pole": "+", "palier": 5, "nom": "L'herbe qui passe les tentes", "cout": 2, "cible": 0, "effet": "Une antilope de la repousse saute la haie : 10 PV, frappe 3. Vos alliés gagnent 15 de garde. Piochez 2 cartes. Chaque ennemi gagne 2 de garde.", "ops": [["invoque", "Antilope de la repousse", 10, 3], ["garde", "allies", 15], ["pioche", 2], ["ennemiGarde", 2]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Garde", "Pioche", "Prix"], "ambiance": "L'herbe repoussée en une nuit passe le faîte des tentes de soie, et le camp ne voit plus le ciel.", "budget": "31,5 (cible 32, écart -2 % ; vérifié au script)"},
{"id": "ANT223-plus-6", "zone": "ANT223", "pole": "+", "palier": 6, "nom": "Le troupeau qui se referme", "cout": 2, "cible": 0, "effet": "Un qilin de la savane rejoint le troupeau : 30 PV, frappe 5. Vos alliés gagnent 10 de garde. Si vous êtes sous la moitié de vos PV : vos alliés se soignent de 5. Chaque ennemi se soigne de 2.", "ops": [["invoque", "Qilin de la savane", 30, 5], ["garde", "allies", 10], ["si", "blesse", [["soin", "allies", 5]]], ["ennemiSoin", 2]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Garde", "Condition", "Soin", "Prix"], "ambiance": "Quand un homme du camp tombe malade, les qilins se couchent autour de sa tente, et ne s'en vont plus.", "budget": "33,9 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ANT223-plus-7", "zone": "ANT223", "pole": "+", "palier": 7, "nom": "Le Troupeau des Qilins", "cout": 3, "cible": 0, "effet": "Le troupeau couvre la savane. Une harde de qilins se lève (32 PV, frappe 6) ; alliés +14 de garde, soignés de 5. Chaque ennemi se soigne de 2. Pose Racine. Si Sceau (consommé) : alliés +12 de garde, soignés de 6 ; piochez 2.", "ops": [["invoque", "Harde de qilins", 32, 6], ["garde", "allies", 14], ["soin", "allies", 5], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sceau", true, [["garde", "allies", 12], ["soin", "allies", 6], ["pioche", 2]]]], "tags": ["Antre", "Feu", "Forme ultime +7", "Invocation", "Garde", "Soin", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Entre les sabots des qilins, le camp de Qilinpo attend les ordres du Bureau ; les bambous ne servent plus.", "budget": "44,9 (+31,4 si Sceau, soit +70 % ; vérifié au script)"}
]
```

---

## Les Hautes Termitières d'eNhlwathi (ANT061 · Antre · Canyon · Feu · zouloue)

```json
{
 "fiche": "ANT061",
 "nom": "Les Hautes Termitières d'eNhlwathi",
 "recit": "Les termites d'eNhlwathi ont élevé leur première tour quand le canyon n'était qu'une fissure. La pluie a creusé, les tours ont monté d'une couche d'argile mâchée par saison, et chaque colonie morte a laissé ses galeries à la suivante. Bien plus tard, des femmes sont venues à la première pluie cueillir les termites ailés au flambeau ; on trouve leurs pots dans une seule couche, mince comme une écaille. Au-dessus de cette couche, les tours ont continué de monter, du même pas, sans un manque. Elles dépassent maintenant le bord du canyon.",
 "pal": [
  "Les tours sont ouvertes du haut en bas comme des fruits fendus ; les galeries vides sonnent au vent, et un oryctérope dort dans la chambre de la reine.",
  "Des terriers béants percent la base des termitières ; l'argile s'effrite en plaques, et des colonnes de fourmis noires montent vers les galeries mortes.",
  "Canyon de grès brûlé de soleil, hautes termitières d'argile le long des parois, fumée des flambeaux au bord, cueilleuses qui guettent la première pluie.",
  "Après chaque pluie, les termites ailés montent en colonnes des cheminées ; on les cueille au flambeau, et l'argile fraîche suinte au flanc des tours.",
  "Les tours ont passé le bord du canyon et forment une ville sans portes ; à la première pluie, l'essaim sort d'un bloc et le jour devient nuit."
 ],
 "pm": "Ruine",
 "pp": "Abondance"
}
```

### Pôle − Ruine

Progression : l'argile qui s'effrite, le pangolin des galeries, le terrier sous la tour, l'oryctérope, les fourmis noires, la chambre de la reine ouverte, puis la tour éventrée. Style : un seul ennemi à la fois, ouvert comme une termitière ; plus il s'abrite derrière sa garde, plus le coup porte. Prix : PV et cartes, parce qu'on creuse à mains nues.

```json
[
{"id": "ANT061-moins-1", "zone": "ANT061", "pole": "-", "palier": 1, "nom": "L'argile qui s'effrite", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : 4 dégâts. La cible subit 9 dégâts. Le héros perd 1 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 4]]], ["deg", "cible", 9], ["prixPV", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Prix"], "ambiance": "L'argile d'eNhlwathi tient depuis des siècles ; il suffit d'une griffe au bon endroit pour qu'elle tombe en plaques.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT061-moins-2", "zone": "ANT061", "pole": "-", "palier": 2, "nom": "Le pangolin des galeries", "cout": 1, "cible": 1, "effet": "Un pangolin remonte une galerie : 12 PV, frappe 2. La cible subit 4 dégâts.", "ops": [["invoque", "Pangolin des galeries", 12, 2], ["deg", "cible", 4]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Dégâts"], "ambiance": "Le pangolin descend dans la tour la tête la première, et en ressort à reculons, plus lourd.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ANT061-moins-3", "zone": "ANT061", "pole": "-", "palier": 3, "nom": "Le terrier sous la tour", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : 5 dégâts. La garde de la cible tombe ; elle subit 12 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 5]]], ["briseGarde", "cible"], ["deg", "cible", 12], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Un terrier neuf s'ouvre chaque nuit au pied d'une tour, toujours du côté qui regarde le canyon.", "budget": "14,5 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "ANT061-moins-4", "zone": "ANT061", "pole": "-", "palier": 4, "nom": "L'oryctérope", "cout": 2, "cible": 1, "effet": "Un oryctérope s'enfonce dans la termitière : 20 PV, frappe 6. La cible subit 10 dégâts. Le héros perd 2 PV.", "ops": [["invoque", "Oryctérope", 20, 6], ["deg", "cible", 10], ["prixPV", 2]], "tags": ["Antre", "Feu", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "L'oryctérope d'eNhlwathi creuse plus vite qu'une équipe à la houe, et il ne mange que la nuit.", "budget": "27 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "ANT061-moins-5", "zone": "ANT061", "pole": "-", "palier": 5, "nom": "Les fourmis noires", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : 6 dégâts. Une colonne de fourmis noires monte à l'assaut : 14 PV, frappe 4. La cible subit 16 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "cibleGarde", [["deg", "cible", 6]]], ["invoque", "Colonne de fourmis noires", 14, 4], ["deg", "cible", 16], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle −", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Les fourmis noires montent en colonne vers les galeries mortes, et redescendent par la même colonne, chargées.", "budget": "29 (cible 32, écart -9 % ; vérifié au script)"},
{"id": "ANT061-moins-6", "zone": "ANT061", "pole": "-", "palier": 6, "nom": "La chambre de la reine", "cout": 2, "cible": 1, "effet": "La garde de la cible tombe ; elle subit 25 dégâts et prend +3 dégâts par coup jusqu'à la fin du combat. Le héros perd 3 PV.", "ops": [["briseGarde", "cible"], ["deg", "cible", 25], ["vulnerable", "cible", 3], ["prixPV", 3]], "tags": ["Antre", "Feu", "Pôle −", "Perce-garde", "Dégâts", "Marque", "Prix"], "ambiance": "La chambre de la reine, ouverte, est plus grande que la tour qui la contenait ; personne n'y est descendu.", "budget": "34 (cible 36, écart -6 % ; vérifié au script)"},
{"id": "ANT061-moins-7", "zone": "ANT061", "pole": "-", "palier": 7, "nom": "La Tour éventrée", "cout": 3, "cible": 1, "effet": "La termitière s'ouvre en deux. Un oryctérope géant en sort (26 PV, frappe 7). La cible subit 22 dégâts, sans garde. Le héros perd 4 PV. Pose Abîme. Si Racine (consommée) : 16 dégâts à la cible, marquée +3 ; 2 dégâts à tous.", "ops": [["invoque", "Oryctérope géant", 26, 7], ["ignoreGarde"], ["deg", "cible", 22], ["prixPV", 4], ["pose", "Abîme"], ["reveil", "Racine", true, [["deg", "cible", 16], ["vulnerable", "cible", 3], ["deg", "tous", 2]]]], "tags": ["Antre", "Feu", "Forme ultime −7", "Invocation", "Perce-garde", "Dégâts", "Prix", "Pose Abîme", "Réveil Racine"], "ambiance": "La tour d'eNhlwathi s'est fendue du haut en bas, et les galeries vides sonnent au vent comme une gorge.", "budget": "44,5 (+29,4 si Racine, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Abondance

Progression : la première pluie, le flambeau des cueilleuses, les termites soldats, l'essaim au crépuscule, la reine sous l'argile, les cheminées qui suintent, puis le jour devient essaim. Style : une averse de petits coups qui tombent n'importe où, nourrie par la colonie ; quand l'ennemi prend son élan, l'essaim sort plus dense. Prix : l'essaim nourrit aussi l'ennemi.

```json
[
{"id": "ANT061-plus-1", "zone": "ANT061", "pole": "+", "palier": 1, "nom": "La première pluie", "cout": 1, "cible": 1, "effet": "4 coups de 2 dégâts au hasard. Le héros se soigne de 2. Si la cible prend son élan : 1 coup de 2 de plus.", "ops": [["deg", "hasard", 2, 4], ["soin", "heros", 2], ["si", "elan", [["deg", "hasard", 2, 1]]]], "tags": ["Antre", "Feu", "Pôle +", "Dégâts", "Soin", "Condition"], "ambiance": "À la première pluie, les cueilleuses d'eNhlwathi tendent la main vers les cheminées, paume en l'air, sans parler.", "budget": "11,0 / 10,0 (+10 %), recalculé par le critique"},
{"id": "ANT061-plus-2", "zone": "ANT061", "pole": "+", "palier": 2, "nom": "Le flambeau des cueilleuses", "cout": 1, "cible": 0, "effet": "4 coups de 3 dégâts au hasard. Le héros se soigne de 3. Chaque ennemi se soigne de 1.", "ops": [["deg", "hasard", 3, 4], ["soin", "heros", 3], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Dégâts", "Soin", "Prix"], "ambiance": "Les termites ailés viennent d'eux-mêmes au flambeau, brûlent leurs ailes, et viennent encore.", "budget": "12,8 (cible 12,5, écart +2 % ; vérifié au script)"},
{"id": "ANT061-plus-3", "zone": "ANT061", "pole": "+", "palier": 3, "nom": "Les termites soldats", "cout": 1, "cible": 0, "effet": "Des termites soldats bouchent la brèche : 10 PV, frappent 3. 4 coups de 2 dégâts au hasard. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Termites soldats", 10, 3], ["deg", "hasard", 2, 4], ["ennemiSoin", 1]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "Les soldats ferment la galerie de leur propre tête, et l'argile sèche autour d'eux avant le soir.", "budget": "15,3 (cible 15, écart +2 % ; vérifié au script)"},
{"id": "ANT061-plus-4", "zone": "ANT061", "pole": "+", "palier": 4, "nom": "L'essaim au crépuscule", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : 3 coups de 3 de plus. 7 coups de 3 dégâts au hasard. Le héros se soigne de 4. Défaussez 1 carte au hasard.", "ops": [["si", "elan", [["deg", "hasard", 3, 3]]], ["deg", "hasard", 3, 7], ["soin", "heros", 4], ["prixDefausse", 1]], "tags": ["Antre", "Feu", "Pôle +", "Dégâts", "Soin", "Condition", "Prix"], "ambiance": "Au crépuscule, l'essaim sort des tours en colonnes si droites qu'on les prend de loin pour de la fumée.", "budget": "26,5 / 28,0 (-5 %), recalculé par le critique"},
{"id": "ANT061-plus-5", "zone": "ANT061", "pole": "+", "palier": 5, "nom": "La reine sous l'argile", "cout": 2, "cible": 0, "effet": "Une reine des termites palpite sous l'argile : 30 PV, frappe 3. 6 coups de 2 dégâts au hasard. Le héros gagne 3 de garde. Chaque ennemi se soigne de 2.", "ops": [["invoque", "Reine des termites", 30, 3], ["deg", "hasard", 2, 6], ["garde", "heros", 3], ["ennemiSoin", 2]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Dégâts", "Garde", "Prix"], "ambiance": "La reine d'eNhlwathi pond depuis plus longtemps que le village n'existe ; elle a la longueur d'un bras.", "budget": "29,5 (cible 32, écart -8 % ; vérifié au script)"},
{"id": "ANT061-plus-6", "zone": "ANT061", "pole": "+", "palier": 6, "nom": "Les cheminées qui suintent", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : 4 coups de 3 de plus. Des nymphes ailées sortent des cheminées : 16 PV, frappent 5. 5 coups de 3 dégâts au hasard. Le héros perd 3 PV.", "ops": [["si", "elan", [["deg", "hasard", 3, 4]]], ["invoque", "Nymphes ailées", 16, 5], ["deg", "hasard", 3, 5], ["prixPV", 3]], "tags": ["Antre", "Feu", "Pôle +", "Invocation", "Dégâts", "Condition", "Prix"], "ambiance": "L'argile fraîche suinte au flanc des cheminées, et les tours ont grandi d'une main depuis la dernière pluie.", "budget": "33,5 / 36,0 (-7 %), recalculé par le critique"},
{"id": "ANT061-plus-7", "zone": "ANT061", "pole": "+", "palier": 7, "nom": "L'Essaim d'eNhlwathi", "cout": 3, "cible": 0, "effet": "Le jour devient essaim. Une nuée ailée se lève (20 PV, frappe 5). 10 coups de 3 dégâts au hasard. Le héros se soigne de 4. Chaque ennemi se soigne de 2. Pose Racine. Si Sceau (consommé) : 6 coups de 3, piochez 2, soin de 3.", "ops": [["invoque", "Nuée ailée", 20, 5], ["deg", "hasard", 3, 10], ["soin", "heros", 4], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sceau", true, [["deg", "hasard", 3, 6], ["pioche", 2], ["soin", "heros", 3]]]], "tags": ["Antre", "Feu", "Forme ultime +7", "Invocation", "Dégâts", "Soin", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "L'essaim d'eNhlwathi sort d'un bloc ; les cueilleuses lèvent leurs flambeaux, et ne voient plus leurs mains.", "budget": "47,1 (+29 si Sceau, soit +62 % ; vérifié au script)"}
]
```

---

## Ihuitepec, les Îles-Volières (ANT140 · Antre · Iles flottantes · Vent · aztèque)

```json
{
 "fiche": "ANT140",
 "nom": "Ihuitepec, les Îles-Volières",
 "recit": "Vous montez à Ihuitepec par l'échelle de corde, et le vent vous plaque contre les cages. Chaque île porte sa volière d'osier, et chaque volière sa couleur : les plumes vertes ici, les jaunes sur l'île voisine, les sombres plus loin. Les plumassiers trient au peigne d'os sans lever la tête. Une femme vous tend un plateau de plumes à ranger ; vous les rangez. Personne ne parle. Les oiseaux non plus : ils se tiennent tous tournés vers l'est sur leurs perchoirs, et aucun ne bat des ailes. Les îles avancent contre le vent.",
 "pal": [
  "Les volières éventrées pendent sous les îles ; des oiseaux de toutes sortes tournent en nuée sans direction, et les plumes retombent comme une neige sale.",
  "Des cages ouvertes battent au vent ; les plumes triées se mêlent dans les paniers, et les perroquets arrachent les plumes de leurs voisins de perchoir.",
  "Îles flottantes reliées par des échelles de corde, volières d'osier pleines d'oiseaux, plumassiers aztèques penchés sur des plateaux de plumes triées.",
  "Les oiseaux se posent par couleur sans qu'on les trie ; les colibris se tiennent en rangs sur les perchoirs, tous le bec tourné vers l'est.",
  "Les oiseaux ne forment plus qu'une mosaïque vivante tendue entre les îles ; elle ne bat pas d'une aile, et les îles la suivent contre le vent."
 ],
 "pm": "Chaos",
 "pp": "Ordre"
}
```

### Pôle − Chaos

Progression : la cage ouverte, la plume arrachée, le vautour des cages, la nuée sans direction, l'aigle lâché, les perroquets qui s'arrachent, puis les volières lâchent tout. Style : les oiseaux marquent une proie, puis tout ce qui frappe frappe plus fort ; contre un ennemi qui vole par-dessus la Garde, la nuée le prend en l'air. Prix : les plumes triées s'envolent, c'est une carte perdue.

```json
[
{"id": "ANT140-moins-1", "zone": "ANT140", "pole": "-", "palier": 1, "nom": "La cage ouverte", "cout": 1, "cible": 1, "effet": "Un perroquet arracheur s'échappe : 6 PV, frappe 2. La cible subit 4 dégâts.", "ops": [["invoque", "Perroquet arracheur", 6, 2], ["deg", "cible", 4]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Dégâts"], "ambiance": "La porte de la cage d'Ihuitepec ne s'est pas ouverte : quelqu'un, dedans, a tiré le loquet.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT140-moins-2", "zone": "ANT140", "pole": "-", "palier": 2, "nom": "La plume arrachée", "cout": 1, "cible": 1, "effet": "Si la cible s'apprête à voler par-dessus : elle prend +2 dégâts par coup. Elle prend +2 dégâts par coup jusqu'à la fin du combat et subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "vol", [["vulnerable", "cible", 2]]], ["vulnerable", "cible", 2], ["deg", "cible", 6], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Marque", "Dégâts", "Prix"], "ambiance": "Les perroquets arrachent les plumes vertes de leurs voisins et les rangent dans le panier des plumes sombres.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT140-moins-3", "zone": "ANT140", "pole": "-", "palier": 3, "nom": "Le vautour des cages", "cout": 1, "cible": 1, "effet": "Si la cible s'apprête à voler par-dessus : 5 dégâts. Un vautour royal quitte sa cage : 10 PV, frappe 3. La cible subit 3 dégâts.", "ops": [["si", "vol", [["deg", "cible", 5]]], ["invoque", "Vautour royal", 10, 3], ["deg", "cible", 3]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Invocation"], "ambiance": "Le vautour d'Ihuitepec a toujours eu sa cage ouverte ; il y revenait chaque soir, jusqu'à ce soir.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ANT140-moins-4", "zone": "ANT140", "pole": "-", "palier": 4, "nom": "La nuée sans direction", "cout": 2, "cible": 1, "effet": "Tous les ennemis prennent +2 dégâts par coup jusqu'à la fin du combat et subissent 4 dégâts. Si la cible s'apprête à voler par-dessus : 8 dégâts. La cible subit 3 dégâts. Défaussez 1 carte au hasard.", "ops": [["vulnerable", "tous", 2], ["deg", "tous", 4], ["si", "vol", [["deg", "cible", 8]]], ["deg", "cible", 3], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Marque", "Dégâts", "Condition", "Prix"], "ambiance": "Sous les îles, la nuée tourne sans direction, et les plumes retombent sur la plaine comme une neige sale.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT140-moins-5", "zone": "ANT140", "pole": "-", "palier": 5, "nom": "L'aigle lâché", "cout": 2, "cible": 1, "effet": "Un aigle des volières fond sur la cible : 18 PV, frappe 6. Elle prend +3 dégâts par coup jusqu'à la fin du combat et subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["invoque", "Aigle des volières", 18, 6], ["vulnerable", "cible", 3], ["deg", "cible", 6], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Marque", "Dégâts", "Prix"], "ambiance": "L'aigle lâché ne chasse pas ; il désigne, en tournant au-dessus, et les autres oiseaux descendent sur sa proie.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ANT140-moins-6", "zone": "ANT140", "pole": "-", "palier": 6, "nom": "Les perroquets qui s'arrachent", "cout": 2, "cible": 1, "effet": "Si la cible s'apprête à voler par-dessus : 10 dégâts. Elle prend +4 dégâts par coup, tous les ennemis +1, jusqu'à la fin du combat ; la cible subit 12 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "vol", [["deg", "cible", 10]]], ["vulnerable", "cible", 4], ["vulnerable", "tous", 1], ["deg", "cible", 12], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Marque", "Prix"], "ambiance": "Les plumassiers ont cessé de trier ; ils regardent les perroquets se déplumer l'un l'autre, en silence, avec méthode.", "budget": "32,6 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ANT140-moins-7", "zone": "ANT140", "pole": "-", "palier": 7, "nom": "La Nuée d'Ihuitepec", "cout": 3, "cible": 1, "effet": "Les volières lâchent tout. Une nuée de plumes se lève (22 PV, frappe 6). Tous les ennemis : +3 dégâts par coup, 4 dégâts. Défaussez 1 carte. Pose Sang. Si Abîme (consommé) : 20 dégâts à la cible, marquée +3.", "ops": [["invoque", "Nuée de plumes", 22, 6], ["vulnerable", "tous", 3], ["deg", "tous", 4], ["prixDefausse", 1], ["pose", "Sang"], ["reveil", "Abîme", true, [["deg", "cible", 20], ["vulnerable", "cible", 3]]]], "tags": ["Antre", "Vent", "Forme ultime −7", "Invocation", "Marque", "Dégâts", "Prix", "Pose Sang", "Réveil Abîme"], "ambiance": "Les volières d'Ihuitepec pendent vides sous les îles, et la nuée tourne autour, sans jamais rentrer.", "budget": "45,6 (+29 si Abîme, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Ordre

Progression : la plume rangée, le colibri au perchoir, le peigne du plumassier, les rangs de colibris, le plateau trié, les oiseaux tournés vers l'est, puis la mosaïque du ciel. Style : chaque carte range une plume dans la réserve (mana de Vent) et pose un oiseau ou une garde ; quand l'ennemi s'apprête à piétiner, la formation serre les rangs. Prix : PV, et l'ennemi qu'on laisse s'abriter.

```json
[
{"id": "ANT140-plus-1", "zone": "ANT140", "pole": "+", "palier": 1, "nom": "La plume rangée", "cout": 1, "cible": 1, "effet": "Ajoutez 1 mana de Vent à la réserve. Le héros gagne 6 de garde. Si la cible s'apprête à piétiner : 4 de garde de plus.", "ops": [["mana", "Vent", 1], ["garde", "heros", 6], ["si", "pietine", [["garde", "heros", 4]]]], "tags": ["Antre", "Vent", "Pôle +", "Garde", "Mana", "Condition"], "ambiance": "On vous tend une plume verte ; vous la rangez avec les vertes, sans savoir comment vous le saviez.", "budget": "9,4 / 10,0 (-6 %), recalculé par le critique"},
{"id": "ANT140-plus-2", "zone": "ANT140", "pole": "+", "palier": 2, "nom": "Le colibri au perchoir", "cout": 1, "cible": 0, "effet": "Un colibri rangé se pose : 6 PV, frappe 2. Ajoutez 1 mana de Vent. Le héros gagne 4 de garde.", "ops": [["invoque", "Colibri rangé", 6, 2], ["mana", "Vent", 1], ["garde", "heros", 4]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Mana", "Garde"], "ambiance": "Le colibri d'Ihuitepec se pose sur son perchoir à l'endroit exact où il s'était posé la veille.", "budget": "12,2 (cible 12,5, écart -2 % ; vérifié au script)"},
{"id": "ANT140-plus-3", "zone": "ANT140", "pole": "+", "palier": 3, "nom": "Le peigne du plumassier", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes. Ajoutez 2 mana de Vent. Le héros gagne 3 de garde et perd 2 PV.", "ops": [["pioche", 2], ["mana", "Vent", 2], ["garde", "heros", 3], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle +", "Pioche", "Mana", "Garde", "Prix"], "ambiance": "Le peigne d'os du plumassier passe dans les plumes, et les plumes se rangent avant qu'il les touche.", "budget": "14,4 (cible 15, écart -4 % ; vérifié au script)"},
{"id": "ANT140-plus-4", "zone": "ANT140", "pole": "+", "palier": 4, "nom": "Les rangs de colibris", "cout": 2, "cible": 1, "effet": "Si la cible s'apprête à piétiner : vos alliés gagnent 6 de garde. Un rang de colibris se forme : 14 PV, frappe 4. Ajoutez 2 mana de Vent. Vos alliés gagnent 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "pietine", [["garde", "allies", 6]]], ["invoque", "Rang de colibris", 14, 4], ["mana", "Vent", 2], ["garde", "allies", 6], ["ennemiGarde", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Garde", "Mana", "Condition", "Prix"], "ambiance": "Les colibris d'Ihuitepec se tiennent en rangs de douze ; quand l'un tombe, le rang se resserre sans un battement.", "budget": "27,8 / 28,0 (-1 %), recalculé par le critique"},
{"id": "ANT140-plus-5", "zone": "ANT140", "pole": "+", "palier": 5, "nom": "Le plateau trié", "cout": 2, "cible": 0, "effet": "Ajoutez 2 mana de Vent. Piochez 3 cartes. Le héros gagne 16 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["mana", "Vent", 2], ["pioche", 3], ["garde", "heros", 16], ["ennemiGarde", 1]], "tags": ["Antre", "Vent", "Pôle +", "Mana", "Pioche", "Garde", "Prix"], "ambiance": "Le plateau rangé hier l'est encore ce matin, alors que le vent a soufflé toute la nuit sur les îles.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ANT140-plus-6", "zone": "ANT140", "pole": "+", "palier": 6, "nom": "Les oiseaux tournés vers l'est", "cout": 2, "cible": 1, "effet": "Si la cible s'apprête à piétiner : riposte 3 jusqu'au prochain tour. Un aigle en formation se pose : 22 PV, frappe 6. Ajoutez 2 mana de Vent. Vos alliés gagnent 6 de garde. Le héros perd 3 PV.", "ops": [["si", "pietine", [["riposte", 3]]], ["invoque", "Aigle en formation", 22, 6], ["mana", "Vent", 2], ["garde", "allies", 6], ["prixPV", 3]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Garde", "Riposte", "Mana", "Condition", "Prix"], "ambiance": "Tous les oiseaux regardent l'est, perchoir après perchoir ; personne à Ihuitepec ne sait ce qu'il y a là-bas.", "budget": "33,2 / 36,0 (-8 %), recalculé par le critique"},
{"id": "ANT140-plus-7", "zone": "ANT140", "pole": "+", "palier": 7, "nom": "La Mosaïque du ciel", "cout": 3, "cible": 0, "effet": "Les oiseaux deviennent mosaïque. Une mosaïque vivante (30 PV, frappe 4) ; 2 mana de Vent ; alliés +12 de garde ; piochez 2. Chaque ennemi +2 de garde. Pose Sceau. Si Racine (consommée) : 2 mana de Vent, piochez 3, alliés +10 de garde.", "ops": [["invoque", "Mosaïque vivante", 30, 4], ["mana", "Vent", 2], ["garde", "allies", 12], ["pioche", 2], ["ennemiGarde", 2], ["pose", "Sceau"], ["reveil", "Racine", true, [["mana", "Vent", 2], ["pioche", 3], ["garde", "allies", 10]]]], "tags": ["Antre", "Vent", "Forme ultime +7", "Invocation", "Mana", "Garde", "Pioche", "Prix", "Pose Sceau", "Réveil Racine"], "ambiance": "La mosaïque d'Ihuitepec est tendue entre les îles, plume contre plume, et pas une ne bouge, même sous la rafale.", "budget": "45,4 (+30 si Racine, soit +66 % ; vérifié au script)"}
]
```

---

## La Berloga de Tchernoskal (ANT005 · Antre · Haute montagne · Pierre · slave)

```json
{
 "fiche": "ANT005",
 "nom": "La Berloga de Tchernoskal",
 "recit": "À Tchernoskal, on dit que l'ours du col ne dort pas sur la paille, mais sur le feu de la montagne, qu'il couvre de son corps tout l'hiver pour que la neige tienne. Au premier jour du dégel, on lui monte des galettes chaudes, on les pose à l'entrée de la grotte, on chante, et on redescend sans se retourner. Le vieux Bogdan dit que c'est pour le réveiller doucement. Ce printemps, les galettes avaient disparu au matin, et les traces qui sortaient de la grotte avaient fondu la neige jusqu'à la roche. Elles allaient vers le village.",
 "pal": [
  "Le col est pris dans une glace sans un souffle ; à l'entrée de la grotte, des ours se tiennent debout, gelés en marche, devant une rangée de plats vides.",
  "La neige ne fond plus au dégel ; des stalactites ferment à moitié la grotte, et l'on entend dedans une respiration très lente, une par heure.",
  "Col de roche noire sous la neige, grotte basse au flanc de la montagne, plats de galettes posés à l'entrée, villageois en touloupes qui chantent.",
  "La neige fond en cercle autour de la grotte ; des ruisseaux chauds descendent le col, et des ours roussis sortent au soleil en se léchant les pattes.",
  "La montagne est ouverte comme un four ; les bêtes qui en sortent laissent des traces de braise jusqu'au village, et la neige ne tombe plus sur le col."
 ],
 "pm": "Glace",
 "pp": "Feu"
}
```

### Pôle − Glace

Progression : la croûte de givre, l'ourson endormi, la stalactite, la respiration lente, l'ours sous la neige, les plats gelés, puis les ours gèlent en marche. Style : la Garde s'épaissit tour après tour, et ce qu'elle tient déjà rapporte plus ; les bêtes dorment, lourdes et lentes. Prix : le froid prend des PV, ou une carte.

```json
[
{"id": "ANT005-moins-1", "zone": "ANT005", "pole": "-", "palier": 1, "nom": "La croûte de givre", "cout": 1, "cible": 0, "effet": "Si votre Garde est déjà levée : 4 de garde de plus. Le héros gagne 8 de garde et se soigne de 2.", "ops": [["si", "garde", [["garde", "heros", 4]]], ["garde", "heros", 8], ["soin", "heros", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Garde", "Soin"], "ambiance": "La croûte de givre prend sur les touloupes pendant le chant, et personne à Tchernoskal ne la brosse.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT005-moins-2", "zone": "ANT005", "pole": "-", "palier": 2, "nom": "L'ourson endormi", "cout": 1, "cible": 0, "effet": "Un ourson endormi se roule en boule : 14 PV, frappe 1. Le héros gagne 6 de garde et perd 1 PV.", "ops": [["invoque", "Ourson endormi", 14, 1], ["garde", "heros", 6], ["prixPV", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Garde", "Prix"], "ambiance": "L'ourson dort contre la paroi ; son souffle givre sur la roche une forme qui n'est pas la sienne.", "budget": "12,3 (cible 12,5, écart -2 % ; vérifié au script)"},
{"id": "ANT005-moins-3", "zone": "ANT005", "pole": "-", "palier": 3, "nom": "La stalactite", "cout": 1, "cible": 1, "effet": "Si votre Garde est déjà levée : 6 dégâts. Le héros gagne 10 de garde. La cible subit 4 dégâts. Le héros perd 1 PV.", "ops": [["si", "garde", [["deg", "cible", 6]]], ["garde", "heros", 10], ["deg", "cible", 4], ["prixPV", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Une stalactite neuve pend chaque matin à l'entrée de la grotte, plus longue que celle de la veille d'un doigt.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "ANT005-moins-4", "zone": "ANT005", "pole": "-", "palier": 4, "nom": "La respiration lente", "cout": 2, "cible": 1, "effet": "Le héros gagne 20 de garde et se soigne de 4. La cible perd 3 d'attaque. Défaussez 1 carte au hasard.", "ops": [["garde", "heros", 20], ["soin", "heros", 4], ["affaiblit", "cible", 3], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Garde", "Soin", "Affaiblissement", "Prix"], "ambiance": "Dans la grotte, Bogdan a compté une respiration par heure ; il compte encore, la main sur la poitrine.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "ANT005-moins-5", "zone": "ANT005", "pole": "-", "palier": 5, "nom": "L'ours sous la neige", "cout": 2, "cible": 0, "effet": "Un ours de neige se couche en travers du col : 32 PV, frappe 3. Le héros gagne 14 de garde et perd 2 PV.", "ops": [["invoque", "Ours de neige", 32, 3], ["garde", "heros", 14], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Garde", "Prix"], "ambiance": "L'ours couché sous la neige du col a la forme d'une colline ; on y a fait passer le sentier.", "budget": "29,7 (cible 32, écart -7 % ; vérifié au script)"},
{"id": "ANT005-moins-6", "zone": "ANT005", "pole": "-", "palier": 6, "nom": "Les plats gelés", "cout": 2, "cible": 1, "effet": "Si votre Garde est déjà levée : vos alliés gagnent 8 de garde. Le héros gagne 18 de garde. La cible subit 13 dégâts. Riposte 2 jusqu'au prochain tour. Le héros perd 3 PV.", "ops": [["si", "garde", [["garde", "allies", 8]]], ["garde", "heros", 18], ["deg", "cible", 13], ["riposte", 2], ["prixPV", 3]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Garde", "Dégâts", "Riposte", "Prix"], "ambiance": "Les plats posés au dégel ont gelé sur la neige, les galettes dedans, intactes, et personne n'ose les reprendre.", "budget": "33,2 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ANT005-moins-7", "zone": "ANT005", "pole": "-", "palier": 7, "nom": "Le Col pris", "cout": 3, "cible": 1, "effet": "Les ours gèlent en marche. Un ours de glace se dresse (36 PV, frappe 4). Le héros +20 de garde, soigné de 3 ; tous −1 d'attaque. Le héros perd 3 PV. Pose Givre. Si Braise (consommée) : +16 de garde, 12 dégâts à la cible, soin de 6.", "ops": [["invoque", "Ours de glace", 36, 4], ["garde", "heros", 20], ["soin", "heros", 3], ["affaiblit", "tous", 1], ["prixPV", 3], ["pose", "Givre"], ["reveil", "Braise", true, [["garde", "heros", 16], ["deg", "cible", 12], ["soin", "heros", 6]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Invocation", "Garde", "Soin", "Affaiblissement", "Prix", "Pose Givre", "Réveil Braise"], "ambiance": "Les ours de Tchernoskal se tiennent debout devant la grotte, gelés en marche, et marchent vers le village.", "budget": "46,6 (+30,8 si Braise, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Feu

Progression : le ruisseau chaud, la galette brûlante, l'ours roussi, la forge sous la grotte, les traces de braise, la montagne ouverte, puis la montagne s'ouvre en four. Style : des bêtes qui sortent du feu en série et une chaleur qui frappe tous les ennemis ; on brûle une carte pour nourrir la suivante. Prix : la défausse au hasard, presque à chaque carte.

```json
[
{"id": "ANT005-plus-1", "zone": "ANT005", "pole": "+", "palier": 1, "nom": "Le ruisseau chaud", "cout": 1, "cible": 1, "effet": "Une martre roussie remonte le ruisseau : 8 PV, frappe 2. La cible subit 3 dégâts.", "ops": [["invoque", "Martre roussie", 8, 2], ["deg", "cible", 3]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Dégâts"], "ambiance": "Le ruisseau qui descend de la grotte fume dans la neige, et les martres le remontent à contre-courant.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ANT005-plus-2", "zone": "ANT005", "pole": "+", "palier": 2, "nom": "La galette brûlante", "cout": 1, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : 2 dégâts à tous. 4 dégâts à tous les ennemis. La cible brûle de 2 pendant 2 tours. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "tous", 2]]], ["deg", "tous", 4], ["brulure", "cible", 2, 2], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Les galettes posées au dégel brûlent les doigts à la descente ; ce matin, le plat lui-même était chaud.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ANT005-plus-3", "zone": "ANT005", "pole": "+", "palier": 3, "nom": "L'ours roussi", "cout": 1, "cible": 1, "effet": "Un ours roussi sort au soleil : 14 PV, frappe 4. La cible subit 5 dégâts. Défaussez 1 carte au hasard.", "ops": [["invoque", "Ours roussi", 14, 4], ["deg", "cible", 5], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "L'ours sort en se léchant les pattes, et la neige fond en rond partout où il les pose.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ANT005-plus-4", "zone": "ANT005", "pole": "+", "palier": 4, "nom": "La forge sous la grotte", "cout": 2, "cible": 0, "effet": "Si une carte a déjà été défaussée en prix ce tour : 4 dégâts à tous. Un loup de braise sort de la roche : 16 PV, frappe 5. 4 dégâts à tous les ennemis. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "tous", 4]]], ["invoque", "Loup de braise", 16, 5], ["deg", "tous", 4], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "L'air de la grotte sent la forge ; au village, on dit que l'ours bat le fer.", "budget": "25,7 (cible 28, écart -8 % ; vérifié au script)"},
{"id": "ANT005-plus-5", "zone": "ANT005", "pole": "+", "palier": 5, "nom": "Les traces de braise", "cout": 2, "cible": 1, "effet": "Une bête de braise suit ses propres traces : 22 PV, frappe 6. La cible subit 8 dégâts et brûle de 2 pendant 2 tours. Le héros perd 2 PV.", "ops": [["invoque", "Bête de braise", 22, 6], ["deg", "cible", 8], ["brulure", "cible", 2, 2], ["prixPV", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Les traces qui descendent du col fument encore à midi, et elles s'arrêtent net devant la maison de Bogdan.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ANT005-plus-6", "zone": "ANT005", "pole": "+", "palier": 6, "nom": "La montagne ouverte", "cout": 2, "cible": 0, "effet": "Si une carte a déjà été défaussée en prix ce tour : 5 dégâts à tous. Une ourse de la forge sort du flanc : 26 PV, frappe 7. 4 dégâts à tous les ennemis. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["deg", "tous", 5]]], ["invoque", "Ourse de la forge", 26, 7], ["deg", "tous", 4], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Le flanc de Tchernoskal s'ouvre comme une porte de four ; l'ourse qui en sort ne cligne pas des yeux.", "budget": "34,8 (cible 36, écart -3 % ; vérifié au script)"},
{"id": "ANT005-plus-7", "zone": "ANT005", "pole": "+", "palier": 7, "nom": "Le Four de Tchernoskal", "cout": 3, "cible": 0, "effet": "La montagne s'ouvre en four. Un ours-forge en sort (34 PV, frappe 8), et une martre roussie (8 PV, frappe 2). 6 dégâts à tous. Défaussez 1 carte. Pose Braise. Si Givre (consommé) : 8 dégâts à tous ; un ourson dégelé (16 PV, frappe 4).", "ops": [["invoque", "Ours-forge", 34, 8], ["invoque", "Martre roussie", 8, 2], ["deg", "tous", 6], ["prixDefausse", 1], ["pose", "Braise"], ["reveil", "Givre", true, [["deg", "tous", 8], ["invoque", "Ourson dégelé", 16, 4]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Invocation", "Dégâts", "Prix", "Pose Braise", "Réveil Givre"], "ambiance": "La neige ne tombe plus sur le col ; elle fond en l'air et retombe en pluie chaude sur le village.", "budget": "46,2 (+31,6 si Givre, soit +68 % ; vérifié au script)"}
]
```

---

## La Sala des Ôles de Srah Kbal (ASS032 · Assemblée · Glacier · Glace · khmère)

```json
{
 "fiche": "ASS032",
 "nom": "La Sala des Ôles de Srah Kbal",
 "recit": "À la sala de Srah Kbal, le conseil grave ses décisions sur des ôles, puis les couche dans une fente du glacier, et la glace les emporte. Le bonze Chea Sokhom a mesuré sa marche : un pas par saison. À ce compte, une loi votée aujourd'hui ressort au front du glacier dans trois cent vingt ans. Il y descend chaque printemps ramasser ce qui sort, et il le lit en public. Les premières ôles parlaient de rizières, les suivantes de troupeaux. Celles de ce printemps sont gravées dans une écriture que personne n'a enseignée. Elles parlent de nous.",
 "pal": [
  "Le glacier a tout repris : la sala gît sous la glace claire, et l'on y voit le conseil assis en cercle, les stylets levés, la bouche ouverte.",
  "Des fentes neuves s'ouvrent sous les bancs ; les ôles glissent seules dans la glace, et les conseillers ne se rappellent plus le vote de la veille.",
  "Sala de bois à toit étagé au bord d'un glacier, conseillers en robe claire sur des nattes, ôles de latanier gravées au stylet, fente bleue dans la glace.",
  "Le front du glacier rend des ôles par brassées ; on les sèche sur des cordes, et les conseillers récitent des lois qu'ils n'ont jamais apprises.",
  "La glace a rendu tout ce qu'elle tenait : des conseils entiers assis en cercle sur la moraine, intacts, qui reprennent leur séance où ils l'avaient laissée."
 ],
 "pm": "Oubli",
 "pp": "Mémoire"
}
```

### Pôle − Oubli

Progression : la loi de la fente, le vote oublié, le stylet qui glisse, la glace claire, le cercle muet, les ôles qui glissent seules, puis le glacier reprend la sala. Style : des Lois qui font oublier aux ennemis la force de leurs coups, pour tout le combat ; certaines s'oublient elles-mêmes (exil). *(Réécrit par le critique, lot 4.)* Le crochet « une carte commune dort dans la défausse » est remplacé par « la cible prend son élan » (elle oublie son geste) : depuis le 18 nov., les communes ne sont plus dans le paquet, et la condition restait fausse.

```json
[
{"id": "ASS032-moins-1", "zone": "ASS032", "pole": "-", "palier": 1, "nom": "Loi de la fente", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis perdent 1 d'attaque et subissent 2 dégâts.", "ops": [["affaiblit", "tous", 1], ["deg", "tous", 2]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Affaiblissement", "Dégâts"], "ambiance": "La fente du glacier où l'on couche les ôles se referme derrière chaque loi, sans un bruit.", "budget": "11 (cible 10, écart +10 % ; vérifié au script)"},
{"id": "ASS032-moins-2", "zone": "ASS032", "pole": "-", "palier": 2, "nom": "Loi du vote oublié", "cout": 1, "cible": 1, "effet": "Loi : si la cible prend son élan, elle oublie son geste : piochez 1. Tous les ennemis perdent 1 d'attaque ; la cible 1 de plus. Piochez 1 carte. Cette carte s'exile.", "ops": [["si", "elan", [["pioche", 1]]], ["affaiblit", "tous", 1], ["affaiblit", "cible", 1], ["pioche", 1], ["exil"]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Pioche", "Affaiblissement", "Exil", "Condition"], "ambiance": "Personne à Srah Kbal ne se rappelle le vote d'hier ; on le revote, et le résultat change.", "budget": "12,6 / 12,5 (+1 %), recalculé par le critique"},
{"id": "ASS032-moins-3", "zone": "ASS032", "pole": "-", "palier": 3, "nom": "Le stylet qui glisse", "cout": 1, "cible": 1, "effet": "La cible perd 3 d'attaque et subit 6 dégâts.", "ops": [["affaiblit", "cible", 3], ["deg", "cible", 6]], "tags": ["Assemblée", "Glace", "Pôle −", "Affaiblissement", "Dégâts"], "ambiance": "Le stylet glisse sur l'ôle comme sur la glace ; Chea Sokhom recommence la ligne, puis la recommence.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS032-moins-4", "zone": "ASS032", "pole": "-", "palier": 4, "nom": "Loi de la glace claire", "cout": 2, "cible": 1, "effet": "Loi : si la cible prend son élan, tous perdent encore 1 d'attaque. Tous les ennemis perdent 2 d'attaque et subissent 6 dégâts. Cette carte s'exile.", "ops": [["si", "elan", [["affaiblit", "tous", 1]]], ["affaiblit", "tous", 2], ["deg", "tous", 6], ["exil"]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Dégâts", "Affaiblissement", "Exil", "Condition"], "ambiance": "Sous la glace claire, on voit des ôles couchées en rangs serrés, et aucune ne porte de date.", "budget": "26,7 / 28,0 (-5 %), recalculé par le critique"},
{"id": "ASS032-moins-5", "zone": "ASS032", "pole": "-", "palier": 5, "nom": "Loi du cercle muet", "cout": 2, "cible": 1, "effet": "Loi : tous les ennemis perdent 2 d'attaque. Piochez 2 cartes. La cible subit 12 dégâts. Cette carte s'exile.", "ops": [["affaiblit", "tous", 2], ["pioche", 2], ["deg", "cible", 12], ["exil"]], "tags": ["Assemblée", "Glace", "Pôle −", "Loi", "Affaiblissement", "Pioche", "Dégâts", "Exil"], "ambiance": "Le conseil siège en cercle et se tait ; on attend que quelqu'un se rappelle la question.", "budget": "30,2 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ASS032-moins-6", "zone": "ASS032", "pole": "-", "palier": 6, "nom": "Les ôles qui glissent seules", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : tous perdent encore 1 d'attaque. Tous les ennemis perdent 2 d'attaque, la cible 2 de plus ; 6 dégâts à tous. Défaussez 1 carte au hasard.", "ops": [["si", "elan", [["affaiblit", "tous", 1]]], ["affaiblit", "tous", 2], ["affaiblit", "cible", 2], ["deg", "tous", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle −", "Dégâts", "Affaiblissement", "Condition", "Prix"], "ambiance": "Les ôles posées sur les nattes glissent seules vers la fente la nuit ; on les retrouve dans la glace.", "budget": "32,7 / 36,0 (-9 %), recalculé par le critique"},
{"id": "ASS032-moins-7", "zone": "ASS032", "pole": "-", "palier": 7, "nom": "Le Conseil sous la glace", "cout": 3, "cible": 1, "effet": "Le glacier reprend la sala. Tous les ennemis −3 d'attaque, la cible −2 de plus ; 7 dégâts à tous ; piochez 2. Cette carte s'exile. Pose Abîme. Si Givre (consommé) : tous −2 d'attaque, 6 dégâts à tous, piochez 1.", "ops": [["affaiblit", "tous", 3], ["affaiblit", "cible", 2], ["deg", "tous", 7], ["pioche", 2], ["exil"], ["pose", "Abîme"], ["reveil", "Givre", true, [["affaiblit", "tous", 2], ["deg", "tous", 6], ["pioche", 1]]]], "tags": ["Assemblée", "Glace", "Forme ultime −7", "Affaiblissement", "Dégâts", "Pioche", "Exil", "Pose Abîme", "Réveil Givre"], "ambiance": "Sous la glace claire de Srah Kbal, le conseil est assis en cercle, la bouche ouverte sur un mot.", "budget": "46,2 (+30,4 si Givre, soit +66 % ; vérifié au script)"}
]
```

### Pôle + Mémoire

Progression : le front du glacier, la corde à sécher, la brassée d'ôles, les lois apprises, le bonze qui lit en public, la séance reprise, puis la glace rend ses conseils. *(Réécrit par le critique, lot 4.)* Style : la pioche à chaque carte, la récupération sur 4 (la glace rend ce qu'on y a mis) ; la défausse payée en prix nourrit les cartes suivantes (crochet « une carte a déjà été défaussée en prix ce tour »). La marque et le crochet `vulnerable` partent : ils recopiaient la Mémoire de DON072 (A). Prix : défausse, PV, l'ennemi qui reprend souffle.

```json
[
{"id": "ASS032-plus-1", "zone": "ASS032", "pole": "+", "palier": 1, "nom": "Loi du front du glacier", "cout": 1, "cible": 0, "effet": "Loi : reprenez en main la dernière carte de votre défausse. Piochez 1 carte. Le héros se soigne de 2.", "ops": [["recup"], ["pioche", 1], ["soin", "heros", 2]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Récupération", "Pioche", "Soin"], "ambiance": "Au front du glacier, les ôles sortent de la glace une à une, encore lisibles, et dans l'ordre.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS032-plus-2", "zone": "ASS032", "pole": "+", "palier": 2, "nom": "Loi de la corde à sécher", "cout": 1, "cible": 1, "effet": "Loi : piochez 2 cartes ; la cible subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["pioche", 2], ["deg", "cible", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts", "Pioche", "Prix"], "ambiance": "On sèche les ôles rendues sur des cordes tendues entre les piliers, et la sala sent la glace fondue.", "budget": "11,0 / 12,5 (-12 %), recalculé par le critique"},
{"id": "ASS032-plus-3", "zone": "ASS032", "pole": "+", "palier": 3, "nom": "La brassée d'ôles", "cout": 1, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour, piochez 2 cartes. Reprenez la dernière carte de votre défausse ; la cible subit 9 dégâts. Le héros perd 2 PV.", "ops": [["si", "defausseAPrix", [["pioche", 2]]], ["recup"], ["deg", "cible", 9], ["prixPV", 2]], "tags": ["Assemblée", "Glace", "Pôle +", "Dégâts", "Pioche", "Récupération", "Condition", "Prix"], "ambiance": "Chea Sokhom remonte du glacier avec une brassée d'ôles, et le poids de la brassée ne change jamais.", "budget": "15,0 / 15,0 (+0 %), recalculé par le critique"},
{"id": "ASS032-plus-4", "zone": "ASS032", "pole": "+", "palier": 4, "nom": "Loi des lois apprises", "cout": 2, "cible": 1, "effet": "Loi : piochez 3 cartes ; le héros gagne 10 de garde ; la cible subit 8 dégâts. Défaussez 1 carte au hasard.", "ops": [["pioche", 3], ["garde", "heros", 10], ["deg", "cible", 8], ["prixDefausse", 1]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts", "Garde", "Pioche", "Prix"], "ambiance": "Les conseillers récitent des lois qu'ils n'ont jamais apprises, sans une faute, et ils ont peur de s'arrêter.", "budget": "25,0 / 28,0 (-11 %), recalculé par le critique"},
{"id": "ASS032-plus-5", "zone": "ASS032", "pole": "+", "palier": 5, "nom": "Le bonze qui lit en public", "cout": 2, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour, la cible hésite ce tour. Reprenez la dernière carte de votre défausse. Piochez 3 cartes. Le héros gagne 20 de garde. Chaque ennemi se soigne de 2.", "ops": [["si", "defausseAPrix", [["hesite", "cible"]]], ["recup"], ["pioche", 3], ["garde", "heros", 20], ["ennemiSoin", 2]], "tags": ["Assemblée", "Glace", "Pôle +", "Garde", "Pioche", "Contrôle", "Récupération", "Condition", "Prix"], "ambiance": "Chea Sokhom lit en public chaque ôle rendue ; sa voix ne tremble qu'aux noms qu'il reconnaît.", "budget": "30,5 / 32,0 (-5 %), recalculé par le critique"},
{"id": "ASS032-plus-6", "zone": "ASS032", "pole": "+", "palier": 6, "nom": "Loi de la séance reprise", "cout": 2, "cible": 1, "effet": "Loi : si une carte a déjà été défaussée en prix ce tour, 10 dégâts. Piochez 2 cartes ; la cible subit 24 dégâts. Le héros perd 3 PV.", "ops": [["si", "defausseAPrix", [["deg", "cible", 10]]], ["pioche", 2], ["deg", "cible", 24], ["prixPV", 3]], "tags": ["Assemblée", "Glace", "Pôle +", "Loi", "Dégâts", "Pioche", "Condition", "Prix"], "ambiance": "La séance reprend sur la moraine, à la phrase exacte où la glace l'avait arrêtée, il y a très longtemps.", "budget": "34,0 / 36,0 (-6 %), recalculé par le critique"},
{"id": "ASS032-plus-7", "zone": "ASS032", "pole": "+", "palier": 7, "nom": "Les Conseils rendus", "cout": 3, "cible": 1, "effet": "La glace rend ses conseils. Reprenez votre dernière défausse ; piochez 3 ; 22 dégâts à la cible ; héros +14 de garde. Défaussez 1 carte. Pose Sceau. Si Abîme (consommé) : reprenez une carte, piochez 3, 8 dégâts à tous.", "ops": [["recup"], ["pioche", 3], ["deg", "cible", 22], ["garde", "heros", 14], ["prixDefausse", 1], ["pose", "Sceau"], ["reveil", "Abîme", true, [["recup"], ["pioche", 3], ["deg", "tous", 8]]]], "tags": ["Assemblée", "Glace", "Forme ultime +7", "Dégâts", "Garde", "Pioche", "Récupération", "Combo", "Pose Sceau", "Réveil Abîme", "Prix"], "ambiance": "Sur la moraine de Srah Kbal, des conseils entiers sont assis en cercle, et l'un d'eux porte nos visages.", "budget": "base 46,2 ; réveil +33,6 (73 %), recalculé par le critique"}
]
```

---

## Les Qollqa de Sara-Urqu (ASS100 · Assemblée · Haute montagne · Pierre · inca)

```json
{
 "fiche": "ASS100",
 "nom": "Les Qollqa de Sara-Urqu",
 "recit": "Chaque année après la moisson, le conseil de Sara-Urqu monte inspecter les greniers ronds accrochés à la pente. On ouvre chaque porte basse, on plonge le bras dans le maïs, on renifle la chicha dans les jarres, et la vieille Kusi Chimpu dit « bon » ou « gâté ». Gâté, on brûle. Bon, on referme. On redescend avant la nuit en mâchant des feuilles. Cette année, elle a dit « bon » à tous les greniers. Au dernier, elle a retiré son bras couvert de radicelles blanches jusqu'au coude, et elle a dit « bon » aussi.",
 "pal": [
  "Les greniers ronds ont fondu en tas spongieux le long de la pente ; une odeur de chicha aigre monte au col, et les jarres travaillent, couvercles soulevés.",
  "Une mousse blanche gagne les portes des greniers ; le maïs noircit en épis entiers, et le conseil brûle chaque soir ce que la vieille a déclaré gâté.",
  "Pente raide couverte de greniers ronds de pierre et de chaume alignés en rangs, sentiers de dalles, conseil en manteaux de laine devant les portes basses.",
  "Des pousses pâles sortent par les fentes des portes ; le maïs germe dans les sacs, et des racines descendent des greniers jusqu'aux terrasses du dessous.",
  "Les greniers ont pris racine et se sont mis en marche : chaque rang a glissé d'une terrasse pendant la nuit, et les portes s'ouvrent seules sur du maïs vert."
 ],
 "pm": "Pourriture",
 "pp": "Croissance"
}
```

### Pôle − Pourriture

Progression : la loi du gâté, la jarre qui travaille, la mousse aux portes, le feu des greniers, la chicha aigre, les épis noircis, puis les greniers fermentent sur pied. Style : des Lois qui font couver la pourriture dans tous les ennemis à la fois ; ce qui brûle déjà, ou l'ennemi qui s'apprête à se soigner, nourrit la carte. Prix : la pourriture nourrit aussi l'ennemi (il se soigne).

```json
[
{"id": "ASS100-moins-1", "zone": "ASS100", "pole": "-", "palier": 1, "nom": "Loi du gâté", "cout": 1, "cible": 1, "effet": "Loi : si la cible brûle déjà, 4 dégâts. La cible brûle de 2 pendant 3 tours et subit 2 dégâts.", "ops": [["si", "brule", [["deg", "cible", 4]]], ["brulure", "cible", 2, 3], ["deg", "cible", 2]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Condition", "Dégâts", "Dégâts dans le temps"], "ambiance": "Kusi Chimpu dit « gâté » sans lever le bras du maïs, et le conseil allume le feu avant qu'elle l'ait retiré.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS100-moins-2", "zone": "ASS100", "pole": "-", "palier": 2, "nom": "Loi de la jarre qui travaille", "cout": 1, "cible": 1, "effet": "Loi : tous les ennemis brûlent de 1 pendant 3 tours. Si un ennemi s'apprête à se soigner : ils brûlent de 1 pendant 2 tours de plus. La cible subit 5 dégâts.", "ops": [["brulure", "tous", 1, 3], ["si", "soinEnnemi", [["brulure", "tous", 1, 2]]], ["deg", "cible", 5]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Dégâts dans le temps", "Condition", "Dégâts"], "ambiance": "La chicha de Sara-Urqu travaille dans les jarres scellées, et soulève les couvercles d'un doigt chaque nuit.", "budget": "13,8 (cible 12,5, écart +10 % ; vérifié au script)"},
{"id": "ASS100-moins-3", "zone": "ASS100", "pole": "-", "palier": 3, "nom": "La mousse aux portes", "cout": 1, "cible": 1, "effet": "La cible brûle de 3 pendant 4 tours, perd 1 d'attaque et subit 2 dégâts. Chaque ennemi se soigne de 1.", "ops": [["brulure", "cible", 3, 4], ["affaiblit", "cible", 1], ["deg", "cible", 2], ["ennemiSoin", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts dans le temps", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "La mousse blanche des portes basses est douce au toucher, et chaude comme une joue.", "budget": "14,8 (cible 15, écart -1 % ; vérifié au script)"},
{"id": "ASS100-moins-4", "zone": "ASS100", "pole": "-", "palier": 4, "nom": "Loi du feu des greniers", "cout": 2, "cible": 1, "effet": "Loi : si la cible brûle déjà, 8 dégâts. Tous les ennemis brûlent de 2 pendant 4 tours. La cible subit 8 dégâts. Chaque ennemi se soigne de 1.", "ops": [["si", "brule", [["deg", "cible", 8]]], ["brulure", "tous", 2, 4], ["deg", "cible", 8], ["ennemiSoin", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Condition", "Dégâts", "Dégâts dans le temps", "Prix"], "ambiance": "Le feu des greniers gâtés couve sous le chaume pendant des jours, et la pente sent le pain.", "budget": "27,4 (cible 28, écart -2 % ; vérifié au script)"},
{"id": "ASS100-moins-5", "zone": "ASS100", "pole": "-", "palier": 5, "nom": "Loi de la chicha aigre", "cout": 2, "cible": 1, "effet": "Loi : si un ennemi s'apprête à se soigner, la cible brûle de 4 pendant 3 tours. Tous les ennemis brûlent de 2 pendant 3 tours ; la cible brûle de 4 pendant 3 tours et subit 2 dégâts. Chaque ennemi se soigne de 2.", "ops": [["si", "soinEnnemi", [["brulure", "cible", 4, 3]]], ["brulure", "tous", 2, 3], ["brulure", "cible", 4, 3], ["deg", "cible", 2], ["ennemiSoin", 2]], "tags": ["Assemblée", "Pierre", "Pôle −", "Loi", "Condition", "Dégâts dans le temps", "Dégâts", "Prix"], "ambiance": "La chicha aigre se boit au conseil sans grimace ; ceux qui en boivent se soignent vite et sentent le grenier.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ASS100-moins-6", "zone": "ASS100", "pole": "-", "palier": 6, "nom": "Les épis noircis", "cout": 2, "cible": 1, "effet": "Tous les ennemis brûlent de 3 pendant 3 tours et perdent 1 d'attaque. La cible subit 10 dégâts. Chaque ennemi se soigne de 1.", "ops": [["brulure", "tous", 3, 3], ["affaiblit", "tous", 1], ["deg", "cible", 10], ["ennemiSoin", 1]], "tags": ["Assemblée", "Pierre", "Pôle −", "Dégâts dans le temps", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Les épis noircissent d'un seul côté, celui qui regarde la porte, et toujours dans le même ordre.", "budget": "34,2 (cible 36, écart -5 % ; vérifié au script)"},
{"id": "ASS100-moins-7", "zone": "ASS100", "pole": "-", "palier": 7, "nom": "La Pente qui fermente", "cout": 3, "cible": 1, "effet": "Les greniers fermentent sur pied. Tous brûlent de 3 pendant 4 tours, perdent 1 d'attaque, subissent 5 dégâts ; 3 à la cible ; piochez 1. Ennemis soignés de 2. Pose Braise. Si Sang (consommé) : tous brûlent de 2 pendant 4 tours ; 12 à la cible.", "ops": [["brulure", "tous", 3, 4], ["affaiblit", "tous", 1], ["deg", "tous", 5], ["deg", "cible", 3], ["pioche", 1], ["ennemiSoin", 2], ["pose", "Braise"], ["reveil", "Sang", true, [["brulure", "tous", 2, 4], ["deg", "cible", 12]]]], "tags": ["Assemblée", "Pierre", "Forme ultime −7", "Dégâts dans le temps", "Affaiblissement", "Dégâts", "Pioche", "Prix", "Pose Braise", "Réveil Sang"], "ambiance": "Toute la pente de Sara-Urqu fermente sous le soleil, et les greniers ronds respirent par leurs portes basses.", "budget": "46,6 (+29,6 si Sang, soit +64 % ; vérifié au script)"}
]
```

### Pôle + Croissance

Progression : la loi de la semence, le bras plongé, les radicelles au coude, les pousses pâles, le maïs dans les sacs, les racines vers les terrasses, puis les greniers prennent racine. Style : on pioche à chaque carte, on soigne et on couvre le camp ; la troisième carte d'un tour germe mieux que les autres. Prix : PV, ou une carte lâchée.

```json
[
{"id": "ASS100-plus-1", "zone": "ASS100", "pole": "+", "palier": 1, "nom": "Loi de la semence", "cout": 1, "cible": 0, "effet": "Loi : piochez 2 cartes. Le héros se soigne de 2.", "ops": [["pioche", 2], ["soin", "heros", 2]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Pioche", "Soin"], "ambiance": "La meilleure semence dort dans un grenier à part ; cette année, elle a germé dans les sacs fermés.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS100-plus-2", "zone": "ASS100", "pole": "+", "palier": 2, "nom": "Loi du bras plongé", "cout": 1, "cible": 0, "effet": "Loi : si c'est au moins votre troisième carte du tour, piochez 1. Piochez 2 cartes. Vos alliés se soignent de 2. Le héros perd 1 PV.", "ops": [["si", "troisCartes", [["pioche", 1]]], ["pioche", 2], ["soin", "allies", 2], ["prixPV", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Condition", "Pioche", "Soin", "Prix"], "ambiance": "Le bras plongé dans le maïs ressort plus frais qu'il n'est entré ; Kusi Chimpu plonge l'autre aussi.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "ASS100-plus-3", "zone": "ASS100", "pole": "+", "palier": 3, "nom": "Les radicelles au coude", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes. Vos alliés se soignent de 4.", "ops": [["pioche", 2], ["soin", "allies", 4]], "tags": ["Assemblée", "Pierre", "Pôle +", "Soin", "Pioche"], "ambiance": "Les radicelles blanches tiennent au bras de la vieille jusqu'au coude, et elle refuse qu'on les coupe.", "budget": "14,0 / 15,0 (-7 %), recalculé par le critique"},
{"id": "ASS100-plus-4", "zone": "ASS100", "pole": "+", "palier": 4, "nom": "Loi des pousses pâles", "cout": 2, "cible": 0, "effet": "Loi : si c'est au moins votre troisième carte du tour, piochez 2. Piochez 3 cartes. Vos alliés se soignent de 5 et gagnent 3 de garde. Le héros perd 2 PV.", "ops": [["si", "troisCartes", [["pioche", 2]]], ["pioche", 3], ["soin", "allies", 5], ["garde", "allies", 3], ["prixPV", 2]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Condition", "Pioche", "Soin", "Garde", "Prix"], "ambiance": "Les pousses pâles sortent par la fente des portes et se tournent toutes vers la salle du conseil.", "budget": "25,1 (cible 28, écart -10 % ; vérifié au script)"},
{"id": "ASS100-plus-5", "zone": "ASS100", "pole": "+", "palier": 5, "nom": "Loi du maïs dans les sacs", "cout": 2, "cible": 0, "effet": "Loi : piochez 3 cartes. Ajoutez 2 mana de Sève. Vos alliés se soignent de 6 et gagnent 4 de garde. Défaussez 1 carte au hasard.", "ops": [["pioche", 3], ["mana", "Sève", 2], ["soin", "allies", 6], ["garde", "allies", 4], ["prixDefausse", 1]], "tags": ["Assemblée", "Pierre", "Pôle +", "Loi", "Pioche", "Mana", "Soin", "Garde", "Prix"], "ambiance": "Le maïs germe dans les sacs cousus, et les sacs pèsent plus lourd chaque matin qu'au soir de la moisson.", "budget": "28,8 (cible 32, écart -10 % ; vérifié au script)"},
{"id": "ASS100-plus-6", "zone": "ASS100", "pole": "+", "palier": 6, "nom": "Les racines vers les terrasses", "cout": 2, "cible": 0, "effet": "Si c'est au moins votre troisième carte du tour : vos alliés se soignent de 6. Piochez 4 cartes. Vos alliés se soignent de 6 et gagnent 6 de garde. Le héros perd 2 PV.", "ops": [["si", "troisCartes", [["soin", "allies", 6]]], ["pioche", 4], ["soin", "allies", 6], ["garde", "allies", 6], ["prixPV", 2]], "tags": ["Assemblée", "Pierre", "Pôle +", "Condition", "Soin", "Pioche", "Garde", "Prix"], "ambiance": "Les racines des greniers descendent jusqu'aux terrasses du dessous, et le maïs du dessous pousse vers le haut.", "budget": "34,7 (cible 36, écart -4 % ; vérifié au script)"},
{"id": "ASS100-plus-7", "zone": "ASS100", "pole": "+", "palier": 7, "nom": "Les Greniers qui marchent", "cout": 3, "cible": 0, "effet": "Les greniers prennent racine. Piochez 4 ; 1 mana de Pierre ; alliés soignés de 8 et +10 de garde ; héros soigné de 4. Le héros perd 2 PV. Pose Sceau. Si Racine (consommée) : piochez 3, alliés soignés de 6 et +6 de garde.", "ops": [["pioche", 4], ["mana", "Pierre", 1], ["soin", "allies", 8], ["garde", "allies", 10], ["soin", "heros", 4], ["prixPV", 2], ["pose", "Sceau"], ["reveil", "Racine", true, [["pioche", 3], ["soin", "allies", 6], ["garde", "allies", 6]]]], "tags": ["Assemblée", "Pierre", "Forme ultime +7", "Pioche", "Mana", "Soin", "Garde", "Prix", "Pose Sceau", "Réveil Racine"], "ambiance": "Au matin, chaque rang de greniers a glissé d'une terrasse ; les sentiers de dalles sont restés en haut.", "budget": "45 (+28,2 si Racine, soit +63 % ; vérifié au script)"}
]
```

---

## Le Vétché de Smolna Pouchtcha (ASS098 · Assemblée · Jungle · Sève · slave)

```json
{
 "fiche": "ASS098",
 "nom": "Le Vétché de Smolna Pouchtcha",
 "recit": "Interrogatoire du résinier Ermolaï devant le vétché de Smolna Pouchtcha. Où as-tu saigné l'arbre ? Au grand kapokier, au-dessus de la pierre aux visages. Qu'en est-il sorti ? Une sève claire, qui durcit en baguettes de verre ; elles sonnent quand on les frappe. Et la pierre ? Elle a toujours eu deux visages. Combien en compte-t-elle aujourd'hui ? Trois. Et le troisième ? Le résinier n'a pas répondu : il avait la mâchoire prise jusqu'aux oreilles, lisse et grise. Le vétché a levé la séance.",
 "pal": [
  "La forêt s'est changée en pierre jusqu'aux feuilles ; les membres du vétché sont assis en cercle, gris et lisses, et la pierre aux visages les regarde tous.",
  "Une croûte grise monte le long des troncs ; les résiniers ont la peau dure aux mains, et la pierre aux visages en compte un de plus chaque lune.",
  "Jungle épaisse où des colons slaves ont dressé une palissade de rondins, grand kapokier saigné, pierre sculptée à visages, vétché assis sur des souches.",
  "La sève coule claire et durcit en baguettes de verre ; le vent les fait sonner dans les branches, et les colons boivent l'eau qui en goutte.",
  "La forêt est devenue claire comme de l'eau prise ; on voit le vétché à travers les troncs, et chaque arbre sonne quand un oiseau s'y pose."
 ],
 "pm": "Pierre",
 "pp": "Cristal"
}
```

### Pôle − Pierre

Progression : la peau dure, la pierre aux visages, la croûte des troncs, la mâchoire prise, le cercle gris, le visage de plus, puis le vétché se fait pierre. Style : la Garde du héros s'épaissit et l'ennemi s'alourdit (il perd son attaque) ; une Garde déjà levée rapporte plus. Prix : PV, parce que la pierre prend la chair.

```json
[
{"id": "ASS098-moins-1", "zone": "ASS098", "pole": "-", "palier": 1, "nom": "Loi de la peau dure", "cout": 1, "cible": 1, "effet": "Loi : le héros gagne 8 de garde. La cible perd 1 d'attaque.", "ops": [["garde", "heros", 8], ["affaiblit", "cible", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Garde", "Affaiblissement"], "ambiance": "Les résiniers de Smolna Pouchtcha ont la paume dure comme de l'écorce, et ne sentent plus la serpe.", "budget": "9,4 (cible 10, écart -6 % ; vérifié au script)"},
{"id": "ASS098-moins-2", "zone": "ASS098", "pole": "-", "palier": 2, "nom": "Loi de la pierre aux visages", "cout": 1, "cible": 0, "effet": "Loi : si votre Garde est déjà levée, riposte 3 jusqu'au prochain tour. Le héros gagne 13 de garde et perd 1 PV.", "ops": [["si", "garde", [["riposte", 3]]], ["garde", "heros", 13], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Garde", "Riposte", "Condition", "Prix"], "ambiance": "La pierre aux visages a toujours regardé la palissade ; ce matin, un de ses visages regarde le vétché.", "budget": "12,4 / 12,5 (-1 %), recalculé par le critique"},
{"id": "ASS098-moins-3", "zone": "ASS098", "pole": "-", "palier": 3, "nom": "La croûte des troncs", "cout": 1, "cible": 1, "effet": "Le héros gagne 12 de garde. La cible subit 6 dégâts. Le héros perd 2 PV.", "ops": [["garde", "heros", 12], ["deg", "cible", 6], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Dégâts", "Garde", "Prix"], "ambiance": "La croûte grise monte le long des troncs d'une paume par nuit, et les lianes qui la touchent cassent.", "budget": "13,6 / 15,0 (-9 %), recalculé par le critique"},
{"id": "ASS098-moins-4", "zone": "ASS098", "pole": "-", "palier": 4, "nom": "Loi de la mâchoire prise", "cout": 2, "cible": 1, "effet": "Loi : si votre Garde est déjà levée, 8 de garde de plus. Le héros gagne 18 de garde. Tous les ennemis perdent 1 d'attaque ; la cible subit 3 dégâts. Le héros perd 2 PV.", "ops": [["si", "garde", [["garde", "heros", 8]]], ["garde", "heros", 18], ["affaiblit", "tous", 1], ["deg", "cible", 3], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Condition", "Garde", "Affaiblissement", "Dégâts", "Prix"], "ambiance": "Ermolaï ne parle plus ; sa mâchoire grise est lisse et froide, et il sourit sans le vouloir.", "budget": "25,2 (cible 28, écart -10 % ; vérifié au script)"},
{"id": "ASS098-moins-5", "zone": "ASS098", "pole": "-", "palier": 5, "nom": "Loi du cercle gris", "cout": 2, "cible": 1, "effet": "Loi : le héros gagne 26 de garde. Riposte 3 jusqu'au prochain tour. La cible subit 6 dégâts. Défaussez 1 carte au hasard.", "ops": [["garde", "heros", 26], ["riposte", 3], ["deg", "cible", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle −", "Loi", "Dégâts", "Garde", "Riposte", "Prix"], "ambiance": "Le vétché siège en cercle sur les souches, et chaque séance un peu plus immobile que la précédente.", "budget": "29,8 / 32,0 (-7 %), recalculé par le critique"},
{"id": "ASS098-moins-6", "zone": "ASS098", "pole": "-", "palier": 6, "nom": "Le visage de plus", "cout": 2, "cible": 1, "effet": "Si votre Garde est déjà levée : 12 dégâts. Le héros gagne 22 de garde. Tous les ennemis perdent 1 d'attaque ; la cible subit 6 dégâts. Le héros perd 3 PV.", "ops": [["si", "garde", [["deg", "cible", 12]]], ["garde", "heros", 22], ["affaiblit", "tous", 1], ["deg", "cible", 6], ["prixPV", 3]], "tags": ["Assemblée", "Sève", "Pôle −", "Condition", "Dégâts", "Garde", "Affaiblissement", "Prix"], "ambiance": "La pierre compte un visage de plus chaque lune ; le dernier a la barbe d'Ermolaï et les yeux fermés.", "budget": "33,2 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "ASS098-moins-7", "zone": "ASS098", "pole": "-", "palier": 7, "nom": "Le Cercle de pierre", "cout": 3, "cible": 1, "effet": "Le vétché se fait pierre. Le héros gagne 30 de garde ; riposte 1. Tous les ennemis −2 d'attaque ; la cible subit 10 dégâts. Le héros perd 3 PV. Pose Givre. Si Sceau (consommé) : +20 de garde, piochez 2, la cible −2 d'attaque.", "ops": [["garde", "heros", 30], ["riposte", 1], ["affaiblit", "tous", 2], ["deg", "cible", 10], ["prixPV", 3], ["pose", "Givre"], ["reveil", "Sceau", true, [["garde", "heros", 20], ["pioche", 2], ["affaiblit", "cible", 2]]]], "tags": ["Assemblée", "Sève", "Forme ultime −7", "Garde", "Riposte", "Affaiblissement", "Dégâts", "Prix", "Pose Givre", "Réveil Sceau"], "ambiance": "Le vétché de Smolna Pouchtcha est assis en cercle, gris et lisse, et la séance n'a jamais été levée.", "budget": "46,2 (+30 si Sceau, soit +65 % ; vérifié au script)"}
]
```

### Pôle + Cristal

Progression : la baguette qui sonne, la sève claire, l'eau qui goutte, le vent dans les branches, le kapokier saigné, la forêt claire, puis la forêt sonne d'un bloc. Style : chaque carte fait résonner la suivante (écho : la prochaine carte de zone du tour compte double) et pioche de quoi la nourrir ; si une autre carte est déjà jouée ce tour, elle sonne plus fort. Prix : PV et cartes.

```json
[
{"id": "ASS098-plus-1", "zone": "ASS098", "pole": "+", "palier": 1, "nom": "Loi de la baguette qui sonne", "cout": 1, "cible": 0, "effet": "Loi : la prochaine carte de zone jouée ce tour compte double. Piochez 1 carte.", "ops": [["echo"], ["pioche", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Écho", "Pioche"], "ambiance": "La baguette de sève frappée au couteau sonne une note, et la note dure plus longtemps que le coup.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "ASS098-plus-2", "zone": "ASS098", "pole": "+", "palier": 2, "nom": "La sève claire", "cout": 1, "cible": 1, "effet": "Si vous avez déjà joué une autre carte ce tour : 4 dégâts. La prochaine carte de zone de ce tour compte double. Piochez 1 carte. La cible subit 2 dégâts. Le héros perd 1 PV.", "ops": [["si", "cartesJouees", [["deg", "cible", 4]]], ["echo"], ["pioche", 1], ["deg", "cible", 2], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Condition", "Dégâts", "Écho", "Pioche", "Prix"], "ambiance": "La sève du kapokier coule claire au lieu de blanche, et durcit avant de toucher la mousse.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "ASS098-plus-3", "zone": "ASS098", "pole": "+", "palier": 3, "nom": "Loi de l'eau qui goutte", "cout": 1, "cible": 0, "effet": "Loi : la prochaine carte de zone de ce tour compte double. Le héros se soigne de 6. Piochez 1 carte. Le héros perd 1 PV.", "ops": [["echo"], ["soin", "heros", 6], ["pioche", 1], ["prixPV", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Écho", "Soin", "Pioche", "Prix"], "ambiance": "Les colons boivent l'eau qui goutte des baguettes ; elle a le goût de la pluie, et pas d'autre.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "ASS098-plus-4", "zone": "ASS098", "pole": "+", "palier": 4, "nom": "Loi du vent dans les branches", "cout": 2, "cible": 0, "effet": "Loi : si vous avez déjà joué une autre carte ce tour, piochez 1. La prochaine carte de zone compte double. Piochez 2 cartes. 6 dégâts à tous les ennemis. Défaussez 1 carte au hasard.", "ops": [["si", "cartesJouees", [["pioche", 1]]], ["echo"], ["pioche", 2], ["deg", "tous", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Condition", "Pioche", "Écho", "Dégâts", "Prix"], "ambiance": "Le vent fait sonner les baguettes dans les branches, toutes ensemble, sur une note que personne n'a choisie.", "budget": "26,2 (cible 28, écart -6 % ; vérifié au script)"},
{"id": "ASS098-plus-5", "zone": "ASS098", "pole": "+", "palier": 5, "nom": "Le kapokier saigné", "cout": 2, "cible": 1, "effet": "La prochaine carte de zone de ce tour compte double. Piochez 2 cartes. La cible subit 18 dégâts. Le héros perd 2 PV.", "ops": [["echo"], ["pioche", 2], ["deg", "cible", 18], ["prixPV", 2]], "tags": ["Assemblée", "Sève", "Pôle +", "Écho", "Pioche", "Dégâts", "Prix"], "ambiance": "Le grand kapokier saigné au-dessus de la pierre rend plus de sève qu'il n'a de tronc.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "ASS098-plus-6", "zone": "ASS098", "pole": "+", "palier": 6, "nom": "Loi de la forêt claire", "cout": 2, "cible": 0, "effet": "Loi : si vous avez déjà joué une autre carte ce tour, 4 dégâts à tous. La prochaine carte de zone compte double. Piochez 3 cartes. 6 dégâts à tous les ennemis. Défaussez 1 carte au hasard.", "ops": [["si", "cartesJouees", [["deg", "tous", 4]]], ["echo"], ["pioche", 3], ["deg", "tous", 6], ["prixDefausse", 1]], "tags": ["Assemblée", "Sève", "Pôle +", "Loi", "Condition", "Dégâts", "Écho", "Pioche", "Prix"], "ambiance": "Dans la forêt claire, on voit les colons marcher à travers les troncs, et ils ne voient plus les troncs.", "budget": "32,6 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "ASS098-plus-7", "zone": "ASS098", "pole": "+", "palier": 7, "nom": "La Forêt de verre", "cout": 3, "cible": 1, "effet": "La forêt sonne d'un bloc. La prochaine carte de zone compte double ; piochez 3 ; 10 dégâts à tous, 4 à la cible ; soin de 6. Le héros perd 3 PV. Pose Sceau. Si Givre (consommé) : piochez 2, 7 dégâts à tous, soin de 6.", "ops": [["echo"], ["pioche", 3], ["deg", "tous", 10], ["deg", "cible", 4], ["soin", "heros", 6], ["prixPV", 3], ["pose", "Sceau"], ["reveil", "Givre", true, [["pioche", 2], ["deg", "tous", 7], ["soin", "heros", 6]]]], "tags": ["Assemblée", "Sève", "Forme ultime +7", "Écho", "Pioche", "Dégâts", "Soin", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "Chaque arbre de Smolna Pouchtcha sonne quand un oiseau s'y pose, et les oiseaux ne s'y posent plus.", "budget": "47 (+29,4 si Givre, soit +63 % ; vérifié au script)"}
]
```

---

## Per-Shena, le Grenier sous la Glace (DON035 · Donjon · Glacier · Glace · égyptienne)

```json
{
 "fiche": "DON035",
 "nom": "Per-Shena, le Grenier sous la Glace",
 "recit": "Je suis descendu par la crevasse avec deux frères et une corde, comme on descend dans n'importe quelle tombe. En bas, le glacier tenait une salle peinte et, au milieu, le grenier du mort : un petit modèle de bois, avec ses scribes assis qui comptent les sacs. Nous avons cassé le toit pour prendre ce qu'il y avait dedans. Il y avait du grain, frais, gonflé, à ras bord. Nous en avons rempli nos sacs. Les scribes de bois comptaient toujours, à voix basse. Je le jure devant ce tribunal : quand nous sommes remontés, le grain débordait du toit cassé.",
 "pal": [
  "La glace s'est refermée sur la salle peinte ; des pilleurs gelés pendent à leurs cordes dans la crevasse, sacs crevés, et le grain gèle en cascade figée.",
  "Des plafonds s'effondrent en blocs bleus ; les cordes des pilleurs pendent coupées, et des sacs éventrés jonchent le couloir de la tombe.",
  "Crevasse de glacier qui ouvre sur une tombe égyptienne peinte, salle froide, petit grenier de bois avec ses scribes assis, cordes de pilleurs.",
  "Le grain déborde du modèle de bois et coule dans les couloirs ; les scribes de bois comptent à voix basse, et la glace fond en rigoles autour des sacs.",
  "Le glacier entier est un grenier : le grain monte dans les crevasses jusqu'au ciel, et une foule de petits scribes comptent, assis sur la neige."
 ],
 "pm": "Ruine",
 "pp": "Abondance"
}
```

### Pôle − Ruine

Progression : le plafond fendu, la corde coupée, les blocs bleus, le couloir piégé, les pilleurs pendus, la salle qui s'effondre, puis la glace referme la tombe. Style : la tombe se défend toute seule ; chaque coup reçu par le héros renvoie des dégâts, et les plafonds tombent sur tous. Quand l'ennemi s'apprête à piétiner, le piège est plus lourd. Prix : PV, ou une carte.

```json
[
{"id": "DON035-moins-1", "zone": "DON035", "pole": "-", "palier": 1, "nom": "Le plafond fendu", "cout": 1, "cible": 0, "effet": "Riposte 3 jusqu'au prochain tour. Le héros gagne 5 de garde.", "ops": [["riposte", 3], ["garde", "heros", 5]], "tags": ["Donjon", "Glace", "Pôle −", "Riposte", "Garde"], "ambiance": "Le plafond peint de Per-Shena est fendu d'un trait net, et le trait suit la ligne des étoiles peintes.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON035-moins-2", "zone": "DON035", "pole": "-", "palier": 2, "nom": "La corde coupée", "cout": 1, "cible": 1, "effet": "Si la cible s'apprête à piétiner : riposte 3 de plus. Riposte 3 jusqu'au prochain tour. La cible subit 5 dégâts. Le héros perd 1 PV.", "ops": [["si", "pietine", [["riposte", 3]]], ["riposte", 3], ["deg", "cible", 5], ["prixPV", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Riposte", "Dégâts", "Prix"], "ambiance": "La corde du troisième frère pend coupée au-dessus de la salle, net, à hauteur de main.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON035-moins-3", "zone": "DON035", "pole": "-", "palier": 3, "nom": "Les blocs bleus", "cout": 1, "cible": 1, "effet": "Riposte 3 jusqu'au prochain tour. La cible subit 6 dégâts. Le héros gagne 3 de garde.", "ops": [["riposte", 3], ["deg", "cible", 6], ["garde", "heros", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Riposte", "Dégâts", "Garde"], "ambiance": "Les blocs bleus tombent du plafond un par un ; chacun s'arrête à un pas de l'endroit où l'on se tenait.", "budget": "14,4 (cible 15, écart -4 % ; vérifié au script)"},
{"id": "DON035-moins-4", "zone": "DON035", "pole": "-", "palier": 4, "nom": "Le couloir piégé", "cout": 2, "cible": 1, "effet": "Si la cible s'apprête à piétiner : 4 dégâts à tous. Riposte 8 jusqu'au prochain tour. 4 dégâts à tous les ennemis. Défaussez 1 carte au hasard.", "ops": [["si", "pietine", [["deg", "tous", 4]]], ["riposte", 8], ["deg", "tous", 4], ["prixDefausse", 1]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Riposte", "Condition", "Prix"], "ambiance": "Le couloir de la tombe s'allonge d'un pas chaque fois qu'on le parcourt, et les dalles piégées avec lui.", "budget": "26,2 / 28,0 (-6 %), recalculé par le critique"},
{"id": "DON035-moins-5", "zone": "DON035", "pole": "-", "palier": 5, "nom": "Les pilleurs pendus", "cout": 2, "cible": 0, "effet": "Riposte 7 jusqu'au prochain tour. 6 dégâts à tous les ennemis. Le héros gagne 8 de garde et perd 2 PV.", "ops": [["riposte", 7], ["deg", "tous", 6], ["garde", "heros", 8], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle −", "Riposte", "Dégâts", "Garde", "Prix"], "ambiance": "Les pilleurs gelés pendent à leurs cordes dans la crevasse, sacs crevés, et leurs mains serrent encore le grain.", "budget": "31,6 (cible 32, écart -1 % ; vérifié au script)"},
{"id": "DON035-moins-6", "zone": "DON035", "pole": "-", "palier": 6, "nom": "La salle qui s'effondre", "cout": 2, "cible": 1, "effet": "Si la cible s'apprête à piétiner : riposte 4 de plus. Riposte 8 jusqu'au prochain tour. 7 dégâts à tous les ennemis. Le héros perd 3 PV.", "ops": [["si", "pietine", [["riposte", 4]]], ["riposte", 8], ["deg", "tous", 7], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Dégâts", "Riposte", "Condition", "Prix"], "ambiance": "La salle peinte s'effondre derrière les pilleurs, et les scribes de bois continuent de compter sous les blocs.", "budget": "32,4 / 36,0 (-10 %), recalculé par le critique"},
{"id": "DON035-moins-7", "zone": "DON035", "pole": "-", "palier": 7, "nom": "La Crevasse refermée", "cout": 3, "cible": 0, "effet": "La glace referme la tombe. Riposte 10 ; 8 dégâts à tous ; la garde de tous les ennemis tombe ; héros +12 de garde. Le héros perd 3 PV. Pose Sang. Si Abîme (consommé) : 8 dégâts à tous, riposte 6, héros +4 de garde.", "ops": [["riposte", 10], ["deg", "tous", 8], ["briseGarde", "tous"], ["garde", "heros", 12], ["prixPV", 3], ["pose", "Sang"], ["reveil", "Abîme", true, [["deg", "tous", 8], ["riposte", 6], ["garde", "heros", 4]]]], "tags": ["Donjon", "Glace", "Forme ultime −7", "Riposte", "Dégâts", "Perce-garde", "Garde", "Prix", "Pose Sang", "Réveil Abîme"], "ambiance": "La crevasse de Per-Shena s'est refermée sans bruit, et la glace garde, au milieu, la forme d'une corde.", "budget": "50,8 (+32,8 si Abîme, soit +65 % ; vérifié au script)"}
]
```

### Pôle + Abondance

Progression : le sac gonflé, le scribe de bois, le grain qui coule, les sacs en rempart, le toit cassé, les scribes qui comptent, puis le glacier devient grenier. Style : le camp s'abrite derrière des sacs de grain (garde des alliés), on remplit la réserve de mana de Glace, et le dernier ennemi debout reçoit un gros coup. Prix : l'ennemi se soigne ou se couvre lui aussi.

```json
[
{"id": "DON035-plus-1", "zone": "DON035", "pole": "+", "palier": 1, "nom": "Le sac gonflé", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 6 de garde. Ajoutez 1 mana de Glace à la réserve.", "ops": [["garde", "allies", 6], ["mana", "Glace", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Garde", "Mana"], "ambiance": "Le sac rempli dans la tombe a gonflé pendant la remontée, et la toile craque aux coutures.", "budget": "10,2 (cible 10, écart +2 % ; vérifié au script)"},
{"id": "DON035-plus-2", "zone": "DON035", "pole": "+", "palier": 2, "nom": "Le scribe de bois", "cout": 1, "cible": 0, "effet": "Un scribe de bois s'assoit devant vous : 10 PV, frappe 1. Vos alliés gagnent 5 de garde.", "ops": [["invoque", "Scribe de bois", 10, 1], ["garde", "allies", 5]], "tags": ["Donjon", "Glace", "Pôle +", "Invocation", "Garde"], "ambiance": "Le scribe de bois compte les sacs à voix basse, et son compte ne tombe jamais juste.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "DON035-plus-3", "zone": "DON035", "pole": "+", "palier": 3, "nom": "Le grain qui coule", "cout": 1, "cible": 1, "effet": "S'il ne reste qu'un ennemi : 6 dégâts. Vos alliés gagnent 8 de garde. La cible subit 4 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "seul", [["deg", "cible", 6]]], ["garde", "allies", 8], ["deg", "cible", 4], ["ennemiGarde", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Le grain coule du modèle de bois dans les couloirs, plus vite que l'eau de fonte, et dans l'autre sens.", "budget": "14,6 (cible 15, écart -3 % ; vérifié au script)"},
{"id": "DON035-plus-4", "zone": "DON035", "pole": "+", "palier": 4, "nom": "Les sacs en rempart", "cout": 2, "cible": 1, "effet": "Vos alliés gagnent 14 de garde. Ajoutez 2 mana de Glace. La cible subit 5 dégâts. Chaque ennemi se soigne de 1.", "ops": [["garde", "allies", 14], ["mana", "Glace", 2], ["deg", "cible", 5], ["ennemiSoin", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Garde", "Mana", "Dégâts", "Prix"], "ambiance": "Les sacs empilés en rempart dans la crevasse sont plus nombreux le matin qu'on ne les a laissés.", "budget": "25,6 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "DON035-plus-5", "zone": "DON035", "pole": "+", "palier": 5, "nom": "Le toit cassé", "cout": 2, "cible": 1, "effet": "S'il ne reste qu'un ennemi : 10 dégâts. La cible subit 12 dégâts. Vos alliés gagnent 13 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "seul", [["deg", "cible", 10]]], ["deg", "cible", 12], ["garde", "allies", 13], ["ennemiGarde", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Par le toit cassé, le grain monte encore, gonflé et frais, alors que rien ne pousse sous la glace.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "DON035-plus-6", "zone": "DON035", "pole": "+", "palier": 6, "nom": "Les scribes qui comptent", "cout": 2, "cible": 0, "effet": "Vos alliés gagnent 19 de garde et se soignent de 5. Ajoutez 2 mana de Glace. Chaque ennemi se soigne de 1.", "ops": [["garde", "allies", 19], ["soin", "allies", 5], ["mana", "Glace", 2], ["ennemiSoin", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Garde", "Soin", "Mana", "Prix"], "ambiance": "Les scribes de bois comptent à voix basse, et leur compte, quand on tend l'oreille, est un compte à rebours.", "budget": "34,1 (cible 36, écart -5 % ; vérifié au script)"},
{"id": "DON035-plus-7", "zone": "DON035", "pole": "+", "palier": 7, "nom": "Le Grenier du Glacier", "cout": 3, "cible": 1, "effet": "Le glacier devient grenier. Alliés +22 de garde ; 2 mana de Glace ; 14 dégâts à la cible, et 8 de plus s'il ne reste qu'un ennemi. Ennemis soignés de 2. Pose Racine. Si Sang (consommé) : alliés +12 de garde, 12 à la cible, 1 mana de Glace.", "ops": [["garde", "allies", 22], ["mana", "Glace", 2], ["deg", "cible", 14], ["si", "seul", [["deg", "cible", 8]]], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sang", true, [["garde", "allies", 12], ["deg", "cible", 12], ["mana", "Glace", 1]]]], "tags": ["Donjon", "Glace", "Forme ultime +7", "Garde", "Mana", "Dégâts", "Condition", "Prix", "Pose Racine", "Réveil Sang"], "ambiance": "Le grain de Per-Shena monte dans les crevasses jusqu'au ciel, et les scribes, assis sur la neige, le comptent.", "budget": "46 (+29,4 si Sang, soit +64 % ; vérifié au script)"}
]
```

---

## Sabzgarh, le Fort sur la Digue (DON120 · Donjon · Marais · Sève · moghole)

```json
{
 "fiche": "DON120",
 "nom": "Sabzgarh, le Fort sur la Digue",
 "recit": "Rapport de l'ingénieur Mir Hasan au gouverneur, sur la digue de Sabzgarh. La digue tient. Elle ferme le marais sur trois côtés ; le quatrième est le fort. Les condamnés y travaillent enchaînés par dix et dorment au pied du talus, côté marais, comme le veut le règlement. Le marais ne baisse pas. J'ai planté des jalons : l'eau monte d'un empan par nuit contre la digue, et seulement devant les condamnés endormis ; au matin, elle redescend. Les condamnés ne se plaignent de rien. Ils dorment très bien.",
 "pal": [
  "Une digue noire enferme un marais desséché ; des files d'hommes enchaînés portent la terre au même pas, et le fort domine une boue craquelée.",
  "Des jalons de bois mesurent l'eau tout le long du talus ; les gardes comptent les chaînes à l'aube, et la boue sèche colle aux pieds des condamnés.",
  "Fort moghol de brique au bout d'une longue digue de terre, marais de roseaux et de lentilles d'eau d'un côté, champs gagnés de l'autre.",
  "L'eau passe par les brèches de la digue ; des buffles nagent dans les champs gagnés, et des chaînes ouvertes rouillent dans les roseaux.",
  "La digue a disparu sous l'eau ; les buffles nagent dans la cour du fort, et les anciens condamnés dorment au fil du courant, la bouche sous l'eau."
 ],
 "pm": "Tyrannie",
 "pp": "Liberté"
}
```

### Pôle − Tyrannie

Progression : le jalon de bois, la chaîne par dix, le règlement du talus, la corvée de nuit, les gardes à l'aube, la digue rehaussée, puis le fort enferme le marais. Style : des coups lourds sur une seule cible, figée par l'ordre (elle hésite) ; une cible qui hésite déjà paie plus cher. La plupart de ces cartes s'exilent après usage : la digue ne se construit qu'une fois par combat.

```json
[
{"id": "DON120-moins-1", "zone": "DON120", "pole": "-", "palier": 1, "nom": "Le jalon de bois", "cout": 1, "cible": 1, "effet": "La cible hésite : elle n'exécute pas son intention ce tour. Elle subit 5 dégâts.", "ops": [["hesite", "cible"], ["deg", "cible", 5]], "tags": ["Donjon", "Sève", "Pôle −", "Contrôle", "Dégâts"], "ambiance": "Mir Hasan plante un jalon par condamné, et l'eau ne monte que devant les jalons.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON120-moins-2", "zone": "DON120", "pole": "-", "palier": 2, "nom": "La chaîne par dix", "cout": 1, "cible": 1, "effet": "Si la cible hésite déjà : 6 dégâts. La cible subit 12 dégâts. Le héros perd 3 PV.", "ops": [["si", "hesite", [["deg", "cible", 6]]], ["deg", "cible", 12], ["prixPV", 3]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Condition", "Prix"], "ambiance": "Les condamnés de Sabzgarh sont enchaînés par dix, et marchent si bien au pas qu'on n'entend qu'un seul homme.", "budget": "12,0 / 12,5 (-4 %), recalculé par le critique"},
{"id": "DON120-moins-3", "zone": "DON120", "pole": "-", "palier": 3, "nom": "Le règlement du talus", "cout": 1, "cible": 1, "effet": "Si la cible hésite déjà : 6 dégâts. La cible subit 8 dégâts et perd 2 d'attaque. Le héros perd 3 PV.", "ops": [["si", "hesite", [["deg", "cible", 6]]], ["deg", "cible", 8], ["affaiblit", "cible", 2], ["prixPV", 3]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Affaiblissement", "Condition", "Prix"], "ambiance": "Le règlement veut qu'on dorme côté marais ; personne n'a demandé pourquoi, et personne ne s'en plaint.", "budget": "14,0 / 15,0 (-7 %), recalculé par le critique"},
{"id": "DON120-moins-4", "zone": "DON120", "pole": "-", "palier": 4, "nom": "La corvée de nuit", "cout": 2, "cible": 1, "effet": "La cible hésite : elle n'exécute pas son intention ce tour. Elle subit 20 dégâts. Le héros gagne 6 de garde. Cette carte s'exile.", "ops": [["hesite", "cible"], ["deg", "cible", 20], ["garde", "heros", 6], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Contrôle", "Dégâts", "Garde", "Exil"], "ambiance": "La nuit, la corvée porte la terre sans torches, et les paniers arrivent pleins au sommet de la digue.", "budget": "26,8 (cible 28, écart -4 % ; vérifié au script)"},
{"id": "DON120-moins-5", "zone": "DON120", "pole": "-", "palier": 5, "nom": "Les gardes à l'aube", "cout": 2, "cible": 1, "effet": "Si la cible hésite déjà : 10 dégâts. La garde de la cible tombe ; elle subit 19 dégâts. Le héros gagne 8 de garde. Cette carte s'exile.", "ops": [["si", "hesite", [["deg", "cible", 10]]], ["briseGarde", "cible"], ["deg", "cible", 19], ["garde", "heros", 8], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Garde", "Exil"], "ambiance": "À l'aube, les gardes comptent les chaînes, puis les hommes ; les deux comptes ne tombent plus d'accord.", "budget": "30,4 (cible 32, écart -5 % ; vérifié au script)"},
{"id": "DON120-moins-6", "zone": "DON120", "pole": "-", "palier": 6, "nom": "La digue rehaussée", "cout": 2, "cible": 1, "effet": "La cible subit 25 dégâts ; 4 dégâts à tous les ennemis. Le héros gagne 6 de garde et perd 2 PV. Cette carte s'exile.", "ops": [["deg", "cible", 25], ["deg", "tous", 4], ["garde", "heros", 6], ["prixPV", 2], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Garde", "Prix", "Exil"], "ambiance": "La digue de Sabzgarh a été rehaussée d'une coudée cet été ; l'eau, de l'autre côté, d'une coudée aussi.", "budget": "33,6 (cible 36, écart -7 % ; vérifié au script)"},
{"id": "DON120-moins-7", "zone": "DON120", "pole": "-", "palier": 7, "nom": "Le Fort sur la Digue", "cout": 3, "cible": 1, "effet": "Le fort enferme le marais. Tous les ennemis hésitent ce tour et perdent 1 d'attaque ; la cible subit 24 dégâts ; héros +12 de garde. Cette carte s'exile. Pose Abîme. Si Sang (consommé) : 18 dégâts à la cible, −1 d'attaque, +10 de garde.", "ops": [["hesite", "tous"], ["affaiblit", "tous", 1], ["deg", "cible", 24], ["garde", "heros", 12], ["exil"], ["pose", "Abîme"], ["reveil", "Sang", true, [["deg", "cible", 18], ["affaiblit", "cible", 1], ["garde", "heros", 10]]]], "tags": ["Donjon", "Sève", "Forme ultime −7", "Contrôle", "Affaiblissement", "Dégâts", "Garde", "Exil", "Pose Abîme", "Réveil Sang"], "ambiance": "Le fort domine une boue craquelée ; les files d'hommes enchaînés y portent la terre au même pas.", "budget": "46 (+29 si Sang, soit +63 % ; vérifié au script)"}
]
```

### Pôle + Liberté

Progression : la brèche, les chaînes ouvertes, le buffle dans les champs, les roseaux qui reprennent, le courant dans la cour, les dormeurs au fil de l'eau, puis la digue fond dans l'eau. Style : l'eau frappe tous les ennemis à la fois et emporte leurs gardes ; le héros se soigne au courant ; si l'ennemi prend son élan, la vague le prend avant. Prix : PV, ou une carte.

```json
[
{"id": "DON120-plus-1", "zone": "DON120", "pole": "+", "palier": 1, "nom": "La brèche", "cout": 1, "cible": 1, "effet": "4 dégâts à tous les ennemis. Si la cible prend son élan : 2 dégâts à tous.", "ops": [["deg", "tous", 4], ["si", "elan", [["deg", "tous", 2]]]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Condition"], "ambiance": "La première brèche s'est ouverte devant le jalon d'un condamné endormi, à l'endroit exact où il dormait.", "budget": "11,0 / 10,0 (+10 %), recalculé par le critique"},
{"id": "DON120-plus-2", "zone": "DON120", "pole": "+", "palier": 2, "nom": "Les chaînes ouvertes", "cout": 1, "cible": 1, "effet": "Si la cible prend son élan : 2 dégâts à tous. 5 dégâts à tous les ennemis. Le héros perd 1 PV.", "ops": [["si", "elan", [["deg", "tous", 2]]], ["deg", "tous", 5], ["prixPV", 1]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Condition", "Prix"], "ambiance": "Les chaînes ouvertes rouillent dans les roseaux, et pas une n'a été forcée : elles se sont ouvertes.", "budget": "12,2 / 12,5 (-2 %), recalculé par le critique"},
{"id": "DON120-plus-3", "zone": "DON120", "pole": "+", "palier": 3, "nom": "Le buffle dans les champs", "cout": 1, "cible": 0, "effet": "Un buffle d'eau nage dans les champs gagnés : 14 PV, frappe 4. 2 dégâts à tous les ennemis. Le héros perd 2 PV.", "ops": [["invoque", "Buffle d'eau", 14, 4], ["deg", "tous", 2], ["prixPV", 2]], "tags": ["Donjon", "Sève", "Pôle +", "Invocation", "Dégâts", "Prix"], "ambiance": "Les buffles du marais nagent dans les champs gagnés comme s'ils les avaient toujours connus sous l'eau.", "budget": "15,4 (cible 15, écart +3 % ; vérifié au script)"},
{"id": "DON120-plus-4", "zone": "DON120", "pole": "+", "palier": 4, "nom": "Les roseaux reprennent", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : la garde de tous les ennemis tombe. 9 dégâts à tous les ennemis. Le héros se soigne de 5. Défaussez 1 carte au hasard.", "ops": [["si", "elan", [["briseGarde", "tous"]]], ["deg", "tous", 9], ["soin", "heros", 5], ["prixDefausse", 1]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Soin", "Perce-garde", "Condition", "Prix"], "ambiance": "Les roseaux reprennent les champs en une saison, et poussent en lignes droites, comme on plantait le riz.", "budget": "25,1 / 28,0 (-10 %), recalculé par le critique"},
{"id": "DON120-plus-5", "zone": "DON120", "pole": "+", "palier": 5, "nom": "Le courant dans la cour", "cout": 2, "cible": 0, "effet": "La garde de tous les ennemis tombe ; 9 dégâts à tous. Le héros se soigne de 7 et perd 3 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", 9], ["soin", "heros", 7], ["prixPV", 3]], "tags": ["Donjon", "Sève", "Pôle +", "Perce-garde", "Dégâts", "Soin", "Prix"], "ambiance": "Le courant traverse la cour du fort et ressort par la porte des condamnés, qu'on avait murée.", "budget": "30,4 (cible 32, écart -5 % ; vérifié au script)"},
{"id": "DON120-plus-6", "zone": "DON120", "pole": "+", "palier": 6, "nom": "Les dormeurs au fil de l'eau", "cout": 2, "cible": 1, "effet": "Si la cible prend son élan : 4 dégâts à tous. 10 dégâts à tous les ennemis. Le héros se soigne de 8 et perd 2 PV.", "ops": [["si", "elan", [["deg", "tous", 4]]], ["deg", "tous", 10], ["soin", "heros", 8], ["prixPV", 2]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Soin", "Condition", "Prix"], "ambiance": "Les anciens condamnés dorment au fil du courant, la bouche sous l'eau, et leur poitrine se soulève quand même.", "budget": "32,4 / 36,0 (-10 %), recalculé par le critique"},
{"id": "DON120-plus-7", "zone": "DON120", "pole": "+", "palier": 7, "nom": "Le Marais sans digue", "cout": 3, "cible": 0, "effet": "La digue fond dans l'eau. La garde de tous les ennemis tombe ; 16 dégâts à tous. Le héros se soigne de 8 et perd 3 PV. Pose Braise. Si Abîme (consommé) : 9 dégâts à tous, soin de 10.", "ops": [["briseGarde", "tous"], ["deg", "tous", 16], ["soin", "heros", 8], ["prixPV", 3], ["pose", "Braise"], ["reveil", "Abîme", true, [["deg", "tous", 9], ["soin", "heros", 10]]]], "tags": ["Donjon", "Sève", "Forme ultime +7", "Perce-garde", "Dégâts", "Soin", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "De Sabzgarh, il ne reste qu'un toit de brique sur l'eau ; les buffles s'y reposent, et les hommes dorment autour.", "budget": "46,8 (+29,8 si Abîme, soit +64 % ; vérifié au script)"}
]
```

---

## Linn nan Lann, le Bassin des Lames pliées (DON083 · Donjon · Fjord · Glace · celte)

```json
{
 "fiche": "DON083",
 "nom": "Linn nan Lann, le Bassin des Lames pliées",
 "recit": "Au retour d'une guerre, chaque homme de Linn nan Lann monte au bout du fjord, à l'endroit où l'eau reste claire même sous la glace. Il plie son épée sur le genou, deux fois, pour qu'elle ne serve plus, et la jette. On voit le fond d'en haut : des lames tordues par centaines, couchées en éventail, les plus vieilles vertes de rouille, les plus neuves encore grises. Le druide Colm les compte à chaque retour. Il a cessé de compter le jour où il en a vu une remonter le courant, droite.",
 "pal": [
  "L'eau du fjord est noire et épaisse comme de la poix ; les lames ont percé la glace en bouquets rouillés, et rien ne s'y reflète plus.",
  "Une pellicule rousse gagne le bassin ; les épées du fond fleurissent de rouille, et les mains de ceux qui y puisent restent tachées des jours entiers.",
  "Fjord étroit entre des falaises de granit, bassin clair au bout de l'eau, lames pliées visibles au fond, hommes en manteaux de laine sur la berge.",
  "L'eau devient si claire qu'on y voit chaque rivet ; les épées du fond se redressent d'une saison à l'autre, et la glace ne prend plus au-dessus.",
  "Le fjord est clair jusqu'au fond de la mer ; une forêt d'épées droites s'y tient debout, pointe en haut, et les hommes de la berge n'osent plus y boire."
 ],
 "pm": "Corruption",
 "pp": "Pureté"
}
```

### Pôle − Corruption

Progression : la pellicule rousse, la lame qui fleurit, les mains tachées, la poix du fjord, le bouquet de lames, la rouille dans les armures, puis le fjord ne reflète plus rien. Style : la rouille passe sous les gardes (elles tombent, ou les coups les ignorent), et l'ennemi le mieux couvert paie le plus. Prix : les PV du héros, qui puise dans l'eau noire.

```json
[
{"id": "DON083-moins-1", "zone": "DON083", "pole": "-", "palier": 1, "nom": "La pellicule rousse", "cout": 1, "cible": 1, "effet": "La garde de la cible tombe ; elle subit 7 dégâts.", "ops": [["briseGarde", "cible"], ["deg", "cible", 7]], "tags": ["Donjon", "Glace", "Pôle −", "Perce-garde", "Dégâts"], "ambiance": "La pellicule rousse de Linn nan Lann ne flotte pas : elle remonte du fond, par plaques, contre le courant.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON083-moins-2", "zone": "DON083", "pole": "-", "palier": 2, "nom": "La lame qui fleurit", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : 6 dégâts. La cible subit 8 dégâts, sans garde. Le héros perd 2 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 6]]], ["ignoreGarde"], ["deg", "cible", 8], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Sur la plus vieille lame du fond, la rouille a poussé en fleur, et la fleur a des pétales réguliers.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "DON083-moins-3", "zone": "DON083", "pole": "-", "palier": 3, "nom": "Les mains tachées", "cout": 1, "cible": 1, "effet": "La garde de la cible tombe ; elle prend +2 dégâts par coup jusqu'à la fin du combat et subit 5 dégâts.", "ops": [["briseGarde", "cible"], ["vulnerable", "cible", 2], ["deg", "cible", 5]], "tags": ["Donjon", "Glace", "Pôle −", "Perce-garde", "Marque", "Dégâts"], "ambiance": "Ceux qui puisent au bassin ont les mains tachées de roux ; au bout d'une semaine, la tache remonte au coude.", "budget": "14 (cible 15, écart -7 % ; vérifié au script)"},
{"id": "DON083-moins-4", "zone": "DON083", "pole": "-", "palier": 4, "nom": "La poix du fjord", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : elle brûle de 4 pendant 3 tours. La garde de tous les ennemis tombe ; 7 dégâts à tous. Le héros perd 2 PV.", "ops": [["si", "cibleGarde", [["brulure", "cible", 4, 3]]], ["briseGarde", "tous"], ["deg", "tous", 7], ["prixPV", 2]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts dans le temps", "Perce-garde", "Dégâts", "Prix"], "ambiance": "L'eau du fond est devenue épaisse ; une rame qu'on y plante tient debout toute seule jusqu'au soir.", "budget": "26 (cible 28, écart -7 % ; vérifié au script)"},
{"id": "DON083-moins-5", "zone": "DON083", "pole": "-", "palier": 5, "nom": "Le bouquet de lames", "cout": 2, "cible": 1, "effet": "La cible subit 27 dégâts, sans garde, et perd 1 d'attaque. Le héros perd 3 PV.", "ops": [["ignoreGarde"], ["deg", "cible", 27], ["affaiblit", "cible", 1], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Perce-garde", "Dégâts", "Affaiblissement", "Prix"], "ambiance": "Les lames du fond ont percé la glace en bouquets rouillés, et chaque bouquet compte le même nombre de lames.", "budget": "30 (cible 32, écart -6 % ; vérifié au script)"},
{"id": "DON083-moins-6", "zone": "DON083", "pole": "-", "palier": 6, "nom": "La rouille dans les armures", "cout": 2, "cible": 1, "effet": "Si la cible a de la garde : 10 dégâts. La garde de tous les ennemis tombe ; 7 dégâts à tous. La cible prend +3 dégâts par coup. Le héros perd 3 PV.", "ops": [["si", "cibleGarde", [["deg", "cible", 10]]], ["briseGarde", "tous"], ["deg", "tous", 7], ["vulnerable", "cible", 3], ["prixPV", 3]], "tags": ["Donjon", "Glace", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Marque", "Prix"], "ambiance": "Colm a vu la rouille passer d'une lame du fond à la cotte d'un homme penché sur l'eau.", "budget": "33 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "DON083-moins-7", "zone": "DON083", "pole": "-", "palier": 7, "nom": "Le Fjord de poix", "cout": 3, "cible": 1, "effet": "Le fjord ne reflète plus rien. La garde de tous tombe ; la cible subit 26 dégâts sans garde, +1 par coup ; 6 dégâts à tous. Le héros perd 4 PV. Pose Abîme. Si Braise (consommée) : 16 à la cible ; tous brûlent de 2 pendant 3 tours.", "ops": [["briseGarde", "tous"], ["ignoreGarde"], ["deg", "cible", 26], ["vulnerable", "cible", 1], ["deg", "tous", 6], ["prixPV", 4], ["pose", "Abîme"], ["reveil", "Braise", true, [["deg", "cible", 16], ["brulure", "tous", 2, 3]]]], "tags": ["Donjon", "Glace", "Forme ultime −7", "Perce-garde", "Dégâts", "Marque", "Prix", "Pose Abîme", "Réveil Braise"], "ambiance": "Rien ne se reflète plus dans le fjord de Linn nan Lann, pas même la falaise, pas même la lune.", "budget": "47,8 (+29,2 si Braise, soit +61 % ; vérifié au script)"}
]
```

### Pôle + Pureté

Progression : l'eau qui montre le fond, le rivet visible, l'épée qui se redresse, la glace qui ne prend plus, le druide qui compte, les lames droites, puis on voit jusqu'au fond. Style : on pioche beaucoup, on se soigne, et une lame redressée frappe une cible ; plus le héros est blessé, plus l'eau soigne. Prix : l'ennemi se couvre ou se soigne.

```json
[
{"id": "DON083-plus-1", "zone": "DON083", "pole": "+", "palier": 1, "nom": "L'eau qui montre le fond", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes. Le héros se soigne de 2.", "ops": [["pioche", 2], ["soin", "heros", 2]], "tags": ["Donjon", "Glace", "Pôle +", "Pioche", "Soin"], "ambiance": "D'en haut, on voit chaque lame du fond, et aussi, entre les lames, des choses qu'on n'y a pas jetées.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "DON083-plus-2", "zone": "DON083", "pole": "+", "palier": 2, "nom": "Le rivet visible", "cout": 1, "cible": 1, "effet": "Si vous êtes sous la moitié de vos PV : soin de 4. Piochez 2 cartes. La cible subit 5 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["si", "blesse", [["soin", "heros", 4]]], ["pioche", 2], ["deg", "cible", 5], ["ennemiGarde", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Soin", "Pioche", "Dégâts", "Prix"], "ambiance": "L'eau est si claire qu'on lit la marque du forgeron sur chaque rivet ; Colm a reconnu celle de son père.", "budget": "13 (cible 12,5, écart +4 % ; vérifié au script)"},
{"id": "DON083-plus-3", "zone": "DON083", "pole": "+", "palier": 3, "nom": "L'épée qui se redresse", "cout": 1, "cible": 1, "effet": "Piochez 1 carte. La cible subit 8 dégâts. Le héros se soigne de 3.", "ops": [["pioche", 1], ["deg", "cible", 8], ["soin", "heros", 3]], "tags": ["Donjon", "Glace", "Pôle +", "Pioche", "Dégâts", "Soin"], "ambiance": "Une épée pliée deux fois s'est redressée au fond, d'un seul coup, et la poignée tourne vers la berge.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "DON083-plus-4", "zone": "DON083", "pole": "+", "palier": 4, "nom": "La glace qui ne prend plus", "cout": 2, "cible": 0, "effet": "Si vous êtes sous la moitié de vos PV : piochez 1. Piochez 3 cartes. Le héros se soigne de 8 et gagne 6 de garde. Chaque ennemi gagne 1 de garde.", "ops": [["si", "blesse", [["pioche", 1]]], ["pioche", 3], ["soin", "heros", 8], ["garde", "heros", 6], ["ennemiGarde", 1]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Pioche", "Soin", "Garde", "Prix"], "ambiance": "Au-dessus du bassin, la glace ne prend plus, même en hiver, et la neige fond avant de toucher l'eau.", "budget": "24,8 (cible 28, écart -11 % ; vérifié au script)"},
{"id": "DON083-plus-5", "zone": "DON083", "pole": "+", "palier": 5, "nom": "Le druide qui compte", "cout": 2, "cible": 1, "effet": "Piochez 3 cartes. La cible subit 17 dégâts. Le héros se soigne de 6. Chaque ennemi se soigne de 2.", "ops": [["pioche", 3], ["deg", "cible", 17], ["soin", "heros", 6], ["ennemiSoin", 2]], "tags": ["Donjon", "Glace", "Pôle +", "Pioche", "Dégâts", "Soin", "Prix"], "ambiance": "Colm a recommencé à compter les lames ; il en compte une de plus à chaque fois, et ne rajoute rien.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "DON083-plus-6", "zone": "DON083", "pole": "+", "palier": 6, "nom": "Les lames droites", "cout": 2, "cible": 1, "effet": "Si vous êtes sous la moitié de vos PV : soin de 8. Piochez 3 cartes. La cible subit 16 dégâts. Le héros se soigne de 4. Chaque ennemi gagne 2 de garde.", "ops": [["si", "blesse", [["soin", "heros", 8]]], ["pioche", 3], ["deg", "cible", 16], ["soin", "heros", 4], ["ennemiGarde", 2]], "tags": ["Donjon", "Glace", "Pôle +", "Condition", "Soin", "Pioche", "Dégâts", "Prix"], "ambiance": "Les lames droites se tiennent debout au fond, pointe en haut, et elles se rapprochent de la surface.", "budget": "32 (cible 36, écart -11 % ; vérifié au script)"},
{"id": "DON083-plus-7", "zone": "DON083", "pole": "+", "palier": 7, "nom": "Le Fond de la mer", "cout": 3, "cible": 1, "effet": "On voit jusqu'au fond. Piochez 4 cartes ; la cible subit 18 dégâts ; le héros se soigne de 10 et gagne 8 de garde. Chaque ennemi gagne 2 de garde. Pose Givre. Si Sceau (consommé) : piochez 3, soin de 8, 10 dégâts à la cible.", "ops": [["pioche", 4], ["deg", "cible", 18], ["soin", "heros", 10], ["garde", "heros", 8], ["ennemiGarde", 2], ["pose", "Givre"], ["reveil", "Sceau", true, [["pioche", 3], ["soin", "heros", 8], ["deg", "cible", 10]]]], "tags": ["Donjon", "Glace", "Forme ultime +7", "Pioche", "Dégâts", "Soin", "Garde", "Prix", "Pose Givre", "Réveil Sceau"], "ambiance": "Le fjord de Linn nan Lann est clair jusqu'au fond de la mer, et la forêt d'épées y monte lentement.", "budget": "46,4 (+30 si Sceau, soit +65 % ; vérifié au script)"}
]
```

---

## Kār-Tâmti, la Citadelle de l'Appel (CIT035 · Citadelle · Archipel · Eau · mésopotamienne)

```json
{
 "fiche": "CIT035",
 "nom": "Kār-Tâmti, la Citadelle de l'Appel",
 "recit": "À Kār-Tâmti, l'appel se fait au coucher du soleil, sur le quai, face à la mer. Le scribe lit les noms de la garnison sur une tablette crue, et chaque homme répond. L'air salé ramollit l'argile : un nom s'efface par mois, et l'homme qui le portait ne répond plus, puis ne vient plus. Le commandant Nabû-zēr-iddin a fait cuire la tablette au four, pour que plus rien ne s'efface. Depuis, l'appel compte deux cent six noms, et deux cent six voix répondent. La garnison compte cent soixante-neuf hommes.",
 "pal": [
  "La citadelle n'a plus de garnison qu'on puisse nommer ; des hommes sans visage gardent les remparts, et les tablettes ont fondu en boue sur le quai.",
  "Les tablettes crues se ramollissent dans l'air salé ; des soldats oublient leur poste en plein jour, et la boue d'argile coule des niches du scribe.",
  "Citadelle de brique crue sur une île basse, quai de bitume, roseaux et palmiers, garnison alignée au coucher du soleil devant un scribe et sa tablette.",
  "Le four du quai fume chaque soir ; les tablettes cuites s'empilent dans les niches, et l'appel dure jusqu'à la nuit noire, sans un nom manqué.",
  "Les remparts sont couverts de tablettes cuites du sol aux créneaux ; à l'appel, la mer entière répond, voix par voix, longtemps après le dernier nom."
 ],
 "pm": "Oubli",
 "pp": "Mémoire"
}
```

### Pôle − Oubli

Progression : le nom effacé, l'argile qui ramollit, le poste oublié, la boue des niches, les hommes sans visage, la garnison qui ne vient plus, puis la garnison oublie la guerre. Style : l'endurance ; le héros oublie ses blessures (gros soins) derrière une Garde, et une carte lâchée en prix ce tour rend la suivante plus forte. Prix : la défausse au hasard, ce qu'on oublie.

```json
[
{"id": "CIT035-moins-1", "zone": "CIT035", "pole": "-", "palier": 1, "nom": "Le nom effacé", "cout": 1, "cible": 1, "effet": "Le héros se soigne de 7. La cible subit 3 dégâts.", "ops": [["soin", "heros", 7], ["deg", "cible", 3]], "tags": ["Citadelle", "Eau", "Pôle −", "Soin", "Dégâts"], "ambiance": "Le nom effacé de la tablette crue laisse un creux lisse, et l'homme qui le portait sourit sans savoir pourquoi.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "CIT035-moins-2", "zone": "CIT035", "pole": "-", "palier": 2, "nom": "L'argile qui ramollit", "cout": 1, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : soin de 4. Le héros se soigne de 6. La cible subit 4 dégâts.", "ops": [["si", "defausseAPrix", [["soin", "heros", 4]]], ["soin", "heros", 6], ["deg", "cible", 4]], "tags": ["Citadelle", "Eau", "Pôle −", "Condition", "Soin", "Dégâts"], "ambiance": "L'argile ramollit sous le pouce du scribe, et le nom qu'il touche ne revient plus à personne.", "budget": "12 (cible 12,5, écart -4 % ; vérifié au script)"},
{"id": "CIT035-moins-3", "zone": "CIT035", "pole": "-", "palier": 3, "nom": "Le poste oublié", "cout": 1, "cible": 0, "effet": "Le héros se soigne de 10 et gagne 10 de garde. Défaussez 1 carte au hasard.", "ops": [["soin", "heros", 10], ["garde", "heros", 10], ["prixDefausse", 1]], "tags": ["Citadelle", "Eau", "Pôle −", "Soin", "Garde", "Prix"], "ambiance": "Le soldat a oublié son poste en plein jour ; on l'a retrouvé assis sur le quai, guéri d'une vieille blessure.", "budget": "15 (cible 15, écart +0 % ; vérifié au script)"},
{"id": "CIT035-moins-4", "zone": "CIT035", "pole": "-", "palier": 4, "nom": "La boue des niches", "cout": 2, "cible": 0, "effet": "Si une carte a déjà été défaussée en prix ce tour : 8 de garde de plus. Le héros se soigne de 14 et gagne 14 de garde. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["garde", "heros", 8]]], ["soin", "heros", 14], ["garde", "heros", 14], ["prixDefausse", 1]], "tags": ["Citadelle", "Eau", "Pôle −", "Condition", "Garde", "Soin", "Prix"], "ambiance": "La boue d'argile coule des niches du scribe le long du mur, et sèche en formes de mains ouvertes.", "budget": "25,4 (cible 28, écart -9 % ; vérifié au script)"},
{"id": "CIT035-moins-5", "zone": "CIT035", "pole": "-", "palier": 5, "nom": "Les hommes sans visage", "cout": 2, "cible": 0, "effet": "Un soldat sans nom prend un poste : 18 PV, frappe 3. Le héros se soigne de 20. Défaussez 1 carte au hasard.", "ops": [["invoque", "Soldat sans nom", 18, 3], ["soin", "heros", 20], ["prixDefausse", 1]], "tags": ["Citadelle", "Eau", "Pôle −", "Invocation", "Soin", "Prix"], "ambiance": "Les hommes sans visage gardent les remparts de Kār-Tâmti sans relève, et personne ne sait leur nom à appeler.", "budget": "30,5 (cible 32, écart -5 % ; vérifié au script)"},
{"id": "CIT035-moins-6", "zone": "CIT035", "pole": "-", "palier": 6, "nom": "La garnison qui ne vient plus", "cout": 2, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : soin de 8. Le héros se soigne de 18 et gagne 14 de garde. La cible perd 1 d'attaque. Défaussez 1 carte au hasard.", "ops": [["si", "defausseAPrix", [["soin", "heros", 8]]], ["soin", "heros", 18], ["garde", "heros", 14], ["affaiblit", "cible", 1], ["prixDefausse", 1]], "tags": ["Citadelle", "Eau", "Pôle −", "Condition", "Soin", "Garde", "Affaiblissement", "Prix"], "ambiance": "À l'appel, il manque chaque soir un homme de plus, et les présents ont meilleure mine qu'au printemps.", "budget": "33,2 (cible 36, écart -8 % ; vérifié au script)"},
{"id": "CIT035-moins-7", "zone": "CIT035", "pole": "-", "palier": 7, "nom": "Le Quai sans noms", "cout": 3, "cible": 0, "effet": "La garnison oublie la guerre. Le héros se soigne de 20 et gagne 20 de garde ; alliés soignés de 6 ; tous les ennemis −1 d'attaque. Défaussez 2 cartes. Pose Sang. Si Givre (consommé) : soin de 12, +12 de garde, tous −1 d'attaque.", "ops": [["soin", "heros", 20], ["garde", "heros", 20], ["soin", "allies", 6], ["affaiblit", "tous", 1], ["prixDefausse", 2], ["pose", "Sang"], ["reveil", "Givre", true, [["soin", "heros", 12], ["garde", "heros", 12], ["affaiblit", "tous", 1]]]], "tags": ["Citadelle", "Eau", "Forme ultime −7", "Soin", "Garde", "Affaiblissement", "Prix", "Pose Sang", "Réveil Givre"], "ambiance": "Sur le quai de Kār-Tâmti, les tablettes ont fondu en boue, et la garnison regarde la mer sans rien attendre.", "budget": "45,6 (+28,2 si Givre, soit +62 % ; vérifié au script)"}
]
```

### Pôle + Mémoire

Progression : la tablette cuite, le soldat appelé, le four du quai, les niches pleines, l'appel jusqu'à la nuit, les voix sans soldats, puis la mer répond à l'appel. Style : chaque coup reçu est rendu (riposte), des soldats de l'appel tiennent le terrain, et une Garde déjà levée garde mieux la rancune. Prix : les PV du héros.

```json
[
{"id": "CIT035-plus-1", "zone": "CIT035", "pole": "+", "palier": 1, "nom": "La tablette cuite", "cout": 1, "cible": 0, "effet": "Riposte 3 jusqu'au prochain tour. Le héros gagne 5 de garde.", "ops": [["riposte", 3], ["garde", "heros", 5]], "tags": ["Citadelle", "Eau", "Pôle +", "Riposte", "Garde"], "ambiance": "La tablette sort du four du quai plus dure que la brique, et le nom gravé dessus ne s'effacera plus.", "budget": "10 (cible 10, écart +0 % ; vérifié au script)"},
{"id": "CIT035-plus-2", "zone": "CIT035", "pole": "+", "palier": 2, "nom": "Le soldat appelé", "cout": 1, "cible": 0, "effet": "Un soldat de l'appel répond présent : 10 PV, frappe 3. Riposte 2 jusqu'au prochain tour. Le héros perd 1 PV.", "ops": [["invoque", "Soldat de l'appel", 10, 3], ["riposte", 2], ["prixPV", 1]], "tags": ["Citadelle", "Eau", "Pôle +", "Invocation", "Riposte", "Prix"], "ambiance": "Le soldat répond à son nom d'une voix claire, et il répond aussi, plus bas, au nom d'à côté.", "budget": "12,5 (cible 12,5, écart +0 % ; vérifié au script)"},
{"id": "CIT035-plus-3", "zone": "CIT035", "pole": "+", "palier": 3, "nom": "Le four du quai", "cout": 1, "cible": 0, "effet": "Si votre Garde est déjà levée : riposte 3 de plus. Riposte 3 jusqu'au prochain tour. Le héros gagne 6 de garde.", "ops": [["si", "garde", [["riposte", 3]]], ["riposte", 3], ["garde", "heros", 6]], "tags": ["Citadelle", "Eau", "Pôle +", "Condition", "Riposte", "Garde"], "ambiance": "Le four du quai cuit les tablettes chaque soir ; on y a cuit aussi, une fois, la tablette d'un mort.", "budget": "13,8 (cible 15, écart -8 % ; vérifié au script)"},
{"id": "CIT035-plus-4", "zone": "CIT035", "pole": "+", "palier": 4, "nom": "Les niches pleines", "cout": 2, "cible": 0, "effet": "Des archers du quai prennent leur poste : 14 PV, frappent 5. Riposte 4 jusqu'au prochain tour. Vos alliés gagnent 4 de garde. Le héros perd 2 PV.", "ops": [["invoque", "Archers du quai", 14, 5], ["riposte", 4], ["garde", "allies", 4], ["prixPV", 2]], "tags": ["Citadelle", "Eau", "Pôle +", "Invocation", "Riposte", "Garde", "Prix"], "ambiance": "Les niches du scribe sont pleines de tablettes cuites, et l'on a commencé à en sceller dans les remparts.", "budget": "25,3 (cible 28, écart -10 % ; vérifié au script)"},
{"id": "CIT035-plus-5", "zone": "CIT035", "pole": "+", "palier": 5, "nom": "L'appel jusqu'à la nuit", "cout": 2, "cible": 1, "effet": "Si votre Garde est déjà levée : riposte 4 de plus. Riposte 6 jusqu'au prochain tour. Le héros gagne 12 de garde. La cible subit 7 dégâts. Le héros perd 2 PV.", "ops": [["si", "garde", [["riposte", 4]]], ["riposte", 6], ["garde", "heros", 12], ["deg", "cible", 7], ["prixPV", 2]], "tags": ["Citadelle", "Eau", "Pôle +", "Condition", "Riposte", "Garde", "Dégâts", "Prix"], "ambiance": "L'appel dure jusqu'à la nuit noire, et le scribe lit sans tablette, les yeux fermés, sans manquer un nom.", "budget": "30,6 (cible 32, écart -4 % ; vérifié au script)"},
{"id": "CIT035-plus-6", "zone": "CIT035", "pole": "+", "palier": 6, "nom": "Les voix sans soldats", "cout": 2, "cible": 0, "effet": "Si votre Garde est déjà levée : vos alliés gagnent 6 de garde. Une garnison de l'appel se range : 22 PV, frappe 6. Riposte 6 jusqu'au prochain tour. Le héros perd 3 PV.", "ops": [["si", "garde", [["garde", "allies", 6]]], ["invoque", "Garnison de l'appel", 22, 6], ["riposte", 6], ["prixPV", 3]], "tags": ["Citadelle", "Eau", "Pôle +", "Condition", "Garde", "Invocation", "Riposte", "Prix"], "ambiance": "Deux cent six voix répondent à l'appel ; le commandant a fait aligner ses hommes, et les a comptés deux fois.", "budget": "32,6 (cible 36, écart -9 % ; vérifié au script)"},
{"id": "CIT035-plus-7", "zone": "CIT035", "pole": "+", "palier": 7, "nom": "L'Appel de la mer", "cout": 3, "cible": 0, "effet": "La mer répond à l'appel. Des voix de la mer se lèvent (26 PV, frappent 6) ; riposte 8 ; héros +14 de garde. Le héros perd 3 PV. Pose Sang. Si Braise (consommée) : riposte 6, un soldat de l'appel (10 PV, frappe 3), +10 de garde.", "ops": [["invoque", "Voix de la mer", 26, 6], ["riposte", 8], ["garde", "heros", 14], ["prixPV", 3], ["pose", "Sang"], ["reveil", "Braise", true, [["riposte", 6], ["invoque", "Soldat de l'appel", 10, 3], ["garde", "heros", 10]]]], "tags": ["Citadelle", "Eau", "Forme ultime +7", "Invocation", "Riposte", "Garde", "Prix", "Pose Sang", "Réveil Braise"], "ambiance": "À l'appel de Kār-Tâmti, la mer entière répond, voix par voix, et ne s'arrête pas au dernier nom.", "budget": "46,2 (+29,5 si Braise, soit +64 % ; vérifié au script)"}
]
```

---

## Ressources

### Les Kariz de Sangdaran (RES006 · Haute montagne, Pierre, perse)

```json
{
 "fiche": "RES006",
 "nom": "Les Kariz de Sangdaran",
 "recit": "Le kariz de Sangdaran descend sous la montagne de puits en puits. Le puisatier Gholam descend au treuil, creuse à la lampe et renvoie les déblais au seau de cuir. Il chante en bas, pour qu'on sache qu'il respire. Parfois, plus loin dans la galerie, quelqu'un chante avec lui.",
 "pal": [
  "Pente nue de pierre grise, chapelet de cratères de déblais qui descend vers l'oasis, treuils de bois au-dessus des puits, seaux de cuir qui remontent.",
  "L'eau court plus fort dans la galerie ; les seaux remontent une terre noire et grasse, et l'on entend sous les puits un courant venu d'ailleurs."
 ]
}
```

### Les Fourneaux à vent de Wayra-Qaqa (RES018 · Falaise côtière, Vent, inca)

```json
{
 "fiche": "RES018",
 "nom": "Les Fourneaux à vent de Wayra-Qaqa",
 "recit": "Au bord de la falaise de Wayra-Qaqa, les fondeurs chargent de minerai et de charbon des fourneaux d'argile percés de trous, et laissent le vent de mer les attiser. Toute la nuit, la falaise brille de petits feux. Au matin, Sumaq brise chaque fourneau et ramasse l'argent au fond.",
 "pal": [
  "Falaise battue de vent au-dessus des vagues, rangées de petits fourneaux d'argile percés de trous, fondeurs accroupis qui chargent le charbon.",
  "La nuit, la falaise brille d'un trait de feux continu ; le vent hurle dans les trous des fourneaux, et l'argent coule plus vite qu'on ne le ramasse."
 ]
}
```

### La Pierre-de-fer de Saviksuaq (RES040 · Haute montagne, Pierre, inuit)

```json
{
 "fiche": "RES040",
 "nom": "La Pierre-de-fer de Saviksuaq",
 "recit": "Sur le plateau de Saviksuaq, une pierre de fer tombée du ciel dort dans la neige. Les chasseurs y montent avec des percuteurs de basalte et en détachent des écailles pour leurs harpons. La pierre est chaude au toucher, même en hiver, et chaque année un peu plus enfoncée.",
 "pal": [
  "Plateau de neige sous un ciel bas, masse sombre à demi enfouie, cercle de percuteurs de basalte abandonnés autour, chasseurs à genoux qui frappent.",
  "La pierre est polie là où l'on frappe, et la neige fond en cercle autour d'elle ; les écailles se détachent au premier coup et tintent en tombant."
 ]
}
```

### Les Crocus de Zafarandasht (RES096 · Steppe, Vent, perse)

```json
{
 "fiche": "RES096",
 "nom": "Les Crocus de Zafarandasht",
 "recit": "Sur la steppe de Zafarandasht, les crocus fleurissent en une nuit d'automne et fanent avant midi. Les cueilleuses partent avant l'aube, courbées, et vident leurs paniers sur des nappes. Parvin sépare à l'ongle les fils rouges de chaque fleur. Le vent emporte les pétales jusqu'au village.",
 "pal": [
  "Steppe grise sous le vent, champ de crocus mauves au ras du sol, cueilleuses courbées avant l'aube, nappes couvertes de fleurs et de paniers.",
  "Les crocus percent la steppe en une nuit jusqu'à l'horizon ; les nappes débordent, et le vent pousse les pétales en congères mauves contre les murs."
 ]
}
```

### Les Meules de Kvernhammar (RES346 · Haute montagne, Pierre, nordique)

```json
{
 "fiche": "RES346",
 "nom": "Les Meules de Kvernhammar",
 "recit": "À Kvernhammar, on taille les meules dans la paroi même, au coin de fer. Puis deux hommes passent une perche dans l'œil de la meule et la font rouler jusqu'à la vallée, en la retenant à chaque lacet. Une meule qui échappe, dit-on, ne s'arrête qu'à la mer.",
 "pal": [
  "Paroi grise marquée de cercles là où l'on a taillé les meules, meules dressées sur la pente comme des pièces, hommes qui les retiennent à la perche.",
  "Les meules se détachent de la paroi presque d'elles-mêmes, rondes et lisses ; elles descendent les lacets en file, et la vallée en est pavée jusqu'au moulin."
 ]
}
```

### Les Tours de Prasat Prachiev (RES260 · Cité en ruines, Pierre, khmère)

```json
{
 "fiche": "RES260",
 "nom": "Les Tours de Prasat Prachiev",
 "recit": "Au crépuscule, quand les chauves-souris sortent des tours de Prasat Prachiev en un long ruban noir, les balayeuses entrent. Elles poussent le guano au balai de palme et le portent aux rizières. Srey Leak travaille sans lampe : elle dit que les chauves-souris reviennent plus vite quand elles la voient.",
 "pal": [
  "Tours de grès effondrées sous les fromagers, ruban noir de chauves-souris qui sort d'une tour au crépuscule, femmes aux balais de palme sur le seuil.",
  "Le guano monte en dunes sombres dans les sanctuaires ; les paniers débordent, et le ruban de chauves-souris met maintenant une heure entière à sortir."
 ]
}
```

### Les Calebasses de Wenchit-Kuba (RES242 · Forêt de champignons géants, Sève, éthiopienne)

```json
{
 "fiche": "RES242",
 "nom": "Les Calebasses de Wenchit-Kuba",
 "recit": "Dans la forêt de Wenchit-Kuba, Almaz racle le dessous des grands chapeaux avec une cuiller de corne, et un lait épais vient sous la cuiller ; elle le verse dans une calebasse. Il a le goût du lait de vache, exactement, et personne ne trait plus les vaches.",
 "pal": [
  "Futaie de champignons géants aux lames brunes ; des cueilleuses en châles blancs raclent le dessous des chapeaux à la cuiller de corne.",
  "Le lait perle des lames avant même qu'on les racle ; les chapeaux s'inclinent vers les cueilleuses quand elles approchent."
 ]
}
```

### Les Loutres de Jaldiyar (RES103 · Archipel, Eau, moghole)

```json
{
 "fiche": "RES103",
 "nom": "Les Loutres de Jaldiyar",
 "recit": "Entre les îles de Jaldiyar, les pêcheurs mènent leurs loutres en laisse, au bout d'une corde de jute. Les loutres plongent, rabattent le poisson vers le filet tendu entre deux barques, et reviennent à la voix. Rahmat parle à la sienne à voix basse, et la nourrit avant ses enfants.",
 "pal": [
  "Chenaux bruns entre des îles basses, barques plates par paires, filets tendus entre elles, loutres en laisse qui plongent et remontent.",
  "L'eau bouillonne de poisson entre les barques ; les loutres rabattent sans qu'on les lâche, et des loutres sauvages viennent se mettre en laisse."
 ]
}
```

### Les Magnaneries de Luntai-Ye (RES016 · Oasis, Sève, chinoise impériale)

```json
{
 "fiche": "RES016",
 "nom": "Les Magnaneries de Luntai-Ye",
 "recit": "À Luntai-Ye, les vers à soie mangent jour et nuit dans des maisons de brique où passe le vent du désert. Li Shufen les nourrit de feuilles de mûrier, puis plonge les cocons dans l'eau bouillante et dévide le fil d'un seul brin. Certains cocons sont chauds avant d'y entrer.",
 "pal": [
  "Mûriers taillés au pied des dunes, maisons de brique ajourées ; dedans, des plateaux de vers, et une femme qui dévide un cocon au-dessus d'une bassine fumante.",
  "Les maisons bruissent jour et nuit du bruit des vers qui mangent ; les fils d'or pâle sèchent aux fenêtres, et les mûriers repoussent dans la nuit."
 ]
}
```

### Les Rets de Khenet-Ouret (RES084 · Archipel, Eau, égyptienne)

```json
{
 "fiche": "RES084",
 "nom": "Les Rets de Khenet-Ouret",
 "recit": "À l'automne, les cailles qui traversent la mer tombent épuisées sur les grèves de Khenet-Ouret. Les gens des îles tendent des rets le long des plages et ramassent au matin les oiseaux pris. Nebet en sale des jarres entières. Elle relâche toujours la plus maigre, vers le sud.",
 "pal": [
  "Grèves claires entre des îles basses, haies de filets sur des perches de roseau le long de l'eau, cailles qui tombent du ciel par vols entiers.",
  "Les rets plient sous les oiseaux avant le jour ; les cailles tombent si dru qu'on les entend frapper l'eau comme une averse, et les jarres manquent."
 ]
}
```

### Les Échelles de Yanchuan-Bi (RES282 · Falaise côtière, Vent, chinoise impériale)

```json
{
 "fiche": "RES282",
 "nom": "Les Échelles de Yanchuan-Bi",
 "recit": "Sur la falaise de Yanchuan-Bi, les cueilleurs montent aux échelles de bambou plaquées contre la roche et décollent à la spatule les nids de salanganes, faits de salive séchée. Le préfet les achète au poids. Wang Erlang laisse toujours le nid le plus haut, pour que les oiseaux reviennent.",
 "pal": [
  "Falaise grise au-dessus d'une mer grise, échelles de bambou plaquées contre la paroi, cueilleurs suspendus, nuées de salanganes qui crient.",
  "Les nids se collent par rangées serrées sous chaque surplomb ; les échelles n'y suffisent plus, et les salanganes bâtissent sur les barreaux mêmes."
 ]
}
```

### Les Vignes-corbeilles d'Akrotéphra (RES034 · Volcan, Feu, grecque)

```json
{
 "fiche": "RES034",
 "nom": "Les Vignes-corbeilles d'Akrotéphra",
 "recit": "Sur les pentes de cendre d'Akrotéphra, le vent arracherait tout ce qui pousse droit. Alors Stavros tresse ses vignes en corbeilles, au ras du sol, en enroulant chaque sarment sur lui-même. Le raisin mûrit au creux, à l'abri. Les plus vieilles corbeilles sont larges comme des roues de char.",
 "pal": [
  "Pente de cendre noire sous le volcan, vignes tressées en corbeilles au ras du sol, vignerons à genoux qui enroulent les sarments contre le vent.",
  "Les corbeilles débordent de grappes au creux de la cendre chaude ; la vendange se fait à quatre pattes, et le vin sent la pierre brûlée."
 ]
}
```

### Les Nasses à nuage de Motu-Haupō (RES241 · Iles flottantes, Vent, polynésienne)

```json
{
 "fiche": "RES241",
 "nom": "Les Nasses à nuage de Motu-Haupō",
 "recit": "Sur Motu-Haupō, il ne pleut jamais : la pluie passe en dessous. Les pêcheurs d'eau descendent des nasses de pandanus au bout de longues cordes, dans le nuage qui frôle le ventre de l'île, et les remontent ruisselantes. Teura sait, au poids de la corde, si le nuage est gras.",
 "pal": [
  "Île flottante au-dessus d'une mer de nuages, cordes de coco qui pendent comme des racines, pêcheurs qui remontent des nasses ruisselantes.",
  "Le nuage colle au ventre de l'île ; les nasses remontent pleines à déborder, et l'eau qui en coule fait pousser des fougères le long des cordes."
 ]
}
```

### Les Rideaux de Kasamori (RES233 · Forêt de champignons géants, Sève, japonaise féodale)

```json
{
 "fiche": "RES233",
 "nom": "Les Rideaux de Kasamori",
 "recit": "Au village de Kasamori, sous les grands chapeaux, on tranche les champignons tombés en lamelles épaisses et on les enfile sur des fils de paille. Les rideaux pendent sous chaque auvent jusqu'aux premières neiges. O-Tsuru les retourne chaque matin d'un geste du poignet, sans les regarder.",
 "pal": [
  "Village de bois sous des champignons géants, rideaux de tranches pâles pendus sous les auvents, femmes qui enfilent les lamelles sur des fils de paille.",
  "Les rideaux touchent le sol sous chaque auvent ; les tranches sèchent en une nuit, et le village entier sent le sous-bois après la pluie."
 ]
}
```

### La Carrière de Sangsafid (RES127 · Haute montagne, Pierre, moghole)

```json
{
 "fiche": "RES127",
 "nom": "La Carrière de Sangsafid",
 "recit": "À Sangsafid, on ne casse pas le marbre : on le scie. Deux hommes tirent un fil de fer, et un enfant verse du sable et de l'eau dans la saignée. Un bloc demande une saison. Ustad Karim écoute le fil, et sait avant tous quand il touche une veine.",
 "pal": [
  "Gradins de marbre blanc taillés dans la montagne, scieurs qui tirent le fil par paires, enfants qui versent le sable, filet d'eau laiteuse qui descend.",
  "Les saignées s'ouvrent plus vite qu'on ne tire ; les blocs se détachent nets, et l'eau laiteuse de la carrière blanchit le torrent jusqu'à la plaine."
 ]
}
```

### Les Vasques d'Ana-Kōura (RES268 · Cavernes cristallines, Pierre, polynésienne)

```json
{
 "fiche": "RES268",
 "nom": "Les Vasques d'Ana-Kōura",
 "recit": "Dans la grotte d'Ana-Kōura, les vasques sont si claires qu'on ne voit l'eau qu'en y mettant la main. Les pêcheuses y descendent à la torche et prennent à l'épuisette les petites crevettes rouges qui vivent au fond. Hina les compte par poignées dans une coque de noix.",
 "pal": [
  "Grotte de cristaux pâles, vasques d'eau claire au sol, points rouges qui bougent au fond, pêcheuses à la torche penchées avec des épuisettes.",
  "Les vasques grouillent de rouge sous la flamme ; les crevettes montent d'elles-mêmes dans les épuisettes, et l'eau monte d'un doigt quand on s'en va."
 ]
}
```
