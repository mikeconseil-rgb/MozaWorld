# Critique du lot 12 : 44 zones à cartes

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 11), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). LISTE.md, avec son tableau « Places des familles » et ses paragraphes « Reprises » et « Vocations », a servi de référence pour les places. Les reprises, les vocations, les places libres et les crochets ont été recomptés au script sur les lots 1 à 11 (960 pôles). Les signalements des conteurs viennent des fichiers familles_A.md à familles_D.md et des notes en fin de conteur_X.md.*

## Verdict

**Le lot est accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** La moyenne passe de **80,7** avant correction à **80,9 / 100** après. Aucune zone n'est refusée, et **aucune n'est sous 70** : aucune n'a donc été réécrite en entier.

Les corrections portent sur 14 cartes (3 changements de condition, 7 Lois ajoutées, 2 formes ultimes renommées, 2 noms de carte), 1 récit, 2 bandes `pal` et 1 nom de zone. Une note du critique est ajoutée en tête de 8 zones. Il y a quatre sortes de corrections :
- **Deux +7 rejoués sur le même couple, chez B, second inscrit** (leçon 6 du lot 11) :
  - ASS088 (Famine / Festin) finissait sur les tables du banquet jusqu'aux dunes, comme la cour-table de A CIT044 ;
  - ASS069 (Silence / Chant) finissait sur tout le camp qui chante la même louange, comme la jungle qui chante une seule note de D ASS097.
- **Un nom en double dans le lot** : « l'Attente » était le mot principal de C ANT069 et de D ANT003. D était inscrit avant C : le nom de C change.
- **Une reprise de B qui n'était neuve que contre son origine** : la Pourriture en brûlure reprenait le crochet `garde` et le prix en PV de la Pourriture de A CIT041 (lot 3). Le crochet change.
- **Deux défauts de forme** :
  - les Assemblées de B n'avaient qu'une carte de Loi sur sept dans 7 pôles (trois aux lots 10 et 11) ;
  - une chute de A rejouait pour la troisième fois du lot la promotion qui éloigne.

À la remise, les quatre validateurs ne trouvaient aucune erreur sur les règles écrites, et le mien non plus. Il vérifie :
- le format (un bloc fiche et un bloc de 14 cartes par zone, JSON lisible) ;
- les longueurs ;
- l'ordre des opérations et les conditions connues du moteur ;
- les conditions rendues vraies ou fausses par une opération qui les précède, `si` imbriqués compris, la garde des alliés comptée comme une Garde levée ;
- les plafonds sur la carte entière, `si` et réveil compris ;
- l'écho au premier niveau ;
- le tag Loi et `"cible":1` ;
- les budgets et le palier 7.

Les leçons du lot 11 ont porté :
- **`hesite` et `hesiteAvant` sont comptés ensemble** partout (A 3, B 3 après correction, C 2, D 3) ;
- **la garde des alliés est lue comme une Garde levée** : aucun pôle qui lit `garde` ne donne de garde, ni au héros ni aux alliés, avant son `si` (D a changé le crochet de son Chant pour cette raison) ;
- **les reprises sont toutes déclarées**, et toutes sont un 2e emploi par un autre conteur, avec crochet, prix principal et bête nouveaux contre l'origine ;
- **le registre est tenu** : aucun sacrifice, aucune mutilation, aucun châtiment décrit, aucun enfant en danger. B avait corrigé de lui-même un « garçon », un « pendu » et un « sacrifice royal » avant la remise ;
- **les gros coups font 5 cartes** (D Nectar), jamais 6.

Les récits restent la force du lot :
- « Le gel n'est jamais revenu. Le tribut, si. » (A ASS026) ;
- le chaulier qui « a doté ses filles avec la doctrine » (A ANT159) ;
- « Depuis, on nomme tous les ans un homme pour ne pas la nettoyer. » (B DON129) ;
- « L'été suivant, Ásgaut pria pour la tempête. » (B ASS065) ;
- les vieux qui vont choisir leur place sur l'île des morts « et en reviennent les mains violettes » (C ASS149) ;
- « Il dit que l'huile coûte, et que Dieu lit dans le noir. » (C ANT168) ;
- « À midi, toutes les pierres sont nues, sauf une, qui en porte deux. » (D ANT014) ;
- le torrent qui « attend que Sōen finisse sa phrase » (D ANT057).

