# Lot 12 · carte des familles du conteur B (l'Explorateur marchand)

**Première version : 19 h 36**, avant la moindre carte. Lues avant d'écrire : familles_D.md (19 h 22), familles_C.md (19 h 24, v1b), familles_A.md (19 h 27). Je suis le **dernier inscrit** : tout ce que A, C et D ont posé sur mes mots est à eux, et j'ai changé chez moi tout ce qui croisait (§ 7). **Mise à jour à la remise : 19 h 52**, après relecture de familles_A.md (19 h 49), familles_C.md (19 h 51), familles_D.md (19 h 38), conteur_A.md, conteur_C.md et conteur_D.md. Ce qui a changé est au § 8.

## 1. Compte des vocations (au script, `voc12.py` sur les cartes des lots 1 à 11, 960 pôles ; famille sur 5 cartes ou plus ; gros coups depuis le lot 5)

| Zone | Mot | Invocations | Gros coups (lot 5+) | Pioche d'Assemblée | Verdict pour B |
|---|---|---|---|---|---|
| DON129 | Pourriture | B ANT207, C ANT106 | A ANT155, C ANT106, B DON107 | — | gros coups pleins (et déjà B) : non |
| DON129 | Croissance | A CIT041, B ANT040, C ANT106 | A ANT155, B DON097 | D ASS100, B ASS081 | déjà B : non |
| ASS037 | Exil | A ANT187, D ANT102, B ANT087 | A ANT187 | D ASS068 | **pioche : 2e emploi, je la prends (vocation)** |
| ASS037 | Foyer | B ANT004, A ANT187, C ANT067 | A ANT187 | B ASS059, A ASS101 | déjà B : non |
| ASS088 | Famine | C ANT068, A ANT063 | B DON073 | B ASS080 | déjà B : non |
| ASS088 | Festin | C ANT068 | — | — | libre (1er), non pris (place d'exil) |
| ASS069 | Silence | B ANT147, A ANT042, D ANT094 | B ANT147, C DON103, A DON088 | B ASS079 | déjà B : non |
| ASS069 | Chant | C ANT076, D ANT082, B ANT178 | C DON103 | D ASS177 | **pioche : 2e emploi, je la prends (ma place de pioche)** |
| ASS038 | Cendre | A ANT130, C ANT230 | A ANT130, D DON121 | C ASS108 | libre (2e), non pris (place de garde des alliés) |
| ASS038 | Floraison | B ANT019, A ANT130 | A ANT130 | A ASS070 | C la prend au lot (ASS149) : non |
| ASS065 | Tempête | A ANT093, B ANT241 | A ANT093 | C ASS179 | libre (2e), non pris (place d'affaiblissement) |
| ASS065 | Calme | A ANT093 | A ANT093 | — | D prend les invocations du Calme au lot (ANT057) : une vocation par mot, non |
| ANT029 | Sang | C ANT121, B ANT167, A ANT018 | (plusieurs) | B ASS176 | plein : non |
| ANT029 | Sève | C ANT121, C ANT188, A ANT123 | B DON034 | B ASS176, A ASS113 | plein : non |
| ANT138 | Vide | A ANT190, C ANT007 | D DON104 | C ASS157 | libre (3e), non pris (place de soin du héros) |
| ANT138 | Étoiles | D ANT137, A ANT190, C ANT007 | A DON125, D ASS031 | C ASS157 | plein : non |
| ANT124 | Rouille | C ANT110, D ANT033 | B ASS021, C ASS063 | — | **invocations : 3e et dernier emploi, je le prends** |
| ANT124 | Or | D ANT183, B ANT148, C ANT110 | B DON019 | A ASS118, C ASS063 | plein, et déjà B : non |
| ANT085 | Chaos | D CIT015, A ANT146 | C ASS082, B DON053 | C ASS166 | libre (3e), non pris (place de soin des alliés) |
| ANT085 | Ordre | A ANT017, D CIT030, C ANT065 | B DON053 | C ASS166, C ASS082 | plein : non |
| ANT125 | Sécheresse | C ANT002, A ANT113, B ANT031 | B ANT070, A ASS017, B ANT245 | A ASS040, A ASS017 | plein : non |
| ANT125 | Déluge | D CIT019, B ANT245 | A ASS017, C DON108 | A ASS040 | déjà B : non |

**Mes vocations : 2** (Rouille en invocations, 3e emploi ; Exil en pioche d'Assemblée, 2e emploi), plus ma place de pioche tenue sous la règle des vocations (Chant, 2e emploi après D ASS177).

## 2. Le problème des places (pour le critique, vérifié au script `solve2.py`)

Je suis second inscrit sur **10 de mes 11 couples** (A : Famine/Festin, Vide/Étoiles, Chaos/Ordre ; C : Sang/Sève, Cendre/Floraison, Pourriture/Croissance ; D : Exil/Foyer, Silence/Chant, Tempête/Calme, Sécheresse/Déluge). Leurs familles prennent presque toutes les places encore libres sur mes mots : la garde des alliés de la Pourriture (C), la riposte de la Famine et des Étoiles (A), la perce-garde du Festin (A), le mana du Silence (D), la brûlure du Déluge (D), la pioche de la Floraison (C), la riposte de la Cendre (C), et les deux colonnes défausse et PV (D, puis A).

Après eux, au script (familles jamais principales sur le mot aux lots 1 à 11, ni prises sur le mot au lot 12) :
- **douze de mes pôles n'ont plus aucune famille libre**, sauf l'hésitation et l'enchaînement (une place chacune) : Pourriture, Croissance, Foyer, Floraison, Calme, Sang, Sève, Étoiles, Or, Ordre, Sécheresse, Déluge ;
- l'Ordre n'a plus rien du tout ; leurs vocations sont fermées (déjà B, ou trois emplois, ou une vocation d'un autre conteur sur le mot au lot) ;
- la garde du héros, la marque, la riposte, le second mana et la seconde brûlure ne sont libres sur **aucun** de mes 22 mots.

Douze pôles, deux places rares : il en reste **dix** à couvrir par des colonnes ou des reprises. Avec 3 colonnes et 2 reprises, cinq pôles resteraient sans famille, sans vocation et sans colonne (une mosaïque, interdite par la leçon 4 du lot 6). Il n'y a pas d'échange possible : les pôles qui ont des places libres (Tempête, Famine, Silence, Chant, Cendre, Vide, Chaos, Festin) en ont chacun une ou deux, et elles servent.

**Ce que je fais** (la seule répartition qui tienne 3 colonnes, et qui remplit les 17 places comme le demande la consigne du lot) : **7 reprises**, chacune régulière une à une (2e emploi du mot, premier emploi chez un autre conteur, crochet, prix principal et bête principale nouveaux pour le mot, déclarée ci-dessous), **3 colonnes**, **2 vocations**, **10 places libres**. Le plafond de 2 reprises est dépassé : c'est voulu et signalé, non caché. **Variante possible si le critique préfère** : 4 reprises (garde du héros, marque, garde des alliés, mana) et 6 colonnes, avec trois places perdues (riposte, seconde brûlure, second mana) ; elle dépasse alors le plafond des colonnes, et les couples du lot (brûlure / `brule` seul y garde deux pôles libres).

## 3. Les 22 pôles (famille principale ; appoint ; crochet ; prix principal + second sur 2 cartes au moins)

| Zone | Pôle | Famille principale | Appoint (3-4 cartes) | Crochet (2-4 cartes) | Prix |
|---|---|---|---|---|---|
| DON129 Donjon, Oasis, moghole, Sève | Pourriture − | **brûlure — reprise 1** (après D ASS100, lot 4 : `brule` et `soinEnnemi`, soin ennemi) ; la fermentation qui chauffe | affaiblissement, dégâts ciblés (4 au plus) | `garde` (aucune garde dans le pôle) | PV + défausse |
| | Croissance + | **garde du héros — reprise 2** (après C DON051, lot 1 : `garde`, soin ennemi) | riposte, dégâts ciblés (4 au plus) | `vulnerable` (aucune marque dans le pôle) | PV + garde ennemie |
| ASS037 Assemblée, Récif, éthiopienne, Eau | Exil − | **pioche** (vocation, 2e emploi après D ASS068 : `defausseAPrix`, défausse), Lois | dégâts ciblés, soin du héros | `seul` (intention 1/2) | garde ennemie + PV |
| | Foyer + | **enchaînement** (place rare : `cartesJouees` et `troisCartes` sur 5 cartes), Lois | soin des alliés, garde du héros | (l'enchaînement) | exil + PV |
| ASS088 Assemblée, Désert de sable, grecque, Feu | Famine − | **perce-garde** (libre ; A a la riposte du mot), Lois | affaiblissement, pioche | `blesse` (aucun PV en prix) | défausse + exil |
| | Festin + | **exil** (libre ; exil sur 5 cartes ; A a la perce-garde du mot), Lois | soin du héros, dégâts à tous | `piocheCout0` | exil + soin ennemi |
| ASS069 Assemblée, Glacier, éthiopienne, Glace | Silence − | **brûlure** (libre ; D a le mana du mot), Lois | riposte, garde du héros | `pietine` (intention 2/2) | défausse + PV |
| | Chant + | **pioche** (ma place, sous la règle des vocations : 2e emploi après D ASS177, sans crochet, PV et soin ennemi), Lois | soin des alliés, mana | `hesiteAvant` (aucune hésitation dans le pôle) | garde ennemie + défausse |
| ASS038 Assemblée, Archipel, khmère, Eau | Cendre − | **garde des alliés** (libre), Lois | marque, pioche | `brule` (aucune brûlure dans le pôle) | exil + soin ennemi |
| | Floraison + | **colonne marque / `vulnerable`** (marque 3, crochet 4, lu avant la marque de la carte ; avec C Pureté : plein), Lois | soin des alliés, pioche | `vulnerable` | défausse + PV |
| ASS065 Assemblée, Cité en ruines, nordique, Pierre | Tempête − | **affaiblissement** (libre), Lois | dégâts à tous, perce-garde | `hesite` (aucune hésitation dans le pôle) | PV + défausse |
| | Calme + | **garde des alliés — reprise 3** (après D ASS106, lot 7 : `defausseAPrix`, défausse), Lois | mana, riposte | `piocheCout0` | soin ennemi + exil |
| ANT029 Antre, Lande, polynésienne, Vent | Sang − | **hésitation** (place rare, libre) ; bêtes 3 | garde du héros | `blesse` (aucun PV en prix) | bête + exil |
| | Sève + | **colonne garde ennemie / `cibleGarde`** (prix 4, crochet 4, lu avant le prix ; avec A Ordre : plein) ; bêtes 3 | soin des alliés | `cibleGarde` | garde ennemie + bête |
| ANT138 Antre, Falaise côtière, vénitienne, Vent | Vide − | **soin du héros** (libre) ; bêtes 3 | dégâts ciblés | `cibleGarde` (aucune garde ennemie en prix) | bête + défausse |
| | Étoiles + | **mana — reprise 4** (après A ASS105, lot 6 : `cartesJouees`, garde ennemie) ; bêtes 3 | marque | `brule` (aucune brûlure) | exil + bête |
| ANT124 Antre, Steppe, vénitienne, Vent | Rouille − | **invocations** (vocation, 3e emploi après C ANT110 : `bete`, défausse et bête, sauterelles et sangliers ; D ANT033 : `elan`, bête, martinets) | affaiblissement, dégâts ciblés | `defausseAPrix` (aucune défausse en prix) | garde ennemie + PV |
| | Or + | **riposte — reprise 5** (après D ASS041, lot 9 : `vol`, défausse) ; bêtes 3 ; 8 au plus par carte, réveil compris | mana | `vulnerable` (aucune marque) | bête + défausse |
| ANT085 Antre, Archipel, zouloue, Eau | Chaos − | **soin des alliés** (libre ; A a le soin du héros du mot) ; bêtes 3 | dégâts à tous | `garde` (aucune garde dans le pôle) | bête + PV |
| | Ordre + | **marque — reprise 6** (après D CIT015, lot 5 : `vulnerable`, défausse et garde ennemie) ; bêtes 3 | perce-garde | `piocheCout0` | PV + bête |
| ANT125 Antre, Volcan, khmère, Feu | Sécheresse − | **colonne brûlure / `brule`** (brûlure 3, crochet 4, lu avant la brûlure de la carte) ; bêtes 3 | dégâts ciblés | `brule` | bête + PV |
| | Déluge + | **mana — reprise 7** (après A ASS017, lot 5 : `cibleGarde`, garde ennemie et PV) ; bêtes 3 | marque | `garde` (aucune garde dans le pôle) | soin ennemi + bête |

**Places (17, toutes tenues)** : soin du héros 1 (Vide), soin des alliés 1 (Chaos), garde du héros 1 (Croissance, reprise), garde des alliés 2 (Cendre ; Calme, reprise), affaiblissement 1 (Tempête), riposte 1 (Or, reprise), brûlure 2 (Silence ; Pourriture, reprise), marque 1 (Ordre, reprise), mana 2 (Étoiles, Déluge, reprises), perce-garde 1 (Famine), exil 1 (Festin), pioche 1 (Chant) ; rares : hésitation 1 (Sang), enchaînement 1 (Foyer). **Vocations 2** (Rouille, Exil). **Colonnes 3** (Floraison, Sève, Sécheresse). 17 + 2 + 3 = 22.

**Reprises déclarées (7, voir § 2)** : chacune 2e emploi, premier emploi chez un autre conteur, crochet et prix principal nouveaux :
1. Pourriture en brûlure (D ASS100 : `brule`, `soinEnnemi`, soin ennemi) → `garde`, PV ;
2. Croissance en garde du héros (C DON051 : `garde`, soin ennemi) → `vulnerable`, PV ;
3. Calme en garde des alliés (D ASS106 : `defausseAPrix`, défausse) → `piocheCout0`, soin ennemi ;
4. Étoiles en mana (A ASS105 : `cartesJouees`, garde ennemie) → `brule`, exil ; puffins ;
5. Or en riposte (D ASS041 : `vol`, défausse) → `vulnerable`, bête ; chacals ;
6. Ordre en marque (D CIT015 : `vulnerable`, défausse et garde ennemie ; gardes et garnisons) → `piocheCout0`, PV ; tisserins ;
7. Déluge en mana (A ASS017 : `cibleGarde`, garde ennemie et PV) → `garde`, soin ennemi ; poissons-serpents.

**Crochets (3 pôles au plus chacun ; `hesite` et `hesiteAvant` ensemble)** : `garde` 3 (Pourriture, Chaos, Déluge ; aucun de ces pôles ne donne de garde, ni au héros ni aux alliés), `vulnerable` 3 (Croissance, Or ; Floraison en colonne), `brule` 3 (Cendre, Étoiles ; Sécheresse en colonne), `piocheCout0` 3 (Festin, Calme, Ordre), `cibleGarde` 2 (Vide ; Sève en colonne), `blesse` 2 (Famine, Sang ; aucun PV en prix), `hesite` + `hesiteAvant` 2 (Tempête, Chant), `defausseAPrix` 1 (Rouille, sans défausse en prix), enchaînement 1 (Foyer). **Intention ennemie : 2** (Exil `seul`, Silence `pietine`). Aucun crochet n'est celui d'un autre conteur sur le même mot au lot (A : Famine `vulnerable`, Festin `cibleGarde`, Vide `blesse`, Étoiles `garde`, Chaos `vulnerable`, Ordre `cibleGarde` ; C : Sang `brule`, Sève `cartesJouees`, Cendre `cibleGarde`, Floraison `troisCartes`, Pourriture `cibleGarde`, Croissance `soinEnnemi` ; D : Exil `troisCartes`, Foyer `defausseAPrix`, Silence `hesiteAvant`, Chant `garde`, Tempête `cibleGarde`, Calme `brule`, Sécheresse `blesse`, Déluge `hesite`).

**Couples (2 pôles du lot au plus)** : marque / `vulnerable` (C Pureté, B Floraison : **plein**), garde ennemie / `cibleGarde` (A Ordre, B Sève : **plein**), brûlure / `brule` (B Sécheresse : 1). Je ne prends ni PV / `blesse`, ni défausse / `defausseAPrix`, ni bête / `bete`, ni garde / `garde` (pleins ou pris).

## 4. Bêtes (famille scientifique vérifiée ; aucune deux fois chez moi)

| Pôle | Bêtes | Famille |
|---|---|---|
| Sang | frégates du Pacifique | frégatidés |
| Sève | sternes fuligineuses (manutara) | laridés (avec les mouettes ivoire de A : 2, plein) |
| Vide | vautours fauves | accipitridés (rapaces diurnes) |
| Étoiles (reprise) | puffins yelkouans | procellariidés |
| Rouille (vocation, principale) | tadornes casarca | anatidés (avec les canards à crête de D : 2, plein) |
| Or (reprise) | chacals dorés | canidés (avec les chiens de traîneau de A : 2, plein) |
| Chaos | mangoustes rayées | herpestidés |
| Ordre (reprise) | tisserins | plocéidés |
| Sécheresse | varans | varanidés (squamates ; pas des geckonidés de C) |
| Déluge (reprise) | poissons-serpents | channidés |

Évités : rongeurs (C, D : pleins), strigidés, ptéropodidés, corvidés, félidés, cercopithécidés (le vervet devient la mangouste), apidés en carte (les abeilles d'ASS038 restent dans le récit).

## 5. Récits : forme, intrigue, première et dernière phrase

Aucune forme de mon lot 11, ni de A, C ou D au lot 12. Aucun document cité, aucun dialogue, aucune énumération, aucune chute en « X dit que », aucun nombre précis. Registre : aucune violence montrée, aucun enfant en danger.

| Zone | Nom | Forme | Qui fait quoi, comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|---|
| DON129 | Daulatbagh, la Descente du Firman | la visite annoncée | chaque printemps un firman annonce l'empereur ; le darogha Dilawar fait vider et récurer le puits à degrés ; l'empereur ne vient pas ; l'année où l'on renonce, il vient, et trouve la mousse belle | « Chaque printemps, un firman annonce que l'empereur passera par l'oasis de Daulatbagh, et chaque printemps on récure la descente. » | « Depuis, on nomme tous les ans un homme pour ne pas la nettoyer. » |
| ASS037 | Le Baito de Desset Gual | le retour refusé | le baito bannit Tesfay sur l'îlot nu derrière le récif ; il y creuse une citerne ; à la sécheresse, le village rame vers lui ; il refuse de rentrer | « Le baito de Desset Gual bannit Tesfay sur l'îlot nu, de l'autre côté du récif, pour avoir vendu l'eau commune. » | « Le baito siège maintenant sur l'îlot, et c'est le village qui rame. » |
| ASS088 | Les Sitônes de Leukarénè | le banquet de façade | en pleine famine, les sitônes dressent quand même le banquet d'Apollon pour que les caravanes croient la ville riche ; le blé arrive moins cher | « Après des années sans pluie, la boulè de Leukarénè vota le banquet d'Apollon comme si de rien n'était. » | « Le blé vint à moitié prix, et la cité jeûna un mois pour payer le banquet. » |
| ASS069 | Le Chilot de Dägga Bered | la chanson à double sens | le dejazmach interdit au camp du col les chansons de l'azmari Desta ; elle ne chante plus que des louanges, et tout le camp entend l'autre sens | « Au camp d'hiver de Dägga Bered, le chilot du dejazmach défendit les chansons de l'azmari Desta, qui se moquaient de lui à mots couverts. » | « Jusqu'à la fin, le dejazmach la garda à sa table. » |
| ASS038 | Les Mékhum de Phĕh Mrech | l'interdit du brûlis | les mékhum interdisent de brûler les pentes pour le poivre, à cause de la fumée sur la pagode ; Sokhom laisse ses poivriers ; les abeilles prennent l'île | « Sur l'île de Phĕh Mrech, on brûlait chaque saison sèche une pente pour le poivre, et la fumée noircissait la pagode. » | « Les collecteurs du roi repartent avec des jarres de miel, et se plaignent qu'il soit trop doux. » |
| ASS065 | Le Lögberg de Rústavík | la loi du beau temps | le lögberg ne siège que par temps calme ; une tempête dure tout l'été ; à l'automne, les querelles se sont réglées seules ; Ásgaut, le diseur de loi, s'en inquiète | « Le lögberg de Rústavík ne siège que par temps calme : c'est la plus vieille loi d'Ásgaut, et la seule qu'on n'ait jamais discutée. » | « L'été suivant, Ásgaut pria pour la tempête. » |
| ANT029 | Vai Toromiro, la Trêve de l'Arbre | la trêve sur l'arbre | deux mata se disputent le dernier toromiro de la lande ; Kaioa fait jurer que la lignée qui versera le sang perdra l'arbre ; personne ne frappe plus | « Sur la lande de Vai Toromiro il ne restait qu'un arbre, et les mata voisines le réclamaient. » | « L'arbre mourut de vieillesse, et la trêve lui survécut. » |
| ANT138 | Sasso Grifòn, la Dîme des Vautours | le compte des vautours | le podestà Lunardo Grisogon lève un soldo par mouton ; les bergers jurent que leurs bêtes tombent dans le vide ; il compte les vautours | « À Sasso Grifòn, le podestà lève un soldo par mouton, et les bergers jurent que leurs bêtes tombent de la falaise. » | « Il compta les vautours, et doubla l'impôt. » |
| ANT124 | Rusenigo, les Poids du Consul | les poids rouillés | au comptoir de la steppe, le consul Bortolo Querin pèse l'or des Tatars avec des poids de fer ; la rouille les alourdit ; il refuse de les changer | « Au comptoir de Rusenigo, les Vénitiens pèsent l'or des caravanes avec des poids de fer marqués du lion. » | « Dans sa lettre au Sénat, le consul Bortolo Querin jura que ses poids étaient les plus justes de la mer Noire, et demanda qu'on n'y touche pas. » |
| ANT085 | Emabhuqwini, le Code des Perles | les colliers mêlés | un collier se lit comme un message, une couleur par mot ; un boutre perd sa cargaison de perles inconnues ; Lindiwe enfile n'importe quoi ; on ne sait plus lire | « Sur l'île d'Emabhuqwini, un collier se lit : le blanc dit l'amour, le noir le chagrin, le rouge l'impatience. » | « On ne sait plus ce que dit un collier d'Emabhuqwini, et l'on s'y marie davantage. » |
| ANT125 | Tuol Andong, la Bonde du Roi | la bonde ouverte | le baray du cratère ne s'ouvre que sur l'ordre du roi, parti en guerre ; à la sécheresse, le gardien Pich ouvre la bonde ; la pluie revient en déluge et le bassin vide la boit | « Le baray du cratère de Tuol Andong ne s'ouvre que sur l'ordre du roi, et le roi était en campagne. » | « On grava son nom sur la bonde, et l'on changea la serrure. » |

- **Prénoms** : Dilawar, Tesfay, Desta, Sokhom, Ásgaut, Kaioa, Lunardo Grisogon, Bortolo Querin, Lindiwe, Nomsa (ANT085, en carte), Pich ; Eurydamas (sitône, ASS088).
- **Institutions et titres** : darogha, firman ; baito ; sitônes, boulè ; chilot, dejazmach, azmari ; mékhum ; lögberg ; mata ; podestà ; consul ; baray.
- **Gestes d'intrigue** : récurer un puits à degrés ; ramer vers un banni ; dresser un banquet en famine ; chanter des louanges à double sens ; interdire le brûlis ; attendre le calme pour siéger ; jurer sur un arbre ; compter des vautours ; peser avec des poids rouillés ; enfiler des perles inconnues ; ouvrir une bonde sans ordre.
- **Nombres précis** : aucun.
- Chutes : « Depuis » 1, « Le » 2, « Jusqu'à » 1, aucune autre première lettre plus de deux fois ; histoires d'argent : 3 (ASS088, ANT138, ANT124).

## 6. ±7 (recettes tournantes ; comparées aux images de A, C, D sur le même couple)

| Zone | −7 | +7 |
|---|---|---|
| DON129 (C ANT152 : saumure, lotus) | stagnation : l'eau verte et épaisse jusqu'à la dernière marche, l'odeur | foule : toute l'oasis descend cueillir sur les marches, paniers et échelles |
| ASS037 (D ASS016 : braises en couronne, foyer de tous) | dispersion : chaque famille sur son îlot, les barques tirées au sec, portes closes | geste : le café versé à chaque seuil, toutes les barques amarrées au même quai |
| ASS088 (A CIT044 : marmites froides, empire à table) | sécheresse : les greniers ouverts et vides, la poussière dans les jarres | démesure : les tables du banquet jusqu'aux dunes, le blé versé sur le sable |
| ASS069 (D ASS097 : canopée muette, forêt qui vote) | silence : le masenqo emmailloté, le camp sous la neige sans une voix | foule : tout le camp chante la même louange, et chacun rit d'autre chose |
| ASS038 (C ASS149 : île des morts, baies) | ruine : les pentes noires, les tuteurs calcinés, la fumée sur la mer | foule : les ruches à chaque branche, les barques chargées de rayons |
| ASS065 (D ANT057 : ciel noir, torrent arrêté) | démesure : la mer par-dessus les ruines, les pierres du lögberg renversées | foule : tous les bancs pleins, les barques serrées dans la baie lisse |
| ANT029 (C ASS129 : rouleaux, manne) | vide : la lande rase, les deux lignées face à face, un tronc mort | objet : l'arbre seul en fleurs jaunes, une ceinture de pierres que personne ne franchit |
| ANT138 (A ANT008 : fosse sans barque, barque d'étoiles) | vide : la falaise sans un mouton, des vautours partout dans le ciel blanc | nuit : les puffins rentrent par milliers au noir, leurs cris dans les fissures |
| ANT124 | ruine : la balance couverte de rouille, les poids soudés au plateau | objet : un seul poids d'or au milieu du comptoir |
| ANT085 (A ANT050 : lande sans bornes, un seul troupeau) | dispersion : les perles semées dans le sable, les mangoustes qui les roulent | ordre : chaque case a son collier, les nids des tisserins en rangs |
| ANT125 (D ANT003 : poussière, verdure qui court) | sécheresse : le fond du cratère fendu, les varans au soleil | démesure : le cratère plein jusqu'au bord, les barques dans les rues |

Aucun pigment au +7, aucun végétal qui avale un bâtiment.

## 7. Ce que j'ai changé pour A, C et D avant les cartes

- **Familles** : garde des alliés de la Pourriture (C) → brûlure (reprise) ; brûlure du Déluge (D) → mana (reprise) ; perce-garde du Festin (A) → exil ; riposte des Étoiles (A) → mana (reprise) ; pioche de la Floraison (C) → colonne marque ; colonnes défausse (Foyer, D) et PV (Sécheresse, D) → enchaînement et brûlure / `brule` ; bête / `bete` (plein par C et D) retiré de la Sève.
- **Crochets** : `hesiteAvant` du Silence (D) → `pietine` ; `cibleGarde` de l'Ordre (A) → `piocheCout0`.
- **Récits** : ASS069 n'est plus un monastère (C ANT168 a le däbtära et l'abbé éthiopiens) : c'est le camp d'un dejazmach et son azmari. ASS038 n'est plus un récit de cendres des morts (C ASS149 a l'île des morts) : c'est l'interdit du brûlis.
- **Bêtes** : rats kiore (rongeurs, plein) → sternes ; vervets → mangoustes.
- **Noms** : Sabz-, Baoli, Marches, Amba, Lögrétta, Srah, Siqhingi, Colliers, Kâmpéng, Koh, Phnom sont déjà en jeu ; mes noms ci-dessus les évitent.

## 8. Changements à la remise (après le premier passage au script et la relecture de A, C et D)

- **Rien à changer pour A, C ou D** : A (19 h 49) a relu ma carte et n'a rien changé ; les canidés et les laridés sont pleins à 2 (A et moi), les anatidés aussi (D et moi). Aucun prénom ni bête de trop avec conteur_A.md, conteur_C.md et conteur_D.md (vérifié au script ; lézards pleins à 2 avec les geckos de C), aucun geste d'intrigue en commun (relu à la main).
- **Appoints ramenés à 3 pôles par famille** : coups au hasard retirés de la Famine, du Festin, de la Floraison et de la Sève (restent Tempête, Chaos, Sécheresse) ; exil en prix retiré du Sang et des Étoiles, sur 2 cartes chacun (restent en appoint Foyer, Cendre, Calme) ; marque des Étoiles sur 2 cartes ; soin des alliés du Foyer sur 2 cartes. Le Sang prend une garde du héros sur sa forme ultime (1 carte). Prix des Étoiles : bête + exil (et non plus exil + bête).
- **Nom** : ANT125 devient « Tuol Andong, la Bonde du Roi » (« Bœung » était à une lettre du « bœng » d'un nom en jeu ; « Phnom » et « Kraham » aussi pris).
- **Registre** : « garçon » → « jeune homme », « pendu au linteau » → « accroché au linteau » (ANT085) ; « frappés du lion » → « marqués du lion » (ANT124) ; « sacrifice royal » → « banquet royal ».
- **Récits** : ASS069 et ANT124 ramenés sous 100 mots ; la chute d'ASS069 commence par « Jusqu'à la fin » (sinon trois chutes en « Le »).
- Les 17 places, 2 vocations, 3 colonnes et 7 reprises du § 3 sont inchangées.
