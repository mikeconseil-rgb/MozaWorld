# Critique du lot 2 : 32 zones à cartes et 47 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons du lot 1), consignes-cartes.md (v2.2) et le moteur réel (`tv/src/cartes.js`, lu sans rien y changer). Les fiches du lot 1 ont servi de référence pour les pôles en double.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **83,0 / 100** (80,4 avant). Aucune zone refusée. Deux zones étaient sous 70, toutes deux chez C : **ANT055** (66) et **ANT161** (67). J'ai réécrit leurs cartes, et elles passent toutes deux à 81.

Les leçons du lot 1 ont été appliquées. Aucun opérateur n'est cassé, aucun `mana` ne dépasse 2, et aucun mot interdit ne revient. Les −7 et les +7 tournent vraiment entre les recettes, et les récits sont incarnés : la lettre glissée sous la pile par Inés, la stèle des truies lisible sur deux arêtes, le gardien qui rêve les cours du beurre, le tatou qui obéit à la calebasse, les deux voyageurs de Benarrúz qui ne s'accordent que sur les trous du patio. Il y avait pourtant trois défauts de fond, tous corrigés :

1. **De fausses conditions** (28 cartes, chez les quatre conteurs). Une carte qui lève la Garde puis teste « si la Garde est levée », qui fait hésiter puis teste « si elle hésite », qui brûle puis teste « si elle brûle », ou qui défausse en prix puis teste `defausseAPrix` : la condition est toujours vraie. Le texte promet un combo qui n'existe pas. Quand le conteur avait compté le `si` pour moitié, la carte était aussi trop forte, de 15 à 30 % (ASS177 Silence, ASS148 Nuit, ANT169 Raison). Partout, le `si` se lit maintenant **avant** l'opération qui le remplirait (« si elle hésitait déjà… Puis elle hésite »). De plus, `defausseAPrix` est remis à zéro à chaque tour (`debutTour`, combat.js). Les textes d'ASS070 et d'ASS148 disaient « ce combat » : ils disent maintenant « ce tour ».
2. **Des pôles en double qui se recopiaient** : les trois Folie tombaient toutes sur les coups au hasard, ANT161 rejouait ANT045 du lot 1, et les deux Brume/Clarté de B partageaient la riposte et la perce-garde. Voir les arbitrages plus bas.
3. **De nouveaux réflexes de gabarit**, un par conteur :
   - A : un +7 « peint de deux pigments » (vermillon, cinabre, malachite, lapis, céruse) dans 6 zones sur 8, un −7 « sang-de-bœuf passé » dans 3 zones, et des Ressources qui finissent 12 fois sur 12 sur le prélèvement d'un seigneur.
   - B : un +7 « teint de deux teintures » (garance, indigo, guède, rocou) dans 6 zones sur 8.
   - D : des Ressources bâties 11 fois sur 11 sur « un nom, un compte chiffré, puis cette année une anomalie ».

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT170 | Les Étuves de Hesy-Meref | A | 85 (83) | Le pain moisi qui soigne, puis compté par le vizir : une Peste qui vient d'une Guérison confisquée. La vermine contre les chats du seuil. Les piliers « au vermillon et à la malachite » du +7 et le « sang-de-bœuf passé » du −7 sont retirés. |
| ANT192 | L'Aire de Kaldbrekka | A | 86 | Les sangles des dénicheurs pendues « comme des manteaux qu'on reviendra chercher » : la meilleure chute de A. Tempête au hasard, Calme en hésitation et bêtes lourdes. Rien à changer. |
| ANT086 | Ráth Mórbanna, le Fort aux Truies | A | 84 (83) | Deux inscriptions sur une pierre levée, et Órlaith qui fait demi-tour à mi-pente. +7 sans peinture. Les deux formes du palier 7 ont retrouvé leur phrase d'ouverture. |
| ASS070 | Le Synode des Fumées d'Embrakion | A | 84 (82) | L'impôt sur la fumée, puis sur le pollen. Cendre (lois de défausse) contre Floraison (écho, reprise) : deux jeux bien séparés. Les textes `defausseAPrix` disent maintenant « ce tour ». +7 sans peinture. |
| ASS168 | Le Lazaret de Guadalcebrán | A | 83 (82) | Inés et la lettre glissée sous la pile : une Peste entretenue par l'administration, très différente d'ANT170. Le bloqueur du +7 est validé (voir les arbitrages). Galeries « au lapis et au cinabre » retirées. |
| DON037 | Les Parcs perliers de Lingshao | A | 85 (84) | L'inventaire de ruine fonctionne (le pinceau sec sur la colonne blanche). Sang = gros coups payés en PV, Sève = corail qui riposte. Phrase d'ouverture ajoutée au +7, bouées « sang-de-bœuf » retirées. |
| DON020 | Les Fonderies de Kraleng-Dek | A | 84 | La feuille de fer à la place de la feuille d'or, et la feuille gardée sous l'écaille : excellent. Rouille en brûlure, Or en gros coups ciblés. Le seul boost du lot est à sa place. |
| CIT002 | Le Pukara de Chuqiraqay | A | 83 (81) | Le fil noué au milieu du quipu est une très bonne idée. Pureté (perce-garde, exil) se distingue assez de CIT016 Ordre. Linteaux « de céruse et de cinabre » et étoffes « sang-de-bœuf » retirés ; phrase d'ouverture ajoutée au −7. |
| ANT148 | Le Tajo de Almagrán | B | 82 | Rivière acide et fil de mariée : la route de la marchandise, incarnée. Rouille en affaiblissement et perce-garde, Or en mana et pioche. Rien à changer. |
| ANT058 | Le Plateau de Toetoe-Nui | B | 83 (82) | Les sacs de varech et les pétrels payés d'avance en tapa. Un Mort/Vie de plus, mais par la récolte, sans réservoir ni cellier. Phrase d'ouverture ajoutée au +7. |
| ANT070 | La Mangrove de Bayan-Tsuur | B | 81 (80) | Yourtes sur radeaux : très original. Le carnet est un peu attendu. Les « fanions bleu et safran » du +7 sont retirés. |
| ASS071 | Amoxtitlan, l'Archipel des Comptes | B | 82 | Deux livres en accordéon qui se contredisent, puis un livre racheté page à page. L'Oubli fait hésiter sur ses 7 cartes : c'est juste pour ce pôle, mais le lot compte trop de pôles d'hésitation (voir les leçons). |
| ASS052 | Titanokastro, l'Agora des Chaufourniers | B | 81 (79) | Phaidra compte les voix au bruit des bracelets. La riposte quitte deux cartes de la Brume, car c'est le cœur de DON021. Bâches « garance et indigo » retirées ; phrase d'ouverture ajoutée au +7. |
| DON021 | Sekhet-Antyou, la Savane aux Résines | B | 82 (78) | Le midi noir de l'encens grillé, une belle image. La Clarté perçait la garde sur 6 cartes sur 7, comme ASS052 : elle passe à la brûlure et à la marque, et la perce-garde ne reste que sur 3 cartes. Les jours du journal (1, 3, 5, 9) recopiaient ceux d'ASS070 : ils sont changés. |
| DON022 | Tz'unkab, la Cité aux Entailles | B | 83 (80) | Ton relu à la demande : la saignée maya est traitée comme un **échange** avec l'arbre, sans scène de sacrifice, et c'est juste. Deux ambiances glissaient vers l'exotisme (« ils disent que l'arbre aime ça », « et le reste ») : elles sont réécrites (« on paie l'arbre avant de le saigner », « une goutte de son porteur »). |
| CIT028 | Le Crannog de Liathmon | B | 82 (74) | Le gardien qui rêve les cours du beurre est la meilleure idée de B. Le Rêve faisait hésiter sur 5 cartes (comme l'Oubli d'ASS071, du même conteur) et le Cauchemar marquait sur 6 (comme ASS076). Le Rêve est passé à la garde, au soin et aux bloqueurs dormants, et la marque ne reste que sur 3 cartes. Une fausse condition `garde` est retirée. |
| ANT165 | Les Corniches de Rospis | C | 84 | Les dessins d'œufs copiés sur les portes : une fable-règle parfaite. Ruine (bêtes sacrifiées) contre Abondance (nuées). Rien à changer. |
| ANT055 | Le Terrain des Tatous de Kanpet | C | **81 (66)** | **Cartes réécrites (12 sur 14).** Le récit est excellent (la calebasse à graines), mais ses deux pôles recopiaient l'autre Folie/Raison de C (DON077 : coups au hasard) et la Raison de D (ANT169 : marques). Voir plus bas. |
| ANT161 | Le Gouffre de Lianjiu | C | **81 (67)** | **Cartes réécrites (9 sur 14), +7 redessiné.** Le Ciel faisait tomber des oiseaux au hasard et l'Abysse faisait hésiter avec des bêtes du fond, exactement comme ANT045 au lot 1. Le +7 « pavillon qui flotte au-dessus des nuages » rejouait le fort « qui pend au ciel ». Voir plus bas. |
| ASS002 | Le Yamen des Craquelures de Hanzhai | C | 84 (83) | Os contre Corail fossile : un axe inventé, une épreuve loyale. Trois fausses conditions `brule` sont devenues de vrais combos. Phrase d'ouverture ajoutée au +7. |
| ASS076 | Debre Nefas, la Falaise des Songes | C | 82 (81) | La loi écrite à la cire et à l'or. Le Rêve fait hésiter sur ses 7 cartes, avec l'écho : juste, mais c'est le troisième pôle d'hésitation du lot. Une fausse condition corrigée au +5. |
| DON077 | L'Édubba de Šagdana | C | 85 (84) | La clause « je le roule à travers moi » se retourne contre le joueur au −7. C'est lui qui garde les coups au hasard des Folie. Phrase d'ouverture ajoutée au +7. |
| DON082 | Les Soupiraux d'Érikeia | C | 86 (85) | Le meilleur Tempête/Calme possible : le calme est l'air qui ne bouge plus et qui étouffe (la brûlure renommée « étouffe »). Trois fausses conditions corrigées. |
| CIT027 | Le Fort-Récif de Hikuera | C | 82 (77) | Fer contre Bois, des murs qui plient contre des portes qui cèdent d'un bloc : vraie Citadelle. Mais 5 cartes de Fer levaient la Garde puis testaient « si la Garde est levée ». Le test se fait maintenant d'abord (« si la Garde était déjà levée »), et les chiffres sont rééquilibrés. |
| ANT169 | La Géode de Tezcaxoc | D | 84 (82) | Un cheveu par siècle, puis un cheveu par semaine : temps profond. Folie (bêtes et coups au hasard) contre Raison (marques). Deux fausses conditions `vulnerable` sont corrigées ; ces cartes étaient trop fortes de 19 à 25 %. |
| ANT149 | Le Prieuré de sel d'Aumbrevaux | D | 85 | Un socle de plus, et il est vide. Mort (bêtes salées en bloqueurs) contre Vie (essaims et vol de vie) : distinct d'ANT058. Rien à changer. |
| ASS148 | Le Popol Na de Taab Ek' | D | 82 (76) | L'aube qui arrive « un peu avant le soleil ». La Nuit reposait sur trois fausses conditions `defausseAPrix` dont le texte disait « ce combat » : voir les arbitrages. Deux autres fausses conditions corrigées sur l'Aurore. |
| ASS177 | L'Ukkin de Larsabba | D | 79 (73) | La chanteuse réduite au silence par 19 voix contre une : beau, et le seul récit tronqué de D. Le Silence testait « si la cible hésite » juste après l'avoir fait hésiter, sur 7 cartes sur 7 (cartes trop fortes de 20 à 30 %). Le test se lit avant, et le −5 passe à la garde. Pôle encore monotone : à surveiller. |
| DON017 | La Caldeira de Bürgüdei | D | 83 | 310 chevaux entrés, 363 sortis, tous au fer du clan : l'horreur par l'abondance. Rien à changer. |
| DON081 | L'Alcázar gelé de Benarrúz | D | 86 | Deux témoins et un azulejo qui change de place : la meilleure zone de D. Mensonge (le palais qui nourrit et protège) contre Vérité (frappes qui ignorent la garde). |
| DON042 | Le Marae ensablé de Tefaone | D | 82 (79) | Le tatouage comme carte des courants, et la mer qui revient. La Guérison est maintenant lisible : le test « sous la moitié des PV » suit immédiatement la perte de PV, avant le soin (voir les arbitrages). |
| CIT019 | Le Kastron de Phoinikoussa | D | 81 | La citerne aux anneaux et l'eau qui en prend deux pendant la visite. Ses fausses conditions avaient déjà été évitées (« était déjà levée »). La Sécheresse (garde et affaiblissement) frôle ASS040 du lot 1 (lois et affaiblissement) : à surveiller. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 84,3 (83,1).** Toujours la voix la plus sûre, et la seule sans erreur de règle. Son nouveau réflexe est le +7 peint de deux pigments, qu'il justifiait lui-même dans ses notes (« le reste de ma palette +7 reste peint »). C'est le « repeint » du lot 1 sous un autre nom.
- **B, 82,0 (79,6).** Des matières très fortes (feutre, beurre de tourbière, chaux, résine) et plus aucune lanterne sourde. Mais ses deux Brume/Clarté se partageaient deux familles, ses Rêve et Oubli se partageaient l'hésitation, et son +7 se teignait six fois.
- **C, 83,1 (78,4).** Les meilleures zones du lot (DON082, DON077, ANT165) et les deux pires (ANT055, ANT161). Ces deux-là n'avaient pas lu la Folie de son propre DON077 ni l'ANT045 du lot 1. La leçon 4 n'a pas été appliquée à son propre lot.
- **D, 82,8 (80,6).** Des récits de temps profond magnifiques. Ses fausses conditions étaient comptées pour moitié dans le budget (`si` = 50 %), alors qu'elles étaient toujours vraies : trois zones étaient trop fortes.

