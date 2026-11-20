# Critique du lot 5 : 48 zones à cartes et 64 Ressources

*Relu par l'agent Critique : conteur_A.md à conteur_D.md, d'après CONSIGNES.md (avec les leçons des lots 1 à 4), consignes-cartes.md (v2.2), regles-avancees.md et le moteur réel (`tv/src/cartes.js` et `combat.js`, lus sans rien y changer). Les lots 1 à 4 ont servi de référence pour les pôles en double, et les fichiers familles_A.md à familles_D.md pour les signalements des conteurs.*

## Verdict

**Lot accepté pour l'intégration, avec les corrections déjà faites dans les fichiers.** Moyenne après correction : **80,8 / 100** (79,9 avant). Aucune zone refusée et **aucune zone sous 70** : aucune n'est donc réécrite en entier. Un pôle est réécrit presque en entier, **ASS057 +** (A, Rêve : 6 cartes sur 7 et la forme ultime), parce qu'il jouait la même pioche que le Cauchemar de la même zone. Quatre autres pôles sont corrigés sur 3 à 5 cartes : **ANT093 +** et **ASS008 +** (l'écho), **ANT162 +** (Vérité) et **DON076 −** (Mort).

La mécanique pure est la plus propre des cinq lots. Avant correction, le validateur ne trouvait qu'une erreur : le budget d'ANT147 −2 (+16 %). Aucun opérateur cassé, aucun `mana` au-dessus de 2, tag Loi conforme, `"cible":1` partout où il le faut. Aucune condition n'est testée après l'opération qui la remplirait, et aucune ne lit `defausseCommune`. Chaque forme du palier 7 pose, réveille, ouvre sur sa phrase et paie. La carte commune des familles a été tenue à la lettre : onze familles sont **exactement** à 6 pôles, et les cinq familles rares exactement à 2.

C'est justement le défaut neuf du lot : **le plafond a été rempli au lieu d'être pensé.** Les conteurs ont pris les places qui restaient, même quand la famille ne tenait pas dans le moteur ou dans la zone. Les récits restent très bons, et souvent meilleurs qu'au lot 4 : les lettres d'exil écrites au dos de l'ordre d'exil (ANT187), l'île des malades lâchée par une nuit de vent, qui « a des jardins, maintenant » (DON014), le goûteur qui ne prend jamais de dessert (ASS061), la niche qui manque au nom d'Anselm (ASS131), « Au fond, nous sommes vingt-six » (DON062), la perche en plus, « chaude » (ANT047).

Les défauts de fond, tous corrigés :

1. **L'écho sur les 7 cartes d'un pôle** (ANT093 +, A ; ASS008 +, D). Le moteur ne double jamais une carte qui porte elle-même un écho (`dbl = CB.echo && !ops.some(echo)`). Deux cartes de ces pôles jouées à la suite ne se doublaient donc jamais : l'écho ne servait que les cartes des autres zones. Corrigé : l'écho reste sur 4 cartes, et 3 cartes sans écho, plus fortes, sont faites pour être doublées.
2. **Deux pôles d'une même zone sur la même famille** : ASS057 (A) piochait sur 7 cartes au Cauchemar comme au Rêve, avec « X dégâts à la cible » sur 5 cartes des deux côtés. Le Rêve garde l'exil sur 6 cartes et la pioche sur une seule. Il prend les chevaux des songes (4 invocations), la garde et le soin des alliés.
3. **Des reprises entre lots, malgré la leçon 2 du lot 4** :
   - La Mort en affaiblissement (DON076 −, D) venait pour la quatrième fois, après ASS074, ANT149 et ASS092. Elle passe aux gros coups sur `elan`, avec l'exil et la perce-garde ; l'affaiblissement ne reste que sur 2 cartes.
   - La Vérité en marque sur 7 cartes (ANT162 +, D) recopiait ASS161 + du lot 3. La note de D disait qu'ASS161 ne marquait que sur 4 cartes, mais le compte au script donne 7. ANT162 + devient un pôle de bêtes du fond (6 cartes), avec la marque sur 4 cartes.
