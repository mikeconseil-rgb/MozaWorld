# Lot 9 : carte des familles, conteur B (l'Explorateur marchand)

**Première version : 12 h 26**, avant la moindre carte, après lecture de familles_C.md (12 h 17) et familles_A.md (12 h 25). C et A sont inscrits avant moi : sur nos couples communs, je prends d'autres familles principales que les leurs sur les deux pôles, et d'autres crochets. familles_D.md n'existe pas encore : je suis le premier sur Exil/Foyer (D CIT024), Sécheresse/Déluge (D ANT176) et Abysse/Ciel (D DON098). Je relirai familles_A, C et D avant la remise.

**Seconde version : 13 h 53**, avant la remise, après relecture de familles_A.md (12 h 38), de conteur_A.md (12 h 38, cartes comptées au script), de familles_C.md (12 h 16, toujours partielle) et de familles_D.md (12 h 30). Changements depuis la v1 :
- **Couples recomptés sur les cartes de A** : A remplit hésitation/`hesite` (ANT018+), brûlure/`brule` (ANT157+), garde/`garde` (ANT157−), défausse/`defausseAPrix` (ANT163−), marque/`vulnerable` (ANT210−), soit ses cinq couples déclarés, et aucun des miens hors garde/`garde`. Mes trois couples restent à 2 dans le lot : PV/`blesse` (B Exil, C Guérison), garde ennemie/`cibleGarde` (B Foyer, C Rouille), garde/`garde` (B Raison, A ANT157−).
- **Bêtes recomptées sur les cartes de A** : aucune famille de A ne passe à 3. Rencontres à 2 : camélidés (vigognes de A, lama de B) et corvidés si l'on compte à tort « Martin-pêcheur pie » (c'est un alcédinidé). La Grue caronculée devient **Grue des vleis**, pour ne pas reprendre l'épithète de l'Ibis caronculé de A.
- **Bois** : garde des alliés en appoint (et non garde du héros). **Chant** : pioche et riposte en appoint, prix 5. Dégâts ciblés sur 3 cartes seulement dans Silence, Feu, Liberté, Bois, Corruption, Pureté et Déluge.
- **ANT031** : la chute est « Onze jours de pluie suivirent… » (pour ne pas faire commencer trois chutes par le même mot).
- **D** : accord relu. D prend les quatre couples restants, l'Abysse en gros coups (sans gouffre ni remous), et évite mes nombres ; ses bœufs musqués (bovidés) et ses scarabées (coléoptères) mettent ces deux familles à 2 avec B, ce qui est permis.


## Compte des vocations (leçon 1 du lot 8), au script sur les lots 1 à 8

Script `vocations.py` sur `poles.json` (672 pôles des lots 1 à 8). Même règle que A et C : un pôle compte en vocation dès qu'il a 5 cartes d'invocation ou plus (Antre), ou 5 cartes de dégâts ciblés ou plus (gros coups, tout type de zone). Un mot est libre si B ne l'y a jamais joué et s'il n'a servi qu'une fois au plus chez un autre. Les Assemblées n'ont pas de vocation de type.

