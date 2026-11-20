# Critique du lot 6 : 48 zones à cartes et 64 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 5), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). Les lots 1 à 5 ont servi de référence pour les pôles en double, et les fichiers familles_A.md à familles_D.md pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,6 / 100** (79,6 avant). Aucune zone refusée et **aucune zone sous 70** : aucune n'est donc réécrite en entier. Un pôle est réécrit presque en entier, **ANT104 +** (D, Éveil : 6 cartes sur 7, forme ultime comprise). C'était le septième pôle de garde du héros du lot, et il passe à la marque. Deux corrections touchent tout un conteur :
- **la pioche de C**, ramenée à 3 pôles d'appoint (11 cartes reprises) ;
- **les prix de B**, ajoutés dans 17 pôles (17 cartes reprises).

Sept noms trop proches de noms déjà en jeu sont changés : cinq de C, plus D ANT104 et C RES215.

La mécanique pure reste très propre. Avant correction, le validateur ne trouvait que quatre longueurs hors borne : les récits d'ASS142 (105 mots), d'ANT075 (101), de DON078 (103) et de RES304 (51). Aucun opérateur cassé, aucun `mana` au-dessus de 2, tag Loi conforme, `"cible":1` partout où il le faut. Aucune condition n'est testée après l'opération qui la remplirait, et aucune ne lit `defausseCommune`. Les 48 × 2 formes du palier 7 sont entre 45 et 55 points de base (leçon 8 du lot 5 tenue sans tolérance). Les leçons du lot 5 ont aussi porté :
- dégâts ciblés sur 4 cartes au plus par pôle, 5 en Donjon ;
- écho nulle part en famille ;
- aucune zone dont les deux pôles partagent une famille principale ;
- aucune famille principale qui rejoue, pour le même mot de pôle, une famille déjà à 5 cartes dans les lots 1 à 5 (recompté au script sur les 2 688 cartes des lots précédents).

Les récits restent la force du lot :
- la pierre runique « jamais corrigée » (ANT114) ;
- l'étoile votée présente par la Chambre (ASS105) ;
- « armures en bon état, trésor vide » (CIT018) ;
- le maillet vendu à un marchand qui « n'a jamais appris à écouter » (ANT219) ;
- les voleurs qui rachètent leurs prises au tiers du prix (ANT229) ;
- les morts de l'imbizo : « On ne leur parle pas. Ils répondent. » (ASS028) ;
- les petits pas qui ne reviennent pas (DON121).

Le défaut neuf du lot est l'inverse de celui du lot 5. Les conteurs ont bien entendu « une place se choisit », mais **chacun a trouvé sa propre dispense** :
- C a sorti la pioche des Assemblées du plafond d'appoint ;
- B a gardé l'égalité des prix en baissant leur nombre (3 cartes sur 7) ;
- D a construit douze pôles « sur un prix ou un crochet », dont sept n'ont ni l'un ni l'autre comme colonne vertébrale ;
- tous ont laissé le septième pôle de garde du héros au suivant.

Les défauts de fond :

1. **Garde du héros : 7 pôles pour un plafond de 6.** Chacun l'a vu et l'a laissé au dernier. D l'était : **ANT104 + (Éveil) passe à la marque** (5 cartes ; la garde du héros n'y reste que sur 2 cartes). La marque monte à 6 pôles, ce qui est le plafond.
2. **Prix rares chez B.** 18 pôles de B sur 24 n'avaient que 3 cartes à prix sur 7, contre 6 chez A et D et 5 chez C. L'égalité entre pôles (leçon 4 du lot 5) était tenue, mais au plus bas. La règle de base reste « environ deux cartes sur trois ». **Corrigé** : 17 cartes ont un prix de plus, et leur effet est relevé d'autant. Chaque pôle de B a maintenant 4 cartes à prix au moins.
3. **La pioche de C en appoint dans 9 pôles** : les 8 pôles d'Assemblée, à 3 ou 4 cartes chacun, plus CIT022 +. La leçon 6 du lot 4 ne prévoit pas d'exception pour les Assemblées : elles penchent vers la pioche, mais la pioche n'en est pas un réflexe obligé. **Corrigé** : la pioche reste en appoint dans ASS141 +, ASS162 − et ASS142 +, et descend à 2 cartes au plus ailleurs (11 cartes reprises, budget rendu à la famille du pôle).
4. **Des pôles sans colonne vertébrale (D).** Sur les douze pôles « sans famille principale », cinq ont un vrai jeu :
   - ASS144 − : le prix en PV sur 7 cartes paie le crochet `blesse` ;
   - CIT034 − : le prix en bêtes et le crochet `bete` ;
   - ANT075 + : le crochet `bete` sur 5 cartes ;
   - ANT074 − : le Chaos en coups au hasard et bêtes payées ;
   - CIT034 + : la place forte qui fige ce qui charge.

   Les sept autres (ANT075 −, ANT182 +, ASS154 − et +, ASS058 +, DON078 − et +) mêlent quatre appoints de 3 ou 4 cartes. Leur prix n'est qu'un prix : rien, dans le pôle, ne profite de la défausse ou du soin ennemi payés. Toléré, parce que chaque carte a son crochet et son budget, mais les notes baissent (ASS154 et DON078 à 78).