4. **« X dégâts à la cible » en réflexe** :
   - A : 22 pôles sur 24 ont exactement 5 cartes de dégâts ciblés, presque toujours en fin de carte.
   - B : 7 pôles en avaient sur 7 cartes sur 7, ce qu'interdit la leçon 7 du lot 4 (ASS005 −, CIT031 −, DON012 − et +, DON086 −, DON123 −, et ANT147 − en comptant les `si`).
   - C : 8 pôles en ont 6.

   Voir l'arbitrage et le plafond plus bas.
5. **Les prix de B ne sont plus à égalité** : les 12 zones de B sur 12 avaient un pôle plus chargé que l'autre, contre aucune au lot 4. L'écart allait jusqu'à 3 cartes (CIT031 : 7 contre 4).
6. **Les répétitions entre conteurs se sont déplacées vers les noms** :
   - Huit prénoms servaient deux fois : Yusuf, Ulrich, Alvise, Anselm, Nebamon, Alemu, Sokha. Le compte inclut le frère Anselm de B (RES332) et celui de C (ASS131).
   - Trois Assemblées mongoles appelaient leur conseil « kurultai », et deux d'entre elles en faisaient leur nom (ASS109, ASS082). A avait deux zones en « Le Conseil de » (ASS057, ASS114).
   - Le compte qui tombe faux d'un revenait quatre fois : le tesson de trop d'ASS068, les vingt-six de DON062, la perche en plus d'ANT047, et la tente de trop d'ASS082 (C).
7. **Des doublons de Ressources** :
   - Le baume noir que l'on racle aux parois (A RES347) doublait la pâte blanche que l'on racle aux parois (B RES220), à la même spatule, pour le même usage de remède. Aucun conteur ne l'avait vu.
   - Le lait caillé revenait deux fois chez B (RES032 et RES098).

Réflexes de gabarit, un par conteur :
- A : la pioche et « X dégâts à la cible » en queue de carte. La pioche est dans 12 pôles sur 24, dont deux Antres où elle est famille principale (ANT155 −, ANT093 −).
- B : les dégâts ciblés sur toutes les cartes, les prix inégaux, et « au prix du poivre » deux fois (ANT147, DON123).
- C : chaque recette de récit sert deux fois, et « L'épreuve est loyale. » revient mot pour mot (ASS082, DON103).
- D : un nombre précis dans 11 récits sur 12, et le compte faux d'un dans trois zones. Treize formes du palier 7 sont sous 45 points de base (41,8 à 44,6).

## Notes par zone (sur 100, après correction ; entre parenthèses, la note avant correction si elle diffère)

Critères : ton, unicité, écart −7/+7, cartes (impact, deux pôles non miroir, prix réparti, combos du palier 7).