**Ressources (47)** : A 82 (79), B 81, C 82 (81), D 81 (77). Les fiches sont justes et les gestes presque tous différents. Il y avait un doublon de geste entre conteurs et deux gabarits de chute.

## Arbitrages demandés

- **Peste / Guérison** (ANT170, ASS168, DON042 ; DON101 et ASS115 au lot 1). **Validé.** Peste : vermine et marques (ANT170), lois de quarantaine qui isolent (ASS168, condition `seul`), contagion en coups au hasard (DON042). Guérison : garde et bêtes sacrées (ANT170), pioche et soin sous la moitié des PV (ASS168), PV payés d'abord puis soin (DON042). Point à surveiller : DON042 − et ANT170 − marquent tous deux sur 7 cartes sur 7.
- **DON042 « perd n PV puis se soigne »** : **lisible maintenant, ce ne l'était pas.** Le test `blesse` venait **après** le soin, qui pouvait remettre le héros au-dessus de la moitié : on payait pour rien. Les 5 cartes disent désormais « Le héros perd n PV ; s'il est alors sous la moitié de ses PV, … Puis il se soigne de … », et les `ops` suivent cet ordre.
- **Folie / Raison** (ANT055, DON077, ANT169). **ANT055 réécrite.**
  - Folie : DON077 garde les coups au hasard avec écho et PV (Donjon), ANT169 les bêtes frénétiques au hasard (Antre de D). ANT055 passe aux tatous, à la chaleur (brûlure) et à l'hésitation, sans aucun coup au hasard.
  - Raison : ANT169 garde les marques, DON077 la perce-garde quand l'ennemi est seul. ANT055 passe à la garde des alliés et au jeu sur le rythme de l'adversaire (conditions élan, charge, vol), comme Ix Tzutz compte les secousses de calebasse.
