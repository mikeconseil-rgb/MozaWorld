# Critique du lot 3 : 40 zones à cartes et 48 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 et 2), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). Les lots 1 et 2 ont servi de référence pour les pôles en double.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **82,3 / 100** (80,0 avant). Aucune zone refusée. Une seule zone était sous 70 : **DON011** (C, 67). J'ai réécrit son pôle Lumière (7 cartes) et ajouté un prix à sa forme −7 ; elle passe à 80.

Les leçons du lot 2 ont été appliquées, et c'est net. Il ne reste **aucune fausse condition** dans les 560 cartes : le `si` se lit partout avant l'opération qui le remplirait. Aucun `mana` ne dépasse 2, aucun opérateur n'est cassé, le tag Loi est conforme, et aucun +7 n'est peint. Les quatre conteurs ont appliqué la même table de budget (« alliés » ×1,5, « tous » ×2,2). Les plafonds d'hésitation et de coups au hasard sont tenus.

Les récits sont parmi les meilleurs de la série : le « non » roulé dans le mur du laraire, le chat scellé par erreur dans l'inventaire des ibis, la plume lestée d'un cheveu mouillé, Ketill qui joue quand la marée monte, le notaire qui compte douze mains levées, l'herbe qui meurt « en forme de vaches ». Il y avait pourtant cinq défauts de fond, tous corrigés :

1. **Un nouveau tic, l'enchaînement** (`cartesJouees`, `troisCartes`) : il était famille principale dans 3 pôles et revenait sur 4 cartes dans 3 autres. Un plafond est fixé (voir les arbitrages).
2. **Des paires qui se recopiaient**, dont trois chez un même conteur : DON002 Déluge et ASS030 Glace (A, perce-garde), CIT005 Poison et CIT041 Pourriture (A, garde payée en PV et affaiblissement), ANT179 Oubli et DON003 Fer (B, perce-garde), ANT144 Cauchemar et ANT068 Famine (C, affaiblissement, bêtes et sacrifice), DON079 Guérison et ASS033 Floraison (C, garde du héros et riposte). Entre conteurs : DON068 Cauchemar recopiait DON002 Sécheresse, DON104 Vide recopiait DON105 Ruine, ANT121 Sève faisait un 3e pôle d'écho, et ANT127 Ombre un 3e pôle de vol de vie.
3. **Une carte répétée avec des chiffres plus gros** : la Lumière de DON011 (sept fois « X dégâts, s'il ne reste qu'un ennemi, Y de plus ») contredit la section 6 des consignes. Le Déluge d'ASS159 faisait hésiter tous les ennemis et frappait tous sur 7 cartes sur 7. Or le moteur fait « s'habituer » un chef qui hésite deux tours de suite : ce pôle ne tenait plus contre un boss.
4. **Des réflexes de gabarit**, un par conteur :
   - B : la bande +2..+5 finit **11 fois sur 11** sur un instrument qui « répond » à un autre (hautbois, krar, luth, mandoline, accordéon, gong…), avec trois « caboteurs ».
   - C : la moitié des récits finit sur un conseil à l'impératif (« Pesez votre plume », « Demandez les pions de bois », « Buvez-la », « Regardez », « comptez les tours »), et « La clause est… » revient deux fois.
   - A : la marque (Vulnérable) accompagne 4 de ses pôles −. Le Peste d'ASS064 marquait 7 cartes sur 7, précisément ce que le lot 2 signalait pour ANT170 et DON042.