| Zone | Mot | Vocation | Avant (lots 1 à 8) | Verdict |
|---|---|---|---|---|
| DON097 | Pourriture | gros coups | C DON051 (1), D ASS100 (4), A ANT155 (5), C ANT106 (5), B DON107 (6) | non |
| DON097 | Croissance | gros coups | A ANT155 (lot 5, crochets `cartesJouees`/`troisCartes`) | **oui, reprise unique : je la prends** |
| DON007 | Glace | gros coups | A ASS030 (3), B ASS023 (5) | non |
| DON007 | Feu | gros coups | B ASS023 (5), C ANT173 (5) | non |
| ANT172 | Folie | invocations | D ANT169 (2), A ANT217 (4), B ANT225 (4), C ANT101 (5) | non |
| ANT172 | Raison | invocations | A ANT053 (3), C ANT101 (5) | non |
| ANT133 | Brume | invocations | D ANT047 (5), C ANT129 (6) | non |
| ANT133 | Clarté | invocations | A ANT027 (6), B ANT098 (8) | non |
| ANT216 | Fer | invocations | A ASS114 (5), D ANT214 (8) | non |
| ANT216 | Bois | invocations | B DON003 (3), C ANT084 (7) | non |
| ANT150 | Corruption | invocations | A ANT156 (lot 6) | oui, reprise unique |
| ANT150 | Pureté | invocations | aucune | **oui, première : je la prends** (un seul pôle d'invocations par Antre) |
| ANT031 | Sécheresse | invocations | A ANT113 (lot 8, crochet `elan`) | **oui, reprise unique : je la prends** |
| ANT031 | Déluge | invocations | D CIT019 (2), B ANT245 (5) | non |
| ANT177 | Abysse | invocations | aucune | **oui, première : je la prends** |
| ANT177 | Ciel | invocations | B ANT234 (6) | non : déjà jouée par B |

**Bilan : 4 vocations possibles, une par zone** (Croissance, Pureté, Sécheresse, Abysse ; la Corruption, libre aussi, est dans la même zone que la Pureté). Il me faut 7 pôles hors places (24 − 17) : **4 vocations + 3 colonnes**, sans 4e colonne. **Pour D** : la Sécheresse en invocations n'est plus libre après moi (ANT176), l'Abysse non plus ; le Ciel en gros coups reste libre pour DON098 (une seule fois avant, C ANT161).

## Places de B (LISTE.md) : 17 familles principales

Une place dans chacune des douze familles, une seconde en **exil, affaiblissement, soin des alliés** ; places rares **coups au hasard** et **vol de vie**. Les familles déjà principales sur le même mot (lots 1 à 8, au script) sont évitées partout ; celles de A et de C sur nos couples communs aussi. Changé avant d'écrire, après lecture de A et C : Mensonge (garde des alliés → vol de vie, A l'a prise), Liberté (perce-garde → garde des alliés, C l'a prise), Pourriture (vol de vie → perce-garde), Foyer (colonne défausse → garde ennemie, le couple défausse/`defausseAPrix` est plein), Chant (crochet `cartesJouees` → `seul`, c'est celui de C).

## Les 24 pôles (famille principale ; appoint visé ; crochet ; prix)

