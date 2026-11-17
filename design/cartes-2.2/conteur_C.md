# Cartes 2.2 : Agent C, le Sournois

Tuiles : Le Puits des Neuf Édits (DON-058), La Foire de Givrecloche (ASS-156, ex MAR-156, jouée en Assemblée), Le Canyon de Fjorhel (ASS-152), L'Oasis de Maulu (ANT-120), Les Dunes de Balo (RES-227).

**Conventions des `ops`** : `[a,b]` = a+bL ; `["affaiblit",n,cible]` ; `["vulnerable",cible,n]` ; `["brulure",cible,n,tours]` ; `["invoque",nom,PV,attaque]` ; `["riposte",n]` ; `["mana",type,n]` ; `["si",condition,[ops]]` avec condition `bete` / `miPV` / `seul` / `hesite` / `garde` ; `["reveil",résonance,consomme,[ops]]`. Pour la Gerbe, L = niveau de la Ressource (1 à 3).
**Conventions du budget** : « tous » compte ×2,2 (dégâts, hésite 4×2,2, affaiblit 3n×2,2, vulnérable 3n×2,2, brise-garde 3×2,2, brûlure n×t×2,2) ; `ignoreGarde` compté 3 ; `volVie` = moitié des dégâts ; `pose` d'un secret comptée 8. Carte de pôle : budget cible coût 1 = 10 → 22,5 ; coût 2 = 16 → 36 (L1 → L6), prix déduits.

## Récapitulatif

| Tuile | Pôle | Carte | Coût | Type | Mécaniques | Prix | Pose | Réveille |
|---|---|---|---|---|---|---|---|---|
| Neuf Édits (Feu) | − Tyrannie | Édit gravé | 2 | Attaque-décret | Dégâts, Contrôle, Marque | 2 PV | | |
| Neuf Édits | + Liberté | Coulée sans maître | 2 | Zone | Perce-garde, Dégâts dans le temps, Récupération | défausse 1 | | |
| Neuf Édits | −7 | Le Neuvième Édit | 3 | Décret de combat | Dégâts, Perce-garde, Affaiblissement, Marque | 4 PV | Sceau | Sang |
| Neuf Édits | +7 | Le Puits Ouvert | 3 | Rituel d'éruption | Dégâts dans le temps, Perce-garde, Écho, Mana | | Braise | Givre |
| Givrecloche (Glace) | − Brume | Scrutin dans la brume | 1 | Défense | Contrôle, Garde | | | |
| Givrecloche | + Clarté | Motion de censure | 1 | Attaque-loi | Pioche, Dégâts, Marque | défausse 1 | | |
| Givrecloche | −7 | Le Scrutin sans visage | 2 | Vote secret | Contrôle de masse, Garde, Pioche, Récupération | | Givre | Abîme |
| Givrecloche | +7 | Le Treizième Carton | 2 | Séance publique | Pioche, Écho, Boost, Contrôle, Marque, Dégâts | défausse 1 | Sceau | Sang |
| Fjorhel (Feu) | − Silence | Loi du tison | 1 | Défense | Riposte, Garde, Affaiblissement | défausse 1 | | |
| Fjorhel | + Chant | Chant à trois voix | 1 | Soutien | Écho, Garde des alliés, Condition | | | |
| Fjorhel | −7 | Le Mutisme de la Faille | 2 | Contre-attaque | Riposte, Garde, Perce-garde, Vol de vie | défausse 2 | Abîme | Sceau |
| Fjorhel | +7 | Les Voix qui Reviennent | 2 | Invocation | Invocation ×2, Garde des alliés, Écho, Pioche | | Racine | Braise |
| Maulu (Sève) | − Glace | Porte de l'aube : Bœuf de givre | 2 | Invocation | Invocation (tank), Garde, Condition-Contrôle | 2 PV | | |
| Maulu | + Feu | Porte de midi : Chacal de braise | 2 | Invocation | Invocation (fragile), Dégâts, Dégâts dans le temps | bête 3 | | |
| Maulu | −7 | Le Troupeau de l'Aube | 3 | Armée | Invocation ×3, Garde des alliés, Affaiblissement, Contrôle | | Racine | Givre |
| Maulu | +7 | Midi Rouge | 3 | Sacrifice | Dégâts de zone, Dégâts dans le temps, Marque | bête 6 | Sang | Racine |
| Dunes de Balo (Feu) | Ressource | Poignée de Balo (N1-3) | 0 | Gerbe | Dégâts dans le temps, Mana | | | |
| 11 secrets | Secret | (voir plus bas) | 0-1 | Utilitaire | Pioche, Récupération, Écho, Marque, Contrôle, Mana, Pose | | Sceau / Abîme (2 secrets) | |