| Zone | Nom | Conteur | Note | Commentaire |
|---|---|---|---|---|
| ANT155 | Les Glacières de Kâmpéng Trey | A | 80 | « Ils frappent d'abord à la porte, par habitude. » La Pourriture en pioche sur 7 cartes est un choix étrange pour un Antre, mais la vermine la tient. |
| ANT187 | Le Puits de Rukeiji | A | 83 | Les lettres jamais envoyées, au dos de l'ordre d'exil : le meilleur récit de A. Le Foyer de soin des alliés est net. |
| ANT130 | Le Fjord de Nextépec | A | 82 | « Payé en cendre. » La guerre « aux dates convenues » et la marque de la Floraison vont ensemble. |
| ANT093 | Le Hawz de Tondābād | A | 80 (77) | « Accordé pour l'an prochain. » L'écho était sur 7 cartes, donc injouable entre elles : +4, +5 et +6 deviennent les cartes à doubler. |
| ANT026 | Pervigilium, le Fortin des Veilles | A | 81 | Le décurion assis, le stylet à la main, sur un rapport commencé. |
| ASS017 | La Skhodka de Kaplitsa | A | 81 | Le décret « complété au couteau », et la gouttière du starosta qui déborde la première. |
| ASS057 | Le Conseil de Züüdtei-Tal | A | 79 (71) | Le scribe qui se met à rêver est très bon. Mais le Rêve piochait sur 7 cartes comme le Cauchemar : il est réécrit sur 6 cartes et la forme 7 (exil, chevaux des songes, garde et soin des alliés). |
| ASS114 | La Maison des Nattes de Che'ha' | A | 79 (78) | « Le contrat ne prévoyait pas ce que deviendrait le delta sans racines. » Renommée : A avait deux « Le Conseil de ». |
| ASS109 | Le Kurultai d'Üür-Shalbag | A | 82 | Le serment déplacé à minuit. Elle garde le mot « kurultai » ; les deux autres l'ont rendu. |
| DON014 | Hampiwasi, l'Île des Remèdes | A | 83 | « Elle a des jardins, maintenant. » La meilleure chute du lot. |
| DON047 | Aukpaluk, les Fosses Rouges | A | 80 | La généalogie des dettes est forte. La Sève est un pôle de gros coups sans autre idée. |
| CIT008 | Banteay Chhatr, le Fort des Parasols | A | 82 | Le règlement complété « d'un article sur les funérailles ». Ombre et Lumière ne se ressemblent en rien. |
| ANT245 | Les Moulins-Gouffres d'Anaplora | B | 80 (79) | La mer qui coule vers l'intérieur des terres. Prix 6 contre 4 : +1 et +5 paient maintenant. « Un sac sur dix » doublait « un sac sur quatre » de DON086 : c'est devenu « la douzième part ». |
| ANT147 | Les Écoutes de la Secca Barbarana | B | 81 (80) | L'oreille contre le bordé. Le −2 dépassait son budget (+16 %). Les prix étaient à 7 contre 5 : −3 ne paie plus, +2 paie. |
| ANT009 | Les Lampes de Qulliqtalik | B | 81 (79) | « Hors du cercle, les jaguars attendent les avares. » Le paresseux (C ANT236 en a tout un pôle) devient un tapir. Prix 6 contre 4 : +1 et +5 paient. |
| ANT167 | La Fontaine aux Lévriers d'Aynalgar | B | 82 (81) | La vanne, « une main dessus chacun ». Prix 6 contre 4 : +1 et +4 paient. |
| ANT097 | Les Fours à vif-argent de Monte Zenèr | B | 82 (81) | La règle des dix-sept jours, et les chamois qui lèchent les briques. Prix 6 contre 4 : +2 et +3 paient. |
| ASS023 | Le Tionól des Îles amarrées de Muirgheal | B | 81 | Les chaînes qui rougissent et cèdent. La Glace est l'un des deux pôles d'hésitation du lot. |
| ASS021 | La Yourte des Khans de Zev-Tal | B | 79 (78) | Le fer de l'armée en fuite qui garde la frontière. Le « kurultai » des récits et des ambiances devient « le conseil des khans ». |
| ASS005 | La Hanse de Gerbersiel | B | 79 (76) | Les ballots jetés à l'eau et repêchés tannés. L'Ombre frappait la cible sur 7 cartes sur 7 : −1 et −3 n'ont plus de dégâts (garde, hésitation). La pioche sur 6 cartes est tolérée. |
| DON123 | Les Alunières de Rodalcázar | B | 79 (77) | L'alun coupé de terre rouge, et les draps qui virent. La Corruption frappait sur 7 cartes sur 7 : −3 pioche à la place. « Au prix du poivre » répétait ANT147 ; « pour dix ans » et « dix de trop » sont retirés. |
| DON086 | L'Alcazaba de Jarafría | B | 80 (79) | On vend encore aux torches, dehors. La Tyrannie frappait sur 7 cartes sur 7 : −1 lève la Garde (la riposte s'y accroche). |
| DON012 | Le Cratère de Tezonco | B | 79 (77) | « Il fait combler les poches. » Les deux pôles frappaient sur 7 cartes sur 7 : −1 et +1 corrigés, sans ajouter de marque au Cristal (DON115 la garde, arbitrage du lot 4). |
| CIT031 | Zibad-Gimb, la Citadelle aux Civettes | B | 80 (75) | « Une marche de plus vers le bas. » L'Abysse frappait sur 7 cartes sur 7, avec des prix à 7 contre 4 : −1 et −3 ne frappent plus, −1 ne s'exile plus, +1 et +3 paient (6 contre 6). |
| ANT173 | Haifeng-tai, la Falaise aux Onze Feux | C | 81 | Les milans qui portent la braise de la cuisine à la tour suivante. |
| ANT193 | Ca' Frasca, le Ridotto sous la Canopée | C | 81 | « Sur la table, une des feuilles respire. » Messer Alvise devient Marin (D CIT015 a un Alvise). |
| ANT236 | Hengivík, le Skáli aux Paresseux | C | 82 | Le faux coupable : les fourmis brûlées, la fièvre qui reste. Les paresseux sont à C seul. |
| ANT101 | Per-Mehty, le Temple aux Bœufs musqués | C | 81 | L'énigme du pylône, résolue par les bœufs et pas par les lemmings. Le cercle de bœufs musqués est toléré (une carte d'ANT192 au lot 2). |
| ANT106 | Zegwa-Dél, les Îles aux Gypaètes | C | 81 | La roche plate au milieu des terrasses, que personne n'a jamais déplacée. |
| ASS082 | Le Tsuglaan de Nogoon-Ordo | C | 79 (78) | La tente de trop au matin. Renommée : « Le Kurultai » doublait ASS109 (A). |
| ASS061 | Le Darbar de Sharbatabad | C | 82 | Le goûteur qui ne prend jamais de dessert. Mirza Yusuf devient Haidar (B ANT167 a un Yusuf). |
| ASS131 | Le Chapitre aux Clavaires de Fichtenau | C | 83 | « Il en manquait une, au nom d'Anselm. » Le Corail en soin des alliés suit de loin ANT095 + (lot 4), mais ANT095 jouait d'abord les bloqueurs : toléré. |
| ASS063 | La Halle aux Girolles de Rotenspor | C | 80 (79) | La rouille qui est une spore. « Sous les chapeaux » répétait ASS061 ; le doyen Ulrich devient Lambert (B ASS005 a un Ulrich). |
| DON122 | Cathair Ceirte, la Source aux Chiffons | C | 81 | « Plus je pourris, plus tu guéris. » Le vol de vie est l'un des deux du lot ; le sous-compte de −3 reste dans la tolérance. |
| DON103 | Tettigeia, la Chaussée aux Cigales | C | 79 (77) | Les cicatrices fines et régulières. Même biome et mêmes mots de pôle qu'ASS177 (lot 2) : les `pal` −7, −5..−2 et +7 perdent les roseaux immobiles et l'eau qui ride. « L'épreuve est loyale » répétait ASS082 mot pour mot. |
| CIT014 | Patolcalco, la Citadelle des Fèves | C | 82 | On mise son nom, et Citlalmina les sait lire tous. |
| ANT038 | Le Shikargah de Badal-Ghat | D | 82 | L'émir assis, sec, dans la clairière de la dernière feuille. La Tempête en perce-garde suit DON082 (lot 2), où ce n'était qu'un appoint : toléré. |
| ANT162 | Les Bancs de Sfoungária | D | 80 (77) | « Faut-il le croire ? Une fois sur deux. » La Vérité marquait sur 7 cartes comme ASS161 + : +1, +3 et +5 deviennent des bêtes du fond. Les bêtes-leurres du Mensonge (5 cartes) sont validées. |
| ANT126 | Les Pistes de Veal Dâmrei | D | 81 | La vieille femelle qui prend une piste inconnue, vers l'ouest sans eau. |
| ANT047 | Þokuvað, le Gué des Tourbières | D | 83 | « Elle était chaude. » |
| ANT108 | Favillae, le Port des Palétuviers | D | 81 | Les fleurs ouvertes vers le fond. C'est le seul récit tronqué du lot. |
| ASS068 | L'Ekklèsia de Kryolimnè | D | 81 (80) | Le nom de la cité sur un tesson. Le « cent dix-neuvième tesson » était le troisième compte faux d'un chez D : c'est maintenant le tesson de Ménalkas lui-même. Le Foyer en brûlure suit DON030 (lot 1) : toléré (Lois, crochet `garde`). |
| ASS008 | Le Bureau des Fourneaux de Lianyao-Shan | D | 80 (77) | Le maître « d'un bleu très égal », qui rit souvent. L'écho était sur 7 cartes : +3, +5 et +6 deviennent les cartes à doubler. |
| ASS031 | Ulluriarjuk, la Clairière du Conseil | D | 82 | Le cinq cent unième nom, qu'Aninnguaq prononce et que personne ne voit. |
| DON062 | Yoake-dani, la Gorge des Veilleurs | D | 83 | « Au fond, nous sommes vingt-six. » |
| DON076 | Le Kourgane de Studenets | D | 80 (76) | Les tiges vertes sous les mains jointes. La Mort jouait l'affaiblissement pour la quatrième fois : −2 à −6 réécrits (gros coups, exil, perce-garde). |
| DON110 | Châh-e Bâd, la Tour du Puits | D | 81 | « Elles respirent tout de même. » |
| CIT015 | Le Lazaret de Rocca Salsa | D | 79 | Le sel qui pousse de l'extérieur. Mais le récit en deux versions qui s'accordent sur un point reprend Marjanabad (lot 4), et D le signale lui-même. |

