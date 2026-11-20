# Lot 3 : conteur D (le Lovecraftien)

Sept zones à cartes (fiche + 14 cartes) et douze Ressources (fiche légère). Format : `CONSIGNES.md` (avec les leçons des lots 1 et 2) et `cartes-2.2/consignes-cartes.md`, sections 4, 6 et 7. Nombres fixes ; budget du palier n = (4 + 6 × coût) × (1 + 0,25 × (n − 1)), tolérance ±15 %.

Table de budget (leçon 5 du lot 2, appliquée telle que proposée) : « alliés » ×1,5 sur la garde et le soin ; « tous » ×2,2 partout (dégâts, brûlure, hésitation, affaiblissement, marque, perce-garde) ; un effet sous `si` compte pour moitié ; `ignoreGarde` = 3 ; `volVie` = moitié des dégâts de la carte ; `exil` = prix de 4 (la carte ne revient plus du combat) ; `ennemiSoin` n = 2,2n ; `ennemiGarde` n = 2n ; `prixBete` n = n. Chaque budget est calculé par script, et `"cible":1` est posé dès qu'une opération (même dans un `si` ou un réveil) vise la cible.

Recettes de récit (profil D), aucune reprise du lot 2 : règlement (Veal Ambel), croyance qui se vérifie (Esithunzini), lettre au Conseil (Vedrana), procès-verbal de séance (Ktenaia), arrivée (Ahuitlapan), temps profond (Ak'ab Ha'), journal aux heures canoniales (Halmgard ; aucune numérotation de jours). Aucun récit tronqué.

## Familles d'effets (leçon 4 du lot 1, leçon 2 du lot 2)

| Zone | Pôle − : famille principale | Pôle + : famille principale |
|---|---|---|
| ANT013 La Chaussée des Dormeurs de Veal Ambel | Cauchemar : bêtes voraces à forte attaque + dégâts à tous (prix : bête blessée, PV) | Rêve : pioche + récupération + bêtes de rêve, combo « une bête en jeu » (prix : défausse, soin ennemi) |
| ANT127 Les Îles-Kraals d'Esithunzini | Ombre : vol de vie + bêtes d'ombre, combo « elle s'apprête à voler » (prix : PV) | Lumière : riposte + garde des alliés + bêtes claires (prix : garde ennemie, défausse) |
| ANT105 Les Fornaci de Vedrana | Nuit : affaiblissement de tous + bêtes nocturnes + garde du héros (prix : PV) | Aurore : perce-garde (garde brisée, garde ignorée) + combo « la cible a de la garde » + bêtes de verre (prix : défausse) |
| ASS096 La Synaxe des Cires de Ktenaia | Peste : lois de contagion : dégâts à tous et garde brisée, cartes brûlées après usage (exil) (prix : exil, PV) | Guérison : écho (la thériaque redouble le remède suivant) + soin et garde du héros, combo « la Garde était déjà levée » (prix : soin ennemi) |
| ASS159 Le Conseil des Jarres d'Ahuitlapan | Sécheresse : lois de rationnement : mana Vent mis de côté + marque Vulnérable, combo « un ennemi s'apprête à se soigner » (prix : défausse, PV) | Déluge : lois de crue : hésitation de tous + dégâts à tous (prix : soin ennemi). Seul pôle d'hésitation de D dans ce lot. |
| DON104 Les Gradins noyés d'Ak'ab Ha' | Vide : un seul gros coup sur une cible (souvent sans garde), combos « un seul ennemi » et « défaussé en prix ce tour » (prix : défausse) | Étoiles : coups au hasard en averse + pioche, combo « deuxième carte jouée ce tour » (prix : PV). Seul pôle de coups au hasard de D dans ce lot. |
| CIT030 Halmgard, la Citadelle-Horloge | Chaos : feux de steppe : brûlure (souvent de tous), combo « la cible brûlait déjà », garde du héros (prix : PV) | Ordre : garnison au pas : garde des alliés + soldats invoqués, combo « troisième carte jouée ce tour » (prix : garde ennemie) |

Plafonds du lot (leçon 2 du lot 2) : un seul pôle d'hésitation chez D (ASS159 Déluge) et un seul pôle de coups au hasard (DON104 Étoiles). Aucune famille principale n'est partagée entre mes quatorze pôles.

## Mots de pôle déjà en jeu : cartes relues avant d'écrire

- **Cauchemar / Rêve** (CIT028 de B : riposte / garde, soin, bloqueurs dormants ; ASS076 de C : marques et intentions / hésitation, écho). ANT013 prend les bêtes voraces et les dégâts à tous contre la pioche et la reprise : ni riposte, ni marque, ni hésitation, ni écho.
- **Ombre / Lumière** (ANT080 de C : bêtes, hésitation, garde ennemie / brûlure, marque). ANT127 prend le vol de vie contre la riposte et la garde du camp.
- **Nuit / Aurore** (ASS148, mon lot 2 : pioche et défausse en prix / brûlure et marque). ANT105 prend l'affaiblissement de tous et les bêtes nocturnes contre la perce-garde.
- **Peste / Guérison** (DON101, ASS115, ANT170, ASS168, DON042). Peste : ni brûlure, ni marque, ni affaiblissement, ni coups au hasard, ni condition `seul` : des lois qui brûlent leurs propres cartes (exil). Guérison : ni pioche dominante, ni bêtes, ni condition `blesse` : l'écho, qui double la carte suivante, avec la condition `garde`.
- **Sécheresse / Déluge** (ASS040 de A, Assemblée : affaiblissement et pioche / dégâts, pioche, récupération, écho ; ANT070 : brûlure / soin ; CIT019, mon lot 2 : garde du héros et affaiblissement / soldats). ASS159 prend la réserve de mana et la marque, avec la condition `soinEnnemi`, contre l'hésitation de masse.
- **Vide / Étoiles** (ANT137, mon lot 1 : bêtes, perce-garde et prix en bêtes / bêtes, brûlure, pioche). DON104 n'a aucune bête : un coup unique énorme contre une averse au hasard.
- **Chaos / Ordre** (CIT016 de A, Citadelle : coups, riposte / garde, affaiblissement, bloqueurs ; ASS166 ; ASS128 : mise de PV / intentions ennemies et riposte). CIT030 prend les feux de steppe (brûlure, condition `brule`) contre la cadence (condition `troisCartes`, garde du camp, soldats).

## Résonances des formes du palier 7

| Zone | Pôle − : pose / réveille | Pôle + : pose / réveille |
|---|---|---|
| ANT013 La Chaussée des Dormeurs de Veal Ambel | Sang / Racine | Racine / Sceau |
| ANT127 Les Îles-Kraals d'Esithunzini | Sang / Abîme | Racine / Braise |
| ANT105 Les Fornaci de Vedrana | Givre / Abîme | Braise / Givre |
| ASS096 La Synaxe des Cires de Ktenaia | Abîme / Braise | Sceau / Sang |
| ASS159 Le Conseil des Jarres d'Ahuitlapan | Sceau / Braise | Givre / Sceau |
| DON104 Les Gradins noyés d'Ak'ab Ha' | Abîme / Racine | Braise / Abîme |
| CIT030 Halmgard, la Citadelle-Horloge | Braise / Sang | Sceau / Givre |

Chaque résonance est posée au moins deux fois et réveillée au moins deux fois dans mes sept zones (Racine : posée 2, réveillée 2). Chaînes de trois possibles, par exemple : Vedrana Aurore pose Braise → Ktenaia Peste la réveille et pose Abîme → Esithunzini Ombre le réveille et pose Sang → Ktenaia Guérison le réveille.

Prix : 5 cartes à prix sur 7 pour chaque pôle de chaque zone (35 au pôle −, 35 au pôle +). Boost : aucun. Mana : jamais plus de 2 par opération. Invocations des Antres : 5 et 5 (Veal Ambel), 5 et 4 (Esithunzini), 5 et 5 (Vedrana). Toutes les conditions `si` sont connues du moteur (`bete`, `vol`, `garde`, `cibleGarde`, `soinEnnemi`, `vulnerable`, `hesite`, `seul`, `defausseAPrix`, `cartesJouees`, `troisCartes`, `brule`), et chacune se lit avant toute opération de la carte qui la rendrait vraie (vérifié au script).

## ±7 : recettes tournantes (leçon 3 du lot 1, leçon 3 du lot 2)

- −7 : foule figée sur un dos d'écailles (Veal Ambel), ombres sans corps (Esithunzini), extinction (Vedrana), cendre et sable vitrifié (Ktenaia), échouage (Ahuitlapan), absence de reflet (Ak'ab Ha'), incendie et désordre (Halmgard).
- +7 : lévitation et monde inversé (Veal Ambel), effacement par l'éblouissement (Esithunzini), foule de verre en marche (Vedrana), lieu vide et rangé, la marmite qui bout pour personne (Ktenaia), ciel devenu lac (Ahuitlapan), pluie d'étoiles (Ak'ab Ha'), cadence universelle (Halmgard).
- Aucun +7 peint ou teint, aucune végétation qui avale un bâtiment, aucun « sang-de-bœuf », aucun mot interdit (vérifié au script). Les nombres précis des récits et ambiances (onze, douze, cent, soixante et onze, quatre cents) n'apparaissent chacun que dans une zone.

## Gestes des Ressources (leçon 5 du lot 1, leçon 4 du lot 2 : geste et image)

lier le papyrus en bottes, puis en barques effilées (RES359) · enfoncer le bras nu dans les fentes de la roche pour en tirer des cristaux (RES064) · retourner les blocs de corail mort à marée basse pour les concombres de mer (RES362) · pêcher à la ligne lancée du haut de la falaise, portée par le vent (RES317) · détacher les moules au bâton ferré entre deux vagues (RES140) · pêcher au cormoran, un anneau de paille au cou de l'oiseau (RES088) · poser sa pierre sur le cairn du col en passant (RES131) · glacer les patins du traîneau à l'eau soufflée, lissée à la peau d'ours (RES380) · étaler les pommes de terre au gel de la nuit et les retourner à la perche à l'aube (RES059) · mener un éléphant laineux qui tire les grumes dans la neige (RES143) · porter des jarres d'eau de fonte à la sangle frontale (RES082) · peigner la camarine avec un peigne en os (RES252).

Structures de chute : aucune Ressource sur « un nom, un compte chiffré, puis cette année une anomalie ». Trois finissent sur une croyance rapportée (RES359, RES362, RES082), deux sur un détail qui inquiète (RES064, RES131), les sept autres sur un geste ou une image (RES140, RES088, RES380, RES059, RES143, RES317, RES252).

## Notes pour le critique

