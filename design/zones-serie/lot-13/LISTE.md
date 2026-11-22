# Lot 13, le dernier : 42 zones à cartes (20 Antres, 16 Assemblées, 4 Donjons, 2 Citadelles)

Toutes les Ressources sont écrites : ce lot n'a que des zones à cartes, onze pour A et B, dix pour C et D. Ce sont les 42 dernières zones posées : après lui, toute la mosaïque est jouable.

Colonnes : identifiant · type · biome · mana · culture d'inspiration · pôle − / pôle +

Dernier lot, les couples restants se répètent : un même couple de mots de pôle peut servir jusqu'à trois ou quatre fois dans ce lot, mais jamais deux fois chez le même conteur. Sur un couple partagé, le second inscrit compare le geste du ±7 (leçon 3 du lot 12) et change le sien.

## Conteur A, le Chroniqueur amer
- CIT020 · Citadelle · Marais · Sève · Perse · Ruine / Abondance
- DON040 · Donjon · Désert de sel · Pierre · Chinoise impériale · Vide / Étoiles
- ASS151 · Assemblée · Oasis · Sève · Inca · Abysse / Ciel
- ASS186 · Assemblée · Savane · Feu · Polynésienne · Poison / Nectar
- ASS185 · Assemblée · Iles flottantes · Vent · Japonaise féodale · Tempête / Calme
- ASS194 · Assemblée · Canyon · Feu · Mongole · Exil / Foyer
- ANT096 · Antre · Lande · Vent · Gothique · Mensonge / Vérité
- ANT194 · Antre · Archipel · Eau · Inuit · Pierre / Cristal
- ANT051 · Antre · Volcan · Feu · Grecque · Ombre / Lumière
- ANT109 · Antre · Lande · Vent · Moghole · Fer / Bois
- ANT249 · Antre · Toundra · Glace · Slave · Pourriture / Croissance

## Conteur B, l'Explorateur marchand
- DON090 · Donjon · Falaise côtière · Vent · Polynésienne · Vide / Étoiles
- ASS130 · Assemblée · Mangrove · Eau · Mongole · Fer / Bois
- ASS013 · Assemblée · Haute montagne · Pierre · Aztèque · Famine / Festin
- ASS184 · Assemblée · Désert de sel · Pierre · Nordique · Pierre / Cristal
- ASS192 · Assemblée · Oasis · Sève · Vénitienne · Chaos / Ordre
- ASS193 · Assemblée · Savane · Feu · Celte · Cendre / Floraison
- ANT078 · Antre · Forêt boréale · Glace · Maya · Ombre / Lumière
- ANT191 · Antre · Cité en ruines · Pierre · Aztèque · Tempête / Calme
- ANT226 · Antre · Récif · Eau · Inuit · Ruine / Abondance
- ANT112 · Antre · Désert de sel · Pierre · Inuit · Os / Corail
- ANT248 · Antre · Savane · Feu · Inca · Folie / Raison

## Conteur C, le Sournois
- DON050 · Donjon · Désert de sable · Feu · Moghole · Abysse / Ciel
- ASS187 · Assemblée · Glacier · Glace · Mésopotamienne · Tyrannie / Liberté
- ASS189 · Assemblée · Glacier · Glace · Byzantine · Oubli / Mémoire
- ASS190 · Assemblée · Marais · Sève · Grecque · Poison / Nectar
- ASS191 · Assemblée · Cité en ruines · Pierre · Mongole · Pierre / Cristal
- ANT117 · Antre · Volcan · Feu · Mésopotamienne · Tempête / Calme
- ANT035 · Antre · Forêt boréale · Glace · Gothique · Vide / Étoiles
- ANT081 · Antre · Oasis · Sève · Mésopotamienne · Ruine / Abondance
- ANT247 · Antre · Savane · Feu · Slave · Folie / Raison
- ANT119 · Antre · Haute montagne · Pierre · Perse · Famine / Festin