**Moyennes par conteur (après, et avant entre parenthèses) :**
- **A, 81,0 (80,0).** La meilleure prose du lot, sans un seul nombre. Mais les cartes de A sont presque toutes faites de la même façon (pioche, bête, « X dégâts à la cible »), et l'écho d'ANT093 comme le Rêve d'ASS057 sont deux places prises au plafond plutôt que choisies.
- **B, 80,3 (78,6).** Les récits marchands sont toujours justes (Anaplora, Aynalgar, Monte Zenèr). Mais c'est le lot de B qui a le plus reculé : dégâts ciblés sur 7 cartes sur 7 dans 6 pôles, et prix inégaux dans les 12 zones. 36 objets corrigés, mais aucun pôle réécrit.
- **C, 81,0 (80,7).** Le lot le plus sûr de C, avec de belles chutes (ASS061, ASS131, ANT236). Les corrections ne touchent que les noms et la prose.
- **D, 81,1 (80,2).** Les meilleures chutes courtes (ANT047, DON062). Mais il y a deux reprises de lots précédents (Mort, Vérité), l'écho injouable d'ASS008, le compte faux d'un trois fois et 13 formes ultimes sous 45.

**Ressources (64)** : A 81 (80), B 80 (79), C 80 (79), D 81 (81). Les gestes sont variés, et la carte des objets a bien servi. Il y avait trois doublons d'objet ou de geste, dont un que personne n'avait vu (RES347 et RES220), et cinq prénoms en double (voir les arbitrages).

