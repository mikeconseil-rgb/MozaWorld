# Critique du lot 7 : 48 zones à cartes et 55 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 6), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, plus `hesite` dans `zonesplus.js`, lus sans rien y changer). Les lots 1 à 6 ont servi de référence pour les pôles en double (2 688 cartes recomptées au script), et les fichiers familles_A.md à familles_D.md pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,8 / 100** (80,0 avant). Aucune zone refusée et **aucune zone sous 70** : aucune n'est donc réécrite en entier. Sept pôles sont réécrits presque en entier :
- les cinq pôles de vocation que C reprenait **à lui-même** sur le même mot : ANT103 − (Mensonge), ANT136 + (Or), ANT212 + (Festin), DON127 − (Ruine), DON117 + (Chant) ;
- le plus faible des onze pôles « en colonne vertébrale » de D, **ANT153 − (Pierre)**, qui passe à l'exil ;
- **ASS106 − (Tempête, D)**, dont le crochet `vol` devient `blesse`, nourri par le prix en PV que le pôle paie déjà.

La mécanique est la plus propre des sept lots. Avant correction, le validateur (longueurs comptées en mots, ordre des opérations, conditions du moteur, `mana` ≤ 2, tag Loi, `"cible":1`, budgets, palier 7) ne trouvait **qu'une erreur** : ANT064 −2 (D) lisait `hesiteAvant` après l'hésitation qu'elle venait de poser, donc toujours vraie. Aucune longueur hors borne, aucun budget hors de ±15 %, toutes les formes du palier 7 entre 45 et 55 de base avec un réveil de 60 à 100 %. Les leçons du lot 6 ont porté :
- chaque pôle a 4 cartes à prix au moins (5 à 7 partout), à une carte près entre les deux pôles ;
- les appoints tiennent à 3 pôles par conteur, pioche comprise ;
- les formes de document ne se croisent plus (douze documents, douze formes) ;
- aucun nom ne reprend la seconde moitié d'un nom en jeu.

Les récits restent la force du lot :
- le percepteur « qui était l'ancien plaignant » (ANT203) ;
- « On n'a jamais peint le printemps » (ANT235) ;
- le songe de feu rayé à la veille de l'éruption (ASS003) ;
- Gunnvor qui accepte toujours « de goûter la première » (ANT244) ;
- l'amende pour faux témoignage, « à parts égales aussi » (ASS164) ;
- le refrain où Bairam change un seul mot (DON117) ;
- la stèle gravée avant la mort d'Iuput, « ni par qui » (ASS137).

Le défaut neuf du lot vient des plafonds eux-mêmes : **douze familles sont à 6 pôles**, c'est-à-dire pleines. Il ne restait plus que les places rares, et chacun a trouvé sa porte :
- C a pris des vocations, y compris sur des mots où il les avait déjà jouées ;
- D a construit onze pôles sur une colonne vertébrale, dont trois sur la seule intention de l'ennemi.

Après correction, le lot compte **17 pôles sans famille principale** (A 3, B 1, C 3, D 10). Chacun a maintenant un prix dont il profite ou un crochet sur 4 cartes au moins, mais c'est un pôle sur six.

Les défauts de fond :

1. **Les vocations comme dispense (C).** Sept pôles de C (5 d'invocations, 2 de gros coups) reprenaient une vocation déjà principale pour le même mot. Cinq de ces reprises étaient les siennes : Mensonge (ANT193, lot 5), Or (ANT110, lot 4), Festin (ANT068, lot 3), Ruine (DON015, lot 6) et Chant (DON103, lot 5). Tranché et appliqué, voir les arbitrages.
2. **Onze pôles en colonne vertébrale chez D.** Ils sont tous dans la lettre de la leçon 4 du lot 6 (crochet sur 4 cartes), mais tous n'ont pas un jeu. Jugés un par un, voir les arbitrages : un pôle réécrit (Pierre), un crochet changé (Tempête), neuf validés.
3. **Des collisions d'intrigue, que la liste commune des formes ne voit pas.** Elle compare les étiquettes (« l'ordre mal transmis », « la consigne mal comprise »), pas les histoires :
   - A CIT021 et B CIT037 racontaient la même chose : un commandant de Citadelle crie un ordre, on le comprend mal, on allume un feu partout, et il garde son rang (« il avait donné le bon ordre », « n'a jamais corrigé l'ordre ») ;
   - A ANT107 et C ANT128 finissaient sur la même phrase, à propos de la même boisson offerte (« ne se plaignent jamais de la bière » ; « ne se plaignent jamais de rien ») ;
   - D ANT064 et D CIT011 ouvraient de la même façon (« Dumisani était petit quand… », « Necahual était petite quand… »).