5. **Le récit-document devient le gabarit du lot.** A en fait sa règle : douze genres, tous différents. D cite un document dans 11 récits sur 12 (relevé, requête, bando, almanach, notes, sermon, légende de plan, inventaire, remèdes, consignes, liste de défenses), et B dans 6 (procès-verbal, menu, plainte, lettre, règlement, tableau de garde). Quatre formes se croisent entre conteurs :
   - la liste d'interdits : A ANT156 et D ASS028 ;
   - l'inventaire : A ANT027 et D DON121 ;
   - l'almanach : A ASS105 et D ASS058 ;
   - le procès-verbal : A ASS173 et B DON089.

   Cinq récits sont aussi des énumérations : B ASS050 (articles), B CIT040 (quarts), D ANT075 (niches), D DON078 (A à F), D ASS058 (jours). Tolérés, parce que A raconte autour du document quand B et D le citent, et que les chutes diffèrent toutes. **Corrigé seulement CIT040**, la seconde énumération de B, signalée par B lui-même.
6. **Des noms qui reprennent la seconde moitié d'un nom en jeu** : le Récif des Bannis (la Porte des Bannis), la Synaxe des Sauniers (la Synaxe des Cires), la Cave aux Outres (les Outres d'Aiolopétra), le Comptoir aux Perles (les Perles de Gainimh Gorm), le Monastère des Ruches (la Citadelle des Ruches), la Plaine des Dormeurs (la Chaussée des Dormeurs). C les avait signalés comme « non bloquants ». **Tous renommés**, voir les arbitrages.