## Conteur D, le Lovecraftien
- CIT042 · Citadelle · Delta fluvial · Eau · Vénitienne · Mensonge / Vérité
- DON111 · Donjon · Forêt boréale · Glace · Mésopotamienne · Poison / Nectar
- ASS183 · Assemblée · Lande · Vent · Aztèque · Cendre / Floraison
- ASS188 · Assemblée · Savane · Feu · Slave · Oubli / Mémoire
- ASS195 · Assemblée · Fjord · Glace · Mongole · Mort / Vie
- ANT171 · Antre · Iles flottantes · Vent · Celte · Silence / Chant
- ANT039 · Antre · Désert de sel · Pierre · Japonaise féodale · Vide / Étoiles
- ANT218 · Antre · Désert de sable · Feu · Byzantine · Tempête / Calme
- ANT139 · Antre · Savane · Feu · Andalouse · Nuit / Aurore
- ANT032 · Antre · Canyon · Feu · Khmère · Pierre / Cristal

## Places des familles (calculées au script)

Calcul du critique, sur les cartes des lots 1 à 12 (une famille est principale sur un pôle quand elle tient 5 cartes ou plus, l'écho 4). Une famille n'est **libre** sur un mot que si elle n'y a jamais été principale. Contraintes du lot : 6 pôles au plus par famille (2 par conteur), 2 pôles au plus par place rare (1 par conteur), pas de famille principale commune aux deux pôles d'une zone, et sur un mot pris par plusieurs conteurs du lot, une famille ne sert qu'une fois (une seule vocation par mot, pioche d'Assemblée comprise).

Résultats (couplage maximal, vérifié par une borne de flot) :

- **Seul sur ses mots**, chaque conteur tiendrait : A 12 places libres, B 15, C 17, D 14.
- **Ensemble**, les mots partagés (Vide / Étoiles, Pierre / Cristal et Tempête / Calme quatre fois, Ruine / Abondance et Poison / Nectar trois fois) ne laissent que **39 places libres** au lot. C'est le maximum, pas un choix.
- Avec les vocations (13) et 3 reprises par conteur (12), **64 pôles sur 84** ont une famille principale ou une vocation. C'est aussi le maximum : aucune répartition n'en couvre 65 sous ces règles.
- Les 20 autres pôles prennent une colonne. Comme 4 colonnes par conteur n'en couvrent que 16, **4 places sont perdues** au lot, une par conteur, déclarées ici.

| Conteur | Pôles | Places libres | Vocations | Reprises | Colonnes | Place perdue |
|---|---|---|---|---|---|---|
| A | 22 | 10 | 4 | 3 | 4 | 1 |
| B | 22 | 9 | 5 | 3 | 4 | 1 |
| C | 20 | 10 | 2 | 3 | 4 | 1 |
| D | 20 | 10 | 2 | 3 | 4 | 1 |

La part est proportionnelle aux pôles : 17 pôles couverts pour A et B (22 pôles), 15 pour C et D (20 pôles). B a une place libre de moins mais la plus grosse part de vocations.

### Conteur A

