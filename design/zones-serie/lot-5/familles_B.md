# Lot 5 : carte des familles, conteur B (l'Explorateur marchand)

Première version à 05 h 47, avant les cartes. **Mise à jour à 06 h 00**, après lecture de familles_C.md (05 h 43) et familles_D.md (05 h 45), écrits avant le mien : B change ce qui entrait en collision avec eux (voir « Collisions avec C et D »), sans toucher aux comptes du lot sur lesquels A s'est appuyé. **Mise à jour à la remise (06 h 20)**, après relecture de familles_A (06 h 16), familles_C (06 h 08), familles_D (06 h 09) et des noms de conteur_A/C/D.md : familles principales inchangées ; appoints recomptés au script sur les cartes remises ; nombres et trois noms changés (voir « À la remise »). Format : pôle → famille principale (5 cartes ou plus, palier 7 compris), appoint, crochet (condition `si`, sur 2 à 4 cartes).

Règles que B s'impose : chaque famille plafonnée (hésitation, coups au hasard, vol de vie, écho, enchaînement) **une seule fois chez B** ; les autres familles 2 pôles au plus chez B ; aucun crochet sur 5 cartes ou plus ; aucune famille d'appoint dans plus de 3 pôles de B (les 3 invocations obligatoires des Antres ne sont pas un appoint choisi, elles sont dues au type) ; « tous » sur 3 cartes sur 7 au plus, donc jamais les dégâts à tous en famille principale ; récupération sur 4 cartes au plus ; pas de `defausseCommune` ; `"cible":1` et « la cible » dès qu'une opération ou une condition vise un ennemi précis. B ne prend **ni écho ni enchaînement** : il laisse ces places aux autres.

## Pôles