5. **Des nombres partagés entre conteurs** (la liste de chacun ne voyait que ses propres zones) : onze (ANT016, ASS096), douze (ANT066, ASS096), vingt (ASS083, CIT026), cent (ANT118, ASS176, ASS096), mille (ANT198, ASS176), dix (ANT198, ANT019), cinq et six (DON095, ASS096).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT016 | Scopulum Aquilae, le Cap des Relégués | A | 85 | La réponse au Sénat tient en un mot : non. L'Exil (bêtes de falaise fragiles et exil de la carte) et le Foyer (bêtes gardiennes, récupération) sont deux vrais jeux. Le « onze ans » devient « quatorze » (ASS096 compte onze médecins). |
| ANT053 | Le Paradeisos de Chrysolithos | A | 84 (83) | Zoé tourne la clé, Sabbas rugit à la place des lions. La Folie (dégâts à tous et bêtes) et la Raison (automates et mana) sont nettes. Le +5 passe de « déjà une carte ce tour » à « si une bête est en jeu » (plafond d'enchaînement). |
| ANT198 | Les Galeries aux Ibis de Hor-Ouadjet | A | 84 | L'inventaire et le chat « par erreur : un ». Les leurres à 0 d'attaque du Mensonge contre les vraies bêtes brûlantes de la Vérité : l'idée du lot. |
| ANT118 | Bouthysia, la Ville des Broches | A | 85 | La procession aux broches vides et le compte des chiens gratté au revers de la stèle. La Famine (meute, coups sur l'ennemi resté seul) est bien distincte de Lochmairg (voir les arbitrages). |
| ASS030 | L'Adbar d'Arbatana | A | 84 (83) | Un récit tronqué au bon endroit, et les trois tasses de café comme horloge du vote. Le +6 perd sa condition « troisième carte » (plafond). |
| ASS083 | L'Ekklésia aux Vapeurs d'Athymna | A | 84 | Les décrets qui finissent par retirer les cailloux noirs « pour gagner du temps ». Le boost de la forme −7 est à sa place. |
| ASS064 | Le Puhrum d'Ešnak-Šadê | A | 83 (80) | Les deux tablettes, et la chèvre qui redescend avec les bergers d'en face : très bon. La Peste marquait 7 cartes sur 7, comme ANT170 et DON042 au lot 2. Elle devient une contagion (riposte, coups à tous), et la marque ne reste que sur 3 cartes. |
| DON105 | Xiuhtecalco, la Ville aux Pots brisés | A | 84 | Citlali paie l'amende avec ses propres pots déterrés. La Ruine (gros coups payés en défausse, marque) garde sa famille : c'est DON104 qui a changé. |
| DON002 | Iou-Nefer, les Îles aux Chadoufs | A | 81 (76) | La corde raccourcie d'une coudée : bonne requête. Mais le Déluge perçait la garde sur 6 cartes, comme la Glace d'ASS030 du même conteur, et partait comme ASS159 (même biome, mêmes mots de pôle). La perce-garde ne reste que sur 3 cartes, et la crue soigne (+3, +4). |
| DON010 | Les Citernes de Mélikrata | A | 84 | Les amis qui parlent au condamné, « c'est plus humain, et plus long ». Le Poison est une brûlure longue, le Nectar un soin sur coups ciblés. |
| CIT005 | Nushdaru, la Citadelle du Contrepoison | A | 83 (79) | L'espion qui ne s'est « jamais aussi bien porté ». Le Poison recopiait la Pourriture de CIT041 (garde payée en PV et affaiblissement). Il devient l'armure empoisonnée : la riposte remplace l'affaiblissement sur −2, −4 et −6. |
| CIT041 | Dûr-Ellamê, la Forteresse sous les Chapeaux | A | 83 | La lettre au roi et la question de fin (« s'il faut couper le mur ») ; les citadelles jumelles poussent à côté, sans avaler de bâtiment. |
| ANT066 | Les Fours-Dragons de Shuyao | B | 81 (80) | Le marteau de l'inspecteur et les tessons vendus au panier. La Pureté joue « s'il ne reste qu'elle » sur 7 cartes : juste pour un seul bol qui part, mais c'est un des trois pôles « seul » du lot. Musique de la bande +2..+5 retirée, « douze lances » devient « seize ». |
| ANT019 | Les Pentes de Halepili | B | 81 (80) | Keola qui pousse au large quand le vent tourne : la marchandise d'abord. Musique de la bande +2..+5 retirée, « dix saisons » devient « huit ». |
| ANT179 | Les Hauts Pâturages de Shalnagar | B | 82 (77) | Le talim, des lignes chantées qu'on a perdues avec la voix d'un vieux maître : très beau. La Mémoire garde l'enchaînement, c'est son récit. L'Oubli perçait la garde sur 6 cartes, comme le Fer de DON003 du même conteur, et payait 6 prix sur 6 (contre 4 au pôle +). Il passe à l'exil (−3, −5), la perce-garde ne reste que sur 3 cartes, et deux prix sont retirés. |
| ANT100 | Les Fumoirs de Kesse-Wenz | B | 81 (80) | Les hippopotames qu'on frôlait toute la semaine sans les voir. La Clarté garde l'écho (le delta double). Musique de la bande +2..+5 retirée. |
| ASS161 | Le Divan de Yakhdarra | B | 82 (81) | Le pain de neige mouillé, qui pèse plus et fond plus vite. Le Mensonge (défausse comme carburant) contre la Vérité (marques) : bien vu. Musique de la bande +2..+5 retirée. |
| ASS055 | Le Fondaco de Malcanton | B | 81 (80) | Le change jeté aux dés d'os, en public. L'Os est l'un des deux pôles de coups au hasard du lot, et le Corail porte un boost bien placé. Musique de la bande +2..+5 retirée. |
| ASS176 | Le Tribunal des Treilles de Quanhe | B | 81 (78) | La greffière qui mesure le doigt. La forme +7 promettait de reprendre deux cartes, mais le moteur plafonne la récupération à 2 par tour, et chaque carte du pôle en a une : elle reprend une carte et pioche 3. Musique de la bande +2..+5 retirée, et « cent rouleaux » et « mille trous » sont changés. |
| CIT026 | Le Kolo de Vaimanu | B | 82 (81) | Deux comptes, l'un sur la massue, l'autre sur la ficelle de coquillages : la meilleure idée de B. Seule ligne +2..+5 musicale gardée (les conques sont un signal de fort). « Vingt pagaies » devient « trente ». |
| DON068 | Les Galeries d'Aqqutik | B | 80 (74) | La galerie qu'il faut rêver pour la prendre. Mais le Cauchemar recopiait le fil de DON002 Sécheresse (gros coups ciblés, vol de vie sur 7 cartes, « sous la moitié des PV ») : le glacier qui se referme marque maintenant et affaiblit, le vol de vie ne reste que sur 3 cartes, et la condition `blesse` devient `vulnerable`. |
| DON023 | Les Degrés de Moetoa | B | 80 (79) | La cordelette nouée au poignet de chaque dormeur. Le Sommeil affaiblit sur 7 cartes : c'est l'un des dix pôles d'affaiblissement du lot (voir les leçons). Musique et « caboteur » retirés de la bande +2..+5. |
| DON003 | Les Cales de Shuimu | B | 81 (80) | Le gouvernail loué, qui revient à chaque radoub. Le Fer garde la perce-garde. Musique de la bande +2..+5 retirée. |
| ANT068 | Les Nasses de Lochmairg | C | 84 | La première anguille aux hérons, puis les sangsues : la meilleure fable de C. La Famine garde l'affaiblissement (c'est ANT144 qui a changé). |
| ANT121 | La Boulaie de Krovets | C | 82 (80) | La clause en lettres de lichen sur l'écorce. La Sève faisait le 3e pôle d'écho du lot : l'écho ne reste que sur 3 cartes (+1, +4, +7). Le +3 donne du mana de Glace, le +5 récupère une carte, le +6 lève la garde. |
| ANT144 | Les Îles de Duermevela | C | 81 (73) | La devinette du linteau (« Plus j'enchaîne, plus je vais loin ») justifie le Rêve en enchaînement. Le Cauchemar recopiait la Famine de Lochmairg, du même conteur (affaiblissement, bêtes, sacrifice). Il devient la noyade : la jument qui s'arrête coule avec ce qu'elle tient, et l'affaiblissement ne reste que sur 3 cartes. La forme −7 reçoit son prix. |
| ASS092 | Les Pierres parlantes de Haurangi | C | 83 (82) | Le vent qui tranche les procès. La fin de récit à l'impératif (« Pesez votre plume avant de plaider ») devient une chute : sa plume reste sur la pierre le jour de ses funérailles, sans un cheveu. |
| ASS033 | Les Brûlis de Popelnik | C | 84 | L'églantier « armé » plutôt que « fleuri ». Les Lois de brûlure contre les Lois d'épines : deux jeux. Il garde la riposte du lot pour C. |
| DON079 | Les Pilotis de Yamaimizu | C | 82 (75) | Le faux coupable, celui qui brûle, est le guérisseur : excellent. Mais sa Guérison (garde du héros, soin et riposte) recopiait la Floraison d'ASS033. Le moxa brûle maintenant la cible, et la riposte part : c'est le Brûleur qui soigne. |
| DON011 | Le Fanal de Brisemâts | C | **80 (67)** | **Pôle Lumière réécrit (7 cartes) et prix ajouté à la forme −7.** Le récit du traître (le faux fanal tourne à l'envers) et l'Ombre (pièges d'intention) étaient bons. La Lumière répétait sept fois la même carte avec des chiffres plus gros. Voir plus bas. |
| DON095 | La Banya de Vetrovka | C | 81 (80) | Marfa chauffe quand même, puisqu'on ne refuse pas un malade. La Peste (« sous la moitié des PV ») est distincte d'ASS096 (voir les arbitrages). Les « cinq hivers » deviennent trois (ASS096 vote à six contre cinq). |
| CIT012 | Rótavík, le Bourg sur pieux | C | 81 | Les pions d'ivoire qui flottent quand la marée monte. Les bloqueurs écrits en bêtes à 0 d'attaque sont validés (voir les arbitrages). |
| CIT036 | Dún Ailithir, la Porte des Bannis | C | 83 | Le pain sous le banc, et le piège de l'hospitalité. Le Foyer est l'un des deux pôles d'hésitation du lot. |
| ANT013 | La Chaussée des Dormeurs de Veal Ambel | D | 84 | « Elles ne s'en vont pas, elles arrivent » : la meilleure chute de D. La balustrade des nâgas qui respire. |
| ANT127 | Les Îles-Kraals d'Esithunzini | D | 81 (75) | L'ombre restée sur l'herbe après le départ de l'île. L'Ombre faisait le 3e pôle de vol de vie du lot (7 cartes sur 7) : l'ombre marque maintenant sa proie (−2, −4, −6), et le vol de vie ne reste que sur 3 cartes. |
| ANT105 | Les Fornaci de Vedrana | D | 83 | La lettre au Conseil, qui demande du sable « et un prêtre ». La Nuit (affaiblissement et bêtes) côtoie la Famine de Lochmairg, mais chez deux conteurs différents : toléré. |
| ASS096 | La Synaxe des Cires de Ktenaia | D | 83 | Onze médecins, six voix contre cinq, et douze mains levées. La Guérison « deux fois » est le bon foyer de l'écho. L'exil de la Peste est validé (voir les arbitrages). « Par paquets de cent » devient « par paquets entiers ». |
| ASS159 | Le Conseil des Jarres d'Ahuitlapan | D | 80 (71) | « Contre le flanc de la jarre, vous entendez quelque chose nager. » Le Déluge était monotone (voir plus haut), et l'image des îles qui montent ou descendent avec l'eau côtoyait DON002. Les cartes +2, +4 et +5 passent à la pioche et au combo « si elle hésitait déjà ». La forme +7 lâche enfin ce qui nageait dans les jarres. La pirogue du +7 est retirée (DON002 a ses barques). |
| DON104 | Les Gradins noyés d'Ak'ab Ha' | D | 81 (75) | La tache sans reflet qui s'élargit d'une perche par nuit. Le Vide recopiait la Ruine de DON105 (gros coups ciblés payés en défausse) : il s'exile maintenant dans le vide (−3, −4, −6). Les Étoiles perdent une condition d'enchaînement. |
| CIT030 | Halmgard, la Citadelle-Horloge | D | 82 (79) | La treizième heure, que l'horloger n'a pas construite. L'Ordre testait la « troisième carte » 6 fois : il n'en garde que 3, et les autres lisent « si la Garde était déjà levée ». |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 83,7 (82,5).** La voix la plus sûre, toujours, et la seule qui n'avait ni nombre ni gabarit de prose à corriger. Mais il a fait se recopier deux paires de ses propres pôles, et la marque est devenue son appoint réflexe (4 pôles −).
- **B, 81,1 (79,1).** De très bons objets de commerce (la balance de Zinat Ara, le kolo à deux comptes). En revanche, la musique qui répond dans 11 bandes +2..+5 sur 11 est son « pigment » du lot 3.
- **C, 82,1 (78,9).** Les meilleures fables (Lochmairg, Yamaimizu, Haurangi) et la seule zone sous 70. C n'a pas relu ses propres pôles avant d'écrire les seconds (ANT144 contre ANT068, DON079 contre ASS033) : c'est encore la leçon 4.
- **D, 82,0 (78,6).** Des chutes indicibles toujours justes. Mais deux familles venaient d'ailleurs sans qu'il les ait vues (DON104 contre DON105, ANT127 contre DON002 et DON068), et son Déluge était monotone.

**Ressources (48)** : A 82 (81), B 81 (79), C 82 (80), D 81 (80). Les gestes sont presque tous différents. Il y avait un doublon d'objet, un doublon d'image, une comparaison répétée et un gabarit de chute.

## Arbitrages demandés

- **Plafonds d'hésitation et de coups au hasard** : **tenus.** Hésitation en famille principale : CIT036 Foyer (5 cartes) et ASS159 Déluge (4 cartes après correction, réveil compris). Coups au hasard : ASS055 Os et DON104 Étoiles.
- **Enchaînement (`cartesJouees`, `troisCartes`)** : **plafond fixé à deux pôles par lot où il est la famille principale, et à 3 cartes au plus ailleurs.**
  - Le moteur incrémente `nJoues` avant d'exécuter la carte : la carte en cours compte. `cartesJouees` veut donc dire « vous avez déjà joué une autre carte ce tour », et `troisCartes` « c'est au moins votre troisième carte ». Les textes du lot le disent correctement.
  - Gardés : ANT179 Mémoire (le talim, ligne après ligne) et ANT144 Rêve (« Plus j'enchaîne, plus je vais loin »). Les deux viennent de leur récit.
  - Réduits : CIT030 Ordre (de 6 à 3 cartes), DON104 Étoiles (de 4 à 3), ANT053 Raison (de 4 à 3) et ASS030 Feu (de 4 à 3).
- **Vol de vie et écho** : **même plafond que l'hésitation, deux pôles par lot.**
  - Vol de vie : DON002 Sécheresse (le vent qui boit) et ASS092 Vie. DON068 et ANT127 passent à 3 cartes.
  - Écho : ANT100 Clarté (le delta double) et ASS096 Guérison (« deux fois »). ANT121 passe à 3 cartes.
- **A DON002 Sécheresse et B DON068 Cauchemar** : **corrigé dans DON068** (voir le tableau). La Sécheresse garde le fil « gros coups, vol de vie, sous la moitié des PV ».
- **A DON105 Ruine et D DON104 Vide** : **corrigé dans DON104.** La Ruine paie en défausse (les pots qu'on brise), et le Vide s'exile (ce qui tombe dans la tache ne revient pas ce combat). La défausse ne reste que sur −5 et −7.
- **Perce-garde d'A, ASS030 Glace et DON002 Déluge** : **corrigé dans DON002** (perce-garde sur 3 cartes ; la crue soigne).
- **C DON095 Peste et D ASS096 Peste (« frappe tous »)** : **validé.** Les crochets diffèrent. DON095 paie en PV et joue « sous la moitié des PV » (la fièvre du héros). ASS096 est une suite de Lois qui piochent et s'exilent (les tablettes brûlées).
- **Peste / Guérison** (A ASS064, C DON079 et DON095, D ASS096 ; ANT170, ASS168 et DON042 au lot 2) : **corrigé en partie.**
  - Peste : la marque n'est plus sur 7 cartes chez A (ASS064 devient contagion et riposte). DON079 garde la perce-garde (la fièvre passe sous les armures) avec une marque légère.
  - Guérison : quatre pôles soignent le héros, ce qui est inévitable. Les crochets se séparent maintenant : ASS064 récupère et pioche, DON079 brûle (le moxa), DON095 donne du mana de Vent et pioche, ASS096 fait écho.
- **A ANT118 Famine/Festin et C ANT068 Lochmairg** : **validé.**
  - Famine : meute et coups sur l'ennemi seul (A), contre affaiblissement et sangsues (C).
  - Festin : sacrifice de bêtes contre mana de Pierre (A), contre nuées de hérons et pioche (C).
- **A ANT016 Exil/Foyer et C CIT036** : **validé.**
  - Exil : bêtes fragiles, marque et exil de la carte (A), contre garde massive et ennemi seul (C).
  - Foyer : bêtes gardiennes et récupération (A), contre soin et hésitation (C).
- **Sang / Sève** (B ASS176, B CIT026, C ANT121) : **validé.**
  - Sang : « sous la moitié des PV » et affaiblissement (ASS176), troupes sacrifiées (CIT026), marques et loups (ANT121).
  - Sève : récupération (ASS176), garde et soin des alliés (CIT026), soin et élans (ANT121, désormais sans écho dominant).
- **D ASS096 : exil de 4 cartes et forme −7 exilée** : **pas trop dur, validé.** Une carte exilée revient au combat suivant. Ce sont 5 Lois fortes à usage unique, et 2 cartes sur 7 restent dans le paquet. Le budget compte l'exil comme un prix de 3.
- **C CIT012 : bloqueurs écrits en bêtes à 0 d'attaque** : **validé**, comme ASS168 au lot 2. `invoque` fabrique une bête sans attaque et sans épines (pas un `mur`). Elle compte donc pour la condition `bete` et peut subir `prixBete`. Le texte dit « si une bête ou un bloqueur » : c'est exact.
- **Formes du palier 7 sans prix** (C ANT144 −7 et DON011 −7) : **corrigé.** ANT144 −7 coûte « votre bête la plus faible perd 6 PV » (la noyade), et DON011 −7 « le héros perd 6 PV ». La phrase d'ouverture est gardée, et les deux tiennent dans les 250 caractères en resserrant le reste.
- **B ASS176 +7 : double reprise** : **corrigé** (voir le tableau).
- **Boosts** : deux sur 560 cartes, B ASS055 +6 et A ASS083 −7, tous deux au palier 5 ou plus. **Validé.**
- **Récits en liste chez A** (ANT198, l'inventaire ; DON105, la liste de tribut) : **validé.** Deux, c'est la limite de la leçon 7 du lot 1. ASS083, le décret, a une autre structure (trois attendus).
- **Gestes et images des 48 Ressources** (croisés entre les quatre conteurs) :
  - **Doublon d'objet** : RES165 (A, on fabrique des tesselles d'or) et RES177 (C, on les décolle des voûtes), toutes deux byzantines. RES177 devient **Les Coupoles à miel de Chrysokamara** : on enfume les essaims logés sous les coupoles.
  - **Doublon d'image** : RES154 (A, « un nuage de balle dorée ») et RES234 (C, « la paille vole en nuages dorés »). La bande 2-3 de RES234 est changée.
  - **Comparaison répétée** : « léger comme le liège » dans RES318 (B) et RES059 (D). RES059 devient « l'écorce sèche ».
  - **Éléphant laineux (D RES143)** : pas de doublon de Ressource. L'éléphant blanc d'ANT013 est une carte rêvée. Le récit de RES143 faisait 51 mots, ramenés à 49.
  - **Animaux de verre (D ANT105) et souffleurs de RES099 (A)** : une zone contre une Ressource, et deux gestes différents. Toléré.
  - **Chutes** : « le produit part vers… » revenait 5 fois chez B (RES012, RES048, RES178, RES239, RES278). RES012, RES178 et RES278 ont maintenant une autre chute. Chez A, la structure du prélèvement revenait 3 fois (RES043, RES154, RES165) : RES165 la perd.
- **Même biome et mêmes mots de pôle** (DON002 et ASS159 : Îles flottantes, Sécheresse/Déluge) : **corrigé en partie.** Les cartes se séparent (voir le tableau), et le +7 d'ASS159 n'a plus de pirogue. L'idée commune « l'altitude de l'île dit l'eau » reste. Elle est tolérée, parce que les mécanismes sont opposés : chez DON002, l'île descend jusqu'au fleuve ; chez ASS159, elle monte quand on brise sa jarre.

## Défauts de fond (au-delà des corrections)

1. **La saturation des familles secondaires.** Avec une douzaine de familles pour 80 pôles, la perce-garde est famille principale (au moins 5 cartes) dans 10 pôles, l'affaiblissement dans 10, la marque dans 8. Je n'ai corrigé que les paires qui se recopiaient vraiment. Il reste un même conteur sur plusieurs pôles :
   - A : la marque dans ANT016 −, ANT198 − et ASS030 −.
   - B : l'affaiblissement dans ASS161 −, ASS176 − et DON023 −.
   - C : la perce-garde dans ASS092 −, DON011 − et DON079 −, et la garde du héros dans 5 pôles.
2. **Les crochets répétés.** La condition `blesse` (« sous la moitié des PV ») est sur 5 cartes ou plus dans 5 pôles, dont 3 chez A (ASS083 −, CIT005 −, DON002 −). La condition `seul` l'est dans 4 pôles (ANT066 +, ANT118 −, CIT036 −, DON010 +).
3. **Les budgets comptés différemment.** B compte l'exil pour 0 (ANT179 −1 tombe à −20 % au barème commun), et deux ou trois conteurs oublient le vol de vie. Les écarts restants (DON002 +5 à +16 %, ASS096 −1 à +16 %, ASS033 +2 et DON095 +2 à −15/−17 %) sont mineurs et laissés tels quels.

## Corrections faites (85 objets modifiés : 63 cartes et 22 fiches, plus 4 lignes de prose)

**Zone réécrite (C)**
- **DON011** : le pôle Lumière en entier (7 cartes) et le prix de la forme −7. La Lumière devient gros coups ciblés et pioche (la carte du récif d'Anselme). Les balises blanches marquent (+3, +5, +7), et la carte suivante paie sur la marque (+6). La Vitre fait tomber la garde (+4). Le réveil Givre est gardé. Il reste 4 prix sur 6, en défausse. Les lignes « Familles » et « Fil mécanique » de la prose sont mises à jour.

**Doublons de familles et plafonds (cartes)**
- A : DON002 +2, +3, +4 ; CIT005 −2, −4, −6 ; ASS064 −1, −3, −5, −6 ; ANT053 +5 ; ASS030 +6.
- B : ANT179 −2, −3, −4, −5 ; DON068 −2, −4, −5, −6 ; ASS176 +7.
- C : ANT144 −4, −5, −6, −7 ; ANT121 +3, +5, +6 ; DON079 +2, +3, +4, +6, +7.
- D : ANT127 −2, −3, −4, −6 ; DON104 −3, −4, −6, +5 ; CIT030 +3, +5, +6 ; ASS159 +2, +4, +5, +7.

Les budgets de ces cartes sont recalculés au script (« recalculé par le critique ») et les tags sont mis à jour.

**Prose et nombres**
- B : 9 lignes `pal` de la bande +2..+5 (ANT066, ANT019, ANT100, ASS161, ASS055, ASS176, DON068, DON023, DON003).
- Nombres : ANT016 (récit), ANT066 +7, ANT019 +7, CIT026 −3, ASS176 −4 et +4, ASS096 −4 (nom et ambiance), DON095 (récit et −2), RES058.
- Fiches et récits : ASS092 (chute du récit), ASS159 (`pal` du +7, ambiance du +7).
- Ressources : RES177 (nouvelle fiche), RES234, RES165, RES059, RES143, RES012, RES178, RES278.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 88 fiches et les tableaux de cartes.
- 40 zones à 14 cartes (pôles − et +, paliers 1 à 7), soit 560 cartes.
- Chaque effet fait 250 caractères ou moins. Chaque ambiance compte 12 à 20 mots, chaque récit 60 à 100 mots (30 à 50 pour une Ressource), chaque `pal` 160 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2, et `"cible":1` figure partout où une opération vise la cible.
- Le tag Loi est conforme.
- Chaque forme du palier 7 pose une résonance, en réveille une autre, a une phrase d'ouverture et un prix.
- Aucune condition n'est remplie par la carte elle-même avant son `si`.
- Les 88 noms du lot sont uniques entre conteurs et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés (244 noms, triés, sans doublon).

**Non bloquant, laissé tel quel** : les identifiants n'ont pas le même format chez les quatre conteurs (`ANT066-moins1` chez B, `-moins-1` chez C et D, `-moins7` au palier 7 chez A), et B, C et D écrivent deux tableaux de 7 cartes par zone au lieu d'un tableau de 14. `assembler.py` range les cartes par zone, pôle et palier : sans effet.

## Leçons pour le lot 4 (à ajouter aux consignes)

1. **L'enchaînement a son plafond.** `cartesJouees` et `troisCartes` sont la famille principale de deux pôles au plus par lot, et ne passent pas 3 cartes ailleurs. La carte en cours compte : écrire « si vous avez déjà joué une autre carte ce tour » ou « si c'est au moins votre troisième carte ».
2. **Le vol de vie et l'écho ont le même plafond que l'hésitation et le hasard**, deux pôles par lot. Toutes les autres familles (perce-garde, affaiblissement, marque, riposte, brûlure, garde du héros) sont famille principale (5 cartes ou plus) dans 2 pôles au plus par conteur et 6 au plus par lot. Avant d'écrire, les conteurs remplissent ensemble **une seule carte des familles du lot** (pôle → famille principale, famille d'appoint, crochet), et chacun y relit aussi ses propres pôles.
3. **Les crochets tournent aussi.** Une même condition (`blesse`, `seul`, `vol`, `pietine`, `cibleGarde`…) sur 5 cartes ou plus : 2 pôles au plus dans le lot, et 1 seul par conteur.
4. **Pas la même carte avec de plus gros chiffres.** Un pôle mêle au moins trois familles sur ses 7 cartes. Une hésitation de « tous » ne revient pas plus d'une carte sur deux : le moteur fait « s'habituer » un chef qui hésite deux tours de suite.
5. **Même biome et mêmes mots de pôle dans un lot** (DON002 et ASS159) : le second conteur change d'image (ni la même eau, ni les mêmes barques, ni la même altitude), pas seulement de cartes.
6. **La liste des nombres précis est commune aux quatre conteurs**, pour les récits, les `pal`, les noms et les ambiances. Les tics à surveiller sont l'instrument qui « répond » dans la bande +2..+5 (B, au plus deux fois), le récit qui finit sur un conseil à l'impératif (C, au plus deux fois) et la marque en appoint réflexe (A).
7. **Une seule table de budget, complétée** : exil = 3 points de prix, vol de vie = moitié des dégâts de la carte, `si` = 50 %. Le validateur commun la porte, et ses écarts au-delà de ±15 % sont corrigés avant la remise.
8. **Ressources** : la chute « le produit part vers… » (B) suit la même règle que les autres gabarits (3 au plus). Un même objet est un doublon même quand le geste diffère (tesselles d'or fabriquées, puis décollées).