## Arbitrages demandés

- **Dégâts ciblés à 5 ou 6 cartes** (A : 22 pôles à 5 ; C : 8 pôles à 6 ; D : Aurore 6, Vie 6 ; B : 7 pôles à 7) :
  - **7 sur 7 : corrigé partout.** C'est la leçon 7 du lot 4. ASS005 − et CIT031 − (Assemblée, Citadelle) descendent à 5 cartes ; DON012 − et +, DON086 − et DON123 − (Donjons) descendent à 6. ANT147 − est à 6 cartes plus un `si` : toléré.
  - **5 et 6 : tolérés pour ce lot**, parce que chaque pôle mêle au moins trois familles (vérifié au script). Mais la monotonie est réelle, surtout chez A, où la cinquième carte de dégâts sert de lest.
  - **Plafond à partir du lot 6** : 4 cartes de « X dégâts à la cible » au plus par pôle, 5 dans un Donjon, et jamais quand la carte a déjà sa famille et son prix. Les dégâts dans un `si` comptent.
- **D ASS008 Nectar et A ANT093 Calme, écho sur 7 cartes** : **corrigé des deux côtés.** L'écho reste sur 4 cartes (ANT093 : +1, +2, +3, +7 ; ASS008 : +1, +2, +4, +7). Les cartes à doubler, sans écho, prennent les 6 points rendus en dégâts ou en soin (ANT093 +4, +5, +6 ; ASS008 +3, +5, +6). L'écho n'est plus famille principale nulle part : le plafond de 2 laisse deux places libres.
- **A ASS057 + Rêve, pioche sur 7 cartes pour une famille déclarée d'exil** : **réécrit** (+1 à +4, +6, +7). L'exil reste sur 6 cartes. On y trouve aussi les chevaux des songes (4 invocations), la garde des alliés (4) et le soin des alliés (3), avec la pioche sur une seule carte (+5) et le crochet `seul`. Le Cauchemar garde sa pioche payée en PV.
- **B ASS005 −, pioche sur 6 cartes** : **toléré** (pioche de vocation en Assemblée, et la défausse comme carburant tient debout). Mais les dégâts ciblés passent de 7 à 5 cartes.
- **D ANT162, bêtes-leurres sur 5 cartes** : **validé** (un Antre en demande 3 au moins). C'est la Vérité qui changeait, pas le Mensonge.
- **familles_D.md modifié après la relecture de C** : recompté au script, réveil compris.
  - Deux pôles au plus : hésitation 2 (ASS023 −, ANT162 −), coups au hasard 2 (DON086 +, ASS063 −), vol de vie 2 (ANT097 −, DON122 −), enchaînement 2 (ANT155 +, DON076 +), écho 0 après correction.
  - Six au plus : soin des alliés 6, garde des alliés 6, soin du héros 6, mana 6, exil 6, garde du héros 6, brûlure 6, riposte 6, perce-garde 6, marque 5, affaiblissement 5.
  - Appoint (3 ou 4 cartes) dans 3 pôles au plus par conteur : tenu. Une première version de la correction de DON076 − mettait D à 4 pôles d'affaiblissement en appoint ; elle a été reprise.
  - Crochets sur 5 cartes ou plus : aucun, hors les deux pôles d'enchaînement.
