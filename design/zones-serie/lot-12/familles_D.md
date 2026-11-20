# Lot 12 · carte des familles du conteur D (le Lovecraftien)

**Première version : 19 h 22 au `ls`**, avant la moindre carte. Aucun familles_A/B/C.md n'existait à l'écriture : D est le premier inscrit (C 19 h 24, A 19 h 27, B 19 h 36) et garde les mots, couples, formes, prénoms, noms et bêtes qu'il inscrit ici.

**Mise à jour à la remise** (cartes écrites et validées au script, 0 erreur), après lecture de familles_A.md, familles_B.md et familles_C.md. Changements chez D : six noms de lieu (voir § 6), l'institution d'ASS029 (le bārgāh devient le tālār), le crochet du Chant (`garde` → `vulnerable`, avant les cartes), quelques appoints (tableau ci-dessous, recomptés au script), le −7 de la Nuit (« la nuit ne finit plus » était aussi chez C). Avertissements pour C au § 9.

## 1. Compte des vocations (au script `voc.py` et `hist.py`, lots 1 à 11 ; famille sur 5 cartes ou plus)

Règle : trois emplois par mot et par type, jamais deux chez D ; gros coups comptés depuis le lot 5, et avant quand une carte des familles les déclare (je compte aussi les lots 3 et 4 pour être strict quand cela change le rang).