Le défaut neuf du lot : **les places ne tiennent plus.** B, dernier inscrit et second sur 10 de ses 11 couples, n'avait que 10 places libres pour 17 (vérifié au script par couplage maximal). Il a fait 7 reprises au lieu de 2. A, C et D perdent 4 places en tout. La règle des reprises doit changer pour le lot 13 (voir les arbitrages).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| CIT044 | Utaat Uul, la Table du Noyan | A | 81 | La réputation qui ruine, et « Bayartu fut fait gouverneur, pour sa table ». Riposte tenue à 8, réveil compris. |
| DON018 | Qiuqtaq, la Coque échouée | A | 81 | La porte qui déplace la querelle. La porte debout seule au +7 est une vraie image. |
| ASS026 | Le Yoriai d'Itegata | A | 82 | Le meilleur récit de A : le précédent devenu redevance. Écho sur 4 cartes exactement, 3 cartes faites pour être doublées. |
| ASS145 | Le Darbar de Nindabad | A | 81 | Le rideau salué. La promotion qui éloigne (Itimad Khan) reste : 2e du lot chez A, le plafond. |
| ASS085 | L'Ayllu de Mullupata | A | 80 (79) | Les os de lamas à la place des ancêtres. La chute (Sayri promu, qui ne revoit pas l'île) était la 3e promotion qui éloigne du lot chez A : elle change. |
| ASS087 | Le Popol Nah de Saktun | A | 80 | L'accoutumance, et le prêtre « qui guette leur visage ». Colonne défausse / `defausseAPrix` propre. |
| ANT159 | Koniama, les Saints sous la chaux | A | 82 | Les saints qui reviennent, et les cigognes qui « ne prennent pas parti ». Pureté en invocations : 3e et dernier emploi. |
| ANT008 | Iakhu-Neheh, la Barque remployée | A | 81 | Le remploi, et « Hesy, lui, a refusé de bâtir la suivante ». Les ±7 diffèrent de ceux de B ANT138. |
| ANT077 | Kuuguaq, les Aveux du Dégel | A | 81 | « La toux partit avec le dégel. Les aveux restèrent. » |
| ANT199 | Mai Qalat, la Cour du Calao | A | 80 | Le juge et son oiseau. La Vérité lit `defausseAPrix` sans payer en défausse (toléré, voir les arbitrages). |
| ANT050 | Mezhovina, la Laine commune | A | 80 | La mise en commun et les balances. Juste, mais la chute se devine. |
| DON129 | Daulatbagh, la Descente du Firman | B | 81 (80) | La visite qui vient l'année où l'on renonce. Crochet `garde` → `hesite` sur la Pourriture (reprise). |
| ASS037 | Le Baito de Desset Gual | B | 81 (80) | « C'est le village qui rame. » Une Loi ajoutée au Foyer ; le « pop-corn » devient du maïs éclaté. |
| ASS088 | Les Sitônes de Leukarénè | B | 80 (77) | Le banquet de façade. Le +7 était celui de A CIT044 : il devient les greniers qui débordent. Une Loi ajoutée à la Famine. |
| ASS069 | Le Chilot de Dägga Bered | B | 81 (78) | La louange à double sens, le meilleur récit de B. Le +7 était celui de D ASS097 : il devient le col plein de chansons différentes. Une Loi ajoutée au Chant. |
| ASS038 | Les Mékhum de Phĕh Mrech | B | 80 (79) | L'interdit du brûlis et le miel « trop doux ». Une Loi ajoutée sur chaque pôle. |
| ASS065 | Le Lögberg de Rústavík | B | 82 (81) | La loi du beau temps. Une Loi ajoutée sur chaque pôle. |
| ANT029 | Vai Toromiro, la Trêve de l'Arbre | B | 80 | « L'arbre mourut de vieillesse, et la trêve lui survécut. » Hésitation (place rare) propre. |
| ANT138 | Sasso Grifòn, la Dîme des Vautours | B | 81 | « Il compta les vautours, et doubla l'impôt. » Étoiles en mana : reprise. |
| ANT124 | Rusenigo, les Poids du Consul | B | 81 | La rouille qui « s'ajoute ». Rouille en invocations : 3e et dernier emploi. |
| ANT085 | Emabhuqwini, le Code des Perles | B | 80 | Les colliers qui ne se lisent plus, « et l'on s'y marie davantage ». |
| ANT125 | Tuol Andong, la Bonde du Roi | B | 80 | Le gardien qui ouvre sans ordre. Le +7 (la ville inondée) est proche de celui de D ANT003 : toléré, la pente du Déluge. |
| DON084 | Emgodini, la Cage du Tonnerre | C | 81 | Le geôlier tenu par sa prison : « il ne l'a jamais vu ». |
| ASS007 | Rhizonium, la Remise du Censeur | C | 82 | La ruine jouée et rachetée. Vol de vie (place rare) au lieu de la marque de D sur l'Abondance. |
| ASS066 | Dún Glasáin, les Murs bénis | C | 82 | La protection qui attire le pillage : « ils ne sont pas saints ». |
| ASS129 | Gazān, l'Aïeul à vendre | C | 81 | L'aïeul vendu à tout le bazar. Sève en affaiblissement : reprise. |
| ASS149 | Siqinnaaq, les Baies du Deuil | C | 83 | Le meilleur récit du lot : l'interdit tourné par le deuil. |
| ANT168 | Däbr Ṭäla, le Colophon de l'Abbé | C | 82 | Le seul document cité du lot. Hippopotames, et non plus les roussettes de D. |
| ANT116 | Misogi-ura, la Navette des Souillures | C | 81 | Les deux récifs qui se renvoient la barque. Colonne marque / `vulnerable`. |
| ANT154 | Temicxoc, le Rêveur à gages | C | 81 | L'imposteur qu'on garde, et qu'on paie plus cher. Colonne garde / `garde`. |
| ANT069 | Qaartuq, le Caillou rendu | C | 80 (79) | La boucle du caillou. Le nom (« l'Attente du Caillou ») reprenait le mot principal de D ANT003 : il change. |
| ANT152 | Yudang, la Saumure de l'Empereur | C | 81 | L'échec érigé en norme. Coups au hasard (place rare). |
| ANT025 | Te One Pō, le Salaire des Étoiles | C | 80 | Le salaire changé. Familles déplacées avant les cartes (voir D). |
| CIT029 | Seteral, la Herse des Spores | D | 81 | « C'est la forêt qui la tient. » Le seul +7 du lot où la pousse prend un bâtiment (voir les arbitrages). |
| DON118 | Zarvanak, le Rucher sous le sable | D | 81 | La jarre qui « attend Farrokh ». Gros coups : 5 cartes exactement. |
| ASS016 | Le Rīš-safīdān de Kuhsard | D | 82 | Les braises des bannis qui se rapprochent. Colonne défausse / `defausseAPrix`. |
| ASS139 | Le Tlahtocan de Teocalcingo | D | 80 | Semer avant la coulée. |
| ASS097 | La Gérousia de Kerkyleia | D | 81 | La forêt qui vote. Hésitation (place rare), jamais deux « tous » de suite. |
| ASS029 | Le Tālār de Sīrāvand | D | 81 | Les racines qui gardent les faux serments. Écho sur 4 cartes au premier niveau. |
| ANT014 | Taputea, la Pierre qui porte l'ombre | D | 82 | « Sauf une, qui en porte deux. » Colonne bête / `bete`. |
| ANT036 | Ṣalli-Amurri, la Vigie des Guêpiers | D | 80 | L'aube à l'ouest. |
| ANT057 | Nagisawa, le Torrent assoupi | D | 82 | Le sûtra inachevé. Calme en invocations : 2e emploi. |
| ANT023 | Hirugino, la Passerelle haute | D | 81 | Les martins-pêcheurs qui plongent vers le haut. |
| ANT003 | Unuchaki, l'Attente des Nuages | D | 80 | Le coureur que la pluie suit. Bêtes du palier 7 à 59 PV (tolérées). |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 80,8 (80,7).** Les chutes les plus sèches et les cartes des familles les plus complètes. Mais la promotion qui éloigne revient (trois fois au lot, après « muté avant le froid » au lot 11), et trois noms reprennent une institution déjà en jeu (Yoriai, Darbar, Popol Na).
- **B, 80,6 (79,7).** Des récits de choses très sûrs (le compte des vautours, les poids rouillés, le puits qu'on ne nettoie plus). Mais deux +7 pris aux premiers inscrits, malgré la comparaison annoncée, et des Assemblées presque sans Lois.
- **C, 81,3 (81,2).** Le meilleur récit du lot, et le second inscrit qui a vraiment changé : les quatre familles signalées par D, et ses roussettes. Un nom en double est resté.
- **D, 81,0 (81,0).** L'étrangeté la plus juste et aucune correction. Les avertissements de D étaient exacts au moment où il les a écrits.

Moyenne du lot : **80,9** (80,7 avant).

## Arbitrages demandés

- **Les 7 reprises de B (règle : 2 au plus).**
  - **Le constat, vérifié au script.** Familles jamais principales sur le mot aux lots 1 à 11 et non prises sur le même mot au lot, réparties au mieux par couplage maximal : B tient **9 places libres**, plus la pioche du Chant sous la règle des vocations, soit 10 sur 17. A en tient 12, C 13, D 12. Avec 2 reprises, 2 vocations et 3 colonnes, cinq pôles de B restaient sans famille principale, sans vocation et sans colonne : une mosaïque, interdite. Perdre une place ne servait à rien. Sur ces pôles, aucune vocation n'est ouverte (déjà B, trois emplois, ou une vocation d'un autre conteur sur le mot au lot). Il ne restait que des colonnes, sur trois couples encore libres dans le lot (garde / `garde`, brûlure / `brule`, hésitation / `hesite`). C'est la variante de B : 6 colonnes, le double du plafond.
  - **Pôle par pôle** (contre l'origine, puis contre tous les emplois du mot aux lots 1 à 11) :
    - **Or en riposte** (après D ASS041) : `vulnerable`, la bête en prix principal, des chacals. Tout est neuf pour le mot. **Gardée.**
    - **Ordre en marque** (après D CIT015) : `piocheCout0`, jamais lu sur l'Ordre ; prix principal en PV, neuf contre l'origine ; des tisserins. **Gardée.**
    - **Calme en garde des alliés** (après D ASS106) : `piocheCout0`, jamais lu sur le Calme ; prix principal en soin ennemi, neuf contre l'origine ; pas de bêtes (Assemblée). **Gardée.**
    - **Étoiles en mana** (après A ASS105) : `brule` (2 cartes seulement chez C ANT007), la bête en prix principal, des puffins. **Gardée.** A paie aussi ses Étoiles en bête au lot, mais avec une autre famille, un autre crochet et d'autres oiseaux.
    - **Pourriture en brûlure** (après D ASS100) : `garde` et les PV étaient déjà l'assemblage de la Pourriture de A CIT041 (lot 3). **Acceptée, avec une correction** : le crochet devient `hesite` en −2, −4 et −6. `hesite` n'a jamais été lu sur ce mot, et aucune carte du pôle ne fait hésiter. B a maintenant 3 pôles `hesite` / `hesiteAvant` (Pourriture, Tempête, Chant) et 2 pôles `garde`. L'assemblage PV et `hesite` est dans 2 pôles chez B, le plafond.
    - **Croissance en garde du héros** (après C DON051) : `vulnerable` est le crochet que la Croissance de B avait déjà au lot 11 (ASS081, après la correction du critique). **Acceptée sans correction** : il n'existe aucun autre crochet libre sur ce mot sous les plafonds de B (`piocheCout0` est à 3, les intentions à 2, le reste a déjà été lu sur la Croissance).
    - **Déluge en mana** (après A ASS017) : `garde` a déjà été lu par C ANT002 (lot 10), avec un autre prix et une autre famille. **Acceptée sans correction.**
  - Aucune des sept n'est un 3e emploi ni une reprise de B sur sa propre famille. Les sept sont déclarées. **Le nombre est accepté pour ce lot** : la faute est d'abord à LISTE.md, qui devait retirer avant de répartir les places que B ne pouvait pas tenir (leçon 3 du lot 11), et ne l'a pas fait.
  - **Règle proposée pour le lot 13**, où les mots seront plus épuisés encore :
    1. avant de répartir, LISTE.md calcule au script, pour chaque conteur, le couplage maximal de ses pôles avec les familles libres sur ses mots, le **nombre de places tenables**. Elle ne donne que ces places, plus 3 reprises ;
    2. une reprise reste un 2e emploi, par un autre conteur. Son crochet et son prix principal sont neufs **pour le mot entier** (jamais un crochet lu sur 3 cartes ni un prix payé sur 5 cartes sur ce mot, quand c'est possible), pas seulement contre l'origine. Un conteur ne reprend jamais son propre crochet sur le même mot ;
    3. 3 reprises au plus par conteur ;
    4. ce qui manque devient une vocation, ou une colonne (4 au plus). Sinon, la place est **perdue avant les cartes**, et la carte des familles le dit.
- **Places perdues : A 2 (brûlure, seconde marque), C 1 (marque), D 1 (seconde perce-garde).** Vérifié au script :
  - A : la brûlure n'est libre sur aucun de ses 22 mots, et la marque ne l'est que sur le Sommeil, qui tient la première ;
  - C : la marque n'est libre que sur la Ruine et sur la Pierre, qui tiennent la brûlure et le soin du héros, deux places qui n'ont pas d'autre mot libre ;
  - D : la perce-garde n'est libre que sur l'Abysse (qui la tient) et sur le Ciel, seul mot libre pour sa riposte.
  Chaque échange ne ferait que déplacer la perte, ou demanderait une 3e reprise. **Validé.**
- **Les 4 colonnes de A** (Nectar, Vide, Peste, Ordre) viennent de ses 2 places perdues : 15 places, 3 vocations et 4 colonnes font 22. **Toléré**, comme au lot 11. Les quatre se remplissent elles-mêmes : le crochet est sur 4 cartes, et l'effet sur 4 (la Peste a son hésitation sur 4 cartes et la lit sur 4, toujours avant).
- **La pioche principale de A sur 2 pôles** (l'Éveil en place, le Corail en vocation d'Assemblée). Ce sont deux 2es emplois de la pioche d'Assemblée, chez un autre conteur que le premier, avec `piocheCout0`, que ni B ASS078 ni C ASS002 ne lisaient. **Conforme.** Les quatre conteurs font de même : B (Exil, Chant), C (Sang, Floraison), D (Ruine, Mensonge). Le lot a donc **8 pôles de pioche principale**, pour un plafond de 6 par famille : la pioche d'Assemblée échappe au plafond de sa famille. Voir la leçon 5.
- **La Vérité de A lit `defausseAPrix` sans payer en défausse.** C'est un crochet de paquet : il vaut avec les autres cartes, qui paient en défausse (le Sommeil, l'Os, le Corail, la Glace et le Nectar de A). Le moteur remet `defPrix` à zéro à chaque tour : la condition vaut pour le tour, et la carte ne la remplit pas elle-même. **Toléré**, comme au lot 11 (A Aurore, C Abysse). Quatre autres pôles du lot font de même : B Rouille, C Cristal, C Cauchemar, et la Vérité de A.
- **Les familles de C sur les mots de D (D inscrit à 19 h 22, C à 19 h 24).** Recompté sur les cartes remises : C a tout changé avant les cartes, et il ne reste aucun recoupement :
  - Abondance : vol de vie chez C, marque chez D ;
  - Abysse : soin des alliés chez C, perce-garde chez D ;
  - Nuit : perce-garde chez C (reprise déclarée), exil chez D ;
  - Aurore : exil chez C, affaiblissement chez D.
  Les roussettes de C sont devenues des hippopotames, et le −7 de la Nuit de C est la piste effacée, plus une nuit tenue. Il restait le nom (« l'Attente »), **corrigé chez C**. Aucune famille principale n'est commune aux deux pôles d'un même mot ni d'une même zone (script).
- **Couples, recomptés au script** (effet sur 3 cartes ou plus, crochet sur 2 ou plus) :
  - défausse / `defausseAPrix` : 2 (D Foyer, A Nectar) ;
  - PV / `blesse` : 2 (D Sécheresse, A Vide) ;
  - bête / `bete` : 2 (D Ombre, C Lumière) ;
  - marque / `vulnerable` : 2 (B Floraison, C Pureté) ;
  - garde ennemie / `cibleGarde` : 2 (A Ordre, B Sève) ;
  - hésitation / `hesite` 1 (A Peste), brûlure / `brule` 1 (B Sécheresse), garde / `garde` 1 (C Rêve).
  **Tous conformes.** Les crochets sont dans 3 pôles au plus par conteur, `hesite` et `hesiteAvant` ensemble. Les intentions ennemies sont dans 7 pôles du lot, 2 au plus par conteur. Aucun assemblage prix et crochet n'est dans plus de 2 pôles d'un même conteur.
- **Bêtes, recomptées sur une table commune** (les 44 familles nommées au script, à la maille de la famille courante ; les rongeurs, les lézards et les tortues comptent chacun comme une famille) :
  - **à 2, conformes** :
    - canidés (A chiens de traîneau, B chacals dorés) ;
    - laridés (A mouettes ivoire, B sternes) ;
    - anatidés (B tadornes, D canards à crête) ;
    - strigidés (C harfangs, D grands-ducs) ;
    - rongeurs (C lemmings, D viscaches) ;
    - lézards (B varans, C geckos) ;
    - tortues (A tortue grecque, C tortues molles) ;
  - **seules** : toutes les autres familles, dont les accipitridés (les vautours de B, seul rapace diurne du lot), les ptéropodidés (les roussettes de D) et les corvidés (D) ;
  - **les poissons-serpents de B sont des poissons** (channidés), et non des serpents : ils ne font pas paire avec la vipère de A. Les poissons du lot sont tous de familles différentes : salmonidés (A), channidés (B), labridés (C), dasyatidés (D) ;
  - chaque vocation et chaque reprise d'Antre a une bête principale nouvelle pour son mot.
- **Bêtes de D jusqu'à 59 PV au palier 7** (Viscache de la poussière 59, Phaéton-soleil 59 ; C a un Colibri-roi à 60). Le budget compte les PV pour moitié, la frappe reste à 6 au plus, et les lots 10 et 11 en avaient déjà de 57 à 65. **Toléré.** Mais les bêtes de 46 à 54 PV aux paliers 5 et 6 (D) font un mur que le budget ne voit pas. Voir la leçon 6.
- **Le +7 de Seteral** (D CIT029 : « la herse tient debout dans un nœud de mycélium », la cour en sous-bois de chapeaux). Un champignon n'est pas un végétal, mais l'image est bien celle de la pousse qui prend un bâtiment. Le château reste debout, et c'est **la seule zone du lot** sur cette image : le lotus de C ANT152 ombrage le yamen sans le prendre, et le maïs de D ASS139 couvre la lave, non le conseil. **Validé** au titre de « une seule zone par lot ».
- **Noms en avertissement chez D** : Kuhsard (« montagne froide ») et Unuchaki (« eau sèche »). Le mot traduit compte pour le mot principal et pour le préfixe, pas pour le sens d'un nom de lieu qui recoupe un adjectif d'un autre nom. **Validés.**
- **Deux récits éthiopiens (C ANT168, A ANT199), et même quatre zones éthiopiennes au lot** (avec B ASS037 et ASS069). Ils ne partagent ni le lieu (le lac et son île monastique, l'oasis et sa cour de justice, le récif, le col), ni l'institution (abbé et däbtära, juge, baito, chilot), ni les prénoms (A a changé son Gebru en Mersha), ni les bêtes (hippopotames et lucioles ; calaos, drongos, damans). L'autorité qui profite d'un détour (l'huile mesurée, les sauterelles) est un trait commun, mais les intrigues diffèrent. **Toléré.**
- **Registre.** Tous les récits, `pal`, ambiances et noms de carte ont été relus pour un jeu de fantasy grand public pour adultes. **Rien ne dépasse** : aucune violence détaillée, aucun sacrifice, aucune mutilation, aucun châtiment décrit, aucun enfant en danger, aucun contenu sexuel. Sont gardés :
  - la garnison qui « mangea les os » (A CIT044) et la querelle « à coups de barre de fer » (A DON018 −5), dites sans montrer ;
  - le berger « givré » assis au −7 de C DON084 ;
  - la jarre qui « attend Farrokh » (D DON118) ;
  - Hinatea qui « n'a plus vu que du blanc » (D ANT014 +5) ;
  - les « lances » de B ANT029, jamais levées.
  Les enfants du lot ramassent des perles, des plaques de glace ou du maïs grillé.
- **Décors et images proches, tolérés** :
  - le +7 de B ANT125 (la ville où glissent les barques) et celui de D ANT003 (les relais à moitié sous l'eau) : deux inondations, mais le cratère qui déborde et la pluie qui court ne sont pas une même métamorphose ;
  - le +7 de B ASS065 (la baie lisse comme une table) et celui de D ANT057 (le torrent arrêté, debout comme un miroir) ;
  - les deux −7 de l'Abysse (C ANT069, la faille qui mange le camp ; D ANT023, l'eau noire où passe quelque chose).
- **Noms.**
  - **Corrigé** : C ANT069, « Qaartuq, l'Attente du Caillou » devient « **Qaartuq, le Caillou rendu** ». « L'Écoute », d'abord essayée, est déjà en jeu au pluriel (« Les Écoutes de la Secca Barbarana »).
  - **Tolérés** :
    - trois noms de A reprennent un mot d'institution déjà en jeu dans un autre nom : « Le Yoriai d'Itegata » (Le Yoriai de Kurayabu, lot 7), « Le Darbar de Nindabad » (Le Darbar de Sharbatabad, lot 5), « Le Popol Nah de Saktun » (Le Popol Na de Taab Ek', lot 2). La règle borne un mot d'institution à une zone par lot. Le jeu en a déjà deux « Cabildo » (lots 4 et 6). Voir la leçon 4 ;
    - « Mai Qalat » (A) et « Vai Toromiro » (B) : leurs premiers mots sont à une lettre l'un de l'autre, et veulent tous deux dire « eau ». Les premières moitiés entières diffèrent ;
    - des compléments déjà en jeu ailleurs, mais seuls dans le lot : « des Spores », « du Consul », « du Roi », « sous la chaux ».
  - Aucun mot principal, complément, préfixe ni prénom n'est en double dans le lot après correction.
- **Nombres.** Il y a peu de nombres précis : « onze » (C DON084), « dix ans » (C ASS007), « dix-neuf » (C ANT168), « vingt hivers » (C ANT069), « deux lunes » (C ANT152), « un demi-siècle » et « la centième fois » (C ANT116). « Deux » revient comme un mot courant chez C (les deux récifs, deux dunes, deux cousins), et une fois chez D, où c'est la chute (ANT014). **Toléré.**

## Défauts de fond (au-delà des corrections)

1. **La répartition des places précède le compte des places tenables.** LISTE.md a donné 17 places à chacun, sans vérifier que les mots de chacun pouvaient les porter. B, dernier inscrit, en tenait 10. La règle des reprises ne tient que si les places sont comptées avant.
2. **La comparaison des ±7 entre couples est déclarée, pas faite.** B liste dans sa carte des familles les images de A et de D sur ses couples, puis écrit la même métamorphose (la table qui s'étend, le chant à l'unisson). Comparer des objets ne suffit pas : il faut comparer le geste du +7.
3. **La pioche d'Assemblée échappe au plafond de sa famille.** Chaque conteur la prend deux fois, l'une en place, l'autre en vocation : 8 pôles de pioche principale au lot.
4. **Un conteur peut perdre le genre de ses zones en tenant les règles.** Les Assemblées de B tenaient tous les plafonds, mais avec une seule Loi sur sept cartes, elles ne se lisaient plus comme des Assemblées.

## Corrections faites (14 cartes, 1 récit, 2 bandes `pal`, 1 nom de zone, et une note du critique en tête de 8 zones)

**Cartes**
- B :
  - DON129 −2, −4, −6 : `garde` → `hesite` (« Si la cible hésite déjà »), budget inchangé ;
  - ASS088 +7 : nom (« Les Greniers qui débordent »), phrase d'ouverture (« Le blé vient de lui-même. ») et ambiance ; ops inchangées ;
  - ASS069 +7 : nom (« Le Col des chansons »), phrase d'ouverture (« Chaque tente a sa chanson. ») et ambiance ; ops inchangées ;
  - une Loi ajoutée, avec le tag, sur 7 cartes : ASS037 +6 (« Loi de l'hôte »), ASS088 −3 (« Loi du pain compté »), ASS069 +3 (« Loi du refrain »), ASS038 −3 (« Loi des tuteurs ») et +2 (« Loi des fleurs »), ASS065 −1 (« Loi du vent ») et +5 (« Loi du procès ») ;
  - ASS037 +6 : nom (« Le maïs éclaté des invités », au lieu du « pop-corn »).
- Le champ `budget` des cartes touchées porte « changé par le critique (lot 12) ».

**Fiches et texte**
- Récit : A ASS085, la dernière phrase (« La capitale cite depuis Mullupata en exemple de piété, et lui réclame chaque année un peu plus de coquilles. »), 93 mots ; la ligne « Forme du récit » suit.
- Bandes `pal` : B ASS088 +6..+7 (les greniers qui débordent) et B ASS069 +6..+7 (le col plein de chansons).
- Nom de zone : C ANT069, « Qaartuq, le Caillou rendu », partout dans le fichier (tableau d'en-tête, titre, fiche).
- Les progressions de B (ASS088, ASS069, DON129, ASS037) suivent les noms et le crochet changés.
- Une note « Note du critique (lot 12) », hors des blocs ```json```, en tête de chaque zone touchée : A ASS085 ; B DON129, ASS037, ASS088, ASS069, ASS038, ASS065 ; C ANT069. D n'a rien à corriger.

**Vérification finale (script Python, fichiers relus sur le montage après écriture)**
- Tous les blocs ```json``` se lisent : 44 fiches et 616 cartes. Chaque zone a un bloc fiche et un bloc de 14 cartes (pôles − et +, paliers 1 à 7).
- Longueurs : effet de 250 caractères au plus, ambiance de 12 à 20 mots, récit de 60 à 100 mots, cinq `pal` de 160 caractères au plus.
- Opérations et conditions :
  - toutes sont connues du moteur, avec leurs arguments dans le bon ordre ;
  - aucune opération n'est répétée dans un même niveau d'une carte (les deux invocations des −7 de B ANT125 et de C ANT168 sont l'une en carte, l'autre au réveil) ;
  - sur la carte entière, réveil compris : `mana` ≤ 2 et riposte ≤ 8 ;
  - dégâts ciblés ≤ 20 hors Donjon et ≤ 30 en Donjon, aux paliers 1 à 6 ;
  - aucun écho sous `si` ni sous réveil. L'écho est sur 4 cartes exactement (A Feu, D Vérité), avec 3 cartes sans écho faites pour être doublées ;
  - `"cible":1` est partout où il le faut, et le tag Loi est conforme ;
  - aucune condition n'est remplie ni vidée par la carte elle-même avant son `si`, `si` imbriqués compris, la garde des alliés comptée comme une Garde levée.
- Budgets : aucun écart au-delà de ±15 %. Chaque palier 7 a une base de 45 à 55, un réveil de 60 à 100 % et une phrase d'ouverture de 3 à 6 mots.
- Places : chaque conteur tient ses places de LISTE.md, sauf les places perdues déclarées (A 2, C 1, D 1) et les 7 reprises de B. Les 12 familles à 6 pôles ont 6 pôles au plus (la pioche à 5 en place, plus 3 vocations d'Assemblée), et les places rares 2 au plus.
- Familles :
  - aucune famille principale n'est commune aux deux pôles d'une zone, ni aux deux pôles d'un même mot dans le lot ;
  - les appoints, enchaînement compris, sont dans 3 pôles au plus par conteur ;
  - les dégâts ciblés sont sur 4 cartes au plus par pôle, et sur 5 pour les seuls gros coups (D Nectar) ;
  - « tous » est sur 3 cartes au plus, sans deux hésitations de « tous » de suite ;
  - chaque famille d'animaux est dans 2 pôles du lot au plus.
- Vocations : A 3, B 2, C 3, D 3, plus les pioches d'Assemblée tenues en place. Aucun 4e emploi, aucun emploi deux fois chez le même conteur, une seule vocation par mot dans le lot.
- Colonnes : A 4, B 3, C 3, D 3.
- Crochets :
  - chacun est dans 3 pôles au plus par conteur, `hesite` et `hesiteAvant` comptés ensemble ;
  - les intentions ennemies sont dans 7 pôles, 2 par conteur au plus (A `pietine` ; B `pietine`, `seul` ; C `pietine`, `soinEnnemi` ; D `seul`, `vol`) ;
  - aucun assemblage prix et crochet n'est dans plus de 2 pôles d'un même conteur.
- Prix : deux sortes par pôle, la seconde sur 2 cartes au moins. Chaque pôle a 6 ou 7 cartes à prix sur 7, à égalité dans chaque zone.
- Les 44 noms du lot sont uniques entre conteurs (par moitié, mot principal, complément, mot traduit et préfixe, à une lettre près), hors les tolérances ci-dessus. Ils sont absents de `noms-pris.txt`, où ils sont maintenant ajoutés.

## Leçons pour le lot 13 (à ajouter aux consignes)

1. **Les places se comptent avant de se répartir.** LISTE.md calcule au script, pour chaque conteur, le couplage maximal de ses pôles avec les familles libres sur ses mots. Elle ne donne que ces places, plus les reprises permises. Ce qui manque devient une vocation ou une colonne (4 au plus), ou une place perdue, déclarée avant les cartes.
2. **Reprises : 3 au plus par conteur**, chacune un 2e emploi par un autre conteur. Le crochet et le prix principal sont neufs pour le mot entier, pas seulement contre l'origine. On ne reprend jamais son propre crochet sur un mot.
3. **Même couple dans le lot : on compare le geste du ±7, pas ses objets.** La table qui s'étend, le chant à l'unisson ou la ville sous l'eau font une même métamorphose, quel que soit le décor. Le second inscrit change avant la remise.
4. **Noms : le mot principal et le mot d'institution se comparent entre conteurs avant la remise, et à noms-pris.txt, pluriel compris.** Ce lot avait deux « Attente », et trois institutions déjà en jeu (Yoriai, Darbar, Popol Na).
5. **La pioche d'Assemblée compte dans le plafond de la famille pioche** (6 pôles du lot), vocation comprise. Une Assemblée garde 2 cartes de Loi au moins par pôle.
6. **Bêtes : 40 PV au plus aux paliers 1 à 6, 60 au palier 7.** Le budget compte les PV pour moitié et ne voit pas le mur.
7. **Chutes : une recette de conteur, une fois par lot.** C'est le cas de la promotion qui éloigne chez A, et de « aujourd'hui » dans la dernière phrase chez C (trois fois au lot).