Réflexes de gabarit, un par conteur :
- A : aucun nombre, aucune pioche en famille, appoints tous à 3 pôles exactement. A tient les leçons au cordeau, et ses cartes se ressemblent un peu : 4 dégâts ciblés dans 22 pôles sur 24, toujours le plafond.
- B : les prix au plus bas. Le récit-document (6 sur 12) et deux énumérations.
- C : la pioche partout en Assemblée. Le « vous » dans 6 récits sur 12. Les six archétypes de récit deux fois chacun, dont deux paires presque mot pour mot (« X ne triche pas. Il … seulement », ANT188 et ASS162 ; la devinette gravée en chute, ANT222 et ASS142).
- D : le document cité (11 sur 12), et sept pôles en mosaïque d'appoints. Les nombres sont tenus (3 récits sur 12), et le compte faux d'un ne sert qu'une fois (ANT075).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT156 | Lua-Kapu, le Cratère des Interdits | A | 82 | « Il a bon goût. » Le tapu qui riposte et les bêtes des coulées gâtées : deux jeux nets. La liste d'interdits croise D ASS028 (toléré : A raconte la liste, D la cite). |
| ANT151 | Yaku Pata, les Terrasses du Récif | A | 81 | « La cordelette ne disait pas comment on défait un nœud. » L'enchaînement de la Peste (contagion d'une carte à l'autre) est une place rare bien choisie. |
| ANT027 | Bīt-Erpeti, les Îles aux Nuées | A | 81 | Les bergers qui brûlent de l'encens pour que la brume revienne. La Clarté en rapaces du temple : un des trois pôles de rapaces du lot (toléré, voir arbitrages). |
| ANT205 | Les Plaines d'Emlotheni | A | 82 | « Celui que son propre feu reconnaît », chanté plus bas. |
| ANT114 | Beinvellir, la Savane des Arbres-Corail | A | 83 | Ketill mort de fièvre « en se plaignant des mouches », et la pierre jamais corrigée. Le meilleur récit de A. |
| ASS173 | Le Cabildo de Jaralenga | A | 82 | « La séance avait duré moins que la mèche. » Ombre et Lumière ne se touchent pas avec B ANT229 (même couple, même lande). |
| ASS120 | Le Fono des Glaces de Tai-Hukapapa | A | 81 | Le pôle construit sur `defausseAPrix` (7 cartes) tient dans le moteur : la récupération reprend la carte défaussée en prix. C'est le pôle sur crochet que demandait le lot 5. Validé. |
| ASS105 | La Chambre des Tables de Motiband | A | 82 | La Chambre vote que l'étoile est là, et les plongeurs la voient en bas. L'hésitation du Vide reste ciblée, et « tous » ne tombe jamais sur deux cartes voisines. |
| DON009 | Les Forges de Chernolesye | A | 80 | Les esprits « ont lu l'acte ». Le nom en « Les Forges de… » suit les Forges de sable noir d'Hinoura : toléré, le nom propre porte la différence. |
| DON099 | KwaPhuphe, les Marais des Songes | A | 82 | Les lits sur briques, plus hauts chaque saison. Les coups au hasard du tokoloshe sont l'une des deux places du lot. |
| DON028 | Ishikiri-dō, la Carrière sous la Glace | A | 81 | La loupe de glace oubliée sur la véranda. |
| CIT018 | Sabiyama-jō, le Château sur la Lave | A | 83 | « Armures en bon état, trésor vide. » L'or versé à l'assiégeant, en affaiblissement : la carte dit le récit. |
| ANT219 | Les Glaces chantantes de K'ayab Nal | B | 81 (79) | Le maillet vendu à un marchand qui n'a jamais appris à écouter. Prix 3/3 : −4 et +5 paient maintenant. |
| ANT229 | Le Cairn des Enchères de Sliabh Scáile | B | 81 (79) | Les voleurs rachètent leurs prises au tiers du prix. Le vol de vie (6 cartes) est l'une des deux places du lot. +4 paie en garde ennemie. |
| ANT234 | Les Mues blanches de Kaltenmoor | B | 80 (78) | La lettre au prince pour demander « un délai, et un chariot de sable ». −5 et +4 paient. Kaltenburg (C RES215) est renommé à cause de ce Kaltenmoor. |
| ANT143 | Les Perchoirs de Qurawit | B | 80 (78) | Les corbeaux qu'on a oublié de nourrir et qui houspillent. +5 paie en défausse. |
| ANT180 | L'Hospice du Wendeljoch | B | 81 (79) | Les pièces trempées dans le vinaigre, les marmottes qui passent sous la barrière. Aucun recoupement d'image avec A ANT151 (même couple). −4 et +6 paient. |
| ASS050 | Le Guet des Feux de Duanya | B | 79 (77) | La flotte qui dort, et le thé qui manque. Le récit en articles est la seule énumération qui reste chez B. −4 et +4 paient. |
| ASS080 | Le Triclinos de Lychnopétra | B | 80 (78) | « Ils ne l'ont pas été après. » La Famine est le seul pôle de pioche du lot. −5 s'exile, +4 nourrit aussi l'ennemi. |
| ASS174 | Le Kenbet des Roseaux de Pa-Mehet | B | 81 (79) | Le kenbet qui achète lui-même la récolte et fixe le prix. +5 paie en garde ennemie. |
| DON089 | La Monnaie haute de Silbertann | B | 80 | Le marchand reparti par la galerie sans garde. L'exil de la Vérité est à la fois sa famille et son prix (« La coupelle », +2) : validé, voir arbitrages. |
| DON091 | Les Barrages de Sheleqo | B | 80 (78) | « Ils ne se saluent pas. » Les troncs d'ambatch au hasard : place rare bien tenue. −5 paie en PV. |
| DON107 | Saltgrav, les Caves aux Morues | B | 81 (79) | « Dites-moi lequel vendre. » −5 et +4 paient. |
| CIT040 | Kâmpoul Sla, la Citadelle aux Pieds de pierre | B | 80 (76) | Le capitaine qui écoute les murs. Le récit en quarts doublait les articles d'ASS050 et reprenait « sonner creux » (C, lot 5) : il est réécrit. +4 paie. |
| ANT048 | Elatóessa, le Bois des Cassenoix | C | 82 | « Il connaît toutes ses bornes. Il ne sait plus ce qu'il y a mis. » La plus belle chute de C. |
| ANT067 | Tecciztlan, l'Îlot aux Conques | C | 80 (78) | Le banni qui hurle pour vous sauver des poissons-pierres. Renommé : « le Récif des Bannis » reprenait la Porte des Bannis. |
| ANT129 | Prasat Kânhchâk, le Temple au Miroir | C | 81 | La ligne fondue au revers du miroir. Brume/Clarté sans recoupement avec A ANT027. |
| ANT188 | Ca' Zelada, le Comptoir aux Mains nues | C | 80 (78) | Le verre rouge qui garde le froid. Renommé : le Comptoir aux Perles reprenait les Perles de Gainimh Gorm. La formule « ne triche pas… seulement » reste ici, et c'est ASS162 qui la rend. |
| ANT222 | Tozcatépetl, la Montagne à la Gorge | C | 81 | Les lapins siffleurs chassés de la montagne. Elle garde la devinette gravée, et ASS142 rend la sienne. |
| ASS095 | Le Tambo de Pampachaka | C | 79 (77) | La corde brune et le nœud défait avec les dents. L'hésitation de la Tyrannie est la seconde place du lot. La pioche passe de 4 cartes à 2 dans chaque pôle. |
| ASS141 | Halmyrà, le Parvis des Sauniers | C | 79 (77) | « On ne compte que les jours sans vent. » Renommé : la Synaxe des Sauniers suivait la Synaxe des Cires de Ktenaia. La pioche de la Tempête passe à 2 cartes. |
| ASS162 | La Curie de Fervidum | C | 80 (77) | Le cornet de verre terni. « Crispinus ne triche pas. Il joue seulement… » répétait ANT188 presque mot pour mot : la phrase est reprise. La pioche de la Vérité passe à 2 cartes. |
| ASS142 | Mädrä Gwädgwad, la Cité des Stèles | C | 79 (76) | L'Abysse creusé contre la stèle couchée. Le récit faisait 105 mots et finissait sur une seconde devinette gravée : Tsion Haylu « a commencé à creuser ». La pioche de l'Abysse passe à 2 cartes. |
| DON119 | Möögön-Agui, la Cave à la Louche | C | 80 (78) | La louche qui tient debout « portée par le poison ». Renommé : la Cave aux Outres reprenait les Outres d'Aiolopétra. |
| DON015 | Mélissárion, la Tour du Cellier | C | 81 (79) | Le moine muré, et la tour du cellier qui tient debout. Renommé : le Monastère des Ruches suivait la Citadelle des Ruches. |
| CIT022 | Wayraq'asa, la Forteresse des Voix | C | 80 (78) | « Votre mère, cette nuit, monte la route. » La pioche de la Raison passe de 4 cartes à 2 (+2 et +4 donnent garde et affaiblissement). |
| ANT115 | Les Hampes de Rumi-Tika | D | 81 | « Elle fleurit encore. » Le vol de vie sur 7 cartes est l'une des deux places du lot : le moteur ne le bloque pas sur lui-même, et le pôle mêle bêtes, dégâts à tous et crochet `vol`. |
| ANT074 | Kirî-Ešnun, les Jardins des Coupeuses | D | 80 | « Plus larges que mes épaules. » Le Chaos sans famille principale tient par les coups au hasard et les bêtes payées. |
| ANT075 | Les Concrétions de Yuraq-Machay | D | 80 (79) | Neuf galets pour huit gardiens, le seul compte faux d'un de D. Le Corail sur crochet `bete` (5 cartes) est validé. L'Os est une mosaïque (mana, exil, marque). Le récit faisait 101 mots. |
| ANT104 | Inqilf-Meda, la Plaine du Rêve commun | D | 80 (77) | Les bœufs aux sabots mouillés. L'Éveil était le septième pôle de garde du héros : il devient la marque (« ce qui ne dort plus regarde »). Renommé : la Plaine des Dormeurs suivait la Chaussée des Dormeurs. |
| ANT182 | Khet-Neheh, la Forêt aux Mâts | D | 80 | « Il va bien. Il ne veut plus partir. » La Liberté en récupération et coups au hasard : un jeu mince, mais lisible. |
| ASS144 | Fondasecca, le Collège des Eaux | D | 81 | « Zuane le crie à l'eau, qui écoute. » La Sécheresse payée en PV sur 7 cartes, avec `blesse` : le meilleur pôle sur prix du lot. |
| ASS154 | Le Bargad de Kishtpur | D | 78 | « Ce matin, il y en avait sept. » Les deux pôles sont des mosaïques d'appoints : le prix en défausse ou en soin ennemi ne nourrit rien. |
| ASS058 | Le Banc des Jours de Sak-Tz'ib | D | 80 | « Il était déjà tracé. » L'almanach croise A ASS105 (toléré). La Raison est une mosaïque. |
| ASS028 | L'Imbizo d'eMatsheni | D | 82 | « On ne leur parle pas. Ils répondent. » |
| DON121 | Ta-Wehat, la Tombe aux Pas | D | 82 | Les petits pas nus qui ne reviennent pas. La Cendre en marque avec 5 dégâts ciblés : c'est permis en Donjon, et le crochet `pietine` les justifie. |
| DON078 | Veal Chhngai, le Réservoir sous les Dunes | D | 78 (77) | « Il ne pleut jamais ici. » Le récit faisait 103 mots. Les deux pôles sont des mosaïques d'appoints. |
| CIT034 | Belolëd, la Citadelle du Glacier | D | 80 | Les morts debout dans la glace qui ont « l'air d'attendre la relève ». |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 81,7 (81,7).** Aucune correction. A tient toutes les leçons et choisit ses places rares pour le récit. A a la prose la plus sûre du lot et une seule réserve : des cartes de même facture partout (4 dégâts ciblés, 3 appoints, 1 crochet `si` sur 3 cartes).
- **B, 80,3 (78,3).** De très bons récits marchands. Mais les prix étaient au plus bas, avec deux énumérations et six récits-documents. 17 cartes et 4 fiches corrigées.
- **C, 80,2 (78,5).** Les meilleures chutes courtes (ANT048, CIT022). Mais cinq noms à changer, la pioche réflexe en Assemblée, deux formules répétées et le « vous » dans la moitié des récits.
- **D, 80,2 (79,8).** Des récits d'horreur précis (ASS028, DON121, ANT182). Les nombres sont enfin tenus. Mais sept pôles sans colonne vertébrale, le document cité partout, et la garde du héros laissée en trop.