| Zone | Pôle | Famille principale | Appoint | Crochet |
|---|---|---|---|---|
| ANT245 (Archipel, grecque, Eau) | Sécheresse − | **Exil** (l'eau que le gouffre avale ne revient pas) | invocations (crabes de source, chauves-souris), gros coups | `blesse` |
| ANT245 | Déluge + | **Invocations** (ce que le gouffre recrache : anguilles, grenouilles, tortues d'eau) | pioche | `bete` |
| ANT147 (Récif, vénitienne, Eau) | Silence − | **Invocations** (les chasseurs embusqués du récif : mérous, rascasses, poulpe) | gros coups, perce-garde (2 cartes), prix en PV | `pietine` (« si elle prépare un coup fort ») |
| ANT147 | Chant + | **Marque** (le banc de courbines qui chante et se trahit) | invocations, pioche | `vulnerable` |
| ANT009 (Jungle, inuit, Sève) | Cauchemar − | **Brûlure** (l'huile des lampes renversées, la rive qui s'éteint) | invocations (jaguar, caïman, engoulevent) | `brule` |
| ANT009 | Rêve + | **Garde du héros** (le cercle des lampes de pierre à savon qui tient toute la nuit) | invocations (singe de nuit, kinkajou, paresseux), soin | `pietine` |
| ANT167 (Oasis, andalouse, Sève) | Sang − | **Riposte** (les lévriers de pure race qui rendent le coup) | invocations (lévriers, 5 cartes : vocation d'Antre), gros coups | `elan` |
| ANT167 | Sève + | **Mana** de Sève (le verger de grenadiers qui boit la source) | invocations (mulet de noria, huppes), soin des alliés (4) | `bete` |
| ANT097 (Haute montagne, vénitienne, Pierre) | Folie − | **Vol de vie** (le vif-argent qui boit le mineur) | invocations (chamois, lagopèdes), dégâts à tous (2 cartes) | `blesse` |
| ANT097 | Raison + | **Soin du héros** (le tour de repos au soleil, le remède) | invocations, affaiblissement | `seul` |
| ASS023 (Îles flottantes, celte, Vent) | Glace − | **Hésitation** (Lois du gel : les îles soudées s'arrêtent ; « tous » sur 2 cartes non consécutives) | affaiblissement (4), garde du héros (4), Lois | `hesite` (« si elle hésitait déjà ») |
| ASS023 | Feu + | **Perce-garde** (le feu des alambics fait céder les chaînes qui tiennent les îles) | brûlure (4), mana de Vent (3), récupération (2) | `cartesJouees` (2 cartes) |
| ASS021 (Steppe, mongole, Vent) | Rouille − | **Garde du héros** (la cuirasse rouillée qui tient encore) | affaiblissement (4), pioche (3), riposte (2) | `garde` |
| ASS021 | Or + | **Garde des alliés** (l'or paie l'escorte) | invocations (escortes), mana | `vol` |
| ASS005 (Mangrove, gothique, Eau) | Ombre − | **Défausse comme carburant** (la cargaison jetée à l'eau à l'approche de la ronde, repêchée la nuit : `prixDefausse` sur 5 cartes) | récupération (3 cartes), pioche | `defausseAPrix` (« ce tour ») |
| ASS005 | Lumière + | **Soin des alliés** (la halle éclairée où l'on panse) | marque | `soinEnnemi` |
| DON123 (Volcan, andalouse, Feu) | Corruption − | **Affaiblissement** (l'alun coupé de terre, qui ne mord plus) | marque | `cibleGarde` |
| DON123 | Pureté + | **Brûlure** (les fours de calcination de l'alun) | garde du héros | `elan` |
| DON086 (Lande, andalouse, Vent) | Tyrannie − | **Riposte** (le seigneur qui rend chaque coup au centuple) | perce-garde, exil | `pietine` |
| DON086 | Liberté + | **Coups au hasard** (les étincelles des charbonnières libres) | soin du héros | `seul` |
| DON012 (Volcan, aztèque, Feu) | Pierre − | **Affaiblissement** (le tezontle qui écrase) | riposte | `vol` |
| DON012 | Cristal + | **Perce-garde** (la pointe de cristal de roche) | marque | `elan` |
| CIT031 (Cavernes cristallines, éthiopienne, Pierre) | Abysse − | **Exil** (ce qui tombe au puits ne remonte pas) | garde du héros | `seul` |
| CIT031 | Ciel + | **Garde des alliés** (le commandement des terrasses) | invocations (troupes), soin | `bete` |

**Comptes de B (familles principales)** : exil 2, perce-garde 2 (ASS023 +, DON012 +), brûlure 2, garde du héros 2, riposte 2, affaiblissement 2, garde des alliés 2, invocations 2 (ANT245 +, ANT147 −) ; une fois : marque, mana, vol de vie, soin du héros, hésitation, défausse-carburant, soin des alliés, coups au hasard. Ni écho, ni enchaînement, ni pioche, ni dégâts à tous en principal. Les comptes du lot qu'A a relevés à 05 h 52 ne bougent pas (perce-garde toujours 6, B y garde 2 pôles).
**Familles plafonnées prises par B** : hésitation 1 (ASS023 −), coups au hasard 1 (DON086 +), vol de vie 1 (ANT097 −). Il reste donc **une** place d'hésitation, **une** de hasard, **une** de vol de vie et **deux** d'écho et d'enchaînement pour A, C et D.
**Appoints (pôles où la famille tient 2 à 4 cartes, palier 7 et réveil compris, hors gros coups et invocations des Antres ; compté au script sur les cartes remises)** : pioche 3 (ANT245 +, ANT147 +, ASS021 −), garde du héros 3 (ASS023 −, DON123 +, CIT031 −), perce-garde 3 (ANT147 −, ASS005 −, DON086 −), affaiblissement 3 (ANT097 +, ASS021 −, ASS023 −), marque 3 (ASS005 +, DON123 −, DON012 +), soin du héros 3 (ANT245 −, ANT009 +, DON086 +), soin des alliés 3 (ANT245 +, ANT167 +, CIT031 +), dégâts à tous 3 (ANT245 +, ANT097 −, ASS023 +), garde des alliés 2, brûlure 2, mana 2, récupération 2, riposte 2, invocations hors Antres 2, hésitation 1. Ailleurs, ces familles ne tiennent qu'une carte. La pioche est en plus principale en ASS005 − (6 cartes), où elle fait tourner la défausse payée.
**Crochets** : `bete` 3 pôles, `elan` 3, `seul` 3, `pietine` 3, `blesse` 2, `cibleGarde` 1, `vol` 2, `vulnerable`, `brule`, `hesite`, `garde`, `cartesJouees`, `defausseAPrix`, `soinEnnemi` 1 chacun ; toujours de 2 à 4 cartes.

## Collisions avec C et D (leurs cartes des familles sont plus anciennes) : ce que B a changé

- **Silence / Chant** (C DON103 : perce-garde « le coup qu'on n'entend pas » / brûlure) : B abandonne la perce-garde du Silence. ANT147 − devient **invocations** (les chasseurs embusqués), crochet `pietine` ; la perce-garde n'y reste que sur 2 cartes. Le Chant de B garde la marque (C : brûlure).
- **Glace / Feu** (C ANT173 : garde des alliés / pioche) : B abandonne la pioche du Feu. ASS023 + devient **perce-garde** (le feu fait céder les chaînes), avec la brûlure en appoint et la pioche sur une carte au plus. La Glace de B garde l'hésitation (C : garde des alliés).
- **Rouille / Or** (C ASS063 : coups au hasard / garde du héros) : B garde garde du héros / garde des alliés, qui diffèrent pôle à pôle de C ; l'image (le fer d'une armée laissé sur la steppe, les escortes payées) n'a rien des spores et de la châsse de C.
- **Folie / Raison** (C ANT101 : marque / riposte) : B garde vol de vie / soin du héros.
- **Abysse / Ciel** (D DON110 : garde du héros / mana) : B garde exil / garde des alliés ; la garde du héros n'est qu'un appoint de l'Abysse (3 cartes).
- **Image prise par C dans une autre zone de jungle** (ANT236 Sommeil / Éveil : le somme dans les hamacs, les piqûres des fourmis) : ANT009 quitte les hamacs et les guêpes. Nouvelle image : la foire de nuit des lampes de pierre à savon, l'huile de noix vendue à la lampe-nuit, le jaguar hors du cercle. Familles inchangées (brûlure : l'huile renversée ; garde du héros : le cercle des lampes).
- **Objets de Ressources d'A et de D** : la colle de vessies natatoires (A RES200) sort d'ANT147 (le produit devient la poutargue, les œufs salés des courbines) ; les œufs (D RES198), le sel (D RES274), les draps tendus sous les plantes (D RES118), le poisson séché (A RES174), la résine qu'on fait couler au feu (A RES041) et les algues séchées (D RES168) sortent de mes Ressources (voir le tableau).

## Couples de pôles partagés dans le lot 5, et pôles déjà écrits (cartes relues, lots 1 à 4)

B écrit sa carte le premier ; les autres conteurs du même couple prennent une autre famille principale sur les deux pôles. Familles déjà prises aux lots 1 à 4 par le même mot, que B évite :
- **Sécheresse / Déluge** (aussi A, ASS017) : Sécheresse a déjà fait affaiblissement (ASS040, CIT019), brûlure (ANT070), gros coups et vol de vie (DON002), mana et marque (ASS159) ; Déluge a fait dégâts à tous (ASS040, DON002, ASS159), hésitation (ANT070), garde des alliés (CIT019). B : exil / invocations. Image : pas de citerne (CIT019 et DON010 l'ont), mais les gouffres où la mer entre et fait tourner des moulins.
- **Silence / Chant** (aussi C, DON103) : Silence a fait hésitation (ASS177) et affaiblissement (ASS121) ; Chant a fait pioche, écho, alliés (ASS177) et riposte (ASS121). B : invocations / marque (la perce-garde est laissée à C). Image : pas de loutre ni de bête qui rabat le poisson (RES103), mais un banc de courbines qui chante sous la coque et qu'on écoute à l'oreille.
- **Cauchemar / Rêve** (aussi A, ASS057) : Cauchemar a fait riposte (CIT028), marque (ASS076), gros coups (DON068), invocations et perce-garde (ANT144), dégâts à tous (ANT013), vol de vie (DON041) ; Rêve a fait garde et soin des alliés (CIT028, DON041), hésitation et écho (ASS076), perce-garde (DON068), enchaînement (ANT144), pioche et récupération (ANT013). B : brûlure / garde du héros.
- **Sang / Sève** (aussi A, DON047) : Sang a fait gros coups ciblés (6 fois), vol de vie, marque (ANT121), affaiblissement et pioche (ASS176) ; Sève a fait affaiblissement-riposte, hésitation (DON022), récupération (ASS176), alliés (CIT026), soin (ANT121), brûlure (ASS103). B : riposte / mana. Image : pas de palmier saigné (RES013), mais la source disputée entre un haras et un verger.
- **Folie / Raison** (aussi C, ANT101) : Folie a fait brûlure-hésitation, hasard (2), dégâts à tous, mana-pioche, invocations, écho, gros coups sur `blesse` ; Raison a fait gros coups, perce-garde, marque (2), mana, affaiblissement, pioche. B : vol de vie / soin du héros.
- **Glace / Feu** (aussi C, ANT173) : Glace a fait garde, marque et perce-garde, riposte ; Feu a fait brûlure (2), dégâts à tous, invocations. B : hésitation / perce-garde (la pioche est laissée à C). Image : pas de varech brûlé (ANT040), pas de crannog (CIT028).
- **Rouille / Or** (aussi C, ASS063) : Rouille a fait marque, brûlure (2), affaiblissement (2), perce-garde ; Or a fait pioche (3), mana, invocations, récupération, gros coups. B : garde du héros / garde des alliés. Image : pas d'or lavé à la batée (ANT148), pas de tablette de relais (ANT001).
- **Ombre / Lumière** (aussi A, CIT008) : Ombre a fait hésitation, gros coups, riposte ; Lumière a fait brûlure, pioche, riposte, dégâts à tous. B : défausse-carburant / soin des alliés. Image : pas de cire ni de cierges (ASS096).
- **Corruption / Pureté** : Corruption a fait garde, brûlure, vol de vie, défausse (B, ASS048), perce-garde ; Pureté a fait garde-perce-garde, duel `seul`, enchaînement, récupération, soin-pioche. B : affaiblissement / brûlure. Image : l'alun, pas le soufre (DON030, RES365).
- **Tyrannie / Liberté** : Tyrannie a fait affaiblissement, gros coups-exil ; Liberté a fait invocations-récupération, dégâts à tous. B : riposte / hasard.
- **Pierre / Cristal** : Pierre a fait dégâts à tous (B, DON115), garde des alliés, garde du héros ; Cristal a fait marque (B), invocations, écho-pioche. B : affaiblissement / perce-garde. Image : le tezontle rouge et le cristal de roche, pas l'obsidienne (RES058, RES092).
- **Abysse / Ciel** (aussi D, DON110) : Abysse a fait affaiblissement (ANT045), marque (ANT161) ; Ciel a fait hasard (ANT045), gros coups sur `vol` (ANT161). B : exil / garde des alliés. Image : pas d'amba ni de corde (CIT017, B, lot 4).

## Nombres précis de B (récits, `pal`, noms, ambiances)

Liste finale, un par zone : soixante-trois (ANT245), cinquante (ANT147), vingt-sept (ANT009), sept cents (ANT167), dix-sept (ANT097), quatorze (ASS023), deux cent quatre-vingts (ASS021), seize cents (ASS005), soixante-dix (DON123), vingt-neuf (DON086), treize (DON012), cent vingt (CIT031). Aucun « trente-X », pas de « quarante ».

Changés à la remise : cette ligne réservait d'abord quatorze, treize, dix-sept, seize et vingt-quatre. Pendant l'écriture des cartes, B en avait changé une partie (quinze, vingt et une, douze…) sans mettre la ligne à jour, et D, qui lui laissait les nombres d'origine, a pris ensuite quinze et vingt et une. B laisse ces deux-là à D, reprend les nombres que D lui a cédés, et sort aussi douze (dans « six cent douze » de D), neuf cents (« neuf » de C) et huit (dans « cent dix-huit » de D).

## Ressources de B : geste, objet, image (un de chaque par Ressource)

| Ressource | Geste | Objet | Image |
|---|---|---|---|
| RES220 Cavernes cristallines, maya | racler le lait de lune des parois à la spatule d'os | lait de lune (pâte blanche de grotte) | parois crémeuses striées de raclures |
| RES259 Fjord, maya | relever les cordes à moules sous la glace mince | moules de corde | lignes de flotteurs de bois en travers du fjord |
| RES032 Désert de sel, nordique | traire les rennes venus lécher la croûte, et cailler le lait | fromage de renne | enclos de perches plantés sur le blanc, rennes tête basse |
| RES339 Falaise côtière, perse | cueillir les boutons de câprier dans les fissures, depuis des marches taillées | câpres | buissons de câpriers accrochés à la paroi, marches creusées dans la roche |
| RES134 Désert de sable, celte | fondre le sable en perles au four de dune | perles de verre bleu | chapelets séchant sur des bâtons plantés dans la dune |
| RES332 Glacier, gothique | tendre les peaux de vélin sur des cadres pour les blanchir à la neige | vélin | cadres de peaux blanches alignés sur la glace |
| RES112 Glacier, éthiopienne | enfouir le beurre épicé roulé dans des feuilles d'ensète | beurre épicé | rangées de tertres de neige marqués d'un bâton |
| RES245 Lande, gothique | cueillir les baies de genièvre une à une, la main dans un gant de cuir | baies de genièvre | cueilleurs gantés penchés dans les buissons bleus |
| RES269 Récif, moghole | scier les conques en bracelets | bracelets de conque | anneaux blancs enfilés sur des perches |
| RES372 Fjord, slave | rouir le lin dans l'eau du fjord et le teiller sur la grève | filasse de lin | bottes de lin dressées en rangs sur la grève |
| RES098 Steppe, andalouse | cueillir les fleurs de chardon pour cailler le lait | pistils de chardon (présure végétale) | chardons violets, fleurs étalées sur des toiles |
| RES315 Récif, inca | gratter à la pelle le guano des îlots du récif | guano | îlots blanchis, nuées d'oiseaux, sacs de jonc |
| RES015 Cité en ruines, grecque | dégager les agrafes de plomb des joints de colonnes | plomb de réemploi | tambours de colonnes ouverts aux joints, petits lingots |
| RES192 Récif, slave | ramasser les oursins à la fourche dans les flaques du récif | oursins | tas d'oursins violets sur les rochers découverts |
| RES049 Volcan, égyptienne | tailler des meules dans le basalte de la coulée | meules de basalte | meules rondes alignées sur la coulée noire |
| RES126 Toundra, byzantine | dégager les défenses de mammouth du sol gelé | ivoire fossile | défenses courbes qui sortent de la mousse |

Objets relus contre familles_A.md et familles_D.md (aucun doublon d'objet, de geste ni d'image). Récipients : aucun récipient nommé comme objet principal. Produits tinctoriaux : aucun. Premiers mots des noms : tous différents (liste à la remise).

## À la remise (06 h 20)

- **Noms changés** après lecture des noms de C et d'A : « Le Chapitre de Gerbersiel » devient **La Hanse de Gerbersiel** (C : « Le Chapitre aux Clavaires de Fichtenau »), « Le Kurultai de Zev-Tal » devient **La Yourte des Khans de Zev-Tal** (C : « Le Kurultai de Nogoon-Ordo », A : « Le Kurultai d'Üür-Shalbag » ; « Khural » est déjà pris au lot 3), « La Source aux Lévriers d'Aynalgar » devient **La Fontaine aux Lévriers d'Aynalgar** (C : « Cathair Ceirte, la Source aux Chiffons »).
- **Appoints réflexes retirés** : la pioche d'appoint revenait dans 14 pôles, la garde du héros et la perce-garde dans 6 ; le soin du héros, la garde du héros et l'affaiblissement dépassaient 4 cartes dans un troisième pôle. Les cartes en trop ont reçu des chiffres de leur famille principale à la place (budgets revérifiés).
- **Proches, signalés au critique** : le vélin tendu sur cadres (B RES332, écrit dès 05 h 47) et les peaux de zibeline sur cadres d'A (RES301) ; les perles de verre (B RES134) et les grains de chapelet en noyaux de dattes (C RES009) ; un paresseux dans ANT009 + (C ANT236 a tout un pôle de paresseux).