**Chaînes de résonances** (entre tuiles différentes, donc jouables ensemble) :
- Chaîne des −7 : Neuvième Édit (pose Sceau) → Mutisme de la Faille (réveille Sceau, pose Abîme) → Scrutin sans visage (réveille Abîme, pose Givre) → Troupeau de l'Aube (réveille Givre, pose Racine).
- Chaîne des +7 : Puits Ouvert (pose Braise) → Voix qui Reviennent (réveille Braise, pose Racine) → Midi Rouge (réveille Racine, pose Sang) → Treizième Carton (réveille Sang, pose Sceau).
- Ponts entre les deux : Neuvième Édit réveille le Sang de Midi Rouge ; Puits Ouvert réveille le Givre du Scrutin sans visage. Poses : Sceau ×2, Braise, Givre, Abîme, Racine ×2, Sang (les six). Réveils : Sang ×2, Givre ×2, Sceau, Abîme, Braise, Racine (les six).

---

## Le Puits des Neuf Édits (DON-058) · Donjon · Volcan · Feu · Tyrannie / Liberté

**Background (résumé)** : un empereur grava neuf Édits dans un puits au fond du cratère ; la lave obéit et durcit, et le neuvième, sur un sceau de jade céladon, garde au fond quiconque commande le puits.
Morale gravée sous la margelle : un ordre s'applique d'abord à la main qui le grave. Chaque Édit respecté épaissit la croûte, chaque Édit rompu la fend.

- **Pôle − Tyrannie** : les Édits se cumulent ; on frappe sous contrainte, et la règle mord aussi celui qui l'impose.
- **Pôle + Liberté** : les Édits tombent, la lave coule sans maître ; tout brûle, rien ne tient, ni la garde ennemie ni la vôtre.

```json
[
{"id":"DON058-moins","zone":"DON-058","pole":"-","palier":"1-6","nom":"Édit gravé","cout":2,"cible":1,
 "effet":"(6+4L) dégâts à la cible. Nul ne frappera : la cible hésite ce tour et devient Vulnérable 1. Clause : l'Édit s'applique d'abord à la main qui le grave, le héros perd 2 PV.",
 "ops":[["deg","cible",[6,4]],["hesite","cible"],["vulnerable","cible",1],["prixPV",2]],
 "tags":["Pôle −","Dégâts","Contrôle","Marque","Prix"],
 "ambiance":"Nul ne frappera — sauf la main qui grave, et le sceau la brûle en premier.",
 "budget":"16 → 36 (6+4L + 5 + 3 − 2 ; vérifié)"},
{"id":"DON058-plus","zone":"DON-058","pole":"+","palier":"1-6","nom":"Coulée sans maître","cout":2,"cible":0,
 "effet":"Brisez la garde de tous les ennemis ; ils brûlent (1+L) par tour pendant 2 tours. Reprenez en main la dernière carte défaussée. Prix : défaussez 1 carte au hasard (ce qu'on repêche peut repartir).",
 "ops":[["briseGarde","tous"],["brulure","tous",[1,1],2],["recup"],["prixDefausse",1]],
 "tags":["Pôle +","Perce-garde","Dégâts dans le temps","Récupération","Prix"],
 "ambiance":"Les cangues ouvertes flottent sur la lave : on lâche une chose pour en repêcher une autre.",
 "budget":"16,4 → 38,4 (6,6 + 4,4(1+L) + 4 − 3 ; +7 %, dans la tolérance)"},
{"id":"DON058-moins7","zone":"DON-058","pole":"-","palier":"7","nom":"Le Neuvième Édit","cout":3,"cible":1,
 "effet":"Imprimez le sceau. 18 dégâts à la cible, qui ignorent la garde ; la cible hésite. Tous les ennemis perdent 2 d'attaque et deviennent Vulnérables 2 pour le combat. Le héros perd 4 PV. Pose Sceau. Si Sang est posée (consommée) : le sang versé signe l'Édit, 10 dégâts à tous et le héros se soigne de 10.",
 "ops":[["deg","cible",18],["ignoreGarde"],["hesite","cible"],["affaiblit",2,"tous"],["vulnerable","tous",2],["prixPV",4],["pose","Sceau"],["reveil","Sang",true,[["deg","tous",10],["soin","heros",10]]]],
 "tags":["Forme ultime −7","Dégâts","Perce-garde","Affaiblissement","Marque","Prix","Pose Sceau","Réveil Sang"],
 "ambiance":"Imprimé, le neuvième sceau se lit enfin : le puits garde celui qui le commande. Vous commandez.",
 "budget":"48,4 (21 + 5 + 13,2 + 13,2 − 4) + réveil 32 (66 %)"},
{"id":"DON058-plus7","zone":"DON-058","pole":"+","palier":"7","nom":"Le Puits Ouvert","cout":3,"cible":0,
 "effet":"Le puits s'ouvre sur le ciel. Tous les ennemis perdent leur garde et brûlent 5 par tour pendant 3 tours. La prochaine carte de zone jouée ce tour est doublée. +1 mana Feu. Pose Braise. Si Givre est posée (consommée) : la lave rencontre la glace, 16 dégâts à tous.",
 "ops":[["brulure","tous",5,3],["briseGarde","tous"],["echo"],["mana","Feu",1],["pose","Braise"],["reveil","Givre",true,[["deg","tous",16]]]],
 "tags":["Forme ultime +7","Dégâts dans le temps","Perce-garde","Écho","Mana","Pose Braise","Réveil Givre"],
 "ambiance":"Plus de margelle, plus d'étages : la lave jaillit en fontaines, et le céladon marque où.",
 "budget":"48,6 (33 + 6,6 + 6 + 3) + réveil 35,2 (72 %)"}
]
```