**Ressources (64)** : A 81, B 80 (79), C 80, D 80 (79). Les tables de gestes et d'objets ont bien servi, mais deux recoupements leur avaient échappé :
- **Gauler ou battre les branches au-dessus d'une toile** servait trois fois : D RES010 (les olives, au-dessus des bâches pendues dans le vide), D RES027 (l'argousier, au-dessus des peaux) et B RES288 (le tamarin gaulé à la perche). RES010 garde le geste. Dans RES027, on coupe les rameaux, on les fait geler sur le toit des yourtes et on gratte les baies au couteau. Dans RES288, on ramasse les gousses tombées.
- **Le prénom « Pankratios »** sert au frère de B RES224 et au moine de C DON015. Celui de B devient Nikodimos.

## Arbitrages demandés

- **Garde du héros à 7 pôles** (A DON009 +, B ANT143 + et ANT180 −, C ANT222 − et CIT022 +, D ANT104 + et ASS028 +) : **tranché contre le dernier à écrire, D, comme il le proposait.** ANT104 + (Éveil) devient un pôle de marque :
  - +1, +3, +5, +6 et +7 marquent ; la forme ultime marque tous les ennemis.
  - La riposte reste sur 4 cartes et les bêtes sur 4.
  - La garde du héros ne reste que sur +2 et +7, ce qui ne crée pas un quatrième appoint de garde chez D.
  - L'Éveil n'avait jamais joué la marque dans les lots 1 à 5 (vérifié au script).
  - Lot après correction : garde du héros 6, marque 6.
