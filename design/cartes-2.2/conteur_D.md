# Cartes 2.2 : conteur D (le Lovecraftien)

Tuiles : Chinampas Dérivantes de Tezcamixtli (RES334, d'origine), Fjord de Rames (DON024), Cavernes de cristal de Balpak (ASS012), Taïga de Chika (RES374), Canyon de Zima (RES345).

Conventions de calcul (section 3 des consignes) : « tous » sur dégâts et brûlure = ×2,2 ; « tous » sur hésite, affaiblit, vulnérable, brise-garde = ×2,5 ennemis ; prix `ennemiSoin` n = n × 2,2 ; `ennemiGarde` n = 2n. Les budgets des cartes de pôle sont donnés au palier 1 → palier 6 (cible entre parenthèses).

## Récapitulatif

| Carte | Tuile | Pôle | Coût | Type | Mécaniques | Résonance | Prix |
|---|---|---|---|---|---|---|---|
| Le coup d'en dessous | Fjord de Rames (Glace) | − Cauchemar, 1-6 | 1 | Attaque de contrôle | Dégâts, Contrôle, Affaiblissement | — | 3 PV |
| Le dormeur qui rame | Fjord de Rames (Glace) | + Rêve, 1-6 | 2 | Invocation | Invocation, Pioche | — | aucun |
| Les rames rentrées | Fjord de Rames (Glace) | −7 | 2 | Rituel de gel de zone | Dégâts à tous, Perce-garde, Contrôle, Affaiblissement, Marque | pose Givre · réveille Abîme | 6 PV |
| Le rêve des douze rames | Fjord de Rames (Glace) | +7 | 3 | Rituel de main (ressources) | Pioche, Mana, Boost, Écho, Récupération, Invocation | pose Sceau · réveille Racine | ennemis +3 garde |
| Loi des Cendres | Cavernes de Balpak (Pierre) | − Cendre, 1-6 | 2 | Loi (brûlure) | Dégâts dans le temps, Pioche | — | défausse 1 |
| Loi de Floraison | Cavernes de Balpak (Pierre) | + Floraison, 1-6 | 1 | Loi (marque et soin) | Marque, Soin d'alliés, Pioche | — | ennemis soignés de 2 |
| Le Siège de cendre | Cavernes de Balpak (Pierre) | −7 | 3 | Scrutin forcé | Contrôle, Perce-garde, Dégâts dans le temps, Écho | pose Braise · réveille Sceau | aucun |
| Le Conseil en fleur | Cavernes de Balpak (Pierre) | +7 | 2 | Armée qui se nourrit d'elle-même | Invocation ×2, Soin d'alliés, Marque, Pioche | pose Racine · réveille Sang | bête −6 PV |
| Galette du premier grain | Tezcamixtli (Vent) | Gerbe 1-3 | 0 | Gerbe | Pioche, Soin | — | — |
| Gerbe de résine | Taïga de Chika (Glace) | Gerbe 1-3 | 0 | Gerbe | Pioche, Garde | — | — |
| Braise de bouse | Canyon de Zima (Feu) | Gerbe 1-3 | 0 | Gerbe | Pioche, Dégâts dans le temps | — | — |
| Une entaille de plus | Tezcamixtli | Secret | 0 | Utilitaire | Pioche, Marque | — | — |
| Bouture de l'Île-Mère | Tezcamixtli | Secret | 1 | Utilitaire | Écho, Mana | — | — |
| La ronde des galles | Tezcamixtli | Secret | 1 | Utilitaire | Contrôle de zone, Exil | — | défausse 1 |
| L'île qui revient | Tezcamixtli | Secret | 0 | Utilitaire | Récupération, Mana | — | — |
| Le panier encore plein | Tezcamixtli | Secret | 1 | Utilitaire | Pioche | — | — |
| Le rang que personne n'a semé | Tezcamixtli | Secret | 0 | Utilitaire | Affaiblissement, Pioche | — | — |
| Les sandales dans les racines | Tezcamixtli | Secret | 1 | Utilitaire (amorce de combo) | Combo, Exil | pose Abîme | exil |

**Chaînes possibles entre mes formes ultimes** : Le Conseil en fleur (pose Racine) → Le rêve des douze rames (réveille Racine, pose Sceau) → Le Siège de cendre (réveille Sceau, pose Braise) → toute forme ultime d'un autre conteur qui réveille Braise. Les rames rentrées posent Givre pour les autres conteurs et attendent Abîme, que peut poser le secret « Les sandales dans les racines ».

Prix : pôle − = 3 cartes à prix (coup d'en dessous, rames rentrées, loi des Cendres) ; pôle + = 3 cartes à prix (rêve des douze rames, loi de Floraison, conseil en fleur). Boost : une seule carte (Le rêve des douze rames, palier 7).

---

## Les Chinampas Dérivantes de Tezcamixtli (RES334 · Ressource · Îles flottantes · Vent · aztèque)

**Background (résumé de RES-334).** Les jardins du lac évaporé flottent à hauteur de nuage ; on y récolte le maïs bleu comme avant, les vieux comptent les tiges sur des baguettes entaillées, et certaines années une galle fait danser ceux qui en mangent.
Chaque soir, l'île du nord a un rang de maïs de plus et un cultivateur de moins ; la Folie vient de la galle, la Raison d'une lucidité tranquille qui accepte la croissance. Personne ne le cherche.

Ressource : pas de pôle, niveaux 1 à 3.

```json
[
{"id":"RES334-gerbe","zone":"RES334","pole":"res","palier":"1-3","nom":"Galette du premier grain","cout":0,"cible":0,
 "effet":"Piochez 1 carte. Le héros se soigne de (1+2L).",
 "ops":[["pioche",1],["soin","heros",[1,2]]],
 "tags":["Ressource","Gerbe","Vent","Pioche","Soin"],
 "ambiance":"Galette du premier grain : l'esprit clair, la langue lente, et le compte des tiges juste, pour cette fois.",
 "budget":"7 / 9 / 11 (vérifié)"}
]
```

### Secrets de Tezcamixtli (7 cartes utilitaires, un exemplaire chacune)

```json
[
{"id":"RES334-secret1","zone":"RES334","pole":"secret","palier":"fixe","secret":"La baguette entaillée","nom":"Une entaille de plus","cout":0,"cible":1,
 "effet":"Piochez 1 carte. La cible devient vulnérable 1 : on l'a comptée une fois de trop.",
 "ops":[["pioche",1],["vulnerable",1,"cible"]],
 "tags":["Secret","Utilitaire","Pioche","Marque"],
 "ambiance":"Les vieux recomptent les tiges : une entaille de plus que de cultivateurs, et l'entaille en trop porte votre ennemi.",
 "budget":"7 (vérifié)"},
{"id":"RES334-secret2","zone":"RES334","pole":"secret","palier":"fixe","secret":"Bouture de l'Île-Mère","nom":"Bouture de l'Île-Mère","cout":1,"cible":0,
 "effet":"Ajoutez 1 mana Vent. La prochaine carte de zone jouée ce tour a son effet doublé.",
 "ops":[["mana","Vent",1],["echo"]],
 "tags":["Secret","Utilitaire","Mana","Écho"],
 "ambiance":"Une bouture de la taille d'une galette, qui grossit d'une main par jour dans votre paume fermée.",
 "budget":"9 (vérifié)"},
{"id":"RES334-secret3","zone":"RES334","pole":"secret","palier":"fixe","secret":"Galle de Tezcamixtli","nom":"La ronde des galles","cout":1,"cible":0,
 "effet":"La galle éclate : tous les ennemis dansent et hésitent ce tour. Défaussez 1 carte au hasard. Exil.",
 "ops":[["hesite","tous"],["prixDefausse",1],["exil"]],
 "tags":["Secret","Utilitaire","Contrôle","Prix","Exil"],
 "ambiance":"Une galle brune éclate en spores ; tous dansent à rebours jusqu'au soir, et une carte se perd dans la ronde.",
 "budget":"10 − 3 = 7 (vérifié)"},
{"id":"RES334-secret4","zone":"RES334","pole":"secret","palier":"fixe","secret":"La danse à rebours","nom":"L'île qui revient","cout":0,"cible":0,
 "effet":"Reprenez en main la dernière carte de votre défausse. Ajoutez 1 mana Vent.",
 "ops":[["recup"],["mana","Vent",1]],
 "tags":["Secret","Utilitaire","Récupération","Mana"],
 "ambiance":"L'île revient porter ce qu'elle avait emporté ; elle remonte contre le vent, à la vitesse d'un pas.",
 "budget":"7 (vérifié)"},
{"id":"RES334-secret5","zone":"RES334","pole":"secret","palier":"fixe","secret":"Le panier du cultivateur manquant","nom":"Le panier encore plein","cout":1,"cible":0,
 "effet":"Piochez 2 cartes.",
 "ops":[["pioche",2]],
 "tags":["Secret","Utilitaire","Pioche"],
 "ambiance":"Suspendu sous l'île du nord, le panier est encore plein ; les épis ont continué de mûrir sans lui.",
 "budget":"8 (vérifié)"},
{"id":"RES334-secret6","zone":"RES334","pole":"secret","palier":"fixe","secret":"Le rang de plus","nom":"Le rang que personne n'a semé","cout":0,"cible":1,
 "effet":"La cible perd 1 d'attaque pour le combat. Piochez 1 carte.",
 "ops":[["affaiblit",1,"cible"],["pioche",1]],
 "tags":["Secret","Utilitaire","Affaiblissement","Pioche"],
 "ambiance":"Un rang de maïs que personne n'a semé ; à la lanterne, il dépasse les autres d'une tête exactement.",
 "budget":"7 (vérifié)"},
{"id":"RES334-secret7","zone":"RES334","pole":"secret","palier":"fixe","secret":"La crypte de racines","nom":"Les sandales dans les racines","cout":1,"cible":0,
 "effet":"Pose la résonance Abîme pour le combat (réveil à moitié). Prix : défaussez 1 carte. Exil.",
 "ops":[["pose","Abîme"],["prixDefausse",1],["exil"]],
 "tags":["Secret","Utilitaire","Combo","Exil"],
 "ambiance":"Au bas de la passerelle, deux sandales posées bien droites ; les racines ont poussé dans les lanières.",
 "budget":"≈ 6 (pose estimée comme un écho ; à valider par le game design)"}
]
```

---

## Le Fjord de Rames (DON024 · Donjon · Fjord · Glace · égyptienne · Cauchemar / Rêve)

**Background.** *Relevé du pilote de la barque aux douze rames, troisième hiver.* Le fjord gèle par le fond et non par la surface : sous la coque, les embaumés de la vallée se tiennent debout dans la glace bleue, serrés dans leurs bandelettes, les yeux peints ouverts, leurs viscères rangés dans des jarres scellées au bord de l'eau. Nous ramons au-dessus d'eux à heure fixe, pour qu'ils dorment. Douze rames, douze rameurs, cent quarante coups jusqu'au glacier. Hier, cent quarante et un. Le coup de plus ne venait pas de nous. Les rameurs disent qu'ils font tous le même rêve depuis, et que dans ce rêve ils sont

- **Pôle − (Cauchemar)** : les dormeurs rêvent mal ; leur rêve remonte le long des rames, le fjord gèle vers le haut, et ceux qui rament s'éveillent avec la glace du fond dans les poumons.
- **Pôle + (Rêve)** : les dormeurs rêvent bien ; ils rêvent qu'ils rament, et sous la glace fendue des bras bandés rament avec vous, dans votre rythme, un coup de plus à chaque traversée.

```json
[
{"id":"DON024-moins","zone":"DON024","pole":"-","palier":"1-6","nom":"Le coup d'en dessous","cout":1,"cible":1,
 "effet":"(1+3L) dégâts à la cible ; elle hésite ce tour et perd 1 d'attaque pour le combat. Le froid du fond coûte 3 PV au héros.",
 "ops":[["deg","cible",[1,3]],["hesite","cible"],["affaiblit",1,"cible"],["prixPV",3]],
 "tags":["Donjon","Glace","Pôle −","Dégâts","Contrôle","Affaiblissement","Prix"],
 "ambiance":"Cent quarante coups jusqu'au glacier ; le cent quarante et unième remonte par la rame, et il est froid.",
 "budget":"9 → 24 (cible 10 → 22,5 ; vérifié)"},
{"id":"DON024-plus","zone":"DON024","pole":"+","palier":"1-6","nom":"Le dormeur qui rame","cout":2,"cible":0,
 "effet":"Un dormeur aux bandelettes se lève de la glace sans s'éveiller : (8+4L) PV, frappe (2+L) à chaque tour. Piochez 1 carte.",
 "ops":[["invoque","Dormeur aux bandelettes",[8,4],[2,1]],["pioche",1]],
 "tags":["Donjon","Glace","Pôle +","Invocation","Pioche"],
 "ambiance":"Il dort, les yeux peints ouverts, et il rame dans votre rythme ; ses bandelettes sont mouillées par-dessous.",
 "budget":"14,5 → 32 (cible 16 → 36 ; vérifié)"},
{"id":"DON024-moins7","zone":"DON024","pole":"-","palier":"7","nom":"Les rames rentrées","cout":2,"cible":0,
 "effet":"Les rameurs cessent de ramer et le fjord gèle par le fond : 10 dégâts à tous, la garde ennemie tombe, tous les ennemis hésitent ce tour et perdent 2 d'attaque pour le combat. Le froid coûte 6 PV au héros. Pose Givre. Si Abîme est posée (consommée) : les dormeurs tirent vers le fond, tous les ennemis deviennent vulnérables 3 et subissent encore 10 dégâts.",
 "ops":[["deg","tous",10],["briseGarde","tous"],["hesite","tous"],["affaiblit",2,"tous"],["prixPV",6],["pose","Givre"],
        ["reveil","Abîme",true,[["vulnerable",3,"tous"],["deg","tous",10]]]],
 "tags":["Donjon","Glace","Forme ultime −7","Dégâts","Perce-garde","Contrôle","Affaiblissement","Marque","Prix","Pose Givre","Réveil Abîme"],
 "ambiance":"On rentre les douze rames ; le fjord gèle par le fond, et les dormeurs, en bas, ouvrent la bouche.",
 "budget":"48,5 (+44,5 si Abîme, soit +92 % ; vérifié)"},
{"id":"DON024-plus7","zone":"DON024","pole":"+","palier":"7","nom":"Le rêve des douze rames","cout":3,"cible":0,
 "effet":"Piochez 3 cartes, reprenez la dernière carte de votre défausse, ajoutez 2 mana Glace, +1 de capacité ce tour, et la prochaine carte de zone jouée ce tour a son effet doublé. Un rameur endormi se lève : 10 PV, frappe 4. Le rêve plaît aussi aux ennemis : chacun gagne 3 de garde. Pose Sceau. Si Racine est posée (consommée) : tout l'équipage se lève, un second rameur de 20 PV qui frappe 6, piochez 2 cartes, et vos alliés gagnent 15 de garde.",
 "ops":[["pioche",3],["recup"],["mana","Glace",2],["boost"],["echo"],["invoque","Rameur endormi",10,4],["ennemiGarde",3],["pose","Sceau"],
        ["reveil","Racine",true,[["invoque","Équipage du rêve",20,6],["pioche",2],["garde","allies",15]]]],
 "tags":["Donjon","Glace","Forme ultime +7","Pioche","Récupération","Mana","Boost","Écho","Invocation","Prix","Pose Sceau","Réveil Racine"],
 "ambiance":"Les douze rameurs rêvent la même chose ; au réveil, il y a treize paires de mains sur les rames.",
 "budget":"45 (+39 si Racine, soit +87 % ; vérifié)"}
]
```

---

## Les Cavernes de cristal de Balpak (ASS012 · Assemblée · Cavernes cristallines · Pierre · maya · Cendre / Floraison)

**Background.** Le scribe du conseil affirme que l'assemblée de Balpak siège dans la grande caverne depuis dix-neuf générations, sur des bancs taillés, et que les cristaux du plafond n'ont jamais bougé. La porteuse d'eau affirme que les bancs n'ont jamais été taillés : ils ont poussé, et chaque génération a dû s'asseoir un peu plus haut. Le scribe dit qu'on vote en brûlant de la résine sur les pointes ; elle dit qu'on vote en y versant l'eau du puits. Ils s'accordent sur un seul point. À la fin de chaque séance, les pointes les plus proches sont tournées vers les sièges, et plus près d'un ongle.

*(Le cristal est ici le biome lui-même : il reste au +7, mais il fleurit en calcite opaque, rose de gencive et blanc de sève, jamais translucide.)*

- **Pôle − (Cendre)** : on vote en brûlant ; la cendre bouche les pores du cristal, la croissance s'arrête, et chaque loi se fige dans la pierre, définitive et tiède.
- **Pôle + (Floraison)** : on vote en versant l'eau ; la calcite fleurit partout sans choisir : sur les bancs, dans les plaies des ennemis, sous les ongles des conseillers.

```json
[
{"id":"ASS012-moins","zone":"ASS012","pole":"-","palier":"1-6","nom":"Loi des Cendres","cout":2,"cible":0,
 "effet":"Chaque ennemi brûle de (2+L) au début de ses 2 prochains tours. Piochez 1 carte, puis défaussez 1 carte au hasard : votre bulletin brûle avec les autres.",
 "ops":[["brulure","tous",[2,1],2],["pioche",1],["prixDefausse",1]],
 "tags":["Assemblée","Pierre","Pôle −","Dégâts dans le temps","Pioche","Prix"],
 "ambiance":"On vote en brûlant la résine ; la cendre bouche les pores du cristal, et la pointe la plus proche refroidit.",
 "budget":"14,2 → 36,2 (cible 16 → 36 ; vérifié)"},
{"id":"ASS012-plus","zone":"ASS012","pole":"+","palier":"1-6","nom":"Loi de Floraison","cout":1,"cible":1,
 "effet":"La calcite fleurit dans les plaies de la cible : elle devient vulnérable 2. Tous vos alliés se soignent de (2+2L). Piochez 1 carte. La floraison ne choisit pas : chaque ennemi se soigne de 2.",
 "ops":[["vulnerable",2,"cible"],["soin","allies",[2,2]],["pioche",1],["ennemiSoin",2]],
 "tags":["Assemblée","Pierre","Pôle +","Marque","Soin","Pioche","Prix"],
 "ambiance":"Versez l'eau du puits : la calcite fleurit dans la plaie, rose de gencive, et ne demande pas qui saigne.",
 "budget":"9,6 → 19,6 (cible 10 → 22,5 ; vérifié)"},
{"id":"ASS012-moins7","zone":"ASS012","pole":"-","palier":"7","nom":"Le Siège de cendre","cout":3,"cible":0,
 "effet":"Le conseil vote à votre place : tous les ennemis hésitent ce tour, leur garde tombe, et chacun brûle de 4 au début de ses 3 prochains tours. La prochaine carte de zone jouée ce tour a son effet doublé. Pose Braise. Si Sceau est posée (consommée) : les lois écrites brûlent aussi, chaque ennemi brûle encore de 5 pendant 3 tours et devient vulnérable 1.",
 "ops":[["hesite","tous"],["briseGarde","tous"],["brulure","tous",4,3],["echo"],["pose","Braise"],
        ["reveil","Sceau",true,[["brulure","tous",5,3],["vulnerable",1,"tous"]]]],
 "tags":["Assemblée","Pierre","Forme ultime −7","Contrôle","Perce-garde","Dégâts dans le temps","Écho","Pose Braise","Réveil Sceau"],
 "ambiance":"Le dernier scrutin est sec : les bancs se figent, tièdes, et chacun reste assis là où la loi l'a trouvé.",
 "budget":"49,9 (+40,5 si Sceau, soit +81 % ; vérifié)"},
{"id":"ASS012-plus7","zone":"ASS012","pole":"+","palier":"7","nom":"Le Conseil en fleur","cout":2,"cible":1,
 "effet":"Deux conseillers fleuris se lèvent de leurs sièges : 18 PV, frappent 5 chacun. Tous vos alliés se soignent de 10, la cible devient vulnérable 2, piochez 1 carte. La floraison se nourrit : votre bête la plus faible perd 6 PV. Pose Racine. Si Sang est posée (consommée) : le sang versé fait fleurir le troisième siège, un conseiller de 16 PV qui frappe 5 ; vos alliés se soignent de 10 et tous les ennemis deviennent vulnérables 2.",
 "ops":[["invoque","Conseiller fleuri",18,5],["invoque","Conseiller fleuri",18,5],["soin","allies",10],["vulnerable",2,"cible"],["pioche",1],["prixBete",6],["pose","Racine"],
        ["reveil","Sang",true,[["invoque","Troisième siège",16,5],["soin","allies",10],["vulnerable",2,"tous"]]]],
 "tags":["Assemblée","Pierre","Forme ultime +7","Invocation","Soin","Marque","Pioche","Prix","Pose Racine","Réveil Sang"],
 "ambiance":"Les sièges ont fleuri pendant la séance ; deux conseillers se lèvent, et les pétales poussent dans le sens des veines.",
 "budget":"47 (+40,5 si Sang, soit +86 % ; vérifié)"}
]
```

---

## La Taïga de Chika (RES374 · Ressource · Forêt boréale · Glace · maya)

**Background.** Pendant quarante mille hivers, les sapins de Chika ont poussé sur leurs propres morts : chaque arbre tombé devient une tourbe où le suivant plonge ses racines, et la forêt s'élève d'un doigt par siècle au-dessus de la roche. La neige y tombe droite. Les lichens y marquent le temps en cercles vert-de-bile de la largeur d'une paume. Puis, pendant trois siècles, un peuple a entaillé les troncs pour en tirer une résine qu'il brûlait devant des stèles de bois ; les entailles ont cicatrisé. Sous l'écorce, la résine coule toujours vers elles.

Ressource : pas de pôle, niveaux 1 à 3 (à chaque niveau, la résine monte plus haut sur les troncs, jusqu'aux entailles refermées).

```json
[
{"id":"RES374-gerbe","zone":"RES374","pole":"res","palier":"1-3","nom":"Gerbe de résine","cout":0,"cible":0,
 "effet":"Piochez 1 carte. Le héros gagne (3+2L) de garde : la résine se fige sur lui.",
 "ops":[["pioche",1],["garde","heros",[3,2]]],
 "tags":["Ressource","Gerbe","Glace","Pioche","Garde"],
 "ambiance":"La résine coule vers l'entaille et vous recouvre ; l'arbre ne sait pas qu'il n'y a plus d'entailleur.",
 "budget":"8 / 9,6 / 11,2 (vérifié)"}
]
```

---

## Le Canyon de Zima (RES345 · Ressource · Canyon · Feu · zouloue)

**Background.** À la saison froide, les bouviers de Zima descendent les troupeaux au fond du canyon, où la roche rouge garde la chaleur du jour jusqu'à l'aube. Les femmes plaquent la bouse fraîche sur les parois pour qu'elle sèche et serve au feu ; les enfants comptent les strates avec un bâton, une par génération de bêtes. Le soir, on chante en battant les boucliers de cuir, et les vaches se couchent contre la pierre tiède. Le fond du canyon est plus bas d'une hauteur de vache que l'an dernier. La nuit, il se soulève.

Ressource : pas de pôle, niveaux 1 à 3 (à chaque niveau, la paroi est plus chaude au toucher, et la galette sèche plus vite).

```json
[
{"id":"RES345-gerbe","zone":"RES345","pole":"res","palier":"1-3","nom":"Braise de bouse","cout":0,"cible":1,
 "effet":"Piochez 1 carte. La cible brûle de (1+L) au début de ses 2 prochains tours.",
 "ops":[["pioche",1],["brulure","cible",[1,1],2]],
 "tags":["Ressource","Gerbe","Feu","Pioche","Dégâts dans le temps"],
 "ambiance":"Une galette de bouse sèche, prise à la paroi, encore tiède du flanc du canyon qui respire.",
 "budget":"8 / 10 / 12 (vérifié)"}
]
```

---

## Ce qui change par rapport à la 2.1

1. Fjord de Rames et Balpak : la 2.1 opposait des miroirs (dégâts à tous contre dégâts + soin ; dégâts à tous contre soin à tous) ; ici chaque pôle a sa mécanique propre (contrôle payé en PV / invocation de dormeurs ; brûlure-loi avec défausse / marque et soin qui profite aussi à l'ennemi), tirée du background écrit pour chaque tuile.
2. Les formes ultimes changent de nature (un coup devient un gel de tout le champ, un dormeur devient un rêve qui réécrit la main, une loi devient un scrutin forcé, un soin devient une armée de conseillers fleuris) et s'enchaînent Racine → Sceau → Braise, avec Givre posé et Abîme réveillé pour les autres conteurs.
3. Les Gerbes gardent leur esprit 2.1 mais suivent les budgets 7/9/11 et leur biome (grain, résine, bouse brûlée) ; les 7 secrets de Tezcamixtli deviennent des utilitaires sans dégâts, soin ni garde, dont un (« Les sandales dans les racines ») pose Abîme : une amorce de combo à faire valider par le game design.