- **Abysse / Ciel** ANT161 contre ANT045 (lot 1). **ANT161 réécrite.**
  - Abysse : les marques s'additionnent (« si elle était déjà Vulnérable »), avec l'exil, les martinets et la salamandre. L'hésitation ne vient plus qu'en combo (−2) et au −7.
  - Ciel : le faucon frappe une seule cible, juste et fort, et punit ce qui vole. Plus aucun coup au hasard : les grues d'ANT045 le gardent.
  - Le +7 n'est plus un bâtiment suspendu : c'est un cirque de lumière où les faucons plongent vers le ciel du fond.
- **Sécheresse / Déluge** (ANT070, CIT019). **Validé.**
  - Sécheresse : sel et soleil en brûlure, avec les bêtes du sec, dans l'Antre ; garde et rationnement dans la Citadelle.
  - Déluge : crue au hasard et bêtes nageuses ; garnison noyée en bloqueurs.
- **Mort / Vie** (ANT058, ANT149). **Validé.** Mort : marques, exil et proies fragiles, contre bêtes salées massives et affaiblissement. Vie : colonie qui riposte, contre essaims et vol de vie. Le soin des alliés est commun, et c'est inévitable dans un Antre.
- **Brume / Clarté** (ASS052, DON021 ; ASS170 au lot 1). **Corrigé.** Même conteur, mêmes mots de pôle, et deux familles partagées : la riposte dans les deux Brume, la perce-garde dans les deux Clarté. ASS052 Brume ne garde la riposte qu'au −7. DON021 Clarté passe à la brûlure et à la marque, avec la perce-garde sur 3 cartes seulement.
- **CIT002 Pureté contre CIT016 Ordre.** **Validé** : la Pureté perce la garde et fait exiler, l'Ordre lève des bloqueurs. La garde est commune, comme dans toute Citadelle.
- **CIT028 Rêve et ASS071 Oubli** (et ASS076 Rêve, ASS177 Silence) : **corrigé en partie.** Le Rêve de CIT028 passe à la garde, au soin et aux bloqueurs dormants, avec l'hésitation sur 3 cartes seulement. Restent trois pôles d'Assemblée centrés sur l'hésitation (ASS071 −, ASS076 +, ASS177 −). Chacun est juste pour son mot de pôle, mais c'est trop pour un lot (leçon 2 plus bas).
- **ASS148 Nuit et `defausseAPrix`** : **ce n'était pas « trop facile », c'était automatique.** Trois cartes payaient leur défausse **avant** de la tester, et le texte disait « ce combat » alors que le moteur compte le tour. Corrigé : le `si` passe avant le prix, et le texte dit « ce tour ». Il faut donc avoir payé une défausse avec une autre carte plus tôt dans le tour. C'est un vrai combo, facile à monter avec 5 cartes sur 7 qui défaussent, mais qui demande un ordre de jeu. Le budget de D comptait déjà le `si` pour moitié, il est donc juste maintenant.
- **ASS168 +7 et son bloqueur** : **validé.** Une seule invocation dans un pôle sans bête, à la forme ultime : c'est un vrai changement de nature (les convalescents se lèvent et tiennent la porte), et les Assemblées « penchent » vers le contrôle sans l'interdire.
- **Formes du palier 7 sans phrase d'ouverture** : 10 l'ont retrouvée, en resserrant le reste pour tenir dans les 250 caractères : ANT086 −/+ (« La halle retourne au groin. », « Le roi sert à table. »), DON037 +, CIT002 −, ANT058 +, ASS052 +, ANT161 −, ASS002 +, CIT027 +, DON077 +.
- **DON022 Sang (saignée maya)** : **ton validé** après les deux retouches d'ambiance décrites dans le tableau.
- **Gestes des Ressources** (croisés entre les 47) : il y avait **un doublon**. RES373 (C), où le frère copiste ramasse les plumes de fou sur la falaise, et RES335 (D), où l'on recueille sur la falaise les plumes de mue des ibis : même geste, même biome. RES335 devient le lin des bandelettes, tendu mouillé d'eau de mer et blanchi au vent. Il y avait aussi **un doublon d'image** : « trous fumants dans la glace », dans RES313 (C) et dans RES097 (D) ; le plan de RES097 est changé. À surveiller sans corriger : quatre Ressources de teinture (RES248, RES294, RES283, RES250), avec des gestes différents, et deux de sel (RES191, RES319).