- **Places rares, recomptées au script** (réveil et `si` compris) :
  - hésitation 2 : A ASS105 − (7 cartes), C ASS095 − (7) ;
  - coups au hasard 2 : A DON099 − (7), B DON091 + (7) ;
  - vol de vie 2 : B ANT229 − (6), D ANT115 + (7) ;
  - enchaînement 2 : A ANT151 − (6, dont 5 `cartesJouees`), B ASS050 + (6) ;
  - écho 0.

  **Validé.** Le vol de vie de D sur 7 cartes est accepté : `volVie` n'est pas bloqué par le moteur sur lui-même, à la différence de l'écho.
- **Plafond de 6 pour les autres familles, après correction** :
  - à 6 : garde du héros, riposte, garde des alliés, soin du héros, affaiblissement, brûlure, marque ;
  - à 5 : mana, perce-garde, exil ;
  - soin des alliés 4, pioche 1 ;
  - en vocation : invocations 11, gros coups de Donjon 7.

  **Validé**, mais sept familles pleines : voir la leçon 1.
- **Crochets sur 5 cartes ou plus** : A ASS120 − (`defausseAPrix`, 7 cartes) et D ANT075 + (`bete`, 5), un par conteur et deux conditions différentes. C'est permis par la leçon 3 du lot 3. **Les deux sont validés** : ASS120 − fonctionne dans le moteur (le prix d'une carte nourrit la suivante, et la récupération reprend la carte défaussée), et ANT075 + a ses bêtes pour remplir son crochet. Les deux pôles d'enchaînement (ANT151 −, ASS050 +) sont comptés comme famille, pas comme crochet.
- **C, pioche des Assemblées** : C avait lu la vocation d'Assemblée comme une exemption au plafond d'appoint. **Non** : la leçon 6 du lot 4 vaut pour toutes les familles. La pioche reste en appoint dans trois pôles, où elle porte le jeu :
  - ASS141 +, le Calme du mana et de la récupération ;
  - ASS162 −, le Mensonge qui s'exile ;
  - ASS142 +, la stèle qui désigne.

  Ailleurs, elle descend à 2 cartes au plus. Les points rendus vont à la famille principale du pôle : hésitation et affaiblissement (ASS095 −), soin des alliés (ASS095 +), brûlure (ASS141 −), garde des alliés (ASS162 +), soin du héros (ASS142 −), garde du héros (CIT022 +).
