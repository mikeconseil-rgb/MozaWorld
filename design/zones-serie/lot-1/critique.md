# Critique du lot 1 : 24 zones à cartes et 32 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md, consignes-cartes.md (v2.2) et le moteur réel (`tv/src/cartes.js`, en lecture seule).*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **82,9 / 100**. Aucune zone refusée. Une zone était sous 70 : **ASS128**, à 68. J'ai réécrit 11 de ses 14 cartes et elle passe à 82.

Le lot a du caractère. Les récits sont incarnés : la chèvre de Bahrouz gravée des deux côtés du rempart, le collier de guépard qui porte un rang de cour, les cordons d'œufs de crapaud qui dessinent les étoiles de la coupole, la clause peinte sur la porte du poêle. Les −7 et les +7 sont méconnaissables d'une zone à l'autre, avec un vrai saut gradué. Les budgets annoncés sont justes : j'ai fait des contrôles au hasard dans les quatre fichiers et je n'ai trouvé aucun écart hors tolérance. Il y avait deux défauts graves, tous deux corrigés :
1. **Un bug moteur chez C** : 19 cartes écrivaient `["affaiblit", n, "cible"]`, alors que le moteur lit `["affaiblit", qui, n]`. Les affaiblissements « à tous » ne touchaient donc qu'un ennemi, et de 1 seulement.
2. **Les tics de gabarit signalés en v2 sont revenus**, chacun chez son conteur :
   - A : le +7 « repeint » (5 zones sur 6) et le −7 « ocre lessivé » (4 sur 6).
   - B : le −7 à la « lanterne sourde » et aux bâches (4 sur 6).
   - C : la paire « deux X presque pareils » au −7 (6 sur 6) et les « aplats » au +7 (4 sur 6).
   - D : le +7 en prolifération **rose** (5 sur 6) et le mot « tiède » (20 fois).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT016 | Dezh-Saravand, le Col numéroté | A | 86 | Deux inscriptions superposées, très forte. Chaos (hasard, riposte) contre Ordre (bloqueurs, garde) : vraie Citadelle, aucun miroir. |