## Corrections faites (109 objets modifiés : 86 cartes et 23 fiches, plus 12 lignes de prose)

**Zones réécrites (C)**
- **ANT055** : 12 cartes sur 14. Folie : tatous, brûlure et hésitation. Raison : garde des alliés, bêtes dressées et conditions d'intention. Toujours 4 prix sur 6 par pôle et au moins 3 invocations par pôle. Résonances et ambiances inchangées.
- **ANT161** : 9 cartes sur 14, la ligne `pal` du +7, et les lignes « Familles d'effets » et « Fil mécanique » de la prose.

**Fausses conditions (28 cartes)** : CIT027 −1, −2, −4, −6, −7 ; CIT028 +2 ; ASS177 −1 à −7 ; ASS148 −3, −4, −5, +3, +5 ; ANT169 +5, +6 ; DON042 −5 ; ASS002 −3, −4, −6 ; ASS076 +5 ; DON082 +3, +5, +6. Les budgets sont recalculés quand la carte comptait le `si` en entier.

**Doublons de familles** : CIT028 (+2, +4, +6, −1, −3, −6), DON021 (+1, +4, +5), ASS052 (−3, −5).

**Lisibilité** : DON042 (+1, +3, +4, +6, +7) et le texte `defausseAPrix` (« ce tour ») dans ASS070 et ASS148. 14 cartes qui visaient « la cible » avec `"cible":0` passent à 1. Ce n'est pas un bug du moteur, qui prend alors le premier ennemi, mais le joueur ne pouvait pas choisir.