- **C, « recette » lue comme une tournure et non comme un archétype** : les six archétypes (le « vous », la fable-règle, le faux coupable, la maison de jeu, le butin à clause, la devinette) reviennent deux fois chacun. **Toléré comme voix du Sournois**, mais deux paires étaient presque mot pour mot et sont corrigées du côté le plus récent :
  - « X ne triche pas. Il … seulement » (ANT188, ASS162) : corrigé dans ASS162 ;
  - la devinette gravée en dernière phrase (ANT222, ASS142) : corrigé dans ASS142, dont le récit était aussi trop long.
- **Noms trop proches, renommés du côté le plus récent** :
  - C ANT067 : Tecciztlan, l'Îlot aux Conques ;
  - C ASS141 : Halmyrà, le Parvis des Sauniers ;
  - C DON119 : Möögön-Agui, la Cave à la Louche ;
  - C ANT188 : Ca' Zelada, le Comptoir aux Mains nues ;
  - C DON015 : Mélissárion, la Tour du Cellier ;
  - D ANT104 : Inqilf-Meda, la Plaine du Rêve commun (« des Dormeurs » suivait la Chaussée des Dormeurs de Veal Ambel) ;
  - C RES215 : les Escargots de Rabenmauer (Kaltenburg, contre B Kaltenmoor, même culture gothique).

  Les titres de section et les tableaux de prose de C et de D suivent. Tolérés : « Les Forges de Chernolesye » (A, après les Forges de sable noir), « les Terrasses du Récif » (A), « Prey » dans deux noms khmers de Ressources (A RES316, B RES381 : le mot veut dire forêt).