---

## La Foire de Givrecloche (ASS-156, ex MAR-156) · Assemblée · Glacier · Glace · Brume / Clarté

**Background (résumé)** : sous le clocher pris dans le glacier, le Chapitre des douze chanoines tient la séance ; ils ne mentent jamais, leurs règles sont à la craie, et la Maison prend le treizième lot.
Désormais on y vote des lois plutôt que des lots : dans la brume, le scrutin est scellé et sans visage ; par temps clair, chaque motion est lue en public, et l'orgue qui saute une mesure annonce le bulletin vide.

- **Pôle − Brume** : le vote secret ; l'adversaire attend un verdict qui ne vient pas, et vous vous cachez derrière la glace dépolie.
- **Pôle + Clarté** : le vote à la craie ; la motion est juste, lue en clair, et frappe le contrevenant — mais la Maison prend toujours sa part.

```json
[
{"id":"ASS156-moins","zone":"ASS-156","pole":"-","palier":"1-6","nom":"Scrutin dans la brume","cout":1,"cible":1,
 "effet":"La cible hésite ce tour : son bulletin se perd dans la brume. Vous gagnez (2+3L) de garde.",
 "ops":[["hesite","cible"],["garde","heros",[2,3]]],
 "tags":["Pôle −","Contrôle","Garde"],
 "ambiance":"Le bulletin part dans la brume ; l'adversaire attend un verdict que personne ne lira tout haut.",
 "budget":"9 → 21 (5 + 0,8(2+3L) ; −10 % / −7 %, dans la tolérance)"},
{"id":"ASS156-plus","zone":"ASS-156","pole":"+","palier":"1-6","nom":"Motion de censure","cout":1,"cible":1,
 "effet":"Piochez 1 carte. (3+3L) dégâts à la cible, qui devient Vulnérable 1. Prix : la Maison prend sa part, défaussez 1 carte au hasard.",
 "ops":[["pioche",1],["deg","cible",[3,3]],["vulnerable","cible",1],["prixDefausse",1]],
 "tags":["Pôle +","Pioche","Dégâts","Marque","Prix"],
 "ambiance":"Écrite à la craie au-dessus de la table, la motion est juste ; la Maison prend quand même sa part.",
 "budget":"10 → 25 (4 + 3+3L + 3 − 3 ; +11 % à L6)"},
{"id":"ASS156-moins7","zone":"ASS-156","pole":"-","palier":"7","nom":"Le Scrutin sans visage","cout":2,"cible":0,
 "effet":"Treize capuches votent à l'aveugle. Tous les ennemis hésitent et perdent 1 d'attaque. Vous gagnez 24 de garde. Piochez 2 cartes et reprenez la dernière défaussée. Pose Givre. Si Abîme est posée (consommée) : le feutre vert de mousse cède sur la crevasse, la garde de tous les ennemis tombe et ils subissent 12 dégâts.",
 "ops":[["hesite","tous"],["affaiblit",1,"tous"],["garde","heros",24],["pioche",2],["recup"],["pose","Givre"],["reveil","Abîme",true,[["briseGarde","tous"],["deg","tous",12]]]],
 "tags":["Forme ultime −7","Contrôle","Affaiblissement","Garde","Pioche","Récupération","Pose Givre","Réveil Abîme"],
 "ambiance":"Treize capuches votent dans la brume ; le vert de mousse s'ouvre sous ceux qui ont mal compté.",
 "budget":"46,6 (8,8 + 6,6 + 19,2 + 8 + 4) + réveil 33 (71 %)"},
{"id":"ASS156-plus7","zone":"ASS-156","pole":"+","palier":"7","nom":"Le Treizième Carton","cout":2,"cible":1,
 "effet":"Le carton sans trou défile : la cible hésite et devient Vulnérable 3, puis subit 12 dégâts. Piochez 3 cartes ; la prochaine carte de zone est doublée ; boost : +1 de capacité ce tour. Prix : défaussez 1 carte. Pose Sceau. Si Sang est posée (consommée) : la Maison rend la part du sang versé, le héros se soigne de 15, piochez 2, +3 mana Glace.",
 "ops":[["hesite","cible"],["vulnerable","cible",3],["deg","cible",12],["pioche",3],["echo"],["boost"],["prixDefausse",1],["pose","Sceau"],["reveil","Sang",true,[["soin","heros",15],["pioche",2],["mana","Glace",3]]]],
 "tags":["Forme ultime +7","Contrôle","Marque","Dégâts","Pioche","Écho","Boost","Prix","Pose Sceau","Réveil Sang"],
 "ambiance":"Le treizième carton n'a aucun trou : l'orgue se tait pendant qu'il défile, et c'est là qu'on frappe.",
 "budget":"47 (5 + 9 + 12 + 12 + 6 + 6 − 3) + réveil 32 (68 %) ; seul boost de mes cartes"}
]
```