**Palettes** :
- A : 10 lignes `pal` (piliers, poteaux, basilique, galeries, linteaux, azulejos, enduits, bouées, étoffes, pavillons). Il reste 3 pigments nommés, là où ils sont la matière même (cinabre de DON020 et de RES074, corail vermillon de DON037).
- B : 3 lignes `pal` (ASS052, CIT028, ANT070).

**Ressources** :
- A : RES123, RES226 et RES238 perdent leur seigneur.
- D : RES335 (nouveau geste), RES295, RES097, RES231, RES263, RES062 et RES077 perdent la chute « cette année, une anomalie ». Il en reste trois, et ce sont les plus fortes (RES137, RES232, RES230).
- C : RES373 ne durcit plus ses plumes dans le sable chaud (troisième « sable chaud » de C).

**Récits** : DON021 (jours du journal).

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Les 135 blocs ```json``` se lisent (79 fiches et 56 tableaux de cartes).
- 32 zones à 14 cartes (pôles − et +, paliers 1 à 7), 448 cartes.
- Chaque effet fait 250 caractères ou moins. Chaque ambiance compte 12 à 20 mots, chaque récit 60 à 100 mots (30 à 50 pour une Ressource), chaque `pal` 160 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec des arguments dans le bon ordre. Aucun `mana` ne dépasse 2.
- Chaque forme du palier 7 pose une résonance et en réveille une autre. Le tag Loi est conforme.
- Il ne reste plus aucune condition remplie par la carte elle-même avant son `si`.