| DON030 | Les Fours de Thermokleia | A | 87 (85) | Le meilleur récit du lot (la main du frère sur les tessons). L'ostracisme est réinventé, pas recopié. « Ocre lessivé » retiré du −7. |
| DON106 | Le Baray sec de Romeas-Kor | A | 78 (76) | Chronique tronquée efficace. Le pôle Vie est un peu fade : dégâts + soin ou vol de vie sur 7 cartes sur 7. Le +7 « repeint » a été remplacé par le toit du temple couvert de hérons. |
| ANT209 | La Ménagerie de Rukhsabad | A | 85 (83) | Bestiaire lié au récit, battue contre harde. Le +7 « englouti sous la verdure, repeint » est remplacé par les bêtes dans la salle d'audience. |
| ANT020 | Le Quai gelé de Kar-Šumirak | A | 84 (82) | La main du valet dans le coin du bas-relief : chute parfaite, aucune source recopiée. Le +7 n'est plus repeint : les bas-reliefs sont pris dans l'ambre. |
| ASS040 | Le Jaugeur de Ta-Senut | A | 86 (84) | Le nilomètre est détourné en impôt truqué. Sécheresse (lois, affaiblissement) contre Déluge (pioche, récupération, écho) : deux jeux. Le +7 repeint est corrigé. |
| DON073 | Les Greniers sur pilotis de Lanshui | B | 84 | Deux registres. La Famine frappe plus fort sous la moitié des PV, le Festin brûle et soigne : excellent contraste. Seule zone de B qui garde sa lanterne sourde. |
| ANT072 | La Lagune des Pieux-d'Encre | B | 81 (78) | Encre de seiche, mourantes contre pontes. Le −7 aux bâches goudronnées et à la lanterne est réécrit (pieux nus, fours qui fument jour et nuit). |
| ANT239 | La Draille de Morvannoc | B | 80 (77) | Transhumance contre maison longue. Le −7 à la lanterne sourde est réécrit. Le pôle Foyer (garde, soin, riposte) est proche de celui d'ASS059 ; les bêtes l'en distinguent. |
| ASS074 | Le Delta de Qiliqtaq | B | 82 | Cellier scellé contre débâcle. Mort/Vie traité comme une décision de conseil : très différent des trois autres Mort/Vie. |
| ASS170 | Les Falaises d'Urpichay | B | 83 (82) | Filets à brume et quipu. Brume = hésitation en chaîne, Clarté = marques et pioche. J'ai remplacé « quarante lamas » (chiffre fétiche du lot). |
| ASS059 | L'Almunia de Zahrabel | B | 78 (75) | L'amadou est une bonne matière. Le −7 « amadou en fraude, bâches, lanterne sourde » est réécrit. Le Foyer est un peu générique (garde + soin). |
| DON013 | Petchgorod, les Îles-Fourneaux | C | 86 (80) | La meilleure fable du lot. Opération `affaiblit` corrigée (4 cartes). « Deux bleus presque pareils » et « aplats » retirés. |
| DON051 | La Chartreuse de Morvèle | C | 83 (80) | Vert-de-gris contre vert de feuille. Je garde cette paire de verts au −7, car elle porte le récit. Op corrigée (+7). « Aplats » retiré. |
| ANT231 | Le Jardin Ratissé de Sunagiri | C | 82 (79) | Le fourmilion et le faux coupable fonctionnent. Op corrigée (+4). Je garde la « Morale », qui convient à la fable. |
| ANT080 | Le Cadran de Tonalixco | C | 85 (81) | Une ombre compte comme un corps : idée de jeu forte. Ops corrigées (4 cartes). −7 et +7 nettoyés. |
| ASS166 | Glødting, l'Assemblée sur la Lave | C | 82 (78) | La diseuse de lois est un personnage inventé dans une institution réelle, sans emprunt. Ops corrigées (4 cartes). Récit ramené sous 100 mots, « Morale : » retirée. |
| ASS128 | Le Damier de sel de Tavahiri | C | **82 (68)** | **Réécrite.** Ses deux pôles rejouaient ASS166 (pioche + coups au hasard + écho) et CIT016 (garde + affaiblissement), et 5 de ses opérations étaient cassées. Voir plus bas. |
| CIT013 | Ixkabal, la Citadelle des Ruches | D | 84 (81) | La garnison qui devient essaim, prise dans un inventaire tronqué. Poison (garde à dards, riposte) contre Nectar (soin, essaims). Le réveil +7 donnait 4 mana alors que le moteur plafonne à 2 : corrigé. Le rose est retiré du +7. |
| DON101 | L'Ermitage-Glacier d'Amba Tsehel | D | 79 (77) | Deux témoins, bon dispositif. La Peste est monotone (brûlure sur 6 cartes sur 7). Le +7 « gorge de chair rose » est remplacé par une gorge muette et des guéris alignés. |
| ANT137 | La Coupole noyée de Kyrtè | D | 85 (83) | Il manque une étoile par œuf : la plus belle image du lot. Mana du réveil plafonné. Le frai rose devient un frai noir piqué de blanc. |
| ANT045 | Le Castellum d'Abiétum | D | 86 (83) | « Quarante, quarante, quarante, puis soixante, puis cent dix » : je garde ce chiffre ici, et seulement ici. Le +7 n'est plus un nid rose : le fort pend au ciel, tenu par les becs (horreur par le vide, pas par la croissance). |
| ANT183 | La Lande de Yaxuntik | D | 80 (78) | La rouille du blé contre l'or du pollen : accepté. Le +7 dit maintenant l'or (« or battu », stèles dorées à la feuille). Mana plafonné à 2. |
| ASS115 | Le Figuier d'Emthonjeni | D | 81 (74) | Les lois étaient « récitées », comme dans ASS166 : elles deviennent des rangées de perles sur le collier de l'inyanga. Récit tronqué (deuxième de D) refermé. « Quarante-trois » (déjà chez A) remplacé. Tag Loi harmonisé. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 84,3 (82,7).** La voix la plus sûre ; aucun problème de règle. Ses défauts étaient des réflexes de palette (repeint, ocre lessivé) et une chute d'ambiance « …, sans X. » répétée 9 fois.
- **B, 81,3 (79,7).** Récits vivants, mais un gabarit marqué : chaque bande de palier donne un prix d'échange (« un X contre un Y »), chaque récit finit sur un dilemme, et le −7 revient à la contrebande à la lanterne. Douze ambiances dépassaient 20 mots.
- **C, 83,3 (77,7).** Les meilleures fables et les meilleurs pièges, mais un bug moteur systématique (ordre des arguments d'`affaiblit`). La « couleur-indice » est devenue une paire trompeuse dans 6 zones sur 6, et le mot « règle » revient partout dans ses Ressources.
- **D, 82,5 (79,3).** Les images les plus fortes, mais un +7 rose et proliférant dans 5 zones sur 6, « tiède » 20 fois, deux récits tronqués et 3 mana au-dessus du plafond du moteur.

**Ressources (32)** : A 85, B 80, C 80, D 82. Les fiches sont légères et justes, mais il y avait cinq doublons de geste ou de nom entre conteurs, tous corrigés (voir plus bas).

## Arbitrages demandés

- **Pôles partagés.**
  - Mort/Vie (DON106, ANT209, ANT072, ASS074) : récits et mécaniques nettement distincts (réservoir, ménagerie, seiches, cellier). Validé.
  - Chaos/Ordre : CIT016 est valide. ASS166 et ASS128 étaient trop proches : ASS128 est réécrite.
  - Peste/Guérison (DON101, ASS115) : mécaniques distinctes (brûlure et vol de vie contre lois et soins collectifs). Le cadre « lois récitées » d'ASS115 est changé. Les deux gardent l'idée que les guéris changent : toléré, à surveiller.
  - Exil/Foyer (DON030, ANT239, ASS059) : trois histoires différentes. Les deux Foyer de B se ressemblent (garde + soin), ce que je tolère grâce aux bêtes d'ANT239.
  - Sang/Sève (ANT020, ANT231) : les deux pôles Sang reposent sur invocation, vol de vie et PV. C'est inévitable dans un Antre ; les récits sont sans rapport. Validé.
- **DON051 au +7** : validé. C'est une croissance ordonnée (les lianes suivent les remplages), pas une horreur organique. C'est D qui a changé ses +7.
- **ANT183, « Or » traité comme pollen** : validé, à condition que l'or se voie. C'est fait au +7.
- **Pratiques réelles chez A** (ostracisme, nilomètre, bas-reliefs de chasse) : acceptables, rien n'est recopié. En revanche, RES267 de D était un **second nilomètre** (des scribes qui relèvent la crue sur une échelle gravée) : je l'ai réécrite.
- **Tag « Loi »** : accepté comme tag descriptif, sans opération propre. Il est réservé aux cartes d'Assemblée dont l'effet commence par « Loi ». Je l'ai ajouté aux 7 cartes concernées d'ASS115, qui ne l'avaient pas.

## Corrections faites (environ 125 modifications dans les 4 fichiers)

**Règles et moteur**
- C : 19 opérations `affaiblit` remises dans l'ordre du moteur (`["affaiblit", qui, n]`), dans DON013, DON051, ANT231, ANT080, ASS166 et ASS128.
- D : `mana` à 4 ou 3 ramené à 2, le plafond du moteur (`cartes.js`), et compensé : CIT013 +7 (pioche 4, écho, récupération), ANT137 +7 (pioche 4), ANT183 +7 (garde 12).
- D : CIT013 +7 réduit à 250 caractères ou moins.

**ASS128 réécrite (11 cartes, plus la prose de ses deux pôles)**
- **Chaos = la mise.** On paie des PV, et la carte paie davantage si le héros est sous la moitié de ses PV (condition `blesse`). Coups au hasard, vol de vie. La forme −7 « Tout sur la Saumure » garde le seul boost de C.
- **Ordre = « nul ne quitte sa case ».** On punit l'ennemi qui bouge (conditions `elan`, `vol`, `pietine`), on marque (Vulnérable), on tient (garde, riposte).
- Prix sur 4 cartes sur 6 par pôle ; budgets recalculés ; résonances inchangées (Sang→Givre, Givre→Sang).

**Tics et palettes**
- A : 4 +7 « repeints » réécrits ; 3 « ocre lessivé » retirés ; 6 chutes « …, sans X. » réécrites.
- B : 3 −7 « lanterne sourde, bâches » réécrits.
- C : 4 −7 « presque pareils » et 4 +7 « aplats » réécrits ; les lignes « couleur-indice » de la prose sont mises à jour ; 5 « règle » retirés des Ressources.
- D : 6 +7 réécrits (plus de rose, deux +7 qui inquiètent par autre chose que la croissance : ANT045 et DON101) ; « tiède » ramené de 20 à 11 occurrences.

**Chiffres fétiches**
- Le mot « quarante » revenait dans 7 zones (et « quarante-trois » chez A et chez D). Il reste dans ANT020, ANT045 et DON073 ; je l'ai retiré de DON030, ASS170, DON101 et ASS115.

**Doublons entre conteurs (Ressources et noms)**
- RES094 (C) : cerfs-volants, comme RES003 (B). Devient « La Lande aux Sifflets de Fengluo » (pigeons à sifflets).
- RES008 (D) : glacière à sorbets, comme RES281 (B), et blocs de glace, comme RES216 (C). Devient le givre recueilli sur des plateaux d'argent pour les parfumeurs.
- RES267 (D) : nilomètre, comme ASS040 (A). Devient « La Moraine bleue de Mer-Ikhem », la faïence glacée.
- RES354 (D) : lamelles de champignon raclées, comme RES209 (B). Devient la pluie de spores recueillie sur des toiles.
- RES344 (C) : « Fourneaux » à côté des « Fours » de A et des « Îles-Fourneaux ». Renommée « Les Forges de sable noir d'Hinoura ».

**Longueurs**
- 21 ambiances de B et de C ramenées de 21 mots à 20 mots au plus.
- 4 récits ramenés sous 100 mots (ASS059, ASS166, ASS128, ASS115).
- 2 phrases `pal` ramenées sous 160 caractères.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Les 98 blocs ```json``` se lisent.
- Les 24 zones ont chacune 14 cartes (pôles − et +, paliers 1 à 7).
- Chaque effet fait 250 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec des arguments dans le bon ordre et un `mana` de 2 au plus.
- Chaque forme du palier 7 pose une résonance et en réveille une autre.
- Ambiances de 12 à 20 mots, récits de 100 mots au plus, `pal` de 160 caractères au plus.

## Reste à surveiller (non bloquant)

- **DON106 Vie** et **DON101 Peste** : un seul geste mécanique répété (soin, ou brûlure). Il faudra en varier deux cartes lors d'une prochaine passe.
- **B** : le prix d'échange affiché à chaque bande de palier (6 zones sur 6) et la chute en dilemme.
- **C** : l'exception unique dans le récit (« une case à cinq côtés », « une vitre sans couleur », « un seul coq »).
- **D** : l'idée que les guéris changent (DON101, ASS115), et le reste des « tiède ».

## Leçons pour le lot 2 (à ajouter aux consignes)

1. **Ordre des opérations** : `["affaiblit", qui, n]`, `["vulnerable", qui, n]`, `["brulure", qui, n, tours]`, `["deg", "hasard", n, coups]`. Pas plus de 2 `mana` par opération (plafond du moteur). Les conditions `si` doivent figurer dans la liste du moteur (`bete`, `blesse`, `seul`, `hesite`, `garde`, `elan`, `vol`, `pietine`, `brule`, `vulnerable`, `cibleGarde`, `defausseAPrix`…) : une condition inconnue est toujours fausse, et sans message d'erreur.
2. **Mots et images interdits au lot 2** (déjà usés) : « repeint », « ocre lessivé », « lanterne sourde », « deux … presque pareils », « en aplats », le rose au +7, « tiède », « quarante ». Un nombre précis ne revient pas dans deux zones du même lot.
3. **Faire tourner les +7 et les −7** : au moins trois recettes différentes par conteur dans un lot (par exemple vide, ordre, foule, silence, démesure, ruine). Une seule zone par lot, tous conteurs confondus, où le végétal avale un bâtiment au +7.
4. **Même mots de pôle chez un même conteur** : avant d'écrire, poser une ligne « famille d'effets − / famille d'effets + » pour chaque zone et vérifier qu'elles ne partagent pas leur famille principale (c'était le cas d'ASS166 et d'ASS128).
5. **Ressources : un geste par lot.** Tailler la glace, racler des lamelles, lancer des cerfs-volants, relever une crue : chaque geste n'apparaît qu'une fois dans le lot. Les conteurs tiennent une liste commune de leurs gestes et la consultent avant d'écrire.
6. **Compter au script, pas à l'œil** : ambiance de 12 à 20 mots, récit de 60 à 100 mots, `pal` de 160 caractères au plus, effet de 250 caractères au plus. Lancer le validateur avant de remettre le fichier.
7. **Chutes** : la même tournure de fin (« …, sans X. », « Morale : », un récit tronqué, « Toutes, sauf une ») au plus deux fois par conteur et par lot.
8. **Tag « Loi »** : obligatoire sur toute carte d'Assemblée dont l'effet commence par « Loi », et interdit ailleurs.
