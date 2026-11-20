# Lot 7 : carte des familles, conteur B (l'Explorateur marchand)

**Première version : 10 h 12**, avant les cartes, après lecture de familles_C.md (10 h 06). Aucune autre carte du lot n'existait (ni A, ni D). **Deuxième version : 10 h 27**, après lecture de familles_A.md (10 h 11) et familles_D.md (10 h 16) : aucune famille principale de B ne change (B était inscrit avant A et D) ; B change seulement des bêtes, trois Ressources et une forme de récit qui croisaient A ou D (détail plus bas). **Troisième version : 10 h 33**, à la remise, après relecture de familles_A (10 h 22), familles_C (10 h 26) et familles_D (10 h 16) : aucune famille ne change ; B cède huit bêtes pour lever les recoupements signalés par C (crustacés, coléoptères) et par D (chevaux, gerboises), et Parisa (prénom de C) devient Mahtab. Les comptes ci-dessous sont ceux du script sur conteur_B.md. La carte se ferme vers **10 h 41** ; après cette heure, B ne prend plus de place nouvelle, il ne fait que céder ou retirer. Comptes refaits au script sur conteur_B.md à la remise (voir la troisième version).

Définitions : famille principale = 5 cartes ou plus sur 7 (palier 7, `si` et réveil compris) ; appoint = 3 ou 4 cartes, dans 3 pôles de B au plus par famille (pioche comprise, aucune vocation exemptée) ; crochet = condition `si`, sur 2 à 4 cartes, jamais 5. Règles que B s'impose : chaque famille principale dans 2 pôles de B au plus, une seule fois pour les familles rares ; dégâts ciblés sur 4 cartes au plus (5 en Donjon) ; écho sur 3 cartes au plus ; « tous » sur 3 cartes au plus ; récupération sur 2 cartes au plus ; **4 cartes à prix au moins sur 7 dans chaque pôle**, égalité à une carte près dans la zone ; trois bêtes au moins par pôle d'Antre, mais 4 au plus (l'invocation n'est la famille principale d'aucun pôle de B).

## Ce que B a vérifié avant de choisir

- **Les mêmes mots dans les lots 1 à 6, cartes comptées au script** (`poles.json` refait sur les six lots) : aucune famille principale de B ne reprend une famille déjà principale pour le même mot. Écartés par le script en route : Rouille en invocations (ANT110, lot 4), Brume et Nuit en garde des alliés (ANT027, ASS109), Ordre en pioche et en garde des alliés (ASS166, CIT030), Chaos en coups au hasard (ASS166), Sang en vol de vie (DON022), Déluge en garde des alliés (CIT019), Os en perce-garde (DON061).
- **Couples partagés avec C, qui a écrit le premier (10 h 06)** : B prend une autre famille principale sur les deux pôles. Rouille/Or (C : riposte / invocations ; B : garde des alliés / perce-garde), Poison/Nectar (C : invocations / brûlure ; B : exil / riposte), Fer/Bois (C : garde des alliés / invocations ; B : brûlure / mana), Ruine/Abondance (C : gros coups / affaiblissement ; B : affaiblissement / exil), Silence/Chant (C : marque / gros coups ; B : pioche / soin du héros), Sécheresse/Déluge (C : riposte / garde du héros ; B : perce-garde / soin des alliés), **Brume/Clarté** (C : soin des alliés / garde du héros, exactement ce que B avait prévu : **B a changé les deux**, Brume → soin du héros, Clarté → riposte).
- **Couples que D aura aussi** (D n'a pas encore de carte) : Peste/Guérison (CIT011), Nuit/Aurore (DON109), Chaos/Ordre (ASS133), Sang/Sève (ASS137). B écrit avant D : D prendra d'autres familles principales sur ces quatre couples.
- **Images de C relues** : C a les loups de mer et les homards (Rouille), les sébastes (Or), les péliades et les sonneurs, les grenouilles, l'alfa, les airelles peignées, le sirop de grenade, les joncs fauchés, l'écorce de bouleau. B n'en reprend aucun, et a changé pour cela ses Ressources du marais japonais (jonc), de l'oasis perse (grenade), de la steppe mongole (peigner) et de la forêt boréale éthiopienne (bouleau).

## Pôles (famille principale ; appoints ; crochet — prix)

| Zone | Pôle − | Pôle + |
|---|---|---|
| ANT012 Antre, Forêt boréale, byzantine, Glace | Sécheresse → **perce-garde** (l'étang des castors vidé, l'écorce qui se fend ; pics noirs, lynx, grands tétras ; garde du héros ; `cibleGarde`) — PV | Déluge → **soin des alliés** (la digue des castors qui crève et noie la forêt ; castors, loutres, brochets ; mana de Glace ; `bete`) — vos bêtes |
| ANT049 Antre, Steppe, chinoise impériale, Vent | Peste → **colonne vertébrale** : `prixPV` payé et `blesse` sur 4 cartes (la morve dans les haras impériaux ; puces des litières, taons, chiens errants ; affaiblissement) — PV | Guérison → **marque** (les aiguilles du médecin des chevaux, qui désignent les points ; outardes, grues, chameaux de bât ; les chevaux du haras sont les malades du récit, jamais des cartes de bête ; soin du héros ; `seul`) — défausse |
| ANT220 Antre, Jungle, gothique, Sève | Rouille → **garde des alliés** (la chapelle de fonte venue par bateau, dont la grille rouillée abrite les bêtes ; fourmis rousses, mille-pattes, chauves-souris ; riposte ; `pietine`) — PV | Or → **perce-garde** (l'or du reliquaire qui achète les portes ; aras jaunes, colibris, coqs de roche ; pioche ; `garde`) — soin ennemi |
| ANT160 Antre, Fjord, andalouse, Glace | Os → **garde du héros** (le récif mort, blanc comme l'os, où les coraleurs s'abritent ; myxines, buccins, chimères ; riposte ; `elan`) — PV | Corail → **affaiblissement** (le corail blanc vivant qui pique et prend les filets ; ophiures, brosmes, calmars ; soin des alliés ; `bete`) — défausse |
| ANT028 Antre, Volcan, andalouse, Feu | Fer → **brûlure** (la ferrería sur la coulée, le fer rouge ; lézards ocellés, scorpions, corneilles ; dégâts à tous ; `brule`) — PV | Bois → **mana** de Feu (le charbon de bois qui nourrit la forge ; chèvres, sangliers, huppes ; garde du héros ; `defausseAPrix`) — défausse |
| ANT244 Antre, Désert de sel, nordique, Pierre | Poison → **exil** (la saumure et la lessive des bouilleurs de sel : la dose bue ne revient pas ; musaraignes, chenilles processionnaires, grands corbeaux ; affaiblissement ; `vol`) — exil, PV | Nectar → **riposte** (les ruches de bruyère sur la croûte de sel : l'abeille rend le coup ; abeilles, bourdons, pies-grièches ; soin du héros ; `bete`) — garde ennemie |
| ASS181 Assemblée, Canyon, gothique, Feu | Ruine → **Lois d'affaiblissement** (le Bergamt saisit les outils des mineurs faillis ; pioche 3 ; `soinEnnemi`) — défausse | Abondance → **Lois d'exil** (l'argent en trop fondu et versé au trésor ; garde des alliés ; `hesite`) — exil, PV |
| ASS079 Assemblée, Steppe, polynésienne, Vent | Silence → **pioche**, Lois (le rāhui : la plaine se tait, on écoute ; marque ; `seul`) — défausse | Chant → **soin du héros** (le chant qui refait celui qui chante ; garde des alliés ; `blesse`) — PV |
| ASS089 Assemblée, Forêt boréale, celte, Glace | Nuit → **Lois de soin des alliés** (l'óenach de la longue nuit, où les clans dorment sous les pins ; hésitation ciblée ; `garde`) — PV | Aurore → **Lois de mana** de Glace (la première lumière qui ouvre les marchés ; pioche ; `troisCartes` 2) — défausse |
| DON053 Donjon, Cavernes cristallines, andalouse, Pierre | Chaos → **hésitation** (les lames de cristal qui tombent quand la galerie bouge ; place rare choisie pour le récit ; gros coups ; `pietine`) — PV | Ordre → **colonne vertébrale** : `prixDefausse` payé et `defausseAPrix` sur 4 cartes (les étais qu'on met de côté, puis qu'on pose ; gros coups, garde du héros) — défausse |
| DON034 Donjon, Jungle, éthiopienne, Sève | Sang → **brûlure** (le saignement : les fossés hérissés du royaume forestier ; gros coups ; `blesse`) — PV | Sève → **marque** (la glu des troncs qui colle et désigne ; gros coups ; `vulnerable`, lu avant la marque) — garde ennemie |
| CIT037 Citadelle, Cité en ruines, japonaise féodale, Pierre | Brume → **soin du héros** (la garnison qui tient dans la brume de la rivière ; garde des alliés ; `elan`) — PV | Clarté → **riposte** (le guetteur qui voit venir le coup ; garde du héros ; `cibleGarde`) — défausse |

**Comptes de B (familles principales)** : perce-garde 2 (Sécheresse, Or), soin des alliés 2 (Déluge, Nuit), marque 2 (Guérison, Sève), affaiblissement 2 (Corail, Ruine), brûlure 2 (Fer, Sang), mana 2 (Bois, Aurore), exil 2 (Poison, Abondance), riposte 2 (Nectar, Clarté), soin du héros 2 (Chant, Brume), garde des alliés 1 (Rouille), garde du héros 1 (Os), pioche 1 (Silence), hésitation 1 (Chaos, seule place rare de B) ; deux pôles en colonne vertébrale (Peste : PV et `blesse` ; Ordre : défausse et `defausseAPrix`). Ni vol de vie, ni écho, ni hasard, ni enchaînement en famille principale ; aucun pôle d'invocations en famille principale.

**Comptes du lot d'après C et B (10 h 12)** : affaiblissement 4, exil 4, mana 4, riposte 4, marque 4, perce-garde 3, soin des alliés 3, brûlure 3, garde du héros 3, garde des alliés 3, soin du héros 2, pioche 1 ; hésitation 1 (B), hasard 0, vol de vie 0, écho 0, enchaînement 0 ; invocations 5 (C), gros coups 2 (C).

## Nombres précis, prénoms, institutions (B)

- **Nombres prévus** : dix-neuf (les poches de castoréum, ANT012) ; aucun autre nombre précis prévu dans les récits, `pal`, noms et ambiances, hors un, deux, trois, moitié. **Liste définitive (script, 10 h 33)** : dix-neuf, seul nombre précis de B ; aucun des nombres de C et D.
- **Prénoms** : Leontios Vrachnos (ANT012), Qiao Shouyi (ANT049), frère Anselm Kriechbaum (ANT220), Gaspar Montoya (ANT160), Remedios Alhama (ANT028), Gunnvor Ketilsdóttir (ANT244), Wendelin Grauschopf (ASS181), Rangimārie (ASS079), Ailbhe (ASS089), Encarna Ruzafa (DON053), Shawo (DON034), Kuze Tadamori (CIT037). Ressources : Oyuki (RES303), Farrokh (RES204), Tiyi (RES176), Hedwig (RES113), Ubar-Sîn (RES371), le moine Gebre-Iyesus (RES383), Aputi (RES323), Nin-dada (RES377), Ix Ch'up (RES120), Varvara (RES340), Saran (RES330), Mahtab (RES264), Nomvula (RES188), Ilšu-ibni (RES221).
- **Institutions** : le kommerkion (ANT012), la Cour des Haras (ANT049), le chapitre de la chapelle (ANT220), la cofradía des coraleurs (ANT160), le Bergamt (ASS181), le rāhui (ASS079), l'óenach (ASS089), la cuadrilla des boiseurs (DON053), le mikrecho et le tato (DON034), le jōdai (CIT037). Ni « brehon » (C), ni « conseil », ni « kurultai ».

## Formes de récit (B), pour la liste commune

Documents cités : 3 (fiche de remonte, inventaire, avis de saisie). Aucune énumération (ni articles, ni jours, ni quarts). Aucune reprise des formes de B au lot 6 (tarif chanté, criée, commande, message, billet de santé, règlement affiché, menu, plainte, procès-verbal d'essai, querelle de deux métiers, lettre, tableau de garde).

| Zone | Forme |
|---|---|
| ANT012 | la pesée : un marché conclu au crochet de la balance |
| ANT049 | **document : la fiche de remonte** (registre d'un cheval) |
| ANT220 | **document : l'inventaire** (le trésor de la chapelle) |
| ANT160 | le récit de celui qui remonte (la plongée racontée sur le pont) |
| ANT028 | la première nuit de l'apprentie |
| ANT244 | la vente de porte en porte |
| ASS181 | **document : l'avis de saisie** |
| ASS079 | la journée sans parole |
| ASS089 | la veillée : qui garde le feu |
| DON053 | la légende de mine (ce qu'on dit au nouveau) |
| DON034 | l'ambassade : l'envoyé qui arrive au fossé |
| CIT037 | la consigne mal comprise (l'ordre que personne ne corrige) ; « le siège vu de l'autre camp » est abandonné, A a la chronique d'un siège (CIT021) |

## Bêtes (familles d'animaux)

Aucun rapace, aucun singe, aucun cervidé, aucun serpent, aucun crapaud ni grenouille (C en a deux pôles), aucun crustacé ni coléoptère depuis la troisième version (buccins, mollusques, à la place des crabes-araignées ; aras et coq de roche à la place des scarabées et des néphiles). Corvidés : corneilles (ANT028 −) et grands corbeaux (ANT244 −), deux pôles. Abeilles : ANT244 + seulement. **Après lecture de A et D (10 h 27)** : chiens dans trois pôles (A Foyer, B Peste, B Guérison) : les chiens de berger de Guérison deviennent des chameaux de bât ; scorpions et lézards (A Cristal, B Fer), sangliers (A Exil, B Bois), crabes (A Mort, B Os), chevaux (B Guérison, D Vie) : deux pôles chacun, au plafond. **Troisième version (10 h 33)** : B n'invoque plus ni crabe ni cheval (les chevaux de D sont dans deux pôles) ; gerbilles → puces (D a les gerboises), scolytes → grands tétras ; restent les castors d'ANT012 + comme seuls rongeurs de B. Comptes au script : prix sur 5 ou 6 cartes dans les 24 pôles ; chaque appoint dans 3 pôles de B au plus ; dégâts ciblés au plafond nulle part au-delà de 4 (5 en Donjon).

## Gestes, objets et images des Ressources (B)

| Ressource | Geste | Objet | Image |
|---|---|---|---|
| RES303 Marais, japonaise féodale | ratisser la vase au panier-râteau à long manche | petites palourdes d'eau douce (shijimi) | des barques plates en ligne, les manches qui ratissent ensemble |
| RES204 Canyon, perse | inciser les tiges d'astragale et décoller les rubans de gomme | gomme adragante | des rubans blancs enroulés sur chaque touffe |
| RES176 Savane, égyptienne | cueillir les folioles de séné et les sécher à l'ombre | séné | des nattes de feuilles vertes sous des abris de palmes |
| RES113 Delta, gothique | arracher à la main gantée les lamproies collées aux pierres d'un barrage | lamproies | les pierres du gué hérissées de bouches |
| RES371 Oasis, mésopotamienne | arracher les racines de réglisse et les fendre | réglisse | des fagots de racines jaunes |
| RES383 Forêt boréale, éthiopienne | pincer les bourgeons de pin au printemps pour un sirop | bourgeons de pin | les branches basses toutes étêtées |
| RES323 Canyon, inuit | fendre les ombles et les étendre sur les dalles chaudes du canyon | ombles séchés | des dalles rouges couvertes de poissons ouverts |
| RES377 Falaise côtière, mésopotamienne | cueillir l'hysope sauvage dans les fentes de la falaise, à la faucille courte | hysope | des touffes et des cueilleuses à chaque palier de la paroi |
| RES120 Archipel, maya | déterrer la nuit les œufs de tortue sur les plages des îlots | œufs de tortue | des rangées de trous dans le sable au matin |
| RES340 Archipel, slave | couper l'osier depuis la barque et le peler au pince-osier | osier pelé | des bottes de baguettes blanches contre chaque isba |
| RES330 Steppe, mongole | baratter le lait de jument au bâton, chaque visiteur à son tour | airag | un bâton qui bat dans chaque yourte |
| RES264 Oasis, perse | cueillir les jujubes à l'échelle à un seul montant et les sécher sur les terrasses | jujubes | les terrasses couvertes de fruits qui rident |
| RES188 Toundra, zouloue | cueillir les houppes de linaigrette pour bourrer les nattes | linaigrette | la toundra blanche de houppes |
| RES221 Archipel, mésopotamienne | plonger vers les sources d'eau douce du fond de la mer et la remonter | eau douce | des plongeurs autour d'une tache d'eau plus claire |

Aucun gabarit « seigneur qui prélève », ni « nom, compte, anomalie » ; « le produit part vers… » une fois au plus. Aucun produit tinctorial, aucun geste de gaule ni de branches battues au-dessus d'une toile, aucun récipient comme objet principal. Retirés avant d'écrire parce que déjà employés dans les lots 1 à 6 ou pris par A, C ou D : pistaches (lot 6), éperlans sur baguettes (A RES004 enfile les harengs), albâtre fendu au coin (A RES039 fend le tuf au coin), câpres, spondyles, bitume, stéatite, pollinisation des dattiers, traite des rennes, morilles, fil de lotus, salpêtre, figues, roses, escargots, foin, jonc, grenade, peigne, bouleau.