---

## Le Canyon de Fjorhel (ASS-152) · Assemblée · Canyon · Feu · inspiration nordique · Silence / Chant

**Background** : Au fond du canyon de Fjorhel, l'assemblée ne vote pas à main levée : elle vote à l'écho. Vous montez sur la pierre-de-parole, rouge et chaude des braseros, et vous énoncez votre loi. La paroi répond trois fois — si la loi est juste, la troisième voix revient plus forte que la vôtre. Les anciens préfèrent poser un tison au pied de la pierre et se taire : s'il s'éteint avant qu'on ait parlé, la loi passe sans un mot, et nul ne peut plus la contredire. Un tison dure trois souffles. Comptez-les.

- **Pôle − Silence** : le vote au tison ; ce qui n'est pas dit ne se conteste pas. On encaisse, on se tait, et chaque coup revient à qui l'a porté.
- **Pôle + Chant** : le vote à l'écho ; la paroi double ce qu'on lui confie, et les voix qui reviennent finissent par descendre marcher avec vous.

```json
[
{"id":"ASS152-moins","zone":"ASS-152","pole":"-","palier":"1-6","nom":"Loi du tison","cout":1,"cible":1,
 "effet":"Jusqu'au prochain tour, chaque coup reçu renvoie (2+L) dégâts. Vous gagnez (4+L) de garde. La cible perd 1 d'attaque. Prix : ce qui n'est pas dit se perd, défaussez 1 carte au hasard.",
 "ops":[["riposte",[2,1]],["garde","heros",[4,1]],["affaiblit",1,"cible"],["prixDefausse",1]],
 "tags":["Pôle −","Riposte","Garde","Affaiblissement","Prix"],
 "ambiance":"Le tison s'éteint avant qu'on ait parlé : la loi passe, et chaque coup revient à son porteur.",
 "budget":"10 → 24 (2(2+L) + 0,8(4+L) + 3 − 3 ; +7 % à L6)"},
{"id":"ASS152-plus","zone":"ASS-152","pole":"+","palier":"1-6","nom":"Chant à trois voix","cout":1,"cible":0,
 "effet":"La paroi répond : la prochaine carte de zone jouée ce tour a son effet doublé. Vous et vos bêtes gagnez (1+3L) de garde. Si une bête est en jeu, piochez 1 carte.",
 "ops":[["echo"],["garde","allies",[1,3]],["si","bete",[["pioche",1]]]],
 "tags":["Pôle +","Écho","Garde","Condition","Pioche"],
 "ambiance":"Vous chantez une fois, la paroi rouge répond trois — la troisième voix plus forte que la vôtre.",
 "budget":"9,2 → 21,2 sans bête, 11,2 → 23,2 avec (6 + 0,8(1+3L) + 2 en moyenne ; vérifié)"},
{"id":"ASS152-moins7","zone":"ASS-152","pole":"-","palier":"7","nom":"Le Mutisme de la Faille","cout":2,"cible":1,
 "effet":"Trois souffles, puis plus rien. Jusqu'au prochain tour, chaque coup reçu renvoie 10 dégâts ; vous gagnez 15 de garde. 12 dégâts à la cible, qui ignorent la garde ; vous vous soignez de la moitié. Prix : défaussez 2 cartes. Pose Abîme. Si Sceau est posée (consommée) : la loi tue tous les mots, tous les ennemis hésitent et perdent 2 d'attaque, piochez 2.",
 "ops":[["riposte",10],["garde","heros",15],["deg","cible",12],["ignoreGarde"],["volVie"],["prixDefausse",2],["pose","Abîme"],["reveil","Sceau",true,[["hesite","tous"],["affaiblit",2,"tous"],["pioche",2]]]],
 "tags":["Forme ultime −7","Riposte","Garde","Dégâts","Perce-garde","Vol de vie","Prix","Pose Abîme","Réveil Sceau"],
 "ambiance":"Trois souffles, puis plus rien : la faille avale vos mots, vos cartes et la colère d'en face.",
 "budget":"47 (20 + 12 + 21 − 6) + réveil 30 (64 %)"},
{"id":"ASS152-plus7","zone":"ASS-152","pole":"+","palier":"7","nom":"Les Voix qui Reviennent","cout":2,"cible":0,
 "effet":"Deux Écho-Chanteurs descendent de la paroi (12 PV, frappent 5 chacun). Vous et vos bêtes gagnez 10 de garde. La prochaine carte de zone est doublée. Piochez 1. Pose Racine. Si Braise est posée (consommée) : le chant attise les braseros, tous les ennemis brûlent 4 pendant 3 tours et subissent 6 dégâts.",
 "ops":[["invoque","Écho-Chanteur",12,5],["invoque","Écho-Chanteur",12,5],["garde","allies",10],["echo"],["pioche",1],["pose","Racine"],["reveil","Braise",true,[["brulure","tous",4,3],["deg","tous",6]]]],
 "tags":["Forme ultime +7","Invocation","Garde","Écho","Pioche","Pose Racine","Réveil Braise"],
 "ambiance":"Les échos ne repartent plus : ils descendent de la paroi, prennent pied, et chantent avec vous.",
 "budget":"45 (13,5 × 2 + 8 + 6 + 4) + réveil 39,6 (88 %)"}
]
```