| Zone | Pôle − | Pôle + |
|---|---|---|
| DON097 Donjon, Savane, vénitienne, Feu | Pourriture → **perce-garde** (le poivre pourri ronge le cuir et les boucliers) ; affaiblissement ; `soinEnnemi` ; PV, défausse | Croissance → **gros coups**, vocation (reprise unique de A ANT155, autre crochet) : dégâts ciblés sur 5 cartes (la termitière qui écrase) ; garde du héros ; `elan` ; garde ennemie, défausse |
| DON007 Donjon, Volcan, maya, Feu | Glace → **brûlure** (la grêle qui brûle les mains) ; garde du héros ; `seul` ; PV, défausse | Feu → **coups au hasard** (place rare : les bombes du volcan) ; dégâts à tous ; `troisCartes` ; défausse, soin ennemi |
| ASS134 Assemblée, Toundra, inuit, Glace | Exil → **colonne PV et `blesse`** (5 et 4 : le banni marche blessé) ; mana de Glace ; PV | Foyer → **colonne garde ennemie et `cibleGarde`** (5 et 4 : la lampe réchauffe aussi l'étranger) ; soin du héros ; garde ennemie |
| ASS024 Assemblée, Iles flottantes, vénitienne, Vent | Silence → **soin des alliés**, Lois (le silence qui laisse dormir) ; hésitation ; `vol` ; défausse, PV | Chant → **garde du héros**, Lois (la stance qui tient) ; pioche ; `seul` ; PV, exil |
| ASS022 Assemblée, Haute montagne, khmère, Pierre | Mensonge → **vol de vie** (place rare : le menteur se nourrit de la confiance), Lois ; marque ; `hesite` ; défausse, soin ennemi | Vérité → **soin des alliés**, Lois (la rizière partagée) ; perce-garde ; `elan` ; PV, exil |
| ASS122 Assemblée, Toundra, romaine, Glace | Tyrannie → **exil**, Lois (les listes du dictateur) ; affaiblissement ; `cibleGarde` (sans garde ennemie en prix) ; exil, PV | Liberté → **garde des alliés**, Lois (le bonnet prêté) ; mana de Glace ; `troisCartes` ; défausse, PV |
| ANT172 Antre, Forêt de champignons géants, inca, Sève | Folie → **affaiblissement** (les rires sous les chapeaux) ; bêtes 3, marque ; `pietine` ; PV, vos bêtes | Raison → **colonne garde du héros et `garde`** (4 et 4, le crochet lu avant la garde de la carte) ; bêtes 3, pioche ; défausse, PV |
| ANT133 Antre, Mangrove, grecque, Eau | Brume → **marque** (les passes qui tournent) ; bêtes 3, hésitation ; `vol` ; PV, défausse | Clarté → **exil** (on ne voit qu'une fois) ; bêtes 3, soin du héros ; `seul` ; exil, vos bêtes |
| ANT216 Antre, Désert de sable, romaine, Feu | Fer → **mana** de Feu (la forge qui ne s'arrête pas) ; bêtes 3, riposte ; `cibleGarde` ; PV, défausse | Bois → **affaiblissement** (le bois brûlé, les pics émoussés) ; bêtes 3, garde des alliés ; `pietine` ; vos bêtes, garde ennemie |
| ANT150 Antre, Haute montagne, zouloue, Pierre | Corruption → **riposte** (≤ 8 par carte : le taureau taché qui rend les coups) ; bêtes 3, marque ; `soinEnnemi` ; PV, défausse | Pureté → **invocations**, vocation première (le troupeau blanc) ; soin des alliés ; `hesite` ; vos bêtes, exil |
| ANT031 Antre, Forêt de champignons géants, maya, Sève | Sécheresse → **invocations**, vocation (reprise unique de A ANT113 ; crochet `blesse` au lieu d'`elan`, sans prix en PV) ; brûlure ; vos bêtes, défausse | Déluge → **soin du héros** (la pluie de onze jours) ; bêtes 3, garde des alliés ; `cartesJouees` ; garde ennemie, PV |
| ANT177 Antre, Delta fluvial, andalouse, Eau | Abysse → **invocations**, vocation première (le remous sans fond) ; affaiblissement ; `elan` ; vos bêtes, PV | Ciel → **pioche** (on lit la saison dans les vols) ; bêtes 3, perce-garde ; `vulnerable` (sans marque dans le pôle) ; défausse, exil |

**Comptes prévus** : soin du héros 1 (Déluge), soin des alliés 2 (Silence, Vérité), garde du héros 1 (Chant), garde des alliés 1 (Liberté), affaiblissement 2 (Folie, Bois), riposte 1 (Corruption), brûlure 1 (Glace), marque 1 (Brume), mana 1 (Fer), perce-garde 1 (Pourriture), exil 2 (Tyrannie, Clarté), pioche 1 (Ciel) ; rares : coups au hasard 1 (Feu), vol de vie 1 (Mensonge). Soit 17. Vocations 4 (Croissance en gros coups ; Pureté, Sécheresse, Abysse en invocations). Colonnes 3 (Exil, Foyer, Raison).

**Couples (leçon 3 du lot 8), un pôle chacun chez moi** : PV/`blesse` (Exil, avec C Guérison : **plein**), garde ennemie/`cibleGarde` (Foyer, avec C Rouille : **plein**), garde/`garde` (Raison, avec A Cendre : **plein**). Défausse/`defausseAPrix` était déjà plein (C Ruine, A Chaos). Les quatre couples restants (`prixBete`/`bete`, brûlure/`brule`, marque/`vulnerable`, hésitation/`hesite`) sont pris par D (familles_D.md, 12 h 30) : tous les couples du lot sont à 2. Ailleurs, aucun crochet de B n'est nourri par le prix ou l'effet de son pôle : Glace brûle sans lire `brule`, Brume marque sans lire `vulnerable`, Silence fait hésiter sans lire `hesite`, Mensonge lit `hesite` sans faire hésiter, Ciel lit `vulnerable` sans marquer, Sécheresse lit `blesse` sans payer de PV, Tyrannie et Fer lisent `cibleGarde` sans garde ennemie en prix. Aucun assemblage prix + crochet dans plus de 2 pôles de B ; pas de PV/`pietine` en réflexe (Folie seulement).

**Crochets d'une reprise (leçon 5 du lot 8)** : aucun de mes crochets n'est celui d'un pôle du même mot dans le lot (A : Mensonge `seul`, Vérité `cartesJouees`/`troisCartes`, Brume `soinEnnemi`, Clarté `pietine`, Corruption `elan`, Pureté `vol` ; C : Silence `soinEnnemi`, Chant `cartesJouees`, Tyrannie `seul`, Liberté `cibleGarde`, Fer `vol`, Bois `blesse`, Pourriture `bete`, Croissance `vol`), ni celui du pôle d'origine d'une vocation reprise (Croissance : `elan` au lieu de `cartesJouees`/`troisCartes` ; Sécheresse : `blesse` au lieu d'`elan`).

**Plafonds de valeur (leçon 4 du lot 8)** : riposte 8 au plus par carte, dégâts ciblés 20 au plus hors Donjon (paliers 1 à 6), et jamais deux fois la même opération dans une carte (ni deux « mana », ni deux « garde du héros »), réveil compris.

## Nombres précis (B)

soixante sacs (DON097), vingt jours et le vingt et unième (DON007), douze tours et trois jours (ASS022), neuf jours et le dixième matin (ANT133), deux cents pics (ANT216), onze jours de pluie (ANT031). Aucun dans les noms ; ailleurs seulement un, deux, la moitié. Ni « quarante », ni « cent », ni « mille ».

## Prénoms et institutions (B)

- **Prénoms** : le scrivan Bortolo Zanchi et le marchand Alvise Tamburlin (DON097) ; le seigneur Muwaan Kan et son fils Bolon Ch'ich' (DON007) ; Saputi et sa femme Arnaq (ASS134) ; les barcaroli Nane Zorzetto et Toni Bisato (ASS024) ; Ta Mau et Neak Sok (ASS022) ; le dictateur Sextus Opimius Nerva (ASS122) ; Rumi (ANT172) ; le prêtre Kallikratès et Myrrhinè (ANT133) ; le forgeron Gaius Antistius Rufus (ANT216) ; le bouvier Mbuso (ANT150) ; Ix Tz'akab (ANT031) ; le patron Curro Vela (ANT177).
- **Institutions** : le magazen et le scrivan (DON097), le katimavik (ASS134), la fraglia des barcaroli (ASS024), la sabhā (ASS022), les comices, le duumvir et le dictateur (ASS122), le centurion de la carrière (ANT216). Ni « conseil », ni « divan », ni « kurultai », ni « scuola », ni « qaggiq » (déjà en jeu).

## Formes de récit et intrigues (B)

Le critique relevait chez B au lot 8 les documents cités (7 sur 12) : ici **2 documents sur 12** (l'inventaire, l'ostracon). **Une seule** histoire touche à l'argent (DON097, les clous à vendre). Aucun dialogue, aucune ouverture « X était petit quand », aucune énumération. Une seule chute en parole rapportée (ANT133, « Elle dit seulement »). Aucune forme reprise de mes lots 7 et 8, aucune forme de A (chronique d'un siège, testament, recette, supplique, serment, pari, querelle, héritage, corvée, rumeur, battue, retour).

| Zone | Forme | Qui fait quoi, et comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|
| DON097 | **document : l'inventaire** | Le scrivan fait l'inventaire du comptoir : poivre gâté, registres mangés, termitière qui monte ; seule une caisse de clous a tenu. | Inventaire du magazen de Pevarada, dressé par le scrivan Bortolo Zanchi pour les héritiers du marchand Alvise Tamburlin. | Le scrivan conseille aux héritiers de vendre les clous et de ne pas venir. |
| DON007 | le rite funéraire | Le fils fait monter la grêle du sommet pour garder frais le corps de son père ; au 21e jour le volcan gronde ; on scelle la porte. | Le seigneur Muwaan Kan mourut au plus chaud de l'année. | On scella la porte sur le dernier panier. |
| ASS134 | la coutume expliquée | On bannit en soufflant la lampe du coupable ; sa femme garde une mèche contre elle et rallume la lampe ; personne ne revient l'éteindre. | Au katimavik de Nuvuttiq, on ne prononce pas le bannissement. | Personne ne revint la souffler. |
| ASS024 | le métier décrit par sa règle | Les barcaroli se renvoient le Tasse dans le vent ; l'un se tait au milieu d'un vers ; l'autre finit le chant seul. | Entre les îles de Sotovento, quand le vent forcit, la fraglia des barcaroli impose le silence : les passagers se taisent, on attache les battants des cloches. | Il ne prend plus que les traversées par temps calme. |
| ASS022 | l'ordalie racontée | Les plaideurs montent aux tours ; le menteur doit tomber malade ; le vent du col rend malades les deux ; la rizière est partagée. | Sur le plateau de Rontéa Kpos, au bord de la falaise, douze tours de grès font face à la sabhā. | La sabhā partagea la rizière entre eux. |
| ASS122 | le décret retourné | Le dictateur ordonne aux esclaves d'aller tête nue ; les maîtres prêtent des bonnets ; aux comices, plus une tête nue. | À Pilleata, colonie posée sur la toundra au-delà du dernier camp, tout le monde porte le bonnet de feutre à cause du froid : le duumvir, l'affranchi, l'esclave. | Il compta les mains, puis les têtes, et ne trouva plus une tête nue. |
| ANT172 | le conte de veillée | Le gardien qui ne mange pas les lamelles compte ses lamas toute la nuit et en trouve un de plus ; il mange désormais avec les autres. | À la fête des semailles, le village d'Asiypampa mange les lamelles du grand champignon, sous les chapeaux, et rit jusqu'au jour. | Depuis, il mange les lamelles avec les autres. |
| ANT133 | le pèlerinage | Neuf jours de brume et de fèves, puis l'eau claire où l'on voit son mort ; la veuve a vu son mari, les mains propres. | Ceux qui veulent revoir un mort viennent à Kyamessa, au fond de la mangrove. | Elle dit seulement qu'il avait les mains propres, ce qui ne lui ressemblait pas. |
| ANT216 | **document : l'ostracon** | Le forgeron de la carrière n'a plus que le bois de la grue : brûler pour les pics, ou garder pour la colonne ; la colonne est restée couchée. | Ostracon du forgeron Gaius Antistius Rufus au centurion de la carrière : « Je retaille deux cents pics par jour. […] » | La colonne est toujours couchée dans la carrière, fendue au milieu. |
| ANT150 | la légende d'un troupeau | Le bouvier cache le veau taché qu'il devait tuer ; il devient un taureau invincible ; le roi le voit ; le troupeau est taché aujourd'hui. | Les vaches du roi sont blanches, et le troupeau de l'abri d'eMabaleni l'est depuis toujours. | Aujourd'hui, le troupeau d'eMabaleni est taché, et c'est le plus beau du royaume. |
| ANT031 | le proverbe expliqué | La vieille guette les chapeaux deux ans de sécheresse ; ils s'inclinent ; elle bouche son maïs ; onze jours de pluie. | « Quand les chapeaux se baissent, rentre ton maïs », disent les femmes de Tikin Naj. | Onze jours de pluie suivirent, et les rieurs mangèrent son maïs jusqu'à la récolte. |
| ANT177 | la mesure manquée | Le patron noue toutes les cordes pour sonder le remous ; un esturgeon rend la pierre ; les oies ne s'y posent jamais. | Au coude du fleuve, devant Los Sollares, l'eau tourne sur elle-même, et les esturgeons viennent s'y reposer avant de remonter frayer. | Les oies des marais, elles, ne se posent jamais sur le remous. |

## Noms de zones (comparés par moitié, mot principal, mot traduit et préfixe à noms-pris.txt, à A et à C)

Pevarada, le Magazen des Poivres (DON097) ; Batk'ab, le Caveau de la Grêle (DON007) ; Le Katimavik de Nuvuttiq (ASS134) ; La Fraglia de Sotovento (ASS024) ; La Sabhā de Rontéa Kpos (ASS022) ; Les Comices de Pilleata (ASS122) ; Asiypampa, la Veillée des Rieurs (ANT172) ; Kyamessa, la Passe des Pèlerins (ANT133) ; Hydreuma Fabrorum, la Colonne gisante (ANT216) ; eMabaleni, l'Abri du Veau tacheté (ANT150) ; Tikin Naj, les Champignonnières (ANT031) ; Los Sollares, le Remous des Esturgeons (ANT177). Évités parce que déjà en jeu : Fondaco/Fontego, Ca', Witz, Ch'en, Phnom, Kbal, Machay, Gué, Enclos, Pâturages, Revenants, Coupeuses, Fosse, Greniers, Termitières.

## +7 et −7 (recettes)

−7 : ruine (DON097, ANT150), silence (DON007, ASS024), vide (ASS134, ANT133, ANT031, ANT177), désordre (ASS022), ordre (ASS122), démesure (ANT172, ANT216). +7 : démesure (DON097, DON007, ANT031), foule (ASS134, ASS024, ASS122, ANT177), ordre (ASS022, ANT172, ANT133, ANT150), végétal sans bâtiment (ANT216 : un bois d'acacias autour d'une colonne debout, aucun bâtiment avalé). Aucun +7 peint. La termitière de DON097 est animale.

## Bêtes (noms d'invocation) et familles d'animaux

Une famille par pôle chez B, aucune deux fois chez B. **Après lecture de A** : j'ai retiré les viscaches (rongeurs), le colibri (trochilidés), le molosse (canidés), le ratel (mustélidés), le vautour (rapaces), le daman (procaviidés), la spatule (threskiornithidés), le crapaud (batraciens), le pécari (suidés), pour ne pas mettre une famille de A à 2. **Seule rencontre gardée : les camélidés** (vigognes de A, lama de B dans la Raison, qui est l'histoire même) : **camélidés pleins à 2**.

| Pôle | Bêtes | Familles |
|---|---|---|
| ANT172 − Folie | Phalènes des lamelles, Coati des chapeaux, Tatou velu | lépidoptères, procyonidés, cingulés |
| ANT172 + Raison | Lama du compte, Tinamou des pentes, Ours à lunettes | camélidés, tinamidés, ursidés |
| ANT133 − Brume | Bihoreau gris, Périophtalme des racines, Crabe violoniste | ardéidés (hérons), gobiidés, crustacés |
| ANT133 + Clarté | Martin-pêcheur pie, Sternes naines, Dauphin du golfe | alcédinidés, laridés, cétacés |
| ANT216 − Fer | Scorpion jaune, Mulet du limes, Hyène rayée | scorpions, équidés, hyénidés |
| ANT216 + Bois | Termites des poutres, Capricorne des palmes, Huppe fasciée | isoptères, coléoptères, upupidés |
| ANT150 − Corruption | Mouches bleues, Marabout, Tiques du bétail | diptères, ciconiidés, acariens |
| ANT150 + Pureté | Génisse blanche, Taureau blanc, Grue des vleis, Pique-bœufs | bovidés, gruidés, buphagidés |
| ANT031 − Sécheresse | Cigales de la saison sèche, Iguane noir, Serpent-liane | cicadidés, lézards, serpents |
| ANT031 + Déluge | Tapir de Baird, Caïman à lunettes, Tortue charbonnière | tapiridés, crocodiliens, tortues |
| ANT177 − Abysse | Esturgeon du fleuve, Anguille des marais, Lamproie marine | acipenséridés, anguilliformes, lamproies |
| ANT177 + Ciel | Oies cendrées, Échasses blanches, Guêpiers d'Europe | anatidés, récurvirostridés, méropidés |

**Avertissement pour C et D** (familles à 2 pôles du lot au plus) : B tient déjà un pôle de **équidés, lézards, serpents, ursidés, bovidés, hérons, crustacés, cétacés, tortues, coléoptères, diptères, lépidoptères, laridés, gruidés, crocodiliens** ; les **camélidés sont pleins** (A, B). Aucune bête hors des Antres.