| Mot (zone) | Invocations | Gros coups (lot 5+ / avant) | Pioche | Verdict pour D |
|---|---|---|---|---|
| Fer (CIT029) | 3 (C, A, D) | 2 / 2 | 2 (B, C) | Citadelle : pas de vocation |
| Bois (CIT029) | 2 | 1 / 0 | 1 (A) | Citadelle : pas de vocation |
| Poison (DON118) | 3 (dont D) | 1 / 3 | 2 | non (place de soin des alliés) |
| Nectar (DON118) | 2 (dont D) | 1 (C DON119) / 1 (A DON010, lot 3, non déclaré) | 1 | **gros coups : 2e emploi (3e si l'on compte A lot 3), je le prends** |
| Exil (ASS016) | 3 | 1 / 4 | 1 (D) | non |
| Foyer (ASS016) | 3 | 1 / 0 | 3 | plein |
| Ruine (ASS139) | 2 (dont D) | 1 / 2 | 1 (B ANT135) | **pioche : 2e emploi, je la prends (place de pioche)** |
| Abondance (ASS139) | 3 | 0 / 1 | 1 (C) | non (place de marque) |
| Silence (ASS097) | 3 (dont D) | 3 | 1 | plein / non |
| Chant (ASS097) | 3 (dont D) | 1 / 1 | 1 (D) | non |
| Mensonge (ASS029) | 3 (dont D) | 1 / 2 | 1 (B ASS161) | **pioche : 2e emploi, je la prends (place de pioche)** |
| Vérité (ASS029) | 2 (dont D) | 2 (dont D) / 3 | 2 (A, B) | non (place d'écho) |
| Ombre (ANT014) | 2 (dont D) | 2 / 2 | 1 | non (déjà D en invocations) : colonne |
| Lumière (ANT014) | 1 (A CIT008) | 2 / 1 | 2 (dont D) | **invocations : 2e emploi, je le prends** |
| Nuit (ANT036) | 2 (dont D) | 1 / 0 | 1 (D) | non (place d'exil) |
| Aurore (ANT036) | 3 (dont D) | 2 / 1 | 2 (dont D) | plein |
| Tempête (ANT057) | 2 (A, B) | 1 / 2 | 2 | libre (3e), laissé : place de garde des alliés |
| Calme (ANT057) | 1 (A ANT093) | 1 / 1 | 1 | **invocations : 2e emploi, je le prends** |
| Abysse (ANT023) | 1 (B) | 2 (dont D) / 1 | 1 (D) | libre (2e), laissé : place de perce-garde |
| Ciel (ANT023) | 2 (C, B) | 2 (dont D) / 1 | 1 (B) | libre (3e), laissé : place de riposte |
| Sécheresse (ANT003) | 3 | 2 / 3 | 2 | plein : colonne |
| Déluge (ANT003) | 2 (dont D) | 2 / 0 | 1 | non (place de brûlure) |

**Mes vocations : 3** (Nectar gros coups, Lumière et Calme invocations), et 2 places de pioche tenues sous la règle des vocations (Ruine, Mensonge : 2es emplois, crochet et prix nouveaux).

## 2. Les 22 pôles (famille principale ; appoint ; crochet ; prix principal + second)

| Pôle | Famille principale | Appoint (3 ou 4 cartes) | Crochet (2 à 4 cartes) | Prix |
|---|---|---|---|---|
| CIT029 − Fer | soin du héros (libre sur le mot) | garde des alliés, affaiblissement | `cibleGarde` (aucune garde ennemie, aucun perce-garde dans le pôle) | PV + défausse |
| CIT029 + Bois | garde du héros — **reprise 1/2** (après A DON009 + : `garde`, garde ennemie et défausse, ours et loups) | riposte, soin des alliés | `blesse` (aucun prix en PV) | soin ennemi + exil |
| DON118 − Poison | soin des alliés (libre) | brûlure, dégâts ciblés (4 au plus) | `vulnerable` (aucune marque dans le pôle) | PV + exil |
| DON118 + Nectar | **gros coups** (vocation, 5 cartes de dégâts ciblés, jamais 6) | affaiblissement, mana | `brule` (aucune brûlure dans le pôle) | garde ennemie + PV |
| ASS016 − Exil | garde du héros — **reprise 2/2** (après C CIT036 − : `seul`, exil et PV), Lois | pioche, riposte | `troisCartes` (enchaînement 1/3) | défausse + garde ennemie |
| ASS016 + Foyer | **colonne défausse / `defausseAPrix`** (4 et 5, la condition lue avant la défausse de la carte), Lois | soin des alliés, pioche, dégâts à tous | `defausseAPrix` | défausse + soin ennemi |
| ASS139 − Ruine | pioche (place ; 2e emploi après B ANT135 − : `brule`, défausse et PV), Lois | dégâts à tous, perce-garde | `cibleGarde` | soin ennemi + exil |
| ASS139 + Abondance | marque (libre), Lois | soin du héros, mana | `seul` (intention 1/2) | défausse + PV |
| ASS097 − Silence | mana (de Sève, libre), Lois | garde du héros, marque, riposte | `hesiteAvant` (aucune hésitation dans le pôle) | défausse + soin ennemi |
| ASS097 + Chant | **hésitation** (place rare, libre), Lois | garde des alliés, mana | `vulnerable` (aucune marque dans le pôle ; d'abord `garde`, changé avant les cartes : la garde des alliés l'aurait nourri) | garde ennemie + exil |
| ASS029 − Mensonge | pioche (place ; 2e emploi après B ASS161 − : `defausseAPrix`, défausse), Lois | marque, perce-garde | `garde` (aucune garde dans le pôle) | PV + exil |
| ASS029 + Vérité | **écho** (place rare, 4 cartes au premier niveau, 3 cartes faites pour être doublées), Lois | perce-garde, hésitation, dégâts ciblés (4) | `vulnerable` (aucune marque dans le pôle) | défausse + garde ennemie |
| ANT014 − Ombre | **colonne bête / `bete`** (4 et 4, la condition lue avant l'invocation de la carte) | affaiblissement | `bete` | bête + PV |
| ANT014 + Lumière | **invocations** (vocation, 2e emploi après A CIT008 + : `vulnerable`, garde ennemie, PV, soin ennemi, défausse ; soldats, éléphants) | brûlure | `cartesJouees` (enchaînement 2/3) | bête + exil |
| ANT036 − Nuit | exil (libre ; exil sur 5 cartes) | invocations (3), soin du héros | `vol` (intention 2/2) | exil + bête |
| ANT036 + Aurore | affaiblissement (libre) | invocations (3), garde des alliés | `hesite` | PV + défausse |
| ANT057 − Tempête | garde des alliés (libre) | invocations (3), dégâts à tous | `cibleGarde` (aucune garde ennemie) | défausse + soin ennemi |
| ANT057 + Calme | **invocations** (vocation, 2e emploi après A ANT093 + : `garde`, défausse, PV, soin ennemi, garde ennemie ; hérons, carpe, grenouille) | soin du héros, garde du héros | `brule` (aucune brûlure dans le pôle) | bête + exil |
| ANT023 − Abysse | perce-garde (libre) | invocations (3), marque | `blesse` (aucun prix en PV) | garde ennemie + bête |
| ANT023 + Ciel | riposte (libre ; 8 au plus par carte) | invocations (4), pioche, garde du héros | `cartesJouees` (enchaînement 3/3) | PV + défausse |
| ANT003 − Sécheresse | **colonne PV / `blesse`** (4 et 4, la condition lue avant le prix de la carte) | invocations (4), coups au hasard, dégâts ciblés (4) | `blesse` | PV + bête |
| ANT003 + Déluge | brûlure (libre) | invocations (3), soin des alliés | `hesite` (aucune hésitation dans le pôle) | soin ennemi + défausse |

**Places (LISTE.md, 17)** : soin du héros 1 (Fer), soin des alliés 1 (Poison), garde du héros 2 (Bois, Exil : les deux reprises déclarées), garde des alliés 1 (Tempête), affaiblissement 1 (Aurore), riposte 1 (Ciel), brûlure 1 (Déluge), marque 1 (Abondance), mana 1 (Silence), perce-garde 1 (Abysse), exil 1 (Nuit), pioche 2 (Ruine, Mensonge) ; rares : écho 1 (Vérité), hésitation 1 (Chant). **16 tenues ; 1 perdue : la seconde perce-garde.** Vérifié au script : la perce-garde n'est libre que sur l'Abysse et le Ciel, et le Ciel est le seul mot libre pour la riposte ; la tenir demanderait une 3e reprise. Vocations 3. Colonnes 3 (Foyer, Ombre, Sécheresse). 16 + 3 + 3 = 22.

**Reprises déclarées (2, le plafond)** :
1. Bois en garde du héros : 2e emploi, après A DON009 + (lot 6). Crochet `blesse` (origine `garde`), prix principal soin ennemi (origine garde ennemie et défausse), aucune bête.
2. Exil en garde du héros : 2e emploi, après C CIT036 − (lot 3). Crochet `troisCartes` (origine `seul`), prix principal défausse (origine exil, PV en second : je ne paie pas en PV), aucune bête.

**Crochets de D (3 pôles au plus chacun)** : `cibleGarde` 3 (Fer, Ruine, Tempête), `blesse` 3 (Bois, Abysse, Sécheresse), `hesite` + `hesiteAvant` 3 (Silence, Aurore, Déluge), enchaînement 3 (Exil, Lumière, Ciel), `garde` 1 (Mensonge), `vulnerable` 3 (Poison, Chant, Vérité), `brule` 2 (Nectar, Calme), `defausseAPrix` 1, `bete` 1. **Intention ennemie 2** (`seul` Abondance, `vol` Nuit). La garde des alliés compte comme une Garde levée : aucun pôle qui lit `garde` ne donne de garde aux alliés ni au héros avant son `si`.

**Appoints (3 ou 4 cartes), comptés au script à la remise, 3 pôles au plus chacun** : affaiblissement (Fer, Nectar, Ombre), garde des alliés (Fer, Chant, Aurore), garde du héros (Silence, Calme, Ciel), soin du héros (Abondance, Nuit, Calme), soin des alliés (Bois, Foyer, Déluge), riposte (Bois, Exil, Silence), pioche (Exil, Foyer, Ciel), marque (Silence, Mensonge, Abysse), mana (Nectar, Abondance, Chant), perce-garde (Ruine, Mensonge, Vérité), dégâts à tous (Foyer, Ruine, Tempête), enchaînement (Exil, Lumière, Ciel), brûlure (Poison, Lumière), hésitation (Vérité), coups au hasard (Sécheresse). Invocations des Antres hors vocation : 4 cartes.

**Couples (2 pôles du lot au plus)** : D prend défausse/`defausseAPrix` (Foyer), bête/`bete` (Ombre), PV/`blesse` (Sécheresse), un pôle chacun. Assemblages prix + crochet : aucun en double chez D.

## 3. Nombres précis (D)

Un seul : « deux » dans le récit d'ANT014 (la pierre qui porte deux ombres). Aucun autre dans les récits, `pal`, noms et ambiances (vérifié au script à la remise).

## 4. Prénoms et institutions (D)

- **Prénoms** : l'alcaide Fortún (CIT029) ; l'apothicaire Farrokh (DON118) ; le kadkhodā Manuchehr (ASS016) ; Huitzilin, gardienne des semences (ASS139) ; le géronte Polyainos (ASS097) ; le témoin Navid (ASS029) ; Hinatea (ANT014) ; le devin Iddin-Sîn (ANT036) ; le moine Sōen (ANT057) ; la pêcheuse Tamayo (ANT023) ; le chaski Waman (ANT003).
- **Institutions** : le rīš-safīdān (conseil des barbes blanches, ASS016), le tlahtocan (ASS139), la gérousia (ASS097), le tālār (ASS029).

## 5. Formes de récit : intrigue, première et dernière phrase

Aucune forme de mon lot 11. Aucun document cité, aucune lettre, aucun dialogue, aucune énumération, aucune ouverture « X était petit quand », aucune chute en « X dit que ».

| Zone | Forme | Qui fait quoi, et comment ça finit | Première phrase | Dernière phrase |
|---|---|---|---|---|
| CIT029 | le siège sans assaillant | l'alcaide Fortún tient la herse baissée contre une armée qui ne vient pas ; la forêt de chapeaux pousse à travers le fer | « Depuis que l'alcaide Fortún a fait baisser la herse, Seteral attend son ennemi. » | « La herse est toujours baissée. C'est la forêt qui la tient. » |
| DON118 | la dégustation | l'apothicaire Farrokh goûte chaque jarre du rucher enterré pour trier le miel doux du miel qui égare ; une jarre n'a aucun goût | « Sous les dunes de Zarvanak, les jarres du rucher ne s'ouvrent que devant l'apothicaire. » | « Il reste une jarre à goûter, et c'est elle, maintenant, qui attend Farrokh. » |
| ASS016 | le feu commun | le conseil garde un seul foyer ; le banni emporte une braise ; chaque hiver, les braises des bannis brillent plus près du village | « Au village de Kuhsard, on ne bannit personne sans lui donner une braise. » | « Cet hiver, le cercle des braises a fermé la clairière, et le foyer commun s'est éteint seul. » |
| ASS139 | la récolte sur la cendre | le tlahtocan partage les pentes ; le maïs le plus beau pousse où la lave a passé ; Huitzilin sème avant la coulée | « Le tlahtocan de Teocalcingo ne partage pas la terre : il partage la cendre. » | « Le maïs de cette année pousse déjà sur des champs que la lave n'a pas encore touchés. » |
| ASS097 | le vote chanté | la gérousia vote en chantant ; la jungle se met à répondre ; Polyainos se tait, et la forêt vote quand même | « À Kerkyleia, la gérousia ne lève pas la main : elle chante son vote. » | « Depuis, la forêt vote aussi, et elle tient la note plus longtemps qu'eux. » |
| ASS029 | le serment sur la marée | les témoins jurent dans l'eau du tālār ; les racines des palétuviers gardent chaque parole ; à marée basse, les mensonges y sont des nœuds | « Au tālār de Sīrāvand, on témoigne debout dans la marée montante. » | « À marée basse, on voit les racines nouées, et personne n'ose plus compter les siennes. » |
| ANT014 | l'ombre de midi | les pierres du marae sont posées pour ne porter aucune ombre à midi ; une pierre en porte une, puis deux | « Ceux qui dressèrent les pierres de Taputea les placèrent pour qu'à midi, aucune ne porte d'ombre. » | « À midi, toutes les pierres sont nues, sauf une, qui en porte deux. » |
| ANT036 | le guet de l'aube | le devin Iddin-Sîn lit l'aube depuis la falaise ; un matin, le jour se lève du côté de la mer | « Chaque nuit, Iddin-Sîn monte à la vigie pour être le premier à voir le jour. » | « Ce matin-là, le jour s'est levé du côté de la mer, et les guêpiers sont partis à sa rencontre. » |
| ANT057 | le sûtra inachevé | le moine Sōen apaise le torrent à chaque typhon en récitant ; un jour il s'interrompt, et le torrent s'arrête | « À chaque typhon, le moine Sōen descend au torrent de Nagisawa et lui récite un sûtra. » | « Le torrent ne coule plus depuis ; il attend que Sōen finisse sa phrase. » |
| ANT023 | la passerelle | la pêcheuse Tamayo marche sur la passerelle haute à l'étale ; l'eau reflète si bien le ciel que le bas et le haut s'échangent | « À Hirugino, la passerelle passe si haut au-dessus des palétuviers que les hérons marchent dessous. » | « À l'étale, les martins-pêcheurs plongent vers le haut, et ils en rapportent des poissons. » |
| ANT003 | la course devant la pluie | le chaski Waman court annoncer la pluie et arrive avant elle ; la pluie le suit, sans jamais le rattraper | « Le chaski Waman a été le premier à voir la pluie revenir sur la puna d'Unuchaki. » | « Il court toujours devant elle : la puna verdit dans ses traces, et sèche derrière la pluie. » |

**Gestes d'intrigue (une fois par lot)** : baisser une herse ; goûter des jarres de miel ; emporter une braise en exil ; semer avant la coulée ; voter en chantant ; témoigner dans la marée ; poser des pierres sans ombre ; guetter l'aube ; réciter au torrent ; marcher sur une passerelle à l'étale ; courir devant la pluie.

## 6. Noms de zones (vérifiés contre noms-pris.txt : moitiés, préfixes, à une lettre près)

Seteral, la Herse des Spores (CIT029) ; Zarvanak, le Rucher sous le sable (DON118) ; Le Rīš-safīdān de Kuhsard (ASS016) ; Le Tlahtocan de Teocalcingo (ASS139) ; La Gérousia de Kerkyleia (ASS097) ; Le Tālār de Sīrāvand (ASS029) ; Taputea, la Pierre qui porte l'ombre (ANT014) ; Ṣalli-Amurri, la Vigie des Guêpiers (ANT036) ; Nagisawa, le Torrent assoupi (ANT057) ; Hirugino, la Passerelle haute (ANT023) ; Unuchaki, l'Attente des Nuages (ANT003).
Écartés car déjà en jeu ou trop proches : Angabin (« miel »), Popocalco (« fumée »), Phyllodrys (« chêne »), Kibru-Mušī (« nuit »), Hirugi-ura (« baie », et -ura chez C), Harāband (Harâbân en jeu), bārgāh (Dargah, Bargad en jeu), Alcazaba, Marae, Gorge, Perchoir(s), Dalles, Corniche, Ponton, Bastion, Barf-, Dûr-, Kār-.

## 7. Bêtes (une famille par pôle d'Antre)

| Pôle | Bêtes | Famille scientifique |
|---|---|---|
| ANT014 − Ombre | roussettes | ptéropodidés (chiroptères) |
| ANT014 + Lumière | phaétons (paille-en-queue) | phaethontidés |
| ANT036 − Nuit | grands-ducs | strigidés (rapaces nocturnes) |
| ANT036 + Aurore | guêpiers | méropidés |
| ANT057 − Tempête | corbeaux à gros bec | corvidés |
| ANT057 + Calme | salamandres géantes | cryptobranchidés (amphibiens urodèles) |
| ANT023 − Abysse | raies pastenagues | dasyatidés (raies) |
| ANT023 + Ciel | martins-pêcheurs | alcédinidés |
| ANT003 − Sécheresse | viscaches | chinchillidés (**rongeurs**) |
| ANT003 + Déluge | canards à crête | anatidés |

Attention pour A, B, C : D prend un pôle de **rongeurs** (viscaches), un de **corvidés**, un de **strigidés**, un d'**anatidés**.

## 8. ±7 (recettes tournantes)

−7 : siège clos (CIT029 la herse rouillée dans le noir), objet (DON118 la jarre sans goût), cercle (ASS016 les braises en couronne), ruine (ASS139 la coulée sur les champs), silence (ASS097 la canopée muette), nœuds (ASS029 les racines nouées), ombre double (ANT014), nuit tenue (ANT036 aucune aube), démesure (ANT057 le ciel noir sur la gorge), vide (ANT023 le fond qui se voit au ciel), poussière (ANT003). +7 : forêt dedans (CIT029 la cour devenue sous-bois ; pas de végétal qui avale un bâtiment au sens strict : le fer reste debout, la forêt le porte), foule (ASS097 la forêt qui vote), objet (DON118 le rayon ouvert ; ASS029 la racine dénouée), feu (ASS016 le foyer de tous), abondance (ASS139 le maïs sur la lave froide), lumière sans ombre (ANT014), aube à l'ouest (ANT036), immobilité (ANT057 le torrent arrêté), renversement (ANT023 le ciel sous la passerelle), verdure qui court (ANT003). Aucun pigment.

## 9. Avertissements à la remise (pour A, B, C et le critique)

D est inscrit le premier (19 h 22). Ces points touchent C (19 h 24) ; d'après la leçon 6 du lot 10, c'est au second inscrit de changer :
- **Même famille principale sur le même mot, dans le lot** (aucune famille principale commune aux pôles d'un même mot) :
  - **Abondance** : marque chez D (ASS139 +) et chez C (ASS007 +) ;
  - **Abysse** : perce-garde chez D (ANT023 −) et chez C (ANT069 −) ;
  - **Nuit** : exil chez D (ANT036 −) et chez C (ANT025 −) ;
  - **Aurore** : affaiblissement chez D (ANT036 +) et chez C (ANT025 +).
- **Même bête sur le même mot** : roussettes sur l'Ombre chez D (ANT014 −, colonne bête/`bete`) et chez C (ANT168 −, vocation). Les ptéropodidés restent à 2 dans le lot (conforme), mais l'image est la même ; à C de changer de bête.
- **Même image au −7 de la Nuit** : « une nuit qui ne finit pas » (C ANT025). J'ai retiré la formule de mon −7 (« plus d'est ni d'ouest »), mais les deux −7 restent des nuits tenues : à C de comparer.
- **Familles d'animaux pleines à 2** : ptéropodidés (D, C), rongeurs (D, C), strigidés (D, C), anatidés (D, B). B et A l'ont noté et évité.
- **Couples pleins à 2** : défausse/`defausseAPrix` (D Foyer, A Nectar), PV/`blesse` (D Sécheresse, A Vide), bête/`bete` (D Ombre, C Lumière).
- **Prénom** : Waman (D ANT003) ; A a changé son Wamanchu.