---

## L'Oasis de Maulu (ANT-120) · Antre · Oasis · Sève · inspiration zouloue · Glace / Feu

**Background** : Il était une fois une source qui ne voulait servir qu'un troupeau à la fois. Les bergers de Maulu bâtirent autour d'elle un enclos rond de pierres sèches, à deux portes : celle de l'aube, où l'eau gèle en dalles bleues, et celle de midi, où elle bout. Les bêtes de la nuit entrent par l'une, celles du soleil par l'autre, jamais ensemble. La source n'abreuve que trois bêtes — la quatrième boit à votre place. Morale gravée sur le linteau : on n'invite pas le gel et la braise à la même auge.

- **Pôle − Glace** : la porte de l'aube ; les bœufs de givre entrent lents et lourds, tiennent l'auge et figent ce qui s'en approche.
- **Pôle + Feu** : la porte de midi ; les bêtes du soleil mordent vite et ne durent pas, car le feu mange ce qu'il abreuve.

```json
[
{"id":"ANT120-moins","zone":"ANT-120","pole":"-","palier":"1-6","nom":"Porte de l'aube : Bœuf de givre","cout":2,"cible":1,
 "effet":"Un bœuf de givre entre dans l'enclos ((8+4L) PV, frappe (1+L)). Vous gagnez 5 de garde. Si une bête est en jeu, la cible hésite ce tour. Prix : le froid de l'aube coûte 2 PV au héros.",
 "ops":[["invoque","Bœuf de givre",[8,4],[1,1]],["garde","heros",5],["si","bete",[["hesite","cible"]]],["prixPV",2]],
 "tags":["Pôle −","Invocation","Garde","Condition","Contrôle","Prix"],
 "ambiance":"Par la porte de l'aube, le bœuf de givre entre lent et lourd ; l'auge gèle sous son mufle.",
 "budget":"16 → 33,5 (5,5+3,5L + 4 + 5 − 2 ; −7 % à L6)"},
{"id":"ANT120-plus","zone":"ANT-120","pole":"+","palier":"1-6","nom":"Porte de midi : Chacal de braise","cout":2,"cible":1,
 "effet":"Un chacal de braise entre (5 PV, frappe (3+L)). La cible subit (4+L) dégâts puis brûle (1+L) pendant 2 tours. Prix : votre bête la plus faible perd 3 PV (souvent le chacal lui-même).",
 "ops":[["invoque","Chacal de braise",5,[3,1]],["deg","cible",[4,1]],["brulure","cible",[1,1],2],["prixBete",3]],
 "tags":["Pôle +","Invocation","Dégâts","Dégâts dans le temps","Prix"],
 "ambiance":"Par la porte de midi, le chacal mord vite : à cette auge, le feu mange ce qu'il abreuve.",
 "budget":"14,5 → 37 (7+1,5L + 4+L + 2+2L − 3 ; −9 % / +3 %)"},
{"id":"ANT120-moins7","zone":"ANT-120","pole":"-","palier":"7","nom":"Le Troupeau de l'Aube","cout":3,"cible":1,
 "effet":"Trois bœufs de givre, pas un de plus (10 PV, frappent 3 chacun). Vous et vos bêtes gagnez 10 de garde. Tous les ennemis perdent 1 d'attaque ; la cible hésite. Pose Racine. Si Givre est posée (consommée) : l'auge gèle d'un bloc, tous les ennemis hésitent et perdent 2 d'attaque, vos alliés se soignent de 12.",
 "ops":[["invoque","Bœuf de givre",10,3],["invoque","Bœuf de givre",10,3],["invoque","Bœuf de givre",10,3],["garde","allies",10],["affaiblit",1,"tous"],["hesite","cible"],["pose","Racine"],["reveil","Givre",true,[["hesite","tous"],["affaiblit",2,"tous"],["soin","allies",12]]]],
 "tags":["Forme ultime −7","Invocation","Garde","Affaiblissement","Contrôle","Pose Racine","Réveil Givre"],
 "ambiance":"Trois bœufs à l'auge, pas un de plus : la source n'en abreuve que trois, et les garde gelés.",
 "budget":"48,1 (9,5 × 3 + 8 + 6,6 + 5) + réveil 34 (71 %)"},
{"id":"ANT120-plus7","zone":"ANT-120","pole":"+","palier":"7","nom":"Midi Rouge","cout":3,"cible":0,
 "effet":"La meute se jette dans l'eau qui bout. Votre bête la plus faible perd 6 PV. 12 dégâts à tous les ennemis, qui brûlent 3 pendant 3 tours et deviennent Vulnérables 1. Pose Sang. Si Racine est posée (consommée) : chaque bête se sacrifie à la source, 15 dégâts à tous, ignorant la garde.",
 "ops":[["prixBete",6],["deg","tous",12],["brulure","tous",3,3],["vulnerable","tous",1],["pose","Sang"],["reveil","Racine",true,[["deg","tous",15],["ignoreGarde"]]]],
 "tags":["Forme ultime +7","Dégâts","Dégâts dans le temps","Marque","Prix","Pose Sang","Réveil Racine"],
 "ambiance":"À midi, la quatrième bête boit à votre place, et toute la meute plonge dans l'eau qui bout.",
 "budget":"46,8 (26,4 + 19,8 + 6,6 − 6) + réveil 36 (77 %)"}
]
```