**Non bloquant, laissé tel quel** : les identifiants de B s'écrivent `ANT148-moins1` (sans le second tiret), et ceux du palier 7 chez A et D `…-moins7`. `assembler.py` range les cartes par pôle et par palier, pas par identifiant : sans effet.

## Leçons pour le lot 3 (à ajouter aux consignes)

1. **Une condition se lit avant ce qui la remplirait.** Il ne faut jamais tester dans une carte ce que la même carte vient de faire. Écrire « si elle hésitait déjà… Puis elle hésite », « si la Garde était déjà levée… Puis vous gagnez », « si une carte a déjà été défaussée en prix ce tour… Puis défaussez ». `defausseAPrix` vaut pour **le tour**, pas pour le combat. Le validateur doit signaler tout `si X` précédé, dans la même carte, d'une opération qui rend X vrai (`garde` héros → `garde`, `hesite` → `hesite`, `brulure` → `brule`, `vulnerable` → `vulnerable`, `invoque` → `bete`, `prixDefausse` → `defausseAPrix`).
2. **Un plafond de familles par lot, tous conteurs confondus.** Au plus deux pôles du lot dont la famille principale est l'hésitation (ce lot en avait cinq), et au plus deux pour les coups au hasard (les trois Folie y étaient tombées). Quand un mot de pôle revient, que ce soit dans le lot ou dans un lot précédent, celui qui écrit le second lit d'abord les cartes du premier, pas seulement sa fiche. La leçon 4 vaut aussi entre lots : ANT161 rejouait ANT045.
3. **Le +7 ne se peint pas.** Au +7, pas de couple de pigments ni de teintures nommés (vermillon, cinabre, malachite, lapis, céruse ; garance, indigo, guède, rocou), sauf quand la couleur est la matière même de la zone, et dans deux zones au plus par conteur et par lot. Au −7, plus de « sang-de-bœuf passé ». Le +7 se dit par un objet, une foule ou un geste.
4. **Les chutes des Ressources tournent aussi.** Au plus trois Ressources par conteur et par lot sur la même structure : le seigneur qui prélève et les petites gens qui rusent (A), ou le nom, puis le compte chiffré, puis « cette année, une anomalie » (D). La liste commune des gestes s'étend à l'**image** : deux Ressources ne partagent ni le geste (plumes ramassées sur une falaise) ni le plan visuel (trous fumants dans la glace).
5. **Une seule table de budget, dans le validateur commun.** Pour l'instant, A et B comptent « alliés » ×1,5 et C et D ×1 ; D compte « tous » ×2,5 pour l'hésitation, l'affaiblissement et la marque, les autres ×2,2. Proposition : « alliés » ×1,5 et « tous » ×2,2 partout, inscrits dans consignes-cartes.md et dans le script. Écrire `"cible":1` dès qu'une opération vise « cible ».
6. **La phrase d'ouverture de la forme ultime est obligatoire.** Elle dit en 3 à 6 mots le changement de nature (« Le roi sert à table. ») et compte dans les 250 caractères. Si la carte déborde, on resserre le reste (« alliés +15 de garde ») au lieu de la sacrifier. Même règle de rotation pour les récits en journal : deux journaux du même lot ne suivent pas la même numérotation de jours (ASS070 et DON021 suivaient tous deux 1, 3, 5, 9).