- **A ASS120 −, crochet sur 7 cartes** : validé (voir plus haut). Le −1 reste jouable seul : il donne garde, affaiblissement et soin, et c'est la récupération qui attend une défausse.
- **D ANT075 +, crochet `bete` sur 5 cartes** : validé.
- **D DON121 −, marque sur 7 cartes et dégâts ciblés sur 5** : permis en Donjon (5 au plus, `si` compris). Les dégâts suivent le crochet `pietine` et ne servent pas de lest. **Validé.**
- **B DON089 + « La coupelle », exil à la fois famille et prix** : l'exil compte 3 points de prix dans la table commune et a été famille principale dans 6 pôles du lot 5. Ici, c'est l'échantillon fondu à l'essai : la carte dit le récit. **Validé.** Mensonge/Vérité est partagé avec C ASS162 : l'exil est sur la Vérité chez B et sur le Mensonge chez C, et le mot de pôle ne partage donc pas sa famille. Validé aussi.
- **Récits en énumération** : B ASS050 (articles) et B CIT040 (quarts), plus trois chez D (ANT075, DON078, ASS058). **CIT040 est réécrit** : on garde le capitaine, les archers, les cristaux et les murs qu'on écoute, sans énumération ni « sonner creux ». ASS050 et les trois énumérations de D sont tolérées (formes différentes : articles, niches, lettres de plan, noms de jours).
- **Rapaces** (A ANT027 + : aigles, milan, faucon et vautour du temple ; B ANT229 + : émerillon et busards ; B ANT234 + : gerfauts de fauconnerie) : **toléré**. Les trois pôles jouent trois rôles différents : les oiseaux du ciel nu, le soleil qui montre la bête, la marchandise vivante. Mais trois pôles de rapaces dans un lot, dont deux chez B, c'est la limite : voir la leçon 7.
- **D, douze pôles « sans famille principale »** : voir le défaut de fond 4. Cinq ont un vrai jeu ; sept sont des mosaïques. **Toléré** pour ce lot, sans réécriture, parce qu'aucune zone ne tombe sous 70. Les notes d'ASS154 et de DON078, dont les deux pôles sont en mosaïque, descendent à 78.
- **Table de budget : `ennemiSoin`** : A le comptait 2,2 n, B, C et D 2 n. La forme ultime CIT040 +7 passait de 45,2 à 44,8 selon la table. **Tranché à 2 n**, comme `ennemiGarde` (consignes-cartes, section 3) : les deux prix touchent « chaque ennemi ». Aucun budget de A n'en sort de la tolérance.
- **Prix de B** : voir le défaut de fond 2. Le prix ajouté est toujours celui du pôle (PV, défausse, garde ou soin ennemi, bête, exil), et l'effet principal de la carte est relevé d'autant : 17 cartes, recalculées au script.
- **Prénoms** : un seul doublon, Pankratios (B RES224, C DON015), corrigé chez B (frère Nikodimos). Aucun autre prénom ni mot d'institution n'est en double (relevé au script sur les récits et les ambiances).
- **Nombres** : la liste commune a tenu. Seuls « deux » et « trois » (courants) et l'adjectif « neuf » reviennent. D a un nombre précis dans 3 récits sur 12, B quatre (treize, onze, six, dix), A et C aucun.

## Défauts de fond (au-delà des corrections)

1. **Les plafonds sont encore pleins, et le septième pôle a été laissé au suivant.** Sept familles sont à 6 pôles. Chaque conteur a vu le dépassement de la garde du héros et a écrit « la place de trop revient au dernier ». Les cartes des familles se mettent à jour, mais elles ne se ferment jamais.
2. **Chaque leçon a trouvé sa dispense.** Vocation d'Assemblée pour la pioche (C), égalité des prix tenue au plus bas (B), « pôle construit sur un prix » sans paiement du prix (D). Les leçons disent un plafond, et les conteurs cherchent le cas qui n'y est pas.
3. **La forme du récit s'uniformise entre conteurs** (le document cité, l'énumération), comme la forme des cartes s'était uniformisée au lot 5. Les listes communes de nombres, de prénoms et d'institutions marchent. Il faut la même chose pour les formes de récit.
4. **Des pôles en mosaïque.** Quatre appoints de 3 ou 4 cartes, sans famille ni crochet porteur, respectent toutes les règles et ne donnent pas de jeu. C'est le risque des pôles « sans famille principale » que demandait le lot 5.
5. **Les noms.** Le validateur des conteurs compare le nom entier. Il faut aussi comparer la seconde moitié (« des Bannis », « des Ruches », « Synaxe ») et les préfixes de lieu (Kalten-).

## Corrections faites (50 objets modifiés : 34 cartes et 16 fiches, plus les lignes de prose « Familles », « Style » et les notes des pôles touchés)

**Pôle réécrit**
- **ANT104 +** (D) : +1, +3, +4, +5, +6, +7 (marque au lieu de la garde du héros).

**Pioche de C (11 cartes)**
- ASS095 −2, −4, +3, +5 ; ASS141 −1 ; ASS162 +2, +6 ; ASS142 −4, −6 ; CIT022 +2, +4.

**Prix de B (17 cartes)**
- ANT219 −4, +5 ; ANT229 +4 ; ANT234 −5, +4 ; ANT143 +5 ; ANT180 −4, +6.
- ASS050 −4, +4 ; ASS080 −5, +4 ; ASS174 +5.
- DON091 −5 ; DON107 −5, +4 ; CIT040 +4.

Les budgets de ces cartes sont recalculés au script (« recalculé par le critique »), et leurs tags sont mis à jour (Pioche retiré, Prix ou Marque ajouté).