---

## Les Dunes de Balo (RES-227) · Ressource · Désert de sable · Feu · inspiration zouloue

**Background** : Les dunes de Balo gardent la foudre. Là où elle tombe, le sable fond en tubes de verre creux que les gardiennes de troupeaux ramassent à l'aube, avant que le soleil les rende brûlants. Une poignée dans la paume, une poignée dans le feu : c'est le compte. Lancé au visage, ce sable mord encore deux fois, comme la chaleur de la journée qui ne quitte pas la dune avant la nuit.

```json
[
{"id":"RES227-gerbe","zone":"RES-227","pole":"res","palier":"1-3","nom":"Poignée de Balo","cout":0,"cible":1,
 "effet":"La cible brûle (1+N) par tour pendant 2 tours. Une poignée dans le feu : +1 mana Feu.",
 "ops":[["brulure","cible",[1,1],2],["mana","Feu",1]],
 "tags":["Ressource","Gerbe","Dégâts dans le temps","Mana"],
 "ambiance":"Une poignée dans la paume, une dans le feu : le sable de Balo mord deux fois avant la nuit.",
 "budget":"7 / 9 / 11 (2(1+N) + 3 ; exact)"}
]
```

---

## Secrets du Puits des Neuf Édits (6 cartes utilitaires)