- **Plafonds du lot** : j'ai pris un pôle d'hésitation (ASS159 Déluge) et un pôle de coups au hasard (DON104 Étoiles). À croiser avec A, B et C : s'ils en prennent deux chacun, le plafond saute.
- **ASS096 Peste et `exil`** : quatre cartes sur sept (−1, −2, −4, −5) et la forme ultime sont exilées après usage ; je compte l'exil comme un prix de 4. La forme ultime exilée ne sert qu'une fois par combat : est-ce trop dur pour un −7 ? Le pôle Guérison n'a aucune carte de dégâts : il gagne par l'écho (la carte suivante doublée).
- **CIT030 Ordre et `troisCartes`** : vrai si la carte jouée est au moins la troisième du tour (le moteur compte la carte en cours, `jouer` incrémente `nJoues` avant l'effet). Les Étoiles de DON104 utilisent `cartesJouees` (au moins la deuxième). Les deux conditions sont dans le moteur mais peu employées jusqu'ici : à regarder pour la lisibilité.
- **ASS159 Sécheresse et `soinEnnemi`** : vrai si un ennemi vivant a l'intention de se soigner. Combo rare, donc je ne l'ai mis que sur deux cartes et compté pour moitié.
- **ANT105 Aurore** : `ignoreGarde` met la garde de la cible à 0 au premier coup ; le `si cibleGarde` se lit avant tout dégât de la carte, donc il reste un vrai test.
- **ANT127 Ombre** : la condition `vol` (« si elle s'apprête à voler ») rejoue l'idée des îles ; elle était déjà dans ANT161 Ciel et ASS128 Ordre, mais ici elle n'est qu'un bonus sur trois cartes.

---

## La Chaussée des Dormeurs de Veal Ambel (ANT013 · Antre · Pierre)

```json
{
 "fiche": "ANT013",
 "nom": "La Chaussée des Dormeurs de Veal Ambel",
 "recit": "Règles de l'achar Mao Sophal pour qui vient dormir sur le sel de Veal Ambel. Couchez-vous au pied de la chaussée des nâgas, la tête vers le nord. Ne dormez jamais sur une fissure. La bête dont vous avez rêvé, dites-la-moi au réveil : je la taille dans le sel et je la pose sur la balustrade, avec les autres. Ne cherchez pas où mène la chaussée. Si, au matin, des traces partent du sel jusqu'à votre natte, ne les suivez pas : elles ne s'en vont pas, elles arrivent.",
 "pal": [
  "La plaine s'est fendue en écailles larges comme des portes ; les dormeurs s'y tiennent debout, les yeux ouverts, et la balustrade des nâgas respire.",
  "Les fissures gagnent la chaussée ; les bêtes de sel de la balustrade ont tourné la tête, et des traces fraîches mènent jusqu'aux nattes vides.",
  "Plaine de sel blanc à perte de vue, chaussée khmère bordée d'une balustrade de nâgas, nattes de dormeurs, bêtes taillées dans le sel.",
  "Les dormeurs sourient ; des cerfs pâles et des oies broutent le sel autour des nattes, et la chaussée se reflète dans une fine pellicule d'eau.",
  "Les dormeurs flottent à hauteur d'homme au-dessus d'un miroir sans fin ; dans le reflet, les bêtes de leurs rêves marchent la tête en bas."
 ],
 "pm": "Cauchemar",
 "pp": "Rêve"
}
```

### Pôle − Cauchemar

Progression : le crabe de saumure, la fissure sous la natte, le crocodile aux yeux cousus, la balustrade qui respire, le makara qui quitte son socle, les traces qui arrivent, puis la plaine entière se révèle un dos d'écailles. Style : des bêtes lourdes qui frappent fort et se dévorent entre elles (le prix blesse la plus faible), et une peur qui frappe tous les ennemis à la fois.

```json
[
{"id": "ANT013-moins-1", "zone": "ANT013", "pole": "-", "palier": 1, "nom": "Le crabe de saumure", "cout": 1, "cible": 0, "effet": "Un crabe de saumure sort d'une fissure : 8 PV, frappe 3. 1 dégât à tous les ennemis.", "ops": [["invoque", "Crabe de saumure", 8, 3], ["deg", "tous", 1]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts"], "ambiance": "Le crabe de saumure de Veal Ambel n'a jamais vu la mer ; il en rêve, et pince ce qui dort.", "budget": "10,7 (cible 10 ; vérifié)"},
{"id": "ANT013-moins-2", "zone": "ANT013", "pole": "-", "palier": 2, "nom": "La fissure sous la natte", "cout": 1, "cible": 0, "effet": "4 dégâts à tous les ennemis. Si une bête est en jeu : 3 dégâts à tous de plus.", "ops": [["deg", "tous", 4], ["si", "bete", [["deg", "tous", 3]]]], "tags": ["Antre", "Pierre", "Pôle −", "Dégâts", "Condition"], "ambiance": "Mao Sophal interdit de dormir sur une fissure ; ce matin, la fissure est venue d'elle-même sous la natte d'un pèlerin.", "budget": "12,1 (cible 12,5 ; vérifié)"},
{"id": "ANT013-moins-3", "zone": "ANT013", "pole": "-", "palier": 3, "nom": "Le crocodile aux yeux cousus", "cout": 1, "cible": 0, "effet": "Un crocodile aux yeux cousus rampe hors du rêve : 14 PV, frappe 5. 2 dégâts à tous les ennemis. Le héros perd 3 PV.", "ops": [["invoque", "Crocodile aux yeux cousus", 14, 5], ["deg", "tous", 2], ["prixPV", 3]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Un pèlerin a rêvé d'un crocodile aux paupières cousues de crin ; l'achar l'a taillé, puis lui a recousu les yeux.", "budget": "15,9 (cible 15 ; vérifié)"},
{"id": "ANT013-moins-4", "zone": "ANT013", "pole": "-", "palier": 4, "nom": "La balustrade qui respire", "cout": 2, "cible": 0, "effet": "La garde de tous les ennemis tombe ; 9 dégâts à tous. Si une bête est en jeu : 4 dégâts à tous de plus. Votre bête la plus faible perd 3 PV.", "ops": [["briseGarde", "tous"], ["deg", "tous", 9], ["si", "bete", [["deg", "tous", 4]]], ["prixBete", 3]], "tags": ["Antre", "Pierre", "Pôle −", "Perce-garde", "Dégâts", "Condition", "Prix"], "ambiance": "Les nâgas de sel de la chaussée se soulèvent et retombent, très lentement, au souffle des dormeurs.", "budget": "27,8 (cible 28 ; vérifié)"},
{"id": "ANT013-moins-5", "zone": "ANT013", "pole": "-", "palier": 5, "nom": "Le makara quitte son socle", "cout": 2, "cible": 0, "effet": "Un makara de sel se dégage de la balustrade : 24 PV, frappe 7. 6 dégâts à tous les ennemis. Votre bête la plus faible perd 4 PV.", "ops": [["invoque", "Makara de sel", 24, 7], ["deg", "tous", 6], ["prixBete", 4]], "tags": ["Antre", "Pierre", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "Mi-crocodile, mi-éléphant, le makara taillé par l'achar a quitté la balustrade, la gueule pleine de sel.", "budget": "31,7 (cible 32 ; vérifié)"},
{"id": "ANT013-moins-6", "zone": "ANT013", "pole": "-", "palier": 6, "nom": "Les traces qui arrivent", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : 4 dégâts à tous. Un rôdeur sans corps suit ses traces jusqu'à vous : 18 PV, frappe 6. 8 dégâts à tous les ennemis. Le héros perd 4 PV.", "ops": [["si", "bete", [["deg", "tous", 4]]], ["invoque", "Rôdeur sans corps", 18, 6], ["deg", "tous", 8], ["prixPV", 4]], "tags": ["Antre", "Pierre", "Pôle −", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Au matin, des traces partent du sel jusqu'à la natte ; Mao Sophal les efface au balai sans les regarder.", "budget": "36 (cible 36 ; vérifié)"},
{"id": "ANT013-moins-7", "zone": "ANT013", "pole": "-", "palier": 7, "nom": "Le Nâga sous la plaine", "cout": 3, "cible": 0, "effet": "La plaine ouvre ses écailles. Le nâga s'en lève : 30 PV, frappe 8. Garde ennemie brisée, 8 dégâts à tous. Votre bête la plus faible perd 5 PV. Pose Sang. Si Racine (consommée) : 10 dégâts à tous, un crabe de saumure (8 PV, frappe 3).", "ops": [["invoque", "Nâga de la plaine", 30, 8], ["briseGarde", "tous"], ["deg", "tous", 8], ["prixBete", 5], ["pose", "Sang"], ["reveil", "Racine", true, [["deg", "tous", 10], ["invoque", "Crabe de saumure", 8, 3]]]], "tags": ["Antre", "Pierre", "Forme ultime −7", "Invocation", "Perce-garde", "Dégâts", "Prix", "Pose Sang", "Réveil Racine"], "ambiance": "La plaine de Veal Ambel n'est qu'un dos d'écailles, et les dormeurs debout dessus n'osent plus fermer les yeux.", "budget": "46,2 (+30,5 si Racine, soit +66 % ; vérifié)"}
]
```

### Pôle + Rêve

Progression : le lapin juge, la pellicule d'eau, l'oie hamsa, le cerf d'or, le même rêve pour tous, l'éléphant blanc, puis les dormeurs flottent. Style : on pioche, on reprend la carte perdue, on garde des bêtes douces en jeu pour piocher plus ; le prix fait lâcher une carte ou soigne l'ennemi.

```json
[
{"id": "ANT013-plus-1", "zone": "ANT013", "pole": "+", "palier": 1, "nom": "Le lapin juge", "cout": 1, "cible": 0, "effet": "Le lapin de lune s'assied près de la natte : 6 PV, frappe 1. Piochez 1 carte. Le héros se soigne de 2.", "ops": [["invoque", "Lapin de lune", 6, 1], ["pioche", 1], ["soin", "heros", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Pioche", "Soin"], "ambiance": "Dans les rêves de Veal Ambel, le lapin juge les querelles des dormeurs, et donne toujours raison au plus petit.", "budget": "10,5 (cible 10 ; vérifié)"},
{"id": "ANT013-plus-2", "zone": "ANT013", "pole": "+", "palier": 2, "nom": "La pellicule d'eau", "cout": 1, "cible": 0, "effet": "Piochez 2 cartes ; reprenez en main la dernière carte de votre défausse. Si une bête est en jeu : piochez 1 de plus.", "ops": [["pioche", 2], ["recup"], ["si", "bete", [["pioche", 1]]]], "tags": ["Antre", "Pierre", "Pôle +", "Pioche", "Récupération", "Condition"], "ambiance": "Au réveil, une fine pellicule d'eau couvre le sel autour des nattes ; elle sèche avant qu'on ait pu y boire.", "budget": "14 (cible 12,5 ; vérifié)"},
{"id": "ANT013-plus-3", "zone": "ANT013", "pole": "+", "palier": 3, "nom": "L'oie hamsa", "cout": 1, "cible": 0, "effet": "Une oie hamsa se pose sur la balustrade : 10 PV, frappe 2. Piochez 1 carte ; reprenez en main la dernière carte de votre défausse. Chaque ennemi se soigne de 1.", "ops": [["invoque", "Oie hamsa", 10, 2], ["pioche", 1], ["recup"], ["ennemiSoin", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Invocation", "Pioche", "Récupération", "Prix"], "ambiance": "L'oie rêvée par les dormeurs de Veal Ambel marche sur le sel sans trace, et chante une langue oubliée.", "budget": "13,8 (cible 15 ; vérifié)"},
{"id": "ANT013-plus-4", "zone": "ANT013", "pole": "+", "palier": 4, "nom": "Le cerf d'or", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : piochez 2 cartes. Un cerf d'or broute le sel : 16 PV, frappe 4. Piochez 2 cartes ; reprenez la dernière carte de votre défausse. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["pioche", 2]]], ["invoque", "Cerf d'or", 16, 4], ["pioche", 2], ["recup"], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Pioche", "Invocation", "Récupération", "Prix"], "ambiance": "Le cerf d'or des rêves broute le sel en cercles autour des nattes, et chaque cercle sent l'herbe mouillée.", "budget": "27 (cible 28 ; vérifié)"},
{"id": "ANT013-plus-5", "zone": "ANT013", "pole": "+", "palier": 5, "nom": "Le même rêve", "cout": 2, "cible": 0, "effet": "Piochez 3 cartes ; reprenez la dernière carte de votre défausse. Si une bête est en jeu : piochez 2 de plus. Vos alliés se soignent de 6 et gagnent 6 de garde. Chaque ennemi se soigne de 2.", "ops": [["pioche", 3], ["recup"], ["si", "bete", [["pioche", 2]]], ["soin", "allies", 6], ["garde", "allies", 6], ["ennemiSoin", 2]], "tags": ["Antre", "Pierre", "Pôle +", "Pioche", "Récupération", "Condition", "Soin", "Garde", "Prix"], "ambiance": "Cette nuit, tous les dormeurs de la chaussée ont fait le même rêve, et se le racontent sans se contredire.", "budget": "31,8 (cible 32 ; vérifié)"},
{"id": "ANT013-plus-6", "zone": "ANT013", "pole": "+", "palier": 6, "nom": "L'éléphant blanc", "cout": 2, "cible": 0, "effet": "Si une bête était déjà en jeu : piochez 2 cartes. Un éléphant blanc se couche en travers de la chaussée : 32 PV, frappe 5. Piochez 2 cartes ; reprenez la dernière carte de votre défausse. Défaussez 1 carte au hasard.", "ops": [["si", "bete", [["pioche", 2]]], ["invoque", "Éléphant blanc", 32, 5], ["pioche", 2], ["recup"], ["prixDefausse", 1]], "tags": ["Antre", "Pierre", "Pôle +", "Condition", "Pioche", "Invocation", "Récupération", "Prix"], "ambiance": "L'éléphant blanc rêvé par l'achar s'agenouille devant chaque natte, et les dormeurs montent sur son dos sans s'éveiller.", "budget": "36,5 (cible 36 ; vérifié)"},
{"id": "ANT013-plus-7", "zone": "ANT013", "pole": "+", "palier": 7, "nom": "Le Miroir des dormeurs", "cout": 3, "cible": 0, "effet": "Les dormeurs flottent sans s'éveiller. Un troupeau rêvé se lève (24 PV, frappe 4) ; piochez 4, reprenez votre dernière défausse ; alliés soignés de 8. Ennemis soignés de 2. Pose Racine. Si Sceau (consommé) : piochez 3, reprenez, alliés +10 de garde.", "ops": [["invoque", "Troupeau rêvé", 24, 4], ["pioche", 4], ["recup"], ["soin", "allies", 8], ["ennemiSoin", 2], ["pose", "Racine"], ["reveil", "Sceau", true, [["pioche", 3], ["recup"], ["garde", "allies", 10]]]], "tags": ["Antre", "Pierre", "Forme ultime +7", "Invocation", "Pioche", "Récupération", "Soin", "Prix", "Pose Racine", "Réveil Sceau"], "ambiance": "Au-dessus du miroir de Veal Ambel, les dormeurs flottent, et leurs bêtes marchent dessous, la tête en bas.", "budget": "45,6 (+28,0 si Sceau, soit +61 % ; vérifié)"}
]
```

---

## Les Îles-Kraals d'Esithunzini (ANT127 · Antre · Vent)

```json
{
 "fiche": "ANT127",
 "nom": "Les Îles-Kraals d'Esithunzini",
 "recit": "Sur les îles qui flottent au-dessus de la plaine d'Esithunzini, les bouviers gardent leurs bêtes dans des kraals d'épines et descendent par des cordes d'écorce. En bas, chaque île pose son ombre sur l'herbe, et le vieux Ntombela compte son troupeau sur l'ombre plutôt que sur l'île : l'ombre, dit-il, ne ment pas. L'été dernier, le vent a poussé l'île de Ntombela vers l'est. Son ombre est restée. Le troupeau d'ombre broute toujours là, et l'herbe meurt dessous, en forme de vaches.",
 "pal": [
  "La plaine entière est sous l'ombre d'îles qui ne sont plus là ; dans le noir, des troupeaux de silhouettes broutent une herbe morte, sans un bruit.",
  "Les ombres des îles traînent derrière elles ; sur les kraals, le bétail ne projette plus d'ombre, et les cordes d'écorce pendent dans du noir.",
  "Îles de terre rouge flottant au-dessus d'une plaine d'herbe, kraals d'épines ronds, cordes d'écorce jusqu'au sol, ombres d'îles sur l'herbe.",
  "Les ombres raccourcissent sous les îles ; le soleil passe à travers la terre rouge, et les bœufs ont le poil si clair qu'on voit leurs veines.",
  "Plus aucune ombre : îles, kraals et bouviers sont si clairs qu'on n'en voit plus les bords, et le bétail blanc broute dans un éblouissement sans contour."
 ],
 "pm": "Ombre",
 "pp": "Lumière"
}
```

### Pôle − Ombre

Progression : la vache de trop, l'ombre en retard, la hyène sans ombre, les cordes dans le noir, le troupeau d'ombre, le vautour qui passe derrière le soleil, puis il ne reste que les ombres. Style : chaque coup boit la vie de la cible au profit du héros, les bêtes d'ombre tiennent la plaine, et l'ombre attrape ce qui vole (les îles de la zone) ; le prix se paie en PV, comme une part donnée au noir.

```json
[
{"id": "ANT127-moins-1", "zone": "ANT127", "pole": "-", "palier": 1, "nom": "La vache de trop", "cout": 1, "cible": 1, "effet": "Une vache d'ombre se détache de l'herbe : 8 PV, frappe 2. 2 dégâts à la cible ; le héros se soigne de la moitié.", "ops": [["invoque", "Vache d'ombre", 8, 2], ["deg", "cible", 2], ["volVie"]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Dégâts", "Vol de vie"], "ambiance": "Ntombela compte ses vaches sur l'herbe, au pied de l'île, et il en trouve toujours une de plus que là-haut.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT127-moins-2", "zone": "ANT127", "pole": "-", "palier": 2, "nom": "L'ombre en retard", "cout": 1, "cible": 1, "effet": "6 dégâts à la cible, qui devient vulnérable 1. Si elle s'apprête à voler : 5 dégâts de plus.", "ops": [["deg", "cible", 6], ["vulnerable", "cible", 1], ["si", "vol", [["deg", "cible", 5]]]], "tags": ["Antre", "Vent", "Pôle −", "Dégâts", "Marque", "Condition"], "ambiance": "À Esithunzini, l'ombre des îles arrive sur l'herbe un peu après l'île, comme un chien qui a traîné en route.", "budget": "11,5 / 12,5 (-8%) — recalculé par le critique"},
{"id": "ANT127-moins-3", "zone": "ANT127", "pole": "-", "palier": 3, "nom": "La hyène sans ombre", "cout": 1, "cible": 1, "effet": "Une hyène sans ombre sort d'un kraal : 12 PV, frappe 4. 4 dégâts à la cible. Le héros perd 2 PV.", "ops": [["invoque", "Hyène sans ombre", 12, 4], ["deg", "cible", 4], ["prixPV", 2]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Dégâts", "Prix"], "ambiance": "La hyène qui rôde sous les kraals ne fait pas d'ombre, et les chiens d'Esithunzini aboient à côté d'elle.", "budget": "14,0 / 15,0 (-7%) — recalculé par le critique"},
{"id": "ANT127-moins-4", "zone": "ANT127", "pole": "-", "palier": 4, "nom": "Les cordes dans le noir", "cout": 2, "cible": 1, "effet": "18 dégâts à la cible, qui devient vulnérable 2. Si elle s'apprête à voler : 8 dégâts de plus. Le héros perd 3 PV.", "ops": [["deg", "cible", 18], ["vulnerable", "cible", 2], ["si", "vol", [["deg", "cible", 8]]], ["prixPV", 3]], "tags": ["Antre", "Vent", "Pôle −", "Dégâts", "Marque", "Condition", "Prix"], "ambiance": "Les cordes d'écorce pendent dans un noir épais ; ce qui remonte n'est plus tout à fait le bouvier.", "budget": "25,0 / 28,0 (-11%) — recalculé par le critique"},
{"id": "ANT127-moins-5", "zone": "ANT127", "pole": "-", "palier": 5, "nom": "Le troupeau d'ombre", "cout": 2, "cible": 1, "effet": "Si une bête était déjà en jeu : 4 dégâts à la cible. Le troupeau d'ombre de Ntombela se lève : 20 PV, frappe 5. 9 dégâts à la cible ; le héros se soigne de la moitié. Le héros perd 3 PV.", "ops": [["si", "bete", [["deg", "cible", 4]]], ["invoque", "Troupeau d'ombre", 20, 5], ["deg", "cible", 9], ["volVie"], ["prixPV", 3]], "tags": ["Antre", "Vent", "Pôle −", "Condition", "Dégâts", "Invocation", "Vol de vie", "Prix"], "ambiance": "Le troupeau d'ombre broute toujours à l'endroit où l'île était, et l'herbe meurt dessous en forme de vaches.", "budget": "31 (cible 32 ; vérifié)"},
{"id": "ANT127-moins-6", "zone": "ANT127", "pole": "-", "palier": 6, "nom": "Le vautour derrière le soleil", "cout": 2, "cible": 1, "effet": "Un vautour noir plonge de l'île : 16 PV, frappe 6. 11 dégâts à la cible, qui devient vulnérable 2. Si elle s'apprête à voler : 6 dégâts de plus. Le héros perd 4 PV.", "ops": [["invoque", "Vautour noir", 16, 6], ["deg", "cible", 11], ["vulnerable", "cible", 2], ["si", "vol", [["deg", "cible", 6]]], ["prixPV", 4]], "tags": ["Antre", "Vent", "Pôle −", "Invocation", "Dégâts", "Marque", "Condition", "Prix"], "ambiance": "Le vautour qui tourne sous les îles d'Esithunzini ne passe jamais devant le soleil : il passe derrière.", "budget": "33,0 / 36,0 (-8%) — recalculé par le critique"},
{"id": "ANT127-moins-7", "zone": "ANT127", "pole": "-", "palier": 7, "nom": "La Plaine sans îles", "cout": 3, "cible": 1, "effet": "Les ombres restent seules. Un grand troupeau d'ombre (26 PV, frappe 6). 9 dégâts à tous ; le héros se soigne de la moitié. −6 PV. Pose Sang. Si Abîme (consommé) : 16 dégâts à la cible, tous perdent 1 d'attaque, le héros se soigne de 8.", "ops": [["invoque", "Grand troupeau d'ombre", 26, 6], ["deg", "tous", 9], ["volVie"], ["prixPV", 6], ["pose", "Sang"], ["reveil", "Abîme", true, [["deg", "cible", 16], ["affaiblit", "tous", 1], ["soin", "heros", 8]]]], "tags": ["Antre", "Vent", "Forme ultime −7", "Invocation", "Dégâts", "Vol de vie", "Prix", "Pose Sang", "Réveil Abîme"], "ambiance": "Les îles sont parties vers l'est ; restent leurs ombres sur Esithunzini, et dessous, des bêtes qui broutent du noir.", "budget": "45,7 (+30,6 si Abîme, soit +67 % ; vérifié)"}
]
```

### Pôle + Lumière

Progression : le guêpier clair, les boucliers blancs, le bœuf aux veines visibles, le bouclier levé face au soleil, les ibis de midi, midi pile, puis les îles perdent leurs bords. Style : on encaisse et on renvoie (riposte), le camp se garde, les bêtes claires font masse ; le prix renforce la garde ennemie ou fait lâcher une carte.

```json
[
{"id": "ANT127-plus-1", "zone": "ANT127", "pole": "+", "palier": 1, "nom": "Le guêpier clair", "cout": 1, "cible": 0, "effet": "Un guêpier clair se pose sur l'épaule : 6 PV, frappe 2. Jusqu'au prochain tour, chaque coup reçu par le héros renvoie 2 dégâts.", "ops": [["invoque", "Guêpier clair", 6, 2], ["riposte", 2]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Riposte"], "ambiance": "Les guêpiers des kraals ont le plumage si clair qu'on voit battre leur cœur au travers, comme une braise.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT127-plus-2", "zone": "ANT127", "pole": "+", "palier": 2, "nom": "Les boucliers blancs", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 6 de garde. Jusqu'au prochain tour, chaque coup reçu par le héros renvoie 3 dégâts.", "ops": [["garde", "allies", 6], ["riposte", 3]], "tags": ["Antre", "Vent", "Pôle +", "Garde", "Riposte"], "ambiance": "À midi, sur les îles d'Esithunzini, les boucliers de peau blanche renvoient le soleil jusqu'aux kraals d'en face.", "budget": "13,2 (cible 12,5 ; vérifié)"},
{"id": "ANT127-plus-3", "zone": "ANT127", "pole": "+", "palier": 3, "nom": "Le bœuf aux veines visibles", "cout": 1, "cible": 0, "effet": "Un bœuf blanc avance : 18 PV, frappe 3. Jusqu'au prochain tour, chaque coup reçu par le héros renvoie 2 dégâts. Chaque ennemi gagne 1 de garde.", "ops": [["invoque", "Bœuf blanc", 18, 3], ["riposte", 2], ["ennemiGarde", 1]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Riposte", "Prix"], "ambiance": "Le poil des bœufs de Ntombela s'éclaircit chaque saison ; au soleil, on voit maintenant l'herbe qu'ils ruminent.", "budget": "15,5 (cible 15 ; vérifié)"},
{"id": "ANT127-plus-4", "zone": "ANT127", "pole": "+", "palier": 4, "nom": "Le bouclier face au soleil", "cout": 2, "cible": 0, "effet": "Si la Garde était déjà levée : 4 de riposte. Le héros gagne 10 de garde, vos alliés 8. Jusqu'au prochain tour, chaque coup reçu renvoie 5 dégâts. Défaussez 1 carte au hasard.", "ops": [["si", "garde", [["riposte", 4]]], ["garde", "heros", 10], ["garde", "allies", 8], ["riposte", 5], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle +", "Condition", "Riposte", "Garde", "Prix"], "ambiance": "Quand Ntombela lève son bouclier blanc face au soleil, l'ennemi d'en face se couvre les yeux et frappe à côté.", "budget": "28,6 (cible 28 ; vérifié)"},
{"id": "ANT127-plus-5", "zone": "ANT127", "pole": "+", "palier": 5, "nom": "Les ibis de midi", "cout": 2, "cible": 0, "effet": "Deux ibis de midi se posent : 12 PV, frappent 3 chacun. Vos alliés gagnent 6 de garde. Jusqu'au prochain tour, chaque coup reçu renvoie 4 dégâts. Chaque ennemi gagne 2 de garde.", "ops": [["invoque", "Ibis de midi", 12, 3], ["invoque", "Ibis de midi", 12, 3], ["garde", "allies", 6], ["riposte", 4], ["ennemiGarde", 2]], "tags": ["Antre", "Vent", "Pôle +", "Invocation", "Garde", "Riposte", "Prix"], "ambiance": "Les ibis d'Esithunzini se posent toujours face au soleil, et leur ombre, quand ils en ont une, tombe derrière eux.", "budget": "32,2 (cible 32 ; vérifié)"},
{"id": "ANT127-plus-6", "zone": "ANT127", "pole": "+", "palier": 6, "nom": "Midi pile", "cout": 2, "cible": 0, "effet": "Vos alliés gagnent 15 de garde. Jusqu'au prochain tour, chaque coup reçu renvoie 8 dégâts. Si une bête est en jeu : 4 de riposte de plus. Défaussez 1 carte au hasard.", "ops": [["garde", "allies", 15], ["riposte", 8], ["si", "bete", [["riposte", 4]]], ["prixDefausse", 1]], "tags": ["Antre", "Vent", "Pôle +", "Garde", "Riposte", "Condition", "Prix"], "ambiance": "À midi pile, les îles n'ont plus d'ombre ; qui frappe un bouvier voit son bras se découper sur le ciel.", "budget": "35 (cible 36 ; vérifié)"},
{"id": "ANT127-plus-7", "zone": "ANT127", "pole": "+", "palier": 7, "nom": "Le Midi sans bords", "cout": 3, "cible": 0, "effet": "Les îles perdent leurs bords. Un troupeau blanc avance (30 PV, frappe 5). Alliés +12 de garde ; chaque coup reçu renvoie 7. Ennemis +2 de garde. Pose Racine. Si Braise (consommée) : 8 dégâts à tous, vulnérables 1, riposte +4.", "ops": [["invoque", "Troupeau blanc", 30, 5], ["garde", "allies", 12], ["riposte", 7], ["ennemiGarde", 2], ["pose", "Racine"], ["reveil", "Braise", true, [["deg", "tous", 8], ["vulnerable", "tous", 1], ["riposte", 4]]]], "tags": ["Antre", "Vent", "Forme ultime +7", "Invocation", "Garde", "Riposte", "Prix", "Pose Racine", "Réveil Braise"], "ambiance": "Plus d'ombre sous les îles d'Esithunzini : bouviers et bœufs blancs se fondent dans un midi qui ne bouge plus.", "budget": "46,9 (+32,2 si Braise, soit +69 % ; vérifié)"}
]
```

---

## Les Fornaci de Vedrana (ANT105 · Antre · Glace)

```json
{
 "fiche": "ANT105",
 "nom": "Les Fornaci de Vedrana",
 "recit": "Excellences du Conseil, la fornace de Vedrana tient sur le glacier, et le verre y sort plus clair que nulle part ailleurs. Mais les nuits allongent : on souffle à la lueur des fours, et les hiboux viennent dormir contre les briques. Hier, à l'aube, une lumière verte a coulé du ciel sur la glace. Les animaux de verre que mes garçons avaient soufflés pendant la nuit étaient chauds au toucher, et le petit lion avait bougé d'un empan. Envoyez-moi du sable, je vous prie, et un prêtre. Maestro Alvise Tremonte.",
 "pal": [
  "Nuit sans fin ; les fours sont éteints, la glace est noire jusqu'au fond des crevasses, et dans chaque bouche de four un hibou veille sur des braises mortes.",
  "Les nuits mangent les journées ; on souffle le verre à la lueur des fours, des chats noirs dorment sur les briques, et les crevasses luisent à peine.",
  "Glacier bleu sous un ciel bas, fornace vénitienne de briques posée sur la glace, cheminées qui fument, établis de verriers, animaux de verre alignés.",
  "Chaque aube dure plus longtemps ; des voiles verts coulent du ciel sur la glace, et les animaux de verre ont changé de place pendant la nuit.",
  "Aube perpétuelle : des milliers d'animaux de verre traversent le glacier en troupeaux lumineux, et les verriers les suivent, les mains vides."
 ],
 "pm": "Nuit",
 "pp": "Aurore"
}
```

### Pôle − Nuit

Progression : le hibou des fours, les mains engourdies, le chat noir des briques, le givre sur les cannes, le loup des crevasses, les chauves-souris prises dans la glace, puis tous les fours s'éteignent. Style : la nuit engourdit les ennemis (affaiblissement durable), les bêtes qui vivent de la chaleur des fours tiennent le terrain, le héros se couvre ; le prix se paie en PV, le froid qu'on prend.

```json
[
{"id": "ANT105-moins-1", "zone": "ANT105", "pole": "-", "palier": 1, "nom": "Le hibou des fours", "cout": 1, "cible": 1, "effet": "Un hibou des fours descend de la cheminée : 8 PV, frappe 2. La cible perd 1 d'attaque pour le combat.", "ops": [["invoque", "Hibou des fours", 8, 2], ["affaiblit", "cible", 1]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement"], "ambiance": "Les hiboux de Vedrana dorment le jour contre les briques chaudes, et viennent regarder souffler le verre la nuit.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT105-moins-2", "zone": "ANT105", "pole": "-", "palier": 2, "nom": "Les mains engourdies", "cout": 1, "cible": 0, "effet": "Tous les ennemis perdent 1 d'attaque pour le combat. Le héros gagne 8 de garde.", "ops": [["affaiblit", "tous", 1], ["garde", "heros", 8]], "tags": ["Antre", "Glace", "Pôle −", "Affaiblissement", "Garde"], "ambiance": "On souffle maintenant à la lueur des fours ; dehors, la nuit de Vedrana est si froide qu'elle engourdit les mains.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "ANT105-moins-3", "zone": "ANT105", "pole": "-", "palier": 3, "nom": "Le chat noir des briques", "cout": 1, "cible": 1, "effet": "Un chat noir quitte les briques chaudes : 12 PV, frappe 3. La cible perd 2 d'attaque pour le combat. Le héros perd 2 PV.", "ops": [["invoque", "Chat noir des briques", 12, 3], ["affaiblit", "cible", 2], ["prixPV", 2]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Les chats noirs de la fornace ne sortent plus sur la glace ; ils regardent la nuit par le four.", "budget": "14,5 (cible 15 ; vérifié)"},
{"id": "ANT105-moins-4", "zone": "ANT105", "pole": "-", "palier": 4, "nom": "Le givre sur les cannes", "cout": 2, "cible": 1, "effet": "Tous les ennemis perdent 2 d'attaque. Si une bête est en jeu : 1 de plus. 4 dégâts à la cible. Le héros gagne 12 de garde, puis perd 3 PV.", "ops": [["affaiblit", "tous", 2], ["si", "bete", [["affaiblit", "tous", 1]]], ["deg", "cible", 4], ["garde", "heros", 12], ["prixPV", 3]], "tags": ["Antre", "Glace", "Pôle −", "Affaiblissement", "Condition", "Dégâts", "Garde", "Prix"], "ambiance": "Le givre monte des crevasses jusqu'aux établis ; les cannes de souffleur collent aux paumes, et l'on frappe moins fort.", "budget": "27,1 (cible 28 ; vérifié)"},
{"id": "ANT105-moins-5", "zone": "ANT105", "pole": "-", "palier": 5, "nom": "Le loup des crevasses", "cout": 2, "cible": 0, "effet": "Un loup des crevasses monte du noir : 20 PV, frappe 6. Tous les ennemis perdent 2 d'attaque. Le héros perd 3 PV.", "ops": [["invoque", "Loup des crevasses", 20, 6], ["affaiblit", "tous", 2], ["prixPV", 3]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Prix"], "ambiance": "Le loup des crevasses de Vedrana a le poil couvert de givre, et son haleine ne fait aucune buée.", "budget": "29,2 (cible 32 ; vérifié)"},
{"id": "ANT105-moins-6", "zone": "ANT105", "pole": "-", "palier": 6, "nom": "Les chauves-souris prises", "cout": 2, "cible": 0, "effet": "Deux chauves-souris de glace sortent de la crevasse : 10 PV, frappent 3 chacune. Tous les ennemis perdent 2 d'attaque. Le héros gagne 8 de garde, puis perd 4 PV.", "ops": [["invoque", "Chauve-souris de glace", 10, 3], ["invoque", "Chauve-souris de glace", 10, 3], ["affaiblit", "tous", 2], ["garde", "heros", 8], ["prixPV", 4]], "tags": ["Antre", "Glace", "Pôle −", "Invocation", "Affaiblissement", "Garde", "Prix"], "ambiance": "Les chauves-souris de Vedrana hivernent dans les crevasses, accrochées à la glace bleue, et la glace a poussé par-dessus.", "budget": "34,6 (cible 36 ; vérifié)"},
{"id": "ANT105-moins-7", "zone": "ANT105", "pole": "-", "palier": 7, "nom": "La Nuit des fours éteints", "cout": 3, "cible": 0, "effet": "Les fours s'éteignent tous. Un grand-duc veille (26 PV, frappe 5). Tous les ennemis perdent 3 d'attaque. Le héros gagne 14 de garde, puis perd 6 PV. Pose Givre. Si Abîme (consommé) : tous hésitent, perdent 1 d'attaque, 6 dégâts à tous.", "ops": [["invoque", "Grand-duc des fours", 26, 5], ["affaiblit", "tous", 3], ["garde", "heros", 14], ["prixPV", 6], ["pose", "Givre"], ["reveil", "Abîme", true, [["hesite", "tous"], ["affaiblit", "tous", 1], ["deg", "tous", 6]]]], "tags": ["Antre", "Glace", "Forme ultime −7", "Invocation", "Affaiblissement", "Garde", "Prix", "Pose Givre", "Réveil Abîme"], "ambiance": "Dans chaque four éteint, un hibou veille sur des braises mortes, et la nuit de Vedrana ne finit plus.", "budget": "45,5 (+28,6 si Abîme, soit +63 % ; vérifié)"}
]
```

### Pôle + Aurore

Progression : le moineau de verre, le premier rayon, le cheval de verre, l'aurore qui fend la glace, le lion qui tient la porte, le héron de verre, puis le verre se met en marche. Style : la lumière passe à travers tout : on brise ou on ignore la garde, et les cartes frappent plus fort quand la cible s'était gardée ; le prix fait lâcher des cartes.

```json
[
{"id": "ANT105-plus-1", "zone": "ANT105", "pole": "+", "palier": 1, "nom": "Le moineau de verre", "cout": 1, "cible": 1, "effet": "Un moineau de verre s'éveille : 6 PV, frappe 2. La garde de la cible tombe ; 1 dégât.", "ops": [["invoque", "Moineau de verre", 6, 2], ["briseGarde", "cible"], ["deg", "cible", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Perce-garde", "Dégâts"], "ambiance": "Le premier rayon traverse le moineau de verre posé sur l'établi, et le moineau secoue ses ailes.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ANT105-plus-2", "zone": "ANT105", "pole": "+", "palier": 2, "nom": "Le premier rayon", "cout": 1, "cible": 1, "effet": "Ignore la garde. Si la cible a de la garde : 6 dégâts. Puis 8 dégâts.", "ops": [["ignoreGarde"], ["si", "cibleGarde", [["deg", "cible", 6]]], ["deg", "cible", 8]], "tags": ["Antre", "Glace", "Pôle +", "Perce-garde", "Condition", "Dégâts"], "ambiance": "Une lumière verte coule du ciel sur Vedrana, et traverse le mur de briques comme s'il n'existait pas.", "budget": "14 (cible 12,5 ; vérifié)"},
{"id": "ANT105-plus-3", "zone": "ANT105", "pole": "+", "palier": 3, "nom": "Le cheval de verre", "cout": 1, "cible": 1, "effet": "Un cheval de verre piaffe sur la glace : 14 PV, frappe 4. La garde de la cible tombe. Défaussez 1 carte au hasard.", "ops": [["invoque", "Cheval de verre", 14, 4], ["briseGarde", "cible"], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Invocation", "Perce-garde", "Prix"], "ambiance": "Alvise a soufflé le cheval de verre à minuit ; à l'aube, il était à l'autre bout de l'établi, encore chaud.", "budget": "13 (cible 15 ; vérifié)"},
{"id": "ANT105-plus-4", "zone": "ANT105", "pole": "+", "palier": 4, "nom": "L'aurore qui fend", "cout": 2, "cible": 1, "effet": "Ignore la garde. Si la cible a de la garde : 10 dégâts. Puis 16 dégâts ; elle devient vulnérable 2. Défaussez 1 carte au hasard.", "ops": [["ignoreGarde"], ["si", "cibleGarde", [["deg", "cible", 10]]], ["deg", "cible", 16], ["vulnerable", "cible", 2], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Perce-garde", "Condition", "Dégâts", "Marque", "Prix"], "ambiance": "L'aurore coule sur le glacier en voiles verts, et la glace se fend partout où elle la touche.", "budget": "27 (cible 28 ; vérifié)"},
{"id": "ANT105-plus-5", "zone": "ANT105", "pole": "+", "palier": 5, "nom": "Le lion qui tient la porte", "cout": 2, "cible": 1, "effet": "Ignore la garde. Si la cible a de la garde : 8 dégâts. Le lion de verre a grandi : 22 PV, frappe 7. La garde de tous les ennemis tombe. Défaussez 1 carte au hasard.", "ops": [["ignoreGarde"], ["si", "cibleGarde", [["deg", "cible", 8]]], ["invoque", "Lion de verre", 22, 7], ["briseGarde", "tous"], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Perce-garde", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Le lion de verre avait bougé d'un empan la première nuit ; ce matin, il garde la porte de la fornace.", "budget": "32,1 (cible 32 ; vérifié)"},
{"id": "ANT105-plus-6", "zone": "ANT105", "pole": "+", "palier": 6, "nom": "Le héron de verre", "cout": 2, "cible": 1, "effet": "Ignore la garde. Si la cible a de la garde : 8 dégâts. Un héron de verre plonge : 16 PV, frappe 5. 14 dégâts à la cible. Défaussez 1 carte au hasard.", "ops": [["ignoreGarde"], ["si", "cibleGarde", [["deg", "cible", 8]]], ["invoque", "Héron de verre", 16, 5], ["deg", "cible", 14], ["prixDefausse", 1]], "tags": ["Antre", "Glace", "Pôle +", "Perce-garde", "Condition", "Dégâts", "Invocation", "Prix"], "ambiance": "Le héron de verre pêche dans la crevasse éclairée ; ce qu'il en remonte brille un moment, puis s'éteint.", "budget": "33,5 (cible 36 ; vérifié)"},
{"id": "ANT105-plus-7", "zone": "ANT105", "pole": "+", "palier": 7, "nom": "Le Troupeau de l'aube", "cout": 3, "cible": 1, "effet": "Le verre se met en marche. Un troupeau de verre (30 PV, frappe 6). Garde ennemie brisée ; 8 dégâts à tous, sans garde. Défaussez 2 cartes. Pose Braise. Si Givre (consommé) : 22 dégâts à la cible, tous vulnérables 1.", "ops": [["ignoreGarde"], ["invoque", "Troupeau de verre", 30, 6], ["briseGarde", "tous"], ["deg", "tous", 8], ["prixDefausse", 2], ["pose", "Braise"], ["reveil", "Givre", true, [["deg", "cible", 22], ["vulnerable", "tous", 1]]]], "tags": ["Antre", "Glace", "Forme ultime +7", "Perce-garde", "Invocation", "Dégâts", "Prix", "Pose Braise", "Réveil Givre"], "ambiance": "À l'aube de Vedrana, des milliers d'animaux de verre traversent le glacier, et les verriers les suivent sans rien porter.", "budget": "45,2 (+28,6 si Givre, soit +63 % ; vérifié)"}
]
```

---

## La Synaxe des Cires de Ktenaia (ASS096 · Assemblée · Feu)

```json
{
 "fiche": "ASS096",
 "nom": "La Synaxe des Cires de Ktenaia",
 "recit": "Procès-verbal de la synaxe de Ktenaia, tenue sous la tente de l'archiatre Théodora. Présents : onze médecins, un notaire. Point unique : les tablettes. Chaque malade du xénon est inscrit sur une tablette de cire ; guéri, on lisse la cire ; mort, on brûle la tablette. Le médecin Kosmas rapporte que des noms reviennent sur les tablettes lissées, d'une écriture qui n'est à personne. Théodora propose de tout brûler. Vote : six voix contre cinq. Le notaire précise qu'il a compté douze mains levées.",
 "pal": [
  "Le xénon n'est plus qu'un cercle de cendres sur le sable vitrifié ; au milieu, une seule tablette de cire intacte, couverte de noms qui s'écrivent seuls.",
  "Fumées des tablettes brûlées au-dessus des tentes ; les malades couchés en rangées dans le sable, et la cire fondue qui coule en rigoles noires.",
  "Xénon byzantin de brique crue au pied des dunes, tentes des malades, médecins en manteaux sombres, piles de tablettes de cire sous un auvent.",
  "Les lits se vident un à un ; les médecins lissent les tablettes au fer chaud, et la marmite de thériaque fume jour et nuit dans la cour.",
  "Tous les malades sont debout et partis ; les lits sont faits, les tablettes lisses, et dans la cour vide la marmite de thériaque bout pour personne."
 ],
 "pm": "Peste",
 "pp": "Guérison"
}
```

### Pôle − Peste

Progression : la tablette brûlée, les coutures des tentes, la liste des malades, les tablettes par paquets entiers, le four du xénon, le nom revenu, puis le bûcher du xénon entier. Style : des lois fortes qui touchent tous les ennemis et brisent leur garde, mais la synaxe brûle ce qu'elle touche : plusieurs cartes sont exilées après usage (elles ne reviennent plus de la défausse pendant ce combat).

```json
[
{"id": "ASS096-moins-1", "zone": "ASS096", "pole": "-", "palier": 1, "nom": "La tablette brûlée", "cout": 1, "cible": 0, "effet": "Loi : 3 dégâts à tous les ennemis. Piochez 2 cartes. Cette carte est exilée après usage.", "ops": [["deg", "tous", 3], ["pioche", 2], ["exil"]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Dégâts", "Pioche", "Exil"], "ambiance": "À Ktenaia, la tablette d'un mort brûle d'une flamme bleue, et la fumée garde un moment la forme du nom.", "budget": "10,6 (cible 10 ; vérifié)"},
{"id": "ASS096-moins-2", "zone": "ASS096", "pole": "-", "palier": 2, "nom": "Les coutures des tentes", "cout": 1, "cible": 0, "effet": "Loi : la garde de tous les ennemis tombe ; 3 dégâts à tous. Piochez 1 carte. Cette carte est exilée après usage.", "ops": [["briseGarde", "tous"], ["deg", "tous", 3], ["pioche", 1], ["exil"]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Perce-garde", "Dégâts", "Pioche", "Exil"], "ambiance": "Le notaire interdit de fermer les tentes : la peste de Ktenaia, écrit-il, entre aussi bien par les coutures.", "budget": "13,2 (cible 12,5 ; vérifié)"},
{"id": "ASS096-moins-3", "zone": "ASS096", "pole": "-", "palier": 3, "nom": "La liste des malades", "cout": 1, "cible": 0, "effet": "Loi : 4 dégâts à tous les ennemis. Reprenez en main la dernière carte de votre défausse ; piochez 1 carte.", "ops": [["deg", "tous", 4], ["recup"], ["pioche", 1]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Dégâts", "Récupération", "Pioche"], "ambiance": "Sous l'auvent du xénon, les tablettes des malades s'empilent en colonnes plus hautes que les médecins qui les tiennent.", "budget": "16,8 (cible 15 ; vérifié)"},
{"id": "ASS096-moins-4", "zone": "ASS096", "pole": "-", "palier": 4, "nom": "Par paquets entiers", "cout": 2, "cible": 0, "effet": "Loi : la garde de tous les ennemis tombe ; 9 dégâts à tous. Piochez 2 cartes. Cette carte est exilée après usage.", "ops": [["briseGarde", "tous"], ["deg", "tous", 9], ["pioche", 2], ["exil"]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Perce-garde", "Dégâts", "Pioche", "Exil"], "ambiance": "Théodora fait brûler les tablettes par paquets entiers ; la cire fondue descend vers les dunes en rigoles noires.", "budget": "30,4 (cible 28 ; vérifié)"},
{"id": "ASS096-moins-5", "zone": "ASS096", "pole": "-", "palier": 5, "nom": "Le four du xénon", "cout": 2, "cible": 1, "effet": "Loi : 10 dégâts à tous les ennemis, 8 de plus à la cible. Gagnez 2 mana Feu. Le héros perd 2 PV. Cette carte est exilée après usage.", "ops": [["deg", "tous", 10], ["deg", "cible", 8], ["mana", "Feu", 2], ["prixPV", 2], ["exil"]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Dégâts", "Mana", "Prix", "Exil"], "ambiance": "Le four du xénon brûle des tablettes jour et nuit ; les médecins s'y chauffent les mains en évitant de lire.", "budget": "30 (cible 32 ; vérifié)"},
{"id": "ASS096-moins-6", "zone": "ASS096", "pole": "-", "palier": 6, "nom": "Le nom revenu", "cout": 2, "cible": 0, "effet": "Loi : la garde de tous les ennemis tombe ; 10 dégâts à tous. Piochez 2 cartes.", "ops": [["briseGarde", "tous"], ["deg", "tous", 10], ["pioche", 2]], "tags": ["Assemblée", "Feu", "Pôle −", "Loi", "Perce-garde", "Dégâts", "Pioche"], "ambiance": "Kosmas lisse une tablette au fer chaud ; quand il relève le fer, un nom est revenu, d'une écriture inconnue.", "budget": "36,6 (cible 36 ; vérifié)"},
{"id": "ASS096-moins-7", "zone": "ASS096", "pole": "-", "palier": 7, "nom": "Le Bûcher du xénon", "cout": 3, "cible": 0, "effet": "On brûle tout le xénon. Garde ennemie brisée, 14 dégâts à tous. Piochez 3, gagnez 2 mana Feu. Le héros perd 4 PV. Carte exilée après usage. Pose Abîme. Si Braise (consommée) : 10 dégâts à tous, piochez 2.", "ops": [["briseGarde", "tous"], ["deg", "tous", 14], ["pioche", 3], ["mana", "Feu", 2], ["prixPV", 4], ["exil"], ["pose", "Abîme"], ["reveil", "Braise", true, [["deg", "tous", 10], ["pioche", 2]]]], "tags": ["Assemblée", "Feu", "Forme ultime −7", "Perce-garde", "Dégâts", "Pioche", "Mana", "Prix", "Exil", "Pose Abîme", "Réveil Braise"], "ambiance": "Du xénon de Ktenaia, il reste un cercle de cendres, et une tablette intacte où les noms s'écrivent seuls.", "budget": "47,4 (+30,0 si Braise, soit +63 % ; vérifié)"}
]
```

### Pôle + Guérison

Progression : les ingrédients pesés deux fois, la tablette lissée deux fois, la double guérison, la marmite qui fume, les cailloux de Kosmas, la reprise du remède, puis la marmite bout pour personne. Style : chaque carte prépare la suivante (écho : la prochaine carte de zone du tour compte double), le héros se soigne et se garde ; le prix soigne aussi l'ennemi. Aucune carte de ce pôle ne fait de dégâts : le jeu se gagne avec la carte doublée.

```json
[
{"id": "ASS096-plus-1", "zone": "ASS096", "pole": "+", "palier": 1, "nom": "Pesé deux fois", "cout": 1, "cible": 0, "effet": "Loi : le héros se soigne de 4. La prochaine carte de zone jouée ce tour a son effet doublé.", "ops": [["soin", "heros", 4], ["echo"]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Soin", "Écho"], "ambiance": "La thériaque de Ktenaia demande soixante et onze ingrédients, et chacun se pèse deux fois, par deux médecins.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ASS096-plus-2", "zone": "ASS096", "pole": "+", "palier": 2, "nom": "Lissée deux fois", "cout": 1, "cible": 0, "effet": "Le héros gagne 6 de garde et se soigne de 2. La prochaine carte de zone jouée ce tour a son effet doublé.", "ops": [["garde", "heros", 6], ["soin", "heros", 2], ["echo"]], "tags": ["Assemblée", "Feu", "Pôle +", "Garde", "Soin", "Écho"], "ambiance": "Théodora fait lisser la tablette d'un guéri au fer chaud, puis la fait lisser une seconde fois, par prudence.", "budget": "12,8 (cible 12,5 ; vérifié)"},
{"id": "ASS096-plus-3", "zone": "ASS096", "pole": "+", "palier": 3, "nom": "Guéri deux fois", "cout": 1, "cible": 0, "effet": "Loi : si la Garde était déjà levée, le héros se soigne de 6. Il gagne 10 de garde. La prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi se soigne de 1.", "ops": [["si", "garde", [["soin", "heros", 6]]], ["garde", "heros", 10], ["echo"], ["ennemiSoin", 1]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Condition", "Soin", "Garde", "Écho", "Prix"], "ambiance": "Loi de la synaxe : on ne sort du xénon que guéri deux fois, par deux médecins qui s'ignorent.", "budget": "14,8 (cible 15 ; vérifié)"},
{"id": "ASS096-plus-4", "zone": "ASS096", "pole": "+", "palier": 4, "nom": "La marmite qui fume", "cout": 2, "cible": 0, "effet": "Le héros se soigne de 10 et gagne 12 de garde. Piochez 1 carte. La prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi se soigne de 2.", "ops": [["soin", "heros", 10], ["garde", "heros", 12], ["pioche", 1], ["echo"], ["ennemiSoin", 2]], "tags": ["Assemblée", "Feu", "Pôle +", "Soin", "Garde", "Pioche", "Écho", "Prix"], "ambiance": "La marmite de thériaque fume dans la cour jour et nuit ; les guéris passent devant sans s'arrêter, et sans tousser.", "budget": "25,2 (cible 28 ; vérifié)"},
{"id": "ASS096-plus-5", "zone": "ASS096", "pole": "+", "palier": 5, "nom": "Les cailloux de Kosmas", "cout": 2, "cible": 0, "effet": "Loi : si la Garde était déjà levée, le héros se soigne de 10. Il gagne 14 de garde. Piochez 1 carte ; gagnez 2 mana Feu. La prochaine carte de zone jouée ce tour a son effet doublé. Chaque ennemi se soigne de 2.", "ops": [["si", "garde", [["soin", "heros", 10]]], ["garde", "heros", 14], ["pioche", 1], ["mana", "Feu", 2], ["echo"], ["ennemiSoin", 2]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Condition", "Soin", "Garde", "Pioche", "Mana", "Écho", "Prix"], "ambiance": "Kosmas compte les guéris à la porte, un caillou par guéri ; ce soir, il lui reste un caillou.", "budget": "27,8 (cible 32 ; vérifié)"},
{"id": "ASS096-plus-6", "zone": "ASS096", "pole": "+", "palier": 6, "nom": "La reprise du remède", "cout": 2, "cible": 0, "effet": "Loi : si la Garde était déjà levée, piochez 2 cartes. Le héros se soigne de 12 et gagne 12 de garde. Reprenez la dernière carte de votre défausse. Écho : la prochaine carte de zone compte double. Ennemis soignés de 2.", "ops": [["si", "garde", [["pioche", 2]]], ["soin", "heros", 12], ["garde", "heros", 12], ["recup"], ["echo"], ["ennemiSoin", 2]], "tags": ["Assemblée", "Feu", "Pôle +", "Loi", "Condition", "Pioche", "Soin", "Garde", "Récupération", "Écho", "Prix"], "ambiance": "Quand un guéri retombe malade, on lui redonne la même cuillère de thériaque, à la même heure exactement.", "budget": "31,2 (cible 36 ; vérifié)"},
{"id": "ASS096-plus-7", "zone": "ASS096", "pole": "+", "palier": 7, "nom": "La Thériaque pour personne", "cout": 3, "cible": 0, "effet": "La marmite bout pour personne. Le héros se soigne de 16, gagne 18 de garde ; piochez 3, gagnez 2 mana Feu ; écho. Ennemis soignés de 3. Pose Sceau. Si Sang (consommé) : soin 10, garde 10, piochez 2, reprenez votre dernière défausse.", "ops": [["soin", "heros", 16], ["garde", "heros", 18], ["pioche", 3], ["mana", "Feu", 2], ["echo"], ["ennemiSoin", 3], ["pose", "Sceau"], ["reveil", "Sang", true, [["soin", "heros", 10], ["garde", "heros", 10], ["pioche", 2], ["recup"]]]], "tags": ["Assemblée", "Feu", "Forme ultime +7", "Soin", "Garde", "Pioche", "Mana", "Écho", "Prix", "Pose Sceau", "Réveil Sang"], "ambiance": "Les lits de Ktenaia sont faits et tous les malades partis ; dans la cour vide, la thériaque bout encore.", "budget": "47,8 (+30,0 si Sang, soit +63 % ; vérifié)"}
]
```

---

## Le Conseil des Jarres d'Ahuitlapan (ASS159 · Assemblée · Vent)

```json
{
 "fiche": "ASS159",
 "nom": "Le Conseil des Jarres d'Ahuitlapan",
 "recit": "Vous montez à Ahuitlapan par les escaliers de cordes, d'île en île. Chaque île porte une jarre scellée à la cire, pleine d'une pluie très ancienne ; la briser rend l'eau à la vallée, et l'île, allégée, monte. Le conseil vote à chaque saison. Il vote toujours pour garder. La gardienne Huitzilin vous montre en bas les champs morts, puis l'île du conseil, qui frôle déjà les toits. « Elle pèse, dit-elle. Ce n'est plus de l'eau. » Contre le flanc de la jarre, vous entendez quelque chose nager.",
 "pal": ["Les îles ont toutes sombré sur une plaine fendue ; leurs jarres scellées de cire noire se dressent dans la poussière, et rien ne bouge sous un ciel blanc.", "Les îles descendent d'une brasse par lune ; les escaliers de cordes traînent dans la poussière, et la vallée d'en bas a la couleur d'un tesson.", "Îles flottantes reliées par des escaliers de cordes, temples aztèques de pierre, jarres scellées sur chaque île, conseillers aux manteaux de plumes.", "Des jarres brisées, l'eau tombe en cascades d'île en île ; les escaliers ruissellent, et la vallée d'en bas se couvre de lacs qui grandissent.", "Chaque île déverse un fleuve vertical jusqu'au sol ; le ciel est un lac renversé où flottent les temples, et des poissons remontent les cascades d'île en île."],
 "pm": "Sécheresse",
 "pp": "Déluge"
}
```

### Pôle − Sécheresse

Progression : la gorgée unique, la loi sur l'eau des autres, les champs couleur de tesson, la cire qui suinte, l'île qui frôle les toits, les manches de plumes en poussière, puis les îles se posent. Style : la sécheresse garde l'eau pour plus tard (mana Vent qui servira aux cartes suivantes), fend la peau de l'ennemi (Vulnérable) et punit celui qui veut se soigner ; le prix se paie en cartes et en PV.

```json
[
{"id": "ASS159-moins-1", "zone": "ASS159", "pole": "-", "palier": 1, "nom": "La gorgée unique", "cout": 1, "cible": 1, "effet": "Loi : gagnez 1 mana Vent. La cible devient vulnérable 1. Le héros gagne 5 de garde.", "ops": [["mana", "Vent", 1], ["vulnerable", "cible", 1], ["garde", "heros", 5]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Mana", "Marque", "Garde"], "ambiance": "À Ahuitlapan, on ne boit qu'au conseil, une gorgée chacun, dans une coupe de pierre qu'on essuie après.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "ASS159-moins-2", "zone": "ASS159", "pole": "-", "palier": 2, "nom": "L'eau des autres", "cout": 1, "cible": 1, "effet": "Loi : 3 dégâts à la cible ; elle devient vulnérable 2. Gagnez 1 mana Vent. Si un ennemi s'apprête à se soigner : 8 dégâts de plus. Défaussez 1 carte au hasard.", "ops": [["deg", "cible", 3], ["vulnerable", "cible", 2], ["mana", "Vent", 1], ["si", "soinEnnemi", [["deg", "cible", 8]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Dégâts", "Marque", "Mana", "Condition", "Prix"], "ambiance": "Loi du conseil : qui soigne un autre avec l'eau des jarres paie l'eau, et le soin, et la jarre.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "ASS159-moins-3", "zone": "ASS159", "pole": "-", "palier": 3, "nom": "Les champs couleur de tesson", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis deviennent vulnérables 1. Gagnez 1 mana Vent ; piochez 1 carte.", "ops": [["vulnerable", "tous", 1], ["mana", "Vent", 1], ["pioche", 1]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Marque", "Mana", "Pioche"], "ambiance": "Les champs de la vallée ont la couleur d'un tesson ; d'en haut, les conseillers les regardent se fendre en carrés.", "budget": "13,6 (cible 15 ; vérifié)"},
{"id": "ASS159-moins-4", "zone": "ASS159", "pole": "-", "palier": 4, "nom": "La cire qui suinte", "cout": 2, "cible": 1, "effet": "Loi : tous les ennemis deviennent vulnérables 2 ; 8 dégâts à la cible. Gagnez 2 mana Vent. Si un ennemi s'apprête à se soigner : 6 dégâts à tous. Défaussez 1 carte au hasard.", "ops": [["vulnerable", "tous", 2], ["deg", "cible", 8], ["mana", "Vent", 2], ["si", "soinEnnemi", [["deg", "tous", 6]]], ["prixDefausse", 1]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Marque", "Dégâts", "Mana", "Condition", "Prix"], "ambiance": "Huitzilin repasse la cire noire sur les jarres chaque matin ; la cire ne sèche plus, elle suinte.", "budget": "30,8 (cible 28 ; vérifié)"},
{"id": "ASS159-moins-5", "zone": "ASS159", "pole": "-", "palier": 5, "nom": "L'île qui frôle les toits", "cout": 2, "cible": 1, "effet": "Loi : 12 dégâts à la cible ; elle devient vulnérable 3. Gagnez 2 mana Vent. Le héros gagne 8 de garde, puis perd 3 PV.", "ops": [["deg", "cible", 12], ["vulnerable", "cible", 3], ["mana", "Vent", 2], ["garde", "heros", 8], ["prixPV", 3]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Dégâts", "Marque", "Mana", "Garde", "Prix"], "ambiance": "L'île du conseil frôle les toits ; ceux d'en bas tendent les mains vers sa jarre sans jamais la toucher.", "budget": "30,4 (cible 32 ; vérifié)"},
{"id": "ASS159-moins-6", "zone": "ASS159", "pole": "-", "palier": 6, "nom": "Les manches de plumes", "cout": 2, "cible": 1, "effet": "Loi : si la cible était déjà vulnérable, 10 dégâts. Puis tous les ennemis deviennent vulnérables 2 ; 12 dégâts à la cible. Gagnez 2 mana Vent. Défaussez 1 carte au hasard.", "ops": [["si", "vulnerable", [["deg", "cible", 10]]], ["vulnerable", "tous", 2], ["deg", "cible", 12], ["mana", "Vent", 2], ["prixDefausse", 1]], "tags": ["Assemblée", "Vent", "Pôle −", "Loi", "Condition", "Dégâts", "Marque", "Mana", "Prix"], "ambiance": "On ne vote plus à main levée à Ahuitlapan : les bras sont trop secs, les manches de plumes en poussière.", "budget": "33,2 (cible 36 ; vérifié)"},
{"id": "ASS159-moins-7", "zone": "ASS159", "pole": "-", "palier": 7, "nom": "Les Îles posées", "cout": 3, "cible": 1, "effet": "Les îles se posent. Tous les ennemis deviennent vulnérables 3 ; 12 dégâts à la cible. Gagnez 2 mana Vent. Le héros gagne 16 de garde, puis perd 4 PV. Pose Sceau. Si Braise (consommée) : 10 dégâts à tous, vulnérables 1.", "ops": [["vulnerable", "tous", 3], ["deg", "cible", 12], ["mana", "Vent", 2], ["garde", "heros", 16], ["prixPV", 4], ["pose", "Sceau"], ["reveil", "Braise", true, [["deg", "tous", 10], ["vulnerable", "tous", 1]]]], "tags": ["Assemblée", "Vent", "Forme ultime −7", "Marque", "Dégâts", "Mana", "Garde", "Prix", "Pose Sceau", "Réveil Braise"], "ambiance": "Les îles d'Ahuitlapan reposent sur la plaine fendue, et leurs jarres scellées de cire noire ne pèsent plus rien.", "budget": "46,6 (+28,6 si Braise, soit +61 % ; vérifié)"}
]
```

### Pôle + Déluge

Progression : la plus petite jarre, la pluie de quatre cents ans, le silence du conseil, les cascades, les lacs ronds, le vote de tout briser, puis le ciel devient un lac. Style : la crue emporte : les ennemis hésitent, l'eau frappe tout le monde, et elle désaltère aussi l'adversaire (le prix le soigne). Pôle de contrôle de masse, sans marque ni mana.

```json
[
{"id": "ASS159-plus-1", "zone": "ASS159", "pole": "+", "palier": 1, "nom": "La plus petite jarre", "cout": 1, "cible": 1, "effet": "Loi : la cible hésite ce tour. 2 dégâts à tous les ennemis.", "ops": [["hesite", "cible"], ["deg", "tous", 2]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Contrôle", "Dégâts"], "ambiance": "Huitzilin brise la plus petite jarre au maillet de jade ; l'eau tombe, et l'île monte d'un pouce.", "budget": "9,4 (cible 10 ; vérifié)"},
{"id": "ASS159-plus-2", "zone": "ASS159", "pole": "+", "palier": 2, "nom": "La pluie de quatre cents ans", "cout": 1, "cible": 1, "effet": "Loi : 5 dégâts à tous les ennemis ; piochez 1 carte. Chaque ennemi se soigne de 1.", "ops": [["deg", "tous", 5], ["pioche", 1], ["ennemiSoin", 1]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Dégâts", "Pioche", "Prix"], "ambiance": "La pluie des jarres a quatre cents ans ; elle tombe lourde, et elle sent le temple froid.", "budget": "12,8 / 12,5 (+2%) — recalculé par le critique"},
{"id": "ASS159-plus-3", "zone": "ASS159", "pole": "+", "palier": 3, "nom": "Le silence du conseil", "cout": 1, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour ; 3 dégâts à tous.", "ops": [["hesite", "tous"], ["deg", "tous", 3]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Contrôle", "Dégâts"], "ambiance": "Quand une jarre se brise, le conseil se tait pour regarder l'eau descendre, et personne ne songe à frapper.", "budget": "15,4 (cible 15 ; vérifié)"},
{"id": "ASS159-plus-4", "zone": "ASS159", "pole": "+", "palier": 4, "nom": "Les cascades", "cout": 2, "cible": 0, "effet": "Loi : 9 dégâts à tous les ennemis ; piochez 2 cartes ; le héros gagne 6 de garde. Chaque ennemi se soigne de 2.", "ops": [["deg", "tous", 9], ["pioche", 2], ["garde", "heros", 6], ["ennemiSoin", 2]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Dégâts", "Pioche", "Garde", "Prix"], "ambiance": "Les escaliers de cordes ruissellent d'île en île, et les cascades d'Ahuitlapan arrivent en bas avant leur bruit.", "budget": "28,2 / 28,0 (+1%) — recalculé par le critique"},
{"id": "ASS159-plus-5", "zone": "ASS159", "pole": "+", "palier": 5, "nom": "Les lacs ronds", "cout": 2, "cible": 0, "effet": "Loi : si la cible hésitait déjà, 12 dégâts à tous. Puis 8 dégâts à tous ; piochez 2 cartes. Chaque ennemi se soigne de 2.", "ops": [["si", "hesite", [["deg", "tous", 12]]], ["deg", "tous", 8], ["pioche", 2], ["ennemiSoin", 2]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Condition", "Dégâts", "Pioche", "Prix"], "ambiance": "La vallée se couvre de lacs ronds, un sous chaque île, qui reflètent aussi des îles absentes.", "budget": "34,4 / 32,0 (+8%) — recalculé par le critique"},
{"id": "ASS159-plus-6", "zone": "ASS159", "pole": "+", "palier": 6, "nom": "Le vote de tout briser", "cout": 2, "cible": 0, "effet": "Loi : tous les ennemis hésitent ce tour ; 10 dégâts à tous. Le héros gagne 8 de garde. Chaque ennemi se soigne de 2.", "ops": [["hesite", "tous"], ["deg", "tous", 10], ["garde", "heros", 8], ["ennemiSoin", 2]], "tags": ["Assemblée", "Vent", "Pôle +", "Loi", "Contrôle", "Dégâts", "Garde", "Prix"], "ambiance": "Le conseil a voté de tout briser ; les jarres tombent une à une, et chacune sonne autrement contre la pierre.", "budget": "32,8 (cible 36 ; vérifié)"},
{"id": "ASS159-plus-7", "zone": "ASS159", "pole": "+", "palier": 7, "nom": "Le Ciel renversé", "cout": 3, "cible": 0, "effet": "Le ciel devient un lac. Ce qui nageait dans les jarres descend (30 PV, frappe 8) ; 12 dégâts à tous ; piochez 2. Chaque ennemi se soigne de 3. Pose Givre. Si Sceau (consommé) : tous hésitent ; 12 dégâts à tous.", "ops": [["invoque", "Nageur des jarres", 30, 8], ["deg", "tous", 12], ["pioche", 2], ["ennemiSoin", 3], ["pose", "Givre"], ["reveil", "Sceau", true, [["hesite", "tous"], ["deg", "tous", 12]]]], "tags": ["Assemblée", "Vent", "Forme ultime +7", "Invocation", "Dégâts", "Pioche", "Prix", "Pose Givre", "Réveil Sceau"], "ambiance": "Au-dessus d'Ahuitlapan, le ciel est un lac renversé ; quelque chose y nage d'île en île, la tête en bas.", "budget": "54,8 sans combo ; réveil +35,4 (65%) — recalculé par le critique"}
]
```

---

## Les Gradins noyés d'Ak'ab Ha' (DON104 · Donjon · Sève)

```json
{
 "fiche": "DON104",
 "nom": "Les Gradins noyés d'Ak'ab Ha'",
 "recit": "Avant les hommes, avant même les crocodiles, une étoile est tombée ici et a creusé la cuvette que le marais d'Ak'ab Ha' remplit encore. Bien plus tard, les gardiens des jours y bâtirent des gradins pour lire le ciel dans l'eau noire : chaque étoile y a son reflet, et la prêtresse Ix Muwan les comptait à la pointe d'une perche. Les gradins se sont enfoncés depuis. Son dernier relevé, gravé sur la marche du bas, signale au milieu du marais une tache sans reflet, large comme une main. Elle s'élargit d'une perche chaque nuit.",
 "pal": [
  "Le marais ne reflète plus rien : un disque noir parfait s'étend jusqu'aux gradins, et les crocodiles couchés au bord ont les yeux tournés vers le dessous.",
  "Au milieu de l'eau, une tache sans reflet grandit ; les grenouilles se taisent autour, et les perches de mesure plantées là ont disparu sans bruit.",
  "Marais maya aux eaux noires sous les palmiers, gradins de pierre à demi noyés, perches de mesure, crocodiles, ciel étoilé reflété dans l'eau.",
  "Les reflets des étoiles brillent plus fort que le ciel ; des lueurs montent du fond, et les gradins sont semés de pierres noires encore chaudes.",
  "Les étoiles tombent dans le marais par poignées ; l'eau bout de lumière, les gradins brillent à toute heure, et la nuit n'a plus d'obscurité."
 ],
 "pm": "Vide",
 "pp": "Étoiles"
}
```

### Pôle − Vide

Progression : la perche sans bout, la grenouille sans bruit, l'offrande, la queue du crocodile, la marche enfoncée, la tache large comme une place, puis le marais ne reflète plus. Style : puissance brute concentrée : une seule cible, un coup énorme qui traverse la garde, plus fort quand il ne reste qu'un ennemi ; le vide se nourrit de la main (le prix défausse, et plusieurs cartes frappent plus fort si l'on a déjà défaussé en prix ce tour).

```json
[
{"id": "DON104-moins-1", "zone": "DON104", "pole": "-", "palier": 1, "nom": "La perche sans bout", "cout": 1, "cible": 1, "effet": "8 dégâts à la cible. S'il ne reste qu'un ennemi : 4 dégâts de plus.", "ops": [["deg", "cible", 8], ["si", "seul", [["deg", "cible", 4]]]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Condition"], "ambiance": "Ix Muwan plantait ses perches de mesure au bord de la tache ; le matin, elles n'avaient plus de bout.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON104-moins-2", "zone": "DON104", "pole": "-", "palier": 2, "nom": "La grenouille sans bruit", "cout": 1, "cible": 1, "effet": "10 dégâts à la cible, qui ignorent la garde.", "ops": [["deg", "cible", 10], ["ignoreGarde"]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Perce-garde"], "ambiance": "Une grenouille saute dans la tache sans reflet d'Ak'ab Ha' ; on n'entend pas l'eau, on n'entend rien.", "budget": "13 (cible 12,5 ; vérifié)"},
{"id": "DON104-moins-3", "zone": "DON104", "pole": "-", "palier": 3, "nom": "L'offrande sans écho", "cout": 1, "cible": 1, "effet": "Si la cible a de la garde : 8 dégâts. Puis 12 dégâts à la cible, qui ignorent la garde. Prix : la carte s'exile.", "ops": [["si", "cibleGarde", [["deg", "cible", 8]]], ["deg", "cible", 12], ["ignoreGarde"], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Exil"], "ambiance": "Les gardiens des jours jetaient au vide une offrande par nuit ; la tache n'en rendait jamais le bruit.", "budget": "16,0 / 15,0 (+7%) — recalculé par le critique"},
{"id": "DON104-moins-4", "zone": "DON104", "pole": "-", "palier": 4, "nom": "La queue du crocodile", "cout": 2, "cible": 1, "effet": "22 dégâts à la cible, qui ignorent la garde. S'il ne reste qu'un ennemi : 10 de plus. Prix : la carte s'exile.", "ops": [["deg", "cible", 22], ["ignoreGarde"], ["si", "seul", [["deg", "cible", 10]]], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Perce-garde", "Condition", "Exil"], "ambiance": "Le crocodile qui chassait au bord de la tache y a laissé glisser sa queue ; il l'a retirée sans écailles.", "budget": "27,0 / 28,0 (-4%) — recalculé par le critique"},
{"id": "DON104-moins-5", "zone": "DON104", "pole": "-", "palier": 5, "nom": "La marche enfoncée", "cout": 2, "cible": 1, "effet": "Si une carte a déjà été défaussée en prix ce tour : 12 dégâts. Puis la garde de la cible tombe ; 25 dégâts. Défaussez 2 cartes au hasard.", "ops": [["si", "defausseAPrix", [["deg", "cible", 12]]], ["briseGarde", "cible"], ["deg", "cible", 25], ["prixDefausse", 2]], "tags": ["Donjon", "Sève", "Pôle −", "Condition", "Dégâts", "Perce-garde", "Prix"], "ambiance": "Une marche des gradins s'est enfoncée dans la nuit ; ce qu'on y avait posé ne flotte nulle part.", "budget": "28 (cible 32 ; vérifié)"},
{"id": "DON104-moins-6", "zone": "DON104", "pole": "-", "palier": 6, "nom": "La tache large comme une place", "cout": 2, "cible": 1, "effet": "26 dégâts à la cible, qui ignorent la garde ; elle perd 2 d'attaque. S'il ne reste qu'un ennemi : 12 dégâts de plus. Prix : la carte s'exile.", "ops": [["deg", "cible", 26], ["ignoreGarde"], ["affaiblit", "cible", 2], ["si", "seul", [["deg", "cible", 12]]], ["exil"]], "tags": ["Donjon", "Sève", "Pôle −", "Dégâts", "Perce-garde", "Affaiblissement", "Condition", "Exil"], "ambiance": "Au milieu du marais, la tache fait la largeur d'une place ; au-dessus, les étoiles du ciel s'écartent un peu.", "budget": "38,0 / 36,0 (+6%) — recalculé par le critique"},
{"id": "DON104-moins-7", "zone": "DON104", "pole": "-", "palier": 7, "nom": "Le Disque sans reflet", "cout": 3, "cible": 1, "effet": "Le marais ne reflète plus. Si une carte a été défaussée en prix ce tour : 14 dégâts. Puis 36 dégâts sans garde ; la cible hésite. Garde ennemie brisée. Défaussez 3 cartes. Pose Abîme. Si Racine (consommée) : 24 dégâts, tous perdent 1 d'attaque.", "ops": [["si", "defausseAPrix", [["deg", "cible", 14]]], ["deg", "cible", 36], ["ignoreGarde"], ["hesite", "cible"], ["briseGarde", "tous"], ["prixDefausse", 3], ["pose", "Abîme"], ["reveil", "Racine", true, [["deg", "cible", 24], ["affaiblit", "tous", 1]]]], "tags": ["Donjon", "Sève", "Forme ultime −7", "Condition", "Dégâts", "Perce-garde", "Contrôle", "Prix", "Pose Abîme", "Réveil Racine"], "ambiance": "Ak'ab Ha' ne reflète plus rien ; au bord du disque noir, les crocodiles regardent fixement vers le dessous.", "budget": "48,6 (+30,6 si Racine, soit +63 % ; vérifié)"}
]
```

### Pôle + Étoiles

Progression : le compte à la perche, la pierre qui fume, les reflets trop vifs, les lueurs qui crèvent, les pierres en ligne, le reflet détaché, puis la pluie d'étoiles. Style : des averses de petits coups au hasard qui grossissent si l'on enchaîne les cartes (à partir de la deuxième du tour), et la pioche pour enchaîner ; le prix se paie en PV, la brûlure des pierres tombées.

```json
[
{"id": "DON104-plus-1", "zone": "DON104", "pole": "+", "palier": 1, "nom": "Le compte à la perche", "cout": 1, "cible": 0, "effet": "3 coups de 2 dégâts au hasard. Piochez 1 carte.", "ops": [["deg", "hasard", 2, 3], ["pioche", 1]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Pioche"], "ambiance": "Ix Muwan comptait les étoiles dans l'eau à la pointe de sa perche ; chaque reflet qu'elle touchait frissonnait.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "DON104-plus-2", "zone": "DON104", "pole": "+", "palier": 2, "nom": "La pierre qui fume", "cout": 1, "cible": 0, "effet": "4 coups de 3 dégâts au hasard. Piochez 1 carte. Le héros perd 2 PV.", "ops": [["deg", "hasard", 3, 4], ["pioche", 1], ["prixPV", 2]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Pioche", "Prix"], "ambiance": "Une pierre noire tombée la nuit fume sur la marche du haut ; on ne la ramasse qu'avec des feuilles mouillées.", "budget": "14 (cible 12,5 ; vérifié)"},
{"id": "DON104-plus-3", "zone": "DON104", "pole": "+", "palier": 3, "nom": "Les reflets trop vifs", "cout": 1, "cible": 0, "effet": "3 coups de 3 dégâts au hasard. Si c'est au moins votre deuxième carte jouée ce tour : 2 coups de 3 de plus. Piochez 1 carte.", "ops": [["deg", "hasard", 3, 3], ["si", "cartesJouees", [["deg", "hasard", 3, 2]]], ["pioche", 1]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Condition", "Pioche"], "ambiance": "Les reflets d'Ak'ab Ha' brillent plus fort que le ciel, et les grenouilles ne chantent plus qu'en fermant les yeux.", "budget": "16 (cible 15 ; vérifié)"},
{"id": "DON104-plus-4", "zone": "DON104", "pole": "+", "palier": 4, "nom": "Les lueurs qui crèvent", "cout": 2, "cible": 0, "effet": "6 coups de 4 dégâts au hasard. Si c'est au moins votre deuxième carte jouée ce tour : 2 coups de 4 de plus. Piochez 1 carte. Le héros perd 3 PV.", "ops": [["deg", "hasard", 4, 6], ["si", "cartesJouees", [["deg", "hasard", 4, 2]]], ["pioche", 1], ["prixPV", 3]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Condition", "Pioche", "Prix"], "ambiance": "Des lueurs montent du fond du marais comme des bulles, et crèvent avec un claquement de graine sèche.", "budget": "29 (cible 28 ; vérifié)"},
{"id": "DON104-plus-5", "zone": "DON104", "pole": "+", "palier": 5, "nom": "Les pierres en ligne", "cout": 2, "cible": 0, "effet": "6 coups de 4 dégâts au hasard. Piochez 2 cartes. Le héros perd 3 PV.", "ops": [["deg", "hasard", 4, 6], ["pioche", 2], ["prixPV", 3]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Pioche", "Prix"], "ambiance": "Les gradins sont jonchés de pierres noires ; alignées, elles redessinent le ciel d'une nuit qui n'a pas eu lieu.", "budget": "29,0 / 32,0 (-9%) — recalculé par le critique"},
{"id": "DON104-plus-6", "zone": "DON104", "pole": "+", "palier": 6, "nom": "Le reflet détaché", "cout": 2, "cible": 0, "effet": "7 coups de 5 dégâts au hasard. Si c'est au moins votre deuxième carte jouée ce tour : 2 coups de 5 de plus. Piochez 1 carte. Le héros perd 4 PV.", "ops": [["deg", "hasard", 5, 7], ["si", "cartesJouees", [["deg", "hasard", 5, 2]]], ["pioche", 1], ["prixPV", 4]], "tags": ["Donjon", "Sève", "Pôle +", "Dégâts", "Condition", "Pioche", "Prix"], "ambiance": "Le reflet d'une étoile s'est détaché de l'eau ; il flotte à hauteur de genou au-dessus du marais, et bourdonne.", "budget": "40 (cible 36 ; vérifié)"},
{"id": "DON104-plus-7", "zone": "DON104", "pole": "+", "palier": 7, "nom": "La Pluie d'Ak'ab Ha'", "cout": 3, "cible": 0, "effet": "Les étoiles tombent par poignées. 9 coups de 5 dégâts au hasard. Piochez 2 cartes. Le héros perd 5 PV. Pose Braise. Si Abîme (consommé) : 6 coups de 4 dégâts au hasard, piochez 2.", "ops": [["deg", "hasard", 5, 9], ["pioche", 2], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Abîme", true, [["deg", "hasard", 4, 6], ["pioche", 2]]]], "tags": ["Donjon", "Sève", "Forme ultime +7", "Dégâts", "Pioche", "Prix", "Pose Braise", "Réveil Abîme"], "ambiance": "Les étoiles tombent dans Ak'ab Ha' par poignées ; l'eau bout de lumière, et la nuit n'y a plus d'ombre.", "budget": "48 (+32,0 si Abîme, soit +67 % ; vérifié)"}
]
```

---

## Halmgard, la Citadelle-Horloge (CIT030 · Citadelle · Vent)

```json
{
 "fiche": "CIT030",
 "nom": "Halmgard, la Citadelle-Horloge",
 "recit": "Journal de frère Matthis, horloger de Halmgard. Prime : le vent de la steppe fait tourner les ailes de la tour, l'horloge sonne, la garnison se lève. Tierce : des feux d'herbe à l'horizon. Sexte : la garnison mange au coup de cloche, tous la cuillère levée au même instant. None : les feux se rapprochent. Vêpres : j'ai réglé l'horloge, elle avançait. Complies : la garnison s'est couchée au coup de cloche, et moi aussi, sans l'avoir voulu. Treizième heure : l'horloge en sonne une. Je ne l'ai pas construite.",
 "pal": [
  "La steppe brûle jusqu'à l'horizon ; les remparts sont fendus, les aiguilles de l'horloge tournent à toute allure, et la garnison court en tous sens.",
  "Des feux d'herbe cernent la citadelle ; l'horloge sonne à contretemps, des soldats se lèvent en pleine nuit, et les ailes de la tour grincent.",
  "Citadelle gothique seule dans la steppe, tour à ailes de moulin qui entraînent une grande horloge, garnison en manteaux gris, herbe haute.",
  "Les gestes de la garnison s'accordent : on mange, on veille, on dort au coup de cloche, et l'herbe au pied des murs est fauchée à hauteur égale.",
  "Tout bat au pas de l'horloge, soldats, chevaux et nuages ; le vent souffle à heure fixe, et chaque brin d'herbe de la steppe s'incline en même temps."
 ],
 "pm": "Chaos",
 "pp": "Ordre"
}
```

### Pôle − Chaos

Progression : le feu de plus, l'horloge à contretemps, le vent qui tourne, l'aile en feu, les remparts fendus, les aiguilles folles, puis la steppe brûle. Style : la citadelle tient en se couvrant (garde du héros) pendant que le feu court sur tous les ennemis ; les cartes frappent plus fort une cible qui brûlait déjà ; le prix se paie en PV, la chaleur des murs. Ni coups au hasard ni riposte : ce Chaos n'est pas celui de CIT016.

```json
[
{"id": "CIT030-moins-1", "zone": "CIT030", "pole": "-", "palier": 1, "nom": "Le feu de plus", "cout": 1, "cible": 1, "effet": "La cible brûle : 2 dégâts au début de ses 3 prochains tours. Le héros gagne 5 de garde.", "ops": [["brulure", "cible", 2, 3], ["garde", "heros", 5]], "tags": ["Citadelle", "Vent", "Pôle −", "Dégâts dans le temps", "Garde"], "ambiance": "Du haut de la tour de Halmgard, frère Matthis compte les feux d'herbe : un de plus à chaque heure.", "budget": "10 (cible 10 ; vérifié)"},
{"id": "CIT030-moins-2", "zone": "CIT030", "pole": "-", "palier": 2, "nom": "L'horloge à contretemps", "cout": 1, "cible": 1, "effet": "Si la cible brûlait déjà : 5 dégâts. Puis elle brûle : 3 dégâts pendant 3 tours. Le héros gagne 4 de garde, puis perd 2 PV.", "ops": [["si", "brule", [["deg", "cible", 5]]], ["brulure", "cible", 3, 3], ["garde", "heros", 4], ["prixPV", 2]], "tags": ["Citadelle", "Vent", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Garde", "Prix"], "ambiance": "L'horloge de Halmgard a sonné à contretemps ; la moitié de la garnison s'est levée, l'autre a dégainé.", "budget": "12,7 (cible 12,5 ; vérifié)"},
{"id": "CIT030-moins-3", "zone": "CIT030", "pole": "-", "palier": 3, "nom": "Le vent qui tourne", "cout": 1, "cible": 0, "effet": "Tous les ennemis brûlent : 2 dégâts pendant 2 tours. Le héros gagne 8 de garde.", "ops": [["brulure", "tous", 2, 2], ["garde", "heros", 8]], "tags": ["Citadelle", "Vent", "Pôle −", "Dégâts dans le temps", "Garde"], "ambiance": "Le vent de la steppe a tourné plusieurs fois dans l'heure ; les feux d'herbe courent maintenant vers les murs.", "budget": "15,2 (cible 15 ; vérifié)"},
{"id": "CIT030-moins-4", "zone": "CIT030", "pole": "-", "palier": 4, "nom": "L'aile en feu", "cout": 2, "cible": 1, "effet": "Si la cible brûlait déjà : 10 dégâts. Puis tous les ennemis brûlent : 3 dégâts pendant 3 tours. Le héros gagne 10 de garde, puis perd 3 PV.", "ops": [["si", "brule", [["deg", "cible", 10]]], ["brulure", "tous", 3, 3], ["garde", "heros", 10], ["prixPV", 3]], "tags": ["Citadelle", "Vent", "Pôle −", "Condition", "Dégâts", "Dégâts dans le temps", "Garde", "Prix"], "ambiance": "Une aile du moulin a pris feu en tournant ; elle trace sur la nuit un cercle qui ne s'éteint pas.", "budget": "29,8 (cible 28 ; vérifié)"},
{"id": "CIT030-moins-5", "zone": "CIT030", "pole": "-", "palier": 5, "nom": "Les remparts fendus", "cout": 2, "cible": 0, "effet": "La garde de tous les ennemis tombe ; ils brûlent : 3 dégâts pendant 3 tours. Le héros gagne 10 de garde, puis perd 3 PV.", "ops": [["briseGarde", "tous"], ["brulure", "tous", 3, 3], ["garde", "heros", 10], ["prixPV", 3]], "tags": ["Citadelle", "Vent", "Pôle −", "Perce-garde", "Dégâts dans le temps", "Garde", "Prix"], "ambiance": "Les remparts de Halmgard se sont fendus à la chaleur ; par les fentes, on voit brûler la steppe.", "budget": "31,4 (cible 32 ; vérifié)"},
{"id": "CIT030-moins-6", "zone": "CIT030", "pole": "-", "palier": 6, "nom": "Les aiguilles folles", "cout": 2, "cible": 1, "effet": "Si la cible brûlait déjà : tous les ennemis brûlent, 2 dégâts pendant 3 tours. Puis 6 dégâts ; elle brûle : 6 dégâts pendant 3 tours. Le héros gagne 12 de garde, puis perd 4 PV.", "ops": [["si", "brule", [["brulure", "tous", 2, 3]]], ["deg", "cible", 6], ["brulure", "cible", 6, 3], ["garde", "heros", 12], ["prixPV", 4]], "tags": ["Citadelle", "Vent", "Pôle −", "Condition", "Dégâts dans le temps", "Dégâts", "Garde", "Prix"], "ambiance": "Les aiguilles de l'horloge tournent si vite qu'on ne les voit plus ; dessous, frère Matthis crie les heures au hasard.", "budget": "36,2 (cible 36 ; vérifié)"},
{"id": "CIT030-moins-7", "zone": "CIT030", "pole": "-", "palier": 7, "nom": "La Steppe en feu", "cout": 3, "cible": 1, "effet": "L'horloge perd ses heures. Tous les ennemis brûlent : 4 dégâts pendant 3 tours ; 5 dégâts à tous. Le héros gagne 16 de garde, puis perd 5 PV. Pose Braise. Si Sang (consommé) : tous brûlent 3 pendant 2 tours, 15 dégâts à la cible.", "ops": [["brulure", "tous", 4, 3], ["deg", "tous", 5], ["garde", "heros", 16], ["prixPV", 5], ["pose", "Braise"], ["reveil", "Sang", true, [["brulure", "tous", 3, 2], ["deg", "cible", 15]]]], "tags": ["Citadelle", "Vent", "Forme ultime −7", "Dégâts dans le temps", "Dégâts", "Garde", "Prix", "Pose Braise", "Réveil Sang"], "ambiance": "La steppe brûle jusqu'à l'horizon autour de Halmgard, et les cloches sonnent toutes les heures à la fois.", "budget": "45,2 (+28,2 si Sang, soit +62 % ; vérifié)"}
]
```

### Pôle + Ordre

Progression : la sentinelle à la cloche, la cuillère levée, les arbalétriers au battement, l'horloge réglée, les chevaliers de none, l'herbe à hauteur égale, puis le vent souffle à l'heure. Style : on joue au rythme : plusieurs cartes paient davantage si c'est au moins la troisième carte jouée ce tour ; le camp se garde et des soldats prennent leur poste ; le prix renforce la garde ennemie. L'Ordre de CIT016 tenait par l'affaiblissement ; celui-ci tient par la cadence.

```json
[
{"id": "CIT030-plus-1", "zone": "CIT030", "pole": "+", "palier": 1, "nom": "La sentinelle à la cloche", "cout": 1, "cible": 0, "effet": "Une sentinelle grise prend son poste : 10 PV, frappe 1. Vos alliés gagnent 3 de garde.", "ops": [["invoque", "Sentinelle grise", 10, 1], ["garde", "allies", 3]], "tags": ["Citadelle", "Vent", "Pôle +", "Invocation", "Garde"], "ambiance": "La sentinelle de Halmgard prend son poste au coup de cloche ; elle ne sait plus le faire sans la cloche.", "budget": "10,1 (cible 10 ; vérifié)"},
{"id": "CIT030-plus-2", "zone": "CIT030", "pole": "+", "palier": 2, "nom": "La cuillère levée", "cout": 1, "cible": 0, "effet": "Vos alliés gagnent 6 de garde. Piochez 1 carte. Si c'est au moins votre troisième carte jouée ce tour : piochez 2 de plus. Chaque ennemi gagne 1 de garde.", "ops": [["garde", "allies", 6], ["pioche", 1], ["si", "troisCartes", [["pioche", 2]]], ["ennemiGarde", 1]], "tags": ["Citadelle", "Vent", "Pôle +", "Garde", "Pioche", "Condition", "Prix"], "ambiance": "À Halmgard, on mange au coup de cloche de sexte, toutes les cuillères levées au même instant, sans un regard.", "budget": "13,2 (cible 12,5 ; vérifié)"},
{"id": "CIT030-plus-3", "zone": "CIT030", "pole": "+", "palier": 3, "nom": "Les arbalétriers au battement", "cout": 1, "cible": 0, "effet": "Si la Garde était déjà levée : vos alliés gagnent 6 de garde. Des arbalétriers montent au mur : 12 PV, frappent 4.", "ops": [["si", "garde", [["garde", "allies", 6]]], ["invoque", "Arbalétriers du mur", 12, 4]], "tags": ["Citadelle", "Vent", "Pôle +", "Condition", "Garde", "Invocation"], "ambiance": "Les arbalétriers de Halmgard tirent tous au même battement de l'horloge, et rechargent au suivant, sans un ordre.", "budget": "15,6 / 15,0 (+4%) — recalculé par le critique"},
{"id": "CIT030-plus-4", "zone": "CIT030", "pole": "+", "palier": 4, "nom": "L'horloge réglée", "cout": 2, "cible": 1, "effet": "Vos alliés gagnent 14 de garde. La cible devient vulnérable 1. Si c'est au moins votre troisième carte jouée ce tour : 6 dégâts à tous. Chaque ennemi gagne 1 de garde.", "ops": [["garde", "allies", 14], ["vulnerable", "cible", 1], ["si", "troisCartes", [["deg", "tous", 6]]], ["ennemiGarde", 1]], "tags": ["Citadelle", "Vent", "Pôle +", "Garde", "Marque", "Condition", "Dégâts", "Prix"], "ambiance": "Frère Matthis a réglé l'horloge, qui avançait ; depuis, la garnison respire au même rythme qu'elle.", "budget": "24,4 (cible 28 ; vérifié)"},
{"id": "CIT030-plus-5", "zone": "CIT030", "pole": "+", "palier": 5, "nom": "Les chevaliers de none", "cout": 2, "cible": 0, "effet": "Si la Garde était déjà levée : piochez 2 cartes. Les chevaliers de la cloche sortent au pas : 22 PV, frappent 5. Vos alliés gagnent 8 de garde. Chaque ennemi gagne 2 de garde.", "ops": [["si", "garde", [["pioche", 2]]], ["invoque", "Chevaliers de la cloche", 22, 5], ["garde", "allies", 8], ["ennemiGarde", 2]], "tags": ["Citadelle", "Vent", "Pôle +", "Condition", "Pioche", "Invocation", "Garde", "Prix"], "ambiance": "Les chevaux de la garnison partent au pas sur le coup de none, tous les sabots tombant ensemble.", "budget": "28,1 / 32,0 (-12%) — recalculé par le critique"},
{"id": "CIT030-plus-6", "zone": "CIT030", "pole": "+", "palier": 6, "nom": "L'herbe à hauteur égale", "cout": 2, "cible": 0, "effet": "Si la Garde était déjà levée : vos alliés gagnent 8 de garde. Une garde du cadran se forme : 18 PV, frappe 4. Vos alliés gagnent 16 de garde. Chaque ennemi gagne 2 de garde.", "ops": [["si", "garde", [["garde", "allies", 8]]], ["invoque", "Garde du cadran", 18, 4], ["garde", "allies", 16], ["ennemiGarde", 2]], "tags": ["Citadelle", "Vent", "Pôle +", "Condition", "Garde", "Invocation", "Prix"], "ambiance": "L'herbe au pied des murs de Halmgard pousse à hauteur égale, et se couche tout entière au vent de l'heure.", "budget": "35,0 / 36,0 (-3%) — recalculé par le critique"},
{"id": "CIT030-plus-7", "zone": "CIT030", "pole": "+", "palier": 7, "nom": "Le Vent à l'heure", "cout": 3, "cible": 0, "effet": "Le vent souffle à l'heure. Garnison réglée (34 PV, frappe 5) ; alliés +14 de garde ; piochez 1, ou 3 dès la troisième carte du tour. Ennemis +2 de garde. Pose Sceau. Si Givre (consommé) : tous hésitent, alliés +10 de garde, 5 dégâts à tous.", "ops": [["invoque", "Garnison réglée", 34, 5], ["garde", "allies", 14], ["pioche", 1], ["si", "troisCartes", [["pioche", 2]]], ["ennemiGarde", 2], ["pose", "Sceau"], ["reveil", "Givre", true, [["hesite", "tous"], ["garde", "allies", 10], ["deg", "tous", 5]]]], "tags": ["Citadelle", "Vent", "Forme ultime +7", "Invocation", "Garde", "Pioche", "Condition", "Prix", "Pose Sceau", "Réveil Givre"], "ambiance": "À Halmgard, soldats, chevaux et nuages vont au pas de l'horloge, et le vent attend son heure pour souffler.", "budget": "45,3 (+31,8 si Givre, soit +70 % ; vérifié)"}
]
```

---

## Ressources

### Les Joncs de Mesqel-Wuha (RES359 · Marais, Sève, éthiopienne)

```json
{
 "fiche": "RES359",
 "nom": "Les Joncs de Mesqel-Wuha",
 "recit": "Sur les rives de Mesqel-Wuha, les bateliers coupent le papyrus à la serpe, le lient en bottes serrées, puis en barques effilées qui ne durent qu'une saison. Gebre noue la dernière corde avec les dents. Une barque neuve, dit-il, flotte mieux le premier jour qu'elle ne flottera jamais.",
 "pal": [
  "Marais de papyrus haut comme deux hommes, bateliers penchés sur des bottes vertes, barques effilées tirées sur la vase, hérons immobiles.",
  "Le papyrus se referme derrière chaque barque ; les bottes s'empilent sur la rive, et les tiges coupées repoussent avant la fin du jour."
 ]
}
```

### Les Fentes de Tezcacuitla (RES064 · Haute montagne, Pierre, aztèque)

```json
{
 "fiche": "RES064",
 "nom": "Les Fentes de Tezcacuitla",
 "recit": "Sur les crêtes de Tezcacuitla, les chercheuses enfoncent le bras nu dans les fentes de la roche et en tirent à tâtons des cristaux de quartz, pour les yeux des statues. Ocoxóchitl a l'épaule couverte d'éraflures. Parfois, ses doigts reviennent mouillés, alors qu'il n'a pas plu depuis des semaines.",
 "pal": [
  "Crêtes grises sous un ciel dur, roche fendue en lames, femmes couchées sur la pierre, le bras enfoncé jusqu'à l'épaule, paniers de cristaux.",
  "Les fentes luisent de l'intérieur ; les cristaux viennent par grappes au premier tâtonnement, et la pierre garde l'empreinte des bras."
 ]
}
```

### Les Platiers de Koh Ambok (RES362 · Récif, Eau, khmère)

```json
{
 "fiche": "RES362",
 "nom": "Les Platiers de Koh Ambok",
 "recit": "À marée basse, sur les platiers de Koh Ambok, les enfants retournent un à un les blocs de corail mort et ramassent dessous les concombres de mer, qu'on sèche ensuite sur des claies. Chaque bloc est remis à l'endroit : sinon, dit-on, la mer ne rend plus rien.",
 "pal": [
  "Platier de corail découvert sous un ciel blanc, enfants accroupis qui retournent des blocs, paniers de jonc, claies de séchage au bord de la plage.",
  "Sous chaque bloc retourné, des concombres de mer serrés comme des doigts ; les claies plient, et la marée remonte plus tard qu'ailleurs."
 ]
}
```

### La Corniche de Xaman K'iin (RES317 · Falaise côtière, Vent, maya)

```json
{
 "fiche": "RES317",
 "nom": "La Corniche de Xaman K'iin",
 "recit": "Du haut de la falaise de Xaman K'iin, les pêcheurs lancent par-dessus le vide des lignes lestées d'un caillou ; le vent du large les porte loin, au-delà des brisants. Le vieux Balam sent mordre à travers une longue chute d'air, et il remonte sans hâte, main sur main.",
 "pal": [
  "Falaise calcaire blanche au-dessus d'une mer turquoise, pêcheurs alignés au bord, lignes tendues dans le vent, paniers à l'abri d'un petit temple.",
  "Les lignes vibrent toutes ensemble ; le vent porte les hameçons jusqu'aux bancs, et les poissons remontent en luisant le long de la paroi."
 ]
}
```

### Les Brisants d'Oswazini (RES140 · Falaise côtière, Vent, zouloue)

```json
{
 "fiche": "RES140",
 "nom": "Les Brisants d'Oswazini",
 "recit": "Aux brisants d'Oswazini, les femmes descendent la falaise à marée basse et détachent les moules au bâton ferré entre deux vagues. Nomvula chante la cadence en regardant le large ; quand elle se tait, toutes remontent sur le rocher, et la vague arrive.",
 "pal": [
  "Falaise noire battue de vent, rochers couverts de moules bleues, femmes aux bâtons ferrés dans l'écume, paniers d'osier calés dans les fentes.",
  "Les moules couvrent la roche en tapis épais ; la mer retient son souffle plus longtemps, et les paniers sont pleins avant la fin du chant."
 ]
}
```

### Les Chenaux de Luoyanwan (RES088 · Mangrove, Eau, chinoise impériale)

```json
{
 "fiche": "RES088",
 "nom": "Les Chenaux de Luoyanwan",
 "recit": "Dans les chenaux de Luoyanwan, le pêcheur Lao Fen mène ses cormorans au bout d'une gaffe, un anneau de paille au cou pour qu'ils n'avalent pas les gros poissons. Le soir, il ôte les anneaux et leur lance leur part. Ils la réclament en criant avant qu'il ait compté.",
 "pal": [
  "Chenaux bruns entre les palétuviers, radeaux de bambou, cormorans noirs alignés sur une perche, lampe de papier pendue à la poupe.",
  "Les cormorans plongent sans répit et remontent le bec plein ; les paniers débordent de poissons argentés, et l'eau des chenaux en est trouble."
 ]
}
```

### L'Apacheta de Kachi Pampa (RES131 · Désert de sel, Pierre, inca)

```json
{
 "fiche": "RES131",
 "nom": "L'Apacheta de Kachi Pampa",
 "recit": "Sur la piste qui traverse le sel de Kachi Pampa, chaque caravanier pose une pierre sur le grand cairn du col, et y laisse sa fatigue avec. Le cairn dépasse aujourd'hui les lamas debout. Au matin, Wayra trouve à son pied une pierre de plus, encore humide de saumure.",
 "pal": [
  "Désert de sel blanc, piste de caravane, lamas chargés de sacs, un grand cairn de pierres grises au col, un homme qui y pose la sienne.",
  "Les cairns se dressent partout, plus hauts qu'un homme, et des pierres neuves y sont posées sans qu'on ait vu passer personne."
 ]
}
```

### Le Fjord d'Ukiuttaq (RES380 · Fjord, Glace, inuit)

```json
{
 "fiche": "RES380",
 "nom": "Le Fjord d'Ukiuttaq",
 "recit": "Au fjord d'Ukiuttaq, avant chaque départ, Aputik garde dans sa bouche une gorgée d'eau chauffée, la souffle sur les patins du traîneau et lisse la pellicule à la peau d'ours, couche après couche, jusqu'à ce que la glace y chante. Les chiens attendent, couchés, qu'elle ait fini.",
 "pal": [
  "Fjord blanc entre des falaises sombres, traîneaux retournés sur la neige, une femme penchée sur les patins, chiens couchés en étoile.",
  "Les patins luisent comme du verre ; les traîneaux glissent seuls sur la pente au moindre coup d'épaule, et les chiens peinent à les suivre."
 ]
}
```

### La Grève de Qasaqucha (RES059 · Fjord, Glace, inca)

```json
{
 "fiche": "RES059",
 "nom": "La Grève de Qasaqucha",
 "recit": "Sur la grève du fjord de Qasaqucha, les familles étalent les pommes de terre pour que la nuit les gèle, puis les retournent à la perche à chaque aube, jusqu'à ce qu'elles deviennent légères comme de l'écorce sèche. Le vieux Mayta les écoute en marchant : bien prises, elles sonnent creux.",
 "pal": [
  "Grève de galets au fond d'un fjord gelé, rangées de pommes de terre noircies par le gel, familles aux perches, montagnes enneigées.",
  "Les rangées couvrent la grève jusqu'à l'eau ; le gel les prend en une seule nuit, et elles s'entrechoquent au vent avec un bruit de bois creux."
 ]
}
```

### Les Futaies de Prey Rongea (RES143 · Forêt boréale, Glace, khmère)

```json
{
 "fiche": "RES143",
 "nom": "Les Futaies de Prey Rongea",
 "recit": "Dans les futaies de Prey Rongea, le cornac Chhay mène son éléphant laineux entre les sapins enneigés ; la bête tire les grumes au bout de chaînes et les pousse du front jusqu'à la rivière gelée. Chhay lui parle. L'éléphant répond d'un souffle, et la neige tombe des branches.",
 "pal": [
  "Forêt de sapins sous la neige, piste tassée, éléphant au long poil roux qui tire une grume, cornac emmitouflé assis sur son cou.",
  "Les grumes s'empilent le long de la rivière gelée ; l'éléphant arrache les troncs morts d'un seul effort, et la piste fume de son haleine."
 ]
}
```

### Le Glacier d'Uxte'kal (RES082 · Glacier, Glace, maya)

```json
{
 "fiche": "RES082",
 "nom": "Le Glacier d'Uxte'kal",
 "recit": "Au pied du glacier d'Uxte'kal, les porteurs remplissent leurs jarres d'eau de fonte et les chargent dans le dos, une sangle sur le front. Ix K'an Pat en monte plusieurs par jour jusqu'au temple sans jamais poser la sienne : l'eau du glacier ne doit pas toucher la terre.",
 "pal": [
  "Front de glacier bleu au-dessus d'une vallée de pierres, ruisseaux de fonte, porteurs courbés sous des jarres, sangles de cuir sur le front.",
  "La fonte jaillit en cascades claires ; les jarres se remplissent d'un seul geste, et la file des porteurs ne s'interrompt plus jusqu'au temple."
 ]
}
```

### La Tourbière d'Aqpivik (RES252 · Marais, Sève, inuit)

```json
{
 "fiche": "RES252",
 "nom": "La Tourbière d'Aqpivik",
 "recit": "Dans la tourbière d'Aqpivik, à la fin de l'été, les femmes peignent la camarine avec des peignes en os de caribou, et les baies noires roulent dans des sacs de peau. Nivi en garde une sous la langue pendant toute la cueillette, pour ne pas avoir soif.",
 "pal": [
  "Tourbière rousse sous un ciel bas, flaques noires, femmes à genoux qui peignent les mousses, sacs de peau gonflés, moustiques en nuages.",
  "Les baies couvrent la tourbière d'un tapis noir et luisant ; un seul coup de peigne remplit la paume, et le jus tache la mousse jusqu'aux genoux."
 ]
}
```