- **Couples de pôles partagés dans le lot** : les deux zones de chaque couple ont des familles principales différentes sur les deux pôles. C'est vrai pour Rouille/Or (B ASS021 garde du héros / garde des alliés ; C ASS063 coups au hasard / garde du héros), pour les quatre couples que D partage avec C, les quatre qu'il partage avec A et Abysse/Ciel avec B, ainsi que pour Sécheresse/Déluge, Sommeil/Éveil, Pourriture/Croissance, Cauchemar/Rêve, Sang/Sève, Ombre/Lumière, Peste/Guérison, Glace/Feu, Folie/Raison et Silence/Chant. **Validé.**
- **« Kurultai »** (B ASS021, A ASS109, C ASS082) : A garde le mot. C devient **Le Tsuglaan de Nogoon-Ordo** (« tsuglaan » partout dans le texte), et B dit « le conseil des khans ».
- **C DON103 et ASS177 (lot 2), même delta et mêmes mots de pôle** : les cartes diffèrent (perce-garde et brûlure contre hésitation et pioche), mais les images se touchaient (roseaux immobiles au −7, eau qui ride au +7). Trois `pal` sont réécrits ; la chaussée, les cigales et le tombeau noyé restent.
- **Vol de vie dans un `si` ou un réveil** :
  - Le moteur pose `ctx.vv` sur le contexte de la carte. Un `volVie` placé dans un `si` vaut donc, si la condition est vraie, pour la suite de la carte ; dans un réveil, il ne vaut que pour le réveil.
  - Le budget oubliait la moitié des dégâts d'un `si` quand le vol de vie est au premier niveau. Recalculé : DON122 −3 donne +7 %, ANT097 −4 et −5 donnent +2 % et −3 %. Tout reste dans la tolérance : **aucune correction**, mais la table commune doit le compter.
- **Images proches** :
  - Paresseux (B ANT009, C ANT236) : **corrigé dans ANT009**, où le paresseux devient un tapir (+6, +7).
  - Bœufs musqués en cercle (C ANT101 ; A ANT192 au lot 2 ; A RES265) : **toléré.** ANT192 n'en avait qu'une carte, et RES265 cueille le duvet aux saules (autre objet, autre geste).
  - RES332 (B) et RES301 (A), peaux sur cadres : **corrigé dans RES301**, dont la `pal` 2-3 montre des zibelines pendues par la queue au-dessus d'un feu de mousse.
  - RES134 (B) et RES009 (C), perles enfilées : **corrigé dans RES009**. Les noyaux de dattes sont rôtis et broyés en breuvage noir pour les matines.
  - RES347 (A) et RES202 (D), résine et encens : toléré entre eux. Mais RES347 doublait RES220 (B) : **RES347 change de geste.** On casse la roche tachée, on la fait tremper, et le soleil boit l'eau brune.
  - RES032 et RES098 (B), lait caillé tous les deux : **corrigé dans RES032**. Le lait de renne gèle avant le village et se vend en pains coupés à la hache.
- **D, récit en deux versions qui s'accordent sur un point** (CIT015, déjà fait par D au lot 4 avec Marjanabad) : **toléré**, une seule fois dans le lot et signalé. Note 79.
- **Nombres répétés** (liste commune) :
  - « Un sac sur dix » (ANT245) et « un sac sur quatre » (DON086), même tournure chez B : **corrigé dans ANT245**.
  - « Dix » dans DON123 (deux fois), RES057 et RES287 : retiré. Il ne reste que les dix tentes d'ASS082.
  - Les composés précis (cent dix-huit, cent quatre-vingt-sept, six cent douze, trois cent trois) et les mots courants (« neuf » adjectif, « à quatre pattes ») sont tolérés.