```json
[
{"id":"DON058-secret-1","zone":"DON-058","pole":"secret","palier":"-","secret":"Le sceau de jade céladon","nom":"Le Sceau imprimé","cout":1,"cible":0,
 "effet":"Posez la résonance Sceau. Cette carte quitte le combat.",
 "ops":[["pose","Sceau"],["exil"]],
 "tags":["Secret","Utilitaire","Combo","Exil"],
 "ambiance":"Gravé à l'envers, il ne se lit qu'imprimé : une fois posé, toutes les lois en dépendent.",
 "budget":"8 (pose comptée 8)"},
{"id":"DON058-secret-2","zone":"DON-058","pole":"secret","palier":"-","secret":"L'Édit que personne n'a gravé","nom":"L'Édit blanc","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte défaussée, puis piochez 1 carte.",
 "ops":[["recup"],["pioche",1]],
 "tags":["Secret","Utilitaire","Récupération","Pioche"],
 "ambiance":"Une tablette vierge au-dessus de la fontaine : ce qu'aucun Édit n'interdit, vous pouvez le reprendre.",
 "budget":"8"},
{"id":"DON058-secret-3","zone":"DON-058","pole":"secret","palier":"-","secret":"Une main tamponnée","nom":"Main tamponnée","cout":0,"cible":1,
 "effet":"La cible devient Vulnérable 2 jusqu'à la fin du combat.",
 "ops":[["vulnerable","cible",2]],
 "tags":["Secret","Utilitaire","Marque"],
 "ambiance":"L'encre vermillon ne part pas : chaque inspecteur du puits sait désormais qui frapper.",
 "budget":"6"},
{"id":"DON058-secret-4","zone":"DON-058","pole":"secret","palier":"-","secret":"Panier de fleurs de soufre","nom":"Panier de soufre","cout":0,"cible":0,
 "effet":"+3 mana Feu. Cette carte quitte le combat.",
 "ops":[["mana","Feu",3],["exil"]],
 "tags":["Secret","Utilitaire","Mana","Exil"],
 "ambiance":"Les soufriers l'ont laissé sur la pagode de guet : jaune, sec, et prêt à prendre feu.",
 "budget":"9"},
{"id":"DON058-secret-5","zone":"DON-058","pole":"secret","palier":"-","secret":"La dalle qui ne ment pas","nom":"La dalle qui ne ment pas","cout":1,"cible":1,
 "effet":"La cible hésite ce tour. Piochez 1 carte.",
 "ops":[["hesite","cible"],["pioche",1]],
 "tags":["Secret","Utilitaire","Contrôle","Pioche"],
 "ambiance":"Parmi tous ces verts presque pareils, une seule dalle luit un peu plus : vous y posez le pied.",
 "budget":"9"},
{"id":"DON058-secret-6","zone":"DON-058","pole":"secret","palier":"-","secret":"La cangue qui flotte","nom":"La cangue qui flotte","cout":1,"cible":0,
 "effet":"Reprenez en main la dernière carte défaussée. La prochaine carte de zone jouée ce tour a son effet doublé.",
 "ops":[["recup"],["echo"]],
 "tags":["Secret","Utilitaire","Récupération","Écho"],
 "ambiance":"Ouverte, la cangue sert de radeau : elle ramène à la rive ce que la lave allait garder.",
 "budget":"10"}
]
```