- CIT020 - Ruine → **marque**
- CIT020 + Abondance → **place perdue, déclarée** (pôle sans famille principale : il s'écrit avec une colonne, hors du compte des 4)
- DON040 - Vide → **garde des alliés**
- DON040 + Étoiles → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS151 - Abysse → **vocation : pioche d'Assemblée**, 2e emploi (avant : D ASS102 (lot 11))
- ASS151 + Ciel → **soin des alliés**
- ASS186 - Poison → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS186 + Nectar → **hésitation** (place rare)
- ASS185 - Tempête → **soin des alliés**
- ASS185 + Calme → **reprise : riposte**, 2e emploi (origine : D ANT038, lot 5)
- ASS194 - Exil → **vocation : pioche d'Assemblée**, 3e emploi (avant : D ASS068 (lot 5), B ASS037 (lot 12))
- ASS194 + Foyer → **reprise : affaiblissement**, 2e emploi (origine : C CIT036, lot 3)
- ANT096 - Mensonge → **reprise : mana**, 2e emploi (origine : B ASS051, lot 8)
- ANT096 + Vérité → **vol de vie** (place rare)
- ANT194 - Pierre → **marque**
- ANT194 + Cristal → **exil**
- ANT051 - Ombre → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT051 + Lumière → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT109 - Fer → **coups au hasard** (place rare)
- ANT109 + Bois → **vocation : invocations**, 3e emploi (avant : B DON003 (lot 3), C ANT084 (lot 7))
- ANT249 - Pourriture → **vocation : invocations**, 3e emploi (avant : C ANT106 (lot 5), B ANT207 (lot 10))
- ANT249 + Croissance → **écho** (place rare, 4 cartes, au premier niveau)

Reprises permises (3, désignées) : Calme / riposte (après D ANT038, lot 5) ; Foyer / affaiblissement (après C CIT036, lot 3) ; Mensonge / mana (après B ASS051, lot 8).
Places rares : hésitation (ASS186 +) ; vol de vie (ANT096 +) ; coups au hasard (ANT109 -) ; écho (ANT249 +).

### Conteur B

- DON090 - Vide → **soin des alliés**
- DON090 + Étoiles → **reprise : marque**, 2e emploi (origine : C ANT083, lot 7)
- ASS130 - Fer → **reprise : marque**, 2e emploi (origine : C ANT011, lot 8)
- ASS130 + Bois → **exil**
- ASS013 - Famine → **soin du héros**
- ASS013 + Festin → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS184 - Pierre → **vocation : pioche d'Assemblée**, 2e emploi (avant : D ASS180 (lot 8))
- ASS184 + Cristal → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS192 - Chaos → **place perdue, déclarée** (pôle sans famille principale : il s'écrit avec une colonne, hors du compte des 4)
- ASS192 + Ordre → **reprise : brûlure**, 2e emploi (origine : D ANT074, lot 6)
- ASS193 - Cendre → **soin du héros**
- ASS193 + Floraison → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT078 - Ombre → **enchaînement** (place rare)
- ANT078 + Lumière → **vocation : invocations**, 3e emploi (avant : A CIT008 (lot 5), D ANT014 (lot 12))
- ANT191 - Tempête → **mana**
- ANT191 + Calme → **vocation : invocations**, 3e emploi (avant : A ANT093 (lot 5), D ANT057 (lot 12))
- ANT226 - Ruine → **garde des alliés**
- ANT226 + Abondance → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT112 - Os → **vocation : invocations**, 3e emploi (avant : C CIT003 (lot 4), D ANT095 (lot 4))
- ANT112 + Corail → **exil**
- ANT248 - Folie → **garde du héros**
- ANT248 + Raison → **vocation : invocations**, 3e emploi (avant : A ANT053 (lot 3), C ANT101 (lot 5))

Reprises permises (3, désignées) : Étoiles / marque (après C ANT083, lot 7) ; Fer / marque (après C ANT011, lot 8) ; Ordre / brûlure (après D ANT074, lot 6).
Places rares : enchaînement (ANT078 -).

### Conteur C

- DON050 - Abysse → **reprise : affaiblissement**, 2e emploi (origine : D ANT045, lot 1)
- DON050 + Ciel → **perce-garde**
- ASS187 - Tyrannie → **soin du héros**
- ASS187 + Liberté → **affaiblissement**
- ASS189 - Oubli → **pioche** (première pioche d'Assemblée du mot : compte aussi comme vocation)
- ASS189 + Mémoire → **mana**
- ASS190 - Poison → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS190 + Nectar → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ASS191 - Pierre → **reprise : garde du héros**, 2e emploi (origine : D ASS098, lot 4)
- ASS191 + Cristal → **vocation : pioche d'Assemblée**, 2e emploi (avant : D ASS098 (lot 4))
- ANT117 - Tempête → **vocation : invocations**, 3e emploi (avant : A ANT093 (lot 5), B ANT241 (lot 8))
- ANT117 + Calme → **place perdue, déclarée** (pôle sans famille principale : il s'écrit avec une colonne, hors du compte des 4)
- ANT035 - Vide → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT035 + Étoiles → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT081 - Ruine → **soin du héros**
- ANT081 + Abondance → **hésitation** (place rare)
- ANT247 - Folie → **exil**
- ANT247 + Raison → **enchaînement** (place rare)
- ANT119 - Famine → **mana**
- ANT119 + Festin → **reprise : riposte**, 2e emploi (origine : A CIT033, lot 9)

Reprises permises (3, désignées) : Abysse / affaiblissement (après D ANT045, lot 1) ; Pierre / garde du héros (après D ASS098, lot 4) ; Festin / riposte (après A CIT033, lot 9).
Places rares : hésitation (ANT081 +) ; enchaînement (ANT247 +).

### Conteur D

- CIT042 - Mensonge → **coups au hasard** (place rare)
- CIT042 + Vérité → **reprise : affaiblissement**, 2e emploi (origine : C ANT103, lot 7)
- DON111 - Poison → **reprise : marque**, 2e emploi (origine : C ASS061, lot 5)
- DON111 + Nectar → **place perdue, déclarée** (pôle sans famille principale : il s'écrit avec une colonne, hors du compte des 4)
- ASS183 - Cendre → **exil**
- ASS183 + Floraison → **vocation : pioche d'Assemblée**, 3e emploi (avant : A ASS070 (lot 2), C ASS149 (lot 12))
- ASS188 - Oubli → **soin des alliés**
- ASS188 + Mémoire → **brûlure**
- ASS195 - Mort → **mana**
- ASS195 + Vie → **perce-garde**
- ANT171 - Silence → **reprise : affaiblissement**, 2e emploi (origine : C ASS121, lot 4)
- ANT171 + Chant → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT039 - Vide → **vocation : invocations**, 3e emploi (avant : A ANT190 (lot 4), C ANT007 (lot 4))
- ANT039 + Étoiles → **écho** (place rare, 4 cartes, au premier niveau)
- ANT218 - Tempête → **exil**
- ANT218 + Calme → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT139 - Nuit → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT139 + Aurore → colonne (vocation / colonne au choix, mais plus aucune vocation ne reste pour ce pôle)
- ANT032 - Pierre → **vol de vie** (place rare)
- ANT032 + Cristal → **soin du héros**

Reprises permises (3, désignées) : Vérité / affaiblissement (après C ANT103, lot 7) ; Poison / marque (après C ASS061, lot 5) ; Silence / affaiblissement (après C ASS121, lot 4).
Places rares : coups au hasard (CIT042 -) ; écho (ANT039 +) ; vol de vie (ANT032 -).

### Règles pour écrire le lot 13

- **Les leçons 1 à 7 du lot 12 s'appliquent toutes** :
  1. On ne prend que les places ci-dessus.
  2. Au plus 3 reprises par conteur. Le crochet et le prix principal d'une reprise sont neufs pour le mot entier.
  3. Sur un couple partagé, comparer le geste du ±7.
  4. Les noms et les mots d'institution se comparent entre conteurs et à noms-pris.txt, pluriel compris.
  5. La pioche d'Assemblée compte dans le plafond de la pioche : **ses 6 pôles du lot sont tous pris ci-dessus**, et aucun autre pôle ne la prend en famille principale. Une Assemblée garde 2 cartes de Loi au moins par pôle.
  6. Bêtes : 40 PV au plus aux paliers 1 à 6, 60 au palier 7.
  7. Une recette de chute ne sert qu'une fois par conteur dans le lot.
- **Vocations** : avant d'écrire, chaque conteur refait au script le compte des vocations sur les lots 1 à 12 et le met en tête de familles_X.md. La règle reste la même : trois emplois par mot et par type, jamais deux fois chez le même conteur, une vocation par mot dans le lot. Chaque emploi prend un crochet, un prix et une famille de bêtes neufs.
- **Reprises** : chacune se déclare dans familles_X.md avec son origine, et prend un crochet, un prix principal et une bête principale neufs.
- **Colonnes** : une colonne est un couple prix-crochet que le pôle remplit lui-même. Chaque couple sert dans 2 pôles du lot au plus.
- **Échanges** : un conteur peut échanger deux familles entre ses propres pôles s'il le déclare dans familles_X.md et que l'échange garde toutes les contraintes ci-dessus. Il ne prend jamais la place d'un autre conteur. Une place non utilisée est perdue, et la place perdue désignée peut passer à un autre de ses pôles sans famille, sur déclaration.
- **Lire avant d'écrire** : les noms, récits et familles d'effets des lots 1 à 12 (/mnt/project-files/zones-serie/lot-1/ à lot-12/), et noms-pris.txt. Aucune zone du lot 13 ne rejoue une zone déjà écrite.
- **Registre grand public** : pas de sacrifice, de mutilation ni de châtiment décrit, et rien qui mette un enfant en danger. On suggère au lieu de montrer.