**Fiches**
- Zones :
  - noms : ANT067, ASS141, DON119, ANT188, DON015 (C) ; ANT104 (D) ;
  - récits : ASS142 (longueur et devinette), ASS162 (formule), CIT040 (énumération), ANT075 et DON078 (longueur).
- Ressources :
  - RES215 (nom, C) ;
  - RES224 (prénom, B) ;
  - RES288 (geste et deux `pal`, B) ;
  - RES027 (geste et deux `pal`, D) ;
  - RES304 (longueur, D).

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 112 fiches (48 zones et 64 Ressources) et 672 cartes, soit 48 zones à 14 cartes (pôles − et +, paliers 1 à 7).
- Chaque effet fait 250 caractères ou moins. Chaque ambiance compte 12 à 20 mots, chaque récit 60 à 100 mots (30 à 50 pour une Ressource), chaque `pal` 160 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2. `"cible":1` figure partout où une opération ou une condition vise la cible. Le tag Loi est conforme.
- Aucune condition n'est remplie par la carte elle-même avant son `si`, ni testée sur `defausseCommune` ou `recupCommune`.
- Budgets : 0 écart au-delà de ±15 % sur les paliers 1 à 6. Chaque forme du palier 7 est entre 45 et 55 de base, avec un réveil de 60 à 100 %, une résonance posée, une réveillée, une phrase d'ouverture de 3 à 6 mots et un prix.
- Familles :
  - plafonds tenus (rares 2, autres 6) ;
  - appoints à 3 pôles au plus par conteur, pioche comprise ;
  - un crochet sur 5 cartes ou plus par conteur au plus ;
  - dégâts ciblés sur 4 cartes au plus par pôle (5 en Donjon) ;
  - « tous » sur 3 cartes au plus ;
  - écho et récupération sur 4 cartes au plus ;
  - aucune zone dont les deux pôles partagent une famille principale ;
  - aucune famille principale déjà jouée par le même mot de pôle dans les lots 1 à 5.
- Prix : 4 cartes sur 7 au moins dans chaque pôle, à une carte près entre les deux pôles de chaque zone.
- Les 112 noms du lot sont uniques entre conteurs et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés.

**Non bloquant, laissé tel quel** : les formats d'identifiant diffèrent encore (`-moins-1` et `-moins7` chez A, `-moins1` chez B, `-moins-7` chez C et D). Le format des fiches diffère aussi : JSON indenté chez D, multiligne chez A. `assembler.py` lit les deux.

## Leçons pour le lot 7 (à ajouter aux consignes)

1. **Une carte des familles se ferme.** À une heure fixée, avant les cartes, le dernier inscrit sur une famille pleine change la sienne. Un pôle au-delà du plafond est repris par son auteur avant la remise, jamais « laissé au suivant ».
2. **Quatre cartes à prix au moins sur sept par pôle** (environ deux sur trois), comptées au script, en plus de l'égalité entre les pôles.
3. **Aucune vocation n'exempte du plafond d'appoint.** La pioche des Assemblées, comme les autres familles, est en appoint (3 ou 4 cartes) dans 3 pôles au plus par conteur.
4. **Un pôle sans famille principale a une colonne vertébrale** : un crochet sur 4 cartes ou plus, ou un prix que le pôle paie et dont il profite (`prixDefausse` et `defausseAPrix`, `prixPV` et `blesse`, `prixBete` et `bete`). Sinon, il prend une vocation de son type. Pas de mosaïque de quatre appoints.
5. **Les formes de récit entrent dans la liste commune**, comme les nombres et les prénoms. Chaque forme de document (liste d'interdits, inventaire, almanach, procès-verbal, lettre, règlement, relevé) sert une fois par lot. Le document cité ne dépasse pas 4 récits par conteur, et l'énumération (articles, quarts, lettres, jours) 2 récits dans le lot.
6. **Les noms se comparent par moitié.** La seconde partie d'un nom (« la Porte des Bannis », « la Citadelle des Ruches ») ne revient pas, même avec un autre lieu. Un préfixe de lieu (Kalten-, Prey) ne sert qu'une fois par lot.
7. **Tics à surveiller** : le « vous » de C dans 3 récits au plus ; une famille d'animaux (rapaces, singes, cervidés) dans 2 pôles du lot au plus ; un même geste de Ressource (gauler ou battre des branches au-dessus d'une toile) une fois par lot, toutes tables confondues.
8. **Table commune** : `ennemiSoin` n = 2 n, comme `ennemiGarde`.