## Secrets de Givrecloche (5 cartes utilitaires)

```json
[
{"id":"ASS156-secret-1","zone":"ASS-156","pole":"secret","palier":"-","secret":"La cloche misée","nom":"La cloche misée","cout":1,"cible":0,
 "effet":"Tous les ennemis hésitent ce tour : ils attendent un signal qui ne sonnera pas. Cette carte quitte le combat.",
 "ops":[["hesite","tous"],["exil"]],
 "tags":["Secret","Utilitaire","Contrôle","Exil"],
 "ambiance":"L'abbesse l'a perdue au brelan : depuis, toute l'assemblée attend un coup qui ne vient jamais.",
 "budget":"8,8"},
{"id":"ASS156-secret-2","zone":"ASS-156","pole":"secret","palier":"-","secret":"Lot scellé numéro treize","nom":"Lot scellé numéro treize","cout":0,"cible":0,
 "effet":"Piochez 2 cartes et gagnez 1 mana Glace. Prix : défaussez 1 carte au hasard.",
 "ops":[["pioche",2],["mana","Glace",1],["prixDefausse",1]],
 "tags":["Secret","Utilitaire","Pioche","Mana","Prix"],
 "ambiance":"Sous le feutre de mousse givrée, le lot treize : on l'ouvre, et la Maison garde un morceau.",
 "budget":"8 (8 + 3 − 3)"},
{"id":"ASS156-secret-3","zone":"ASS-156","pole":"secret","palier":"-","secret":"Le treizième carton","nom":"Le carton sans trou","cout":1,"cible":0,
 "effet":"Posez la résonance Abîme. Cette carte quitte le combat.",
 "ops":[["pose","Abîme"],["exil"]],
 "tags":["Secret","Utilitaire","Combo","Exil"],
 "ambiance":"Aucun trou, aucune note : glissé dans l'orgue, il ouvre un silence où tout peut tomber.",
 "budget":"8 (pose comptée 8)"},
{"id":"ASS156-secret-4","zone":"ASS-156","pole":"secret","palier":"-","secret":"Le brelan de l'abbesse","nom":"Le brelan de l'abbesse","cout":0,"cible":0,
 "effet":"Piochez 3 cartes, puis défaussez-en 2 au hasard.",
 "ops":[["pioche",3],["prixDefausse",2]],
 "tags":["Secret","Utilitaire","Pioche","Prix"],
 "ambiance":"Trois dés sur l'autel, la même face : la main qui a misé la cloche, rejouée par la vôtre.",
 "budget":"6 (12 − 6)"},
{"id":"ASS156-secret-5","zone":"ASS-156","pole":"secret","palier":"-","secret":"La gargouille qui compte","nom":"La gargouille qui compte","cout":0,"cible":1,
 "effet":"Piochez 1 carte. La cible devient Vulnérable 1.",
 "ops":[["pioche",1],["vulnerable","cible",1]],
 "tags":["Secret","Utilitaire","Pioche","Marque"],
 "ambiance":"Elle compte les mises depuis l'égout du toit, et elle a déjà vu où l'adversaire flanche.",
 "budget":"7"}
]
```

---

**Changements par rapport à la 2.1**
1. Les pôles ne sont plus des miroirs : Tyrannie frappe sous clause et Liberté brise toutes les gardes ; Brume fige quand Clarté censure ; Silence riposte quand Chant fait écho ; Glace tient l'auge quand Feu brûle ses propres bêtes. La Loi du Silence et la Loi du Chant (pioche + hésite / pioche + garde) sont remplacées.
2. Givrecloche est réécrite en Assemblée (scrutin, motion de censure, séance publique), le Lot de clarté à coût 0 avec boost dès L5 disparaît (un seul boost : la forme +7), et chaque carte reprend un indice du background (trois souffles, trois bêtes, treizième carton, deux morsures du sable).
3. Les huit formes ultimes changent de nature (frappe → décret, sort → éruption, invocation → armée ou sacrifice) et forment deux chaînes complètes, une −7 et une +7, reliées par deux ponts ; la Gerbe de Balo passe de « pioche + dégâts » à une brûlure en deux temps qui rend du mana Feu.