4. **Des familles d'animaux plus fines que la liste des conteurs.** Les crustacés, coléoptères et pinnipèdes étaient réglés ou presque, mais le recompte au script sur les noms d'invocation trouve d'autres familles au-delà de 2 pôles : rongeurs 5, mustélidés 4, ours 3, félins 3, lézards 3, équidés 3, gallinacés 3. Corrigé, voir les arbitrages.
5. **Des noms qui reprennent le mot principal d'un nom du lot** : la Plaine des Gnous et la Plaine des Tussacs, le Rempart des Embruns et le Rempart de la Pluie, la Garnison des Décombres et la Garnison des Dattiers. Il y a aussi « Fortezza », la traduction de « Forteresse » (deux noms en jeu). Renommés du côté le plus faible.

Réflexes de gabarit, un par conteur :
- A : la prose la plus sûre, et toujours la même facture de cartes. Le prix est sur 6 ou 7 cartes partout, et le crochet sur 2 ou 3 cartes partout, sauf la Raison.
- B : la vente et l'argent dans 9 récits sur 12 (pesée, saisie, ambassade, marché). C'est la voix de l'Explorateur, mais les chutes se ressemblent : quelqu'un paie, ou ne paie pas.
- C : la ruse marchande. Trois récits vendent un objet (l'ancre deux fois, la porte fermée, les étoiles au dirham). Et la vocation prise pour une sortie.
- D : l'enfant témoin (ANT006, ANT064 et, avant correction, CIT011) et le « Moi, X » en ouverture (ASS011, DON109). Les nombres sont tenus (3 récits).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT107 | Draugakjarr, la Mangrove des Revenants | A | 82 | Le vol de vie des noyés qui boivent, l'une des deux places rares du lot. La chute reste ici : c'est C ANT128 qui la rend. |
| ANT111 | Nirivik, la Plaine des Gnous | A | 81 | « C'est le seul repas qui revienne. » La chasse racontée est proche du plongeur de B ANT160 : toléré, voir les arbitrages. |
| ANT203 | Apparu-Nadû, l'Îlot du Ban | A | 83 | Le percepteur « qui était l'ancien plaignant ». Le Foyer sur crochet `garde` (4 cartes), nourri par la garde du héros : une vraie colonne. Le chat devient une mangouste (félins). |
| ANT224 | Yancheng-fei, la Ville aux Druses | A | 82 | Les cavaliers qui emportent quelques druses. La Pierre en mana, le Cristal en riposte : rien ne croise D ANT153 (même couple). |
| ANT235 | Dongmian Feng, le Pic des Dormants | A | 83 | « On n'a jamais peint le printemps. » Le Sommeil (`prixBete` et `bete`) est validé. Les marmottes du Sommeil deviennent des hérissons et un ourson ; celles de l'Éveil restent. |
| ASS077 | La Douma de Pustogorod | A | 81 | La charte remontée du puits chaque printemps. |
| ASS003 | Le Khwabkhana de Dudpahar | A | 82 | Le songe de feu rayé d'un trait propre, à la veille de l'éruption. |
| ASS165 | La Junta d'Escarchavega | A | 81 | Doña Leonor qui ne regarde jamais la Fuente. |
| ASS163 | Le Hui de Wai-Marama | A | 80 | Le débat raconté, sans discours direct : ce n'est pas un des récits en dialogue. Le fleuve qui tranche. |
| ASS112 | Le Thing de Fúlahóll | A | 81 | Ragnfríðr, « qui les a tous perdus », fauche la plus belle herbe. |
| DON114 | Yakhchal-e Behzad, le Donjon de l'Architecte | A | 82 | Le devis sans feu. La Raison sur `pietine` (6 cartes) est validée : chaque carte garde un effet sans le crochet. |
| CIT021 | Kab'an Witz, le Rempart des Embruns | A | 82 | L'ordre mal transmis reste ici, A l'avait inscrit le premier. B CIT037 change son récit. |
| ANT012 | Kastorochori, la Digue des Castors | B | 80 | « Leontios a pesé la dent aussi. » Les castors restent : ce sont, avec les marmottes de A, les seuls rongeurs du lot. |
| ANT049 | Les Haras impériaux de Qingcao-tan | B | 80 | La fiche de remonte. La Peste (`prixPV` sur 5 cartes, `blesse` sur 4) a un vrai jeu : validée. |
| ANT220 | Eisenzell, la Chapelle de fonte | B | 81 | « Valeur de la chapelle : nulle. » |
| ANT160 | La Coralina de Puerto Escarcha | B | 80 | « Le patron dit qu'il a eu froid. » Les buccins à la place des crabes. |
| ANT028 | La Ferrería de Peñanegra | B | 80 | Le charbon qui sonne comme une cloche fêlée. |
| ANT244 | Hvítasandr, les Chaudières à sel | B | 82 | Les deux pots qu'on distingue au poids. Le meilleur récit de B. L'exil du Poison, à la fois famille et prix, est validé (même cas que DON089 au lot 6). |
| ASS181 | Le Bergamt de Rotklamm | B | 80 | L'avis de saisie et l'argent fondu « pour en tenir le cours ». |
| ASS079 | Pātītī-nui, les Tussacs du Rāhui | B | 80 (79) | Les voleurs qui partent pendant le chant. Renommé : « la Plaine des Tussacs » doublait la Plaine des Gnous. |
| ASS089 | L'Óenach des Pins de Ros Giúise | B | 81 | Les dormeurs qui se réveillent « arrangés ». |
| DON053 | Las Cuchillas del Cerro Alcabú | B | 79 | Encarna qui pose ses étais puis s'assied. Dégâts ciblés à 5 dans les deux pôles (toléré, voir les arbitrages). |
| DON034 | Kello-Shoyo, le Royaume des Fossés | B | 79 | L'envoyé qui attend jusqu'à la lune nouvelle. Dégâts ciblés à 5 dans les deux pôles. La brûlure écrite « saigne » est acceptée. |
| CIT037 | Asagiri-jō, la Garnison des Décombres | B | 79 (74) | Le récit rejouait A CIT021 (voir le défaut 3). Il devient le marché de la brume : le meunier payé pour fermer les vannes, puis pour les ouvrir. +5 et +6 changent de nom et d'ambiance. |
| ANT103 | Stagnum Aufidium, le Ponton des Témoins | C | 81 (77) | « Un homme qui croit si vite un mensonge doit en avoir l'usage. » Le Mensonge reprenait la vocation de C au lot 5 : il est réécrit sur une colonne (l'ennemi se garde devant la fausse menace, et `cibleGarde` en profite). |
| ANT136 | Ryðsker, l'Ancre vendue | C | 80 (77) | Sigrún qui vend « pas un pouce de plus ». L'Or (vocation de C au lot 4) devient la vente : un prix en défausse dont profite `defausseAPrix`. Plus de phoque. |
| ANT128 | Wermutsfels, le Couvent de l'Absinthe | C | 81 (80) | La recette et l'aconit. La dernière phrase reprenait A ANT107 : « Ceux qui reviennent redemandent la même coupe. » |
| ANT084 | Eremosíderon, le Verger des Oryctes | C | 80 (78) | « Il l'a vendue fermée. » Renommé (la Garnison des Dattiers). Le gecko devient un rollier, le mulet une chamelle. |
| ANT212 | Cecetlan, la Sapinière des Dettes | C | 81 (78) | « Elle a beaucoup maigri. » Le Festin (vocation de C au lot 3) garde 4 bêtes et prend le crochet `bete` sur 4 cartes. Le carcajou devient un loup maigre. |
| ANT083 | Kahf Zaynab, la Voûte des Vers luisants | C | 81 | Le seul « vous » de C. |
| ASS164 | Oileáin Cheo, le Siège du Brehon | C | 82 | L'amende « à parts égales aussi ». |
| ASS042 | Aschenbruch, le Plaid des Échevins | C | 81 | Ruprecht à la main bandée. |
| ASS126 | Ucha'an Tun, le Seuil des Absents | C | 80 | L'interrogatoire sans narrateur. C'est l'un des deux vrais récits en dialogue du lot (toléré). |
| DON127 | Qanṭarat Lubna, le Bail des Rizières | C | 81 (78) | « Il le trouve très bien écrit. » La Ruine reprenait les gros coups de DON015 (C, lot 6). Elle devient les coups au hasard (la crue qui jette ce qu'elle emporte), seconde place du lot. |
| DON117 | Qārchābād, la Dargah des Spores | C | 82 (79) | Le refrain où Bairam change un seul mot. Le Chant (gros coups de C au lot 5) devient l'enchaînement, seconde place du lot. |
| CIT043 | Isola Calbo, les Margelles de la Pluie | C | 80 (78) | « S'il pleuvait trop. » Renommé : « Fortezza » et « le Rempart de la Pluie ». |
| ANT088 | Le Templum de Vacuna | D | 80 | « Personne ne le lui a ordonné. » Le Vide sur `seul` (4 cartes), servi par 3 cartes de dégâts à tous : validé. |
| ANT153 | Kamenogrib, le Bois des Têtes grises | D | 80 (76) | « Il dort debout, appuyé à la porte. » La Pierre était le plus faible des onze pôles de D. Elle passe à l'exil (6 cartes) : ce qui s'assied se pétrifie et quitte le combat. Le loir, la martre et l'ours deviennent un cloporte, un faon et un élan. |
| ANT233 | Ükhelt-Uul, le Cône des Licous | D | 81 | « Ne ris pas. Regarde leur dos. » La Mort (`prixBete` et `bete`) est une vraie colonne. La Vie sur `elan` (la harde qui reçoit la charge) est validée de justesse. La gerboise devient un pika. |
| ANT006 | eButhongweni, la Lande des Bergers couchés | D | 82 | « Il ne m'appelle plus par mon nom. » Le Sommeil (défausse et `defausseAPrix`) est validé. Les pintades deviennent des ibis. |
| ANT064 | KwaManga, la Crique des Seiches | D | 80 (78) | L'oncle qui part avec la glace. −2 lisait sa condition après l'hésitation qu'elle venait de poser : corrigé. |
| ASS137 | Mer-Kheper, la Salle des Cèdres rouges | D | 82 | L'épitaphe gravée « avant la mort d'Iuput, ni par qui ». L'enchaînement du Sang (`cartesJouees` 5, `troisCartes` 1) compte comme famille, pas comme crochet. |
| ASS011 | La Diète de Kettenfjord | D | 81 | « Certains matins, elle est mouillée. » La Liberté (garde ennemie et `cibleGarde`) est validée. |
| ASS133 | L'Ibandla de Kwesine | D | 80 | Les vieux revenus « au complet ». Deux colonnes dans la même zone (PV et `blesse` ; garde et `garde`), toutes deux réelles. |
| ASS106 | Le Jharokha de Zamharir | D | 80 (77) | « Certaines reviennent signées. » La Tempête n'avait qu'un crochet `vol` sur une mosaïque d'appoints. Le crochet devient `blesse` : le pôle paie déjà des PV sur 7 cartes. |
| ASS019 | Le Yoriai de Kurayabu | D | 80 | La natte de plus dans le cercle. C'est le second récit en dialogue du lot (toléré). Les coups au hasard de l'Ombre sont une place rare. |
| DON109 | Hesperonèsos, la Tour des Brûlots | D | 81 | La barque d'argent qui pèse plus lourd chaque année. |
| CIT011 | Cocoliztlan, la Citadelle des Fièvres | D | 80 (78) | « Il ne transpire plus. » Le récit ouvrait comme ANT064 : il passe au présent, et Necahual porte le brasero. Les deux pôles sont des colonnes nourries par le pôle (brûlure et `brule` ; hésitation et `hesite`). |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 81,7 (81,7).** Seulement deux bêtes changées et deux noms de Ressources. A tient toutes les leçons et a écrit en premier les formes et les chutes que d'autres ont croisées.
- **B, 80,1 (79,6).** De bons récits marchands et des prix enfin tenus (5 à 6 sur 7). Un récit à refaire (CIT037) et un nom.
- **C, 80,9 (79,1).** Les meilleures chutes courtes (DON127, ANT212, ASS164). Mais cinq vocations reprises à lui-même, deux noms et une chute.
- **D, 80,6 (79,7).** L'horreur la plus précise du lot (ASS137, ASS011, ANT006). Mais onze pôles sans famille principale, une condition morte, deux ouvertures pareilles et trois Ressources sur des objets déjà pris.

**Ressources (55)** : A 80 (79), B 80 (79), C 80 (79), D 79 (77). Les tables de gestes ont tenu, mais pas celle des **objets** :
- **l'eau** : B RES221 (l'eau douce des sources sous la mer) et D RES110 (l'eau de nuée bue par des toiles). Le geste diffère, l'objet est le même (leçon 8 du lot 3). D, inscrit le dernier, change : RES110 devient **les Kakis de Kasumijima**, massés à la main sous l'avant-toit ;
- **les galets fendus** : A RES249 (les galets du four qui éclatent au feu) et D RES326 (les galets fendus par le gel, pour les frondes), avec deux images de tas de galets ouverts. RES326 devient **les Queñuas de Sach'a-Rit'i**, dont on effeuille l'écorce rouge pour allumer les feux des cols ;
- **les poissons qui sèchent en guirlandes** servaient deux fois chez C (RES159 et RES078). Les carpes de RES078 sont maintenant fumées sous le toit des yourtes et rentrent en barque.

Les noms de trois Ressources ouvraient comme des noms déjà en jeu : « Les Pierres de… » (cinq fois en jeu), « Le Bois… », « Les Sources… » (la Source d'Uunnaq). Ils deviennent **les Galets du four de Maunga Umu** (A RES249), **les Crocs de Kār-Tiāmti** (A RES004) et **les Résurgences de Tilmun-ṣeḫru** (B RES221).

## Arbitrages demandés

- **Vocations reprises par le même mot (C)** : **tranché.** Une vocation (invocations des Antres, gros coups des Donjons) suit la règle des mots de pôle comme une famille. Il y a une seule souplesse : toute Antre doit invoquer, donc un mot qu'un *autre* conteur a joué en vocation peut la reprendre une fois, avec d'autres bêtes et un autre crochet. **Un conteur ne reprend jamais sa propre vocation sur un mot qu'il a déjà joué.** Appliqué :
  - **gardés** : Poison − (ANT128, après D ANT115 au lot 6 ; péliades et méloés contre d'autres bêtes, crochet `blesse` contre `brule`) et Bois + (ANT084, après B DON003 au lot 3, qui était un Donjon) ;
  - **réécrits** : Mensonge −, Or +, Festin +, Ruine − et Chant +, cinq reprises de C par C.
  - Les plafonds étaient pleins. Mensonge, Or et Festin passent donc en colonne vertébrale :
    - Mensonge : prix `ennemiGarde` sur 6 cartes et crochet `cibleGarde` sur 4 ;
    - Or : prix en défausse sur 6 cartes et crochet `defausseAPrix` sur 4 ;
    - Festin : 4 bêtes et crochet `bete` sur 4.
  - Ruine et Chant prennent les deux dernières places rares : les coups au hasard (5 cartes) et l'enchaînement (5 cartes ; les dégâts ciblés du Chant descendent à 4).

  B et D, qui s'étaient interdit toute reprise, n'ont rien à changer.
- **Les onze pôles en colonne vertébrale de D, jugés un par un** :
  - *Vrais jeux, validés* (un prix dont le pôle profite, ou un crochet que le pôle nourrit lui-même) :
    - Mort (`prixBete` et `bete`), Sommeil (défausse et `defausseAPrix`), Liberté (garde ennemie et `cibleGarde`), Chaos (PV et `blesse`) ;
    - Ordre (garde du héros et `garde`), Peste (brûlure et `brule`), Guérison (hésitation et `hesite`).
  - *Crochets d'intention ennemie, validés de justesse* : Vide (`seul`, servi par 3 cartes de dégâts à tous) et Vie (`elan`, la harde qui se retourne contre la charge). Leur jeu est de lire l'ennemi.
  - *Réécrit* : **Pierre (ANT153 −)**. Le crochet `pietine` n'était nourri par rien, la garde ennemie payée sur 6 cartes ne servait à rien, et le reste était une mosaïque d'appoints à 2 cartes. La Pierre passe à l'**exil**, famille principale sur 6 cartes. Le mot ne l'avait jamais eue (vérifié au script). C'est la sixième place de l'exil dans le lot.
  - *Crochet changé* : **Tempête (ASS106 −)**. Le crochet `vol` passe à `blesse` sur les mêmes 4 cartes : le pôle payait déjà des PV sur 7 cartes, sans en profiter.
- **Pôles en colonne de A et de B, relus** :
  - Foyer (A ANT203 +, `garde` sur 4 cartes, nourri par 4 cartes de garde du héros), Sommeil (A ANT235 −, `prixBete` et `bete` sur 4) et Peste (B ANT049 −, PV sur 5 cartes et `blesse` sur 4) : **validés** ;
  - la Raison (A DON114 −, `pietine` sur 6 cartes) est un piège d'architecte : chaque carte garde un effet (marque, garde, riposte) quand l'ennemi ne charge pas. **Validé** ;
  - Ordre (B DON053 +) se lit plutôt comme un pôle de gros coups (dégâts ciblés sur 5 cartes) avec `defausseAPrix` sur 4. **Validé.**
- **Crochets sur 5 cartes ou plus** :
  - A DON114 + (`pietine`, 6 cartes) : le seul de A et l'un des deux du lot. Validé ;
  - D ASS137 − (`cartesJouees` 5, `troisCartes` 1) est compté comme la famille d'enchaînement, comme ANT151 et ASS050 au lot 6. Il est donc dans le plafond des places rares, pas dans celui des crochets.
- **Places rares, recomptées au script après correction** (réveil et `si` compris) :
  - hésitation 2 : B DON053 −, D ANT064 + ;
  - coups au hasard 2 : D ASS019 −, C DON127 − ;
  - vol de vie 2 : A ANT107 −, D ANT088 + ;
  - enchaînement 2 : D ASS137 −, C DON117 + ;
  - écho 0.

  **Validé.** Toutes les places rares du lot sont prises.
- **Plafond de 6 pour les autres familles, après correction** : **douze familles à 6**, soit toutes : soin du héros, soin des alliés, garde du héros, garde des alliés, affaiblissement, riposte, brûlure, marque, mana, perce-garde, exil (5 avant Pierre), plus la pioche à 2. Hors famille : invocations en vocation 2 (C Poison et Bois), dégâts ciblés à 5 en Donjon dans 5 pôles. **Validé**, mais le lot est saturé : voir les leçons 2 et 3.
- **Donjons à dégâts ciblés sur 5 cartes dans les deux pôles** (B DON053 et DON034) : la leçon 1 du lot 5 permet 5 cartes en Donjon. Chaque pôle a une autre famille principale ou une colonne, et les deux pôles d'une zone ne jouent donc pas le même jeu. **Toléré**, mais les deux zones restent à 79.
- **Familles d'animaux, recomptées au script sur les noms d'invocation** (2 pôles du lot au plus) :
  - déjà tenues à la remise :
    - crustacés 1 (C Rouille) ;
    - coléoptères 2 (C Poison, C Bois) ;
    - pinnipèdes 2, puis 1 (D Vérité, après la réécriture de l'Or) ;
    - sangliers 2, scorpions 2, caprins 2, corvidés 2, canidés 2 (B Peste, C Famine).
  - au-delà, **corrigés** :
    - rongeurs 5 → 2 : marmottes du Sommeil (A) → hérissons et ourson ; loir (D Pierre) → cloporte ; gerboise (D Vie) → pika ;
    - mustélidés 4 → 2 : martre (D Cristal) → faon ; carcajou (C Famine) → loup maigre ;
    - ours 3 → 2 : ours de verre (D Cristal) → élan ;
    - félins 3 → 2 : chat (A Foyer) → mangouste ;
    - lézards 3 → 2 : gecko (C Bois) → rollier ;
    - équidés 3 → 2 : mulet (C Fer) → chamelle ;
    - gallinacés 3 → 2 : pintades (D Éveil) → ibis.
  - restent à 2 : chauves-souris, serpents, batraciens, céphalopodes, araignées, hyménoptères, lagomorphes (lièvre et pika), camélidés, cervidés 1.
- **Récits en dialogue** : il n'y en a que deux, C ASS126 (l'interrogatoire, sans narrateur) et D ASS019 (la leçon du maître, avec narrateur). Le « débat à deux voix » de A ASS163 est raconté, sans discours direct. Deux formes différentes : **tolérées.** Au lot 8, un seul récit en dialogue (leçon 4).
- **Formes proches, B ANT160 et A ANT111** : la chasse que raconte le chasseur chaque soir, et le rapport du plongeur que son patron contredit. Le cadre, la chute et l'image diffèrent. **Toléré.**
- **Collisions d'intrigue** (défaut de fond 3), corrigées du côté inscrit le dernier :
  - B CIT037 : nouveau récit, et +5 et +6 changent de nom et d'ambiance ;
  - C ANT128 : nouvelle dernière phrase ;
  - D CIT011 : le récit passe au présent.
- **Ressources proches** :
  - D RES024 et C RES124 (pêche de marée) : **réglé par D avant la remise** (les glisseurs de vase). Les périophtalmes de RES024 sont aussi les poissons-sauteurs de A ANT107 + : toléré, car c'est une Ressource face à une bête de pôle, avec une autre image ;
  - B RES221 et D RES110 (l'eau) : **corrigé chez D** ;
  - B RES120 (œufs de tortue) et les tortues de A (Vie, Pierre) : **toléré**. Une Ressource n'entre pas dans le compte des pôles, et la plage de ponte maya ne ressemble ni aux tortues de vase ni aux tortues des stèles. Les œufs de RES120 et la rogue de hareng de A RES054 sont deux objets différents ;
  - A RES249 et D RES326 (galets fendus) : **corrigé chez D**.
- **Noms** :
  - « Fortezza » à côté de deux « Forteresse » : un mot traduit reste le même mot. C CIT043 devient **Isola Calbo, les Margelles de la Pluie**, ce qui règle aussi le Rempart en double avec A ;
  - C ANT084 devient **Eremosíderon, le Verger des Oryctes** ;
  - B ASS079 devient **Pātītī-nui, les Tussacs du Rāhui** ;
  - A RES249, A RES004 et B RES221 sont renommées (voir plus haut).

  Les titres de section suivent. Les cartes des familles (familles_X.md) ne sont pas touchées : elles gardent l'état de la remise.
- **Format de B** : deux tableaux de 7 cartes par zone au lieu d'un tableau de 14, comme au lot 6. `assembler.py` les lit. **Non bloquant.**

## Défauts de fond (au-delà des corrections)

1. **Le lot est saturé.** 96 pôles, douze familles à 6 et huit places rares donnent au plus 80 familles principales, vocations à part. Le reste devient forcément des colonnes, et le dernier inscrit (D) en paie la plus grosse part. La leçon « une place se choisit » ne suffit plus quand il n'en reste plus.
2. **Les dispenses se déplacent.** Au lot 6, c'était la pioche des Assemblées, les prix au plus bas et les pôles « sur un prix ». Au lot 7, ce sont les vocations reprises par leur propre auteur et les crochets d'intention ennemie, que rien dans le pôle ne remplit.
3. **La liste commune compare des étiquettes.** Deux conteurs ont changé de forme pour s'éviter, et sont tombés sur la même histoire (CIT021 et CIT037). La liste doit porter une ligne d'intrigue et la dernière phrase, pas seulement le nom de la forme.
4. **Les familles d'animaux se comptent trop gros.** Les conteurs comptaient « crustacés » ou « coléoptères », mais pas les rongeurs, les mustélidés ni les félins.
5. **Le validateur ne voit pas qu'une condition devient fausse ou toujours vraie** à cause de l'opération qui la précède : `hesite` puis `hesiteAvant`, `briseGarde` puis `cibleGarde`, `hesite` puis `elan`, `vol` ou `pietine`. Une seule carte était touchée, mais la règle du lot 2 ne couvre que « vrai après ».

## Corrections faites (65 objets modifiés : 50 cartes et 15 fiches, plus une note du critique en tête de chaque zone touchée)

**Pôles réécrits**
- C : ANT103 −1 à −7 ; ANT136 +2 à +7 ; ANT212 +3, +4, +6, +7 ; DON127 −1, −2, −4, −6, −7 ; DON117 +1, +4, +7.
- D : ANT153 −1 à −7 ; ASS106 −1, −3, −4, −6 (crochet `vol` → `blesse`).

**Mécanique**
- D ANT064 −2 : `si hesiteAvant` passe avant l'hésitation.

**Bêtes (familles d'animaux)**
- A : ANT235 −4 et −7, ANT203 +3.
- C : ANT212 −3, ANT084 −3, +1 et +6.
- D : ANT153 +5 et +7, ANT233 +3, ANT006 +2 (et deux `pal` d'ANT006, une d'ANT153).

**Ambiances et noms de carte**
- B CIT037 +5 (« Les vannes ouvertes ») et +6 (« Le marché au soleil »).

**Fiches**
- Zones :
  - noms : ASS079 (B), ANT084 et CIT043 (C) ;
  - récits : CIT037 (B), ANT128 (C, dernière phrase), CIT011 (D).
- Ressources :
  - noms : RES249 et RES004 (A), RES221 (B) ;
  - image : RES078 (C, récit et `pal`) ;
  - réécrites : RES110 et RES326 (D).

Les budgets des cartes touchées sont recalculés au script (« recalculé par le critique »), et leurs tags suivent les opérations.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 103 fiches (48 zones et 55 Ressources) et 672 cartes, soit 48 zones à 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet ≤ 250 caractères, ambiance de 12 à 20 mots, récit de 60 à 100 mots (30 à 50 pour une Ressource), `pal` ≤ 160 caractères.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2. `"cible":1` est partout où il le faut, et le tag Loi est conforme.
- Aucune condition n'est remplie ni vidée par la carte elle-même avant son `si`, et aucune ne lit `defausseCommune`.
- Budgets : 0 écart au-delà de ±15 %. Chaque palier 7 est entre 45 et 55 de base, avec un réveil de 60 à 100 %, une phrase d'ouverture de 3 à 6 mots et un prix.
- Familles :
  - rares 2, autres 6 ;
  - appoints dans 3 pôles au plus par conteur ;
  - dégâts ciblés sur 4 cartes au plus par pôle (5 en Donjon) ;
  - « tous » sur 3 cartes au plus, écho et récupération sur 4 au plus ;
  - pas de famille principale commune aux deux pôles d'une zone ;
  - aucune famille ni vocation reprise d'un lot précédent par son propre auteur ;
  - chaque pôle sans famille principale a un crochet sur 4 cartes au moins ;
  - chaque famille d'animaux dans 2 pôles au plus.
- Prix : 5 cartes sur 7 au moins dans chaque pôle, à une carte près dans chaque zone.
- Les 103 noms du lot sont uniques entre conteurs, par moitié et par premier mot, et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés.

## Leçons pour le lot 8 (à ajouter aux consignes)

1. **Une vocation suit la règle des mots de pôle.** Un conteur ne reprend jamais sa propre vocation (invocations, gros coups) sur un mot qu'il a déjà joué. Entre conteurs, une seule reprise par mot, avec d'autres bêtes et un autre crochet.
2. **Trois pôles sans famille principale au plus par conteur.** La colonne est un prix que le pôle paie et dont il profite, ou un crochet que le pôle remplit lui-même. Un crochet d'intention ennemie (`seul`, `elan`, `vol`, `pietine`) ne fait pas une colonne à lui seul. Chaque couple prix-crochet (`prixPV` et `blesse`, défausse et `defausseAPrix`, `prixBete` et `bete`, `ennemiGarde` et `cibleGarde`) sert dans 2 pôles du lot au plus.
3. **Les places se répartissent avant d'écrire.** Avec 48 zones, les familles sont pleines. LISTE.md donne à chaque conteur ses places (trois familles à 2 pôles, une place rare), et le dernier inscrit n'hérite plus des restes.
4. **La liste commune porte l'intrigue, pas seulement la forme** : une ligne « qui fait quoi, et comment ça finit », la première et la dernière phrase de chaque récit. Un seul récit en dialogue par lot, une seule ouverture « X était petit quand ».
5. **Les familles d'animaux se comptent au script sur les noms d'invocation**, à la maille de la famille courante (rongeurs, mustélidés, félins, ours, équidés, gallinacés, lézards, rapaces…) : 2 pôles du lot au plus.
6. **Noms** : le mot principal de la seconde moitié (Plaine, Rempart, Garnison) ne revient pas dans le lot. Le premier mot d'une Ressource ne reprend pas un premier mot en jeu. Un mot traduit (Fortezza) compte comme le même mot.
7. **Ressources : l'objet se compare par catégorie** (l'eau, les galets, les poissons qui sèchent), pas seulement par geste.
8. **Validateur** : une condition rendue fausse ou toujours vraie par une opération qui la précède dans la même carte est une erreur : `hesite` puis `hesite` ou `hesiteAvant` ; `briseGarde` puis `cibleGarde` ; `hesite` puis `elan`, `vol` ou `pietine`.