- **Prénoms en double** :
  - Corrigés du côté le plus léger : Anselm (B RES332 → frère Notker), Nebamon (B RES049 → Paneb), Alemu (B RES112 → Tsehay Bekele), Sokha (C RES163 → Sophea).
  - Corrigés aussi : Alvise (C ANT193 → Marin), Ulrich (C ASS063 → Lambert), Yusuf (C ASS061 → Haidar).
- **Prix à égalité entre pôles (B)** :
  - **Corrigé là où l'écart était de 2 ou plus** : ANT245, ANT147, ANT009, ANT167, ANT097 et CIT031. Un prix est ajouté et l'effet est relevé d'autant, ou retiré et l'effet baissé d'autant.
  - **Toléré à 1** : ASS023, ASS021, ASS005, DON123, DON086 et DON012, comme ASS032 au lot 4.
- **D, formes du palier 7 sous 45** (13 formes, 41,8 à 44,6) : **toléré**, comme au lot 4 (40 à 60). Les réveils restent entre 60 et 70 % de la base. À ne plus laisser passer au lot 6.

## Défauts de fond (au-delà des corrections)

1. **Les plafonds sont pleins.** Onze familles sont à 6 pôles, et les places rares à 2. Le lot 5 a montré ce que cela produit : les derniers à écrire prennent la place restante, qu'elle tienne ou non (l'écho sur 7 cartes, le Rêve). Avec 96 pôles par lot, il faut changer de levier : moins de familles principales « pures » et plus de pôles construits sur un crochet ou sur un prix. Les bêtes, les prix et les réveils restent peu exploités.
2. **La forme des cartes s'uniformise.** Chez A et chez B, presque chaque carte se lit « famille + bête ou pioche + X dégâts à la cible + prix ». Les nombres sont justes et les budgets tenus, mais deux cartes de deux zones différentes se confondent à la lecture. Le plafond de dégâts ciblés vise ce défaut.
3. **Les notes des conteurs ne suffisent pas pour les lots précédents.** D affirmait qu'ASS161 ne marquait que sur 4 cartes, et c'était 7. Il faut relire les cartes au script, pas la note.
4. **Les noms propres.** La liste commune des nombres marche (il ne reste presque plus de doublons). Il faut la même chose pour les prénoms et les institutions.
5. **Les tics de prose**, listés dans le verdict : la pioche de A, le « prix du poivre » de B, « l'épreuve loyale » de C, le nombre précis et le compte faux d'un de D. Seuls les doublons entre zones sont corrigés.

## Corrections faites (79 objets modifiés : 59 cartes et 20 fiches, plus les lignes de prose « Familles » et « Fil mécanique » des pôles touchés)

**Pôles réécrits ou corrigés en profondeur**
- **ASS057 +** (A) : +1, +2, +3, +4, +6, +7.
- **ANT093 +** (A) : +4, +5, +6 (écho retiré).
- **ASS008 +** (D) : +3, +5, +6 (écho retiré).
- **ANT162 +** (D) : +1, +3, +5 (bêtes du fond au lieu de la marque).
- **DON076 −** (D) : −2, −3, −4, −5, −6 (gros coups au lieu de l'affaiblissement).

**Dégâts ciblés, prix et budgets (B)**
- Dégâts sur 7 cartes : ASS005 −1, −3 ; CIT031 −1, −3 ; DON012 −1, +1 ; DON086 −1 ; DON123 −3.
- Prix : ANT245 +1, +5 ; ANT147 −3, +2 ; ANT009 +1, +5 ; ANT167 +1, +4 ; ANT097 +2, +3 ; CIT031 +1, +3.
- Budget : ANT147 −2.
- Images : ANT009 +6, +7 (tapir).
- Ambiances de prose : ASS021 −1, −3, −5, +1 (kurultai) ; DON123 −4, −5 (nombres).

**Prose et noms (C, D)**
- C : ASS082 −2, −7 (kurultai) ; ANT193 −3, +2, +6, ASS061 −1, −5, +4 et ASS063 +3 (prénoms dans les ambiances).
- D : ASS068 −6 (le tesson).

Les budgets de ces cartes sont recalculés au script (« recalculé par le critique ») et leurs tags mis à jour.

**Fiches**
- Zones :
  - ASS114 (nom), ASS082 (nom et texte).
  - ASS021 (kurultai), ANT245 (douzième part), DON123 (poivre, dix).
  - DON103 (trois `pal` et une phrase du récit), ASS068 (chute), ASS063 (ouverture et prénom).
  - ANT193 et ASS061 (prénoms).
- Ressources :
  - RES347 (geste), RES009 (objet), RES032 (produit), RES301 (`pal`).
  - RES287 et RES057 (nombres).
  - RES332, RES049, RES112 et RES163 (prénoms).

**Vérification finale (script Python, fichiers relus sur le montage ~10 s après écriture)**
- Tous les blocs ```json``` se lisent : 112 fiches (48 zones et 64 Ressources) et 672 cartes, soit 48 zones à 14 cartes (pôles − et +, paliers 1 à 7).
- Chaque effet fait 250 caractères ou moins. Chaque ambiance compte 12 à 20 mots, chaque récit 60 à 100 mots (30 à 50 pour une Ressource), chaque `pal` 160 caractères ou moins.
- Toutes les opérations et conditions sont connues du moteur, avec leurs arguments dans le bon ordre. Aucun `mana` ne dépasse 2. `"cible":1` figure partout où une opération ou une condition vise la cible. Le tag Loi est conforme.
- Aucune condition n'est remplie par la carte elle-même avant son `si`, y compris un prix en PV avant `blesse`. Aucune ne teste `defausseCommune` ni `recupCommune`.
- Chaque forme du palier 7 pose une résonance, en réveille une autre, a une phrase d'ouverture et un prix.
- Budgets : 0 écart au-delà de ±15 % sur les paliers 1 à 6.
- Les plafonds de familles, d'appoints et de crochets sont tenus. Aucun pôle n'a de dégâts ciblés sur ses 7 cartes au premier niveau.
- Les deux pôles d'une zone ne partagent aucune famille principale, hors invocations d'Antre.
- Les 112 noms du lot sont uniques entre conteurs et absents de `noms-pris.txt`. Ils y sont maintenant ajoutés.

**Non bloquant, laissé tel quel** : les formats d'identifiant du palier 7 diffèrent encore (`-moins7` chez A et B, `-moins-7` chez C et D), et les tableaux de cartes sont découpés différemment selon les conteurs. `assembler.py` range les cartes par zone, pôle et palier : sans effet.

## Leçons pour le lot 6 (à ajouter aux consignes)

1. **Dégâts ciblés : 4 cartes au plus par pôle, 5 dans un Donjon**, `si` compris. Ils ne servent jamais de lest en fin de carte, et jamais 7 sur 7.
2. **L'écho n'est jamais sur plus de 4 cartes d'un pôle**, et au moins 2 cartes du pôle, sans écho, sont faites pour être doublées : le moteur ne double pas une carte qui porte un écho. Même règle pour toute famille que le moteur bloque sur elle-même.
3. **Une place au plafond se choisit, elle ne se prend pas.** Si la famille ne tient pas dans le moteur ou dans la zone, le pôle prend une vocation de son type (bêtes, gros coups, pioche) ou un crochet, pas la dernière place libre. Les deux pôles d'une zone n'ont jamais la même famille principale, pioche comprise.
4. **Prix à égalité, comptés au script** : même nombre de cartes à prix par pôle, à une carte près.
5. **Couples déjà joués : compter les cartes des lots précédents au script**, pas lire leurs notes. La Mort n'est plus l'affaiblissement, la Vérité n'est plus la marque, le Foyer n'est plus la brûlure.
6. **Une liste commune des prénoms et des institutions**, comme celle des nombres : aucun prénom deux fois dans un lot, et un mot d'institution (kurultai, conseil) dans une seule zone.
7. **Tics à surveiller** : la pioche de A en appoint dans 3 pôles au plus ; « au prix de… » chez B une fois ; une recette de récit de C pas deux fois mot pour mot ; chez D, un nombre précis dans 6 récits sur 12 au plus et le compte faux d'un une fois. Une recette d'un lot ne revient pas au lot suivant chez le même conteur.
8. **Formes du palier 7 : base de 45 à 55, sans tolérance**, et vol de vie compté sur les dégâts des `si` dans la table commune.
